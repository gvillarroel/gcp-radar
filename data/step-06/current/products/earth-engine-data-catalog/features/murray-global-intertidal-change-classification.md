---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.059Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "Murray Global Intertidal Change Classification"
feature_slug: "murray-global-intertidal-change-classification"
latest_feature_date: "2018-12-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/tags/surface-ground-water"
  - "https://developers.google.com/earth-engine/datasets/catalog"
  - "https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V-C3_Global"
keywords:
  - "murray"
  - "global"
  - "intertidal"
  - "change"
  - "classification"
  - "layer"
  - "dataset"
---

# Murray Global Intertidal Change Classification

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

A classification layer for the Murray Global Intertidal Change dataset.

## Extended Definition

A classification layer for the Murray Global Intertidal Change dataset.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/tags/surface-ground-water](https://developers.google.com/earth-engine/datasets/tags/surface-ground-water)
- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V-C3_Global](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V-C3_Global)

## Supporting Pages

### "Datasets tagged surface-ground-water in Earth Engine \_|\_ Earth Engine\

- URL: [https://developers.google.com/earth-engine/datasets/tags/surface-ground-water](https://developers.google.com/earth-engine/datasets/tags/surface-ground-water)
- Source ID: `site-docs-root-3`
- Final score: 205
- Re-rank relevance: N/A

Evidence snippets:
- A series of masks are applied to address known issues caused by terrain shadow, burn scars, cloudiness, or ice cover … geophysical mod44w modis nasa srtm surface-ground-water Murray Global Intertidal Change Classification The Murray Global Intertidal Change Dataset contains global maps of tidal flat ecosystems produced via a supervised classification of 707,528 Landsat Archive images.
- The … coastal google intertidal landsat-derived murray surface-ground-water Murray Global Intertidal Change QA Pixel Count The Murray Global Intertidal Change Dataset contains global maps of tidal flat ecosystems produced via a supervised classification of 707,528 Landsat Archive images.
- The … coastal google intertidal landsat-derived murray surface-ground-water Murray Global Intertidal Change Data Mask The Murray Global Intertidal Change Dataset contains global maps of tidal flat ecosystems produced via a supervised classification of 707,528 Landsat Archive images.
- The … coastal google intertidal landsat-derived murray surface-ground-water Murray Global Tidal Wetland Change v1.0 (1999-2019) The Murray Global Tidal Wetland Change Dataset contains maps of the global extent of tidal wetlands and their change.

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 195
- Re-rank relevance: N/A

Evidence snippets:
- The … coastal google intertidal landsat-derived murray surface-ground-water Murray Global Intertidal Change QA Pixel Count The Murray Global Intertidal Change Dataset contains global maps of tidal flat ecosystems produced via a supervised classification of 707,528 Landsat Archive images.
- The … coastal google intertidal landsat-derived murray surface-ground-water Murray Global Intertidal Change Data Mask The Murray Global Intertidal Change Dataset contains global maps of tidal flat ecosystems produced via a supervised classification of 707,528 Landsat Archive images.
- This product is generated … copernicus marine oceans Murray Global Intertidal Change Classification The Murray Global Intertidal Change Dataset contains global maps of tidal flat ecosystems produced via a supervised classification of 707,528 Landsat Archive images.
- The … coastal google intertidal landsat-derived murray surface-ground-water Murray Global Tidal Wetland Change v1.0 (1999-2019) The Murray Global Tidal Wetland Change Dataset contains maps of the global extent of tidal wetlands and their change.

### "Copernicus Global Land Cover Layers: CGLS-LC100 Collection 3 \_|\_ Earth\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V-C3_Global](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V-C3_Global)
- Source ID: `site-docs-root-2`
- Final score: 167
- Re-rank relevance: N/A

Evidence snippets:
- Image ( 'COPERNICUS/Landcover/100m/Proba-V-C3/Global/2019' ) . select ( 'discrete classification' ); Map . setCenter ( - 88.6 , 26.4 , 1 ); Map . addLayer ( dataset , {}, 'Land Cover' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) dataset = ee .
- See also: Algorithm Theoretical Basis Document Product User Manual Validation Report Bands Bands Pixel size: 100 meters (all bands) Name Units Min Max Pixel Size Description discrete classification 0 200 100 meters Land cover classification discrete classification-proba % 0 100 100 meters Quality indicator (classification probability) of the discrete classification forest type 0 5 100 meters Forest type for all pixels with tree percentage vegetation cover bigger than 1 % bare-coverfraction % 0 100 100 meters Percent vegetation cover for bare-sparse-vegetation land cover class crops-coverfraction % 0 100 100 meters Percent vegetation cover for cropland land cover class grass-coverfraction % 0 100 100 meters Percent vegetation cover for herbaceous vegetation land cover class moss-coverfraction % 0 100 100 meters Percent vegetation cover for moss and lichen land cover class shrub-coverfraction % 0 100 100 meters Percent vegetation cover for shrubland land cover class tree-coverfraction % 0 100 100 meters Percent vegetation cover for forest land cover class snow-coverfraction % 0 100 100 meters Percent ground cover for snow and ice land cover class urban-coverfraction % 0 100 100 meters Percent ground cover for built-up land cover class water-permanent-coverfraction % 0 100 100 meters Percent ground cover for permanent water land cover class water-seasonal-coverfraction % 0 100 100 meters Percent ground cover for seasonal water land cover class data-density-indicator 0 100 100 meters Data density indicator for algorithm input data change-confidence 0 3 100 meters This layer is only provided for years after the BaseYear 2015.
- Can be either fresh or salt-water bodies. forest type Class Table Value Color Description 0 #282828 Unknown 1 #666000 Evergreen needle leaf 2 #009900 Evergreen broad leaf 3 #70663e Deciduous needle leaf 4 #a0dc00 Deciduous broad leaf 5 #929900 Mix of forest types Image Properties Image Properties Name Type Description discrete classification class names STRING LIST Land cover class names discrete classification class palette STRING LIST Land cover class palette discrete classification class values INT LIST Value of the land cover classification. forest type class names STRING LIST forest cover class names forest type class palette STRING LIST forest cover class palette forest type class values INT LIST forest cover class values Terms of Use Terms of Use As official product of the global component of the Copernicus Land Service, access to this land cover dataset is fully free and open to all users.
- Map () m . set center ( - 88.6 , 26.4 , 1 ) m . add layer ( dataset , {}, 'Land Cover' ) m Open in Code Editor Copernicus Global Land Cover Layers: CGLS-LC100 Collection 3 The Copernicus Global Land Service (CGLS) is earmarked as a component of the Land service to operate a multi-purpose service component that provides a series of bio-geophysical products on the status and evolution of land surface at global scale.

