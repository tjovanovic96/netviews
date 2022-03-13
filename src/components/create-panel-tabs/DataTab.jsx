import "../../css/DataTab.css"
import "../../css/Common.css";
import Input from "../core/Input";
import Select from "../core/Select";
import TextArea from "../core/TextArea";
import ImageDragAndDrop from "../image-upload/ImageDragAndDrop";
import ImageDragAndDropEmpty from "../image-upload/ImageDragAndDropEmpty";
import ImageDragAndDropWithItems from "../image-upload/ImageDragAndDropWithItems";

const DataTab = () => {
    return (
        <div class="data-tab">
            <div class="data-tab-left">
                <Input label="Name of panel" type="text" />
                <Select label="Subtype" values={["LARGE", "MEDIUM", "SMALL"]} />
                <TextArea label="Description" type="text"/>
            </div>
            <ImageDragAndDrop />
        </div>
    )
}

export default DataTab;