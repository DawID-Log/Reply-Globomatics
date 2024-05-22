import Link from "next/link";

export default function Page() {
    return (
      <>
        <h1>Welcome to Session Page</h1>
        <h2>
          <Link href="/conference">Back to confernece</Link>
        </h2>
      </>
    );
  }
  