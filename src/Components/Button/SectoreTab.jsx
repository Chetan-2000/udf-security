const SectorTab = ({ title, onClick, isActive }) => {

    const tabClass = isActive ? "btn sector-tab active" : "btn sector-tab";

    return (
        <button className={tabClass} onClick={onClick}>
            {title}
        </button>
    )
}


export default SectorTab