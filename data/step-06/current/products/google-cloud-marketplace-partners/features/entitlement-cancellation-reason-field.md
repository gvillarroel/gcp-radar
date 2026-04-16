---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:29.080Z"
product_name: "Google Cloud Marketplace Partners"
product_slug: "google-cloud-marketplace-partners"
feature_name: "Entitlement cancellation_reason field"
feature_slug: "entitlement-cancellation-reason-field"
latest_feature_date: "2024-05-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements"
  - "https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements/list"
  - "https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements/reject"
  - "https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.accounts"
keywords:
  - "entitlement"
  - "cancellation"
  - "reason"
  - "field"
  - "the"
  - "resource"
  - "now"
  - "includes"
---

# Entitlement cancellation_reason field

Product: Google Cloud Marketplace Partners
Coverage: MEDIUM

## Step 02 Summary

The Entitlement resource now includes a cancellation_reason field that explains why an entitlement was cancelled.

## Extended Definition

The Entitlement resource now includes a cancellation_reason field that explains why an entitlement was cancelled.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements](https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements)
- [https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements/list](https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements/list)
- [https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements/reject](https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements/reject)
- [https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.accounts](https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.accounts)

## Supporting Pages

### "REST Resource: providers.entitlements \_|\_ Google Cloud Marketplace Partners\

- URL: [https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements](https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements)
- Source ID: `site-api-reference`
- Final score: 228
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "name" : string , "account" : string , "provider" : string , "product" : string , "quoteExternalName" : string , "productExternalName" : string , "plan" : string , "offer" : string , "newPendingOffer" : string , "newOfferStartTime" : string , "offerDuration" : string , "newPendingOfferDuration" : string , "offerEndTime" : string , "newOfferEndTime" : string , "newPendingPlan" : string , "state" : enum ( EntitlementState ) , "inputProperties" : { object } , "updateTime" : string , "createTime" : string , "usageReportingId" : string , "messageToUser" : string , "consumers" : [ { object ( Consumer ) } ] , "subscriptionEndTime" : string , "orderId" : string , "entitlementBenefitIds" : [ string ] , "cancellationReason" : string } Fields name string Output only.
- If the entitlement is in the state ENTITLEMENT ACTIVE, ENTITLEMENT PENDING CANCELLATION, ENTITLEMENT PENDING PLAN CHANGE, or ENTITLEMENT PENDING PLAN CHANGE APPROVAL, and the current offer doesn't have a specified end date, then this field contains the duration of the current offer.
- Possible values include "unknown", "expired", "user-cancelled", "account-closed", "billing-disabled" (if the customer has manually disabled billing to their resources), "user-aborted", and "migrated" (if the entitlement has migrated across products).
- If the entitlement is in the state ENTITLEMENT ACTIVE, ENTITLEMENT PENDING CANCELLATION, ENTITLEMENT PENDING PLAN CHANGE, or ENTITLEMENT PENDING PLAN CHANGE APPROVAL, this field is populated with the current offer.

### "Method: providers.entitlements.list \_|\_ Google Cloud Marketplace Partners\

- URL: [https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements/list](https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements/list)
- Source ID: `site-api-reference`
- Final score: 135
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If successful, the response body contains data with the following structure: JSON representation { "entitlements" : [ { object ( Entitlement ) } ] , "nextPageToken" : string } Fields entitlements[] object ( Entitlement ) The list of entitlements in this response. nextPageToken string The token for fetching the next page.
- For example, consumers.project:projects/123456789 finds entitlements with at least one consumer with project field equal to projects/123456789 . changeHistory.new offer retrieves all entitlements that were once associated or are currently active with the offer.
- Authorization requires the following IAM permission on the specified resource parent : commerceprocurement.providerEntitlements.list Query parameters Parameters filter string The filter that can be used to limit the list request.
- Home Documentation Access and resource management Google Cloud Marketplace Partners APIs and Reference Send feedback Method: providers.entitlements.list Stay organized with collections Save and categorize content based on your preferences.

### "Method: providers.entitlements.reject \_|\_ Google Cloud Marketplace Partners\

- URL: [https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements/reject](https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements/reject)
- Source ID: `site-api-reference`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- Authorization requires the following IAM permission on the specified resource name : commerceprocurement.providerEntitlements.reject Request body The request body contains data with the following structure: JSON representation { "reason" : string } Fields reason string Free form text string explaining the rejection reason.
- This method is invoked by the provider to reject the creation of the entitlement resource.
- The resource name of the entitlement.
- Home Documentation Access and resource management Google Cloud Marketplace Partners APIs and Reference Send feedback Method: providers.entitlements.reject Stay organized with collections Save and categorize content based on your preferences.

### "REST Resource: providers.accounts \_|\_ Google Cloud Marketplace Partners\

- URL: [https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.accounts](https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.accounts)
- Source ID: `site-api-reference`
- Final score: 125
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Methods approve Grants an approval on an Account . get Gets a requested Account resource. list Lists Account s that the provider has access to. reject Rejects an approval on an Account . reset Resets an Account and cancels all associated Entitlement s.
- Resource: Account JSON representation AccountState Approval JSON representation State Methods Resource: Account Represents an account that was established by the customer on the service provider's system.
- ACCOUNT ACTIVATION REQUESTED The customer has requested the creation of the account resource, and the provider notification message is dispatched.
- JSON representation { "name" : string , "state" : enum ( State ) , "reason" : string , "updateTime" : string } Fields name string Output only.

