---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.921Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Google SCC App for QRadar"
feature_slug: "google-scc-app-for-qradar"
latest_feature_date: "2023-03-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations"
  - "https://docs.cloud.google.com/database-center/docs/filter-resources-export-fleet-inventory-information"
keywords:
  - "scc"
  - "app"
  - "qradar"
  - "integration"
  - "sends"
  - "security"
  - "command"
  - "center"
---

# Google SCC App for QRadar

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

An integration that sends Security Command Center data to QRadar.

## Extended Definition

An integration that sends Security Command Center data to QRadar.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations)
- [https://docs.cloud.google.com/database-center/docs/filter-resources-export-fleet-inventory-information](https://docs.cloud.google.com/database-center/docs/filter-resources-export-fleet-inventory-information)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- Threat detection and investigation Detect threats in your AWS deployments Investigate and respond to incidents with SIEM-like capabilities across 90 days of cloud logs Manage the investigation of and response to threats by using cases Define response workflows and automated actions in response to threats by using playbooks Mandiant Attack Surface Management integration Mandiant Attack Surface Management scans your external attack surfaces to identify vulnerability and misconfiguration findings Sensitive Data Protection integration The Risk overview page of Security Command Center in the Google Cloud console now shows data security findings from the Sensitive Data Protection discovery service Findings from Sensitive Data Protection that indicate the sensitivity and data risk levels of your data can inform the automated assignment of resource values for the attack path simulation feature Gemini artificial intelligence features Natural language search for threat findings AI investigation widget for cases Compliance, security standards Support for AWS security standards Validate infrastructure as code (IaC) against organization policies and Security Health Analytics detectors.
- The following detectors are new for v1.3.0: Access transparency disabled Cloud Asset API disabled Dataproc CMEK disabled Essential contacts not configured Flow logs settings not recommended The following detectors have been updated: Audit logging disabled For more information about Security Command Center support for standards and compliance, see the following: Detectors and compliance CIS Google Cloud Computing Platform Benchmarks March 23, 2023 Feature The version 3.0 release of the Google SCC App for QRadar , which lets you send Security Command Center data to QRadar v7.4.1FP2+, is generally available.
- September 11, 2024 Change Validate updates to integrations in the Security Command Center Enterprise use case Updates to the threat response playbook blocks and use case flows are available in the SCC Enterprise - Cloud Orchestration & Remediation use case for Security Command Center Enterprise.
- Feature Prioritize high-value resources automatically by data sensitivity The optional integration of the Sensitive Data Protection discovery feature with the Security Command Center attack path simulation feature is released to Preview .

### Google Security Operations response integrations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations)
- Source ID: `site-docs-root-2`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Active Directory Akamai Alexa AlgoSec AlienVault USM Anywhere AlienVault USM Appliance AlienVaultTI Amazon Macie Anomali Anomali Staxx Anomali ThreatStream Any.Run APIVoid AppSheet ArcSight ArcSight Logger Area1 Armis Atlassian Confluence Server Attivo Automox AWS Cloud Trail AWS CloudWatch AWS Elastic Compute Cloud (EC2) AWS GuardDuty AWS IAM Access Analyzer AWS Identity and Access Management (IAM) AWS S3 AWS Security Hub AWS WAF Axonius Azure Active Directory Azure API Azure Monitor BitSight BlueLiv BMC Helix Remedyforce BMC Remedy ITSM BulkWhoIs CA Service Desk Manager Carbon Black Defense Carbon Black Protection Carbon Black Response Check Point Cloud Guard Check Point Firewall Check Point SandBlast Check Point Threat Reputation Cisco AMP Cisco FirePower Management Center Cisco ISE Cisco Orbital Cisco Threat Grid CiscoUmbrella Cloudflare Cloud Logging Cofense Triage ConnectWise CrowdStrike Falcon CSV Cuckoo CyberArk PAM CyberArk Vault Cybereason Cyberint CyberX Cylance Cynet Darktrace DeepSight Devo Digital Shadows DomainTools DShield Easy Vista Elastica CloudSOC ElasticSearch ElasticSearchV7 Email EmailV2 Endgame Exabeam Advanced Analytics Exchange Exchange Extension Pack ExtraHop F5 Big IQ F5 BIG-IP Access Policy Manager F5 BIG-IP iControl API Falcon Sandbox FileOperation FireEye AX FireEye CM FireEye ETP FireEye EX FireEye Helix FireEye HX FireEye NX ForeScout CounterACT FortiAnalyzer Fortinet FortiSIEM Forti Manager FortiGate Freshworks Freshservice Gmail Google Alert Center Google BigQuery Google Chat Google Chronicle Google Cloud API Google Cloud Armor Google Cloud Asset Inventory Google Cloud Compute Google Cloud IAM Google Cloud Policy Intelligence Google Cloud Recommender Google Cloud Storage Google Forms Google Kubernetes Engine Google Rapid Response (GRR) Google Security Command Center Google Threat Intelligence Google Translate Google Workspace Harmony Mobile HashiCorp Vault HaveIBeenPwned HCL BigFix Inventory HTTP Rest API HTTP v2 Humio iBoss Illusive Networks Internet Storm Center Intezer IntSights IPInfo IPVoid IronPort IronScales Ivanti Endpoint Manager Jira JoeSandbox JuniperVSRX Lastline LogPoint LogRhythm MalShare Malware Domain List Mandiant Mandiant ASM Mandiant Digital Threat Monitoring Mandiant Managed Defense Mandiant Threat Intelligence McAfee NSM McAfee Active Response McAfee ATD McAfee EPO McAfee ESM McAfee Mvision EDR McAfee Mvision EPO McAfee TIEDXL McAfee Web Gateway Micro Focus ITSMA Microsoft 365 Identity Protection Microsoft Defender For Cloud Microsoft Defender For Endpoint Microsoft Defender For XDR Microsoft Graph Mail Microsoft Graph Mail Delegated Microsoft Graph Security Microsoft Intune Microsoft Sentinel Microsoft Teams Mimecast MISP MITRE ATT&CK MobileIron MongoDB MSSQL MySQL MX Toolbox NessusScanner Netskope Nmap Nozomi Networks O365 Management API ObserveIT Office 365 CloudApp Security Okta OpenSearch Opswat Metadefender Orca Security Outpost24 Palo Alto AutoFocus Palo Alto Cortex XDR Palo Alto Next Gen Firewall Palo Alto Panorama Palo Alto Networks Prisma Cloud PassiveTotal PhishingInitiative PhishRod Portnox PostgreSQL Proofpoint Cloud Threat Response Proofpoint PS Proofpoint TAP Proofpoint Threat Protection Protectwise Pub/Sub QRadar Qualys EDR Qualys VM Rapid7 InsightIDR Rapid7 InsightVm Recorded Future Redis Remote Agent Utilities Reversinglabs A1000 ReversingLabs Titanium RSA Archer RSA NetWitness RSA NetWitness EDR RSA NetWitness Platform Runners Salesforce SCCM ScreenshotMachine SentinelOne SentinelOneV2 Service Desk Plus Service Desk Plus V3 ServiceNow Shodan Siemplify Siemplify ThreatFuse SiemplifyUtilities Site24x7 Slack Snowflake Solar Winds Orion SonicWall-Beta Sophos Splash Splunk SpyCloud SSH SSL Labs Stealthwatch Stealthwatch V6.10 Stellar Cyber Starlight Sumologic Sumo Logic Cloud SIEM Symantec ATP Symantec Blue Coat ProxySG Symantec Content Analysis Symantec Email Security Cloud Symantec Endpoint Protection Symantec Endpoint Protection 12 Symantec Endpoint Security Complete Cloud Symantec ICDX SysAid Sysdig Secure Talos ThreatSource Tanium Tenable.io Tenable Security Center ThreatConnect ThreatCrowd ThreatExchange ThreatQ Tor Trend Micro Apex Central Trend Micro Cloud App Security Trend Micro DDAN Trend Micro Deep Security Trend Micro Vision One Trend Vision One TruSTAR Twilio UnshortenMe UrlScan.io URLVoid Varonis Data Security Platform Vectra Vertex AI VirusTotal VirusTotalV3 VMRay VMware Carbon Black Cloud VMware Carbon Black Endpoint Standard Live Response VMware Carbon Black Enterprise EDR VSphere Web Risk Websense WildFire Wiz WMI XForce Zabbix Zendesk ZeroFox Zoho Desk ZScaler Need more help?
- Google Security Operations response integrations Google SecOps lets you get the most out of the incorporated solutions by using integrations, investigating threats, and automating your SOC team's work.
- Home Documentation Security Google Security Operations Reference Send feedback Stay organized with collections Save and categorize content based on your preferences.

### "Filter resources and export fleet inventory information \_|\_ Database Center\

- URL: [https://docs.cloud.google.com/database-center/docs/filter-resources-export-fleet-inventory-information](https://docs.cloud.google.com/database-center/docs/filter-resources-export-fleet-inventory-information)
- Source ID: `site-docs-reference-2`
- Final score: 68
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can filter the following information in the Database Center dashboard: Database products and versions Regions Labels Tags Google Cloud projects, if you select a folder or organization in the Open project picker in the Google Cloud console.
- Home Documentation Databases Database Center Guides Send feedback Filter resources and export fleet inventory information Stay organized with collections Save and categorize content based on your preferences.
- This page shows you how to filter the database fleet information that is displayed in your Database Center dashboard, and describes how to export database fleet inventory information into a CSV file.
- Database Center From the drop-down in the Google Cloud console menu bar, select a database scope—for example, a Google Cloud project, folder, or organization.

