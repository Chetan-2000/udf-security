import { useState } from "react"
import SectorTab from "../../../Components/Button/SectoreTab"
import SectorData from "../../../assets/SectorData"
import SectorDataCard from "../../../Components/Cards/SectorDataCard";

const Sectors = () => {
    const [selectedSector, setSelectedSector] = useState(SectorData[0]); // Initialize with the first sector

    const handleTabClick = (sectorItem) => {
        setSelectedSector(sectorItem);
    };

    return (
        <div className="ck-main-container-top bg-white d-flex align-items-center">
            <div className="container">
                <h2>Sectors</h2>
                <div className="d-md-block d-sm-none d-none mt-5 sector-container">
                    <div className="row">
                        <div className="col-lg-4 col-md-5 col-sm-12">
                            <div className="d-flex flex-column sector-tab-container">
                                {SectorData.map((sectorItem) => (
                                    <SectorTab
                                        key={sectorItem.heading}
                                        title={sectorItem.heading}
                                        isActive={selectedSector === sectorItem} // Pass isActive prop
                                        onClick={() => handleTabClick(sectorItem)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-7 col-sm-12">
                            <div className="sector-data-card-container">
                                <SectorDataCard Heading={selectedSector.heading} Paragraph={selectedSector.paragraph} SectorImage={selectedSector.SectorImage} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sectors