---
title: "Hello image data: Create an image classification dataset and import images\
  \ \_|\_ Vertex AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl/dataset
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl/dataset
  title: "Hello image data: Create an image classification dataset and import images\
    \ \_|\_ Vertex AI \_|\_ Google Cloud Documentation"
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
Hello image data: Create an image classification dataset and import images
Stay organized with collections
Save and categorize content based on your preferences.
Use the Google Cloud console to create an image classification dataset.
After your dataset is created, use a CSV pointing to images in a public
Cloud Storage bucket to import those images into the dataset.
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
Image data input file
Key point : A single dataset can be used for
multiple objectives. This tutorial focuses on image classification
(applying a label to an image), but the same data could be used for another
objective, such as object detection (object identification and
labeling).
The image files you use in this tutorial are from the flower dataset used in
this Tensorflow blog post .
These input images are stored in a public Cloud Storage bucket. This
publicly-accessible bucket also contains a CSV file you use for data import.
This file has two columns:
the first column lists an image's URI in Cloud Storage, and the second
column contains the image's label. Below you can see some sample rows:
gs://cloud-samples-data/ai-platform/flowers/flowers.csv :
gs://cloud-samples-data/ai-platform/flowers/daisy/10559679065_50d2b16f6d.jpg,daisy
gs://cloud-samples-data/ai-platform/flowers/dandelion/10828951106_c3cd47983f.jpg,dandelion
gs://cloud-samples-data/ai-platform/flowers/roses/14312910041_b747240d56_n.jpg,roses
gs://cloud-samples-data/ai-platform/flowers/sunflowers/127192624_afa3d9cb84.jpg,sunflowers
gs://cloud-samples-data/ai-platform/flowers/tulips/13979098645_50b9eebc02_n.jpg,tulips
Create an image classification dataset and import data
Visit the Google Cloud console
to begin the process of creating your dataset and training your image
classification model.
When prompted, make sure to select the project that you used for your Cloud
Storage bucket.
From the Get started with Vertex AI page, click
Create dataset .
Specify a name for this dataset (optional).
In the Image tab of the "Select a data type and objective" section, choose
the
radio_button_checked Image classification (Single-label)
radio option. In the Region drop-down menu select US Central .
Select Create to create the empty dataset. After selecting Create you
will advance to the data import window.
Select the radio_button_checked Select
import files from Cloud Storage and specify the Cloud Storage
URI of the CSV file with the image location and label data. For this
quickstart, the CSV file is at
gs://cloud-samples-data/ai-platform/flowers/flowers.csv . Copy and paste
the following into the "Import file path" field:
cloud-samples-data/ai-platform/flowers/flowers.csv
Click Continue to begin image import. The import process takes a
few minutes. When it completes, you are taken to the next page that shows
all of the images identified for your dataset, both labeled and
unlabeled images.
When using the indicated flower dataset, you will
see several warning alerts. This is purposeful, to show you error
messages you may encounter with your own data.
What's next
Follow the next page of this tutorial to start an
AutoML model training job.
Previous
arrow_back
Set up your project and environment
Next
Train an AutoML image classification model
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
