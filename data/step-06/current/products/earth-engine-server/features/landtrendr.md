---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:27:28.104Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "LandTrendr"
feature_slug: "landtrendr"
latest_feature_date: "2018-06-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/best_practices"
  - "https://developers.google.com/earth-engine/guides/debugging"
  - "https://developers.google.com/earth-engine/guides/getstarted"
keywords:
  - "landtrendr"
  - "performs"
  - "temporal"
  - "segmentation"
  - "land"
  - "cover"
  - "change"
  - "analysis"
---

# LandTrendr

Product: Earth Engine Server
Coverage: MEDIUM

## Step 02 Summary

Performs temporal segmentation for land cover change analysis.

## Extended Definition

Performs temporal segmentation for land cover change analysis.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- [https://developers.google.com/earth-engine/guides/getstarted](https://developers.google.com/earth-engine/guides/getstarted)

## Supporting Pages

### Coding Best Practices \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- Source ID: `site-docs-root`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- FeatureCollection ( 'projects/google/demo landcover labels' ); // Increase the data a little bit, possibly introducing noise. labels = labels . map ( function ( f ) { return f . buffer ( 100 , 10 ); }); var bands = [ 'B2' , 'B3' , 'B4' , 'B5' , 'B6' , 'B7' ]; var data = composite . select ( bands ). sampleRegions ({ collection : labels , properties : [ 'landcover' ], scale : 30 }); // Add a column of uniform random numbers called 'random'. data = data . randomColumn (); // Partition into training and testing. var training = data . filter ( ee .
- Classifier . smileCart (). train ({ features : training , classProperty : 'landcover' , inputProperties : bands }); print ( classifier . explain ()); // Computed value is too large The better approach is to start with a moderate amount of data and tune the hyperparameters of the classifier to determine if you can achieve your desired accuracy: Tune hyperparameters! var l8raw = ee .
- Don't do this: labels = labels . map ( function ( f ) { return f . buffer ( 100000 , 1000 ); }); var bands = [ 'B2' , 'B3' , 'B4' , 'B5' , 'B6' , 'B7' ]; var training = composite . select ( bands ). sampleRegions ({ collection : labels , properties : [ 'landcover' ], scale : 30 }); var classifier = ee .
- Classifier . smileCart ({ minLeafPopulation : p }) . train ({ features : training , classProperty : 'landcover' , inputProperties : bands }); return testing . classify ( classifier ) . errorMatrix ( 'landcover' , 'classification' ) . accuracy (); }); print ( ui .

### "Get Started with Earth Engine \_|\_ Google Earth Engine \_|\_ Google for\

- URL: [https://developers.google.com/earth-engine/guides/getstarted](https://developers.google.com/earth-engine/guides/getstarted)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ImageCollection ( 'LANDSAT/LC08/C02/T1 TOA' ) . filterBounds ( point ) . filterDate ( start , finish ) . sort ( 'CLOUD COVER' , true ); This collection can be safely printed and inspected. (If the collection has too many images, printing it will either be very slow, time out, or return an error).
- Date ( '2014-10-01' ); Filter the Landsat 8 collection using the point and the dates, then sort using a metadata property (discovered during inspection of the Landsat 8 scene metadata): Code Editor (JavaScript) var filteredCollection = ee .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2023-10-06 UTC."],[],["Google Earth Engine allows geospatial data analysis via its API and Code Editor.
- Image ( 'CGIAR/SRTM90 V4' ) . mask (); // Update the NDVI difference mask with the land mask . var maskedDifference = ndviDifference . updateMask ( landMask ); // Display the masked result . var vizParams = { min : - 0.5 , max : 0.5 , palette : [ 'FF0000' , 'FFFFFF' , '0000FF' ]}; Map . setCenter ( - 122.2531 , 37.6295 , 9 ); Map . addLayer ( maskedDifference , vizParams , 'NDVI difference' ); In this example, note that the mask of the NDVI difference is updated by the land mask with updateMask() .

### Debugging guide \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/debugging](https://developers.google.com/earth-engine/guides/debugging)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Image ( 'COPERNICUS/S2 HARMONIZED/20160625T100617 20160625T170310 T33UVR' ) s2image . set ( 'my property' , 'This image is not assigned to a variable' ) This will not result in an error, but will not find 'my property'. display ( s2image . get ( 'my property' )) # None In this example, s2image.set() returns a copy of the image with the new property, but the image stored in the s2image variable is unchanged.
- Based on this discovery, the debugged code is: Code Editor (JavaScript) var functionToMap = function ( feature ) { var dictionary = image . reduceRegion ({ reducer : 'first' , geometry : feature . geometry (), scale : 10 , }); return feature . set ({ result : ee .
- Is the size zero when it shouldn't be? aside() It can be onerous to put every intermediate step in an analysis into a variable so that it can be printed and inspected.
- You can discover the band names by printing the image and inspecting it in the console, or by printing the list of band names returned by image.bandNames() .

