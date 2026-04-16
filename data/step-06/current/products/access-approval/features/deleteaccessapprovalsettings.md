---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T15:57:29.239Z"
product_name: "Access Approval"
product_slug: "access-approval"
feature_name: "DeleteAccessApprovalSettings"
feature_slug: "deleteaccessapprovalsettings"
latest_feature_date: "2020-01-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.DeleteAccessApprovalSettingsMessage"
  - "https://docs.cloud.google.com/assured-workloads/access-approval/docs/authentication"
  - "https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalClient"
keywords:
  - "AccessApprovalService DeleteAccessApprovalSettings"
  - "deleteAccessApprovalSettings method"
  - "DeleteAccessApprovalSettings RPC"
  - "delete access approval settings"
  - "settings deletion"
  - "DeleteAccessApprovalSettings API"
  - "DeleteAccessApprovalSettings"
---

# DeleteAccessApprovalSettings

Product: Access Approval
Coverage: MEDIUM

## Step 02 Summary

The DeleteAccessApprovalSettings API was added to Access Approval.

## Extended Definition

The DeleteAccessApprovalSettings API was added to Access Approval.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.DeleteAccessApprovalSettingsMessage](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.DeleteAccessApprovalSettingsMessage)
- [https://docs.cloud.google.com/assured-workloads/access-approval/docs/authentication](https://docs.cloud.google.com/assured-workloads/access-approval/docs/authentication)
- [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalAsyncClient](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalClient](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalClient)

## Supporting Pages

### "Class DeleteAccessApprovalSettingsMessage (1.19.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.DeleteAccessApprovalSettingsMessage](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.types.DeleteAccessApprovalSettingsMessage)
- Source ID: `site-python-reference`
- Final score: 85
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- 1.19.0 (latest) 1.18.0 1.17.0 1.16.2 1.15.0 1.14.1 1.13.5 1.12.0 1.11.3 1.10.1 1.9.1 1.8.0 1.7.5 1.6.1 1.5.1 1.4.1 1.3.5 1.2.0 1.1.1 1.0.0 0.2.2 0.1.0 DeleteAccessApprovalSettingsMessage ( mapping = None , , ignore unknown fields = False , kwargs ) Request to delete access approval settings.
- Home Documentation Developer tools Python Client libraries Send feedback Class DeleteAccessApprovalSettingsMessage (1.19.0) Stay organized with collections Save and categorize content based on your preferences.

### Authenticate to Access Approval \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/assured-workloads/access-approval/docs/authentication](https://docs.cloud.google.com/assured-workloads/access-approval/docs/authentication)
- Source ID: `site-docs-reference`
- Final score: 78
- Re-rank relevance: N/A

### "Class AccessApprovalAsyncClient (1.19.0) \_|\_ Python client libraries \_\

- URL: [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalAsyncClient](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalAsyncClient)
- Source ID: `site-python-reference`
- Final score: 77
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- DeleteAccessApprovalSettingsMessage ( ) Make the request await client. delete access approval settings (request=request) Parameters Name Description request Optional[Union[ google.cloud.accessapproval v1.types.DeleteAccessApprovalSettingsMessage , dict]] The request object.
- Returns Type Description google.cloud.accessapproval v1.types.ApprovalRequest A request for the customer to approve access to a resource. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. delete access approval settings delete access approval settings ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import accessapproval v1 async def sample delete access approval settings(): Create a client client = accessapproval v1 .
- Request to delete access approval settings. name str Name of the AccessApprovalSettings to delete.

### "Class AccessApprovalClient (1.19.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalClient](https://docs.cloud.google.com/python/docs/reference/accessapproval/latest/google.cloud.accessapproval_v1.services.access_approval.AccessApprovalClient)
- Source ID: `site-python-reference`
- Final score: 77
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- DeleteAccessApprovalSettingsMessage ( ) Make the request client. delete access approval settings (request=request) Parameters Name Description request Union[ google.cloud.accessapproval v1.types.DeleteAccessApprovalSettingsMessage , dict] The request object.
- Returns Type Description google.cloud.accessapproval v1.types.ApprovalRequest A request for the customer to approve access to a resource. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. delete access approval settings delete access approval settings ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import accessapproval v1 def sample delete access approval settings(): Create a client client = accessapproval v1 .
- Request to delete access approval settings. name str Name of the AccessApprovalSettings to delete.

