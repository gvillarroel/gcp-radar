---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.507Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Single-call indicator ingestion"
feature_slug: "single-call-indicator-ingestion"
latest_feature_date: "2025-12-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/detection-delays"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
keywords:
  - "single"
  - "call"
  - "indicator"
  - "ingestion"
  - "connector"
  - "can"
  - "ingest"
  - "complete"
---

# Single-call indicator ingestion

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

The connector can ingest complete indicator objects, including attributes, tags, and security labels, in one API call.

## Extended Definition

The connector can ingest complete indicator objects, including attributes, tags, and security labels, in one API call.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/detection-delays](https://docs.cloud.google.com/chronicle/docs/detection/detection-delays)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)

## Supporting Pages

### "Understand rule detection delays \_|\_ Google Security Operations \_|\_\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/detection-delays](https://docs.cloud.google.com/chronicle/docs/detection/detection-delays)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Complex single-event rules These rules are more susceptible to detection delays because they include match windows or reference lists: Windowed single-event rules These are single-event rules that include a match window and typically have a slightly longer delay than other single-event rules.
- Follow this suggested approach to investigate and troubleshoot rule detection delays: Check for obvious delays: Determine if any ingestion delay exists: In the Google SecOps console, go to Detection > Rules and detections .
- Re-enrichment of UDM events Underlying data changes: If the underlying data changes after an event is ingested, the system reprocesses historical data and updates events for up to 24 hours after ingestion.
- Factors contributing to rule detection delays The rule type , run frequency , and the speed of Google SecOps's ingestion are key factors in rule detection delays.

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-reference-required-1`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- The following table outlines the different file sizes that Google SecOps feeds transformation supports: Operation Input type Recommended size Expected duration Max size Data Modeling CSV 10 GB Data Modeling CSV 30 min 10 GB Data Modeling CSV TBD TBD 2 GB Data Modeling XML / JSON 2 GB Data Modeling XLS / XLSX 1 min 50 MB Merge Files Any Varies on number of files 100 GB Decompress Files Non-ZIP Varies on number of files 10 GB (uncompressed) Decompress Files ZIP - Varies on number of files 4 GB (uncompressed) Log line limits and delimiters When ingesting text-based logs (JSON, CSV, or Syslog), ensure your data adheres to these specific ingestion limits: Maximum Line Size : A single log line cannot exceed 4MB .
- Impact of changing your linked Cloud Project on data feeds If you are updating the Google Cloud project associated with your Google SecOps instance, all feeds ingesting data using the following connectors will stop, and must be re-created manually: AMAZON S3 V2 AMAZON SQS V2 GOOGLE CLOUD STORAGE V2 AZURE BLOBSTORE V2 GOOGLE CLOUD STORAGE EVENT DRIVEN For all other feeds that are not utilizing these connectors, ingestion continues without any interruption.
- We recommend using the v2 connector framework, which uses the Google Cloud Storage Transfer Service (STS) for near real-time ingestion.
- Control the rate of ingestion When the data ingestion rate for a tenant reaches a certain threshold, Google Security Operations restricts the rate of ingestion for new data feeds to prevent a source with a high ingestion rate from affecting the ingestion rate of another data source.

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- For example: additional.fields["key"]="value" Examples of searches using specific key-value pairs in the additional and labels fields: Search for events containing specified key-value pairs: additional.fields["pod name"] = "kube-scheduler" metadata.ingestion labels["MetadataKeyDeletion"] = "startup-script" Use the AND operator with key-value pair searches: additional.fields["pod name"] = "kube-scheduler" AND additional.fields["pod name1"] = "kube-scheduler1" Search for all events that contain the specified key, regardless of the value: additional.fields["pod name"] != "" Search for events that contain a specific key, using a regular expression: additional.fields.value.string value = "mystring" Note: You can also use value.bool value or value.number value for boolean and numeric matches.
- Searching for text in Values returns results as follows: If the string is found at the beginning or end of the value, it is highlighted in the result, along with the UDM field name and the log ingestion time.
- Definition of events and alerts An event is generated from a raw log source that is ingested into Google SecOps and processed by Google SecOps's ingestion and normalization process.
- This feature is designed for teams that require external analysis processing or audit trails where you must preserve the relationship between normalized data and original ingestion.

