---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T17:56:14.561Z"
product_name: "Google SecOps SIEM"
product_slug: "google-secops-siem"
feature_name: "DeleteSubject"
feature_slug: "deletesubject"
latest_feature_date: "2022-02-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide"
  - "https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview"
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
keywords:
  - "deletesubject"
  - "adds"
  - "chronicle"
  - "rbac"
  - "api"
  - "method"
  - "for"
  - "removing"
---

# DeleteSubject

Product: Google SecOps SIEM
Coverage: LOW

## Step 02 Summary

Adds a Chronicle RBAC API method for removing user and group role assignments.

## Extended Definition

Adds a Chronicle RBAC API method for removing user and group role assignments.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide)
- [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview)
- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)

## Supporting Pages

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-api-reference`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- February 15, 2022 Feature DeleteSubject The DeleteSubject method has been added to the Chronicle Role-Based Access Control (RBAC) API.
- This also adds new regional endpoints for Chronicle APIs at https://europe-west3-backstory.googleapis.com and https://europe-west6-backstory.googleapis.com.
- This also adds new regional endpoints for Chronicle APIs at https://me-central2-backstory.googleapis.com and http://asia-south1-backstory.googleapis.com .
- This also adds a new regional endpoint for Chronicle APIs at https://australia-southeast1-backstory.googleapis.com/ .

### "Migrate SOAR endpoints to Chronicle API \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/api-migration-guide)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Regional addresses: africa-south1: https://chronicle.africa-south1.rep.googleapis.com asia-northeast1: https://chronicle.asia-northeast1.rep.googleapis.com asia-south1: https://chronicle.asia-south1.rep.googleapis.com asia-southeast1: https://chronicle.asia-southeast1.rep.googleapis.com asia-southeast2: https://chronicle.asia-southeast2.rep.googleapis.com australia-southeast1: https://chronicle.australia-southeast1.rep.googleapis.com europe-west12: https://chronicle.europe-west12.rep.googleapis.com europe-west2: https://chronicle.europe-west2.rep.googleapis.com europe-west3: https://chronicle.europe-west3.rep.googleapis.com europe-west6: https://chronicle.europe-west6.rep.googleapis.com europe-west9: https://chronicle.europe-west9.rep.googleapis.com me-central1: https://chronicle.me-central1.rep.googleapis.com me-central2: https://chronicle.me-central2.rep.googleapis.com me-west1: https://chronicle.me-west1.rep.googleapis.com northamerica-northeast2: https://chronicle.northamerica-northeast2.rep.googleapis.com southamerica-east1: https://chronicle.southamerica-east1.rep.googleapis.com us: https://chronicle.us.rep.googleapis.com eu: https://chronicle.eu.rep.googleapis.com For example, to get a list of all cases on a project in the US: GET https://chronicle.us.rep.googleapis.com/v1alpha/projects/my-project-name-or-id/locations/us/instances/408bfb7b-5746-4a50-885a-50a323023529/cases Update the authentication method The new API uses Google Cloud IAM for authentication.
- Map the service account or workload identity to SOAR parameters If you are using a service account or workload identity federation to authenticate to the Chronicle API, you must authorize it within the platform to ensure it can successfully communicate with Google SecOps.
- Migration steps This section outlines the steps to successfully migrate your applications to Chronicle API: Review the documentation Familiarize yourself with the comprehensive documentation for the new API, including the Chronicle API reference guide.
- Migrate SOAR endpoints to Chronicle API Supported in: Google secops SOAR This document outlines the steps and considerations for migrating from the deprecated SOAR API surface to the unified Chronicle API.

### Data RBAC overview \_|\_ Google Security Operations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview](https://docs.cloud.google.com/chronicle/docs/administration/datarbac-overview)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Predefined scoped read-only access Chronicle API Restricted Data Access ( roles/chronicle.restrictedDataAccess ) and Chronicle API Restricted Data Access Viewer ( roles/chronicle.restrictedDataAccessViewer ) Chronicle API Restricted Data Access Viewer Custom scoped access Chronicle API Restricted Data Access ( roles/chronicle.restrictedDataAccess ) and custom role (for feature RBAC definition) Custom permissions within features Custom global access chronicle.globalDataAccessScopes.permit permission and Chronicle API Global Data Access ( roles/globalDataAccess ) Global permissions within features The following is a description of each access type presented in the table: Predefined global access: this access is typically required for users who need access to all the data.
- Difference between data RBAC and feature RBAC Data RBAC and feature RBAC are both methods for controlling access within a system, but they focus on different aspects.
- These permissions might be included if you've used the prebuilt Chronicle API Editor or Chronicle API Admin as a starting point for your custom roles.
- For example, a user might be allowed to access a specific feature (feature RBAC) and then, within that feature, their access to specific data might be restricted based on their role (data RBAC).

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-api-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- This also adds a new regional endpoint for Chronicle APIs at https://asia-northeast1-backstory.googleapis.com .
- Abnormal Security ( ABNORMAL SECURITY ) Active Countermeasures ( AI HUNTER ) AIX system ( AIX SYSTEM ) Apache ( APACHE ) Apache Cassandra ( CASSANDRA ) Aruba ( ARUBA WIRELESS ) Aruba EdgeConnect SD-WAN ( ARUBA EDGECONNECT SDWAN ) Auth0 ( AUTH ZERO ) AWS Aurora ( AWS AURORA ) AWS CloudFront ( AWS CLOUDFRONT ) AWS Cloudtrail ( AWS CLOUDTRAIL ) AWS CloudWatch ( AWS CLOUDWATCH ) AWS VPC Flow ( AWS VPC FLOW ) AWS WAF ( AWS WAF ) Azure AD ( AZURE AD ) Azure AD Directory Audit ( AZURE AD AUDIT ) Azure Front Door ( AZURE FRONT DOOR ) Azure SQL ( AZURE SQL ) BeyondTrust ( BOMGAR ) BeyondTrust BeyondInsight ( BEYONDTRUST BEYONDINSIGHT ) Blue Coat Proxy ( BLUECOAT WEBPROXY ) Broadcom Support Portal Audit Logs ( BROADCOM SUPPORT PORTAL ) Check Point Harmony ( CHECKPOINT HARMONY ) Chronicle SOAR Audit ( CHRONICLE SOAR AUDIT ) Cisco ASA ( CISCO ASA FIREWALL ) Cisco Email Security ( CISCO EMAIL SECURITY ) Cisco ISE ( CISCO ISE ) Cisco Meraki ( CISCO MERAKI ) Cisco Secure Access ( CISCO SECURE ACCESS ) Cisco Switch ( CISCO SWITCH ) Cisco Umbrella Audit ( CISCO UMBRELLA AUDIT ) Cisco Umbrella DNS ( UMBRELLA DNS ) Cisco WSA ( CISCO WSA ) Cloud DNS ( GCP DNS ) Cloud SQL ( GCP CLOUDSQL ) Cloudflare ( CLOUDFLARE ) Cloudflare Warp ( CLOUDFLARE WARP ) Code42 Incydr ( CODE42 INCYDR ) CrowdStrike Alerts API ( CS ALERTS ) CrowdStrike Falcon ( CS EDR ) CrowdStrike Falcon Stream ( CS STREAM ) CyberArk Privileged Access Manager (PAM) ( CYBERARK PAM ) Cybereason EDR ( CYBEREASON EDR ) CYJAX Threat Intelligence ( CYJAX THREAT INTELLIGENCE ) Cyware Threat Intelligence Exchange ( CTIX ) Databricks ( DATABRICKS ) Duo Auth ( DUO AUTH ) Elastic Defend ( ELASTIC DEFEND ) ESET AV ( ESET AV ) F5 ASM ( F5 ASM ) F5 BIGIP Access Policy Manager ( F5 BIGIP APM ) FireEye eMPS ( FIREEYE EMPS ) FireEye ETP ( FIREEYE ETP ) FireEye NX ( FIREEYE NX ) Forescout NAC ( FORESCOUT NAC ) ForgeRock Identity Cloud ( FORGEROCK IDENTITY CLOUD ) Fortinet FortiAnalyzer ( FORTINET FORTIANALYZER ) GitHub ( GITHUB ) Google Threat Intelligence IOC ( GTI IOC ) HP Aruba (ClearPass) ( CLEARPASS ) Huawei Switches ( HUAWEI SWITCH ) IBM DataPower Gateway ( IBM DATAPOWER ) IBM Safenet ( IBM SAFENET ) IBM Websphere Application Server ( IBM WEBSPHERE APP SERVER ) Imperva Advanced Bot Protection ( IMPERVA ABP ) Imperva SecureSphere Management ( IMPERVA SECURESPHERE ) Juniper ( JUNIPER FIREWALL ) Kolide Endpoint Security ( KOLIDE ) Kubernetes Audit ( KUBERNETES AUDIT ) Kubernetes Node ( KUBERNETES NODE ) Linux Auditing System (AuditD) ( AUDITD ) Maria Database ( MARIA DB ) McAfee ePolicy Orchestrator ( MCAFEE EPO ) McAfee Skyhigh CASB ( MCAFEE SKYHIGH CASB ) McAfee Web Gateway ( MCAFEE WEBPROXY ) Microsoft Azure Activity ( AZURE ACTIVITY ) Microsoft Defender For Cloud ( MICROSOFT DEFENDER CLOUD ALERTS ) Microsoft Graph API Alerts ( MICROSOFT GRAPH ALERT ) Microsoft IIS ( IIS ) Microsoft SQL Server ( MICROSOFT SQL ) Mimecast Mail V2 ( MIMECAST MAIL V2 ) Mobile Endpoint Security ( LOOKOUT MOBILE ENDPOINT SECURITY ) Mobileiron ( MOBILEIRON ) NetApp ONTAP ( NETAPP ONTAP ) Netskope V2 ( NETSKOPE ALERT V2 ) Netskope Web Proxy ( NETSKOPE WEBPROXY ) Obsidian ( OBSIDIAN ) Office 365 ( OFFICE 365 ) Oort Security Tool ( OORT ) Oracle ( ORACLE DB ) Orca Cloud Security Platform ( ORCA ) Palo Alto Cortex XDR Events ( PAN CORTEX XDR EVENTS ) Palo Alto Networks Firewall ( PAN FIREWALL ) Palo Alto Prisma Cloud Alert payload ( PAN PRISMA CA ) PostFix Mail ( POSTFIX MAIL ) Proofpoint On Demand ( PROOFPOINT ON DEMAND ) Proofpoint Tap Alerts ( PROOFPOINT MAIL ) Proofpoint Threat Response ( PROOFPOINT TRAP ) Radware Web Application Firewall ( RADWARE FIREWALL ) Red Hat OpenShift ( REDHAT OPENSHIFT ) Salesforce ( SALESFORCE ) SAP Change Document ( SAP CHANGE DOCUMENT ) SAP Gateway ( SAP GATEWAY ) SAP Hana Audit ( SAP HANA AUDIT ) SAP Security Audit ( SAP SECURITY AUDIT ) Security Command Center Posture Violation ( GCP SECURITYCENTER POSTURE VIOLATION ) Security Command Center Sensitive Data Risk ( GCP SECURITYCENTER SENSITIVE DATA RISK ) Security Command Center Threat ( GCP SECURITYCENTER THREAT ) Security Command Center Toxic Combination ( GCP SECURITYCENTER TOXIC COMBINATION ) Snyk Group level audit Logs ( SNYK SDLC ) Suricata EVE ( SURICATA EVE ) Symantec EDR ( SYMANTEC EDR ) Sysdig ( SYSDIG ) Tenable Active Directory Security ( TENABLE ADS ) ThreatConnect IOC V3 ( THREATCONNECT IOC V3 ) Trellix HX Alerts ( TRELLIX HX ALERTS ) Trellix HX Audit Events ( TRELLIX HX AUDIT ) Trellix HX Event Streamer ( TRELLIX HX ES ) Trellix HX Hosts ( TRELLIX HX HOSTS ) Trend Micro Vision One Endpoint Vulnerabilities ( TRENDMICRO VISION ONE ENDPOINT VULNERABILITIES ) Trend Micro Vision One Observerd Attack Techniques ( TRENDMICRO VISION ONE OBSERVERD ATTACK TECHNIQUES ) Trend Micro Vision One Workbench ( TRENDMICRO VISION ONE WORKBENCH ) TrendMicro Apex Central ( TRENDMICRO APEX CENTRAL ) TXOne Stellar ( TRENDMICRO STELLAR ) Ubika Waf ( UBIKA WAF ) Unix system ( NIX SYSTEM ) Varonis ( VARONIS ) Vmware Avinetworks iWAF ( VMWARE AVINETWORKS IWAF ) VMware ESXi ( VMWARE ESX ) VMware Horizon ( VMWARE HORIZON ) Wallix Bastion ( WALLIX BASTION ) Windows DNS ( WINDOWS DNS ) Windows Event ( WINEVTLOG ) Windows Event (XML) ( WINEVTLOG XML ) wiz.io ( WIZ IO ) Zeek JSON ( BRO JSON ) Zscaler ( ZSCALER WEBPROXY ) The following log types were added without a default parser.
- 1Password ( ONEPASSWORD ) Apache ( APACHE ) Arcsight CEF ( ARCSIGHT CEF ) Aruba Switch ( ARUBA SWITCH ) AWS Cloudtrail ( AWS CLOUDTRAIL ) AWS CloudWatch ( AWS CLOUDWATCH ) AWS GuardDuty ( GUARDDUTY ) AWS Lambda Function ( AWS LAMBDA FUNCTION ) AWS S3 Server Access ( AWS S3 SERVER ACCESS ) AWS VPC Flow ( AWS VPC FLOW ) AWS VPC Flow (CSV) ( AWS VPC FLOW CSV ) Azure AD ( AZURE AD ) Azure Application Gateway ( AZURE GATEWAY ) Azure Firewall ( AZURE FIREWALL ) Azure Storage Audit ( AZURE STORAGE AUDIT ) Azure VNET Flow ( AZURE VNET FLOW ) BIND ( BIND DNS ) Blue Coat Proxy ( BLUECOAT WEBPROXY ) Brocade Switch ( BROCADE SWITCH ) Carbon Black ( CB EDR ) Carbon Black App Control ( CB APP CONTROL ) Check Point ( CHECKPOINT FIREWALL ) Chronicle SOAR Audit ( CHRONICLE SOAR AUDIT ) Cisco Application Centric Infrastructure ( CISCO ACI ) Cisco ASA ( CISCO ASA FIREWALL ) Cisco Email Security ( CISCO EMAIL SECURITY ) Cisco Firepower NGFW ( CISCO FIREPOWER FIREWALL ) Cisco Internetwork Operating System ( CISCO IOS ) Cisco IronPort ( CISCO IRONPORT ) Cisco ISE ( CISCO ISE ) Cisco NX-OS ( CISCO NX OS ) Cisco Router ( CISCO ROUTER ) Cisco Umbrella Web Proxy ( UMBRELLA WEBPROXY ) Cisco vManage SD-WAN ( CISCO SDWAN ) Citrix Netscaler ( CITRIX NETSCALER ) Claroty Continuous Threat Detection ( CLAROTY CTD ) Cloudflare ( CLOUDFLARE ) CrowdStrike Detection Monitoring ( CS DETECTS ) CrowdStrike Falcon ( CS EDR ) Crowdstrike IOC ( CROWDSTRIKE IOC ) Custom Security Data Analytics ( CUSTOM SECURITY DATA ANALYTICS ) CyberArk Endpoint Privilege Manager (EPM) ( CYBERARK EPM ) Cyberark Privilege Cloud ( CYBERARK PRIVILEGE CLOUD ) Darktrace ( DARKTRACE ) Datadog ( DATADOG ) Dell Switch ( DELL SWITCH ) Elastic Defend ( ELASTIC DEFEND ) ESET AV ( ESET AV ) ExtraHop RevealX ( EXTRAHOP ) F5 Advanced Firewall Management ( F5 AFM ) F5 ASM ( F5 ASM ) FireEye ETP ( FIREEYE ETP ) FireEye NX ( FIREEYE NX ) FortiGate ( FORTINET FIREWALL ) Fortinet FortiAnalyzer ( FORTINET FORTIANALYZER ) Fortinet Web Application Firewall ( FORTINET FORTIWEB ) GitHub ( GITHUB ) Guardicore Centra ( GUARDICORE CENTRA ) H3C Comware Platform Switch ( H3C SWITCH ) IBM Cloud Activity Tracker ( IBM CLOUD ACTIVITY TRACKER ) IBM Security Verify Access ( IBM SVA ) IBM zSecure Alert ( IBM ZSECURE ALERT ) Imperva ( IMPERVA WAF ) Infoblox ( INFOBLOX ) Infoblox DHCP ( INFOBLOX DHCP ) KnowBe4 PhishER ( KNOWBE4 PHISHER ) LastPass Password Management ( LASTPASS ) Linux Auditing System (AuditD) ( AUDITD ) Microsoft AD ( WINDOWS AD ) Microsoft AD FS ( ADFS ) Microsoft Azure Activity ( AZURE ACTIVITY ) Microsoft Defender for Endpoint ( MICROSOFT DEFENDER ENDPOINT ) Microsoft Graph API Alerts ( MICROSOFT GRAPH ALERT ) Microsoft IIS ( IIS ) Netskope V2 ( NETSKOPE ALERT V2 ) NGINX ( NGINX ) Nozomi Networks Scada Guardian ( NOZOMI GUARDIAN ) Office 365 ( OFFICE 365 ) Okta ( OKTA ) Openpath ( OPENPATH ) Opnsense ( OPNSENSE ) Palo Alto Cortex XDR Alerts ( CORTEX XDR ) Palo Alto Cortex XDR Events ( PAN CORTEX XDR EVENTS ) Palo Alto Networks Firewall ( PAN FIREWALL ) Palo Alto Panorama ( PAN PANORAMA ) Palo Alto Prisma Access ( PAN CASB ) Ping Federate ( PING FEDERATE ) Ping Identity ( PING ) PostgreSQL ( POSTGRESQL ) Proofpoint Tap Alerts ( PROOFPOINT MAIL ) Proofpoint Threat Response ( PROOFPOINT TRAP ) Radware Web Application Firewall ( RADWARE FIREWALL ) Red Hat OpenShift ( REDHAT OPENSHIFT ) Remediant SecureONE ( REMEDIANT SECUREONE ) Riverbed Steelhead ( STEELHEAD ) SailPoint IAM ( SAILPOINT IAM ) Security Command Center Posture Violation ( GCP SECURITYCENTER POSTURE VIOLATION ) Security Command Center Threat ( N/A ) Security Command Center Toxic Combination ( GCP SECURITYCENTER TOXIC COMBINATION ) Symantec DLP ( SYMANTEC DLP ) Sysdig ( SYSDIG ) Teradata DB ( TERADATA DB ) Terraform Enterprise Audit ( TERRAFORM ENTERPRISE ) Trend Micro Vision One ( TRENDMICRO VISION ONE ) Tripwire ( TRIPWIRE FIM ) Vectra Detect ( VECTRA DETECT ) Vectra Stream ( VECTRA STREAM ) Versa Firewall ( VERSA FIREWALL ) VMware AirWatch ( AIRWATCH ) VMware ESXi ( VMWARE ESX ) Voltage ( VOLTAGE ) WatchGuard ( WATCHGUARD ) Windows DHCP ( WINDOWS DHCP ) Windows Event ( WINEVTLOG ) Windows Event (XML) ( WINEVTLOG XML ) Windows Hyper-V ( WINDOWS HYPERV ) wiz.io ( WIZ IO ) Workday ( WORKDAY ) Workspace Activities ( WORKSPACE ACTIVITY ) Zscaler ( ZSCALER WEBPROXY ) Zscaler CASB ( ZSCALER CASB ) ZScaler Deception ( ZSCALER DECEPTION ) Zscaler DLP ( ZSCALER DLP ) Zscaler Tunnel ( ZSCALER TUNNEL ) The following log types were added without a default parser.
- Adaxes ( ADAXES ) Air Table ( AIR TABLE ) Alert Enterprise Guardian ( ALERT GUARDIAN ) Amavis ( AMAVIS ) Atlassian Beacon ( ATLASSIAN BEACON ) Banner dd ( BANNER DD ) BetterStack Uptime ( BETTERSTACK UPTIME ) BloodHound ( BLOODHOUND ) Core Privileged Access Manager (BoKS) ( BOKS ) Cisco Secure Access ( CISCO SECURE ACCESS ) Cleafy ( CLEAFY ) Clear Bank Portal Audit ( CLEARBANK PORTAL ) CloudBees ( CLOUDBEES ) Comforte SecurDPS ( COMFORTE SECURDPS ) Control Plane ( CONTROL PLANE ) Corrata ( CORRATA ) Cubist Audit ( CUBIST AUDIT ) C Zentrix ( C ZENTRIX ) DefectDojo ( DEFECTDOJO ) Dmarcian ( DMARCIAN ) DocuSign ( DOCUSIGN ) Duo Activity Logs ( DUO ACTIVITY ) E2 Guardian ( E2 GUARDIAN ) Egress Defend ( EGRESS DEFEND ) Egress Prevent ( EGRESS PREVENT ) Emsisoft AntiVirus ( EMSISOFT ANTIVIRUS ) F5 System Logs ( F5 SYSTEM LOGS ) Fastly CDN ( FASTLY CDN ) FireEye CMS ( FIREEYE CMS ) Forcepoint Mail Relay ( FORCEPOINT MAIL RELAY ) Google Ads ( GOOGLE ADS ) H3C Comware Platform Switch Halcyon Anti Ransomware ( HALCYON ) Halo ( HALO ) HP Poly ( HP POLY ) Huawei CloudEngine ( HUAWEI CLOUDENGINE ) Intruder.IO ( INTRUDER IO ) Ivanti Connect Secure ( IVANTI CONNECT SECURE ) Keyfactor ( KEYFACTOR ) Kyverno ( KYVERNO ) LaunchDarkly ( LAUNCH DARKLY ) LeanIX Enterprise ( LEANIX ) Leanix CMDB ( LEANIX CMDB ) Lucid ( LUCID ) Lumeta Spectre ( LUMETA ) ManageEngine Asset Explorer ( MANAGE ENGINE ASSET EXPLR ) ManageEngine Endpoint Central ( MANAGE ENGINE ENDPT CNTRL ) Mandiant Digital Threat Monitoring ( MANDIANT DTM ALERTS ) Manhattan Warehouse Management System ( MANHATTAN WMS ) Mend IO ( MEND IO ) Meta Marketing ( META MARKETING ) Miasma SecretScanner ( MIASMA SECRETSCANNER ) Microsoft Ads ( MICROSOFT ADS ) Microsoft Purview ( MICROSOFT PURVIEW ) ModSecurity ( MODSECURITY ) Netapp Storagegrid ( NETAPP STORAGEGRID ) NetBrain ( NETBRAIN ) Netenrich Entity Context ( NETENRICH ENTITY CONTEXT ) Netwrix Activity Monitor ( NETWRIX ACTIVITY MONITOR ) Netwrix Stealth Intercept ( NETWRIX STEALTH INTERCEPT ) Netwrix Threat Manager ( NETWRIX THREAT MANAGER ) Nexus Sonatype ( NEXUS SONATYPE ) Oracle Fusion ( ORACLE FUSION ) PAGELY ( PAGELY ) Palantir ( PALANTIR ) Proofpoint Meta ( PROOFPOINT META ) Qumulo FS ( QUMULO FS ) Radware Alteon ( RADWARE ALTEON ) SailPoint IdentityIQ ( SAILPOINT IIQ ) Sentinelone Activity ( SENTINELONE ACTIVITY ) Siga Level Zero OT Resilience ( SIGA ) Site24x7 ( SITE24X7 ) Winevtlog Snare ( SNARE WINEVTLOG ) Solar System ( SOLAR SYSTEM ) Stealthbits DLP ( STEALTHBITS DLP ) Symantec VIP Authentication Hub ( SYMANTEC VIP AUTHHUB ) Temenos Journey Manager System Event Publisher ( TEMENOS MANAGER SYSTEMEVENT ) Teradata Aster ( TERADATA ASTER ) Tiktok for Developers ( TIKTOK ) Transmit BindID ( TRANSMIT BINDID ) Trend Micro Vision One Audit ( TRENDMICRO VISION ONE AUDIT ) Trend Micro Vision One Observerd Attack Techniques ( TRENDMICRO VISION ONE OBSERVERD ATTACK TECHNIQUES ) Trend Micro Vision One Workbench ( TRENDMICRO VISION ONE WORKBENCH ) TrueNAS ( TRUENAS ) E-Motional Transparent Screen Lock TSL RFID ( TSL PRO ) UPX AntiDDoS ( UPX ANTIDDOS ) Verba Recording System ( VERBA REC ) Vercara ( VERCARA ) Veza Access Control Platform ( VEZA ) Web Methods Api Gateway ( WEBMETHODS API GATEWAY ) For a list of supported log types and details about default parser changes, see Supported log types and default parsers .

