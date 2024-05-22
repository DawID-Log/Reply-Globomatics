import Link from "next/link";
import styles from "./speaker.module.css"

export default function Page() {
    return (
      <>
        <h1>Welcome to Speakers Page</h1>
        <p className={styles.speaker}>Speakers: </p>
        <h2>
          <Link href="/conference">Back to confernece</Link>
        </h2>
      </>
    );
  }
  