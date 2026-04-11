---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T12:40:59.164Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "MODIS/MYD13Q1"
feature_slug: "modis-myd13q1"
latest_feature_date: "2013-08-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/modis"
  - "https://developers.google.com/earth-engine/datasets/tags/vegetation-indices"
  - "https://developers.google.com/earth-engine/datasets/tags/plant-productivity"
keywords:
  - "modis"
  - "myd13q1"
  - "aqua"
  - "vegetation"
  - "index"
  - "product"
---

# MODIS/MYD13Q1

Product: Earth Engine Data Catalog
Coverage: LOW

## Step 02 Summary

A MODIS Aqua vegetation index product.

## Extended Definition

A MODIS Aqua vegetation index product.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)
- [https://developers.google.com/earth-engine/datasets/tags/vegetation-indices](https://developers.google.com/earth-engine/datasets/tags/vegetation-indices)
- [https://developers.google.com/earth-engine/datasets/tags/plant-productivity](https://developers.google.com/earth-engine/datasets/tags/plant-productivity)

## Supporting Pages

### "MODIS Collections in Earth Engine \_|\_ Earth Engine Data Catalog \_|\_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- The MYD13C1 has data fields for NDVI, EVI, VI QA, reflectance data, angular information, and spatial statistics such as mean, standard deviation, and number of used input pixels at the 0.05 degree CMG resolution. photo library MODIS/061/MYD13C1 MYD13Q1.061 Aqua Vegetation Indices 16-Day Global 250m The MYD13Q1 V6.1 product provides a Vegetation Index (VI) value at a per pixel basis.
- The MODIS NDVI and EVI products are computed from atmospherically corrected bi-directional surface reflectances that have been masked for water, clouds, heavy aerosols, and cloud shadows. photo library MODIS/061/MYD13A1 MYD13A2.061 Aqua Vegetation Indices 16-Day Global 1km The MYD13A2 V6.1 product provides two Vegetation Indices (VI): the Normalized Difference Vegetation Index (NDVI) and the Enhanced Vegetation Index (EVI).
- In generating this monthly product, the algorithm ingests all the MYD13A2 products that overlap the month and employs a weighted temporal average. photo library MODIS/061/MYD13A3 MYD13C1.061: Aqua Vegetation Indices 16-Day L3 Global 0.05 Deg CMG The Aqua Moderate Resolution Imaging Spectroradiometer (MODIS) Vegetation Indices 16-Day (MYD13C1) Version 6.1 product provides a Vegetation Index (VI) value at a per pixel basis.
- This product is generated from the MODIS/006/MYD09GA surface reflectance composites. photo library MODIS/MYD09GA 006 NDSI MODIS Aqua Daily NDVI The Normalized Difference Vegetation Index is generated from the Near-IR and Red bands of each scene as (NIR - Red) / (NIR + Red), and ranges in value from -1.0 to 1.0.

### "Datasets tagged vegetation-indices in Earth Engine \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/tags/vegetation-indices](https://developers.google.com/earth-engine/datasets/tags/vegetation-indices)
- Source ID: `site-docs-root-3`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- The NDVI is referred to as the continuity index to the existing National Oceanic and Atmospheric Administration-Advanced Very High Resolution Radiometer (NOAA-AVHRR) derived NDVI. … 16-day aqua evi global modis nasa MYD13A3.061 Aqua Vegetation Indices Monthly L3 Global 1 km SIN Grid The Aqua Moderate Resolution Imaging Spectroradiometer (MODIS) Vegetation Indices (MYD13A3) Version 6.1 data are provided monthly at 1 kilometer (km) spatial resolution as a gridded Level 3 product in the sinusoidal projection.
- The first is the Normalized Difference Vegetation Index (NDVI) which is referred to as the continuity index to the existing National Oceanic and Atmospheric … 16-day aqua evi global modis nasa NOAA CDR AVHRR NDVI: Normalized Difference Vegetation Index, Version 5 The NOAA Climate Data Record (CDR) of AVHRR Normalized Difference Vegetation Index (NDVI) contains gridded daily NDVI derived from the NOAA AVHRR Surface Reflectance product.
- The first is the Normalized Difference Vegetation Index (NDVI) which is referred to as the continuity index to the existing National Oceanic and Atmospheric … 16-day aqua evi global modis nasa MYD13A2.061 Aqua Vegetation Indices 16-Day Global 1km The MYD13A2 V6.1 product provides two Vegetation Indices (VI): the Normalized Difference Vegetation Index (NDVI) and the Enhanced Vegetation Index (EVI).
- In generating this monthly product, the algorithm ingests all the MYD13A2 products that … aqua evi global modis monthly nasa MYD13C1.061: Aqua Vegetation Indices 16-Day L3 Global 0.05 Deg CMG The Aqua Moderate Resolution Imaging Spectroradiometer (MODIS) Vegetation Indices 16-Day (MYD13C1) Version 6.1 product provides a Vegetation Index (VI) value at a per pixel basis.

### "Datasets tagged plant-productivity in Earth Engine \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/tags/plant-productivity](https://developers.google.com/earth-engine/datasets/tags/plant-productivity)
- Source ID: `site-docs-root-3`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- NPP is calculated using the MOD17 algorithm (see MOD17 User … conus gridmet-derived mod09q1 mod17 modis nlcd-derived MYD15A2H.061: Aqua Leaf Area Index/FPAR 8-Day Global 500m The MYD15A2H V6.1 MODIS combined Leaf Area Index (LAI) and Fraction of Photosynthetically Active Radiation (FPAR) product is an 8-day composite dataset at 500m resolution.
- This dataset is derived from the NOAA AVHRR Surface Reflectance product and … avhrr cdr daily fapar lai land NOAA CDR VIIRS LAI FAPAR: Leaf Area Index and Fraction of Absorbed Photosynthetically Active Radiation, Version 1 This Climate Data Record (CDR) combines datasets for Leaf Area Index (LAI) and Fraction of Absorbed Photosynthetically Active Radiation (FAPAR), two biophysical variables that can be used to evaluate vegetation stress, forecast agricultural yields, and other modeling and resource management applications.
- The product is based on the radiation-use efficiency concept and can be potentially used as inputs to data models to calculate terrestrial energy, carbon, water cycle processes, and … 8-day aqua global gpp modis nasa MYD17A3HGF.061: Aqua Net Primary Production Gap-Filled Yearly Global 500m The MYD17A3HGF V6.1 product provides information about annual Gross and Net Primary Productivity (GPP and NPP) at 500m pixel resolution.
- NPP is calculated using the MOD17 algorithm (see MOD17 User … conus gridmet-derived landsat mod17 nlcd-derived npp MCD15A3H.061 MODIS Leaf Area Index/FPAR 4-Day Global 500m The MCD15A3H Version 6.1 Moderate Resolution Imaging Spectroradiometer (MODIS) Level 4, Combined Fraction of Photosynthetically Active Radiation (FPAR), and Leaf Area Index (LAI) product is a 4-day composite data set with 500 meter pixel size.

