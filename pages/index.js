import "../styles/styles.scss";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Link href="/Home">go to home!</Link>
    </div>
  )
}
