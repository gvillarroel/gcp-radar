---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:49.017Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Security Command Center error detectors"
feature_slug: "security-command-center-error-detectors"
latest_feature_date: "2022-04-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-scc-errors"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-scan-latency-overview"
keywords:
  - "security"
  - "command"
  - "center"
  - "error"
  - "detectors"
  - "report"
  - "configuration"
  - "errors"
---

# Security Command Center error detectors

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

The detectors report configuration errors that prevent Security Command Center and its services from functioning properly.

## Extended Definition

The detectors report configuration errors that prevent Security Command Center and its services from functioning properly.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-scc-errors](https://docs.cloud.google.com/security-command-center/docs/concepts-scc-errors)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-scan-latency-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-scan-latency-overview)

## Supporting Pages

### Overview of Security Command Center errors \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-scc-errors](https://docs.cloud.google.com/security-command-center/docs/concepts-scc-errors)
- Source ID: `site-docs-reference`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Standard-legacy, Standard, Premium, and Enterprise service tiers Error detectors generate findings that point to issues in the configuration of your Security Command Center environment.
- Mute behavior Findings belonging to the finding class SCC errors report issues that prevent Security Command Center from working as expected.
- This selection of error detectors addresses common Security Command Center misconfigurations and is not an exhaustive list.
- Pricing tier: Premium or Standard Supported assets cloudresourcemanager.googleapis.com/Organization cloudresourcemanager.googleapis.com/Project Batch scans : Every 30 minutes Fix this finding build Critical What's next Learn how to remediate Security Command Center errors .

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- November 07, 2022 Feature Security Command Center released two new error detectors: KTD blocked by admission controller KTD image pull failure These detectors report configuration errors that prevent the Container Threat Detection service from functioning properly.
- Error detectors report configuration errors that prevent Security Command Center and its services from functioning properly.
- March 08, 2021 Change Security Health Analytics, a built-in service of Security Command Center, launched new detectors in general availability: Detects resources that are not using customer-managed encryption keys (CMEK) BUCKET CMEK DISABLED DISK CMEK DISABLED NODEPOOL BOOK CMEK DISABLED SQL CMEK DISABLED Detects vulnerabilities in Compute Engine instances DEFAULT SERVICE ACCOUNT USED SHIELDED VM DISABLED Detects publicly accessible Cloud KMS keys KMS PUBLIC KEY Detects out-of-region Compute Engine resources ORG POLICY LOCATION RESTRICTION Detects misconfiguration of SQL instances SQL CROSS DB OWNERSHIP CHAINING SQL CONTAINED DATABASE AUTHENTICATION SQL CROSS DB OWNERSHIP CHAINING SQL LOCAL INFILE SQL LOG CHECKPOINTS DISABLED SQL LOG CONNECTIONS DISABLED SQL LOG DISCONNECTIONS DISABLED SQL LOG LOCK WAITS DISABLED SQL LOG MIN DURATION STATEMENT ENABLED SQL LOG MIN ERROR STATEMENT SQL LOG TEMP FILES For more information on these and other Security Health Analytics detectors, see Vulnerabilities findings .
- April 01, 2024 Fixed The following Security Health Analytics misconfiguration detectors have changed to check for overly restrictive flag values that might prevent error messages from being written to the logs: SQL LOG ERROR VERBOSITY SQL LOG MIN ERROR STATEMENT SEVERITY For the flag values that the detectors check for, see: SQL log error verbosity SQL log min error statement severity March 26, 2024 Feature GKE security posture recommendations released to Preview Recommendations from GKE security posture are now available as findings in all tiers of Security Command Center as a Preview release.

### When to expect findings in Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-scan-latency-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-scan-latency-overview)
- Source ID: `site-docs-reference`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Security Command Center runs error detectors, which detect configuration errors related to Security Command Center and its services.
- Security Command Center error detectors run periodically in batch mode.
- For more information, see Security Command Center errors .
- For more information, see Security Command Center errors .

