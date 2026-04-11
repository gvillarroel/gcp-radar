---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:56:14.539Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "UDM Search templates"
feature_slug: "udm-search-templates"
latest_feature_date: "2023-01-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
keywords:
  - "udm"
  - "search"
  - "templates"
  - "provide"
  - "chronicle"
  - "provided"
  - "pre"
  - "made"
---

# UDM Search templates

Product: Google SecOps SIEM
Coverage: LOW

## Step 02 Summary

UDM Search templates provide Chronicle-provided pre-made searches for Quick Searches and Search Manager.

## Extended Definition

UDM Search templates provide Chronicle-provided pre-made searches for Quick Searches and Search Manager.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/release-notes](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)

## Supporting Pages

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-api-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- You can now do the following in UDM Search: Use Chronicle-provided pre-made search templates in Quick Searches and Search Manager Create, edit, and share searches in Search Manager (an enhancement to Saved Searches) Use reference lists in UDM searches January 06, 2023 Change Chronicle Curated Detections has been enhanced with the following additional detection content for Windows-based threats .
- For more information, see: How Chronicle enriches event and entity data How to use context-enriched data in rules Use context enriched data in UDM Search Use context enriched data in reports January 30, 2023 Change The following changes are available in the Unified Data Model: Added the following fields to the Software object : Software.description Software.vendor name Deprecated the Location.region latitude and Location.region longitude fields.
- January 10, 2023 Feature Multiple enhancements were made to the UDM Search capability , including the additions of search templates and shared searches.
- March 23, 2026 Announcement New parser documentation now available New parser documentation is available to help you ingest and normalize logs from the following sources: Collect Cisco Umbrella Cloud Firewall logs Collect Cisco Umbrella IP logs Collect Claroty xDome for Healthcare logs Collect CloudM logs Collect Digital Guardian EDR logs Collect DNSFilter logs Collect Dope Security SWG logs Collect Druva Backup logs Collect EfficientIP DDI logs Collect Elastic Defend logs Collect Elastic Windows Event Log Beats logs Collect Ergon Informatik Airlock IAM logs Collect ESET Threat Intelligence logs Collect F5 Distributed Cloud Services logs Collect F5 Shape logs Collect F5 Silverline logs Collect Falco IDS logs Collect Fastly CDN logs Collect File Scanning Framework logs Collect FireEye ETP logs Collect FireEye HX Audit logs Collect FireEye NX Audit logs Collect Fivetran logs Collect Forcepoint Mail Relay logs Collect GitGuardian Enterprise logs Collect Google Cloud Looker audit logs Collect Guardicore Centra logs Collect HCL BigFix logs Collect HID DigitalPersona logs Collect IBM AS/400 logs Collect IBM Informix logs Collect IBM MaaS360 logs Collect IBM Mainframe Storage logs Collect IBM OpenPages logs Collect IBM Security Access Manager logs Collect IBM Security Identity Manager logs Collect iBoss Web Proxy logs Collect Intel 471 Watcher Alerts logs Collect Intel Endpoint Management Assistant logs Collect IONIX Attack Surface Management logs Collect Island Enterprise Browser logs Collect Jamf Protect Telemetry V2 logs Collect Keycloak logs Collect Kong Gateway logs Collect LenelS2 OnGuard logs Collect Lookout Mobile Endpoint Security logs Collect Lucid audit logs Collect ManageEngine Exchange Reporter Plus logs Collect Mandiant Threat Intelligence Custom IOC logs Collect Menlo Security Isolation Platform (MSIP) logs Collect Metabase logs Collect Microsoft Defender for Endpoint on iOS logs Collect Microsoft Dynamics 365 User Activity logs Collect Microsoft IAS / Network Policy Server (NPS) logs Collect Microsoft Network Policy Server (NPS) logs Collect OAuth2 Proxy logs Collect Office 365 Message Trace logs Collect Progress MOVEit Transfer logs Collect Netscout Arbor Sightline logs Collect Skyhigh Secure Web Gateway (On-Premises) logs Collect ThreatDown EDR logs Collect Trellix Endpoint Security (HX) alert logs Collect Trellix Endpoint Security (HX) audit event logs Collect Trellix Endpoint Security (HX) host inventory logs March 18, 2026 Feature Bindplane features for Google SecOps general availability The following Bindplane features that relate to Google SecOps are now in General Availability (GA): Single sign-on with custom claims role mapping : gives a production-ready way to manage Bindplane access through your identity provider.

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- The following examples show supported boolean operators ( AND , OR , and NOT ): A AND B A OR B Use parentheses ( ) to group expressions and control evaluation order: (A OR B) AND (B OR C) AND (C OR NOT D) Examples: Search for login events on the finance server: metadata.event type = "USER LOGIN" and target.hostname = "finance-svr" Use the operator (>) to search for connections where more than 10 MB of data was sent: metadata.event type = "NETWORK CONNECTION" and network.sent bytes > 10000000 Use multiple conditions to search for winword.exe launching cmd.exe or powershell.exe : metadata.event type = "PROCESS LAUNCH" and principal.process.file.full path = /winword/ and ( target.process.file.full path = /cmd.exe/ or target.process.file.full path = /powershell.exe/ ) Search key-value pairs in additional and labels fields: The additional and labels fields act as customizable containers for event data that doesn't map to standard UDM fields.
- The following are examples: metadata.log type = "PCAP DNS" network.dns.answers.name = "dns-A901F3j.hat.example.com" If the result includes the text Possible value match , the name-value pair contains the UDM field name and a regular expression containing the search term.
- Timelines chart The Timelines chart provides a graphical representation of the number of events and alerts occurring each day that are being surfaced by the current search.
- Use the search feature A search expression consists of a UDM field to search, an operator , and a data value to search for.

### "Google SecOps Response Integrations release notes \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/release-notes](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/release-notes)
- Source ID: `site-api-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- You can now provide microsoftSentinel and microsoftDefenderForCloud as the Service Source in the following connector: Microsoft 365 Defender - Incidents Connector May 21, 2025 Change Palo Alto Cortex XDR : Version 17.0 Updated the supported statuses in the following action: Update an Incident Change Microsoft Azure Sentinel : Version 53.0 Updated entity mapping in the following connectors: Microsoft Azure Sentinel - Incident Connector v2 Microsoft Azure Sentinel - Incident Tracking Connector Change Google Chronicle :Version: 58.0 Updated the following action: Broken Google Chronicle Widget Expanded the JSON Result with new fields in the following connector: Google Chronicle - Get Rule Details May 14, 2025 Feature ProofPoint TAP : Version 11.0 The following new actions have been added: Get Threat Forensics Search Events List Campaigns Change Google Chronicle : Version 57.0 Updated the processing of the events in the following connector: Google Chronicle - Chronicle Alerts Connector May 07, 2025 Feature CrowdStrike Falcon : Version 61.0 The following new action has been added: Search Events Feature New Cisco Vulnerability Management integration Change Microsoft Azure Sentinel : Version 52.0 Updated events processing logic in the following connectors: Microsoft Azure Sentinel - Incident Connector v2 Microsoft Azure Sentinel - Incident Tracking Connector Change CrowdStrike Falcon : Version 61.0 Updated input parameter processing in the following action: On-Demand Scan Added ability to define Alert Name and Case Name templates in the following connectors: Crowdstrike Falcon - Detections Connector Crowdstrike Falcon - Identity Protection Detections Connector Crowdstrike Falcon - Alerts Connector Change CrowdStrike Falcon : Version 61.0 Updated input parameter processing in the following action: On-Demand Scan Added ability to define Alert Name and Case Name templates to the following connectors: Crowdstrike Falcon - Detections Connector Crowdstrike Falcon - Identity Protection Detections Connector Crowdstrike Falcon - Alerts Connector Change Google Chronicle : Version 56.0 Added ignore \r\n characters and skip empty input values when adding in the following actions: Is Value in Reference List Add Value to Reference List Optimised the processing of the alerts in the following jobs: Alerts Sync Alerts Creator Microsoft Azure Sentinel : Version 52.0 Updated events processing logic in the following connectors: Microsoft Azure Sentinel - Incident Connector v2 Microsoft Azure Sentinel - Incident Tracking Connector Microsoft Graph Mail : Version 26.0 Added ability to define Alert Name Template in the following connector: Microsoft Graph Mail - Microsoft Graph Mail Connector Microsoft Graph Mail Delegated : Version 26.0 Added ability to define Alert Name Template in the following connector: Microsoft Graph Mail Delegated - Microsoft Graph Mail Delegated Connector Change Google Chronicle : Version 56.0 Added ignore \r\n characters and skip empty input values when adding to the following actions: Is Value in Reference List Add Value to Reference List Optimized the processing of the alerts in the following jobs: Google Chronicle - Alerts Sync Google Chronicle - Alerts Creator Change Microsoft Graph Mail : Version 26.0 Added ability to define Alert Name Template in the following connector: Microsoft Graph Mail - Microsoft Graph Mail Connector Change Microsoft Graph Mail Delegated : Version 4.0 Added ability to define Alert Name Template in the following connector: Microsoft Graph Mail Delegated - Microsoft Graph Mail Delegated Connector April 30, 2025 Feature Mimecast : Version 12.0 The following new action has been added: Create Block Sender Policy Change VirusTotalV3 : Version 37.0 Updated entity handling of the following actions: Add Comment To Entity Add Vote To Entity Enrich URL Get Domain Details Get Related Domains Get Related Hashes Get Related IPs Get Related URLs Updated Predefined Widgets in the following actions: Add Comment To Entity Add Vote To Entity Enrich URL Get Domain Details Get Related Domains Get Related Hashes Get Related IPs Get Related URLs Change HTTP v2 : Version 8.0 Integration : Refactored the code to work with updated API.
- November 26, 2025 Feature Google Chronicle : Version 69.0 The following new actions have been added: Generate UDM Query Add Entry To Watchlist Change Jira : Version 50.0 Improved handling of comments with additional styling in the following action: Add Comment Improved handling of comments with additional styling in the following job: Sync Comments Change Urlscan.io : Version 27.0 Added support for the Domain entity in the following action: Search For Scans Change Updated the dependency files in the following integrations: Exchange : Version 117.0 HTTP V2 : Version 10.0 Change CSV : Version 37.0 Updated support for nested JSONs in the following action: Save Json to CSV November 19, 2025 Feature Google Threat Intelligence : Version 6.0 The following new action has been added: Get Related Associations Change SentinelOneV2 : Version 44.0 Updated the mechanism for fetching agent information in the following actions: Disconnect Agent From Network Enrich Endpoint Get Agent Status Get Application List For Endpoint Get Events For Endpoint Hours Back Initiate Full Scan Move Agents Reconnect Agent To The Network Change Okta : Version 11.0 Updated the pagination processing mechanism in the following actions: List Users Add Group Get Group List Providers Change Google Chronicle : Version 68.0 Improved error handling in the following jobs: Google Chronicle Sync Job Google Chronicle Alerts Creator Job Change Cofense Triage : Version 14.0 Added the ability to filter based on category to the following connector: Cofense Triage - Reports Connector Change Splunk : Version 59.0 Refactored the following integration items to use the new API endpoints: Ping Get Host Events Splunk Notable Events Connector Sync Splunk ES Closed Events Sync Splunk ES Comments November 12, 2025 Change Google Security Command Center : Version 14.0 Added the ability to ingest Toxic Combinations and Chokepoints in the following connector: Google Security Command Center - Findings Connector Change Updated the dependency files in the following integrations: Microsoft Graph Mail : Version 33.0 Microsoft Graph Mail Delegated : Version 10.0 Change The following integrations are now GUS recommended: CrowdStrike Falcon : Version 69.0 Wiz : Version 3.0 Fortigate : Version 16.0 Change Google Chronicle : Version 67.0 Updated curated detections processing logic in the following action: Get Detection Details Change Cybereason : Version 21.0 Integration : Added ability to provide a CA Certificate file as part of the configuration.
- Change QRadar : Version 63.0 Updated the logic for offense processing in the following connectors: Qradar Correlation Events Connector V2 Qradar Offenses Connector Change Palo Alto Cortex XDR : Version 23.0 Added the ability to provide agents using input parameters in the following actions: Scan Endpoint Isolate Endpoint Unisolate Endpoint Change Google Chronicle : Version 76.0 Restored the previous JSON result structure for empty result sets in the following action: Execute UDM Query Change Exchange : Version 119.0 Updated the handling of S/MIME emails sent on MacOS in the following connectors: Exchange - Mail Connector v2 with OAuth Authentication Exchange - Mail Connector v2 Change CrowdStrike Falcon : Version 70.0 Deprecated the following actions: Add Incident Comment Update Incident Add Comment to Detection Close Detection Update Detection Deprecated the following connectors: CrowdStrike - Detections Connector Crowdstrike - Incidents Connector February 11, 2026 Feature CiscoUmbrella : Version 15.0 The following new actions have been added: Is Domain In Cisco Popularity List List Top Domains Change Tenable.io : Version 13.0 Optimized the asset processing of the following connector: TenableIO - Vulnerabilities Connector Updated the entity processing logic of the following actions: Enrich Entities List Endpoint Vulnerabilities Scan Endpoints Change Google Threat Intelligence : Version 9.0 Added the ability to define the data freshness threshold for available hashes to the following action: Submit File Added the ability to filter using monitor names to the following connector: Google Threat Intelligence - DTM Alerts Connector Integration : Updated the connectivity test method to avoid API quota consumption.
- August 20, 2025 Change Google Chronicle : Version 64.0 Added support for aggregated searches in the following action: Execute UDM Query Change Microsoft Graph Mail : Version 30.0 Improved handling of Case Name Template in the following connector: Microsoft Graph Mail - Microsoft Graph Mail Connector Change CrowdStrike Falcon : Version 63.0 Updated processing of On-Demand Scan alerts in the following connector: Crowdstrike Falcon - Alerts Connector Change Microsoft Graph Mail Delegated : Version 6.0 Improved handling of Case Name Template in the following connector: Microsoft Graph Mail Delegated - Microsoft Graph Mail Delegated Connector August 13, 2025 Feature New CyberArk Credential Provider integration Change Microsoft Graph Mail : Version 29.0 Integration : Updated dependencies.

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-api-reference`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- March 19, 2025 Announcement The following parser documentation is now available: Collect AWS Config logs Collect AWS Elastic Load Balancing logs Collect AWS Route 53 logs Collect AWS S3 server access logs Collect AWS WAF logs Collect Azure Application Gateway logs Collect Carbon Black App Control logs Collect Carbon Black EDR logs Collect Delinea Secret Server logs Collect Radware WAF logs Collect AWS Aurora logs Collect AWS CloudWatch logs Collect AWS Control Tower logs Collect AWS Elastic MapReduce logs Collect AWS Key Management Service logs Collect AWS Macie logs Collect AWS Network Firewall logs Collect AWS Security Hub logs Collect AWS Session Manager logs Collect Zscaler DLP logs Collect Zscaler Tunnel logs Collect Zscaler VPN logs Collect Zscaler ZPA Audit logs Collect Zscaler ZPA logs Collect Zscaler CASB logs Collect Azure AD Sign-In logs Collect Azure API Management logs Collect Azure APP Service logs Collect Azure Firewall logs Collect Azure VPN logs Collect AWS VPN logs Collect Azure Storage Audit logs Collect Azure WAF logs Collect Cloud IoT logs Collect Cloud Run logs Collect Cloud Compute logs Collect CrowdStrike Falcon Stream logs Collect SentinelOne Deep Visibility logs Collect Cloud VPC Flow Logs Collect Cloud Compute context logs Collect Cloud Intrusion Detection System (Cloud IDS) logs Collect Cloud Next Generation Firewall Enterprise logs Collect Cloud Storage context logs Collect Cloud Identity and Access Management (IAM) Analysis logs Collect Cloud Identity Devices logs Collect Cloud Identity Device Users logs Collect Cloud Security Command Center Error logs Collect Cloud Security Command Center Observation logs Collect Cloud Security Command Center Posture Violation logs Collect Cloud Security Command Center Toxic Combination logs Collect Cloud Security Command Center Unspecified logs Collect Cloud Secure Web Proxy logs March 18, 2025 Feature Statistics and aggregations in UDM search using YARA-L 2.0 You can now run statistical queries on UDM events and group the results for analysis using YARA-L 2.0.
- August 05, 2025 Feature New YARA-L features The following capabilities have been added to YARA-L 2.0 to enhance search precision, data analysis, and investigative workflows: Conditions in UDM search and dashboards You can now filter aggregates defined in the outcome section using the new condition clause.
- April 15, 2024 Deprecated The following labels fields for UDM nouns are deprecated and these fields will not appear in the search results after November 29, 2024: about.labels , intermediary.labels , observer.labels , principal.labels , src.labels , security result.about.labels , and target.labels .
- Prevention of broken feeds : The system blocks the creation of the feed until valid credentials are provided, preventing the creation of broken feeds that fail to ingest data later.

