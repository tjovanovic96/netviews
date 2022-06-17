import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import ImageDragAndDropWithItems from './ImageDragAndDropWithItems'
import ImageDragAndDropEmpty from './ImageDragAndDropEmpty'
import { useCallback } from 'react';

function ImageDragAndDrop(props) {
  const { files, setFiles, setMainImage, mainImage, disabled = false} = props;
  const updateFiles = (newFiles) => setFiles(newFiles);

  const addFiles = useCallback((newFiles) => {
    if(files.length === 0) {
      setMainImage(newFiles[0]);
    }
    setFiles(files.concat(newFiles))
  }, [files, setFiles, setMainImage]);

  const removeFile = (file) => {
    URL.revokeObjectURL(file.preview);
    setFiles(files.filter(item => item.preview !== file.preview));
  }
  console.log(files);

  return (
    files.length > 0 
    ? <ImageDragAndDropWithItems addFiles={addFiles} disabled={disabled} removeFile={removeFile} files={files} setMainImage={setMainImage} mainImage={mainImage} /> 
    : <ImageDragAndDropEmpty addFiles={addFiles} disabled={disabled} />
  );
}

export default ImageDragAndDrop;
