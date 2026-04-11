---
title: "Access Backup and DR Service with Workforce Identity Federation \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/workforce-identity-federation
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/backup-disaster-recovery/docs
source_metadata:
  url: https://docs.cloud.google.com/backup-disaster-recovery/docs/configuration/workforce-identity-federation
  title: "Access Backup and DR Service with Workforce Identity Federation \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Backup and DR
Reference
Send feedback
Access Backup and DR Service with Workforce Identity Federation
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to configure user access for Backup and DR Service with
Workforce Identity Federation.
Workforce Identity Federation lets
you use an external identity provider (IdP) to authenticate and authorize a
workforce—a group of users , such as employees, partners, and
contractors—using IAM, so that the users can access Google Cloud services.
If Workforce Identity Federation is configured in your project, users in your
workforce can access the following:
Backup and DR Service in Google Cloud console
appliance management console
Set up access to Backup and DR Service with Workforce Identity Federation
This section describes how to configure access for Workforce Identity Federation
users to Backup and DR Service.
Configure your identity provider
Use the Configure Workforce Identity Federation
guide to configure the Workforce Identity Federation for your identity provider.
Grant IAM roles to Workforce Identity Federation users
users, so that they can access Backup and DR Service and the appliance management console to
protect workloads:
For a list of roles specific to Backup and DR Service, see
Grant roles to users .
For instructions about assigning these roles to external users, see
Grant IAM roles to principals .
The formats used for representing Workforce Identity Federation users
in IAM policies, see Represent workforce pool users in IAM policies .
Backup and DR Service handles Workforce Identity Federation users the same way as
Google Account users–instead of an email address, a principal identifier is used.
Access the Backup and DR Service page in the Google Cloud console
The Google Cloud Workforce Identity Federation console
provides access to the Backup and DR Service page.
From the Backup and DR Service page in Google Cloud Workforce Identity Federation console , you can deploy the appliance management console, backup/recovery appliances,
and view Backup and DR Service logs. You can also access the appliance management console
to back up resources.
Access the appliance management console
Workforce Identity Federation users access the appliance management console through a
different URL than Google-managed users, as follows:
The URL for Workforce Identity Federation users is
https://bmc- PROJECT_NUMBER - GENERATED_ID -dot- REGION .backupdr.byoid.googleusercontent.com/
The URL for Google managed user accounts is
https://bmc- PROJECT_NUMBER - GENERATED_ID -dot- REGION .backupdr.googleusercontent.com/
Only users that are authenticated with external identities can access the URL
for external identities. If a user visits the URL for external identities while
not logged in, they are first redirected to the authentication portal where they
specify their workforce pool provider name. Then they are redirected to their
identity provider to sign in, and finally they are redirected to the appliance management console.
Workforce Identity Federation users cannot directly access the appliance management console
using the URL shared by Google-managed users. To access the appliance management console
as a Workforce Identity Federation user, manually update the link to
URL for Workforce Identity Federation users .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
