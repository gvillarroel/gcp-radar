---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:19.518Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "USFS/GTAC/TreeMap/v2016"
feature_slug: "usfs-gtac-treemap-v2016"
latest_feature_date: "2023-12-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/USFS_GTAC_TreeMap_v2016"
  - "https://developers.google.com/earth-engine/datasets/catalog"
  - "https://developers.google.com/earth-engine/datasets/tags/landcover"
keywords:
  - "usfs"
  - "gtac"
  - "treemap"
  - "v2016"
  - "maps"
  - "forest"
  - "attributes"
  - "conterminous"
---

# USFS/GTAC/TreeMap/v2016

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

USFS TreeMap v2016 maps forest attributes in the conterminous United States.

## Extended Definition

USFS TreeMap v2016 maps forest attributes in the conterminous United States.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/USFS_GTAC_TreeMap_v2016](https://developers.google.com/earth-engine/datasets/catalog/USFS_GTAC_TreeMap_v2016)
- [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- [https://developers.google.com/earth-engine/datasets/tags/landcover](https://developers.google.com/earth-engine/datasets/tags/landcover)

## Supporting Pages

### USFS TreeMap v2016 (Conterminous United States) | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/USFS_GTAC_TreeMap_v2016](https://developers.google.com/earth-engine/datasets/catalog/USFS_GTAC_TreeMap_v2016)
- Source ID: `feature-recovery-direct-http`
- Final score: 396
- Re-rank relevance: N/A

Evidence snippets:
- ImageCollection ( 'USFS/GTAC/TreeMap/v2016' ); // Get the 2016 image var tm2016 = dataset . filterDate ( '2016' , '2017' ). first (); // 'Official' TreeMap 2016 palettes var bamako = [ '00404d' , '134b42' , '265737' , '3a652a' , '52741c' , '71870b' , '969206' , 'c5ae32' , 'e7cd68' , 'ffe599' ]; var bamako_r = JSON . parse ( JSON . stringify ( bamako )). reverse (); var lajolla = [ 'ffffcc' , 'fbec9a' , 'f4cc68' , 'eca855' , 'e48751' , 'd2624d' , 'a54742' , '73382f' , '422818' , '1a1a01' ]; var lajolla_r = JSON . parse ( JSON . stringify ( lajolla )). reverse (); var imola = [ '1a33b3' , '2446a9' , '2e599f' , '396b94' , '497b85' , '60927b' , '7bae74' , '98cb6d' , 'c4ea67' , 'ffff66' ]; var imola_r = JSON . parse ( JSON . stringify ( imola )). reverse (); // Select all 22 attributes var alstk = tm2016 . select ( 'ALSTK' ); var balive = tm2016 . select ( 'BALIVE' ); var canopypct = tm2016 . select ( 'CANOPYPCT' ); var carbon_d = tm2016 . select ( 'CARBON_D' ); var carbon_dwn = tm2016 . select ( 'CARBON_DWN' ); var carbon_l = tm2016 . select ( 'CARBON_L' ); var drybio_d = tm2016 . select ( 'DRYBIO_D' ); var drybio_l = tm2016 . select ( 'DRYBIO_L' ); var fldszcd = tm2016 . select ( 'FLDSZCD' ); var fldtypcd = tm2016 . select ( 'FLDTYPCD' ); var fortypcd = tm2016 . select ( 'FORTYPCD' ); var gsstk = tm2016 . select ( 'GSSTK' ); var qmd_rmrs = tm2016 . select ( 'QMD_RMRS' ); var sdipct_rmrs = tm2016 . select ( 'SDIPCT_RMRS' ); var standht = tm2016 . select ( 'STANDHT' ); var stdszcd = tm2016 . select ( 'STDSZCD' ); var tpa_dead = tm2016 . select ( 'TPA_DEAD' ); var tpa_live = tm2016 . select ( 'TPA_LIVE' ); var value = tm2016 . select ( 'Value' ); var volbfnet_l = tm2016 . select ( 'VOLBFNET_L' ); var volcfnet_d = tm2016 . select ( 'VOLCFNET_D' ); var volcfnet_l = tm2016 . select ( 'VOLCFNET_L' ); // Add all attributes to the map with the 'official' visualization Map . addLayer ( alstk , { 'min' : 0 , 'max' : 100 , 'palette' : bamako_r }, 'ALSTK: All-Live-Tree Stocking (percent)' , false ); Map . addLayer ( balive , { 'min' : 24 , 'max' : 217 , 'palette' : bamako_r }, 'BALIVE: Live Tree Basal Area (ft²)' , false ); Map . addLayer ( canopypct , { 'min' : 0 , 'max' : 100 , 'palette' : bamako_r }, 'CANOPYPCT: Live Canopy Cover (percent)' , false ); Map . addLayer ( carbon_d , { 'min' : 0 , 'max' : 9 , 'palette' : lajolla }, 'CARBON_D: Carbon, Standing Dead (tons/acre)' , false ); Map . addLayer ( carbon_dwn , { 'min' : 0 , 'max' : 7 , 'palette' : lajolla }, 'CARBON_DWN: Carbon, Down Dead (tons/acre)' , false ); Map . addLayer ( carbon_l , { 'min' : 2 , 'max' : 59 , 'palette' : lajolla_r }, 'CARBON_L: Carbon, Live Above Ground (tons/acre)' , false ); Map . addLayer ( drybio_d , { 'min' : 0 , 'max' : 10 , 'palette' : lajolla }, 'DRYBIO_D: Dry Standing Dead Tree Biomass, Above Ground (tons/acre)' , false ); Map . addLayer ( drybio_l , { 'min' : 4 , 'max' : 118 , 'palette' : lajolla_r }, 'DRYBIO_L: Dry Live Tree Biomass, Above Ground (tons/acre)' , false ); Map . addLayer ( fldszcd , {}, 'FLDSZCD: Field Stand-Size Class Code' , false ); Map . addLayer ( fldtypcd , {}, 'FLDTYPCD: Field Forest Type Code' ); Map . addLayer ( fortypcd , {}, 'FORTYPCD: Algorithm Forest Type Code' , false ); Map . addLayer ( gsstk , { 'min' : 0 , 'max' : 100 , 'palette' : bamako_r }, 'GSSTK: Growing-Stock Stocking (percent)' , false ); Map . addLayer ( qmd_rmrs , { 'min' : 2 , 'max' : 25 , 'palette' : bamako_r }, 'QMD_RMRS: Stand Quadratic Mean Diameter (in)' , false ); Map . addLayer ( sdipct_rmrs , { 'min' : 6 , 'max' : 99 , 'palette' : bamako_r }, 'SDIPCT_RMRS: Stand Density Index (percent of maximum)' , false ); Map . addLayer ( standht , { 'min' : 23 , 'max' : 194 , 'palette' : bamako_r }, 'STANDHT: Height of Dominant Trees (ft)' , false ); Map . addLayer ( stdszcd , {}, 'STDSZCD: Algorithm Stand-Size Class Code' , false ); Map . addLayer ( tpa_dead , { 'min' : 38 , 'max' : 126 , 'palette' : bamako }, 'TPA_DEAD: Dead Trees Per Acre' , false ); Map . addLayer ( tpa_live , { 'min' : 252 , 'max' : 1666 , 'palette' : bamako_r }, 'TPA_LIVE: Live Trees Per Acre' , false ); Map . addLayer ( value . randomVisualizer (), {}, 'Value: TreeMap ID' , false ); Map . addLayer ( volbfnet_l , { 'min' : 441 , 'max' : 36522 , 'palette' : imola_r }, 'VOLBFNET_L: Volume, Live (sawlog-board-ft/acre)' , false ); Map . addLayer ( volcfnet_d , { 'min' : 5 , 'max' : 1326 , 'palette' : imola_r }, 'VOLCFNET_D: Volume, Standing Dead (ft³/acre)' , false ); Map . addLayer ( volcfnet_l , { 'min' : 137 , 'max' : 5790 , 'palette' : imola_r }, 'VOLCFNET_L: Volume, Live (ft³/acre)' , false ); // Set basemap Map . setOptions ( 'TERRAIN' ); // Center map on CONUS Map . setCenter ( - 95.712891 , 38 , 5 ); Open in Code Editor USFS TreeMap v2016 (Conterminous United States) This product is part of the TreeMap data suite.
- TreeMap v2016 contains one image, a 22-band 30 x 30m resolution … USFS/GTAC/TreeMap/v2016, biomass,carbon,climate-change,conus,forest,forest-biomass,forest-inventory-and-analysis,forest-type,gtac,landcover,landfire,redcastle-resources,tree-cover,usfs,vegetation 2016-01-01T00:00:00Z/2017-01-01T00:00:00Z 22.76862 -128.97722 51.64968 -65.25445 Google Earth Engine https://developers.google.com/earth-engine/datasets Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],[],[],[]] GitHub Earth Engine on GitHub Medium Follow our blog on Medium GIS Stack Exchange Ask questions using the google-earth-engine tag Twitter Follow @googleearth on Twitter Videos Earth Engine on YouTube Connect Blog Bluesky Instagram LinkedIn X (Twitter) YouTube Programs Google Developer Program Google Developer Groups Google Developer Experts Accelerators Google Cloud & NVIDIA Developer consoles Google API Console Google Cloud Platform Console Google Play Console Firebase Console Actions on Google Console Cast SDK Developer Console Chrome Web Store Dashboard Google Home Developer Console Android Chrome Firebase Google Cloud Platform Google AI All products Terms Privacy Manage cookies English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어
- Dataset Availability 2016-01-01T00:00:00Z–2017-01-01T00:00:00Z Dataset Producer USDA Forest Service (USFS) Geospatial Technology and Applications Center (GTAC) Earth Engine Snippet ee.ImageCollection("USFS/GTAC/TreeMap/v2016") open_in_new Tags biomass carbon climate-change conus forest forest-biomass forest-inventory-and-analysis forest-type gtac landcover landfire redcastle-resources tree-cover usfs vegetation treemap Description This product is part of the TreeMap data suite.
- USFS TreeMap v2016 (Conterminous United States) | Earth Engine Data Catalog | Google for Developers Skip to main content Earth Engine Data Catalog / English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Home Categories All Datasets All Tags Landsat MODIS Sentinel Publisher Community API Docs Dataset Status Changelog Earth Engine Data Catalog Home Categories All Datasets All Tags Landsat MODIS Sentinel Publisher Community API Docs Dataset Status Changelog Home Earth Engine Data Catalog All Datasets Send feedback USFS TreeMap v2016 (Conterminous United States) Stay organized with collections Save and categorize content based on your preferences.

### Earth Engine Data Catalog \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog](https://developers.google.com/earth-engine/datasets/catalog)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- These data support the National Land Cover Database (NLCD) project, which is managed by the US Geological … forest gtac landuse-landcover redcastle-resources usda usfs USFS TreeMap v2016 (Conterminous United States) This product is part of the TreeMap data suite.
- It shows LCMS-modeled change, land cover, and/or land use classes for each year and covers the Conterminous United States (CONUS) as well as areas outside the CONUS (OCONUS) including Alaska (AK), Puerto … change-detection forest gtac landcover landuse landuse-landcover USFS Tree Canopy Cover v2023-5 (CONUS and OCONUS) Overview The Tree Canopy Cover (TCC) data suite, produced by the United States Department of Agriculture, Forest Service (USFS), are annual remote sensing-based map outputs spanning from 1985-2023.
- TreeMap v2016 contains one image, a … biomass carbon climate-change conus forest forest-biomass USFS TreeMap v2020 This product is part of the TreeMap data suite.
- The surfaces are the outcomes from modelling that describe the spatial distribution of the soil attributes using existing soil data and environmental … australia csiro soil tern SOLUS: Soil properties of the conterminous United States at 100-m resolution SOLUS (Soil Landscapes of the United States) is a national map product developed by the National Cooperative Soil Survey that is focused on providing a consistent set of spatially continuous soil property maps to support large scope soil investigations and land use decisions.

### "Datasets tagged landcover in Earth Engine \_|\_ Earth Engine Data Catalog\

- URL: [https://developers.google.com/earth-engine/datasets/tags/landcover](https://developers.google.com/earth-engine/datasets/tags/landcover)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- It shows LCMS-modeled change, land cover, and/or land use classes for each year and covers the Conterminous United States (CONUS) as well as areas outside the CONUS (OCONUS) including Alaska (AK), Puerto … change-detection forest gtac landcover landuse landuse-landcover USFS TreeMap v2016 (Conterminous United States) This product is part of the TreeMap data suite.
- TreeMap v2016 contains one image, a … biomass carbon climate-change conus forest forest-biomass USFS TreeMap v2020 This product is part of the TreeMap data suite.
- TreeMap v2022 contains 22-band 30 x 30m … aboveground biomass carbon climate-change conus forest USGS GAP Alaska 2001 The GAP/LANDFIRE National Terrestrial Ecosystems data represents a detailed vegetation and land cover classification for the Conterminous U.S., Alaska, Hawaii, and Puerto Rico.GAP/LF 2011 Ecosystems for the Conterminous U.S. is an update of the National Gap Analysis Program Land Cover Data - Version 2.2.
- TreeMap v2020 contains 22-band 30 x 30m … aboveground biomass carbon climate-change conus forest USFS TreeMap v2022 This product is part of the TreeMap data suite.

