---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.672Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Enhanced UDM Search filtering"
feature_slug: "enhanced-udm-search-filtering"
latest_feature_date: "2022-12-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security"
  - "https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api"
keywords:
  - "enhanced"
  - "udm"
  - "search"
  - "filtering"
  - "adds"
  - "bottom"
  - "30"
  - "values"
---

# Enhanced UDM Search filtering

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Enhanced filtering in UDM Search adds Bottom 30 values alongside Top 30 values for each UDM field.

## Extended Definition

Enhanced filtering in UDM Search adds Bottom 30 values alongside Top 30 values for each UDM field.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- When searching Values , UDM Lookup displays Possible value match when a match is found in the following cases: Matches in the following UDM fields: metadata.description security result.description security result.detection fields.value security result.summary network.http.user agent Matches in fields with a full path that ends in one of the following values: .command line For example principal.process.command line . .file.full path For example principal.process.file.full path . .labels.value For example src.labels.value . .registry.registry key For example principal.registry.registry key . .url For example principal.url .
- When searching Values , UDM Lookup does not return matches in the following cases: Matches in the following UDM fields: metadata.product log id network.session id security result.rule id network.parent session id Matches in UDM fields with a full path that ends in one of the following values: .pid For example target.process.pid . .asset id For example principal.asset id . .product specific process id For example principal.process.product specific process id . .resource.id For example principal.resource.id .
- Format the data value to search for Format the data value using the following guidelines: Data type: Format the data value based it's the data type: Enumerated values: Use a valid enumerated value defined for the selected UDM field.
- Searching for text in Values returns results as follows: If the string is found at the beginning or end of the value, it is highlighted in the result, along with the UDM field name and the log ingestion time.

### "Google Unified Security \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- Source ID: `site-api-reference`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- SIEM Log Searching and Investigation : During a CDIR investigation, or on an ad-hoc basis, analysts can use either natural language syntax, Yara-L syntax, or raw log searching to surface information in various logs ingested into Google SecOps related to cloud infrastructure and services.
- Google SecOps provides Cloud Detection Investigation and Response (CDIR), Case Management, SIEM log searching and investigation, Cloud Asset Inventory collection for Entity Graph Enrichment, and the ability to automate common SOC workflows using the SOAR component of Google SecOps.
- Centralized Investigation: The IOC Matches page serves as the central hub for viewing matched IOCs, filtering results (by Type, Priority, Status, Source: Mandiant, etc.), and drilling down into event details, UDM context, threat intelligence rationale, and associations.
- See Curated Detections Examples CDIR : An analyst receives a high priority CDIR SCC Enhanced Privilege Escalation alert (one of many driven by Cloud Threat Curated Detections ) that gets automatically mapped to a Google SecOps case.

### Detection Engine \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api)
- Source ID: `site-api-reference`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- Request Detections for the latest version of a rule with a given rule identifier: GET https://backstory.googleapis.com/v2/detect/rules/{ruleId}/detections Detections for a specific version of a rule with a given version identifier: GET https://backstory.googleapis.com/v2/detect/rules/{versionId}/detections Detections for the all versions of a rule with a given rule identifier: GET https://backstory.googleapis.com/v2/detect/rules/{ruleId}@-/detections Detections for all versions of all rules: GET https://backstory.googleapis.com/v2/detect/rules/-/detections URL parameters Parameter Name Type Required Description alert state enum Optional Filter detections on if they are "ALERTING" or "NOT ALERTING" detection start time (deprecated) string Optional Time to begin returning detections, filtering on a detection's "detectionTime".
- Request Detections for a Google SecOps rule with a given rule identifier: GET https://backstory.googleapis.com/v2/detect/curatedRules/{curatedRuleId}/detections Detections for all versions of all rules: GET https://backstory.googleapis.com/v2/detect/curatedRules/-/detections URL parameters Parameter Name Type Required Description alert state enum Optional Filter detections based on whether the alert state is ALERTING or NOT ALERTING . start time string Optional Start time of the time range to return detections for, filtering by the detection field specified in the list basis parameter.
- If not specified, then detections are not limited by a lower bound. end time string Optional End time of the time range to return detections for, filtering by the detection field specified by the list basis parameter.
- Note: False boolean values are omitted. lastAlertStatusChangeTime string The time when alertingEnabled was last updated from true to false or from false to true . inputsUsed enum The set of inputs used in the rule.

