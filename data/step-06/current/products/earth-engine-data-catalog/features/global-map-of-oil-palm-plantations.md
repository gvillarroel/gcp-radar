---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T12:40:58.695Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "Global Map of Oil Palm Plantations"
feature_slug: "global-map-of-oil-palm-plantations"
latest_feature_date: "2021-04-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/BIOPAMA_GlobalOilPalm_v1"
  - "https://developers.google.com/earth-engine/datasets/tags/agriculture"
  - "https://developers.google.com/earth-engine/datasets/catalog"
keywords:
  - "global"
  - "map"
  - "of"
  - "oil"
  - "palm"
  - "plantations"
---

# Global Map of Oil Palm Plantations

Product: Earth Engine Data Catalog
Coverage: LOW

## Step 02 Summary

A global map of oil palm plantations.

## Extended Definition

A global map of oil palm plantations.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/BIOPAMA_GlobalOilPalm_v1](https://developers.google.com/earth-engine/datasets/catalog/BIOPAMA_GlobalOilPalm_v1)
- [https://developers.google.com/earth-engine/datasets/tags/agriculture](https://developers.google.com/earth-engine/datasets/tags/agriculture)
- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)

## Supporting Pages

### "Global Map of Oil Palm Plantations \_|\_ Earth Engine Data Catalog \_|\_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/BIOPAMA_GlobalOilPalm_v1](https://developers.google.com/earth-engine/datasets/catalog/BIOPAMA_GlobalOilPalm_v1)
- Source ID: `site-docs-root-2`
- Final score: 262
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Map . addLayer ( mosaic . updateMask ( mask ), classificationVis , 'Oil palm plantation type' , true ); Map . setCenter ( - 3.0175 , 5.2745 , 12 ); Open in Code Editor Global Map of Oil Palm Plantations The dataset is a 10m global industrial and smallholder oil palm map for 2019.
- Home Earth Engine Data Catalog All Datasets Send feedback Global Map of Oil Palm Plantations Stay organized with collections Save and categorize content based on your preferences.
- ImageCollection ( 'BIOPAMA/GlobalOilPalm/v1' ); // Select the classification band. var opClass = dataset . select ( 'classification' ); // Mosaic all of the granules into a single image. var mosaic = opClass . mosaic (); // Define visualization parameters. var classificationVis = { min : 1 , max : 3 , palette : [ 'ff0000' , 'ef00ff' , '696969' ] }; // Create a mask to add transparency to non-oil palm plantation class pixels. var mask = mosaic . neq ( 3 ); mask = mask . where ( mask . eq ( 0 ), 0.6 ); // Display the data on the map.
- Page Summary outlined flag The dataset is a 10m global industrial and smallholder oil palm map for 2019, covering areas where oil palm plantations were detected.

### "Datasets tagged agriculture in Earth Engine \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/tags/agriculture](https://developers.google.com/earth-engine/datasets/tags/agriculture)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- The GFSAD products are derived through multi-sensor remote sensing data (e.g., Landsat, MODIS, AVHRR), secondary data, and field-plot data … agriculture crop landcover usgs Global Map of Oil Palm Plantations The dataset is a 10m global industrial and smallholder oil palm map for 2019.
- This first … agriculture landcover landuse landuse-landcover tsinghua Drained Organic Soils Emissions (Annual) 1.0 The two related FAO datasets on Drained Organic Soils provide estimates of: DROSA-A: area of Organic Soils (in hectares) drained for agricultural activities (cropland and grazed grassland) DROSE-A: carbon (C) and nitrous oxide (N2O) estimates (in gigagrams) from the agricultural drainage of organic soils under … agriculture climate climate-change emissions fao ghg ESA WorldCereal 10 m v100 The European Space Agency (ESA) WorldCereal 10 m 2021 product suite consists of global-scale annual and seasonal crop maps and their related confidence.
- The TPP dataset provides 4 different estimates … agriculture fao forest global plant-productivity population UN FAO Drained Organic Soils Area (Annual) 1.0 The two related FAO datasets on Drained Organic Soils provide estimates of: DROSA-A: area of Organic Soils (in hectares) drained for agricultural activities (cropland and grazed grassland) DROSE-A: carbon (C) and nitrous oxide (N2O) estimates (in gigagrams) from the agricultural drainage of organic soils under … agriculture climate climate-change emissions fao ghg USDA NASS Cropland Data Layers The Cropland Data Layer (CDL) is a crop-specific land cover data layer created annually for the continental United States using moderate resolution satellite imagery and extensive agricultural ground truth.
- Produced by the World Resources Institute (WRI) and Google DeepMind, the data were developed using a global neural network model (ResNet) trained on a set of samples collected … agriculture deforestation forest forest-biomass google landandcarbon WRI/Google DeepMind Global Drivers of Forest Loss 2001-2023 v1.1 This dataset maps the dominant driver of tree cover loss from 2001-2023 globally at 1 km resolution.

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- This database is the first, most … annual ciesin forest-biomass global landsat-derived mangrove Global Map of Oil Palm Plantations The dataset is a 10m global industrial and smallholder oil palm map for 2019.
- This Level-3 (L3) soil moisture product provides a daily composite of global land surface conditions retrieved by the Soil Moisture Active Passive (SMAP) L-Band … drought nasa smap soil soil-moisture surface SPL4SMGP.008 SMAP L4 Global 3-hourly 9-km Surface and Root Zone Soil Moisture The SMAP Level-4 (L4) Soil Moisture product includes surface soil moisture (0-5 cm vertical average), root-zone soil moisture (0-100 cm vertical average), and additional research products (not validated), including surface meteorological forcing variables, soil temperature, evapotranspiration, and net radiation.
- To access … envirometrix opengeohub openlandmap soil usda OpenLandMap Soil Water Content at 33kPa (Field Capacity) Soil water content (volumetric %) for 33kPa and 1500kPa suctions predicted at 6 standard depths (0, 10, 30, 60, 100 and 200 cm) at 250 m resolution Training points are based on a global compilation of soil profiles: USDA NCSS AfSPDB ISRIC WISE EGRPR SPADE … envirometrix opengeohub openlandmap soil OpenLandMap Soil pH in H2O Soil pH in H2O at 6 standard depths (0, 10, 30, 60, 100 and 200 cm) at 250 m resolution Processing steps are described in detail here.
- The OpenET geeSEBAL implementation uses land surface temperature … evapotranspiration gridmet-derived landsat-derived monthly openet publisher-dataset OpenLandMap Clay Content Clay content in % (kg / kg) at 6 standard depths (0, 10, 30, 60, 100 and 200 cm) at 250 m resolution Based on machine learning predictions from global compilation of soil profiles and samples.

