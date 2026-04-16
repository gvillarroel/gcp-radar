---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:00:38.894Z"
product_name: "Cortex"
product_slug: "cortex"
feature_name: "Cortex Common Dimensions"
feature_slug: "cortex-common-dimensions"
latest_feature_date: "2025-03-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cortex/docs/looker-block-customize"
  - "https://docs.cloud.google.com/cortex/docs/datamesh"
  - "https://docs.cloud.google.com/cortex/docs/deployment-step-five"
keywords:
  - "cortex"
  - "common"
  - "dimensions"
  - "provides"
  - "shared"
  - "utility"
  - "views"
  - "tables"
---

# Cortex Common Dimensions

Product: Cortex
Coverage: MEDIUM

## Step 02 Summary

Cortex Common Dimensions provides shared utility views and tables such as country, product hierarchy, and currency conversion across data sources.

## Extended Definition

Cortex Common Dimensions provides shared utility views and tables such as country, product hierarchy, and currency conversion across data sources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/cortex/docs/looker-block-customize](https://docs.cloud.google.com/cortex/docs/looker-block-customize)
- [https://docs.cloud.google.com/cortex/docs/datamesh](https://docs.cloud.google.com/cortex/docs/datamesh)
- [https://docs.cloud.google.com/cortex/docs/deployment-step-five](https://docs.cloud.google.com/cortex/docs/deployment-step-five)

## Supporting Pages

### "Customize Looker Blocks \_|\_ Google Cloud Cortex Framework \_|\_ Google\

- URL: [https://docs.cloud.google.com/cortex/docs/looker-block-customize](https://docs.cloud.google.com/cortex/docs/looker-block-customize)
- Source ID: `site-docs-reference`
- Final score: 132
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BUSINESS UNIT NAME ) ;; } } Include the new refinement in the Explore : Use the new file in the include property instead of the refinement provided in the Cortex Framework Looker Block. include : "/views/my customizations/sales invoices rfn.view" explore : sales invoices { } Editing LookML dashboard filters The common set of dashboard filters used across multiple LookML dashboards are defined in a dashboard named with template suffix and extended into each dashboard.
- The Cortex Framework Looker Blocks have been created in a layered approach where each layer adds an incremental piece of logic onto the previous layer: Base Layer : Machine-generated LookML views referencing source tables.
- Significant modifications to these views like labels, new dimensions and measures have been created in the Core folder using refinements , extends or derived tables .
- Add a new dimension : Include the code for the new dimension within the sales orders rfn2.view file. include : "/views/core/sales orders rfn.view" view : + sales orders { measure : average sales { label : "Average Spend" } dimension : customer name with id { type : string sql : CONCAT ( ${ customer id } , ' ' , ${ customer name } ) } } Include second refinement file in Explore : This will incorporate all definitions and enhancements from sales orders rfn2 in the Explore. include : "/views/core/sales orders rfn2.view" explore : sales orders { } Creating a new refinement layer The refinement of any base view defined within the Cortex Framework Looker Block can be replaced if it doesn't meet your specific requirements.

### "(Deprecated) Data Mesh User Guide \_|\_ Google Cloud Cortex Framework \_\

- URL: [https://docs.cloud.google.com/cortex/docs/datamesh](https://docs.cloud.google.com/cortex/docs/datamesh)
- Source ID: `site-docs-reference`
- Final score: 105
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To ensure that you are deploying with required packages and versions, you can run the utility from the same image used by the Cortex deployment process with the following commands: Run container interactively docker container run -it gcr.io/kittycorn-public/deploy-kittycorn:v2.0 Clone the repo git clone https://github.com/GoogleCloudPlatform/cortex-data-foundation Navigate into the repo cd cortex-data-foundation For help with the available parameters and their usage, run the following command: python src/common/data mesh/deploy data mesh.py -h The following is an example for invocation for SAP ECC: python src/common/data mesh/deploy data mesh.py \ --config-file config/config.json \ --lake-directories \ src/SAP/SAP REPORTING/config/ecc/lakes \ --tag-template-directories \ src/SAP/SAP REPORTING/config/ecc/tag templates \ --policy-directories \ src/SAP/SAP REPORTING/config/ecc/policy taxonomies \ --annotation-directories \ src/SAP/SAP REPORTING/config/ecc/annotations See the Data Mesh directories section for information about directory locations.
- The following sections are particularly relevant: Roles interact Authorization inheritance Masking rules and hierarchy Policy tag best practices Cortex Framework provides sample policy tags to demonstrate how they are specified and potential uses, however resources that affect access control are not enabled in the Data Mesh deployment by default.
- Asset and Column Level Access Control with Tag Templates Cortex Framework provides the ability to enable asset or column level access control on all artifacts that are associated with a Catalog Tag Template.
- Row policies only works with tables, not views.

### "Step 5: Configure deployment \_|\_ Google Cloud Cortex Framework \_|\_ Google\

- URL: [https://docs.cloud.google.com/cortex/docs/deployment-step-five](https://docs.cloud.google.com/cortex/docs/deployment-step-five)
- Source ID: `site-docs-reference`
- Final score: 71
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The configuration files for each workload are located in the following paths within the Cortex Framework Data Foundation repository: Data Source Settings files Operational - SAP src/SAP/SAP REPORTING/reporting settings ecc.yaml Operational - Salesforce Sales Cloud src/SFDC/config/reporting settings.yaml Operational - Oracle EBS src/oracleEBS/config/reporting settings.yaml Marketing - Google Ads src/marketing/src/GoogleAds/config/reporting settings.yaml Marketing - CM360 src/marketing/src/CM360/config/reporting settings.yaml Marketing - Meta src/marketing/src/Meta/config/reporting settings.yaml Marketing - Salesforce Marketing Cloud src/marketing/src/SFMC/config/reporting settings.yaml Marketing - TikTok src/marketing/src/TikTok/config/reporting settings.yaml Marketing - YouTube (with DV360) src/marketing/src/DV360/config/reporting settings.yaml Marketing - Google Analytics 4 src/marketing/src/GA4/config/reporting settings.yaml Marketing - Cross Media & Product Connected Insights src/marketing/src/CrossMedia/config/reporting settings.yaml Customizing reporting settings file The reporting settings files drives how the BigQuery objects (tables or views) are created for reporting datasets.
- Performance optimization for reporting views Reporting artifacts can be created as views or as tables refreshed regularly through DAGs.
- Note: Test data deployment will only execute if the raw dataset is empty and has no tables . deploySAP Deploy SAP true Execute the deployment for SAP workload (ECC or S/4 HANA). deploySFDC Deploy Salesforce true Execute the deployment for Salesforce workload. deployMarketing Deploy Marketing true Execute the deployment for Marketing sources (Google Ads, CM360, and TikTok). deployOracleEBS Deploy Oracle EBS true Execute the deployment for Oracle EBS workload. enableTaskDependencies Task dependent DAGs false Enable task dependent DAGs so supported SQL tables will be executed based on dependency order, within single DAGs.
- Note: When installing multiple Cortex Framework workloads, you need to increase the Build and Operation Get requests per minute and Build and Operation Get requests per minute per user quotas.

