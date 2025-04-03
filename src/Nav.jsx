function Nav({ scps, onScpSelect }) {
    return (
        <nav>
            <h2>Scp foundation Files </h2>
            <ul>
                {scps.map((scp) => (
                    <li key={scp.id} onClick={() => onScpSelect(scp)}>
                        {scp.id}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;