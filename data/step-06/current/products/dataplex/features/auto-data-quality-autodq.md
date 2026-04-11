---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:42.609Z"
product_name: "Dataplex"
product_slug: "dataplex"
feature_name: "Auto data quality (AutoDQ)"
feature_slug: "auto-data-quality-autodq"
latest_feature_date: "2023-05-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality"
  - "https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1"
keywords:
  - "auto"
  - "quality"
  - "autodq"
  - "evaluates"
  - "without"
  - "requiring"
  - "dataplex"
  - "lake"
---

# Auto data quality (AutoDQ)

Product: Dataplex
Coverage: LOW

## Step 02 Summary

Auto data quality evaluates BigQuery data quality without requiring a Dataplex lake and supports tables, views, external tables, BigLake tables, and sampling; Auto data quality provides automated, turnkey data quality evaluation to help users build trust in their data.

## Extended Definition

Auto data quality evaluates BigQuery data quality without requiring a Dataplex lake and supports tables, views, external tables, BigLake tables, and sampling; Auto data quality provides automated, turnkey data quality evaluation to help users build trust in their data.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality)
- [https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview](https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1)

## Supporting Pages

### Use auto data quality \_|\_ Knowledge Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- Export table schema To export the data quality scan results to an existing BigQuery table, make sure that it is compatible with the following table schema: Column name Column data type Sub field name (if applicable) Sub field data type Mode Example data quality scan struct/record resource name string nullable //dataplex.googleapis.com/projects/test-project/locations/europe-west2/datascans/test-datascan project id string nullable dataplex-back-end-dev-project location string nullable us-central1 data scan id string nullable test-datascan display name string nullable datascan-display-name data source struct/record resource name string nullable Entity case: //dataplex.googleapis.com/projects/dataplex-back-end-dev-project/locations/europe-west2/lakes/a0-datascan-test-lake/zones/a0-datascan-test-zone/entities/table1 Table case: //bigquery.googleapis.com/projects/test-project/datasets/test-dataset/tables/test-table dataplex entity project id string nullable dataplex-back-end-dev-project dataplex entity project number integer nullable 123456789 dataplex lake id string nullable (Valid only if source is entity) test-lake dataplex zone id string nullable (Valid only if source is entity) test-zone dataplex entity id string nullable (Valid only if source is entity) test-entity table project id string nullable test-project table project number integer nullable 987654321 dataset id string nullable (Valid only if source is table) test-dataset table id string nullable (Valid only if source is table) test-table data quality job id string nullable caeba234-cfde-4fca-9e5b-fe02a9812e38 data quality job configuration json trigger string nullable ondemand / schedule incremental boolean nullable true / false sampling percent float nullable (0-100) 20.0 (indicates 20%) row filter string nullable col1 >= 0 AND col2 incremental column string nullable column name job labels json nullable {"key1":value1} job start time timestamp nullable 2023-01-01 00:00:00 UTC job end time timestamp nullable 2023-01-01 00:00:00 UTC job quality result struct/record passed boolean nullable true / false score float nullable 90.8 incremental start string nullable 2023-01-01T00:00:00 incremental end string nullable 2024-01-01T00:00:00 job dimension result json nullable {"ACCURACY":{"passed":true,"score":100},"CONSISTENCY":{"passed":false,"score":60}} job rows scanned integer nullable 7500 rule name string nullable test-rule rule description string nullable Test rule description rule type string nullable Range Check rule evaluation type string nullable Per row rule column string nullable Rule only attached to a certain column rule dimension string nullable UNIQUENESS rule threshold percent float nullable (0.0-100.0) Rule-threshold-pct in API 100 rule parameters json nullable {min: 24, max:5345} rule passed boolean nullable true rule rows evaluated integer nullable 7400 rule rows passed integer nullable 3 rule rows null integer nullable 4 rule failed records query string nullable "SELECT FROM test-project.test-dataset.test-table WHERE (NOT((cTime >= '15:31:38.776361' and cTime created on timestamp nullable 2023-01-01 00:00:00 UTC last updated timestamp nullable 2023-01-01 00:00:00 UTC rule assertion row count integer nullable 10 debug queries struct/record description string nullable Test debug query description sql statement string nullable SELECT MIN(col1) AS min col1, AVG(col1) FROM ${data()} debug query results struct/record repeated [{"name": "min col1", "type": "INTEGER", "value": "5"}, {"type": "FLOAT", "value": "7"}] ↳ name string nullable The name of query result column, like min col1 ↳ type string nullable The type of query result column, like INTEGER ↳ value string nullable The value of query result column, like 5 Note: Column rule assertion row count is only applicable for SQL Assertion rule .
- Set alerts on data quality failures for a BigQuery table that isn't organized in a Knowledge Catalog lake: resource.type="dataplex.googleapis.com/DataScan" AND jsonPayload.dataSource="//bigquery.googleapis.com/projects/test-project/datasets/testdataset/table/chicago taxi trips" AND labels."dataplex.googleapis.com/data scan state"="SUCCEEDED" AND resource.labels.resource container="projects/112233445566" AND NOT jsonPayload.dataQuality.passed=true Set alerts on data quality failures for a BigQuery table that's organized in a Knowledge Catalog lake: resource.type="dataplex.googleapis.com/DataScan" AND jsonPayload.dataSource="projects/test-project/datasets/testdataset/table/chicago taxi trips" AND labels."dataplex.googleapis.com/data scan state"="SUCCEEDED" AND resource.labels.resource container="projects/112233445566" AND NOT jsonPayload.dataQuality.passed=true Sample queries to set per rule alerts A sample query to set alerts on all failing data quality rules with the specified custom rule name for a data quality scan: resource.type="dataplex.googleapis.com/DataScan" AND jsonPayload.ruleName="custom-name" AND jsonPayload.result="FAILED" A sample query to set alerts on all failing data quality rules of a specific evaluation type for a data quality scan: resource.type="dataplex.googleapis.com/DataScan" AND jsonPayload.evalutionType="PER ROW" AND jsonPayload.result="FAILED" A sample query to set alerts on all failing data quality rules for a column in the table used for a data quality scan: resource.type="dataplex.googleapis.com/DataScan" AND jsonPayload.column="CInteger" AND jsonPayload.result="FAILED" Troubleshoot a data quality failure For each job with row-level rules that fail, Knowledge Catalog provides a query to get the failed records.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to read data from various sources and export results: Read BigQuery table data: bigquery.tables.get on BigQuery tables bigquery.tables.getData on BigQuery tables Export scan results to a BigQuery table: bigquery.datasets.get on results dataset and table bigquery.tables.create on results dataset and table bigquery.tables.get on results dataset and table bigquery.tables.getData on results dataset and table bigquery.tables.update on results dataset and table bigquery.tables.updateData on results dataset and table Scan BigQuery data organized in a Knowledge Catalog lake: dataplex.lakes.list on Dataplex resources dataplex.lakes.get on Dataplex resources dataplex.zones.list on Dataplex resources dataplex.zones.get on Dataplex resources dataplex.entities.list on Dataplex resources dataplex.entities.get on Dataplex resources dataplex.operations.get on Dataplex resources Scan a BigQuery external table from Cloud Storage: storage.buckets.get on the Cloud Storage bucket storage.objects.get on the Cloud Storage bucket Your administrator might also be able to give the Knowledge Catalog service account of the project containing the data quality scan these permissions with custom roles or other predefined roles .
- If the source data is organized in a Knowledge Catalog lake, include the --data-source-entity flag: gcloud dataplex datascans create data-quality DATASCAN \ --location = LOCATION \ --data-quality-spec-file = DATA QUALITY SPEC FILE \ --data-source-entity = DATA SOURCE ENTITY If the source data isn't organized in a Knowledge Catalog lake, include the --data-source-resource flag: gcloud dataplex datascans create data-quality DATASCAN \ --location = LOCATION \ --data-quality-spec-file = DATA QUALITY SPEC FILE \ --data-source-resource = DATA SOURCE RESOURCE Replace the following variables: DATASCAN : The name of the data quality scan.

### Auto data quality overview \_|\_ Knowledge Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview](https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Simple aggregate example to make sure that discount pct is not greater than 100: SELECT FROM example project.example dataset.table WHERE discount pct > 100 Using an expression subquery to compare values across a different table: SELECT FROM example project.example dataset.different-table WHERE gross weight > (SELECT avg(gross weight) FROM example project.example dataset.different-table) For example rules, see auto data quality sample rules .
- Home Documentation Data analytics Knowledge Catalog Guides Send feedback Auto data quality overview Stay organized with collections Save and categorize content based on your preferences.
- Execution identity By default, Knowledge Catalog uses a centralized service agent ( service-PROJECT NUMBER@gcp-sa-dataplex.iam.gserviceaccount.com ) to run data quality scans.
- You can automate the data scanning, validate data against defined rules, and log alerts if your data doesn't meet quality requirements.

### "Package com.google.cloud.dataplex.v1 (1.86.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1)
- Source ID: `site-java-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- The primary resources offered by this service are Lakes, Zones and Assets which collectively allow a data administrator to organize, manage, secure and catalog data across their organization located across cloud projects in a variety of storage systems including Cloud Storage and BigQuery. com. google. cloud. dataplex. v1.
- Unauthorized Resource Action details for unauthorized resource issues raised to indicate that the service account associated with the lake instance is not authorized to access or manage the resource associated with an asset. com. google. cloud. dataplex. v1.
- Builder Action details for unauthorized resource issues raised to indicate that the service account associated with the lake instance is not authorized to access or manage the resource associated with an asset. com. google. cloud. dataplex. v1.
- The primary resources offered by this service are Lakes, Zones and Assets which collectively allow a data administrator to organize, manage, secure and catalog data across com. google. cloud. dataplex. v1.

