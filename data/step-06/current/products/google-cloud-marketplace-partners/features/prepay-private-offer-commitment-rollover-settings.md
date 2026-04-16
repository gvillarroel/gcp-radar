---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:29.082Z"
product_name: "Google Cloud Marketplace Partners"
product_slug: "google-cloud-marketplace-partners"
feature_name: "Prepay private offer commitment rollover settings"
feature_slug: "prepay-private-offer-commitment-rollover-settings"
latest_feature_date: "2023-05-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/marketplace/docs/partners/create-offers"
  - "https://docs.cloud.google.com/marketplace/docs/partners/access-control"
  - "https://docs.cloud.google.com/marketplace/docs/partners/professional-services"
  - "https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements"
keywords:
  - "prepay"
  - "private"
  - "offer"
  - "commitment"
  - "rollover"
  - "settings"
  - "when"
  - "creating"
---

# Prepay private offer commitment rollover settings

Product: Google Cloud Marketplace Partners
Coverage: MEDIUM

## Step 02 Summary

When creating or amending a prepay private offer with CUD pricing, you can choose whether unused commitment expires or rolls over between installments.

## Extended Definition

When creating or amending a prepay private offer with CUD pricing, you can choose whether unused commitment expires or rolls over between installments.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/marketplace/docs/partners/create-offers](https://docs.cloud.google.com/marketplace/docs/partners/create-offers)
- [https://docs.cloud.google.com/marketplace/docs/partners/access-control](https://docs.cloud.google.com/marketplace/docs/partners/access-control)
- [https://docs.cloud.google.com/marketplace/docs/partners/professional-services](https://docs.cloud.google.com/marketplace/docs/partners/professional-services)
- [https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements](https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements)

## Supporting Pages

### "Create a private offer for a customer \_|\_ Google Cloud Marketplace Partners\

- URL: [https://docs.cloud.google.com/marketplace/docs/partners/create-offers](https://docs.cloud.google.com/marketplace/docs/partners/create-offers)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- For information about managing your team's access, see Configure access control for creating and managing private offers in Producer Portal .
- If you're creating a private offer to replace an active one, visit Modify a published offer to learn about replacement options.
- For the Google Cloud project where you manage your products, you must have the following Identity and Access Management (IAM) role(s): Project Editor ( roles/editor ) OR Commerce Producer Viewer ( roles/commerceproducer.viewer ) AND Commerce Price Management Private Offers Admin ( roles/commercepricemanagement.privateOffersAdmin ) If you don't have the roles, request access from a Project Owner ( roles/owner ).
- If you want to add a custom end user license agreement (EULA) to your private offer, you must also have the Commerce Price Management Private Offers Admin ( roles/commercepricemanagement.privateOffersAdmin ) role, or equivalent permissions.

### "Configure access control for Producer Portal users \_|\_ Google Cloud Marketplace\

- URL: [https://docs.cloud.google.com/marketplace/docs/partners/access-control](https://docs.cloud.google.com/marketplace/docs/partners/access-control)
- Source ID: `site-iam-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- If you used the VM guided configuration to create your VM product's deployment package, grant your users the following roles for the Cloud Storage bucket where you store your product's deployment package: Storage Object Viewer Storage Object Creator Access control for previewing your products in Cloud Marketplace If you want users to be able to preview your product's listing as your customers see it in Cloud Marketplace, you must grant them the following role: Service Management Consumer Access control for creating and managing private offers in Producer Portal For users to create and manage private offers in the Private offers tab of Producer Portal, grant them the following roles: Commerce Price Management Private Offers Admin Commerce Producer Viewer Access control for viewing key events for private offers For users to view the history of an offer that your organization has published, grant them the Commerce Price Management Events Viewer role.
- Access control for viewing reseller discounts in Producer Portal For users to view resources and configurations related to reseller discounts in Producer Portal, grant them the following roles: Commerce Business Enablement Reseller Discount Viewer ( roles/commercebusinessenablement.resellerDiscountViewer ) Commerce Price Management Viewer ( roles/commercepricemanagement.viewer ) Access control for creating and managing reseller discounts in Producer Portal For users to create and manage resources and configurations related to reseller discounts in Producer Portal, grant them the following roles: Commerce Business Enablement Reseller Discount Admin ( roles/commercebusinessenablement.resellerDiscountAdmin ) Commerce Price Management Viewer ( roles/commercepricemanagement.viewer ) Access control for managing analytics and reports in Producer Portal For users to manage analytics, test accounts, sales lead management, and reports for your products in the Analytics , Test billing accounts , Sales lead management , and Reports tabs of Producer Portal, grant them the following roles: Commerce Business Enablement Configuration Admin ( roles/commercebusinessenablement.admin ) Commerce Producer Viewer ( roles/commerceproducer.viewer ) Project Viewer ( roles/viewer ) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Access control for managing your Partner Advantage account and your organization For users to manage your Partner Advantage account and your organization-level settings, grant them one of the following two roles: Commerce Business Enablement Configuration Admin ( roles/commercebusinessenablement.admin ) Commerce Business Enablement Configuration Viewer ( roles/commercebusinessenablement.viewer ) Access control for viewing product listings For users to view in-progress product listings that you create in Producer Portal, grant them the Commerce Producer Viewer role.
- Access control for managing disbursements and payments in Producer Portal For users to create payment profiles to manage disbursement and payment settings in the Payments tab of Producer Portal, grant them the following roles: Commerce Business Enablement PaymentConfig Admin Commerce Producer Viewer Note: These roles enable users to create payment profiles.

### "Offer professional services \_|\_ Google Cloud Marketplace Partners \_|\_\

- URL: [https://docs.cloud.google.com/marketplace/docs/partners/professional-services](https://docs.cloud.google.com/marketplace/docs/partners/professional-services)
- Source ID: `site-docs-root`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- If you offer professional services, you must meet the following requirements: Cloud Marketplace must be able to use the agency transaction model for your private offers that include professional services products.
- While your product's listing is publicly accessible in Cloud Marketplace, for customers to be able to purchase your professional services, you (or a reseller) must create private offers for your customers.
- To sell your professional services to a customer, you (or a Google Cloud reseller) use Private Offers to create a custom quote and send it to your customer.
- Customers can buy professional services only by accepting a private offer from you or from a reseller of Google Cloud products.

### "REST Resource: providers.entitlements \_|\_ Google Cloud Marketplace Partners\

- URL: [https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements](https://docs.cloud.google.com/marketplace/docs/partners/commerce-procurement-api/reference/rest/v1/providers.entitlements)
- Source ID: `site-api-reference`
- Final score: 78
- Re-rank relevance: N/A

Evidence snippets:
- If the entitlement is in the state ENTITLEMENT PENDING PLAN CHANGE APPROVAL or ENTITLEMENT PENDING PLAN CHANGE: If the entitlement's pricing model is usage based and the associated offer is a private offer whose term has ended, then this field reflects the ACTUAL end time of the entitlement's associated offer (in the past), even though the entitlement associated with this private offer does not terminate at the end of that private offer's term.
- Format: 'projects/{project}/services/{service}/privateOffers/{offer}' OR 'projects/{project}/services/{service}/standardOffers/{offer}', depending on whether the offer is private or public.
- Format: 'projects/{project}/services/{service}/privateOffers/{offer}' OR 'projects/{project}/services/{service}/standardOffers/{offer}', depending on whether the offer is private or public.
- It could be either the product service that the offer is referencing, or a generic private offer parent service.

