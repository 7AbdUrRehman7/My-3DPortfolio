import { FaGithub } from "react-icons/fa6";
import { MdPlayCircleOutline } from "react-icons/md";

interface Props {
  image?: string;
  alt?: string;
  link?: string;
  demoLink?: string;
}

const WorkImage = (props: Props) => {
  const hasRealLink = props.link && props.link !== "#";
  const hasImage = props.image && props.image !== "";

  const Tag = hasRealLink ? "a" : "div";
  const linkProps = hasRealLink
    ? { href: props.link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <div className={`work-image ${!hasImage ? "work-image-noimg" : ""}`}>
      <Tag
        className="work-image-in"
        {...linkProps}
        data-cursor="disable"
      >
        {hasRealLink && (
          <div className="work-link">
            <FaGithub />
          </div>
        )}
        {hasImage && <img src={props.image} alt={props.alt} />}
      </Tag>
      {props.demoLink && props.demoLink !== "" && (
        <a
          className="work-demo-link"
          href={props.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="disable"
        >
          <MdPlayCircleOutline />
        </a>
      )}
    </div>
  );
};

export default WorkImage;