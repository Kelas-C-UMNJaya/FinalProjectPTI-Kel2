import React from "react";
export const userContext = React.createContext();

const Data = {
    userData: {
        name: "",
        jurusan: ""
    }
};

export function UserProvider({ children }) {
    return (
        <userContext.Provider value={Data}>
            {children}
        </userContext.Provider>
    )
}