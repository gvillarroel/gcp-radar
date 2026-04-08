---
title: "Party registration sharing for multiple instances \_|\_ Anti Money Laundering\
  \ AI \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/registration-sharing
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/create-and-manage-backtest-results
source_metadata:
  url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/registration-sharing
  title: "Party registration sharing for multiple instances \_|\_ Anti Money Laundering\
    \ AI \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Party registration sharing for multiple instances | Anti Money Laundering AI | Google Cloud Documentation
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
Configure the host instance
Configure the consumer instance
Configure VPC-SC
Home
Documentation
Industry solutions
Anti Money Laundering AI
Guides
Was this helpful?
Send feedback
Party registration sharing for multiple instances
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Configure the host instance
Configure the consumer instance
Configure VPC-SC
You can share an AML AI instance's registered parties with up to two additional instances in the same Google Cloud region for predictions. This allows your organization to train models on real data without impacting performance of the main AML AI instance that you use to generate AML alerts and without paying twice for registering the same parties.
The main AML AI instance is the host where you register your parties. The additional instance or instances, referred to as consumers, don't need to register parties. Instead, you can generate predictions for any party registered in the host instance. Typically these instances are used for less critical tasks, such as training and evaluating new models prior to deployment to the main instance.
Before you begin
Select an instance to use as the host. This is usually the instance that you use to generate production alerts.
Select one or two instances to use as consumers. These are usually the instances you use to create, evaluate, and analyze AML AI models.
Note: We recommend that you use instances that have no registered parties. If parties exist on the consumer instances, you should deregister them as soon as possible to avoid unnecessary charges. See Register your parties for instructions on registering and deregistering parties.
The host and consumer instances must reside in the same Google Cloud region and belong to the same project or projects within the same organization.
Configure the host instance
To configure an instance to be the host instance for registration sharing, designate up to two instances as the chosen consumer instances in the valid_party_registration_sharing_consumer_instances field.
You can set this field when you create the host Instance , or you can update this field in an existing instance using the projects.locations.instances.patch request.
This field is a string list, with a maximum length of 2.
Before using any of the request data, make the following replacements:
LOCATION : the location of the host and consumer instances.
HOST_PROJECT_ID : a user-defined identifier for the project that contains the host instance.
HOST_INSTANCE_ID : a user-defined identifier for the host instance.
CONSUMER_PROJECT_ID : a user-defined identifier for the project that contains the consumer instance.
CONSUMER_INSTANCE_ID : a user-defined identifier for the consumer instance.
Save the request body in a file named request.json. Run the following command in the terminal to create or overwrite this file in the current directory:
cat > request.json << 'EOF'
{
"valid_party_registration_sharing_consumer_instances": [
"projects/ CONSUMER_PROJECT_ID /locations/ LOCATION /instances/ CONSUMER_INSTANCE_ID "
]
}
EOF
Use a curl command to call its HTTP endpoint, as shown in the following example.
curl -X PATCH \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json; charset=utf-8" \
-d @request.json \
"https://financialservices.googleapis.com/v1/projects/ HOST_PROJECT_ID /locations/ LOCATION /instances/ HOST_INSTANCE_ID ?updateMask=valid_party_registration_sharing_consumer_instances"
Configure the consumer instance
Configure each consumer instance using the party_registration_sharing_host_instance field. This field is a string.
Save the request body in a file named request.json. Run the following command in the terminal to create or overwrite this file in the current directory:
cat > request.json << 'EOF'
{
"party_registration_sharing_host_instance": "projects/ HOST_PROJECT_ID /locations/ LOCATION /instances/ HOST_INSTANCE_ID "
}
EOF
Use a curl command to call its HTTP endpoint, as shown in the following example.
curl -X PATCH \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json; charset=utf-8" \
-d @request.json \
"https://financialservices.googleapis.com/v1/projects/ CONSUMER_PROJECT_ID /locations/ LOCATION /instances/ INSTANCE_ID ?updateMask=party_registration_sharing_host_instance"
Configure VPC-SC
If the host and consumer instances use different VPC-SC perimeters, configure a VPC-SC Perimeter Bridge or Ingress/Egress rules for the projects that contain the instances.
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
