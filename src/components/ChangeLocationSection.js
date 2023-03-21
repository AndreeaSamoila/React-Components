import { Box } from "@mui/material";
import { useState } from "react";
import { ChangeLocation } from "./ChangeLocation";
import { CurrentLocation } from "./CurrentLocation";

export function ChangeLocationSection() {
    const [city, setCity] = useState("Timisoara");
    function onSelectCity(newCity) {
        console.log("New City is ", newCity);
        setCity(newCity);
    }
    return (
        <Box sx={{ mt: 2 }}>
            <CurrentLocation city={city} />
            <ChangeLocation city={city} onSelectCity={onSelectCity} />
        </Box>
    );
}
