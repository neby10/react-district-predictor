import React, { useState } from 'react';
import history from './history.json';

const History = () => {
  // state of selected school
  const [school, setSchool] = useState("");
  const [teamJSON, setTeamJSON] = useState({});

  // const teams = history.filter(item => item.name);

  function handleChange(val) {
    console.log("Val: " + val);
    setTeamJSON(history.find(element => (element.name === val)));
    setSchool(val);
  }
  
  
  return (
    <div className='History'>
      <h1>History</h1>
      <label>Choose School</label>
      {/* LATER: ==> ADD COLOR OF EACH TEAM FUNCTIONALITY SO THAT WHEN A TEAM IS CLICKED, the DESIGN IS BASED ON THEIR COLORS */}
      <br></br>
      <select className='History-select_btn' onChange={(e) => handleChange(e.target.value)}>
        
        {/* <option></option> */}
        {
          history.map((team, i) => (
            <option key={i} value={team.name} >{team.name}</option>
          ))
        }
      </select>
      <div className='History-team-accolades'>
        <h4 className='History-team-accolades-title' >{ school } Team History</h4>
        <div className='History-team-accolades-div' id='State-Champs' >
          <p className='History-team-accolades-heading'>State Champions</p>
          <p className='History-team-accolades-item' >{ teamJSON.team_state_champions }</p>
        </div>
        <div className='History-team-accolades-div' id='State-Runnerups' >
          <p className='History-team-accolades-heading'>State Runner-Up</p>
          <p className='History-team-accolades-item' >{ teamJSON.team_state_runnerup }</p>
        </div>
        <div className='History-team-accolades-div' id='State-Semifinalist' >
          <p className='History-team-accolades-heading'>State Semifinalist</p>
          <p className='History-team-accolades-item' >{ teamJSON.team_state_semifinalist }</p>
        </div>
        <div className='History-team-accolades-div' id='Regional-Champs' >
          <p className='History-team-accolades-heading'>Regional Champions</p>
          <p className='History-team-accolades-item' >{ teamJSON.team_regional_champions }</p>
        </div>
        <div className='History-team-accolades-div' id='District-Champs' >
          <p className='History-team-accolades-heading'>District Champions</p>
          <p className='History-team-accolades-item' >{ teamJSON.team_district_champions }</p>
        </div>
      </div>


{/* NOTE: USE .map to map each row based on how many years program has been in existence, using 
history.json only display years program has been a program. ie laingsburg started in 2010 so log that in history.json 
using .map() */}
      <div className='History-individual-accolades'>
        <h4 className='History-individual-accolades-title'>{ school } Individual History</h4>
        <div>
          <p>State Champions</p>
          <p>(Individual State Champs Listed Here)</p>
        </div>
      </div>
      
      
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Regional Qualifiers</th>
            <th>State Qualifiers</th>
            <th>State Placers</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>2022</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>2021</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>2020</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>2019</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default History
