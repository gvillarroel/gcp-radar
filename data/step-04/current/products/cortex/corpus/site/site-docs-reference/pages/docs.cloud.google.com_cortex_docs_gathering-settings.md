---
title: "Gathering Cloud Composer settings \_|\_ Google Cloud Cortex Framework \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/cortex/docs/gathering-settings
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/cortex/docs/deployment-step-one
source_metadata:
  url: https://docs.cloud.google.com/cortex/docs/gathering-settings
  title: "Gathering Cloud Composer settings \_|\_ Google Cloud Cortex Framework \_\
    |\_ Google Cloud Documentation"
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
Gathering Cloud Composer settings
This page describes how the gather Cloud Composer settings to automate data
within the Cortex Framework.
If Cloud Composer is available, you need to
create connections within Cloud Composer that point to the source project
where your data resides, with the following names based on
the workload to deployment. For details about workloads, see Data sources and workloads .
If you are creating tables in the Reporting layer ,
make sure to create separate connections for Reporting DAGs.
Deploying workload
Create for Raw
Create for CDC
Create for Reporting
SAP
N/A
sap_cdc_bq
sap_reporting_bq
SFDC
sfdc_cdc_bq
sfdc_cdc_bq
sfdc_reporting_bq
Google Ads
googleads_raw_dataflow
googleads_cdc_bq
googleads_reporting_bq
CM360
cm360_raw_dataflow
cm360_cdc_bq
cm360_reporting_bq
Meta
meta_raw_dataflow
meta_cdc_bq
meta_reporting_bq
TikTok
tiktok_raw_dataflow
tiktok_cdc_bq
tiktok_reporting_bq
LiveRamp
N/A
liveramp_cdc_bq
N/A
SFMC
sfmc_raw_dataflow
sfmc_cdc_bq
sfmc_reporting_bq
DV360
N/A
dv360_cdc_bq
dv360_reporting_bq
GA4
N/A
N/A
ga4_reporting_bq
Oracle EBS
N/A
N/A
oracleebs_reporting_bq
Sustainability
N/A
N/A
k9_reporting_bq
Common Dimensions
N/A
N/A
k9_reporting
Note: Not all data sources requires individual connections for their Raw or
CDC layer.
Connection Naming Conventions
Consider the following specifications for connection naming conventions:
Connection suffixes : The connection names include suffixes that indicate their intended purpose:
_bq : used for accessing BigQuery data.
_dataflow : Used for running Dataflow jobs.
Raw data connections : You only need to create connections for Raw data
if you are using the data ingestion modules provided by Cortex.
Multiple data sources : If you are deploying multiple data sources (for example,
both SAP and Salesforce), it's recommended to create separate connections
for each, assuming security limitations are applied to individual service
accounts. Alternatively, you can modify the connection name in the template
before deployment to use the same connection for writing to BigQuery.
Security Best Practices
Avoid Default Connections : It's not recommended using the default
connections and service accounts offered by Airflow, especially in
production environments. This aligns with the principle of least privilege which emphasizes granting only the
minimum access permissions necessary.
Secret Manager Integration : If you have Secret Manager
enabled for Airflow, you can create these connections within
Secret Manager using the same names. Connections stored in
Secret Manager take precedence over those defined directly in Airflow.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
