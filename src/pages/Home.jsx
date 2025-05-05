import Editor from "@monaco-editor/react";
import { Box } from "@chakra-ui/react";
import { DEFAULT_CODE } from "../utils/defaults";

export default function Home() {
  function handleEditorChange(value, event) {
    console.log("value", value);
  }

  return (
    <>
      <Box borderColor="red.400" borderWidth="2px">
        <Editor
          height="80vh"
          defaultLanguage="javascript"
          defaultValue={DEFAULT_CODE}
          theme={"vs-dark"}
          onChange={handleEditorChange}
          width="80vh"
        />
      </Box>
    </>
  );
}
