import Link from 'next/link'
import style from '../styles/A.module.css'

export default function A ({text, href}) {
    return (
        <Link href={href}>
            <span className={style.link}>{text}</span>
        </Link>
    )
}