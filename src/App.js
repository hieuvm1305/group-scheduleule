import React from "react";
import { useState } from "react";
import { TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import createMatches from "./func";

const days = [
  "Thứ Hai",
  "Thứ Ba",
  "Thứ Tư",
  "Thứ Năm",
  "Thứ Sáu",
  "Thứ Bảy",
  "Chủ Nhật",
];

const ITEM_HEIGHT = 32;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
function App() {
  const theme = useTheme();
  const [matches, setMatches] = useState([]);

  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [team3, setTeam3] = useState("");
  const [team4, setTeam4] = useState("");

  const [dayTeam1, setDayTeam1] = useState([]);
  const [dayTeam2, setDayTeam2] = useState([]);
  const [dayTeam3, setDayTeam3] = useState([]);
  const [dayTeam4, setDayTeam4] = useState([]);

  const handleChangeTeam1 = (event) => {
    const {
      target: { value },
    } = event;
    setDayTeam1(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleChangeTeam2 = (event) => {
    const {
      target: { value },
    } = event;
    setDayTeam2(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleChangeTeam3 = (event) => {
    const {
      target: { value },
    } = event;
    setDayTeam3(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleChangeTeam4 = (event) => {
    const {
      target: { value },
    } = event;
    setDayTeam4(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  
  const createSchedule = () => {
    const teamList = [];
    const teamAvailableDay = []

    teamList.push(team1);
    teamList.push(team2);
    teamList.push(team3);
    teamList.push(team4);
    
    teamAvailableDay.push(dayTeam1);
    teamAvailableDay.push(dayTeam2);
    teamAvailableDay.push(dayTeam3);
    teamAvailableDay.push(dayTeam4);
    
    const result = createMatches(teamList, teamAvailableDay)
    setMatches(result);
  }

  return (
    <div className="App">
      <div className="w-[800px] mx-auto my-10 border border-black rounded-sm">
        <h1 className="text-center text-2xl font-bold mt-5">Danh sach doi</h1>
        <div className="header">
          <div className="my-3 px-5">
            <div className="flex flex-row justify-between items-center">
              <div>
                <TextField
                  id="outlined-basic"
                  label="Team1"
                  variant="outlined"
                  onChange={(e) => {
                    setTeam1(e.target.value);
                  }}
                />
              </div>
              <div>
                <FormControl sx={{ width: 300 }}>
                  <Select
                    multiple
                    displayEmpty
                    value={dayTeam1}
                    onChange={handleChangeTeam1}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                      if (selected.length === 0) {
                        return <em>Select day</em>;
                      }

                      return selected.join(", ");
                    }}
                    MenuProps={MenuProps}
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem disabled value="">
                      <em>Select day</em>
                    </MenuItem>
                    {days.map((day) => (
                      <MenuItem
                        key={day}
                        value={day}
                        style={getStyles(day, days, theme)}
                      >
                        {day}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
          <div className="my-3 px-5">
            <div className="flex flex-row justify-between items-center">
              <div>
                <TextField
                  id="outlined-basic"
                  label="Team2"
                  variant="outlined"
                  onChange={(e) => {
                    setTeam2(e.target.value);
                  }}
                />
              </div>
              <div>
                <FormControl sx={{ width: 300 }}>
                  <Select
                    multiple
                    displayEmpty
                    value={dayTeam2}
                    onChange={handleChangeTeam2}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                      if (selected.length === 0) {
                        return <em>Select day</em>;
                      }

                      return selected.join(", ");
                    }}
                    MenuProps={MenuProps}
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem disabled value="">
                      <em>Placeholder</em>
                    </MenuItem>
                    {days.map((day) => (
                      <MenuItem
                        key={day}
                        value={day}
                        style={getStyles(day, days, theme)}
                      >
                        {day}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
          <div className="my-3 px-5">
            <div className="flex flex-row justify-between items-center">
              <div>
                <TextField
                  id="outlined-basic"
                  label="Team3"
                  variant="outlined"
                  onChange={(e) => {
                    setTeam3(e.target.value);
                  }}
                />
              </div>
              <div>
                <FormControl sx={{ width: 300 }}>
                  <Select
                    multiple
                    displayEmpty
                    value={dayTeam3}
                    onChange={handleChangeTeam3}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                      if (selected.length === 0) {
                        return <em>Select day</em>;
                      }

                      return selected.join(", ");
                    }}
                    MenuProps={MenuProps}
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem disabled value="">
                      <em>Placeholder</em>
                    </MenuItem>
                    {days.map((day) => (
                      <MenuItem
                        key={day}
                        value={day}
                        style={getStyles(day, days, theme)}
                      >
                        {day}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
          <div className="my-3 px-5">
            <div className="flex flex-row justify-between items-center">
              <div>
                <TextField
                  id="outlined-basic"
                  label="Team4"
                  variant="outlined"
                  onChange={(e) => {
                    setTeam4(e.target.value);
                  }}
                />
              </div>
              <div>
                <FormControl sx={{ width: 300 }}>
                  <Select
                    multiple
                    displayEmpty
                    value={dayTeam4}
                    onChange={handleChangeTeam4}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                      if (selected.length === 0) {
                        return <em>Select day</em>;
                      }

                      return selected.join(", ");
                    }}
                    MenuProps={MenuProps}
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem disabled value="">
                      <em>Placeholder</em>
                    </MenuItem>
                    {days.map((day) => (
                      <MenuItem
                        key={day}
                        value={day}
                        style={getStyles(day, days, theme)}
                      >
                        {day}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto my-4 flex justify-center">
      <Button variant="contained" className="px-3 py-2 " onClick={createSchedule}>Tao lich thi dau</Button>
      </div>
      <div className="w-[600px] mx-auto my-4 border border-black rounded-sm px-5">
      {matches?.map((value)=>(
        <div key={value.Match} className="flex flex-row justify-between items-center my-2">
            <div className="px-3 py-2 border border-black rounded-lg"><p>{value.Match}</p></div>
            <div className="px-3 py-2 border border-black rounded-lg"><p>{value.Day?.join(", ")}</p></div>
        </div>
      )
    )}
      </div>
    </div>
  );
}

export default App;
