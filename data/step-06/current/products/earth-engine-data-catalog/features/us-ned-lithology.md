---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.102Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "US NED Lithology"
feature_slug: "us-ned-lithology"
latest_feature_date: "2018-07-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/tags/geophysical"
  - "https://developers.google.com/earth-engine/datasets/catalog"
  - "https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V-C3_Global"
keywords:
  - "us"
  - "ned"
  - "lithology"
  - "layer"
---

# US NED Lithology

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

A US NED lithology layer.

## Extended Definition

A US NED lithology layer.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/tags/geophysical](https://developers.google.com/earth-engine/datasets/tags/geophysical)
- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V-C3_Global](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V-C3_Global)

## Supporting Pages

### "Datasets tagged geophysical in Earth Engine \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/tags/geophysical](https://developers.google.com/earth-engine/datasets/tags/geophysical)
- Source ID: `site-docs-root`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- It is based on the USGS's … aspect csp elevation elevation-topography ergo geophysical US Physiography The Physiography dataset represents the spatial intersection of landforms (available in EE as ERGo/1 0/US/landforms) and lithology (available in EE as ERGo/1 0/US/lithology) data layers.
- The US Physiography dataset represents the spatial intersection of landforms and lithology data layers, providing 247 unique combinations.
- The 3DEP data holdings serve as the elevation layer of The National Map and provide foundational elevation information for earth science studies and mapping applications in the United … 3dep dem elevation elevation-topography geophysical topography VJ114IMGTDL NRT Daily Raster: VIIRS (NOAA-20) Band 375m Active Fire NOAA-20 (JPSS-1) Visible Infrared Imaging Radiometer Suite (VIIRS) Active Fire detection product is based on the instrument's 375m nominal resolution data.
- For more information see the associated journal article: High-resolution mapping of global surface water and its … geophysical google jrc landsat-derived surface surface-ground-water JRC Global Surface Water Mapping Layers, v1.4 This dataset contains maps of the location and temporal distribution of surface water from 1984 to 2021 and provides statistics on the extent and change of those water surfaces.

### "Copernicus Global Land Cover Layers: CGLS-LC100 Collection 3 \_|\_ Earth\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V-C3_Global](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V-C3_Global)
- Source ID: `site-docs-root-2`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- See also: Algorithm Theoretical Basis Document Product User Manual Validation Report Bands Bands Pixel size: 100 meters (all bands) Name Units Min Max Pixel Size Description discrete classification 0 200 100 meters Land cover classification discrete classification-proba % 0 100 100 meters Quality indicator (classification probability) of the discrete classification forest type 0 5 100 meters Forest type for all pixels with tree percentage vegetation cover bigger than 1 % bare-coverfraction % 0 100 100 meters Percent vegetation cover for bare-sparse-vegetation land cover class crops-coverfraction % 0 100 100 meters Percent vegetation cover for cropland land cover class grass-coverfraction % 0 100 100 meters Percent vegetation cover for herbaceous vegetation land cover class moss-coverfraction % 0 100 100 meters Percent vegetation cover for moss and lichen land cover class shrub-coverfraction % 0 100 100 meters Percent vegetation cover for shrubland land cover class tree-coverfraction % 0 100 100 meters Percent vegetation cover for forest land cover class snow-coverfraction % 0 100 100 meters Percent ground cover for snow and ice land cover class urban-coverfraction % 0 100 100 meters Percent ground cover for built-up land cover class water-permanent-coverfraction % 0 100 100 meters Percent ground cover for permanent water land cover class water-seasonal-coverfraction % 0 100 100 meters Percent ground cover for seasonal water land cover class data-density-indicator 0 100 100 meters Data density indicator for algorithm input data change-confidence 0 3 100 meters This layer is only provided for years after the BaseYear 2015.
- Map () m . set center ( - 88.6 , 26.4 , 1 ) m . add layer ( dataset , {}, 'Land Cover' ) m Open in Code Editor Copernicus Global Land Cover Layers: CGLS-LC100 Collection 3 The Copernicus Global Land Service (CGLS) is earmarked as a component of the Land service to operate a multi-purpose service component that provides a series of bio-geophysical products on the status and evolution of land surface at global scale.
- Image ( 'COPERNICUS/Landcover/100m/Proba-V-C3/Global/2019' ) . select ( 'discrete classification' ); Map . setCenter ( - 88.6 , 26.4 , 1 ); Map . addLayer ( dataset , {}, 'Land Cover' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) dataset = ee .
- Home Earth Engine Data Catalog All Datasets Send feedback Copernicus Global Land Cover Layers: CGLS-LC100 Collection 3 Stay organized with collections Save and categorize content based on your preferences.

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- It is based on the USGS's … aspect csp elevation elevation-topography ergo geophysical US Physiography The Physiography dataset represents the spatial intersection of landforms (available in EE as ERGo/1 0/US/landforms) and lithology (available in EE as ERGo/1 0/US/lithology) data layers.
- The Global Administrative Unit Layers (GAUL) compiles and disseminates the best available information on administrative units for all the countries in the world, providing a contribution to the standardization of the spatial dataset representing administrative units. … borders county districts fao gaul infrastructure-boundaries FAO GAUL: Global Administrative Unit Layers 2015, Country Boundaries The Global Administrative Unit Layers (GAUL) compiles and disseminates the best available information on administrative units for all the countries in the world, providing a contribution to the standardization of the spatial dataset representing administrative units.
- Compared to other coarser resolution (≥ 1km) satellite fire detection products, the improved 375 m data provide greater response over fires of relatively small … eosdis fire firms geophysical hotspot lance VNP15A2H: LAI/FPAR 8-Day L4 Global 500m SIN Grid The Visible Infrared Imaging Radiometer Suite (VIIRS) Leaf Area Index (LAI) and Fraction of Photosynthetically Active Radiation (FPAR) Version 1 data product provides information about the vegetative canopy layer at 500 meter resolution (VNP15A2H).
- Along with the seven reflectance bands is a quality layer and four observation … 8-day global modis nasa satellite-imagery sr MOD09CMG.061 Terra Surface Reflectance Daily L3 Global 0.05 Deg CMG The MOD09CMG Version 6.1 product provides an estimate of the surface spectral reflectance of Terra Moderate Resolution Imaging Spectroradiometer (MODIS) Bands 1 through 7, resampled to 5600 meter pixel resolution and corrected for atmospheric conditions such as gasses, aerosols, and Rayleigh scattering.

