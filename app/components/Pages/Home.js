import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


export class Home extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {


        return (
            <div>

                <h1>We work with:</h1>
                ....... Logos ........



            </div>



        );
    }



}


export default connect(null)(Home);
