---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:19.817Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "iSDAsoil Africa v1 Bulk Density"
feature_slug: "isdasoil-africa-v1-bulk-density"
latest_feature_date: "2021-08-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog"
  - "https://developers.google.com/earth-engine/datasets/tags/soil"
  - "https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Population_Density"
keywords:
  - "isdasoil"
  - "africa"
  - "v1"
  - "bulk"
  - "density"
  - "layer"
---

# iSDAsoil Africa v1 Bulk Density

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

An iSDAsoil Africa v1 layer for bulk density.

## Extended Definition

An iSDAsoil Africa v1 layer for bulk density.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- [https://developers.google.com/earth-engine/datasets/tags/soil](https://developers.google.com/earth-engine/datasets/tags/soil)
- [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Population_Density](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Population_Density)

## Supporting Pages

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Comprehensive Global … borders countries infrastructure-boundaries table iSDAsoil Bulk Density, <2mm Fraction Bulk density, <2mm fraction at soil depths of 0-20 cm and 20-50 cm, predicted mean and standard deviation.
- Due to the potential cropland mask that was used for generating the data, many areas of exposed rock (where depth to bedrock would be 0 cm) have been masked out and therefore appear … africa bedrock isda soil iSDAsoil Effective Cation Exchange Capacity Effective Cation Exchange Capacity predicted mean and standard deviation at soil depths of 0-20 cm and 20-50 cm, Pixel values must be back-transformed with exp(x/10)-1.
- In areas of dense jungle (generally over central Africa), model accuracy is low and therefore artifacts such as banding (striping) might be … africa isda soil iSDAsoil Fertility Capability Classification Soil fertility capability classification derived using slope, chemical, and physical soil properties.
- In areas of dense jungle (generally over central Africa), model accuracy is low and therefore artifacts such as banding (striping) might be … africa isda soil iSDAsoil Extractable Phosphorus Extractable phosphorus at soil depths of 0-20 cm and 20-50 cm, predicted mean and standard deviation.

### "Datasets tagged soil in Earth Engine \_|\_ Earth Engine Data Catalog \_\

- URL: [https://developers.google.com/earth-engine/datasets/tags/soil](https://developers.google.com/earth-engine/datasets/tags/soil)
- Source ID: `site-docs-root-3`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- OpenLandMap and iSDAsoil provide comprehensive global and Africa-specific soil attribute data, including clay content, sand content, bulk density, organic carbon, and pH at various depths and resolutions, derived from machine learning predictions and existing soil data.
- Predictions were derived using a digital soil mapping approach based on Quantile Random Forest, drawing on a global … soil soil-moisture water iSDAsoil Bulk Density, <2mm Fraction Bulk density, <2mm fraction at soil depths of 0-20 cm and 20-50 cm, predicted mean and standard deviation.
- Due to the potential cropland mask that was used for generating the data, many areas of exposed rock (where depth to bedrock would be 0 cm) have been masked out and therefore appear … africa bedrock isda soil iSDAsoil Effective Cation Exchange Capacity Effective Cation Exchange Capacity predicted mean and standard deviation at soil depths of 0-20 cm and 20-50 cm, Pixel values must be back-transformed with exp(x/10)-1.
- In areas of dense jungle (generally over central Africa), model accuracy is low and therefore artifacts such as banding (striping) might be … africa isda soil iSDAsoil Fertility Capability Classification Soil fertility capability classification derived using slope, chemical, and physical soil properties.

### "GPWv411: Population Density (Gridded Population of the World Version 4.11)\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Population_Density](https://developers.google.com/earth-engine/datasets/catalog/CIESIN_GPWv411_GPW_Population_Density)
- Source ID: `site-docs-root-2`
- Final score: 57
- Re-rank relevance: N/A

Evidence snippets:
- ImageCollection ( 'CIESIN/GPWv411/GPW Population Density' ). first (); var raster = dataset . select ( 'population density' ); var raster vis = { 'max' : 1000.0 , 'palette' : [ 'ffffe7' , 'FFc869' , 'ffac1d' , 'e17735' , 'f2552c' , '9f0c21' ], 'min' : 200.0 }; Map . setCenter ( 79.1 , 19.81 , 3 ); Map . addLayer ( raster , raster vis , 'population density' ); Open in Code Editor GPWv411: Population Density (Gridded Population of the World Version 4.11) This dataset contains estimates of the number of persons per square kilometer consistent with national censuses and population registers.
- General Documentation The Gridded Population of World Version 4 (GPWv4), Revision 11 models the distribution of global human population for the years 2000, … CIESIN/GPWv411/GPW Population Density, ciesin,gpw,nasa,population 2000-01-01T00:00:00Z/2020-01-01T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.7927/H49C6VHW https://doi.org/10.7927/H49C6VHW Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]]
- Dataset Availability 2000-01-01T00:00:00Z–2020-01-01T00:00:00Z Dataset Producer NASA SEDAC at the Center for International Earth Science Information Network Earth Engine Snippet ee.ImageCollection("CIESIN/GPWv411/GPW Population Density") open in new Cadence 5 Years Tags ciesin gpw nasa population Description This dataset contains estimates of the number of persons per square kilometer consistent with national censuses and population registers.
- Bands Bands Pixel size: 927.67 meters (all bands) Name Min Max Pixel Size Description population density 0 810694 927.67 meters The estimated number of persons per square kilometer. estimated min or max value Terms of Use Terms of Use CC-BY-4.0 Citations Citations: Center for International Earth Science Information Network - CIESIN - Columbia University.

