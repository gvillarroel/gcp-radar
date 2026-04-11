---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:56:14.506Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Chronicle dashboard file sharing"
feature_slug: "chronicle-dashboard-file-sharing"
latest_feature_date: "2023-06-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-dashboards"
keywords:
  - "chronicle"
  - "dashboard"
  - "file"
  - "sharing"
  - "dashboards"
  - "can"
  - "be"
  - "shared"
---

# Chronicle dashboard file sharing

Product: Google SecOps SIEM
Coverage: LOW

## Step 02 Summary

Chronicle dashboards can be shared between instances or between users within the same instance without creating copies.

## Extended Definition

Chronicle dashboards can be shared between instances or between users within the same instance without creating copies.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-dashboards](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-dashboards)

## Supporting Pages

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-api-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- July 21, 2025 Feature New parser documentation now available New parser documentation is available to help you ingest and normalize logs from the following sources: Collect Apache Tomcat logs Collect Appian Cloud logs Collect Archer IRM logs Collect ArcSight CEF logs Collect Area 1 logs Collect Aruba EdgeConnect SD-WAN logs Collect Atlassian Cloud Admin Audit logs Collect Avatier logs Collect Avigilon Access Control Manager logs Collect AWS CloudTrail logs Collect Barracuda CloudGen Firewall logs Collect Barracuda Web Filter logs Collect Broadcom CA PAM logs Collect Broadcom SSL VA logs Collect Cato Networks logs Collect Check Point Harmony logs Collect CipherTrust Manager logs Collect Cisco VCS logs Collect Cisco VPN logs Collect Cisco WSA logs Collect CyberArk Privilege Cloud logs Collect Digi Modems logs Collect F5 DNS logs Collect F5 VPN logs Collect Forcepoint CASB logs Collect HPE BladeSystem c7000 logs Collect Skyhigh Security logs Collect Trellix IPS logs July 07, 2025 Feature Dashboards for enhanced visualizations and threat hunting You can now use the Google SecOps Dashboards to enhance data visualization, investigations, and threat hunting.
- April 23, 2021 Change Supported Data Sets Chronicle can now ingest and parse data from the following additional systems and services: Aruba Airwave Blue Coat Proxy Brocade ServerIron ADX CIS Albert Alerts Cisco Application Control Engine Cisco Email Security Cisco NX-OS Citrix StoreFront Cofense Triage Comodo Fidelis Network FireEye NX Honeyd Kemp Load Balancer Kyriba Treasury Management Microsoft Intune MySQL Palo Alto Networks Cortex XDR Red Canary EDR ServiceNow CMDB Symantec VIP Enterprise Gateway Tanium Discover Tripwire File Integrity Monitoring January 25, 2021 Feature Chronicle Detection Engine Enables customers to automate the process of searching across their data for security issues.
- An improved integration for Chrome Enterprise Premium is now available that includes: Streamlined connection to Google SecOps, using recommended security defaults Enhanced log events with Google Safe Browsing context Updated parser and integration documentation: Collect Google Chrome logs Curated dashboards for Chrome Enterprise Premium Google Workspace SOAR actions to manage Chrome extension blocklist policies ( Block Extension and Delete Extension ) October 28, 2025 Feature Risk-based alerting with entity-only rules With the new ENTITY RISK CHANGE UDM event type, you can now write YARA-L detection rules that trigger independently of ingested events.
- August 05, 2025 Feature New YARA-L features The following capabilities have been added to YARA-L 2.0 to enhance search precision, data analysis, and investigative workflows: Conditions in UDM search and dashboards You can now filter aggregates defined in the outcome section using the new condition clause.

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-api-reference`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- July 21, 2025 Feature New parser documentation now available New parser documentation is available to help you ingest and normalize logs from the following sources: Collect Apache Tomcat logs Collect Appian Cloud logs Collect Archer IRM logs Collect ArcSight CEF logs Collect Area 1 logs Collect Aruba EdgeConnect SD-WAN logs Collect Atlassian Cloud Admin Audit logs Collect Avatier logs Collect Avigilon Access Control Manager logs Collect AWS CloudTrail logs Collect Barracuda CloudGen Firewall logs Collect Barracuda Web Filter logs Collect Broadcom CA PAM logs Collect Broadcom SSL VA logs Collect Cato Networks logs Collect Check Point Harmony logs Collect CipherTrust Manager logs Collect Cisco VCS logs Collect Cisco VPN logs Collect Cisco WSA logs Collect CyberArk Privilege Cloud logs Collect Digi Modems logs Collect F5 DNS logs Collect F5 VPN logs Collect Forcepoint CASB logs Collect HPE BladeSystem c7000 logs Collect Skyhigh Security logs Collect Trellix IPS logs July 07, 2025 Feature Dashboards for enhanced visualizations and threat hunting You can now use the Google SecOps Dashboards to enhance data visualization, investigations, and threat hunting.
- An improved integration for Chrome Enterprise Premium is now available that includes: Streamlined connection to Google SecOps, using recommended security defaults Enhanced log events with Google Safe Browsing context Updated parser and integration documentation: Collect Google Chrome logs Curated dashboards for Chrome Enterprise Premium Google Workspace SOAR actions to manage Chrome extension blocklist policies ( Block Extension and Delete Extension ) October 28, 2025 Feature Risk-based alerting with entity-only rules With the new ENTITY RISK CHANGE UDM event type, you can now write YARA-L detection rules that trigger independently of ingested events.
- August 05, 2025 Feature New YARA-L features The following capabilities have been added to YARA-L 2.0 to enhance search precision, data analysis, and investigative workflows: Conditions in UDM search and dashboards You can now filter aggregates defined in the outcome section using the new condition clause.
- This information can be used in dashboards and as a filter in the Alerts lister page using the field collection.detection timing details .

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Supported fields You can download the following fields to a CSV file from the platform: user hostname process name event type timestamp raw log (valid only when raw logs are enabled for the customer) All fields starting with udm.additional Valid field types You can download the following field types to a CSV file: double float int32 uint32 int64 uint64 bool string enum bytes google.protobuf.Timestamp google.protobuf.Duration Unsupported fields Fields that start with "udm" (not udm.additional) and meet either of the following conditions cannot be downloaded to CSV: The nesting of the field is more than 10 deep in udm proto.
- For example, if you add the following to your search, it limits the results to a maximum of 25: limit: 25 Note: You can also add the limit keyword to custom dashboards.
- Types of grouped UDM fields You can search across all of the following grouped UDM fields: Grouped field name Associated UDM fields domain about.administrative domain about.asset.network domain network.dns.questions.name network.dns domain principal.administrative domain principal.asset.network domain target.administrative domain target.asset.hostname target.asset.network domain target.hostname email intermediary.user.email addresses network.email.from network.email.to principal.user.email addresses security result.about.user.email addresses target.user.email addresses file path principal.file.full path principal.process.file.full path principal.process.parent process.file.full path target.file.full path target.process.file.full path target.process.parent process.file.full path hash about.file.md5 about.file.sha1 about.file.sha256 principal.process.file.md5 principal.process.file.sha1 principal.process.file.sha256 security result.about.file.sha256 target.file.md5 target.file.sha1 target.file.sha256 target.process.file.md5 target.process.file.sha1 target.process.file.sha256 hostname intermediary.hostname observer.hostname principal.asset.hostname principal.hostname src.asset.hostname src.hostname target.asset.hostname target.hostname ip intermediary.ip observer.ip principal.artifact.ip principal.asset.ip principal.ip src.artifact.ip src.asset.ip src.ip target.artifact.ip target.asset.ip target.ip namespace principal.namespace src.namespace target.namespace process id principal.process.parent process.pid principal.process.parent process.product specific process id principal.process.pid principal.process.product specific process id target.process.parent process.pid target.process.parent process.product specific process id target.process.pid target.process.product specific process id user about.user.userid observer.user.userid principal.user.user display name principal.user.userid principal.user.windows sid src.user.userid target.user.user display name target.user.userid target.user.windows sid Find a UDM field for search query While writing a search query, you may not know which UDM field to include.
- The following examples show supported boolean operators ( AND , OR , and NOT ): A AND B A OR B Use parentheses ( ) to group expressions and control evaluation order: (A OR B) AND (B OR C) AND (C OR NOT D) Examples: Search for login events on the finance server: metadata.event type = "USER LOGIN" and target.hostname = "finance-svr" Use the operator (>) to search for connections where more than 10 MB of data was sent: metadata.event type = "NETWORK CONNECTION" and network.sent bytes > 10000000 Use multiple conditions to search for winword.exe launching cmd.exe or powershell.exe : metadata.event type = "PROCESS LAUNCH" and principal.process.file.full path = /winword/ and ( target.process.file.full path = /cmd.exe/ or target.process.file.full path = /powershell.exe/ ) Search key-value pairs in additional and labels fields: The additional and labels fields act as customizable containers for event data that doesn't map to standard UDM fields.

### "Configure data RBAC for Dashboards \_|\_ Google Security Operations \_|\_\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-dashboards](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-dashboards)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Configure data RBAC for Dashboards Supported in: Google secops SIEM This document explains how Google Security Operations administrators can assign scopes to dashboards.
- Grant user access to Dashboards To grant a user or group access to Dashboards, follow these steps: In the Google Cloud console, click IAM > Grant Access .
- The Dashboards feature of Google Security Operations is built from charts populated using YARA-L 2.0 properties.
- The user now has the granted permissions for all dashboards they're authorized to see within the project.

