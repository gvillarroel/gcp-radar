---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.245Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Dataplex Universal Catalog publishing for data insights"
feature_slug: "dataplex-universal-catalog-publishing-for-data-insights"
latest_feature_date: "2025-11-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/automatic-discovery"
  - "https://docs.cloud.google.com/bigquery/docs/access-control"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods"
keywords:
  - "dataplex"
  - "universal"
  - "catalog"
  - "publishing"
  - "insights"
  - "bigquery"
  - "can"
  - "publish"
---

# Dataplex Universal Catalog publishing for data insights

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery can publish data insights, including query recommendations and generated table and column descriptions, to Dataplex Universal Catalog.

## Extended Definition

BigQuery can publish data insights, including query recommendations and generated table and column descriptions, to Dataplex Universal Catalog.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/automatic-discovery](https://docs.cloud.google.com/bigquery/docs/automatic-discovery)
- [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods)

## Supporting Pages

### "Discover and catalog Cloud Storage data \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/automatic-discovery](https://docs.cloud.google.com/bigquery/docs/automatic-discovery)
- Source ID: `site-docs-reference-5`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Dataplex Discovery Service Agent ( roles/dataplex.discoveryServiceAgent ) on the storage bucket Dataplex Discovery Publishing Service Agent ( roles/dataplex.discoveryPublishingServiceAgent ) on the user project Create BigLake tables: Dataplex Discovery BigLake Publishing Service Agent ( roles/dataplex.discoveryBigLakePublishingServiceAgent ) on the BigQuery connection For more information about granting roles, see Manage access to projects, folders, and organizations .
- In Location type , select either Region or Multi-region (whichever is available) where the BigQuery publishing dataset is created.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create and run a discovery scan: bigquery.datasets.create on the data source project storage.buckets.get on the data source bucket storage.objects.get on the data source bucket storage.objects.list on the data source bucket bigquery.datasets.get on the data source project Provide a connection: bigquery.connections.delegate on the BigQuery connection bigquery.connections.use on the BigQuery connection Your administrator might also be able to give the Dataplex service account these permissions with custom roles or other predefined roles .
- Required roles for the BigQuery connection service account To ensure that the BigQuery Connection Service account has the necessary permissions to create a discovery scan, ask your administrator to grant the Dataplex Discovery Service Agent ( roles/dataplex.discoveryServiceAgent ) IAM role to the BigQuery Connection Service account on the Cloud Storage bucket.

### BigQuery IAM roles and permissions \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)
- Source ID: `site-docs-reference-2`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Vertex AI Batch Prediction Service Agent ( roles/ aiplatform.batchPredictionServiceAgent ) Vertex AI Custom Code Service Agent ( roles/ aiplatform.customCodeServiceAgent ) Vertex AI Model Monitoring Service Agent ( roles/ aiplatform.modelMonitoringServiceAgent ) Vertex AI RAG Data Service Agent ( roles/ aiplatform.ragServiceAgent ) Vertex AI Service Agent ( roles/ aiplatform.serviceAgent ) Vertex AI Tuning Service Agent ( roles/ aiplatform.tuningServiceAgent ) Audit Manager Auditing Service Agent ( roles/ auditmanager.serviceAgent ) AutoML Service Agent ( roles/ automl.serviceAgent ) Recommendations AI Service Agent ( roles/ automlrecommendations.serviceAgent ) Connected Sheets Service Agent ( roles/ bigquery.connectedSheetsServiceAgent ) Customer Engagement Suite Service Agent ( roles/ ces.serviceAgent ) Cloud Asset Service Agent ( roles/ cloudasset.serviceAgent ) Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent ) Cloud Security Compliance Service Agent ( roles/ cloudsecuritycompliance.serviceAgent ) Contact Center AI Insights Service Agent ( roles/ contactcenterinsights.serviceAgent ) Kubernetes Engine Service Agent ( roles/ container.serviceAgent ) Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent ) Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent ) Data Labeling Service Agent ( roles/ datalabeling.serviceAgent ) Dataplex Discovery Publishing Service Agent ( roles/ dataplex.discoveryPublishingServiceAgent ) Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent ) Dataprep Service Agent ( roles/ dataprep.serviceAgent ) Datastream Service Agent ( roles/ datastream.serviceAgent ) Discovery Engine Service Agent ( roles/ discoveryengine.serviceAgent ) DLP API Service Agent ( roles/ dlp.serviceAgent ) Enterprise Knowledge Graph Service Agent ( roles/ enterpriseknowledgegraph.serviceAgent ) Firebase Service Management Service Agent ( roles/ firebase.managementServiceAgent ) Firebase Crashlytics Service Agent ( roles/ firebasecrashlytics.serviceAgent ) FleetEngine Service Agent ( roles/ fleetengine.serviceAgent ) Cloud Logging Service Agent ( roles/ logging.serviceAgent ) Looker Service Agent ( roles/ looker.serviceAgent ) AI Platform Service Agent ( roles/ ml.serviceAgent ) Observability Service Agent ( roles/ observability.serviceAgent ) Retail Service Agent ( roles/ retail.serviceAgent ) Security Center Control Service Agent ( roles/ securitycenter.controlServiceAgent ) Security Health Analytics Service Agent ( roles/ securitycenter.securityHealthAnalyticsServiceAgent ) Security Center Service Agent ( roles/ securitycenter.serviceAgent ) Cloud Vision AI Service Agent ( roles/ visionai.serviceAgent ) bigquery.datasets.getIamPolicy Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) BigQuery Admin ( roles/ bigquery.admin ) Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor ) Security Admin ( roles/ iam.securityAdmin ) Security Reviewer ( roles/ iam.securityReviewer ) BigQuery Data Editor ( roles/ bigquery.dataEditor ) BigQuery Data Owner ( roles/ bigquery.dataOwner ) BigQuery Data Viewer ( roles/ bigquery.dataViewer ) BigQuery Metadata Viewer ( roles/ bigquery.metadataViewer ) BigQuery Security Admin ( roles/ bigquery.securityAdmin ) BigQuery Studio Admin ( roles/ bigquery.studioAdmin ) BigQuery User ( roles/ bigquery.user ) DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver ) DLP Project Data Profiles Driver ( roles/ dlp.projectdriver ) Data Scientist ( roles/ iam.dataScientist ) Databases Admin ( roles/ iam.databasesAdmin ) ML Engineer ( roles/ iam.mlEngineer ) Security Auditor ( roles/ iam.securityAuditor ) Site Reliability Engineer ( roles/ iam.siteReliabilityEngineer ) Support User ( roles/ iam.supportUser ) SLZ BQDW Blueprint Project Level Remediator ( roles/ securedlandingzone.bqdwProjectRemediator ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .
- Vertex AI Batch Prediction Service Agent ( roles/ aiplatform.batchPredictionServiceAgent ) Vertex AI Custom Code Service Agent ( roles/ aiplatform.customCodeServiceAgent ) Vertex AI Model Monitoring Service Agent ( roles/ aiplatform.modelMonitoringServiceAgent ) Vertex AI RAG Data Service Agent ( roles/ aiplatform.ragServiceAgent ) Vertex AI Service Agent ( roles/ aiplatform.serviceAgent ) Vertex AI Tuning Service Agent ( roles/ aiplatform.tuningServiceAgent ) AutoML Service Agent ( roles/ automl.serviceAgent ) Recommendations AI Service Agent ( roles/ automlrecommendations.serviceAgent ) Customer Engagement Suite Service Agent ( roles/ ces.serviceAgent ) Chronicle Service Agent ( roles/ chronicle.serviceAgent ) Cloud Deployment Manager Service Agent ( roles/ clouddeploymentmanager.serviceAgent ) Contact Center AI Insights Service Agent ( roles/ contactcenterinsights.serviceAgent ) Kubernetes Engine Service Agent ( roles/ container.serviceAgent ) Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent ) Cloud Data Fusion API Service Agent ( roles/ datafusion.serviceAgent ) Data Labeling Service Agent ( roles/ datalabeling.serviceAgent ) Dataplex Discovery Publishing Service Agent ( roles/ dataplex.discoveryPublishingServiceAgent ) Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent ) Dataprep Service Agent ( roles/ dataprep.serviceAgent ) Datastream Service Agent ( roles/ datastream.serviceAgent ) Dialogflow Service Agent ( roles/ dialogflow.serviceAgent ) Discovery Engine Service Agent ( roles/ discoveryengine.serviceAgent ) DLP API Service Agent ( roles/ dlp.serviceAgent ) Enterprise Knowledge Graph Service Agent ( roles/ enterpriseknowledgegraph.serviceAgent ) Firebase Service Management Service Agent ( roles/ firebase.managementServiceAgent ) Firebase Crashlytics Service Agent ( roles/ firebasecrashlytics.serviceAgent ) FleetEngine Service Agent ( roles/ fleetengine.serviceAgent ) Cloud Logging Service Agent ( roles/ logging.serviceAgent ) AI Platform Service Agent ( roles/ ml.serviceAgent ) Observability Service Agent ( roles/ observability.serviceAgent ) Retail Service Agent ( roles/ retail.serviceAgent ) Spectrum SAS Service Agent ( roles/ spectrumsas.serviceAgent ) StorageInsights Service Agent ( roles/ storageinsights.serviceAgent ) Cloud Vision AI Service Agent ( roles/ visionai.serviceAgent ) bigquery. datasets. createTagBinding Owner ( roles/ owner ) BigQuery Admin ( roles/ bigquery.admin ) Tag User ( roles/ resourcemanager.tagUser ) BigQuery Data Owner ( roles/ bigquery.dataOwner ) BigQuery Security Admin ( roles/ bigquery.securityAdmin ) BigQuery Studio Admin ( roles/ bigquery.studioAdmin ) DLP Organization Data Profiles Driver ( roles/ dlp.orgdriver ) DLP Project Data Profiles Driver ( roles/ dlp.projectdriver ) Databases Admin ( roles/ iam.databasesAdmin ) ML Engineer ( roles/ iam.mlEngineer ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .
- Chronicle Service Agent ( roles/ chronicle.serviceAgent ) Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent ) Dataplex Discovery BigLake Publishing Service Agent ( roles/ dataplex.discoveryBigLakePublishingServiceAgent ) Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent ) bigquery.dataPolicies.attach Owner ( roles/ owner ) Editor ( roles/ editor ) BigQuery Admin ( roles/ bigquery.admin ) BigQuery Data Policy Admin ( roles/ bigquerydatapolicy.admin ) Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor ) BigQuery Data Owner ( roles/ bigquery.dataOwner ) BigQuery Security Admin ( roles/ bigquery.securityAdmin ) BigQuery Studio Admin ( roles/ bigquery.studioAdmin ) Databases Admin ( roles/ iam.databasesAdmin ) ML Engineer ( roles/ iam.mlEngineer ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .
- BigQuery Data Transfer Service Agent ( roles/ bigquerydatatransfer.serviceAgent ) Chronicle Service Agent ( roles/ chronicle.serviceAgent ) Cloud Dataflow Service Agent ( roles/ dataflow.serviceAgent ) Dataplex Discovery BigLake Publishing Service Agent ( roles/ dataplex.discoveryBigLakePublishingServiceAgent ) Cloud Dataplex Service Agent ( roles/ dataplex.serviceAgent ) Datastream Service Agent ( roles/ datastream.serviceAgent ) bigquery.connections.delete Owner ( roles/ owner ) Editor ( roles/ editor ) BigQuery Admin ( roles/ bigquery.admin ) Bigquerydatapolicy Editor ( roles/ bigquerydatapolicy.editor ) BigQuery Connection Admin ( roles/ bigquery.connectionAdmin ) BigQuery Studio Admin ( roles/ bigquery.studioAdmin ) Databases Admin ( roles/ iam.databasesAdmin ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .

### "Run queries using the BigQuery DataFrames bigframes.pandas APIs \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-dataframes-pandas-methods)
- Source ID: `site-docs-reference-required-15`
- Final score: 94
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for client libraries . import bigframes.pandas as bpd Load data from BigQuery query or table = "bigquery-public-data.ml datasets.penguins" bq df = bpd . read gbq ( query or table ) Inspect one of the columns (or series) of the DataFrame: bq df [ "body mass g" ] Compute the mean of this series: average body mass = bq df [ "body mass g" ] . mean () print ( f "average body mass: { average body mass } " ) Find the heaviest species using the groupby operation to calculate the mean body mass g: ( bq df [ "body mass g" ] . groupby ( by = bq df [ "species" ]) . mean () . sort values ( ascending = False ) . head ( 10 ) ) What's next To search and filter code samples for other Google Cloud products, see the Google Cloud sample browser .
- Explore further For detailed documentation that includes this code sample, see the following: Use BigQuery DataFrames Code sample Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- Home Documentation Data analytics BigQuery Samples Run queries using the BigQuery DataFrames bigframes.pandas APIs Stay organized with collections Save and categorize content based on your preferences.
- Use the BigQuery DataFrames bigframes.pandas APIs to perform data analysis via the BigQuery Query engine.

