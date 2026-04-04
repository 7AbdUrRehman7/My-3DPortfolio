import { useState, useCallback } from "react";
import { FaGithub } from "react-icons/fa6";
import { MdPlayCircleOutline, MdArrowBack, MdArrowForward } from "react-icons/md";

interface Props {
  image?: string;
  images?: string[];
  alt?: string;
  link?: string;
  demoLink?: string;
}

const WorkImage = (props: Props) => {
  const hasRealLink = props.link && props.link !== "#";
  const imageList = props.images && props.images.length > 0 ? props.images : props.image && props.image !== "" ? [props.image] : [];
  const hasImage = imageList.length > 0;
  const hasMultiple = imageList.length > 1;

  const [imgIndex, setImgIndex] = useState(0);

  const prevImg = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setImgIndex((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
    },
    [imageList.length]
  );

  const nextImg = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setImgIndex((prev) => (prev === imageList.length - 1 ? 0 : prev + 1));
    },
    [imageList.length]
  );

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
        {hasImage && <img src={imageList[imgIndex]} alt={props.alt} />}
      </Tag>
      {hasMultiple && (
        <>
          <button
            className="img-arrow img-arrow-left"
            onClick={prevImg}
            data-cursor="disable"
            aria-label="Show previous project image"
            title="Previous image"
          >
            <MdArrowBack />
          </button>
          <button
            className="img-arrow img-arrow-right"
            onClick={nextImg}
            data-cursor="disable"
            aria-label="Show next project image"
            title="Next image"
          >
            <MdArrowForward />
          </button>
        </>
      )}
      {props.demoLink && props.demoLink !== "" && (
        <a
          className="work-demo-link"
          href={props.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="disable"
          aria-label="Open live demo"
          title="Open live demo"
        >
          <MdPlayCircleOutline />
        </a>
      )}
    </div>
  );
};

export default WorkImage;