---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:56:14.305Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Outer joins"
feature_slug: "outer-joins"
latest_feature_date: "2026-02-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs"
keywords:
  - "outer"
  - "joins"
  - "left"
  - "and"
  - "right"
  - "return"
  - "unmatched"
  - "records"
---

# Outer joins

Product: Google SecOps SIEM
Coverage: LOW

## Step 02 Summary

Left and right outer joins return unmatched records from the primary source with null values for missing fields.

## Extended Definition

Left and right outer joins return unmatched records from the primary source with null values for missing fields.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs](https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs)

## Supporting Pages

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-api-reference`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- Unlike standard inner joins, these operations let you retrieve all records from a primary data source even if no matching entry exists in the secondary source (unmatched fields are returned as null ).
- Outer joins : Search now supports left and right outer joins.
- The new navigation menu expands from the left side of the screen, replacing the 9-dot icon at the top right.
- These queries require a match clause for these joins and return results as statistics.

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-api-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Unlike standard inner joins, these operations let you retrieve all records from a primary data source even if no matching entry exists in the secondary source (unmatched fields are returned as null ).
- Outer joins : Search now supports left and right outer joins.
- These queries require a match clause for these joins and return results as statistics.
- 1Password ( ONEPASSWORD ) A10 Load Balancer ( A10 LOAD BALANCER ) Abnormal Security ( ABNORMAL SECURITY ) AIX system ( AIX SYSTEM ) Akamai SIEM Connector ( AKAMAI SIEM CONNECTOR ) AlgoSec Security Management ( ALGOSEC ) Amazon API Gateway ( AWS API GATEWAY ) Amazon VPC Transit Gateway Flow Logs ( AWS VPC TRANSIT GATEWAY ) Apache ( APACHE ) Arcsight CEF ( ARCSIGHT CEF ) Arista Switch ( ARISTA SWITCH ) Armis Activities ( ARMIS ACTIVITIES ) Aruba ( ARUBA WIRELESS ) Aruba Switch ( ARUBA SWITCH ) Attivo Networks ( ATTIVO ) Auth0 ( AUTH ZERO ) AWS Aurora ( AWS AURORA ) AWS CloudFront ( AWS CLOUDFRONT ) AWS Cloudtrail ( AWS CLOUDTRAIL ) AWS CloudWatch ( AWS CLOUDWATCH ) AWS Config ( AWS CONFIG ) AWS GuardDuty ( GUARDDUTY ) AWS Security Hub ( AWS SECURITY HUB ) AWS Session Manager ( AWS SESSION MANAGER ) AWS VPC Flow ( AWS VPC FLOW ) Azure AD ( AZURE AD ) Azure AD Directory Audit ( AZURE AD AUDIT ) Azure AD Organizational Context ( AZURE AD CONTEXT ) Azure Firewall ( AZURE FIREWALL ) Azure Storage Audit ( AZURE STORAGE AUDIT ) Barracuda Firewall ( BARRACUDA FIREWALL ) BeyondTrust ( BOMGAR ) BeyondTrust BeyondInsight ( BEYONDTRUST BEYONDINSIGHT ) BeyondTrust Secure Remote Access ( BEYONDTRUST REMOTE ACCESS ) Bindplane Agent ( BINDPLANE AGENT ) Bitdefender ( BITDEFENDER ) Blue Coat Proxy ( BLUECOAT WEBPROXY ) Cambium Networks ( CAMBIUM NETWORKS ) Carbon Black ( CB EDR ) Carbon Black App Control ( CB APP CONTROL ) Cequence Bot Defense ( CEQUENCE BOT DEFENSE ) Check Point ( CHECKPOINT FIREWALL ) Check Point Sandblast ( CHECKPOINT EDR ) Chrome Management ( CHROME MANAGEMENT ) CipherTrust Manager ( CIPHERTRUST MANAGER ) Cisco AMP ( CISCO AMP ) Cisco ASA ( CISCO ASA FIREWALL ) Cisco Email Security ( CISCO EMAIL SECURITY ) Cisco Firepower NGFW ( CISCO FIREPOWER FIREWALL ) Cisco Firewall Services Module ( CISCO FWSM ) Cisco Internetwork Operating System ( CISCO IOS ) Cisco IronPort ( CISCO IRONPORT ) Cisco ISE ( CISCO ISE ) Cisco Meraki ( CISCO MERAKI ) Cisco Router ( CISCO ROUTER ) Cisco Secure Access ( CISCO SECURE ACCESS ) Cisco Stealthwatch ( CISCO STEALTHWATCH ) Cisco Switch ( CISCO SWITCH ) Cisco UCM ( CISCO UCM ) Cisco Umbrella Audit ( CISCO UMBRELLA AUDIT ) Cisco Umbrella Cloud Firewall ( UMBRELLA FIREWALL ) Cisco Umbrella DNS ( UMBRELLA DNS ) Cisco Umbrella IP ( UMBRELLA IP ) Cisco Umbrella SWG DLP ( CISCO UMBRELLA SWG DLP ) Cisco Umbrella Web Proxy ( UMBRELLA WEBPROXY ) Cisco WSA ( CISCO WSA ) Citrix Netscaler ( CITRIX NETSCALER ) Claroty Continuous Threat Detection ( CLAROTY CTD ) Claroty Xdome ( CLAROTY XDOME ) Cloudflare ( CLOUDFLARE ) Cloudflare Network Analytics ( CLOUDFLARE NETWORK ANALYTICS ) Cloudflare WAF ( CLOUDFLARE WAF ) Cloudflare Warp ( CLOUDFLARE WARP ) Code42 Incydr ( CODE42 INCYDR ) Corelight ( CORELIGHT ) CoSoSys Protector ( ENDPOINT PROTECTOR DLP ) CrowdStrike Alerts API ( CS ALERTS ) CrowdStrike Falcon ( CS EDR ) CrowdStrike Falcon Stream ( CS STREAM ) Cyber 2.0 IDS ( CYBER 2 IDS ) CyberArk Endpoint Privilege Manager (EPM) ( CYBERARK EPM ) Cyberark Privilege Cloud ( CYBERARK PRIVILEGE CLOUD ) CyberArk Privileged Access Manager (PAM) ( CYBERARK PAM ) Cybereason EDR ( CYBEREASON EDR ) Cynet 360 AutoXDR ( CYNET 360 AUTOXDR ) Cyolo Secure Remote Access for OT ( CYOLO OT ) Darktrace ( DARKTRACE ) Delinea Secret Server ( DELINEA SECRET SERVER ) Digital Guardian DLP ( DIGITALGUARDIAN DLP ) Digital Guardian EDR ( DIGITALGUARDIAN EDR ) DigitalArts i-Filter ( DIGITALARTS IFILTER ) Dummy LogType ( DUMMY LOGTYPE ) EfficientIP DDI ( EFFICIENTIP DDI ) ESET AV ( ESET AV ) ESET Threat Intelligence ( ESET IOC ) Extreme Networks Switch ( EXTREME SWITCH ) F5 Advanced Firewall Management ( F5 AFM ) F5 ASM ( F5 ASM ) F5 BIGIP Access Policy Manager ( F5 BIGIP APM ) F5 Silverline ( F5 SILVERLINE ) FireEye ETP ( FIREEYE ETP ) Fluentd Logs ( FLUENTD ) Forcepoint NGFW ( FORCEPOINT FIREWALL ) Forcepoint DLP ( FORCEPOINT DLP ) Forcepoint Proxy ( FORCEPOINT WEBPROXY ) Forescout NAC ( FORESCOUT NAC ) FortiGate ( FORTINET FIREWALL ) Fortinet FortiAnalyzer ( FORTINET FORTIANALYZER ) Fortinet FortiEDR ( FORTINET FORTIEDR ) GCP Abuse Events Logs ( GCP ABUSE EVENTS ) GitHub ( GITHUB ) GMV Checker ATM Security ( GMV CHECKER ) Google Cloud Apigee ( GCP APIGEE ) Google Cloud Audit ( GCP CLOUDAUDIT ) Google Cloud Security Center Threat ( GCP SECURITYCENTER THREAT ) Google Threat Intelligence IOC ( GTI IOC ) GTB Technologies DLP ( GTB DLP ) H3C Comware Platform Switch ( H3C SWITCH ) Halcyon Anti Ransomware ( HALCYON ) HP Aruba (ClearPass) ( CLEARPASS ) HP Linux ( HP LINUX ) HP Procurve Switch ( HP PROCURVE ) IBM AS/400 ( IBM AS400 ) IBM Security Verify Access ( IBM SVA ) IBM WebSEAL ( IBM WEBSEAL ) IBM Websphere Application Server ( IBM WEBSPHERE APP SERVER ) IBM z/OS ( IBM ZOS ) Imperva ( IMPERVA WAF ) Imperva DRA ( IMPERVA DRA ) Imperva SecureSphere Management ( IMPERVA SECURESPHERE ) Infoblox ( INFOBLOX ) Infoblox DHCP ( INFOBLOX DHCP ) Infoblox DNS ( INFOBLOX DNS ) ION Spectrum ( ION SPECTRUM ) Ionix ( IONIX ) Ipswitch MOVEit Transfer ( IPSWITCH MOVEIT TRANSFER ) Island Browser logs ( ISLAND BROWSER ) JAMF Pro ( JAMF PRO ) Jamf Protect Telemetry V2 ( JAMF TELEMETRY V2 ) JFrog Artifactory ( JFROG ARTIFACTORY ) Journald ( JOURNALD ) JumpCloud Directory Insights ( JUMPCLOUD DIRECTORY INSIGHTS ) Juniper ( JUNIPER FIREWALL ) Juniper Junos ( JUNIPER JUNOS ) Kaspersky AV ( KASPERSKY AV ) Kaspersky Endpoint ( KASPERSKY ENDPOINT ) Keycloak ( KEYCLOAK ) Kiteworks ( KITEWORKS ) Kubernetes Node ( KUBERNETES NODE ) Linux Auditing System (AuditD) ( AUDITD ) Linux Sysmon ( LINUX SYSMON ) McAfee ePolicy Orchestrator ( MCAFEE EPO ) Microsoft AD FS ( ADFS ) Microsoft Azure NSG Flow ( AZURE NSG FLOW ) Microsoft Defender for Endpoint ( MICROSOFT DEFENDER ENDPOINT ) Microsoft Defender for Office 365 ( MICROSOFT DEFENDER MAIL ) Microsoft Exchange ( EXCHANGE MAIL ) Microsoft Graph API Alerts ( MICROSOFT GRAPH ALERT ) Microsoft IIS ( IIS ) Microsoft Intune ( AZURE MDM INTUNE ) Microsoft PowerShell ( POWERSHELL ) Microsoft Sentinel ( MICROSOFT SENTINEL ) Microsoft SQL Server ( MICROSOFT SQL ) Mikrotik Router ( MIKROTIK ROUTER ) Mimecast Mail V2 ( MIMECAST MAIL V2 ) MISP Threat Intelligence ( MISP IOC ) Mobileiron ( MOBILEIRON ) NetApp ONTAP ( NETAPP ONTAP ) Netscout ( ARBOR EDGE DEFENSE ) Netskope CASB ( NETSKOPE CASB ) Netskope V2 ( NETSKOPE ALERT V2 ) Netskope Web Proxy ( NETSKOPE WEBPROXY ) Nexus Sonatype ( NEXUS SONATYPE ) Nozomi Networks Scada Guardian ( NOZOMI GUARDIAN ) Obsidian ( OBSIDIAN ) Office 365 ( OFFICE 365 ) Okta ( OKTA ) Open Cybersecurity Schema Framework (OCSF) ( OCSF ) Open LDAP ( OPENLDAP ) Opnsense ( OPNSENSE ) Opswat Metadefender ( OPSWAT METADEFENDER ) Oracle ( ORACLE DB ) Oracle Cloud Infrastructure Audit Logs ( OCI AUDIT ) Oracle Cloud Infrastructure VCN Flow Logs ( OCI FLOW ) Orca Cloud Security Platform ( ORCA ) Palo Alto Cortex XDR Alerts ( CORTEX XDR ) Palo Alto Cortex XDR Events ( PAN CORTEX XDR EVENTS ) Palo Alto Networks Firewall ( PAN FIREWALL ) Palo Alto Panorama ( PAN PANORAMA ) Palo Alto Prisma Cloud Alert payload ( PAN PRISMA CA ) Passwordstate ( PASSWORDSTATE ) Ping Federate ( PING FEDERATE ) Ping Identity ( PING ) Ping One ( PING ONE ) PingIdentity Directory Server Logs ( PING DIRECTORY ) PostFix Mail ( POSTFIX MAIL ) PostgreSQL ( POSTGRESQL ) Proofpoint Observeit ( OBSERVEIT ) Proofpoint On Demand ( PROOFPOINT ON DEMAND ) Proofpoint Tap Alerts ( PROOFPOINT MAIL ) Proofpoint Threat Response ( PROOFPOINT TRAP ) Radware Web Application Firewall ( RADWARE FIREWALL ) RSA ( RSA AUTH MANAGER ) Ruckus Networks ( RUCKUS WIRELESS ) SailPoint IAM ( SAILPOINT IAM ) Salesforce ( SALESFORCE ) Sangfor Next Generation Firewall ( SANGFOR NGAF ) Security Command Center Chokepoint ( GCP SECURITYCENTER CHOKEPOINT ) Security Command Center Posture Violation ( GCP SECURITYCENTER POSTURE VIOLATION ) Security Command Center Toxic Combination ( GCP SECURITYCENTER TOXIC COMBINATION ) Semperis DSP ( SEMPERIS DSP ) Sentinelone Activity ( SENTINELONE ACTIVITY ) SentinelOne Deep Visibility ( SENTINEL DV ) ServiceNow Audit ( SERVICENOW AUDIT ) Solaris system ( SOLARIS SYSTEM ) SonicWall ( SONIC FIREWALL ) Squid Web Proxy ( SQUID WEBPROXY ) STIX Threat Intelligence ( STIX ) Swift Alliance Messaging Hub ( SWIFT AMH ) Symantec Endpoint Protection ( SEP ) Tanium Audit ( TANIUM AUDIT ) Tanium Integrity Monitor ( TANIUM INTEGRITY MONITOR ) Tanium Threat Response ( TANIUM THREAT RESPONSE ) Teleport Access Plane ( TELEPORT ACCESS PLANE ) Tenable Active Directory Security ( TENABLE ADS ) Tenable OT ( TENABLE OT ) tenable.io ( TENABLE IO ) Thales Luna Hardware Security Module ( THALES LUNA HSM ) Thales MFA ( THALES MFA ) Trellix HX Event Streamer ( TRELLIX HX ES ) Trend Micro ( TIPPING POINT ) Trend Micro Apex one ( TRENDMICRO APEX ONE ) Trend Micro Vision One ( TRENDMICRO VISION ONE ) Trend Micro Vision One Audit ( TRENDMICRO VISION ONE AUDIT ) Trend Micro Vision One Detections ( TRENDMICRO VISION ONE DETECTIONS ) Trend Micro Vision One Observerd Attack Techniques ( TRENDMICRO VISION ONE OBSERVERD ATTACK TECHNIQUES ) TXOne Stellar ( TRENDMICRO STELLAR ) Ubika Waf ( UBIKA WAF ) Unix system ( NIX SYSTEM ) Upstream Vehicle SOC Alerts ( UPSTREAM VSOC ALERTS ) Varonis ( VARONIS ) Vectra Stream ( VECTRA STREAM ) Venafi ZTPKI ( VENAFI ZTPKI ) Veritas NetBackup ( VERITAS NETBACKUP ) Versa Firewall ( VERSA FIREWALL ) Vmware Avinetworks iWAF ( VMWARE AVINETWORKS IWAF ) VMware ESXi ( VMWARE ESX ) VMware NSX ( VMWARE NSX ) VMware vCenter ( VMWARE VCENTER ) WatchGuard ( WATCHGUARD ) Windows DNS ( WINDOWS DNS ) Windows Event ( WINEVTLOG ) Windows Event (XML) ( WINEVTLOG XML ) Windows Sysmon ( WINDOWS SYSMON ) wiz.io ( WIZ IO ) Workday User Activity ( WORKDAY USER ACTIVITY ) Workspace Activities ( WORKSPACE ACTIVITY ) Workspace Alerts ( WORKSPACE ALERTS ) Workspace Users ( WORKSPACE USERS ) Zendesk CRM ( ZENDESK CRM ) Zoom Operation Logs ( ZOOM OPERATION LOGS ) Zscaler ( ZSCALER WEBPROXY ) ZScaler NGFW ( ZSCALER FIREWALL ) Zscaler Private Access ( ZSCALER ZPA ) Zscaler Secure Private Access Audit Logs ( ZSCALER ZPA AUDIT ) The following log types were added without a default parser.

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Searching for text in Values returns results as follows: If the string is found at the beginning or end of the value, it is highlighted in the result, along with the UDM field name and the log ingestion time.
- You can summarize by the following options: sum count count distinct average stddev min max Specify a value of Event count to return the number of events identified for this particular search and Pivot Table.
- Retrieve a saved search To retrieve and run a saved search, do the following: In the Search manager dialog, select a saved search from the list to the left.
- This download includes an option to bundle the original raw logs, giving you precise correlation between parsed UDM records and their source telemetry.

### "View alerts and IOC matches \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs](https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs)
- Source ID: `site-api-reference`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- Example of filtering for Applied Threat Intelligence IOCs If you want to view only Applied Threat Intelligence IOCs, select Sources in the left column, Show only in the middle column, and Mandiant in the right column.
- Example of filtering for critical IOCs If you're looking for IOCs that have been identified as critically severe, select Severity in the left column, Show only in the middle column, and Critical in the right column.
- Search API : The older Search API can be effective for IOC matching on hashes, IP addresses, and domain names, returning matching assets.
- Example SQL to query for specific IP-address IOC matches: -- Add your IP IOC Matches here DECLARE IP IOCS ARRAY < STRING > ; SET IP IOCS = [ '40.79.150.120' ]; ------ SELECT MIN ( DATE ( TIMESTAMP SECONDS ( CAST ( day bucket seconds AS INT64 )), 'UTC' )) AS first observed , MAX ( DATE ( TIMESTAMP SECONDS ( CAST ( day bucket seconds AS INT64 )), 'UTC' )) AS last observed , COUNT ( 4 ) AS hits , ioc value , feed log type , is global , CONCAT ( COALESCE ( asset . namespace , "untagged" ), ":" , COALESCE ( asset . hostname , asset . asset ip address , asset . mac , "-" )) AS asset FROM datalake . ioc matches WHERE ioc value IN UNNEST ( IP IOCS ) AND ioc type = "IOC TYPE IP" GROUP BY 4 , 5 , 6 , 7 Here are the truncated results: Row first observed last observed hits ioc value feed log type is global asset 1 2025-02-23 2025-03-05 64 40.79.150.120 CATCH ALL false untagged:192.168.12.16 2 2025-02-27 2025-03-05 29 40.79.150.120 CATCH ALL false untagged:192.168.12.129 You can also query the datalake.events table for multi-dimensional IOC matching by constructing a concatenated string, for example: DECLARE IOC MULTIPLE ATTRIBUTES ARRAY < STRING > ; SET IOC MULTIPLE ATTRIBUTES = [ '1.2.3.4,80' , '1.2.3.4,443' ]; SELECT MIN ( TIMESTAMP SECONDS ( metadata . event timestamp . seconds )) AS first seen , MAX ( TIMESTAMP SECONDS ( metadata . event timestamp . seconds )) AS last seen , target ip , target . port FROM datalake . events , UNNEST ( target . ip ) target ip WHERE DATE ( hour time bucket ) BETWEEN DATE SUB ( CURRENT DATE , INTERVAL 60 DAY ) AND DATE SUB ( CURRENT DATE , INTERVAL 1 DAY ) AND target ip != "" AND target . port > 0 AND CONCAT ( target ip , "," , CAST ( target . port AS STRING )) IN UNNEST ( IOC MULTIPLE ATTRIBUTES ) GROUP BY 3 , 4 Note: The Google SecOps Data Lake typically retains data for six months.

