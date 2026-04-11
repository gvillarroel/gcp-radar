---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.406Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "ee.FeatureCollection.runBigQuery"
feature_slug: "ee-featurecollection-runbigquery"
latest_feature_date: "2025-04-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/docs/release-notes"
  - "https://developers.google.com/earth-engine/guides/bigquery_integrations"
  - "https://developers.google.com/earth-engine/guides/exporting_to_bigquery"
keywords:
  - "ee"
  - "featurecollection"
  - "runbigquery"
  - "this"
  - "algorithm"
  - "runs"
  - "query"
  - "and"
---

# ee.FeatureCollection.runBigQuery

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

This algorithm runs a BigQuery query and loads the results into a feature collection.

## Extended Definition

This algorithm runs a BigQuery query and loads the results into a feature collection.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- [https://developers.google.com/earth-engine/guides/bigquery_integrations](https://developers.google.com/earth-engine/guides/bigquery_integrations)
- [https://developers.google.com/earth-engine/guides/exporting_to_bigquery](https://developers.google.com/earth-engine/guides/exporting_to_bigquery)

## Supporting Pages

### Earth Engine release notes \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/docs/release-notes](https://developers.google.com/earth-engine/docs/release-notes)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- April 01, 2025 Earth Engine Data Catalog Feature Added NASA/VIIRS/002/VNP46A2 : VNP46A2: VIIRS Lunar Gap-Filled BRDF Nighttime Lights Daily L3 Global 500m Earth Engine Server Feature Added two new algorithms that allow reading data from BigQuery: ee.FeatureCollection.loadBigQueryTable() and ee.FeatureCollection.runBigQuery() .
- December 24, 2024 Earth Engine Data Catalog Feature Added AHN/AHN3 : AHN3: Netherlands AHN 0.5m Added AHN/AHN4 : AHN4: Netherlands AHN 0.5m Added NASA/HLS/HLSS30/v002 : HLSS30: HLS Sentinel-2 Multi-spectral Instrument Surface Reflectance Daily Global 30m December 17, 2024 Earth Engine Data Catalog Feature Added projects/global-pasture-watch/assets/ggc-30m/v1/cultiv-grassland p : GPW Annual Probabilities of Cultivated Grasslands v1 Added projects/global-pasture-watch/assets/ggc-30m/v1/grassland c : GPW Annual Dominant Class of Grasslands v1 Added projects/global-pasture-watch/assets/ggc-30m/v1/nat-semi-grassland p : GPW Annual Probabilities of Natural/Semi-natural Grasslands v1 December 16, 2024 Earth Engine Server Feature Added new algorithm to find the bounding box of a collection: ee.FeatureCollection.bounds() .
- Added new algorithm ee.FeatureCollection.style() , to provide more style options, and better per-feature overriding, Added tileScale parameter to Image.sample and Image.sampleRegions .
- Fixed some spurious out-of-memory errors from ImageCollection.combine() , ImageCollection.merge() , FeatureCollection.merge() , and ee.Terrain algorithms.

### BigQuery integrations \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/bigquery_integrations](https://developers.google.com/earth-engine/guides/bigquery_integrations)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Read BigQuery data from Earth Engine Earth Engine can directly access BigQuery data as ee.FeatureCollection objects, allowing you to visualize and incorporate BigQuery data in Earth Engine analyses. ee.FeatureCollection.loadBigQueryTable() : Reads a BigQuery table into Earth Engine. ee.FeatureCollection.runBigQuery() : Executes a BigQuery SQL query and retrieves results into Earth Engine.
- The integration enables efficient workflows, including querying raster data in BigQuery using ST REGIONSTATS , reading BigQuery data into Earth Engine as ee.FeatureCollection , and writing Earth Engine data to BigQuery using Export.table.toBigQuery() .
- Writing Earth Engine data to BigQuery : Exporting ee.FeatureCollection results from Earth Engine analyses to BigQuery tables for storage and further analysis.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Exporting to BigQuery \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/exporting_to_bigquery](https://developers.google.com/earth-engine/guides/exporting_to_bigquery)
- Source ID: `site-docs-root-2`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- FeatureCollection ( dates . map ( getLucasSamplesForDate )) . flatten (); Export . table . toBigQuery ({ collection : withSamples , description : 'lucas s2 annotated' }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) lucas = ee .
- To have finer control over this transformation process, you can manually map over the features and transform their geometries, e.g.: Code Editor (JavaScript) var transformedCollection = originalCollection . map ( function transformGeo ( e ) { var myErrorMargin = 10 1000 ; // meters return e . setGeometry ( e . geometry ( myErrorMargin , 'EPSG:4326' , true )); }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) def transform geo ( e ): my error margin = 10 1000 # meters return e . setGeometry ( e . geometry ( my error margin , 'EPSG:4326' , True )) transformed collection = original collection . map ( transform geo ) Caution: Polygons larger than a hemisphere may have their orientation reversed during export.
- Permissions In addition to the standard roles and permissions required to use Earth Engine, callers also need the correct BigQuery permissions on the Cloud project or dataset. bigquery.tables.get bigquery.tables.create bigquery.tables.updateData bigquery.tables.delete bigquery.jobs.create Any of the following combinations of predefined Identity and Access Management (IAM) roles include the necessary permissions: bigquery.dataEditor plus bigquery.jobUser bigquery.dataOwner plus bigquery.jobUser bigquery.user bigquery.admin Pricing BigQuery is a paid Google Cloud service, so you will incur charges for your usage of BigQuery, including storage and analysis of any Earth Engine data that you export to BigQuery.
- Export configuration Syntax Code Editor (JavaScript) Export . table . toBigQuery ({ collection : features , table : 'myproject.mydataset.mytable' , description : 'put my data in bigquery' , append : true , overwrite : false }); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) task = ee . batch .

