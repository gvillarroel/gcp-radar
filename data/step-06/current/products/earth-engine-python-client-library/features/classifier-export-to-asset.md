---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:10:51.808Z"
product_name: "Earth Engine Python Client Library"
product_slug: "earth-engine-python-client-library"
feature_name: "Classifier export to asset"
feature_slug: "classifier-export-to-asset"
latest_feature_date: "2023-12-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/best_practices"
  - "https://developers.google.com/earth-engine/guides/classification"
keywords:
  - "classifier"
  - "export"
  - "to"
  - "asset"
  - "adds"
  - "toasset"
  - "for"
  - "exporting"
---

# Classifier export to asset

Product: Earth Engine Python Client Library
Coverage: LOW

## Step 02 Summary

Adds Export.classifier.toAsset for exporting saved classifiers as Earth Engine assets.

## Extended Definition

Adds Export.classifier.toAsset for exporting saved classifiers as Earth Engine assets.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- [https://developers.google.com/earth-engine/guides/classification](https://developers.google.com/earth-engine/guides/classification)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- January 09, 2024 Earth Engine Data Catalog Feature Added JAXA/ALOS/PALSAR-2/Level2 1/StripMap 202401 : ALOS-2 PALSAR-2 StripMap Level 2.1 Added MODIS/061/MOD13C1 : MOD13C1.061: Terra Vegetation Indices 16-Day L3 Global 0.05 Deg Climate Modeling Grid Added MODIS/061/MYD13C1 : MYD13C1.061: Aqua Vegetation Indices 16-Day L3 Global 0.05 Deg CMG Added USGS/NLCD RELEASES/2021 REL/TCC/v2021-4 (no longer available) January 02, 2024 Earth Engine Data Catalog Feature Added CSIC/SPEI/2 9 (no longer available) December 26, 2023 Earth Engine Data Catalog Feature Added USFS/GTAC/TreeMap/v2016 : USFS TreeMap v2016 (Conterminous United States) December 12, 2023 Earth Engine Data Catalog Feature Added JRC/GFC2020/V1 (no longer available) December 08, 2023 Earth Engine JavaScript Client Library 0.1.383 Feature Added Export.classifier.toAsset and ee.Classifier.load for exporting and loading saved ee.Classifier.smileCart and ee.Classifier.smileRandomForest classifiers.
- Note that some parameters needed to be renamed after removing opt since they conflict with Python keywords: ee.Collection.limit() : opt property was converted to prop ee.Image.expression() : opt map was converted to map ee.Filter() : opt filter which was converted to filter Feature Added Export.classifier.toAsset and ee.Classifier.load for exporting and loading saved ee.Classifier.smileCart and ee.Classifier.smileRandomForest classifiers.
- Added support for exporting an image from your script environment to an Earth Engine asset with Export.image.toAsset() .
- January 13, 2026 Earth Engine Data Catalog Feature Added NASA/TEMPO/O3 L3 QA : TEMPO gridded ozone total column V03 (PROVISIONAL) December 30, 2025 Earth Engine Data Catalog Feature Added UCSB-CHC/CHIRPS/V3/DAILY RNL : CHIRPS Precipitation Daily Reanalysis: Climate Hazards Center InfraRed Precipitation With Station Data (Version 3.0, ERA5-based) Added UCSB-CHC/CHIRPS/V3/DAILY SAT : CHIRPS Precipitation Daily Near-Real-Time: Climate Hazards Center InfraRed Precipitation With Station Data (Version 3.0, IMERG-based) December 16, 2025 Earth Engine Data Catalog Feature Added COPERNICUS/MARINE/INSITU MULTI 4KM/ARGO : Copernicus Global In-situ Observations of Ocean Currents - Argo Added COPERNICUS/MARINE/INSITU MULTI 4KM/RADAR RADIAL : Copernicus Global In-situ Observations of Ocean Currents - Radar Radial Added COPERNICUS/MARINE/INSITU MULTI 4KM/RADAR TOTAL : Copernicus Global In-situ Observations of Ocean Currents - Radar Total Added JRC/GFC2020/V3 : EC JRC global map of forest cover 2020, V3 Added projects/mapbiomas-public/assets/brazil/lulc/v1 : MapBiomas Land Use and Land Cover - Brazil V1.0 December 02, 2025 Earth Engine Data Catalog Feature Added JRC/LUCAS/THLOC/V1/2022 : LUCAS THLOC (Points with attributes, 2022) V1 November 30, 2025 Earth Engine JavaScript Client Library 1.7.3 Feature Added support for the overwrite parameter in the Export.image.toAsset() and Export.table.toAsset() methods, which allows for control over overwriting data in preexisting destination images or tables.

### Coding Best Practices \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/best_practices](https://developers.google.com/earth-engine/guides/best_practices)
- Source ID: `site-docs-root-2`
- Final score: 140
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Also note that if you want to export toAsset , you will need to supply a geometry, which can be anything, for example the image centroid, which is small and cheap to compute. (i.e. don't use a complex geometry if you don't need it).
- Do not expect such samples to be available interactively (for example through print() ) or usable (for example as input to a classifier) without exporting them first.
- This block is commented because the export is complete. / var link = '0b8023b0af6c1b0ac7b5be649b54db06' var desc = 'Logistic regression stack ' + link; Export.image.toAsset({ image: stack, description: desc, assetId: desc, region: geometry, scale: 30, maxPixels: 1e10 }) / // Load the exported image. var exportedStack = ee .
- Feature ( null , stats )]), description : 'exported stats demo ' + link , fileFormat : 'CSV' }); Note that the link is embedded into the asset name, for reproducibility.

### Supervised Classification \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/classification](https://developers.google.com/earth-engine/guides/classification)
- Source ID: `site-docs-root-2`
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Code Editor (JavaScript) // Using the random forest classifier defined earlier, export the random // forest classifier as an Earth Engine asset. var classifierAssetId = 'projects/<PROJECT-ID>/assets/upscaled MCD12Q1 random forest' ; Export . classifier . toAsset ( classifier , 'Saved-random-forest-IGBP-classification' , classifierAssetId ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Using the random forest classifier defined earlier, export the random forest classifier as an Earth Engine asset. classifier asset id = ( 'projects/<PROJECT-ID>/assets/upscaled MCD12Q1 random forest' ) task = ee . batch .
- Export . classifier . toAsset ( classifier , 'Saved-random-forest-IGBP-classification' , classifier asset id ) task . start () To load the saved classifier, use the algorithm ee.Classifier.load() , specify the exported classifier ID and use it just like any other trained classifier.
- Use Export.classifier.toAsset to run the classifier training as a batch job, where it can run for longer with more memory.
- Classifier . load ( classifierAssetId ); // We can perform classification just as before with the saved classifier now. var classified = input . classify ( savedClassifier ); Map . addLayer ( classified . clip ( roi ), { palette : igbpPalette , min : 0 , max : 17 }, 'classification' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Once the classifier export finishes, we can load our saved classifier. saved classifier = ee .

