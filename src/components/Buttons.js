// import Stack from '@mui/material/Stack';
import { Stack, Button, IconButton } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import CameraIcon from "@mui/icons-material/Camera";

export function Buttons() {
    const buttonDisabled = true;
    return (
        <Stack spacing={2} direction="row">
            <Button variant="text">Text</Button>
            <Button variant="contained" disableElevation color="warning">
                Warning! Form Invalid
            </Button>
            <Button
                variant="outlined"
                onClick={() => {
                    console.log("Outlined clicked");
                }}
                disabled={buttonDisabled}
            >
                Outlined
            </Button>
            <IconButton color="primary" aria-label="upload picture" component="label">
                <input hidden accept="image/*" type="file" />
                <CameraIcon />
            </IconButton>
        </Stack>
    );
}
