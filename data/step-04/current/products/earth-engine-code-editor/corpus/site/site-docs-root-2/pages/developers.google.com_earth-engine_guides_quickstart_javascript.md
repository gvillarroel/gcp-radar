---
title: "Get started with Earth Engine in the Code Editor \_|\_ Google Earth Engine\
  \ \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/guides/quickstart_javascript
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/earth-engine/guides/quickstart_javascript
source_metadata:
  url: https://developers.google.com/earth-engine/guides/quickstart_javascript
  title: "Get started with Earth Engine in the Code Editor \_|\_ Google Earth Engine\
    \ \_|\_ Google for Developers"
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
Get started with Earth Engine in the Code Editor
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This quickstart guides you through visualizing and analyzing geospatial data using the Earth Engine Code Editor.
Before starting, you need to register or create a Google Cloud Project and select its purpose and type.
The Earth Engine Code Editor is a web-based interactive environment for accessing Earth Engine, visualizing results, and managing scripts and assets using JavaScript.
To begin, visit code.earthengine.google.com, ensure your project is selected, and copy/run the provided code blocks progressively.
You can add both raster data (like climate data) and vector data (like city locations) to the map and extract/chart data from these layers.
This quickstart will give you an interactive introduction to visualizing and
analyzing geospatial data with the Earth Engine Code Editor.
Before you begin
Register or create a Google Cloud
Project; you'll be prompted to complete the following steps. If you already have a project
registered for Earth Engine access, skip to the next section.
Select the project's purpose: commercial or noncommercial.
If the purpose is noncommercial, select a project type.
Create a new Google Cloud project or select an existing project.
If the purpose is commercial, verify or set up billing for your project.
Confirm your project information.
Note: If you don't plan to keep the resources that you create
in this procedure, create a project instead of selecting an existing project. After you finish
these steps, you can
delete the project ,
removing all resources owned by the project.
Welcome to the Code Editor
The Earth Engine Code Editor is a web-based interactive development environment
for accessing Earth Engine and visualizing results directly in the browser. It
provides tools for managing scripts, assets, and export tasks, with analyses
written in JavaScript using the Earth Engine JavaScript client library. The
interface includes a code editor, map display, and console for immediate
feedback and inspection.
The Earth Engine Code Editor at
code.earthengine.google.com
Get started
1. Visit code.earthengine.google.com
to get started. On your first Code Editor visit, you may be greeted with a tour
highlighting the different features of the Code Editor.
2. Navigate to the login widget in the upper right corner and ensure the
project you set up for this quickstart is selected. If it's not, select
"Change Cloud Project" from the menu and follow the prompts to search for it
and select it.
3. In the following sections, copy each code block into the editor panel,
click "Run", and inspect the results in the map or console. Each step builds
upon previous ones, so add code progressively without removing earlier blocks.
Add raster data to a map
1. Load climate data for a given period and display its metadata.
var jan2023Climate = ee . ImageCollection ( 'ECMWF/ERA5_LAND/MONTHLY_AGGR' )
. filterDate ( '2023-01-01' , '2023-02-01' )
. first ();
print ( 'jan2023Climate' , jan2023Climate );
2. Add the temperature band as a layer to the map widget with specific
visualization properties.
var visParams = {
bands : [ 'temperature_2m' ],
min : 229 ,
max : 304 ,
palette : [ '#000004' , '#410967' , '#932567' , '#f16e43' , '#fcffa4' ]
};
Map . addLayer ( jan2023Climate , visParams , 'Temperature (K)' );
Map . setCenter ( 0 , 40 , 2 );
Add vector data to a map
1. Create a vector data object with points for three cities.
var cities = ee . FeatureCollection ([
ee . Feature ( ee . Geometry . Point ( 10.75 , 59.91 ), { 'city' : 'Oslo' }),
ee . Feature ( ee . Geometry . Point ( - 118.24 , 34.05 ), { 'city' : 'Los Angeles' }),
ee . Feature ( ee . Geometry . Point ( 103.83 , 1.33 ), { 'city' : 'Singapore' }),
]);
print ( 'cities' , cities );
2. Add the city locations to the map and rerun the script to display it.
Map . addLayer ( cities , null , 'Cities' );
Extract and chart data
1. Extract the climate data for the three cities; results are added to the
input FeatureCollection.
var cityClimates = jan2023Climate . reduceRegions ( cities , ee . Reducer . first ());
print ( 'cityClimates' , cityClimates );
2. Plot the temperature for the cities as a bar chart.
var chart = ui . Chart . feature . byFeature ( cityClimates , 'city' , 'temperature_2m' )
. setChartType ( 'ColumnChart' )
. setOptions ({
title : 'January 2023 temperature for selected cities' ,
hAxis : { title : 'City' },
vAxis : { title : 'Temperature (K)' },
legend : { position : 'none' }
});
print ( chart );
What's next
Learn more about the features of the Code Editor .
Learn about analyzing data with Earth Engine's
objects and methods .
Learn about Earth Engine's processing environments .
Learn about Earth Engine's machine learning capabilities .
Learn how to export your computation results to BigQuery .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-02-11 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-02-11 UTC."],[],[]]
