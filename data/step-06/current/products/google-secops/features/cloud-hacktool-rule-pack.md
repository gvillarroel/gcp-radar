---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.815Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Cloud Hacktool rule pack"
feature_slug: "cloud-hacktool-rule-pack"
latest_feature_date: "2025-03-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/composite-rules-category"
  - "https://docs.cloud.google.com/chronicle/docs/detection/curated-detections"
  - "https://docs.cloud.google.com/chronicle/docs/detection/composite-detections"
keywords:
  - "hacktool"
  - "rule"
  - "pack"
  - "curated"
  - "detections"
  - "added"
  - "rules"
  - "detecting"
---

# Cloud Hacktool rule pack

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Curated Detections added Google Cloud rules for detecting common open source hacktools.

## Extended Definition

Curated Detections added Google Cloud rules for detecting common open source hacktools.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/composite-rules-category](https://docs.cloud.google.com/chronicle/docs/detection/composite-rules-category)
- [https://docs.cloud.google.com/chronicle/docs/detection/curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/curated-detections)
- [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)

## Supporting Pages

### "Overview of composite rules category \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/composite-rules-category](https://docs.cloud.google.com/chronicle/docs/detection/composite-rules-category)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following categories outline the most important log sources required for the curated composite content to function effectively: Endpoint composite rule log sources Linux threats MacOS threats Windows threats Google Cloud composite rule log sources Google Cloud AWS Azure Office365 Okta Google Cloud and endpoint rule log sources Applied Threat Intelligence (ATI) Chrome Enterprise Threats Risk Analytics for UEBA For a complete list of the available curated detections, see Use curated detections .
- Understand ATI composite rules ATI composite rules detect multiple unique Applied Threat Intelligence detections from the same campaign, malware variant, or threat actor to provide additional environmental context of any potential threat.
- To ensure these rules produce alerts, you must enable Applied Threat Intelligence rule packs, such as "Active Breach", "High", or "Medium".
- Describe rule sets The Composite Rules category includes the following rule sets: Endpoint composite rules Cloud composite rules ATI composite rules Understand endpoint composite rules These rules correlate findings from multiple detection rules that relate to the same endpoint over a defined time period.

### "Use the curated detections page \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/curated-detections)
- Source ID: `site-docs-root`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- Open the curated detections page and rule sets To open the curated detections page, complete the following steps: Select Rules from the main menu.
- As part of these curated detections, GCTI provides and manages a set of YARA-L rules to help customers identify threats to their enterprise.
- Figure 2: Curated Detections dashboard The Curated Detections dashboard displays each of the rule sets available to your Google SecOps account.
- Alerting : Enable alerting to receive detections created by corresponding precise or broad rules by setting the Alerting option to On .

### "Composite detections \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/composite-detections](https://docs.cloud.google.com/chronicle/docs/detection/composite-detections)
- Source ID: `site-docs-reference-required-3`
- Final score: 151
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example : rule CheckCuratedDetection with EDR and EG { meta: author = "noone@cymbal.com" events: $d.detection.detection.rule name = /SCC: Custom Modules: Configurable Bad Domain/ $d.detection.collection elements.references.event.network.dns.questions.name = $domain $d.detection.collection elements.references.event.principal.asset.hostname = $hostname $e.metadata.log type = "LIMACHARLIE EDR" $e.metadata.product event type = "NETWORK CONNECTIONS" $domain = re.capture($e.principal.process.command line, "\\s([a-zA-Z0-9.-]+\\.[a-zA-Z0-9.-]+)$") $hostname = re.capture($e.principal.hostname, "([^.] )") $prevalence.graph.metadata.entity type = "DOMAIN NAME" $prevalence.graph.metadata.source type = "DERIVED CONTEXT" $prevalence.graph.entity.hostname = $domain $prevalence.graph.entity.domain.prevalence.day count = 10 $prevalence.graph.entity.domain.prevalence.rolling max <= 5 $prevalence.graph.entity.domain.prevalence.rolling max > 0 match: $hostname over 1h outcome: $risk score = 80 $CL target = array($domain) condition: $e and $d and $prevalence } View composite detection findings You can view composite detection results in the Detections page.
- When to use composite detections Composite detections can be useful for achieving the following goals: Correlate outcomes of two or more rules (for example, linking a Malware Downloaded detection with a subsequent C2 Beaconing alert from the same host).
- Composite detections Supported in: Google secops SIEM This document introduces composite detections and how they can enhance threat detection workflows by correlating outputs from multiple rules.
- The following concepts define the building blocks of composite rules and clarify how they function within detection workflows: Composite rules : use detections or alerts (or both) as input.

