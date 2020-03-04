import React, { Component } from 'react';


const InfoPresentation = (params) => (
    <div class="row text-center">
    <div class="col my-auto">
        <div class="form-group">
            <label for="sel1">Select list:</label>
            <select class="form-control" id="sel1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
            </select>
            </div>
        </div>
    <div class="col my-5">
      <div class="media-body text-center my-5">
        <h5 class="mt-0">Welcome!</h5>
        <p>
        This game is a classic tower defence game. Place your units on strategic positions to force the incoming waves of enemies to fight them.
        Make sure to keep an eye on your economy so you do not run out of resources.
        </p>
      </div>
    </div>
    <div class="col my-auto">
    <button type="button" class="btn btn-success">I want to play!</button>
    </div>
    <div class="col">

    </div>
  </div>

);

export default InfoPresentation;