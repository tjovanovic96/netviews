import { Table } from "react-bootstrap";
import "../../css/PricingTab.css"
import "../../css/Common.css"

const PricingTab = () => {
    return (
        <div className="pricing-table">
            <h5>Specific hour period prices</h5>
            <Table bordered>
                <thead>
                    <tr>
                        <th>From hour</th>
                        <th>To hour</th>
                        <th>($) Price</th>
                        <button type="submit" className="button-yellow">Add</button>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <button type="submit" className="button-grey">Remove</button>
                    </tr>
                    <tr>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <button type="submit" className="button-grey">Remove</button>
                    </tr>
                    <tr>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                        <button type="submit" className="button-grey">Remove</button>
                    </tr>
                </tbody>
            </Table>
            <span className="text-grey">($) Default price for all hours </span>
            <span>42</span>
        </div>
    )
}

export default PricingTab;