---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:03:23.450Z"
product_name: "Access Approval"
product_slug: "access-approval"
feature_name: "Access Transparency logs include accessApprovals field"
feature_slug: "access-transparency-logs-include-accessapprovals-field"
latest_feature_date: "2021-03-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.AccessApprovalSettings"
  - "https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.UpdateAccessApprovalSettingsMessage"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders/getAccessApprovalSettings"
keywords:
  - "audit log accessApprovals"
  - "Access Transparency log entry"
  - "Cloud Logging accessApprovals"
  - "Access Transparency logs schema"
  - "accessApprovals field"
  - "accessApprovals"
---

# Access Transparency logs include accessApprovals field

Product: Access Approval
Coverage: LOW

## Step 02 Summary

Access Transparency logs were updated to include a new field named accessApprovals for Access Approval-related access grants.

## Extended Definition

Access Transparency logs were updated to include a new field named accessApprovals for Access Approval-related access grants.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.AccessApprovalSettings](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.AccessApprovalSettings)
- [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.UpdateAccessApprovalSettingsMessage](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.UpdateAccessApprovalSettingsMessage)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders/getAccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders/getAccessApprovalSettings)

## Supporting Pages

### "Class AccessApprovalSettings (1.19.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.AccessApprovalSettings](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.AccessApprovalSettings)
- Source ID: `site-python-reference`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- 1.19.0 (latest) 1.18.0 1.17.0 1.16.2 1.15.0 1.14.1 1.13.5 1.12.0 1.11.3 1.10.1 1.9.1 1.8.0 1.7.5 1.6.1 1.5.1 1.4.1 1.3.5 1.2.0 1.1.1 1.0.0 0.2.2 0.1.0 AccessApprovalSettings ( mapping = None , , ignore unknown fields = False , kwargs ) Settings on a Project/Folder/Organization related to Access Approval.
- Format is one of: - "projects/{project}/accessApprovalSettings" - "folders/{folder}/accessApprovalSettings" - "organizations/{organization}/accessApprovalSettings". notification emails MutableSequence[str] A list of email addresses to which notifications relating to approval requests should be sent.
- Home Documentation Developer tools Python Client libraries Send feedback Class AccessApprovalSettings (1.19.0) Stay organized with collections Save and categorize content based on your preferences.
- This field is read only (not settable via UpdateAccessApprovalSettings method).

### "Class UpdateAccessApprovalSettingsMessage (1.19.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.UpdateAccessApprovalSettingsMessage](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.UpdateAccessApprovalSettingsMessage)
- Source ID: `site-python-reference`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- 1.19.0 (latest) 1.18.0 1.17.0 1.16.2 1.15.0 1.14.1 1.13.5 1.12.0 1.11.3 1.10.1 1.9.1 1.8.0 1.7.5 1.6.1 1.5.1 1.4.1 1.3.5 1.2.0 1.1.1 1.0.0 0.2.2 0.1.0 UpdateAccessApprovalSettingsMessage ( mapping = None , , ignore unknown fields = False , kwargs ) Request to update access approval settings.
- Attributes Name Description settings google.cloud.accessapproval v1.types.AccessApprovalSettings The new AccessApprovalSettings. update mask google.protobuf.field mask pb2.FieldMask The update mask applies to the settings.
- Home Documentation Developer tools Python Client libraries Send feedback Class UpdateAccessApprovalSettingsMessage (1.19.0) Stay organized with collections Save and categorize content based on your preferences.
- Only the top level fields of AccessApprovalSettings (notification emails & enrolled services) are supported.

### "Method: folders.getAccessApprovalSettings \_|\_ Access Approval \_|\_ Google\

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders/getAccessApprovalSettings](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders/getAccessApprovalSettings)
- Source ID: `site-api-reference`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Security Cloud provider access management Access Approval Reference Send feedback Method: folders.getAccessApprovalSettings Stay organized with collections Save and categorize content based on your preferences.
- Format: "{projects folders organizations}/{id}/accessApprovalSettings" Authorization requires the following IAM permission on the specified resource name : accessapproval.settings.get Request body The request body must be empty.
- HTTP request GET https://accessapproval.googleapis.com/v1/{name=folders/ /accessApprovalSettings} The URL uses gRPC Transcoding syntax.
- Response body If successful, the response body contains an instance of AccessApprovalSettings .

