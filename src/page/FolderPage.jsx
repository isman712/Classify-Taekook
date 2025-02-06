import { useParams, Link } from "react-router-dom";
import { useFolders } from "../context/FolderProvider";
import NewFolderModal from "../components/NewModal";


const FolderPage = () => {
  const { folderId } = useParams();
  const { folders, loading } = useFolders();

  if (loading) return <p>Cargando...</p>;

  const currentFolders = folders.filter(
    (folder) => folder.parent_id === (folderId ? parseInt(folderId) : null)
  );

  return (
    <div>
         <NewFolderModal parentId={folderId}></NewFolderModal>
      <h1>Carpetas</h1>
      <ul>
        {currentFolders.map((folder) => (
          <li key={folder.id}>
            <Link to={`/folder/${folder.id}`}>{folder.name}</Link>
          </li>
        ))}
      </ul>
      <button onClick={() => alert("Abrir modal para crear carpeta")}>Nueva Carpeta</button>
    </div>
  );
};

export default FolderPage;
