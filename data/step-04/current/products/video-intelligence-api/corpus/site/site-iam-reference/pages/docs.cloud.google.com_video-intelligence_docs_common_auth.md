---
title: "Authenticating to the Video Intelligence API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/video-intelligence/docs/common/auth
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/video-intelligence/docs/streaming/docker-kubernetes
source_metadata:
  url: https://docs.cloud.google.com/video-intelligence/docs/common/auth
  title: "Authenticating to the Video Intelligence API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Video Intelligence API
Guides
Send feedback
Authenticating to the Video Intelligence API
Stay organized with collections
Save and categorize content based on your preferences.
This page describes what a service account is, how to create one
to authenticate requests to the Video Intelligence API, and how to use your
service account to set Application Default Credentials .
To allow your application code to use the Video Intelligence API, you must
set up the proper credentials for your application to
authenticate its identity to the service and to obtain
authorization to perform tasks.
(These credential-related mechanisms are known as auth schemes.)
Note: Authentication and authorization are large
topics. How you set up your application or service
depends on a variety of factors, including who, or what application, you want
to authenticate, what tasks you want to allow the authenticated entity to
perform (commonly referred to as authorization), and what, if any,
container you use—for example, Compute Engine or
App Engine.
See the
Google Cloud Platform Auth Guide
for more information.
Google Cloud API authentication and authorization
(commonly grouped together as "auth") is typically done using a
service account. A service account allows your code to send
application credentials directly to the Video Intelligence API. A service
account, like a user account, is represented by an email
address. Unlike a user account, a service account is associated only
with an application.
Enabling the API
Before you can authenticate, you must first enable the
Video Intelligence API.
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
Verify that billing is enabled for your Google Cloud project .
Enable the Cloud Video Intelligence API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Create a service account:
Ensure that you have the Create Service Accounts IAM role
( roles/iam.serviceAccountCreator ) and the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ). Learn how to grant
roles .
In the Google Cloud console, go to the Create service account page.
Go to Create service account
Select your project.
In the Service account name field, enter a name. The Google Cloud console fills
in the Service account ID field based on this name.
In the Service account description field, enter a description. For example,
Service account for quickstart .
Click Create and continue .
Click Done to finish creating the service account.
Do not close your browser window. You will use it in the next step.
Create a service account key:
In the Google Cloud console, click the email address for the service account that you
created.
Click Keys .
Click Add key , and then click Create new key .
Click Create . A JSON key file is downloaded to your computer.
Click Close .
Set the environment variable GOOGLE_APPLICATION_CREDENTIALS
to the path of the JSON file that contains your credentials.
This variable applies only to your current shell session, so if you open
a new session, set the variable again.
Example: Linux or macOS
export GOOGLE_APPLICATION_CREDENTIALS = " KEY_PATH "
Replace KEY_PATH with the path of the JSON file that contains your credentials.
For example:
export GOOGLE_APPLICATION_CREDENTIALS = "/home/user/Downloads/service-account-file.json"
Example: Windows
For PowerShell:
$env :GOOGLE_APPLICATION_CREDENTIALS = " KEY_PATH "
Replace KEY_PATH with the path of the JSON file that contains your credentials.
For example:
$env :GOOGLE_APPLICATION_CREDENTIALS = "C:\Users\username\Downloads\service-account-file.json"
For command prompt:
set GOOGLE_APPLICATION_CREDENTIALS = KEY_PATH
Replace KEY_PATH with the path of the JSON file that contains your credentials.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
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
Verify that billing is enabled for your Google Cloud project .
Enable the Cloud Video Intelligence API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Create a service account:
Ensure that you have the Create Service Accounts IAM role
( roles/iam.serviceAccountCreator ) and the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ). Learn how to grant
roles .
In the Google Cloud console, go to the Create service account page.
Go to Create service account
Select your project.
In the Service account name field, enter a name. The Google Cloud console fills
in the Service account ID field based on this name.
In the Service account description field, enter a description. For example,
Service account for quickstart .
Click Create and continue .
Click Done to finish creating the service account.
Do not close your browser window. You will use it in the next step.
Create a service account key:
In the Google Cloud console, click the email address for the service account that you
created.
Click Keys .
Click Add key , and then click Create new key .
Click Create . A JSON key file is downloaded to your computer.
Click Close .
Set the environment variable GOOGLE_APPLICATION_CREDENTIALS
to the path of the JSON file that contains your credentials.
This variable applies only to your current shell session, so if you open
a new session, set the variable again.
Example: Linux or macOS
export GOOGLE_APPLICATION_CREDENTIALS = " KEY_PATH "
Replace KEY_PATH with the path of the JSON file that contains your credentials.
For example:
export GOOGLE_APPLICATION_CREDENTIALS = "/home/user/Downloads/service-account-file.json"
Example: Windows
For PowerShell:
$env :GOOGLE_APPLICATION_CREDENTIALS = " KEY_PATH "
Replace KEY_PATH with the path of the JSON file that contains your credentials.
For example:
$env :GOOGLE_APPLICATION_CREDENTIALS = "C:\Users\username\Downloads\service-account-file.json"
For command prompt:
set GOOGLE_APPLICATION_CREDENTIALS = KEY_PATH
Replace KEY_PATH with the path of the JSON file that contains your credentials.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Creating a service account in the Google Cloud console
To create a service account using the Google Cloud console, do the
following:
From the Google Cloud console
Credentials
page, select Create credentials > Service account key .
Next, under Service account select New service account .
In the Service account name box, enter a name for your service
account. This name is used as the default name for your Service
account ID (to the left of the "@" in the generated service
account ID address), but you can change this service account ID
name. These names are arbitrary; it is only important that you
remember them.
Under Key type select JSON for most new projects.
Click Create .
The Google Cloud console then generates a JSON key (as a .json
text file), prompts you to download the file to your computer, and
displays a Service account created dialog box.
The generated JSON key will be similar to the following sample JSON key:
{
"type": "service_account",
"project_id": " PROJECT_ID ",
"private_key_id": " SOME_NUMBER ",
"private_key": "-----BEGIN PRIVATE KEY-----\n PRIVATE_KEY \n-----END PRIVATE KEY-----\n",
"client_email": " SERVICE_ACCOUNT_EMAIL ",
"client_id": "...",
"auth_uri": "https://accounts.google.com/o/oauth2/auth",
"token_uri": "https://accounts.google.com/o/oauth2/token",
"auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
"client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/ SERVICE_ACCOUNT_EMAIL "
}
Store this JSON file securely, as it contains your private key (and
this file is the only copy of that key). You must refer to this
service account key file within your code when you send annotation
requests to Video Intelligence API.
Authenticating with Application Default Credentials
The simplest way for applications to authenticate to Video Intelligence API is
by using
Application Default Credentials (ADC).
Services using ADC first search for credentials within a
GOOGLE_APPLICATION_CREDENTIALS environment variable. Unless you
specifically require ADC to use other credentials (for example, user
credentials), you should set this environment variable to point to
your service account key file (the .json file downloaded when you
created a service account key.
$ export GOOGLE_APPLICATION_CREDENTIALS= PATH_TO_SERVICE_ACCOUNT_FILE
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
