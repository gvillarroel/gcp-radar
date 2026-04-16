---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:13:48.467Z"
product_name: "Dataplex"
product_slug: "dataplex"
feature_name: "Rule recommendation API for automatic data quality"
feature_slug: "rule-recommendation-api-for-automatic-data-quality"
latest_feature_date: "2024-05-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality"
  - "https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1"
  - "https://docs.cloud.google.com/dataplex/docs/check-data-quality"
keywords:
  - "rule"
  - "recommendation"
  - "api"
  - "for"
  - "automatic"
  - "quality"
  - "dataplex"
  - "supports"
---

# Rule recommendation API for automatic data quality

Product: Dataplex
Coverage: MEDIUM

## Step 02 Summary

Dataplex automatic data quality supports API-based rule recommendations derived from data profiling scans.

## Extended Definition

Dataplex automatic data quality supports API-based rule recommendations derived from data profiling scans.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality)
- [https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview](https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1)
- [https://docs.cloud.google.com/dataplex/docs/check-data-quality](https://docs.cloud.google.com/dataplex/docs/check-data-quality)

## Supporting Pages

### Use auto data quality \_|\_ Knowledge Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality](https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality)
- Source ID: `site-docs-root`
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Export table schema To export the data quality scan results to an existing BigQuery table, make sure that it is compatible with the following table schema: Column name Column data type Sub field name (if applicable) Sub field data type Mode Example data quality scan struct/record resource name string nullable //dataplex.googleapis.com/projects/test-project/locations/europe-west2/datascans/test-datascan project id string nullable dataplex-back-end-dev-project location string nullable us-central1 data scan id string nullable test-datascan display name string nullable datascan-display-name data source struct/record resource name string nullable Entity case: //dataplex.googleapis.com/projects/dataplex-back-end-dev-project/locations/europe-west2/lakes/a0-datascan-test-lake/zones/a0-datascan-test-zone/entities/table1 Table case: //bigquery.googleapis.com/projects/test-project/datasets/test-dataset/tables/test-table dataplex entity project id string nullable dataplex-back-end-dev-project dataplex entity project number integer nullable 123456789 dataplex lake id string nullable (Valid only if source is entity) test-lake dataplex zone id string nullable (Valid only if source is entity) test-zone dataplex entity id string nullable (Valid only if source is entity) test-entity table project id string nullable test-project table project number integer nullable 987654321 dataset id string nullable (Valid only if source is table) test-dataset table id string nullable (Valid only if source is table) test-table data quality job id string nullable caeba234-cfde-4fca-9e5b-fe02a9812e38 data quality job configuration json trigger string nullable ondemand / schedule incremental boolean nullable true / false sampling percent float nullable (0-100) 20.0 (indicates 20%) row filter string nullable col1 >= 0 AND col2 incremental column string nullable column name job labels json nullable {"key1":value1} job start time timestamp nullable 2023-01-01 00:00:00 UTC job end time timestamp nullable 2023-01-01 00:00:00 UTC job quality result struct/record passed boolean nullable true / false score float nullable 90.8 incremental start string nullable 2023-01-01T00:00:00 incremental end string nullable 2024-01-01T00:00:00 job dimension result json nullable {"ACCURACY":{"passed":true,"score":100},"CONSISTENCY":{"passed":false,"score":60}} job rows scanned integer nullable 7500 rule name string nullable test-rule rule description string nullable Test rule description rule type string nullable Range Check rule evaluation type string nullable Per row rule column string nullable Rule only attached to a certain column rule dimension string nullable UNIQUENESS rule threshold percent float nullable (0.0-100.0) Rule-threshold-pct in API 100 rule parameters json nullable {min: 24, max:5345} rule passed boolean nullable true rule rows evaluated integer nullable 7400 rule rows passed integer nullable 3 rule rows null integer nullable 4 rule failed records query string nullable "SELECT FROM test-project.test-dataset.test-table WHERE (NOT((cTime >= '15:31:38.776361' and cTime created on timestamp nullable 2023-01-01 00:00:00 UTC last updated timestamp nullable 2023-01-01 00:00:00 UTC rule assertion row count integer nullable 10 debug queries struct/record description string nullable Test debug query description sql statement string nullable SELECT MIN(col1) AS min col1, AVG(col1) FROM ${data()} debug query results struct/record repeated [{"name": "min col1", "type": "INTEGER", "value": "5"}, {"type": "FLOAT", "value": "7"}] ↳ name string nullable The name of query result column, like min col1 ↳ type string nullable The type of query result column, like INTEGER ↳ value string nullable The value of query result column, like 5 Note: Column rule assertion row count is only applicable for SQL Assertion rule .
- Set alerts on data quality failures for a BigQuery table that isn't organized in a Knowledge Catalog lake: resource.type="dataplex.googleapis.com/DataScan" AND jsonPayload.dataSource="//bigquery.googleapis.com/projects/test-project/datasets/testdataset/table/chicago taxi trips" AND labels."dataplex.googleapis.com/data scan state"="SUCCEEDED" AND resource.labels.resource container="projects/112233445566" AND NOT jsonPayload.dataQuality.passed=true Set alerts on data quality failures for a BigQuery table that's organized in a Knowledge Catalog lake: resource.type="dataplex.googleapis.com/DataScan" AND jsonPayload.dataSource="projects/test-project/datasets/testdataset/table/chicago taxi trips" AND labels."dataplex.googleapis.com/data scan state"="SUCCEEDED" AND resource.labels.resource container="projects/112233445566" AND NOT jsonPayload.dataQuality.passed=true Sample queries to set per rule alerts A sample query to set alerts on all failing data quality rules with the specified custom rule name for a data quality scan: resource.type="dataplex.googleapis.com/DataScan" AND jsonPayload.ruleName="custom-name" AND jsonPayload.result="FAILED" A sample query to set alerts on all failing data quality rules of a specific evaluation type for a data quality scan: resource.type="dataplex.googleapis.com/DataScan" AND jsonPayload.evalutionType="PER ROW" AND jsonPayload.result="FAILED" A sample query to set alerts on all failing data quality rules for a column in the table used for a data quality scan: resource.type="dataplex.googleapis.com/DataScan" AND jsonPayload.column="CInteger" AND jsonPayload.result="FAILED" Troubleshoot a data quality failure For each job with row-level rules that fail, Knowledge Catalog provides a query to get the failed records.
- Enable the API Optional: If you want Knowledge Catalog to generate recommendations for data quality rules based on the results of a data profile scan, create and run the data profile scan .
- User roles and permissions To get the permissions that you need to run and manage data quality scans, ask your administrator to grant you the following IAM roles: Run a data quality scan on a BigQuery table: BigQuery Job User ( roles/bigquery.jobUser ) on the project to run scan jobs BigQuery Data Viewer ( roles/bigquery.dataViewer ) on the BigQuery table to be scanned Publish data quality scan results to Knowledge Catalog: BigQuery Data Editor ( roles/bigquery.dataEditor ) on the scanned table Dataplex Catalog Editor ( roles/dataplex.catalogEditor ) on the @bigquery entry group in the same location as the table Perform specific tasks on DataScan resources: Dataplex DataScan Administrator ( roles/dataplex.dataScanAdmin ) on the project for full access Dataplex DataScan Creator ( roles/dataplex.dataScanCreator ) on the project to create scans Dataplex DataScan Editor ( roles/dataplex.dataScanEditor ) on the project for write access Dataplex DataScan Viewer ( roles/dataplex.dataScanViewer ) on the project to read scan metadata Dataplex DataScan DataViewer ( roles/dataplex.dataScanDataViewer ) on the project to read scan data including rules and results For more information about granting roles, see Manage access to projects, folders, and organizations .

### Auto data quality overview \_|\_ Knowledge Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview](https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can create data quality rules in the following ways: Use recommendations from Knowledge Catalog data profiling Use the predefined rules Create custom SQL rules Predefined rules Knowledge Catalog supports the following categories of predefined rules: Row-level For row-level category rules, the expectation is applied against each data row.
- Simple aggregate example to make sure that discount pct is not greater than 100: SELECT FROM example project.example dataset.table WHERE discount pct > 100 Using an expression subquery to compare values across a different table: SELECT FROM example project.example dataset.different-table WHERE gross weight > (SELECT avg(gross weight) FROM example project.example dataset.different-table) For example rules, see auto data quality sample rules .
- Every succeeded job contains a data quality scan rule result log with the following detailed information about each rule in that job: Configuration information, such as rule name, rule type, evaluation type, and dimension.
- Knowledge Catalog (formerly Dataplex Universal Catalog) lets you define and measure the quality of the data in your BigQuery tables.

### "Package com.google.cloud.dataplex.v1 (1.86.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1)
- Source ID: `site-java-reference`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Generate Data Quality Rules Request Request details for generating data quality rule recommendations. com. google. cloud. dataplex. v1.
- Generate Data Quality Rules Response Response details for data quality rule recommendations. com. google. cloud. dataplex. v1.
- Builder Request details for generating data quality rule recommendations. com. google. cloud. dataplex. v1.
- Builder Response details for data quality rule recommendations. com. google. cloud. dataplex. v1.

### Use data quality tasks \_|\_ Knowledge Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/check-data-quality](https://docs.cloud.google.com/dataplex/docs/check-data-quality)
- Source ID: `site-docs-root-2`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- API Replace the following: PROJECT ID = "Your Knowledge Catalog Project ID" REGION = "Your Knowledge Catalog lake region" LAKE ID = "Your Knowledge Catalog lake ID" SERVICE ACC = "Your service account used for reading the data" DATAPLEX TASK ID = "Unique task ID for the data quality task" BUCKET NAME = "Your Cloud Storage bucket name containing the CloudDQ configs or YAML specification" GCP BQ BILLING PROJECT ID = "Your BigQuery billing project" GCP BQ REGION ID = "Your BigQuery dataset region ID" #Optional GCP BQ DATASET ID = "Your BigQuery dataset to store the data quality summary results" TARGET TABLE NAME = "Your target table name to store the results in BigQuery dataset" Submit an HTTP POST request: POST https://dataplex.googleapis.com/v1/projects/${PROJECT ID}/locations/${REGION}/lakes/${LAKE ID}/tasks?task id=${DATAPLEX TASK ID} { "spark": { "python script file": f"gs://dataplex-clouddq-artifacts-us-central1/clouddq pyspark driver.py", "file uris": [ f"gs://dataplex-clouddq-artifacts-us-central1/clouddq-executable.zip", f"gs://dataplex-clouddq-artifacts-us-central1/clouddq-executable.zip.hashsum", f"gs://dataplex-clouddq-artifacts-us-central1/your-clouddq-configs.zip" ] }, "execution spec": { "args": { "TASK ARGS":f"clouddq-executable.zip, ALL, gs://BUCKET NAME/your-clouddq-configs.zip, --gcp project id=${GCP BQ BILLING PROJECT ID}, --gcp region id=${GCP BQ REGION ID}, --gcp bq dataset id=${GCP BQ DATASET ID}, --target bigquery summary table=${GCP BQ BILLING PROJECT ID}.${GCP BQ DATASET ID}.${TARGET TABLE NAME}" }, "service account": "SERVICE ACC" }, "trigger spec": { "type": "ON DEMAND" }, "description": "${DATAPLEX TASK DESCRIPTION}" } See also Sample Airflow DAG for Knowledge Catalog data quality task .
- The output in the summary table includes the following information: Column name Description dataplex lake (string) ID of the Knowledge Catalog lake containing the table being validated. dataplex zone (string) ID of the Knowledge Catalog zone containing the table being validated. dataplex asset id (string) ID of the Knowledge Catalog asset containing the table being validated. execution ts (timestamp) Timestamp of when the validation query was run. rule binding id (string) ID of the rule binding for which validation results are reported. rule id (string) ID of the rule under the rule binding for which validation results are reported. dimension (string) Data quality dimension of the rule id .
- Ensure that this service account has sufficient IAM permissions on your project, including BigQuery Data Editor, BigQuery Job User, Dataplex Editor, Managed Service for Apache Spark Worker, and Service Usage Consumer. export DATAPLEX TASK SERVICE ACCOUNT=" DATAPLEX TASK SERVICE ACCOUNT " If you want to use a different dataset for storing the intermediate data quality summary results and the BigQuery views associated with each rule binding, use the following: export CLOUDDQ BIGQUERY DATASET=" CLOUDDQ BIGQUERY DATASET " The BigQuery dataset where the final results of the data quality checks are stored.
- This is a convenience section that allows you to shorten the entity uri metadata registry defaults : dataplex : projects : PROJECT ID locations : REGION ID lakes : operations zones : procurement You have to define a NONE row filter row filters : NONE : filter sql expr : - True INTERNATIONAL ITEMS : filter sql expr : - REGEXP CONTAINS(item id, 'INTNL') rule dimensions are optional but allow you to aggregate reporting. rule dimensions : - consistency - correctness - duplication - completeness - conformance - integrity Rules can be shared across tables or columns. rules : This rule is parameterized with column names as parameter NO DUPLICATES IN COLUMN GROUPS : rule type : CUSTOM SQL STATEMENT dimension : duplication params : custom sql arguments : - column names custom sql statement : - select a. from data a inner join ( select $column names from data group by $column names having count( ) > 1 ) duplicates using ($column names) VALUE ZERO OR POSITIVE : rule type : CUSTOM SQL EXPR dimension : correctness params : custom sql expr : - $column >= 0 VALID ITEM ID : rule type : REGEX dimension : conformance params : pattern : - [A-Z]{5}[0-9]{15} VALID CURRENCY ID : rule type : CUSTOM SQL EXPR dimension : integrity params : custom sql expr : - $column in ('GBP', 'JPY') #rule bindings associate rules to {table, column} rule bindings : TRANSACTIONS UNIQUE : entity uri : dataplex://projects/ PROJECT ID /locations/ REGION ID /lakes/operations/zones/procurement/entities/sales orders column id : id row filter id : NONE incremental time filter column id : last modified timestamp rule ids : - NO DUPLICATES IN COLUMN GROUPS : column names : "id" TRANSACTION AMOUNT VALID : entity uri : dataplex://zones/procurement/entities/sales orders # omitting projects/locations/lakes from uri path to use the default values specified in metadata registry defaults column id : amount row filter id : NONE incremental time filter column id : last modified timestamp rule ids : - VALUE ZERO OR POSITIVE TRANSACTION VALID ITEM ID : entity uri : dataplex://zones/procurement/entities/sales orders column id : item id row filter id : NONE incremental time filter column id : last modified timestamp rule ids : - VALID ITEM ID TRANSACTION CURRENCY VALID : entity uri : dataplex://zones/procurement/entities/sales orders column id : transaction currency row filter id : INTERNATIONAL ITEMS incremental time filter column id : last modified timestamp rule ids : - VALID CURRENCY ID Troubleshoot failed rules with failed records query For every rule that fails, the summary table stores a query in the failed records query column that you can use to get failed records.

