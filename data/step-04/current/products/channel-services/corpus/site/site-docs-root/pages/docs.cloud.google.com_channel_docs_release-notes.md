---
title: "Channel Services release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/channel/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/channel/docs
source_metadata:
  url: https://docs.cloud.google.com/channel/docs/release-notes
  title: "Channel Services release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Channel Services
Resources
Send feedback
Channel Services release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page contains release notes for features and updates to Channel Services.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
October 04, 2024
v1
Change
Partners selling Workspace and ChromeOS products can now import customers who currently work with a different reseller or Google.
To import a customer, you must have the purchase consent from the customer for the product group that you want to buy for them.
Learn how to change a reseller's purchase consent .
March 06, 2024
v1
Feature
Partners selling Workspace can now use the BigQuery Export (Rebilling) feature to programmatically access their Workspace billing data. By setting up a BigQuery dataset and enabling the export, you can get billing data pushed to you as it becomes available, including Channel Service-specific identifiers, and any CRM IDs you may have configured for your customers.
You can use BigQuery to programmatically access your billing data, generate customer invoices, and perform Business Intelligence analysis. You can also create a Looker Studio Dashboard to provide cost management dashboards to your customers.
For Partners that sell both Google Cloud and Google Workspace, you can have all your billing data centralized with a unified BigQuery table schema .
Learn more in the following documentation:
How to set up the Channel Services rebilling export
Additional notes on the schema
Common troubleshooting steps
September 29, 2023
v1
Feature
You can now create BigQuery datasets for the Channel Services billing export in all supported BigQuery locations.
We recommend using a multi-region dataset for your Channel Services billing export, so that you can also get data from the previous month in your export.
Learn how to set up the Channel Services rebilling export .
July 17, 2023
v1
Feature
Distributors can now create repricing configurations for Channel Partners using EntitlementGranularity instead of ChannelPartnerGranularity in the Channel Services API.
We recommend using EntitlementGranularity for your repricing configurations, because it allows more customization depending on your customers' situations.
When you're using EntitlementGranularity , be aware of the following:
If at least one ChannelPartnerRepricingConfig with EntitlementGranularity becomes effective for an entitlement, no existing or future ChannelPartnerGranularity configurations apply to this Entitlement.
If you're using CustomerRepricingConfigs, this change doesn't affect your CustomerRepricingConfig s.
Learn more about creating repricing configurations .
June 13, 2023
v1
Feature
Two new Public APIs related to SKU groups now generally available:
ListSkuGroups - List of all rebilling supported SKU groups that can be configured in customer or channel partner repricing configs.
ListSkuGroupBillableSkus - Lists all Google Cloud SKUs which belong in a given SKU group.
Learn more about Rebilling and SKU groups:
Get an overview of Rebilling
Learn about managing repricing configurations and repricing configuration examples .
Export SKU Groups
Review the Google Cloud SKU groups
May 19, 2023
v1
Feature
You can now transact using Google Workspace billing accounts with different currencies. This feature helps you manage your resold and Google Workspace subscriptions in a single Cloud Channel account.
Get started with using multiple Google Workspace billing accounts
Manage your Google Workspace and Google Chrome entitlements
May 08, 2023
v1
Change
The following fields are now available in the Channel Services API:
In the Entitlement resource, the billingAccount field includes the Cloud Billing account that was used to pay for that entitlement.
In the fetchReportResults request, you can use the partitionKeys field to filter the results by specific partitions.
April 24, 2023
v1
Feature
You can now set up a unified Google Cloud Billing exports for multiple Partner Sales Console accounts.
This helps you export billing data directly to a single dataset for analysis.
The tables in the rebilling dataset support partitioning by Cloud Billing accounts, so you can still view data for specific Cloud Billing accounts independently without impact to query latency/costs.
Learn how to export your rebilling data to BigQuery .
March 14, 2023
v1
Change
All public SKU groups, including 8 Google Cloud Marketplace SKU groups are now available for repricing in the Partner Sales Console (PSC). You can can use the new SKU groups in repricing configurations to pass the granular margin to your customers. You can also view and download the list of SKUs in these SKU groups.
You can search for SKU groups by both name and ID.
Get an overview of Rebilling
Review the Google Cloud SKU groups
Learn about managing repricing configurations and repricing configuration examples .
January 30, 2023
v1
Change
Correlation ID is now available as a customer optional attribute. You can use this new field to store IDs from your other systems, so that you can organize your customers. For example, you can store a customer's ID from your existing customer relationship management (CRM) systems.
December 09, 2022
v1
Feature
More options are now available when you create and manage repricing configurations for your customers. This includes the option to add one override per SKU group (currently only Google Marketplace and Maps groups) to provide further discounts or markups for your customers.
A snapshot of product SKUs for each SKU group can be downloaded as a CSV from the partner Sales Console. Use this feature for greater control and transparency of partner program discounts. Visit the rebilling overview to learn more about this feature.
v1
Feature
Rebilling data exported to BigQuery now includes the columns: CustomerRepricingConfigName, ChannelPartnerRepricingName, and Tags. The first full month with this data will be Jan, 2023. For more information see the Rebilling Table Schema and sample export queries .
Tags are attached to resources and support inheritance, centralized management, nomenclature standardization, and policy engine integration. For Cloud Billing, Tags help map costs across your organization. In cost reporting, you can query on Tags to perform Cost Management tasks like chargebacks, audits, and other cost allocations.
December 06, 2022
v1
Change
The Partner Sales Console Dashboard and the Reporting API now use the rebilled values for Google Cloud and Maps customer costs. You can use this data set to simplify your customer billing process by using the API to integrate rebilled data in your billing applications.
September 30, 2022
v1
Feature
This release adds the ability to generate reports for Google Cloud billing and Google Voice expense data to the Channel Services API. The data in these reports is the same as the data found on the Partner Sales Console dashboard.
May 04, 2022
v1
Feature
Rebilling is now available in the Partner Sales Console and Cloud Channel API. This new billing data service helps you simplify your customer billing process by configuring discounts and exporting your billing data to a BigQuery dataset.
Read an overview of rebilling
Learn about enabling your rebilling data export
February 14, 2022
v1
Feature
This release adds filters to ListCustomers. You can use these filters to exclude selected customers from search results. For more information, visit our article about these new filters .
August 19, 2021
v1
Feature
The ImportCustomer method is now generally available.
August 02, 2021
v1alpha1
Feature
This release includes the new ListProvisionableCloudIdentityTypes method.
ListProvisionableCloudIdentityTypes returns the Google Workspace customer types you can create for a given domain, and shows if they require a transfer.
v1alpha1
Change
Added extra information to clarify which fields are not required for team customers.
June 21, 2021
v1alpha1
Change
Added a new feature for the ImportCustomer API to specify which customer will receive imported Cloud Identity information.
April 27, 2021
v1
Change
The create, delete, get, list, and patch Customer APIs can now use an alternate parent binding to specify the customer's Channel Partner. The returned resource name follows the format accounts/*/customers/* regardless of the parent binding.
v1
Change
Added LICENSE_CAP_CHANGED to the list of EntitlementEvent.Type.ENUM_VALUES to deliver notifications for a new Pub/Sub event type.
March 12, 2021
v1
Change
You can now use boolean as a parameter value .
v1
Change
Added customer-level Pub/Sub events definition to provide notifications when there is a primary domain change or verification for your customers.
March 09, 2021
v1alpha1
Feature
( v1alpha1 only ) This release includes the new LookupOffer method.
LookupOffer displays the Offer for an entitlement. This provides a programmatic way to pull the pricing details of any online offer, including expired offers and special sales proposals that are unavailable through the ListOffers endpoint.
March 08, 2021
v1alpha1
Feature
( v1alpha1 only ) This release includes the new ImportCustomer method.
ImportCustomer replaces CreateCustomer as the first step of a Transfer. You can use this method to import customer information using their domain or Cloud Identity ID.
February 23, 2021
v1
Feature
Reseller Billing Account name is now available in the Offer resource.
For Google Cloud Platform offers, you can use this field to map an offer to the Reseller Billing Account name from Cloud Console.
v1
Change
In the CheckCloudIdentityAccountsExist method, CloudIdentityAccounts now returns an empty list instead of a 404 error if the domain does not match an existing Cloud Identity.
In v1alpha1 , this returns a 404 error.
v1
Change
In the CreateCustomer and PatchCustomer endpoints, the addressLines field is now required for customer.orgPostalAddress .
This field is optional in v1alpha1 .
January 05, 2021
v1
Feature
The Google Cloud Channel Services API is now Generally available . To get started, see Getting access to the Channel Services API .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
