---
title: "Custom-based extraction \_|\_ Document AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/document-ai/docs/custom-based-extraction
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/document-ai/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/document-ai/docs/custom-based-extraction
  title: "Custom-based extraction \_|\_ Document AI \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Document AI
Guides
Send feedback
Custom-based extraction
Stay organized with collections
Save and categorize content based on your preferences.
Custom model training and extraction lets you to build your own model designed specifically for your documents without the use
of generative AI. It's ideal if you don't want to use generative AI and want to control all aspects of the trained model.
Dataset configuration
A document dataset is required to train, up-train, or evaluate a processor version.
Document AI processors learn from examples, just like humans. Dataset fuels
processor stability in terms of performance.
Train dataset
To improve the model and its accuracy, train a dataset on your documents. The model is
made up of documents with ground-truth. You need a minimum of three documents to train a new model.
Ground-truth is the correctly labeled data, as determined by humans.
Test dataset
The test dataset is what the model uses to generate an F1 score (accuracy). It is
made up of documents with ground-truth. To see how often the model is right, the
ground truth is used to compare the model's predictions (extracted fields from
the model) with the correct answers. The test dataset should have at least three documents.
Before getting started
If not done so already, enable billing and the
Document AI API .
Build and evaluate a custom model
Begin by building and then evaluating a custom processor.
Create a processor
and define fields
you want to extract, which is important because it impacts extraction quality.
Note: The default processor is a foundation model.
Set dataset location: Select the default option folder Google-managed .
This might be done automatically shortly after creating the processor.
Navigate to the Build tab and select Import Documents with auto-labeling
enabled (see Auto-labeling with the foundation model ). You need a minimum of
10 documents in the training set and 10 in the testing set to train a custom model.
Train model:
Select Train new version and name the processor version.
Go to Show advanced options and select the Model based option.
Note: It takes some time for the training to complete.
Evaluation:
Go to Evaluate & test , select the version you just trained, then select View full evaluation .
You now see metrics such as f1, precision, and recall
for the entire document and each field.
Decide if performance meets your production goals. If it does not, then reevaluate
training and testing sets, typically adding documents to the training test set
that don't parse well.
Set a new version as the default.
Navigate to Manage versions .
Navigate to the more_vert menu and then select Set as default .
Your model is now deployed and documents sent to this processor are now using your
custom version. You want to evaluate the model's performance
to check if it requires further training.
Evaluation reference
The evaluation engine can do both exact match or fuzzy matching .
For an exact match, the extracted value must exactly match the ground truth or is counted as a miss.
Fuzzy matching extractions that had slight differences such as capitalization
differences still count as a match. This can be changed at the Evaluation screen.
Auto-labeling with the foundation model
The foundation model can accurately extract fields for a variety of document types,
but you can also provide additional training data to improve the accuracy of the
model for specific document structures.
Document AI uses the label names you define and previous annotations to label
documents at scale with auto-labeling.
When you've created a custom processor, go to the Get Started tab.
Select Create new field .
Provide a descriptive name and fill out the description field. Property
description lets you provide additional context, insights, and prior knowledge
for each entity to improve extraction accuracy and performance.
Note: Good examples of property descriptions include location information and text
patterns of the property values, which help disambiguate potential sources of
confusion in the document, guiding the model with rules that ensure more reliable
and consistent extractions, regardless of the specific document structure or content variations.
Navigate to the Build tab, then select Import documents .
Select the path of the documents and which set the documents should be imported
into. Check the auto-labeling box, and select the foundation model.
In the Build tab, select Manage Dataset . You should see your imported
documents. Select one of your documents.
You now see the predictions from the model highlighted in purple.
Review each label predicted by the model and ensure is correct. If there are missing
fields, add those as well.
Note: It's important that all fields are as accurate as possible or model performance
might affect the results. More details on labeling .
After the document has been reviewed, select Mark as labeled .
The document is now ready to be used by the model. Make sure the document is in
either the Testing or Training set.
Previous
arrow_back
Automated schema extraction
Next
Template-based extraction
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
