---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:29.080Z"
product_name: "Google Cloud Marketplace Partners"
product_slug: "google-cloud-marketplace-partners"
feature_name: "Native renewal private offer"
feature_slug: "native-renewal-private-offer"
latest_feature_date: "2025-04-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/marketplace/docs/partners/create-offers"
  - "https://docs.cloud.google.com/marketplace/docs/partners/professional-services"
  - "https://docs.cloud.google.com/marketplace/docs/partners/data/choose-pricing"
  - "https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements"
keywords:
  - "native"
  - "renewal"
  - "private"
  - "offer"
  - "is"
  - "deal"
  - "type"
  - "that"
---

# Native renewal private offer

Product: Google Cloud Marketplace Partners
Coverage: MEDIUM

## Step 02 Summary

Native renewal is a Private Offer deal type that can be selected when creating an offer.

## Extended Definition

Native renewal is a Private Offer deal type that can be selected when creating an offer.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/marketplace/docs/partners/create-offers](https://docs.cloud.google.com/marketplace/docs/partners/create-offers)
- [https://docs.cloud.google.com/marketplace/docs/partners/professional-services](https://docs.cloud.google.com/marketplace/docs/partners/professional-services)
- [https://docs.cloud.google.com/marketplace/docs/partners/data/choose-pricing](https://docs.cloud.google.com/marketplace/docs/partners/data/choose-pricing)
- [https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements](https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements)

## Supporting Pages

### "Create a private offer for a customer \_|\_ Google Cloud Marketplace Partners\

- URL: [https://docs.cloud.google.com/marketplace/docs/partners/create-offers](https://docs.cloud.google.com/marketplace/docs/partners/create-offers)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you want to add a custom end user license agreement (EULA) to your private offer, you must also have the Commerce Price Management Private Offers Admin ( roles/commercepricemanagement.privateOffersAdmin ) role, or equivalent permissions.
- The direct link to the page is: https://console.cloud.google.com/producer-portal/private-offers In the Private Offers page, click Create offer .
- If you're creating a private offer to replace an active one, visit Modify a published offer to learn about replacement options.
- The following articles explain how to create and publish a new private offer.

### "Offer professional services \_|\_ Google Cloud Marketplace Partners \_|\_\

- URL: [https://docs.cloud.google.com/marketplace/docs/partners/professional-services](https://docs.cloud.google.com/marketplace/docs/partners/professional-services)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- If you offer professional services, you must meet the following requirements: Cloud Marketplace must be able to use the agency transaction model for your private offers that include professional services products.
- While your product's listing is publicly accessible in Cloud Marketplace, for customers to be able to purchase your professional services, you (or a reseller) must create private offers for your customers.
- Requirements for professional services All products that you offer through Cloud Marketplace must comply with the Cloud Marketplace listing requirements .
- The professional services that you offer must link to at least one current commercial Cloud Marketplace product listing.

### "Add pricing information to a config \_|\_ Google Cloud Marketplace Partners\

- URL: [https://docs.cloud.google.com/marketplace/docs/partners/data/choose-pricing](https://docs.cloud.google.com/marketplace/docs/partners/data/choose-pricing)
- Source ID: `site-iam-reference`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Caution: After you've published your data product, you can't remove support for types of transactions (such as standard offers or private offers) that you've previously supported.
- Add features to your pricing plans For each of your pricing plans that supports private offers, under Add features , add at least one feature.
- Cloud Marketplace uses these features to customize what capabilities this plan provides for private offers.
- You can't add features to pricing plans that don't support private offers.

### "REST Resource: providers.entitlements \_|\_ Google Cloud Marketplace Partners\

- URL: [https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements](https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements)
- Source ID: `site-api-reference`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- If the entitlement is in the state ENTITLEMENT PENDING PLAN CHANGE APPROVAL or ENTITLEMENT PENDING PLAN CHANGE: If the entitlement's pricing model is usage based and the associated offer is a private offer whose term has ended, then this field reflects the ACTUAL end time of the entitlement's associated offer (in the past), even though the entitlement associated with this private offer does not terminate at the end of that private offer's term.
- It could be either the product service that the offer is referencing, or a generic private offer parent service.
- It could be either the product service that the offer is referencing, or a generic private offer parent service.
- If the entitlement is in the state ENTITLEMENT CANCELLED, and the offer doesn't have a specified end date, then this field is populated with the duration of the latest offer that the order was associated with.

