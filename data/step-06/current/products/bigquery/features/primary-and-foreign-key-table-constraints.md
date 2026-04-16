---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.586Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Primary and foreign key table constraints"
feature_slug: "primary-and-foreign-key-table-constraints"
latest_feature_date: "2023-07-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-custom-constraints"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-constraint-column-usage"
keywords:
  - "primary"
  - "foreign"
  - "key"
  - "table"
  - "constraints"
  - "let"
  - "you"
  - "define"
---

# Primary and foreign key table constraints

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Primary and foreign key table constraints let you define and manage relational constraints, including through the BigQuery API and console.

## Extended Definition

Primary and foreign key table constraints let you define and manage relational constraints, including through the BigQuery API and console.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-custom-constraints](https://docs.cloud.google.com/bigquery/docs/analytics-hub-custom-constraints)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-constraint-column-usage](https://docs.cloud.google.com/bigquery/docs/information-schema-constraint-column-usage)

## Supporting Pages

### "Manage Sharing data exchanges and listings using custom constraints \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-custom-constraints](https://docs.cloud.google.com/bigquery/docs/analytics-hub-custom-constraints)
- Source ID: `site-docs-reference-2`
- Final score: 144
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource Field analyticshub.googleapis.com/DataExchange resource.description resource.discoveryType resource.displayName resource.documentation resource.icon resource.logLinkedDatasetQueryUserEmail resource.primaryContact analyticshub.googleapis.com/Listing resource.allowOnlyMetadataSharing resource.bigqueryDataset.dataset resource.bigqueryDataset.replicaLocations resource.bigqueryDataset.restrictedExportPolicy.enabled resource.bigqueryDataset.restrictedExportPolicy.restrictDirectTableAccess resource.bigqueryDataset.restrictedExportPolicy.restrictQueryResult resource.bigqueryDataset.selectedResources.routine resource.bigqueryDataset.selectedResources.table resource.categories resource.dataProvider.name resource.dataProvider.primaryContact resource.description resource.discoveryType resource.displayName resource.documentation resource.icon resource.logLinkedDatasetQueryUserEmail resource.primaryContact resource.publisher.name resource.publisher.primaryContact resource.pubsubTopic.dataAffinityRegions resource.pubsubTopic.topic resource.requestAccess resource.restrictedExportConfig.enabled resource.restrictedExportConfig.restrictQueryResult What's next Learn more about custom constraints .
- Error Message: Operation denied by org policy on resource 'projects/PROJECT ID/locations/us': ["customConstraints/custom.enforceDataExchangeDiscovery": "All DataExchange resources must be private."] Example custom organization policies for common use cases This table provides syntax examples for some common custom constraints.
- As the organization policy administrator , you can define an organization policy, which is a set of restrictions called constraints that apply to Google Cloud resources and descendants of those resources in the Google Cloud resource hierarchy .
- BigQuery sharing supported resources The following table lists the BigQuery sharing resources that you can reference in custom constraints.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- You cannot use this statement to rename the following: Subfields, such as nested columns in a STRUCT Partitioning columns Clustering columns Fields that are part of primary key constraints or foreign key constraints Columns in a table that has row access policies After one or more columns in a table are renamed, you cannot do the following: Query the table with legacy SQL.
- You cannot use this statement to drop the following: Partitioned columns Clustered columns Fields that are part of primary key constraints or foreign key constraints Nested columns inside existing RECORD fields Columns in a table that has row access policies After one or more columns in a table are dropped you cannot do the following: Query the table with legacy SQL.
- Add a primary key to the pk table table: ALTER TABLE pk table ADD PRIMARY KEY ( x , y ) NOT ENFORCED ; Create a table named fk table for multiple foreign key constraints.
- BigQuery only supports unenforced primary keys. foreign key : An expression that defines a foreign key table constraint .

### CONSTRAINT_COLUMN_USAGE view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-constraint-column-usage](https://docs.cloud.google.com/bigquery/docs/information-schema-constraint-column-usage)
- Source ID: `site-docs-reference-3`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CONSTRAINT COLUMN USAGE ; With existing constraints, the query results are similar to the following: +-----+---------------------+--------------+------------+-------------+---------------------+-------------------+-------------------------+ row table catalog table schema table name column name constraint catalog constraint schema constraint name +-----+---------------------+--------------+------------+-------------+---------------------+-------------------+-------------------------+ 1 myConstraintCatalog myDataset orders o okey myConstraintCatalog myDataset orders.pk$ 2 myConstraintCatalog myDataset orders o okey myConstraintCatalog myDataset lineitem.lineitem order +-----+---------------------+--------------+------------+-------------+---------------------+-------------------+-------------------------+ Note: lineitem.lineitem order is the foreign key defined in the lineitem table.
- For FOREIGN KEY constraints, these are the columns of the referenced tables.
- If the table or dataset has no constraints, the query results look like this: +-----------------------------+ There is no data to display +-----------------------------+ Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- It can be the name of the primary key if the column is used by the primary key or the name of foreign key if the column is used by a foreign key.

