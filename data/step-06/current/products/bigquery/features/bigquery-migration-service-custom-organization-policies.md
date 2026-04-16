---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.259Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Migration Service custom organization policies"
feature_slug: "bigquery-migration-service-custom-organization-policies"
latest_feature_date: "2025-11-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-custom-constraints"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
keywords:
  - "bigquery"
  - "migration"
  - "custom"
  - "organization"
  - "policies"
  - "supports"
  - "allow"
  - "deny"
---

# BigQuery Migration Service custom organization policies

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Migration Service supports custom organization policies to allow or deny specific migration operations, including disabling AI suggestions.

## Extended Definition

BigQuery Migration Service supports custom organization policies to allow or deny specific migration operations, including disabling AI suggestions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-custom-constraints](https://docs.cloud.google.com/bigquery/docs/analytics-hub-custom-constraints)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)

## Supporting Pages

### "Manage Sharing data exchanges and listings using custom constraints \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-custom-constraints](https://docs.cloud.google.com/bigquery/docs/analytics-hub-custom-constraints)
- Source ID: `site-docs-reference-2`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Listing resource must have the restrictedExportPolicy object enabled. name : organizations/ ORGANIZATION ID /customConstraints/custom.listingWithRestrictedExportPolicy resource types : analyticshub.googleapis.com/Listing method types : - CREATE - UPDATE condition : has(resource.bigqueryDataset) && has(resource.bigqueryDataset.restrictedExportPolicy) && resource.bigqueryDataset.restrictedExportPolicy.enabled == true action type : DENY display name : The Listing must have restricted export policy. description : The Listing resource must have restrictedExportPolicy enabled to allow egress controls.
- The Listing resource must refer to a BigQuery dataset. name : organizations/ ORGANIZATION ID /customConstraints/custom.listingWithBQDataset resource types : analyticshub.googleapis.com/Listing method types : - CREATE - UPDATE condition : has(resource.bigqueryDataset) && resource.bigqueryDataset.dataset.contains('test') action type : ALLOW display name : Listing must have a BigQuery dataset. description : Listing must have a BigQuery dataset whose name contains the string "test".
- Apply the constraint: gcloud org-policies set-custom-constraint /constraint-enforce-dataExchangeDiscovery.yaml Verify that the constraint exists: gcloud org-policies list-custom-constraints --organization = ORGANIZATION ID The output is similar to the following: CUSTOM CONSTRAINT ACTION TYPE METHOD TYPES RESOURCE TYPES DISPLAY NAME custom.enforceDataExchangeDiscovery DENY CREATE,UPDATE analyticshub.googleapis.com/DataExchange Reject public DataExchanges. ...
- Resource Field analyticshub.googleapis.com/DataExchange resource.description resource.discoveryType resource.displayName resource.documentation resource.icon resource.logLinkedDatasetQueryUserEmail resource.primaryContact analyticshub.googleapis.com/Listing resource.allowOnlyMetadataSharing resource.bigqueryDataset.dataset resource.bigqueryDataset.replicaLocations resource.bigqueryDataset.restrictedExportPolicy.enabled resource.bigqueryDataset.restrictedExportPolicy.restrictDirectTableAccess resource.bigqueryDataset.restrictedExportPolicy.restrictQueryResult resource.bigqueryDataset.selectedResources.routine resource.bigqueryDataset.selectedResources.table resource.categories resource.dataProvider.name resource.dataProvider.primaryContact resource.description resource.discoveryType resource.displayName resource.documentation resource.icon resource.logLinkedDatasetQueryUserEmail resource.primaryContact resource.publisher.name resource.publisher.primaryContact resource.pubsubTopic.dataAffinityRegions resource.pubsubTopic.topic resource.requestAccess resource.restrictedExportConfig.enabled resource.restrictedExportConfig.restrictQueryResult What's next Learn more about custom constraints .

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Data Intelligence Platform Cloud migration with Collibra & BigQuery Enterprise-wide data privacy: Collibra + BigQuery Enterprise-scale data quality: Collibra + BigQuery Data quality without the complexity: BigQuery & Collibra Partner Advantage page Direct link Datahub Solution DataHub Cloud Category Data Governance, Security, & MDM Description Datahub is an open source metadata platform that helps organizations discover, understand, and govern their data assets.
- Partner references Automic BigQuery Agent Automic Automation Cloud Integrations: BigQuery Agent Integration Partner Advantage page Direct link CaliberMind Solution CaliberMind Category ETL & Data Integration Description CaliberMind is a centralized database and workflow engine for your enterprise business, allowing savvy marketers to unlock revenue and better customer experiences.
- Partner references Using SQDR with BigQuery Partner Advantage page Direct link StreamNative Solution StreamNative Cloud Category ETL & Data Integration Description StreamNative offers a data streaming platform that allows users to continuously stream data across their organization.
- Partner references Connect Google BigQuery to Privacera Privacera Enhances Data Access Governance Add Google BigQuery (GBQ) data source on Privacera Platform Partner Advantage page Direct link Reltio Solution Reltio Connected Data Platform Category Data Governance, Security, & MDM Description The Reltio Connected Data Platform is a cloud-based data management platform that lets organizations create a unified, trusted real-time source for their core data.

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- If you create a Spanner connection and want to use Data Boost , include the "useParallelism":true and "useDataBoost":true pairs. --connection credential= CONNECTION CREDENTIAL The credentials of the connection in JSON format. username and password must be specified. --project id= PROJECT ID Specifies the ID of the project that the connection belongs to. --location= LOCATION Specifies the location that the connection will be stored. --display name= DISPLAY NAME Specifies an optional friendly name for the connection. --description= DESCRIPTION Specifies an optional description of the connection. --iam role id= ROLE ID For BigQuery Omni on AWS, specifies an IAM role that allows access to the resource.
- This flag is required to run a GoogleSQL query from the command line unless you set a default value in .bigqueryrc or set the configuration setting default sql dialect option to 'default legacy sql' at the project or organization level.
- For example: --filter "labels.department:marketing labels.team:sales" For transfer configurations, use dataSourceIds as the key, and one of the following data sources as the value: amazon s3 - Amazon S3 data transfer azure blob storage - Azure Blob Storage data transfer dcm dt - Campaign Manager data transfer google cloud storage - Cloud Storage data transfer cross region copy - Dataset Copy dfp dt - Google Ad Manager data transfer displayvideo - Display & Video 360 data transfer google ads - Google Ads data transfer merchant center - Google Merchant Center data transfer mysql - MySQL data transfer play - Google Play data transfer scheduled query - Scheduled queries data transfer search ads - Search Ads 360 data transfer youtube channel - YouTube Channel data transfer youtube content owner - YouTube Content Owner data transfer redshift - Amazon Redshift migration on premises - Teradata migration For example: --filter labels.dataSourceIds:dcm dt For transfer runs, use states as the key and one or more of the following transfer states as the value: SUCCEEDED FAILED PENDING RUNNING CANCELLED For example: --filter="states:FAILED" For jobs, use states as the key and one or more of the following job states as the value: RUNNING PENDING DONE For example: bq ls --jobs --filter="states:RUNNING" bq ls --jobs --filter="states:RUNNING,PENDING" --jobs={true false} or -j={true false} To list jobs, set to true .
- Use one of the following values: amazon s3 - Amazon S3 data transfer azure blob storage - Azure Blob Storage data transfer dcm dt - Campaign Manager data transfer google cloud storage - Cloud Storage data transfer cross region copy - Dataset Copy dfp dt - Google Ad Manager data transfer displayvideo - Display & Video 360 data transfer google ads - Google Ads data transfer merchant center - Google Merchant Center data transfer mysql - MySQL data transfer play - Google Play data transfer scheduled query - Scheduled queries data transfer search ads - Search Ads 360 data transfer youtube channel - YouTube Channel data transfer youtube content owner - YouTube Content Owner data transfer redshift - Amazon Redshift migration on premises - Teradata migration Note: The redshift and on premises values are for data migrations; before you use the bq mk --transfer config command with these values, consult the linked documentation from the preceding list. --display name= DISPLAY NAME Specifies the display name for the transfer configuration. --no auto scheduling={true false} Disables automatic scheduling of data transfer runs for this configuration.

