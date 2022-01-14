# ScalingFunds Live Coding Challenge

Welcome to the ScalingFunds live coding challenge! Please read through this entire
README first before starting.

## Goal

The goal of this challenge is to

1. Build an API Gateway that sits in between a frontend React.JS application and a backend Node.JS API.
1. Update the frontend to consume and display data through the API gateway

## Background

API Gateways are often used to provide consuming clients with a single entry
point. A web app, mobile app, CLI tool, Node.JS library may all call the same
API gateway that consolidates an entire suite of microservices.

This repository contains 3 folders:

- `/backend` - Containing the backend Node.JS API that returns some mock data
  about investors and their investments.
- `/frontend` - A React.JS client that presents the data from the API
- `/gateway` - An empty folder to contain the API Gateway code

## Task

Your first task is to create an API Gateway written in Node.JS that routes
requests from the frontend to the backend like this:

`frontend` -> `gateway` -> `backend`

The second task it to update the frontend to show a list of the investor's investments on the frontend.

## Getting Started

After cloning down this repository, start the backend by running `node backend/index.js`. The backend is now available at localhost:9000.

Then install and start the frontend: `cd frontend && npm i && npm start`. The frontend is now available at localhost:9002.

The `/gateway` folder is where you should write all code for proxying requests
to the downstream backend.

## Requirements

1. The frontend shows a list of investors and their investments
1. The frontend communicates only with the API gateway
1. The gateway exposes an endpoint at localhost:9001/investors that proxies the request to the backend service returning investors and their investments.

## How We Evaluate

1. Does your solution fulfill all the requirements above?
1. Is it designed and coded well?
1. How good is your problem solving and technical communication?
