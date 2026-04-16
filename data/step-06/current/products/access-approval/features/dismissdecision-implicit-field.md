---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:42:38.086Z"
product_name: "Access Approval"
product_slug: "access-approval"
feature_name: "DismissDecision.implicit field"
feature_slug: "dismissdecision-implicit-field"
latest_feature_date: "2020-08-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders.approvalRequests"
  - "https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.DismissDecision"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/projects.approvalRequests"
keywords:
  - "dismissdecision"
  - "implicit"
  - "field"
  - "structure"
  - "includes"
  - "indicating"
  - "whether"
  - "request"
---

# DismissDecision.implicit field

Product: Access Approval
Coverage: MEDIUM

## Step 02 Summary

The DismissDecision structure includes an implicit field indicating whether a request was dismissed by timeout instead of user action.

## Extended Definition

The DismissDecision structure includes an implicit field indicating whether a request was dismissed by timeout instead of user action.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders.approvalRequests](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders.approvalRequests)
- [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.DismissDecision](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.DismissDecision)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/projects.approvalRequests](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/projects.approvalRequests)

## Supporting Pages

### "REST Resource: folders.approvalRequests \_|\_ Access Approval \_|\_ Google\

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders.approvalRequests](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders.approvalRequests)
- Source ID: `site-api-reference`
- Final score: 139
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- JSON representation { "name" : string , "requestedResourceName" : string , "requestedAugmentedInfo" : { object ( AugmentedInfo ) } , "requestedResourceProperties" : { object ( ResourceProperties ) } , "requestedReason" : { object ( AccessReason ) } , "requestedLocations" : { object ( AccessLocations ) } , "requestTime" : string , "requestedExpiration" : string , "requestedDuration" : string , // Union field decision can be only one of the following: "approve" : { object ( ApproveDecision ) } , "dismiss" : { object ( DismissDecision ) } // End of list of possible types for union field decision . } Fields name string The resource name of the request.
- Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" . implicit boolean This field will be true if the ApprovalRequest was implicitly dismissed due to inaction by the access approval approvers (the request is not acted on by the approvers before the exiration time).
- JSON representation { "excludesDescendants" : boolean } Fields excludesDescendants boolean Whether an approval will exclude the descendants of the resource being requested.
- JSON representation { "dismissTime" : string , "implicit" : boolean } Fields dismissTime string ( Timestamp format) The time at which the approval request was dismissed.

### "Class DismissDecision (1.19.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.DismissDecision](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.DismissDecision)
- Source ID: `site-python-reference`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- Attributes Name Description dismiss time google.protobuf.timestamp pb2.Timestamp The time at which the approval request was dismissed. implicit bool This field will be true if the ApprovalRequest was implicitly dismissed due to inaction by the access approval approvers (the request is not acted on by the approvers before the exiration time).
- 1.19.0 (latest) 1.18.0 1.17.0 1.16.2 1.15.0 1.14.1 1.13.5 1.12.0 1.11.3 1.10.1 1.9.1 1.8.0 1.7.5 1.6.1 1.5.1 1.4.1 1.3.5 1.2.0 1.1.1 1.0.0 0.2.2 0.1.0 DismissDecision ( mapping = None , , ignore unknown fields = False , kwargs ) A decision that has been made to dismiss an approval request.
- Home Documentation Developer tools Python Client libraries Send feedback Class DismissDecision (1.19.0) Stay organized with collections Save and categorize content based on your preferences.

### "REST Resource: projects.approvalRequests \_|\_ Access Approval \_|\_ Google\

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/projects.approvalRequests](https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/projects.approvalRequests)
- Source ID: `site-api-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "name" : string , "requestedResourceName" : string , "requestedAugmentedInfo" : { object ( AugmentedInfo ) } , "requestedResourceProperties" : { object ( ResourceProperties ) } , "requestedReason" : { object ( AccessReason ) } , "requestedLocations" : { object ( AccessLocations ) } , "requestTime" : string , "requestedExpiration" : string , "requestedDuration" : string , // Union field decision can be only one of the following: "approve" : { object ( ApproveDecision ) } , "dismiss" : { object ( DismissDecision ) } // End of list of possible types for union field decision . } Fields name string The resource name of the request.
- The resource name here may either be a "full" resource name (e.g. "//library.googleapis.com/shelves/shelf1/books/book2") or a "relative" resource name (e.g. "shelves/shelf1/books/book2") as described in the resource name specification. requestedAugmentedInfo object ( AugmentedInfo ) This field contains the augmented information of the request. requestedResourceProperties object ( ResourceProperties ) Properties related to the resource represented by requestedResourceName. requestedReason object ( AccessReason ) The access reason for which approval is being requested. requestedLocations object ( AccessLocations ) The locations for which approval is being requested. requestTime string ( Timestamp format) The time at which approval was requested.
- The current decision on the approval request. decision can be only one of the following: approve object ( ApproveDecision ) Access was approved. dismiss object ( DismissDecision ) The request was dismissed.
- Methods approve Approves a request and returns the updated ApprovalRequest. dismiss Dismisses a request. get Gets an approval request. invalidate Invalidates an existing ApprovalRequest. list Lists approval requests associated with a project, folder, or organization.

