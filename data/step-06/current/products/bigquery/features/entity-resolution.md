---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.512Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Entity resolution"
feature_slug: "entity-resolution"
latest_feature_date: "2024-02-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv"
  - "https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas"
keywords:
  - "entity"
  - "resolution"
  - "bigquery"
  - "matches"
  - "records"
  - "across"
  - "datasets"
  - "when"
---

# Entity resolution

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery entity resolution matches records across datasets when a common identifier is missing by using supported identity providers.

## Extended Definition

BigQuery entity resolution matches records across datasets when a common identifier is missing by using supported identity providers.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- When both the column list and the AS query statement clause are present, BigQuery ignores the names in the AS query statement clause and matches the columns with the column list by position.
- NAME and VALUE must be one of the following combinations: NAME VALUE Details enable refresh BOOLEAN Example: enable refresh=false Default: true refresh interval minutes FLOAT64 Example: refresh interval minutes=20 Default: refresh interval minutes=30 expiration timestamp TIMESTAMP Example: expiration timestamp=TIMESTAMP "2025-01-01 00:00:00 UTC" This property is equivalent to the expirationTime table resource property. expiration timestamp is optional and not used by default. max staleness INTERVAL Example: max staleness=INTERVAL "4:0:0" HOUR TO SECOND The max staleness property provides consistently high performance with controlled costs when processing large, frequently changing datasets. max staleness is disabled by default. allow non incremental definition BOOLEAN Example: allow non incremental definition=true The allow non incremental definition property supports an expanded range of SQL queries to create materialized views. allow non incremental definition=true is disabled by default.
- NAME and VALUE must be one of the following combinations: NAME VALUE Details enable refresh BOOLEAN Example: enable refresh=false Default: true refresh interval minutes FLOAT64 Example: refresh interval minutes=20 Default: refresh interval minutes=30 expiration timestamp TIMESTAMP Example: expiration timestamp=TIMESTAMP "2025-01-01 00:00:00 UTC" This property is equivalent to the expirationTime table resource property. expiration timestamp is optional and not used by default. max staleness INTERVAL Example: max staleness=INTERVAL "4:0:0" HOUR TO SECOND The max staleness property provides consistently high performance with controlled costs when processing large, frequently changing datasets. max staleness is disabled by default. allow non incremental definition BOOLEAN Example: allow non incremental definition=true The allow non incremental definition property supports an expanded range of SQL queries to create materialized views. allow non incremental definition=true is disabled by default.
- You can use DDL commands to create, alter, and delete resources, such as the following: Datasets Tables Table schemas Table clones Table snapshots Views Connections User-defined functions (UDFs) Indexes Capacity commitments and reservations Row-level access policies Default configuration settings Required permissions To create a job that runs a DDL statement, you must have the bigquery.jobs.create permission for the project where you are running the job.

### Troubleshoot quota and limit errors \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- As a best practice, group related views into authorized datasets when you design new BigQuery architectures, especially multi-tenant architectures.
- Identify API calls Go to the Google Cloud navigation menu menu, and then select Logging > Logs Explorer : Go to the Logs Explorer Filter logs to view table operations by running the following query: resource.type="bigquery dataset" protoPayload.resourceName="projects/my-project-id/datasets/my dataset/tables/my table" (protoPayload.methodName="google.cloud.bigquery.v2.TableService.PatchTable" OR protoPayload.methodName="google.cloud.bigquery.v2.TableService.UpdateTable" OR protoPayload.methodName="google.cloud.bigquery.v2.TableService.InsertTable") Identify jobs The following query returns a list of jobs that modify the affected table in the project within the past day.
- To see all copy jobs in all regions, you can use the following filter in Cloud Logging: resource.type="bigquery resource" protoPayload.methodName="jobservice.insert" protoPayload.serviceData.jobInsertRequest.resource.jobConfiguration.tableCopy: Resolution If the goal of the frequent copy operations is to create a snapshot of data, consider using table snapshots instead.
- Maximum number of API requests limit errors BigQuery returns this error when you reach the rate limit for the number of API requests to a BigQuery API per user per method—for example, the tables.get method calls from a service account, or the jobs.insert method calls from a different user email.

### Loading CSV data from Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv](https://docs.cloud.google.com/bigquery/docs/loading-data-cloud-storage-csv)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Number of bad records allowed Number of errors allowed --max bad records maxBadRecords ( Java , Python ) (Optional) The maximum number of bad records that BigQuery can ignore when running the job.
- At most, five errors of any type are returned regardless of the --max bad records value. --ignore unknown values : When specified, allows and ignores extra, unrecognized values in CSV or JSON data. --time zone : An optional default time zone that will apply when parsing timestamp values that have no specific time zone in CSV or JSON data. --date format : An optional custom string that defines how the DATE values are formatted in CSV or JSON data. --datetime format : An optional custom string that defines how the DATETIME values are formatted in CSV or JSON data. --time format : An optional custom string that defines how the TIME values are formatted in CSV or JSON data. --timestamp format : An optional custom string that defines how the TIMESTAMP values are formatted in CSV or JSON data. --autodetect : When specified, enable schema auto-detection for CSV and JSON data. --destination kms key : The Cloud KMS key for encryption of the table data. bq --location = location load \ -- [ no ] replace \ --source format = format \ dataset.table \ path to source \ schema where: location is your location .
- At most, five errors of any type are returned regardless of the --max bad records value. --ignore unknown values : When specified, allows and ignores extra, unrecognized values in CSV or JSON data. --time zone : An optional default time zone that will apply when parsing timestamp values that have no specific time zone in CSV or JSON data. --date format : An optional custom string that defines how the DATE values are formatted in CSV or JSON data. --datetime format : An optional custom string that defines how the DATETIME values are formatted in CSV or JSON data. --time format : An optional custom string that defines how the TIME values are formatted in CSV or JSON data. --timestamp format : An optional custom string that defines how the TIMESTAMP values are formatted in CSV or JSON data. --autodetect : When specified, enable schema auto-detection for CSV and JSON data. --time partitioning type : Enables time-based partitioning on a table and sets the partition type.
- Permissions to load data into BigQuery To load data into a new BigQuery table or partition or to append or overwrite an existing table or partition, you need the following IAM permissions: bigquery.tables.create bigquery.tables.updateData bigquery.tables.update bigquery.jobs.create Each of the following predefined IAM roles includes the permissions that you need in order to load data into a BigQuery table or partition: roles/bigquery.dataEditor roles/bigquery.dataOwner roles/bigquery.admin (includes the bigquery.jobs.create permission) bigquery.user (includes the bigquery.jobs.create permission) bigquery.jobUser (includes the bigquery.jobs.create permission) Additionally, if you have the bigquery.datasets.create permission, you can create and update tables using a load job in the datasets that you create.

