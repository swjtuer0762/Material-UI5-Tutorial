import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import NavBar from "./components/NavBar";
import Add from "./components/Add";
import { Box, Stack } from "@mui/material";

function App() {
  return (
    <div>
      <Box>
        <NavBar />
        <Stack direction={"row"} spacing={2} justifyContent={"space-between"}>
          <SideBar />
          <Feed />
          <RightBar />
        </Stack>
        <Add />
      </Box>
    </div>
  );
}

export default App;
