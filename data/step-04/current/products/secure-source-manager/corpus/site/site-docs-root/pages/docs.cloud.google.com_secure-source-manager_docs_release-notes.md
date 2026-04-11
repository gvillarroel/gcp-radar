---
title: "Secure Source Manager release notes \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/secure-source-manager/docs/release-notes
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/secure-source-manager/docs
source_metadata:
  url: https://docs.cloud.google.com/secure-source-manager/docs/release-notes
  title: "Secure Source Manager release notes \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Secure Source Manager
Resources
Send feedback
Secure Source Manager release notes
Stay organized with collections
Save and categorize content based on your preferences.
This page documents production updates to Secure Source Manager.
Check this page for announcements about new or updated features, bug fixes,
known issues, and deprecated functionality.
You can see the latest product updates for all of Google Cloud on the
Google Cloud page, browse and filter all release notes in the
Google Cloud console ,
or programmatically access release notes in
BigQuery .
To get the latest product updates delivered to you, add the URL of this page to your
feed
reader , or add the
feed URL directly.
February 06, 2026
Feature
You can now connect to Secure Source Manager using Developer Connect.
February 03, 2026
Feature
You can now assign custom domains for your private Secure Source Manager
instance's HTML, API, Git HTTP, and Git SSH endpoints. To use custom domains, you
must provide your own Certificate Authority (CA) certificate and CA pool during
instance creation. You can only create custom domains using the API when you
first create an instance. For more information, see Create a Private Service
Connect Secure Source Manager
instance .
February 02, 2026
Feature
Secure Source Manager is now available in the following regions :
us-east1 (South Carolina)
September 10, 2025
Announcement
Secure Source Manager is compliant with the Health Insurance Portability and Accountability Act (HIPAA), and is also FedRAMP High compliant .
August 21, 2025
Feature
You can now use a Google-managed certificate when you create a create a Private Service Connect Secure Source Manager instance .
August 14, 2025
Change
Integrated data loss prevention (DLP) is now generally available
August 04, 2025
Announcement
Secure Source Manager is now generally available for all customers.
July 08, 2025
Change
Secure Source Manager is now available in the following regions :
australia-southeast1 (Sydney)
asia-northeast1 (Tokyo)
April 15, 2025
Feature
Regional endpoints are now available in Secure Source Manager. For more information, see Configure data locality by using regional endpoints .
December 19, 2024
Feature
You can use custom constraints with Organization Policy to provide more granular control over specific fields for some Secure Source Manager resources. For more information, see Manage resources with custom constraints .
November 21, 2024
Feature
Secure Source Manager supports email notifications. For more information, see Notifications overview . To configure notifications, follow the instructions in Set up notifications .
November 14, 2024
Feature
Secure Source Manager supports Workforce Identity Federation .
To create an instance with Workforce Identity Federation enabled, follow the instructions in Create a Secure Source Manager instance to use with federated identities .
September 11, 2024
Feature
Secure Source Manager integration with Cloud Build lets you define your Cloud Build configuration and build triggers in your Secure Source Manager repository. To learn how to trigger builds automatically, see Connect to Cloud Build .
Feature
Secure Source Manager branch protection is Generally Available. To learn more about branch protection, see the Branch protection overview and Configure branch protection .
October 12, 2023
Announcement
Secure Source Manager is generally available ( GA ) by invitation only.
September 25, 2023
Change
Secure Source Manager is now available in the northamerica-northeast1 (Montréal) region .
August 14, 2023
Announcement
A one-time clean up of unused Secure Source Manager instances is scheduled for August 16, 2023. Instances that haven't been accessed or used for 30 days or more will be deleted.
We previously announced that this clean up policy would be an ongoing policy, but that has been changed based on user feedback. This will be a one-time clean up operation.
To prevent deletion of your Secure Source Manager instance, you can perform any of the following actions: log in using the web interface, use Git to push or pull from your repository, or access the instance via the Secure Source Manager API.
July 20, 2023
Feature
Secure Source Manager is now available in the me-west1 (Tel Aviv) region .
July 17, 2023
Announcement
A new policy to clean up unused Secure Source Manager instances is now in effect. On August 16, 2023, instances that have not been accessed or used for 30 days or more will be deleted.
To prevent deletion of your Secure Source Manager instance, you can perform any of the following actions: log in using the web interface, use Git to push or pull from your repository, or access the instance via the Secure Source Manager API.
June 15, 2023
Announcement
Secure Source Manager is available in Preview .
Host your source code in a single tenant, regionally deployed, managed source code repository hosted on Google Cloud.
For preview access, contact secure-source-manager-support@google.com .
To get started with Secure Source Manager, Enable the Secure Source Manager API and then Deploy and access an instance .
April 28, 2023
Feature
Secure Source Manager is now available in asia-east1 (Taiwan) and europe-west4 (Netherlands) regions .
April 06, 2023
Change
Secure Source Manager has entered phase 2 of implementing the Google Cloud project location restriction . The changes are as follows:
New repositories must be created in the same project as their parent instance.
A new Repo Creator role ( roles/securesourcemanager.repoCreator ) is available.
All repositories in separate projects from their parent instances will be deleted after May 1, 2023.
Repositories in separate projects from their parent instances can request to be migrated. For migration steps see Migrate to single-project repositories .
If you have any questions, feel free to reach out to us at secure-source-manager-support@google.com .
March 10, 2023
Change
Repositories must be created in the same Google Cloud project as their parent Secure Source Manager instance. Customers can continue to use repositories previously created in separate projects from their parent instance.
For more details see Google Cloud project location restriction .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
