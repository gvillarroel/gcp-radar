---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.771Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery CLI job metadata deletion"
feature_slug: "bigquery-cli-job-metadata-deletion"
latest_feature_date: "2021-09-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/exporting-data"
  - "https://docs.cloud.google.com/bigquery/docs/admin-intro"
keywords:
  - "specific job metadata deletion"
  - "bq job metadata delete"
  - "bq command-line tool"
  - "bq metadata delete"
  - "delete job metadata"
  - "CLI job metadata"
  - "job metadata management"
---

# BigQuery CLI job metadata deletion

Product: BigQuery
Coverage: LOW

## Step 02 Summary

Adds support in the bq command-line tool to delete metadata for a specific job.

## Extended Definition

Adds support in the bq command-line tool to delete metadata for a specific job.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)
- [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)

## Supporting Pages

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- To verify the version of the bq command-line tool, enter bq version . --max rows per request= MAX ROWS An integer that specifies the maximum number of rows to return per read. --project id= PROJECT Specifies the project to use for commands. --proxy address= PROXY Specifies the name or IP address of the proxy host to use for connecting to Google Cloud. --proxy password= PASSWORD Specifies the password to use when authenticating with the proxy host. --proxy port= PORT Specifies the port number to use to connect to the proxy host. --proxy username= USERNAME Specifies the username to use when authenticating with the proxy host. --quiet={true false} or -q={true false} To suppress status updates while jobs are running, set to true .
- For example, this command specifies false for the boolean flag --use legacy sql by placing no at the front of the flag: bq query --nouse legacy sql \ 'SELECT COUNT( ) FROM bigquery-public-data.samples.shakespeare' Alternatively, to specify false as the flag's argument, you can enter the following: bq query --use legacy sql = false \ 'SELECT COUNT( ) FROM bigquery-public-data.samples.shakespeare' Run commands in a script You can run the bq command-line tool in a script, as you would run a Google Cloud CLI command .
- CLI help You can get help with the bq command-line tool by running the following commands: Description Help command format Example Installed version bq version bq version List of all commands with examples bq help bq help Description of global flags bq --help bq --help Description of a particular command bq help COMMAND bq help mk Troubleshooting CLI commands To log requests sent and received: Add the --apilog= PATH TO FILE flag to save a log of operations to a local file.
- Synopsis bq help [ COMMAND ] Flags and arguments The bq help command uses the following flags and arguments: COMMAND Specifies a particular bq command-line tool command that you want to get online help for. bq insert Use the bq insert command to insert rows of newline-delimited, JSON-formatted data into a table from a file using the streaming insert.

### Export table data to Cloud Storage \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/exporting-data](https://docs.cloud.google.com/bigquery/docs/exporting-data)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Export table data You can export table data by: Using the Google Cloud console Using the bq extract command in the bq command-line tool Submitting an extract job using the API or client libraries Select one of the following: Console Open the BigQuery page in the Google Cloud console.
- Data format Supported compression types Details CSV GZIP You can control the CSV delimiter in your exported data by using the --field delimiter bq command-line tool flag or the configuration.extract.fieldDelimiter extract job property.
- To compress Avro data, use the bq command-line tool or the API and specify one of the supported compression types for Avro data: DEFLATE or SNAPPY .
- To learn more about the bq command-line tool, see Using the bq command-line tool .

### Introduction to BigQuery administration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/admin-intro](https://docs.cloud.google.com/bigquery/docs/admin-intro)
- Source ID: `site-docs-root-2`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- You can use the bq command-line tool to do tasks that aren't supported in the Google Cloud console, to prototype capabilities before encoding them in queries or API methods, or if you prefer working in a command-line interface.
- When a user initiates one of these tasks by using the Google Cloud console , the bq command-line tool , a SQL statement , or an API call , BigQuery automatically creates a job to execute the task.
- The bq command-line tool lets you do many administrative tasks by using bq commands.
- For more information, see Use the bq command-line tool .

