---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:56:14.389Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Detection table UI APIs"
feature_slug: "detection-table-ui-apis"
latest_feature_date: "2025-05-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api"
  - "https://docs.cloud.google.com/chronicle/docs/administration/feed-management"
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
keywords:
  - "detection"
  - "table"
  - "ui"
  - "apis"
  - "new"
  - "for"
  - "the"
  - "page"
---

# Detection table UI APIs

Product: Google SecOps SIEM
Coverage: LOW

## Step 02 Summary

New APIs for the detection UI page may require updated permissions for custom roles.

## Extended Definition

New APIs for the detection UI page may require updated permissions for custom roles.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api)
- [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Supported fields You can download the following fields to a CSV file from the platform: user hostname process name event type timestamp raw log (valid only when raw logs are enabled for the customer) All fields starting with udm.additional Valid field types You can download the following field types to a CSV file: double float int32 uint32 int64 uint64 bool string enum bytes google.protobuf.Timestamp google.protobuf.Duration Unsupported fields Fields that start with "udm" (not udm.additional) and meet either of the following conditions cannot be downloaded to CSV: The nesting of the field is more than 10 deep in udm proto.
- When searching Values , UDM Lookup displays Possible value match when a match is found in the following cases: Matches in the following UDM fields: metadata.description security result.description security result.detection fields.value security result.summary network.http.user agent Matches in fields with a full path that ends in one of the following values: .command line For example principal.process.command line . .file.full path For example principal.process.file.full path . .labels.value For example src.labels.value . .registry.registry key For example principal.registry.registry key . .url For example principal.url .
- It then matches those events against the hostnames column and the ip column in the badApps data table. events: $e.metadata.event type = "NETWORK CONNECTION" $e.security result.action = "ALLOW" $e.target.asset.asset id = $assetid // Event hostname matches at least one value in table column hostname. $e.target.hostname in %badApps.hostname // Event IP matches at least one value in table column ip. $e.target.ip in %badApps.ip For more information, see Use data tables .
- Format the data value to search for Format the data value using the following guidelines: Data type: Format the data value based it's the data type: Enumerated values: Use a valid enumerated value defined for the selected UDM field.

### Detection Engine \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api](https://docs.cloud.google.com/chronicle/docs/reference/detection-engine-api)
- Source ID: `site-api-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Use the following format to specify the rule: {ruleId}@v {int64} {int64} Sample request https://backstory.googleapis.com/v2/detect/rules/ru 1f54ab4b-e523-48f7-ae25-271b5ea8337d/detections/de eaccfe15-5fe6-0cf3-b54c-2d6435f53ee4 Response Response fields Field Name Type type string Type of detection (type is always RULE DETECTION). detection.ruleName string Name of the rule generating the detection, as parsed from ruleText. detection.ruleId string Identifier for the rule generating the detection. detection.ruleVersion string Identifier for the rule version generating the detection. detection.alertState string Indicates whether the rule generating this detection currently has alerting enabled or disabled. detection.ruleType string Whether the rule generating this detection is a single event or multi-event rule ("SINGLE EVENT" or "MULTI EVENT"). detection.urlBackToProduct string URL pointing to the Google SecOps application page for this detection. detection.description string Description of the rule that generated the detection.
- Request Detections for the latest version of a rule with a given rule identifier: GET https://backstory.googleapis.com/v2/detect/rules/{ruleId}/detections Detections for a specific version of a rule with a given version identifier: GET https://backstory.googleapis.com/v2/detect/rules/{versionId}/detections Detections for the all versions of a rule with a given rule identifier: GET https://backstory.googleapis.com/v2/detect/rules/{ruleId}@-/detections Detections for all versions of all rules: GET https://backstory.googleapis.com/v2/detect/rules/-/detections URL parameters Parameter Name Type Required Description alert state enum Optional Filter detections on if they are "ALERTING" or "NOT ALERTING" detection start time (deprecated) string Optional Time to begin returning detections, filtering on a detection's "detectionTime".
- Sample request (specific version of a rule) https://backstory.googleapis.com/v2/detect/rules/ru 1f54ab4b-e523-48f7-ae25- 271b5ea8337d@v 1602631093 146879000/detections?page size=2 Sample request (latest version of a rule) https://backstory.googleapis.com/v2/detect/rules/ru 1f54ab4b-e523-48f7-ae25- 271b5ea8337d/detections?page size=2 Sample request (all versions of a rule) https://backstory.googleapis.com/v2/detect/rules/ru 1f54ab4b-e523-48f7-ae25- 271b5ea8337d@-/detections?page size=100 Sample request (all versions of all rules, ordered by CreateTimestamp) https://backstory.googleapis.com/v2/detect/rules/-/detections? page size=100&list basis=CREATED TIME Response Response fields Field Name Type detections array Array of detections in the same format defined for GetDetection . nextPageToken string Page token.
- Request Listing retrohunts for the latest version of a rule: GET https://backstory.googleapis.com/v2/detect/rules/{ruleId}/retrohunts/ Listing retrohunts for a specific version of a rule: GET https://backstory.googleapis.com/v2/detect/rules/{versionId}/retrohunts/ Listing retrohunts for all versions of a rule: GET https://backstory.googleapis.com/v2/detect/rules/{ruleId}@-/retrohunts/ Listing retrohunts for all versions of all rules: GET https://backstory.googleapis.com/v2/detect/rules/-/retrohunts/ URL parameters Parameter Name Type Required Description page size integer Optional Specify the maximum number of retrohunts to return (range is 1 through 1,000).

### "Use the Feed Management UI \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/feed-management](https://docs.cloud.google.com/chronicle/docs/administration/feed-management)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Required actions for customers To ensure continuous data ingestion, you must manually re-create your feeds in the new environment.
- Sample egress rule "egressPolicies" : [ { "egressFrom": { "identities": [ "serviceAccount:service-{replace with project id}@gs-project-accounts.iam.gserviceaccount.com" ] } , "egressTo" : { "operations" : [ { "methodSelectors": [ { "method": " " } ] , "serviceName" : "pubsub.googleapis.com" } ] , "resources" : [ " " ] } , "title" : "GCS pubsub access" } , { "egressFrom" : { "identities" : [ "serviceAccount:project-{replace with project id}@storage-transfer-service.iam.gserviceaccount.com" ] } , "egressTo" : { "operations" : [ { "methodSelectors": [ { "method": " " } ] , "serviceName" : "pubsub.googleapis.com" } ] , "resources" : [ " " ] } , "title" : "STS pubsub" } ] Enable STS access for Amazon S3 and Azure Storage The STS is used by the following Google Cloud Storage feeds to transfer data from Amazon S3 and Azure Storage blobstores to Google SecOps: Amazon S3 (V2) Amazon SQS (V2) Azure Blob Storage (V2) STS sends data transfer requests to the Amazon S3 and Azure storage services from a set of defined STS IP address ranges.
- The following table outlines the different file sizes that Google SecOps feeds transformation supports: Operation Input type Recommended size Expected duration Max size Data Modeling CSV 10 GB Data Modeling CSV 30 min 10 GB Data Modeling CSV TBD TBD 2 GB Data Modeling XML / JSON 2 GB Data Modeling XLS / XLSX 1 min 50 MB Merge Files Any Varies on number of files 100 GB Decompress Files Non-ZIP Varies on number of files 10 GB (uncompressed) Decompress Files ZIP - Varies on number of files 4 GB (uncompressed) Log line limits and delimiters When ingesting text-based logs (JSON, CSV, or Syslog), ensure your data adheres to these specific ingestion limits: Maximum Line Size : A single log line cannot exceed 4MB .
- Send multiple events in a single webhook request The following code sample shows how to format a single request body with multiple, newline-separated JSON objects after the curl --location item: --header 'Content-Type: application/json' \ --header 'X-goog-api-key: API KEY' \ --header 'X-Webhook-Access-Key: SECRET' \ --data '{"principal": {"asset id": "asset 123"}, "metadata": {"event type": "GENERIC EVENT", "product name": "Product Acme"}} {"principal": {"asset id": "asset 123"}, "metadata": {"event type": "GENERIC EVENT", "product name": "Product Acme"}}' Create an HTTPS webhook feed In the Google SecOps menu, select Settings , and then click Feeds .

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-api-reference`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Feature A feature rollout on May 8, 2025, introduced new APIs that may require updated permissions for custom roles to access the detection UI page.
- Abnormal Security ( Email Server ) AIX system ( OS ) Akamai DNS ( DNS ) Akamai WAF ( WAF ) Apache ( Security ) Apigee ( Google Cloud Specific ) Apple macOS ( AV / Endpoint ) Archer Integrated Risk Management ( Risk Management Solution ) Area1 Security ( Email server ) Aruba ( Wireless ) Aruba Switch ( Network Infrastructure ) Auth0 ( Authentication log ) AWS CloudFront ( CDN ) AWS Cloudtrail ( Cloud Log Aggregator ) AWS CloudWatch ( Cloud service monitoring ) AWS EMR ( AWS Specific ) AWS VPN ( VPN ) Azure AD ( LDAP ) Azure AD Directory Audit ( Audit ) Azure Firewall ( Azure Firewall Application Rule ) Azure Key Vault logging ( Audit ) Barracuda Firewall ( Firewall ) Barracuda WAF ( Firewall ) BeyondTrust Endpoint Privilege Management ( Privileged Account Activity ) Blue Coat Proxy ( Web Proxy ) BMC Client Management ( Security ) Check Point ( Firewall ) Chrome Management ( Browser ) Cisco IronPort ( Gateway Security ) Cisco ISE ( Identity and Access Management ) Cisco Meraki ( Wireless ) Cisco Router ( Switches, Routers ) Cisco Stealthwatch ( Log Aggregator ) Cisco Switch ( Switches, Routers ) Cisco TACACS+ ( Authentication ) Cisco Umbrella Web Proxy ( Web Proxy ) Cisco WLC/WCS ( Wireless ) Citrix Netscaler ( Load Balancer, Traffic Shaper, ADC ) Claroty Continuous Threat Detection ( IoT ) Cloud Audit Logs ( Google Cloud Specific ) Cloud Data Loss Prevention ( Google Cloud Specific ) Cloud SQL ( Google Cloud Specific ) Cohesity ( Backup Software ) Corelight ( NDR ) CrowdStrike Detection Monitoring ( EDR ) CrowdStrike Falcon ( EDR ) CrushFTP ( Application server ) Darktrace ( NDR ) Delinea Secret Server ( Privileged Account Activity ) Dell EMC Data Domain ( Storage system ) Druva Backup ( Security ) Duo Activity Logs ( Activity ) Duo Administrator Logs ( Authentication ) Elastic Windows Event Log Beats ( Log Aggregator ) Ergon Informatik Airlock IAM ( Application Whitelisting ) F5 BIGIP Access Policy Manager ( Access Policy Manager ) F5 BIGIP LTM ( Load Balancer, Traffic Shaper, ADC ) FireEye HX ( EDR ) FortiGate ( Firewall ) Fortinet FortiAnalyzer ( Fortinet FortiAnalyzer ) Fortinet FortiAuthenticator ( Security ) Fortinet FortiEDR ( EDR ) Fortinet Fortimanager ( Network Management and Optimization software ) GitHub ( SaaS Application ) GMV Checker ATM Security ( ATM Audit ) Guardicore Centra ( Deception Software ) Hashicorp Vault ( Privileged Account Activity ) HP Aruba (ClearPass) ( Identity and Access Management ) IBM Cloud Activity Tracker ( Security Log ) IBM DB2 ( Database ) IBM Mainframe Storage ( Monitoring ) IBM OpenPages ( Data Security ) Imperva ( WAF ) Imperva CEF ( CEF ) Imperva DRA ( Data Security ) Infoblox ( DHCP, DNS ) Infoblox DNS ( DNS ) JAMF Pro ( Mac Endpoint Management System ) Keycloak ( Identity and Access Management ) Lacework Cloud Security ( Cloud Security ) Linux Auditing System (AuditD) ( OS ) Linux DHCP ( DHCP ) ManageEngine Log360 ( Alert Log ) McAfee ePolicy Orchestrator ( Policy Management ) Microsoft AD FS ( LDAP ) Microsoft Azure Activity ( Misc Windows Specific ) Microsoft Azure Resource ( Log Aggregator ) Microsoft Defender For Cloud ( Automation and DevOps Tools ) Microsoft Defender for Endpoint ( EDR ) Microsoft Defender for Identity ( EDR ) Microsoft Graph Activity Logs ( AUDIT ) Microsoft Graph API Alerts ( Gateway to data and intelligence ) Microsoft Intune Context ( Mobile Device Management ) Microsoft SQL Server ( Database ) Mimecast URL Logs ( Email server log types ) MISP Threat Intelligence ( Cybersecurity ) Mobile Endpoint Security ( Mobile Endpoint Security ) NetApp ONTAP ( Rest api ) Netskope V2 ( Cloud Security ) Office 365 ( SaaS Application ) Okta ( Identity and Access Management ) One Identity Identity Manager ( unified identity security ) Opengear Remote Management ( Secure Remote Access ) Oracle ( DATABASE ) Oracle Cloud Infrastructure VCN Flow Logs ( Oracle Cloud Infrastructure ) Palo Alto Networks Firewall ( Firewall ) Palo Alto Panorama ( Firewall ) Palo Alto Prisma Cloud Alert payload ( Cloud Security ) Proofpoint CASB ( CASB ) Proofpoint Email Filter ( Email Server ) Proofpoint On Demand ( Email Server ) Proofpoint Threat Response ( Email Server ) Pulse Secure ( VPN ) Radware Web Application Firewall ( Firewall ) SailPoint IAM ( Identity and Access Management ) Saiwall VPN ( VPN ) Salesforce ( SaaS Application ) Sentinelone Alerts ( Endpoint Security ) SonicWall ( Firewall ) Sophos Central ( AV / Endpoint ) Sophos Firewall (Next Gen) ( Firewall ) Squid Web Proxy ( Web Proxy ) STIX Threat Intelligence ( Cybersecurity Threats ) Suricata EVE ( IPS IDS ) Symantec DLP ( DLP ) Symantec Endpoint Protection ( AV / Endpoint ) Symantec Web Security Service ( Web Proxy ) TINTRI ( Data Security ) Trend Micro Apex one ( Endpoint Security ) TrendMicro Apex Central ( Endpoint ) UberAgent ( Security ) Veeam ( Backup software ) Velo Firewall ( FIREWALL ) VMware AirWatch ( Wireless ) VMware NSX ( Network and Security Virtualization ) VMware vCenter ( Server ) WatchGuard ( Syslog and KV ) Wazuh ( Log Aggregator ) Windows Event ( Endpoint ) Windows Event (XML) ( AV / Endpoint ) Windows Sysmon ( DNS ) Workday User Activity ( N/A ) Workspace Activities ( Google Cloud Specific ) XAMS by Xiting ( Log Aggregator ) ZeroFox Platform ( Database ) Zscaler ( Web Proxy ) Zywall ( Network infrastructure ) The following log types were added without a default parser.
- Announcement New parser documentation now available New parser documentation is available to help you ingest and normalize logs from the following sources: Collect Active Countermeasures AI-Hunter logs Collect ADVA Fiber Service Platform logs Collect AIX system logs Collect Akamai SIEM Connector logs Collect AMD Pensando DSS firewall logs Collect Azure NSG Flow logs Collect Cloudflare Page Shield logs Collect FingerprintJS logs Collect FireEye eMPS logs Collect Forcepoint Email Security logs Collect Forcepoint NGFW logs Collect Fortinet FortiSASE logs Collect IBM DB2 logs Collect ManageEngine ADManager Plus logs Collect Microsoft Azure Resource logs Collect Microsoft Intune Context logs Collect Ubiquiti Unifi switch logs Collect Vectra Detect logs Collect Vectra Stream logs Collect Voltage SecureMail logs Collect Wallix Bastion logs January 18, 2026 Feature Integration Rollback This feature is currently in Preview.
- This change should not remove any prior detections for customers who have enabled this rule pack and do not meet the licensing requirements but the rules themselves will now be unavailable and no new detections will generate.

