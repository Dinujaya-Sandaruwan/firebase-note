import { useState } from "react";
import { storage } from "../config/firebase";
import { ref, uploadBytes } from "firebase/storage";

function Upload() {
  const [fileUpload, setFileUpload] = useState<File>({} as File);

  const handleUpload = async () => {
    if (!fileUpload) return;

    const filesFolderRef = ref(storage, `projectFiles/${fileUpload.name}`);

    try {
      await uploadBytes(filesFolderRef, fileUpload);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <label htmlFor="fileUpload">Upload your files here</label>
      <input
        type="file"
        name="fileUpload"
        onChange={(e) =>
          e.target.files?.[0] && setFileUpload(e.target.files?.[0])
        }
      />
      <button onClick={handleUpload}>Upload Now</button>
    </div>
  );
}

export default Upload;
