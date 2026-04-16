---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.754Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Execution: Program Run with Disallowed HTTP Proxy Env"
feature_slug: "execution-program-run-with-disallowed-http-proxy-env"
latest_feature_date: "2025-03-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
keywords:
  - "execution"
  - "program"
  - "run"
  - "disallowed"
  - "http"
  - "proxy"
  - "env"
  - "detects"
---

# Execution: Program Run with Disallowed HTTP Proxy Env

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Detects container program execution that uses disallowed HTTP proxy environment variables.

## Extended Definition

Detects container program execution that uses disallowed HTTP proxy environment variables.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)

## Supporting Pages

### "Container Threat Detection overview \_|\_ Security Command Center \_|\_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 236
- Re-rank relevance: N/A

Evidence snippets:
- Disabled detectors The following detectors are disabled by default: Added Binary Executed Added Library Loaded Collection: Pam.d Modification ( Preview ) Credential Access: Access Sensitive Files on Nodes ( Preview ) Credential Access: Find Google Cloud Credentials Defense Evasion: Disable or modify Linux audit system ( Preview ) Defense Evasion: Launch Code Compiler Tool In Container Defense Evasion: Root Certificate Installed ( Preview ) Execution: Ingress Nightmare Vulnerability Execution ( Preview ) Execution: Program Run with Disallowed HTTP Proxy Env Execution: Suspicious Cron Modification ( Preview ) Exfiltration: Launch Remote File Copy Tools in Container Persistence: Modify ld.so.preload ( Preview ) To enable these detectors, see Enable or disable Container Threat Detection modules .
- Execution: Program Run with Disallowed HTTP Proxy Env PROGRAM RUN WITH DISALLOWED HTTP PROXY ENV A program was executed with an HTTP proxy environment variable that is disallowed.
- This detector monitors for the execution of programs with HTTP proxy environment variables that are specifically disallowed.
- Execution: Possible Arbitrary Command Execution through CUPS (CVE-2024-47076) POSSIBLE ARBITRARY COMMAND EXECUTION THROUGH CUPS This rule detects the footmatic-rip process executing common shell programs, which may indicate that an attacker has exploited CVE-2024-47076.

### "Cloud Run Threat Detection overview \_|\_ Security Command Center \_|\_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/cloud-run-threat-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- Execution: Program Run with Disallowed HTTP Proxy Env CLOUD RUN PROGRAM RUN WITH DISALLOWED HTTP PROXY ENV A program was executed with an HTTP proxy environment variable that is disallowed.
- Execution: Possible Arbitrary Command Execution through CUPS (CVE-2024-47076) CLOUD RUN POSSIBLE ARBITRARY COMMAND EXECUTION THROUGH CUPS This rule detects the foomatic-rip process executing common shell programs, which might indicate that an attacker has exploited CVE-2024-47076. foomatic-rip is part of the OpenPrinting CUPS, an open source printing service that is a part of many Linux distributions.
- Attackers might configure disallowed HTTP proxies to intercept sensitive information, route traffic through malicious servers, or establish covert communication channels.
- Detecting the execution of programs with these environment variables is crucial for maintaining network security and preventing data breaches.

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- Execution: Program Run with Disallowed HTTP Proxy Env Exfiltration: Launch Remote File Copy Tools in Container For more information, see Container Threat Detection detectors .
- Feature Detector for Container Threat Detection released to General Availability Container Threat Detection , a built-in service available in Security Command Center Premium and Enterprise, has launched three new detectors to General Availability : Execution: Container Escape : Detects when a process inside a container tries to break out of its isolation and interact with the host system or other containers.
- Execution: Local Reconnaissance Tool Execution : Detects when a local reconnaissance tool is executed within a container, suggesting that an attacker is gathering information about the container environment, such as network configurations, active processes, or mounted file systems.
- Execution: Kubernetes Attack Tool Execution : Detects when a Kubernetes attack tool is run inside a container, indicating a potential attempt to exploit vulnerabilities in the Kubernetes environment.

