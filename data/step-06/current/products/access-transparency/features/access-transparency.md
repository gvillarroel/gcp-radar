---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:03:33.570Z"
product_name: "Access Transparency"
product_slug: "access-transparency"
feature_name: "Access Transparency"
feature_slug: "access-transparency"
latest_feature_date: "2025-03-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iam/docs/roles-permissions/axt"
  - "https://docs.cloud.google.com/assured-workloads/access-transparency/docs"
  - "https://docs.cloud.google.com/assured-workloads/access-transparency/docs/overview"
keywords:
  - "Access Transparency supported features"
  - "Access Transparency service scope"
  - "Access Transparency program"
  - "Enable Access Transparency"
  - "AT service"
  - "Access Transparency access logs"
  - "Access Transparency service support"
---

# Access Transparency

Product: Access Transparency
Coverage: MEDIUM

## Step 02 Summary

Access Transparency now provides GA-stage support for itself.

## Extended Definition

Access Transparency is a Google Cloud capability documented with guidance for enabling the service and for understanding and using its logs, including Access Transparency logs for Google Workspace. IAM control for this feature is exposed through the `roles/axt.admin` role (`axt.admin`), which includes permissions to read/set Access Transparency labels and to read organization/project metadata (for example `resourcemanager.organizations.get`, `resourcemanager.projects.get`, and `resourcemanager.projects.list`).

## Evidence Summary

The cited pages provide evidence of role-based access control for Access Transparency and that Google Cloud documentation covers enabling and viewing Access Transparency logs, but the snippets alone do not explicitly confirm GA-stage lifecycle status.

## Source Links

- [https://docs.cloud.google.com/iam/docs/roles-permissions/axt](https://docs.cloud.google.com/iam/docs/roles-permissions/axt)
- [https://docs.cloud.google.com/assured-workloads/access-transparency/docs](https://docs.cloud.google.com/assured-workloads/access-transparency/docs)
- [https://docs.cloud.google.com/assured-workloads/access-transparency/docs/overview](https://docs.cloud.google.com/assured-workloads/access-transparency/docs/overview)

## Supporting Pages

### "Access Transparency roles and permissions \_|\_ Identity and Access Management\

- URL: [https://docs.cloud.google.com/iam/docs/roles-permissions/axt](https://docs.cloud.google.com/iam/docs/roles-permissions/axt)
- Source ID: `site-iam-reference`
- Final score: 64
- Re-rank relevance: STRONG
- Re-rank rationale: This page is explicitly about Access Transparency roles and permissions, providing direct IAM definition and access control details for the feature.

Evidence snippets:
- Access Transparency roles Role Permissions Access Transparency Admin ( roles/ axt.admin ) Enable Access Transparency for Organization Lowest-level resources where you can grant this role: Project axt. axt.labels.get axt.labels.set resourcemanager. organizations. get resourcemanager.projects.get resourcemanager.projects.list Access Transparency permissions Permission Included in roles axt.labels.get Access Transparency Admin ( roles/ axt.admin ) Service agent roles Warning: Don't grant service agent roles to any principals except service agents .

### Access Transparency documentation \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-transparency/docs](https://docs.cloud.google.com/assured-workloads/access-transparency/docs)
- Source ID: `site-docs-reference`
- Final score: 64
- Re-rank relevance: STRONG
- Re-rank rationale: The page is the official Access Transparency documentation and directly defines its purpose, controls, and usage.

Evidence snippets:
- Documentation resources Find quickstarts and guides, review key references, and get help with common issues. format list numbered Guides Overview of Access Transparency Privileged access at Google Cloud Supported services Enable Access Transparency Understand and use Access Transparency logs View Access Transparency logs for Google Workspace info Resources Getting support Release notes Pricing Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Overview of Access Transparency \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-transparency/docs/overview](https://docs.cloud.google.com/assured-workloads/access-transparency/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 62
- Re-rank relevance: STRONG
- Re-rank rationale: The page is the official Access Transparency overview and directly defines the feature, including what it logs, why it exists, and how it works with Access Approval and Cloud Audit Logs.

