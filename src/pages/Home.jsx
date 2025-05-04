import Editor from "@monaco-editor/react";

export default function Home() {
  function handleEditorChange(value, event) {
    console.log("value", value);
  }

  return (
    <>
      <p>Hello</p>
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue="// start the javascript magic"
        theme={"vs-dark"}
        onChange={handleEditorChange}
      />
    </>
  );
}
