---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:19.919Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "GFCC Tree Cover Multi-Year Global 30m"
feature_slug: "gfcc-tree-cover-multi-year-global-30m"
latest_feature_date: "2020-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog"
  - "https://developers.google.com/earth-engine/datasets/tags/forest-biomass"
  - "https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V-C3_Global"
keywords:
  - "gfcc"
  - "tree"
  - "cover"
  - "multi"
  - "year"
  - "global"
  - "30m"
  - "provides"
---

# GFCC Tree Cover Multi-Year Global 30m

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

Provides global tree cover change data at 30-meter resolution across multiple years.

## Extended Definition

Provides global tree cover change data at 30-meter resolution across multiple years.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- [https://developers.google.com/earth-engine/datasets/tags/forest-biomass](https://developers.google.com/earth-engine/datasets/tags/forest-biomass)
- [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V-C3_Global](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V-C3_Global)

## Supporting Pages

### "Copernicus Global Land Cover Layers: CGLS-LC100 Collection 3 \_|\_ Earth\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V-C3_Global](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V-C3_Global)
- Source ID: `site-docs-root-2`
- Final score: 191
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dataset Availability 2015-01-01T00:00:00Z–2019-12-31T23:59:59Z Dataset Producer Copernicus Earth Engine Snippet ee.ImageCollection("COPERNICUS/Landcover/100m/Proba-V-C3/Global") open in new Tags copernicus eea esa eu landcover landuse-landcover proba probav vito Description The Copernicus Global Land Service (CGLS) is earmarked as a component of the Land service to operate a multi-purpose service component that provides a series of bio-geophysical products on the status and evolution of land surface at global scale.
- Map () m . set center ( - 88.6 , 26.4 , 1 ) m . add layer ( dataset , {}, 'Land Cover' ) m Open in Code Editor Copernicus Global Land Cover Layers: CGLS-LC100 Collection 3 The Copernicus Global Land Service (CGLS) is earmarked as a component of the Land service to operate a multi-purpose service component that provides a series of bio-geophysical products on the status and evolution of land surface at global scale.
- See also: Algorithm Theoretical Basis Document Product User Manual Validation Report Bands Bands Pixel size: 100 meters (all bands) Name Units Min Max Pixel Size Description discrete classification 0 200 100 meters Land cover classification discrete classification-proba % 0 100 100 meters Quality indicator (classification probability) of the discrete classification forest type 0 5 100 meters Forest type for all pixels with tree percentage vegetation cover bigger than 1 % bare-coverfraction % 0 100 100 meters Percent vegetation cover for bare-sparse-vegetation land cover class crops-coverfraction % 0 100 100 meters Percent vegetation cover for cropland land cover class grass-coverfraction % 0 100 100 meters Percent vegetation cover for herbaceous vegetation land cover class moss-coverfraction % 0 100 100 meters Percent vegetation cover for moss and lichen land cover class shrub-coverfraction % 0 100 100 meters Percent vegetation cover for shrubland land cover class tree-coverfraction % 0 100 100 meters Percent vegetation cover for forest land cover class snow-coverfraction % 0 100 100 meters Percent ground cover for snow and ice land cover class urban-coverfraction % 0 100 100 meters Percent ground cover for built-up land cover class water-permanent-coverfraction % 0 100 100 meters Percent ground cover for permanent water land cover class water-seasonal-coverfraction % 0 100 100 meters Percent ground cover for seasonal water land cover class data-density-indicator 0 100 100 meters Data density indicator for algorithm input data change-confidence 0 3 100 meters This layer is only provided for years after the BaseYear 2015.
- The Dynamic Land Cover map at 100 m resolution (CGLS-LC100) is … COPERNICUS/Landcover/100m/Proba-V-C3/Global, copernicus,eea,esa,eu,landcover,landuse-landcover,proba,probav,vito 2015-01-01T00:00:00Z/2019-12-31T23:59:59Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.5281/zenodo.3939050 https://doi.org/10.5281/zenodo.3939050 Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The Copernicus Global Land Service provides global land cover maps (CGLS-LC100) at 100m resolution from 2015 to 2019, derived from PROBA-V 100m time-series data.

### "Datasets tagged forest-biomass in Earth Engine \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/tags/forest-biomass](https://developers.google.com/earth-engine/datasets/tags/forest-biomass)
- Source ID: `site-docs-root-3`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- See Simard et al. (2011) for details. canopy forest forest-biomass geophysical jpl nasa Global Forest Cover Change (GFCC) Tree Cover Multi-Year Global 30m The Landsat Vegetation Continuous Fields (VCF) tree cover layers contain estimates of the percentage of horizontal ground in each 30-m pixel covered by woody vegetation greater than 5 meters in height.
- The GEDI L4A Footprint Biomass product converts … elevation forest-biomass gedi larse nasa tree-cover Global 2020 Forest Classification for IPCC Aboveground Biomass Tier 1 Estimates, V1 This dataset provides classes of global forests delineated by status/condition in 2020 at approximately 30m resolution.
- EC JRC global map of forest cover 2020, V3 The global map of forest cover provides a spatially explicit representation of forest presence and absence for the year 2020 at 10m spatial resolution.
- To facilitate national land use planning and balancing the goals of economic development and maintenance of ecosystem services, a primary humid tropical forest map was created … forest forest-biomass global landsat-derived umd SCANFI: the Spatialized CAnadian National Forest Inventory data product1.2 This data publication contains a set of 30m resolution raster files representing 2020 Canadian wall-to-wall maps of broad land cover type, forest canopy height, degree of crown closure and aboveground tree biomass, along with species composition of several major tree species.

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 181
- Re-rank relevance: N/A

Evidence snippets:
- See Simard et al. (2011) for details. canopy forest forest-biomass geophysical jpl nasa Global Forest Cover Change (GFCC) Tree Cover Multi-Year Global 30m The Landsat Vegetation Continuous Fields (VCF) tree cover layers contain estimates of the percentage of horizontal ground in each 30-m pixel covered by woody vegetation greater than 5 meters in height.
- The Multivariate Adaptive Constructed Analogs (MACA) method is a statistical downscaling method which utilizes a training dataset (i.e. a meteorological observation dataset) to remove historical biases and match spatial patterns … climate conus geophysical idaho maca monthly MCD12C1.061 MODIS Land Cover Type Yearly Global 0.05 Deg CMG The Terra and Aqua combined Moderate Resolution Imaging Spectroradiometer (MODIS) Land Cover Climate Modeling Grid (CMG) (MCD12C1) Version 6.1 data product provides a spatially aggregated and reprojected version of the tiled MCD12Q1 Version 6.1 data product.
- Mosaicked burn severity images are compiled annually for each year by US State and the … eros fire forest gtac landcover landsat-derived Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density : Daily, Multi-Year Reprocessed Multi Observation Global Ocean Sea Surface Salinity and Sea Surface Density is an oceanographic product that provides daily, global, and gap-free Level-4 (L4) analyses of Sea Surface Salinity (SSS) and Sea Surface Density (SSD) at a high resolution of 1/8 degree.
- Designed to continuously represent Earth's terrestrial surface as a proportion of basic vegetation traits, it provides a gradation of three surface cover components: percent tree cover, percent … annual geophysical global landuse-landcover modis nasa MOD44W.005 Land Water Mask Derived From MODIS and SRTM The Global Water Mask uses the SWBD (SRTM Water Body Data) in combination with MODIS 250m data to create a complete global map of surface water at 250m spatial resolution, circa 2000-2002.

