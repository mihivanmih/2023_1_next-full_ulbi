import { useRouter } from 'next/router'
import MainContainer from '../../components/MainContainer'

export default function User({user}) {
    
    console.log(user)
    
    const {query} = useRouter()
    
    return (
        <MainContainer>
            <h1>Пользователь { query.id }</h1>
            <div>Имя пользователя - { user.name }</div>
        </MainContainer>
    )
}

export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${ params.id }`)
    const user = await response.json()
    return {
        props: {user}, // will be passed to the page component as props
    }
}