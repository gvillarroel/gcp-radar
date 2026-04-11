---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:03:23.584Z"
product_name: "Access Context Manager"
product_slug: "access-context-manager"
feature_name: "Access Context Manager Require admin approval attribute"
feature_slug: "access-context-manager-require-admin-approval-attribute"
latest_feature_date: "2019-03-19"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes"
keywords:
  - "access level condition require admin approval"
  - "admin approval requirement"
  - "device policy admin approval"
  - "admin approval device attribute"
  - "access level admin approval"
  - "Require admin approval"
  - "requireAdminApproval"
  - "admin approval"
---

# Access Context Manager Require admin approval attribute

Product: Access Context Manager
Coverage: HIGH

## Step 02 Summary

The Require admin approval device-policy access-level attribute became available in Access Context Manager.

## Extended Definition

Access Context Manager includes a device-policy access-level attribute named `requireAdminApproval` for access levels. This attribute is a boolean (`true` or `false`) condition in YAML that checks whether the device has been approved by an administrator, and if omitted it defaults to `false`.

## Evidence Summary

The referenced Access Context Manager attribute documentation explicitly documents the `requireAdminApproval` device-policy access-level attribute, its admin-approval check behavior, supported values, and default value.

## Source Links

- [https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes](https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes)

## Supporting Pages

### "Access level attributes \_|\_ Access Context Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes](https://docs.cloud.google.com/access-context-manager/docs/access-level-attributes)
- Source ID: `site-api-reference`
- Final score: 40
- Re-rank relevance: STRONG
- Re-rank rationale: It contains a dedicated "Require admin approval" device-policy section describing behavior, mobile support, and the corresponding attribute syntax.

Evidence snippets:
- YAML allowedEncryptionStatuses Valid values One or more of the following values: ENCRYPTION UNSUPPORTED ENCRYPTED UNENCRYPTED API reference REST RPC Require admin approval Description Checks whether the device has been approved by a an administrator.
- Supports mobile devices Yes YAML requireAdminApproval Valid values true false If omitted, defaults to false .

