import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai"
import {BiArrowToTop} from 'react-icons/bi';
import "../../css/ImageUpload.css"
import { useDropzone } from 'react-dropzone';

const imgUrl = 'https://vignette.wikia.nocookie.net/naruto/images/d/dd/Naruto_Uzumaki%21%21.png';


const ImageDragAndDropWithItems = (props) => {
    const {mainImage, setMainImage, disabled} = props;

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            props.addFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });

    return (
        <div class='data-tab-right'>
            <div class='image-upload-row'>
                {props.files?.map(file =>
                    <div class='image-upload-column'>
                        <div class="image-area">
                        <div class="imageBox">
                            <div class="imageInn">
                                <img class={file.preview === mainImage?.preview ? "img-bordered": ""} src={file.preview} alt="Preview" />
                            </div>
                            {!disabled && <div class="hoverImg">
                                <a onClick={() => setMainImage(file)}><BiArrowToTop className="hoverImgIcon" /></a>
                            </div>}
                        </div>
                            {!disabled && <a class="remove-image" onClick={() => props.removeFile(file)} style={{ display: 'inline' }}>&#215;</a>}
                        </div>
                    </div>)}

                {props.files.length < 9 && !disabled && <div class='image-upload-column' {...getRootProps?.({ className: 'dropzone' })}>
                    <input {...getInputProps?.()} />
                    <div className="image-upload-container column-size">
                        <AiOutlineCloudUpload className="image-upload-icon" />
                        <h1>Drag and drop images here to upload</h1>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default ImageDragAndDropWithItems;
