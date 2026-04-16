---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T02:44:49.605Z"
product_name: "Earth Engine Code Editor"
product_slug: "earth-engine-code-editor"
feature_name: "10 GB file uploads"
feature_slug: "10-gb-file-uploads"
latest_feature_date: "2015-08-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://developers.google.com/earth-engine/guides/ee-vertex-hosting-a-model"
  - "https://developers.google.com/earth-engine/guides/command_line"
  - "https://developers.google.com/earth-engine/guides/playground"
keywords:
  - "file"
  - "uploading"
  - "uploads"
  - "supports"
---

# 10 GB file uploads

Product: Earth Engine Code Editor
Coverage: MEDIUM

## Step 02 Summary

The Code Editor supports uploading files up to 10 GB.

## Extended Definition

The Code Editor supports uploading files up to 10 GB.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://developers.google.com/earth-engine/guides/ee-vertex-hosting-a-model](https://developers.google.com/earth-engine/guides/ee-vertex-hosting-a-model)
- [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)

## Supporting Pages

### "Hosted Custom Model for Earth Engine \_|\_ Google Earth Engine \_|\_ Google\

- URL: [https://developers.google.com/earth-engine/guides/ee-vertex-hosting-a-model](https://developers.google.com/earth-engine/guides/ee-vertex-hosting-a-model)
- Source ID: `site-docs-root-2`
- Final score: 51
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Before saving and uploading, ensure your model accepts data in a payload format that Earth Engine supports.
- An example of that is here: torch-model-archiver -f \ --model-name model \ --version 1 .0 \ --serialized-file $model file \ --handler $hander file \ --extra-files $index to name file \ --export-path $model path Model Deployment to Vertex AI Once your model files are saved the next step is to upload your model to Vertex AI.
- For performance reasons it is recommended to convert your PyTorch model to TorchScript and saved the model file with: model scripted = torch . jit . script ( model ) # Export to TorchScript model scripted . save ( 'model.pt' ) # Save Once the model file is saved it needs to be archived so it can be deployed to Vertex AI.
- Performing inference with a custom trained model using a machine learning framework such as TensorFlow or PyTorch requires saving and uploading the model to Vertex AI, creating a prediction endpoint and deploying the model to serve traffic at the created endpoint.

### Command Line Tool \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/command_line](https://developers.google.com/earth-engine/guides/command_line)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- The options are also described in the Image Manifest guide. table To upload a Shapefile, CSV, or TFRecord from Google Cloud Storage to an Earth Engine table asset, you can use any of: earthengine upload table --asset id=projects/my-project/assets/myUploadedShapefile gs://bucket/foo.shp earthengine upload table --asset id=projects/my-project/assets/myUploadedCSV gs://bucket/foo.csv earthengine upload table --asset id=projects/my-project/assets/myUploadedTFRecord gs://bucket/foo.tfrecord Note: when uploading Shapefiles, you only need to specify the path to the .shp file.
- The cancel sub-command cancels one or more running tasks. upload Uploads images or tables from Google Cloud Storage to Earth Engine, or creates assets backed by external images. image To upload an image asset using default settings: earthengine upload image --asset id=projects/my-project/assets/asset id gs://bucket/image.tif If you specify multiple input image files they will be interpreted as tiles of a single image asset.
- Service account credentials To use the CLI with a service account's credentials, use the service account file flag to point to a JSON file containing the service account's key. earthengine --service account file=service account creds.json Usage in Colab The Earth Engine Command Line Tool is preinstalled and ready for use in Google Colab .
- The project will be added to a credentials file ( /.config/earthengine/credentials) and used for subsequent commands, unless overridden by the --project option.

### Earth Engine Code Editor \_|\_ Google Earth Engine \_|\_ Google for Developers

- URL: [https://developers.google.com/earth-engine/guides/playground](https://developers.google.com/earth-engine/guides/playground)
- Source ID: `site-docs-root`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- For example, suppose you define the following module in a file named FooModule.js which is in a folder named Modules : Code Editor (JavaScript) / The Foo module is a demonstration of script modules.
- Upon visiting the URL, the referenced file and its repo will be added to either the Reader or Writer directory on the Scripts tab , depending on your permission level for the shared repo.
- Selecting a script and pressing the download button will download a zipped folder ("code editor links.zip") to your system containing a .txt file representation for each selected script.
- Interactive tools like the Layer Manager, Inspector tab, Console, and Profiler help with visualizing data, querying map layers, viewing output, and diagnosing script performance issues.

