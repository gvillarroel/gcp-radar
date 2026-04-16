---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.611Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "HTTPS endpoint feed ingestion"
feature_slug: "https-endpoint-feed-ingestion"
latest_feature_date: "2024-04-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
  - "https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs"
  - "https://docs.cloud.google.com/chronicle/docs/administration/create-azure-feed"
keywords:
  - "https"
  - "endpoint"
  - "feed"
  - "ingestion"
  - "secops"
  - "can"
  - "ingest"
  - "logs"
---

# HTTPS endpoint feed ingestion

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Google SecOps can ingest logs through feeds that push data to an HTTPS endpoint using the feed management UI or API.

## Extended Definition

Google SecOps can ingest logs through feeds that push data to an HTTPS endpoint using the feed management UI or API.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs](https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs)
- [https://docs.cloud.google.com/chronicle/docs/administration/create-azure-feed](https://docs.cloud.google.com/chronicle/docs/administration/create-azure-feed)

## Supporting Pages

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-reference-required-1`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table outlines the different file sizes that Google SecOps feeds transformation supports: Operation Input type Recommended size Expected duration Max size Data Modeling CSV 10 GB Data Modeling CSV 30 min 10 GB Data Modeling CSV TBD TBD 2 GB Data Modeling XML / JSON 2 GB Data Modeling XLS / XLSX 1 min 50 MB Merge Files Any Varies on number of files 100 GB Decompress Files Non-ZIP Varies on number of files 10 GB (uncompressed) Decompress Files ZIP - Varies on number of files 4 GB (uncompressed) Log line limits and delimiters When ingesting text-based logs (JSON, CSV, or Syslog), ensure your data adheres to these specific ingestion limits: Maximum Line Size : A single log line cannot exceed 4MB .
- Impact of changing your linked Cloud Project on data feeds If you are updating the Google Cloud project associated with your Google SecOps instance, all feeds ingesting data using the following connectors will stop, and must be re-created manually: AMAZON S3 V2 AMAZON SQS V2 GOOGLE CLOUD STORAGE V2 AZURE BLOBSTORE V2 GOOGLE CLOUD STORAGE EVENT DRIVEN For all other feeds that are not utilizing these connectors, ingestion continues without any interruption.
- Send multiple events in a single webhook request The following code sample shows how to format a single request body with multiple, newline-separated JSON objects after the curl --location item: --header 'Content-Type: application/json' \ --header 'X-goog-api-key: API KEY' \ --header 'X-Webhook-Access-Key: SECRET' \ --data '{"principal": {"asset id": "asset 123"}, "metadata": {"event type": "GENERIC EVENT", "product name": "Product Acme"}} {"principal": {"asset id": "asset 123"}, "metadata": {"event type": "GENERIC EVENT", "product name": "Product Acme"}}' Create an HTTPS webhook feed In the Google SecOps menu, select Settings , and then click Feeds .
- Specify the endpoint URL In Amazon Data Firehose, specify the HTTPS endpoint and access key, as follows: Append the API key to the feed endpoint URL and specify this URL as the HTTP endpoint URL in the following format: ENDPOINT URL ?key= API KEY Replace the following: ENDPOINT URL : the feed endpoint URL.

### "Ingest Google Cloud data \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs](https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs)
- Source ID: `site-api-reference`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Available log types include: Cloud Audit Logs Cloud NAT Cloud DNS Cloud Next Generation Firewall Cloud Intrusion Detection System Cloud Load Balancing Cloud SQL Windows Event logs Linux syslog Linux Sysmon Zeek Google Kubernetes Engine Audit Daemon ( auditd ) Apigee reCAPTCHA Enterprise Cloud Run logs ( GCP RUN ) Google Cloud Abuse Events Google Cloud DNS Advanced Threat Detection ( GCP DNS ATD ) Model Armor logs For details about the specific log filters and more ingestion details, see Export Google Cloud logs to Google SecOps.
- The following list is organized by log type and corresponding Google SecOps ingestion label: Cloud Audit Logs ( GCP CLOUDAUDIT ): This includes Admin Activity, Data Access, System Event, Access Transparency, and Policy Denied logs.
- When you configure Google Cloud data ingestion, Google SecOps doesn't create any resource in your Google Cloud organization; the internal system publishes Google Cloud logs to Google SecOps.
- For more information about exporting specific context logs and ingesting them into Google SecOps, see Default parser configuration and ingestion and search for 'context' or 'analysis'.

### "Create an Azure Event Hub feed \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/create-azure-feed](https://docs.cloud.google.com/chronicle/docs/administration/create-azure-feed)
- Source ID: `site-docs-reference-required-1`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The label to be applied to the events from this feed Note: Google SecOps manages its own checkpointing when ingesting data from Azure Event Hub.
- Configure the feed in Google SecOps : configure the feed in Google SecOps to connect to your Azure event hub and to begin ingesting data.
- To ensure optimal data ingestion, deploy the Event Hub namespace in the same region as your Google SecOps instance.
- This ensures that logs aren't deleted before ingestion resumes after a quota throttle.

