---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.550Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Google SecOps Dashboards"
feature_slug: "google-secops-dashboards"
latest_feature_date: "2025-07-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security"
  - "https://docs.cloud.google.com/chronicle/docs/detection/composite-detections"
  - "https://docs.cloud.google.com/chronicle/docs/detection/emerging-threats"
keywords:
  - "secops"
  - "dashboards"
  - "add"
  - "curated"
  - "investigation"
  - "threat"
  - "hunting"
  - "reports"
---

# Google SecOps Dashboards

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Google SecOps Dashboards add curated investigation and threat-hunting dashboards, reports, drilldowns, Markdown widgets, and SOAR data visibility.

## Extended Definition

Google SecOps Dashboards add curated investigation and threat-hunting dashboards, reports, drilldowns, Markdown widgets, and SOAR data visibility.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- [https://docs.cloud.google.com/chronicle/docs/detection/emerging-threats](https://docs.cloud.google.com/chronicle/docs/detection/emerging-threats)

## Supporting Pages

### "Google Unified Security \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- Source ID: `site-api-reference`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- Getting Started with Google Chrome and Google SecOps Configure the Chrome Enterprise Premium Reporting Connector to send data to Google SecOps Connect Chrome Enterprise Premium to Google SecOps Enable Chrome Enterprise Threats Curated Detections Examples Investigating Malicious Browser Extensions A user downloads and installs a malicious browser extension from outside the Chrome Web Store, that once installed, reads their session cookies and posts them to a server on a suspicious domain that was registered within the last week.
- Future-Proof Your Defenses: Proactive Threat Hunting with Integrated GTI in Google SecOps Integrating Google Threat Intelligence (GTI) directly within Google SecOps transforms threat detection and response from reactive to proactive through the Applied Threat Intelligence (ATI) feature.
- See Curated Detections Examples CDIR : An analyst receives a high priority CDIR SCC Enhanced Privilege Escalation alert (one of many driven by Cloud Threat Curated Detections ) that gets automatically mapped to a Google SecOps case.
- This integration leverages Google SecOps curated detections to evaluate event data against GTI IOCs, automatically generating prioritized alerts (such as Active Breach or High ) to ensure focus on critical threats.

### "Emerging Threats Center \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/emerging-threats](https://docs.cloud.google.com/chronicle/docs/detection/emerging-threats)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This feed provides a curated view of campaigns and reports and their associated threat actors and malware families.
- Emerging Threats Center Supported in: Google secops SIEM The Emerging Threats Center in Google Security Operations provides AI-powered threat intelligence that helps you understand how current and emerging threat campaigns might affect your organization.
- The Emerging Threats Center provides a curated view of the most critical global threats from GTI that pose risks to your environment, including IoCs, detection matches, and affected entities.
- It uses Gemini to transform large volumes of raw intelligence feeds into actionable insights, letting you operationalize threat data directly in your investigation workflows.

### "Composite detections \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- Source ID: `site-docs-reference-required-1`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- Composite detections Supported in: Google secops SIEM This document introduces composite detections and how they can enhance threat detection workflows by correlating outputs from multiple rules.
- Use in dashboards : Seamlessly integrate composite detections as data sources for Google SecOps dashboards.
- Example : rule CheckCuratedDetection with EDR and EG { meta: author = "noone@cymbal.com" events: $d.detection.detection.rule name = /SCC: Custom Modules: Configurable Bad Domain/ $d.detection.collection elements.references.event.network.dns.questions.name = $domain $d.detection.collection elements.references.event.principal.asset.hostname = $hostname $e.metadata.log type = "LIMACHARLIE EDR" $e.metadata.product event type = "NETWORK CONNECTIONS" $domain = re.capture($e.principal.process.command line, "\\s([a-zA-Z0-9.-]+\\.[a-zA-Z0-9.-]+)$") $hostname = re.capture($e.principal.hostname, "([^.] )") $prevalence.graph.metadata.entity type = "DOMAIN NAME" $prevalence.graph.metadata.source type = "DERIVED CONTEXT" $prevalence.graph.entity.hostname = $domain $prevalence.graph.entity.domain.prevalence.day count = 10 $prevalence.graph.entity.domain.prevalence.rolling max <= 5 $prevalence.graph.entity.domain.prevalence.rolling max > 0 match: $hostname over 1h outcome: $risk score = 80 $CL target = array($domain) condition: $e and $d and $prevalence } View composite detection findings You can view composite detection results in the Detections page.
- Based on this evaluation, you can use composite rules to create new detections to be used as an intermediary representation for investigation, and alerting with a subsequent rule.

