---
title: "Prepare BigQuery datasets and tables \_|\_ Anti Money Laundering AI \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/prepare-bq-datasets-tables
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/create-and-manage-backtest-results
source_metadata:
  url: https://docs.cloud.google.com/financial-services/anti-money-laundering/docs/prepare-bq-datasets-tables
  title: "Prepare BigQuery datasets and tables \_|\_ Anti Money Laundering AI \_|\_\
    \ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Prepare BigQuery datasets and tables | Anti Money Laundering AI | Google Cloud Documentation
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
Create a BigQuery output dataset
Create the BigQuery input dataset
Create the BigQuery input dataset tables and upload the transaction data
Grant access to the BigQuery datasets
Home
Documentation
Industry solutions
Anti Money Laundering AI
Guides
Was this helpful?
Send feedback
Prepare Big Query datasets and tables
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Create a BigQuery output dataset
Create the BigQuery input dataset
Create the BigQuery input dataset tables and upload the transaction data
Grant access to the BigQuery datasets
To create AML AI datasets in an instance, you need to stage data
in BigQuery within that Google Cloud project. The following sections
show one way of preparing these datasets and tables.
Create a Big Query output dataset
Run the following command to create a dataset to be
used to send the pipeline outputs to BigQuery. In the following
command, select a name for
BQ_OUTPUT_DATASET_NAME
that contains only letters (uppercase or lowercase), numbers, and underscores.
You cannot use hyphens .
Permissions required for this task
To perform this task, you must have been granted the following permissions:
Permissions
bigquery.datasets.create
bash powershell
More
See more code actions.
Light code theme
Dark code theme
bq mk \
--location = LOCATION \
--project_id = PROJECT_ID \
BQ_OUTPUT_DATASET_NAME
bq mk `
- -location = LOCATION `
- -project_id = PROJECT_ID `
BQ_OUTPUT_DATASET_NAME
To see the AML AI outputs, see AML output data model .
Create the Big Query input dataset
Create a BigQuery input dataset. Later, you will input your
financial institution's transaction data into this dataset.
Permissions required for this task
To perform this task, you must have been granted the following permissions:
Permissions
bigquery.datasets.create
gcloud Powershell
More
See more code actions.
Light code theme
Dark code theme
bq mk \
--location= LOCATION \
--project_id= PROJECT_ID \
BQ_INPUT_DATASET_NAME
bq mk `
- -location = LOCATION `
- -project_id = PROJECT_ID `
BQ_INPUT_DATASET_NAME
Create the Big Query input dataset tables and upload the transaction data
We provide the AML input data model schema in the following formats:
A single CSV file aml-input-data-model.csv with all tables
included
A single JSON file aml-input-data-model.json with all
tables included
Individual JSON files for each table:
party.json
account_party_link.json
transaction.json
risk_case_event.json
party_supplementary_data.json
We provide the
party registration table
in JSON format. You use this table later when you register parties in order to
create prediction results.
party_registration.json
To download the JSON file for each table and use it to create the associated
BigQuery table by applying the schema, run the following
command.
Permissions required for this task
To perform this task, you must have been granted the following permissions:
Permissions
bigquery.datasets.create
for table in party_registration party account_party_link transaction risk_case_event party_supplementary_data interaction_event
do
curl -O "https://cloud.google.com/financial-services/anti-money-laundering/docs/reference/schemas/ ${ table } .json"
bq mk --table --project_id PROJECT_ID BQ_INPUT_DATASET_NAME . $table $table .json
done
Upload your financial institution's transaction data into the dataset tables.
For more information, see any of the
BigQuery quickstarts .
Grant access to the Big Query datasets
The API automatically creates a service account in your project. The service
account needs access to the BigQuery input and output datasets.
For PROJECT_NUMBER , use the
project number associated with
PROJECT_ID . You can find the project
number on the IAM Settings page.
Permissions required for this task
To perform this task, you must have been granted the following permissions:
Permissions
bigquery.datasets.setIamPolicy
bigquery.datasets.update
Install jq on your
development machine. If you cannot install jq on your development machine,
you can use Cloud Shell or one of the other methods for
granting access to a resource
found in the BigQuery documentation.
Run the following commands to grant read access to the input dataset and its
tables.
# The BigQuery input dataset name. You created this dataset and
# uploaded the financial data into it in a previous step. This dataset should be
# stored in the Google Cloud project.
export BQ_INPUT_DATASET_NAME = " BQ_INPUT_DATASET_NAME "
# The BigQuery tables in the input dataset. These tables should
# be part of the same project as the intended instance.
# Make sure to replace each table variable with the appropriate table name.
export PARTY_TABLE = " PARTY_TABLE "
export ACCOUNT_PARTY_LINK_TABLE = " ACCOUNT_PARTY_LINK_TABLE "
export TRANSACTION_TABLE = " TRANSACTION_TABLE "
export RISK_CASE_EVENT_TABLE = " RISK_CASE_EVENT_TABLE "
# Optional table
export PARTY_SUPPLEMENTARY_DATA_TABLE = " PARTY_SUPPLEMENTARY_DATA_TABLE "
# Registered parties table
export PARTY_REGISTRATION_TABLE = " PARTY_REGISTRATION_TABLE "
# Grant the API read access to the BigQuery dataset.
# Update the current access permissions on the BigQuery dataset and store in a temp file.
# Note: This step requires jq as a dependency.
# If jq is not available, the file /tmp/mydataset.json may be created manually.
bq show --format = prettyjson " PROJECT_ID : BQ_INPUT_DATASET_NAME " | jq '.access+=[{"role":"READER","userByEmail":"service- PROJECT_NUMBER @gcp-sa-financialservices.iam.gserviceaccount.com" }]' > /tmp/mydataset.json
# Update the BigQuery dataset access permissions using the temp file.
bq update --source /tmp/mydataset.json " PROJECT_ID : BQ_INPUT_DATASET_NAME "
# Grant the API read access to the BigQuery table if the table is provided.
for TABLE in $PARTY_TABLE $TRANSACTION_TABLE $ACCOUNT_PARTY_LINK_TABLE $RISK_CASE_EVENT_TABLE $PARTY_SUPPLEMENTARY_DATA_TABLE $PARTY_REGISTRATION_TABLE ; do
[ -n TABLE ] && bq add-iam-policy-binding \
--member = "serviceAccount:service- PROJECT_NUMBER @gcp-sa-financialservices.iam.gserviceaccount.com" --role = "roles/bigquery.dataViewer" \
PROJECT_ID : BQ_INPUT_DATASET_NAME . ${ TABLE }
done
Run the following commands to grant write access to the output dataset.
# Note: This step requires jq as a dependency.
# If jq isn't available, the file /tmp/mydataset.json may be created manually.
bq show --format = prettyjson PROJECT_ID : BQ_OUTPUT_DATASET_NAME | jq '.access+=[{"role":"roles/bigquery.dataEditor","userByEmail":"service- PROJECT_NUMBER @gcp-sa-financialservices.iam.gserviceaccount.com" }]' > /tmp/perms.json
bq update --source /tmp/perms.json PROJECT_ID : BQ_OUTPUT_DATASET_NAME
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
