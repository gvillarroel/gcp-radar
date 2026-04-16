---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:53:15.534Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Composite detection content for Mandiant Hunt Cloud Classification"
feature_slug: "composite-detection-content-for-mandiant-hunt-cloud-classification"
latest_feature_date: "2025-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/composite-detections"
  - "https://docs.cloud.google.com/chronicle/docs/detection/composite-rules-category"
  - "https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security"
keywords:
  - "composite"
  - "detection"
  - "content"
  - "mandiant"
  - "hunt"
  - "classification"
  - "adds"
  - "across"
---

# Composite detection content for Mandiant Hunt Cloud Classification

Product: Google SecOps SIEM
Coverage: MEDIUM

## Step 02 Summary

Adds composite detection content for Mandiant Hunt Cloud Classification across AWS, GCP, and Azure.

## Extended Definition

Adds composite detection content for Mandiant Hunt Cloud Classification across AWS, GCP, and Azure.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- [https://docs.cloud.google.com/chronicle/docs/detection/composite-rules-category](https://docs.cloud.google.com/chronicle/docs/detection/composite-rules-category)
- [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)

## Supporting Pages

### "Composite detections \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- Source ID: `site-docs-reference-required-1`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example : rule CheckCuratedDetection with EDR and EG { meta: author = "noone@cymbal.com" events: $d.detection.detection.rule name = /SCC: Custom Modules: Configurable Bad Domain/ $d.detection.collection elements.references.event.network.dns.questions.name = $domain $d.detection.collection elements.references.event.principal.asset.hostname = $hostname $e.metadata.log type = "LIMACHARLIE EDR" $e.metadata.product event type = "NETWORK CONNECTIONS" $domain = re.capture($e.principal.process.command line, "\\s([a-zA-Z0-9.-]+\\.[a-zA-Z0-9.-]+)$") $hostname = re.capture($e.principal.hostname, "([^.] )") $prevalence.graph.metadata.entity type = "DOMAIN NAME" $prevalence.graph.metadata.source type = "DERIVED CONTEXT" $prevalence.graph.entity.hostname = $domain $prevalence.graph.entity.domain.prevalence.day count = 10 $prevalence.graph.entity.domain.prevalence.rolling max <= 5 $prevalence.graph.entity.domain.prevalence.rolling max > 0 match: $hostname over 1h outcome: $risk score = 80 $CL target = array($domain) condition: $e and $d and $prevalence } View composite detection findings You can view composite detection results in the Detections page.
- When to use composite detections Composite detections can be useful for achieving the following goals: Correlate outcomes of two or more rules (for example, linking a Malware Downloaded detection with a subsequent C2 Beaconing alert from the same host).
- Then, use a composite rule with a long match window (for example, 24 hours) to trigger on an initial suspicious login and correlate it with any of the following detections from the same user: A user clearing their command-line history.
- Composite detections Supported in: Google secops SIEM This document introduces composite detections and how they can enhance threat detection workflows by correlating outputs from multiple rules.

### "Google Unified Security \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security](https://docs.cloud.google.com/chronicle/docs/reference/google-unified-security)
- Source ID: `site-api-reference`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- Curated Detections & Prioritization : Pre-built detection rules (available in rule packs like "Applied Threat Intelligence - Curated Prioritization") contextualize IOC matches using event data and Mandiant intelligence features to generate prioritized alerts (Active Breach, High, Medium, Inbound IP Auth).
- Future-Proof Your Defenses: Proactive Threat Hunting with Integrated GTI in Google SecOps Integrating Google Threat Intelligence (GTI) directly within Google SecOps transforms threat detection and response from reactive to proactive through the Applied Threat Intelligence (ATI) feature.
- Proactive Threat Hunting: Utilize GTI feeds and insights within Google SecOps search and detection rules (YARA-L) to proactively hunt for emerging threats and specific attacker TTPs within your environment.
- Native Threat Feeds : Natively integrated threat intelligence feeds from Mandiant, VirusTotal, SafeBrowsing, and more, enable users to create their own custom detections and scoring methodologies.

### "Overview of composite rules category \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/composite-rules-category](https://docs.cloud.google.com/chronicle/docs/detection/composite-rules-category)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- The following categories outline the most important log sources required for the curated composite content to function effectively: Endpoint composite rule log sources Linux threats MacOS threats Windows threats Google Cloud composite rule log sources Google Cloud AWS Azure Office365 Okta Google Cloud and endpoint rule log sources Applied Threat Intelligence (ATI) Chrome Enterprise Threats Risk Analytics for UEBA For a complete list of the available curated detections, see Use curated detections .
- They establish severity, confidence, risk, and priority levels across all Google Security Operations-enabled detection content for Google Cloud and endpoint environments.
- Describe rule sets The Composite Rules category includes the following rule sets: Endpoint composite rules Cloud composite rules ATI composite rules Understand endpoint composite rules These rules correlate findings from multiple detection rules that relate to the same endpoint over a defined time period.
- Understand ATI composite rules ATI composite rules detect multiple unique Applied Threat Intelligence detections from the same campaign, malware variant, or threat actor to provide additional environmental context of any potential threat.

