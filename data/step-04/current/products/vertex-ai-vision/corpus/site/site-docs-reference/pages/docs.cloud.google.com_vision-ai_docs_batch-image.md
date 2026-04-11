---
title: "Image batch processing \_|\_ Vertex AI Vision \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vision-ai/docs/batch-image
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vision-ai/docs/build-app
source_metadata:
  url: https://docs.cloud.google.com/vision-ai/docs/batch-image
  title: "Image batch processing \_|\_ Vertex AI Vision \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI Vision
Guides
Send feedback
Image batch processing
Stay organized with collections
Save and categorize content based on your preferences.
In addition to streaming processing, you can choose batch processing as a way
to get information from data. This non-streaming processing mode lets you build
applications to support other media types.
You can batch process image files stored in Cloud Storage with select models.
The output is stored in Cloud Storage.
Supported models
The following models support batch processing:
Tag recognizer
Product recognizer
Supported data types
This page describes how you batch process the following types of data:
Image data
Before you begin
Review the supported models and
supported data types for the batch processing described on this
page.
If you use a Product recognizer model, create a
Catalog and
ProductRecognitionIndex to use when you create a Product
recognizer model for batch processing. Alternatively, identify an existing
product recognizer index or Product recognizer model to use.
If you use a Tag recognizer model, create a model using the
tag recognizer model guide .
Create one or more Cloud Storage buckets for batch
processing input and output.
Locate supported files and
upload them to your Cloud Storage input bucket to be
processed.
User journey
To batch process image data, complete the following general steps:
Enable the Vertex AI Vision API.
Create a supported processor (Product recognizer or Tag recognizer).
Create an application.
Input: Add a universal input node that specifies the files to process in
Cloud Storage.
Processing: Add your model node.
Output: Add the output storage node specifying where the processed data is
stored in Cloud Storage.
Create batch instances of your app, each instance corresponding to a
Cloud Storage bucket input location.
Deploy the app and app instances.
After the batch processing instance finishes, examine the output stored in
Cloud Storage.
Batch process images
The steps to send a batch processing request vary from model to model. Follow
the instructions for your target model to batch process images.
Product recognizer model
Use these samples to batch process images with a Product recognizer model.
Console
Create an image batch processing request in the Google Cloud console.
Create a new application
Open the Applications tab of the Vertex AI Vision dashboard.
Go to the Applications tab
Click the add Create button.
Enter an app name and choose your region.
Click Continue .
Choose your billing method. For more information about the pay as you go
versus monthly billing, see the pricing page .
Click Create .
Specify batch processing inputs
In the graph app builder page, click on the Universal input node.
In the side Universal input pane, click Select input sources .
In the Select input sources page, select
radio_button_checked Batch prediction .
Click Continue .
In the Sources pane, click Browse in the location picker field
to indicate where your files are in Cloud Storage.
Optional. To specify more sources, click Add an item and repeat
the previous step.
Click Submit .
Add the model
In the graph app builder page, click the Product recognizer model
node from the Specialized models section.
In the Product recognizer pane, click Select model .
Select
radio_button_checked Select existing product recognizer model .
If you need to create a new model or index, select the corresponding
option to create the resources.
Choose the model from the list.
Click Select .
Optional. Modify the Confidence threshold .
Click Apply settings .
Add an output destination
In the graph app builder page, click the Cloud Storage model
node from the Output section.
In the Cloud Storage pane, click Browse to select your batch
prediction output destination in Cloud Storage.
Deploy the application
In the graph app builder page, click
play_arrow Deploy .
REST & CMD LINE
Complete the following steps to send your image batch processing request.
Create a Product recognizer model with the
projects.locations.processors.create method.
This request includes reference to Catalog and
ProductRecognitionIndex resources. For information about creating
Catalog and
ProductRecognitionIndex
resources, see the Product recognizer model guide .
curl -X POST \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
-H "Content-Type: application/json" \
https://visionai.googleapis.com/v1alpha1/projects/ PROJECT_ID /locations/ LOCATION_ID /processors?processor_id = product-recognition-model1 \
-d '{
"display_name": " DISPLAY_NAME ",
"model_type": PRODUCT_RECOGNIZER,
"custom_processor_source_info": {
"source_type": PRODUCT_RECOGNIZER,
"product_recognizer_artifact": {
"retail_product_recognition_index":"projects/ PROJECT_ID /locations/ LOCATION_ID /retailCatalogs/ CATALOG_ID /retailProductRecognitionIndexes/ INDEX_ID ",
}
}
}'
Create an application with the newly created Product recognizer model.
This request uses the
projects.locations.applications.create method.
Request body ( app.json ):
{
"applicationConfigs" : {
"nodes" : [
{
"displayName" : " Universal Input " ,
"name" : "universal-input-0" ,
"processor" : "builtin:universal-input"
},
{
"displayName" : " Product Recognition " ,
"name" : "product-recognition" ,
"nodeConfig" : {
"product_recognizer_config" : {
"recognition_confidence_threshold" : 0.75
}
},
"parents" : [
{
"parentNode" : "universal-input-0"
}
],
"processor" : "projects/ PROJECT_ID /locations/ LOCATION_ID /processors/ product-recognition-model1 "
},
{
"displayName" : " Storage output " ,
"name" : "gcs-output" ,
"nodeConfig" : {
"gcs_output_config" : {
"gcs_path" : " gs://product_recognizer_app_output "
}
},
"parents" : [
{
"parentNode" : "product-recognition"
}
],
"processor" : "builtin:gcs-output"
}
]
}
}
Request:
curl -X POST \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
-H "Content-Type: application/json" \
-d @app.json \
'https://visionai.googleapis.com/v1alpha1/projects/ PROJECT_ID /locations/ LOCATION_ID /applications?application_id= product-recognition-app '
Create instances of your application using the
projects.locations.applications.createApplicationInstances
method.
Request body ( instances.json ):
{
"applicationInstances" : [
{
"instance" : {
"instanceType" : "BATCH_PREDICTION" ,
"inputResources" : [
{
"consumerNode" : "universal-input-0" ,
"dataType" : "IMAGE" ,
"inputResource" : " gs://product_recognition_input "
}
]
},
"instanceId" : " instance1 "
},
{
"instance" : {
"instanceType" : "BATCH_PREDICTION" ,
"inputResources" : [
{
"consumerNode" : "universal-input-0" ,
"dataType" : "IMAGE" ,
"inputResource" : " gs://product_recognition_input2 "
}
]
},
"instanceId" : " instance2 "
}
]
}
Request:
curl -X POST \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
-H "Content-Type: application/json" \
-d @instances.json \
'https://visionai.googleapis.com/v1alpha1/projects/ PROJECT_ID /locations/ LOCATION_ID /applications/ product-recognition-app :createApplicationInstances'
Deploy the application.
curl -X POST \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
-H "Content-Type: application/json" \
-d '{}' \
'https://visionai.googleapis.com/v1alpha1/projects/ PROJECT_ID /locations/ LOCATION_ID /applications/ product-recognition-app :deploy'
Get app instances. This information tells you when the batch processing
completes.
In particular, the state field shows when the processing is
complete: "state": "FINISHED" . After the instance completes you can't
modify it.
You can use the
projects.locations.applications.instances.list method
to track instances. Similarly, to remove instances from this list, use
the
projects.locations.applications.deleteApplicationInstances method.
Request:
curl -X GET \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
-H "Content-Type: application/json" \
'https://visionai.googleapis.com/v1alpha1/projects/ PROJECT_ID /locations/ LOCATION_ID /applications/ product-recognition-app /instances'
Sample response:
{
"instances" : [
{
"name" : "projects/ PROJECT_ID /locations/ LOCATION_ID /applications/ product-recognition-app /instances/ instance1 " ,
"createTime" : " 2023-03-30T18:30:51.991004265Z " ,
"inputResources" : [
{
"inputResource" : " gs://product_recognition_input " ,
"consumerNode" : "universal-input-0" ,
"dataType" : "IMAGE"
}
],
"outputResources" : [
{
"outputResource" : " gs://product_recognition_output/instance1 " ,
"producerNode" : "product-recognition" ,
"autogen" : true
}
],
"updateTime" : " 2023-04-18T04:58:18.592092259Z " ,
"state" : "FINISHED" ,
"instanceType" : "BATCH_PREDICTION"
}
}
Tag recognizer model
Use these samples to batch process images with a Tag recognizer model.
REST & CMD LINE
Complete the following steps to send your image batch processing request.
Create a Tag recognizer model with the
projects.locations.processors.create method.
This requires you to specify the resource name of the original model
hosted in the Vertex AI platform ( vertex_model ).
curl -X POST \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
-H "Content-Type: application/json" \
https://visionai.googleapis.com/v1alpha1/projects/ PROJECT_ID /locations/ LOCATION_ID /processors?processor_id = tag-recognition-model1 \
-d '{
"display_name": " DISPLAY_NAME ",
"model_type": TAG_RECOGNIZER,
"custom_processor_source_info": {
"source_type": VERTEX_AUTOML,
"vertex_model": "projects/ PROJECT_ID /locations/ LOCATION_ID /models/ MODEL_ID "
}
}'
Create an application with the newly created Tag recognizer model.
This request uses the
projects.locations.applications.create method.
Request body ( app.json ):
{
"applicationConfigs" : {
"nodes" : [
{
"displayName" : " Universal Input " ,
"name" : "universal-input-0" ,
"processor" : "builtin:universal-input"
},
{
"displayName" : " Tag Recognition " ,
"name" : "tag-recognition" ,
"nodeConfig" : {
"tag_recognizer_config" : {
"tag_parsing_config" : {
"entity_parsing_configs" : [
{
"entity_class" : " price " ,
"regex" : " \\$\\d+\\.\\d{2} " ,
"entity_matching_strategy" : " MAX_OVERLAP_AREA "
}
]
},
"entity_detection_confidence_threshold" : 0.0
}
},
"parents" : [
{
"parentNode" : "universal-input-0"
}
],
"processor" : "projects/ PROJECT_ID /locations/ LOCATION_ID /processors/ tag-recognition-model1 "
},
{
"displayName" : " Storage output " ,
"name" : "gcs-output" ,
"nodeConfig" : {
"gcs_output_config" : {
"gcs_path" : " gs://tag_recognizer_app_output "
}
},
"parents" : [
{
"parentNode" : "tag-recognition"
}
],
"processor" : "builtin:gcs-output"
}
]
}
}
Request:
curl -X POST \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
-H "Content-Type: application/json" \
-d @app.json \
'https://visionai.googleapis.com/v1alpha1/projects/ PROJECT_ID /locations/ LOCATION_ID /applications?application_id= tag-recognition-app '
Create instances of your application using the
projects.locations.applications.createApplicationInstances
method.
Request body ( instances.json ):
{
"applicationInstances" : [
{
"instance" : {
"instanceType" : "BATCH_PREDICTION" ,
"inputResources" : [
{
"consumerNode" : "universal-input-0" ,
"dataType" : "IMAGE" ,
"inputResource" : " gs://tag_recognition_input "
}
]
},
"instanceId" : " instance1 "
},
{
"instance" : {
"instanceType" : "BATCH_PREDICTION" ,
"inputResources" : [
{
"consumerNode" : "universal-input-0" ,
"dataType" : "IMAGE" ,
"inputResource" : " gs://tag_recognition_input2 "
}
]
},
"instanceId" : " instance2 "
}
]
}
Request:
curl -X POST \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
-H "Content-Type: application/json" \
-d @instances.json \
'https://visionai.googleapis.com/v1alpha1/projects/ PROJECT_ID /locations/ LOCATION_ID /applications/ tag-recognition-app :createApplicationInstances'
Deploy the application.
curl -X POST \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
-H "Content-Type: application/json" \
-d '{}' \
'https://visionai.googleapis.com/v1alpha1/projects/ PROJECT_ID /locations/ LOCATION_ID /applications/ tag-recognition-app :deploy'
Get app instances. This information tells you when the batch processing
completes.
In particular, the state field shows when the processing is
complete: "state": "FINISHED" . After the instance completes you can't
modify it.
You can use the
projects.locations.applications.instances.list method
to track instances. Similarly, to remove instances from this list, use
the
projects.locations.applications.deleteApplicationInstances method.
Request:
curl -X GET \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
-H "Content-Type: application/json" \
'https://visionai.googleapis.com/v1alpha1/projects/ PROJECT_ID /locations/ LOCATION_ID /applications/ tag-recognition-app /instances'
Sample response:
{
"instances" : [
{
"name" : "projects/ PROJECT_ID /locations/ LOCATION_ID /applications/ tag-recognition-app /instances/ instance1 " ,
"createTime" : " 2023-03-30T18:30:51.991004265Z " ,
"inputResources" : [
{
"inputResource" : " gs://tag_recognition_input " ,
"consumerNode" : "universal-input-0" ,
"dataType" : "IMAGE"
}
],
"outputResources" : [
{
"outputResource" : " gs://tag_recognition_output/instance1 " ,
"producerNode" : "tag-recognition" ,
"autogen" : true
}
],
"updateTime" : " 2023-04-18T04:58:18.592092259Z " ,
"state" : "FINISHED" ,
"instanceType" : "BATCH_PREDICTION"
}
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
