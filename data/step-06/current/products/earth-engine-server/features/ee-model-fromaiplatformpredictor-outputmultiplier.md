---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T11:22:38.412Z"
product_name: "Earth Engine Server"
product_slug: "earth-engine-server"
feature_name: "ee.Model.fromAiPlatformPredictor.outputMultiplier"
feature_slug: "ee-model-fromaiplatformpredictor-outputmultiplier"
latest_feature_date: "2021-06-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://developers.google.com/earth-engine/guides/command_line"
  - "https://developers.google.com/earth-engine/guides/ee-vertex-hosting-a-model"
  - "https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector"
keywords:
  - "ee"
  - "model"
  - "fromaiplatformpredictor"
  - "outputmultiplier"
  - "adds"
  - "an"
  - "option"
  - "to"
---

# ee.Model.fromAiPlatformPredictor.outputMultiplier

Product: Earth Engine Server
Coverage: LOW

## Step 02 Summary

Adds an outputMultiplier option to ee.Model.fromAiPlatformPredictor.

## Extended Definition

Adds an outputMultiplier option to ee.Model.fromAiPlatformPredictor.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- [https://developers.google.com/earth-engine/guides/ee-vertex-hosting-a-model](https://developers.google.com/earth-engine/guides/ee-vertex-hosting-a-model)
- [https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector](https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector)

## Supporting Pages

### Command Line Tool \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can see a complete list of table upload options by visiting the Table Manifest guide or with: earthengine upload table -h external image To create an asset backed by an external image, run the upload image command with a manifest: earthengine upload external image --manifest /tmp/foo.json An example manifest is: { "name" : "projects/{project}/assets/cogdemo1" , "tilesets" : [ { "id" : "0" , "sources" : [{ "uris" : [ "gs://ee-docs-demos/COG demo.tif" ] }] } ], "properties" : { "source" : "https://code.earthengine.google.com/d541cf8b268b2f9d8f834c255698201d" }, "startTime" : "2016-01-01T00:00:00.000000000Z" , "endTime" : "2016-12-31T15:01:23.000000000Z" } See the Cloud GeoTIFF guide and the Image Manifest guide for more details on constructing the manifest.
- The options are also described in the Image Manifest guide. table To upload a Shapefile, CSV, or TFRecord from Google Cloud Storage to an Earth Engine table asset, you can use any of: earthengine upload table --asset id=projects/my-project/assets/myUploadedShapefile gs://bucket/foo.shp earthengine upload table --asset id=projects/my-project/assets/myUploadedCSV gs://bucket/foo.csv earthengine upload table --asset id=projects/my-project/assets/myUploadedTFRecord gs://bucket/foo.tfrecord Note: when uploading Shapefiles, you only need to specify the path to the .shp file.
- For safety when deleting multiple assets, you can use the --dry run flag to verify exactly what will be deleted without actually deleting anything. set project Sets the Google Cloud project through which computation requests are routed. earthengine set project foo-project This command is needed prior to running commands that require Cloud functionality, for example model . task Prints information about or manages long-running tasks.
- Authenticate () Command execution To run command line utilities, like the Earth Engine CLI, you need to prepend command calls with an exclamation point. !earthengine -h Set a Cloud project Use the --project option to set a Cloud project for each individual earthengine command. !earthengine --project my-project <command> Alternatively, set a default project to be used by all earthengine calls using the set project command.

### "Hosted Custom Model for Earth Engine \_|\_ Google Earth Engine \_|\_ Google\

- URL: [https://developers.google.com/earth-engine/guides/ee-vertex-hosting-a-model](https://developers.google.com/earth-engine/guides/ee-vertex-hosting-a-model)
- Source ID: `site-docs-root-2`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- For performance reasons it is recommended to convert your PyTorch model to TorchScript and saved the model file with: model scripted = torch . jit . script ( model ) # Export to TorchScript model scripted . save ( 'model.pt' ) # Save Once the model file is saved it needs to be archived so it can be deployed to Vertex AI.
- Home Products Google Earth Engine Guides Send feedback Hosted Custom Model for Earth Engine Stay organized with collections Save and categorize content based on your preferences.
- After uploading the model, create an endpoint and deploy the model to it, optionally enabling gRPC predictions for optimal performance.
- To archive the model torch-model-archiver needs to be run including any custom handler and additional files your model requires.

### "ee.Algorithms.CannyEdgeDetector \_|\_ Google Earth Engine \_|\_ Google for\

- URL: [https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector](https://developers.google.com/earth-engine/apidocs/ee-algorithms-cannyedgedetector)
- Source ID: `site-docs-reference`
- Final score: 137
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2023-10-06 UTC."],[],[]]
- Usage Returns ee.Algorithms.CannyEdgeDetector(image, threshold, sigma ) Image Argument Type Details image Image The image on which to apply edge detection. threshold Float Threshold value.
- Home Products Google Earth Engine Reference Send feedback ee.Algorithms.CannyEdgeDetector Stay organized with collections Save and categorize content based on your preferences.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

