---
title: "Grant roles to your service account \_|\_ Application Design Center \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/application-design-center/docs/grant-roles-service-account
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/application-design-center/docs/grant-roles-service-account
source_metadata:
  url: https://docs.cloud.google.com/application-design-center/docs/grant-roles-service-account
  title: "Grant roles to your service account \_|\_ Application Design Center \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Application Design Center
Guides
Send feedback
Grant roles to your service account
Stay organized with collections
Save and categorize content based on your preferences.
When developers preview and deploy
applications , they can use
an existing service account , or
App Design Center can automatically create a new service account.
To deploy using your own service account, you must grant the necessary
Identity and Access Management roles and permissions. This document shows you how to grant roles
and configure your service account, including the following:
Add IAM policy bindings to the service account and user account.
Grant the service account the roles required
to deploy each resource.
Add permissions to the service account to deploy outside of the project where
the service account was created.
Update your organization policies to allow service accounts to be used across
projects.
Configure your service account
To configure your service accounts, do the following:
Add an IAM policy binding for the role of
roles/iam.serviceAccountUser role for the service agent to your service
account:
gcloud iam service-accounts add-iam-policy-binding SERVICE_ACCOUNT_EMAIL \
--member = "serviceAccount:service- SERVICE_ACCOUNT_PROJECT_NUMBER @gcp-sa-designcenter.iam.gserviceaccount.com" \
--role = "roles/iam.serviceAccountUser"
Replace the following:
SERVICE_ACCOUNT_EMAIL : Your service account email.
For example, my-service-account@ SERVICE_ACCOUNT_PROJECT_ID .iam.gserviceaccount.com .
SERVICE_ACCOUNT_PROJECT_ID : The project ID of the
project that contains your service account.
SERVICE_ACCOUNT_PROJECT_NUMBER : The project number of the
project that contains your service account.
Add an IAM policy binding for the role of
roles/iam.serviceAccountUser for a user to your service account:
gcloud iam service-accounts add-iam-policy-binding SERVICE_ACCOUNT_EMAIL \
--member = "user: USER_EMAIL " \
--role = "roles/iam.serviceAccountUser"
Replace the following:
SERVICE_ACCOUNT_EMAIL : Your service account email.
For example, my-service-account@ SERVICE_ACCOUNT_PROJECT_ID .iam.gserviceaccount.com .
USER_EMAIL : The user email for the user who performs the deployment.
In the project that has your service account, add IAM
policy bindings for the required service agent roles on the management project
that contains your space:
gcloud projects add-iam-policy-binding SERVICE_ACCOUNT_PROJECT_ID \
--member = "serviceAccount:service- MANAGEMENT_PROJECT_NUMBER @gcp-sa-designcenter.iam.gserviceaccount.com" \
--role = "roles/apphub.editor"
gcloud projects add-iam-policy-binding SERVICE_ACCOUNT_PROJECT_ID \
--member = "serviceAccount:service- MANAGEMENT_PROJECT_NUMBER @gcp-sa-designcenter.iam.gserviceaccount.com" \
--role = "roles/config.agent"
gcloud projects add-iam-policy-binding SERVICE_ACCOUNT_PROJECT_ID \
--member = "serviceAccount:service- MANAGEMENT_PROJECT_NUMBER @gcp-sa-designcenter.iam.gserviceaccount.com" \
--role = "roles/serviceusage.serviceUsageAdmin"
Replace the following:
SERVICE_ACCOUNT_PROJECT_ID : The project ID of the
project that contains your service account.
MANAGEMENT_PROJECT_NUMBER : The project
number of the management project
that contains your space.
In the project that has your service account, ensure that the
iam.disableCrossProjectServiceAccountUsage organization policy constraint
is not enforced. This constraint is enforced by default.
To disable enforcement of the organization policy constraint, run the
following command:
gcloud resource-manager org-policies disable-enforce \
iam.disableCrossProjectServiceAccountUsage \
--project = SERVICE_ACCOUNT_PROJECT_ID
Replace the following:
SERVICE_ACCOUNT_PROJECT_ID : The project ID of the
project that contains your service account.
Grant your service account the roles required to deploy resources in
projects. The required roles are displayed when
developers deploy applications .
For example, to grant the roles/run.admin role, add the following policy
binding:
gcloud projects add-iam-policy-binding SERVICE_ACCOUNT_PROJECT_ID \
--member = "serviceAccount:service- DEPLOYMENT_PROJECT_NUMBER @gcp-sa-designcenter.iam.gserviceaccount.com" \
--role = "roles/run.admin"
Replace the following:
SERVICE_ACCOUNT_PROJECT_ID : The project ID of the
project that contains your service account.
DEPLOYMENT_PROJECT_NUMBER : The project
number of the project where you're deploying resources.
App Design Center uses Infrastructure Manager to deploy
applications in the console. To use your own service
account to deploy with Infrastructure Manager, complete the steps in Grant access across multiple projects .
If the application you're deploying contains private components that you
imported through a Developer Connect connection, do the following:
Grant your service account the roles/iam.serviceAccountTokenCreator role
on the project where you created the service account.
gcloud projects add-iam-policy-binding SERVICE_ACCOUNT_PROJECT_ID \
--member = "serviceAccount: SERVICE_ACCOUNT_EMAIL " \
--role = "roles/iam.serviceAccountTokenCreator"
Replace the following:
SERVICE_ACCOUNT_PROJECT_ID : The project ID of
the project that contains your service account.
SERVICE_ACCOUNT_EMAIL : Your service account email.
For example, my-service-account@ SERVICE_ACCOUNT_PROJECT_ID .iam.gserviceaccount.com .
What's next
Understand the lifecycle of applications in Manage applications .
Deploy an application from the console .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
