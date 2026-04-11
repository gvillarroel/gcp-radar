---
title: "Quickstart: Authenticate users with Google Accounts \_|\_ Identity-Aware Proxy\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iap/docs/authenticate-users-google-accounts
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iap/docs/managing-access
source_metadata:
  url: https://docs.cloud.google.com/iap/docs/authenticate-users-google-accounts
  title: "Quickstart: Authenticate users with Google Accounts \_|\_ Identity-Aware\
    \ Proxy \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Identity-Aware Proxy
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Authenticate users with Google Accounts
This page walks you through deploying an App Engine standard or flexible
environment application and securing it with Identity-Aware Proxy
(IAP) . The quickstart includes
sample code for an App Engine standard environment web app that
verifies a logged-in user's
name. This quickstart uses Cloud Shell to clone and deploy the sample
application. You can use this quickstart to enable IAP for
your own App Engine standard environment or
App Engine flexible environment app.
If you plan to serve resources from a content delivery network (CDN), see the best practices guide
for important information.
When an App Engine application consists of multiple services, it is
possible to configure different IAP permissions on the
different services, including making only some of the services
publicly-accessible while keeping the others protected.
To follow step-by-step guidance for this task directly in the
Google Cloud console, click Guide me :
Guide me
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
If you're using an existing project for this guide,
verify that you have
the permissions required to complete this guide . If you created a new
project, then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
If you're using an existing project for this guide,
verify that you have
the permissions required to complete this guide . If you created a new
project, then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
To enable IAP for App Engine, you need to set up the
App Engine instance. If you don't have your App Engine instance set
up already, see
Deploying
App Engine for a complete walkthrough.
IAP uses a Google-managed OAuth client to authenticate
users. Only users within the organization can access the
IAP-enabled application. If you want to allow access to
users outside of your organization, see
configure custom OAuth
clients .
Note: The ability to authenticate users with a Google-managed OAuth
client is available in
Preview .
Required roles
To get the permissions that
you need to authenticate users with Google Accounts,
ask your administrator to grant you the
IAP Policy Admin ( roles/iap.policyAdmin )
IAM role on your project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Enabling IAP
Console
The Google-managed OAuth client is not available when enabling IAP using the Google Cloud console.
Dynamic include file
If you haven't configured your project's OAuth consent screen, you'll be
prompted to do so. To configure your OAuth consent screen, see
Setting up your OAuth consent screen .
Setting up IAP access
Go to the
Identity-Aware Proxy page .
Go to the Identity-Aware Proxy page
Select the project you want to secure with IAP.
Select the checkbox next to the resource you want to grant access to.
On the right side panel, click Add principal .
In the Add principals dialog that appears, enter the email addresses of groups or
individuals who should have the IAP-secured Web App User role for the project.
The following kinds of principals can have this role:
Google Account : user@gmail.com
Google Group : admins@googlegroups.com
Service account : server@example.gserviceaccount.com
Google Workspace domain : example.com
Make sure to add a Google Account that you have access to.
Select Cloud IAP > IAP-secured Web App User from the Roles
drop-down list.
Click Save .
Turning on IAP
On the Identity-Aware Proxy page, under Applications ,
find the application you want to restrict
access to. To turn on IAP for a resource,
toggle the on/off switch in the IAP
column.
In the Turn on IAP window that appears, click Turn On to
confirm that you want IAP to secure your resource. After you turn on
IAP, it requires login credentials for all connections to your load balancer.
Only principals with the IAP-Secured Web App User ( roles/iap.httpsResourceAccessor ) role on the project will be
given access.
gcloud
Before you set up your project and IAP, you need an up-to-date version of the
gcloud CLI. For instructions on how to install the gcloud CLI, see Install the gcloud CLI .
To authenticate, use the Google Cloud CLI and run the following command.
gcloud auth login
Click the URL that appears and sign in.
After you sign in, copy the verification code that appears and paste it in the command line.
Run the following command to specify the project that contains the applications that you want to protect with IAP.
gcloud config set project PROJECT_ID
To enable IAP, run the following command.
gcloud iap web enable --resource-type=app-engine --versions= version
Add principals who should have the IAP-secured Web App user role to the project.
gcloud projects add-iam-policy-binding PROJECT_ID \
--member= PRINCIPAL_IDENTIFIER \
--role=roles/iap.httpsResourceAccessor
Replace PROJECT_ID with your project ID.
Replace PRINCIPAL_IDENTIFIER with the necessary principals. This can be a
type of domain, group, serviceAccount, or user. For example,
user:myemail@example.com .
After you enable IAP, you can use the gcloud CLI to modify the
IAP access policy using the IAM role
roles/iap.httpsResourceAccessor . Learn more about
managing roles and permissions .
API
Run the following command to prepare a settings.json file.
cat << EOF > settings.json
{
"iap":
{
"enabled":true
}
}
EOF
Run the following command to enable IAP.
curl -X PATCH \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Accept: application/json" \
-H "Content-Type: application/json" \
-d @settings.json \
"https://appengine.googleapis.com/v1/apps/ PROJECT_ID ?updateMask=iap"
After you enable IAP, you can use the Google Cloud CLI to modify the
IAP access policy using the IAM role
roles/iap.httpsResourceAccessor . Learn more about
managing roles and permissions .
Note: When a App Engine application consists of multiple
services, in order to make some services publicly-accessible and keep others
restricted, enable IAP on the entire application, then grant
the IAP-secured Web App User role to allUsers or
allAuthenticatedUsers on the services that should be publicly-accessible.
Role-based access:
Only principals with the IAP-secured Web App User ( roles/iap.httpsResourceAccessor ) role on this project are given access. Access to IAP-protected applications is not automatically granted, even to roles with extensive permissions such as Owner or Editor .
Test user authentication
Once the role is granted, the principals can access the app after authenticating with IAP. Access the app URL from a Google Account that was granted the
IAP with the IAP-secured Web App User ( roles/iap.httpsResourceAccessor ) role.
Use an incognito window in Chrome to access the app and sign in when
prompted. Users who are granted the IAP-secured Web App User role and have successfully authenticated can access the app. Users who aren't granted the required role or fail to authenticate cannot access the app.
What's next
Learn about Getting the user's identity and develop your
own App Engine app.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
