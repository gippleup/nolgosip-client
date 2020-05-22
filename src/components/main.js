import React from 'react';
import TeamVacationList from './TeamVactionList'
import ShowModal from './ShowModal'
import { fakeData } from '../fakeData'

const axios = require("axios")

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ShowModal : false,
            logged : false,
            loggedUser :{
                auth: 'user',
                userName: '일반김코딩',
                group: '',
                email: 'codingkim@example.com',
                mobile: '010-1234-1111',
                leftVacation: 20,
                usedVacation: 0,
                vacations: []
            },
            employeeList: [],
            employeeVacationList: [],
            hasSubmit: false,
        }
        this.getTeamVacation = this.getTeamVacation.bind(this)
        this.getUserVacation = this.getUserVacation.bind(this)
        this.getFakeData = this.getFakeData.bind(this)
        this.handleOpenModal = this.handleOpenModal.bind(this)
    }

    getFakeData = () => (
        this.setState = ({
              vacations : fakeData[0].vacations
            })
    )
    
    // 메인 화면이 렌더 되면서 보여 준다. 
    componentDidMount(){

    }

    //http://13.125.27.141:5000/ 

    // url은 수정

      // 휴가 신청 버튼을 눌렀을 때 모달 창이 나오는 함수 
      handleOpenModal () {
        this.setState = ({
            showModal : true
        })
    }

    // 팀 휴가 상태를 가져 오는 함수  
    getTeamVacation = () => (
        axios.get('http://13.125.27.141:5000/',{
            vacations : this.state.loggedUser.vacations,
            from : this.state.loggedUser.from,
            to : this.state.loggedUser.to,
            groupID : this.state.loggedUser.groupID,
            groupName : this.state.loggedUser.groupName,
            target : 'group'
        })
        .then(res => this.setState = {
            vacations : res.data.vacations
        })
        .then(err => console.log(err) )
    )

    // 내 휴가 상태를 가져 오는 함수 
    getUserVacation = () => (
        axios.get('http://13.125.27.141:5000/',{
            vacations : this.state.loggedUser.vacations,
            from : this.state.loggedUser.from,
            to : this.state.loggedUser.to,
            groupID : this.state.loggedUser.groupID,
            userName : this.state.loggedUser.userName,
            target : 'user'
        })
        .then( res => 
            this.setState = {
                vacations : res.data.vacations
            })
        .then( err => console.log(err) )
    )

    render() {
        const { vacations } = this.state.loggedUser

        return (
            <div>
                <div className = 'userVacation'>
                    {/* <TeamVacationList userVacationList = {vacations} getUserVacation = {this.getUserVacation} /> */}
                </div>
                <div className = 'ohterVaction'>
                    {/* <TeamVacationList userVacationList = {vacations} getTeamVacation = {this.getTeamVacation}/> */}
                </div>
                <div>
                <ShowModal />
                </div>
            </div>
        )
    }
}


export default Main 