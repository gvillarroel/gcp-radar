---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.191Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Cloud resource connection DDL in GoogleSQL"
feature_slug: "cloud-resource-connection-ddl-in-googlesql"
latest_feature_date: "2026-04-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/adding-labels"
keywords:
  - "resource"
  - "connection"
  - "ddl"
  - "googlesql"
  - "supports"
  - "create"
  - "alter"
  - "set"
---

# Cloud resource connection DDL in GoogleSQL

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

GoogleSQL supports CREATE CONNECTION, ALTER CONNECTION SET OPTIONS, and DROP CONNECTION statements for managing Cloud resource connections.

## Extended Definition

GoogleSQL supports CREATE CONNECTION, ALTER CONNECTION SET OPTIONS, and DROP CONNECTION statements for managing Cloud resource connections.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/adding-labels](https://docs.cloud.google.com/bigquery/docs/adding-labels)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- You can use DDL commands to create, alter, and delete resources, such as the following: Datasets Tables Table schemas Table clones Table snapshots Views Connections User-defined functions (UDFs) Indexes Capacity commitments and reservations Row-level access policies Default configuration settings Required permissions To create a job that runs a DDL statement, you must have the bigquery.jobs.create permission for the project where you are running the job.
- Example The following example creates a Cloud resource connection named my cloud resource connection : CREATE CONNECTION IF NOT EXISTS us.my cloud resource connection OPTIONS ( connection type = "CLOUD RESOURCE" , friendly name = "My Resource Connection" , description = "Connection to access Cloud resources" ); ALTER SCHEMA SET DEFAULT COLLATE statement Sets collation specifications on a dataset.
- Syntax To create a GoogleSQL stored procedure , use the following syntax: CREATE [ OR REPLACE ] PROCEDURE [ IF NOT EXISTS ] [[ project name . ] dataset name . ] procedure name ( procedure argument [ , ... ] ) [ OPTIONS ( procedure option list ) ] BEGIN multi statement query END ; procedure argument : [ procedure argument mode ] argument name argument type procedure argument mode : IN OUT INOUT To create a stored procedure for Apache Spark , use the following syntax: CREATE [ OR REPLACE ] PROCEDURE [ IF NOT EXISTS ] [[ project name . ] dataset name . ] procedure name ( procedure argument [ , ... ] ) [ EXTERNAL SECURITY external security ] WITH CONNECTION connection project id . connection region . connection id [ OPTIONS ( procedure option list ) ] LANGUAGE language [ AS pyspark code ] procedure argument : [ procedure argument mode ] argument name argument type procedure argument mode : IN OUT INOUT external security : INVOKER Arguments OR REPLACE : Replaces any procedure with the same name if it exists.
- NAME and VALUE must be one of the following combinations: NAME VALUE Details enable refresh BOOLEAN Example: enable refresh=false Default: true refresh interval minutes FLOAT64 Example: refresh interval minutes=20 Default: refresh interval minutes=30 expiration timestamp TIMESTAMP Example: expiration timestamp=TIMESTAMP "2025-01-01 00:00:00 UTC" This property is equivalent to the expirationTime table resource property. expiration timestamp is optional and not used by default. max staleness INTERVAL Example: max staleness=INTERVAL "4:0:0" HOUR TO SECOND The max staleness property provides consistently high performance with controlled costs when processing large, frequently changing datasets. max staleness is disabled by default. allow non incremental definition BOOLEAN Example: allow non incremental definition=true The allow non incremental definition property supports an expanded range of SQL queries to create materialized views. allow non incremental definition=true is disabled by default.

### Add labels to resources \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/adding-labels](https://docs.cloud.google.com/bigquery/docs/adding-labels)
- Source ID: `site-docs-reference-2`
- Final score: 144
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Examples: Use the following command to create a test data label for mydataset.mytable . mydataset is in your default project. bq update --set label test data: mydataset API Call the datasets.patch method or the tables.patch method and add labels with the value set to the empty string ( "" ) in the dataset resource or the table resource .
- Client () TODO(dev): Change table id to the full name of the table you want to create. table id = "your-project.your dataset.your table name" table = client . get table ( table id ) # API request labels = { "color" : "green" } table . labels = labels table = client . update table ( table , [ "labels" ]) # API request print ( f "Added { table . labels } to { table id } ." ) Add labels to jobs Labels can be added to query jobs through the command line by using the bq command-line tool's --label flag.
- For example, to add a department:shipping label and cost center:logistics label to mytable in your default project, use: bq update \ --set label department:shipping \ --set label cost center:logistics \ mydataset.mytable API To add a label to an existing table or view, call the tables.patch method and populate the labels property for the table resource .
- For example, to add a department:shipping label and cost center:logistics label to mydataset in your default project, use: bq update \ --set label department:shipping \ --set label cost center:logistics \ mydataset API To add a label to an existing dataset, call the datasets.patch method and populate the labels property for the dataset resource .

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- If you create a Spanner connection and want to use Data Boost , include the "useParallelism":true and "useDataBoost":true pairs. --connection credential= CONNECTION CREDENTIAL The credentials of the connection in JSON format. username and password must be specified. --project id= PROJECT ID Specifies the ID of the project that the connection belongs to. --location= LOCATION Specifies the location that the connection will be stored. --display name= DISPLAY NAME Specifies an optional friendly name for the connection. --description= DESCRIPTION Specifies an optional description of the connection. --iam role id= ROLE ID For BigQuery Omni on AWS, specifies an IAM role that allows access to the resource.
- Your selection specifies the type of resource to create. --capacity commitment : Purchase a capacity commitment. --connection : Create a connection. --dataset or -d : Create a dataset. --materialized view : Create a materialized view. --reservation : Create a reservation. --reservation assignment .
- Each tag must have the namespaced key name and value short name . --default kms key= KEY Specifies the default Cloud KMS key resource ID for encrypting the table data in a dataset if no explicit key is provided during table creation or query. --default partition expiration= SECONDS An integer that specifies the default expiration time, in seconds, for all partitions in newly-created partitioned tables in the dataset.
- The bq mk command supports additional flags, depending on the type of resource you are creating, as described in the following sections. bq mk --capacity commitment To purchase a capacity commitment, set --capacity commitment to true and use the following flags: --location= LOCATION Specifies the location of the commitment. --plan= PLAN TYPE Specifies the commitment plan type .

