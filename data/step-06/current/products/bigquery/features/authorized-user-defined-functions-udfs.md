---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.812Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Authorized user-defined functions (UDFs)"
feature_slug: "authorized-user-defined-functions-udfs"
latest_feature_date: "2020-10-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/access-control"
  - "https://docs.cloud.google.com/bigquery/docs/user-defined-functions"
keywords:
  - "share query results without table access"
  - "authorized user-defined functions"
  - "authorized UDF"
  - "authorized routine"
  - "CREATE FUNCTION authorized"
  - "function access permissions"
  - "Authorized UDFs"
  - "authorized function"
---

# Authorized user-defined functions (UDFs)

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery now provides Authorized user-defined functions (UDFs), which let users share query results without exposing underlying table access.

## Extended Definition

BigQuery now provides Authorized user-defined functions (UDFs), which let users share query results without exposing underlying table access.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)
- [https://docs.cloud.google.com/bigquery/docs/user-defined-functions](https://docs.cloud.google.com/bigquery/docs/user-defined-functions)

## Supporting Pages

### BigQuery IAM roles and permissions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- This role can only be granted on Resource Manager resources (projects, folders, and organizations). bigquery.bireservations.get bigquery. capacityCommitments. get bigquery. capacityCommitments. list bigquery.jobs.get bigquery.jobs.list bigquery.jobs.listAll bigquery. jobs. listExecutionMetadata bigquery. reservationAssignments. list bigquery. reservationAssignments. search bigquery.reservationGroups.get bigquery. reservationGroups. list bigquery.reservations.get bigquery.reservations.list bigquery. reservations. listFailoverDatasets resourcemanager.projects.get resourcemanager.projects.list BigQuery Authorized Routine Admin Beta ( roles/ bigquery.routineAdmin ) Role for Authorized Routine to administer supported resources bigquery.connections.use bigquery.datasets.get bigquery.models.getData bigquery.models.getMetadata bigquery.routines.get bigquery.routines.list bigquery.tables.create bigquery.tables.delete bigquery.tables.get bigquery.tables.getData bigquery.tables.list bigquery.tables.update bigquery.tables.updateData BigQuery Authorized Routine Data Editor Beta ( roles/ bigquery.routineDataEditor ) Role for Authorized Routine to edit contents of supported resources bigquery.datasets.get bigquery.models.getData bigquery.models.getMetadata bigquery.routines.get bigquery.routines.list bigquery.tables.create bigquery.tables.delete bigquery.tables.get bigquery.tables.getData bigquery.tables.list bigquery.tables.update bigquery.tables.updateData BigQuery Authorized Routine Data Viewer Beta ( roles/ bigquery.routineDataViewer ) Role for Authorized Routine to view data and contents of supported resources bigquery.datasets.get bigquery.models.getData bigquery.models.getMetadata bigquery.routines.get bigquery.routines.list bigquery.tables.get bigquery.tables.getData bigquery.tables.list BigQuery Authorized Routine Metadata Viewer Beta ( roles/ bigquery.routineMetadataViewer ) Role for Authorized Routine to view metadata of supported resources bigquery.datasets.get bigquery.models.getMetadata bigquery.routines.get bigquery.routines.list bigquery.tables.get bigquery.tables.list BigQuery Security Admin Beta ( roles/ bigquery.securityAdmin ) Administer all BigQuery security controls bigquery.dataPolicies.attach bigquery.dataPolicies.create bigquery.dataPolicies.delete bigquery.dataPolicies.get bigquery. dataPolicies. getIamPolicy bigquery.dataPolicies.list bigquery. dataPolicies. setIamPolicy bigquery.dataPolicies.update bigquery. datasets. createTagBinding bigquery. datasets. deleteTagBinding bigquery.datasets.get bigquery.datasets.getIamPolicy bigquery. datasets. listEffectiveTags bigquery. datasets. listSharedDatasetUsage bigquery. datasets. listTagBindings bigquery.datasets.setIamPolicy bigquery.datasets.update bigquery.datasets.updateTag bigquery. rowAccessPolicies. create bigquery. rowAccessPolicies. delete bigquery.rowAccessPolicies.get bigquery. rowAccessPolicies. getIamPolicy bigquery. rowAccessPolicies. list bigquery. rowAccessPolicies. setIamPolicy bigquery. rowAccessPolicies. update bigquery. tables. createTagBinding bigquery. tables. deleteTagBinding bigquery.tables.get bigquery.tables.getIamPolicy bigquery.tables.list bigquery. tables. listEffectiveTags bigquery. tables. listTagBindings bigquery. tables. setColumnDataPolicy bigquery.tables.setIamPolicy bigquery.tables.update bigquery.tables.updateTag dataplex.projects.search BigQuery Studio Admin ( roles/ bigquery.studioAdmin ) Combination role of BigQuery Admin, Dataform Admin, Notebook Runtime Admin and Dataproc Serverless Editor.
- Vertex AI Custom Code Service Agent ( roles/ aiplatform.customCodeServiceAgent ) Vertex AI Model Monitoring Service Agent ( roles/ aiplatform.modelMonitoringServiceAgent ) Vertex AI RAG Data Service Agent ( roles/ aiplatform.ragServiceAgent ) Vertex AI Service Agent ( roles/ aiplatform.serviceAgent ) Vertex AI Tuning Service Agent ( roles/ aiplatform.tuningServiceAgent ) AutoML Service Agent ( roles/ automl.serviceAgent ) Recommendations AI Service Agent ( roles/ automlrecommendations.serviceAgent ) Customer Engagement Suite Service Agent ( roles/ ces.serviceAgent ) Chronicle Service Agent ( roles/ chronicle.serviceAgent ) Cloud Asset Service Agent ( roles/ cloudasset.serviceAgent ) Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent ) Contact Center AI Insights Service Agent ( roles/ contactcenterinsights.serviceAgent ) Kubernetes Engine Service Agent ( roles/ container.serviceAgent ) Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent ) Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent ) Data Labeling Service Agent ( roles/ datalabeling.serviceAgent ) Datapipelines Service Agent ( roles/ datapipelines.serviceAgent ) Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent ) Dataprep Service Agent ( roles/ dataprep.serviceAgent ) Datastream Service Agent ( roles/ datastream.serviceAgent ) Dialogflow Service Agent ( roles/ dialogflow.serviceAgent ) Discovery Engine Service Agent ( roles/ discoveryengine.serviceAgent ) DLP API Service Agent ( roles/ dlp.serviceAgent ) Enterprise Knowledge Graph Service Agent ( roles/ enterpriseknowledgegraph.serviceAgent ) Firebase Crashlytics Service Agent ( roles/ firebasecrashlytics.serviceAgent ) Looker Service Agent ( roles/ looker.serviceAgent ) AI Platform Service Agent ( roles/ ml.serviceAgent ) Retail Service Agent ( roles/ retail.serviceAgent ) Cloud Vision AI Service Agent ( roles/ visionai.serviceAgent ) Vertex AI Batch Prediction Service Agent ( roles/ aiplatform.batchPredictionServiceAgent ) bigquery.tables.getData BigQuery Admin ( roles/ bigquery.admin ) BigQuery Data Editor ( roles/ bigquery.dataEditor ) BigQuery Data Owner ( roles/ bigquery.dataOwner ) BigQuery Data Viewer ( roles/ bigquery.dataViewer ) BigQuery Authorized Routine Admin ( roles/ bigquery.routineAdmin ) BigQuery Authorized Routine Data Editor ( roles/ bigquery.routineDataEditor ) BigQuery Authorized Routine Data Viewer ( roles/ bigquery.routineDataViewer ) BigQuery Studio Admin ( roles/ bigquery.studioAdmin ) Dataplex Storage Data Owner ( roles/ dataplex.storageDataOwner ) Dataplex Storage Data Reader ( roles/ dataplex.storageDataReader ) Datastream Bigquery Writer ( roles/ datastream.bigqueryWriter ) DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver ) DLP Project Data Profiles Driver ( roles/ dlp.projectdriver ) Data Scientist ( roles/ iam.dataScientist ) Databases Admin ( roles/ iam.databasesAdmin ) ML Engineer ( roles/ iam.mlEngineer ) Site Reliability Engineer ( roles/ iam.siteReliabilityEngineer ) Support User ( roles/ iam.supportUser ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .
- Vertex AI Custom Code Service Agent ( roles/ aiplatform.customCodeServiceAgent ) Vertex AI Model Monitoring Service Agent ( roles/ aiplatform.modelMonitoringServiceAgent ) Vertex AI RAG Data Service Agent ( roles/ aiplatform.ragServiceAgent ) Vertex AI Service Agent ( roles/ aiplatform.serviceAgent ) Vertex AI Tuning Service Agent ( roles/ aiplatform.tuningServiceAgent ) AutoML Service Agent ( roles/ automl.serviceAgent ) Recommendations AI Service Agent ( roles/ automlrecommendations.serviceAgent ) Connected Sheets Service Agent ( roles/ bigquery.connectedSheetsServiceAgent ) Customer Engagement Suite Service Agent ( roles/ ces.serviceAgent ) Chronicle Service Agent ( roles/ chronicle.serviceAgent ) Cloud Asset Service Agent ( roles/ cloudasset.serviceAgent ) Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent ) Contact Center AI Insights Service Agent ( roles/ contactcenterinsights.serviceAgent ) Kubernetes Engine Service Agent ( roles/ container.serviceAgent ) Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent ) Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent ) Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent ) Dataprep Service Agent ( roles/ dataprep.serviceAgent ) Datastream Service Agent ( roles/ datastream.serviceAgent ) Discovery Engine Service Agent ( roles/ discoveryengine.serviceAgent ) DLP API Service Agent ( roles/ dlp.serviceAgent ) Enterprise Knowledge Graph Service Agent ( roles/ enterpriseknowledgegraph.serviceAgent ) Firebase Crashlytics Service Agent ( roles/ firebasecrashlytics.serviceAgent ) Retail Service Agent ( roles/ retail.serviceAgent ) Cloud Vision AI Service Agent ( roles/ visionai.serviceAgent ) Vertex AI Batch Prediction Service Agent ( roles/ aiplatform.batchPredictionServiceAgent ) bigquery.tables.updateData BigQuery Admin ( roles/ bigquery.admin ) BigQuery Data Editor ( roles/ bigquery.dataEditor ) BigQuery Data Owner ( roles/ bigquery.dataOwner ) BigQuery Authorized Routine Admin ( roles/ bigquery.routineAdmin ) BigQuery Authorized Routine Data Editor ( roles/ bigquery.routineDataEditor ) BigQuery Studio Admin ( roles/ bigquery.studioAdmin ) Dataplex Storage Data Owner ( roles/ dataplex.storageDataOwner ) Dataplex Storage Data Writer ( roles/ dataplex.storageDataWriter ) Datastream Bigquery Writer ( roles/ datastream.bigqueryWriter ) DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver ) DLP Project Data Profiles Driver ( roles/ dlp.projectdriver ) Data Scientist ( roles/ iam.dataScientist ) Databases Admin ( roles/ iam.databasesAdmin ) ML Engineer ( roles/ iam.mlEngineer ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .
- Vertex AI Custom Code Service Agent ( roles/ aiplatform.customCodeServiceAgent ) Vertex AI Model Monitoring Service Agent ( roles/ aiplatform.modelMonitoringServiceAgent ) Vertex AI RAG Data Service Agent ( roles/ aiplatform.ragServiceAgent ) Vertex AI Service Agent ( roles/ aiplatform.serviceAgent ) AutoML Service Agent ( roles/ automl.serviceAgent ) Recommendations AI Service Agent ( roles/ automlrecommendations.serviceAgent ) Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent ) Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent ) Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent ) Dataprep Service Agent ( roles/ dataprep.serviceAgent ) Discovery Engine Service Agent ( roles/ discoveryengine.serviceAgent ) DLP API Service Agent ( roles/ dlp.serviceAgent ) Looker Service Agent ( roles/ looker.serviceAgent ) Retail Service Agent ( roles/ retail.serviceAgent ) Cloud Vision AI Service Agent ( roles/ visionai.serviceAgent ) Vertex AI Batch Prediction Service Agent ( roles/ aiplatform.batchPredictionServiceAgent ) bigquery.tables.get BigQuery Admin ( roles/ bigquery.admin ) BigQuery Data Editor ( roles/ bigquery.dataEditor ) BigQuery Data Owner ( roles/ bigquery.dataOwner ) BigQuery Data Viewer ( roles/ bigquery.dataViewer ) BigQuery Metadata Viewer ( roles/ bigquery.metadataViewer ) BigQuery Authorized Routine Admin ( roles/ bigquery.routineAdmin ) BigQuery Authorized Routine Data Editor ( roles/ bigquery.routineDataEditor ) BigQuery Authorized Routine Data Viewer ( roles/ bigquery.routineDataViewer ) BigQuery Authorized Routine Metadata Viewer ( roles/ bigquery.routineMetadataViewer ) BigQuery Security Admin ( roles/ bigquery.securityAdmin ) BigQuery Studio Admin ( roles/ bigquery.studioAdmin ) Data Catalog Admin ( roles/ datacatalog.admin ) Datacatalog Editor ( roles/ datacatalog.editor ) Data Catalog Viewer ( roles/ datacatalog.viewer ) Dataplex Storage Data Owner ( roles/ dataplex.storageDataOwner ) Dataplex Storage Data Reader ( roles/ dataplex.storageDataReader ) Datastream Bigquery Writer ( roles/ datastream.bigqueryWriter ) DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver ) DLP Project Data Profiles Driver ( roles/ dlp.projectdriver ) Data Scientist ( roles/ iam.dataScientist ) Databases Admin ( roles/ iam.databasesAdmin ) ML Engineer ( roles/ iam.mlEngineer ) Security Auditor ( roles/ iam.securityAuditor ) Site Reliability Engineer ( roles/ iam.siteReliabilityEngineer ) Support User ( roles/ iam.supportUser ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .

### User-defined functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/user-defined-functions](https://docs.cloud.google.com/bigquery/docs/user-defined-functions)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Authorized routines let you share query results with specific users or groups without giving them access to the underlying tables that generated the results.
- For example, an authorized routine can compute an aggregation over data or look up a table value and use that value in a computation.
- For more information, see Authorized routines .

