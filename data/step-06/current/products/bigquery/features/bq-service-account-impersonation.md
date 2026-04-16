---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.623Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "bq service account impersonation"
feature_slug: "bq-service-account-impersonation"
latest_feature_date: "2023-02-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference"
  - "https://docs.cloud.google.com/bigquery/docs/bq-command-line-tool"
  - "https://docs.cloud.google.com/bigquery/docs/authentication"
keywords:
  - "bq"
  - "account"
  - "impersonation"
  - "command"
  - "line"
  - "tool"
  - "supports"
  - "running"
---

# bq service account impersonation

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The bq command-line tool supports running commands with service account impersonation.

## Extended Definition

The bq command-line tool supports running commands with service account impersonation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- [https://docs.cloud.google.com/bigquery/docs/bq-command-line-tool](https://docs.cloud.google.com/bigquery/docs/bq-command-line-tool)
- [https://docs.cloud.google.com/bigquery/docs/authentication](https://docs.cloud.google.com/bigquery/docs/authentication)

## Supporting Pages

### bq command-line tool reference \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference](https://docs.cloud.google.com/bigquery/docs/reference/bq-cli-reference)
- Source ID: `site-docs-reference`
- Final score: 205
- Re-rank relevance: N/A

Evidence snippets:
- To stop running bq commands from a service account, run the following command: gcloud config unset auth/impersonate service account Set default values for command-line flags You can set default values for command-line flags by including them in the bq command-line tool's configuration file, .bigqueryrc .
- To verify the version of the bq command-line tool, enter bq version . --max rows per request= MAX ROWS An integer that specifies the maximum number of rows to return per read. --project id= PROJECT Specifies the project to use for commands. --proxy address= PROXY Specifies the name or IP address of the proxy host to use for connecting to Google Cloud. --proxy password= PASSWORD Specifies the password to use when authenticating with the proxy host. --proxy port= PORT Specifies the port number to use to connect to the proxy host. --proxy username= USERNAME Specifies the username to use when authenticating with the proxy host. --quiet={true false} or -q={true false} To suppress status updates while jobs are running, set to true .
- CLI help You can get help with the bq command-line tool by running the following commands: Description Help command format Example Installed version bq version bq version List of all commands with examples bq help bq help Description of global flags bq --help bq --help Description of a particular command bq help COMMAND bq help mk Troubleshooting CLI commands To log requests sent and received: Add the --apilog= PATH TO FILE flag to save a log of operations to a local file.
- To start running bq commands using service account impersonation , run the following command: gcloud config set auth/impersonate service account SERVICE ACCOUNT NAME Replace SERVICE ACCOUNT NAME with your service account name. bq commands that you run now use the service account credentials.

### Use the bq tool \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bq-command-line-tool](https://docs.cloud.google.com/bigquery/docs/bq-command-line-tool)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use the bq tool In this tutorial, you learn how to use bq , the Python-based command-line interface (CLI) tool for BigQuery to create a dataset, load sample data, and query tables.
- For a complete reference of all bq commands and flags, see the bq command-line tool reference .
- Activate Cloud Shell At the bottom of the Google Cloud console, a Cloud Shell session starts and displays a command-line prompt.
- If you're working in a local shell, copy or move the file yob2024.txt into the directory where you're running the bq tool.

### Authenticate to BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/authentication](https://docs.cloud.google.com/bigquery/docs/authentication)
- Source ID: `site-docs-reference-required-15`
- Final score: 159
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For a local development environment You can set up credentials for a local development environment in the following ways: User credentials for client libraries or third-party tools User credentials for REST requests from the command line Service account impersonation Client libraries or third-party tools Set up Application Default Credentials (ADC) in your local environment: Install the Google Cloud CLI.
- To set up a local ADC file with service account impersonation, use the --impersonate-service-account flag with the gcloud auth application-default login command : gcloud auth application-default login --impersonate-service-account = SERVICE ACCT EMAIL For more information about service account impersonation, see Use service account impersonation .
- You can set up the gcloud CLI to use service account impersonation by using the gcloud config set command : gcloud config set auth/impersonate service account SERVICE ACCT EMAIL For select languages, you can use service account impersonation to create a local ADC file for use by client libraries.
- To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Execute the following command: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://iam.googleapis.com/v1/projects/ PROJECT ID /serviceAccounts" PowerShell (Windows) Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT ID /serviceAccounts" Select-Object -Expand Content For more information about authenticating using REST and gRPC, see Authenticate for using REST .

