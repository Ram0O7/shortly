import { useState } from "react";

const Link = ({ fullLink, shortLink }) => {
  const [copied, setCopied] = useState(false);
  const clickHandler = () => {
    navigator.clipboard.writeText(shortLink);
    if (copied) {
      if (confirm("Link already copied!,you want to copy again?")) {
        navigator.clipboard.writeText(shortLink);
      }
    }
    setCopied(true);
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
            !copied ? "copy-btn" : "copy-btn copied-state"
          }
          onClick={clickHandler}
        >
          {!copied ? "Copy" : "Copied !"}
        </button>
      </div>
    </div>
  );
};

export default Link;
