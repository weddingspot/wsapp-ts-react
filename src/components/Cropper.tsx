import 'react-image-crop/lib/ReactCrop.scss';

export interface CropData {
    x: number;
    y: number;
    width: number;
    height: number;
    aspect: boolean;
}

export interface PixelCropData {
    x: number;
    y: number;
    width: number;
    height: number;
}

export default require('react-image-crop');