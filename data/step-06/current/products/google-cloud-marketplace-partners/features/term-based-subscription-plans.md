---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:29.089Z"
product_name: "Google Cloud Marketplace Partners"
product_slug: "google-cloud-marketplace-partners"
feature_name: "Term-based subscription plans"
feature_slug: "term-based-subscription-plans"
latest_feature_date: "2019-05-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/marketplace/docs/partners/ai-agents/choose-pricing"
  - "https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements"
  - "https://docs.cloud.google.com/marketplace/docs/partners/ai-agents/pricing-models"
  - "https://docs.cloud.google.com/marketplace/docs/partners/data/choose-pricing"
keywords:
  - "term"
  - "based"
  - "subscription"
  - "plans"
  - "this"
  - "lets"
  - "publishers"
  - "offer"
---

# Term-based subscription plans

Product: Google Cloud Marketplace Partners
Coverage: MEDIUM

## Step 02 Summary

This feature lets publishers offer subscription plans for fixed periods such as one year or three years.

## Extended Definition

This feature lets publishers offer subscription plans for fixed periods such as one year or three years.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/marketplace/docs/partners/ai-agents/choose-pricing](https://docs.cloud.google.com/marketplace/docs/partners/ai-agents/choose-pricing)
- [https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements](https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements)
- [https://docs.cloud.google.com/marketplace/docs/partners/ai-agents/pricing-models](https://docs.cloud.google.com/marketplace/docs/partners/ai-agents/pricing-models)
- [https://docs.cloud.google.com/marketplace/docs/partners/data/choose-pricing](https://docs.cloud.google.com/marketplace/docs/partners/data/choose-pricing)

## Supporting Pages

### "Add your AI agent's pricing information \_|\_ Google Cloud Marketplace Partners\

- URL: [https://docs.cloud.google.com/marketplace/docs/partners/ai-agents/choose-pricing](https://docs.cloud.google.com/marketplace/docs/partners/ai-agents/choose-pricing)
- Source ID: `site-iam-reference`
- Final score: 154
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Subscription-based pricing and combined pricing For subscription-based pricing models, and for subscription-based elements of combined pricing models: Click Edit subscription fees .
- Best practices for defining pricing For best results when defining pricing, consider the following best practices: Give your plans names that directly reflect what they offer.
- Subscription-based pricing In the Pricing model drop-down list, select Subscription only .
- When you define private subscription plans, use only non-zero values.

### "REST Resource: providers.entitlements \_|\_ Google Cloud Marketplace Partners\

- URL: [https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements](https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements)
- Source ID: `site-api-reference`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If the entitlement is in the state ENTITLEMENT PENDING PLAN CHANGE APPROVAL or ENTITLEMENT PENDING PLAN CHANGE: If the entitlement's pricing model is usage based and the associated offer is a private offer whose term has ended, then this field reflects the ACTUAL end time of the entitlement's associated offer (in the past), even though the entitlement associated with this private offer does not terminate at the end of that private offer's term.
- End time for the current term of the Offer associated with this entitlement.
- JSON representation { "name" : string , "account" : string , "provider" : string , "product" : string , "quoteExternalName" : string , "productExternalName" : string , "plan" : string , "offer" : string , "newPendingOffer" : string , "newOfferStartTime" : string , "offerDuration" : string , "newPendingOfferDuration" : string , "offerEndTime" : string , "newOfferEndTime" : string , "newPendingPlan" : string , "state" : enum ( EntitlementState ) , "inputProperties" : { object } , "updateTime" : string , "createTime" : string , "usageReportingId" : string , "messageToUser" : string , "consumers" : [ { object ( Consumer ) } ] , "subscriptionEndTime" : string , "orderId" : string , "entitlementBenefitIds" : [ string ] , "cancellationReason" : string } Fields name string Output only.
- If the entitlement is in the state ENTITLEMENT ACTIVE, ENTITLEMENT PENDING CANCELLATION, ENTITLEMENT PENDING PLAN CHANGE, or ENTITLEMENT PENDING PLAN CHANGE APPROVAL, and the current offer doesn't have a specified end date, then this field contains the duration of the current offer.

### "Pricing models for AI agents from Google Cloud Marketplace \_|\_ Google\

- URL: [https://docs.cloud.google.com/marketplace/docs/partners/ai-agents/pricing-models](https://docs.cloud.google.com/marketplace/docs/partners/ai-agents/pricing-models)
- Source ID: `site-iam-reference`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To set up subscription-based pricing, you must provide the subscription plans that you offer, such as Standard or Enterprise, and the features that are included in those plans.
- For example, the following pricing model has base subscription plans that include a number of API requests, and additional charges as customers increase their usage: Standard Pro Enterprise $9.99 / month subscription fee $0 per request for 1000 API requests $0.002 per request for 1000+ API requests $39.99 / month subscription fee $0 per request for 2000 API requests $0.005 per request for 2000+ API requests $99.99 / month subscription fee $0 per request for 10000 API requests $0.008 per request for 10000+ API requests Features: Access to Admin Console Features: Access to Admin Console Multiple logins Security Features: Access to Admin Console Multiple logins Security Offering trial software (Optional) The process to offer a free trial of your software to Google Cloud users involves using Producer Portal to specify: The trial period, in days (for example, 30 days).
- For example, the following pricing model offers three subscription plans, with access to different features in each plan: Standard Pro Enterprise $9.99 / month $39.99 / month $99.99 / month Features: Unlimited calls Access to Admin Console Features: Unlimited calls Access to Admin Console Multiple logins Security Features: Unlimited calls Access to Admin Console Multiple logins Security The following pricing model modifies the previous example, adding discounted prices if customers sign up for one-year or three-year subscriptions.
- In a subscription-based pricing model, if customers want to make changes to their plans, then the effect and timing of those changes depends on their current subscription plan: For monthly subscriptions, customers can upgrade or downgrade between service levels, or cancel their subscription entirely.

### "Add pricing information to a config \_|\_ Google Cloud Marketplace Partners\

- URL: [https://docs.cloud.google.com/marketplace/docs/partners/data/choose-pricing](https://docs.cloud.google.com/marketplace/docs/partners/data/choose-pricing)
- Source ID: `site-iam-reference`
- Final score: 129
- Re-rank relevance: N/A

Evidence snippets:
- Subscription-based pricing For subscription-based pricing plans, complete the following steps: Under Add subscriptions , specify how long you want subscription periods to last for.
- Free products For data products that you're offering with a free pricing plan, complete the following steps: Under Add subscriptions , for Subscription period 1 , select how long you want subscription periods to last.
- Add specific pricing information to your pricing plans When you create or edit a pricing plan, you add specific pricing information in the form of subscription periods.
- Add features to your pricing plans For each of your pricing plans that supports private offers, under Add features , add at least one feature.

