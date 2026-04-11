---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.449Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "Projection.atScale"
feature_slug: "projection-atscale"
latest_feature_date: "2014-06-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/exporting_images"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multipolygon"
keywords:
  - "projection"
  - "atscale"
  - "returns"
  - "scaled"
  - "to"
  - "specified"
  - "meter"
  - "resolution"
---

# Projection.atScale

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Returns a projection scaled to a specified meter resolution.

## Extended Definition

Returns a projection scaled to a specified meter resolution.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/exporting_images](https://developers.google.com/earth-engine/guides/exporting_images)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multipolygon](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multipolygon)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- April 11, 2023 Earth Engine Data Catalog Feature Added MODIS/061/MCD19A2 GRANULES : MCD19A2.061: Terra & Aqua MAIAC Land Aerosol Optical Depth Daily 1km Added NOAA/VIIRS/001/VNP43IA2 : VNP43IA2: BRDF/Albedo Quality Daily L3 Global 500m SIN Grid Added WWF/HydroATLAS/v1/Basins/level03 : WWF HydroATLAS Basins Level 03 Added WWF/HydroATLAS/v1/Basins/level04 : WWF HydroATLAS Basins Level 04 Added WWF/HydroATLAS/v1/Basins/level05 : WWF HydroATLAS Basins Level 05 Added WWF/HydroATLAS/v1/Basins/level06 : WWF HydroATLAS Basins Level 06 Added WWF/HydroATLAS/v1/Basins/level07 : WWF HydroATLAS Basins Level 07 Added WWF/HydroATLAS/v1/Basins/level08 : WWF HydroATLAS Basins Level 08 Added WWF/HydroATLAS/v1/Basins/level09 : WWF HydroATLAS Basins Level 09 Added WWF/HydroATLAS/v1/Basins/level10 : WWF HydroATLAS Basins Level 10 Added WWF/HydroATLAS/v1/Basins/level11 : WWF HydroATLAS Basins Level 11 March 21, 2023 Earth Engine Data Catalog Feature Added NOAA/VIIRS/001/VNP15A2H (no longer available) March 14, 2023 Earth Engine Data Catalog Feature Added NASA/GDDP-CMIP6 : NEX-GDDP-CMIP6: NASA Earth Exchange Global Daily Downscaled Climate Projections March 09, 2023 Earth Engine Server Change Changed the default BIGTIFF parameter in the GeoTIFF image export options from IF SAFER to YES , which always generates a BigTiff unless the BIGTIFF parameter is overridden in the formatOptions dictionary parameter.
- Change Gave all API objects eq () and hash () Earth Engine Server Feature Added a few helper methods to Projection : Projection.atScale(projection, meters) Projection.crs(projection) Projection.scale(projection, x, y) Projection.transform(projection) Projection.translate(projection, x, y) Projection.wkt(projection) June 06, 2014 Earth Engine Server Change Added List.zip(other) function. exportImage() can now create TERRAIN assets when exporting to Google Maps Engine.
- May 09, 2017 Earth Engine Data Catalog Feature Added LANDSAT/LC08/C01/T1 (no longer available) Added LANDSAT/LC08/C01/T1 RT (no longer available) Added LANDSAT/LC08/C01/T1 RT TOA (no longer available) Added LANDSAT/LC08/C01/T1 TOA (no longer available) Added LANDSAT/LE07/C01/T1 RT (no longer available) Added LANDSAT/LE07/C01/T1 RT TOA (no longer available) Added MODIS/006/MOD09GA (no longer available) Added MODIS/006/MOD09GQ (no longer available) Added MODIS/006/MOD11A1 (no longer available) Added MODIS/006/MYD09GA (no longer available) Added MODIS/006/MYD09GQ (no longer available) Added MODIS/006/MYD11A1 (no longer available) Added MODIS/MOD09GA 006 BAI : MODIS Terra Daily BAI Added MODIS/MOD09GA 006 EVI : MODIS Terra Daily EVI Added MODIS/MOD09GA 006 NDSI : MODIS Terra Daily NDSI Added MODIS/MOD09GA 006 NDVI : MODIS Terra Daily NDVI Added MODIS/MOD09GA 006 NDWI : MODIS Terra Daily NDWI Added MODIS/MYD09GA 006 BAI : MODIS Aqua Daily BAI Added MODIS/MYD09GA 006 EVI : MODIS Aqua Daily EVI Added MODIS/MYD09GA 006 NDSI : MODIS Aqua Daily NDSI Added MODIS/MYD09GA 006 NDVI : MODIS Aqua Daily NDVI Added MODIS/MYD09GA 006 NDWI : MODIS Aqua Daily NDWI May 02, 2017 Earth Engine Data Catalog Feature Added EPA/Ecoregions/2013/L3 : US EPA Ecoregions (Level III) Added EPA/Ecoregions/2013/L4 : US EPA Ecoregions (Level IV) Added GLIMS/2016 (no longer available) Added NOAA/CDR/GRIDSAT-B1/V2 : NOAA CDR GRIDSAT-B1: Geostationary IR Channel Brightness Temperature Added TIGER/2010/Blocks : TIGER: US Census Blocks Added TIGER/2010/Tracts DP1 : TIGER: US Census Tracts Demographic - Profile 1 Added TIGER/2016/Roads : TIGER: US Census Roads Added USDOS/LSIB/2013 (no longer available) Added USGS/WBD/2017/HUC02 : HUC02: USGS Watershed Boundary Dataset of Regions Added USGS/WBD/2017/HUC04 : HUC04: USGS Watershed Boundary Dataset of Subregions Added USGS/WBD/2017/HUC06 : HUC06: USGS Watershed Boundary Dataset of Basins Added USGS/WBD/2017/HUC08 : HUC08: USGS Watershed Boundary Dataset of Subbasins Added USGS/WBD/2017/HUC10 : HUC10: USGS Watershed Boundary Dataset of Watersheds Added USGS/WBD/2017/HUC12 : HUC12: USGS Watershed Boundary Dataset of Subwatersheds April 25, 2017 Earth Engine Data Catalog Feature Added MODIS/055/MOD17A3 (no longer available) Added MODIS/NTSG/MOD16A2/105 : MOD16A2: MODIS Global Terrestrial Evapotranspiration 8-Day Global 1km April 18, 2017 Earth Engine Data Catalog Feature Added MODIS/006/MODOCGA : MODOCGA.006 Terra Ocean Reflectance Daily Global 1km Added MODIS/006/MYDOCGA : MYDOCGA.006 Aqua Ocean Reflectance Daily Global 1km Added NOAA/CDR/SST PATHFINDER/V53 : NOAA AVHRR Pathfinder Version 5.3 Collated Global 4km Sea Surface Temperature Added NOAA/VIIRS/001/VNP09GA (no longer available) April 11, 2017 Earth Engine Data Catalog Feature Added NOAA/CDR/ATMOS NEAR SURFACE/V2 : NOAA CDR: Ocean Near-Surface Atmospheric Properties, Version 2 Added NOAA/CDR/HEAT FLUXES/V2 : NOAA CDR: Ocean Heat Fluxes, Version 2 Added NOAA/CDR/SST WHOI/V2 : NOAA CDR WHOI: Sea Surface Temperature, Version 2 April 04, 2017 Earth Engine Data Catalog Feature Added NASA/GLDAS/V021/NOAH/G025/T3H : GLDAS-2.1: Global Land Data Assimilation System Added NASA/NEX-GDDP : NEX-GDDP: NASA Earth Exchange Global Daily Downscaled Climate Projections March 28, 2017 Earth Engine Data Catalog Feature Added NOAA/CDR/AVHRR/LAI FAPAR/V4 (no longer available) Added NOAA/CDR/AVHRR/NDVI/V4 (no longer available) Added NOAA/CDR/AVHRR/SR/V4 (no longer available) March 21, 2017 Earth Engine Data Catalog Feature Added NOAA/CDR/OISST/V2 (no longer available) Added NOAA/VIIRS/VNP09GA/001 (no longer available) March 16, 2017 Earth Engine Server Change Enable setting properties on image collection and folder assets.
- March 05, 2024 Earth Engine Data Catalog Feature Added GOOGLE/AirView/California Unified 2015 2019 : Google Street View Air Quality: High Resolution Air Pollution Mapping in California Added USGS/NLCD RELEASES/2023 REL/RCMAP/V6/COVER : RCMAP Rangeland Component Timeseries (1985-2023), v06 Added USGS/NLCD RELEASES/2023 REL/RCMAP/V6/TRENDS : RCMAP Rangeland Trends for Component Timeseries (1985-2023), v06 Added USGS/NLCD RELEASES/2023 REL/RCMAP/V6/TRENDS YEAR : RCMAP Rangeland Trends Year for Component Timeseries (1985-2023), v06 February 27, 2024 Earth Engine Data Catalog Feature Added GLIMS/20230607 : GLIMS 2023: Global Land Ice Measurements From Space February 20, 2024 Earth Engine Data Catalog Feature Added NASA/LANCE/NOAA20 VIIRS/C2 : VJ114IMGTDL NRT Daily Raster: VIIRS (NOAA-20) Band 375m Active Fire Added NASA/LANCE/SNPP VIIRS/C2 : VNP14IMGTDL NRT Daily Raster: VIIRS (S-NPP) Band 375m Active Fire Added NASA/SMAP/SPL3SMP E/006 : SPL3SMP E.006 SMAP L3 Radiometer Global Daily 9 km Soil Moisture Added NOAA/VIIRS/DNB/ANNUAL V22 : VIIRS Nighttime Day/Night Annual Band Composites V2.2 February 13, 2024 Earth Engine Data Catalog Feature Added EDF/MethaneSAT/MethaneAIR/methaneair-L4area-2021 (no longer available) Added EDF/MethaneSAT/MethaneAIR/methaneair-L4point-2021 (no longer available) Added EDF/OGIM/OGIM v2-4 RF06 RF08 (no longer available) February 06, 2024 Earth Engine Data Catalog Feature Added UK/EA/ENGLAND 1M TERRAIN/2022 : England 1m Composite DTM/DSM (Environment Agency) January 31, 2024 Earth Engine JavaScript Client Library 0.1.388 Change Migrated the authorization workflow in the JavaScript library from the Google API Client Library for JavaScript to Google Identity Services .

### Exporting Images \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/exporting_images](https://developers.google.com/earth-engine/guides/exporting_images)
- Source ID: `site-docs-root-2`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Export . image . toAsset ( image = band 4 , description = 'imageToAssetExample' , assetId = 'projects/your-project/assets/exampleExport' , crs = projection [ 'crs' ], crsTransform = projection [ 'transform' ], region = geometry , pyramidingPolicy = { 'b4 mean' : 'mean' , 'b4 sample' : 'sample' , 'b4 max' : 'max' , }, ) task . start () You can provide a default pyramiding policy for every band that isn't explicitly specified by using the '.default' key.
- Call getInfo() on the projection to request a client-side object containing the crs and transform information needed for the client-side Export function. projection = landsat . select ( 'B2' ) . projection () . getInfo () Warning: The scale parameter can be subtly misleading.
- For example: Code Editor (JavaScript) // Set a nodata value and replace masked pixels around the image edge with it. var noDataVal = - 9999 ; landsat = landsat . unmask ( noDataVal ); Export . image . toDrive ({ image : landsat , description : 'imageNoDataExample' , crs : projection . crs , scale : 2000 , // large scale for minimal demo region : landsat . geometry (), // full image bounds fileFormat : 'GeoTIFF' , formatOptions : { noData : noDataVal , } }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Set a nodata value and replace masked pixels around the image edge with it. no data val = - 9999 landsat = landsat . unmask ( no data val ) task = ee . batch .
- Export . image . toAsset ({ image : band4 , description : 'imageToAssetExample' , assetId : 'exampleExport' , crs : projection . crs , crsTransform : projection . transform , region : geometry , pyramidingPolicy : { 'b4 mean' : 'mean' , 'b4 sample' : 'sample' , 'b4 max' : 'max' } }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Get band 4 from the Landsat image, copy it. band 4 = ( landsat . select ( 'B4' ) . rename ( 'b4 mean' ) . addBands ( landsat . select ( 'B4' ) . rename ( 'b4 sample' )) . addBands ( landsat . select ( 'B4' ) . rename ( 'b4 max' )) ) Export the image to an Earth Engine asset. task = ee . batch .

### "ee.Algorithms.GeometryConstructors.MultiPolygon \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multipolygon](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multipolygon)
- Source ID: `site-docs-reference`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- Usage Returns ee.Algorithms.GeometryConstructors.MultiPolygon(coordinates, crs , geodesic , maxError , evenOdd ) Geometry Argument Type Details coordinates List A list of Polygons, or for one simple polygon, a list of Points or pairs of Numbers in x,y order. crs Projection, default: null The coordinate reference system of the coordinates.
- Optional parameters include crs for coordinate system, geodesic to determine edge curvature, maxError for reprojection precision, and evenOdd for polygon interior determination.
- The default is the geodesic state of the inputs, or true if the inputs are numbers. maxError ErrorMargin, default: null Max error when input geometry must be reprojected to an explicitly requested result projection or geodesic state. evenOdd Boolean, default: true If true, polygon interiors will be determined by the even/odd rule, where a point is inside if it crosses an odd number of edges to reach a point at infinity.
- The default is the projection of the inputs, where Numbers are assumed to be EPSG:4326. geodesic Boolean, default: null If false, edges are straight in the projection.

