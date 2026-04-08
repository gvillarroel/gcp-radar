---
title: "Generate a model \_|\_ Anti Money Laundering AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/generate-model
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/create-and-manage-backtest-results
source_metadata:
  url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/generate-model
  title: "Generate a model \_|\_ Anti Money Laundering AI \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Generate a model | Anti Money Laundering AI | Google Cloud Documentation
Skip to main content
Technology areas
close
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Cross-product tools
close
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
More
/
Console
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Anti Money Laundering AI
Start free
Overview
Guides
Reference
Resources
More
Technology areas
More
Overview
Guides
Reference
Resources
Cross-product tools
More
Console
Discover
Product overview
Process overview
Architectural overview
Security and compliance features
Documentation policy
Glossary
Quickstart
Train and test models designed to detect money laundering
Get started
Set up a project and permissions
Create an instance
Prepare Big Query datasets and tables
Prepare data for AML AI
Understand the AML data model and requirements
Understand data scope and duration
Select data for best performance and typology coverage
Create and manage AML AI datasets
Generate a model and evaluate performance
Overview of model preparation
Configure an engine
Manage engine versions
Create and manage engine configs
Generate a model
Create and manage models
Evaluate a model
Copy models to new instances
Create and manage backtest results
Generate risk scores and explainability
Register your parties
Party registration sharing for multiple instances
Prepare to generate prediction outputs
Create and manage prediction results
Understand prediction outputs
Best practices for your investigation process
Prepare for model and risk governance
Collect model and risk governance artifacts
Evaluate model fairness
Troubleshoot
Troubleshoot AML AI
Data validation errors
Administer AML AI
Access control
Access control with IAM
Authenticate to AML AI
Data residency
VPC service controls
Encryption
Understand encryption in transit
Encrypt data at rest (CMEK)
Monitor AML AI resources
Use audit logs
Use platform logs
Manage instances
Manage long-running operations
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
On this page
When to train or re-train
How to train
Training output
Home
Documentation
Industry solutions
Anti Money Laundering AI
Guides
Was this helpful?
Send feedback
Generate a model
Stay organized with collections
Save and categorize content based on your preferences.
On this page
When to train or re-train
How to train
Training output
This page briefly covers concepts behind model training. An AML AI
model resource represents a trained model that can be used to generate risk
scores and explainability.
When to train or re-train
AML AI trains a model as part of creating a
Model resource . The model
must be trained before it can be evaluated (that is, backtested) or used to
generate prediction results.
For best performance and to maintain the most up-to-date models, consider
monthly re-training. However, a given engine version supports generating
prediction results for 12 months from the
release of a newer minor engine version.
Note: Training is a billable operation requiring significant compute resources
and may take days to complete. For more information, see the
Pricing page .
How to train
To train a model (that is, create a model), see
Create and manage models .
In particular, you need to select the following:
The data to use for training:
Specify a dataset and an end time within the date range of the dataset.
Training uses labels and features based on complete calendar months up to,
but not including, the month of the selected end time. For more information,
see
Dataset time ranges .
An engine config created using a consistent dataset :
See
Configure an engine .
Training output
Training generates a
Model resource , which can
be used to do the following:
Create backtest results, which are used to evaluate model performance using
currently-known true positives
Create prediction results, which are used once you are ready to start
reviewing new cases for potential money laundering
The
model metadata
contains the missingness metric, which can be used to assess
dataset consistency
(for example, by comparing the missingness values of feature families from
different operations)
Metric name
Metric description
Example metric value
Missingness
Share of missing values across all features in each feature family.
Ideally, all AML AI feature families should have a
Missingness near to 0. Exceptions may occur where the data underlying
those feature families is unavailable for integration.
A significant change in this value for any feature family between tuning,
training, evaluation, and prediction can indicate inconsistency in the
datasets used.
{
"featureFamilies": [
{
"featureFamily": "unusual_wire_credit_activity",
"missingnessValue": 0.00,
},
...
...
{
"featureFamily": "party_supplementary_data_id_3",
"missingnessValue": 0.45,
},
],
}
Importance
A metric that shows the importance of a feature family to the model. Higher values indicate more significant use of the feature family in the model. A feature family that is not used in the model has zero importance.
Importance values can be used when prioritizing acting on family skew results. For example, the same skew value for a family with higher importance to the model is more urgent to resolve.
{
"featureFamilies": [
{
"featureFamily": "unusual_wire_credit_activity",
"importanceValue": 459761000000,
},
...
...
{
"featureFamily": "party_supplementary_data_id_3",
"importanceValue": 27492,
},
],
}
Model metadata does not contain recall metrics from a test set. To generate
recall measurements for a specific time period (for example, the test set), see
Evaluate a model .
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-06 UTC."],[],[]]
Products and pricing
See all products
Google Cloud pricing
Google Cloud Marketplace
Contact sales
Support
Community forums
Support
Release Notes
System status
Resources
GitHub
Getting Started with Google Cloud
Code samples
Cloud Architecture Center
Training and Certification
Engage
Blog
Events
X (Twitter)
Google Cloud on YouTube
Google Cloud Tech on YouTube
About Google
Privacy
Site terms
Google Cloud terms
Manage cookies
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter
Subscribe
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
