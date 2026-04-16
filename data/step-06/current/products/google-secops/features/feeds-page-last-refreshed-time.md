---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.690Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Feeds page last refreshed time"
feature_slug: "feeds-page-last-refreshed-time"
latest_feature_date: "2026-02-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
  - "https://docs.cloud.google.com/chronicle/docs/detection/curated-detections"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide"
keywords:
  - "feeds"
  - "page"
  - "last"
  - "refreshed"
  - "time"
  - "now"
  - "displays"
  - "each"
---

# Feeds page last refreshed time

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

The Feeds page now displays the last refreshed time for each feed.

## Extended Definition

The Feeds page now displays the last refreshed time for each feed.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/detection/curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/curated-detections)
- [https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide](https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide)

## Supporting Pages

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-reference`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: The Last succeeded on column on the Feeds page shows the last time data was fetched successfully by that feed.
- Last refreshed time: View the timestamp to see when the feed list was last updated.
- The main page displays all your configured feeds.
- Cloud Storage Pub/Sub Access Identity : serviceAccount: service- {unique project id} @gs-project-accounts.iam.gserviceaccount.com Service : pubsub.googleapis.com Operations : All ( ) Resources : All ( ) STS Pub/Sub Identity : serviceAccount: project- {unique project id} @storage-transfer-service.iam.gserviceaccount.com Service : pubsub.googleapis.com Operations : All ( ) Resources : All ( ) To obtain the unique-project-id, do the following: On the Feeds page, click Create Feed .

### "Use the curated detections page \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/curated-detections)
- Source ID: `site-docs-root`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- The Curated Detection page provides information about each of the rule sets active for your Google SecOps account including the following: Last updated: Time GCTI last updated the rule set.
- Open the curated detection dashboard The curated detection dashboard displays information about each curated detection which has produced a detection against the log data in your Google SecOps account.
- Figure 2: Curated Detections dashboard The Curated Detections dashboard displays each of the rule sets available to your Google SecOps account.
- Before you begin For information about predefined threat detection policies, see the following: Overview of Cloud Threats category Overview of Chrome Enterprise Threats category Overview of Windows Threats category Overview of Linux Threats category Overview of macOS Threats category Overview of Risk Analytics for UEBA category Overview of Applied Threat Intelligence category To verify that data required for each policy is in the correct format, see Verify log data ingestion using test rules .

### "Dashboards overview \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide](https://docs.cloud.google.com/chronicle/docs/investigation/dashboards-user-guide)
- Source ID: `site-docs-reference`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- The timeframes for the following visualizations are preselected and aren't affected by the Global Time Filter : Recently Ingested Events : displays recently ingested events for each log type.
- Rule Detections by Name Over Time : displays the rules that returned detections each day and the number of detections returned.
- The table is followed by graphs of all Google Cloud services with their associated data that show their ingestion trend over the following time intervals: Last 24 hours Last 30 days Last six months Context Aware Detections - Risk dashboard The Context Aware Detections - Risk dashboard provides insight into the current threat status of assets and users in your enterprise.
- Note: The IoC Matches dashboard shows IoC details at the time of the IoC matching (like confidence score and severity), whereas the IOC Matches tab of the Alerts & IoCs page shows the UNIX seconds value for the day bucket in which the IoC match occurred.

