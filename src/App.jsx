import React from "react";
import FileSystemItem from "./FileSystemItem";

const folders = [
  {
    name: "Home",
    folders: [
      { name: "Movies", folders: [{ name: "Avengers.mp4" }] },
      {
        name: "Series",
        folders: [{ name: "StrangerThings.mp4" }, { name: "babylone.mp4" }],
      },
      { name: "Movies", folders: [{ name: "Avengers.mp4" }] },
      {
        name: "Series",
        folders: [{ name: "StrangerThings.mp4" }, { name: "babylone.mp4" }],
      },
    ],
  },
];

const App = () => {
  return (
    <div className="min-w-full">
      <div className="w-full max-w-96 flex flex-col justify-center mx-auto">
        <ul className="ml-5 space-y-2">
          {folders.map((folder) => (
            <FileSystemItem key={folder} folder={folder} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
