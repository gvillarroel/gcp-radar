---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:29.081Z"
product_name: "Google Cloud Marketplace Partners"
product_slug: "google-cloud-marketplace-partners"
feature_name: "Detailed disbursements reports"
feature_slug: "detailed-disbursements-reports"
latest_feature_date: "2024-03-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/marketplace/docs/partners/receive-payments"
  - "https://docs.cloud.google.com/marketplace/docs/partners/reporting"
  - "https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements/approve"
  - "https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements/list"
keywords:
  - "detailed"
  - "disbursements"
  - "reports"
  - "provide"
  - "breakdowns"
  - "of"
  - "amounts"
  - "paid"
---

# Detailed disbursements reports

Product: Google Cloud Marketplace Partners
Coverage: MEDIUM

## Step 02 Summary

Detailed disbursements reports provide detailed breakdowns of amounts paid for accounting and financial reconciliation.

## Extended Definition

Detailed disbursements reports provide detailed breakdowns of amounts paid for accounting and financial reconciliation.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/marketplace/docs/partners/receive-payments](https://docs.cloud.google.com/marketplace/docs/partners/receive-payments)
- [https://docs.cloud.google.com/marketplace/docs/partners/reporting](https://docs.cloud.google.com/marketplace/docs/partners/reporting)
- [https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements/approve](https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements/approve)
- [https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements/list](https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements/list)

## Supporting Pages

### "Receiving payments from Google \_|\_ Google Cloud Marketplace Partners \_\

- URL: [https://docs.cloud.google.com/marketplace/docs/partners/receive-payments](https://docs.cloud.google.com/marketplace/docs/partners/receive-payments)
- Source ID: `site-docs-root`
- Final score: 109
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For transactions using the merchant of record transaction model, you might need to provide additional information, based on the location of your payments profile: If you're located in the Asia Pacific region, Cloud Marketplace asks you to provide Singapore tax information, because your payments come from the Google Asia Pacific entity, which is located in Singapore.
- Overview of customer billing Each month, Google computes how much your customers paid for your products, and what Google owes you.
- However, the transaction amounts in the Payments page will include amounts from all projects that share the same payments profile.
- Region Currency Belgium EUR Canada CAD Canada USD Finland EUR France EUR Germany EUR Hong Kong HKD India USD Ireland EUR Israel ILS Italy EUR Japan JPY Luxembourg EUR Netherlands EUR Norway NOK Poland PLN Romania EUR Saudi Arabia USD Spain EUR Sweden SEK Switzerland CHF United Kingdom GBP United States USD Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Reports for your Cloud Marketplace products \_|\_ Google Cloud Marketplace\

- URL: [https://docs.cloud.google.com/marketplace/docs/partners/reporting](https://docs.cloud.google.com/marketplace/docs/partners/reporting)
- Source ID: `site-docs-root`
- Final score: 89
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Google provides reports about the products you have published to Google Cloud Marketplace that are relevant to different parts of your organization, such as finance, marketing, sales, or product management.
- If you set up any automated processing of your reports, you should configure it so that it operates based on the names of the columns, and doesn't depend on the total number of columns staying the same.
- For a list of all of the available report types, visit Available reports for your Cloud Marketplace products .
- Home Documentation Access and resource management Google Cloud Marketplace Partners Go to market Send feedback Reports for your Cloud Marketplace products Stay organized with collections Save and categorize content based on your preferences.

### "Method: providers.entitlements.approve \_|\_ Google Cloud Marketplace Partners\

- URL: [https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements/approve](https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements/approve)
- Source ID: `site-api-reference`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Authorization requires the following IAM permission on the specified resource name : commerceprocurement.providerEntitlements.approve Request body The request body contains data with the following structure: JSON representation { "properties" : { string : string , ... } , "entitlementMigrated" : string } Fields properties (deprecated) map (key: string, value: string) Set of properties that should be associated with the entitlement.
- The resource name of the entitlement that was migrated, with the format providers/{providerId}/entitlements/{entitlement id} .
- The resource name of the entitlement, with the format providers/{providerId}/entitlements/{entitlementId} .
- This method is invoked by the provider to approve the creation of the entitlement resource.

### "Method: providers.entitlements.list \_|\_ Google Cloud Marketplace Partners\

- URL: [https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements/list](https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements/list)
- Source ID: `site-api-reference`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported query attributes are account customer billing account with value in the format of: billingAccounts/{id} productExternalName quoteExternalName offer newPendingOffer plan newPendingPlan or newPendingPlan state consumers.project changeHistory.new offer Note that the consumers and changeHistory.new offer match works on repeated structures, so equality ( consumers.project=projects/123456789 ) is not supported.
- If successful, the response body contains data with the following structure: JSON representation { "entitlements" : [ { object ( Entitlement ) } ] , "nextPageToken" : string } Fields entitlements[] object ( Entitlement ) The list of entitlements in this response. nextPageToken string The token for fetching the next page.
- For example, consumers.project:projects/123456789 finds entitlements with at least one consumer with project field equal to projects/123456789 . changeHistory.new offer retrieves all entitlements that were once associated or are currently active with the offer.
- Home Documentation Access and resource management Google Cloud Marketplace Partners APIs and Reference Send feedback Method: providers.entitlements.list Stay organized with collections Save and categorize content based on your preferences.

