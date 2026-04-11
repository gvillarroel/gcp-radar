---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:24:01.893Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Playbook condition flows"
feature_slug: "playbook-condition-flows"
latest_feature_date: "2026-04-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen"
keywords:
  - "playbook"
  - "condition"
  - "flows"
  - "conditions"
  - "up"
  - "to"
  - "20"
  - "branches"
---

# Playbook condition flows

Product: Google SecOps
Coverage: LOW

## Step 02 Summary

Playbook conditions support up to 20 branches in a single step.

## Extended Definition

Playbook conditions support up to 20 branches in a single step.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen](https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen)

## Supporting Pages

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- April 04, 2026 Feature Playbook Condition and Multi-Choice Question Flows The maximum number of branches supported in Playbook Conditions and Multiple Choice Questions has been increased from 6 to 20.
- August 05, 2025 Feature New YARA-L features The following capabilities have been added to YARA-L 2.0 to enhance search precision, data analysis, and investigative workflows: Conditions in UDM search and dashboards You can now filter aggregates defined in the outcome section using the new condition clause.
- January 14, 2025 Change The following rules have been removed from their associated rule packs in Curated Detections due to high alert volume across the Google SecOps customer base: Cloud Threats - CDIR SCC Enhanced Defense Evasion Alerts: SCC: Modify VPC Service Control with GCE Activity from the Restricted Resource SCC: Modify VPC Service Control with Activity from the Restricted Service Linux Threats - OS Privilege Escalation Tools: Sensitive File Discovery Last Login Users Whoami Commands Windows Threats - Initial Access: NetLogon AD System Event Risk Analytics for UEBA - Login to an Application Never Before Seen for a User Group: First Time User Login Activity to Application for Manager Peer Group Risk Analytics for UEBA - Login from Country Never Before Seen for a User Group: First Time User Login Activity from Country for Manager Peer Group The rule "SCC: Unexpected Child Shell" has been moved from the rule pack "Cloud Threats - CDIR SCC Enhanced Malware Alerts" to "Cloud Threats - CDIR SCC Enhanced Execution Alerts" January 11, 2025 Change Playbook names must now be unique across all SOAR environments, as part of updates to support future features.
- June 08, 2025 Feature Playbook Permissions: Support for API Key Roles The platform has been updated to extend playbook permissions to also support the SOC Roles associated with API keys, in addition to the user SOC Roles.

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- August 05, 2025 Feature New YARA-L features The following capabilities have been added to YARA-L 2.0 to enhance search precision, data analysis, and investigative workflows: Conditions in UDM search and dashboards You can now filter aggregates defined in the outcome section using the new condition clause.
- December 08, 2025 Feature N OF and OR syntax updates You can now use the N OF syntax and the or operator to write flexible and conditional logic within the condition section of your query.
- May 23, 2023 Fixed Single event rules meeting all of the following conditions have been reclassified as multiple event rules to increase detections: Includes a match section.
- AIX system ( AIX SYSTEM ) Arcsight CEF ( ARCSIGHT CEF ) Arista Switch ( ARISTA SWITCH ) Aruba ( ARUBA WIRELESS ) Aruba Switch ( ARUBA SWITCH ) Attivo Networks ( ATTIVO ) AWS Cloudtrail ( AWS CLOUDTRAIL ) AWS Control Tower ( AWS CONTROL TOWER ) AWS Elastic Load Balancer ( AWS ELB ) AWS WAF ( AWS WAF ) Azure AD ( AZURE AD ) Azure AD Directory Audit ( AZURE AD AUDIT ) Azure AD Organizational Context ( AZURE AD CONTEXT ) Azure Application Gateway ( AZURE GATEWAY ) Azure Storage Audit ( AZURE STORAGE AUDIT ) Azure WAF ( AZURE WAF ) Barracuda Firewall ( BARRACUDA FIREWALL ) BeyondTrust Endpoint Privilege Management ( BEYONDTRUST ENDPOINT ) BigQuery ( N/A ) Blue Coat Proxy ( BLUECOAT WEBPROXY ) Brocade Switch ( BROCADE SWITCH ) Check Point ( CHECKPOINT FIREWALL ) Cisco ASA ( CISCO ASA FIREWALL ) Cisco Firepower NGFW ( CISCO FIREPOWER FIREWALL ) Cisco FireSIGHT Management Center ( CISCO FIRESIGHT ) Cisco Internetwork Operating System ( CISCO IOS ) Cisco ISE ( CISCO ISE ) Cisco Meraki ( CISCO MERAKI ) Cisco VPN ( CISCO VPN ) Cisco WLC/WCS ( CISCO WIRELESS ) Citrix Netscaler ( CITRIX NETSCALER ) Claroty Enterprise Management Console ( CLAROTY EMC ) Cloud Audit Logs ( N/A ) Cloud Intrusion Detection System ( GCP IDS ) Corelight ( CORELIGHT ) CrowdStrike Detection Monitoring ( CS DETECTS ) CrowdStrike Falcon ( CS EDR ) CyberArk ( CYBERARK ) Cyberark Privilege Cloud ( CYBERARK PRIVILEGE CLOUD ) Cybergatekeeper NAC ( CYBERGATEKEEPER NAC ) Darktrace ( DARKTRACE ) Dell ECS Enterprise Object Storage ( DELL ECS ) Dell Switch ( DELL SWITCH ) Elastic Packet Beats ( ELASTIC PACKETBEATS ) ESET ( ESET EDR ) ESET AV ( ESET AV ) F5 Advanced Firewall Management ( F5 AFM ) F5 ASM ( F5 ASM ) F5 BIGIP LTM ( F5 BIGIP LTM ) FireEye HX ( FIREEYE HX ) FireEye NX Audit ( FIREEYE NX AUDIT ) Firewall Rule Logging ( N/A ) Forcepoint DLP ( FORCEPOINT DLP ) Forescout NAC ( FORESCOUT NAC ) Forgerock OpenIdM ( FORGEROCK OPENIDM ) FortiGate ( FORTINET FIREWALL ) Fortinet FortiAnalyzer ( FORTINET FORTIANALYZER ) Fortra Powertech SIEM Agent ( FORTRA POWERTECH SIEM AGENT ) Cloud NAT ( N/A ) GCP SWP ( GCP SWP ) Gitlab ( GITLAB ) GMAIL Logs ( GMAIL LOGS ) GMV Checker ATM Security ( GMV CHECKER ) Guardicore Centra ( GUARDICORE CENTRA ) HPE BladeSystem C7000 ( HPE BLADESYSTEM C7000 ) HYPR MFA ( HYPR MFA ) IBM AS/400 ( IBM AS400 ) IBM DS8000 Storage ( IBM DS8000 ) IBM Guardium ( GUARDIUM ) IBM Tape Storages ( IBM LTO ) IBM Tivoli ( IBM TIVOLI ) IBM-i Operating System ( IBM I ) Illumio Core ( ILLUMIO CORE ) Imperva ( IMPERVA WAF ) Imperva Advanced Bot Protection ( IMPERVA ABP ) Imperva SecureSphere Management ( IMPERVA SECURESPHERE ) Infoblox ( INFOBLOX ) ION Spectrum ( ION SPECTRUM ) Ipswitch MOVEit Transfer ( IPSWITCH MOVEIT TRANSFER ) Jamf Protect Alerts ( JAMF PROTECT ) Jamf Protect Telemetry ( JAMF TELEMETRY ) Juniper Junos ( JUNIPER JUNOS ) Juniper MX Router ( JUNIPER MX ) Kubernetes Node ( KUBERNETES NODE ) LastPass Password Management ( LASTPASS ) Linux Auditing System (AuditD) ( AUDITD ) McAfee Enterprise Security Manager ( MCAFEE ESM ) Medigate IoT ( MEDIGATE IOT ) Microsoft AD ( WINDOWS AD ) Microsoft Azure Activity ( AZURE ACTIVITY ) Microsoft Defender for Endpoint ( MICROSOFT DEFENDER ENDPOINT ) Microsoft Defender for Identity ( MICROSOFT DEFENDER IDENTITY ) Microsoft Exchange ( EXCHANGE MAIL ) Microsoft Graph API Alerts ( MICROSOFT GRAPH ALERT ) Microsoft IAS Server ( MICROSOFT IAS ) Microsoft Intune ( AZURE MDM INTUNE ) Microsoft SQL Server ( MICROSOFT SQL ) Mongo Database ( MONGO DB ) Netscout Arbor Sightline ( ARBOR SIGHTLINE ) Netskope Web Proxy ( NETSKOPE WEBPROXY ) NGFW Enterprise ( GCP NGFW ENTERPRISE ) Office 365 ( OFFICE 365 ) Office 365 Message Trace ( OFFICE 365 MESSAGETRACE ) Opengear Remote Management ( OPENGEAR ) Oracle ( ORACLE DB ) OSQuery ( OSQUERY EDR ) OSSEC ( OSSEC ) Palo Alto Cortex XDR Alerts ( CORTEX XDR ) Palo Alto Networks Firewall ( PAN FIREWALL ) Palo Alto Prisma Cloud ( PAN PRISMA CLOUD ) PerimeterX Bot Protection ( PERIMETERX BOT PROTECTION ) Phishlabs ( PHISHLABS ) Proofpoint Tap Alerts ( PROOFPOINT MAIL ) Pulse Secure ( PULSE SECURE VPN ) Riverbed Steelhead ( STEELHEAD ) RSA SecurID Access Identity Router ( RSA SECURID ) SAP SM20 ( SAP SM20 ) SAP SuccessFactors ( SAP SUCCESSFACTORS ) SAP Webdispatcher ( SAP WEBDISP ) Security Command Center Posture Violation ( GCP SECURITYCENTER POSTURE VIOLATION ) Security Command Center Threat ( N/A ) Security Command Center Toxic Combination ( GCP SECURITYCENTER TOXIC COMBINATION ) Sentinelone Alerts ( SENTINELONE ALERT ) SentinelOne EDR ( SENTINEL EDR ) SentinelOne Singularity Cloud Funnel ( SENTINELONE CF ) Snare System Diagnostic Logs ( SNARE SOLUTIONS ) Solaris system ( SOLARIS SYSTEM ) SonicWall ( SONIC FIREWALL ) Sonicwall Secure Mobile Access ( SONICWALL SMA ) Splunk Platform ( SPLUNK ) Squid Web Proxy ( SQUID WEBPROXY ) Suricata EVE ( SURICATA EVE ) Suricata IDS ( SURICATA IDS ) Swift Alliance Messaging Hub ( SWIFT AMH ) Symantec CloudSOC CASB ( SYMANTEC CASB ) Symantec DLP ( SYMANTEC DLP ) Tenable OT ( TENABLE OT ) Tetragon Ebpf Audit Logs ( TETRAGON EBPF AUDIT LOGS ) Trellix HX Event Streamer ( TRELLIX HX ES ) Trend Micro ( TIPPING POINT ) Trend Micro Cloud one ( TRENDMICRO CLOUDONE ) Trend Micro Deep Security ( TRENDMICRO DEEP SECURITY ) TrendMicro Apex Central ( TRENDMICRO APEX CENTRAL ) TrendMicro Web Proxy ( TRENDMICRO WEBPROXY ) Unifi AP ( UNIFI AP ) Unix system ( NIX SYSTEM ) Vectra Detect ( VECTRA DETECT ) VeridiumID by Veridium ( VERIDIUM ID ) VPC Flow Logs ( GCP VPC FLOW ) Windows Defender ATP ( WINDOWS DEFENDER ATP ) Windows DNS ( WINDOWS DNS ) Windows Event ( WINEVTLOG ) Windows Event (XML) ( WINEVTLOG XML ) Windows Network Policy Server ( WINDOWS NET POLICY SERVER ) Windows Sysmon ( WINDOWS SYSMON ) Workspace Activities ( WORKSPACE ACTIVITY ) Workspace Alerts ( WORKSPACE ALERTS ) Workspace ChromeOS Devices ( WORKSPACE CHROMEOS ) Workspace Groups ( WORKSPACE GROUPS ) Workspace Mobile Devices ( WORKSPACE MOBILE ) Workspace Privileges ( WORKSPACE PRIVILEGES ) Workspace Users ( WORKSPACE USERS ) YAMAHA ROUTER RTX1200 ( YAMAHA ROUTER ) Zeek JSON ( BRO JSON ) Zimperium ( ZIMPERIUM ) Zscaler ( ZSCALER WEBPROXY ) Zscaler CASB ( ZSCALER CASB ) ZScaler NGFW ( ZSCALER FIREWALL ) The following log types, without a default parser, were added.

### "Explore the Playbooks page \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen](https://docs.cloud.google.com/chronicle/docs/soar/respond/working-with-playbooks/whats-on-the-playbooks-screen)
- Source ID: `site-docs-reference-2`
- Final score: 128
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Explore the Playbooks page Supported in: Google secops SOAR A playbook is built on triggers, actions, and flows, working together to automate incident response and other security operations tasks.
- It defines the conditions or events that cause the playbook to run.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- Menu : Click edit Edit and select the required playbooks or blocks before using Menu to perform bulk actions: New Folder : Add a new playbooks folder; the playbook automatically inherits any changes made to its associated environment groups.

