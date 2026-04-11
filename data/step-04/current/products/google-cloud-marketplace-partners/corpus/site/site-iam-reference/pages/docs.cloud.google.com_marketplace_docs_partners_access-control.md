---
title: "Configure access control for Producer Portal users \_|\_ Google Cloud Marketplace\
  \ Partners \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/marketplace/docs/partners/access-control
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/marketplace/docs/partners/access-control
source_metadata:
  url: https://docs.cloud.google.com/marketplace/docs/partners/access-control
  title: "Configure access control for Producer Portal users \_|\_ Google Cloud Marketplace\
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
Configure access control for Producer Portal users
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the Identity and Access Management (IAM) roles and permissions that
you'll need to grant to members of your team who
use Producer Portal .
Note: IAM basic roles ,
such as the Project Editor role ( roles/editor ), might enable users to perform
necessary tasks, but we recommend that you only grant the minimal necessary
roles. You shouldn't grant basic roles in a production environment, although you
can grant them in a development or test environment.
For more information about granting access to roles and resources, see the
IAM documentation on
Granting, changing, and revoking access to resources .
If you don't have the permissions you need to grant roles, contact your
organization's administrator and request access.
Access control for managing your Partner Advantage account and your organization
For users to manage your Partner Advantage account and your organization-level
settings, grant them one of the following two roles:
Commerce Business Enablement Configuration Admin
( roles/commercebusinessenablement.admin )
Commerce Business Enablement Configuration Viewer
( roles/commercebusinessenablement.viewer )
Access control for viewing product listings
For users to view in-progress product listings that you create in
Producer Portal, grant them the
Commerce Producer Viewer role.
Access control for creating and managing product listings
For users to create and manage product listings in Producer Portal,
grant them the following roles:
Commerce Producer Admin
Service Management Administrator
Note: The
Commerce Producer Admin
role provides full access to all resources for your products.
Additional roles for software as a service (SaaS) products
For SaaS products, where you need to create a service account to interact with
the Cloud Commerce Consumer Procurement API and report usage to us, grant your
users the
Service Account Admin
role.
Additional roles for virtual machine (VM) and Kubernetes products
For VM or Kubernetes products, grant your users the
Compute Storage Admin
role.
If you used the
VM guided configuration
to create your VM product's deployment package, grant your users the following
roles for the Cloud Storage bucket where you store your product's deployment
package:
Storage Object Viewer
Storage Object Creator
Access control for previewing your products in Cloud Marketplace
If you want users to be able to preview your product's listing as your customers
see it in Cloud Marketplace, you must grant them the following role:
Service Management Consumer
Access control for creating and managing private offers in Producer Portal
For users to create and manage private offers in the
Private offers tab of
Producer Portal, grant them the following roles:
Commerce Price Management Private Offers Admin
Commerce Producer Viewer
Access control for viewing key events for private offers
For users to
view the history of an offer
that your organization has published, grant them the
Commerce Price Management Events Viewer
role.
Access control for managing disbursements and payments in Producer Portal
For users to create payment profiles to manage disbursement
and payment settings in the Payments
tab of Producer Portal, grant them the following roles:
Commerce Business Enablement PaymentConfig Admin
Commerce Producer Viewer
Note: These roles enable users to create payment profiles. To add users to an
existing payment profile, see
Controlling access to payment profiles .
Access control for reselling of your Cloud Marketplace products
If you've allowed resellers to resell your Cloud Marketplace products, you
can refer to the following guidelines for granting roles within your
Google Cloud organization.
Access control for viewing which resellers are allowed to resell your products
For users to view which resellers are allowed to resell your
Cloud Marketplace products, or which resellers have been disallowed from
reselling your products, grant them one of the following roles:
Commerce Business Enablement Configuration Viewer
( roles/commercebusinessenablement.viewer )
Commerce Business Enablement Configuration Admin
( roles/commercebusinessenablement.admin )
Access control for managing which resellers are allowed to resell your products
For users to manage which resellers are allowed to resell your
Cloud Marketplace products, grant them the
Commerce Business Enablement Configuration Admin
( roles/commercebusinessenablement.admin ) role.
Access control for viewing reseller discounts in Producer Portal
For users to view resources and configurations related to reseller discounts in
Producer Portal, grant them the following roles:
Commerce Business Enablement Reseller Discount Viewer
( roles/commercebusinessenablement.resellerDiscountViewer )
Commerce Price Management Viewer
( roles/commercepricemanagement.viewer )
Access control for creating and managing reseller discounts in Producer Portal
For users to create and manage resources and configurations related to reseller
discounts in Producer Portal, grant them the following roles:
Commerce Business Enablement Reseller Discount Admin
( roles/commercebusinessenablement.resellerDiscountAdmin )
Commerce Price Management Viewer
( roles/commercepricemanagement.viewer )
Access control for managing analytics and reports in Producer Portal
For users to manage analytics, test accounts, sales lead management, and reports
for your products in the Analytics ,
Test billing accounts ,
Sales lead management ,
and Reports tabs of Producer Portal,
grant them the following roles:
Commerce Business Enablement Configuration Admin
( roles/commercebusinessenablement.admin )
Commerce Producer Viewer ( roles/commerceproducer.viewer )
Project Viewer ( roles/viewer )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
