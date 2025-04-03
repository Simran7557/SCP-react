function Scp({ scp }) {
    if (!scp) {
        return <div>Select an SCP file to view details</div>;
    }

    return (
        <div>
            <h1>{scp.id} - {scp.name}</h1>
            <p><strong>Description:</strong> {scp.description}</p>
            <p><strong>Containment Procedures:</strong> {scp.containment_procedures}</p>
            <p><strong>Special Notes:</strong> {scp.special_notes}</p>
            <img src={scp.image} alt={scp.id} style={{ width: '300px', borderRadius: '8px' }} />
        </div>
    );
}

export default Scp;
