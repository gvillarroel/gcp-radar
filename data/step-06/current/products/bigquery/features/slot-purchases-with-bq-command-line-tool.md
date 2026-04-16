---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.782Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Slot purchases with bq command-line tool"
feature_slug: "slot-purchases-with-bq-command-line-tool"
latest_feature_date: "2020-06-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/admin-intro"
  - "https://docs.cloud.google.com/bigquery/docs/bq-command-line-tool"
keywords:
  - "slot"
  - "purchases"
  - "bq"
  - "command"
  - "line"
  - "tool"
  - "bigquery"
  - "reservations"
---

# Slot purchases with bq command-line tool

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Reservations lets you purchase slots using the bq command-line tool.

## Extended Definition

BigQuery Reservations lets you purchase slots using the bq command-line tool.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)
- [https://docs.cloud.google.com/bigquery/docs/bq-command-line-tool](https://docs.cloud.google.com/bigquery/docs/bq-command-line-tool)

## Supporting Pages

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 185
- Re-rank relevance: N/A

Evidence snippets:
- For example, this command specifies false for the boolean flag --use legacy sql by placing no at the front of the flag: bq query --nouse legacy sql \ 'SELECT COUNT( ) FROM bigquery-public-data.samples.shakespeare' Alternatively, to specify false as the flag's argument, you can enter the following: bq query --use legacy sql = false \ 'SELECT COUNT( ) FROM bigquery-public-data.samples.shakespeare' Run commands in a script You can run the bq command-line tool in a script, as you would run a Google Cloud CLI command .
- Home Documentation Data analytics BigQuery Reference Send feedback Stay organized with collections Save and categorize content based on your preferences. bq command-line tool reference This document describes the syntax, commands, flags, and arguments for bq , the Python-based command-line tool for BigQuery.
- To stop running bq commands from a service account, run the following command: gcloud config unset auth/impersonate service account Set default values for command-line flags You can set default values for command-line flags by including them in the bq command-line tool's configuration file, .bigqueryrc .
- To specify flags from a file, use the --bigqueryrc flag. --flagfile= PATH When specified, flag definitions from the supplied file are inserted into the bq command-line tool.

### Introduction to BigQuery administration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)
- Source ID: `site-docs-reference-2`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- When a user initiates one of these tasks by using the Google Cloud console , the bq command-line tool , a SQL statement , or an API call , BigQuery automatically creates a job to execute the task.
- You can use the bq command-line tool to do tasks that aren't supported in the Google Cloud console, to prototype capabilities before encoding them in queries or API methods, or if you prefer working in a command-line interface.
- With BigQuery editions billing, you allocate slots for your organization through autoscaling reservations and optional, but cheaper, capacity commitments.
- Manage reservations When BigQuery executes queries, it uses units of computing called slots .

### Use the bq tool \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bq-command-line-tool](https://docs.cloud.google.com/bigquery/docs/bq-command-line-tool)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the bq tool In this tutorial, you learn how to use bq , the Python-based command-line interface (CLI) tool for BigQuery to create a dataset, load sample data, and query tables.
- For a complete reference of all bq commands and flags, see the bq command-line tool reference .
- Activate Cloud Shell At the bottom of the Google Cloud console, a Cloud Shell session starts and displays a command-line prompt.
- Required roles To get the permissions that you need to create a dataset, create a table, load data, and query data, ask your administrator to grant you the following IAM roles on the project: Run load jobs and query jobs: BigQuery Job User ( roles/bigquery.jobUser ) Create a dataset, create a table, load data into a table, and query a table: BigQuery Data Editor ( roles/bigquery.dataEditor ) For more information about granting roles, see Manage access to projects, folders, and organizations .

