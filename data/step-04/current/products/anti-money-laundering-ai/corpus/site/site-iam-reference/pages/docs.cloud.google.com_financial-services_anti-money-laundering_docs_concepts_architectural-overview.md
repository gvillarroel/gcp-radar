---
title: "Architectural overview \_|\_ Anti Money Laundering AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/concepts/architectural-overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/create-and-manage-backtest-results
source_metadata:
  url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/concepts/architectural-overview
  title: "Architectural overview \_|\_ Anti Money Laundering AI \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Architectural overview | Anti Money Laundering AI | Google Cloud Documentation
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
What is AML AI?
Interface
Data
Services used by AML AI
What's Next
Home
Documentation
Industry solutions
Anti Money Laundering AI
Guides
Was this helpful?
Send feedback
Architectural overview
Stay organized with collections
Save and categorize content based on your preferences.
On this page
What is AML AI?
Interface
Data
Services used by AML AI
What's Next
What is AML AI?
AML AI is an API-based machine learning pipeline for
automatically training, testing, deploying, and monitoring a productionized
anti-money laundering (AML) model. As a managed service, Google takes care of
the infrastructure behind the scenes and presents teams with a production-ready
system to train, predict, and backtest models to tackle money laundering.
Interface
The main way of interacting with AML AI API is using the
https://financialservices.googleapis.com endpoint with REST API calls. The
Google Cloud CLI tool is not supported for directly calling the
AML AI API, but it is recommended to use the Google Cloud CLI to
obtain credentials.
You may want to use programming languages to interact with AML AI.
To make coding against AML AI easier, Google provides
generic API client libraries
for a number of different languages that can reduce the amount of code you need
to write and make your code more robust.
Each of the API client libraries provide a means to use application default
credentials (ADC).
Note: There are no API-specific Cloud client libraries for AML AI.
For details about the REST interface, see
Financial Services API .
Data
AML AI reads input data from BigQuery and writes output
predictions and backtest data to BigQuery. For input data, an
AML AI dataset resource must be created which references the
data in BigQuery. This dataset must reside in the same location as the
AML AI instance.
The AML AI dataset resource represents pointers to datasets in
BigQuery. It does not hold or point to any specific snapshot of the
data in these tables. If data is modified after a dataset is created (for
example, if records are deleted), this will be reflected in the results of other
calls to the API (for example, the creation of new models or when running
predictions). Modifying the data this way is not recommended. For more
information, see
Create and manage datasets .
Services used by AML AI
As well as the AML AI API itself, there are a number of other
Google Cloud API services which are required to use the AML AI:
Required
Cloud IAM: for identity management and access management
Cloud KMS: for key management
BigQuery: for data storage
Cloud Logging: for logging and monitoring
Optional
Cloud HSM: Optional hardware-backed storage for encryption keys
VPC Service Controls: Prevent data exfiltration to unauthorized networks and devices
What's Next
Security and compliance features
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
