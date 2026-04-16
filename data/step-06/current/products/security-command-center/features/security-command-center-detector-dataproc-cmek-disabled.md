---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.912Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Security Command Center detector: Dataproc CMEK disabled"
feature_slug: "security-command-center-detector-dataproc-cmek-disabled"
latest_feature_date: "2023-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview"
keywords:
  - "security"
  - "command"
  - "center"
  - "detector"
  - "dataproc"
  - "cmek"
  - "disabled"
  - "detects"
---

# Security Command Center detector: Dataproc CMEK disabled

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Detects when Dataproc CMEK is disabled.

## Extended Definition

Detects when Dataproc CMEK is disabled.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- March 08, 2021 Change Security Health Analytics, a built-in service of Security Command Center, launched new detectors in general availability: Detects resources that are not using customer-managed encryption keys (CMEK) BUCKET CMEK DISABLED DISK CMEK DISABLED NODEPOOL BOOK CMEK DISABLED SQL CMEK DISABLED Detects vulnerabilities in Compute Engine instances DEFAULT SERVICE ACCOUNT USED SHIELDED VM DISABLED Detects publicly accessible Cloud KMS keys KMS PUBLIC KEY Detects out-of-region Compute Engine resources ORG POLICY LOCATION RESTRICTION Detects misconfiguration of SQL instances SQL CROSS DB OWNERSHIP CHAINING SQL CONTAINED DATABASE AUTHENTICATION SQL CROSS DB OWNERSHIP CHAINING SQL LOCAL INFILE SQL LOG CHECKPOINTS DISABLED SQL LOG CONNECTIONS DISABLED SQL LOG DISCONNECTIONS DISABLED SQL LOG LOCK WAITS DISABLED SQL LOG MIN DURATION STATEMENT ENABLED SQL LOG MIN ERROR STATEMENT SQL LOG TEMP FILES For more information on these and other Security Health Analytics detectors, see Vulnerabilities findings .
- The following detectors are new for v1.3.0: Access transparency disabled Cloud Asset API disabled Dataproc CMEK disabled Essential contacts not configured Flow logs settings not recommended The following detectors have been updated: Audit logging disabled For more information about Security Command Center support for standards and compliance, see the following: Detectors and compliance CIS Google Cloud Computing Platform Benchmarks March 23, 2023 Feature The version 3.0 release of the Google SCC App for QRadar , which lets you send Security Command Center data to QRadar v7.4.1FP2+, is generally available.
- July 19, 2021 Feature Security Health Analytics , a built-in service of Security Command Center, has launched a new detector, DATASET CMEK DISABLED , in general availability.
- The detector, available to Security Command Center Premium customers, detects BigQuery datasets that are not encrypted using customer-managed encryption keys (CMEK).

### Detection services \_|\_ Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- Source ID: `site-docs-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Standard, Premium, and Enterprise service tiers The Vulnerability Assessment for Google Cloud service detects software vulnerabilities in the following resources on the Google Cloud platform: Running Compute Engine VM instances Nodes in GKE Standard clusters Containers running in GKE Standard and GKE Autopilot clusters For each detected vulnerability, Vulnerability Assessment for Google Cloud generates a Vulnerability class finding in the Software vulnerability or OS vulnerability finding category in Security Command Center.
- In the Enterprise or Premium tier of Security Command Center, the Risk Engine detects groups of security issues that, when they occur together in a particular pattern, create a path to one or more of your high-value resources that a determined attacker could potentially use to reach and compromise those resources.
- Depending on the Security Command Center service tier you are using, the available detectors differ: In the Standard-legacy tier, Security Health Analytics includes only a basic group of medium-severity and high-severity vulnerability detectors.
- Because there are more than 150 built-in infoType detectors in Sensitive Data Protection, all possible Security Command Center finding categories aren't listed here.

### "Overview of Event Threat Detection \_|\_ Security Command Center \_|\_ Google\

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-event-threat-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Note : If Security Command Center is activated at the organization level at any tier, then this detector uses an organization's existing IAM policies as context.
- Cloud IDS detects layer 7 attacks by analyzing mirrored packets and, when a threat event is detected, sends a threat-class finding to Security Command Center.
- If Security Command Center activation is only at the project level, then the detector uses only the project's IAM policies as context.
- When Event Threat Detection detects a threat, it writes a finding to Security Command Center.

