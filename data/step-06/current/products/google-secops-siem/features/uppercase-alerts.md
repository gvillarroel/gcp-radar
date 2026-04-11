---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:56:14.568Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Uppercase alerts"
feature_slug: "uppercase-alerts"
latest_feature_date: "2021-06-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs"
  - "https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines"
keywords:
  - "uppercase"
  - "alerts"
  - "displays"
  - "customer"
  - "in"
  - "chronicle"
  - "and"
  - "exposes"
---

# Uppercase alerts

Product: Google SecOps SIEM
Coverage: LOW

## Step 02 Summary

Displays Uppercase customer alerts in Chronicle and exposes them through the Uppercase API.

## Extended Definition

Displays Uppercase customer alerts in Chronicle and exposes them through the Uppercase API.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs](https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs)
- [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- For Google SecOps customers, alerts can also be ingested from connectors and webhooks .
- Supported fields You can download the following fields to a CSV file from the platform: user hostname process name event type timestamp raw log (valid only when raw logs are enabled for the customer) All fields starting with udm.additional Valid field types You can download the following field types to a CSV file: double float int32 uint32 int64 uint64 bool string enum bytes google.protobuf.Timestamp google.protobuf.Duration Unsupported fields Fields that start with "udm" (not udm.additional) and meet either of the following conditions cannot be downloaded to CSV: The nesting of the field is more than 10 deep in udm proto.
- When searching Values , UDM Lookup displays Possible value match when a match is found in the following cases: Matches in the following UDM fields: metadata.description security result.description security result.detection fields.value security result.summary network.http.user agent Matches in fields with a full path that ends in one of the following values: .command line For example principal.process.command line . .file.full path For example principal.process.file.full path . .labels.value For example src.labels.value . .registry.registry key For example principal.registry.registry key . .url For example principal.url .
- Click an entity to display the Entity context dialog, which can include the following items: Asset name First time seen Last time seen IP addresses MAC addresses Number of alerts Highest alert count by rule Alerts-over-time bar graph Open Alerts & IOCs link View in Alerts Tab link Use the Pivot Table to analyze events The Pivot Table lets you analyze events using expressions and functions against the results from the search.

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-api-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- April 23, 2021 Change Supported Data Sets Chronicle can now ingest and parse data from the following additional systems and services: Aruba Airwave Blue Coat Proxy Brocade ServerIron ADX CIS Albert Alerts Cisco Application Control Engine Cisco Email Security Cisco NX-OS Citrix StoreFront Cofense Triage Comodo Fidelis Network FireEye NX Honeyd Kemp Load Balancer Kyriba Treasury Management Microsoft Intune MySQL Palo Alto Networks Cortex XDR Red Canary EDR ServiceNow CMDB Symantec VIP Enterprise Gateway Tanium Discover Tripwire File Integrity Monitoring January 25, 2021 Feature Chronicle Detection Engine Enables customers to automate the process of searching across their data for security issues.
- June 21, 2021 Feature Uppercase Alerts For Chronicle customers who are also Uppercase customers, Uppercase alerts are now displayed on the Enterprise Insights page.
- Abnormal Security ( ABNORMAL SECURITY ) Active Countermeasures ( AI HUNTER ) AIX system ( AIX SYSTEM ) Apache ( APACHE ) Apache Cassandra ( CASSANDRA ) Aruba ( ARUBA WIRELESS ) Aruba EdgeConnect SD-WAN ( ARUBA EDGECONNECT SDWAN ) Auth0 ( AUTH ZERO ) AWS Aurora ( AWS AURORA ) AWS CloudFront ( AWS CLOUDFRONT ) AWS Cloudtrail ( AWS CLOUDTRAIL ) AWS CloudWatch ( AWS CLOUDWATCH ) AWS VPC Flow ( AWS VPC FLOW ) AWS WAF ( AWS WAF ) Azure AD ( AZURE AD ) Azure AD Directory Audit ( AZURE AD AUDIT ) Azure Front Door ( AZURE FRONT DOOR ) Azure SQL ( AZURE SQL ) BeyondTrust ( BOMGAR ) BeyondTrust BeyondInsight ( BEYONDTRUST BEYONDINSIGHT ) Blue Coat Proxy ( BLUECOAT WEBPROXY ) Broadcom Support Portal Audit Logs ( BROADCOM SUPPORT PORTAL ) Check Point Harmony ( CHECKPOINT HARMONY ) Chronicle SOAR Audit ( CHRONICLE SOAR AUDIT ) Cisco ASA ( CISCO ASA FIREWALL ) Cisco Email Security ( CISCO EMAIL SECURITY ) Cisco ISE ( CISCO ISE ) Cisco Meraki ( CISCO MERAKI ) Cisco Secure Access ( CISCO SECURE ACCESS ) Cisco Switch ( CISCO SWITCH ) Cisco Umbrella Audit ( CISCO UMBRELLA AUDIT ) Cisco Umbrella DNS ( UMBRELLA DNS ) Cisco WSA ( CISCO WSA ) Cloud DNS ( GCP DNS ) Cloud SQL ( GCP CLOUDSQL ) Cloudflare ( CLOUDFLARE ) Cloudflare Warp ( CLOUDFLARE WARP ) Code42 Incydr ( CODE42 INCYDR ) CrowdStrike Alerts API ( CS ALERTS ) CrowdStrike Falcon ( CS EDR ) CrowdStrike Falcon Stream ( CS STREAM ) CyberArk Privileged Access Manager (PAM) ( CYBERARK PAM ) Cybereason EDR ( CYBEREASON EDR ) CYJAX Threat Intelligence ( CYJAX THREAT INTELLIGENCE ) Cyware Threat Intelligence Exchange ( CTIX ) Databricks ( DATABRICKS ) Duo Auth ( DUO AUTH ) Elastic Defend ( ELASTIC DEFEND ) ESET AV ( ESET AV ) F5 ASM ( F5 ASM ) F5 BIGIP Access Policy Manager ( F5 BIGIP APM ) FireEye eMPS ( FIREEYE EMPS ) FireEye ETP ( FIREEYE ETP ) FireEye NX ( FIREEYE NX ) Forescout NAC ( FORESCOUT NAC ) ForgeRock Identity Cloud ( FORGEROCK IDENTITY CLOUD ) Fortinet FortiAnalyzer ( FORTINET FORTIANALYZER ) GitHub ( GITHUB ) Google Threat Intelligence IOC ( GTI IOC ) HP Aruba (ClearPass) ( CLEARPASS ) Huawei Switches ( HUAWEI SWITCH ) IBM DataPower Gateway ( IBM DATAPOWER ) IBM Safenet ( IBM SAFENET ) IBM Websphere Application Server ( IBM WEBSPHERE APP SERVER ) Imperva Advanced Bot Protection ( IMPERVA ABP ) Imperva SecureSphere Management ( IMPERVA SECURESPHERE ) Juniper ( JUNIPER FIREWALL ) Kolide Endpoint Security ( KOLIDE ) Kubernetes Audit ( KUBERNETES AUDIT ) Kubernetes Node ( KUBERNETES NODE ) Linux Auditing System (AuditD) ( AUDITD ) Maria Database ( MARIA DB ) McAfee ePolicy Orchestrator ( MCAFEE EPO ) McAfee Skyhigh CASB ( MCAFEE SKYHIGH CASB ) McAfee Web Gateway ( MCAFEE WEBPROXY ) Microsoft Azure Activity ( AZURE ACTIVITY ) Microsoft Defender For Cloud ( MICROSOFT DEFENDER CLOUD ALERTS ) Microsoft Graph API Alerts ( MICROSOFT GRAPH ALERT ) Microsoft IIS ( IIS ) Microsoft SQL Server ( MICROSOFT SQL ) Mimecast Mail V2 ( MIMECAST MAIL V2 ) Mobile Endpoint Security ( LOOKOUT MOBILE ENDPOINT SECURITY ) Mobileiron ( MOBILEIRON ) NetApp ONTAP ( NETAPP ONTAP ) Netskope V2 ( NETSKOPE ALERT V2 ) Netskope Web Proxy ( NETSKOPE WEBPROXY ) Obsidian ( OBSIDIAN ) Office 365 ( OFFICE 365 ) Oort Security Tool ( OORT ) Oracle ( ORACLE DB ) Orca Cloud Security Platform ( ORCA ) Palo Alto Cortex XDR Events ( PAN CORTEX XDR EVENTS ) Palo Alto Networks Firewall ( PAN FIREWALL ) Palo Alto Prisma Cloud Alert payload ( PAN PRISMA CA ) PostFix Mail ( POSTFIX MAIL ) Proofpoint On Demand ( PROOFPOINT ON DEMAND ) Proofpoint Tap Alerts ( PROOFPOINT MAIL ) Proofpoint Threat Response ( PROOFPOINT TRAP ) Radware Web Application Firewall ( RADWARE FIREWALL ) Red Hat OpenShift ( REDHAT OPENSHIFT ) Salesforce ( SALESFORCE ) SAP Change Document ( SAP CHANGE DOCUMENT ) SAP Gateway ( SAP GATEWAY ) SAP Hana Audit ( SAP HANA AUDIT ) SAP Security Audit ( SAP SECURITY AUDIT ) Security Command Center Posture Violation ( GCP SECURITYCENTER POSTURE VIOLATION ) Security Command Center Sensitive Data Risk ( GCP SECURITYCENTER SENSITIVE DATA RISK ) Security Command Center Threat ( GCP SECURITYCENTER THREAT ) Security Command Center Toxic Combination ( GCP SECURITYCENTER TOXIC COMBINATION ) Snyk Group level audit Logs ( SNYK SDLC ) Suricata EVE ( SURICATA EVE ) Symantec EDR ( SYMANTEC EDR ) Sysdig ( SYSDIG ) Tenable Active Directory Security ( TENABLE ADS ) ThreatConnect IOC V3 ( THREATCONNECT IOC V3 ) Trellix HX Alerts ( TRELLIX HX ALERTS ) Trellix HX Audit Events ( TRELLIX HX AUDIT ) Trellix HX Event Streamer ( TRELLIX HX ES ) Trellix HX Hosts ( TRELLIX HX HOSTS ) Trend Micro Vision One Endpoint Vulnerabilities ( TRENDMICRO VISION ONE ENDPOINT VULNERABILITIES ) Trend Micro Vision One Observerd Attack Techniques ( TRENDMICRO VISION ONE OBSERVERD ATTACK TECHNIQUES ) Trend Micro Vision One Workbench ( TRENDMICRO VISION ONE WORKBENCH ) TrendMicro Apex Central ( TRENDMICRO APEX CENTRAL ) TXOne Stellar ( TRENDMICRO STELLAR ) Ubika Waf ( UBIKA WAF ) Unix system ( NIX SYSTEM ) Varonis ( VARONIS ) Vmware Avinetworks iWAF ( VMWARE AVINETWORKS IWAF ) VMware ESXi ( VMWARE ESX ) VMware Horizon ( VMWARE HORIZON ) Wallix Bastion ( WALLIX BASTION ) Windows DNS ( WINDOWS DNS ) Windows Event ( WINEVTLOG ) Windows Event (XML) ( WINEVTLOG XML ) wiz.io ( WIZ IO ) Zeek JSON ( BRO JSON ) Zscaler ( ZSCALER WEBPROXY ) The following log types were added without a default parser.
- 1Password ( ONEPASSWORD ) Apache ( APACHE ) Arcsight CEF ( ARCSIGHT CEF ) Aruba Switch ( ARUBA SWITCH ) AWS Cloudtrail ( AWS CLOUDTRAIL ) AWS CloudWatch ( AWS CLOUDWATCH ) AWS GuardDuty ( GUARDDUTY ) AWS Lambda Function ( AWS LAMBDA FUNCTION ) AWS S3 Server Access ( AWS S3 SERVER ACCESS ) AWS VPC Flow ( AWS VPC FLOW ) AWS VPC Flow (CSV) ( AWS VPC FLOW CSV ) Azure AD ( AZURE AD ) Azure Application Gateway ( AZURE GATEWAY ) Azure Firewall ( AZURE FIREWALL ) Azure Storage Audit ( AZURE STORAGE AUDIT ) Azure VNET Flow ( AZURE VNET FLOW ) BIND ( BIND DNS ) Blue Coat Proxy ( BLUECOAT WEBPROXY ) Brocade Switch ( BROCADE SWITCH ) Carbon Black ( CB EDR ) Carbon Black App Control ( CB APP CONTROL ) Check Point ( CHECKPOINT FIREWALL ) Chronicle SOAR Audit ( CHRONICLE SOAR AUDIT ) Cisco Application Centric Infrastructure ( CISCO ACI ) Cisco ASA ( CISCO ASA FIREWALL ) Cisco Email Security ( CISCO EMAIL SECURITY ) Cisco Firepower NGFW ( CISCO FIREPOWER FIREWALL ) Cisco Internetwork Operating System ( CISCO IOS ) Cisco IronPort ( CISCO IRONPORT ) Cisco ISE ( CISCO ISE ) Cisco NX-OS ( CISCO NX OS ) Cisco Router ( CISCO ROUTER ) Cisco Umbrella Web Proxy ( UMBRELLA WEBPROXY ) Cisco vManage SD-WAN ( CISCO SDWAN ) Citrix Netscaler ( CITRIX NETSCALER ) Claroty Continuous Threat Detection ( CLAROTY CTD ) Cloudflare ( CLOUDFLARE ) CrowdStrike Detection Monitoring ( CS DETECTS ) CrowdStrike Falcon ( CS EDR ) Crowdstrike IOC ( CROWDSTRIKE IOC ) Custom Security Data Analytics ( CUSTOM SECURITY DATA ANALYTICS ) CyberArk Endpoint Privilege Manager (EPM) ( CYBERARK EPM ) Cyberark Privilege Cloud ( CYBERARK PRIVILEGE CLOUD ) Darktrace ( DARKTRACE ) Datadog ( DATADOG ) Dell Switch ( DELL SWITCH ) Elastic Defend ( ELASTIC DEFEND ) ESET AV ( ESET AV ) ExtraHop RevealX ( EXTRAHOP ) F5 Advanced Firewall Management ( F5 AFM ) F5 ASM ( F5 ASM ) FireEye ETP ( FIREEYE ETP ) FireEye NX ( FIREEYE NX ) FortiGate ( FORTINET FIREWALL ) Fortinet FortiAnalyzer ( FORTINET FORTIANALYZER ) Fortinet Web Application Firewall ( FORTINET FORTIWEB ) GitHub ( GITHUB ) Guardicore Centra ( GUARDICORE CENTRA ) H3C Comware Platform Switch ( H3C SWITCH ) IBM Cloud Activity Tracker ( IBM CLOUD ACTIVITY TRACKER ) IBM Security Verify Access ( IBM SVA ) IBM zSecure Alert ( IBM ZSECURE ALERT ) Imperva ( IMPERVA WAF ) Infoblox ( INFOBLOX ) Infoblox DHCP ( INFOBLOX DHCP ) KnowBe4 PhishER ( KNOWBE4 PHISHER ) LastPass Password Management ( LASTPASS ) Linux Auditing System (AuditD) ( AUDITD ) Microsoft AD ( WINDOWS AD ) Microsoft AD FS ( ADFS ) Microsoft Azure Activity ( AZURE ACTIVITY ) Microsoft Defender for Endpoint ( MICROSOFT DEFENDER ENDPOINT ) Microsoft Graph API Alerts ( MICROSOFT GRAPH ALERT ) Microsoft IIS ( IIS ) Netskope V2 ( NETSKOPE ALERT V2 ) NGINX ( NGINX ) Nozomi Networks Scada Guardian ( NOZOMI GUARDIAN ) Office 365 ( OFFICE 365 ) Okta ( OKTA ) Openpath ( OPENPATH ) Opnsense ( OPNSENSE ) Palo Alto Cortex XDR Alerts ( CORTEX XDR ) Palo Alto Cortex XDR Events ( PAN CORTEX XDR EVENTS ) Palo Alto Networks Firewall ( PAN FIREWALL ) Palo Alto Panorama ( PAN PANORAMA ) Palo Alto Prisma Access ( PAN CASB ) Ping Federate ( PING FEDERATE ) Ping Identity ( PING ) PostgreSQL ( POSTGRESQL ) Proofpoint Tap Alerts ( PROOFPOINT MAIL ) Proofpoint Threat Response ( PROOFPOINT TRAP ) Radware Web Application Firewall ( RADWARE FIREWALL ) Red Hat OpenShift ( REDHAT OPENSHIFT ) Remediant SecureONE ( REMEDIANT SECUREONE ) Riverbed Steelhead ( STEELHEAD ) SailPoint IAM ( SAILPOINT IAM ) Security Command Center Posture Violation ( GCP SECURITYCENTER POSTURE VIOLATION ) Security Command Center Threat ( N/A ) Security Command Center Toxic Combination ( GCP SECURITYCENTER TOXIC COMBINATION ) Symantec DLP ( SYMANTEC DLP ) Sysdig ( SYSDIG ) Teradata DB ( TERADATA DB ) Terraform Enterprise Audit ( TERRAFORM ENTERPRISE ) Trend Micro Vision One ( TRENDMICRO VISION ONE ) Tripwire ( TRIPWIRE FIM ) Vectra Detect ( VECTRA DETECT ) Vectra Stream ( VECTRA STREAM ) Versa Firewall ( VERSA FIREWALL ) VMware AirWatch ( AIRWATCH ) VMware ESXi ( VMWARE ESX ) Voltage ( VOLTAGE ) WatchGuard ( WATCHGUARD ) Windows DHCP ( WINDOWS DHCP ) Windows Event ( WINEVTLOG ) Windows Event (XML) ( WINEVTLOG XML ) Windows Hyper-V ( WINDOWS HYPERV ) wiz.io ( WIZ IO ) Workday ( WORKDAY ) Workspace Activities ( WORKSPACE ACTIVITY ) Zscaler ( ZSCALER WEBPROXY ) Zscaler CASB ( ZSCALER CASB ) ZScaler Deception ( ZSCALER DECEPTION ) Zscaler DLP ( ZSCALER DLP ) Zscaler Tunnel ( ZSCALER TUNNEL ) The following log types were added without a default parser.

### "View alerts and IOC matches \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs](https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs)
- Source ID: `site-api-reference`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- View alerts and IOC matches Supported in: Google secops SIEM The Alerts & IOCs page displays all the alerts and Indicators of Compromise (IOCs) that are impacting your enterprise.
- View alerts The Alerts tab displays a list of the alerts that have been detected in your enterprise within the specified date and time range.
- SOAR alerts For Google SecOps unified customers, SOAR alerts are shown on this page, and include a case ID.
- To specify the date and time range based on events, click the Event Time tab, select the date on the calendar, and then select one of the following options: Exact Time : click the Event Time field and select the specific time the events occurred. +/- 1 Minute +/- 3 Minutes +/- 5 Minutes +/- 10 Minutes +/- 15 Minutes +/- 1 Hour +/- 2 Hours +/- 6 Hours +/- 12 Hours +/- 1 Day +/- 3 Days +/- 1 Week Sort alerts and IOC matches You can sort the alerts and IOC matches that are displayed in ascending or descending order.

### "Response integrations community contribution guidelines \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following JSON object represents a poor structure as it would be unusable inside playbooks: { "10.10.10.10": { "is malicious": "false" } } Instead, format it like this: [ { "is malicious": "false", "ip": "10.10.10.10" } ] If you're using entities inside the action and return results Per Entity, then the best practice is to structure the JSON Result like this: [ { "Entity": "10.10.10.10", "EntityResult": { "is malicious": "false", } } ] Always consider how the output of the action can be used inside automation.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
- In general, the structure of the name should be like this: {integration display name} - {process} Job For example: ServiceNow - Sync Incidents Job Description The Description of the job should highlight to the user what the job is doing during the iterations; for example, This job will synchronize Security Command Center based cases created by the Urgent Posture Findings connector.
- In general, the structure of the name should be like this: {integration display name} - {data that is being ingested} Connector For example: Crowdstrike - Pull Alerts Connector Description The Description of the connector should highlight to the user what will be ingested by the connector; for example, Pull alerts from Crowdstrike .

