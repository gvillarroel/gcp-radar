---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:56:59.866Z"
product_name: "Channel Services"
product_slug: "channel-services"
feature_name: "Multi-currency Google Workspace Billing Transactions"
feature_slug: "multi-currency-google-workspace-billing-transactions"
latest_feature_date: "2023-05-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/channel/docs/guides/multiple-billing-account-starter"
  - "https://docs.cloud.google.com/channel/docs/guides/manage-entitlements"
  - "https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery"
keywords:
  - "transactions"
  - "transacting"
  - "currency"
  - "accounts"
  - "multi"
  - "workspace"
  - "billing"
  - "adds"
---

# Multi-currency Google Workspace Billing Transactions

Product: Channel Services
Coverage: MEDIUM

## Step 02 Summary

Adds support for transacting with Google Workspace billing accounts in different currencies within a single Cloud Channel account.

## Extended Definition

Adds support for transacting with Google Workspace billing accounts in different currencies within a single Cloud Channel account.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/channel/docs/guides/multiple-billing-account-starter](https://docs.cloud.google.com/channel/docs/guides/multiple-billing-account-starter)
- [https://docs.cloud.google.com/channel/docs/guides/manage-entitlements](https://docs.cloud.google.com/channel/docs/guides/manage-entitlements)
- [https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery](https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery)

## Supporting Pages

### "Reseller account with multiple Google Workspace billing account Account\

- URL: [https://docs.cloud.google.com/channel/docs/guides/multiple-billing-account-starter](https://docs.cloud.google.com/channel/docs/guides/multiple-billing-account-starter)
- Source ID: `site-docs-reference`
- Final score: 216
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Caution: When working with a reseller account with multiple Google Workspace billing accounts, since there are two or more Google Workspace billing account choices when purchasing a Google Workspace subscription, API users must add a step in their transaction flow to select the desired Google Workspace billing account, otherwise the transaction will fail.
- A reseller account with a single vs multiple Google Workspace billing accounts A reseller account with a single Google Workspace billing account is defined as an account that only has a single Google Workspace billing account option for each Google Workspace SKU type.
- Convert your reseller account from a single Google Workspace billing account to a reseller account with multiple Google Workspace billing accounts by adding a new Google Workspace billing account to your reseller console.
- A reseller account with multiple Google Workspace billing accounts is when there are two or more Google Workspace billing account options for any of the Google Workspace SKU types.

### "Manage Google Workspace and Google Chrome entitlements \_|\_ Channel Services\

- URL: [https://docs.cloud.google.com/channel/docs/guides/manage-entitlements](https://docs.cloud.google.com/channel/docs/guides/manage-entitlements)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- QueryEligibleBillingAccountsRequest { "customer" : "accounts/123/customers/abc" , "skus" : [ "products/product id/skus/sku id1" ] } QueryEligibleBillingAccountsResponse { "skuPurchaseGroups" : [ { "skus" : [ "products/product id/skus/sku id1" ], "billingAccountPurchaseInfos" : [ { "billingAccount" : { "name" : "accounts/123/billingAccounts/billing account id1" , "displayName" : "Google Workspace USD US 1" , "currencyCode" : "USD" , "regionCode" : "US" } }, { "billingAccount" : { "name" : "accounts/123/billingAccounts/billing account id2" , "displayName" : "Google Workspace CAD CA 1" , "currencyCode" : "CAD" , "regionCode" : "CA" } } ] } ] } With the selected PurchasableSku and BillingAccount, use the listPurchasableOffers method to find the available PurchasableOffer ListPurchasableOffersRequest { "customer": "accounts/123/customers/abc", "createEntitlementPurchase": { "sku": "products/product id/skus/sku id1", "billingAccount": "accounts/123/billingAccounts/billing account id2" } } ListPurchasableOffersResponse { "purchasableOffers": [ { "offer": { "name": "accounts/123/offers/offer id1", }, "sku": { "name": "products/product id/skus/sku id1", }, "plan": { "paymentPlan": "FLEXIBLE", "paymentCycle": { "duration": 1, "periodType": "MONTH" } }, "priceReferenceId": "price reference id 123" } ], } At this point you should have the BillingAccount that will pay for the Entitlement and the PurchasableOffer.
- QueryEligibleBillingAccountsRequest { "customer" : "accounts/123/customers/abc" , "skus" : [ "products/product id/skus/voice sku id1" , "products/product id/skus/google workspace sku id2" , "google workspace chrome sku id3" ] } QueryEligibleBillingAccountsResponse { "skuPurchaseGroups" : [ { "skus" : [ "products/product id/skus/voice sku id1" ], "billingAccountPurchaseInfos" : [ { "billingAccount" : { "name" : "accounts/123/billingAccounts/voice billing account id1" , "displayName" : "Google Workspace Voice USD US 1" , "currencyCode" : "USD" , "regionCode" : "US" } } ] }, { "skus" : [ "products/product id/skus/google workspace sku id2" , "google workspace chrome sku id3" ], "billingAccountPurchaseInfos" : [ { "billingAccount" : { "name" : "accounts/123/billingAccounts/gw billing account id1" , "displayName" : "Google Workspace USD US 1" , "currencyCode" : "USD" , "regionCode" : "US" } }, { "billingAccount" : { "name" : "accounts/123/billingAccounts/gw billing account id2" , "displayName" : "Google Workspace CAD CA 1" , "currencyCode" : "CAD" , "regionCode" : "CA" } } ] } ] } ``` For each TransferableSku and BillingAccount pairs, use the listTransferableOffers method to find available TransferableOffers .
- QueryEligibleBillingAccountsRequest { "customer" : "accounts/123/customers/abc" , "skus" : [ "products/product id/skus/sku id1" ] } QueryEligibleBillingAccountsResponse { "skuPurchaseGroups" : [ { "skus" : [ "products/product id/skus/sku id1" ], "billingAccountPurchaseInfos" : [ { "billingAccount" : { "name" : "accounts/123/billingAccounts/billing account id1" , "displayName" : "Google Workspace USD US 1" , "currencyCode" : "USD" , "regionCode" : "US" } }, { "billingAccount" : { "name" : "accounts/123/billingAccounts/billing account id2" , "displayName" : "Google Workspace CAD CA 1" , "currencyCode" : "CAD" , "regionCode" : "CA" } } ] } ] } With the Entitlement and BillingAccount, use the listPurchasableOffers method to find any PurchasableOffer.
- Pre-requisite Before you continue, determine whether your reseller account has a single Google Workspace billing account or multiple Google Workspace billing accounts.

### Export Channel Services data to BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery](https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery)
- Source ID: `site-docs-reference`
- Final score: 146
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- DATASET NAME . reseller billing detailed export v1 WHERE export time BETWEEN TIMESTAMP ( START DATE ) AND TIMESTAMP ( END DATE ) AND payer billing account id IN ( PAYER BILLING ACCOUNT IDS ) GROUP BY billing account id , currency , invoice . month ORDER BY billing account id , currency , invoice . month ; For more information on partitioning, clustering, and best practices, see the following links: Query Partitioned tables Query Clustered tables Optimize query computation Best Practices to control costs in BigQuery Finding payer's billing account ID To find the payer's billing account ID, open the billing accounts page of the Partner Sales Console and click the Partner billing tab.
- To export billing data for multiple Partner Sales Console accounts, follow these steps: On the BigQuery dataset that you want to export your data to, make sure the Billing Administrators for each Partner Sales Console account have permissions to view the dataset.
- The following columns or fields don't apply to offline order billing exports: project labels system labels location resource credits entitlement name channel partner name channel partner cost customer name customer cost cost at list customer repricing config name channel partner repricing config name tags price.effective price price.tier start amount price.list price price.effective price default price.list price consumption model transaction type seller name consumption model Other notes about Google Workspace export There are several special behaviors with Google Workspace exports: Google Workspace data doesn't contain the reseller's own usage.
- For Google Workspace consumptive SKUs (Google Voice and Drive), this is the number of minutes used. usage.pricing unit For Google Cloud, learn more about Cloud Billing Catalog API {: track-type="tasks" class="external" track-name="externalLink" track-metadata-position="body"} For Google Workspace, this is count . credits.id For Google Cloud, this is either an alphanumeric unique identifier ( 12-b34-c56-d78 ), or a description of the credit type ( Committed Usage Discount: CPU ).

