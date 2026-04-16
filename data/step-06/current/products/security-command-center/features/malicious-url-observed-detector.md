---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.959Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Malicious URL Observed detector"
feature_slug: "malicious-url-observed-detector"
latest_feature_date: "2022-12-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview"
keywords:
  - "malicious"
  - "url"
  - "observed"
  - "detector"
  - "container"
  - "threat"
  - "detection"
  - "checks"
---

# Malicious URL Observed detector

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Container Threat Detection detector that checks URLs observed in executable arguments against known phishing and malware URLs; The detector checks URLs observed in executable arguments against known phishing and malware URLs to identify malicious activity.

## Extended Definition

Container Threat Detection detector that checks URLs observed in executable arguments against known phishing and malware URLs; The detector checks URLs observed in executable arguments against known phishing and malware URLs to identify malicious activity.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview)

## Supporting Pages

### "Container Threat Detection overview \_|\_ Security Command Center \_|\_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 246
- Re-rank relevance: N/A

Evidence snippets:
- Malicious URL Observed MALICIOUS URL OBSERVED Container Threat Detection observed a malicious URL in the argument list of a running process.
- Disabled detectors The following detectors are disabled by default: Added Binary Executed Added Library Loaded Collection: Pam.d Modification ( Preview ) Credential Access: Access Sensitive Files on Nodes ( Preview ) Credential Access: Find Google Cloud Credentials Defense Evasion: Disable or modify Linux audit system ( Preview ) Defense Evasion: Launch Code Compiler Tool In Container Defense Evasion: Root Certificate Installed ( Preview ) Execution: Ingress Nightmare Vulnerability Execution ( Preview ) Execution: Program Run with Disallowed HTTP Proxy Env Execution: Suspicious Cron Modification ( Preview ) Exfiltration: Launch Remote File Copy Tools in Container Persistence: Modify ld.so.preload ( Preview ) To enable these detectors, see Enable or disable Container Threat Detection modules .
- Container Threat Detection detectors Container Threat Detection includes the following detectors: Detector Module Description Inputs to detection Added Binary Executed ADDED BINARY EXECUTED A binary that was not part of the original container image was executed.
- The following is the execution path when events are detected: Container Threat Detection passes event information and information that identifies the container through a user mode DaemonSet to a detector service for analysis.

### "Cloud Run Threat Detection overview \_|\_ Security Command Center \_|\_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Run Threat Detection runtime detectors monitor Cloud Run resources for suspicious binaries and libraries and use natural language processing (NLP) to detect malicious Bash and Python code.
- Malicious URL Observed CLOUD RUN MALICIOUS URL OBSERVED Cloud Run Threat Detection observed a malicious URL in the argument list of a running process.
- Execution: Modified Malicious Binary Executed CLOUD RUN MODIFIED MALICIOUS BINARY EXECUTED A binary that meets the following conditions was executed: Identified as malicious based on threat intelligence Included in the original container image Modified from the original container image during the runtime If a modified malicious binary is executed, it's a strong sign that an attacker has control of the workload and they're executing malicious software.
- Execution: Modified Malicious Library Loaded CLOUD RUN MODIFIED MALICIOUS LIBRARY LOADED A library that meets the following conditions was loaded: Identified as malicious based on threat intelligence Included in the original container image Modified from the original container image during the runtime If a modified malicious library is loaded, it's a strong sign that an attacker has control of the workload and they're executing malicious software.

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- Feature The Malicious URL Observed detector of Container Threat Detection, a built-in service of Security Command Center Premium, is now generally available .
- Feature Container Threat Detection, a built-in service of Security Command Center Premium, has launched a new detector, Malicious URL Observed , in Preview .
- Feature Container Threat Detection, a built-in service of Security Command Center Premium, has launched a new detector, Malicious Script Executed , in general availability.
- March 14, 2025 Change The Execution: Malicious Python Executed detector in Container Threat Detection released to General Availability .

