---
title: "Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/chronicle/docs/release-notes
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/chronicle/docs
source_metadata:
  url: https://docs.cloud.google.com/chronicle/docs/release-notes
  title: "Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Google Security Operations
Resources
Send feedback
Google Security Operations SIEM release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Google Security Operations. You can
periodically check this page for announcements about new or updated features, bug fixes, known issues, and deprecated functionality.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
April 08, 2026
Announcement
Emerging Threats Center general availability
The Emerging Threats Center is now in General Availability (GA) and includes
the following new features and enhancements:
Expanded campaign filtering: Filter the Emerging Threats feed by new
categories, including associated malware, tools, and threat actors.
MITRE ATT&CK matrix visualization: Evaluate your detection rule coverage
for specific tactics, techniques, and procedures (TTPs) using the new
visualization matrix in the Associated Rules panel. You can customize
heat map metrics, filter the matrix by rule or alerting status, and view
detailed context for specific sub-techniques.
Enhanced Entity context panel: Investigate an indicator of compromise (IoC)
using the Entity context panel to view its point-in-time state and related
cases.
GTI-associated IoC categories: Filter GTI-associated IoCs by specific
categories, including Files , URLs , Domains , and IPs .
For more information, see Emerging Threats Center overview
and Emerging Threats Center detail view .
April 07, 2026
Change
Search query editor enhancements
Google SecOps has enhanced the search query editor to provide intelligent
auto-suggestions and improved error handling.
Auto-suggestions : The query editor now provides context-aware auto-suggestions
for fields, operators, and valid values as you type.
Error handling : The editor now highlights syntax errors with a red squiggly
line and displays a tooltip with the specific error description when you hover
over it. Additionally, runtime errors now display persistently in the Results panel
to assist with troubleshooting.
For more information, see
Use auto-suggestions to build queries .
Note: This change follows a phased rollout from April 07, 2026 , to April 10, 2026 .
Reach out to support if you do not see the new limits applied to your environment
after April 10, 2026 .
Feature
Health Hub
This feature is currently in Preview.
The Health Hub is the central location in Google Security Operations for you to monitor the status and health of all configured data sources. The Health Hub provides crucial information on data sources and log types, offering the context needed to diagnose and remediate data pipeline issues.
The Health Hub includes information about the following:
Ingestion volumes and ingestion health.
Parsing volumes from raw logs to Unified Data Model (UDM) events .
Context and links to interfaces with additional relevant information and functionality.
Irregular and failed sources and log types.
For more information, see Use the Health Hub .
April 06, 2026
Change
Updates to search query limits and error messaging
Google SecOps has updated search query limits for programmatic and web interface
access:
Increased Queries Per Hour (QPH) limits of up to 2,000 for APIs and 1,000
for the web interface.
New concurrency limits for both simple and complex queries.
More descriptive error messages for quota failures in the API and web interface.
For more information, see Search limits and quotas
Note: This change follows a phased rollout from April 06, 2026 , to April 30, 2026 .
Contact Support if you don't see the new limits applied to your environment after April 30, 2026 .
Deprecated
v1 Cloud Storage Feed Types (GCS, S3, SQS, Azure)
The v1 feed types for GOOGLE_CLOUD_STORAGE , AMAZON_S3 , AMAZON_SQS , and AZURE_BLOBSTORE are deprecated and will be discontinued on March 15, 2027 . The new v2 feed types uses the Google Cloud Storage Transfer Service (STS) to provide improved performance, scalability, and reliability.
To ensure continued ingestion, transition your feeds before the March 15, 2027 shutdown date:
Google SecOps will automatically migrate your feeds using v1 feed types to v2 in waves starting from April 6, 2026. To facilitate this, some feeds may require additional IP allowlist or service account permission updates. You can also self-migrate by replacing your existing data feeds with new feeds using v2 feed types.
You can also self-migrate by creating new feeds using v2 feed types to substitute your existing feeds using v1 feed types by following the steps documented in our feed configuration guides before March 15, 2027.
Key Dates:
April 6, 2026: Transition begins; auto-migration available.
September 15, 2026: Support for v1 feeds is discontinued.
March 15, 2027: v1 feeds reach End of Life (EOL) and will stop returning data.
For more information, see Feature deprecations .
April 03, 2026
Change
Google Security Operations has updated the list of supported default parsers . Parsers are updated gradually, so it might take one to four days before you see the changes reflected in your region.
The following supported default parsers have been updated. Each parser is listed by product name and log_type value, where applicable. This list includes both released default parsers and pending parser updates.
Abnormal Security ( ABNORMAL_SECURITY )
Active Countermeasures ( AI_HUNTER )
AIX system ( AIX_SYSTEM )
Apache ( APACHE )
Apache Cassandra ( CASSANDRA )
Aruba ( ARUBA_WIRELESS )
Aruba EdgeConnect SD-WAN ( ARUBA_EDGECONNECT_SDWAN )
Auth0 ( AUTH_ZERO )
AWS Aurora ( AWS_AURORA )
AWS CloudFront ( AWS_CLOUDFRONT )
AWS Cloudtrail ( AWS_CLOUDTRAIL )
AWS CloudWatch ( AWS_CLOUDWATCH )
AWS VPC Flow ( AWS_VPC_FLOW )
AWS WAF ( AWS_WAF )
Azure AD ( AZURE_AD )
Azure AD Directory Audit ( AZURE_AD_AUDIT )
Azure Front Door ( AZURE_FRONT_DOOR )
Azure SQL ( AZURE_SQL )
BeyondTrust ( BOMGAR )
BeyondTrust BeyondInsight ( BEYONDTRUST_BEYONDINSIGHT )
Blue Coat Proxy ( BLUECOAT_WEBPROXY )
Broadcom Support Portal Audit Logs ( BROADCOM_SUPPORT_PORTAL )
Check Point Harmony ( CHECKPOINT_HARMONY )
Chronicle SOAR Audit ( CHRONICLE_SOAR_AUDIT )
Cisco ASA ( CISCO_ASA_FIREWALL )
Cisco Email Security ( CISCO_EMAIL_SECURITY )
Cisco ISE ( CISCO_ISE )
Cisco Meraki ( CISCO_MERAKI )
Cisco Secure Access ( CISCO_SECURE_ACCESS )
Cisco Switch ( CISCO_SWITCH )
Cisco Umbrella Audit ( CISCO_UMBRELLA_AUDIT )
Cisco Umbrella DNS ( UMBRELLA_DNS )
Cisco WSA ( CISCO_WSA )
Cloud DNS ( GCP_DNS )
Cloud SQL ( GCP_CLOUDSQL )
Cloudflare ( CLOUDFLARE )
Cloudflare Warp ( CLOUDFLARE_WARP )
Code42 Incydr ( CODE42_INCYDR )
CrowdStrike Alerts API ( CS_ALERTS )
CrowdStrike Falcon ( CS_EDR )
CrowdStrike Falcon Stream ( CS_STREAM )
CyberArk Privileged Access Manager (PAM) ( CYBERARK_PAM )
Cybereason EDR ( CYBEREASON_EDR )
CYJAX Threat Intelligence ( CYJAX_THREAT_INTELLIGENCE )
Cyware Threat Intelligence Exchange ( CTIX )
Databricks ( DATABRICKS )
Duo Auth ( DUO_AUTH )
Elastic Defend ( ELASTIC_DEFEND )
ESET AV ( ESET_AV )
F5 ASM ( F5_ASM )
F5 BIGIP Access Policy Manager ( F5_BIGIP_APM )
FireEye eMPS ( FIREEYE_EMPS )
FireEye ETP ( FIREEYE_ETP )
FireEye NX ( FIREEYE_NX )
Forescout NAC ( FORESCOUT_NAC )
ForgeRock Identity Cloud ( FORGEROCK_IDENTITY_CLOUD )
Fortinet FortiAnalyzer ( FORTINET_FORTIANALYZER )
GitHub ( GITHUB )
Google Threat Intelligence IOC ( GTI_IOC )
HP Aruba (ClearPass) ( CLEARPASS )
Huawei Switches ( HUAWEI_SWITCH )
IBM DataPower Gateway ( IBM_DATAPOWER )
IBM Safenet ( IBM_SAFENET )
IBM Websphere Application Server ( IBM_WEBSPHERE_APP_SERVER )
Imperva Advanced Bot Protection ( IMPERVA_ABP )
Imperva SecureSphere Management ( IMPERVA_SECURESPHERE )
Juniper ( JUNIPER_FIREWALL )
Kolide Endpoint Security ( KOLIDE )
Kubernetes Audit ( KUBERNETES_AUDIT )
Kubernetes Node ( KUBERNETES_NODE )
Linux Auditing System (AuditD) ( AUDITD )
Maria Database ( MARIA_DB )
McAfee ePolicy Orchestrator ( MCAFEE_EPO )
McAfee Skyhigh CASB ( MCAFEE_SKYHIGH_CASB )
McAfee Web Gateway ( MCAFEE_WEBPROXY )
Microsoft Azure Activity ( AZURE_ACTIVITY )
Microsoft Defender For Cloud ( MICROSOFT_DEFENDER_CLOUD_ALERTS )
Microsoft Graph API Alerts ( MICROSOFT_GRAPH_ALERT )
Microsoft IIS ( IIS )
Microsoft SQL Server ( MICROSOFT_SQL )
Mimecast Mail V2 ( MIMECAST_MAIL_V2 )
Mobile Endpoint Security ( LOOKOUT_MOBILE_ENDPOINT_SECURITY )
Mobileiron ( MOBILEIRON )
NetApp ONTAP ( NETAPP_ONTAP )
Netskope V2 ( NETSKOPE_ALERT_V2 )
Netskope Web Proxy ( NETSKOPE_WEBPROXY )
Obsidian ( OBSIDIAN )
Office 365 ( OFFICE_365 )
Oort Security Tool ( OORT )
Oracle ( ORACLE_DB )
Orca Cloud Security Platform ( ORCA )
Palo Alto Cortex XDR Events ( PAN_CORTEX_XDR_EVENTS )
Palo Alto Networks Firewall ( PAN_FIREWALL )
Palo Alto Prisma Cloud Alert payload ( PAN_PRISMA_CA )
PostFix Mail ( POSTFIX_MAIL )
Proofpoint On Demand ( PROOFPOINT_ON_DEMAND )
Proofpoint Tap Alerts ( PROOFPOINT_MAIL )
Proofpoint Threat Response ( PROOFPOINT_TRAP )
Radware Web Application Firewall ( RADWARE_FIREWALL )
Red Hat OpenShift ( REDHAT_OPENSHIFT )
Salesforce ( SALESFORCE )
SAP Change Document ( SAP_CHANGE_DOCUMENT )
SAP Gateway ( SAP_GATEWAY )
SAP Hana Audit ( SAP_HANA_AUDIT )
SAP Security Audit ( SAP_SECURITY_AUDIT )
Security Command Center Posture Violation ( GCP_SECURITYCENTER_POSTURE_VIOLATION )
Security Command Center Sensitive Data Risk ( GCP_SECURITYCENTER_SENSITIVE_DATA_RISK )
Security Command Center Threat ( GCP_SECURITYCENTER_THREAT )
Security Command Center Toxic Combination ( GCP_SECURITYCENTER_TOXIC_COMBINATION )
Snyk Group level audit Logs ( SNYK_SDLC )
Suricata EVE ( SURICATA_EVE )
Symantec EDR ( SYMANTEC_EDR )
Sysdig ( SYSDIG )
Tenable Active Directory Security ( TENABLE_ADS )
ThreatConnect IOC V3 ( THREATCONNECT_IOC_V3 )
Trellix HX Alerts ( TRELLIX_HX_ALERTS )
Trellix HX Audit Events ( TRELLIX_HX_AUDIT )
Trellix HX Event Streamer ( TRELLIX_HX_ES )
Trellix HX Hosts ( TRELLIX_HX_HOSTS )
Trend Micro Vision One Endpoint Vulnerabilities ( TRENDMICRO_VISION_ONE_ENDPOINT_VULNERABILITIES )
Trend Micro Vision One Observerd Attack Techniques ( TRENDMICRO_VISION_ONE_OBSERVERD_ATTACK_TECHNIQUES )
Trend Micro Vision One Workbench ( TRENDMICRO_VISION_ONE_WORKBENCH )
TrendMicro Apex Central ( TRENDMICRO_APEX_CENTRAL )
TXOne Stellar ( TRENDMICRO_STELLAR )
Ubika Waf ( UBIKA_WAF )
Unix system ( NIX_SYSTEM )
Varonis ( VARONIS )
Vmware Avinetworks iWAF ( VMWARE_AVINETWORKS_IWAF )
VMware ESXi ( VMWARE_ESX )
VMware Horizon ( VMWARE_HORIZON )
Wallix Bastion ( WALLIX_BASTION )
Windows DNS ( WINDOWS_DNS )
Windows Event ( WINEVTLOG )
Windows Event (XML) ( WINEVTLOG_XML )
wiz.io ( WIZ_IO )
Zeek JSON ( BRO_JSON )
Zscaler ( ZSCALER_WEBPROXY )
The following log types were added without a default parser. Each parser is listed by product name and log_type value, where applicable.
Action1 ( ACTION1 )
CDNetworks Cloud Security ( CDNETWORKS_CLOUD_SECURITY )
Claude Compliance Logs ( CLAUDE_COMPLIANCE_LOGS )
Dell RecoverPoint ( DELL_RECOVERPOINT )
IBM Storwize ( IBM_STORWIZE )
LeapXpert Audit Logs ( LEAPXPERT_AUDIT )
Oracle Key Vault Audit Logs ( ORACLE_KEY_VAULT_AUDIT_LOGS )
RSA Cloud ( RSA_CLOUD )
ServiceNow Antivirus Activity ( SERVICENOW_ANTIVIRUS_ACTIVITY )
ServiceNow Attachment ( SERVICENOW_ATTACHMENT )
ServiceNow Email ( SERVICENOW_EMAIL )
Versa Director ( VERSA_DIRECTOR )
ZPE Systems NodeGrid ( ZPE_SYSTEMS_NODEGRID )
March 31, 2026
Feature
Multi-stage queries in YARA-L
The Multi-stage queries feature is now GA. This feature lets you feed the output of one query stage into the input of another, providing more granular data transformation than a single, monolithic query.
You can use multi-stage queries in both Dashboards and Search to build sophisticated detection and visualization logic. No action is required to enable this feature.
Learn more about how to create multi-stage queries with YARA-L 2.0 .
March 25, 2026
Feature
Credential validation for third-party API feed types
Credential validation is now available for all 49 third-party API connectors.
When you create a feed using a third-party API feed type, Google SecOps now automatically validates the provided credentials. This ensures that if credentials are incorrect:
Immediate feedback : The web interface displays an error message explaining the configuration failure.
Prevention of broken feeds : The system blocks the creation of the feed until valid credentials are provided, preventing the creation of broken feeds that fail to ingest data later.
March 23, 2026
Announcement
New parser documentation now available
New parser documentation is available to help you ingest and normalize logs from the following sources:
Collect Cisco Umbrella Cloud Firewall logs
Collect Cisco Umbrella IP logs
Collect Claroty xDome for Healthcare logs
Collect CloudM logs
Collect Digital Guardian EDR logs
Collect DNSFilter logs
Collect Dope Security SWG logs
Collect Druva Backup logs
Collect EfficientIP DDI logs
Collect Elastic Defend logs
Collect Elastic Windows Event Log Beats logs
Collect Ergon Informatik Airlock IAM logs
Collect ESET Threat Intelligence logs
Collect F5 Distributed Cloud Services logs
Collect F5 Shape logs
Collect F5 Silverline logs
Collect Falco IDS logs
Collect Fastly CDN logs
Collect File Scanning Framework logs
Collect FireEye ETP logs
Collect FireEye HX Audit logs
Collect FireEye NX Audit logs
Collect Fivetran logs
Collect Forcepoint Mail Relay logs
Collect GitGuardian Enterprise logs
Collect Google Cloud Looker audit logs
Collect Guardicore Centra logs
Collect HCL BigFix logs
Collect HID DigitalPersona logs
Collect IBM AS/400 logs
Collect IBM Informix logs
Collect IBM MaaS360 logs
Collect IBM Mainframe Storage logs
Collect IBM OpenPages logs
Collect IBM Security Access Manager logs
Collect IBM Security Identity Manager logs
Collect iBoss Web Proxy logs
Collect Intel 471 Watcher Alerts logs
Collect Intel Endpoint Management Assistant logs
Collect IONIX Attack Surface Management logs
Collect Island Enterprise Browser logs
Collect Jamf Protect Telemetry V2 logs
Collect Keycloak logs
Collect Kong Gateway logs
Collect LenelS2 OnGuard logs
Collect Lookout Mobile Endpoint Security logs
Collect Lucid audit logs
Collect ManageEngine Exchange Reporter Plus logs
Collect Mandiant Threat Intelligence Custom IOC logs
Collect Menlo Security Isolation Platform (MSIP) logs
Collect Metabase logs
Collect Microsoft Defender for Endpoint on iOS logs
Collect Microsoft Dynamics 365 User Activity logs
Collect Microsoft IAS / Network Policy Server (NPS) logs
Collect Microsoft Network Policy Server (NPS) logs
Collect OAuth2 Proxy logs
Collect Office 365 Message Trace logs
Collect Progress MOVEit Transfer logs
Collect Netscout Arbor Sightline logs
Collect Skyhigh Secure Web Gateway (On-Premises) logs
Collect ThreatDown EDR logs
Collect Trellix Endpoint Security (HX) alert logs
Collect Trellix Endpoint Security (HX) audit event logs
Collect Trellix Endpoint Security (HX) host inventory logs
March 18, 2026
Feature
Bindplane features for Google SecOps general availability
The following Bindplane features that relate to Google SecOps are now in General Availability (GA):
Single sign-on with custom claims role mapping : gives a production-ready way to manage Bindplane access through your identity provider. For more information, see Single Sign-On (Cloud) .
SecOps parser validator : validates that your logs will be parsed correctly by Google SecOps directly from the snapshot view. Get immediate feedback on parsed events or validation errors without waiting for data to appear in Google SecOps. For more information, see Validate SecOps Parser .
Forwarder migration tool : provides production-ready paths to migrate existing forwarder configurations into Bindplane-managed pipelines. For more information, see Migrate Configurations .
March 12, 2026
Announcement
Manage parser versions
The Manage parser versions feature is in Public Preview for all customers.
March 10, 2026
Feature
Set up and manage data processing pipelines
This feature is currently in Preview.
You can now use the Data Processing pipelines to filter, transform, and redact
Google SecOps data before ingestion. This feature provides more
control over ingested data, letting you reduce costs by filtering out
unwanted events, transform data for better compatibility, and protect
sensitive information by redacting or masking values before storage.
You can configure data processing pipelines using the Bindplane console or the
Google SecOps Data Pipeline APIs.
For more information, see Set up and manage data processing pipelines .
March 05, 2026
Change
Google SecOps has updated the list of supported default parsers. Parsers are updated gradually, so it might take one to four days before you see the changes reflected in your region. For more information, see Supported log types and default parsers .
The following supported default parsers have been updated. Each parser is listed by product name and log_type value, where applicable. This list includes both released default parsers and pending parser updates.
Acalvio ( ACALVIO )
AIX system ( AIX_SYSTEM )
Akamai WAF ( AKAMAI_WAF )
Apache ( APACHE )
Apache Cassandra ( CASSANDRA )
Apache Hadoop ( HADOOP )
Arcsight CEF ( ARCSIGHT_CEF )
Aruba EdgeConnect SD-WAN ( ARUBA_EDGECONNECT_SDWAN )
Attivo Networks ( ATTIVO )
AWS Aurora ( AWS_AURORA )
AWS Cloudtrail ( AWS_CLOUDTRAIL )
AWS CloudWatch ( AWS_CLOUDWATCH )
AWS GuardDuty ( GUARDDUTY )
AWS Network Firewall ( AWS_NETWORK_FIREWALL )
AWS Security Hub ( AWS_SECURITY_HUB )
AWS WAF ( AWS_WAF )
Azure AD ( AZURE_AD )
Azure AD Directory Audit ( AZURE_AD_AUDIT )
Azure AD Sign-In ( AZURE_AD_SIGNIN )
Azure Firewall ( AZURE_FIREWALL )
Azure Front Door ( AZURE_FRONT_DOOR )
Barracuda Email ( BARRACUDA_EMAIL )
Barracuda Firewall ( BARRACUDA_FIREWALL )
Blue Coat Proxy ( BLUECOAT_WEBPROXY )
Check Point ( CHECKPOINT_FIREWALL )
Check Point Harmony ( CHECKPOINT_HARMONY )
Cisco Application Centric Infrastructure ( CISCO_ACI )
Cisco ASA ( CISCO_ASA_FIREWALL )
Cisco Firepower NGFW ( CISCO_FIREPOWER_FIREWALL )
Cisco Internetwork Operating System ( CISCO_IOS )
Cisco ISE ( CISCO_ISE )
Cisco Router ( CISCO_ROUTER )
Cisco Secure Access ( CISCO_SECURE_ACCESS )
Cisco Switch ( CISCO_SWITCH )
Cisco TACACS+ ( CISCO_TACACS )
Cisco UCM ( CISCO_UCM )
Cisco Umbrella Audit ( CISCO_UMBRELLA_AUDIT )
Citrix Netscaler ( CITRIX_NETSCALER )
Claroty Continuous Threat Detection ( CLAROTY_CTD )
Claroty Enterprise Management Console ( CLAROTY_EMC )
Claroty Xdome ( CLAROTY_XDOME )
Cloud SQL ( GCP_CLOUDSQL )
Cloudflare ( CLOUDFLARE )
Cloudflare Audit ( CLOUDFLARE_AUDIT )
Cloudflare WAF ( CLOUDFLARE_WAF )
Cloudflare Warp ( CLOUDFLARE_WARP )
Corelight ( CORELIGHT )
CrowdStrike Alerts API ( CS_ALERTS )
CrowdStrike Detection Monitoring ( CS_DETECTS )
CrowdStrike Falcon ( CS_EDR )
CrowdStrike Falcon Stream ( CS_STREAM )
CyberArk ( CYBERARK )
CyberArk Endpoint Privilege Manager (EPM) ( CYBERARK_EPM )
CyberArk Privileged Access Manager (PAM) ( CYBERARK_PAM )
Dell EMC Data Domain ( DELL_EMC_DATA_DOMAIN )
Dell Switch ( DELL_SWITCH )
Duo Auth ( DUO_AUTH )
F5 ASM ( F5_ASM )
F5 BIGIP LTM ( F5_BIGIP_LTM )
F5 Distributed Cloud Services ( F5_DCS )
F5 DNS ( F5_DNS )
FireEye NX ( FIREEYE_NX )
Forcepoint NGFW ( FORCEPOINT_FIREWALL )
Forcepoint Proxy ( FORCEPOINT_WEBPROXY )
FortiGate ( FORTINET_FIREWALL )
Fortinet FortiAnalyzer ( FORTINET_FORTIANALYZER )
Google Cloud ( GCP_SECURITYCENTER_THREAT )
Google Cloud ( GCP_MONITORING_ALERTS )
Google Threat Intelligence IOC ( GTI_IOC )
GreyNoise ( GREYNOISE )
Halcyon Anti Ransomware ( HALCYON )
HP Aruba (ClearPass) ( CLEARPASS )
Huawei Switches ( HUAWEI_SWITCH )
Infoblox DNS ( INFOBLOX_DNS )
Island Browser logs ( ISLAND_BROWSER )
Kubernetes Node ( KUBERNETES_NODE )
Linux Auditing System (AuditD) ( AUDITD )
Linux Sysmon ( LINUX_SYSMON )
ManageEngine ADAudit Plus ( ADAUDIT_PLUS )
Maria Database ( MARIA_DB )
McAfee IPS ( MCAFEE_IPS )
McAfee Web Gateway ( MCAFEE_WEBPROXY )
Microsoft Azure Activity ( AZURE_ACTIVITY )
Microsoft Defender For Cloud ( MICROSOFT_DEFENDER_CLOUD_ALERTS )
Microsoft Graph API Alerts ( MICROSOFT_GRAPH_ALERT )
Microsoft IIS ( IIS )
Microsoft SQL Server ( MICROSOFT_SQL )
MISP Threat Intelligence ( MISP_IOC )
Mobileiron ( MOBILEIRON )
MySQL ( MYSQL )
NetApp ONTAP ( NETAPP_ONTAP )
Netskope V2 ( NETSKOPE_ALERT_V2 )
NGINX ( NGINX )
Nozomi Networks Scada Guardian ( NOZOMI_GUARDIAN )
Office 365 ( OFFICE_365 )
Open Cybersecurity Schema Framework (OCSF) ( OCSF )
Orca Cloud Security Platform ( ORCA )
Palo Alto Networks Firewall ( PAN_FIREWALL )
Palo Alto Panorama ( PAN_PANORAMA )
Palo Alto Prisma Cloud Alert payload ( PAN_PRISMA_CA )
Ping One ( PING_ONE )
PingIdentity Directory Server Logs ( PING_DIRECTORY )
PostFix Mail ( POSTFIX_MAIL )
PostgreSQL ( POSTGRESQL )
Proofpoint On Demand ( PROOFPOINT_ON_DEMAND )
Proofpoint Tap Alerts ( PROOFPOINT_MAIL )
Proofpoint Threat Response ( PROOFPOINT_TRAP )
Radware Web Application Firewall ( RADWARE_FIREWALL )
Red Hat OpenShift ( REDHAT_OPENSHIFT )
Rubrik Security Cloud ( RUBRIK_SECURITY_CLOUD )
SailPoint IdentityIQ ( SAILPOINT_IIQ )
Salesforce ( SALESFORCE )
SAP Change Document ( SAP_CHANGE_DOCUMENT )
SAP Gateway ( SAP_GATEWAY )
SAP HANA ( SAP_HANA )
SAP Hana Audit ( SAP_HANA_AUDIT )
SAP Identity and Authentication Data ( SAP_IDENTITY_AND_AUTH_DATA )
SAP Internet Communication Manager ( SAP_ICM )
SAP Security Audit ( SAP_SECURITY_AUDIT )
SAP Webdispatcher ( SAP_WEBDISP )
Security Command Center Posture Violation ( GCP_SECURITYCENTER_POSTURE_VIOLATION )
Security Command Center Toxic Combination ( GCP_SECURITYCENTER_TOXIC_COMBINATION )
Sophos Central ( SOPHOS_CENTRAL )
STIX Threat Intelligence ( STIX )
Stormshield Firewall ( STORMSHIELD_FIREWALL )
Suricata EVE ( SURICATA_EVE )
Symantec Endpoint Protection ( SEP )
Sysdig ( SYSDIG )
Tableau ( TABLEAU )
Teleport Access Plane ( TELEPORT_ACCESS_PLANE )
Trend Micro ( TIPPING_POINT )
Tripwire ( TRIPWIRE_FIM )
TXOne Stellar ( TRENDMICRO_STELLAR )
Ubika Waf ( UBIKA_WAF )
Unix system ( NIX_SYSTEM )
Velo Firewall ( VELO_FIREWALL )
Veritas NetBackup ( VERITAS_NETBACKUP )
Versa Firewall ( VERSA_FIREWALL )
Vmware Avinetworks iWAF ( VMWARE_AVINETWORKS_IWAF )
VMware ESXi ( VMWARE_ESX )
VMware vCenter ( VMWARE_VCENTER )
WatchGuard ( WATCHGUARD )
Windows DNS ( WINDOWS_DNS )
Windows Event ( WINEVTLOG )
Windows Event (XML) ( WINEVTLOG_XML )
wiz.io ( WIZ_IO )
Workday Audit Logs ( WORKDAY_AUDIT )
Zscaler ( ZSCALER_WEBPROXY )
ZScaler VPN ( ZSCALER_VPN )
The following log types were added without a default parser. Each parser is listed by product name and log_type value, where applicable.
Alibaba Security Center ( ALIBABA_SECURITY_CENTER )
Apache Airflow ( APACHE_AIRFLOW )
Baramundi ( BARAMUNDI )
Bravura Security ( BRAVURA )
Buildkite Audit ( BUILDKITE_AUDIT )
Palo Alto Cortex Xpanse ( CORTEX_XPANSE )
Cyfirma DeCYFIR ServiceNow ( CYFIRMA_DECYFIR )
DATEV ( DATEV )
ELO ( ELO )
Forcepoint Secure Web Gateway ( FORCEPOINT_SWG )
JumpServer PAM ( JUMPSERVER_PAM )
Keep Aware ( KEEP_AWARE )
Lark Suite ( LARK_SUITE )
Macmon ( MACMON )
Mamori Database Activity Monitoring ( MAMORI_DAM )
N8N Security Audit Logs ( N8N_SECURITY_AUDIT_LOGS )
Oracle Cloud Infrastructure LoadBalancer ( OCI_LOADBALANCER )
OpenText Self Service Password Reset ( OPENTEXT_SSPR )
Rackspace ( RACKSPACE )
Secui Bluemax NGF ( SECUI_BLUEMAX_NGF )
Symantec Advanced Threat Protection ( SYMANTEC_ATP )
Tenable Vulnerabilities Management ( TENABLE_VMGNT )
Trellix EDRF Trace Data and Telemetry ( TRELLIX_EDRF )
Trend Micro Vision One Endpoint Vulnerabilities ( TRENDMICRO_VISION_ONE_ENDPOINT_VULNERABILITIES )
Zafran ( ZAFRAN )
March 02, 2026
Feature
New Unified rules interface
This feature is currently in Preview.
Google SecOps has launched a unified rules interface that
brings custom and curated rule management into a single, cohesive workflow.
This update optimizes detection engineering with a redesigned dashboard, an
advanced rule editor, and expanded API capabilities to streamline rule
deployment and troubleshooting.
Key enhancements
Developer and IDE enhancements :
Centralized management: A unified, single dashboard lets you browse, filter, and
manage both custom and curated rules from one location. You can also update
configurations for multiple rules simultaneously.
Curated rule transparency: You can now view the YARA-L text of
curated rules, search directly within their logic, and independently toggle
individual rule statuses without needing to alter the parent rule pack
deployment.
Integrated IDE experience: The rule editor now features an enhanced IDE
experience with inline error highlights, UDM field definitions on hover.
Expanded API and structured search :
The Rules API and dashboard have been upgraded to support deeper programmatic
access and complex filtering:
Robust search syntax: Both the UI and API now support AIP-160 compliant
structured search. You can filter rules by text, tags, author, and execution
state.
Batch modifications: The rules.modifyRules method now supports
non-atomic batch updates, letting you change live status, alerting status, tags,
and archive status across multiple rules in a single API request.
Advanced resource views: The rules.list method introduces CONFIG_ONLY
and TRENDS views. These views provide expanded deployment information, access
to curated rule resources, and larger page sizes (up to 5000 results) for
efficient querying.
For details, see Manage unified rules .
February 25, 2026
Feature
Added support for Google Cloud VPC Service Controls
This feature is currently in Preview.
VPC Service Controls helps protect against accidental or targeted action
by external entities or insider entities, which helps to minimize unwarranted
data exfiltration risks from Google Cloud services. You can use VPC Service Controls to create perimeters
that protect the resources and data of services that you explicitly specify. For more information, see Overview of VPC Service Controls .
February 24, 2026
Feature
New: cross joins in multi-stage queries
You can now use cross joins in YARA-L 2.0 multi-stage queries let you compare individual UDM event data against aggregated statistics calculated in previous YARA-L stages. They are supported in:
Search
Dashboards
For more information, see Cross joins in multi-stage queries .
Feature
RBAC for ingestion metrics
Administrators can now use RBAC for ingestion metrics to restrict visibility of system health data, such as ingestion volume, errors, and throughput, based on a user's business scope.
The Data Ingestion and Health dashboard now uses Data Access scopes. When a scoped user loads the dashboard, the system automatically filters metrics to show only data that matches their assigned labels: Namespace, Log Type, and Ingestion Source.
For more information, see Ingestion metrics .
February 23, 2026
Announcement
New parser documentation now available
New parser documentation is available to help you ingest and normalize logs from the following sources:
Collect Big Switch BigCloudFabric logs
Collect BMC AMI Defender logs
Collect Broadcom Support Portal Audit logs
Collect CA ACF2 logs
Collect CA LDAP logs
Collect ChromeOS XDR logs
Collect Chronicle SOAR Audit logs
Collect Cisco CTS logs
Collect Cisco FireSIGHT Management Center logs
Collect Cisco Vision Dynamic Signage Director logs
Collect ClamAV logs
Collect Cofense logs
Collect Crowdstrike IOC logs
Collect Custom Application Access logs
Collect Custom Security Data Analytics logs
Collect Cyber 2.0 IDS logs
Collect CyberArk logs
Collect Cybereason EDR logs
Collect Dataminr Alerts logs
Collect Digital Shadows Indicators logs
Collect Mimecast Mail V2 logs
Collect Okta User Context logs
Collect RH-ISAC IOC logs
Collect ServiceNow CMDB data
February 20, 2026
Feature
New capabilities in Feeds page
The following options have been added to the Feeds page:
Search
Filtering (using feed attributes)
Pagination
Last Refreshed Time
Feed Metadata Export to CSV
February 12, 2026
Feature
Advanced Joins in Search
Google SecOps now supports expanded capabilities for correlating data across
multiple sources. These join operations are also supported in multistage queries.
Joins without a match section : You can now use join operations to correlate
and combine data from multiple sources based on common field values without
requiring a match section (unlike statistical joins). Results are displayed in a
Joins table, which you can download as a CSV, or for event-to-event joins,
exported to a datatable for further analysis.
For more information, see Implement joins without a match section .
Outer joins : Search now supports left and right outer joins. Unlike standard
inner joins, these operations let you retrieve all records from a primary
data source even if no matching entry exists in the secondary source (unmatched
fields are returned as null ). This action lets you correlate data
without losing unmatched events.
For more information, see Correlate data with outer joins .
February 09, 2026
Announcement
Enhanced rule observability: New metadata, visual indicators, and dashboards
Google Security Operations has introduced updates to how detection and alert data is processed and visualized. These changes help Google SecOps teams distinguish between primary rule runs and rule replays , which provides clarity on detection delays and the impact of late-arriving enrichment data.
Key improvements
Enhanced metadata : Detection and alert objects now include specific metadata that identifies whether they were produced during a primary rule run, or as part of a rule replay or retrohunt.
Improved troubleshooting : This data lets Google SecOps teams definitively answer critical operational questions, such as the cause of perceived detection delays or the specific impact of late-arriving enrichment data on active rules.
Rule replay insights : Learn more about the distinction between primary runs and replays to manage the re-enrichment of Unified Data Model (UDM) events. For detailed definitions and technical workflows, see Understand rule replays and Understand rule detection delays .
New detection dashboard : To support these backend metadata changes, a new Detection Health dashboard is now available. This interface provides a visual representation of rule performance and replay status, letting teams monitor detection health more effectively.
Custom reporting : There are new fields available in the Detections schema , letting you build custom dashboards.
New metadata and third-party integration : Detections and alerts now emit specific metadata to help customers track timing and latency. This data is available for integration with third-party systems using the following fields:
detectionTimingDetails : An enum identifying the run type:
DETECTION_TIMING_DETAILS_REPROCESSING
DETECTION_TIMING_DETAILS_RETROHUNT
DETECTION_TIMING_DETAILS_UNSPECIFIED
latencyMetrics : Includes timestamps for oldestIngestionTime , newestIngestionTime , oldestEventTime , and newestEventTime .
Enhanced platform and visual indicators :
Alerts and rule details : A new visual indicator in the Detection Type column provides granular details on hover.
Filter facets : The Alerts lister page now includes detection timing details as a filterable facet.
SOAR integration : In the Case Overview , the Composite Detections table now carries through the same iconography for a consistent investigation experience.
February 04, 2026
Feature
The re.capture_all function is now available
The new re.capture_all YARA-L 2.0 function is available in Rules, Search, and Dashboards.
Use the re.capture_all() function to extract every non-overlapping match of a regular expression from a string. While the standard re.capture function stops after the first match it finds, the re.capture_all() function continues through the entire string to identify every instance that matches your pattern.
Announcement
New parser documentation now available
New parser documentation is available to help you ingest and normalize logs from the following sources:
Collect ForgeRock OpenIDM logs
Collect Forseti Open Source logs
Collect Fortinet FortiClient logs
Collect Fortinet FortiDDoS logs
Collect Fortinet FortiEDR logs
Collect Fortinet FortiManager logs
Collect Fortinet Switch logs
Collect Fortra Powertech SIEM Agent logs
Collect Google App Engine logs
Collect Google Cloud DNS Threat Detector log s
Collect Google Cloud Monitoring alerting activity logs
Collect Google Cloud Network Connectivity Center logs
Collect Google Cloud Secure Web Proxy logs
Collect Gmail logs
Collect H3C Comware Platform Switch logs
Collect HackerOne logs
Collect Hillstone Firewall logs
Collect Hitachi Content Platform logs
Collect HYPR MFA logs
Collect IBM Guardium logs
February 03, 2026
Feature
Share custom column sets
Google SecOps now lets you share custom sets of columns in the Events table for
consistent analysis across teams.
For more details, see Search for events and alerts
Announcement
Data RBAC global scope changes for ATI
To enhance data security, several features related to Indicators of Compromise
(IOCs) and Emerging Threats now require global scope data RBAC permissions.
Users without global scope will see restricted information in the following areas:
Emerging threats page: IOC match counts per campaign are no longer visible.
Entity widget overlay : The Indicators table is hidden or appears empty.
Threat details page: The related entities, IOC matches, and GTI IOC tables are no longer visible.
Entity summary widget: GTI scores are excluded from the overlay.
IOC details page: The Indicator Details tab doesn't populate.
API impact : API calls to IocService and ThreatCollectionService now
require global scope. Direct calls made with the CLI or client libraries fail
without this permission.
Required : Google SecOps administrators should review user roles and
grant global scope to those who require continued access to these threat
intelligence features.
Note: This change follows a phased rollout throughout the week of
February 02, 2026 to February 08, 2026.
Deprecated
Mute an IoC deprecated
The Mute an IoC feature is deprecated, and the IOC details page no longer displays the Mute indicator.
February 02, 2026
Change
Google SecOps has updated the list of supported default parsers. Updates
propagate gradually; changes typically appear in your region within one to four
business days. For more information, see
Supported log types and default parsers .
The following supported default parsers have been updated. Each parser is listed
by product name and log_type value, where applicable. This list includes both
released default parsers and pending parser updates.
A10 Load Balancer ( A10_LOAD_BALANCER )
AIX system ( AIX_SYSTEM )
Akamai Cloud Monitor ( AKAMAI_CLOUD_MONITOR )
AlgoSec Security Management ( ALGOSEC )
Amazon API Gateway ( AWS_API_GATEWAY )
Apache ( APACHE )
Apple macOS ( MACOS )
AppOmni ( APPOMNI )
Arcsight CEF ( ARCSIGHT_CEF )
Arista Switch ( ARISTA_SWITCH )
Aruba ( ARUBA_WIRELESS )
Aruba Airwave ( ARUBA_AIRWAVE )
Aruba EdgeConnect SD-WAN ( ARUBA_EDGECONNECT_SDWAN )
Aruba Switch ( ARUBA_SWITCH )
Attivo Networks ( ATTIVO )
Auth0 ( AUTH_ZERO )
Automation Anywhere ( AUTOMATION_ANYWHERE )
Avanan Email Security ( AVANAN_EMAIL )
AWS Aurora ( AWS_AURORA )
AWS Cloudtrail ( AWS_CLOUDTRAIL )
AWS CloudWatch ( AWS_CLOUDWATCH )
AWS Elastic Load Balancer ( AWS_ELB )
AWS GuardDuty ( GUARDDUTY )
AWS RDS ( AWS_RDS )
AWS Security Hub ( AWS_SECURITY_HUB )
AWS WAF ( AWS_WAF )
Azure AD ( AZURE_AD )
Azure AD Directory Audit ( AZURE_AD_AUDIT )
Azure AD Sign-In ( AZURE_AD_SIGNIN )
Azure Front Door ( AZURE_FRONT_DOOR )
Barracuda Email ( BARRACUDA_EMAIL )
Barracuda WAF ( BARRACUDA_WAF )
BeyondTrust ( BOMGAR )
BeyondTrust BeyondInsight ( BEYONDTRUST_BEYONDINSIGHT )
BeyondTrust Endpoint Privilege Management ( BEYONDTRUST_ENDPOINT )
BeyondTrust Secure Remote Access ( BEYONDTRUST_REMOTE_ACCESS )
BIND ( BIND_DNS )
Bindplane Agent ( BINDPLANE_AGENT )
Blue Coat Proxy ( BLUECOAT_WEBPROXY )
Box ( BOX )
Carbon Black ( CB_EDR )
Cato Networks ( CATO_NETWORKS )
Check Point ( CHECKPOINT_FIREWALL )
CipherTrust Manager ( CIPHERTRUST_MANAGER )
Cisco Application Centric Infrastructure ( CISCO_ACI )
Cisco ASA ( CISCO_ASA_FIREWALL )
Cisco Email Security ( CISCO_EMAIL_SECURITY )
Cisco Firepower NGFW ( CISCO_FIREPOWER_FIREWALL )
Cisco Internetwork Operating System ( CISCO_IOS )
Cisco ISE ( CISCO_ISE )
Cisco Meraki ( CISCO_MERAKI )
Cisco PIX Firewall ( CISCO_PIX_FIREWALL )
Cisco Router ( CISCO_ROUTER )
Cisco Stealthwatch ( CISCO_STEALTHWATCH )
Cisco Switch ( CISCO_SWITCH )
Cisco Umbrella Audit ( CISCO_UMBRELLA_AUDIT )
Cisco Umbrella DNS ( UMBRELLA_DNS )
Cisco vManage SD-WAN ( CISCO_SDWAN )
Cisco WLC/WCS ( CISCO_WIRELESS )
Cisco WSA ( CISCO_WSA )
Citrix Netscaler ( CITRIX_NETSCALER )
Claroty Continuous Threat Detection ( CLAROTY_CTD )
Claroty Xdome ( CLAROTY_XDOME )
Cloud SQL ( GCP_CLOUDSQL )
Cloudflare ( CLOUDFLARE )
Cloudflare Audit ( CLOUDFLARE_AUDIT )
Compute Engine ( GCP_COMPUTE )
Corelight ( CORELIGHT )
CrowdStrike Alerts API ( CS_ALERTS )
CrowdStrike Detection Monitoring ( CS_DETECTS )
CrowdStrike Falcon ( CS_EDR )
CrowdStrike Falcon Stream ( CS_STREAM )
CyberArk ( CYBERARK )
CyberArk Endpoint Privilege Manager (EPM) ( CYBERARK_EPM )
CyberArk Privileged Access Manager (PAM) ( CYBERARK_PAM )
Cyolo Secure Remote Access for OT ( CYOLO_OT )
Darktrace ( DARKTRACE )
Delinea Secret Server ( DELINEA_SECRET_SERVER )
Dell ECS Enterprise Object Storage ( DELL_ECS )
Dell Switch ( DELL_SWITCH )
Duo Auth ( DUO_AUTH )
ExtraHop RevealX ( EXTRAHOP )
Extreme Wireless ( EXTREME_WIRELESS )
F5 Advanced Firewall Management ( F5_AFM )
F5 ASM ( F5_ASM )
F5 BIGIP Access Policy Manager ( F5_BIGIP_APM )
F5 BIGIP LTM ( F5_BIGIP_LTM )
F5 Distributed Cloud Services ( F5_DCS )
Fastly CDN ( FASTLY_CDN )
FireEye ETP ( FIREEYE_ETP )
FireEye NX ( FIREEYE_NX )
Forcepoint Email Security ( FORCEPOINT_EMAILSECURITY )
Forescout eyeInspect ( FORESCOUT_EYEINSPECT )
FortiGate ( FORTINET_FIREWALL )
Fortinet FortiAnalyzer ( FORTINET_FORTIANALYZER )
Fortinet Fortimanager ( FORTINET_FORTIMANAGER )
Fortinet Web Application Firewall ( FORTINET_FORTIWEB )
GCP_APP_ENGINE ( GCP_APP_ENGINE )
GCP_MODEL_ARMOR ( GCP_MODEL_ARMOR )
GitHub ( GITHUB )
GitHub Dependabot ( GITHUB_DEPENDABOT )
Google Cloud Audit ( GCP_CLOUDAUDIT )
Google Threat Intelligence ( GCP_THREATINTEL )
H3C Comware Platform Switch ( H3C_SWITCH )
Hashicorp Vault ( HASHICORP )
HP Aruba (ClearPass) ( CLEARPASS )
Huawei Switches ( HUAWEI_SWITCH )
IBM DataPower Gateway ( IBM_DATAPOWER )
IBM DB2 ( DB2_DB )
Illumio Core ( ILLUMIO_CORE )
Imperva ( IMPERVA_WAF )
Imperva DRA ( IMPERVA_DRA )
Island Browser logs ( ISLAND_BROWSER )
Jamf pro context ( JAMF_PRO_CONTEXT )
JumpCloud Directory Insights ( JUMPCLOUD_DIRECTORY_INSIGHTS )
Juniper MX Router ( JUNIPER_MX )
Keycloak ( KEYCLOAK )
KnowBe4 PhishER ( KNOWBE4_PHISHER )
Kolide Endpoint Security ( KOLIDE )
Kubernetes Node ( KUBERNETES_NODE )
Linux Auditing System (AuditD) ( AUDITD )
McAfee DLP ( MCAFEE_DLP )
McAfee ePolicy Orchestrator ( MCAFEE_EPO )
McAfee Web Gateway ( MCAFEE_WEBPROXY )
Microsoft AD FS ( ADFS )
Microsoft Defender For Cloud ( MICROSOFT_DEFENDER_CLOUD_ALERTS )
Microsoft Defender for Endpoint ( MICROSOFT_DEFENDER_ENDPOINT )
Microsoft Graph API Alerts ( MICROSOFT_GRAPH_ALERT )
Microsoft IIS ( IIS )
Microsoft Intune ( AZURE_MDM_INTUNE )
Microsoft PowerShell ( POWERSHELL )
Microsoft SQL Server ( MICROSOFT_SQL )
Mimecast Mail V2 ( MIMECAST_MAIL_V2 )
MISP Threat Intelligence ( MISP_IOC )
Mobileiron ( MOBILEIRON )
MySQL ( MYSQL )
NetApp ONTAP ( NETAPP_ONTAP )
Netfilter IPtables ( NETFILTER_IPTABLES )
NetIQ Access Manager ( NETIQ_ACCESS_MANAGER )
Netskope V2 ( NETSKOPE_ALERT_V2 )
Netskope Web Proxy ( NETSKOPE_WEBPROXY )
Network Policy Server ( MICROSOFT_NPS )
NGINX ( NGINX )
Nozomi Networks Scada Guardian ( NOZOMI_GUARDIAN )
Nutanix Prism ( NUTANIX_PRISM )
Obsidian ( OBSIDIAN )
Office 365 ( OFFICE_365 )
Okta ( OKTA )
Onapsis ( ONAPSIS )
One Identity TPAM ( ONEIDENTITY_TPAM )
OneLogin ( ONELOGIN_SSO )
Open Cybersecurity Schema Framework (OCSF) ( OCSF )
Oracle ( ORACLE_DB )
Palo Alto Networks Firewall ( PAN_FIREWALL )
Palo Alto Panorama ( PAN_PANORAMA )
Ping Identity ( PING )
PostFix Mail ( POSTFIX_MAIL )
PostgreSQL ( POSTGRESQL )
Proofpoint CASB ( PROOFPOINT_CASB )
Proofpoint Email Filter ( PROOFPOINT_MAIL_FILTER )
Proofpoint On Demand ( PROOFPOINT_ON_DEMAND )
Proofpoint Tap Alerts ( PROOFPOINT_MAIL )
Pulse Secure ( PULSE_SECURE_VPN )
QNAP Systems NAS ( QNAP_NAS )
Radware Web Application Firewall ( RADWARE_FIREWALL )
Recorded Future ( RECORDED_FUTURE_IOC )
Red Hat OpenShift ( REDHAT_OPENSHIFT )
Salesforce ( SALESFORCE )
SAP Sybase Adaptive Server Enterprise Database ( SAP_ASE )
Security Command Center Chokepoint ( GCP_SECURITYCENTER_CHOKEPOINT )
Security Command Center Posture Violation ( GCP_SECURITYCENTER_POSTURE_VIOLATION )
Security Command Center Threat ( GCP_SECURITYCENTER_THREAT )
Security Command Center Toxic Combination ( GCP_SECURITYCENTER_TOXIC_COMBINATION )
ServiceNow Audit ( SERVICENOW_AUDIT )
Snare System Diagnostic Logs ( SNARE_SOLUTIONS )
Snyk Group level audit/issues logs ( SNYK_ISSUES )
Solaris system ( SOLARIS_SYSTEM )
Sophos Central ( SOPHOS_CENTRAL )
STIX Threat Intelligence ( STIX )
Stormshield Firewall ( STORMSHIELD_FIREWALL )
Sublime Security ( SUBLIMESECURITY )
Suricata EVE ( SURICATA_EVE )
Swift Alliance Messaging Hub ( SWIFT_AMH )
Symantec DLP ( SYMANTEC_DLP )
Symantec Endpoint Protection ( SEP )
Symantec Messaging Gateway ( SYMANTEC_MAIL )
Tableau ( TABLEAU )
TCPWave DDI ( TCPWAVE_DDI )
TeamViewer ( TEAMVIEWER )
Tenable Active Directory Security ( TENABLE_ADS )
Tenable OT ( TENABLE_OT )
Tenable.io ( TENABLE_IO )
Thinkst Canary ( THINKST_CANARY )
ThreatConnect IOC V3 ( THREATCONNECT_IOC_V3 )
Trellix HX Event Streamer ( TRELLIX_HX_ES )
Trend Micro ( TIPPING_POINT )
Trend Micro Vision One ( TRENDMICRO_VISION_ONE )
Trend Micro Vision One Workbench ( TRENDMICRO_VISION_ONE_WORKBENCH )
TrendMicro Deep Discovery Inspector ( TRENDMICRO_DDI )
TXOne Stellar ( TRENDMICRO_STELLAR )
Unifi AP ( UNIFI_AP )
Unix system ( NIX_SYSTEM )
Vectra Detect ( VECTRA_DETECT )
Vectra XDR ( VECTRA_XDR )
Veritas NetBackup ( VERITAS_NETBACKUP )
Versa Firewall ( VERSA_FIREWALL )
VMware ESXi ( VMWARE_ESX )
VMware NSX ( VMWARE_NSX )
VMware vCenter ( VMWARE_VCENTER )
WatchGuard ( WATCHGUARD )
Windows DNS ( WINDOWS_DNS )
Windows Event ( WINEVTLOG )
Windows Event (XML) ( WINEVTLOG_XML )
Wiz.io ( WIZ_IO )
Workday Audit Logs ( WORKDAY_AUDIT )
Workspace Activities ( WORKSPACE_ACTIVITY )
Workspace Alerts ( WORKSPACE_ALERTS )
Zimperium ( ZIMPERIUM )
Zscaler ( ZSCALER_WEBPROXY )
Zscaler CASB ( ZSCALER_CASB )
Zscaler DLP ( ZSCALER_DLP )
ZScaler DNS ( ZSCALER_DNS )
Zscaler Internet Access Audit Logs ( ZSCALER_INTERNET_ACCESS )
ZScaler NGFW ( ZSCALER_FIREWALL )
Zscaler Private Access ( ZSCALER_ZPA )
Zscaler Secure Private Access Audit Logs ( ZSCALER_ZPA_AUDIT )
Zscaler Tunnel ( ZSCALER_TUNNEL )
Zywall ( ZYWALL )
The following log types were added without a default parser. Each parser is listed by product name and log_type value, where applicable.
Aikido ( AIKIDO )
Akamai API Security ( AKAMAI_API_SECURITY )
Alkira IP Flow ( ALKIRA_IP_FLOW )
Atlassian Guard Detect ( ATLASSIAN_GUARD_DETECT )
BlinkOps ( BLINKOPS )
Canvas LMS ( CANVAS_LMS )
Cisco Secure Email Threat Defense ( CISCO_SECURE_EMAIL_THREAT_DEFENSE )
Cisco StarOS ( CISCO_STAR_OS )
Citadel Identity360 ( CITADEL_IDENTITY360 )
Cyware Threat Intelligence Exchange ( CTIX )
Cyberark Identity Audit ( CYBERARK_IDENTITY_AUDIT )
CyCognito ASM ( CYCOGNITO_ASM )
Dell VxRail ( DELL_VXRAIL )
Gene6 FTP Server ( GENE6_FTP )
IBM Copy Services Manager ( IBM_CSM )
LangSmith Audit ( LANGSMITH_AUDIT )
Mellanox Switch ( MELLANOX_SWITCH )
Microsoft Entra ID Protection ( MICROSOFT_ENTRA_ID_PROTECTION )
NSFOCUS Next Generation Intrusion Prevention System ( NSFOCUS_NGIPS )
Perplexity ( PERPLEXITY )
Pleasant Password Server ( PLEASANT_PASSWORD_SERVER )
Prompt Security ( PROMPT_SECURITY )
Qualtrics Audit ( QUALTRICS_AUDIT )
Rancher API Audit Log ( RANCHER_API_AUDIT_LOG )
Rubrik Security Cloud ( RUBRIK_SECURITY_CLOUD )
SAP Business Warehouse ( SAP_BW )
SAP Change Document ( SAP_CHANGE_DOCUMENT )
SAP Gateway ( SAP_GATEWAY )
SAP Hana Audit ( SAP_HANA_AUDIT )
Scale Computing ( SCALE_COMPUTING )
Slack API ( SLACK_API )
Snowplow ( SNOWPLOW )
Sterling Order Management System Data ( STERLING_OMS_DATA )
Strivacity ( STRIVACITY )
Tencent CloudAudit ( TENCENT_CLOUD_AUDIT )
Trellix EX ( TRELLIX_EX )
Unifi System ( UNIFI_SYSTEM )
Windows Bindplane ( WINDOWS_BINDPLANE )
Witness AI Control ( WITNESS_AI_CONTROL )
Zendesk Advanced Data Privacy and Protection ( ZENDESK_ADPP )
January 30, 2026
Announcement
The following v2 feed types, which utilize Google Storage Transfer Service (STS), are now in General Availability:
Google Cloud Storage v2
Amazon S3 v2
Google Cloud Storage (Event Driven)
Amazon SQS v2
Azure Blobstore v2
January 29, 2026
Feature
Enhanced rule observability for detections
Google SecOps now provides increased visibility into detection timing to help
improve dashboard and reporting accuracy. You can now easily distinguish whether
a detection was generated during a primary rule run or through a
rule replay . This data is available
in dashboards and as a filter in the Alerts lister page using the field
collection.detection_timing_details .
January 21, 2026
Feature
Direct ingestion for Google Cloud Model Armor logs
You can now ingest Google Cloud Model Armor logs ( GCP_MODEL_ARMOR ) directly into Google
SecOps. Use an export filter for direct ingestion and access the logs through
Google Cloud logging. Model Armor logs provide a unified window into AI-specific
threats, such as prompt injection and sensitive data leakage.
For more information, see Model Armor Documentation to Configure Logging .
Announcement
New parser documentation now available
New parser documentation is available to help you ingest and normalize logs from the following sources:
Collect Active Countermeasures AI-Hunter logs
Collect ADVA Fiber Service Platform logs
Collect AIX system logs
Collect Akamai SIEM Connector logs
Collect AMD Pensando DSS firewall logs
Collect Azure NSG Flow logs
Collect Cloudflare Page Shield logs
Collect FingerprintJS logs
Collect FireEye eMPS logs
Collect Forcepoint Email Security logs
Collect Forcepoint NGFW logs
Collect Fortinet FortiSASE logs
Collect IBM DB2 logs
Collect ManageEngine ADManager Plus logs
Collect Microsoft Azure Resource logs
Collect Microsoft Intune Context logs
Collect Ubiquiti Unifi switch logs
Collect Vectra Detect logs
Collect Vectra Stream logs
Collect Voltage SecureMail logs
Collect Wallix Bastion logs
January 16, 2026
Feature
Perform all-time searches
You can now run searches over your full retention period by clicking the Time Picker
on the Search editor panel and selecting All Time . This functionality is
supported for event searches, and results remain limited to a maximum of 1M events.
For more information, see Search for events and alerts .
January 13, 2026
Announcement
Auto extraction general availability
As part of the GA release for the auto extraction feature, customers now need to opt-in and choose which fields to extract. (Full auto extraction is no longer supported.) The opt-in functionality does not impact the extracted fields that are already in use (in saved searches and rules), because those fields have been automatically opted-in as part of the GA migration.
For more information, see Auto Extraction overview .
Announcement
Self-service deprovisioning general availability
The self-service deprovisioning feature is now GA.
For more information, see Self-service deprovisioning for Google SecOps .
January 07, 2026
Change
Expanded capabilities for Gemini in SecOps
You can now use the Gemini assistant in Google SecOps to answer questions beyond the scope of security or the product. You can integrate the full power of Gemini (for example, general knowledge, coding, and data analysis) without switching tabs or leaving your workflow.
For more information, see
Gemini in Google SecOps .
December 24, 2025
Feature
ThreatConnect IOC V3 Connector
Google SecOps now supports the ingestion of Indicators of Compromise (IOCs) from ThreatConnect using the v3 REST API. This updated connector replaces the existing v2-based integration and introduces several enhancements:
Advanced Filtering with TQL : Use ThreatConnect Query Language (TQL) to perform highly targeted searches based on complex criteria like confidence scores, tags, or specific timeframes.
Efficient Single-Call Data Ingestion : Ingest complete indicator objects—including attributes, tags, and security labels—in a single API call to reduce overhead and improve performance.
Synchronization Gaps : Changes in ThreatConnect (for example, ThreatAssessmentScore, confidence, tags) are now replicated into the platform every 30 minutes.
Data ingested through this connector is identified by the new log type THREATCONNECT_IOC_V3 .
For more information, see Collect ThreatConnect IOC logs using the v3 API .
Announcement
Understand your Google SecOps billing components
A new document is available that helps you understand your Google Security Operations billing components. The document provides information about how to track your usage and the related cost.
For more information, see Understand your Google SecOps billing .
December 18, 2025
Announcement
Understand how to view your billed ingestion volume
A new document is available that helps you understand your billed ingestion volume. The document provides instructions on how to view and monitor the ingestion volume for the various tenants that you manage.
For more information, see View your billed ingestion volume .
December 10, 2025
Announcement
Learn key differences between SPL and YARA-L 2.0
A new guide is available to explain the key differences between Splunk Search Processing Language (SPL) and Google Security Operations YARA-L 2.0. The guide provides examples for converting common SPL queries and aims to accelerate the onboarding process for security professionals who transition to YARA-L 2.0.
For more information, see Transition from SPL to YARA-L .
December 08, 2025
Feature
N OF and OR syntax updates
You can now use the N OF syntax and the or operator to write flexible and
conditional logic within the condition section of your query. These features
let you combine multiple conditions, reducing the overall complexity of your
query syntax.
For more information, see Use or in the condition section and Use N OF syntax with event variables .
December 03, 2025
Change
Google SecOps has updated the list of supported default parsers. Parsers are updated gradually, so it might take one to four days before you see the changes reflected in your region.
The following supported default parsers have been updated. Each parser is listed by product name and log_type value, where applicable. This list includes both released default parsers and pending parser updates.
1Password ( ONEPASSWORD )
A10 Load Balancer ( A10_LOAD_BALANCER )
Abnormal Security ( ABNORMAL_SECURITY )
AIX system ( AIX_SYSTEM )
Akamai SIEM Connector ( AKAMAI_SIEM_CONNECTOR )
AlgoSec Security Management ( ALGOSEC )
Amazon API Gateway ( AWS_API_GATEWAY )
Amazon VPC Transit Gateway Flow Logs ( AWS_VPC_TRANSIT_GATEWAY )
Apache ( APACHE )
Arcsight CEF ( ARCSIGHT_CEF )
Arista Switch ( ARISTA_SWITCH )
Armis Activities ( ARMIS_ACTIVITIES )
Aruba ( ARUBA_WIRELESS )
Aruba Switch ( ARUBA_SWITCH )
Attivo Networks ( ATTIVO )
Auth0 ( AUTH_ZERO )
AWS Aurora ( AWS_AURORA )
AWS CloudFront ( AWS_CLOUDFRONT )
AWS Cloudtrail ( AWS_CLOUDTRAIL )
AWS CloudWatch ( AWS_CLOUDWATCH )
AWS Config ( AWS_CONFIG )
AWS GuardDuty ( GUARDDUTY )
AWS Security Hub ( AWS_SECURITY_HUB )
AWS Session Manager ( AWS_SESSION_MANAGER )
AWS VPC Flow ( AWS_VPC_FLOW )
Azure AD ( AZURE_AD )
Azure AD Directory Audit ( AZURE_AD_AUDIT )
Azure AD Organizational Context ( AZURE_AD_CONTEXT )
Azure Firewall ( AZURE_FIREWALL )
Azure Storage Audit ( AZURE_STORAGE_AUDIT )
Barracuda Firewall ( BARRACUDA_FIREWALL )
BeyondTrust ( BOMGAR )
BeyondTrust BeyondInsight ( BEYONDTRUST_BEYONDINSIGHT )
BeyondTrust Secure Remote Access ( BEYONDTRUST_REMOTE_ACCESS )
Bindplane Agent ( BINDPLANE_AGENT )
Bitdefender ( BITDEFENDER )
Blue Coat Proxy ( BLUECOAT_WEBPROXY )
Cambium Networks ( CAMBIUM_NETWORKS )
Carbon Black ( CB_EDR )
Carbon Black App Control ( CB_APP_CONTROL )
Cequence Bot Defense ( CEQUENCE_BOT_DEFENSE )
Check Point ( CHECKPOINT_FIREWALL )
Check Point Sandblast ( CHECKPOINT_EDR )
Chrome Management ( CHROME_MANAGEMENT )
CipherTrust Manager ( CIPHERTRUST_MANAGER )
Cisco AMP ( CISCO_AMP )
Cisco ASA ( CISCO_ASA_FIREWALL )
Cisco Email Security ( CISCO_EMAIL_SECURITY )
Cisco Firepower NGFW ( CISCO_FIREPOWER_FIREWALL )
Cisco Firewall Services Module ( CISCO_FWSM )
Cisco Internetwork Operating System ( CISCO_IOS )
Cisco IronPort ( CISCO_IRONPORT )
Cisco ISE ( CISCO_ISE )
Cisco Meraki ( CISCO_MERAKI )
Cisco Router ( CISCO_ROUTER )
Cisco Secure Access ( CISCO_SECURE_ACCESS )
Cisco Stealthwatch ( CISCO_STEALTHWATCH )
Cisco Switch ( CISCO_SWITCH )
Cisco UCM ( CISCO_UCM )
Cisco Umbrella Audit ( CISCO_UMBRELLA_AUDIT )
Cisco Umbrella Cloud Firewall ( UMBRELLA_FIREWALL )
Cisco Umbrella DNS ( UMBRELLA_DNS )
Cisco Umbrella IP ( UMBRELLA_IP )
Cisco Umbrella SWG DLP ( CISCO_UMBRELLA_SWG_DLP )
Cisco Umbrella Web Proxy ( UMBRELLA_WEBPROXY )
Cisco WSA ( CISCO_WSA )
Citrix Netscaler ( CITRIX_NETSCALER )
Claroty Continuous Threat Detection ( CLAROTY_CTD )
Claroty Xdome ( CLAROTY_XDOME )
Cloudflare ( CLOUDFLARE )
Cloudflare Network Analytics ( CLOUDFLARE_NETWORK_ANALYTICS )
Cloudflare WAF ( CLOUDFLARE_WAF )
Cloudflare Warp ( CLOUDFLARE_WARP )
Code42 Incydr ( CODE42_INCYDR )
Corelight ( CORELIGHT )
CoSoSys Protector ( ENDPOINT_PROTECTOR_DLP )
CrowdStrike Alerts API ( CS_ALERTS )
CrowdStrike Falcon ( CS_EDR )
CrowdStrike Falcon Stream ( CS_STREAM )
Cyber 2.0 IDS ( CYBER_2_IDS )
CyberArk Endpoint Privilege Manager (EPM) ( CYBERARK_EPM )
Cyberark Privilege Cloud ( CYBERARK_PRIVILEGE_CLOUD )
CyberArk Privileged Access Manager (PAM) ( CYBERARK_PAM )
Cybereason EDR ( CYBEREASON_EDR )
Cynet 360 AutoXDR ( CYNET_360_AUTOXDR )
Cyolo Secure Remote Access for OT ( CYOLO_OT )
Darktrace ( DARKTRACE )
Delinea Secret Server ( DELINEA_SECRET_SERVER )
Digital Guardian DLP ( DIGITALGUARDIAN_DLP )
Digital Guardian EDR ( DIGITALGUARDIAN_EDR )
DigitalArts i-Filter ( DIGITALARTS_IFILTER )
Dummy LogType ( DUMMY_LOGTYPE )
EfficientIP DDI ( EFFICIENTIP_DDI )
ESET AV ( ESET_AV )
ESET Threat Intelligence ( ESET_IOC )
Extreme Networks Switch ( EXTREME_SWITCH )
F5 Advanced Firewall Management ( F5_AFM )
F5 ASM ( F5_ASM )
F5 BIGIP Access Policy Manager ( F5_BIGIP_APM )
F5 Silverline ( F5_SILVERLINE )
FireEye ETP ( FIREEYE_ETP )
Fluentd Logs ( FLUENTD )
Forcepoint NGFW ( FORCEPOINT_FIREWALL )
Forcepoint DLP ( FORCEPOINT_DLP )
Forcepoint Proxy ( FORCEPOINT_WEBPROXY )
Forescout NAC ( FORESCOUT_NAC )
FortiGate ( FORTINET_FIREWALL )
Fortinet FortiAnalyzer ( FORTINET_FORTIANALYZER )
Fortinet FortiEDR ( FORTINET_FORTIEDR )
GCP Abuse Events Logs ( GCP_ABUSE_EVENTS )
GitHub ( GITHUB )
GMV Checker ATM Security ( GMV_CHECKER )
Google Cloud Apigee ( GCP_APIGEE )
Google Cloud Audit ( GCP_CLOUDAUDIT )
Google Cloud Security Center Threat ( GCP_SECURITYCENTER_THREAT )
Google Threat Intelligence IOC ( GTI_IOC )
GTB Technologies DLP ( GTB_DLP )
H3C Comware Platform Switch ( H3C_SWITCH )
Halcyon Anti Ransomware ( HALCYON )
HP Aruba (ClearPass) ( CLEARPASS )
HP Linux ( HP_LINUX )
HP Procurve Switch ( HP_PROCURVE )
IBM AS/400 ( IBM_AS400 )
IBM Security Verify Access ( IBM_SVA )
IBM WebSEAL ( IBM_WEBSEAL )
IBM Websphere Application Server ( IBM_WEBSPHERE_APP_SERVER )
IBM z/OS ( IBM_ZOS )
Imperva ( IMPERVA_WAF )
Imperva DRA ( IMPERVA_DRA )
Imperva SecureSphere Management ( IMPERVA_SECURESPHERE )
Infoblox ( INFOBLOX )
Infoblox DHCP ( INFOBLOX_DHCP )
Infoblox DNS ( INFOBLOX_DNS )
ION Spectrum ( ION_SPECTRUM )
Ionix ( IONIX )
Ipswitch MOVEit Transfer ( IPSWITCH_MOVEIT_TRANSFER )
Island Browser logs ( ISLAND_BROWSER )
JAMF Pro ( JAMF_PRO )
Jamf Protect Telemetry V2 ( JAMF_TELEMETRY_V2 )
JFrog Artifactory ( JFROG_ARTIFACTORY )
Journald ( JOURNALD )
JumpCloud Directory Insights ( JUMPCLOUD_DIRECTORY_INSIGHTS )
Juniper ( JUNIPER_FIREWALL )
Juniper Junos ( JUNIPER_JUNOS )
Kaspersky AV ( KASPERSKY_AV )
Kaspersky Endpoint ( KASPERSKY_ENDPOINT )
Keycloak ( KEYCLOAK )
Kiteworks ( KITEWORKS )
Kubernetes Node ( KUBERNETES_NODE )
Linux Auditing System (AuditD) ( AUDITD )
Linux Sysmon ( LINUX_SYSMON )
McAfee ePolicy Orchestrator ( MCAFEE_EPO )
Microsoft AD FS ( ADFS )
Microsoft Azure NSG Flow ( AZURE_NSG_FLOW )
Microsoft Defender for Endpoint ( MICROSOFT_DEFENDER_ENDPOINT )
Microsoft Defender for Office 365 ( MICROSOFT_DEFENDER_MAIL )
Microsoft Exchange ( EXCHANGE_MAIL )
Microsoft Graph API Alerts ( MICROSOFT_GRAPH_ALERT )
Microsoft IIS ( IIS )
Microsoft Intune ( AZURE_MDM_INTUNE )
Microsoft PowerShell ( POWERSHELL )
Microsoft Sentinel ( MICROSOFT_SENTINEL )
Microsoft SQL Server ( MICROSOFT_SQL )
Mikrotik Router ( MIKROTIK_ROUTER )
Mimecast Mail V2 ( MIMECAST_MAIL_V2 )
MISP Threat Intelligence ( MISP_IOC )
Mobileiron ( MOBILEIRON )
NetApp ONTAP ( NETAPP_ONTAP )
Netscout ( ARBOR_EDGE_DEFENSE )
Netskope CASB ( NETSKOPE_CASB )
Netskope V2 ( NETSKOPE_ALERT_V2 )
Netskope Web Proxy ( NETSKOPE_WEBPROXY )
Nexus Sonatype ( NEXUS_SONATYPE )
Nozomi Networks Scada Guardian ( NOZOMI_GUARDIAN )
Obsidian ( OBSIDIAN )
Office 365 ( OFFICE_365 )
Okta ( OKTA )
Open Cybersecurity Schema Framework (OCSF) ( OCSF )
Open LDAP ( OPENLDAP )
Opnsense ( OPNSENSE )
Opswat Metadefender ( OPSWAT_METADEFENDER )
Oracle ( ORACLE_DB )
Oracle Cloud Infrastructure Audit Logs ( OCI_AUDIT )
Oracle Cloud Infrastructure VCN Flow Logs ( OCI_FLOW )
Orca Cloud Security Platform ( ORCA )
Palo Alto Cortex XDR Alerts ( CORTEX_XDR )
Palo Alto Cortex XDR Events ( PAN_CORTEX_XDR_EVENTS )
Palo Alto Networks Firewall ( PAN_FIREWALL )
Palo Alto Panorama ( PAN_PANORAMA )
Palo Alto Prisma Cloud Alert payload ( PAN_PRISMA_CA )
Passwordstate ( PASSWORDSTATE )
Ping Federate ( PING_FEDERATE )
Ping Identity ( PING )
Ping One ( PING_ONE )
PingIdentity Directory Server Logs ( PING_DIRECTORY )
PostFix Mail ( POSTFIX_MAIL )
PostgreSQL ( POSTGRESQL )
Proofpoint Observeit ( OBSERVEIT )
Proofpoint On Demand ( PROOFPOINT_ON_DEMAND )
Proofpoint Tap Alerts ( PROOFPOINT_MAIL )
Proofpoint Threat Response ( PROOFPOINT_TRAP )
Radware Web Application Firewall ( RADWARE_FIREWALL )
RSA ( RSA_AUTH_MANAGER )
Ruckus Networks ( RUCKUS_WIRELESS )
SailPoint IAM ( SAILPOINT_IAM )
Salesforce ( SALESFORCE )
Sangfor Next Generation Firewall ( SANGFOR_NGAF )
Security Command Center Chokepoint ( GCP_SECURITYCENTER_CHOKEPOINT )
Security Command Center Posture Violation ( GCP_SECURITYCENTER_POSTURE_VIOLATION )
Security Command Center Toxic Combination ( GCP_SECURITYCENTER_TOXIC_COMBINATION )
Semperis DSP ( SEMPERIS_DSP )
Sentinelone Activity ( SENTINELONE_ACTIVITY )
SentinelOne Deep Visibility ( SENTINEL_DV )
ServiceNow Audit ( SERVICENOW_AUDIT )
Solaris system ( SOLARIS_SYSTEM )
SonicWall ( SONIC_FIREWALL )
Squid Web Proxy ( SQUID_WEBPROXY )
STIX Threat Intelligence ( STIX )
Swift Alliance Messaging Hub ( SWIFT_AMH )
Symantec Endpoint Protection ( SEP )
Tanium Audit ( TANIUM_AUDIT )
Tanium Integrity Monitor ( TANIUM_INTEGRITY_MONITOR )
Tanium Threat Response ( TANIUM_THREAT_RESPONSE )
Teleport Access Plane ( TELEPORT_ACCESS_PLANE )
Tenable Active Directory Security ( TENABLE_ADS )
Tenable OT ( TENABLE_OT )
tenable.io ( TENABLE_IO )
Thales Luna Hardware Security Module ( THALES_LUNA_HSM )
Thales MFA ( THALES_MFA )
Trellix HX Event Streamer ( TRELLIX_HX_ES )
Trend Micro ( TIPPING_POINT )
Trend Micro Apex one ( TRENDMICRO_APEX_ONE )
Trend Micro Vision One ( TRENDMICRO_VISION_ONE )
Trend Micro Vision One Audit ( TRENDMICRO_VISION_ONE_AUDIT )
Trend Micro Vision One Detections ( TRENDMICRO_VISION_ONE_DETECTIONS )
Trend Micro Vision One Observerd Attack Techniques ( TRENDMICRO_VISION_ONE_OBSERVERD_ATTACK_TECHNIQUES )
TXOne Stellar ( TRENDMICRO_STELLAR )
Ubika Waf ( UBIKA_WAF )
Unix system ( NIX_SYSTEM )
Upstream Vehicle SOC Alerts ( UPSTREAM_VSOC_ALERTS )
Varonis ( VARONIS )
Vectra Stream ( VECTRA_STREAM )
Venafi ZTPKI ( VENAFI_ZTPKI )
Veritas NetBackup ( VERITAS_NETBACKUP )
Versa Firewall ( VERSA_FIREWALL )
Vmware Avinetworks iWAF ( VMWARE_AVINETWORKS_IWAF )
VMware ESXi ( VMWARE_ESX )
VMware NSX ( VMWARE_NSX )
VMware vCenter ( VMWARE_VCENTER )
WatchGuard ( WATCHGUARD )
Windows DNS ( WINDOWS_DNS )
Windows Event ( WINEVTLOG )
Windows Event (XML) ( WINEVTLOG_XML )
Windows Sysmon ( WINDOWS_SYSMON )
wiz.io ( WIZ_IO )
Workday User Activity ( WORKDAY_USER_ACTIVITY )
Workspace Activities ( WORKSPACE_ACTIVITY )
Workspace Alerts ( WORKSPACE_ALERTS )
Workspace Users ( WORKSPACE_USERS )
Zendesk CRM ( ZENDESK_CRM )
Zoom Operation Logs ( ZOOM_OPERATION_LOGS )
Zscaler ( ZSCALER_WEBPROXY )
ZScaler NGFW ( ZSCALER_FIREWALL )
Zscaler Private Access ( ZSCALER_ZPA )
Zscaler Secure Private Access Audit Logs ( ZSCALER_ZPA_AUDIT )
The following log types were added without a default parser. Each parser is listed by product name and log_type value, where applicable.
Absolute Secure Endpoint ( ABSOLUTE_SECURE_ENDPOINT )
Airbus Security Logging (ACD AISD) ( AIRBUS_SECURITY_LOG )
Azure Recovery Services Vaults ( AZURE_RECOVERY_SERVICES_VAULTS )
Boeing Onboard Network System Logging ( BOEING_ONS )
Cisco Firepower Threat Defense ( CISCO_FIREPOWER_THREAT_DEFENSE )
Cisco Security Cloud Control ( CISCO_SECURITY_CLOUD_CONTROL )
Pico Corvilnet Engine ( CORVILNET_ENGINE )
CrowdStrike Falcon Shield ( CROWDSTRIKE_FALCON_SHIELD )
Easy NAC ( EASY_NAC )
FairXchange Horizon ( FAIRXCHANGE_HORIZON )
Google Threat Intelligence ( GCP_THREATINTEL )
HPE Alletra ( HPE_ALLETRA )
Huawei Cloud Trace Service Audit ( HUAWEI_CTS_AUDIT )
Huawei SecMaster ( HUAWEI_SECMASTER )
IBM ILO ( IBM_ILO )
Infisical ( INFISICAL )
JSCAPE SFTP ( JSCAPE_SFTP )
Juniper Edge ( JUNIPER_EDGE )
Kaspersky for Microsoft Office 365 ( KASPERSKY_O365_EVENTS )
Microsoft Defender for Cloud Apps ( MICROSOFT_DEFENDER_CLOUD_APPS )
Oracle Cloud Infrastructure Network Firewall ( OCI_FIREWALL )
Okta Workflows ( OKTA_WORKFLOWS )
Phosphorus ( PHOSPHORUS )
Rapid7 Cloud Security ( RAPID7_CLOUDSEC )
Research and Education Networks Information Sharing and Analysis Center ( REN_ISAC )
Risk Resecurity ( RISK_RESECURITY )
Sangfor Network Detection and Response ( SANGFOR_NDR )
SAP Enterprise Threat Detection ( SAP_ETD )
SAP IAS Context ( SAP_IAS_CONTEXT )
Sectigo SCM ( SECTIGO_SCM )
ServiceNow Node ( SERVICENOW_NODE )
ServiceNow Outbound HTTP ( SERVICENOW_OUTBOUNDHTTP )
ServiceNow System log ( SERVICENOW_SYSLOG )
ServiceNow Transaction ( SERVICENOW_TRANSACTION )
Seti S4 ( SETI_S4 )
ThousandEyes ( THOUSAND_EYES )
Transmit Security Mosaic CIAM ( TRANSMIT_MOSAIC_CIAM )
Transmit Security Mosaic Fraud Prevention ( TRANSMIT_MOSAIC_FRAUD_PREVENTION )
Transmit Security Mosaic Identity Verification ( TRANSMIT_MOSAIC_IDENTITY_VERIFICATION )
Transmit Security Mosaic Management ( TRANSMIT_MOSAIC_MANAGEMENT )
Tripwire Security Configuration Management ( TRIPWIRE_SCM )
Valimail ( VALIMAIL )
WSO2 IS AM ( WSO2_IS_AM )
XDR.Net Digital Twin ( XDRNET_DIGITALTWIN )
Zimbra Mail ( ZIMBRA_MAIL )
Zscaler Email DLP ( ZSCALER_EMAIL_DLP )
November 13, 2025
Feature
Raw log search enhancements
Google SecOps now includes enhancements to raw log search to boost usability,
performance, and data analysis:
New filtering options : Filter raw log results by their parsing status or
by one or more log sources.
Optimized results view : Expand or collapse the Trend over time graph,
providing more space for results.
Download raw log results : Download raw log results to a CSV file. By default,
the Timestamp , Event Type , and Raw log columns are included. You can
select additional columns through Column Manager .
Enhanced search visibility : The search query and applied filters are now
displayed on the Search page.
New API for raw log search : Use the legacySearchRawLogsV2 API to search
for raw logs within a specified Google SecOps instance.
For more details, see the following topics:
Filter data in Raw Log Search
Conduct a raw log search
Use raw log search
Method: legacy.legacySearchRawLogsV2
November 12, 2025
Feature
Use the Triage Agent to investigate alerts
You can now use Triage Agent, an AI-powered investigation assistant, to
analyze alerts in Google SecOps. Triage Agent determines if an
alert is a true or false positive, provides a summarized explanation for its
conclusion, and suggests next steps for further investigation.
You can trigger investigations manually or have them run automatically on
supported alert types. Each investigation produces a detailed report that includes
the agent's disposition, a summary of its findings, and a timeline of the analysis.
For more details, see Use Triage Agent to investigate alerts .
Feature
Enhance threat visibility and detection with Emerging Threats
The new Emerging Threats page provides AI-powered threat intelligence to help
you understand how current threat campaigns might affect your organization.
Powered by Google Threat Intelligence (GTI) and Gemini models, this page offers
a curated view of critical global threats relevant to your environment.
Emerging Threats continuously aligns intelligence from GTI with your organization's
telemetry to highlight detection coverage and identify gaps. When it finds a gap,
it uses Gemini to automatically draft new detection rules to accelerate your response.
For more details, see Emerging Threats overview ,
Emerging Threats feed ,and
Emerging Threats detailed view .
Announcement
New parser documentation now available
New parser documentation is available to help you ingest and normalize logs from the following sources:
Collect Absolute Secure Endpoint logs
Collect AIDE (Advanced Intrusion Detection Environment) logs
Collect Akamai Enterprise Application Access logs
Collect Apache Hadoop logs
Collect Armis Vulnerabilities logs
Collect Array Networks SSL VPN logs
Collect Aruba IPS logs
Collect Atlassian Confluence logs
Collect Cisco AMP for Endpoints logs
Collect Cisco APIC logs
Collect Cisco Application Centric Infrastructure (ACI) logs
Collect Cisco CallManager logs
Collect Cisco CloudLock CASB logs
Collect Cisco DNA Center Platform logs
Collect Cisco eStreamer logs
Collect Cribl Stream logs
Collect CrowdStrike FileVantage logs
Collect CrowdStrike IDP Services logs
Collect Cynet 360 AutoXDR logs
Collect Digital Shadows SearchLight logs
Collect Duo Telephony logs
Collect Edgio WAF logs
Collect Elastic Auditbeat logs
Collect Elastic Packet Beats logs
Collect Elasticsearch logs
Collect Entrust nShield HSM audit logs
Collect Imperva Advanced Bot Protection logs
Collect Imperva Attack Analytics logs
Collect Imperva Audit Trail logs
Collect Imperva CEF logs
Collect Imperva Data Risk Analytics (DRA) logs
Collect Imperva Database logs
Collect Imperva FlexProtect logs
Collect Imperva SecureSphere Management logs
Collect Kiteworks (formally Accellion) logs
Collect Proofpoint Emerging Threats Pro IOC logs
Collect ServiceNow audit logs
Collect Team Cymru Scout Threat Intelligence data
Collect URLScan IO logs
Collect Uptycs EDR logs
Collect VanDyke VShell SFTP logs
Collect Zendesk CRM logs
Collect ZeroFox Platform logs
November 10, 2025
Feature
Nested if
You can now use if statements in both the outcome and events sections and
also within the then else clauses of another if statement. This capability
lets you introduce more complicated logic to your query and is supported in
Rules, Search, and Dashboards.
For more information, see
Use nested if statements for more complex logic .
November 07, 2025
Change
MITRE ATT&CK coverage dashboard is now available
The new MITRE ATT&CK coverage dashboard lets you measure your security posture against the MITRE ATT&CK framework, helping you:
Assess threat coverage
Identify gaps
Prioritize security efforts
October 31, 2025
Feature
Search usability enhancements
Google SecOps has introduced the following capabilities to improve usability,
performance, and customization in search results:
Improved performance for large result sets : For broad queries, Google SecOps
now provides paginated search results. You can select the number of rows to
display per page. This pagination applies to the 10,000 results displayed in the table.
Optimized results view : The search editor now automatically collapses after
a query runs, providing more space for results. You can also hide or show the
Charts and Aggregations panels with the View Options list.
Customizable column views : You can now create, save, and share custom sets
of columns in the Events table for consistent analysis across teams.
All-time search : A new All Time option lets you run a search over the
entire data retention period.
For more details, see Search for events and alerts .
Change
Custom log type rename
From now on, all custom log types will be renamed with the custom suffix to prevent confusion with prebuilt log types. The following custom log types already reflect the new naming convention:
HUAWEI_SECMASTER_CUSTOM
GTI_THREAT_FEED_CUSTOM
GTI_IOC_STREAM_CUSTOM
ABSOLUTE_SECURE_ENDPOINT_CUSTOM
GTI_IOC_CUSTOM
IBM_ILO_CUSTOM
GCP_THREATINTEL_CUSTOM
SAP_ETD_CUSTOM
October 30, 2025
Feature
YARA-L functions
The following new YARA-L functions are now generally available:
strings.ends_with :
Takes two strings (value, suffix) and returns true if the suffix is
non-empty and at end-of-value.
strings.split : Splits
string value using a delimiter argument (by default, a comma).
window.range : Returns the
range of the values input values found.
Announcement
Upgraded Chronicle API ingestion methods from alpha to beta
We've upgraded the Chronicle API ingestion methods from alpha to beta. This upgrade signals API stability and functional completeness, unblocking customer and partner adoption for production integrations.
For more information, see
Ingestion methods .
October 29, 2025
Feature
Improved support for Chrome Enterprise Premium
This feature is currently in Preview.
An improved integration for Chrome Enterprise Premium is now available that includes:
Streamlined connection to Google SecOps, using recommended security defaults
Enhanced log events with Google Safe Browsing context
Updated parser and integration documentation: Collect Google Chrome logs
Curated dashboards for Chrome Enterprise Premium
Google Workspace SOAR actions to manage Chrome extension blocklist policies ( Block Extension and Delete Extension )
October 28, 2025
Feature
Risk-based alerting with entity-only rules
With the new ENTITY_RISK_CHANGE UDM event type, you can now write YARA-L
detection rules that trigger independently of ingested events. This capability
lets you focus specifically on changes in an entity's risk score, significantly
decreasing the time required for Google Security Operations to detect and alert
on shifting entity risk levels.
For more information, see
Risk-based alerting with entity-only rules .
October 27, 2025
Announcement
New rules for Chrome Enterprise Premium
Curated Detections has been enhanced with additional Chrome Enterprise Premium Browser Threat detections.
The following rules have been added to the rulepack:
Archive Exfiltration Event to Non-Google Websites
Google Chrome Navigation Event to Shortened URLs
Suspicious Download from Filehosting or Chat Platform in Chrome Management
Chrome Suspicious Download Event from Newly Observed Domain in Environment
October 22, 2025
Change
Integration of GTI score in Applied Threat Intelligence (ATI)
Google SecOps now uses Google Threat Intelligence (GTI) score for prioritization
in Applied Threat Intelligence (ATI) instead of the IC-score. The GTI score
delivers a unified verdict for potential Indicators of Compromise (IoCs) and
aggregates a wealth of threat intelligence data.
For details, see Applied Threat Intelligence priority overview and
Google Threat Intelligence (GTI) score overview .
October 15, 2025
Deprecated
The Netskope v1 API feed has been deprecated by Netskope. If you are using the Netskope REST API v1 with Google SecOps, you must switch to the Netskope REST API v2.
October 08, 2025
Feature
Multi-stage queries in YARA-L
This feature is currently in Preview.
Multi-stage queries in YARA-L are now available as a Preview feature. Multi-stage queries in YARA-L let you feed the output of one query stage directly into the input of a subsequent stage. This process gives you greater control over data transformation than single, monolithic query. They are supported in both Dashboards and Search . Multi-stage queries can contain between 1 and 4 named stages, in addition to a root stage.
For more information, see Create multi-stage queries in YARA-L .
October 07, 2025
Feature
Manage parser versions
This feature is in preview.
You now have granular control over how new pre-built parser versions are deployed within your environment.
This feature lets you manage parser updates by taking the following actions:
Opt in or opt out of automatic parser updates.
Review and compare the processing logic between different parser versions.
Manually update a parser to a newer version.
Revert to a previously deployed, stable parser version.
For details, see Manage prebuilt parser versions .
Announcement
Azure AD Organizational Context default parser rollback
The recent update to the pre-built Azure AD Organizational Context ( AZURE_AD_CONTEXT ) parser has been rolled back. This action was necessary to resolve a performance degradation issue that was introduced in the latest parser version. For more information about the exact changes and rollback timeline, see the change log for the pre-built parser .
October 05, 2025
Announcement
New parser documentation now available
New parser documentation is available to help you ingest and normalize logs from the following sources:
Collect AlphaSOC alert logs
Collect AlphaSOC alert logs
Collect Cisco vManage SD-WAN logs
Collect Citrix Analytics logs
Collect Citrix Monitor Service logs
Collect Citrix StoreFront logs
Collect Delinea SSO logs
Collect SailPoint IAM logs
Collect Sentry logs
Collect Snipe-IT logs
Collect Sophos AV logs
Collect Sophos Capsule8 logs
Collect Sophos DHCP logs
Collect Sophos Intercept EDR logs
Collect Swimlane Platform logs
Collect Symantec WSS logs
Collect Tailscale logs
Collect Tanium Asset logs
Collect Tanium audit logs
Collect Tanium Comply logs
Collect Tanium Discover logs
Collect Tanium Insight logs
Collect Tanium Integrity Monitor logs
Collect Tanium Patch logs
Collect Tanium Question logs
Collect Tanium Reveal logs
Collect Tanium Stream logs
Collect Tanium Threat Response logs
Collect TeamViewer logs
Collect Tines audit logs
October 03, 2025
Change
Customer-managed encryption key compliance now includes support for data tables
Google SecOps has expanded its coverage of Customer-Managed Encryption Key
(CMEK) compliance to now include support for data tables.
For more information, see
CMEK for Google SecOps .
September 30, 2025
Feature
Customize Events table columns in Search
You can now specify which columns appear in the Events table on the
Search page and in tables within your dashboard widgets . Use the select
and unselect keywords to define the displayed columns.
For more information, see Control columns using select and unselect keywords .
September 28, 2025
Announcement
Forwarder component: end-of-life and migration
The forwarder component is being phased out of the Google SecOps platform and will reach end-of-life (EOL) in January 2027. This impact will change all any data collection pipelines that currently use the forwarder.
Action required : If you're currently using the forwarder component, you must migrate your data collection workflows to an alternative mechanism before April 1, 2027. You'll need to use another data pipeline management application for log ingestion.
We recommend that you migrate to the Bindplane OpenTelemetry (OTel) collector , which provides a scalable, open-standard solution for log and metric ingestion.
The following are key dates to note:
Apr 1, 2026 : New Google SecOps customers cannot use the forwarder component.
Jan 1, 2027 : The forwarder is officially EOL. No further patches, including security patches, will be released.
Apr 1, 2027 : Data is no longer allowed to be ingested from the forwarder component.
Announcement
Update CrowdStrike API permissions before decommission
CrowdStrike is decommissioning its Detects API on September 30, 2025. This API has
been replaced by the Alerts API. To ensure that your data feeds continue without
interruption, you may need to update your API permissions.
This change impacts you if your Google SecOps tenant meets both of the following conditions:
You use the CrowdStrike Detection Monitoring API connector, which ingests the CS_DETECTS log type.
The CrowdStrike API client configured for that feed lacks the permissions to read alerts Read.
To prevent disruption to your CrowdStrike data ingestion, you must update your API
client permissions before September 30, 2025.
Follow the instructions in Migrate from CrowdStrike Detects API to Alerts API
to migrate your configuration to use the Alerts API.
For more details, see CrowdStrike’s official decommissioning notice .
September 27, 2025
Feature
Use joins in YARA-L Search queries
These changes are currently in Preview.
You can now use joins in statistical Search queries that include a match section
to correlate data from multiple sources. This feature lets you link related
sources directly within a single query.
For more information, see Use joins in Search .
September 23, 2025
Change
Transport-layer migration for third-party API feeds
Google SecOps is migrating the transport layer for third-party API feeds to a new platform to improve performance and reliability. This migration will be completed in phases and is expected to finish by the end of October 2025. The migration should not impact any existing or new, third-party API feeds. If you experience any unexpected issues with your feeds during the migration, contact your Google SecOps representative.
September 10, 2025
Feature
View data retention start date
You can now view the start date for your account's data retention period. A new, read-only page, Data Retention , is available under SIEM Settings . This page also shows the start date for your Google SecOps account's data retention period.
For more information, see View data retention in your Google SecOps account .
September 08, 2025
Announcement
New parser documentation now available
New parser documentation is available to help you ingest and normalize logs from the following sources:
Collect Akamai Cloud Monitor logs
Collect Akamai DataStream 2 logs
Collect Aware audit logs
Collect AWS API Gateway access logs
Collect AWS VPC Transit Gateway flow logs
Collect Bitwarden Enterprise event logs
Collect Box Collaboration JSON logs
Collect Censys logs
Collect Code42 Incydr core datasets
Collect CSV Custom IOC files
Collect Deep Instinct EDR logs
Collect DigiCert audit logs
Collect DomainTools Iris Investigate results
Collect Duo administrator logs
Collect Duo authentication logs
Collect Duo entity context logs
Collect Google Cloud Abuse Events logs
Collect Harness IO audit logs
Collect HPE Aruba Networking Central logs
Collect Jamf Pro context logs
Collect PingOne Advanced Identity Cloud logs
Collect Slack audit logs
Collect Snyk group-level audit logs
Collect Snyk group-level audit and issues logs
Collect Venafi Zero Touch PKI logs
Collect Veritas NetBackup logs
Collect VMware AirWatch logs
Collect VMware Avi Load Balancer WAF logs
Collect VMware Horizon logs
Collect VMware VeloCloud SD-WAN logs
Collect Zoom operation logs
September 05, 2025
Change
Advanced filtering in alerts and search results
You can now filter alerts and search results by any field in the detection object. This update provides more granular control over your queries, letting you filter by nested fields from events and entities within a detection.
September 04, 2025
Change
Improved Okta and Symantec Endpoint Protection parsers
These changes are currently in Preview.
The Okta and Symantec Endpoint Protection parsers are now more efficient, with increased log-field coverage and more-accurate log-field mappings. These changes include new UDM fields and updated field mappings. We advise you to opt-in and get these new versions.
For details on the Okta parser, see UDM mapping table and UDM mapping delta reference .
For details on the Symantec Endpoint Protection parser, see Collect Symantec Endpoint Protection logs and UDM mapping delta reference .
Change
Time zone override for forwarder logs
Google SecOps now lets you override the default time zone for your logs when you create or configure a forwarder.
For details, see Add collector configuration .
Announcement
CBN alerts functionality removed from all prebuilt parsers
As part of deprecating the Configuration Based Normalization (CBN) alerts functionality, all prebuilt parsers that included the CBN alerts functionality were updated, and the functionality was removed.
Note: For information about how you can migrate CBN alerts to YARA-L detection alerts, see Migrate CBN alerts to YARA-L detection rule alerts .
September 03, 2025
Change
Extended match window for multi-event rules
You can now configure rules to analyze data over a longer period. The maximum match window for these rules has been extended to 14 days. The run frequency for multi-event rules is automatically set based on the rule's match window:
For a window size of 1 to 48 hours, the run frequency is 1 hour.
For a window size greater than 48 hours, the run frequency is 24 hours.
August 29, 2025
Change
MITRE ATT&CK coverage dashboard is now available
This feature is currently in Preview.
The new MITRE ATT&CK coverage dashboard lets you measure your security posture against the MITRE ATT&CK framework, helping you:
Assess threat coverage
Identify gaps
Prioritize security efforts
August 28, 2025
Change
Composite detections for MITRE ATT&CK
The Curated Detections feature has been enhanced with new composite rules that define chains of MITRE ATT&CK tactics and techniques.
These powerful new rule packs are now in public preview for customers with a Google SecOps Enterprise or Enterprise Plus license .
To learn more, a companion blog post will be published on the Google Security Cloud Community on September 9, 2025.
August 27, 2025
Change
Google SecOps has updated the list of supported default parsers. Parsers are updated gradually, so it might take one to four days before you see the changes reflected in your region.
The following supported default parsers have been updated. Each parser is listed by product name and log_type value, where applicable. This list includes both released default parsers and pending parser updates.
A10 Load Balancer ( A10_LOAD_BALANCER )
AIX system ( AIX_SYSTEM )
Apache ( APACHE )
Arcsight CEF ( ARCSIGHT_CEF )
Aruba Switch ( ARUBA_SWITCH )
Aruba ( ARUBA_WIRELESS )
Attivo Networks ( ATTIVO )
Auth0 ( AUTH_ZERO )
Amazon VPC Transit Gateway Flow Logs ( AWS_VPC_TRANSIT_GATEWAY )
AWS WAF ( AWS_WAF )
Azure AD ( AZURE_AD )
Azure AD Organizational Context ( AZURE_AD_CONTEXT )
Azure Firewall ( AZURE_FIREWALL )
Azure Front Door ( AZURE_FRONT_DOOR )
Carbon Black App Control ( CB_APP_CONTROL )
None ( CHROME_MANAGEMENT )
Cisco ASA ( CISCO_ASA_FIREWALL )
Cisco DNA Center Platform ( CISCO_DNAC )
Cisco Email Security ( CISCO_EMAIL_SECURITY )
Cisco Firepower NGFW ( CISCO_FIREPOWER_FIREWALL )
Cisco Internetwork Operating System ( CISCO_IOS )
Cisco IronPort ( CISCO_IRONPORT )
Cisco ISE ( CISCO_ISE )
Cisco Router ( CISCO_ROUTER )
Cisco vManage SD-WAN ( CISCO_SDWAN )
Cisco Switch ( CISCO_SWITCH )
Cisco Umbrella Audit ( CISCO_UMBRELLA_AUDIT )
Cisco VCS Expressway ( CISCO_VCS )
Cisco WSA ( CISCO_WSA )
Citrix Netscaler ( CITRIX_NETSCALER )
Claroty Xdome ( CLAROTY_XDOME )
HP Aruba (ClearPass) ( CLEARPASS )
Cloudflare ( CLOUDFLARE )
Cloudflare WAF ( CLOUDFLARE_WAF )
Corelight ( CORELIGHT )
Palo Alto Cortex XDR Alerts ( CORTEX_XDR )
CrowdStrike Alerts API ( CS_ALERTS )
CrowdStrike Detection Monitoring ( CS_DETECTS )
CrowdStrike Falcon ( CS_EDR )
CrowdStrike Falcon Stream ( CS_STREAM )
Cyberark Privilege Cloud ( CYBERARK_PRIVILEGE_CLOUD )
Darktrace ( DARKTRACE )
Datadog ( DATADOG )
Elastic Defend ( ELASTIC_DEFEND )
F5 ASM ( F5_ASM )
F5 Distributed Cloud Services ( F5_DCS )
F5 Silverline ( F5_SILVERLINE )
Fidelis Network ( FIDELIS_NETWORK )
FireEye ( FIREEYE_ALERT )
FireEye NX ( FIREEYE_NX )
Forcepoint DLP ( FORCEPOINT_DLP )
ForgeRock Identity Cloud ( FORGEROCK_IDENTITY_CLOUD )
FortiGate ( FORTINET_FIREWALL )
Cloud SQL ( GCP_CLOUDSQL )
Google Cloud DNS Threat Detector ( GCP_DNS_ATD )
Cloud Load Balancing ( GCP_LOADBALANCING )
None ( GCP_SECURITYCENTER_THREAT )
VPC Flow Logs ( GCP_VPC_FLOW )
AWS GuardDuty ( GUARDDUTY )
IBM-i Operating System ( IBM_I )
Imperva ( IMPERVA_WAF )
Infoblox DHCP ( INFOBLOX_DHCP )
Jamf Protect Telemetry V2 ( JAMF_TELEMETRY_V2 )
Kemp Load Balancer ( KEMP_LOADBALANCER )
Kubernetes Node ( KUBERNETES_NODE )
ManageEngine AD360 ( MANAGE_ENGINE_AD360 )
McAfee ePolicy Orchestrator ( MCAFEE_EPO )
McAfee IPS ( MCAFEE_IPS )
Medigate IoT ( MEDIGATE_IOT )
Microsoft Defender for Endpoint ( MICROSOFT_DEFENDER_ENDPOINT )
Microsoft Graph API Alerts ( MICROSOFT_GRAPH_ALERT )
Microsoft Sentinel ( MICROSOFT_SENTINEL )
Microsoft SQL Server ( MICROSOFT_SQL )
Mikrotik Router ( MIKROTIK_ROUTER )
Netskope V2 ( NETSKOPE_ALERT_V2 )
Netskope Web Proxy ( NETSKOPE_WEBPROXY )
Unix system ( NIX_SYSTEM )
Oracle Cloud Infrastructure VCN Flow Logs ( OCI_FLOW )
Office 365 ( OFFICE_365 )
Office 365 Message Trace ( OFFICE_365_MESSAGETRACE )
Okta ( OKTA )
Okta Scaleft ( OKTA_SCALEFT )
Oracle ( ORACLE_DB )
Orca Cloud Security Platform ( ORCA )
Proofpoint Threat Response ( PROOFPOINT_TRAP )
Quest Active Directory ( QUEST_AD )
Radware Web Application Firewall ( RADWARE_FIREWALL )
Red Hat OpenShift ( REDHAT_OPENSHIFT )
Symantec Endpoint Protection ( SEP )
Silverfort Authentication Platform ( SILVERFORT )
Squid Web Proxy ( SQUID_WEBPROXY )
STIX Threat Intelligence ( STIX )
Symantec DLP ( SYMANTEC_DLP )
Sysdig ( SYSDIG )
Tenable Security Center ( TENABLE_SC )
Trend Micro ( TIPPING_POINT )
Trellix HX Event Streamer ( TRELLIX_HX_ES )
Trend Micro Apex one ( TRENDMICRO_APEX_ONE )
Trend Micro Vision One Activity ( TRENDMICRO_VISION_ONE_ACTIVITY )
Trend Micro Vision One ( TRENDMICRO_VISION_ONE )
Trend Micro Vision One Workbench ( TRENDMICRO_VISION_ONE_WORKBENCH )
Ubiquiti UniFi Switch ( UBIQUITI_SWITCH )
Cisco Umbrella DNS ( UMBRELLA_DNS )
Cisco Umbrella IP ( UMBRELLA_IP )
Varonis ( VARONIS )
Vectra XDR ( VECTRA_XDR )
VMware vCenter ( VMWARE_VCENTER )
VMware vRealize Suite (VMware Aria) ( VMWARE_VREALIZE )
Windows Event ( WINEVTLOG )
Windows Event (XML) ( WINEVTLOG_XML )
Zscaler CASB ( ZSCALER_CASB )
ZScaler Deception ( ZSCALER_DECEPTION )
Zscaler DLP ( ZSCALER_DLP )
ZScaler DNS ( ZSCALER_DNS )
ZScaler NGFW ( ZSCALER_FIREWALL )
Zscaler Internet Access Audit Logs ( ZSCALER_INTERNET_ACCESS )
Zscaler Tunnel ( ZSCALER_TUNNEL )
Zscaler ( ZSCALER_WEBPROXY )
Zscaler Secure Private Access Audit Logs ( ZSCALER_ZPA_AUDIT )
Zscaler Private Access ( ZSCALER_ZPA )
The following log types were added without a default parser. Each parser is listed by product name and log_type value, where applicable.
Alicloud ApsaraDB ( ALICLOUD_APSARADB )
AliCloud Firewall ( ALICLOUD_FIREWALL )
AuthMind ( AUTHMIND )
Microsoft Entra Recommendations ( MS_ENTRA_RECOMMENDATIONS )
Palo Alto Networks Prisma Access ( PAN_PRISMA_ACCESS )
Trellix Malware Analysis ( TRELLIX_AX )
Everfox ULTRA ( ULTRA )
ZScaler NSS VM ( ZSCALER_NSS_VM )
August 21, 2025
Feature
Enhanced curated detections has been enhanced with composite detection content for Mandiant Hunt Cloud Classification, including AWS, GCP, and Azure. This rule pack is available for Mandiant Threat Defense (MTD) customers with a Google Security Operations Enterprise or Enterprise Plus license.
August 20, 2025
Change
New rules added to rule pack
Curated Detections has been enhanced with additional Chrome Enterprise Premium Browser Threat detections. The following rules have been added to the rule pack:
Dangerous Download with Matching Hashes by multiple users in Chrome Management
GTI High Severity File Download Event in Chrome Management
GTI Medium Severity File Download Event in Chrome Management
GTI Low Severity File Download Event in Chrome Management
Safe-browsing High Severity File Download Event in Chrome Management
Multiple Dangerous Download Events by same user in Chrome Management
Url Event to Newly Created Domain in Chrome Management
Feature
Composite detections are now generally available
The composite detections feature is now in General Availability. Composite detections lets you link multiple YARA-L rules to detect complex, multistage threats. This capability enhances detection by correlating alerts that individual rules might not detect.
For more information, see Overview of composite detections .
August 19, 2025
Announcement
Reference lists retiring
The reference list functionality is being phased out of the Google SecOps platform.
October 2025 : You'll no longer be able to create new reference lists. Instead, use data tables to provide expanded functionality.
Migration period : All existing reference lists will be automatically migrated to data tables. During this migration period, you can continue to use your existing reference lists without changes.
September 2026 : The legacy reference list functionality will be fully retired from the platform. After that date, all data will be available only through the data table interface.
August 13, 2025
Announcement
New parser documentation now available
New parser documentation is available to help you ingest and normalize logs from the following sources:
Collect Anomali ThreatStream IOC logs
Collect Cisco Application Control Engine (ACE)
Collect Cisco Firepower NGFW logs
Collect Cisco Firewall Service Module (FWSM)
Collect Cisco IronPort logs
Collect Cisco PIX logs
Collect Cisco Prime logs
Collect Cisco Wireless Intrusion Prevention System (WIPS) logs
Collect Cisco Wireless LAN Controller (WLC) logs
Collect Cisco Wireless Security Management (WiSM) logs
Collect Cloudian HyperStore logs
Collect CrushFTP logs
Collect Delinea Distributed Engine logs
Collect Duo User context logs
Collect ExtraHop DNS logs
Collect ExtraHop RevealX logs
Collect Extreme Networks switch logs
Collect Extreme Networks Wireless logs
Collect MuleSoft Anypoint logs
Collect Palo Alto Prisma SD-WAN logs
Collect Recorded Future IOC logs
Collect Veeam logs
Collect Veridium ID logs
Collect VMware Tanzu logs
Collect VMware vCenter logs
Collect VMware vRealize logs
Collect VMware vSphere logs
Collect VSFTPD logs
Collect VyOS logs
Collect Workday audit logs
Collect Yamaha router logs
August 12, 2025
Change
Data RBAC self-service enablement
Data RBAC now includes a self-service option for direct enablement. This makes the initial onboarding process faster and simpler. For details, see Configure data RBAC for users .
August 10, 2025
Feature
Updated permissions for accessing product-centric feeds
If you have assigned Custom IAM Roles , you can now grant access to the product-centric feeds by adding the following permissions to the role:
chronicle.feedPacks.get
chronicle.feedPacks.list
To learn more about how to configure feeds using the product-centric feeds UI, see Configure feeds by product.
August 08, 2025
Change
Google SecOps has updated the list of supported default parsers. Parsers are updated gradually, so it might take one to four days before you see the changes reflected in your region.
The following supported default parsers have been updated. Each parser is listed by product name and log_type value, where applicable. This list includes both released default parsers and pending parser updates.
1Password ( ONEPASSWORD )
A10 Load Balancer ( A10_LOAD_BALANCER )
AIX system ( AIX_SYSTEM )
Akamai Enterprise Application Access ( AKAMAI_EAA )
Akamai WAF ( AKAMAI_WAF )
Apache ( APACHE )
Aqua Security ( AQUA_SECURITY )
Aruba ( ARUBA_WIRELESS )
Attivo Networks ( ATTIVO )
Auth0 ( AUTH_ZERO )
AWS Config ( AWS_CONFIG )
AWS GuardDuty ( GUARDDUTY )
AWS Lambda Function ( AWS_LAMBDA_FUNCTION )
AWS RDS ( AWS_RDS )
AWS VPC Flow ( AWS_VPC_FLOW )
Azure AD ( AZURE_AD )
Azure AD Directory Audit ( AZURE_AD_AUDIT )
Azure AD Sign-In ( AZURE_AD_SIGNIN )
Azure Key Vault logging ( AZURE_KEYVAULT_AUDIT )
Azure VNET Flow ( AZURE_VNET_FLOW )
Barracuda Email ( BARRACUDA_EMAIL )
Barracuda WAF ( BARRACUDA_WAF )
BeyondTrust BeyondInsight ( BEYONDTRUST_BEYONDINSIGHT )
Bitdefender ( BITDEFENDER )
Blue Coat Proxy ( BLUECOAT_WEBPROXY )
Check Point ( CHECKPOINT_FIREWALL )
Check Point Sandblast ( CHECKPOINT_EDR )
Chrome Management ( N/A )
Cisco Email Security ( CISCO_EMAIL_SECURITY )
Cisco Firepower NGFW ( CISCO_FIREPOWER_FIREWALL )
Cisco Internetwork Operating System ( CISCO_IOS )
Cisco IronPort ( CISCO_IRONPORT )
Cisco ISE ( CISCO_ISE )
Cisco Meraki ( CISCO_MERAKI )
Cisco NX-OS ( CISCO_NX_OS )
Cisco Router ( CISCO_ROUTER )
Cisco Stealthwatch ( CISCO_STEALTHWATCH )
Cisco Umbrella SWG DLP ( CISCO_UMBRELLA_SWG_DLP )
Cisco vManage SD-WAN ( CISCO_SDWAN )
Cisco WLC/WCS ( CISCO_WIRELESS )
Cisco WSA ( CISCO_WSA )
Citrix Netscaler ( CITRIX_NETSCALER )
Cloud Audit Logs ( N/A )
Cloud DNS ( N/A )
Cloud Load Balancing ( GCP_LOADBALANCING )
Cloudflare ( CLOUDFLARE )
Corelight ( CORELIGHT )
CrowdStrike Alerts API ( CS_ALERTS )
CrowdStrike Detection Monitoring ( CS_DETECTS )
CrowdStrike Falcon ( CS_EDR )
CrowdStrike Falcon Stream ( CS_STREAM )
CSV Custom IOC ( CSV_CUSTOM_IOC )
CyberArk ( CYBERARK )
Cybereason EDR ( CYBEREASON_EDR )
Darktrace ( DARKTRACE )
EfficientIP DDI ( EFFICIENTIP_DDI )
Elastic Defend ( ELASTIC_DEFEND )
EPIC Systems ( EPIC )
ExtraHop RevealX ( EXTRAHOP )
F5 Advanced Firewall Management ( F5_AFM )
F5 ASM ( F5_ASM )
F5 BIGIP Access Policy Manager ( F5_BIGIP_APM )
F5 BIGIP LTM ( F5_BIGIP_LTM )
F5 DNS ( F5_DNS )
F5 Silverline ( F5_SILVERLINE )
Fidelis Network ( FIDELIS_NETWORK )
FireEye ETP ( FIREEYE_ETP )
ForgeRock Identity Cloud ( FORGEROCK_IDENTITY_CLOUD )
FortiGate ( FORTINET_FIREWALL )
Fortinet FortiAnalyzer ( FORTINET_FORTIANALYZER )
Fortinet Proxy ( FORTINET_WEBPROXY )
Fortinet Web Application Firewall ( FORTINET_FORTIWEB )
GitHub ( GITHUB )
Halcyon Anti Ransomware ( HALCYON )
HAProxy ( HAPROXY )
HP Aruba (ClearPass) ( CLEARPASS )
IBM DataPower Gateway ( IBM_DATAPOWER )
Imperva ( IMPERVA_WAF )
Imperva SecureSphere Management ( IMPERVA_SECURESPHERE )
Infoblox DHCP ( INFOBLOX_DHCP )
Jamf pro context ( JAMF_PRO_CONTEXT )
Kubernetes Node ( KUBERNETES_NODE )
Lacework Cloud Security ( LACEWORK )
Linux Auditing System (AuditD) ( AUDITD )
Linux Sysmon ( LINUX_SYSMON )
McAfee IPS ( MCAFEE_IPS )
Menlo Security ( MENLO_SECURITY )
Microsoft AD ( WINDOWS_AD )
Microsoft Azure Activity ( AZURE_ACTIVITY )
Microsoft Defender for Identity ( MICROSOFT_DEFENDER_IDENTITY )
Microsoft IIS ( IIS )
Mimecast ( MIMECAST_MAIL )
Mimecast Mail V2 ( MIMECAST_MAIL_V2 )
MISP Threat Intelligence ( MISP_IOC )
NetApp ONTAP ( NETAPP_ONTAP )
Netskope V2 ( NETSKOPE_ALERT_V2 )
Netskope Web Proxy ( NETSKOPE_WEBPROXY )
NGINX ( NGINX )
One Identity Identity Manager ( ONE_IDENTITY_IDENTITY_MANAGER )
Opnsense ( OPNSENSE )
Orca Cloud Security Platform ( ORCA )
Palo Alto Cortex XDR Events ( PAN_CORTEX_XDR_EVENTS )
Palo Alto Networks Firewall ( PAN_FIREWALL )
Palo Alto Panorama ( PAN_PANORAMA )
Palo Alto Prisma Access ( PAN_CASB )
pfSense ( PFSENSE )
Ping Federate ( PING_FEDERATE )
Proofpoint Observeit ( OBSERVEIT )
Proofpoint On Demand ( PROOFPOINT_ON_DEMAND )
Proofpoint Tap Alerts ( PROOFPOINT_MAIL )
Qualys VM ( QUALYS_VM )
Remediant SecureONE ( REMEDIANT_SECUREONE )
SAP SM20 ( SAP_SM20 )
SecureAuth ( SECUREAUTH_SSO )
SentinelOne EDR ( SENTINEL_EDR )
Silverfort Authentication Platform ( SILVERFORT )
Sophos Central ( SOPHOS_CENTRAL )
Sophos UTM ( SOPHOS_UTM )
Squid Web Proxy ( SQUID_WEBPROXY )
Symantec DLP ( SYMANTEC_DLP )
Symantec Web Security Service ( SYMANTEC_WSS )
Tenable Active Directory Security ( TENABLE_ADS )
Tenable Security Center ( TENABLE_SC )
Thinkst Canary ( THINKST_CANARY )
Trellix HX Event Streamer ( TRELLIX_HX_ES )
Trend Micro Apex one ( TRENDMICRO_APEX_ONE )
Trend Micro Cloud one ( TRENDMICRO_CLOUDONE )
Trend Micro Vision One Activity ( TRENDMICRO_VISION_ONE_ACTIVITY )
Trend Micro Vision One Observerd Attack Techniques ( TRENDMICRO_VISION_ONE_OBSERVERD_ATTACK_TECHNIQUES )
Trend Micro Vision One Workbench ( TRENDMICRO_VISION_ONE_WORKBENCH )
Tripwire ( TRIPWIRE_FIM )
Unix system ( NIX_SYSTEM )
VMware Horizon ( VMWARE_HORIZON )
VMware vCenter ( VMWARE_VCENTER )
VMware vRealize Suite (VMware Aria) ( VMWARE_VREALIZE )
WatchGuard ( WATCHGUARD )
Windows Event ( WINEVTLOG )
Windows Event (XML) ( WINEVTLOG_XML )
Workday Audit Logs ( WORKDAY_AUDIT )
Workspace Activities ( WORKSPACE_ACTIVITY )
Workspace Users ( WORKSPACE_USERS )
ZScaler Deception ( ZSCALER_DECEPTION )
The following log types were added without a default parser. Each parser is listed by product name and log_type value, where applicable.
Akamai MFA ( AKAMAI_MFA )
Azure Org Context ( AZURE_ORG_CONTEXT )
Cisco Remote Access VPN ( CISCO_RAVPN )
CoreView Audit-log SIEM integration ( COREVIEW )
Fortinet Network Detection and Response ( FORTINET_FORTINDR )
GCP Security Command Center Chokepoint ( GCP_SECURITYCENTER_CHOKEPOINT )
Imperva Cloud WAF ( IMPERVA_CLOUD_WAF )
Lumu Universal SIEM ( LUMU )
Microsoft Azure Databricks ( MICROSOFT_DATABRICKS_WORKSPACES )
Microsoft Insights/Components ( MICROSOFT_INSIGHTS_COMPONENTS )
Microsoft ServiceBus/Namespaces ( MICROSOFT_SERVICEBUS_NAMESPACES )
Microsoft Azure SQL Managed Instances ( MICROSOFT_SQL_MANAGED_INSTANCES )
Moveworks ( MOVEWORKS )
Network Box Unified Threat Management+ ( NETWORKBOX_UTM )
Oracle Cloud Infrastructure Identity Cloud Service ( OCI_IDENTITY_CLOUD_SERVICE )
SAP Commerce Cloud ( SAP_HAC )
Sonatype Lifecycle ( SONATYPE_LIFECYCLE )
TeamViewer Tensor ( TEAMVIEWER_TENSOR )
Torq Audit Logs ( TORQ_AUDIT_LOGS )
Velociraptor - digital forensic & incident response tool ( VELOCIRAPTOR )
Zoom Activity Logs ( ZOOM_ACTIVITY )
For a list of supported log types and details about default parser changes, see Supported log types and default parsers .
August 05, 2025
Feature
New YARA-L features
The following capabilities have been added to YARA-L 2.0 to enhance search precision, data analysis, and investigative workflows:
Conditions in UDM search and dashboards
You can now filter aggregates defined in the outcome section using the new condition clause. This gives you more precise control over your results and supports more targeted investigations.
New functionality includes support for OR and n of [a, b, c.. z] expressions.
General availability for search and dashboards.
Deduplicate events in searches and dashboards
The new dedup section lets you remove duplicate events after the match clause in both standard UDM searches and YARA-L 2.0 queries.
General availability for search and dashboards.
Use metrics functions in UDM searches
You can now apply metrics functions in the outcome section of your search to access aggregated historical data directly in your search queries.
Uses the same syntax as metrics in rules.
General availability for search.
Increased limits for array and array_distinct
The element limit for array and array_distinct aggregation functions in YARA-L has increased from 25 to 1,000.
General availability for search and dashboards.
Private preview for rules.
Restrict search results using limit
The limit keyword now lets you restrict the number of results returned by a search. Use this to quickly preview data, optimize performance, or focus on a subset of results.
General availability for search and dashboards.
earliest and latest timestamps
New earliest and latest timestamps let you extract the time range of your data (within microseconds) during aggregation.
General availability for search.
Layer aggregations and analytics across multi-stage queries
Recent updates to multi-stage queries let you:
Layer aggregations and data statistical functions. Calculate baselines, deviations, and trends across multiple stages of data processing.
Conduct joins both within and across stages.
Private preview for search and dashboards. Contact your Google SecOps representative to enroll.
Join events, the entity graph, and data tables
You can now perform Inner joins between events, the entity graph, and data tables. These queries require a match clause for these joins and return results as statistics.
Private preview for search and dashboards. Contact your Google SecOps representative to enroll.
August 04, 2025
Change
New rules added to rule pack
Curated detections has been enhanced with additional Chrome Enterprise Premium Browser Threat detections. The following rules have been added to the rule pack:
Malware Transfer Event in Chrome Management
Password Breach Event By Admin User
Phishing Navigation Event Containing Suspicious Parameters In Chrome Management
Chrome Password Event on Newly Observed Domain in Environment
Feature
Auto Extraction supports XML formatted logs in addition to JSON formatted logs. This enhancement will be available starting this week.
July 22, 2025
Feature
Silent Host Monitoring
New configuration options are now available for Silent Host Monitoring. You can now define detection rule-based Silent Host Monitoring in SecOps using UDM fields or labels, configurable within a specified time window.
For more information, see Silent host monitoring .
July 21, 2025
Feature
New parser documentation now available
New parser documentation is available to help you ingest and normalize logs from the following sources:
Collect Apache Tomcat logs
Collect Appian Cloud logs
Collect Archer IRM logs
Collect ArcSight CEF logs
Collect Area 1 logs
Collect Aruba EdgeConnect SD-WAN logs
Collect Atlassian Cloud Admin Audit logs
Collect Avatier logs
Collect Avigilon Access Control Manager logs
Collect AWS CloudTrail logs
Collect Barracuda CloudGen Firewall logs
Collect Barracuda Web Filter logs
Collect Broadcom CA PAM logs
Collect Broadcom SSL VA logs
Collect Cato Networks logs
Collect Check Point Harmony logs
Collect CipherTrust Manager logs
Collect Cisco VCS logs
Collect Cisco VPN logs
Collect Cisco WSA logs
Collect CyberArk Privilege Cloud logs
Collect Digi Modems logs
Collect F5 DNS logs
Collect F5 VPN logs
Collect Forcepoint CASB logs
Collect HPE BladeSystem c7000 logs
Collect Skyhigh Security logs
Collect Trellix IPS logs
July 07, 2025
Feature
Dashboards for enhanced visualizations and threat hunting
You can now use the Google SecOps Dashboards to enhance data visualization, investigations, and threat hunting.
Key capabilities include:
SOAR data availability
Downloadable reports
Custom drilldowns
Markdown widgets
51 curated dashboards covering a broad range of security categories and use cases.
For more information, see Dashboards .
July 02, 2025
Change
Google SecOps has updated the list of supported default parsers. Parsers are updated gradually, so it might take one to four days before you see the changes reflected in your region.
The following supported default parsers have been updated. Each parser is listed by product name and log_type value, where applicable. This list includes both released default parsers and pending parser updates.
1Password ( ONEPASSWORD )
Apache ( APACHE )
Arcsight CEF ( ARCSIGHT_CEF )
Aruba Switch ( ARUBA_SWITCH )
AWS Cloudtrail ( AWS_CLOUDTRAIL )
AWS CloudWatch ( AWS_CLOUDWATCH )
AWS GuardDuty ( GUARDDUTY )
AWS Lambda Function ( AWS_LAMBDA_FUNCTION )
AWS S3 Server Access ( AWS_S3_SERVER_ACCESS )
AWS VPC Flow ( AWS_VPC_FLOW )
AWS VPC Flow (CSV) ( AWS_VPC_FLOW_CSV )
Azure AD ( AZURE_AD )
Azure Application Gateway ( AZURE_GATEWAY )
Azure Firewall ( AZURE_FIREWALL )
Azure Storage Audit ( AZURE_STORAGE_AUDIT )
Azure VNET Flow ( AZURE_VNET_FLOW )
BIND ( BIND_DNS )
Blue Coat Proxy ( BLUECOAT_WEBPROXY )
Brocade Switch ( BROCADE_SWITCH )
Carbon Black ( CB_EDR )
Carbon Black App Control ( CB_APP_CONTROL )
Check Point ( CHECKPOINT_FIREWALL )
Chronicle SOAR Audit ( CHRONICLE_SOAR_AUDIT )
Cisco Application Centric Infrastructure ( CISCO_ACI )
Cisco ASA ( CISCO_ASA_FIREWALL )
Cisco Email Security ( CISCO_EMAIL_SECURITY )
Cisco Firepower NGFW ( CISCO_FIREPOWER_FIREWALL )
Cisco Internetwork Operating System ( CISCO_IOS )
Cisco IronPort ( CISCO_IRONPORT )
Cisco ISE ( CISCO_ISE )
Cisco NX-OS ( CISCO_NX_OS )
Cisco Router ( CISCO_ROUTER )
Cisco Umbrella Web Proxy ( UMBRELLA_WEBPROXY )
Cisco vManage SD-WAN ( CISCO_SDWAN )
Citrix Netscaler ( CITRIX_NETSCALER )
Claroty Continuous Threat Detection ( CLAROTY_CTD )
Cloudflare ( CLOUDFLARE )
CrowdStrike Detection Monitoring ( CS_DETECTS )
CrowdStrike Falcon ( CS_EDR )
Crowdstrike IOC ( CROWDSTRIKE_IOC )
Custom Security Data Analytics ( CUSTOM_SECURITY_DATA_ANALYTICS )
CyberArk Endpoint Privilege Manager (EPM) ( CYBERARK_EPM )
Cyberark Privilege Cloud ( CYBERARK_PRIVILEGE_CLOUD )
Darktrace ( DARKTRACE )
Datadog ( DATADOG )
Dell Switch ( DELL_SWITCH )
Elastic Defend ( ELASTIC_DEFEND )
ESET AV ( ESET_AV )
ExtraHop RevealX ( EXTRAHOP )
F5 Advanced Firewall Management ( F5_AFM )
F5 ASM ( F5_ASM )
FireEye ETP ( FIREEYE_ETP )
FireEye NX ( FIREEYE_NX )
FortiGate ( FORTINET_FIREWALL )
Fortinet FortiAnalyzer ( FORTINET_FORTIANALYZER )
Fortinet Web Application Firewall ( FORTINET_FORTIWEB )
GitHub ( GITHUB )
Guardicore Centra ( GUARDICORE_CENTRA )
H3C Comware Platform Switch ( H3C_SWITCH )
IBM Cloud Activity Tracker ( IBM_CLOUD_ACTIVITY_TRACKER )
IBM Security Verify Access ( IBM_SVA )
IBM zSecure Alert ( IBM_ZSECURE_ALERT )
Imperva ( IMPERVA_WAF )
Infoblox ( INFOBLOX )
Infoblox DHCP ( INFOBLOX_DHCP )
KnowBe4 PhishER ( KNOWBE4_PHISHER )
LastPass Password Management ( LASTPASS )
Linux Auditing System (AuditD) ( AUDITD )
Microsoft AD ( WINDOWS_AD )
Microsoft AD FS ( ADFS )
Microsoft Azure Activity ( AZURE_ACTIVITY )
Microsoft Defender for Endpoint ( MICROSOFT_DEFENDER_ENDPOINT )
Microsoft Graph API Alerts ( MICROSOFT_GRAPH_ALERT )
Microsoft IIS ( IIS )
Netskope V2 ( NETSKOPE_ALERT_V2 )
NGINX ( NGINX )
Nozomi Networks Scada Guardian ( NOZOMI_GUARDIAN )
Office 365 ( OFFICE_365 )
Okta ( OKTA )
Openpath ( OPENPATH )
Opnsense ( OPNSENSE )
Palo Alto Cortex XDR Alerts ( CORTEX_XDR )
Palo Alto Cortex XDR Events ( PAN_CORTEX_XDR_EVENTS )
Palo Alto Networks Firewall ( PAN_FIREWALL )
Palo Alto Panorama ( PAN_PANORAMA )
Palo Alto Prisma Access ( PAN_CASB )
Ping Federate ( PING_FEDERATE )
Ping Identity ( PING )
PostgreSQL ( POSTGRESQL )
Proofpoint Tap Alerts ( PROOFPOINT_MAIL )
Proofpoint Threat Response ( PROOFPOINT_TRAP )
Radware Web Application Firewall ( RADWARE_FIREWALL )
Red Hat OpenShift ( REDHAT_OPENSHIFT )
Remediant SecureONE ( REMEDIANT_SECUREONE )
Riverbed Steelhead ( STEELHEAD )
SailPoint IAM ( SAILPOINT_IAM )
Security Command Center Posture Violation ( GCP_SECURITYCENTER_POSTURE_VIOLATION )
Security Command Center Threat ( N/A )
Security Command Center Toxic Combination ( GCP_SECURITYCENTER_TOXIC_COMBINATION )
Symantec DLP ( SYMANTEC_DLP )
Sysdig ( SYSDIG )
Teradata DB ( TERADATA_DB )
Terraform Enterprise Audit ( TERRAFORM_ENTERPRISE )
Trend Micro Vision One ( TRENDMICRO_VISION_ONE )
Tripwire ( TRIPWIRE_FIM )
Vectra Detect ( VECTRA_DETECT )
Vectra Stream ( VECTRA_STREAM )
Versa Firewall ( VERSA_FIREWALL )
VMware AirWatch ( AIRWATCH )
VMware ESXi ( VMWARE_ESX )
Voltage ( VOLTAGE )
WatchGuard ( WATCHGUARD )
Windows DHCP ( WINDOWS_DHCP )
Windows Event ( WINEVTLOG )
Windows Event (XML) ( WINEVTLOG_XML )
Windows Hyper-V ( WINDOWS_HYPERV )
wiz.io ( WIZ_IO )
Workday ( WORKDAY )
Workspace Activities ( WORKSPACE_ACTIVITY )
Zscaler ( ZSCALER_WEBPROXY )
Zscaler CASB ( ZSCALER_CASB )
ZScaler Deception ( ZSCALER_DECEPTION )
Zscaler DLP ( ZSCALER_DLP )
Zscaler Tunnel ( ZSCALER_TUNNEL )
The following log types were added without a default parser. Each parser is listed by product name and log_type value, where applicable.
Akamai Kona Edge Grid ( AKAMAI_KONA_EDGE_GRID )
Azure Compute ( AZURE_COMPUTE )
Bluecat Micetro IP Address Management ( BLUECAT_MICETRO_IPAM )
Cloudera Ranger ( CLOUDERA_RANGER )
Cyberark Identity ( CYBERARK_IDENTITY )
Fortinet FortiDLP ( FORTINET_FORTIDLP )
IBM Cognos Analytics ( IBM_COGNOS )
IBM Planning Analytics ( IBM_PA )
Ironclad ( IRONCLAD )
Ivanti Endpoint Manager Mobile ( IVANTI_ENDPOINT_MANAGER_MOBILE )
Mimecast Mail V2 ( MIMECAST_MAIL_V2 )
Minsait Sigefi ( MINSAIT_SIGEFI )
Netskope One Secure SD-WAN ( NETSKOPE_SDWAN )
Proxmox ( PROXMOX )
Radware Bot ( RADWARE_BOT )
ScaleFusion for Windows MDM ( SCALEFUSION )
Titan SFTP Server ( TITAN_SFTP )
ZoomInfo ( ZOOMINFO )
Zscaler Email DLP Insights ( ZSCALER_EMAIL_DLP_INSIGHTS )
For a list of supported log types and details about default parser changes, see Supported log types and default parsers .
June 30, 2025
Change
Data tables are multicolumn constructs that let you input your own data into Google SecOps. You can create or import data tables to your Google SecOps account using the Google SecOps UI, the Data Tables API, or by using YARA-L queries in rules. This feature is now available to all customers.
What's new for this release:
Multiple web interface enhancements have been made, including a new default table view for data table management.
Support for the number data type is now available for data table columns.
Support for repeated fields in data table columns.
The Limitations section has additional details.
June 23, 2025
Announcement
New parser documentation now available
New parser documentation is available to help you ingest and normalize logs from the following sources:
Collect BeyondTrust BeyondInsight logs
Collect BloxOne Threat Defense logs
Collect BlueCat Edge DNS Resolver logs
Collect Cambium Networks logs
Collect Check Point Audit logs
Collect Check Point EDR logs
Collect Check Point SmartDefense logs
Collect Commvault logs
Collect Comodo AV logs
Collect Cylance PROTECT logs
Collect Cyolo OT logs
Collect Delinea PAM logs
Collect Dell CyberSense logs
Collect Dell EMC Data Domain logs
Collect Dell EMC Isilon NAS logs
Collect Dell EMC PowerStore logs
Collect Dell OpenManage logs
Collect Endpoint Protector DLP logs
Collect ESET AV logs
Collect ESET EDR logs
Collect F5 AFM logs
Collect F5 ASM logs
Collect FileZilla FTP logs
Collect Forescout NAC logs
Collect ForgeRock OpenAM logs
Collect HAProxy logs
Collect Kaseya Datto File Protection logs
Collect ManageEngine AD360 logs
Collect Palo Alto Cortex XDR Events logs
Collect Snowflake logs
Collect Trellix DLP logs
Collect Trellix ePO logs
Collect Trend Micro DDI logs
Collect Trend Micro Email Security logs
Collect Trend Micro Vision One Activity logs
Collect Trend Micro Vision One Audit logs
Collect Trend Micro Vision One Container Vulnerability logs
Collect Trend Micro Vision One Detections logs
Collect Trend Micro Vision One Observed Attack Techniques logs
Collect Trend Micro Vision One Workbench logs
June 19, 2025
Feature
Product Centric Feed Management
This feature is currently in Preview.
You can now configure multiple log-type feeds for the same product type on a single page. This new product-led experience simplifies the feed configuration flow and provides additional in-product guidance. For more information, see Configure feeds by product .
June 18, 2025
Feature
New data ingestion and health dashboard widgets are now available.
Silent host monitoring : displays hosts that were active in the last 7 days, but haven't reported recently, including a count of days since their last ingestion.
BindPlane agent logging and health : visualizes logging activity and agent health. Requires Bindplane agent logs to be ingested into Google SecOps.
Throughput in bytes : shows ingestion volume over time.
Improved log type distribution charts : updates charts for better readability and usability.
Feature
You can now remove existing UDM field mappings by using parser extensions in Google SecOps.
For more information, see Remove UDM field mappings using parser extensions and Code snippet - Remove existing mappings
June 16, 2025
Announcement
The Release Candidate period of the following premium parsers has been extended from the end of May to the week of July 21, 2025:
Crowdstrike Detection Monitoring (CS_DETECTS)
Crowdstrike Falcon (CS_EDR)
Microsoft Defender for Endpoint
We recommend that you opt-in early and make any necessary adjustments before these updates become the default.
June 04, 2025
Announcement
The following parser documentation is now available:
Collect Abnormal Security logs
Collect Apache Cassandra logs
Collect Darktrace logs
Collect Nix Systems Ubuntu Server (Unix System) logs
Collect 1Password logs
Collect 1Password audit logs
Collect Symantec Endpoint Protection logs
Collect Symantec VIP Authentication Hub logs
Collect Symantec VIP Enterprise Gateway logs
Collect Symantec Web Isolation logs
Collect Varonis logs
Collect Oracle DB logs
Collect Akeyless Vault logs
Collect Attivo Networks BOTsink logs
Collect Avaya Aura logs
Collect BeyondTrust Endpoint Privilege Management logs
Collect BeyondTrust Privileged Identity logs
Collect Blue Coat ProxySG logs
Collect Microsoft Exchange logs
Collect MYSQL logs
Collect Signal Sciences WAF logs
Collect Symantec CloudSOC CASB logs
June 03, 2025
Fixed
User interface fixes
There was an issue with highlighting regular expressions in Search and Rules Editor . Once you entered a regular expression, all subsequent text on the line would be highlighted as if it was also a regular expression (whether it was or wasn't). This issue has been fixed. Note that both string literals (specified with back ticks) and regular expressions are highlighted in the same color.
There was an issue with uppercase keywords in Search and Rules Editor . They weren't being highlighted correctly. This issue has been fixed.
May 29, 2025
Change
Google SecOps has updated the list of supported default parsers. Parsers are updated gradually, so it might take one to four days before you see the changes reflected in your region.
The following supported default parsers have changed. Each parser is listed by product name and log_type value, if applicable. This list now includes both released default parsers and pending parser updates.
AIX system ( AIX_SYSTEM )
Akamai WAF ( AKAMAI_WAF )
Apache ( APACHE )
Appian Cloud ( APPIAN_CLOUD )
Auth0 ( AUTH_ZERO )
AWS CloudFront ( AWS_CLOUDFRONT )
AWS Cloudtrail ( AWS_CLOUDTRAIL )
AWS GuardDuty ( GUARDDUTY )
AWS Macie ( AWS_MACIE )
AWS Session Manager ( AWS_SESSION_MANAGER )
AWS VPC Flow ( AWS_VPC_FLOW )
AWS VPC Flow (CSV) ( AWS_VPC_FLOW_CSV )
Azure AD ( AZURE_AD )
Azure AD Organizational Context ( AZURE_AD_CONTEXT )
Azure Firewall ( AZURE_FIREWALL )
Azure Storage Audit ( AZURE_STORAGE_AUDIT )
Barracuda Firewall ( BARRACUDA_FIREWALL )
BeyondTrust BeyondInsight ( BEYONDTRUST_BEYONDINSIGHT )
BIND ( BIND_DNS )
Bitdefender ( BITDEFENDER )
Blue Coat Proxy ( BLUECOAT_WEBPROXY )
Brocade Switch ( BROCADE_SWITCH )
Carbon Black ( CB_EDR )
CircleCI ( CIRCLECI )
Cisco ASA ( CISCO_ASA_FIREWALL )
Cisco Firepower NGFW ( CISCO_FIREPOWER_FIREWALL )
Cisco Internetwork Operating System ( CISCO_IOS )
Cisco ISE ( CISCO_ISE )
Cisco NX-OS ( CISCO_NX_OS )
Cisco Prime ( CISCO_PRIME )
Cisco Switch ( CISCO_SWITCH )
Cisco Unity Connection ( CISCO_UNITY_CONNECTION )
Cloud Audit Logs ( N/A )
CrowdStrike Alerts API ( CS_ALERTS )
CrowdStrike Falcon ( CS_EDR )
CyberArk Endpoint Privilege Manager (EPM) ( CYBERARK_EPM )
CyberArk Privileged Access Manager (PAM) ( CYBERARK_PAM )
Cylance Protect ( CYLANCE_PROTECT )
Darktrace ( DARKTRACE )
Dell OpenManage ( DELL_OPENMANAGE )
EfficientIP DDI ( EFFICIENTIP_DDI )
Elastic Defend ( ELASTIC_DEFEND )
Elastic Windows Event Log Beats ( ELASTIC_WINLOGBEAT )
ExtraHop RevealX ( EXTRAHOP )
F5 ASM ( F5_ASM )
F5 BIGIP LTM ( F5_BIGIP_LTM )
F5 DNS ( F5_DNS )
Fastly WAF ( FASTLY_WAF )
FireEye HX ( FIREEYE_HX )
FortiGate ( FORTINET_FIREWALL )
Fortinet FortiAnalyzer ( FORTINET_FORTIANALYZER )
Fortinet FortiAuthenticator ( FORTINET_FORTIAUTHENTICATOR )
Fortinet FortiNAC ( FORTINET_FORTINAC )
Fortinet Web Application Firewall ( FORTINET_FORTIWEB )
GitHub ( GITHUB )
Gitlab ( GITLAB )
HP Aruba (ClearPass) ( CLEARPASS )
Ipswitch SFTP ( IPSWITCH_SFTP )
Juniper ( JUNIPER_FIREWALL )
Linux Auditing System (AuditD) ( AUDITD )
ManageEngine ADManager Plus ( ADMANAGER_PLUS )
McAfee ePolicy Orchestrator ( MCAFEE_EPO )
Microsoft AD FS ( ADFS )
Microsoft Defender for Endpoint ( MICROSOFT_DEFENDER_ENDPOINT )
Microsoft Defender for Identity ( MICROSOFT_DEFENDER_IDENTITY )
Microsoft IIS ( IIS )
Microsoft PowerShell ( POWERSHELL )
Netskope Web Proxy ( NETSKOPE_WEBPROXY )
Nokia Router ( NOKIA_ROUTER )
Office 365 ( OFFICE_365 )
Oracle ( ORACLE_DB )
Palo Alto Cortex XDR Events ( PAN_CORTEX_XDR_EVENTS )
Palo Alto Prisma Access ( PAN_CASB )
Ping Federate ( PING_FEDERATE )
Ping Identity ( PING )
Proofpoint Tap Alerts ( PROOFPOINT_MAIL )
Radware Web Application Firewall ( RADWARE_FIREWALL )
ServiceNow Audit ( SERVICENOW_AUDIT )
Snare System Diagnostic Logs ( SNARE_SOLUTIONS )
Symantec DLP ( SYMANTEC_DLP )
Symantec Security Analytics ( SYMANTEC_SA )
Sysdig ( SYSDIG )
Tanium Question ( TANIUM_QUESTION )
Trend Micro Vision One ( TRENDMICRO_VISION_ONE )
Trend Micro Vision One Workbench ( TRENDMICRO_VISION_ONE_WORKBENCH )
TrendMicro Deep Discovery Inspector ( TRENDMICRO_DDI )
VanDyke SFTP ( VANDYKE_SFTP )
Vectra Detect ( VECTRA_DETECT )
Vectra Stream ( VECTRA_STREAM )
Vectra XDR ( VECTRA_XDR )
VMware ESXi ( VMWARE_ESX )
VMWare VSphere ( VMWARE_VSPHERE )
WatchGuard ( WATCHGUARD )
Windows Event (XML) ( WINEVTLOG_XML )
Workspace Activities ( WORKSPACE_ACTIVITY )
Zscaler ( ZSCALER_WEBPROXY )
Zscaler CASB ( ZSCALER_CASB )
Zscaler DLP ( ZSCALER_DLP )
ZScaler DNS ( ZSCALER_DNS )
Zscaler Internet Access Audit Logs ( ZSCALER_INTERNET_ACCESS )
ZScaler NGFW ( ZSCALER_FIREWALL )
Zscaler Private Access ( ZSCALER_ZPA )
Zscaler Secure Private Access Audit Logs ( ZSCALER_ZPA_AUDIT )
Zscaler Tunnel ( ZSCALER_TUNNEL )
The following log types were added without a default parser. Each parser is listed by product name and log_type value, if applicable.
Azure App Configuration ( AZURE_APPCONFIGURATION )
Azure App Platform ( AZURE_APPPLATFORM )
Azure ArcData ( AZURE_ARCDATA )
Azure Authorization ( AZURE_AUTHORIZATION )
Azure Change Analysis ( AZURE_CHANGEANALYSIS )
Azure DataFactory ( AZURE_DATAFACTORY )
Doppel ( DOPPEL )
Genian NAC ( GENIAN_NAC )
Penta Security Wapples ( PENTA_WAPPLES )
Redmine ( REDMINE )
S2W Quaxar ( S2W_QUAXAR )
SecurityBridge Dev ( SECURITYBRIDGE_DEV )
TeamT5 ThreatSonar EDR ( TEAMT5_THREATSONAR_EDR )
WorkDay User Sign In ( WORKDAY_USER_SIGNIN )
For a list of supported log types and details about default parser changes, see Supported log types and default parsers .
May 26, 2025
Feature
New Storage Transfer Service (STS) based feeds
This feature is currently in Preview.
Existing tenants are now able to create new feeds using STS, whereas existing feeds will remain unaffected. Customers will be separately notified about the required steps and timelines for the migration of existing feeds to STS.
The following new feeds are available:
GOOGLE_CLOUD_STORAGE_V2
GOOGLE_CLOUD_STORAGE_EVENT_DRIVEN
AMAZON_S3_V2
AMAZON_SQS_V2
AZURE_BLOBSTORE_V2
The following feed types are replaced by the new STS-based feeds:
GOOGLE_CLOUD_STORAGE replaced by GOOGLE_CLOUD_STORAGE_V2
AMAZON_S3 replaced by AMAZON_S3_V2
AMAZON_SQS replaced by AMAZON_SQS_V2
AZURE_BLOBSTORE replaced by AZURE_BLOBSTORE_V2
For more information, see Storage Transfer Service and its benefits and Configuration by source type .
May 21, 2025
Announcement
The following parser documentation is now available.
Collect Apache logs
Collect Arista switch logs
Collect Automation Anywhere logs
Collect Cisco IOS logs
Collect Cisco Router logs
Collect Cisco Switch logs
Collect ManageEngine ADAudit Plus logs
Collect Nasuni File Services Platform logs
Collect NetApp SAN logs
Collect Symantec EDR logs
Collect HP ProCurve logs
Collect HPE iLO logs
Collect Cisco UCS logs
Collect Kaspersky AV logs
Collect LimaCharlie EDR logs
Collect McAfee Web Gateway logs
Collect Microsoft Defender for Identity logs
Collect Microsoft LAPS logs
Collect Nix System Red Hat logs
Collect Wiz logs
May 14, 2025
Announcement
New premium versions of the following parsers are now available:
ZSCALER_WEBPROXY
ZSCALER_FIREWALL
ZSCALER_DNS
ZSCALER_INTERNET_ACCESS
ZSCALER_VPN
ZSCALER_ZPA
ZSCALER_TUNNEL
ZSCALER_CASB
ZSCALER_DLP
ZSCALER_ADMIN_AUDIT
We recommend using the documented topology for each parser.
May 12, 2025
Change
YARA-L search with data tables updates
Data tables are now accessible from the Investigation menu, instead of Detection , in the web interface.
Data tables can now be used as a data source in search queries.
Role-based access control (RBAC) has been added to manage access to data tables.
Feature
A feature rollout on May 8, 2025, introduced new APIs that may require updated permissions for custom roles to access the detection UI page.
If you encounter access errors, update your permissions, as needed, or select Revert to Previous Detection Table on the detection page to revert to the previous UI.
May 09, 2025
Feature
Google SecOps supports Self Service creation of custom log types. Self service custom log types let you create custom log types instantly instead of going through SecOps support, allowing quicker data onboarding. This feature will be available as a public preview starting the week of May 12, 2025.
May 07, 2025
Announcement
We are moving service health updates for Google Cloud Security products from the Cloud Status Dashboard to a new security-specific status dashboard .
This dashboard displays service status and incident history for the following products:
Google SecOps
Google Threat Intelligence
Mandiant Advantage Threat Intelligence
Mandiant Attack Surface Management
Mandiant Digital Threat Monitoring
Mandiant Hunt
Mandiant Managed Defense
Mandiant Security Validation
May 05, 2025
Feature
New Light Theme
Google SecOps has introduced a new light theme option in the platform. The light theme includes a color palette for visual clarity.
May 02, 2025
Feature
Auto extraction of JSON logs
Google SecOps supports Auto Extraction of JSON logs. The auto extraction feature lets you use raw log fields directly in search, detection rules, and Native Dashboards , with or without a parser. Public preview for this feature begins the week of May 5, 2025.
April 28, 2025
Change
Google SecOps has updated the list of supported default parsers. Parsers are updated gradually, so changes may take one-to-four days to appear in your region.
The following supported default parsers have been updated. Each parser is listed by product name and log_type value, if applicable. This list now includes both released default parsers and pending parser updates.
1Password Audit Events ( ONEPASSWORD_AUDIT_EVENTS )
AIX system ( AIX_SYSTEM )
Akamai DataStream 2 ( AKAMAI_DATASTREAM_2 )
Alveo Risk Data Management ( ALVEO_RDM )
Amazon API Gateway ( AWS_API_GATEWAY )
Apache Tomcat ( TOMCAT )
Appian Cloud ( APPIAN_CLOUD )
Arcsight CEF ( ARCSIGHT_CEF )
Asset Panda ( ASSET_PANDA )
Aware Audit ( AWARE_AUDIT )
Aware Signals ( AWARE_SIGNALS )
AWS Cloudtrail ( AWS_CLOUDTRAIL )
AWS CloudWatch ( AWS_CLOUDWATCH )
AWS ECS Metrics ( AWS_ECS_METRICS )
AWS Elastic Load Balancer ( AWS_ELB )
AWS GuardDuty ( GUARDDUTY )
AWS Inspector ( AWS_INSPECTOR )
AWS Lambda Function ( AWS_LAMBDA_FUNCTION )
AWS RDS ( AWS_RDS )
AWS Redshift ( AWS_REDSHIFT )
AWS Route 53 DNS ( AWS_ROUTE_53 )
AWS Security Hub ( AWS_SECURITY_HUB )
AWS VPC Flow ( AWS_VPC_FLOW )
AWS WAF ( AWS_WAF )
Azure AD Directory Audit ( AZURE_AD_AUDIT )
Azure AD Organizational Context ( AZURE_AD_CONTEXT )
Azure Application Gateway ( AZURE_GATEWAY )
Azure Firewall ( AZURE_FIREWALL )
Azure Key Vault logging ( AZURE_KEYVAULT_AUDIT )
Barracuda CloudGen Firewall ( BARRACUDA_CLOUDGEN_FIREWALL )
Barracuda WAF ( BARRACUDA_WAF )
BeyondTrust BeyondInsight ( BEYONDTRUST_BEYONDINSIGHT )
Blue Coat Proxy ( BLUECOAT_WEBPROXY )
Broadcom Support Portal Audit Logs ( BROADCOM_SUPPORT_PORTAL )
Cato Networks ( CATO_NETWORKS )
Cequence Bot Defense ( CEQUENCE_BOT_DEFENSE )
Check Point ( CHECKPOINT_FIREWALL )
ChromeOS XDR ( CHROMEOS_XDR )
Cisco Email Security ( CISCO_EMAIL_SECURITY )
Cisco EStreamer ( CISCO_ESTREAMER )
Cisco Firepower NGFW ( CISCO_FIREPOWER_FIREWALL )
Cisco FireSIGHT Management Center ( CISCO_FIRESIGHT )
Cisco Internetwork Operating System ( CISCO_IOS )
Cisco IronPort ( CISCO_IRONPORT )
Cisco ISE ( CISCO_ISE )
Cisco NX-OS ( CISCO_NX_OS )
Cisco Switch ( CISCO_SWITCH )
Cisco Umbrella Cloud Firewall ( UMBRELLA_FIREWALL )
Cisco vManage SD-WAN ( CISCO_SDWAN )
Cisco VPN ( CISCO_VPN )
Citrix Netscaler ( CITRIX_NETSCALER )
Citrix Storefront ( CITRIX_STOREFRONT )
Claroty Xdome ( CLAROTY_XDOME )
Cloud Audit Logs ( N/A )
Cloud Data Loss Prevention ( N/A )
Cloudflare Network Analytics ( CLOUDFLARE_NETWORK_ANALYTICS )
Cloudflare WAF ( CLOUDFLARE_WAF )
Cloudflare Warp ( CLOUDFLARE_WARP )
CommVault ( COMMVAULT )
CrowdStrike Detection Monitoring ( CS_DETECTS )
CrowdStrike Falcon ( CS_EDR )
CrowdStrike Falcon Stream ( CS_STREAM )
CrowdStrike Identity Protection Services ( CS_IDP )
CrushFTP ( CRUSHFTP )
Custom Application Access Logs ( CUSTOM_APPLICATION_ACCESS )
CyberArk Privileged Access Manager (PAM) ( CYBERARK_PAM )
Cybereason EDR ( CYBEREASON_EDR )
Cyolo Secure Remote Access for OT ( CYOLO_OT )
Datadog ( DATADOG )
Delinea Secret Server ( DELINEA_SECRET_SERVER )
Dell CyberSense ( DELL_CYBERSENSE )
Digicert ( DIGICERT )
Edgio WAF ( EDGIO_WAF )
Elastic Packet Beats ( ELASTIC_PACKETBEATS )
F5 ASM ( F5_ASM )
F5 DNS ( F5_DNS )
Forcepoint DLP ( FORCEPOINT_DLP )
Forcepoint NGFW ( FORCEPOINT_FIREWALL )
Forgerock OpenIdM ( FORGEROCK_OPENIDM )
FortiGate ( FORTINET_FIREWALL )
Fortinet FortiAnalyzer ( FORTINET_FORTIANALYZER )
Fortinet Fortimanager ( FORTINET_FORTIMANAGER )
Fortinet Web Application Firewall ( FORTINET_FORTIWEB )
GitHub ( GITHUB )
Gitlab ( GITLAB )
Harness IO ( HARNESS_IO )
Hashicorp Vault ( HASHICORP )
Hillstone Firewall ( HILLSTONE_NGFW )
Huawei Switches ( HUAWEI_SWITCH )
IBM Guardium ( GUARDIUM )
Imperva Database ( IMPERVA_DB )
Intel Endpoint Management Assistant ( INTEL_EMA )
JAMF Security Cloud ( JAMF_SECURITY_CLOUD )
JFrog Artifactory ( JFROG_ARTIFACTORY )
JumpCloud Directory Insights ( JUMPCLOUD_DIRECTORY_INSIGHTS )
Juniper ( JUNIPER_FIREWALL )
Kaspersky AV ( KASPERSKY_AV )
Kaspersky Endpoint ( KASPERSKY_ENDPOINT )
Kolide Endpoint Security ( KOLIDE )
Kubernetes Audit ( KUBERNETES_AUDIT )
Layer7 SiteMinder ( SITEMINDER_SSO )
Linux Auditing System (AuditD) ( AUDITD )
Looker Audit ( LOOKER_AUDIT )
ManageEngine ADAudit Plus ( ADAUDIT_PLUS )
ManageEngine ADManager Plus ( ADMANAGER_PLUS )
McAfee Web Gateway ( MCAFEE_WEBPROXY )
Metabase ( METABASE )
Microsoft AD FS ( ADFS )
Microsoft Azure Activity ( AZURE_ACTIVITY )
Microsoft Azure NSG Flow ( AZURE_NSG_FLOW )
Microsoft CyberX ( CYBERX )
Microsoft Defender for Endpoint ( MICROSOFT_DEFENDER_ENDPOINT )
Microsoft Defender for Identity ( MICROSOFT_DEFENDER_IDENTITY )
Microsoft Defender for Office 365 ( MICROSOFT_DEFENDER_MAIL )
Microsoft IIS ( IIS )
Microsoft PowerShell ( POWERSHELL )
Microsoft Sentinel ( MICROSOFT_SENTINEL )
Microsoft System Center Endpoint Protection ( MICROSOFT_SCEP )
Mikrotik Router ( MIKROTIK_ROUTER )
Mimecast ( MIMECAST_MAIL )
MISP Threat Intelligence ( MISP_IOC )
NetIQ eDirectory ( NETIQ_EDIRECTORY )
Netskope V2 ( NETSKOPE_ALERT_V2 )
Nozomi Networks Scada Guardian ( NOZOMI_GUARDIAN )
Office 365 ( OFFICE_365 )
Okta ( OKTA )
Okta User Context ( OKTA_USER_CONTEXT )
One Identity Identity Manager ( ONE_IDENTITY_IDENTITY_MANAGER )
Oort Security Tool ( OORT )
Open Cybersecurity Schema Framework (OCSF) ( OCSF )
Open LDAP ( OPENLDAP )
Opnsense ( OPNSENSE )
Ops Genie ( OPS_GENIE )
Oracle ( ORACLE_DB )
Oracle Cloud Guard ( OCI_CLOUDGUARD )
Oracle Cloud Infrastructure Audit Logs ( OCI_AUDIT )
Orca Cloud Security Platform ( ORCA )
Palo Alto Cortex XDR Alerts ( CORTEX_XDR )
Palo Alto Networks Firewall ( PAN_FIREWALL )
Palo Alto Panorama ( PAN_PANORAMA )
Palo Alto Prisma Access ( PAN_CASB )
Palo Alto Prisma Cloud Alert payload ( PAN_PRISMA_CA )
Pharos ( PHAROS )
Privacy-I ( PRIVACY_I )
Proofpoint On Demand ( PROOFPOINT_ON_DEMAND )
Proofpoint Tap Alerts ( PROOFPOINT_MAIL )
Proofpoint Threat Response ( PROOFPOINT_TRAP )
Radware Web Application Firewall ( RADWARE_FIREWALL )
ReviveSec ( REVIVESEC )
Rubrik ( RUBRIK )
Salesforce ( SALESFORCE )
Sangfor Proxy ( SANGFOR_PROXY )
Security Command Center Posture Violation ( GCP_SECURITYCENTER_POSTURE_VIOLATION )
Security Command Center Threat ( N/A )
Security Command Center Toxic Combination ( GCP_SECURITYCENTER_TOXIC_COMBINATION )
ServiceNow CMDB ( SERVICENOW_CMDB )
Snare System Diagnostic Logs ( SNARE_SOLUTIONS )
Snipe-IT ( SNIPE_IT )
Snyk Group level audit/issues logs ( SNYK_ISSUES )
SonicWall ( SONIC_FIREWALL )
Sophos Central ( SOPHOS_CENTRAL )
Swimlane Platform ( SWIMLANE )
Symantec DLP ( SYMANTEC_DLP )
Symantec Event export ( SYMANTEC_EVENT_EXPORT )
Symantec Web Security Service ( SYMANTEC_WSS )
Tanium Question ( TANIUM_QUESTION )
Tanium Threat Response ( TANIUM_THREAT_RESPONSE )
Teleport Access Plane ( TELEPORT_ACCESS_PLANE )
Tenable Active Directory Security ( TENABLE_ADS )
Tenable CSPM ( TENABLE_CSPM )
tenable.io ( TENABLE_IO )
Terraform Enterprise Audit ( TERRAFORM_ENTERPRISE )
Thinkst Canary ( THINKST_CANARY )
ThreatX WAF ( THREATX_WAF )
Trend Micro Email Security Advanced ( TRENDMICRO_EMAIL_SECURITY )
Trend Micro Vision One ( TRENDMICRO_VISION_ONE )
TrendMicro Apex Central ( TRENDMICRO_APEX_CENTRAL )
TXOne Stellar ( TRENDMICRO_STELLAR )
UKG ( UKG )
Unix system ( NIX_SYSTEM )
UPX AntiDDoS ( UPX_ANTIDDOS )
VanDyke SFTP ( VANDYKE_SFTP )
Varonis ( VARONIS )
Vectra Alerts ( VECTRA_ALERTS )
Vectra Stream ( VECTRA_STREAM )
VMware AirWatch ( AIRWATCH )
Vmware Avinetworks iWAF ( VMWARE_AVINETWORKS_IWAF )
VMware ESXi ( VMWARE_ESX )
VMware Horizon ( VMWARE_HORIZON )
Watchguard EDR ( WATCHGUARD_EDR )
Windows Defender AV ( WINDOWS_DEFENDER_AV )
Windows DHCP ( WINDOWS_DHCP )
Windows DNS ( WINDOWS_DNS )
Windows Event ( WINEVTLOG )
Windows Event (XML) ( WINEVTLOG_XML )
Windows Sysmon ( WINDOWS_SYSMON )
Workday Audit Logs ( WORKDAY_AUDIT )
Workday User Activity ( WORKDAY_USER_ACTIVITY )
WPEngine ( WPENGINE )
Zimperium ( ZIMPERIUM )
Zscaler ( ZSCALER_WEBPROXY )
ZScaler DNS ( ZSCALER_DNS )
Zscaler Internet Access Audit Logs ( ZSCALER_INTERNET_ACCESS )
ZScaler NGFW ( ZSCALER_FIREWALL )
The following log types were added without a default parser. Each parser is listed by product name and log_type value, if applicable.
Accenture Synthetic ( ACCENTURE_SYNTHETIC )
Adyen Platform ( ADYEN )
AliCloud ActionTrail ( ALICLOUD_ACTIONTRAIL )
Apache LOG4J Java Application Log ( LOG4J )
AppSmith Audit ( APPSMITH_AUDIT )
Arctic Security Arctic Node ( ARCTIC_NODE )
Arista CorvilNet DANZ Integration ( ARISTA_CORVILNET )
Arista Extensible Operating System ( ARISTA_EOS )
AvePoint EnPower ( AVEPOINT_ENPOWER )
Avigilon Alta Cloud Security ( AVIGILON_ALTA_CLOUD_SECURITY )
Avigilon Ava Security Camera ( AVIGILON_AVA_SECURITY_CAMERA )
AWS Dasha ( AWS_DASHA )
AWS Elastic Kubernetes Service ( AWS_EKS )
Azure Network Security Group Event ( AZURE_NSG_EVENT )
Azure Windows Virtual Desktop Connections Logs ( AZURE_WVD_CONNECTIONS )
Azure Windows Virtual Desktop Management Logs ( AZURE_WVD_MANAGEMENT )
Barracuda Load Balancer ADC ( BARRACUDA_LOAD_BALANCER )
Broadcom Edge Secure Web Gateway ( BROADCOM_EDGE_SWG )
Celonis Audit Logs ( CELONIS )
Chopin PrePay Solutions ( CHOPIN_PPS )
Cisco Duo Authentication Proxy ( DUO_AUTH_PROXY )
Cloudflare CASB Findings ( CLOUDFLARE_CASB_FINDINGS )
Cloudflare Device posture results ( CLOUDFLARE_DEVICE_POSTURE_RESULTS )
Cloudflare DLP Forensic Copies ( CLOUDFLARE_DLP_FORENSIC_COPIES )
Cloudflare DNS Firewall Logs ( CLOUDFLARE_DNS_FIREWALL_LOGS )
Cloudflare DNS logs ( CLOUDFLARE_DNS_LOGS )
Cloudflare Email Security Alerts ( CLOUDFLARE_EMAIL_SECURITY_ALERTS )
Cloudflare Firewall Events ( CLOUDFLARE_FIREWALL_EVENTS )
Cloudflare Gateway DNS ( CLOUDFLARE_GATEWAY_DNS )
Cloudflare Gateway HTTP ( CLOUDFLARE_GATEWAY_HTTP )
Cloudflare Gateway Network ( CLOUDFLARE_GATEWAY_NETWORK )
Cloudflare HTTP requests ( CLOUDFLARE_HTTP_REQUESTS )
Cloudflare Magic IDS Detections ( CLOUDFLARE_MAGIC_IDS_DETECTIONS )
Cloudflare NEL reports ( CLOUDFLARE_NEL_REPORTS )
Cloudflare Sinkhole HTTP Logs ( CLOUDFLARE_SINKHOLE_HTTP_LOGS )
Cloudflare SSH Logs ( CLOUDFLARE_SSH_LOGS )
Cloudflare Workers Trace Events ( CLOUDFLARE_WORKERS_TRACE_EVENTS )
Cloudflare Zero Trust Network Session ( CLOUDFLARE_ZERO_TRUST_NETWORK_SESSION )
CloudWave Honeypot ( CLOUDWAVE_HONEYPOT )
ColorTokens ( COLORTOKENS )
Contrast Security ( CONTRAST_SECURITY )
Conversational Agents and Dialogflow ( CONVERSATIONAL_AGENT )
Corero SmartWall One ( CORERO_SMARTWALL_ONE )
Cytracom Control One ( CYTRACOM_CONTROL_ONE )
Datadog Application Security Management ( DATADOG_ASM )
Express NodeJS ( EXPRESS_NODEJS )
F5 Distributed Cloud WAF ( F5_DCS_WAF )
Figma Developers ( FIGMA )
FIS Trax Payment Factory ( TRAX )
Fortinet FortiDeceptor ( FORTINET_FORTIDECEPTOR )
Fortinet FortiSASE ( FORTINET_FORTISASE )
Gemini Code Assist ( GEMINI_CODE_ASSIST )
Genea Access Control ( GENEA_ACCESS_CONTROL )
Genetec Synergis ( GENETEC_SYNERGIS )
GL TRADE ( GL_TRADE )
HP Inc MFP ( HP_INC_MFP )
HP Tandem ( HP_TANDEM )
Huawei Versatile Routing Platform ( HUAWEI_VRP )
Human Security ( HUMAN_SECURITY )
iManage Threat Manager ( IMANAGE_THREAT_MANAGER )
Indefend DLP ( INDEFEND_DLP )
Invicti ( INVICTI )
Isonline ISL Light ( ISL_LIGHT )
Itential Pronghorn ( ITENTIAL_PRONGHORN )
Jit ( JIT )
Kodem Security ( KODEM_SECURITY )
Konica Minolta YSoft SafeQ ( YSOFT_SAFEQ )
LayerX ( LAYERX )
LinOTP ( LIN_OTP )
Magento Cloud ( MAGENTO_CLOUD )
Mandiant Advantage Security Validation ( MA_SV )
NetApp ONTAP Audit ( NETAPP_ONTAP_AUDIT )
Netscout Arbor Threat Mitigation System ( NETSCOUT_TMS )
Netwrix Privilege Secure ( NETWRIX_PRIVILEGE_SECURE )
NeuVector SUSE ( NEUVECTOR )
Novidea Insurance Management System ( NOVIDEA_CLAIM_HISTORY )
OneTrust ( ONETRUST )
Openpath Context ( OPENPATH_CONTEXT )
Oracle Audit Vault Database Firewall ( ORACLE_AVDF )
Oracle CPQ ( ORACLE_CPQ )
Oracle Exadata Database Machine ( ORACLE_EXADATA )
Palo Alto Prisma Cloud Workload Protection ( PAN_PRISMA_CWP )
Palo Alto Prisma Dig Cloud DSPM ( PAN_PRISMA_DIG_CLOUD_DSPM )
Panorays ( PANORAYS )
Pathlock Identity Security Platform ( PATHLOCK )
Procore ( PROCORE )
ProofPoint Email Protection ( PROOFPOINT_EMAIL_PROTECTION )
Radiantone ( RADIANTONE )
Radware Cloud WAF Service Access ( RADWARE_ACCESS )
Reblaze Web Application Firewall ( REBLAZE_WAF )
Red Access Browsing Security ( RED_ACCESS )
SafeNet Network HSM ( SAFENET_HSM )
Salesforce Marketing Cloud Audit ( SALESFORCE_MARKETING_CLOUD_AUDIT )
Salesforce Shield ( SALESFORCE_SHIELD )
Sangfor IAG ( SANGFOR_IAG )
SAP Leasing ( SAP_LEASING )
SAS Institute ( SAS_INSTITUTE )
Securden ( SECURDEN )
SecurEnvoy SecurAccess ( SECURENVOY_MFA )
Securesoft Sniper IPS ( SECURESOFT_SNIPER_IPS )
Sentra Data Loss Prevention ( SENTRA_DLP )
Shield IoT ( SHIELD_IOT )
Siemens Simatic S7 PLC SNMP ( SIEMENS_S7_PLC_SNMP )
Siemens Simatic S7 PLC SYSLOG ( SIEMENS_S7_PLC_SYSLOG )
Smartsheet User Context ( SMARTSHEET_USER_CONTEXT )
Snowflake Access ( SNOWFLAKE_ACCESS )
SOCRadar Incidents ( SOCRADAR_INCIDENTS )
Strata Maverics Identity Orchestration Platform ( STRATA_MAVERICS )
Stripe Payments ( STRIPE )
Suridata ( SURIDATA )
Teradata Access ( TERADATA_ACCESS )
Thales payShield 10K HSM ( THALES_PS10K_HSM )
Trend Micro TippingPoint Security Management System ( TREND_MICRO_TIPPING_POINT )
Valence Security ( VALENCE )
Vertica Audit ( VERTICA_AUDIT )
Windows NTP ( WINDOWS_NTP )
Winget Autoupdate ( WINGET_AUTOUPDATE )
Wiz Runtime Execution Data ( WIZ_RUNTIME_EXECUTION_DATA )
Workiva Wdesk ( WORKIVA_WDESK )
XL Release ( XLR )
Yugabyte Database ( YUGABYTE_DATABASE )
For a list of supported log types and details about default parser changes, see Supported log types and default parsers .
April 25, 2025
Feature
Google SecOps now supports native integration with Azure Event Hub through the feed management API or web interface. This enhancement enables real-time log ingestion without requiring Azure blob storage. For more information, see Create an Azure Event Hub feed .
April 23, 2025
Feature
This feature is currently in Preview.
Google SecOps now supports composite detections . Composite detections lets users link multiple YARA-L rules to detect complex, multistage threats. This capability enhances detection by correlating alerts that individual rules might not detect.
April 22, 2025
Announcement
The following parser documentation is now available:
Collect Barracuda Email Security Gateway logs
Collect Barracuda WAF logs
Collect CrowdStrike Falcon logs in CEF
Collect Juniper NetScreen Firewall logs
Collect Micro Focus NetIQ Access Manager logs
Collect Symantec DLP logs
Collect Aruba ClearPass logs
Collect Aruba Wireless Controller and Access Point logs
Collect BeyondTrust Secure Remote Access logs
Collect CyberArk Privileged Threat Analytics logs
Collect Fortinet FortiMail logs
Collect Sophos Central logs
Collect Sophos XG Firewall logs
Collect AWS EC2 Hosts logs
Collect AWS EC2 Instance logs
Collect AWS IAM logs
Collect Cisco Stealthwatch logs
Collect Cisco Umbrella audit logs
Collect Cisco Umbrella DNS logs
Collect Cisco Umbrella Web Proxy logs
Collect CommVault Backup and Recovery logs
Collect Forcepoint Proxy logs
Collect Fortinet FortiAnalyzer logs
Collect Fortinet FortiAuthenticator logs
Collect Fortinet Firewall logs
Collect Palo Alto Networks Traps logs
Collect SecureAuth Identity Platform logs
Collect Claroty CTD logs
Collect Claroty xDome logs
Collect F5 BIG-IP ASM logs
Collect FireEye HX logs
Collect Microsoft IIS logs
Collect PowerShell logs
Collect Snort logs
Collect A10 Network Load Balancer logs
Collect Alcatel switch logs
Collect AlgoSec Security Management logs
Collect Arbor Edge Defense logs
Collect Epic Systems logs
Collect Fortra Digital Guardian DLP logs
Collect MobileIron logs
Collect Microsoft Windows Defender ATP logs
Collect Nokia Router logs
Collect Broadcom Symantec SiteMinder Web Access logs
April 21, 2025
Feature
Curated Detections has been enhanced with new detection content for Cloud Threats to include rule packs covering Office 365 and Okta. These rule packs are in public preview for customers with a Google Security Operations or Enterprise Plus license.
April 18, 2025
Feature
Chrome Enterprise Threats Category
This feature is currently in Preview.
Google SecOps has introduced a new detection category, Chrome Enterprise Threats , as part of the Curated Detections feature. This category provides rule sets for extension and browser threats. For more information, see Overview of Chrome Enterprise Threats Category .
April 17, 2025
Feature
Entity Context in Search
This feature enhances security investigations and incident response by letting users search for and view context events related to entities. It incorporates UDM entity context data to provide deeper insights into security incidents.
This feature is currently in Preview.
April 15, 2025
Announcement
We are releasing updated versions of the following premium parsers:
Crowdstrike Detection Monitoring (CS_DETECTS)
Crowdstrike Falcon (CS_EDR)
Microsoft Defender for Endpoint
These updates include significant improvements to parser mappings. For a detailed list of all mapping changes, contact your Google SecOps representative.
The new versions will remain in an extended Release Candidate period through the end of May 2025. We recommend that you opt-in early and make any necessary adjustments before these updates become the default.
April 07, 2025
Feature
Premium parsers
Specific high-volume parsers are now categorized as premium . Google aims to address customer issues related to premium parsers as quickly as possible, typically within a few days.
For a complete list of different types of parsers and the level of support that Google provides for each, see Manage prebuilt and custom parsers .
For a complete list of premium parsers, see Default parser configuration and ingestion .
April 04, 2025
Feature
Optimize log management using extractors
This feature is currently in Preview.
You can now optimize log management by creating extractors to pull specific fields from high-volume log sources. For more information, see Work with extractors .
April 02, 2025
Feature
Medium Priority rule set
Google SecOps has introduced a new rule set, Medium Priority , in Applied Threat Intelligence (ATI). This rule set extends the capabilities of the ATI indicator prioritization model and expands prioritization logic to include commodity malware. For more information, see Applied Threat Intelligence priority overview .
March 27, 2025
Change
Google SecOps is renaming Applied Threat Intelligence (ATI) rules to improve clarity and better reflect the associated UDM fields with each rule detection.
Currently, multiple underlying ATI rules with the same name can appear in the Google SecOps console, even though the rules apply to different UDM fields.
This change modifies the rule_name field in the customer metadata to specify the relevant UDM field for each rule.
For example:
Old rule name: ATI Active Breach Rule Match for File IoCs (SHA256)
New rule name: ATI Active Breach Rule Match for File IoCs (about.file.sha256)
March 26, 2025
Announcement
The managed BigQuery resources and API keys associated with the chronicle-tla Google Cloud project will be fully deprecated by April 30, 2025. This applies to non-Enterprise+ customers only.
March 24, 2025
Change
Updated retention logic for raw logs and UDM events
Google SecOps now retains raw logs based on the ingestion timestamp and UDM events
based on the UDM event time.
March 18, 2025
Feature
Statistics and aggregations in UDM search using YARA-L 2.0
You can now run statistical queries on UDM events and group the results for analysis using YARA-L 2.0.
You can use the statistical queries to track critical metrics, detect anomalous behavior, and analyze trends over time.
For more information on how to run statistical queries on UDM events, see Statistics and aggregations in UDM search using YARA-L 2.0 .
March 11, 2025
Feature
Within Curated Detections , the following rules have been added to the Cloud Hacktool rule pack for Google Cloud data in the "Broad" category. These rules are intended to detect the behavior of common open source hacktools.
Collection: Set GCP Cloud Storage Bucket to Public
Discovery: Cloud Run Enumeration
Discovery: CloudFunctions Enumeration of GCP Cloud Functions
Discovery: CloudKMS Enumeration of GCP Cloud KMS
Discovery: CloudResourceManager Resource Manager Enumeration
Discovery: Compute Enumeration
Discovery: GCP Cloud IAM Enumeration
Discovery: Secret Manager Cloud Secrets Enumeration
Discovery: Storage Cloud Storage Enumeration
Exfiltration: Download Cloud Function Code
Exfiltration: Export a Compute Image Instance
Persistence: Generate Signed URL for Modifying Cloud Function Code
Privilege Escalation: Compute Set Instance or Project Metadata to Enable OS Login
Feature
URL indicators are now available for matching as part of Applied Threat Intelligence. For more information about Applied Threat Intelligence, see Applied Threat Intelligence overview .
March 10, 2025
Change
The following rule has been removed from its associated rule pack in Curated Detections due to high alert volume across the Google SecOps customer base:
Serverless Threats
Potential Cryptomining Payload running in Cloud Run Service or Cloud Run Job
March 09, 2025
Announcement
The session timeout duration is being extended from 3 hours to 8 hours. After 8 hours of activity, you are automatically logged out and required to sign in again. To prevent data loss, we recommend that you manually log out in advance if you anticipate being away from the platform for an extended period of time.
This feature will be gradually rolled out starting March 17, 2025.
March 05, 2025
Change
Gemini documentation summaries
You can use Gemini to answer questions about Google SecOps based on the documentation. Enter a prompt in the Gemini pane to request information about any aspect of how to use Google SecOps. Gemini generates a summary based on relevant documentation. This feature is in public preview.
For more information, see Gemini documentation summaries .
February 28, 2025
Change
Google SecOps has updated the list of supported default parsers. Parsers are updated gradually, so it might take one to four days before you see the changes reflected in your region.
The following supported default parsers have changed. Each parser is listed by product name and log_type value, if applicable. This list now includes both released default parsers and pending parser updates.
1Password Audit Events ( ONEPASSWORD_AUDIT_EVENTS )
AIX system ( AIX_SYSTEM )
Akamai DataStream 2 ( AKAMAI_DATASTREAM_2 )
Alveo Risk Data Management ( ALVEO_RDM )
Amazon API Gateway ( AWS_API_GATEWAY )
Apache Tomcat ( TOMCAT )
Appian Cloud ( APPIAN_CLOUD )
Arcsight CEF ( ARCSIGHT_CEF )
Asset Panda ( ASSET_PANDA )
Aware Audit ( AWARE_AUDIT )
Aware Signals ( AWARE_SIGNALS )
AWS Cloudtrail ( AWS_CLOUDTRAIL )
AWS CloudWatch ( AWS_CLOUDWATCH )
AWS ECS Metrics ( AWS_ECS_METRICS )
AWS Elastic Load Balancer ( AWS_ELB )
AWS GuardDuty ( GUARDDUTY )
AWS Inspector ( AWS_INSPECTOR )
AWS Lambda Function ( AWS_LAMBDA_FUNCTION )
AWS RDS ( AWS_RDS )
AWS Redshift ( AWS_REDSHIFT )
AWS Route 53 DNS ( AWS_ROUTE_53 )
AWS Security Hub ( AWS_SECURITY_HUB )
AWS VPC Flow ( AWS_VPC_FLOW )
AWS WAF ( AWS_WAF )
Azure AD Directory Audit ( AZURE_AD_AUDIT )
Azure AD Organizational Context ( AZURE_AD_CONTEXT )
Azure Application Gateway ( AZURE_GATEWAY )
Azure Firewall ( AZURE_FIREWALL )
Azure Key Vault logging ( AZURE_KEYVAULT_AUDIT )
Barracuda CloudGen Firewall ( BARRACUDA_CLOUDGEN_FIREWALL )
Barracuda WAF ( BARRACUDA_WAF )
BeyondTrust BeyondInsight ( BEYONDTRUST_BEYONDINSIGHT )
Blue Coat Proxy ( BLUECOAT_WEBPROXY )
Broadcom Support Portal Audit Logs ( BROADCOM_SUPPORT_PORTAL )
Cato Networks ( CATO_NETWORKS )
Cequence Bot Defense ( CEQUENCE_BOT_DEFENSE )
Check Point ( CHECKPOINT_FIREWALL )
ChromeOS XDR ( CHROMEOS_XDR )
Cisco Email Security ( CISCO_EMAIL_SECURITY )
Cisco EStreamer ( CISCO_ESTREAMER )
Cisco Firepower NGFW ( CISCO_FIREPOWER_FIREWALL )
Cisco FireSIGHT Management Center ( CISCO_FIRESIGHT )
Cisco Internetwork Operating System ( CISCO_IOS )
Cisco IronPort ( CISCO_IRONPORT )
Cisco ISE ( CISCO_ISE )
Cisco NX-OS ( CISCO_NX_OS )
Cisco Switch ( CISCO_SWITCH )
Cisco Umbrella Cloud Firewall ( UMBRELLA_FIREWALL )
Cisco vManage SD-WAN ( CISCO_SDWAN )
Cisco VPN ( CISCO_VPN )
Citrix Netscaler ( CITRIX_NETSCALER )
Citrix Storefront ( CITRIX_STOREFRONT )
Claroty Xdome ( CLAROTY_XDOME )
Cloud Audit Logs ( N/A )
Cloud Data Loss Prevention ( N/A )
Cloudflare Network Analytics ( CLOUDFLARE_NETWORK_ANALYTICS )
Cloudflare WAF ( CLOUDFLARE_WAF )
Cloudflare Warp ( CLOUDFLARE_WARP )
CommVault ( COMMVAULT )
CrowdStrike Detection Monitoring ( CS_DETECTS )
CrowdStrike Falcon ( CS_EDR )
CrowdStrike Falcon Stream ( CS_STREAM )
Crowdstrike Identity Protection Services ( CS_IDP )
CrushFTP ( CRUSHFTP )
Custom Application Access Logs ( CUSTOM_APPLICATION_ACCESS )
CyberArk Privileged Access Manager (PAM) ( CYBERARK_PAM )
Cybereason EDR ( CYBEREASON_EDR )
Cyolo Secure Remote Access for OT ( CYOLO_OT )
Datadog ( DATADOG )
Delinea Secret Server ( DELINEA_SECRET_SERVER )
Dell CyberSense ( DELL_CYBERSENSE )
Digicert ( DIGICERT )
Edgio WAF ( EDGIO_WAF )
Elastic Packet Beats ( ELASTIC_PACKETBEATS )
F5 ASM ( F5_ASM )
F5 DNS ( F5_DNS )
Forcepoint DLP ( FORCEPOINT_DLP )
Forcepoint NGFW ( FORCEPOINT_FIREWALL )
Forgerock OpenIdM ( FORGEROCK_OPENIDM )
FortiGate ( FORTINET_FIREWALL )
Fortinet FortiAnalyzer ( FORTINET_FORTIANALYZER )
Fortinet Fortimanager ( FORTINET_FORTIMANAGER )
Fortinet Web Application Firewall ( FORTINET_FORTIWEB )
GitHub ( GITHUB )
Gitlab ( GITLAB )
Harness IO ( HARNESS_IO )
Hashicorp Vault ( HASHICORP )
Hillstone Firewall ( HILLSTONE_NGFW )
Huawei Switches ( HUAWEI_SWITCH )
IBM Guardium ( GUARDIUM )
Imperva Database ( IMPERVA_DB )
Intel Endpoint Management Assistant ( INTEL_EMA )
JAMF Security Cloud ( JAMF_SECURITY_CLOUD )
JFrog Artifactory ( JFROG_ARTIFACTORY )
JumpCloud Directory Insights ( JUMPCLOUD_DIRECTORY_INSIGHTS )
Juniper ( JUNIPER_FIREWALL )
Kaspersky AV ( KASPERSKY_AV )
Kaspersky Endpoint ( KASPERSKY_ENDPOINT )
Kolide Endpoint Security ( KOLIDE )
Kubernetes Audit ( KUBERNETES_AUDIT )
Layer7 SiteMinder ( SITEMINDER_SSO )
Linux Auditing System (AuditD) ( AUDITD )
Looker Audit ( LOOKER_AUDIT )
ManageEngine ADAudit Plus ( ADAUDIT_PLUS )
ManageEngine ADManager Plus ( ADMANAGER_PLUS )
McAfee Web Gateway ( MCAFEE_WEBPROXY )
Metabase ( METABASE )
Microsoft AD FS ( ADFS )
Microsoft Azure Activity ( AZURE_ACTIVITY )
Microsoft Azure NSG Flow ( AZURE_NSG_FLOW )
Microsoft CyberX ( CYBERX )
Microsoft Defender for Endpoint ( MICROSOFT_DEFENDER_ENDPOINT )
Microsoft Defender for Identity ( MICROSOFT_DEFENDER_IDENTITY )
Microsoft Defender for Office 365 ( MICROSOFT_DEFENDER_MAIL )
Microsoft IIS ( IIS )
Microsoft PowerShell ( POWERSHELL )
Microsoft Sentinel ( MICROSOFT_SENTINEL )
Microsoft System Center Endpoint Protection ( MICROSOFT_SCEP )
Mikrotik Router ( MIKROTIK_ROUTER )
Mimecast ( MIMECAST_MAIL )
MISP Threat Intelligence ( MISP_IOC )
NetIQ eDirectory ( NETIQ_EDIRECTORY )
Netskope V2 ( NETSKOPE_ALERT_V2 )
Nozomi Networks Scada Guardian ( NOZOMI_GUARDIAN )
Office 365 ( OFFICE_365 )
Okta ( OKTA )
Okta User Context ( OKTA_USER_CONTEXT )
One Identity Identity Manager ( ONE_IDENTITY_IDENTITY_MANAGER )
Oort Security Tool ( OORT )
Open Cybersecurity Schema Framework (OCSF) ( OCSF )
Open LDAP ( OPENLDAP )
Opnsense ( OPNSENSE )
Ops Genie ( OPS_GENIE )
Oracle ( ORACLE_DB )
Oracle Cloud Guard ( OCI_CLOUDGUARD )
Oracle Cloud Infrastructure Audit Logs ( OCI_AUDIT )
Orca Cloud Security Platform ( ORCA )
Palo Alto Cortex XDR Alerts ( CORTEX_XDR )
Palo Alto Networks Firewall ( PAN_FIREWALL )
Palo Alto Panorama ( PAN_PANORAMA )
Palo Alto Prisma Access ( PAN_CASB )
Palo Alto Prisma Cloud Alert payload ( PAN_PRISMA_CA )
Pharos ( PHAROS )
Privacy-I ( PRIVACY_I )
Proofpoint On Demand ( PROOFPOINT_ON_DEMAND )
Proofpoint Tap Alerts ( PROOFPOINT_MAIL )
Proofpoint Threat Response ( PROOFPOINT_TRAP )
Radware Web Application Firewall ( RADWARE_FIREWALL )
ReviveSec ( REVIVESEC )
Rubrik ( RUBRIK )
Salesforce ( SALESFORCE )
Sangfor Proxy ( SANGFOR_PROXY )
Security Command Center Posture Violation ( GCP_SECURITYCENTER_POSTURE_VIOLATION )
Security Command Center Threat ( N/A )
Security Command Center Toxic Combination ( GCP_SECURITYCENTER_TOXIC_COMBINATION )
ServiceNow CMDB ( SERVICENOW_CMDB )
Snare System Diagnostic Logs ( SNARE_SOLUTIONS )
Snipe-IT ( SNIPE_IT )
Snyk Group level audit/issues logs ( SNYK_ISSUES )
SonicWall ( SONIC_FIREWALL )
Sophos Central ( SOPHOS_CENTRAL )
Swimlane Platform ( SWIMLANE )
Symantec DLP ( SYMANTEC_DLP )
Symantec Event export ( SYMANTEC_EVENT_EXPORT )
Symantec Web Security Service ( SYMANTEC_WSS )
Tanium Question ( TANIUM_QUESTION )
Tanium Threat Response ( TANIUM_THREAT_RESPONSE )
Teleport Access Plane ( TELEPORT_ACCESS_PLANE )
Tenable Active Directory Security ( TENABLE_ADS )
Tenable CSPM ( TENABLE_CSPM )
tenable.io ( TENABLE_IO )
Terraform Enterprise Audit ( TERRAFORM_ENTERPRISE )
Thinkst Canary ( THINKST_CANARY )
ThreatX WAF ( THREATX_WAF )
Trend Micro Email Security Advanced ( TRENDMICRO_EMAIL_SECURITY )
Trend Micro Vision One ( TRENDMICRO_VISION_ONE )
TrendMicro Apex Central ( TRENDMICRO_APEX_CENTRAL )
TXOne Stellar ( TRENDMICRO_STELLAR )
UKG ( UKG )
Unix system ( NIX_SYSTEM )
UPX AntiDDoS ( UPX_ANTIDDOS )
VanDyke SFTP ( VANDYKE_SFTP )
Varonis ( VARONIS )
Vectra Alerts ( VECTRA_ALERTS )
Vectra Stream ( VECTRA_STREAM )
VMware AirWatch ( AIRWATCH )
Vmware Avinetworks iWAF ( VMWARE_AVINETWORKS_IWAF )
VMware ESXi ( VMWARE_ESX )
VMware Horizon ( VMWARE_HORIZON )
Watchguard EDR ( WATCHGUARD_EDR )
Windows Defender AV ( WINDOWS_DEFENDER_AV )
Windows DHCP ( WINDOWS_DHCP )
Windows DNS ( WINDOWS_DNS )
Windows Event ( WINEVTLOG )
Windows Event (XML) ( WINEVTLOG_XML )
Windows Sysmon ( WINDOWS_SYSMON )
Workday Audit Logs ( WORKDAY_AUDIT )
Workday User Activity ( WORKDAY_USER_ACTIVITY )
WPEngine ( WPENGINE )
Zimperium ( ZIMPERIUM )
Zscaler ( ZSCALER_WEBPROXY )
ZScaler DNS ( ZSCALER_DNS )
Zscaler Internet Access Audit Logs ( ZSCALER_INTERNET_ACCESS )
ZScaler NGFW ( ZSCALER_FIREWALL )
The following log types were added without a default parser. Each parser is listed by product name and log_type value, if applicable.
Autodesk Cad Cam ( AUTODESK_CAD_CAM )
Azure Risk Events ( AZURE_RISK_EVENTS )
Azure Risky Users ( AZURE_RISKY_USERS )
Azure Service Principal Logins ( AZURE_SERVICE_PRINCIPAL_LOGINS )
Belden Switch ( BELDEN_SWITCH )
Blue Voyant ( BLUE_VOYANT )
Cisco NetFlow ( CISCO_NETFLOW )
Citrix Receiver ( CSG_CITRIX_RX )
Clavistier Firewall ( CLAVISTER_FIREWALL )
ClickHouse ( CLICKHOUSE )
Cloudflare Pageshield ( CLOUDFLARE_PAGESHIELD )
CrowdStrike DLP ( CROWDSTRIKE_DLP )
Crowdstrike Recon (TI) ( CROWDSTRIKE_RECON )
Cynerio Healthcare NDR ( CYNERIO_NDR_H )
Exterro FTK Central ( EXTERRO_FTK_CENTRAL )
Fortra Vulnerability Management ( FORTRA_VM )
GCP Cloud Asset Inventory ( GCP_CLOUD_ASSET_INVENTORY )
Health ISAC ( H_ISAC )
HP Router ( HP_ROUTER )
Huawei Wireless ( HUAWEI_WIRELESS )
IBM Sense ( IBM_SENSE )
IIJ_LanScope ( IIJ_LANSCOPE )
Joblogic ( JOBLOGIC )
OneIdentity Safeguard ( ONEIDENTITY_SAFEGUARD )
OpenText Cordy ( OPENTEXT_CORDY )
Pave ( PAVE )
Proofpoint Identity Threat Platform ( PROOFPOINT_IDENTITY_THREAT_PLATFORM )
Rapid Identity ( RAPID_IDENTITY )
Raven DB ( RAVEN_DB )
SolidServer ( SOLIDSERVER )
Spacelift ( SPACELIFT )
Trend Micro Vision One Activity ( TRENDMICRO_VISION_ONE_ACTIVITY )
Trend Micro Vision One Container Vulnerabilities ( TRENDMICRO_VISION_ONE_CONTAINER_VULNERABILITIES )
Trend Micro Vision One Detections ( TRENDMICRO_VISION_ONE_DETECTIONS )
Vectra XDR ( VECTRA_XDR )
Vicarious VRX Events ( VICARIUS_VRX_EVENTS )
WireGuard VPN Logs ( WIREGUARD_VPN )
Zero Networks ( ZERO_NETWORKS )
Zoho Assist ( ZOHO_ASSIST )
For a list of supported log types and details about default parser changes, see Supported log types and default parsers .
February 20, 2025
Feature
Data tables
Data tables are multicolumn data constructs that let you input your own data into Google SecOps. They can act as lookup tables with defined columns and the data stored in rows. You can create or import a data table to your Google SecOps account using the Google SecOps UI, the data tables API, or by using a YARA-L query in rules. This feature is in public preview.
Feature
Enhanced Cloud Threat Detections by adding three new rules to the AWS - GuardDuty rule set.
February 16, 2025
Feature
Manage user preferences
The ability to manage platform time zones has been relocated to the new User Preferences dialog, accessible from your avatar. In addition, a new accessibility option in the User Preferences dialog lets you define how long feedback messages remain on the screen.
For more information, refer to Configure user preferences (SIEM only) .
February 12, 2025
Announcement
The following parser documentation is now available:
Collect NGINX logs
Collect Proofpoint On-Demand logs
Collect Qualys asset context logs
Collect Qualys Continuous Monitoring logs
Collect Qualys Scan logs
Collect Qualys Vulnerability Management logs
Collect Qualys Virtual Scanner logs
Collect ThreatConnect IOC logs
Collect Akamai DNS logs
Collect Aruba switch logs
Collect Bitdefender logs
Collect HashiCorp audit logs
Collect Microsoft SQL Server logs
Collect FireEye NX logs
Collect Illumio Core logs
Collect Microsoft Azure Key Vault logging logs
Collect BeyondTrust Remote Support logs
Collect BlueCat DDI logs
Collect BMC Helix Discovery logs
Collect Brocade ServerIron logs
Collect Check Point firewall logs
Collect CyberArk EPM logs
Collect CyberArk PAM logs
Collect Dell ECS logs
Collect Dell switch logs
Collect IBM Security Verify Access logs
Collect McAfee Firewall Enterprise logs
Collect NetApp ONTAP logs
Collect Trend Micro Apex One logs
Collect Trend Micro Deep Security logs
Collect Versa Networks Secure Access Service Edge (SASE) logs
Collect VMware Networking and Security Virtualization (NSX) Manager logs
Collect Zscaler Cloud Access Security Broker (CASB) alert logs
February 11, 2025
Fixed
The following is a correction to the release note published on December 22, 2024 .
Google SecOps has updated the list of supported default parsers. Parsers are updated gradually, so it might take one to four days before you see the changes reflected in your region.
The following supported default parsers have changed. Each parser is listed by product name and log_type value, if applicable. This list now includes both released default parsers and pending parser updates.
Absolute Mobile Device Management ( ABSOLUTE )
Atlassian Cloud Admin Audit ( ATLASSIAN_AUDIT )
AWS VPC Flow ( AWS_VPC_FLOW )
Azure AD ( AZURE_AD )
Azure Application Gateway ( AZURE_GATEWAY )
Azure SQL ( AZURE_SQL )
Azure Storage Audit ( AZURE_STORAGE_AUDIT )
Blue Coat Proxy ( BLUECOAT_WEBPROXY )
Check Point Harmony ( CHECKPOINT_HARMONY )
Cisco ASA ( CISCO_ASA_FIREWALL )
Cisco Firepower NGFW ( CISCO_FIREPOWER_FIREWALL )
Cisco Meraki ( CISCO_MERAKI )
Cisco Router ( CISCO_ROUTER )
Cisco Umbrella SWG DLP ( CISCO_UMBRELLA_SWG_DLP )
Cisco VPN ( CISCO_VPN )
Citrix Netscaler ( CITRIX_NETSCALER )
Claroty Continuous Threat Detection ( CLAROTY_CTD )
Cloud Audit Logs ( N/A )
Cloud DNS ( N/A )
Code42 Incydr ( CODE42_INCYDR )
Colinet Trotta GAUS SEGUROS ( CT_GAUS_SEGUROS )
CrowdStrike Falcon ( CS_EDR )
Delinea Distributed Engine ( DELINEA_DISTRIBUTED_ENGINE )
Druva Backup ( DRUVA_BACKUP )
Duo Administrator Logs ( DUO_ADMIN )
Elastic Audit Beats ( ELASTIC_AUDITBEAT )
F5 BIGIP LTM ( F5_BIGIP_LTM )
Forcepoint NGFW ( FORCEPOINT_FIREWALL )
FortiGate ( FORTINET_FIREWALL )
GitHub ( GITHUB )
Google Cloud Identity Context ( CLOUD_IDENTITY_CONTEXT )
Guardicore Centra ( GUARDICORE_CENTRA )
HPE Aruba Networking Central ( ARUBA_CENTRAL )
Imperva Advanced Bot Protection ( IMPERVA_ABP )
Kubernetes Audit Azure ( KUBERNETES_AUDIT_AZURE )
Linux Auditing System (AuditD) ( AUDITD )
Maria Database ( MARIA_DB )
Microsoft Defender for Endpoint ( MICROSOFT_DEFENDER_ENDPOINT )
Opnsense ( OPNSENSE )
Oracle NetSuite ( ORACLE_NETSUITE )
Palo Alto Panorama ( PAN_PANORAMA )
Palo Alto Prisma Cloud Alert payload ( PAN_PRISMA_CA )
Ping One ( PING_ONE )
Proofpoint Observeit ( OBSERVEIT )
Proofpoint Threat Response ( PROOFPOINT_TRAP )
QNAP Systems NAS ( QNAP_NAS )
Reserved LogType2 ( RESERVED_LOG_TYPE_2 )
Salesforce ( SALESFORCE )
SAP Sybase Adaptive Server Enterprise Database ( SAP_ASE )
Sentinelone Alerts ( SENTINELONE_ALERT )
Snort ( SNORT_IDS )
Solaris system ( SOLARIS_SYSTEM )
Sourcefire ( SOURCEFIRE_IDS )
Suricata IDS ( SURICATA_IDS )
Symantec DLP ( SYMANTEC_DLP )
Symantec Event export ( SYMANTEC_EVENT_EXPORT )
Trend Micro Vision One ( TRENDMICRO_VISION_ONE )
TrendMicro Apex Central ( TRENDMICRO_APEX_CENTRAL )
Twingate ( TWINGATE )
Wazuh ( WAZUH )
Windows DHCP ( WINDOWS_DHCP )
Windows Event ( WINEVTLOG )
Windows Network Policy Server ( WINDOWS_NET_POLICY_SERVER )
Windows Sysmon ( WINDOWS_SYSMON )
The following log types were added without a default parser. Each parser is listed by product name and log_type value, if applicable.
Addigy MDM ( ADDIGY_MDM )
Akamai DataStream 2 ( AKAMAI_DATASTREAM_2 )
Anzenna ( ANZENNA )
AWS ECS Metrics ( AWS_ECS_METRICS )
Azure Log Analytics Workspace ( AZURE_LOG_ANALYTICS_WORKSPACE )
Blockdaemon API ( BLOCKDAEMON_API )
Chronicle Feed ( CHRONICLE_FEED )
Claroty xDome Secure Access ( CLAROTY_XDOME_SECURE_ACCESS )
Cloudflare Spectrum ( CLOUDFLARE_SPECTRUM )
Cloudsek Alerts ( CLOUDSEK_ALERTS )
CloudWaves Sensato Nightingale Honeypot ( SENSATO_HONEYPOT )
Docker Hub Activity ( DOCKER_HUB_ACTIVITY )
Fortinet FortiDDoS ( FORTINET_FORTIDDOS )
Honeywell Cyber Insights ( HONEYWELL_CYBERINSIGHTS )
IPFire ( IPFIRE )
Jamf Connect ( JAMF_CONNECT )
KnowBe4 Audit Log ( KNOWBE4 )
LogicGate ( LOGICGATE )
ManageEngine NCM ( MANAGEENGINE_NCM )
Microsoft Dotnet Log Files ( MICROSOFT_DOTNET )
Nessus Network Monitor ( NESSUS_NETWORK_MONITOR )
Netography Fusion ( NETOGRAPHY_FUSION )
Netwrix StealthAudit ( NETWRIX_STEALTHAUDIT )
Oomnitza ( OOMNITZA )
Open CTI Platform ( OPENCTI )
Oracle EBS ( ORACLE_EBS )
Oracle Zero Data Loss Recovery Appliance ( ORACLE_ZDLRA )
PhishAlarm ( PHISHALARM )
Savvy Security ( SAVVY_SECURITY )
Symantec Security Analytics ( SYMANTEC_SA )
Venafi ZTPKI ( VENAFI_ZTPKI )
For a list of supported log types and details about default parser changes, see Supported log types and default parsers .
February 06, 2025
Change
The collector ID representing Google Cloud direct ingestion in the Cloud Monitoring metrics and BigQuery has changed from dddddddd-dddd-dddd-dddd-dddddddddddd to aaaa3333-aaaa-3333-aaaa-3333aaaa3333 .
For a complete list of updated collector IDs used for ingestion metrics, see Use Cloud Monitoring for ingestion notifications .
February 05, 2025
Change
Google SecOps has updated the list of supported default parsers. Parsers are updated gradually, so it might take one to four days before you see the changes reflected in your region.
The following supported default parsers have changed. Each parser is listed by product name and log_type value, if applicable. This list now includes both released default parsers and pending parser updates.
A10 Load Balancer ( A10_LOAD_BALANCER )
Akamai Enterprise Application Access ( AKAMAI_EAA )
Akamai WAF ( AKAMAI_WAF )
Apache ( APACHE )
Apache Tomcat ( TOMCAT )
AppOmni ( APPOMNI )
Arcsight CEF ( ARCSIGHT_CEF )
Aruba ( ARUBA_WIRELESS )
Aruba Airwave ( ARUBA_AIRWAVE )
Atlassian Cloud Admin Audit ( ATLASSIAN_AUDIT )
Attivo Networks ( ATTIVO )
Auth0 ( AUTH_ZERO )
Avigilon Access Logs ( AVIGILON_ACCESS_LOGS )
AWS Cloudtrail ( AWS_CLOUDTRAIL )
AWS GuardDuty ( GUARDDUTY )
AWS RDS ( AWS_RDS )
AWS Security Hub ( AWS_SECURITY_HUB )
AWS VPC Flow ( AWS_VPC_FLOW )
Azure AD ( AZURE_AD )
Azure Application Gateway ( AZURE_GATEWAY )
Azure Cosmos DB ( AZURE_COSMOS_DB )
Azure Firewall ( AZURE_FIREWALL )
Azure Front Door ( AZURE_FRONT_DOOR )
Bindplane Agent ( BINDPLANE_AGENT )
BloxOne Threat Defense ( BLOXONE )
Blue Coat Proxy ( BLUECOAT_WEBPROXY )
Cato Networks ( CATO_NETWORKS )
Check Point ( CHECKPOINT_FIREWALL )
Check Point Harmony ( CHECKPOINT_HARMONY )
CircleCI ( CIRCLECI )
Cisco AMP ( CISCO_AMP )
Cisco Application Centric Infrastructure ( CISCO_ACI )
Cisco ASA ( CISCO_ASA_FIREWALL )
Cisco Email Security ( CISCO_EMAIL_SECURITY )
Cisco Firepower NGFW ( CISCO_FIREPOWER_FIREWALL )
Cisco Internetwork Operating System ( CISCO_IOS )
Cisco ISE ( CISCO_ISE )
Cisco NX-OS ( CISCO_NX_OS )
Cisco Umbrella DNS ( UMBRELLA_DNS )
Cisco Umbrella Web Proxy ( UMBRELLA_WEBPROXY )
Cisco vManage SD-WAN ( CISCO_SDWAN )
Cisco VPN ( CISCO_VPN )
Citrix Netscaler ( CITRIX_NETSCALER )
Cloudflare ( CLOUDFLARE )
Cloudflare Warp ( CLOUDFLARE_WARP )
CrowdStrike Detection Monitoring ( CS_DETECTS )
CrowdStrike Falcon ( CS_EDR )
CrowdStrike Falcon Stream ( CS_STREAM )
Crowdstrike Identity Protection Services ( CS_IDP )
Dell CyberSense ( DELL_CYBERSENSE )
Duo Administrator Logs ( DUO_ADMIN )
Elastic Packet Beats ( ELASTIC_PACKETBEATS )
Elastic Windows Event Log Beats ( ELASTIC_WINLOGBEAT )
ExtraHop RevealX ( EXTRAHOP )
F5 ASM ( F5_ASM )
F5 BIGIP LTM ( F5_BIGIP_LTM )
F5 Distributed Cloud Services ( F5_DCS )
Fastly CDN ( FASTLY_CDN )
Forcepoint DLP ( FORCEPOINT_DLP )
Forcepoint Proxy ( FORCEPOINT_WEBPROXY )
FortiGate ( FORTINET_FIREWALL )
Fortinet FortiAnalyzer ( FORTINET_FORTIANALYZER )
Fortinet FortiClient ( FORTINET_FORTICLIENT )
Fortinet FortiDDoS ( FORTINET_FORTIDDOS )
Fortinet FortiEDR ( FORTINET_FORTIEDR )
Fortinet Proxy ( FORTINET_WEBPROXY )
GitHub ( GITHUB )
Gitlab ( GITLAB )
HP Linux ( HP_LINUX )
IBM Guardium ( GUARDIUM )
Imperva ( IMPERVA_WAF )
Juniper MX Router ( JUNIPER_MX )
Kemp Load Balancer ( KEMP_LOADBALANCER )
Linkshadow NDR ( LINKSHADOW_NDR )
Linux Auditing System (AuditD) ( AUDITD )
McAfee Web Gateway ( MCAFEE_WEBPROXY )
McAfee Web Protection ( MCAFEE_WEB_PROTECTION )
Micro Focus iManager ( MICROFOCUS_IMANAGER )
Microsoft Azure NSG Flow ( AZURE_NSG_FLOW )
Microsoft Azure Resource ( AZURE_RESOURCE_LOGS )
Microsoft CyberX ( CYBERX )
Microsoft Defender for Endpoint ( MICROSOFT_DEFENDER_ENDPOINT )
Microsoft Dynamics 365 User Activity ( MICROSOFT_DYNAMICS_365 )
Microsoft Graph API Alerts ( MICROSOFT_GRAPH_ALERT )
Microsoft Netlogon ( MICROSOFT_NETLOGON )
Microsoft PowerShell ( POWERSHELL )
Microsoft System Center Endpoint Protection ( MICROSOFT_SCEP )
Mikrotik Router ( MIKROTIK_ROUTER )
Mimecast URL Logs ( MIMECAST_URL_LOGS )
Office 365 ( OFFICE_365 )
Okta ( OKTA )
Okta User Context ( OKTA_USER_CONTEXT )
Open LDAP ( OPENLDAP )
Open Policy Agent ( OPA )
Oracle ( ORACLE_DB )
Oracle Cloud Guard ( OCI_CLOUDGUARD )
Orca Cloud Security Platform ( ORCA )
Palo Alto Cortex XDR Alerts ( CORTEX_XDR )
Palo Alto Networks Firewall ( PAN_FIREWALL )
Palo Alto Networks IoT Security ( PAN_IOT )
Palo Alto Prisma Cloud Alert payload ( PAN_PRISMA_CA )
ProFTPD ( PROFTPD )
Proofpoint Observeit ( OBSERVEIT )
Proofpoint On Demand ( PROOFPOINT_ON_DEMAND )
ProofPoint Secure Email Relay ( PROOFPOINT_SER )
Proofpoint Tap Alerts ( PROOFPOINT_MAIL )
Proofpoint Threat Response ( PROOFPOINT_TRAP )
RSA SecurID Access Identity Router ( RSA_SECURID )
Rubrik ( RUBRIK )
Salesforce ( SALESFORCE )
Security Command Center Threat ( N/A )
Sentry ( SENTRY )
ServiceNow Audit ( SERVICENOW_AUDIT )
ServiceNow CMDB ( SERVICENOW_CMDB )
Smartsheet ( SMARTSHEET )
Snare System Diagnostic Logs ( SNARE_SOLUTIONS )
Snowflake ( SNOWFLAKE )
Solaris system ( SOLARIS_SYSTEM )
SonicWall ( SONIC_FIREWALL )
Sophos Central ( SOPHOS_CENTRAL )
Sophos UTM ( SOPHOS_UTM )
Sourcefire ( SOURCEFIRE_IDS )
Suricata EVE ( SURICATA_EVE )
Symantec DLP ( SYMANTEC_DLP )
Symantec Endpoint Protection ( SEP )
Symantec Event export ( SYMANTEC_EVENT_EXPORT )
Symantec Web Security Service ( SYMANTEC_WSS )
Sysdig ( SYSDIG )
Tableau ( TABLEAU )
Tanium Asset ( TANIUM_ASSET )
Tanium Threat Response ( TANIUM_THREAT_RESPONSE )
tenable.io ( TENABLE_IO )
Trend Micro ( TIPPING_POINT )
Trend Micro Deep Security ( TRENDMICRO_DEEP_SECURITY )
Trend Micro Vision One ( TRENDMICRO_VISION_ONE )
TrendMicro Deep Discovery Inspector ( TRENDMICRO_DDI )
UberAgent ( UBERAGENT )
Unix system ( NIX_SYSTEM )
Vectra Detect ( VECTRA_DETECT )
Vectra Stream ( VECTRA_STREAM )
Venafi ZTPKI ( VENAFI_ZTPKI )
Vercel WAF ( VERCEL_WAF )
Virtru Email Encryption ( VIRTRU_EMAIL_ENCRYPTION )
WatchGuard ( WATCHGUARD )
Wazuh ( WAZUH )
Windows DNS ( WINDOWS_DNS )
Windows Event ( WINEVTLOG )
Windows Event (XML) ( WINEVTLOG_XML )
Windows Network Policy Server ( WINDOWS_NET_POLICY_SERVER )
Zendesk CRM ( ZENDESK_CRM )
ZeroFox Platform ( ZEROFOX_PLATFORM )
Zimperium ( ZIMPERIUM )
Zoom Operation Logs ( ZOOM_OPERATION_LOGS )
Zscaler ( ZSCALER_WEBPROXY )
Zscaler Internet Access Audit Logs ( ZSCALER_INTERNET_ACCESS )
Zscaler Secure Private Access Audit Logs ( ZSCALER_ZPA_AUDIT )
The following log types were added without a default parser. Each parser is listed by product name and log_type value, if applicable.
Arcon PAM ( ARCON_PAM )
Azure VNET Flow ( AZURE_VNET_FLOW )
Cameyo Activity Logs ( CAMEYO_ACTIVITY_LOGS )
ChromeOS XDR ( CHROMEOS_XDR )
Cisco Vulnerability Management ( CISCO_VULNERABILITY_MANAGEMENT )
Cloudflare Network Analytics ( CLOUDFLARE_NETWORK_ANALYTICS )
Draytek Router ( DRAYTEK_ROUTER )
FA Solutions ( FA_SOLUTIONS )
Files dot com ( FILES_DOT_COM )
Fortinet ADC ( FORTINET_ADC )
FoxPass Audit Logs ( FOXPASS_AUDIT_LOGS )
Front ( FRONT )
Ghangor DLP ( GHANGOR_DLP )
Hillstone Firewall ( HILLSTONE_NGFW )
Hoxhunt ( HOXHUNT )
Huawei NextGen Firewall ( HUAWEI_FIREWALL )
Huawei Fusion Sphere Hypervisor ( HUAWEI_FUSIONSPHERE )
IBM Security Verify Access ( IBM_SVA )
Indusface WAF ( INDUSFACE_WAF )
Informatica ( INFORMATICA )
Informatica Powercenter ( INFORMATICA_POWERCENTER )
Intel Endpoint Management Assistant ( INTEL_EMA )
Jamf Protect Telemetry V2 ( JAMF_TELEMETRY_V2 )
JiranSecurity MailScreen ( JIRANSECURITY_MAILSCREEN )
Juniper SSR Conductor ( JUNIPER_SSR_CONDUCTOR )
Metabase ( METABASE )
Netlify Log Drains ( NETLIFY_LOGDRAINS )
Pingcap TIDB ( PINGCAP_TIDB )
PingOne Advanced Identity Cloud ( PINGONE_AIC )
PingOne Protect ( PINGONE_PROTECT )
Privacy-I ( PRIVACY_I )
ReviveSec ( REVIVESEC )
Sangfor Proxy ( SANGFOR_PROXY )
SoftEther VPN ( SOFTETHER_VPN )
Tehtris EDR ( TEHTRIS_EDR )
TrendMicro Cloud Email Gateway Protection ( TRENDMICRO_CLOUD_EMAIL_GATEWAY_PROTECTION )
VMware VeloCloud SD-WAN ( VELOCLOUD_SDWAN )
Wing Security ( WING_SECURITY )
For a list of supported log types and details about default parser changes, see Supported log types and default parsers .
January 28, 2025
Feature
Environment groups
This feature lets you group environments into logical categories, making it easier to manage your company or your customers as an MSSP.
You can use environment groups for adding users, mapping IdP user groups, creating new playbooks, and applying case filters on the platform.
For more information about how to create groups of environments, see Create environment groups .
Change
Adding individual emails to IdP group mapping page
Customers who use Cloud Identity Provider can map individual user emails on the IdP group mapping page.
Announcement
Added instructions on how to add SIEM-only or SOAR-only users to Google SecOps
For details about how to grant permission to specific users to use only the SIEM features in Google SecOps or only the SOAR features of Google SecOps, see Add SIEM or SOAR users .
January 26, 2025
Deprecated
Security Enhancement
As of February 10, 2025, concurrent logins to Google SecOps with multiple user accounts using the same browser profile will no longer be supported. Use separate browser profiles or an incognito/private window for each account.
January 21, 2025
Change
The following rules have been moved from "Precise" to "Broad" in their associated rule packs due to high alert volume across the Google SecOps customer base.
GCP Workspace Data Exfil Drive:
Suspicious Workspace Actions Observed after a Successful Suspicious Login
GCP Suspicious Infrastructure Change:
Replacement of Existing Compute Machine Image
Replacement of Existing Compute Disk
GCP Cloud SQL Ransom:
Base64 Encoded Cloud SQL Command
CIDR SCC Persistence:
SCC: Persistence: New API Method
SCC: Persistence: IAM Anomalous Grant
SCC: Persistence: GCE Admin Added SSH Key
CIDR SCC Malware:
SCC: Added Library Loaded
SCC: Added Binary Executed
CIDR SCC Cloud IDS Low:
SCC: Cloud IDS: Low Threat Finding
CIDR SCC Cloud Armor Medium:
SCC: Cloud Armor: Medium - Increasing Deny Ratio
SCC: Cloud Armor: Medium - Allowed Traffic Spike
Azure Identity:
Azure External User Invitation
Azure Defender for Cloud Windows and Linux VM:
Azure Defender for Cloud: Anonymous IP access
AWS GuardDuty Discovery:
AWS GuardDuty: Recon:EC2/PortProbeUnprotectedPort
January 19, 2025
Change
The individual parser documents have been put into one page with an easy-to-use search bar. This reorganization helps you find all the information you need in one place.
January 14, 2025
Change
The following rules have been removed from their associated rule packs in Curated Detections due to high alert volume across the Google SecOps customer base:
Cloud Threats - CDIR SCC Enhanced Defense Evasion Alerts:
SCC: Modify VPC Service Control with GCE Activity from the Restricted Resource
SCC: Modify VPC Service Control with Activity from the Restricted Service
Linux Threats - OS Privilege Escalation Tools:
Sensitive File Discovery
Last Login Users
Whoami Commands
Windows Threats - Initial Access:
NetLogon AD System Event
Risk Analytics for UEBA - Login to an Application Never Before Seen for a User Group:
First Time User Login Activity to Application for Manager Peer Group
Risk Analytics for UEBA - Login from Country Never Before Seen for a User Group:
First Time User Login Activity from Country for Manager Peer Group
The rule "SCC: Unexpected Child Shell" has been moved from the rule pack "Cloud Threats - CDIR SCC Enhanced Malware Alerts" to "Cloud Threats - CDIR SCC Enhanced Execution Alerts"
January 07, 2025
Announcement
The following parser documentation is now available:
Collect Microsoft Defender for Endpoint logs
Zscaler parsers overview
Collect Zscaler DNS logs
Collect Zscaler Firewall logs
Collect Zscaler Internet Access logs
Collect Zscaler Webproxy logs
Collect Linux auditd and AIX systems logs
Collect CircleCI audit logs
Collect CloudPassage Halo logs
Collect JFrog Artifactory logs
Collect Apple macOS syslog data
Collect Netskope web proxy logs
Collect Onfido logs
Collect OPNsense firewall logs
Collect Rapid7 InsightIDR logs
Collect Sysdig logs
Collect Thinkst Canary logs
Collect VMware Workspace ONE UEM logs
Collect Workday HCM logs
December 27, 2024
Change
Google SecOps has added a new rule set to Applied Threat Intelligence (ATI), called Inbound IP Address Authentication, that identifies IP addresses that are authenticating to local infrastructure in an inbound network direction. For more information, see Applied Threat Intelligence priority overview .
December 23, 2024
Announcement
The following parser documentation is now available:
Collect CrowdStrike Detection logs
Collect Microsoft Azure AD Audit logs
Collect Microsoft Azure AD Context logs
Ingest Chrome Enterprise Premium data to Google Security Operations
Collect Ansible AWX logs
Collect Atlassian Bitbucket logs
Collect Atlassian Jira logs
Collect Auth0 logs
Collect Azion firewall logs
Collect Azure DevOps audit logs
Collect GitHub audit logs
Collect GitLab logs
Collect Microsoft Defender for Cloud alert logs
Collect Microsoft Graph activity logs
Collect Microsoft Sentinel logs
Collect Twingate VPN logs
Collect Wordpress CMS logs
Collect CrowdStrike IOC logs
Collect Jenkins logs
Collect Wazuh logs
Collect OpenCanary logs
Collect Synology logs
Collect Palo Alto Networks IOC logs
Collect Fastly WAF logs
Collect MISP IOC logs
Collect ntopng logs
Collect Cloudflare logs
Collect Palo Alto Prisma Cloud alert logs
Collect ServiceNow Security logs
Collect Akamai WAF logs
Collect Aqua Security logs
Collect Cohesity logs
Collect Datadog logs
Collect Lacework Cloud Security logs
Collect Netskope alert logs v1
Collect Netskope alert logs v2
Collect Nutanix Prism logs
Collect Salesforce logs
Collect Trend Micro Cloud One logs
Collect VMware ESXi logs
Collect WatchGuard Fireware logs
December 22, 2024
Change
This release note has been updated. Refer to the entry for February 11, 2025 for the latest information.
Google SecOps has updated the list of supported default parsers. Parsers are updated gradually, so it might take one to four days before you see the changes reflected in your region.
The following supported default parsers have changed. Each parser is listed by product name and log_type value, if applicable. This list now includes both released default parsers and pending parser updates.
Absolute Mobile Device Management ( Mobile Device Management )
Atlassian Cloud Admin Audit ( Audit )
AWS VPC Flow ( AWS Specific )
Azure AD ( LDAP )
Azure Application Gateway ( GATEWAY )
Azure SQL ( Database )
Azure Storage Audit ( Storage )
Blue Coat Proxy ( Web Proxy )
Check Point Harmony ( Remote Access Tools )
Cisco ASA ( firewall )
Cisco Firepower NGFW ( Firewall )
Cisco Meraki ( Wireless )
Cisco Router ( Switches, Routers )
Cisco Umbrella SWG DLP ( DLP )
Cisco VPN ( VPN )
Citrix Netscaler ( Load Balancer, Traffic Shaper, ADC )
Claroty Continuous Threat Detection ( IoT )
Cloud Audit Logs ( Google Cloud Specific )
Cloud DNS ( Google Cloud Specific )
Code42 Incydr ( Data loss prevention (DLP) )
Colinet Trotta GAUS SEGUROS ( Alert )
CrowdStrike Falcon ( EDR )
Delinea Distributed Engine ( Application server logs )
Druva Backup ( Security )
Duo Administrator Logs ( Authentication )
Elastic Audit Beats ( ALERTING )
F5 BIGIP LTM ( Load Balancer, Traffic Shaper, ADC )
Forcepoint NGFW ( Network )
FortiGate ( Firewall )
GitHub ( SaaS Application )
Google Cloud Identity Context ( Identity and Access Management )
Guardicore Centra ( Deception Software )
HPE Aruba Networking Central ( Data Security )
Imperva Advanced Bot Protection ( Bot Protection )
Kubernetes Audit Azure ( Log Aggregator )
Linux Auditing System (AuditD) ( OS )
Maria Database ( Database )
Microsoft Defender for Endpoint ( EDR )
Opnsense ( Firewall and Routing Platform )
Oracle NetSuite ( CASB )
Palo Alto Panorama ( Firewall )
Palo Alto Prisma Cloud Alert payload ( Cloud Security )
Ping One ( NA )
Proofpoint Observeit ( Email Server )
Proofpoint Threat Response ( Email Server )
QNAP Systems NAS ( Storage solutions )
Reserved LogType2 ( LDAP )
Salesforce ( SaaS Application )
SAP Sybase Adaptive Server Enterprise Database ( Database )
Sentinelone Alerts ( Endpoint Security )
Snort ( IDS/IPS )
Solaris system ( OS )
Sourcefire ( IDS/IPS )
Suricata IDS ( IDS/IPS )
Symantec DLP ( DLP )
Symantec Event export ( SEP )
Trend Micro Vision One ( AV and endpoint logs )
TrendMicro Apex Central ( Endpoint )
Twingate ( VPN )
Wazuh ( Log Aggregator )
Windows DHCP ( DHCP )
Windows Event ( Endpoint )
Windows Network Policy Server ( Authentication )
Windows Sysmon ( DNS )
The following log types were added without a default parser. Each parser is listed by product name and log_type value, if applicable.
Addigy MDM ( ADDIGY_MDM )
Akamai DataStream 2 ( AKAMAI_DATASTREAM_2 )
Anzenna ( ANZENNA )
AWS ECS Metrics ( AWS_ECS_METRICS )
Azure Log Analytics Workspace ( AZURE_LOG_ANALYTICS_WORKSPACE )
Blockdaemon API ( BLOCKDAEMON_API )
Chronicle Feed ( CHRONICLE_FEED )
Claroty xDome Secure Access ( CLAROTY_XDOME_SECURE_ACCESS )
Cloudflare Spectrum ( CLOUDFLARE_SPECTRUM )
Cloudsek Alerts ( CLOUDSEK_ALERTS )
CloudWaves Sensato Nightingale Honeypot ( SENSATO_HONEYPOT )
Docker Hub Activity ( DOCKER_HUB_ACTIVITY )
Fortinet FortiDDoS ( FORTINET_FORTIDDOS )
Honeywell Cyber Insights ( HONEYWELL_CYBERINSIGHTS )
IPFire ( IPFIRE )
Jamf Connect ( JAMF_CONNECT )
KnowBe4 Audit Log ( KNOWBE4 )
LogicGate ( LOGICGATE )
ManageEngine NCM ( MANAGEENGINE_NCM )
Microsoft Dotnet Log Files ( MICROSOFT_DOTNET )
Nessus Network Monitor ( NESSUS_NETWORK_MONITOR )
Netography Fusion ( NETOGRAPHY_FUSION )
Netwrix StealthAudit ( NETWRIX_STEALTHAUDIT )
Oomnitza ( OOMNITZA )
Open CTI Platform ( OPENCTI )
Oracle EBS ( ORACLE_EBS )
Oracle Zero Data Loss Recovery Appliance ( ORACLE_ZDLRA )
PhishAlarm ( PHISHALARM )
Savvy Security ( SAVVY_SECURITY )
Symantec Security Analytics ( SYMANTEC_SA )
Venafi ZTPKI ( VENAFI_ZTPKI )
For a list of supported log types and details about default parser changes, see Supported log types and default parsers .
December 17, 2024
Change
Looker dashboard updates
The following changes have been made to the Looker dashboards in Google SecOps:
All dashboards have been moved to the ingestion_metrics_connector explore.
The ingestion_stats , ingestion_metric_with_ingestion_stats and ingestion_metrics explores are no longer supported.
The total_entry_number and total_size_bytes fields are defined in the new explore and used to query the log count and log volume for the Google SecOps Ingestion API. For more information, see the Ingestion metrics field reference for dashboards .
The default dashboards for Context aware detections risk and Cloud detection and response overview have been updated to use a different field for the risk score. It was rule_detections.outcomes['risk_score'] and is now rule_detections.risk_score . This change aligns the risk score in the Google SecOps dashboards to the risk score used in the Google SecOps user interface.
The severity field in the Rules and detections default Dashboard has been updated so that it would show the severity for both Curated Detections and custom rules.
December 09, 2024
Change
Google SecOps has updated the list of supported default parsers. Parsers are updated gradually, so it might take one to four days before you see the changes reflected in your region.
The following supported default parsers have changed. Each parser is listed by product name and log_type value, if applicable. This list now includes both released default parsers and pending parser updates.
1Password Audit Events ( Identity and Access Management )
Advanced Intrusion Detection Environment ( Alert )
Airlock Digital Application Allowlisting ( Application Whitelisting )
Akamai DNS ( DNS )
Amazon VPC Transit Gateway Flow Logs ( Network )
Apache Tomcat ( Web server )
Appian Cloud ( Collaboration log types )
AppOmni ( SAAS Security Application )
Aruba Switch ( Network Infrastructure )
Auth0 ( Authentication log )
AWS Cloudtrail ( Cloud Log Aggregator )
AWS CloudWatch ( Cloud service monitoring )
AWS Elastic Load Balancer ( AWS Specific )
AWS GuardDuty ( IDS/IPS )
AWS Network Firewall ( Firewall )
AWS RDS ( Database )
AWS Route 53 DNS ( AWS Specific )
AWS S3 Server Access ( AWS Specific )
AWS VPC Flow ( AWS Specific )
Azure AD Directory Audit ( Audit )
Azure AD Organizational Context ( LDAP )
Azure API Management ( Schema )
Azure App Service ( SAAS )
Azure Application Gateway ( GATEWAY )
Azure Firewall ( Azure Firewall Application Rule )
Azure Key Vault logging ( Audit )
Azure SQL ( Database )
Barracuda WAF ( Firewall )
Barracuda Web Filter ( Webfilter )
BeyondTrust BeyondInsight ( Privileged Account Activity )
BeyondTrust Endpoint Privilege Management ( Privileged Account Activity )
BIND ( DNS )
BloxOne Threat Defense ( DNS )
Blue Coat Proxy ( Web Proxy )
Cato Networks ( NDR )
Check Point ( Firewall )
Ciena Router logs ( Application server logs )
Cisco ACS ( Authentication )
Cisco APIC ( Software-defined Networking (SDN) )
Cisco Call Manager ( NETWORKING )
Cisco DNA Center Platform ( Network Management and Optimization )
Cisco Email Security ( Email Server )
Cisco EStreamer ( Network Monitoring )
Cisco Firepower NGFW ( Firewall )
Cisco FireSIGHT Management Center ( SaaS Application )
Cisco Internetwork Operating System ( Network Infrastructure )
Cisco ISE ( Identity and Access Management )
Cisco Router ( Switches, Routers )
Cisco Secure Workload ( AV and Endpoint )
Cisco Stealthwatch ( Log Aggregator )
Cisco Switch ( Switches, Routers )
Cisco TACACS+ ( Authentication )
Cisco VPN ( VPN )
Citrix Netscaler ( Load Balancer, Traffic Shaper, ADC )
Claroty Continuous Threat Detection ( IoT )
Cloudflare ( SaaS Application )
Colinet Trotta GAUS SEGUROS ( Alert )
CrowdStrike Detection Monitoring ( EDR )
CrowdStrike Falcon ( EDR )
CrowdStrike Falcon Stream ( Alerts )
CrowdStrike Filevantage ( IT infrastructure )
Cyber 2.0 IDS ( IDS )
Cyberark Privilege Cloud ( Identity & Access Management )
CyberArk Privileged Access Manager (PAM) ( CyberArk Privileged Access Manager )
Cybereason EDR ( EDR )
Darktrace ( NDR )
Dell CyberSense ( Data Security )
Dell EMC PowerStore ( DATA STORAGE )
Druva Backup ( Security )
Duo Administrator Logs ( Authentication )
Duo Auth ( Authentication )
EfficientIP DDI ( Network )
ExtraHop RevealX ( Firewall IDS/IPS )
F5 Advanced Firewall Management ( Firewall )
F5 ASM ( WAF )
F5 BIGIP LTM ( Load Balancer, Traffic Shaper, ADC )
F5 VPN ( VPN )
FingerprintJS ( Vulnerability scanners )
FireEye eMPS ( Email server log types. )
FireEye HX ( EDR )
Forcepoint DLP ( Forcepoint DLP )
Forcepoint NGFW ( Network )
Forcepoint Proxy ( Web Proxy )
Forescout NAC ( NAC )
ForgeRock OpenAM ( Identity and Access Management )
Forgerock OpenIdM ( DATA SECURITY )
FortiGate ( Firewall )
Fortinet FortiAnalyzer ( Fortinet FortiAnalyzer )
Fortinet Switch ( Switches and Routers )
GitHub ( SaaS Application )
Guardicore Centra ( Deception Software )
Hashicorp Vault ( Privileged Account Activity )
HCNET Account Adapter Plus ( DHCP )
IBM MaaS360 ( Security )
IBM Security Access Manager ( WAF )
IBM z/OS ( OS )
Illumio Core ( Policy Management )
Imperva ( WAF )
Imperva Advanced Bot Protection ( Bot Protection )
Imperva Attack Analytics ( WAF )
Ingrian Networks DataSecure Appliance ( System and Audit Logs )
Intel 471 Malware Intelligence (``)
ISC DHCP ( DHCP )
Jenkins ( Automation and DevOps )
Journald ( Log Aggregation and SIEM Systems )
Juniper ( Firewall )
Juniper Mist ( Network Management and Optimization software )
Juniper MX Router ( Routers and Switches )
Keeper Enterprise Security ( Security )
Kubernetes Audit Azure ( Log Aggregator )
Lacework Cloud Security ( Cloud Security )
Lenel Onguard Badge Management ( Access Control System )
Linux Auditing System (AuditD) ( OS )
Linux Sysmon ( DNS )
ManageEngine Log360 ( Alert Log )
Maria Database ( Database )
McAfee ePolicy Orchestrator ( Policy Management )
McAfee Web Gateway ( Web Proxy )
Microsoft AD ( LDAP )
Microsoft AD FS ( LDAP )
Microsoft Azure Activity ( Misc Windows Specific )
Microsoft Azure NSG Flow ( Network Flow )
Microsoft Azure Resource ( Log Aggregator )
Microsoft Defender Endpoint for iOS Logs (``)
Microsoft Defender for Endpoint ( EDR )
Microsoft PowerShell ( Misc. Windows-specific )
Microsoft SQL Server ( Database )
Microsoft System Center Endpoint Protection ( Malware Detection )
Mikrotik Router ( Router )
Mimecast ( Email Server )
MISP Threat Intelligence ( Cybersecurity )
Mobile Endpoint Security ( Mobile Endpoint Security )
Mobileiron ( ENDPOINT MANAGEMENT )
NetApp BlueXP ( Security )
Nozomi Networks Scada Guardian ( Network Monitoring )
Office 365 ( SaaS Application )
Okta ( Identity and Access Management )
OpenVPN ( Network )
Opnsense ( Firewall and Routing Platform )
Opswat Metadefender ( Threat Protection )
Oracle ( DATABASE )
Oracle Cloud Infrastructure Audit Logs ( Oracle Cloud Infrastructure )
Oracle Fusion ( SaaS Application )
Oracle WebLogic Server ( Web server logs )
Palo Alto Cortex XDR Alerts ( NDR )
Palo Alto Prisma Cloud ( SECURITY PLATFORM )
Palo Alto Prisma Cloud Alert payload ( Cloud Security )
Ping Federate ( Authentication )
Ping Identity ( Authentication )
Ping One ( NA )
PingIdentity Directory Server Logs ( Security )
Precisely Ironstream IBM z/OS ( ZOS )
ProFTPD ( Web Server )
Proofpoint Observeit ( Email Server )
Proofpoint On Demand ( Email Server )
ProofPoint Secure Email Relay ( Email server )
Proofpoint Tap Forensics ( Email Server )
Quest Active Directory ( Authentication log )
Red Hat Directory Server LDAP ( Identity and Access Management )
Remediant SecureONE ( Privileged Account Activity )
Salesforce ( SaaS Application )
SAP Sybase Adaptive Server Enterprise Database ( Database )
Security Command Center Posture Violation ( Google Cloud Specific )
Security Command Center Threat ( Google Cloud Specific )
Security Command Center Toxic Combination ( Google Cloud Specific )
Sentinelone Alerts ( Endpoint Security )
Shibboleth IDP ( Identity and Access Management )
Snare System Diagnostic Logs ( Security )
Snipe-IT ( SaaS Applications )
Snort ( IDS/IPS )
SonicWall ( Firewall )
Squid Web Proxy ( Web Proxy )
STIX Threat Intelligence ( Cybersecurity Threats )
Suricata EVE ( IPS IDS )
Symantec CloudSOC CASB ( CASB )
Symantec DLP ( DLP )
Symantec Endpoint Protection ( AV / Endpoint )
Symantec Event export ( SEP )
Symantec Web Security Service ( Web Proxy )
Sysdig ( Security )
Tailscale ( CASB )
Tanium Threat Response ( Tanium Specific )
TeamViewer ( Remote Support )
Tenable CSPM ( Cloud Security )
Tenable Security Center ( Vulnerability Scanner )
Thales Luna Hardware Security Module ( THALES_LUNA_HSM specific )
Trellix HX Event Streamer ( Cybersecurity )
Trend Micro Deep Security ( AV / Endpoint )
Trend Micro Vision One ( AV and endpoint logs )
Trend Micro Vision One Workbench ( Schema )
TrendMicro Deep Discovery Inspector ( Physical and virtual network )
Tripwire ( DLP )
TXOne Stellar ( AV and Endpoint logs )
UberAgent ( Security )
Unix system ( OS )
UpGuard ( Vulnerability scanners )
Upstream Vehicle SOC Alerts ( Schema )
URLScan IO ( Vulnerability scanners )
Veeam ( Backup software )
VMware AirWatch ( Wireless )
VMware Horizon ( VDI )
VMware vCenter ( Server )
VMWare VSphere ( virtualization )
VPC Flow Logs ( Google Cloud Specific )
Wallix Bastion ( Privileged Account Activity )
WindChill ( Lifecycle Management Software )
Windows Event ( Endpoint )
Windows Event (XML) ( AV / Endpoint )
Windows Sysmon ( DNS )
Workday Audit Logs ( Audit And Compliance )
Workspace Activities ( Google Cloud Specific )
Workspace ChromeOS Devices ( Google Cloud Specific )
Zimperium ( Mobile Device Management )
Zoom Operation Logs ( Operation-Specific )
Zscaler ( Web Proxy )
Zscaler DLP ( Data Loss Prevention )
ZScaler DNS ( DNS )
ZScaler NGFW ( Firewall )
Zscaler NSS Feeds for Alerts ( Alert log types )
Zscaler Private Access ( Security Service Edge )
The following log types were added without a default parser. Each parser is listed by product name and log_type value, if applicable.
Arize Cloud ( ARIZE_CLOUD )
Aware Audit ( AWARE_AUDIT )
Aware Signals ( AWARE_SIGNALS )
Azure PostgreSQL ( AZURE_POSTGRESQL )
Cisco Umbrella Firewall ( CISCO_UMBRELLA_FIREWALL )
Cisco Umbrella IPS ( CISCO_UMBRELLA_IPS )
Cisco Umbrella SWG DLP ( CISCO_UMBRELLA_SWG_DLP )
CyberArk Secure Cloud Access ( CYBERARK_SCA )
DBT Cloud ( DBT_CLOUD )
Delinea Distributed Engine ( DELINEA_DISTRIBUTED_ENGINE )
Delinea PBA ( DELINEA_PBA )
Dtex Audit ( DTEX_AUDIT )
Featurespace Aric ( FEATURESPACE_ARIC )
Forcepoint One ( FORCEPOINT_ONE )
Genesys Audit ( GENESYS_AUDIT )
Hex ( HEX )
Linkshadow NDR ( LINKSHADOW_NDR )
Nightfall DLP ( NIGHTFALL )
Palo Alto Cortex IIS ( PAN_CORTEX_XDR_IIS )
Relativity ( RELATIVITY )
Retool ( RETOOL )
Saturn Cloud ( SATURN_CLOUD )
SecurityBridge ( SECURITY_BRIDGE )
TACACS Plus ( TACACS_PLUS )
Transmit Security FlexID ( TRANSMIT_FLEXID )
Unifi Router ( UNIFI_ROUTER )
For a list of supported log types and details about default parser changes, see Supported log types and default parsers .
November 25, 2024
Feature
Curated Detections has been enhanced with a new detection category, MacOS Threats . The category includes a Mandiant Intel Emerging Threats rulepack.
November 21, 2024
Change
The Google SecOps team identified that a cloud threat detection rule pack (azure-defender-for-cloud-vm-extensions) was inadvertently made available to all customers. The licensing requirements restrict the availability of this rule pack to only Enterprise and Enterprise+ customers and this has been corrected.
This change should not remove any prior detections for customers who have enabled this rule pack and do not meet the licensing requirements but the rules themselves will now be unavailable and no new detections will generate.
November 09, 2024
Announcement
The following parser documentation is now available.
Collect Microsoft Azure AD logs
Collect AWS VPC Flow logs
Collect AWS GuardDuty logs
Collect Cisco Meraki logs
Collect Cisco Secure Email Gateway logs
Collect Cisco ISE logs
Collect Cisco Secure ACS logs
Collect Amazon CloudFront logs
Collect AWS RDS logs
Collect Cloudflare WAF logs
Collect Forcepoint DLP logs
Collect FortiWeb WAF logs
Collect F5 BIG-IP APM logs
Collect F5 BIG-IP LTM logs
Collect CrowdStrike EDR logs
Collect the General Dynamics Fidelis XPS logs
Collect CyberX logs
Collect Imperva Incapsula Web Application Firewall logs
Collect Infoblox logs
Collect Juniper Junos logs
Collect Microsoft Intune logs
Collect Microsoft Graph security API alert logs
Collect Kemp Load Balancer logs
Collect Mimecast Secure Email Gateway logs
Collect Netgate pfSense logs
Collect NetScaler logs
Collect Proofpoint TAP alerts logs
Collect Pulse Secure logs
Collect Qualys scan logs
Collect RSA Authentication Manager logs
Collect SentinelOne EDR logs
Collect SonicWall logs
Collect Sophos UTM logs
Collect Symantec Event Export logs
Collect Tripwire logs
Collect Palo Alto Prisma Cloud logs
Collect Okta logs
Collect Palo Alto Cortex XDR alerts logs
Collect CrowdStrike Detection logs
October 28, 2024
Change
Google SecOps has updated the list of supported default parsers. Parsers are updated gradually, so it might take one to four days before you see the changes reflected in your region.
The following supported default parsers have changed. Each parser is listed by product name and log_type value, if applicable. This list now includes both released default parsers and pending parser updates.
AIX system ( OS )
Apache Tomcat ( Web server )
Apigee ( Google Cloud Specific )
Aqua Security ( IaaS Applications )
Aruba Switch ( Network Infrastructure )
Auth0 ( Authentication log )
AWS Cloudtrail ( Cloud Log Aggregator )
AWS GuardDuty ( IDS/IPS )
AWS RDS ( Database )
AWS Route 53 DNS ( AWS Specific )
AWS VPC Flow ( AWS Specific )
Azure AD ( LDAP )
Azure AD Sign-In ( Misc Windows Specific )
Azure VPN ( VPN )
Blue Coat Proxy ( Web Proxy )
BMC Client Management ( Security )
Checkpoint Audit ( AUDIT )
Chrome Management ( Browser )
Cisco ASA ( firewall )
Cisco Internetwork Operating System ( Network Infrastructure )
Cisco IronPort ( Gateway Security )
Cisco Meraki ( Wireless )
Cisco Router ( Switches, Routers )
Cisco Switch ( Switches, Routers )
Cisco UCM ( Communication Manager )
Cisco Unity Connection ( Administration and Management )
Citrix Netscaler ( Load Balancer, Traffic Shaper, ADC )
Claroty Continuous Threat Detection ( IoT )
Cloud Audit Logs ( Google Cloud Specific )
Cloudflare ( SaaS Application )
CommVault ( Alert System )
CrowdStrike Detection Monitoring ( EDR )
CrowdStrike Falcon ( EDR )
Darktrace ( NDR )
Dell Switch ( Switches, Routers )
Druva Backup ( Security )
Entrust nShield HSM ( Hardware Security Module )
F5 ASM ( WAF )
F5 BIGIP LTM ( Load Balancer, Traffic Shaper, ADC )
Fidelis Network ( NDR )
FireEye ( Alerts )
FireEye HX ( EDR )
FireEye NX ( NDR )
FortiGate ( Firewall )
Fortinet FortiAnalyzer ( Fortinet FortiAnalyzer )
GitGuardian Enterprise ( SaaS Applications )
Guardicore Centra ( Deception Software )
Halcyon Anti Ransomware ( AV and endpoint logs )
Hashicorp Vault ( Privileged Account Activity )
HP Linux ( OS )
IBM Mainframe Storage ( Monitoring )
IBM OpenPages ( Data Security )
IBM Security QRadar SOAR ( Security )
Imperva ( WAF )
Imperva Advanced Bot Protection ( Bot Protection )
Imperva Audit Trail ( IT infrastructure )
Infoblox DHCP ( DHCP )
INTEL471 Watcher Alerts ( Data Security )
Jamf Protect Alerts ( Endpoint Security )
Juniper ( Firewall )
KnowBe4 PhishER ( Email server log types. )
Kubernetes Node ( Kubernetes Container )
Linux Auditing System (AuditD) ( OS )
McAfee ePolicy Orchestrator ( Policy Management )
Microsoft AD ( LDAP )
Microsoft Azure Resource ( Log Aggregator )
Microsoft Defender for Identity ( EDR )
Microsoft Defender for Office 365 ( Email server log types. )
Microsoft Graph Activity Logs ( AUDIT )
Microsoft Netlogon ( Authentication )
Microsoft SQL Server ( Database )
Microsoft System Center Endpoint Protection ( Malware Detection )
Netscope Client ( CASB )
Office 365 ( SaaS Application )
Okta User Context ( Identity and Access Management )
One Identity Identity Manager ( unified identity security )
Opswat Metadefender ( Threat Protection )
Palo Alto Networks Firewall ( Firewall )
Palo Alto Prisma Cloud Alert payload ( Cloud Security )
pfSense ( FIREWALL )
Ping Federate ( Authentication )
Proofpoint Observeit ( Email Server )
ProofPoint Secure Email Relay ( Email server )
Pure Storage ( Data Storage )
Red Hat Directory Server LDAP ( Identity and Access Management )
Salesforce ( SaaS Application )
Salesforce Commerce Cloud ( SaaS Application )
Security Command Center Threat ( Google Cloud Specific )
ServiceNow CMDB ( Policy Management )
Sophos UTM ( Unified Threat Management )
Symantec Endpoint Protection ( AV / Endpoint )
Sysdig ( Security )
Tanium Threat Response ( Tanium Specific )
ThreatX WAF ( WAF )
Thycotic ( Identity and Access Management )
Tines ( Data Security )
Trend Micro ( SMS, UNITY_ONE )
Trend Micro Deep Security ( AV / Endpoint )
Trend Micro Vision One ( AV and endpoint logs )
Twingate ( VPN )
Unix system ( OS )
Velo Firewall ( FIREWALL )
VMware AirWatch ( Wireless )
Windows Defender ATP ( AV / Endpoint )
Windows Event ( Endpoint )
Windows Event (XML) ( AV / Endpoint )
Windows Local Administrator Password Solution ( Local Administrator Password Solution )
Windows Sysmon ( DNS )
Workday Audit Logs ( Audit And Compliance )
Workspace Activities ( Google Cloud Specific )
Workspace Alerts ( Google Cloud Specific )
Zscaler ( Web Proxy )
Zscaler Tunnel ( N/A )
The following log types were added without a default parser. Each parser is listed by product name and log_type value, if applicable.
Adobe I/O Runtime ( ADOBE_IO_RUNTIME )
Amazon VPC Transit Gateway Flow Logs ( AWS_VPC_TRANSIT_GATEWAY )
Appsentinels ( APPSENTINELS )
Asset Panda ( ASSET_PANDA )
AstriX ( ASTRIX )
Atlan ( ATLAN )
Azure Container Registry ( AZURE_CONTAINER_REGISTRY )
Backbase Engagement Banking Platform ( BACKBASE )
Barracuda Incident Response ( BARRACUDA_INCIDENTRESPONSE )
Cloudflare Access ( CLOUDFLARE_ACCESS )
Control D DNS ( CONTROL_D )
Digicert ( DIGICERT )
Elastic Defend ( ELASTIC_DEFEND )
FingerprintJS ( FINGERPRINT_JS )
Hashicorp Nomad ( HASHICORP_NOMAD )
IBM NS1 ( IBM_NS1 )
Intel 471 Malware Intelligence ( INTEL471_MALWARE_INTEL )
MacStadium ( MACSTADIUM )
N-Able N-Central RMM ( N_ABLE_N_CENTRAL_RMM )
Opentext Exstream ( OPENTEXT_EXSTREAM )
OVHcloud ( OVHCLOUD )
OX Security ( OX_SECURITY )
Pharos ( PHAROS )
ReliaQuest ( RELIAQUEST )
Rublon ( RUBLON )
Snyk Group level audit/issues logs ( SNYK_ISSUES )
SolarWinds Network Performance Monitor ( SOLARWINDS_NPM )
StackHawk ( STACKHAWK )
Tencent Cloud Firewall ( TENCENT_CLOUD_FIREWALL )
Tencent Cloud Waf ( TENCENT_CLOUD_WAF )
Tencent Cloud Workload Protection ( TENCENT_CLOUD_WORKLOAD_PROTECTION )
Trend Micro Server Protect ( TRENDMICRO_SERVER_PROTECT )
UKG ( UKG )
Uptivity ( UPTIVITY )
USBAV Koramis ( USBAV_KORAMIS )
Virtual Network Flow Logs ( VIRTUAL_NETWORK_FLOW_LOGS )
Windows Performance Monitor ( MS_PERFMON )
For a list of supported log types and details about default parser changes, see Supported log types and default parsers .
October 15, 2024
Change
Google SecOps has updated the list of supported default parsers. Parsers are updated gradually, so it might take one to four days before you see the changes reflected in your region.
The following supported default parsers have changed. Each parser is listed by product name and log_type value, if applicable. This list now includes both released default parsers and pending parser updates.
Abnormal Security ( Email Server )
AIX system ( OS )
Akamai DNS ( DNS )
Akamai WAF ( WAF )
Apache ( Security )
Apigee ( Google Cloud Specific )
Apple macOS ( AV / Endpoint )
Archer Integrated Risk Management ( Risk Management Solution )
Area1 Security ( Email server )
Aruba ( Wireless )
Aruba Switch ( Network Infrastructure )
Auth0 ( Authentication log )
AWS CloudFront ( CDN )
AWS Cloudtrail ( Cloud Log Aggregator )
AWS CloudWatch ( Cloud service monitoring )
AWS EMR ( AWS Specific )
AWS VPN ( VPN )
Azure AD ( LDAP )
Azure AD Directory Audit ( Audit )
Azure Firewall ( Azure Firewall Application Rule )
Azure Key Vault logging ( Audit )
Barracuda Firewall ( Firewall )
Barracuda WAF ( Firewall )
BeyondTrust Endpoint Privilege Management ( Privileged Account Activity )
Blue Coat Proxy ( Web Proxy )
BMC Client Management ( Security )
Check Point ( Firewall )
Chrome Management ( Browser )
Cisco IronPort ( Gateway Security )
Cisco ISE ( Identity and Access Management )
Cisco Meraki ( Wireless )
Cisco Router ( Switches, Routers )
Cisco Stealthwatch ( Log Aggregator )
Cisco Switch ( Switches, Routers )
Cisco TACACS+ ( Authentication )
Cisco Umbrella Web Proxy ( Web Proxy )
Cisco WLC/WCS ( Wireless )
Citrix Netscaler ( Load Balancer, Traffic Shaper, ADC )
Claroty Continuous Threat Detection ( IoT )
Cloud Audit Logs ( Google Cloud Specific )
Cloud Data Loss Prevention ( Google Cloud Specific )
Cloud SQL ( Google Cloud Specific )
Cohesity ( Backup Software )
Corelight ( NDR )
CrowdStrike Detection Monitoring ( EDR )
CrowdStrike Falcon ( EDR )
CrushFTP ( Application server )
Darktrace ( NDR )
Delinea Secret Server ( Privileged Account Activity )
Dell EMC Data Domain ( Storage system )
Druva Backup ( Security )
Duo Activity Logs ( Activity )
Duo Administrator Logs ( Authentication )
Elastic Windows Event Log Beats ( Log Aggregator )
Ergon Informatik Airlock IAM ( Application Whitelisting )
F5 BIGIP Access Policy Manager ( Access Policy Manager )
F5 BIGIP LTM ( Load Balancer, Traffic Shaper, ADC )
FireEye HX ( EDR )
FortiGate ( Firewall )
Fortinet FortiAnalyzer ( Fortinet FortiAnalyzer )
Fortinet FortiAuthenticator ( Security )
Fortinet FortiEDR ( EDR )
Fortinet Fortimanager ( Network Management and Optimization software )
GitHub ( SaaS Application )
GMV Checker ATM Security ( ATM Audit )
Guardicore Centra ( Deception Software )
Hashicorp Vault ( Privileged Account Activity )
HP Aruba (ClearPass) ( Identity and Access Management )
IBM Cloud Activity Tracker ( Security Log )
IBM DB2 ( Database )
IBM Mainframe Storage ( Monitoring )
IBM OpenPages ( Data Security )
Imperva ( WAF )
Imperva CEF ( CEF )
Imperva DRA ( Data Security )
Infoblox ( DHCP, DNS )
Infoblox DNS ( DNS )
JAMF Pro ( Mac Endpoint Management System )
Keycloak ( Identity and Access Management )
Lacework Cloud Security ( Cloud Security )
Linux Auditing System (AuditD) ( OS )
Linux DHCP ( DHCP )
ManageEngine Log360 ( Alert Log )
McAfee ePolicy Orchestrator ( Policy Management )
Microsoft AD FS ( LDAP )
Microsoft Azure Activity ( Misc Windows Specific )
Microsoft Azure Resource ( Log Aggregator )
Microsoft Defender For Cloud ( Automation and DevOps Tools )
Microsoft Defender for Endpoint ( EDR )
Microsoft Defender for Identity ( EDR )
Microsoft Graph Activity Logs ( AUDIT )
Microsoft Graph API Alerts ( Gateway to data and intelligence )
Microsoft Intune Context ( Mobile Device Management )
Microsoft SQL Server ( Database )
Mimecast URL Logs ( Email server log types )
MISP Threat Intelligence ( Cybersecurity )
Mobile Endpoint Security ( Mobile Endpoint Security )
NetApp ONTAP ( Rest api )
Netskope V2 ( Cloud Security )
Office 365 ( SaaS Application )
Okta ( Identity and Access Management )
One Identity Identity Manager ( unified identity security )
Opengear Remote Management ( Secure Remote Access )
Oracle ( DATABASE )
Oracle Cloud Infrastructure VCN Flow Logs ( Oracle Cloud Infrastructure )
Palo Alto Networks Firewall ( Firewall )
Palo Alto Panorama ( Firewall )
Palo Alto Prisma Cloud Alert payload ( Cloud Security )
Proofpoint CASB ( CASB )
Proofpoint Email Filter ( Email Server )
Proofpoint On Demand ( Email Server )
Proofpoint Threat Response ( Email Server )
Pulse Secure ( VPN )
Radware Web Application Firewall ( Firewall )
SailPoint IAM ( Identity and Access Management )
Saiwall VPN ( VPN )
Salesforce ( SaaS Application )
Sentinelone Alerts ( Endpoint Security )
SonicWall ( Firewall )
Sophos Central ( AV / Endpoint )
Sophos Firewall (Next Gen) ( Firewall )
Squid Web Proxy ( Web Proxy )
STIX Threat Intelligence ( Cybersecurity Threats )
Suricata EVE ( IPS IDS )
Symantec DLP ( DLP )
Symantec Endpoint Protection ( AV / Endpoint )
Symantec Web Security Service ( Web Proxy )
TINTRI ( Data Security )
Trend Micro Apex one ( Endpoint Security )
TrendMicro Apex Central ( Endpoint )
UberAgent ( Security )
Veeam ( Backup software )
Velo Firewall ( FIREWALL )
VMware AirWatch ( Wireless )
VMware NSX ( Network and Security Virtualization )
VMware vCenter ( Server )
WatchGuard ( Syslog and KV )
Wazuh ( Log Aggregator )
Windows Event ( Endpoint )
Windows Event (XML) ( AV / Endpoint )
Windows Sysmon ( DNS )
Workday User Activity ( N/A )
Workspace Activities ( Google Cloud Specific )
XAMS by Xiting ( Log Aggregator )
ZeroFox Platform ( Database )
Zscaler ( Web Proxy )
Zywall ( Network infrastructure )
The following log types were added without a default parser. Each parser is listed by product name and log_type value, if applicable.
Adaptive Shield ( ADAPTIVE_SHIELD )
Agiloft ( AGILOFT )
Airwatch Context ( AIRWATCH_CONTEXT )
Attack IQ ( ATTACK_IQ )
AWS PY Tools ( AWS_PY_TOOLS )
Bindplane Agent ( BINDPLANE_AGENT )
BindPlane Audit Logs ( BINDPLANE )
Bitsight ( BITSIGHT )
Bitvise SFTP ( BITVISE_SFTP )
Ciena Router logs ( CIENA_ROUTER )
Cisco Viptela ( CISCO_VIPTELA )
Colinet Trotta GAUS SEGUROS ( CT_GAUS_SEGUROS )
Conductor One ( CONDUCTOR_ONE )
Crowdstrike Endpoint Security API ( CS_ENDPOINT_SECURITY_API )
Fiserv SecureNow ( SECURE_NOW )
Greenhouse Harvest ( GREENHOUSE_HARVEST )
Harness IO ( HARNESS_IO )
Hashicorp Boundary ( HASHICORP_BOUNDARY )
HP Linux ( HP_LINUX )
IBM Security Guardium Insights ( IBM_INSIGHTS )
Imperva Attack Analytics ( IMPERVA_ATTACK_ANALYTICS )
INTEL471 Watcher Alerts ( INTEL471_WATCHER_ALERTS )
JAMF Security Cloud ( JAMF_SECURITY_CLOUD )
JBoss Web ( JBOSS_WEB )
Kandji Context ( KANDJI_CONTEXT )
Lenels2 Elements Secure ( LENELS2_ELEMENTS_SECURE )
ManageEngine OpUtils ( MANAGE_ENGINE_OPUTILS )
Microsoft Graph Incident ( MICROSOFT_GRAPH_INCIDENT )
Miro ( MIRO )
Open Policy Agent ( OPA )
Oracle Access Manager ( ORACLE_AM )
Oracle Enterprise Manager ( ORACLE_OEM )
Perception Point XRay ( PERCEPTION_POINT_XRAY )
RedSift BrandTrust ( REDSIFT_BRANDTRUST )
Riverbed ( RIVERBED )
SAP Sybase Adaptive Server Enterprise Database ( SAP_ASE )
Sharefile Logs ( SHAREFILE_LOGS )
Smartsheet ( SMARTSHEET )
Statusgator ( STATUSGATOR )
Titan MFT ( TITAN_MFT )
Upwind ( UPWIND )
Vanta Context ( VANTA_CONTEXT )
Varnish Cache ( VARNISH_CACHE )
Vercel WAF ( VERCEL_WAF )
Veriato Cerebral ( VERIATO_CEREBRAL )
For a list of supported log types and details about default parser changes, see Supported log types and default parsers .
September 16, 2024
Change
Google SecOps has updated the list of supported default parsers. Parsers are updated gradually, so it might take one to four days before you see the changes reflected in your region.
The following supported default parsers have changed. Each parser is listed by product name and log_type value, if applicable. This list now includes both released default parsers and pending parser updates.
Abnormal Security ( ABNORMAL_SECURITY )
Akamai DNS ( AKAMAI_DNS )
Amazon API Gateway ( AWS_API_GATEWAY )
Apache ( APACHE )
Apigee ( GCP_APIGEE_X )
Archer Integrated Risk Management ( ARCHER_IRM )
Arcsight CEF ( ARCSIGHT_CEF )
AWS Cloudtrail ( AWS_CLOUDTRAIL )
AWS VPC Flow ( AWS_VPC_FLOW )
AWS VPN ( AWS_VPN )
Azure AD ( AZURE_AD )
Azure AD Audit ( AZURE_AD_AUDIT )
Azure AD Sign-In ( AZURE_AD_SIGNIN )
Azure Storage Audit ( AZURE_STORAGE_AUDIT )
Azure WAF ( AZURE_WAF )
BeyondTrust Privileged Identity ( BEYONDTRUST_PI )
Blue Coat Proxy ( BLUECOAT_WEBPROXY )
Carbon Black App Control ( CB_APP_CONTROL )
Check Point ( CHECKPOINT_FIREWALL )
Checkpoint Audit ( CHECKPOINT_AUDIT )
Cisco ASA ( CISCO_ASA_FIREWALL )
Cisco Firepower NGFW ( CISCO_FIREPOWER_FIREWALL )
Cisco ISE ( CISCO_ISE )
Cisco Meraki ( CISCO_MERAKI )
Cisco WSA ( CISCO_WSA )
Citrix Netscaler ( CITRIX_NETSCALER )
Cloud Audit Logs ( N/A )
Cloud Data Loss Prevention ( N/A )
Cloud Load Balancing ( GCP_LOADBALANCING )
Cloud SQL ( GCP_CLOUDSQL )
Cloudflare WAF ( CLOUDFLARE_WAF )
Cohesity ( COHESITY )
Corelight ( CORELIGHT )
CrowdStrike Falcon ( CS_EDR )
Cyber 2.0 IDS ( CYBER_2_IDS )
Cyberark Privilege Cloud ( CYBERARK_PRIVILEGE_CLOUD )
CyberArk PTA Privileged Threat Analytics ( CYBERARK_PTA )
Darktrace ( DARKTRACE )
Dell Switch ( DELL_SWITCH )
Duo Administrator Logs ( DUO_ADMIN )
Duo Auth ( DUO_AUTH )
EfficientIP DDI ( EFFICIENTIP_DDI )
Elastic Audit Beats ( ELASTIC_AUDITBEAT )
Elastic Packet Beats ( ELASTIC_PACKETBEATS )
F5 ASM ( F5_ASM )
F5 Shape ( F5_SHAPE )
F5 Silverline ( F5_SILVERLINE )
FireEye ( FIREEYE_ALERT )
FireEye ETP ( FIREEYE_ETP )
FireEye HX ( FIREEYE_HX )
Forcepoint DLP ( FORCEPOINT_DLP )
Forcepoint Email Security ( FORCEPOINT_EMAILSECURITY )
Forcepoint Mail Relay ( FORCEPOINT_MAIL_RELAY )
FortiGate ( FORTINET_FIREWALL )
Fortinet FortiAnalyzer ( FORTINET_FORTIANALYZER )
Fortinet Fortimanager ( FORTINET_FORTIMANAGER )
GCP_APP_ENGINE ( GCP_APP_ENGINE )
GitHub ( GITHUB )
HP Aruba (ClearPass) ( CLEARPASS )
IBM DS8000 Storage ( IBM_DS8000 )
IBM Guardium ( GUARDIUM )
IBM OpenPages ( IBM_OPENPAGES )
Infoblox DNS ( INFOBLOX_DNS )
Jenkins ( JENKINS )
Layer7 SiteMinder ( SITEMINDER_SSO )
Linux Auditing System (AuditD) ( AUDITD )
Malwarebytes ( MALWAREBYTES_EDR )
McAfee ePolicy Orchestrator ( MCAFEE_EPO )
Microsoft AD FS ( ADFS )
Microsoft Azure Activity ( AZURE_ACTIVITY )
Microsoft Azure Resource ( AZURE_RESOURCE_LOGS )
Microsoft Defender for Office 365 ( MICROSOFT_DEFENDER_MAIL )
Microsoft Exchange ( EXCHANGE_MAIL )
Microsoft Graph API Alerts ( MICROSOFT_GRAPH_ALERT )
Microsoft PowerShell ( POWERSHELL )
Microsoft SQL Server ( MICROSOFT_SQL )
Microsoft System Center Endpoint Protection ( MICROSOFT_SCEP )
Mimecast ( MIMECAST_MAIL )
Nagios Infrastructure Monitoring ( NAGIOS )
Network Policy Server ( MICROSOFT_NPS )
Office 365 ( OFFICE_365 )
Okta ( OKTA )
Okta User Context ( OKTA_USER_CONTEXT )
Oracle ( ORACLE_DB )
Palo Alto Cortex XDR Alerts ( CORTEX_XDR )
Palo Alto Panorama ( PAN_PANORAMA )
Ping Federate ( PING_FEDERATE )
Ping Identity ( PING )
PostgreSQL ( POSTGRESQL )
Precisely Ironstream IBM z/OS ( IRONSTREAM_ZOS )
Proofpoint On Demand ( PROOFPOINT_ON_DEMAND )
Proofpoint Tap Alerts ( PROOFPOINT_MAIL )
Pulse Secure ( PULSE_SECURE_VPN )
Radware Web Application Firewall ( RADWARE_FIREWALL )
Rippling Activity Logs ( RIPPLING_ACTIVITYLOGS )
Sap Business Technology Platform ( SAP_BTP )
Security Command Center Threat ( N/A )
Sentinelone Alerts ( SENTINELONE_ALERT )
SentinelOne EDR ( SENTINEL_EDR )
SentinelOne Singularity Cloud Funnel ( SENTINELONE_CF )
Shibboleth IDP ( SHIBBOLETH_IDP )
Snare System Diagnostic Logs ( SNARE_SOLUTIONS )
Snowflake ( SNOWFLAKE )
Sophos AV ( SOPHOS_AV )
Sophos Intercept EDR ( SOPHOS_EDR )
Sourcefire ( SOURCEFIRE_IDS )
Splunk Attack Analyzer ( SPLUNK_ATTACK_ANALYZER )
SpyCloud ( SPYCLOUD )
Squid Web Proxy ( SQUID_WEBPROXY )
Suricata EVE ( SURICATA_EVE )
Symantec Endpoint Protection ( SEP )
Symantec Web Security Service ( SYMANTEC_WSS )
Tenable Audit ( TENABLE_AUDIT )
Thales Vormetric ( VORMETRIC )
Trend Micro Apex one ( TRENDMICRO_APEX_ONE )
Trend Micro Deep Security ( TRENDMICRO_DEEP_SECURITY )
Trend Micro Vision One ( TRENDMICRO_VISION_ONE )
TrendMicro Apex Central ( TRENDMICRO_APEX_CENTRAL )
Twingate ( TWINGATE )
Ubika Waf ( UBIKA_WAF )
Unix system ( NIX_SYSTEM )
Vectra Detect ( VECTRA_DETECT )
Vectra Stream ( VECTRA_STREAM )
Wazuh ( WAZUH )
Windows DHCP ( WINDOWS_DHCP )
Windows Event ( WINEVTLOG )
Windows Event (XML) ( WINEVTLOG_XML )
Windows Local Administrator Password Solution ( MICROSOFT_LAPS )
Windows Sysmon ( WINDOWS_SYSMON )
Workspace Activities ( WORKSPACE_ACTIVITY )
Workspace Alerts ( WORKSPACE_ALERTS )
XAMS by Xiting ( XITING_XAMS )
The following log types were added without a default parser. Each parser is listed by product name and log_type value, if applicable.
Active Identity HID ( ACTIVE_IDENTITY_HID )
Akamai Event Viewer ( AKAMAI_EVT_VWR )
Autodesk Vault ( AUTODESK_VAULT )
Avaza ( AVAZA )
Avigilon Access Logs ( AVIGILON_ACCESS_LOGS )
Axis Camera ( AXIS_CAMERA )
Axis License Plate Reader ( AXIS_LPR )
Azure Nix System ( AZURE_NIX_SYSTEM )
CallTower Audio Conferencing ( CALLTOWER_AUDIO )
Canon Printers ( CANON_PRINTERS )
Cisco Secure Endpoint ( CISCO_SECURE_ENDPOINT )
Control UP ( CONTROL_UP )
Cradlepoint Router Logs ( CRADLEPOINT )
Crowdstrike Spotlight ( CROWDSTRIKE_SPOTLIGHT )
CrushFTP ( CRUSHFTP )
CrowdStrike Filevantage ( CS_FILEVANTAGE )
Cybersixgill ( CYBERSIXGILL )
Cyolo Secure Remote Access for OT ( CYOLO_OT )
Dell Core Switch ( DELL_EMC_NETWORKING )
DLink Switch ( DLINK_SWITCH )
Elastic Security ( ELASTIC_EDR )
Fireblocks ( FIREBLOCKS )
Forescout eyeInspect ( FORESCOUT_EYEINSPECT )
Fortinet FortiGate IPS ( FORTINET_IPS )
H3C Router ( H3C_ROUTER )
Hackerone ( HACKERONE )
Halo Sensor ( HALO_SENSOR )
Hashcast ( HASHCAST )
Perforce Helix Core ( HELIX_CORE )
Heroku ( HEROKU )
Hillstone NDR ( HILLSTONE_NDR )
HL7 ( HL7 )
HoopDev ( HOOPDEV )
Huawei Switches ( HUAWEI_SWITCH )
Identity Security Cloud ( IDENTITY_SECURITY_CLOUD )
Imperva Data Risk Analytics ( IMPERVA_DATA_ANALYTICS )
Imperva DRA ( IMPERVA_DRA )
IM Express ( IM_EXPRESS )
Intezer ( INTEZER )
Jumpcloud IAM ( JUMPCLOUD_IAM )
Maltiverse IOC ( MALTIVERSE_IOC )
ManageEngine Log360 ( MANAGE_ENGINE_LOG360 )
McAfee Network Security Platform ( MCAFEE_NSP )
Miro Cloud ( MIRO_CLOUD )
Nokia Home Device Manager ( NOKIA_HDM )
Nortel Secure Router ( NORTEL_SR )
Notion ( NOTION )
One Identity Identity Manager ( ONE_IDENTITY_IDENTITY_MANAGER )
IDnomic Public Key Infrastructure ( OPENTRUST )
Outline Activity Logs ( OUTLINE_ACTIVITY_LOGS )
Prismatic IO ( PRISMATIC_IO )
ProFTPD ( PROFTPD )
Provision Asset Context ( PROVISION_ASSET_CONTEXT )
Ransomcare ( RANSOMCARE )
Rapid7 Insights Threat Command ( RAPID7_INSIGHTS_THREAT_COMMAND )
Saporo ( SAPORO )
SAS Metadata Server log ( SAS_METADATA_SERVER_LOG )
Scylla ( SCYLLA )
Senseon Alerts ( SENSEON_ALERTS )
Sonic Switch ( SONIC_SWITCH )
Symantec Data Center Security ( SYMANTEC_DCS )
Syncplify SFTP 2 Events ( SYNCPLIFY_SFTP )
Team Cymru Scout Threat Intelligence ( TEAM_CYMRU_SCOUT_THREATINTEL )
Tenable CSPM ( TENABLE_CSPM )
Teqtivity Assets ( TEQTIVITY_ASSETS )
Tines ( TINES )
TP Link Network Switches ( TPLINK_SWITCH )
TT D365 ( TT_D365 )
TT MSAN DSLAM ( TT_MSAN_DSLAM )
TT Trio Chordiant ( TT_TRIO_CHORDIANT )
Tufin ( TUFIN )
Tufin Secure Track ( TUFIN_SECURE_TRACK )
UberAgent ( UBERAGENT )
Upstream Vehicle SOC Alerts ( UPSTREAM_VSOC_ALERTS )
URLScan IO ( URLSCAN_IO )
Vertiv UPS ( VERTIV_UPS )
Very Good Security ( VERY_GOOD_SECURITY )
Virtual Browser ( VIRTUAL_BROWSER )
VMWare VSphere ( VMWARE_VSPHERE )
Webroot Identity Protection ( WEBROOT_IDENTITY_PROTECTION )
WideField ( WIDEFIELD_SECURITY )
Zscaler Sandbox ( ZSCALER_SANDBOX )
Zywall ( ZYWALL )
For a list of supported log types and details about default parser changes, see Supported log types and default parsers .
September 09, 2024
Feature
The following new YARA-L 2.0 functions are available in Rules and Search:
arrays.concat
arrays.join_string
arrays.max
arrays.min
arrays.size
arrays.index_to_int
cast.as_bool
cast.as_float
math.ceil
math.floor
math.geo_distance
math.is_increasing
math.pow
math.random
strings.contains
strings.count_substrings
strings.extract_domain
strings.extract_hostname
strings.from_hex
strings.ltrim
strings.reverse
strings.rtrim
strings.trim
strings.url_decode
timestamp.as_unix_seconds
timestamp.now
The following new YARA-L 2.0 functions are available in Rules:
hash.sha256
window.avg
window.first
window.last
window.median
window.mode
window.stddev
window.variance
Details on function signatures and behavior can be found in YARA-L2.0 Function Syntax Reference Documentation
September 06, 2024
Change
Burst limits will be rolling out over the next 90 days. This should not affect customers if sources are properly configured. Review documentation for full details.
August 30, 2024
Change
The prioritization logic of Applied Threat Intelligence (ATI) rule set has been improved to remove alerts from events that have a specified security result action of BLOCKED or QUARANTINED. This change only impacts the IP address indicator types for both High and Active Breach priority. For more information, see View details about rule sets .
August 17, 2024
Announcement
The documentation for the SIEM product is currently undergoing a makeover.
The upper tabs for the table of contents have been removed and the table of contents for SIEM now appears at the bottom of the left hand navigation bar.
In addition, labels have been added to the top of each page that let you know if the specific page is relevant for SIEM. You can click on the label to reach the SIEM table of contents.
August 01, 2024
Change
Customers can now configure direct ingestion of Google Cloud data without using a 1-time Google Security Operations access code . This feature will be launched over a period of several weeks.
For more information, see Enable direct ingestion from Google Cloud .
July 29, 2024
Feature
Curated Detections has been enhanced with new detection content for Cloud Threats to include rule packs covering Microsoft Entra ID, Entra ID Audit and Azure Compute and are in public preview for customers with a Google Security Operations or Enterprise Plus license.
July 26, 2024
Deprecated
After July 2025, the Enterprise Insights page and the CBN alerts will no longer be available. Use the Alerts and IOCs page to view the alerts. We recommend that you migrate the existing CBN alerts to the YARA-L detection engine .
July 25, 2024
Change
Google SecOps has updated the list of supported default parsers. Parsers are updated gradually, so it might take one to four days before you see the changes reflected in your region.
The following supported default parsers have changed. Each parser is listed by product name and log_type value, if applicable.
Airlock Digital Application Allowlisting ( AIRLOCK_DIGITAL )
Akamai SIEM Connector ( AKAMAI_SIEM_CONNECTOR )
Apache ( APACHE )
Arcsight CEF ( ARCSIGHT_CEF )
Arista Switch ( ARISTA_SWITCH )
Aruba ( ARUBA_WIRELESS )
Aruba EdgeConnect SD-WAN ( ARUBA_EDGECONNECT_SDWAN )
Atlassian Confluence ( ATLASSIAN_CONFLUENCE )
Auth0 ( AUTH_ZERO )
AWS CloudTrail ( AWS_CLOUDTRAIL )
AWS Config ( AWS_CONFIG )
Azure AD ( AZURE_AD )
Azure AD Directory Audit ( AZURE_AD_AUDIT )
Azure App Service ( AZURE_APP_SERVICE )
Azure WAF ( AZURE_WAF )
BeyondTrust Endpoint Privilege Management ( BEYONDTRUST_ENDPOINT )
BIND ( BIND_DNS )
BloxOne Threat Defense ( BLOXONE )
Blue Coat Proxy ( BLUECOAT_WEBPROXY )
Broadcom SSL Visibility Appliance ( BROADCOM_SSL_VA )
Cequence Bot Defense ( CEQUENCE_BOT_DEFENSE )
Check Point ( CHECKPOINT_FIREWALL )
Checkpoint Audit ( CHECKPOINT_AUDIT )
Checkpoint SmartDefense ( CHECKPOINT_SMARTDEFENSE )
Cimcor | File Integrity Monitoring ( CIMCOR )
CipherTrust Manager ( CIPHERTRUST_MANAGER )
Cisco ASA ( CISCO_ASA_FIREWALL )
Cisco EStreamer ( CISCO_ESTREAMER )
Cisco Firepower NGFW ( CISCO_FIREPOWER_FIREWALL )
Cisco FireSIGHT Management Center ( CISCO_FIRESIGHT )
Cisco Internetwork Operating System ( CISCO_IOS )
Cisco IronPort ( CISCO_IRONPORT )
Cisco Meraki ( CISCO_MERAKI )
Cisco Router ( CISCO_ROUTER )
Cisco Stealthwatch ( CISCO_STEALTHWATCH )
Cisco VPN ( CISCO_VPN )
Citrix Analytics ( CITRIX_ANALYTICS )
Citrix Netscaler ( CITRIX_NETSCALER )
Cloud Audit Logs ( N/A )
Cloud Data Loss Prevention ( N/A )
Cloud Identity Devices ( GCP_CLOUDIDENTITY_DEVICES )
Cloud Load Balancing ( GCP_LOADBALANCING )
Cloud SQL ( GCP_CLOUDSQL )
Cofense ( COFENSE_TRIAGE )
Comforte SecurDPS ( COMFORTE_SECURDPS )
Compute Engine ( GCP_COMPUTE )
Corelight ( CORELIGHT )
Cribl Stream ( CRIBL_STREAM )
CrowdStrike Falcon ( CS_EDR )
CyberArk ( CYBERARK )
DigitalArts i-Filter ( DIGITALARTS_IFILTER )
Duo Auth ( DUO_AUTH )
Duo User Context ( DUO_USER_CONTEXT )
EfficientIP DDI ( EFFICIENTIP_DDI )
Elastic Audit Beats ( ELASTIC_AUDITBEAT )
Elastic Windows Event Log Beats ( ELASTIC_WINLOGBEAT )
Ergon Informatik Airlock IAM ( ERGON_INFORMATIK_AIRLOCK_IAM )
ESET AV ( ESET_AV )
F5 ASM ( F5_ASM )
F5 BIGIP LTM ( F5_BIGIP_LTM )
F5 Shape ( F5_SHAPE )
F5 Silverline ( F5_SILVERLINE )
Fidelis Network ( FIDELIS_NETWORK )
FileZilla ( FILEZILLA_FTP )
Forcepoint Email Security ( FORCEPOINT_EMAILSECURITY )
Forcepoint Proxy ( FORCEPOINT_WEBPROXY )
Forgerock OpenIdM ( FORGEROCK_OPENIDM )
Fortinet FortiAuthenticator ( FORTINET_FORTIAUTHENTICATOR )
Google App Engine ( GCP_APP_ENGINE )
GitHub ( GITHUB )
IBM DataPower Gateway ( IBM_DATAPOWER )
IBM DB2 ( DB2_DB )
IBM Guardium ( GUARDIUM )
IBM Security QRadar SIEM ( IBM_QRADAR )
Imperva Audit Trail ( IMPERVA_AUDIT_TRAIL )
Ingrian Networks DataSecure Appliance ( INGRIAN_NETWORKS_DATASECURE_APPLIANCE )
ION Spectrum ( ION_SPECTRUM )
JAMF Pro ( JAMF_PRO )
Jenkins ( JENKINS )
Juniper Junos ( JUNIPER_JUNOS )
Juniper Mist ( JUNIPER_MIST )
Juniper MX Router ( JUNIPER_MX )
Keeper Enterprise Security ( KEEPER )
Linux Auditing System (AuditD) ( AUDITD )
Linux Sysmon ( LINUX_SYSMON )
Lucid ( LUCID )
Maria Database ( MARIA_DB )
Microsoft AD ( WINDOWS_AD )
Microsoft Azure Activity ( AZURE_ACTIVITY )
Microsoft CyberX ( CYBERX )
Microsoft Defender for Endpoint ( MICROSOFT_DEFENDER_ENDPOINT )
Microsoft Defender for Identity ( MICROSOFT_DEFENDER_IDENTITY )
Microsoft Exchange ( EXCHANGE_MAIL )
Microsoft Graph Activity Logs ( MICROSOFT_GRAPH_ACTIVITY_LOGS )
Microsoft Graph API Alerts ( MICROSOFT_GRAPH_ALERT )
Microsoft IIS ( IIS )
Microsoft SQL Server ( MICROSOFT_SQL )
Mimecast URL Logs ( MIMECAST_URL_LOGS )
Netapp Storagegrid ( NETAPP_STORAGEGRID )
Netskope ( NETSKOPE_ALERT )
Netskope Web Proxy ( NETSKOPE_WEBPROXY )
Network Policy Server ( MICROSOFT_NPS )
Noname API Security ( NONAME_API_SECURITY )
Office 365 ( OFFICE_365 )
Office 365 Message Trace ( OFFICE_365_MESSAGETRACE )
Okta ( OKTA )
Okta User Context ( OKTA_USER_CONTEXT )
Open LDAP ( OPENLDAP )
Oracle ( ORACLE_DB )
Oracle Cloud Infrastructure Audit Logs ( OCI_AUDIT )
Palo Alto Cortex XDR Alerts ( CORTEX_XDR )
Palo Alto Networks Firewall ( PAN_FIREWALL )
Palo Alto Panorama ( PAN_PANORAMA )
Palo Alto Prisma Cloud Alert payload ( PAN_PRISMA_CA )
Passwordstate ( PASSWORDSTATE )
Ping Identity ( PING )
Portnix CEF ( PORTNOX_CEF )
PostFix Mail ( POSTFIX_MAIL )
Proofpoint Email Filter ( PROOFPOINT_MAIL_FILTER )
Proofpoint Sendmail Sentrion ( PROOFPOINT_SENDMAIL_SENTRION )
Proofpoint Threat Response ( PROOFPOINT_TRAP )
Quest Change Auditor for EMC ( QUEST_CHANGE_AUDITOR_EMC )
Radware Alteon ( RADWARE_ALTEON )
Radware Web Application Firewall ( RADWARE_FIREWALL )
Red Hat Directory Server LDAP ( REDHAT_DIRECTORY_SERVER )
Riverbed Steelhead ( STEELHEAD )
RSA SecurID Access Identity Router ( RSA_SECURID )
Ruckus Networks ( RUCKUS_WIRELESS )
Salesforce ( SALESFORCE )
SentinelOne EDR ( SENTINEL_EDR )
SentinelOne Singularity Cloud Funnel ( SENTINELONE_CF )
SEPPmail Secure Email ( SEPPMAIL )
ServiceNow CMDB ( SERVICENOW_CMDB )
SiteMinder Web Access Management ( CA_SSO_WEB )
Snare System Diagnostic Logs ( SNARE_SOLUTIONS )
Solarwinds Kiwi Syslog Server ( SOLARWINDS_KSS )
SonicWall ( SONIC_FIREWALL )
Sonrai Enterprise Cloud Security Solution ( SONRAI )
Symantec DLP ( SYMANTEC_DLP )
Symantec Endpoint Protection ( SEP )
Symantec VIP Authentication Hub ( SYMANTEC_VIP_AUTHHUB )
Symantec Web Security Service ( SYMANTEC_WSS )
Sysdig ( SYSDIG )
Tableau ( TABLEAU )
Terraform Enterprise Audit ( TERRAFORM_ENTERPRISE )
Thinkst Canary ( THINKST_CANARY )
Thycotic ( THYCOTIC )
Trend Micro ( TIPPING_POINT )
Ubika WAAP ( UBIKA_WAAP )
Ubika Waf ( UBIKA_WAF )
UPX AntiDDoS ( UPX_ANTIDDOS )
Vectra Stream ( VECTRA_STREAM )
Velo Firewall ( VELO_FIREWALL )
VeridiumID by Veridium ( VERIDIUM_ID )
Versa Firewall ( VERSA_FIREWALL )
Virtru Email Encryption ( VIRTRU_EMAIL_ENCRYPTION )
VMware ESXi ( VMWARE_ESX )
VMware NSX ( VMWARE_NSX )
VMware vCenter ( VMWARE_VCENTER )
Windows DNS ( WINDOWS_DNS )
Windows Event ( WINEVTLOG )
Windows Event (XML) ( WINEVTLOG_XML )
Windows Local Administrator Password Solution ( MICROSOFT_LAPS )
Workday ( WORKDAY )
Workspace Activities ( WORKSPACE_ACTIVITY )
Zscaler ( ZSCALER_WEBPROXY )
Zscaler CASB ( ZSCALER_CASB )
Zscaler Internet Access Audit Logs ( ZSCALER_INTERNET_ACCESS )
Zscaler Private Access ( ZSCALER_ZPA )
Zscaler Secure Private Access Audit Logs ( ZSCALER_ZPA_AUDIT )
The following log types were added without a default parser. Each parser is listed by product name and log_type value, if applicable.
Backstage ( BACKSTAGE )
Bitwarden Password Manager User Context ( BITWARDEN_USER_CONTEXT )
Boomi App ( BOOMI_APP )
ChatGPT Audit Logs ( CHATGPT_AUDIT_LOGS )
Cloudflare Warp ( CLOUDFLARE_WARP )
Coda Io ( CODA_IO )
Fortinet Fortimanager ( FORTINET_FORTIMANAGER )
Fusion Auth ( FUSION_AUTH )
Google Cloud Abuse Events ( GCP_ABUSE_EVENTS )
Google Cloud Monitoring Alerts ( GCP_MONITORING_ALERTS )
Gong ( GONG )
Grafana ( GRAFANA )
IBM Cloud Activity Tracker ( IBM_CLOUD_ACTIVITY_TRACKER )
IBM Cloud System ( IBM_CLOUD_SYSTEM )
Incident Io ( INCIDENT_IO )
Kentik DDoS Detection ( KENTIK_ALERTS )
Lockself Lockpass ( LOCKSELF_LOCKPASS )
Magic Collaboration Studio ( MAGIC_CS )
Metaswitch Perimeta ( METASWITCH_PERIMETA )
Microsoft Defender Endpoint for iOS Logs ( MICROSOFT_DEFENDER_ENDPOINT_IOS )
9NowAudit ( NINENOW_AUDIT )
Oracle Cloud Guard ( OCI_CLOUDGUARD )
Oort Security Tool ( OORT )
OpsRamp ( OPSRAMP )
Ops Genie ( OPS_GENIE )
People Strong ( PEOPLE_STRONG )
Pingdom ( PINGDOM )
Proofpoint Tap Campaign ( PROOFPOINT_TAP_CAMPAIGN )
Proofpoint Tap Forensics ( PROOFPOINT_TAP_FORENSICS )
Proofpoint Tap People ( PROOFPOINT_TAP_PEOPLE )
Proofpoint Tap Threats ( PROOFPOINT_TAP_THREATS )
Proofpoint Tis IOC ( PROOFPOINT_TIS_IOC )
Push Security ( PUSH_SECURITY )
Recordedfuture Alerts ( RECORDEDFUTURE_ALERTS )
Rippling Activity Logs ( RIPPLING_ACTIVITYLOGS )
Sentry ( SENTRY )
Servertech PDUs ( SERVERTECH_PDUS )
Sprinkledata(DWH) ( SPRINKLEDATA_DWH )
Tenable Audit ( TENABLE_AUDIT )
TINTRI ( TINTRI )
WPass ( WPASS )
WPEngine ( WPENGINE )
For a list of supported log types and details about default parser changes, see Supported log types and default parsers .
Deprecated
The Google Security Operations alert metadata fields for UDM idm.is_significant and idm.is_alert have been deprecated. Use YARA-L detection rule alerts for alert metadata.
July 18, 2024
Change
When you migrate an existing Google SecOps instance so that it is bound to a Google Cloud project , you can also use auto-generated commands to migrate your existing feature RBAC configuration to IAM permissions and roles. For more information, see Migrate existing permissions to IAM .
July 17, 2024
Deprecated
On December 31, 2024, the managed BigQuery data lake for export will not be accessible to Google SecOps customers except for customers in the Enterprise Plus Tier. Enterprise Plus Tier customers will retain access until a replacement is available. Other customers can use their own BigQuery instance to export telemetry data, a feature currently in preview. For more information, see Configure a data export to BigQuery in a self-managed Google Cloud project .
July 15, 2024
Deprecated
The third-party API feed Symantec Event Export has been discontinued due to the deprecation of Symantec Event Export API. To ingest data, use a Cloud Storage bucket. For more information, see Add a feed .
June 26, 2024
Feature
You can use the BindPlane agent to collect Windows event logs, query SQL databases, read logs from files, and receive logs using syslog. The agent sends data directly to the Google Security Operations ingestion API or to a Google SecOps forwarder. For more information, see Use the BindPlane agent .
June 24, 2024
Change
During the Google Security Operations onboarding steps, you can now specify identity provider groups that include administrators who configure user access to SOAR-related features. For more information, see Link Google SecOps to Google Cloud services .
Change
You can now configure Cloud Identity or Google Workspace as an identity provider during the Google Security Operations onboarding steps. For more information about onboarding, see Onboarding or migrating a Google Security Operations instance .
June 18, 2024
Feature
Google SecOps now integrates with Access Transparency .
If you enabled Access Transparency in your organization, Google SecOps writes Access Transparency logs when any Google personnel accesses customer content that supports SIEM features.
For more information, see enabling Access Transparency and viewing Access Transparency logs .
Change
lastAlertStatusChangeTime is added to the response of the GetRule Detection Engine API. This indicates when alertingEnabled was last updated from true to false or from false to true .
The field is also added to RuleDeployment of Chronicle API v1 alpha.
Feature
Google SecOps now supports data RBAC . This feature enables you to control user access to data within your Google SecOps environment based on their assigned roles.
June 07, 2024
Change
The syntax for placeholders in UDM saved searches is updated. See Save a search for the new syntax.
May 30, 2024
Change
The following supported default parsers have changed. Each is listed by product name and log_type value, if applicable.
Abnormal Security ( ABNORMAL_SECURITY )
Akamai DNS ( AKAMAI_DNS )
Akamai WAF ( AKAMAI_WAF )
Apigee ( GCP_APIGEE_X )
Array Networks SSL VPN ( ARRAYNETWORKS_VPN )
AWS CloudFront ( AWS_CLOUDFRONT )
AWS Cloudtrail ( AWS_CLOUDTRAIL )
Azure AD ( AZURE_AD )
Azure AD Directory Audit ( AZURE_AD_AUDIT )
Azure AD Sign-In ( AZURE_AD_SIGNIN )
Barracuda Email ( BARRACUDA_EMAIL )
Barracuda Firewall ( BARRACUDA_FIREWALL )
Blue Coat Proxy ( BLUECOAT_WEBPROXY )
BMC AMI Defender ( BMC_AMI_DEFENDER )
Carbon Black ( CB_EDR )
Check Point ( CHECKPOINT_FIREWALL )
Check Point Sandblast ( CHECKPOINT_EDR )
Checkpoint Audit ( CHECKPOINT_AUDIT )
Cisco AMP ( CISCO_AMP )
Cisco EStreamer ( CISCO_ESTREAMER )
Cisco FireSIGHT Management Center ( CISCO_FIRESIGHT )
Cisco ISE ( CISCO_ISE )
Cisco Router ( CISCO_ROUTER )
Cisco Switch ( CISCO_SWITCH )
Cisco Umbrella DNS ( UMBRELLA_DNS )
Cisco VPN ( CISCO_VPN )
Cisco WLC/WCS ( CISCO_WIRELESS )
Citrix Netscaler ( CITRIX_NETSCALER )
Cloud Audit Logs ( N/A )
Cloud SQL ( GCP_CLOUDSQL )
Cloud Storage Context ( N/A )
Cohesity ( COHESITY )
CrowdStrike Falcon ( CS_EDR )
CyberArk Privileged Access Manager (PAM) ( CYBERARK_PAM )
ESET AV ( ESET_AV )
F5 ASM ( F5_ASM )
F5 BIGIP LTM ( F5_BIGIP_LTM )
F5 VPN ( F5_VPN )
Forcepoint DLP ( FORCEPOINT_DLP )
FortiGate ( FORTINET_FIREWALL )
GMAIL Logs ( GMAIL_LOGS )
HID DigitalPersona ( HID_DIGITALPERSONA )
Honeyd ( HONEYD )
HP Aruba (ClearPass) ( CLEARPASS )
IBM AS/400 ( IBM_AS400 )
IBM DS8000 Storage ( IBM_DS8000 )
IBM Security Verify ( IBM_SECURITY_VERIFY )
Infoblox ( INFOBLOX )
Island Browser logs ( ISLAND_BROWSER )
JAMF CMDB ( JAMF )
JumpCloud Directory Insights ( JUMPCLOUD_DIRECTORY_INSIGHTS )
Juniper Mist ( JUNIPER_MIST )
Kubernetes Node ( KUBERNETES_NODE )
Linux Auditing System (AuditD) ( AUDITD )
ManageEngine ADAudit Plus ( ADAUDIT_PLUS )
Microsoft AD FS ( ADFS )
Microsoft Azure Activity ( AZURE_ACTIVITY )
Microsoft Azure Resource ( AZURE_RESOURCE_LOGS )
Microsoft CyberX ( CYBERX )
Microsoft Defender for Endpoint ( MICROSOFT_DEFENDER_ENDPOINT )
Microsoft Graph Activity Logs ( MICROSOFT_GRAPH_ACTIVITY_LOGS )
Microsoft Graph API Alerts ( MICROSOFT_GRAPH_ALERT )
Microsoft SQL Server ( MICROSOFT_SQL )
Mikrotik Router ( MIKROTIK_ROUTER )
NetDocuments Solutions ( NETDOCUMENTS )
Netwrix ( NETWRIX )
Office 365 ( OFFICE_365 )
Office 365 Message Trace ( OFFICE_365_MESSAGETRACE )
Okta ( OKTA )
OneLogin ( ONELOGIN_SSO )
Opengear Remote Management ( OPENGEAR )
Palo Alto Networks Firewall ( PAN_FIREWALL )
pfSense ( PFSENSE )
PostFix Mail ( POSTFIX_MAIL )
Proofpoint Sendmail Sentrion ( PROOFPOINT_SENDMAIL_SENTRION )
Proofpoint Tap Alerts ( PROOFPOINT_MAIL )
Pulse Secure ( PULSE_SECURE_VPN )
Qumulo FS ( QUMULO_FS )
Rapid7 ( RAPID7_NEXPOSE )
Rapid7 Insight ( RAPID7_INSIGHT )
Rubrik Polaris ( RUBRIK_POLARIS )
SailPoint IAM ( SAILPOINT_IAM )
SAP SuccessFactors ( SAP_SUCCESSFACTORS )
Semperis DSP ( SEMPERIS_DSP )
Sentinelone Alerts ( SENTINELONE_ALERT )
SentinelOne EDR ( SENTINEL_EDR )
Signal Sciences WAF ( SIGNAL_SCIENCES_WAF )
Snare System Diagnostic Logs ( SNARE_SOLUTIONS )
SonicWall ( SONIC_FIREWALL )
Sophos Central ( SOPHOS_CENTRAL )
Sophos UTM ( SOPHOS_UTM )
Spur data feeds ( SPUR_FEEDS )
Suricata EVE ( SURICATA_EVE )
Symantec DLP ( SYMANTEC_DLP )
Symantec Endpoint Protection ( SEP )
Symantec VIP Authentication Hub ( SYMANTEC_VIP_AUTHHUB )
Tanium Audit ( TANIUM_AUDIT )
Thinkst Canary ( THINKST_CANARY )
Trend Micro Vision One ( TRENDMICRO_VISION_ONE )
Twingate ( TWINGATE )
Unix system ( NIX_SYSTEM )
Vectra Detect ( VECTRA_DETECT )
Veeam ( VEEAM )
Verba Recording System ( VERBA_REC )
VeridiumID by Veridium ( VERIDIUM_ID )
VMware ESXi ( VMWARE_ESX )
Windows Defender ATP ( WINDOWS_DEFENDER_ATP )
Windows DNS ( WINDOWS_DNS )
Windows Event ( WINEVTLOG )
Windows Event (XML) ( WINEVTLOG_XML )
Winscp ( WINSCP )
WordPress ( WORDPRESS_CMS )
Workspace Activities ( WORKSPACE_ACTIVITY )
Zeek TSV ( BRO_TSV )
Zix Email Encryption ( ZIX_EMAIL_ENCRYPTION )
Zscaler ( ZSCALER_WEBPROXY )
ZScaler DNS ( ZSCALER_DNS )
Zscaler Private Access ( ZSCALER_ZPA )
The following log types, without a default parser, were added. Each is listed by product name and log_type value, if applicable.
Akamai Log Delivery Service ( AKAMAI_LDS )
AudioCodes Voice DNA ( AUDIOCODES )
Amazon API Gateway ( AWS_API_GATEWAY )
Axway ( AXWAY )
Biztalk ( BIZTALK )
Check Point FDE ( CHECKPOINT_FDE )
Cimcor | File Integrity Monitoring ( CIMCOR )
CS Alerts ( CS_ALERTS )
Custom CSV Log ( CUSTOM_CSV_LOG )
Cyral ( CYRAL )
Druva ( DRUVA )
Entrust DataControl Audit ( ENTR_DATACTRL_AUDIT )
Ergon Informatik Airlock IAM ( ERGON_INFORMATIK_AIRLOCK_IAM )
Eset Protect Platform ( ESET_PROTECT_PLATFORM )
Exim Internet Mailer ( EXIM_INTERNET_MAILER )
FM Systems Workplace Management ( FM_SYSTEMS )
GluWare Network Automation ( GLUWARE_NETWORK_AUTOMATION )
Guidewire Billing Center ( GUIDEWIRE_BILLING_CENTER )
Guidewire Claim Center ( GUIDEWIRE_CLAIM_CENTER )
Guidewire Policy Center ( GUIDEWIRE_POLICY_CENTER )
HAVI Connect ( HAVI_CONNECT )
IBM OpenPages ( IBM_OPENPAGES )
Ingrian Networks DataSecure Appliance ( INGRIAN_NETWORKS_DATASECURE_APPLIANCE )
iSecurity | Security Services and Remediation ( ISECURITY )
iTop ( ITOP )
Microsoft Defender for Office 365 ( MICROSOFT_DEFENDER_MAIL )
Microsoft Graph Risky Users ( MICROSOFT_GRAPH_RISKY_USERS )
NetApp BlueXP ( NETAPP_BLUEXP )
Netgate Firewall ( NETGATE_FIREWALL )
1KOSMOS | Identity and Authentication ( ONEKOSMOS )
Palo Alto Global Protect SVC ( PAN_GPSVC )
Palo Alto SSLVPN Access ( PAN_SSLVPN_ACCESS )
Palo Alto Telemetry ( PAN_TELEMETRY )
Proofpoint Endpoint Data Loss Prevention ( PROOFPOINT_ENDPOINT_DLP )
SAP ERP ( SAP_ERP )
Ubika WAAP ( UBIKA_WAAP )
Webroot Endpoint Protection ( WEBROOT )
Wolters Kluwer Teammate ( WOLTERS_KLUWER_TEAMMATE )
Xirrus Wireless Controller ( XIRRUS )
For a list of supported log types and details about default parser changes, see Supported log types and default parsers .
May 22, 2024
Feature
Enhanced the existing curated detections for AWS rule sets in the Cloud Threats category to add 40 new detections. These new rules, added to existing rule sets, expand the coverage and are designed to identify tactics and techniques commonly employed by malicious actors that use popular open source offensive security tools against AWS resources.
May 14, 2024
Change
Google SecOps now supports the following functions in Detection Engine rules:
fingerprint
sample_rate
For more information about these functions, see YARA-L 2.0 language syntax .
May 08, 2024
Change
When Applied Threat Intelligence is enabled, it ingests IOCs curated by Mandiant Threat Intelligence with an IC-Score greater than 80 and generates an alert when a match is found.
May 06, 2024
Feature
Gemini for investigation assistance
Gemini for investigation assistance can now support you with the following:
Search : Gemini can help you build, edit, and run searches targeted toward relevant events using natural language prompts.
Search summaries : Gemini can automatically summarize search results after every search and subsequent filter action. Gemini can also answer contextual follow-up questions about the summaries it provides.
Rule generation : Gemini can create new YARA-L rules from the UDM search queries it generates.
Security questions and threat intelligence analysis : Gemini can answer general security domain questions and specific threat intelligence questions. Gemini can provide summaries about threat actors, IOCs, and other threat intelligence topics.
Incident remediation : Based on the event information returned, Gemini can suggest follow-on steps.
For more information, see Use Gemini to investigate security issues .
May 02, 2024
Change
The following supported default parsers have changed. Each is listed by product name and log_type value, if applicable.
AIX system ( AIX_SYSTEM )
Arcsight CEF ( ARCSIGHT_CEF )
Arista Switch ( ARISTA_SWITCH )
Aruba ( ARUBA_WIRELESS )
Aruba Switch ( ARUBA_SWITCH )
Attivo Networks ( ATTIVO )
AWS Cloudtrail ( AWS_CLOUDTRAIL )
AWS Control Tower ( AWS_CONTROL_TOWER )
AWS Elastic Load Balancer ( AWS_ELB )
AWS WAF ( AWS_WAF )
Azure AD ( AZURE_AD )
Azure AD Directory Audit ( AZURE_AD_AUDIT )
Azure AD Organizational Context ( AZURE_AD_CONTEXT )
Azure Application Gateway ( AZURE_GATEWAY )
Azure Storage Audit ( AZURE_STORAGE_AUDIT )
Azure WAF ( AZURE_WAF )
Barracuda Firewall ( BARRACUDA_FIREWALL )
BeyondTrust Endpoint Privilege Management ( BEYONDTRUST_ENDPOINT )
BigQuery ( N/A )
Blue Coat Proxy ( BLUECOAT_WEBPROXY )
Brocade Switch ( BROCADE_SWITCH )
Check Point ( CHECKPOINT_FIREWALL )
Cisco ASA ( CISCO_ASA_FIREWALL )
Cisco Firepower NGFW ( CISCO_FIREPOWER_FIREWALL )
Cisco FireSIGHT Management Center ( CISCO_FIRESIGHT )
Cisco Internetwork Operating System ( CISCO_IOS )
Cisco ISE ( CISCO_ISE )
Cisco Meraki ( CISCO_MERAKI )
Cisco VPN ( CISCO_VPN )
Cisco WLC/WCS ( CISCO_WIRELESS )
Citrix Netscaler ( CITRIX_NETSCALER )
Claroty Enterprise Management Console ( CLAROTY_EMC )
Cloud Audit Logs ( N/A )
Cloud Intrusion Detection System ( GCP_IDS )
Corelight ( CORELIGHT )
CrowdStrike Detection Monitoring ( CS_DETECTS )
CrowdStrike Falcon ( CS_EDR )
CyberArk ( CYBERARK )
Cyberark Privilege Cloud ( CYBERARK_PRIVILEGE_CLOUD )
Cybergatekeeper NAC ( CYBERGATEKEEPER_NAC )
Darktrace ( DARKTRACE )
Dell ECS Enterprise Object Storage ( DELL_ECS )
Dell Switch ( DELL_SWITCH )
Elastic Packet Beats ( ELASTIC_PACKETBEATS )
ESET ( ESET_EDR )
ESET AV ( ESET_AV )
F5 Advanced Firewall Management ( F5_AFM )
F5 ASM ( F5_ASM )
F5 BIGIP LTM ( F5_BIGIP_LTM )
FireEye HX ( FIREEYE_HX )
FireEye NX Audit ( FIREEYE_NX_AUDIT )
Firewall Rule Logging ( N/A )
Forcepoint DLP ( FORCEPOINT_DLP )
Forescout NAC ( FORESCOUT_NAC )
Forgerock OpenIdM ( FORGEROCK_OPENIDM )
FortiGate ( FORTINET_FIREWALL )
Fortinet FortiAnalyzer ( FORTINET_FORTIANALYZER )
Fortra Powertech SIEM Agent ( FORTRA_POWERTECH_SIEM_AGENT )
Cloud NAT ( N/A )
GCP_SWP ( GCP_SWP )
Gitlab ( GITLAB )
GMAIL Logs ( GMAIL_LOGS )
GMV Checker ATM Security ( GMV_CHECKER )
Guardicore Centra ( GUARDICORE_CENTRA )
HPE BladeSystem C7000 ( HPE_BLADESYSTEM_C7000 )
HYPR MFA ( HYPR_MFA )
IBM AS/400 ( IBM_AS400 )
IBM DS8000 Storage ( IBM_DS8000 )
IBM Guardium ( GUARDIUM )
IBM Tape Storages ( IBM_LTO )
IBM Tivoli ( IBM_TIVOLI )
IBM-i Operating System ( IBM_I )
Illumio Core ( ILLUMIO_CORE )
Imperva ( IMPERVA_WAF )
Imperva Advanced Bot Protection ( IMPERVA_ABP )
Imperva SecureSphere Management ( IMPERVA_SECURESPHERE )
Infoblox ( INFOBLOX )
ION Spectrum ( ION_SPECTRUM )
Ipswitch MOVEit Transfer ( IPSWITCH_MOVEIT_TRANSFER )
Jamf Protect Alerts ( JAMF_PROTECT )
Jamf Protect Telemetry ( JAMF_TELEMETRY )
Juniper Junos ( JUNIPER_JUNOS )
Juniper MX Router ( JUNIPER_MX )
Kubernetes Node ( KUBERNETES_NODE )
LastPass Password Management ( LASTPASS )
Linux Auditing System (AuditD) ( AUDITD )
McAfee Enterprise Security Manager ( MCAFEE_ESM )
Medigate IoT ( MEDIGATE_IOT )
Microsoft AD ( WINDOWS_AD )
Microsoft Azure Activity ( AZURE_ACTIVITY )
Microsoft Defender for Endpoint ( MICROSOFT_DEFENDER_ENDPOINT )
Microsoft Defender for Identity ( MICROSOFT_DEFENDER_IDENTITY )
Microsoft Exchange ( EXCHANGE_MAIL )
Microsoft Graph API Alerts ( MICROSOFT_GRAPH_ALERT )
Microsoft IAS Server ( MICROSOFT_IAS )
Microsoft Intune ( AZURE_MDM_INTUNE )
Microsoft SQL Server ( MICROSOFT_SQL )
Mongo Database ( MONGO_DB )
Netscout Arbor Sightline ( ARBOR_SIGHTLINE )
Netskope Web Proxy ( NETSKOPE_WEBPROXY )
NGFW Enterprise ( GCP_NGFW_ENTERPRISE )
Office 365 ( OFFICE_365 )
Office 365 Message Trace ( OFFICE_365_MESSAGETRACE )
Opengear Remote Management ( OPENGEAR )
Oracle ( ORACLE_DB )
OSQuery ( OSQUERY_EDR )
OSSEC ( OSSEC )
Palo Alto Cortex XDR Alerts ( CORTEX_XDR )
Palo Alto Networks Firewall ( PAN_FIREWALL )
Palo Alto Prisma Cloud ( PAN_PRISMA_CLOUD )
PerimeterX Bot Protection ( PERIMETERX_BOT_PROTECTION )
Phishlabs ( PHISHLABS )
Proofpoint Tap Alerts ( PROOFPOINT_MAIL )
Pulse Secure ( PULSE_SECURE_VPN )
Riverbed Steelhead ( STEELHEAD )
RSA SecurID Access Identity Router ( RSA_SECURID )
SAP SM20 ( SAP_SM20 )
SAP SuccessFactors ( SAP_SUCCESSFACTORS )
SAP Webdispatcher ( SAP_WEBDISP )
Security Command Center Posture Violation ( GCP_SECURITYCENTER_POSTURE_VIOLATION )
Security Command Center Threat ( N/A )
Security Command Center Toxic Combination ( GCP_SECURITYCENTER_TOXIC_COMBINATION )
Sentinelone Alerts ( SENTINELONE_ALERT )
SentinelOne EDR ( SENTINEL_EDR )
SentinelOne Singularity Cloud Funnel ( SENTINELONE_CF )
Snare System Diagnostic Logs ( SNARE_SOLUTIONS )
Solaris system ( SOLARIS_SYSTEM )
SonicWall ( SONIC_FIREWALL )
Sonicwall Secure Mobile Access ( SONICWALL_SMA )
Splunk Platform ( SPLUNK )
Squid Web Proxy ( SQUID_WEBPROXY )
Suricata EVE ( SURICATA_EVE )
Suricata IDS ( SURICATA_IDS )
Swift Alliance Messaging Hub ( SWIFT_AMH )
Symantec CloudSOC CASB ( SYMANTEC_CASB )
Symantec DLP ( SYMANTEC_DLP )
Tenable OT ( TENABLE_OT )
Tetragon Ebpf Audit Logs ( TETRAGON_EBPF_AUDIT_LOGS )
Trellix HX Event Streamer ( TRELLIX_HX_ES )
Trend Micro ( TIPPING_POINT )
Trend Micro Cloud one ( TRENDMICRO_CLOUDONE )
Trend Micro Deep Security ( TRENDMICRO_DEEP_SECURITY )
TrendMicro Apex Central ( TRENDMICRO_APEX_CENTRAL )
TrendMicro Web Proxy ( TRENDMICRO_WEBPROXY )
Unifi AP ( UNIFI_AP )
Unix system ( NIX_SYSTEM )
Vectra Detect ( VECTRA_DETECT )
VeridiumID by Veridium ( VERIDIUM_ID )
VPC Flow Logs ( GCP_VPC_FLOW )
Windows Defender ATP ( WINDOWS_DEFENDER_ATP )
Windows DNS ( WINDOWS_DNS )
Windows Event ( WINEVTLOG )
Windows Event (XML) ( WINEVTLOG_XML )
Windows Network Policy Server ( WINDOWS_NET_POLICY_SERVER )
Windows Sysmon ( WINDOWS_SYSMON )
Workspace Activities ( WORKSPACE_ACTIVITY )
Workspace Alerts ( WORKSPACE_ALERTS )
Workspace ChromeOS Devices ( WORKSPACE_CHROMEOS )
Workspace Groups ( WORKSPACE_GROUPS )
Workspace Mobile Devices ( WORKSPACE_MOBILE )
Workspace Privileges ( WORKSPACE_PRIVILEGES )
Workspace Users ( WORKSPACE_USERS )
YAMAHA ROUTER RTX1200 ( YAMAHA_ROUTER )
Zeek JSON ( BRO_JSON )
Zimperium ( ZIMPERIUM )
Zscaler ( ZSCALER_WEBPROXY )
Zscaler CASB ( ZSCALER_CASB )
ZScaler NGFW ( ZSCALER_FIREWALL )
The following log types, without a default parser, were added. Each is listed by product name and log_type value, if applicable.
Adaxes ( ADAXES )
Air Table ( AIR_TABLE )
Alert Enterprise Guardian ( ALERT_GUARDIAN )
Amavis ( AMAVIS )
Atlassian Beacon ( ATLASSIAN_BEACON )
Banner dd ( BANNER_DD )
BetterStack Uptime ( BETTERSTACK_UPTIME )
BloodHound ( BLOODHOUND )
Core Privileged Access Manager (BoKS) ( BOKS )
Cisco Secure Access ( CISCO_SECURE_ACCESS )
Cleafy ( CLEAFY )
Clear Bank Portal Audit ( CLEARBANK_PORTAL )
CloudBees ( CLOUDBEES )
Comforte SecurDPS ( COMFORTE_SECURDPS )
Control Plane ( CONTROL_PLANE )
Corrata ( CORRATA )
Cubist Audit ( CUBIST_AUDIT )
C Zentrix ( C_ZENTRIX )
DefectDojo ( DEFECTDOJO )
Dmarcian ( DMARCIAN )
DocuSign ( DOCUSIGN )
Duo Activity Logs ( DUO_ACTIVITY )
E2 Guardian ( E2_GUARDIAN )
Egress Defend ( EGRESS_DEFEND )
Egress Prevent ( EGRESS_PREVENT )
Emsisoft AntiVirus ( EMSISOFT_ANTIVIRUS )
F5 System Logs ( F5_SYSTEM_LOGS )
Fastly CDN ( FASTLY_CDN )
FireEye CMS ( FIREEYE_CMS )
Forcepoint Mail Relay ( FORCEPOINT_MAIL_RELAY )
Google Ads ( GOOGLE_ADS )
H3C Comware Platform Switch
Halcyon Anti Ransomware ( HALCYON )
Halo ( HALO )
HP Poly ( HP_POLY )
Huawei CloudEngine ( HUAWEI_CLOUDENGINE )
Intruder.IO ( INTRUDER_IO )
Ivanti Connect Secure ( IVANTI_CONNECT_SECURE )
Keyfactor ( KEYFACTOR )
Kyverno ( KYVERNO )
LaunchDarkly ( LAUNCH_DARKLY )
LeanIX Enterprise ( LEANIX )
Leanix CMDB ( LEANIX_CMDB )
Lucid ( LUCID )
Lumeta Spectre ( LUMETA )
ManageEngine Asset Explorer ( MANAGE_ENGINE_ASSET_EXPLR )
ManageEngine Endpoint Central ( MANAGE_ENGINE_ENDPT_CNTRL )
Mandiant Digital Threat Monitoring ( MANDIANT_DTM_ALERTS )
Manhattan Warehouse Management System ( MANHATTAN_WMS )
Mend IO ( MEND_IO )
Meta Marketing ( META_MARKETING )
Miasma SecretScanner ( MIASMA_SECRETSCANNER )
Microsoft Ads ( MICROSOFT_ADS )
Microsoft Purview ( MICROSOFT_PURVIEW )
ModSecurity ( MODSECURITY )
Netapp Storagegrid ( NETAPP_STORAGEGRID )
NetBrain ( NETBRAIN )
Netenrich Entity Context ( NETENRICH_ENTITY_CONTEXT )
Netwrix Activity Monitor ( NETWRIX_ACTIVITY_MONITOR )
Netwrix Stealth Intercept ( NETWRIX_STEALTH_INTERCEPT )
Netwrix Threat Manager ( NETWRIX_THREAT_MANAGER )
Nexus Sonatype ( NEXUS_SONATYPE )
Oracle Fusion ( ORACLE_FUSION )
PAGELY ( PAGELY )
Palantir ( PALANTIR )
Proofpoint Meta ( PROOFPOINT_META )
Qumulo FS ( QUMULO_FS )
Radware Alteon ( RADWARE_ALTEON )
SailPoint IdentityIQ ( SAILPOINT_IIQ )
Sentinelone Activity ( SENTINELONE_ACTIVITY )
Siga Level Zero OT Resilience ( SIGA )
Site24x7 ( SITE24X7 )
Winevtlog Snare ( SNARE_WINEVTLOG )
Solar System ( SOLAR_SYSTEM )
Stealthbits DLP ( STEALTHBITS_DLP )
Symantec VIP Authentication Hub ( SYMANTEC_VIP_AUTHHUB )
Temenos Journey Manager System Event Publisher ( TEMENOS_MANAGER_SYSTEMEVENT )
Teradata Aster ( TERADATA_ASTER )
Tiktok for Developers ( TIKTOK )
Transmit BindID ( TRANSMIT_BINDID )
Trend Micro Vision One Audit ( TRENDMICRO_VISION_ONE_AUDIT )
Trend Micro Vision One Observerd Attack Techniques ( TRENDMICRO_VISION_ONE_OBSERVERD_ATTACK_TECHNIQUES )
Trend Micro Vision One Workbench ( TRENDMICRO_VISION_ONE_WORKBENCH )
TrueNAS ( TRUENAS )
E-Motional Transparent Screen Lock TSL RFID ( TSL_PRO )
UPX AntiDDoS ( UPX_ANTIDDOS )
Verba Recording System ( VERBA_REC )
Vercara ( VERCARA )
Veza Access Control Platform ( VEZA )
Web Methods Api Gateway ( WEBMETHODS_API_GATEWAY )
For a list of supported log types and details about default parser changes, see Supported log types and default parsers .
April 26, 2024
Feature
You can now set up feeds to push logs using an HTTPS endpoint by using either the feed management user interface or the feed management API . You can use the following feed management source types to set up ingestion using an HTTPS endpoint:
Amazon Data Firehose
Google Cloud Pub/Sub
Webhooks
You can also generate a secret key and API key to authenticate feeds that use Amazon Data Firehose and webhooks as the feed source type.
Change
The feed management feature is now enhanced to include the following:
Feed names : You can assign custom names to new and existing data feeds.
Troubleshooting information : You can diagnose error feeds by accessing detailed information about the cause of an issue and recommended actions.
Last succeeded time : Stay informed about the status of a feed, with a timestamp identifying when data was last successfully fetched by each feed.
April 22, 2024
Deprecated
The ingestion alerting system using Chronicle has been deprecated. This system will no longer be updated, and no alerts will be sent from this system after September 01, 2024. We recommend that you use the Cloud Monitoring integration which provides more flexibility in alert logic, alert workflow, and integration with third-party ticketing systems.
Deprecated
The ingestion_stats table in BigQuery is deprecated and will no longer be updated after May 15, 2024. We recommend that you use the Chronicle ingestion_metrics table in BigQuery, which provides more accurate ingestion metrics.
April 15, 2024
Deprecated
The following labels fields for UDM nouns are deprecated and these fields will not appear in the search results after November 29, 2024: about.labels , intermediary.labels , observer.labels , principal.labels , src.labels , security_result.about.labels , and target.labels . For existing parsers, in addition to these UDM fields, the logs fields are also mapped to key and value additional.fields UDM fields. For new parsers, the key and value settings in additional.fields UDM fields are used instead of the deprecated labels UDM fields. We recommend that you update the existing rules to use the key and value settings in the additional.fields UDM fields instead of the deprecated labels UDM fields.
April 03, 2024
Feature
Curated Detections has been enhanced with new detection content for Cloud Threats category . These new rule sets identify threats in AWS environments and are generally available to customers with a Chronicle Security Operations Enterprise and Enterprise Plus license.
April 02, 2024
Announcement
On or after May 1, 2024, in an effort to improve enrichment quality, the enrichment process using telemetry events and entities will prioritize values set by parsers over values from aliases in unenriched events. If a parser does not set the value, the enrichment process will set the enriched value to using aliases.
March 29, 2024
Feature
Chronicle now supports direct ingestion and parsing of Google Cloud Next Generation Firewall (NGFW) Enterprise logs.
March 25, 2024
Feature
Chronicle Applied Threat Intelligence helps you identify and respond to threats. When enabled, it ingests IOCs curated by Mandiant Threat Intelligence with an IC-Score greater than 80 and generates an error when a match is found. The following are some of the features of Applied Threat Intelligence.
Event-level enrichment : All telemetry in Chronicle is enriched with Google Threat Intelligence which is a combination of Mandiant and Virus Total, including all threat intelligence associations like campaigns and actors.
Sophisticated indicator matching : Curated out-of-the-box detections that deliver sophisticated indicator matching using augmented prioritization logic, noise reduction based on customer environment context, and other correlation techniques to maximize signal to noise.
Active breach alerting : Uses Mandiant's incident response intelligence to alert on potential active breaches delivering on our no patient 1 vision.
Curated behavioral detections for emerging threats : To protect against newly emerging risks and tactics, techniques, and procedures (TTPs), Applied Threat Intelligence uses real-time insights.
DIY detection engineering and response automation : Access to Fusion intelligence (formerly known as Mandiant Fusion) for the following.
Customer authoring of rules
Customer development of response playbooks
Curated views for Investigation and triage Insights : Applied Threat Intelligence provides curated views that show valuable associations between an indicator and threat actor, threat campaign, or malware, statistics about a threat observed in customer environments. These views are invaluable for all security operations workflows.
For more information about Applied Threat Intelligence, see Applied Threat Intelligence overview .
This note incorrectly states that an error is generated when an IOC match is found. See the entry for May 8, 2024 for the updated statement.
March 22, 2024
Change
Chronicle has added a new rule set to Cloud Threat Detections , called Serverless Threats , that detects activity associated with potential compromise or abuse of server-less resources in Google Cloud, such as Cloud Run and Cloud Functions.
Feature
Chronicle now supports direct ingestion and parsing of reCAPTCHA Enterprise logs from Google Cloud.
March 20, 2024
Change
There is no longer a limit on the number of feeds you can create for the same log type in Feed Management.
March 15, 2024
Feature
Chronicle has expanded Cloud Threat Detections to create a detection when findings from Security Command Center Event Threat Detections , Cloud Armor , Sensitive Actions Service , and Custom modules for Event Threat Detection are identified. These detections are available through the following rule sets: CDIR SCC Cloud IDS, CDIR SCC Cloud Armor, CDIR SCC Impact, CDIR SCC Enhanced Persistence, CDIR SCC Enhanced Defense Evasion, and CDIR SCC Custom Module.
March 14, 2024
Change
The following supported default parsers have changed. Each is listed by product name and log_type value, if applicable.
Akamai WAF ( AKAMAI_WAF )
Alcatel Switch ( ALCATEL_SWITCH )
Arcsight CEF ( ARCSIGHT_CEF )
Auth0 ( AUTH_ZERO )
AWS Cloudtrail ( AWS_CLOUDTRAIL )
AWS Config ( AWS_CONFIG )
AWS GuardDuty ( GUARDDUTY )
Azure AD ( AZURE_AD )
Azure AD Directory Audit ( AZURE_AD_AUDIT )
Azure App Service ( AZURE_APP_SERVICE )
Azure Key Vault logging ( AZURE_KEYVAULT_AUDIT )
BIND ( BIND_DNS )
Blue Coat Proxy ( BLUECOAT_WEBPROXY )
Box ( BOX )
Chrome Management ( N/A )
Cisco AMP ( CISCO_AMP )
Cisco Umbrella DNS ( UMBRELLA_DNS )
Cisco VPN ( CISCO_VPN )
Citrix Netscaler ( CITRIX_NETSCALER )
Cloud Audit Logs ( N/A )
Cloudflare ( CLOUDFLARE )
Cofense ( COFENSE_TRIAGE )
Corelight ( CORELIGHT )
CrowdStrike Falcon ( CS_EDR )
CSV Custom IOC ( CSV_CUSTOM_IOC )
Custom Application Access Logs ( CUSTOM_APPLICATION_ACCESS )
Cybergatekeeper NAC ( CYBERGATEKEEPER_NAC )
Extreme Wireless ( EXTREME_WIRELESS )
F5 ASM ( F5_ASM )
F5 BIGIP LTM ( F5_BIGIP_LTM )
Falco IDS ( FALCO_IDS )
FireEye ( FIREEYE_ALERT )
FireEye ETP ( FIREEYE_ETP )
ForgeRock Identity Cloud ( FORGEROCK_IDENTITY_CLOUD )
FortiGate ( FORTINET_FIREWALL )
GCP_APP_ENGINE ( GCP_APP_ENGINE )
HP Procurve Switch ( HP_PROCURVE )
IAM Context ( N/A )
IBM DB2 ( DB2_DB )
IBM Mainframe Storage ( IBM_MAINFRAME_STORAGE )
IBM Security Access Manager ( IBM_SAM )
Illumio Core ( ILLUMIO_CORE )
Imperva ( IMPERVA_WAF )
Infoblox ( INFOBLOX )
JAMF CMDB ( JAMF )
KerioControl Firewall ( KERIOCONTROL )
Microsoft Azure Activity ( AZURE_ACTIVITY )
Microsoft Azure Resource ( AZURE_RESOURCE_LOGS )
Microsoft Defender For Cloud ( MICROSOFT_DEFENDER_CLOUD_ALERTS )
Microsoft Defender for Endpoint ( MICROSOFT_DEFENDER_ENDPOINT )
Microsoft Exchange ( EXCHANGE_MAIL )
Microsoft Graph Activity Logs ( MICROSOFT_GRAPH_ACTIVITY_LOGS )
Microsoft Graph API Alerts ( MICROSOFT_GRAPH_ALERT )
Microsoft IIS ( IIS )
Microsoft System Center Endpoint Protection ( MICROSOFT_SCEP )
Mobile Endpoint Security ( LOOKOUT_MOBILE_ENDPOINT_SECURITY )
Mongo Database ( MONGO_DB )
Netscout OCI ( NETSCOUT_OCI )
Netskope ( NETSKOPE_ALERT )
Netskope Web Proxy ( NETSKOPE_WEBPROXY )
Network Policy Server ( MICROSOFT_NPS )
Nutanix Prism ( NUTANIX_PRISM )
Office 365 ( OFFICE_365 )
Okta ( OKTA )
OpenCanary ( OPENCANARY )
Ordr IoT ( ORDR_IOT )
Palo Alto Cortex XDR Alerts ( CORTEX_XDR )
Palo Alto Networks Firewall ( PAN_FIREWALL )
Palo Alto Prisma Cloud ( PAN_PRISMA_CLOUD )
PerimeterX Bot Protection ( PERIMETERX_BOT_PROTECTION )
Phishlabs ( PHISHLABS )
Proofpoint Sendmail Sentrion ( PROOFPOINT_SENDMAIL_SENTRION )
Pulse Secure ( PULSE_SECURE_VPN )
RH-ISAC ( RH_ISAC_IOC )
SailPoint IAM ( SAILPOINT_IAM )
Salesforce ( SALESFORCE )
Sap Business Technology Platform ( SAP_BTP )
Security Command Center Threat ( N/A )
Sentinelone Alerts ( SENTINELONE_ALERT )
Shibboleth IDP ( SHIBBOLETH_IDP )
Sourcefire ( SOURCEFIRE_IDS )
Splunk Attack Analyzer ( SPLUNK_ATTACK_ANALYZER )
STIX Threat Intelligence ( STIX )
Symantec CloudSOC CASB ( SYMANTEC_CASB )
Symantec DLP ( SYMANTEC_DLP )
Tanium Asset ( TANIUM_ASSET )
Thinkst Canary ( THINKST_CANARY )
Trend Micro Deep Security ( TRENDMICRO_DEEP_SECURITY )
Vectra Detect ( VECTRA_DETECT )
Vectra Stream ( VECTRA_STREAM )
VeridiumID by Veridium ( VERIDIUM_ID )
Wazuh ( WAZUH )
Windows Defender ATP ( WINDOWS_DEFENDER_ATP )
Windows DNS ( WINDOWS_DNS )
Windows Event ( WINEVTLOG )
Windows Event (XML) ( WINEVTLOG_XML )
Windows Local Administrator Password Solution ( MICROSOFT_LAPS )
wiz.io ( WIZ_IO )
Workspace Activities ( WORKSPACE_ACTIVITY )
XAMS by Xiting ( XITING_XAMS )
Zscaler CASB ( ZSCALER_CASB )
Zscaler DLP ( ZSCALER_DLP )
Zscaler Internet Access Audit Logs ( ZSCALER_INTERNET_ACCESS )
The following log types, without a default parser, were added. Each is listed by product name and log_type value, if applicable.
Aruba Switch ( ARUBA_SWITCH )
Azure AD Password Protection ( AZURE_AD_PASSWORD_PROTECTION )
Azure Front Door ( AZURE_FRONT_DOOR )
Babelforce ( BABELFORCE )
Cloudaware ( CLOUDAWARE )
Coalition Control API ( COALITION )
Crowdstrike Identity Protection Services ( CS_IDP )
Cymulate ( CYMULATE )
Dell ECS Enterprise Object Storage ( DELL_ECS )
Google Cloud NGFW Enterprise ( GCP_NGFW_ENTERPRISE )
Google Cloud Secure Web Proxy ( GCP_SWP )
HaveIBeenPwned ( HIBP )
HPE BladeSystem C7000 ( HPE_BLADESYSTEM_C7000 )
HP OpenView ( HP_OPENVIEW )
IBM DS8000 Storage ( IBM_DS8000 )
IBM-i Operating System ( IBM_I )
Multicom Switch ( MULTICOM_SWITCH )
Nextthink Finder ( NEXTTHINK_FINDER )
Palo Alto Cortex XDR Management Audit ( PAN_XDR_MGMT_AUDIT )
PingIdentity Directory Server Logs ( PING_DIRECTORY )
Prisma SD-WAN ( PRISMA_SD_WAN )
Redhat Jboss ( REDHAT_JBOSS )
SafeBreach ( SAFEBREACH )
Scality Ring Audit ( SCALITY_RING_AUDIT )
Sendsafely ( SENDSAFELY )
Solace Pub Sub Cloud ( SOLACE_AUDIT )
Sonicwall Secure Mobile Access ( SONICWALL_SMA )
Sonrai Enterprise Cloud Security Solution ( SONRAI )
Tenemos Journey Manager System Event Publisher ( TENEMOS_MANAGER_SYSTEMEVENT )
TrueFort Platform ( TRUEFORT )
Ubiquiti Accesspoint ( UBIQUITI_ACCESSPOINT )
WithSecure Cloud Protection ( WITHSECURE_CLOUD )
WithSecure Elements Connector ( WITHSECURE_ELEMENTS )
YAMAHA ROUTER RTX1200 ( YAMAHA_ROUTER )
For a list of supported log types and details about default parser changes, see Supported log types and default parsers .
March 12, 2024
Feature
Forwarder troubleshooting guide is now available to help you diagnose and resolve common issues that may arise while using the Chronicle Linux forwarder.
February 23, 2024
Feature
Chronicle now supports the timestamp.get_date() function. For more information and example usage, see YARA-L 2.0 language syntax .
February 21, 2024
Fixed
Fixed an issue that prevents you from using the list , percentile , and percentile_distinct functions when you create a custom measure in your dashboard.
February 20, 2024
Feature
Google has added Tokyo (Japan) as a new region for Chronicle customers. Chronicle can now store customer data in this region. This also adds a new regional endpoint for Chronicle APIs at https://asia-northeast1-backstory.googleapis.com .
February 15, 2024
Change
The following supported default parsers have changed. Each is listed by product name and log_type value, if applicable.
A10 Load Balancer ( A10_LOAD_BALANCER )
Anomali ( ANOMALI_IOC )
Apache ( APACHE )
Arcsight CEF ( ARCSIGHT_CEF )
AWS CloudWatch ( AWS_CLOUDWATCH )
AWS EC2 Hosts ( AWS_EC2_HOSTS )
AWS EC2 Instances ( AWS_EC2_INSTANCES )
AWS EC2 VPCs ( AWS_EC2_VPCS )
Azure AD ( AZURE_AD )
Azure AD Directory Audit ( AZURE_AD_AUDIT )
Azure DevOps Audit ( AZURE_DEVOPS )
Azure Firewall ( AZURE_FIREWALL )
BIND ( BIND_DNS )
BloxOne Threat Defense ( BLOXONE )
Blue Coat Proxy ( BLUECOAT_WEBPROXY )
Carbon Black ( CB_EDR )
Cato Networks ( CATO_NETWORKS )
CENSYS ( CENSYS )
Check Point ( CHECKPOINT_FIREWALL )
Chrome Management ( N/A )
Cisco IronPort ( CISCO_IRONPORT )
Cisco Meraki ( CISCO_MERAKI )
Cisco Prime ( CISCO_PRIME )
Cisco Secure Workload ( CISCO_SECURE_WORKLOAD )
Citrix Netscaler ( CITRIX_NETSCALER )
Cloud Audit Logs ( N/A )
Cloud Load Balancing ( GCP_LOADBALANCING )
Cloud Run ( GCP_RUN )
Cloudflare ( CLOUDFLARE )
CommVault Commcell ( COMMVAULT_COMMCELL )
Compute Context ( N/A )
Corelight ( CORELIGHT )
CrowdStrike Detection Monitoring ( CS_DETECTS )
CSV Custom IOC ( CSV_CUSTOM_IOC )
Cybereason EDR ( CYBEREASON_EDR )
Dataminr Alerts ( DATAMINR_ALERT )
Elastic Windows Event Log Beats ( ELASTIC_WINLOGBEAT )
F5 BIGIP LTM ( F5_BIGIP_LTM )
FireEye ETP ( FIREEYE_ETP )
Forescout NAC ( FORESCOUT_NAC )
ForgeRock OpenAM ( OPENAM )
IBM WebSEAL ( IBM_WEBSEAL )
Imperva ( IMPERVA_WAF )
Imperva Database ( IMPERVA_DB )
Infoblox RPZ ( INFOBLOX_RPZ )
ISC DHCP ( ISC_DHCP )
Juniper ( JUNIPER_FIREWALL )
Linux Sysmon ( LINUX_SYSMON )
LogonBox ( LOGONBOX )
ManageEngine ADAudit Plus ( ADAUDIT_PLUS )
Micro Focus iManager ( MICROFOCUS_IMANAGER )
Microsoft AD ( WINDOWS_AD )
Microsoft ATA ( MICROSOFT_ATA )
Microsoft Azure Activity ( AZURE_ACTIVITY )
Microsoft Defender For Cloud ( MICROSOFT_DEFENDER_CLOUD_ALERTS )
Microsoft Exchange ( EXCHANGE_MAIL )
Microsoft IIS ( IIS )
Netskope ( NETSKOPE_ALERT )
Netskope CASB ( NETSKOPE_CASB )
Ntopng ( NTOPNG )
Office 365 ( OFFICE_365 )
OpenCanary ( OPENCANARY )
OpenSSH ( OPENSSH )
OSSEC ( OSSEC )
Palo Alto Cortex XDR Alerts ( CORTEX_XDR )
Palo Alto Networks Firewall ( PAN_FIREWALL )
Palo Alto Panorama ( PAN_PANORAMA )
Quest Active Directory ( QUEST_AD )
Recordia ( RECORDIA )
Sangfor Next Generation Firewall ( SANGFOR_NGAF )
SAP SM20 ( SAP_SM20 )
Security Command Center Threat ( N/A )
SEPPmail Secure Email ( SEPPMAIL )
ServiceNow CMDB ( SERVICENOW_CMDB )
Snare System Diagnostic Logs ( SNARE_SOLUTIONS )
Solaris system ( SOLARIS_SYSTEM )
STIX Threat Intelligence ( STIX )
Symantec CloudSOC CASB ( SYMANTEC_CASB )
Symantec Web Security Service ( SYMANTEC_WSS )
Trend Micro Deep Security ( TRENDMICRO_DEEP_SECURITY )
Veritas NetBackup ( VERITAS_NETBACKUP )
VMware ESXi ( VMWARE_ESX )
Watchguard EDR ( WATCHGUARD_EDR )
WindChill ( WINDCHILL )
Windows Defender AV ( WINDOWS_DEFENDER_AV )
Windows DNS ( WINDOWS_DNS )
Windows Event ( WINEVTLOG )
Windows Event (XML) ( WINEVTLOG_XML )
wiz.io ( WIZ_IO )
Zeek JSON ( BRO_JSON )
Zscaler ( ZSCALER_WEBPROXY )
Zscaler CASB ( ZSCALER_CASB )
Zscaler Internet Access Audit Logs ( ZSCALER_INTERNET_ACCESS )
Zscaler Private Access ( ZSCALER_ZPA )
The following log types, without a default parser, were added. Each is listed by product name and log_type value, if applicable.
Arista Guardian For Network Identity ( ARISTA_AGNI )
HPE Aruba Networking Central ( ARUBA_CENTRAL )
Blackberry Workspaces ( BLACKBERRY_WORKSPACES )
Barracuda CloudGen Firewall ( BARRACUDA_CLOUDGEN_FIREWALL )
Blackberry Workspaces ( BLACKBERRY_WORKSPACES )
Cisco EStreamer ( CISCO_ESTREAMER )
Cyderes IOC ( CYDERES_IOC )
Dataiku DSS Logging ( DATAIKU_DSS_LOGS )
Edgecore Networks ( EDGECORE_NETWORKS )
Fisglobal Quantum ( FISGLOBAL_QUANTUM )
ForgeRock Identity Cloud ( FORGEROCK_IDENTITY_CLOUD )
Forgerock OpenIdM ( FORGEROCK_OPENIDM )
FS-ISAC IOC ( FS_ISAC_IOC )
Genetec Audit ( GENETEC_AUDIT )
HiBob ( HIBOB )
Imperva Audit Trail ( IMPERVA_AUDIT_TRAIL )
KerioControl Firewall ( KERIOCONTROL )
Looker Audit ( LOOKER_AUDIT )
Mobile Endpoint Security ( LOOKOUT_MOBILE_ENDPOINT_SECURITY )
ManageEngine PAM360 ( MANAGE_ENGINE_PAM360 )
Melissa ( MELISSA )
Microsoft CASB Files & Entities ( MICROSOFT_CASB_CONTEXT )
Windows Local Administrator Password Solution ( MICROSOFT_LAPS )
Network Policy Server ( MICROSOFT_NPS )
Power BI Activity Log ( MICROSOFT_POWERBI_ACTIVITY_LOG )
Nxlog Agent ( NXLOG_AGENT )
Nxlog Fim ( NXLOG_FIM )
Opus Codec ( OPUS )
Oracle NetSuite ( ORACLE_NETSUITE )
Pega Automation ( PEGA )
Qualys Knowledgebase ( QUALYS_KNOWLEDGEBASE )
RealiteQ ( REALITEQ )
SAP Webdispatcher ( SAP_WEBDISP )
Serpico ( SERPICO )
Software House Ccure9000 ( SOFTWARE_HOUSE_CCURE9000 )
Spirion ( SPIRION )
Spur data feeds ( SPUR_FEEDS )
Swift ( SWIFT )
Technitium DNS ( TECHNITIUM_DNS )
Tetragon Ebpf Audit Logs ( TETRAGON_EBPF_AUDIT_LOGS )
Trend Micro Email Security Advanced ( TRENDMICRO_EMAIL_SECURITY )
Tridium Niagara Framework ( TRIDIUM_NIAGARA_FRAMEWORK )
VeridiumID by Veridium ( VERIDIUM_ID )
Wallarm Webhook Notifications ( WALLARM_NOTIFICATIONS )
Winscp ( WINSCP )
XAMS by Xiting ( XITING_XAMS )
For a list of supported log types and details about default parser changes, see Supported log types and default parsers .
February 12, 2024
Feature
Risk Analytics
Google has introduced Risk Analytics to Chronicle. Risk Analytics looks for patterns of risk across your enterprise, assigning risk scores to all entities and activities. These scores are surfaced in the Risk Analytics dashboard which lets you better understand risk in your environment by visualizing entity risk trends.
The dashboard helps you to identify unusual behavior and the potential risk that entities pose to your enterprise. You can specify watchlists of entities you suspect of having greater risk. The watchlists let you more easily monitor risk within your environment.
Risk Analytics also provides both predefined curated detections and YARA-L metric functions for authoring custom rules.
Risk Analytics is available with Enterprise and Enterprise Plus licenses, or as an add-on to a SIEM standalone license.
February 06, 2024
Change
Chronicle requires a minimum Transport Layer Security (TLS) version of 1.2 to maintain security compliance. Ingestion routing connections that use lower TLS versions are automatically blocked. Upgrade any custom ingestion mechanisms to adhere to TLS 1.2 or higher.
Change
When the data ingestion rate for a tenant reaches a certain threshold, Chronicle controls the rate of ingestion for new data feeds to prevent a source with a high ingestion rate from affecting the ingestion rate of another data source. The ingestion volume and tenant's usage history determine the threshold. If the rate of ingestion does not deviate greatly then there is no effect on the ingestion rate.
February 01, 2024
Feature
The following log types were added to the Chronicle feed management API to create AWS data feeds. These feeds can be used to get context on AWS resources such as EC2 instances and users in identity and access management (IAM). Each is listed by product name and log_type value, if applicable.
AWS EC2 Hosts ( AWS_EC2_HOSTS )
AWS EC2 Instances ( AWS_EC2_INSTANCES )
AWS EC2 VPCs ( AWS_EC2_VPCS )
AWS Identity and Access Management ( AWS_IAM )
To view a list of log types that Chronicle supports for third-party APIs, see Configuration by log type .
January 31, 2024
Announcement
The bi-weekly release of Chronicle parsers will change to a more frequent release schedule to allow for more testing before parser changes automatically take effect in Parser Management.
Beginning on February 1, 2024, new parser updates will be released weekly as pending updates in Parser Management. Every 4 weeks beginning February 15, pending updates will automatically become active when these parser versions are promoted to default.
Any Chronicle tenants with Parser Management disabled do not use the standard Parser Management release process, so weekly parser updates will automatically take effect.
January 25, 2024
Feature
The Detection Engine added support for event variable joins on or expressions and function calls. For examples, see Event variable join requirements .
January 24, 2024
Feature
Chronicle has expanded Cloud Threat Detections to alert on findings from GCP Security Command Center Event Threat Detections , Virtual Machine Threat Detections , and Container Threat Detections . These passthrough detections are available through the following packs: CDIR SCC Enhanced Exfiltration, CDIR SCC Enhanced Defense Evasion, CDIR SCC Enhanced Malware, CDIR SCC Enhanced Persistence, CDIR SCC Enhanced Privilege Escalation, CDIR SCC Credential Access, CDIR SCC Enhanced Discovery, CDIR SCC Brute Force, CDIR SCC Data Destruction, CDIR SCC Inhibit System Recovery, CDIR SCC Execution, CDIR SCC Initial Access, CDIR SCC Impair Defenses.
January 23, 2024
Change
Chronicle Curated Detections has been enhanced with new detection content for Linux Threats . These new rule sets help identify malware and suspicious activity in Linux environments.
January 19, 2024
Change
The following supported default parsers have changed. Each is listed by product name and log_type value, if applicable.
Alcatel Switch ( ALCATEL_SWITCH )
Awake NDR ( AWAKE_NDR )
AWS Aurora ( AWS_AURORA )
Azure AD ( AZURE_AD )
Azure AD Directory Audit ( AZURE_AD_AUDIT )
Azure AD Organizational Context ( AZURE_AD_CONTEXT )
Azure DevOps Audit ( AZURE_DEVOPS )
Barracuda Email ( BARRACUDA_EMAIL )
BeyondTrust ( BOMGAR )
Box ( BOX )
Cisco Firepower NGFW ( CISCO_FIREPOWER_FIREWALL )
Cisco Umbrella Audit ( CISCO_UMBRELLA_AUDIT )
Cisco VPN ( CISCO_VPN )
Cisco WLC/WCS ( CISCO_WIRELESS )
Cloud Audit Logs ( N/A )
Cloudflare ( CLOUDFLARE )
Compute Context ( N/A )
Dell Switch ( DELL_SWITCH )
F5 ASM ( F5_ASM )
FireEye ( FIREEYE_ALERT )
FireEye HX ( FIREEYE_HX )
FireEye PX ( FIREEYE_PX )
Fortinet Web Application Firewall ( FORTINET_FORTIWEB )
HP Aruba (ClearPass) ( CLEARPASS )
Infoblox DHCP ( INFOBLOX_DHCP )
JumpCloud Directory Insights ( JUMPCLOUD_DIRECTORY_INSIGHTS )
Kubernetes Audit Azure ( KUBERNETES_AUDIT_AZURE )
Microsoft Azure Activity ( AZURE_ACTIVITY )
Microsoft Graph API Alerts ( MICROSOFT_GRAPH_ALERT )
Microsoft IIS ( IIS )
Nutanix Prism ( NUTANIX_PRISM )
Office 365 ( OFFICE_365 )
Palo Alto Networks Firewall ( PAN_FIREWALL )
Quest Change Auditor for EMC ( QUEST_CHANGE_AUDITOR_EMC )
Quest File Access Audit ( QUEST_FILE_AUDIT )
RH-ISAC ( RH_ISAC_IOC )
Riverbed Steelhead ( STEELHEAD )
SentinelOne Singularity Cloud Funnel ( SENTINELONE_CF )
Symantec DLP ( SYMANTEC_DLP )
Synology ( SYNOLOGY )
Sysdig ( SYSDIG )
Unix system ( NIX_SYSTEM )
Vectra Detect ( VECTRA_DETECT )
Vectra Stream ( VECTRA_STREAM )
Windows DNS ( WINDOWS_DNS )
Windows Event ( WINEVTLOG )
Windows Event (XML) ( WINEVTLOG_XML )
Windows Sysmon ( WINDOWS_SYSMON )
Zscaler ( ZSCALER_WEBPROXY )
The following log types, without a default parser, were added. Each is listed by product name and log_type value, if applicable.
AliCloud Anti DDos ( ALICLOUD_ANTI_DDOS )
AliCloud WAF ( ALICLOUD_WAF )
Arista CloudVision Portal ( ARISTA_CVP )
CypherTrust Manager ( CIPHERTRUST_MANAGER )
Cybergatekeeper NAC ( CYBERGATEKEEPER_NAC )
Microsoft Graph Activity Logs ( MICROSOFT_GRAPH_ACTIVITY_LOGS )
Trend Micro EdgeIPS ( TRENDMICRO_EDGEIPS )
Vanguard Active Alerts ( VANGUARD )
For a list of supported log types and details about default parser changes, see Supported log types and default parsers .
January 17, 2024
Change
The following changes are available in the Unified Data Model.
New objects were added:
DNSRecord
Favicon
ThreatVerdict
PopularityRank
SSLCertificate
SSLCertificate.AuthorityKeyId
SSLCertificate.CertSignature
SSLCertificate.DSA
SSLCertificate.EC
SSLCertificate.Extension
SSLCertificate.PublicKey
SSLCertificate.RSA
SSLCertificate.Subject
SSLCertificate.Validity
Tracker
Url
SecurityResult.AnalyticsMetadata
A new field was added to Noun : url_metadata .
New fields were added to SecurityResult :
ruleset_category_display_name
confidence_score
analytics_metadata
threat_verdict
last_discovered_time
New fields were added to Domain :
last_dns_records
categories
favicon
jarm
last_dns_records
last_dns_records_time
last_https_certificate
last_https_certificate_time
popularity_ranks
tags
whois_time
New fields were added to File : security_result and main_icon .
New fields were added to SecurityResult.Association : sponsor_region , targeted_regions , and tags .
New values were added to File.FileType :
FILE_TYPE_DWG
FILE_TYPE_DXF
FILE_TYPE_THREEDS
FILE_TYPE_WEBM
FILE_TYPE_MKV
FILE_TYPE_ONE_NOTE
FILE_TYPE_OOXML
FILE_TYPE_ZST
FILE_TYPE_LZFSE
FILE_TYPE_PYTHON_WHL
FILE_TYPE_PYTHON_PKG
FILE_TYPE_M4
FILE_TYPE_OBJETIVEC
FILE_TYPE_JMOD
FILE_TYPE_MAKEFILE
FILE_TYPE_INI
FILE_TYPE_CLJ
FILE_TYPE_PDB
FILE_TYPE_SQL
FILE_TYPE_NEKO
FILE_TYPE_WER
FILE_TYPE_GOLANG
FILE_TYPE_SGML
FILE_TYPE_JSON
FILE_TYPE_CSV
FILE_TYPE_SQUASHFS
FILE_TYPE_VHD
FILE_TYPE_IPS
FILE_TYPE_PEM
FILE_TYPE_PGP
FILE_TYPE_CRT
FILE_TYPE_PYC
New values were added to Metric.Dimension :
PRINCIPAL_PROCESS_FILE_PATH
PRINCIPAL_PROCESS_FILE_HASH
SECURITY_RESULT_RULE_NAME
A new value was added to Metric.MetricName : ALERT_EVENT_NAME_COUNT .
A new value was added to SecurityResult.ProductSeverity : NONE .
For a list of all fields in the Unified Data Model, and their descriptions, see the Unified Data Model field list .
January 16, 2024
Feature
UDM Search for entity investigation
UDM Search now includes a feature that lets you investigate entities (for example, an IP address, user, or asset) in addition to the events and alerts that match the search query terms. UDM Search query conditions can include both UDM fields (for example, principal.hostname="alice" ) and grouped fields (for example, hostname="alice" ). When a search query includes a condition that identifies a specific entity, the search results include details about that entity in addition to UDM events that match the entire search query.
January 03, 2024
Change
The following supported default parsers have changed. Each is listed by product name and log_type value, if applicable.
ADVA Fiber Service Platform ( ADVA_FSP )
Anomali ( ANOMALI_IOC )
Apache ( APACHE )
AWS EMR ( AWS_EMR )
AWS Route 53 DNS ( AWS_ROUTE_53 )
AWS WAF ( AWS_WAF )
Azure AD Directory Audit ( AZURE_AD_AUDIT )
Azure Application Gateway ( AZURE_GATEWAY )
BIND ( BIND_DNS )
Blue Coat Proxy ( BLUECOAT_WEBPROXY )
Carbon Black ( CB_EDR )
Check Point ( CHECKPOINT_FIREWALL )
Cisco ASA ( CISCO_ASA_FIREWALL )
Cisco DNA Center Platform ( CISCO_DNAC )
Cisco Firepower NGFW ( CISCO_FIREPOWER_FIREWALL )
CrowdStrike Falcon ( CS_EDR )
Darktrace ( DARKTRACE )
Deep Instinct EDR ( DEEP_INSTINCT_EDR )
Elastic Windows Event Log Beats ( ELASTIC_WINLOGBEAT )
Extreme Networks Switch ( EXTREME_SWITCH )
F5 ASM ( F5_ASM )
F5 BIGIP LTM ( F5_BIGIP_LTM )
Forescout NAC ( FORESCOUT_NAC )
Fortinet FortiClient ( FORTINET_FORTICLIENT )
GitHub ( GITHUB )
GMAIL Logs ( GMAIL_LOGS )
IBM DB2 ( DB2_DB )
IBM Guardium ( GUARDIUM )
Jamf Protect Alerts ( JAMF_PROTECT )
Juniper ( JUNIPER_FIREWALL )
Kubernetes Node ( KUBERNETES_NODE )
Mandiant Custom IOC ( MANDIANT_CUSTOM_IOC )
Mattermost ( MATTERMOST )
Microsoft Exchange ( EXCHANGE_MAIL )
Microsoft IIS ( IIS )
Microsoft SQL Server ( MICROSOFT_SQL )
Nutanix Prism ( NUTANIX_PRISM )
Office 365 ( OFFICE_365 )
Okta ( OKTA )
Palo Alto Cortex XDR Events ( PAN_CORTEX_XDR_EVENTS )
Palo Alto Networks Firewall ( PAN_FIREWALL )
Proofpoint Observeit ( OBSERVEIT )
RH-ISAC ( RH_ISAC_IOC )
SAP SAST Suite ( SAP_SAST )
Security Command Center Threat ( N/A )
SentinelOne Singularity Cloud Funnel ( SENTINELONE_CF )
Symantec DLP ( SYMANTEC_DLP )
Talon ( TALON )
Tanium Stream ( TANIUM_TH )
Trend Micro Apex one ( TRENDMICRO_APEX_ONE )
Windows Event ( WINEVTLOG )
Windows Event (XML) ( WINEVTLOG_XML )
wiz.io ( WIZ_IO )
Zscaler ( ZSCALER_WEBPROXY )
Zscaler CASB ( ZSCALER_CASB )
Zscaler Tunnel ( ZSCALER_TUNNEL )
The following log types, without a default parser, were added. Each is listed by product name and log_type value, if applicable.
Asimily ( ASIMILY )
Checkpoint Gaia ( CHECKPOINT_GAIA )
Cisco Cyber Vision ( CISCO_CYBER_VISION )
Cisco IronPort ( CISCO_IRONPORT )
Cyber 2.0 IDS ( CYBER_2_IDS )
CypherTrust Manager ( CYPHERTRUST_MANAGER )
Duo Trust Monitor ( DUO_TRUST_MONITOR )
Extreme Wireless ( EXTREME_WIRELESS )
FireEye PX ( FIREEYE_PX )
Harfanglab EDR ( HARFANGLAB_EDR )
ImageNow ( IMAGENOW )
INFINICO NetWyvern Series Appliance ( INFINICO_NETWYVERN )
Quest CA Audit ( QUEST_CA_AUDIT )
Quest Change Auditor for EMC ( QUEST_CHANGE_AUDITOR_EMC )
Quest File Access Audit ( QUEST_FILE_AUDIT )
RadiFlow IDS ( RADIFLOW_IDS )
rigo ( SENTRIGO )
SEPPmail Secure Email ( SEPPMAIL )
SpecterX ( SPECTERX )
ViaControl Server Application ( VIACONTROL )
WindChill ( WINDCHILL )
WS Ftp ( WS_FTP )
For a list of supported log types and details about default parser changes, see Supported log types and default parsers .
December 22, 2023
Issue
When you create a custom measure in a dashboard, you can't use the list , percentile , and percentile_distinct functions.
December 18, 2023
Change
Chronicle Curated Detections has been enhanced with new detection content for Google Cloud threats . These new rule sets detect Kubernetes certificates and Certificate Signing Requests (CSRs) actions that could be used to establish persistence or to escalate privileges.
December 15, 2023
Feature
Google has added KSA (Dammam) and India (Mumbai) as new regions for Chronicle customers. Chronicle can now store customer data in these regions. This also adds new regional endpoints for Chronicle APIs at https://me-central2-backstory.googleapis.com and http://asia-south1-backstory.googleapis.com .
December 14, 2023
Change
The following supported default parsers have changed. Each is listed by product name and log_type value, if applicable.
Aruba Airwave ( ARUBA_AIRWAVE )
Atlassian Jira ( ATLASSIAN_JIRA )
AWS EC2 HOSTS ( AWS_EC2_HOSTS )
AWS EC2 INSTANCES ( AWS_EC2_INSTANCES )
AWS EC2 VPCS ( AWS_EC2_VPCS )
AWS Identity and Access Management (IAM) ( AWS_IAM )
AWS WAF ( AWS_WAF )
Azure App Service ( AZURE_APP_SERVICE )
Blue Coat Proxy ( BLUECOAT_WEBPROXY )
Box ( BOX )
Brocade Switch ( BROCADE_SWITCH )
Cisco ASA ( CISCO_ASA_FIREWALL )
Cisco Switch ( CISCO_SWITCH )
Cloud Audit Logs ( N/A )
Cloud Intrusion Detection System ( GCP_IDS )
Corelight ( CORELIGHT )
DomainTools Threat Intelligence ( DOMAINTOOLS_THREATINTEL )
Elastic Windows Event Log Beats ( ELASTIC_WINLOGBEAT )
Extreme Networks Switch ( EXTREME_SWITCH )
F5 ASM ( F5_ASM )
FireEye ( FIREEYE_ALERT )
Fortinet FortiClient ( FORTINET_FORTICLIENT )
GMAIL Logs ( GMAIL_LOGS )
HCL BigFix ( HCL_BIGFIX )
Kubernetes Node ( KUBERNETES_NODE )
Mandiant Custom IOC ( MANDIANT_CUSTOM_IOC )
Medigate IoT ( MEDIGATE_IOT )
Microsoft Azure Resource ( AZURE_RESOURCE_LOGS )
Microsoft CyberX ( CYBERX )
Microsoft Graph API Alerts ( MICROSOFT_GRAPH_ALERT )
Microsoft IIS ( IIS )
Microsoft Powershell ( POWERSHELL )
Neo4j ( NEO4J )
Netskope Web Proxy ( NETSKOPE_WEBPROXY )
Onapsis ( ONAPSIS )
Palo Alto Prisma Cloud Alert payload ( PAN_PRISMA_CA )
PerimeterX Bot Protection ( PERIMETERX_BOT_PROTECTION )
Ping Identity ( PING )
Radware Web Application Firewall ( RADWARE_FIREWALL )
Remediant SecureONE ( REMEDIANT_SECUREONE )
SailPoint IAM ( SAILPOINT_IAM )
SAP SM20 ( SAP_SM20 )
Security Command Center Threat ( N/A )
Silverfort Authentication Platform ( SILVERFORT )
Symantec DLP ( SYMANTEC_DLP )
Thinkst Canary ( THINKST_CANARY )
Unix system ( NIX_SYSTEM )
WatchGuard ( WATCHGUARD )
Windows Defender ATP ( WINDOWS_DEFENDER_ATP )
Windows DNS ( WINDOWS_DNS )
Workday Audit Logs ( WORKDAY_AUDIT )
Workspace Activities ( WORKSPACE_ACTIVITY )
Zscaler Internet Access Audit Logs ( ZSCALER_INTERNET_ACCESS )
The following log types, without a default parser, were added. Each is listed by product name and log_type value, if applicable.
Akamai Guardicore ( AKAMAI_GUARDICORE )
Alcatel Switch ( ALCATEL_SWITCH )
Ascertia ( ASCERTIA )
Cohesity Helios ( COHESITY_HELIOS )
Dtex Intercept ( DTEX_INTERCEPT )
Evidos Firewall ( EVIDOS_FIREWALL )
F5 Distributed Cloud Services ( F5_DCS )
Five9 ( FIVE9 )
JumpCloud Desktop ( JUMPCLOUD_DESKTOP )
Keepalived Routing software ( KEEPALIVED )
Mongo Atlas Audit ( MONGO_ATLAS_AUDIT )
Mosyle ( MOSYLE )
NetDocuments Solutions ( NETDOCUMENTS )
Netwrix ( NETWRIX )
Nozomi Networks Scada Guardian ( NOZOMI_GUARDIAN )
Netwrix ( NETWRIX )
Nozomi Networks Scada Guardian ( NOZOMI_GUARDIAN )
OpenVAS ( OPENVAS )
Passfort ( PASSFORT )
Proofpoint DLP ( PROOFPOINT_DLP )
Rabbit MQ ( RABBITMQ )
Redis ( REDIS )
Salesforce Commerce Cloud ( SALESFORCE_COMMERCE_CLOUD )
Sap Business Technology Platform ( SAP_BTP )
Syxsense ( SYXSENSE )
Teramind ( TERAMIND )
TXOne Stellar ( TRENDMICRO_STELLAR )
Zscaler NSS Feeds for Alerts ( ZSCALER_NSS_FEEDS )
Zscaler Tunnel ( ZSCALER_TUNNEL )
For a list of supported log types and details about default parser changes, see Supported log types and default parsers .
December 13, 2023
Feature
Duet AI in Security Operations
You can now use Duet AI to search your event data using natural language . Duet AI can translate natural language into Chronicle's unified data model, letting you search your event data without having to know YARA-L to craft custom queries.
December 06, 2023
Change
Chronicle now has an additional mechanism to set up the ingestion of Google Workspace Activities logs ( WORKSPACE_ACTIVITY ). This feature simplifies the configuration steps and provides a more direct data integration with Google Workspace. For more information, see Send Google Workspace data to Chronicle .
Change
Chronicle Curated Detections has been enhanced with new detection content for Google Cloud threats . These new rule sets help identify anomalous activity in Google Workspace data.
November 29, 2023
Change
The following supported default parsers have changed. Each is listed by product name and log_type value, if applicable.
AWS Cloudtrail ( AWS_CLOUDTRAIL )
Azure AD ( AZURE_AD )
Azure AD Directory Audit ( AZURE_AD_AUDIT )
Azure AD Organizational Context ( AZURE_AD_CONTEXT )
Azure Application Gateway ( AZURE_GATEWAY )
Azure DevOps Audit ( AZURE_DEVOPS )
Blue Coat Proxy ( BLUECOAT_WEBPROXY )
Chrome Management ( N/A )
Cisco ASA ( CISCO_ASA_FIREWALL )
Cisco ISE ( CISCO_ISE )
Cisco Wireless IPS ( CISCO_WIPS )
Citrix Netscaler ( CITRIX_NETSCALER )
Clearswift ( CLEARSWIFT )
Cloud Audit Logs ( N/A )
Cloud Load Balancing ( GCP_LOADBALANCING )
Cloud SQL ( GCP_CLOUDSQL )
Cloudflare ( CLOUDFLARE )
Corelight ( CORELIGHT )
CrowdStrike Falcon ( CS_EDR )
Cyberark Privilege Cloud ( CYBERARK_PRIVILEGE_CLOUD )
Darktrace ( DARKTRACE )
Elastic Windows Event Log Beats ( ELASTIC_WINLOGBEAT )
Evision FircoSoft ( EVISION_FIRCOSOFT )
Fluentd Logs ( FLUENTD )
FortiGate ( FORTINET_FIREWALL )
HPE ILO ( HPE_ILO )
IBM WebSEAL ( IBM_WEBSEAL )
Jamf Protect Telemetry ( JAMF_TELEMETRY )
Jenkins ( JENKINS )
JumpCloud Directory Insights ( JUMPCLOUD_DIRECTORY_INSIGHTS )
Juniper MX Router ( JUNIPER_MX )
Kubernetes Node ( KUBERNETES_NODE )
Linux Auditing System (AuditD) ( AUDITD )
Mandiant Custom IOC ( MANDIANT_CUSTOM_IOC )
Microsoft CASB ( MICROSOFT_CASB )
Microsoft Exchange ( EXCHANGE_MAIL )
Microsoft Graph API Alerts ( MICROSOFT_GRAPH_ALERT )
Nokia Router ( NOKIA_ROUTER )
Ntopng ( NTOPNG )
Office 365 ( OFFICE_365 )
OpenVPN ( OPEN_VPN )
Opnsense ( OPNSENSE )
OSQuery ( OSQUERY_EDR )
OSSEC ( OSSEC )
Palo Alto Networks Firewall ( PAN_FIREWALL )
Radware Web Application Firewall ( RADWARE_FIREWALL )
RH-ISAC ( RH_ISAC_IOC )
Security Command Center Threat ( N/A )
Sierra Wireless ( SIERRA_WIRELESS )
Signal Sciences WAF ( SIGNAL_SCIENCES_WAF )
Sophos Firewall (Next Gen) ( SOPHOS_FIREWALL )
Splunk Platform ( SPLUNK )
Suricata IDS ( SURICATA_IDS )
Symantec Endpoint Protection ( SEP )
Teleport Access Plane ( TELEPORT_ACCESS_PLANE )
Ubiquiti UniFi Switch ( UBIQUITI_SWITCH )
VMware NSX ( VMWARE_NSX )
Vsftpd ( VSFTPD )
WatchGuard ( WATCHGUARD )
Windows Defender ATP ( WINDOWS_DEFENDER_ATP )
Windows DHCP ( WINDOWS_DHCP )
Windows DNS ( WINDOWS_DNS )
Windows Event ( WINEVTLOG )
Windows Event (XML) ( WINEVTLOG_XML )
Windows Sysmon ( WINDOWS_SYSMON )
Workspace Activities ( WORKSPACE_ACTIVITY )
Workspace Alerts ( WORKSPACE_ALERTS )
Workspace ChromeOS Devices ( WORKSPACE_CHROMEOS )
Workspace Groups ( WORKSPACE_GROUPS )
Workspace Mobile Devices ( WORKSPACE_MOBILE )
Workspace Privileges ( WORKSPACE_PRIVILEGES )
Workspace Users ( WORKSPACE_USERS )
Zeek JSON ( BRO_JSON )
Zscaler ( ZSCALER_WEBPROXY )
The following log types, without a default parser, were added. Each is listed by product name and log_type value, if applicable.
No new log types were added.
For a list of supported log types and details about default parser changes, see Supported log types and default parsers .
November 15, 2023
Change
The following supported default parsers have changed. Each is listed by product name and log_type value, if applicable.
Abnormal Security ( ABNORMAL_SECURITY )
Akamai Enterprise Application Access ( AKAMAI_EAA )
Atlassian Confluence ( ATLASSIAN_CONFLUENCE )
Atlassian Jira ( ATLASSIAN_JIRA )
AWS Aurora ( AWS_AURORA )
AWS Cloudtrail ( AWS_CLOUDTRAIL )
Bitwarden Events ( BITWARDEN_EVENTS )
Check Point Harmony ( CHECKPOINT_HARMONY )
Cisco Router ( CISCO_ROUTER )
Cisco Switch ( CISCO_SWITCH )
Cisco Umbrella DNS ( UMBRELLA_DNS )
Cloud Audit Logs ( N/A )
Dell Switch ( DELL_SWITCH )
Elastic Search ( ELASTIC_SEARCH )
Elastic Windows Event Log Beats ( ELASTIC_WINLOGBEAT )
F5 ASM ( F5_ASM )
FireEye ( FIREEYE_ALERT )
Firewall Rule Logging ( N/A )
IBM DataPower Gateway ( IBM_DATAPOWER )
Infoblox ( INFOBLOX )
Jamf Protect Alerts ( JAMF_PROTECT )
Juniper ( JUNIPER_FIREWALL )
Lacework Cloud Security ( LACEWORK )
Linux Sysmon ( LINUX_SYSMON )
Medigate IoT ( MEDIGATE_IOT )
Microsoft Sentinel ( MICROSOFT_SENTINEL )
Netskope ( NETSKOPE_ALERT )
Openpath ( OPENPATH )
Palo Alto Cortex XDR Alerts ( CORTEX_XDR )
Proofpoint Observeit ( OBSERVEIT )
Proofpoint On Demand ( PROOFPOINT_ON_DEMAND )
Pulse Secure ( PULSE_SECURE_VPN )
Pulse Secure Virtual Traffic Manager ( PULSE_SECURE_VTM )
SentinelOne EDR ( SENTINEL_EDR )
Sophos Firewall (Next Gen) ( SOPHOS_FIREWALL )
SpyCloud ( SPYCLOUD )
Stealthbits Defend ( STEALTHBITS_DEFEND )
Stealthbits PAM ( STEALTHBITS_PAM )
STIX Threat Intelligence ( STIX )
Symantec Endpoint Protection ( SEP )
Symantec Event export ( SYMANTEC_EVENT_EXPORT )
Tenable Active Directory Security ( TENABLE_ADS )
Unix system ( NIX_SYSTEM )
VMware vCenter ( VMWARE_VCENTER )
Windows Event (XML) ( WINEVTLOG_XML )
Zscaler ( ZSCALER_WEBPROXY )
The following log types, without a default parser, were added. Each is listed by product name and log_type value, if applicable.
Aruba Orchestrator ( ARUBA_ORCHESTRATOR )
AWS Shield ( AWS_SHIELD )
Azure DNS logs ( AZURE_DNS )
Backbox ( BACKBOX )
Bitvise SSHd ( BITVISE_SSHD )
Cylera IOT ( CYLERA_IOT )
Druva Backup ( DRUVA_BACKUP )
Ensono Cloud Mainframe Solution ( ENSONO )
xtreme Networks ExtremeControl NAC Solution ( EXTREME_CONTROL )
EzProxy ( EZPROXY )
GitHub Events ( GITHUB_EVENTS )
Glean ( GLEAN )
ISM Xtraction ( IVANTI_XTRACTION )
Lira ( LIRA )
LogonBox ( LOGONBOX )
Mandiant Custom IOC ( MANDIANT_CUSTOM_IOC )
Monday ( MONDAY )
Onapsis ( ONAPSIS )
Opentelemetry ( OPENTELEMETRY )
Opswat Kiosk ( OPSWAT_KIOSK )
Outpost24 ( OUTPOST24 )
Pentera Leef ( PENTERA_LEEF )
Phishlabs ( PHISHLABS )
Portnix Audit ( PORTNOX_AUDIT )
Portnix CEF ( PORTNOX_CEF )
Proofpoint Sendmail Sentrion ( PROOFPOINT_SENDMAIL_SENTRION )
SAP SM20 ( SAP_SM20 )
Splunk Attack Analyzer ( SPLUNK_ATTACK_ANALYZER )
Stellar Cyber ( STELLAR_CYBER )
Talon ( TALON )
Teradici PCoIP ( TERADICI_PCOIP )
TrendMicro Apex Central ( TRENDMICRO_APEX_CENTRAL )
TrendMicro Webproxy DSM ( TRENDMICRO_WEBPROXY_DSM )
Vonage ( VONAGE )
Waterfall Data Security Manager ( WATERFALL_DSM )
Ysoft Data Security Manager ( YSOFT_DSM )
Zscaler Client Connector ( ZSCALER_ZCC )
Zscaler ZDX ( ZSCALER_ZDX )
For a list of supported log types and details about default parser changes, see Supported log types and default parsers .
November 08, 2023
Feature
Detection Engine has added support for rule statuses for Chronicle YARA-L rules running on live data. In addition to being in Enabled or Disabled state, rules can also have Limited or Paused status depending on their resource usage.
November 02, 2023
Change
The following supported default parsers have changed. Each is listed by product name and log_type value, if applicable.
Akamai WAF ( AKAMAI_WAF )
Atlassian Confluence ( ATLASSIAN_CONFLUENCE )
AWS Cloudtrail ( AWS_CLOUDTRAIL )
AWS EMR ( AWS_EMR )
Azure AD Organizational Context ( AZURE_AD_CONTEXT )
Carbon Black ( CB_EDR )
Cisco Router ( CISCO_ROUTER )
Cisco Umbrella Web Proxy ( UMBRELLA_WEBPROXY )
Cloud Load Balancing ( GCP_LOADBALANCING )
Cloud SQL ( GCP_CLOUDSQL )
DNSFilter ( DNSFILTER )
Duo Auth ( DUO_AUTH )
Elastic Windows Event Log Beats ( ELASTIC_WINLOGBEAT )
Evision FircoSoft ( EVISION_FIRCOSOFT )
ExtraHop RevealX ( EXTRAHOP )
F5 ASM ( F5_ASM )
Firewall Rule Logging ( N/A )
Fortinet FortiClient ( FORTINET_FORTICLIENT )
GCP_KUBERNETES_CONTEXT ( GCP_KUBERNETES_CONTEXT )
GitHub ( GITHUB )
Gitlab ( GITLAB )
Hashicorp Vault ( HASHICORP )
IBM DataPower Gateway ( IBM_DATAPOWER )
IBM DB2 ( DB2_DB )
IBM Security Verify SaaS ( IBM_SECURITY_VERIFY_SAAS )
Infoblox ( INFOBLOX )
JumpCloud Directory Insights ( JUMPCLOUD_DIRECTORY_INSIGHTS )
Juniper Junos ( JUNIPER_JUNOS )
Kolide Endpoint Security ( KOLIDE )
ManageEngine ADAudit Plus ( ADAUDIT_PLUS )
Microsoft Exchange ( EXCHANGE_MAIL )
Microsoft IIS ( IIS )
Office 365 ( OFFICE_365 )
Open Cybersecurity Schema Framework (OCSF) ( OCSF )
Oracle ( ORACLE_DB )
Oracle Cloud Infrastructure ( ORACLE_CLOUD_AUDIT )
Proofpoint On Demand ( PROOFPOINT_ON_DEMAND )
Qualys VM ( QUALYS_VM )
Saiwall VPN ( SAIWALL_VPN )
SentinelOne EDR ( SENTINEL_EDR )
Slack Audit ( SLACK_AUDIT )
Unix system ( NIX_SYSTEM )
Windows Event ( WINEVTLOG )
Workspace Activities ( WORKSPACE_ACTIVITY )
Workspace Alerts ( WORKSPACE_ALERTS )
Workspace ChromeOS Devices ( WORKSPACE_CHROMEOS )
Zscaler Internet Access Audit Logs ( ZSCALER_INTERNET_ACCESS )
The following log types, without a default parser, were added. Each is listed by product name and log_type value, if applicable.
Analyst1 IOC ( ANALYST1_IOC )
Amazon FSx for Windows File Server ( AWS_FSX )
DealCloud ( DEAL_CLOUD )
DomainTools Threat Intelligence ( DOMAINTOOLS_THREATINTEL )
Farsight DNSDB ( FARSIGHT_DNSDB )
Journald ( JOURNALD )
Mambu ( MAMBU )
Mattermost ( MATTERMOST )
Mitel Communications Director ( MITEL_MCD )
NordLayer VPN ( NORD_LAYER )
Paxton Access Control Systems ( PAXTON_ACS )
For a list of supported log types and details about default parser changes, see Supported log types and default parsers .
November 01, 2023
Change
Chronicle Curated Detections has been enhanced with new detection content for Google Cloud threats . These new rule sets help identify Kubernetes activity associated with abuse of role-based access controls (RBAC).
October 27, 2023
Feature
Google has added Frankfurt (Germany) and Zurich (Switzerland) as new regions for Chronicle customers. Chronicle can now store customer data in these regions. This also adds new regional endpoints for Chronicle APIs at https://europe-west3-backstory.googleapis.com and https://europe-west6-backstory.googleapis.com.
October 18, 2023
Change
The following supported default parsers have changed. Each is listed by product name and log_type value, if applicable.
Azure AD Directory Audit ( AZURE_AD_AUDIT )
Check Point ( CHECKPOINT_FIREWALL )
Chronicle SOAR Audit ( CHRONICLE_SOAR_AUDIT )
Cisco Internetwork Operating System ( CISCO_IOS )
Cisco Meraki ( CISCO_MERAKI )
Cisco Web Services Manager ( CISCO_WSM )
Cloud Audit Logs ( N/A )
Cloudflare ( CLOUDFLARE )
CrowdStrike Falcon ( CS_EDR )
ESET Threat Intelligence ( ESET_IOC )
GitHub ( GITHUB )
Gitlab ( GITLAB )
Infoblox DNS ( INFOBLOX_DNS )
JumpCloud Directory Insights ( JUMPCLOUD_DIRECTORY_INSIGHTS )
Kolide Endpoint Security ( KOLIDE )
McAfee ePolicy Orchestrator ( MCAFEE_EPO )
Microsoft Azure Activity ( AZURE_ACTIVITY )
Microsoft Azure Resource ( AZURE_RESOURCE_LOGS )
Microsoft Defender for Endpoint ( MICROSOFT_DEFENDER_ENDPOINT )
Microsoft SQL Server ( MICROSOFT_SQL )
Netskope Web Proxy ( NETSKOPE_WEBPROXY )
OpenSSH ( OPENSSH )
Palo Alto Cortex XDR Alerts ( CORTEX_XDR )
Silverfort Authentication Platform ( SILVERFORT )
Vectra Stream ( VECTRA_STREAM )
VMware ESXi ( VMWARE_ESX )
VMware NSX ( VMWARE_NSX )
Windows Applocker ( WINDOWS_APPLOCKER )
Windows Defender ATP ( WINDOWS_DEFENDER_ATP )
Windows DNS ( WINDOWS_DNS )
Windows Event ( WINEVTLOG )
Windows Event (XML) ( WINEVTLOG_XML )
Windows Hyper-V ( WINDOWS_HYPERV )
Workspace ChromeOS Devices ( WORKSPACE_CHROMEOS )
Zscaler ( ZSCALER_WEBPROXY )
ZScaler DNS ( ZSCALER_DNS )
The following log types, without a default parser, were added. Each is listed by product name and log_type value, if applicable.
ADVA Fiber Service Platform ( ADVA_FSP )
Bluecat Address Manager ( BLUECAT_AM )
Fortinet Switch ( FORTINET_SWITCH )
GCP Google Kubernetes Engine Context ( GCP_KUBERNETES_CONTEXT )
Kion ( KION )
Kiteworks ( KITEWORKS )
Nokia Router ( NOKIA_ROUTER )
Ntopng ( NTOPNG )
Opnsense ( OPNSENSE )
Oracle HCM Human resources platform solution ( ORACLE_HCM )
MS Powershell Transcript ( POWERSHELL_TRANSCRIPT )
RAD ETX ( RAD_ETX )
Spamhaus ( SPAMHAUS )
UpGuard ( UPGUARD )
Vsftpd ( VSFTPD )
For a list of supported log types and details about default parser changes, see Supported log types and default parsers .
October 16, 2023
Change
The following changes are available in the Unified Data Model.
New enum fields were added: SecurityResult.IoCStatsType and SecurityResult.VerdictType .
A new field was added to EntityMetadata : feed .
A new field was added to Network : ip_subnet_range .
New fields were added to SecurityResult : last_updated_time and verdict_info .
A new field was added to Label : rbac_enabled .
A new field was added to SecurityResult.Association : region_code .
New fields were added to User : last_login_time , last_password_change_time , password_expiration_time , account_expiration_time , account_lockout_time , and last_bad_password_attempt_time .
A new value was added to the Network.ApplicationProtocol enum: GRPC .
The following new values were added to the Resource.ResourceType enum:
POD
CONTAINER
FUNCTION
RUNTIME
IP_ADDRESS
DISK
VOLUME
IMAGE
SNAPSHOT
REPOSITORY
CREDENTIAL
LOAD_BALANCER
GATEWAY
SUBNET
For a list of all fields in the Unified Data Model, and their descriptions, see the Unified Data Model field list .
October 10, 2023
Feature
While creating a custom parser, you can use the preview option to view the UDM output. In the preview, you can use the statedump filter plugin to validate the internal state of a parser. For more information, see Validate data using statedump plugin .
October 05, 2023
Change
The following supported default parsers have changed. Each is listed by product name and log_type value, if applicable.
AWS Cloudtrail ( AWS_CLOUDTRAIL )
Azion ( AZION )
Azure AD Organizational Context ( AZURE_AD_CONTEXT )
Blue Coat Proxy ( BLUECOAT_WEBPROXY )
Cisco ACS ( CISCO_ACS )
Cisco FireSIGHT Management Center ( CISCO_FIRESIGHT )
Cisco ISE ( CISCO_ISE )
Cisco Umbrella DNS ( UMBRELLA_DNS )
Cloud Intrusion Detection System ( GCP_IDS )
Cloudflare ( CLOUDFLARE )
Compute Context ( N/A )
Corelight ( CORELIGHT )
Darktrace ( DARKTRACE )
F5 ASM ( F5_ASM )
FireEye ( FIREEYE_ALERT )
HAProxy ( HAPROXY )
Hashicorp Vault ( HASHICORP )
HP Procurve Switch ( HP_PROCURVE )
IBM Security Verify SaaS ( IBM_SECURITY_VERIFY_SAAS )
Imperva ( IMPERVA_WAF )
Ionix ( IONIX )
Microsoft Defender for Endpoint ( MICROSOFT_DEFENDER_ENDPOINT )
MISP Threat Intelligence ( MISP_IOC )
Office 365 ( OFFICE_365 )
Oracle Cloud Infrastructure Audit Logs ( OCI_AUDIT )
Sendmail ( SENDMAIL )
Tanium Audit ( TANIUM_AUDIT )
Tanium Stream ( TANIUM_TH )
Thycotic ( THYCOTIC )
Unix system ( NIX_SYSTEM )
VMware ESXi ( VMWARE_ESX )
VMware NSX ( VMWARE_NSX )
VMware vCenter ( VMWARE_VCENTER )
WatchGuard ( WATCHGUARD )
Windows DNS ( WINDOWS_DNS )
Windows Event ( WINEVTLOG )
Workspace Activities ( WORKSPACE_ACTIVITY )
Workspace Alerts ( WORKSPACE_ALERTS )
Zeek JSON ( BRO_JSON )
Zscaler CASB ( ZSCALER_CASB )
The following log types, without a default parser, were added. Each is listed by product name and log_type value, if applicable.
AWS_EMR ( AWS_EMR )
Azure Application Gateway ( AZURE_GATEWAY )
CloudBolt ( CLOUDBOLT )
DNSFilter ( DNSFILTER )
GitGuardian Enterprise ( GITGUARDIAN_ENTERPRISE )
GoAnywhere MFT ( GOANYWHERE_MFT )
IBM Security Identity Manager ( IBM_SIM )
Jamf Pro MDM ( JAMF_PRO_MDM )
MultiPay ( MULTIPAY )
Palo Alto Networks IoT Security ( PAN_IOT )
Raritan Dominion SX II ( RARITAN_DOMINION )
For a list of supported log types and details about default parser changes, see Supported log types and default parsers .
October 04, 2023
Change
Chronicle Curated Detections has been enhanced with new detection content for Google Cloud threats . These new rule sets help identify reconnaissance and exploitation behavior from open source Kubernetes tools.
Change
The submit_parser command now has an option to skip validation if no logs are found. For more information, see the Chronicle CLI user guide .
October 03, 2023
Feature
The Chronicle SIEM user interface has a new top-level navigation to help you access the most commonly used Chronicle SIEM features. It works much the same as the navigation for Chronicle Security Operations. The new navigation menu expands from the left side of the screen, replacing the 9-dot icon at the top right. It is designed to make it easier to find information and resources and to help you work more efficiently. The Chronicle homepage can be accessed by clicking the Chronicle logo at the top left of the page. Reference lists can now be found within the Search page or the Rules Editor page.
September 20, 2023
Change
The following supported default parsers have changed. Each is listed by product name and log_type value, if applicable.
Akamai Cloud Monitor ( AKAMAI_CLOUD_MONITOR )
AWS Cloudtrail ( AWS_CLOUDTRAIL )
AWS WAF ( AWS_WAF )
BIND ( BIND_DNS )
Cisco Email Security ( CISCO_EMAIL_SECURITY )
Cisco Firepower NGFW ( CISCO_FIREPOWER_FIREWALL )
Cisco Umbrella Web Proxy ( UMBRELLA_WEBPROXY )
Cloud DNS ( N/A )
Cloud SQL ( GCP_CLOUDSQL )
CSV Custom IOC ( CSV_CUSTOM_IOC )
Desynova Contido ( DESYNOVA_CONTIDO )
Elastic Windows Event Log Beats ( ELASTIC_WINLOGBEAT )
F5 Advanced Firewall Management ( F5_AFM )
Firewall Rule Logging ( N/A )
FortiMail Email Security ( FORTINET_FORTIMAIL )
GCP_KUBERNETES_CONTEXT ( GCP_KUBERNETES_CONTEXT )
Guardicore Centra ( GUARDICORE_CENTRA )
IBM Security Access Manager ( IBM_SAM )
Jamf Protect Telemetry ( JAMF_TELEMETRY )
Linux Auditing System (AuditD) ( AUDITD )
Microsoft Azure Activity ( AZURE_ACTIVITY )
Microsoft Graph API Alerts ( MICROSOFT_GRAPH_ALERT )
Microsoft Powershell ( POWERSHELL )
Netskope Web Proxy ( NETSKOPE_WEBPROXY )
Office 365 ( OFFICE_365 )
Oracle Unified Directory ( ORACLE_OUD )
Palo Alto Networks Firewall ( PAN_FIREWALL )
SecureLink ( SECURELINK )
Signal Sciences WAF ( SIGNAL_SCIENCES_WAF )
Skybox Firewall Assurance ( SKYBOX_FIREWALL_ASSURANCE )
SOTI MobiControl ( SOTI_MOBICONTROL )
Stealthbits PAM ( STEALTHBITS_PAM )
Thinkst Canary ( THINKST_CANARY )
Unix system ( NIX_SYSTEM )
Vectra Stream ( VECTRA_STREAM )
VMware NSX ( VMWARE_NSX )
VMware Tanzu Kubernetes Grid ( VMWARE_TANZU )
Windows Defender ATP ( WINDOWS_DEFENDER_ATP )
Windows Event (XML) ( WINEVTLOG_XML )
Workspace Activities ( WORKSPACE_ACTIVITY )
Zscaler ( ZSCALER_WEBPROXY )
Zscaler CASB ( ZSCALER_CASB )
ZScaler NGFW ( ZSCALER_FIREWALL )
For details about changes in each parser, see Supported default parsers .
September 19, 2023
Security
Chronicle recently disclosed a security vulnerability. For more information, see the GCP-2023-028 security bulletin .
Change
Chronicle feed management contains the following changes for the Google Cloud Storage source type:
To create a new Google Cloud Storage feed, you must use the new service account. You are no longer required to use the following Chronicle global service account: 8911409095528497-0-account@partnercontent.gserviceaccount.com . The Chronicle global service account continues to be in use for existing Google Cloud Storage feeds.
In the feed management API, the fetchFeedServiceAccount method has been added to get a Chronicle service account, which you must use when you create a new Google Cloud Storage feed.
In the feed management UI, the new field Get service account has been added to get a Chronicle service account, which you must use when you create a new Google Cloud Storage feed.
September 14, 2023
Change
Chronicle can now directly ingest the following log types from Google Cloud. Each is listed by product name and log_type value:
Cloud Intrusion Detection System ( GCP_IDS )
Cloud Load Balancing ( GCP_LOADBALANCING )
Cloud SQL ( GCP_CLOUDSQL )
Windows Event logs ( WINEVTLOG )
Linux Sysmon ( LINUX_SYSMON )
Zeek ( BRO_JSON )
Google Kubernetes Engine ( KUBERNETES_NODE )
Audit Daemon (auditd) ( AUDITD )
Apigee ( GCP_APIGEE_X )
For more information, see Ingest Google Cloud Data to Chronicle .
Feature
You can now create and manage forwarder configurations using the Chronicle user interface and also through the Chronicle Forwarder Management API .
Feature
You can now change the type of a Chronicle reference list. For more details, see reference lists .
September 06, 2023
Change
The following supported default parsers have changed. Each is listed by product name and log_type value, if applicable.
Akamai Enterprise Application Access ( AKAMAI_EAA )
AWS Cloudtrail ( AWS_CLOUDTRAIL )
AWS CloudWatch ( AWS_CLOUDWATCH )
Chrome Management ( N/A )
Cisco ASA ( CISCO_ASA_FIREWALL )
Cisco Email Security ( CISCO_EMAIL_SECURITY )
Cloud Audit Logs ( N/A )
Cloudflare WAF ( CLOUDFLARE_WAF )
Darktrace ( DARKTRACE )
Desynova Contido ( DESYNOVA_CONTIDO )
Duo Telephony Logs ( DUO_TELEPHONY )
Elastic Audit Beats ( ELASTIC_AUDITBEAT )
F5 BIGIP LTM ( F5_BIGIP_LTM )
Fidelis Network ( FIDELIS_NETWORK )
Gitlab ( GITLAB )
Imperva FlexProtect ( IMPERVA_FLEXPROTECT )
Island Browser logs ( ISLAND_BROWSER )
Juniper ( JUNIPER_FIREWALL )
Microsoft Azure Resource ( AZURE_RESOURCE_LOGS )
Microsoft Graph API Alerts ( MICROSOFT_GRAPH_ALERT )
Microsoft Sentinel ( MICROSOFT_SENTINEL )
Netscout OCI ( NETSCOUT_OCI )
Netskope Web Proxy ( NETSKOPE_WEBPROXY )
Office 365 ( OFFICE_365 )
OpenSSH ( OPENSSH )
Palo Alto Networks Firewall ( PAN_FIREWALL )
ProofPoint Secure Email Relay ( PROOFPOINT_SER )
SentinelOne Deep Visibility ( SENTINEL_DV )
SentinelOne EDR ( SENTINEL_EDR )
Suricata IDS ( SURICATA_IDS )
Symantec DLP ( SYMANTEC_DLP )
Windows Defender ATP ( WINDOWS_DEFENDER_ATP )
Windows Event ( WINEVTLOG )
Windows Event (XML) ( WINEVTLOG_XML )
Workspace Activities ( WORKSPACE_ACTIVITY )
Workspace Alerts ( WORKSPACE_ALERTS )
Workspace Users ( WORKSPACE_USERS )
Zscaler ( ZSCALER_WEBPROXY )
For details about changes in each parser, see Supported default parsers .
August 28, 2023
Feature
You can now use Cloud Monitoring to customize and receive notifications about ingestion health metrics. For more information, see Ingestion notifications for health metrics .
August 24, 2023
Change
Chronicle has updated the rules engine's YARA-L 2.0 language compiler to report warnings. Warnings flag rules that are syntactically valid but may result in unexpected behavior. You can view and expand warnings in the Rules Editor the same way you view errors. The following warnings are currently supported:
Multi-event non-distinct outcome section aggregations. For more information, see YARA-L known issues and limitations
Deprecated UDM fields or enum values
August 23, 2023
Change
The following supported default parsers have changed. Each is listed by product name and log_type value, if applicable.
Apigee ( GCP_APIGEE_X )
AppOmni ( APPOMNI )
Attivo Networks ( ATTIVO )
AWS Cloudtrail ( AWS_CLOUDTRAIL )
AWS CloudWatch ( AWS_CLOUDWATCH )
AWS GuardDuty ( GUARDDUTY )
AWS WAF ( AWS_WAF )
Blue Coat Proxy ( BLUECOAT_WEBPROXY )
Cisco Internetwork Operating System ( CISCO_IOS )
Cisco NX-OS ( CISCO_NX_OS )
Cisco Umbrella Web Proxy ( UMBRELLA_WEBPROXY )
CrowdStrike Falcon ( CS_EDR )
Crowdstrike IOC ( CROWDSTRIKE_IOC )
CyberArk Endpoint Privilege Manager (EPM) ( CYBERARK_EPM )
Elastic Windows Event Log Beats ( ELASTIC_WINLOGBEAT )
F5 Advanced Firewall Management ( F5_AFM )
GMAIL Logs ( GMAIL_LOGS )
iBoss Proxy ( IBOSS_WEBPROXY )
Ipswitch MOVEit Transfer ( IPSWITCH_MOVEIT_TRANSFER )
Juniper Junos ( JUNIPER_JUNOS )
Kubernetes Audit ( KUBERNETES_AUDIT )
Kubernetes Node ( KUBERNETES_NODE )
Microsoft AD FS ( ADFS )
Microsoft Defender For Cloud ( MICROSOFT_DEFENDER_CLOUD_ALERTS )
Microsoft Graph API Alerts ( MICROSOFT_GRAPH_ALERT )
Microsoft SQL Server ( MICROSOFT_SQL )
MISP Threat Intelligence ( MISP_IOC )
Netskope Web Proxy ( NETSKOPE_WEBPROXY )
Okta User Context ( OKTA_USER_CONTEXT )
Palo Alto Prisma Cloud Alert payload ( PAN_PRISMA_CA )
Peplink Firewall ( PEPLINK_FW )
Pulse Secure ( PULSE_SECURE_VPN )
Qualys Virtual Scanner ( QUALYS_VIRTUAL_SCANNER )
SecureLink ( SECURELINK )
Security Command Center Threat ( N/A )
Sentinelone Alerts ( SENTINELONE_ALERT )
Suricata IDS ( SURICATA_IDS )
Symantec DLP ( SYMANTEC_DLP )
Unix system ( NIX_SYSTEM )
Windows DNS ( WINDOWS_DNS )
Windows Event ( WINEVTLOG )
Windows Event (XML) ( WINEVTLOG_XML )
Workspace Activities ( WORKSPACE_ACTIVITY )
Zimperium ( ZIMPERIUM )
Zscaler Internet Access Audit Logs ( ZSCALER_INTERNET_ACCESS )
For details about changes in each parser, see Supported default parsers .
August 16, 2023
Feature
Chronicle has updated Rules Engine's YARA-L 2.0 language to support float literals. For more information, see Literals .
Change
Enhancements to strings.concat and strings.coalesce
strings.concat has been updated to take an unlimited number of arguments. For more information, see Concatenate strings or numeric types .
strings.coalesce has been updated to take an unlimited number of arguments. For more information, see Coalesce string values .
August 14, 2023
Change
Added a new argument get_validation_report to fetch the validation report for a parser or a parser extension. For more information, see Chronicle CLI user guide .
August 10, 2023
Feature
UDM Search includes a new feature, called UDM Lookup , that enables you to quickly find a UDM field if you do not know which to include in a UDM Search query. You can search for a field that contains a text string in the name or that stores a specific string value. For more information, see Find a UDM field for search query .
Feature
When viewing an event using Event Viewer, each UDM field is labeled with an icon ( U or E ) that identifies whether the field stores enriched or unenriched data. For more information, see View events in the Event Viewer .
Change
UDM Search behavior has been enhanced. When no search results are returned by a query, the page displays empty panels (Events, Quick Filters, Alerts, etc.) with messages indicating that nothing was found.
August 09, 2023
Change
The following supported default parsers have changed. Each is listed by product name and log_type value, if applicable.
Apache ( APACHE )
AWS Cloudtrail ( AWS_CLOUDTRAIL )
AWS GuardDuty ( GUARDDUTY )
Azure AD Directory Audit ( AZURE_AD_AUDIT )
Cambium Networks ( CAMBIUM_NETWORKS )
Cisco ASA ( CISCO_ASA_FIREWALL )
Cisco Firepower NGFW ( CISCO_FIREPOWER_FIREWALL )
Cisco ISE ( CISCO_ISE )
CrowdStrike Falcon ( CS_EDR )
Department of Homeland Security ( DHS_IOC )
Duo Auth ( DUO_AUTH )
F5 ASM ( F5_ASM )
Fortinet FortiEDR ( FORTINET_FORTIEDR )
GitHub ( GITHUB )
Imperva ( IMPERVA_WAF )
Juniper ( JUNIPER_FIREWALL )
Menlo Security ( MENLO_SECURITY )
Microsoft AD ( WINDOWS_AD )
Microsoft Azure Resource ( AZURE_RESOURCE_LOGS )
Microsoft Defender for Endpoint ( MICROSOFT_DEFENDER_ENDPOINT )
Neosec ( NEOSEC )
Net Suite ( NET_SUITE )
Office 365 ( OFFICE_365 )
Oracle Unified Directory ( ORACLE_OUD )
Palo Alto Panorama ( PAN_PANORAMA )
Proofpoint Observeit ( OBSERVEIT )
Qualys Asset Context ( QUALYS_ASSET_CONTEXT )
Qualys Virtual Scanner ( QUALYS_VIRTUAL_SCANNER )
SentinelOne Deep Visibility ( SENTINEL_DV )
Tanium Threat Response ( TANIUM_THREAT_RESPONSE )
Thinkst Canary ( THINKST_CANARY )
TrendMicro Web Proxy ( TRENDMICRO_WEBPROXY )
Vectra Stream ( VECTRA_STREAM )
VMware Workspace ONE ( VMWARE_WORKSPACE_ONE )
Windows Event ( WINEVTLOG )
Workspace Activities ( WORKSPACE_ACTIVITY )
For details about changes in each parser, see Supported default parsers .
July 27, 2023
Announcement
Direct Chronicle customers will begin to see the new self-service parser management feature enabled in their Chronicle instance. This feature allows you to create and customize parsers. After the feature is enabled, you will also see pre-release versions of default parsers listed on the Parsers page before they are released. The pre-release versions are identified as Pending updates.
For more information, see Overview of log parsing and Manage prebuilt and custom parsers .
July 26, 2023
Change
The following supported default parsers have changed. Each is listed by product name and log_type value, if applicable.
Attivo Networks ( ATTIVO )
AWS Cloudtrail ( AWS_CLOUDTRAIL )
AWS S3 Server Access ( AWS_S3_SERVER_ACCESS )
Azure AD ( AZURE_AD )
Azure AD Directory Audit ( AZURE_AD_AUDIT )
Azure WAF ( AZURE_WAF )
Barracuda WAF ( BARRACUDA_WAF )
Barracuda Web Filter ( BARRACUDA_WEBFILTER )
CA Access Control ( CA_ACCESS_CONTROL )
Carbon Black ( CB_EDR )
Chrome Management ( N/A )
Cisco ISE ( CISCO_ISE )
Cisco Meraki ( CISCO_MERAKI )
Citrix Netscaler ( CITRIX_NETSCALER )
Cloud Audit Logs ( N/A )
Cloud Functions Context ( GCP_CLOUD_FUNCTIONS_CONTEXT )
Cloud SQL Context ( GCP_SQL_CONTEXT )
CrowdStrike Detection Monitoring ( CS_DETECTS )
Darktrace ( DARKTRACE )
Datadog ( DATADOG )
Dell EMC Isilon NAS ( DELL_EMC_NAS )
Elastic Windows Event Log Beats ( ELASTIC_WINLOGBEAT )
F5 BIGIP LTM ( F5_BIGIP_LTM )
FortiGate ( FORTINET_FIREWALL )
Fortinet FortiAnalyzer ( FORTINET_FORTIANALYZER )
Google Cloud Identity Context ( CLOUD_IDENTITY_CONTEXT )
IAM Context ( N/A )
IBM z/OS ( IBM_ZOS )
Imperva Advanced Bot Protection ( IMPERVA_ABP )
Imperva Database ( IMPERVA_DB )
Ipswitch MOVEit Transfer ( IPSWITCH_MOVEIT_TRANSFER )
macOS Endpoint Security ( MACOS_ENDPOINT_SECURITY )
Microsoft Graph API Alerts ( MICROSOFT_GRAPH_ALERT )
MISP Threat Intelligence ( MISP_IOC )
Netskope ( NETSKOPE_ALERT )
Office 365 ( OFFICE_365 )
Okta User Context ( OKTA_USER_CONTEXT )
Open LDAP ( OPENLDAP )
Proofpoint Observeit ( OBSERVEIT )
Qualys Asset Context ( QUALYS_ASSET_CONTEXT )
Resource Manager Context ( GCP_RESOURCE_MANAGER_CONTEXT )
Security Command Center Threat ( N/A )
Sentinelone Alerts ( SENTINELONE_ALERT )
Tanium Threat Response ( TANIUM_THREAT_RESPONSE )
TrendMicro Web Proxy ( TRENDMICRO_WEBPROXY )
Vectra Stream ( VECTRA_STREAM )
VMware ESXi ( VMWARE_ESX )
Wazuh ( WAZUH )
Windows Event (XML) ( WINEVTLOG_XML )
Workspace Activities ( WORKSPACE_ACTIVITY )
Workspace Users ( WORKSPACE_USERS )
For details about changes in each parser, see Supported default parsers .
July 21, 2023
Feature
Chronicle is now supported on the Mozilla Firefox browser. When running Chronicle, be sure to use the latest version of Firefox.
July 12, 2023
Change
The following supported default parsers have changed. Each is listed by product name and ingestion label, if applicable.
Absolute Mobile Device Management ( ABSOLUTE )
AWS Cloudtrail ( AWS_CLOUDTRAIL )
AWS CloudWatch ( AWS_CLOUDWATCH )
BIND ( BIND_DNS )
Check Point ( CHECKPOINT_FIREWALL )
Chrome Management ( N/A )
Cisco Meraki ( CISCO_MERAKI )
Cloud Audit Logs ( N/A )
Cloud Load Balancing ( GCP_LOADBALANCING )
Cloudflare Audit ( CLOUDFLARE_AUDIT )
F5 ASM ( F5_ASM )
Fortinet FortiEDR ( FORTINET_FORTIEDR )
IBM Security Verify SaaS ( IBM_SECURITY_VERIFY_SAAS )
IBM Security Verify SaaS ( IBM_SECURITY_VERIFY_SAAS )
Imperva FlexProtect ( IMPERVA_FLEXPROTECT )
Jamf Protect Telemetry ( JAMF_TELEMETRY )
Juniper Software Defined Wide Area Network ( JUNIPER_SDWAN )
Microsoft AD ( WINDOWS_AD )
Microsoft Azure Resource ( AZURE_RESOURCE_LOGS )
Microsoft CASB ( MICROSOFT_CASB )
Microsoft Powershell ( POWERSHELL )
Microsoft SQL Server ( MICROSOFT_SQL )
MISP Threat Intelligence ( MISP_IOC )
Netskope ( NETSKOPE_ALERT )
Okta ( OKTA )
SecureAuth ( SECUREAUTH_SSO )
Security Command Center Threat ( N/A )
SentinelOne EDR ( SENTINEL_EDR )
Sierra Wireless ( SIERRA_WIRELESS )
Sourcefire ( SOURCEFIRE_IDS )
Stormshield Firewall ( STORMSHIELD_FIREWALL )
Versa Firewall ( VERSA_FIREWALL )
Windows Event ( WINEVTLOG )
Workspace Activities ( WORKSPACE_ACTIVITY )
For details about changes in each parser, see Supported default parsers .
Change
Chronicle Curated Detections has been enhanced with new detection content for Linux threats . These new rule sets help identify threats in Linux environments using AuditD and Unix System logs.
July 10, 2023
Feature
Chronicle provides multiple methods to define how data in original raw logs are parsed and normalized to a Unified Data Model (UDM) record. Using the Self Service Parser Management feature, customers can now create and customize parsers. For more information, see Overview of log parsing and Manage prebuilt and custom parsers .
July 06, 2023
Feature
When you create dashboards, you can make use of the following enhancements to UDM Events Explore:
Search and navigation improvements. When you navigate or search for events in UDM Events Explore, the results appear instantly and field names are easy to identify.
Improvements to field names and descriptions. The field names and path are now consistent with the pattern used in Detection Engine rules and UDM search. For example, the field name Udm Events Principal Hostname now appears as UDM principal.hostname as in documentation. Also, in addition to online help, in-context descriptions are available for UDM fields. For example, deprecated fields are indicated by the suffix [D] in the field name.
User experience improvements in UDM Events Explore. When you use UDM Events Explore, user experience is improved by removing unused and rarely used fields. Also, you can filter based on the grouped fields.
Field conversion improvements. Added fields that automatically handle conversion of formats. Here are some examples:
Enum fields also contain human readable values. For example, the values for the UDM.network.ip_protocol enum also appear as ICMP, TCP, and UDP instead of 1, 2, and 3.
Timestamp fields are available in multiple date formats. Previously, timestamp fields were available only in nano and second formats.
Location fields are parsed accurately and can be used in maps.
Report improvements. Made data in reports up-to-date by using the events table in BigQuery. Also, existing reports that previously used udm_events will use the events table.
July 05, 2023
Change
Enhancements to outcome section in rules:
Outcome variables can be used to derive the value of another outcome variable.
Arithmetic expressions can include aggregations, unaggregated event fields, constants, and outcome variables as operands.
June 29, 2023
Feature
Google has added Israel (Tel Aviv) as a new region for Chronicle customers. Chronicle can now store customer data in this region. This also adds a new regional endpoint for Chronicle APIs at https://me-west1-backstory.googleapis.com .
June 28, 2023
Change
The following supported default parsers have changed. Each is listed by product name and ingestion label, if applicable.
AIX system ( AIX_SYSTEM )
Auth0 ( AUTH_ZERO )
AWS Cloudtrail ( AWS_CLOUDTRAIL )
AWS GuardDuty ( GUARDDUTY )
AWS Security Hub ( AWS_SECURITY_HUB )
AWS Session Manager ( AWS_SESSION_MANAGER )
Blue Coat Proxy ( BLUECOAT_WEBPROXY )
Check Point ( CHECKPOINT_FIREWALL )
Chrome Management ( N/A )
Cisco Firepower NGFW ( CISCO_FIREPOWER_FIREWALL )
Cisco Meraki ( CISCO_MERAKI )
Cisco NX-OS ( CISCO_NX_OS )
Cisco Stealthwatch ( CISCO_STEALTHWATCH )
CrowdStrike Falcon ( CS_EDR )
Digi modems ( DIGI_MODEMS )
GitHub ( GITHUB )
IBM Security Verify SaaS ( IBM_SECURITY_VERIFY_SAAS )
Imperva ( IMPERVA_WAF )
Infoblox DNS ( INFOBLOX_DNS )
Jamf Protect Alerts ( JAMF_PROTECT )
Jamf Protect Telemetry ( JAMF_TELEMETRY )
Kisi Access Management ( KISI )
Kubernetes Audit Azure ( KUBERNETES_AUDIT_AZURE )
Kubernetes Node ( KUBERNETES_NODE )
Linux Auditing System (AuditD) ( AUDITD )
McAfee ePolicy Orchestrator ( MCAFEE_EPO )
McAfee MVISION CASB ( MCAFEE_MVISION_CASB )
McAfee Skyhigh CASB ( MCAFEE_SKYHIGH_CASB )
McAfee Web Gateway ( MCAFEE_WEBPROXY )
Microsoft AD ( WINDOWS_AD )
Microsoft AD FS ( ADFS )
Microsoft Defender for Endpoint ( MICROSOFT_DEFENDER_ENDPOINT )
Microsoft Exchange ( EXCHANGE_MAIL )
Netskope Web Proxy ( NETSKOPE_WEBPROXY )
Office 365 ( OFFICE_365 )
Open Cybersecurity Schema Framework (OCSF) ( OCSF )
Palo Alto Networks Firewall ( PAN_FIREWALL )
Security Command Center Threat ( N/A )
Static IP ( ASSET_STATIC_IP )
Symantec Web Security Service ( SYMANTEC_WSS )
ThreatLocker Platform ( THREATLOCKER )
Tripwire ( TRIPWIRE_FIM )
VMware NSX ( VMWARE_NSX )
VMware vRealize Suite ( VMWARE_VREALIZE )
Windows DNS ( WINDOWS_DNS )
Windows Event ( WINEVTLOG )
Zscaler ( ZSCALER_WEBPROXY )
For details about changes in each parser, see Supported default parsers .
June 23, 2023
Feature
The Chronicle Data in BigQuery feature, including the export pipeline and events table, has been improved. Data for the
events table is stored as parquet files in Google Cloud Storage which provides
more flexibility for users who want to export data. See Chronicle documentation
for more information about
data export to BigQuery ,
the
events table ,
and the
BigQuery Access API .
June 22, 2023
Feature
You can now share a dashboard file between instances or within an instance between different users. The dashboard can be shared without manually creating copies.
Change
The predefined reference lists for Curated Detections have been replaced by rule exclusions . You will see the following changes:
Reference lists are not available in the Cloud Threats and Windows Threats categories and are not displayed in the settings page for these rule sets.
Any category-specific reference lists that were currently empty have been deleted.
Any category-specific reference lists that were not empty have been migrated to an equivalent rule exclusion.
You can now use rule exclusions to tune the number of alerts returned by Curated Detections.
June 16, 2023
Change
A new Google Cloud Threat Intelligence (GCTI) data source is available, called
GCTI Remote Access Tools, that provides additional contextual information when
investigating activity in your environment. This data source contains files that
have frequently been used by malicious actors. For more information, see
Data about remote access tools , and Query data about remote access tools .
June 14, 2023
Change
IOC matching has been changed so that a domain match occurs only if the event timestamp lies within the active time range interval present in the threat intelligence feed. If a threat intelligence feed does not have an active time range interval, an IOC match is returned anytime the domain is identified in feed data. For information about IOC Domain matches, see View IOC matches .
Change
The following supported default parsers have changed. Each is listed by product name and ingestion label, if applicable.
Microsoft AD FS ( ADFS )
Apache ( APACHE )
Linux Auditing System (AuditD) ( AUDITD )
AWS Cloudtrail ( AWS_CLOUDTRAIL )
Azure Firewall ( AZURE_FIREWALL )
Zeek JSON ( BRO_JSON )
Cisco ASA ( CISCO_ASA_FIREWALL )
Cisco Firepower NGFW ( CISCO_FIREPOWER_FIREWALL )
Cisco ISE ( CISCO_ISE )
Cisco Meraki ( CISCO_MERAKI )
Cisco VCS Expressway ( CISCO_VCS )
Corelight ( CORELIGHT )
CrowdStrike Detection Monitoring ( CS_DETECTS )
Digital Guardian DLP ( DIGITALGUARDIAN_DLP )
F5 BIGIP Access Policy Manager ( F5_BIGIP_APM )
Elastic Windows Event Log Beats ( ELASTIC_WINLOGBEAT )
Fluentd Logs ( FLUENTD )
Forcepoint Proxy ( FORCEPOINT_WEBPROXY )
Forescout NAC ( FORESCOUT_NAC )
FortiGate ( FORTINET_FIREWALL )
Apigee ( GCP_APIGEE_X )
Cloud SQL ( GCP_CLOUDSQL )
GitHub ( GITHUB )
GMAIL Logs ( GMAIL_LOGS )
Apache Hadoop ( HADOOP )
Imperva ( IMPERVA_WAF )
Kemp Load Balancer ( KEMP_LOADBALANCER )
McAfee Web Gateway ( MCAFEE_WEBPROXY )
Microsoft Defender for Endpoint ( MICROSOFT_DEFENDER_ENDPOINT )
Cloud Audit Logs ( N/A )
Firewall Rule Logging ( N/A )
Security Command Center Threat ( N/A )
Netskope ( NETSKOPE_ALERT )
Netskope Web Proxy ( NETSKOPE_WEBPROXY )
Office 365 ( OFFICE_365 )
Okta ( OKTA )
Okta User Context ( OKTA_USER_CONTEXT )
1Password ( ONEPASSWORD )
OSQuery ( OSQUERY_EDR )
OSSEC ( OSSEC )
Palo Alto Networks Firewall ( PAN_FIREWALL )
Proofpoint On Demand ( PROOFPOINT_ON_DEMAND )
Proofpoint Web Browser Isolation( PROOFPOINT_WEB_BROWSER_ISOLATION )
Saviynt Enterprise Identity Cloud ( SAVIYNT_EIP )
SentinelOne EDR ( SENTINEL_EDR )
Sentinelone Alerts ( SENTINELONE_ALERT )
Tripwire ( TRIPWIRE_FIM )
Windows Defender ATP ( WINDOWS_DEFENDER_ATP )
Windows Event ( WINEVTLOG )
WordPress ( WORDPRESS_CMS )
Workspace Activities ( WORKSPACE_ACTIVITY )
ZScaler VPN ( ZSCALER_VPN )
For details about changes in each parser, see Supported default parsers .
June 09, 2023
Change
UDM Search
You can now search on fields of type bytes in UDM search. Chronicle uses base64 encoding for byte literals. Byte literals must be enclosed in double quotes prefixed with the letter b, as shown in the following examples:
network.dhcp.client_identifier = b"7Ixbub6A0KMvugAAAAA"
metadata.id = b"AAAAADg51kPYn7Ixbub6A0KMvugAAAAABQAAAAgAAAA="
June 06, 2023
Change
The following changes are available in the Unified Data Model.
New fields were added to Entity , called risk_score and metric .
A new field was added to EntityMetadata , called
event_metadata .
The following new types were added to Entity :
EntityRisk
Metric
RiskDelta
Metric.Measure
The following new types were added to Event :
AttackDetails
ExifInfo
FileMetadataCodesign
FileMetadataPE
FileMetadataSignatureInfo
PDFInfo
SignatureInfo
X509
AttackDetails.Tactic
AttackDetails.Technique
SecurityResult.Association
SecurityResult.Association.AssociationAlias
SecurityResult.Source
SecurityResult.ProviderMLVerdict
SecurityResult.AnalystVerdict
SecurityResult.Verdict
The following new enumerated types were added to Entity :
Metric.AggregateFunction
Metric.Dimension
Metric.MetricName
Relation.EntityLabel
The following new enumerated types were added to Event :
Process
TokenElevationType
SecurityResult.VerdictResponse
SecurityResult.Association.AssociationType
New field added to Relation , called entity_label .
New value added to EntityMetadata.EntityType , called
METRIC .
New fields added to Event.Metadata called log_type , base_labels , enrichment_labels .
New fields added to Noun , called security_result and
network .
New fields added to SecurityResult , called risk_score ,
attack_details , first_discovered_time ,
associations , campaigns , and verdicts .
New fields added to File , called pe_file ,
tags , last_analysis_time , embedded_urls ,
embedded_domains , embedded_ips ,
exif_info , signature_info , pdf_info .
New field added to Process , called integrity_level_rid
and token_elevation_type .
New fields added to SignerInfo , called status ,
valid_usage , cert_issuer .
The Resource.id field was deprecated. Use
resource.name or resource.product_object_id instead.
The following values were added to the EventTypes enumerated type:
DEVICE_FIRMWARE_UPDATE
DEVICE_CONFIG_UPDATE
DEVICE_PROGRAM_UPLOAD
DEVICE_PROGRAM_DOWNLOAD
The following additional values were added to the
ApplicationProtocol enumerated type:
CIP
COTP
DNP3
DICOM
GOOSE
IEC104
MMS
PTP
SNMP
SV
New values added to the Network.IpProtocol enumerated type, called ICMP and SCTP .
For a list of all fields in the Unified Data Model, and their descriptions, see
the Unified Data Model field
list .
June 05, 2023
Change
Chronicle now links to a customer-supplied Google Cloud Project to integrate
more closely with Google Cloud services, such as Cloud IAM, Cloud Monitoring,
and Cloud Audit Logs. Customers can now use Cloud IAM and workforce identity
federation to authenticate using their existing identity provider.
Chronicle provides an onboarding and migration portal, available via Cloud
Console, where new customers are able to provision and configure a new Chronicle
SIEM instance, and existing customers can bind their current Chronicle SIEM
instance to Google Cloud services.
For more information, see the following documentation:
Configure a Google Cloud project for Chronicle
Configure Chronicle with a third-party identity provider
Link a Chronicle instance to Google Cloud services
June 02, 2023
Change
The following supported default parsers have changed. Each is listed by product name and ingestion label, if applicable.
Aruba ( ARUBA_WIRELESS )
AWS Cloudtrail ( AWS_CLOUDTRAIL )
Azure AD Directory Audit ( AZURE_AD_AUDIT )
Cato Networks ( CATO_NETWORKS )
Cisco ISE ( CISCO_ISE )
Cisco Meraki ( CISCO_MERAKI )
Cisco PIX Firewall ( CISCO_PIX_FIREWALL )
Dope Security SWG ( DOPE_SWG )
F5 BIGIP LTM ( F5_BIGIP_LTM )
Falco IDS ( FALCO_IDS )
Fidelis Network ( FIDELIS_NETWORK )
ForgeRock OpenAM ( OPENAM )
FortiGate ( FORTINET_FIREWALL )
FortiMail Email Security ( FORTINET_FORTIMAIL )
Fortinet Web Application Firewall ( FORTINET_FORTIWEB )
GMAIL Logs ( GMAIL_LOGS )
IBM Safenet ( IBM_SAFENET )
IBM Security Access Manager ( IBM_SAM )
IBM Security QRadar SIEM ( IBM_QRADAR )
Microsoft Defender for Endpoint ( MICROSOFT_DEFENDER_ENDPOINT )
Microsoft Graph API Alerts ( MICROSOFT_GRAPH_ALERT )
Mongo Database ( MONGO_DB )
Office 365 ( OFFICE_365 )
Okta ( OKTA )
Oracle Cloud Infrastructure Audit Logs ( OCI_AUDIT )
Proofpoint Threat Response ( PROOFPOINT_TRAP )
Pulse Secure ( PULSE_SECURE_VPN )
Security Command Center Threat ( N/A )
Sentinelone Alerts ( SENTINELONE_ALERT )
SentinelOne EDR ( SENTINEL_EDR )
ServiceNow CMDB ( SERVICENOW_CMDB )
SonicWall ( SONIC_FIREWALL )
Strong Swan VPN ( STRONGSWAN_VPN )
ThreatLocker Platform ( THREATLOCKER )
VMware vRealize Suite ( VMWARE_VREALIZE )
VPC Flow Logs ( GCP_VPC_FLOW )
WatchGuard ( WATCHGUARD )
Windows DNS ( WINDOWS_DNS )
Windows Event ( WINEVTLOG )
Workspace Activities ( WORKSPACE_ACTIVITY )
For details about changes in each parser, see Supported default parsers .
June 01, 2023
Change
Updated content to reflect the new Alert view and Alert list.
The following changes have been made to Alert view:
New Overview and Alert History tabs. The Overview section provides a snapshot of important alert information. This is separate from the History tab to clearly differentiate between alert investigation and audit area.
Detection widget now has a view other alerts from this rule button to get fast access to more alerts that came from this rule. Users can pivot to other alerts from this rule.
Updated information on how to close an alert and change alert status.
Updated information on how to adjust the time range.
Updated information on how to apply single and multiple filters.
The following changes have been made to Alert list:
Expanded columns to include Risk Score and Tags. This helps users to focus on and prioritize high-risk and critical security findings.
Ingestion Time and Last Modified were also added to Alert List.
Users can now customize columns in the Alert list, add or remove columns from the table.
Expanded filters to include OR and AND operators to allow more complex filtering.
Updated information on how to refresh Alert List.
These changes are documented in Investigate an alert and View Alerts and IOCs .
May 26, 2023
Announcement
Starting June 7, 2023, Chronicle will no longer use reference lists to reduce the number of alerts generated by Curated Detection rule sets. The predefined reference lists for Curated Detections will be replaced by rule exclusions . You will see the following changes:
Reference lists will not be available in the Cloud Threats and Windows Threats categories and will not be displayed in the settings page for these rule sets.
Any category-specific reference lists that are currently empty will be deleted.
Any category-specific reference lists that are not empty will be automatically migrated to an equivalent rule exclusion.
No action is required. Rule set behavior should not be affected because category-specific reference lists will be replaced with rule exclusions.
Going forward, we recommend using rule exclusions to tune the number of alerts returned by Curated Detections.
The end of support process is gradual, and you may see some Curated Detection rule sets in a partial migration state before the process is complete. The process should complete by June 21, 2023.
May 25, 2023
Deprecated
On or after July 1, 2023, the existing udm_events table in Chronicle-managed BigQuery projects will be fully replaced with a new table named events. This new table is currently available for all customers . Chronicle will handle all changes in-product for this new table. Customers issuing queries against the udm_events table through the Cloud console or through the API should fully migrate queries to the new table by July 1 to avoid interruption.
May 24, 2023
Change
Chronicle Curated Detections has been enhanced with the following additional detection content for Cloud threats . A new rule set was added, called Cloud SQL Ransom, that detects activity associated with exfiltration or ransom of data within Cloud SQL databases.
Feature
Chronicle has updated Rules Engine's YARA-L 2.0 language to support more functionality for handling arrays.
A new arrays.length() function has been added. This function returns the number of elements in a repeated field. For more information, see YARA-L 2.0 language syntax .
You can now perform array indexing on repeated fields using bracket notation. This lets you access an element of a repeated field at a specific index. For more information, see YARA-L 2.0 language syntax .
May 23, 2023
Fixed
Single event rules meeting all of the following conditions have been reclassified as multiple event rules to increase detections:
Includes a match section.
Includes one or more conditions on outcome variables in the condition section.
Includes a simple existence condition on exactly one event variable in the condition section.
Affected rules will be automatically reprocessed to find any missed detections over the next 5 to 6 business days.
May 19, 2023
Change
The following supported default parsers have changed. Each is listed by product name and ingestion label, if applicable.
1Password ( ONEPASSWORD )
AMD Pensando DSS Firewall ( AMD_DSS_FIREWALL )
Atlassian Confluence ( ATLASSIAN_CONFLUENCE )
AWS Network Firewall ( AWS_NETWORK_FIREWALL )
AWS Route 53 DNS ( AWS_ROUTE_53 )
AWS S3 Server Access ( AWS_S3_SERVER_ACCESS )
Azure AD Directory Audit ( AZURE_AD_AUDIT )
Bitdefender ( BITDEFENDER )
Check Point ( CHECKPOINT_FIREWALL )
Cisco ASA ( CISCO_ASA_FIREWALL )
Cisco Firepower NGFW ( CISCO_FIREPOWER_FIREWALL )
Cisco Firewall Services Module ( CISCO_FWSM )
Cisco Router ( CISCO_ROUTER )
Cisco Vision Dynamic Signage Director ( CISCO_STADIUMVISION )
Cloud DNS ( N/A )
CrowdStrike Falcon ( CS_EDR )
Crowdstrike IOC ( CROWDSTRIKE_IOC )
F5 Advanced Firewall Management ( F5_AFM )
F5 ASM ( F5_ASM )
F5 BIGIP LTM ( F5_BIGIP_LTM )
FireEye HX ( FIREEYE_HX )
ForgeRock OpenAM ( OPENAM )
Fortinet FortiAnalyzer ( FORTINET_FORTIANALYZER )
Fortinet FortiEDR ( FORTINET_FORTIEDR )
HAProxy ( HAPROXY )
Juniper ( JUNIPER_FIREWALL )
Microsoft IIS ( IIS )
Microsoft SQL Server ( MICROSOFT_SQL )
Office 365 Message Trace ( OFFICE_365_MESSAGETRACE )
Okta User Context ( OKTA_USER_CONTEXT )
OpenSSH ( OPENSSH )
Oracle Cloud Infrastructure VCN Flow Logs ( OCI_FLOW )
Proofpoint Observeit ( OBSERVEIT )
Rapid7 Insight ( RAPID7_INSIGHT )
SAP Netweaver ( SAP_NETWEAVER )
Security Command Center Threat ( N/A )
Splunk Platform ( SPLUNK )
Teleport Access Plane ( TELEPORT_ACCESS_PLANE )
Thinkst Canary ( THINKST_CANARY )
Trend Micro AV ( TRENDMICRO_AV )
Trustwave webmarshal ( WEBMARSHAL )
VMware AirWatch ( AIRWATCH )
WatchGuard ( WATCHGUARD )
For details about changes in each parser, see Supported default parsers .
May 10, 2023
Change
The following supported default parsers have changed. Each is listed by product name and ingestion label, if applicable.
Aruba EdgeConnect SD-WAN ( ARUBA_EDGECONNECT_SDWAN )
AWS RDS ( AWS_RDS )
Cloud Audit Logs ( N/A )
Cloud DNS ( N/A )
Cloud Run ( N/A )
Cloud SQL ( N/A )
Cofense ( COFENSE_TRIAGE )
CoSoSys Protector ( ENDPOINT_PROTECTOR_DLP )
Elastic Windows Event Log Beats ( ELASTIC_WINLOGBEAT )
Microsoft Defender for Endpoint ( MICROSOFT_DEFENDER_ENDPOINT )
pfSense ( PFSENSE )
Qualys VM ( QUALYS_VM )
SentinelOne EDR ( SENTINEL_EDR )
VMware AirWatch ( AIRWATCH )
VMware vRealize Suite ( VMWARE_VREALIZE )
Windows Event ( WINEVTLOG )
For details about changes in each parser, see Supported default parsers .
May 04, 2023
Change
Chronicle made the following changes to the detection engine rules and YARA-L language:
Expanded support for arithmetic operations. You can now use multiplication and
division in the events section and outcome section of rules. For more
information, see Mathematical
operations .
You can now join an event with an entity, and then check for absence of the event. For more information, see Event and placeholder conditionals .
Keywords, such as and , match , or condition in YARA-L 2.0 are now case-insensitive. This change does not affect function names, which are case sensitive. For a list of keywords, see Keywords .
A new coalesce() function has been added to the YARA-L syntax. This function returns the first non-empty string passed to it. For more information, see YARA-L 2.0 language syntax .
You can now use the nocase keyword when evaluating a reference list to perform case-insensitive matching for both String and Regex reference lists. For more information, see Reference lists syntax .
Reference list limits have increased. Chronicle increased the maximum number of lines for Regex type reference lists to 100 and for CIDR type reference lists to 150. In addition, Chronicle increased the maximum number of statements in a rule that evaluate a reference list from 2 to 4.
May 02, 2023
Change
The following supported default parsers have changed. Each is listed by product name and ingestion label, if applicable.
1Password ( ONEPASSWORD )
Akamai WAF ( AKAMAI_WAF )
AppOmni ( APPOMNI )
Arcsight CEF ( ARCSIGHT_CEF )
Azure AD Directory Audit ( AZURE_AD_AUDIT )
Blue Coat Proxy ( BLUECOAT_WEBPROXY )
Check Point ( CHECKPOINT_FIREWALL )
Cisco ASA ( CISCO_ASA_FIREWALL )
Cisco Firepower NGFW ( CISCO_FIREPOWER_FIREWALL )
Cisco ISE ( CISCO_ISE )
Cisco Switch ( CISCO_SWITCH )
Cloud Audit Logs ( N/A )
Cloud Storage Context ( N/A )
Cloudflare ( CLOUDFLARE )
CrowdStrike Detection Monitoring ( CS_DETECTS )
CrowdStrike Falcon ( CS_EDR )
DigitalArts i-Filter ( DIGITALARTS_IFILTER )
FireEye HX ( FIREEYE_HX )
FortiGate ( FORTINET_FIREWALL )
Hashicorp Vault ( HASHICORP )
Imperva ( IMPERVA_WAF )
Imperva SecureSphere Management ( IMPERVA_SECURESPHERE )
Infoblox DHCP ( INFOBLOX_DHCP )
JAMF CMDB ( JAMF )
Linux Auditing System (AuditD) ( AUDITD )
Microsoft Graph API Alerts ( MICROSOFT_GRAPH_ALERT )
NetApp SAN ( NETAPP_SAN )
Office 365 ( OFFICE_365 )
Okta ( OKTA )
Palo Alto Networks Firewall ( PAN_FIREWALL )
Ping Federate ( PING_FEDERATE )
Qualys Scan ( QUALYS_SCAN )
Security Command Center Threat ( N/A )
SentinelOne EDR ( SENTINEL_EDR )
Snyk Group level audit Logs ( SNYK_SDLC )
Symantec Endpoint Protection ( SEP )
Unix system ( NIX_SYSTEM )
Vectra Detect ( VECTRA_DETECT )
Windows DNS ( WINDOWS_DNS )
Windows Event ( WINEVTLOG )
Workspace Activities ( WORKSPACE_ACTIVITY )
Workspace Alerts ( WORKSPACE_ALERTS )
Workspace ChromeOS Devices ( WORKSPACE_CHROMEOS )
Workspace Groups ( WORKSPACE_GROUPS )
Workspace Mobile Devices ( WORKSPACE_MOBILE )
Workspace Privileges ( WORKSPACE_PRIVILEGES )
Workspace Users ( WORKSPACE_USERS )
For details about changes in each parser, see Supported default parsers .
May 01, 2023
Feature
UDM Search Pivot Table
The UDM Search Pivot Table enables you to further analyze your UDM search results, giving you the following capabilities:
Group search results by up to five UDM fields.
Perform aggregations (sum, count, count distinct, average, stddev, min, and max) on up to to five values within the UDM fields (for example, domains, users, and products).
Sort results of the pivot table (ascending, descending)
This feature is being enabled for global customers in a phased manner and is expected to fully roll out over the next month.
April 25, 2023
Deprecated
Chronicle forwarder executable for Windows is deprecated and is scheduled for shutdown on March 31, 2024. To install the Chronicle forwarder on Microsoft Windows, use Chronicle forwarder for Windows on Docker .
Feature
You can now install and configure Chronicle forwarder for Windows on Docker . This Docker installation provides better security through isolation and the container distribution mechanism can be private and separate for Google Cloud and customers. This release also includes the following updates:
The forwarder signing key will be rotated every 6 months for security. You must update the Chronicle forwarder for Windows on Docker image every 6 months.
The minimum batch size for forwarder is now increased to 200KB for better performance.
Data compression is now enabled by default. It reduces the network bandwidth consumption by 80%.
Hot config loading is now supported and applies configuration changes within 5 minutes without the need to restart the forwarder.
Automatic buffering handles spikes in incoming traffic by efficiently using available memory on the host system. This feature is optional.
April 21, 2023
Change
The Chronicle forwarder for Linux has been enhanced with the following changes:
After you make a change to a configuration file, either <FORWARDER_NAME>.conf or <FORWARDER_NAME>_auth.conf , the change is automatically applied within 5 minutes. You no longer need to restart the container to apply the configuration changes. For information about changing configuration files, see Customize the configuration files .
You can now configure automatic memory buffering which is a dynamically shared buffer used by collectors on a system. You specify the target memory utilization as a percentage of system RAM. For more information, see Configure disk buffering .
The forwarder's minimum batch size increased to 200 KB for better performance.
Data compression is now enabled by default, which reduces network bandwidth consumption by 80%.
If you have not updated the Chronicle forwarder for Linux Docker image since April 1, 2023, you must update it before October 31, 2023. This ensures that the Forwarder Bundle continues to receive updates.
April 20, 2023
Change
Chronicle enhanced the detection engine so that all rules have a value set to the $risk_score variable. With this change, rules that do not have a $risk_score variable defined in the outcome section will have one of the following default values set:
If the rule is configured to generate an alert, then $risk_score is set to 40.
If the rule is not configured to generate an alert, then $risk_score is set to 15.
This change applies to all existing rules and new rules that do not have a $risk_score variable defined. The change does not impact rules that define the $risk_score variable in the outcome section of the rule.
For more information about the $risk_score variable, see Outcome section syntax .
April 19, 2023
Feature
Chronicle released the following additional data enrichment and precomputed analytic capabilities that can provide additional context during an investigation:
Enriched entities with WHOIS data.
Enriched entities with VirusTotal relationship data.
Enriched events with VirusTotal file metadata.
Data from Google Cloud Threat Intelligence curated threat feeds.
Precomputed first-seen and last-seen occurrence for domains, IP addresses, and file hashes (SHA256, SHA1, MD5).
Precomputed first-seen occurrence for assets and users.
For more information, see the following documents:
How Chronicle enriches event and entity data
Use context-enriched data in UDM Search
Use context-enriched data in rules
April 14, 2023
Change
UDM saved search
The UDM saved search options have been simplified and enhanced. From the UDM Search page, click Save to save your UDM search.
You can now specify placeholder variables in the format $<variable name> using the same format as is used for variables in YARA-L.
If you add a variable to a UDM search, you must also include a prompt to help the user to understand what information they need to enter before they run the search. All variables must be populated with values prior to a search being run.
April 13, 2023
Change
The following supported default parsers have changed. Each is listed by product name and ingestion label, if applicable.
Akamai WAF ( AKAMAI_WAF )
Area1 Security ( AREA1 )
Atlassian Confluence ( ATLASSIAN_CONFLUENCE )
AWS VPC Flow ( AWS_VPC_FLOW )
Cisco Firepower NGFW ( CISCO_FIREPOWER_FIREWALL )
Cloud Audit Logs ( N/A )
Cloud Intrusion Detection System ( GCP_IDS )
Cloud Load Balancing ( GCP_LOADBALANCING )
Cloud NAT ( N/A )
Cloudflare ( CLOUDFLARE )
F5 ASM ( F5_ASM )
Security Command Center Threat ( N/A )
GMAIL Logs ( GMAIL_LOGS )
JumpCloud Directory Insights ( JUMPCLOUD_DIRECTORY_INSIGHTS )
Kubernetes Node logs ( KUBERNETES_NODE )
Linux Auditing System (AuditD) ( AUDITD )
Microsoft Graph API Alerts ( MICROSOFT_GRAPH_ALERT )
Mimecast ( MIMECAST_MAIL )
NetApp ONTAP ( NETAPP_ONTAP )
Office 365 ( OFFICE_365 )
Okta ( OKTA )
Ping Identity ( PING )
SentinelOne Deep Visibility ( SENTINEL_DV )
Sophos Firewall (Next Gen) ( SOPHOS_FIREWALL )
Symantec Endpoint Protection ( SEP )
Trustwave SEC MailMarshal ( MAILMARSHAL )
Unix system ( NIX_SYSTEM )
For details about changes in each parser, see Supported default parsers .
April 03, 2023
Feature
Google has added Australia (Sydney) as a new region for Chronicle customers. Chronicle can now store customer data in this region. This also adds a new regional endpoint for Chronicle APIs at https://australia-southeast1-backstory.googleapis.com/ .
March 30, 2023
Feature
UDM Search - Grouped fields
Grouped fields are aliases for groups of related UDM fields. You can use them to query multiple UDM fields at the same time without typing each field individually. For example, you can use the IP address grouped field to search for an IP address across most of the common UDM IP address fields.
You can match a grouped field using a regular expression and using the nocase operator. Reference lists are supported. Grouped fields can be used in combination with regular UDM fields. Grouped fields also have a separate section in Quick Filters.
March 29, 2023
Change
The following supported default parsers have changed. Each is listed by product name and ingestion label, if applicable.
Area1 Security ( AREA1 )
AWS Security Hub ( AWS_SECURITY_HUB )
Azure AD ( AZURE_AD )
Carbon Black ( CB_EDR )
Cisco ASA ( CISCO_ASA_FIREWALL )
Cisco Switch ( CISCO_SWITCH )
Cloud Audit Logs ( N/A )
CrowdStrike Falcon ( CS_EDR )
Darktrace ( DARKTRACE )
Elastic Windows Event Log Beats ( ELASTIC_WINLOGBEAT )
Google Chrome Browser Cloud Management (CBCM) ( N/A )
Hashicorp Vault ( HASHICORP )
Illumio Core ( ILLUMIO_CORE )
Linux Auditing System (AuditD) ( AUDITD )
ManageEngine ADAudit Plus ( ADAUDIT_PLUS )
Microsoft Graph API Alerts ( MICROSOFT_GRAPH_ALERT )
Netskope ( NETSKOPE_ALERT )
Office 365 ( OFFICE_365 )
Okta ( OKTA )
Palo Alto Networks Firewall ( PAN_FIREWALL )
Seqrite Endpoint Security (EPS) ( SEQRITE_ENDPOINT )
STIX Threat Intelligence ( STIX )
Trend Micro Vision One ( TRENDMICRO_VISION_ONE )
Unix system ( NIX_SYSTEM )
VMware vRealize Suite ( VMWARE_VREALIZE )
Windows Event ( WINEVTLOG )
Windows Event (XML) ( WINEVTLOG_XML )
Workspace Alerts ( WORKSPACE_ALERTS )
ZScaler NGFW ( ZSCALER_FIREWALL )
For details about changes in each parser, see Supported default parsers .
March 23, 2023
Change
The SentinelOne Alert feed has been enhanced to enable you to configure the feed to ingest both alerts and threats or only threats.
When the Is alert API subscribed checkbox is selected in the application, or when the isAlertApiSubscribed field is set to true in the API request, the feed will ingest both alerts and threats. When the checkbox is deselected, or the isAlertApiSubscribed field is set set to false in the API request, only threats are ingested. This configuration is available when creating a new feed. Existing feeds were enhanced in a previous release to ingest both alerts and threats.
Only configure the feed to ingest both alerts and threats if you have subscribed to alerts in SentinelOne. If you have not subscribed to alerts in SentinelOne, then configure the feed to ingest threats only.
March 15, 2023
Change
The following supported default parsers have changed. Each is listed by product name and ingestion label, if applicable.
BloxOne Threat Defense ( BLOXONE )
Carbon Black ( CB_EDR )
Cisco Firepower NGFW ( CISCO_FIREPOWER_FIREWALL )
Cisco ISE ( CISCO_ISE )
Cisco Meraki ( CISCO_MERAKI )
CrowdStrike Falcon ( CS_EDR )
Duo Administrator Logs ( DUO_ADMIN )
Elastic Audit Beats ( ELASTIC_AUDITBEAT )
Elastic Windows Event Log Beats ( ELASTIC_WINLOGBEAT )
F5 BIGIP LTM ( F5_BIGIP_LTM )
FortiGate ( FORTINET_FIREWALL )
Imperva CEF ( IMPERVA_CEF )
Infoblox ( INFOBLOX )
JAMF CMDB ( JAMF )
Juniper ( JUNIPER_FIREWALL )
Microsoft Graph API Alerts ( MICROSOFT_GRAPH_ALERT )
Microsoft IIS ( IIS )
Nyansa Events ( NYANSA_EVENTS )
Office 365 ( OFFICE_365 )
Onfido ( ONFIDO )
Palo Alto Networks Firewall ( PAN_FIREWALL )
Samba SMBD ( SMBD )
Sentinelone Alerts ( SENTINELONE_ALERT )
SentinelOne EDR ( SENTINEL_EDR )
SonicWall ( SONIC_FIREWALL )
Symantec VIP Gateway ( SYMANTEC_VIP )
Tanium Threat Response ( TANIUM_THREAT_RESPONSE )
Unix system ( NIX_SYSTEM )
VMware NSX ( VMWARE_NSX )
Windows Defender ATP ( WINDOWS_DEFENDER_ATP )
Workspace Activities ( WORKSPACE_ACTIVITY )
For details about changes in each parser, see Supported default parsers .
March 10, 2023
Announcement
The [all namespaces] menu item in Asset view will be removed on July 1, 2023. This change will not impact the ability to view and filter events assigned the default namespace, using the [untagged] menu item, or to view and filter events with custom namespace labels that were assigned to incoming logs.
March 09, 2023
Change
The SentinelOne Alert feed has been enhanced to ingest both alerts and threats. No change is needed to the feed configuration. If data contains both alerts and threats, then both types of data will be ingested.
March 01, 2023
Feature
Schedule Chronicle dashboard reports
You can schedule the delivery of Chronicle dashboard reports over email for both the default dashboards and custom dashboards. In addition to setting the time interval, email address, and format to deliver the report, you can also set the pagination details and test the delivery of the report. For more information, see Schedule Chronicle dashboard reports .
Change
Chronicle Feed Management enhanced the support for the Qualys VM log type to include Qualys VM Detections API. See the Feed Management documentation for information.
Change
The following supported default parsers have changed. Each is listed by product name and ingestion label, if applicable.
1Password ( ONEPASSWORD )
Airlock Digital Application Allowlisting ( AIRLOCK_DIGITAL )
Apache ( APACHE )
Atlassian Confluence ( ATLASSIAN_CONFLUENCE )
AWS Cloudtrail ( AWS_CLOUDTRAIL )
Azure AD Directory Audit ( AZURE_AD_AUDIT )
Azure Cosmos DB ( AZURE_COSMOS_DB )
Cisco Firepower NGFW ( CISCO_FIREPOWER_FIREWALL )
Compute Engine ( GCP_COMPUTE )
CrowdStrike Detection Monitoring ( CS_DETECTS )
CrowdStrike Falcon ( CS_EDR )
Cybereason EDR ( CYBEREASON_EDR )
F5 BIGIP LTM ( F5_BIGIP_LTM )
Forcepoint NGFW ( FORCEPOINT_FIREWALL )
FortiGate ( FORTINET_FIREWALL )
Google Chrome Browser Cloud Management (CBCM) ( N/A )
iBoss Proxy ( IBOSS_WEBPROXY )
JumpCloud Directory Insights ( JUMPCLOUD_DIRECTORY_INSIGHTS )
Juniper Mist ( JUNIPER_MIST )
Kubernetes Node logs ( KUBERNETES_NODE )
Microsoft Azure Activity ( AZURE_ACTIVITY )
Microsoft Graph API Alerts ( MICROSOFT_GRAPH_ALERT )
Okta ( OKTA )
Okta Access Gateway ( OKTA_ACCESS_GATEWAY )
Palo Alto Networks Firewall ( PAN_FIREWALL )
pfSense ( PFSENSE )
Salesforce ( SALESFORCE )
Sentinelone Alerts ( SENTINELONE_ALERT )
SentinelOne EDR ( SENTINEL_EDR )
Signal Sciences WAF ( SIGNAL_SCIENCES_WAF )
SonicWall ( SONIC_FIREWALL )
Windows Event ( WINEVTLOG )
Workspace Activities ( WORKSPACE_ACTIVITY )
Yubico OTP ( YUBICO_OTP )
Zscaler Private Access ( ZSCALER_ZPA )
For details about changes in each parser, see Supported default parsers .
February 17, 2023
Change
Search API
The query limit for the udmSearch method has been increased from 60 to 120 queries per hour (QPH). The maximum number of events which can be returned using the udmSearch method has been increased from 1,000 to 10,000.
UDM Search
You can now specify single-line comments and block comments in UDM search. You can also now use UDM search to find values of type float (floating point numbers) and bool (boolean).
February 15, 2023
Change
The following supported default parsers have changed. Each is listed by product name and ingestion label, if applicable.
1Password ( ONEPASSWORD )
Atlassian Jira ( ATLASSIAN_JIRA )
AWS GuardDuty ( GUARDDUTY )
Azure AD Directory Audit ( AZURE_AD_AUDIT )
Azure AD Organizational Context ( AZURE_AD_CONTEXT )
Carbon Black ( CB_EDR )
Cisco Stealthwatch ( CISCO_STEALTHWATCH )
Cisco WLC/WCS ( CISCO_WIRELESS )
Cloudflare WAF ( CLOUDFLARE_WAF )
CrowdStrike Detection Monitoring ( CS_DETECTS )
CrowdStrike Falcon ( CS_EDR )
Cybereason EDR ( CYBEREASON_EDR )
DigitalArts i-Filter ( DIGITALARTS_IFILTER )
F5 ASM ( F5_ASM )
F5 BIGIP LTM ( F5_BIGIP_LTM )
Google Chrome Browser Cloud Management (CBCM) ( N/A )
Imperva ( IMPERVA_WAF )
Imperva Database ( IMPERVA_DB )
Ipswitch MOVEit Transfer ( IPSWITCH_MOVEIT_TRANSFER )
Linux Auditing System (AuditD) ( AUDITD )
Microsoft AD FS ( ADFS )
Microsoft Graph API Alerts ( MICROSOFT_GRAPH_ALERT )
Mobileiron ( MOBILEIRON )
Netskope Web Proxy ( NETSKOPE_WEBPROXY )
Palo Alto Cortex XDR Events ( PAN_CORTEX_XDR_EVENTS )
Palo Alto Networks Firewall ( PAN_FIREWALL )
Samba SMBD ( SMBD )
Sentinelone Alerts ( SENTINELONE_ALERT )
SentinelOne Deep Visibility ( SENTINEL_DV )
SentinelOne EDR ( SENTINEL_EDR )
SonicWall ( SONIC_FIREWALL )
Trend Micro AV ( TRENDMICRO_AV )
VMware vCenter ( VMWARE_VCENTER )
Windows DNS ( WINDOWS_DNS )
Windows Event ( WINEVTLOG )
For details about changes in each parser, see Supported default parsers .
February 09, 2023
Change
YARA-L outcomes
In the outcome section, you can now define up to 20 outcome variables, with
arbitrary names. These outcomes will be stored in the detections generated by
the rule. Each detection may have different values for the outcomes.
Change
Chronicle has released additional ingestion scripts, written in Python, that can be deployed as Cloud Functions. These scripts ingest data from the following log sources, listed by name and ingestion label:
Aruba Central ( ARUBA_CENTRAL )
Azure Event Hub (configurable log type)
Cloud Storage (configurable log type)
Proofpoint (configurable log type)
Tenable.io ( TENABLE_IO )
Trend Micro Cloud App Security (configurable log type)
Trend Micro Vision One audit logs ( TREND_MICRO_VISION_AUDIT )
The scripts can be used as-is or as templates to customize and ingest logs from another product. They are located in the Chronicle GitHub repository . See Use ingestion scripts deployed as Cloud Functions for instructions about how to configure and deploy the scripts in your environment.
February 01, 2023
Feature
The Alerts in Search feature is the newest addition to the UDM Search capability. This new feature allows you to do the following:
View and investigate all alerts associated with the search query criteria
See which events are associated with one or more alerts
See details about alerts in Alert viewer and Alert details
Pivot to the new Alert view
This feature is being enabled for global customers in a phased manner and is expected to fully roll out over the next month.
Change
The following supported default parsers have changed. Each is listed by product name and ingestion label, if applicable.
1Password (ONEPASSWORD)
Azure AD Organizational Context (AZURE_AD_CONTEXT)
Barracuda Email (BARRACUDA_EMAIL)
Carbon Black (CB_EDR)
Cisco Firepower NGFW (CISCO_FIREPOWER_FIREWALL)
Cisco Switch (CISCO_SWITCH)
Google Chrome Browser Cloud Management (CBCM) (N/A)
IBM Security Verify (IBM_SECURITY_VERIFY)
Imperva (IMPERVA_WAF)
Infoblox (INFOBLOX)
Infoblox DNS (INFOBLOX_DNS)
Linux Auditing System (AuditD) (AUDITD)
McAfee Web Gateway (MCAFEE_WEBPROXY)
Microsoft Graph API Alerts (MICROSOFT_GRAPH_ALERT)
Microsoft SQL Server (MICROSOFT_SQL)
Nutanix Prism (NUTANIX_PRISM)
Office 365 (OFFICE_365)
Okera Dynamic Access Platform (OKERA_DAP)
Palo Alto Networks Firewall (PAN_FIREWALL)
Proofpoint Observeit (OBSERVEIT)
Qualys VM (QUALYS_VM)
Sentinelone Alerts (SENTINELONE_ALERT)
SentinelOne EDR (SENTINEL_EDR)
Symantec Endpoint Protection (SEP)
WatchGuard (WATCHGUARD)
Windows Event (WINEVTLOG)
Windows Event (XML) (WINEVTLOG_XML)
Windows Sysmon (WINDOWS_SYSMON)
For details about changes in each parser, see Supported default parsers .
January 31, 2023
Change
The Chronicle Curated Detections > Cloud Threats policy has been enhanced with the following changes:
Admin Action rule set: added a new exclusion list, called gcti__cld__admin_action__network_http_user_agent__exclusion_list that enables you to exclude events based on the HTTP User Agent string.
IAM Abuse rule set: added a new exclusion list, called, gcti__cld__iamabuse__network_http_user_agent__exclusion_list that enables you to exclude events based on the HTTP User Agent string.
Change
Geolocation enrichment from an IP address
Chronicle provides geolocation data enrichment (GeoIP data) for external IP addresses to enable more powerful rule detections and greater context for investigations. Chronicle uses location data provided by Google to provide an approximate geographic location for an external IP address.
For more information, see:
How Chronicle enriches event and entity data
How to use context-enriched data in rules
Use context enriched data in UDM Search
Use context enriched data in reports
January 30, 2023
Change
The following changes are available in the Unified Data Model:
Added the following fields to the Software object :
Software.description
Software.vendor_name
Deprecated the Location.region_latitude and Location.region_longitude fields. Use the following Location fields instead:
Location.region_coordinates.latitude
Location.region_coordinates.longitude
Deprecated the Noun.ip_location field. Use Noun.ip_geo_artifact.location instead.
Added the following fields to the File object , File.stat_mode, File.stat_inode, File.stat_dev, File.stat_nlink, File.stat_flags.
For a list of all fields in the Unified Data Model, and their descriptions, see the Unified Data Model field list .
January 20, 2023
Feature
ListCuratedRules and ListCuratedRuleDetections
Two new methods are now available for the Detection Engine API. ListCuratedRules enables you to return a current list of all of the Chronicle rules with detections. ListCuratedRuleDetections enables you to return a list of the detections associated with a specified rule.
Change
The following changes are available in the Unified Data Model:
A new field, called source_labels , was added to EntityMetadata .
A new field, called enrichment_state , was added to event.metadata .
A new field, called ip_geo_artifact , was added to Noun .
A new field, called parsed_user_agent , was added to network.http .
A new enumerated list, called Metadata.EnrichmentState , was added.
The new type was added, called Artifact .
The following values were added to the relation.relationship enumerated list: EXECUTES , DOWNLOADED_FROM , and CONTACTS .
The following values were added to Noun.Platform enumerated list: IOS , ANDROID , CHROME_OS .
The following value was added to the SecurityResult.SecurityCategory enumerated list, called TOR_EXIT_NODE .
For a list of all fields in the Unified Data Model, and their descriptions, see the Unified Data Model field list .
January 19, 2023
Feature
Chronicle has released a set of ingestion scripts, written in Python, that can be deployed as Cloud Functions. These scripts ingest data from the following log sources, listed by name and ingestion label:
Citrix audit logs (CITRIX_MONITOR)
Duo Admin (DUO_ADMIN)
One Login User Context (ONELOGIN_USER_CONTEXT)
MISP (MISP_IOC)
Citrix session metadata (CITRIX_SESSION_METADATA)
Slack Audit (SLACK_AUDIT)
Box (BOX)
OneLogin (ONELOGIN_SSO)
Google Cloud Pub/Sub
STIX/TAXII threat intelligence (STIX)
The scripts can be used as-is or as templates to customize and ingest logs from another product. They are located in the Chronicle GitHub repository . See Use ingestion scripts deployed as Cloud Functions for instructions about how to configure and deploy the scripts in your environment.
January 18, 2023
Change
The following supported default parsers have changed. Each is listed by product name and ingestion label, if applicable.
Atlassian Jira (ATLASSIAN_JIRA)
Azure AD (AZURE_AD)
CrowdStrike Falcon (CS_EDR)
ESET AV (ESET_AV)
FortiGate (FORTINET_FIREWALL)
GitHub (GITHUB)
Infoblox (INFOBLOX)
Juniper (JUNIPER_FIREWALL)
Juniper Junos (JUNIPER_JUNOS)
Kubernetes Node logs (KUBERNETES_NODE)
McAfee Web Gateway (MCAFEE_WEBPROXY)
Microsoft Defender for Endpoint (MICROSOFT_DEFENDER_ENDPOINT)
Netskope Web Proxy (NETSKOPE_WEBPROXY)
Office 365 (OFFICE_365)
Pulse Secure (PULSE_SECURE_VPN)
Ruckus Networks (RUCKUS_WIRELESS)
Sentinelone Alerts (SENTINELONE_ALERT)
SentinelOne EDR (SENTINEL_EDR)
Silverfort Authentication Platform (SILVERFORT)
VMware vCenter (VMWARE_VCENTER)
Windows Event (XML) (WINEVTLOG_XML)
Zscaler (ZSCALER_WEBPROXY)
For details about changes in each parser, see Supported default parsers .
January 13, 2023
Change
Chronicle Curated Detections has been enhanced with the following additional detection content for Cloud threats . A new rule set was added, called Resource Masquerading, that detects Google Cloud resources created with names or characteristics of another resource or resource type. This could be used to mask malicious activity carried out by or within the resource, with the intent of appearing legitimate.
January 10, 2023
Feature
Multiple enhancements were made to the UDM Search capability , including the additions of search templates and shared searches. You can now do the following in UDM Search:
Use Chronicle-provided pre-made search templates in Quick Searches and Search Manager
Create, edit, and share searches in Search Manager (an enhancement to Saved Searches)
Use reference lists in UDM searches
January 06, 2023
Change
Chronicle Curated Detections has been enhanced with the following additional detection content for Windows-based threats . A new rule set was added, called Anomalous PowerShell, that identifies PowerShell commands containing obfuscation techniques or other anomalous behavior.
January 04, 2023
Change
The following supported default parsers have changed. Each is listed by product name and ingestion label, if applicable.
AWS CloudWatch (AWS_CLOUDWATCH)
AWS Control Tower (AWS_CONTROL_TOWER)
AWS WAF (AWS_WAF)
Azure AD (AZURE_AD)
Azure AD Organizational Context (AZURE_AD_CONTEXT)
Barracuda Email (BARRACUDA_EMAIL)
Cisco ASA (CISCO_ASA_FIREWALL)
Cisco Email Security (CISCO_EMAIL_SECURITY)
Cisco ISE (CISCO_ISE)
Cisco Umbrella Web Proxy (UMBRELLA_WEBPROXY)
Citrix Monitor (CITRIX_MONITOR)
Cloud Audit Logs (N/A)
CrowdStrike Falcon (CS_EDR)
Digital Guardian EDR (DIGITALGUARDIAN_EDR)
Elastic Windows Event Log Beats (ELASTIC_WINLOGBEAT)
ExtraHop RevealX (EXTRAHOP)
ForgeRock OpenAM (OPENAM)
Google Chrome Browser Cloud Management (CBCM) (N/A)
Infoblox (INFOBLOX)
McAfee ePolicy Orchestrator (MCAFEE_EPO)
Microsoft Graph API Alerts (MICROSOFT_GRAPH_ALERT)
Netscout Arbor Sightline (ARBOR_SIGHTLINE)
Office 365 (OFFICE_365)
Okta (OKTA)
Palo Alto Networks Firewall (PAN_FIREWALL)
Rapid7 Insight (RAPID7_INSIGHT)
Salesforce (SALESFORCE)
Sophos Intercept EDR (SOPHOS_EDR)
Splunk Platform (SPLUNK)
STIX Threat Intelligence (STIX)
Tanium Stream (TANIUM_TH)
tenable.io (TENABLE_IO)
ThreatLocker Platform (THREATLOCKER)
VMware AirWatch (AIRWATCH)
WatchGuard (WATCHGUARD)
Windows Event (XML) (WINEVTLOG_XML)
Windows Sysmon (WINDOWS_SYSMON)
Zscaler (ZSCALER_WEBPROXY)
For details about changes in each parser, see Supported default parsers .
December 16, 2022
Change
You can now enable up to 500 active rules within your Chronicle account. Up to 75 of those can be multi-event rules. See Running a rule against live data for information on how to enable rules and Manage rules using Rules Editor for information on how to configure rules.
December 15, 2022
Announcement
Starting December 15, 2022, you may not see data in your Chronicle instance that is older than the data retention period defined in your contract. For more information, see Data Retention .
December 12, 2022
Change
New endpoint for UK
Chronicle has added a supported region for Chronicle customers in the UK, europe-west2.
December 08, 2022
Feature
The following changes were made to UDM Search .
You can now do the following:
Use enhanced filtering to include Bottom 30 values in addition to Top 30 values for each UDM Field in search results
Use 'field[key] = value' exact match to search the 'additional' and 'labels' fields
Pin fields (using the push pin icon) in Quick Filter to save them as a favorite. They will appear at the top of the Quick Filters list
Save column layouts and load them
Escape special characters by using backslashes and double-quotes
December 07, 2022
Change
The following supported default parsers have changed. Each is listed by product name and ingestion label, if applicable.
Cisco Router ( CISCO_ROUTER )
Digital Guardian DLP ( DIGITALGUARDIAN_DLP )
Linux Auditing System (AuditD) ( AUDITD )
Microsoft Azure Activity ( AZURE_ACTIVITY )
Rubrik ( RUBRIK )
Sentinelone Alerts ( SENTINELONE_ALERT )
SentinelOne EDR ( SENTINEL_EDR )
Sophos Firewall (Next Gen) ( SOPHOS_FIREWALL )
STIX Threat Intelligence ( STIX )
Thales Luna Hardware Security Module ( THALES_LUNA_HSM )
Thinkst Canary ( THINKST_CANARY )
Unix system ( NIX_SYSTEM )
Workspace Activities ( WORKSPACE_ACTIVITY )
For details about changes in each parser, see Supported default parsers .
November 30, 2022
Change
The following supported default parsers have changed. Each is listed by product name and ingestion label, if applicable.
Akamai WAF (AKAMAI_WAF)
AlgoSec Security Management (ALGOSEC)
Ansible AWX (ANSIBLE_AWX)
Arcsight CEF (ARCSIGHT_CEF)
AWS Cloudtrail (AWS_CLOUDTRAIL)
AWS Control Tower (AWS_CONTROL_TOWER)
AWS GuardDuty (GUARDDUTY)
Azure AD Directory Audit (AZURE_AD_AUDIT)
BIND (BIND_DNS)
Bluecat DDI (BLUECAT_DDI)
Carbon Black (CB_EDR)
Check Point (CHECKPOINT_FIREWALL)
Cisco Firepower NGFW (CISCO_FIREPOWER_FIREWALL)
Cisco Meraki (CISCO_MERAKI)
Cisco Router (CISCO_ROUTER)
Deep Instinct EDR (DEEP_INSTINCT_EDR)
Department of Homeland Security (DHS_IOC)
Elastic Windows Event Log Beats (ELASTIC_WINLOGBEAT)
Emerging Threats Pro (ET_PRO_IOC)
ESET Threat Intelligence (ESET_IOC)
FortiGate (FORTINET_FIREWALL)
Fortinet (FORTINET_DHCP)
Cloud Audit (N/A)
Security Command Center (N/A)
GitHub (GITHUB)
Hitachi Cloud Platform (HITACHI_CLOUD_PLATFORM)
Juniper (JUNIPER_FIREWALL)
Linux Auditing System (AuditD) (AUDITD)
Mandiant Threat Intelligence (MANDIANT_IOC)
Microsoft Azure Resource (AZURE_RESOURCE_LOGS)
Microsoft Exchange (EXCHANGE_MAIL)
Microsoft Graph API Alerts (MICROSOFT_GRAPH_ALERT)
Microsoft Powershell (POWERSHELL)
Netscout Arbor Sightline (ARBOR_SIGHTLINE)
Office 365 (OFFICE_365)
Okta (OKTA)
Palo Alto Networks Firewall (PAN_FIREWALL)
Palo Alto Prisma Access (PAN_CASB)
Sentinelone Alerts (SENTINELONE_ALERT)
Shrubbery TACACS+ (SHRUBBERY_TACACS)
Signal Sciences WAF (SIGNAL_SCIENCES_WAF)
Solarwinds Kiwi Syslog Server (SOLARWINDS_KSS)
Splunk Platform (SPLUNK)
Stealthbits Defend (STEALTHBITS_DEFEND)
STIX Threat Intelligence (STIX)
Symantec Endpoint Protection (SEP)
Tanium Discover (TANIUM_DISCOVER)
Tanium Threat Response (TANIUM_THREAT_RESPONSE)
WatchGuard (WATCHGUARD)
Windows Event (WINEVTLOG)
Windows Network Policy Server (WINDOWS_NET_POLICY_SERVER)
For details about changes in each parser, see Supported default parsers .
November 16, 2022
Announcement
You can collect Splunk CIM logs by using the Chronicle forwarder and Splunk default parser. For more information, see Collect Splunk CIM logs .
November 15, 2022
Feature
UDM Search
UDM Search is a new Chronicle search feature which enables you to find UDM events within your Chronicle instance. You can search both for individual UDM events and groups of UDM events tied to shared search terms. UDM search includes a number of search features, enabling you to navigate through your UDM data:
Quick Filters—Fast access to saved searches and search history.
Event Viewer—View the raw log and UDM for the event.
Search Manager—Comprehensive view of your saved searches and search history.
There is also a new UDM search API method available for the Chronicle Search API .
Be sure to review Google's recommended best practices for conducting searches using UDM Search. UDM searches can require substantial computational resources to complete if they are not constructed carefully. Performance also varies depending on the size and complexity of the data in your Chronicle instance.
Change
Reference Lists
Google has made enhancements to the Chronicle reference lists feature, it now enables you to perform more complex matching beyond exact string matches. These new types of reference lists can be used in Detection Engine rules.
For more detailed information about these special list types, see the reference
lists documentation.
When creating a list, you must provide a "List Type" to indicate how you want Chronicle to interpret your list. List type cannot be changed after list creation, and can be STRING, REGEX, or CIDR. The list type for any existing lists has been set to STRING, since all reference lists made by preview customers perform exact string matching.
You can create Reference Lists using the Chronicle user interface or programmatically using the Reference List API . For information on how to embed a Reference List within a Rule, see the documentation .
November 10, 2022
Change
Chronicle Curated Detections has been enhanced with the following additional detection content:
Windows-based threats :
Security Posture Downgrade: detects activity attempting to disable or decrease the effectiveness of security tools.
Cloud threats :
Suspicious Behavior: detects activity that is thought to be uncommon and suspicious in most environments.
Service Disruption: detects destructive or disruptive actions that, if performed in a functioning production environment, may cause a significant outage.
Suspicious Infrastructure Change: detects modifications to production infrastructure that align with known persistence tactics.
November 09, 2022
Feature
Alerts and IOC Matches
The Alerts and Indicators of Compromise (IOC) page displays all the alerts and IOCs currently impacting your enterprise. It provides tools that enable you to filter and view your alerts and IOCs.
Alerts can be designated by your security infrastructure, by your security personnel, or by Chronicle Uppercase.
IOCs are designated automatically by Chronicle. Chronicle is always absorbing data from both your own infrastructure and numerous other security data sources. It automatically correlates suspicious security indicators with your security data. If a match is found (for example, a suspicious domain is found within your enterprise), Chronicle labels the event as an IOC and displays it on the IOC matches tab.
You can also still navigate to the Enterprise Insights page using the link provided at the top of the Alerts and IOCS page. To view CBN alerts, you still need to use the Enterprise Insights page.
Alert view
Alert view shows a variety of information with regards to a specific alert, including:
Alert Status
Alert Details—Displays an alert's creation time, recent updates, and its associated rule.
Decision States—Displays the verdict for the alert and if it is an indication of a security issue.
History—Displays the history of changes made to the alert by your security team.
For alerts originating from Chronicle SOAR, Alert view also includes the number and a link to the associated Chronicle SOAR case. You can pivot to your Chronicle SOAR account using this link.
Chronicle SOAR Authentication
You can authenticate with your Chronicle SOAR account from Chronicle. Once you have authenticated with your Chronicle SOAR account, you can pivot between your Chronicle account and your Chronicle SOAR account as needed.
Chronicle SOAR Cases
Chronicle SOAR ingests alerts from a variety of sources. You can conduct additional investigations of Chronicle SOAR cases from Chronicle or pivot to Chronicle SOAR. You can pivot to your Chronicle SOAR Cases from the Chronicle application menu.
For more information on Chronicle SOAR cases, see the Chronicle SOAR documentation .
Chronicle SOAR Playbooks
Chronicle SOAR Playbooks define a series of automatic steps taken when triggered by an incoming alert and can be used to investigate and respond to security issues. You can pivot to your Chronicle SOAR Playbooks from the Chronicle application menu. For more information on Chronicle SOAR Playbooks, see the Chronicle SOAR documentation .
Change
The following default parsers have changed. Each is listed by product name and ingestion label, if applicable.
Akeyless Vault Platform (AKEYLESS_VAULT)
AWS Control Tower (AWS_CONTROL_TOWER)
AWS VPC Flow (AWS_VPC_FLOW)
Azure AD (AZURE_AD)
Azure AD Directory Audit (AZURE_AD_AUDIT)
Azure WAF (AZURE_WAF)
BeyondTrust Privileged Identity (BEYONDTRUST_PI)
Check Point (CHECKPOINT_FIREWALL)
Cisco Router (CISCO_ROUTER)
Cisco Wireless IPS (CISCO_WIPS)
Citrix Monitor (CITRIX_MONITOR)
CrowdStrike Falcon (CS_EDR)
Darktrace (DARKTRACE)
Elastic Windows Event Log Beats (ELASTIC_WINLOGBEAT)
EPIC Systems (EPIC)
F5 ASM (F5_ASM)
Forcepoint DLP (FORCEPOINT_DLP)
FortiGate (FORTINET_FIREWALL)
Google Cloud Audit (N/A)
Security Command Center (N/A)
HAProxy (HAPROXY)
InterSystems Cache (INTERSYSTEMS_CACHE)
Lenel Onguard Badge Management (LENEL_ONGUARD)
Microsoft Azure Resource (AZURE_RESOURCE_LOGS)
Microsoft Defender for Endpoint (MICROSOFT_DEFENDER_ENDPOINT)
Microsoft Graph API Alerts (MICROSOFT_GRAPH_ALERT)
Microsoft IIS (IIS)
Netscout (ARBOR_EDGE_DEFENSE)
Netscout Arbor Sightline (ARBOR_SIGHTLINE)
Okta (OKTA)
Okta User Context (OKTA_USER_CONTEXT)
OpenSSH (OPENSSH)
Palo Alto Cortex XDR Alerts (CORTEX_XDR)
Palo Alto Networks Firewall (PAN_FIREWALL)
Proofpoint Tap Alerts (PROOFPOINT_MAIL)
Pulse Secure (PULSE_SECURE_VPN)
RSA NetWitness (RSA_NETWITNESS)
Sentinelone Alerts (SENTINELONE_ALERT)
Signal Sciences WAF (SIGNAL_SCIENCES_WAF)
Sourcefire (SOURCEFIRE_IDS)
Symantec Endpoint Protection (SEP)
Unix system (NIX_SYSTEM)
Vectra Stream (VECTRA_STREAM)
Versa Firewall (VERSA_FIREWALL)
WatchGuard (WATCHGUARD)
Wazuh (WAZUH)
Windows Defender ATP (WINDOWS_DEFENDER_ATP)
Zix Email Encryption (ZIX_EMAIL_ENCRYPTION)
Zoom Operation Logs (ZOOM_OPERATION_LOGS)
For details about changes in each parser, see Supported default parsers .
November 07, 2022
Change
When downloading data to CSV file format from the Chronicle user interface, raw log data is now excluded unless you are using Raw Log Scan . For example, raw log data is no longer included when you download events .
This resolves an issue where downloading to CSV was failing.
Change
Chronicle Feed Management added support for the Sentinel One Alerts API. See the Feed Management documentation for information about how to configure this feed.
November 02, 2022
Change
Enhancements to the Detection Engine API
The StreamDetectionAlerts method in the Detection Engine API has been enhanced to return detections generated by both user-created rules and Chronicle Curated Detections. For more information about this method, see StreamDetectionAlerts .
November 01, 2022
Change
The Ingestion API udmevents and createentities methods now accept both uppercase and lowercase characters in the following fields:
<_Noun_>.mac : defined when calling the udmeevents method, where Noun is either principal, src, target, observer, intermediary, or about.
entity.asset.mac : defined when calling the createentities method.
These fields are defined in the UDM record in the request body when calling the method. For more information about these methods, see Chronicle Ingestion API documentation . For more information about UDM fields, see the Unified Data Model field list .
October 31, 2022
Change
Chronicle Feed Management added a hostname field to the configuration workflow of certain log types. The hostname field enables you to configure the API endpoint for the feed. If you do not define a value for this field, the following default values are used:
AzureAD (AZURE_AD) default hostname is graph.microsoft.com .
AzureADAudit (AZURE_AD_AUDIT) default hostname is graph.microsoft.com .
AzureADContext (AZURE_AD_CONTEXT) default hostname is graph.microsoft.com .
AzureMDMIntune (AZURE_MDM_INTUNE) default hostname is graph.microsoft.com .
MicrosoftGraphAlert (MICROSOFT_GRAPH_ALERT) default hostname is graph.microsoft.com .
MicrosoftSecurityCenterAlert (MICROSOFT_SECURITY_CENTER_ALERT) default hostname is management.azure.com .
Office365 (OFFICE_365) default hostname is manage.office.com .
Chronicle Feed Management API was also updated to support the hostname field for these log types.
October 27, 2022
Change
Chronicle Feed Management added support for the CrowdStrike Detection API. See the Feed Management documentation for information about how to configure this feed.
October 19, 2022
Change
The following supported default parsers have changed. Each is listed by product name and ingestion label, if applicable.
1Password (ONEPASSWORD)
Accellion (ACCELLION)
Akamai Cloud Monitor (AKAMAI_CLOUD_MONITOR)
AWS Cloudtrail (AWS_CLOUDTRAIL)
BeyondTrust (BOMGAR)
BeyondTrust Secure Remote Access (BEYONDTRUST_REMOTE_ACCESS)
Bitdefender (BITDEFENDER)
Blue Coat Proxy (BLUECOAT_WEBPROXY)
Carbon Black (CB_EDR)
Check Point (CHECKPOINT_FIREWALL)
CIS Albert Alerts (CIS_ALBERT_ALERT)
Cisco ASA (CISCO_ASA_FIREWALL)
Cisco FireSIGHT Management Center (CISCO_FIRESIGHT)
Cisco ISE (CISCO_ISE)
Cisco Meraki (CISCO_MERAKI)
Cloudflare (CLOUDFLARE)
CrowdStrike Detection Monitoring (CS_DETECTS)
CrowdStrike Falcon (CS_EDR)
CyberArk (CYBERARK)
Darktrace (DARKTRACE)
Forcepoint NGFW (FORCEPOINT_FIREWALL)
Forescout NAC (FORESCOUT_NAC)
FortiGate (FORTINET_FIREWALL)
Cloud Audit (N/A)
Cloud Identity Device Users (GCP_CLOUDIDENTITY_DEVICEUSERS)
Load Balancing (GCP_LOADBALANCING)
Google Chrome Browser Cloud Management (CBCM) (N/A)
IBM Guardium (GUARDIUM)
Ipswitch MOVEit Transfer (IPSWITCH_MOVEIT_TRANSFER)
Juniper (JUNIPER_FIREWALL)
Kaspersky AV (KASPERSKY_AV)
Linux Auditing System (AuditD) (AUDITD)
Microsoft Azure Resource (AZURE_RESOURCE_LOGS)
Microsoft Defender for Endpoint (MICROSOFT_DEFENDER_ENDPOINT)
Microsoft Graph API Alerts (MICROSOFT_GRAPH_ALERT)
Microsoft IIS (IIS)
Microsoft Powershell (POWERSHELL)
Netfilter IPtables (NETFILTER_IPTABLES)
Netscout (ARBOR_EDGE_DEFENSE)
Netscout Arbor Sightline (ARBOR_SIGHTLINE)
Okta (OKTA)
Oracle (ORACLE_DB)
Palo Alto Networks Firewall (PAN_FIREWALL)
Palo Alto Prisma Access (PAN_CASB)
pfSense (PFSENSE)
PostFix Mail (POSTFIX_MAIL)
Proofpoint Email Filter (PROOFPOINT_MAIL_FILTER)
Pulse Secure (PULSE_SECURE_VPN)
Qualys VM (QUALYS_VM)
Sentinelone Alerts (SENTINELONE_ALERT)
SentinelOne EDR (SENTINEL_EDR)
Shrubbery TACACS+ (SHRUBBERY_TACACS)
Symantec Endpoint Protection (SEP)
Sysdig (SYSDIG)
Tanium Integrity Monitor (TANIUM_INTEGRITY_MONITOR)
Varonis (VARONIS)
VyOS Open Source Router (VYOS)
ZScaler DNS (ZSCALER_DNS)
For details about changes in each parser, see Supported default parsers .
October 14, 2022
Change
There is now an additional parameter you can specify for Chronicle feeds, "display_name". This additional parameter can be specified and will be returned when using the following Feed Management API methods:
CreateFeed
DisableFeed
EnableFeed
GetFeed
ListFeeds
UpdateFeed
For additional information and examples, see Feed Management API .
October 13, 2022
Feature
Chronicle CLI provides a text-based interface to initiate all Chronicle user workflows, acting as an alternative to the graphical user interface for advanced users.
Change
Access to fields stored as key-value pairs in Detection Engine rules
You can now create Detection Engine rules that include UDM fields stored as key-value pairs, such as google.protobuf.Struct and Label data type. Using the map syntax, you access fields stored as the:
google.protobuf.Struct data type using syntax similar to $e.additional.fields["key"] = "value" .
Label data type using syntax similar to $e.target.labels["key"] = "value" .
For more details about the map syntax, see the YARA-L 2.0 language syntax .
October 06, 2022
Change
Chronicle Feed Management for the Rapid7 Insight log type now enables you to configure the Rapid7 API endpoint.
A new field, called hostname , was added to the Rapid7 Insight configuration workflow. Use this field to change the API endpoint to any one of the supported Rapid7 regions , by specifying value using the following pattern {region_id}.api.insight.rapid7.com . If you do not specify an endpoint, the default is us.api.insight.rapid7.com . The Chronicle Feed Management API was also updated to support a configurable value for the hostname field.
October 04, 2022
Change
Chronicle Curated Detections has been enhanced with the following additional detection content:
Windows-based threats :
Living off the land (LotL) : identifies tools native to Microsoft Windows operating systems that can be abused by threat actors for malicious purposes.
Cloud attacks and cloud misconfigurations :
Cloud Hacktool : detects activity from known offensive security platforms or tools used by threat actors that target resources on Google Cloud.
IAM Abuse : detects activity associated with abusing IAM roles and permissions to potentially escalate privilege or move laterally within a given Google Cloud project or across a Google Cloud organization.
October 03, 2022
Change
The following supported default parsers have changed. Each is listed by product name and ingestion label, if applicable.
Apache (APACHE)
Aruba (ARUBA_WIRELESS)
AWS GuardDuty (GUARDDUTY)
Azure AD Directory Audit (AZURE_AD_AUDIT)
Azure AD Organizational Context (AZURE_AD_CONTEXT)
BeyondTrust (BOMGAR)
Box (BOX)
Cisco Application Centric Infrastructure (CISCO_ACI)
Cisco Application Control Engine (CISCO_ACE)
Cisco ASA (CISCO_ASA_FIREWALL)
Cisco Email Security (CISCO_EMAIL_SECURITY)
Citrix Netscaler (CITRIX_NETSCALER)
Cloudflare WAF (CLOUDFLARE_WAF)
CrowdStrike Detection Monitoring (CS_DETECTS)
CrowdStrike Falcon (CS_EDR)
Crowdstrike IOC (CROWDSTRIKE_IOC)
F5 ASM (F5_ASM)
Fluentd Logs (FLUENTD)
FortiGate (FORTINET_FIREWALL)
Fortinet FortiAnalyzer (FORTINET_FORTIANALYZER)
Cloud Audit (N/A)
Cloud DNS (N/A)
Cloud Load Balancing (GCP_LOADBALANCING)
HCNET Account Adapter Plus (HCNET_ACCOUNT_ADAPTER)
Kong API Gateway (KONG_GATEWAY)
ManageEngine AD360 (MANAGE_ENGINE_AD360)
McAfee ePolicy Orchestrator (MCAFEE_EPO)
McAfee Web Gateway (MCAFEE_WEBPROXY)
McAfee Web Protection (MCAFEE_WEB_PROTECTION)
Microsoft Azure Activity (AZURE_ACTIVITY)
Mongo Database (MONGO_DB)
Office 365 (OFFICE_365)
Okta (OKTA)
OSQuery (OSQUERY_EDR)
OSSEC (OSSEC)
Palo Alto Networks Firewall (PAN_FIREWALL)
Red Canary (REDCANARY_EDR)
Snort (SNORT_IDS)
Squid Web Proxy (SQUID_WEBPROXY)
Symantec Endpoint Protection (SEP)
Tanium Asset (TANIUM_ASSET)
Tanium Stream (TANIUM_TH)
Windows Defender ATP (WINDOWS_DEFENDER_ATP)
Workday (WORKDAY)
Zeek JSON (BRO_JSON)
For details about changes in each parser, see Supported default parsers .
September 29, 2022
Change
The following changes are available in the Unified Data Model:
A new field, risk_score, was added to Noun.investigation .
A new field, data_tap_config_name, was added to Event.metadata.tags .
The following new fields were added to Network :
application_protocol_version
sent_packets
received_packets
A new ENUM value, CHALLENGE, was add to SecurityResult.Action
A new ENUM value, ANALYST_UPDATE_RISK_SCORE, was added to Metadata.EventType
For a list of all fields in the Unified Data Model, and their descriptions, see the Unified Data Model field list .
September 26, 2022
Feature
Context Aware Detections - Risk Dashboard
The Context Aware Detections - Risk dashboard provides insight into the current threat status of assets and users in your enterprise.
Feature
Contextual enrichment in events and entities
To enable a security investigation, Chronicle provides additional context about artifacts in a customer environment by calculating prevalence statistics and ingesting data from Safe Browsing threat lists related to file hashes. For more information, see:
How Chronicle enriches event and entity data .
How to use context-enriched data in rules .
September 21, 2022
Feature
ListAssetAliases and ListUserAliases
The ListAssetAliases and ListUserAliases API methods are now available as part of the Chronicle Search API . Use ListAssetAliases to list all the aliases of an asset in an enterprise and use ListUserAliases
to list all the aliases of a user in an enterprise.
September 14, 2022
Change
The following supported default parsers have changed. Each is listed by product name and ingestion label, if applicable.
Apache (APACHE)
Barracuda WAF (BARRACUDA_WAF)
Bluecat DDI (BLUECAT_DDI)
Cisco Umbrella Cloud Firewall (UMBRELLA_FIREWALL)
Cisco Umbrella Web Proxy (UMBRELLA_WEBPROXY)
Cisco WLC/WCS (CISCO_WIRELESS)
CloudGenix SD-WAN (CLOUDGENIX_SDWAN)
Elastic Windows Event Log Beats (ELASTIC_WINLOGBEAT)
FortiGate (FORTINET_FIREWALL)
Cloud Audit (N/A)
Google Cloud Identity Context (CLOUD_IDENTITY_CONTEXT)
IBM Guardium (GUARDIUM)
IBM z/OS (IBM_ZOS)
Infoblox DNS (INFOBLOX_DNS)
Ipswitch SFTP (IPSWITCH_SFTP)
Kubernetes auth proxy logs (KUBERNETES_AUTH_PROXY)
Linux DHCP (LINUX_DHCP)
McAfee ePolicy Orchestrator (MCAFEE_EPO)
Microsoft Defender for Endpoint (MICROSOFT_DEFENDER_ENDPOINT)
NGINX (NGINX)
OSSEC (OSSEC)
pfSense (PFSENSE)
Ribbon Analytics Platform (RIBBON_ANALYTICS_PLATFORM)
Ruckus Networks (RUCKUS_WIRELESS)
Salesforce (SALESFORCE)
Sentinelone Alerts (SENTINELONE_ALERT)
SentinelOne Deep Visibility (SENTINEL_DV)
SentinelOne EDR (SENTINEL_EDR)
Trend Micro Deep Security (TRENDMICRO_DEEP_SECURITY)
VMware AirWatch (AIRWATCH)
VMware ESXi (VMWARE_ESX)
VMware Workspace ONE (VMWARE_WORKSPACE_ONE)
Zscaler (ZSCALER_WEBPROXY)
For details about changes in each parser, see Supported default parsers .
September 02, 2022
Feature
GetLog
The GetLog API method is now available as part of the Chronicle Search API . Use GetLog to retrieve a specific raw log using an event's UID.
September 01, 2022
Change
The following supported default parsers have changed. Each is listed by product name and ingestion label, if applicable.
Arcsight CEF (ARCSIGHT_CEF)
Aruba (ARUBA_WIRELESS)
AWS Security Hub (AWS_SECURITY_HUB)
Azure AD (AZURE_AD)
BeyondTrust (BOMGAR)
Bitdefender (BITDEFENDER)
Blue Coat Proxy (BLUECOAT_WEBPROXY)
Bluecat DDI (BLUECAT_DDI)
CA LDAP (CA_LDAP)
Check Point (CHECKPOINT_FIREWALL)
Cisco ACS (CISCO_ACS)
Cisco Router (CISCO_ROUTER)
Cisco UCM (CISCO_UCM)
Cisco Umbrella IP (UMBRELLA_IP)
Cisco Umbrella Web Proxy (UMBRELLA_WEBPROXY)
Cisco VPN (CISCO_VPN)
Cisco WLC/WCS (CISCO_WIRELESS)
CrowdStrike Falcon (CS_EDR)
Falco IDS (FALCO_IDS)
FireEye HX (FIREEYE_HX)
Forcepoint CASB (FORCEPOINT_CASB)
FortiGate (FORTINET_FIREWALL)
Cloud Load Balancing (GCP_LOADBALANCING)
Cloud Audit (N/A)
HP Aruba Clearpass (CLEARPASS)
Infoblox DNS (INFOBLOX_DNS)
Linux DHCP (LINUX_DHCP)
Microsoft Intune (AZURE_MDM_INTUNE)
Office 365 (OFFICE_365)
Open LDAP (OPENLDAP)
Ordr IoT (ORDR_IOT)
Palo Alto Networks Traps (PAN_EDR)
Pivotal (PIVOTAL)
Proofpoint Threat Response (PROOFPOINT_TRAP)
Red Hat OpenShift (REDHAT_OPENSHIFT)
Sophos Firewall Next Gen (SOPHOS_FIREWALL)
Sourcefire (SOURCEFIRE_IDS)
Suricata EVE (SURICATA_EVE)
Symantec Event export (SYMANTEC_EVENT_EXPORT)
Tanium Comply (TANIUM_COMPLY)
Vectra Detect (VECTRA_DETECT)
VMware ESXi (VMWARE_ESX)
Windows Event (WINEVTLOG)
For details about changes in each parser, see Supported default parsers .
Change
The following changes are available in the Unified Data Model:
The ip_location field was added to Noun type.
The day_max_sub_domains field was added to the Prevalence type.
The source_type field was added to the EntityMetadata type.
For a list of all fields in the Unified Data Model, and their descriptions, see the Unified Data Model field list .
August 18, 2022
Feature
VirusTotal Context
Chronicle's integration with VirusTotal has been revised and enhanced. This feature enables you to pivot from finding domains linked to an asset in Chronicle to viewing information about that domain from VirusTotal. From a Chronicle event view, such as Asset view, Domain view, or IP Address view, click VT Context to open the VirusTotal Context window. Some of the VirusTotal information is only available to users with a VirusTotal Enterprise account.
Some of the older links in the Chronicle user interface to VirusTotal, for example the option in Asset view to display the first 50 results in VirusTotal Graph and the VirusTotal Insights results panel, have been removed. Clicking VT Context provides access to the same information and VirusTotal functionality, including access to VirusTotal Graph.
August 17, 2022
Feature
Chronicle curated detections provide out-of-the-box threat detection content curated, built, and maintained by Google Cloud Threat Intelligence (GCTI) researchers. This release of curated detections cover the following range of threats:
Windows-based threats : Coverage for several classes of threats including infostealers, ransomware, RATs, misused software, and crypto activity.
Cloud attacks and cloud misconfigurations : Secure cloud workloads with additional coverage around exfiltration of data, suspicious behavior, and additional vectors.
Change
The following supported default parsers have changed. Each is listed by product name and ingestion label, if applicable.
Akamai WAF (AKAMAI_WAF)
Arista Switch (ARISTA_SWITCH)
AWS CloudWatch (AWS_CLOUDWATCH)
AWS GuardDuty (GUARDDUTY)
AWS Macie (AWS_MACIE)
AWS Route 53 DNS (AWS_ROUTE_53)
AWS WAF (AWS_WAF)
Azure AD (AZURE_AD)
Azure AD Organizational Context (AZURE_AD_CONTEXT)
Bitdefender (BITDEFENDER)
Bluecat DDI (BLUECAT_DDI)
Centrify (CENTRIFY_SSO)
Check Point (CHECKPOINT_FIREWALL)
Cisco Application Centric Infrastructure (CISCO_ACI)
Cisco ISE (CISCO_ISE)
Custom DNS (CUSTOM_DNS)
Cylance Protect (CYLANCE_PROTECT)
Elastic Windows Event Log Beats (ELASTIC_WINLOGBEAT)
FireEye (FIREEYE_ALERT)
Forcepoint Proxy (FORCEPOINT_WEBPROXY)
FortiGate (FORTINET_FIREWALL)
IBM z/OS (IBM_ZOS)
Linux DHCP (LINUX_DHCP)
Microsoft AD FS (ADFS)
Microsoft Azure Resource (AZURE_RESOURCE_LOGS)
Microsoft Defender for Endpoint (MICROSOFT_DEFENDER_ENDPOINT)
Microsoft SQL Server (MICROSOFT_SQL)
Nasuni File Services Platform (NASUNI_FILE_SERVICES)
Palo Alto Prisma Cloud (PAN_PRISMA_CLOUD)
Ping Identity (PING)
Riverbed Steelhead (STEELHEAD)
SiteMinder Web Access Management (CA_SSO_WEB)
Snoopy Logger (SNOOPY_LOGGER)
Stormshield Firewall (STORMSHIELD_FIREWALL)
Symantec Endpoint Protection (SEP)
Tanium Stream (TANIUM_TH)
VMware ESXi (VMWARE_ESX)
VMware Horizon (VMWARE_HORIZON)
Windows Event (WINEVTLOG)
Windows Sysmon (WINDOWS_SYSMON)
For details about changes in each parser, see Supported default parsers .
August 16, 2022
Feature
Feed Management
You can now configure new data feeds for your Chronicle account using Feed Management. This feature makes it possible for you to setup your own data feeds without the assistance of Chronicle support personnel. You can setup new data feeds using either the Feed Management user interface or the Feed Management API . Chronicle returns error messages in the event you have misconfigured a feed and need to make changes.
August 08, 2022
Change
The following changes are available in the Unified Data Model:
The File.ashash field was deprecated and replaced with the File.authentihash field.
The day_max field was added to the Prevalence type.
Descriptions of the File.FileType Enum values are now available in the Unified Data Model field list document.
For a list of all fields in the Unified Data Model, and their descriptions, see the Unified Data Model field list .
August 03, 2022
Change
The following supported default parsers have changed. Each is listed by product name and ingestion label, if applicable.
AWS Cloudtrail (AWS_CLOUDTRAIL)
AWS Route 53 DNS (AWS_ROUTE_53)
AWS S3 Server Access (AWS_S3_SERVER_ACCESS)
AWS WAF (AWS_WAF)
Box (BOX)
Cisco Switch (CISCO_SWITCH)
Citrix Storefront (CITRIX_STOREFRONT)
CrowdStrike Falcon (CS_EDR)
Dell OpenManage (DELL_OPENMANAGE)
F5 VPN (F5_VPN)
Falco IDS (FALCO_IDS)
Cloud SQL (GCP_CLOUDSQL)
Cloud VPC Flow (GCP_VPC_FLOW)
Imperva SecureSphere Management (IMPERVA_SECURESPHERE)
Linux Auditing System AuditD (AUDITD)
McAfee ePolicy Orchestrator (MCAFEE_EPO)
Microsoft Defender for Identity (MICROSOFT_DEFENDER_IDENTITY)
Netskope (NETSKOPE_ALERT)
NIMBLE OS (NIMBLE_OS)
Office 365 (OFFICE_365)
Oracle (ORACLE_DB)
Ping Identity (PING)
SentinelOne EDR (SENTINEL_EDR)
Snare System Diagnostic Logs (SNARE_SOLUTIONS)
Sophos AV (SOPHOS_AV)
Suricata EVE (SURICATA_EVE)
Symantec Endpoint Protection (SEP)
TeamViewer (TEAMVIEWER)
Vectra Stream (VECTRA_STREAM)
VMware ESXi (VMWARE_ESX)
Windows Defender ATP (WINDOWS_DEFENDER_ATP)
Windows Event (WINEVTLOG)
Workspace Activities (WORKSPACE_ACTIVITY)
For details about changes in each parser, see Supported default parsers .
July 29, 2022
Change
Detection Engine now includes the following new features:
You can define an outcome section in single event rules. Previously, the outcome section was supported in multi-event rules only. If you have multi-event rules that use only one event variable, you can refactor them by deleting the match section to make them more performant. For an example rule, see YARA-L 2.0 language overview . For more detailed information about rule syntax, see YARA-L 2.0 language syntax .
In the existing condition section, you can now use variables defined in the outcome section. This enables you to filter on aggregates (variables in the outcome section can be defined using aggregate functions) and on the $risk_score outcome variable. For more detailed information about the condition section, see YARA-L 2.0 language syntax .
You can assign a placeholder variable to the result of a function call. You can then use the placeholder variable in other sections of the rule, such as the match section, outcome section, or condition section. For information about the syntax for function to placeholder assignments and any restrictions, see the YARA-L 2.0 language syntax .
July 28, 2022
Change
The following changes are available in the Unified Data Model:
Added the MUTEX value to the EntityMetadata.EntityType enumerated type.
Added the id field to the Event.metadata type.
Added the priority , root_cause , and reason fields to the Investigation type.
Added the following new enumerated types:
Priority
Reason
Added the rule_set and rule_set_display_name fields to the SecurityResult type.
Added the ANALYST_UPDATE_PRIORITY , ANALYST_UPDATE_ROOT_CAUSE , and ANALYST_UPDATE_REASON values to the Metadata.EventType enumerated type.
Added the DCERPC and KRB5 values to the Network.ApplicationProtocol enumerated type.
Added the SOCIAL_ENGINEERING and PHISHING values to the SecurityResult.SecurityCategory enumerated type.
Added the OPEN value to the Status enumerated type.
For a list of all fields in the Unified Data Model, and their descriptions, see the Unified Data Model field list .
July 26, 2022
Feature
Export filter for Cloud logs
Previously, you could export DNS and Cloud Audit logs using the Chronicle panel within the Google Cloud Console. You can now configure the default export filter to export additional log types. You can not only control the log types, but also the source projects producing these logs. Both inclusion and exclusion of logs are supported as well. In addition, semantic validation of the log filters can catch malformed log filters with invalid log types or identifiers. The filter language is defined by the Google logging query language that is shared with Cloud Logging.
For more information about the Export Log Filter Settings, see Exporting Google Cloud Logs to Chronicle .
July 21, 2022
Change
The following supported default parsers have changed. Each is listed by product name and ingestion label, if applicable.
Avanan Email Security (AVANAN_EMAIL)
AWS Cloudtrail (AWS_CLOUDTRAIL)
AWS GuardDuty (GUARDDUTY)
AWS VPC Flow (AWS_VPC_FLOW)
Barracuda Firewall (BARRACUDA_FIREWALL)
BeyondTrust Secure Remote Access (BEYONDTRUST_REMOTE_ACCESS)
Carbon Black (CB_EDR)
Centrify (CENTRIFY_SSO)
Cisco Firepower NGFW (CISCO_FIREPOWER_FIREWALL)
Cisco ISE (CISCO_ISE)
CrowdStrike Falcon (CS_EDR)
CrowdStrike Falcon Stream (CS_STREAM)
Custom Security Data Analytics (CUSTOM_SECURITY_DATA_ANALYTICS)
Dell EMC Data Domain (DELL_EMC_DATA_DOMAIN)
Department of Homeland Security (DHS_IOC)
Elastic Audit Beats (ELASTIC_AUDITBEAT)
F5 VPN (F5_VPN)
FortiGate (FORTINET_FIREWALL)
Fortinet FortiNAC (FORTINET_FORTINAC)
Cloud Run (GCP_RUN)
GitHub (GITHUB)
Google Chrome Browser Cloud Management
HCL BigFix (HCL_BIGFIX)
HP Aruba(Clearpass) (CLEARPASS)
IBM Guardium (GUARDIUM)
Infoblox (INFOBLOX)
Infoblox DNS (INFOBLOX_DNS)
Kubernetes audit logs (KUBERNETES_AUDIT)
Linux Sysmon (LINUX_SYSMON)
McAfee ePolicy Orchestrator (MCAFEE_EPO)
Medigate IoT (MEDIGATE_IOT)
Microsoft AD FS (ADFS)
Nasuni File Services Platform (NASUNI_FILE_SERVICES)
Office 365 (OFFICE_365)
Okta (OKTA)
Ping Identity (PING)
PostFix Mail (POSTFIX_MAIL)
Proofpoint On Demand (PROOFPOINT_ON_DEMAND)
Proofpoint Tap Alerts (PROOFPOINT_MAIL)
SailPoint IAM (SAILPOINT_IAM)
SecureLink (SECURELINK)
SentinelOne EDR (SENTINEL_EDR)
ServiceNow CMDB (SERVICENOW_CMDB)
Suricata EVE (SURICATA_EVE)
Suricata IDS (SURICATA_IDS)
Symantec Web Isolation (SYMANTEC_WEB_ISOLATION)
Thales Luna Hardware Security Module (THALES_LUNA_HSM)
Thales MFA (THALES_MFA)
Uptycs EDR (UPTYCS_EDR)
Windows DNS (WINDOWS_DNS)
Windows Event (WINEVTLOG)
Workspace Activities (WORKSPACE_ACTIVITY)
For details about changes in each parser, see Supported default parsers .
July 06, 2022
Change
The following supported default parsers have changed (listed by product name and ingestion label):
Azure DevOps Audit (AZURE_DEVOPS)
Bitdefender (BITDEFENDER)
CA Access Control (CA_ACCESS_CONTROL)
Carbon Black App Control (CB_APP_CONTROL)
Check Point (CHECKPOINT_FIREWALL)
Cisco Firepower NGFW (CISCO_FIREPOWER_FIREWALL)
Cisco Router (CISCO_ROUTER)
Cloud Passage (CLOUD_PASSAGE)
Digital Guardian (DIGITALGUARDIAN_EDR)
ExtraHop RevealX (EXTRAHOP)
Forcepoint NGFW (FORCEPOINT_FIREWALL)
IBM DataPower Gateway (IBM_DATAPOWER)
IBM Guardium (GUARDIUM)
Imperva (IMPERVA_WAF)
Microsoft Azure Resource (AZURE_RESOURCE_LOGS)
Microsoft SQL Server (MICROSOFT_SQL)
Office 365 (OFFICE_365)
pfSense (PFSENSE)
Proofpoint On Demand (PROOFPOINT_ON_DEMAND)
Proofpoint Tap Alerts (PROOFPOINT_MAIL)
SonicWall (SONIC_FIREWALL)
Sophos UTM (SOPHOS_UTM)
VMware AirWatch (AIRWATCH)
VMware ESXi (VMWARE_ESX)
Workspace Activities (WORKSPACE_ACTIVITY)
For details about changes in each parser, see Supported default parsers .
Change
The following new fields are available in the Unified Data Model:
The new fields prevalence , first_seen_time , and last_seen_time were added to the File object.
A new field, bounce_address , was added to the Email object.
A new field, artifact , was added to the Noun object. Artifact is a new object.
A new field, rolling_max_sub_domains , was added to the Prevalence object.
A new field, first_seen_time , was added to the User object.
The following new fields were added to the Smtp object:
helo
mail_from
rcpt_to
server_response
message_path
is_webmail
is_tls
For a list of all fields in the Unified Data Model, and their descriptions, see the Unified Data Model field list
June 29, 2022
Change
Chronicle Forwarder configuration on Linux has been updated to include two separate configuration files. The <x>.conf file stores the configuration related to log ingestion. The <x>_auth.conf file stores the authentication credentials.
For more information, see Installing and configuring the forwarder on Linux .
June 22, 2022
Change
The following supported default parsers have changed (listed by product name and ingestion label):
Akamai WAF (AKAMAI_WAF)
Aruba IPS (ARUBA_IPS)
Azure AD Directory Audit (AZURE_AD_AUDIT)
Carbon Black App Control (CB_APP_CONTROL)
Check Point (CHECKPOINT_FIREWALL)
Cisco ACS (CISCO_ACS)
Cisco Email Security (CISCO_EMAIL_SECURITY)
Cisco Firepower NGFW (CISCO_FIREPOWER_FIREWALL)
Cisco ISE (CISCO_ISE)
Cisco Meraki (CISCO_MERAKI)
Citrix Netscaler (CITRIX_NETSCALER)
CloudM (CLOUDM)
CrowdStrike Falcon (CS_EDR)
EPIC Systems (EPIC)
Forescout NAC (FORESCOUT_NAC)
FortiGate (FORTINET_FIREWALL)
Cloud Compute (GCP_COMPUTE)
IBM DataPower Gateway (IBM_DATAPOWER)
Imperva (IMPERVA_WAF)
JAMF Protect (JAMF_PROTECT)
Linux Auditing System (AuditD) (AUDITD)
Microsoft Exchange (EXCHANGE_MAIL)
Netskope (NETSKOPE_ALERT)
Office 365 (OFFICE_365)
Okta (OKTA)
Preempt Alert (PREEMPT)
RSA (RSA_AUTH_MANAGER)
SentinelOne EDR (SENTINEL_EDR)
ServiceNow CMDB (SERVICENOW_CMDB)
Sourcefire (SOURCEFIRE_IDS)
Suricata IDS (SURICATA_IDS)
Symantec Web Isolation (SYMANTEC_WEB_ISOLATION)
Tripwire (TRIPWIRE_FIM)
Unix system (NIX_SYSTEM)
VMware AirWatch (AIRWATCH)
VMware ESXi (VMWARE_ESX)
VMware NSX (VMWARE_NSX)
WatchGuard (WATCHGUARD)
Workspace Alerts (WORKSPACE_ALERTS)
Zscaler (ZSCALER_WEBPROXY)
For details about changes in each parser, see Supported default parsers .
June 14, 2022
Change
Enhancements to YARA-L 2.0 syntax in Detection Engine rules
We have enhanced the outcome section that can be used in Detection Engine rules.
We now support up to 10 outcome variables.
We now support integer and string data type outcome variables.
We have added new aggregate functions: count() , count_distinct() , array() , array_distinct()
For more details about the outcome section, see Outcome section syntax .
June 08, 2022
Change
The following supported default parsers have changed (listed by product name and ingestion label):
Amazon Guardduty (GUARDDUTY)
Atlassian Jira (ATLASSIAN_JIRA)
AWS CloudFront (AWS_CLOUDFRONT)
AWS Cloudtrail (AWS_CLOUDTRAIL)
AWS CloudWatch (AWS_CLOUDWATCH)
AWS Config (AWS_CONFIG)
AWS Elastic Load Balancer (AWS_ELB)
AWS Key Management Service (AWS_KMS)
AWS VPC Flow (AWS_VPC_FLOW)
Check Point (CHECKPOINT_FIREWALL)
Cisco ACS (CISCO_ACS)
Cisco Email Security (CISCO_EMAIL_SECURITY)
CrowdStrike Falcon (CS_EDR)
Elastic Audit Beats (ELASTIC_AUDITBEAT)
Elastic Windows Event Log Beats (ELASTIC_WINLOGBEAT)
ESET Threat Intelligence (ESET_IOC)
F5 BIGIP LTM (F5_BIGIP_LTM)
Fastly WAF (FASTLY_WAF)
Cloud IOT (GCP_CLOUDIOT)
HCL BigFix (HCL_BIGFIX)
IBM z/OS (IBM_ZOS)
Imperva (IMPERVA_WAF)
Infoblox DNS (INFOBLOX_DNS)
Juniper IPS (JUNIPER_IPS)
Microsoft Azure Resource (AZURE_RESOURCE_LOGS)
Microsoft Defender for Endpoint (MICROSOFT_DEFENDER_ENDPOINT)
Microsoft Graph API Alerts (MICROSOFT_GRAPH_ALERT)
Microsoft SQL Server (MICROSOFT_SQL)
Okta (OKTA)
Tanium Stream (TANIUM_TH)
Trend Micro AV (TRENDMICRO_AV)
Unix system (NIX_SYSTEM)
Windows Event (WINEVTLOG)
Zscaler (ZSCALER_WEBPROXY)
For details about changes in each parser, see Supported default parsers .
May 25, 2022
Change
The following supported default parsers have changed, listed by product name and ingestion label:
Apache Hadoop (HADOOP)
Suricata IDS (SURICATA_IDS)
Cloud Compute (GCP_COMPUTE)
Elastic Audit Beats (ELASTIC_AUDITBEAT)
Cloudflare (CLOUDFLARE)
Proofpoint On Demand (PROOFPOINT_ON_DEMAND)
FortiGate (FORTINET_FIREWALL)
CSV Custom IOC (CSV_CUSTOM_IOC)
CrowdStrike Falcon (CS_EDR)
Cisco Firepower NGFW (CISCO_FIREPOWER_FIREWALL)
CIS Albert Alerts (CIS_ALBERT_ALERT)
SonicWall (SONIC_FIREWALL)
Okta User Context (OKTA_USER_CONTEXT)
Elastic Windows Event Log Beats (ELASTIC_WINLOGBEAT)
Check Point (CHECKPOINT_FIREWALL)
Barracuda Email (BARRACUDA_EMAIL)
Microsoft Azure Activity (AZURE_ACTIVITY)
Carbon Black App Control (CB_APP_CONTROL)
OpenSSH (OPENSSH)
OneLogin (ONELOGIN_SSO)
Office 365 (OFFICE_365)
FireEye NX (FIREEYE_NX)
ExtraHop RevealX (EXTRAHOP)
Cisco Umbrella DNS (UMBRELLA_DNS)
Kaspersky AV (KASPERSKY_AV)
IBM Guardium (GUARDIUM)
F5 ASM (F5_ASM)
Cisco Email Security (CISCO_EMAIL_SECURITY)
Workspace Activities (WORKSPACE_ACTIVITY)
Forcepoint Proxy (FORCEPOINT_WEBPROXY)
Azure AD Organizational Context (AZURE_AD_CONTEXT)
Tanium Stream (TANIUM_TH)
Apache (APACHE)
For details about the changes in each parser, see Supported default parsers .
May 11, 2022
Change
The following supported default parsers have changed (listed by product name and ingestion label):
ExtraHop RevealX (EXTRAHOP)
Imperva (IMPERVA_WAF)
Windows Event (WINEVTLOG)
Azure AD Organizational Context (AZURE_AD_CONTEXT)
Citrix Netscaler (CITRIX_NETSCALER)
Elastic Packet Beats (ELASTIC_PACKETBEATS)
Elastic Audit Beats (ELASTIC_AUDITBEAT)
Sendmail (SENDMAIL)
VMware vCenter (VMWARE_VCENTER)
AWS VPC Flow (AWS_VPC_FLOW)
Bluecat DDI (BLUECAT_DDI)
Cisco ACS (CISCO_ACS)
Cisco Firepower NGFW (CISCO_FIREPOWER_FIREWALL)
Forcepoint Proxy (FORCEPOINT_WEBPROXY)
McAfee ePolicy Orchestrator (MCAFEE_EPO)
Office 365 (OFFICE_365)
Apple MacOS (MACOS)
Archer Integrated Risk Management (ARCHER_IRM)
Cisco Meraki (CISCO_MERAKI)
Elastic Windows Event Log Beats (ELASTIC_WINLOGBEAT)
IBM DB2 (DB2_DB)
Cisco ISE (CISCO_ISE)
F5 BIGIP LTM (F5_BIGIP_LTM)
Juniper Junos (JUNIPER_JUNOS)
Microsoft Exchange (EXCHANGE_MAIL)
VMware ESXi (VMWARE_ESX)
Digital Shadows SearchLight (DIGITAL_SHADOWS_SEARCHLIGHT)
Azure Firewall (AZURE_FIREWALL)
ForgeRock OpenAM (OPENAM)
FortiGate (FORTINET_FIREWALL)
ZScaler NGFW (ZSCALER_FIREWALL)
OpenVPN (OPEN_VPN)
For details about the changes in each parser, see Supported default parsers.
May 10, 2022
Change
The following new fields are available in the Unified Data Model:
parent_session_id was added to the Network object.
first_seen_time was added to the Asset object.
For a list of fields in the Unified Data Model, and descriptions, see the Unified Data Model field list .
April 27, 2022
Change
Chronicle now supports the following functions in Detection Engine rules:
strings.concat(a, b)
strings.to_lower(stringText)
strings.to_upper(stringText)
strings.base64_decode(encodedString)
re.capture(stringText, regex)
re.replace(stringText, replaceRegex, replacementText)
timestamp.get_minute(unix_seconds [, time_zone])
timestamp.get_hour(unix_seconds [, time_zone])
timestamp.get_day_of_week(unix_seconds [, time_zone])
timestamp.get_week(unix_seconds [, time_zone])
timestamp.current_seconds()
math.abs(intExpression)
For more information about these functions, see YARA-L 2.0 language syntax.
Change
The following supported default parsers have changed (listed by product name and ingestion label):
Apache Tomcat (TOMCAT)
Azure AD (AZURE_AD)
BIND (BIND_DNS)
Bitdefender (BITDEFENDER)
Blue Coat Proxy (BLUECOAT_WEBPROXY)
Cisco ACS (CISCO_ACS)
Cisco Email Security (CISCO_EMAIL_SECURITY)
Cisco Firepower NGFW (CISCO_FIREPOWER_FIREWALL)
Cisco ISE (CISCO_ISE)
Citrix Netscaler (CITRIX_NETSCALER)
CrowdStrike Falcon (CS_EDR)
Darktrace (DARKTRACE)
Dell EMC Data Domain (DELL_EMC_DATA_DOMAIN)
Elastic Windows Event Log Beats (ELASTIC_WINLOGBEAT)
EPIC Systems (EPIC)
F5 ASM (F5_ASM)
Cloud Identity Device Users (GCP_CLOUDIDENTITY_DEVICEUSERS)
GMV Checker ATM Security (GMV_CHECKER)
HCL BigFix (HCL_BIGFIX)
Layer7 SiteMinder (SITEMINDER_SSO)
Microsoft Azure NSG Flow (AZURE_NSG_FLOW)
Microsoft Defender for Identity(MICROSOFT_DEFENDER_IDENTITY)
Microsoft Powershell (POWERSHELL)
Mobileiron (MOBILEIRON)
Office 365 (OFFICE_365)
Salesforce (SALESFORCE)
SecureAuth (SECUREAUTH_SSO)
SentinelOne EDR (SENTINEL_EDR)
Windows Event (WINEVTLOG)
Workspace Activities (WORKSPACE_ACTIVITY)
ZScaler NGFW (ZSCALER_FIREWALL)
For details about the changes in each parser, see
Supported default parsers.
April 26, 2022
Change
The Chronicle Container Registry key is no longer needed and has been removed. The corresponding documentation on the Container Registry key for the Linux version of the Chronicle Forwarder has also been removed.
April 25, 2022
Change
Rules run frequency
Rules can now be run at different frequencies. Rule run frequency impacts the latency with which detections are discovered for each rule. Longer run frequencies increase the amount of time between when an event occurs and when a detection is processed for that event. Rules with a window size of at least one hour are limited to either 1 hour or 24 hour run frequencies.
April 15, 2022
Change
Chronicle Detection Engine now supports the min() function and subtraction operator in the outcome section of a rule.
April 13, 2022
Change
The following supported default parsers have changed (listed by ingestion label)
AKAMAI_WAF
ARUBA_WIRELESS
AWS_CLOUDTRAIL
AWS_CONFIG
AZURE_AD_CONTEXT
AZURE_COSMOS_DB
BITDEFENDER
CA_ACCESS_CONTROL
CASSANDRA
CISCO_EMAIL_SECURITY
CISCO_FIREPOWER_FIREWALL
CISCO_ISE
CISCO_MERAKI
CISCO_TACACS
CS_EDR
D3_BANKING
ELASTIC_WINLOGBEAT
FILEZILLA_FTP
GCP_CLOUDIDENTITY_DEVICES
GCP_CLOUDIDENTITY_DEVICEUSERS
GMV_CHECKER
GUARDDUTY
GUARDIUM
IIS
INFOBLOX_DHCP
KASPERSKY_AV
KEA_DHCP
MCAFEE_DLP
MCAFEE_EPO
MICROSOFT_DEFENDER_ENDPOINT
NETSKOPE_WEBPROXY
OFFICE_365
OKTA
OKTA_USER_CONTEXT
ONELOGIN_SSO
ORDR_IOT
PAN_FIREWALL
PROOFPOINT_ON_DEMAND
PULSE_SECURE_VPN
RH_ISAC_IOC
SALESFORCE
SERVICENOW_CMDB
SLACK_AUDIT
SOPHOS_UTM
SYMANTEC_EDR
TANIUM_TH
UMBRELLA_DNS
UNIFI_AP
VANDYKE_SFTP
VMWARE_ESX
VMWARE_VREALIZE
WINDOWS_DHCP
WINDOWS_DNS
WINDOWS_SYSMON
WORKSPACE_ACTIVITY
WORKSPACE_ALERTS
WORKSPACE_USERS
For details about the changes in each parser, see
Supported default parsers
April 07, 2022
Change
Exporting Google Cloud Logs to Chronicle
There are now lists of the specific Google Cloud Logs and Google Cloud Asset Metadata that are exported to Chronicle when you enable Google Cloud log ingestion.
February 15, 2022
Feature
DeleteSubject
The DeleteSubject method has been added to the Chronicle Role-Based Access Control (RBAC) API. DeleteSubject enables you to remove user and group role assignments.
February 08, 2022
Change
Chronicle Forwarder
For the Chronicle Forwarder to function properly, an additional firewall rule is needed for host oauth2.googleapis.com. This information has been added to both the Windows and Linux versions of the Forwarder documentation.
December 14, 2021
Feature
Role-based access control (RBAC)
Role-based access control (RBAC) enables you to tailor access to Chronicle features based on an employee's role in the organization. Assigning a role to a user grants that user the permissions associated with the role, which enables the user to access role-appropriate Chronicle features.
December 08, 2021
Feature
Dashboards
Chronicle provides a set of default dashboards to monitor data ingestion status, health, rule detection context, IOC matches and alert prioritization, and user sign-ins. Reporting is available by converting a dashboard to a shareable file (PDF, Excel, CSV, etc.). You can also create custom personal and shared dashboards.
November 19, 2021
Announcement
This document describes Chronicle's recommendations for writing rules in YARA-L.
October 15, 2021
Change
Detection Engine API
The ListDetections method has been updated to allow customers to list detections efficiently across rule versions and rules by either detection timestamp or commit timestamp. Parameters originally used to list detections by detection timestamp will eventually be deprecated.
September 28, 2021
Change
Uppercase has been rebranded as Google Cloud Threat Intelligence (GCTI).
September 22, 2021
Change
The Linux Forwarder has been enhanced to support load balancing and high-availability . This enables you to deploy the forwarder in an environment where a Layer 4 load balancer is installed between syslog data sources and forwarder instances.
July 13, 2021
Change
New documentation to support Chronicle data ingestion planning
You can now find information about Chronicle supported default parsers.
Supported default parsers provides information about which ingestion labels (LogTypes) also support a default parser. You can find the supported data format (KV, JSON, CEF, etc), the parser category, and when the default parser was last updated.
July 01, 2021
Feature
Asset Namespaces
The asset namespaces feature enables you to classify categories of assets sharing a common network environment, or namespace, and then perform searches for those assets within the Chronicle user interface based on that namespace. See also the Linux Forwarder documentation for information on how to configure the Forwarder to add namespaces to your security data before it is ingested into your Chronicle account.
Change
Linux Forwarder Updates
The Linux Forwarder has been enhanced with the following additional capabilities:
Disk Buffering —Disk buffering enables you to buffer backlogged messages to disk as opposed to memory. The backlogged messages can be stored in case the forwarder crashes or the underlying host crashes.
Regular Expression Filters —Regular expression filters enable you to filter logs based on regular expression matches.
Arbitrary labels —Use labels to attach arbitrary metadata to logs using key and value pairs.
Namespaces —Use namespace labels to identify logs from distinct network segments and to deconflict overlapping IP addresses.
Kafka Input —You can ingest data from Kafka topics just as you can for syslog. Consumer groups are leveraged to enable you to deploy up to 3 Forwarders and pull data from the same Kafka topic.
June 30, 2021
Feature
Downloading Events
You can download large numbers of the events associated with each threat detection as a CSV file, enabling you to search across a broad set of the data stored in your Chronicle account to hunt for security issues.
June 28, 2021
Feature
Detection Engine API
The VerifyRule method has been added to the Detection Engine API. This method verifies that a rule is a valid YARA-L 2.0 rule without creating a new rule or evaluating it over data.
June 21, 2021
Feature
Uppercase Alerts
For Chronicle customers who are also Uppercase customers, Uppercase alerts are now displayed on the Enterprise Insights page. Uppercase alerts are derived from both Google's internal threat detection infrastructure and research provided by Uppercase security analysts.
You can view these alerts in Uppercase Alert view . This view also enables you to provide feedback that can be shared with your own security team and with Uppercase.
You can also use the Uppercase API to retrieve alerts from your Chronicle account.
June 01, 2021
Feature
Chronicle Automated Google Cloud Log Ingestion
Google Cloud customers can now send logs directly to their Chronicle account. Customers can send both Cloud Audit and Cloud DNS logs. See Ingesting Google Cloud Logs in to Chronicle for more information.
May 15, 2021
Feature
Archive Rules
You can now archive rules specified for the Detection Engine. Archiving a rule hides the security data related to that rule (and all of its versions) without actually deleting the rule. See Archive rules for more information.
April 23, 2021
Change
Supported Data Sets
Chronicle can now ingest and parse data from the following additional systems and services:
Aruba Airwave
Blue Coat Proxy
Brocade ServerIron ADX
CIS Albert Alerts
Cisco Application Control Engine
Cisco Email Security
Cisco NX-OS
Citrix StoreFront
Cofense Triage
Comodo
Fidelis Network
FireEye NX
Honeyd
Kemp Load Balancer
Kyriba Treasury Management
Microsoft Intune
MySQL
Palo Alto Networks Cortex XDR
Red Canary EDR
ServiceNow CMDB
Symantec VIP Enterprise Gateway
Tanium Discover
Tripwire File Integrity Monitoring
January 25, 2021
Feature
Chronicle Detection Engine
Enables customers to automate the process of searching across their data for security issues. You can specify Rules to search all of your data and notify you when potential and known threats appear in your enterprise. For more information on the Chronicle Detection Engine, please see the following:
Chronicle Detection Engine UI: The Chronicle Detection Engine is integrated within the Chronicle UI. It includes the Rules Dashboard for monitoring Rule activity and the Rules Editor, enabling you to create, test, and activate new Rules.
Chronicle Detection Engine API: The Chronicle Detection Engine API enables you to programmatically modify and operate all of the Detection Engine functionality that is also provided by the Detection Engine UI.
YARA-L 2.0: Use the YARA-L 2.0 language to specify Rules for the Detection Engine.
September 02, 2020
Feature
Chronicle User View
Enables customers to better understand how users within an enterprise might be impacted by security events. By focusing on the behavior of individual users, security administrators can search for activity indicating an account compromise or other security concern.
June 12, 2020
Change
Chronicle Rules Engine API
The Chronicle Rules Engine API now includes the StreamRuleNotifications method. This method enables you to continuously receive rules engine results over an HTTP stream as the results are discovered. Contact your Chronicle representative for more information.
Chronicle API Query Limits
The query limits for the Chronicle Search API calls are now documented.
Chronicle Tooling and Management APIs
The query limits for the Chronicle Tooling and Management API calls are now documented. Contact your Chronicle representative for more information.
Supported Data Sets
Chronicle can now ingest and parse data from the following additional systems and services:
Access Management —Added support for OpenAM.
Audit —Added support for ManageEngine ADAudit Plus.
Authentication —Added support for Preempt, Symantec SiteMinder, and Thycotic.
Badging —Added support for Honeywell Pro-Watch.
Cloud —Added support for Microsoft Cloud Access Security Broker (CASB) and Salesforce.
DHCP —Added support for Linux DHCP Server.
Hypervisor —Added support for VMware ESXi JSON.
Intrusion Detection and Prevention —Added support for Juniper Intrusion Prevention System (IPS).
Security Management —Added support for AlgoSec, BeyondTrust, and DMP Entré.
Server —Added support for Microsoft Internet Information Services (IIS) and Microsoft SQL Server.
May 15, 2020
Change
Chronicle Rules Engine API
The Chronicle Rules Engine API now includes the Live Rules API. The Live Rules API enables you to run and manage security rules in real time. Once activated, a Live Rule monitors your incoming logs for threats until it is deleted or disabled. Contact your Chronicle representative for more information.
UDM Reference
Location Metadata—Added the location metadata fields.
Supported Data Sets
Chronicle can now ingest and parse data from the following additional systems and services:
ATP —Added support for Microsoft Defender ATP.
Antivirus —Added support for Bitdefender and Trend Micro.
Authentication —Added support for Cisco ACS and RSA Authentication Manager version 8.1.
EDR —Added support for Digital Guardian.
IDM and PAM —Added support for Cyberark.
NAC —Added support for Forescout.
VPN —Added support for Zscaler.
May 08, 2020
Change
Chronicle Tooling API
Helps partners to develop new parsers to normalize new log data types. Contact your Chronicle representative for more information.
Supported Data Sets
Chronicle can now ingest and parse data from the following additional systems and services:
Alerts —Added support for Suricata.
Antivirus —Added support for Cisco.
Application —Added support for Microsoft Office 365.
Authentications —Added support for Aruba ClearPass, Cisco ISE, and Duo.
Deception —Added support for Acalvio.
EDR —For Red Canary customers, Chronicle can ingest EDR logs from Endgame.
Endpoint —Added support for McAfee ePolicy Orchestrator.
Firewall —Added support for Zscaler.
IoC —Added support for Emerging Threats Pro.
Router —Added support for Cisco.
SAAS —Added support for Cloudflare and Google G Suite Audit.
Switch —Added support for Cisco.
VPN —Added support for Pulse Connect Secure.
March 30, 2020
Change
Chronicle User Guide
Column sort —You can now sort columns on the Enterprise Insights page and from the Timeline sidebar lists.
Supported Data Sets
Chronicle can now ingest and parse data from the following additional systems and services:
DHCP —Added support for Elastic Packetbeat.
DNS —Added support for Elastic Packetbeat.
EDR —Added support for ESET.
Mail Gateway —Added support for Barracuda Email Security and Mimecast Email Security.
Web Application Firewall —Added support for Citrix Netscaler.
March 19, 2020
Change
Supported Data Sets
Chronicle can now ingest and parse data from the following additional systems and services:
Traffic Management —Added support for F5 Big-IP Local Traffic Manager (LTM).
Unified Threat Management —Added support for Cisco Meraki.
January 01, 2020
Change
Chronicle Partner Ingestion API
Added the udmevents endpoint to enable you to send UDM events in batches.
Chronicle Search API
Enables you to programmatically access your security data directly through API calls to Chronicle.
December 01, 2019
Change
Chronicle Unified Data Model
Describes how to generate properly constructed UDM events for consumption by Chronicle's cyber-security analytics platform.
July 01, 2019
Change
Raw Log Scan
Enables you to examine your raw unparsed logs.
Regular Expressions
Enables you to search your raw logs using regular expressions.
Hash View
Enables you to search for and investigate files based on their hash value.
June 01, 2019
Change
Chronicle Data Flow Overview
Information on how customer security data flows from customers to Chronicle and how Chronicle handles that data.
May 01, 2019
Change
Chronicle Partner Ingestion API
Enables you to forward raw logs directly to Chronicle.
March 01, 2019
Change
Enterprise Insights
Now includes the Procedural Filtering menu and lists all of the Assets with Alerts within your enterprise.
Viewing EDR Data in the Timeline
Viewing Endpoint Detection and Response (EDR) data in the timeline.
Domain Context
Analytics and insights from VirusTotal, EmergingThreats, WHOIS, and Department of Homeland Security's (DHS) Automated Indicator Sharing (AIS) data sources.
Investigating Domains and IP Addresses
Searching for external IP addresses and URLs.
Chronicle Chrome Extension
Search for indicators using the Chrome extension.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
