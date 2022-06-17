import "../../css/DataTab.css"
import "../../css/Common.css";
import Input from "../core/Input";
import TextArea from "../core/TextArea";
import ImageDragAndDrop from "../image-upload/ImageDragAndDrop";

const DataTab = (props) => {
    const { mainImage, setMainImage, maxSeconds, setMaxSeconds, cycleSeconds, setCycleSeconds, setName, setDescription, name, description, dimensions, setDimensions, resolution, setResolution, advertisingType } = props;
    /** TODO: add fields for dimensions and resolution */
    
    return (
        <div class="data-tab">
            <div class="data-tab-left">
                <Input label="Name of panel" type="text" setFieldValue={setName} value={name} />
                <Input label="Dimensions" type="text" placeholder="widthXheight" value={dimensions} setFieldValue={setDimensions} />
                {advertisingType === "DIGITAL" &&  <Input label="Resolution" type="text" placeholder="widthXheight" value={resolution} setFieldValue={setResolution} />}
                <TextArea label="Description" type="text" setFieldValue={setDescription} value={description} />
                {advertisingType === "DIGITAL" && (
                    <>
                    <Input label="Maximum number of seconds for a commercial" type="number" setFieldValue={setMaxSeconds} value={maxSeconds} />
                    <Input label="Cycle in seconds" type="number" setFieldValue={setCycleSeconds} value={cycleSeconds} />
                    </>
                )}
            </div>
            <ImageDragAndDrop files={props.files} setFiles={props.setFiles} mainImage={mainImage} setMainImage={setMainImage} />
        </div>
    )
}

export default DataTab;