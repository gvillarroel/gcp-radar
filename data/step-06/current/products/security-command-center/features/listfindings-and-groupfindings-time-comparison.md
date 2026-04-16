---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:49.177Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "ListFindings and GroupFindings time comparison"
feature_slug: "listfindings-and-groupfindings-time-comparison"
latest_feature_date: "2019-04-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/how-to-enable-real-time-notifications"
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InspectConfig"
keywords:
  - "listfindings"
  - "groupfindings"
  - "time"
  - "comparison"
  - "now"
  - "comparing"
  - "results"
  - "between"
---

# ListFindings and GroupFindings time comparison

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

ListFindings and GroupFindings now support comparing results between two points in time.

## Extended Definition

ListFindings and GroupFindings now support comparing results between two points in time.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/how-to-enable-real-time-notifications](https://docs.cloud.google.com/security-command-center/docs/how-to-enable-real-time-notifications)
- [https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InspectConfig](https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InspectConfig)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- To use ListFindings calls in the v1 API, update your response handling to respond to an extra layer of object nesting, as shown below: v1beta1: response.getFindings().forEach( x -> ....) v1: response.getListFindingsResults().forEach(x -> { x.getFinding(); .... }) Additional changes to the v1 API are listed below.
- August 07, 2025 Feature The following Container Threat Detection detectors have been released to General Availability : Execution: Possible Arbitrary Command Execution through CUPS (CVE-2024-47177) Execution: Socat Reverse Shell Detected Privilege Escalation: Abuse of Sudo For Privilege Escalation (CVE-2019-14287) Privilege Escalation: Polkit Local Privilege Escalation Vulnerability (CVE-2021-4034) Privilege Escalation: Sudo Potential Privilege Escalation (CVE-2021-3156) Feature Risk reports generated and downloaded from Security Command Center include a system attack exposure page that shows the organization's exposure risk over time and lists the projects and resources that have the highest risk.
- Between March 31, 2023 and May 4, 2023, the following detectors might have been counted and grouped under the incorrect CIS level on the Compliance tab of Security Command Center: API KEY EXISTS API KEY APIS UNRESTRICTED API KEY NOT ROTATED FIREWALL NOT MONITORED ROUTE NOT MONITORED NETWORK NOT MONITORED BUCKET IAM NOT MONITORED SQL INSTANCE NOT MONITORED VPC FLOW LOGS SETTINGS NOT RECOMMENDED SQL LOG STATEMENT ACCESS TRANSPARENCY DISABLED April 26, 2023 Feature Event Threat Detection, a built-in service of Security Command Center, launched the following new rules to Preview .
- Defense Evasion: Unexpected kernel code modification Defense Evasion: Unexpected kernel read-only data modification Defense Evasion: Unexpected ftrace handler Defense Evasion: Unexpected interrupt handler Defense Evasion: Unexpected kernel modules Defense Evasion: Unexpected kprobe handler Defense Evasion: Unexpected processes in runqueue Defense Evasion: Unexpected system call handler These modules analyze runtime Linux kernel integrity to detect common evasion techniques used by malware.

### "Enabling real-time email and chat notifications \_|\_ Security Command Center\

- URL: [https://docs.cloud.google.com/security-command-center/docs/how-to-enable-real-time-notifications](https://docs.cloud.google.com/security-command-center/docs/how-to-enable-real-time-notifications)
- Source ID: `site-docs-root`
- Final score: 123
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Pub/Sub is a real-time messaging service that enables messages to be sent and received between independent applications.
- Asset . to json ( asset )) def send webex teams notification ( event , context ): """Send the notification to Webex Teams.""" pubsub message = base64 . b64decode ( event [ "data" ]) . decode ( "utf-8" ) message json = json . loads ( pubsub message ) finding = message json [ "finding" ] parent = "/" . join ( finding [ "parent" ] . split ( "/" )[ 0 : 2 ]) asset = get asset ( parent , finding [ "resourceName" ]) requests . post ( "https://webexapis.com/v1/messages" , json = { "roomId" : ROOM ID , "markdown" : TEMPLATE . format ( severity = finding [ "severity" ], asset = asset [ "securityCenterProperties" ][ "resourceDisplayName" ], category = finding [ "category" ], project = asset [ "resourceProperties" ][ "project" ], create time = finding [ "createTime" ], event time = finding [ "eventTime" ], finding link = get finding detail page link ( finding [ "name" ]), ), }, headers = { "Authorization" : f "Bearer { WEBEX TOKEN } " }, ) Replace the following: WEBEX TOKEN with the Bot Access Token from the Create a Webex Bot section.
- For instructions, see Using secrets in Cloud Run functions documentation. #!/usr/bin/env python3 import base64 import json import requests from google.cloud import securitycenter v1 WEBEX TOKEN = " WEBEX TOKEN " ROOM ID = " ROOM ID " TEMPLATE = """ Severity: {severity} \n Asset: {asset} \n SCC Category: {category} \n Project: {project} \n First observed: {create time} \n Last observed: {event time} \n Link to finding: {finding link} """ PREFIX = "https://console.cloud.google.com/security/command-center/findings" def get finding detail page link ( finding name ): """Constructs a direct link to the finding detail page.""" org id = finding name . split ( "/" )[ 1 ] return f " { PREFIX } ?organizationId= { org id } & resourceId= { finding name } " def get asset ( parent , resource name ): """Retrieves the asset corresponding to resource name from SCC.""" client = securitycenter v1 .
- ListAssetsRequest ( parent = parent , filter = f 'securityCenterProperties.resourceName=" { resource name } "' , ) ) page = next ( resp . pages ) if page . total size == 0 : return None asset = page . list assets results [ 0 ] . asset return json . loads ( securitycenter v1 .

### InspectConfig \_|\_ Sensitive Data Protection \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InspectConfig](https://docs.cloud.google.com/sensitive-data-protection/docs/reference/rest/v2/InspectConfig)
- Source ID: `site-docs-reference-3`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- For example, if InspectionRuleSet.info types includes OBJECT TYPE/PERSON and this exclusionRule specifies infoTypes as OBJECT TYPE/PERSON/PASSPORT with imageContainmentType set to encloses , then OBJECT TYPE/PERSON findings will be excluded if they are fully contained within the bounding box of an OBJECT TYPE/PERSON/PASSPORT finding. imageContainmentType object ( ImageContainmentType ) Specifies the required spatial relationship between the bounding boxes of the target finding and the context infoType findings.
- The type of relationship to check between the target finding and the context finding. type can be only one of the following: encloses object ( Encloses ) The context finding's bounding box must fully contain the target finding's bounding box. fullyInside object ( FullyInside ) The context finding's bounding box must be fully inside the target finding's bounding box. overlaps object ( Overlap ) The context finding's bounding box and the target finding's bounding box must have a non-zero intersection.
- JSON representation { "name" : string , "createTime" : string } Fields name string Resource name of the requested StoredInfoType , for example organizations/433245324/storedInfoTypes/432452342 or projects/project-id/storedInfoTypes/432452342 . createTime string ( Timestamp format) Timestamp indicating when the version of the StoredInfoType used for inspection was created.
- If the likelihood is lower than this value, Sensitive Data Protection doesn't adjust the likelihood of the InspectionRuleSet.info types finding. imageContainmentType object ( ImageContainmentType ) Specifies the required spatial relationship between the bounding boxes of the target finding and the context infoType findings.

