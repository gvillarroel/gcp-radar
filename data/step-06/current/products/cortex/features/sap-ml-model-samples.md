---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:00:38.895Z"
product_name: "Cortex"
product_slug: "cortex"
feature_name: "SAP ML model samples"
feature_slug: "sap-ml-model-samples"
latest_feature_date: "2025-03-04"
deprecation_date: "2025-03-04"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cortex/docs/deployment-step-three"
  - "https://docs.cloud.google.com/cortex/docs/looker-block-customize"
  - "https://docs.cloud.google.com/cortex/docs/looker-block-deployment"
keywords:
  - "sap"
  - "ml"
  - "model"
  - "samples"
  - "standalone"
  - "cortex"
  - "sample"
  - "assets"
---

# SAP ML model samples

Product: Cortex
Coverage: MEDIUM

## Step 02 Summary

SAP ML model samples are standalone Cortex sample assets for SAP machine learning scenarios; deprecated on 2025-03-04.

## Extended Definition

SAP ML model samples are standalone Cortex sample assets for SAP machine learning scenarios; deprecated on 2025-03-04.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/cortex/docs/deployment-step-three](https://docs.cloud.google.com/cortex/docs/deployment-step-three)
- [https://docs.cloud.google.com/cortex/docs/looker-block-customize](https://docs.cloud.google.com/cortex/docs/looker-block-customize)
- [https://docs.cloud.google.com/cortex/docs/looker-block-deployment](https://docs.cloud.google.com/cortex/docs/looker-block-deployment)

## Supporting Pages

### "Customize Looker Blocks \_|\_ Google Cloud Cortex Framework \_|\_ Google\

- URL: [https://docs.cloud.google.com/cortex/docs/looker-block-customize](https://docs.cloud.google.com/cortex/docs/looker-block-customize)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Add a new dimension : Include the code for the new dimension within the sales orders rfn2.view file. include : "/views/core/sales orders rfn.view" view : + sales orders { measure : average sales { label : "Average Spend" } dimension : customer name with id { type : string sql : CONCAT ( ${ customer id } , ' ' , ${ customer name } ) } } Include second refinement file in Explore : This will incorporate all definitions and enhancements from sales orders rfn2 in the Explore. include : "/views/core/sales orders rfn2.view" explore : sales orders { } Creating a new refinement layer The refinement of any base view defined within the Cortex Framework Looker Block can be replaced if it doesn't meet your specific requirements.
- Model Modular file management makes the project's model file lean with the following parameters: connection include The type of files included are the following: Components (datagroups, named value formats when relevant) Explores (explores are not defined in the model file) Dashboards The include statements for the views utilized in the Block are defined within each individual Explore file, rather than in this location as the following example shows: connection: "@{CONNECTION NAME}" include: "/components/ / .lkml" include: "/explores/ / .explore" include: "/dashboards/ / .dashboard" Manifest The Manifest file specifies the constants that are referenced throughout a project.

### "Step 3: Determine integration mechanism \_|\_ Google Cloud Cortex Framework\

- URL: [https://docs.cloud.google.com/cortex/docs/deployment-step-three](https://docs.cloud.google.com/cortex/docs/deployment-step-three)
- Source ID: `site-docs-reference`
- Final score: 93
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Operational: SAP (SAP ECC or SAP S/4 HANA) Salesforce Sales Cloud Oracle EBS Marketing: Google Ads Campaign Manager 360 (CM360) TikTok LiveRamp Meta (Facebook / Instagram) Salesforce Marketing Cloud (SFMC) YouTube (with DV360) Google Analytics 4 Cross Media & Product Connected Insights Cortex for Meridian Sustainability: Dun & Bradstreet For more information about the Entity-Relationship Diagrams that each data source supports, see the docs folder in the Cortex Framework Data Foundation repository.
- The post-processing K9 steps occurs after all workloads have deployed their reporting models to enable cross-workload reporting or augmenting models to find their necessary dependencies within each individual reporting dataset.

### "Deploy Looker Blocks \_|\_ Google Cloud Cortex Framework \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cortex/docs/looker-block-deployment](https://docs.cloud.google.com/cortex/docs/looker-block-deployment)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Extra Resources For more information about LookML, see the following documentation and training: Looker Best Practices Looker Google Cloud Training Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To install the LookML Model that corresponds to your Cortex data source, use one of the following options: Option A : Install through Looker Marketplace from a Git URL.
- For example, name the model cortex-<datasource> .

