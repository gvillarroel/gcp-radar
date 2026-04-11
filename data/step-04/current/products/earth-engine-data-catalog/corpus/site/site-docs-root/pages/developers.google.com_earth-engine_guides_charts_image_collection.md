---
title: "ImageCollection Charts \_|\_ Google Earth Engine \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/guides/charts_image_collection
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/earth-engine/datasets
source_metadata:
  url: https://developers.google.com/earth-engine/guides/charts_image_collection
  title: "ImageCollection Charts \_|\_ Google Earth Engine \_|\_ Google for Developers"
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
ImageCollection Charts
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The ui.Chart.image module provides functions to create charts from spatiotemporal reductions of image collections, with different functions dictating the arrangement of data for x-axis, y-axis, and series.
ui.Chart.image.series charts image time series for a region with series defined by image bands, while ui.Chart.image.seriesByRegion charts a single band time series for multiple regions with series defined by regions.
ui.Chart.image.doySeries charts a day-of-year time series for a region with series defined by image bands, reducing observations on the same day across years.
ui.Chart.image.doySeriesByYear charts a day-of-year time series for a region and band, with series defined by years, useful for comparing annual profiles.
ui.Chart.image.doySeriesByRegion charts a single band day-of-year time series for multiple regions, with series defined by regions, allowing comparison of annual single-band time series among regions.
The ui.Chart.image module contains a set of functions for rendering charts
from the results of spatiotemporal reduction of images within an
ImageCollection . The choice of function dictates the arrangement of data in
the chart, i.e., what defines x- and y-axis values and what defines the series.
Use the following function descriptions and examples to determine the best
function for your purpose.
Chart functions
Use the following plot diagrams as a visual guide to understand how each
function arranges spatiotemporal image collection reduction results in a chart;
i.e., what elements define x values, y values, and series. Note that
ui.Chart.image.doySeries* functions take two reducers: one for region
reduction ( regionReducer ) and another for intra-annual coincident day-of-year
reduction ( yearReducer ). Examples in the following sections use
ee.Reducer.mean() as the argument for both of these parameters.
ui.Chart.image.series
Image date is plotted along the x-axis according to the
system:time_start property. Series are defined by image bands. Y-axis values
are the reduction of images, by date, for a single region.
ui.Chart.image.seriesByRegion
Image date is plotted along the x-axis according to the
system:time_start property. Series are defined by regions. Y-axis values
are the reduction of images, by date, for a single image band.
ui.Chart.image.doySeries
Image day-of-year is plotted along the x-axis according to the
system:time_start property. Series are defined by image bands. Y-axis values
are the reduction of image pixels in a given region, grouped by day-of-year.
ui.Chart.image.doySeriesByYear
Image day-of-year is plotted along the x-axis according to the
system:time_start property. Series are defined by years present in the
ImageCollection . Y-axis values are the reduction of image pixels in a given
region, grouped by day-of-year, for a selected image band.
ui.Chart.image.doySeriesByRegion
Image day-of-year is plotted along the x-axis according to the
system:time_start property. Series are defined by regions. Y-axis values are
the reduction of image pixels in a given region, grouped by day-of-year, for a
selected image band.
Example data
The following examples rely on an ImageCollection that is a time series of
MODIS-based NDVI and EVI. Region reduction is performed on ecoregions defined by
features in a FeatureCollection designed for demonstration purposes
( learn how it was made ).
ui.Chart.image.series
Use ui.Chart.image.series to display an image time series for a given region;
each image band is presented as a unique series. It is useful for comparing the
time series of individual image bands. Here, a MODIS
image collection with bands representing NDVI and EVI vegetation indices
are plotted. The date of every image observation is included along the
x-axis, while the mean reduction of pixels intersecting a forest ecoregion
defines the y-axis.
Code Editor (JavaScript)
// Import the example feature collection and subset the forest feature.
var forest = ee . FeatureCollection ( 'projects/google/charts_feature_example' )
. filter ( ee . Filter . eq ( 'label' , 'Forest' ));
// Load MODIS vegetation indices data and subset a decade of images.
var vegIndices = ee . ImageCollection ( 'MODIS/061/MOD13A1' )
. filter ( ee . Filter . date ( '2010-01-01' , '2020-01-01' ))
. select ([ 'NDVI' , 'EVI' ]);
// Define the chart and print it to the console.
var chart =
ui . Chart . image
. series ({
imageCollection : vegIndices ,
region : forest ,
reducer : ee . Reducer . mean (),
scale : 500 ,
xProperty : 'system:time_start'
})
. setSeriesNames ([ 'EVI' , 'NDVI' ])
. setOptions ({
title : 'Average Vegetation Index Value by Date for Forest' ,
hAxis : { title : 'Date' , titleTextStyle : { italic : false , bold : true }},
vAxis : {
title : 'Vegetation index (x1e4)' ,
titleTextStyle : { italic : false , bold : true }
},
lineWidth : 5 ,
colors : [ 'e37d05' , '1d6b99' ],
curveType : 'function'
});
print ( chart );
ui.Chart.image.seriesByRegion
Use ui.Chart.image.seriesByRegion to display a single image band time
series for multiple regions; each region is presented as a unique series. It is
useful for comparing the time series of a single band among several regions.
Here, a MODIS image collection representing an NDVI time series
is plotted for three ecoregions. The date of every image observation is
included along the x-axis, while mean reduction of pixels intersecting
forest, desert, and grasslands ecoregions define y-axis series.
Code Editor (JavaScript)
// Import the example feature collection.
var ecoregions = ee . FeatureCollection ( 'projects/google/charts_feature_example' );
// Load MODIS vegetation indices data and subset a decade of images.
var vegIndices = ee . ImageCollection ( 'MODIS/061/MOD13A1' )
. filter ( ee . Filter . date ( '2010-01-01' , '2020-01-01' ))
. select ([ 'NDVI' , 'EVI' ]);
// Define the chart and print it to the console.
var chart =
ui . Chart . image
. seriesByRegion ({
imageCollection : vegIndices ,
band : 'NDVI' ,
regions : ecoregions ,
reducer : ee . Reducer . mean (),
scale : 500 ,
seriesProperty : 'label' ,
xProperty : 'system:time_start'
})
. setOptions ({
title : 'Average NDVI Value by Date' ,
hAxis : { title : 'Date' , titleTextStyle : { italic : false , bold : true }},
vAxis : {
title : 'NDVI (x1e4)' ,
titleTextStyle : { italic : false , bold : true }
},
lineWidth : 5 ,
colors : [ 'f0af07' , '0f8755' , '76b349' ],
});
print ( chart );
ui.Chart.image.doySeries
Use ui.Chart.image.doySeries to display a day-of-year time series for a
given region; each image band is presented as a unique series. It is useful for
reducing observations occurring on the same day-of-year, across multiple
years, to compare e.g. average annual NDVI and EVI profiles from MODIS, as in
this example.
Code Editor (JavaScript)
// Import the example feature collection and subset the grassland feature.
var grassland = ee . FeatureCollection ( 'projects/google/charts_feature_example' )
. filter ( ee . Filter . eq ( 'label' , 'Grassland' ));
// Load MODIS vegetation indices data and subset a decade of images.
var vegIndices = ee . ImageCollection ( 'MODIS/061/MOD13A1' )
. filter ( ee . Filter . date ( '2010-01-01' , '2020-01-01' ))
. select ([ 'NDVI' , 'EVI' ]);
// Define the chart and print it to the console.
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
. setSeriesNames ([ 'EVI' , 'NDVI' ])
. setOptions ({
title : 'Average Vegetation Index Value by Day of Year for Grassland' ,
hAxis : {
title : 'Day of year' ,
titleTextStyle : { italic : false , bold : true }
},
vAxis : {
title : 'Vegetation index (x1e4)' ,
titleTextStyle : { italic : false , bold : true }
},
lineWidth : 5 ,
colors : [ 'e37d05' , '1d6b99' ],
});
print ( chart );
ui.Chart.image.doySeriesByYear
Use ui.Chart.image.doySeriesByYear to display a day-of-year time series for a
given region and image band, where each distinct year in the image collection is
presented as a unique series. It is useful for comparing annual time series
among years. For instance, in this example, annual MODIS-derived NDVI profiles
for a grassland ecoregion are plotted for years 2012 and 2019, providing
convenient year-over-year interpretation.
Code Editor (JavaScript)
// Import the example feature collection and subset the grassland feature.
var grassland = ee . FeatureCollection ( 'projects/google/charts_feature_example' )
. filter ( ee . Filter . eq ( 'label' , 'Grassland' ));
// Load MODIS vegetation indices data and subset years 2012 and 2019.
var vegIndices = ee . ImageCollection ( 'MODIS/061/MOD13A1' )
. filter ( ee . Filter . or (
ee . Filter . date ( '2012-01-01' , '2013-01-01' ),
ee . Filter . date ( '2019-01-01' , '2020-01-01' )))
. select ([ 'NDVI' , 'EVI' ]);
// Define the chart and print it to the console.
var chart = ui . Chart . image
. doySeriesByYear ({
imageCollection : vegIndices ,
bandName : 'NDVI' ,
region : grassland ,
regionReducer : ee . Reducer . mean (),
scale : 500 ,
sameDayReducer : ee . Reducer . mean (),
startDay : 1 ,
endDay : 365
})
. setOptions ({
title : 'Average NDVI Value by Day of Year for Grassland' ,
hAxis : {
title : 'Day of year' ,
titleTextStyle : { italic : false , bold : true }
},
vAxis : {
title : 'NDVI (x1e4)' ,
titleTextStyle : { italic : false , bold : true }
},
lineWidth : 5 ,
colors : [ '39a8a7' , '9c4f97' ],
});
print ( chart );
ui.Chart.image.doySeriesByRegion
Use ui.Chart.image.doySeriesByRegion to display a single image band
day-of-year time series for multiple regions, where each distinct region is
presented as a unique series. It is useful for comparing annual single-band time
series among regions. For instance, in this example, annual MODIS-derived NDVI
profiles for forest, desert, and grassland ecoregions are plotted, providing a
convenient comparison of NDVI response by region. Note that intra-annual
observations occurring on the same day-of-year are reduced by their mean.
Code Editor (JavaScript)
// Import the example feature collection.
var ecoregions = ee . FeatureCollection ( 'projects/google/charts_feature_example' );
// Load MODIS vegetation indices data and subset a decade of images.
var vegIndices = ee . ImageCollection ( 'MODIS/061/MOD13A1' )
. filter ( ee . Filter . date ( '2010-01-01' , '2020-01-01' ))
. select ([ 'NDVI' , 'EVI' ]);
// Define the chart and print it to the console.
var chart = ui . Chart . image
. doySeriesByRegion ({
imageCollection : vegIndices ,
bandName : 'NDVI' ,
regions : ecoregions ,
regionReducer : ee . Reducer . mean (),
scale : 500 ,
yearReducer : ee . Reducer . mean (),
seriesProperty : 'label' ,
startDay : 1 ,
endDay : 365
})
. setOptions ({
title : 'Average NDVI Value by Day of Year' ,
hAxis : {
title : 'Day of year' ,
titleTextStyle : { italic : false , bold : true }
},
vAxis : {
title : 'NDVI (x1e4)' ,
titleTextStyle : { italic : false , bold : true }
},
lineWidth : 5 ,
colors : [ 'f0af07' , '0f8755' , '76b349' ],
});
print ( chart );
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2023-10-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2023-10-06 UTC."],[],[]]
