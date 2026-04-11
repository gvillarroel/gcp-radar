---
title: "BigQuery sharing roles and permissions \_|\_ Identity and Access Management\
  \ (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/roles-permissions/analyticshub
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/roles-permissions/anthosconfigmanagement
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/roles-permissions/analyticshub
  title: "BigQuery sharing roles and permissions \_|\_ Identity and Access Management\
    \ (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
IAM
Reference
Send feedback
BigQuery sharing roles and permissions
Stay organized with collections
Save and categorize content based on your preferences.
This page lists the IAM roles and permissions for BigQuery sharing. To
search through all roles and permissions, see the role and
permission index .
BigQuery sharing roles
Role
Permissions
Analytics Hub Admin
( roles/ analyticshub.admin )
Administer Data Exchanges and Listings
analyticshub. dataExchanges. create
analyticshub. dataExchanges. delete
analyticshub.dataExchanges.get
analyticshub. dataExchanges. getIamPolicy
analyticshub. dataExchanges. list
analyticshub. dataExchanges. setIamPolicy
analyticshub. dataExchanges. update
analyticshub. dataExchanges. viewSubscriptions
analyticshub.listings.create
analyticshub.listings.delete
analyticshub.listings.get
analyticshub. listings. getIamPolicy
analyticshub.listings.list
analyticshub. listings. setIamPolicy
analyticshub.listings.update
analyticshub. listings. viewSubscriptions
analyticshub.subscriptions.*
analyticshub. subscriptions. create
analyticshub. subscriptions. delete
analyticshub.subscriptions.get
analyticshub. subscriptions. list
analyticshub. subscriptions. update
resourcemanager.projects.get
resourcemanager.projects.list
Analyticshub Editor
( roles/ analyticshub.editor )
Editor role for analyticshub
analyticshub. dataExchanges. create
analyticshub. dataExchanges. delete
analyticshub.dataExchanges.get
analyticshub. dataExchanges. getIamPolicy
analyticshub. dataExchanges. list
analyticshub. dataExchanges. update
analyticshub.listings.create
analyticshub.listings.delete
analyticshub.listings.get
analyticshub. listings. getIamPolicy
analyticshub.listings.list
analyticshub.listings.update
analyticshub.subscriptions.*
analyticshub. subscriptions. create
analyticshub. subscriptions. delete
analyticshub.subscriptions.get
analyticshub. subscriptions. list
analyticshub. subscriptions. update
resourcemanager.projects.get
resourcemanager.projects.list
Analytics Hub Listing Admin
( roles/ analyticshub.listingAdmin )
Grants full control over the Listing, including updating, deleting and setting ACLs
analyticshub.dataExchanges.get
analyticshub. dataExchanges. getIamPolicy
analyticshub. dataExchanges. list
analyticshub.listings.delete
analyticshub.listings.get
analyticshub. listings. getIamPolicy
analyticshub.listings.list
analyticshub. listings. setIamPolicy
analyticshub.listings.update
analyticshub. listings. viewSubscriptions
resourcemanager.projects.get
resourcemanager.projects.list
Analytics Hub Publisher
( roles/ analyticshub.publisher )
Can publish to Data Exchanges thus creating Listings
analyticshub.dataExchanges.get
analyticshub. dataExchanges. getIamPolicy
analyticshub. dataExchanges. list
analyticshub.listings.create
analyticshub.listings.get
analyticshub. listings. getIamPolicy
analyticshub.listings.list
resourcemanager.projects.get
resourcemanager.projects.list
Analytics Hub Subscriber
( roles/ analyticshub.subscriber )
Can browse Data Exchanges and subscribe to Listings
analyticshub.dataExchanges.get
analyticshub. dataExchanges. getIamPolicy
analyticshub. dataExchanges. list
analyticshub. dataExchanges. subscribe
analyticshub.listings.get
analyticshub. listings. getIamPolicy
analyticshub.listings.list
analyticshub. listings. subscribe
resourcemanager.projects.get
resourcemanager.projects.list
Analytics Hub Subscription Owner
( roles/ analyticshub.subscriptionOwner )
Grants full control over the Subscription, including updating and deleting
analyticshub.dataExchanges.get
analyticshub. dataExchanges. getIamPolicy
analyticshub. dataExchanges. list
analyticshub.listings.get
analyticshub. listings. getIamPolicy
analyticshub.listings.list
analyticshub.subscriptions.*
analyticshub. subscriptions. create
analyticshub. subscriptions. delete
analyticshub.subscriptions.get
analyticshub. subscriptions. list
analyticshub. subscriptions. update
resourcemanager.projects.get
resourcemanager.projects.list
Analytics Hub Viewer
( roles/ analyticshub.viewer )
Can browse Data Exchanges and Listings
analyticshub.dataExchanges.get
analyticshub. dataExchanges. getIamPolicy
analyticshub. dataExchanges. list
analyticshub.listings.get
analyticshub. listings. getIamPolicy
analyticshub.listings.list
resourcemanager.projects.get
resourcemanager.projects.list
BigQuery sharing permissions
Permission
Included in roles
analyticshub. dataExchanges. create
Owner ( roles/ owner )
Editor ( roles/ editor )
Analytics Hub Admin ( roles/ analyticshub.admin )
Analyticshub Editor ( roles/ analyticshub.editor )
analyticshub. dataExchanges. delete
Owner ( roles/ owner )
Editor ( roles/ editor )
Analytics Hub Admin ( roles/ analyticshub.admin )
Analyticshub Editor ( roles/ analyticshub.editor )
analyticshub.dataExchanges.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Analytics Hub Admin ( roles/ analyticshub.admin )
Analyticshub Editor ( roles/ analyticshub.editor )
Analytics Hub Listing Admin ( roles/ analyticshub.listingAdmin )
Analytics Hub Publisher ( roles/ analyticshub.publisher )
Analytics Hub Subscriber ( roles/ analyticshub.subscriber )
Analytics Hub Subscription Owner ( roles/ analyticshub.subscriptionOwner )
Analytics Hub Viewer ( roles/ analyticshub.viewer )
Support User ( roles/ iam.supportUser )
analyticshub. dataExchanges. getIamPolicy
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Analytics Hub Admin ( roles/ analyticshub.admin )
Analyticshub Editor ( roles/ analyticshub.editor )
Analytics Hub Listing Admin ( roles/ analyticshub.listingAdmin )
Analytics Hub Publisher ( roles/ analyticshub.publisher )
Analytics Hub Subscriber ( roles/ analyticshub.subscriber )
Analytics Hub Subscription Owner ( roles/ analyticshub.subscriptionOwner )
Analytics Hub Viewer ( roles/ analyticshub.viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Auditor ( roles/ iam.securityAuditor )
Security Reviewer ( roles/ iam.securityReviewer )
Support User ( roles/ iam.supportUser )
analyticshub. dataExchanges. list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Analytics Hub Admin ( roles/ analyticshub.admin )
Analyticshub Editor ( roles/ analyticshub.editor )
Analytics Hub Listing Admin ( roles/ analyticshub.listingAdmin )
Analytics Hub Publisher ( roles/ analyticshub.publisher )
Analytics Hub Subscriber ( roles/ analyticshub.subscriber )
Analytics Hub Subscription Owner ( roles/ analyticshub.subscriptionOwner )
Analytics Hub Viewer ( roles/ analyticshub.viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Auditor ( roles/ iam.securityAuditor )
Security Reviewer ( roles/ iam.securityReviewer )
Support User ( roles/ iam.supportUser )
analyticshub. dataExchanges. setIamPolicy
Owner ( roles/ owner )
Analytics Hub Admin ( roles/ analyticshub.admin )
Security Admin ( roles/ iam.securityAdmin )
analyticshub. dataExchanges. subscribe
Owner ( roles/ owner )
Analytics Hub Subscriber ( roles/ analyticshub.subscriber )
analyticshub. dataExchanges. update
Owner ( roles/ owner )
Editor ( roles/ editor )
Analytics Hub Admin ( roles/ analyticshub.admin )
Analyticshub Editor ( roles/ analyticshub.editor )
analyticshub. dataExchanges. viewSubscriptions
Owner ( roles/ owner )
Analytics Hub Admin ( roles/ analyticshub.admin )
analyticshub.listings.create
Owner ( roles/ owner )
Editor ( roles/ editor )
Analytics Hub Admin ( roles/ analyticshub.admin )
Analyticshub Editor ( roles/ analyticshub.editor )
Analytics Hub Publisher ( roles/ analyticshub.publisher )
analyticshub.listings.delete
Owner ( roles/ owner )
Editor ( roles/ editor )
Analytics Hub Admin ( roles/ analyticshub.admin )
Analyticshub Editor ( roles/ analyticshub.editor )
Analytics Hub Listing Admin ( roles/ analyticshub.listingAdmin )
analyticshub.listings.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Analytics Hub Admin ( roles/ analyticshub.admin )
Analyticshub Editor ( roles/ analyticshub.editor )
Analytics Hub Listing Admin ( roles/ analyticshub.listingAdmin )
Analytics Hub Publisher ( roles/ analyticshub.publisher )
Analytics Hub Subscriber ( roles/ analyticshub.subscriber )
Analytics Hub Subscription Owner ( roles/ analyticshub.subscriptionOwner )
Analytics Hub Viewer ( roles/ analyticshub.viewer )
Support User ( roles/ iam.supportUser )
analyticshub. listings. getIamPolicy
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Analytics Hub Admin ( roles/ analyticshub.admin )
Analyticshub Editor ( roles/ analyticshub.editor )
Analytics Hub Listing Admin ( roles/ analyticshub.listingAdmin )
Analytics Hub Publisher ( roles/ analyticshub.publisher )
Analytics Hub Subscriber ( roles/ analyticshub.subscriber )
Analytics Hub Subscription Owner ( roles/ analyticshub.subscriptionOwner )
Analytics Hub Viewer ( roles/ analyticshub.viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Auditor ( roles/ iam.securityAuditor )
Security Reviewer ( roles/ iam.securityReviewer )
Support User ( roles/ iam.supportUser )
analyticshub.listings.list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Analytics Hub Admin ( roles/ analyticshub.admin )
Analyticshub Editor ( roles/ analyticshub.editor )
Analytics Hub Listing Admin ( roles/ analyticshub.listingAdmin )
Analytics Hub Publisher ( roles/ analyticshub.publisher )
Analytics Hub Subscriber ( roles/ analyticshub.subscriber )
Analytics Hub Subscription Owner ( roles/ analyticshub.subscriptionOwner )
Analytics Hub Viewer ( roles/ analyticshub.viewer )
Security Admin ( roles/ iam.securityAdmin )
Security Auditor ( roles/ iam.securityAuditor )
Security Reviewer ( roles/ iam.securityReviewer )
Support User ( roles/ iam.supportUser )
analyticshub. listings. setIamPolicy
Owner ( roles/ owner )
Analytics Hub Admin ( roles/ analyticshub.admin )
Analytics Hub Listing Admin ( roles/ analyticshub.listingAdmin )
Security Admin ( roles/ iam.securityAdmin )
analyticshub. listings. subscribe
Owner ( roles/ owner )
Analytics Hub Subscriber ( roles/ analyticshub.subscriber )
analyticshub.listings.update
Owner ( roles/ owner )
Editor ( roles/ editor )
Analytics Hub Admin ( roles/ analyticshub.admin )
Analyticshub Editor ( roles/ analyticshub.editor )
Analytics Hub Listing Admin ( roles/ analyticshub.listingAdmin )
analyticshub. listings. viewSubscriptions
Owner ( roles/ owner )
Analytics Hub Admin ( roles/ analyticshub.admin )
Analytics Hub Listing Admin ( roles/ analyticshub.listingAdmin )
analyticshub. subscriptions. create
Owner ( roles/ owner )
Editor ( roles/ editor )
Analytics Hub Admin ( roles/ analyticshub.admin )
Analyticshub Editor ( roles/ analyticshub.editor )
Analytics Hub Subscription Owner ( roles/ analyticshub.subscriptionOwner )
analyticshub. subscriptions. delete
Owner ( roles/ owner )
Editor ( roles/ editor )
Analytics Hub Admin ( roles/ analyticshub.admin )
Analyticshub Editor ( roles/ analyticshub.editor )
Analytics Hub Subscription Owner ( roles/ analyticshub.subscriptionOwner )
analyticshub.subscriptions.get
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Analytics Hub Admin ( roles/ analyticshub.admin )
Analyticshub Editor ( roles/ analyticshub.editor )
Analytics Hub Subscription Owner ( roles/ analyticshub.subscriptionOwner )
Support User ( roles/ iam.supportUser )
analyticshub. subscriptions. list
Owner ( roles/ owner )
Editor ( roles/ editor )
Viewer ( roles/ viewer )
Analytics Hub Admin ( roles/ analyticshub.admin )
Analyticshub Editor ( roles/ analyticshub.editor )
Analytics Hub Subscription Owner ( roles/ analyticshub.subscriptionOwner )
Security Admin ( roles/ iam.securityAdmin )
Security Auditor ( roles/ iam.securityAuditor )
Security Reviewer ( roles/ iam.securityReviewer )
Support User ( roles/ iam.supportUser )
analyticshub. subscriptions. update
Owner ( roles/ owner )
Editor ( roles/ editor )
Analytics Hub Admin ( roles/ analyticshub.admin )
Analyticshub Editor ( roles/ analyticshub.editor )
Analytics Hub Subscription Owner ( roles/ analyticshub.subscriptionOwner )
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
