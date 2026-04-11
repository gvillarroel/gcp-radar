---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:03:23.449Z"
product_name: "Access Approval"
product_slug: "access-approval"
feature_name: "Access Approval UI Access Transparency log view"
feature_slug: "access-approval-ui-access-transparency-log-view"
latest_feature_date: "2021-04-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/approval-request-details"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/release-notes"
keywords:
  - "view access approvals in UI"
  - "Access Transparency log view"
  - "approval request log view"
  - "Access Transparency associated logs"
  - "Approval UI log"
  - "log view"
  - "Access Transparency logs"
  - "Access Approval UI"
---

# Access Approval UI Access Transparency log view

Product: Access Approval
Coverage: LOW

## Step 02 Summary

Access Approval UI now allows viewing Access Transparency logs associated with an approval request.

## Extended Definition

Access Approval UI now allows viewing Access Transparency logs associated with an approval request.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/approval-request-details](https://docs.cloud.google.com/assured-workloads/access-approval/docs/approval-request-details)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/release-notes](https://docs.cloud.google.com/assured-workloads/access-approval/docs/release-notes)

## Supporting Pages

### Anatomy of an Access Approval request \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/approval-request-details](https://docs.cloud.google.com/assured-workloads/access-approval/docs/approval-request-details)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- For more information about viewing Access Transparency logs, see Understanding and using Access Transparency logs .
- Access Transparency logs provide information about the affected resources and the time of the action.
- The auto-approved accesses also generate the usual set of Access Transparency logs.
- For more information, see Justification codes in Access Transparency logs .

### Release notes \_|\_ Access Approval \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/release-notes](https://docs.cloud.google.com/assured-workloads/access-approval/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- April 15, 2021 v1 Feature You can view Access Transparency logs associated with an approval request on the Access Approval UI.
- October 19, 2020 v1 Change The UpdateAccessApprovalSettings API now accepts product names (as listed here ) in enrolledServices.cloudProduct, and the return values from GetAccessApprovalSettings and UpdateAccessApprovalSettings will contain product names as well. v1 Feature History view is now available on the Access Approval UI.
- March 24, 2021 v1 Feature Access Transparency logs contain a new field called accessApprovals .
- Access Transparency logs published before March 24, 2021 will not have this field populated.

