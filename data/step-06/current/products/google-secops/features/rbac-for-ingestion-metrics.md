---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:24:01.904Z"
product_name: "Google SecOps"
product_slug: "google-secops"
feature_name: "RBAC for ingestion metrics"
feature_slug: "rbac-for-ingestion-metrics"
latest_feature_date: "2026-02-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/chronicle/docs/administration/rbac"
  - "https://docs.cloud.google.com/chronicle/docs/secops/release-notes"
  - "https://docs.cloud.google.com/chronicle/docs/release-notes"
keywords:
  - "rbac"
  - "for"
  - "ingestion"
  - "metrics"
  - "role"
  - "based"
  - "access"
  - "control"
---

# RBAC for ingestion metrics

Product: Google SecOps
Coverage: LOW

## Step 02 Summary

Role-based access control now restricts visibility of ingestion metrics in the Data Ingestion and Health dashboard by business scope.

## Extended Definition

Role-based access control now restricts visibility of ingestion metrics in the Data Ingestion and Health dashboard by business scope.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/chronicle/docs/administration/rbac](https://docs.cloud.google.com/chronicle/docs/administration/rbac)
- [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)

## Supporting Pages

### "Role-Based Access Control (RBAC) User Guide \_|\_ Google Security Operations\

- URL: [https://docs.cloud.google.com/chronicle/docs/administration/rbac](https://docs.cloud.google.com/chronicle/docs/administration/rbac)
- Source ID: `site-docs-reference`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Role-Based Access Control (RBAC) User Guide Supported in: Google secops SIEM Role-based access control (RBAC) enables an administrator to tailor access to Google Security Operations features based on an employee's role in your organization.
- Important: This document describes the Google SecOps roles and groups available in the Google SecOps RBAC feature that don't use IAM for feature access control.
- Google Security Operations includes the following predefined roles: Administrator—Manages the role-based access control policies for your enterprise.
- Permissions Permissions provide the authorization needed to perform a single controlled action in Google Security Operations, including (see the user interface for the complete list of permissions): View rule Modify rule Edit feedback Edit reference list View RBAC permissions If a user does not have permissions for an action, the associated feature is disabled.

### Google Security Operations release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/secops/release-notes](https://docs.cloud.google.com/chronicle/docs/secops/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Feature RBAC for ingestion metrics Administrators can now use RBAC for ingestion metrics to restrict visibility of system health data, such as ingestion volume, errors, and throughput, based on a user's business scope.
- The experiments comply with the Role-Based Access Control (RBAC) configuration of your environment, and they have streamlined configurations with clear actionable results and output.
- March 17, 2026 Announcement Unified Feature Role-based Access Control (RBAC) is now in General Availability (GA).
- Role-based access control (RBAC) has been added to manage access to data tables.

### Google Security Operations SIEM release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/chronicle/docs/release-notes](https://docs.cloud.google.com/chronicle/docs/release-notes)
- Source ID: `site-docs-reference-2`
- Final score: 172
- Re-rank relevance: N/A

Evidence snippets:
- Feature RBAC for ingestion metrics Administrators can now use RBAC for ingestion metrics to restrict visibility of system health data, such as ingestion volume, errors, and throughput, based on a user's business scope.
- December 14, 2021 Feature Role-based access control (RBAC) Role-based access control (RBAC) enables you to tailor access to Chronicle features based on an employee's role in the organization.
- February 15, 2022 Feature DeleteSubject The DeleteSubject method has been added to the Chronicle Role-Based Access Control (RBAC) API.
- These new rule sets help identify Kubernetes activity associated with abuse of role-based access controls (RBAC).

