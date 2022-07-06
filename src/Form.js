import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Form() {
  const [shouldSucceed, setShouldSucceed] = useState(true);
  const [errorCode, setErrorCode] = useState(null);

  return (
    <form>
      <h1>Hire me</h1>
      <TextField
        label="Message"
        type="text"
        variant="outlined"
        margin="normal"
        required
        fullWidth
        multiline
        rows={4}
      />
      <TextField
        className="half"
        label="Your Name"
        type="name"
        variant="outlined"
        margin="normal"
        required
      />
      <TextField
        className="half"
        label="Your Email"
        type="email"
        variant="outlined"
        margin="normal"
        required
      />

      <FormControlLabel
        control={
          <Switch
            defaultChecked
            checked={shouldSucceed}
            onChange={() => {
              setErrorCode(null);
              setShouldSucceed(!shouldSucceed);
            }}
          />
        }
        label="Should Succeed"
      />

      {shouldSucceed ? null : (
        <FormControl margin="normal" className="half">
          <InputLabel id="error-code-label">Desired Error Code</InputLabel>
          <Select
            labelId="error-code-label"
            id="error-code"
            value={errorCode}
            label="Desired Error Code"
            onChange={(e) => setErrorCode(e.target.value)}
          >
            <MenuItem value={400}>400</MenuItem>
            <MenuItem value={401}>401</MenuItem>
            <MenuItem value={402}>402</MenuItem>
            <MenuItem value={403}>403</MenuItem>
            <MenuItem value={404}>404</MenuItem>
            <MenuItem value={500}>500</MenuItem>
            <MenuItem value={501}>501</MenuItem>
            <MenuItem value={502}>502</MenuItem>
            <MenuItem value={503}>503</MenuItem>
            <MenuItem value={504}>504</MenuItem>
          </Select>
        </FormControl>
      )}

      <Button type="submit" margin="normal" size="large">
        Submit
      </Button>
    </form>
  );
}
