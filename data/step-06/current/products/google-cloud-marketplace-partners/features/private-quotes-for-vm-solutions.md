---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:29.086Z"
product_name: "Google Cloud Marketplace Partners"
product_slug: "google-cloud-marketplace-partners"
feature_name: "Private quotes for VM solutions"
feature_slug: "private-quotes-for-vm-solutions"
latest_feature_date: "2020-04-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/marketplace/docs/partners/access-control"
  - "https://docs.cloud.google.com/marketplace/docs/partners/vm"
  - "https://docs.cloud.google.com/marketplace/docs/partners/create-offers"
  - "https://docs.cloud.google.com/marketplace/docs/partners/data/choose-pricing"
keywords:
  - "private"
  - "quotes"
  - "for"
  - "vm"
  - "solutions"
  - "this"
  - "lets"
  - "publishers"
---

# Private quotes for VM solutions

Product: Google Cloud Marketplace Partners
Coverage: MEDIUM

## Step 02 Summary

This feature lets publishers create private quotes for specific customers for VM solutions.

## Extended Definition

This feature lets publishers create private quotes for specific customers for VM solutions.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/marketplace/docs/partners/access-control](https://docs.cloud.google.com/marketplace/docs/partners/access-control)
- [https://docs.cloud.google.com/marketplace/docs/partners/vm](https://docs.cloud.google.com/marketplace/docs/partners/vm)
- [https://docs.cloud.google.com/marketplace/docs/partners/create-offers](https://docs.cloud.google.com/marketplace/docs/partners/create-offers)
- [https://docs.cloud.google.com/marketplace/docs/partners/data/choose-pricing](https://docs.cloud.google.com/marketplace/docs/partners/data/choose-pricing)

## Supporting Pages

### "Configure access control for Producer Portal users \_|\_ Google Cloud Marketplace\

- URL: [https://docs.cloud.google.com/marketplace/docs/partners/access-control](https://docs.cloud.google.com/marketplace/docs/partners/access-control)
- Source ID: `site-iam-reference`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- If you used the VM guided configuration to create your VM product's deployment package, grant your users the following roles for the Cloud Storage bucket where you store your product's deployment package: Storage Object Viewer Storage Object Creator Access control for previewing your products in Cloud Marketplace If you want users to be able to preview your product's listing as your customers see it in Cloud Marketplace, you must grant them the following role: Service Management Consumer Access control for creating and managing private offers in Producer Portal For users to create and manage private offers in the Private offers tab of Producer Portal, grant them the following roles: Commerce Price Management Private Offers Admin Commerce Producer Viewer Access control for viewing key events for private offers For users to view the history of an offer that your organization has published, grant them the Commerce Price Management Events Viewer role.
- Access control for viewing reseller discounts in Producer Portal For users to view resources and configurations related to reseller discounts in Producer Portal, grant them the following roles: Commerce Business Enablement Reseller Discount Viewer ( roles/commercebusinessenablement.resellerDiscountViewer ) Commerce Price Management Viewer ( roles/commercepricemanagement.viewer ) Access control for creating and managing reseller discounts in Producer Portal For users to create and manage resources and configurations related to reseller discounts in Producer Portal, grant them the following roles: Commerce Business Enablement Reseller Discount Admin ( roles/commercebusinessenablement.resellerDiscountAdmin ) Commerce Price Management Viewer ( roles/commercepricemanagement.viewer ) Access control for managing analytics and reports in Producer Portal For users to manage analytics, test accounts, sales lead management, and reports for your products in the Analytics , Test billing accounts , Sales lead management , and Reports tabs of Producer Portal, grant them the following roles: Commerce Business Enablement Configuration Admin ( roles/commercebusinessenablement.admin ) Commerce Producer Viewer ( roles/commerceproducer.viewer ) Project Viewer ( roles/viewer ) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Additional roles for virtual machine (VM) and Kubernetes products For VM or Kubernetes products, grant your users the Compute Storage Admin role.
- Access control for viewing which resellers are allowed to resell your products For users to view which resellers are allowed to resell your Cloud Marketplace products, or which resellers have been disallowed from reselling your products, grant them one of the following roles: Commerce Business Enablement Configuration Viewer ( roles/commercebusinessenablement.viewer ) Commerce Business Enablement Configuration Admin ( roles/commercebusinessenablement.admin ) Access control for managing which resellers are allowed to resell your products For users to manage which resellers are allowed to resell your Cloud Marketplace products, grant them the Commerce Business Enablement Configuration Admin ( roles/commercebusinessenablement.admin ) role.

### "Offering virtual machine (VM) products \_|\_ Google Cloud Marketplace Partners\

- URL: [https://docs.cloud.google.com/marketplace/docs/partners/vm](https://docs.cloud.google.com/marketplace/docs/partners/vm)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Next Setting up your Google Cloud environment arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- This page is an overview of what you need to do to distribute and maintain a VM product on Cloud Marketplace.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
- Home Documentation Access and resource management Google Cloud Marketplace Partners Develop Send feedback Offering virtual machine (VM) products Stay organized with collections Save and categorize content based on your preferences.

### "Create a private offer for a customer \_|\_ Google Cloud Marketplace Partners\

- URL: [https://docs.cloud.google.com/marketplace/docs/partners/create-offers](https://docs.cloud.google.com/marketplace/docs/partners/create-offers)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- For the Google Cloud project where you manage your products, you must have the following Identity and Access Management (IAM) role(s): Project Editor ( roles/editor ) OR Commerce Producer Viewer ( roles/commerceproducer.viewer ) AND Commerce Price Management Private Offers Admin ( roles/commercepricemanagement.privateOffersAdmin ) If you don't have the roles, request access from a Project Owner ( roles/owner ).
- Home Documentation Access and resource management Google Cloud Marketplace Partners Go to market Send feedback Create a private offer for a customer Stay organized with collections Save and categorize content based on your preferences.
- For information about managing your team's access, see Configure access control for creating and managing private offers in Producer Portal .
- For steps, visit Configure your SaaS product's backend for private offers .

### "Add pricing information to a config \_|\_ Google Cloud Marketplace Partners\

- URL: [https://docs.cloud.google.com/marketplace/docs/partners/data/choose-pricing](https://docs.cloud.google.com/marketplace/docs/partners/data/choose-pricing)
- Source ID: `site-iam-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Marketplace uses these features to customize what capabilities this plan provides for private offers.
- Previous arrow back Add product details to a config Next Publish your data product arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Caution: After you've published your data product, you can't remove support for types of transactions (such as standard offers or private offers) that you've previously supported.
- Add features to your pricing plans For each of your pricing plans that supports private offers, under Add features , add at least one feature.

