import * as React from 'react';
import { WrappedFieldProps } from 'redux-form';

export interface FileInputState {
    files: File[];
}

declare type FieldProps = React.InputHTMLAttributes<HTMLInputElement> & WrappedFieldProps;

class FileInput extends React.Component<FieldProps, FileInputState> {

    constructor() {
        super();
        this.state = {
            files: []
        };
    }

    handleFilesAdd(e: React.FormEvent<HTMLInputElement>): void {
        const { currentTarget: { files } } = e;
        const { input: { onChange } } = this.props;

        const prevValue: File[] = [...this.state.files];
        const newValue: File[] = Array.from(e.currentTarget.files || []) as File[];
        const value: File[] = [...this.state.files].concat(
            Array.from(files || []) as File[]
        );

        this.setState(
            {
                files: value
            },
            () => onChange(value, newValue, prevValue)
        );
    }

    removeFileFromQueue(index: number): void {
        const { input: { onChange } } = this.props;

        const prevValue: File[] = [...this.state.files];
        const newValue: File[] = [];
        const value: File[] = [...this.state.files];
        value.splice(index, 1);

        this.setState(
            {
                files: value
            },
            () => onChange(value, newValue, prevValue)
        );
    }

    render() {
        const {input: { value }} = this.props;
        return (
            <div className="FileInput">
                <label>
                    Add Images
                    <input
                        multiple={true}
                        type="file"
                        onChange={(e: React.FormEvent<HTMLInputElement>) => this.handleFilesAdd(e)}
                    />
                </label>
                <div className="FileInput--files">
                    {!!value && value.map((v: string, i: number) =>
                        <div className="FileInput--file" key={v}>
                            <span className="FileInput--name">{v}</span>
                            <span
                                className="FileInput--remove"
                                onClick={e => {
                                    this.removeFileFromQueue(i);
                                }}
                            >
                                <i className="fa fa-times" />
                            </span>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default FileInput;