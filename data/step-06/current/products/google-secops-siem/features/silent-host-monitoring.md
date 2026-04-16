---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.548Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Silent Host Monitoring"
feature_slug: "silent-host-monitoring"
latest_feature_date: "2025-07-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/detection-delays"
  - "https://docs.cloud.google.com/chronicle/docs/detection/default-rules"
  - "https://docs.cloud.google.com/chronicle/docs/detection/composite-detections"
keywords:
  - "silent"
  - "host"
  - "monitoring"
  - "now"
  - "supports"
  - "detection"
  - "rule"
  - "based"
---

# Silent Host Monitoring

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Silent Host Monitoring now supports detection rule-based configuration using UDM fields or labels within a specified time window.

## Extended Definition

Silent Host Monitoring now supports detection rule-based configuration using UDM fields or labels within a specified time window.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/detection-delays](https://docs.cloud.google.com/chronicle/docs/detection/detection-delays)
- [https://docs.cloud.google.com/chronicle/docs/detection/default-rules](https://docs.cloud.google.com/chronicle/docs/detection/default-rules)
- [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)

## Supporting Pages

### "Understand rule detection delays \_|\_ Google Security Operations \_|\_\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/detection-delays](https://docs.cloud.google.com/chronicle/docs/detection/detection-delays)
- Source ID: `site-docs-root`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This calculated delay triggers detection delays because rules prioritize processing based on real time ingestion.
- When scheduled rules run again, the system can create new detections based on updated reference list contents.
- Rules also generate detections based on previously generated detections.
- Familiarize yourself with the following topics to understand how these factors influence rule detection delays: Detection generation methods Known limitations Factors contributing to rule detection delays Detection generation methods Learn how the system creates rule detections to understand how the detection generation method affects detection delays.

### "Composite detections \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- Source ID: `site-docs-reference-required-1`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- Example : rule CheckCuratedDetection with EDR and EG { meta: author = "noone@cymbal.com" events: $d.detection.detection.rule name = /SCC: Custom Modules: Configurable Bad Domain/ $d.detection.collection elements.references.event.network.dns.questions.name = $domain $d.detection.collection elements.references.event.principal.asset.hostname = $hostname $e.metadata.log type = "LIMACHARLIE EDR" $e.metadata.product event type = "NETWORK CONNECTIONS" $domain = re.capture($e.principal.process.command line, "\\s([a-zA-Z0-9.-]+\\.[a-zA-Z0-9.-]+)$") $hostname = re.capture($e.principal.hostname, "([^.] )") $prevalence.graph.metadata.entity type = "DOMAIN NAME" $prevalence.graph.metadata.source type = "DERIVED CONTEXT" $prevalence.graph.entity.hostname = $domain $prevalence.graph.entity.domain.prevalence.day count = 10 $prevalence.graph.entity.domain.prevalence.rolling max <= 5 $prevalence.graph.entity.domain.prevalence.rolling max > 0 match: $hostname over 1h outcome: $risk score = 80 $CL target = array($domain) condition: $e and $d and $prevalence } View composite detection findings You can view composite detection results in the Detections page.
- When to use composite detections Composite detections can be useful for achieving the following goals: Correlate outcomes of two or more rules (for example, linking a Malware Downloaded detection with a subsequent C2 Beaconing alert from the same host).
- Based on this evaluation, you can use composite rules to create new detections to be used as an intermediary representation for investigation, and alerting with a subsequent rule.
- Rule logic that attempts to filter or exclude cases based on status (for example, $edetection.feedback summary.status != "CLOSED" ) isn't supported.

### "Default detection rules \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/default-rules](https://docs.cloud.google.com/chronicle/docs/detection/default-rules)
- Source ID: `site-docs-root`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When using time periods, the Google SecOps Detection Engine only examines the discrete blocks of time you specify. rule OutcomeRuleMultiEvent { meta: author = "noone@google.com" events: $u.udm.principal.hostname = $hostname $asset context.graph.entity.hostname = $hostname $severity = $asset context.graph.entity.asset.vulnerabilities.severity match: $hostname over 5m outcome: $risk score = max( 100 + if($hostname = "my-hostname", 100, 50) + if($severity = "HIGH", 10) + if($severity = "MEDIUM", 5) + if($severity = "LOW", 1) ) $asset id list = array( if($u.principal.asset id = "", "Empty asset id", $u.principal.asset id ) ) $asset id distinct list = array distinct($u.principal.asset id) $asset id count = count($u.principal.asset id) $asset id distinct count = count distinct($u.principal.asset id) condition: $u and $asset context and $risk score > 50 and not arrays.contains($asset id list, "id 1234") } Conclusion YARA-L is a flexible detection language which enables you to examine security events and not simply just return a data query.
- The condition states the logical condition that triggers the detection. rule ExcludeZeroValues { meta: author = "noone@google.com" events: $e1.metadata.event type = "NETWORK DNS" $e1.principal.hostname = $hostname // $e1.principal.user.userid may be empty string. $e1.principal.user.userid != "Guest" $e2.metadata.event type = "NETWORK HTTP" $e2.principal.hostname = $hostname // $e2.target.asset id cannot be empty string as explicitly specified. $e2.target.asset id != "" match: // $hostname cannot be empty string. $hostname over 1h condition: $e1 and $e2 } Rules outcome section Use the outcome section to set holding variables within the rule detection to provide enrichment for downstream consumption.
- Further not conditions could be added to this rule if you identify frequent false positives coming from other known file paths. rule suspicious unusual location svchost execution { meta: author = "Google Cloud Security" description = "Windows 'svchost' executed from an unusual location" yara version = "YL2.0" rule version = "1.0" events: $e1.metadata.event type = "PROCESS LAUNCH" re.regex($e1.principal.process.command line, \bsvchost(\.exe)?\b) nocase not re.regex($e1.principal.process.command line, \\Windows\\System32\\) nocase condition: $e1 } Specify more than one event variable YARA-L enables you to have more than one event variable in a rule.
- This repository contains several different categories of detection rules, including the following: Google Cloud CloudAudit Google Workspace Informational warnings Malware MITRE ATT&CK SOC prime rules Suspicious events Each category takes a specific approach in how it views data sources and specifies what events and matching statements to use.

