import A from './A'
import Head from 'next/head'

const MainContainer = ({children, title = 'nEXT jS'}) => {
    return (
        <>
            <Head>
                <meta keywords="js react next"></meta>
                <title>{ title }</title>
            </Head>
            <div className={'navbar'}>
                <A href="/" text={'Главная'} />
                <A href="/users" text={'Пользователи'} />
            </div>
            <div>{children}</div>
        </>
    )
}

export default MainContainer
