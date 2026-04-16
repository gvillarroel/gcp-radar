---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:00:38.902Z"
product_name: "Cortex"
product_slug: "cortex"
feature_name: "YouTube (with DV360)"
feature_slug: "youtube-with-dv360"
latest_feature_date: "2024-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cortex/docs/marketing-dv360"
  - "https://docs.cloud.google.com/cortex/docs/data-sources-and-workloads"
  - "https://docs.cloud.google.com/cortex/docs/marketing-cross-media"
keywords:
  - "youtube"
  - "dv360"
  - "marketing"
  - "source"
  - "analyzing"
  - "spend"
  - "performance"
  - "audience"
---

# YouTube (with DV360)

Product: Cortex
Coverage: MEDIUM

## Step 02 Summary

YouTube (with DV360) is a marketing data source for analyzing spend, performance, and audience targeting for YouTube campaigns bought through DV360.

## Extended Definition

YouTube (with DV360) is a marketing data source for analyzing spend, performance, and audience targeting for YouTube campaigns bought through DV360.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/cortex/docs/marketing-dv360](https://docs.cloud.google.com/cortex/docs/marketing-dv360)
- [https://docs.cloud.google.com/cortex/docs/data-sources-and-workloads](https://docs.cloud.google.com/cortex/docs/data-sources-and-workloads)
- [https://docs.cloud.google.com/cortex/docs/marketing-cross-media](https://docs.cloud.google.com/cortex/docs/marketing-cross-media)

## Supporting Pages

### Integration with YouTube (DV360) | Google Cloud Cortex Framework | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cortex/docs/marketing-dv360](https://docs.cloud.google.com/cortex/docs/marketing-dv360)
- Source ID: `feature-recovery-http`
- Final score: 239
- Re-rank relevance: N/A

Evidence snippets:
- Integration with YouTube (DV360) | Google Cloud Cortex Framework | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Google Cloud Cortex Framework Start free Overview Guides Resources Technology areas More Overview Guides Resources Cross-product tools More Console Cortex Framework Overview Data sources and workloads Support Deployment Quickstart demo Prerequisites Step 1: Establish workloads Step 2: Clone repository Step 3: Determine integration mechanism Step 4: Set up components Step 5: Configure deployment Step 6: Execute deployment Optional steps Use different projects to segregate access Cloud Build features Configure external datasets Turbo mode Telemetry opt out Configure common dimensions Task dependent DAGs Workloads integration Operational SAP Salesforce Sales Cloud (SFDC) Oracle EBS Marketing Google Ads Campaign Manager 360 TikTok LiveRamp Meta Salesforce Marketing Cloud (SFMC) YouTube (with DV360) Google Analytics 4 Cross Media & Product Connected Insights Sustainability Dun & Bradstreet Cortex for Marketing Mix Modelling (MMM) Cortex for Meridian Cortex for Meridian Quickstart demo Additional guides Data Mesh Concepts User guide Change Data Capture Gathering Cloud Composer settings Upgrade recommedations External DAGs migration from v4.2 to v5.0 Looker Blocks and Dashboards Overview Deploy Looker Blocks Operational Looker Block for SAP Looker Block for Salesforce Sales Cloud (SFDC) Looker Block for Oracle EBS Marketing Looker Block for Salesforce Marketing Cloud (SFMC) Looker Block for Meta Looker Block for YouTube (with DV360) Looker Block for Cross Media & Product Connected Insights Sustainability Looker Studio dashboard for Dun & Bradstreet Customize Looker Blocks AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Data analytics Google Cloud Cortex Framework Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Integration with YouTube (DV360) This page describes the required configurations to bring data from YouTube with Display & Video 360 (DV360) as a data source of the marketing workload of Cortex Framework Data Foundation.
- This file contains the following parameters for DV360: "marketing" : { "deployDV360" : true , "DV360" : { "deployCDC" : true , "datasets" : { "cdc" : "" , "raw" : "" , "reporting" : "REPORTING_DV360" } } } The following table describes the value for each marketing parameter: Parameter Meaning Default Value Description marketing.deployDV360 Deploy DV360 true Execute the deployment for DV360 data source. marketing.DV360.deployCDC Deploy CDC scripts for DV360 true Generate DV360 CDC processing scripts to run as DAGs in Cloud Composer. marketing.DV360.datasets.cdc CDC dataset for DV360 - CDC dataset for DV360. marketing.DV360.datasets.raw Raw dataset for DV360 - Raw dataset for DV360. marketing.DV360.datasets.reporting Reporting dataset for DV360 REPORTING_DV360 Reporting dataset for DV360.
- DV360 is an advertising platform by Google for managing YouTube advertising alongside other digital channels, offering advertisers greater control and efficiency in their marketing efforts.

### "Data sources and workloads \_|\_ Google Cloud Cortex Framework \_|\_ Google\

- URL: [https://docs.cloud.google.com/cortex/docs/data-sources-and-workloads](https://docs.cloud.google.com/cortex/docs/data-sources-and-workloads)
- Source ID: `site-docs-reference`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following are the marketing related data sources available: Salesforce Marketing Cloud Google Ads Campaign Manager 360 (CM360) TikTok Meta LiveRamp YouTube (with DV360) Google Analytics 4 Cross Media & Product Connected Insights Cortex for Meridian Operational Cortex Framework incorporates operational platforms such as SAP (SAP ECC and SAP S/4 HANA) and Salesforce as valuable data sources to get real-time insights to improve efficiency and productivity in different areas.
- By integrating data from diverse sources and using Cortex Framework's predefined models, you can make informed decisions, optimize resources, and gain accurate, up-to-date insights into your marketing efforts.
- Additionally, in finance, it simplifies financial insights, identifies potential issues, and analyzes procurement spend and vendor performance.
- Marketing Cortex Framework for Marketing provides a holistic view of campaign performance across multiple channels.

### Cross Media & Product Connected Insights | Google Cloud Cortex Framework | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cortex/docs/marketing-cross-media](https://docs.cloud.google.com/cortex/docs/marketing-cross-media)
- Source ID: `feature-recovery-http`
- Final score: 173
- Re-rank relevance: N/A

Evidence snippets:
- Cross Media & Product Connected Insights | Google Cloud Cortex Framework | Google Cloud Documentation Skip to main content Technology areas close AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Cross-product tools close Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools / Console English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어 Sign in Google Cloud Cortex Framework Start free Overview Guides Resources Technology areas More Overview Guides Resources Cross-product tools More Console Cortex Framework Overview Data sources and workloads Support Deployment Quickstart demo Prerequisites Step 1: Establish workloads Step 2: Clone repository Step 3: Determine integration mechanism Step 4: Set up components Step 5: Configure deployment Step 6: Execute deployment Optional steps Use different projects to segregate access Cloud Build features Configure external datasets Turbo mode Telemetry opt out Configure common dimensions Task dependent DAGs Workloads integration Operational SAP Salesforce Sales Cloud (SFDC) Oracle EBS Marketing Google Ads Campaign Manager 360 TikTok LiveRamp Meta Salesforce Marketing Cloud (SFMC) YouTube (with DV360) Google Analytics 4 Cross Media & Product Connected Insights Sustainability Dun & Bradstreet Cortex for Marketing Mix Modelling (MMM) Cortex for Meridian Cortex for Meridian Quickstart demo Additional guides Data Mesh Concepts User guide Change Data Capture Gathering Cloud Composer settings Upgrade recommedations External DAGs migration from v4.2 to v5.0 Looker Blocks and Dashboards Overview Deploy Looker Blocks Operational Looker Block for SAP Looker Block for Salesforce Sales Cloud (SFDC) Looker Block for Oracle EBS Marketing Looker Block for Salesforce Marketing Cloud (SFMC) Looker Block for Meta Looker Block for YouTube (with DV360) Looker Block for Cross Media & Product Connected Insights Sustainability Looker Studio dashboard for Dun & Bradstreet Customize Looker Blocks AI and ML Application development Application hosting Compute Data analytics and pipelines Databases Distributed, hybrid, and multicloud Industry solutions Migration Networking Observability and monitoring Security Storage Access and resources management Costs and usage management Infrastructure as code SDK, languages, frameworks, and tools Home Documentation Data analytics Google Cloud Cortex Framework Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Configure one or more of the following Marketing data sources for deployment, following their own guides: Google Ads Meta Youtube (with DV360) TikTok Enable and configure required Common Dimensions : Country Dimension Product Dimension Currency Conversion Configure Cross Media settings: Set k9.deployCrossMedia to True .
- With this Cross Media accelerator, Cortex Framework Data Foundation is enriched with an initial set of KPIs to understand the effectiveness of marketing campaigns running across media platforms such as Google Ads, YouTube (with DV360), Meta, and TikTok for product and product category sales performance.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]] Products and pricing See all products Google Cloud pricing Google Cloud Marketplace Contact sales Support Community forums Support Release Notes System status Resources GitHub Getting Started with Google Cloud Code samples Cloud Architecture Center Training and Certification Engage Blog Events X (Twitter) Google Cloud on YouTube Google Cloud Tech on YouTube About Google Privacy Site terms Google Cloud terms Manage cookies Our third decade of climate action: join us Sign up for the Google Cloud newsletter Subscribe English Deutsch Español Español – América Latina Français Indonesia Italiano Português Português – Brasil 中文 – 简体 中文 – 繁體 日本語 한국어

