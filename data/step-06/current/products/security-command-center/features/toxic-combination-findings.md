---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.791Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Toxic combination findings"
feature_slug: "toxic-combination-findings"
latest_feature_date: "2024-10-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn"
  - "https://docs.cloud.google.com/security-command-center/docs/cases-overview"
keywords:
  - "toxic"
  - "combination"
  - "findings"
  - "security"
  - "command"
  - "center"
  - "now"
  - "generally"
---

# Toxic combination findings

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Security Command Center toxic combination findings are now generally available; The Risk Engine generates a finding when it detects a toxic combination during attack path simulations.

## Extended Definition

Security Command Center toxic combination findings are now generally available; The Risk Engine generates a finding when it detects a toxic combination during attack path simulations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn)
- [https://docs.cloud.google.com/security-command-center/docs/cases-overview](https://docs.cloud.google.com/security-command-center/docs/cases-overview)

## Supporting Pages

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 161
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see the following: Work with findings in the console Inspect resources related to findings June 25, 2024 Announcement Introducing the Security Command Center Risk Engine Security Command Center introduces Risk Engine as the name of the functionality that provides attack path simulations, attack exposure scores, attack path visualizations, and toxic combination findings.
- October 21, 2025 Change The release note for Security Command Center and attack path simulations , published on October 16, 2025, was updated to clarify that attack path simulations use Compute Engine and Google Kubernetes Engine OS and software vulnerability findings to detect toxic combinations and chokepoints.
- Feature Toxic combination findings release to Preview In the Enterprise tier of Security Command Center, the Risk Engine generates a finding when it detects a toxic combination during attack path simulations.
- September 04, 2024 Change Install new version of the Security Command Center Enterprise use case The installation and configuration of a new version of the SCC Enterprise - Cloud Orchestration & Remediation use case in the Security Operations console is required for the toxic combination functionality of Security Command Center Enterprise.

### "Attack exposure scores and attack paths \_|\_ Security Command Center \_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn](https://docs.cloud.google.com/security-command-center/docs/attack-exposure-learn)
- Source ID: `site-docs-reference`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- On the Cases page in Security Command Center Enterprise, you can also sort the toxic combinations and chokepoint cases by the attack exposure score.
- Issues in Security Command Center Premium or Enterprise, which contain toxic combinations and chokepoints .
- Similarly, a high attack-exposure score on any of the following does not mean that an attack is in progress: A Security Command Center finding or resource A Security Command Center Premium or Enterprise issue To watch for actual attacks, monitor the THREAT class findings produced by the threat detection services, like Event Threat Detection and Container Threat Detection .
- Insight reporting: Based on the simulations, Security Command Center assigns attack exposure scores to your high-value resources and to the findings that expose them and visualizes the potential paths an attacker could take to those resources.

### Cases overview \_|\_ Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/cases-overview](https://docs.cloud.google.com/security-command-center/docs/cases-overview)
- Source ID: `site-docs-reference`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Overview In Security Command Center, you use cases to obtain details about findings, attach playbooks to finding alerts, apply automatic threat responses, and track the remediation of security issues.
- Findings flow In Security Command Center Enterprise, there are two flows for findings: Security Command Center threat findings go through the security information and event management (SIEM) module.
- By default, cases containing threat findings have no related tickets even when you integrate the ticketing system with your Security Command Center Enterprise instance.
- When the finding severity changes, Security Command Center automatically updates the case priority to match the highest severity property among all findings in a case.

