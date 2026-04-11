---
title: "Hosted Custom Model for Earth Engine \_|\_ Google Earth Engine \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/earth-engine/guides/ee-vertex-hosting-a-model
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://developers.google.com/earth-engine/guides
source_metadata:
  url: https://developers.google.com/earth-engine/guides/ee-vertex-hosting-a-model
  title: "Hosted Custom Model for Earth Engine \_|\_ Google Earth Engine \_|\_ Google\
    \ for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Earth Engine is introducing noncommercial quota tiers to safeguard shared compute resources and ensure reliable performance for everyone. All noncommercial projects will need to select a quota tier by April 27, 2026 or will use the Community Tier by default. Tier quotas will take effect for all projects (regardless of tier selection date) on April 27, 2026 . Learn more.
Home
Products
Google Earth Engine
Guides
Send feedback
Hosted Custom Model for Earth Engine
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Performing inference with a custom trained model requires saving and uploading the model to Vertex AI, creating a prediction endpoint and deploying the model.
Before saving and uploading, ensure your model accepts data in a payload format that Earth Engine supports.
TensorFlow models must be saved in the SavedModel format, while PyTorch models should be converted to TorchScript and archived for deployment.
Model deployment involves uploading your saved model artifact to Google Cloud Storage and then using Vertex AI's Model Registry or gcloud commands to upload and deploy the model to an endpoint.
After uploading the model, create an endpoint and deploy the model to it, optionally enabling gRPC predictions for optimal performance.
Performing inference with a custom trained model using a machine learning
framework such as TensorFlow or PyTorch requires saving and uploading the model
to Vertex AI, creating a prediction endpoint and deploying the model to serve
traffic at the created endpoint.
Model Input
Before you save and upload your model to Vertex AI you should ensure that the
model accepts data in a payload format that Earth Engine supports. For more
details see our payload formats page for more
details.
Model Artifact
The next step is to save your model to a format that is hostable in Vertex AI.
TensorFlow
TensorFlow based models can be saved in several different formats, but Vertex
AI requires the SavedModel format. Keras based models must be exported as
SavedModels with
tf.keras.Model.export() .
Other TensorFlow models require using the more primitive
tf.saved_model.save() .
See the documentation on the
SavedModel format for more
details.
PyTorch
PyTorch models have a slightly different way to prepare the model artifacts for
prediction serving. If creating a custom trained model, the model must first be
saved. For performance reasons it is recommended to convert your PyTorch model
to TorchScript and saved the model file with:
model_scripted = torch . jit . script ( model ) # Export to TorchScript
model_scripted . save ( 'model.pt' ) # Save
Once the model file is saved it needs to be archived so it can be deployed to
Vertex AI. When using a prebuilt container the model
must be named "model" .
To archive the model torch-model-archiver needs to be run including any custom
handler and additional files your model requires. An example of that is here:
torch-model-archiver -f \
--model-name model \
--version 1 .0 \
--serialized-file $model_file \
--handler $hander_file \
--extra-files $index_to_name_file \
--export-path $model_path
Model Deployment to Vertex AI
Once your model files are saved the next step is to upload your model to Vertex
AI. If your model artifact is not already in Google Cloud Storage copy your
model archive there first with a command like gsutil cp $model_path
gs://${your-bucket}/models/model .
Once copied you can either use the
Vertex AI's Model Registry
to upload your model or use gcloud command line and run something like:
gcloud ai models upload \
--artifact-uri = gs:// { your-bucket } /models/model \
--display-name = ${ display -name } \
--container-image-uri = ${ model -container } \
--container-grpc-ports = 8500
TIP: For optimal performance enable gRPC predictions with the
container-grpc-ports flag. See more information about gRPC predictions at our
payload formats documentation .
This flag can only be specified using the gcloud commandline tool.
Model Endpoint Management
Once a model is uploaded to Vertex AI, create an endpoint and deploy the model
through the Online Prediction page by
creating a new endpoint
or by using the gcloud command line with the commands endpoints create and
endpoints deploy-model . For example:
Creating an model:
gcloud ai endpoints create \
--display-name = ${ endpoint -name }
Deploying a model
gcloud ai endpoints deploy-model { endpoint-id } \
--model = ${ model -id } \
--traffic-split = 0 = 100 \
--display-name = ${ model -display-name } \
--min-replica-count = ${ min -replica-count } \
--max-replica-count = ${ max -replica-count }
Once your model is deployed you are ready to connect to your model in Earth
Engine to perform inferences.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-10-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-14 UTC."],[],[]]
