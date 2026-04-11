---
title: "Get Started with Earth Engine \_|\_ Google Earth Engine \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/guides/getstarted
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/earth-engine
source_metadata:
  url: https://developers.google.com/earth-engine/guides/getstarted
  title: "Get Started with Earth Engine \_|\_ Google Earth Engine \_|\_ Google for\
    \ Developers"
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
Get Started with Earth Engine
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Google Earth Engine allows users to run algorithms on georeferenced imagery and vectors stored on Google's infrastructure using the Earth Engine API.
The Earth Engine documentation is primarily structured by data type and is designed for people familiar with geospatial data analysis.
The Code Editor is an interactive environment for developing Earth Engine applications where you can write and run JavaScript code, visualize data on a map, and manage assets.
The two most fundamental geographic data structures in Earth Engine are Image (raster) and Feature (vector), which can be organized into ImageCollection and FeatureCollection respectively.
You can find images, image collections, and feature collections by searching the Earth Engine Data Catalog or by copying and pasting collection IDs into your code.
Operations in the API can be performed by calling methods attached to objects, calling algorithms, calling Code Editor specific functions, or defining new functions.
Printing information to the console using print() and adding data to the map using Map.addLayer() are fundamental ways to inspect and visualize data.
Filtering collections by space and/or time using methods like filterBounds() and filterDate() or using ee.Filter is essential for managing large datasets.
Use map() to iterate over items in a collection to modify every element in the same way, avoiding traditional for loops.
Reducing is used to aggregate data over various structures, such as creating composites of ImageCollections with reduce() or computing statistics within regions with reduceRegion() .
Masking is used to make pixels transparent or exclude them from analysis by setting their mask value to zero.
You need to have
access
to use Earth Engine.
This Get Started guide is intended as a quick way to start programming with the Earth
Engine JavaScript API. For an introductory look at JavaScript and more in-depth exercises
with the Earth Engine API, see the
tutorials . For recommended JavaScript coding style, see the
Google JavaScript Style
Guide .
Google Earth Engine allows users to run algorithms on georeferenced imagery and vectors
stored on Google's infrastructure. The Google Earth Engine API provides a library of
functions which may be applied to data for display and analysis. Earth Engine's
public data catalog contains a large amount of
publicly available imagery and vector datasets. Private assets can also be created in
users' personal folders.
How to use these docs
The Earth Engine documentation is designed for people familiar with geospatial
data analysis. The docs are primarily structured by data type. For example, the
left side navigation contains links to sections or pages about important data types
such as Image ,
ImageCollection ,
Feature ,
FeatureCollection ,
Geometry ,
Reducer ,
Chart , Join and
Array . This guide describes only enough
about these types to get you started. There are also sections for
machine learning , specialized or sensor specific algorithms
( e.g. Landsat algorithms ),
public facing apps , data (asset) management
and important details about Earth Engine internal workings .
Before diving in to any of that, start here!
The Code Editor
The Code Editor is an interactive environment for developing Earth Engine applications
(Figure 1). The center panel provides a JavaScript code editor. Above the editor are
buttons to save the current script, run it, and clear the map. The Get
Link button generates a unique URL for the script in the address bar. The map
in the bottom panel contains the layers added by the script. At the top is a search box
for datasets and places. The left panel contains code examples, your saved scripts,
a searchable API reference and an asset manager for private data. The right panel has
an inspector for querying the map, an output console, and a manager for long-running tasks.
The help button
help
in the upper right contains links to this Guide and other resources for getting help.
Learn more from the Code Editor guide and the Get
Help guide .
Figure 1. The Earth Engine Code Editor at
code.earthengine.google.com
Opening and running code in the Code Editor
The steps below demonstrate how to open Earth Engine and execute a custom script that
displays an image. For best results, you may want to install the latest version of Chrome,
Google's web browser, available
here .
Open the Earth Engine Code Editor here:
code.earthengine.google.com .
Navigate to the Scripts tab located on the far left of the
Code Editor. There you will find a collection of example scripts that access,
display, and analyze Earth Engine data.
Under “Image Collection,” select the “Filtered Composite” example. You will see a
script appear in the center console. Press the Run button to
execute the script. The Filtered Composite example selects Landsat 7 images that
intersect or are within the boundaries of Colorado and Utah. It then displays a true
color composite of the selected images. The samples introduce you to commonly used
methods, such as filter() , clip() , and
Map.addLayer() .
Earth Engine data structures
The two most fundamental geographic data structures in Earth Engine are
Image and
Feature corresponding to raster and vector data
types, respectively. Images are composed of bands and a dictionary of properties.
Features are composed of a Geometry and a
dictionary of properties. A stack of images (e.g. an image time series) is handled by
an ImageCollection . A collection of features is
handled by a FeatureCollection . Other
fundamental data structures in Earth Engine include Dictionary ,
List , Array , Date ,
Number and String (learn more about basic data types from
this tutorial . It is important to
remember that these are all server-side objects and are not manipulated the same
way as client-side JavaScript objects are ( learn more ).
Earth Engine algorithms
There are several ways to run operations in the API:
Calling methods that are attached to objects.
Calling algorithms.
Calling Code Editor specific functions.
Defining new functions.
The Docs tab of the Code Editor lists the methods of each API class. For
example, the Image class has an add() method:
Code Editor (JavaScript)
var image3 = image1 . add ( image2 );
This method adds the bands of image2 to the bands of image1 .
The ee.Algorithms category contains a list of currently supported
algorithms for specialized or domain specific processing. For example, to create
topographic layers from an input Digital Elevation Model (DEM):
Code Editor (JavaScript)
var terrainImage = ee . Algorithms . Terrain ( dem );
Code Editor specific functions include the Map and Export
methods, which control how layers are added to the map panel or exported to Google Drive,
respectively. Functions can also be created in JavaScript using
Code Editor (JavaScript)
var myFunction = function ( args ) {
// do something
return something ;
};
As illustrated in the
Mapping section , user
defined functions are useful for creating custom functionality or modifying the elements of
a collection using:
Code Editor (JavaScript)
var collection2 = collection1 . map ( aFunction );
The following sections illustrate these concepts for various simple use cases.
Notation used in the guides:
Static methods called on an Earth Engine class (for example ee.Image ) are
written as Image.staticMethod() . Methods called on an instance of a class
are written as image.instanceMethod() . The lowercase image
means that a variable named image refers to an instance of the
ee.Image class.
'Hello world!' JavaScript
Printing out information to the console is a basic task for getting information about an
object, displaying the numeric result of a computation, displaying object metadata or
helping with debugging. The iconic 'Hello World!' example in the Code Editor is:
Code Editor (JavaScript)
print ( 'Hello world!' );
Copy this line into the code editor of the Code Editor and click Run . Note
that the output is displayed in the Console tab, on the right of the
Code Editor. For a more remote sensing relevant example, the following prints the
metadata of a Landsat 8 image:
Code Editor (JavaScript)
print ( ee . Image ( 'LANDSAT/LC08/C02/T1_TOA/LC08_044034_20140318' ));
Carefully inspect the output in the console to see metadata available for Landsat images.
Adding data to the map
In addition to printing information to the console, adding data to the Map
is the way to visualize geographic data. Use Map.addLayer() to do that. In
the following example, an Image is instantiated (how to find these images is
covered later) using ee.Image() , added to the map with
Map.addLayer() and the map is centered over the image:
Code Editor (JavaScript)
// Load an image.
var image = ee . Image ( 'LANDSAT/LC08/C02/T1_TOA/LC08_044034_20140318' );
// Center the map on the image.
Map . centerObject ( image , 9 );
// Display the image.
Map . addLayer ( image );
The second parameter of Map.centerObject() is a zoom level, where higher
numbers indicate larger scale (more zoomed in). The parameters for the Map
functions are described in depth in the API reference accessible from the
Docs tab. If the appearance of the image is unsatisfactory, configure
the display parameters with an additional argument to Map.addLayer() . For
example:
Code Editor (JavaScript)
// Load the image from the archive.
var image = ee . Image ( 'LANDSAT/LC08/C02/T1_TOA/LC08_044034_20140318' );
// Define visualization parameters in an object literal.
var vizParams = { bands : [ 'B5' , 'B4' , 'B3' ], min : 0.02 , max : 0.4 , gamma : 1.3 };
// Center the map on the image and display.
Map . centerObject ( image , 9 );
Map . addLayer ( image , vizParams , 'Landsat 8 false color' );
Observe that the visualization parameters are defined by an object literal, which includes
a list of bands to display, a minimum and maximum reflectance value, and a gamma value.
(Learn more about Landsat bands
here . Learn
more about image visualization here ).
Use Map.addLayer() to add features and feature collections to the map. For
example,
Code Editor (JavaScript)
var counties = ee . FeatureCollection ( 'TIGER/2018/Counties' );
Map . addLayer ( counties , {}, 'counties' );
Finding images, image collections and feature collections
Images, image collections, and feature collections are discoverable by searching the
Earth Engine Data Catalog. For example, entering 'Landsat 8' into the search field results
in a list of raster datasets. (The complete listing of Earth Engine datasets is at
the Earth Engine Data Catalog ).
Click on the dataset name to get a brief description, information about the temporal
availability, data provider and collection ID. Click the Import
button to automatically create an Imports section at the top of your
script with a variable for this collection.
Alternatively, copy the collection ID and paste it into your code. For example,
choose the Tier 1 TOA result of the 'Landsat 8' search and copy the ID as follows:
Code Editor (JavaScript)
var collection = ee . ImageCollection ( 'LANDSAT/LC08/C02/T1_TOA' );
Since this is a collection of many images spanning the Earth land surface, finding an
individual image in the collection requires filtering in order to narrow down the search.
Alternatively, the collection of images can be reduced to a single image using compositing
and mosaicking techniques. More on filtering and compositing (see
Reducing ) in the next sections.
Feature collections are also available through the Data Catalog. Their representation is
smaller than image collections, but you will find international, census, watershed, and
protected areas boundaries, to name a few. Learn more about importing your own vector
datasets here .
Filtering and Sorting
It is often necessary to filter a collection by space and/or time in order to limit the
number of results. For example, consider the task of sorting the Landsat 8 scene collection
in order to find a cloud-free scene for San Francisco. First, it's necessary to define the
region of interest. A point is often useful for that. Activate the
Inspector tab on the right side of the Code Editor and click near the
center of your area of interest, copy the coordinates from the Inspector
tab, then construct a Point using:
Code Editor (JavaScript)
var point = ee . Geometry . Point ( - 122.262 , 37.8719 );
Construct start and end dates:
Code Editor (JavaScript)
var start = ee . Date ( '2014-06-01' );
var finish = ee . Date ( '2014-10-01' );
Filter the Landsat 8 collection using the point and the dates, then sort using a metadata
property (discovered during inspection of the Landsat 8 scene metadata):
Code Editor (JavaScript)
var filteredCollection = ee . ImageCollection ( 'LANDSAT/LC08/C02/T1_TOA' )
. filterBounds ( point )
. filterDate ( start , finish )
. sort ( 'CLOUD_COVER' , true );
This collection can be safely printed and inspected. (If the collection has too many
images, printing it will either be very slow, time out, or return an error). Observe that
the images in the collection are a List stored in the 'features' property of
the ImageCollection . The ID of any image in the collection can be copied
into the Image constructor as above. Alternatively, get the first
image (lowest cloud cover):
Code Editor (JavaScript)
var first = filteredCollection . first ();
Access the complete Earth Engine filtering functionality using filter()
with an ee.Filter as the argument. (The filterBounds() and
filterDate() methods used above are shortcuts). For example, the following
creates a Filter , uses it to filter a FeatureCollection and
displays the result:
Code Editor (JavaScript)
// Load a feature collection.
var featureCollection = ee . FeatureCollection ( 'TIGER/2016/States' );
// Filter the collection.
var filteredFC = featureCollection . filter ( ee . Filter . eq ( 'NAME' , 'California' ));
// Display the collection.
Map . setCenter ( - 119.604 , 37.798 , 6 );
Map . addLayer ( filteredFC , {}, 'California' );
Band math
Perform mathematical operations on images using Image methods. This may
include band recombinations (spectral indices), image differencing or mathematical
operations such as multiplication by a constant. For example, compute the difference
between Normalized Difference Vegetation Index (NDVI) images 20 years apart:
Code Editor (JavaScript)
// This function gets NDVI from Landsat 5 imagery.
var getNDVI = function ( image ) {
return image . normalizedDifference ([ 'B4' , 'B3' ]);
};
// Load two Landsat 5 images, 20 years apart.
var image1 = ee . Image ( 'LANDSAT/LT05/C02/T1_TOA/LT05_044034_19900604' );
var image2 = ee . Image ( 'LANDSAT/LT05/C02/T1_TOA/LT05_044034_20100611' );
// Compute NDVI from the scenes.
var ndvi1 = getNDVI ( image1 );
var ndvi2 = getNDVI ( image2 );
// Compute the difference in NDVI.
var ndviDifference = ndvi2 . subtract ( ndvi1 );
Notice the use of a user defined function in this example. More on
functions in the next section.
Mapping (what to do instead of a for-loop)
Use map() to iterate over items in a collection. (For loops are NOT the
right way to do that in Earth Engine and should be avoided). The map()
function can be applied to an ImageCollection , a
FeatureCollection or a List and accepts a function
as its argument. The argument of the function is an element of the collection over
which it is mapped. This is useful for modifying every element of the collection in the
same way, for example adding. For example, the following code adds an NDVI band to every
image in an ImageCollection :
Code Editor (JavaScript)
// This function gets NDVI from Landsat 8 imagery.
var addNDVI = function ( image ) {
return image . addBands ( image . normalizedDifference ([ 'B5' , 'B4' ]));
};
// Load the Landsat 8 TOA data, filter by location and date.
var collection = ee . ImageCollection ( 'LANDSAT/LC08/C02/T1_TOA' )
. filterBounds ( ee . Geometry . Point ( - 122.262 , 37.8719 ))
. filterDate ( '2014-06-01' , '2014-10-01' );
// Map the function over the collection.
var ndviCollection = collection . map ( addNDVI );
Another common task is adding a new property (or 'attribute' or 'field') to features in a
FeatureCollection . In the following example, the new property is a
computation involving two existing attributes:
Code Editor (JavaScript)
// This function creates a new property that is the sum of two existing properties.
var addField = function ( feature ) {
var sum = ee . Number ( feature . get ( 'property1' )). add ( feature . get ( 'property2' ));
return feature . set ({ 'sum' : sum });
};
// Create a FeatureCollection from a list of Features.
var features = ee . FeatureCollection ([
ee . Feature ( ee . Geometry . Point ( - 122.4536 , 37.7403 ),
{ property1 : 100 , property2 : 100 }),
ee . Feature ( ee . Geometry . Point ( - 118.2294 , 34.039 ),
{ property1 : 200 , property2 : 300 }),
]);
// Map the function over the collection.
var featureCollection = features . map ( addField );
// Print a selected property of one Feature.
print ( featureCollection . first (). get ( 'sum' ));
// Print the entire FeatureCollection.
print ( featureCollection );
Note the cast to ee.Number required for the property value to be
recognized as a number in order to use the add() method). The type of
the collection can be changed by map() . For example:
Code Editor (JavaScript)
// This function returns the image centroid as a new Feature.
var getGeom = function ( image ) {
return ee . Feature ( image . geometry (). centroid (), { foo : 1 });
};
// Load a Landsat 8 TOA collection.
var collection = ee . ImageCollection ( 'LANDSAT/LC08/C02/T1_TOA' )
. filterBounds ( ee . Geometry . Point ( - 122.262 , 37.8719 ))
. filterDate ( '2014-06-01' , '2014-10-01' );
// Map the function over the ImageCollection.
var featureCollection = ee . FeatureCollection ( collection . map ( getGeom ));
// Print the collection.
print ( featureCollection );
Note the added property ( foo ) for each feature created from the image
centroid. In the final line, the cast makes the resultant collection recognizable as a
FeatureCollection .
Reducing
Reducing is the way to aggregate data over time, space, bands, arrays and other data
structures in Earth Engine. Various methods exist for this purpose in the API. For
example, to make a composite of an ImageCollection , use reduce()
to reduce the images in the collection to one Image. A simple example is creating the
median composite of the five least cloudy scenes in the Landsat 8 collection defined
earlier:
Code Editor (JavaScript)
// Load a Landsat 8 TOA collection.
var collection = ee . ImageCollection ( 'LANDSAT/LC08/C02/T1_TOA' )
// Filter by date and location.
. filterBounds ( ee . Geometry . Point ( - 122.262 , 37.8719 ))
. filterDate ( '2014-01-01' , '2014-12-31' )
// Sort by increasing cloudiness.
. sort ( 'CLOUD_COVER' );
// Compute the median of each pixel for each band of the 5 least cloudy scenes.
var median = collection . limit ( 5 ). reduce ( ee . Reducer . median ());
Reducing is also the way to get statistics of an image in the regions defined by a
Feature or FeatureCollection . Suppose the task is to compute
the mean pixel values within an area of interest. Use reduceRegion() for
this purpose. For example:
Code Editor (JavaScript)
// Load and display a Landsat TOA image.
var image = ee . Image ( 'LANDSAT/LC08/C02/T1_TOA/LC08_044034_20140318' );
Map . addLayer ( image , { bands : [ 'B4' , 'B3' , 'B2' ], max : 0.3 });
// Create an arbitrary rectangle as a region and display it.
var region = ee . Geometry . Rectangle ( - 122.2806 , 37.1209 , - 122.0554 , 37.2413 );
Map . addLayer ( region );
// Get a dictionary of means in the region. Keys are bandnames.
var mean = image . reduceRegion ({
reducer : ee . Reducer . mean (),
geometry : region ,
scale : 30
});
Learn more about reducers from the Reducers doc.
Masking
Every pixel in an ee.Image has both a value and a mask which ranges from
0 (no data) to 1. Masked pixels (in which mask==0) are treated as no data. Pixels
with 0 < mask ≤ 1 have a value, but it is weighted by the mask for numerical
computations.
You can make pixels transparent or exclude them from analysis using
masks. Pixels are masked when the mask value is zero. Continuing the image differencing
example, use a mask to display areas of increased and decreased NDVI over
the difference interval:
// This function gets NDVI from Landsat 5 imagery .
var getNDVI = function ( image ) {
return image . normalizedDifference ([ 'B4' , 'B3' ]);
};
// Load two Landsat 5 images , 20 years apart .
var image1 = ee . Image ( 'LANDSAT/LT05/C02/T1_TOA/LT05_044034_19900604' );
var image2 = ee . Image ( 'LANDSAT/LT05/C02/T1_TOA/LT05_044034_20100611' );
// Compute NDVI from the scenes .
var ndvi1 = getNDVI ( image1 );
var ndvi2 = getNDVI ( image2 );
// Compute the difference in NDVI .
var ndviDifference = ndvi2 . subtract ( ndvi1 );
// Load the land mask from the SRTM DEM .
var landMask = ee . Image ( 'CGIAR/SRTM90_V4' ) . mask ();
// Update the NDVI difference mask with the land mask .
var maskedDifference = ndviDifference . updateMask ( landMask );
// Display the masked result .
var vizParams = { min : - 0.5 , max : 0.5 , palette : [ 'FF0000' , 'FFFFFF' , '0000FF' ]};
Map . setCenter ( - 122.2531 , 37.6295 , 9 );
Map . addLayer ( maskedDifference , vizParams , 'NDVI difference' );
In this example, note that the mask of the NDVI difference is updated by the land mask
with updateMask() . This sets the mask of the NDVI difference pixels to the
land mask wherever the NDVI difference mask is non-zero.
Masking is also useful for excluding data from the analysis. Consider the
reduceRegion() example from the Reducing
section . Suppose the task is to compute a seasonal mean NDVI for Santa Clara county, CA,
excluding cloudy pixels. The following example demonstrates multiple concepts:
filtering, mapping, reducing and the use of a cloud mask:
Code Editor (JavaScript)
// This function gets NDVI from a Landsat 8 image.
var addNDVI = function ( image ) {
return image . addBands ( image . normalizedDifference ([ 'B5' , 'B4' ]));
};
// This function masks cloudy pixels.
var cloudMask = function ( image ) {
var clouds = ee . Algorithms . Landsat . simpleCloudScore ( image ). select ([ 'cloud' ]);
return image . updateMask ( clouds . lt ( 10 ));
};
// Load a Landsat collection, map the NDVI and cloud masking functions over it.
var collection = ee . ImageCollection ( 'LANDSAT/LC08/C02/T1_TOA' )
. filterBounds ( ee . Geometry . Point ([ - 122.262 , 37.8719 ]))
. filterDate ( '2014-03-01' , '2014-05-31' )
. map ( addNDVI )
. map ( cloudMask );
// Reduce the collection to the mean of each pixel and display.
var meanImage = collection . reduce ( ee . Reducer . mean ());
var vizParams = { bands : [ 'B5_mean' , 'B4_mean' , 'B3_mean' ], min : 0.02 , max : 0.4 };
Map . addLayer ( meanImage , vizParams , 'mean' );
// Load a region in which to compute the mean and display it.
var counties = ee . FeatureCollection ( 'TIGER/2018/Counties' );
var santaClara = ee . Feature ( counties . filter ( ee . Filter . eq ( 'NAME' , 'Santa Clara' )). first ());
Map . addLayer ( santaClara );
// Get the mean of NDVI in the region.
var mean = meanImage . select ([ 'nd_mean' ]). reduceRegion ({
reducer : ee . Reducer . mean (),
geometry : santaClara . geometry (),
scale : 30
});
// Print mean NDVI for the region.
mean . get ( 'nd_mean' ). evaluate ( function ( val ){
print ( 'Santa Clara spring mean NDVI:' , val );
});
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2023-10-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2023-10-06 UTC."],[],["Google Earth Engine allows geospatial data analysis via its API and Code Editor. Users can access public and private datasets, perform operations on `Image`, `Feature`, and their `Collection` data types, leveraging server-side objects. Core actions include filtering data by space and time, performing band math, and using algorithms for specialized processing. Data can be visualized using `Map.addLayer` and analyzed via functions like `map()` for iterative operations, `reduce()` for aggregation, and masking to refine data. Common tasks include data search, filtering, and visualization, all manageable through the interactive Code Editor.\n"]]
