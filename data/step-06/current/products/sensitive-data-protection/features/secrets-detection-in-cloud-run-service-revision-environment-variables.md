---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T12:39:34.304Z"
product_name: "Sensitive Data Protection"
product_slug: "sensitive-data-protection"
feature_name: "Secrets detection in Cloud Run service revision environment variables"
feature_slug: "secrets-detection-in-cloud-run-service-revision-environment-variables"
latest_feature_date: "2024-10-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sensitive-data-protection/docs/secrets-discovery"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources"
  - "https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview"
keywords:
  - "revision"
  - "environment"
  - "variables"
  - "secrets"
  - "detection"
---

# Secrets detection in Cloud Run service revision environment variables

Product: Sensitive Data Protection
Coverage: MEDIUM

## Step 02 Summary

Sensitive Data Protection can detect secrets in Cloud Run service revision environment variables and send findings to Security Command Center.

## Extended Definition

Sensitive Data Protection can detect secrets in Cloud Run service revision environment variables and send findings to Security Command Center.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sensitive-data-protection/docs/secrets-discovery](https://docs.cloud.google.com/sensitive-data-protection/docs/secrets-discovery)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- [https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview)

## Supporting Pages

### "Report secrets in environment variables to Security Command Center \_|\_\

- URL: [https://docs.cloud.google.com/sensitive-data-protection/docs/secrets-discovery](https://docs.cloud.google.com/sensitive-data-protection/docs/secrets-discovery)
- Source ID: `site-docs-reference-required-16`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- List all Secrets in environment variables findings state = "ACTIVE" AND NOT mute = "MUTED" AND category = "SECRETS IN ENVIRONMENT VARIABLES" List all Secrets in environment variables findings for a particular project state = "ACTIVE" AND NOT mute = "MUTED" AND category = "SECRETS IN ENVIRONMENT VARIABLES" AND resource . project name = "//cloudresourcemanager.googleapis.com/projects/ PROJECT NUMBER " Replace the following: PROJECT NUMBER : the numerical ID of the project that you want to query for Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Secrets in environment variables { "finding" : { "canonicalName" : "projects/ PROJECT NUMBER /sources/ SOURCE ID /findings/ FINDING ID " , "category" : "SECRETS IN ENVIRONMENT VARIABLES" , "compliances" : [ { "standard" : "cis" , "version" : "1.3" , "ids" : [ "1.18" ] } ], "createTime" : " DATE TIME " , "description" : "The affected resource is storing credentials or other secret information in its environment variables.
- Home Documentation Security Sensitive Data Protection Guides Send feedback Report secrets in environment variables to Security Command Center Stay organized with collections Save and categorize content based on your preferences.
- In Security Command Center, you can view Secrets in environment variables findings when you do the following: Review Sensitive Data Protection findings View or export a compliance report for the CIS 1.3 or CIS 2.0 standard.

### Detection services \_|\_ Security Command Center \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources)
- Source ID: `site-docs-reference-2`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Compliance standards : Not mapped Secrets in environment variables Category name in the API: SECRETS IN ENVIRONMENT VARIABLES Finding description : There are secrets —such as passwords, authentication tokens, and Google Cloud credentials—in environment variables.
- Supported assets : cloudfunctions. googleapis. com/ CloudFunction run. googleapis. com/ Revision Remediation : For Cloud Run functions environment variables, remove the secret from the environment variable and store it in Secret Manager instead.
- To enable this detector, see Report secrets in environment variables to Security Command Center in the Sensitive Data Protection documentation.
- For Cloud Run service revision environment variables, move all traffic off of the revision, and then delete the revision.

### "Container Threat Detection overview \_|\_ Security Command Center \_|\_\

- URL: [https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview](https://docs.cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview)
- Source ID: `site-docs-reference-2`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Report environment variables ( REPORT ENVIRONMENT VARIABLES ) Report CLI arguments ( REPORT CLI ARGUMENTS ) For instructions, see the following: Exclude environment variables from Container Threat Detection findings .
- Modules for reporting environment variables and CLI arguments in findings The following modules let you include or exclude environment variables and CLI arguments in Container Threat Detection findings.
- The detector looks for any process that has been executed from /dev/shm Privilege Escalation: Polkit Local Privilege Escalation Vulnerability (CVE-2021-4034) POLKIT LOCAL PRIVILEGE ESCALATION VULNERABILITY A non-root user has executed pkexec with environment variables that attempt to escalate privileges.
- Attackers might use code compilers within containers to develop malicious payloads, inject code into existing binaries, or create tools to bypass security controls, all while operating in a less scrutinized environment to evade detection on the host system.

