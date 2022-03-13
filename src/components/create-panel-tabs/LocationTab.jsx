import { Button } from "react-bootstrap";
import "../../css/LocationTab.css"
import "../../css/Common.css";
import Input from "../core/Input";
import Select from "../core/Select";
import GoogleMapReact from 'google-map-react';

const LocationTab = () => {
    return (
        <div class="location-tab">
            <div class="location-tab-left">
                <Select label="Country" values={["Serbia", "United Kingdom"]} />
                <Input label="City" type="text" />
                <Select label="Advertising Type" values={["DIGITAL", "STATIC"]} />
                <Select label="Type" values={["OUTDOOR", "INDOOR"]} />
                <Input label="Longitude" type="float" />
                <Input label="Latitude" type="float" />
                <button className="white-button">Apply coordinates</button>
            </div>
            <div class="location-tab-right">
                <GoogleMapReact bootstrapURLKeys={{}}
                defaultCenter={{lat: 59.95, lng: 30.33}}
                defaultZoom={11} />
            </div>
        </div>
    )
}

export default LocationTab;