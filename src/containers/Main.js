import React from 'react'
import PublicGists from './PublicGists/PublicGists'


class Main extends React.Component {


    render() {
        return (
            <>
            <main style = {{padding: '10px'}}>
                 <PublicGists />
            </main>
               
            </>
        )
    }
}

export default Main