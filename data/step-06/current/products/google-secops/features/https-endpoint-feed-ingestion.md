---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.857Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "HTTPS endpoint feed ingestion"
feature_slug: "https-endpoint-feed-ingestion"
latest_feature_date: "2024-04-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
  - "https://docs.cloud.google.com/chronicle/docs/reference/ingestion-api"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview"
keywords:
  - "https"
  - "endpoint"
  - "feed"
  - "ingestion"
  - "feeds"
  - "can"
  - "push"
  - "logs"
---

# HTTPS endpoint feed ingestion

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Feeds can push logs through an HTTPS endpoint using the feed management UI or API, including Amazon Data Firehose, Google Cloud Pub/Sub, and webhooks.

## Extended Definition

Feeds can push logs through an HTTPS endpoint using the feed management UI or API, including Amazon Data Firehose, Google Cloud Pub/Sub, and webhooks.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/reference/ingestion-api](https://docs.cloud.google.com/chronicle/docs/reference/ingestion-api)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview](https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview)

## Supporting Pages

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-reference`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table outlines the different file sizes that Google SecOps feeds transformation supports: Operation Input type Recommended size Expected duration Max size Data Modeling CSV 10 GB Data Modeling CSV 30 min 10 GB Data Modeling CSV TBD TBD 2 GB Data Modeling XML / JSON 2 GB Data Modeling XLS / XLSX 1 min 50 MB Merge Files Any Varies on number of files 100 GB Decompress Files Non-ZIP Varies on number of files 10 GB (uncompressed) Decompress Files ZIP - Varies on number of files 4 GB (uncompressed) Log line limits and delimiters When ingesting text-based logs (JSON, CSV, or Syslog), ensure your data adheres to these specific ingestion limits: Maximum Line Size : A single log line cannot exceed 4MB .
- Specify the endpoint URL After you create a Pub/Sub push feed, specify the endpoint URL as follows: In Pub/Sub, create a push subscription, specify the HTTPS endpoint.
- Send multiple events in a single webhook request The following code sample shows how to format a single request body with multiple, newline-separated JSON objects after the curl --location item: --header 'Content-Type: application/json' \ --header 'X-goog-api-key: API KEY' \ --header 'X-Webhook-Access-Key: SECRET' \ --data '{"principal": {"asset id": "asset 123"}, "metadata": {"event type": "GENERIC EVENT", "product name": "Product Acme"}} {"principal": {"asset id": "asset 123"}, "metadata": {"event type": "GENERIC EVENT", "product name": "Product Acme"}}' Create an HTTPS webhook feed In the Google SecOps menu, select Settings , and then click Feeds .
- Impact of changing your linked Cloud Project on data feeds If you are updating the Google Cloud project associated with your Google SecOps instance, all feeds ingesting data using the following connectors will stop, and must be re-created manually: AMAZON S3 V2 AMAZON SQS V2 GOOGLE CLOUD STORAGE V2 AZURE BLOBSTORE V2 GOOGLE CLOUD STORAGE EVENT DRIVEN For all other feeds that are not utilizing these connectors, ingestion continues without any interruption.

### Ingestion API \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/ingestion-api](https://docs.cloud.google.com/chronicle/docs/reference/ingestion-api)
- Source ID: `site-docs-reference-2`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CUSTOMER ID= CUSTOMER ID Create a credential using an Ingestion Service Account Credential file and the Google Security Operations API Scope. credentials = service account.Credentials.from service account file(ING SERVICE ACCOUNT FILE, scopes=SCOPES) Build a requests Session Object to make authorized OAuth requests. http session = requests.AuthorizedSession(credentials) UDM Event example (example: US region) url = 'https://malachiteingestion-pa.googleapis.com/v2/udmevents:batchCreate' For other regions, you may need to use another regional endpoint for your API call; see https://cloud.google.com/chronicle/docs/reference/ingestion-api#regional endpoints json events are a collection of UDM events in (serialized) JSON format. body = { "customerId": CUSTOMER ID, "events": json.loads(json events), } response = http session.request("POST", url, json=body) For more complete examples, see: https://github.com/chronicle/api-samples-python/blob/master/ingestion/create entities.py https://github.com/chronicle/api-samples-python/blob/master/ingestion/create udm events.py https://github.com/chronicle/api-samples-python/blob/master/ingestion/create unstructured log entries.py The Service Account Credential provided to you corresponds to one Google SecOps instance.
- The log types are formatted using the following fields: Request GET https://malachiteingestion-pa.googleapis.com/v2/logtypes Response The following example illustrates the format of the information returned when calling the logtypes API endpoint. { "logtypes": [ { "log type": "BIND DNS", "description": "BIND DNS Server" }, { "log type": "WINDOWS DNS", "description": "Windows DNS" }, { "log type": "WINDOWS DHCP", "description": "Windows DHCP" }, { "log type": "WINEVTLOG", "description": "Windows Event Log" } ] } Response fields Field Value Description logtypes[] array Returns an array of the supported log types. logtypes[].log type string Log type.
- The Ingestion supports: UDM events Unstructured logs Log types retrieval You can forward your data to Google SecOps using either of the following types of Ingestion endpoints: Unified Data Model (UDM) event Unstructured log If you have formatted your log data using Google SecOps UDM, you can forward UDM events to your Google SecOps account using the UDM API endpoint.
- Request POST https://malachiteingestion-pa.googleapis.com/v2/unstructuredlogentries:batchCreate Request body The following example illustrates how you could format your log data using the unstructuredlogentries API endpoint.

### "Feed management overview \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview](https://docs.cloud.google.com/chronicle/docs/administration/feed-management-overview)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can use Google SecOps data feeds to ingest log data into your Google SecOps instance from the following sources: Cloud Storage services that are supported by Google SecOps, such as Google Cloud Storage and Amazon S3 Third-party data sources that are supported by Google SecOps and accessed through API, such as Microsoft 365 Files accessible directly using HTTP(S) requests Sources that support HTTPS push ingestion, such as webhooks, Pub/Sub, and Amazon Data Firehose.
- You can push logs using an HTTPS endpoint from these sources.
- Note: The log types listed in third-party endpoints in the Feed UI are not listed in any other Cloud Storage options like AWS S3, AWS SQS, Google Cloud Storage, and Azure Blob Store.
- API reference documentation : To view a list of supported log types for third-party API feeds, see Configuration by log type .

