import MainContainer from '../components/MainContainer'
import { useEffect } from 'react'

const Index = () => {
    
    useEffect(() => {
        async function vkPlaylist () {
            await VK.Widgets.Playlist("vk_playlist_-2000556516_7556516", -2000556516, 7556516,'fc0b322b699ca1d068', {width: 400});
        }
        vkPlaylist()
    }, [])
    
    return (
        <MainContainer title={'Главная страница'}>
            <h1>Главная страница</h1>
            <div id="vk_playlist_-2000556516_7556516" className={'vk'}></div>
        </MainContainer>
    )
}

export default Index
