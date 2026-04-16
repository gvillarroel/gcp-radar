---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:49.003Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Finding.indicator.signatures attribute"
feature_slug: "finding-indicator-signatures-attribute"
latest_feature_date: "2022-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview"
keywords:
  - "finding"
  - "indicator"
  - "signatures"
  - "attribute"
  - "lists"
  - "matched"
  - "indicate"
  - "process"
---

# Finding.indicator.signatures attribute

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

The attribute lists matched signatures that indicate a process is present in the environment.

## Extended Definition

The attribute lists matched signatures that indicate a process is present in the environment.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 226
- Re-rank relevance: N/A

Evidence snippets:
- The indicator.signatures[] attribute lists matched signatures that indicate that a given process is present in the environment.
- June 30, 2022 Feature The contacts and indicator.signatures attributes were added to the Finding object.
- These new attributes provide additional context about the principals that are associated with a finding. uris , a new attribute within the indicator attribute, lists any malicious URIs that are associated with a finding.
- May 27, 2022 Feature The compliances , exfiltration , and processes attributes were added to the Finding object.

### "Integrate Amazon GuardDuty with Google SecOps \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty](https://docs.cloud.google.com/chronicle/docs/soar/marketplace-integrations/amazon-guard-duty)
- Source ID: `site-docs-root-2`
- Final score: 83
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Table Columns: Finding ID Title Description Type Severity Count Resource ID Created at Updated at Account ID General Get all Trusted IP lists Description Get all trusted IP lists (IPSets) of the GuardDuty service specified by the detector ID.
- Reason: {0}''.format(error.Stacktrace) General List Findings for a Detector Lists all Amazon GuardDuty findings for the specified detector ID.
- Sort By String N/A No Represents the finding attribute (for example, accountId) to sort findings by.
- Max Findings To Fetch Integer 50 No Number of findings to process per one connector iteration.

### "Container Threat Detection overview \_|\_ Security Command Center \_|\_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 77
- Re-rank relevance: N/A

Evidence snippets:
- Execution: Possible Arbitrary Command Execution through CUPS (CVE-2024-47076) POSSIBLE ARBITRARY COMMAND EXECUTION THROUGH CUPS This rule detects the footmatic-rip process executing common shell programs, which may indicate that an attacker has exploited CVE-2024-47076.
- Impact: Remove Bulk Data From Disk REMOVE BULK DATA FROM DISK A process was detected performing bulk data deletion operations, which may indicate an attempt to erase evidence, disrupt services, or execute a data-wiping attack within the container environment.
- The detector checks URLs that are observed in the argument list of running processes against the lists of unsafe web resources that are maintained by the Google Safe Browsing service.
- If a process is launched from an in-memory file, it may indicate that an attacker is trying to bypass other methods of detection in order to execute malicious code.

