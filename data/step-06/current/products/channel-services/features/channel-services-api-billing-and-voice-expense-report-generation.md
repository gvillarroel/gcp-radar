---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T19:19:31.150Z"
product_name: "Channel Services"
product_slug: "channel-services"
feature_name: "Channel Services API Billing and Voice Expense Report Generation"
feature_slug: "channel-services-api-billing-and-voice-expense-report-generation"
latest_feature_date: "2022-09-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery"
  - "https://docs.cloud.google.com/channel/docs/reference/rest"
  - "https://docs.cloud.google.com/channel/docs/reference/rpc"
keywords:
  - "expense"
  - "report"
  - "voice"
  - "services"
  - "billing"
  - "channel"
  - "and"
  - "api"
---

# Channel Services API Billing and Voice Expense Report Generation

Product: Channel Services
Coverage: LOW

## Step 02 Summary

Adds the ability in the Channel Services API to generate reports for Google Cloud billing and Google Voice expense data.

## Extended Definition

Adds the ability in the Channel Services API to generate reports for Google Cloud billing and Google Voice expense data.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery](https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery)
- [https://docs.cloud.google.com/channel/docs/reference/rest](https://docs.cloud.google.com/channel/docs/reference/rest)
- [https://docs.cloud.google.com/channel/docs/reference/rpc](https://docs.cloud.google.com/channel/docs/reference/rpc)

## Supporting Pages

### Export Channel Services data to BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery](https://docs.cloud.google.com/channel/docs/rebilling/export-data-to-bigquery)
- Source ID: `site-docs-reference`
- Final score: 194
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For Google Workspace consumptive SKUs (Google Voice and Drive), this is the number of minutes used. usage.pricing unit For Google Cloud, learn more about Cloud Billing Catalog API {: track-type="tasks" class="external" track-name="externalLink" track-metadata-position="body"} For Google Workspace, this is count . credits.id For Google Cloud, this is either an alphanumeric unique identifier ( 12-b34-c56-d78 ), or a description of the credit type ( Committed Usage Discount: CPU ).
- Required service account permissions The Channel Services data export uses a service account that is owned and managed by Google, and has permission to write billing records to a table.
- Use the export time column to understand when the exported billing data was last updated. entitlement name String The resource name of the Cloud Channel API Entitlement .
- If you already have a project and BigQuery dataset for Cloud Billing data exports , you can reuse that project and dataset for the Channel Services export.

### Cloud Channel API \_|\_ Channel Services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/reference/rest](https://docs.cloud.google.com/channel/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://cloudchannel.googleapis.com REST Resource: v1alpha1.accounts Methods checkCloudIdentityAccountsExist POST /v1alpha1/{parent=accounts/ }:checkCloudIdentityAccountsExist Confirms the existence of Cloud Identity accounts based on the domain and if the Cloud Identity accounts are owned by the reseller. listProvisionableCloudIdentityTypes POST /v1alpha1/{parent=accounts/ }:listProvisionableCloudIdentityTypes Returns the Google Workspace customer types you can create for the given domain, and shows if this requires a transfer. listSubscribers GET /v1alpha1/{account=accounts/ }:listSubscribers Lists service accounts with subscriber privileges on the Pub/Sub topic created for this Channel Services account or integrator. listTransferableOffers POST /v1alpha1/{parent=accounts/ }:listTransferableOffers List TransferableOffer s of a customer based on Cloud Identity ID or Customer Name in the request. listTransferableSkus POST /v1alpha1/{parent=accounts/ }:listTransferableSkus List TransferableSku s of a customer based on the Cloud Identity ID or Customer Name in the request. register POST /v1alpha1/{account=accounts/ }:register Registers a service account with subscriber privileges on the Pub/Sub topic for this Channel Services account or integrator. unregister POST /v1alpha1/{account=accounts/ }:unregister Unregisters a service account with subscriber privileges on the Pub/Sub topic created for this Channel Services account or integrator.
- Home Technology areas Channel Services APIs & Reference Send feedback Cloud Channel API Stay organized with collections Save and categorize content based on your preferences.
- REST Resource: v1alpha1.accounts REST Resource: v1alpha1.accounts.channelPartnerLinks REST Resource: v1alpha1.accounts.channelPartnerLinks.channelPartnerRepricingConfigs REST Resource: v1alpha1.accounts.channelPartnerLinks.customers REST Resource: v1alpha1.accounts.customers REST Resource: v1alpha1.accounts.customers.customerRepricingConfigs REST Resource: v1alpha1.accounts.customers.entitlements REST Resource: v1alpha1.accounts.offers REST Resource: v1alpha1.accounts.reportJobs REST Resource: v1alpha1.accounts.reports REST Resource: v1alpha1.accounts.skuGroups REST Resource: v1alpha1.accounts.skuGroups.billableSkus REST Resource: v1alpha1.integrators REST Resource: v1alpha1.operations REST Resource: v1alpha1.opportunities REST Resource: v1alpha1.products REST Resource: v1alpha1.products.skus REST Resource: v1.accounts REST Resource: v1.accounts.channelPartnerLinks REST Resource: v1.accounts.channelPartnerLinks.channelPartnerRepricingConfigs REST Resource: v1.accounts.channelPartnerLinks.customers REST Resource: v1.accounts.customers REST Resource: v1.accounts.customers.customerRepricingConfigs REST Resource: v1.accounts.customers.entitlements REST Resource: v1.accounts.offers REST Resource: v1.accounts.reportJobs REST Resource: v1.accounts.reports REST Resource: v1.accounts.skuGroups REST Resource: v1.accounts.skuGroups.billableSkus REST Resource: v1.integrators REST Resource: v1.operations REST Resource: v1.products REST Resource: v1.products.skus Service: cloudchannel.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v1.accounts Methods checkCloudIdentityAccountsExist POST /v1/{parent=accounts/ }:checkCloudIdentityAccountsExist Confirms the existence of Cloud Identity accounts based on the domain and if the Cloud Identity accounts are owned by the reseller. listSubscribers GET /v1/{account=accounts/ }:listSubscribers Lists service accounts with subscriber privileges on the Pub/Sub topic created for this Channel Services account or integrator. listTransferableOffers POST /v1/{parent=accounts/ }:listTransferableOffers List TransferableOffer s of a customer based on Cloud Identity ID or Customer Name in the request. listTransferableSkus POST /v1/{parent=accounts/ }:listTransferableSkus List TransferableSku s of a customer based on the Cloud Identity ID or Customer Name in the request. register POST /v1/{account=accounts/ }:register Registers a service account with subscriber privileges on the Pub/Sub topic for this Channel Services account or integrator. unregister POST /v1/{account=accounts/ }:unregister Unregisters a service account with subscriber privileges on the Pub/Sub topic created for this Channel Services account or integrator.

### Cloud Channel API \_|\_ Channel Services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/reference/rpc](https://docs.cloud.google.com/channel/docs/reference/rpc)
- Source ID: `site-docs-root`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Technology areas Channel Services APIs & Reference Send feedback Cloud Channel API Stay organized with collections Save and categorize content based on your preferences.
- Service: cloudchannel.googleapis.com The Service name cloudchannel.googleapis.com is needed to create RPC client stubs. google.cloud.channel.v1.CloudChannelReportsService This item is deprecated!
- The Cloud Channel API enables Google Cloud partners to have a single unified resale platform and APIs across all of Google Cloud including GCP, Workspace, Maps and Chrome.
- RunReportJob (deprecated) Begins generation of data for a given report. google.cloud.channel.v1alpha1.CloudChannelService Methods ActivateEntitlement Activates a previously suspended entitlement.

