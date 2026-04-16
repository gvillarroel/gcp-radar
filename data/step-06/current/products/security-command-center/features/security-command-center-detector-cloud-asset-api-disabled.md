---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.911Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Security Command Center detector: Cloud Asset API disabled"
feature_slug: "security-command-center-detector-cloud-asset-api-disabled"
latest_feature_date: "2023-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-scan-latency-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources"
keywords:
  - "security"
  - "command"
  - "center"
  - "detector"
  - "asset"
  - "disabled"
  - "detects"
  - "when"
---

# Security Command Center detector: Cloud Asset API disabled

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Detects when the Cloud Asset API is disabled.

## Extended Definition

Detects when the Cloud Asset API is disabled.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-scan-latency-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-scan-latency-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)

## Supporting Pages

### Detection services \_|\_ Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- In the Enterprise or Premium tier of Security Command Center, the Risk Engine detects groups of security issues that, when they occur together in a particular pattern, create a path to one or more of your high-value resources that a determined attacker could potentially use to reach and compromise those resources.
- JSON: leaked account credentials finding { "findings" : { "access" : {}, "assetDisplayName" : " PROJECT NAME " , "assetId" : "organizations/ ORGANIZATION ID /assets/ ASSET ID " , "canonicalName" : "projects/ PROJECT ID /sources/ SOURCE INSTANCE ID /findings/ FINDING ID " , "category" : "account has leaked credentials" , "contacts" : { "security" : { "contacts" : [ { "email" : " EMAIL ADDRESS " } ] } }, "createTime" : "2022-08-05T20:59:41.022Z" , "database" : {}, "eventTime" : "2022-08-05T20:59:40Z" , "exfiltration" : {}, "findingClass" : "THREAT" , "findingProviderId" : "organizations/ ORGANIZATION ID /firstPartyFindingProviders/cat" , "indicator" : {}, "kubernetes" : {}, "mitreAttack" : {}, "mute" : "UNDEFINED" , "name" : "organizations/ ORGANIZATION ID /sources/ SOURCE INSTANCE ID /findings/ FINDING ID " , "parent" : "organizations/ ORGANIZATION ID /sources/ SOURCE INSTANCE ID " , "parentDisplayName" : "Cloud Anomaly Detection" , "resourceName" : "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID " , "severity" : "CRITICAL" , "sourceDisplayName" : "Cloud Anomaly Detection" , "state" : "ACTIVE" , "vulnerability" : {}, "workflowState" : "NEW" }, "resource" : { "name" : "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID " , "display name" : " PROJECT NAME " , "project name" : "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID " , "project display name" : " PROJECT NAME " , "parent name" : "//cloudresourcemanager.googleapis.com/organizations/ ORGANIZATION ID " , "parent display name" : " ORGANIZATION NAME " , "type" : "google.cloud.resourcemanager.Project" , "folders" : [] }, "sourceProperties" : { "project identifier" : " PROJECT ID " , "compromised account" : " SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com" , "finding type" : "Potential compromise of a resource in your organization." , "summary message" : "We have detected leaked Service Account authentication credentials that could be potentially compromised." , "action taken" : "Notification sent" , "private key identifier" : " SERVICE ACCOUNT KEY ID " , "url" : "https://github.com/ KEY FILE PATH / KEY FILE NAME .json" } } Container Threat Detection Premium and Enterprise service tiers Container Threat Detection can detect the most common container runtime attacks and alert you in Security Command Center and optionally in Cloud Logging.
- Standard, Premium, and Enterprise service tiers The Vulnerability Assessment for Google Cloud service detects software vulnerabilities in the following resources on the Google Cloud platform: Running Compute Engine VM instances Nodes in GKE Standard clusters Containers running in GKE Standard and GKE Autopilot clusters For each detected vulnerability, Vulnerability Assessment for Google Cloud generates a Vulnerability class finding in the Software vulnerability or OS vulnerability finding category in Security Command Center.
- You can filter in the following investigative views: Risk Overview > All risk dashboard Risk Overview > Data dashboard Findings page Issues page Compliance > Monitor (New) tab Compliance > Monitor (New) > Framework Details page The application filter is available when viewing data for an organization and lists applications that are created in App Hub and deployed in the same organization where Security Command Center was activated.

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- March 08, 2021 Change Security Health Analytics, a built-in service of Security Command Center, launched new detectors in general availability: Detects resources that are not using customer-managed encryption keys (CMEK) BUCKET CMEK DISABLED DISK CMEK DISABLED NODEPOOL BOOK CMEK DISABLED SQL CMEK DISABLED Detects vulnerabilities in Compute Engine instances DEFAULT SERVICE ACCOUNT USED SHIELDED VM DISABLED Detects publicly accessible Cloud KMS keys KMS PUBLIC KEY Detects out-of-region Compute Engine resources ORG POLICY LOCATION RESTRICTION Detects misconfiguration of SQL instances SQL CROSS DB OWNERSHIP CHAINING SQL CONTAINED DATABASE AUTHENTICATION SQL CROSS DB OWNERSHIP CHAINING SQL LOCAL INFILE SQL LOG CHECKPOINTS DISABLED SQL LOG CONNECTIONS DISABLED SQL LOG DISCONNECTIONS DISABLED SQL LOG LOCK WAITS DISABLED SQL LOG MIN DURATION STATEMENT ENABLED SQL LOG MIN ERROR STATEMENT SQL LOG TEMP FILES For more information on these and other Security Health Analytics detectors, see Vulnerabilities findings .
- The following detectors are new for v1.3.0: Access transparency disabled Cloud Asset API disabled Dataproc CMEK disabled Essential contacts not configured Flow logs settings not recommended The following detectors have been updated: Audit logging disabled For more information about Security Command Center support for standards and compliance, see the following: Detectors and compliance CIS Google Cloud Computing Platform Benchmarks March 23, 2023 Feature The version 3.0 release of the Google SCC App for QRadar , which lets you send Security Command Center data to QRadar v7.4.1FP2+, is generally available.
- Feature Detector for Container Threat Detection released to General Availability Container Threat Detection , a built-in service available in Security Command Center Premium and Enterprise, has launched three new detectors to General Availability : Execution: Container Escape : Detects when a process inside a container tries to break out of its isolation and interact with the host system or other containers.
- Between March 31, 2023 and May 4, 2023, the following detectors might have been counted and grouped under the incorrect CIS level on the Compliance tab of Security Command Center: API KEY EXISTS API KEY APIS UNRESTRICTED API KEY NOT ROTATED FIREWALL NOT MONITORED ROUTE NOT MONITORED NETWORK NOT MONITORED BUCKET IAM NOT MONITORED SQL INSTANCE NOT MONITORED VPC FLOW LOGS SETTINGS NOT RECOMMENDED SQL LOG STATEMENT ACCESS TRANSPARENCY DISABLED April 26, 2023 Feature Event Threat Detection, a built-in service of Security Command Center, launched the following new rules to Preview .

### When to expect findings in Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-scan-latency-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-scan-latency-overview)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For built-in and custom detectors, detection latencies are generally less than 15 minutes, from the time a log is written to when a finding is available in Security Command Center.
- How long the activation process and scans take to complete depends on a number of factors, including the number of assets and resources in your environment and whether Security Command Center is activated at the organization level or the project level .
- Scan latency When you set up Security Command Center, you decide which built-in and integrated services to enable, and select the Google Cloud resources that you want to have analyzed, or scanned, for threats and vulnerabilities.
- Asset scan Security Command Center conducts an initial asset scan to identify the total number, location, and state of projects, folders, files, clusters, identities, access policies, enrolled users, and other resources.

