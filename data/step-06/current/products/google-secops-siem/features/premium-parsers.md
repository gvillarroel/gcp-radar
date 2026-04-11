---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:56:14.402Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "Premium parsers"
feature_slug: "premium-parsers"
latest_feature_date: "2025-04-07"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category"
  - "https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs"
keywords:
  - "premium"
  - "parsers"
  - "specific"
  - "high"
  - "volume"
  - "are"
  - "classified"
  - "as"
---

# Premium parsers

Product: Google SecOps SIEM
Coverage: LOW

## Step 02 Summary

Specific high-volume parsers are classified as premium and receive expedited support handling.

## Extended Definition

Specific high-volume parsers are classified as premium and receive expedited support handling.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- [https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs](https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs)

## Supporting Pages

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-api-reference`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- April 07, 2025 Feature Premium parsers Specific high-volume parsers are now categorized as premium .
- January 14, 2025 Change The following rules have been removed from their associated rule packs in Curated Detections due to high alert volume across the Google SecOps customer base: Cloud Threats - CDIR SCC Enhanced Defense Evasion Alerts: SCC: Modify VPC Service Control with GCE Activity from the Restricted Resource SCC: Modify VPC Service Control with Activity from the Restricted Service Linux Threats - OS Privilege Escalation Tools: Sensitive File Discovery Last Login Users Whoami Commands Windows Threats - Initial Access: NetLogon AD System Event Risk Analytics for UEBA - Login to an Application Never Before Seen for a User Group: First Time User Login Activity to Application for Manager Peer Group Risk Analytics for UEBA - Login from Country Never Before Seen for a User Group: First Time User Login Activity from Country for Manager Peer Group The rule "SCC: Unexpected Child Shell" has been moved from the rule pack "Cloud Threats - CDIR SCC Enhanced Malware Alerts" to "Cloud Threats - CDIR SCC Enhanced Execution Alerts" January 07, 2025 Announcement The following parser documentation is now available: Collect Microsoft Defender for Endpoint logs Zscaler parsers overview Collect Zscaler DNS logs Collect Zscaler Firewall logs Collect Zscaler Internet Access logs Collect Zscaler Webproxy logs Collect Linux auditd and AIX systems logs Collect CircleCI audit logs Collect CloudPassage Halo logs Collect JFrog Artifactory logs Collect Apple macOS syslog data Collect Netskope web proxy logs Collect Onfido logs Collect OPNsense firewall logs Collect Rapid7 InsightIDR logs Collect Sysdig logs Collect Thinkst Canary logs Collect VMware Workspace ONE UEM logs Collect Workday HCM logs December 27, 2024 Change Google SecOps has added a new rule set to Applied Threat Intelligence (ATI), called Inbound IP Address Authentication, that identifies IP addresses that are authenticating to local infrastructure in an inbound network direction.
- AIX system ( AIX SYSTEM ) Auth0 ( AUTH ZERO ) AWS Cloudtrail ( AWS CLOUDTRAIL ) AWS GuardDuty ( GUARDDUTY ) AWS Security Hub ( AWS SECURITY HUB ) AWS Session Manager ( AWS SESSION MANAGER ) Blue Coat Proxy ( BLUECOAT WEBPROXY ) Check Point ( CHECKPOINT FIREWALL ) Chrome Management ( N/A ) Cisco Firepower NGFW ( CISCO FIREPOWER FIREWALL ) Cisco Meraki ( CISCO MERAKI ) Cisco NX-OS ( CISCO NX OS ) Cisco Stealthwatch ( CISCO STEALTHWATCH ) CrowdStrike Falcon ( CS EDR ) Digi modems ( DIGI MODEMS ) GitHub ( GITHUB ) IBM Security Verify SaaS ( IBM SECURITY VERIFY SAAS ) Imperva ( IMPERVA WAF ) Infoblox DNS ( INFOBLOX DNS ) Jamf Protect Alerts ( JAMF PROTECT ) Jamf Protect Telemetry ( JAMF TELEMETRY ) Kisi Access Management ( KISI ) Kubernetes Audit Azure ( KUBERNETES AUDIT AZURE ) Kubernetes Node ( KUBERNETES NODE ) Linux Auditing System (AuditD) ( AUDITD ) McAfee ePolicy Orchestrator ( MCAFEE EPO ) McAfee MVISION CASB ( MCAFEE MVISION CASB ) McAfee Skyhigh CASB ( MCAFEE SKYHIGH CASB ) McAfee Web Gateway ( MCAFEE WEBPROXY ) Microsoft AD ( WINDOWS AD ) Microsoft AD FS ( ADFS ) Microsoft Defender for Endpoint ( MICROSOFT DEFENDER ENDPOINT ) Microsoft Exchange ( EXCHANGE MAIL ) Netskope Web Proxy ( NETSKOPE WEBPROXY ) Office 365 ( OFFICE 365 ) Open Cybersecurity Schema Framework (OCSF) ( OCSF ) Palo Alto Networks Firewall ( PAN FIREWALL ) Security Command Center Threat ( N/A ) Static IP ( ASSET STATIC IP ) Symantec Web Security Service ( SYMANTEC WSS ) ThreatLocker Platform ( THREATLOCKER ) Tripwire ( TRIPWIRE FIM ) VMware NSX ( VMWARE NSX ) VMware vRealize Suite ( VMWARE VREALIZE ) Windows DNS ( WINDOWS DNS ) Windows Event ( WINEVTLOG ) Zscaler ( ZSCALER WEBPROXY ) For details about changes in each parser, see Supported default parsers .
- April 13, 2022 Change The following supported default parsers have changed (listed by ingestion label) AKAMAI WAF ARUBA WIRELESS AWS CLOUDTRAIL AWS CONFIG AZURE AD CONTEXT AZURE COSMOS DB BITDEFENDER CA ACCESS CONTROL CASSANDRA CISCO EMAIL SECURITY CISCO FIREPOWER FIREWALL CISCO ISE CISCO MERAKI CISCO TACACS CS EDR D3 BANKING ELASTIC WINLOGBEAT FILEZILLA FTP GCP CLOUDIDENTITY DEVICES GCP CLOUDIDENTITY DEVICEUSERS GMV CHECKER GUARDDUTY GUARDIUM IIS INFOBLOX DHCP KASPERSKY AV KEA DHCP MCAFEE DLP MCAFEE EPO MICROSOFT DEFENDER ENDPOINT NETSKOPE WEBPROXY OFFICE 365 OKTA OKTA USER CONTEXT ONELOGIN SSO ORDR IOT PAN FIREWALL PROOFPOINT ON DEMAND PULSE SECURE VPN RH ISAC IOC SALESFORCE SERVICENOW CMDB SLACK AUDIT SOPHOS UTM SYMANTEC EDR TANIUM TH UMBRELLA DNS UNIFI AP VANDYKE SFTP VMWARE ESX VMWARE VREALIZE WINDOWS DHCP WINDOWS DNS WINDOWS SYSMON WORKSPACE ACTIVITY WORKSPACE ALERTS WORKSPACE USERS For details about the changes in each parser, see Supported default parsers April 07, 2022 Change Exporting Google Cloud Logs to Chronicle There are now lists of the specific Google Cloud Logs and Google Cloud Asset Metadata that are exported to Chronicle when you enable Google Cloud log ingestion.

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-api-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- April 07, 2025 Feature Premium parsers Specific high-volume parsers are now categorized as premium .
- January 14, 2025 Change The following rules have been removed from their associated rule packs in Curated Detections due to high alert volume across the Google SecOps customer base: Cloud Threats - CDIR SCC Enhanced Defense Evasion Alerts: SCC: Modify VPC Service Control with GCE Activity from the Restricted Resource SCC: Modify VPC Service Control with Activity from the Restricted Service Linux Threats - OS Privilege Escalation Tools: Sensitive File Discovery Last Login Users Whoami Commands Windows Threats - Initial Access: NetLogon AD System Event Risk Analytics for UEBA - Login to an Application Never Before Seen for a User Group: First Time User Login Activity to Application for Manager Peer Group Risk Analytics for UEBA - Login from Country Never Before Seen for a User Group: First Time User Login Activity from Country for Manager Peer Group The rule "SCC: Unexpected Child Shell" has been moved from the rule pack "Cloud Threats - CDIR SCC Enhanced Malware Alerts" to "Cloud Threats - CDIR SCC Enhanced Execution Alerts" January 11, 2025 Change Playbook names must now be unique across all SOAR environments, as part of updates to support future features.
- May 14, 2025 Announcement New premium versions of the following parsers are now available: ZSCALER WEBPROXY ZSCALER FIREWALL ZSCALER DNS ZSCALER INTERNET ACCESS ZSCALER VPN ZSCALER ZPA ZSCALER TUNNEL ZSCALER CASB ZSCALER DLP ZSCALER ADMIN AUDIT We recommend using the documented topology for each parser.
- April 15, 2025 Announcement We are releasing updated versions of the following premium parsers: Crowdstrike Detection Monitoring (CS DETECTS) Crowdstrike Falcon (CS EDR) Microsoft Defender for Endpoint These updates include significant improvements to parser mappings.

### "Cloud Threats category overview \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- Source ID: `site-api-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Suspicious Workspace Administrative Actions : Detect behaviors indicating potential evasion, security downgrading or rare and anomalous behaviors never seen in the last 30 days from users with higher privileges, including administrators.
- The following rule sets create a detection when findings from Security Command Center Event Threat Detection , Google Cloud Armor , Security Command Center Sensitive Actions Service , and Custom modules for Event Threat Detection are identified: CDIR SCC Cloud IDS CDIR SCC Cloud Armor CDIR SCC Impact CDIR SCC Enhanced Persistence CDIR SCC Enhanced Defense Evasion CDIR SCC Custom Module Kubernetes Suspicious Tools rule set To use the Kubernetes Suspicious Tools rule set, we recommend that you collect the data listed in the All rule sets section.
- CDIR SCC Credential Access : Contains context-aware rules that correlate Security Command Center Credential Access findings with data from several other data sources, including Cloud Audit Logs CDIR SCC Enhanced Discovery : Contains context-aware rules that correlate Security Command Center Discovery escalation findings with data from sources such as Google Cloud services and Cloud Audit Logs.
- Azure - Defender for Cloud : Identifies alerts received from context-aware Microsoft Defender for Cloud related to user behavior, credential access, cryptomining, discovery, evasion, execution, exfiltration, impact, initial access, malware, penetration testing, persistence, policy, privilege escalation, or unauthorized access across all Azure cloud services.

### "Ingest Google Cloud data \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs](https://docs.cloud.google.com/chronicle/docs/ingestion/cloud/ingest-gcp-logs)
- Source ID: `site-api-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- Export filter example: Include additional log types The following export filter exports access transparency logs in addition to the default logs: log id("dns.googleapis.com/dns queries") OR log id("cloudaudit.googleapis.com/activity") OR log id("cloudaudit.googleapis.com/system event") OR log id("cloudaudit.googleapis.com/access transparency") Export filter example: Include additional logs from a specific project The following export filter exports access transparency logs from a specific project, in addition to the default logs: log id("dns.googleapis.com/dns queries") OR log id("cloudaudit.googleapis.com/activity") OR log id("cloudaudit.googleapis.com/system event") OR logName = "projects/my-project-id/logs/cloudaudit.googleapis.com%2Faccess transparency" Export filter example: Include additional logs from a specific folder The following export filter exports access transparency logs from a specific folder, in addition to the default logs: log id("dns.googleapis.com/dns queries") OR log id("cloudaudit.googleapis.com/activity") OR log id("cloudaudit.googleapis.com/system event") OR logName = "folders/my-folder-id/logs/cloudaudit.googleapis.com%2Faccess transparency" Export filter example: Exclude logs from a specific project The following export filter exports the default logs from the entire Google Cloud organization with the exception of a specific project: (log id("dns.googleapis.com/dns queries") OR log id("cloudaudit.googleapis.com/activity") OR log id("cloudaudit.googleapis.com/system event")) AND (NOT logName = "^projects/my-project-id/logs/. $") Export Google Cloud asset metadata You can export your Google Cloud asset metadata from Cloud Asset Inventory to Google SecOps.
- This asset metadata is drawn from your Cloud Asset Inventory and consists of information about your assets, resources, and identities including the following: Environment Location Zone Hardware models Access control relationships between resources and identities The following types of Google Cloud asset metadata will be exported to your Google SecOps instance: GCP BIGQUERY CONTEXT GCP COMPUTE CONTEXT GCP IAM CONTEXT GCP IAM ANALYSIS GCP STORAGE CONTEXT GCP CLOUD FUNCTIONS CONTEXT GCP SQL CONTEXT GCP NETWORK CONNECTIVITY CONTEXT GCP RESOURCE MANAGER CONTEXT The following are examples of Google Cloud asset metadata: Application name— Google-iamSample/0.1 Project name— projects/my-project Note: You need to have either Security Command Center Standard or Security Command Center Premium enabled to export Google Cloud asset metadata to Google SecOps.
- The following export filter captures Data Access logs and excludes high-volume events such as Read and List operations of Cloud Storage and Cloud SQL: ( log id("cloudaudit.googleapis.com/data access") AND NOT protoPayload.methodName = "^storage\.(buckets objects)\.(get list)$" AND NOT protoPayload.request.cmd = "select" AND NOT protoPayload.methodName = "^google\.spanner\.v1\.Spanner\.(ExecuteStreamingSql BeginTransaction Commit)$" ) For more information about tuning Data Access logs generated by Cloud Audit Logs, see Manage the volume of Data Access audit logs .
- To learn how to filter out logs that are generated by routine activities, see Tune Cloud Audit Logs filters . log id("cloudaudit.googleapis.com/activity") (exported by the default filter) log id("cloudaudit.googleapis.com/system event") (exported by the default filter) log id("cloudaudit.googleapis.com/policy") log id("cloudaudit.googleapis.com/access transparency") Cloud NAT logs ( GCP CLOUD NAT ): log id("compute.googleapis.com/nat flows") Cloud DNS logs ( GCP DNS ): log id("dns.googleapis.com/dns queries") (exported by the default filter) Firewall policy rules logging ( GCP FIREWALL ): log id("compute.googleapis.com/firewall") GCP IDS : log id("ids.googleapis.com/threat") log id("ids.googleapis.com/traffic") GCP LOADBALANCING : This includes logs from Google Cloud Armor and Cloud Load Balancing (both External and Internal). log id("requests") log id("loadbalancing.googleapis.com/requests") GCP CLOUDSQL : log id("cloudsql.googleapis.com/mysql-general.log") log id("cloudsql.googleapis.com/mysql.err") log id("cloudsql.googleapis.com/postgres.log") log id("cloudsql.googleapis.com/sqlagent.out") log id("cloudsql.googleapis.com/sqlserver.err") GCP VPC FLOW : log id("compute.googleapis.com/vpc flows") (for US and EU regions only) NIX SYSTEM : log id("syslog") log id("authlog") log id("securelog") log id("osconfig.googleapis.com/patch job") LINUX SYSMON : log id("sysmon.raw") WINEVTLOG : log id("winevt.raw") log id("windows event log") BRO JSON : log id("zeek json streaming conn") log id("zeek json streaming dhcp") log id("zeek json streaming dns") log id("zeek json streaming http") log id("zeek json streaming ssh") log id("zeek json streaming ssl") KUBERNETES NODE : log id("events") log id("stdout") log id("stderr") AUDITD : log id("audit log") GCP APIGEE X : log id("apigee.googleapis.com/ingress instance") log id("apigee.googleapis.com") log id("apigee-logs") log id("apigee") logName = "^projects/[\w\-]+/logs/apigee[\w\-\.] $" GCP RECAPTCHA ENTERPRISE : log id("recaptchaenterprise.googleapis.com/assessment") log id("recaptchaenterprise.googleapis.com/annotation") GCP RUN : log id("run.googleapis.com/stderr") log id("run.googleapis.com/stdout") log id("run.googleapis.com/requests") log id("run.googleapis.com/varlog/system") GCP NGFW ENTERPRISE : log id("networksecurity.googleapis.com/firewall threat") GCP ABUSE EVENTS : log id("abuseevent.googleapis.com/abuse events") GCP DNS ATD log id("networksecurity.googleapis.com/dns threat events") Model Armor logs ( GCP MODEL ARMOR ): This includes logs for sanitization operations (screening prompts and responses) and template operations (creation, updates). log id("modelarmor.googleapis.com/sanitize operations") log id("modelarmor.googleapis.com/templates") Customize export filter settings By default, your Cloud Audit Logs (Admin Activity and System Event) and Cloud DNS logs are sent to your Google SecOps instance.

