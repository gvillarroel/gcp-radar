---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.369Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Row-level access policies with BigQuery Storage Read API"
feature_slug: "row-level-access-policies-with-bigquery-storage-read-api"
latest_feature_date: "2025-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam"
  - "https://docs.cloud.google.com/bigquery/docs/reference/storage"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
keywords:
  - "row"
  - "level"
  - "access"
  - "policies"
  - "bigquery"
  - "storage"
  - "read"
  - "now"
---

# Row-level access policies with BigQuery Storage Read API

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery row-level access policies are now supported with the BigQuery Storage Read API.

## Extended Definition

BigQuery row-level access policies are now supported with the BigQuery Storage Read API.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- [https://docs.cloud.google.com/bigquery/docs/reference/storage](https://docs.cloud.google.com/bigquery/docs/reference/storage)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)

## Supporting Pages

### Control access to resources with IAM \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam](https://docs.cloud.google.com/bigquery/docs/control-access-to-resources-iam)
- Source ID: `site-docs-reference-5`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- DatasetId datasetId = DatasetId . of ( projectId , datasetName ); Dataset dataset = bigquery . getDataset ( datasetId ); // Create a new Entity with the corresponding type and email // "user-or-group-to-add@example.com" // For more information on the types of Entities available see: // https://cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.Acl.Entity // and // https://cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.Acl.Entity.Type Entity entity = new Group ( entityEmail ); // Create a new ACL granting the READER role to the group with the entity email // "user-or-group-to-add@example.com" // For more information on the types of ACLs available see: // https://cloud.google.com/storage/docs/access-control/lists Acl newEntry = Acl . of ( entity , Role .
- This permission is required for creating replica materialized views. bigquery.tables.restoreSnapshot Table Restore a table snapshot. bigquery.tables.setCategory Table Set policy tags in the table's schema. bigquery.tables.setColumnDataPolicy Table Set column-level access policies on a table. bigquery.tables.setIamPolicy Table Set access controls on a table. bigquery.tables.update Table Update table. metadata. bigquery.tables.get is also required to update table metadata in the console. bigquery.tables.updateData Table Update table data. bigquery.tables.updateIndex Table Update a search index on the table.
- Then call the IAM().SetPolicy() function to save changes to the access policy for a table or view. import ( "context" "fmt" "io" "cloud.google.com/go/bigquery" "cloud.google.com/go/iam" ) // revokeTableOrViewAccessPolicies creates a new ACL removing the VIEWER role to group "example-analyst-group@google.com" // For more information on the types of ACLs available see: // https://cloud.google.com/storage/docs/access-control/lists func revokeTableOrViewAccessPolicies ( w io .
- Then call the dataset.Update() function to update the property. import ( "context" "fmt" "io" "cloud.google.com/go/bigquery" ) // grantAccessToDataset creates a new ACL conceding the READER role to the group "example-analyst-group@google.com" // For more information on the types of ACLs available see: // https://cloud.google.com/storage/docs/access-control/lists func grantAccessToDataset ( w io .

### "Use the BigQuery Storage Read API to read table data \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/storage](https://docs.cloud.google.com/bigquery/docs/reference/storage)
- Source ID: `site-docs-reference`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you're working in an older version of the Storage Read API, then use the appropriate version of Arrow as follows: v1beta1: Arrow 0.14 and earlier v1: Arrow 0.15 and later Regardless of API version, to access API functions, we recommend that you use the BigQuery Storage API client libraries .
- Use the BigQuery Storage Read API to read table data The BigQuery Storage Read API provides fast access to BigQuery-managed storage by using an rpc-based protocol.
- Monitor Storage Read API use To monitor the data egress and processing associated with the Storage Read API, specific fields are available in the BigQuery AuditLogs .
- Enabling the API The Storage Read API is distinct from the BigQuery API, and shows up separately in the Google Cloud console as the BigQuery Storage API .

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Move your data to BigQuery with millisecond latency BigQuery materialization connector BigQuery Batch Query Connector Partner Advantage page Direct link Fivetran Fivetran Data Pipelines Solution Fivetran Data Pipelines Category ETL & Data Integration Description Fivetran is a leader in automated data integration and delivers ready-to-use connectors that automatically adapt as schemas and APIs change, ensuring consistent, reliable access to data.
- Partner references SAS/ACCESS BigQuery Interface Guide SAS Google BigQuery Data Connector Partner Advantage page Direct link Segment by Twilio Solution Segment Category BI, ML, & Advanced Analytics Description Twilio Segment provides AI-ready data for personalized customer experiences across channels, including messaging, email, customer service, voice, and video interactions.
- Partner references DataHub BigQuery Integration BigQuery Ingestion Guide Immuta Solution Immuta Data Security Platform Category Data Governance, Security, & MDM Description Immuta provides data access and security mechanisms to complex data policies.
- Access BigQuery like you would a database: read, write, and update datasets, tables, etc. through a standard ODBC driver interface.

