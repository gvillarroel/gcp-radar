---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:19.819Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "iSDAsoil Africa v1 Clay Content"
feature_slug: "isdasoil-africa-v1-clay-content"
latest_feature_date: "2021-08-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog"
  - "https://developers.google.com/earth-engine/datasets/tags/soil"
  - "https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V-C3_Global"
keywords:
  - "isdasoil"
  - "africa"
  - "v1"
  - "clay"
  - "content"
  - "layer"
---

# iSDAsoil Africa v1 Clay Content

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

An iSDAsoil Africa v1 layer for clay content.

## Extended Definition

An iSDAsoil Africa v1 layer for clay content.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- [https://developers.google.com/earth-engine/datasets/tags/soil](https://developers.google.com/earth-engine/datasets/tags/soil)
- [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V-C3_Global](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V-C3_Global)

## Supporting Pages

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- In areas of dense jungle (generally over central Africa), model accuracy is low and therefore artifacts such as banding (striping) … africa isda soil iSDAsoil Clay Content Clay content at soil depths of 0-20 cm and 20-50 cm,\npredicted mean and standard deviation.
- In areas of dense jungle (generally over central Africa), model accuracy is low and therefore artifacts such as banding (striping) might be … africa carbon isda soil iSDAsoil Sand Content Sand content at soil depths of 0-20 cm and 20-50 cm,\npredicted mean and standard deviation.
- In areas of dense jungle (generally over central Africa), model accuracy is low and therefore artifacts such as banding (striping) might be … africa isda soil iSDAsoil Stone Content Stone content at soil depths of 0-20 cm and 20-50 cm, predicted mean and standard deviation.
- Soil property predictions were made by Innovative … africa isda sand soil iSDAsoil Silt Content Silt content at soil depths of 0-20 cm and 20-50 cm, predicted mean and standard deviation.

### "Datasets tagged soil in Earth Engine \_|\_ Earth Engine Data Catalog \_\

- URL: [https://developers.google.com/earth-engine/datasets/tags/soil](https://developers.google.com/earth-engine/datasets/tags/soil)
- Source ID: `site-docs-root-3`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- OpenLandMap and iSDAsoil provide comprehensive global and Africa-specific soil attribute data, including clay content, sand content, bulk density, organic carbon, and pH at various depths and resolutions, derived from machine learning predictions and existing soil data.
- In areas of dense jungle (generally over central Africa), model accuracy is low and therefore artifacts such as banding (striping) … africa isda soil iSDAsoil Clay Content Clay content at soil depths of 0-20 cm and 20-50 cm,\npredicted mean and standard deviation.
- In areas of dense jungle (generally over central Africa), model accuracy is low and therefore artifacts such as banding (striping) might be … africa carbon isda soil iSDAsoil Sand Content Sand content at soil depths of 0-20 cm and 20-50 cm,\npredicted mean and standard deviation.
- In areas of dense jungle (generally over central Africa), model accuracy is low and therefore artifacts such as banding (striping) might be … africa isda soil iSDAsoil Stone Content Stone content at soil depths of 0-20 cm and 20-50 cm, predicted mean and standard deviation.

### "Copernicus Global Land Cover Layers: CGLS-LC100 Collection 3 \_|\_ Earth\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V-C3_Global](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V-C3_Global)
- Source ID: `site-docs-root-2`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- Home Earth Engine Data Catalog All Datasets Send feedback Copernicus Global Land Cover Layers: CGLS-LC100 Collection 3 Stay organized with collections Save and categorize content based on your preferences.
- See also: Algorithm Theoretical Basis Document Product User Manual Validation Report Bands Bands Pixel size: 100 meters (all bands) Name Units Min Max Pixel Size Description discrete classification 0 200 100 meters Land cover classification discrete classification-proba % 0 100 100 meters Quality indicator (classification probability) of the discrete classification forest type 0 5 100 meters Forest type for all pixels with tree percentage vegetation cover bigger than 1 % bare-coverfraction % 0 100 100 meters Percent vegetation cover for bare-sparse-vegetation land cover class crops-coverfraction % 0 100 100 meters Percent vegetation cover for cropland land cover class grass-coverfraction % 0 100 100 meters Percent vegetation cover for herbaceous vegetation land cover class moss-coverfraction % 0 100 100 meters Percent vegetation cover for moss and lichen land cover class shrub-coverfraction % 0 100 100 meters Percent vegetation cover for shrubland land cover class tree-coverfraction % 0 100 100 meters Percent vegetation cover for forest land cover class snow-coverfraction % 0 100 100 meters Percent ground cover for snow and ice land cover class urban-coverfraction % 0 100 100 meters Percent ground cover for built-up land cover class water-permanent-coverfraction % 0 100 100 meters Percent ground cover for permanent water land cover class water-seasonal-coverfraction % 0 100 100 meters Percent ground cover for seasonal water land cover class data-density-indicator 0 100 100 meters Data density indicator for algorithm input data change-confidence 0 3 100 meters This layer is only provided for years after the BaseYear 2015.
- Map () m . set center ( - 88.6 , 26.4 , 1 ) m . add layer ( dataset , {}, 'Land Cover' ) m Open in Code Editor Copernicus Global Land Cover Layers: CGLS-LC100 Collection 3 The Copernicus Global Land Service (CGLS) is earmarked as a component of the Land service to operate a multi-purpose service component that provides a series of bio-geophysical products on the status and evolution of land surface at global scale.
- Image ( 'COPERNICUS/Landcover/100m/Proba-V-C3/Global/2019' ) . select ( 'discrete classification' ); Map . setCenter ( - 88.6 , 26.4 , 1 ); Map . addLayer ( dataset , {}, 'Land Cover' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) dataset = ee .

