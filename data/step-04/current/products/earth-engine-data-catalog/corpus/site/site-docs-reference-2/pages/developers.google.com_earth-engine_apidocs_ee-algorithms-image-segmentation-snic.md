---
title: "ee.Algorithms.Image.Segmentation.SNIC \_|\_ Google Earth Engine \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/earth-engine/apidocs/ee-algorithms-image-segmentation-snic
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://developers.google.com/earth-engine/apidocs
source_metadata:
  url: https://developers.google.com/earth-engine/apidocs/ee-algorithms-image-segmentation-snic
  title: "ee.Algorithms.Image.Segmentation.SNIC \_|\_ Google Earth Engine \_|\_ Google\
    \ for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Earth Engine is introducing noncommercial quota tiers to safeguard shared compute resources and ensure reliable performance for everyone. All noncommercial projects will need to select a quota tier by April 27, 2026 or will use the Community Tier by default. Tier quotas will take effect for all projects (regardless of tier selection date) on April 27, 2026 . Learn more.
Home
Products
Google Earth Engine
Reference
Send feedback
ee.Algorithms.Image.Segmentation.SNIC
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The SNIC algorithm performs superpixel clustering on an input image.
The output includes a band of cluster IDs and the average values for each input band within those clusters.
If seeds are not provided, the output will also contain a seeds band indicating the generated seed locations.
The size and compactness parameters significantly influence the clustering results and may need adjustment based on the image.
Superpixel clustering based on SNIC (Simple Non-Iterative Clustering). Outputs a band of cluster IDs and the per-cluster averages for each of the input bands. If the 'seeds' image isn't provided as input, the output will include a 'seeds' band containing the generated seed locations. See: Achanta, Radhakrishna and Susstrunk, Sabine, 'Superpixels and Polygons using Simple Non-Iterative Clustering', CVPR, 2017.
Usage Returns ee.Algorithms.Image.Segmentation.SNIC(image, size , compactness , connectivity , neighborhoodSize , seeds ) Image Argument Type Details image Image The input image for clustering. size Integer, default: 5 The superpixel seed location spacing, in pixels. If 'seeds' image is provided, no grid is produced. compactness Float, default: 1 Compactness factor. Larger values cause clusters to be more compact (square). Setting this to 0 disables spatial distance weighting. connectivity Integer, default: 8 Connectivity. Either 4 or 8. neighborhoodSize Integer, default: null Tile neighborhood size (to avoid tile boundary artifacts). Defaults to 2 * size. seeds Image, default: null If provided, any non-zero valued pixels are used as seed locations. Pixels that touch (as specified by 'connectivity') are considered to belong to the same cluster.
Examples
Code Editor (JavaScript)
// Note that the compactness and size parameters can have a significant impact
// on the result. They must be adjusted to meet image-specific characteristics
// and patterns, typically through trial. Pixel scale (map zoom level) is also
// important to consider. When exploring interactively through map tile
// visualization, the segmentation result it dependent on zoom level. If you
// need to evaluate the result at a specific scale, call .reproject() on the
// result, but do so with caution because it overrides the default scaling
// behavior that makes tile computation fast and efficient.
// Load a NAIP image for a neighborhood in Las Vegas.
var naip = ee . Image ( 'USDA/NAIP/DOQQ/m_3611554_sw_11_1_20170613' );
// Apply the SNIC algorithm to the image.
var snic = ee . Algorithms . Image . Segmentation . SNIC ({
image : naip ,
size : 30 ,
compactness : 0.1 ,
connectivity : 8 ,
});
// Display the original NAIP image as RGB.
// Lock map zoom to maintain the desired scale of the segmentation computation.
Map . setLocked ( false , 18 , 18 );
Map . setCenter ( - 115.32053 , 36.182016 , 18 );
Map . addLayer ( naip , null , 'NAIP RGB' );
// Display the clusters.
Map . addLayer ( snic . randomVisualizer (), null , 'Clusters' );
// Display the RGB cluster means.
var visParams = {
bands : [ 'R_mean' , 'G_mean' , 'B_mean' ],
min : 0 ,
max : 255
};
Map . addLayer ( snic , visParams , 'RGB cluster means' );
Python setup
See the
Python Environment page for information on the Python API and using
geemap for interactive development.
import ee
import geemap.core as geemap
Colab (Python)
# Note that the compactness and size parameters can have a significant impact
# on the result. They must be adjusted to meet image-specific characteristics
# and patterns, typically through trial. Pixel scale (map zoom level) is also
# important to consider. When exploring interactively through map tile
# visualization, the segmentation result it dependent on zoom level. If you
# need to evaluate the result at a specific scale, call .reproject() on the
# result, but do so with caution because it overrides the default scaling
# behavior that makes tile computation fast and efficient.
# Load a NAIP image for a neighborhood in Las Vegas.
naip = ee . Image ( 'USDA/NAIP/DOQQ/m_3611554_sw_11_1_20170613' )
# Apply the SNIC algorithm to the image.
snic = ee . Algorithms . Image . Segmentation . SNIC (
image = naip , size = 30 , compactness = 0.1 , connectivity = 8
)
# Display the original NAIP image as RGB.
m = geemap . Map ()
m . set_center ( - 115.32053 , 36.182016 , 18 )
m . add_layer ( naip , None , 'NAIP RGB' )
# Display the clusters.
m . add_layer ( snic . randomVisualizer (), None , 'Clusters' )
# Display the RGB cluster means.
vis_params = { 'bands' : [ 'R_mean' , 'G_mean' , 'B_mean' ], 'min' : 0 , 'max' : 255 }
m . add_layer ( snic , vis_params , 'RGB cluster means' )
m
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-07-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-07-13 UTC."],[],["SNIC clustering segments an image into superpixels, outputting cluster IDs and per-cluster averages for each input band. Key parameters include `size` (seed spacing), `compactness` (cluster shape), and `connectivity`. A user can provide `seeds` to define seed locations; otherwise, they are generated. The output `Image` includes cluster IDs, band averages, and optionally generated seed locations. Adjusting `size` and `compactness` is crucial for optimal results, which are also affected by pixel scale.\n"]]
