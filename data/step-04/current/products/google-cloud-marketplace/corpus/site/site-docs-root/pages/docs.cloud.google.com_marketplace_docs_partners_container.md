---
title: "Offering container image products \_|\_ Google Cloud Marketplace Partners\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/marketplace/docs/partners/container
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/marketplace/docs/partners
source_metadata:
  url: https://docs.cloud.google.com/marketplace/docs/partners/container
  title: "Offering container image products \_|\_ Google Cloud Marketplace Partners\
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
Develop
Send feedback
Offering container image products
Stay organized with collections
Save and categorize content based on your preferences.
This page is an overview of what you need to do to distribute and maintain a
container image product on Cloud Marketplace.
Before you begin
Review the open source
compliance recommendations and restrictions.
Create your
Google Cloud project and grant the Project Editor role to cloud-commerce-marketplace-onboarding@twosync-src.google.com .
Complete the Project Info form that the Cloud Marketplace team
sends you. To fill out the form, you might need to request access to it.
After you send us the required information, we give you access to
Producer Portal, which you use in the next step, technical integration.
Overview of technical integration
As a partner, you use Producer Portal to create Google Cloud Marketplace
products. You enter product details, configure what images are shown, and
preview how your listing appears in Cloud Marketplace.
Users pull container images from a Google-owned container registry repository,
marketplace.gcr.io/ YOUR-PARTNER-PUBLISHED-NAME / YOUR-PRODUCT-PUBLISHED-NAME .
You give Google your product images by using a staging repository with the
suffix gcr.io , which you provide during product creation. You specify which
Container Registry tags you'd like to present in Cloud Marketplace.
When your product is published, Google copies the specified images from your
staging gcr.io repository to the official marketplace.gcr.io repository,
from which users download your container images.
Note: Starting January 20, 2025, Google Cloud Marketplace is requiring that all new or
updated deployments of container image products contain an annotation in their
image manifest that identifies the service name of the product. For more
information, see
Migrate to annotating container images with their service name .
Requirements for container image products
Your product's container image must contain the following annotation in its
image manifest:
com.googleapis.cloudmarketplace.product.service.name=services/ SERVICE_NAME
Replace SERVICE_NAME with the name of your service
(for example, example.endpoints.example-project.cloud.goog ). To find your
product's service name, in Producer Portal, visit the Overview page
and see the Service name column. For more information about annotations, see
the Open Container Initiative's documentation of
annotations
on GitHub.
Best practices for container image products
We recommend the following best practices for all container image products:
Create Getting Started documentation
Add User Support documentation
Note : The Cloud Marketplace Partners
documentation focuses on onboarding your product;
you should be aware that you are expected to maintain fresh, up-to-date, and
secure products after launch. For more detailed information, refer to your
Google Cloud Marketplace Partner Agreement.
Reviewing and launching
After you submit your product, cloud-partner-eng will review your submission
and work with you to resolve any issues before approving it. When the product
is approved, it is launched within 15 minutes of approval.
Next
Setting up the technical components
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
