---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:22.803Z"
product_name: "Google SecOps SOAR"
product_slug: "google-secops-soar"
feature_name: "Integration rollback"
feature_slug: "integration-rollback"
latest_feature_date: "2026-01-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty"
  - "https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-macie"
keywords:
  - "integration"
  - "rollback"
  - "commercial"
  - "response"
  - "integrations"
  - "can"
  - "be"
  - "rolled"
---

# Integration rollback

Product: Google SecOps SOAR
Coverage: MEDIUM

## Step 02 Summary

Commercial response integrations can be rolled back to the last installed version, including standard code and custom modifications.

## Extended Definition

Commercial response integrations can be rolled back to the last installed version, including standard code and custom modifications.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty)
- [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-macie](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-macie)

## Supporting Pages

### "Response integrations community contribution guidelines \_|\_ Google Security\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines](https://docs.cloud.google.com/chronicle/docs/soar/respond/integrations-setup/integrations-guidelines)
- Source ID: `site-docs-root-2`
- Final score: 221
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You should validate the logo on the following pages: Response > Integration Setup Response > Playbooks > Playbook Designer Cases > Alert > Alert Playbook View The following is an example of an SVG logo, designed to match our style guide: <?xml version="1.0" encoding="UTF-8"?><svg id="Layer 1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 23"> <defs> <style> .cls-1 { stroke-width: 0px; } </style> </defs> <path class="cls-1" d="M15.51,4.79H5.49c-.4,0-.72.32-.72.72v5.75c0,2.3,1.71,4.15,3.69,5.38.54.34,1.1.62,1.66.86l.09.04c.06.02.12.05.18.06.03,0,.07,0,.1,0,.1,0,.19-.03.28-.07l.09-.04c.76-.33,2.22-1.03,3.46-2.24,1.24-1.22,1.89-2.6,1.89-4v-5.75c0-.4-.32-.72-.72-.72ZM14.32,11.26c0,.88-.44,1.77-1.32,2.63-.65.64-1.55,1.22-2.5,1.68-.95-.46-1.84-1.04-2.5-1.68-.88-.86-1.32-1.75-1.32-2.63v-4.55h7.64v4.55ZM20.28,0H.72c-.4,0-.72.32-.72.72v10.77c0,2.56,1.18,4.99,3.51,7.21,2.29,2.18,5.12,3.56,6.61,4.2l.09.04s.1.04.15.05c.04,0,.09.01.13.01.1,0,.19-.02.28-.06l.09-.04c.53-.23,1.23-.55,2.02-.97,1.42-.75,3.11-1.82,4.59-3.23,2.33-2.22,3.51-4.64,3.51-7.21V.72c0-.4-.32-.72-.72-.72ZM16.17,17.31c-1.9,1.81-4.24,3.04-5.67,3.69-1.43-.65-3.77-1.88-5.67-3.69-1.94-1.84-2.92-3.8-2.92-5.82V1.92h17.18v9.57c0,2.02-.98,3.98-2.92,5.82Z"/></svg> Be sure to encode the SVG before adding it to the integration definition file, as can be found in other integrations in the Content Hub.
- Configuration parameters All integrations should contain configuration parameters (API Root + Auth parameters), unless the underlying API doesn't require any authentication and the API Root can be hardcoded.
- Response integrations community contribution guidelines Supported in: Google secops SOAR This document outlines the guidelines for submitting Response Integrations to Google SecOps through community contributions.
- Response integration metadata Name The Name should correspond to the product name with which the integration is going to be integrated and shouldn't contain any special characters.

### Google Security Operations response integrations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations)
- Source ID: `site-api-reference`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Active Directory Akamai Alexa AlgoSec AlienVault USM Anywhere AlienVault USM Appliance AlienVaultTI Amazon Macie Anomali Anomali Staxx Anomali ThreatStream Any.Run APIVoid AppSheet ArcSight ArcSight Logger Area1 Armis Atlassian Confluence Server Attivo Automox AWS Cloud Trail AWS CloudWatch AWS Elastic Compute Cloud (EC2) AWS GuardDuty AWS IAM Access Analyzer AWS Identity and Access Management (IAM) AWS S3 AWS Security Hub AWS WAF Axonius Azure Active Directory Azure API Azure Monitor BitSight BlueLiv BMC Helix Remedyforce BMC Remedy ITSM BulkWhoIs CA Service Desk Manager Carbon Black Defense Carbon Black Protection Carbon Black Response Check Point Cloud Guard Check Point Firewall Check Point SandBlast Check Point Threat Reputation Cisco AMP Cisco FirePower Management Center Cisco ISE Cisco Orbital Cisco Threat Grid CiscoUmbrella Cloudflare Cloud Logging Cofense Triage ConnectWise CrowdStrike Falcon CSV Cuckoo CyberArk PAM CyberArk Vault Cybereason Cyberint CyberX Cylance Cynet Darktrace DeepSight Devo Digital Shadows DomainTools DShield Easy Vista Elastica CloudSOC ElasticSearch ElasticSearchV7 Email EmailV2 Endgame Exabeam Advanced Analytics Exchange Exchange Extension Pack ExtraHop F5 Big IQ F5 BIG-IP Access Policy Manager F5 BIG-IP iControl API Falcon Sandbox FileOperation FireEye AX FireEye CM FireEye ETP FireEye EX FireEye Helix FireEye HX FireEye NX ForeScout CounterACT FortiAnalyzer Fortinet FortiSIEM Forti Manager FortiGate Freshworks Freshservice Gmail Google Alert Center Google BigQuery Google Chat Google Chronicle Google Cloud API Google Cloud Armor Google Cloud Asset Inventory Google Cloud Compute Google Cloud IAM Google Cloud Policy Intelligence Google Cloud Recommender Google Cloud Storage Google Forms Google Kubernetes Engine Google Rapid Response (GRR) Google Security Command Center Google Threat Intelligence Google Translate Google Workspace Harmony Mobile HashiCorp Vault HaveIBeenPwned HCL BigFix Inventory HTTP Rest API HTTP v2 Humio iBoss Illusive Networks Internet Storm Center Intezer IntSights IPInfo IPVoid IronPort IronScales Ivanti Endpoint Manager Jira JoeSandbox JuniperVSRX Lastline LogPoint LogRhythm MalShare Malware Domain List Mandiant Mandiant ASM Mandiant Digital Threat Monitoring Mandiant Managed Defense Mandiant Threat Intelligence McAfee NSM McAfee Active Response McAfee ATD McAfee EPO McAfee ESM McAfee Mvision EDR McAfee Mvision EPO McAfee TIEDXL McAfee Web Gateway Micro Focus ITSMA Microsoft 365 Identity Protection Microsoft Defender For Cloud Microsoft Defender For Endpoint Microsoft Defender For XDR Microsoft Graph Mail Microsoft Graph Mail Delegated Microsoft Graph Security Microsoft Intune Microsoft Sentinel Microsoft Teams Mimecast MISP MITRE ATT&CK MobileIron MongoDB MSSQL MySQL MX Toolbox NessusScanner Netskope Nmap Nozomi Networks O365 Management API ObserveIT Office 365 CloudApp Security Okta OpenSearch Opswat Metadefender Orca Security Outpost24 Palo Alto AutoFocus Palo Alto Cortex XDR Palo Alto Next Gen Firewall Palo Alto Panorama Palo Alto Networks Prisma Cloud PassiveTotal PhishingInitiative PhishRod Portnox PostgreSQL Proofpoint Cloud Threat Response Proofpoint PS Proofpoint TAP Proofpoint Threat Protection Protectwise Pub/Sub QRadar Qualys EDR Qualys VM Rapid7 InsightIDR Rapid7 InsightVm Recorded Future Redis Remote Agent Utilities Reversinglabs A1000 ReversingLabs Titanium RSA Archer RSA NetWitness RSA NetWitness EDR RSA NetWitness Platform Runners Salesforce SCCM ScreenshotMachine SentinelOne SentinelOneV2 Service Desk Plus Service Desk Plus V3 ServiceNow Shodan Siemplify Siemplify ThreatFuse SiemplifyUtilities Site24x7 Slack Snowflake Solar Winds Orion SonicWall-Beta Sophos Splash Splunk SpyCloud SSH SSL Labs Stealthwatch Stealthwatch V6.10 Stellar Cyber Starlight Sumologic Sumo Logic Cloud SIEM Symantec ATP Symantec Blue Coat ProxySG Symantec Content Analysis Symantec Email Security Cloud Symantec Endpoint Protection Symantec Endpoint Protection 12 Symantec Endpoint Security Complete Cloud Symantec ICDX SysAid Sysdig Secure Talos ThreatSource Tanium Tenable.io Tenable Security Center ThreatConnect ThreatCrowd ThreatExchange ThreatQ Tor Trend Micro Apex Central Trend Micro Cloud App Security Trend Micro DDAN Trend Micro Deep Security Trend Micro Vision One Trend Vision One TruSTAR Twilio UnshortenMe UrlScan.io URLVoid Varonis Data Security Platform Vectra Vertex AI VirusTotal VirusTotalV3 VMRay VMware Carbon Black Cloud VMware Carbon Black Endpoint Standard Live Response VMware Carbon Black Enterprise EDR VSphere Web Risk Websense WildFire Wiz WMI XForce Zabbix Zendesk ZeroFox Zoho Desk ZScaler Need more help?
- Google Security Operations response integrations Google SecOps lets you get the most out of the incorporated solutions by using integrations, investigating threats, and automating your SOC team's work.
- Get answers from Community members and Google SecOps professionals.

### "Integrate Amazon GuardDuty with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty)
- Source ID: `site-api-reference`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- Detector ID String N/A Yes The unique ID of the detector AWS Region String N/A No Optionally specify the AWS Region to be used in the action that can be different from the default region specified in the integration configuration page.
- Example: id 1,id 2 AWS Region String N/A No Optionally specify the AWS Region to be used in the action that can be different from the default region specified in the integration configuration page.
- AWS Region String N/A No Optionally specify the AWS Region to be used in the action that can be different from the default region specified in the integration configuration page.
- AWS Region String N/A No Optionally specify the AWS Region to be used in the action that can be different from the default region specified in the integration configuration page.

### "Integrate Amazon Macie with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-macie](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-macie)
- Source ID: `site-api-reference`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- Action results Script result Script result name Value options Example is success True or False is success:False JSON result { "ResponseMetadata" :{ "HTTPHeaders" :{ "connection" : "keep-alive" , "content-length" : "2741" , "content-type" : "application/json" , "date" : "Thu, 22 Oct 2020 11:08:58 GMT" , "x-amz-apigw-id" : " ID " , "x-amzn-remapped-content-length" : "2741" , "x-amzn-remapped-date" : "Thu, 22 Oct ""2020 11:08:57 ""GMT" , "x-amzn-remapped-x-amzn-requestid" : "eaea00d2-11f8-40d8-adce-f6c9f17e9815" , "x-amzn-requestid" : "4102349a-a5da-4bfc-ad78-40f48885985f" }, "HTTPStatusCode" : 200 , "RequestId" : "4102349a-a5da-4bfc-ad78-40f48885985f" , "RetryAttempts" : 0 }, "findings" :[ { "accountId" : " ACCOUNT ID " , "archived" : false , "category" : "CLASSIFICATION" , "classificationDetails" :{ "detailedResultsLocation" : "s3://[export-config-not-set]/AWSLogs/ ACCOUNT ID /Macie/us-east-1/" , "jobArn" : "arn:aws:macie2:us-east-1" , "jobId" : "088009521d393eda440a24f3c7ad8fbd" , "result" :{ "additionalOccurrences" : false , "customDataIdentifiers" :{ "detections" :[ ], "totalCount" : 0 }, "mimeType" : "application/zip" , "sensitiveData" :[ { "category" : "PERSONAL INFORMATION" , "detections" :[ { "count" : 80 , "type" : "PHONE NUMBER" }, { "count" : 5 , "type" : "ADDRESS" }, { "count" : 207 , "type" : "NAME" } ], "totalCount" : 292 }, { "category" : "CREDENTIALS" , "detections" :[ { "count" : 5 , "type" : "AWS CREDENTIALS" } ], "totalCount" : 5 } ], "sizeClassified" : 44213802 , "status" :{ "code" : "PARTIAL" , "reason" : "ARCHIVE CONTAINS UNPROCESSED FILES" } } }, "count" : 1 , "createdAt" : da tet ime.da tet ime( 2020 , 10 , 22 , 3 , 12 , 9 , 364000 , "tzinfo=tzutc())" , "description" : "The object contains more than one type of ""sensitive information." , "id" : " FINDING ID " , "partition" : "aws" , "region" : "us-east-1" , "resourcesAffected" :{ "s3Bucket" :{ "arn" : "arn:aws:s3:::testexample" , "createdAt" : da tet ime.da tet ime( 2020 , 9 , 14 , 10 , 31 , 56 , "tzinfo=tzutc())" , "defaultServerSideEncryption" :{ "encryptionType" : "NONE" }, "name" : "testexample" , "owner" :{ "displayName" : "lab aws" , "id" : " OWNER ID " }, "publicAccess" :{ "effectivePermission" : "PUBLIC" , "permissionConfiguration" :{ "accountLevelPermissions" :{ "blockPublicAccess" :{ "blockPublicAcls" : false , "blockPublicPolicy" : false , "ignorePublicAcls" : false , "restrictPublicBuckets" : false } }, "bucketLevelPermissions" :{ "accessControlList" :{ "allowsPublicReadAccess" : false , "allowsPublicWriteAccess" : false }, "blockPublicAccess" :{ "blockPublicAcls" : false , "blockPublicPolicy" : false , "ignorePublicAcls" : false , "restrictPublicBuckets" : false }, "bucketPolicy" :{ "allowsPublicReadAccess" : true , "allowsPublicWriteAccess" : false } } } }, "tags" :[ ] }, "s3Object" :{ "bucketArn" : "arn:aws:s3:::testsiemplify" , "eTag" : "8dfbe2ba101b3ca0a62f8fde823503b4-5" , "extension" : "zip" , "key" : "awscliv2.zip" , "lastModified" : da tet ime.da tet ime( 2020 , 9 , 28 , 18 , 47 , 30 , "tzinfo=tzutc())" , "path" : "testexample/awscliv2.zip" , "publicAccess" : false , "serverSideEncryption" :{ "encryptionType" : "NONE" }, "size" : 33775890 , "storageClass" : "STANDARD" , "tags" :[ ], "versionId" : "" } }, "sample" : false , "schemaVersion" : "1.0" , "severity" :{ "description" : "High" , "score" : 3 }, "title" : "The S3 object contains multiple types of sensitive ""information." , "type" : "SensitiveData:S3Object/Multiple" , "updatedAt" : da tet ime.da tet ime( 2020 , 10 , 22 , 3 , 12 , 9 , 364000 , "tzinfo=tzutc())" } ] } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful: "Amazon Macie findings found" If is success=False, for example no findings were found: "No findings were returned." The action should fail and stop a playbook execution: If a critical error, like wrong credentials or lost connectivity is reported: "Failed to connect to the Amazon Macie service!
- Action results Script result Script result name Value options Example is success True or False is success:False JSON Result { "ResponseMetadata" :{ "HTTPHeaders" :{ "connection" : "keep-alive" , "content-length" : "65" , "content-type" : "application/json" , "date" : "Mon, 26 Oct 2020 05:15:07 GMT" , "x-amz-apigw-id" : " ID " , "x-amzn-remapped-content-length" : "65" , "x-amzn-remapped-date" : "Mon, 26 Oct ""2020 05:15:07 ""GMT" , "x-amzn-remapped-x-amzn-requestid" : "61217a30-189e-4573-9f76-257b7065a04d" , "x-amzn-requestid" : "509e1c12-ab86-459e-9d6d-790a359686b2" }, "HTTPStatusCode" : 200 , "RequestId" : "509e1c12-ab86-459e-9d6d-790a359686b2" , "RetryAttempts" : 0 }, "customDataIdentifierId" : "ff43487b-5643-4de1-b651-9ecbeb3021ed" } Case wall Result type Description Type Output message The action should not fail nor stop a playbook execution: If successful: "New Amazon Macie custom data identifier created: {0}".format(new identifier id from response) If is success=False, for example no findings were found: "Failed to create Amazon Macie Identifier.
- Use cases Create Amazon Macie custom data identifier based on the observed data, so later new custom data identifier can be used in classification jobs.
- For instructions about how to configure an integration in Google SecOps, see Configure integrations .

