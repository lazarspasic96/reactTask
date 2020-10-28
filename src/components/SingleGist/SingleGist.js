
import React from 'react'
import classes from  './SingleGist.module.css'



class SingleGist extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isClicked: false
        }

    }

    handleVisitedState = () => {

        this.setState({
            isClicked: !this.state.isClicked
        })
    }

    render() {

        const { image, name } = this.props.data
        const { isClicked } = this.state



        return (
            <>
                <div onClick={this.handleVisitedState} className={classes.row}>
                    <div className={classes.profileImg}>
                        <img style={isClicked ? { filter: 'brightness(50%)',  } : null} src={image} />
                    </div>

                    <div className={classes.name}>
                        <p style = {isClicked ? {color: 'blue'}: null} >{name}</p>
                    </div>

                </div>

            </>
        )
    }

}



export default SingleGist