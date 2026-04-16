---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:13:20.202Z"
product_name: "Earth Engine Data Catalog"
product_slug: "earth-engine-data-catalog"
feature_name: "MODIS/006/MYD11A2"
feature_slug: "modis-006-myd11a2"
latest_feature_date: "2017-06-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MYD11A2"
  - "https://developers.google.com/earth-engine/datasets/catalog/modis"
  - "https://developers.google.com/earth-engine/datasets/tags/landuse-landcover"
keywords:
  - "modis"
  - "006"
  - "myd11a2"
  - "aqua"
  - "day"
  - "land"
  - "surface"
  - "temperature"
---

# MODIS/006/MYD11A2

Product: Earth Engine Data Catalog
Coverage: MEDIUM

## Step 02 Summary

A MODIS Aqua 8-day land surface temperature product.

## Extended Definition

A MODIS Aqua 8-day land surface temperature product.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MYD11A2](https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MYD11A2)
- [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)
- [https://developers.google.com/earth-engine/datasets/tags/landuse-landcover](https://developers.google.com/earth-engine/datasets/tags/landuse-landcover)

## Supporting Pages

### MYD11A2.006 Aqua Land Surface Temperature and Emissivity 8-Day Global 1km [deprecated] | Earth Engine Data Catalog | Google for Developers

- URL: [https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MYD11A2](https://developers.google.com/earth-engine/datasets/catalog/MODIS_006_MYD11A2)
- Source ID: `feature-recovery-direct-http`
- Final score: 355
- Re-rank relevance: N/A

Evidence snippets:
- La période de composition de huit jours a été choisie, car deux fois … MODIS/006/MYD11A2, 8-day,aqua,climate,emissivity,global,lst,modis,nasa,surface-temperature,usgs 2002-07-04T00:00:00Z/2023-02-18T00:00:00Z -90 -180 90 180 Google Earth Engine https://developers.google.com/earth-engine/datasets https://doi.org/10.5067/MODIS/MYD11A2.006 https://doi.org/10.5067/MODIS/MYD11A2.006 Voulez-vous nous donner plus d'informations ? [[["Facile à comprendre","easyToUnderstand","thumb-up"],["J'ai pu résoudre mon problème","solvedMyProblem","thumb-up"],["Autre","otherUp","thumb-up"]],[["Il n'y a pas l'information dont j'ai besoin","missingTheInformationINeed","thumb-down"],["Trop compliqué/Trop d'étapes","tooComplicatedTooManySteps","thumb-down"],["Obsolète","outOfDate","thumb-down"],["Problème de traduction","translationIssue","thumb-down"],["Mauvais exemple/Erreur de code","samplesCodeIssue","thumb-down"],["Autre","otherDown","thumb-down"]],[],[],[]] GitHub Earth Engine on GitHub Medium Follow our blog on Medium GIS Stack Exchange Ask questions using the google-earth-engine tag Twitter Follow @googleearth on Twitter Videos Earth Engine on YouTube Communiquer Blog Bluesky Instagram LinkedIn X (Twitter) YouTube Programmes Google Developer Program Google Developer Groups Google Developer Experts Accelerators Google Cloud & NVIDIA Consoles pour développeurs Google API Console Google Cloud Platform Console Google Play Console Firebase Console Actions on Google Console Cast SDK Developer Console Chrome Web Store Dashboard Google Home Developer Console Android Chrome Firebase Google Cloud Platform Google AI Tous les produits Conditions d'utilisation Règles de confidentialité Manage cookies English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어
- Disponibilité de l'ensemble de données 2002-07-04T00:00:00Z–2023-02-18T00:00:00Z Producteur de l'ensemble de données NASA LP DAAC au Centre USGS EROS Aperçu de Google Earth Engine ee.ImageCollection("MODIS/006/MYD11A2") open_in_new Cadence 8 jours Tags 8 jours aqua climate émissivité global lst modis myd11a2 nasa surface-temperature (température de surface) usgs Description Le produit MYD11A2 V6 fournit une température moyenne de la surface terrestre (LST) sur huit jours dans une grille de 1 200 x 1 200 kilomètres.
- MYD11A2.006 Aqua Land Surface Temperature and Emissivity 8-Day Global 1km [deprecated] | Earth Engine Data Catalog | Google for Developers Passer au contenu principal Earth Engine Data Catalog / English Deutsch Español Español – América Latina Français Indonesia Italiano Polski Português – Brasil Tiếng Việt Türkçe Русский עברית العربيّة فارسی हिंदी বাংলা ภาษาไทย 中文 – 简体 中文 – 繁體 日本語 한국어 Connexion Accueil Catégories Tous les ensembles de données All Tags Landsat MODIS Sentinel Éditeur Communauté Documentation sur les API État de l'ensemble de données Changelog Earth Engine Data Catalog Accueil Catégories Tous les ensembles de données All Tags Landsat MODIS Sentinel Éditeur Communauté Documentation sur les API État de l'ensemble de données Changelog Accueil Earth Engine Data Catalog Catégories Envoyer des commentaires MYD11A2.006 Aqua Land Surface Temperature and Emissivity 8-Day Global 1km [deprecated] Restez organisé à l'aide des collections Enregistrez et classez les contenus selon vos préférences.
- Filter . date ( '2018-01-01' , '2018-05-01' )); var landSurfaceTemperature = dataset . select ( 'LST_Day_1km' ); var landSurfaceTemperatureVis = { min : 14000.0 , max : 16000.0 , palette : [ '040274' , '040281' , '0502a3' , '0502b8' , '0502ce' , '0502e6' , '0602ff' , '235cb1' , '307ef3' , '269db1' , '30c8e2' , '32d3ef' , '3be285' , '3ff38f' , '86e26f' , '3ae237' , 'b5e22e' , 'd6e21f' , 'fff705' , 'ffd611' , 'ffb613' , 'ff8b13' , 'ff6e08' , 'ff500d' , 'ff0000' , 'de0101' , 'c21301' , 'a71001' , '911003' ], }; Map . setCenter ( 6.746 , 46.529 , 2 ); Map . addLayer ( landSurfaceTemperature , landSurfaceTemperatureVis , 'Land Surface Temperature' ); Ouvrir dans l'éditeur de code MYD11A2.006 : température de surface terrestre et émissivité Aqua sur huit jours à l'échelle mondiale sur 1 km [obsolète] Le produit MYD11A2 V6 fournit une température moyenne de la surface terrestre (LST) sur huit jours dans une grille de 1 200 x 1 200 kilomètres.

### "MODIS Collections in Earth Engine \_|\_ Earth Engine Data Catalog \_|\_\

- URL: [https://developers.google.com/earth-engine/datasets/catalog/modis](https://developers.google.com/earth-engine/datasets/catalog/modis)
- Source ID: `site-docs-root`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- Provided along with both the day-time and night-time surface temperature bands and their quality indicator layers are MODIS bands 31 and 32 and six observation layers. photo library MODIS/061/MYD11A1 MYD11A2.061 Aqua Land Surface Temperature and Emissivity 8-Day Global 1km The MYD11A2 V6.1 product provides an average 8-day land surface temperature (LST) in a 1200 x 1200 kilometer grid.
- The LST, Quality Control (QC), view zenith angle, and viewing time have separate day and night bands, while the values for the MODIS emissivity bands 29, 31, and 32 are the average of both the nighttime and daytime acquisitions. photo library MODIS/061/MYD21C2 MYD21C3.061 Aqua Land Surface Temperature and 3-Band Emissivity Monthly L3 Global 0.05 Deg CMG The MYD21C3 dataset is a monthly composite LST product that uses an algorithm based on a simple averaging method.
- The MYD21A1N product contains the calculated LST as well as quality control, the three emissivity bands, view zenith angle, and time of observation. photo library MODIS/061/MYD21A1N MYD21C1.061 Aqua Land Surface Temperature and 3-Band Emissivity Daily L3 Global 0.05 Deg CMG The MYD21C1 dataset is produced daily in a 0.05 degree (5,600 meters at the equator) Climate Modeling Grid (CMG) from daytime Level 2 Gridded (L2G) intermediate LST products.
- The MYD21A1D product contains the calculated LST as well as quality control, the three emissivity bands, view zenith angle, and time of observation. photo library MODIS/061/MYD21A1D MYD21A1N.061 Aqua Land Surface Temperature and 3-Band Emissivity Daily Global 1km The MYD21A1N dataset is produced daily from nighttime Level 2 Gridded (L2G) intermediate LST products at a spatial resolution of 1,000 meters.

### "Datasets tagged landuse-landcover in Earth Engine \_|\_ Earth Engine Data\

- URL: [https://developers.google.com/earth-engine/datasets/tags/landuse-landcover](https://developers.google.com/earth-engine/datasets/tags/landuse-landcover)
- Source ID: `site-docs-root-3`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Land … landcover landuse-landcover modis nasa usgs yearly MCD12Q2.006 Land Cover Dynamics Yearly Global 500m The Terra and Aqua combined Moderate Resolution Imaging Spectroradiometer (MODIS) Land Cover Dynamics (MCD12Q2) Version 6.1 data product provides global land surface phenology metrics at yearly intervals.
- LUCAS collects information on land cover and … eu jrc landcover landuse landuse-landcover lucas Land Cover of North America at 30 meters, 2020 The 2020 North American Land Cover 30-meter dataset was produced as part of the North American Land Change Monitoring System (NALCMS), a trilateral effort between Natural Resources Canada, the United States Geological Survey, and three Mexican organizations including the National Institute of Statistics and Geography … landcover landsat landuse-landcover nlcd reflectance MCD12C1.061 MODIS Land Cover Type Yearly Global 0.05 Deg CMG The Terra and Aqua combined Moderate Resolution Imaging Spectroradiometer (MODIS) Land Cover Climate Modeling Grid (CMG) (MCD12C1) Version 6.1 data product provides a spatially aggregated and reprojected version of the tiled MCD12Q1 Version 6.1 data product.
- Designed to continuously represent Earth's terrestrial surface as a proportion of basic vegetation traits, it provides a gradation of three surface cover components: percent tree cover, percent … annual geophysical global landuse-landcover modis nasa MapBiomas Land Use and Land Cover - Bolivia V1.0 MapBiomas Land Use and Land Cover (LULC) dataset for Bolivia is produced annually by the MapBiomas Project using Landsat satellite imagery and machine learning classification techniques.
- The MCD12Q2 Version 6.1 data product is derived from time series of the 2-band Enhanced Vegetation Index (EVI2) … evi global landuse-landcover modis onset-greenness phenology MOD44B.061 Terra Vegetation Continuous Fields Yearly Global 250m The Terra MODIS Vegetation Continuous Fields (VCF) product is a sub-pixel-level representation of surface vegetation cover estimates globally.

