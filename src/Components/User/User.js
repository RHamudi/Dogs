import { Route, Routes } from "react-router-dom"
import UserHeader from "./UserHeader"
import UserPhotoPost from "./UserPhotoPost"
import Feed from '../Feed/Feed'
import UserStats from "./UserStats"

function User() {
    return (
        <section className="container">
            <UserHeader></UserHeader>
            <Routes >
                <Route path="/" element={<Feed />}/>
                <Route path="postar" element={<UserPhotoPost />}/>
                <Route path="estatisticas" element={<UserStats />}/>
            </Routes>
        </section>
    )
}

export default User