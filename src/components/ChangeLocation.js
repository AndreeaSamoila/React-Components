import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export function ChangeLocation({ city, onSelectCity }) {
    return (
        <Box>
            <FormControl fullWidth>
                <InputLabel id="oras-label">Oras</InputLabel>
                <Select
                    labelId="oras-label"
                    value={city}
                    //   // onChange={handleChange}
                    onChange={(event) => {
                        onSelectCity(event.target.value);
                    }}
                    label="Oras"
                >
                    <MenuItem value={"Timisoara"}>Timisoara</MenuItem>
                    <MenuItem value={"Cluj"}>Cluj</MenuItem>
                    <MenuItem value={"Bucuresti"}>Bucuresti</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
