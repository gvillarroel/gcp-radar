---
title: "Looker Studio Community Component (dscc) library reference \_|\_ Community\
  \ Visualizations \_|\_ Google for Developers"
url: https://developers.google.com/looker-studio/visualization/library-reference
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/looker-studio/visualization
source_metadata:
  url: https://developers.google.com/looker-studio/visualization/library-reference
  title: "Looker Studio Community Component (dscc) library reference \_|\_ Community\
    \ Visualizations \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Products
Looker Studio
Community Visualizations
Reference
Looker Studio Community Component (dscc) library reference
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
dscc is a JavaScript library that simplifies building Looker Studio Community Components by providing functions to get component dimensions, manage data subscriptions, and handle interactions.
Data received from Looker Studio can be structured in tableFormat (rows and headers) or objectFormat (grouped by configuration IDs), both containing fields, style, theme, and interaction details.
Developers can use functions like subscribeToData to receive data updates and sendInteraction to trigger actions within Looker Studio based on user interactions with the component.
Component styling is managed through the style object, offering access to user-selected and default styles, as well as the report's theme properties via themeStyle .
The library provides access to date range information ( dateRanges ) and interaction data ( interactions ), enabling dynamic data visualization and filtering capabilities within components.
Note: The Community Visualization feature is in "Developer Preview". To learn
more about upcoming features and improvements during this period visit the
Developer Preview page.
Overview of the API
dscc (Looker Studio Community Component) is a library to help with building
community components for Looker Studio. The source code can be found on
GitHub .
dscc exposes three functions: getWidth() , getHeight() , and
subscribeToData() .
getWidth()
Name
Parameters
Return Type
Description
getWidth()
None
number
Returns the width of the iframe, in
pixels
Using getWidth()
// to get the width of the iframe
var width = dscc . getWidth ();
getHeight()
Name
Parameters
Return Type
Description
getHeight()
None
int
Returns the height of the iframe,
in pixels
Using getHeight()
// to get the height of the iframe
var height = dscc . getHeight ();
sendInteraction()
The sendInteraction() function sends a message to Looker Studio with the data
for a filter.
Parameters:
Name
Type
Description
actionID
string
The string that
corresponds to
the actionId in
the config
interaction
enum(InteractionType)
Tells Looker Studio
Studio about
the interaction
data
object(InteractionData)
Provides the
required data
for an
interaction
InteractionType
Currently, the only valid InteractionType is FILTER .
Name
Type
Description
dscc.InteractionType.FILTER
Enum
Describes the FILTER interaction
Using sendInteraction
// the actionID can either be hardcoded or parsed from the returned data
var actionId = "interactionConfigId" ;
// dscc provides enums for the interaction types
var FILTER = dscc . InteractionType . FILTER ;
var fieldID = "qt_m9dtntutsb" ;
var dataValue = "Asia" ;
// sendInteraction expects data that tells you the concepts and the values of
// those concepts to use in constructing a filter.
var interactionData = {
"concepts" : [ fieldId ],
"values" : [[ dataValue ]]
}
dscc . sendInteraction ( actionId , FILTER , interactionData );
interactionData
var interactionData = {
"concepts" : array ( fieldId ),
"values" : array ( array ( dataValue ))
}
Field
Type
Description
concepts
Array
Array of fieldIds
values
Array<Array>
Nested array of data values. Each subarray
should be the length of the concepts array.
Each value in the subarray corresponds to a
dimension value.
Sample interactionData :
var interactionData = {
"concepts" : [ "dim1Id" , "dim2Id" ],
"values" : [
[ "dim1Val1" , "dim2Val1" ],
[ "dim1Val2" , "dim2Val2" ]
]
}
Using dscc.sendInteraction with the above interactionData is equivalent to
the following SQL statement:
SELECT data WHERE
( dim1 == dim1Val1 AND dim2 == dim2Val1 )
OR
( dim1 == dim1Val2 AND dim2 == dim2Val2 );
clearInteraction()
The clearInteraction() function sends an message to Looker Studio to clear a
filter previously set by this visualization.
Parameters:
Name
Type
Description
actionID
string
The string that corresponds to the
actionId in the config
interaction
enum(InteractionType)
Tells Looker Studio about the
interaction
Using clearInteraction()
// the actionID can either be hardcoded or parsed from the returned data
var actionId = "interactionConfigId" ;
// dscc provides enums for the interaction types
var FILTER = dscc . InteractionType . FILTER ;
dscc . clearInteraction ( actionId , FILTER );
subscribeToData(callback, options)
The subscribeToData() function subscribes to messages from Looker Studio.
Parameters:
Name
Type
Description
callback(data)
function
A function that takes the data returned by
subscribeToData .
options
object
Defines the desired data return format
The options object looks like:
{
transform : dscc . tableTransform | dscc . objectTransform
}
Return value:
Type
Description
function
Unsubscribes callback from further messages from Looker Studio
Using subscribeToData()
// define and use a callback
var unsubscribe = dscc . subscribeToData ( function ( data ){
// console.log the returned data
console . log ( data );
}, { transform : dscc . tableTransform });
// to unsubscribe
unsubscribe ();
data
This is the object passed to the callback registered with
dscc.subscribeToData . These following are the fields that are shared between
dscc.objectFormat and dscc.tableFormat .
{
fields : object ( fieldsByConfigId ),
style : object ( styleById ),
interactions : object ( interactionsById ),
theme : object ( themeStyle ),
tables : object ( tablesById ),
dateRanges : object ( dateRangesById )
}
Field
Type
Description
fields
object(fieldsByConfigId)
An object that contains
fields indexed by
their configId
style
object(styleById)
An object that contains
style objects
indexed by their configId
interactions
object(interactionsById)
An object that contains
interaction
objects
theme
themeStyle
A themeStyle object
that contains theme styling
information for the report
tables
object(tablesById)
An object that contains
tableObjects
dateRanges
object(dateRangesById)
An object that contains
dateRanges
fieldsByConfigId
{
configId : array ( field )
}
The fieldsByConfigId object contains arrays of field objects indexed
by the "id" defined in the
visualization config . There is
one entry in this object for each dataField defined in the config.
Field
Type
Description
configId
Array<field>
An array of field(s) associated with the dataField
field
{
id : fieldId ,
name : string ,
description : string ,
type : fieldType ,
concept : enum ( conceptType )
}
The field object provides information about the field that the user selects in
the property panel.
Field
Type
Description
id
string
The Looker Studio generated ID for the field
name
string
The human-readable field name
description
string
The description of the field
type
enum(fieldType)
The semanticType of the field
concept
enum(conceptType)
The conceptType of the field
styleById
{
configId : styleValue
}
The styleById object provides style information indexed by the "id" defined in
the visualization config .
Field
Type
Description
configId
styleValue
An object that contains the style value and the
config-defined default style value
styleValue
{
value : string | object | bool | number ,
defaultValue : string | object | bool | number
}
The styleValue object provides both the user-selected style value and the
default value defined in the config. The type of value and defaultValue
depend on the style element.
Field
Type
Description
value
string OR object OR bool OR
number
The value of the style element
returned from user selection
in the property panel
defaultValue
string OR object OR bool OR
number
The default value of the style
element defined in the
visualization config
interactionsById
{
}
interactionsById object provides interaction data indexed by the
interactionId
visualization config .
Index
Type
Description
configId
interaction
An object that contains data associated with an
interaction
interactionField
{
value : object ( interactionValue ),
supportedActions : array ( InteractionType )
}
The interactionField object contains the array of supportedActions defined in
the config, as well as the user-selected values for the interaction.
Field
Type
Description
value
string OR object OR
bool OR number
The value of the style element
returned from user selection
in the property panel
supportedActions
Array<InteractionType>
The actions supported by this
interaction, as defined in the
config
interactionValue
The interactionValue object provides user-selected values for the interaction
type. If the data key exists, the InteractionData object reflects the
current state of the filter. If the data key does not exist, the visualization
is not currently configured as a filter.
{
type : enum ( InteractionType )
data : object ( interactionData ) | None
}
Field
Type
Description
type
enum(InteractionType)
The user-selected
InteractionType
data
object(InteractionData)
The data
associated with the current state of
the filter. This key does not exist
if the filter is currently cleared.
theme
{
fillColor : {
color : string ,
opacity : number
},
fontColor : {
color : string ,
opacity : number
},
accentFillColor : {
color : string ,
opacity : number
},
accentFontColor : {
color : string ,
opacity : number
},
fontFamily : string ,
accentFontFamily : string ,
increaseColor : {
color : string ,
opacity : number
},
decreaseColor : {
color : string ,
opacity : number
},
gridColor : {
color : string ,
opacity : number
},
seriesColor : [
{
color : string ,
opacity : number
}
]
}
The themeStyle object passes report theme information to the visualization.
Field
Type
Description
fillColor
object
An object of the format {color:
string, opacity: number}
fontColor
object
An object of the format {color:
string, opacity: number}
accentFillColor
object
An object of the format {color:
string, opacity: number}
accentFontColor
object
An object of the format {color:
string, opacity: number}
fontFamily
string
A string describing the font family
accentFontFamily
string
A string describing the accent font
family
increaseColor
object
An object of the format {color:
string, opacity: number}
decreaseColor
object
An object of the format {color:
string, opacity: number}
gridColor
object
An object of the format {color:
string, opacity: number}
seriesColor
Array<object>
An array of objects of the
format {color: string, opacity:
number}
tablesById
{
"DEFAULT" : object ( tableObject ),
"COMPARISON" : object ( tableObject ) | undefined
}
The tableObject provides heading and data information for each row. "DEFAULT"
always will return data, and "COMPARISON" will only be populated if the user
configures the data with comparison rows.
The format of the tableObject is the only difference between dscc.tableFormat
and dscc.objectFormat .
Field
Type
Description
"DEFAULT"
object(tableObject) OR
Array<objectRow>
The tableObject associated with
the data a user adds to a
visualization
"COMPARISON"
object(tableObject) OR
Array<objectRow>
The tableObject associated with
the date comparison data , if
applicable
dateRangesById
{
"DEFAULT" : object ( dateRange ),
"COMPARISON" : object ( dateRange )
}
The dateRangesById object provides information about default and comparison
date ranges . If there are no date ranges, the object will be
empty. DEFAULT and COMPARISON will only be populated if the respective date
ranges are configured by the user. The data in the date ranges are related to
the default and comparison data as defined in tablesById .
Field
Type
Description
"DEFAULT"
object(dateRange)
The dateRange associated with the
default date range , if applicable.
"COMPARISON"
object(dateRange)
The dateRange associated with a
comparison date range , if applicable.
dateRange
{
start : string ,
end : string
}
The dateRange object provides information about the start and end dates of a
default or comparison date range .
Field
Type
Description
start
string
Start date of date range in YYYYMMDD format.
end
string
End date of date range in YYYYMMDD format.
tableFormat reference
tableObject
{
headers : array ( object ),
rows : array ( array )
}
Field
Type
Description
headers
Array
An array of fields objects. These field
objects additionally have a configId property
that corresponds to the IDs from the config.
rows
Array<Array>
An array of arrays: each array is a row of data
Sample tableFormat data
This is sample data returned by using dscc.subscribeToData() with the option
dscc.tableFormat .
{
"tables" : {
"DEFAULT" : {
"headers" : [{
"id" : "qt_ky8sltutsb" ,
"name" : "dimension" ,
"type" : "TEXT" ,
"concept" : "DIMENSION" ,
"configId" : "configId1"
}, {
"id" : "qt_b5bvmtutsb" ,
"name" : "second dim" ,
"type" : "TEXT" ,
"concept" : "DIMENSION"
"configId" : "configId1"
}, {
"id" : "qt_m9dtntutsb" ,
"name" : "metric" ,
"type" : "NUMBER" ,
"concept" : "METRIC" ,
"configId" : "configId2"
}],
"rows" : [
[ "Week 4" , "lm" , 55 ]
]
},
"COMPARISON" : {
"headers" : [{
"id" : "qt_ky8sltutsb" ,
"name" : "dimension" ,
"type" : "TEXT" ,
"concept" : "DIMENSION" ,
"configId" : "configId1"
}, {
"id" : "qt_b5bvmtutsb" ,
"name" : "second dim" ,
"type" : "TEXT" ,
"concept" : "DIMENSION"
"configId" : "configId1"
}, {
"id" : "qt_m9dtntutsb" ,
"name" : "metric" ,
"type" : "NUMBER" ,
"concept" : "METRIC" ,
"configId" : "configId2"
}],
"rows" : [
[ "Week 5" , "no" , 123 ]
]
}
},
"fields" : {
"configId1" : [
{
"id" : "qt_ky8sltutsb" ,
"name" : "week" ,
"type" : "TEXT" ,
"concept" : "DIMENSION"
},
{
"id" : "qt_b5bvmtutsb" ,
"name" : "textId" ,
"type" : "TEXT" ,
"concept" : "DIMENSION"
}
],
"configId2" : [
{
"id" : "qt_m9dtntutsb" ,
"name" : "orders" ,
"type" : "NUMBER" ,
"concept" : "METRIC"
}
]
},
"style" : {
"nodeColor" : {
"value" : {
"color" : "#000000"
}
}
},
"theme" : {},
"dateRanges" : {
"DEFAULT" : {
"start" : "20210501" ,
"end" : "20210531"
},
"COMPARISON" : {
"start" : "20200501" ,
"end" : "20200531"
}
},
"interactions" : {
"onClick" : {
"value" : {
"type" : "FILTER" ,
"data" : {
"concepts" : [
"qt_h6oibrb6wb" ,
"qt_i6oibrb6wb"
],
"values" : [
[
"Afternoon" ,
"Sunday"
],
[
"Afternoon" ,
"Thursday"
],
[
"Morning" ,
"Tuesday"
]
]
}
},
"supportedActions" : [
"FILTER"
]
}
}
}
objectFormat reference
objectRow
{
configId1 : array ( string | bool | number ),
configId2 : array ( string | bool | number )
}
Field
Type
Description
configId
array
array of values associated with a particular config ID
Sample objectFormat data
This is sample data returned by using dscc.subscribeToData() with the option
dscc.objectFormat .
{
"tables" : {
"COMPARISON" : [
{
"configId1" : [ "Week 5" , "cd" ],
"configId2" : [ 123 ]
}
],
"DEFAULT" : [
{
"configId1" : [ "Week 1" , "ab" ],
"configId2" : [ 24 ]
}
]
},
"fields" : {
"configId1" : [
{
"id" : "qt_h6oibrb6wb" ,
"name" : "time of day" ,
"type" : "TEXT" ,
"concept" : "DIMENSION"
},
{
"id" : "qt_i6oibrb6wb" ,
"name" : "day" ,
"type" : "TEXT" ,
"concept" : "DIMENSION"
}
],
"configId2" : [
{
"id" : "qt_m9dtntutsb" ,
"name" : "metric" ,
"type" : "NUMBER" ,
"concept" : "METRIC"
}
]
},
"style" : {
"nodeColor" : {
"value" : {
"color" : "#000000"
}
}
},
"theme" : {},
"dateRanges" : {
"DEFAULT" : {
"start" : "20210501" ,
"end" : "20210531"
},
"COMPARISON" : {
"start" : "20200501" ,
"end" : "20200531"
}
},
"interactions" : {
"onClick" : {
"value" : {
"type" : "FILTER" ,
"data" : {
"concepts" : [
"qt_h6oibrb6wb" ,
"qt_i6oibrb6wb"
],
"values" : [
[
"Afternoon" ,
"Sunday"
],
[
"Afternoon" ,
"Thursday"
],
[
"Morning" ,
"Tuesday"
]
]
}
},
"supportedActions" : [
"FILTER"
]
}
}
}
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-03 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-03 UTC."],[],[]]
