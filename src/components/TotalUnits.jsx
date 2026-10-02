export default function TotalUnits({ parts }) {
    return (
        <p className="row total">
            <span>Total</span>
            <span>{parts[0].units + parts[1].units + parts[2].units} units</span>
        </p>
    );
}