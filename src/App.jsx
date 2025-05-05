import Home from "./pages/Home";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box
        bgColor="gray.950"
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
