---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:19.413Z"
product_name: "Firestore"
product_slug: "firestore"
feature_name: "MCP use control with organization policies"
feature_slug: "mcp-use-control-with-organization-policies"
latest_feature_date: "2026-02-17"
deprecation_date: "2026-03-17"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam"
  - "https://docs.cloud.google.com/datastore/docs/access/iam"
  - "https://docs.cloud.google.com/firestore/native/docs/security/iam"
keywords:
  - "mcp"
  - "use"
  - "control"
  - "with"
  - "organization"
  - "policies"
  - "the"
  - "gcp"
---

# MCP use control with organization policies

Product: Firestore
Coverage: MEDIUM

## Step 02 Summary

The gcp.managed.allowedMCPServices organization policy constraint for controlling MCP use is deprecated in favor of IAM deny policies; deprecated on 2026-03-17.

## Extended Definition

The gcp.managed.allowedMCPServices organization policy constraint for controlling MCP use is deprecated in favor of IAM deny policies; deprecated on 2026-03-17.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam)
- [https://docs.cloud.google.com/datastore/docs/access/iam](https://docs.cloud.google.com/datastore/docs/access/iam)
- [https://docs.cloud.google.com/firestore/native/docs/security/iam](https://docs.cloud.google.com/firestore/native/docs/security/iam)

## Supporting Pages

### Identity and Access Management (IAM) | Firestore with MongoDB compatibility | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam](https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam)
- Source ID: `site-iam-reference`
- Final score: 66
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Identity and Access Management (IAM) Firestore with MongoDB compatibility Google Cloud Documentation Source URL: https://docs.cloud.google.com/firestore/mongodb-compatibility/docs/security/iam With IAM, every API method in Firestore requires that the account making the API request has the appropriate permissions to use the resource.
- Permissions are granted by setting policies that grant roles to a user, group, or service account.

### Identity and Access Management (IAM) | Datastore | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/datastore/docs/access/iam](https://docs.cloud.google.com/datastore/docs/access/iam)
- Source ID: `site-iam-reference`
- Final score: 48
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Identity and Access Management (IAM) Datastore Google Cloud Documentation Source URL: https://docs.cloud.google.com/datastore/docs/access/iam With IAM, every Datastore API method requires that the account making the API request has the appropriate permissions to use the resource.
- Permissions are granted by setting policies that grant roles to a user, group, or service account.

### Security for server client libraries | Firestore in Native mode | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/firestore/native/docs/security/iam](https://docs.cloud.google.com/firestore/native/docs/security/iam)
- Source ID: `site-iam-reference`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- Security for server client libraries Firestore in Native mode Google Cloud Documentation Source URL: https://docs.cloud.google.com/firestore/native/docs/security/iam With IAM, every API method in Firestore requires that the account making the API request has the appropriate permissions to use the resource.
- Permissions are granted by setting policies that grant roles to a user, group, or service account.

