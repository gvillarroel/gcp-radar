---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:56:14.362Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Product-centric feeds permissions"
feature_slug: "product-centric-feeds-permissions"
latest_feature_date: "2025-08-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
  - "https://docs.cloud.google.com/chronicle/docs/soar/release-notes"
keywords:
  - "product"
  - "centric"
  - "feeds"
  - "permissions"
  - "exposes"
  - "for"
  - "managing"
  - "through"
---

# Product-centric feeds permissions

Product: Google SecOps SIEM
Coverage: LOW

## Step 02 Summary

Exposes permissions for managing product-centric feeds through custom IAM roles.

## Extended Definition

Exposes permissions for managing product-centric feeds through custom IAM roles.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/soar/release-notes](https://docs.cloud.google.com/chronicle/docs/soar/release-notes)

## Supporting Pages

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-api-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- Feature Updated permissions for accessing product-centric feeds If you have assigned Custom IAM Roles , you can now grant access to the product-centric feeds by adding the following permissions to the role: chronicle.feedPacks.get chronicle.feedPacks.list To learn more about how to configure feeds using the product-centric feeds UI, see Configure feeds by product.
- March 18, 2026 Feature Bindplane features for Google SecOps general availability The following Bindplane features that relate to Google SecOps are now in General Availability (GA): Single sign-on with custom claims role mapping : gives a production-ready way to manage Bindplane access through your identity provider.
- You can now configure multiple log-type feeds for the same product type on a single page.
- For more information, see Configure feeds by product .

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-api-reference`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- August 10, 2025 Feature Updated permissions for accessing product-centric feeds If you have assigned Custom IAM Roles , you can now grant access to the product-centric feeds by adding the following permissions to the role: chronicle.feedPacks.get chronicle.feedPacks.list To learn more about how to configure feeds using the product-centric feeds UI, see Configure feeds by product.
- March 23, 2026 Announcement New parser documentation now available New parser documentation is available to help you ingest and normalize logs from the following sources: Collect Cisco Umbrella Cloud Firewall logs Collect Cisco Umbrella IP logs Collect Claroty xDome for Healthcare logs Collect CloudM logs Collect Digital Guardian EDR logs Collect DNSFilter logs Collect Dope Security SWG logs Collect Druva Backup logs Collect EfficientIP DDI logs Collect Elastic Defend logs Collect Elastic Windows Event Log Beats logs Collect Ergon Informatik Airlock IAM logs Collect ESET Threat Intelligence logs Collect F5 Distributed Cloud Services logs Collect F5 Shape logs Collect F5 Silverline logs Collect Falco IDS logs Collect Fastly CDN logs Collect File Scanning Framework logs Collect FireEye ETP logs Collect FireEye HX Audit logs Collect FireEye NX Audit logs Collect Fivetran logs Collect Forcepoint Mail Relay logs Collect GitGuardian Enterprise logs Collect Google Cloud Looker audit logs Collect Guardicore Centra logs Collect HCL BigFix logs Collect HID DigitalPersona logs Collect IBM AS/400 logs Collect IBM Informix logs Collect IBM MaaS360 logs Collect IBM Mainframe Storage logs Collect IBM OpenPages logs Collect IBM Security Access Manager logs Collect IBM Security Identity Manager logs Collect iBoss Web Proxy logs Collect Intel 471 Watcher Alerts logs Collect Intel Endpoint Management Assistant logs Collect IONIX Attack Surface Management logs Collect Island Enterprise Browser logs Collect Jamf Protect Telemetry V2 logs Collect Keycloak logs Collect Kong Gateway logs Collect LenelS2 OnGuard logs Collect Lookout Mobile Endpoint Security logs Collect Lucid audit logs Collect ManageEngine Exchange Reporter Plus logs Collect Mandiant Threat Intelligence Custom IOC logs Collect Menlo Security Isolation Platform (MSIP) logs Collect Metabase logs Collect Microsoft Defender for Endpoint on iOS logs Collect Microsoft Dynamics 365 User Activity logs Collect Microsoft IAS / Network Policy Server (NPS) logs Collect Microsoft Network Policy Server (NPS) logs Collect OAuth2 Proxy logs Collect Office 365 Message Trace logs Collect Progress MOVEit Transfer logs Collect Netscout Arbor Sightline logs Collect Skyhigh Secure Web Gateway (On-Premises) logs Collect ThreatDown EDR logs Collect Trellix Endpoint Security (HX) alert logs Collect Trellix Endpoint Security (HX) audit event logs Collect Trellix Endpoint Security (HX) host inventory logs March 18, 2026 Feature Bindplane features for Google SecOps general availability The following Bindplane features that relate to Google SecOps are now in General Availability (GA): Single sign-on with custom claims role mapping : gives a production-ready way to manage Bindplane access through your identity provider.
- June 23, 2025 Announcement New parser documentation now available New parser documentation is available to help you ingest and normalize logs from the following sources: Collect BeyondTrust BeyondInsight logs Collect BloxOne Threat Defense logs Collect BlueCat Edge DNS Resolver logs Collect Cambium Networks logs Collect Check Point Audit logs Collect Check Point EDR logs Collect Check Point SmartDefense logs Collect Commvault logs Collect Comodo AV logs Collect Cylance PROTECT logs Collect Cyolo OT logs Collect Delinea PAM logs Collect Dell CyberSense logs Collect Dell EMC Data Domain logs Collect Dell EMC Isilon NAS logs Collect Dell EMC PowerStore logs Collect Dell OpenManage logs Collect Endpoint Protector DLP logs Collect ESET AV logs Collect ESET EDR logs Collect F5 AFM logs Collect F5 ASM logs Collect FileZilla FTP logs Collect Forescout NAC logs Collect ForgeRock OpenAM logs Collect HAProxy logs Collect Kaseya Datto File Protection logs Collect ManageEngine AD360 logs Collect Palo Alto Cortex XDR Events logs Collect Snowflake logs Collect Trellix DLP logs Collect Trellix ePO logs Collect Trend Micro DDI logs Collect Trend Micro Email Security logs Collect Trend Micro Vision One Activity logs Collect Trend Micro Vision One Audit logs Collect Trend Micro Vision One Container Vulnerability logs Collect Trend Micro Vision One Detections logs Collect Trend Micro Vision One Observed Attack Techniques logs Collect Trend Micro Vision One Workbench logs June 19, 2025 Feature Product Centric Feed Management This feature is currently in Preview.
- You can now configure multiple log-type feeds for the same product type on a single page.

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Send multiple events in a single webhook request The following code sample shows how to format a single request body with multiple, newline-separated JSON objects after the curl --location item: --header 'Content-Type: application/json' \ --header 'X-goog-api-key: API KEY' \ --header 'X-Webhook-Access-Key: SECRET' \ --data '{"principal": {"asset id": "asset 123"}, "metadata": {"event type": "GENERIC EVENT", "product name": "Product Acme"}} {"principal": {"asset id": "asset 123"}, "metadata": {"event type": "GENERIC EVENT", "product name": "Product Acme"}}' Create an HTTPS webhook feed In the Google SecOps menu, select Settings , and then click Feeds .
- Configure multiple feeds for a product family (Google SecOps customers only) You can configure multiple feeds per product family, based on log type.
- Refer to the feeds documentation for the necessary permissions.
- Sample egress rule "egressPolicies" : [ { "egressFrom": { "identities": [ "serviceAccount:service-{replace with project id}@gs-project-accounts.iam.gserviceaccount.com" ] } , "egressTo" : { "operations" : [ { "methodSelectors": [ { "method": " " } ] , "serviceName" : "pubsub.googleapis.com" } ] , "resources" : [ " " ] } , "title" : "GCS pubsub access" } , { "egressFrom" : { "identities" : [ "serviceAccount:project-{replace with project id}@storage-transfer-service.iam.gserviceaccount.com" ] } , "egressTo" : { "operations" : [ { "methodSelectors": [ { "method": " " } ] , "serviceName" : "pubsub.googleapis.com" } ] , "resources" : [ " " ] } , "title" : "STS pubsub" } ] Enable STS access for Amazon S3 and Azure Storage The STS is used by the following Google Cloud Storage feeds to transfer data from Amazon S3 and Azure Storage blobstores to Google SecOps: Amazon S3 (V2) Amazon SQS (V2) Azure Blob Storage (V2) STS sends data transfer requests to the Amazon S3 and Azure storage services from a set of defined STS IP address ranges.

### Google Security Operations SOAR release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/release-notes](https://docs.cloud.google.com/chronicle/docs/soar/release-notes)
- Source ID: `site-api-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Fixed Error when trying to log in again to Chronicle SOAR (ID #46831483) Email HTML template shows blank page in Settings (ID #46912863) Users filter in the Search page not displaying all the users (ID #00249930) Active Directory Groups field removed from Settings Permission groups as it is not supported October 24, 2023 Feature Remote Agents 1.4.4 Added support for all SDK calls over remote agents Improved managing integrations over the remote agent leading to a more overall stable product experience Publisher Python version upgraded to Python 3.11 Fixed Remote Agents 1.4.4 Remote agent actions do not return script results in the same way local actions return them (ID #45682680) Users unable to change the remote agent environment via agent CLI October 03, 2023 Fixed Release 6.2.36 GA - 14th October, 2023 Internal security fixes September 27, 2023 Feature Release Notes 6.2.35 GA - 8th October Risk Score and Severity added Two new information fields have been added to the Alert Details widget which appears in the Alert overview tab.
- Feature It is now possible to merge cases where the requester is not the assignee both in the platform and through the API endpoint: api/external/v1/cases-queue/bulk-operations/MergeCases Fixed Timeout error for playbook action (ID #52418008) Fixed Time Zone sync issue (ID #52421707) Fixed Remote agents not visible in the drop-down field. (ID #53299495) Fixed Inaccurate case tag data in Advanced Reports (ID #00308538) Fixed Tags are displayed in the database after being deleted from the platform (ID #53263012) Fixed Custom integration is reverted to the latest imported code after saving custom integration settings. (ID #53578268) Fixed Timeout error when trying to add an alert grouping rule. (ID #00298026) September 23, 2024 Announcement Release 6.3.18 is now in General Availability.
- You can see the latest product updates for all of Google Cloud on the Google Cloud page, browse and filter all release notes in the Google Cloud console , or programmatically access release notes in BigQuery .
- Feature Playbook Permissions: Support for API Key Roles The platform has been updated to extend playbook permissions to also support the SOC Roles associated with API keys, in addition to the user SOC Roles.

