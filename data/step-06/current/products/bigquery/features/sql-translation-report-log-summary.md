---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.528Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "SQL translation report log summary"
feature_slug: "sql-translation-report-log-summary"
latest_feature_date: "2023-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/batch-sql-translator"
  - "https://docs.cloud.google.com/bigquery/docs/config-yaml-translation"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquerymigration-quickstart"
keywords:
  - "sql"
  - "translation"
  - "report"
  - "log"
  - "summary"
  - "batch"
  - "translator"
  - "shows"
---

# SQL translation report log summary

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The batch SQL translator shows a log summary of issues for a translation job.

## Extended Definition

The batch SQL translator shows a log summary of issues for a translation job.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/batch-sql-translator](https://docs.cloud.google.com/bigquery/docs/batch-sql-translator)
- [https://docs.cloud.google.com/bigquery/docs/config-yaml-translation](https://docs.cloud.google.com/bigquery/docs/config-yaml-translation)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquerymigration-quickstart](https://docs.cloud.google.com/bigquery/docs/samples/bigquerymigration-quickstart)

## Supporting Pages

### "Migrate code with the batch SQL translator \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/batch-sql-translator](https://docs.cloud.google.com/bigquery/docs/batch-sql-translator)
- Source ID: `site-docs-reference-5`
- Final score: 227
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Locations The batch SQL translator is available in the following processing locations: Region description Region name Details Asia Pacific Bangkok asia-southeast3 Delhi asia-south2 Hong Kong asia-east2 Jakarta asia-southeast2 Melbourne australia-southeast2 Mumbai asia-south1 Osaka asia-northeast2 Seoul asia-northeast3 Singapore asia-southeast1 Sydney australia-southeast1 Taiwan asia-east1 Tokyo asia-northeast1 Europe Belgium europe-west1 Low CO 2 Berlin europe-west10 EU multi-region eu Finland europe-north1 Low CO 2 Frankfurt europe-west3 London europe-west2 Low CO 2 Madrid europe-southwest1 Low CO 2 Milan europe-west8 Netherlands europe-west4 Low CO 2 Paris europe-west9 Low CO 2 Stockholm europe-north2 Low CO 2 Turin europe-west12 Warsaw europe-central2 Zürich europe-west6 Low CO 2 Americas Columbus, Ohio us-east5 Dallas us-south1 Low CO 2 Iowa us-central1 Low CO 2 Las Vegas us-west4 Los Angeles us-west2 Mexico northamerica-south1 Northern Virginia us-east4 Oregon us-west1 Low CO 2 Québec northamerica-northeast1 Low CO 2 São Paulo southamerica-east1 Low CO 2 Salt Lake City us-west3 Santiago southamerica-west1 Low CO 2 South Carolina us-east1 Toronto northamerica-northeast2 Low CO 2 US multi-region us Africa Johannesburg africa-south1 MiddleEast Dammam me-central2 Doha me-central1 Israel me-west1 Submit a translation job Follow these steps to start a translation job, view its progress, and see the results.
- The batch SQL translator can translate the following SQL dialects into GoogleSQL: Amazon Redshift SQL Apache HiveQL and Beeline CLI IBM Netezza SQL and NZPLSQL Teradata and Teradata Vantage: SQL Basic Teradata Query (BTEQ) Teradata Parallel Transport (TPT) Additionally, translation of the following SQL dialects is supported in preview : Apache Impala SQL Apache Spark SQL Azure Synapse T-SQL GoogleSQL (BigQuery) Greenplum SQL IBM DB2 SQL MySQL SQL Oracle SQL, PL/SQL, Exadata PostgreSQL SQL Trino or PrestoSQL Snowflake SQL SQL Server T-SQL SQLite Vertica SQL Important: Translation is done on a best effort basis.
- Troubleshoot translation errors RelationNotFound or AttributeNotFound translation issues After translating a querying using the batch SQL translator , you might encounter a failed translation with the RelationNotFound or AttributeNotFound error.
- Migrate code with the batch SQL translator Note: For API-based translations, including new batch translations, we recommend that you use the BigQuery Migration API to translate your SQL scripts.

### "Transform SQL translations using configuration YAML files \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/config-yaml-translation](https://docs.cloud.google.com/bigquery/docs/config-yaml-translation)
- Source ID: `site-docs-reference-5`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- You can specify a configuration YAML file to use in a SQL translation in the following ways: If you are using the interactive SQL translator, specify the file path to the configuration file or batch translation job ID in the translation settings .
- The interactive SQL translator, BigQuery Migration API, the batch SQL translator, and the batch translation Python client supports the use of multiple configuration YAML files in a single translation job.
- When using the BigQuery interactive SQL translator , using the BigQuery Migration API , or performing a batch SQL translation , you can provide configuration YAML files to modify a SQL query translation.
- Remove the upper function in the default translation output query translation rules : - instruction : "Remove upper() function" examples : - input : "upper(X)" output : "X" Create multiple translation rules to customize the translation output translation rules : - instruction : "Remove upper() function" suggestion type : QUERY CUSTOMIZATION rewrite target : TARGET SQL examples : - input : "upper(X)" output : "X" - instruction : "Insert a comment at the head that explains each statement in detail. suggestion type: QUERY CUSTOMIZATION rewrite target: TARGET SQL Remove SQL comments from the translation input query translation rules : - instruction : "Remove all the sql comments in the input sql query." suggestion type : QUERY CUSTOMIZATION rewrite target : SOURCE SQL Generate translation explanations using default LLM prompt This example uses the default LLM prompts provided by the translation service to generate text explanations: translation rules : - suggestion type : "TRANSLATION EXPLANATION" Generates translation explanations using your own natural language prompts translation rules : - suggestion type : "TRANSLATION EXPLANATION" instruction : "Explain the syntax differences between the source Teradata query and the translated GoogleSQL query." Multiple suggestion types in a single configuration YAML file translation rules : - suggestion type : "TRANSLATION EXPLANATION" instruction : "Explain the syntax differences between the source Teradata query and the translated GoogleSQL query." - instruction : "Remove upper() function" suggestion type : QUERY CUSTOMIZATION rewrite target : TARGET SQL examples : - input : "upper(X)" output : "X" - instruction : "Remove all the sql comments in the input sql query." suggestion type : QUERY CUSTOMIZATION rewrite target : SOURCE SQL Applying multiple YAML configurations When specifying a configuration YAML file in a batch or interactive SQL translation, you can select multiple configuration YAML files in a single translation job to reflect multiple transformations.

### Demonstrate batch query translation \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquerymigration-quickstart](https://docs.cloud.google.com/bigquery/docs/samples/bigquerymigration-quickstart)
- Source ID: `site-docs-reference-required-15`
- Final score: 116
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Fatalf ( "workflow execution failed: %v\n" , err ) } reportWorkflowStatus ( workflow ) } // executeTranslationWorkflow constructs a migration workflow that performs batch SQL translation. func executeTranslationWorkflow ( ctx context .
- For more information, see Set up authentication for client libraries . // The bigquery migration quickstart application demonstrates basic usage of the // BigQuery migration API by executing a workflow that performs a batch SQL // translation task. package main import ( "context" "flag" "fmt" "log" "time" migration "cloud.google.com/go/bigquery/migration/apiv2" "cloud.google.com/go/bigquery/migration/apiv2/migrationpb" ) func main () { // Define command line flags for controlling the behavior of this quickstart. projectID := flag .
- Home Documentation Data analytics BigQuery Samples Demonstrate batch query translation Stay organized with collections Save and categorize content based on your preferences.
- Second ) } } } // reportWorkflowStatus prints information about the workflow execution in a more human readable format. func reportWorkflowStatus ( workflow migrationpb .

