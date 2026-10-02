export default function Part({ parts }) {
    return (
        <p className="row">
            <span>{parts.name}</span>
            <span>{parts.units} units</span>
        </p>
    );
}