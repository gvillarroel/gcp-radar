---
title: "Discontinuing the admin capability to create, view, and manage API credentials\
  \ for a standard user \_|\_ Looker \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/looker/docs/best-practices/admin-managed-api-keys-deprecation
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/looker/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/looker/docs/best-practices/admin-managed-api-keys-deprecation
  title: "Discontinuing the admin capability to create, view, and manage API credentials\
    \ for a standard user \_|\_ Looker \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Looker
Best Practices
Send feedback
Discontinuing the admin capability to create, view, and manage API credentials for a standard user
Stay organized with collections
Save and categorize content based on your preferences.
On January 12, 2026, we introduced service accounts in Looker (original) to help manage workflows for API credentials. As of that date, admins can perform the following tasks:
Create new service accounts
Migrate existing users to service account
Fully manage API credentials for service accounts
We've provided additional information to help you understand this change.
Key changes
As of January 12, 2026, admins can perform the following tasks:
Create new service accounts and migrate existing users as service accounts
Manage the API credentials of these service accounts
Starting with the Looker 26.8 release, which will release in May 2026, the following changes will occur:
Admins will no longer be able to access or manage the API credentials of their standard users
Admins will be able to manage which users have access to individually owned API credentials
Note: Starting with the Looker 26.8 release, users with access to API credentials will be able to access and manage their own API credentials.
Potential impact
Admins will no longer be able to access or manage API credentials for standard users. Your custom workflow implementations are likely going to be impacted if they're using the following Looker APIs:
create_user_credentials_api3
delete_user_credentials_api3
Action required
Before your Looker instance is upgraded to the Looker 26.8 release, your admin must follow the steps in the Migrating users to service accounts section of the Admin settings - Users documentation page. This is to ensure that admins can either create or migrate service accounts from existing standard users if they require access to users' API credentials.
To learn more about this change and the introduction of service accounts, review the Creating an API-only service account documentation on service accounts in Looker (original).
If you have any additional questions or require assistance, please contact Google Cloud Support .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
