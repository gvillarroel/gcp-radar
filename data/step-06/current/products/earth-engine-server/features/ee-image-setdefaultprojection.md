---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.418Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "ee.Image.setDefaultProjection()"
feature_slug: "ee-image-setdefaultprojection"
latest_feature_date: "2018-11-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/guides/exporting_images"
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/ee-vertex-image-predictions"
keywords:
  - "ee"
  - "image"
  - "setdefaultprojection"
  - "sets"
  - "the"
  - "default"
  - "projection"
  - "for"
---

# ee.Image.setDefaultProjection()

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Sets the default projection for an image.

## Extended Definition

Sets the default projection for an image.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/guides/exporting_images](https://developers.google.com/earth-engine/guides/exporting_images)
- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/ee-vertex-image-predictions](https://developers.google.com/earth-engine/guides/ee-vertex-image-predictions)

## Supporting Pages

### Exporting Images \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/exporting_images](https://developers.google.com/earth-engine/guides/exporting_images)
- Source ID: `site-docs-root-2`
- Final score: 174
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Export . image . toAsset ( image = band 4 , description = 'imageToAssetExample' , assetId = 'projects/your-project/assets/exampleExport' , crs = projection [ 'crs' ], crsTransform = projection [ 'transform' ], region = geometry , pyramidingPolicy = { 'b4 mean' : 'mean' , 'b4 sample' : 'sample' , 'b4 max' : 'max' , }, ) task . start () You can provide a default pyramiding policy for every band that isn't explicitly specified by using the '.default' key.
- For example: Code Editor (JavaScript) // Set a nodata value and replace masked pixels around the image edge with it. var noDataVal = - 9999 ; landsat = landsat . unmask ( noDataVal ); Export . image . toDrive ({ image : landsat , description : 'imageNoDataExample' , crs : projection . crs , scale : 2000 , // large scale for minimal demo region : landsat . geometry (), // full image bounds fileFormat : 'GeoTIFF' , formatOptions : { noData : noDataVal , } }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Set a nodata value and replace masked pixels around the image edge with it. no data val = - 9999 landsat = landsat . unmask ( no data val ) task = ee . batch .
- Export . image . toAsset ({ image : band4 , description : 'imageToAssetExample' , assetId : 'exampleExport' , crs : projection . crs , crsTransform : projection . transform , region : geometry , pyramidingPolicy : { 'b4 mean' : 'mean' , 'b4 sample' : 'sample' , 'b4 max' : 'max' } }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Get band 4 from the Landsat image, copy it. band 4 = ( landsat . select ( 'B4' ) . rename ( 'b4 mean' ) . addBands ( landsat . select ( 'B4' ) . rename ( 'b4 sample' )) . addBands ( landsat . select ( 'B4' ) . rename ( 'b4 max' )) ) Export the image to an Earth Engine asset. task = ee . batch .
- Code Editor (JavaScript) // Retrieve the projection information from a band of the original image. // Call getInfo() on the projection to request a client-side object containing // the crs and transform information needed for the client-side Export function. var projection = landsat . select ( 'B2' ). projection (). getInfo (); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Retrieve the projection information from a band of the original image.

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- June 13, 2023 Earth Engine Data Catalog Feature Added MODIS/061/MOD10A1 : MOD10A1.061 Terra Snow Cover Daily Global 500m Added MODIS/061/MOD16A2 : MOD16A2.061: Terra Net Evapotranspiration 8-Day Global 500m Added MODIS/061/MYD10A1 : MYD10A1.061 Aqua Snow Cover Daily Global 500m Added USGS/NLCD RELEASES/2020 REL/NALCMS : Land Cover of North America at 30 meters, 2020 June 06, 2023 Earth Engine Data Catalog Feature Added CSIC/SPEI/2 8 (no longer available) May 30, 2023 Earth Engine Data Catalog Feature Added Switzerland/SWISSIMAGE/orthos/10cm : SWISSIMAGE 10 cm RGB imagery Added projects/ngis-cat/assets/DEA/NIDEM : Preview National Intertidal Digital Elevation Model 25m 1.0.0 May 23, 2023 Earth Engine Data Catalog Feature Added NOAA/VIIRS/001/VNP43IA1 : VNP43IA1: BRDF/Albedo Model Parameters Daily L3 Global 500m SIN Grid Added UMD/hansen/global forest change 2022 v1 10 (no longer available) May 16, 2023 Earth Engine Data Catalog Feature Added Latvia/Maamet/orthos/cir : Latvia Color InfraRed (CIR) orthophotos Added Latvia/Maamet/orthos/rgb : Latvia RGB orthophotos Added USFS/GTAC/LCMS/v2022-8 (no longer available) May 15, 2023 Earth Engine Server Feature Added support for the geostationary satellite projection (geos) for Cloud Optimized GeoTIFFs ( ee.Image.loadGeoTIFF() and the CreateAsset pathway).
- June 24, 2025 Earth Engine Data Catalog Feature Added ECMWF/NRT FORECAST/IFS/SCWV : ECMWF Near-Realtime IFS Wave (Short-Cutoff) Forecasts Added ECMWF/NRT FORECAST/IFS/WAVE : ECMWF Near-Realtime IFS Wave Forecasts Added NASA/TEMPO/HCHO L3 : TEMPO gridded HCHO vertical columns V03 Added NASA/TEMPO/HCHO L3 QA : TEMPO gridded HCHO (QA filtered) vertical columns V03 June 17, 2025 Earth Engine Data Catalog Feature Added GOOGLE/SATELLITE EMBEDDING/V1/ANNUAL : Satellite Embedding V1 Added projects/forestdatapartnership/assets/cocoa/model 2025a : Cocoa Probability model 2025a Added projects/forestdatapartnership/assets/coffee/model 2025a : Coffee Probability model 2025a Added projects/forestdatapartnership/assets/palm/model 2025a : Palm Probability model 2025a Added projects/forestdatapartnership/assets/rubber/model 2025a : Rubber Tree Probability model 2025a June 10, 2025 Earth Engine Data Catalog Feature Added projects/edf-methanesat-ee/assets/public-preview/L4area v2 : MethaneSAT L4 Area Sources Public Preview V2.0.0 June 03, 2025 Earth Engine Data Catalog Feature Added JAXA/ALOS/AW3D30/V4 1 : ALOS DSM: Global 30m v4.1 Added UCSB/CHC/CMIP6/v1 : The Climate Hazards Center (CHC) Coupled Model Intercomparison Project Phase 6 (CHC-CMIP6) Added UMD/hansen/global forest change 2024 v1 12 : Hansen Global Forest Change v1.12 (2000-2024) Added projects/landandcarbon/assets/wri gdm drivers forest loss 1km/v1 1 2001 2023 : WRI/Google DeepMind Global Drivers of Forest Loss 2001-2023 v1.1 Added projects/landandcarbon/assets/wri gdm drivers forest loss 1km/v1 2001 2022 : WRI/Google DeepMind Global Drivers of Forest Loss 2001-2022 v1.0 Added projects/landandcarbon/assets/wri gdm drivers forest loss 1km/v1 2 2001 2024 : WRI/Google DeepMind Global Drivers of Forest Loss 2001-2024 v1.2 May 27, 2025 Earth Engine Data Catalog Feature Added NASA/TEMPO/NO2 L3 QA : TEMPO gridded NO2 (QA filtered) tropospheric and stratospheric columns V03 May 13, 2025 Earth Engine Data Catalog Feature Added USGS/NLCD RELEASES/2023 REL/TCC/v2023-5 : USFS Tree Canopy Cover v2023-5 (CONUS and OCONUS) May 06, 2025 Earth Engine Data Catalog Feature Added USFS/GTAC/LCMS/v2024-10 : USFS Landscape Change Monitoring System v2024.10 (CONUS and OCONUS) April 29, 2025 Earth Engine Data Catalog Feature Added ISRIC/SoilGrids250m/v2 0 : SoilGrids250m 2.0 - Volumetric Water Content Added NASA/TEMPO/NO2 L3 : TEMPO gridded NO2 tropospheric and stratospheric columns V03 Added UMN/PGC/ArcticDEM/V4/2m mosaic : ArcticDEM Mosaic V4.1 April 22, 2025 Earth Engine JavaScript Client Library 1.5.12 Change Added the Google Drive main OAuth scope , https://www.googleapis.com/auth/drive , to the default list of scopes to use for authorization.
- April 07, 2026 Earth Engine Data Catalog Feature Added projects/openet/assets/disalexi/conus/gridmet/monthly/v2 0 : OpenET DisALEXI Monthly Evapotranspiration v2.0 Added projects/openet/assets/disalexi/conus/gridmet/monthly/v2 1 : OpenET DisALEXI Monthly Evapotranspiration v2.1 Added projects/openet/assets/eemetric/conus/gridmet/monthly/v2 0 : OpenET eeMETRIC Monthly Evapotranspiration v2.0 Added projects/openet/assets/eemetric/conus/gridmet/monthly/v2 1 : OpenET eeMETRIC Monthly Evapotranspiration v2.1 Added projects/openet/assets/ensemble/conus/gridmet/monthly/v2 0 : OpenET Ensemble Monthly Evapotranspiration v2.0 Added projects/openet/assets/ensemble/conus/gridmet/monthly/v2 1 : OpenET Ensemble Monthly Evapotranspiration v2.1 Added projects/openet/assets/geesebal/conus/gridmet/monthly/v2 0 : OpenET geeSEBAL Monthly Evapotranspiration v2.0 Added projects/openet/assets/geesebal/conus/gridmet/monthly/v2 1 : OpenET geeSEBAL Monthly Evapotranspiration v2.1 Added projects/openet/assets/ptjpl/conus/gridmet/monthly/v2 0 : OpenET PT-JPL Monthly Evapotranspiration v2.0 Added projects/openet/assets/ptjpl/conus/gridmet/monthly/v2 1 : OpenET PT-JPL Monthly Evapotranspiration v2.1 Added projects/openet/assets/sims/conus/gridmet/monthly/v2 0 : OpenET SIMS Monthly Evapotranspiration v2.0 Added projects/openet/assets/sims/conus/gridmet/monthly/v2 1 : OpenET SIMS Monthly Evapotranspiration v2.1 Added projects/openet/assets/ssebop/conus/gridmet/monthly/v2 0 : OpenET SSEBop Monthly Evapotranspiration v2.0 Added projects/openet/assets/ssebop/conus/gridmet/monthly/v2 1 : OpenET SSEBop Monthly Evapotranspiration v2.1 Added iNaturalist/MULTI SPECIES/LATEST : INaturalist Multispecies Open Range Maps March 31, 2026 Earth Engine Data Catalog Feature Added AIRBUS/SPOT 2 4 5/BRAZIL/2007 2009/MS/V1 : SPOT Multispectral Imagery 10-20m, Brazil Added AIRBUS/SPOT 2 4 5/BRAZIL/2007 2009/MS NC/V1 : SPOT Multispectral Pseudo Natural Color Imagery 10-20m, Brazil Added AIRBUS/SPOT 2 4 5/BRAZIL/2007 2009/PAN/V1 : SPOT Panchromatic Imagery 5-10m, Brazil Added AIRBUS/SPOT 2 4 5/BRAZIL/2007 2009/PMS NC/V1 : SPOT Pansharpened Pseudo Natural Color Imagery 5-10m, Brazil Added GOOGLE/BRAZIL FOREST 2008/V1/ANALYTIC : Brazil Forest Imagery Dataset 2008: Analytic Basemap Added GOOGLE/BRAZIL FOREST 2008/V1/VISUAL : Brazil Forest Imagery Dataset 2008: Visual Basemap Added USDA/SOLUS100/V0 : SOLUS: Soil properties of the conterminous United States at 100-m resolution March 30, 2026 Earth Engine Code Editor Announcement Code Editor Share Options Updated To enhance transparency and security, the options to Auto Run and Hide Code when sharing Earth Engine Code Editor script links have been removed.
- June 25, 2024 Earth Engine Data Catalog Feature Added CANADA/NFIS/NTEMS/CA FOREST AGE : Landsat-derived forest age for Canada 2019 Added LANDSAT/COMPOSITES/C02/T1 L2 32DAY BAI : Landsat Collection 2 Tier 1 Level 2 32-Day BAI Composite Added LANDSAT/COMPOSITES/C02/T1 L2 32DAY EVI : Landsat Collection 2 Tier 1 Level 2 32-Day EVI Composite Added LANDSAT/COMPOSITES/C02/T1 L2 32DAY NBR : Landsat Collection 2 Tier 1 Level 2 32-Day NBR Composite Added LANDSAT/COMPOSITES/C02/T1 L2 32DAY NDVI : Landsat Collection 2 Tier 1 Level 2 32-Day NDVI Composite Added LANDSAT/COMPOSITES/C02/T1 L2 32DAY NDWI : Landsat Collection 2 Tier 1 Level 2 32-Day NDWI Composite Added LANDSAT/COMPOSITES/C02/T1 L2 ANNUAL BAI : Landsat Collection 2 Tier 1 Level 2 Annual BAI Composite Added LANDSAT/COMPOSITES/C02/T1 L2 ANNUAL EVI : Landsat Collection 2 Tier 1 Level 2 Annual EVI Composite Added LANDSAT/COMPOSITES/C02/T1 L2 ANNUAL NBR : Landsat Collection 2 Tier 1 Level 2 Annual NBR Composite Added LANDSAT/COMPOSITES/C02/T1 L2 ANNUAL NDVI : Landsat Collection 2 Tier 1 Level 2 Annual NDVI Composite Added LANDSAT/COMPOSITES/C02/T1 L2 ANNUAL NDWI : Landsat Collection 2 Tier 1 Level 2 Annual NDWI Composite June 18, 2024 Earth Engine Data Catalog Feature Added HU BERLIN/EPFD/V2/points : European Primary Forest Dataset - Points Added HU BERLIN/EPFD/V2/polygons : European Primary Forest Dataset - Polygons Added NASA/VIIRS/002/VNP09GA : VNP09GA: VIIRS Surface Reflectance Daily 500m and 1km Added NOAA/IBTrACS/v4 : International Best Track Archive for Climate Stewardship Project June 11, 2024 Earth Engine Data Catalog Feature Added LANDSAT/COMPOSITES/C02/T1 L2 8DAY BAI : Landsat Collection 2 Tier 1 Level 2 8-Day BAI Composite Added LANDSAT/COMPOSITES/C02/T1 L2 8DAY EVI : Landsat Collection 2 Tier 1 Level 2 8-Day EVI Composite Added LANDSAT/COMPOSITES/C02/T1 L2 8DAY NBR : Landsat Collection 2 Tier 1 Level 2 8-Day NBR Composite Added LANDSAT/COMPOSITES/C02/T1 L2 8DAY NDVI : Landsat Collection 2 Tier 1 Level 2 8-Day NDVI Composite Added LANDSAT/COMPOSITES/C02/T1 L2 8DAY NDWI : Landsat Collection 2 Tier 1 Level 2 8-Day NDWI Composite June 07, 2024 Earth Engine Server Breaking Changed the way that the ee.Image.loadGeoTIFF() algorithm and COG-backed assets select lower resolution overviews if a GeoTIFF is missing pyramid levels.

### Image Predictions \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/ee-vertex-image-predictions](https://developers.google.com/earth-engine/guides/ee-vertex-image-predictions)
- Source ID: `site-docs-root-2`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Page Summary outlined flag Earth Engine's ee.Model connects to Vertex AI to send image or table data for online predictions, returning results as Earth Engine images or tables. model.predictImage() is used to perform inference on an ee.Image by sending image patches to a hosted model, with the output being an ee.Image .
- Input Options When performing inference using on a ee.Image there are a number of parameters used in the ee.Model connector.
- For example if you are computing "slope" by mapping the ee.Terrain.slope function over a collection you will need to specify the output type of "slope" in our inference inputs like so: inputTypeOverride = { "slope" : { "type" : "PixelType" , "precision" : "float" , "dimensions" : 0 , "min" : - 100.0 , "max" : 100.0 } } TIP: If you encounter the error message that a band or property "cannot be converted to a tensor," a possible solution is to use a type override to force the input to a given type. inputShapes inputShapes is a dictionary of band names and array-pixel shape.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-14 UTC."],[],[]]

