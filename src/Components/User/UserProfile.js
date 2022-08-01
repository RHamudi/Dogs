import {useParams} from 'react-router-dom'
import Head from '../../Helper/Head';
import Feed from '../Feed/Feed'

function UserProfile() {
    const {user} = useParams();

    return (
        <section className='container mainSection'>
            <Head title={user} />
            <h1 className='title'>{user}</h1>
            <Feed user={user}/>
        </section>
    )
}

export default UserProfile