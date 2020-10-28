import React from 'react'
import classes from './PublicGists.module.css'
import SingleGist from '../../components/SingleGist/SingleGist'
import Gist from '../../models/Gist'
import http from '../../services/http'
import Button from '../../components/Button/Button'



class PublicGists extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arrOfGists: [],
            displayPages: 3,
            gistPerPage: 30,
            currentPage: 1,
            totalPages: 36,
            loading: true,
            isClicked: false
           
        }
    }


    async handlePagination(page) {

        this.setState({
            loading: true
        })




        try {
            const response = await http(page)
            this.setState({
                arrOfGists: response.data.map(gist => new Gist(gist)),
                currentPage: page,
                loading: false
            })

        } catch (error) {

           alert(error.response)
        }

    }



    async componentDidMount() {
        try {
            const response = await http(1)

            this.setState({
                arrOfGists: response.data.map(gist => new Gist(gist)),
                loading: false

            })
        } catch (error) {
            alert(error.response)
        }


    }


    render() {

        let { arrOfGists, totalPages, displayPages, currentPage, loading } = this.state
        if (loading) {
            return <p>Loading...</p>
        }


        let renderButtons = []

        let maxLeft = (currentPage - Math.floor(displayPages / 2))
        let maxRight = (currentPage + Math.floor(displayPages / 2))

        if (maxLeft < 1) {
            maxLeft = 1
            maxRight = displayPages
        }

        if (maxRight > totalPages) {
            maxLeft = totalPages - (displayPages - 1)

            if (maxLeft < 1) {
                maxLeft = 1
            }

            maxRight = totalPages
        }


        for (let i = maxLeft; i <= maxRight; i++) {
            renderButtons.push(<Button key = {i} clicked={() => this.handlePagination(i)}>{i}</Button>)
        }


        //first page
        let first;
        if (currentPage !== 1) {
            first = <Button clicked={() => this.handlePagination(1)}>{'<<First'}</Button>
        }

        //last page

        let last;

        if (currentPage !== totalPages) {
            last = <Button clicked={() => this.handlePagination(totalPages)}>{'Last>>'}</Button>
        }


        return (
            <>

                <section id={'gist-section'} className={classes.landigPage}>
                    {arrOfGists.map((gist, index) => <SingleGist key = {index}  data={gist} />)}
                </section>


                <div className={classes.pagination}>
                    {first}
                    {renderButtons}
                    {last}
                </div>
            </>
        )
    }
}

export default PublicGists