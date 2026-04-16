---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T13:09:48.702Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Security Command Center data residency controls"
feature_slug: "security-command-center-data-residency-controls"
latest_feature_date: "2025-05-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/activate-enterprise-tier"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview"
  - "https://docs.cloud.google.com/security-command-center/docs/asm-allow-access-vpcsc"
keywords:
  - "security"
  - "command"
  - "center"
  - "residency"
  - "controls"
  - "enforces"
  - "rest"
  - "use"
---

# Security Command Center data residency controls

Product: Security Command Center
Coverage: MEDIUM

## Step 02 Summary

Enforces data residency controls at rest, in use, and in transit when Security Command Center is first enabled with EU or US residency.

## Extended Definition

Enforces data residency controls at rest, in use, and in transit when Security Command Center is first enabled with EU or US residency.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/security-command-center/docs/activate-enterprise-tier](https://docs.cloud.google.com/security-command-center/docs/activate-enterprise-tier)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- [https://docs.cloud.google.com/security-command-center/docs/asm-allow-access-vpcsc](https://docs.cloud.google.com/security-command-center/docs/asm-allow-access-vpcsc)

## Supporting Pages

### "Activate the Security Command Center Enterprise tier \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/security-command-center/docs/activate-enterprise-tier](https://docs.cloud.google.com/security-command-center/docs/activate-enterprise-tier)
- Source ID: `site-docs-reference`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- For the Enterprise service tier, before you activate Security Command Center with data residency controls, you must contact your Google Cloud account representative and schedule a date and time when you will activate Security Command Center.
- For the Enterprise service tier, before you activate Security Command Center with data residency controls, you must contact your Google Cloud account representative and schedule a date and time when you will activate Security Command Center.
- Important : You must use the jurisdictional Google Cloud console to activate Security Command Center with data residency controls.
- Verify organization policies If your organization policies are set to restrict resource usage , verify that the following APIs are permitted: chronicle.googleapis.com cloudsecuritycompliance.googleapis.com securitycenter.googleapis.com securitycentermanagement.googleapis.com Create a management project Security Command Center Enterprise requires a project, which is called the management project , to enable Google SecOps and Mandiant Attack Surface Management integration.

### Security Command Center release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-rapid-vulnerability-detection-overview)
- Source ID: `site-docs-reference`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Feature When you enable Security Command Center for the first time in an organization, and you enable data residency in the European Union or United States, data residency controls are enforced at rest, in use, and in transit.
- March 08, 2021 Change Security Health Analytics, a built-in service of Security Command Center, launched new detectors in general availability: Detects resources that are not using customer-managed encryption keys (CMEK) BUCKET CMEK DISABLED DISK CMEK DISABLED NODEPOOL BOOK CMEK DISABLED SQL CMEK DISABLED Detects vulnerabilities in Compute Engine instances DEFAULT SERVICE ACCOUNT USED SHIELDED VM DISABLED Detects publicly accessible Cloud KMS keys KMS PUBLIC KEY Detects out-of-region Compute Engine resources ORG POLICY LOCATION RESTRICTION Detects misconfiguration of SQL instances SQL CROSS DB OWNERSHIP CHAINING SQL CONTAINED DATABASE AUTHENTICATION SQL CROSS DB OWNERSHIP CHAINING SQL LOCAL INFILE SQL LOG CHECKPOINTS DISABLED SQL LOG CONNECTIONS DISABLED SQL LOG DISCONNECTIONS DISABLED SQL LOG LOCK WAITS DISABLED SQL LOG MIN DURATION STATEMENT ENABLED SQL LOG MIN ERROR STATEMENT SQL LOG TEMP FILES For more information on these and other Security Health Analytics detectors, see Vulnerabilities findings .
- April 01, 2024 Fixed The following Security Health Analytics misconfiguration detectors have changed to check for overly restrictive flag values that might prevent error messages from being written to the logs: SQL LOG ERROR VERBOSITY SQL LOG MIN ERROR STATEMENT SEVERITY For the flag values that the detectors check for, see: SQL log error verbosity SQL log min error statement severity March 26, 2024 Feature GKE security posture recommendations released to Preview Recommendations from GKE security posture are now available as findings in all tiers of Security Command Center as a Preview release.
- Between March 31, 2023 and May 4, 2023, the following detectors might have been counted and grouped under the incorrect CIS level on the Compliance tab of Security Command Center: API KEY EXISTS API KEY APIS UNRESTRICTED API KEY NOT ROTATED FIREWALL NOT MONITORED ROUTE NOT MONITORED NETWORK NOT MONITORED BUCKET IAM NOT MONITORED SQL INSTANCE NOT MONITORED VPC FLOW LOGS SETTINGS NOT RECOMMENDED SQL LOG STATEMENT ACCESS TRANSPARENCY DISABLED April 26, 2023 Feature Event Threat Detection, a built-in service of Security Command Center, launched the following new rules to Preview .

### "Use Mandiant Attack Surface Management with VPC Service Controls \_|\_ Security\

- URL: [https://docs.cloud.google.com/security-command-center/docs/asm-allow-access-vpcsc](https://docs.cloud.google.com/security-command-center/docs/asm-allow-access-vpcsc)
- Source ID: `site-docs-root`
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Security Security Command Center Guides Send feedback Use Mandiant Attack Surface Management with VPC Service Controls Stay organized with collections Save and categorize content based on your preferences.
- Create the ingress rules To allow Mandiant Attack Surface Management in Security Command Center within VPC Service Controls perimeters, add the required ingress rules in those perimeters.
- Enterprise service tier (not available if data residency controls are enabled) This document describes how to add ingress rules to allow Mandiant Attack Surface Management within VPC Service Controls perimeters.
- To restrict services in projects that you want Mandiant Attack Surface Management to monitor if your organization uses VPC Service Controls, perform this task.

