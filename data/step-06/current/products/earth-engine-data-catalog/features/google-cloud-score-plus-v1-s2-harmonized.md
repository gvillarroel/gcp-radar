---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:19.529Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "GOOGLE/CLOUD_SCORE_PLUS/V1/S2_HARMONIZED"
feature_slug: "google-cloud-score-plus-v1-s2-harmonized"
latest_feature_date: "2023-10-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/GOOGLE_CLOUD_SCORE_PLUS_V1_S2_HARMONIZED"
  - "https://developers.google.com/earth-engine/datasets/catalog"
  - "https://developers.google.com/earth-engine/datasets/tags/satellite-imagery"
keywords:
  - "score"
  - "plus"
  - "v1"
  - "s2"
  - "harmonized"
  - "provides"
  - "quality"
  - "scoring"
---

# GOOGLE/CLOUD_SCORE_PLUS/V1/S2_HARMONIZED

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

Cloud Score+ S2_HARMONIZED V1 provides cloud quality scoring for Sentinel-2 harmonized imagery.

## Extended Definition

Cloud Score+ S2_HARMONIZED V1 provides cloud quality scoring for Sentinel-2 harmonized imagery.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/GOOGLE_CLOUD_SCORE_PLUS_V1_S2_HARMONIZED](https://developers.google.com/earth-engine/datasets/catalog/GOOGLE_CLOUD_SCORE_PLUS_V1_S2_HARMONIZED)
- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- [https://developers.google.com/earth-engine/datasets/tags/satellite-imagery](https://developers.google.com/earth-engine/datasets/tags/satellite-imagery)

## Supporting Pages

### Cloud Score+ S2_HARMONIZED V1 | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/GOOGLE_CLOUD_SCORE_PLUS_V1_S2_HARMONIZED](https://developers.google.com/earth-engine/datasets/catalog/GOOGLE_CLOUD_SCORE_PLUS_V1_S2_HARMONIZED)
- Source ID: `feature-recovery-direct-http`
- Final score: 565
- Re-rank relevance: N/A

Evidence snippets:
- The Cloud Score+ S2_HARMONIZED dataset is being operationally produced from the harmonized Sentinel-2 L1C collection, and Cloud Score+ outputs can be used to identify relatively clear pixels and effectively remove clouds and cloud shadows from L1C … GOOGLE/CLOUD_SCORE_PLUS/V1/S2_HARMONIZED, cloud,google,satellite-imagery,sentinel2-derived 2015-06-27T00:00:00Z/2026-04-14T07:51:19.020000Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The Cloud Score+ S2_HARMONIZED dataset, provided by Google Earth Engine, assesses the quality of satellite imagery from 2015-06-27 to 2025-02-23.
- Dataset Availability 2015-06-27T00:00:00Z–2026-04-14T07:51:19.020000Z Dataset Producer Google Earth Engine Earth Engine Snippet ee.ImageCollection("GOOGLE/CLOUD_SCORE_PLUS/V1/S2_HARMONIZED") open_in_new Tags cloud google satellite-imagery sentinel2-derived Description Cloud Score+ is a quality assessment (QA) processor for medium-to-high resolution optical satellite imagery.
- ImageCollection ( 'GOOGLE/CLOUD_SCORE_PLUS/V1/S2_HARMONIZED' ); // Region of interest. var ROI = ee .
- Point ( - 119.9087 , 37.4159 ); // Use 'cs' or 'cs_cdf', depending on your use case; see docs for guidance. var QA_BAND = 'cs_cdf' ; // The threshold for masking; values between 0.50 and 0.65 generally work well. // Higher values will remove thin clouds, haze & cirrus shadows. var CLEAR_THRESHOLD = 0.60 ; // Make a clear median composite. var composite = s2 . filterBounds ( ROI ) . filterDate ( '2023-01-01' , '2023-02-01' ) . linkCollection ( csPlus , [ QA_BAND ]) . map ( function ( img ) { return img . updateMask ( img . select ( QA_BAND ). gte ( CLEAR_THRESHOLD )); }) . median (); // Sentinel-2 visualization parameters. var s2Viz = { bands : [ 'B4' , 'B3' , 'B2' ], min : 0 , max : 2500 }; Map . addLayer ( composite , s2Viz , 'median composite' ); Map . centerObject ( ROI , 11 ); Open in Code Editor Cloud Score+ S2_HARMONIZED V1 Cloud Score+ is a quality assessment (QA) processor for medium-to-high resolution optical satellite imagery.

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- The CDEM is comprised of multiple DEMs with … canada dem elevation elevation-topography geophysical topography Cloud Score+ S2 HARMONIZED V1 Cloud Score+ is a quality assessment (QA) processor for medium-to-high resolution optical satellite imagery.
- Total emissions for the survey … atmosphere climate edf emissions ghg methane MethaneAIR L4 Point Sources V1.1.0 This dataset provides data for high-emitting methane point source detections (kg/hr) over 13 oil and gas or coal extraction areas from Colorado, New Mexico, and Texas in the west to Pennsylvania, Ohio, and West Virginia in the east, plus three urban areas (New York City, … atmosphere climate edf edf-methanesat-ee emissions ghg MethaneAIR L4 Point Sources v1 This dataset provides data for high-emitting methane point source detections (kg/hr) over 13 oil and gas or coal extraction areas from Colorado, New Mexico, and Texas in the west to Pennsylvania, Ohio, and West Virginia in the east, plus three urban areas (New York City, … atmosphere climate edf emissions ghg methane MethaneSAT L3 Concentration Public Preview V1.0.0 This early "Public Preview" dataset provides geospatial data for the column-averaged dry-air mole fraction of methane in the atmosphere, "XCH4", retrieved from measurements by the MethaneSAT imaging spectrometer.
- The dataset consists of measurements collected using four Google Street View vehicles equipped with the Aclima … air-quality atmosphere nitrogen-dioxide pollution table Greenland DEM - Greenland Mapping Project (GIMP) This Digital Elevation Model (DEM) is constructed from a combination of ASTER and SPOT-5 DEM's for the ice sheet periphery and margin (i.e. below the equilbrium line elevation) south of approximately 82.5°N and AVHRR photoclinometry in the ice sheet interior and far north (Scambos and … arctic elevation-topography gimp greenland nasa polar Greenland Ice & Ocean Mask - Greenland Mapping Project (GIMP) This dataset provides complete land ice and ocean classification masks at 15 m for the Greenland ice sheet.
- This dataset provides a high quality Climate Data Record (CDR) of global infrared measurements from geostationary satellites. … brightness cdr climate infrared noaa reflectance NOAA CDR OISST v02r01: Optimum Interpolation Sea Surface Temperature The NOAA 1/4 degree daily Optimum Interpolation Sea Surface Temperature (OISST) provides complete ocean temperature fields constructed by combining bias-adjusted observations from different platforms (satellite, ships, buoys) on a regular global grid, with gaps filled in by interpolation.

### "Datasets tagged satellite-imagery in Earth Engine \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/tags/satellite-imagery](https://developers.google.com/earth-engine/datasets/tags/satellite-imagery)
- Source ID: `site-docs-root-3`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- It serves as a high-resolution alternative to … brazil deforestation forest-code google rgb satellite-imagery Cloud Score+ S2 HARMONIZED V1 Cloud Score+ is a quality assessment (QA) processor for medium-to-high resolution optical satellite imagery.
- The Operational Land Imager (OLI) is housed aboard the joint NASA/USGS Landsat 8 and Landsat 9 satellites, while the Multi-Spectral … landsat nasa satellite-imagery sentinel usgs HLSS30: HLS Sentinel-2 Multi-spectral Instrument Surface Reflectance Daily Global 30m The Harmonized Landsat Sentinel-2 (HLS) project provides consistent surface reflectance data from the Operational Land Imager (OLI) aboard the joint NASA/USGS Landsat 8 satellite and the Multi-Spectral Instrument (MSI) aboard Europe's Copernicus Sentinel-2A satellites.
- Along with the seven reflectance bands is a quality layer and four observation … 8-day global modis nasa satellite-imagery sr MOD09CMG.061 Terra Surface Reflectance Daily L3 Global 0.05 Deg CMG The MOD09CMG Version 6.1 product provides an estimate of the surface spectral reflectance of Terra Moderate Resolution Imaging Spectroradiometer (MODIS) Bands 1 through 7, resampled to 5600 meter pixel resolution and corrected for atmospheric conditions such as gasses, aerosols, and Rayleigh scattering.
- Along with the seven reflectance bands is a quality layer and four observation … 8-day aqua global modis nasa satellite-imagery MYD09CMG.061 Aqua Surface Reflectance Daily L3 Global 0.05 Deg CMG The MYD09CMG Version 6.1 product provides an estimate of the surface spectral reflectance of Aqua Moderate Resolution Imaging Spectroradiometer (MODIS) Bands 1 through 7, resampled to 5600 meter pixel resolution and corrected for atmospheric conditions such as gasses, aerosols, and Rayleigh scattering.

