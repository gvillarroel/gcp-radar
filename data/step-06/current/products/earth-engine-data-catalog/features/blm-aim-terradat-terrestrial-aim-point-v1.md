---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T12:40:58.747Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "BLM AIM TerrADat Terrestrial AIM Point v1"
feature_slug: "blm-aim-terradat-terrestrial-aim-point-v1"
latest_feature_date: "2020-02-04"
deprecation_date: ""
coverage_status: "LOW"
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
Coverage: LOW

## Step 02 Summary

Provides point-based terrestrial ecological monitoring data from the BLM AIM TerrADat program.

## Extended Definition

Provides point-based terrestrial ecological monitoring data from the BLM AIM TerrADat program.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/BLM_AIM_v1_TerrADat_TerrestrialAIM](https://developers.google.com/earth-engine/datasets/catalog/BLM_AIM_v1_TerrADat_TerrestrialAIM)
- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- [https://developers.google.com/earth-engine/datasets/tags/ecosystems](https://developers.google.com/earth-engine/datasets/tags/ecosystems)

## Supporting Pages

### "BLM AIM TerrADat TerrestrialAIM Point v1 \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/BLM_AIM_v1_TerrADat_TerrestrialAIM](https://developers.google.com/earth-engine/datasets/catalog/BLM_AIM_v1_TerrADat_TerrestrialAIM)
- Source ID: `site-docs-root-2`
- Final score: 292
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Earth Engine Data Catalog All Datasets Send feedback BLM AIM TerrADat TerrestrialAIM Point v1 Stay organized with collections Save and categorize content based on your preferences.
- FeatureCollection ( 'BLM/AIM/v1/TerrADat/TerrestrialAIM' ); var woodyHeightStyle = function ( f ) { return setColor ( f , 'WoodyHgt Avg' , 0 , 100 , greens ); }; var bareSoilStyle = function ( f ) { return setColor ( f , 'BareSoilCover FH' , 0 , 100 , reds ); }; var treeHeight = fc . filter ( 'WoodyHgt Avg > 1' ). map ( woodyHeightStyle ); var bareSoil = fc . filter ( 'BareSoilCover FH > 1' ). map ( bareSoilStyle ); Map . addLayer ( bareSoil . style ({ styleProperty : 'style' , pointSize : 3 })); Map . addLayer ( treeHeight . style ({ styleProperty : 'style' , pointSize : 1 })); Map . setCenter ( - 110 , 40 , 6 ); Open in Code Editor Visualize as a FeatureView A FeatureView is a view-only, accelerated representation of a FeatureCollection .
- Filter . expression ( 'WoodyHgt Avg > 1' ), isVisible : true , color : { property : 'WoodyHgt Avg' , mode : 'linear' , palette : [ '00441b' , '00682a' , '37a055' , '5db96b' , 'aedea7' , 'e7f6e2' , 'f7fcf5' ], min : 0 , max : 100 } } ] }; fvLayer . setVisParams ( visParams ); fvLayer . setName ( 'Average woody plant height' ); Map . setCenter ( - 110 , 40 , 6 ); Map . add ( fvLayer ); Open in Code Editor BLM AIM TerrADat TerrestrialAIM Point v1 Since 2011, the Bureau of Land Management (BLM) has collected field information to inform land health through its Assessment Inventory and Monitoring (AIM) strategy.
- FeatureViewLayer ( 'BLM/AIM/v1/TerrADat/TerrestrialAIM FeatureView' ); var visParams = { isVisible : false , pointSize : 7 , rules : [ { filter : ee .

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- It includes vegetation, tree canopy, buildings, and … arctic dem elevation-topography geophysical pgc umn Australian 5M DEM The Digital Elevation Model (DEM) 5 meter Grid of Australia derived from LiDAR model represents a National 5 meter (bare earth) DEM which has been derived from some 236 individual LiDAR surveys between 2001 and 2015 covering an area in excess of 245,000 square kilometers. … australia dem elevation elevation-topography ga geophysical BLM AIM TerrADat TerrestrialAIM Point v1 Since 2011, the Bureau of Land Management (BLM) has collected field information to inform land health through its Assessment Inventory and Monitoring (AIM) strategy.
- The algorithm used for the MOD16 data product collection is based on the logic of the Penman-Monteith equation, which includes inputs of daily meteorological reanalysis data … 8-day evapotranspiration global mod16a2 modis nasa MOD16A2: MODIS Global Terrestrial Evapotranspiration 8-Day Global 1km The MOD16A2 V105 product provides information about 8-day global terrestrial evapotranspiration at 1km pixel resolution.
- Key Biodiversity Areas (KBAs) are 'sites contributing significantly to the global persistence of biodiversity’, in terrestrial, freshwater and marine ecosystems. … biodiversity boundaries ecosystems global iucn management WDOECM: Other Effective Area-based Conservation Measures (points) A geographically defined area other than a Protected Area, which is governed and managed in ways that achieve positive and sustained long-term outcomes for the in situ conservation of biodiversity, with associated ecosystem functions and services and where applicable, cultural, spiritual, socio-economic, and other locally … boundaries ecosystems iucn marine mpa protected WDOECM: Other Effective Area-based Conservation Measures (polygons) A geographically defined area other than a Protected Area, which is governed and managed in ways that achieve positive and sustained long-term outcomes for the in situ conservation of biodiversity, with associated ecosystem functions and services and where applicable, cultural, spiritual, socio-economic, and other locally … boundaries ecosystems iucn marine mpa protected WDPA: World Database on Protected Areas (points) The World Database on Protected Areas (WDPA) is the most up-to-date and complete source of information on protected areas, updated monthly with submissions from governments, non-governmental organizations, landowners, and communities.
- Total emissions for the survey … atmosphere climate edf emissions ghg methane MethaneAIR L4 Point Sources V1.1.0 This dataset provides data for high-emitting methane point source detections (kg/hr) over 13 oil and gas or coal extraction areas from Colorado, New Mexico, and Texas in the west to Pennsylvania, Ohio, and West Virginia in the east, plus three urban areas (New York City, … atmosphere climate edf edf-methanesat-ee emissions ghg MethaneAIR L4 Point Sources v1 This dataset provides data for high-emitting methane point source detections (kg/hr) over 13 oil and gas or coal extraction areas from Colorado, New Mexico, and Texas in the west to Pennsylvania, Ohio, and West Virginia in the east, plus three urban areas (New York City, … atmosphere climate edf emissions ghg methane MethaneSAT L3 Concentration Public Preview V1.0.0 This early "Public Preview" dataset provides geospatial data for the column-averaged dry-air mole fraction of methane in the atmosphere, "XCH4", retrieved from measurements by the MethaneSAT imaging spectrometer.

### "Datasets tagged ecosystems in Earth Engine \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/tags/ecosystems](https://developers.google.com/earth-engine/datasets/tags/ecosystems)
- Source ID: `site-docs-root-3`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- BLM AIM TerrADat TerrestrialAIM Point v1 Since 2011, the Bureau of Land Management (BLM) has collected field information to inform land health through its Assessment Inventory and Monitoring (AIM) strategy.
- Key Biodiversity Areas (KBAs) are 'sites contributing significantly to the global persistence of biodiversity’, in terrestrial, freshwater and marine ecosystems. … biodiversity boundaries ecosystems global iucn management WDOECM: Other Effective Area-based Conservation Measures (points) A geographically defined area other than a Protected Area, which is governed and managed in ways that achieve positive and sustained long-term outcomes for the in situ conservation of biodiversity, with associated ecosystem functions and services and where applicable, cultural, spiritual, socio-economic, and other locally … boundaries ecosystems iucn marine mpa protected WDOECM: Other Effective Area-based Conservation Measures (polygons) A geographically defined area other than a Protected Area, which is governed and managed in ways that achieve positive and sustained long-term outcomes for the in situ conservation of biodiversity, with associated ecosystem functions and services and where applicable, cultural, spiritual, socio-economic, and other locally … boundaries ecosystems iucn marine mpa protected WDPA: World Database on Protected Areas (points) The World Database on Protected Areas (WDPA) is the most up-to-date and complete source of information on protected areas, updated monthly with submissions from governments, non-governmental organizations, landowners, and communities.
- The BLM AIM data archive is … blm ecosystems hydrology range soil table INaturalist Multispecies Open Range Maps The iNaturalist Multispecies Range Dataset provides modeled geographic ranges for thousands of species.
- Page Summary outlined flag Multiple datasets provide information on ecosystems and protected areas, including BLM AIM terrestrial data, IUCN Global Ecosystem Typology, and World Database on Protected Areas (WDPA).

