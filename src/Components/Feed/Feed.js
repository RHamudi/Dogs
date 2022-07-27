import FeedModal from './FeedModal'
import FeedPhotos from './FeedPhotos'
import { useState } from 'react'

function Feed() {
    const [modalPhoto, setModalPhoto] = useState(null);

    return (
        <div >
            {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />}
            <FeedPhotos setModalPhoto={setModalPhoto}/>
        </div>
    )
}

export default Feed