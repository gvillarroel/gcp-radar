---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.450Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "Projection.translate"
feature_slug: "projection-translate"
latest_feature_date: "2014-06-20"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multipolygon"
keywords:
  - "projection"
  - "translate"
  - "returns"
  - "translated"
---

# Projection.translate

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Returns a translated projection.

## Extended Definition

Returns a translated projection.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multipolygon](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multipolygon)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- Change Gave all API objects eq () and hash () Earth Engine Server Feature Added a few helper methods to Projection : Projection.atScale(projection, meters) Projection.crs(projection) Projection.scale(projection, x, y) Projection.transform(projection) Projection.translate(projection, x, y) Projection.wkt(projection) June 06, 2014 Earth Engine Server Change Added List.zip(other) function. exportImage() can now create TERRAIN assets when exporting to Google Maps Engine.
- Earth Engine Server Feature Added ee.Geometry.coveringGrid , which returns a collection of 1x1 rectangles that cover a geometry in a specified projection.
- May 09, 2017 Earth Engine Data Catalog Feature Added LANDSAT/LC08/C01/T1 (no longer available) Added LANDSAT/LC08/C01/T1 RT (no longer available) Added LANDSAT/LC08/C01/T1 RT TOA (no longer available) Added LANDSAT/LC08/C01/T1 TOA (no longer available) Added LANDSAT/LE07/C01/T1 RT (no longer available) Added LANDSAT/LE07/C01/T1 RT TOA (no longer available) Added MODIS/006/MOD09GA (no longer available) Added MODIS/006/MOD09GQ (no longer available) Added MODIS/006/MOD11A1 (no longer available) Added MODIS/006/MYD09GA (no longer available) Added MODIS/006/MYD09GQ (no longer available) Added MODIS/006/MYD11A1 (no longer available) Added MODIS/MOD09GA 006 BAI : MODIS Terra Daily BAI Added MODIS/MOD09GA 006 EVI : MODIS Terra Daily EVI Added MODIS/MOD09GA 006 NDSI : MODIS Terra Daily NDSI Added MODIS/MOD09GA 006 NDVI : MODIS Terra Daily NDVI Added MODIS/MOD09GA 006 NDWI : MODIS Terra Daily NDWI Added MODIS/MYD09GA 006 BAI : MODIS Aqua Daily BAI Added MODIS/MYD09GA 006 EVI : MODIS Aqua Daily EVI Added MODIS/MYD09GA 006 NDSI : MODIS Aqua Daily NDSI Added MODIS/MYD09GA 006 NDVI : MODIS Aqua Daily NDVI Added MODIS/MYD09GA 006 NDWI : MODIS Aqua Daily NDWI May 02, 2017 Earth Engine Data Catalog Feature Added EPA/Ecoregions/2013/L3 : US EPA Ecoregions (Level III) Added EPA/Ecoregions/2013/L4 : US EPA Ecoregions (Level IV) Added GLIMS/2016 (no longer available) Added NOAA/CDR/GRIDSAT-B1/V2 : NOAA CDR GRIDSAT-B1: Geostationary IR Channel Brightness Temperature Added TIGER/2010/Blocks : TIGER: US Census Blocks Added TIGER/2010/Tracts DP1 : TIGER: US Census Tracts Demographic - Profile 1 Added TIGER/2016/Roads : TIGER: US Census Roads Added USDOS/LSIB/2013 (no longer available) Added USGS/WBD/2017/HUC02 : HUC02: USGS Watershed Boundary Dataset of Regions Added USGS/WBD/2017/HUC04 : HUC04: USGS Watershed Boundary Dataset of Subregions Added USGS/WBD/2017/HUC06 : HUC06: USGS Watershed Boundary Dataset of Basins Added USGS/WBD/2017/HUC08 : HUC08: USGS Watershed Boundary Dataset of Subbasins Added USGS/WBD/2017/HUC10 : HUC10: USGS Watershed Boundary Dataset of Watersheds Added USGS/WBD/2017/HUC12 : HUC12: USGS Watershed Boundary Dataset of Subwatersheds April 25, 2017 Earth Engine Data Catalog Feature Added MODIS/055/MOD17A3 (no longer available) Added MODIS/NTSG/MOD16A2/105 : MOD16A2: MODIS Global Terrestrial Evapotranspiration 8-Day Global 1km April 18, 2017 Earth Engine Data Catalog Feature Added MODIS/006/MODOCGA : MODOCGA.006 Terra Ocean Reflectance Daily Global 1km Added MODIS/006/MYDOCGA : MYDOCGA.006 Aqua Ocean Reflectance Daily Global 1km Added NOAA/CDR/SST PATHFINDER/V53 : NOAA AVHRR Pathfinder Version 5.3 Collated Global 4km Sea Surface Temperature Added NOAA/VIIRS/001/VNP09GA (no longer available) April 11, 2017 Earth Engine Data Catalog Feature Added NOAA/CDR/ATMOS NEAR SURFACE/V2 : NOAA CDR: Ocean Near-Surface Atmospheric Properties, Version 2 Added NOAA/CDR/HEAT FLUXES/V2 : NOAA CDR: Ocean Heat Fluxes, Version 2 Added NOAA/CDR/SST WHOI/V2 : NOAA CDR WHOI: Sea Surface Temperature, Version 2 April 04, 2017 Earth Engine Data Catalog Feature Added NASA/GLDAS/V021/NOAH/G025/T3H : GLDAS-2.1: Global Land Data Assimilation System Added NASA/NEX-GDDP : NEX-GDDP: NASA Earth Exchange Global Daily Downscaled Climate Projections March 28, 2017 Earth Engine Data Catalog Feature Added NOAA/CDR/AVHRR/LAI FAPAR/V4 (no longer available) Added NOAA/CDR/AVHRR/NDVI/V4 (no longer available) Added NOAA/CDR/AVHRR/SR/V4 (no longer available) March 21, 2017 Earth Engine Data Catalog Feature Added NOAA/CDR/OISST/V2 (no longer available) Added NOAA/VIIRS/VNP09GA/001 (no longer available) March 16, 2017 Earth Engine Server Change Enable setting properties on image collection and folder assets.
- August 04, 2020 Earth Engine Data Catalog Feature Added MODIS/061/MOD08 M3 : MOD08 M3.061 Terra Atmosphere Monthly Global Product Added MODIS/061/MYD08 M3 : MYD08 M3.061 Aqua Atmosphere Monthly Global Product Added NASA/ORNL/biomass carbon density/v1 : Global Aboveground and Belowground Biomass Carbon Density Maps Added NOAA/GOES/16/MCMIPC : GOES-16 MCMIPC Series ABI Level 2 Cloud and Moisture Imagery CONUS Added NOAA/GOES/16/MCMIPF : GOES-16 MCMIPF Series ABI Level 2 Cloud and Moisture Imagery Full Disk Added NOAA/GOES/17/MCMIPC : GOES-17 MCMIPC Series ABI Level 2 Cloud and Moisture Imagery CONUS Added NOAA/GOES/17/MCMIPF : GOES-17 MCMIPF Series ABI Level 2 Cloud and Moisture Imagery Full Disk July 21, 2020 Earth Engine Data Catalog Feature Added GRIDMET/DROUGHT : GRIDMET DROUGHT: CONUS Drought Indices Added LANDFIRE/Fire/FRG/v1 2 0 : LANDFIRE FRG (Fire Regime Groups) v1.2.0 Added LANDFIRE/Fire/MFRI/v1 2 0 : LANDFIRE MFRI (Mean Fire Return Interval) v1.2.0 Added LANDFIRE/Fire/PLS/v1 2 0 : LANDFIRE PLS (Percent Low-severity Fire) v1.2.0 Added LANDFIRE/Fire/PMS/v1 2 0 : LANDFIRE PMS (Percent of Mixed-severity Fire) v1.2.0 Added LANDFIRE/Fire/PRS/v1 2 0 : LANDFIRE PRS (Percent of Replacement-severity Fire) v1.2.0 Added LANDFIRE/Fire/SClass/v1 4 0 : LANDFIRE SClass (Succession Classes) v1.4.0 Added LANDFIRE/Fire/VCC/v1 4 0 : LANDFIRE VCC (Vegetation Condition Class) v1.4.0 Added LANDFIRE/Fire/VDep/v1 4 0 : LANDFIRE VDep (Vegetation Departure) v1.4.0 Added LANDFIRE/Vegetation/BPS/v1 4 0 : LANDFIRE BPS (Biophysical Settings) v1.4.0 Added LANDFIRE/Vegetation/ESP/v1 2 0/AK : LANDFIRE ESP AK (Environmental Site Potential) v1.2.0 Added LANDFIRE/Vegetation/ESP/v1 2 0/CONUS : LANDFIRE ESP CONUS (Environmental Site Potential) v1.2.0 Added LANDFIRE/Vegetation/ESP/v1 2 0/HI : LANDFIRE ESP HI (Environmental Site Potential) v1.2.0 Added LANDFIRE/Vegetation/EVC/v1 4 0 : LANDFIRE EVC (Existing Vegetation Cover) v1.4.0 Added LANDFIRE/Vegetation/EVH/v1 4 0 : LANDFIRE EVH (Existing Vegetation Height) v1.4.0 Added LANDFIRE/Vegetation/EVT/v1 4 0 : LANDFIRE EVT (Existing Vegetation Type) v1.4.0 July 14, 2020 Earth Engine Data Catalog Feature Added ESA/CCI/FireCCI/5 1 : FireCCI51: MODIS Fire cci Burned Area Pixel Product, Version 5.1 Added JRC/GSW1 2/GlobalSurfaceWater : JRC Global Surface Water Mapping Layers, v1.2 [deprecated] Added JRC/GSW1 2/Metadata (no longer available) Added JRC/GSW1 2/MonthlyHistory (no longer available) Added JRC/GSW1 2/MonthlyRecurrence (no longer available) Added JRC/GSW1 2/YearlyHistory (no longer available) July 07, 2020 Earth Engine Server Fixed Added ee.Algorithms.ObjectType() , which returns the type of any computed object.

### "ee.Algorithms.GeometryConstructors.MultiLineString \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multilinestring)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Usage Returns ee.Algorithms.GeometryConstructors.MultiLineString(coordinates, crs , geodesic , maxError ) Geometry Argument Type Details coordinates List The list of LineStrings, or to wrap a single LineString, the list of Points or pairs of Numbers in x,y order. crs Projection, default: null The coordinate reference system of the coordinates.
- The default is the geodesic state of the inputs, or true if the inputs are numbers. maxError ErrorMargin, default: null Max error when input geometry must be reprojected to an explicitly requested result projection or geodesic state.
- It takes coordinates defining the LineStrings, and optionally, the crs (coordinate reference system), geodesic (true for curved edges, false for straight), and maxError (for reprojection errors).
- The function returns a Geometry object representing the constructed MultiLineString. coordinates can be a list of LineStrings, points or a list of number pairs in x,y order.\n"]]

### "ee.Algorithms.GeometryConstructors.MultiPolygon \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multipolygon](https://developers.google.com/earth-engine/apidocs/ee-algorithms-geometryconstructors-multipolygon)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Usage Returns ee.Algorithms.GeometryConstructors.MultiPolygon(coordinates, crs , geodesic , maxError , evenOdd ) Geometry Argument Type Details coordinates List A list of Polygons, or for one simple polygon, a list of Points or pairs of Numbers in x,y order. crs Projection, default: null The coordinate reference system of the coordinates.
- The default is the geodesic state of the inputs, or true if the inputs are numbers. maxError ErrorMargin, default: null Max error when input geometry must be reprojected to an explicitly requested result projection or geodesic state. evenOdd Boolean, default: true If true, polygon interiors will be determined by the even/odd rule, where a point is inside if it crosses an odd number of edges to reach a point at infinity.
- Optional parameters include crs for coordinate system, geodesic to determine edge curvature, maxError for reprojection precision, and evenOdd for polygon interior determination.
- The default is the projection of the inputs, where Numbers are assumed to be EPSG:4326. geodesic Boolean, default: null If false, edges are straight in the projection.

