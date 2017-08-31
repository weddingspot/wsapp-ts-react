import * as React from 'react';

import { VendorImage } from '../../types';
import Loader from '../Loader';
import ImageUploadForm from '../ImageUploadForm';
import Cropper, { CropData, PixelCropData } from '../Cropper';

export interface EditableVendorImage extends VendorImage {
    marked: boolean;
}

export interface Props {
    onImageUploadSubmit: (data: {images: File[]}) => void;
    handleImageCrop: (id: number, pixelCrop: PixelCropData) => void;
    selectImage: (id: number, path: string) => void;
    changeImageData: (id: number, data: {[key: string]: string | boolean | number}) => void;
    submitChanges: () => void;
    openUploadModal: () => void;
    removeMarkedImages: () => void;
    toggleMark: (imageId: number) => void;
    closeUploadModal: () => void;
    markedImages: number[];
    isUploadModalOpen: boolean;
    images: Array<EditableVendorImage>;
    venueId: number;
    error: string;
    isImagesDataChanged: boolean;
    isBussy: boolean;

    selectedImage?: {
        id: number;
        path: string;
    };
    isUploadingImages: boolean;
}

export function VenueDetails(
    {
        isBussy,
        images,
        onImageUploadSubmit,
        venueId,
        handleImageCrop,
        error,
        openUploadModal,
        closeUploadModal,
        removeMarkedImages,
        toggleMark,
        markedImages,
        isUploadModalOpen,
        isImagesDataChanged,
        isUploadingImages,
        selectedImage,
        selectImage,
        submitChanges,
        changeImageData,
    }: Props
) {
    const serverAddress: string = 'http://local.wedding-spot.com:9000/static/';

    const replaceImage = (imgSrc: string) => {
        return (e: React.SyntheticEvent<HTMLImageElement>) => {
            e.preventDefault();
            e.currentTarget.src = imgSrc;
        };
    };

    const isImageSelected = (id: number) => selectedImage && selectedImage.id === id;
    const isAnyMarked = markedImages.length > 0;

    return (
        <div className="AdminVenueDetails">
            <div className="VenueImages">

                {(isBussy || isUploadingImages) && <Loader />}

                {error ?

                    <div className="Error Error--block">
                        <i className="fa fa-times" /> {error}</div>

                    :

                    <div className="VenueImages--container">
                        <h3 className="VenueImages--headline">Venue Images</h3>
                        {isUploadModalOpen &&
                            <ImageUploadForm
                                closeModal={() => closeUploadModal()}
                                isUploadingImages={isUploadingImages}
                                onSubmit={onImageUploadSubmit}
                            />
                        }

                        <div className="mb-15 mt-15">
                            <button
                                className={'Button  mr-15' + (isImagesDataChanged ? ' Button--pink' : '')}
                                disabled={!isImagesDataChanged}
                                onClick={(e: React.SyntheticEvent<HTMLButtonElement>) => submitChanges()}
                            >
                                Save Changes
                            </button>

                            <button
                                className={'Button' + (isAnyMarked ? ' Button--pink' : '')}
                                disabled={!isAnyMarked}
                                onClick={(e: React.SyntheticEvent<HTMLButtonElement>) => removeMarkedImages()}
                            >
                                Delete Marked Images
                            </button>

                            <button
                                className="Button Button--pink fl-r"
                                onClick={(e: React.SyntheticEvent<HTMLButtonElement>) => {
                                    e.preventDefault();
                                    openUploadModal();
                                }}
                            >
                                <i className="fa fa-plus" /> Upload New Images
                            </button>
                        </div>

                        <div className="VenueImages--wrapper">

                        {images.map(
                            ({
                                id,
                                order,
                                image,
                                photo_source,
                                description,
                                marked,
                                crop_image,
                                portrait_image,
                                is_wedding_image,
                                provided_by_venue,
                                photo_credit
                            }: EditableVendorImage) => (

                            <div
                                key={id}
                                className={
                                    'VenueImages--image' + (
                                        isImageSelected(id) ? ' VenueImages--image__active' : ''
                                    ) + (
                                        marked ? ' VenueImages--image__marked' : ''
                                    )
                                }
                            >
                                <a
                                    href="#"
                                    className="VenueImages--order"
                                    onClick={(e: React.SyntheticEvent<HTMLAnchorElement>) => {
                                        e.preventDefault();
                                        toggleMark(id);
                                    }}
                                >
                                    <i className="fa fa-check-square-o fa-fw" /> {marked ? 'unselect' : 'select'}
                                </a>
                                <div className="clearfix">
                                    <div className="VenueImages--preview" >
                                        <div className="VenueImages--original-image">
                                            <span>original</span>
                                            <img
                                                src={serverAddress + crop_image}
                                                alt=""
                                                onError={replaceImage('http://via.placeholder.com/350x150')}
                                            />
                                        </div>
                                        <div className="VenueImages--cropped-image">
                                            <span>cropped</span>
                                            <img
                                                src={serverAddress + (portrait_image || image)}
                                                alt=""
                                                onError={replaceImage('http://via.placeholder.com/350x150')}
                                            />
                                        </div>
                                    </div>

                                    <div className="VenueImages--info">
                                        <ul>
                                            <li><label className="Label">Order: </label>
                                                <input
                                                    type="number"
                                                    className="TextInput"
                                                    defaultValue={order}
                                                    onChange={(e: React.SyntheticEvent<HTMLInputElement>) => {
                                                        changeImageData(id, {
                                                            order: e.currentTarget.value
                                                        });
                                                    }}
                                                />
                                            </li>
                                            <li><label className="Label">Credit: </label>
                                                <input
                                                    className="TextInput"
                                                    type="text"
                                                    defaultValue={photo_credit}
                                                    onChange={(e: React.SyntheticEvent<HTMLInputElement>) => {
                                                        changeImageData(id, {photo_credit: e.currentTarget.value});
                                                    }}
                                                />
                                            </li>
                                            <li><label className="Label">Source: </label>
                                                <input
                                                    className="TextInput"
                                                    type="text"
                                                    defaultValue={photo_source}
                                                    onChange={(e: React.SyntheticEvent<HTMLInputElement>) => {
                                                        changeImageData(id, {photo_source: e.currentTarget.value});
                                                    }}
                                                />
                                            </li>

                                            <li>
                                                <button
                                                    className="Button mt-20"
                                                    onClick={(e: React.SyntheticEvent<HTMLButtonElement>) => {
                                                        e.preventDefault();
                                                        selectImage(id, serverAddress + crop_image);
                                                    }}
                                                >
                                                    Crop Image
                                                </button>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li><label >Is wedding image: </label>
                                                <input
                                                    type="checkbox"
                                                    checked={is_wedding_image}
                                                    onChange={(e: React.SyntheticEvent<HTMLInputElement>) => {
                                                        changeImageData(id, {
                                                            is_wedding_image: e.currentTarget.checked
                                                        });
                                                    }}
                                                />
                                            </li>
                                            <li><label >Provided by venue:  </label>
                                                <input
                                                    type="checkbox"
                                                    checked={provided_by_venue}
                                                    onChange={(e: React.SyntheticEvent<HTMLInputElement>) => {
                                                        changeImageData(id, {
                                                            provided_by_venue: e.currentTarget.checked
                                                        });
                                                    }}
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {isImageSelected(id) &&
                                    <div className="VenueImages--crop-wrapper mt-20">
                                        <Cropper
                                            src={serverAddress + crop_image}
                                            onComplete={
                                                (_: CropData, pixelCrop: PixelCropData) => {
                                                    handleImageCrop(id, pixelCrop);
                                                }
                                            }
                                        />
                                    </div>
                                }
                            </div>
                        ))}
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default VenueDetails;