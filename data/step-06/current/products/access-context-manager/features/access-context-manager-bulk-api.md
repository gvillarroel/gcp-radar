---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:03:23.580Z"
product_name: "Access Context Manager"
product_slug: "access-context-manager"
feature_name: "Access Context Manager Bulk API"
feature_slug: "access-context-manager-bulk-api"
latest_feature_date: "2020-06-11"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/access-context-manager/docs/bulk-operations"
keywords:
  - "organizations access policy bulk replace"
  - "bulk replace access levels"
  - "replace all access levels"
  - "bulk replace API"
  - "replaceAllAccessLevels method"
  - "Access Context Manager Bulk API"
  - "bulk API for access levels"
  - "replaceAllAccessLevels"
---

# Access Context Manager Bulk API

Product: Access Context Manager
Coverage: HIGH

## Step 02 Summary

The Access Context Manager Bulk API is generally available for replacing all access levels in an organization in a single operation; The Access Context Manager Bulk API is available in beta for bulk replacement of organizational access levels.

## Extended Definition

The Access Context Manager Bulk API supports bulk replacement of access levels via the `accessLevels.replaceAll` API method (and the equivalent `gcloud access-context-manager levels replace-all` CLI command) using a source YAML file. A bulk replace operation replaces the current set of access levels for the target policy, and any existing access levels not included in the request are deleted.

## Evidence Summary

The cited Google Cloud documentation provides direct evidence for bulk access level replacement behavior and command/API usage (`replaceAll`), including the deletion of existing access levels omitted from the operation.

## Source Links

- [https://docs.cloud.google.com/access-context-manager/docs/bulk-operations](https://docs.cloud.google.com/access-context-manager/docs/bulk-operations)

## Supporting Pages

### "Making bulk changes to access levels \_|\_ Access Context Manager \_|\_\

- URL: [https://docs.cloud.google.com/access-context-manager/docs/bulk-operations](https://docs.cloud.google.com/access-context-manager/docs/bulk-operations)
- Source ID: `site-docs-root`
- Final score: 40
- Re-rank relevance: STRONG
- Re-rank rationale: The page is directly about performing bulk operations on access levels, including organization-wide replace-all behavior and transactional success/failure semantics.

Evidence snippets:
- If existing access levels aren't included in the operation, those access levels are deleted. gcloud To bulk replace all access levels, use the replace-all command. gcloud access-context-manager levels replace-all \ --source-file = FILE \ --etag = ETAG \ [ --policy = POLICY NAME ] Where: FILE is the name of a .yaml file that defines the new conditions for your existing access levels.
- Bulk replace access levels The following section details how to bulk replace your access levels.
- API To bulk replace all access levels, call accessLevels.replaceAll .

