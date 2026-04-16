---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:00:38.892Z"
product_name: "Cortex"
product_slug: "cortex"
feature_name: "GLDocumentsHdr view"
feature_slug: "gldocumentshdr-view"
latest_feature_date: "2025-09-19"
deprecation_date: "2025-09-19"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cortex/docs/datamesh"
  - "https://docs.cloud.google.com/cortex/docs/datamesh-concepts"
  - "https://docs.cloud.google.com/cortex/docs/overview"
keywords:
  - "gldocumentshdr"
  - "view"
  - "cortex"
  - "sap"
  - "reporting"
  - "header"
  - "level"
  - "ledger"
---

# GLDocumentsHdr view

Product: Cortex
Coverage: MEDIUM

## Step 02 Summary

GLDocumentsHdr is a Cortex SAP reporting view for header-level general ledger document data; deprecated on 2025-09-19.

## Extended Definition

GLDocumentsHdr is a Cortex SAP reporting view for header-level general ledger document data; deprecated on 2025-09-19.

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
- Final score: 79
- Re-rank relevance: N/A

Evidence snippets:
- To ensure that you are deploying with required packages and versions, you can run the utility from the same image used by the Cortex deployment process with the following commands: Run container interactively docker container run -it gcr.io/kittycorn-public/deploy-kittycorn:v2.0 Clone the repo git clone https://github.com/GoogleCloudPlatform/cortex-data-foundation Navigate into the repo cd cortex-data-foundation For help with the available parameters and their usage, run the following command: python src/common/data mesh/deploy data mesh.py -h The following is an example for invocation for SAP ECC: python src/common/data mesh/deploy data mesh.py \ --config-file config/config.json \ --lake-directories \ src/SAP/SAP REPORTING/config/ecc/lakes \ --tag-template-directories \ src/SAP/SAP REPORTING/config/ecc/tag templates \ --policy-directories \ src/SAP/SAP REPORTING/config/ecc/policy taxonomies \ --annotation-directories \ src/SAP/SAP REPORTING/config/ecc/annotations See the Data Mesh directories section for information about directory locations.
- Asset and Column Level Access Control with Tag Templates Cortex Framework provides the ability to enable asset or column level access control on all artifacts that are associated with a Catalog Tag Template.
- Access policies that were deployed can be viewed on the BigQuery Schema page to see the policies applied on a particular asset at each level.
- Asset Level Access You can grant access to entire BigQuery assets with various permissions: READER : View data in the asset.

### "(Deprecated) Data Mesh concepts \_|\_ Google Cloud Cortex Framework \_|\_\

- URL: [https://docs.cloud.google.com/cortex/docs/datamesh-concepts](https://docs.cloud.google.com/cortex/docs/datamesh-concepts)
- Source ID: `site-docs-reference`
- Final score: 67
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Dataplex Universal Catalog The following table defines Data Mesh concepts within Dataplex Universal Catalog: Concept Description Cortex Framework context Lake Top level unit for organizing data within a Data Mesh.
- Home Documentation Data analytics Google Cloud Cortex Framework Guides Send feedback Stay organized with collections Save and categorize content based on your preferences. (Deprecated) Data Mesh concepts Warning: The Data Mesh feature within the Google Cloud Cortex Framework is now deprecated and disabled.
- Before diving into the detailed guide on deploying Data Mesh with Google Cloud Cortex Framework, this page provides a foundation for how relevant Data Mesh concepts are generally implemented within a Google Cloud product and specifically with the Cortex Framework context.
- Cortex Data Mesh concept The following table defines specific Data Mesh concepts within Cortex Framework: Concept Description Cortex Framework context Metadata Resource Metadata entities that can be re-used across multiple BigQuery assets.

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

