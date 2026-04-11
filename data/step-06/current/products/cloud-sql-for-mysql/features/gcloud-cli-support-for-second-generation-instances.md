---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.984Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "gcloud CLI support for Second Generation instances"
feature_slug: "gcloud-cli-support-for-second-generation-instances"
latest_feature_date: "2017-05-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli"
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-performance-capture"
  - "https://docs.cloud.google.com/sql/docs/mysql/cloud-sdk"
keywords:
  - "gcloud"
  - "cli"
  - "for"
  - "second"
  - "generation"
  - "instances"
  - "the"
  - "command"
---

# gcloud CLI support for Second Generation instances

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

The gcloud command-line tool provides general availability support for Cloud SQL Second Generation instances without requiring beta commands.

## Extended Definition

The gcloud command-line tool provides general availability support for Cloud SQL Second Generation instances without requiring beta commands.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-performance-capture](https://docs.cloud.google.com/sql/docs/mysql/configure-performance-capture)
- [https://docs.cloud.google.com/sql/docs/mysql/cloud-sdk](https://docs.cloud.google.com/sql/docs/mysql/cloud-sdk)

## Supporting Pages

### "Build context sets using Gemini CLI \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli)
- Source ID: `site-iam-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Run the following commands in your terminal to authenticate: gcloud auth application-default login Configure the tools.yaml file The extension requires a database connection for context generation, which is supported by the MCP Toolbox and defined within the tools.yaml configuration file.
- Enable cloudsql vector flag. gcloud sql instances patch INSTANCE NAME --database-flags=cloudsql vector=on Enable enable-google-ml-integration flag to allow the Cloud SQL for MySQL instance to integrate with Vertex AI. gcloud sql instances patch INSTANCE NAME --enable-google-ml-integration Create a vector column to store city embeddings ALTER TABLE airports ADD COLUMN city embedding VECTOR ( 768 ); Generate and store vector embeddings for city names UPDATE airports SET city embedding = mysql . ml embedding ( 'text-embedding-005' , city ) WHERE city IS NOT NULL ; To enable the Cloud SQL for MySQL instance to perform trigram value searches, perform the following steps.
- Grant executesql permission to Cloud SQL instance To grant the executesql permission to Cloud SQL instance and enable the Cloud SQL Data API, run the following command: gcloud config set project PROJECT ID gcloud components update gcloud beta sql instances patch INSTANCE ID --data-api-access=ALLOW DATA API Replace the following: PROJECT ID : The ID of your Google Cloud project.
- Enable ngram token size flag. gcloud sql instances patch INSTANCE NAME --database-flags=ngram token size=3 Create a FULLTEXT index for trigram matching on the airport name CREATE FULLTEXT INDEX idx ngram airports name ON airports ( name ) WITH PARSER ngram ; Prepare your environment You can build context set files from any local development environment or IDE.

### "Configure performance capture \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-performance-capture](https://docs.cloud.google.com/sql/docs/mysql/configure-performance-capture)
- Source ID: `site-iam-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", }, "performanceCaptureConfig": { "enabled": true, "probingIntervalSeconds": PROBING INTERVAL SECONDS , "probeThreshold": PROBE THRESHOLD , "runningThreadsThreshold": RUNNING THREADS THRESHOLD , "secondsBehindSourceThreshold": SECONDS BEHIND SOURCE THRESHOLD , "transactionDurationThreshold": TRANSACTION DURATION THRESHOLD }, } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE " }, "performanceCaptureConfig": { "enabled": true, "probingIntervalSeconds": PROBING INTERVAL SECONDS , "probeThreshold": PROBE THRESHOLD , "runningThreadsThreshold": RUNNING THREADS THRESHOLD , "secondsBehindSourceThreshold": SECONDS BEHIND SOURCE THRESHOLD , "transactionDurationThreshold": TRANSACTION DURATION THRESHOLD } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: PATCH https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID Request JSON body: { "performanceCaptureConfig": { "enabled": PERFORMANCE CAPTURE ENABLE , "probingIntervalSeconds": PROBING INTERVAL SECONDS , "probeThreshold": PROBE THRESHOLD , "runningThreadsThreshold": RUNNING THREADS THRESHOLD , "secondsBehindSourceThreshold": SECONDS BEHIND SOURCE THRESHOLD , "transactionDurationThreshold": TRANSACTION DURATION THRESHOLD }, } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: PATCH https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID Request JSON body: { "performanceCaptureConfig": { "enabled": PERFORMANCE CAPTURE ENABLE , "probingIntervalSeconds": PROBING INTERVAL SECONDS , "probeThreshold": PROBE THRESHOLD , "runningThreadsThreshold": RUNNING THREADS THRESHOLD , "secondsBehindSourceThreshold": SECONDS BEHIND SOURCE THRESHOLD , "transactionDurationThreshold": TRANSACTION DURATION THRESHOLD }, } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### About the gcloud CLI \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/cloud-sdk](https://docs.cloud.google.com/sql/docs/mysql/cloud-sdk)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- You can get help for the tool, resources, and commands by using the --help flag: gcloud sql --help gcloud sql instances --help gcloud sql instances create --help The help displayed with the --help flag is also available in the gcloud CLI reference for gcloud sql .
- The first command below lists the configuration for the gcloud CLI, including any default project already set.
- The second command sets the default project. gcloud config list gcloud config set project [ PROJECT ID ] Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The gcloud CLI uses the Cloud SQL Admin API to access Cloud SQL, so you must enable the API before you can use the gcloud CLI to access Cloud SQL.

