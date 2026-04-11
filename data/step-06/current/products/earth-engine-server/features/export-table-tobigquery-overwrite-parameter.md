---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.407Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "Export.table.toBigQuery overwrite parameter"
feature_slug: "export-table-tobigquery-overwrite-parameter"
latest_feature_date: "2024-05-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/guides/exporting_tables"
  - "https://developers.google.com/earth-engine/guides/exporting_to_bigquery"
  - "https://developers.google.com/earth-engine/docs/release-notes"
keywords:
  - "export"
  - "table"
  - "tobigquery"
  - "overwrite"
  - "parameter"
  - "this"
  - "controls"
  - "whether"
---

# Export.table.toBigQuery overwrite parameter

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

This parameter controls whether an export overwrites an existing destination BigQuery table.

## Extended Definition

This parameter controls whether an export overwrites an existing destination BigQuery table.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/guides/exporting_tables](https://developers.google.com/earth-engine/guides/exporting_tables)
- [https://developers.google.com/earth-engine/guides/exporting_to_bigquery](https://developers.google.com/earth-engine/guides/exporting_to_bigquery)
- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)

## Supporting Pages

### "Exporting Table and Vector Data \_|\_ Google Earth Engine \_|\_ Google for\

- URL: [https://developers.google.com/earth-engine/guides/exporting_tables](https://developers.google.com/earth-engine/guides/exporting_tables)
- Source ID: `site-docs-root-2`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Code Editor (JavaScript) Export . table . toBigQuery ({ collection : features , table : 'myproject.mydataset.mytable' , description : 'put my data in bigquery' , append : true , overwrite : false }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) task = ee . batch .
- Export . table . toBigQuery ( collection = features , table = 'myproject.mydataset.mytable' , description = 'put my data in bigquery' , append = True , overwrite = False , ) task . start () to Drive To export a FeatureCollection to your Drive account, use Export.table.toDrive() .
- Export . table . toAsset ( collection = features , description = 'exportToTableAssetExample' , assetId = 'projects/your-project/assets/exampleAssetId' , ) task . start () There are several limitations on the size and shape of Earth Engine table assets: Maximum of 100 million features Maximum of 1,000 properties (columns) Maximum of 100,000 vertices for each row's geometry Maximum of 100,000 characters per string value to BigQuery You can export a FeatureCollection to a BigQuery table using Export.table.toBigQuery() .
- Export . table . toDrive ( collection = feature collection , description = 'exportTableExample' , fileFormat = 'CSV' , ) task . start () Note that the format is set to 'CSV' in this example since there is no geometry in the output.

### Exporting to BigQuery \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/exporting_to_bigquery](https://developers.google.com/earth-engine/guides/exporting_to_bigquery)
- Source ID: `site-docs-root-2`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Export configuration Syntax Code Editor (JavaScript) Export . table . toBigQuery ({ collection : features , table : 'myproject.mydataset.mytable' , description : 'put my data in bigquery' , append : true , overwrite : false }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) task = ee . batch .
- Export . table . toBigQuery ( collection = features , table = 'myproject.mydataset.mytable' , description = 'put my data in bigquery' , append = True , overwrite = False , ) task . start () Automatic or manual schema specification If there's no table present in BigQuery, Earth Engine attempts to determine a schema using the properties of the first ee.Feature in the collection.
- Setting the {overwrite: true} parameter when exporting to an existing BigQuery table triggers a safe overwrite process: Temporary table: data is exported to a new, temporary table within the destination dataset.
- FeatureCollection ( dates . map ( getLucasSamplesForDate )) . flatten (); Export . table . toBigQuery ({ collection : withSamples , description : 'lucas s2 annotated' }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) lucas = ee .

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- June 04, 2024 Earth Engine Data Catalog Feature Added MODIS/061/MYD09CMG : MYD09CMG.061 Aqua Surface Reflectance Daily L3 Global 0.05 Deg CMG May 28, 2024 Earth Engine Data Catalog Feature Added IPCC/AR6/SLP : IPCC AR6 Sea Level Projections Regional (Medium Confidence) Added NASA/GPM L3/IMERG MONTHLY V07 : GPM: Monthly Global Precipitation Measurement (GPM) vRelease 07 May 14, 2024 Earth Engine Data Catalog Feature Added NASA/GRACE/MASS GRIDS V04/OCEAN : GRACE Monthly Mass Grids Release 06 Version 04 - Ocean Added projects/forestdatapartnership/assets/community palm/20240312 (no longer available) May 10, 2024 Earth Engine Server Feature Added support for overwrite parameter in Export.table.toBigQuery() method, which allows for control over overwriting data in already existing destination table.
- January 13, 2026 Earth Engine Data Catalog Feature Added NASA/TEMPO/O3 L3 QA : TEMPO gridded ozone total column V03 (PROVISIONAL) December 30, 2025 Earth Engine Data Catalog Feature Added UCSB-CHC/CHIRPS/V3/DAILY RNL : CHIRPS Precipitation Daily Reanalysis: Climate Hazards Center InfraRed Precipitation With Station Data (Version 3.0, ERA5-based) Added UCSB-CHC/CHIRPS/V3/DAILY SAT : CHIRPS Precipitation Daily Near-Real-Time: Climate Hazards Center InfraRed Precipitation With Station Data (Version 3.0, IMERG-based) December 16, 2025 Earth Engine Data Catalog Feature Added COPERNICUS/MARINE/INSITU MULTI 4KM/ARGO : Copernicus Global In-situ Observations of Ocean Currents - Argo Added COPERNICUS/MARINE/INSITU MULTI 4KM/RADAR RADIAL : Copernicus Global In-situ Observations of Ocean Currents - Radar Radial Added COPERNICUS/MARINE/INSITU MULTI 4KM/RADAR TOTAL : Copernicus Global In-situ Observations of Ocean Currents - Radar Total Added JRC/GFC2020/V3 : EC JRC global map of forest cover 2020, V3 Added projects/mapbiomas-public/assets/brazil/lulc/v1 : MapBiomas Land Use and Land Cover - Brazil V1.0 December 02, 2025 Earth Engine Data Catalog Feature Added JRC/LUCAS/THLOC/V1/2022 : LUCAS THLOC (Points with attributes, 2022) V1 November 30, 2025 Earth Engine JavaScript Client Library 1.7.3 Feature Added support for the overwrite parameter in the Export.image.toAsset() and Export.table.toAsset() methods, which allows for control over overwriting data in preexisting destination images or tables.
- Earth Engine Python Client Library 1.7.3 Feature Added support for the overwrite parameter in the Export.image.toAsset() and Export.table.toAsset() methods, which allows for control over overwriting data in preexisting destination images or tables.
- August 22, 2023 Earth Engine Data Catalog Feature Added JRC/GHSL/P2023A/GHS BUILT C : GHSL: Global settlement characteristics (10 m) 2018 (P2023A) Added JRC/GHSL/P2023A/GHS BUILT V : GHSL: Global building volume 1975-2030 (P2023A) Added USGS/NLCD RELEASES/2019 REL/RCMAP/V5/TRENDS (no longer available) Added USGS/NLCD RELEASES/2019 REL/RCMAP/V5/TRENDS YEAR (no longer available) August 17, 2023 Earth Engine Server Breaking Added support for multidimensional arrays in Export.table.toBigQuery() .

