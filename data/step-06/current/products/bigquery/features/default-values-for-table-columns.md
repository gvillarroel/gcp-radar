---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.723Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Default values for table columns"
feature_slug: "default-values-for-table-columns"
latest_feature_date: "2022-08-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
keywords:
  - "Schema field defaults"
  - "Column defaults in schema"
  - "Default column value"
  - "DEFAULT column option"
  - "column default values"
  - "Column DEFAULT clause"
  - "CREATE TABLE default"
  - "Default values"
---

# Default values for table columns

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery now supports setting default values on table columns.

## Extended Definition

The provided excerpt only shows that BigQuery supports setting default values for `bq` command-line flags via the `.bigqueryrc` configuration file (for example, defaults like `--dataset_id` and other global flags). It does not provide evidence about BigQuery table schema features such as schema field defaults or a `DEFAULT` clause for columns, so confirmation of that feature cannot be made from these sources alone.

## Evidence Summary

The cited page confirms CLI-level default-flag configuration in BigQuery, but the excerpts do not substantiate table-column default-value behavior.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)

## Supporting Pages

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- For example: --apilog = stdout --format = prettyjson --location = US [ query ] --use legacy sql = false --max rows = 100 --maximum bytes billed = 10000000 [ load ] --destination kms key = projects/myproject/locations/mylocation/keyRings/myRing/cryptoKeys/myKey The preceding example sets default values for the following flags: The global flag --apilog is set to stdout to print debugging output to the Google Cloud console.
- To stop running bq commands from a service account, run the following command: gcloud config unset auth/impersonate service account Set default values for command-line flags You can set default values for command-line flags by including them in the bq command-line tool's configuration file, .bigqueryrc .
- For more information, see Setting default values for command-line flags . --ca certificates file= PATH Specifies the location of your Certificate Authority Service (CA) file. --dataset id= DATASET ID Specifies the default dataset to use with the command.
- How to add flags to .bigqueryrc To add default values for command-line flags to .bigqueryrc : Place global flags at the top of the file without a header.

