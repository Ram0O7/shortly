import { useState } from "react";

const Link = ({ fullLink, shortLink, onCopyLinks, id }) => {
  const [copyStatus, setCopyStatus] = useState("Copy");
  const clickHandler = () => {
    navigator.clipboard.writeText(shortLink);
    if (copyStatus !== "Copy") {
      alert("link already copied!");
    }
    setCopyStatus("Copied !");
    onCopyLinks(id);
  };

  return (
    <div className="link-container">
      <p className="full-link">{fullLink}</p>
      <div className="shortened-link-container">
        <a className="shot-link" href={shortLink}>
          {shortLink}
        </a>
        <button
          className={
            copyStatus === "Copy" ? "copy-btn" : "copy-btn copied-state"
          }
          onClick={clickHandler}
        >
          {copyStatus}
        </button>
      </div>
    </div>
  );
};

export default Link;
