---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.816Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "URL indicator matching"
feature_slug: "url-indicator-matching"
latest_feature_date: "2025-03-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/ati-fusion-feed"
  - "https://docs.cloud.google.com/chronicle/docs/detection/applied-threat-intel-overview"
  - "https://docs.cloud.google.com/chronicle/docs/detection/ati-prioritization"
keywords:
  - "url"
  - "indicator"
  - "matching"
  - "applied"
  - "threat"
  - "intelligence"
  - "can"
  - "match"
---

# URL indicator matching

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Applied Threat Intelligence can match URL indicators.

## Extended Definition

Applied Threat Intelligence can match URL indicators.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/ati-fusion-feed](https://docs.cloud.google.com/chronicle/docs/detection/ati-fusion-feed)
- [https://docs.cloud.google.com/chronicle/docs/detection/applied-threat-intel-overview](https://docs.cloud.google.com/chronicle/docs/detection/applied-threat-intel-overview)
- [https://docs.cloud.google.com/chronicle/docs/detection/ati-prioritization](https://docs.cloud.google.com/chronicle/docs/detection/ati-prioritization)

## Supporting Pages

### "Applied Threat Intelligence Fusion Feed overview \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/ati-fusion-feed](https://docs.cloud.google.com/chronicle/docs/detection/ati-fusion-feed)
- Source ID: `site-docs-reference`
- Final score: 207
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Condition section The condition section ensures that e1 , context graph , and matched conditions exist and or match the specified condition. condition: // Ensure $e1, $context graph and $matched conditions conditions are met. $e1 AND $context graph AND $matched conditions = 1 Complete YARA-L rule At this point the rule is ready for use and should look like the following: rule fusion feed example principal process file md5 { meta: rule name = "File Hash - Applied Threat Intelligence" description = "Matches file hashes against the Applied Threat Intelligence Fusion Feed." events: // Filter graph $context graph.graph.metadata.product name = "MANDIANT FUSION IOC" $context graph.graph.metadata.vendor name = "MANDIANT FUSION IOC" $context graph.graph.metadata.entity type = "FILE" $context graph.graph.metadata.source type = "GLOBAL CONTEXT" // Do join $ioc = $context graph.graph.entity.file.md5 $ioc = $e1.principal.process.file.md5 match: $ioc over 1h outcome: // Extract the Mandiant Automated Intel confidence score of maliciousness $confidence score = max(if($context graph.graph.metadata.threat.verdict info.source provider = "Mandiant Automated Intel", $context graph.graph.metadata.threat.verdict info.confidence score, 0)) // Extract the status of the indicator as seen in a breached environment $breached = max(if($context graph.graph.metadata.threat.verdict info.pwn = true, 1, 0)) // Intermediary outcome variable to combine conditions of intelligence extracted in the previous outcome variables. // Return 1 if conditions are met, otherwise return 0. $matched conditions = if($confidence score >= 80 AND $breached = 1, 1, 0) condition: // Ensure $e1, $context graph and $matched conditions conditions are met. $e1 AND $context graph AND $matched conditions = 1 } ATI Fusion Feed context entity fields You can use many fields from the ATI Fusion Feed in rules.
- This can all be done in the outcome section of the rule. outcome: // Extract the Mandiant Automated Intel confidence score of maliciousness $confidence score = max(if($context graph.graph.metadata.threat.verdict info.source provider = "Mandiant Automated Intel", $context graph.graph.metadata.threat.verdict info.confidence score, 0)) // Extract the status of the indicator as seen in a breached environment $breached = max(if($context graph.graph.metadata.threat.verdict info.pwn = true, 1, 0)) // Intermediary outcome variable to combine conditions of intelligence extracted in the previous outcome variables. // Return 1 if conditions are met, otherwise return 0. $matched conditions = if($confidence score >= 80 AND $breached = 1, 1, 0) In the outcome section of the YARA-L rule, the confidence score is extracted using an if statement wrapped in a max function.
- Applied Threat Intelligence Fusion Feed overview Supported in: Google secops SIEM The Applied Threat Intelligence (ATI) Fusion Feed is a collection of Indicators of Compromise (IoCs), including hashes, IPs, domains, and URLs, that are associated with known threat actors, malware strains, active campaigns, and finished intelligence reporting.
- To enhance indicator matching, YARA-L rules can use contextual information from the ATI Fusion Feed, such as associated threat groups, an indicator's presence in compromised environments, or Mandiant's automated maliciousness score.

### "Applied Threat Intelligence overview \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/applied-threat-intel-overview](https://docs.cloud.google.com/chronicle/docs/detection/applied-threat-intel-overview)
- Source ID: `site-docs-reference`
- Final score: 198
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Information about the IoC is displayed, including the following: GCTI priority GTI verdict Associations Campaigns You can also view detailed information about the events that triggered the IoC match, information from the threat intelligence source, and the rationale for the GTI score.
- Google SecOps curated detections evaluate your event data against Mandiant threat intelligence data, and generates an alert when one or more rules identify a match to an IoC with an active breach or high priority.
- When ATI is enabled, Google SecOps ingests IoCs curated by Mandiant threat intelligence that are classified as malicious by the Google Threat Indicator (GTI) verdict.
- Applied Threat Intelligence overview Supported in: Google secops SIEM Applied Threat Intelligence (ATI) helps you identify and respond to threats.

### "Applied Threat Intelligence priority overview \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/ati-prioritization](https://docs.cloud.google.com/chronicle/docs/detection/ati-prioritization)
- Source ID: `site-docs-reference`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Applied Threat Intelligence priority overview Supported in: Google secops SIEM Applied Threat Intelligence (ATI) alerts in Google Security Operations are IoC matches that have been contextualized by YARA-L rules using curated detection.
- Medium priority The Medium model prioritizes indicators identified by Google Threat Intelligence with a Malicious GTI Verdict and High GTI Severity, even if they weren't observed in Mandiant investigations.
- High priority The High model prioritizes indicators that weren't observed in Mandiant investigations, but were identified by Google Threat Intelligence as being associated with threat actors or malware.
- ATI priorities are provided in the Applied Threat Intelligence - Curated Prioritization rule pack, which is available in Google SecOps Managed Content with the Google SecOps Enterprise Plus license.

