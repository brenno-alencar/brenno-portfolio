import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/brenno-alencar" },
  { icon: <FaLinkedinIn />, path: "https://linkedin.com/in/brenno-alencar-955460256/" },
  { icon: <FaInstagram />, path: "https://instagram.com/brenno_alencaar" },
  { icon: <FaWhatsapp />, path: "https://wa.me/5562993002421?text=Olá%2C%20vim%20pelo%20seu%20portfólio!" }
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          target="_blank"
          className={iconStyles}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;