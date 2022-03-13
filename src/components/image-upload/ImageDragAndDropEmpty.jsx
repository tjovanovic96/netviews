import { AiOutlineCloudUpload } from "react-icons/ai"
import "../../css/ImageUpload.css"
import { useDropzone } from 'react-dropzone';

const ImageDragAndDropEmpty = (props) => {

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            console.log('USAO')
            props.addFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });

    return (
        <div class='data-tab-right data-tab-right-centered'>
            <div class='image-upload-container page-size' {...getRootProps?.({ className: 'dropzone' })}>
                <input {...getInputProps?.()} />
                <div className="image-upload-container page-size">
                    <AiOutlineCloudUpload className="image-upload-icon" />
                    <h1>Drag and drop images here to upload</h1>
                </div>
            </div>
        </div>
    )
}

export default ImageDragAndDropEmpty;
