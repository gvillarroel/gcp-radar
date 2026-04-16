---
title: "Requirements for Google Cloud Marketplace \_|\_ Google Cloud Marketplace Partners\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/marketplace/docs/partners/get-started
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/marketplace/docs/partners
source_metadata:
  url: https://docs.cloud.google.com/marketplace/docs/partners/get-started
  title: "Requirements for Google Cloud Marketplace \_|\_ Google Cloud Marketplace\
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
Guides
Send feedback
Requirements for Google Cloud Marketplace
Stay organized with collections
Save and categorize content based on your preferences.
If you want to offer products on Google Cloud Marketplace, you must meet the following
listing requirements. You must also maintain
operational best practices
for the types of products that you're offering.
If you make changes to your product or organization that affect your
compliance with these listing requirements or invalidate documentation that you
provided to Google during onboarding, you must notify Google and submit your
product for re-review and re-approval.
Note: Google offers a standard revenue share for products you sell through
Cloud Marketplace that meet all of the listed requirements and pass a
business case review during Google's internal product validation process. If
your product doesn't meet the requirements, or doesn't pass the business case
review, but you want to proceed with offering that product through
Cloud Marketplace, Google might offer you an adjusted revenue share.
Requirements for your organization
Your organization must join and maintain good standing in
Partner Advantage .
Note: If you aren't yet a Google partner, learn more and sign up at the
Join Google Cloud Partner Advantage
page.
After your organization has joined Partner Advantage, you get access to
Partner Hub.
Your organization must be incorporated in one of
the supported regions .
Your organization must have a
Cloud Marketplace vendor account
and
payment profile
in good standing.
Requirements for your product
Your product must be production-ready (not alpha or beta) to be publicly
listed and sold through Cloud Marketplace.
Your product must be enterprise-ready, including a professional online
presence, a defined sales motion, customer support, and adherence to strong
security best practices.
Your product must not include known vulnerabilities, viruses, spyware,
Trojan horses, or other malicious code of any kind.
You must verify to Google Cloud through an approval process during
onboarding that you host your software product primarily on
Google Cloud. The following patterns are common approved use cases:
Pattern 1: Your entire product, and all of its supporting components,
run entirely on Google Cloud. The following architecture diagram
provides an example of this pattern.
Pattern 2: Your product's compute or data plane runs on
Google Cloud, but smaller control planes or support infrastructure,
such as logging or AI inference, run on-premises or on another cloud. In this case, your
Google Cloud-hosted compute or data plane must be the resource
whose consumption increases the fastest when your users increase their
consumption. The following architecture diagram provides an example of
this pattern.
Pattern 3: Your storage, backup, replication, or data recovery (DR)
product must replicate all data to Google Cloud, while the product's
control plane can run on-premises or on other clouds. The following
architecture diagram provides an example of this pattern.
Pattern 4: Your product is migration tooling that has
Google Cloud as its only destination for migration, but can run
on-premises or on another cloud as a migration source. The following
architecture diagram provides an example of this pattern.
Pattern 5: Your product's compute or data plane runs on
Google Cloud. Your product's monitoring or security agents can run
on-premises or on another cloud, but they must send data to a
Google Cloud-hosted environment for storage and analysis. The
following architecture diagram provides an example of this pattern.
Pattern 6: Your product is a dataset hosted on and delivered through
Google Cloud. The following architecture diagram provides an example
of this pattern.
Pattern 7: Your product is a virtual machine (VM) or Kubernetes
product that's deployed to and runs on devices connected to
Google Distributed Cloud. Your product might connect to the internet to
integrate with other Google Cloud-hosted apps or services. The
following architecture diagram provides an example of this pattern.
You must ensure that your products on Cloud Marketplace have the same
capabilities and features as any versions of those products that you offer
outside of Cloud Marketplace.
You must ensure that your data products don't contain any "personally
identifiable sensitive information" as defined in the Protecting Americans'
Data from Foreign Adversaries Act of 2024.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
