---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.483Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Studio in Looker Owner's Credentials for BigQuery and Google Sheets"
feature_slug: "studio-in-looker-owner-s-credentials-for-bigquery-and-google-sheets"
latest_feature_date: "2025-04-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery"
  - "https://docs.cloud.google.com/bigquery/docs/access-control"
  - "https://docs.cloud.google.com/looker/docs/bi-connectors"
keywords:
  - "studio"
  - "looker"
  - "owner"
  - "credentials"
  - "bigquery"
  - "sheets"
  - "can"
  - "connect"
---

# Studio in Looker Owner's Credentials for BigQuery and Google Sheets

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Studio in Looker can connect to Google BigQuery and Google Sheets using Owner's Credentials.

## Extended Definition

Studio in Looker can connect to Google BigQuery and Google Sheets using Owner's Credentials.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery](https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery)
- [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)
- [https://docs.cloud.google.com/looker/docs/bi-connectors](https://docs.cloud.google.com/looker/docs/bi-connectors)

## Supporting Pages

### Connect to Google BigQuery \_|\_ Data Studio \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery](https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery)
- Source ID: `site-docs-reference-required-5`
- Final score: 159
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BigQuery dialog If you have owner credentials on the BigQuery data source, Data Studio will display a BigQuery icon in the upper right corner of any chart that uses BigQuery.
- Home Documentation Data analytics Data Studio Guides Send feedback Connect to Google BigQuery Stay organized with collections Save and categorize content based on your preferences. description: Learn how to connect Data Studio to BigQuery to access and visualize data from BigQuery tables, views, or custom SQL queries.
- To enable the BigQuery Storage Read API, grant the following permissions to your BigQuery user who is connected to Data Studio: bigquery.readsessions.create bigquery.readsessions.getData Quotas and general limits The maximum number of rows that can be returned using the BigQuery Connector is 2 million rows.
- Support for VPC Service Controls Data Studio can connect to BigQuery projects that are protected by VPC Service Controls (VPC-SC) perimeters through viewer IP-based access levels .

### BigQuery IAM roles and permissions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)
- Source ID: `site-docs-reference-required-6`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Vertex AI Batch Prediction Service Agent ( roles/ aiplatform.batchPredictionServiceAgent ) Vertex AI Custom Code Service Agent ( roles/ aiplatform.customCodeServiceAgent ) Vertex AI Model Monitoring Service Agent ( roles/ aiplatform.modelMonitoringServiceAgent ) Vertex AI RAG Data Service Agent ( roles/ aiplatform.ragServiceAgent ) Vertex AI Service Agent ( roles/ aiplatform.serviceAgent ) Vertex AI Tuning Service Agent ( roles/ aiplatform.tuningServiceAgent ) Audit Manager Auditing Service Agent ( roles/ auditmanager.serviceAgent ) AutoML Service Agent ( roles/ automl.serviceAgent ) Recommendations AI Service Agent ( roles/ automlrecommendations.serviceAgent ) Connected Sheets Service Agent ( roles/ bigquery.connectedSheetsServiceAgent ) Customer Engagement Suite Service Agent ( roles/ ces.serviceAgent ) Cloud Asset Service Agent ( roles/ cloudasset.serviceAgent ) Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent ) Cloud Security Compliance Service Agent ( roles/ cloudsecuritycompliance.serviceAgent ) Contact Center AI Insights Service Agent ( roles/ contactcenterinsights.serviceAgent ) Kubernetes Engine Service Agent ( roles/ container.serviceAgent ) Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent ) Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent ) Data Labeling Service Agent ( roles/ datalabeling.serviceAgent ) Dataplex Discovery Publishing Service Agent ( roles/ dataplex.discoveryPublishingServiceAgent ) Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent ) Dataprep Service Agent ( roles/ dataprep.serviceAgent ) Datastream Service Agent ( roles/ datastream.serviceAgent ) Discovery Engine Service Agent ( roles/ discoveryengine.serviceAgent ) DLP API Service Agent ( roles/ dlp.serviceAgent ) Enterprise Knowledge Graph Service Agent ( roles/ enterpriseknowledgegraph.serviceAgent ) Firebase Service Management Service Agent ( roles/ firebase.managementServiceAgent ) Firebase Crashlytics Service Agent ( roles/ firebasecrashlytics.serviceAgent ) FleetEngine Service Agent ( roles/ fleetengine.serviceAgent ) Cloud Logging Service Agent ( roles/ logging.serviceAgent ) Looker Service Agent ( roles/ looker.serviceAgent ) AI Platform Service Agent ( roles/ ml.serviceAgent ) Observability Service Agent ( roles/ observability.serviceAgent ) Retail Service Agent ( roles/ retail.serviceAgent ) Security Center Control Service Agent ( roles/ securitycenter.controlServiceAgent ) Security Health Analytics Service Agent ( roles/ securitycenter.securityHealthAnalyticsServiceAgent ) Security Center Service Agent ( roles/ securitycenter.serviceAgent ) Cloud Vision AI Service Agent ( roles/ visionai.serviceAgent ) bigquery.datasets.getIamPolicy Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) BigQuery Admin ( roles/ bigquery.admin ) Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor ) Security Admin ( roles/ iam.securityAdmin ) Security Reviewer ( roles/ iam.securityReviewer ) BigQuery Data Editor ( roles/ bigquery.dataEditor ) BigQuery Data Owner ( roles/ bigquery.dataOwner ) BigQuery Data Viewer ( roles/ bigquery.dataViewer ) BigQuery Metadata Viewer ( roles/ bigquery.metadataViewer ) BigQuery Security Admin ( roles/ bigquery.securityAdmin ) BigQuery Studio Admin ( roles/ bigquery.studioAdmin ) BigQuery User ( roles/ bigquery.user ) DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver ) DLP Project Data Profiles Driver ( roles/ dlp.projectdriver ) Data Scientist ( roles/ iam.dataScientist ) Databases Admin ( roles/ iam.databasesAdmin ) ML Engineer ( roles/ iam.mlEngineer ) Security Auditor ( roles/ iam.securityAuditor ) Site Reliability Engineer ( roles/ iam.siteReliabilityEngineer ) Support User ( roles/ iam.supportUser ) SLZ BQDW Blueprint Project Level Remediator ( roles/ securedlandingzone.bqdwProjectRemediator ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .
- Vertex AI Batch Prediction Service Agent ( roles/ aiplatform.batchPredictionServiceAgent ) Vertex AI Custom Code Service Agent ( roles/ aiplatform.customCodeServiceAgent ) Vertex AI Model Monitoring Service Agent ( roles/ aiplatform.modelMonitoringServiceAgent ) Vertex AI RAG Data Service Agent ( roles/ aiplatform.ragServiceAgent ) Vertex AI Service Agent ( roles/ aiplatform.serviceAgent ) Vertex AI Tuning Service Agent ( roles/ aiplatform.tuningServiceAgent ) AutoML Service Agent ( roles/ automl.serviceAgent ) Recommendations AI Service Agent ( roles/ automlrecommendations.serviceAgent ) Connected Sheets Service Agent ( roles/ bigquery.connectedSheetsServiceAgent ) Customer Engagement Suite Service Agent ( roles/ ces.serviceAgent ) Chronicle Service Agent ( roles/ chronicle.serviceAgent ) Cloud Asset Service Agent ( roles/ cloudasset.serviceAgent ) Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent ) Contact Center AI Insights Service Agent ( roles/ contactcenterinsights.serviceAgent ) Kubernetes Engine Service Agent ( roles/ container.serviceAgent ) Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent ) Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent ) Data Labeling Service Agent ( roles/ datalabeling.serviceAgent ) Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent ) Dataprep Service Agent ( roles/ dataprep.serviceAgent ) Datastream Service Agent ( roles/ datastream.serviceAgent ) Dialogflow Service Agent ( roles/ dialogflow.serviceAgent ) Discovery Engine Service Agent ( roles/ discoveryengine.serviceAgent ) DLP API Service Agent ( roles/ dlp.serviceAgent ) Enterprise Knowledge Graph Service Agent ( roles/ enterpriseknowledgegraph.serviceAgent ) Firebase Crashlytics Service Agent ( roles/ firebasecrashlytics.serviceAgent ) Looker Service Agent ( roles/ looker.serviceAgent ) AI Platform Service Agent ( roles/ ml.serviceAgent ) Retail Service Agent ( roles/ retail.serviceAgent ) Spectrum SAS Service Agent ( roles/ spectrumsas.serviceAgent ) Cloud Vision AI Service Agent ( roles/ visionai.serviceAgent ) bigquery.tables.createIndex Owner ( roles/ owner ) Editor ( roles/ editor ) BigQuery Admin ( roles/ bigquery.admin ) Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor ) BigQuery Data Editor ( roles/ bigquery.dataEditor ) BigQuery Data Owner ( roles/ bigquery.dataOwner ) BigQuery Studio Admin ( roles/ bigquery.studioAdmin ) DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver ) DLP Project Data Profiles Driver ( roles/ dlp.projectdriver ) Data Scientist ( roles/ iam.dataScientist ) Databases Admin ( roles/ iam.databasesAdmin ) ML Engineer ( roles/ iam.mlEngineer ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .
- Vertex AI Batch Prediction Service Agent ( roles/ aiplatform.batchPredictionServiceAgent ) Vertex AI Custom Code Service Agent ( roles/ aiplatform.customCodeServiceAgent ) Vertex AI Model Monitoring Service Agent ( roles/ aiplatform.modelMonitoringServiceAgent ) Vertex AI RAG Data Service Agent ( roles/ aiplatform.ragServiceAgent ) Vertex AI Service Agent ( roles/ aiplatform.serviceAgent ) Vertex AI Tuning Service Agent ( roles/ aiplatform.tuningServiceAgent ) AutoML Service Agent ( roles/ automl.serviceAgent ) Recommendations AI Service Agent ( roles/ automlrecommendations.serviceAgent ) Connected Sheets Service Agent ( roles/ bigquery.connectedSheetsServiceAgent ) BigQuery Data Transfer Service Agent ( roles/ bigquerydatatransfer.serviceAgent ) BigQuery Omni Service Agent ( roles/ bigqueryomni.serviceAgent ) Customer Engagement Suite Service Agent ( roles/ ces.serviceAgent ) Chronicle Service Agent ( roles/ chronicle.serviceAgent ) Cloud Asset Service Agent ( roles/ cloudasset.serviceAgent ) Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent ) Contact Center AI Insights Service Agent ( roles/ contactcenterinsights.serviceAgent ) Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent ) Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent ) Data Labeling Service Agent ( roles/ datalabeling.serviceAgent ) Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent ) Dataprep Service Agent ( roles/ dataprep.serviceAgent ) Datastream Service Agent ( roles/ datastream.serviceAgent ) Data Studio Service Agent ( roles/ datastudio.serviceAgent ) Dialogflow Service Agent ( roles/ dialogflow.serviceAgent ) Discovery Engine Service Agent ( roles/ discoveryengine.serviceAgent ) DLP API Service Agent ( roles/ dlp.serviceAgent ) DSPM Service Agent ( roles/ dspm.serviceAgent ) Enterprise Knowledge Graph Service Agent ( roles/ enterpriseknowledgegraph.serviceAgent ) FleetEngine Service Agent ( roles/ fleetengine.serviceAgent ) Looker Service Agent ( roles/ looker.serviceAgent ) AI Platform Service Agent ( roles/ ml.serviceAgent ) Monitoring Service Agent ( roles/ monitoring.notificationServiceAgent ) Retail Service Agent ( roles/ retail.serviceAgent ) Spectrum SAS Service Agent ( roles/ spectrumsas.serviceAgent ) Cloud Vision AI Service Agent ( roles/ visionai.serviceAgent ) bigquery. jobs. createGlobalQuery Owner ( roles/ owner ) Editor ( roles/ editor ) BigQuery Admin ( roles/ bigquery.admin ) Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor ) BigQuery Studio Admin ( roles/ bigquery.studioAdmin ) Databases Admin ( roles/ iam.databasesAdmin ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .
- Vertex AI Batch Prediction Service Agent ( roles/ aiplatform.batchPredictionServiceAgent ) Vertex AI Custom Code Service Agent ( roles/ aiplatform.customCodeServiceAgent ) Vertex AI Model Monitoring Service Agent ( roles/ aiplatform.modelMonitoringServiceAgent ) Vertex AI RAG Data Service Agent ( roles/ aiplatform.ragServiceAgent ) Vertex AI Service Agent ( roles/ aiplatform.serviceAgent ) Vertex AI Tuning Service Agent ( roles/ aiplatform.tuningServiceAgent ) AutoML Service Agent ( roles/ automl.serviceAgent ) Recommendations AI Service Agent ( roles/ automlrecommendations.serviceAgent ) Connected Sheets Service Agent ( roles/ bigquery.connectedSheetsServiceAgent ) BigQuery Omni Service Agent ( roles/ bigqueryomni.serviceAgent ) Customer Engagement Suite Service Agent ( roles/ ces.serviceAgent ) Chronicle Service Agent ( roles/ chronicle.serviceAgent ) Cloud Asset Service Agent ( roles/ cloudasset.serviceAgent ) Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent ) Contact Center AI Insights Service Agent ( roles/ contactcenterinsights.serviceAgent ) Kubernetes Engine Service Agent ( roles/ container.serviceAgent ) Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent ) Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent ) Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent ) Dataprep Service Agent ( roles/ dataprep.serviceAgent ) Datastream Service Agent ( roles/ datastream.serviceAgent ) Dialogflow Service Agent ( roles/ dialogflow.serviceAgent ) Discovery Engine Service Agent ( roles/ discoveryengine.serviceAgent ) DLP API Service Agent ( roles/ dlp.serviceAgent ) Enterprise Knowledge Graph Service Agent ( roles/ enterpriseknowledgegraph.serviceAgent ) Firebase Crashlytics Service Agent ( roles/ firebasecrashlytics.serviceAgent ) AI Platform Service Agent ( roles/ ml.serviceAgent ) Retail Service Agent ( roles/ retail.serviceAgent ) Spectrum SAS Service Agent ( roles/ spectrumsas.serviceAgent ) Cloud Vision AI Service Agent ( roles/ visionai.serviceAgent ) bigquery.tables.updateIndex Owner ( roles/ owner ) Editor ( roles/ editor ) BigQuery Admin ( roles/ bigquery.admin ) Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor ) BigQuery Data Editor ( roles/ bigquery.dataEditor ) BigQuery Data Owner ( roles/ bigquery.dataOwner ) BigQuery Studio Admin ( roles/ bigquery.studioAdmin ) DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver ) DLP Project Data Profiles Driver ( roles/ dlp.projectdriver ) Data Scientist ( roles/ iam.dataScientist ) Databases Admin ( roles/ iam.databasesAdmin ) ML Engineer ( roles/ iam.mlEngineer ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .

### Admin settings - BI Connectors \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/bi-connectors](https://docs.cloud.google.com/looker/docs/bi-connectors)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Looker Studio Enable or disable this option to allow or disallow connecting to Looker Studio from Looker Explores , monitoring System Activity information from Looker Studio data sources , and allowing connections from Looker Studio .
- This toggle enables the Connected Sheets option in the settings Explore actions gear menu that opens Google Sheets and initiates a connection from Google Sheets to the Looker Explore.
- Enable Connected Sheets quick link When the Google Sheets toggle is enabled, Looker displays an additional toggle, Enable Connected Sheets quick link .
- For Looker (Google Cloud core) instances, the Connected Sheets quick link is supported only for public secure or hybrid network connections.

