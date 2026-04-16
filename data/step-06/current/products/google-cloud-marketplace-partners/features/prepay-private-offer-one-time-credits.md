---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:29.082Z"
product_name: "Google Cloud Marketplace Partners"
product_slug: "google-cloud-marketplace-partners"
feature_name: "Prepay private offer one-time credits"
feature_slug: "prepay-private-offer-one-time-credits"
latest_feature_date: "2023-05-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements"
  - "https://docs.cloud.google.com/marketplace/docs/partners/create-offers"
  - "https://docs.cloud.google.com/marketplace/docs/partners/ai-agents/pricing-models"
  - "https://docs.cloud.google.com/marketplace/docs/partners/data"
keywords:
  - "prepay"
  - "private"
  - "offer"
  - "one"
  - "time"
  - "credits"
  - "when"
  - "creating"
---

# Prepay private offer one-time credits

Product: Google Cloud Marketplace Partners
Coverage: MEDIUM

## Step 02 Summary

When creating or amending a prepay private offer with CUD pricing, you can add one-time credits to specific installments.

## Extended Definition

When creating or amending a prepay private offer with CUD pricing, you can add one-time credits to specific installments.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements](https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements)
- [https://docs.cloud.google.com/marketplace/docs/partners/create-offers](https://docs.cloud.google.com/marketplace/docs/partners/create-offers)
- [https://docs.cloud.google.com/marketplace/docs/partners/ai-agents/pricing-models](https://docs.cloud.google.com/marketplace/docs/partners/ai-agents/pricing-models)
- [https://docs.cloud.google.com/marketplace/docs/partners/data](https://docs.cloud.google.com/marketplace/docs/partners/data)

## Supporting Pages

### "REST Resource: providers.entitlements \_|\_ Google Cloud Marketplace Partners\

- URL: [https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements](https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements)
- Source ID: `site-api-reference`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "name" : string , "account" : string , "provider" : string , "product" : string , "quoteExternalName" : string , "productExternalName" : string , "plan" : string , "offer" : string , "newPendingOffer" : string , "newOfferStartTime" : string , "offerDuration" : string , "newPendingOfferDuration" : string , "offerEndTime" : string , "newOfferEndTime" : string , "newPendingPlan" : string , "state" : enum ( EntitlementState ) , "inputProperties" : { object } , "updateTime" : string , "createTime" : string , "usageReportingId" : string , "messageToUser" : string , "consumers" : [ { object ( Consumer ) } ] , "subscriptionEndTime" : string , "orderId" : string , "entitlementBenefitIds" : [ string ] , "cancellationReason" : string } Fields name string Output only.
- If the entitlement is in the state ENTITLEMENT PENDING PLAN CHANGE APPROVAL or ENTITLEMENT PENDING PLAN CHANGE: If the entitlement's pricing model is usage based and the associated offer is a private offer whose term has ended, then this field reflects the ACTUAL end time of the entitlement's associated offer (in the past), even though the entitlement associated with this private offer does not terminate at the end of that private offer's term.
- The timestamp when the new offer becomes effective.
- If the entitlement is in the state ENTITLEMENT ACTIVATION REQUESTED, then: If the entitlement isn't approved yet approved, and the offer has a specified end date, then this field is populated with the expected end time of the upcoming offer, in the future.

### "Create a private offer for a customer \_|\_ Google Cloud Marketplace Partners\

- URL: [https://docs.cloud.google.com/marketplace/docs/partners/create-offers](https://docs.cloud.google.com/marketplace/docs/partners/create-offers)
- Source ID: `site-docs-root`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- If you're creating a private offer to replace an active one, visit Modify a published offer to learn about replacement options.
- For information about managing your team's access, see Configure access control for creating and managing private offers in Producer Portal .
- For the Google Cloud project where you manage your products, you must have the following Identity and Access Management (IAM) role(s): Project Editor ( roles/editor ) OR Commerce Producer Viewer ( roles/commerceproducer.viewer ) AND Commerce Price Management Private Offers Admin ( roles/commercepricemanagement.privateOffersAdmin ) If you don't have the roles, request access from a Project Owner ( roles/owner ).
- If you want to add a custom end user license agreement (EULA) to your private offer, you must also have the Commerce Price Management Private Offers Admin ( roles/commercepricemanagement.privateOffersAdmin ) role, or equivalent permissions.

### "Pricing models for AI agents from Google Cloud Marketplace \_|\_ Google\

- URL: [https://docs.cloud.google.com/marketplace/docs/partners/ai-agents/pricing-models](https://docs.cloud.google.com/marketplace/docs/partners/ai-agents/pricing-models)
- Source ID: `site-iam-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- For steps to create a custom quote, see Creating private offers for specific customers .
- For example, the following pricing model offers three subscription plans, with access to different features in each plan: Standard Pro Enterprise $9.99 / month $39.99 / month $99.99 / month Features: Unlimited calls Access to Admin Console Features: Unlimited calls Access to Admin Console Multiple logins Security Features: Unlimited calls Access to Admin Console Multiple logins Security The following pricing model modifies the previous example, adding discounted prices if customers sign up for one-year or three-year subscriptions.
- The following table includes examples of the types of metrics that you can use, and the reporting units that we recommend: Metric type Supported units Recommended reporting unit Example price, shown on your Cloud Marketplace page Time Second, minute, hour, day 1 second (smallest possible) $5 per hour Data processed Byte, Kibibyte (KiB), Mebibyte (MiB), Gibibyte (GiB) The units for data processed are based on binary multiples, where one kibibyte is 1024 bytes, one mebibyte is 1024 kibibytes, and one gibibyte is 1024 mebibytes.
- Optionally, your plans can include a customized subscription period , where you can offer users a different price if they sign up for a specific time period, such as a year.

### "Offer data products \_|\_ Google Cloud Marketplace Partners \_|\_ Google\

- URL: [https://docs.cloud.google.com/marketplace/docs/partners/data](https://docs.cloud.google.com/marketplace/docs/partners/data)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can have multiple draft configs for one data product, but you can only submit one config at a time for review.
- For steps to create a custom quote, see Create a private offer for a customer .
- If you offer data products, they must meet the following additional requirement: Your data product can't contain any "personally identifiable sensitive information", as defined in the Protecting Americans' Data from Foreign Adversaries Act of 2024 .
- Home Documentation Access and resource management Google Cloud Marketplace Partners Develop Send feedback Offer data products Stay organized with collections Save and categorize content based on your preferences.

