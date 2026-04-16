---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.622Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Detection Engine event variable joins"
feature_slug: "detection-engine-event-variable-joins"
latest_feature_date: "2024-01-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api"
  - "https://docs.cloud.google.com/chronicle/docs/detection/detection-delays"
  - "https://docs.cloud.google.com/chronicle/docs/detection/default-rules"
keywords:
  - "detection"
  - "engine"
  - "event"
  - "variable"
  - "joins"
  - "supports"
  - "expressions"
  - "calls"
---

# Detection Engine event variable joins

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Detection Engine supports event variable joins on OR expressions and function calls.

## Extended Definition

Detection Engine supports event variable joins on OR expressions and function calls.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api)
- [https://docs.cloud.google.com/chronicle/docs/detection/detection-delays](https://docs.cloud.google.com/chronicle/docs/detection/detection-delays)
- [https://docs.cloud.google.com/chronicle/docs/detection/default-rules](https://docs.cloud.google.com/chronicle/docs/detection/default-rules)

## Supporting Pages

### Detection Engine \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api)
- Source ID: `site-api-reference`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CuratedRuleDetection fields type string Type of detection (type is always "GCTI FINDING"). detection.ruleName string Name of the Google SecOps rule generating the detection. detection.ruleId string Identifier for the Google SecOps rule generating the detection. detection.alertState string Indicates whether the Google SecOps rule generating this detection currently has alerting enabled or disabled. detection.ruleType string Whether the Google SecOps rule generating this detection is a single event or multi-event rule ("SINGLE EVENT" or "MULTI EVENT"). detection.urlBackToProduct string URL pointing to the Google SecOps application page for this detection. detection.detectionFields list List of fields matching the Google SecOps rule's requested match variables, for "MULTI EVENT" rules. detection.detectionFields.key string Key for a field specified in the Google SecOps rule, for "MULTI EVENT" rules. detection.detectionFields.value string Value for a field specified in the Google SecOps rule, for "MULTI EVENT" rules. detection.ruleLabels list List of fields specified in Google SecOps rule metadata. detection.ruleLabels.key string Key for a field specified in the Google SecOps rule metadata. detection.ruleLabels.value string Value for a field specified in the Google SecOps rule metadata. detection.summary string Summary for the generated detection. detection.ruleSet string Identifier of the Google SecOps rule set that generated this detection. detection.ruleSetDisplayName string Display name of the Google SecOps rule set that generated this detection. detection.description string Description of the Google SecOps rule that generated the detection. detection.severity string Severity of the detection ("INFORMATIONAL" or "LOW" or "HIGH"). createdTime string Time the detection was created. detectionTime string String representing the time period the detection was found in. id string Identifier for the detection. timeWindow.startTime string String representing the start of the time window in which the detection was found, in RFC 3339 format. timeWindow.endTime string String representing the end of the time window in which the detection was found, in RFC 3339 format. collectionElements list A list of references to sample UDM events causing this detection, grouped by variable. collectionElements.label string The variable a given set of UDM events belongs to. collectionElements.references list A list of references to sample UDM events, grouped by the given label. collectionElements.references.event UDM A UDM event. lastUpdatedTime string Time the detection was last updated. tags list A list of MITRE tactic and technique IDs covered by the Google SecOps rule.
- Only populated for RULE DETECTION type detections. detection.alertState string Indicates whether the rule generating this detection currently has alerting enabled or disabled. detection.ruleType string Whether the rule generating this detection is a single event or multi-event rule ("SINGLE EVENT" or "MULTI EVENT"). detection.urlBackToProduct string URL pointing to the Google SecOps application page for this detection. detection.detectionFields list List of fields matching the rules requested match variables, for "MULTI EVENT" rules. detection.detectionFields.key string Key for a field specified in the rule, for "MULTI EVENT" rules. detection.detectionFields.value string Value for a field specified in the rule, for "MULTI EVENT" rules. detection.ruleLabels list List of fields specified in rule metadata. detection.ruleLabels.key string Key for a field specified in the rule metadata. detection.ruleLabels.value string Value for a field specified in the rule metadata. detection.summary string Summary for the generated detection.
- Only populated for GCTI FINDING type detections. createdTime string Time the detection was created. detectionTime string String representing the time period the detection was found in. id string Identifier for the detection. timeWindow.startTime string String representing the start of the time window in which the detection was found, in RFC 3339 format. timeWindow.endTime string String representing the end of the time window in which the detection was found, in RFC 3339 format. collectionElements list A list of references to sample UDM events causing this detection, grouped by variable. collectionElements.label string The variable a given set of UDM events belongs to. collectionElements.references list A list of references to sample UDM events, grouped by the given label. collectionElements.references.event UDM A UDM event. lastUpdatedTime string Time the detection was last updated.
- This description is copied from the rule metadata's description key, if it is set. detection.detectionFields list List of fields matching the rules requested match variables, for "MULTI EVENT" rules. detection.detectionFields.key string Key for a field specified in the rule, for "MULTI EVENT" rules. detection.detectionFields.value string Value for a field specified in the rule, for "MULTI EVENT" rules. detection.ruleLabels list List of fields specified in rule metadata. detection.ruleLabels.key string Key for a field specified in the rule metadata. detection.ruleLabels.value string Value for a field specified in the rule metadata. createdTime string Time the detection was created. detectionTime string String representing the time period the detection was found in. id string Identifier for the detection.

### "Understand rule detection delays \_|\_ Google Security Operations \_|\_\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/detection-delays](https://docs.cloud.google.com/chronicle/docs/detection/detection-delays)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Complex single-event rules These rules are more susceptible to detection delays because they include match windows or reference lists: Windowed single-event rules These are single-event rules that include a match window and typically have a slightly longer delay than other single-event rules.
- Detection rules Detection rules examine both regular and entity Universal Data Model (UDM) events, which are normalized raw logs, to generate detections according to the rule's specifications.
- While Google SecOps uses this feature to handle extremely late-arriving data, it appears as a large span of time between the detection window (event time block) and the alert's created time.
- For example, for a particular rule detection, if a large gap exists between the Event time and the Ingested time , you can likely attribute the detection delay to an expected delay .

### "Default detection rules \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/default-rules](https://docs.cloud.google.com/chronicle/docs/detection/default-rules)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When using time periods, the Google SecOps Detection Engine only examines the discrete blocks of time you specify. rule OutcomeRuleMultiEvent { meta: author = "noone@google.com" events: $u.udm.principal.hostname = $hostname $asset context.graph.entity.hostname = $hostname $severity = $asset context.graph.entity.asset.vulnerabilities.severity match: $hostname over 5m outcome: $risk score = max( 100 + if($hostname = "my-hostname", 100, 50) + if($severity = "HIGH", 10) + if($severity = "MEDIUM", 5) + if($severity = "LOW", 1) ) $asset id list = array( if($u.principal.asset id = "", "Empty asset id", $u.principal.asset id ) ) $asset id distinct list = array distinct($u.principal.asset id) $asset id count = count($u.principal.asset id) $asset id distinct count = count distinct($u.principal.asset id) condition: $u and $asset context and $risk score > 50 and not arrays.contains($asset id list, "id 1234") } Conclusion YARA-L is a flexible detection language which enables you to examine security events and not simply just return a data query.
- The condition states the logical condition that triggers the detection. rule ExcludeZeroValues { meta: author = "noone@google.com" events: $e1.metadata.event type = "NETWORK DNS" $e1.principal.hostname = $hostname // $e1.principal.user.userid may be empty string. $e1.principal.user.userid != "Guest" $e2.metadata.event type = "NETWORK HTTP" $e2.principal.hostname = $hostname // $e2.target.asset id cannot be empty string as explicitly specified. $e2.target.asset id != "" match: // $hostname cannot be empty string. $hostname over 1h condition: $e1 and $e2 } Rules outcome section Use the outcome section to set holding variables within the rule detection to provide enrichment for downstream consumption.
- Further not conditions could be added to this rule if you identify frequent false positives coming from other known file paths. rule suspicious unusual location svchost execution { meta: author = "Google Cloud Security" description = "Windows 'svchost' executed from an unusual location" yara version = "YL2.0" rule version = "1.0" events: $e1.metadata.event type = "PROCESS LAUNCH" re.regex($e1.principal.process.command line, \bsvchost(\.exe)?\b) nocase not re.regex($e1.principal.process.command line, \\Windows\\System32\\) nocase condition: $e1 } Specify more than one event variable YARA-L enables you to have more than one event variable in a rule.
- This repository contains several different categories of detection rules, including the following: Google Cloud CloudAudit Google Workspace Informational warnings Malware MITRE ATT&CK SOC prime rules Suspicious events Each category takes a specific approach in how it views data sources and specifies what events and matching statements to use.

