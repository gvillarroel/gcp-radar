---
title: "Access control with IAM \_|\_ Google Cloud Marketplace \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/marketplace/docs/access-control
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/marketplace/docs
source_metadata:
  url: https://docs.cloud.google.com/marketplace/docs/access-control
  title: "Access control with IAM \_|\_ Google Cloud Marketplace \_|\_ Google Cloud\
    \ Documentation"
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
Access control with IAM
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the Identity and Access Management (IAM) roles and permissions
that you need to purchase and manage commercial products on Cloud Marketplace.
With IAM, you manage access control by defining who (identity)
has what access (role) for which resource . For commercial apps on
Cloud Marketplace, users in your Google Cloud organization require
IAM roles to sign up for Cloud Marketplace plans, and to
make changes to billing plans.
Learn about managing billing for Cloud Marketplace products .
Learn about factors that affect your bill .
Learn about the basic concepts of IAM .
Learn about the hierarchy of Google Cloud resources .
Before you begin
To grant Cloud Marketplace roles and permissions using gcloud , install
the gcloud CLI . Otherwise, you can
grant roles using the Google Cloud console.
IAM roles for purchasing and managing products
We recommend that you assign the
Billing Account Administrator
IAM role to users who are purchasing services from
Cloud Marketplace.
Users who want to access the services must have the
Viewer role, at a minimum.
For more granular control over users' permissions, you can
create custom roles with the permissions that you want to
grant.
Product-specific requirements
To use the following services in a Google Cloud project, you must have the
Project Editor role:
Google Cloud Dataprep by Trifacta
Neo4j Aura Professional
Redis Enterprise Cloud
List of IAM roles and permissions
You can grant users one or more of the following IAM roles.
Depending on the role you are granting to users, you must also assign the role
to a Google Cloud billing account, organization, or project. For details,
see the section on Granting IAM roles to users .
Role
Permissions
Commerce Business Enablement Configuration Admin
Beta
( roles/ commercebusinessenablement.admin )
Admin of Various Provider Configuration resources
bigquery.datasets.create
bigquery.datasets.get
bigquery.datasets.update
commercebusinessenablement. leadgenConfig.*
commercebusinessenablement. leadgenConfig. get
commercebusinessenablement. leadgenConfig. update
commercebusinessenablement. partnerAccounts.*
commercebusinessenablement. partnerAccounts. get
commercebusinessenablement. partnerAccounts. list
commercebusinessenablement. partnerInfo. get
commercebusinessenablement. resellerConfig.*
commercebusinessenablement. resellerConfig. get
commercebusinessenablement. resellerConfig. update
commercebusinessenablement. resellerRestrictions.*
commercebusinessenablement. resellerRestrictions. list
commercebusinessenablement. resellerRestrictions. update
resourcemanager. organizations. get
resourcemanager.projects.get
resourcemanager.projects.list
serviceusage.operations.get
serviceusage.services.enable
serviceusage.services.get
Commerce Business Enablement Configuration Viewer
Beta
( roles/ commercebusinessenablement.viewer )
Viewer of Various Provider Configuration resource
commercebusinessenablement. leadgenConfig. get
commercebusinessenablement. partnerAccounts.*
commercebusinessenablement. partnerAccounts. get
commercebusinessenablement. partnerAccounts. list
commercebusinessenablement. partnerInfo. get
commercebusinessenablement. resellerConfig. get
commercebusinessenablement. resellerRestrictions. list
resourcemanager. organizations. get
resourcemanager.projects.get
resourcemanager.projects.list
Commerce Business Enablement PaymentConfig Admin
Beta
( roles/ commercebusinessenablement.paymentConfigAdmin )
Administration of Payment Configuration resource
commercebusinessenablement. partnerInfo. get
commercebusinessenablement. paymentConfig.*
commercebusinessenablement. paymentConfig. get
commercebusinessenablement. paymentConfig. update
resourcemanager.projects.get
resourcemanager.projects.list
Commerce Business Enablement PaymentConfig Viewer
Beta
( roles/ commercebusinessenablement.paymentConfigViewer )
Viewer of Payment Configuration resource
commercebusinessenablement. partnerInfo. get
commercebusinessenablement. paymentConfig. get
resourcemanager.projects.get
resourcemanager.projects.list
Commerce Business Enablement Rebates Admin
Beta
( roles/ commercebusinessenablement.rebatesAdmin )
Provides admin access to rebates
commercebusinessenablement. operations.*
commercebusinessenablement. operations. cancel
commercebusinessenablement. operations. delete
commercebusinessenablement. operations. get
commercebusinessenablement. operations. list
commercebusinessenablement. partnerInfo. get
commercebusinessenablement. refunds.*
commercebusinessenablement. refunds. cancel
commercebusinessenablement. refunds. create
commercebusinessenablement. refunds. delete
commercebusinessenablement. refunds. get
commercebusinessenablement. refunds. list
commercebusinessenablement. refunds. start
commercebusinessenablement. refunds. update
Commerce Business Enablement Rebates Viewer
Beta
( roles/ commercebusinessenablement.rebatesViewer )
Provides read-only access to rebates
commercebusinessenablement. operations. get
commercebusinessenablement. operations. list
commercebusinessenablement. partnerInfo. get
commercebusinessenablement. refunds. get
commercebusinessenablement. refunds. list
Commerce Business Enablement Reseller Discount Admin
Beta
( roles/ commercebusinessenablement.resellerDiscountAdmin )
Provides admin access to reseller discount offers
commercebusinessenablement. partnerAccounts.*
commercebusinessenablement. partnerAccounts. get
commercebusinessenablement. partnerAccounts. list
commercebusinessenablement. partnerInfo. get
commercebusinessenablement. resellerConfig. get
commercebusinessenablement. resellerDiscountConfig. get
commercebusinessenablement. resellerDiscountOffers.*
commercebusinessenablement. resellerDiscountOffers. cancel
commercebusinessenablement. resellerDiscountOffers. create
commercebusinessenablement. resellerDiscountOffers. list
commercebusinessenablement. resellerPrivateOfferPlans.*
commercebusinessenablement. resellerPrivateOfferPlans. cancel
commercebusinessenablement. resellerPrivateOfferPlans. create
commercebusinessenablement. resellerPrivateOfferPlans. delete
commercebusinessenablement. resellerPrivateOfferPlans. get
commercebusinessenablement. resellerPrivateOfferPlans. list
commercebusinessenablement. resellerPrivateOfferPlans. publish
commercebusinessenablement. resellerPrivateOfferPlans. update
resourcemanager. organizations. get
resourcemanager.projects.get
resourcemanager.projects.list
Commerce Business Enablement Reseller Discount Viewer
Beta
( roles/ commercebusinessenablement.resellerDiscountViewer )
Provides read-only access to reseller discount offers
commercebusinessenablement. partnerAccounts.*
commercebusinessenablement. partnerAccounts. get
commercebusinessenablement. partnerAccounts. list
commercebusinessenablement. partnerInfo. get
commercebusinessenablement. resellerConfig. get
commercebusinessenablement. resellerDiscountConfig. get
commercebusinessenablement. resellerDiscountOffers. list
commercebusinessenablement. resellerPrivateOfferPlans. get
commercebusinessenablement. resellerPrivateOfferPlans. list
resourcemanager. organizations. get
resourcemanager.projects.get
resourcemanager.projects.list
Granting IAM roles to users
From the roles in the table above, the
consumerprocurement.orderAdmin and consumerprocurement.orderViewer roles
must be assigned at the billing account or organization level, and the
consumerprocurement.entitlementManager and consumerprocurement.entitlementViewer
roles must be assigned at the project or organization level.
To grant roles to users using gcloud , run one of the following commands:
Organization
You must have the resourcemanager.organizationAdmin
role to assign roles at the organization level.
gcloud organizations add-iam-policy-binding organization-id \
--member = member --role = role-id
The placeholder values are:
organization-id : The numeric ID of the organization that you are granting the
role for.
member : The user that you are granting access to.
role-id : The role ID, from the previous table.
Billing account
You must have the billing.admin
role to assign roles at the billing account level.
gcloud beta billing accounts set-iam-policy account-id \
policy-file
The placeholder values are:
account-id : Your billing account ID, which
you can get from the Manage billing accounts page .
policy-file : An IAM policy file ,
in JSON or YAML format. The policy file must contain the role IDs from
the previous table, and the users that you are assigning the roles to.
Project
You must have the resourcemanager.folderAdmin
role to assign roles at the project level.
gcloud projects add-iam-policy-binding project-id \
--member = member --role = role-id
The placeholder values are:
project-id : The project that you are granting the
role for.
member : The user that you are granting access to.
role-id : The role ID, from the previous table.
To grant roles to users using the Google Cloud console, see the IAM
documentation on Granting, changing, and revoking access for users .
Using custom roles with Cloud Marketplace
If you want granular control over the permissions you grant users, you can
create custom roles with the permissions
that you want to grant.
If you're creating a custom role for users who purchase services from
Cloud Marketplace, the role must include these permissions for the
billing account they use to purchase services:
billing.accounts.get , which is typically granted with the
roles/consumerprocurement.orderAdmin role.
consumerprocurement.orders.get , which is typically granted with the
roles/consumerprocurement.orderAdmin role.
consumerprocurement.orders.list , which is typically granted with the
roles/consumerprocurement.orderAdmin role.
consumerprocurement.orders.place , which is typically granted with the
roles/consumerprocurement.orderAdmin role.
consumerprocurement.accounts.get , which is typically granted with the
roles/consumerprocurement.orderAdmin role.
consumerprocurement.accounts.list , which is typically granted with the
roles/consumerprocurement.orderAdmin role.
consumerprocurement.accounts.create , which is typically granted with the
roles/consumerprocurement.orderAdmin role.
consumerprocurement.consents.grant , which is typically granted with the
roles/consumerprocurement.orderAdmin role.
Accessing partner websites with Single Sign-on (SSO)
Certain Marketplace products support Single Sign-on (SSO) to a partner's
external website. Authorized users within the organization have access to
a "MANAGE ON PROVIDER" button on the product details page. This
button directs users to the partner's website. In some cases, users are
prompted to "Sign in with Google". In other cases, users are signed in a
shared account context.
In order to access the SSO capability, users navigate to the product
details page, and select an appropriate project. The project must be linked to
a billing account where the plan has been purchased. For details about Marketplace
plan management, see
Managing billing plans .
Additionally, the user must have sufficient IAM permissions within the selected
project. For most products, the roles/consumerprocurement.entitlementManager (or
roles/editor
basic role ) is currently required.
Minimal permissions for specific products
The following products can operate on a different set of permissions to access
SSO capabilities:
Apache Kafka on Confluent Cloud
DataStax Astra for Apache Cassandra
Elastic Cloud
Neo4j Aura Professional
Redis Enterprise Cloud
For these products, you can use the following minimal permissions:
consumerprocurement.entitlements.get
consumerprocurement.entitlements.list
serviceusage.services.get
serviceusage.services.list
resourcemanager.projects.get
These permissions are typically granted with the
roles/consumerprocurement.entitlementManager or
roles/consumerprocurement.entitlementViewer roles.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
