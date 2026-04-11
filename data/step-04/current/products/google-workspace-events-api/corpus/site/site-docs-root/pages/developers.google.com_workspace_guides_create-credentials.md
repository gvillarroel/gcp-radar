---
title: "Create access credentials \_|\_ Google Workspace \_|\_ Google for Developers"
url: https://developers.google.com/workspace/guides/create-credentials
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://developers.google.com/workspace/events
source_metadata:
  url: https://developers.google.com/workspace/guides/create-credentials
  title: "Create access credentials \_|\_ Google Workspace \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Guides
Send feedback
Create access credentials
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Google Workspace APIs require credentials, which can be API keys, OAuth client IDs, or service accounts, depending on the type of access needed.
API keys provide anonymous access to public data and are created in the Google Cloud console.
OAuth client IDs are used for accessing user data with consent and require separate IDs for different platforms.
Service accounts enable applications to access data or act on behalf of users and require role assignment and secure key management.
Creating a service account involves assigning roles, generating keys, and optionally configuring domain-wide delegation for accessing user data on behalf of the application.
Credentials are used to obtain an access token from Google's authorization
servers so your app can call Google Workspace APIs. This guide describes how
to choose and set up the credentials your app needs.
For definitions of terms found on this page, see the
Authentication and authorization overview .
Choose the access credential that is right for you
The required credentials depend on the type of data, platform, and access
methodology of your app. There are three types of credentials available:
Use case
Authentication method
About this authentication method
Access publicly available data anonymously in your app.
API keys
Check that the API you want to use supports API keys before using
this authentication method.
Access user data such as their email address or age.
OAuth client ID
Requires your app to request and receive consent from the user.
Access data that belongs to your own application or access resources
on behalf of Google Workspace or Cloud Identity users through
domain-wide delegation.
Service account
When an app authenticates as a service account, it has access to all
resources that the service account has permission to access.
Note: To be guided on how to choose a credential, see
Choose the right authentication method for your use case
in the Google Cloud console or use the
Help me choose option in the
Google Cloud console.
API key credentials
An API key is a long string containing upper and lower case letters, numbers,
underscores, and hyphens, such as AIzaSyDaGmWKa4JsXZ-HjGw7ISLn_3namBGewQe .
This authentication method is used to anonymously access publicly available
data, such as Google Workspace files shared using the "Anyone on the
Internet with this link" sharing setting. For more details, see
Using API keys .
To create an API key:
In the Google Cloud console, go to Menu menu
> APIs & Services
> Credentials .
Go to Credentials
Click Create credentials >
API key .
Your new API key is displayed.
Click Copy content_copy to copy your API key for use
in your app's code. The API key can also be found in the "API Keys" section of your
project's credentials.
To prevent unauthorized use, we recommend restricting where and for which APIs the API key
can be used. For more details, see
Add API restrictions .
OAuth client ID credentials
To authenticate end users and access user data in your app, you need to
create one or more OAuth 2.0 Client IDs. A client ID is used to identify a
single app to Google's OAuth servers. If your app runs on multiple platforms,
you must create a separate client ID for each platform.
Choose your application type
for specific instructions about how to create an OAuth client ID:
Web application
In the Google API Console, go to Menu menu
> Google Auth platform
> Clients .
Go to Clients
Click Create Client .
Click Application type > Web application .
In the Name field, type a name for the credential. This name is only shown in the Google API Console.
Add authorized URIs related to your app:
Client-side apps (JavaScript) –Under Authorized JavaScript origins , click Add URI . Then, enter a URI to use for browser requests. This identifies the domains from which your application can send API requests to the OAuth 2.0 server.
Server-side apps (Java, Python, and more) –Under Authorized redirect URIs , click Add URI . Then, enter an endpoint URI to which the OAuth 2.0 server can send responses.
Click Create .
The newly created credential appears under OAuth 2.0 Client IDs .
Note the Client ID. Client secrets aren't used for Web applications.
Android
In the Google API Console, go to Menu menu
> Google Auth platform
> Clients .
Go to Clients
Click Create Client .
Click Application type > Android .
In the "Name" field, type a name for the credential. This name is only shown in the Google API Console.
In the "Package name" field, enter the package name from your AndroidManifest.xml file.
In the "SHA-1 certificate fingerprint" field, enter your generated SHA-1 certificate fingerprint .
Click Create .
The newly created credential appears under "OAuth 2.0 Client IDs."
iOS
In the Google API Console, go to Menu menu
> Google Auth platform
> Clients .
Go to Clients
Click Create Client .
Click Application type > iOS .
In the "Name" field, type a name for the credential. This name is only shown in the Google API Console.
In the "Bundle ID" field, enter the bundle identifier as listed in the app's Info.plist file.
Optional: If your app appears in the Apple App Store, enter the App Store ID.
Optional: In the "Team ID" field, enter the unique 10-character string that's generated by Apple and assigned to your team.
Click Create .
The newly created credential appears under "OAuth 2.0 Client IDs."
Chrome Extension
In the Google API Console, go to Menu menu
> Google Auth platform
> Clients .
Go to Clients
Click Create Client .
Click Application type > Chrome Extension .
In the "Name" field, type a name for the credential. This name is only shown in the Google API Console.
In the "Item ID" field, enter your app's unique 32-character ID string. You can find this ID value in your app's Chrome Web Store URL and in the Chrome Web Store Developer Dashboard .
Click Create .
The newly created credential appears under "OAuth 2.0 Client IDs."
Desktop app
In the Google API Console, go to Menu menu
> Google Auth platform
> Clients .
Go to Clients
Click Create Client .
Click Application type > Desktop app .
In the Name field, type a name for the credential. This name is only shown in the Google API Console.
Click Create .
The newly created credential appears under "OAuth 2.0 Client IDs."
TVs & Limited Input devices
In the Google API Console, go to Menu menu
> Google Auth platform
> Clients .
Go to Clients
Click Create Client .
Click Application type > TVs & Limited Input devices .
In the "Name" field, type a name for the credential. This name is only shown in the Google API Console.
Click Create .
The newly created credential appears under "OAuth 2.0 Client IDs."
Service account credentials
A service account is a special kind of account used by an application, rather
than a person. You can use a service account to access data or perform actions
by the robot account, or to access data on behalf of Google Workspace
or Cloud Identity users. For more information, see
Understanding service accounts .
Create a service account
Google API Console
In the Google API Console, go to Menu menu
> IAM & Admin
> Service Accounts .
Go to Service Accounts
Click Create service account .
Fill in the service account details, then click Create and continue .
Note: By default, Google creates a unique service account ID. If you would like to
change the ID, modify the ID in the service account ID field.
Optional: Assign roles to your service account to grant access to your Google Cloud project's resources. For more details, refer to Granting, changing, and revoking access to resources .
Click Continue .
Optional: Enter users or groups that can manage and perform actions with this service account. For more details, refer to Managing service account impersonation .
Click Done . Make a note of the email address for the service account.
gcloud CLI
Create the service account:
gcloud iam service-accounts create SERVICE_ACCOUNT_NAME \
--display-name=" SERVICE_ACCOUNT_NAME "
Optional: Assign roles to your service account to grant access to your Google Cloud project's resources. For more details, refer to Granting, changing, and revoking access to resources .
Assign a role to a service account
You must assign a prebuilt or custom role to a service account by a super
administrator account.
In the Google Admin console, go to Menu
menu >
Account > Admin roles .
Go to Admin roles
Point to the role that you want to assign, and then click Assign admin .
Click Assign service accounts .
Enter the email address of the service account.
Click Add > Assign role .
Create credentials for a service account
You need to obtain credentials in the form of a public/private key pair. These
credentials are used by your code to authorize service account actions within
your app.
To obtain credentials for your service account:
In the Google Cloud console, go to Menu menu
> IAM & Admin
> Service Accounts .
Go to Service Accounts
Select your service account.
Click Keys > Add key > Create new key .
Select JSON , then click Create .
Your new public/private key pair is generated and downloaded to your
machine as a new file. Save the downloaded JSON file as credentials.json in your
working directory. This file is the only copy of this key. For information about how to store
your key securely, see
Managing service account keys .
Click Close .
Optional: Set up domain-wide delegation for a service account
To call APIs on behalf of users in a Google Workspace organization,
your service account needs to be granted domain-wide delegation of authority in
the Google Workspace Admin console by a super administrator account. For more
information, see
Delegating domain-wide authority to a service account .
To set up domain-wide delegation of authority for a service account:
In the Google Cloud console, go to Menu menu
> IAM & Admin
> Service Accounts .
Go to Service Accounts
Select your service account.
Click Show advanced settings .
Under "Domain-wide delegation," find your service account's "Client ID." Click Copy content_copy to copy the client ID value to your clipboard.
If you have super administrator access to the relevant Google Workspace account, click
View Google Workspace Admin Console , then sign in using a super administrator user
account and continue following these steps.
If you don't have super administrator access to the relevant Google Workspace account,
contact a super administrator for that account and send them your service account's Client ID
and list of OAuth Scopes so they can complete the following steps in the Admin console.
In the Google Admin console, go to Menu menu
> Security
> Access and data control
> API controls .
Go to API controls
Click Manage Domain Wide Delegation .
Click Add new .
In the "Client ID" field, paste the client ID that you previously copied.
In the "OAuth Scopes" field, enter a comma-delimited list of the scopes required by your application. This is the same set of scopes you defined when configuring the OAuth consent screen.
Click Authorize .
Next step
You're ready to develop on Google Workspace! Review the list of
Google Workspace developer products and
how to find help .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-03 UTC."],[],["Google uses credentials for apps to access Google Workspace APIs. Three credential types exist: API keys for public data access, OAuth client IDs for user data, and service accounts for application-owned data or delegated access. To create an API key go to the API and Services section in the Google Cloud console. Create an OAuth client ID by choosing the correct app platform and filling the required fields. Service accounts are created through IAM & Admin section of the Google Cloud console, or CLI, and allow role assignments and key generation. Domain-wide delegation can be set up in the Google Admin console to make API calls on behalf of users.\n"]]
