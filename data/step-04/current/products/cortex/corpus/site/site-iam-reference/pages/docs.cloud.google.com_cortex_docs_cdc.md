---
title: "Change Data Capture (CDC) ingestion processing \_|\_ Google Cloud Cortex Framework\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/cortex/docs/cdc
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/cortex/docs/deployment-step-four
source_metadata:
  url: https://docs.cloud.google.com/cortex/docs/cdc
  title: "Change Data Capture (CDC) ingestion processing \_|\_ Google Cloud Cortex\
    \ Framework \_|\_ Google Cloud Documentation"
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
Change Data Capture (CDC) ingestion processing
This page guides you through Change Data Capture (CDC) ingestion within
Google Cloud Cortex Framework in BigQuery. BigQuery is
designed for efficiently storing and analyzing new data.
CDC process
When data changes in your source data system
(like SAP), BigQuery doesn't modify existing records. Instead,
the updated information is added as a new record. To avoid duplicates, a
merge operation needs to be applied afterwards. This process is
called Change Data Capture (CDC) ingestion .
The Data Foundation for SAP includes the option to create scripts for
Cloud Composer or Apache Airflow to merge
or upsert the new records resulting from updates and only keep the
latest version in a new dataset. For these scripts to work the tables
need to have some specific fields:
operation_flag : This flag tells the script whether a record was inserted,
updated, or deleted.
recordstamp : This timestamp helps identify the most recent version of a
record. This flag indicates whether the record is:
Inserted (I)
Updated (U)
Deleted (D)
By utilizing CDC processing, you can ensure that your BigQuery
data accurately reflects the latest state of your source system.
This eliminates duplicate entries and provides a reliable foundation for
your data analysis.
Dataset structure
For all supported data sources, data from upstream systems are first replicated
into a BigQuery dataset ( source or replicated dataset ),
and the updated or merged results are inserted into another dataset
(CDC dataset). The reporting views select data from the CDC dataset,
to ensure the reporting tools and applications always have the latest version
of a table.
The following flow shows how the CDC processing for SAP, dependent on
the operational_flag and recordstamp .
Figure 1 . CDC processing example for SAP.
The following flow depicts the integration from APIs into Raw data and
CDC processing for Salesforce, dependent on the Id and SystemModStamp
fields produced by Salesforce APIs.
Figure 2 . Integration from APIs
into Raw data and CDC processing for Salesforce.
Some replication tools can merge or upsert the records when
inserting them into BigQuery, so the generation of these
scripts is optional. In this case, the setup only has a single
dataset. The reporting dataset fetches updated records for reporting
from that dataset.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
