---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:19:31.143Z"
product_name: "Channel Services"
product_slug: "channel-services"
feature_name: "Multi-currency Google Workspace Billing Transactions"
feature_slug: "multi-currency-google-workspace-billing-transactions"
latest_feature_date: "2023-05-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/channel/docs/guides/multiple-billing-account-starter"
  - "https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery"
  - "https://docs.cloud.google.com/channel/docs/guides/manage-entitlements"
keywords:
  - "transactions"
  - "transacting"
  - "currency"
  - "multi"
  - "workspace"
  - "billing"
  - "adds"
  - "for"
---

# Multi-currency Google Workspace Billing Transactions

Product: Channel Services
Coverage: LOW

## Step 02 Summary

Adds support for transacting with Google Workspace billing accounts in different currencies within a single Cloud Channel account.

## Extended Definition

Adds support for transacting with Google Workspace billing accounts in different currencies within a single Cloud Channel account.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/channel/docs/guides/multiple-billing-account-starter](https://docs.cloud.google.com/channel/docs/guides/multiple-billing-account-starter)
- [https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery](https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery)
- [https://docs.cloud.google.com/channel/docs/guides/manage-entitlements](https://docs.cloud.google.com/channel/docs/guides/manage-entitlements)

## Supporting Pages

### "Reseller account with multiple Google Workspace billing account Account\

- URL: [https://docs.cloud.google.com/channel/docs/guides/multiple-billing-account-starter](https://docs.cloud.google.com/channel/docs/guides/multiple-billing-account-starter)
- Source ID: `site-docs-reference`
- Final score: 172
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Transition from a reseller account with a single Google Workspace billing account to a reseller account with multiple Google Workspace billing account For partners that already have a reseller account with a single Google Workspace billing account, you might notice that there is no Google Workspace billing account selection step in your transaction flows.
- As mentioned above, in a multiple Google Workspace billing account setup, there will be cases where there are two or more Google Workspace billing account choices; this means partners will need to explicitly choose the desired Google Workspace billing account for a given transaction.
- A reseller account with a single vs multiple Google Workspace billing accounts A reseller account with a single Google Workspace billing account is defined as an account that only has a single Google Workspace billing account option for each Google Workspace SKU type.
- A reseller account with multiple Google Workspace billing accounts is when there are two or more Google Workspace billing account options for any of the Google Workspace SKU types.

### Export Channel Services data to BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery](https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery)
- Source ID: `site-docs-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- DATASET NAME . reseller billing detailed export v1 WHERE export time BETWEEN TIMESTAMP ( START DATE ) AND TIMESTAMP ( END DATE ) AND payer billing account id IN ( PAYER BILLING ACCOUNT IDS ) GROUP BY billing account id , currency , invoice . month ORDER BY billing account id , currency , invoice . month ; For more information on partitioning, clustering, and best practices, see the following links: Query Partitioned tables Query Clustered tables Optimize query computation Best Practices to control costs in BigQuery Finding payer's billing account ID To find the payer's billing account ID, open the billing accounts page of the Partner Sales Console and click the Partner billing tab.
- For Google Workspace consumptive SKUs (Google Voice and Drive), this is the number of minutes used. usage.pricing unit For Google Cloud, learn more about Cloud Billing Catalog API {: track-type="tasks" class="external" track-name="externalLink" track-metadata-position="body"} For Google Workspace, this is count . credits.id For Google Cloud, this is either an alphanumeric unique identifier ( 12-b34-c56-d78 ), or a description of the credit type ( Committed Usage Discount: CPU ).
- Can be user-generated. resource.global name String A globally unique service identifier for the resource that generated relevant usage. cost Numeric Cost per the applicable consumption model inclusive of any negotiated discounts reflected in the custom pricing in the contract linked to your Cloud Billing account (if applicable). currency String The cost's billing currency.
- When you enable the Channel Services data export for the first time per data source (Google Cloud or Google Workspace): If you configure your BigQuery dataset to use a multi-region location , BigQuery export data is available for each selected data source from the start of the previous month.

### "Manage Google Workspace and Google Chrome entitlements \_|\_ Channel Services\

- URL: [https://docs.cloud.google.com/channel/docs/guides/manage-entitlements](https://docs.cloud.google.com/channel/docs/guides/manage-entitlements)
- Source ID: `site-docs-reference`
- Final score: 110
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- QueryEligibleBillingAccountsRequest { "customer" : "accounts/123/customers/abc" , "skus" : [ "products/product id/skus/sku id1" ] } QueryEligibleBillingAccountsResponse { "skuPurchaseGroups" : [ { "skus" : [ "products/product id/skus/sku id1" ], "billingAccountPurchaseInfos" : [ { "billingAccount" : { "name" : "accounts/123/billingAccounts/billing account id1" , "displayName" : "Google Workspace USD US 1" , "currencyCode" : "USD" , "regionCode" : "US" } }, { "billingAccount" : { "name" : "accounts/123/billingAccounts/billing account id2" , "displayName" : "Google Workspace CAD CA 1" , "currencyCode" : "CAD" , "regionCode" : "CA" } } ] } ] } With the selected PurchasableSku and BillingAccount, use the listPurchasableOffers method to find the available PurchasableOffer ListPurchasableOffersRequest { "customer": "accounts/123/customers/abc", "createEntitlementPurchase": { "sku": "products/product id/skus/sku id1", "billingAccount": "accounts/123/billingAccounts/billing account id2" } } ListPurchasableOffersResponse { "purchasableOffers": [ { "offer": { "name": "accounts/123/offers/offer id1", }, "sku": { "name": "products/product id/skus/sku id1", }, "plan": { "paymentPlan": "FLEXIBLE", "paymentCycle": { "duration": 1, "periodType": "MONTH" } }, "priceReferenceId": "price reference id 123" } ], } At this point you should have the BillingAccount that will pay for the Entitlement and the PurchasableOffer.
- QueryEligibleBillingAccountsRequest { "customer" : "accounts/123/customers/abc" , "skus" : [ "products/product id/skus/voice sku id1" , "products/product id/skus/google workspace sku id2" , "google workspace chrome sku id3" ] } QueryEligibleBillingAccountsResponse { "skuPurchaseGroups" : [ { "skus" : [ "products/product id/skus/voice sku id1" ], "billingAccountPurchaseInfos" : [ { "billingAccount" : { "name" : "accounts/123/billingAccounts/voice billing account id1" , "displayName" : "Google Workspace Voice USD US 1" , "currencyCode" : "USD" , "regionCode" : "US" } } ] }, { "skus" : [ "products/product id/skus/google workspace sku id2" , "google workspace chrome sku id3" ], "billingAccountPurchaseInfos" : [ { "billingAccount" : { "name" : "accounts/123/billingAccounts/gw billing account id1" , "displayName" : "Google Workspace USD US 1" , "currencyCode" : "USD" , "regionCode" : "US" } }, { "billingAccount" : { "name" : "accounts/123/billingAccounts/gw billing account id2" , "displayName" : "Google Workspace CAD CA 1" , "currencyCode" : "CAD" , "regionCode" : "CA" } } ] } ] } ``` For each TransferableSku and BillingAccount pairs, use the listTransferableOffers method to find available TransferableOffers .
- If there are multiple Google Workspace billing account for a given SKU group, you can pick one of the Google Workspace billing account and use it for every TransferableSku in the group.
- Pre-requisite Before you continue, determine whether your reseller account has a single Google Workspace billing account or multiple Google Workspace billing accounts.

