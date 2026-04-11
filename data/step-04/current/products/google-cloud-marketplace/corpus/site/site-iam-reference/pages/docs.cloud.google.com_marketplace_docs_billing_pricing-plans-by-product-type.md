---
title: "Pricing plans for Google Cloud Marketplace products \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/marketplace/docs/billing/pricing-plans-by-product-type
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/marketplace/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/marketplace/docs/billing/pricing-plans-by-product-type
  title: "Pricing plans for Google Cloud Marketplace products \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Google Cloud Marketplace
Guides
Send feedback
Pricing plans for Google Cloud Marketplace products
Stay organized with collections
Save and categorize content based on your preferences.
Vendors offering Cloud Marketplace products can choose how they want to set
up their products' pricing plans. Depending on the type of product, you might be
charged subscription fees, usage fees, or a combination of the two.
This page lists the types of pricing plans available for each type of
Cloud Marketplace product.
Pricing plans for SaaS products
The types of plans for software as a service (SaaS) products include:
Monthly subscriptions , or a subscription for a specific period, such as a
year or longer. The vendor might offer multiple subscription plans, such as
Basic, Standard, and Pro plans.
Note: If you choose a specific subscription period, such as a year, you can
increase your service level or choose a longer subscription period at any
time. However, if you want to choose a shorter subscription period,
downgrade, or cancel your service, the change takes effect after the
subscription period is complete. For example, if you're on a Standard
one-year plan and want to switch to a Standard monthly plan, or to a Basic
plan, the change takes effect after you complete one year on the Standard
plan.
Usage-based , based on measurements set by the vendor. For example, some
vendors might charge by the quantity of data you process in the app.
A combination of subscription and usage fees. For example, a vendor
might charge a monthly fee of $10 for a Basic plan, and an additional $0.01
for every GiB of data processed.
Cloud Marketplace doesn't associate subscription fees with a specific
Google Cloud project. Cloud Marketplace links usage fees to an
automatically-created Google Cloud project whose ID begins with pr ,
followed by a series of unique letters and numbers. To maintain reporting
accuracy, don't remove the link from this Google Cloud project to your
Cloud Billing account.
Pricing plans for VM products
The types of plans for VM products include:
A flat hourly rate, billed monthly.
Usage fees, based on the resources in your deployment, such as the number of
vCPUs, the amount of memory, or the number of GPUs in your deployment.
Bring your own license (BYOL). When you deploy the product, you sign up for
a license on the vendor's website, and the vendor bills you directly. Google
bills you for the infrastructure separately.
Note: When you select a VM product, you see an estimate of the costs that you
incur when you deploy it. The estimate is based on the minimum recommended
configuration for the product, and doesn't include networking costs. You can
modify your configuration when you deploy the product.
After you've purchased a commercial VM product, you see the charges for the VMs
linked to the project where the VMs exist.
Pricing plans for Kubernetes apps
The types of plans for Kubernetes apps include:
Usage fees, based on measurements set by the vendor. For example,
some vendors might charge by the number of containers that you run the
app on and the number of API requests you make to the app.
For commercial Kubernetes apps, a
Billing account administrator
must first purchase the app for your organization. After the purchase is
complete, users in your organization can deploy the app and use the
organization's billing plan. You're charged software usage fees for your
Kubernetes containers, and for the GKE infrastructure
that you use.
To set up billing plans for commercial Kubernetes apps, see
Managing billing plans .
Bring your own license (BYOL). You must sign up for a license on the vendor's
website, and the vendor bills you directly. Google bills you for the
infrastructure separately.
To deploy a Kubernetes app to your cluster, visit
Deploying Kubernetes apps .
Usage fees are linked to automatically-created Google Cloud project whose
ID begins with pr , followed by a series of unique letters and numbers. To
maintain reporting accuracy, don't remove the link from this Google Cloud
project to your Cloud Billing account.
What's next
For information about managing your billing for Cloud Marketplace
products, see Manage billing for Cloud Marketplace .
For an estimate of your monthly infrastructure charges, use the
Google Cloud pricing calculator .
For information on analyzing your bills, see the
Cloud Billing documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
