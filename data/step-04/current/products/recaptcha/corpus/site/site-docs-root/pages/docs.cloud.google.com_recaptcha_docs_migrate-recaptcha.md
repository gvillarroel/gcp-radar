---
title: "Migrate from reCAPTCHA Classic \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/recaptcha/docs/migrate-recaptcha
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/recaptcha/docs
source_metadata:
  url: https://docs.cloud.google.com/recaptcha/docs/migrate-recaptcha
  title: "Migrate from reCAPTCHA Classic \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
reCAPTCHA
Guides
Send feedback
Migrate from reCAPTCHA Classic
Stay organized with collections
Save and categorize content based on your preferences.
This document explains how to migrate an active site
key from reCAPTCHA Classic to reCAPTCHA on a
Google Cloud project. You can migrate the site key by using either the
reCAPTCHA Admin console (recommended)
or
using the Google Cloud console .
The migration process takes 5–10 minutes to complete and
requires no code changes.
If you manage your keys in the reCAPTCHA Admin console ,
then you're using reCAPTCHA Classic.
The latest reCAPTCHA features are only available to site keys
that are managed within a Google Cloud project. For more information about the
available features, see Compare reCAPTCHA tiers .
The following changes occur after you complete the migration process:
Your site keys are available in a Google Cloud project without any changes.
Your existing reCAPTCHA integration continues to work
without requiring code changes. You can retain the same web page
instrumentation and backend calls. However, to access features
such as Account defender or Password defense, you must modify
your web page instrumentation and backend calls.
For more information, see Using reCAPTCHA features after migration .
You will be charged when you exceed the free monthly allowance of reCAPTCHA,
which is 10,000 assessments per month. For more information, see Billing information .
Note: reCAPTCHA v2 Android keys cannot be migrated.
Migrate using the reCAPTCHA Admin console
Go to the reCAPTCHA Admin console.
Go to reCAPTCHA admin console
Select the project that you want to migrate the keys to.
Select the keys to be migrated.
Click Submit .
The Google Cloud console opens with your project and the keys that you migrated.
Note: To resolve any migration failures, see
Troubleshoot migration issues .
Migrate using the Google Cloud console
Before you begin
Important: After a reCAPTCHA key is migrated to a
Google Cloud project, it can't be moved to a different
Google Cloud project. Ensure that you select the correct destination
project for your keys.
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
Go to project selector
Verify that billing is enabled for your Google Cloud project .
reCAPTCHA requires billing to be linked and enabled on the project
for the migration. You can enable billing by using either a credit card or an
existing Google Cloud project billing ID. If you require assistance with billing,
contact Cloud Billing Support .
If you want to run the gcloud CLI outside of the Google Cloud console,
install and initialize the gcloud CLI. For instructions, see
Install the Google Cloud CLI.
After installation,
initialize the Google Cloud CLI by running the following command:
gcloud init
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
Enable the reCAPTCHA Enterprise API
All reCAPTCHA tiers (Essentials, Premium, and Enterprise) run on
the reCAPTCHA Enterprise API.
Console
In the Google Cloud console, go to the reCAPTCHA Enterprise API page.
Go to reCAPTCHA Enterprise API
Verify that the name of your project appears in the project selector at the top of the page.
If you don't see the name of your project, click the project selector, and then select your project.
Click Enable .
gcloud
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
To set your Google Cloud project in the gcloud session, run the gcloud config set project
command. Replace PROJECT_ID with your Google Cloud project ID.
gcloud config set project PROJECT_ID
To enable the reCAPTCHA Enterprise API, run the gcloud services enable command:
gcloud services enable recaptchaenterprise.googleapis.com
To verify that the reCAPTCHA Enterprise API is enabled, run the gcloud services list command:
gcloud services list --enabled
Verify that the reCAPTCHA Enterprise API is listed in the list of enabled APIs.
Migrate to reCAPTCHA
To migrate reCAPTCHA Classic to
reCAPTCHA, choose an active site key from the reCAPTCHA Admin
console, and migrate the site key.
You can migrate one or more active site keys. However, you can migrate only one
site key at a time.
To execute the migration process, you must have a reCAPTCHA user account that
satisfies the following requirements:
In the reCAPTCHA Admin console, the user account is listed as an owner
for the site key you want to migrate.
The user account has one of the following IAM roles for the
Google Cloud project for which the reCAPTCHA Enterprise API is
enabled:
Project Owner ( roles/owner )
Project Editor ( roles/editor )
reCAPTCHA Admin ( roles/recaptchaenterprise.admin )
If your user account doesn't have one of these roles, ask your
administrator to grant the role, or follow the instructions in
Granting, changing, and
revoking access .
Migrate the site key by using the Google Cloud console, the Google Cloud CLI, or the reCAPTCHA Enterprise API.
Migrating the site key doesn't affect the key or the API endpoints; it
adds the key to the enterprise license.
Google Cloud console
In the Google Cloud console, go to the reCAPTCHA page.
Go to reCAPTCHA
Verify that the name of your project appears in the resource selector
at the top of the page.
If you don't see the name of your project, click the resource selector,
and then select your project.
From the Classic keys section, identify the key you want to migrate, and
click Upgrade key .
To complete the migration of the selected key, click Confirm .
gcloud CLI
To configure authentication, run the following gcloud command:
gcloud auth login
Log in with the reCAPTCHA user account that owns the chosen site key and
has one of the following roles: Project Owner , Project Editor , or
reCAPTCHA Enterprise Admin role.
Choose and copy an active site key that you have used to integrate reCAPTCHA
with your web pages:
Go to the reCAPTCHA Admin console
and click settings
.
Choose a site key. The following reCAPTCHA site keys are supported for
migration: reCAPTCHA v2 Checkbox,
reCAPTCHA v2 Invisible, and reCAPTCHA v3.
To copy the site key, click Copy site key .
Migrate the site key.
Use the gcloud recaptcha keys migrate
command as shown in the following example:
gcloud recaptcha keys migrate SITE_KEY --project PROJECT-ID
Provide the following values:
SITE_KEY : the active site key that you
copied from the reCAPTCHA Admin console.
PROJECT-ID : the ID of the Google Cloud project for
which the reCAPTCHA Enterprise API is enabled.
REST API
Choose and copy an active site key that you have used to integrate reCAPTCHA
with your web pages:
Go to the reCAPTCHA Admin console
and click settings
.
Choose a site key. The following reCAPTCHA site keys are supported for
migration: reCAPTCHA v2 Checkbox,
reCAPTCHA v2 Invisible, and reCAPTCHA v3.
To copy the site key, click Copy site key .
Migrate the site key.
Before using any of the request data,
make the following replacements:
PROJECT_ID : the ID of the Google Cloud project for which the
reCAPTCHA API is enabled.
SITE_KEY : the active site key that you copied from the reCAPTCHA Admin console.
HTTP method and URL:
POST https://recaptchaenterprise.googleapis.com/v1/projects/ PROJECT_ID /keys/ SITE_KEY :migrate
To send your request, choose one of these options:
curl
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d "" \ "https://recaptchaenterprise.googleapis.com/v1/projects/ PROJECT_ID /keys/ SITE_KEY :migrate"
PowerShell
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -Uri "https://recaptchaenterprise.googleapis.com/v1/projects/ PROJECT_ID /keys/ SITE_KEY :migrate" | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/ PROJECT-ID /keys/6Ldqgs0UAAAAAIn4k7YxEB-LwEh5S9-Gv6IIWB8m",
"displayName": "My site key",
"webSettings": {
"allowAllDomains": false,
"allowedDomains": [
recaptcha.net
],
"allowAmpTraffic": false,
"integrationType": "SCORE",
"challengeSecurityPreference": "CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED"
}
}
To verify that the site key is migrated, do the following:
Google Cloud console
Go to the reCAPTCHA page and find the migrated site key
in the reCAPTCHA keys section.
Go
to reCAPTCHA
gcloud CLI
Run the gcloud recaptcha keys list
command and find the migrated site key in the list of keys.
After migrating to reCAPTCHA, you can continue to use
the siteverify method to
assess a user's reCAPTCHA response token. For information
about the response, see Response of the siteverify method .
After a site key is migrated to reCAPTCHA, its usage
starts being recorded for display in the Google Cloud console within one hour ,
including usage and score-related dashboards. Usage before the migration is
generally not displayed in the Google Cloud console.
Note: You shouldn't delete site keys from the reCAPTCHA Admin console or
the reCAPTCHA page of the Google Cloud console. When you delete
a site key, it is deleted from both consoles and it removes the protection
that reCAPTCHA offers.
You can revoke the reCAPTCHA Enterprise Admin
( roles/recaptchaenterprise.admin ) IAM role from your reCAPTCHA
user account. You can either ask your administrator to revoke the access,
or follow the instructions on Granting, changing, and revoking access .
What's next
Use reCAPTCHA features after migration .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
