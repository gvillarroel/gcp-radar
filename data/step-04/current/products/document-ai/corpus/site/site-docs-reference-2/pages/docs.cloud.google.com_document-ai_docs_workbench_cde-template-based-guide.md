---
title: "Template-based extraction \_|\_ Document AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/document-ai/docs/workbench/cde-template-based-guide
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/document-ai/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/document-ai/docs/workbench/cde-template-based-guide
  title: "Template-based extraction \_|\_ Document AI \_|\_ Google Cloud Documentation"
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
Template-based extraction
Stay organized with collections
Save and categorize content based on your preferences.
You can train a high-performing model with as little as three training and three test
documents for fixed-layout use cases. Accelerate development and reduce time to
production for templated document types like W9, 1040, ACORD, surveys, and questionnaires.
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
Before you begin
If not already done, enable:
Billing
Document AI API
Template-mode labeling best practices
Proper labeling is one of the most important steps to achieving high accuracy.
Template mode has some unique labeling methodology that differs from other training modes:
Draw bounding boxes around the entire area you expect data to be in (per label)
within a document, even if the label is empty in the training document you're labeling.
You may label empty fields for template-based training. Don't label empty fields
for model-based training.
Recommended. Labeling example for template-based training to extract the top
section of a 1040.
Not recommended. Labeling example for template-based training to extract the top section
of a 1040. This is the labeling technique you should use for model-based training
for documents with layout variation across documents.
Build and evaluate a custom extractor with template mode
Create a custom extractor. Create a processor
and define fields
you want to extract following best practices ,
which is important because it impacts extraction quality.
Set dataset location. Select the default option folder (Google-managed). This
might be done automatically shortly after creating the processor.
Navigate to the Build tab and select Import documents with auto-labeling
enabled. Adding more documents than the minimum of three needed typically doesn't improve quality for
template-based training. Instead of adding more, focus on labeling a small set very accurately.
Note: You can experiment by increasing the training set size if you observe
template variations in your dataset. Try to include at least three training documents
per variation. At least three training documents, three test documents, and three
schema labels are required per set.
Extend bounding boxes. These boxes for template mode should look like the preceding
examples. Extend the bounding boxes, following the best practices for the optimal result.
Train model.
Select Train new version .
Name the processor version.
Go to Show advanced options and select the template-based model approach.
Note: It takes some time for the training to complete.
Evaluation.
Go to Evaluate & test .
Select the version you just trained, then select View Full Evaluation .
You now see metrics such as F1, precision, and recall for the entire document and each field.
1. Decide if performance meets your production goals, and if not, reevaluate training and testing sets.
Set a new version as the default.
Navigate to Manage versions .
Select to see the settings menu, then mark Set as default .
Your model is now deployed and documents sent to this processor use your custom
version. You want to evaluate the model's performance ( more details
on how to do that) to check if it requires further training.
Evaluation reference
The evaluation engine can do both exact match or fuzzy matching .
For an exact match, the extracted value must exactly match the ground truth or is counted as a miss.
Fuzzy matching extractions that had slight differences such as capitalization
differences still count as a match. This can be changed at the Evaluation screen.
Auto-labeling with the foundation model
The foundation model can accurately extract fields for a variety of document types,
but you can also provide additional training data to improve the accuracy of the
model for specific document structures.
Document AI uses the label names you define and previous annotations to make
it quicker and easier to label documents at scale with auto-labeling.
After creating a custom processor, go to the Get started tab.
Select Create New Field .
Note: The label name with the foundation model can greatly affect model accuracy
and performance. Be sure to give a descriptive name.
Navigate to the Build tab and then select Import documents .
Select the path of the documents and which set the documents should be imported
into. Check the auto-labeling checkbox and select the foundation model.
In the Build tab, select Manage dataset . You should see your imported
documents. Select one of your documents.
You see the predictions from the model highlighted in purple, you need to review
each label predicted by the model and ensure it's correct. If there are missing
fields, you need to add those as well.
Note: It's important that all fields are as accurate as possible or model
performance is going to be affected. For more details on labeling .
Once the document has been reviewed, select Mark as labeled .
The document is now ready to be used by the model. Make sure the document is
in either the testing or training set.
Previous
arrow_back
Custom-based extraction
Next
Custom extractor with generative AI
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
