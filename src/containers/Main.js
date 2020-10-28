import React from 'react'
import Header from '../components/Header/Header'
import PublicGists from './PublicGists/PublicGists'


class Main extends React.Component {


    render() {
        return (
            <>
            
            <main style = {{padding: '14px'}}>
                <Header />
                 <PublicGists />
            </main>
               
            </>
        )
    }
}

export default Main