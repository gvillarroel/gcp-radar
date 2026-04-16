---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.858Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "BigQuery ingestion_stats table"
feature_slug: "bigquery-ingestion-stats-table"
latest_feature_date: "2024-04-22"
deprecation_date: "2024-05-15"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/deprecations"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
  - "https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api"
keywords:
  - "bigquery"
  - "ingestion"
  - "stats"
  - "table"
  - "deprecated"
  - "will"
  - "stop"
  - "being"
---

# BigQuery ingestion_stats table

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

The ingestion_stats table in BigQuery is deprecated and will stop being updated; deprecated on 2024-05-15.

## Extended Definition

The ingestion_stats table in BigQuery is deprecated and will stop being updated; deprecated on 2024-05-15.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api](https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api)

## Supporting Pages

### "Feature deprecations \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)
- Source ID: `site-docs-reference-2`
- Final score: 171
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google SecOps ingestion stats table in BigQuery April 18, 2024 May 15, 2024 The ingestion stats table in BigQuery has been deprecated and will no longer be updated after May 15, 2024.
- Chronicle BigQuery udm events table July 01, 2023 August 01, 2023 On or after July 1, 2023, the existing udm events table in Chronicle-managed BigQuery projects will be fully replaced with a new table named events .
- Use the Google SecOps ingestion metrics table in BigQuery, which provides more accurate ingestion metrics.
- NETSKOPE ALERT log type October 15, 2025 November 30, 2025 As of October 15, 2025, the Netskope Alerts v1 connector (for the NETSKOPE ALERT log type) has been deprecated and will be removed on November 30, 2025.

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Impact of changing your linked Cloud Project on data feeds If you are updating the Google Cloud project associated with your Google SecOps instance, all feeds ingesting data using the following connectors will stop, and must be re-created manually: AMAZON S3 V2 AMAZON SQS V2 GOOGLE CLOUD STORAGE V2 AZURE BLOBSTORE V2 GOOGLE CLOUD STORAGE EVENT DRIVEN For all other feeds that are not utilizing these connectors, ingestion continues without any interruption.
- The following table outlines the different file sizes that Google SecOps feeds transformation supports: Operation Input type Recommended size Expected duration Max size Data Modeling CSV 10 GB Data Modeling CSV 30 min 10 GB Data Modeling CSV TBD TBD 2 GB Data Modeling XML / JSON 2 GB Data Modeling XLS / XLSX 1 min 50 MB Merge Files Any Varies on number of files 100 GB Decompress Files Non-ZIP Varies on number of files 10 GB (uncompressed) Decompress Files ZIP - Varies on number of files 4 GB (uncompressed) Log line limits and delimiters When ingesting text-based logs (JSON, CSV, or Syslog), ensure your data adheres to these specific ingestion limits: Maximum Line Size : A single log line cannot exceed 4MB .
- What to expect during migration For impacted feeds, you will observe the following changes: Feed Status : Feeds created prior to the migration will immediately stop pulling live data and will become read-only.
- Note: When you disable a feed, it prevents new data from being added to the ingestion queue.

### "Forwarder Management \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api](https://docs.cloud.google.com/chronicle/docs/install/forwarder-management-api)
- Source ID: `site-api-reference`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SERVICE ACCOUNT FILE is the full path to the apikeys-demo.json file ToDo: Replace this with the full path to your OAuth2 credentials SERVICE ACCOUNT FILE = '/customer-keys/apikeys-demo.json' Create a credential using the Google Developer Service Account Credential and Backstory API Scope. credentials = service account.Credentials.from service account file(SERVICE ACCOUNT FILE, scopes=SCOPES) Build a requests Session Object to make authorized OAuth requests. http session = requests.AuthorizedSession(credentials) Your endpoint GET POST PATCH etc. code will vary below Reference List example (for US region) url = 'https://backstory.googleapis.com/v2/lists/COLDRIVER SHA256' You might need another regional endpoint for your API call; see https://cloud.google.com/chronicle/docs/reference/ingestion-api#regional endpoints requests GET example response = http session.request("GET", url) POST example uses json body = { "foo": "bar" } response = http session.request("POST", url, json=body) PATCH example uses params and json params = { "foo": "bar" } response = http session.request("PATCH", url, params=params, json=body) For more complete examples, see: https://github.com/chronicle/api-samples-python/ Backstory API query limits The Backstory API enforces limits on the volume of requests that can be made by any one customer against the Google SecOps platform.
- The forwarder component is being phased out of the Google SecOps platform and will reach end-of-life (EOL) in January 2027.
- Note: This is a global setting that applies to the forwarder and the forwarder's collectors, unless it is overridden at the collector level. metadata.labels.key string Optional The key for a field in the metadata labels list. metadata.labels.value string Optional The value for a field in the metadata labels list. regex filters.description string Optional Describes what is being filtered and why. regex filters.regexp string Optional The regular expression used to match against each incoming line. regex filters.behavior enum Optional Specifies the state of the server functionality.
- Note: This is a global setting that applies to the forwarder and the forwarder's collectors, unless it is overridden at the collector level. metadata.labels.key string Optional The key for a field in the metadata labels list. metadata.labels.value string Optional The value for a field in the metadata labels list. regex filters.description string Optional Describes what is being filtered and why. regex filters.regexp string Optional The regular expression used to match against each incoming line. regex filters.behavior enum Optional Specifies the state of the server functionality.

