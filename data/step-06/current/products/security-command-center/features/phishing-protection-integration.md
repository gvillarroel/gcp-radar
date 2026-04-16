---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:49.178Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Phishing Protection integration"
feature_slug: "phishing-protection-integration"
latest_feature_date: "2019-04-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/azure-ad-identity-protection"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
keywords:
  - "phishing"
  - "protection"
  - "integration"
  - "security"
  - "command"
  - "center"
  - "integrates"
  - "natively"
---

# Phishing Protection integration

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Security Command Center integrates natively with Phishing Protection.

## Extended Definition

Security Command Center integrates natively with Phishing Protection.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/azure-ad-identity-protection](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/azure-ad-identity-protection)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)

## Supporting Pages

### "Integrate Microsoft 365 Identity Protection with Google SecOps \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/azure-ad-identity-protection](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/azure-ad-identity-protection)
- Source ID: `site-docs-root-2`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- Integrate Microsoft 365 Identity Protection with Google SecOps Important: In the Google SecOps platform, the Microsoft 365 Identity Protection integration is called Azure AD Identity Protection .
- Verify SSL Checkbox Checked Yes If selected, the integration validates the SSL certificate when connecting to the Microsoft 365 Identity Protection server.
- This document describes how to integrate Microsoft 365 Identity Protection with Google Security Operations (Google SecOps).
- Action Results Script Result Script Result Name Value Options Example is success True/False is success:False JSON Result { "id" : "2600d017-84a1-444f-94ba-4bebed30b09e" , "isDeleted" : false , "isProcessing" : false , "riskLevel" : "none" , "riskState" : "remediated" , "riskDetail" : "userPerformedSecuredPasswordChange" , "riskLastUpdatedDateTime" : "2021-09-02T14:10:48Z" , "userDisplayName" : "user 1" , "userPrincipalName" : "user 1@example.com" } Entity Enrichment Enrichment Field Name Logic - When to apply is deleted When available in JSON is processing When available in JSON risk level When available in JSON risk state When available in JSON risk detail When available in JSON risk updated When available in JSON display name When available in JSON principal name When available in JSON Case Wall Result type Value/Description Type (Entity \ General) Output message The action should not fail nor stop a playbook execution: If data is available for one entity (is success=true): "Successfully enriched the following entities using information from Azure AD Identity Protection: {entity.identifier}".

### Google Security Operations response integrations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations)
- Source ID: `site-docs-root-2`
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Active Directory Akamai Alexa AlgoSec AlienVault USM Anywhere AlienVault USM Appliance AlienVaultTI Amazon Macie Anomali Anomali Staxx Anomali ThreatStream Any.Run APIVoid AppSheet ArcSight ArcSight Logger Area1 Armis Atlassian Confluence Server Attivo Automox AWS Cloud Trail AWS CloudWatch AWS Elastic Compute Cloud (EC2) AWS GuardDuty AWS IAM Access Analyzer AWS Identity and Access Management (IAM) AWS S3 AWS Security Hub AWS WAF Axonius Azure Active Directory Azure API Azure Monitor BitSight BlueLiv BMC Helix Remedyforce BMC Remedy ITSM BulkWhoIs CA Service Desk Manager Carbon Black Defense Carbon Black Protection Carbon Black Response Check Point Cloud Guard Check Point Firewall Check Point SandBlast Check Point Threat Reputation Cisco AMP Cisco FirePower Management Center Cisco ISE Cisco Orbital Cisco Threat Grid CiscoUmbrella Cloudflare Cloud Logging Cofense Triage ConnectWise CrowdStrike Falcon CSV Cuckoo CyberArk PAM CyberArk Vault Cybereason Cyberint CyberX Cylance Cynet Darktrace DeepSight Devo Digital Shadows DomainTools DShield Easy Vista Elastica CloudSOC ElasticSearch ElasticSearchV7 Email EmailV2 Endgame Exabeam Advanced Analytics Exchange Exchange Extension Pack ExtraHop F5 Big IQ F5 BIG-IP Access Policy Manager F5 BIG-IP iControl API Falcon Sandbox FileOperation FireEye AX FireEye CM FireEye ETP FireEye EX FireEye Helix FireEye HX FireEye NX ForeScout CounterACT FortiAnalyzer Fortinet FortiSIEM Forti Manager FortiGate Freshworks Freshservice Gmail Google Alert Center Google BigQuery Google Chat Google Chronicle Google Cloud API Google Cloud Armor Google Cloud Asset Inventory Google Cloud Compute Google Cloud IAM Google Cloud Policy Intelligence Google Cloud Recommender Google Cloud Storage Google Forms Google Kubernetes Engine Google Rapid Response (GRR) Google Security Command Center Google Threat Intelligence Google Translate Google Workspace Harmony Mobile HashiCorp Vault HaveIBeenPwned HCL BigFix Inventory HTTP Rest API HTTP v2 Humio iBoss Illusive Networks Internet Storm Center Intezer IntSights IPInfo IPVoid IronPort IronScales Ivanti Endpoint Manager Jira JoeSandbox JuniperVSRX Lastline LogPoint LogRhythm MalShare Malware Domain List Mandiant Mandiant ASM Mandiant Digital Threat Monitoring Mandiant Managed Defense Mandiant Threat Intelligence McAfee NSM McAfee Active Response McAfee ATD McAfee EPO McAfee ESM McAfee Mvision EDR McAfee Mvision EPO McAfee TIEDXL McAfee Web Gateway Micro Focus ITSMA Microsoft 365 Identity Protection Microsoft Defender For Cloud Microsoft Defender For Endpoint Microsoft Defender For XDR Microsoft Graph Mail Microsoft Graph Mail Delegated Microsoft Graph Security Microsoft Intune Microsoft Sentinel Microsoft Teams Mimecast MISP MITRE ATT&CK MobileIron MongoDB MSSQL MySQL MX Toolbox NessusScanner Netskope Nmap Nozomi Networks O365 Management API ObserveIT Office 365 CloudApp Security Okta OpenSearch Opswat Metadefender Orca Security Outpost24 Palo Alto AutoFocus Palo Alto Cortex XDR Palo Alto Next Gen Firewall Palo Alto Panorama Palo Alto Networks Prisma Cloud PassiveTotal PhishingInitiative PhishRod Portnox PostgreSQL Proofpoint Cloud Threat Response Proofpoint PS Proofpoint TAP Proofpoint Threat Protection Protectwise Pub/Sub QRadar Qualys EDR Qualys VM Rapid7 InsightIDR Rapid7 InsightVm Recorded Future Redis Remote Agent Utilities Reversinglabs A1000 ReversingLabs Titanium RSA Archer RSA NetWitness RSA NetWitness EDR RSA NetWitness Platform Runners Salesforce SCCM ScreenshotMachine SentinelOne SentinelOneV2 Service Desk Plus Service Desk Plus V3 ServiceNow Shodan Siemplify Siemplify ThreatFuse SiemplifyUtilities Site24x7 Slack Snowflake Solar Winds Orion SonicWall-Beta Sophos Splash Splunk SpyCloud SSH SSL Labs Stealthwatch Stealthwatch V6.10 Stellar Cyber Starlight Sumologic Sumo Logic Cloud SIEM Symantec ATP Symantec Blue Coat ProxySG Symantec Content Analysis Symantec Email Security Cloud Symantec Endpoint Protection Symantec Endpoint Protection 12 Symantec Endpoint Security Complete Cloud Symantec ICDX SysAid Sysdig Secure Talos ThreatSource Tanium Tenable.io Tenable Security Center ThreatConnect ThreatCrowd ThreatExchange ThreatQ Tor Trend Micro Apex Central Trend Micro Cloud App Security Trend Micro DDAN Trend Micro Deep Security Trend Micro Vision One Trend Vision One TruSTAR Twilio UnshortenMe UrlScan.io URLVoid Varonis Data Security Platform Vectra Vertex AI VirusTotal VirusTotalV3 VMRay VMware Carbon Black Cloud VMware Carbon Black Endpoint Standard Live Response VMware Carbon Black Enterprise EDR VSphere Web Risk Websense WildFire Wiz WMI XForce Zabbix Zendesk ZeroFox Zoho Desk ZScaler Need more help?
- Google Security Operations response integrations Google SecOps lets you get the most out of the incorporated solutions by using integrations, investigating threats, and automating your SOC team's work.
- Home Documentation Security Google Security Operations Reference Send feedback Stay organized with collections Save and categorize content based on your preferences.

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Threat detection and investigation Detect threats in your AWS deployments Investigate and respond to incidents with SIEM-like capabilities across 90 days of cloud logs Manage the investigation of and response to threats by using cases Define response workflows and automated actions in response to threats by using playbooks Mandiant Attack Surface Management integration Mandiant Attack Surface Management scans your external attack surfaces to identify vulnerability and misconfiguration findings Sensitive Data Protection integration The Risk overview page of Security Command Center in the Google Cloud console now shows data security findings from the Sensitive Data Protection discovery service Findings from Sensitive Data Protection that indicate the sensitivity and data risk levels of your data can inform the automated assignment of resource values for the attack path simulation feature Gemini artificial intelligence features Natural language search for threat findings AI investigation widget for cases Compliance, security standards Support for AWS security standards Validate infrastructure as code (IaC) against organization policies and Security Health Analytics detectors.
- Feature Prioritize high-value resources automatically by data sensitivity The optional integration of the Sensitive Data Protection discovery feature with the Security Command Center attack path simulation feature is released to Preview .
- The following features and capabilities of the Enterprise tier are new to Security Command Center: Multicloud support : You can now connect Security Command Center to Amazon Web Services for the following capabilities: Detect threats and vulnerabilities Assess the risk exposure of your high-value AWS resources Assess compliance with security standards A new Security Operations console for global security operations tasks SIEM and SOAR capabilities for security operations Security investigation and event management (SIEM) capabilities: Ingest and normalize logs from Google Cloud, AWS, Security Command Center findings, and resource metadata from multiple sources Detect the most important cloud threats with curated threat detection Search across consolidated SIEM data Security operations and response (SOAR) capabilities: Manage detections, investigations, and responses with cases Automate response workflows with playbooks Focus on posture and threat findings with dedicated views in the Security Operations console Integrate with IT service management products, such as Jira and ServiceNow, for posture management Search across consolidated SOAR data The following attack exposure scoring features are in General Availability: Attack exposure scores now calculated for high-value resources Severities of vulnerability findings can vary to align with attack exposure scores Optional automated assignment of resource values with Sensitive Data Protection Vulnerability and misconfiguration detections Security Health Analytics includes the following enhancements: New misconfiguration detectors for AWS resources Detectors are mapped to new security standards You can now manage the remediation of critical and high severity vulnerability and misconfiguration findings using cases that are automatically opened for you.
- The following detectors, which are available with the Enterprise and Premium tiers of Security Command Center, detect misconfigurations in web applications: HSTS MISCONFIGURATION CSP MISSING CSP MISCONFIGURATION COOP MISSING CLICKJACKING PROTECTION MISSING For more information, see Web Security Scanner misconfiguration findings .

