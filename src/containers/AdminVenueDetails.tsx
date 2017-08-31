import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as types from '../types';
import { loadVendorImages, VendorImagesAction } from '../actions/vendorImages';
import { VendorImagesList } from '../data';
import axios from 'axios';
import { reset } from 'redux-form';

import VenueDetails from '../components/admin/VenueDetails';

export interface Props {
    load: (a: number) => Promise<VendorImagesList>;
    resetImageUploadForm: () => void;
    changeImageData: (id: number, data: {[key: string]: string | boolean | number}) => void;
    venueId: number;
    images: Array<types.VendorImage>;
    connectionError: string;
}

export interface OwnProps {
    venueId: number;
}

export interface VendorImagePostData {
    id: number;
    cropCoord: {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
    };
    order: number;
    photo_credit: string;
    description: string;
    is_event_image: boolean;
    is_wedding_image: boolean;
    photo_source: string;
    provided_by_venue: boolean;
}

export interface State {
    isUploadingImages: boolean;
    isUploadModalOpen: boolean;
    markedImages: number[];
    selectedImage?: {
        id: number;
        path: string
    };
    imagesUpdateData: {[key: number]: VendorImagePostData};
    uploadImages: Array<File>;
}

const mapStateToProps = (state: types.StoreState, ownProps: OwnProps) => ({
    images: state.vendorImages,
    connectionError: state.errors.connectionError,
    venueId: ownProps.venueId,
});

const mapDispatchToProps = (dispatch: Dispatch<VendorImagesAction>) => ({
    load: (venueId: number) => dispatch(loadVendorImages(venueId)),
    resetImageUploadForm: (): void => {
        dispatch(reset('image_upload'));
    }
});

class AdminVenueDetails extends React.Component<Props, State> {
    constructor() {
        super();
        this.state = {
            isUploadingImages: false,
            imagesUpdateData: [],
            isUploadModalOpen: false,
            uploadImages: [],
            markedImages: []
        };
    }

    componentDidMount() {
        const { venueId, load } = this.props;
        load(venueId);
    }

    handleImageSubmit({ images }: {images: File[]}) {
        this.setState({
            isUploadingImages: true
        });

        const { resetImageUploadForm, load, venueId } = this.props;
        const formData = new FormData();

        if (images) {
            images.map(img => formData.append('add_images', img));
        }

        formData.append('venue_id', String(venueId));

        axios.post(
            'http://local.wedding-spot.com:9000/api/v1/vendors/' + this.props.venueId + '/images/?format=json',
            formData
        ).then(r => {
            resetImageUploadForm();
            load(venueId);
            this.setState({
                isUploadingImages: false,
                isUploadModalOpen: false
            });
        });
    }

    handleImageCrop(imageId: number, pixelCrop: {x: number, y: number, width: number, height: number}): void {
        const { imagesUpdateData } = this.state;

        const updateImages = Object.assign({}, JSON.parse(JSON.stringify(imagesUpdateData)));

        const x1 = pixelCrop.x;
        const y1 = pixelCrop.y;

        const x2 = pixelCrop.x + pixelCrop.width;
        const y2 = pixelCrop.y + pixelCrop.height;

        if (updateImages[imageId] === undefined) {
            updateImages[imageId] = {id: imageId};
        }

        Object.assign(updateImages[imageId], {crop_coords: {
                x1,
                y1,
                x2,
                y2,
        }});

        this.setState({
            imagesUpdateData: updateImages
        });
    }

    selectImage(id: number, path: string) {
        this.setState({
            selectedImage: {
                id,
                path
            }
        });
    }

    changeImageData(id: number, data: {[key: string]: string | number | boolean}): void {
        const { imagesUpdateData } = this.state;
        const updateImages = Object.assign({}, JSON.parse(JSON.stringify(imagesUpdateData)));
        const key = String(id);
        if (updateImages[key] === undefined) {
            updateImages[key] = {id: id};
        }

        Object.assign(updateImages[key], data);
        this.setState({
            imagesUpdateData: updateImages
        });
    }

    submitChanges() {
        const { venueId, load } = this.props;
        const { imagesUpdateData } = this.state;

        this.setState({
            isUploadingImages: true
        });

        axios.post(
            'http://local.wedding-spot.com:9000/api/v1/vendors/' + venueId + '/images/?format=json',
            {
                venue_id: venueId,
                images: Object.keys(imagesUpdateData).map(k => imagesUpdateData[k])
            }
        ).then(r => {
            load(venueId);
            this.setState({
                isUploadingImages: false,
                imagesUpdateData: {},
                selectedImage: undefined
            });
        });
    }

    toggleMark(imageId: number): void {
        const markedImages = this.state.markedImages.slice();
        const index = markedImages.indexOf(imageId);
        if (index === -1) {
            markedImages.push(imageId);
        } else {
            markedImages.splice(index, 1);
        }
        this.setState({ markedImages });
    }

    removeMarkedImages(): void {
        const { markedImages } = this.state;
        const { venueId, load } = this.props;

        if (!markedImages.length) {
            return;
        }

        this.setState({
            isUploadingImages: true
        });
        axios.post(
            'http://local.wedding-spot.com:9000/api/v1/vendors/' + venueId + '/images/?format=json',
            {
                venue_id: venueId,
                remove_images: markedImages
            }
        ).then(r => {
            load(venueId);
            this.setState({
                isUploadingImages: false,
                imagesUpdateData: {},
                markedImages: [],
                selectedImage: undefined
            });
        });
    }

    render() {
        const { images } = this.props;
        const { imagesUpdateData, markedImages } = this.state;
        const imagesUpdated = images.map(
            img => Object.assign(img, imagesUpdateData[img.id], {marked: markedImages.indexOf(img.id) !== -1}
        ));

        return (
            <VenueDetails
                markedImages={this.state.markedImages}
                removeMarkedImages={() => this.removeMarkedImages()}
                toggleMark={(imageId) => this.toggleMark(imageId)}
                openUploadModal={() => this.setState({isUploadModalOpen: true})}
                closeUploadModal={() => this.setState({isUploadModalOpen: false})}
                isUploadModalOpen={this.state.isUploadModalOpen}
                isImagesDataChanged={Object.keys(imagesUpdateData).length > 0}
                submitChanges={() => this.submitChanges()}
                changeImageData={(id, data) => this.changeImageData(id, data)}
                selectImage={(id, path) => this.selectImage(id, path)}
                selectedImage={this.state.selectedImage}
                handleImageCrop={(crop, pixelCrop) => this.handleImageCrop(crop, pixelCrop)}
                isUploadingImages={this.state.isUploadingImages}
                error={this.props.connectionError}
                isBussy={!!this.props.connectionError && !this.props.images}
                venueId={this.props.venueId}
                onImageUploadSubmit={data => this.handleImageSubmit(data)}
                images={imagesUpdated}
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminVenueDetails);