import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import ImageDragAndDropWithItems from './ImageDragAndDropWithItems'
import ImageDragAndDropEmpty from './ImageDragAndDropEmpty'

function ImageDragAndDrop(props) {
  const [files, setFiles] = useState([]);
  const updateFiles = (newFiles) => setFiles(newFiles);
  const addFiles = (newFiles) => setFiles(files.concat(newFiles));
  const removeFile = (file) => {
    URL.revokeObjectURL(file.preview);
    setFiles(files.filter(item => item.preview !== file.preview));
  }
  console.log(files);

  return (
    files.length > 0 
    ? <ImageDragAndDropWithItems addFiles={addFiles} removeFile={removeFile} files={files}/> 
    : <ImageDragAndDropEmpty addFiles={addFiles} />
  );
}

export default ImageDragAndDrop;
