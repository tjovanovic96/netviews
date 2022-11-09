import "../../css/core/CircleImageWithText.css"

const CircleImageWithText = (props) => 
    <div class="circle-image-wrapper-with-indicator">
        <div class="circle-image-wrapper">
            <img class="circle-image" src={props.imgUrl} alt="Avatar"/>
            <div class="circle-image-text-wrapper">
                <h5>{props.address}</h5>
                <p>{props.panelName}</p>
            </div>
        </div>
        {props.isAvailable && 
        <div class="circle-with-image-free-indicator"></div>
        }
    </div>


export default CircleImageWithText;
