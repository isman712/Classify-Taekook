import { useState } from "react";
import { useFolders } from "../context/FolderProvider";

const NewFolderModal = ({ parentId, onClose }) => {
  const { createFolder } = useFolders();
  const [name, setName] = useState("");
  const [type, setType] = useState("folder");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await createFolder(name, type, parentId);
    console.log(data);
    // onClose();
  };

  console.log(parentId);
  return (
    <div className="">
      <form>
        <h2>Crear Nueva Carpeta o Lista</h2>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="folder">Carpeta</option>
          <option value="list">Lista</option>
        </select>
        <button type="submit" onClick={handleSubmit}>
          Crear
        </button>
      </form>
    </div>
  );
};

export default NewFolderModal;
