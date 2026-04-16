---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:49.132Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Indicator"
feature_slug: "indicator"
latest_feature_date: "2021-08-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources"
keywords:
  - "indicator"
  - "attribute"
  - "identifies"
  - "compromise"
  - "other"
  - "artifact"
  - "observed"
  - "network"
---

# Indicator

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

The Indicator attribute identifies an indicator of compromise or other artifact observed on a network or operating system.

## Extended Definition

The Indicator attribute identifies an indicator of compromise or other artifact observed on a network or operating system.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 209
- Re-rank relevance: N/A

Evidence snippets:
- This is an indicator of compromise (IoC), or artifact, observed on a network or in an operating system that, with high confidence, indicates a computer intrusion.
- Rapid Vulnerability Detection is a zero-configuration network and web application scanner that detects weak credentials, incomplete software installations, and other critical vulnerabilities that have a high likelihood of being exploited.
- These new attributes provide additional context about the principals that are associated with a finding. uris , a new attribute within the indicator attribute, lists any malicious URIs that are associated with a finding.
- The moduleName attribute, when included in a finding, identifies the full resource name of the specific detection module of the Security Command Center service that generated the finding.

### "Container Threat Detection overview \_|\_ Security Command Center \_|\_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 151
- Re-rank relevance: N/A

Evidence snippets:
- Attackers often use these tools to transfer sensitive data outside of the container, move laterally within the network to compromise other systems, or introduce malware for further malicious activities.
- Attackers frequently utilize techniques that mimic reverse shells to gain interactive control over a compromised system, allowing them to execute arbitrary commands remotely and bypass standard network security measures like firewall restrictions.
- The detector monitors for commands and processes associated with bulk data deletion, or other data-wiping tools, to identify suspicious activity that can compromise system integrity.
- Attackers can use Python to transfer tools or other files from an external system into a compromised environment and execute commands without binaries.

### Detection services \_|\_ Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- Source ID: `site-docs-reference`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- JSON: leaked account credentials finding { "findings" : { "access" : {}, "assetDisplayName" : " PROJECT NAME " , "assetId" : "organizations/ ORGANIZATION ID /assets/ ASSET ID " , "canonicalName" : "projects/ PROJECT ID /sources/ SOURCE INSTANCE ID /findings/ FINDING ID " , "category" : "account has leaked credentials" , "contacts" : { "security" : { "contacts" : [ { "email" : " EMAIL ADDRESS " } ] } }, "createTime" : "2022-08-05T20:59:41.022Z" , "database" : {}, "eventTime" : "2022-08-05T20:59:40Z" , "exfiltration" : {}, "findingClass" : "THREAT" , "findingProviderId" : "organizations/ ORGANIZATION ID /firstPartyFindingProviders/cat" , "indicator" : {}, "kubernetes" : {}, "mitreAttack" : {}, "mute" : "UNDEFINED" , "name" : "organizations/ ORGANIZATION ID /sources/ SOURCE INSTANCE ID /findings/ FINDING ID " , "parent" : "organizations/ ORGANIZATION ID /sources/ SOURCE INSTANCE ID " , "parentDisplayName" : "Cloud Anomaly Detection" , "resourceName" : "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID " , "severity" : "CRITICAL" , "sourceDisplayName" : "Cloud Anomaly Detection" , "state" : "ACTIVE" , "vulnerability" : {}, "workflowState" : "NEW" }, "resource" : { "name" : "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID " , "display name" : " PROJECT NAME " , "project name" : "//cloudresourcemanager.googleapis.com/projects/ PROJECT ID " , "project display name" : " PROJECT NAME " , "parent name" : "//cloudresourcemanager.googleapis.com/organizations/ ORGANIZATION ID " , "parent display name" : " ORGANIZATION NAME " , "type" : "google.cloud.resourcemanager.Project" , "folders" : [] }, "sourceProperties" : { "project identifier" : " PROJECT ID " , "compromised account" : " SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com" , "finding type" : "Potential compromise of a resource in your organization." , "summary message" : "We have detected leaked Service Account authentication credentials that could be potentially compromised." , "action taken" : "Notification sent" , "private key identifier" : " SERVICE ACCOUNT KEY ID " , "url" : "https://github.com/ KEY FILE PATH / KEY FILE NAME .json" } } Container Threat Detection Premium and Enterprise service tiers Container Threat Detection can detect the most common container runtime attacks and alert you in Security Command Center and optionally in Cloud Logging.
- Cloud Armor scrubs incoming requests for common web attacks or other Layer 7 attributes to potentially block traffic before it reaches your load-balanced backend services or backend buckets.
- Container Threat Detection detection instrumentation collects low-level behavior in the guest kernel and performs natural language processing on code to detect the following events: Added Binary Executed Added Library Loaded Command and Control: Steganography Tool Detected ( Preview ) Credential Access: Find Google Cloud Credentials Credential Access: GPG Key Reconnaissance Credential Access: Search Private Keys or Passwords Defense Evasion: Base64 ELF File Command Line Defense Evasion: Base64 Encoded Python Script Executed Defense Evasion: Base64 Encoded Shell Script Executed Defense Evasion: Launch Code Compiler Tool In Container ( Preview ) Execution: Added Malicious Binary Executed Execution: Added Malicious Library Loaded Execution: Built in Malicious Binary Executed Execution: Container Escape Execution: Fileless Execution in /memfd: Execution: Ingress Nightmare Vulnerability Execution ( Preview ) Execution: Kubernetes Attack Tool Execution Execution: Local Reconnaissance Tool Execution Execution: Malicious Python executed Execution: Modified Malicious Binary Executed Execution: Modified Malicious Library Loaded Execution: Netcat Remote Code Execution In Container Execution: Possible Arbitrary Command Execution through CUPS (CVE-2024-47076) Execution: Possible Remote Command Execution Detected ( Preview ) Execution: Program Run with Disallowed HTTP Proxy Env Execution: Socat Reverse Shell Detected Execution: Suspicious OpenSSL Shared Object Loaded Exfiltration: Launch Remote File Copy Tools in Container Impact: Detect Malicious Cmdlines ( Preview ) Impact: Remove Bulk Data From Disk Impact: Suspicious crypto mining activity using the Stratum Protocol Malicious Script Executed Malicious URL Observed Privilege Escalation: Abuse of Sudo For Privilege Escalation (CVE-2019-14287) Privilege Escalation: Fileless Execution in /dev/shm Privilege Escalation: Polkit Local Privilege Escalation Vulnerability (CVE-2021-4034) Privilege Escalation: Sudo Potential Privilege Escalation (CVE-2021-3156) Reverse Shell Unexpected Child Shell Learn more about Container Threat Detection .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

