import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { useData } from "../../context/FolderListProvider";

function Menu() {
  const { user } = useUser();
  const { folders, lists, fetchData, loading, datAff } = useData();
  const location = useLocation();

  useEffect(() => {
    if (user) {
      fetchData(null);
    }
  }, []);

  const buildFolderHierarchy = (folders) => {
    const folderMap = {};
    const roots = [];

    folders.forEach((folder) => {
      if (folder.name === "Default Folder") {
        folder.name = "Inicio";
      }
      folderMap[folder.id] = { ...folder, children: [] };
    });

    folders.forEach((folder) => {
      if (folder.parent_id) {
        folderMap[folder.parent_id]?.children.push(folderMap[folder.id]);
      } else {
        roots.push(folderMap[folder.id]);
      }
    });

    return roots;
  };

  const renderLists = (folderId) => {
    return lists
      .filter((list) => list.folder_id === folderId)
      .map((list) => (
        <li key={list.id}>
          <Link
            to={`/panel/${folderId}/${list.id}`}
            className={
              location.pathname === `/panel/${folderId}/${list.id}`
                ? "menu-active"
                : ""
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              />
            </svg>
            {list.name}
          </Link>
        </li>
      ));
  };

  const renderFolders = (folderList) => {
    return (
      <ul>
        {folderList.map((folder) => (
          <li key={folder.id}>
            <Link
              to={`/panel/${folder.id}`}
              className={
                location.pathname === `/panel/${folder.id}` ? "menu-active" : ""
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-4 w-4 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                ></path>
              </svg>
              {folder.name}
            </Link>

            {folder.children && folder.children.length > 0 && (
              <ul>{renderFolders(folder.children)}</ul>
            )}

            {lists.some((list) => list.folder_id === folder.id) && (
              <ul>{renderLists(folder.id)}</ul>
            )}
          </li>
        ))}
      </ul>
    );
  };

  console.log(lists);
  return (
    <ul className="menu bg-base-200 w-80 ">
      {!folders ? (
        <div className="skeleton w-80 border-none"></div>
      ) : folders.length === 0 ? (
        <li>No se han encontrado carpetas</li>
      ) : (
        renderFolders(buildFolderHierarchy(folders))
      )}
    </ul>
  );
}

export default Menu;
