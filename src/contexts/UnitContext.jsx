import { createContext, useState } from "react";

export const UnitContext = createContext();

export function UnitContextProvider(props) {
    const [contextUnit, setContextUnit] = useState(1);
    const value = { contextUnit, setContextUnit };

    return (
        <UnitContext.Provider value={value}>
            { props.children }
        </UnitContext.Provider>
    )
}