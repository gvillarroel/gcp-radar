---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:56:14.403Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Log extractors"
feature_slug: "log-extractors"
latest_feature_date: "2025-04-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users"
  - "https://docs.cloud.google.com/chronicle/docs/soar/release-notes"
keywords:
  - "log"
  - "extractors"
  - "let"
  - "users"
  - "pull"
  - "specific"
  - "fields"
  - "from"
---

# Log extractors

Product: Google SecOps SIEM
Coverage: LOW

## Step 02 Summary

Extractors let users pull specific fields from high-volume log sources to optimize log management.

## Extended Definition

Extractors let users pull specific fields from high-volume log sources to optimize log management.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)
- [https://docs.cloud.google.com/chronicle/docs/soar/release-notes](https://docs.cloud.google.com/chronicle/docs/soar/release-notes)

## Supporting Pages

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-api-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- You can now optimize log management by creating extractors to pull specific fields from high-volume log sources.
- Windows-specific ) Microsoft SQL Server ( Database ) Microsoft System Center Endpoint Protection ( Malware Detection ) Mikrotik Router ( Router ) Mimecast ( Email Server ) MISP Threat Intelligence ( Cybersecurity ) Mobile Endpoint Security ( Mobile Endpoint Security ) Mobileiron ( ENDPOINT MANAGEMENT ) NetApp BlueXP ( Security ) Nozomi Networks Scada Guardian ( Network Monitoring ) Office 365 ( SaaS Application ) Okta ( Identity and Access Management ) OpenVPN ( Network ) Opnsense ( Firewall and Routing Platform ) Opswat Metadefender ( Threat Protection ) Oracle ( DATABASE ) Oracle Cloud Infrastructure Audit Logs ( Oracle Cloud Infrastructure ) Oracle Fusion ( SaaS Application ) Oracle WebLogic Server ( Web server logs ) Palo Alto Cortex XDR Alerts ( NDR ) Palo Alto Prisma Cloud ( SECURITY PLATFORM ) Palo Alto Prisma Cloud Alert payload ( Cloud Security ) Ping Federate ( Authentication ) Ping Identity ( Authentication ) Ping One ( NA ) PingIdentity Directory Server Logs ( Security ) Precisely Ironstream IBM z/OS ( ZOS ) ProFTPD ( Web Server ) Proofpoint Observeit ( Email Server ) Proofpoint On Demand ( Email Server ) ProofPoint Secure Email Relay ( Email server ) Proofpoint Tap Forensics ( Email Server ) Quest Active Directory ( Authentication log ) Red Hat Directory Server LDAP ( Identity and Access Management ) Remediant SecureONE ( Privileged Account Activity ) Salesforce ( SaaS Application ) SAP Sybase Adaptive Server Enterprise Database ( Database ) Security Command Center Posture Violation ( Google Cloud Specific ) Security Command Center Threat ( Google Cloud Specific ) Security Command Center Toxic Combination ( Google Cloud Specific ) Sentinelone Alerts ( Endpoint Security ) Shibboleth IDP ( Identity and Access Management ) Snare System Diagnostic Logs ( Security ) Snipe-IT ( SaaS Applications ) Snort ( IDS/IPS ) SonicWall ( Firewall ) Squid Web Proxy ( Web Proxy ) STIX Threat Intelligence ( Cybersecurity Threats ) Suricata EVE ( IPS IDS ) Symantec CloudSOC CASB ( CASB ) Symantec DLP ( DLP ) Symantec Endpoint Protection ( AV / Endpoint ) Symantec Event export ( SEP ) Symantec Web Security Service ( Web Proxy ) Sysdig ( Security ) Tailscale ( CASB ) Tanium Threat Response ( Tanium Specific ) TeamViewer ( Remote Support ) Tenable CSPM ( Cloud Security ) Tenable Security Center ( Vulnerability Scanner ) Thales Luna Hardware Security Module ( THALES LUNA HSM specific ) Trellix HX Event Streamer ( Cybersecurity ) Trend Micro Deep Security ( AV / Endpoint ) Trend Micro Vision One ( AV and endpoint logs ) Trend Micro Vision One Workbench ( Schema ) TrendMicro Deep Discovery Inspector ( Physical and virtual network ) Tripwire ( DLP ) TXOne Stellar ( AV and Endpoint logs ) UberAgent ( Security ) Unix system ( OS ) UpGuard ( Vulnerability scanners ) Upstream Vehicle SOC Alerts ( Schema ) URLScan IO ( Vulnerability scanners ) Veeam ( Backup software ) VMware AirWatch ( Wireless ) VMware Horizon ( VDI ) VMware vCenter ( Server ) VMWare VSphere ( virtualization ) VPC Flow Logs ( Google Cloud Specific ) Wallix Bastion ( Privileged Account Activity ) WindChill ( Lifecycle Management Software ) Windows Event ( Endpoint ) Windows Event (XML) ( AV / Endpoint ) Windows Sysmon ( DNS ) Workday Audit Logs ( Audit And Compliance ) Workspace Activities ( Google Cloud Specific ) Workspace ChromeOS Devices ( Google Cloud Specific ) Zimperium ( Mobile Device Management ) Zoom Operation Logs ( Operation-Specific ) Zscaler ( Web Proxy ) Zscaler DLP ( Data Loss Prevention ) ZScaler DNS ( DNS ) ZScaler NGFW ( Firewall ) Zscaler NSS Feeds for Alerts ( Alert log types ) Zscaler Private Access ( Security Service Edge ) The following log types were added without a default parser.
- January 14, 2025 Change The following rules have been removed from their associated rule packs in Curated Detections due to high alert volume across the Google SecOps customer base: Cloud Threats - CDIR SCC Enhanced Defense Evasion Alerts: SCC: Modify VPC Service Control with GCE Activity from the Restricted Resource SCC: Modify VPC Service Control with Activity from the Restricted Service Linux Threats - OS Privilege Escalation Tools: Sensitive File Discovery Last Login Users Whoami Commands Windows Threats - Initial Access: NetLogon AD System Event Risk Analytics for UEBA - Login to an Application Never Before Seen for a User Group: First Time User Login Activity to Application for Manager Peer Group Risk Analytics for UEBA - Login from Country Never Before Seen for a User Group: First Time User Login Activity from Country for Manager Peer Group The rule "SCC: Unexpected Child Shell" has been moved from the rule pack "Cloud Threats - CDIR SCC Enhanced Malware Alerts" to "Cloud Threats - CDIR SCC Enhanced Execution Alerts" January 07, 2025 Announcement The following parser documentation is now available: Collect Microsoft Defender for Endpoint logs Zscaler parsers overview Collect Zscaler DNS logs Collect Zscaler Firewall logs Collect Zscaler Internet Access logs Collect Zscaler Webproxy logs Collect Linux auditd and AIX systems logs Collect CircleCI audit logs Collect CloudPassage Halo logs Collect JFrog Artifactory logs Collect Apple macOS syslog data Collect Netskope web proxy logs Collect Onfido logs Collect OPNsense firewall logs Collect Rapid7 InsightIDR logs Collect Sysdig logs Collect Thinkst Canary logs Collect VMware Workspace ONE UEM logs Collect Workday HCM logs December 27, 2024 Change Google SecOps has added a new rule set to Applied Threat Intelligence (ATI), called Inbound IP Address Authentication, that identifies IP addresses that are authenticating to local infrastructure in an inbound network direction.
- April 13, 2022 Change The following supported default parsers have changed (listed by ingestion label) AKAMAI WAF ARUBA WIRELESS AWS CLOUDTRAIL AWS CONFIG AZURE AD CONTEXT AZURE COSMOS DB BITDEFENDER CA ACCESS CONTROL CASSANDRA CISCO EMAIL SECURITY CISCO FIREPOWER FIREWALL CISCO ISE CISCO MERAKI CISCO TACACS CS EDR D3 BANKING ELASTIC WINLOGBEAT FILEZILLA FTP GCP CLOUDIDENTITY DEVICES GCP CLOUDIDENTITY DEVICEUSERS GMV CHECKER GUARDDUTY GUARDIUM IIS INFOBLOX DHCP KASPERSKY AV KEA DHCP MCAFEE DLP MCAFEE EPO MICROSOFT DEFENDER ENDPOINT NETSKOPE WEBPROXY OFFICE 365 OKTA OKTA USER CONTEXT ONELOGIN SSO ORDR IOT PAN FIREWALL PROOFPOINT ON DEMAND PULSE SECURE VPN RH ISAC IOC SALESFORCE SERVICENOW CMDB SLACK AUDIT SOPHOS UTM SYMANTEC EDR TANIUM TH UMBRELLA DNS UNIFI AP VANDYKE SFTP VMWARE ESX VMWARE VREALIZE WINDOWS DHCP WINDOWS DNS WINDOWS SYSMON WORKSPACE ACTIVITY WORKSPACE ALERTS WORKSPACE USERS For details about the changes in each parser, see Supported default parsers April 07, 2022 Change Exporting Google Cloud Logs to Chronicle There are now lists of the specific Google Cloud Logs and Google Cloud Asset Metadata that are exported to Chronicle when you enable Google Cloud log ingestion.

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-api-reference`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- You can now optimize log management by creating extractors to pull specific fields from high-volume log sources.
- Windows-specific ) Microsoft SQL Server ( Database ) Microsoft System Center Endpoint Protection ( Malware Detection ) Mikrotik Router ( Router ) Mimecast ( Email Server ) MISP Threat Intelligence ( Cybersecurity ) Mobile Endpoint Security ( Mobile Endpoint Security ) Mobileiron ( ENDPOINT MANAGEMENT ) NetApp BlueXP ( Security ) Nozomi Networks Scada Guardian ( Network Monitoring ) Office 365 ( SaaS Application ) Okta ( Identity and Access Management ) OpenVPN ( Network ) Opnsense ( Firewall and Routing Platform ) Opswat Metadefender ( Threat Protection ) Oracle ( DATABASE ) Oracle Cloud Infrastructure Audit Logs ( Oracle Cloud Infrastructure ) Oracle Fusion ( SaaS Application ) Oracle WebLogic Server ( Web server logs ) Palo Alto Cortex XDR Alerts ( NDR ) Palo Alto Prisma Cloud ( SECURITY PLATFORM ) Palo Alto Prisma Cloud Alert payload ( Cloud Security ) Ping Federate ( Authentication ) Ping Identity ( Authentication ) Ping One ( NA ) PingIdentity Directory Server Logs ( Security ) Precisely Ironstream IBM z/OS ( ZOS ) ProFTPD ( Web Server ) Proofpoint Observeit ( Email Server ) Proofpoint On Demand ( Email Server ) ProofPoint Secure Email Relay ( Email server ) Proofpoint Tap Forensics ( Email Server ) Quest Active Directory ( Authentication log ) Red Hat Directory Server LDAP ( Identity and Access Management ) Remediant SecureONE ( Privileged Account Activity ) Salesforce ( SaaS Application ) SAP Sybase Adaptive Server Enterprise Database ( Database ) Security Command Center Posture Violation ( Google Cloud Specific ) Security Command Center Threat ( Google Cloud Specific ) Security Command Center Toxic Combination ( Google Cloud Specific ) Sentinelone Alerts ( Endpoint Security ) Shibboleth IDP ( Identity and Access Management ) Snare System Diagnostic Logs ( Security ) Snipe-IT ( SaaS Applications ) Snort ( IDS/IPS ) SonicWall ( Firewall ) Squid Web Proxy ( Web Proxy ) STIX Threat Intelligence ( Cybersecurity Threats ) Suricata EVE ( IPS IDS ) Symantec CloudSOC CASB ( CASB ) Symantec DLP ( DLP ) Symantec Endpoint Protection ( AV / Endpoint ) Symantec Event export ( SEP ) Symantec Web Security Service ( Web Proxy ) Sysdig ( Security ) Tailscale ( CASB ) Tanium Threat Response ( Tanium Specific ) TeamViewer ( Remote Support ) Tenable CSPM ( Cloud Security ) Tenable Security Center ( Vulnerability Scanner ) Thales Luna Hardware Security Module ( THALES LUNA HSM specific ) Trellix HX Event Streamer ( Cybersecurity ) Trend Micro Deep Security ( AV / Endpoint ) Trend Micro Vision One ( AV and endpoint logs ) Trend Micro Vision One Workbench ( Schema ) TrendMicro Deep Discovery Inspector ( Physical and virtual network ) Tripwire ( DLP ) TXOne Stellar ( AV and Endpoint logs ) UberAgent ( Security ) Unix system ( OS ) UpGuard ( Vulnerability scanners ) Upstream Vehicle SOC Alerts ( Schema ) URLScan IO ( Vulnerability scanners ) Veeam ( Backup software ) VMware AirWatch ( Wireless ) VMware Horizon ( VDI ) VMware vCenter ( Server ) VMWare VSphere ( virtualization ) VPC Flow Logs ( Google Cloud Specific ) Wallix Bastion ( Privileged Account Activity ) WindChill ( Lifecycle Management Software ) Windows Event ( Endpoint ) Windows Event (XML) ( AV / Endpoint ) Windows Sysmon ( DNS ) Workday Audit Logs ( Audit And Compliance ) Workspace Activities ( Google Cloud Specific ) Workspace ChromeOS Devices ( Google Cloud Specific ) Zimperium ( Mobile Device Management ) Zoom Operation Logs ( Operation-Specific ) Zscaler ( Web Proxy ) Zscaler DLP ( Data Loss Prevention ) ZScaler DNS ( DNS ) ZScaler NGFW ( Firewall ) Zscaler NSS Feeds for Alerts ( Alert log types ) Zscaler Private Access ( Security Service Edge ) The following log types were added without a default parser.
- September 08, 2025 Announcement New parser documentation now available New parser documentation is available to help you ingest and normalize logs from the following sources: Collect Akamai Cloud Monitor logs Collect Akamai DataStream 2 logs Collect Aware audit logs Collect AWS API Gateway access logs Collect AWS VPC Transit Gateway flow logs Collect Bitwarden Enterprise event logs Collect Box Collaboration JSON logs Collect Censys logs Collect Code42 Incydr core datasets Collect CSV Custom IOC files Collect Deep Instinct EDR logs Collect DigiCert audit logs Collect DomainTools Iris Investigate results Collect Duo administrator logs Collect Duo authentication logs Collect Duo entity context logs Collect Google Cloud Abuse Events logs Collect Harness IO audit logs Collect HPE Aruba Networking Central logs Collect Jamf Pro context logs Collect PingOne Advanced Identity Cloud logs Collect Slack audit logs Collect Snyk group-level audit logs Collect Snyk group-level audit and issues logs Collect Venafi Zero Touch PKI logs Collect Veritas NetBackup logs Collect VMware AirWatch logs Collect VMware Avi Load Balancer WAF logs Collect VMware Horizon logs Collect VMware VeloCloud SD-WAN logs Collect Zoom operation logs September 07, 2025 Feature Use custom fields in the Close Case dialog Administrators can now add custom fields to the Close Case dialog.
- January 14, 2025 Change The following rules have been removed from their associated rule packs in Curated Detections due to high alert volume across the Google SecOps customer base: Cloud Threats - CDIR SCC Enhanced Defense Evasion Alerts: SCC: Modify VPC Service Control with GCE Activity from the Restricted Resource SCC: Modify VPC Service Control with Activity from the Restricted Service Linux Threats - OS Privilege Escalation Tools: Sensitive File Discovery Last Login Users Whoami Commands Windows Threats - Initial Access: NetLogon AD System Event Risk Analytics for UEBA - Login to an Application Never Before Seen for a User Group: First Time User Login Activity to Application for Manager Peer Group Risk Analytics for UEBA - Login from Country Never Before Seen for a User Group: First Time User Login Activity from Country for Manager Peer Group The rule "SCC: Unexpected Child Shell" has been moved from the rule pack "Cloud Threats - CDIR SCC Enhanced Malware Alerts" to "Cloud Threats - CDIR SCC Enhanced Execution Alerts" January 11, 2025 Change Playbook names must now be unique across all SOAR environments, as part of updates to support future features.

### "Configure data RBAC for users \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- The scope assignment lets you restrict access to these events to specific users or roles within your organization.
- To filter and identify these specific events, you can create a custom label with the name Suspicious DHCP Activity with the following query: metadata.event type = "NETWORK DHCP" AND principal.ip = "10.0.0.1" The custom label works in the following manner: Google SecOps continuously ingests network logs and events into its UDM.
- The following operators let you create precise rules for controlling access to multiple scopes with a single IAM condition: ENDS WITH : checks if the scope name ends with a specific word.
- You want to track Dynamic Host Configuration Protocol (DHCP) events from a specific IP address (10.0.0.1) that you suspect might be compromised.

### Google Security Operations SOAR release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/release-notes](https://docs.cloud.google.com/chronicle/docs/soar/release-notes)
- Source ID: `site-api-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Fixed Error when trying to log in again to Chronicle SOAR (ID #46831483) Email HTML template shows blank page in Settings (ID #46912863) Users filter in the Search page not displaying all the users (ID #00249930) Active Directory Groups field removed from Settings Permission groups as it is not supported October 24, 2023 Feature Remote Agents 1.4.4 Added support for all SDK calls over remote agents Improved managing integrations over the remote agent leading to a more overall stable product experience Publisher Python version upgraded to Python 3.11 Fixed Remote Agents 1.4.4 Remote agent actions do not return script results in the same way local actions return them (ID #45682680) Users unable to change the remote agent environment via agent CLI October 03, 2023 Fixed Release 6.2.36 GA - 14th October, 2023 Internal security fixes September 27, 2023 Feature Release Notes 6.2.35 GA - 8th October Risk Score and Severity added Two new information fields have been added to the Alert Details widget which appears in the Alert overview tab.
- New API for Logs: Admin users can now retrieve raw python logs directly from the platform using the following API: POST/api/external/v1/logging/python Fixed Release Notes 6.2.31 Importing a custom integration on top of an existing commercial integration causes the connector to not work properly (ID #00243798) Specific Integration showing incorrect update available (ID #00181718) SDK call siemplify.current alert.creation time returns 0 (ID #00226591) In rare situations, unable to access several cases via the Platform or via API (ID #00243878) When changing the Case Stage under the Cases tab, the drop down list of stages does not follow the same numerical order as defined in the Settings (ID #44453181) Entities that should be internal are created as external if ingested using the environment alias (ID #00225318) In certain situations, alerts are ingested into the platform for environments that don't exist yet in the platform and as soon as the environments are created - the cases are opened and playbooks run.
- Fixed Playbooks and their folders within a specific environment are deleted without a corresponding entry in the audit logs. (ID #48557086) Announcement The following API endpoints will be deprecated in July 2024. api/external/v1/settings/AddOrUpdateSamlSettings api/external/v1/accounts/DisableJitAndAutoRedirect api/external/v1/settings/GetSamlSettingsTemplate December 08, 2023 Announcement Release 6.2.42 is now in General Availability.
- This change makes the information easier to understand. (ID #48941723) Fixed Docker hub login is not needed and as such this instruction has been removed from the platform. (ID #49611790) Fixed Users with a single character in their last name are unable to login (ID #49008785) Fixed Alerts are being grouped into cases after the time specified in the platform.

