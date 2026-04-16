---
title: "Risk-based alerting with entity-only rules \_|\_ Google Security Operations\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/chronicle/docs/detection/risk-based-alerting
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/chronicle/docs/detection/risk-based-alerting
source_metadata:
  url: https://docs.cloud.google.com/chronicle/docs/detection/risk-based-alerting
  title: "Risk-based alerting with entity-only rules \_|\_ Google Security Operations\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Google Security Operations
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Risk-based alerting with entity-only rules
Supported in:
Google secops
SIEM
With the ENTITY_RISK_CHANGE Unified Data Model (UDM) event type, you can write YARA-L detection rules that trigger independently of ingested events. This capability lets you focus specifically on changes in an entity's risk score, significantly decreasing the time required for Google Security Operations to detect and alert on shifting entity risk levels. This document explains how to monitor risk scores using this UDM event type in your rules.
In Search, you can display events tagged with ENTITY_RISK_CHANGE using the following YARA-L syntax. Be aware that raw log search doesn't support entity search.
metadata.event_type = "ENTITY_RISK_CHANGE"
Note: Event ingestion doesn't count against your ingestion rate limit and doesn't have any effect on billing.
Examples: ENTITY_RISK_CHANGE rules
This section shows two single-event rule examples for efficient risk tracking, which helps you avoid the complexity and lower limits of multi-event rules. For information on your Rules quota, see Display Rules quota .
Detect when an entity's risk score exceeds 100
The following example rule uses the ENTITY_RISK_CHANGE event type to detect when an entity's risk score exceeds 100:
rule entity_only_risk_change {
meta:
author = "test@google.com"
description = "Alert on entities crossing a threshold"
events:
// Check only Entity Risk Change events
$e1.metadata.event_type = "ENTITY_RISK_CHANGE"
// Check for a Risk Score change with 100 as the threshold
$e1.extensions.entity_risk.risk_score >= 100
outcome:
// Reset risk score to prevent feedback
$risk_score = 0
condition:
$e1
}
Filter entities with risk scores over 0
The following example rule uses the ENTITY_RISK_CHANGE event type to track when the risk scores of entities exceed 0:
rule entity_only_risk {
meta:
author = "test@google.com"
description = "Track changing risk per hostname"
events:
// Filter for Risk Change events with risk scores greater than 0
$e1.metadata.event_type = "ENTITY_RISK_CHANGE"
$e1.extensions.entity_risk.risk_score > 0
// Deduplication
$e1.extensions.entity_risk.risk_window_has_new_detections = true
// Aggregation data
$hostname = $e1.about.hostname
$risk_score = $e1.extensions.entity_risk.risk_score
match:
$hostname over 5m
outcome:
$calculated_risk_score = sum($risk_score)
$single_risk_score = max($risk_score)
condition:
$e1
}
Need more help? Get answers from Community members and Google SecOps professionals.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
