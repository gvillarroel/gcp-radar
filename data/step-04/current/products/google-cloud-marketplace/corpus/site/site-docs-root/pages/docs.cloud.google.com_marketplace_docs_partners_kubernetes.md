---
title: "Offering Kubernetes apps \_|\_ Google Cloud Marketplace Partners \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/marketplace/docs/partners/kubernetes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/marketplace/docs/partners
source_metadata:
  url: https://docs.cloud.google.com/marketplace/docs/partners/kubernetes
  title: "Offering Kubernetes apps \_|\_ Google Cloud Marketplace Partners \_|\_ Google\
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
Offering Kubernetes apps
Stay organized with collections
Save and categorize content based on your preferences.
A Kubernetes app is a containerized app that your users can run on a
Kubernetes cluster in Google Kubernetes Engine, or on their own infrastructure. The
Kubernetes app that you submit to Cloud Marketplace is a bundle of
container images, configuration files, and display metadata.
This page is an overview of what you need to do to distribute and maintain a
containerized app on Cloud Marketplace. If you already have a
Kubernetes app on Cloud Marketplace and want to learn about
maintaining it, see the
guidelines for maintaining your app after it's live .
For an overview of Kubernetes concepts, see the
Kubernetes documentation .
If you're new to Google Kubernetes Engine, see the Google Kubernetes Engine
overview , or
try the Google Kubernetes Engine Quickstart .
Note: Starting January 20, 2025, Google Cloud Marketplace is requiring that all new or
updated deployments of Google Kubernetes Engine app product listings contain an annotation
in their image manifest that identifies the service name of the product. For
more information, see
Migrate to annotating container images with their service name .
Before you begin
If you're new to offering software on Cloud Marketplace,
sign up to become a vendor .
To get access to Producer Portal, complete the
Cloud Marketplace Project Info Form , provided by the Cloud Marketplace team.
Review the open source
compliance recommendations and restrictions.
Checklist
At a high level, you must do the following:
Create a public Git repository for your app's configuration, user
guide, and other resources to run your app. You can host the repository with
a provider such as GitHub, Cloud Source Repositories, or on your own server.
Set up your Google Cloud environment .
Review the pricing options, and select a pricing model .
Pricing models take up to four business days to review. You can continue integrating your product while the pricing model is reviewed.
Create your app package, which must meet the
technical requirements
for the container images and configuration files that are
part of your product.
Submit the app to Cloud Marketplace .
The Cloud Marketplace team reviews your app, which includes verifying
that your app installs and uninstalls successfully, running unit tests, and
scanning your containers for vulnerabilities using
Artifact Analysis .
After your app is reviewed, it is published on Cloud Marketplace.
Review the guidelines for maintaining
your product after it is live.
If you have questions during the onboarding process, contact your
Cloud Marketplace Partner Engineer. If you don't know who your assigned
Partner Engineer is, use the
Partner Support Desk to request assistance,
and include the word "Marketplace" in your description. For more information
about Partner Support Desk, visit
Request assistance with Cloud Marketplace .
Next
Setting up your Google Cloud environment
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
