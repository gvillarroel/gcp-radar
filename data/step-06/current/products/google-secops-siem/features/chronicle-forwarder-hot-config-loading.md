---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:56:14.517Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Chronicle forwarder hot config loading"
feature_slug: "chronicle-forwarder-hot-config-loading"
latest_feature_date: "2023-04-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/soar/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/release-notes"
keywords:
  - "chronicle"
  - "forwarder"
  - "hot"
  - "config"
  - "loading"
  - "applies"
  - "configuration"
  - "changes"
---

# Chronicle forwarder hot config loading

Product: Google SecOps SIEM
Coverage: LOW

## Step 02 Summary

Chronicle forwarder hot config loading applies configuration changes within five minutes without a restart.

## Extended Definition

Chronicle forwarder hot config loading applies configuration changes within five minutes without a restart.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/soar/release-notes](https://docs.cloud.google.com/chronicle/docs/soar/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/release-notes](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/release-notes)

## Supporting Pages

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-api-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Hot config loading is now supported and applies configuration changes within 5 minutes without the need to restart the forwarder.
- April 21, 2023 Change The Chronicle forwarder for Linux has been enhanced with the following changes: After you make a change to a configuration file, either <FORWARDER NAME>.conf or <FORWARDER NAME> auth.conf , the change is automatically applied within 5 minutes.
- The following new fields were added to the Smtp object: helo mail from rcpt to server response message path is webmail is tls For a list of all fields in the Unified Data Model, and their descriptions, see the Unified Data Model field list June 29, 2022 Change Chronicle Forwarder configuration on Linux has been updated to include two separate configuration files.
- Feature You can now create and manage forwarder configurations using the Chronicle user interface and also through the Chronicle Forwarder Management API .

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-api-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Azure App Configuration ( AZURE APPCONFIGURATION ) Azure App Platform ( AZURE APPPLATFORM ) Azure ArcData ( AZURE ARCDATA ) Azure Authorization ( AZURE AUTHORIZATION ) Azure Change Analysis ( AZURE CHANGEANALYSIS ) Azure DataFactory ( AZURE DATAFACTORY ) Doppel ( DOPPEL ) Genian NAC ( GENIAN NAC ) Penta Security Wapples ( PENTA WAPPLES ) Redmine ( REDMINE ) S2W Quaxar ( S2W QUAXAR ) SecurityBridge Dev ( SECURITYBRIDGE DEV ) TeamT5 ThreatSonar EDR ( TEAMT5 THREATSONAR EDR ) WorkDay User Sign In ( WORKDAY USER SIGNIN ) For a list of supported log types and details about default parser changes, see Supported log types and default parsers .
- AWS EC2 Hosts ( AWS EC2 HOSTS ) AWS EC2 Instances ( AWS EC2 INSTANCES ) AWS EC2 VPCs ( AWS EC2 VPCS ) AWS Identity and Access Management ( AWS IAM ) To view a list of log types that Chronicle supports for third-party APIs, see Configuration by log type .
- Forwarder migration tool : provides production-ready paths to migrate existing forwarder configurations into Bindplane-managed pipelines.
- Absolute Secure Endpoint ( ABSOLUTE SECURE ENDPOINT ) Airbus Security Logging (ACD AISD) ( AIRBUS SECURITY LOG ) Azure Recovery Services Vaults ( AZURE RECOVERY SERVICES VAULTS ) Boeing Onboard Network System Logging ( BOEING ONS ) Cisco Firepower Threat Defense ( CISCO FIREPOWER THREAT DEFENSE ) Cisco Security Cloud Control ( CISCO SECURITY CLOUD CONTROL ) Pico Corvilnet Engine ( CORVILNET ENGINE ) CrowdStrike Falcon Shield ( CROWDSTRIKE FALCON SHIELD ) Easy NAC ( EASY NAC ) FairXchange Horizon ( FAIRXCHANGE HORIZON ) Google Threat Intelligence ( GCP THREATINTEL ) HPE Alletra ( HPE ALLETRA ) Huawei Cloud Trace Service Audit ( HUAWEI CTS AUDIT ) Huawei SecMaster ( HUAWEI SECMASTER ) IBM ILO ( IBM ILO ) Infisical ( INFISICAL ) JSCAPE SFTP ( JSCAPE SFTP ) Juniper Edge ( JUNIPER EDGE ) Kaspersky for Microsoft Office 365 ( KASPERSKY O365 EVENTS ) Microsoft Defender for Cloud Apps ( MICROSOFT DEFENDER CLOUD APPS ) Oracle Cloud Infrastructure Network Firewall ( OCI FIREWALL ) Okta Workflows ( OKTA WORKFLOWS ) Phosphorus ( PHOSPHORUS ) Rapid7 Cloud Security ( RAPID7 CLOUDSEC ) Research and Education Networks Information Sharing and Analysis Center ( REN ISAC ) Risk Resecurity ( RISK RESECURITY ) Sangfor Network Detection and Response ( SANGFOR NDR ) SAP Enterprise Threat Detection ( SAP ETD ) SAP IAS Context ( SAP IAS CONTEXT ) Sectigo SCM ( SECTIGO SCM ) ServiceNow Node ( SERVICENOW NODE ) ServiceNow Outbound HTTP ( SERVICENOW OUTBOUNDHTTP ) ServiceNow System log ( SERVICENOW SYSLOG ) ServiceNow Transaction ( SERVICENOW TRANSACTION ) Seti S4 ( SETI S4 ) ThousandEyes ( THOUSAND EYES ) Transmit Security Mosaic CIAM ( TRANSMIT MOSAIC CIAM ) Transmit Security Mosaic Fraud Prevention ( TRANSMIT MOSAIC FRAUD PREVENTION ) Transmit Security Mosaic Identity Verification ( TRANSMIT MOSAIC IDENTITY VERIFICATION ) Transmit Security Mosaic Management ( TRANSMIT MOSAIC MANAGEMENT ) Tripwire Security Configuration Management ( TRIPWIRE SCM ) Valimail ( VALIMAIL ) WSO2 IS AM ( WSO2 IS AM ) XDR.Net Digital Twin ( XDRNET DIGITALTWIN ) Zimbra Mail ( ZIMBRA MAIL ) Zscaler Email DLP ( ZSCALER EMAIL DLP ) November 13, 2025 Feature Raw log search enhancements Google SecOps now includes enhancements to raw log search to boost usability, performance, and data analysis: New filtering options : Filter raw log results by their parsing status or by one or more log sources.

### Google Security Operations SOAR release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/release-notes](https://docs.cloud.google.com/chronicle/docs/soar/release-notes)
- Source ID: `site-api-reference`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Fixed lastLoginTime returns wrong date for SAML users (ID #00278010) Fixed Playbooks with async actions longer than 7 days can't be saved even though time set to 14 days in IDE (ID #00269032) Fixed Wrong error message returned for environment alias duplicates (ID #00271405) Fixed Clicking on events configuration opens the wrong mapping & modeling rules Fixed Incident Manager appearing in navigation even though user doesn"t have license (ID #49062139) March 15, 2024 Announcement Release 6.2.5.0 is now in General Availability.
- Feature Playbook condition branch name field can now hold up to 150 characters (ID #48159735) Fixed Save button not showing when adding lots of list items to the List type action parameter (ID #00266458) Fixed Just-in-Time User Provisioning configuration not available in Okta configuration. (ID #49263630) Fixed IDE - creating an integration or manager with the same name as an existing one results in the wrong error message (ID #47233004) February 09, 2024 Announcement Release 6.2.46 is now in General Availability.
- It is now possible to configure alerts to be dropped if the source environment doesn't exist. (ID #00180834) July 12, 2023 Fixed Release Notes 6.2.30: Playbooks not always saved correctly within Platform (ID #00243484) amic include /release-notes/ chronicle-soar %} Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The admin needs to change the default timezone to the required timezone if needed. (ID #51914939, #52558921) Fixed Custom SMTP Configuration does not send emails with send mail function in monitoring jobs (ID #52614371) October 20, 2024 Announcement Release 6.3.22 is now in General Availability.

### "Google SecOps Response Integrations release notes \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/release-notes](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/release-notes)
- Source ID: `site-api-reference`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- November 26, 2025 Feature Google Chronicle : Version 69.0 The following new actions have been added: Generate UDM Query Add Entry To Watchlist Change Jira : Version 50.0 Improved handling of comments with additional styling in the following action: Add Comment Improved handling of comments with additional styling in the following job: Sync Comments Change Urlscan.io : Version 27.0 Added support for the Domain entity in the following action: Search For Scans Change Updated the dependency files in the following integrations: Exchange : Version 117.0 HTTP V2 : Version 10.0 Change CSV : Version 37.0 Updated support for nested JSONs in the following action: Save Json to CSV November 19, 2025 Feature Google Threat Intelligence : Version 6.0 The following new action has been added: Get Related Associations Change SentinelOneV2 : Version 44.0 Updated the mechanism for fetching agent information in the following actions: Disconnect Agent From Network Enrich Endpoint Get Agent Status Get Application List For Endpoint Get Events For Endpoint Hours Back Initiate Full Scan Move Agents Reconnect Agent To The Network Change Okta : Version 11.0 Updated the pagination processing mechanism in the following actions: List Users Add Group Get Group List Providers Change Google Chronicle : Version 68.0 Improved error handling in the following jobs: Google Chronicle Sync Job Google Chronicle Alerts Creator Job Change Cofense Triage : Version 14.0 Added the ability to filter based on category to the following connector: Cofense Triage - Reports Connector Change Splunk : Version 59.0 Refactored the following integration items to use the new API endpoints: Ping Get Host Events Splunk Notable Events Connector Sync Splunk ES Closed Events Sync Splunk ES Comments November 12, 2025 Change Google Security Command Center : Version 14.0 Added the ability to ingest Toxic Combinations and Chokepoints in the following connector: Google Security Command Center - Findings Connector Change Updated the dependency files in the following integrations: Microsoft Graph Mail : Version 33.0 Microsoft Graph Mail Delegated : Version 10.0 Change The following integrations are now GUS recommended: CrowdStrike Falcon : Version 69.0 Wiz : Version 3.0 Fortigate : Version 16.0 Change Google Chronicle : Version 67.0 Updated curated detections processing logic in the following action: Get Detection Details Change Cybereason : Version 21.0 Integration : Added ability to provide a CA Certificate file as part of the configuration.
- Change Palo Alto Cortex XDR : Version 22.0 Updated the event processing and dynamic list handling of the following connector: Palo Alto Cortex XDR Connector Added the ability to ignore certain types of artifacts to the following connector: Palo Alto Cortex XDR Connector February 04, 2026 Change Azure Security Center : Version 13.0 Updated the configuration ( Connector.def ) of the following connector: Azure Security Center - Security Alerts Connector Change Google Chronicle : Version 75.0 Optimized performance for large data tables in the following actions: Is Value In Data Table Remove Rows From Data Table Change Siemplify : Version 102.0 Refactored the following actions: Get Case Details Wait For Custom Fields Set Custom Fields Get Similar Cases Get Custom Field Values Export Case Updated error handling in the following action: Assign Case Change Siemplify ThreatFuse : Version 16.0 Updated the configuration ( Connector.def ) of the following connector:: Siemplify ThreatFuse - Observables Connector January 28, 2026 Feature Google Threat Intelligence : Version 8.0 The following new actions have been added: Add ASM Issue Note Add Tag To DTM Alert Change Azure Active Directory : Version 22.0 Added the ability to fetch MFA information to the following actions: Enrich User Get Manager Contact Details Change Jira : Version 52.0 Optimized ticket processing workflows in the following job: Sync Closure Job Change Proofpoint Cloud Threat Response : Version 2.0 Integration : Updated dependencies.
- Change Freshworks Freshservice : Version 14.0 Added ability to define the workspace in the following action: List Tickets Added ability to define the workspace in the following connector: Freshworks Freshservice - Tickets Connector Change Orca Security : Version 11.0 Added ability to work with Orca Score in the following connecctor: Orca Security - Alerts Connector Change Google Chronicle : Version 48.0 Updated ontology mapping in the following connector: Google Chronicle - Alerts Connector Change ThreatConnect : Version 14.0 Integration : Updated integration configuration parameters.
- Change Any.Run : Version 7.0 Due to the changes of the Any.Run API, the following actions have been updated (The opt network heavyevasion action input parameter was replaced with opt kernel heavyevasion and the opt network geo action input parameter value "Fastest" was replaced with "fastest"): Analyze File Analyze File URL Analyze URL Change Google Cloud Compute : Version 13.0 Extended capabilities of the following action: Update Firewall Rule Integration : Added the ability to provide the API Root in the integration configuration.

