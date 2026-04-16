---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.720Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Job metadata deletion with bq"
feature_slug: "job-metadata-deletion-with-bq"
latest_feature_date: "2021-09-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/tables"
  - "https://docs.cloud.google.com/bigquery/docs/bq-command-line-tool"
keywords:
  - "job"
  - "metadata"
  - "deletion"
  - "bq"
  - "command"
  - "line"
  - "tool"
  - "can"
---

# Job metadata deletion with bq

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The bq command-line tool can delete metadata for a specific job.

## Extended Definition

The bq command-line tool can delete metadata for a specific job.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- [https://docs.cloud.google.com/bigquery/docs/bq-command-line-tool](https://docs.cloud.google.com/bigquery/docs/bq-command-line-tool)

## Supporting Pages

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- For more information about using the bq update command, see the following: Updating dataset properties Managing tables Updating views Updating labels Working with transfers Updating table snapshot metadata bq version Use the bq version command to display the version number of your bq command-line tool.
- To verify the version of the bq command-line tool, enter bq version . --max rows per request= MAX ROWS An integer that specifies the maximum number of rows to return per read. --project id= PROJECT Specifies the project to use for commands. --proxy address= PROXY Specifies the name or IP address of the proxy host to use for connecting to Google Cloud. --proxy password= PASSWORD Specifies the password to use when authenticating with the proxy host. --proxy port= PORT Specifies the port number to use to connect to the proxy host. --proxy username= USERNAME Specifies the username to use when authenticating with the proxy host. --quiet={true false} or -q={true false} To suppress status updates while jobs are running, set to true .
- For example, this command specifies false for the boolean flag --use legacy sql by placing no at the front of the flag: bq query --nouse legacy sql \ 'SELECT COUNT( ) FROM bigquery-public-data.samples.shakespeare' Alternatively, to specify false as the flag's argument, you can enter the following: bq query --use legacy sql = false \ 'SELECT COUNT( ) FROM bigquery-public-data.samples.shakespeare' Run commands in a script You can run the bq command-line tool in a script, as you would run a Google Cloud CLI command .
- CLI help You can get help with the bq command-line tool by running the following commands: Description Help command format Example Installed version bq version bq version List of all commands with examples bq help bq help Description of global flags bq --help bq --help Description of a particular command bq help COMMAND bq help mk Troubleshooting CLI commands To log requests sent and received: Add the --apilog= PATH TO FILE flag to save a log of operations to a local file.

### Create and use tables \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/tables](https://docs.cloud.google.com/bigquery/docs/tables)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- For example, this: project name....dataset name..table name Becomes this: project name.dataset name.table name Create tables You can create a table in BigQuery in the following ways: Manually by using the Google Cloud console or the bq command-line tool bq mk command.
- You can add these optional properties when you create a table using the bq command-line tool or API.
- Provide the schema inline using the bq command-line tool.
- Submit a JSON schema file using the bq command-line tool.

### Use the bq tool \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bq-command-line-tool](https://docs.cloud.google.com/bigquery/docs/bq-command-line-tool)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the bq tool In this tutorial, you learn how to use bq , the Python-based command-line interface (CLI) tool for BigQuery to create a dataset, load sample data, and query tables.
- For a complete reference of all bq commands and flags, see the bq command-line tool reference .
- Activate Cloud Shell At the bottom of the Google Cloud console, a Cloud Shell session starts and displays a command-line prompt.
- Enter the following command to create a dataset named babynames : bq mk --dataset babynames The output is similar to the following: Dataset 'babynames' successfully created.

