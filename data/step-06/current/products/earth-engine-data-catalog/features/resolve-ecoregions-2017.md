---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.151Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "RESOLVE/ECOREGIONS/2017"
feature_slug: "resolve-ecoregions-2017"
latest_feature_date: "2018-04-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/RESOLVE_ECOREGIONS_2017"
  - "https://developers.google.com/earth-engine/guides/best_practices"
  - "https://developers.google.com/earth-engine/datasets/tags/ecosystems"
keywords:
  - "resolve"
  - "ecoregions"
  - "2017"
  - "global"
  - "dataset"
---

# RESOLVE/ECOREGIONS/2017

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

A global ecoregions dataset for 2017.

## Extended Definition

A global ecoregions dataset for 2017.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/RESOLVE_ECOREGIONS_2017](https://developers.google.com/earth-engine/datasets/catalog/RESOLVE_ECOREGIONS_2017)
- [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- [https://developers.google.com/earth-engine/datasets/tags/ecosystems](https://developers.google.com/earth-engine/datasets/tags/ecosystems)

## Supporting Pages

### RESOLVE Ecoregions 2017 | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/RESOLVE_ECOREGIONS_2017](https://developers.google.com/earth-engine/datasets/catalog/RESOLVE_ECOREGIONS_2017)
- Source ID: `feature-recovery-direct-http`
- Final score: 333
- Re-rank relevance: N/A

Evidence snippets:
- Specifically, ecoregions represent distinct assemblages of biodiversity-all taxa, not just … RESOLVE/ECOREGIONS/2017, biodiversity,conservation,ecoregions,ecosystems,global,table 2017-04-05T00:00:00Z/2017-04-05T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],["The 2017 RESOLVE Ecoregions dataset maps 846 terrestrial ecoregions, representing distinct biodiversity assemblages.
- Dataset Availability 2017-04-05T00:00:00Z–2017-04-05T00:00:00Z Dataset Producer RESOLVE Biodiversity and Wildlife Solutions Earth Engine Snippet FeatureCollection ee.FeatureCollection("RESOLVE/ECOREGIONS/2017") open_in_new FeatureView ui.Map.FeatureViewLayer("RESOLVE/ECOREGIONS/2017_FeatureView") open_in_new Tags biodiversity conservation ecoregions ecosystems global table habitats protection resolve Description The RESOLVE Ecoregions dataset, updated in 2017, offers a depiction of the 846 terrestrial ecoregions that represent our living planet.
- FeatureViewLayer ( 'RESOLVE/ECOREGIONS/2017_FeatureView' ); var visParams = { opacity : 1 , polygonFillColor : { property : 'NNH_NAME' , categories : [ [ 'Half Protected' , 'blue' ], [ 'Nature Could Reach Half Protected' , 'green' ], [ 'Nature Could Recover' , 'yellow' ], [ 'Nature Imperiled' , 'orange' ] ], defaultValue : 'lightgrey' } }; fvLayer . setVisParams ( visParams ); fvLayer . setName ( 'Ecoregions (Nature Needs Half category)' ); Map . setCenter ( 16 , 49 , 4 ); Map . add ( fvLayer ); Open in Code Editor RESOLVE Ecoregions 2017 The RESOLVE Ecoregions dataset, updated in 2017, offers a depiction of the 846 terrestrial ecoregions that represent our living planet.
- FeatureCollection ( 'RESOLVE/ECOREGIONS/2017' ); // patch updated colors var colorUpdates = [ { ECO_ID : 204 , COLOR : '#B3493B' }, { ECO_ID : 245 , COLOR : '#267400' }, { ECO_ID : 259 , COLOR : '#004600' }, { ECO_ID : 286 , COLOR : '#82F178' }, { ECO_ID : 316 , COLOR : '#E600AA' }, { ECO_ID : 453 , COLOR : '#5AA500' }, { ECO_ID : 317 , COLOR : '#FDA87F' }, { ECO_ID : 763 , COLOR : '#A93800' }, ]; // loop over all other features and create a new style property for styling // later on var ecoRegions = ecoRegions . map ( function ( f ) { var color = f . get ( 'COLOR' ); return f . set ({ style : { color : color , width : 0 }}); }); // make styled features for the regions we need to update colors for, // then strip them from the main asset and merge in the new feature for ( var i = 0 ; i < colorUpdates . length ; i ++ ) { colorUpdates [ i ]. layer = ecoRegions . filterMetadata ( 'ECO_ID' , 'equals' , colorUpdates [ i ].

### Coding Best Practices \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- Source ID: `site-docs-reference-3`
- Final score: 139
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- FeatureCollection ( 'RESOLVE/ECOREGIONS/2017' ); var complexCollection = ecoregions . limit ( 10 ); Map . centerObject ( complexCollection ); Map . addLayer ( complexCollection ); var expensiveOps = complexCollection . map ( function ( f ) { return f . buffer ( 10000 , 200 ). bounds ( 200 ); }); Map . addLayer ( expensiveOps , {}, 'expensiveOps' ); Don't use a ridiculously small scale with reduceToVectors() If you want to convert a raster to a vector, use an appropriate scale.
- FeatureCollection ( 'RESOLVE/ECOREGIONS/2017' ); var image = ee .
- FeatureCollection ( 'RESOLVE/ECOREGIONS/2017' ); var image = ee .
- ImageCollection ( 'LANDSAT/LC08/C02/T1 L2' ) . map ( prepSrL8 ); // Create two annual cloud-free composites. var composite1 = collection . filterDate ( '2015-01-01' , '2015-12-31' ). median (); var composite2 = collection . filterDate ( '2017-01-01' , '2017-12-31' ). median (); // We want a strtatified sample of this stack. var stack = composite1 . addBands ( composite2 ) . float (); // Export the smallest size possible. // Export the image.

### "Datasets tagged ecosystems in Earth Engine \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/tags/ecosystems](https://developers.google.com/earth-engine/datasets/tags/ecosystems)
- Source ID: `site-docs-root-3`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- PNV is useful … ecosystems envirometrix opengeohub openlandmap potential RESOLVE Ecoregions 2017 The RESOLVE Ecoregions dataset, updated in 2017, offers a depiction of the 846 terrestrial ecoregions that represent our living planet.
- Specifically, ecoregions represent distinct assemblages … biodiversity conservation ecoregions ecosystems global table SBTN Natural Lands Map v1 The SBTN Natural Lands Map v1 is a 2020 baseline map of natural and non-natural land covers intended for use by companies setting science-based targets for nature, specifically the SBTN Land target #1: no conversion of natural ecosystems. "Natural" and "non-natural" definitions were adapted from … ecosystems landcover landuse-landcover wri SBTN Natural Lands Map v1.1 The SBTN Natural Lands Map v1.1 is a 2020 baseline map of natural and non-natural land covers intended for use by companies setting science-based targets for nature, specifically the SBTN Land target #1: no conversion of natural ecosystems. "Natural" and "non-natural" definitions were adapted from … ecosystems landcover landuse-landcover wri Species Distribution, Australia Mammals These species distribution model outputs, developed by Google in collaboration with QCIF and EcoCommons, represent estimates of species’ relative occurrence likelihoods (i.e., higher values indicate a higher likelihood that the species would be detected at a location, for a given survey methodology and given survey … biodiversity conservation ecosystems nature-trace pre-review publisher-dataset US EPA Ecoregions (Level III) The U.S.
- The top three levels (realms, functional biomes, … ecosystem ecosystems global table OpenLandMap Potential Distribution of Biomes Potential Natural Vegetation biomes global predictions of classes (based on predictions using the BIOMES 6000 dataset's 'current biomes' category.) Potential Natural Vegetation (PNV) is the vegetation cover in equilibrium with climate that would exist at a given location non-impacted by human activities.
- These datasets enable large-scale biodiversity analyses, … biodiversity ecosystems range species IUCN Global Ecosystem Typology Level 3: 1.0 The Global Ecosystem Typology is a taxonomy of ecosystems based on their unique characteristics.

