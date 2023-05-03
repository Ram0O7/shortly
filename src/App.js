import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import MobileNav from "./components/MobileNav";
import LinkShortener from "./components/LinkShorteningForm";
import Features from "./components/Features";
import Footer from "./components/Footer";

import "./styles.css";
import boostDesk from "./assets/images/bg-boost-desktop.svg";
import boostMobile from "./assets/images/bg-boost-mobile.svg";

const getStorageLinks = () => {
  const links = localStorage.getItem("links");
  if (links) {
    return JSON.parse(links);
  } else {
    return [];
  }
};

export default function App() {
  const [link, setLink] = useState("");
  const [shortLinks, setShortLinks] = useState(getStorageLinks());
  const [device, setDevice] = useState("desktop");

  const shortenLink = async () => {
    if (link !== "")
      try {
        const response = await fetch(
          `https://api.shrtco.de/v2/shorten?url=${link}/`
        );

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.error);
        }
        setShortLinks([
          ...shortLinks,
          {
            id: data.result.code,
            fullLink: data.result.original_link,
            shortLink: data.result.short_link
          }
        ]);
      } catch (error) {
        alert(error.message);
      }
  };

  useEffect(() => {
    const submittedLink = shortLinks.map(shortLink => shortLink.fullLink).filter(fullLink => fullLink.includes(link));
    if (link !== " " && submittedLink.length === 0) {
      shortenLink()
    }
  }, [link]);

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(shortLinks));
  }, [shortLinks]);

  function myMediaFn(match) {
    if (match.matches) {
      setDevice("mobile");
    } else {
      setDevice("desktop");
    }
  }

  useEffect(() => {
    let myMedia = window.matchMedia("(max-width: 768px)");
    myMediaFn(myMedia); // Call listener function at run time
    myMedia.addListener(myMediaFn); // Attach listener function on state changes
  }, [device]);

  return (
    <div className="App">
      {device !== "mobile" ? <Navbar /> : <MobileNav />}
      <Hero />
      <div className="main-container">
        <LinkShortener
          links={shortLinks.reverse()}
          onAddLinks={(link) => setLink(link)}
          device={device}
        />
        <Features />
      </div>
      <div className="get-started">
        <img
          src={device === "mobile" ? boostMobile : boostDesk}
          alt="boost-link"
          className="get-started-bg"
        />
        <div>
          <h3>Boost your link today</h3>
          <button>Get Started</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
