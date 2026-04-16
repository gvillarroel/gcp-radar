---
title: "Hello tabular data: Create a dataset and train an AutoML classification model\
  \ \_|\_ Vertex AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-automl/dataset-train
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs/general/access-control
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-automl/dataset-train
  title: "Hello tabular data: Create a dataset and train an AutoML classification\
    \ model \_|\_ Vertex AI \_|\_ Google Cloud Documentation"
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
Hello tabular data: Create a dataset and train an AutoML classification model
Stay organized with collections
Save and categorize content based on your preferences.
Use the Google Cloud console to create a tabular dataset and train a classification
model.
Create a tabular dataset
In the Google Cloud console, in the Vertex AI section, go to
the Datasets page.
Go to the Datasets page
Click Create in the button bar to create a new dataset.
Enter Structured_AutoML_Tutorial for the dataset name and select the
Tabular tab.
Select the Regression/Classification objective.
Leave the Region set to us-central1 .
Click Create to create the dataset.
For this tutorial, you'll use a publicly available bank dataset hosted on Cloud Storage.
For Select a data source , click Select CSV files from Cloud
Storage
In Import file path , enter cloud-ml-tables-data/bank-marketing.csv
Click Continue .
Analyze the dataset
The analyze section lets you view more information about the dataset, like
missing or NULL values.
Because our dataset is formatted correctly for this tutorial, you don't need to
do anything on this page and can skip this section.
Optional . Click Generate statistics to view the number of missing or
NULL values in the dataset. This can take 10 minutes or longer.
Optional . Click on one of the feature columns to learn more about the data values.
Train an AutoML classification model
Click Train new model .
Select Other .
In the Training method pane, confirm that the dataset you created
previously is selected for the Dataset field.
For the Objective field, select Classification .
Confirm that the AutoML training method is selected.
Click Continue .
In the Model details pane, select Deposit for the target column and
click Continue .
The target column is what we're training the model to predict. For the
bank-marketing.csv dataset, the Deposit column indicates whether the
client purchased a term deposit (2 = yes, 1 = no).
The Training options pane gives you an opportunity to add features and
transform column data. If no columns are selected, then by default all non-
target columns will be used as features for training. This dataset is ready
to use, so there's no need to apply any transformations.
Click Continue .
In the Compute and pricing pane, enter 1 for the training budget.
The training budget is the maximum time (may vary slightly) that the model
spends training. This value is multiplied by the
price per node hour
to calculate to total training cost. More training hours results in a more
accurate (up to a point) model but results in a higher cost. For development
purposes, a low budget is fine but for production it's important to strike a
balance between cost and accuracy.
Click Start training .
When the model finishes training, it's displayed in the model tab as a live
link, with a green checkmark status icon.
What's next
Your model is now being trained, which can take an hour or more to complete.
You'll receive an email when training is complete. When your model has finished
training, follow the next page of this tutorial to
deploy your model and request a prediction.
This tutorial uses a dataset that's been cleaned and formatted for
AutoML training, but most data will require some work before it's ready
to be used. The quality of your training data impacts the effectiveness of the
models you create. Learn more about preparing data.
Sourcing and preparing your data is a critical to ensuring an accurate machine
learning model. Learn more about best
practices.
Learn more
about creating a tabular dataset.
Vertex AI offers two model training methods, AutoML and custom
training. AutoML lets you train with minimal effort and machine
learning experience, while custom training gives you complete control over
training functionality. Learn more about
training methods.
Vertex AI examines the source data type and feature values and infers how
it will use that feature in model training. It's recommended that you review
each column's data type to verify that it's been interpreted correctly. If
needed, you can specify a different supported transformation for any feature.
Learn more about transformations.
Learn more about training an AutoML for classification or regression.
Previous
arrow_back
Set up your project and environment
Next
Deploy a model and request an inference
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
