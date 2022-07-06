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
  const [error, setError] = useState("");

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
            onChange={() => setShouldSucceed(!shouldSucceed)}
          />
        }
        label="Should Succeed"
      />

      {shouldSucceed ? null : (
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={error}
            label="Age"
            onChange={(e) => setError(e.target.value)}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      )}

      <Button type="submit" margin="normal">
        Submit
      </Button>
    </form>
  );
}
