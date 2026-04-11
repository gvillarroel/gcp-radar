---
title: "Configure account connectors \_|\_ Developer Connect \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/developer-connect/docs/configure-connectors
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/developer-connect/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/developer-connect/docs/configure-connectors
  title: "Configure account connectors \_|\_ Developer Connect \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Developer Connect
Guides
Send feedback
Configure account connectors
Stay organized with collections
Save and categorize content based on your preferences.
Preview
— Account connectors
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This document describes how to use the advanced configuration
options for Developer Connect account connectors.
An account connector is a Developer Connect feature that helps you connect
your Google Cloud account with your individual account on an
non-Google Developer Tools provider. Users can specify the type of data to be
accessed by the account connector by selecting the appropriate scope for that
connector. Once an account connector connection is created for an organization,
users within that organization can use that connection to authorize their
individual accounts to be used with that connection.
Before you begin
Sign in to your Google Account. If you don't already have one,
sign up for a new account .
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
Enable the Developer Connect API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
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
Enable the Developer Connect API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Enabling Developer Connect also enables the
Secret Manager API .
Optional: Create a customer-managed
encryption key (CMEK) for encrypting the authentication secrets that
Developer Connect creates.
Required roles
To get the permissions that
you need to create connections and links,
ask your administrator to grant you the
following IAM roles:
If you aren't the project owner:
Developer Connect Admin ( roles/developerconnect.admin )
on your user account.
If you plan to use a CMEK to encrypt the secrets that Developer Connect creates:
Cloud KMS CryptoKey Encrypter/Decrypter ( roles/cloudkms.cryptoKeyEncrypterDecrypter )
on the Secret Manager Service Account.
If you plan to use the gcloud CLI to complete the steps in this guide:
Secret Manager Admin role ( roles/secretmanager.admin )
on the Developer Connect Service Account.
If you plan to use the Google Cloud console to complete the steps in this guide:
Project IAM Admin ( roles/resourcemanager.projectIamAdmin )
on your user account.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Note: When you have the Project IAM Admin
( roles/resourcemanager.projectIamAdmin ) role, the Google Cloud console can
automatically grant necessary permissions on your behalf. If your administrator
won't allow you to have the Project IAM Admin role, then ask your administrator
to grant Secret Manager Admin ( roles/secretmanager.admin ) on the
Developer Connect Service Account
( service-{projectNumber}@gcp-sa-devconnect.iam.gserviceaccount.com ).
Create an account connector
To create a new account connector, do the following:
In the Google Cloud console, open Developer Connect .
Go to Developer Connect
Select Account connectors .
Click Create connector .
Select the Region in which to create this account connector.
Give the account connector a Name .
Select the provider.
Select the scopes to be granted to Developer Connect for this
account connector.
Scopes determine what actions Developer Connect can perform in the
selected provider's service. Scopes differ according to each provider. You
must select at least one scope unless the provider has no scopes.
Depending on the provider, it's possible that no scopes are available to
select. You might be able to add them manually. It's also possible that
scopes are required.
Click Create to finish creating this account connector.
Connect your account
After you've created an account connector, you still need to connect
Developer Connect to your account with the provider before you can use the
account connector.
In the Google Cloud console, open Developer Connect .
Go to Developer Connect
Select Account connectors .
The Account connectors page lists all the account connectors you have in
your project.
Click the name of the account connector for which you want to connect your
provider account.
The Connector details page is displayed.
Click Connect your account .
An Oauth authentication dialog is shown.
Provide the information in the dialog to authenticate to your provider.
Click Authorize .
Update an account connector
You can update an existing account connector, but you can only update the scopes
for that connector. If you update scopes for a given account connector, all
existing users of that connector are emptied.
In the Google Cloud console, open Developer Connect .
Go to Developer Connect
Developer Connect displays the Git repositories page.
Select Account connectors .
The Account connectors page lists all the account connectors you have in
your project.
Click the name of the account connector you want to update.
The Connector details page is displayed.
Click Edit .
From the Scopes list, select the scopes you want to allow for this
account connector.
Click Save .
Delete an account connector
In the Google Cloud console, open Developer Connect .
Go to Developer Connect
Developer Connect displays the Git repositories page.
Select Account connectors .
The Account connectors page lists all the account connectors you have in
your project.
From the More menu, select Delete .
The Connector details page is displayed.
Click Edit .
What's next
Learn about account connectors
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
