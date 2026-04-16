---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:19.953Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "BLM AIM TerrADat Terrestrial AIM Point v1"
feature_slug: "blm-aim-terradat-terrestrial-aim-point-v1"
latest_feature_date: "2020-02-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/BLM_AIM_v1_TerrADat_TerrestrialAIM"
  - "https://developers.google.com/earth-engine/datasets/catalog"
  - "https://developers.google.com/earth-engine/datasets/tags/ecosystems"
keywords:
  - "blm"
  - "aim"
  - "terradat"
  - "terrestrial"
  - "point"
  - "v1"
  - "provides"
  - "based"
---

# BLM AIM TerrADat Terrestrial AIM Point v1

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

Provides point-based terrestrial ecological monitoring data from the BLM AIM TerrADat program.

## Extended Definition

Provides point-based terrestrial ecological monitoring data from the BLM AIM TerrADat program.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/BLM_AIM_v1_TerrADat_TerrestrialAIM](https://developers.google.com/earth-engine/datasets/catalog/BLM_AIM_v1_TerrADat_TerrestrialAIM)
- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- [https://developers.google.com/earth-engine/datasets/tags/ecosystems](https://developers.google.com/earth-engine/datasets/tags/ecosystems)

## Supporting Pages

### "BLM AIM TerrADat TerrestrialAIM Point v1 \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/BLM_AIM_v1_TerrADat_TerrestrialAIM](https://developers.google.com/earth-engine/datasets/catalog/BLM_AIM_v1_TerrADat_TerrestrialAIM)
- Source ID: `site-docs-root-2`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Earth Engine Data Catalog All Datasets Send feedback BLM AIM TerrADat TerrestrialAIM Point v1 Stay organized with collections Save and categorize content based on your preferences.
- FeatureCollection ( 'BLM/AIM/v1/TerrADat/TerrestrialAIM' ); var woodyHeightStyle = function ( f ) { return setColor ( f , 'WoodyHgt Avg' , 0 , 100 , greens ); }; var bareSoilStyle = function ( f ) { return setColor ( f , 'BareSoilCover FH' , 0 , 100 , reds ); }; var treeHeight = fc . filter ( 'WoodyHgt Avg > 1' ). map ( woodyHeightStyle ); var bareSoil = fc . filter ( 'BareSoilCover FH > 1' ). map ( bareSoilStyle ); Map . addLayer ( bareSoil . style ({ styleProperty : 'style' , pointSize : 3 })); Map . addLayer ( treeHeight . style ({ styleProperty : 'style' , pointSize : 1 })); Map . setCenter ( - 110 , 40 , 6 ); Open in Code Editor Visualize as a FeatureView A FeatureView is a view-only, accelerated representation of a FeatureCollection .
- Filter . expression ( 'WoodyHgt Avg > 1' ), isVisible : true , color : { property : 'WoodyHgt Avg' , mode : 'linear' , palette : [ '00441b' , '00682a' , '37a055' , '5db96b' , 'aedea7' , 'e7f6e2' , 'f7fcf5' ], min : 0 , max : 100 } } ] }; fvLayer . setVisParams ( visParams ); fvLayer . setName ( 'Average woody plant height' ); Map . setCenter ( - 110 , 40 , 6 ); Map . add ( fvLayer ); Open in Code Editor BLM AIM TerrADat TerrestrialAIM Point v1 Since 2011, the Bureau of Land Management (BLM) has collected field information to inform land health through its Assessment Inventory and Monitoring (AIM) strategy.
- FeatureViewLayer ( 'BLM/AIM/v1/TerrADat/TerrestrialAIM FeatureView' ); var visParams = { isVisible : false , pointSize : 7 , rules : [ { filter : ee .

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- Key Biodiversity Areas (KBAs) are 'sites contributing significantly to the global persistence of biodiversity’, in terrestrial, freshwater and marine ecosystems. … biodiversity boundaries ecosystems global iucn management WDOECM: Other Effective Area-based Conservation Measures (points) A geographically defined area other than a Protected Area, which is governed and managed in ways that achieve positive and sustained long-term outcomes for the in situ conservation of biodiversity, with associated ecosystem functions and services and where applicable, cultural, spiritual, socio-economic, and other locally … boundaries ecosystems iucn marine mpa protected WDOECM: Other Effective Area-based Conservation Measures (polygons) A geographically defined area other than a Protected Area, which is governed and managed in ways that achieve positive and sustained long-term outcomes for the in situ conservation of biodiversity, with associated ecosystem functions and services and where applicable, cultural, spiritual, socio-economic, and other locally … boundaries ecosystems iucn marine mpa protected WDPA: World Database on Protected Areas (points) The World Database on Protected Areas (WDPA) is the most up-to-date and complete source of information on protected areas, updated monthly with submissions from governments, non-governmental organizations, landowners, and communities.
- The product is based on the radiation-use efficiency concept and can be potentially used as inputs to data models to calculate terrestrial energy, carbon, water cycle processes, … 8-day global gpp modis nasa photosynthesis MOD17A2HGF.061: Terra Gross Primary Productivity 8-Day Global 500m The MOD17A2HGF Version 6.1 Gross Primary Productivity (GPP) product is a cumulative 8-day composite of values with 500 meter (m) pixel size based on the radiation use efficiency concept that can be potentially used as inputs to data models to calculate terrestrial energy, carbon, water … 8-day global gpp modis nasa photosynthesis MOD17A3HGF.061: Terra Net Primary Production Gap-Filled Yearly Global 500m The MOD17A3HGF V6.1 product provides information about annual Gross and Net Primary Productivity (GPP and NPP) at 500m pixel resolution.
- It includes vegetation, tree canopy, buildings, and … arctic dem elevation-topography geophysical pgc umn Australian 5M DEM The Digital Elevation Model (DEM) 5 meter Grid of Australia derived from LiDAR model represents a National 5 meter (bare earth) DEM which has been derived from some 236 individual LiDAR surveys between 2001 and 2015 covering an area in excess of 245,000 square kilometers. … australia dem elevation elevation-topography ga geophysical BLM AIM TerrADat TerrestrialAIM Point v1 Since 2011, the Bureau of Land Management (BLM) has collected field information to inform land health through its Assessment Inventory and Monitoring (AIM) strategy.
- The product is based on the radiation-use efficiency concept and can be potentially used as inputs to data models to calculate terrestrial energy, carbon, water cycle processes, and … 8-day aqua global gpp modis nasa MYD17A3HGF.061: Aqua Net Primary Production Gap-Filled Yearly Global 500m The MYD17A3HGF V6.1 product provides information about annual Gross and Net Primary Productivity (GPP and NPP) at 500m pixel resolution.

### "Datasets tagged ecosystems in Earth Engine \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/tags/ecosystems](https://developers.google.com/earth-engine/datasets/tags/ecosystems)
- Source ID: `site-docs-root-3`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- Key Biodiversity Areas (KBAs) are 'sites contributing significantly to the global persistence of biodiversity’, in terrestrial, freshwater and marine ecosystems. … biodiversity boundaries ecosystems global iucn management WDOECM: Other Effective Area-based Conservation Measures (points) A geographically defined area other than a Protected Area, which is governed and managed in ways that achieve positive and sustained long-term outcomes for the in situ conservation of biodiversity, with associated ecosystem functions and services and where applicable, cultural, spiritual, socio-economic, and other locally … boundaries ecosystems iucn marine mpa protected WDOECM: Other Effective Area-based Conservation Measures (polygons) A geographically defined area other than a Protected Area, which is governed and managed in ways that achieve positive and sustained long-term outcomes for the in situ conservation of biodiversity, with associated ecosystem functions and services and where applicable, cultural, spiritual, socio-economic, and other locally … boundaries ecosystems iucn marine mpa protected WDPA: World Database on Protected Areas (points) The World Database on Protected Areas (WDPA) is the most up-to-date and complete source of information on protected areas, updated monthly with submissions from governments, non-governmental organizations, landowners, and communities.
- BLM AIM TerrADat TerrestrialAIM Point v1 Since 2011, the Bureau of Land Management (BLM) has collected field information to inform land health through its Assessment Inventory and Monitoring (AIM) strategy.
- Specifically, ecoregions represent distinct assemblages … biodiversity conservation ecoregions ecosystems global table SBTN Natural Lands Map v1 The SBTN Natural Lands Map v1 is a 2020 baseline map of natural and non-natural land covers intended for use by companies setting science-based targets for nature, specifically the SBTN Land target #1: no conversion of natural ecosystems. "Natural" and "non-natural" definitions were adapted from … ecosystems landcover landuse-landcover wri SBTN Natural Lands Map v1.1 The SBTN Natural Lands Map v1.1 is a 2020 baseline map of natural and non-natural land covers intended for use by companies setting science-based targets for nature, specifically the SBTN Land target #1: no conversion of natural ecosystems. "Natural" and "non-natural" definitions were adapted from … ecosystems landcover landuse-landcover wri Species Distribution, Australia Mammals These species distribution model outputs, developed by Google in collaboration with QCIF and EcoCommons, represent estimates of species’ relative occurrence likelihoods (i.e., higher values indicate a higher likelihood that the species would be detected at a location, for a given survey methodology and given survey … biodiversity conservation ecosystems nature-trace pre-review publisher-dataset US EPA Ecoregions (Level III) The U.S.
- Ecoregions denote areas of general similarity in ecosystems and in the type, quality, and quantity of environmental … ecoregions ecosystems epa table USGS GAP Alaska 2001 The GAP/LANDFIRE National Terrestrial Ecosystems data represents a detailed vegetation and land cover classification for the Conterminous U.S., Alaska, Hawaii, and Puerto Rico.GAP/LF 2011 Ecosystems for the Conterminous U.S. is an update of the National Gap Analysis Program Land Cover Data - Version 2.2.

