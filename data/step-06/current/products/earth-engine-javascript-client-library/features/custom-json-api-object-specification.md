---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T14:11:21.004Z"
product_name: "Earth Engine JavaScript Client Library"
product_slug: "earth-engine-javascript-client-library"
feature_name: "Custom JSON API object specification"
feature_slug: "custom-json-api-object-specification"
latest_feature_date: "2013-03-14"
deprecation_date: "2013-03-14"
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff"
  - "https://developers.google.com/earth-engine/guides/landsat"
  - "https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table"
keywords:
  - "custom"
  - "json"
  - "object"
  - "specification"
  - "objects"
  - "should"
  - "no"
  - "longer"
---

# Custom JSON API object specification

Product: Earth Engine JavaScript Client Library
Coverage: MEDIUM

## Step 02 Summary

Custom JSON objects should no longer be used to specify API objects such as error margins; deprecated on 2013-03-14.

## Extended Definition

Custom JSON objects should no longer be used to specify API objects such as error margins; deprecated on 2013-03-14.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff](https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff)
- [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table)

## Supporting Pages

### "Cloud GeoTiff-Backed Earth Engine Assets \_|\_ Google Earth Engine \_|\_\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff](https://developers.google.com/earth-engine/Earth_Engine_asset_from_cloud_geotiff)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Assign the following roles: "Storage Legacy Bucket Reader" (provides storage.buckets.get and other bucket-level read permissions). "Storage Legacy Object Reader" (provides storage.objects.get ). (Alternatively, you could create a new custom role with just the storage.buckets.get and storage.objects.get permissions and assign that.) Save 2.
- That means that if any TIFF comprising an external asset in GCS is updated (therefore changing its generation), Earth Engine will return a "Failed to load the GeoTIFF at gs://my-bucket/my-object#123456 " error because the expected object no longer exists (unless the bucket enables multiple object versions).
- Specifically, collaborators must have the following permissions: storage.buckets.get on the bucket (to retrieve bucket metadata and location, allowing Earth Engine to properly resolve the asset's source). storage.objects.get on the bucket (to read the actual COG-backed asset data).
- Share the Earth Engine asset for reading After ensuring your collaborators have the necessary permissions on the underlying GCS bucket and objects, you must also share the Earth Engine asset itself.

### Landsat Algorithms \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/landsat](https://developers.google.com/earth-engine/guides/landsat)
- Source ID: `site-docs-reference`
- Final score: 69
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Map . setCenter ( - 122.3578 , 37.7726 , 10 ); Map . addLayer ( composite , { bands : [ 'B4' , 'B3' , 'B2' ], max : 128 }, 'TOA composite' ); Map . addLayer ( customComposite , { bands : [ 'B4' , 'B3' , 'B2' ], max : 128 }, 'Custom TOA composite' ); Python setup See the Python Environment page for information on the Python API and using geemap for interactive development. import ee import geemap.core as geemap Colab (Python) Load a raw Landsat 5 ImageCollection for a single year. collection = ee .
- ID Description LT04 Landsat 4, Thematic Mapper (TM) LT05 Landsat 5, Thematic Mapper (TM) LE07 Landsat 7, Enhanced Thematic Mapper Plus (ETM+) LC08 Landsat 8, Operational Land Imager (OLI) LC09 Landsat 9, Operational Land Imager 2 (OLI-2) Landsat collection status Pre-Collection 1 : no longer produced or distributed by USGS, unsupported by Earth Engine, to be removed from the Data Catalog in 2024.
- Map () m . set center ( - 122.3578 , 37.7726 , 10 ) m . add layer ( composite , { 'bands' : [ 'B4' , 'B3' , 'B2' ], 'max' : 128 }, 'TOA composite' ) m . add layer ( custom composite , { 'bands' : [ 'B4' , 'B3' , 'B2' ], 'max' : 128 }, 'Custom TOA composite' , ) m Note that the input to the simple composite is a collection of raw imagery.
- This example creates a simple composite using default parameters and compares it to a composite using custom parameters for the cloud score threshold and the percentile: Code Editor (JavaScript) // Load a raw Landsat 5 ImageCollection for a single year. var collection = ee .

### "Table computations with the Earth Engine REST API \_|\_ Google Earth Engine\

- URL: [https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table](https://developers.google.com/earth-engine/Earth_Engine_REST_API_compute_table)
- Source ID: `site-docs-reference`
- Final score: 59
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Credentials . from service account file ( KEY ) scoped credentials = credentials . with scopes ( [ 'https://www.googleapis.com/auth/cloud-platform' ]) session = AuthorizedSession ( scoped credentials ) url = 'https://earthengine.googleapis.com/v1beta/projects/earthengine-public/assets/LANDSAT' response = session . get ( url ) from pprint import pprint import json pprint ( json . loads ( response . content )) Serialize a computation Before you can send a request to compute something, the computation needs to be put into the Earth Engine expression graph format.
- Note that the request contains the Expression , which is the serialized computation. import json url = 'https://earthengine.googleapis.com/v1beta/projects/ {} /table:computeFeatures' response = session . post ( url = url . format ( PROJECT ), data = json . dumps ({ 'expression' : serialized }) ) import json pprint ( json . loads ( response . content )) The response contains the resultant FeatureCollection as GeoJSON, which can be consumed by other apps or processes.
- Reducer . mean (). setOutputs ( [ band ] ), scale = image . projection (). nominalScale () ) Print the value to test . print ( computation . first (). get ( band ). getInfo ()) Serialize the expression graph This will create an object that represents the Earth Engine expression graph (specifically, an Expression ).
- INSERT YOUR SERVICE ACCOUNT HERE SERVICE ACCOUNT = 'your-service-account@your-project.iam.gserviceaccount.com' KEY = 'key.json' !gcloud iam service-accounts keys create {KEY} --iam-account {SERVICE ACCOUNT} Start an AuthorizedSession and test your credentials Test the private key by using it to get credentials.

