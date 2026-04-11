---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.445Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "erfcInv()"
feature_slug: "erfcinv"
latest_feature_date: "2015-08-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-polygon"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multipolygon"
  - "https://developers.google.com/earth-engine/guides/arrays_transformations"
keywords:
  - "erfcinv"
  - "computes"
  - "the"
  - "inverse"
  - "complementary"
  - "error"
  - "function"
  - "on"
---

# erfcInv()

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Computes the inverse complementary error function on ee.Image, ee.Number, and ee.Array values.

## Extended Definition

Computes the inverse complementary error function on ee.Image, ee.Number, and ee.Array values.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-polygon](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-polygon)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multipolygon](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multipolygon)
- [https://developers.google.com/earth-engine/guides/arrays_transformations](https://developers.google.com/earth-engine/guides/arrays_transformations)

## Supporting Pages

### "ee.Algorithms.GeometryConstructors.Polygon \_|\_ Google Earth Engine \_\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-polygon](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-polygon)
- Source ID: `site-docs-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- The function takes several arguments including coordinates, crs, geodesic, maxError, and evenOdd.
- The default is the geodesic state of the inputs, or true if the inputs are numbers. maxError ErrorMargin, default: null Max error when input geometry must be reprojected to an explicitly requested result projection or geodesic state. evenOdd Boolean, default: true If true, polygon interiors will be determined by the even/odd rule, where a point is inside if it crosses an odd number of edges to reach a point at infinity.
- Usage Returns ee.Algorithms.GeometryConstructors.Polygon(coordinates, crs , geodesic , maxError , evenOdd ) Geometry Argument Type Details coordinates List A list of LinearRings where the first is the shell and the rest are holes, or for a simple polygon, a list of Points or pairs of Numbers in x,y order. crs Projection, default: null The coordinate reference system of the coordinates.
- Page Summary outlined flag The ee.Algorithms.GeometryConstructors.Polygon function constructs a Polygon from given coordinates.

### "ee.Algorithms.GeometryConstructors.MultiPolygon \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multipolygon](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multipolygon)
- Source ID: `site-docs-reference`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- The default is the geodesic state of the inputs, or true if the inputs are numbers. maxError ErrorMargin, default: null Max error when input geometry must be reprojected to an explicitly requested result projection or geodesic state. evenOdd Boolean, default: true If true, polygon interiors will be determined by the even/odd rule, where a point is inside if it crosses an odd number of edges to reach a point at infinity.
- Usage Returns ee.Algorithms.GeometryConstructors.MultiPolygon(coordinates, crs , geodesic , maxError , evenOdd ) Geometry Argument Type Details coordinates List A list of Polygons, or for one simple polygon, a list of Points or pairs of Numbers in x,y order. crs Projection, default: null The coordinate reference system of the coordinates.
- This function returns a Geometry object, and default values are available for crs, geodesic, maxError, and evenOdd.\n"]]
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-07-13 UTC."],[],["The MultiPolygon constructor creates a geometry from a list of polygon coordinates.

### Array Transformations \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/arrays_transformations](https://developers.google.com/earth-engine/guides/arrays_transformations)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- The solve() function determines how to best solve the system from characteristics of the inputs, using the pseudo-inverse for overdetermined systems, the inverse for square matrices and special techniques for nearly singular matrices: Code Editor (JavaScript) // Compute coefficients the easiest way. var coefficients3 = predictors . matrixSolve ( response ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Compute coefficients the easiest way. coefficients 3 = predictors . matrixSolve ( response ) To get a multi-band image, project the array image into a lower dimensional space, then flatten it: Code Editor (JavaScript) // Turn the results into a multi-band image. var coefficientsImage = coefficients3 // Get rid of the extra dimensions. . arrayProject ([ 0 ]) . arrayFlatten ([ [ 'constant' , 'trend' , 'sin' , 'cos' ] ]); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Turn the results into a multi-band image. coefficients image = ( coefficients 3 Get rid of the extra dimensions. . arrayProject ([ 0 ]) . arrayFlatten ([[ 'constant' , 'trend' , 'sin' , 'cos' ]]) ) Examine the outputs of the three methods and observe that the resultant matrix of coefficients is the same regardless of the solver.
- Point ( - 122.08709 , 36.9732 )) // Prepare images by mapping the prepSrL8 function over the collection. . map ( prepSrL8 ) // Select NIR and red bands only. . select ([ 'SR B5' , 'SR B4' ]) // Sort the collection in chronological order. . sort ( 'system:time start' , true ); // This function computes the predictors and the response from the input. var makeVariables = function ( image ) { // Compute time of the image in fractional years relative to the Epoch. var year = ee .
- Point ( - 122.08709 , 36.9732 )) Prepare images by mapping the prep sr l8 function over the collection. . map ( prep sr l8 ) Select NIR and red bands only. . select ([ 'SR B5' , 'SR B4' ]) Sort the collection in chronological order. . sort ( 'system:time start' , True ) ) This function computes the predictors and the response from the input. def make variables ( image ): Compute time of the image in fractional years relative to the Epoch. year = ee .
- OLS coefficients are then calculated using three methods: direct matrix operations, pseudo-inverse, and the matrixSolve() function.

