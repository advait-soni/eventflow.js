import { Text, Button, Flex } from "@chakra-ui/react"

export function Header() {
  return (
    <>
      <Flex gap="200px">
        <Text
          color="pink.400"
          data-state="open"
          _open={{
            animation: "fade-in 11000ms ease-out",
          }}
          shadow="20px"
        >
          See and Feel your Javascript code
        </Text>
        <Button
          _open={{
            animation: "fade-in 11000ms ease-out",
          }}
          shadow="20px"
        >
          Run
        </Button>
      </Flex>
    </>
  )
}
