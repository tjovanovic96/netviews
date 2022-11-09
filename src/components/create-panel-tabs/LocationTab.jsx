import "../../css/LocationTab.css"
import "../../css/Common.css";
import Input from "../core/Input";
import Select from "../core/Select";
import { useState } from "react";
import { useCallback } from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import {compose, withProps} from "recompose"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 44.786568, lng: 20.448921 }}
    >
        {props.isMarkerShown && <Marker position={{ lat: 44.786568, lng: 20.448921 }} />}
    </GoogleMap>
))

const LocationTab = (props) => {
    const { setIndoorLocation, indoorLocation, setCountry, country, setCity, city, setAddress, address, advertisingType, setAdvertisingType, setType, type, setLongitude, setLatitude, longitude, latitude } = props;

    const applyCoordinates = useCallback(() => {
        setCalculatedLatitude(latitude);
        setCalculatedLongitude(longitude);
    }, [latitude, longitude]);

    const [calculatedLongitude, setCalculatedLongitude] = useState(59.95);
    const [calculatedLatitude, setCalculatedLatitude] = useState(30.33);
    console.log(calculatedLatitude);
    console.log(calculatedLongitude);

    const AnyReactComponent = ({ text }) => <div>{text}</div>;

    return (
        <div class="location-tab">
            <div class="location-tab-left">
                <Select label="Country" values={["Serbia", "United Kingdom"]} setFieldValue={setCountry} value={country} />
                <Input label="City" type="text" setFieldValue={setCity} value={city} />
                <Input label="Address" type="text" setFieldValue={setAddress} value={address} />
                <Select label="Advertising Type" values={["", "DIGITAL", "STATIC"]} setFieldValue={setAdvertisingType} value={advertisingType} />
                <Select label="Type" values={["", "OUTDOOR", "INDOOR"]} setFieldValue={setType} value={type} />
                {type === "INDOOR" && <Select label="Indoor location" type="text" values={["", "RESTAURANT", "COFFEE HOUSE", "HOTEL", "SPORT BARS", "POST OFFICE"]} setFieldValue={setIndoorLocation} value={indoorLocation} />}
                <Input label="Longitude" type="float" value={longitude} setFieldValue={setLongitude} />
                <Input label="Latitude" type="float" value={latitude} setFieldValue={setLatitude} />
                <button className="white-button ml-s" onClick={applyCoordinates}>Apply coordinates</button>
            </div>
            <div class="location-tab-right">
                <MyMapComponent
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        </div>
    )
}

export default LocationTab;