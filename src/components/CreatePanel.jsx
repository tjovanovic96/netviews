import SideMenu from "./SideMenu"
import "../css/CreatePanel.css"
import Tabs from "./core/Tabs";
import Tab from "./core/Tab";
import LocationTab from "./create-panel-tabs/LocationTab";
import DataTab from "./create-panel-tabs/DataTab";
import PricingTab from "./create-panel-tabs/PricingTab";
import OverviewTab from "./create-panel-tabs/OverviewTab";
import SuccessCreatePanel from "./SuccessCreatePanel";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const CREATE_PANEL = gql`
  mutation createPanel($country: String!, $city: String!, $address: String!, $advertisingType: AdvertisingType, $type: Type, $indoorLocation: String, $longitude: Float, $latitude: Float, $name: String!, $description: String, $dimensions: String, $resolution: String, $files: [Input], $mainImage: Input, $maxSeconds: Int, $cycleSeconds: Int, $periods: [PeriodInput], $price: Float) {
    createPanel(country: $country, city: $city, address: $address, advertisingType: $advertisingType, type: $type, indoorLocation: $indoorLocation, longitude: $longitude, latitude: $latitude, name: $name, description: $description, dimensions: $dimension, resolution: $resolution, files: $files, mainImage: $mainImage, cycleSeconds: $cycleSeconds, periods: $periods, price: $price) {
      id
    }
  }
`;


const CreatePanel = () => {
    const [country, setCountry] = useState("Serbia");
    const [city, setCity] = useState(undefined);
    const [address, setAddress] = useState(undefined);
    const [advertisingType, setAdvertisingType] = useState(undefined);
    const [type, setType] = useState(undefined);
    const [indoorLocation, setIndoorLocation] = useState(undefined);
    const [longitude, setLongitude] = useState(59.95);
    const [latitude, setLatitude] = useState(30.33);

    const [name, setName] = useState(undefined);
    const [description, setDescription] = useState(undefined);
    const [dimensions, setDimensions] = useState(undefined);
    const [resolution, setResolution] = useState(undefined);
    const [files, setFiles] = useState([]);
    const [mainImage, setMainImage] = useState(undefined)
    const [maxSeconds, setMaxSeconds] = useState(0);
    const [cycleSeconds, setCycleSeconds] = useState(0);

    const [periodPrices, setPeriodPrices] = useState([]);
    const [price, setDefaultPrice] = useState(undefined);

    const locationValidation = !!(country && city && address && advertisingType && type && longitude && latitude);
    const dataValidation = !!(name && dimensions && mainImage);
    const pricingValidation = !!(price);

    const [createPanelMutation] = useMutation(CREATE_PANEL);


    const createPanel = async () => {
             try {
                const { data } = await createPanelMutation({
                  variables: {
                    country,
                    city,
                    address,
                    advertisingType,
                    type,
                    indoorLocation,
                    longitude,
                    latitude,
                    name,
                    description,
                    dimensions,
                    resolution,
                    files,
                    mainImage,
                    maxSeconds,
                    cycleSeconds,
                    periodPrices,
                    price,
                  },
                });
          
                console.log(data);
          
              } catch (e) {
         
    }
}
    
    return (
        <div class="create-panel">
            <SideMenu />
            <Tabs>
                <Tab name="Location">
                    <LocationTab nextDisabled={!locationValidation} indoorLocation={indoorLocation} setIndoorLocation={setIndoorLocation} address={address} setAddress={setAddress} country={country} setCountry={setCountry} setCity={setCity} city={city} setAdvertisingType={setAdvertisingType} advertisingType={advertisingType} setType={setType} type={type} setLongitude={setLongitude} setLatitude={setLatitude} longitude={longitude} latitude={latitude}  />
                </Tab>
                <Tab name="Data">
                    <DataTab nextDisabled={!dataValidation} mainImage={mainImage} setMainImage={setMainImage} maxSeconds={maxSeconds} setMaxSeconds={setMaxSeconds} cycleSeconds={cycleSeconds} setCycleSeconds={setCycleSeconds} setResolution={setResolution} setDimensions={setDimensions} dimensions={dimensions} resolution={resolution} advertisingType={advertisingType} setName={setName} name={name} setDescription={setDescription} description={description} files={files} setFiles={setFiles} />
                </Tab>
                <Tab name="Pricing">
                    <PricingTab nextDisabled={!pricingValidation} periodPrices={periodPrices} setPeriodPrices={setPeriodPrices} setDefaultPrice={setDefaultPrice} price={price} />
                </Tab>
                <Tab name="Overview">
                    <OverviewTab completeCallback={createPanel} indoorLocation={indoorLocation} dimensions={dimensions} resolution={resolution} files={files} mainImage={mainImage} maxSeconds={maxSeconds} cycleSeconds={cycleSeconds} country={country} city={city} address={address} advertisingType={advertisingType} type={type} longitude={longitude} latitude={latitude} name={name} description={description} periodPrices={periodPrices} price={price} />
                </Tab>
                <Tab name="Success">
                    <SuccessCreatePanel />
                </Tab>
            </Tabs>
        </div>
    )
}

export default CreatePanel;