---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.663Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "ODBC Private Service Connect support"
feature_slug: "odbc-private-service-connect-support"
latest_feature_date: "2022-09-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers"
  - "https://docs.cloud.google.com/bigquery/docs/reference/rest/v2/ConnectionProperty"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
keywords:
  - "odbc"
  - "private"
  - "connect"
  - "bigquery"
  - "driver"
  - "can"
  - "urls"
---

# ODBC Private Service Connect support

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The BigQuery ODBC driver can connect by using Private Service Connect URLs.

## Extended Definition

The BigQuery ODBC driver can connect by using Private Service Connect URLs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers](https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers)
- [https://docs.cloud.google.com/bigquery/docs/reference/rest/v2/ConnectionProperty](https://docs.cloud.google.com/bigquery/docs/reference/rest/v2/ConnectionProperty)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)

## Supporting Pages

### Use the Simba ODBC and JDBC drivers for BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers](https://docs.cloud.google.com/bigquery/docs/reference/odbc-jdbc-drivers)
- Source ID: `site-docs-reference`
- Final score: 149
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the Simba ODBC and JDBC drivers for BigQuery The Simba Open Database Connectivity (ODBC) and Java Database Connectivity (JDBC) drivers for BigQuery connect your applications to BigQuery, letting you use BigQuery features with your preferred tooling and infrastructure.
- To see a list of previous driver versions, expand the following section: Previous Simba ODBC driver versions 3.1.6.1026 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 3.1.5.1022 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 3.1.4.1020 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 3.1.2.1009 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 3.1.2.1004 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 3.0.7.1016 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 3.0.5.1011 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 3.0.4.1008 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 3.0.3.1006 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 3.0.2.1005 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 3.0.0.1001 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 2.5.2.1004 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 2.5.0.1001 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 2.4.6.1015 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 2.4.5.1014 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 2.4.3.1012 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 2.4.1.1009 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 2.4.0.1002 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 2.3.5.1009 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 2.3.3.1005 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS 2.3.2.1003 Windows 32-bit Windows 64-bit Linux 32-bit and 64-bit macOS Install and configure the Simba JDBC driver for BigQuery Note: As an alternative to the Simba JDBC driver, a Google-developed JDBC driver for BigQuery is available in Preview .
- To see a list of previous driver versions, expand the following section: Previous Simba JDBC driver versions 1.6.5.1001 1.6.3.1004 1.6.2.1003 1.6.1.1002 1.5.4.1008 1.5.0.1001 1.3.3.1004 1.3.2.1003 1.3.0.1001 1.2.25.1029 1.2.23.1027 1.2.22.1026 1.2.21.1025 1.2.19.1023 1.2.18.1022 1.2.16.1020 1.2.14.1017 1.2.1.1001 (JDBC 4.2-compatible) 1.2.1.1001 (JDBC 4.1-compatible) Support Support for the Simba ODBC and JDBC drivers for BigQuery is available through standard Cloud Customer Care channels.
- Install and configure the Simba ODBC driver for BigQuery Download the 3.1.6.3037 version of the driver for your operating system: Windows 32-bit ( .msi file) Windows 64-bit ( .msi file) Linux 32-bit and 64-bit ( .tar.gz file) macOS ( .dmg file) Follow the instructions in the insightsoftware installation and configuration guide .

### ConnectionProperty \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/rest/v2/ConnectionProperty](https://docs.cloud.google.com/bigquery/docs/reference/rest/v2/ConnectionProperty)
- Source ID: `site-api-reference-2`
- Final score: 91
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics BigQuery Reference Send feedback ConnectionProperty Stay organized with collections Save and categorize content based on your preferences.
- Under JDBC, these correspond directly to connection properties passed to the DriverManager.
- Under ODBC, these correspond to properties in the connection string.
- For more information about system variables, see: https://cloud.google.com/bigquery/docs/reference/system-variables time zone : represents the default timezone used to run the query. session id : associates the query with a given session. query label : associates the query with a given job label.

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Zing Data + BigQuery Configure Google BigQuery with Zing Data Partner Advantage page Direct link Connectors & Developer Tools CData Solution Google BigQuery ODBC Driver Category Connectors & Developer Tools Description The Google BigQuery ODBC Driver is a powerful tool that lets you connect with live BigQuery data directly from any applications that support ODBC connectivity.
- Partner references Magnitude Simba Google BigQuery JDBC Data Connector: Installation and Configuration Guide Drivers for Google BigQuery Partner Advantage page Direct link Simba ODBC Driver Solution Simba ODBC Driver Category Connectors & Developer Tools Description Google has collaborated with Magnitude Simba to provide ODBC and JDBC drivers that leverage the power of BigQuery's GoogleSQL.
- Partner references Google BigQuery ODBC Driver CData ODBC Driver for BigQuery in MicroStrategy Web Partner Advantage page Direct link Kingswaysoft Solution Kingswaysoft - SSIS Component for BigQuery Category Connectors & Developer Tools Description This solution is easy to use, offering code-less integration between Google BigQuery and virtually any other application or database system.
- Partner references Google BigQuery Data Integration Google BigQuery Connection Manager Google BigQuery Destination Component Magnitude Simba JDBC Driver Solution Simba JDBC Driver Category Connectors & Developer Tools Description Google has collaborated with Magnitude Simba to provide ODBC and JDBC drivers that leverage the power of BigQuery's GoogleSQL.

