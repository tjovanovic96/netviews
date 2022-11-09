import { Table } from "react-bootstrap";
import "../../css/PricingTab.css"
import "../../css/Common.css"
import { useState, useCallback } from "react";
import Input from "../core/Input";
import Select from "../core/Select";

const PricingTab = (props) => {
    const {periodPrices, setPeriodPrices, setDefaultPrice, price} = props;
    const [hasNewPeriod, setHasNewPeriod] = useState(false);

    const addNewPeriod = useCallback(() => {
        setHasNewPeriod(true);
    }, []);

    const [newPeriodDay, setNewPeriodDay] = useState("MONDAY");
    const [newPeriodPrice, setNewPeriodPrice] = useState(0);

    const setNewPeriod = useCallback(() => {
        setPeriodPrices(periodPrices.concat({ day: newPeriodDay, price: newPeriodPrice }));
        setHasNewPeriod(false);
    }, [newPeriodPrice, newPeriodDay, periodPrices, setPeriodPrices]);

    const removePeriod = useCallback((value) => {
        setPeriodPrices(periodPrices.filter(period => !(value.day === period.day && value.price === period.price)));
    }, [periodPrices, setPeriodPrices])

    return (
        <div className="pricing-table">
            <h5>Specific day period prices</h5>
            <Table bordered>
                <thead>
                    <tr>
                        <th>Week day</th>
                        <th>($) Price</th>
                        <button type="submit" className="button-yellow" onClick={addNewPeriod}>Add</button>
                    </tr>
                </thead>
                <tbody>
                    {periodPrices.map(value => (
                    <tr>
                    <td>{value.day}</td>
                    <td>{value.price}</td>
                    <button type="submit" className="button-grey" onClick={() => removePeriod(value)}>Remove</button>
                </tr>
                    ))}
                {hasNewPeriod && (
                    <tr>
                        <td>
                            <Select small={true} values={["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]} type="string" setFieldValue={setNewPeriodDay} />
                            </td>
                            <td>
                            <Input small={true} placeholder={0} type="number" setFieldValue={setNewPeriodPrice} />
                            </td>
                            <button type="submit" className="button-green" onClick={setNewPeriod}>Finish</button>
                    </tr>
                )}


                </tbody>
            </Table>
            <Input className="text-grey" label={"($) Default price for all hours:"} placeholder={0} type="number" value={price} setFieldValue={setDefaultPrice} />
        </div>
    )
}

export default PricingTab;