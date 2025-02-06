import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { SupabaseProvider } from "./context/SupabaseContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import { DataProvider } from "./context/FolderListProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SupabaseProvider>
      <UserProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </UserProvider>
    </SupabaseProvider>
  </StrictMode>
);
