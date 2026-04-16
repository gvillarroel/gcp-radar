---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:49.167Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Dashboard time-diff queries"
feature_slug: "dashboard-time-diff-queries"
latest_feature_date: "2019-04-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/chronicle/docs/reports/events-schema-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources"
keywords:
  - "dashboard"
  - "time"
  - "diff"
  - "queries"
  - "security"
  - "command"
  - "center"
  - "now"
---

# Dashboard time-diff queries

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

The Security Command Center dashboard now supports time-diff queries for fixed time periods.

## Extended Definition

The Security Command Center dashboard now supports time-diff queries for fixed time periods.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/chronicle/docs/reports/events-schema-overview](https://docs.cloud.google.com/chronicle/docs/reports/events-schema-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- August 07, 2025 Feature The following Container Threat Detection detectors have been released to General Availability : Execution: Possible Arbitrary Command Execution through CUPS (CVE-2024-47177) Execution: Socat Reverse Shell Detected Privilege Escalation: Abuse of Sudo For Privilege Escalation (CVE-2019-14287) Privilege Escalation: Polkit Local Privilege Escalation Vulnerability (CVE-2021-4034) Privilege Escalation: Sudo Potential Privilege Escalation (CVE-2021-3156) Feature Risk reports generated and downloaded from Security Command Center include a system attack exposure page that shows the organization's exposure risk over time and lists the projects and resources that have the highest risk.
- The following list includes finding classes and their descriptions: Threat : unwanted or malicious activity Vulnerability : a potential weakness in software that increases risk to the confidentiality, integrity, and availability of your resources Misconfiguration : a potential weakness in a resource's configuration that increases risk Observation : a security observation provided for informational purposes To learn more about findings, see the Findings tab in Using the Security Command Center dashboard .
- September 19, 2023 Change Vulnerabilities per resource type graphic released to General Availability The Security Command Center Overview page in the Cloud console now shows a Vulnerabilities per resource type graphic, which replaces the Active vulnerabilities over time by severity graphic.
- Deprecated Historical snapshots to be disabled in Security Command Center API Starting July 15, 2024, Security Command Center will discontinue historical snapshot capabilities in the Security Command Center API, which were used to query for findings at a particular point in time.

### "Google SecOps events schema \_|\_ Google Security Operations \_|\_ Google\

- URL: [https://docs.cloud.google.com/chronicle/docs/reports/events-schema-overview](https://docs.cloud.google.com/chronicle/docs/reports/events-schema-overview)
- Source ID: `site-docs-root-2`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- The amount of time it takes for data to appear in the events table depends on the difference between when the device records the event, the metadata.event timestamp , and when that event is ingested to Google Security Operations SIEM, the metadata.ingested timestamp .
- The following summarizes the time it takes for data to appear in the events table after it is received by Google Security Operations: If the difference is less than two hours, then data appears approximately 2 hours after it is ingested.
- Here are examples: 2022-05-20 00:00:00 UTC 2022-05-20 01:00:00 UTC 2022-05-20 02:00:00 UTC 2022-05-20 03:00:00 UTC For example, the value 2022-05-20 00:00:00 UTC labels data with an event timestamp between 2022-05-20 00:00:00 UTC and 2022-05-20 00:59:59 UTC.
- Home Documentation Security Google Security Operations Reference Send feedback Stay organized with collections Save and categorize content based on your preferences.

### Detection services \_|\_ Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- Source ID: `site-docs-reference`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- JSON: leaked account credentials finding { "findings" : { "access" : {}, "assetDisplayName" : " PROJECT NAME " , "assetId" : "organizations/ ORGANIZATION ID /assets/ ASSET ID " , "canonicalName" : "projects/ PROJECT ID /sources/ SOURCE INSTANCE ID /findings/ FINDING ID " , "category" : "account has leaked credentials" , "contacts" : { "security" : { "contacts" : [ { "email" : " EMAIL ADDRESS " } ] } }, "createTime" : "2022-08-05T20:59:41.022Z" , "database" : {}, "eventTime" : "2022-08-05T20:59:40Z" , "exfiltration" : {}, "findingClass" : "THREAT" , "findingProviderId" : "organizations/ ORGANIZATION ID /firstPartyFindingProviders/cat" , "indicator" : {}, "kubernetes" : {}, "mitreAttack" : {}, "mute" : "UNDEFINED" , "name" : "organizations/ ORGANIZATION ID /sources/ SOURCE INSTANCE ID /findings/ FINDING ID " , "parent" : "organizations/ ORGANIZATION ID /sources/ SOURCE INSTANCE ID " , "parentDisplayName" : "Cloud Anomaly Detection" , "resourceName" : "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID " , "severity" : "CRITICAL" , "sourceDisplayName" : "Cloud Anomaly Detection" , "state" : "ACTIVE" , "vulnerability" : {}, "workflowState" : "NEW" }, "resource" : { "name" : "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID " , "display name" : " PROJECT NAME " , "project name" : "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID " , "project display name" : " PROJECT NAME " , "parent name" : "//cloudresourcemanager.googleapis.com/organizations/ ORGANIZATION ID " , "parent display name" : " ORGANIZATION NAME " , "type" : "google.cloud.resourcemanager.Project" , "folders" : [] }, "sourceProperties" : { "project identifier" : " PROJECT ID " , "compromised account" : " SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com" , "finding type" : "Potential compromise of a resource in your organization." , "summary message" : "We have detected leaked Service Account authentication credentials that could be potentially compromised." , "action taken" : "Notification sent" , "private key identifier" : " SERVICE ACCOUNT KEY ID " , "url" : "https://github.com/ KEY FILE PATH / KEY FILE NAME .json" } } Container Threat Detection Premium and Enterprise service tiers Container Threat Detection can detect the most common container runtime attacks and alert you in Security Command Center and optionally in Cloud Logging.
- To see these findings, enable any of the following GKE security posture dashboard features: GKE security posture dashboard pane Security Command Center finding class Workload configuration auditing 1 MISCONFIGURATION Top threats 2 THREAT Container OS vulnerability scanning 1 Language package vulnerability scanning 1 Actionable security bulletins 1 ( Preview ) Top software vulnerabilities 2 ( Preview ) VULNERABILITY Available only if you enable this feature in GKE.
- You can filter in the following investigative views: Risk Overview > All risk dashboard Risk Overview > Data dashboard Findings page Issues page Compliance > Monitor (New) tab Compliance > Monitor (New) > Framework Details page The application filter is available when viewing data for an organization and lists applications that are created in App Hub and deployed in the same organization where Security Command Center was activated.
- Standard-legacy, Standard, Premium, and Enterprise service tiers This page contains a list of the detection services, sometimes also referred to as security sources , that Security Command Center uses to detect security issues in your cloud environments.

