import { useRef } from "react";
import Link from "./Link";

import formBgDesktop from "../assets/images/bg-shorten-desktop.svg";
import formBgMobile from "../assets/images/bg-shorten-mobile.svg";

const LinkShortener = ({ links, onAddLinks, onCopyLinks, device }) => {
  const linkInputRef = useRef("");
  const submitHandler = (e) => {
    e.preventDefault();
    onAddLinks(linkInputRef.current.value);
    linkInputRef.current.value = "";
  };

  return (
    <>
      <div className="link-form-container">
        <img className="form-bg" src={device === "mobile" ? formBgMobile : formBgDesktop} alt="form-bg" />
        <form className="link-form" onSubmit={submitHandler}>
          <div className="input-box">
            <input
              ref={linkInputRef}
              type="text"
              placeholder="Shorten a link here!"
              id="linkInput"
              required
            />
            <i className="input-error">please add a link!</i>
          </div>
          <button type="submit">Shorten It!</button>
        </form>
      </div>
      <div className="links">
        {links.map((link, index) => {
          const { fullLink, shortLink, id } = link;
          return (
            <Link
              key={id}
              fullLink={fullLink}
              shortLink={shortLink}
              onCopyLinks={onCopyLinks}
              id={id}
            />
          );
        })}
      </div>
    </>
  );
};

export default LinkShortener;
