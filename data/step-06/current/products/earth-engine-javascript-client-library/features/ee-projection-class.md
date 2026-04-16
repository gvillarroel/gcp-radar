---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:11:20.997Z"
product_name: "Earth Engine JavaScript Client Library"
product_slug: "earth-engine-javascript-client-library"
feature_name: "ee.Projection class"
feature_slug: "ee-projection-class"
latest_feature_date: "2014-02-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image"
keywords:
  - "ee"
  - "projection"
  - "class"
  - "represents"
  - "map"
  - "projections"
---

# ee.Projection class

Product: Earth Engine JavaScript Client Library
Coverage: MEDIUM

## Step 02 Summary

The ee.Projection class represents map projections.

## Extended Definition

The ee.Projection class represents map projections.

## Evidence Summary

Fast-mode lexical matching selected 1 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image)

## Supporting Pages

### "Image computations with the Earth Engine REST API \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_image)
- Source ID: `site-docs-reference`
- Final score: 27
- Re-rank relevance: N/A

Evidence snippets:
- ImageCollection (' COPERNICUS / S2 ') collection = collection . filterBounds ( region ) collection = collection . filterDate (' 2020 - 04 - 01 ', ' 2020 - 09 - 01 ') image = collection . median () Serialize the expression graph This will create an object that represents the Earth Engine expression graph (specifically, an Expression ).
- Make a projection to discover the scale in degrees. proj = ee.Projection('EPSG:4326').atScale(10).getInfo() Get scales out of the transform. scale x = proj['transform'][0] scale y = -proj['transform'][4] Send the request Make a POST request to the computePixels endpoint.
- In general, you should build these with one of the client APIs. serialized = ee.serializer.encode(image) Create the desired projection (WGS84) at the desired scale (10 meters for Sentinel-2).
- This is just to discover the desired scale in degrees, the units of the projection.

