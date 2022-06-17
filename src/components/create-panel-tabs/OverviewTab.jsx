import "../../css/OverviewTab.css"
import "../../css/Common.css";
import "../../css/core/Input.css"
import GoogleMapReact from 'google-map-react';
import ImageDragAndDrop from "../image-upload/ImageDragAndDrop";

const OverviewTab = (props) => {
    const {maxSeconds, cycleSeconds, country, city, name, description, advertisingType, type, price, periodPrices, address, indoorLocation, dimensions, resolution, files, mainImage} = props;
    return (
        <>
        <div class="overview-tab">
            <div class="overview-elem-col">
                <div class="overview-elem-header">
                    Data
                </div>
                <div class="overview-elem">
                <label for="select-id" className="select-label">Country</label>
                <span class="overview-span">{country}</span>
                </div>
                <div class="overview-elem">
                <label for="select-id" className="select-label">City</label>
                <span class="overview-span">{city}</span>
                </div>
                <div class="overview-elem">
                <label for="select-id" className="select-label">Address</label>
                <span class="overview-span">{address}</span>
                </div>
                <div class="overview-elem">
                <label for="select-id" className="select-label">Name</label>
                <span class="overview-span">{name}</span>
                </div>
                <div class="overview-elem">
                <label for="select-id" className="select-label">Description</label>
                <div class="overview-span">{description}</div>
                </div>
                <div class="overview-elem">
                <label for="select-id" className="select-label">Advertising type</label>
                <span class="overview-span">{advertisingType}</span>
                </div>
                <div class="overview-elem">
                <label for="select-id" className="select-label">Type</label>
                <span class="overview-span">{type}</span>
                </div>
                {indoorLocation && (
                                    <div class="overview-elem">
                                    <label for="select-id" className="select-label">Indoor location</label>
                                    <span class="overview-span">{indoorLocation}</span>
                                    </div>
                )}
                <div class="overview-elem">
                <label for="select-id" className="select-label">Dimensions</label>
                <span class="overview-span">{dimensions}</span>
                </div>
                {!!resolution && (
                                    <div class="overview-elem">
                                    <label for="select-id" className="select-label">Resolution</label>
                                    <span class="overview-span">{resolution}</span>
                                    </div>
                )}
            {!!maxSeconds && (
                                    <div class="overview-elem">
                                    <label for="select-id" className="select-label">Maximum commercial duration in seconds</label>
                                    <span class="overview-span">{maxSeconds}</span>
                                    </div>
                )}
                            {!!cycleSeconds && (
                                <div class="overview-elem">
                                <label for="select-id" className="select-label">Cycle duration in seconds</label>
                                <span class="overview-span">{cycleSeconds}</span>
                                </div>
            )}
        </div>
            <div class="overview-elem-col">
                <div class="overview-elem-header">
                    Pricing
                </div>
                <div class="overview-elem">
                <label for="select-id" className="select-label">Default price for all hours:</label>
    <span class="overview-span">{price}$</span>
                </div>
                <div class="overview-elem-header">
                    Specific hours periods prices
                </div>
                {periodPrices.map(period => (
                <div class="overview-elem-row">
                <div>
                <label for="select-id" className="select-label">Week day:</label>
                <span class="overview-span">{period.day}</span>
                </div>
                <div>
                <label for="select-id" className="select-label">Price:</label>
                <span class="overview-span">{period.price}$</span>
                </div>
            </div>
                ))}
            </div>
            <div class="overview-elem-col">
            <GoogleMapReact bootstrapURLKeys={{}}
                center={{lat: 30.00, lng: 35.00}}
                zoom={11} />
            </div>
        </div>
        <div>
            <ImageDragAndDrop files={files} mainImage={mainImage} disabled={true} />
        </div>
        </>
    )
}

export default OverviewTab;