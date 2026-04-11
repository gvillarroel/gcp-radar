---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T12:40:59.157Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "MODIS/MOD13Q1"
feature_slug: "modis-mod13q1"
latest_feature_date: "2013-08-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/modis"
  - "https://developers.google.com/earth-engine/datasets/tags/vegetation-indices"
  - "https://developers.google.com/earth-engine/datasets/tags/plant-productivity"
keywords:
  - "modis"
  - "mod13q1"
  - "vegetation"
  - "index"
  - "product"
---

# MODIS/MOD13Q1

Product: Earth Engine Data Catalog
Coverage: LOW

## Step 02 Summary

A MODIS vegetation index product.

## Extended Definition

A MODIS vegetation index product.

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
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- The MOD13C1 has data fields for NDVI, EVI, VI QA, reflectance data, angular information, and spatial statistics such as mean, standard deviation, and number of used input pixels at the 0.05 degree CMG resolution. photo library MODIS/061/MOD13C1 MOD13Q1.061 Terra Vegetation Indices 16-Day Global 250m The MOD13Q1 V6.1 product provides a Vegetation Index (VI) value at a per pixel basis.
- For pixels with more than two valid vegetation cycles, the data represent the two cycles with the largest NBAR-EVI2 amplitudes. photo library MODIS/061/MCD12Q2 MCD15A3H.061 MODIS Leaf Area Index/FPAR 4-Day Global 500m The MCD15A3H Version 6.1 Moderate Resolution Imaging Spectroradiometer (MODIS) Level 4, Combined Fraction of Photosynthetically Active Radiation (FPAR), and Leaf Area Index (LAI) product is a 4-day composite data set with 500 meter pixel size.
- In generating this monthly product, the algorithm ingests all the MOD13A2 products that overlap the month and employs a weighted temporal average. photo library MODIS/061/MOD13A3 MOD13C1.061: Terra Vegetation Indices 16-Day L3 Global 0.05 Deg Climate Modeling Grid The Terra Moderate Resolution Imaging Spectroradiometer (MODIS) Vegetation Indices 16-Day (MOD13C1) Version 6.1 product provides a Vegetation Index (VI) value at a per pixel basis.
- The MODIS NDVI and EVI products are computed from atmospherically corrected bi-directional surface reflectances that have been masked for water, clouds, heavy aerosols, and cloud shadows. photo library MODIS/061/MOD13A1 MOD13A2.061 Terra Vegetation Indices 16-Day Global 1km The MOD13A2 V6.1 product provides two Vegetation Indices (VI): the Normalized Difference Vegetation Index (NDVI) and the Enhanced Vegetation Index (EVI).

### "Datasets tagged vegetation-indices in Earth Engine \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/tags/vegetation-indices](https://developers.google.com/earth-engine/datasets/tags/vegetation-indices)
- Source ID: `site-docs-root-3`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- The NDVI is referred to as the continuity index to the existing National Oceanic and Atmospheric Administration-Advanced Very High Resolution Radiometer (NOAA-AVHRR) derived NDVI. … 16-day aqua evi global modis nasa MYD13A3.061 Aqua Vegetation Indices Monthly L3 Global 1 km SIN Grid The Aqua Moderate Resolution Imaging Spectroradiometer (MODIS) Vegetation Indices (MYD13A3) Version 6.1 data are provided monthly at 1 kilometer (km) spatial resolution as a gridded Level 3 product in the sinusoidal projection.
- After gap-filling the data was clipped to … evi malariaatlasproject map publisher-dataset vegetation vegetation-indices EVI: Malaria Atlas Project Gap-Filled Enhanced Vegetation Index (Monthly 1km) The underlying dataset for this Enhanced Vegetation Index (EVI) product is MODIS BRDF-corrected imagery (MCD43B4), which was gap-filled using the approach outlined in Weiss et al. (2014) to eliminate missing data caused by factors such as cloud cover.
- After gap-filling the data was clipped to … evi malariaatlasproject map publisher-dataset vegetation vegetation-indices EVI: Malaria Atlas Project Gap-Filled Enhanced Vegetation Index (Annual 1km) The underlying dataset for this Enhanced Vegetation Index (EVI) product is MODIS BRDF-corrected imagery (MCD43B4), which was gap-filled using the approach outlined in Weiss et al. (2014) to eliminate missing data caused by factors such as cloud cover.
- The first is the Normalized Difference Vegetation Index (NDVI) which is referred to as the continuity index to the existing National Oceanic and Atmospheric … 16-day aqua evi global modis nasa NOAA CDR AVHRR NDVI: Normalized Difference Vegetation Index, Version 5 The NOAA Climate Data Record (CDR) of AVHRR Normalized Difference Vegetation Index (NDVI) contains gridded daily NDVI derived from the NOAA AVHRR Surface Reflectance product.

### "Datasets tagged plant-productivity in Earth Engine \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/tags/plant-productivity](https://developers.google.com/earth-engine/datasets/tags/plant-productivity)
- Source ID: `site-docs-root-3`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- This dataset is derived from the NOAA AVHRR Surface Reflectance product and … avhrr cdr daily fapar lai land NOAA CDR VIIRS LAI FAPAR: Leaf Area Index and Fraction of Absorbed Photosynthetically Active Radiation, Version 1 This Climate Data Record (CDR) combines datasets for Leaf Area Index (LAI) and Fraction of Absorbed Photosynthetically Active Radiation (FAPAR), two biophysical variables that can be used to evaluate vegetation stress, forecast agricultural yields, and other modeling and resource management applications.
- NPP is calculated using the MOD17 algorithm (see MOD17 User … conus gridmet-derived landsat mod17 nlcd-derived npp MCD15A3H.061 MODIS Leaf Area Index/FPAR 4-Day Global 500m The MCD15A3H Version 6.1 Moderate Resolution Imaging Spectroradiometer (MODIS) Level 4, Combined Fraction of Photosynthetically Active Radiation (FPAR), and Leaf Area Index (LAI) product is a 4-day composite data set with 500 meter pixel size.
- NPP is calculated using the MOD17 algorithm (see MOD17 User … conus gridmet-derived mod09q1 mod17 modis nlcd-derived MYD15A2H.061: Aqua Leaf Area Index/FPAR 8-Day Global 500m The MYD15A2H V6.1 MODIS combined Leaf Area Index (LAI) and Fraction of Photosynthetically Active Radiation (FPAR) product is an 8-day composite dataset at 500m resolution.
- The algorithm chooses the best pixel available from all the … fpar global lai modis nasa plant-productivity MOD15A2H.061: Terra Leaf Area Index/FPAR 8-Day Global 500m The MOD15A2H V6.1 MODIS combined Leaf Area Index (LAI) and Fraction of Photosynthetically Active Radiation (FPAR) product is an 8-day composite dataset at 500m resolution.

