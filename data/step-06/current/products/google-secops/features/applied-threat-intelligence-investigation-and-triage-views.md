---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:24:01.983Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Applied Threat Intelligence investigation and triage views"
feature_slug: "applied-threat-intelligence-investigation-and-triage-views"
latest_feature_date: "2024-03-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections"
  - "https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent"
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
keywords:
  - "applied"
  - "threat"
  - "intelligence"
  - "investigation"
  - "and"
  - "triage"
  - "views"
  - "curated"
---

# Applied Threat Intelligence investigation and triage views

Product: Google SecOps
Coverage: LOW

## Step 02 Summary

Curated views show indicator associations, threat context, and environment statistics for investigation and triage.

## Extended Definition

Curated views show indicator associations, threat context, and environment statistics for investigation and triage.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections)
- [https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent](https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent)
- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)

## Supporting Pages

### "Applied Threat Intelligence curated detections overview \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Curated detection rule sets The Curated Prioritization category includes the following rule sets that support the Applied Threat Intelligence feature in Google SecOps: Active Breach Priority Network Indicators : Detects network-related Indicators of Compromise (IoCs) in event data using Mandiant Threat Intelligence and prioritizes IoCs with the 'Active breach' label.
- Applied Threat Intelligence curated detections overview Supported in: Google secops SIEM This document provides an overview of the Curated Detection rule sets within the Applied Threat Intelligence Curated Prioritization category, available in Google Security Operations Enterprise Plus.
- If the network.direction field is not populated in the UDM event, then Applied Threat Intelligence checks the principal.ip and target.ip fields against RFC 1918 internal IP address ranges to determine the network direction.
- Google SecOps evaluates your UDM event data against IoCs curated by Mandiant Threat Intelligence and identifies matches for domains, IP addresses, file hashes, and URLs.

### "Use Triage and Investigation Agent to investigate alerts \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent](https://docs.cloud.google.com/chronicle/docs/secops/triage-investigation-agent)
- Source ID: `site-docs-reference-2`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Contextual enrichment and evidence gathering The agent executes several parallel analysis steps to build a comprehensive picture of the suspicious activity by leveraging internal and external intelligence: Google Threat Intelligence (GTI) enrichment : Identifies and evaluates indicators of compromise (IoCs), such as file hashes, IP addresses, and domains against Google Threat Intelligence and VirusTotal to identify known malicious entities.
- Use Triage and Investigation Agent to investigate alerts Supported in: Google secops The Triage and Investigation Agent (TIN) is an AI-powered investigation assistant embedded in Google Security Operations.
- GTI enrichment: Enriches IoCs with Google Threat Intelligence (GTI) data, including domains, URLs, and hashes.
- For a list of IAM permissions required for using the agent, see Triage and Investigation Agent (TIN) .

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Customer authoring of rules Customer development of response playbooks Curated views for Investigation and triage Insights : Applied Threat Intelligence provides curated views that show valuable associations between an indicator and threat actor, threat campaign, or malware, statistics about a threat observed in customer environments.
- March 23, 2026 Announcement New parser documentation now available New parser documentation is available to help you ingest and normalize logs from the following sources: Collect Cisco Umbrella Cloud Firewall logs Collect Cisco Umbrella IP logs Collect Claroty xDome for Healthcare logs Collect CloudM logs Collect Digital Guardian EDR logs Collect DNSFilter logs Collect Dope Security SWG logs Collect Druva Backup logs Collect EfficientIP DDI logs Collect Elastic Defend logs Collect Elastic Windows Event Log Beats logs Collect Ergon Informatik Airlock IAM logs Collect ESET Threat Intelligence logs Collect F5 Distributed Cloud Services logs Collect F5 Shape logs Collect F5 Silverline logs Collect Falco IDS logs Collect Fastly CDN logs Collect File Scanning Framework logs Collect FireEye ETP logs Collect FireEye HX Audit logs Collect FireEye NX Audit logs Collect Fivetran logs Collect Forcepoint Mail Relay logs Collect GitGuardian Enterprise logs Collect Google Cloud Looker audit logs Collect Guardicore Centra logs Collect HCL BigFix logs Collect HID DigitalPersona logs Collect IBM AS/400 logs Collect IBM Informix logs Collect IBM MaaS360 logs Collect IBM Mainframe Storage logs Collect IBM OpenPages logs Collect IBM Security Access Manager logs Collect IBM Security Identity Manager logs Collect iBoss Web Proxy logs Collect Intel 471 Watcher Alerts logs Collect Intel Endpoint Management Assistant logs Collect IONIX Attack Surface Management logs Collect Island Enterprise Browser logs Collect Jamf Protect Telemetry V2 logs Collect Keycloak logs Collect Kong Gateway logs Collect LenelS2 OnGuard logs Collect Lookout Mobile Endpoint Security logs Collect Lucid audit logs Collect ManageEngine Exchange Reporter Plus logs Collect Mandiant Threat Intelligence Custom IOC logs Collect Menlo Security Isolation Platform (MSIP) logs Collect Metabase logs Collect Microsoft Defender for Endpoint on iOS logs Collect Microsoft Dynamics 365 User Activity logs Collect Microsoft IAS / Network Policy Server (NPS) logs Collect Microsoft Network Policy Server (NPS) logs Collect OAuth2 Proxy logs Collect Office 365 Message Trace logs Collect Progress MOVEit Transfer logs Collect Netscout Arbor Sightline logs Collect Skyhigh Secure Web Gateway (On-Premises) logs Collect ThreatDown EDR logs Collect Trellix Endpoint Security (HX) alert logs Collect Trellix Endpoint Security (HX) audit event logs Collect Trellix Endpoint Security (HX) host inventory logs March 20, 2026 Feature View Triage and Investigation Agent (TIN) results in the Case Summary This feature is currently in Preview and is part of a gradual rollout.
- May 08, 2024 Change When Applied Threat Intelligence is enabled, it ingests IOCs curated by Mandiant Threat Intelligence with an IC-Score greater than 80 and generates an alert when a match is found.
- Curated behavioral detections for emerging threats : To protect against newly emerging risks and tactics, techniques, and procedures (TTPs), Applied Threat Intelligence uses real-time insights.

