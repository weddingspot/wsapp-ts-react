import * as React from 'react';

import FileInput from './FileInput';
import Loader from './Loader';
import { reduxForm, Field, SubmitHandler } from 'redux-form';

export interface FormProps {
    handleSubmit: SubmitHandler<FormData>;
    closeModal: () => void;
    error: string;
    submitting: boolean;
    isUploadingImages: boolean;
}

function ImageUploadForm({isUploadingImages, handleSubmit, error, submitting, closeModal}: FormProps) {
    return (

            <div className="Modal" >
                <div className="Modal--body">
                    <a
                        href="#"
                        className="Modal--close-link"
                        onClick={(e: React.SyntheticEvent<HTMLAnchorElement>) => {
                            e.preventDefault();
                            closeModal();
                        }}
                    >
                        <i className="fa fa-times" />
                    </a>
                    <form onSubmit={handleSubmit} className="VenueImages--form">
                      {isUploadingImages && <Loader />}
                        <Field
                            component={FileInput}
                            name="images"
                            format={(value: FileList, name: string): Array<string> | undefined => {
                                if (!!value) {
                                    return Array.from(value).map(v => v.name);
                                }
                                return undefined;
                            }}
                            normalize={(value: FileList, name: string): File[] => {
                                return Array.from(value);
                            }}
                        />
                        <div className="mb-15" />
                        <button className="Button Button--pink">Submit</button>
                    </form>
                </div>
            </div>
    );
}

export interface ImageUploadFormData extends FormData {
    images: File[];
}

export default reduxForm<ImageUploadFormData, {isUploadingImages: boolean, closeModal: () => void}>({
    form: 'image_upload',
})(ImageUploadForm);
