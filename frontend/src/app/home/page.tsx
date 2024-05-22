import Image from "next/image";
import homeImage from "../../images/home-image-1.jpg";
import styles from "./home.module.css";

export default function Page() {
    return (
      <>
        <div className={styles.bgWrap}>
          <Image 
            src={homeImage} 
            alt={"home page image"} 
            quality={100}
            placeholder="blur"
            sizes={"100vm"}
            fill
            style={{
              objectFit: "cover"
            }}
          />
        </div>
        <h1 className={styles.bgHeader}>Humble beginnings a story of life</h1>
        <p className={styles.bgText}>How we became the farmers of the future, tilling the technology of tomorrow today.</p>
      </>
    );
  }
  