import React from 'react'
import { TeamVactionEntry } from './TeamVactionEntry'
import { connect } from "react-redux";
  
export const TeamVacationList = (props) => (
    console.log(props)

    // <div className='TeamVacitonList'>
    //     <div className="curUserEntries">
    //     {props.userVacationList.map(vacation,i =>(
    //        <TeamVactionEntry 
    //            key = {i}
    //            userName = {vacation.userName}
    //            vacationFrom = {vacation.from}
    //            vacationTo = {vacation.to}
    //            vacationStatus = {vacation.status}
    //        />
    //     ))}
    //     </div>
    //     <div className="othersEntries">
    //     {props.userVacationList.map(vacation,i=>(
    //        <TeamVactionEntry 
    //            key = {i}
    //            userName = {vacation.userName}
    //            vacationFrom = {vacation.from}
    //            vacationTo = {vacation.to}
    //            vacationStatus = {vacation.status}
    //        />
    //     ))}
    //     </div>
    // </div>
)

const mapStateToProps = state => ({
    vacations : state.vacactionReducer
  });

export default connect(mapStateToProps)(TeamVacationList)
