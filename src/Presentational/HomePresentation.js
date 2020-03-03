import React, { Component } from 'react';
import logo from '../assets/AOE_TD_LOGO.png';

const HomePresentation=()=> (
    <div class="row text-center">
    <div class="col my-auto">
      <button type="button" class="btn btn-info">I want to read more!</button>
    </div>
    <div class="col my-5">
      <div class="media-body text-center my-5">
        <h5 class="mt-0">Welcome!</h5>
        <p>
        This game is a classic tower defence game. Place your units on strategic positions to force the incoming waves of enemies to fight them.
        Make sure to keep an eye on your economy so you do not run out of resources.
        </p>
        <img src={logo} width="100" height="100" class="my-auto" alt=""/>
      </div>
    </div>
    <div class="col my-auto">
    <button type="button" class="btn btn-success">I want to play!</button>
    </div>
    <div class="col">

    </div>
  </div>
);

export default HomePresentation;