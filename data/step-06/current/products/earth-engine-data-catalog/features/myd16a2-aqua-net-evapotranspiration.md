---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T12:40:58.349Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "MYD16A2 Aqua Net Evapotranspiration"
feature_slug: "myd16a2-aqua-net-evapotranspiration"
latest_feature_date: "2025-08-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/datasets/tags/water-vapor"
  - "https://developers.google.com/earth-engine/datasets/catalog/modis"
  - "https://developers.google.com/earth-engine/datasets/tags/climate"
keywords:
  - "myd16a2"
  - "aqua"
  - "net"
  - "evapotranspiration"
  - "at"
  - "500"
  - "resolution"
  - "on"
---

# MYD16A2 Aqua Net Evapotranspiration

Product: Earth Engine Data Catalog
Coverage: LOW

## Step 02 Summary

Aqua net evapotranspiration at 500 m resolution on an 8-day global grid.

## Extended Definition

Aqua net evapotranspiration at 500 m resolution on an 8-day global grid.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/datasets/tags/water-vapor](https://developers.google.com/earth-engine/datasets/tags/water-vapor)
- [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)
- [https://developers.google.com/earth-engine/datasets/tags/climate](https://developers.google.com/earth-engine/datasets/tags/climate)

## Supporting Pages

### "Datasets tagged water-vapor in Earth Engine \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/tags/water-vapor](https://developers.google.com/earth-engine/datasets/tags/water-vapor)
- Source ID: `site-docs-root-3`
- Final score: 210
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The algorithm used for the MOD16 data product collection is based on the logic of the … 8-day evapotranspiration global modis nasa water-vapor MYD16A2.061: Aqua Net Evapotranspiration 8-Day L4 Global 500m SIN Grid V061 The MYD16A2 Version 6.1 Evapotranspiration/Latent Heat Flux product is an 8-day composite product at 500 meter pixel resolution.
- With long-term ET data, the effects of changes in climate, land use, and … 8-day evapotranspiration global mod16a2 modis water-vapor MOD16A2GF.061: Terra Net Evapotranspiration Gap-Filled 8-Day Global 500m The Terra Moderate Resolution Imaging Spectroradiometer (MODIS) MOD16A2GF Version 6.1 Evapotranspiration/Latent Heat Flux (ET/LE) product is a year-end gap-filled 8-day composite dataset produced at 500 meter (m) pixel resolution.
- This collection consists of meteorology diagnostics at popularly used vertical levels, such as air temperature at 2-meter (or at 10-meter, 850hPa, 500 hPa, 250hPa), … atmosphere climate humidity merra nasa pressure MOD16A2.061: Terra Net Evapotranspiration 8-Day Global 500m The MOD16A2 Version 6.1 Evapotranspiration/Latent Heat Flux product is an 8-day composite product produced at 500 meter pixel resolution.
- The OpenET SSEBop implementation uses … evapotranspiration gridmet-derived landsat-derived monthly openet publisher-dataset OpenET eeMETRIC Monthly Evapotranspiration v2.0 Google Earth Engine implementation of the Mapping Evapotranspiration at high Resolution with Internalized Calibration model (eeMETRIC). eeMETRIC applies the advanced METRIC algorithms and process of Allen et al. (2007; 2015) and Allen et al. (2013b), where a singular relationship between the near surface air temperature … evapotranspiration gridmet-derived landsat-derived monthly openet publisher-dataset OpenET eeMETRIC Monthly Evapotranspiration v2.1 Google Earth Engine implementation of the Mapping Evapotranspiration at high Resolution with Internalized Calibration model (eeMETRIC). eeMETRIC applies the advanced METRIC algorithms and process of Allen et al. (2007; 2015) and Allen et al. (2013b), where a singular relationship between the near surface air temperature … evapotranspiration gridmet-derived landsat-derived monthly openet publisher-dataset OpenET geeSEBAL Monthly Evapotranspiration v2.0 Implementation of geeSEBAL was completed within the OpenET framework.

### "MODIS Collections in Earth Engine \_|\_ Earth Engine Data Catalog \_|\_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- The algorithm used for the MOD16 data product collection is based on the logic of the Penman-Monteith equation, which includes inputs of daily meteorological reanalysis data along with MODIS remotely sensed data products such as vegetation property dynamics, albedo, and land cover. photo library MODIS/061/MOD16A2 MOD16A2GF.061: Terra Net Evapotranspiration Gap-Filled 8-Day Global 500m The Terra Moderate Resolution Imaging Spectroradiometer (MODIS) MOD16A2GF Version 6.1 Evapotranspiration/Latent Heat Flux (ET/LE) product is a year-end gap-filled 8-day composite dataset produced at 500 meter (m) pixel resolution.
- The product is based on the radiation-use efficiency concept and can be potentially used as inputs to data models to calculate terrestrial energy, carbon, water cycle processes, and biogeochemistry of vegetation. photo library MODIS/061/MYD17A2H MYD17A3HGF.061: Aqua Net Primary Production Gap-Filled Yearly Global 500m The MYD17A3HGF V6.1 product provides information about annual Gross and Net Primary Productivity (GPP and NPP) at 500m pixel resolution.
- The algorithm chooses the "best" pixel available from all the acquisitions of the Terra sensor from within the 8-day period. photo library MODIS/061/MOD15A2H MOD16A2.061: Terra Net Evapotranspiration 8-Day Global 500m The MOD16A2 Version 6.1 Evapotranspiration/Latent Heat Flux product is an 8-day composite product produced at 500 meter pixel resolution.
- Additional land cover property assessment layers are provided by the Food and Agriculture Organization (FAO) Land Cover Classification System (LCCS) for land cover, land use, and surface hydrology. photo library MODIS/061/MCD12Q1 MCD12Q2.006 Land Cover Dynamics Yearly Global 500m The Terra and Aqua combined Moderate Resolution Imaging Spectroradiometer (MODIS) Land Cover Dynamics (MCD12Q2) Version 6.1 data product provides global land surface phenology metrics at yearly intervals.

### "Datasets tagged climate in Earth Engine \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/tags/climate](https://developers.google.com/earth-engine/datasets/tags/climate)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- It couples an atmospheric radiative transfer model and artificial neural network with forcings from MODIS atmospheric products to generate 5-km daily products. … climate evapotranspiration gpp modis-derived par radiation CFSR: Climate Forecast System Reanalysis The National Centers for Environmental Prediction (NCEP) Climate Forecast System Reanalysis (CFSR) was designed and executed as a global, high-resolution, coupled atmosphere-ocean-land surface-sea ice system to provide the best estimate of the state of these coupled domains over the 32-year period of record from January … climate daylight flux forecast geophysical ncep CFSV2: NCEP Climate Forecast System Version 2, 6-Hourly Products Harmonized The National Centers for Environmental Prediction (NCEP) Climate Forecast System (CFS) is a fully coupled model representing the interaction between the Earth's atmosphere, oceans, land, and sea ice.
- The drought indices provided include the standardized precipitation index (SPI), the evaporative drought demand index (EDDI), the standardized precipitation evapotranspiration index (SPEI), the Palmer Drought Severity Index (PDSI) and Palmer … climate conus crop drought evapotranspiration geophysical GRIDMET: University of Idaho Gridded Surface Meteorological Dataset The Gridded Surface Meteorological dataset provides high spatial resolution ( 4-km) daily surface fields of temperature, precipitation, winds, humidity and radiation across the contiguous United States from 1979.
- The Multivariate Adaptive Constructed Analogs (MACA) method is a statistical downscaling method which utilizes a training dataset (i.e. a meteorological observation dataset) to remove historical biases and match spatial patterns … climate conus geophysical idaho maca monthly MCD18A1.062 Surface Radiation Daily/3-Hour The MCD18A1 Version 6.2 is a Moderate Resolution Imaging Spectroradiometer (MODIS) Terra and Aqua combined Downward Shortwave Radiation (DSR) gridded Level 3 product produced daily at 1 kilometer pixel resolution with estimates of DSR every 3 hours.
- It uses climatically aided interpolation, combining high-spatial resolution climatological normals from the WorldClim dataset, with coarser spatial resolution, but time-varying data from CRU Ts4.0 and the Japanese 55-year Reanalysis (JRA55). … climate drought evapotranspiration geophysical global merced The Climate Hazards Center (CHC) Coupled Model Intercomparison Project Phase 6 (CHC-CMIP6) CHC-CMIP6 was explicitly developed to support the analysis of climate-related hazards over the recent past and in the near-future.

