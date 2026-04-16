---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T16:02:18.866Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Applied Threat Intelligence detection engineering and response automation"
feature_slug: "applied-threat-intelligence-detection-engineering-and-response-automation"
latest_feature_date: "2024-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/ati-fusion-feed"
  - "https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections"
  - "https://docs.cloud.google.com/chronicle/docs/detection/ati-prioritization"
keywords:
  - "applied"
  - "threat"
  - "intelligence"
  - "detection"
  - "engineering"
  - "response"
  - "automation"
  - "fusion"
---

# Applied Threat Intelligence detection engineering and response automation

Product: Google SecOps
Coverage: MEDIUM

## Step 02 Summary

Fusion intelligence enables customer-authored rules and response playbooks for detection engineering and automation.

## Extended Definition

Fusion intelligence enables customer-authored rules and response playbooks for detection engineering and automation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/ati-fusion-feed](https://docs.cloud.google.com/chronicle/docs/detection/ati-fusion-feed)
- [https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections)
- [https://docs.cloud.google.com/chronicle/docs/detection/ati-prioritization](https://docs.cloud.google.com/chronicle/docs/detection/ati-prioritization)

## Supporting Pages

### "Applied Threat Intelligence Fusion Feed overview \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/ati-fusion-feed](https://docs.cloud.google.com/chronicle/docs/detection/ati-fusion-feed)
- Source ID: `site-docs-reference`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It has also leveraged HTML smuggling to distribute ZIP files containing IMG files that contain LNK files and malware payloads.", "alias": [ { "name": "TA570 (Proofpoint)" } ], "first reference time": { "seconds": "1459085092" }, "last reference time": { "seconds": "1687392000" }, "industries affected": [ "Aerospace & Defense", "Agriculture", "Automotive", "Chemicals & Materials", "Civil Society & Non-Profits", "Construction & Engineering", "Education", "Energy & Utilities", "Financial Services", "Governments", "Healthcare", "Hospitality", "Insurance", "Legal & Professional Services", "Manufacturing", "Media & Entertainment", "Oil & Gas", "Pharmaceuticals", "Retail", "Technology", "Telecommunications", "Transportation" ] } ], "campaigns": [ "CAMP.23.007" ], "last updated time": { "seconds": "1695165683", "nanos": 48000000 }, "verdict info": [ { "source provider": "Mandiant Automated Intel", "confidence score": 75 }, { "verdict type": "ANALYST VERDICT", "confidence score": 75 }, { "source count": 91, "response count": 1, "verdict type": "PROVIDER ML VERDICT", "malicious count": 1, "ioc stats": [ { "ioc stats type": "MANDIANT SOURCES", "second level source": "Knowledge Graph", "quality": "HIGH CONFIDENCE", "malicious count": 1, "response count": 1, "source count": 8 }, { "ioc stats type": "MANDIANT SOURCES", "second level source": "Malware Analysis", "source count": 4 }, { "ioc stats type": "MANDIANT SOURCES", "second level source": "Spam Monitoring", "source count": 1 }, { "ioc stats type": "THIRD PARTY SOURCES", "second level source": "Crowdsourced Threat Analysis", "source count": 71 }, { "ioc stats type": "THIRD PARTY SOURCES", "first level source": "MISP", "second level source": "Trusted Software List", "source count": 3 }, { "ioc stats type": "THIRD PARTY SOURCES", "first level source": "Threat Intelligence Feeds", "second level source": "Digitalside It Hashes", "source count": 1 }, { "ioc stats type": "THIRD PARTY SOURCES", "first level source": "Threat Intelligence Feeds", "second level source": "Tds Harvester", "source count": 1 }, { "ioc stats type": "THIRD PARTY SOURCES", "first level source": "Threat Intelligence Feeds", "second level source": "Urlhaus", "source count": 1 } ] }, { "source provider": "Mandiant Analyst Intel", "confidence score": 75, "pwn": true, "pwn first tagged time": { "seconds": "1683911695" } } ], "last discovered time": { "seconds": "1683909854" } } ], "source type": "GLOBAL CONTEXT", "source labels": [ { "key": "is scanner", "value": "false" }, { "key": "osint", "value": "false" }, { "key": "misp akamai", "value": "false" }, ... { "key": "has pwn", "value": "2023-05-12T17:14:55.000+0000" } ], "event metadata": { "id": "\\000\\000\\000\\000\\034Z\\n\\2545\\237\\367\\353\\271\\357\\302\\215t\\330\\275\\237\\000\\000\\000\\000\\007\\000\\000\\000\\206\\000\\000\\000", "base labels": { "log types": [ "MANDIANT FUSION IOC" ], "allow scoped access": true } } }, "entity": { "file": { "sha256": "000bc5900dc7a32851e380f418cc178ff0910242ee0561ae37ff424e6d3ec64a", "md5": "f0095b0a7480c826095d9ffc9d5d2d8f", "sha1": "8101315b9fbbf6a72bddbfe64837d246f4c8b419" }, "labels": [ { "key": "is scanner", "value": "false" }, { "key": "osint", "value": "false" }, { "key": "misp akamai", "value": "false" }, ... ] } } Complex conditions To use multiple fields in a context entity, you can combine multiple outcome variables to create more complex conditional logic.
- Condition section The condition section ensures that e1 , context graph , and matched conditions exist and or match the specified condition. condition: // Ensure $e1, $context graph and $matched conditions conditions are met. $e1 AND $context graph AND $matched conditions = 1 Complete YARA-L rule At this point the rule is ready for use and should look like the following: rule fusion feed example principal process file md5 { meta: rule name = "File Hash - Applied Threat Intelligence" description = "Matches file hashes against the Applied Threat Intelligence Fusion Feed." events: // Filter graph $context graph.graph.metadata.product name = "MANDIANT FUSION IOC" $context graph.graph.metadata.vendor name = "MANDIANT FUSION IOC" $context graph.graph.metadata.entity type = "FILE" $context graph.graph.metadata.source type = "GLOBAL CONTEXT" // Do join $ioc = $context graph.graph.entity.file.md5 $ioc = $e1.principal.process.file.md5 match: $ioc over 1h outcome: // Extract the Mandiant Automated Intel confidence score of maliciousness $confidence score = max(if($context graph.graph.metadata.threat.verdict info.source provider = "Mandiant Automated Intel", $context graph.graph.metadata.threat.verdict info.confidence score, 0)) // Extract the status of the indicator as seen in a breached environment $breached = max(if($context graph.graph.metadata.threat.verdict info.pwn = true, 1, 0)) // Intermediary outcome variable to combine conditions of intelligence extracted in the previous outcome variables. // Return 1 if conditions are met, otherwise return 0. $matched conditions = if($confidence score >= 80 AND $breached = 1, 1, 0) condition: // Ensure $e1, $context graph and $matched conditions conditions are met. $e1 AND $context graph AND $matched conditions = 1 } ATI Fusion Feed context entity fields You can use many fields from the ATI Fusion Feed in rules.
- Applied Threat Intelligence Fusion Feed overview Supported in: Google secops SIEM The Applied Threat Intelligence (ATI) Fusion Feed is a collection of Indicators of Compromise (IoCs), including hashes, IPs, domains, and URLs, that are associated with known threat actors, malware strains, active campaigns, and finished intelligence reporting.
- The following example shows a Fusion Feed context entity as an initial reference point: { "metadata": { "product entity id": "md5--147d19e6-cdae-57bb-b9a1-a8676265fa4c", "collected timestamp": { "seconds": "1695165683", "nanos": 48000000 }, "vendor name": "MANDIANT FUSION IOC", "product name": "MANDIANT FUSION IOC", "product version": "1710194393", "entity type": "FILE", "creation timestamp": { "seconds": "1710201600" }, "interval": { "start time": { "seconds": "1" }, "end time": { "seconds": "253402300799" } }, "threat": [ { "category details": [ "A phishing email message or the relevant headers from a phishing email." ], "severity details": "HIGH", "confidence details": "75", "risk score": 75, "first discovered time": { "seconds": "1683294326" }, "associations": [ { "id": "threat-actor--3e5e6bdf-5b4e-5166-84fa-83045e637f23", "type": "THREAT ACTOR", "name": "UNC2633" }, { "id": "threat-actor--3e5e6bdf-5b4e-5166-84fa-83045e637f23", "country code": [ "unknown" ], "type": "THREAT ACTOR", "name": "UNC2633", "description": "UNC2633 is a distribution threat cluster that delivers emails containing malicious attachments or links that lead to malware payloads, primarily QAKBOT, but also SNOWCONE.GZIPLOADER (which leads to ICEDID) and MATANBUCHUS.

### "Applied Threat Intelligence curated detections overview \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections)
- Source ID: `site-docs-reference`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Curated detection rule sets The Curated Prioritization category includes the following rule sets that support the Applied Threat Intelligence feature in Google SecOps: Active Breach Priority Network Indicators : Detects network-related Indicators of Compromise (IoCs) in event data using Mandiant Threat Intelligence and prioritizes IoCs with the 'Active breach' label.
- Applied Threat Intelligence curated detections overview Supported in: Google secops SIEM This document provides an overview of the Curated Detection rule sets within the Applied Threat Intelligence Curated Prioritization category, available in Google Security Operations Enterprise Plus.
- Tuning alerts returned by Applied Threat Intelligence category You can reduce the number of detections a rule or rule set generates using rule exclusions .
- If the network.direction field is not populated in the UDM event, then Applied Threat Intelligence checks the principal.ip and target.ip fields against RFC 1918 internal IP address ranges to determine the network direction.

### "Applied Threat Intelligence priority overview \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/ati-prioritization](https://docs.cloud.google.com/chronicle/docs/detection/ati-prioritization)
- Source ID: `site-docs-reference`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Applied Threat Intelligence priority overview Supported in: Google secops SIEM Applied Threat Intelligence (ATI) alerts in Google Security Operations are IoC matches that have been contextualized by YARA-L rules using curated detection.
- Priority models are used in the curated detection rules provided in the Applied Threat Intelligence - Curated prioritization rule pack.
- For more information about writing Fusion feed YARA-L rules, see Applied Threat Intelligence fusion feed overview .
- ATI priorities are provided in the Applied Threat Intelligence - Curated Prioritization rule pack, which is available in Google SecOps Managed Content with the Google SecOps Enterprise Plus license.

