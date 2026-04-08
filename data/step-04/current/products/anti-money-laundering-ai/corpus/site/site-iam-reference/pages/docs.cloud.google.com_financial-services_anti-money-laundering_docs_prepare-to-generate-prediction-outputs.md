---
title: "Prepare to generate prediction outputs \_|\_ Anti Money Laundering AI \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/prepare-to-generate-prediction-outputs
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/create-and-manage-backtest-results
source_metadata:
  url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/prepare-to-generate-prediction-outputs
  title: "Prepare to generate prediction outputs \_|\_ Anti Money Laundering AI \_\
    |\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Prepare to generate prediction outputs | Anti Money Laundering AI | Google Cloud Documentation
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
Before you begin
Create a dataset for prediction
Prepare the output destinations
Generate risk scores and explainability
Home
Documentation
Industry solutions
Anti Money Laundering AI
Guides
Was this helpful?
Send feedback
Prepare to generate prediction outputs
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Create a dataset for prediction
Prepare the output destinations
Generate risk scores and explainability
This page describes how to prepare the datasets needed to generate prediction
outputs.
Before you begin
Before you begin, you need the following:
A
model
To
register all parties
that appear in the dataset you are using for prediction
Note: The operations in the following sections take several hours to complete.
To check the status of an operation, see
Manage long-running operations .
Create a dataset for prediction
You can create predictions using an existing dataset (for example, the one you
were using for backtesting). However, in a production environment, we recommend
that you create a new dataset for each prediction run:
As a customer, you're responsible for all tracking of lineage from dataset
to model. To ensure data remains unchanged, we recommend that you
create a BigQuery table snapshot
of your BigQuery tables after they pass data validation and reference the snapshot in
the AML AI dataset. If you reference regularly updated tables, AML AI
operations read the BigQuery tables each time an operation uses the AML AI
dataset, so changes to the underlying BigQuery tables could impact tuning, training,
backtesting, and predictions.
Follow the guidance under Prepare Data for AML AI to prepare your BigQuery
tables and then create a separate AML AI dataset for prediction
using the tables you snapshotted in Step 1. To create the
BigQuery datasets and tables, you can use the commands in
Prepare BigQuery datasets and tables .
Prepare the output destinations
AML AI generates prediction outputs (risk scores and
explainability) in BigQuery when you create a prediction results
resource .
Before creating prediction results, you must
create a BigQuery dataset
for these outputs. Any BigQuery dataset can be used for
prediction outputs, as long as the
correct permissions are granted
and the dataset is in the same project where the API is enabled and in the same
location as the AML AI instance.
Generate risk scores and explainability
Now that you have the dataset for prediction, a
trained model resource , and a BigQuery dataset for output, you can create prediction results.
To do this, see
Create and manage prediction results .
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
