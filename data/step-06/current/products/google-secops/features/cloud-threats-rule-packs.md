---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:24:01.952Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Cloud Threats rule packs"
feature_slug: "cloud-threats-rule-packs"
latest_feature_date: "2025-04-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category"
keywords:
  - "threats"
  - "rule"
  - "packs"
  - "curated"
  - "detections"
  - "now"
  - "includes"
  - "for"
---

# Cloud Threats rule packs

Product: Google SecOps
Coverage: LOW

## Step 02 Summary

Curated Detections now includes rule packs for Office 365 and Okta as public preview content.

## Extended Definition

Curated Detections now includes rule packs for Office 365 and Okta as public preview content.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)

## Supporting Pages

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- April 22, 2025 Announcement The following parser documentation is now available: Collect Barracuda Email Security Gateway logs Collect Barracuda WAF logs Collect CrowdStrike Falcon logs in CEF Collect Juniper NetScreen Firewall logs Collect Micro Focus NetIQ Access Manager logs Collect Symantec DLP logs Collect Aruba ClearPass logs Collect Aruba Wireless Controller and Access Point logs Collect BeyondTrust Secure Remote Access logs Collect CyberArk Privileged Threat Analytics logs Collect Fortinet FortiMail logs Collect Sophos Central logs Collect Sophos XG Firewall logs Collect AWS EC2 Hosts logs Collect AWS EC2 Instance logs Collect AWS IAM logs Collect Cisco Stealthwatch logs Collect Cisco Umbrella audit logs Collect Cisco Umbrella DNS logs Collect Cisco Umbrella Web Proxy logs Collect CommVault Backup and Recovery logs Collect Forcepoint Proxy logs Collect Fortinet FortiAnalyzer logs Collect Fortinet FortiAuthenticator logs Collect Fortinet Firewall logs Collect Palo Alto Networks Traps logs Collect SecureAuth Identity Platform logs Collect Claroty CTD logs Collect Claroty xDome logs Collect F5 BIG-IP ASM logs Collect FireEye HX logs Collect Microsoft IIS logs Collect PowerShell logs Collect Snort logs Collect A10 Network Load Balancer logs Collect Alcatel switch logs Collect AlgoSec Security Management logs Collect Arbor Edge Defense logs Collect Epic Systems logs Collect Fortra Digital Guardian DLP logs Collect MobileIron logs Collect Microsoft Windows Defender ATP logs Collect Nokia Router logs Collect Broadcom Symantec SiteMinder Web Access logs April 21, 2025 Feature Curated Detections has been enhanced with new detection content for Cloud Threats to include rule packs covering Office 365 and Okta.
- January 14, 2025 Change The following rules have been removed from their associated rule packs in Curated Detections due to high alert volume across the Google SecOps customer base: Cloud Threats - CDIR SCC Enhanced Defense Evasion Alerts: SCC: Modify VPC Service Control with GCE Activity from the Restricted Resource SCC: Modify VPC Service Control with Activity from the Restricted Service Linux Threats - OS Privilege Escalation Tools: Sensitive File Discovery Last Login Users Whoami Commands Windows Threats - Initial Access: NetLogon AD System Event Risk Analytics for UEBA - Login to an Application Never Before Seen for a User Group: First Time User Login Activity to Application for Manager Peer Group Risk Analytics for UEBA - Login from Country Never Before Seen for a User Group: First Time User Login Activity from Country for Manager Peer Group The rule "SCC: Unexpected Child Shell" has been moved from the rule pack "Cloud Threats - CDIR SCC Enhanced Malware Alerts" to "Cloud Threats - CDIR SCC Enhanced Execution Alerts" January 11, 2025 Change Playbook names must now be unique across all SOAR environments, as part of updates to support future features.
- An improved integration for Chrome Enterprise Premium is now available that includes: Streamlined connection to Google SecOps, using recommended security defaults Enhanced log events with Google Safe Browsing context Updated parser and integration documentation: Collect Google Chrome logs Curated dashboards for Chrome Enterprise Premium Google Workspace SOAR actions to manage Chrome extension blocklist policies ( Block Extension and Delete Extension ) October 28, 2025 Feature Risk-based alerting with entity-only rules With the new ENTITY RISK CHANGE UDM event type, you can now write YARA-L detection rules that trigger independently of ingested events.
- Feature Curated Detections rule packs covering AWS threats are generally available to Chronicle Enterprise and Enterprise Plus customers.

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- January 14, 2025 Change The following rules have been removed from their associated rule packs in Curated Detections due to high alert volume across the Google SecOps customer base: Cloud Threats - CDIR SCC Enhanced Defense Evasion Alerts: SCC: Modify VPC Service Control with GCE Activity from the Restricted Resource SCC: Modify VPC Service Control with Activity from the Restricted Service Linux Threats - OS Privilege Escalation Tools: Sensitive File Discovery Last Login Users Whoami Commands Windows Threats - Initial Access: NetLogon AD System Event Risk Analytics for UEBA - Login to an Application Never Before Seen for a User Group: First Time User Login Activity to Application for Manager Peer Group Risk Analytics for UEBA - Login from Country Never Before Seen for a User Group: First Time User Login Activity from Country for Manager Peer Group The rule "SCC: Unexpected Child Shell" has been moved from the rule pack "Cloud Threats - CDIR SCC Enhanced Malware Alerts" to "Cloud Threats - CDIR SCC Enhanced Execution Alerts" January 07, 2025 Announcement The following parser documentation is now available: Collect Microsoft Defender for Endpoint logs Zscaler parsers overview Collect Zscaler DNS logs Collect Zscaler Firewall logs Collect Zscaler Internet Access logs Collect Zscaler Webproxy logs Collect Linux auditd and AIX systems logs Collect CircleCI audit logs Collect CloudPassage Halo logs Collect JFrog Artifactory logs Collect Apple macOS syslog data Collect Netskope web proxy logs Collect Onfido logs Collect OPNsense firewall logs Collect Rapid7 InsightIDR logs Collect Sysdig logs Collect Thinkst Canary logs Collect VMware Workspace ONE UEM logs Collect Workday HCM logs December 27, 2024 Change Google SecOps has added a new rule set to Applied Threat Intelligence (ATI), called Inbound IP Address Authentication, that identifies IP addresses that are authenticating to local infrastructure in an inbound network direction.
- April 22, 2025 Announcement The following parser documentation is now available: Collect Barracuda Email Security Gateway logs Collect Barracuda WAF logs Collect CrowdStrike Falcon logs in CEF Collect Juniper NetScreen Firewall logs Collect Micro Focus NetIQ Access Manager logs Collect Symantec DLP logs Collect Aruba ClearPass logs Collect Aruba Wireless Controller and Access Point logs Collect BeyondTrust Secure Remote Access logs Collect CyberArk Privileged Threat Analytics logs Collect Fortinet FortiMail logs Collect Sophos Central logs Collect Sophos XG Firewall logs Collect AWS EC2 Hosts logs Collect AWS EC2 Instance logs Collect AWS IAM logs Collect Cisco Stealthwatch logs Collect Cisco Umbrella audit logs Collect Cisco Umbrella DNS logs Collect Cisco Umbrella Web Proxy logs Collect CommVault Backup and Recovery logs Collect Forcepoint Proxy logs Collect Fortinet FortiAnalyzer logs Collect Fortinet FortiAuthenticator logs Collect Fortinet Firewall logs Collect Palo Alto Networks Traps logs Collect SecureAuth Identity Platform logs Collect Claroty CTD logs Collect Claroty xDome logs Collect F5 BIG-IP ASM logs Collect FireEye HX logs Collect Microsoft IIS logs Collect PowerShell logs Collect Snort logs Collect A10 Network Load Balancer logs Collect Alcatel switch logs Collect AlgoSec Security Management logs Collect Arbor Edge Defense logs Collect Epic Systems logs Collect Fortra Digital Guardian DLP logs Collect MobileIron logs Collect Microsoft Windows Defender ATP logs Collect Nokia Router logs Collect Broadcom Symantec SiteMinder Web Access logs April 21, 2025 Feature Curated Detections has been enhanced with new detection content for Cloud Threats to include rule packs covering Office 365 and Okta.
- July 29, 2024 Feature Curated Detections has been enhanced with new detection content for Cloud Threats to include rule packs covering Microsoft Entra ID, Entra ID Audit and Azure Compute and are in public preview for customers with a Google Security Operations or Enterprise Plus license.
- An improved integration for Chrome Enterprise Premium is now available that includes: Streamlined connection to Google SecOps, using recommended security defaults Enhanced log events with Google Safe Browsing context Updated parser and integration documentation: Collect Google Chrome logs Curated dashboards for Chrome Enterprise Premium Google Workspace SOAR actions to manage Chrome extension blocklist policies ( Block Extension and Delete Extension ) October 28, 2025 Feature Risk-based alerting with entity-only rules With the new ENTITY RISK CHANGE UDM event type, you can now write YARA-L detection rules that trigger independently of ingested events.

### "Cloud Threats category overview \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following export filter exports Google Cloud Cloud Run ( GCP RUN ) logs, in addition to the default logs both through the direct ingestion mechanism as well as through Cloud Storage and Sinks : log id("run.googleapis.com/stdout") OR log id("run.googleapis.com/stderr") OR log id("run.googleapis.com/requests") OR log id("run.googleapis.com/varlog/system) Curated detections for AWS rule sets AWS rule sets in this category help identify threats in AWS environments using event and context data, and includes the following rule sets: AWS - Compute : Detects anomalous activity surrounding AWS compute resources, including EC2 and Lambda.
- Curated detections for Office 365 data Office 365 rule sets in this category help identify threats in Office 365 environments using event and context data, and includes the following rule sets: Office 365 - Administrative : Detects malicious, suspicious and high-risk activities in Office 365, including backup policy changes, Microsoft Purview, and ATP detections.
- Curated detections for Google Cloud data Google Cloud rule sets help identify threats in Google Cloud environments using event and context data, and includes the following rule sets: Admin Action : Activity associated with administrative actions, deemed suspicious but potentially legitimate depending on organizational use.
- Supported devices and required log types for Office 365 These rule sets have been tested and are supported with the following data sources, listed by product name and Google SecOps ingestion label : Curated detection for Okta rule sets Okta rule sets in this category help detect threats within Okta environments by analyzing event and context data.

