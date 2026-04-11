---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T12:40:58.423Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "EMIT L1B Radiance and Geolocation Data"
feature_slug: "emit-l1b-radiance-and-geolocation-data"
latest_feature_date: "2024-07-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/datasets/tags/landuse-landcover"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-landsat-calibratedradiance"
  - "https://developers.google.com/earth-engine/datasets/catalog"
keywords:
  - "emit"
  - "l1b"
  - "radiance"
  - "and"
  - "geolocation"
  - "an"
  - "level"
  - "1b"
---

# EMIT L1B Radiance and Geolocation Data

Product: Earth Engine Data Catalog
Coverage: LOW

## Step 02 Summary

An EMIT Level 1B at-sensor calibrated radiance and geolocation dataset at 60 m resolution.

## Extended Definition

An EMIT Level 1B at-sensor calibrated radiance and geolocation dataset at 60 m resolution.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/datasets/tags/landuse-landcover](https://developers.google.com/earth-engine/datasets/tags/landuse-landcover)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-landsat-calibratedradiance](https://developers.google.com/earth-engine/apidocs/ee-algorithms-landsat-calibratedradiance)
- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)

## Supporting Pages

### "Datasets tagged landuse-landcover in Earth Engine \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/tags/landuse-landcover](https://developers.google.com/earth-engine/datasets/tags/landuse-landcover)
- Source ID: `site-docs-root-3`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Produced by the Land & Carbon Lab Global Pasture Watch initiative, the mapped grassland extent includes any land cover type, which contains at least 30% of dry … global global-pasture-watch land landcover landuse landuse-landcover GlobCover: Global Land Cover Map GlobCover 2009 is a global land cover map based on ENVISAT's Medium Resolution Imaging Spectrometer (MERIS) Level 1B data acquired in full resolution mode with a spatial resolution of approximately 300 meters. esa landcover landuse-landcover Global map of Local Climate Zones, latest version Since their introduction in 2012, Local Climate Zones (LCZs) emerged as a new standard for characterizing urban landscapes, providing a holistic classification approach that takes into account micro-scale land-cover and associated physical properties.
- The MCD12Q2 Version 6.1 data product is derived from time series of the 2-band Enhanced Vegetation Index (EVI2) … evi global landuse-landcover modis onset-greenness phenology MOD44B.061 Terra Vegetation Continuous Fields Yearly Global 250m The Terra MODIS Vegetation Continuous Fields (VCF) product is a sub-pixel-level representation of surface vegetation cover estimates globally.
- The RCMAP product suite consists of ten fractional components: annual herbaceous, bare ground, herbaceous, litter, non-sagebrush shrub, perennial herbaceous, sagebrush, … climate-change disturbance landsat-derived landuse-landcover nlcd rangeland SBTN Natural Lands Map v1 The SBTN Natural Lands Map v1 is a 2020 baseline map of natural and non-natural land covers intended for use by companies setting science-based targets for nature, specifically the SBTN Land target #1: no conversion of natural ecosystems. "Natural" and "non-natural" definitions were adapted from … ecosystems landcover landuse-landcover wri SBTN Natural Lands Map v1.1 The SBTN Natural Lands Map v1.1 is a 2020 baseline map of natural and non-natural land covers intended for use by companies setting science-based targets for nature, specifically the SBTN Land target #1: no conversion of natural ecosystems. "Natural" and "non-natural" definitions were adapted from … ecosystems landcover landuse-landcover wri TUBerlin/BigEarthNet/v1 BigEarthNet is a new large-scale Sentinel-2 benchmark archive, consisting of 590,326 Sentinel-2 image patches.
- LUCAS collects information on land cover and … eu jrc landcover landuse landuse-landcover lucas Land Cover of North America at 30 meters, 2020 The 2020 North American Land Cover 30-meter dataset was produced as part of the North American Land Change Monitoring System (NALCMS), a trilateral effort between Natural Resources Canada, the United States Geological Survey, and three Mexican organizations including the National Institute of Statistics and Geography … landcover landsat landuse-landcover nlcd reflectance MCD12C1.061 MODIS Land Cover Type Yearly Global 0.05 Deg CMG The Terra and Aqua combined Moderate Resolution Imaging Spectroradiometer (MODIS) Land Cover Climate Modeling Grid (CMG) (MCD12C1) Version 6.1 data product provides a spatially aggregated and reprojected version of the tiled MCD12Q1 Version 6.1 data product.

### "ee.Algorithms.Landsat.calibratedRadiance \_|\_ Google Earth Engine \_|\_\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-landsat-calibratedradiance](https://developers.google.com/earth-engine/apidocs/ee-algorithms-landsat-calibratedradiance)
- Source ID: `site-docs-reference-2`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Calibrates each band of an image by applying linear transformation with slope RADIANCE MULT BAND N and y-intercept RADIANCE ADD BAND N ; these values are extracted from the image metadata.
- Home Products Google Earth Engine Reference Send feedback ee.Algorithms.Landsat.calibratedRadiance Stay organized with collections Save and categorize content based on your preferences.
- Usage Returns ee.Algorithms.Landsat.calibratedRadiance(image) Image Argument Type Details image Image The input Landsat image.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2023-10-06 UTC."],[],[]]

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- This ancillary product, essential for understanding plant water needs and stress, is created through a data fusion process that combines Visible … albedo land ndvi plant-productivity EMIT L1B At-Sensor Calibrated Radiance and Geolocation Data 60 m The EMIT Project is part of the Earth Venture-Instrument (EV-I) Program directed by the Program Director of the NASA Earth Science Division (ESD).
- Completed in late 1996, GTOPO30 was developed over a three-year period through … dem elevation elevation-topography geophysical nasa topography GlobCover: Global Land Cover Map GlobCover 2009 is a global land cover map based on ENVISAT's Medium Resolution Imaging Spectrometer (MERIS) Level 1B data acquired in full resolution mode with a spatial resolution of approximately 300 meters. esa landcover landuse-landcover GlobFire Daily Fire Event Detection Based on MCD64A1 Fire boundaries based on the MODIS dataset MCD64A1.
- The map uses five classifications: abnormally dry (D0), showing areas that may be going into or are coming out of drought, and four levels of drought: … community-dataset drought noaa precipitation sat-io usda VIIRS Nighttime Day/Night Annual Band Composites V2.1 Annual global VIIRS nighttime lights dataset is a time series produced from monthly cloud-free average radiance grids spanning 2013 to 2021.
- EMIT measures radiance … atmosphere daily emit methane nasa Easement: USGS GAP PAD-US v2.0 PAD-US is America's official national inventory of U.S. terrestrial and marine protected areas that are dedicated to the preservation of biological diversity and to other natural, recreation and cultural uses, managed for these purposes through legal or other effective means.

