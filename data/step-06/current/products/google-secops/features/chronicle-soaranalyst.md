---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:24:01.901Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "chronicle.soarAnalyst"
feature_slug: "chronicle-soaranalyst"
latest_feature_date: "2026-03-02"
deprecation_date: "2026-03-02"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp"
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/soar/release-notes"
keywords:
  - "chronicle"
  - "soaranalyst"
  - "this"
  - "iam"
  - "role"
  - "for"
  - "soar"
  - "analysts"
---

# chronicle.soarAnalyst

Product: Google SecOps
Coverage: LOW

## Step 02 Summary

This Cloud IAM role for SOAR analysts is being deprecated; deprecated on 2026-03-02.

## Extended Definition

This Cloud IAM role for SOAR analysts is being deprecated; deprecated on 2026-03-02.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp)
- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/soar/release-notes](https://docs.cloud.google.com/chronicle/docs/soar/release-notes)

## Supporting Pages

### "SOAR migration overview \_|\_ Google Security Operations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp](https://docs.cloud.google.com/chronicle/docs/soar/admin-tasks/advanced/migrate-to-gcp)
- Source ID: `site-api-reference`
- Final score: 168
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Assign the following predefined IAM roles in Google Cloud to the onboarding SME: Chronicle API Admin Chronicle Service Admin Chronicle SOAR Admin Project IAM Admin Service Usage Admin Assign one of the following predefined IAM roles to all existing SOAR users: Chronicle API Admin Chronicle API Editor Chronicle API Viewer Chronicle API Limited Viewer Complete the authentication setup in SOAR by mapping each user (including administrators) to an email user group .
- Chronicle API Admin Chronicle Service Admin Chronicle SOAR Admin Project IAM Admin Service Usage Admin Assign one of the following roles in IAM to all existing SOAR users: Chronicle API Admin Chronicle API Editor Chronicle API Viewer Chronicle API Limited Viewer Complete the authentication setup in SOAR by mapping all the IdP groups that need access to SOAR .
- If you have granted the Service Account Token Creator IAM role to the python service account gke-init-python@soar-yyyyyy.iam.gserviceaccount.com , you must grant the same Service Account Token Creator IAM role to the new Python service account soar-python@yyyyyyyyyyy-tp.iam.gserviceaccount.com after the migration.
- What's Next SOAR migration pre-validation guide Migrate a SOAR standalone instance of an MSSP Migrate SOAR endpoints to the Chronicle API Migrate remote agents Migrate SOAR permissions to Google Cloud IAM Frequently asked questions Need more help?

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- March 02, 2026 Deprecated Chronicle.soarAnalyst , chronicle.soarViewer , chronicle.soarEngineer roles in Cloud IAM are being deprecated and will be fully removed in six months.
- 1Password ( ONEPASSWORD ) Apache ( APACHE ) Arcsight CEF ( ARCSIGHT CEF ) Aruba Switch ( ARUBA SWITCH ) AWS Cloudtrail ( AWS CLOUDTRAIL ) AWS CloudWatch ( AWS CLOUDWATCH ) AWS GuardDuty ( GUARDDUTY ) AWS Lambda Function ( AWS LAMBDA FUNCTION ) AWS S3 Server Access ( AWS S3 SERVER ACCESS ) AWS VPC Flow ( AWS VPC FLOW ) AWS VPC Flow (CSV) ( AWS VPC FLOW CSV ) Azure AD ( AZURE AD ) Azure Application Gateway ( AZURE GATEWAY ) Azure Firewall ( AZURE FIREWALL ) Azure Storage Audit ( AZURE STORAGE AUDIT ) Azure VNET Flow ( AZURE VNET FLOW ) BIND ( BIND DNS ) Blue Coat Proxy ( BLUECOAT WEBPROXY ) Brocade Switch ( BROCADE SWITCH ) Carbon Black ( CB EDR ) Carbon Black App Control ( CB APP CONTROL ) Check Point ( CHECKPOINT FIREWALL ) Chronicle SOAR Audit ( CHRONICLE SOAR AUDIT ) Cisco Application Centric Infrastructure ( CISCO ACI ) Cisco ASA ( CISCO ASA FIREWALL ) Cisco Email Security ( CISCO EMAIL SECURITY ) Cisco Firepower NGFW ( CISCO FIREPOWER FIREWALL ) Cisco Internetwork Operating System ( CISCO IOS ) Cisco IronPort ( CISCO IRONPORT ) Cisco ISE ( CISCO ISE ) Cisco NX-OS ( CISCO NX OS ) Cisco Router ( CISCO ROUTER ) Cisco Umbrella Web Proxy ( UMBRELLA WEBPROXY ) Cisco vManage SD-WAN ( CISCO SDWAN ) Citrix Netscaler ( CITRIX NETSCALER ) Claroty Continuous Threat Detection ( CLAROTY CTD ) Cloudflare ( CLOUDFLARE ) CrowdStrike Detection Monitoring ( CS DETECTS ) CrowdStrike Falcon ( CS EDR ) Crowdstrike IOC ( CROWDSTRIKE IOC ) Custom Security Data Analytics ( CUSTOM SECURITY DATA ANALYTICS ) CyberArk Endpoint Privilege Manager (EPM) ( CYBERARK EPM ) Cyberark Privilege Cloud ( CYBERARK PRIVILEGE CLOUD ) Darktrace ( DARKTRACE ) Datadog ( DATADOG ) Dell Switch ( DELL SWITCH ) Elastic Defend ( ELASTIC DEFEND ) ESET AV ( ESET AV ) ExtraHop RevealX ( EXTRAHOP ) F5 Advanced Firewall Management ( F5 AFM ) F5 ASM ( F5 ASM ) FireEye ETP ( FIREEYE ETP ) FireEye NX ( FIREEYE NX ) FortiGate ( FORTINET FIREWALL ) Fortinet FortiAnalyzer ( FORTINET FORTIANALYZER ) Fortinet Web Application Firewall ( FORTINET FORTIWEB ) GitHub ( GITHUB ) Guardicore Centra ( GUARDICORE CENTRA ) H3C Comware Platform Switch ( H3C SWITCH ) IBM Cloud Activity Tracker ( IBM CLOUD ACTIVITY TRACKER ) IBM Security Verify Access ( IBM SVA ) IBM zSecure Alert ( IBM ZSECURE ALERT ) Imperva ( IMPERVA WAF ) Infoblox ( INFOBLOX ) Infoblox DHCP ( INFOBLOX DHCP ) KnowBe4 PhishER ( KNOWBE4 PHISHER ) LastPass Password Management ( LASTPASS ) Linux Auditing System (AuditD) ( AUDITD ) Microsoft AD ( WINDOWS AD ) Microsoft AD FS ( ADFS ) Microsoft Azure Activity ( AZURE ACTIVITY ) Microsoft Defender for Endpoint ( MICROSOFT DEFENDER ENDPOINT ) Microsoft Graph API Alerts ( MICROSOFT GRAPH ALERT ) Microsoft IIS ( IIS ) Netskope V2 ( NETSKOPE ALERT V2 ) NGINX ( NGINX ) Nozomi Networks Scada Guardian ( NOZOMI GUARDIAN ) Office 365 ( OFFICE 365 ) Okta ( OKTA ) Openpath ( OPENPATH ) Opnsense ( OPNSENSE ) Palo Alto Cortex XDR Alerts ( CORTEX XDR ) Palo Alto Cortex XDR Events ( PAN CORTEX XDR EVENTS ) Palo Alto Networks Firewall ( PAN FIREWALL ) Palo Alto Panorama ( PAN PANORAMA ) Palo Alto Prisma Access ( PAN CASB ) Ping Federate ( PING FEDERATE ) Ping Identity ( PING ) PostgreSQL ( POSTGRESQL ) Proofpoint Tap Alerts ( PROOFPOINT MAIL ) Proofpoint Threat Response ( PROOFPOINT TRAP ) Radware Web Application Firewall ( RADWARE FIREWALL ) Red Hat OpenShift ( REDHAT OPENSHIFT ) Remediant SecureONE ( REMEDIANT SECUREONE ) Riverbed Steelhead ( STEELHEAD ) SailPoint IAM ( SAILPOINT IAM ) Security Command Center Posture Violation ( GCP SECURITYCENTER POSTURE VIOLATION ) Security Command Center Threat ( N/A ) Security Command Center Toxic Combination ( GCP SECURITYCENTER TOXIC COMBINATION ) Symantec DLP ( SYMANTEC DLP ) Sysdig ( SYSDIG ) Teradata DB ( TERADATA DB ) Terraform Enterprise Audit ( TERRAFORM ENTERPRISE ) Trend Micro Vision One ( TRENDMICRO VISION ONE ) Tripwire ( TRIPWIRE FIM ) Vectra Detect ( VECTRA DETECT ) Vectra Stream ( VECTRA STREAM ) Versa Firewall ( VERSA FIREWALL ) VMware AirWatch ( AIRWATCH ) VMware ESXi ( VMWARE ESX ) Voltage ( VOLTAGE ) WatchGuard ( WATCHGUARD ) Windows DHCP ( WINDOWS DHCP ) Windows Event ( WINEVTLOG ) Windows Event (XML) ( WINEVTLOG XML ) Windows Hyper-V ( WINDOWS HYPERV ) wiz.io ( WIZ IO ) Workday ( WORKDAY ) Workspace Activities ( WORKSPACE ACTIVITY ) Zscaler ( ZSCALER WEBPROXY ) Zscaler CASB ( ZSCALER CASB ) ZScaler Deception ( ZSCALER DECEPTION ) Zscaler DLP ( ZSCALER DLP ) Zscaler Tunnel ( ZSCALER TUNNEL ) The following log types were added without a default parser.
- Feature Updated permissions for accessing product-centric feeds If you have assigned Custom IAM Roles , you can now grant access to the product-centric feeds by adding the following permissions to the role: chronicle.feedPacks.get chronicle.feedPacks.list To learn more about how to configure feeds using the product-centric feeds UI, see Configure feeds by product.
- This enables administrators to manage feature access control for Google SecOps including SOAR by leveraging Google Cloud IAM instead of managing it separately for SIEM and SOAR.

### Google Security Operations SOAR release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/release-notes](https://docs.cloud.google.com/chronicle/docs/soar/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- It is now possible to configure alerts to be dropped if the source environment doesn't exist. (ID #00180834) July 12, 2023 Fixed Release Notes 6.2.30: Playbooks not always saved correctly within Platform (ID #00243484) amic include /release-notes/ chronicle-soar %} Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Fixed Error when trying to log in again to Chronicle SOAR (ID #46831483) Email HTML template shows blank page in Settings (ID #46912863) Users filter in the Search page not displaying all the users (ID #00249930) Active Directory Groups field removed from Settings Permission groups as it is not supported October 24, 2023 Feature Remote Agents 1.4.4 Added support for all SDK calls over remote agents Improved managing integrations over the remote agent leading to a more overall stable product experience Publisher Python version upgraded to Python 3.11 Fixed Remote Agents 1.4.4 Remote agent actions do not return script results in the same way local actions return them (ID #45682680) Users unable to change the remote agent environment via agent CLI October 03, 2023 Fixed Release 6.2.36 GA - 14th October, 2023 Internal security fixes September 27, 2023 Feature Release Notes 6.2.35 GA - 8th October Risk Score and Severity added Two new information fields have been added to the Alert Details widget which appears in the Alert overview tab.
- This release contains the following changes: Feature Structured SOAR Python integration logs Python integration logging has been upgraded to a structured format to eliminate visibility gaps and ensure comprehensive diagnostic coverage in Google Cloud.
- Fixed Unable to edit case comments via API (ID #49966652) Fixed Google SecOps SOAR fails to return API keys (ID #50630848) Fixed Event details search option in alert tab stops working (ID #00287518) Fixed Error when trying to add a user to Google SecOps SOAR Fixed Unable to re-run the playbooks (ID #00282282) Fixed SOAR filtering not working due to unsupported commas in names Fixed Unable to create or import advanced reports for certain Looker users (ID #00265303) May 17, 2024 Announcement Release 6.3.2 is now in General Availability.

