import { Speaker } from "../page";
import { SpeakerFromSession } from "../../page";
import styles from "../../conference.module.css"

async function fetchSpeakers() {
    const result = await fetch(
        "https://raw.githubusercontent.com/DawID-Log/Reply-Globomatics/master/apiRawFile/speakers.json"
    );
    const data = await result.json();
    return data;
}

async function fetchSpeakerInfo(slug: string) {
    const searchElement = slug.replace("%20", " ");
    const speakerJson = await fetchSpeakers();
    const speakerInfo: Speaker = speakerJson.speakers?.find((speaker: Speaker) => speaker.name === searchElement);
    return speakerInfo;
}

export default async function Page({params}: any) {
    const speakerInfo = await fetchSpeakerInfo(params.slug);

    return (
        <div className={styles.infoContainer}>
            <h3 className={styles.titleText}>{speakerInfo?.name}</h3>
            <h5 className={styles.descText}>About: {speakerInfo?.bio}</h5>
            {speakerInfo?.sessions && speakerInfo.sessions.map(({name, id}: SpeakerFromSession) => (
                <div key={id}>
                    <h5 className={styles.descText}>Session: {name}</h5>
                </div>
            ))}
        </div>
    );
}