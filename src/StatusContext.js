import React, { useEffect, useState } from "react";
export const statusContext = React.createContext();

const StatData = {
    makan: { nambah: 1, kurang: -1 },
    main: { nambah: 1, kurang: -0.8 },
    tidur: { nambah: 0.8, kurang: -0.2 },
    belajar: { nambah: 1.5, kurang: -0 }
};

export function StatusProvider({ children }) {
    const [makanData, setMakan] = useState(0);
    const [mainData, setMain] = useState(0);
    const [tidurData, setTidur] = useState(0);
    const [belajarData, setBelajar] = useState(0);

    const [buttonMakan, setButtonMakan] = useState(false);
    const [buttonMain, setButtonMain] = useState(false);
    const [buttonTidur, setButtonTidur] = useState(false);
    const [buttonBelajar, setButtonBelajar] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            // (prevCounter) => buttonMakan ? prevCounter + StatData.makan.nambah : prevCounter + StatData.makan.kurang;
            setMakan((prevCounter) => prevCounter + StatData.makan.kurang);
            setMain((prevCounter) => prevCounter + StatData.main.kurang);
            setTidur((prevCounter) => prevCounter + StatData.tidur.kurang);
            setBelajar((prevCounter) => prevCounter + StatData.belajar.kurang);
        }, 1000);
        return () => clearInterval(interval);
    });

    const returnStatus = {
        makan: { stat: makanData, active: buttonMakan, set: setMakan, setActive: setButtonMakan },
        main: { stat: mainData, set: setMain },
        tidur: { stat: tidurData, set: setTidur },
        belajar: { stat: belajarData, set: setBelajar }
    }

    return (
        <statusContext.Provider value={returnStatus}>
            {children}
        </statusContext.Provider >
    )
}