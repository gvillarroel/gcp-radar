---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:42:38.085Z"
product_name: "Access Approval"
product_slug: "access-approval"
feature_name: "Cloud IAM support"
feature_slug: "cloud-iam-support"
latest_feature_date: "2020-10-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview"
  - "https://docs.cloud.google.com/app-hub/docs/apis"
keywords:
  - "iam"
  - "access"
  - "approval"
  - "supports"
  - "integrated"
---

# Cloud IAM support

Product: Access Approval
Coverage: MEDIUM

## Step 02 Summary

The Access Approval API supports Cloud IAM as an integrated supported service.

## Extended Definition

The Access Approval API supports Cloud IAM as an integrated supported service.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys](https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview](https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview)
- [https://docs.cloud.google.com/app-hub/docs/apis](https://docs.cloud.google.com/app-hub/docs/apis)

## Supporting Pages

### APIs and reference \_|\_ App Hub \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/app-hub/docs/apis](https://docs.cloud.google.com/app-hub/docs/apis)
- Source ID: `site-docs-reference-2`
- Final score: 34
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

### "Review and approve access requests using the Google-managed signing key\

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys](https://docs.cloud.google.com/assured-workloads/access-approval/docs/review-approve-access-requests-google-keys)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Required roles To get the permissions that you need to set up Access Approval and approve access requests, ask your administrator to grant you the following IAM roles on your project: View and update Access Approval configuration and approve access requests: Access Approval Config Editor ( roles/accessapproval.configEditor ) View Access Approval configuration and approve access requests: Access Approval Approver ( roles/accessapproval.approver ) View Access Approval configuration and access requests and download log reports: Access Approval Viewer ( roles/accessapproval.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Add yourself as an approver for Access Approval requests and configure notifications To add yourself as an approver so you can review and approve access requests, do the following: Go to the Access Approval page in the Google Cloud console.
- After you approve the request, Google personnel with characteristics matching the approval, such as the same justification, location, or desk location, can access the specified resource and its child resources within the approved timeframe.
- Example Defaults: Disabled: product.googleapis.com/project/12345/ Enabled: product.googleapis.com/project/12345/instances/abcde Approval Request Default Expiration Days : Set the default expiration for Access Approval requests.

### Overview of Access Approval \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview](https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Selecting this option also automatically enrolls all the GA services that Access Approval supports in the future.
- Selecting this option also automatically enrolls all the services that Access Approval supports in the future.
- See Supported services for a complete list of services that Access Approval supports.
- See the list of Google Cloud services that Access Approval supports .

