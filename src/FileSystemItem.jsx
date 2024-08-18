import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { FaFile, FaFolder } from "react-icons/fa";

const FileSystemItem = ({ folder }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className="ml-5 gap-1.5">
      <span className="flex items-center gap-1.5">
        {folder.folders && (
          <button onClick={() => setIsOpen(!isOpen)}>
            <BiChevronRight className={`${isOpen && "rotate-90 transform"}`} />
          </button>
        )}
        {folder.folders ? <FaFolder color="orange" /> : <FaFile />}
        {folder.name}
      </span>
      {isOpen && (
        <ul className="ml-5 space-y-2">
          {folder.folders?.map((folder, index) => (
            <FileSystemItem key={index} folder={folder} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default FileSystemItem;
