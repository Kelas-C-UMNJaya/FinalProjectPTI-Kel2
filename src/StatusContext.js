import React, { useEffect, useState } from "react";
export const statusContext = React.createContext();

const StatData = {
    makan: { nambah: 4, kurang: -1 },
    main: { nambah: 4, kurang: -1 },
    tidur: { nambah: 3, kurang: -0.5 },
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

    const TogglingButton = (value) => {
        let checker;
        for (checker in returnStatus) {
            returnStatus[checker].setActive(false);
        }
        if (returnStatus[value].active) {
            returnStatus[value].setActive(false);
        } else {
            returnStatus[value].setActive(true);
        }
        console.log(returnStatus);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setMakan((prevCounter) => buttonMakan ? prevCounter + StatData.makan.nambah : prevCounter + StatData.makan.kurang);
            setMain((prevCounter) => buttonMain ? prevCounter + StatData.main.nambah : prevCounter + StatData.main.kurang);
            setTidur((prevCounter) => buttonTidur ? prevCounter + StatData.tidur.nambah : prevCounter + StatData.tidur.kurang);
            setBelajar((prevCounter) => buttonBelajar ? prevCounter + StatData.belajar.nambah : prevCounter + StatData.belajar.kurang);
        }, 1000);
        return () => clearInterval(interval);
    });

    const returnStatus = {
        makan: { stat: makanData, active: buttonMakan, set: setMakan, setActive: setButtonMakan },
        main: { stat: mainData, active: buttonMain, set: setMain, setActive: setButtonMain },
        tidur: { stat: tidurData, active: buttonTidur, set: setTidur, setActive: setButtonTidur },
        belajar: { stat: belajarData, active: buttonBelajar, set: setBelajar, setActive: setButtonBelajar }
    }

    return (
        <statusContext.Provider value={{ returnStatus, TogglingButton }}>
            {children}
        </statusContext.Provider >
    )
}