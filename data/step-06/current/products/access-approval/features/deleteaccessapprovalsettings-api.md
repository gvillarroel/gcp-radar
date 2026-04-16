---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:42:38.089Z"
product_name: "Access Approval"
product_slug: "access-approval"
feature_name: "DeleteAccessApprovalSettings API"
feature_slug: "deleteaccessapprovalsettings-api"
latest_feature_date: "2020-01-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders/deleteAccessApprovalSettings"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/deleteAccessApprovalSettings"
  - "https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.DeleteAccessApprovalSettingsMessage"
keywords:
  - "deleteaccessapprovalsettings"
  - "access"
  - "approval"
  - "provides"
  - "remove"
  - "settings"
---

# DeleteAccessApprovalSettings API

Product: Access Approval
Coverage: MEDIUM

## Step 02 Summary

Access Approval provides a DeleteAccessApprovalSettings API to remove approval settings.

## Extended Definition

Access Approval provides a DeleteAccessApprovalSettings API to remove approval settings.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders/deleteAccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders/deleteAccessApprovalSettings)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/deleteAccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/deleteAccessApprovalSettings)
- [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.DeleteAccessApprovalSettingsMessage](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.DeleteAccessApprovalSettingsMessage)

## Supporting Pages

### "Method: folders.deleteAccessApprovalSettings \_|\_ Access Approval \_|\_\

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders/deleteAccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders/deleteAccessApprovalSettings)
- Source ID: `site-api-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Security Cloud provider access management Access Approval Reference Send feedback Method: folders.deleteAccessApprovalSettings Stay organized with collections Save and categorize content based on your preferences.
- Authorization requires the following IAM permission on the specified resource name : accessapproval.settings.delete Request body The request body must be empty.
- HTTP request DELETE https://accessapproval.googleapis.com/v1/{name=folders/ /accessApprovalSettings} The URL uses gRPC Transcoding syntax.
- To confirm the effective settings, call folders.getAccessApprovalSettings and verify effective setting is disabled.

### "Method: organizations.deleteAccessApprovalSettings \_|\_ Access Approval\

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/deleteAccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/organizations/deleteAccessApprovalSettings)
- Source ID: `site-api-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Security Cloud provider access management Access Approval Reference Send feedback Method: organizations.deleteAccessApprovalSettings Stay organized with collections Save and categorize content based on your preferences.
- Authorization requires the following IAM permission on the specified resource name : accessapproval.settings.delete Request body The request body must be empty.
- HTTP request DELETE https://accessapproval.googleapis.com/v1/{name=organizations/ /accessApprovalSettings} The URL uses gRPC Transcoding syntax.
- To confirm the effective settings, call organizations.getAccessApprovalSettings and verify effective setting is disabled.

### "Class DeleteAccessApprovalSettingsMessage (1.19.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.DeleteAccessApprovalSettingsMessage](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.DeleteAccessApprovalSettingsMessage)
- Source ID: `site-python-reference`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- 1.19.0 (latest) 1.18.0 1.17.0 1.16.2 1.15.0 1.14.1 1.13.5 1.12.0 1.11.3 1.10.1 1.9.1 1.8.0 1.7.5 1.6.1 1.5.1 1.4.1 1.3.5 1.2.0 1.1.1 1.0.0 0.2.2 0.1.0 DeleteAccessApprovalSettingsMessage ( mapping = None , , ignore unknown fields = False , kwargs ) Request to delete access approval settings.
- Home Documentation Developer tools Python Client libraries Send feedback Class DeleteAccessApprovalSettingsMessage (1.19.0) Stay organized with collections Save and categorize content based on your preferences.
- Attribute Name Description name str Name of the AccessApprovalSettings to delete.

