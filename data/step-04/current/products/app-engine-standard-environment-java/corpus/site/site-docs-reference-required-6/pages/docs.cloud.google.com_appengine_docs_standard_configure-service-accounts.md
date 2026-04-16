---
title: "Configure App Engine service accounts \_|\_ App Engine standard environment\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts
knowledge_key: corpus
source_id: site-docs-reference-required-6
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/standard/java/building-app
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard/configure-service-accounts
  title: "Configure App Engine service accounts \_|\_ App Engine standard environment\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
App Engine
Standard environment
Guides
Send feedback
Configure App Engine service accounts
Stay organized with collections
Save and categorize content based on your preferences.
App Engine applications require a service account
to access other Google Cloud services and execute tasks.
There are two types of service accounts in App Engine
and any service account in your Cloud project can be assigned to act as either
the app-level default or per-version service account:
App-level default service account - This service account is used for all of your deployed
services when you don't configure a "per-version service account". You can choose
to assign a service account that you created or use the
auto-created default service account that
gets created when you initially deploy a service to your Cloud project. For example, the
App Engine default service account ( PROJECT_ID @appspot.gserviceaccount.com ).
Per-version service account - A service account configured as the identity
for a specific version of your deployed service. When deploying an existing
version or a new version, you can specify a service account to act as that version's
identity. For example, if a version requires permissions that differ from the
app-level default service account, you can assign a service account that is specific to that version.
View your configured service accounts
To view the current app-level default service account, run the gcloud app describe
command.
To view the service account used by a deployed version:
gcloud
Run the gcloud app versions describe command:
gcloud app versions describe VERSION_ID --service = SERVICE_NAME
Replace:
VERSION_ID with the ID of the version.
SERVICE_NAME with the name of the service that you created.
Console
Go to the App Engine Versions tab in the console.
Go to Versions
Locate the email address of your App Engine
version-specific service account. Example: SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com
Assign an app-level default service account
By default, the app-level default service account is the auto-created
PROJECT_ID @appspot.gserviceaccount.com service account. You can assign another service
account to act as the app-level default service account using Google Cloud CLI,
Google Cloud console, or Admin API.
Specify an app-level default service account during app creation
During the initial App Engine application creation process,
you can choose to assign a service account that you
created or use the auto-created
PROJECT_ID @appspot.gserviceaccount.com service account to act as the default.
To create a your App Engine application and assign an app-level
default service account, you can use one of the following:
gcloud
Run the gcloud app create command:
gcloud app create --service-account = SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com
Replace:
SERVICE_ACCOUNT_NAME with the name of the service account that you created.
PROJECT_ID with ID of the Google Cloud project in which you want to assign the service account.
Console
Go to the App Engine page:
Go to App Engine
Create a Google Cloud project.
In the Create App section, select a service account from Identity and API access .
Update the app-level default service account for your app
To update the app-level default service account for your application, you can use
one of the following to assign a new service account:
Important: Only versions deployed after the update will use the new app-level
default service account. All previously deployed versions will not use the new app-level
default service account until you re-deploy that version.
gcloud
Run the gcloud app update command.
gcloud app update --service-account = SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com
Replace:
SERVICE_ACCOUNT_NAME with the name of the service account that you created.
PROJECT_ID with ID of the Google Cloud project in which you want to assign the
service account.
Each new version that you deploy hereafter uses the new app-level default service
account unless you explicitly assign a version-specific service account.
Console
Go to the App Engine Application Settings tab in the console and click
Edit Application Settings .
Go to Application Settings
Choose an app-level default service account from Select a Service account
and click Save .
You will be redirected to the Application Settings tab where you can view the email
address of your updated app-level default service account. Example:
SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com .
Each new version that you deploy hereafter uses the new app-level default service
account unless you explicitly assign a version-specific service account.
Deploy with a version-specific service account
You can set a version-specific service account only during the deployment of new
versions. Using a version-specific service account lets you grant different
privileges to each application version, based on the specific tasks it performs,
and avoid granting more privileges than necessary.
You must have an existing service
account before deploying your application. Your version-specific service account
must be in the same project where you deploy your application.
Note: If a version-specific service account is specified in both the app.yaml file
and in the gcloud CLI, the gcloud setting takes precedence.
After May 15, 2024, Artifact Registry hosts images for the gcr.io domain in
Google Cloud projects without previous Container Registry usage. If you deploy an
existing application in a new project created after this date, the service account
might not have the required permissions to deploy the app. To grant the
required permissions, see Deploying to App Engine .
Set a version-specific service account
gcloud
Run the gcloud app deploy command:
gcloud app deploy --service-account = SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com
Replace:
SERVICE_ACCOUNT_NAME with the name of the service account that you created.
PROJECT_ID with ID of the Google Cloud project in which you want to assign
the service account. Your version-specific service account must be in the
same project where you deploy your application.
app.yaml
In your
app.yaml
file, specify your service account by adding the
service_account
element:
service_account: SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com
Replace:
SERVICE_ACCOUNT_NAME with the name of the service account that you created.
PROJECT_ID with ID of the Google Cloud project in which you want to assign
the service account. Your version-specific service account must be in the
same project where you deploy your application.
appengine-web.xml
If you use the Java runtimes and include the App Engine legacy bundled services,
specify your service account by adding the
<service-account>
element in your appengine-web.xml
file:
<service-account> SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com</service-account>
Replace:
SERVICE_ACCOUNT_NAME with the name of the service account that you created.
PROJECT_ID with ID of the Google Cloud project in which you want to assign
the service account. Your version-specific service account must be in the
same project where you deploy your application.
App Engine default service account
The default App Engine service account is automatically created
when you use App Engine.
Depending on your organization policy configuration, the default service account might
automatically be granted the Editor role on your
project. We strongly recommend that you disable the automatic role grant by
enforcing the iam.automaticIamGrantsForDefaultServiceAccounts organization policy
constraint . If you created your organization after May 3, 2024, this
constraint is enforced by default.
If you disable the automatic role grant, you must decide which roles to grant to the default
service accounts, and then grant these
roles yourself.
If the default service account already has the Editor role, we recommend that you replace the
Editor role with less permissive roles.To safely modify the service account's roles, use Policy Simulator to see the impact of
the change, and then grant and revoke the
appropriate roles .
To learn how to grant roles to service accounts and other principals, see
Manage access to projects, folders, and
organizations .
After May 15, 2024, Artifact Registry hosts images for the gcr.io domain in
Google Cloud projects without previous Container Registry usage. If you deploy an
existing application in a new project created after this date, the service account
might not have the required permissions to deploy the app. To grant the
required permissions, see Deploying to App Engine .
For modifying permissions, deleting, and restoring your service accounts, see
Creating and managing service accounts .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
