import { useEffect, useState } from 'react'
import Link from 'next/link'
import style from '../styles/user.module.scss'
import Head from 'next/head'
import MainContainer from '../components/MainContainer'

const Users = ({users}) => {
    
    // const [users, setUsers] = useState([
    //     { id: 1, name: 'petr'},
    //     { id: 2, name: 'oleg'},
    // ])
    //
    // useEffect(async() => {
    //
    // }, [])
    
    
    return (
        <MainContainer title={'Страница пользователей'}>
            <div className={style.user}>
                <h1>Список пользователей</h1>
                <ul>
                    {users.map( user =>
                        <Link href={`users/${user.id}`} key={user.id}>
                            <li>
                                {user.name}
                            </li>
                        </Link>
                    )}
                </ul>
            </div>
        </MainContainer>
    )
}

export default Users

export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    return {
        props: {users}, // will be passed to the page component as props
    }
}