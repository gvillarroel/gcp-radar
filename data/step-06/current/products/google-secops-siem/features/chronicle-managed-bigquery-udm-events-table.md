---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.648Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Chronicle-managed BigQuery udm_events table"
feature_slug: "chronicle-managed-bigquery-udm-events-table"
latest_feature_date: "2023-05-25"
deprecation_date: "2023-07-01"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/deprecations"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
keywords:
  - "chronicle"
  - "managed"
  - "bigquery"
  - "udm"
  - "events"
  - "table"
  - "deprecated"
  - "replaced"
---

# Chronicle-managed BigQuery udm_events table

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

The Chronicle-managed BigQuery udm_events table is deprecated and replaced by the events table; deprecated on 2023-07-01.

## Extended Definition

The Chronicle-managed BigQuery udm_events table is deprecated and replaced by the events table; deprecated on 2023-07-01.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)

## Supporting Pages

### "Feature deprecations \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/deprecations](https://docs.cloud.google.com/chronicle/docs/deprecations)
- Source ID: `site-api-reference`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- Chronicle BigQuery udm events table July 01, 2023 August 01, 2023 On or after July 1, 2023, the existing udm events table in Chronicle-managed BigQuery projects will be fully replaced with a new table named events .
- BigQuery data lake December 31, 2024 April 30, 2025 The shutdown of managed BigQuery resources and API keys associated with the chronicle-tla Google Cloud project has been extended to April 30, 2025.
- Google SecOps ingestion stats table in BigQuery April 18, 2024 May 15, 2024 The ingestion stats table in BigQuery has been deprecated and will no longer be updated after May 15, 2024.
- The managed BigQuery resources and API keys associated with the chronicle-tla Google Cloud project will be fully decommissioned by March 31, 2025.

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- For example, if you have a database called suspicious with a column of IP addresses you know are problematic, you can reference that database in Search instead of manually entering individual IP addresses in Search: events: $e.principal.ip in %susupicious.ip You can narrow your results by searching for specific metadata in addition to IP addresses, for example you might be specifically concerned with changes to user resources: events: $e.metadata.event type = "USER RESOURCE UPDATE CONTENT" $e.principal.ip in %susupicious.ip You can narrow a search against interrelated UDM fields and match against multiple data table columns.
- It then matches those events against the hostnames column and the ip column in the badApps data table. events: $e.metadata.event type = "NETWORK CONNECTION" $e.security result.action = "ALLOW" $e.target.asset.asset id = $assetid // Event hostname matches at least one value in table column hostname. $e.target.hostname in %badApps.hostname // Event IP matches at least one value in table column ip. $e.target.ip in %badApps.ip For more information, see Use data tables .
- Click an entity to display the Entity context dialog, which can include the following items: Asset name First time seen Last time seen IP addresses MAC addresses Number of alerts Highest alert count by rule Alerts-over-time bar graph Open Alerts & IOCs link View in Alerts Tab link Use the Pivot Table to analyze events The Pivot Table lets you analyze events using expressions and functions against the results from the search.
- You can summarize by the following options: sum count count distinct average stddev min max Specify a value of Event count to return the number of events identified for this particular search and Pivot Table.

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-reference-required-1`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- The following table outlines the different file sizes that Google SecOps feeds transformation supports: Operation Input type Recommended size Expected duration Max size Data Modeling CSV 10 GB Data Modeling CSV 30 min 10 GB Data Modeling CSV TBD TBD 2 GB Data Modeling XML / JSON 2 GB Data Modeling XLS / XLSX 1 min 50 MB Merge Files Any Varies on number of files 100 GB Decompress Files Non-ZIP Varies on number of files 10 GB (uncompressed) Decompress Files ZIP - Varies on number of files 4 GB (uncompressed) Log line limits and delimiters When ingesting text-based logs (JSON, CSV, or Syslog), ensure your data adheres to these specific ingestion limits: Maximum Line Size : A single log line cannot exceed 4MB .
- Send multiple events in a single webhook request The following code sample shows how to format a single request body with multiple, newline-separated JSON objects after the curl --location item: --header 'Content-Type: application/json' \ --header 'X-goog-api-key: API KEY' \ --header 'X-Webhook-Access-Key: SECRET' \ --data '{"principal": {"asset id": "asset 123"}, "metadata": {"event type": "GENERIC EVENT", "product name": "Product Acme"}} {"principal": {"asset id": "asset 123"}, "metadata": {"event type": "GENERIC EVENT", "product name": "Product Acme"}}' Create an HTTPS webhook feed In the Google SecOps menu, select Settings , and then click Feeds .
- You can select from the following feed source types: Amazon Data Firehose Amazon S3 (Deprecated) Amazon S3 (V2) Amazon SQS (Deprecated) Amazon SQS (V2) Azure Blob Storage (Deprecated) Azure Blob Storage (V2) Google Cloud Pub/Sub Cloud Storage (Deprecated) Cloud Storage (V2) Cloud Storage Event Driven Third party API Webhook Important: When using Amazon S3 (Deprecated), Amazon SQS (Deprecated), Azure Blob Storage (Deprecated), and Google Cloud Cloud Storage (Deprecated) feeds, make sure that you have a valid directory path.
- The following table describes the error messages that you might encounter when working with data feeds: Error Code Cause Troubleshooting ACCESS DENIED The authentication account provided in the feed configuration lacks required permissions.

