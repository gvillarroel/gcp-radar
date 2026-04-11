---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:24:01.954Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "Quick actions"
feature_slug: "quick-actions"
latest_feature_date: "2025-04-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/soar/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
keywords:
  - "quick"
  - "actions"
  - "administrators"
  - "can"
  - "predefine"
  - "that"
  - "analysts"
  - "run"
---

# Quick actions

Product: Google SecOps
Coverage: LOW

## Step 02 Summary

Administrators can predefine actions that analysts run directly from cases and alerts.

## Extended Definition

Administrators can predefine actions that analysts run directly from cases and alerts.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/soar/release-notes](https://docs.cloud.google.com/chronicle/docs/soar/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)

## Supporting Pages

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- April 06, 2025 Feature Create a quick action (Preview) Administrators can now predefine quick actions for analysts to execute directly within cases and alerts.
- An improved integration for Chrome Enterprise Premium is now available that includes: Streamlined connection to Google SecOps, using recommended security defaults Enhanced log events with Google Safe Browsing context Updated parser and integration documentation: Collect Google Chrome logs Curated dashboards for Chrome Enterprise Premium Google Workspace SOAR actions to manage Chrome extension blocklist policies ( Block Extension and Delete Extension ) October 28, 2025 Feature Risk-based alerting with entity-only rules With the new ENTITY RISK CHANGE UDM event type, you can now write YARA-L detection rules that trigger independently of ingested events.
- June 24, 2024 Change During the Google Security Operations onboarding steps, you can now specify identity provider groups that include administrators who configure user access to SOAR-related features.
- February 22, 2025 Feature New Custom fields for case management Added support for custom fields that analysts can fill out when working with cases or alerts, such as report time or false positives .

### Google Security Operations SOAR release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/release-notes](https://docs.cloud.google.com/chronicle/docs/soar/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- April 05, 2025 Feature Create a quick action (Preview) Administrators can now predefine quick actions for analysts to execute directly within cases and alerts.
- Fixed User mentioned in case not receiving an email notification (ID #00274991) Fixed Widgets not fully aligned on Case view page (ID #49711925) Fixed Number increased for integer type integration parameters (ID #00287205) Fixed Wrong error message displays when you to try add a custom list with a name that already exists (ID #50610331) Fixed Issues when Siemplify > Set Case SLA actions run at the exact same time (ID #49397338) May 02, 2024 Feature Jobs can now be run remotely over remote agents.
- New API for Logs: Admin users can now retrieve raw python logs directly from the platform using the following API: POST/api/external/v1/logging/python Fixed Release Notes 6.2.31 Importing a custom integration on top of an existing commercial integration causes the connector to not work properly (ID #00243798) Specific Integration showing incorrect update available (ID #00181718) SDK call siemplify.current alert.creation time returns 0 (ID #00226591) In rare situations, unable to access several cases via the Platform or via API (ID #00243878) When changing the Case Stage under the Cases tab, the drop down list of stages does not follow the same numerical order as defined in the Settings (ID #44453181) Entities that should be internal are created as external if ingested using the environment alias (ID #00225318) In certain situations, alerts are ingested into the platform for environments that don't exist yet in the platform and as soon as the environments are created - the cases are opened and playbooks run.
- As part of the fix, large parameter values will show as truncated on the platform but will not change the actual value sent to the playbook. (ID #49774296) Fixed Missing audit log entries when deleting permission groups (ID #51496411) Fixed Playbook simulator sometimes not executing actions in the correct order (ID #48264534) Fixed The platform does not show the correct error when trying to save a playbook which is open in another tab. (ID #00269661) Fixed Can't remove the remote agent after host/container has stopped (ID #49024310) Fixed List and multi-select parameters not appearing correctly in the IDE (ID # 51995565) July 29, 2024 Announcement Release 6.3.12 is now in General Availability.

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- An improved integration for Chrome Enterprise Premium is now available that includes: Streamlined connection to Google SecOps, using recommended security defaults Enhanced log events with Google Safe Browsing context Updated parser and integration documentation: Collect Google Chrome logs Curated dashboards for Chrome Enterprise Premium Google Workspace SOAR actions to manage Chrome extension blocklist policies ( Block Extension and Delete Extension ) October 28, 2025 Feature Risk-based alerting with entity-only rules With the new ENTITY RISK CHANGE UDM event type, you can now write YARA-L detection rules that trigger independently of ingested events.
- June 24, 2024 Change During the Google Security Operations onboarding steps, you can now specify identity provider groups that include administrators who configure user access to SOAR-related features.
- Service Disruption: detects destructive or disruptive actions that, if performed in a functioning production environment, may cause a significant outage.
- A10 Load Balancer ( A10 LOAD BALANCER ) Anomali ( ANOMALI IOC ) Apache ( APACHE ) Arcsight CEF ( ARCSIGHT CEF ) AWS CloudWatch ( AWS CLOUDWATCH ) AWS EC2 Hosts ( AWS EC2 HOSTS ) AWS EC2 Instances ( AWS EC2 INSTANCES ) AWS EC2 VPCs ( AWS EC2 VPCS ) Azure AD ( AZURE AD ) Azure AD Directory Audit ( AZURE AD AUDIT ) Azure DevOps Audit ( AZURE DEVOPS ) Azure Firewall ( AZURE FIREWALL ) BIND ( BIND DNS ) BloxOne Threat Defense ( BLOXONE ) Blue Coat Proxy ( BLUECOAT WEBPROXY ) Carbon Black ( CB EDR ) Cato Networks ( CATO NETWORKS ) CENSYS ( CENSYS ) Check Point ( CHECKPOINT FIREWALL ) Chrome Management ( N/A ) Cisco IronPort ( CISCO IRONPORT ) Cisco Meraki ( CISCO MERAKI ) Cisco Prime ( CISCO PRIME ) Cisco Secure Workload ( CISCO SECURE WORKLOAD ) Citrix Netscaler ( CITRIX NETSCALER ) Cloud Audit Logs ( N/A ) Cloud Load Balancing ( GCP LOADBALANCING ) Cloud Run ( GCP RUN ) Cloudflare ( CLOUDFLARE ) CommVault Commcell ( COMMVAULT COMMCELL ) Compute Context ( N/A ) Corelight ( CORELIGHT ) CrowdStrike Detection Monitoring ( CS DETECTS ) CSV Custom IOC ( CSV CUSTOM IOC ) Cybereason EDR ( CYBEREASON EDR ) Dataminr Alerts ( DATAMINR ALERT ) Elastic Windows Event Log Beats ( ELASTIC WINLOGBEAT ) F5 BIGIP LTM ( F5 BIGIP LTM ) FireEye ETP ( FIREEYE ETP ) Forescout NAC ( FORESCOUT NAC ) ForgeRock OpenAM ( OPENAM ) IBM WebSEAL ( IBM WEBSEAL ) Imperva ( IMPERVA WAF ) Imperva Database ( IMPERVA DB ) Infoblox RPZ ( INFOBLOX RPZ ) ISC DHCP ( ISC DHCP ) Juniper ( JUNIPER FIREWALL ) Linux Sysmon ( LINUX SYSMON ) LogonBox ( LOGONBOX ) ManageEngine ADAudit Plus ( ADAUDIT PLUS ) Micro Focus iManager ( MICROFOCUS IMANAGER ) Microsoft AD ( WINDOWS AD ) Microsoft ATA ( MICROSOFT ATA ) Microsoft Azure Activity ( AZURE ACTIVITY ) Microsoft Defender For Cloud ( MICROSOFT DEFENDER CLOUD ALERTS ) Microsoft Exchange ( EXCHANGE MAIL ) Microsoft IIS ( IIS ) Netskope ( NETSKOPE ALERT ) Netskope CASB ( NETSKOPE CASB ) Ntopng ( NTOPNG ) Office 365 ( OFFICE 365 ) OpenCanary ( OPENCANARY ) OpenSSH ( OPENSSH ) OSSEC ( OSSEC ) Palo Alto Cortex XDR Alerts ( CORTEX XDR ) Palo Alto Networks Firewall ( PAN FIREWALL ) Palo Alto Panorama ( PAN PANORAMA ) Quest Active Directory ( QUEST AD ) Recordia ( RECORDIA ) Sangfor Next Generation Firewall ( SANGFOR NGAF ) SAP SM20 ( SAP SM20 ) Security Command Center Threat ( N/A ) SEPPmail Secure Email ( SEPPMAIL ) ServiceNow CMDB ( SERVICENOW CMDB ) Snare System Diagnostic Logs ( SNARE SOLUTIONS ) Solaris system ( SOLARIS SYSTEM ) STIX Threat Intelligence ( STIX ) Symantec CloudSOC CASB ( SYMANTEC CASB ) Symantec Web Security Service ( SYMANTEC WSS ) Trend Micro Deep Security ( TRENDMICRO DEEP SECURITY ) Veritas NetBackup ( VERITAS NETBACKUP ) VMware ESXi ( VMWARE ESX ) Watchguard EDR ( WATCHGUARD EDR ) WindChill ( WINDCHILL ) Windows Defender AV ( WINDOWS DEFENDER AV ) Windows DNS ( WINDOWS DNS ) Windows Event ( WINEVTLOG ) Windows Event (XML) ( WINEVTLOG XML ) wiz.io ( WIZ IO ) Zeek JSON ( BRO JSON ) Zscaler ( ZSCALER WEBPROXY ) Zscaler CASB ( ZSCALER CASB ) Zscaler Internet Access Audit Logs ( ZSCALER INTERNET ACCESS ) Zscaler Private Access ( ZSCALER ZPA ) The following log types, without a default parser, were added.

