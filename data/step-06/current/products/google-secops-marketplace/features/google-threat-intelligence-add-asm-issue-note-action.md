---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:17.663Z"
product_name: "Google SecOps Marketplace"
product_slug: "google-secops-marketplace"
feature_name: "Google Threat Intelligence Add ASM Issue Note action"
feature_slug: "google-threat-intelligence-add-asm-issue-note-action"
latest_feature_date: "2026-01-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/answer-threat-intelligence-questions-gemini"
  - "https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream"
  - "https://docs.cloud.google.com/chronicle/docs/detection/ati-prioritization"
keywords:
  - "threat"
  - "intelligence"
  - "add"
  - "asm"
  - "issue"
  - "note"
  - "action"
  - "adds"
---

# Google Threat Intelligence Add ASM Issue Note action

Product: Google SecOps Marketplace
Coverage: MEDIUM

## Step 02 Summary

Adds an action that adds an ASM issue note in Google Threat Intelligence.

## Extended Definition

Adds an action that adds an ASM issue note in Google Threat Intelligence.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/answer-threat-intelligence-questions-gemini](https://docs.cloud.google.com/chronicle/docs/detection/answer-threat-intelligence-questions-gemini)
- [https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream)
- [https://docs.cloud.google.com/chronicle/docs/detection/ati-prioritization](https://docs.cloud.google.com/chronicle/docs/detection/ati-prioritization)

## Supporting Pages

### "Answer Threat Intelligence questions with Gemini \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/answer-threat-intelligence-questions-gemini](https://docs.cloud.google.com/chronicle/docs/detection/answer-threat-intelligence-questions-gemini)
- Source ID: `site-docs-reference`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Answer Threat Intelligence questions with Gemini Supported in: Google secops SIEM Gemini can answer questions related to threat intelligence about topics such as threat actors, their associations, and their behavior patterns, including questions about MITRE TTPs .
- Specifically, threat intelligence data is more limited in product editions other than Enterprise Plus because they don't include full access to Mandiant and VirusTotal.
- Investigate further by asking Gemini to create queries to look for specific indicators of compromise (IOCs) referenced in the threat intelligence reports.
- Example: Threat intelligence and security questions Help me hunt for APT 44 Are there any known attacker tools that use RDP to brute force logins?

### "Applied Threat Intelligence curated detections overview \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- These fields, combined with prioritization features from Mandiant Threat Intelligence, help determine priority levels, such as Active breach, High, or Medium: network.direction security result.[]action event count (active breach IP address only) For IP address indicators, the network.direction is required.
- If the network.direction field is not populated in the UDM event, then Applied Threat Intelligence checks the principal.ip and target.ip fields against RFC 1918 internal IP address ranges to determine the network direction.
- Google SecOps evaluates your UDM event data against IoCs curated by Mandiant Threat Intelligence and identifies matches for domains, IP addresses, file hashes, and URLs.
- Curated detection rule sets The Curated Prioritization category includes the following rule sets that support the Applied Threat Intelligence feature in Google SecOps: Active Breach Priority Network Indicators : Detects network-related Indicators of Compromise (IoCs) in event data using Mandiant Threat Intelligence and prioritizes IoCs with the 'Active breach' label.

### "Integrate Anomali ThreatStream with Google SecOps \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Run on This action runs on the following entities: Hash IP Address URL Email Action results Script result Script result name Value options Example is success True or False is success:False JSON result { "campaign" : [ { "name" : "Example 1" , "id" : 1 }, { "name" : "Example 2" , "id" : 2 } ], "actor" : [ { "name" : "Actor 1" , "id" : 1 }, { "name" : "Actor 2" , "id" : 2 } ], "attackpattern" : [ { "name" : "Pattern 1" , "id" : 1 }, { "name" : "Pattern 2" , "id" : 2 } ], "courseofaction" : [ { "name" : "Course of Action 1" , "id" : 1 }, { "name" : "Course Of Action 2" , "id" : 2 } ], "identity" : [ { "name" : "Identity 1" , "id" : 1 }, { "name" : "Identity 2" , "id" : 2 } ], "incident" : [ { "name" : "Incident 1" , "id" : 1 }, { "name" : "Incident 2" , "id" : 2 } ], "infrastructure" : [ { "name" : "Infrustructure 1" , "id" : 1 }, { "name" : "Infrustructure 2" , "id" : 2 } ], "intrusionset" : [ { "name" : "Intrusion set 1" , "id" : 1 }, { "name" : "Intrusion set 2" , "id" : 2 } ], "malware" : [ { "name" : "Malware 1" , "id" : 1 }, { "name" : "Malware 2" , "id" : 2 } ], "signature" : [ { "name" : "Signature 1" , "id" : 1 }, { "name" : "Signature 2" , "id" : 2 } ], "tool" : [ { "name" : "Tool 1" , "id" : 1 }, { "name" : "Tool 2" , "id" : 2 } ], "ttp" : [ { "name" : "TTP 1" , "id" : 1 }, { "name" : "TTP 2" , "id" : 2 } ], "vulnerability" : [ { "name" : "Vulnerability 1" , "id" : 1 }, { "name" : "Vulnerability 2" , "id" : 2 } ], } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful and at least one association across entities is found (is success=true): "Successfully retrieved related associations from Anomali ThreatStream" If no associations are found (is success=false) : "No related associations were found." Async Message: "Waiting for all of the association details to be retrieved" The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Get Related Association".
- Run on This action runs on the following entities: Hash IP Address URL Email Action results Script result Script result name Value options Example is success True or False is success:False Entity enrichment Enrichment field name Logic - When to apply id When available in JSON status When available in JSON itype When available in JSON expiration time When available in JSON ip When available in JSON feed id When available in JSON confidence When available in JSON uuid When available in JSON retina confidence When available in JSON trusted circle ids When available in JSON source When available in JSON latitude When available in JSON type When available in JSON description When available in JSON tags When available in JSON threat score When available in JSON source confidence When available in JSON modification time When available in JSON org name When available in JSON asn When available in JSON creation time When available in JSON tlp When available in JSON country When available in JSON longitude When available in JSON severity When available in JSON subtype When available in JSON report When available in JSON Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful and at least one of the provided entities is enriched (is success=true): "Successfully enriched the following entities using Anomali ThreatStream: \n {0}".format(entity.identifier list) If failed to enrich specific entities (is success=true): "Action was not able to enrich the following entities using Anomali ThreatStream\n: {0}".format([entity.identifier]) If failed to enrich all entities (is success=false): "No entities were enriched." The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Enrich Entities".
- Run on This action runs on the following entities: Hash IP Address URL Email Action results Script result Script result name Value options Example is success True or False is success:False Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful and at least one tag is removed from one entity (is success=true): "Successfully removed the following tags from the "{entity.identifier}" entity in Anomali ThreatStream:\n{0}".format(tags) If one tag is not found for one entity (is success=true): "The following tags were already not a part of "{entity.identifier}" entity in Anomali ThreatStream:\n{0}".format(tags) If all tags are not found for one entity (is success=true): "None of the provided tags were part of "{entity.identifier}" entity in Anomali ThreatStream." If one entity is not found (is success=true): "The following entities were not found in Anomali ThreatStream\n: {0}".format([entity.identifier]) If all entities are not found (is success=false): "None of the provided entities were found." The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Remove Tags From Entities".
- Run on This action runs on the following entities: Hash IP Address URL Email Action results Script result Script result name Value options Example is success True or False is success:False JSON result approved jobs = [ { "id" :, "entity" : { e nt i t y.ide nt i f ier } } ] jobs wi t h excluded e nt i t ies = [ { "id" :, "entity" : { e nt i t y.ide nt i f ier } } ] Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful and at least one hash across entities is found(is success=true): "Successfully submitted and approved the following entities in Anomali ThreatStream:\n{0}".format(entity.identifier list) If fails to enrich some entities (rejected entities) (is success=true): "Action was not able to successfully submit and approve the following entities in Anomali ThreatStream\n: {0}".format([entity.identifier]) If fails to enrich for all entities (is success=false): "No entities were successfully submitted to Anomali ThreatStream." The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Submit Observables".

### "Applied Threat Intelligence priority overview \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/ati-prioritization](https://docs.cloud.google.com/chronicle/docs/detection/ati-prioritization)
- Source ID: `site-docs-reference`
- Final score: 150
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The ATI actionable threat intelligence models can then help you respond to the generated alerts.
- Applied Threat Intelligence priority overview Supported in: Google secops SIEM Applied Threat Intelligence (ATI) alerts in Google Security Operations are IoC matches that have been contextualized by YARA-L rules using curated detection.
- Medium priority The Medium model prioritizes indicators identified by Google Threat Intelligence with a Malicious GTI Verdict and High GTI Severity, even if they weren't observed in Mandiant investigations.
- High priority The High model prioritizes indicators that weren't observed in Mandiant investigations, but were identified by Google Threat Intelligence as being associated with threat actors or malware.

