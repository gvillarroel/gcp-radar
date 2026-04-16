---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.667Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "CMEK integration with organization policies"
feature_slug: "cmek-integration-with-organization-policies"
latest_feature_date: "2022-09-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek"
  - "https://docs.cloud.google.com/bigquery/docs/continuous-integration-of-data-in-bigquery"
keywords:
  - "cmek"
  - "integration"
  - "organization"
  - "policies"
  - "feature"
  - "integrates"
  - "customer"
  - "managed"
---

# CMEK integration with organization policies

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

This feature integrates customer-managed encryption keys with CMEK organization policies.

## Extended Definition

This feature integrates customer-managed encryption keys with CMEK organization policies.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek)
- [https://docs.cloud.google.com/bigquery/docs/continuous-integration-of-data-in-bigquery](https://docs.cloud.google.com/bigquery/docs/continuous-integration-of-data-in-bigquery)

## Supporting Pages

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- The company's self-service, AI-powered integration platform helps organizations connect applications and data sources, automate common workflows and business processes, and deliver exceptional experiences for customers, partners, and employees.
- Partner references Open-source ETL to BigQuery Getting started with BigQuery S3 to BigQuery in minutes Redshift to BigQuery in minutes Partner Advantage page Direct link Aiven Solution Aiven Data Platform Category ETL & Data Integration Description Aiven offers popular & proven open source database and messaging software as easy-to-adopt, fully managed, highly available, secure & compliant SaaS solutions like Kafka, Kafka Connect, Kafka MirrorMaker, PostgreSQL, MySQL, Elasticsearch, Cassandra, Redis and M3DB.
- These solutions are organized by the following categories: BI, ML, & Advanced Analytics Connectors & Developer Tools Data Governance, Security, & MDM Data Quality, Observability, & FinOps ETL & Data Integration BI, ML, & Advanced Analytics Actable Solution Predictable Category BI, ML, & Advanced Analytics Description Actable is a customer data accelerator that helps enterprises organize, analyze, and deploy data through consultative services and ML modeling.
- Partner references Incorta unified data & analytics platform Incorta Google BigQuery Connector Partner Advantage page Direct link Informatica Solution Informatica IICS Category ETL & Data Integration Description Informatica Intelligent Cloud Services (IICS) is a cloud-based data integration platform that provides a variety of features such as business data integration, application integration, and API management between cloud and local applications.

### "Copy a table with customer-managed encryption keys (CMEK) \_|\_ BigQuery\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek](https://docs.cloud.google.com/bigquery/docs/samples/bigquery-copy-table-cmek)
- Source ID: `site-docs-reference-required-15`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for client libraries . import ( "context" "fmt" "cloud.google.com/go/bigquery" ) // copyTableWithCMEK demonstrates creating a copy of a table and ensuring the copied data is // protected with a customer managed encryption key. func copyTableWithCMEK ( projectID , datasetID , tableID string ) error { // projectID := "my-project-id" // datasetID := "mydataset" // tableID := "mytable" ctx := context .
- Home Documentation Data analytics BigQuery Samples Copy a table with customer-managed encryption keys (CMEK) Stay organized with collections Save and categorize content based on your preferences.
- Copy a table with customer-managed encryption keys (CMEK).
- Explore further For detailed documentation that includes this code sample, see the following: Customer-managed Cloud KMS keys Code sample Go Before trying this sample, follow the Go setup instructions in the BigQuery quickstart using client libraries .

### Continuous data integration in BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/continuous-integration-of-data-in-bigquery](https://docs.cloud.google.com/bigquery/docs/continuous-integration-of-data-in-bigquery)
- Source ID: `site-docs-reference-5`
- Final score: 140
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Summary of DWH continuous integration options The following table summarizes the differences, advantages, and potential disadvantages between the options for DWH continuous integration. (Sharing offers a different feature set, and is therefore not measurable using the parameters listed in the table.) Costs Rollbacks Risks Table snapshots and table clones Minimal.
- Integrate data into BigQuery tables BigQuery has two features that can help you design a workflow for data integration: table snapshots and table clones .
- Additional scenarios that aren't covered in this document Although this document focuses on isolating development changes from the production environment, the document doesn't cover the following aspects of data integration: Data testing: Are you able to verify that the data you have conforms to business requirements?
- To update their data integration processes to accommodate the new data sources, the DWH team must redesign their approach to data integration to comply with the requirements that were noted earlier, such as strong data consistency.

