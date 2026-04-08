---
title: "Understand the AML data model and requirements \_|\_ Anti Money Laundering\
  \ AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/understand-data-model-requirements
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs
source_metadata:
  url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/understand-data-model-requirements
  title: "Understand the AML data model and requirements \_|\_ Anti Money Laundering\
    \ AI \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Understand the AML data model and requirements | Anti Money Laundering AI | Google Cloud Documentation
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
Overview of data requirements Core banking data
Risk investigation data
Supplementary data
Table relationships
Errors
Home
Documentation
Industry solutions
Anti Money Laundering AI
Guides
Was this helpful?
Send feedback
Understand the AML data model and requirements
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Overview of data requirements Core banking data
Risk investigation data
Supplementary data
Table relationships
Errors
At the core of AML AI is a detailed and up-to-date understanding
of parties of the bank and their activity, covering, in particular, the
following data:
Transactional activity
Account holdings
Party demographics
Risk investigation data
This page covers the creation and management of data used by
AML AI, including details of the data model, data schema, and
data requirements for AML. The schema itself, including details for the
individual fields, appears in the AML input data model
( CSV file ). A synthetic example dataset is also
available through the Quickstart .
The following prerequisites are not covered on this page:
Setup to use AML AI with an AML dataset (see
Set up a project and permissions )
Security and compliance features (see pages under
Security and compliance features )
Overview of data requirements
The AML data model accepts information on retail or commercial parties, their
accounts and transactions, and detailed information on risk cases related to
these parties. This section introduces important aspects of the data model that
are valid across the different entities.
The AML data model schema is arranged into three areas: core banking data, risk
investigation data, and supplementary data.
Core banking data
Tables : Party , AccountPartyLink ,
Transaction
Purpose : Serves as a structured collection of data on your customers and
their banking activity, used in detection of risk. All parties, accounts and
transactions to be monitored should be included. Provide either retail or
commercial data in an AML AI dataset
Risk investigation data
Table : RiskCaseEvent
Purpose :
Serves as a structured collection of data on risk investigation
processes and parties previously identified as risky
Assists in the creation of training labels for AML risk models
Supplementary data
Table : PartySupplementaryData
Purpose : Optional table that can contain additional information relevant
to identifying money laundering risk that is not covered in the rest of the
schema. You should start using AML AI without providing any
supplementary data.
Table relationships
The following diagram describes the table relationships, primary keys, and
foreign keys.
Note: Since AML AI uses data over time, primary keys may include
validity_start_time to allow accurate representation of data over time. For
example, AML AI can capture when a customer was added to or
removed from a joint account. For more details, see
understanding how data changes over time .
Errors
When you create a dataset, AML AI automatically performs data
validation checks. For information about these checks, the error messages and
how to fix them, see
Data validation errors .
For more information about the technical schema, see
AML input data model
( CSV file ).
To understand the data duration requirements and scope, see
Understand data scope and duration .
When you have tables ready in BigQuery, you can use
AML AI to
create and manage a dataset .
Note: Most model governance policies define a requirement to track data lineage
used across all ML operations from engine configuration, training, and
evaluation. To ensure data remains unchanged, we recommend that you create a
snapshot of your BigQuery tables. In the case that you don't snapshot
data, AML AI operations read the BigQuery tables each
time an operation uses the dataset, so changes to the dataset could impact
tuning, training, backtesting, and predictions.
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
