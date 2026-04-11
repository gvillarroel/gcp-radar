---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T12:40:58.481Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "MODIS/061/MOD16A2GF"
feature_slug: "modis-061-mod16a2gf"
latest_feature_date: "2023-11-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/modis"
  - "https://developers.google.com/earth-engine/datasets/tags/climate"
  - "https://developers.google.com/earth-engine/datasets/tags/geophysical"
keywords:
  - "modis"
  - "061"
  - "mod16a2gf"
  - "provides"
  - "terra"
  - "net"
  - "evapotranspiration"
  - "in"
---

# MODIS/061/MOD16A2GF

Product: Earth Engine Data Catalog
Coverage: LOW

## Step 02 Summary

MOD16A2GF.061 provides Terra net evapotranspiration in an 8-day global 500-meter gap-filled product.

## Extended Definition

MOD16A2GF.061 provides Terra net evapotranspiration in an 8-day global 500-meter gap-filled product.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)
- [https://developers.google.com/earth-engine/datasets/tags/climate](https://developers.google.com/earth-engine/datasets/tags/climate)
- [https://developers.google.com/earth-engine/datasets/tags/geophysical](https://developers.google.com/earth-engine/datasets/tags/geophysical)

## Supporting Pages

### "MODIS Collections in Earth Engine \_|\_ Earth Engine Data Catalog \_|\_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)
- Source ID: `site-docs-root`
- Final score: 234
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The algorithm used for the MOD16 data product collection is based on the logic of the Penman-Monteith equation, which includes inputs of daily meteorological reanalysis data along with MODIS remotely sensed data products such as vegetation property dynamics, albedo, and land cover. photo library MODIS/061/MOD16A2 MOD16A2GF.061: Terra Net Evapotranspiration Gap-Filled 8-Day Global 500m The Terra Moderate Resolution Imaging Spectroradiometer (MODIS) MOD16A2GF Version 6.1 Evapotranspiration/Latent Heat Flux (ET/LE) product is a year-end gap-filled 8-day composite dataset produced at 500 meter (m) pixel resolution.
- The product is based on the radiation-use efficiency concept and can be potentially used as inputs to data models to calculate terrestrial energy, carbon, water cycle processes, and biogeochemistry of vegetation. photo library MODIS/061/MOD17A2H MOD17A3HGF.061: Terra Net Primary Production Gap-Filled Yearly Global 500m The MOD17A3HGF V6.1 product provides information about annual Gross and Net Primary Productivity (GPP and NPP) at 500m pixel resolution.
- The algorithm chooses the "best" pixel available from all the acquisitions of the Terra sensor from within the 8-day period. photo library MODIS/061/MOD15A2H MOD16A2.061: Terra Net Evapotranspiration 8-Day Global 500m The MOD16A2 Version 6.1 Evapotranspiration/Latent Heat Flux product is an 8-day composite product produced at 500 meter pixel resolution.
- For each pixel, a value is selected from all the acquisitions within the 8-day composite on the basis of high observation coverage, low view angle, the absence of clouds or cloud shadow, and aerosol loading. photo library MODIS/061/MOD09A1 MOD09CMG.061 Surface Reflectance Daily L3 Global 0.05 Deg CMG The MOD09CMG Version 6.1 product provides an estimate of the surface spectral reflectance of Terra Moderate Resolution Imaging Spectroradiometer (MODIS) Bands 1 through 7, resampled to 5600 meter pixel resolution and corrected for atmospheric conditions such as gasses, aerosols, and Rayleigh scattering.

### "Datasets tagged climate in Earth Engine \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/tags/climate](https://developers.google.com/earth-engine/datasets/tags/climate)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- Above 30 degrees latitude, some pixels may have multiple observations where the criteria for clear-sky … climate daily emissivity global lst modis MOD11A2.061 Terra Land Surface Temperature and Emissivity 8-Day Global 1km The MOD11A2 V6.1 product provides an average 8-day land surface temperature (LST) in a 1200 x 1200 kilometer grid.
- The … atmosphere climate geophysical global modis monthly MOD11A1.061 Terra Land Surface Temperature and Emissivity Daily Global 1km The MOD11A1 V6.1 product provides daily land surface temperature (LST) and emissivity values in a 1200 x 1200 kilometer grid.
- It couples an atmospheric radiative transfer model and artificial neural network with forcings from MODIS atmospheric products to generate 5-km daily products. … climate evapotranspiration gpp modis-derived par radiation CFSR: Climate Forecast System Reanalysis The National Centers for Environmental Prediction (NCEP) Climate Forecast System Reanalysis (CFSR) was designed and executed as a global, high-resolution, coupled atmosphere-ocean-land surface-sea ice system to provide the best estimate of the state of these coupled domains over the 32-year period of record from January … climate daylight flux forecast geophysical ncep CFSV2: NCEP Climate Forecast System Version 2, 6-Hourly Products Harmonized The National Centers for Environmental Prediction (NCEP) Climate Forecast System (CFS) is a fully coupled model representing the interaction between the Earth's atmosphere, oceans, land, and sea ice.
- The L2G process maps the daily MOD21 swath granules onto a sinusoidal MODIS grid and stores all observations falling over a gridded cell … climate daily emissivity global lst nasa MOD21C1.061 Terra Land Surface Temperature and 3-Band Emissivity Daily L3 Global 0.05 Deg CMG The MOD21C1 dataset is produced daily in a 0.05 degree (5,600 meters at the equator) Climate Modeling Grid (CMG) from daytime Level 2 Gridded (L2G) intermediate LST products.

### "Datasets tagged geophysical in Earth Engine \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/tags/geophysical](https://developers.google.com/earth-engine/datasets/tags/geophysical)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- The Multivariate Adaptive Constructed Analogs (MACA) method is a statistical downscaling method which utilizes a training dataset (i.e. a meteorological observation dataset) to remove historical biases and match spatial patterns … climate conus geophysical idaho maca monthly MCD64A1.061 MODIS Burned Area Monthly Global 500m The Terra and Aqua combined MCD64A1 Version 6.1 Burned Area data product is a monthly, global gridded 500m product containing per-pixel burned-area and quality information.
- A series of masks are applied to address known issues caused by terrain shadow, burn scars, cloudiness, or ice cover … geophysical mod44w modis nasa srtm surface-ground-water MYD08 M3.061 Aqua Atmosphere Monthly Global Product MYD08 M3 V6.1 is an atmosphere global product that contains monthly 1 x 1 degree grid average values of atmospheric parameters.
- An eight-day compositing period was chosen because that is the exact ground track repeat … cryosphere daily geophysical global modis nasa MOD44B.061 Terra Vegetation Continuous Fields Yearly Global 250m The Terra MODIS Vegetation Continuous Fields (VCF) product is a sub-pixel-level representation of surface vegetation cover estimates globally.
- The … atmosphere climate geophysical global modis monthly MOD10A1.061 Terra Snow Cover Daily Global 500m The MOD10A1 V6.1 Snow Cover Daily Global 500m product contains snow cover, snow albedo, fractional snow cover, and quality assessment (QA) data.

