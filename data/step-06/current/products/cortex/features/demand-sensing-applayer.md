---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:00:38.895Z"
product_name: "Cortex"
product_slug: "cortex"
feature_name: "Demand Sensing AppLayer"
feature_slug: "demand-sensing-applayer"
latest_feature_date: "2025-03-04"
deprecation_date: "2025-03-04"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cortex/docs/datamesh"
  - "https://docs.cloud.google.com/cortex/docs/datamesh-concepts"
  - "https://docs.cloud.google.com/cortex/docs/looker-block-cross-media"
keywords:
  - "demand"
  - "sensing"
  - "applayer"
  - "standalone"
  - "cortex"
  - "accelerator"
  - "use"
  - "cases"
---

# Demand Sensing AppLayer

Product: Cortex
Coverage: MEDIUM

## Step 02 Summary

Demand Sensing AppLayer is a standalone Cortex accelerator for demand sensing use cases; deprecated on 2025-03-04.

## Extended Definition

Demand Sensing AppLayer is a standalone Cortex accelerator for demand sensing use cases; deprecated on 2025-03-04.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/cortex/docs/datamesh](https://docs.cloud.google.com/cortex/docs/datamesh)
- [https://docs.cloud.google.com/cortex/docs/datamesh-concepts](https://docs.cloud.google.com/cortex/docs/datamesh-concepts)
- [https://docs.cloud.google.com/cortex/docs/looker-block-cross-media](https://docs.cloud.google.com/cortex/docs/looker-block-cross-media)

## Supporting Pages

### "Looker Block for Cross Media & Product Connected Insights \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cortex/docs/looker-block-cross-media](https://docs.cloud.google.com/cortex/docs/looker-block-cross-media)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Overall campaign performance Overview of high-level performance and engagement metrics including: Total impressions Total clicks Click through rate (CTR) Total Spend Cost per Mille (CPM) Cost per click (CPC) Media platform performance and spend by month Spend by month and media platform Cumulative monthly spend in total and by media platform Campaign performance Campaigns in chronological view Impressions, clicks, click through rate and cost per mille by media platform, campaign, and country Detailed performance by campaign and country Required Data Get the required BigQuery datasets for this block by following the installation instructions for Cortex Framework .
- With this Looker Block you can get a comprehensive view of your campaign spend and performance by combining your campaign data from multiple paid media platforms including Google Ads, Meta, TikTok and YouTube (with DV360) into BigQuery with pre-packaged ingestion pipelines and reporting views provided by Google Cloud Cortex Framework for Marketing .
- Looker Block for Cross Media & Product Connected Insights This page describes the insights you can get from the Cortex Looker Block for Cross Media & Product Connected Insights.
- Home Documentation Data analytics Google Cloud Cortex Framework Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

### "(Deprecated) Data Mesh concepts \_|\_ Google Cloud Cortex Framework \_|\_\

- URL: [https://docs.cloud.google.com/cortex/docs/datamesh-concepts](https://docs.cloud.google.com/cortex/docs/datamesh-concepts)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Google Cloud Cortex Framework Guides Send feedback Stay organized with collections Save and categorize content based on your preferences. (Deprecated) Data Mesh concepts Warning: The Data Mesh feature within the Google Cloud Cortex Framework is now deprecated and disabled.
- Before diving into the detailed guide on deploying Data Mesh with Google Cloud Cortex Framework, this page provides a foundation for how relevant Data Mesh concepts are generally implemented within a Google Cloud product and specifically with the Cortex Framework context.
- Cortex Data Mesh concept The following table defines specific Data Mesh concepts within Cortex Framework: Concept Description Cortex Framework context Metadata Resource Metadata entities that can be re-used across multiple BigQuery assets.
- Dataplex Universal Catalog The following table defines Data Mesh concepts within Dataplex Universal Catalog: Concept Description Cortex Framework context Lake Top level unit for organizing data within a Data Mesh.

### "(Deprecated) Data Mesh User Guide \_|\_ Google Cloud Cortex Framework \_\

- URL: [https://docs.cloud.google.com/cortex/docs/datamesh](https://docs.cloud.google.com/cortex/docs/datamesh)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- To ensure that you are deploying with required packages and versions, you can run the utility from the same image used by the Cortex deployment process with the following commands: Run container interactively docker container run -it gcr.io/kittycorn-public/deploy-kittycorn:v2.0 Clone the repo git clone https://github.com/GoogleCloudPlatform/cortex-data-foundation Navigate into the repo cd cortex-data-foundation For help with the available parameters and their usage, run the following command: python src/common/data mesh/deploy data mesh.py -h The following is an example for invocation for SAP ECC: python src/common/data mesh/deploy data mesh.py \ --config-file config/config.json \ --lake-directories \ src/SAP/SAP REPORTING/config/ecc/lakes \ --tag-template-directories \ src/SAP/SAP REPORTING/config/ecc/tag templates \ --policy-directories \ src/SAP/SAP REPORTING/config/ecc/policy taxonomies \ --annotation-directories \ src/SAP/SAP REPORTING/config/ecc/annotations See the Data Mesh directories section for information about directory locations.
- The following sections are particularly relevant: Roles interact Authorization inheritance Masking rules and hierarchy Policy tag best practices Cortex Framework provides sample policy tags to demonstrate how they are specified and potential uses, however resources that affect access control are not enabled in the Data Mesh deployment by default.
- Design Cortex's Data Mesh is designed similarly to the overall data foundation and consists of three phases with different subcomponents managed by Cortex or users: Base resource specs update : With each release, Cortex updates the base resource specifications, providing a standardized metadata foundation for the Data Mesh.
- Home Documentation Data analytics Google Cloud Cortex Framework Guides Send feedback Stay organized with collections Save and categorize content based on your preferences. (Deprecated) Data Mesh User Guide Warning: The Data Mesh feature within the Google Cloud Cortex Framework is now deprecated and disabled.

