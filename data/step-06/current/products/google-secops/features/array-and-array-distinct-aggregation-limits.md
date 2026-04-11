---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:24:01.935Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Array and array_distinct aggregation limits"
feature_slug: "array-and-array-distinct-aggregation-limits"
latest_feature_date: "2025-08-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/detection/detection-limits"
keywords:
  - "array"
  - "and"
  - "distinct"
  - "aggregation"
  - "limits"
  - "the"
  - "element"
  - "limit"
---

# Array and array_distinct aggregation limits

Product: Google SecOps
Coverage: LOW

## Step 02 Summary

The element limit for array and array_distinct aggregation functions in YARA-L has increased to 1,000.

## Extended Definition

The element limit for array and array_distinct aggregation functions in YARA-L has increased to 1,000.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/detection/detection-limits](https://docs.cloud.google.com/chronicle/docs/detection/detection-limits)

## Supporting Pages

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Increased limits for array and array distinct The element limit for array and array distinct aggregation functions in YARA-L has increased from 25 to 1,000.
- September 09, 2024 Feature The following new YARA-L 2.0 functions are available in Rules and Search: arrays.concat arrays.join string arrays.max arrays.min arrays.size arrays.index to int cast.as bool cast.as float math.ceil math.floor math.geo distance math.is increasing math.pow math.random strings.contains strings.count substrings strings.extract domain strings.extract hostname strings.from hex strings.ltrim strings.reverse strings.rtrim strings.trim strings.url decode timestamp.as unix seconds timestamp.now The following new YARA-L 2.0 functions are available in Rules: hash.sha256 window.avg window.first window.last window.median window.mode window.stddev window.variance Details on function signatures and behavior can be found in YARA-L2.0 Function Syntax Reference Documentation September 06, 2024 Change Burst limits will be rolling out over the next 90 days.
- April 06, 2026 Change Updates to search query limits and error messaging Google SecOps has updated search query limits for programmatic and web interface access: Increased Queries Per Hour (QPH) limits of up to 2,000 for APIs and 1,000 for the web interface.
- Perform aggregations (sum, count, count distinct, average, stddev, min, and max) on up to to five values within the UDM fields (for example, domains, users, and products).

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Increased limits for array and array distinct The element limit for array and array distinct aggregation functions in YARA-L has increased from 25 to 1,000.
- April 06, 2026 Change Updates to search query limits and error messaging Google SecOps has updated search query limits for programmatic and web interface access: Increased Queries Per Hour (QPH) limits of up to 2,000 for APIs and 1,000 for the web interface.
- 1Password Audit Events ( Identity and Access Management ) Advanced Intrusion Detection Environment ( Alert ) Airlock Digital Application Allowlisting ( Application Whitelisting ) Akamai DNS ( DNS ) Amazon VPC Transit Gateway Flow Logs ( Network ) Apache Tomcat ( Web server ) Appian Cloud ( Collaboration log types ) AppOmni ( SAAS Security Application ) Aruba Switch ( Network Infrastructure ) Auth0 ( Authentication log ) AWS Cloudtrail ( Cloud Log Aggregator ) AWS CloudWatch ( Cloud service monitoring ) AWS Elastic Load Balancer ( AWS Specific ) AWS GuardDuty ( IDS/IPS ) AWS Network Firewall ( Firewall ) AWS RDS ( Database ) AWS Route 53 DNS ( AWS Specific ) AWS S3 Server Access ( AWS Specific ) AWS VPC Flow ( AWS Specific ) Azure AD Directory Audit ( Audit ) Azure AD Organizational Context ( LDAP ) Azure API Management ( Schema ) Azure App Service ( SAAS ) Azure Application Gateway ( GATEWAY ) Azure Firewall ( Azure Firewall Application Rule ) Azure Key Vault logging ( Audit ) Azure SQL ( Database ) Barracuda WAF ( Firewall ) Barracuda Web Filter ( Webfilter ) BeyondTrust BeyondInsight ( Privileged Account Activity ) BeyondTrust Endpoint Privilege Management ( Privileged Account Activity ) BIND ( DNS ) BloxOne Threat Defense ( DNS ) Blue Coat Proxy ( Web Proxy ) Cato Networks ( NDR ) Check Point ( Firewall ) Ciena Router logs ( Application server logs ) Cisco ACS ( Authentication ) Cisco APIC ( Software-defined Networking (SDN) ) Cisco Call Manager ( NETWORKING ) Cisco DNA Center Platform ( Network Management and Optimization ) Cisco Email Security ( Email Server ) Cisco EStreamer ( Network Monitoring ) Cisco Firepower NGFW ( Firewall ) Cisco FireSIGHT Management Center ( SaaS Application ) Cisco Internetwork Operating System ( Network Infrastructure ) Cisco ISE ( Identity and Access Management ) Cisco Router ( Switches, Routers ) Cisco Secure Workload ( AV and Endpoint ) Cisco Stealthwatch ( Log Aggregator ) Cisco Switch ( Switches, Routers ) Cisco TACACS+ ( Authentication ) Cisco VPN ( VPN ) Citrix Netscaler ( Load Balancer, Traffic Shaper, ADC ) Claroty Continuous Threat Detection ( IoT ) Cloudflare ( SaaS Application ) Colinet Trotta GAUS SEGUROS ( Alert ) CrowdStrike Detection Monitoring ( EDR ) CrowdStrike Falcon ( EDR ) CrowdStrike Falcon Stream ( Alerts ) CrowdStrike Filevantage ( IT infrastructure ) Cyber 2.0 IDS ( IDS ) Cyberark Privilege Cloud ( Identity & Access Management ) CyberArk Privileged Access Manager (PAM) ( CyberArk Privileged Access Manager ) Cybereason EDR ( EDR ) Darktrace ( NDR ) Dell CyberSense ( Data Security ) Dell EMC PowerStore ( DATA STORAGE ) Druva Backup ( Security ) Duo Administrator Logs ( Authentication ) Duo Auth ( Authentication ) EfficientIP DDI ( Network ) ExtraHop RevealX ( Firewall IDS/IPS ) F5 Advanced Firewall Management ( Firewall ) F5 ASM ( WAF ) F5 BIGIP LTM ( Load Balancer, Traffic Shaper, ADC ) F5 VPN ( VPN ) FingerprintJS ( Vulnerability scanners ) FireEye eMPS ( Email server log types. ) FireEye HX ( EDR ) Forcepoint DLP ( Forcepoint DLP ) Forcepoint NGFW ( Network ) Forcepoint Proxy ( Web Proxy ) Forescout NAC ( NAC ) ForgeRock OpenAM ( Identity and Access Management ) Forgerock OpenIdM ( DATA SECURITY ) FortiGate ( Firewall ) Fortinet FortiAnalyzer ( Fortinet FortiAnalyzer ) Fortinet Switch ( Switches and Routers ) GitHub ( SaaS Application ) Guardicore Centra ( Deception Software ) Hashicorp Vault ( Privileged Account Activity ) HCNET Account Adapter Plus ( DHCP ) IBM MaaS360 ( Security ) IBM Security Access Manager ( WAF ) IBM z/OS ( OS ) Illumio Core ( Policy Management ) Imperva ( WAF ) Imperva Advanced Bot Protection ( Bot Protection ) Imperva Attack Analytics ( WAF ) Ingrian Networks DataSecure Appliance ( System and Audit Logs ) Intel 471 Malware Intelligence (`) ISC DHCP ( DHCP ) Jenkins ( Automation and DevOps ) Journald ( Log Aggregation and SIEM Systems ) Juniper ( Firewall ) Juniper Mist ( Network Management and Optimization software ) Juniper MX Router ( Routers and Switches ) Keeper Enterprise Security ( Security ) Kubernetes Audit Azure ( Log Aggregator ) Lacework Cloud Security ( Cloud Security ) Lenel Onguard Badge Management ( Access Control System ) Linux Auditing System (AuditD) ( OS ) Linux Sysmon ( DNS ) ManageEngine Log360 ( Alert Log ) Maria Database ( Database ) McAfee ePolicy Orchestrator ( Policy Management ) McAfee Web Gateway ( Web Proxy ) Microsoft AD ( LDAP ) Microsoft AD FS ( LDAP ) Microsoft Azure Activity ( Misc Windows Specific ) Microsoft Azure NSG Flow ( Network Flow ) Microsoft Azure Resource ( Log Aggregator ) Microsoft Defender Endpoint for iOS Logs (`) Microsoft Defender for Endpoint ( EDR ) Microsoft PowerShell ( Misc.
- Abnormal Security ( ABNORMAL SECURITY ) Akamai DNS ( AKAMAI DNS ) Akamai WAF ( AKAMAI WAF ) Apigee ( GCP APIGEE X ) Array Networks SSL VPN ( ARRAYNETWORKS VPN ) AWS CloudFront ( AWS CLOUDFRONT ) AWS Cloudtrail ( AWS CLOUDTRAIL ) Azure AD ( AZURE AD ) Azure AD Directory Audit ( AZURE AD AUDIT ) Azure AD Sign-In ( AZURE AD SIGNIN ) Barracuda Email ( BARRACUDA EMAIL ) Barracuda Firewall ( BARRACUDA FIREWALL ) Blue Coat Proxy ( BLUECOAT WEBPROXY ) BMC AMI Defender ( BMC AMI DEFENDER ) Carbon Black ( CB EDR ) Check Point ( CHECKPOINT FIREWALL ) Check Point Sandblast ( CHECKPOINT EDR ) Checkpoint Audit ( CHECKPOINT AUDIT ) Cisco AMP ( CISCO AMP ) Cisco EStreamer ( CISCO ESTREAMER ) Cisco FireSIGHT Management Center ( CISCO FIRESIGHT ) Cisco ISE ( CISCO ISE ) Cisco Router ( CISCO ROUTER ) Cisco Switch ( CISCO SWITCH ) Cisco Umbrella DNS ( UMBRELLA DNS ) Cisco VPN ( CISCO VPN ) Cisco WLC/WCS ( CISCO WIRELESS ) Citrix Netscaler ( CITRIX NETSCALER ) Cloud Audit Logs ( N/A ) Cloud SQL ( GCP CLOUDSQL ) Cloud Storage Context ( N/A ) Cohesity ( COHESITY ) CrowdStrike Falcon ( CS EDR ) CyberArk Privileged Access Manager (PAM) ( CYBERARK PAM ) ESET AV ( ESET AV ) F5 ASM ( F5 ASM ) F5 BIGIP LTM ( F5 BIGIP LTM ) F5 VPN ( F5 VPN ) Forcepoint DLP ( FORCEPOINT DLP ) FortiGate ( FORTINET FIREWALL ) GMAIL Logs ( GMAIL LOGS ) HID DigitalPersona ( HID DIGITALPERSONA ) Honeyd ( HONEYD ) HP Aruba (ClearPass) ( CLEARPASS ) IBM AS/400 ( IBM AS400 ) IBM DS8000 Storage ( IBM DS8000 ) IBM Security Verify ( IBM SECURITY VERIFY ) Infoblox ( INFOBLOX ) Island Browser logs ( ISLAND BROWSER ) JAMF CMDB ( JAMF ) JumpCloud Directory Insights ( JUMPCLOUD DIRECTORY INSIGHTS ) Juniper Mist ( JUNIPER MIST ) Kubernetes Node ( KUBERNETES NODE ) Linux Auditing System (AuditD) ( AUDITD ) ManageEngine ADAudit Plus ( ADAUDIT PLUS ) Microsoft AD FS ( ADFS ) Microsoft Azure Activity ( AZURE ACTIVITY ) Microsoft Azure Resource ( AZURE RESOURCE LOGS ) Microsoft CyberX ( CYBERX ) Microsoft Defender for Endpoint ( MICROSOFT DEFENDER ENDPOINT ) Microsoft Graph Activity Logs ( MICROSOFT GRAPH ACTIVITY LOGS ) Microsoft Graph API Alerts ( MICROSOFT GRAPH ALERT ) Microsoft SQL Server ( MICROSOFT SQL ) Mikrotik Router ( MIKROTIK ROUTER ) NetDocuments Solutions ( NETDOCUMENTS ) Netwrix ( NETWRIX ) Office 365 ( OFFICE 365 ) Office 365 Message Trace ( OFFICE 365 MESSAGETRACE ) Okta ( OKTA ) OneLogin ( ONELOGIN SSO ) Opengear Remote Management ( OPENGEAR ) Palo Alto Networks Firewall ( PAN FIREWALL ) pfSense ( PFSENSE ) PostFix Mail ( POSTFIX MAIL ) Proofpoint Sendmail Sentrion ( PROOFPOINT SENDMAIL SENTRION ) Proofpoint Tap Alerts ( PROOFPOINT MAIL ) Pulse Secure ( PULSE SECURE VPN ) Qumulo FS ( QUMULO FS ) Rapid7 ( RAPID7 NEXPOSE ) Rapid7 Insight ( RAPID7 INSIGHT ) Rubrik Polaris ( RUBRIK POLARIS ) SailPoint IAM ( SAILPOINT IAM ) SAP SuccessFactors ( SAP SUCCESSFACTORS ) Semperis DSP ( SEMPERIS DSP ) Sentinelone Alerts ( SENTINELONE ALERT ) SentinelOne EDR ( SENTINEL EDR ) Signal Sciences WAF ( SIGNAL SCIENCES WAF ) Snare System Diagnostic Logs ( SNARE SOLUTIONS ) SonicWall ( SONIC FIREWALL ) Sophos Central ( SOPHOS CENTRAL ) Sophos UTM ( SOPHOS UTM ) Spur data feeds ( SPUR FEEDS ) Suricata EVE ( SURICATA EVE ) Symantec DLP ( SYMANTEC DLP ) Symantec Endpoint Protection ( SEP ) Symantec VIP Authentication Hub ( SYMANTEC VIP AUTHHUB ) Tanium Audit ( TANIUM AUDIT ) Thinkst Canary ( THINKST CANARY ) Trend Micro Vision One ( TRENDMICRO VISION ONE ) Twingate ( TWINGATE ) Unix system ( NIX SYSTEM ) Vectra Detect ( VECTRA DETECT ) Veeam ( VEEAM ) Verba Recording System ( VERBA REC ) VeridiumID by Veridium ( VERIDIUM ID ) VMware ESXi ( VMWARE ESX ) Windows Defender ATP ( WINDOWS DEFENDER ATP ) Windows DNS ( WINDOWS DNS ) Windows Event ( WINEVTLOG ) Windows Event (XML) ( WINEVTLOG XML ) Winscp ( WINSCP ) WordPress ( WORDPRESS CMS ) Workspace Activities ( WORKSPACE ACTIVITY ) Zeek TSV ( BRO TSV ) Zix Email Encryption ( ZIX EMAIL ENCRYPTION ) Zscaler ( ZSCALER WEBPROXY ) ZScaler DNS ( ZSCALER DNS ) Zscaler Private Access ( ZSCALER ZPA ) The following log types, without a default parser, were added.

### "Understand detection limits \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/detection-limits](https://docs.cloud.google.com/chronicle/docs/detection/detection-limits)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- Understand detection limits Supported in: Google secops SIEM Google Security Operations has the following limitations with regards to rule detections: Each rule version has a limit of 10,000 detections per day.
- Running a retrohunt after updating the reference list doesn't reset the existing detections limits or generate new ones.
- If the rule version is updated, the limit is reset and the rule can again generate 10,000 detections in that same day.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

