---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:00:38.893Z"
product_name: "Cortex"
product_slug: "cortex"
feature_name: "RegionsMD view"
feature_slug: "regionsmd-view"
latest_feature_date: "2025-09-19"
deprecation_date: "2025-09-19"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cortex/docs/datamesh"
  - "https://docs.cloud.google.com/cortex/docs/datamesh-concepts"
  - "https://docs.cloud.google.com/cortex/docs/overview"
keywords:
  - "regionsmd"
  - "view"
  - "cortex"
  - "sap"
  - "reporting"
  - "regional"
  - "master"
  - "deprecated"
---

# RegionsMD view

Product: Cortex
Coverage: MEDIUM

## Step 02 Summary

RegionsMD is a Cortex SAP reporting view for regional master data; deprecated on 2025-09-19.

## Extended Definition

RegionsMD is a Cortex SAP reporting view for regional master data; deprecated on 2025-09-19.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/cortex/docs/datamesh](https://docs.cloud.google.com/cortex/docs/datamesh)
- [https://docs.cloud.google.com/cortex/docs/datamesh-concepts](https://docs.cloud.google.com/cortex/docs/datamesh-concepts)
- [https://docs.cloud.google.com/cortex/docs/overview](https://docs.cloud.google.com/cortex/docs/overview)

## Supporting Pages

### "(Deprecated) Data Mesh User Guide \_|\_ Google Cloud Cortex Framework \_\

- URL: [https://docs.cloud.google.com/cortex/docs/datamesh](https://docs.cloud.google.com/cortex/docs/datamesh)
- Source ID: `site-docs-reference`
- Final score: 89
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To ensure that you are deploying with required packages and versions, you can run the utility from the same image used by the Cortex deployment process with the following commands: Run container interactively docker container run -it gcr.io/kittycorn-public/deploy-kittycorn:v2.0 Clone the repo git clone https://github.com/GoogleCloudPlatform/cortex-data-foundation Navigate into the repo cd cortex-data-foundation For help with the available parameters and their usage, run the following command: python src/common/data mesh/deploy data mesh.py -h The following is an example for invocation for SAP ECC: python src/common/data mesh/deploy data mesh.py \ --config-file config/config.json \ --lake-directories \ src/SAP/SAP REPORTING/config/ecc/lakes \ --tag-template-directories \ src/SAP/SAP REPORTING/config/ecc/tag templates \ --policy-directories \ src/SAP/SAP REPORTING/config/ecc/policy taxonomies \ --annotation-directories \ src/SAP/SAP REPORTING/config/ecc/annotations See the Data Mesh directories section for information about directory locations.
- Home Documentation Data analytics Google Cloud Cortex Framework Guides Send feedback Stay organized with collections Save and categorize content based on your preferences. (Deprecated) Data Mesh User Guide Warning: The Data Mesh feature within the Google Cloud Cortex Framework is now deprecated and disabled.
- Workload Data source Directory path Operational SAP ECC src/SAP/SAP REPORTING/config/ecc SAP S/4 HANA src/SAP/SAP REPORTING/config/s4 Salesforce Sales Cloud (SFDC) src/SFDC/config Oracle EBS src/OracleEBS/config Marketing CM360 src/marketing/src/CM360/config Google Ads src/marketing/src/GoogleAds/config Meta src/marketing/src/Meta/config Salesforce Marketing Cloud (SFMC) src/marketing/src/SFMC/config TikTok src/marketing/src/TikTok/config YouTube (with DV360) src/marketing/src/DV360/config Google Analytics 4 src/marketing/src/GA4/config Note: Data Mesh doesn't support LiveRamp, or Dun & Bradstreet (ESG) data.
- The following sections are particularly relevant: Roles interact Authorization inheritance Masking rules and hierarchy Policy tag best practices Cortex Framework provides sample policy tags to demonstrate how they are specified and potential uses, however resources that affect access control are not enabled in the Data Mesh deployment by default.

### "(Deprecated) Data Mesh concepts \_|\_ Google Cloud Cortex Framework \_|\_\

- URL: [https://docs.cloud.google.com/cortex/docs/datamesh-concepts](https://docs.cloud.google.com/cortex/docs/datamesh-concepts)
- Source ID: `site-docs-reference`
- Final score: 69
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Google Cloud Cortex Framework Guides Send feedback Stay organized with collections Save and categorize content based on your preferences. (Deprecated) Data Mesh concepts Warning: The Data Mesh feature within the Google Cloud Cortex Framework is now deprecated and disabled.
- Before diving into the detailed guide on deploying Data Mesh with Google Cloud Cortex Framework, this page provides a foundation for how relevant Data Mesh concepts are generally implemented within a Google Cloud product and specifically with the Cortex Framework context.
- Cortex Data Mesh concept The following table defines specific Data Mesh concepts within Cortex Framework: Concept Description Cortex Framework context Metadata Resource Metadata entities that can be re-used across multiple BigQuery assets.
- Dataplex Universal Catalog The following table defines Data Mesh concepts within Dataplex Universal Catalog: Concept Description Cortex Framework context Lake Top level unit for organizing data within a Data Mesh.

### Overview \_|\_ Google Cloud Cortex Framework \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/cortex/docs/overview](https://docs.cloud.google.com/cortex/docs/overview)
- Source ID: `site-docs-root`
- Final score: 63
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Overview Google Cloud Cortex Framework provides reference architectures, deployable solutions, and packaged implementation services to kickstart your Data and AI Cloud journey.
- Cortex Framework uses BigQuery for storing raw, transformed, and reporting data.
- Deployment For Cortex Framework deployment instructions, see the following guides: Quickstart Demo : a quickstart demo to test the Cortex Framework set up process with sample data with in just a few clicks.
- Support In case of any requests or issues, you can reach out directly to the Cortex Framework team by creating a new ticket in our support channel: Go to our support channel to create a new support case.

