---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.462Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Omni VPC allowlists"
feature_slug: "bigquery-omni-vpc-allowlists"
latest_feature_date: "2025-01-13"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "Azure Blob Storage allowlist"
  - "Omni VPC allowlist"
  - "S3 and Blob allowlists"
  - "storage access allowlist"
  - "AWS S3 allowlist"
  - "VPC allowlists"
  - "Omni VPC"
  - "BigQuery Omni"
---

# BigQuery Omni VPC allowlists

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery Omni VPC allowlists can now restrict access to AWS S3 and Azure Blob Storage from specific BigQuery Omni VPCs; BigQuery Omni added VPC allowlists to restrict access to AWS S3 and Azure Blob Storage from specific Omni VPCs.

## Extended Definition

BigQuery Omni VPC allowlists are a security control in BigQuery Omni that let you restrict cross-cloud storage access to approved network paths. As of the January 13, 2025 release, BigQuery Omni can use VPC allowlists to restrict access to AWS S3 buckets and Azure Blob Storage from specific BigQuery Omni VPCs. This means external storage access is limited by the configured Omni VPC allowlist scope instead of being globally available.

## Evidence Summary

The BigQuery release notes page explicitly announces the feature and states that BigQuery Omni VPC allowlists can restrict access to AWS S3 buckets and Azure Blob Storage from specific BigQuery Omni VPCs as of January 13, 2025.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### BigQuery IAM roles and permissions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Vertex AI Custom Code Service Agent ( roles/ aiplatform.customCodeServiceAgent ) Vertex AI Model Monitoring Service Agent ( roles/ aiplatform.modelMonitoringServiceAgent ) Vertex AI RAG Data Service Agent ( roles/ aiplatform.ragServiceAgent ) Vertex AI Service Agent ( roles/ aiplatform.serviceAgent ) Vertex AI Tuning Service Agent ( roles/ aiplatform.tuningServiceAgent ) AutoML Service Agent ( roles/ automl.serviceAgent ) Recommendations AI Service Agent ( roles/ automlrecommendations.serviceAgent ) Connected Sheets Service Agent ( roles/ bigquery.connectedSheetsServiceAgent ) BigQuery Omni Service Agent ( roles/ bigqueryomni.serviceAgent ) Customer Engagement Suite Service Agent ( roles/ ces.serviceAgent ) Chronicle Service Agent ( roles/ chronicle.serviceAgent ) Cloud Asset Service Agent ( roles/ cloudasset.serviceAgent ) Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent ) Contact Center AI Insights Service Agent ( roles/ contactcenterinsights.serviceAgent ) Kubernetes Engine Service Agent ( roles/ container.serviceAgent ) Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent ) Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent ) Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent ) Dataprep Service Agent ( roles/ dataprep.serviceAgent ) Datastream Service Agent ( roles/ datastream.serviceAgent ) Dialogflow Service Agent ( roles/ dialogflow.serviceAgent ) Discovery Engine Service Agent ( roles/ discoveryengine.serviceAgent ) DLP API Service Agent ( roles/ dlp.serviceAgent ) Enterprise Knowledge Graph Service Agent ( roles/ enterpriseknowledgegraph.serviceAgent ) Firebase Crashlytics Service Agent ( roles/ firebasecrashlytics.serviceAgent ) AI Platform Service Agent ( roles/ ml.serviceAgent ) Retail Service Agent ( roles/ retail.serviceAgent ) Spectrum SAS Service Agent ( roles/ spectrumsas.serviceAgent ) Cloud Vision AI Service Agent ( roles/ visionai.serviceAgent ) Vertex AI Batch Prediction Service Agent ( roles/ aiplatform.batchPredictionServiceAgent ) bigquery.tables.updateIndex Owner ( roles/ owner ) Editor ( roles/ editor ) BigQuery Admin ( roles/ bigquery.admin ) BigQuery Data Editor ( roles/ bigquery.dataEditor ) BigQuery Data Owner ( roles/ bigquery.dataOwner ) BigQuery Studio Admin ( roles/ bigquery.studioAdmin ) Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor ) DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver ) DLP Project Data Profiles Driver ( roles/ dlp.projectdriver ) Data Scientist ( roles/ iam.dataScientist ) Databases Admin ( roles/ iam.databasesAdmin ) ML Engineer ( roles/ iam.mlEngineer ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .
- Vertex AI Custom Code Service Agent ( roles/ aiplatform.customCodeServiceAgent ) Vertex AI Model Monitoring Service Agent ( roles/ aiplatform.modelMonitoringServiceAgent ) Vertex AI RAG Data Service Agent ( roles/ aiplatform.ragServiceAgent ) Vertex AI Service Agent ( roles/ aiplatform.serviceAgent ) Vertex AI Tuning Service Agent ( roles/ aiplatform.tuningServiceAgent ) AutoML Service Agent ( roles/ automl.serviceAgent ) Recommendations AI Service Agent ( roles/ automlrecommendations.serviceAgent ) Connected Sheets Service Agent ( roles/ bigquery.connectedSheetsServiceAgent ) BigQuery Data Transfer Service Agent ( roles/ bigquerydatatransfer.serviceAgent ) BigQuery Omni Service Agent ( roles/ bigqueryomni.serviceAgent ) Customer Engagement Suite Service Agent ( roles/ ces.serviceAgent ) Chronicle Service Agent ( roles/ chronicle.serviceAgent ) Cloud Asset Service Agent ( roles/ cloudasset.serviceAgent ) Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent ) Contact Center AI Insights Service Agent ( roles/ contactcenterinsights.serviceAgent ) Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent ) Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent ) Data Labeling Service Agent ( roles/ datalabeling.serviceAgent ) Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent ) Dataprep Service Agent ( roles/ dataprep.serviceAgent ) Datastream Service Agent ( roles/ datastream.serviceAgent ) Data Studio Service Agent ( roles/ datastudio.serviceAgent ) Dialogflow Service Agent ( roles/ dialogflow.serviceAgent ) Discovery Engine Service Agent ( roles/ discoveryengine.serviceAgent ) DLP API Service Agent ( roles/ dlp.serviceAgent ) DSPM Service Agent ( roles/ dspm.serviceAgent ) Enterprise Knowledge Graph Service Agent ( roles/ enterpriseknowledgegraph.serviceAgent ) FleetEngine Service Agent ( roles/ fleetengine.serviceAgent ) Looker Service Agent ( roles/ looker.serviceAgent ) AI Platform Service Agent ( roles/ ml.serviceAgent ) Monitoring Service Agent ( roles/ monitoring.notificationServiceAgent ) Retail Service Agent ( roles/ retail.serviceAgent ) Spectrum SAS Service Agent ( roles/ spectrumsas.serviceAgent ) Cloud Vision AI Service Agent ( roles/ visionai.serviceAgent ) Vertex AI Batch Prediction Service Agent ( roles/ aiplatform.batchPredictionServiceAgent ) bigquery. jobs. createGlobalQuery Owner ( roles/ owner ) Editor ( roles/ editor ) BigQuery Admin ( roles/ bigquery.admin ) BigQuery Studio Admin ( roles/ bigquery.studioAdmin ) Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor ) Databases Admin ( roles/ iam.databasesAdmin ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .
- Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent ) Dataprep Service Agent ( roles/ dataprep.serviceAgent ) Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent ) bigquerymigration. workflows. create Owner ( roles/ owner ) Editor ( roles/ editor ) Bigquerymigration Admin ( roles/ bigquerymigration.admin ) MigrationWorkflow Editor ( roles/ bigquerymigration.editor ) bigquerymigration. workflows. delete Owner ( roles/ owner ) Editor ( roles/ editor ) Bigquerymigration Admin ( roles/ bigquerymigration.admin ) MigrationWorkflow Editor ( roles/ bigquerymigration.editor ) bigquerymigration. workflows. enableAiOutputTypes Owner ( roles/ owner ) Editor ( roles/ editor ) Bigquerymigration Admin ( roles/ bigquerymigration.admin ) MigrationWorkflow Editor ( roles/ bigquerymigration.editor ) bigquerymigration. workflows. enableLineageOutputTypes Owner ( roles/ owner ) Editor ( roles/ editor ) Bigquerymigration Admin ( roles/ bigquerymigration.admin ) MigrationWorkflow Editor ( roles/ bigquerymigration.editor ) bigquerymigration. workflows. enableOutputTypePermissions Owner ( roles/ owner ) Editor ( roles/ editor ) Bigquerymigration Admin ( roles/ bigquerymigration.admin ) MigrationWorkflow Editor ( roles/ bigquerymigration.editor ) bigquerymigration. workflows. get Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Bigquerymigration Admin ( roles/ bigquerymigration.admin ) MigrationWorkflow Editor ( roles/ bigquerymigration.editor ) MigrationWorkflow Viewer ( roles/ bigquerymigration.viewer ) Support User ( roles/ iam.supportUser ) bigquerymigration. workflows. list Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Bigquerymigration Admin ( roles/ bigquerymigration.admin ) MigrationWorkflow Editor ( roles/ bigquerymigration.editor ) MigrationWorkflow Viewer ( roles/ bigquerymigration.viewer ) Security Admin ( roles/ iam.securityAdmin ) Security Auditor ( roles/ iam.securityAuditor ) Security Reviewer ( roles/ iam.securityReviewer ) Support User ( roles/ iam.supportUser ) bigquerymigration. workflows. orchestrateTask Owner ( roles/ owner ) Bigquerymigration Admin ( roles/ bigquerymigration.admin ) Task Orchestrator ( roles/ bigquerymigration.orchestrator ) bigquerymigration. workflows. update Owner ( roles/ owner ) Editor ( roles/ editor ) Bigquerymigration Admin ( roles/ bigquerymigration.admin ) MigrationWorkflow Editor ( roles/ bigquerymigration.editor ) BigQuery Omni permissions There are no IAM permissions for this service.
- Role Permissions Bigquerymigration Admin ( roles/ bigquerymigration.admin ) Admin role for bigquerymigration bigquerymigration. bigquerymigration.subtasks.get bigquerymigration. subtasks. list bigquerymigration. translation. translate bigquerymigration. workflows. create bigquerymigration. workflows. delete bigquerymigration. workflows. enableAiOutputTypes bigquerymigration. workflows. enableLineageOutputTypes bigquerymigration. workflows. enableOutputTypePermissions bigquerymigration. workflows. get bigquerymigration. workflows. list bigquerymigration. workflows. orchestrateTask bigquerymigration. workflows. update resourcemanager.projects.get resourcemanager.projects.list MigrationWorkflow Editor ( roles/ bigquerymigration.editor ) Editor of EDW migration workflows. bigquerymigration.subtasks. bigquerymigration.subtasks.get bigquerymigration. subtasks. list bigquerymigration. workflows. create bigquerymigration. workflows. delete bigquerymigration. workflows. enableAiOutputTypes bigquerymigration. workflows. enableLineageOutputTypes bigquerymigration. workflows. enableOutputTypePermissions bigquerymigration. workflows. get bigquerymigration. workflows. list bigquerymigration. workflows. update Task Orchestrator ( roles/ bigquerymigration.orchestrator ) Orchestrator of EDW migration tasks. bigquerymigration. workflows. orchestrateTask storage.objects.list Migration Translation User ( roles/ bigquerymigration.translationUser ) User of EDW migration interactive SQL translation service. bigquerymigration. translation. translate MigrationWorkflow Viewer ( roles/ bigquerymigration.viewer ) Viewer of EDW migration MigrationWorkflow. bigquerymigration.subtasks. bigquerymigration.subtasks.get bigquerymigration. subtasks. list bigquerymigration. workflows. get bigquerymigration. workflows. list Task Worker ( roles/ bigquerymigration.worker ) Worker that executes EDW migration subtasks. storage.objects.create storage.objects.get storage.objects.list BigQuery Omni roles This table lists the predefined IAM roles and permissions for BigQuery Omni.

### Work with Salesforce Data Cloud data in BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart](https://docs.cloud.google.com/bigquery/docs/salesforce-quickstart)
- Source ID: `site-docs-root-2`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- In this example, we retrieve total sales for a customer named john . -- Get combined sales for a customer from both offline and online sales USING ( SELECT total price FROM listing nto john.nto orders dll WHERE customer name = 'john' UNION ALL SELECT total price FROM listing nto john.nto orders dll WHERE customer name = 'john' ) a SELECT SUM ( total price ); Cross Cloud Data Transfer through CTAS You can use Create Table As Select (CTAS) to move data from Data Cloud tables in the BigQuery Omni region to the US region. -- Move all the orders for March to the US region CREATE OR REPLACE TABLE us data . online orders march AS SELECT FROM listing nto john . nto orders dll WHERE EXTRACT ( MONTH FROM order time ) = 3 The destination table is a BigQuery managed table in the US region.
- This covers the offline sales, and consists of three tables: nto pos.customers nto pos.products nto pos.orders The following datasets store additional objects: aws data us data Run ad-hoc queries Using BigQuery Omni, you can run ad-hoc queries to analyze the Data Cloud data through the subscribed dataset.
- SELECT name c , age c FROM listing nto john.nto customers dll WHERE age > 40 LIMIT 1000 ; Run cross-cloud queries Cross-cloud queries let you join any of the tables in the BigQuery Omni region and tables in the BigQuery regions.
- Cross cloud materialized views Cross Cloud Materialized Views ( CCMV ) transfer data from a BigQuery Omni region to a non-BigQuery Omni BigQuery region incrementally.

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- January 13, 2025 Feature You can now use BigQuery Omni Virtual Private Cloud (VPC) allowlists to restrict access to AWS S3 buckets and Azure Blob Storage from specific BigQuery Omni VPCs.

