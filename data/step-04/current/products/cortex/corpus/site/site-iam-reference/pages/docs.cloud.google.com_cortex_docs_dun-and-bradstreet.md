---
title: "Integration with Dun & Bradstreet \_|\_ Google Cloud Cortex Framework \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/cortex/docs/dun-and-bradstreet
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/cortex/docs/deployment-step-four
source_metadata:
  url: https://docs.cloud.google.com/cortex/docs/dun-and-bradstreet
  title: "Integration with Dun & Bradstreet \_|\_ Google Cloud Cortex Framework \_\
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
Integration with Dun & Bradstreet
This page explains how to integrate Dun & Bradstreet (D&B) Environmental,
Social, and Governance (ESG) data with your existing SAP supplier
performance data within the Cortex Framework Data Foundation.
Cortex Framework integrates data from data sources with Dataflow
pipelines through to BigQuery, while Cloud Composer schedules and monitors
these Dataflow pipelines for getting insights from your SAP operational data.
There's a growing need for businesses to understand the ESG performance of
their suppliers. This integration helps you gain insights into your
suppliers' environmental impact, social responsibility, and governance practices.
By connecting D&B ESG data with Cortex Framework you can answer compare
your raw material suppliers' ESG performance against industry peers, measure
and manage greenhouse gas emissions and demonstrate a commitment to
environmental compliance and good corporate governance.
Note: Before configuring the integration for a workload, follow the steps
for Cortex Framework Data Foundation deployment .
Data model
This section describes the Dun and Bradstreet (D&B) Data Model using
the Entity Relationship Diagram (ERD).
Figure 2 . Dun and Bradstreet (D&B): Entity Relationship Diagram.
Reporting views
Two BigQuery views are provided for this module, in the
K9 Reporting dataset (purple objects):
SustainableSourcing provides ESG Insights for each vendor.
SustainableVendorSourcing provides vendor performance insights alongside ESG Insights.
You can adjust the reporting settings file
as described in the Customizing reporting settings section .
Prerequisites
The following is required for this module to function:
See Cortex Framework Data Foundation prerequisites
and its deployment steps .
Data should be loaded into a specific BigQuery table named
dun_bradstreet_esg within the K9 Processing dataset. For more information,
see K9 deployment .
Acquiring data
This procedure outlines two ways to acquire D&B ESG data for
use with Cortex Framework Data Foundation.
BigQuery sharing (formerly Analytics Hub)
Navigate to the Analytics Hub .
Search for ESG ranking .
Choose an option between the four datasets:
US Full File
UK Full File
Global Full File
Global Financial Services
Select Request Access to get in touch with D&B for further instructions.
Google Cloud Marketplace
Navigate to the Google Cloud Marketplace,
which offers various cloud applications and services.
Search for D&B ESG Intelligence. Look for the offering named
Dun & Bradstreet ESG Intelligence .
Explore and Subscribe. The marketplace listing should provide details
about the D&B ESG Intelligence offering. You can explore the offering details
and potentially subscribe to the service if it meets your requirements.
Note: Both methods don't provide the actual data directly. Whichever method you
choose, you need to interact with D&B to obtain access credentials or
establish a subscription plan to access the ESG data.
Loading data
This section references the documentation to load D&B ESG data into
your Cortex Framework Data Foundation environment. It should be loaded through
a CSV file provided by D&B. For more information, see to the data dictionary and sample data .
Looker Studio Dashboard
See how Looker Studio can be used to showcase insights in
Looker Studio Dashboard for Dun & Bradstreet .
What's next?
For more information about other data sources and workloads, see
Data sources and workloads .
For more information about the steps for deployment in production environments,
see Cortex Framework Data Foundation deployment prerequisites .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
