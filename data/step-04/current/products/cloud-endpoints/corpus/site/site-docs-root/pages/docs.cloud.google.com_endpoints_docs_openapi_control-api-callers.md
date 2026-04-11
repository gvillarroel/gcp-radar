---
title: "Controlling who can enable your API \_|\_ Cloud Endpoints with OpenAPI \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/endpoints/docs/openapi/control-api-callers
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/endpoints/docs/openapi
source_metadata:
  url: https://docs.cloud.google.com/endpoints/docs/openapi/control-api-callers
  title: "Controlling who can enable your API \_|\_ Cloud Endpoints with OpenAPI \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Endpoints
OpenAPI
Send feedback
Controlling who can enable your API
Stay organized with collections
Save and categorize content based on your preferences.
OpenAPI
| gRPC
API keys are associated with the Google Cloud project in which
they have been created. If your API requires an API key, you either have to give
your API users a key from the project that you created the Cloud Endpoints
service in, or you can let users enable your API in their own Google Cloud
project and create an API key. This page shows you how to grant the permission
that users need to enable your API.
Granting access
Endpoints uses the
Identity and Access Management (IAM)
Service Consumer role to allow someone who isn't a member of your
Google Cloud project to enable your API in their own Google Cloud
project. This section shows you how to grant access using the
Google Cloud console or the Google Cloud CLI.
Google Cloud console
In the Google Cloud console, go to the Endpoints > Services
page for your project.
Go to the Endpoints Services page
If you have more than one API, click the name of the API that you want to
grant access to.
If the Permissions side panel isn't open, click Show Permissions Panel .
In the Add Principal field, enter the email address of the person or
Google Group that
you want to grant access to.
In the Select a role drop-down menu, select Service Management >
Service Consumer .
Click Save .
Repeat adding members and selecting the role, as needed.
Contact the users or groups that you added and let them know they can
enable the API in their Google Cloud projects. See
Enable an API in your Google Cloud
project for information on how to enable a service in APIs & services.
gcloud
Open Cloud Shell, or if you have the Google Cloud CLI installed, open
a terminal window.
If you are granting access to an individual user:
gcloud endpoints services add - iam - policy - binding [ SERVICE-NAME ] \
--member='user: EMAIL-NAME @gmail.com' \
--role='roles/servicemanagement.serviceConsumer'
If you are granting access to a Google Group:
gcloud endpoints services add - iam - policy - binding [ SERVICE-NAME ] \
--member='group: GROUP-NAME @googlegroups.com' \
--role='roles/servicemanagement.serviceConsumer'
Contact the users or groups that you added and let them know they can enable
the API in their Google Cloud projects. See
Enable an API in your Google Cloud
project for information on how to enable a service in APIs & services.
Revoking access
You revoke access to your API by removing the Service Consumer role from a
user or group that previously had the role. After you revoke someone's access,
they won't be able to enable your API.
Note: If someone has already enabled your API, revoking access doesn't
prevent them from calling your API. Although there is no easy way to to
prevent these calls, you can add logic to your code that disallows calls
from a specific caller's API key.
This section shows you how to revoke access using the Google Cloud console or
the Google Cloud CLI.
Google Cloud console
In the Google Cloud console, go to the Endpoints > Services
page for your Google Cloud project.
Go to the Endpoints Services page
If you have more than one API, click the name of the API that you want to
revoke access to.
If the Permissions side panel isn't open, click
add Permissions .
Click the Role card that the member belongs to.
Click Delete delete .
gcloud
If you are revoking access for an individual user:
gcloud endpoints services remove - iam - policy - binding [ SERVICE-NAME ] \
--member='user: 'EMAIL-NAME @gmail.com' --role='roles/servicemanagement.serviceConsumer'
If you are revoking access for a Google Group:
gcloud endpoints services remove - iam - policy - binding [ SERVICE-NAME ] \
--member='group: GROUP-NAME @googlegroups.com' \
--role='roles/servicemanagement.serviceConsumer'
What's next
Tell users how to
enable your API in their Google Cloud project .
Learn more about
Sharing APIs protected by API keys .
Create a Cloud Endpoints Portal
for your users.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
