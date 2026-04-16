---
title: "Authenticating to the DLP API \_|\_ Sensitive Data Protection \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/sensitive-data-protection/docs/auth
knowledge_key: corpus
source_id: site-docs-reference-required-8
source_type: site
entrypoint: https://docs.cloud.google.com/sensitive-data-protection/docs/creating-job-triggers
source_metadata:
  url: https://docs.cloud.google.com/sensitive-data-protection/docs/auth
  title: "Authenticating to the DLP API \_|\_ Sensitive Data Protection \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Data Loss Prevention (Cloud DLP) is now a part of Sensitive Data Protection. The API name remains the same: Cloud Data Loss Prevention API (DLP API). For information about the services that make up Sensitive Data Protection, see Sensitive Data Protection overview .
Home
Documentation
Security
Sensitive Data Protection
Guides
Send feedback
Authenticating to the DLP API
Stay organized with collections
Save and categorize content based on your preferences.
You must authenticate to the DLP API in order to use it. The
DLP API can handle both API keys and authentication.
The main distinction between these two methods is:
API keys identify the calling project—the app or site—that is
making the call to an API.
Auth tokens identify a user—the person—that is using the
project.
Using an API key for unauthenticated access
You can use a Google Cloud console API key to authenticate to the
DLP API for some methods, including all
projects.content.*
and
projects.image.*
methods.
Follow the instructions to
create an API key
for your Google Cloud console project .
When making any DLP API request, pass your key as the value
of a key parameter. For example:
curl https://dlp.googleapis.com/v2/infoTypes?key=[YOUR_API_KEY]
It's important to protect your API keys against unauthorized use. For advice on
how to do this, see Best practices for securely using API
keys .
Note: When a Cloud Key Management Service wrapped key is used on
deidentify
or
reidentify
requests, API keys can't be used for authentication. Cloud Key Management Service does not
support API keys as an authentication method. For more information, see
Accessing the API .
Using a service account
To use a service account to authenticate to the DLP API:
Follow the instructions to
create a service account .
Select JSON as your key type, and grant the user the DLP User role
(roles/dlp.user).
For more information about granting roles to service accounts, see
Granting Roles to Service Accounts .
Note: Granting the user the Owner role is not necessary.
Once complete, your service account key is downloaded to your browser's
default location.
Next, decide whether you'll provide your service account authentication as a
bearer token or using
application default credentials .
Bearer tokens using a service account
If you're calling the DLP API directly, such as by making an
HTTP request with cURL, you'll pass your authentication as a bearer token in an
HTTP Authorization request header. To obtain a bearer token using your service
account:
Install the
Google Cloud CLI .
Authenticate to your service account, replacing [KEY_FILE] below
with the path to your service account key file:
gcloud auth activate-service-account --key-file [KEY_FILE]
Obtain an authorization token using your service account:
gcloud auth print-access-token
The command returns an access token value.
When calling the API, pass the token value as a bearer token
in an Authorization header:
curl -s -H 'Content-Type: application/json' \
-H 'Authorization: Bearer [ACCESS_TOKEN]' \
'https://dlp.googleapis.com/v2/infoTypes'
Application default credentials
If you're using a client library to call the DLP API, use
Application Default
Credentials (ADC).
Services using ADC look for credentials within a
GOOGLE_APPLICATION_CREDENTIALS environment variable. Unless you specifically
want to have ADC use other credentials (for example, user credentials), set
this environment variable to point to your service account key file.
export GOOGLE_APPLICATION_CREDENTIALS=[PATH_TO_KEY_FILE]
Using Sensitive Data Protection from Compute Engine VMs
In order to access the DLP API from VM instances, select
Allow full access to all Cloud APIs under the Identity and API Access
section when creating the VM.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
