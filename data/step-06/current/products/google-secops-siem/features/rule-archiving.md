---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:56:14.570Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Rule archiving"
feature_slug: "rule-archiving"
latest_feature_date: "2021-05-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/default-rules"
  - "https://docs.cloud.google.com/chronicle/docs/detection/detection-delays"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/detection/archive-a-rule"
keywords:
  - "rule"
  - "archiving"
  - "lets"
  - "you"
  - "hide"
  - "security"
  - "for"
  - "detection"
---

# Rule archiving

Product: Google SecOps SIEM
Coverage: LOW

## Step 02 Summary

Rule archiving lets you hide security data for a Detection Engine rule and its versions without deleting the rule.

## Extended Definition

Rule archiving lets you hide security data for a Detection Engine rule and its versions without deleting the rule.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/default-rules](https://docs.cloud.google.com/chronicle/docs/detection/default-rules)
- [https://docs.cloud.google.com/chronicle/docs/detection/detection-delays](https://docs.cloud.google.com/chronicle/docs/detection/detection-delays)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/detection/archive-a-rule](https://docs.cloud.google.com/chronicle/docs/detection/archive-a-rule)

## Supporting Pages

### "Default detection rules \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/default-rules](https://docs.cloud.google.com/chronicle/docs/detection/default-rules)
- Source ID: `site-docs-root`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When using time periods, the Google SecOps Detection Engine only examines the discrete blocks of time you specify. rule OutcomeRuleMultiEvent { meta: author = "noone@google.com" events: $u.udm.principal.hostname = $hostname $asset context.graph.entity.hostname = $hostname $severity = $asset context.graph.entity.asset.vulnerabilities.severity match: $hostname over 5m outcome: $risk score = max( 100 + if($hostname = "my-hostname", 100, 50) + if($severity = "HIGH", 10) + if($severity = "MEDIUM", 5) + if($severity = "LOW", 1) ) $asset id list = array( if($u.principal.asset id = "", "Empty asset id", $u.principal.asset id ) ) $asset id distinct list = array distinct($u.principal.asset id) $asset id count = count($u.principal.asset id) $asset id distinct count = count distinct($u.principal.asset id) condition: $u and $asset context and $risk score > 50 and not arrays.contains($asset id list, "id 1234") } Conclusion YARA-L is a flexible detection language which enables you to examine security events and not simply just return a data query.
- Google Security Operations sample detection rules To help accelerate your adoption of the Google SecOps Detection Engine, there is a GitHub repository with sample rules .
- The condition states the logical condition that triggers the detection. rule ExcludeZeroValues { meta: author = "noone@google.com" events: $e1.metadata.event type = "NETWORK DNS" $e1.principal.hostname = $hostname // $e1.principal.user.userid may be empty string. $e1.principal.user.userid != "Guest" $e2.metadata.event type = "NETWORK HTTP" $e2.principal.hostname = $hostname // $e2.target.asset id cannot be empty string as explicitly specified. $e2.target.asset id != "" match: // $hostname cannot be empty string. $hostname over 1h condition: $e1 and $e2 } Rules outcome section Use the outcome section to set holding variables within the rule detection to provide enrichment for downstream consumption.
- Further not conditions could be added to this rule if you identify frequent false positives coming from other known file paths. rule suspicious unusual location svchost execution { meta: author = "Google Cloud Security" description = "Windows 'svchost' executed from an unusual location" yara version = "YL2.0" rule version = "1.0" events: $e1.metadata.event type = "PROCESS LAUNCH" re.regex($e1.principal.process.command line, \bsvchost(\.exe)?\b) nocase not re.regex($e1.principal.process.command line, \\Windows\\System32\\) nocase condition: $e1 } Specify more than one event variable YARA-L enables you to have more than one event variable in a rule.

### "Understand rule detection delays \_|\_ Google Security Operations \_|\_\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/detection-delays](https://docs.cloud.google.com/chronicle/docs/detection/detection-delays)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, for a particular rule detection, if a large gap exists between the Event time and the Ingested time , you can likely attribute the detection delay to an expected delay .
- Familiarize yourself with the following topics to understand how these factors influence rule detection delays: Detection generation methods Known limitations Factors contributing to rule detection delays Detection generation methods Learn how the system creates rule detections to understand how the detection generation method affects detection delays.
- Understand rule detection delays Supported in: Google secops SIEM This document explains rule detection delays in Google Security Operations, identifies contributing factors, outlines troubleshooting approaches, and suggests techniques to reduce delays where possible.
- Follow this suggested approach to investigate and troubleshoot rule detection delays: Check for obvious delays: Determine if any ingestion delay exists: In the Google SecOps console, go to Detection > Rules and detections .

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Search for events and alerts Supported in: Google secops SIEM The search function lets you find Unified Data Model (UDM) events and alerts in your Google Security Operations instance using YARA-L 2.0 syntax .
- Types of grouped UDM fields You can search across all of the following grouped UDM fields: Grouped field name Associated UDM fields domain about.administrative domain about.asset.network domain network.dns.questions.name network.dns domain principal.administrative domain principal.asset.network domain target.administrative domain target.asset.hostname target.asset.network domain target.hostname email intermediary.user.email addresses network.email.from network.email.to principal.user.email addresses security result.about.user.email addresses target.user.email addresses file path principal.file.full path principal.process.file.full path principal.process.parent process.file.full path target.file.full path target.process.file.full path target.process.parent process.file.full path hash about.file.md5 about.file.sha1 about.file.sha256 principal.process.file.md5 principal.process.file.sha1 principal.process.file.sha256 security result.about.file.sha256 target.file.md5 target.file.sha1 target.file.sha256 target.process.file.md5 target.process.file.sha1 target.process.file.sha256 hostname intermediary.hostname observer.hostname principal.asset.hostname principal.hostname src.asset.hostname src.hostname target.asset.hostname target.hostname ip intermediary.ip observer.ip principal.artifact.ip principal.asset.ip principal.ip src.artifact.ip src.asset.ip src.ip target.artifact.ip target.asset.ip target.ip namespace principal.namespace src.namespace target.namespace process id principal.process.parent process.pid principal.process.parent process.product specific process id principal.process.pid principal.process.product specific process id target.process.parent process.pid target.process.parent process.product specific process id target.process.pid target.process.product specific process id user about.user.userid observer.user.userid principal.user.user display name principal.user.userid principal.user.windows sid src.user.userid target.user.user display name target.user.userid target.user.windows sid Find a UDM field for search query While writing a search query, you may not know which UDM field to include.
- When searching Values , UDM Lookup displays Possible value match when a match is found in the following cases: Matches in the following UDM fields: metadata.description security result.description security result.detection fields.value security result.summary network.http.user agent Matches in fields with a full path that ends in one of the following values: .command line For example principal.process.command line . .file.full path For example principal.process.file.full path . .labels.value For example src.labels.value . .registry.registry key For example principal.registry.registry key . .url For example principal.url .
- When searching Values , UDM Lookup does not return matches in the following cases: Matches in the following UDM fields: metadata.product log id network.session id security result.rule id network.parent session id Matches in UDM fields with a full path that ends in one of the following values: .pid For example target.process.pid . .asset id For example principal.asset id . .product specific process id For example principal.process.product specific process id . .resource.id For example principal.resource.id .

### Archive rules \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/archive-a-rule](https://docs.cloud.google.com/chronicle/docs/detection/archive-a-rule)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Archive rules Supported in: Google secops SIEM Archiving a rule enables you to hide the security data related to that rule (and all of its versions) without actually deleting the rule.
- Archiving a rule To archive a rule, complete the following steps: Select a rule in the left navigation and click the option icon in the top- right corner of the Google Security Operations user interface.
- Confirm Archive message Confirm Archive message continued Unarchiving a rule To unarchive a rule, complete the following steps: Click the option icon for a specific rule in the left navigation pane.
- Home Documentation Security Google Security Operations Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

