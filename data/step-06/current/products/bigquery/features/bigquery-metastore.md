---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.385Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery metastore"
feature_slug: "bigquery-metastore"
latest_feature_date: "2025-01-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery"
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "bigquery"
  - "metastore"
  - "provides"
  - "shared"
  - "metadata"
  - "management"
  - "across"
  - "processing"
---

# BigQuery metastore

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery metastore provides shared metadata management across processing engines including BigQuery and Apache Spark.

## Extended Definition

BigQuery metastore provides shared metadata management across processing engines including BigQuery and Apache Spark.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)
- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Best practices for multi-tenant workloads on BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery](https://docs.cloud.google.com/bigquery/docs/best-practices-for-multi-tenant-workloads-on-bigquery)
- Source ID: `site-docs-reference-5`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Knowledge Catalog discovery automatically creates metadata entries for all new BigQuery tables across your organization.
- Copy datasets for multiregional configurations Because BigQuery disallows cross-regional queries, you can't use the strategy of segmenting data with authorized views when data marts must exist across multiple regions.
- When you use decentralized authority, you maintain central control of security and BigQuery capacity by using Cloud Key Management Service (Cloud KMS) , column policies, VPC Service Controls, and reservations.
- This reservation is assigned to the top-level organization, and it gives slots to any BigQuery user who isn't using a project that has a dedicated reservation Data processing : 1000 slots, ignore idle.

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Google BigQuery as a source in Validio Partner Advantage page Direct link ETL & Data Integration Ab Initio Solution Ab Initio Platform Category ETL & Data Integration Description Ab Initio provides a high-performance software suite for data integration, batch processing, data quality, and metadata management.
- Partner references Incorta unified data & analytics platform Incorta Google BigQuery Connector Partner Advantage page Direct link Informatica Solution Informatica IICS Category ETL & Data Integration Description Informatica Intelligent Cloud Services (IICS) is a cloud-based data integration platform that provides a variety of features such as business data integration, application integration, and API management between cloud and local applications.
- Partner references SAS/ACCESS BigQuery Interface Guide SAS Google BigQuery Data Connector Partner Advantage page Direct link Segment by Twilio Solution Segment Category BI, ML, & Advanced Analytics Description Twilio Segment provides AI-ready data for personalized customer experiences across channels, including messaging, email, customer service, voice, and video interactions.
- Partner references Connecting BigQuery to Stitch Partner Advantage page Direct link Talend Cloud Solution Talend Cloud Category ETL & Data Integration Description Talend is a software integration platform that provides various software and services for data integration, data management, enterprise application integration, data quality, cloud storage, and Big Data.

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Import the Google Cloud client library and create a client const { BigQuery } = require ( ' @google-cloud/bigquery ' ); const bigquery = new BigQuery (); async function ddlCreateView () { // Creates a view via a DDL query / TODO(developer): Uncomment the following lines before running the sample. / // const projectId = "my project" // const datasetId = "my dataset" // const tableId = "my new view" const query = CREATE VIEW \ ${ projectId } . ${ datasetId } . ${ tableId } \ OPTIONS( expiration timestamp=TIMESTAMP ADD( CURRENT TIMESTAMP(), INTERVAL 48 HOUR), friendly name="new view", description="a view that expires in 2 days", labels=[("org unit", "development")] ) AS SELECT name, state, year, number FROM \bigquery-public-data.usa names.usa 1910 current\ WHERE state LIKE 'W%' ; // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query const options = { query : query , }; // Run the query as a job const [ job ] = await bigquery . createQueryJob ( options ); job . on ( 'complete' , metadata = > { console . log ( Created new view ${ tableId } via job ${ metadata . id } ); }); } Python Call the Client.query() method to start a query job.
- NAME and VALUE must be one of the following combinations: NAME VALUE Details enable refresh BOOLEAN Example: enable refresh=false Default: true refresh interval minutes FLOAT64 Example: refresh interval minutes=20 Default: refresh interval minutes=30 expiration timestamp TIMESTAMP Example: expiration timestamp=TIMESTAMP "2025-01-01 00:00:00 UTC" This property is equivalent to the expirationTime table resource property. expiration timestamp is optional and not used by default. max staleness INTERVAL Example: max staleness=INTERVAL "4:0:0" HOUR TO SECOND The max staleness property provides consistently high performance with controlled costs when processing large, frequently changing datasets. max staleness is disabled by default. allow non incremental definition BOOLEAN Example: allow non incremental definition=true The allow non incremental definition property supports an expanded range of SQL queries to create materialized views. allow non incremental definition=true is disabled by default.
- NAME and VALUE must be one of the following combinations: NAME VALUE Details enable refresh BOOLEAN Example: enable refresh=false Default: true refresh interval minutes FLOAT64 Example: refresh interval minutes=20 Default: refresh interval minutes=30 expiration timestamp TIMESTAMP Example: expiration timestamp=TIMESTAMP "2025-01-01 00:00:00 UTC" This property is equivalent to the expirationTime table resource property. expiration timestamp is optional and not used by default. max staleness INTERVAL Example: max staleness=INTERVAL "4:0:0" HOUR TO SECOND The max staleness property provides consistently high performance with controlled costs when processing large, frequently changing datasets. max staleness is disabled by default. allow non incremental definition BOOLEAN Example: allow non incremental definition=true The allow non incremental definition property supports an expanded range of SQL queries to create materialized views. allow non incremental definition=true is disabled by default.
- If true , idle slots are shared equally across all reservations first, and then across projects within the reservation.

