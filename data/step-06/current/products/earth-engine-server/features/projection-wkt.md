---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.451Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "Projection.wkt"
feature_slug: "projection-wkt"
latest_feature_date: "2014-06-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-linearring"
keywords:
  - "projection"
  - "wkt"
  - "returns"
  - "the"
  - "in"
  - "format"
---

# Projection.wkt

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Returns the projection in WKT format.

## Extended Definition

Returns the projection in WKT format.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-linearring](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-linearring)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- April 11, 2023 Earth Engine Data Catalog Feature Added MODIS/061/MCD19A2 GRANULES : MCD19A2.061: Terra & Aqua MAIAC Land Aerosol Optical Depth Daily 1km Added NOAA/VIIRS/001/VNP43IA2 : VNP43IA2: BRDF/Albedo Quality Daily L3 Global 500m SIN Grid Added WWF/HydroATLAS/v1/Basins/level03 : WWF HydroATLAS Basins Level 03 Added WWF/HydroATLAS/v1/Basins/level04 : WWF HydroATLAS Basins Level 04 Added WWF/HydroATLAS/v1/Basins/level05 : WWF HydroATLAS Basins Level 05 Added WWF/HydroATLAS/v1/Basins/level06 : WWF HydroATLAS Basins Level 06 Added WWF/HydroATLAS/v1/Basins/level07 : WWF HydroATLAS Basins Level 07 Added WWF/HydroATLAS/v1/Basins/level08 : WWF HydroATLAS Basins Level 08 Added WWF/HydroATLAS/v1/Basins/level09 : WWF HydroATLAS Basins Level 09 Added WWF/HydroATLAS/v1/Basins/level10 : WWF HydroATLAS Basins Level 10 Added WWF/HydroATLAS/v1/Basins/level11 : WWF HydroATLAS Basins Level 11 March 21, 2023 Earth Engine Data Catalog Feature Added NOAA/VIIRS/001/VNP15A2H (no longer available) March 14, 2023 Earth Engine Data Catalog Feature Added NASA/GDDP-CMIP6 : NEX-GDDP-CMIP6: NASA Earth Exchange Global Daily Downscaled Climate Projections March 09, 2023 Earth Engine Server Change Changed the default BIGTIFF parameter in the GeoTIFF image export options from IF SAFER to YES , which always generates a BigTiff unless the BIGTIFF parameter is overridden in the formatOptions dictionary parameter.
- Change Gave all API objects eq () and hash () Earth Engine Server Feature Added a few helper methods to Projection : Projection.atScale(projection, meters) Projection.crs(projection) Projection.scale(projection, x, y) Projection.transform(projection) Projection.translate(projection, x, y) Projection.wkt(projection) June 06, 2014 Earth Engine Server Change Added List.zip(other) function. exportImage() can now create TERRAIN assets when exporting to Google Maps Engine.
- September 08, 2020 Earth Engine Data Catalog Feature Added COPERNICUS/Landcover/100m/Proba-V-C3/Global : Copernicus Global Land Cover Layers: CGLS-LC100 Collection 3 August 21, 2020 Earth Engine JavaScript Client Library 0.1.231 Change Changed the object serialization format, so that x.serialize() returns an updated format (which is already used in server requests). ee.Deserializer supports both the new format and the old format.
- Earth Engine Python Client Library 0.1.231 Change Changed the object serialization format, so that x.serialize() returns an updated format (which is already used in server requests). ee.Deserializer supports both the new format and the old format.

### "ee.Algorithms.GeometryConstructors.MultiLineString \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring)
- Source ID: `site-docs-reference`
- Final score: 150
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Usage Returns ee.Algorithms.GeometryConstructors.MultiLineString(coordinates, crs , geodesic , maxError ) Geometry Argument Type Details coordinates List The list of LineStrings, or to wrap a single LineString, the list of Points or pairs of Numbers in x,y order. crs Projection, default: null The coordinate reference system of the coordinates.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-07-13 UTC."],[],["The function MultiLineString creates a geometry object from a list of coordinates.
- The default is the geodesic state of the inputs, or true if the inputs are numbers. maxError ErrorMargin, default: null Max error when input geometry must be reprojected to an explicitly requested result projection or geodesic state.
- It takes coordinates defining the LineStrings, and optionally, the crs (coordinate reference system), geodesic (true for curved edges, false for straight), and maxError (for reprojection errors).

### "ee.Algorithms.GeometryConstructors.LinearRing \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-linearring](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-linearring)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Usage Returns ee.Algorithms.GeometryConstructors.LinearRing(coordinates, crs , geodesic , maxError ) Geometry Argument Type Details coordinates List The list of Points or pairs of Numbers in x,y order. crs Projection, default: null The coordinate reference system of the coordinates.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-17 UTC."],[],[]]
- The default is the geodesic state of the inputs, or true if the inputs are numbers. maxError ErrorMargin, default: null Max error when input geometry must be reprojected to an explicitly requested result projection or geodesic state.
- The default is the projection of the inputs, where Numbers are assumed to be EPSG:4326. geodesic Boolean, default: null If false, edges are straight in the projection.

