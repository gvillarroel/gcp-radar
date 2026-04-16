---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.606Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Query queue timeout configuration"
feature_slug: "query-queue-timeout-configuration"
latest_feature_date: "2023-05-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-effective-project-options"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
keywords:
  - "query"
  - "queue"
  - "timeout"
  - "configuration"
  - "lets"
  - "users"
  - "set"
  - "interactive"
---

# Query queue timeout configuration

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Query queue timeout configuration lets users set interactive and batch queue timeouts in the default configuration.

## Extended Definition

Query queue timeout configuration lets users set interactive and batch queue timeouts in the default configuration.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-effective-project-options](https://docs.cloud.google.com/bigquery/docs/information-schema-effective-project-options)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- Examples The following example sets the default time zone to America/Chicago and the default query job timeout to one hour for an organization in the US region: ALTER ORGANIZATION SET OPTIONS ( region-us.default time zone = "America/Chicago" , region-us.default job query timeout ms = 3600000 ); The following example sets the default time zone, the default query job timeout, the default interactive and batch queue timeouts, and the default Cloud KMS key, clearing the organization level default settings: ALTER ORGANIZATION SET OPTIONS ( region-us.default time zone = NULL , region-us.default kms key name = NULL , region-us.default query job timeout ms = NULL , region-us.default interactive query queue timeout ms = NULL , region-us.default batch query queue timeout ms = NULL ); ALTER PROJECT SET OPTIONS statement Sets the options on a project.
- ALTER PROJECT project id SET OPTIONS ( region-us.default time zone = "America/New York" , region-us.default job query timeout ms = 1800000 ); The following example sets the default time zone, the default query job timeout, the default Cloud KMS key to NULL , and the default interactive and batch queue timeouts and default sql dialect, clearing the project level default settings: ALTER PROJECT project id SET OPTIONS ( region-us.default time zone = NULL , region-us.default kms key name = NULL , region-us.default query job timeout ms = NULL , region-us.default interactive query queue timeout ms = NULL , region-us.default batch query queue timeout ms = NULL , region-us.default sql dialect option = NULL ); ALTER BI CAPACITY SET OPTIONS statement Sets the options on BigQuery BI Engine capacity.
- Sets the default query job timeout time to 30 minutes for all jobs in the us region. default interactive query queue timeout ms INT64 The default amount of time that an interactive query is queued.
- Sets the default query job timeout time to 30 minutes for jobs run in the us region. default interactive query queue timeout ms INT64 The default amount of time that an interactive query is queued.

### EFFECTIVE_PROJECT_OPTIONS view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-effective-project-options](https://docs.cloud.google.com/bigquery/docs/information-schema-effective-project-options)
- Source ID: `site-docs-reference-3`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The result is similar to the following: +--------------------------------------------+-------------+---------------------+------------------+--------------------+ option name option type option value option set level option set on id +--------------------------------------------+-------------+---------------------+------------------+--------------------+ default time zone STRING America/Los Angeles organizations my organization id +--------------------------------------------+-------------+---------------------+------------------+--------------------+ default kms key name STRING test/testkey1 projects my project id +--------------------------------------------+-------------+---------------------+------------------+--------------------+ default query job timeout ms INT64 18000000 projects my project id +--------------------------------------------+-------------+---------------------+------------------+--------------------+ default interactive query queue timeout ms INT64 600000 organization my organization id +--------------------------------------------+-------------+---------------------+------------------+--------------------+ default batch query queue timeout ms INT64 1200000 projects my project id +--------------------------------------------+-------------+---------------------+------------------+--------------------+ Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Options table option name option type option value default time zone STRING The effective default time zone for this project. default kms key name STRING The effective default key name for this project. default query job timeout ms INT64 The effective default query timeout in milliseconds for this project. default interactive query queue timeout ms STRING The effective default timeout in milliseconds for queued interactive queries for this project. default batch query queue timeout ms STRING The effective default timeout in milliseconds for queued batch queries for this project. enable reservation based fairness BOOL Use reservation-based fairness as opposed to project-based fairness.
- Schema When you query the INFORMATION SCHEMA.EFFECTIVE PROJECT OPTIONS view, the query results contain one row for each configuration in a project.
- The INFORMATION SCHEMA.EFFECTIVE PROJECT OPTIONS view has the following schema: Column name Data type Value project id STRING The ID of the project. project number INTEGER Number of the project. option name STRING Option ID for the specified configuration setting. option description STRING The option description. option type STRING The data type of the OPTION VALUE . option set level STRING The level in the hierarchy at which the setting is defined, with possible values of DEFAULT , ORGANIZATION , or PROJECTS . option set on id STRING Set value based on value of option set level : If DEFAULT , set to null .

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- It lets users create, explore, and share interactive dashboards directly from cloud data warehouses like Google BigQuery, leveraging live data without extracts and offering embedded analytics capabilities.
- Its built-in connector for BigQuery lets users directly query their data warehouse, create interactive dashboards, and share insights without needing to write complex SQL.
- Partner references Import BigQuery Data into Amplitude Export data to BigQuery AskYourDatabase Solution AskYourDatabase Category BI, ML, & Advanced Analytics Description AskYourDatabase is an AI-powered tool that lets users ask questions in plain English and get instant answers from their database.
- It lets users ingest, join, and analyze streaming data with the same ease as a traditional database, offering seamless integration to sink processed data into BigQuery for long-term storage and analysis.

