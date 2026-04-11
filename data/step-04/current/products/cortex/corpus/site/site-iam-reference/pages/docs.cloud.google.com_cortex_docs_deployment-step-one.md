---
title: "Step 1: Establish workloads \_|\_ Google Cloud Cortex Framework \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/cortex/docs/deployment-step-one
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/cortex/docs/deployment-step-four
source_metadata:
  url: https://docs.cloud.google.com/cortex/docs/deployment-step-one
  title: "Step 1: Establish workloads \_|\_ Google Cloud Cortex Framework \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Google Cloud Cortex Framework
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Step 1: Establish workloads
This page guides you through the initial step of setting up your data foundation,
the core of Cortex Framework. Built on top of BigQuery storage,
the data foundation organizes your incoming data from various sources.
This organized data simplifies analysis and its application in AI development.
Note: The steps outlined on this page are specifically designed for deploying
Cortex Framework Data Foundation from the
official GitHub repository .
Set up data integration
Get started by defining some key parameters to act as a blueprint for
organizing and using your data efficiently within Cortex Framework.
Remember, these parameters can vary depending on the specific workload, your
chosen data flow, and the integration mechanism. The following diagram provides
an overview of data integration within the Cortex Framework Data Foundation:
Figure 1 . Cortex Framework Data Foundation: Data Integration Overview.
Define the following parameters before deployment for efficient and effective
data utilization within Cortex Framework.
Projects
Source project: Project where your raw data lives. You need at
least one Google Cloud project to store data and run the deployment process.
Target project (optional): Project where Cortex Framework Data Foundation
stores its processed data models. This can be the same as the source project,
or a different one depending on your needs.
To learn more about how to create project and ensure that you have the required
roles on those projects, see the prerequisites
section .
Data model
Deploy Models: Choose whether you need to deploy models for all
workloads or only one set of models (for example, SAP, Salesforce, and Meta). For
more information, see available Data sources and workloads .
BigQuery datasets
Note: Some of these datasets might not be required and won't be present for
some data sources.
Source Dataset (Raw): BigQuery dataset
where the source data is replicated to or where the test data is created.
The recommendation is to have separate datasets, one for each data source. For
example, one raw dataset for SAP and one raw dataset for Google Ads.
This dataset belongs to the source project.
CDC Dataset: BigQuery dataset where
the CDC processed data lands the latest available records. Some workloads allow
for field name mapping. The recommendation is to have a separate CDC dataset
for each source. For example, one CDC dataset for SAP, and
one CDC dataset for Salesforce. This dataset belongs to the source project.
Target Reporting Dataset: BigQuery
dataset where the Data Foundation predefined data models are deployed.
We recommend to have a separate reporting dataset for each source. For example,
one reporting dataset for SAP and one reporting dataset for Salesforce. This
dataset is automatically created during deployment if it doesn't exist. This
dataset belongs to the Target project.
Pre-processing K9 Dataset: BigQuery dataset where
cross-workload, reusable DAG components, such as time dimensions, can be
deployed. Workloads have a dependency on this dataset unless
modified. This dataset is automatically created during deployment if it
doesn't exist. This dataset belongs to the source project.
Post-processing K9 Dataset: BigQuery dataset where
cross-workload reporting,
and additional external source DAGs (for example, Google Trends ingestion)
can be deployed. This dataset is automatically created during deployment if it
doesn't exist. This dataset belongs to the Target project.
Optional: Generate sample data
Cortex Framework can generate sample data and tables for you if
you don't have access to your own data, or replication tools to set up data, or
even if you only want to see how Cortex Framework works. However,
you still need to create and identify the CDC and Raw datasets ahead of time.
Create BigQuery datasets for raw data and CDC per data source,
with the following instructions.
Console
Open the BigQuery page in the Google Cloud console.
Go to the BigQuery page
In the Explorer panel, select the project where you want to create
the dataset.
Expand the
more_vert
Actions option and click Create dataset :
On the Create dataset page:
For Dataset ID , enter a unique dataset name .
For Location type , choose a geographic location
for the dataset. After a dataset is created, the
location can't be changed.
Note: If you choose EU or an
EU-based region for the dataset location, your Core
Cortex Framework Customer Data resides in the EU. Core
Cortex Framework Customer Data is defined in the Service
Specific Terms .
Optional . For more customization details for your dataset, see
Create datasets: Console .
Click Create dataset .
BigQuery
Create a new dataset for raw data by copying the following command:
bq --location = LOCATION mk -d SOURCE_PROJECT : DATASET_RAW
Replace the following:
LOCATION with the dataset's location .
SOURCE_PROJECT with your source project ID.
DATASET_RAW with the name for your dataset
for raw data. For example, CORTEX_SFDC_RAW .
Create a new dataset for CDC data by copying the following command:
bq --location = LOCATION mk -d SOURCE_PROJECT : DATASET_CDC
Replace the following:
LOCATION with the dataset's location .
SOURCE_PROJECT with your source project ID.
DATASET_CDC with the name for your dataset
for CDC data. For example, CORTEX_SFDC_CDC .
Confirm that the datasets were created with the following command:
bq ls
Optional . For more information about creating datasets, see
Create datasets .
Next steps
After you complete this step, move on to the following deployment steps:
Establish workloads (this page).
Clone repository .
Determine integration mechanism .
Set up components .
Configure deployment .
Execute deployment .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
