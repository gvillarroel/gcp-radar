---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:56:14.510Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "UDM Search Pivot Table"
feature_slug: "udm-search-pivot-table"
latest_feature_date: "2023-05-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users"
keywords:
  - "udm"
  - "search"
  - "pivot"
  - "table"
  - "the"
  - "lets"
  - "users"
  - "group"
---

# UDM Search Pivot Table

Product: Google SecOps SIEM
Coverage: LOW

## Step 02 Summary

The UDM Search Pivot Table lets users group search results and run aggregations across UDM fields.

## Extended Definition

The UDM Search Pivot Table lets users group search results and run aggregations across UDM fields.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 192
- Re-rank relevance: N/A

Evidence snippets:
- Click an entity to display the Entity context dialog, which can include the following items: Asset name First time seen Last time seen IP addresses MAC addresses Number of alerts Highest alert count by rule Alerts-over-time bar graph Open Alerts & IOCs link View in Alerts Tab link Use the Pivot Table to analyze events The Pivot Table lets you analyze events using expressions and functions against the results from the search.
- Types of grouped UDM fields You can search across all of the following grouped UDM fields: Grouped field name Associated UDM fields domain about.administrative domain about.asset.network domain network.dns.questions.name network.dns domain principal.administrative domain principal.asset.network domain target.administrative domain target.asset.hostname target.asset.network domain target.hostname email intermediary.user.email addresses network.email.from network.email.to principal.user.email addresses security result.about.user.email addresses target.user.email addresses file path principal.file.full path principal.process.file.full path principal.process.parent process.file.full path target.file.full path target.process.file.full path target.process.parent process.file.full path hash about.file.md5 about.file.sha1 about.file.sha256 principal.process.file.md5 principal.process.file.sha1 principal.process.file.sha256 security result.about.file.sha256 target.file.md5 target.file.sha1 target.file.sha256 target.process.file.md5 target.process.file.sha1 target.process.file.sha256 hostname intermediary.hostname observer.hostname principal.asset.hostname principal.hostname src.asset.hostname src.hostname target.asset.hostname target.hostname ip intermediary.ip observer.ip principal.artifact.ip principal.asset.ip principal.ip src.artifact.ip src.asset.ip src.ip target.artifact.ip target.asset.ip target.ip namespace principal.namespace src.namespace target.namespace process id principal.process.parent process.pid principal.process.parent process.product specific process id principal.process.pid principal.process.product specific process id target.process.parent process.pid target.process.parent process.product specific process id target.process.pid target.process.product specific process id user about.user.userid observer.user.userid principal.user.user display name principal.user.userid principal.user.windows sid src.user.userid target.user.user display name target.user.userid target.user.windows sid Find a UDM field for search query While writing a search query, you may not know which UDM field to include.
- The following examples show supported boolean operators ( AND , OR , and NOT ): A AND B A OR B Use parentheses ( ) to group expressions and control evaluation order: (A OR B) AND (B OR C) AND (C OR NOT D) Examples: Search for login events on the finance server: metadata.event type = "USER LOGIN" and target.hostname = "finance-svr" Use the operator (>) to search for connections where more than 10 MB of data was sent: metadata.event type = "NETWORK CONNECTION" and network.sent bytes > 10000000 Use multiple conditions to search for winword.exe launching cmd.exe or powershell.exe : metadata.event type = "PROCESS LAUNCH" and principal.process.file.full path = /winword/ and ( target.process.file.full path = /cmd.exe/ or target.process.file.full path = /powershell.exe/ ) Search key-value pairs in additional and labels fields: The additional and labels fields act as customizable containers for event data that doesn't map to standard UDM fields.
- Search for events and alerts Supported in: Google secops SIEM The search function lets you find Unified Data Model (UDM) events and alerts in your Google Security Operations instance using YARA-L 2.0 syntax .

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-api-reference`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- May 01, 2023 Feature UDM Search Pivot Table The UDM Search Pivot Table enables you to further analyze your UDM search results, giving you the following capabilities: Group search results by up to five UDM fields.
- January 16, 2024 Feature UDM Search for entity investigation UDM Search now includes a feature that lets you investigate entities (for example, an IP address, user, or asset) in addition to the events and alerts that match the search query terms.
- March 18, 2025 Feature Statistics and aggregations in UDM search using YARA-L 2.0 You can now run statistical queries on UDM events and group the results for analysis using YARA-L 2.0.
- Deduplicate events in searches and dashboards The new dedup section lets you remove duplicate events after the match clause in both standard UDM searches and YARA-L 2.0 queries.

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-api-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- March 19, 2025 Announcement The following parser documentation is now available: Collect AWS Config logs Collect AWS Elastic Load Balancing logs Collect AWS Route 53 logs Collect AWS S3 server access logs Collect AWS WAF logs Collect Azure Application Gateway logs Collect Carbon Black App Control logs Collect Carbon Black EDR logs Collect Delinea Secret Server logs Collect Radware WAF logs Collect AWS Aurora logs Collect AWS CloudWatch logs Collect AWS Control Tower logs Collect AWS Elastic MapReduce logs Collect AWS Key Management Service logs Collect AWS Macie logs Collect AWS Network Firewall logs Collect AWS Security Hub logs Collect AWS Session Manager logs Collect Zscaler DLP logs Collect Zscaler Tunnel logs Collect Zscaler VPN logs Collect Zscaler ZPA Audit logs Collect Zscaler ZPA logs Collect Zscaler CASB logs Collect Azure AD Sign-In logs Collect Azure API Management logs Collect Azure APP Service logs Collect Azure Firewall logs Collect Azure VPN logs Collect AWS VPN logs Collect Azure Storage Audit logs Collect Azure WAF logs Collect Cloud IoT logs Collect Cloud Run logs Collect Cloud Compute logs Collect CrowdStrike Falcon Stream logs Collect SentinelOne Deep Visibility logs Collect Cloud VPC Flow Logs Collect Cloud Compute context logs Collect Cloud Intrusion Detection System (Cloud IDS) logs Collect Cloud Next Generation Firewall Enterprise logs Collect Cloud Storage context logs Collect Cloud Identity and Access Management (IAM) Analysis logs Collect Cloud Identity Devices logs Collect Cloud Identity Device Users logs Collect Cloud Security Command Center Error logs Collect Cloud Security Command Center Observation logs Collect Cloud Security Command Center Posture Violation logs Collect Cloud Security Command Center Toxic Combination logs Collect Cloud Security Command Center Unspecified logs Collect Cloud Secure Web Proxy logs March 18, 2025 Feature Statistics and aggregations in UDM search using YARA-L 2.0 You can now run statistical queries on UDM events and group the results for analysis using YARA-L 2.0.
- January 16, 2024 Feature UDM Search for entity investigation UDM Search now includes a feature that lets you investigate entities (for example, an IP address, user, or asset) in addition to the events and alerts that match the search query terms.
- Deduplicate events in searches and dashboards The new dedup section lets you remove duplicate events after the match clause in both standard UDM searches and YARA-L 2.0 queries.
- A10 Load Balancer ( A10 LOAD BALANCER ) AIX system ( AIX SYSTEM ) Akamai Cloud Monitor ( AKAMAI CLOUD MONITOR ) AlgoSec Security Management ( ALGOSEC ) Amazon API Gateway ( AWS API GATEWAY ) Apache ( APACHE ) Apple macOS ( MACOS ) AppOmni ( APPOMNI ) Arcsight CEF ( ARCSIGHT CEF ) Arista Switch ( ARISTA SWITCH ) Aruba ( ARUBA WIRELESS ) Aruba Airwave ( ARUBA AIRWAVE ) Aruba EdgeConnect SD-WAN ( ARUBA EDGECONNECT SDWAN ) Aruba Switch ( ARUBA SWITCH ) Attivo Networks ( ATTIVO ) Auth0 ( AUTH ZERO ) Automation Anywhere ( AUTOMATION ANYWHERE ) Avanan Email Security ( AVANAN EMAIL ) AWS Aurora ( AWS AURORA ) AWS Cloudtrail ( AWS CLOUDTRAIL ) AWS CloudWatch ( AWS CLOUDWATCH ) AWS Elastic Load Balancer ( AWS ELB ) AWS GuardDuty ( GUARDDUTY ) AWS RDS ( AWS RDS ) AWS Security Hub ( AWS SECURITY HUB ) AWS WAF ( AWS WAF ) Azure AD ( AZURE AD ) Azure AD Directory Audit ( AZURE AD AUDIT ) Azure AD Sign-In ( AZURE AD SIGNIN ) Azure Front Door ( AZURE FRONT DOOR ) Barracuda Email ( BARRACUDA EMAIL ) Barracuda WAF ( BARRACUDA WAF ) BeyondTrust ( BOMGAR ) BeyondTrust BeyondInsight ( BEYONDTRUST BEYONDINSIGHT ) BeyondTrust Endpoint Privilege Management ( BEYONDTRUST ENDPOINT ) BeyondTrust Secure Remote Access ( BEYONDTRUST REMOTE ACCESS ) BIND ( BIND DNS ) Bindplane Agent ( BINDPLANE AGENT ) Blue Coat Proxy ( BLUECOAT WEBPROXY ) Box ( BOX ) Carbon Black ( CB EDR ) Cato Networks ( CATO NETWORKS ) Check Point ( CHECKPOINT FIREWALL ) CipherTrust Manager ( CIPHERTRUST MANAGER ) Cisco Application Centric Infrastructure ( CISCO ACI ) Cisco ASA ( CISCO ASA FIREWALL ) Cisco Email Security ( CISCO EMAIL SECURITY ) Cisco Firepower NGFW ( CISCO FIREPOWER FIREWALL ) Cisco Internetwork Operating System ( CISCO IOS ) Cisco ISE ( CISCO ISE ) Cisco Meraki ( CISCO MERAKI ) Cisco PIX Firewall ( CISCO PIX FIREWALL ) Cisco Router ( CISCO ROUTER ) Cisco Stealthwatch ( CISCO STEALTHWATCH ) Cisco Switch ( CISCO SWITCH ) Cisco Umbrella Audit ( CISCO UMBRELLA AUDIT ) Cisco Umbrella DNS ( UMBRELLA DNS ) Cisco vManage SD-WAN ( CISCO SDWAN ) Cisco WLC/WCS ( CISCO WIRELESS ) Cisco WSA ( CISCO WSA ) Citrix Netscaler ( CITRIX NETSCALER ) Claroty Continuous Threat Detection ( CLAROTY CTD ) Claroty Xdome ( CLAROTY XDOME ) Cloud SQL ( GCP CLOUDSQL ) Cloudflare ( CLOUDFLARE ) Cloudflare Audit ( CLOUDFLARE AUDIT ) Compute Engine ( GCP COMPUTE ) Corelight ( CORELIGHT ) CrowdStrike Alerts API ( CS ALERTS ) CrowdStrike Detection Monitoring ( CS DETECTS ) CrowdStrike Falcon ( CS EDR ) CrowdStrike Falcon Stream ( CS STREAM ) CyberArk ( CYBERARK ) CyberArk Endpoint Privilege Manager (EPM) ( CYBERARK EPM ) CyberArk Privileged Access Manager (PAM) ( CYBERARK PAM ) Cyolo Secure Remote Access for OT ( CYOLO OT ) Darktrace ( DARKTRACE ) Delinea Secret Server ( DELINEA SECRET SERVER ) Dell ECS Enterprise Object Storage ( DELL ECS ) Dell Switch ( DELL SWITCH ) Duo Auth ( DUO AUTH ) ExtraHop RevealX ( EXTRAHOP ) Extreme Wireless ( EXTREME WIRELESS ) F5 Advanced Firewall Management ( F5 AFM ) F5 ASM ( F5 ASM ) F5 BIGIP Access Policy Manager ( F5 BIGIP APM ) F5 BIGIP LTM ( F5 BIGIP LTM ) F5 Distributed Cloud Services ( F5 DCS ) Fastly CDN ( FASTLY CDN ) FireEye ETP ( FIREEYE ETP ) FireEye NX ( FIREEYE NX ) Forcepoint Email Security ( FORCEPOINT EMAILSECURITY ) Forescout eyeInspect ( FORESCOUT EYEINSPECT ) FortiGate ( FORTINET FIREWALL ) Fortinet FortiAnalyzer ( FORTINET FORTIANALYZER ) Fortinet Fortimanager ( FORTINET FORTIMANAGER ) Fortinet Web Application Firewall ( FORTINET FORTIWEB ) GCP APP ENGINE ( GCP APP ENGINE ) GCP MODEL ARMOR ( GCP MODEL ARMOR ) GitHub ( GITHUB ) GitHub Dependabot ( GITHUB DEPENDABOT ) Google Cloud Audit ( GCP CLOUDAUDIT ) Google Threat Intelligence ( GCP THREATINTEL ) H3C Comware Platform Switch ( H3C SWITCH ) Hashicorp Vault ( HASHICORP ) HP Aruba (ClearPass) ( CLEARPASS ) Huawei Switches ( HUAWEI SWITCH ) IBM DataPower Gateway ( IBM DATAPOWER ) IBM DB2 ( DB2 DB ) Illumio Core ( ILLUMIO CORE ) Imperva ( IMPERVA WAF ) Imperva DRA ( IMPERVA DRA ) Island Browser logs ( ISLAND BROWSER ) Jamf pro context ( JAMF PRO CONTEXT ) JumpCloud Directory Insights ( JUMPCLOUD DIRECTORY INSIGHTS ) Juniper MX Router ( JUNIPER MX ) Keycloak ( KEYCLOAK ) KnowBe4 PhishER ( KNOWBE4 PHISHER ) Kolide Endpoint Security ( KOLIDE ) Kubernetes Node ( KUBERNETES NODE ) Linux Auditing System (AuditD) ( AUDITD ) McAfee DLP ( MCAFEE DLP ) McAfee ePolicy Orchestrator ( MCAFEE EPO ) McAfee Web Gateway ( MCAFEE WEBPROXY ) Microsoft AD FS ( ADFS ) Microsoft Defender For Cloud ( MICROSOFT DEFENDER CLOUD ALERTS ) Microsoft Defender for Endpoint ( MICROSOFT DEFENDER ENDPOINT ) Microsoft Graph API Alerts ( MICROSOFT GRAPH ALERT ) Microsoft IIS ( IIS ) Microsoft Intune ( AZURE MDM INTUNE ) Microsoft PowerShell ( POWERSHELL ) Microsoft SQL Server ( MICROSOFT SQL ) Mimecast Mail V2 ( MIMECAST MAIL V2 ) MISP Threat Intelligence ( MISP IOC ) Mobileiron ( MOBILEIRON ) MySQL ( MYSQL ) NetApp ONTAP ( NETAPP ONTAP ) Netfilter IPtables ( NETFILTER IPTABLES ) NetIQ Access Manager ( NETIQ ACCESS MANAGER ) Netskope V2 ( NETSKOPE ALERT V2 ) Netskope Web Proxy ( NETSKOPE WEBPROXY ) Network Policy Server ( MICROSOFT NPS ) NGINX ( NGINX ) Nozomi Networks Scada Guardian ( NOZOMI GUARDIAN ) Nutanix Prism ( NUTANIX PRISM ) Obsidian ( OBSIDIAN ) Office 365 ( OFFICE 365 ) Okta ( OKTA ) Onapsis ( ONAPSIS ) One Identity TPAM ( ONEIDENTITY TPAM ) OneLogin ( ONELOGIN SSO ) Open Cybersecurity Schema Framework (OCSF) ( OCSF ) Oracle ( ORACLE DB ) Palo Alto Networks Firewall ( PAN FIREWALL ) Palo Alto Panorama ( PAN PANORAMA ) Ping Identity ( PING ) PostFix Mail ( POSTFIX MAIL ) PostgreSQL ( POSTGRESQL ) Proofpoint CASB ( PROOFPOINT CASB ) Proofpoint Email Filter ( PROOFPOINT MAIL FILTER ) Proofpoint On Demand ( PROOFPOINT ON DEMAND ) Proofpoint Tap Alerts ( PROOFPOINT MAIL ) Pulse Secure ( PULSE SECURE VPN ) QNAP Systems NAS ( QNAP NAS ) Radware Web Application Firewall ( RADWARE FIREWALL ) Recorded Future ( RECORDED FUTURE IOC ) Red Hat OpenShift ( REDHAT OPENSHIFT ) Salesforce ( SALESFORCE ) SAP Sybase Adaptive Server Enterprise Database ( SAP ASE ) Security Command Center Chokepoint ( GCP SECURITYCENTER CHOKEPOINT ) Security Command Center Posture Violation ( GCP SECURITYCENTER POSTURE VIOLATION ) Security Command Center Threat ( GCP SECURITYCENTER THREAT ) Security Command Center Toxic Combination ( GCP SECURITYCENTER TOXIC COMBINATION ) ServiceNow Audit ( SERVICENOW AUDIT ) Snare System Diagnostic Logs ( SNARE SOLUTIONS ) Snyk Group level audit/issues logs ( SNYK ISSUES ) Solaris system ( SOLARIS SYSTEM ) Sophos Central ( SOPHOS CENTRAL ) STIX Threat Intelligence ( STIX ) Stormshield Firewall ( STORMSHIELD FIREWALL ) Sublime Security ( SUBLIMESECURITY ) Suricata EVE ( SURICATA EVE ) Swift Alliance Messaging Hub ( SWIFT AMH ) Symantec DLP ( SYMANTEC DLP ) Symantec Endpoint Protection ( SEP ) Symantec Messaging Gateway ( SYMANTEC MAIL ) Tableau ( TABLEAU ) TCPWave DDI ( TCPWAVE DDI ) TeamViewer ( TEAMVIEWER ) Tenable Active Directory Security ( TENABLE ADS ) Tenable OT ( TENABLE OT ) Tenable.io ( TENABLE IO ) Thinkst Canary ( THINKST CANARY ) ThreatConnect IOC V3 ( THREATCONNECT IOC V3 ) Trellix HX Event Streamer ( TRELLIX HX ES ) Trend Micro ( TIPPING POINT ) Trend Micro Vision One ( TRENDMICRO VISION ONE ) Trend Micro Vision One Workbench ( TRENDMICRO VISION ONE WORKBENCH ) TrendMicro Deep Discovery Inspector ( TRENDMICRO DDI ) TXOne Stellar ( TRENDMICRO STELLAR ) Unifi AP ( UNIFI AP ) Unix system ( NIX SYSTEM ) Vectra Detect ( VECTRA DETECT ) Vectra XDR ( VECTRA XDR ) Veritas NetBackup ( VERITAS NETBACKUP ) Versa Firewall ( VERSA FIREWALL ) VMware ESXi ( VMWARE ESX ) VMware NSX ( VMWARE NSX ) VMware vCenter ( VMWARE VCENTER ) WatchGuard ( WATCHGUARD ) Windows DNS ( WINDOWS DNS ) Windows Event ( WINEVTLOG ) Windows Event (XML) ( WINEVTLOG XML ) Wiz.io ( WIZ IO ) Workday Audit Logs ( WORKDAY AUDIT ) Workspace Activities ( WORKSPACE ACTIVITY ) Workspace Alerts ( WORKSPACE ALERTS ) Zimperium ( ZIMPERIUM ) Zscaler ( ZSCALER WEBPROXY ) Zscaler CASB ( ZSCALER CASB ) Zscaler DLP ( ZSCALER DLP ) ZScaler DNS ( ZSCALER DNS ) Zscaler Internet Access Audit Logs ( ZSCALER INTERNET ACCESS ) ZScaler NGFW ( ZSCALER FIREWALL ) Zscaler Private Access ( ZSCALER ZPA ) Zscaler Secure Private Access Audit Logs ( ZSCALER ZPA AUDIT ) Zscaler Tunnel ( ZSCALER TUNNEL ) Zywall ( ZYWALL ) The following log types were added without a default parser.

### "Configure data RBAC for users \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Create and manage scopes You can create and manage data scopes within the Google SecOps user interface, and then assign those scopes to users or groups through IAM.
- The scope assignment lets you restrict access to these events to specific users or roles within your organization.
- In the UDM Search window, update your query and click Run Search .
- In the UDM Search window, type your query and click Run Search .

