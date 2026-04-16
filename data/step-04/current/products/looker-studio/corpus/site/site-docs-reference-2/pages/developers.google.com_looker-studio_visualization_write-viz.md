---
title: "Writing your visualization \_|\_ Community Visualizations \_|\_ Google for\
  \ Developers"
url: https://developers.google.com/looker-studio/visualization/write-viz
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/looker-studio/visualization
source_metadata:
  url: https://developers.google.com/looker-studio/visualization/write-viz
  title: "Writing your visualization \_|\_ Community Visualizations \_|\_ Google for\
    \ Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Looker Studio
Community Visualizations
Writing your visualization
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Community Visualizations are currently in Developer Preview, offering a way to create custom visualizations using JavaScript and the Looker Studio helper library.
Visualizations should be written in JavaScript, utilizing the subscribeToData function from the helper library to render data and handle updates, ensuring the canvas is cleared on each redraw to prevent visual stacking.
All visualization code, including external libraries and the Looker Studio helper library, must be bundled into a single JavaScript file for upload.
A manifest file ( manifest.json ) is required to provide metadata and resource locations for the visualization, with the devMode parameter controlling caching behavior during development and deployment.
After development, the visualization can be hosted to make it accessible within Looker Studio reports.
Note: The Community Visualization feature is in "Developer Preview". To learn
more about upcoming features and improvements during this period visit the
Developer Preview page.
Writing the visualization code
The Looker Studio helper library provides an interface between you and Looker Studio. To use the library, provide a callback function that renders the
visualization.
The most salient function in the library is subscribeToData , which takes two
arguments: a callback function that renders the visualization, and an
options object that specifies what kind of transform you'd like your data to
take. To learn more, review the library reference .
The following provides an outline of what your visualization JavaScript could
look like.
function drawViz ( vizData ){
var height = dscc . getHeight ();
var width = dscc . getWidth ();
console . log ( vizData );
// this is where you write your viz code
}
dscc . subscribeToData ( drawViz , { transform : dscc . objectTransform })
There are a few key things to keep in mind when writing a community
visualization.
Updates from the subscribeToData function occur when the data, styling, or
iframe size changes.
Key Point: The drawViz() function should clear the canvas each time it is
called. Otherwise, it may continuously append visualizations to the iframe.
For example:
// create and add the canvas
// do this one time
var canvasElement = document . createElement ( 'canvas' );
var ctx = canvasElement . getContext ( '2d' );
canvasElement . id = 'myViz' ;
document . body . appendChild ( canvasElement );
function drawViz ( data ){
// clear the canvas
var ctx = canvasElement . getContext ( '2d' );
ctx . clearRect ( 0 , 0 , canvasElement . width , canvasElement . height );
// viz code goes here
}
Looker Studio loads and runs JavaScript files, not HTML. All DOM manipulation
needs to happen through JavaScript.
For example: the following code defines and appends a div to the DOM.
// create and add the canvas
var chartElement = document . createElement ( 'div' );
chartElement . id = 'myViz' ;
document . body . appendChild ( chartElement );
Bundling the code
Looker Studio community visualizations only allow you to load one JavaScript
file. The uploaded code should be a single file that includes the dscc
helper library , any JavaScript visualization libraries, and your visualization
code.
To do this in bash, you can use the cat command, like below.
cat dscc.min.js vizLibrary.js myVizSource.js > myViz.js
Defining the manifest
The visualization manifest file provides metadata about the visualization, as
well as information about the location of visualization resources. The location
of the manifest file is referred to as the "component ID", and used to load a
community visualization.
Review the manifest reference to see a sample manifest .
Note: The name of the manifest must be manifest.json
The devMode parameter of the manifest determines the caching behavior of the
visualization. While developing the visualization, devMode should be true to
ensure that hard refreshes load the latest version of the resources. Once the
code is stable, devMode should be false to ensure that reports with
community visualizations load quickly. To learn more about caching, see the
caching advanced guide .
Next steps
Now that you have the code for your visualization written, learn how to
host your visualization .
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-03 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-03 UTC."],[],[]]
