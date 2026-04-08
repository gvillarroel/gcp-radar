---
title: "Troubleshoot AML AI \_|\_ Anti Money Laundering AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/troubleshooting
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/create-and-manage-backtest-results
source_metadata:
  url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/troubleshooting
  title: "Troubleshoot AML AI \_|\_ Anti Money Laundering AI \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Troubleshoot AML AI | Anti Money Laundering AI | Google Cloud Documentation
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
Permission errors The service account doesn't have permission to access the KMS key
Dataset issues Unexpected results
Home
Documentation
Industry solutions
Anti Money Laundering AI
Guides
Was this helpful?
Send feedback
Troubleshoot AML AI
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Permission errors The service account doesn't have permission to access the KMS key
Dataset issues Unexpected results
This page shows you how to resolve issues with AML AI.
Permission errors
This section lists permission errors that you might encounter and provides
suggestions for how to fix each of them.
The service account doesn't have permission to access the KMS key
The API automatically creates a service account in your project. The service
account needs access to the CMEK key so it can use the key to encrypt and
decrypt the underlying data. (It also needs read access to the BigQuery input
dataset to be used for creating models, and it needs write access to the
BigQuery output dataset.) The following error occurs when the service account
does not have permission to access the KMS key:
See more code actions.
Light code theme
Dark code theme
Error code 400 - service-account @gcp-sa-financialservices.iam.gserviceaccount.com
lacks permissions to KMS key
To resolve this issue, grant access to the key. For more information, see
Grant access to the CMEK key .
Dataset issues
This section lists dataset issues that you might encounter and provides
suggestions for how to fix each of them.
Unexpected results
A Financial Services API dataset resource is a pointer to data in BigQuery. It
does not hold or point to any specific snapshot of the data in these tables. If
data is modified after a dataset is created (for example, if records are
deleted), this will be reflected in the results of other calls to the API (for
example, the creation of new models or when running predictions).
To reduce the occurrences of unexpected results, be sure to maintain the
integrity of the data in BigQuery.
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
