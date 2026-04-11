---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.556Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery interactive SQL translator configuration and debugging"
feature_slug: "bigquery-interactive-sql-translator-configuration-and-debugging"
latest_feature_date: "2024-04-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/migration-intro"
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
keywords:
  - "translator config"
  - "batch translator debugging"
  - "interactive SQL translator"
  - "batch SQL translator job"
  - "translator configuration"
  - "debugging"
  - "translation configuration"
  - "SQL translator jobs"
---

# BigQuery interactive SQL translator configuration and debugging

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery now lets users define translation configurations in the interactive SQL translator and use it to debug batch SQL translator jobs in GA.

## Extended Definition

The provided documentation indicates that BigQuery Migration Service offers SQL translation through two paths: a batch SQL translator for migrating SQL scripts in bulk and an interactive SQL translator for translating individual queries. The BigQuery `bq` CLI documentation also shows job-related debugging options (`--apilog` and `--httplib2 debuglevel`) that can be used to emit debug information during command execution. However, the excerpts do not explicitly confirm specific “interactive SQL translator configuration” fields or direct GA debugging support for batch SQL translator jobs.

## Evidence Summary

The migration introduction establishes batch vs interactive SQL translator usage, while the `bq` CLI reference contributes generic job debugging flags for command-line troubleshooting.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/migration-intro](https://docs.cloud.google.com/bigquery/docs/migration-intro)
- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)

## Supporting Pages

### Introduction to BigQuery Migration Service \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/migration-intro](https://docs.cloud.google.com/bigquery/docs/migration-intro)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- You can use the batch SQL translator to migrate your SQL scripts in bulk, or the interactive SQL translator to translate individual queries.
- For more information on using the interactive SQL translator, see Interactive SQL translator .

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- For example: --apilog = stdout --format = prettyjson --location = US [ query ] --use legacy sql = false --max rows = 100 --maximum bytes billed = 10000000 [ load ] --destination kms key = projects/myproject/locations/mylocation/keyRings/myRing/cryptoKeys/myKey The preceding example sets default values for the following flags: The global flag --apilog is set to stdout to print debugging output to the Google Cloud console.
- For example: --httplib2 debuglevel=1 Note: Multi-level debugging is not supported for this flag, so you can set DEBUG LEVEL to any positive number. --job id= JOB ID Specifies a job identifier for a new job.
- The default value is false . --httplib2 debuglevel= DEBUG LEVEL Specifies whether to show HTTP debugging information.

