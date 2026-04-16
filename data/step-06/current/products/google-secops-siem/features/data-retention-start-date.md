---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.532Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Data retention start date"
feature_slug: "data-retention-start-date"
latest_feature_date: "2025-09-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/about/data-retention"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
keywords:
  - "retention"
  - "start"
  - "date"
  - "adds"
  - "read"
  - "only"
  - "page"
  - "shows"
---

# Data retention start date

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Adds a read-only Data Retention page that shows the start date of an account's data retention period.

## Extended Definition

Adds a read-only Data Retention page that shows the start date of an account's data retention period.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/about/data-retention](https://docs.cloud.google.com/chronicle/docs/about/data-retention)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)

## Supporting Pages

### "Data retention in your Google SecOps account \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/about/data-retention](https://docs.cloud.google.com/chronicle/docs/about/data-retention)
- Source ID: `site-docs-reference-required-1`
- Final score: 188
- Re-rank relevance: N/A

Evidence snippets:
- View your data retention start date in Google SecOps The Data Retention page is a read-only section within the SIEM settings that shows the date when data retention began for your account.
- The Data Retention page displays the retention start date in yyyy-mm-dd format.
- To view your data retention start date, follow these steps: In the navigation bar, select SIEM Settings > Data Retention .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Supported fields You can download the following fields to a CSV file from the platform: user hostname process name event type timestamp raw log (valid only when raw logs are enabled for the customer) All fields starting with udm.additional Valid field types You can download the following field types to a CSV file: double float int32 uint32 int64 uint64 bool string enum bytes google.protobuf.Timestamp google.protobuf.Duration Unsupported fields Fields that start with "udm" (not udm.additional) and meet either of the following conditions cannot be downloaded to CSV: The nesting of the field is more than 10 deep in udm proto.
- Most recent events : Shows only the newest results.
- For example: additional.fields["key"]="value" Examples of searches using specific key-value pairs in the additional and labels fields: Search for events containing specified key-value pairs: additional.fields["pod name"] = "kube-scheduler" metadata.ingestion labels["MetadataKeyDeletion"] = "startup-script" Use the AND operator with key-value pair searches: additional.fields["pod name"] = "kube-scheduler" AND additional.fields["pod name1"] = "kube-scheduler1" Search for all events that contain the specified key, regardless of the value: additional.fields["pod name"] != "" Search for events that contain a specific key, using a regular expression: additional.fields.value.string value = "mystring" Note: You can also use value.bool value or value.number value for boolean and numeric matches.
- For example, if you have a database called suspicious with a column of IP addresses you know are problematic, you can reference that database in Search instead of manually entering individual IP addresses in Search: events: $e.principal.ip in %susupicious.ip You can narrow your results by searching for specific metadata in addition to IP addresses, for example you might be specifically concerned with changes to user resources: events: $e.metadata.event type = "USER RESOURCE UPDATE CONTENT" $e.principal.ip in %susupicious.ip You can narrow a search against interrelated UDM fields and match against multiple data table columns.

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-reference-required-1`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- Monitor the feed status You can monitor the status of the feed on the initial Feeds page, where feeds can have the following statuses: Active : Feed is configured and ready to ingest data into your Google SecOps account.
- What to expect during migration For impacted feeds, you will observe the following changes: Feed Status : Feeds created prior to the migration will immediately stop pulling live data and will become read-only.
- Error Messages : If you attempt to edit or delete an older feed, you will receive a message stating: This feed is read-only because this SecOps has now moved to a new Google Cloud Project (BYOP).
- Note: The Last succeeded on column on the Feeds page shows the last time data was fetched successfully by that feed.

