---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:00:38.901Z"
product_name: "Cortex"
product_slug: "cortex"
feature_name: "Oracle EBS"
feature_slug: "oracle-ebs"
latest_feature_date: "2024-09-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cortex/docs/deployment-step-five"
  - "https://docs.cloud.google.com/cortex/docs/data-sources-and-workloads"
  - "https://docs.cloud.google.com/cortex/docs/deployment-step-three"
keywords:
  - "oracle"
  - "ebs"
  - "source"
  - "integration"
  - "measuring"
  - "order"
  - "cash"
  - "operational"
---

# Oracle EBS

Product: Cortex
Coverage: MEDIUM

## Step 02 Summary

Oracle EBS is a data source integration for measuring order-to-cash operational metrics with BigQuery templates and data models.

## Extended Definition

Oracle EBS is a data source integration for measuring order-to-cash operational metrics with BigQuery templates and data models.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/cortex/docs/deployment-step-five](https://docs.cloud.google.com/cortex/docs/deployment-step-five)
- [https://docs.cloud.google.com/cortex/docs/data-sources-and-workloads](https://docs.cloud.google.com/cortex/docs/data-sources-and-workloads)
- [https://docs.cloud.google.com/cortex/docs/deployment-step-three](https://docs.cloud.google.com/cortex/docs/deployment-step-three)

## Supporting Pages

### "Step 5: Configure deployment \_|\_ Google Cloud Cortex Framework \_|\_ Google\

- URL: [https://docs.cloud.google.com/cortex/docs/deployment-step-five](https://docs.cloud.google.com/cortex/docs/deployment-step-five)
- Source ID: `site-docs-reference`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The configuration files for each workload are located in the following paths within the Cortex Framework Data Foundation repository: Data Source Settings files Operational - SAP src/SAP/SAP REPORTING/reporting settings ecc.yaml Operational - Salesforce Sales Cloud src/SFDC/config/reporting settings.yaml Operational - Oracle EBS src/oracleEBS/config/reporting settings.yaml Marketing - Google Ads src/marketing/src/GoogleAds/config/reporting settings.yaml Marketing - CM360 src/marketing/src/CM360/config/reporting settings.yaml Marketing - Meta src/marketing/src/Meta/config/reporting settings.yaml Marketing - Salesforce Marketing Cloud src/marketing/src/SFMC/config/reporting settings.yaml Marketing - TikTok src/marketing/src/TikTok/config/reporting settings.yaml Marketing - YouTube (with DV360) src/marketing/src/DV360/config/reporting settings.yaml Marketing - Google Analytics 4 src/marketing/src/GA4/config/reporting settings.yaml Marketing - Cross Media & Product Connected Insights src/marketing/src/CrossMedia/config/reporting settings.yaml Customizing reporting settings file The reporting settings files drives how the BigQuery objects (tables or views) are created for reporting datasets.
- Note: Test data deployment will only execute if the raw dataset is empty and has no tables . deploySAP Deploy SAP true Execute the deployment for SAP workload (ECC or S/4 HANA). deploySFDC Deploy Salesforce true Execute the deployment for Salesforce workload. deployMarketing Deploy Marketing true Execute the deployment for Marketing sources (Google Ads, CM360, and TikTok). deployOracleEBS Deploy Oracle EBS true Execute the deployment for Oracle EBS workload. enableTaskDependencies Task dependent DAGs false Enable task dependent DAGs so supported SQL tables will be executed based on dependency order, within single DAGs.
- We recommend only setting it to true when using test data or after any mismatch between reporting columns and the source data have been resolved. projectIdSource Source Project ID - Project where the source dataset is and the build runs. projectIdTarget Target Project ID - Target project for user-facing datasets. targetBucket Target Bucket to storage generated DAG scripts - Bucket created previously where DAGs (and Dataflow temp files) are generated.
- When Turbo mode is enabled, these BigQuery objects are created in parallel during the deployment time, speeding up the deployment process. bq dependent objects : All BigQuery objects that need to be created in a specific order due to dependencies on other BigQuery objects.

### "Data sources and workloads \_|\_ Google Cloud Cortex Framework \_|\_ Google\

- URL: [https://docs.cloud.google.com/cortex/docs/data-sources-and-workloads](https://docs.cloud.google.com/cortex/docs/data-sources-and-workloads)
- Source ID: `site-docs-reference`
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following are the operational related data sources available: SAP (SAP ECC and SAP S/4 HANA) Salesforce Sales Cloud Oracle EBS Sustainability Cortex Framework for Sustainability empowers organizations to proactively address their environmental, social, and governance (ESG) responsibilities.
- The following are the marketing related data sources available: Salesforce Marketing Cloud Google Ads Campaign Manager 360 (CM360) TikTok Meta LiveRamp YouTube (with DV360) Google Analytics 4 Cross Media & Product Connected Insights Cortex for Meridian Operational Cortex Framework incorporates operational platforms such as SAP (SAP ECC and SAP S/4 HANA) and Salesforce as valuable data sources to get real-time insights to improve efficiency and productivity in different areas.
- The following is the sustainability related data source available: Dun & Bradstreet with SAP Deployment For more information about deployment, start exploring the prerequisites of the Cortex Framework Data Foundation deployment.
- Note: The Cortex Framework Data Foundation repository in GitHub contains the reference images, documents, and scripts to implement the deployment steps to retrieve the workloads and data sources described on this page.

### "Step 3: Determine integration mechanism \_|\_ Google Cloud Cortex Framework\

- URL: [https://docs.cloud.google.com/cortex/docs/deployment-step-three](https://docs.cloud.google.com/cortex/docs/deployment-step-three)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Operational: SAP (SAP ECC or SAP S/4 HANA) Salesforce Sales Cloud Oracle EBS Marketing: Google Ads Campaign Manager 360 (CM360) TikTok LiveRamp Meta (Facebook / Instagram) Salesforce Marketing Cloud (SFMC) YouTube (with DV360) Google Analytics 4 Cross Media & Product Connected Insights Cortex for Meridian Sustainability: Dun & Bradstreet For more information about the Entity-Relationship Diagrams that each data source supports, see the docs folder in the Cortex Framework Data Foundation repository.
- Integration overview Cortex Framework helps you centralize data from various sources, along with other platforms.
- K9 deployment The K9 deployer simplifies the integration of diverse data sources.
- See the integration options for each data source in the following resources.

