import Editor from "@monaco-editor/react"
import { Box } from "@chakra-ui/react"
import { DEFAULT_CODE } from "../utils/defaults"

export default function Home() {
  function handleEditorChange(value, event) {
    console.log("value", value)
  }

  const options = {
    minimap: {
      enabled: false,
    }
  }

  return (
    <>
      <Box
        borderColor="pink.400"
        borderRadius="10px"
        borderWidth="4px"
        boxShadow="0 10px 70px -3px rgba(236, 72, 153, 0.9), 0 4px 6px -2px rgba(236, 72, 153, 0.3)"
      >
        <Editor
          height="80vh"
          defaultLanguage="javascript"
          defaultValue={DEFAULT_CODE}
          theme={"vs-dark"}
          onChange={handleEditorChange}
          width="85vh"
          options={options}
          
        />
      </Box>
    </>
  )
}
