---
title: "Chart Styling \_|\_ Google Earth Engine \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/guides/charts_style
knowledge_key: corpus
source_id: site-docs-reference-required-8
source_type: site
entrypoint: https://developers.google.com/earth-engine/guides/charts_style
source_metadata:
  url: https://developers.google.com/earth-engine/guides/charts_style
  title: "Chart Styling \_|\_ Google Earth Engine \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Earth Engine is introducing noncommercial quota tiers to safeguard shared compute resources and ensure reliable performance for everyone. All noncommercial projects will need to select a quota tier by April 27, 2026 or will use the Community Tier by default. Tier quotas will take effect for all projects (regardless of tier selection date) on April 27, 2026 . Learn more.
Home
Products
Google Earth Engine
Guides
Send feedback
Chart Styling
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Charts produced by the ui.Chart module can be styled using the .setOptions() method which takes a client-side JavaScript object of configuration options as input.
Configuration options for each chart type are detailed in the respective Google Charts documentation under the Configuration Options section.
Styling properties can be set for all series using top-level properties or for selected individual series.
Various styling options are available, including setting chart titles, hiding legends, defining axis limits, setting symbol and line properties, adjusting text styles, and modifying background and grid line colors.
The explorer option allows for zooming and panning chart axes.
Charts produced by the ui.Chart module in the Earth Engine Code Editor can be
styled using the .setOptions() method. The method takes a client-side
JavaScript object of configuration options as an input. Configuration options
for each chart type are provided in the respective Google Charts documentation
under the Configuration Options section, for example:
Line Chart .
Configuration options example
Here, custom chart styling is applied to the
ui.Chart.image.doySeries example .
It provides a guide for how to format a configuration options object and apply
it to an ee.Chart .
// Import the example feature collection and subset the glassland feature.
var grassland = ee . FeatureCollection ( 'projects/google/charts_feature_example' )
. filter ( ee . Filter . eq ( 'label' , 'Grassland' ));
// Load MODIS vegetation indices data and subset a decade of images.
var vegIndices = ee . ImageCollection ( 'MODIS/006/MOD13A1' )
. filter ( ee . Filter . date ( '2010-01-01' , '2020-01-01' ))
. select ([ 'NDVI' , 'EVI' ]);
// Set chart style properties.
var chartStyle = {
title : 'Average Vegetation Index Value by Day of Year for Grassland' ,
hAxis : {
title : 'Day of year' ,
titleTextStyle : { italic : false , bold : true },
gridlines : { color : 'FFFFFF' }
},
vAxis : {
title : 'Vegetation index (x1e4)' ,
titleTextStyle : { italic : false , bold : true },
gridlines : { color : 'FFFFFF' },
format : 'short' ,
baselineColor : 'FFFFFF'
},
series : {
0 : { lineWidth : 3 , color : 'E37D05' , pointSize : 7 },
1 : { lineWidth : 7 , color : '1D6B99' , lineDashStyle : [ 4 , 4 ]}
},
chartArea : { backgroundColor : 'EBEBEB' }
};
// Define the chart.
var chart =
ui . Chart . image
. doySeries ({
imageCollection : vegIndices ,
region : grassland ,
regionReducer : ee . Reducer . mean (),
scale : 500 ,
yearReducer : ee . Reducer . mean (),
startDay : 1 ,
endDay : 365
})
. setSeriesNames ([ 'EVI' , 'NDVI' ]);
// Apply custom style properties to the chart.
chart . setOptions ( chartStyle );
// Print the chart to the console.
print ( chart );
Note: setting individual series properties overrides top-level properties.
How do I...
The following examples provide JavaScript objects defining only the
relevant configuration options to answer the question. Add additional options to
the object as needed and pass the result to the .setOptions() method of an
ee.Chart .
set the chart title?
{
title : 'The Chart Title'
}
hide the chart title?
{
titlePosition : 'none'
}
hide the legend?
{
legend : { position : 'none' }
}
define the axis limits?
{
hAxis : { // x-axis
viewWindow : { min : 10 , max : 100 }
},
vAxis : { // y-axis
viewWindow : { min : - 10 , max : 50 }
}
}
set symbol size and color?
You can set symbol properties for all series using top-level properties, for
example:
{
colors : [ 'blue' ],
pointSize : 10 ,
lineWidth : 5 ,
lineDashStyle : [ 4 , 4 ],
pointShape : 'diamond' // 'circle', 'triangle', 'square', 'star', or 'polygon'
}
or set properties for selected series:
{
series : {
0 : { lineWidth : 3 , color : 'yellow' , pointSize : 7 },
2 : { lineWidth : 7 , color : '1D6D99' , lineDashStyle : [ 4 , 4 ]}
}
}
You can also set colors for individual series by providing a color array that
corresponds to the length and order of the series.
{
colors : [ 'blue' , 'yellow' , 'red' ]
}
hide a series from the legend?
{
series : {
0 : { visibleInLegend : false }, // hides the 1st series in the legend
2 : { visibleInLegend : false } // hides the 3rd series in the legend
}
}
show points on a line chart?
Show points for all series:
{
pointSize : 10
}
or for individual series:
{
series : {
0 : { pointSize : 10 }, // shows size 10 points for the 1st line series
2 : { pointSize : 10 } // shows size 10 points for the 3rd line series
}
}
show lines on a point chart?
Show lines for all series:
{
lineWidth : 10
}
or for individual series:
{
series : {
0 : { lineWidth : 10 }, // shows size 10 lines for the 1st point series
2 : { lineWidth : 10 } // shows size 10 lines for the 3rd point series
}
}
apply log scale to an axis?
{
hAxis : { logScale : true }, // x-axis
vAxis : { logScale : true } // y-axis
}
apply a smoothing function to a line?
Apply a smoothing function to every line series:
{
curveType : 'function'
}
or individual series:
{
series : {
0 : { curveType : 'function' }, // apply smoothing function to 1st line series
2 : { curveType : 'function' } // apply smoothing function to 3rd line series
}
}
zoom and pan chart axes?
See the explorer options for respective Google Chart types. The following
will permit zooming and panning on both axes.
{
explorer : {}
}
Limit panning and zooming to a single axis:
{
explorer : { axis : 'vertical' } // or 'horizontal'
}
Note: The explorer only works with continuous axes (such as numbers or dates).
set point symbol opacity?
{
dataOpacity : 0.5
}
Note: line opacity cannot be set.
rotate axes?
{
orientation : 'vertical' // or 'horizontal'
}
set text style?
Text styling options are specified according to the following JavaScript object:
var textStyle = {
color : 'grey' ,
fontName : 'arial' ,
fontSize : 14 ,
bold : true ,
italic : false
}
Set x-axis text style:
{
hAxis : {
textStyle : textStyle , // tick label text style
titleTextStyle : textStyle // axis title text style
}
}
Set y-axis text style:
{
vAxis : {
textStyle : textStyle , // tick label text style
titleTextStyle : textStyle // axis title text style
}
}
Set legend text style:
{
legend : { textStyle : textStyle }
}
You can also set font name and size for all text elements:
{
fontName : 'arial' ,
fontSize : 14
}
set chart background color?
{
chartArea : { backgroundColor : 'EBEBEB' }
}
set chart grid line color?
{
hAxis : { // x-axis
gridlines : { color : 'FFFFFF' }
},
vAxis : { // y-axis
gridlines : { color : 'FFFFFF' }
}
}
remove grid lines?
{
hAxis : { // x-axis
gridlines : { count : 0 }
},
vAxis : { // y-axis
gridlines : { count : 0 }
}
}
format axis value labels?
See this guide
for the full list of axis value label format options.
{
hAxis : { // x-axis
format : 'short' // applies the 'short' format option
},
vAxis : { // y-axis
format : 'scientific' // applies the 'scientific' format option
}
}
interpolate null y-axis values?
Missing or null y-axis values in a line chart can cause line breaks. Use
interpolateNulls: true to draw a continuous line.
{
interpolateNulls : true
}
add a trend line?
A trend line can be automatically generated for scatter, bar, column, and line
charts. See this page
for full details.
{
trendlines : {
0 : { // add a trend line to the 1st series
type : 'linear' , // or 'polynomial', 'exponential'
color : 'green' ,
lineWidth : 5 ,
opacity : 0.2 ,
visibleInLegend : true ,
}
}
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2021-05-26 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2021-05-26 UTC."],[],["The `ui.Chart` module's `.setOptions()` method allows custom styling of charts in the Earth Engine Code Editor. This method uses a JavaScript object containing configuration options, which are detailed in the Google Charts documentation. Users can adjust chart titles, legend visibility, axis limits, symbol properties, series colors, and legend visibility. Additional features include applying log scales, smoothing functions, enabling chart zooming/panning, altering opacity, rotating axes, setting text styles, changing background/grid line colors, formatting axis labels, interpolating null values, and adding trend lines.\n"]]
