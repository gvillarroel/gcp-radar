---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:24:01.901Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Data processing pipelines"
feature_slug: "data-processing-pipelines"
latest_feature_date: "2026-03-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
keywords:
  - "processing"
  - "pipelines"
  - "let"
  - "you"
  - "filter"
  - "transform"
  - "and"
  - "redact"
---

# Data processing pipelines

Product: Google SecOps
Coverage: LOW

## Step 02 Summary

Data processing pipelines let you filter, transform, and redact Google SecOps data before ingestion.

## Extended Definition

Data processing pipelines let you filter, transform, and redact Google SecOps data before ingestion.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)

## Supporting Pages

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- You can now use the Data Processing pipelines to filter, transform, and redact Google SecOps data before ingestion.
- This feature provides more control over ingested data, letting you reduce costs by filtering out unwanted events, transform data for better compatibility, and protect sensitive information by redacting or masking values before storage.
- Key enhancements Developer and IDE enhancements : Centralized management: A unified, single dashboard lets you browse, filter, and manage both custom and curated rules from one location.
- This update provides more granular control over your queries, letting you filter by nested fields from events and entities within a detection.

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- You can now use the Data Processing pipelines to filter, transform, and redact Google SecOps data before ingestion.
- This feature provides more control over ingested data, letting you reduce costs by filtering out unwanted events, transform data for better compatibility, and protect sensitive information by redacting or masking values before storage.
- Key enhancements Developer and IDE enhancements : Centralized management: A unified, single dashboard lets you browse, filter, and manage both custom and curated rules from one location.
- This update provides more granular control over your queries, letting you filter by nested fields from events and entities within a detection.

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- Filter events field The Filter events field displays the filters you've created, and lets you apply them to the Search field, or remove them as needed.
- After you adjust the time range, the Filtered events and Query events checkboxes appear, which lets you further limit the types of events displayed.
- For example: additional.fields["key"]="value" Examples of searches using specific key-value pairs in the additional and labels fields: Search for events containing specified key-value pairs: additional.fields["pod name"] = "kube-scheduler" metadata.ingestion labels["MetadataKeyDeletion"] = "startup-script" Use the AND operator with key-value pair searches: additional.fields["pod name"] = "kube-scheduler" AND additional.fields["pod name1"] = "kube-scheduler1" Search for all events that contain the specified key, regardless of the value: additional.fields["pod name"] != "" Search for events that contain a specific key, using a regular expression: additional.fields.value.string value = "mystring" Note: You can also use value.bool value or value.number value for boolean and numeric matches.
- Click an entity to display the Entity context dialog, which can include the following items: Asset name First time seen Last time seen IP addresses MAC addresses Number of alerts Highest alert count by rule Alerts-over-time bar graph Open Alerts & IOCs link View in Alerts Tab link Use the Pivot Table to analyze events The Pivot Table lets you analyze events using expressions and functions against the results from the search.

