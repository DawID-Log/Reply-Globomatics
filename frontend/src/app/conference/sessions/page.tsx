import styles from "../conference.module.css"
import { SpeakerFromSession } from "../page";

async function fetchSessions() {
  const result = await fetch(
    "https://raw.githubusercontent.com/DawID-Log/Reply-Globomatics/master/apiRawFile/sessions.json",
    { cache: "no-store" }
  );
  const data = result.json();
  return data;
}

type Session = {
  id: any,
  title: string,
  description: string,
  room: string,
  day: string,
  track: string,
  speakers: SpeakerFromSession[],
}

export default async function Page() {
  const data = await fetchSessions();


  return (
    <div className={styles.parentContainer}>
      <h1>Welcome to Session Page</h1>
      {data.sessions.map((session: Session) => (
          <div key={session.id} className={styles.infoContainer}>
            <h3 className={styles.titleText}>{session.title}</h3>
            {session.speakers?.map((speaker: SpeakerFromSession) => (
                <h3 key={speaker.id} className={styles.titleText}>{speaker.name}</h3>
            ))}
            <h5 className={styles.descText}>{session.description}</h5>
            <h4 className={styles.infoText}>Room: {session.room}</h4>
            <h4 className={styles.infoText}>Day: {session.day}</h4>
            <h4 className={styles.infoText}>Track: {session.track}</h4>
          </div>
        ))}
    </div>
  );
}
