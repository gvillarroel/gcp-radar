---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.661Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "ODBC default dataset project selection"
feature_slug: "odbc-default-dataset-project-selection"
latest_feature_date: "2022-09-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas"
  - "https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
keywords:
  - "odbc"
  - "default"
  - "dataset"
  - "project"
  - "selection"
  - "bigquery"
  - "driver"
  - "supports"
---

# ODBC default dataset project selection

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The BigQuery ODBC driver supports configuring a default project for datasets with dataset_project_id.

## Extended Definition

The BigQuery ODBC driver supports configuring a default project for datasets with dataset_project_id.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- [https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers](https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)

## Supporting Pages

### Use the Simba ODBC and JDBC drivers for BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers](https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see a list of previous driver versions, expand the following section: Previous Simba ODBC driver versions 3.1.6.1026 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 3.1.5.1022 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 3.1.4.1020 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 3.1.2.1009 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 3.1.2.1004 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 3.0.7.1016 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 3.0.5.1011 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 3.0.4.1008 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 3.0.3.1006 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 3.0.2.1005 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 3.0.0.1001 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 2.5.2.1004 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 2.5.0.1001 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 2.4.6.1015 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 2.4.5.1014 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 2.4.3.1012 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 2.4.1.1009 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 2.4.0.1002 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 2.3.5.1009 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 2.3.3.1005 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 2.3.2.1003 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS Install and configure the Simba JDBC driver for BigQuery Note: As an alternative to the Simba JDBC driver, a Google-developed JDBC driver for BigQuery is available in Preview .
- To see a list of previous driver versions, expand the following section: Previous Simba JDBC driver versions 1.6.5.1001 1.6.3.1004 1.6.2.1003 1.6.1.1002 1.5.4.1008 1.5.0.1001 1.3.3.1004 1.3.2.1003 1.3.0.1001 1.2.25.1029 1.2.23.1027 1.2.22.1026 1.2.21.1025 1.2.19.1023 1.2.18.1022 1.2.16.1020 1.2.14.1017 1.2.1.1001 (JDBC 4.2-compatible) 1.2.1.1001 (JDBC 4.1-compatible) Support Support for the Simba ODBC and JDBC drivers for BigQuery is available through standard Cloud Customer Care channels.
- Install and configure the Simba ODBC driver for BigQuery Download the 3.1.6.3037 version of the driver for your operating system: Windows 32-bit ( .msi file) Windows 64-bit ( .msi file) Linux 32-bit and 64-bit ( .tar.gz file) macOS ( .dmg file) Follow the instructions in the insightsoftware installation and configuration guide .
- Use the Simba ODBC and JDBC drivers for BigQuery The Simba Open Database Connectivity (ODBC) and Java Database Connectivity (JDBC) drivers for BigQuery connect your applications to BigQuery, letting you use BigQuery features with your preferred tooling and infrastructure.

### Troubleshoot quota and limit errors \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas](https://docs.cloud.google.com/bigquery/docs/troubleshoot-quotas)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Your user exceeded quota for concurrent project.lists requests This error occurs when Microsoft Power BI jobs that communicate with BigQuery through a Simba ODBC driver or DataHub fail because they exceed the project.list API limit.
- On the main setup screen for the Simba ODBC driver for BigQuery, fill the Catalog (Project) field with your specific Google Cloud project ID—for example, my-gcp-project-id .
- Identify API calls Go to the Google Cloud navigation menu menu, and then select Logging > Logs Explorer : Go to the Logs Explorer Filter logs to view table operations by running the following query: resource.type="bigquery dataset" protoPayload.resourceName="projects/my-project-id/datasets/my dataset/tables/my table" (protoPayload.methodName="google.cloud.bigquery.v2.TableService.PatchTable" OR protoPayload.methodName="google.cloud.bigquery.v2.TableService.UpdateTable" OR protoPayload.methodName="google.cloud.bigquery.v2.TableService.InsertTable") Identify jobs The following query returns a list of jobs that modify the affected table in the project within the past day.
- For example, using Logs Explorer , the following query returns errors with either Quota exceeded or limit in the message string: resource.type = ("bigquery project" OR "bigquery dataset") protoPayload.status.code ="7" protoPayload.status.message: ("Quota exceeded" OR "limit") In this example, the status code 7 indicates PERMISSION DENIED , which corresponds to the HTTP 403 status code.

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- Access BigQuery like you would a database: read, write, and update datasets, tables, etc. through a standard ODBC driver interface.
- Partner references Zing Data + BigQuery Configure Google BigQuery with Zing Data Partner Advantage page Direct link Connectors & Developer Tools CData Solution Google BigQuery ODBC Driver Category Connectors & Developer Tools Description The Google BigQuery ODBC Driver is a powerful tool that lets you connect with live BigQuery data directly from any applications that support ODBC connectivity.
- Partner references Magnitude Simba Google BigQuery JDBC Data Connector: Installation and Configuration Guide Drivers for Google BigQuery Partner Advantage page Direct link Simba ODBC Driver Solution Simba ODBC Driver Category Connectors & Developer Tools Description Google has collaborated with Magnitude Simba to provide ODBC and JDBC drivers that leverage the power of BigQuery's GoogleSQL.
- Partner references Google BigQuery ODBC Driver CData ODBC Driver for BigQuery in MicroStrategy Web Partner Advantage page Direct link Kingswaysoft Solution Kingswaysoft - SSIS Component for BigQuery Category Connectors & Developer Tools Description This solution is easy to use, offering code-less integration between Google BigQuery and virtually any other application or database system.

