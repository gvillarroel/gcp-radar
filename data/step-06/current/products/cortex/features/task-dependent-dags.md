---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:00:38.894Z"
product_name: "Cortex"
product_slug: "cortex"
feature_name: "Task Dependent DAGs"
feature_slug: "task-dependent-dags"
latest_feature_date: "2025-04-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/cortex/docs/deployment-step-five"
  - "https://docs.cloud.google.com/cortex/docs/external-dags-migration"
  - "https://docs.cloud.google.com/cortex/docs/looker-block-deployment"
keywords:
  - "task"
  - "dependent"
  - "dags"
  - "provide"
  - "out"
  - "box"
  - "customizable"
  - "dependency"
---

# Task Dependent DAGs

Product: Cortex
Coverage: MEDIUM

## Step 02 Summary

Task Dependent DAGs provide out-of-the-box and customizable task dependency configurations for SAP ECC and S/4 reporting pipelines.

## Extended Definition

Task Dependent DAGs provide out-of-the-box and customizable task dependency configurations for SAP ECC and S/4 reporting pipelines.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/cortex/docs/deployment-step-five](https://docs.cloud.google.com/cortex/docs/deployment-step-five)
- [https://docs.cloud.google.com/cortex/docs/external-dags-migration](https://docs.cloud.google.com/cortex/docs/external-dags-migration)
- [https://docs.cloud.google.com/cortex/docs/looker-block-deployment](https://docs.cloud.google.com/cortex/docs/looker-block-deployment)

## Supporting Pages

### "Step 5: Configure deployment \_|\_ Google Cloud Cortex Framework \_|\_ Google\

- URL: [https://docs.cloud.google.com/cortex/docs/deployment-step-five](https://docs.cloud.google.com/cortex/docs/deployment-step-five)
- Source ID: `site-docs-reference`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: Test data deployment will only execute if the raw dataset is empty and has no tables . deploySAP Deploy SAP true Execute the deployment for SAP workload (ECC or S/4 HANA). deploySFDC Deploy Salesforce true Execute the deployment for Salesforce workload. deployMarketing Deploy Marketing true Execute the deployment for Marketing sources (Google Ads, CM360, and TikTok). deployOracleEBS Deploy Oracle EBS true Execute the deployment for Oracle EBS workload. enableTaskDependencies Task dependent DAGs false Enable task dependent DAGs so supported SQL tables will be executed based on dependency order, within single DAGs.
- Note: If you enabled Task dependent DAGs by setting the enableTaskDependencies field to True , make sure to create a dedicated reporting settings file with the suffix task dep.yaml for each data source requiring task dependencies.
- For more information, see Task dependent DAGs . turboMode Deploy in Turbo mode . true Execute all views builds as a step in the same Cloud Build process, in parallel for a faster deployment.
- For more information, see Task dependent DAGs Table partition Certain settings files let you configure materialized tables with custom clustering and partitioning options.

### "External DAGs migration from v4.2 to v5.0 \_|\_ Google Cloud Cortex Framework\

- URL: [https://docs.cloud.google.com/cortex/docs/external-dags-migration](https://docs.cloud.google.com/cortex/docs/external-dags-migration)
- Source ID: `site-docs-reference`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following external data sources are now deployed as a part of K9, into the K9 PROCESSING dataset: date dimension holiday calendar trends weather SAP-dependent DAGs The following SAP-dependent DAGs are still triggered by generate external dags.sh script, but now executes during the reporting build step, and now write into the SAP reporting dataset instead of the CDC (Change Data Capture) stage. currency conversion inventory snapshots prod hierarchy texts Migration Guide This guide outlines the steps to upgrade your Cortex Framework Data Foundation to version 5.0.
- Make sure to remove any DAGs you don't want to migrate from the migrate list section: { "project id src" : "your-source-project" , "project id tgt" : "your-target-project" , "dataset cdc processed" : "your-cdc-processed-dataset" , "dataset reporting tgt" : "your-reporting-target-dataset-OR-SAP REPORTING" , "k9 datasets processing" : "your-k9-processing-dataset-OR-K9 REPORTING" , "migrate list" : [ "holiday calendar" , "trends" , "weather" , "currency conversion" , "inventory snapshots" , "prod hierarchy texts" ] } EOF For example, if you want to remove weather and trends , the script would look like the following: { "project id src" : "kittycorn-demo" , "project id tgt" : "kittycorn-demo" , "dataset cdc processed" : "CDC PROCESSED" , "dataset reporting tgt" : "SAP REPORTING" , "k9 datasets processing" : "K9 PROCESSING" , "migrate list" : [ "holiday calendar" , "currency conversion" , "inventory snapshots" , "prod hierarchy texts" ] } Create an output folder with the following command: mkdir output Generate the parsed migration script with the following command (this command assumes you are at the root of the repository): jinja -d data.json -o output/migrate external dags.sql docs/external dag migration/scripts/migrate external dags.sql Examine the output SQL file and execute in BigQuery to migrate your tables to the new location.
- Cross-workload reusable DAGs Cortex Framework Data Foundation v5.0 introduces K9, a new component responsible for ingesting, processing, and modeling reusable data elements that are shared across various data sources.
- This guide outlines the steps necessary to relocate output tables from external Directed Acyclic Graphs (DAGs) to their new locations within the Cortex Data Foundation v5.0 architecture.

### "Deploy Looker Blocks \_|\_ Google Cloud Cortex Framework \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/cortex/docs/looker-block-deployment](https://docs.cloud.google.com/cortex/docs/looker-block-deployment)
- Source ID: `site-docs-reference`
- Final score: 40
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

