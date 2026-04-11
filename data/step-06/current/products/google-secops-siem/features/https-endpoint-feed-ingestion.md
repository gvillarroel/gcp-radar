---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:56:14.458Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "HTTPS endpoint feed ingestion"
feature_slug: "https-endpoint-feed-ingestion"
latest_feature_date: "2024-04-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
  - "https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs"
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
keywords:
  - "https"
  - "endpoint"
  - "feed"
  - "ingestion"
  - "secops"
  - "can"
  - "ingest"
  - "logs"
---

# HTTPS endpoint feed ingestion

Product: Google SecOps SIEM
Coverage: LOW

## Step 02 Summary

Google SecOps can ingest logs through feeds that push data to an HTTPS endpoint using the feed management UI or API.

## Extended Definition

Google SecOps can ingest logs through feeds that push data to an HTTPS endpoint using the feed management UI or API.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs](https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs)
- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)

## Supporting Pages

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-root`
- Final score: 200
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following table outlines the different file sizes that Google SecOps feeds transformation supports: Operation Input type Recommended size Expected duration Max size Data Modeling CSV 10 GB Data Modeling CSV 30 min 10 GB Data Modeling CSV TBD TBD 2 GB Data Modeling XML / JSON 2 GB Data Modeling XLS / XLSX 1 min 50 MB Merge Files Any Varies on number of files 100 GB Decompress Files Non-ZIP Varies on number of files 10 GB (uncompressed) Decompress Files ZIP - Varies on number of files 4 GB (uncompressed) Log line limits and delimiters When ingesting text-based logs (JSON, CSV, or Syslog), ensure your data adheres to these specific ingestion limits: Maximum Line Size : A single log line cannot exceed 4MB .
- Impact of changing your linked Cloud Project on data feeds If you are updating the Google Cloud project associated with your Google SecOps instance, all feeds ingesting data using the following connectors will stop, and must be re-created manually: AMAZON S3 V2 AMAZON SQS V2 GOOGLE CLOUD STORAGE V2 AZURE BLOBSTORE V2 GOOGLE CLOUD STORAGE EVENT DRIVEN For all other feeds that are not utilizing these connectors, ingestion continues without any interruption.
- Monitor the feed status You can monitor the status of the feed on the initial Feeds page, where feeds can have the following statuses: Active : Feed is configured and ready to ingest data into your Google SecOps account.
- Send multiple events in a single webhook request The following code sample shows how to format a single request body with multiple, newline-separated JSON objects after the curl --location item: --header 'Content-Type: application/json' \ --header 'X-goog-api-key: API KEY' \ --header 'X-Webhook-Access-Key: SECRET' \ --data '{"principal": {"asset id": "asset 123"}, "metadata": {"event type": "GENERIC EVENT", "product name": "Product Acme"}} {"principal": {"asset id": "asset 123"}, "metadata": {"event type": "GENERIC EVENT", "product name": "Product Acme"}}' Create an HTTPS webhook feed In the Google SecOps menu, select Settings , and then click Feeds .

### "Ingest Google Cloud data \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs](https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs)
- Source ID: `site-api-reference`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Available log types include: Cloud Audit Logs Cloud NAT Cloud DNS Cloud Next Generation Firewall Cloud Intrusion Detection System Cloud Load Balancing Cloud SQL Windows Event logs Linux syslog Linux Sysmon Zeek Google Kubernetes Engine Audit Daemon ( auditd ) Apigee reCAPTCHA Enterprise Cloud Run logs ( GCP RUN ) Google Cloud Abuse Events Google Cloud DNS Advanced Threat Detection ( GCP DNS ATD ) Model Armor logs For details about the specific log filters and more ingestion details, see Export Google Cloud logs to Google SecOps.
- The following list is organized by log type and corresponding Google SecOps ingestion label: Cloud Audit Logs ( GCP CLOUDAUDIT ): This includes Admin Activity, Data Access, System Event, Access Transparency, and Policy Denied logs.
- When you configure Google Cloud data ingestion, Google SecOps doesn't create any resource in your Google Cloud organization; the internal system publishes Google Cloud logs to Google SecOps.
- For more information about exporting specific context logs and ingesting them into Google SecOps, see Default parser configuration and ingestion and search for 'context' or 'analysis'.

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-api-reference`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- You can use the following feed management source types to set up ingestion using an HTTPS endpoint: Amazon Data Firehose Google Cloud Pub/Sub Webhooks You can also generate a secret key and API key to authenticate feeds that use Amazon Data Firehose and webhooks as the feed source type.
- January 21, 2026 Feature Direct ingestion for Google Cloud Model Armor logs You can now ingest Google Cloud Model Armor logs ( GCP MODEL ARMOR ) directly into Google SecOps.
- April 26, 2024 Feature You can now set up feeds to push logs using an HTTPS endpoint by using either the feed management user interface or the feed management API .
- Abnormal Security ( ABNORMAL SECURITY ) Akamai DNS ( AKAMAI DNS ) Akamai WAF ( AKAMAI WAF ) Apigee ( GCP APIGEE X ) Array Networks SSL VPN ( ARRAYNETWORKS VPN ) AWS CloudFront ( AWS CLOUDFRONT ) AWS Cloudtrail ( AWS CLOUDTRAIL ) Azure AD ( AZURE AD ) Azure AD Directory Audit ( AZURE AD AUDIT ) Azure AD Sign-In ( AZURE AD SIGNIN ) Barracuda Email ( BARRACUDA EMAIL ) Barracuda Firewall ( BARRACUDA FIREWALL ) Blue Coat Proxy ( BLUECOAT WEBPROXY ) BMC AMI Defender ( BMC AMI DEFENDER ) Carbon Black ( CB EDR ) Check Point ( CHECKPOINT FIREWALL ) Check Point Sandblast ( CHECKPOINT EDR ) Checkpoint Audit ( CHECKPOINT AUDIT ) Cisco AMP ( CISCO AMP ) Cisco EStreamer ( CISCO ESTREAMER ) Cisco FireSIGHT Management Center ( CISCO FIRESIGHT ) Cisco ISE ( CISCO ISE ) Cisco Router ( CISCO ROUTER ) Cisco Switch ( CISCO SWITCH ) Cisco Umbrella DNS ( UMBRELLA DNS ) Cisco VPN ( CISCO VPN ) Cisco WLC/WCS ( CISCO WIRELESS ) Citrix Netscaler ( CITRIX NETSCALER ) Cloud Audit Logs ( N/A ) Cloud SQL ( GCP CLOUDSQL ) Cloud Storage Context ( N/A ) Cohesity ( COHESITY ) CrowdStrike Falcon ( CS EDR ) CyberArk Privileged Access Manager (PAM) ( CYBERARK PAM ) ESET AV ( ESET AV ) F5 ASM ( F5 ASM ) F5 BIGIP LTM ( F5 BIGIP LTM ) F5 VPN ( F5 VPN ) Forcepoint DLP ( FORCEPOINT DLP ) FortiGate ( FORTINET FIREWALL ) GMAIL Logs ( GMAIL LOGS ) HID DigitalPersona ( HID DIGITALPERSONA ) Honeyd ( HONEYD ) HP Aruba (ClearPass) ( CLEARPASS ) IBM AS/400 ( IBM AS400 ) IBM DS8000 Storage ( IBM DS8000 ) IBM Security Verify ( IBM SECURITY VERIFY ) Infoblox ( INFOBLOX ) Island Browser logs ( ISLAND BROWSER ) JAMF CMDB ( JAMF ) JumpCloud Directory Insights ( JUMPCLOUD DIRECTORY INSIGHTS ) Juniper Mist ( JUNIPER MIST ) Kubernetes Node ( KUBERNETES NODE ) Linux Auditing System (AuditD) ( AUDITD ) ManageEngine ADAudit Plus ( ADAUDIT PLUS ) Microsoft AD FS ( ADFS ) Microsoft Azure Activity ( AZURE ACTIVITY ) Microsoft Azure Resource ( AZURE RESOURCE LOGS ) Microsoft CyberX ( CYBERX ) Microsoft Defender for Endpoint ( MICROSOFT DEFENDER ENDPOINT ) Microsoft Graph Activity Logs ( MICROSOFT GRAPH ACTIVITY LOGS ) Microsoft Graph API Alerts ( MICROSOFT GRAPH ALERT ) Microsoft SQL Server ( MICROSOFT SQL ) Mikrotik Router ( MIKROTIK ROUTER ) NetDocuments Solutions ( NETDOCUMENTS ) Netwrix ( NETWRIX ) Office 365 ( OFFICE 365 ) Office 365 Message Trace ( OFFICE 365 MESSAGETRACE ) Okta ( OKTA ) OneLogin ( ONELOGIN SSO ) Opengear Remote Management ( OPENGEAR ) Palo Alto Networks Firewall ( PAN FIREWALL ) pfSense ( PFSENSE ) PostFix Mail ( POSTFIX MAIL ) Proofpoint Sendmail Sentrion ( PROOFPOINT SENDMAIL SENTRION ) Proofpoint Tap Alerts ( PROOFPOINT MAIL ) Pulse Secure ( PULSE SECURE VPN ) Qumulo FS ( QUMULO FS ) Rapid7 ( RAPID7 NEXPOSE ) Rapid7 Insight ( RAPID7 INSIGHT ) Rubrik Polaris ( RUBRIK POLARIS ) SailPoint IAM ( SAILPOINT IAM ) SAP SuccessFactors ( SAP SUCCESSFACTORS ) Semperis DSP ( SEMPERIS DSP ) Sentinelone Alerts ( SENTINELONE ALERT ) SentinelOne EDR ( SENTINEL EDR ) Signal Sciences WAF ( SIGNAL SCIENCES WAF ) Snare System Diagnostic Logs ( SNARE SOLUTIONS ) SonicWall ( SONIC FIREWALL ) Sophos Central ( SOPHOS CENTRAL ) Sophos UTM ( SOPHOS UTM ) Spur data feeds ( SPUR FEEDS ) Suricata EVE ( SURICATA EVE ) Symantec DLP ( SYMANTEC DLP ) Symantec Endpoint Protection ( SEP ) Symantec VIP Authentication Hub ( SYMANTEC VIP AUTHHUB ) Tanium Audit ( TANIUM AUDIT ) Thinkst Canary ( THINKST CANARY ) Trend Micro Vision One ( TRENDMICRO VISION ONE ) Twingate ( TWINGATE ) Unix system ( NIX SYSTEM ) Vectra Detect ( VECTRA DETECT ) Veeam ( VEEAM ) Verba Recording System ( VERBA REC ) VeridiumID by Veridium ( VERIDIUM ID ) VMware ESXi ( VMWARE ESX ) Windows Defender ATP ( WINDOWS DEFENDER ATP ) Windows DNS ( WINDOWS DNS ) Windows Event ( WINEVTLOG ) Windows Event (XML) ( WINEVTLOG XML ) Winscp ( WINSCP ) WordPress ( WORDPRESS CMS ) Workspace Activities ( WORKSPACE ACTIVITY ) Zeek TSV ( BRO TSV ) Zix Email Encryption ( ZIX EMAIL ENCRYPTION ) Zscaler ( ZSCALER WEBPROXY ) ZScaler DNS ( ZSCALER DNS ) Zscaler Private Access ( ZSCALER ZPA ) The following log types, without a default parser, were added.

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-api-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- You can use the following feed management source types to set up ingestion using an HTTPS endpoint: Amazon Data Firehose Google Cloud Pub/Sub Webhooks You can also generate a secret key and API key to authenticate feeds that use Amazon Data Firehose and webhooks as the feed source type.
- March 23, 2026 Announcement New parser documentation now available New parser documentation is available to help you ingest and normalize logs from the following sources: Collect Cisco Umbrella Cloud Firewall logs Collect Cisco Umbrella IP logs Collect Claroty xDome for Healthcare logs Collect CloudM logs Collect Digital Guardian EDR logs Collect DNSFilter logs Collect Dope Security SWG logs Collect Druva Backup logs Collect EfficientIP DDI logs Collect Elastic Defend logs Collect Elastic Windows Event Log Beats logs Collect Ergon Informatik Airlock IAM logs Collect ESET Threat Intelligence logs Collect F5 Distributed Cloud Services logs Collect F5 Shape logs Collect F5 Silverline logs Collect Falco IDS logs Collect Fastly CDN logs Collect File Scanning Framework logs Collect FireEye ETP logs Collect FireEye HX Audit logs Collect FireEye NX Audit logs Collect Fivetran logs Collect Forcepoint Mail Relay logs Collect GitGuardian Enterprise logs Collect Google Cloud Looker audit logs Collect Guardicore Centra logs Collect HCL BigFix logs Collect HID DigitalPersona logs Collect IBM AS/400 logs Collect IBM Informix logs Collect IBM MaaS360 logs Collect IBM Mainframe Storage logs Collect IBM OpenPages logs Collect IBM Security Access Manager logs Collect IBM Security Identity Manager logs Collect iBoss Web Proxy logs Collect Intel 471 Watcher Alerts logs Collect Intel Endpoint Management Assistant logs Collect IONIX Attack Surface Management logs Collect Island Enterprise Browser logs Collect Jamf Protect Telemetry V2 logs Collect Keycloak logs Collect Kong Gateway logs Collect LenelS2 OnGuard logs Collect Lookout Mobile Endpoint Security logs Collect Lucid audit logs Collect ManageEngine Exchange Reporter Plus logs Collect Mandiant Threat Intelligence Custom IOC logs Collect Menlo Security Isolation Platform (MSIP) logs Collect Metabase logs Collect Microsoft Defender for Endpoint on iOS logs Collect Microsoft Dynamics 365 User Activity logs Collect Microsoft IAS / Network Policy Server (NPS) logs Collect Microsoft Network Policy Server (NPS) logs Collect OAuth2 Proxy logs Collect Office 365 Message Trace logs Collect Progress MOVEit Transfer logs Collect Netscout Arbor Sightline logs Collect Skyhigh Secure Web Gateway (On-Premises) logs Collect ThreatDown EDR logs Collect Trellix Endpoint Security (HX) alert logs Collect Trellix Endpoint Security (HX) audit event logs Collect Trellix Endpoint Security (HX) host inventory logs March 18, 2026 Feature Bindplane features for Google SecOps general availability The following Bindplane features that relate to Google SecOps are now in General Availability (GA): Single sign-on with custom claims role mapping : gives a production-ready way to manage Bindplane access through your identity provider.
- January 21, 2026 Feature Direct ingestion for Google Cloud Model Armor logs You can now ingest Google Cloud Model Armor logs ( GCP MODEL ARMOR ) directly into Google SecOps.
- April 26, 2024 Feature You can now set up feeds to push logs using an HTTPS endpoint by using either the feed management user interface or the feed management API .

