import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/JaswinderSingh22" },
  { icon: <FaLinkedinIn />, path: "linkedin.com/in/jaswinder-singh-8a8b90167" },
  // { icon: <FaYoutube />, path: "" },
  // { icon: <FaTwitter />, path: "" },
];

export default function Social({ containerStyles, iconStyles }) {
    return <div className={containerStyles}>
        {socials.map((item, index) => {
            return <Link href={item.path} className={iconStyles} key={index} target="_blank">
              {item.icon}
          </Link>
      })}
  </div>;
}
