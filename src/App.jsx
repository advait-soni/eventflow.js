import Home from "./pages/Home";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box
        bgImage="url('https://wallpaperaccess.com/full/84254.jpg')"
        bgSize="cover"
        minHeight="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Home />
      </Box>
    </>
  );
}

export default App;
