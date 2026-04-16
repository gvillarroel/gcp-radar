---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.204Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "NASA/OCEANDATA/MODIS-Terra/L3SMI"
feature_slug: "nasa-oceandata-modis-terra-l3smi"
latest_feature_date: "2017-06-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/NASA_OCEANDATA_MODIS-Terra_L3SMI"
  - "https://developers.google.com/earth-engine/datasets/catalog"
  - "https://developers.google.com/earth-engine/datasets/tags/temperature"
keywords:
  - "nasa"
  - "oceandata"
  - "modis"
  - "terra"
  - "l3smi"
  - "standard"
  - "mapped"
  - "image"
---

# NASA/OCEANDATA/MODIS-Terra/L3SMI

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

A standard mapped image MODIS Terra ocean color dataset.

## Extended Definition

A standard mapped image MODIS Terra ocean color dataset.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/NASA_OCEANDATA_MODIS-Terra_L3SMI](https://developers.google.com/earth-engine/datasets/catalog/NASA_OCEANDATA_MODIS-Terra_L3SMI)
- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- [https://developers.google.com/earth-engine/datasets/tags/temperature](https://developers.google.com/earth-engine/datasets/tags/temperature)

## Supporting Pages

### Ocean Color SMI: Standard Mapped Image MODIS Terra Data | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/NASA_OCEANDATA_MODIS-Terra_L3SMI](https://developers.google.com/earth-engine/datasets/catalog/NASA_OCEANDATA_MODIS-Terra_L3SMI)
- Source ID: `feature-recovery-direct-http`
- Final score: 423
- Re-rank relevance: N/A

Evidence snippets:
- ImageCollection ( 'NASA/OCEANDATA/MODIS-Terra/L3SMI' ) . filterDate ( '2016-01-01' , '2016-01-31' ); var remoteSensingReflectance = dataset . select ([ 'Rrs_645' , 'Rrs_555' , 'Rrs_443' ]); var remoteSensingReflectanceVis = { min : 0.0 , max : 0.02 , }; Map . setCenter ( - 52.12 , - 46.13 , 4 ); Map . addLayer ( remoteSensingReflectance , remoteSensingReflectanceVis , 'Remote Sensing Reflectance' ); Open in Code Editor Ocean Color SMI: Standard Mapped Image MODIS Terra Data This level 3 product includes ocean color and satellite ocean biology data produced or collected under EOSDIS.
- Dataset Availability 2000-02-24T00:05:01Z–2022-02-28T21:00:01Z Dataset Producer NASA OB.DAAC at NASA Goddard Space Flight Center Earth Engine Snippet ee.ImageCollection("NASA/OCEANDATA/MODIS-Terra/L3SMI") open_in_new Cadence 1 Day Tags biology chlorophyll modis nasa ocean oceandata oceans reflectance sst temperature weather Description This level 3 product includes ocean color and satellite ocean biology data produced or collected under EOSDIS .
- The dataset, accessible via Earth Engine with the snippet `ee.ImageCollection(\"NASA/OCEANDATA/MODIS-Terra/L3SMI\")`, includes information on chlorophyll, fluorescence line height, particulate organic carbon, sea surface temperature, and remote sensing reflectance across multiple wavelengths.
- This dataset may be used for studying the biology and hydrology of coastal zones, changes in the diversity and geographical distribution of coastal marine habitats, biogeochemical fluxes and their influence in Earth's oceans … NASA/OCEANDATA/MODIS-Terra/L3SMI, biology,chlorophyll,modis,nasa,ocean,oceandata,oceans,reflectance,sst,temperature,weather 2000-02-24T00:05:01Z/2022-02-28T21:00:01Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.5067/GHMDT-2PJ19 https://doi.org/10.5067/GHMDT-2PJ19 Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The NASA OB.DAAC provides the MODIS-Terra Level 3 ocean color and satellite biology dataset, available from February 24, 2000, to February 28, 2022, on a daily cadence.

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- This dataset may be used for studying the biology and hydrology of coastal zones, changes in the diversity and geographical distribution of coastal marine habitats, biogeochemical fluxes and … biology chlorophyll modis nasa ocean oceandata Ocean Color SMI: Standard Mapped Image MODIS Terra Data This level 3 product includes ocean color and satellite ocean biology data produced or collected under EOSDIS.
- This dataset may be used for studying the biology and hydrology of coastal zones, changes in the diversity and geographical distribution of coastal marine habitats, biogeochemical fluxes and … biology chlorophyll modis nasa ocean oceandata Ocean Color SMI: Standard Mapped Image SeaWiFS Data This level 3 product includes ocean color and satellite ocean biology data produced or collected under EOSDIS.
- Along with the seven reflectance bands is a quality layer and four observation … 8-day global modis nasa satellite-imagery sr MOD09CMG.061 Terra Surface Reflectance Daily L3 Global 0.05 Deg CMG The MOD09CMG Version 6.1 product provides an estimate of the surface spectral reflectance of Terra Moderate Resolution Imaging Spectroradiometer (MODIS) Bands 1 through 7, resampled to 5600 meter pixel resolution and corrected for atmospheric conditions such as gasses, aerosols, and Rayleigh scattering.
- MOD09GQ version 6.1 provides bands 1 and … daily global modis nasa satellite-imagery sr MOD09Q1.061 Terra Surface Reflectance 8-Day Global 250m The MOD09Q1 product provides an estimate of the surface spectral reflectance of bands 1 and 2 at 250m resolution and corrected for atmospheric conditions such as gasses, aerosols, and Rayleigh scattering.

### "Datasets tagged temperature in Earth Engine \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/tags/temperature](https://developers.google.com/earth-engine/datasets/tags/temperature)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- This dataset may be used for studying the biology and hydrology of coastal zones, changes in the diversity and geographical distribution of coastal marine habitats, biogeochemical fluxes and … biology chlorophyll modis nasa ocean oceandata Ocean Color SMI: Standard Mapped Image MODIS Terra Data This level 3 product includes ocean color and satellite ocean biology data produced or collected under EOSDIS.
- This dataset may be used for studying the biology and hydrology of coastal zones, changes in the diversity and geographical distribution of coastal marine habitats, biogeochemical fluxes and … biology chlorophyll modis nasa ocean oceandata Ocean Color SMI: Standard Mapped Image SeaWiFS Data This level 3 product includes ocean color and satellite ocean biology data produced or collected under EOSDIS.
- These data have been fitted to a 0.1 x 0.1 equal angle-grid with both ascending and … atmospheric avhrr brightness cdr climate cloud Ocean Color SMI: Standard Mapped Image MODIS Aqua Data This level 3 product includes ocean color and satellite ocean biology data produced or collected under EOSDIS.
- This dataset may be used for studying the biology and hydrology of coastal zones, changes in the diversity and geographical distribution of coastal marine habitats, biogeochemical fluxes and … biology chlorophyll nasa ocean oceandata oceans PRISM Daily Spatial Climate Dataset ANd The PRISM daily and monthly datasets are gridded climate datasets for the conterminous United States, produced by the PRISM Climate Group at Oregon State University.

