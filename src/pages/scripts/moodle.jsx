import { useState } from "react";
const e5x = () => {
  const [file, setFile] = useState(null);

  const [downloadUrl, setDownloadUrl] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("scripts", "e5x");
    console.log(formData);

    const res = await fetch("http://localhost:4000/upload", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    console.log(data);

    setDownloadUrl(data.urlretour);
    console.log(downloadUrl);
  };

  return (
      <>
        <h1 className="text-2xl font-bold">moodle</h1>
      <form onSubmit={submit}>
        <input
          filename={file}
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          accept="*"
        ></input>

        <button type="submit">Submit</button>
      </form>
      <button
        id="downloadBtn"
        value="download"
        onClick={() => {
          window.open(downloadUrl);
          console.log(downloadUrl);
        }}
      >
        Download
      </button>
    </>
  );
};

export default e5x;
