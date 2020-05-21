import React, { Component } from 'react';
import TeamVacationList from './TeamVactionList'

const axios = require("axios")


class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <div>
                    <TeamVacationList />
                </div>
                <div>
                    <ShowModal />
                </div>
                <button id="vacation-button">휴가 신청</button>
            </div>
        )
    }
}


export default { Main }