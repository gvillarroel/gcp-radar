---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:19.323Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "MYD16A2 Aqua Net Evapotranspiration"
feature_slug: "myd16a2-aqua-net-evapotranspiration"
latest_feature_date: "2025-08-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog"
  - "https://developers.google.com/earth-engine/datasets/catalog/modis"
  - "https://developers.google.com/earth-engine/datasets/tags/climate"
keywords:
  - "myd16a2"
  - "aqua"
  - "net"
  - "evapotranspiration"
  - "500"
  - "resolution"
  - "day"
  - "global"
---

# MYD16A2 Aqua Net Evapotranspiration

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

Aqua net evapotranspiration at 500 m resolution on an 8-day global grid.

## Extended Definition

Aqua net evapotranspiration at 500 m resolution on an 8-day global grid.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)
- [https://developers.google.com/earth-engine/datasets/tags/climate](https://developers.google.com/earth-engine/datasets/tags/climate)

## Supporting Pages

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- The algorithm chooses the "best" pixel available from all the acquisitions of the Aqua sensor from within the 8-day period. … 8-day aqua fpar global lai modis MYD16A2.061: Aqua Net Evapotranspiration 8-Day L4 Global 500m SIN Grid V061 The MYD16A2 Version 6.1 Evapotranspiration/Latent Heat Flux product is an 8-day composite product at 500 meter pixel resolution.
- The algorithm used for the MOD16 data product collection is based on the logic of the Penman-Monteith equation, which includes inputs of daily meteorological reanalysis data along … 8-day evapotranspiration global modis nasa water-vapor MYD17A2H.061: Aqua Gross Primary Productivity 8-Day Global 500m The MYD17A2H V6.1 Gross Primary Productivity (GPP) product is a cumulative 8-day composite with a 500m resolution.
- The Multivariate Adaptive Constructed Analogs (MACA) method is a statistical downscaling method which utilizes a training dataset (i.e. a meteorological observation dataset) to remove historical biases and match spatial patterns … climate conus geophysical idaho maca monthly MCD12C1.061 MODIS Land Cover Type Yearly Global 0.05 Deg CMG The Terra and Aqua combined Moderate Resolution Imaging Spectroradiometer (MODIS) Land Cover Climate Modeling Grid (CMG) (MCD12C1) Version 6.1 data product provides a spatially aggregated and reprojected version of the tiled MCD12Q1 Version 6.1 data product.
- It uses climatically aided interpolation, combining high-spatial resolution climatological normals from the WorldClim dataset, with coarser spatial resolution, but time-varying data from CRU Ts4.0 and the Japanese 55-year Reanalysis (JRA55). … climate drought evapotranspiration geophysical global merced The Climate Hazards Center (CHC) Coupled Model Intercomparison Project Phase 6 (CHC-CMIP6) CHC-CMIP6 was explicitly developed to support the analysis of climate-related hazards over the recent past and in the near-future.

### "MODIS Collections in Earth Engine \_|\_ Earth Engine Data Catalog \_|\_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)
- Source ID: `site-docs-root`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- The algorithm used for the MOD16 data product collection is based on the logic of the Penman-Monteith equation, which includes inputs of daily meteorological reanalysis data along with MODIS remotely sensed data products such as vegetation property dynamics, albedo, and land cover. photo library MODIS/061/MOD16A2 MOD16A2GF.061: Terra Net Evapotranspiration Gap-Filled 8-Day Global 500m The Terra Moderate Resolution Imaging Spectroradiometer (MODIS) MOD16A2GF Version 6.1 Evapotranspiration/Latent Heat Flux (ET/LE) product is a year-end gap-filled 8-day composite dataset produced at 500 meter (m) pixel resolution.
- The product is referred to as ocean reflectance, because bands 8-16 are used primarily to produce ocean products, but this is not an ocean product as the tiles produced are land tiles. photo library MODIS/006/MYDOCGA MCD12C1.061 MODIS Land Cover Type Yearly Global 0.05 Deg CMG The Terra and Aqua combined Moderate Resolution Imaging Spectroradiometer (MODIS) Land Cover Climate Modeling Grid (CMG) (MCD12C1) Version 6.1 data product provides a spatially aggregated and reprojected version of the tiled MCD12Q1 Version 6.1 data product.
- Additional land cover property assessment layers are provided by the Food and Agriculture Organization (FAO) Land Cover Classification System (LCCS) for land cover, land use, and surface hydrology. photo library MODIS/061/MCD12Q1 MCD12Q2.006 Land Cover Dynamics Yearly Global 500m The Terra and Aqua combined Moderate Resolution Imaging Spectroradiometer (MODIS) Land Cover Dynamics (MCD12Q2) Version 6.1 data product provides global land surface phenology metrics at yearly intervals.
- Additionally, sub-pixel proportions of each land cover class in each 0.05 degree pixel is provided along with the aggregated quality assessment information for each of the three land classification schemes. photo library MODIS/061/MCD12C1 MCD12Q1.061 MODIS Land Cover Type Yearly Global 500m The Terra and Aqua combined Moderate Resolution Imaging Spectroradiometer (MODIS) Land Cover Type (MCD12Q1) Version 6.1 data product provides global land cover types at yearly intervals.

### "Datasets tagged climate in Earth Engine \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/tags/climate](https://developers.google.com/earth-engine/datasets/tags/climate)
- Source ID: `site-docs-root`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- It couples an atmospheric radiative transfer model and artificial neural network with forcings from MODIS atmospheric products to generate 5-km daily products. … climate evapotranspiration gpp modis-derived par radiation CFSR: Climate Forecast System Reanalysis The National Centers for Environmental Prediction (NCEP) Climate Forecast System Reanalysis (CFSR) was designed and executed as a global, high-resolution, coupled atmosphere-ocean-land surface-sea ice system to provide the best estimate of the state of these coupled domains over the 32-year period of record from January … climate daylight flux forecast geophysical ncep CFSV2: NCEP Climate Forecast System Version 2, 6-Hourly Products Harmonized The National Centers for Environmental Prediction (NCEP) Climate Forecast System (CFS) is a fully coupled model representing the interaction between the Earth's atmosphere, oceans, land, and sea ice.
- It uses climatically aided interpolation, combining high-spatial resolution climatological normals from the WorldClim dataset, with coarser spatial resolution, but time-varying data from CRU Ts4.0 and the Japanese 55-year Reanalysis (JRA55). … climate drought evapotranspiration geophysical global merced The Climate Hazards Center (CHC) Coupled Model Intercomparison Project Phase 6 (CHC-CMIP6) CHC-CMIP6 was explicitly developed to support the analysis of climate-related hazards over the recent past and in the near-future.
- The L2G process maps the daily MOD21 swath granules onto a sinusoidal MODIS grid and stores all observations falling over a gridded cell … aqua climate daily emissivity global lst MYD21A1N.061 Aqua Land Surface Temperature and 3-Band Emissivity Daily Global 1km The MYD21A1N dataset is produced daily from nighttime Level 2 Gridded (L2G) intermediate LST products at a spatial resolution of 1,000 meters.
- The Standardized Precipitation-Evapotranspiration Index (SPEI) expresses, as a standardized variate … climate climate-change drought evapotranspiration global monthly Sentinel-5P OFFL CH4: Offline Methane OFFL/L3 CH4 This dataset provides offline high-resolution imagery of methane concentrations.

