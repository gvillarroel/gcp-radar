---
title: "Step 3: Determine integration mechanism \_|\_ Google Cloud Cortex Framework\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/cortex/docs/deployment-step-three
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/cortex/docs/deployment-step-one
source_metadata:
  url: https://docs.cloud.google.com/cortex/docs/deployment-step-three
  title: "Step 3: Determine integration mechanism \_|\_ Google Cloud Cortex Framework\
    \ \_|\_ Google Cloud Documentation"
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
Step 3: Determine integration mechanism
This page describes the third step to deploy Cortex Framework Data Foundation,
the core of Cortex Framework. In this step, you configure the integration
with your chosen data source. If you are using sample data, skip this step .
Note: The steps outlined in this page are specifically designed for
deploying Cortex Framework Data Foundation from the official GitHub repository .
Integration overview
Cortex Framework helps you centralize data from various sources, along with
other platforms. This creates a single source of truth for your data. Cortex
Data Foundation integrates with each data source in different ways, but most
of them follow a similar procedure:
Source to Raw layer: Ingest data from data source to raw dataset
using APIs. This is achieved by using Dataflow pipelines triggered
through Cloud Composer DAGs.
Raw layer to CDC layer : Apply CDC processing on raw dataset and
store the output in CDC dataset. This is accomplished by
Cloud Composer DAGs running BigQuery SQLs.
CDC layer to Reporting layer: Creates final reporting tables from
CDC tables in the Reporting dataset. This is accomplished by either
creating runtime views on top of CDC tables or running
Cloud Composer DAGs for materialized data
in BigQuery tables - depending on how it's configured.
For more information about configuration, see Customizing reporting settings file .
The config.json file configures the settings required to connect to data
sources for transferring data from various workloads. See the integration
options for each data source in the following resources.
Operational:
SAP (SAP ECC or SAP S/4 HANA)
Salesforce Sales Cloud
Oracle EBS
Marketing:
Google Ads
Campaign Manager 360 (CM360)
TikTok
LiveRamp
Meta (Facebook / Instagram)
Salesforce Marketing Cloud (SFMC)
YouTube (with DV360)
Google Analytics 4
Cross Media & Product Connected Insights
Cortex for Meridian
Sustainability:
Dun & Bradstreet
For more information about the Entity-Relationship Diagrams that each
data source supports, see the docs folder in the Cortex Framework Data Foundation repository.
K9 deployment
The K9 deployer
simplifies the integration of diverse data sources. The K9 deployer
is a predefined dataset within the BigQuery
environment responsible for ingesting, processing, and modeling of
components that are reusable across different data sources.
For example, the time dimension is reusable across all data sources where tables
might need to take analytical results based on a Gregorian calendar. The K9
deployer combines external data like weather or Google Trends with other data sources
(for example, SAP, Salesforce, Marketing). This enriched dataset enables
deeper insights and more comprehensive analysis.
The following diagram shows the flow of data from different raw sources to
various reporting layers:
Figure 1 . K9 datasets.
In the diagram, the source project
contains the raw data from the chosen data sources (SAP, Salesforce,
and Marketing). While the target project
contains processed data, derived from the Change Data Capture (CDC) process.
The pre-processing K9 step runs before all workloads start their deployment, so
the reusable models are available during their deployment. This step transforms
data from various sources to create a consistent and reusable dataset.
The post-processing K9 steps occurs after all workloads have deployed their
reporting models to enable cross-workload reporting or augmenting models to
find their necessary dependencies within each individual reporting dataset.
Configure the K9 deployment
Configure the Directed Acyclic Graphs (DAGs) and models to be generated
in the K9 manifest file .
The K9 pre-processing step is important because it ensures that all workloads
within the data pipeline have access to consistently prepared data. This reduces
redundancy and ensures data consistency.
Note: If you are using a deployment framework like Dataform or dbt ,
we recommended considering porting the K9 pre-processing DAG execution into your
scheduler of choice, and ensure your reporting views use the pre-processed data
generated by K9 (instead of the raw data sources). The Cortex team can't provide
support for external frameworks .
For more information about how to configure external datasets for K9, see Configure external datasets for K9 .
Next steps
After you complete this step, move on to the following deployment steps:
Establish workloads .
Clone repository .
Determine integration mechanism (this page).
Set up components .
Configure deployment .
Execute deployment .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
