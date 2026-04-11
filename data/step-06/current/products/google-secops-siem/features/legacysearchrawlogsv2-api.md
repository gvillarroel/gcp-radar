---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:56:14.324Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "legacySearchRawLogsV2 API"
feature_slug: "legacysearchrawlogsv2-api"
latest_feature_date: "2025-11-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/reference/google-secops-api-libraries-overview"
keywords:
  - "legacysearchrawlogsv2"
  - "api"
  - "new"
  - "is"
  - "available"
  - "for"
  - "searching"
  - "raw"
---

# legacySearchRawLogsV2 API

Product: Google SecOps SIEM
Coverage: LOW

## Step 02 Summary

A new legacySearchRawLogsV2 API is available for searching raw logs in a specific Google SecOps instance.

## Extended Definition

A new legacySearchRawLogsV2 API is available for searching raw logs in a specific Google SecOps instance.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/reference/google-secops-api-libraries-overview](https://docs.cloud.google.com/chronicle/docs/reference/google-secops-api-libraries-overview)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Supported fields You can download the following fields to a CSV file from the platform: user hostname process name event type timestamp raw log (valid only when raw logs are enabled for the customer) All fields starting with udm.additional Valid field types You can download the following field types to a CSV file: double float int32 uint32 int64 uint64 bool string enum bytes google.protobuf.Timestamp google.protobuf.Duration Unsupported fields Fields that start with "udm" (not udm.additional) and meet either of the following conditions cannot be downloaded to CSV: The nesting of the field is more than 10 deep in udm proto.
- When searching Values , UDM Lookup displays Possible value match when a match is found in the following cases: Matches in the following UDM fields: metadata.description security result.description security result.detection fields.value security result.summary network.http.user agent Matches in fields with a full path that ends in one of the following values: .command line For example principal.process.command line . .file.full path For example principal.process.file.full path . .labels.value For example src.labels.value . .registry.registry key For example principal.registry.registry key . .url For example principal.url .
- Searching for text in Values returns results as follows: If the string is found at the beginning or end of the value, it is highlighted in the result, along with the UDM field name and the log ingestion time.
- Raw Log tab The Raw Log tab displays the original raw sign in any of the following formats: Raw JSON XML CSV Hex/ASCII Alerts tab The Alerts tab displays the alerts associated with the event.

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-api-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Absolute Secure Endpoint ( ABSOLUTE SECURE ENDPOINT ) Airbus Security Logging (ACD AISD) ( AIRBUS SECURITY LOG ) Azure Recovery Services Vaults ( AZURE RECOVERY SERVICES VAULTS ) Boeing Onboard Network System Logging ( BOEING ONS ) Cisco Firepower Threat Defense ( CISCO FIREPOWER THREAT DEFENSE ) Cisco Security Cloud Control ( CISCO SECURITY CLOUD CONTROL ) Pico Corvilnet Engine ( CORVILNET ENGINE ) CrowdStrike Falcon Shield ( CROWDSTRIKE FALCON SHIELD ) Easy NAC ( EASY NAC ) FairXchange Horizon ( FAIRXCHANGE HORIZON ) Google Threat Intelligence ( GCP THREATINTEL ) HPE Alletra ( HPE ALLETRA ) Huawei Cloud Trace Service Audit ( HUAWEI CTS AUDIT ) Huawei SecMaster ( HUAWEI SECMASTER ) IBM ILO ( IBM ILO ) Infisical ( INFISICAL ) JSCAPE SFTP ( JSCAPE SFTP ) Juniper Edge ( JUNIPER EDGE ) Kaspersky for Microsoft Office 365 ( KASPERSKY O365 EVENTS ) Microsoft Defender for Cloud Apps ( MICROSOFT DEFENDER CLOUD APPS ) Oracle Cloud Infrastructure Network Firewall ( OCI FIREWALL ) Okta Workflows ( OKTA WORKFLOWS ) Phosphorus ( PHOSPHORUS ) Rapid7 Cloud Security ( RAPID7 CLOUDSEC ) Research and Education Networks Information Sharing and Analysis Center ( REN ISAC ) Risk Resecurity ( RISK RESECURITY ) Sangfor Network Detection and Response ( SANGFOR NDR ) SAP Enterprise Threat Detection ( SAP ETD ) SAP IAS Context ( SAP IAS CONTEXT ) Sectigo SCM ( SECTIGO SCM ) ServiceNow Node ( SERVICENOW NODE ) ServiceNow Outbound HTTP ( SERVICENOW OUTBOUNDHTTP ) ServiceNow System log ( SERVICENOW SYSLOG ) ServiceNow Transaction ( SERVICENOW TRANSACTION ) Seti S4 ( SETI S4 ) ThousandEyes ( THOUSAND EYES ) Transmit Security Mosaic CIAM ( TRANSMIT MOSAIC CIAM ) Transmit Security Mosaic Fraud Prevention ( TRANSMIT MOSAIC FRAUD PREVENTION ) Transmit Security Mosaic Identity Verification ( TRANSMIT MOSAIC IDENTITY VERIFICATION ) Transmit Security Mosaic Management ( TRANSMIT MOSAIC MANAGEMENT ) Tripwire Security Configuration Management ( TRIPWIRE SCM ) Valimail ( VALIMAIL ) WSO2 IS AM ( WSO2 IS AM ) XDR.Net Digital Twin ( XDRNET DIGITALTWIN ) Zimbra Mail ( ZIMBRA MAIL ) Zscaler Email DLP ( ZSCALER EMAIL DLP ) November 13, 2025 Feature Raw log search enhancements Google SecOps now includes enhancements to raw log search to boost usability, performance, and data analysis: New filtering options : Filter raw log results by their parsing status or by one or more log sources.
- January 14, 2025 Change The following rules have been removed from their associated rule packs in Curated Detections due to high alert volume across the Google SecOps customer base: Cloud Threats - CDIR SCC Enhanced Defense Evasion Alerts: SCC: Modify VPC Service Control with GCE Activity from the Restricted Resource SCC: Modify VPC Service Control with Activity from the Restricted Service Linux Threats - OS Privilege Escalation Tools: Sensitive File Discovery Last Login Users Whoami Commands Windows Threats - Initial Access: NetLogon AD System Event Risk Analytics for UEBA - Login to an Application Never Before Seen for a User Group: First Time User Login Activity to Application for Manager Peer Group Risk Analytics for UEBA - Login from Country Never Before Seen for a User Group: First Time User Login Activity from Country for Manager Peer Group The rule "SCC: Unexpected Child Shell" has been moved from the rule pack "Cloud Threats - CDIR SCC Enhanced Malware Alerts" to "Cloud Threats - CDIR SCC Enhanced Execution Alerts" January 07, 2025 Announcement The following parser documentation is now available: Collect Microsoft Defender for Endpoint logs Zscaler parsers overview Collect Zscaler DNS logs Collect Zscaler Firewall logs Collect Zscaler Internet Access logs Collect Zscaler Webproxy logs Collect Linux auditd and AIX systems logs Collect CircleCI audit logs Collect CloudPassage Halo logs Collect JFrog Artifactory logs Collect Apple macOS syslog data Collect Netskope web proxy logs Collect Onfido logs Collect OPNsense firewall logs Collect Rapid7 InsightIDR logs Collect Sysdig logs Collect Thinkst Canary logs Collect VMware Workspace ONE UEM logs Collect Workday HCM logs December 27, 2024 Change Google SecOps has added a new rule set to Applied Threat Intelligence (ATI), called Inbound IP Address Authentication, that identifies IP addresses that are authenticating to local infrastructure in an inbound network direction.
- Announcement New parser documentation now available New parser documentation is available to help you ingest and normalize logs from the following sources: Collect Absolute Secure Endpoint logs Collect AIDE (Advanced Intrusion Detection Environment) logs Collect Akamai Enterprise Application Access logs Collect Apache Hadoop logs Collect Armis Vulnerabilities logs Collect Array Networks SSL VPN logs Collect Aruba IPS logs Collect Atlassian Confluence logs Collect Cisco AMP for Endpoints logs Collect Cisco APIC logs Collect Cisco Application Centric Infrastructure (ACI) logs Collect Cisco CallManager logs Collect Cisco CloudLock CASB logs Collect Cisco DNA Center Platform logs Collect Cisco eStreamer logs Collect Cribl Stream logs Collect CrowdStrike FileVantage logs Collect CrowdStrike IDP Services logs Collect Cynet 360 AutoXDR logs Collect Digital Shadows SearchLight logs Collect Duo Telephony logs Collect Edgio WAF logs Collect Elastic Auditbeat logs Collect Elastic Packet Beats logs Collect Elasticsearch logs Collect Entrust nShield HSM audit logs Collect Imperva Advanced Bot Protection logs Collect Imperva Attack Analytics logs Collect Imperva Audit Trail logs Collect Imperva CEF logs Collect Imperva Data Risk Analytics (DRA) logs Collect Imperva Database logs Collect Imperva FlexProtect logs Collect Imperva SecureSphere Management logs Collect Kiteworks (formally Accellion) logs Collect Proofpoint Emerging Threats Pro IOC logs Collect ServiceNow audit logs Collect Team Cymru Scout Threat Intelligence data Collect URLScan IO logs Collect Uptycs EDR logs Collect VanDyke VShell SFTP logs Collect Zendesk CRM logs Collect ZeroFox Platform logs November 10, 2025 Feature Nested if You can now use if statements in both the outcome and events sections and also within the then else clauses of another if statement.
- January 20, 2023 Feature ListCuratedRules and ListCuratedRuleDetections Two new methods are now available for the Detection Engine API.

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-api-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Absolute Secure Endpoint ( ABSOLUTE SECURE ENDPOINT ) Airbus Security Logging (ACD AISD) ( AIRBUS SECURITY LOG ) Azure Recovery Services Vaults ( AZURE RECOVERY SERVICES VAULTS ) Boeing Onboard Network System Logging ( BOEING ONS ) Cisco Firepower Threat Defense ( CISCO FIREPOWER THREAT DEFENSE ) Cisco Security Cloud Control ( CISCO SECURITY CLOUD CONTROL ) Pico Corvilnet Engine ( CORVILNET ENGINE ) CrowdStrike Falcon Shield ( CROWDSTRIKE FALCON SHIELD ) Easy NAC ( EASY NAC ) FairXchange Horizon ( FAIRXCHANGE HORIZON ) Google Threat Intelligence ( GCP THREATINTEL ) HPE Alletra ( HPE ALLETRA ) Huawei Cloud Trace Service Audit ( HUAWEI CTS AUDIT ) Huawei SecMaster ( HUAWEI SECMASTER ) IBM ILO ( IBM ILO ) Infisical ( INFISICAL ) JSCAPE SFTP ( JSCAPE SFTP ) Juniper Edge ( JUNIPER EDGE ) Kaspersky for Microsoft Office 365 ( KASPERSKY O365 EVENTS ) Microsoft Defender for Cloud Apps ( MICROSOFT DEFENDER CLOUD APPS ) Oracle Cloud Infrastructure Network Firewall ( OCI FIREWALL ) Okta Workflows ( OKTA WORKFLOWS ) Phosphorus ( PHOSPHORUS ) Rapid7 Cloud Security ( RAPID7 CLOUDSEC ) Research and Education Networks Information Sharing and Analysis Center ( REN ISAC ) Risk Resecurity ( RISK RESECURITY ) Sangfor Network Detection and Response ( SANGFOR NDR ) SAP Enterprise Threat Detection ( SAP ETD ) SAP IAS Context ( SAP IAS CONTEXT ) Sectigo SCM ( SECTIGO SCM ) ServiceNow Node ( SERVICENOW NODE ) ServiceNow Outbound HTTP ( SERVICENOW OUTBOUNDHTTP ) ServiceNow System log ( SERVICENOW SYSLOG ) ServiceNow Transaction ( SERVICENOW TRANSACTION ) Seti S4 ( SETI S4 ) ThousandEyes ( THOUSAND EYES ) Transmit Security Mosaic CIAM ( TRANSMIT MOSAIC CIAM ) Transmit Security Mosaic Fraud Prevention ( TRANSMIT MOSAIC FRAUD PREVENTION ) Transmit Security Mosaic Identity Verification ( TRANSMIT MOSAIC IDENTITY VERIFICATION ) Transmit Security Mosaic Management ( TRANSMIT MOSAIC MANAGEMENT ) Tripwire Security Configuration Management ( TRIPWIRE SCM ) Valimail ( VALIMAIL ) WSO2 IS AM ( WSO2 IS AM ) XDR.Net Digital Twin ( XDRNET DIGITALTWIN ) Zimbra Mail ( ZIMBRA MAIL ) Zscaler Email DLP ( ZSCALER EMAIL DLP ) November 13, 2025 Feature Raw log search enhancements Google SecOps now includes enhancements to raw log search to boost usability, performance, and data analysis: New filtering options : Filter raw log results by their parsing status or by one or more log sources.
- Announcement New parser documentation now available New parser documentation is available to help you ingest and normalize logs from the following sources: Collect Absolute Secure Endpoint logs Collect AIDE (Advanced Intrusion Detection Environment) logs Collect Akamai Enterprise Application Access logs Collect Apache Hadoop logs Collect Armis Vulnerabilities logs Collect Array Networks SSL VPN logs Collect Aruba IPS logs Collect Atlassian Confluence logs Collect Cisco AMP for Endpoints logs Collect Cisco APIC logs Collect Cisco Application Centric Infrastructure (ACI) logs Collect Cisco CallManager logs Collect Cisco CloudLock CASB logs Collect Cisco DNA Center Platform logs Collect Cisco eStreamer logs Collect Cribl Stream logs Collect CrowdStrike FileVantage logs Collect CrowdStrike IDP Services logs Collect Cynet 360 AutoXDR logs Collect Digital Shadows SearchLight logs Collect Duo Telephony logs Collect Edgio WAF logs Collect Elastic Auditbeat logs Collect Elastic Packet Beats logs Collect Elasticsearch logs Collect Entrust nShield HSM audit logs Collect Imperva Advanced Bot Protection logs Collect Imperva Attack Analytics logs Collect Imperva Audit Trail logs Collect Imperva CEF logs Collect Imperva Data Risk Analytics (DRA) logs Collect Imperva Database logs Collect Imperva FlexProtect logs Collect Imperva SecureSphere Management logs Collect Kiteworks (formally Accellion) logs Collect Proofpoint Emerging Threats Pro IOC logs Collect ServiceNow audit logs Collect Team Cymru Scout Threat Intelligence data Collect URLScan IO logs Collect Uptycs EDR logs Collect VanDyke VShell SFTP logs Collect Zendesk CRM logs Collect ZeroFox Platform logs November 10, 2025 Feature Nested if You can now use if statements in both the outcome and events sections and also within the then else clauses of another if statement.
- January 07, 2025 Announcement The following parser documentation is now available: Collect Microsoft Defender for Endpoint logs Zscaler parsers overview Collect Zscaler DNS logs Collect Zscaler Firewall logs Collect Zscaler Internet Access logs Collect Zscaler Webproxy logs Collect Linux auditd and AIX systems logs Collect CircleCI audit logs Collect CloudPassage Halo logs Collect JFrog Artifactory logs Collect Apple macOS syslog data Collect Netskope web proxy logs Collect Onfido logs Collect OPNsense firewall logs Collect Rapid7 InsightIDR logs Collect Sysdig logs Collect Thinkst Canary logs Collect VMware Workspace ONE UEM logs Collect Workday HCM logs December 27, 2024 Change Google SecOps has added a new rule set to Applied Threat Intelligence (ATI), called Inbound IP Address Authentication, that identifies IP addresses that are authenticating to local infrastructure in an inbound network direction.
- New API for raw log search : Use the legacySearchRawLogsV2 API to search for raw logs within a specified Google SecOps instance.

### "Google SecOps APIs and libraries overview \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/google-secops-api-libraries-overview](https://docs.cloud.google.com/chronicle/docs/reference/google-secops-api-libraries-overview)
- Source ID: `site-api-reference`
- Final score: 126
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Google SecOps APIs and libraries overview Supported in: Google secops SIEM This page provides an overview of the APIs available for Google Security Operations.
- Chronicle API The Chronicle API is the new-generation, unified API for Google SecOps.
- While you can use the APIs directly by making raw requests to the server, client libraries let you code in your preferred language and provide simplifications that significantly reduce the amount of code you need to write.
- It includes the Feed Management, Detection Engine, Search, Forwarder Management, Data Export and Customer Management APIs.

