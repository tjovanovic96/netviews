import SideMenu from "./SideMenu"
import "../css/CreatePanel.css"
import Tabs from "./core/Tabs";
import Tab from "./core/Tab";
import LocationTab from "./create-panel-tabs/LocationTab";
import DataTab from "./create-panel-tabs/DataTab";


const CreatePanel = () => {
    return (
        <div class="create-panel">
            <SideMenu />
            <Tabs>
                <Tab name="Location">
                    <LocationTab />
                </Tab>
                <Tab name="Data">
                    <DataTab />
                </Tab>
                <Tab name="Pricing">
                    <span>cao</span>
                </Tab>
                <Tab name="Overview">
                    <span>cao</span>
                </Tab>
                <Tab name="Success">
                    <span>cao</span>
                </Tab>
            </Tabs>
        </div>
    )
}

export default CreatePanel;