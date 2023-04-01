import Link from 'next/link'

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/home">Home</Link>
      </li>
      <li>
        <Link href="/blog">About Us</Link>
      </li>
      <li>
        <Link href="/createblog">Blog Post</Link>
      </li>
    </ul>
  )
}