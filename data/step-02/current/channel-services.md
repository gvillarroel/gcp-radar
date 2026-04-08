# Channel Services

Generated from the canonical Step 01 Google Cloud release-notes Parquet snapshot.

The table below contains deduplicated product features ordered from newest to oldest by the latest feature event. Deprecation dates are included when a matching deprecation event was found.

Source rows considered: 17
Unique features: 19

| Latest feature date | Feature | Deprecation date | Summary |
| --- | --- | --- | --- |
| 2024-03-06 | Channel Services BigQuery Rebilling Export |  | Adds a BigQuery Export (Rebilling) capability so partners can programmatically access Workspace billing data, including Channel Service identifiers and configured CRM IDs, in a BigQuery dataset. |
| 2023-09-29 | Channel Services Rebilling BigQuery Export Dataset Location Support |  | Allows Channel Services rebilling BigQuery datasets to be created in all supported BigQuery locations, with multi-region datasets recommended for broader export coverage. |
| 2023-07-17 | EntitlementGranularity Repricing Configuration |  | Adds support for creating Channel Services repricing configurations using EntitlementGranularity in the Channel Services API instead of ChannelPartnerGranularity. |
| 2023-06-13 | ListSkuGroupBillableSkus API |  | Introduces the ListSkuGroupBillableSkus public API to list all Google Cloud SKUs that belong to a specified SKU group. |
| 2023-06-13 | ListSkuGroups API |  | Introduces the ListSkuGroups public API to list rebilling-supported SKU groups that can be configured in customer or channel partner repricing. |
| 2023-05-19 | Multi-currency Google Workspace Billing Transactions |  | Adds support for transacting with Google Workspace billing accounts in different currencies within a single Cloud Channel account. |
| 2023-04-24 | Unified Rebilling BigQuery Export Across Multiple Partner Sales Console Accounts |  | Enables unified Channel Services rebilling exports from multiple Partner Sales Console accounts into a single BigQuery dataset while partitioning by Cloud Billing account. |
| 2022-12-09 | Rebilling BigQuery Export Schema Enhancements |  | Extends rebilling data exports to BigQuery with CustomerRepricingConfigName, ChannelPartnerRepricingName, and Tags columns. |
| 2022-12-09 | SKU Group Snapshot CSV Export |  | Allows downloading a snapshot of product SKUs for each SKU group as a CSV file from Partner Sales Console. |
| 2022-12-09 | SKU-Group Overrides in Repricing Configurations |  | Adds the option to add one override per SKU group in repricing configurations for customer discount or markup customization. |
| 2022-09-30 | Channel Services API Billing and Voice Expense Report Generation |  | Adds the ability in the Channel Services API to generate reports for Google Cloud billing and Google Voice expense data. |
| 2022-05-04 | Rebilling in Partner Sales Console and Cloud Channel API |  | Introduces rebilling availability in Partner Sales Console and Cloud Channel API for configuring discounts and exporting billing data to BigQuery. |
| 2022-02-14 | ListCustomers Filtering |  | Adds filters to the ListCustomers method so selected customers can be excluded from search results. |
| 2021-08-19 | ImportCustomer Method General Availability |  | Makes the ImportCustomer method generally available in Channel Services. |
| 2021-08-02 | ListProvisionableCloudIdentityTypes method |  | Introduces the ListProvisionableCloudIdentityTypes API method, which returns available Google Workspace customer types for a domain and indicates whether they require a transfer. |
| 2021-03-09 | LookupOffer method |  | Adds the LookupOffer API method for v1alpha1 to retrieve the Offer associated with an entitlement, including pricing details for expired offers and special sales proposals. |
| 2021-03-08 | ImportCustomer method |  | Adds the ImportCustomer API method in v1alpha1 as the first step of a transfer, replacing CreateCustomer and allowing customer data import by domain or Cloud Identity ID. |
| 2021-02-23 | Reseller Billing Account name in Offer resource |  | Makes the Reseller Billing Account name field available in the Offer resource to map Google Cloud Platform offers to reseller billing account names from Cloud Console. |
| 2021-01-05 | Google Cloud Channel Services API generally available |  | Releases the Google Cloud Channel Services API in general availability. |

Source file slug: `channel-services.md`

