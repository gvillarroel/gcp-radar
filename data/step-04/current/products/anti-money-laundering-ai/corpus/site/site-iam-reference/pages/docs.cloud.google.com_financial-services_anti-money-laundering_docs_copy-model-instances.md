---
title: "Copy models to new instances \_|\_ Anti Money Laundering AI \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/copy-model-instances
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/create-and-manage-backtest-results
source_metadata:
  url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/copy-model-instances
  title: "Copy models to new instances \_|\_ Anti Money Laundering AI \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Copy models to new instances | Anti Money Laundering AI | Google Cloud Documentation
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
Español – América Latina
Français
Indonesia
Italiano
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
Copy an AML AI model to a different AML AI instance Prerequisites
Copy request
Home
Documentation
Industry solutions
Anti Money Laundering AI
Guides
Was this helpful?
Send feedback
Copy models to new instances
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Copy an AML AI model to a different AML AI instance Prerequisites
Copy request
The Copy Model API copies a model from one AML AI instance to another. This is typically done to copy a model from a consumer instance to a host instance after the model has been trained and evaluated. See also Party registration sharing for multiple instances .
Copy an AML AI model to a different AML AI instance
When a model is copied from one instance to another, the copied model is identical to the source model with the following exceptions:
The source model field indicates the model was copied. The satisfiesPzi and satisfiesPzs fields in the model copy will be different from the source model to indicate the new model's GPS path. The createTime and updateTime fields in the model copy also vary from the source model.
The engineVersion field is updated to the local reference to the same engine version within the destination instance.
Prerequisites
The user has the financialservices.v1models.copyFrom and financialservices.v1models.copyTo permissions on the source and destination instances respectively. This can be achieved for the instance by granting the role roles/financialservices.admin to the user on both source and destination project.
The source model exists.
The destination instance exists.
No model exists in the destination instance with the same name that will be used for the destination model.
Copy request
Create a copy request to pass to the CopyModel request.
Before using any of the request data, make the following replacements:
DESTINATION_MODEL_ID : a user-defined identifier for the model in the destination instance.
SOURCE_PROJECT : the project that contains the instance where the model is copied from.
SOURCE_LOCATION : the location of the source model.
SOURCE_INSTANCE_ID : a user-defined identifier for the source instance that contains the source model.
SOURCE_MODEL_ID : a user-defined identifier for the source model.
See more code actions.
Light code theme
Dark code theme
# Example request.json for copying a model:
cat > request.json << 'EOF'
{
# The resource ID of the destination model which will exist under `parent` after the copy is complete.
"model_id": " DESTINATION_MODEL_ID ",
"source_model": "projects/ SOURCE_PROJECT /locations/ SOURCE_LOCATION /instances/ SOURCE_INSTANCE_ID /models/ SOURCE_MODEL_ID "
}
EOF
Call the Financial Services API CopyModel request:
curl -X POST \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json; charset=utf-8" \
-d @request.json \
"https://financialservices.googleapis.com/v1/projects/ DESTINATION_PROJECT /locations/ DESTINATION_LOCATION /instances/ DESTINATION_INSTANCE_ID /models:copy"
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
Español – América Latina
Français
Indonesia
Italiano
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
