---
title: "Chart Overview \_|\_ Google Earth Engine \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/guides/charts_overview
knowledge_key: corpus
source_id: site-docs-reference-required-6
source_type: site
entrypoint: https://developers.google.com/earth-engine/guides/python_install
source_metadata:
  url: https://developers.google.com/earth-engine/guides/charts_overview
  title: "Chart Overview \_|\_ Google Earth Engine \_|\_ Google for Developers"
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
Chart Overview
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Earth Engine Code Editor integrates with Google Charts for visualizing tabular data using ui.Chart functions, viewable in the console, panels, or separate browser tabs.
Charts in Earth Engine are based on a Google Visualization API DataTable , which can be supplied directly for maximum customization or generated from Earth Engine objects using helper methods.
A variety of chart types available in Google Charts corechart, such as scatter, line, bar, pie, and histogram, can be set using the ui.Chart.setChartType() method.
ui.Chart widgets can be displayed in the Code Editor console, within a ui.Panel , or in a separate browser tab where they can also be downloaded as graphics or CSV data.
Charts are interactive by default, allowing hover-over details and optional zooming and panning, and their style can be customized using the ui.Chart.setOptions() method.
ui.Chart functions have limitations, including rendering a maximum of 5,000 features and potential timeouts for long-running computations.
The Earth Engine JavaScript Code Editor
seamlessly integrates with Google Charts
for convenient tabular data visualization via ui.Chart functions. Charts can
be displayed interactively in the Code Editor console, ui.Panel
widgets, and in stand-alone browser tabs.
Caution: the ui.Chart widget is available for the JavaScript Code Editor
API only.
DataTable charts
Earth Engine uses the Google Visualization API
to support charting. The API accepts a DataTable , which is a 2-D
table where rows are observations and columns are observation attributes.
All charts in Earth Engine are derived from a DataTable ; the ui.Chart widget
allows you to supply a DataTable directly. It affords the greatest opportunity
for chart customization, but may be less convenient than methods for charting
specific Earth Engine objects (see the following section). Learn more about
creating charts from a DataTable :
DataTable charting
Earth Engine object charts
The ui.Chart widget provides helper methods to construct a DataTable and
render charts from Image , ImageCollection Feature , FeatureCollection ,
Array , and List objects. Each function accepts a specific data type and
includes methods for reducing the data to tabular format in a variety of
arrangements that dictate data assignment to chart series and axes.
Visit the following links to learn how to generate a chart for each data type:
Feature charting
FeatureCollection charting
Image charting
ImageCollection charting
Array charting
List charting
Chart types
A variety of chart types can be produced; for example: scatter, line, bar, pie,
and histogram. Specifically, any chart type that is available in the Google
Charts corechart
package can be generated. Use the ui.Chart.setChartType()
method to set chart type. Each page linked to in the
Earth Engine object charts and
DataTable charts sections include examples for generating
several chart types.
Use the following strings as input to the ui.Chart.setChartType() method:
'ScatterChart'
'LineChart'
'ColumnChart'
'BarChart'
'PieChart'
'AreaChart'
Here is an example:
var data = ee . List ([ 0 , 1 , 2 , 3 , 4 , 5 ]);
var chart = ui . Chart . array . values ( data , 0 , data )
. setChartType ( 'ColumnChart' );
print ( chart );
Display and download
ui.Chart widgets can be displayed three ways:
In the Code Editor console
var data = ee . List ([ 0 , 1 , 2 , 3 , 4 , 5 ]);
var chart = ui . Chart . array . values ( data , 0 , data );
print ( chart );
In a ui.Panel
widget
var data = ee . List ([ 0 , 1 , 2 , 3 , 4 , 5 ]);
var chart = ui . Chart . array . values ( data , 0 , data );
var chartPanel = ui . Panel ( chart );
Map . add ( chartPanel );
In a separate browser tab; click the pop-out icon
( open_in_new ) in the
upper-right corner of a displayed ui.Chart widget. The new page provides
a full-window display and options to download the chart as a graphic
(PNG or SVG) or a CSV file of the underlying data.
Interactivity
Charts are interactive by default. Hover over points, lines, bars, etc. to see
respective x, y, and series values. Axis zooming and panning are optionally
permitted by activating a chart's "explorer" functionality .
Styling
Google Charts are highly customizable via styling properties. Use the
ui.Chart.setOptions() method to set chart style properties. See the
Chart Styling guide for full details.
Limitations
ui.Chart functions will only render 5,000 features. If your
FeatureCollection , ImageCollection , Array or List has more elements,
consider ways you might limit the data. If you have a long time series with a
high cadence rate, try using a shorter time period, temporal sampling, or
generate temporal composites. If the issue is spatial, try using a random
subset. If you are working with pixels in a list or array, try using a slightly
larger scale or smaller region.
Long-running computations can fail to generate a chart because of interactive
response limits of the Code Editor. If your chart request times out, try
exporting intermediate steps of your analysis
and regenerating the chart from the exported assets.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2021-10-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2021-10-18 UTC."],[],[]]
