---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:03:23.453Z"
product_name: "Access Approval"
product_slug: "access-approval"
feature_name: "DismissDecision implicit dismissal indicator"
feature_slug: "dismissdecision-implicit-dismissal-indicator"
latest_feature_date: "2020-08-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.DismissDecision"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders.approvalRequests"
keywords:
  - "time-based dismissal"
  - "Access Approval decision state"
  - "DismissDecision implicit"
  - "implicit dismissal"
  - "implicit dismiss"
  - "DismissDecision"
---

# DismissDecision implicit dismissal indicator

Product: Access Approval
Coverage: LOW

## Step 02 Summary

The Access Approval API added an implicit field to DismissDecision to indicate time-based (implicit) dismissals.

## Extended Definition

The Access Approval API added an implicit field to DismissDecision to indicate time-based (implicit) dismissals.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.DismissDecision](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.DismissDecision)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders.approvalRequests](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders.approvalRequests)

## Supporting Pages

### "Class DismissDecision (1.19.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.DismissDecision](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.DismissDecision)
- Source ID: `site-python-reference`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- 1.19.0 (latest) 1.18.0 1.17.0 1.16.2 1.15.0 1.14.1 1.13.5 1.12.0 1.11.3 1.10.1 1.9.1 1.8.0 1.7.5 1.6.1 1.5.1 1.4.1 1.3.5 1.2.0 1.1.1 1.0.0 0.2.2 0.1.0 DismissDecision ( mapping = None , , ignore unknown fields = False , kwargs ) A decision that has been made to dismiss an approval request.
- Home Documentation Developer tools Python Client libraries Send feedback Class DismissDecision (1.19.0) Stay organized with collections Save and categorize content based on your preferences.

### "REST Resource: folders.approvalRequests \_|\_ Access Approval \_|\_ Google\

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders.approvalRequests](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders.approvalRequests)
- Source ID: `site-api-reference`
- Final score: 20
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON representation { "name" : string , "requestedResourceName" : string , "requestedAugmentedInfo" : { object ( AugmentedInfo ) } , "requestedResourceProperties" : { object ( ResourceProperties ) } , "requestedReason" : { object ( AccessReason ) } , "requestedLocations" : { object ( AccessLocations ) } , "requestTime" : string , "requestedExpiration" : string , "requestedDuration" : string , // Union field decision can be only one of the following: "approve" : { object ( ApproveDecision ) } , "dismiss" : { object ( DismissDecision ) } // End of list of possible types for union field decision . } Fields name string The resource name of the request.
- Resource: ApprovalRequest JSON representation AugmentedInfo JSON representation ResourceProperties JSON representation AccessReason JSON representation Type AccessLocations JSON representation ApproveDecision JSON representation SignatureInfo JSON representation CryptoKeyVersionAlgorithm DismissDecision JSON representation Methods Resource: ApprovalRequest A request for the customer to approve access to a resource.
- The current decision on the approval request. decision can be only one of the following: approve object ( ApproveDecision ) Access was approved. dismiss object ( DismissDecision ) The request was dismissed.
- DismissDecision A decision that has been made to dismiss an approval request.

