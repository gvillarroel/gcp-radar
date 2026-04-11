---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:24:01.913Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "All-time search"
feature_slug: "all-time-search"
latest_feature_date: "2026-01-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
keywords:
  - "all"
  - "time"
  - "search"
  - "queries"
  - "can"
  - "run"
  - "across"
  - "the"
---

# All-time search

Product: Google SecOps
Coverage: LOW

## Step 02 Summary

Search queries can run across the full retention period by selecting All Time in the Search editor time picker.

## Extended Definition

Search queries can run across the full retention period by selecting All Time in the Search editor time picker.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)

## Supporting Pages

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-docs-reference-2`
- Final score: 188
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Types of grouped UDM fields You can search across all of the following grouped UDM fields: Grouped field name Associated UDM fields domain about.administrative domain about.asset.network domain network.dns.questions.name network.dns domain principal.administrative domain principal.asset.network domain target.administrative domain target.asset.hostname target.asset.network domain target.hostname email intermediary.user.email addresses network.email.from network.email.to principal.user.email addresses security result.about.user.email addresses target.user.email addresses file path principal.file.full path principal.process.file.full path principal.process.parent process.file.full path target.file.full path target.process.file.full path target.process.parent process.file.full path hash about.file.md5 about.file.sha1 about.file.sha256 principal.process.file.md5 principal.process.file.sha1 principal.process.file.sha256 security result.about.file.sha256 target.file.md5 target.file.sha1 target.file.sha256 target.process.file.md5 target.process.file.sha1 target.process.file.sha256 hostname intermediary.hostname observer.hostname principal.asset.hostname principal.hostname src.asset.hostname src.hostname target.asset.hostname target.hostname ip intermediary.ip observer.ip principal.artifact.ip principal.asset.ip principal.ip src.artifact.ip src.asset.ip src.ip target.artifact.ip target.asset.ip target.ip namespace principal.namespace src.namespace target.namespace process id principal.process.parent process.pid principal.process.parent process.product specific process id principal.process.pid principal.process.product specific process id target.process.parent process.pid target.process.parent process.product specific process id target.process.pid target.process.product specific process id user about.user.userid observer.user.userid principal.user.user display name principal.user.userid principal.user.windows sid src.user.userid target.user.user display name target.user.userid target.user.windows sid Find a UDM field for search query While writing a search query, you may not know which UDM field to include.
- Perform all-time searches You can run searches over your entire retention period.
- The search is automatically run again using the same date and time parameters.
- For example: additional.fields["key"]="value" Examples of searches using specific key-value pairs in the additional and labels fields: Search for events containing specified key-value pairs: additional.fields["pod name"] = "kube-scheduler" metadata.ingestion labels["MetadataKeyDeletion"] = "startup-script" Use the AND operator with key-value pair searches: additional.fields["pod name"] = "kube-scheduler" AND additional.fields["pod name1"] = "kube-scheduler1" Search for all events that contain the specified key, regardless of the value: additional.fields["pod name"] != "" Search for events that contain a specific key, using a regular expression: additional.fields.value.string value = "mystring" Note: You can also use value.bool value or value.number value for boolean and numeric matches.

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Announcement New parser documentation now available New parser documentation is available to help you ingest and normalize logs from the following sources: Collect Active Countermeasures AI-Hunter logs Collect ADVA Fiber Service Platform logs Collect AIX system logs Collect Akamai SIEM Connector logs Collect AMD Pensando DSS firewall logs Collect Azure NSG Flow logs Collect Cloudflare Page Shield logs Collect FingerprintJS logs Collect FireEye eMPS logs Collect Forcepoint Email Security logs Collect Forcepoint NGFW logs Collect Fortinet FortiSASE logs Collect IBM DB2 logs Collect ManageEngine ADManager Plus logs Collect Microsoft Azure Resource logs Collect Microsoft Intune Context logs Collect Ubiquiti Unifi switch logs Collect Vectra Detect logs Collect Vectra Stream logs Collect Voltage SecureMail logs Collect Wallix Bastion logs January 16, 2026 Feature Perform all-time searches You can now run searches over your full retention period by clicking the Time Picker on the Search editor panel and selecting All Time .
- January 14, 2025 Change The following rules have been removed from their associated rule packs in Curated Detections due to high alert volume across the Google SecOps customer base: Cloud Threats - CDIR SCC Enhanced Defense Evasion Alerts: SCC: Modify VPC Service Control with GCE Activity from the Restricted Resource SCC: Modify VPC Service Control with Activity from the Restricted Service Linux Threats - OS Privilege Escalation Tools: Sensitive File Discovery Last Login Users Whoami Commands Windows Threats - Initial Access: NetLogon AD System Event Risk Analytics for UEBA - Login to an Application Never Before Seen for a User Group: First Time User Login Activity to Application for Manager Peer Group Risk Analytics for UEBA - Login from Country Never Before Seen for a User Group: First Time User Login Activity from Country for Manager Peer Group The rule "SCC: Unexpected Child Shell" has been moved from the rule pack "Cloud Threats - CDIR SCC Enhanced Malware Alerts" to "Cloud Threats - CDIR SCC Enhanced Execution Alerts" January 07, 2025 Announcement The following parser documentation is now available: Collect Microsoft Defender for Endpoint logs Zscaler parsers overview Collect Zscaler DNS logs Collect Zscaler Firewall logs Collect Zscaler Internet Access logs Collect Zscaler Webproxy logs Collect Linux auditd and AIX systems logs Collect CircleCI audit logs Collect CloudPassage Halo logs Collect JFrog Artifactory logs Collect Apple macOS syslog data Collect Netskope web proxy logs Collect Onfido logs Collect OPNsense firewall logs Collect Rapid7 InsightIDR logs Collect Sysdig logs Collect Thinkst Canary logs Collect VMware Workspace ONE UEM logs Collect Workday HCM logs December 27, 2024 Change Google SecOps has added a new rule set to Applied Threat Intelligence (ATI), called Inbound IP Address Authentication, that identifies IP addresses that are authenticating to local infrastructure in an inbound network direction.
- March 18, 2025 Feature Statistics and aggregations in UDM search using YARA-L 2.0 You can now run statistical queries on UDM events and group the results for analysis using YARA-L 2.0.
- All-time search : A new All Time option lets you run a search over the entire data retention period.

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- March 19, 2025 Announcement The following parser documentation is now available: Collect AWS Config logs Collect AWS Elastic Load Balancing logs Collect AWS Route 53 logs Collect AWS S3 server access logs Collect AWS WAF logs Collect Azure Application Gateway logs Collect Carbon Black App Control logs Collect Carbon Black EDR logs Collect Delinea Secret Server logs Collect Radware WAF logs Collect AWS Aurora logs Collect AWS CloudWatch logs Collect AWS Control Tower logs Collect AWS Elastic MapReduce logs Collect AWS Key Management Service logs Collect AWS Macie logs Collect AWS Network Firewall logs Collect AWS Security Hub logs Collect AWS Session Manager logs Collect Zscaler DLP logs Collect Zscaler Tunnel logs Collect Zscaler VPN logs Collect Zscaler ZPA Audit logs Collect Zscaler ZPA logs Collect Zscaler CASB logs Collect Azure AD Sign-In logs Collect Azure API Management logs Collect Azure APP Service logs Collect Azure Firewall logs Collect Azure VPN logs Collect AWS VPN logs Collect Azure Storage Audit logs Collect Azure WAF logs Collect Cloud IoT logs Collect Cloud Run logs Collect Cloud Compute logs Collect CrowdStrike Falcon Stream logs Collect SentinelOne Deep Visibility logs Collect Cloud VPC Flow Logs Collect Cloud Compute context logs Collect Cloud Intrusion Detection System (Cloud IDS) logs Collect Cloud Next Generation Firewall Enterprise logs Collect Cloud Storage context logs Collect Cloud Identity and Access Management (IAM) Analysis logs Collect Cloud Identity Devices logs Collect Cloud Identity Device Users logs Collect Cloud Security Command Center Error logs Collect Cloud Security Command Center Observation logs Collect Cloud Security Command Center Posture Violation logs Collect Cloud Security Command Center Toxic Combination logs Collect Cloud Security Command Center Unspecified logs Collect Cloud Secure Web Proxy logs March 18, 2025 Feature Statistics and aggregations in UDM search using YARA-L 2.0 You can now run statistical queries on UDM events and group the results for analysis using YARA-L 2.0.
- January 16, 2026 Feature Perform all-time searches You can now run searches over your full retention period by clicking the Time Picker on the Search editor panel and selecting All Time .
- January 23, 2025 Feature The following new YARA-L 2.0 functions are available in Rules and Search: arrays.concat arrays.join string arrays.max arrays.min arrays.size arrays.index to int cast.as bool cast.as float math.ceil math.floor math.geo distance math.is increasing math.pow math.random strings.contains strings.count substrings strings.extract domain strings.extract hostname strings.from hex strings.ltrim strings.reverse strings.rtrim strings.trim strings.url decode timestamp.as unix seconds timestamp.now The following new YARA-L 2.0 functions are available in Rules: hash.sha256 window.avg window.first window.last window.median window.mode window.stddev window.variance Details on function signatures and behavior can be found in YARA-L2.0 Function Syntax Reference Documentation Change The Google SecOps team identified that a cloud threat detection rule pack (azure-defender-for-cloud-vm-extensions) was inadvertently made available to all customers.
- Accenture Synthetic ( ACCENTURE SYNTHETIC ) Adyen Platform ( ADYEN ) AliCloud ActionTrail ( ALICLOUD ACTIONTRAIL ) Apache LOG4J Java Application Log ( LOG4J ) AppSmith Audit ( APPSMITH AUDIT ) Arctic Security Arctic Node ( ARCTIC NODE ) Arista CorvilNet DANZ Integration ( ARISTA CORVILNET ) Arista Extensible Operating System ( ARISTA EOS ) AvePoint EnPower ( AVEPOINT ENPOWER ) Avigilon Alta Cloud Security ( AVIGILON ALTA CLOUD SECURITY ) Avigilon Ava Security Camera ( AVIGILON AVA SECURITY CAMERA ) AWS Dasha ( AWS DASHA ) AWS Elastic Kubernetes Service ( AWS EKS ) Azure Network Security Group Event ( AZURE NSG EVENT ) Azure Windows Virtual Desktop Connections Logs ( AZURE WVD CONNECTIONS ) Azure Windows Virtual Desktop Management Logs ( AZURE WVD MANAGEMENT ) Barracuda Load Balancer ADC ( BARRACUDA LOAD BALANCER ) Broadcom Edge Secure Web Gateway ( BROADCOM EDGE SWG ) Celonis Audit Logs ( CELONIS ) Chopin PrePay Solutions ( CHOPIN PPS ) Cisco Duo Authentication Proxy ( DUO AUTH PROXY ) Cloudflare CASB Findings ( CLOUDFLARE CASB FINDINGS ) Cloudflare Device posture results ( CLOUDFLARE DEVICE POSTURE RESULTS ) Cloudflare DLP Forensic Copies ( CLOUDFLARE DLP FORENSIC COPIES ) Cloudflare DNS Firewall Logs ( CLOUDFLARE DNS FIREWALL LOGS ) Cloudflare DNS logs ( CLOUDFLARE DNS LOGS ) Cloudflare Email Security Alerts ( CLOUDFLARE EMAIL SECURITY ALERTS ) Cloudflare Firewall Events ( CLOUDFLARE FIREWALL EVENTS ) Cloudflare Gateway DNS ( CLOUDFLARE GATEWAY DNS ) Cloudflare Gateway HTTP ( CLOUDFLARE GATEWAY HTTP ) Cloudflare Gateway Network ( CLOUDFLARE GATEWAY NETWORK ) Cloudflare HTTP requests ( CLOUDFLARE HTTP REQUESTS ) Cloudflare Magic IDS Detections ( CLOUDFLARE MAGIC IDS DETECTIONS ) Cloudflare NEL reports ( CLOUDFLARE NEL REPORTS ) Cloudflare Sinkhole HTTP Logs ( CLOUDFLARE SINKHOLE HTTP LOGS ) Cloudflare SSH Logs ( CLOUDFLARE SSH LOGS ) Cloudflare Workers Trace Events ( CLOUDFLARE WORKERS TRACE EVENTS ) Cloudflare Zero Trust Network Session ( CLOUDFLARE ZERO TRUST NETWORK SESSION ) CloudWave Honeypot ( CLOUDWAVE HONEYPOT ) ColorTokens ( COLORTOKENS ) Contrast Security ( CONTRAST SECURITY ) Conversational Agents and Dialogflow ( CONVERSATIONAL AGENT ) Corero SmartWall One ( CORERO SMARTWALL ONE ) Cytracom Control One ( CYTRACOM CONTROL ONE ) Datadog Application Security Management ( DATADOG ASM ) Express NodeJS ( EXPRESS NODEJS ) F5 Distributed Cloud WAF ( F5 DCS WAF ) Figma Developers ( FIGMA ) FIS Trax Payment Factory ( TRAX ) Fortinet FortiDeceptor ( FORTINET FORTIDECEPTOR ) Fortinet FortiSASE ( FORTINET FORTISASE ) Gemini Code Assist ( GEMINI CODE ASSIST ) Genea Access Control ( GENEA ACCESS CONTROL ) Genetec Synergis ( GENETEC SYNERGIS ) GL TRADE ( GL TRADE ) HP Inc MFP ( HP INC MFP ) HP Tandem ( HP TANDEM ) Huawei Versatile Routing Platform ( HUAWEI VRP ) Human Security ( HUMAN SECURITY ) iManage Threat Manager ( IMANAGE THREAT MANAGER ) Indefend DLP ( INDEFEND DLP ) Invicti ( INVICTI ) Isonline ISL Light ( ISL LIGHT ) Itential Pronghorn ( ITENTIAL PRONGHORN ) Jit ( JIT ) Kodem Security ( KODEM SECURITY ) Konica Minolta YSoft SafeQ ( YSOFT SAFEQ ) LayerX ( LAYERX ) LinOTP ( LIN OTP ) Magento Cloud ( MAGENTO CLOUD ) Mandiant Advantage Security Validation ( MA SV ) NetApp ONTAP Audit ( NETAPP ONTAP AUDIT ) Netscout Arbor Threat Mitigation System ( NETSCOUT TMS ) Netwrix Privilege Secure ( NETWRIX PRIVILEGE SECURE ) NeuVector SUSE ( NEUVECTOR ) Novidea Insurance Management System ( NOVIDEA CLAIM HISTORY ) OneTrust ( ONETRUST ) Openpath Context ( OPENPATH CONTEXT ) Oracle Audit Vault Database Firewall ( ORACLE AVDF ) Oracle CPQ ( ORACLE CPQ ) Oracle Exadata Database Machine ( ORACLE EXADATA ) Palo Alto Prisma Cloud Workload Protection ( PAN PRISMA CWP ) Palo Alto Prisma Dig Cloud DSPM ( PAN PRISMA DIG CLOUD DSPM ) Panorays ( PANORAYS ) Pathlock Identity Security Platform ( PATHLOCK ) Procore ( PROCORE ) ProofPoint Email Protection ( PROOFPOINT EMAIL PROTECTION ) Radiantone ( RADIANTONE ) Radware Cloud WAF Service Access ( RADWARE ACCESS ) Reblaze Web Application Firewall ( REBLAZE WAF ) Red Access Browsing Security ( RED ACCESS ) SafeNet Network HSM ( SAFENET HSM ) Salesforce Marketing Cloud Audit ( SALESFORCE MARKETING CLOUD AUDIT ) Salesforce Shield ( SALESFORCE SHIELD ) Sangfor IAG ( SANGFOR IAG ) SAP Leasing ( SAP LEASING ) SAS Institute ( SAS INSTITUTE ) Securden ( SECURDEN ) SecurEnvoy SecurAccess ( SECURENVOY MFA ) Securesoft Sniper IPS ( SECURESOFT SNIPER IPS ) Sentra Data Loss Prevention ( SENTRA DLP ) Shield IoT ( SHIELD IOT ) Siemens Simatic S7 PLC SNMP ( SIEMENS S7 PLC SNMP ) Siemens Simatic S7 PLC SYSLOG ( SIEMENS S7 PLC SYSLOG ) Smartsheet User Context ( SMARTSHEET USER CONTEXT ) Snowflake Access ( SNOWFLAKE ACCESS ) SOCRadar Incidents ( SOCRADAR INCIDENTS ) Strata Maverics Identity Orchestration Platform ( STRATA MAVERICS ) Stripe Payments ( STRIPE ) Suridata ( SURIDATA ) Teradata Access ( TERADATA ACCESS ) Thales payShield 10K HSM ( THALES PS10K HSM ) Trend Micro TippingPoint Security Management System ( TREND MICRO TIPPING POINT ) Valence Security ( VALENCE ) Vertica Audit ( VERTICA AUDIT ) Windows NTP ( WINDOWS NTP ) Winget Autoupdate ( WINGET AUTOUPDATE ) Wiz Runtime Execution Data ( WIZ RUNTIME EXECUTION DATA ) Workiva Wdesk ( WORKIVA WDESK ) XL Release ( XLR ) Yugabyte Database ( YUGABYTE DATABASE ) For a list of supported log types and details about default parser changes, see Supported log types and default parsers .

