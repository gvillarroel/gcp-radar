---
title: "Using the helper library \_|\_ Community Visualizations \_|\_ Google for Developers"
url: https://developers.google.com/looker-studio/visualization/library-guide
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/looker-studio/visualization
source_metadata:
  url: https://developers.google.com/looker-studio/visualization/library-guide
  title: "Using the helper library \_|\_ Community Visualizations \_|\_ Google for\
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
Using the helper library
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Looker Studio uses postMessage to communicate data and styling to embedded community visualizations.
The ds-component library helps manage communication with Looker Studio and get the iframe dimensions.
dscc.subscribeToData lets you register a callback to handle data and styling updates from Looker Studio.
Two data transformation options, objectTransform and tableTransform , help format incoming data for use in visualization libraries.
You can access styling, user interactions, fields, theme, and data through the data object passed to the callback function.
Looker Studio uses the
postMessage
interface to provide data and styling information to the iframe containing the
community visualization. This guide provides more detail on using the helper
library.
For community visualizations,
ds-component serves two functions.
Obtain the dimensions of the iframe
Manage communication with Looker Studio
Subscribing to events
When a user interacts with your visualization, such as changing selected fields,
style, or resizing the component, Looker Studio sends events to your
visualization.
dscc.subscribeToData registers a callback that will be invoked for each
postMessage event from Looker Studio. The callback is passed a data
object.
function drawViz ( data ){
// obtain the height and width to scale your visualization appropriately
var height = dscc . getHeight ();
var width = dscc . getWidth ();
// write your visualization code here
console . log ( "I'm the callback and I was passed this data: " + JSON . stringify ( data , null , ' ' ));
}
// call drawViz every time Looker Studio sends a new postMessage
dscc . subscribeToData ( drawViz , { transform : dscc . objectTransform });
The returned data
Both data transforms return an object with five keys.
Key
Purpose
style
User-selected and default style information
fields
User-selected fields information
interactions
User-selected interactions
theme
Report theme information
tables
Rows of data
dateRanges
Default and comparison date ranges
Format of the data:
{
fields : object ( fieldsByConfigId ),
style : object ( styleById ),
interactions : object ( interactionsById ),
theme : object ( themeStyle ),
tables : object ( tablesById ),
dateRanges : object ( dateRangesById ),
}
Different visualizations require different data formats. Two common formats are
an array of arrays or an array of objects. The ds-component library provides two
transforms, which are designed to get you straight to these data formats.
The two transforms are documented in the
library-reference . These
transforms map easily to data formats commonly expected by JavaScript
visualization libraries. The two supported transforms are: objectTransform ,
which returns an array of objects, and tableTransform , which returns an array
of arrays.
dscc.objectTransform
Some visualizations expect data as an array of objects.
For example:
var data = [
{ 'colA' : 'hello' , 'colB' , 'world' },
{ 'colA' : 'hello' , 'colB' , 'world' }
];
The following code shows how to access an array of objects from the
dscc.objectTransform format.
function drawViz ( data ){
// what the object transform could look like
// [
// {'configId1': ['hello'], 'configId2': [1] },
// {'configId1': ['world'], 'configId2': [2] }
// ]
var dsccObjectTransformData = data . tables . DEFAULT ;
// creating an array of objects
var arrayOfObjects = dscc . ObjectTransformData . rows . map ( function ( d ){
return {
'configId1' : d . configId1 [ 0 ],
'configId2' : d . configId2 [ 0 ]
};
};
}
If data sections are defined such that a user can input multiple fields (for
example, if there were two dimensions defined for a sankey diagram), then the
transform will depend on your use case, as the data format returned by Looker
Studio will look more like:
var dsccObjectTransformData = [
{ 'configId1' : [ 'hello' , 'there' ], 'configId2' : [ 1 ] },
{ 'configId1' : [ 'world' , 'globe' ], 'configId2' : [ 2 ] }
]
Note: The data transformations needed will depend on your visualization config.
dscc.tableTransform
Some visualization libraries expect an array of arrays.
For example:
var data = [
[ 'hello' , 1 ],
[ 'world' , 2 ]
];
The following code shows how to access a row of rows from the
dscc.tableTransform format.
function drawViz ( data );
// what the below object looks like
// {
// headers: [{
// "id": "qt_ky8sltutsb",
// "name": "dimension",
// "type": "TEXT",
// "concept": "DIMENSION",
// "configId": "configId1"
// }, {
// "id": "qt_m9dtntutsb",
// "name": "metric",
// "type": "NUMBER",
// "concept": "METRIC",
// "configId": "configId2"
// }],
// rows: [
// ['hello', 1],
// ['world', 2]
// ];
// }
var dsccTableTransformObject = data . tables . DEFAULT ;
// accessing the row of rows
var rowOfRows = dsccTableTransformObject . rows ;
// accessing the header row
var headers = dsccTableTransformObject . headers ;
}
dscc . subscribeToData ( drawViz , { transform : tableTransform });
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-03 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-03 UTC."],[],[]]
