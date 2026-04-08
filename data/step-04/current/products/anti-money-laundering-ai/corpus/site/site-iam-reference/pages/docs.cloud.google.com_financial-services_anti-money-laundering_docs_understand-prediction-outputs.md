---
title: "Understand prediction outputs \_|\_ Anti Money Laundering AI \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/understand-prediction-outputs
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/create-and-manage-backtest-results
source_metadata:
  url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/understand-prediction-outputs
  title: "Understand prediction outputs \_|\_ Anti Money Laundering AI \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Understand prediction outputs | Anti Money Laundering AI | Google Cloud Documentation
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
Risk scores
Explainability Feature families
Feature family attribution value
Home
Documentation
Industry solutions
Anti Money Laundering AI
Guides
Was this helpful?
Send feedback
Understand prediction outputs
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Risk scores
Explainability Feature families
Feature family attribution value
This page describes the prediction outputs that result from requesting
prediction results from AML AI.
For the schema and fields of the prediction outputs in BigQuery,
see Prediction outputs .
Risk scores
Risk scores vary from 0 to 1. A
higher score indicates higher risk, however, risk scores shouldn't be
interpreted directly as a probability of money laundering activity.
Risk scores are produced for one (or more if
predictionPeriods
is greater than one) complete calendar months immediately prior to the specified
endTime .
A risk score is calculated for each party for each month.
Each prediction and explanation produced has a risk_period_end_time at
midnight after the end of the complete calendar month.
For example, if predictionPeriods = 12
and endTime = 2022-01-01T00:00:00Z ,
then AML AI creates risk scores and explainability for each
month in 2021. A prediction with risk_period_end_time value of 2021-02-01T00:00:00Z
represents the customer's prediction for the month of 2021-01.
Note: Risk scores may not be present for a party before their earliest entry in
the Party table (that is, the earliest validity start time).
Explainability
AML AI explainability indicates
which behaviors or characteristics (using feature families )
contribute to the risk score of a given party. Explainability covers the highest
risk parties, including all parties you would investigate. Explainability may
not be included for lower risk customers.
Feature families
Feature families are collections of related AML AI features,
providing a human-understandable categorization to inform investigators
and internal audit teams.
Each feature family covers a specific set of transactional behaviors or party
characteristics. Additionally, some feature families have a specific focus,
allowing investigators to know where to start. Examples of focus include:
The type of transaction involved:
Wire
Cash
Check
Card
Other
The direction of the transactions:
Debit (outgoing for the party)
Credit (incoming for the party)
Feature family attribution value
An attribution score is given for each high-risk party and each feature family,
indicating the contribution of the feature family to the risk score of the
party. A high positive value indicates strong contribution to increasing risk
score. Similarly, a negative value indicates a contribution to lowering the
score.
Feature families with the highest positive attribution value are likely to be
the most relevant to an investigation of the party.
Consider the following example attribution values for one specific party:
Feature family Attribution value
Unusual card debit activity 0.4
Unusual rapid movement of funds 0.8
Unusual wire debit activity -0.2
This example can be interpreted as follows:
The party's rapid movement of funds had the greatest contribution to
their high risk score. An investigation might start there.
Unusual card debit activity also made a significant contribution so should
also be considered.
The party's wire debit activity actually reduced the risk score, so it is
unlikely that this needs inspection.
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
