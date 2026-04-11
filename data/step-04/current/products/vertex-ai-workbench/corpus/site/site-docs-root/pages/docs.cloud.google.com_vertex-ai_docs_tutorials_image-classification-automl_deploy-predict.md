---
title: "Hello image data: Deploy a model to an endpoint and send a prediction \_|\_\
  \ Vertex AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl/deploy-predict
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl/deploy-predict
  title: "Hello image data: Deploy a model to an endpoint and send a prediction \_\
    |\_ Vertex AI \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI
Send feedback
Hello image data: Deploy a model to an endpoint and send a prediction
Stay organized with collections
Save and categorize content based on your preferences.
After your AutoML image classification model is done training, use the
Google Cloud console to create an endpoint and deploy your model to
the endpoint. After your model is deployed to this new endpoint, send an image
to the model for label prediction.
This tutorial has several pages:
Set up your project and environment.
Create an image classification dataset, and
import images.
Train an AutoML image classification
model.
Evaluate and analyze model performance.
Deploy a model to an endpoint, and send a
prediction.
Clean up your project.
Each page assumes that you have already performed the instructions from the
previous pages of the tutorial.
Deploy your model to an endpoint
Access your trained model to deploy it to a new or existing endpoint from
the Models page:
In the Google Cloud console, in the Vertex AI section, go to
the Training page.
Go to the Training page
Select your trained AutoML model. This takes you to the Evaluate tab
where you can view model performance metrics.
Choose the tab Deploy & test tab.
Click Deploy to endpoint .
Choose radio_button_checked Create new
endpoint , set the endpoint name to hello_automl_image , then click
Continue .
In Model settings , accept the Traffic split of
100% , enter 1 in Number of compute nodes , then click Done .
Click Deploy to deploy your model to your new endpoint.
It takes several minutes to create the endpoint and deploy the AutoML model
to the new endpoint.
Send a prediction to your model
After the endpoint creation process finishes you can send a single image
annotation (prediction) request in the Google Cloud console.
Navigate to the "Test your model" section of the same Deploy & test tab
you used to create an endpoint in the previous step
( Models > your_model > tab Deploy & test ).
Click Upload image and choose a locally saved image for prediction, and
view its predicted label.
Image credit :
Siming Ye, Unsplash ( shown in UI view ).
What's next
Follow the last page of the tutorial to clean up
resources that you have created.
Previous
arrow_back
Evaluate and analyze model performance
Next
Clean up your project
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
