---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.372Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Metadata caching for SQL translation"
feature_slug: "metadata-caching-for-sql-translation"
latest_feature_date: "2025-03-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/config-yaml-translation"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "metadata"
  - "caching"
  - "sql"
  - "translation"
  - "bigquery"
  - "now"
  - "supports"
  - "reduce"
---

# Metadata caching for SQL translation

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery SQL translation now supports metadata caching to reduce latency for subsequent translation requests.

## Extended Definition

BigQuery SQL translation now supports metadata caching to reduce latency for subsequent translation requests.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/config-yaml-translation](https://docs.cloud.google.com/bigquery/docs/config-yaml-translation)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Transform SQL translations using configuration YAML files \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/config-yaml-translation](https://docs.cloud.google.com/bigquery/docs/config-yaml-translation)
- Source ID: `site-docs-reference-5`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- The interactive SQL translator, BigQuery Migration API, the batch SQL translator, and the batch translation Python client supports the use of multiple configuration YAML files in a single translation job.
- The following configuration YAML changes the star projection, GROUP BY , and ORDER BY clauses in SELECT statements. starProjection supports the following configurations: ALLOW PRESERVE (default) EXPAND groupBy and orderBy support the following configurations: EXPRESSION ALIAS INDEX In the following example, the configuration YAML configures the star projection to EXPAND . type : experimental statement rewriter select : starProjection : EXPAND A SQL translation with this configuration YAML file might look like the following: teradata-input.sql create table x ( a int , b TIMESTAMP ); select from x ; bq-output.sql CREATE TABLE x ( a INT64 , b DATETIME ) ; SELECT x . a x . b FROM x ; UDF specification The following configuration YAML specifies the signature of user-defined functions (UDFs) that are used in the source scripts.
- Much like metadata zip files , UDF definitions can help to produce a more accurate translation of input scripts. type : metadata udfs : - "date parse short date(dt int)" A SQL translation with this configuration YAML file might look like the following: teradata-input.sql create table x ( dt int ); select parse short date ( dt ) + 1 from x ; bq-output.sql CREATE TABLE x ( dt INT64 ) ; SELECT date add ( parse short date ( x . dt ), interval 1 DAY ) FROM x ; Setting decimal precision strictness Preview This product or feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- BigQuery supports the following data type conversions: DATETIME to TIMESTAMP TIMESTAMP to DATETIME (accepts optional time zone) TIMESTAMP WITH TIME ZONE to DATETIME (accepts optional time zone) CHAR to VARCHAR In the following example, the configuration YAML converts a TIMESTAMP data type to DATETIME . type : experimental object rewriter global : typeConvert : timestamp : DATETIME Setting default time zone Preview This product or feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Data Intelligence Platform Cloud migration with Collibra & BigQuery Enterprise-wide data privacy: Collibra + BigQuery Enterprise-scale data quality: Collibra + BigQuery Data quality without the complexity: BigQuery & Collibra Partner Advantage page Direct link Datahub Solution DataHub Cloud Category Data Governance, Security, & MDM Description Datahub is an open source metadata platform that helps organizations discover, understand, and govern their data assets.
- Partner references Google BigQuery resources Connect to BigQuery Understanding BigQuery costs Unravel for BigQuery datasheet Partner Advantage page Direct link Validio Solution Validio Platform Category Data Quality, Observability, & FinOps Description Validio is the next generation data quality and reliability platform and offers the only data quality solution on the market monitoring and validating both data in motion and data at rest on datapoint and pipeline metadata level.
- Partner references Secure Data Warehousing with BigQuery Vaultree's Data-In-Use Encryption for BigQuery Partner Advantage page Direct link Data Quality, Observability, & FinOps Alvin.ai Solution Alvin Automated BigQuery Optimization Category Data Quality, Observability, & FinOps Description Alvin.ai is a platform that automatically optimizes BigQuery workloads to reduce costs and improve query performance.
- Partner references BigQuery and Monte Carlo How Resident Reduced Data Issues with Monte Carlo New Relic Solution New Relic Infrastructure Monitoring Category Data Quality, Observability, & FinOps Description New Relic provides performance, availability, and monitoring services that improve your product, improve your business, and keep your customers happy.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function ddlCreateView () { // Creates a view via a DDL query / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = "my project" // const datasetId = "my dataset" // const tableId = "my new view" const query = CREATE VIEW \ ${ projectId } . ${ datasetId } . ${ tableId } \ OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM \bigquery-public-data.usa names.usa 1910 current\ WHERE state LIKE 'W%' ; // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query const options = { query : query , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); job . on ( 'complete' , metadata = > { console . log ( Created new view ${ tableId } via job ${ metadata . id } ); }); } Python Call the Client.query() method to start a query job.
- BigQuery supports stored procedures for Apache Spark that are written in Python, Java, or Scala. pyspark code : The PySpark code for the stored procedure for Apache Spark if you want to pass the body of the procedure inline.
- BigQuery only supports unenforced primary keys. foreign key : An expression that defines a foreign key table constraint .
- To enable metadata caching, specify an interval literal value between 30 minutes and 7 days.

