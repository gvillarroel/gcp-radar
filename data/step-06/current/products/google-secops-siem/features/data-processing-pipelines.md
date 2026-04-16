---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.492Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Data processing pipelines"
feature_slug: "data-processing-pipelines"
latest_feature_date: "2026-03-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs"
  - "https://docs.cloud.google.com/chronicle/docs/detection/detection-delays"
keywords:
  - "processing"
  - "pipelines"
  - "filter"
  - "transform"
  - "redact"
  - "secops"
  - "before"
  - "ingestion"
---

# Data processing pipelines

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Data processing pipelines filter, transform, and redact Google SecOps data before ingestion.

## Extended Definition

Data processing pipelines filter, transform, and redact Google SecOps data before ingestion.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs](https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs)
- [https://docs.cloud.google.com/chronicle/docs/detection/detection-delays](https://docs.cloud.google.com/chronicle/docs/detection/detection-delays)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Definition of events and alerts An event is generated from a raw log source that is ingested into Google SecOps and processed by Google SecOps's ingestion and normalization process.
- This feature is designed for teams that require external analysis processing or audit trails where you must preserve the relationship between normalized data and original ingestion.
- You can also filter your searches by clicking filter alt Filter next to the search bar and sort searches by Show all , Google SecOps defined , Authored by Me , or Shared .
- For example: additional.fields["key"]="value" Examples of searches using specific key-value pairs in the additional and labels fields: Search for events containing specified key-value pairs: additional.fields["pod name"] = "kube-scheduler" metadata.ingestion labels["MetadataKeyDeletion"] = "startup-script" Use the AND operator with key-value pair searches: additional.fields["pod name"] = "kube-scheduler" AND additional.fields["pod name1"] = "kube-scheduler1" Search for all events that contain the specified key, regardless of the value: additional.fields["pod name"] != "" Search for events that contain a specific key, using a regular expression: additional.fields.value.string value = "mystring" Note: You can also use value.bool value or value.number value for boolean and numeric matches.

### "Ingest Google Cloud data \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs](https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs)
- Source ID: `site-api-reference`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- Available log types include: Cloud Audit Logs Cloud NAT Cloud DNS Cloud Next Generation Firewall Cloud Intrusion Detection System Cloud Load Balancing Cloud SQL Windows Event logs Linux syslog Linux Sysmon Zeek Google Kubernetes Engine Audit Daemon ( auditd ) Apigee reCAPTCHA Enterprise Cloud Run logs ( GCP RUN ) Google Cloud Abuse Events Google Cloud DNS Advanced Threat Detection ( GCP DNS ATD ) Model Armor logs For details about the specific log filters and more ingestion details, see Export Google Cloud logs to Google SecOps.
- When you migrate an existing Google SecOps instance so that it binds to a project that you own, and if direct ingestion was configured before the migration, the direct ingestion configuration is migrated as well.
- Option 1: Direct ingestion A special Cloud Logging filter can be configured in Google Cloud to send specific log types to Google SecOps in real-time.
- Use this option if you need to filter logs before they reach Google SecOps.

### "Understand rule detection delays \_|\_ Google Security Operations \_|\_\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/detection-delays](https://docs.cloud.google.com/chronicle/docs/detection/detection-delays)
- Source ID: `site-docs-root`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- Unpredicted delays : These are rule-specific or event-specific delays caused by many factors, including delays in event data arriving at Google SecOps, transient slowness in processing pipelines within Google SecOps services, re-enrichment , and other data processing delays .
- Follow this suggested approach to investigate and troubleshoot rule detection delays: Check for obvious delays: Determine if any ingestion delay exists: In the Google SecOps console, go to Detection > Rules and detections .
- Factors contributing to rule detection delays The rule type , run frequency , and the speed of Google SecOps's ingestion are key factors in rule detection delays.
- This calculated delay triggers detection delays because rules prioritize processing based on real time ingestion.

