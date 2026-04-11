---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:24:01.982Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Applied Threat Intelligence insights"
feature_slug: "applied-threat-intelligence-insights"
latest_feature_date: "2024-03-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections"
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/detection/applied-threat-intel-overview"
keywords:
  - "applied"
  - "threat"
  - "intelligence"
  - "insights"
  - "provides"
  - "curated"
  - "into"
  - "associations"
---

# Applied Threat Intelligence insights

Product: Google SecOps
Coverage: LOW

## Step 02 Summary

Applied Threat Intelligence provides curated insights into associations between indicators, threat actors, campaigns, and malware.

## Extended Definition

Applied Threat Intelligence provides curated insights into associations between indicators, threat actors, campaigns, and malware.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections)
- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/detection/applied-threat-intel-overview](https://docs.cloud.google.com/chronicle/docs/detection/applied-threat-intel-overview)

## Supporting Pages

### "Applied Threat Intelligence curated detections overview \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections](https://docs.cloud.google.com/chronicle/docs/detection/ati-curated-detections)
- Source ID: `site-docs-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Applied Threat Intelligence curated detections overview Supported in: Google secops SIEM This document provides an overview of the Curated Detection rule sets within the Applied Threat Intelligence Curated Prioritization category, available in Google Security Operations Enterprise Plus.
- Curated detection rule sets The Curated Prioritization category includes the following rule sets that support the Applied Threat Intelligence feature in Google SecOps: Active Breach Priority Network Indicators : Detects network-related Indicators of Compromise (IoCs) in event data using Mandiant Threat Intelligence and prioritizes IoCs with the 'Active breach' label.
- If the network.direction field is not populated in the UDM event, then Applied Threat Intelligence checks the principal.ip and target.ip fields against RFC 1918 internal IP address ranges to determine the network direction.
- Google SecOps evaluates your UDM event data against IoCs curated by Mandiant Threat Intelligence and identifies matches for domains, IP addresses, file hashes, and URLs.

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Customer authoring of rules Customer development of response playbooks Curated views for Investigation and triage Insights : Applied Threat Intelligence provides curated views that show valuable associations between an indicator and threat actor, threat campaign, or malware, statistics about a threat observed in customer environments.
- Curated behavioral detections for emerging threats : To protect against newly emerging risks and tactics, techniques, and procedures (TTPs), Applied Threat Intelligence uses real-time insights.
- Aikido ( AIKIDO ) Akamai API Security ( AKAMAI API SECURITY ) Alkira IP Flow ( ALKIRA IP FLOW ) Atlassian Guard Detect ( ATLASSIAN GUARD DETECT ) BlinkOps ( BLINKOPS ) Canvas LMS ( CANVAS LMS ) Cisco Secure Email Threat Defense ( CISCO SECURE EMAIL THREAT DEFENSE ) Cisco StarOS ( CISCO STAR OS ) Citadel Identity360 ( CITADEL IDENTITY360 ) Cyware Threat Intelligence Exchange ( CTIX ) Cyberark Identity Audit ( CYBERARK IDENTITY AUDIT ) CyCognito ASM ( CYCOGNITO ASM ) Dell VxRail ( DELL VXRAIL ) Gene6 FTP Server ( GENE6 FTP ) IBM Copy Services Manager ( IBM CSM ) LangSmith Audit ( LANGSMITH AUDIT ) Mellanox Switch ( MELLANOX SWITCH ) Microsoft Entra ID Protection ( MICROSOFT ENTRA ID PROTECTION ) NSFOCUS Next Generation Intrusion Prevention System ( NSFOCUS NGIPS ) Perplexity ( PERPLEXITY ) Pleasant Password Server ( PLEASANT PASSWORD SERVER ) Prompt Security ( PROMPT SECURITY ) Qualtrics Audit ( QUALTRICS AUDIT ) Rancher API Audit Log ( RANCHER API AUDIT LOG ) Rubrik Security Cloud ( RUBRIK SECURITY CLOUD ) SAP Business Warehouse ( SAP BW ) SAP Change Document ( SAP CHANGE DOCUMENT ) SAP Gateway ( SAP GATEWAY ) SAP Hana Audit ( SAP HANA AUDIT ) Scale Computing ( SCALE COMPUTING ) Slack API ( SLACK API ) Snowplow ( SNOWPLOW ) Sterling Order Management System Data ( STERLING OMS DATA ) Strivacity ( STRIVACITY ) Tencent CloudAudit ( TENCENT CLOUD AUDIT ) Trellix EX ( TRELLIX EX ) Unifi System ( UNIFI SYSTEM ) Windows Bindplane ( WINDOWS BINDPLANE ) Witness AI Control ( WITNESS AI CONTROL ) Zendesk Advanced Data Privacy and Protection ( ZENDESK ADPP ) January 30, 2026 Announcement The following v2 feed types, which utilize Google Storage Transfer Service (STS), are now in General Availability: Google Cloud Storage v2 Amazon S3 v2 Google Cloud Storage (Event Driven) Amazon SQS v2 Azure Blobstore v2 January 29, 2026 Feature Enhanced rule observability for detections Google SecOps now provides increased visibility into detection timing to help improve dashboard and reporting accuracy.
- January 14, 2025 Change The following rules have been removed from their associated rule packs in Curated Detections due to high alert volume across the Google SecOps customer base: Cloud Threats - CDIR SCC Enhanced Defense Evasion Alerts: SCC: Modify VPC Service Control with GCE Activity from the Restricted Resource SCC: Modify VPC Service Control with Activity from the Restricted Service Linux Threats - OS Privilege Escalation Tools: Sensitive File Discovery Last Login Users Whoami Commands Windows Threats - Initial Access: NetLogon AD System Event Risk Analytics for UEBA - Login to an Application Never Before Seen for a User Group: First Time User Login Activity to Application for Manager Peer Group Risk Analytics for UEBA - Login from Country Never Before Seen for a User Group: First Time User Login Activity from Country for Manager Peer Group The rule "SCC: Unexpected Child Shell" has been moved from the rule pack "Cloud Threats - CDIR SCC Enhanced Malware Alerts" to "Cloud Threats - CDIR SCC Enhanced Execution Alerts" January 07, 2025 Announcement The following parser documentation is now available: Collect Microsoft Defender for Endpoint logs Zscaler parsers overview Collect Zscaler DNS logs Collect Zscaler Firewall logs Collect Zscaler Internet Access logs Collect Zscaler Webproxy logs Collect Linux auditd and AIX systems logs Collect CircleCI audit logs Collect CloudPassage Halo logs Collect JFrog Artifactory logs Collect Apple macOS syslog data Collect Netskope web proxy logs Collect Onfido logs Collect OPNsense firewall logs Collect Rapid7 InsightIDR logs Collect Sysdig logs Collect Thinkst Canary logs Collect VMware Workspace ONE UEM logs Collect Workday HCM logs December 27, 2024 Change Google SecOps has added a new rule set to Applied Threat Intelligence (ATI), called Inbound IP Address Authentication, that identifies IP addresses that are authenticating to local infrastructure in an inbound network direction.

### "Applied Threat Intelligence overview \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/applied-threat-intel-overview](https://docs.cloud.google.com/chronicle/docs/detection/applied-threat-intel-overview)
- Source ID: `site-docs-reference`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To use Applied Threat Intelligence, do the following: Enable the Applied Threat Intelligence curated detections .
- Information about the IoC is displayed, including the following: GCTI priority GTI verdict Associations Campaigns You can also view detailed information about the events that triggered the IoC match, information from the threat intelligence source, and the rationale for the GTI score.
- Google SecOps curated detections evaluate your event data against Mandiant threat intelligence data, and generates an alert when one or more rules identify a match to an IoC with an active breach or high priority.
- When ATI is enabled, Google SecOps ingests IoCs curated by Mandiant threat intelligence that are classified as malicious by the Google Threat Indicator (GTI) verdict.

