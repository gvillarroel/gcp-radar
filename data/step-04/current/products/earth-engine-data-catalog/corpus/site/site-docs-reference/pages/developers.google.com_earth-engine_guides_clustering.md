---
title: "Unsupervised Classification (clustering) \_|\_ Google Earth Engine \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/earth-engine/guides/clustering
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/earth-engine/guides/getstarted
source_metadata:
  url: https://developers.google.com/earth-engine/guides/clustering
  title: "Unsupervised Classification (clustering) \_|\_ Google Earth Engine \_|\_\
    \ Google for Developers"
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
Unsupervised Classification (clustering)
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The ee.Clusterer package in Earth Engine is used for unsupervised classification or clustering and is based on algorithms from Weka.
The general workflow for clustering involves assembling features, instantiating and training a clusterer, and applying it to an image or feature collection.
Training data for a clusterer is a FeatureCollection with properties, but unlike classifiers, it doesn't have an input class value.
When applied, a trained clusterer assigns an integer cluster ID to each pixel or feature.
The ee.Clusterer package handles unsupervised classification (or
clustering ) in Earth Engine. These algorithms are currently based on the
algorithms with the same name in Weka .
More details about each Clusterer are available in the
reference docs .
Clusterers are used in the same manner as classifiers in Earth Engine. The general
workflow for clustering is:
Assemble features with numeric properties in which to find clusters.
Instantiate a clusterer. Set its parameters if necessary.
Train the clusterer using the training data.
Apply the clusterer to an image or feature collection.
Label the clusters.
The training data is a FeatureCollection with properties that will be
input to the clusterer. Unlike classifiers, there is no input class value for an
Clusterer . Like classifiers, the data for the train and apply steps are
expected to have the same number of values. When a trained clusterer is applied to an image
or table, it assigns an integer cluster ID to each pixel or feature.
Here is a simple example of building and using an ee.Clusterer :
Code Editor (JavaScript)
// Define a region in which to generate a segmented map.
var region = ee . Geometry . Rectangle ( 29.7 , 30 , 32.5 , 31.7 );
// Load a Landsat composite for input.
var input = ee . ImageCollection ( 'LANDSAT/COMPOSITES/C02/T1_L2_32DAY' )
. filterDate ( '2001-05' , '2001-06' )
. first ()
. clip ( region );
// Display the sample region.
Map . setCenter ( 31.5 , 31.0 , 8 );
Map . addLayer ( ee . Image (). paint ( region , 0 , 2 ), {}, 'region' );
// Make the training dataset.
var training = input . sample ({
region : region ,
scale : 30 ,
numPixels : 5000
});
// Instantiate the clusterer and train it.
var clusterer = ee . Clusterer . wekaKMeans ( 15 ). train ( training );
// Cluster the input using the trained clusterer.
var result = input . cluster ( clusterer );
// Display the clusters with random colors.
Map . addLayer ( result . randomVisualizer (), {}, 'clusters' );
Python setup
See the
Python Environment page for information on the Python API and using
geemap for interactive development.
import ee
import geemap.core as geemap
Colab (Python)
# Define a region in which to generate a segmented map.
region = ee . Geometry . Rectangle ( 29.7 , 30 , 32.5 , 31.7 )
# Load a Landsat composite for input.
input = (
ee . ImageCollection ( 'LANDSAT/COMPOSITES/C02/T1_L2_32DAY' )
. filterDate ( '2001-05' , '2001-06' )
. first ()
. clip ( region )
)
# Display the sample region.
m = geemap . Map ()
m . set_center ( 31.5 , 31.0 , 8 )
m . add_layer ( ee . Image () . paint ( region , 0 , 2 ), {}, 'region' )
# Make the training dataset.
training = input . sample ( region = region , scale = 30 , numPixels = 5000 )
# Instantiate the clusterer and train it.
clusterer = ee . Clusterer . wekaKMeans ( 15 ) . train ( training )
# Cluster the input using the trained clusterer.
result = input . cluster ( clusterer )
# Display the clusters with random colors.
m . add_layer ( result . randomVisualizer (), {}, 'clusters' )
m
Please note:
The same inputs should always produce the same outputs, but reordering the inputs can
change the results.
Training with as few as 10 bands * 100k points can produce an Out Of Memory error.
Cobweb can take a long time to finish and can produce a large number of clusters.
The output clusters and their IDs are dependent on the algorithm and inputs.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-06-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-06-03 UTC."],[],["`ee.Clusterer` in Earth Engine performs unsupervised classification. The process involves assembling features, instantiating a clusterer (like `wekaKMeans`), and training it with a `FeatureCollection`. The trained clusterer is then applied to an image or feature collection, assigning an integer cluster ID to each element. The provided example loads Landsat data, samples it for training, and applies a trained clusterer to visualize the resulting clusters. The number of features in the dataset can impact the performance and stability of the clusterer.\n"]]
