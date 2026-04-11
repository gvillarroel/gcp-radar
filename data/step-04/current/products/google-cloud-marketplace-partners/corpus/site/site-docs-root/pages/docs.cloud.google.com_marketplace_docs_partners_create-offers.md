---
title: "Create a private offer for a customer \_|\_ Google Cloud Marketplace Partners\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/marketplace/docs/partners/create-offers
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/marketplace/docs/partners
source_metadata:
  url: https://docs.cloud.google.com/marketplace/docs/partners/create-offers
  title: "Create a private offer for a customer \_|\_ Google Cloud Marketplace Partners\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Google Cloud Marketplace
Partners
Go to market
Send feedback
Create a private offer for a customer
Stay organized with collections
Save and categorize content based on your preferences.
The following articles explain how to create and publish a new private offer. If
you're creating a private offer to replace an active one, visit
Modify a published offer
to learn about replacement options.
Before you begin
Your product must be integrated with and listed on Cloud Marketplace.
You must have the customer's Cloud Billing account ID. If you don't have
the ID, request it from your customer.
For the Google Cloud project where you manage your products, you must have the
following Identity and Access Management (IAM) role(s):
Project Editor ( roles/editor ) OR
Commerce Producer Viewer ( roles/commerceproducer.viewer ) AND
Commerce Price Management Private Offers Admin
( roles/commercepricemanagement.privateOffersAdmin )
If you don't have the roles, request access from a Project Owner
( roles/owner ). For information about managing your team's access, see
Configure access control for creating and managing private offers in Producer Portal .
If you want to add a custom end user license agreement (EULA) to your
private offer, you must also have the Commerce Price Management Private
Offers Admin ( roles/commercepricemanagement.privateOffersAdmin ) role,
or equivalent permissions.
For SaaS products, ensure that you've set up entitlements to track usage.
For steps, visit
Configure your SaaS product's backend for private offers .
Create a private offer
You create private offers by using Producer Portal. The direct link to Producer
Portal is:
https://console.cloud.google.com/producer-portal?project= PUBLIC_PROJECT_ID
Replace PUBLIC_PROJECT_ID with the Google Cloud project that you use
to manage your Cloud Marketplace products.
To create your private offer:
In Producer Portal, navigate to the Private Offers page. The direct link
to the page is:
https://console.cloud.google.com/producer-portal/private-offers
In the Private Offers page, click Create offer .
What's next
After creating the offer, you complete the following steps in Producer Portal:
Add product and customer details
to the offer.
Set up pricing
for your offer.
Specify the end user license agreement (EULA)
for your offer.
Review and publish your
offer.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
