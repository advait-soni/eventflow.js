import Home from "./pages/Home"
import { Box } from "@chakra-ui/react"
import { Header } from "./components/Header"
import { Flex } from "@chakra-ui/react"
function App() {
  return (
    <>
      <Flex
        bgColor="gray.950"
        bgSize="cover"
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="40px"
        data-state="open"
        _open={{
          animation: "fade-in 2500ms ease-out",
        }}
      >
        <Header />
        <Home />
      </Flex>
    </>
  )
}

export default App
