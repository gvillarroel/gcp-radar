---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:24:01.965Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "YARA-L 2.0 functions"
feature_slug: "yara-l-2-0-functions"
latest_feature_date: "2025-01-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines"
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
keywords:
  - "yara"
  - "functions"
  - "secops"
  - "added"
  - "new"
  - "for"
  - "use"
  - "in"
---

# YARA-L 2.0 functions

Product: Google SecOps
Coverage: LOW

## Step 02 Summary

Google SecOps added new YARA-L 2.0 functions for use in Rules and Search.

## Extended Definition

Google SecOps added new YARA-L 2.0 functions for use in Rules and Search.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)

## Supporting Pages

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- January 23, 2025 Feature The following new YARA-L 2.0 functions are available in Rules and Search: arrays.concat arrays.join string arrays.max arrays.min arrays.size arrays.index to int cast.as bool cast.as float math.ceil math.floor math.geo distance math.is increasing math.pow math.random strings.contains strings.count substrings strings.extract domain strings.extract hostname strings.from hex strings.ltrim strings.reverse strings.rtrim strings.trim strings.url decode timestamp.as unix seconds timestamp.now The following new YARA-L 2.0 functions are available in Rules: hash.sha256 window.avg window.first window.last window.median window.mode window.stddev window.variance Details on function signatures and behavior can be found in YARA-L2.0 Function Syntax Reference Documentation Change The Google SecOps team identified that a cloud threat detection rule pack (azure-defender-for-cloud-vm-extensions) was inadvertently made available to all customers.
- July 21, 2025 Feature New parser documentation now available New parser documentation is available to help you ingest and normalize logs from the following sources: Collect Apache Tomcat logs Collect Appian Cloud logs Collect Archer IRM logs Collect ArcSight CEF logs Collect Area 1 logs Collect Aruba EdgeConnect SD-WAN logs Collect Atlassian Cloud Admin Audit logs Collect Avatier logs Collect Avigilon Access Control Manager logs Collect AWS CloudTrail logs Collect Barracuda CloudGen Firewall logs Collect Barracuda Web Filter logs Collect Broadcom CA PAM logs Collect Broadcom SSL VA logs Collect Cato Networks logs Collect Check Point Harmony logs Collect CipherTrust Manager logs Collect Cisco VCS logs Collect Cisco VPN logs Collect Cisco WSA logs Collect CyberArk Privilege Cloud logs Collect Digi Modems logs Collect F5 DNS logs Collect F5 VPN logs Collect Forcepoint CASB logs Collect HPE BladeSystem c7000 logs Collect Skyhigh Security logs Collect Trellix IPS logs July 07, 2025 Feature Dashboards for enhanced visualizations and threat hunting You can now use the Google SecOps Dashboards to enhance data visualization, investigations, and threat hunting.
- GCP Workspace Data Exfil Drive: Suspicious Workspace Actions Observed after a Successful Suspicious Login GCP Suspicious Infrastructure Change: Replacement of Existing Compute Machine Image Replacement of Existing Compute Disk GCP Cloud SQL Ransom: Base64 Encoded Cloud SQL Command CIDR SCC Persistence: SCC: Persistence: New API Method SCC: Persistence: IAM Anomalous Grant SCC: Persistence: GCE Admin Added SSH Key CIDR SCC Malware: SCC: Added Library Loaded SCC: Added Binary Executed CIDR SCC Cloud IDS Low: SCC: Cloud IDS: Low Threat Finding CIDR SCC Cloud Armor Medium: SCC: Cloud Armor: Medium - Increasing Deny Ratio SCC: Cloud Armor: Medium - Allowed Traffic Spike Azure Identity: Azure External User Invitation Azure Defender for Cloud Windows and Linux VM: Azure Defender for Cloud: Anonymous IP access AWS GuardDuty Discovery: AWS GuardDuty: Recon:EC2/PortProbeUnprotectedPort January 20, 2025 Deprecated Python 3.7 is being deprecated and will be fully removed on June 1, 2025.
- January 07, 2025 Announcement The following parser documentation is now available: Collect Microsoft Defender for Endpoint logs Zscaler parsers overview Collect Zscaler DNS logs Collect Zscaler Firewall logs Collect Zscaler Internet Access logs Collect Zscaler Webproxy logs Collect Linux auditd and AIX systems logs Collect CircleCI audit logs Collect CloudPassage Halo logs Collect JFrog Artifactory logs Collect Apple macOS syslog data Collect Netskope web proxy logs Collect Onfido logs Collect OPNsense firewall logs Collect Rapid7 InsightIDR logs Collect Sysdig logs Collect Thinkst Canary logs Collect VMware Workspace ONE UEM logs Collect Workday HCM logs December 27, 2024 Change Google SecOps has added a new rule set to Applied Threat Intelligence (ATI), called Inbound IP Address Authentication, that identifies IP addresses that are authenticating to local infrastructure in an inbound network direction.

### "Response integrations community contribution guidelines \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- Source ID: `site-docs-reference`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Release notes The general structure for the release note should follow the following format: {integration item} - {update} For example: Get Case Details - Added ability to fetch information about affected IOCs Depending on the situation, there are unique release notes for specific scenarios: If it's a new integration: New Integration Added - {integration name} If a new action is added: New Action Added - {action name} If a new connector is added: New Connector Added - {connector name} If a new job is added: New Job Added - {job name} If a predefined widget is added to an action: {action name} - Added Predefined Widget.
- Avoid creating new types of tags; use the ones that are already inside the platform.
- For example, the following JSON object represents a poor structure as it would be unusable inside playbooks: { "10.10.10.10": { "is malicious": "false" } } Instead, format it like this: [ { "is malicious": "false", "ip": "10.10.10.10" } ] If you're using entities inside the action and return results Per Entity, then the best practice is to structure the JSON Result like this: [ { "Entity": "10.10.10.10", "EntityResult": { "is malicious": "false", } } ] Always consider how the output of the action can be used inside automation.
- In general, the structure of the name should be like this: {integration display name} - {process} Job For example: ServiceNow - Sync Incidents Job Description The Description of the job should highlight to the user what the job is doing during the iterations; for example, This job will synchronize Security Command Center based cases created by the Urgent Posture Findings connector.

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- January 14, 2025 Change The following rules have been removed from their associated rule packs in Curated Detections due to high alert volume across the Google SecOps customer base: Cloud Threats - CDIR SCC Enhanced Defense Evasion Alerts: SCC: Modify VPC Service Control with GCE Activity from the Restricted Resource SCC: Modify VPC Service Control with Activity from the Restricted Service Linux Threats - OS Privilege Escalation Tools: Sensitive File Discovery Last Login Users Whoami Commands Windows Threats - Initial Access: NetLogon AD System Event Risk Analytics for UEBA - Login to an Application Never Before Seen for a User Group: First Time User Login Activity to Application for Manager Peer Group Risk Analytics for UEBA - Login from Country Never Before Seen for a User Group: First Time User Login Activity from Country for Manager Peer Group The rule "SCC: Unexpected Child Shell" has been moved from the rule pack "Cloud Threats - CDIR SCC Enhanced Malware Alerts" to "Cloud Threats - CDIR SCC Enhanced Execution Alerts" January 07, 2025 Announcement The following parser documentation is now available: Collect Microsoft Defender for Endpoint logs Zscaler parsers overview Collect Zscaler DNS logs Collect Zscaler Firewall logs Collect Zscaler Internet Access logs Collect Zscaler Webproxy logs Collect Linux auditd and AIX systems logs Collect CircleCI audit logs Collect CloudPassage Halo logs Collect JFrog Artifactory logs Collect Apple macOS syslog data Collect Netskope web proxy logs Collect Onfido logs Collect OPNsense firewall logs Collect Rapid7 InsightIDR logs Collect Sysdig logs Collect Thinkst Canary logs Collect VMware Workspace ONE UEM logs Collect Workday HCM logs December 27, 2024 Change Google SecOps has added a new rule set to Applied Threat Intelligence (ATI), called Inbound IP Address Authentication, that identifies IP addresses that are authenticating to local infrastructure in an inbound network direction.
- February 23, 2026 Announcement New parser documentation now available New parser documentation is available to help you ingest and normalize logs from the following sources: Collect Big Switch BigCloudFabric logs Collect BMC AMI Defender logs Collect Broadcom Support Portal Audit logs Collect CA ACF2 logs Collect CA LDAP logs Collect ChromeOS XDR logs Collect Chronicle SOAR Audit logs Collect Cisco CTS logs Collect Cisco FireSIGHT Management Center logs Collect Cisco Vision Dynamic Signage Director logs Collect ClamAV logs Collect Cofense logs Collect Crowdstrike IOC logs Collect Custom Application Access logs Collect Custom Security Data Analytics logs Collect Cyber 2.0 IDS logs Collect CyberArk logs Collect Cybereason EDR logs Collect Dataminr Alerts logs Collect Digital Shadows Indicators logs Collect Mimecast Mail V2 logs Collect Okta User Context logs Collect RH-ISAC IOC logs Collect ServiceNow CMDB data February 20, 2026 Feature New capabilities in Feeds page The following options have been added to the Feeds page: Search Filtering (using feed attributes) Pagination Last Refreshed Time Feed Metadata Export to CSV February 12, 2026 Feature Advanced Joins in Search Google SecOps now supports expanded capabilities for correlating data across multiple sources.
- The following rules have been added to the rulepack: Archive Exfiltration Event to Non-Google Websites Google Chrome Navigation Event to Shortened URLs Suspicious Download from Filehosting or Chat Platform in Chrome Management Chrome Suspicious Download Event from Newly Observed Domain in Environment October 22, 2025 Change Integration of GTI score in Applied Threat Intelligence (ATI) Google SecOps now uses Google Threat Intelligence (GTI) score for prioritization in Applied Threat Intelligence (ATI) instead of the IC-score.
- March 23, 2026 Announcement New parser documentation now available New parser documentation is available to help you ingest and normalize logs from the following sources: Collect Cisco Umbrella Cloud Firewall logs Collect Cisco Umbrella IP logs Collect Claroty xDome for Healthcare logs Collect CloudM logs Collect Digital Guardian EDR logs Collect DNSFilter logs Collect Dope Security SWG logs Collect Druva Backup logs Collect EfficientIP DDI logs Collect Elastic Defend logs Collect Elastic Windows Event Log Beats logs Collect Ergon Informatik Airlock IAM logs Collect ESET Threat Intelligence logs Collect F5 Distributed Cloud Services logs Collect F5 Shape logs Collect F5 Silverline logs Collect Falco IDS logs Collect Fastly CDN logs Collect File Scanning Framework logs Collect FireEye ETP logs Collect FireEye HX Audit logs Collect FireEye NX Audit logs Collect Fivetran logs Collect Forcepoint Mail Relay logs Collect GitGuardian Enterprise logs Collect Google Cloud Looker audit logs Collect Guardicore Centra logs Collect HCL BigFix logs Collect HID DigitalPersona logs Collect IBM AS/400 logs Collect IBM Informix logs Collect IBM MaaS360 logs Collect IBM Mainframe Storage logs Collect IBM OpenPages logs Collect IBM Security Access Manager logs Collect IBM Security Identity Manager logs Collect iBoss Web Proxy logs Collect Intel 471 Watcher Alerts logs Collect Intel Endpoint Management Assistant logs Collect IONIX Attack Surface Management logs Collect Island Enterprise Browser logs Collect Jamf Protect Telemetry V2 logs Collect Keycloak logs Collect Kong Gateway logs Collect LenelS2 OnGuard logs Collect Lookout Mobile Endpoint Security logs Collect Lucid audit logs Collect ManageEngine Exchange Reporter Plus logs Collect Mandiant Threat Intelligence Custom IOC logs Collect Menlo Security Isolation Platform (MSIP) logs Collect Metabase logs Collect Microsoft Defender for Endpoint on iOS logs Collect Microsoft Dynamics 365 User Activity logs Collect Microsoft IAS / Network Policy Server (NPS) logs Collect Microsoft Network Policy Server (NPS) logs Collect OAuth2 Proxy logs Collect Office 365 Message Trace logs Collect Progress MOVEit Transfer logs Collect Netscout Arbor Sightline logs Collect Skyhigh Secure Web Gateway (On-Premises) logs Collect ThreatDown EDR logs Collect Trellix Endpoint Security (HX) alert logs Collect Trellix Endpoint Security (HX) audit event logs Collect Trellix Endpoint Security (HX) host inventory logs March 18, 2026 Feature Bindplane features for Google SecOps general availability The following Bindplane features that relate to Google SecOps are now in General Availability (GA): Single sign-on with custom claims role mapping : gives a production-ready way to manage Bindplane access through your identity provider.

