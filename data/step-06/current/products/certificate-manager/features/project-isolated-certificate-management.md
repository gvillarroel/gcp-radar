---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:53:06.936Z"
product_name: "Certificate Manager"
product_slug: "certificate-manager"
feature_name: "Project-isolated certificate management"
feature_slug: "project-isolated-certificate-management"
latest_feature_date: "2024-02-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/certificate-manager/docs/certificates"
  - "https://docs.cloud.google.com/certificate-manager/docs/dns-authorizations"
  - "https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-dns-auth-cross-reg"
keywords:
  - "project-isolated certificate management"
  - "project-level certificate isolation"
  - "per-project certificate management"
  - "separate project authorization"
  - "project-level isolation"
  - "per-project certs"
  - "project-scoped certificates"
---

# Project-isolated certificate management

Product: Certificate Manager
Coverage: LOW

## Step 02 Summary

Certificate Manager supports managing certificates independently per project with separate authorization.

## Extended Definition

Certificate Manager provides project-isolated certificate management through `PER_PROJECT_RECORD` DNS authorizations, which are used to independently manage certificates across multiple Google Cloud projects. In this model, DNS authorizations and certificates are created under a target Google Cloud project (including `/v1/projects/{PROJECT_ID}/...` API paths), and Google states those project resources are self-contained and do not interact with those in other projects. This makes certificate and validation state effectively partitioned by project when using per-project DNS authorization.

## Evidence Summary

The pages define project-targeted IAM/API usage and explicitly describe `PER_PROJECT_RECORD` per-project DNS authorization with resources that remain independent between projects.

## Source Links

- [https://docs.cloud.google.com/certificate-manager/docs/certificates](https://docs.cloud.google.com/certificate-manager/docs/certificates)
- [https://docs.cloud.google.com/certificate-manager/docs/dns-authorizations](https://docs.cloud.google.com/certificate-manager/docs/dns-authorizations)
- [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-dns-auth-cross-reg](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-dns-auth-cross-reg)

## Supporting Pages

### Manage certificates \_|\_ Certificate Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/certificate-manager/docs/certificates](https://docs.cloud.google.com/certificate-manager/docs/certificates)
- Source ID: `site-docs-root`
- Final score: 66
- Re-rank relevance: MODERATE
- Re-rank rationale: It explicitly scopes certificate-manager actions to the target Google Cloud project and requires project-level IAM roles, which supports project-isolated certificate operations though it does not detail separate authorization workflows.

### Manage DNS authorizations \_|\_ Certificate Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/certificate-manager/docs/dns-authorizations](https://docs.cloud.google.com/certificate-manager/docs/dns-authorizations)
- Source ID: `site-docs-root`
- Final score: 58
- Re-rank relevance: N/A

### "Deploy a cross-region Google-managed certificate with DNS authorization\

- URL: [https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-dns-auth-cross-reg](https://docs.cloud.google.com/certificate-manager/docs/deploy-google-managed-dns-auth-cross-reg)
- Source ID: `site-iam-reference`
- Final score: 56
- Re-rank relevance: WEAK
- Re-rank rationale: The page mentions project selection/creation and IAM roles for setup, but it does not describe project-isolated certificate management as a feature.

