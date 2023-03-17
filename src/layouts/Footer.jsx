import { Link } from "react-router-dom";

const externalLink = [
  { key: "line", path: "www.google.co.th", image: "/images/line.webp" },
  { key: "ig", path: "#", image: "/images/ig.webp" },
  { key: "fb", path: "#", image: "/images/fb.webp" },
];

const Footer = () => {
  return (
    <div className="py-[14px]">
      <div className="bg-secondary">
        <div className="flex items-center justify-center gap-x-[23px] container mx-auto p-4">
          {externalLink.map((link) => (
            <a key={link.key} to={link.path}>
              <img
                alt={link.key}
                src={link.image}
                className="h-[45px] w-[45px] aspect-square"
              />
            </a>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-[7px] lg:mt-[17px]">
        <p className="text-primary text-[10px] lg:text-[16px]">Copyright @2023 : Smart Aquarium Internet of Things - Project</p>
      </div>
    </div>
  );
};

export default Footer;
