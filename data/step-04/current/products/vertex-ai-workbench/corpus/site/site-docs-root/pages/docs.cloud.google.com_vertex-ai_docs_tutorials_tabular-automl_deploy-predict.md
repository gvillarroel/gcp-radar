---
title: "Hello tabular data: Deploy a model and request a prediction \_|\_ Vertex AI\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-automl/deploy-predict
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-automl/deploy-predict
  title: "Hello tabular data: Deploy a model and request a prediction \_|\_ Vertex\
    \ AI \_|\_ Google Cloud Documentation"
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
Hello tabular data: Deploy a model and request a prediction
Stay organized with collections
Save and categorize content based on your preferences.
After your AutoML tabular classification model is done training,
create an endpoint and deploy your model to
the endpoint. After your model is deployed to this new endpoint, test your
model by requesting a prediction.
Load your model
When your model finishes training, it is listed in the Models tab.
In the Google Cloud console, in the Vertex AI section, go to
the Models page.
Go to the Models page
From the models list, click the name of your trained model that you created previously
Models are organized into versions. Click model version number 1.
Evaluate your model
The Evaluate panel helps you understand how the model performed against the
test set. When you are done, continue to the next part of the tutorial.
Evaluation metrics
Optional . Hold the pointer over the ? icons to learn about each evaluation
metric.
Optional . Move the confidence threshold slider to see how the precision,
recall, and F1 scores are affected.
Confusion matrix
The confusion matrix shows how a prediction compares to the test set (ground
truth).
Recall that label "1" is the negative class (the customer did not sign up for a
term deposit) and "2" is the positive class. Your model likely did a better job
predicting the negative class than the positive class. Perhaps with additional
training time, more data, or additional features, you could improve predictive
performance for the positive class.
Feature importance
Feature importance shows how each feature impacted model training: The
higher the value, the more impactful.
Your model probably shows that duration (how long the most recent
communication between the bank and customer lasted, in seconds) contributed
heavily to the prediction outcome.
Deploy your model to an endpoint
To test a model or make online predictions, you need to deploy it to an endpoint.
Open the Deploy & Test panel.
Under Deploy your model , click Deploy to endpoint .
Enter Structured_AutoML_Tutorial for the endpoint name.
Click Continue .
Keep the minimum compute node at 1 and don't enter a maximum.
Select n1-standard-2 machine type.
Click Continue .
Turn off model monitoring for this endpoint.
To create your endpoint and deploy your model to the endpoint,
click Deploy .
Model deployment takes around 5 minutes. When your endpoint is ready, proceed
to the next part of the tutorial.
Note: Make sure to undeploy the model later so you aren't charged for
additional compute resources. We'll show you how to do that at the end of
this tutorial.
Request a prediction
Now that your model is deployed to an endpoint, you can send prediction
requests. Rather than send a request through the API or gcloud, you can test
your model on this page.
In the Test your model section, you'll see a Value column that's
pre-filled. You can use those values or enter new ones.
At the bottom of the section, press Predict .
For this model, a prediction result of 1 represents a negative
outcome—a deposit is not made at the bank. A prediction result of 2
represents a positive outcome—a deposit is made at the bank.
Your model will return a confidence score, which is the model's level of
certainty that the selected label is the correct one. The default value
probably returned a high confidence score.
Optional . Try changing duration to a much higher value and press Predict again.
What's next
To avoid incurring unexpected charges, follow the instructions in
Clean up your project
Learn more
about model evaluation.
Learn more
about model predictions.
Previous
arrow_back
Create a dataset and train an AutoML classification model
Next
Clean up your project
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
