import React from 'react'

export const TeamVactionEntry = ({userName,vacationFrom,vacationTo,vacationStatus}) => (
    <div className='TemaVactionEntry'>
        <div className='userName'>
        {userName}
        </div>
        <div>
            <div className='VacationFrom'>
                {vacationFrom}
            </div>

            <div className='VacationTo'>
                {vacationTo}
            </div>
        </div>
        <div className='VactaionStatus'>
        {vacationStatus}
        </div>
    </div>
)


export default TeamVactionEntry

// userName = {vacation.userName}
// vacationFrom = {vacation.vacationFrom}
// vacationTo = {vacation.vacationTo}
// vacationStatus = {vacation.vacationStatus}