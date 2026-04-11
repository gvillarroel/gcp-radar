---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.429Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Scheduled Snowflake-to-BigQuery data transfers"
feature_slug: "scheduled-snowflake-to-bigquery-data-transfers"
latest_feature_date: "2025-05-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/dts-introduction"
  - "https://docs.cloud.google.com/bigquery/docs/elt-tutorial-marketing"
  - "https://docs.cloud.google.com/bigquery/docs/access-control"
keywords:
  - "Snowflake transfer config"
  - "Snowflake DTS"
  - "scheduled Snowflake transfer"
  - "Snowflake to BigQuery transfer"
  - "Snowflake-to-BQ transfer"
  - "BigQuery Data Transfer Service"
  - "scheduled transfer"
  - "transfer schedule"
---

# Scheduled Snowflake-to-BigQuery data transfers

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The BigQuery Data Transfer Service now supports scheduling automated data transfers from Snowflake to BigQuery.

## Extended Definition

BigQuery Data Transfer Service supports scheduled, recurring data transfer jobs that extract and load data on a defined schedule. The BigQuery DTS supported-data-sources list includes Snowflake (in Preview), so Snowflake-to-BigQuery transfers can be set up as part of these recurring DTS transfers. The service also defines a dedicated BigQuery Data Transfer Service agent role for operational access control.

## Evidence Summary

The DTS intro page identifies Snowflake as a supported (Preview) source, the ELT tutorial shows DTS can run scheduled recurring transfers for supported sources, and the IAM page documents a dedicated BigQuery Data Transfer Service service agent role.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/dts-introduction](https://docs.cloud.google.com/bigquery/docs/dts-introduction)
- [https://docs.cloud.google.com/bigquery/docs/elt-tutorial-marketing](https://docs.cloud.google.com/bigquery/docs/elt-tutorial-marketing)
- [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)

## Supporting Pages

### What is the BigQuery Data Transfer Service? \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/dts-introduction](https://docs.cloud.google.com/bigquery/docs/dts-introduction)
- Source ID: `site-docs-root`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- Supported data sources The BigQuery Data Transfer Service supports loading data from the following data sources: SaaS platforms: Salesforce Salesforce Marketing Cloud ServiceNow Marketing platforms: Facebook Ads HubSpot ( Preview ) Klaviyo ( Preview ) Mailchimp ( Preview ) Payment platforms: PayPal ( Preview ) Stripe ( Preview ) Shopify ( Preview ) Databases and data warehouses: Amazon Redshift Apache Hive ( Preview ) Microsoft SQL Server ( Preview ) MySQL Oracle PostgreSQL Snowflake ( Preview ) Teradata Cloud storage: Cloud Storage Amazon Simple Storage Service (Amazon S3) Azure Blob Storage Google Services: Campaign Manager Comparison Shopping Service (CSS)Center ( Preview ) Display & Video 360 Google Ads Google Ad Manager Google Analytics 4 Google Merchant Center ( Preview ) Search Ads 360 Google Play YouTube Channel YouTube Content Owner Data delivery SLO considerations The Data Delivery SLO applies to automatically scheduled data transfers using the BigQuery Data Transfer Service from sources within Google Cloud.
- Using reservation slots with data transfers Jobs triggered by the BigQuery Data Transfer Service only use reservation slots if the project, folder, or organization is assigned to a reservation with any of the following job types : Query jobs using QUERY Load jobs using PIPELINE Jobs that copy datasets don't use reservation slots.
- You can access the BigQuery Data Transfer Service using the: Google Cloud console bq command-line tool BigQuery Data Transfer Service API Tip: You can also use the Pipelines & Connections page to create a transfer using a streamlined workflow .
- For data transfers involving third-party or non-Google Cloud sources, service outages with these sources can impact performance with the BigQuery Data Transfer Service.

### "Build ELT pipeline for marketing analytics data \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/elt-tutorial-marketing](https://docs.cloud.google.com/bigquery/docs/elt-tutorial-marketing)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Schedule recurring data transfers To keep BigQuery up to date with the latest marketing data from your data source, set up recurring data transfers using the BigQuery Data Transfer Service to extract and load data on a schedule.
- In this tutorial, you use Google Ads as your data source, but you can use any of the data sources supported by the BigQuery Data Transfer Service .
- In this tutorial, you create an ELT workflow by setting up a marketing analytics data transfer by using the BigQuery Data Transfer Service.
- For a full list of data sources supported by the BigQuery Data Transfer Service, see Supported data sources .

### BigQuery IAM roles and permissions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Role Permissions BigQuery Data Policy Admin ( roles/ bigquerydatapolicy.admin ) Role for managing Data Policies in BigQuery This role can only be granted on Resource Manager resources (projects, folders, and organizations). bigquery.dataPolicies.attach bigquery.dataPolicies.create bigquery.dataPolicies.delete bigquery.dataPolicies.get bigquery. dataPolicies. getIamPolicy bigquery.dataPolicies.list bigquery. dataPolicies. setIamPolicy bigquery.dataPolicies.update Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor ) Editor role for bigquerydatapolicy bigquery.bireservations. bigquery.bireservations.get bigquery.bireservations.update bigquery. capacityCommitments. get bigquery. capacityCommitments. list bigquery. capacityCommitments. update bigquery.config. bigquery.config.get bigquery.config.update bigquery.connections.create bigquery.connections.delete bigquery.connections.get bigquery. connections. getIamPolicy bigquery.connections.list bigquery.connections.update bigquery.connections.updateTag bigquery.connections.use bigquery.dataPolicies.attach bigquery.dataPolicies.create bigquery.dataPolicies.delete bigquery.dataPolicies.get bigquery. dataPolicies. getIamPolicy bigquery.dataPolicies.list bigquery.dataPolicies.update bigquery.datasets.create bigquery.datasets.get bigquery.datasets.getIamPolicy bigquery. datasets. listEffectiveTags bigquery. datasets. listTagBindings bigquery.datasets.updateTag bigquery.jobs.create bigquery. jobs. createGlobalQuery bigquery.jobs.delete bigquery.jobs.get bigquery.jobs.list bigquery. jobs. listExecutionMetadata bigquery.models. bigquery.models.create bigquery.models.delete bigquery.models.export bigquery.models.getData bigquery.models.getMetadata bigquery.models.list bigquery.models.updateData bigquery.models.updateMetadata bigquery.models.updateTag bigquery.objectRefs. bigquery.objectRefs.read bigquery.objectRefs.write bigquery.readsessions. bigquery.readsessions.create bigquery.readsessions.getData bigquery.readsessions.update bigquery. reservationAssignments. bigquery. reservationAssignments. create bigquery. reservationAssignments. delete bigquery. reservationAssignments. list bigquery. reservationAssignments. search bigquery.reservationGroups. bigquery. reservationGroups. create bigquery. reservationGroups. delete bigquery.reservationGroups.get bigquery. reservationGroups. list bigquery.reservations.create bigquery.reservations.delete bigquery.reservations.get bigquery. reservations. getIamPolicy bigquery.reservations.list bigquery. reservations. listFailoverDatasets bigquery.reservations.update bigquery.reservations.use bigquery.routines. bigquery.routines.create bigquery.routines.delete bigquery.routines.get bigquery.routines.list bigquery.routines.update bigquery.routines.updateTag bigquery. rowAccessPolicies. create bigquery. rowAccessPolicies. delete bigquery.rowAccessPolicies.get bigquery. rowAccessPolicies. getIamPolicy bigquery. rowAccessPolicies. list bigquery. rowAccessPolicies. update bigquery.savedqueries. bigquery.savedqueries.create bigquery.savedqueries.delete bigquery.savedqueries.get bigquery.savedqueries.list bigquery.savedqueries.update bigquery.tables.createIndex bigquery.tables.createSnapshot bigquery.tables.deleteIndex bigquery.tables.getIamPolicy bigquery. tables. listEffectiveTags bigquery. tables. listTagBindings bigquery.tables.replicateData bigquery. tables. restoreSnapshot bigquery.tables.updateIndex bigquery.transfers. bigquery.transfers.get bigquery.transfers.update resourcemanager.projects.get resourcemanager.projects.list Masked Reader ( roles/ bigquerydatapolicy.maskedReader ) Masked read access to sub-resources tagged by the policy tag associated with a data policy, for example, BigQuery columns This role can only be granted on Resource Manager resources (projects, folders, and organizations). bigquery. dataPolicies. maskedGet Raw Data Reader Beta ( roles/ bigquerydatapolicy.rawDataReader ) Raw read access to sub-resources associated with a data policy, for example, BigQuery columns This role can only be granted on Resource Manager resources (projects, folders, and organizations). bigquery. dataPolicies. getRawData BigQuery Data Policy Viewer ( roles/ bigquerydatapolicy.viewer ) Role for viewing Data Policies in BigQuery This role can only be granted on Resource Manager resources (projects, folders, and organizations). bigquery.dataPolicies.get bigquery.dataPolicies.list BigQuery Data Transfer Service roles This table lists the predefined IAM roles and permissions for BigQuery Data Transfer Service.
- Vertex AI Custom Code Service Agent ( roles/ aiplatform.customCodeServiceAgent ) Vertex AI Model Monitoring Service Agent ( roles/ aiplatform.modelMonitoringServiceAgent ) Vertex AI RAG Data Service Agent ( roles/ aiplatform.ragServiceAgent ) Vertex AI Service Agent ( roles/ aiplatform.serviceAgent ) Vertex AI Tuning Service Agent ( roles/ aiplatform.tuningServiceAgent ) AutoML Service Agent ( roles/ automl.serviceAgent ) Recommendations AI Service Agent ( roles/ automlrecommendations.serviceAgent ) Connected Sheets Service Agent ( roles/ bigquery.connectedSheetsServiceAgent ) BigQuery Data Transfer Service Agent ( roles/ bigquerydatatransfer.serviceAgent ) BigQuery Omni Service Agent ( roles/ bigqueryomni.serviceAgent ) Customer Engagement Suite Service Agent ( roles/ ces.serviceAgent ) Chronicle Service Agent ( roles/ chronicle.serviceAgent ) Cloud Asset Service Agent ( roles/ cloudasset.serviceAgent ) Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent ) Contact Center AI Insights Service Agent ( roles/ contactcenterinsights.serviceAgent ) Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent ) Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent ) Data Labeling Service Agent ( roles/ datalabeling.serviceAgent ) Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent ) Dataprep Service Agent ( roles/ dataprep.serviceAgent ) Datastream Service Agent ( roles/ datastream.serviceAgent ) Data Studio Service Agent ( roles/ datastudio.serviceAgent ) Dialogflow Service Agent ( roles/ dialogflow.serviceAgent ) Discovery Engine Service Agent ( roles/ discoveryengine.serviceAgent ) DLP API Service Agent ( roles/ dlp.serviceAgent ) DSPM Service Agent ( roles/ dspm.serviceAgent ) Enterprise Knowledge Graph Service Agent ( roles/ enterpriseknowledgegraph.serviceAgent ) FleetEngine Service Agent ( roles/ fleetengine.serviceAgent ) Looker Service Agent ( roles/ looker.serviceAgent ) AI Platform Service Agent ( roles/ ml.serviceAgent ) Monitoring Service Agent ( roles/ monitoring.notificationServiceAgent ) Retail Service Agent ( roles/ retail.serviceAgent ) Spectrum SAS Service Agent ( roles/ spectrumsas.serviceAgent ) Cloud Vision AI Service Agent ( roles/ visionai.serviceAgent ) Vertex AI Batch Prediction Service Agent ( roles/ aiplatform.batchPredictionServiceAgent ) bigquery. jobs. createGlobalQuery Owner ( roles/ owner ) Editor ( roles/ editor ) BigQuery Admin ( roles/ bigquery.admin ) BigQuery Studio Admin ( roles/ bigquery.studioAdmin ) Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor ) Databases Admin ( roles/ iam.databasesAdmin ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .
- Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent ) Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent ) Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent ) Dataprep Service Agent ( roles/ dataprep.serviceAgent ) DLP API Service Agent ( roles/ dlp.serviceAgent ) Enterprise Knowledge Graph Service Agent ( roles/ enterpriseknowledgegraph.serviceAgent ) FleetEngine Service Agent ( roles/ fleetengine.serviceAgent ) Looker Service Agent ( roles/ looker.serviceAgent ) BigQuery Data Transfer Service Agent ( roles/ bigquerydatatransfer.serviceAgent ) bigquery.config.update Owner ( roles/ owner ) Editor ( roles/ editor ) Assured Workloads Administrator ( roles/ assuredworkloads.admin ) Assured Workloads Editor ( roles/ assuredworkloads.editor ) BigQuery Admin ( roles/ bigquery.admin ) BigQuery Studio Admin ( roles/ bigquery.studioAdmin ) Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor ) Databases Admin ( roles/ iam.databasesAdmin ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .
- Chronicle Service Agent ( roles/ chronicle.serviceAgent ) Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent ) Dataplex Discovery BigLake Publishing Service Agent ( roles/ dataplex.discoveryBigLakePublishingServiceAgent ) Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent ) Datastream Service Agent ( roles/ datastream.serviceAgent ) BigQuery Data Transfer Service Agent ( roles/ bigquerydatatransfer.serviceAgent ) bigquery.connections.delete Owner ( roles/ owner ) Editor ( roles/ editor ) BigQuery Admin ( roles/ bigquery.admin ) BigQuery Connection Admin ( roles/ bigquery.connectionAdmin ) BigQuery Studio Admin ( roles/ bigquery.studioAdmin ) Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor ) Databases Admin ( roles/ iam.databasesAdmin ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .

