---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.251Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Custom organization constraints for BigQuery datasets"
feature_slug: "custom-organization-constraints-for-bigquery-datasets"
latest_feature_date: "2025-11-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-custom-constraints"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery"
keywords:
  - "custom"
  - "organization"
  - "constraints"
  - "bigquery"
  - "datasets"
  - "policy"
  - "can"
  - "enforce"
---

# Custom organization constraints for BigQuery datasets

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Organization Policy custom constraints can enforce granular controls on specific fields of BigQuery dataset resources.

## Extended Definition

Organization Policy custom constraints can enforce granular controls on specific fields of BigQuery dataset resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-custom-constraints](https://docs.cloud.google.com/bigquery/docs/analytics-hub-custom-constraints)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)

## Supporting Pages

### "Manage Sharing data exchanges and listings using custom constraints \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-custom-constraints](https://docs.cloud.google.com/bigquery/docs/analytics-hub-custom-constraints)
- Source ID: `site-docs-reference-2`
- Final score: 204
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Listing resource must have the restrictedExportPolicy object enabled. name : organizations/ ORGANIZATION ID /customConstraints/custom.listingWithRestrictedExportPolicy resource types : analyticshub.googleapis.com/Listing method types : - CREATE - UPDATE condition : has(resource.bigqueryDataset) && has(resource.bigqueryDataset.restrictedExportPolicy) && resource.bigqueryDataset.restrictedExportPolicy.enabled == true action type : DENY display name : The Listing must have restricted export policy. description : The Listing resource must have restrictedExportPolicy enabled to allow egress controls.
- Error Message: Operation denied by org policy on resource 'projects/PROJECT ID/locations/us': ["customConstraints/custom.enforceDataExchangeDiscovery": "All DataExchange resources must be private."] Example custom organization policies for common use cases This table provides syntax examples for some common custom constraints.
- Resource Field analyticshub.googleapis.com/DataExchange resource.description resource.discoveryType resource.displayName resource.documentation resource.icon resource.logLinkedDatasetQueryUserEmail resource.primaryContact analyticshub.googleapis.com/Listing resource.allowOnlyMetadataSharing resource.bigqueryDataset.dataset resource.bigqueryDataset.replicaLocations resource.bigqueryDataset.restrictedExportPolicy.enabled resource.bigqueryDataset.restrictedExportPolicy.restrictDirectTableAccess resource.bigqueryDataset.restrictedExportPolicy.restrictQueryResult resource.bigqueryDataset.selectedResources.routine resource.bigqueryDataset.selectedResources.table resource.categories resource.dataProvider.name resource.dataProvider.primaryContact resource.description resource.discoveryType resource.displayName resource.documentation resource.icon resource.logLinkedDatasetQueryUserEmail resource.primaryContact resource.publisher.name resource.publisher.primaryContact resource.pubsubTopic.dataAffinityRegions resource.pubsubTopic.topic resource.requestAccess resource.restrictedExportConfig.enabled resource.restrictedExportConfig.restrictQueryResult What's next Learn more about custom constraints .
- Before you begin, you must have the following: Your organization ID A project ID Create the constraint To create a custom constraint, follow these steps: Save the following file as constraint-enforce-dataExchangeDiscovery.yaml : name : organizations/ ORGANIZATION ID /customConstraints/custom.enforceDataExchangeDiscovery resourceTypes : - analyticshub.googleapis.com/DataExchange methodTypes : - CREATE condition : "resource.discoveryType == 'DISCOVERY TYPE PUBLIC'" actionType : DENY displayName : Reject public DataExchanges. description : All DataExchange resources must be private.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- NAME and VALUE must be one of the following combinations: NAME VALUE Details expiration timestamp TIMESTAMP Example: expiration timestamp=TIMESTAMP "2025-01-01 00:00:00 UTC" This property is equivalent to the expirationTime table resource property. friendly name STRING Example: friendly name="my view" This property is equivalent to the friendlyName table resource property. description STRING Example: description="a view that expires in 2025" This property is equivalent to the description table resource property. labels ARRAY<STRUCT<STRING, STRING>> Example: labels=[("org unit", "development")] This property is equivalent to the labels table resource property. privacy policy JSON-formatted STRING The policies to enforce when anyone queries the view.
- NAME and VALUE must be one of the following combinations: NAME VALUE Details expiration timestamp TIMESTAMP Example: expiration timestamp=TIMESTAMP "2025-01-01 00:00:00 UTC" This property is equivalent to the expirationTime table resource property. friendly name STRING Example: friendly name="my view" This property is equivalent to the friendlyName table resource property. description STRING Example: description="a view that expires in 2025" This property is equivalent to the description table resource property. labels ARRAY<STRUCT<STRING, STRING>> Example: labels=[("org unit", "development")] This property is equivalent to the labels table resource property. privacy policy JSON-formatted STRING The policies to enforce when anyone queries the view.
- Note: Constraints cannot be specified on ARRAY or STRUCT elements. column := column name column schema column schema := { simple type STRUCT<field list> ARRAY<array element schema> } [ PRIMARY KEY NOT ENFORCED REFERENCES table name ( column name ) NOT ENFORCED ] [ DEFAULT default expression GENERATED ALWAYS AS ( generation expression ) STORED OPTIONS ( generation option list ) ] [ NOT NULL ] [ OPTIONS ( column option list ) ] simple type := { data type STRING COLLATE collate specification } field list := field name column schema [ , ... ] array element schema := { simple type STRUCT<field list> } [ NOT NULL ] column name is the name of the column.
- You can use DDL commands to create, alter, and delete resources, such as the following: Datasets Tables Table schemas Table clones Table snapshots Views Connections User-defined functions (UDFs) Indexes Capacity commitments and reservations Row-level access policies Default configuration settings Required permissions To create a job that runs a DDL statement, you must have the bigquery.jobs.create permission for the project where you are running the job.

### "Best practices for multi-tenant workloads on BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)
- Source ID: `site-docs-reference-5`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- A dataset-per-tenant design helps to mitigate the following concerns that an organization experiences when it scales to thousands of tenants: Administrative complexity : the total number of new projects and cloud resources on a per customer basis End-to-end latency : how up to date the datastore is for both the tenants and cross-customer analytics solutions Performance expectations : ensuring that tenant performance stays within acceptable limits Configure datasets for each tenant Within a project that is dedicated to storing customer data, each customer's data is separated by BigQuery datasets.
- Configure VPC Service Controls perimeters In this configuration, we recommend VPC Service Controls perimeters to prevent accidental exposure of BigQuery datasets outside of your Google Cloud organization.
- Configure VPC Service Controls perimeters In this configuration, we recommend VPC Service Controls perimeters to prevent accidental exposure of BigQuery datasets outside of your Google Cloud organization.
- Configure VPC Service Controls perimeters In this configuration, we recommend VPC Service Controls perimeters to prevent accidental exposure of tenant datasets outside of your Google Cloud organization and to prevent unauthorized data joining within the organization.

