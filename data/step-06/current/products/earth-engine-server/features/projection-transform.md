---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.450Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "Projection.transform"
feature_slug: "projection-transform"
latest_feature_date: "2014-06-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/guides/arrays_transformations"
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/exporting_images"
keywords:
  - "projection"
  - "transform"
  - "returns"
  - "the"
  - "affine"
  - "for"
---

# Projection.transform

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Returns the affine transform for a projection.

## Extended Definition

Returns the affine transform for a projection.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/guides/arrays_transformations](https://developers.google.com/earth-engine/guides/arrays_transformations)
- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/exporting_images](https://developers.google.com/earth-engine/guides/exporting_images)

## Supporting Pages

### Array Transformations \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/arrays_transformations](https://developers.google.com/earth-engine/guides/arrays_transformations)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Image ( 1 )) # 0. constant . addBands ( year . rename ( 't' )) # 1. linear trend . addBands ( season . sin () . rename ( 'sin' )) # 2. seasonal . addBands ( season . cos () . rename ( 'cos' )) # 3. seasonal . addBands ( image . normalizedDifference () . rename ( 'NDVI' )) # 4. response . toFloat () ) Define the axes of variation in the collection array. image axis = 0 band axis = 1 Convert the collection to an array. array = collection . map ( make variables ) . toArray () Check the length of the image axis (number of images). array length = array . arrayLength ( image axis ) Update the mask to ensure that the number of images is greater than or equal to the number of predictors (the linear model is solvable). array = array . updateMask ( array length . gt ( 4 )) Get slices of the array according to positions along the band axis. predictors = array . arraySlice ( band axis , 0 , 4 ) response = array . arraySlice ( band axis , 4 ) Note that arraySlice() returns all the images in the time series for the range of indices specified along the bandAxis (the 1-axis).
- Image ( 1 )) // 0. constant . addBands ( year . rename ( 't' )) // 1. linear trend . addBands ( season . sin (). rename ( 'sin' )) // 2. seasonal . addBands ( season . cos (). rename ( 'cos' )) // 3. seasonal . addBands ( image . normalizedDifference (). rename ( 'NDVI' )) // 4. response . toFloat (); }; // Define the axes of variation in the collection array. var imageAxis = 0 ; var bandAxis = 1 ; // Convert the collection to an array. var array = collection . map ( makeVariables ). toArray (); // Check the length of the image axis (number of images). var arrayLength = array . arrayLength ( imageAxis ); // Update the mask to ensure that the number of images is greater than or // equal to the number of predictors (the linear model is solvable). array = array . updateMask ( arrayLength . gt ( 4 )); // Get slices of the array according to positions along the band axis. var predictors = array . arraySlice ( bandAxis , 0 , 4 ); var response = array . arraySlice ( bandAxis , 4 ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) import math Scales and masks Landsat 8 surface reflectance images. def prep sr l8 ( image ): Develop masks for unwanted pixels (fill, cloud, cloud shadow). qa mask = image . select ( 'QA PIXEL' ) . bitwiseAnd ( int ( '11111' , 2 )) . eq ( 0 ) saturation mask = image . select ( 'QA RADSAT' ) . eq ( 0 ) Apply the scaling factors to the appropriate bands. optical bands = image . select ( 'SR B.' ) . multiply ( 0.0000275 ) . add ( - 0.2 ) thermal bands = image . select ( 'ST B. ' ) . multiply ( 0.00341802 ) . add ( 149.0 ) Replace the original bands with the scaled ones and apply the masks. return ( image . addBands ( optical bands , None , True ) . addBands ( thermal bands , None , True ) . updateMask ( qa mask ) . updateMask ( saturation mask ) ) Load a Landsat 8 surface reflectance image collection. collection = ( ee .
- The solve() function determines how to best solve the system from characteristics of the inputs, using the pseudo-inverse for overdetermined systems, the inverse for square matrices and special techniques for nearly singular matrices: Code Editor (JavaScript) // Compute coefficients the easiest way. var coefficients3 = predictors . matrixSolve ( response ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Compute coefficients the easiest way. coefficients 3 = predictors . matrixSolve ( response ) To get a multi-band image, project the array image into a lower dimensional space, then flatten it: Code Editor (JavaScript) // Turn the results into a multi-band image. var coefficientsImage = coefficients3 // Get rid of the extra dimensions. . arrayProject ([ 0 ]) . arrayFlatten ([ [ 'constant' , 'trend' , 'sin' , 'cos' ] ]); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Turn the results into a multi-band image. coefficients image = ( coefficients 3 Get rid of the extra dimensions. . arrayProject ([ 0 ]) . arrayFlatten ([[ 'constant' , 'trend' , 'sin' , 'cos' ]]) ) Examine the outputs of the three methods and observe that the resultant matrix of coefficients is the same regardless of the solver.
- First, assemble the image data and convert to arrays: Code Editor (JavaScript) // Scales and masks Landsat 8 surface reflectance images. function prepSrL8 ( image ) { // Develop masks for unwanted pixels (fill, cloud, cloud shadow). var qaMask = image . select ( 'QA PIXEL' ). bitwiseAnd ( parseInt ( '11111' , 2 )). eq ( 0 ); var saturationMask = image . select ( 'QA RADSAT' ). eq ( 0 ); // Apply the scaling factors to the appropriate bands. var opticalBands = image . select ( 'SR B.' ). multiply ( 0.0000275 ). add ( - 0.2 ); var thermalBands = image . select ( 'ST B. ' ). multiply ( 0.00341802 ). add ( 149.0 ); // Replace the original bands with the scaled ones and apply the masks. return image . addBands ( opticalBands , null , true ) . addBands ( thermalBands , null , true ) . updateMask ( qaMask ) . updateMask ( saturationMask ); } // Load a Landsat 8 surface reflectance image collection. var collection = ee .

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Change Gave all API objects eq () and hash () Earth Engine Server Feature Added a few helper methods to Projection : Projection.atScale(projection, meters) Projection.crs(projection) Projection.scale(projection, x, y) Projection.transform(projection) Projection.translate(projection, x, y) Projection.wkt(projection) June 06, 2014 Earth Engine Server Change Added List.zip(other) function. exportImage() can now create TERRAIN assets when exporting to Google Maps Engine.
- March 13, 2018 Earth Engine Data Catalog Feature Added LANDSAT/LC08/C01/T2 SR (no longer available) Added LANDSAT/LE07/C01/T2 SR (no longer available) Added LANDSAT/LT04/C01/T2 SR (no longer available) Added LANDSAT/LT05/C01/T2 SR (no longer available) March 01, 2018 Earth Engine Server Change Fixed ee.Geometry.transform() to report the projection a geometry cannot be transformed into, instead of returning an internal error.
- April 11, 2023 Earth Engine Data Catalog Feature Added MODIS/061/MCD19A2 GRANULES : MCD19A2.061: Terra & Aqua MAIAC Land Aerosol Optical Depth Daily 1km Added NOAA/VIIRS/001/VNP43IA2 : VNP43IA2: BRDF/Albedo Quality Daily L3 Global 500m SIN Grid Added WWF/HydroATLAS/v1/Basins/level03 : WWF HydroATLAS Basins Level 03 Added WWF/HydroATLAS/v1/Basins/level04 : WWF HydroATLAS Basins Level 04 Added WWF/HydroATLAS/v1/Basins/level05 : WWF HydroATLAS Basins Level 05 Added WWF/HydroATLAS/v1/Basins/level06 : WWF HydroATLAS Basins Level 06 Added WWF/HydroATLAS/v1/Basins/level07 : WWF HydroATLAS Basins Level 07 Added WWF/HydroATLAS/v1/Basins/level08 : WWF HydroATLAS Basins Level 08 Added WWF/HydroATLAS/v1/Basins/level09 : WWF HydroATLAS Basins Level 09 Added WWF/HydroATLAS/v1/Basins/level10 : WWF HydroATLAS Basins Level 10 Added WWF/HydroATLAS/v1/Basins/level11 : WWF HydroATLAS Basins Level 11 March 21, 2023 Earth Engine Data Catalog Feature Added NOAA/VIIRS/001/VNP15A2H (no longer available) March 14, 2023 Earth Engine Data Catalog Feature Added NASA/GDDP-CMIP6 : NEX-GDDP-CMIP6: NASA Earth Exchange Global Daily Downscaled Climate Projections March 09, 2023 Earth Engine Server Change Changed the default BIGTIFF parameter in the GeoTIFF image export options from IF SAFER to YES , which always generates a BigTiff unless the BIGTIFF parameter is overridden in the formatOptions dictionary parameter.
- June 13, 2023 Earth Engine Data Catalog Feature Added MODIS/061/MOD10A1 : MOD10A1.061 Terra Snow Cover Daily Global 500m Added MODIS/061/MOD16A2 : MOD16A2.061: Terra Net Evapotranspiration 8-Day Global 500m Added MODIS/061/MYD10A1 : MYD10A1.061 Aqua Snow Cover Daily Global 500m Added USGS/NLCD RELEASES/2020 REL/NALCMS : Land Cover of North America at 30 meters, 2020 June 06, 2023 Earth Engine Data Catalog Feature Added CSIC/SPEI/2 8 (no longer available) May 30, 2023 Earth Engine Data Catalog Feature Added Switzerland/SWISSIMAGE/orthos/10cm : SWISSIMAGE 10 cm RGB imagery Added projects/ngis-cat/assets/DEA/NIDEM : Preview National Intertidal Digital Elevation Model 25m 1.0.0 May 23, 2023 Earth Engine Data Catalog Feature Added NOAA/VIIRS/001/VNP43IA1 : VNP43IA1: BRDF/Albedo Model Parameters Daily L3 Global 500m SIN Grid Added UMD/hansen/global forest change 2022 v1 10 (no longer available) May 16, 2023 Earth Engine Data Catalog Feature Added Latvia/Maamet/orthos/cir : Latvia Color InfraRed (CIR) orthophotos Added Latvia/Maamet/orthos/rgb : Latvia RGB orthophotos Added USFS/GTAC/LCMS/v2022-8 (no longer available) May 15, 2023 Earth Engine Server Feature Added support for the geostationary satellite projection (geos) for Cloud Optimized GeoTIFFs ( ee.Image.loadGeoTIFF() and the CreateAsset pathway).

### Exporting Images \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/exporting_images](https://developers.google.com/earth-engine/guides/exporting_images)
- Source ID: `site-docs-root-2`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Export . image . toAsset ({ image : band4 , description : 'imageToAssetExample' , assetId : 'exampleExport' , crs : projection . crs , crsTransform : projection . transform , region : geometry , pyramidingPolicy : { 'b4 mean' : 'mean' , 'b4 sample' : 'sample' , 'b4 max' : 'max' } }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Get band 4 from the Landsat image, copy it. band 4 = ( landsat . select ( 'B4' ) . rename ( 'b4 mean' ) . addBands ( landsat . select ( 'B4' ) . rename ( 'b4 sample' )) . addBands ( landsat . select ( 'B4' ) . rename ( 'b4 max' )) ) Export the image to an Earth Engine asset. task = ee . batch .
- Code Editor (JavaScript) // Retrieve the projection information from a band of the original image. // Call getInfo() on the projection to request a client-side object containing // the crs and transform information needed for the client-side Export function. var projection = landsat . select ( 'B2' ). projection (). getInfo (); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Retrieve the projection information from a band of the original image.
- Export . image . toCloudStorage ({ image : landsat , description : 'imageToCloudExample' , bucket : 'your-bucket-name' , fileNamePrefix : 'exampleExport' , crs : projection . crs , crsTransform : projection . transform , region : geometry }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Export the image to Cloud Storage. task = ee . batch .
- Export . image . toDrive ({ image : landsat , description : 'imageToCOGeoTiffExample' , crs : projection . crs , crsTransform : projection . transform , region : geometry , fileFormat : 'GeoTIFF' , formatOptions : { cloudOptimized : true } }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Export a cloud-optimized GeoTIFF. task = ee . batch .

