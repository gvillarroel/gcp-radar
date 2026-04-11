---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:56:14.547Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Alerts and IOC Matches page"
feature_slug: "alerts-and-ioc-matches-page"
latest_feature_date: "2022-11-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
keywords:
  - "alerts"
  - "and"
  - "ioc"
  - "matches"
  - "page"
  - "the"
  - "shows"
  - "current"
---

# Alerts and IOC Matches page

Product: Google SecOps SIEM
Coverage: LOW

## Step 02 Summary

The Alerts and IOC Matches page shows current alerts and indicators of compromise and provides tools to filter and inspect them.

## Extended Definition

The Alerts and IOC Matches page shows current alerts and indicators of compromise and provides tools to filter and inspect them.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs](https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)

## Supporting Pages

### "View alerts and IOC matches \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs](https://docs.cloud.google.com/chronicle/docs/investigation/alerts-iocs)
- Source ID: `site-api-reference`
- Final score: 214
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The page contains the Alerts tab and the IOC Matches tab: Use the Alerts tab to view the current alerts in your enterprise.
- Configure common view options on the Alerts & IOCs page This section describes the common view options that you can configure on the Alerts and IOC Matches tabs of the Alerts & IOCs page.
- View alerts and IOC matches Supported in: Google secops SIEM The Alerts & IOCs page displays all the alerts and Indicators of Compromise (IOCs) that are impacting your enterprise.
- Example SQL to query for specific IP-address IOC matches: -- Add your IP IOC Matches here DECLARE IP IOCS ARRAY < STRING > ; SET IP IOCS = [ '40.79.150.120' ]; ------ SELECT MIN ( DATE ( TIMESTAMP SECONDS ( CAST ( day bucket seconds AS INT64 )), 'UTC' )) AS first observed , MAX ( DATE ( TIMESTAMP SECONDS ( CAST ( day bucket seconds AS INT64 )), 'UTC' )) AS last observed , COUNT ( 4 ) AS hits , ioc value , feed log type , is global , CONCAT ( COALESCE ( asset . namespace , "untagged" ), ":" , COALESCE ( asset . hostname , asset . asset ip address , asset . mac , "-" )) AS asset FROM datalake . ioc matches WHERE ioc value IN UNNEST ( IP IOCS ) AND ioc type = "IOC TYPE IP" GROUP BY 4 , 5 , 6 , 7 Here are the truncated results: Row first observed last observed hits ioc value feed log type is global asset 1 2025-02-23 2025-03-05 64 40.79.150.120 CATCH ALL false untagged:192.168.12.16 2 2025-02-27 2025-03-05 29 40.79.150.120 CATCH ALL false untagged:192.168.12.129 You can also query the datalake.events table for multi-dimensional IOC matching by constructing a concatenated string, for example: DECLARE IOC MULTIPLE ATTRIBUTES ARRAY < STRING > ; SET IOC MULTIPLE ATTRIBUTES = [ '1.2.3.4,80' , '1.2.3.4,443' ]; SELECT MIN ( TIMESTAMP SECONDS ( metadata . event timestamp . seconds )) AS first seen , MAX ( TIMESTAMP SECONDS ( metadata . event timestamp . seconds )) AS last seen , target ip , target . port FROM datalake . events , UNNEST ( target . ip ) target ip WHERE DATE ( hour time bucket ) BETWEEN DATE SUB ( CURRENT DATE , INTERVAL 60 DAY ) AND DATE SUB ( CURRENT DATE , INTERVAL 1 DAY ) AND target ip != "" AND target . port > 0 AND CONCAT ( target ip , "," , CAST ( target . port AS STRING )) IN UNNEST ( IOC MULTIPLE ATTRIBUTES ) GROUP BY 3 , 4 Note: The Google SecOps Data Lake typically retains data for six months.

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Click an entity to display the Entity context dialog, which can include the following items: Asset name First time seen Last time seen IP addresses MAC addresses Number of alerts Highest alert count by rule Alerts-over-time bar graph Open Alerts & IOCs link View in Alerts Tab link Use the Pivot Table to analyze events The Pivot Table lets you analyze events using expressions and functions against the results from the search.
- Timelines chart The Timelines chart provides a graphical representation of the number of events and alerts occurring each day that are being surfaced by the current search.
- For example: additional.fields["key"]="value" Examples of searches using specific key-value pairs in the additional and labels fields: Search for events containing specified key-value pairs: additional.fields["pod name"] = "kube-scheduler" metadata.ingestion labels["MetadataKeyDeletion"] = "startup-script" Use the AND operator with key-value pair searches: additional.fields["pod name"] = "kube-scheduler" AND additional.fields["pod name1"] = "kube-scheduler1" Search for all events that contain the specified key, regardless of the value: additional.fields["pod name"] != "" Search for events that contain a specific key, using a regular expression: additional.fields.value.string value = "mystring" Note: You can also use value.bool value or value.number value for boolean and numeric matches.
- When searching Values , UDM Lookup displays Possible value match when a match is found in the following cases: Matches in the following UDM fields: metadata.description security result.description security result.detection fields.value security result.summary network.http.user agent Matches in fields with a full path that ends in one of the following values: .command line For example principal.process.command line . .file.full path For example principal.process.file.full path . .labels.value For example src.labels.value . .registry.registry key For example principal.registry.registry key . .url For example principal.url .

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-api-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- November 09, 2022 Feature Alerts and IOC Matches The Alerts and Indicators of Compromise (IOC) page displays all the alerts and IOCs currently impacting your enterprise.
- March 23, 2026 Announcement New parser documentation now available New parser documentation is available to help you ingest and normalize logs from the following sources: Collect Cisco Umbrella Cloud Firewall logs Collect Cisco Umbrella IP logs Collect Claroty xDome for Healthcare logs Collect CloudM logs Collect Digital Guardian EDR logs Collect DNSFilter logs Collect Dope Security SWG logs Collect Druva Backup logs Collect EfficientIP DDI logs Collect Elastic Defend logs Collect Elastic Windows Event Log Beats logs Collect Ergon Informatik Airlock IAM logs Collect ESET Threat Intelligence logs Collect F5 Distributed Cloud Services logs Collect F5 Shape logs Collect F5 Silverline logs Collect Falco IDS logs Collect Fastly CDN logs Collect File Scanning Framework logs Collect FireEye ETP logs Collect FireEye HX Audit logs Collect FireEye NX Audit logs Collect Fivetran logs Collect Forcepoint Mail Relay logs Collect GitGuardian Enterprise logs Collect Google Cloud Looker audit logs Collect Guardicore Centra logs Collect HCL BigFix logs Collect HID DigitalPersona logs Collect IBM AS/400 logs Collect IBM Informix logs Collect IBM MaaS360 logs Collect IBM Mainframe Storage logs Collect IBM OpenPages logs Collect IBM Security Access Manager logs Collect IBM Security Identity Manager logs Collect iBoss Web Proxy logs Collect Intel 471 Watcher Alerts logs Collect Intel Endpoint Management Assistant logs Collect IONIX Attack Surface Management logs Collect Island Enterprise Browser logs Collect Jamf Protect Telemetry V2 logs Collect Keycloak logs Collect Kong Gateway logs Collect LenelS2 OnGuard logs Collect Lookout Mobile Endpoint Security logs Collect Lucid audit logs Collect ManageEngine Exchange Reporter Plus logs Collect Mandiant Threat Intelligence Custom IOC logs Collect Menlo Security Isolation Platform (MSIP) logs Collect Metabase logs Collect Microsoft Defender for Endpoint on iOS logs Collect Microsoft Dynamics 365 User Activity logs Collect Microsoft IAS / Network Policy Server (NPS) logs Collect Microsoft Network Policy Server (NPS) logs Collect OAuth2 Proxy logs Collect Office 365 Message Trace logs Collect Progress MOVEit Transfer logs Collect Netscout Arbor Sightline logs Collect Skyhigh Secure Web Gateway (On-Premises) logs Collect ThreatDown EDR logs Collect Trellix Endpoint Security (HX) alert logs Collect Trellix Endpoint Security (HX) audit event logs Collect Trellix Endpoint Security (HX) host inventory logs March 18, 2026 Feature Bindplane features for Google SecOps general availability The following Bindplane features that relate to Google SecOps are now in General Availability (GA): Single sign-on with custom claims role mapping : gives a production-ready way to manage Bindplane access through your identity provider.
- Akamai Log Delivery Service ( AKAMAI LDS ) AudioCodes Voice DNA ( AUDIOCODES ) Amazon API Gateway ( AWS API GATEWAY ) Axway ( AXWAY ) Biztalk ( BIZTALK ) Check Point FDE ( CHECKPOINT FDE ) Cimcor File Integrity Monitoring ( CIMCOR ) CS Alerts ( CS ALERTS ) Custom CSV Log ( CUSTOM CSV LOG ) Cyral ( CYRAL ) Druva ( DRUVA ) Entrust DataControl Audit ( ENTR DATACTRL AUDIT ) Ergon Informatik Airlock IAM ( ERGON INFORMATIK AIRLOCK IAM ) Eset Protect Platform ( ESET PROTECT PLATFORM ) Exim Internet Mailer ( EXIM INTERNET MAILER ) FM Systems Workplace Management ( FM SYSTEMS ) GluWare Network Automation ( GLUWARE NETWORK AUTOMATION ) Guidewire Billing Center ( GUIDEWIRE BILLING CENTER ) Guidewire Claim Center ( GUIDEWIRE CLAIM CENTER ) Guidewire Policy Center ( GUIDEWIRE POLICY CENTER ) HAVI Connect ( HAVI CONNECT ) IBM OpenPages ( IBM OPENPAGES ) Ingrian Networks DataSecure Appliance ( INGRIAN NETWORKS DATASECURE APPLIANCE ) iSecurity Security Services and Remediation ( ISECURITY ) iTop ( ITOP ) Microsoft Defender for Office 365 ( MICROSOFT DEFENDER MAIL ) Microsoft Graph Risky Users ( MICROSOFT GRAPH RISKY USERS ) NetApp BlueXP ( NETAPP BLUEXP ) Netgate Firewall ( NETGATE FIREWALL ) 1KOSMOS Identity and Authentication ( ONEKOSMOS ) Palo Alto Global Protect SVC ( PAN GPSVC ) Palo Alto SSLVPN Access ( PAN SSLVPN ACCESS ) Palo Alto Telemetry ( PAN TELEMETRY ) Proofpoint Endpoint Data Loss Prevention ( PROOFPOINT ENDPOINT DLP ) SAP ERP ( SAP ERP ) Ubika WAAP ( UBIKA WAAP ) Webroot Endpoint Protection ( WEBROOT ) Wolters Kluwer Teammate ( WOLTERS KLUWER TEAMMATE ) Xirrus Wireless Controller ( XIRRUS ) For a list of supported log types and details about default parser changes, see Supported log types and default parsers .
- February 23, 2026 Announcement New parser documentation now available New parser documentation is available to help you ingest and normalize logs from the following sources: Collect Big Switch BigCloudFabric logs Collect BMC AMI Defender logs Collect Broadcom Support Portal Audit logs Collect CA ACF2 logs Collect CA LDAP logs Collect ChromeOS XDR logs Collect Chronicle SOAR Audit logs Collect Cisco CTS logs Collect Cisco FireSIGHT Management Center logs Collect Cisco Vision Dynamic Signage Director logs Collect ClamAV logs Collect Cofense logs Collect Crowdstrike IOC logs Collect Custom Application Access logs Collect Custom Security Data Analytics logs Collect Cyber 2.0 IDS logs Collect CyberArk logs Collect Cybereason EDR logs Collect Dataminr Alerts logs Collect Digital Shadows Indicators logs Collect Mimecast Mail V2 logs Collect Okta User Context logs Collect RH-ISAC IOC logs Collect ServiceNow CMDB data February 20, 2026 Feature New capabilities in Feeds page The following options have been added to the Feeds page: Search Filtering (using feed attributes) Pagination Last Refreshed Time Feed Metadata Export to CSV February 12, 2026 Feature Advanced Joins in Search Google SecOps now supports expanded capabilities for correlating data across multiple sources.

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-api-reference`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- March 23, 2026 Announcement New parser documentation now available New parser documentation is available to help you ingest and normalize logs from the following sources: Collect Cisco Umbrella Cloud Firewall logs Collect Cisco Umbrella IP logs Collect Claroty xDome for Healthcare logs Collect CloudM logs Collect Digital Guardian EDR logs Collect DNSFilter logs Collect Dope Security SWG logs Collect Druva Backup logs Collect EfficientIP DDI logs Collect Elastic Defend logs Collect Elastic Windows Event Log Beats logs Collect Ergon Informatik Airlock IAM logs Collect ESET Threat Intelligence logs Collect F5 Distributed Cloud Services logs Collect F5 Shape logs Collect F5 Silverline logs Collect Falco IDS logs Collect Fastly CDN logs Collect File Scanning Framework logs Collect FireEye ETP logs Collect FireEye HX Audit logs Collect FireEye NX Audit logs Collect Fivetran logs Collect Forcepoint Mail Relay logs Collect GitGuardian Enterprise logs Collect Google Cloud Looker audit logs Collect Guardicore Centra logs Collect HCL BigFix logs Collect HID DigitalPersona logs Collect IBM AS/400 logs Collect IBM Informix logs Collect IBM MaaS360 logs Collect IBM Mainframe Storage logs Collect IBM OpenPages logs Collect IBM Security Access Manager logs Collect IBM Security Identity Manager logs Collect iBoss Web Proxy logs Collect Intel 471 Watcher Alerts logs Collect Intel Endpoint Management Assistant logs Collect IONIX Attack Surface Management logs Collect Island Enterprise Browser logs Collect Jamf Protect Telemetry V2 logs Collect Keycloak logs Collect Kong Gateway logs Collect LenelS2 OnGuard logs Collect Lookout Mobile Endpoint Security logs Collect Lucid audit logs Collect ManageEngine Exchange Reporter Plus logs Collect Mandiant Threat Intelligence Custom IOC logs Collect Menlo Security Isolation Platform (MSIP) logs Collect Metabase logs Collect Microsoft Defender for Endpoint on iOS logs Collect Microsoft Dynamics 365 User Activity logs Collect Microsoft IAS / Network Policy Server (NPS) logs Collect Microsoft Network Policy Server (NPS) logs Collect OAuth2 Proxy logs Collect Office 365 Message Trace logs Collect Progress MOVEit Transfer logs Collect Netscout Arbor Sightline logs Collect Skyhigh Secure Web Gateway (On-Premises) logs Collect ThreatDown EDR logs Collect Trellix Endpoint Security (HX) alert logs Collect Trellix Endpoint Security (HX) audit event logs Collect Trellix Endpoint Security (HX) host inventory logs March 20, 2026 Feature View Triage and Investigation Agent (TIN) results in the Case Summary This feature is currently in Preview and is part of a gradual rollout.
- Akamai Log Delivery Service ( AKAMAI LDS ) AudioCodes Voice DNA ( AUDIOCODES ) Amazon API Gateway ( AWS API GATEWAY ) Axway ( AXWAY ) Biztalk ( BIZTALK ) Check Point FDE ( CHECKPOINT FDE ) Cimcor File Integrity Monitoring ( CIMCOR ) CS Alerts ( CS ALERTS ) Custom CSV Log ( CUSTOM CSV LOG ) Cyral ( CYRAL ) Druva ( DRUVA ) Entrust DataControl Audit ( ENTR DATACTRL AUDIT ) Ergon Informatik Airlock IAM ( ERGON INFORMATIK AIRLOCK IAM ) Eset Protect Platform ( ESET PROTECT PLATFORM ) Exim Internet Mailer ( EXIM INTERNET MAILER ) FM Systems Workplace Management ( FM SYSTEMS ) GluWare Network Automation ( GLUWARE NETWORK AUTOMATION ) Guidewire Billing Center ( GUIDEWIRE BILLING CENTER ) Guidewire Claim Center ( GUIDEWIRE CLAIM CENTER ) Guidewire Policy Center ( GUIDEWIRE POLICY CENTER ) HAVI Connect ( HAVI CONNECT ) IBM OpenPages ( IBM OPENPAGES ) Ingrian Networks DataSecure Appliance ( INGRIAN NETWORKS DATASECURE APPLIANCE ) iSecurity Security Services and Remediation ( ISECURITY ) iTop ( ITOP ) Microsoft Defender for Office 365 ( MICROSOFT DEFENDER MAIL ) Microsoft Graph Risky Users ( MICROSOFT GRAPH RISKY USERS ) NetApp BlueXP ( NETAPP BLUEXP ) Netgate Firewall ( NETGATE FIREWALL ) 1KOSMOS Identity and Authentication ( ONEKOSMOS ) Palo Alto Global Protect SVC ( PAN GPSVC ) Palo Alto SSLVPN Access ( PAN SSLVPN ACCESS ) Palo Alto Telemetry ( PAN TELEMETRY ) Proofpoint Endpoint Data Loss Prevention ( PROOFPOINT ENDPOINT DLP ) SAP ERP ( SAP ERP ) Ubika WAAP ( UBIKA WAAP ) Webroot Endpoint Protection ( WEBROOT ) Wolters Kluwer Teammate ( WOLTERS KLUWER TEAMMATE ) Xirrus Wireless Controller ( XIRRUS ) For a list of supported log types and details about default parser changes, see Supported log types and default parsers .
- Threat details page: The related entities, IOC matches, and GTI IOC tables are no longer visible.
- Use the Alerts and IOCs page to view the alerts.

