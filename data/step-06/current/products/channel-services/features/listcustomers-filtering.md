---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:19:31.152Z"
product_name: "Channel Services"
product_slug: "channel-services"
feature_name: "ListCustomers Filtering"
feature_slug: "listcustomers-filtering"
latest_feature_date: "2022-02-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/channel/docs/concepts/google-cloud/filter-customers"
  - "https://docs.cloud.google.com/channel/docs/release-notes"
  - "https://docs.cloud.google.com/channel/docs/reference/rest/Shared.Types/ListOperationsResponse"
keywords:
  - "listcustomers"
  - "filtering"
  - "filters"
  - "so"
  - "method"
  - "adds"
  - "the"
  - "to"
---

# ListCustomers Filtering

Product: Channel Services
Coverage: LOW

## Step 02 Summary

Adds filters to the ListCustomers method so selected customers can be excluded from search results.

## Extended Definition

Adds filters to the ListCustomers method so selected customers can be excluded from search results.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/channel/docs/concepts/google-cloud/filter-customers](https://docs.cloud.google.com/channel/docs/concepts/google-cloud/filter-customers)
- [https://docs.cloud.google.com/channel/docs/release-notes](https://docs.cloud.google.com/channel/docs/release-notes)
- [https://docs.cloud.google.com/channel/docs/reference/rest/Shared.Types/ListOperationsResponse](https://docs.cloud.google.com/channel/docs/reference/rest/Shared.Types/ListOperationsResponse)

## Supporting Pages

### "Set up a customer filter using the ListCustomers API \_|\_ Channel Services\

- URL: [https://docs.cloud.google.com/channel/docs/concepts/google-cloud/filter-customers](https://docs.cloud.google.com/channel/docs/concepts/google-cloud/filter-customers)
- Source ID: `site-docs-reference`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Syntax: <domain org display name> : <value> Example: domain : "uw.com " AND org display name : "prefix " Examples of filters with logical operators Cloud Channel API filters support the use of AND and OR logical operators.
- Home Technology areas Channel Services Guides Send feedback Set up a customer filter using the ListCustomers API Stay organized with collections Save and categorize content based on your preferences.
- If you need to find information about a specific customer, you can use the Cloud Channel API filter parameter through the customers.list method .

### Channel Services release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/release-notes](https://docs.cloud.google.com/channel/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- For Google Cloud Platform offers, you can use this field to map an offer to the Reseller Billing Account name from Cloud Console. v1 Change In the CheckCloudIdentityAccountsExist method, CloudIdentityAccounts now returns an empty list instead of a 404 error if the domain does not match an existing Cloud Identity.
- Read an overview of rebilling Learn about enabling your rebilling data export February 14, 2022 v1 Feature This release adds filters to ListCustomers.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Get started with using multiple Google Workspace billing accounts Manage your Google Workspace and Google Chrome entitlements May 08, 2023 v1 Change The following fields are now available in the Channel Services API: In the Entitlement resource, the billingAccount field includes the Cloud Billing account that was used to pay for that entitlement.

### ListOperationsResponse \_|\_ Channel Services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/reference/rest/Shared.Types/ListOperationsResponse](https://docs.cloud.google.com/channel/docs/reference/rest/Shared.Types/ListOperationsResponse)
- Source ID: `site-api-reference`
- Final score: 106
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-03 UTC."],[],[]]
- JSON representation { "operations" : [ { object ( Operation ) } ] , "nextPageToken" : string , "unreachable" : [ string ] } Fields operations[] object ( Operation ) A list of operations that matches the specified filter in the request. nextPageToken string The standard List next-page token. unreachable[] string Unordered list of unreachable resources.
- JSON representation Operation JSON representation Status JSON representation The response message for Operations.ListOperations .
- If the original method returns no data on success, such as Delete , the response is google.protobuf.Empty .

