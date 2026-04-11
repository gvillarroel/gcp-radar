---
title: "Offer data products \_|\_ Google Cloud Marketplace Partners \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/marketplace/docs/partners/data
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/marketplace/docs/partners/access-control
source_metadata:
  url: https://docs.cloud.google.com/marketplace/docs/partners/data
  title: "Offer data products \_|\_ Google Cloud Marketplace Partners \_|\_ Google\
    \ Cloud Documentation"
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
Develop
Send feedback
Offer data products
Stay organized with collections
Save and categorize content based on your preferences.
Data products in Google Cloud Marketplace provide data for your customers to use in
BigQuery sharing (formerly Analytics Hub). You can offer data products with subscription pricing
models or for free. If your data product is free, your users are only charged
for their Google Cloud usage.
For an overview of sharing, see
Introduction to BigQuery sharing .
Requirements for data products
All products that you offer through Cloud Marketplace must comply with the
Cloud Marketplace
listing requirements . If you offer
data products, they must meet the following additional requirement:
Your data product can't contain any "personally identifiable sensitive
information", as defined in the
Protecting Americans' Data from Foreign Adversaries Act of 2024 .
Pricing models for data products
You can choose one of the following pricing models for your product:
Free : Customers only pay for the Google Cloud resources that they
use.
Subscription-based pricing : Customers pay a flat fee to access your data
product, and are billed separately for the Google Cloud resources that
they use. For monthly subscriptions, the subscription renews at the end of
every month, and for partial months, the cost is prorated.
You can also create customized quotes for specific customers. For example, if
you offer a subscription-based Standard plan for $100 per month, you can create
a custom quote that gives your customer the same plan for $50 per month. For
steps to create a custom quote, see
Create a private offer for a customer .
Overview of onboarding a data product
To offer a data product through Cloud Marketplace, you must first create a
listing in Sharing. For instructions, see
Create a listing
in the Sharing documentation.
After you create your Sharing listing, you create a data
product in Cloud Marketplace that points to your
Sharing listing, so that you can offer it through
Cloud Marketplace. You use Producer Portal to
add your data product .
Configs
After you add a data product in Producer Portal, you create one
or more configs . A config is an editable draft representation of how you plan
to offer your data product through Cloud Marketplace, including product and
pricing details.
To publish a config, you submit it for review. You can have multiple draft
configs for one data product, but you can only submit one config at a time for
review. The first time that you publish an approved config for your data
product, it publishes the product to Cloud Marketplace. Each subsequent
time that you publish a new approved config for that data product, it replaces
the product's previous published config in production.
For each config that you plan to release, you complete the following steps:
Add product details for
your data product's Cloud Marketplace listing to the config.
Add pricing information to
the config.
Reviewing and publishing a config
To publish a config, you must submit it for review. After you submit the config
for review, you can't edit it unless you cancel the review.
If the config passes the review process, you can click to publish it to
Cloud Marketplace. If the review fails, you can clone the config, modify it
as needed, and then submit that new config for review.
After you click to publish your product, it might take up to two days for your
product's listing to be publicly accessible in Cloud Marketplace.
Submit information about your product
Before you begin setting up and integrating your product, you must complete the
Cloud Marketplace Project Info Form .
After you complete the form, your Partner Engineer gives you access to
Producer Portal.
What's next
Add your data product to
Cloud Marketplace by using Producer Portal.
If you don't already have one that you plan to use,
create a listing in Sharing
which you can use to create a Cloud Marketplace data product.
Next
Add your data product
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
