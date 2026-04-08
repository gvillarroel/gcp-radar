---
title: "Collect model and risk governance artifacts \_|\_ Anti Money Laundering AI\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/collect-model-risk-governance-artifacts
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/create-and-manage-backtest-results
source_metadata:
  url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/collect-model-risk-governance-artifacts
  title: "Collect model and risk governance artifacts \_|\_ Anti Money Laundering\
    \ AI \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Collect model and risk governance artifacts | Anti Money Laundering AI | Google Cloud Documentation
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
Model and risk governance documentation
Model outputs as governance artifacts
Home
Documentation
Industry solutions
Anti Money Laundering AI
Guides
Was this helpful?
Send feedback
Collect model and risk governance artifacts
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Model and risk governance documentation
Model outputs as governance artifacts
Model and risk governance is the process by which models are determined to be
sufficient by all stakeholder groups. Your process might include new model
validation, model monitoring, security and compliance standards, support
processes, risk coverage, operations manuals, and user guides, among other
topics.
As an owner of a risk framework, the following artifacts provide you with useful
resources for integrating AML AI into your overall risk
management landscape. AML AI contributes documentation relevant
to model and risk governance, as well as various outputs from tuning, training,
and evaluating your AML AI model.
Model and risk governance documentation
The following set of concept documentation, available on request for
AML AI customers, serves as governance artifacts in your overall
risk management and AI/ML model and risk governance framework:
Model architecture :
Describes the particular model architecture used for AML AI
to calculate risk scores.
Labeling methodology :
Describes the approaches used to define labeled training examples for
tuning, training, and backtesting of AML AI models.
Model training methodology :
Describes the training and validation approach for AML AI
models.
Model tuning methodology :
Describes the process by which AML AI optimizes model
hyperparameters based on your data.
Model evaluation methodology :
Describes the metrics that are used for model evaluation and backtesting.
Feature families overview :
Describes the supported feature families in AML AI.
Feature families and explainability :
Describes how AML AI uses feature families for explainability.
Risk typology schema :
Describes how AML AI provides metrics to track data quality and potential impact on AML AI models.
Risk typology schema :
Describes how AML AI supports risk typologies and the
methodology it uses to demonstrate coverage.
Engine version stability and support policy :
Describes what does and does not change between AML AI
engine versions, and how long each engine version is supported for different
operations.
Model outputs as governance artifacts
The following artifacts are generated as outputs by regular
AML AI operations:
Model quality
Engine configuration output includes expected recall (before and
after tuning) captured in the engine config metadata.
Backtest results allow you to measure trained model performance on a
set of examples not included in training.
Data quality
Missingness output indicates the share of missing values per feature
family in your datasets used for tuning, training, backtesting, and
prediction. Significant changes can indicate an inconsistency in your
underlying data which can impact model performance.
Data validation errors prevent completion of AML AI
operations, so to successfully produce a model and predictions, you must
resolve these errors.
Prediction results
Risk scores vary from 0 to 1, and within this range a higher score
indicates higher risk for the party for the predicted month. Risk scores
shouldn't be interpreted directly as a probability of money laundering
activity, or of the success of a possible investigation.
Explainable AI output augments high risk scores with attribution
scores indicating contribution of each feature family to the risk score.
Long-running operations (LROs) allow you to track all
AML AI processes used in model preparation and predictions.
For more information, see
Manage long-running operations .
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
