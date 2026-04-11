---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:03:23.576Z"
product_name: "Access Context Manager"
product_slug: "access-context-manager"
feature_name: "Scoped policies for VPC Service Controls administration"
feature_slug: "scoped-policies-for-vpc-service-controls-administration"
latest_feature_date: "2022-03-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/access-context-manager/docs/create-basic-access-level"
keywords:
  - "folder-level VPC-SC admin"
  - "VPC-SC admin delegation"
  - "delegated perimeter administration"
  - "project-level VPC-SC admin"
  - "VPC Service Controls scoped policies"
  - "scoped policy administration"
  - "scoped admin policy"
  - "scoped policy"
---

# Scoped policies for VPC Service Controls administration

Product: Access Context Manager
Coverage: LOW

## Step 02 Summary

Scoped policies enable delegation of VPC Service Controls perimeter and access-level administration to folder- and project-level administrators.

## Extended Definition

In Access Context Manager, a scoped policy is a policy context used when creating access levels for VPC Service Controls, and the scoped policy must be specified explicitly via Google Cloud CLI or API. This feature indicates that, unlike many other operations, selecting a scoped policy is not supported in the Google Cloud Console workflow for creating a basic access level.

## Evidence Summary

The cited page confirms scoped-policy selection behavior during access-level creation and explicitly states this selection is unavailable in the console but possible through CLI or API.

## Source Links

- [https://docs.cloud.google.com/access-context-manager/docs/create-basic-access-level](https://docs.cloud.google.com/access-context-manager/docs/create-basic-access-level)

## Supporting Pages

### "Creating a basic access level \_|\_ Access Context Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/access-context-manager/docs/create-basic-access-level](https://docs.cloud.google.com/access-context-manager/docs/create-basic-access-level)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: MODERATE
- Re-rank rationale: The page contains a direct note about scoped policy selection requiring CLI/API when creating access levels, which is relevant contextual evidence for scoped policy behavior though not the full VPC Service Controls administration model.

Evidence snippets:
- Note: In Access Context Manager, you cannot use the Google Cloud console to select a scoped policy under which you want to create an access level.
- To specify the scoped policy under which to create the access level, you can use the Google Cloud CLI or the API.

