import React, { useState } from "react";
export const userContext = React.createContext();

const Data = {
    userData: {
        name: "",
        jurusan: ""
    },
};



export function UserProvider({ children }) {
    const [curr, setCurr] = useState(0);
    return (
        <userContext.Provider value={{ Data, curr, setCurr }}>
            {children}
        </userContext.Provider>
    )
}