---
title: "Access control with IAM \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/functions/docs/concepts/iam
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/functions/docs/concepts/iam
source_metadata:
  url: https://docs.cloud.google.com/functions/docs/concepts/iam
  title: "Access control with IAM \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

If you are creating a new function, see the Console Quickstart on Cloud Run.
Home
Documentation
Application hosting
Cloud Run
Cloud Run functions
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Access control with IAM
Note:
This content applies only to Cloud Run functions—formerly Cloud Functions (2nd gen).
For the 1st gen version of this document, see
Access control with IAM (1st gen) .
This page provides supplemental information for using Identity and Access Management (IAM)
roles to set access controls at a project level, to determine the level of
access to your Google Cloud project and functions created using
gcloud functions commands or the
Cloud Functions v2 API .
If you've created or deployed functions using Cloud Run, see
Access control with IAM
and Cloud Run roles for a detailed description of Cloud Run predefined roles,
controlling access to individual services, making a service public,
or configuring organization policy for the Cloud Run invoker
IAM.
Access control for users
Add users as team members to your project and grant them roles using
IAM .
Cloud Run functions supports the following roles:
Cloud Run predefined roles (recommended)
Cloud Functions predefined roles
Basic roles of Editor , Owner ,
and Viewer .
Note: To write or access Cloud Run functions logs, a project
member must also have the appropriate logging permissions. For more information,
see the Cloud Logging access control guide .
Access control for service accounts
A
service account is a special type of
Google Cloud account that acts as an identity for a non-human user that needs to
authenticate and be authorized to access data and perform various actions. Some
of these accounts are
created and managed by Google itself
and are known as
service agents .
The following service accounts are used for Cloud Run functions:
Name
Member ID
Role
Compute Engine default service account
PROJECT_NUMBER-compute@developer.gserviceaccount.com
Editor
Google Cloud Functions Service Agent
service-PROJECT_NUMBER@gcf-admin-robot.iam.gserviceaccount.com
Google Cloud Functions Service Agent
Legacy Cloud Build service account 1
PROJECT_NUMBER@cloudbuild.gserviceaccount.com
Cloud Build Service Account
Cloud Build Service Account
service-PROJECT_NUMBER@gcp-sa-cloudbuild.iam.gserviceaccount.com
Cloud Build Service Agent
Google Container Registry Service Agent
service-PROJECT_NUMBER@containerregistry.iam.gserviceaccount.com
Container Registry Service Agent
Artifact Registry Service Agent
service-PROJECT_NUMBER@gcp-sa-artifactregistry.iam.gserviceaccount.com
Artifact Registry Service Agent
Note:
The
iam.automaticIamGrantsForDefaultServiceAccounts organization policy constraint
prevents the Editor role from being automatically granted to default service accounts. If you
created your organization after May 3, 2024, this constraint is enforced by
default.
We strongly recommend that you enforce this constraint to disable the automatic role grant. If you
disable the automatic role grant, you must decide which roles to grant to the default service
accounts, and then grant these roles
yourself.
If the default service account already has the Editor role, we recommend that you replace the
Editor role with less permissive roles.To safely modify the service account's roles, use Policy Simulator to see the impact of
the change, and then grant and revoke the
appropriate roles .
Runtime service accounts
At runtime, Cloud Run functions defaults
to using the Compute Engine default service account
( PROJECT_NUMBER-compute@developer.gserviceaccount.com ), which also has
the Editor role on the project. You can change the roles of these service
accounts to limit or extend the permissions for your running functions. You can
also change which service account is used by
avoiding the default service account when configuring service identity .
To learn more about service accounts, see the
service accounts documentation .
Note: Authenticating as the runtime service account from inside your function
might fail if you change the Cloud Run functions service account
permissions.
Administrative service accounts
To perform administrative actions on your project during the creation,
updating, or deletion of functions, all projects in Cloud Run functions
require the Google Cloud Functions Service Agent service account
( service-PROJECT_NUMBER@gcf-admin-robot.iam.gserviceaccount.com ).
In addition, all runtimes carry out container image building and storage within
your project. To support this, you also need to provision the following:
The legacy Cloud Build service account 1 ( PROJECT_NUMBER@cloudbuild.gserviceaccount.com )
The Cloud Build Service Agent service account ( service-PROJECT_NUMBER@gcp-sa-cloudbuild.iam.gserviceaccount.com )
The Google Container Registry Service Agent service account ( service-PROJECT_NUMBER@containerregistry.iam.gserviceaccount.com )
These service accounts should have the roles listed in the earlier
table .
Google Cloud Functions Service Agent service account
By default, the Google Cloud Functions Service Agent service account
( service-PROJECT_NUMBER@gcf-admin-robot.iam.gserviceaccount.com has
the cloudfunctions.serviceAgent role on your project.
Warning: If you remove the default role binding or modify the permissions
granted to the Cloud Functions Service Agent service account on your
Google Cloud project, create, update, and delete operations might fail.
Here's a few of the notable permissions that the cloudfunctions.serviceAgent
uses:
Permission
Description
roles/artifactregistry.admin
Manage repositories and store build images in Artifact Registry.
roles/cloudbuild.builds.editor
Required to use Cloud Build to perform builds in user project.
roles/cloudbuild.customworkers.builder
Create builds in Cloud Build custom workers.
compute.globalOperations.get , compute.networks.access , vpcaccess.connectors.{get, use}
Provision functions with access to the consumer projects VPC.
roles/eventarc.developer
Manage Eventarc triggers for functions.
firebasedatabase.instances.{get, update}
Create functions triggered by the Firebase Realtime Database.
iam.serviceAccounts.{actAs, getAccessToken, signBlob}
Ability to get runtime service account credentials.
iam.serviceAccounts.getOpenIdToken
Needed for the agent to get an OpenID token on a user-specified authority. OpenID token is used for invoking IAM-enabled functions.
pubsub.subscriptions
Manage subscriptions in the user's project.
pubsub.topics
Manage topics in the user's project.
roles/run.developer
Manage the Cloud Run Service for functions.
storage.buckets.create , storage.objects.{delete, get, create, list}
Required for storing source code in user project.
You can see the entire set of permissions under the predefined IAM roles
or by running this command:
gcloud iam roles describe roles/cloudfunctions.serviceAgent
Reset this service account to the default role by removing whatever role it has
and adding the Cloud Functions Service Agent role:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member serviceAccount:service- PROJECT_NUMBER @gcf-admin-robot.iam.gserviceaccount.com \
--role roles/cloudfunctions.serviceAgent
Troubleshooting permission errors
If you get permission errors when you deploy, update, delete, or execute
functions in your project, perform the following steps:
Make sure that you have the Editor or Owner role on your project, or
that you are using the Cloud Functions Developer role.
If you are using the Cloud Functions Developer role at the project
level, also ensure that you have
granted the user the IAM Service Account User role .
Currently, only execution permissions are allowed at the per-function level.
Verify that the Cloud Functions Service Agent service account
( service-PROJECT_NUMBER@gcf-admin-robot.iam.gserviceaccount.com ) has the
Cloud Functions Service Agent
( cloudfunctions.serviceAgent ) role for your project.
Make sure the Include Google-provided role grants box on the
Permissions tab of the Console IAM page
is checked to see this account. Or you can use
gcloud projects add-iam-policy-binding PROJECT_ID .
Ensure that you have permissions for trigger sources, such as
Pub/Sub or
Cloud Storage .
If you get an ”insufficient permissions” error, or have other
authentication problems when you run your functions, make sure that the runtime
service account has the correct permissions to access the resources your
functions need. Then, repeat steps 2 and 3.
If you get a ”service unavailable” error during deployment, make
sure that the runtime service account PROJECT_ID@appspot.gserviceaccount.com
exists in your project. To recreate this service account if it was deleted, see
Undeleting a service account .
See also Troubleshoot Cloud Run functions .
1 Cloud Run functions only uses the
legacy Cloud Build service account
for projects created before July 2024.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
