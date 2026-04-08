---
title: "Understand data scope and duration \_|\_ Anti Money Laundering AI \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/understand-data-scope-duration
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/create-and-manage-backtest-results
source_metadata:
  url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/understand-data-scope-duration
  title: "Understand data scope and duration \_|\_ Anti Money Laundering AI \_|\_\
    \ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Understand data scope and duration | Anti Money Laundering AI | Google Cloud Documentation
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
Tables to use
Using additional data
Dataset time range
Home
Documentation
Industry solutions
Anti Money Laundering AI
Guides
Was this helpful?
Send feedback
Understand data scope and duration
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Tables to use
Using additional data
Dataset time range
AML AI is set up to assess money laundering risk for one
line of business at a time with separate datasets, engine versions and models for retail banking and for commercial banking.
When creating a dataset for use with an LoB, you will need to include several
tables. Each table should cover a sufficient time range. This page gives an
overview of the tables you will need and shows how to determine the time range
that each should cover.
Tables to use
The BigQuery dataset used with AML AI should contain the following tables:
Party : All parties relevant to that LoB.
Retail LoB : All retail banking customers that have held accounts at
any point in the required time range.
Commercial LoB : All commercial banking customers (legal and natural
entities) that have held accounts at any point in the required time range
Note that some customers can be represented in both datasets. For example,
self-employed people might have both retail and commercial accounts.
AccountPartyLink : Full history of which accounts were
held by which parties. This should cover all accounts for products and
services when any party in the Party table was the primary account holder at
any point in the required time range.
Transaction : All transactions for accounts in the
AccountPartyLink table for the required time range.
RiskCaseEvent : All risk case events (see event type
values) for any risk case and party in the Party table with an
AML_PROCESS_START (start of investigation) in the required time range. This
table may include events that have an event time earlier or later than the
required time range.
PartySupplementaryData : (If used) For 0 to 100 unique
party_supplementary_data_id values, include a full history of the values of
these fields for all parties in the Party table for the required time range.
Using additional data
See Supplementary data if you have additional data on parties
(not otherwise covered in the schema) that is relevant to identifying money
laundering risk.
Dataset time range
The time range that any table in a dataset should cover can be worked out as
follows for any given operation. You will need to know:
The end time. This is the latest time from which labels are used and from which data is used to generate features for tuning.
The Engine Version (See list of engine versions ) you will use.
The operation you will conduct: tune, train, predict or backtest.
For predict or backtest operations, the number of periods for which you will conduct the operation, to be specified in the API call.
First you should work out the number of periods the operation will use. This is
the number of consecutive months ending in the last full calendar month prior to
the specified end time, for which AML AI will evaluate model features.
For predict and backtest operations, this is the number of prediction
periods or backtest periods specified in the API call.
For other operations this depends on the Engine Version and the operation.
For example, v004.010 Engine Versions use 18 periods for tuning and 15 for
training.
Next you should work out the lookback window for each table. This is the maximum
number of months of data needed from that table for AML AI to calculate model
features for a given period.
For example, for v004.010 Engine Versions, this is 13 months for Transaction
and AccountPartyLink tables, 12 months for the RiskCaseEvent table and 0
months for Party and PartySupplementaryData tables.
The dataset will need to cover the lookback window for all of the periods used
by the chosen operation. This can vary by engine version, but is typically 18 for tuning, 15 for training and configurable for prediction or backtesting. You can calculate the number of full calendar months of
data prior to the end time that you will need for a given operation with the
following formula:
number of periods + lookback window -1
Building on the example above for v004.010 Engine Versions, you will need up to 30 months of data for any AML AI operation.
18 + 13 - 1 = 30 months of data from the Transaction and AccountPartyLink
tables,
18 + 12 - 1 = 29 months of data from the Risk Case Events table as well as
any more recent events for risk cases in the table,
And 18 + 0 - 1 = 17 months of data from the Party and PartySupplementaryData
tables.
We recommend to have a single dataset covering at least 36 months when conducting a first sample test of AML AI. This is to allow all the above operations and some additional months for evaluating the model beyond the minimum 3 for backtesting.
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
