---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:44:49.601Z"
product_name: "Earth Engine Code Editor"
product_slug: "earth-engine-code-editor"
feature_name: "Geometry drawing keyboard shortcut behavior"
feature_slug: "geometry-drawing-keyboard-shortcut-behavior"
latest_feature_date: "2016-02-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/playground"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multigeometry"
  - "https://developers.google.com/earth-engine/guides/best_practices"
keywords:
  - "shortcuts"
  - "geometry"
  - "keyboard"
  - "shortcut"
  - "behavior"
  - "require"
  - "drawing"
---

# Geometry drawing keyboard shortcut behavior

Product: Earth Engine Code Editor
Coverage: MEDIUM

## Step 02 Summary

Geometry drawing shortcuts now require holding Shift.

## Extended Definition

Geometry drawing shortcuts now require holding Shift.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multigeometry](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multigeometry)
- [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)

## Supporting Pages

### Earth Engine Code Editor \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- Source ID: `site-docs-root`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Click the help button in the upper right of the Code Editor to see links to this Developer's Guide, other help forums, a guided tour of the Code Editor and a list of keyboard shortcuts that help with coding, running code, and displaying data on the Map .
- For drawing points, use the placemark icon , for drawing lines, use the line icon , for drawing polygons, use the polygon icon , for drawing rectangles use the rectangle icon . (Note that rectangles are planar geometries, so they cannot be placed on a layer with geodesic geometries like lines and polygons.) Using any of the drawing tools will automatically create a new geometry layer and add an import for that layer to the Imports section.
- The Code Editor has the following elements (illustrated in Figure 1): JavaScript code editor Map display for visualizing geospatial datasets API reference documentation (Docs tab) Git -based Script Manager (Scripts tab) Console output (Console tab) Task Manager (Tasks tab) to handle long-running queries Interactive map query (Inspector tab) Search of the data archive or saved scripts Geometry drawing tools Figure 1.
- The Code Editor includes essential elements such as a JavaScript editor, map display, API reference, Script Manager, Console output, Task Manager, interactive map query, search tool, and geometry drawing tools.

### "ee.Algorithms.GeometryConstructors.MultiGeometry \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multigeometry](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multigeometry)
- Source ID: `site-docs-reference`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- Usage Returns ee.Algorithms.GeometryConstructors.MultiGeometry(geometries, crs , geodesic , maxError ) Geometry Argument Type Details geometries List The list of geometries for the MultiGeometry. crs Projection, default: null The coordinate reference system of the coordinates.
- The default is the geodesic state of the inputs, or true if the inputs are numbers. maxError ErrorMargin, default: null Max error when input geometry must be reprojected to an explicitly requested result projection or geodesic state.
- Home Products Google Earth Engine Reference Send feedback ee.Algorithms.GeometryConstructors.MultiGeometry Stay organized with collections Save and categorize content based on your preferences.
- Constructs a MultiGeometry from the given list of geometry elements.

### Coding Best Practices \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- Source ID: `site-docs-root-2`
- Final score: 48
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Reducer . countEvery (), geometry : almostGlobal , // Set the scale to the maximum possible given // the required precision of the computation. scale : 50000 , }); Map . addLayer ( vectors , {}, 'vectors' ); In the previous example, note the use of a non-geodesic polygon for use in global reductions.
- Use a non-zero errorMargin For possibly expensive geometry operations, use the largest error margin possible given the required precision of the computation.
- Image ( 'projects/google/Logistic regression stack 0b8023b0af6c1b0ac7b5be649b54db06' ); // Take a very small sample first, to debug. var testSample = exportedStack . addBands ( loss16 ). stratifiedSample ({ numPoints : 1 , classBand : 'loss16' , region : testRegion , scale : 30 , geometries : true }); print ( testSample ); // Check this in the console. // Take a large sample. var sample = exportedStack . addBands ( loss16 ). stratifiedSample ({ numPoints : 10000 , classBand : 'loss16' , region : geometry , scale : 30 , }); // Export the large sample...
- Image ( doy ) . rename ( 'doy' ) . int (); return ndvi . addBands ( doyImage ). addBands ( time ) . clip ( image . geometry ()); // Appropriate use of clip. }); var array = withDoys . toArray (); var timeAxis = 0 ; var bandAxis = 1 ; var dedupe = function ( array ) { var time = array . arraySlice ( bandAxis , - 1 ); var sorted = array . arraySort ( time ); var doy = sorted . arraySlice ( bandAxis , - 2 , - 1 ); var left = doy . arraySlice ( timeAxis , 1 ); var right = doy . arraySlice ( timeAxis , 0 , - 1 ); var mask = ee .

