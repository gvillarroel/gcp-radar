---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T12:40:58.840Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "US NED Physiographic Diversity"
feature_slug: "us-ned-physiographic-diversity"
latest_feature_date: "2018-07-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/datasets/tags/geophysical"
  - "https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V-C3_Global"
  - "https://developers.google.com/earth-engine/datasets/catalog"
keywords:
  - "us"
  - "ned"
  - "physiographic"
  - "diversity"
  - "layer"
---

# US NED Physiographic Diversity

Product: Earth Engine Data Catalog
Coverage: LOW

## Step 02 Summary

A US NED physiographic diversity layer.

## Extended Definition

A US NED physiographic diversity layer.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/datasets/tags/geophysical](https://developers.google.com/earth-engine/datasets/tags/geophysical)
- [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V-C3_Global](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V-C3_Global)
- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)

## Supporting Pages

### "Datasets tagged geophysical in Earth Engine \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/tags/geophysical](https://developers.google.com/earth-engine/datasets/tags/geophysical)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- The Conservation Science Partners (CSP) Ecologically Relevant … aspect csp elevation elevation-topography ergo geophysical US NED Physiographic Diversity The Physiographic Diversity dataset provides an index of the diversity of physiographic types.
- The US NED Physiographic Diversity dataset provides an index of the diversity of physiographic types calculated using the Shannon diversity index at multiple scales based on the USGS's 10m NED DEM.
- The Conservation Science Partners (CSP) Ecologically Relevant Geomorphology (ERGo) Datasets, Landforms and Physiography contain detailed, multi-scale data on landforms and physiographic … aspect csp elevation elevation-topography ergo geophysical US NED CHILI (Continuous Heat-Insolation Load Index) CHILI is a surrogate for effects of insolation and topographic shading on evapotranspiration represented by calculating insolation at early afternoon, sun altitude equivalent to equinox.
- It expresses the logic that a higher variety of topo-climate niches should support higher diversity (especially plant) and support species persistence given climatic … aspect csp elevation elevation-topography ergo geophysical US NED mTPI (Multi-Scale Topographic Position Index) The mTPI distinguishes ridge from valley forms.

### "Copernicus Global Land Cover Layers: CGLS-LC100 Collection 3 \_|\_ Earth\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V-C3_Global](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_Landcover_100m_Proba-V-C3_Global)
- Source ID: `site-docs-root-2`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- See also: Algorithm Theoretical Basis Document Product User Manual Validation Report Bands Bands Pixel size: 100 meters (all bands) Name Units Min Max Pixel Size Description discrete classification 0 200 100 meters Land cover classification discrete classification-proba % 0 100 100 meters Quality indicator (classification probability) of the discrete classification forest type 0 5 100 meters Forest type for all pixels with tree percentage vegetation cover bigger than 1 % bare-coverfraction % 0 100 100 meters Percent vegetation cover for bare-sparse-vegetation land cover class crops-coverfraction % 0 100 100 meters Percent vegetation cover for cropland land cover class grass-coverfraction % 0 100 100 meters Percent vegetation cover for herbaceous vegetation land cover class moss-coverfraction % 0 100 100 meters Percent vegetation cover for moss and lichen land cover class shrub-coverfraction % 0 100 100 meters Percent vegetation cover for shrubland land cover class tree-coverfraction % 0 100 100 meters Percent vegetation cover for forest land cover class snow-coverfraction % 0 100 100 meters Percent ground cover for snow and ice land cover class urban-coverfraction % 0 100 100 meters Percent ground cover for built-up land cover class water-permanent-coverfraction % 0 100 100 meters Percent ground cover for permanent water land cover class water-seasonal-coverfraction % 0 100 100 meters Percent ground cover for seasonal water land cover class data-density-indicator 0 100 100 meters Data density indicator for algorithm input data change-confidence 0 3 100 meters This layer is only provided for years after the BaseYear 2015.
- Map () m . set center ( - 88.6 , 26.4 , 1 ) m . add layer ( dataset , {}, 'Land Cover' ) m Open in Code Editor Copernicus Global Land Cover Layers: CGLS-LC100 Collection 3 The Copernicus Global Land Service (CGLS) is earmarked as a component of the Land service to operate a multi-purpose service component that provides a series of bio-geophysical products on the status and evolution of land surface at global scale.
- Image ( 'COPERNICUS/Landcover/100m/Proba-V-C3/Global/2019' ) . select ( 'discrete classification' ); Map . setCenter ( - 88.6 , 26.4 , 1 ); Map . addLayer ( dataset , {}, 'Land Cover' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) dataset = ee .
- This continuous classification scheme may depict areas of heterogeneous land cover better than the standard classification scheme and, as such, can be tailored for application use (e.g. forest monitoring, crop monitoring, biodiversity and conservation, monitoring environment and security in Africa, climate modelling, etc.).

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 104
- Re-rank relevance: N/A

Evidence snippets:
- The Conservation Science Partners (CSP) Ecologically Relevant … aspect csp elevation elevation-topography ergo geophysical US NED Physiographic Diversity The Physiographic Diversity dataset provides an index of the diversity of physiographic types.
- Key Biodiversity Areas (KBAs) are 'sites contributing significantly to the global persistence of biodiversity’, in terrestrial, freshwater and marine ecosystems. … biodiversity boundaries ecosystems global iucn management WDOECM: Other Effective Area-based Conservation Measures (points) A geographically defined area other than a Protected Area, which is governed and managed in ways that achieve positive and sustained long-term outcomes for the in situ conservation of biodiversity, with associated ecosystem functions and services and where applicable, cultural, spiritual, socio-economic, and other locally … boundaries ecosystems iucn marine mpa protected WDOECM: Other Effective Area-based Conservation Measures (polygons) A geographically defined area other than a Protected Area, which is governed and managed in ways that achieve positive and sustained long-term outcomes for the in situ conservation of biodiversity, with associated ecosystem functions and services and where applicable, cultural, spiritual, socio-economic, and other locally … boundaries ecosystems iucn marine mpa protected WDPA: World Database on Protected Areas (points) The World Database on Protected Areas (WDPA) is the most up-to-date and complete source of information on protected areas, updated monthly with submissions from governments, non-governmental organizations, landowners, and communities.
- For more information, please see the Spain orthophotos documentation orthophotos rgb Species Distribution, Australia Mammals These species distribution model outputs, developed by Google in collaboration with QCIF and EcoCommons, represent estimates of species’ relative occurrence likelihoods (i.e., higher values indicate a higher likelihood that the species would be detected at a location, for a given survey methodology and given survey … biodiversity conservation ecosystems nature-trace pre-review publisher-dataset TCB: Malaria Atlas Project Gap-Filled Tasseled Cap Brightness (8-Daily 1km) This gap-filled Tasseled Cap Brightness (TCB) dataset was created by applying the tasseled-cap equations defined in Lobser and Cohen (2007) to MODIS BRDF-corrected imagery (MCD43B4).
- The Conservation Science Partners (CSP) Ecologically Relevant Geomorphology (ERGo) Datasets, Landforms and Physiography contain detailed, multi-scale data on landforms and physiographic … aspect csp elevation elevation-topography ergo geophysical US NED CHILI (Continuous Heat-Insolation Load Index) CHILI is a surrogate for effects of insolation and topographic shading on evapotranspiration represented by calculating insolation at early afternoon, sun altitude equivalent to equinox.

