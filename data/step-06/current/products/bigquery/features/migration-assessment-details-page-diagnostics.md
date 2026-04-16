---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.442Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Migration assessment details page diagnostics"
feature_slug: "migration-assessment-details-page-diagnostics"
latest_feature_date: "2024-07-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/batch-sql-translator"
  - "https://docs.cloud.google.com/bigquery/docs/migration-intro"
  - "https://docs.cloud.google.com/bigquery/docs/hadoop-metadata"
keywords:
  - "migration"
  - "assessment"
  - "details"
  - "page"
  - "diagnostics"
  - "shows"
  - "additional"
  - "information"
---

# Migration assessment details page diagnostics

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The migration assessment details page shows additional assessment information and errors.

## Extended Definition

The migration assessment details page shows additional assessment information and errors.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/batch-sql-translator](https://docs.cloud.google.com/bigquery/docs/batch-sql-translator)
- [https://docs.cloud.google.com/bigquery/docs/migration-intro](https://docs.cloud.google.com/bigquery/docs/migration-intro)
- [https://docs.cloud.google.com/bigquery/docs/hadoop-metadata](https://docs.cloud.google.com/bigquery/docs/hadoop-metadata)

## Supporting Pages

### "Migrate code with the batch SQL translator \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/batch-sql-translator](https://docs.cloud.google.com/bigquery/docs/batch-sql-translator)
- Source ID: `site-docs-reference-5`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- The following example shows a translation configuration YAML file for a Teradata to BigQuery translation: tasks: translation task: type: Teradata2BigQuery Translation translationDetails: sourceTargetMapping: - sourceSpec: baseUri: gs://bq-translations/input targetSpec: relativePath: output targetBaseUri: gs://bq-translations targetTypes: - sql sourceEnvironment: defaultDatabase: default db schemaSearchPath: - foo The following example shows a translation configuration JSON file for a Teradata to BigQuery translation: { "tasks" : { "translation task" : { "type" : "Teradata2BigQuery Translation" , "translationDetails" : { "sourceTargetMapping" : [ { "sourceSpec" : { "literal" : { "literalString" : "sel 1" , "relativePath" : "my input 1" } , "encoding" : "UTF-8" } } , { "sourceSpec" : { "literal" : { "literalString" : "sel 2" , "relativePath" : "my input 2" } , "encoding" : "UTF-8" } } ] , "targetReturnLiterals" : [ "sql/my input 1" , "sql/my input 2" ] } } } } Once the translation configuration is created, run the following command to run the translation job. bq mk --migration workflow --location = LOCATION --config file = CONFIG FILE NAME .json Replace the following: LOCATION : the location of the Google Cloud project that is running this translation job.
- What's next Learn more about the following steps in data warehouse migration: Migration overview Migration assessment Schema and data transfer overview Data pipelines Interactive SQL translation Data security and governance Data validation tool Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To see the results of a specific translation job, run the following command: gcloud bq migration-workflows describe projects/ PROJECT ID /locations/us/workflows/ WORKFLOW ID To remove a translation job from the list, run the following command: bq rm --migration workflow projects/ PROJECT ID /locations/us/workflows/ WORKFLOW ID To list all your translation jobs, run the following command: bq ls --migration workflow --location = LOCATION Explore the translation output After running the translation job, you can see information about the job in the Google Cloud console.
- The command will create and run the workflow and return immediately with a link to the workflow. gcloud bq migration-workflows create --location = LOCATION --config-file = CONFIG FILE NAME .json --async The following example shows a command to list your translation jobs: gcloud bq migration-workflows list --location = LOCATION Replace the following: LOCATION : the location of the Google Cloud project that is running this translation job.

### "Extracting metadata from Apache Hive for migration \_|\_ BigQuery \_|\_\

- URL: [https://docs.cloud.google.com/bigquery/docs/hadoop-metadata](https://docs.cloud.google.com/bigquery/docs/hadoop-metadata)
- Source ID: `site-api-reference`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloudera Run the following command to extract metadata from Cloudera using the dwh-migration-dumper tool. dwh-migration-dumper \ --connector cloudera-manager \ --url CLOUDERA-URL \ --user CLOUDERA-USER \ --password CLOUDERA-PASSWORD \ --output gs:// MIGRATION-BUCKET /cloudera-dumper-output.zip \ --yarn-application-types APPLICATION-TYPES \ --pagination-page-size PAGE-SIZE \ --assessment \ Replace the following: CLOUDERA-URL : the URL for Cloudera Manager CLOUDERA-USER : the username of the Cloudera user CLOUDERA-PASSWORD : the password of the Cloudera user MIGRATION-BUCKET : the Cloud Storage bucket that you are using to store the migration files.
- Apache Ranger Run the following command to extract metadata from Apache Ranger using the dwh-migration-dumper tool. dwh-migration-dumper \ --connector ranger \ --host RANGER-HOST \ --port 6080 \ --user RANGER-USER \ --password RANGER-PASSWORD \ --ranger-scheme RANGER-SCHEME \ --output gs:// MIGRATION-BUCKET /ranger-dumper-output.zip \ --assessment \ Replace the following: RANGER-HOST : the hostname of the Apache Ranger instance RANGER-USER : the username of the Apache Ranger user RANGER-PASSWORD : the password of the Apache Ranger user RANGER-SCHEME : specify if Apache Ranger is using http or https .
- HDFS Run the following command to extract metadata from HDFS using the dwh-migration-dumper tool. dwh-migration-dumper \ --connector hdfs \ --host HDFS-HOST \ --port HDFS-PORT \ --output gs:// MIGRATION-BUCKET /hdfs-dumper-output.zip \ --assessment \ Replace the following: HDFS-HOST : the HDFS NameNode hostname HDFS-PORT : the HDFS NameNode port number.
- Apache Hive query logs Perform the steps in the Apache Hive section Extract query logs with the hadoop-migration-assessment logging hook to extract your Apache Hive query logs.

### Introduction to BigQuery Migration Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/migration-intro](https://docs.cloud.google.com/bigquery/docs/migration-intro)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information on BigQuery migration assessment, see BigQuery migration assessment .
- Additionally, you can use the cost estimation functionality in Google Cloud Migration Center to generate a cost estimate of running your data warehouse setup that you migrate to BigQuery.
- The BigQuery Migration Service includes the following features: BigQuery migration assessment : Assess and plan your data warehouse migration by running a BigQuery migration assessment .
- It includes features that help you with each phase of migration, including assessment and planning, SQL translation for a variety of SQL dialects , data transfer, and data validation.

