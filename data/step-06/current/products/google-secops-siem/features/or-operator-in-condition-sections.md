---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:56:14.323Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "OR operator in condition sections"
feature_slug: "or-operator-in-condition-sections"
latest_feature_date: "2025-12-08"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users"
  - "https://docs.cloud.google.com/chronicle/docs/investigation/udm-search"
  - "https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines"
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
keywords:
  - "or"
  - "operator"
  - "in"
  - "condition"
  - "sections"
  - "users"
  - "can"
  - "use"
---

# OR operator in condition sections

Product: Google SecOps SIEM
Coverage: LOW

## Step 02 Summary

Users can use the or operator in the condition section to combine multiple conditions.

## Extended Definition

Users can use the or operator in the condition section to combine multiple conditions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)
- [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)

## Supporting Pages

### "Configure data RBAC for users \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users](https://docs.cloud.google.com/chronicle/docs/administration/configure-datarbac-users)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Configure data RBAC for users Supported in: Google secops SIEM This page describes how data role-based access control ( data RBAC ) administrators can configure data RBAC within Google Security Operations.
- Create and manage scopes You can create and manage data scopes within the Google SecOps user interface, and then assign those scopes to users or groups through IAM.
- Through the creation and assignment of data scopes, which are defined by labels, you can ensure that data is only accessible to authorized users.
- To add scopes to the role, we recommend the following: Select Name in Condition type , the operator in Operator , and enter the scope name in Value . /<scopename> To assign multiple scopes, add more conditions using the OR operator.

### "Search for events and alerts \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/investigation/udm-search](https://docs.cloud.google.com/chronicle/docs/investigation/udm-search)
- Source ID: `site-api-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- The following examples show supported boolean operators ( AND , OR , and NOT ): A AND B A OR B Use parentheses ( ) to group expressions and control evaluation order: (A OR B) AND (B OR C) AND (C OR NOT D) Examples: Search for login events on the finance server: metadata.event type = "USER LOGIN" and target.hostname = "finance-svr" Use the operator (>) to search for connections where more than 10 MB of data was sent: metadata.event type = "NETWORK CONNECTION" and network.sent bytes > 10000000 Use multiple conditions to search for winword.exe launching cmd.exe or powershell.exe : metadata.event type = "PROCESS LAUNCH" and principal.process.file.full path = /winword/ and ( target.process.file.full path = /cmd.exe/ or target.process.file.full path = /powershell.exe/ ) Search key-value pairs in additional and labels fields: The additional and labels fields act as customizable containers for event data that doesn't map to standard UDM fields.
- For example: additional.fields["key"]="value" Examples of searches using specific key-value pairs in the additional and labels fields: Search for events containing specified key-value pairs: additional.fields["pod name"] = "kube-scheduler" metadata.ingestion labels["MetadataKeyDeletion"] = "startup-script" Use the AND operator with key-value pair searches: additional.fields["pod name"] = "kube-scheduler" AND additional.fields["pod name1"] = "kube-scheduler1" Search for all events that contain the specified key, regardless of the value: additional.fields["pod name"] != "" Search for events that contain a specific key, using a regular expression: additional.fields.value.string value = "mystring" Note: You can also use value.bool value or value.number value for boolean and numeric matches.
- Supported fields You can download the following fields to a CSV file from the platform: user hostname process name event type timestamp raw log (valid only when raw logs are enabled for the customer) All fields starting with udm.additional Valid field types You can download the following field types to a CSV file: double float int32 uint32 int64 uint64 bool string enum bytes google.protobuf.Timestamp google.protobuf.Duration Unsupported fields Fields that start with "udm" (not udm.additional) and meet either of the following conditions cannot be downloaded to CSV: The nesting of the field is more than 10 deep in udm proto.
- Types of grouped UDM fields You can search across all of the following grouped UDM fields: Grouped field name Associated UDM fields domain about.administrative domain about.asset.network domain network.dns.questions.name network.dns domain principal.administrative domain principal.asset.network domain target.administrative domain target.asset.hostname target.asset.network domain target.hostname email intermediary.user.email addresses network.email.from network.email.to principal.user.email addresses security result.about.user.email addresses target.user.email addresses file path principal.file.full path principal.process.file.full path principal.process.parent process.file.full path target.file.full path target.process.file.full path target.process.parent process.file.full path hash about.file.md5 about.file.sha1 about.file.sha256 principal.process.file.md5 principal.process.file.sha1 principal.process.file.sha256 security result.about.file.sha256 target.file.md5 target.file.sha1 target.file.sha256 target.process.file.md5 target.process.file.sha1 target.process.file.sha256 hostname intermediary.hostname observer.hostname principal.asset.hostname principal.hostname src.asset.hostname src.hostname target.asset.hostname target.hostname ip intermediary.ip observer.ip principal.artifact.ip principal.asset.ip principal.ip src.artifact.ip src.asset.ip src.ip target.artifact.ip target.asset.ip target.ip namespace principal.namespace src.namespace target.namespace process id principal.process.parent process.pid principal.process.parent process.product specific process id principal.process.pid principal.process.product specific process id target.process.parent process.pid target.process.parent process.product specific process id target.process.pid target.process.product specific process id user about.user.userid observer.user.userid principal.user.user display name principal.user.userid principal.user.windows sid src.user.userid target.user.user display name target.user.userid target.user.windows sid Find a UDM field for search query While writing a search query, you may not know which UDM field to include.

### "Response integrations community contribution guidelines \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following JSON object represents a poor structure as it would be unusable inside playbooks: { "10.10.10.10": { "is malicious": "false" } } Instead, format it like this: [ { "is malicious": "false", "ip": "10.10.10.10" } ] If you're using entities inside the action and return results Per Entity, then the best practice is to structure the JSON Result like this: [ { "Entity": "10.10.10.10", "EntityResult": { "is malicious": "false", } } ] Always consider how the output of the action can be used inside automation.
- Documentation link As part of the integration, you can add a link that will point users to the documentation.
- Users can access the documentation link from the Parameters section of the Configure Instance dialog.
- The description should help users configure the integration from within the platform.

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-api-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- December 08, 2025 Feature N OF and OR syntax updates You can now use the N OF syntax and the or operator to write flexible and conditional logic within the condition section of your query.
- You can then use the placeholder variable in other sections of the rule, such as the match section, outcome section, or condition section.
- 1Password ( ONEPASSWORD ) A10 Load Balancer ( A10 LOAD BALANCER ) AIX system ( AIX SYSTEM ) Akamai Enterprise Application Access ( AKAMAI EAA ) Akamai WAF ( AKAMAI WAF ) Apache ( APACHE ) Aqua Security ( AQUA SECURITY ) Aruba ( ARUBA WIRELESS ) Attivo Networks ( ATTIVO ) Auth0 ( AUTH ZERO ) AWS Config ( AWS CONFIG ) AWS GuardDuty ( GUARDDUTY ) AWS Lambda Function ( AWS LAMBDA FUNCTION ) AWS RDS ( AWS RDS ) AWS VPC Flow ( AWS VPC FLOW ) Azure AD ( AZURE AD ) Azure AD Directory Audit ( AZURE AD AUDIT ) Azure AD Sign-In ( AZURE AD SIGNIN ) Azure Key Vault logging ( AZURE KEYVAULT AUDIT ) Azure VNET Flow ( AZURE VNET FLOW ) Barracuda Email ( BARRACUDA EMAIL ) Barracuda WAF ( BARRACUDA WAF ) BeyondTrust BeyondInsight ( BEYONDTRUST BEYONDINSIGHT ) Bitdefender ( BITDEFENDER ) Blue Coat Proxy ( BLUECOAT WEBPROXY ) Check Point ( CHECKPOINT FIREWALL ) Check Point Sandblast ( CHECKPOINT EDR ) Chrome Management ( N/A ) Cisco Email Security ( CISCO EMAIL SECURITY ) Cisco Firepower NGFW ( CISCO FIREPOWER FIREWALL ) Cisco Internetwork Operating System ( CISCO IOS ) Cisco IronPort ( CISCO IRONPORT ) Cisco ISE ( CISCO ISE ) Cisco Meraki ( CISCO MERAKI ) Cisco NX-OS ( CISCO NX OS ) Cisco Router ( CISCO ROUTER ) Cisco Stealthwatch ( CISCO STEALTHWATCH ) Cisco Umbrella SWG DLP ( CISCO UMBRELLA SWG DLP ) Cisco vManage SD-WAN ( CISCO SDWAN ) Cisco WLC/WCS ( CISCO WIRELESS ) Cisco WSA ( CISCO WSA ) Citrix Netscaler ( CITRIX NETSCALER ) Cloud Audit Logs ( N/A ) Cloud DNS ( N/A ) Cloud Load Balancing ( GCP LOADBALANCING ) Cloudflare ( CLOUDFLARE ) Corelight ( CORELIGHT ) CrowdStrike Alerts API ( CS ALERTS ) CrowdStrike Detection Monitoring ( CS DETECTS ) CrowdStrike Falcon ( CS EDR ) CrowdStrike Falcon Stream ( CS STREAM ) CSV Custom IOC ( CSV CUSTOM IOC ) CyberArk ( CYBERARK ) Cybereason EDR ( CYBEREASON EDR ) Darktrace ( DARKTRACE ) EfficientIP DDI ( EFFICIENTIP DDI ) Elastic Defend ( ELASTIC DEFEND ) EPIC Systems ( EPIC ) ExtraHop RevealX ( EXTRAHOP ) F5 Advanced Firewall Management ( F5 AFM ) F5 ASM ( F5 ASM ) F5 BIGIP Access Policy Manager ( F5 BIGIP APM ) F5 BIGIP LTM ( F5 BIGIP LTM ) F5 DNS ( F5 DNS ) F5 Silverline ( F5 SILVERLINE ) Fidelis Network ( FIDELIS NETWORK ) FireEye ETP ( FIREEYE ETP ) ForgeRock Identity Cloud ( FORGEROCK IDENTITY CLOUD ) FortiGate ( FORTINET FIREWALL ) Fortinet FortiAnalyzer ( FORTINET FORTIANALYZER ) Fortinet Proxy ( FORTINET WEBPROXY ) Fortinet Web Application Firewall ( FORTINET FORTIWEB ) GitHub ( GITHUB ) Halcyon Anti Ransomware ( HALCYON ) HAProxy ( HAPROXY ) HP Aruba (ClearPass) ( CLEARPASS ) IBM DataPower Gateway ( IBM DATAPOWER ) Imperva ( IMPERVA WAF ) Imperva SecureSphere Management ( IMPERVA SECURESPHERE ) Infoblox DHCP ( INFOBLOX DHCP ) Jamf pro context ( JAMF PRO CONTEXT ) Kubernetes Node ( KUBERNETES NODE ) Lacework Cloud Security ( LACEWORK ) Linux Auditing System (AuditD) ( AUDITD ) Linux Sysmon ( LINUX SYSMON ) McAfee IPS ( MCAFEE IPS ) Menlo Security ( MENLO SECURITY ) Microsoft AD ( WINDOWS AD ) Microsoft Azure Activity ( AZURE ACTIVITY ) Microsoft Defender for Identity ( MICROSOFT DEFENDER IDENTITY ) Microsoft IIS ( IIS ) Mimecast ( MIMECAST MAIL ) Mimecast Mail V2 ( MIMECAST MAIL V2 ) MISP Threat Intelligence ( MISP IOC ) NetApp ONTAP ( NETAPP ONTAP ) Netskope V2 ( NETSKOPE ALERT V2 ) Netskope Web Proxy ( NETSKOPE WEBPROXY ) NGINX ( NGINX ) One Identity Identity Manager ( ONE IDENTITY IDENTITY MANAGER ) Opnsense ( OPNSENSE ) Orca Cloud Security Platform ( ORCA ) Palo Alto Cortex XDR Events ( PAN CORTEX XDR EVENTS ) Palo Alto Networks Firewall ( PAN FIREWALL ) Palo Alto Panorama ( PAN PANORAMA ) Palo Alto Prisma Access ( PAN CASB ) pfSense ( PFSENSE ) Ping Federate ( PING FEDERATE ) Proofpoint Observeit ( OBSERVEIT ) Proofpoint On Demand ( PROOFPOINT ON DEMAND ) Proofpoint Tap Alerts ( PROOFPOINT MAIL ) Qualys VM ( QUALYS VM ) Remediant SecureONE ( REMEDIANT SECUREONE ) SAP SM20 ( SAP SM20 ) SecureAuth ( SECUREAUTH SSO ) SentinelOne EDR ( SENTINEL EDR ) Silverfort Authentication Platform ( SILVERFORT ) Sophos Central ( SOPHOS CENTRAL ) Sophos UTM ( SOPHOS UTM ) Squid Web Proxy ( SQUID WEBPROXY ) Symantec DLP ( SYMANTEC DLP ) Symantec Web Security Service ( SYMANTEC WSS ) Tenable Active Directory Security ( TENABLE ADS ) Tenable Security Center ( TENABLE SC ) Thinkst Canary ( THINKST CANARY ) Trellix HX Event Streamer ( TRELLIX HX ES ) Trend Micro Apex one ( TRENDMICRO APEX ONE ) Trend Micro Cloud one ( TRENDMICRO CLOUDONE ) Trend Micro Vision One Activity ( TRENDMICRO VISION ONE ACTIVITY ) Trend Micro Vision One Observerd Attack Techniques ( TRENDMICRO VISION ONE OBSERVERD ATTACK TECHNIQUES ) Trend Micro Vision One Workbench ( TRENDMICRO VISION ONE WORKBENCH ) Tripwire ( TRIPWIRE FIM ) Unix system ( NIX SYSTEM ) VMware Horizon ( VMWARE HORIZON ) VMware vCenter ( VMWARE VCENTER ) VMware vRealize Suite (VMware Aria) ( VMWARE VREALIZE ) WatchGuard ( WATCHGUARD ) Windows Event ( WINEVTLOG ) Windows Event (XML) ( WINEVTLOG XML ) Workday Audit Logs ( WORKDAY AUDIT ) Workspace Activities ( WORKSPACE ACTIVITY ) Workspace Users ( WORKSPACE USERS ) ZScaler Deception ( ZSCALER DECEPTION ) The following log types were added without a default parser.
- January 14, 2025 Change The following rules have been removed from their associated rule packs in Curated Detections due to high alert volume across the Google SecOps customer base: Cloud Threats - CDIR SCC Enhanced Defense Evasion Alerts: SCC: Modify VPC Service Control with GCE Activity from the Restricted Resource SCC: Modify VPC Service Control with Activity from the Restricted Service Linux Threats - OS Privilege Escalation Tools: Sensitive File Discovery Last Login Users Whoami Commands Windows Threats - Initial Access: NetLogon AD System Event Risk Analytics for UEBA - Login to an Application Never Before Seen for a User Group: First Time User Login Activity to Application for Manager Peer Group Risk Analytics for UEBA - Login from Country Never Before Seen for a User Group: First Time User Login Activity from Country for Manager Peer Group The rule "SCC: Unexpected Child Shell" has been moved from the rule pack "Cloud Threats - CDIR SCC Enhanced Malware Alerts" to "Cloud Threats - CDIR SCC Enhanced Execution Alerts" January 07, 2025 Announcement The following parser documentation is now available: Collect Microsoft Defender for Endpoint logs Zscaler parsers overview Collect Zscaler DNS logs Collect Zscaler Firewall logs Collect Zscaler Internet Access logs Collect Zscaler Webproxy logs Collect Linux auditd and AIX systems logs Collect CircleCI audit logs Collect CloudPassage Halo logs Collect JFrog Artifactory logs Collect Apple macOS syslog data Collect Netskope web proxy logs Collect Onfido logs Collect OPNsense firewall logs Collect Rapid7 InsightIDR logs Collect Sysdig logs Collect Thinkst Canary logs Collect VMware Workspace ONE UEM logs Collect Workday HCM logs December 27, 2024 Change Google SecOps has added a new rule set to Applied Threat Intelligence (ATI), called Inbound IP Address Authentication, that identifies IP addresses that are authenticating to local infrastructure in an inbound network direction.

