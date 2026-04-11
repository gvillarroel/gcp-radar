---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:56.166Z"
product_name: "Security Command Center"
product_slug: "security-command-center"
feature_name: "Execution: Program Run with Disallowed HTTP Proxy Env"
feature_slug: "execution-program-run-with-disallowed-http-proxy-env"
latest_feature_date: "2025-03-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/security-command-center/docs/access-control"
  - "https://docs.cloud.google.com/security-command-center/docs/reference/rest"
  - "https://docs.cloud.google.com/security-command-center/docs/ciem-overview?hl=en"
keywords:
  - "execution"
  - "program"
  - "run"
  - "with"
  - "disallowed"
  - "http"
  - "proxy"
  - "env"
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

- [https://docs.cloud.google.com/security-command-center/docs/access-control](https://docs.cloud.google.com/security-command-center/docs/access-control)
- [https://docs.cloud.google.com/security-command-center/docs/reference/rest](https://docs.cloud.google.com/security-command-center/docs/reference/rest)
- [https://docs.cloud.google.com/security-command-center/docs/ciem-overview?hl=en](https://docs.cloud.google.com/security-command-center/docs/ciem-overview?hl=en)

## Supporting Pages

### Access control with IAM | Security Command Center | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/access-control](https://docs.cloud.google.com/security-command-center/docs/access-control)
- Source ID: `site-iam-reference`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- Access control with IAM Security Command Center Google Cloud Documentation Source URL: https://docs.cloud.google.com/security-command-center/docs/access-control Security Command Center uses Identity and Access Management (IAM) to control access to resources at different levels of your resource hierarchy.
- You use IAM roles to control who can do what with assets, findings, and security sources in your ...

### Security Command Center API | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/reference/rest](https://docs.cloud.google.com/security-command-center/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 27
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Security Command Center API Google Cloud Documentation Source URL: https://docs.cloud.google.com/security-command-center/docs/reference/rest https://securitycenter.googleapis.com/$discovery/rest?version=v1p1beta1

### Overview of Cloud Infrastructure Entitlement Management | Security Command Center | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/security-command-center/docs/ciem-overview?hl=en](https://docs.cloud.google.com/security-command-center/docs/ciem-overview?hl=en)
- Source ID: `site-docs-root`
- Final score: 21
- Re-rank relevance: N/A

Evidence snippets:
- Overview of Cloud Infrastructure Entitlement Management Security Command Center Google Cloud Documentation Source URL: https://docs.cloud.google.com/security-command-center/docs/ciem-overview?hl=en With CIEM, Security Command Center presents Google Cloud, AWS, and Microsoft Azure (Preview) identity and access findings categorically on the Identity and access findings card of the Security Command Center Risk Overview page.

