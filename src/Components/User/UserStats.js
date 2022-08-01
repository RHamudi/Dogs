import { lazy, Suspense, useEffect } from "react"
import {STATS_GET } from "../../api"
import Head from "../../Helper/Head"
import useFetch from '../../Hooks/useFetch'
import Loading from '../../Helper/Loading'
import Error from '../../Helper/Error'
const UserStatsGraphs = lazy(()=> import('./UserStatsGraphs'))

function UserStats() {
    const {data, error, loading, request} = useFetch()
    
    useEffect(()=>{
        async function getData(){
            const {url, options} = STATS_GET();
            await request(url, options)
        }
        getData()
    },[request])


    if(loading) return <Loading />
    if(error) return <Error error={error} />
    if(data) 
    return (
        <Suspense fallback={<div></div>}>
            <Head title="Estatisticas" />
            <UserStatsGraphs data={data} />
        </Suspense>
    )
    else return null
}

export default UserStats