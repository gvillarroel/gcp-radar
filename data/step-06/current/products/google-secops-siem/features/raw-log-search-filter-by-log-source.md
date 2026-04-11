---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:56:14.327Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Raw log search filter by log source"
feature_slug: "raw-log-search-filter-by-log-source"
latest_feature_date: "2025-11-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/soar/release-notes"
keywords:
  - "raw"
  - "log"
  - "search"
  - "filter"
  - "by"
  - "source"
  - "can"
  - "results"
---

# Raw log search filter by log source

Product: Google SecOps SIEM
Coverage: LOW

## Step 02 Summary

Raw log search can filter results by one or more log sources.

## Extended Definition

Raw log search can filter results by one or more log sources.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/soar/release-notes](https://docs.cloud.google.com/chronicle/docs/soar/release-notes)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example, if you have a database called suspicious with a column of IP addresses you know are problematic, you can reference that database in Search instead of manually entering individual IP addresses in Search: events: $e.principal.ip in %susupicious.ip You can narrow your results by searching for specific metadata in addition to IP addresses, for example you might be specifically concerned with changes to user resources: events: $e.metadata.event type = "USER RESOURCE UPDATE CONTENT" $e.principal.ip in %susupicious.ip You can narrow a search against interrelated UDM fields and match against multiple data table columns.
- Click an entity to display the Entity context dialog, which can include the following items: Asset name First time seen Last time seen IP addresses MAC addresses Number of alerts Highest alert count by rule Alerts-over-time bar graph Open Alerts & IOCs link View in Alerts Tab link Use the Pivot Table to analyze events The Pivot Table lets you analyze events using expressions and functions against the results from the search.
- Download search results with raw log correlation You can download a maximum of 1 million normalized UDM events as a CSV file for offline analysis.
- You can browse and select these UDM fields using Filters or Raw Log Search .

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-api-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Absolute Secure Endpoint ( ABSOLUTE SECURE ENDPOINT ) Airbus Security Logging (ACD AISD) ( AIRBUS SECURITY LOG ) Azure Recovery Services Vaults ( AZURE RECOVERY SERVICES VAULTS ) Boeing Onboard Network System Logging ( BOEING ONS ) Cisco Firepower Threat Defense ( CISCO FIREPOWER THREAT DEFENSE ) Cisco Security Cloud Control ( CISCO SECURITY CLOUD CONTROL ) Pico Corvilnet Engine ( CORVILNET ENGINE ) CrowdStrike Falcon Shield ( CROWDSTRIKE FALCON SHIELD ) Easy NAC ( EASY NAC ) FairXchange Horizon ( FAIRXCHANGE HORIZON ) Google Threat Intelligence ( GCP THREATINTEL ) HPE Alletra ( HPE ALLETRA ) Huawei Cloud Trace Service Audit ( HUAWEI CTS AUDIT ) Huawei SecMaster ( HUAWEI SECMASTER ) IBM ILO ( IBM ILO ) Infisical ( INFISICAL ) JSCAPE SFTP ( JSCAPE SFTP ) Juniper Edge ( JUNIPER EDGE ) Kaspersky for Microsoft Office 365 ( KASPERSKY O365 EVENTS ) Microsoft Defender for Cloud Apps ( MICROSOFT DEFENDER CLOUD APPS ) Oracle Cloud Infrastructure Network Firewall ( OCI FIREWALL ) Okta Workflows ( OKTA WORKFLOWS ) Phosphorus ( PHOSPHORUS ) Rapid7 Cloud Security ( RAPID7 CLOUDSEC ) Research and Education Networks Information Sharing and Analysis Center ( REN ISAC ) Risk Resecurity ( RISK RESECURITY ) Sangfor Network Detection and Response ( SANGFOR NDR ) SAP Enterprise Threat Detection ( SAP ETD ) SAP IAS Context ( SAP IAS CONTEXT ) Sectigo SCM ( SECTIGO SCM ) ServiceNow Node ( SERVICENOW NODE ) ServiceNow Outbound HTTP ( SERVICENOW OUTBOUNDHTTP ) ServiceNow System log ( SERVICENOW SYSLOG ) ServiceNow Transaction ( SERVICENOW TRANSACTION ) Seti S4 ( SETI S4 ) ThousandEyes ( THOUSAND EYES ) Transmit Security Mosaic CIAM ( TRANSMIT MOSAIC CIAM ) Transmit Security Mosaic Fraud Prevention ( TRANSMIT MOSAIC FRAUD PREVENTION ) Transmit Security Mosaic Identity Verification ( TRANSMIT MOSAIC IDENTITY VERIFICATION ) Transmit Security Mosaic Management ( TRANSMIT MOSAIC MANAGEMENT ) Tripwire Security Configuration Management ( TRIPWIRE SCM ) Valimail ( VALIMAIL ) WSO2 IS AM ( WSO2 IS AM ) XDR.Net Digital Twin ( XDRNET DIGITALTWIN ) Zimbra Mail ( ZIMBRA MAIL ) Zscaler Email DLP ( ZSCALER EMAIL DLP ) November 13, 2025 Feature Raw log search enhancements Google SecOps now includes enhancements to raw log search to boost usability, performance, and data analysis: New filtering options : Filter raw log results by their parsing status or by one or more log sources.
- March 23, 2026 Announcement New parser documentation now available New parser documentation is available to help you ingest and normalize logs from the following sources: Collect Cisco Umbrella Cloud Firewall logs Collect Cisco Umbrella IP logs Collect Claroty xDome for Healthcare logs Collect CloudM logs Collect Digital Guardian EDR logs Collect DNSFilter logs Collect Dope Security SWG logs Collect Druva Backup logs Collect EfficientIP DDI logs Collect Elastic Defend logs Collect Elastic Windows Event Log Beats logs Collect Ergon Informatik Airlock IAM logs Collect ESET Threat Intelligence logs Collect F5 Distributed Cloud Services logs Collect F5 Shape logs Collect F5 Silverline logs Collect Falco IDS logs Collect Fastly CDN logs Collect File Scanning Framework logs Collect FireEye ETP logs Collect FireEye HX Audit logs Collect FireEye NX Audit logs Collect Fivetran logs Collect Forcepoint Mail Relay logs Collect GitGuardian Enterprise logs Collect Google Cloud Looker audit logs Collect Guardicore Centra logs Collect HCL BigFix logs Collect HID DigitalPersona logs Collect IBM AS/400 logs Collect IBM Informix logs Collect IBM MaaS360 logs Collect IBM Mainframe Storage logs Collect IBM OpenPages logs Collect IBM Security Access Manager logs Collect IBM Security Identity Manager logs Collect iBoss Web Proxy logs Collect Intel 471 Watcher Alerts logs Collect Intel Endpoint Management Assistant logs Collect IONIX Attack Surface Management logs Collect Island Enterprise Browser logs Collect Jamf Protect Telemetry V2 logs Collect Keycloak logs Collect Kong Gateway logs Collect LenelS2 OnGuard logs Collect Lookout Mobile Endpoint Security logs Collect Lucid audit logs Collect ManageEngine Exchange Reporter Plus logs Collect Mandiant Threat Intelligence Custom IOC logs Collect Menlo Security Isolation Platform (MSIP) logs Collect Metabase logs Collect Microsoft Defender for Endpoint on iOS logs Collect Microsoft Dynamics 365 User Activity logs Collect Microsoft IAS / Network Policy Server (NPS) logs Collect Microsoft Network Policy Server (NPS) logs Collect OAuth2 Proxy logs Collect Office 365 Message Trace logs Collect Progress MOVEit Transfer logs Collect Netscout Arbor Sightline logs Collect Skyhigh Secure Web Gateway (On-Premises) logs Collect ThreatDown EDR logs Collect Trellix Endpoint Security (HX) alert logs Collect Trellix Endpoint Security (HX) audit event logs Collect Trellix Endpoint Security (HX) host inventory logs March 20, 2026 Feature View Triage and Investigation Agent (TIN) results in the Case Summary This feature is currently in Preview and is part of a gradual rollout.
- For more details, see the following topics: Filter data in Raw Log Search Conduct a raw log search Use raw log search Method: legacy.legacySearchRawLogsV2 November 12, 2025 Feature Use the Triage Agent to investigate alerts You can now use Triage Agent, an AI-powered investigation assistant, to analyze alerts in Google SecOps.
- September 05, 2025 Change Advanced filtering in alerts and search results You can now filter alerts and search results by any field in the detection object.

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-api-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Absolute Secure Endpoint ( ABSOLUTE SECURE ENDPOINT ) Airbus Security Logging (ACD AISD) ( AIRBUS SECURITY LOG ) Azure Recovery Services Vaults ( AZURE RECOVERY SERVICES VAULTS ) Boeing Onboard Network System Logging ( BOEING ONS ) Cisco Firepower Threat Defense ( CISCO FIREPOWER THREAT DEFENSE ) Cisco Security Cloud Control ( CISCO SECURITY CLOUD CONTROL ) Pico Corvilnet Engine ( CORVILNET ENGINE ) CrowdStrike Falcon Shield ( CROWDSTRIKE FALCON SHIELD ) Easy NAC ( EASY NAC ) FairXchange Horizon ( FAIRXCHANGE HORIZON ) Google Threat Intelligence ( GCP THREATINTEL ) HPE Alletra ( HPE ALLETRA ) Huawei Cloud Trace Service Audit ( HUAWEI CTS AUDIT ) Huawei SecMaster ( HUAWEI SECMASTER ) IBM ILO ( IBM ILO ) Infisical ( INFISICAL ) JSCAPE SFTP ( JSCAPE SFTP ) Juniper Edge ( JUNIPER EDGE ) Kaspersky for Microsoft Office 365 ( KASPERSKY O365 EVENTS ) Microsoft Defender for Cloud Apps ( MICROSOFT DEFENDER CLOUD APPS ) Oracle Cloud Infrastructure Network Firewall ( OCI FIREWALL ) Okta Workflows ( OKTA WORKFLOWS ) Phosphorus ( PHOSPHORUS ) Rapid7 Cloud Security ( RAPID7 CLOUDSEC ) Research and Education Networks Information Sharing and Analysis Center ( REN ISAC ) Risk Resecurity ( RISK RESECURITY ) Sangfor Network Detection and Response ( SANGFOR NDR ) SAP Enterprise Threat Detection ( SAP ETD ) SAP IAS Context ( SAP IAS CONTEXT ) Sectigo SCM ( SECTIGO SCM ) ServiceNow Node ( SERVICENOW NODE ) ServiceNow Outbound HTTP ( SERVICENOW OUTBOUNDHTTP ) ServiceNow System log ( SERVICENOW SYSLOG ) ServiceNow Transaction ( SERVICENOW TRANSACTION ) Seti S4 ( SETI S4 ) ThousandEyes ( THOUSAND EYES ) Transmit Security Mosaic CIAM ( TRANSMIT MOSAIC CIAM ) Transmit Security Mosaic Fraud Prevention ( TRANSMIT MOSAIC FRAUD PREVENTION ) Transmit Security Mosaic Identity Verification ( TRANSMIT MOSAIC IDENTITY VERIFICATION ) Transmit Security Mosaic Management ( TRANSMIT MOSAIC MANAGEMENT ) Tripwire Security Configuration Management ( TRIPWIRE SCM ) Valimail ( VALIMAIL ) WSO2 IS AM ( WSO2 IS AM ) XDR.Net Digital Twin ( XDRNET DIGITALTWIN ) Zimbra Mail ( ZIMBRA MAIL ) Zscaler Email DLP ( ZSCALER EMAIL DLP ) November 13, 2025 Feature Raw log search enhancements Google SecOps now includes enhancements to raw log search to boost usability, performance, and data analysis: New filtering options : Filter raw log results by their parsing status or by one or more log sources.
- September 08, 2025 Announcement New parser documentation now available New parser documentation is available to help you ingest and normalize logs from the following sources: Collect Akamai Cloud Monitor logs Collect Akamai DataStream 2 logs Collect Aware audit logs Collect AWS API Gateway access logs Collect AWS VPC Transit Gateway flow logs Collect Bitwarden Enterprise event logs Collect Box Collaboration JSON logs Collect Censys logs Collect Code42 Incydr core datasets Collect CSV Custom IOC files Collect Deep Instinct EDR logs Collect DigiCert audit logs Collect DomainTools Iris Investigate results Collect Duo administrator logs Collect Duo authentication logs Collect Duo entity context logs Collect Google Cloud Abuse Events logs Collect Harness IO audit logs Collect HPE Aruba Networking Central logs Collect Jamf Pro context logs Collect PingOne Advanced Identity Cloud logs Collect Slack audit logs Collect Snyk group-level audit logs Collect Snyk group-level audit and issues logs Collect Venafi Zero Touch PKI logs Collect Veritas NetBackup logs Collect VMware AirWatch logs Collect VMware Avi Load Balancer WAF logs Collect VMware Horizon logs Collect VMware VeloCloud SD-WAN logs Collect Zoom operation logs September 05, 2025 Change Advanced filtering in alerts and search results You can now filter alerts and search results by any field in the detection object.
- Announcement New parser documentation now available New parser documentation is available to help you ingest and normalize logs from the following sources: Collect Active Countermeasures AI-Hunter logs Collect ADVA Fiber Service Platform logs Collect AIX system logs Collect Akamai SIEM Connector logs Collect AMD Pensando DSS firewall logs Collect Azure NSG Flow logs Collect Cloudflare Page Shield logs Collect FingerprintJS logs Collect FireEye eMPS logs Collect Forcepoint Email Security logs Collect Forcepoint NGFW logs Collect Fortinet FortiSASE logs Collect IBM DB2 logs Collect ManageEngine ADManager Plus logs Collect Microsoft Azure Resource logs Collect Microsoft Intune Context logs Collect Ubiquiti Unifi switch logs Collect Vectra Detect logs Collect Vectra Stream logs Collect Voltage SecureMail logs Collect Wallix Bastion logs January 16, 2026 Feature Perform all-time searches You can now run searches over your full retention period by clicking the Time Picker on the Search editor panel and selecting All Time .
- For more details, see the following topics: Filter data in Raw Log Search Conduct a raw log search Use raw log search Method: legacy.legacySearchRawLogsV2 November 12, 2025 Feature Use the Triage Agent to investigate alerts You can now use Triage Agent, an AI-powered investigation assistant, to analyze alerts in Google SecOps.

### Google Security Operations SOAR release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/release-notes](https://docs.cloud.google.com/chronicle/docs/soar/release-notes)
- Source ID: `site-api-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Fixed Error when trying to log in again to Chronicle SOAR (ID #46831483) Email HTML template shows blank page in Settings (ID #46912863) Users filter in the Search page not displaying all the users (ID #00249930) Active Directory Groups field removed from Settings Permission groups as it is not supported October 24, 2023 Feature Remote Agents 1.4.4 Added support for all SDK calls over remote agents Improved managing integrations over the remote agent leading to a more overall stable product experience Publisher Python version upgraded to Python 3.11 Fixed Remote Agents 1.4.4 Remote agent actions do not return script results in the same way local actions return them (ID #45682680) Users unable to change the remote agent environment via agent CLI October 03, 2023 Fixed Release 6.2.36 GA - 14th October, 2023 Internal security fixes September 27, 2023 Feature Release Notes 6.2.35 GA - 8th October Risk Score and Severity added Two new information fields have been added to the Alert Details widget which appears in the Alert overview tab.
- Fixed Searching by entities does not return the full results (ID #47644037) Fixed Cases are loading too slowly (ID #00246621) Fixed API endpoint /api/external/v1/logging/python not returning logs (ID #00258483) Fixed Predefined widgets not available after updating playbook block (ID #47667046) November 30, 2023 Announcement Release 6.2.41 is now in General Availability.
- Feature When performing a search on entities in the SOAR search page, you can now focus on more precise results by using the new condition Equals , in addition to the default condition Contains .
- New API for Logs: Admin users can now retrieve raw python logs directly from the platform using the following API: POST/api/external/v1/logging/python Fixed Release Notes 6.2.31 Importing a custom integration on top of an existing commercial integration causes the connector to not work properly (ID #00243798) Specific Integration showing incorrect update available (ID #00181718) SDK call siemplify.current alert.creation time returns 0 (ID #00226591) In rare situations, unable to access several cases via the Platform or via API (ID #00243878) When changing the Case Stage under the Cases tab, the drop down list of stages does not follow the same numerical order as defined in the Settings (ID #44453181) Entities that should be internal are created as external if ingested using the environment alias (ID #00225318) In certain situations, alerts are ingested into the platform for environments that don't exist yet in the platform and as soon as the environments are created - the cases are opened and playbooks run.

