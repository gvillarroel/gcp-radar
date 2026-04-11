---
title: "Authentication \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers"
url: https://developers.google.com/ad-manager/api/beta/authentication
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/ad-manager/api/beta/getting-started
source_metadata:
  url: https://developers.google.com/ad-manager/api/beta/authentication
  title: "Authentication \_|\_ Ad Manager API (Beta) \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

To discuss and provide feedback on our products, join the official Ad Manager Discord channel in the Google Advertising and Measurement Community server.
Home
Products
Ad Manager
API (Beta)
Send feedback
Authentication
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
All Ad Manager API requests must include an access token with the Ad Manager API scope.
Authentication depends on your interface and environment, with options including Service Account, Web application, and Local development.
To authenticate, you need to enable the Ad Manager API in your Google API Console Cloud Project and create credentials based on your chosen authentication type.
After creating credentials, you must configure your Ad Manager network by enabling API access and potentially adding a service account user.
If not using a client library, you should use an OAuth2 library and include the access token in your API requests.
This document describes how to authenticate to the Ad Manager API. How you
authenticate depends on the interface you use and the environment where your
code is running, but all API requests must include an access token with an
Ad Manager API scope .
The Ad Manager client libraries use Application Default Credentials
to generate access tokens with Ad Manager API scopes. This guide shows
how to configure Application Default Credentials.
If you aren't using a client library, you still need to create credentials
and use them to authorize your requests.
For more information about authentication and authorization, see the
Using OAuth 2.0 guide.
Determine your authentication type
Authentication type
Description
Service Account
Choose this if you want to authenticate as dedicated
account rather than a particular person.
Learn more .
Web application
Choose this if you want to authenticate as any user
who grants permission to your application to access
their Ad Manager data.
Learn more
Local development
Choose this if you want to authenticate as your own
Google Account or a Service Account from your local
development environment.
Enable the Ad Manager API
Enable the Ad Manager API in your
Google API Console Cloud Project.
If prompted, select a project, or create a new one.
Create credentials
Click the tab for your authentication type and follow the instructions to
create your credentials:
Service Account
On Google Cloud
To authenticate a workload running on Google Cloud, you use the credentials of
the service account attached to the compute resource where your code is
running.
For example, you can attach a service account to a Compute Engine virtual
machine (VM) instance, a Cloud Run service, or a Dataflow job. This approach
is the preferred authentication method for code running on a Google Cloud
compute resource.
For information about which resources you can attach a service account to,
and help with attaching the service account to the resource, see the
documentation on attaching a service account .
On-premises or on a different cloud provider
The preferred method to set up authentication from outside of Google Cloud is
to use workload identity federation ; you create a
credential configuration file and set the GOOGLE_APPLICATION_CREDENTIALS
environment variable to point to it. This approach is more secure than
creating a service account key.
If you are not able to configure workload identity federation, then you must
create a service account and create a key for the service account:
Open the Google API Console Credentials page .
On the Credentials page, select Create credentials , then
select Service Account .
Click the email address of the service account that you want to create
a key for.
Click the Keys tab.
Click the Add key drop-down menu, then select Create new key .
Select JSON as the Key type and click Create .
Set the environment variable GOOGLE_APPLICATION_CREDENTIALS to the path
of the JSON file.
Linux or macOS
export GOOGLE_APPLICATION_CREDENTIALS = KEY_FILE_PATH
Windows
set GOOGLE_APPLICATION_CREDENTIALS = KEY_FILE_PATH
Web application
Open the Google API Console Credentials page .
If prompted, select the project where you enabled the Ad Manager API.
On the Credentials page, select Create credentials , then
select OAuth client ID .
Select the Web application application type.
Fill in the form and click Create . Applications that use languages and
frameworks like PHP, Java, Python, Ruby, and .NET must specify authorized
redirect URIs . The redirect URIs are the endpoints to which the OAuth 2.0
server can send responses. These endpoints must adhere to Google's
validation rules .
After creating your credentials, download the client_secret.json file. Securely store the file in a location that only your application can access.
From here, follow the steps to obtain OAuth 2.0 access tokens
Local development
Set up Application Default Credentials (ADC) in your local environment.
Install the Google Cloud CLI, then initialize it by running the following
command:
gcloud init
Create local authentication credentials for your Google Account and set
the project ID to a project where the Ad Manager API is enabled:
gcloud auth application-default login --scopes = "https://www.googleapis.com/auth/admanager"
gcloud auth application-default set-quota-project PROJECT_ID
Alternatively, authenticate as a Service Account setting the environment
variable GOOGLE_APPLICATION_CREDENTIALS to the path of your key file.
Linux or macOS
export GOOGLE_APPLICATION_CREDENTIALS = KEY_FILE_PATH
Windows
set GOOGLE_APPLICATION_CREDENTIALS = KEY_FILE_PATH
Configure your Ad Manager network
Tip: If you are a third-party developer, ask your client to complete this step
for you. Send them to
Add a service account user for API access
and provide the email address of your service account.
Service Account
Go to your Ad Manager network .
Click the Admin tab.
Ensure that API access is enabled.
Click the Add a service account user button.
Fill in the form using the service account email. The
service account user must be added to appropriate roles and teams
for your API integration.
Click the Save button. A message should appear, confirming
the addition of your service account.
View existing service account users by going to the Users tab and then
clicking the Service Account filter.
Web application
Go to your Ad Manager network .
Click the Admin tab.
Ensure that API access is enabled.
Local Development
Go to your Ad Manager network .
Click the Admin tab.
Ensure that API access is enabled.
Without a client library
If you are not using a client library, we still strongly recommend using
an OAuth2 library for authentication.
For detailed instructions on obtaining access tokens, see
Using OAuth2 with Google APIs .
Access tokens
Include your access token in a request to the API by including either an
access_token query parameter or an Authorization HTTP header Bearer value.
When possible, the HTTP header is preferable, because query strings tend to be
visible in server logs.
For example:
GET /v1/networks/1234
Host: admanager.googleapis.com
Authorization: Bearer ya29.a0Ad52N3_shYLX
GET https://admanager.googleapis.com/v1/networks/1234?access_token=1/fFAGRNJru1FTz70BzhT3Zg
Scope
Each access token is associated with one or more scopes. A scope controls the
set of resources and operations that an access token permits. The Ad Manager
API has two scopes. We recommend using the narrower admanager.readonly scope
if your application does not need to write data.
Note: For both API scopes, Ad Manager User role permissions
and Restrictions imposed by teams
still apply. In other words, the full admanager read and write scope only
grants write access to entities the user can edit in the Ad Manager UI.
Scope
Permissions
https://www.googleapis.com/auth/admanager
View and manage your campaigns on Google Ad Manager.
https://www.googleapis.com/auth/admanager.readonly
See your campaigns and data on Google Ad Manager.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-05 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-05 UTC."],[],["To access the Ad Manager API, you need an access token, generated using Application Default Credentials (ADC) or custom credentials. First, enable the Ad Manager API in your Google Cloud project. Then, choose an authentication type: Service Account, Web application, or Local development. Create credentials via the Google API Console, selecting the appropriate method. If not using a client library, use an OAuth2 library. Finally, include the access token in API requests, preferably in the `Authorization` HTTP header. Each access token should be associated with the `https://www.googleapis.com/auth/admanager` scope.\n"]]
