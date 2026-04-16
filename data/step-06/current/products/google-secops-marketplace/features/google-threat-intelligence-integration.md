---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:17.678Z"
product_name: "Google SecOps Marketplace"
product_slug: "google-secops-marketplace"
feature_name: "Google Threat Intelligence integration"
feature_slug: "google-threat-intelligence-integration"
latest_feature_date: "2025-06-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection"
  - "https://docs.cloud.google.com/chronicle/docs/detection/answer-threat-intelligence-questions-gemini"
  - "https://docs.cloud.google.com/chronicle/docs/detection/applied-threat-intel-overview"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream"
keywords:
  - "threat"
  - "intelligence"
  - "integration"
  - "adds"
  - "the"
---

# Google Threat Intelligence integration

Product: Google SecOps Marketplace
Coverage: MEDIUM

## Step 02 Summary

Adds the Google Threat Intelligence integration.

## Extended Definition

Adds the Google Threat Intelligence integration.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection](https://docs.cloud.google.com/chronicle/docs/detection)
- [https://docs.cloud.google.com/chronicle/docs/detection/answer-threat-intelligence-questions-gemini](https://docs.cloud.google.com/chronicle/docs/detection/answer-threat-intelligence-questions-gemini)
- [https://docs.cloud.google.com/chronicle/docs/detection/applied-threat-intel-overview](https://docs.cloud.google.com/chronicle/docs/detection/applied-threat-intel-overview)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream)

## Supporting Pages

### "Threat Intelligence overview \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection](https://docs.cloud.google.com/chronicle/docs/detection)
- Source ID: `site-docs-reference`
- Final score: 190
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can integrate and use Google Threat Intelligence within Google SecOps using the following integration methods: Applied Threat Intelligence (ATI) This fully managed, native pipeline automatically curates and applies Google's threat intelligence.
- An active Google Threat Intelligence license to use the Bring Your Own License (BYOL) integration.
- Includes a fully built-in and managed integration that automatically uses the complete spectrum of Google, Mandiant, and VirusTotal intelligence to provide automated context, enrichment, and alerting without manual pipeline configuration.
- Bring your own license (BYOL) Google Threat Intelligence integration This customer-deployed pipeline ingests licensed Google Threat Intelligence (GTI) data (Threat Lists, IoC Streams, and adversary context) into Google SecOps.

### "Answer Threat Intelligence questions with Gemini \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/answer-threat-intelligence-questions-gemini](https://docs.cloud.google.com/chronicle/docs/detection/answer-threat-intelligence-questions-gemini)
- Source ID: `site-docs-reference`
- Final score: 150
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Answer Threat Intelligence questions with Gemini Supported in: Google secops SIEM Gemini can answer questions related to threat intelligence about topics such as threat actors, their associations, and their behavior patterns, including questions about MITRE TTPs .
- Specifically, threat intelligence data is more limited in product editions other than Enterprise Plus because they don't include full access to Mandiant and VirusTotal.
- Investigate further by asking Gemini to create queries to look for specific indicators of compromise (IOCs) referenced in the threat intelligence reports.
- Example: Threat intelligence and security questions Help me hunt for APT 44 Are there any known attacker tools that use RDP to brute force logins?

### "Applied Threat Intelligence overview \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/applied-threat-intel-overview](https://docs.cloud.google.com/chronicle/docs/detection/applied-threat-intel-overview)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Information about the IoC is displayed, including the following: GCTI priority GTI verdict Associations Campaigns You can also view detailed information about the events that triggered the IoC match, information from the threat intelligence source, and the rationale for the GTI score.
- When ATI is enabled, Google SecOps ingests IoCs curated by Mandiant threat intelligence that are classified as malicious by the Google Threat Indicator (GTI) verdict.
- To use Applied Threat Intelligence, do the following: Enable the Applied Threat Intelligence curated detections .
- Google SecOps curated detections evaluate your event data against Mandiant threat intelligence data, and generates an alert when one or more rules identify a match to an IoC with an active breach or high priority.

### "Integrate Anomali ThreatStream with Google SecOps \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/anomali-threatstream)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Integration parameters Use the following parameters to configure the integration: Parameter name Type Default value Is mandatory Description Web Root String https://siemplify.threatstream.com Yes Web Root of the Anomali ThreatStream instance.
- Verify SSL Checkbox Unchecked Yes If selected, the integration validates the SSL certificate when connecting to the Anomali ThreatStream server.
- Run on This action runs on the following entities: Hash IP Address URL Email Action results Script result Script result name Value options Example is success True or False is success:False JSON result { "campaign" : [ { "name" : "Example 1" , "id" : 1 }, { "name" : "Example 2" , "id" : 2 } ], "actor" : [ { "name" : "Actor 1" , "id" : 1 }, { "name" : "Actor 2" , "id" : 2 } ], "attackpattern" : [ { "name" : "Pattern 1" , "id" : 1 }, { "name" : "Pattern 2" , "id" : 2 } ], "courseofaction" : [ { "name" : "Course of Action 1" , "id" : 1 }, { "name" : "Course Of Action 2" , "id" : 2 } ], "identity" : [ { "name" : "Identity 1" , "id" : 1 }, { "name" : "Identity 2" , "id" : 2 } ], "incident" : [ { "name" : "Incident 1" , "id" : 1 }, { "name" : "Incident 2" , "id" : 2 } ], "infrastructure" : [ { "name" : "Infrustructure 1" , "id" : 1 }, { "name" : "Infrustructure 2" , "id" : 2 } ], "intrusionset" : [ { "name" : "Intrusion set 1" , "id" : 1 }, { "name" : "Intrusion set 2" , "id" : 2 } ], "malware" : [ { "name" : "Malware 1" , "id" : 1 }, { "name" : "Malware 2" , "id" : 2 } ], "signature" : [ { "name" : "Signature 1" , "id" : 1 }, { "name" : "Signature 2" , "id" : 2 } ], "tool" : [ { "name" : "Tool 1" , "id" : 1 }, { "name" : "Tool 2" , "id" : 2 } ], "ttp" : [ { "name" : "TTP 1" , "id" : 1 }, { "name" : "TTP 2" , "id" : 2 } ], "vulnerability" : [ { "name" : "Vulnerability 1" , "id" : 1 }, { "name" : "Vulnerability 2" , "id" : 2 } ], } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful and at least one association across entities is found (is success=true): "Successfully retrieved related associations from Anomali ThreatStream" If no associations are found (is success=false) : "No related associations were found." Async Message: "Waiting for all of the association details to be retrieved" The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Get Related Association".
- Run on This action runs on the following entities: Hash IP Address URL Email Action results Script result Script result name Value options Example is success True or False is success:False Entity enrichment Enrichment field name Logic - When to apply id When available in JSON status When available in JSON itype When available in JSON expiration time When available in JSON ip When available in JSON feed id When available in JSON confidence When available in JSON uuid When available in JSON retina confidence When available in JSON trusted circle ids When available in JSON source When available in JSON latitude When available in JSON type When available in JSON description When available in JSON tags When available in JSON threat score When available in JSON source confidence When available in JSON modification time When available in JSON org name When available in JSON asn When available in JSON creation time When available in JSON tlp When available in JSON country When available in JSON longitude When available in JSON severity When available in JSON subtype When available in JSON report When available in JSON Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful and at least one of the provided entities is enriched (is success=true): "Successfully enriched the following entities using Anomali ThreatStream: \n {0}".format(entity.identifier list) If failed to enrich specific entities (is success=true): "Action was not able to enrich the following entities using Anomali ThreatStream\n: {0}".format([entity.identifier]) If failed to enrich all entities (is success=false): "No entities were enriched." The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to server, other is reported: "Error executing action "Enrich Entities".

