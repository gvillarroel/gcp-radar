---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T11:56:59.871Z"
product_name: "Channel Services"
product_slug: "channel-services"
feature_name: "SKU-Group Overrides in Repricing Configurations"
feature_slug: "sku-group-overrides-in-repricing-configurations"
latest_feature_date: "2022-12-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/channel/docs/rebilling/manage-repricing-configurations"
  - "https://docs.cloud.google.com/channel/docs/concepts/sku-groups"
  - "https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries"
keywords:
  - "overrides"
  - "option"
  - "configurations"
  - "repricing"
  - "group"
  - "adds"
---

# SKU-Group Overrides in Repricing Configurations

Product: Channel Services
Coverage: MEDIUM

## Step 02 Summary

Adds the option to add one override per SKU group in repricing configurations for customer discount or markup customization.

## Extended Definition

Adds the option to add one override per SKU group in repricing configurations for customer discount or markup customization.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/channel/docs/rebilling/manage-repricing-configurations](https://docs.cloud.google.com/channel/docs/rebilling/manage-repricing-configurations)
- [https://docs.cloud.google.com/channel/docs/concepts/sku-groups](https://docs.cloud.google.com/channel/docs/concepts/sku-groups)
- [https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries](https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries)

## Supporting Pages

### "Create and manage repricing configurations \_|\_ Channel Services \_|\_\

- URL: [https://docs.cloud.google.com/channel/docs/rebilling/manage-repricing-configurations](https://docs.cloud.google.com/channel/docs/rebilling/manage-repricing-configurations)
- Source ID: `site-docs-reference`
- Final score: 169
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Add overrides to a custom rule You can use overrides to set repricing configurations for specific SKU groups ( Learn more about SKU Groups ).
- You can use custom repricing configurations to markup or discount direct customer costs, list prices, and specific SKU groups by a set percentage.
- The repricing management pane has a table with the following columns: Active on : The date an upcoming configuration becomes active, the date the current configuration became active, and the date when past configurations were active.
- View repricing configurations To view more details about the current repricing configurations for a customer, navigate to the Customers page of the Partner Sales Console and select the customer's Name to view their details.

### Google Cloud SKU groups \_|\_ Channel Services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/channel/docs/concepts/sku-groups](https://docs.cloud.google.com/channel/docs/concepts/sku-groups)
- Source ID: `site-docs-reference`
- Final score: 95
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Channel Services SKU groups All public SKU groups in addition to the following SKU groups are available for use when you create and manage custom repricing configurations: Third Party Marketplace (Id: 31f47c09-96ff-43dc-912b-bb3808148be2) Google Maps Platform (Id: d56c1f4c-d3bb-4a7b-acb0-8376793b4105) GCP Reseller (Id: 3d50fd57-3157-4577-a5a9-a219b8490041) Marketplace vendor SKU Groups The SKUs in the groups under this category include private SKUs and might not be visible to all partners.
- But there might be individual ISV-level margins available to you via overrides on ISV SKU groups above.
- Elastic Marketplace SKUs (Id: 4935495f-6ae7-44b8-b3b5-e3545492b732) Splunk Marketplace SKUs (Id: d4806ac5-1df1-4a95-9dfc-c22784c3ea0d) MongoDB Marketplace SKUs (Id: 3c98e00f-626d-40b1-8806-678b19ec51f8) Netapp Marketplace SKUs (Id: cd701612-f7a4-436e-ab6f-9398172307b2) Palo Alto Networks Marketplace SKUs (Id: d8938e23-f696-4242-8385-ab3f86e0b0f0) Redis Marketplace SKUs (Id: de0c79ce-c2fd-49bd-b1b2-66277e14b278) Itopia Marketplace SKUs (Id: 2e573702-a404-4d9f-bcb8-67f31faa571d) HashiCorp Marketplace SKUs (Id: 53ce8604-8e0b-4e8a-9540-85f2e5154a03) Third party Marketplace SKU group This group includes product SKUs from third-party software providers.
- Home Technology areas Channel Services Guides Send feedback Google Cloud SKU groups Stay organized with collections Save and categorize content based on your preferences.

### "BigQuery export query examples \_|\_ Channel Services \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries](https://docs.cloud.google.com/channel/docs/rebilling/example-export-queries)
- Source ID: `site-docs-reference`
- Final score: 64
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The values channel partner cost and credit.channel partner amount show your Repricing configurations.
- The values customer cost and credit.customer amount show your Repricing configurations.
- DATASET NAME . reseller billing detailed export v1 WHERE export time BETWEEN TIMESTAMP ( START DATE ) AND TIMESTAMP ( END DATE ) AND payer billing account id = ' EXTERNAL BILLING ACCOUNT ID ' AND invoice . month = ' INVOICE MONTH ' GROUP BY domain name , customer id , sku name , sku id , description , order name , start date , end date , po number HAVING amount != 0 ORDER BY domain name , order name , start date , end date ; Other columns of interest to add to SELECT and GROUP BY clauses: billing account id : Represents the Customer Cloud Identity ID. customer name : Represents the customer resource which can be used in API calls. channel partner name : (For distributors) Represents the channel partner. entitlement name : Resource name of the Entitlement in Channel Services. customer correlation id : A Customer Relationship Management (CRM) ID that you can define for a customer. usage.amount : For Google Workspace seat-based usage, this indicates paid seats.
- DATASET NAME . reseller billing detailed export v1 WHERE export time BETWEEN TIMESTAMP ( START DATE ) AND TIMESTAMP ( END DATE ) GROUP BY customer name , billing account id , payer billing account id , currency , invoice . month ORDER BY customer name , billing account id , payer billing account id , currency , invoice . month ; Sum of customer costs by Cloud Billing subaccount, as shown to the subaccount owner This query shows you how the data cost numbers map with what a resold customer (or you as the partner) sees when they open the Google Cloud console for their subaccount.

