import styles from "./ImageSet.module.css";

interface ImageSetProps {
  images: [string, string, string];
  alt: string;
}

const ImageSet = ({ images, alt }: ImageSetProps) => {
  const [left, middle, right] = images;

  return (
    <div className={styles.container}>
      <img className={styles.left} src={left} alt={alt} />
      <img className={styles.right} src={right} alt={alt} />
      <img className={styles.middle} src={middle} alt={alt} />
    </div>
  );
};

export default ImageSet;
