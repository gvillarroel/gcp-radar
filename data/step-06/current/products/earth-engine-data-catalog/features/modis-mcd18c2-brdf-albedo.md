---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T12:40:58.558Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "MODIS MCD18C2 BRDF/Albedo"
feature_slug: "modis-mcd18c2-brdf-albedo"
latest_feature_date: "2022-12-27"
deprecation_date: "2022-12-27"
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/modis"
  - "https://developers.google.com/earth-engine/datasets/tags/vegetation-indices"
  - "https://developers.google.com/earth-engine/datasets/tags/plant-productivity"
keywords:
  - "modis"
  - "mcd18c2"
  - "brdf"
  - "albedo"
  - "this"
  - "product"
  - "provides"
  - "in"
---

# MODIS MCD18C2 BRDF/Albedo

Product: Earth Engine Data Catalog
Coverage: LOW

## Step 02 Summary

This product provides MODIS BRDF/albedo data in the MCD18C2 format; deprecated on 2022-12-27.

## Extended Definition

This product provides MODIS BRDF/albedo data in the MCD18C2 format; deprecated on 2022-12-27.

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
- Final score: 234
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This product combines data from both the Terra and Aqua spacecrafts, choosing the best representative pixel from the 16-day period. photo library MODIS/061/MCD43A4 MCD43C3.061 BRDF/Albedo Daily L3 0.05 Deg CMG The MCD43C3 Version 6.1 Bidirectional Reflectance Distribution Function and Albedo (BRDF/Albedo) Albedo dataset is produced daily using 16 days of Terra and Aqua MODIS data in a 0.05 degree (5,600 meters at the equator) Climate Modeling Grid (CMG).
- The product is referred to as ocean reflectance, because bands 8-16 are used primarily to produce ocean products, but this is not an ocean product as the tiles produced are land tiles. photo library MODIS/006/MYDOCGA MCD12C1.061 MODIS Land Cover Type Yearly Global 0.05 Deg CMG The Terra and Aqua combined Moderate Resolution Imaging Spectroradiometer (MODIS) Land Cover Climate Modeling Grid (CMG) (MCD12C1) Version 6.1 data product provides a spatially aggregated and reprojected version of the tiled MCD12Q1 Version 6.1 data product.
- In generating this monthly product, the algorithm ingests all the MOD13A2 products that overlap the month and employs a weighted temporal average. photo library MODIS/061/MOD13A3 MOD13C1.061: Terra Vegetation Indices 16-Day L3 Global 0.05 Deg Climate Modeling Grid The Terra Moderate Resolution Imaging Spectroradiometer (MODIS) Vegetation Indices 16-Day (MOD13C1) Version 6.1 product provides a Vegetation Index (VI) value at a per pixel basis.
- The MCD43A1 algorithm, as is with all combined products, chooses the best representative pixel from a pool that includes all the acquisitions from both the Terra and Aqua sensors from the retrieval period. photo library MODIS/061/MCD43A1 MCD43A2.061 MODIS BRDF-Albedo Quality Daily 500m The MCD43A2 V6.1 Bidirectional Reflectance Distribution Function and Albedo (BRDF/Albedo) Quality dataset is a 500 meter daily 16-day product.

### "Datasets tagged vegetation-indices in Earth Engine \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/tags/vegetation-indices](https://developers.google.com/earth-engine/datasets/tags/vegetation-indices)
- Source ID: `site-docs-root-3`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- After gap-filling the data was clipped to … evi malariaatlasproject map publisher-dataset vegetation vegetation-indices EVI: Malaria Atlas Project Gap-Filled Enhanced Vegetation Index (Monthly 1km) The underlying dataset for this Enhanced Vegetation Index (EVI) product is MODIS BRDF-corrected imagery (MCD43B4), which was gap-filled using the approach outlined in Weiss et al. (2014) to eliminate missing data caused by factors such as cloud cover.
- After gap-filling the data was clipped to … evi malariaatlasproject map publisher-dataset vegetation vegetation-indices EVI: Malaria Atlas Project Gap-Filled Enhanced Vegetation Index (Annual 1km) The underlying dataset for this Enhanced Vegetation Index (EVI) product is MODIS BRDF-corrected imagery (MCD43B4), which was gap-filled using the approach outlined in Weiss et al. (2014) to eliminate missing data caused by factors such as cloud cover.
- In generating this monthly product, the algorithm ingests all the MYD13A2 products that … aqua evi global modis monthly nasa MYD13C1.061: Aqua Vegetation Indices 16-Day L3 Global 0.05 Deg CMG The Aqua Moderate Resolution Imaging Spectroradiometer (MODIS) Vegetation Indices 16-Day (MYD13C1) Version 6.1 product provides a Vegetation Index (VI) value at a per pixel basis.
- EVI: Malaria Atlas Project Gap-Filled Enhanced Vegetation Index (8-Daily 1km) The underlying dataset for this Enhanced Vegetation Index (EVI) product is MODIS BRDF-corrected imagery (MCD43B4), which was gap-filled using the approach outlined in Weiss et al. (2014) to eliminate missing data caused by factors such as cloud cover.

### "Datasets tagged plant-productivity in Earth Engine \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/tags/plant-productivity](https://developers.google.com/earth-engine/datasets/tags/plant-productivity)
- Source ID: `site-docs-root-3`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The product is based on the radiation-use efficiency concept and can be potentially used as inputs to data models to calculate terrestrial energy, carbon, water cycle processes, … 8-day global gpp modis nasa photosynthesis MOD17A2HGF.061: Terra Gross Primary Productivity 8-Day Global 500m The MOD17A2HGF Version 6.1 Gross Primary Productivity (GPP) product is a cumulative 8-day composite of values with 500 meter (m) pixel size based on the radiation use efficiency concept that can be potentially used as inputs to data models to calculate terrestrial energy, carbon, water … 8-day global gpp modis nasa photosynthesis MOD17A3HGF.061: Terra Net Primary Production Gap-Filled Yearly Global 500m The MOD17A3HGF V6.1 product provides information about annual Gross and Net Primary Productivity (GPP and NPP) at 500m pixel resolution.
- This ancillary product, essential for understanding plant water needs and stress, is created through a data fusion process that combines Visible … albedo land ndvi plant-productivity Forest proximate people (FPP) 1.0 The "Forest Proximate People" (FPP) dataset is one of the data layers contributing to the development of indicator #13, "number of forest-dependent people in extreme poverty," of the Collaborative Partnership on Forests (CPF) Global Core Set of forest-related indicators (GCS).
- The product is based on the radiation-use efficiency concept and can be potentially used as inputs to data models to calculate terrestrial energy, carbon, water cycle processes, and … 8-day aqua global gpp modis nasa MYD17A3HGF.061: Aqua Net Primary Production Gap-Filled Yearly Global 500m The MYD17A3HGF V6.1 product provides information about annual Gross and Net Primary Productivity (GPP and NPP) at 500m pixel resolution.
- Page Summary outlined flag This page contains datasets related to plant productivity, including measures like NDVI, albedo, vegetation height, Gross Primary Productivity (GPP), Net Primary Production (NPP), Leaf Area Index (LAI), and Fraction of Photosynthetically Active Radiation (FPAR).

