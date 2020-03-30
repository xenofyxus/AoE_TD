import React from 'react';

const InfoPresentation = (teams) => (
    <div className="row text-center">
    <div className="col my-auto">
        <div className="form-group">
            {/*
            <label htmlFor="sel1">Select list:</label>
            <select className="form-control" id="sel1">
              {params.teams.map((name) => <option>{name}</option>)
              }
            </select>
            */}
            {JSON.stringify(teams.teams)}
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
    <button type="button" className="btn btn-success">I want to play!</button>
    </div>
    <div className="col">

    </div>
  </div>
);

export default InfoPresentation;