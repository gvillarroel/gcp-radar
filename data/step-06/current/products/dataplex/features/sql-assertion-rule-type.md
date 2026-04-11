---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T06:18:42.605Z"
product_name: "Dataplex"
product_slug: "dataplex"
feature_name: "SQL assertion rule type"
feature_slug: "sql-assertion-rule-type"
latest_feature_date: "2024-04-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/dataplex/docs/use-auto-data-quality"
  - "https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1"
keywords:
  - "sql"
  - "assertion"
  - "rule"
  - "type"
  - "dataplex"
  - "automatic"
  - "quality"
  - "supports"
---

# SQL assertion rule type

Product: Dataplex
Coverage: LOW

## Step 02 Summary

Dataplex automatic data quality supports a SQL assertion rule type for detecting invalid dataset states with custom SQL.

## Extended Definition

Dataplex automatic data quality supports a SQL assertion rule type for detecting invalid dataset states with custom SQL.

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
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Export table schema To export the data quality scan results to an existing BigQuery table, make sure that it is compatible with the following table schema: Column name Column data type Sub field name (if applicable) Sub field data type Mode Example data quality scan struct/record resource name string nullable //dataplex.googleapis.com/projects/test-project/locations/europe-west2/datascans/test-datascan project id string nullable dataplex-back-end-dev-project location string nullable us-central1 data scan id string nullable test-datascan display name string nullable datascan-display-name data source struct/record resource name string nullable Entity case: //dataplex.googleapis.com/projects/dataplex-back-end-dev-project/locations/europe-west2/lakes/a0-datascan-test-lake/zones/a0-datascan-test-zone/entities/table1 Table case: //bigquery.googleapis.com/projects/test-project/datasets/test-dataset/tables/test-table dataplex entity project id string nullable dataplex-back-end-dev-project dataplex entity project number integer nullable 123456789 dataplex lake id string nullable (Valid only if source is entity) test-lake dataplex zone id string nullable (Valid only if source is entity) test-zone dataplex entity id string nullable (Valid only if source is entity) test-entity table project id string nullable test-project table project number integer nullable 987654321 dataset id string nullable (Valid only if source is table) test-dataset table id string nullable (Valid only if source is table) test-table data quality job id string nullable caeba234-cfde-4fca-9e5b-fe02a9812e38 data quality job configuration json trigger string nullable ondemand / schedule incremental boolean nullable true / false sampling percent float nullable (0-100) 20.0 (indicates 20%) row filter string nullable col1 >= 0 AND col2 incremental column string nullable column name job labels json nullable {"key1":value1} job start time timestamp nullable 2023-01-01 00:00:00 UTC job end time timestamp nullable 2023-01-01 00:00:00 UTC job quality result struct/record passed boolean nullable true / false score float nullable 90.8 incremental start string nullable 2023-01-01T00:00:00 incremental end string nullable 2024-01-01T00:00:00 job dimension result json nullable {"ACCURACY":{"passed":true,"score":100},"CONSISTENCY":{"passed":false,"score":60}} job rows scanned integer nullable 7500 rule name string nullable test-rule rule description string nullable Test rule description rule type string nullable Range Check rule evaluation type string nullable Per row rule column string nullable Rule only attached to a certain column rule dimension string nullable UNIQUENESS rule threshold percent float nullable (0.0-100.0) Rule-threshold-pct in API 100 rule parameters json nullable {min: 24, max:5345} rule passed boolean nullable true rule rows evaluated integer nullable 7400 rule rows passed integer nullable 3 rule rows null integer nullable 4 rule failed records query string nullable "SELECT FROM test-project.test-dataset.test-table WHERE (NOT((cTime >= '15:31:38.776361' and cTime created on timestamp nullable 2023-01-01 00:00:00 UTC last updated timestamp nullable 2023-01-01 00:00:00 UTC rule assertion row count integer nullable 10 debug queries struct/record description string nullable Test debug query description sql statement string nullable SELECT MIN(col1) AS min col1, AVG(col1) FROM ${data()} debug query results struct/record repeated [{"name": "min col1", "type": "INTEGER", "value": "5"}, {"type": "FLOAT", "value": "7"}] ↳ name string nullable The name of query result column, like min col1 ↳ type string nullable The type of query result column, like INTEGER ↳ value string nullable The value of query result column, like 5 Note: Column rule assertion row count is only applicable for SQL Assertion rule .
- When you use the gcloud CLI to create or update a data quality scan, you can use a YAML file like this as input to the --data-quality-spec-file argument. rules : - uniquenessExpectation : {} column : transaction id dimension : UNIQUENESS - nonNullExpectation : {} column : amount dimension : COMPLETENESS threshold : 1 - regexExpectation : regex : '^[0-9]{8}[a-zA-Z]{16}$' column : customer id ignoreNull : true dimension : VALIDITY threshold : 1 - setExpectation : values : - 'USD' - 'JPY' - 'INR' - 'GBP' - 'CAN' column : currency id ignoreNull : true dimension : VALIDITY threshold : 1 - rangeExpectation : minValue : '0' maxValue : '100' column : discount pct ignoreNull : true dimension : VALIDITY threshold : 1 - rowConditionExpectation : sqlExpression : 0 < discount pct AND discount pct < 100 column : discount pct dimension : VALIDITY threshold : 1 - rowConditionExpectation : sqlExpression : currency id in (select id from my project id.dim dataset.dim currency) column : currency id dimension : VALIDITY threshold : 1 - tableConditionExpectation : sqlExpression : 30 < avg(discount pct) AND avg(discount pct) < 50 dimension : VALIDITY - rowConditionExpectation : sqlExpression : TIMESTAMP(transaction timestamp) < CURRENT TIMESTAMP() column : transaction timestamp dimension : VALIDITY threshold : 1 - sqlAssertion : sqlStatement : SELECT FROM my project id.dim dataset.dim currency WHERE discount pct > 100 dimension : VALIDITY debugQueries : - sqlStatement : SELECT MAX(discount pct) FROM my project id.dim dataset.dim currency samplingPercent : 50 rowFilter : discount pct > 100 postScanActions : bigqueryExport : resultsTable : projects/my project id/datasets/dim dataset/tables/dim currency notificationReport : recipients : emails : - '222larabrown@gmail.com' - 'cloudysanfrancisco@gmail.com' scoreThresholdTrigger : scoreThreshold : 50 jobFailureTrigger : {} jobEndTrigger : {} catalogPublishingEnabled : true Configure execution identity By default, data quality scans run using the Knowledge Catalog service account.
- Set alerts on data quality failures for a BigQuery table that isn't organized in a Knowledge Catalog lake: resource.type="dataplex.googleapis.com/DataScan" AND jsonPayload.dataSource="//bigquery.googleapis.com/projects/test-project/datasets/testdataset/table/chicago taxi trips" AND labels."dataplex.googleapis.com/data scan state"="SUCCEEDED" AND resource.labels.resource container="projects/112233445566" AND NOT jsonPayload.dataQuality.passed=true Set alerts on data quality failures for a BigQuery table that's organized in a Knowledge Catalog lake: resource.type="dataplex.googleapis.com/DataScan" AND jsonPayload.dataSource="projects/test-project/datasets/testdataset/table/chicago taxi trips" AND labels."dataplex.googleapis.com/data scan state"="SUCCEEDED" AND resource.labels.resource container="projects/112233445566" AND NOT jsonPayload.dataQuality.passed=true Sample queries to set per rule alerts A sample query to set alerts on all failing data quality rules with the specified custom rule name for a data quality scan: resource.type="dataplex.googleapis.com/DataScan" AND jsonPayload.ruleName="custom-name" AND jsonPayload.result="FAILED" A sample query to set alerts on all failing data quality rules of a specific evaluation type for a data quality scan: resource.type="dataplex.googleapis.com/DataScan" AND jsonPayload.evalutionType="PER ROW" AND jsonPayload.result="FAILED" A sample query to set alerts on all failing data quality rules for a column in the table used for a data quality scan: resource.type="dataplex.googleapis.com/DataScan" AND jsonPayload.column="CInteger" AND jsonPayload.result="FAILED" Troubleshoot a data quality failure For each job with row-level rules that fail, Knowledge Catalog provides a query to get the failed records.
- Column name Rule Type Suggested dimension Rule parameters transaction id Uniqueness check Uniqueness Threshold: Not Applicable amount Null check Completeness Threshold: 100% customer id Regex (regular expression) check Validity Regular expression: ^[0-9]{8}[a-zA-Z]{16}$ Threshold: 100% currency id Value set check Validity Set of: USD,JPY,INR,GBP,CAN Threshold: 100% Define data quality rules using custom SQL rules To build custom SQL rules, use the following framework: When you create a rule that evaluates one row at a time, create an expression that generates the number of successful rows when Knowledge Catalog evaluates the query SELECT COUNTIF( CUSTOM SQL EXPRESSION ) FROM TABLE .

### Auto data quality overview \_|\_ Knowledge Catalog \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview](https://docs.cloud.google.com/dataplex/docs/auto-data-quality-overview)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- All columns Required: SQL condition to use Dimension Optional: Column to associate this rule with Simple aggregate example: avg(price) > 100 Using an expression subquery to compare values across a different table: (SELECT COUNT( ) FROM example project.example dataset.different-table) < COUNT( ) SQL assertion Aggregate An assertion rule uses a data quality query to find rows that fail one or more conditions specified in the query.
- You can create data quality rules in the following ways: Use recommendations from Knowledge Catalog data profiling Use the predefined rules Create custom SQL rules Predefined rules Knowledge Catalog supports the following categories of predefined rules: Row-level For row-level category rules, the expectation is applied against each data row.
- Type Supported formats Examples Binary Base64 encoded value YXBwbGU= Timestamp YYYY-[M]M-[D]D[( T)[H]H:[M]M:[S]S[.F]] [time zone] OR YYYY-[M]M-[D]D[( T)[H]H:[M]M:[S]S[.F]][time zone offset] 2014-09-27 12:30:00.45-08 Date YYYY-M[M]-D[D] 2014-09-27 Time [H]H:[M]M:[S]S[.DDDDDD] 12:30:00.45 DateTime YYYY-[M]M-[D]D [[H]H:[M]M:[S]S[.DDDDDD]] 2014-09-27 12:30:00.45 Data reference parameter When you create a custom SQL rule, you can refer to a data source table and all of its precondition filters by using the data reference parameter ${data()} in the rule, instead of explicitly mentioning the source table and its filters.
- Consider the following SQL assertion rule on the example project.example dataset.table table that checks whether the average revenue per item exceeds 100: SELECT FROM example project . example dataset . table WHERE SUM ( revenue ) / COUNT ( DISTINCT item id ) > 100 If the preceding rule fails, you can view metrics such as total revenue, number of distinct items, and average revenue per item to help diagnose the issue.

### "Package com.google.cloud.dataplex.v1 (1.86.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1](https://docs.cloud.google.com/java/docs/reference/google-cloud-dataplex/latest/com.google.cloud.dataplex.v1)
- Source ID: `site-java-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Evaluation Type The evaluation type of the data quality rule. com. google. cloud. dataplex. v1.
- Rule Type The type of the data quality rule. com. google. cloud. dataplex. v1.
- Data Quality Dimension A dimension captures data quality intent about a defined subset of the rules specified. com. google. cloud. dataplex. v1.
- Data Quality Rule Result DataQualityRuleResult provides a more detailed, per-rule view of the results. com. google. cloud. dataplex. v1.

