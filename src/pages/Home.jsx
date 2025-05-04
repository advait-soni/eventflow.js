import Editor from "@monaco-editor/react";

export default function Home() {
  function handleEditorChange(value, event) {
    console.log("value", value);
  }

  return (
    <>
      <div>
        <Editor
          height="80vh"
          defaultLanguage="javascript"
          defaultValue="// start the javascript magic"
          theme={"vs-dark"}
          onChange={handleEditorChange}
          width="80vh"
        />
      </div>
    </>
  );
}
