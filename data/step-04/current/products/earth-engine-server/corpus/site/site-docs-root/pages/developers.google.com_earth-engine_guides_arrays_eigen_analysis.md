---
title: "Eigen Analysis \_|\_ Google Earth Engine \_|\_ Google for Developers"
url: https://developers.google.com/earth-engine/guides/arrays_eigen_analysis
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/earth-engine
source_metadata:
  url: https://developers.google.com/earth-engine/guides/arrays_eigen_analysis
  title: "Eigen Analysis \_|\_ Google Earth Engine \_|\_ Google for Developers"
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
Eigen Analysis
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Principal Components (PC) transform is a spectral rotation that converts spectrally correlated image data into uncorrelated data.
The PC transform diagonalizes the input band correlation matrix using Eigen-analysis.
In Earth Engine, this transformation is achieved by using a covariance reducer on an array image and the eigen() command on the resulting covariance array.
The input to the function is a mean zero image, a scale, and a region for analysis, and the transformation involves obtaining eigenvalues and eigenvectors of the covariance matrix.
The principal
components (PC) transform (also known as the Karhunen-Loeve transform) is a
spectral rotation that takes spectrally correlated image data and outputs uncorrelated
data. The PC transform accomplishes this by diagonalizing the input band correlation
matrix through Eigen-analysis. To do this in Earth Engine, use a covariance reducer on an
array image and the eigen() command on the resultant covariance array.
Consider the following function for that purpose (an example of it in application is
available as a
Code Editor script
and a Colab notebook ).
Code Editor (JavaScript)
var getPrincipalComponents = function ( centered , scale , region ) {
// Collapse the bands of the image into a 1D array per pixel.
var arrays = centered . toArray ();
// Compute the covariance of the bands within the region.
var covar = arrays . reduceRegion ({
reducer : ee . Reducer . centeredCovariance (),
geometry : region ,
scale : scale ,
maxPixels : 1e9
});
// Get the 'array' covariance result and cast to an array.
// This represents the band-to-band covariance within the region.
var covarArray = ee . Array ( covar . get ( 'array' ));
// Perform an eigen analysis and slice apart the values and vectors.
var eigens = covarArray . eigen ();
// This is a P-length vector of Eigenvalues.
var eigenValues = eigens . slice ( 1 , 0 , 1 );
// This is a PxP matrix with eigenvectors in rows.
var eigenVectors = eigens . slice ( 1 , 1 );
// Convert the array image to 2D arrays for matrix computations.
var arrayImage = arrays . toArray ( 1 );
// Left multiply the image array by the matrix of eigenvectors.
var principalComponents = ee . Image ( eigenVectors ). matrixMultiply ( arrayImage );
// Turn the square roots of the Eigenvalues into a P-band image.
var sdImage = ee . Image ( eigenValues . sqrt ())
. arrayProject ([ 0 ]). arrayFlatten ([ getNewBandNames ( 'sd' )]);
// Turn the PCs into a P-band image, normalized by SD.
return principalComponents
// Throw out an an unneeded dimension, [[]] -> [].
. arrayProject ([ 0 ])
// Make the one band array image a multi-band image, [] -> image.
. arrayFlatten ([ getNewBandNames ( 'pc' )])
// Normalize the PCs by their SDs.
. divide ( sdImage );
};
Python setup
See the
Python Environment page for information on the Python API and using
geemap for interactive development.
import ee
import geemap.core as geemap
Colab (Python)
def get_principal_components ( centered , scale , region ):
# Collapse bands into 1D array
arrays = centered . toArray ()
# Compute the covariance of the bands within the region.
covar = arrays . reduceRegion (
reducer = ee . Reducer . centeredCovariance (),
geometry = region ,
scale = scale ,
maxPixels = 1e9 ,
)
# Get the 'array' covariance result and cast to an array.
# This represents the band-to-band covariance within the region.
covar_array = ee . Array ( covar . get ( 'array' ))
# Perform an eigen analysis and slice apart the values and vectors.
eigens = covar_array . eigen ()
# This is a P-length vector of Eigenvalues.
eigen_values = eigens . slice ( 1 , 0 , 1 )
# This is a PxP matrix with eigenvectors in rows.
eigen_vectors = eigens . slice ( 1 , 1 )
# Convert the array image to 2D arrays for matrix computations.
array_image = arrays . toArray ( 1 )
# Left multiply the image array by the matrix of eigenvectors.
principal_components = ee . Image ( eigen_vectors ) . matrixMultiply ( array_image )
# Turn the square roots of the Eigenvalues into a P-band image.
sd_image = (
ee . Image ( eigen_values . sqrt ())
. arrayProject ([ 0 ])
. arrayFlatten ([ get_new_band_names ( 'sd' )])
)
# Turn the PCs into a P-band image, normalized by SD.
return (
# Throw out an an unneeded dimension, [[]] -> [].
principal_components . arrayProject ([ 0 ])
# Make the one band array image a multi-band image, [] -> image.
. arrayFlatten ([ get_new_band_names ( 'pc' )])
# Normalize the PCs by their SDs.
. divide ( sd_image )
)
The input to the function is a mean zero image, a scale and a region over which to
perform the analysis. Note that the input imagery first needs to be converted to a 1-D
array image and then reduced using ee.Reducer.centeredCovariance() . The
array returned by this reduction is the symmetric variance-covariance matrix of the input.
Use the eigen() command to get the eigenvalues and eigenvectors of the
covariance matrix. The matrix returned by eigen() contains the eigenvalues
in the 0-th position of the 1-axis. As shown in the earlier function, use slice()
to separate the eigenvalues and the eigenvectors. Each element along the 0-axis of the
eigenVectors matrix is an eigenvector. As in the
tasseled cap (TC) example , perform the
transformation by matrix multiplying the arrayImage by the eigenvectors.
In this example, each eigenvector multiplication results in a PC.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-06-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-06-10 UTC."],[],["The provided content outlines how to perform a principal component (PC) transform in Earth Engine. This involves using a covariance reducer on an array image and applying the `eigen()` command to the resulting covariance array. Key actions include: converting input imagery to a 1D array, computing band covariance, performing eigen analysis to get eigenvalues and eigenvectors, transforming via matrix multiplication, and normalizing by standard deviations derived from the eigenvalues to obtain the PCs.\n"]]
