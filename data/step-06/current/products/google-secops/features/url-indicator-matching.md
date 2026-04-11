---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:24:01.959Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "URL indicator matching"
feature_slug: "url-indicator-matching"
latest_feature_date: "2025-03-11"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/ati-fusion-feed"
  - "https://docs.cloud.google.com/chronicle/docs/detection/applied-threat-intel-overview"
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
keywords:
  - "url"
  - "indicator"
  - "matching"
  - "applied"
  - "threat"
  - "intelligence"
  - "can"
  - "match"
---

# URL indicator matching

Product: Google SecOps
Coverage: LOW

## Step 02 Summary

Applied Threat Intelligence can match URL indicators.

## Extended Definition

Applied Threat Intelligence can match URL indicators.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/ati-fusion-feed](https://docs.cloud.google.com/chronicle/docs/detection/ati-fusion-feed)
- [https://docs.cloud.google.com/chronicle/docs/detection/applied-threat-intel-overview](https://docs.cloud.google.com/chronicle/docs/detection/applied-threat-intel-overview)
- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)

## Supporting Pages

### "Applied Threat Intelligence Fusion Feed overview \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/ati-fusion-feed](https://docs.cloud.google.com/chronicle/docs/detection/ati-fusion-feed)
- Source ID: `site-docs-reference`
- Final score: 186
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Condition section The condition section ensures that e1 , context graph , and matched conditions exist and or match the specified condition. condition: // Ensure $e1, $context graph and $matched conditions conditions are met. $e1 AND $context graph AND $matched conditions = 1 Complete YARA-L rule At this point the rule is ready for use and should look like the following: rule fusion feed example principal process file md5 { meta: rule name = "File Hash - Applied Threat Intelligence" description = "Matches file hashes against the Applied Threat Intelligence Fusion Feed." events: // Filter graph $context graph.graph.metadata.product name = "MANDIANT FUSION IOC" $context graph.graph.metadata.vendor name = "MANDIANT FUSION IOC" $context graph.graph.metadata.entity type = "FILE" $context graph.graph.metadata.source type = "GLOBAL CONTEXT" // Do join $ioc = $context graph.graph.entity.file.md5 $ioc = $e1.principal.process.file.md5 match: $ioc over 1h outcome: // Extract the Mandiant Automated Intel confidence score of maliciousness $confidence score = max(if($context graph.graph.metadata.threat.verdict info.source provider = "Mandiant Automated Intel", $context graph.graph.metadata.threat.verdict info.confidence score, 0)) // Extract the status of the indicator as seen in a breached environment $breached = max(if($context graph.graph.metadata.threat.verdict info.pwn = true, 1, 0)) // Intermediary outcome variable to combine conditions of intelligence extracted in the previous outcome variables. // Return 1 if conditions are met, otherwise return 0. $matched conditions = if($confidence score >= 80 AND $breached = 1, 1, 0) condition: // Ensure $e1, $context graph and $matched conditions conditions are met. $e1 AND $context graph AND $matched conditions = 1 } ATI Fusion Feed context entity fields You can use many fields from the ATI Fusion Feed in rules.
- This can all be done in the outcome section of the rule. outcome: // Extract the Mandiant Automated Intel confidence score of maliciousness $confidence score = max(if($context graph.graph.metadata.threat.verdict info.source provider = "Mandiant Automated Intel", $context graph.graph.metadata.threat.verdict info.confidence score, 0)) // Extract the status of the indicator as seen in a breached environment $breached = max(if($context graph.graph.metadata.threat.verdict info.pwn = true, 1, 0)) // Intermediary outcome variable to combine conditions of intelligence extracted in the previous outcome variables. // Return 1 if conditions are met, otherwise return 0. $matched conditions = if($confidence score >= 80 AND $breached = 1, 1, 0) In the outcome section of the YARA-L rule, the confidence score is extracted using an if statement wrapped in a max function.
- Applied Threat Intelligence Fusion Feed overview Supported in: Google secops SIEM The Applied Threat Intelligence (ATI) Fusion Feed is a collection of Indicators of Compromise (IoCs), including hashes, IPs, domains, and URLs, that are associated with known threat actors, malware strains, active campaigns, and finished intelligence reporting.
- To enhance indicator matching, YARA-L rules can use contextual information from the ATI Fusion Feed, such as associated threat groups, an indicator's presence in compromised environments, or Mandiant's automated maliciousness score.

### "Applied Threat Intelligence overview \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/applied-threat-intel-overview](https://docs.cloud.google.com/chronicle/docs/detection/applied-threat-intel-overview)
- Source ID: `site-docs-reference`
- Final score: 174
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Information about the IoC is displayed, including the following: GCTI priority GTI verdict Associations Campaigns You can also view detailed information about the events that triggered the IoC match, information from the threat intelligence source, and the rationale for the GTI score.
- Google SecOps curated detections evaluate your event data against Mandiant threat intelligence data, and generates an alert when one or more rules identify a match to an IoC with an active breach or high priority.
- When ATI is enabled, Google SecOps ingests IoCs curated by Mandiant threat intelligence that are classified as malicious by the Google Threat Indicator (GTI) verdict.
- Applied Threat Intelligence overview Supported in: Google secops SIEM Applied Threat Intelligence (ATI) helps you identify and respond to threats.

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Collection: Set GCP Cloud Storage Bucket to Public Discovery: Cloud Run Enumeration Discovery: CloudFunctions Enumeration of GCP Cloud Functions Discovery: CloudKMS Enumeration of GCP Cloud KMS Discovery: CloudResourceManager Resource Manager Enumeration Discovery: Compute Enumeration Discovery: GCP Cloud IAM Enumeration Discovery: Secret Manager Cloud Secrets Enumeration Discovery: Storage Cloud Storage Enumeration Exfiltration: Download Cloud Function Code Exfiltration: Export a Compute Image Instance Persistence: Generate Signed URL for Modifying Cloud Function Code Privilege Escalation: Compute Set Instance or Project Metadata to Enable OS Login Feature URL indicators are now available for matching as part of Applied Threat Intelligence.
- Windows-specific ) Microsoft SQL Server ( Database ) Microsoft System Center Endpoint Protection ( Malware Detection ) Mikrotik Router ( Router ) Mimecast ( Email Server ) MISP Threat Intelligence ( Cybersecurity ) Mobile Endpoint Security ( Mobile Endpoint Security ) Mobileiron ( ENDPOINT MANAGEMENT ) NetApp BlueXP ( Security ) Nozomi Networks Scada Guardian ( Network Monitoring ) Office 365 ( SaaS Application ) Okta ( Identity and Access Management ) OpenVPN ( Network ) Opnsense ( Firewall and Routing Platform ) Opswat Metadefender ( Threat Protection ) Oracle ( DATABASE ) Oracle Cloud Infrastructure Audit Logs ( Oracle Cloud Infrastructure ) Oracle Fusion ( SaaS Application ) Oracle WebLogic Server ( Web server logs ) Palo Alto Cortex XDR Alerts ( NDR ) Palo Alto Prisma Cloud ( SECURITY PLATFORM ) Palo Alto Prisma Cloud Alert payload ( Cloud Security ) Ping Federate ( Authentication ) Ping Identity ( Authentication ) Ping One ( NA ) PingIdentity Directory Server Logs ( Security ) Precisely Ironstream IBM z/OS ( ZOS ) ProFTPD ( Web Server ) Proofpoint Observeit ( Email Server ) Proofpoint On Demand ( Email Server ) ProofPoint Secure Email Relay ( Email server ) Proofpoint Tap Forensics ( Email Server ) Quest Active Directory ( Authentication log ) Red Hat Directory Server LDAP ( Identity and Access Management ) Remediant SecureONE ( Privileged Account Activity ) Salesforce ( SaaS Application ) SAP Sybase Adaptive Server Enterprise Database ( Database ) Security Command Center Posture Violation ( Google Cloud Specific ) Security Command Center Threat ( Google Cloud Specific ) Security Command Center Toxic Combination ( Google Cloud Specific ) Sentinelone Alerts ( Endpoint Security ) Shibboleth IDP ( Identity and Access Management ) Snare System Diagnostic Logs ( Security ) Snipe-IT ( SaaS Applications ) Snort ( IDS/IPS ) SonicWall ( Firewall ) Squid Web Proxy ( Web Proxy ) STIX Threat Intelligence ( Cybersecurity Threats ) Suricata EVE ( IPS IDS ) Symantec CloudSOC CASB ( CASB ) Symantec DLP ( DLP ) Symantec Endpoint Protection ( AV / Endpoint ) Symantec Event export ( SEP ) Symantec Web Security Service ( Web Proxy ) Sysdig ( Security ) Tailscale ( CASB ) Tanium Threat Response ( Tanium Specific ) TeamViewer ( Remote Support ) Tenable CSPM ( Cloud Security ) Tenable Security Center ( Vulnerability Scanner ) Thales Luna Hardware Security Module ( THALES LUNA HSM specific ) Trellix HX Event Streamer ( Cybersecurity ) Trend Micro Deep Security ( AV / Endpoint ) Trend Micro Vision One ( AV and endpoint logs ) Trend Micro Vision One Workbench ( Schema ) TrendMicro Deep Discovery Inspector ( Physical and virtual network ) Tripwire ( DLP ) TXOne Stellar ( AV and Endpoint logs ) UberAgent ( Security ) Unix system ( OS ) UpGuard ( Vulnerability scanners ) Upstream Vehicle SOC Alerts ( Schema ) URLScan IO ( Vulnerability scanners ) Veeam ( Backup software ) VMware AirWatch ( Wireless ) VMware Horizon ( VDI ) VMware vCenter ( Server ) VMWare VSphere ( virtualization ) VPC Flow Logs ( Google Cloud Specific ) Wallix Bastion ( Privileged Account Activity ) WindChill ( Lifecycle Management Software ) Windows Event ( Endpoint ) Windows Event (XML) ( AV / Endpoint ) Windows Sysmon ( DNS ) Workday Audit Logs ( Audit And Compliance ) Workspace Activities ( Google Cloud Specific ) Workspace ChromeOS Devices ( Google Cloud Specific ) Zimperium ( Mobile Device Management ) Zoom Operation Logs ( Operation-Specific ) Zscaler ( Web Proxy ) Zscaler DLP ( Data Loss Prevention ) ZScaler DNS ( DNS ) ZScaler NGFW ( Firewall ) Zscaler NSS Feeds for Alerts ( Alert log types ) Zscaler Private Access ( Security Service Edge ) The following log types were added without a default parser.
- Active Identity HID ( ACTIVE IDENTITY HID ) Akamai Event Viewer ( AKAMAI EVT VWR ) Autodesk Vault ( AUTODESK VAULT ) Avaza ( AVAZA ) Avigilon Access Logs ( AVIGILON ACCESS LOGS ) Axis Camera ( AXIS CAMERA ) Axis License Plate Reader ( AXIS LPR ) Azure Nix System ( AZURE NIX SYSTEM ) CallTower Audio Conferencing ( CALLTOWER AUDIO ) Canon Printers ( CANON PRINTERS ) Cisco Secure Endpoint ( CISCO SECURE ENDPOINT ) Control UP ( CONTROL UP ) Cradlepoint Router Logs ( CRADLEPOINT ) Crowdstrike Spotlight ( CROWDSTRIKE SPOTLIGHT ) CrushFTP ( CRUSHFTP ) CrowdStrike Filevantage ( CS FILEVANTAGE ) Cybersixgill ( CYBERSIXGILL ) Cyolo Secure Remote Access for OT ( CYOLO OT ) Dell Core Switch ( DELL EMC NETWORKING ) DLink Switch ( DLINK SWITCH ) Elastic Security ( ELASTIC EDR ) Fireblocks ( FIREBLOCKS ) Forescout eyeInspect ( FORESCOUT EYEINSPECT ) Fortinet FortiGate IPS ( FORTINET IPS ) H3C Router ( H3C ROUTER ) Hackerone ( HACKERONE ) Halo Sensor ( HALO SENSOR ) Hashcast ( HASHCAST ) Perforce Helix Core ( HELIX CORE ) Heroku ( HEROKU ) Hillstone NDR ( HILLSTONE NDR ) HL7 ( HL7 ) HoopDev ( HOOPDEV ) Huawei Switches ( HUAWEI SWITCH ) Identity Security Cloud ( IDENTITY SECURITY CLOUD ) Imperva Data Risk Analytics ( IMPERVA DATA ANALYTICS ) Imperva DRA ( IMPERVA DRA ) IM Express ( IM EXPRESS ) Intezer ( INTEZER ) Jumpcloud IAM ( JUMPCLOUD IAM ) Maltiverse IOC ( MALTIVERSE IOC ) ManageEngine Log360 ( MANAGE ENGINE LOG360 ) McAfee Network Security Platform ( MCAFEE NSP ) Miro Cloud ( MIRO CLOUD ) Nokia Home Device Manager ( NOKIA HDM ) Nortel Secure Router ( NORTEL SR ) Notion ( NOTION ) One Identity Identity Manager ( ONE IDENTITY IDENTITY MANAGER ) IDnomic Public Key Infrastructure ( OPENTRUST ) Outline Activity Logs ( OUTLINE ACTIVITY LOGS ) Prismatic IO ( PRISMATIC IO ) ProFTPD ( PROFTPD ) Provision Asset Context ( PROVISION ASSET CONTEXT ) Ransomcare ( RANSOMCARE ) Rapid7 Insights Threat Command ( RAPID7 INSIGHTS THREAT COMMAND ) Saporo ( SAPORO ) SAS Metadata Server log ( SAS METADATA SERVER LOG ) Scylla ( SCYLLA ) Senseon Alerts ( SENSEON ALERTS ) Sonic Switch ( SONIC SWITCH ) Symantec Data Center Security ( SYMANTEC DCS ) Syncplify SFTP 2 Events ( SYNCPLIFY SFTP ) Team Cymru Scout Threat Intelligence ( TEAM CYMRU SCOUT THREATINTEL ) Tenable CSPM ( TENABLE CSPM ) Teqtivity Assets ( TEQTIVITY ASSETS ) Tines ( TINES ) TP Link Network Switches ( TPLINK SWITCH ) TT D365 ( TT D365 ) TT MSAN DSLAM ( TT MSAN DSLAM ) TT Trio Chordiant ( TT TRIO CHORDIANT ) Tufin ( TUFIN ) Tufin Secure Track ( TUFIN SECURE TRACK ) UberAgent ( UBERAGENT ) Upstream Vehicle SOC Alerts ( UPSTREAM VSOC ALERTS ) URLScan IO ( URLSCAN IO ) Vertiv UPS ( VERTIV UPS ) Very Good Security ( VERY GOOD SECURITY ) Virtual Browser ( VIRTUAL BROWSER ) VMWare VSphere ( VMWARE VSPHERE ) Webroot Identity Protection ( WEBROOT IDENTITY PROTECTION ) WideField ( WIDEFIELD SECURITY ) Zscaler Sandbox ( ZSCALER SANDBOX ) Zywall ( ZYWALL ) For a list of supported log types and details about default parser changes, see Supported log types and default parsers .
- Announcement New parser documentation now available New parser documentation is available to help you ingest and normalize logs from the following sources: Collect Absolute Secure Endpoint logs Collect AIDE (Advanced Intrusion Detection Environment) logs Collect Akamai Enterprise Application Access logs Collect Apache Hadoop logs Collect Armis Vulnerabilities logs Collect Array Networks SSL VPN logs Collect Aruba IPS logs Collect Atlassian Confluence logs Collect Cisco AMP for Endpoints logs Collect Cisco APIC logs Collect Cisco Application Centric Infrastructure (ACI) logs Collect Cisco CallManager logs Collect Cisco CloudLock CASB logs Collect Cisco DNA Center Platform logs Collect Cisco eStreamer logs Collect Cribl Stream logs Collect CrowdStrike FileVantage logs Collect CrowdStrike IDP Services logs Collect Cynet 360 AutoXDR logs Collect Digital Shadows SearchLight logs Collect Duo Telephony logs Collect Edgio WAF logs Collect Elastic Auditbeat logs Collect Elastic Packet Beats logs Collect Elasticsearch logs Collect Entrust nShield HSM audit logs Collect Imperva Advanced Bot Protection logs Collect Imperva Attack Analytics logs Collect Imperva Audit Trail logs Collect Imperva CEF logs Collect Imperva Data Risk Analytics (DRA) logs Collect Imperva Database logs Collect Imperva FlexProtect logs Collect Imperva SecureSphere Management logs Collect Kiteworks (formally Accellion) logs Collect Proofpoint Emerging Threats Pro IOC logs Collect ServiceNow audit logs Collect Team Cymru Scout Threat Intelligence data Collect URLScan IO logs Collect Uptycs EDR logs Collect VanDyke VShell SFTP logs Collect Zendesk CRM logs Collect ZeroFox Platform logs November 10, 2025 Feature Nested if You can now use if statements in both the outcome and events sections and also within the then else clauses of another if statement.

