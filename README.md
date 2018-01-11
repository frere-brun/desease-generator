# Desease generator

This is the data generator for blood-risk-map. ( link here )



# How to use

## Install

npm install;

## Usage

To generate the final data file, u can use

npm run start;

or

node generator.js

it will take the ./data/data.json and then generate ./data/generatedData.json



# Data reference

The data file is an array of deseases that could be described like that

{
  "places": [{"name":"france", "file": "france.json", "specificPlaces":null}],
  "name": "France",
  "beginDate": "12-06-17",
  "endDate": "12-06-16",
  "duration": "6 months",
  "requiredTests": "PCR / PWC Requis"
}



# To do

- Fix ressources/places/tropics.json

