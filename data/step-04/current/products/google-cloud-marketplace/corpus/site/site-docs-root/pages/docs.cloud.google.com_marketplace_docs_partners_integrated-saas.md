---
title: "Offering software as a service (SaaS) products \_|\_ Google Cloud Marketplace\
  \ Partners \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/marketplace/docs/partners/integrated-saas
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/marketplace/docs/partners
source_metadata:
  url: https://docs.cloud.google.com/marketplace/docs/partners/integrated-saas
  title: "Offering software as a service (SaaS) products \_|\_ Google Cloud Marketplace\
    \ Partners \_|\_ Google Cloud Documentation"
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
Offering software as a service (SaaS) products
Stay organized with collections
Save and categorize content based on your preferences.
Software as a service (SaaS) products on Cloud Marketplace are software
products that run on Google Cloud, and are billed by Google. These require
partner-managed infrastructure. This section describes the high-level steps that
you must take to integrate your SaaS product with Cloud Marketplace.
Before you begin
If you're new to offering software on Cloud Marketplace,
sign up to become a vendor .
To get access to Producer Portal, complete the
Cloud Marketplace Project Info Form , provided by the Cloud Marketplace team.
Product-specific requirements
If you want to publish a SaaS product, it must meet the following requirements:
It must comply with the Cloud Marketplace
listing requirements .
It must not include professional services, hardware, or other non-software
components that are billed through Cloud Marketplace.
Checklist
Set up your SaaS product ,
so that you can distribute your product and display it on
Cloud Marketplace.
Review the available pricing options, and select a pricing model .
Pricing models take up to four business days to review. You can continue integrating your product while the pricing model is reviewed.
Integrate your product with Cloud Marketplace .
The integration includes modifying the frontend and backend of your software
to create accounts for users, link the accounts to their Google accounts,
and provide a way for users to sign in to your app using their Google
credentials. For products whose architecture involves a data plane in the
customer's Google Cloud project that connects to a control plane in
your Google Cloud project, this involves
adding a consumption tracking label
to track your product's associated consumption of Google Cloud
resources.
Publish your product to Cloud Marketplace .
To publish your product, you submit various parts of your product for
review. The Cloud Marketplace team reviews each submission and works with
you to resolve any issues before approving it. When all of your submissions
are approved, you can publish and launch the product within a few minutes.
Integrating with App Lifecycle Manager
If you use App Lifecycle Manager to deploy and operate your SaaS product, you can also
take advantage of streamlined validation and tenant onboarding. For more
information, see Integrate with App Lifecycle Manager .
Next
Set up your software as a service (SaaS) product for Google Cloud
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
