---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:00:38.895Z"
product_name: "Cortex"
product_slug: "cortex"
feature_name: "SAP Annotations"
feature_slug: "sap-annotations"
latest_feature_date: "2024-12-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cortex/docs/datamesh"
  - "https://docs.cloud.google.com/cortex/docs/looker-block-customize"
  - "https://docs.cloud.google.com/cortex/docs/datamesh-concepts"
keywords:
  - "sap"
  - "annotations"
  - "add"
  - "functional"
  - "descriptions"
  - "business"
  - "context"
  - "reporting"
---

# SAP Annotations

Product: Cortex
Coverage: MEDIUM

## Step 02 Summary

SAP Annotations add functional descriptions and business context to SAP reporting views and fields.

## Extended Definition

SAP Annotations add functional descriptions and business context to SAP reporting views and fields.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/cortex/docs/datamesh](https://docs.cloud.google.com/cortex/docs/datamesh)
- [https://docs.cloud.google.com/cortex/docs/looker-block-customize](https://docs.cloud.google.com/cortex/docs/looker-block-customize)
- [https://docs.cloud.google.com/cortex/docs/datamesh-concepts](https://docs.cloud.google.com/cortex/docs/datamesh-concepts)

## Supporting Pages

### "(Deprecated) Data Mesh User Guide \_|\_ Google Cloud Cortex Framework \_\

- URL: [https://docs.cloud.google.com/cortex/docs/datamesh](https://docs.cloud.google.com/cortex/docs/datamesh)
- Source ID: `site-docs-reference`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To ensure that you are deploying with required packages and versions, you can run the utility from the same image used by the Cortex deployment process with the following commands: Run container interactively docker container run -it gcr.io/kittycorn-public/deploy-kittycorn:v2.0 Clone the repo git clone https://github.com/GoogleCloudPlatform/cortex-data-foundation Navigate into the repo cd cortex-data-foundation For help with the available parameters and their usage, run the following command: python src/common/data mesh/deploy data mesh.py -h The following is an example for invocation for SAP ECC: python src/common/data mesh/deploy data mesh.py \ --config-file config/config.json \ --lake-directories \ src/SAP/SAP REPORTING/config/ecc/lakes \ --tag-template-directories \ src/SAP/SAP REPORTING/config/ecc/tag templates \ --policy-directories \ src/SAP/SAP REPORTING/config/ecc/policy taxonomies \ --annotation-directories \ src/SAP/SAP REPORTING/config/ecc/annotations See the Data Mesh directories section for information about directory locations.
- Annotations include: Asset descriptions Field descriptions Catalog Tags Asset, row, and column level access control Note: If you modify an annotation file, consider that the console only renders new lines in descriptions as a whitespace.
- Option Notes deployDescriptions This is the only option enabled by default and it deploys BigQuery annotations with asset and column descriptions.
- Cortex Framework Data foundation offers pre-configured annotations (descriptions) for the following workloads.

### "Customize Looker Blocks \_|\_ Google Cloud Cortex Framework \_|\_ Google\

- URL: [https://docs.cloud.google.com/cortex/docs/looker-block-customize](https://docs.cloud.google.com/cortex/docs/looker-block-customize)
- Source ID: `site-docs-reference`
- Final score: 71
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Each view definition begins with annotations that furnish background information, including descriptions, sources, references, extended fields, and other relevant notes.
- BUSINESS UNIT NAME ) ;; } } Include the new refinement in the Explore : Use the new file in the include property instead of the refinement provided in the Cortex Framework Looker Block. include : "/views/my customizations/sales invoices rfn.view" explore : sales invoices { } Editing LookML dashboard filters The common set of dashboard filters used across multiple LookML dashboards are defined in a dashboard named with template suffix and extended into each dashboard.
- Customize Looker Blocks This page provides an overview of best practices and examples on how to adapt the following Cortex Framework Looker Blocks to your specific business requirements: Looker Block for Oracle EBS Looker Block for Meta Looker Block for YouTube (with DV360) Installation You can install the Cortex Framework Looker Blocks in a few ways, as detailed in the Deploy Looker Blocks documentation.
- Add the chosen customizations : Be sure to also define a dimension as a primary key. include : "/views/base/sales invoices.view" view : + sales invoices { fields hidden by default : yes dimension : invoice id { hidden : no primary key : yes value format name : id } dimension : business unit name { hidden : no sql : CONCAT ( ${ business unit id } , ":" , ${ TABLE } .

### "(Deprecated) Data Mesh concepts \_|\_ Google Cloud Cortex Framework \_|\_\

- URL: [https://docs.cloud.google.com/cortex/docs/datamesh-concepts](https://docs.cloud.google.com/cortex/docs/datamesh-concepts)
- Source ID: `site-docs-reference`
- Final score: 57
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before diving into the detailed guide on deploying Data Mesh with Google Cloud Cortex Framework, this page provides a foundation for how relevant Data Mesh concepts are generally implemented within a Google Cloud product and specifically with the Cortex Framework context.
- Cortex Data Mesh concept The following table defines specific Data Mesh concepts within Cortex Framework: Concept Description Cortex Framework context Metadata Resource Metadata entities that can be re-used across multiple BigQuery assets.
- Dataplex Universal Catalog The following table defines Data Mesh concepts within Dataplex Universal Catalog: Concept Description Cortex Framework context Lake Top level unit for organizing data within a Data Mesh.
- BigQuery The following table defines Data Mesh concepts within BigQuery: Concept Description Cortex Framework context Policy Taxonomy A hierarchy of policy tags.

