import React from 'react';
import {Link} from 'react-router-dom'
import {useEffect} from 'react'
import fetchTeams from '../actions/fetchTeams';
import axios from 'axios';
const InfoPresentation = function(props){
  const teams = getTeams();
  return(
    <div className="row text-center">
    <div className="col my-auto">
        <div className="form-group">
            {/*
              TODO: SELECT TEAM
            */}
            {JSON.stringify(teams)}
            </div>
        </div>
    <div className="col my-5">
      <div className="media-body text-center my-5">
        <h5 className="mt-0">Welcome!</h5>
        <p>
        This game is a classic tower defence game. Place your units on strategic positions to force the incoming waves of enemies to fight them.
        Make sure to keep an eye on your economy so you do not run out of resources.
        </p>
      </div>
    </div>
    <div className="col my-auto">
    <Link to="/game">
    <button type="button" className="btn btn-success">I want to play!</button>
    </Link>
    </div>
    <div className="col">

    </div>
  </div>
);
}

const getTeams = () =>
{axios.get("https://us-central1-aoe-td.cloudfunctions.net/API_PROXY")
.then(res => res.json())
.then(res => {
    if(res.error) {
        throw(res.error);
    }
    return res;
})
.catch(error => {
    return("api-call went wrong")
})}

export default InfoPresentation;