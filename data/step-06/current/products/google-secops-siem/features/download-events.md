---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.690Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Download events"
feature_slug: "download-events"
latest_feature_date: "2021-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/downloading-events"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/detection/composite-detections"
keywords:
  - "download"
  - "events"
  - "lets"
  - "users"
  - "large"
  - "numbers"
  - "threat"
  - "detection"
---

# Download events

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Lets users download large numbers of threat detection events as CSV files for security investigation.

## Extended Definition

Lets users download large numbers of threat detection events as CSV files for security investigation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/downloading-events](https://docs.cloud.google.com/chronicle/docs/detection/downloading-events)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)

## Supporting Pages

### Download events \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/downloading-events](https://docs.cloud.google.com/chronicle/docs/detection/downloading-events)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Download events Supported in: Google secops SIEM You can display and download large numbers of the events associated with each threat detection.
- Any samples beyond this limit are hidden on the Detections page., but they're included if you click Download All to view Unified Data Model (UDM) events associated with your detection.
- Display and download events Complete the following steps to display and download the events associated with a detection: In the navigation bar, click Detection > Rules & Detections .
- Select a Detection from the Detections list and expand the sample events list by clicking the arrow next to the list.

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Click an entity to display the Entity context dialog, which can include the following items: Asset name First time seen Last time seen IP addresses MAC addresses Number of alerts Highest alert count by rule Alerts-over-time bar graph Open Alerts & IOCs link View in Alerts Tab link Use the Pivot Table to analyze events The Pivot Table lets you analyze events using expressions and functions against the results from the search.
- Search for events and alerts Supported in: Google secops SIEM The search function lets you find Unified Data Model (UDM) events and alerts in your Google Security Operations instance using YARA-L 2.0 syntax .
- Navigate result sets To improve browser stability and performance when loading a large number of events, Google SecOps provides paginated search results.
- Filter events field The Filter events field displays the filters you've created, and lets you apply them to the Search field, or remove them as needed.

### "Composite detections \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- Source ID: `site-docs-reference-required-1`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example : rule CheckCuratedDetection with EDR and EG { meta: author = "noone@cymbal.com" events: $d.detection.detection.rule name = /SCC: Custom Modules: Configurable Bad Domain/ $d.detection.collection elements.references.event.network.dns.questions.name = $domain $d.detection.collection elements.references.event.principal.asset.hostname = $hostname $e.metadata.log type = "LIMACHARLIE EDR" $e.metadata.product event type = "NETWORK CONNECTIONS" $domain = re.capture($e.principal.process.command line, "\\s([a-zA-Z0-9.-]+\\.[a-zA-Z0-9.-]+)$") $hostname = re.capture($e.principal.hostname, "([^.] )") $prevalence.graph.metadata.entity type = "DOMAIN NAME" $prevalence.graph.metadata.source type = "DERIVED CONTEXT" $prevalence.graph.entity.hostname = $domain $prevalence.graph.entity.domain.prevalence.day count = 10 $prevalence.graph.entity.domain.prevalence.rolling max <= 5 $prevalence.graph.entity.domain.prevalence.rolling max > 0 match: $hostname over 1h outcome: $risk score = 80 $CL target = array($domain) condition: $e and $d and $prevalence } View composite detection findings You can view composite detection results in the Detections page.
- When to use composite detections Composite detections can be useful for achieving the following goals: Correlate outcomes of two or more rules (for example, linking a Malware Downloaded detection with a subsequent C2 Beaconing alert from the same host).
- Enhance detection accuracy : Combine insights from Unified Data Model (UDM) events, rule detections, entity context, User and Entity Behavior Analytics (UEBA) findings, and data tables to build more accurate detection logic.
- The rule then searches raw Endpoint Detection and Response (EDR) logs (the events ) from the same workload within a one-minute window, looking for command-line operations that contained the same malicious domain.

