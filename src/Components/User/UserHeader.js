import UserHeaderNav from "./UserHeaderNav"
import styles from "./UserHeader.module.css"
import { useEffect, useState } from "react"
import {useLocation} from 'react-router-dom'

function UserHeader() {
    const [title, setTitle] = useState('');
    const location = useLocation();

    useEffect(()=> {
        const {pathname} = location
        switch(pathname) {
            case '/conta/postar':
                setTitle('Poste Sua Foto')
                break
            case '/conta/estatisticas':
                setTitle('Estatisticas')
                break
            default: 
                setTitle('Minha Conta')
        }
        
    }, [location])

    return (
        <div className={styles.header}>
            <h1 className="title">{title}</h1>
            <UserHeaderNav />
        </div>
    )
}

export default UserHeader