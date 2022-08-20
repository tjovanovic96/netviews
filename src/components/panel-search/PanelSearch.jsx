import "../../css/PanelSearch.css"
import CircleImageWithText from "../core/CircleImageWithText";
import Select from "../core/Select";

const PanelSearch = (props) => {
    return (
        <div class="panel-search-wrapper">
            <div class="panel-search-header-wrapper">
                <div class="panel-search-filters">
                    <Select values={["Serbia", "United Kingdom"]} small/>
                    <Select values={["Belgrade", "London"]} small/>
                    <Select values={["", "OUTDOOR", "INDOOR"]} small/>
                    <Select type="text" values={["", "RESTAURANT", "COFFEE HOUSE", "HOTEL", "SPORT BARS", "POST OFFICE"]} small/>
                </div>
                <div class="panel-search-right">
                    
                </div>
            </div>
            <div class="panel-search-body-wrapper">
                <div class="panel-search-left">
                <CircleImageWithText imgUrl="https://st.depositphotos.com/1004061/2699/i/950/depositphotos_26992121-stock-photo-london-the-uk-red-bus.jpg" isAvailable={true} address="Westminster Road 878 Ldn" panelName="Panel u Londonu" />
                <CircleImageWithText imgUrl="https://www.aparisguide.com/eiffeltower/eiffel-tower003.jpg" isAvailable={false} address="la Rue de quelque chose 18" panelName="Panel u Parizu" />
                <CircleImageWithText imgUrl="https://upload.wikimedia.org/wikipedia/commons/7/70/Ginza_at_Night%2C_Tokyo.jpg" isAvailable={true} address="Sakura Avenue 12" panelName="Panel u Tokiju" />
                </div>
                <div class="panel-search-right">
                    
                </div>
            </div>
        </div>)
}

export default PanelSearch;
