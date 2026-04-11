---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:24:01.992Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Large alert trimming"
feature_slug: "large-alert-trimming"
latest_feature_date: "2024-01-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/soar/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
keywords:
  - "large"
  - "alert"
  - "trimming"
  - "alerts"
  - "with"
  - "more"
  - "than"
  - "500"
---

# Large alert trimming

Product: Google SecOps
Coverage: LOW

## Step 02 Summary

Alerts with more than 500 entities are ingested with key entities retained and the excess entities removed to prevent performance issues.

## Extended Definition

Alerts with more than 500 entities are ingested with key entities retained and the excess entities removed to prevent performance issues.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/soar/release-notes](https://docs.cloud.google.com/chronicle/docs/soar/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Events that are associated with one or more alerts are marked with an Alert chip in the Event Timeline .
- Supported fields You can download the following fields to a CSV file from the platform: user hostname process name event type timestamp raw log (valid only when raw logs are enabled for the customer) All fields starting with udm.additional Valid field types You can download the following field types to a CSV file: double float int32 uint32 int64 uint64 bool string enum bytes google.protobuf.Timestamp google.protobuf.Duration Unsupported fields Fields that start with "udm" (not udm.additional) and meet either of the following conditions cannot be downloaded to CSV: The nesting of the field is more than 10 deep in udm proto.
- Raw Log tab The Raw Log tab displays the original raw sign in any of the following formats: Raw JSON XML CSV Hex/ASCII Alerts tab The Alerts tab displays the alerts associated with the event.
- These alerts don't surface within search unless they are processed by the Google SecOps Detection Engine as a YARA-L rule.

### Google Security Operations SOAR release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/release-notes](https://docs.cloud.google.com/chronicle/docs/soar/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Feature Additional support for trimming large alerts In order to prevent performance issues, when an alert contains over 500 entities, the alert is ingested with the key entities retained and the additional entities are removed.
- This trimming support works in parallel with the current trimming mechanism as defined in Handle large alerts .
- Recommended Actions: Update Log-Based Alerts: Ensure alerts triggered by string matches are compatible with individual log entries rather than bundled blocks.
- August 30, 2023 Fixed Release Notes 6.2.34 Alerts ingested using webhooks are missing details (ID #00249611) Entity Graph widget either not appearing or appearing without information (ID #00246250, #46124390) Entity Graph API call not working August 16, 2023 Feature Release Notes 6.2.33 New Case Mentions in Playbook Actions You can now mention the case assignee directly from a Playbook action To mention the case assignee: Drag the Siemplify Case Comment action into a Playbook step.

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- January 04, 2024 Feature Additional support for trimming large alerts In order to prevent performance issues, when an alert contains over 500 entities, the alert is ingested with the key entities retained and the additional entities are removed.
- This trimming support works in parallel with the current trimming mechanism as defined in Handle large alerts .
- Recommended Actions: Update Log-Based Alerts: Ensure alerts triggered by string matches are compatible with individual log entries rather than bundled blocks.
- 1Password ( ONEPASSWORD ) A10 Load Balancer ( A10 LOAD BALANCER ) Abnormal Security ( ABNORMAL SECURITY ) AIX system ( AIX SYSTEM ) Akamai SIEM Connector ( AKAMAI SIEM CONNECTOR ) AlgoSec Security Management ( ALGOSEC ) Amazon API Gateway ( AWS API GATEWAY ) Amazon VPC Transit Gateway Flow Logs ( AWS VPC TRANSIT GATEWAY ) Apache ( APACHE ) Arcsight CEF ( ARCSIGHT CEF ) Arista Switch ( ARISTA SWITCH ) Armis Activities ( ARMIS ACTIVITIES ) Aruba ( ARUBA WIRELESS ) Aruba Switch ( ARUBA SWITCH ) Attivo Networks ( ATTIVO ) Auth0 ( AUTH ZERO ) AWS Aurora ( AWS AURORA ) AWS CloudFront ( AWS CLOUDFRONT ) AWS Cloudtrail ( AWS CLOUDTRAIL ) AWS CloudWatch ( AWS CLOUDWATCH ) AWS Config ( AWS CONFIG ) AWS GuardDuty ( GUARDDUTY ) AWS Security Hub ( AWS SECURITY HUB ) AWS Session Manager ( AWS SESSION MANAGER ) AWS VPC Flow ( AWS VPC FLOW ) Azure AD ( AZURE AD ) Azure AD Directory Audit ( AZURE AD AUDIT ) Azure AD Organizational Context ( AZURE AD CONTEXT ) Azure Firewall ( AZURE FIREWALL ) Azure Storage Audit ( AZURE STORAGE AUDIT ) Barracuda Firewall ( BARRACUDA FIREWALL ) BeyondTrust ( BOMGAR ) BeyondTrust BeyondInsight ( BEYONDTRUST BEYONDINSIGHT ) BeyondTrust Secure Remote Access ( BEYONDTRUST REMOTE ACCESS ) Bindplane Agent ( BINDPLANE AGENT ) Bitdefender ( BITDEFENDER ) Blue Coat Proxy ( BLUECOAT WEBPROXY ) Cambium Networks ( CAMBIUM NETWORKS ) Carbon Black ( CB EDR ) Carbon Black App Control ( CB APP CONTROL ) Cequence Bot Defense ( CEQUENCE BOT DEFENSE ) Check Point ( CHECKPOINT FIREWALL ) Check Point Sandblast ( CHECKPOINT EDR ) Chrome Management ( CHROME MANAGEMENT ) CipherTrust Manager ( CIPHERTRUST MANAGER ) Cisco AMP ( CISCO AMP ) Cisco ASA ( CISCO ASA FIREWALL ) Cisco Email Security ( CISCO EMAIL SECURITY ) Cisco Firepower NGFW ( CISCO FIREPOWER FIREWALL ) Cisco Firewall Services Module ( CISCO FWSM ) Cisco Internetwork Operating System ( CISCO IOS ) Cisco IronPort ( CISCO IRONPORT ) Cisco ISE ( CISCO ISE ) Cisco Meraki ( CISCO MERAKI ) Cisco Router ( CISCO ROUTER ) Cisco Secure Access ( CISCO SECURE ACCESS ) Cisco Stealthwatch ( CISCO STEALTHWATCH ) Cisco Switch ( CISCO SWITCH ) Cisco UCM ( CISCO UCM ) Cisco Umbrella Audit ( CISCO UMBRELLA AUDIT ) Cisco Umbrella Cloud Firewall ( UMBRELLA FIREWALL ) Cisco Umbrella DNS ( UMBRELLA DNS ) Cisco Umbrella IP ( UMBRELLA IP ) Cisco Umbrella SWG DLP ( CISCO UMBRELLA SWG DLP ) Cisco Umbrella Web Proxy ( UMBRELLA WEBPROXY ) Cisco WSA ( CISCO WSA ) Citrix Netscaler ( CITRIX NETSCALER ) Claroty Continuous Threat Detection ( CLAROTY CTD ) Claroty Xdome ( CLAROTY XDOME ) Cloudflare ( CLOUDFLARE ) Cloudflare Network Analytics ( CLOUDFLARE NETWORK ANALYTICS ) Cloudflare WAF ( CLOUDFLARE WAF ) Cloudflare Warp ( CLOUDFLARE WARP ) Code42 Incydr ( CODE42 INCYDR ) Corelight ( CORELIGHT ) CoSoSys Protector ( ENDPOINT PROTECTOR DLP ) CrowdStrike Alerts API ( CS ALERTS ) CrowdStrike Falcon ( CS EDR ) CrowdStrike Falcon Stream ( CS STREAM ) Cyber 2.0 IDS ( CYBER 2 IDS ) CyberArk Endpoint Privilege Manager (EPM) ( CYBERARK EPM ) Cyberark Privilege Cloud ( CYBERARK PRIVILEGE CLOUD ) CyberArk Privileged Access Manager (PAM) ( CYBERARK PAM ) Cybereason EDR ( CYBEREASON EDR ) Cynet 360 AutoXDR ( CYNET 360 AUTOXDR ) Cyolo Secure Remote Access for OT ( CYOLO OT ) Darktrace ( DARKTRACE ) Delinea Secret Server ( DELINEA SECRET SERVER ) Digital Guardian DLP ( DIGITALGUARDIAN DLP ) Digital Guardian EDR ( DIGITALGUARDIAN EDR ) DigitalArts i-Filter ( DIGITALARTS IFILTER ) Dummy LogType ( DUMMY LOGTYPE ) EfficientIP DDI ( EFFICIENTIP DDI ) ESET AV ( ESET AV ) ESET Threat Intelligence ( ESET IOC ) Extreme Networks Switch ( EXTREME SWITCH ) F5 Advanced Firewall Management ( F5 AFM ) F5 ASM ( F5 ASM ) F5 BIGIP Access Policy Manager ( F5 BIGIP APM ) F5 Silverline ( F5 SILVERLINE ) FireEye ETP ( FIREEYE ETP ) Fluentd Logs ( FLUENTD ) Forcepoint NGFW ( FORCEPOINT FIREWALL ) Forcepoint DLP ( FORCEPOINT DLP ) Forcepoint Proxy ( FORCEPOINT WEBPROXY ) Forescout NAC ( FORESCOUT NAC ) FortiGate ( FORTINET FIREWALL ) Fortinet FortiAnalyzer ( FORTINET FORTIANALYZER ) Fortinet FortiEDR ( FORTINET FORTIEDR ) GCP Abuse Events Logs ( GCP ABUSE EVENTS ) GitHub ( GITHUB ) GMV Checker ATM Security ( GMV CHECKER ) Google Cloud Apigee ( GCP APIGEE ) Google Cloud Audit ( GCP CLOUDAUDIT ) Google Cloud Security Center Threat ( GCP SECURITYCENTER THREAT ) Google Threat Intelligence IOC ( GTI IOC ) GTB Technologies DLP ( GTB DLP ) H3C Comware Platform Switch ( H3C SWITCH ) Halcyon Anti Ransomware ( HALCYON ) HP Aruba (ClearPass) ( CLEARPASS ) HP Linux ( HP LINUX ) HP Procurve Switch ( HP PROCURVE ) IBM AS/400 ( IBM AS400 ) IBM Security Verify Access ( IBM SVA ) IBM WebSEAL ( IBM WEBSEAL ) IBM Websphere Application Server ( IBM WEBSPHERE APP SERVER ) IBM z/OS ( IBM ZOS ) Imperva ( IMPERVA WAF ) Imperva DRA ( IMPERVA DRA ) Imperva SecureSphere Management ( IMPERVA SECURESPHERE ) Infoblox ( INFOBLOX ) Infoblox DHCP ( INFOBLOX DHCP ) Infoblox DNS ( INFOBLOX DNS ) ION Spectrum ( ION SPECTRUM ) Ionix ( IONIX ) Ipswitch MOVEit Transfer ( IPSWITCH MOVEIT TRANSFER ) Island Browser logs ( ISLAND BROWSER ) JAMF Pro ( JAMF PRO ) Jamf Protect Telemetry V2 ( JAMF TELEMETRY V2 ) JFrog Artifactory ( JFROG ARTIFACTORY ) Journald ( JOURNALD ) JumpCloud Directory Insights ( JUMPCLOUD DIRECTORY INSIGHTS ) Juniper ( JUNIPER FIREWALL ) Juniper Junos ( JUNIPER JUNOS ) Kaspersky AV ( KASPERSKY AV ) Kaspersky Endpoint ( KASPERSKY ENDPOINT ) Keycloak ( KEYCLOAK ) Kiteworks ( KITEWORKS ) Kubernetes Node ( KUBERNETES NODE ) Linux Auditing System (AuditD) ( AUDITD ) Linux Sysmon ( LINUX SYSMON ) McAfee ePolicy Orchestrator ( MCAFEE EPO ) Microsoft AD FS ( ADFS ) Microsoft Azure NSG Flow ( AZURE NSG FLOW ) Microsoft Defender for Endpoint ( MICROSOFT DEFENDER ENDPOINT ) Microsoft Defender for Office 365 ( MICROSOFT DEFENDER MAIL ) Microsoft Exchange ( EXCHANGE MAIL ) Microsoft Graph API Alerts ( MICROSOFT GRAPH ALERT ) Microsoft IIS ( IIS ) Microsoft Intune ( AZURE MDM INTUNE ) Microsoft PowerShell ( POWERSHELL ) Microsoft Sentinel ( MICROSOFT SENTINEL ) Microsoft SQL Server ( MICROSOFT SQL ) Mikrotik Router ( MIKROTIK ROUTER ) Mimecast Mail V2 ( MIMECAST MAIL V2 ) MISP Threat Intelligence ( MISP IOC ) Mobileiron ( MOBILEIRON ) NetApp ONTAP ( NETAPP ONTAP ) Netscout ( ARBOR EDGE DEFENSE ) Netskope CASB ( NETSKOPE CASB ) Netskope V2 ( NETSKOPE ALERT V2 ) Netskope Web Proxy ( NETSKOPE WEBPROXY ) Nexus Sonatype ( NEXUS SONATYPE ) Nozomi Networks Scada Guardian ( NOZOMI GUARDIAN ) Obsidian ( OBSIDIAN ) Office 365 ( OFFICE 365 ) Okta ( OKTA ) Open Cybersecurity Schema Framework (OCSF) ( OCSF ) Open LDAP ( OPENLDAP ) Opnsense ( OPNSENSE ) Opswat Metadefender ( OPSWAT METADEFENDER ) Oracle ( ORACLE DB ) Oracle Cloud Infrastructure Audit Logs ( OCI AUDIT ) Oracle Cloud Infrastructure VCN Flow Logs ( OCI FLOW ) Orca Cloud Security Platform ( ORCA ) Palo Alto Cortex XDR Alerts ( CORTEX XDR ) Palo Alto Cortex XDR Events ( PAN CORTEX XDR EVENTS ) Palo Alto Networks Firewall ( PAN FIREWALL ) Palo Alto Panorama ( PAN PANORAMA ) Palo Alto Prisma Cloud Alert payload ( PAN PRISMA CA ) Passwordstate ( PASSWORDSTATE ) Ping Federate ( PING FEDERATE ) Ping Identity ( PING ) Ping One ( PING ONE ) PingIdentity Directory Server Logs ( PING DIRECTORY ) PostFix Mail ( POSTFIX MAIL ) PostgreSQL ( POSTGRESQL ) Proofpoint Observeit ( OBSERVEIT ) Proofpoint On Demand ( PROOFPOINT ON DEMAND ) Proofpoint Tap Alerts ( PROOFPOINT MAIL ) Proofpoint Threat Response ( PROOFPOINT TRAP ) Radware Web Application Firewall ( RADWARE FIREWALL ) RSA ( RSA AUTH MANAGER ) Ruckus Networks ( RUCKUS WIRELESS ) SailPoint IAM ( SAILPOINT IAM ) Salesforce ( SALESFORCE ) Sangfor Next Generation Firewall ( SANGFOR NGAF ) Security Command Center Chokepoint ( GCP SECURITYCENTER CHOKEPOINT ) Security Command Center Posture Violation ( GCP SECURITYCENTER POSTURE VIOLATION ) Security Command Center Toxic Combination ( GCP SECURITYCENTER TOXIC COMBINATION ) Semperis DSP ( SEMPERIS DSP ) Sentinelone Activity ( SENTINELONE ACTIVITY ) SentinelOne Deep Visibility ( SENTINEL DV ) ServiceNow Audit ( SERVICENOW AUDIT ) Solaris system ( SOLARIS SYSTEM ) SonicWall ( SONIC FIREWALL ) Squid Web Proxy ( SQUID WEBPROXY ) STIX Threat Intelligence ( STIX ) Swift Alliance Messaging Hub ( SWIFT AMH ) Symantec Endpoint Protection ( SEP ) Tanium Audit ( TANIUM AUDIT ) Tanium Integrity Monitor ( TANIUM INTEGRITY MONITOR ) Tanium Threat Response ( TANIUM THREAT RESPONSE ) Teleport Access Plane ( TELEPORT ACCESS PLANE ) Tenable Active Directory Security ( TENABLE ADS ) Tenable OT ( TENABLE OT ) tenable.io ( TENABLE IO ) Thales Luna Hardware Security Module ( THALES LUNA HSM ) Thales MFA ( THALES MFA ) Trellix HX Event Streamer ( TRELLIX HX ES ) Trend Micro ( TIPPING POINT ) Trend Micro Apex one ( TRENDMICRO APEX ONE ) Trend Micro Vision One ( TRENDMICRO VISION ONE ) Trend Micro Vision One Audit ( TRENDMICRO VISION ONE AUDIT ) Trend Micro Vision One Detections ( TRENDMICRO VISION ONE DETECTIONS ) Trend Micro Vision One Observerd Attack Techniques ( TRENDMICRO VISION ONE OBSERVERD ATTACK TECHNIQUES ) TXOne Stellar ( TRENDMICRO STELLAR ) Ubika Waf ( UBIKA WAF ) Unix system ( NIX SYSTEM ) Upstream Vehicle SOC Alerts ( UPSTREAM VSOC ALERTS ) Varonis ( VARONIS ) Vectra Stream ( VECTRA STREAM ) Venafi ZTPKI ( VENAFI ZTPKI ) Veritas NetBackup ( VERITAS NETBACKUP ) Versa Firewall ( VERSA FIREWALL ) Vmware Avinetworks iWAF ( VMWARE AVINETWORKS IWAF ) VMware ESXi ( VMWARE ESX ) VMware NSX ( VMWARE NSX ) VMware vCenter ( VMWARE VCENTER ) WatchGuard ( WATCHGUARD ) Windows DNS ( WINDOWS DNS ) Windows Event ( WINEVTLOG ) Windows Event (XML) ( WINEVTLOG XML ) Windows Sysmon ( WINDOWS SYSMON ) wiz.io ( WIZ IO ) Workday User Activity ( WORKDAY USER ACTIVITY ) Workspace Activities ( WORKSPACE ACTIVITY ) Workspace Alerts ( WORKSPACE ALERTS ) Workspace Users ( WORKSPACE USERS ) Zendesk CRM ( ZENDESK CRM ) Zoom Operation Logs ( ZOOM OPERATION LOGS ) Zscaler ( ZSCALER WEBPROXY ) ZScaler NGFW ( ZSCALER FIREWALL ) Zscaler Private Access ( ZSCALER ZPA ) Zscaler Secure Private Access Audit Logs ( ZSCALER ZPA AUDIT ) The following log types were added without a default parser.

