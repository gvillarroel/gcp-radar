---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:11:20.998Z"
product_name: "Earth Engine JavaScript Client Library"
product_slug: "earth-engine-javascript-client-library"
feature_name: "ee.Element class"
feature_slug: "ee-element-class"
latest_feature_date: "2013-12-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image"
  - "https://developers.google.com/earth-engine/guides"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-feature"
keywords:
  - "ee"
  - "element"
  - "class"
  - "serves"
  - "base"
  - "image"
  - "feature"
---

# ee.Element class

Product: Earth Engine JavaScript Client Library
Coverage: MEDIUM

## Step 02 Summary

The ee.Element class serves as the base class for ee.Image and ee.Feature.

## Extended Definition

The ee.Element class serves as the base class for ee.Image and ee.Feature.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image)
- [https://developers.google.com/earth-engine/guides](https://developers.google.com/earth-engine/guides)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-feature](https://developers.google.com/earth-engine/apidocs/ee-algorithms-feature)

## Supporting Pages

### "Image computations with the Earth Engine REST API \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image)
- Source ID: `site-docs-reference`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Products Google Earth Engine Reference Send feedback Image computations with the Earth Engine REST API Stay organized with collections Save and categorize content based on your preferences.
- Here the coordinate system is geographic, so the transform is specified with scale in degrees and geographic coordinates of the upper left corner of the requested image patch. import json url = 'https://earthengine.googleapis.com/v1beta/projects/ {} /image:computePixels' url = url . format ( PROJECT ) response = session . post ( url = url , data = json . dumps ({ 'expression' : serialized , 'fileFormat' : 'PNG' , 'bandIds' : [ 'B4' , 'B3' , 'B2' ], 'grid' : { 'dimensions' : { 'width' : 640 , 'height' : 640 }, 'affineTransform' : { 'scaleX' : scale x , 'shearX' : 0 , 'translateX' : coords [ 0 ], 'shearY' : 0 , 'scaleY' : scale y , 'translateY' : coords [ 1 ] }, 'crsCode' : 'EPSG:4326' , }, 'visualizationOptions' : { 'ranges' : [{ 'min' : 0 , 'max' : 3000 }]}, }) ) image content = response . content If you are running this in a notebook, you can display the results using the IPython image display widget.
- ImageCollection (' COPERNICUS / S2 ') collection = collection . filterBounds ( region ) collection = collection . filterDate (' 2020 - 04 - 01 ', ' 2020 - 09 - 01 ') image = collection . median () Serialize the expression graph This will create an object that represents the Earth Engine expression graph (specifically, an Expression ).
- Import the Image function from the IPython.display module. from IPython.display import Image Image ( image content ) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### ee.Algorithms.Feature \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-feature](https://developers.google.com/earth-engine/apidocs/ee-algorithms-feature)
- Source ID: `site-docs-reference`
- Final score: 66
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Products Google Earth Engine Reference Send feedback ee.Algorithms.Feature Stay organized with collections Save and categorize content based on your preferences.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2023-10-06 UTC."],[],["Creates a Feature object, which represents a spatial entity with associated data.
- Usage Returns ee.Algorithms.Feature( geometry , metadata , geometryKey ) Feature Argument Type Details geometry Geometry, default: null The geometry of the feature. metadata Dictionary, default: {} The properties of the feature. geometryKey String, default: null Obsolete; has no effect.
- The function ee.Algorithms.Feature accepts a geometry (spatial definition) and metadata (a dictionary of properties) as input.

### About Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides](https://developers.google.com/earth-engine/guides)
- Source ID: `site-docs-reference`
- Final score: 63
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Machine learning Machine learning tools for regression, classification, image segmentation, and accuracy assessment are built into Earth Engine.
- For more advanced options or externally trained models, integration with Vertex AI is provided, allowing models to be brought to Earth Engine's data or enabling the construction of deep learning models and neural network-based analyses.
- Page Summary outlined flag Google Earth Engine is a Google Cloud product that combines a large catalog of satellite imagery and geospatial datasets with planetary-scale computation for environmental research and applications.
- Access is available for both commercial and noncommercial use, with noncommercial use being free, and integration with Google Cloud projects provides robust access, management, and security features.

