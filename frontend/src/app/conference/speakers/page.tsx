import Link from "next/link";
import styles from "../conference.module.css"
import { SpeakerFromSession } from "../page";

export type Speaker = {
  id: any,
  name: string,
  bio: string,
  sessions: SpeakerFromSession[],
}

export async function fetchSpeakers() {
  const result = await fetch(
    "https://raw.githubusercontent.com/DawID-Log/Reply-Globomatics/master/apiRawFile/speakers.json"
  );
  const data = await result.json();
  return data;
}

export default async function Page() {
  const data = await fetchSpeakers();

  return (
    <div className={styles.parentContainer}>
      <h1>Welcome to Speakers Page</h1>
      {data.speakers.map((speaker: Speaker) => (
        <div key={speaker.id} className={styles.infoContainer}>
          <Link className={styles.bgLinks} href={`/conference/speakers/${speaker.name}`}>
            <h3 className={styles.titleText}>{speaker.name}</h3>
          </Link>
          <h5 className={styles.descText}>{speaker.bio}</h5>
        </div>
      ))}
    </div>
  );
}
  