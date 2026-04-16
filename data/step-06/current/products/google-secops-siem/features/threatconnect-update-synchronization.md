---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.508Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "ThreatConnect update synchronization"
feature_slug: "threatconnect-update-synchronization"
latest_feature_date: "2025-12-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/detection-delays"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview"
keywords:
  - "threatconnect"
  - "update"
  - "synchronization"
  - "changes"
  - "indicators"
  - "replicated"
  - "into"
  - "secops"
---

# ThreatConnect update synchronization

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Changes to ThreatConnect indicators are replicated into Google SecOps every 30 minutes.

## Extended Definition

Changes to ThreatConnect indicators are replicated into Google SecOps every 30 minutes.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/detection-delays](https://docs.cloud.google.com/chronicle/docs/detection/detection-delays)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview)

## Supporting Pages

### "Understand rule detection delays \_|\_ Google Security Operations \_|\_\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/detection-delays](https://docs.cloud.google.com/chronicle/docs/detection/detection-delays)
- Source ID: `site-docs-root`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- Enrichment system updates: If the enrichment system updates entity or process metadata, IP geolocation, or VirusTotal indicators, the rules engine re-evaluates these blocks 24 to 48 hours later to capture those updates.
- Re-enrichment of UDM events Underlying data changes: If the underlying data changes after an event is ingested, the system reprocesses historical data and updates events for up to 24 hours after ingestion.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
- Unpredicted delays : These are rule-specific or event-specific delays caused by many factors, including delays in event data arriving at Google SecOps, transient slowness in processing pipelines within Google SecOps services, re-enrichment , and other data processing delays .

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- For example, if you have a database called suspicious with a column of IP addresses you know are problematic, you can reference that database in Search instead of manually entering individual IP addresses in Search: events: $e.principal.ip in %susupicious.ip You can narrow your results by searching for specific metadata in addition to IP addresses, for example you might be specifically concerned with changes to user resources: events: $e.metadata.event type = "USER RESOURCE UPDATE CONTENT" $e.principal.ip in %susupicious.ip You can narrow a search against interrelated UDM fields and match against multiple data table columns.
- Definition of events and alerts An event is generated from a raw log source that is ingested into Google SecOps and processed by Google SecOps's ingestion and normalization process.
- Other sources of data can be ingested into Google SecOps as alerts, such as Crowdstrike Falcon Alerts.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]

### Cases overview \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview](https://docs.cloud.google.com/chronicle/docs/soar/investigate/working-with-cases/cases-overview)
- Source ID: `site-api-reference`
- Final score: 67
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Displays all system- and user-generated case status changes, such as updates to the title, stage, priority, assignment, and closure.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
- During this analysis, key indicators—such as source and destination IPs, file hashes, or user accounts—are extracted and represented as entities.
- Each alert includes its underlying security events and key indicators (such as sources, destinations, artifacts), which are parsed and analyzed.

