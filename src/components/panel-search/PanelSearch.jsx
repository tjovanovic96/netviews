import React, { useState } from 'react'
import "../../css/PanelSearch.css"
import CircleImageWithText from "../core/CircleImageWithText";
import Select from "../core/Select";
import Pagination from '../core/Pagination';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 51.507351, lng: -0.127758 }}
    >
        {panels.map((panel) => {
            return <Marker key={panel.id} position={{ lat: panel.lat, lng: panel.lng }} />
        }
        )}
    </GoogleMap>
))

const PanelSearch = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = panels.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div class="panel-search-wrapper">
            <div class="panel-search-header-wrapper">
                <div class="panel-search-filters">
                    <Select values={["Serbia", "United Kingdom"]} small />
                    <Select values={["Belgrade", "London"]} small />
                    <Select values={["", "OUTDOOR", "INDOOR"]} small />
                    <Select type="text" values={["", "RESTAURANT", "COFFEE HOUSE", "HOTEL", "SPORT BARS", "POST OFFICE"]} small />
                </div>
                <div class="panel-search-right">

                </div>
            </div>
            <div class="panel-search-body-wrapper">
                <div class="panel-search-left">
                    {currentPosts.map(panel => {
                        return <CircleImageWithText imgUrl={panel.imgUrl} isAvailable={panel.isAvailable} address={panel.address} panelName={panel.panelName} />
                    })}
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={panels.length}
                        paginate={paginate}
                    />
                </div>
                <div class="panel-search-right">
                    <MyMapComponent
                        isMarkerShown
                        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDx_ilNDGwwum-bg0408T4dF5LNsCidu9c"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `100%` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                </div>
            </div>
        </div>)
}

const panels = [
    {
        id: 1,
        imgUrl: "https://st.depositphotos.com/1004061/2699/i/950/depositphotos_26992121-stock-photo-london-the-uk-red-bus.jpg",
        isAvailable: true,
        address: "Westminster Road 878 Ldn",
        panelName: "Panel u Londonu",
        lat: 51.507351,
        lng: -0.127758
    },
    {
        id: 2,
        imgUrl: "https://www.aparisguide.com/eiffeltower/eiffel-tower003.jpg",
        isAvailable: false,
        address: "la Rue de quelque chose 18",
        panelName: "Panel u Parizu",
        lat: 48.864716,
        lng: 2.349014
    },
    {
        id: 3,
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/7/70/Ginza_at_Night%2C_Tokyo.jpg",
        isAvailable: true,
        address: "Sakura Avenue 12",
        panelName: "Panel u Tokiju",
        lat: 35.652832,
        lng: 139.839478
    },
    {
        id: 4,
        imgUrl: "https://www.travellens.co/content/images/2019/09/milan-italy.jpg",
        isAvailable: true,
        address: "Piazza Fontana 3",
        panelName: "Panel u Milanu",
        lat: 45.464664,
        lng: 9.188540
    },
    {
        id: 5,
        imgUrl: "https://rivierabarcrawltours.com/wp-content/uploads/2019/07/What-to-visit-in-Nice-France-3.jpg",
        isAvailable: true,
        address: "Avenue d'Azure 65",
        panelName: "Panel u Nici",
        lat: 43.675819,
        lng: 7.289429
    },
    {
        id: 6,
        imgUrl: "https://a.cdn-hotels.com/gdcs/production73/d1723/35b8f7e3-14c4-4d53-ae2f-5f7f6adb6aac.jpg",
        isAvailable: false,
        address: "Scottish Alley 67",
        panelName: "Panel u Edinburgu",
        lat: 55.953251,
        lng: -3.188267
    },
    {
        id: 7,
        imgUrl: "https://www.livemoretravelmore.com/wp-content/uploads/2020/07/14625650018_fe95e6264a_c.jpg",
        isAvailable: true,
        address: "Monsoon Road 12",
        panelName: "Panel u Maleu",
        lat: 4.175496,
        lng: 73.509346
    },
    {
        id: 8,
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/5/50/Prague_skyline_view.jpg",
        isAvailable: true,
        address: "Beer Square 54",
        panelName: "Panel u Pragu",
        lat: 50.075539,
        lng: 14.437800
    }
]

export default PanelSearch;
