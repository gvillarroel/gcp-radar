---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T12:40:59.074Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "GLCF/GLS_WATER"
feature_slug: "glcf-gls-water"
latest_feature_date: "2016-04-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V-C3_Global"
  - "https://developers.google.com/earth-engine/datasets/catalog"
  - "https://developers.google.com/earth-engine/docs/release-notes"
keywords:
  - "glcf"
  - "gls"
  - "water"
  - "global"
  - "land"
  - "survey"
  - "inland"
  - "derived"
---

# GLCF/GLS_WATER

Product: Earth Engine Data Catalog
Coverage: LOW

## Step 02 Summary

Global Land Survey inland water data derived from Landsat imagery.

## Extended Definition

Global Land Survey inland water data derived from Landsat imagery.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V-C3_Global](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V-C3_Global)
- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)

## Supporting Pages

### "Copernicus Global Land Cover Layers: CGLS-LC100 Collection 3 \_|\_ Earth\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V-C3_Global](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V-C3_Global)
- Source ID: `site-docs-root-2`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- The Dynamic Land Cover map at 100 m resolution (CGLS-LC100) is … COPERNICUS/Landcover/100m/Proba-V-C3/Global, copernicus,eea,esa,eu,landcover,landuse-landcover,proba,probav,vito 2015-01-01T00:00:00Z/2019-12-31T23:59:59Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.5281/zenodo.3939050 https://doi.org/10.5281/zenodo.3939050 Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The Copernicus Global Land Service provides global land cover maps (CGLS-LC100) at 100m resolution from 2015 to 2019, derived from PROBA-V 100m time-series data.
- Page Summary outlined flag The Copernicus Global Land Service provides a 100m resolution global land cover map (CGLS-LC100) for 2015-2019, derived from PROBA-V time-series data.
- Can be either fresh or salt-water bodies. forest type Class Table Value Color Description 0 #282828 Unknown 1 #666000 Evergreen needle leaf 2 #009900 Evergreen broad leaf 3 #70663e Deciduous needle leaf 4 #a0dc00 Deciduous broad leaf 5 #929900 Mix of forest types Image Properties Image Properties Name Type Description discrete classification class names STRING LIST Land cover class names discrete classification class palette STRING LIST Land cover class palette discrete classification class values INT LIST Value of the land cover classification. forest type class names STRING LIST forest cover class names forest type class palette STRING LIST forest cover class palette forest type class values INT LIST forest cover class values Terms of Use Terms of Use As official product of the global component of the Copernicus Land Service, access to this land cover dataset is fully free and open to all users.
- Dataset Availability 2015-01-01T00:00:00Z–2019-12-31T23:59:59Z Dataset Producer Copernicus Earth Engine Snippet ee.ImageCollection("COPERNICUS/Landcover/100m/Proba-V-C3/Global") open in new Tags copernicus eea esa eu landcover landuse-landcover proba probav vito Description The Copernicus Global Land Service (CGLS) is earmarked as a component of the Land service to operate a multi-purpose service component that provides a series of bio-geophysical products on the status and evolution of land surface at global scale.

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- The latest version of the GIMMS NDVI dataset is named NDVI3g (third generation GIMMS NDVI from AVHRR sensors). avhrr nasa ndvi noaa vegetation vegetation-indices GLCF: Landsat Global Inland Water The Global Inland Water dataset shows inland surface water bodies, including fresh and saline lakes, rivers, and reservoirs.
- Boreal forests and tundra … glcf landsat-derived nasa surface-ground-water umd water GLDAS-2.1: Global Land Data Assimilation System NASA Global Land Data Assimilation System Version 2 (GLDAS-2) has three components: GLDAS-2.0, GLDAS-2.1, and GLDAS-2.2.
- It … landsat landsat-composite ndwi surface-ground-water usgs Landsat Global Land Survey 1975 The Global Land Survey (GLS) 1975 is a global collection of imagery from the Landsat Multispectral Scanner (MSS).
- Designed to continuously represent Earth's terrestrial surface as a proportion of basic vegetation traits, it provides a gradation of three surface cover components: percent tree cover, percent … annual geophysical global landuse-landcover modis nasa MOD44W.005 Land Water Mask Derived From MODIS and SRTM The Global Water Mask uses the SWBD (SRTM Water Body Data) in combination with MODIS 250m data to create a complete global map of surface water at 250m spatial resolution, circa 2000-2002.

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- April 26, 2016 Earth Engine Data Catalog Feature Added GLCF/GLS TCC (no longer available) Added GLCF/GLS WATER : GLCF: Landsat Global Inland Water April 12, 2016 Earth Engine Data Catalog Feature Added SKYSAT/GEN-A/PUBLIC/ORTHO/MULTISPECTRAL : Planet SkySat Public Ortho Imagery, Multispectral Added SKYSAT/GEN-A/PUBLIC/ORTHO/RGB : Planet SkySat Public Ortho Imagery, RGB April 08, 2016 Earth Engine Server Feature Added Image.reduceResolution , an algorithm to generate pixels in a (usually lower-resolution) output projection.
- January 22, 2013 Earth Engine Data Catalog Feature Added MODIS/MOD44B (no longer available) December 04, 2012 Earth Engine Data Catalog Feature Added LANDSAT/L5 L1T TOA (no longer available) Added LANDSAT/L7 L1T TOA (no longer available) November 27, 2012 Earth Engine Data Catalog Feature Added USGS/NED (no longer available) November 20, 2012 Earth Engine Data Catalog Feature Added CGIAR/SRTM90 V4 : SRTM Digital Elevation Data Version 4 March 27, 2012 Earth Engine Data Catalog Feature Added LANDSAT/MANGROVE FORESTS : Global Mangrove Forests Distribution, v1 (2000) March 13, 2012 Earth Engine Data Catalog Feature Added LANDSAT/GLS1975 : Landsat Global Land Survey 1975 Added LANDSAT/GLS1975 MOSAIC : Landsat Global Land Survey 1975 Mosaic December 20, 2011 Earth Engine Data Catalog Feature Added DG GG 2002 (no longer available) Added DG GG 2003 (no longer available) Added DG GG 2004 (no longer available) Added DG GG 2005 (no longer available) Added DG GG 2006 (no longer available) Added DG GG 2007 (no longer available) Added DG GG 2008 (no longer available) Added DG GG 2009 (no longer available) Added DG GG 2010 (no longer available) Added DG GG 2011 (no longer available) Added DG GG ANNUAL (no longer available) July 26, 2011 Earth Engine Data Catalog Feature Added WHBU/NBAR 1YEAR : MODIS 1-year Nadir BRDF-Adjusted Reflectance (NBAR) Mosaic Added WHBU/NBAR 2YEAR : MODIS 2-year Nadir BRDF-Adjusted Reflectance (NBAR) Mosaic Added WHBU/NBAR 3YEAR : MODIS 3-year Nadir BRDF-Adjusted Reflectance (NBAR) Mosaic May 17, 2011 Earth Engine Data Catalog Feature Added LANDSAT/L5 L1T ANNUAL GREENEST TOA (no longer available) Added LANDSAT/L7 L1T ANNUAL GREENEST TOA (no longer available) March 22, 2011 Earth Engine Data Catalog Feature Added LANDSAT/L5 (no longer available) Added LANDSAT/L5 L1T (no longer available) Added LANDSAT/L5 L1T 32DAY BAI (no longer available) Added LANDSAT/L5 L1T 32DAY EVI (no longer available) Added LANDSAT/L5 L1T 32DAY NBRT (no longer available) Added LANDSAT/L5 L1T 32DAY NDSI (no longer available) Added LANDSAT/L5 L1T 32DAY NDVI (no longer available) Added LANDSAT/L5 L1T 32DAY NDWI (no longer available) Added LANDSAT/L5 L1T 32DAY RAW (no longer available) Added LANDSAT/L5 L1T 32DAY TOA (no longer available) Added LANDSAT/L5 L1T 8DAY BAI (no longer available) Added LANDSAT/L5 L1T 8DAY EVI (no longer available) Added LANDSAT/L5 L1T 8DAY NBRT (no longer available) Added LANDSAT/L5 L1T 8DAY NDSI (no longer available) Added LANDSAT/L5 L1T 8DAY NDVI (no longer available) Added LANDSAT/L5 L1T 8DAY NDWI (no longer available) Added LANDSAT/L5 L1T 8DAY RAW (no longer available) Added LANDSAT/L5 L1T 8DAY TOA (no longer available) Added LANDSAT/L5 L1T ANNUAL BAI (no longer available) Added LANDSAT/L5 L1T ANNUAL EVI (no longer available) Added LANDSAT/L5 L1T ANNUAL NBRT (no longer available) Added LANDSAT/L5 L1T ANNUAL NDSI (no longer available) Added LANDSAT/L5 L1T ANNUAL NDVI (no longer available) Added LANDSAT/L5 L1T ANNUAL NDWI (no longer available) Added LANDSAT/L5 L1T ANNUAL RAW (no longer available) Added LANDSAT/L5 L1T ANNUAL TOA (no longer available) Added LANDSAT/L7 (no longer available) Added LANDSAT/L7 L1T (no longer available) Added LANDSAT/L7 L1T 32DAY BAI (no longer available) Added LANDSAT/L7 L1T 32DAY EVI (no longer available) Added LANDSAT/L7 L1T 32DAY NBRT (no longer available) Added LANDSAT/L7 L1T 32DAY NDSI (no longer available) Added LANDSAT/L7 L1T 32DAY NDVI (no longer available) Added LANDSAT/L7 L1T 32DAY NDWI (no longer available) Added LANDSAT/L7 L1T 32DAY RAW (no longer available) Added LANDSAT/L7 L1T 32DAY TOA (no longer available) Added LANDSAT/L7 L1T 8DAY BAI (no longer available) Added LANDSAT/L7 L1T 8DAY EVI (no longer available) Added LANDSAT/L7 L1T 8DAY NBRT (no longer available) Added LANDSAT/L7 L1T 8DAY NDSI (no longer available) Added LANDSAT/L7 L1T 8DAY NDVI (no longer available) Added LANDSAT/L7 L1T 8DAY NDWI (no longer available) Added LANDSAT/L7 L1T 8DAY RAW (no longer available) Added LANDSAT/L7 L1T 8DAY TOA (no longer available) Added LANDSAT/L7 L1T ANNUAL BAI (no longer available) Added LANDSAT/L7 L1T ANNUAL EVI (no longer available) Added LANDSAT/L7 L1T ANNUAL NBRT (no longer available) Added LANDSAT/L7 L1T ANNUAL NDSI (no longer available) Added LANDSAT/L7 L1T ANNUAL NDVI (no longer available) Added LANDSAT/L7 L1T ANNUAL NDWI (no longer available) Added LANDSAT/L7 L1T ANNUAL RAW (no longer available) Added LANDSAT/L7 L1T ANNUAL TOA (no longer available) Added MODIS/MCD43A2 (no longer available) Added MODIS/MCD43A4 (no longer available) Added MODIS/MCD43A4 BAI (no longer available) Added MODIS/MCD43A4 EVI (no longer available) Added MODIS/MCD43A4 NDSI (no longer available) Added MODIS/MCD43A4 NDVI (no longer available) Added MODIS/MCD43A4 NDWI (no longer available) Added MODIS/MOD09GA (no longer available) Added MODIS/MOD09GA BAI (no longer available) Added MODIS/MOD09GA EVI (no longer available) Added MODIS/MOD09GA NDSI (no longer available) Added MODIS/MOD09GA NDVI (no longer available) Added MODIS/MOD09GA NDWI (no longer available) Added MODIS/MOD09GQ (no longer available) Added MODIS/MOD11A2 (no longer available) Added SPOT/M10 MEX (no longer available) Added SPOT/PAN MEX (no longer available) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- May 01, 2018 Earth Engine Data Catalog Feature Added FAO/GAUL/2015/level0 : FAO GAUL: Global Administrative Unit Layers 2015, Country Boundaries Added FAO/GAUL/2015/level1 : FAO GAUL: Global Administrative Unit Layers 2015, First-Level Administrative Units Added FAO/GAUL/2015/level2 : FAO GAUL: Global Administrative Unit Layers 2015, Second-Level Administrative Units April 24, 2018 Earth Engine Data Catalog Feature Added AAFC/ACI : Canada AAFC Annual Crop Inventory Added GFW/GFF/V1/fishing hours : GFW (Global Fishing Watch) Daily Fishing Hours Added GFW/GFF/V1/vessel hours : GFW (Global Fishing Watch) Daily Vessel Hours Added IDAHO EPSCOR/TERRACLIMATE : TerraClimate: Monthly Climate and Climatic Water Balance for Global Terrestrial Surfaces, University of Idaho Added JAXA/ALOS/AVNIR-2/ORI : ALOS/AVNIR-2 ORI Added JAXA/ALOS/PALSAR/YEARLY/FNF : Global 3-class PALSAR-2/PALSAR Forest/Non-Forest Map Added MODIS/006/MCD64A1 (no longer available) Added MODIS/006/MOD13A1 (no longer available) Added MODIS/006/MOD16A2 (no longer available) Added MODIS/006/MOD44W : MOD44W.006 Terra Land Water Mask Derived From MODIS and SRTM Yearly Global 250m Added MODIS/006/MYD13A1 (no longer available) Added NASA/GRACE/MASS GRIDS/LAND (no longer available) Added NASA/GRACE/MASS GRIDS/MASCON (no longer available) Added NASA/GRACE/MASS GRIDS/MASCON CRI (no longer available) Added NASA/GRACE/MASS GRIDS/OCEAN (no longer available) Added NASA/GRACE/MASS GRIDS/OCEAN EOFR : GRACE Monthly Mass Grids - Ocean EOFR Added NASA USDA/HSL/SMAP soil moisture (no longer available) Added NASA USDA/HSL/soil moisture (no longer available) Added Oxford/MAP/accessibility to cities 2015 v1 0 (no longer available) Added Oxford/MAP/friction surface 2015 v1 0 (no longer available) Added RESOLVE/ECOREGIONS/2017 : RESOLVE Ecoregions 2017 Added WRI/GFW/FORMA/alerts : FORMA Alerts Added WRI/GFW/FORMA/raw output firms : FORMA Raw Output FIRMS Added WRI/GFW/FORMA/raw output ndvi : FORMA Raw Output NDVI Added WRI/GFW/FORMA/thresholds : FORMA Alert Thresholds Added WRI/GFW/FORMA/vegetation tstats : FORMA Vegetation T-Statistics Added WRI/GPPD/power plants : Global Power Plant Database April 13, 2018 Earth Engine Code Editor Fixed Fixed Cannot read property 'undefined' of undefined error.
- March 25, 2014 Earth Engine Data Catalog Feature Added LANDSAT/GLS2005 : Landsat Global Land Survey 2005, Landsat 5+7 scenes Added LANDSAT/GLS2005 L5 : Landsat Global Land Survey 2005, Landsat 5 scenes Added LANDSAT/GLS2005 L7 : Landsat Global Land Survey 2005, Landsat 7 scenes March 20, 2014 Earth Engine Server Feature Added new algorithm Image.bitwiseNot() .

