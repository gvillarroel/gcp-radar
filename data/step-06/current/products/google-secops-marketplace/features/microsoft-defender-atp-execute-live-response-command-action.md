---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:17.664Z"
product_name: "Google SecOps Marketplace"
product_slug: "google-secops-marketplace"
feature_name: "Microsoft Defender ATP Execute Live Response Command action"
feature_slug: "microsoft-defender-atp-execute-live-response-command-action"
latest_feature_date: "2026-01-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations"
  - "https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/automox"
keywords:
  - "microsoft"
  - "defender"
  - "atp"
  - "execute"
  - "live"
  - "response"
  - "command"
  - "action"
---

# Microsoft Defender ATP Execute Live Response Command action

Product: Google SecOps Marketplace
Coverage: MEDIUM

## Step 02 Summary

Adds an action that executes a live response command in Microsoft Defender ATP.

## Extended Definition

Adds an action that executes a live response command in Microsoft Defender ATP.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations)
- [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/automox](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/automox)

## Supporting Pages

### "Cloud Threats category overview \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category](https://docs.cloud.google.com/chronicle/docs/detection/cloud-threats-category)
- Source ID: `site-docs-reference`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- In the list of detections, check that the following rules were triggered: tst azure activity tst azure defender for cloud alerts Execute a GET API request in Microsoft Graph Explorer to trigger the test rules Perform the following steps to verify that generating sample security alerts in Azure triggers the test rules.
- The following rule sets create a detection when findings from Security Command Center Event Threat Detection , Google Cloud Armor , Security Command Center Sensitive Actions Service , and Custom modules for Event Threat Detection are identified: CDIR SCC Cloud IDS CDIR SCC Cloud Armor CDIR SCC Impact CDIR SCC Enhanced Persistence CDIR SCC Enhanced Defense Evasion CDIR SCC Custom Module Kubernetes Suspicious Tools rule set To use the Kubernetes Suspicious Tools rule set, we recommend that you collect the data listed in the All rule sets section.
- Azure Cloud Services ( AZURE ACTIVITY ) Microsoft Entra ID , previously Azure Active Directory ( AZURE AD ) Microsoft Entra ID audit logs , previously Azure AD audit logs ( AZURE AD AUDIT ) Microsoft Defender for Cloud ( MICROSOFT GRAPH ALERT ) Microsoft Graph API Activity ( MICROSOFT GRAPH ACTIVITY LOGS ) Ingest Azure and Microsoft Entra ID data You must ingest data from every data source to have maximum rule coverage.
- Curated detections for Office 365 data Office 365 rule sets in this category help identify threats in Office 365 environments using event and context data, and includes the following rule sets: Office 365 - Administrative : Detects malicious, suspicious and high-risk activities in Office 365, including backup policy changes, Microsoft Purview, and ATP detections.

### Google Security Operations response integrations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Active Directory Akamai Alexa AlgoSec AlienVault USM Anywhere AlienVault USM Appliance AlienVaultTI Amazon Macie Anomali Anomali Staxx Anomali ThreatStream Any.Run APIVoid AppSheet ArcSight ArcSight Logger Area1 Armis Atlassian Confluence Server Attivo Automox AWS Cloud Trail AWS CloudWatch AWS Elastic Compute Cloud (EC2) AWS GuardDuty AWS IAM Access Analyzer AWS Identity and Access Management (IAM) AWS S3 AWS Security Hub AWS WAF Axonius Azure Active Directory Azure API Azure Monitor BitSight BlueLiv BMC Helix Remedyforce BMC Remedy ITSM BulkWhoIs CA Service Desk Manager Carbon Black Defense Carbon Black Protection Carbon Black Response Check Point Cloud Guard Check Point Firewall Check Point SandBlast Check Point Threat Reputation Cisco AMP Cisco FirePower Management Center Cisco ISE Cisco Orbital Cisco Threat Grid CiscoUmbrella Cloudflare Cloud Logging Cofense Triage ConnectWise CrowdStrike Falcon CSV Cuckoo CyberArk PAM CyberArk Vault Cybereason Cyberint CyberX Cylance Cynet Darktrace DeepSight Devo Digital Shadows DomainTools DShield Easy Vista Elastica CloudSOC ElasticSearch ElasticSearchV7 Email EmailV2 Endgame Exabeam Advanced Analytics Exchange Exchange Extension Pack ExtraHop F5 Big IQ F5 BIG-IP Access Policy Manager F5 BIG-IP iControl API Falcon Sandbox FileOperation FireEye AX FireEye CM FireEye ETP FireEye EX FireEye Helix FireEye HX FireEye NX ForeScout CounterACT FortiAnalyzer Fortinet FortiSIEM Forti Manager FortiGate Freshworks Freshservice Gmail Google Alert Center Google BigQuery Google Chat Google Chronicle Google Cloud API Google Cloud Armor Google Cloud Asset Inventory Google Cloud Compute Google Cloud IAM Google Cloud Policy Intelligence Google Cloud Recommender Google Cloud Storage Google Forms Google Kubernetes Engine Google Rapid Response (GRR) Google Security Command Center Google Threat Intelligence Google Translate Google Workspace Harmony Mobile HashiCorp Vault HaveIBeenPwned HCL BigFix Inventory HTTP Rest API HTTP v2 Humio iBoss Illusive Networks Internet Storm Center Intezer IntSights IPInfo IPVoid IronPort IronScales Ivanti Endpoint Manager Jira JoeSandbox JuniperVSRX Lastline LogPoint LogRhythm MalShare Malware Domain List Mandiant Mandiant ASM Mandiant Digital Threat Monitoring Mandiant Managed Defense Mandiant Threat Intelligence McAfee NSM McAfee Active Response McAfee ATD McAfee EPO McAfee ESM McAfee Mvision EDR McAfee Mvision EPO McAfee TIEDXL McAfee Web Gateway Micro Focus ITSMA Microsoft 365 Identity Protection Microsoft Defender For Cloud Microsoft Defender For Endpoint Microsoft Defender For XDR Microsoft Graph Mail Microsoft Graph Mail Delegated Microsoft Graph Security Microsoft Intune Microsoft Sentinel Microsoft Teams Mimecast MISP MITRE ATT&CK MobileIron MongoDB MSSQL MySQL MX Toolbox NessusScanner Netskope Nmap Nozomi Networks O365 Management API ObserveIT Office 365 CloudApp Security Okta OpenSearch Opswat Metadefender Orca Security Outpost24 Palo Alto AutoFocus Palo Alto Cortex XDR Palo Alto Next Gen Firewall Palo Alto Panorama Palo Alto Networks Prisma Cloud PassiveTotal PhishingInitiative PhishRod Portnox PostgreSQL Proofpoint Cloud Threat Response Proofpoint PS Proofpoint TAP Proofpoint Threat Protection Protectwise Pub/Sub QRadar Qualys EDR Qualys VM Rapid7 InsightIDR Rapid7 InsightVm Recorded Future Redis Remote Agent Utilities Reversinglabs A1000 ReversingLabs Titanium RSA Archer RSA NetWitness RSA NetWitness EDR RSA NetWitness Platform Runners Salesforce SCCM ScreenshotMachine SentinelOne SentinelOneV2 Service Desk Plus Service Desk Plus V3 ServiceNow Shodan Siemplify Siemplify ThreatFuse SiemplifyUtilities Site24x7 Slack Snowflake Solar Winds Orion SonicWall-Beta Sophos Splash Splunk SpyCloud SSH SSL Labs Stealthwatch Stealthwatch V6.10 Stellar Cyber Starlight Sumologic Sumo Logic Cloud SIEM Symantec ATP Symantec Blue Coat ProxySG Symantec Content Analysis Symantec Email Security Cloud Symantec Endpoint Protection Symantec Endpoint Protection 12 Symantec Endpoint Security Complete Cloud Symantec ICDX SysAid Sysdig Secure Talos ThreatSource Tanium Tenable.io Tenable Security Center ThreatConnect ThreatCrowd ThreatExchange ThreatQ Tor Trend Micro Apex Central Trend Micro Cloud App Security Trend Micro DDAN Trend Micro Deep Security Trend Micro Vision One Trend Vision One TruSTAR Twilio UnshortenMe UrlScan.io URLVoid Varonis Data Security Platform Vectra Vertex AI VirusTotal VirusTotalV3 VMRay VMware Carbon Black Cloud VMware Carbon Black Endpoint Standard Live Response VMware Carbon Black Enterprise EDR VSphere Web Risk Websense WildFire Wiz WMI XForce Zabbix Zendesk ZeroFox Zoho Desk ZScaler Need more help?
- Google Security Operations response integrations Google SecOps lets you get the most out of the incorporated solutions by using integrations, investigating threats, and automating your SOC team's work.

### "Response integrations community contribution guidelines \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- Source ID: `site-docs-reference`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Actions Name The Name of the action should point to the activity that is being performed; for example, Get Case Details , List Entity Events , or Execute Search .
- You should validate the logo on the following pages: Response > Integration Setup Response > Playbooks > Playbook Designer Cases > Alert > Alert Playbook View The following is an example of an SVG logo, designed to match our style guide: <?xml version="1.0" encoding="UTF-8"?><svg id="Layer 1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 23"> <defs> <style> .cls-1 { stroke-width: 0px; } </style> </defs> <path class="cls-1" d="M15.51,4.79H5.49c-.4,0-.72.32-.72.72v5.75c0,2.3,1.71,4.15,3.69,5.38.54.34,1.1.62,1.66.86l.09.04c.06.02.12.05.18.06.03,0,.07,0,.1,0,.1,0,.19-.03.28-.07l.09-.04c.76-.33,2.22-1.03,3.46-2.24,1.24-1.22,1.89-2.6,1.89-4v-5.75c0-.4-.32-.72-.72-.72ZM14.32,11.26c0,.88-.44,1.77-1.32,2.63-.65.64-1.55,1.22-2.5,1.68-.95-.46-1.84-1.04-2.5-1.68-.88-.86-1.32-1.75-1.32-2.63v-4.55h7.64v4.55ZM20.28,0H.72c-.4,0-.72.32-.72.72v10.77c0,2.56,1.18,4.99,3.51,7.21,2.29,2.18,5.12,3.56,6.61,4.2l.09.04s.1.04.15.05c.04,0,.09.01.13.01.1,0,.19-.02.28-.06l.09-.04c.53-.23,1.23-.55,2.02-.97,1.42-.75,3.11-1.82,4.59-3.23,2.33-2.22,3.51-4.64,3.51-7.21V.72c0-.4-.32-.72-.72-.72ZM16.17,17.31c-1.9,1.81-4.24,3.04-5.67,3.69-1.43-.65-3.77-1.88-5.67-3.69-1.94-1.84-2.92-3.8-2.92-5.82V1.92h17.18v9.57c0,2.02-.98,3.98-2.92,5.82Z"/></svg> Be sure to encode the SVG before adding it to the integration definition file, as can be found in other integrations in the Content Hub.
- Release notes The general structure for the release note should follow the following format: {integration item} - {update} For example: Get Case Details - Added ability to fetch information about affected IOCs Depending on the situation, there are unique release notes for specific scenarios: If it's a new integration: New Integration Added - {integration name} If a new action is added: New Action Added - {action name} If a new connector is added: New Connector Added - {connector name} If a new job is added: New Job Added - {job name} If a predefined widget is added to an action: {action name} - Added Predefined Widget.
- For example, the following JSON object represents a poor structure as it would be unusable inside playbooks: { "10.10.10.10": { "is malicious": "false" } } Instead, format it like this: [ { "is malicious": "false", "ip": "10.10.10.10" } ] If you're using entities inside the action and return results Per Entity, then the best practice is to structure the JSON Result like this: [ { "Entity": "10.10.10.10", "EntityResult": { "is malicious": "false", } } ] Always consider how the output of the action can be used inside automation.

### "Integrate Automox with Google SecOps \_|\_ Google Security Operations \_\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/automox](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/automox)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Run on This action runs on the following entities: IP Address Hostname Action Results Script Result Script result name Value options Example is success True/False is success=False JSON Result { "id" : 8527028217 , "server id" : 2263017 , "command id" : 164850699 , "organization id" : 104513 , "args" : "ASD" , "reboot" : 0 , "exec time" : "2022-10-25T08:02:43+0000" , "response" : [ "0" , "Installing MS updates: ASD\\r\\nCouldn't find update for ASD, skipping.\\r\\nNothing left to do" , null ], "response time" : "2022-10-25T08:22:14+0000" , "policy id" : null , "agent command type" : 0 , "command type name" : "InstallUpdate" } { "reason" : "Device is offline.
- Please check the connectivity." } Case Wall Result Type Value / Description Type Output message The action should not fail nor stop a playbook execution: If the device is found and it's connected (is success=true): "Successfully executed command "{Command}" on the following entities in Automox: {entity.identifier}.
- Please check the JSON result to be sure that the command executed correctly." If the device is not found or it's connected for one entity (is success=true): "Action wasn't able to execute command "{Command}" on the following entities in Automox: {entity.identifier}.
- Please check the spelling and connectivity." The action should fail and stop a playbook execution: If a fatal error, like wrong credentials, no connection to the server, or other is reported: "Error executing action "Execute Device Command".

