---
title: "Get or reset an authorization code \_|\_ Cloud Domains \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/domains/docs/reset-authorization-code
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/domains/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/domains/docs/reset-authorization-code
  title: "Get or reset an authorization code \_|\_ Cloud Domains \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Cloud Domains
Guides
Send feedback
Get or reset an authorization code
Stay organized with collections
Save and categorize content based on your preferences.
Note: On September 7, 2023 Squarespace acquired all domain registrations and related
customer accounts from Google Domains. For more information about how this change affects
Cloud Domains, see
Cloud Domains feature deprecations ,
Renew an expired domain registration , and Squarespace purchase of Google Domains FAQ .
This page describes how to get or reset an authorization code.
To transfer a domain to a third-party
registrar , you must get
an authorization code to provide to your new registrar.
If an unauthorized party gets access to your authorization code, you can protect
your domain by resetting the authorization code.
Note: You can get or reset the authorization code only after 60 days have
elapsed since the initial registration.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or the following IAM roles.
Permissions
domains.registrations.configureManagement
Roles
roles/domains.admin
Get the authorization code
To get the authorization code for a specific domain, complete the following
steps.
Console
In the Google Cloud console, go to the Cloud Domains page.
Go to Cloud Domains
On the Registrations list, click the domain name that you
want to transfer.
On the Domain details page, click Authorization code .
The code is available in the Authorization code dialog.
Copy the code to provide to your new registrar.
gcloud
Use the gcloud
domains registrations authorization-code get command :
gcloud domains registrations authorization-code get DOMAIN_NAME
Replace DOMAIN_NAME with the name of the registered
domain that you want to get the authorization code for, such as
example.app .
Your output looks similar to the following:
code: 0ahDsXjSBwGL7fbr
Copy the code from the command output to provide to your new registrar.
API
Use the
registrations.retrieveAuthorizationCode method
with an empty body:
GET https://domains.googleapis.com/v1/projects/ PROJECT_ID /locations/global/registrations/ DOMAIN_NAME :retrieveAuthorizationCode
Replace the following:
PROJECT_ID : the name of the project
DOMAIN_NAME : the domain that you want to get the
authorization code for
Copy the code from the output and provide it to your new registrar.
Reset the authorization code
To reset the authorization code for a specific domain, complete the
following steps.
Console
In the Google Cloud console, go to the Cloud Domains page.
Go to Cloud Domains
On the Registrations list, click the domain name that you want
to transfer.
On the Domain details page, click Authorization code .
In the Authorization code dialog, click Reset .
gcloud
Use the gcloud
domains registrations authorization-code reset command :
gcloud domains registrations authorization-code reset DOMAIN_NAME
Replace DOMAIN_NAME with the name of the registered domain
that you want to reset the authorization code for, such as example.app .
Your output looks similar to the following:
code: d637oEVWKpqgDT88
API
Use the
registrations.resetAuthorizationCode method
with an empty body:
POST https://domains.googleapis.com/v1/projects/ PROJECT_ID /locations/global/registrations/ DOMAIN_NAME :resetAuthorizationCode
Replace the following:
PROJECT_ID : the name of the project
DOMAIN_NAME : the domain that you want to reset the
authorization code for
What's next
To edit registration settings using Cloud Domains, see
Edit registration settings .
To access API information, see the
Cloud Domains API .
To find solutions for common issues that you might encounter when using
Cloud Domains, see
Troubleshooting .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
