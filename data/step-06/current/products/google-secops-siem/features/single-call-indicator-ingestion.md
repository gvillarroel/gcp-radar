---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:56:14.314Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Single-call indicator ingestion"
feature_slug: "single-call-indicator-ingestion"
latest_feature_date: "2025-12-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
  - "https://docs.cloud.google.com/chronicle/docs/detection/detection-delays"
keywords:
  - "single"
  - "call"
  - "indicator"
  - "ingestion"
  - "the"
  - "connector"
  - "can"
  - "ingest"
---

# Single-call indicator ingestion

Product: Google SecOps SIEM
Coverage: LOW

## Step 02 Summary

The connector can ingest complete indicator objects, including attributes, tags, and security labels, in one API call.

## Extended Definition

The connector can ingest complete indicator objects, including attributes, tags, and security labels, in one API call.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/detection/detection-delays](https://docs.cloud.google.com/chronicle/docs/detection/detection-delays)

## Supporting Pages

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-api-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Efficient Single-Call Data Ingestion : Ingest complete indicator objects—including attributes, tags, and security labels—in a single API call to reduce overhead and improve performance.
- December 24, 2025 Feature ThreatConnect IOC V3 Connector Google SecOps now supports the ingestion of Indicators of Compromise (IOCs) from ThreatConnect using the v3 REST API.
- Announcement New parser documentation now available New parser documentation is available to help you ingest and normalize logs from the following sources: Collect Absolute Secure Endpoint logs Collect AIDE (Advanced Intrusion Detection Environment) logs Collect Akamai Enterprise Application Access logs Collect Apache Hadoop logs Collect Armis Vulnerabilities logs Collect Array Networks SSL VPN logs Collect Aruba IPS logs Collect Atlassian Confluence logs Collect Cisco AMP for Endpoints logs Collect Cisco APIC logs Collect Cisco Application Centric Infrastructure (ACI) logs Collect Cisco CallManager logs Collect Cisco CloudLock CASB logs Collect Cisco DNA Center Platform logs Collect Cisco eStreamer logs Collect Cribl Stream logs Collect CrowdStrike FileVantage logs Collect CrowdStrike IDP Services logs Collect Cynet 360 AutoXDR logs Collect Digital Shadows SearchLight logs Collect Duo Telephony logs Collect Edgio WAF logs Collect Elastic Auditbeat logs Collect Elastic Packet Beats logs Collect Elasticsearch logs Collect Entrust nShield HSM audit logs Collect Imperva Advanced Bot Protection logs Collect Imperva Attack Analytics logs Collect Imperva Audit Trail logs Collect Imperva CEF logs Collect Imperva Data Risk Analytics (DRA) logs Collect Imperva Database logs Collect Imperva FlexProtect logs Collect Imperva SecureSphere Management logs Collect Kiteworks (formally Accellion) logs Collect Proofpoint Emerging Threats Pro IOC logs Collect ServiceNow audit logs Collect Team Cymru Scout Threat Intelligence data Collect URLScan IO logs Collect Uptycs EDR logs Collect VanDyke VShell SFTP logs Collect Zendesk CRM logs Collect ZeroFox Platform logs November 10, 2025 Feature Nested if You can now use if statements in both the outcome and events sections and also within the then else clauses of another if statement.
- You can use the following feed management source types to set up ingestion using an HTTPS endpoint: Amazon Data Firehose Google Cloud Pub/Sub Webhooks You can also generate a secret key and API key to authenticate feeds that use Amazon Data Firehose and webhooks as the feed source type.

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-api-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Efficient Single-Call Data Ingestion : Ingest complete indicator objects—including attributes, tags, and security labels—in a single API call to reduce overhead and improve performance.
- December 24, 2025 Feature ThreatConnect IOC V3 Connector Google SecOps now supports the ingestion of Indicators of Compromise (IOCs) from ThreatConnect using the v3 REST API.
- March 23, 2026 Announcement New parser documentation now available New parser documentation is available to help you ingest and normalize logs from the following sources: Collect Cisco Umbrella Cloud Firewall logs Collect Cisco Umbrella IP logs Collect Claroty xDome for Healthcare logs Collect CloudM logs Collect Digital Guardian EDR logs Collect DNSFilter logs Collect Dope Security SWG logs Collect Druva Backup logs Collect EfficientIP DDI logs Collect Elastic Defend logs Collect Elastic Windows Event Log Beats logs Collect Ergon Informatik Airlock IAM logs Collect ESET Threat Intelligence logs Collect F5 Distributed Cloud Services logs Collect F5 Shape logs Collect F5 Silverline logs Collect Falco IDS logs Collect Fastly CDN logs Collect File Scanning Framework logs Collect FireEye ETP logs Collect FireEye HX Audit logs Collect FireEye NX Audit logs Collect Fivetran logs Collect Forcepoint Mail Relay logs Collect GitGuardian Enterprise logs Collect Google Cloud Looker audit logs Collect Guardicore Centra logs Collect HCL BigFix logs Collect HID DigitalPersona logs Collect IBM AS/400 logs Collect IBM Informix logs Collect IBM MaaS360 logs Collect IBM Mainframe Storage logs Collect IBM OpenPages logs Collect IBM Security Access Manager logs Collect IBM Security Identity Manager logs Collect iBoss Web Proxy logs Collect Intel 471 Watcher Alerts logs Collect Intel Endpoint Management Assistant logs Collect IONIX Attack Surface Management logs Collect Island Enterprise Browser logs Collect Jamf Protect Telemetry V2 logs Collect Keycloak logs Collect Kong Gateway logs Collect LenelS2 OnGuard logs Collect Lookout Mobile Endpoint Security logs Collect Lucid audit logs Collect ManageEngine Exchange Reporter Plus logs Collect Mandiant Threat Intelligence Custom IOC logs Collect Menlo Security Isolation Platform (MSIP) logs Collect Metabase logs Collect Microsoft Defender for Endpoint on iOS logs Collect Microsoft Dynamics 365 User Activity logs Collect Microsoft IAS / Network Policy Server (NPS) logs Collect Microsoft Network Policy Server (NPS) logs Collect OAuth2 Proxy logs Collect Office 365 Message Trace logs Collect Progress MOVEit Transfer logs Collect Netscout Arbor Sightline logs Collect Skyhigh Secure Web Gateway (On-Premises) logs Collect ThreatDown EDR logs Collect Trellix Endpoint Security (HX) alert logs Collect Trellix Endpoint Security (HX) audit event logs Collect Trellix Endpoint Security (HX) host inventory logs March 18, 2026 Feature Bindplane features for Google SecOps general availability The following Bindplane features that relate to Google SecOps are now in General Availability (GA): Single sign-on with custom claims role mapping : gives a production-ready way to manage Bindplane access through your identity provider.
- Announcement New parser documentation now available New parser documentation is available to help you ingest and normalize logs from the following sources: Collect Absolute Secure Endpoint logs Collect AIDE (Advanced Intrusion Detection Environment) logs Collect Akamai Enterprise Application Access logs Collect Apache Hadoop logs Collect Armis Vulnerabilities logs Collect Array Networks SSL VPN logs Collect Aruba IPS logs Collect Atlassian Confluence logs Collect Cisco AMP for Endpoints logs Collect Cisco APIC logs Collect Cisco Application Centric Infrastructure (ACI) logs Collect Cisco CallManager logs Collect Cisco CloudLock CASB logs Collect Cisco DNA Center Platform logs Collect Cisco eStreamer logs Collect Cribl Stream logs Collect CrowdStrike FileVantage logs Collect CrowdStrike IDP Services logs Collect Cynet 360 AutoXDR logs Collect Digital Shadows SearchLight logs Collect Duo Telephony logs Collect Edgio WAF logs Collect Elastic Auditbeat logs Collect Elastic Packet Beats logs Collect Elasticsearch logs Collect Entrust nShield HSM audit logs Collect Imperva Advanced Bot Protection logs Collect Imperva Attack Analytics logs Collect Imperva Audit Trail logs Collect Imperva CEF logs Collect Imperva Data Risk Analytics (DRA) logs Collect Imperva Database logs Collect Imperva FlexProtect logs Collect Imperva SecureSphere Management logs Collect Kiteworks (formally Accellion) logs Collect Proofpoint Emerging Threats Pro IOC logs Collect ServiceNow audit logs Collect Team Cymru Scout Threat Intelligence data Collect URLScan IO logs Collect Uptycs EDR logs Collect VanDyke VShell SFTP logs Collect Zendesk CRM logs Collect ZeroFox Platform logs November 10, 2025 Feature Nested if You can now use if statements in both the outcome and events sections and also within the then else clauses of another if statement.

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- The following table outlines the different file sizes that Google SecOps feeds transformation supports: Operation Input type Recommended size Expected duration Max size Data Modeling CSV 10 GB Data Modeling CSV 30 min 10 GB Data Modeling CSV TBD TBD 2 GB Data Modeling XML / JSON 2 GB Data Modeling XLS / XLSX 1 min 50 MB Merge Files Any Varies on number of files 100 GB Decompress Files Non-ZIP Varies on number of files 10 GB (uncompressed) Decompress Files ZIP - Varies on number of files 4 GB (uncompressed) Log line limits and delimiters When ingesting text-based logs (JSON, CSV, or Syslog), ensure your data adheres to these specific ingestion limits: Maximum Line Size : A single log line cannot exceed 4MB .
- Impact of changing your linked Cloud Project on data feeds If you are updating the Google Cloud project associated with your Google SecOps instance, all feeds ingesting data using the following connectors will stop, and must be re-created manually: AMAZON S3 V2 AMAZON SQS V2 GOOGLE CLOUD STORAGE V2 AZURE BLOBSTORE V2 GOOGLE CLOUD STORAGE EVENT DRIVEN For all other feeds that are not utilizing these connectors, ingestion continues without any interruption.
- We recommend using the v2 connector framework, which uses the Google Cloud Storage Transfer Service (STS) for near real-time ingestion.
- Control the rate of ingestion When the data ingestion rate for a tenant reaches a certain threshold, Google Security Operations restricts the rate of ingestion for new data feeds to prevent a source with a high ingestion rate from affecting the ingestion rate of another data source.

### "Understand rule detection delays \_|\_ Google Security Operations \_|\_\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/detection-delays](https://docs.cloud.google.com/chronicle/docs/detection/detection-delays)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- For example, aliasing can connect a single hostname (like alex-macbook ) to other related indicators, such as its IP addresses and MAC addresses (from DHCP logs).
- Complex single-event rules These rules are more susceptible to detection delays because they include match windows or reference lists: Windowed single-event rules These are single-event rules that include a match window and typically have a slightly longer delay than other single-event rules.
- Follow this suggested approach to investigate and troubleshoot rule detection delays: Check for obvious delays: Determine if any ingestion delay exists: In the Google SecOps console, go to Detection > Rules and detections .
- Re-enrichment of UDM events Underlying data changes: If the underlying data changes after an event is ingested, the system reprocesses historical data and updates events for up to 24 hours after ingestion.

