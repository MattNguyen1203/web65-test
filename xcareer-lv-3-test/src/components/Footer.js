import { useState } from "react";

const languagueList = [
  {
    id: "vn",
    title: "🇻🇳",
  },
  {
    id: "us",
    title: "🇺🇸",
  },
];

const Footer = () => {
  const [languague, setLanguage] = useState("vn");

  const handleSwitch = (id) => {
    if (languague !== id) {
      setLanguage(id);
    }
  };
  return (
    <div>
      <h3>Made by MindX 🔥</h3>
      <div>
        <span>Available on:</span>
        {languagueList.map((item, index) => (
          <span
            className={
              item.id === languague
                ? "languague-picker selected"
                : "languague-picker"
            }
            key={index}
            onClick={() => handleSwitch(item.id)}
          >
            {item.title}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Footer;
