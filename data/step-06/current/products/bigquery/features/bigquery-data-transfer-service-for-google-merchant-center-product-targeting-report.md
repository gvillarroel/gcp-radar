---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.558Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Data Transfer Service for Google Merchant Center Product Targeting report"
feature_slug: "bigquery-data-transfer-service-for-google-merchant-center-product-targeting-report"
latest_feature_date: "2024-04-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/elt-tutorial-marketing"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/access-control"
keywords:
  - "transfer config for Google Merchant Center"
  - "Product Targeting report"
  - "GMC transfer"
  - "Merchant Center report transfer"
  - "Merchant Center transfer"
  - "Google Merchant Center"
  - "Data Transfer Service"
---

# BigQuery Data Transfer Service for Google Merchant Center Product Targeting report

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The BigQuery Data Transfer Service added support for transferring the Google Merchant Center Product Targeting report.

## Extended Definition

BigQuery Data Transfer Service includes Google Merchant Center as a supported transfer source, allowing data transfer configurations to ingest Merchant Center data into BigQuery. The BigQuery CLI reference shows explicit support for setting up a Google Merchant Center transfer and identifies `merchant center` as a valid `dataSourceIds` value for `bq mk --transfer config`. In these excerpts, the dedicated BigQuery Data Transfer Service IAM service role (`roles/bigquerydatatransfer.serviceAgent`) is also documented, but the provided text does not explicitly mention a specific "Product Targeting report" transfer target.

## Evidence Summary

The cited pages establish Google Merchant Center as a BigQuery Data Transfer data source with CLI setup identifiers and indicate a dedicated BigQuery Data Transfer Service IAM role, while not explicitly confirming Product Targeting report-specific coverage.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/elt-tutorial-marketing](https://docs.cloud.google.com/bigquery/docs/elt-tutorial-marketing)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)

## Supporting Pages

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

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- For information about using the bq mk command with the BigQuery Data Transfer Service, see the following: Set up an Amazon S3 transfer Set up a Campaign Manager transfer Set up a Cloud Storage transfer Set up a Google Ad Manager transfer Set up a Google Ads transfer Set up a Google Merchant Center transfer (beta) Set up a Google Play transfer Set up a Search Ads 360 transfer (beta) Set up a YouTube Channel transfer Set up a YouTube Content Owner transfer Migrate data from Amazon Redshift Migrate data from Teradata bq mk --transfer run Creates a data transfer run at the specified time or time range using the specified data transfer configuration.
- For example: --filter "labels.department:marketing labels.team:sales" For transfer configurations, use dataSourceIds as the key, and one of the following data sources as the value: amazon s3 - Amazon S3 data transfer azure blob storage - Azure Blob Storage data transfer dcm dt - Campaign Manager data transfer google cloud storage - Cloud Storage data transfer cross region copy - Dataset Copy dfp dt - Google Ad Manager data transfer displayvideo - Display & Video 360 data transfer google ads - Google Ads data transfer merchant center - Google Merchant Center data transfer mysql - MySQL data transfer play - Google Play data transfer scheduled query - Scheduled queries data transfer search ads - Search Ads 360 data transfer youtube channel - YouTube Channel data transfer youtube content owner - YouTube Content Owner data transfer redshift - Amazon Redshift migration on premises - Teradata migration For example: --filter labels.dataSourceIds:dcm dt For transfer runs, use states as the key and one or more of the following transfer states as the value: SUCCEEDED FAILED PENDING RUNNING CANCELLED For example: --filter="states:FAILED" For jobs, use states as the key and one or more of the following job states as the value: RUNNING PENDING DONE For example: bq ls --jobs --filter="states:RUNNING" bq ls --jobs --filter="states:RUNNING,PENDING" --jobs={true false} or -j={true false} To list jobs, set to true .
- Use one of the following values: amazon s3 - Amazon S3 data transfer azure blob storage - Azure Blob Storage data transfer dcm dt - Campaign Manager data transfer google cloud storage - Cloud Storage data transfer cross region copy - Dataset Copy dfp dt - Google Ad Manager data transfer displayvideo - Display & Video 360 data transfer google ads - Google Ads data transfer merchant center - Google Merchant Center data transfer mysql - MySQL data transfer play - Google Play data transfer scheduled query - Scheduled queries data transfer search ads - Search Ads 360 data transfer youtube channel - YouTube Channel data transfer youtube content owner - YouTube Content Owner data transfer redshift - Amazon Redshift migration on premises - Teradata migration Note: The redshift and on premises values are for data migrations; before you use the bq mk --transfer config command with these values, consult the linked documentation from the preceding list. --display name= DISPLAY NAME Specifies the display name for the transfer configuration. --no auto scheduling={true false} Disables automatic scheduling of data transfer runs for this configuration.
- For more information, see Introduction to BigQuery Data Transfer Service . --plan= PLAN When used with the --capacity commitment flag, converts a capacity commitment to the specified longer-duration commitment plan.

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

