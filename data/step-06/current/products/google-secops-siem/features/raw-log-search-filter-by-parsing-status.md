---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.515Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Raw log search filter by parsing status"
feature_slug: "raw-log-search-filter-by-parsing-status"
latest_feature_date: "2025-11-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api"
  - "https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security"
keywords:
  - "raw"
  - "log"
  - "search"
  - "filter"
  - "parsing"
  - "status"
  - "can"
  - "results"
---

# Raw log search filter by parsing status

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Raw log search can filter results by parsing status.

## Extended Definition

Raw log search can filter results by parsing status.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api)
- [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Refine the search results Use the Search page features to filter and refine results, as an alternative to modifying and rerunning the search.
- You can filter and refine the search results to display the older results, as an alternative to modifying and rerunning the search.
- Note: After results load, you can apply filters to refine the data without rerunning the search.
- To make sure you see all the results relevant to your search, refine your search with filters.

### Detection Engine \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api)
- Source ID: `site-api-reference`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- Sample response { "rules": [ { "ruleId": "ru e6abfcb5-1b85-41b0-b64c-695b3250436f", "versionId": "ru e6abfcb5-1b85-41b0-b64c-695b3250436f@v 1602631093 146879000", "ruleName": "SampleRule", "metadata": { "description": "Sample Description of the latest version of the Rule", "author": "author@example.com" }, "ruleText": "rule SampleRule { // Multi event rule to detect logins from a single user for // multiple cities within a 5 minute window. meta: description = \"Sample Description of the latest version of the Rule\" author = \"author@example.com\" events: $e.metadata.event type = \"USER LOGIN\" $e.principal.user.userid = $user $e.principal.location.city = $city match: $user over 5m condition: #city > 1 } ", "liveRuleEnabled": true, "versionCreateTime": "2020-10-13T23:18:13.146879Z", "compilationState": "SUCCEEDED", "ruleType": "MULTI EVENT", "lastAlertStatusChangeTime": "2020-10-13T23:18:13.146879Z" "inputsUsed": { "usesUdm": "true", }, }, { "ruleId": "ru 1971c2ac-8d5b-41aa-bb30-f95d220e9439", "versionId": "ru 1971c2ac-8d5b-41aa-bb30-f95d220e9439@v 1598398482 260223000", "ruleName": "SampleRule2", "metadata": { "description": "Sample Description of the latest version of the Rule", "author": "author2@example.com" }, "ruleText": "rule SampleRule2 { meta: description = \"Sample Description of the latest version of the Rule\" author = \"author2@example.com\" events: // Single event rule to generate detections for network events involving example.com $event.network.dns.questions.name = \"example.com\" condition: $event } ", "versionCreateTime": "2020-08-25T23:34:42.260223Z", "compilationState": "SUCCEEDED", "ruleType": "SINGLE EVENT", "lastAlertStatusChangeTime": "2020-08-25T23:34:42.260223Z" "inputsUsed": { "usesUdm": "true", }, } ] } ListRuleVersions List all versions of a specific rule.
- Sample response { "rules": [ { "ruleId": "ru e6abfcb5-1b85-41b0-b64c-695b3250436f", "versionId": "ru e6abfcb5-1b85-41b0-b64c-695b3250436f@v 1602631093 146879000", "ruleName": "SampleRule", "metadata": { "description": "Sample Description of the latest version of the Rule", "author": "author@example.com" }, "ruleText": "rule SampleRule { // Multi event rule to detect logins from a single user for // multiple cities within a 5 minute window. meta: description = \"Sample Description of the latest version of the Rule\" author = \"author@example.com\" events: $e.metadata.event type = \"USER LOGIN\" $e.principal.user.userid = $user $e.principal.location.city = $city match: $user over 5m condition: #city > 1 } ", "liveRuleEnabled": true, "versionCreateTime": "2020-10-13T23:18:13.146879Z", "compilationState": "SUCCEEDED", "ruleType": "MULTI EVENT", "lastAlertStatusChangeTime": "2020-10-13T23:18:13.146879Z", "inputsUsed": { "usesUdm": "true", }, }, { "ruleId": "ru e6abfcb5-1b85-41b0-b64c-695b3250436f", "versionId": "ru e6abfcb5-1b85-41b0-b64c-695b3250436f@v 1602519130 121984000", "ruleName": "SampleRule", "metadata": { "description": "Sample Description of an older version of the Rule", "author": "author@example.com" }, "ruleText": "rule SampleRule { meta: description = \"Sample Description of an older version of the Rule\" author = \"author@example.com\" events: // Single event rule that will generate lots of detections related to DNS events $event.metadata.event type = \"NETWORK DNS\" condition: $event } ", "versionCreateTime": "2020-10-12T16:12:10.121984Z", "compilationState": "SUCCEEDED", "ruleType": "SINGLE EVENT", "lastAlertStatusChangeTime": "2020-10-12T16:12:10.121984Z", "inputsUsed": { "usesUdm": "true", }, } ] } RunRetrohunt Initiate a retrohunt for the specified rule.
- Request Detections for the latest version of a rule with a given rule identifier: GET https://backstory.googleapis.com/v2/detect/rules/{ruleId}/detections Detections for a specific version of a rule with a given version identifier: GET https://backstory.googleapis.com/v2/detect/rules/{versionId}/detections Detections for the all versions of a rule with a given rule identifier: GET https://backstory.googleapis.com/v2/detect/rules/{ruleId}@-/detections Detections for all versions of all rules: GET https://backstory.googleapis.com/v2/detect/rules/-/detections URL parameters Parameter Name Type Required Description alert state enum Optional Filter detections on if they are "ALERTING" or "NOT ALERTING" detection start time (deprecated) string Optional Time to begin returning detections, filtering on a detection's "detectionTime".
- Sample response { "ruleId": "ru 1f54ab4b-e523-48f7-ae25-271b5ea8337d", "versionId": "ru 1f54ab4b-e523-48f7-ae25-271b5ea8337d@v 1605892700 409247000", "ruleName": "singleEventRule2", "metadata": { "author": "securityuser", "description": "single event rule that should generate detections" }, "ruleText": "rule singleEventRule2 { meta: author = \"securityuser\" description = \"single event rule that should generate detections\" events: $e.metadata.event type = \"NETWORK DNS\" condition: $e }", "ruleType": "SINGLE EVENT", "versionCreateTime": "2020-11-20T17:18:20.409247Z", "compilationState": "SUCCEEDED" "lastAlertStatusChangeTime": "2020-11-20T17:18:20.409247Z", "inputsUsed": { "usesUdm": "true", }, } CreateRuleVersion Creates a new version of an existing rule.

### "Google Unified Security \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- Source ID: `site-api-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Centralized Investigation: The IOC Matches page serves as the central hub for viewing matched IOCs, filtering results (by Type, Priority, Status, Source: Mandiant, etc.), and drilling down into event details, UDM context, threat intelligence rationale, and associations.
- SIEM Log Searching and Investigation : During a CDIR investigation, or on an ad-hoc basis, analysts can use either natural language syntax, Yara-L syntax, or raw log searching to surface information in various logs ingested into Google SecOps related to cloud infrastructure and services.
- Google SecOps provides Cloud Detection Investigation and Response (CDIR), Case Management, SIEM log searching and investigation, Cloud Asset Inventory collection for Entity Graph Enrichment, and the ability to automate common SOC workflows using the SOAR component of Google SecOps.
- Proactive Threat Hunting: Utilize GTI feeds and insights within Google SecOps search and detection rules (YARA-L) to proactively hunt for emerging threats and specific attacker TTPs within your environment.

