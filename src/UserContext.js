import React, { useState } from "react";
export const userContext = React.createContext();

const userData = {
    name: "",
    jurusan: ""
};



export function UserProvider({ children }) {
    const [curr, setCurr] = useState(0);
    const [salam, setSalam] = useState("");
    return (
        <userContext.Provider value={{ userData, curr, setCurr, salam, setSalam }}>
            {children}
        </userContext.Provider>
    )
}