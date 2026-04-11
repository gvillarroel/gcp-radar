---
title: "Granting and revoking access to the API \_|\_ Cloud Endpoints with OpenAPI\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/endpoints/docs/openapi/control-api-access
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/endpoints/docs/openapi/openapi-overview
source_metadata:
  url: https://docs.cloud.google.com/endpoints/docs/openapi/control-api-access
  title: "Granting and revoking access to the API \_|\_ Cloud Endpoints with OpenAPI\
    \ \_|\_ Google Cloud Documentation"
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
Granting and revoking access to the API
Stay organized with collections
Save and categorize content based on your preferences.
OpenAPI
| gRPC
Controlling who has access to an API is an integral part of development. For
example, as you test your API, you might want to automate redeploying updated
Cloud Endpoints configurations by using a service account that has the
permission to do so. By default, only the project owner can manage access to an
API. This page shows you how to grant and revoke access to your API by using the
Google Cloud console or the Google Cloud CLI.
Endpoints uses
Identity and Access Management
roles to grant and revoke access at the API level. You can grant and revoke
access to a user, service account, or to a
Google Group .
Google Groups are a convenient way to grant or revoke access to a collection of
users. You can grant or revoke access for a whole group at once, instead of
granting or revoking access one at a time for individual users or service
accounts. You can also easily add members to and remove members from a
Google Group instead of granting or revoking the IAM role for
each member.
Granting access
Google Cloud console
In the Google Cloud console, go to the Endpoints > Services page
for your project.
Go to the Endpoints Services page
If you have more than one API, click the name of the API.
If the Permissions side panel isn't open, click add Permissions .
In the Add members box, enter the email address of a user, service
account, or Google Group .
In the Select a role drop-down, click Service Management , and
select one of the following roles:
Service Consumer: This role contains the
permissions for a non-project member to view and enable the API in their
own project. If you have created a
portal for your
API, this role lets your API users access the portal.
Service Controller: This role contains the
permissions to make calls to the check and
report methods in the
Service Infrastructure
API during runtime.
Service Config Editor: This role contains the minimum permissions
that Service Management requires to deploy an Endpoints
configuration to an existing service.
Service Management Administrator: This role contains the
permissions in the Service Config Editor, Service Consumer, and Service
Controller roles, plus the permissions required to grant access to
this API by using gcloud or the programmatic methods
described in
Granting, changing, and revoking access to resources .
See the Service Management API access control
topic for information about this role. Although the Google Cloud console allows you to select other roles,
those roles aren't useful for managing your API.
To add the member to the specified IAM role, click Add .
Repeat adding members and selecting the role, as needed.
The Service Management roles don't allow users to access the Endpoints >
Services page in the Google Cloud console. If you want users to be
able access the Endpoints > Services page, you must grant them the
Project Viewer role or a higher role on the project. See
Granting, changing,
and revoking access to resources for details.
gcloud
Open Cloud Shell, or if you have the Google Cloud CLI installed, open a
terminal window.
Enter the applicable gcloud command:
If you are granting access to a user, run the following:
gcloud endpoints services add - iam - policy - binding [ SERVICE-NAME ] \
--member='user:[EMAIL-ADDRESS]' \
--role='[ROLE]'
For the role, specify one of the following IAM roles:
roles/servicemanagement.configEditor : This role contains
the minimum permissions that Service Management requires to
deploy an Endpoints configuration to an existing
service.
roles/servicemanagement.admin : This role contains the
permissions in roles/servicemanagement.configEditor ,
roles/servicemanagement.serviceConsumer , and
roles/servicemanagement.serviceController , plus the
permissions required to grant access to this API by using
gcloud or the programmatic methods described in
Granting,
changing, and revoking access to resources .
For example:
gcloud endpoints services add - iam - policy - binding example - service - name \
--member='user:example-user@gmail.com' \
--role='roles/servicemanagement.admin'
If you are granting access to a service account, run the following:
gcloud endpoints services add - iam - policy - binding [ SERVICE-NAME ] \
--member='serviceAccount:[EMAIL-ADDRESS]' \
--role='[ROLE]'
For example:
gcloud endpoints services add - iam - policy - binding example - service - name \
--member='serviceAccount:example-service-account@example-project.iam.gserviceaccount.com' \
--role='roles/servicemanagement.configEditor'
If you are granting access to a Google Group, run the following:
gcloud endpoints services add - iam - policy - binding [ SERVICE-NAME ] \
--member='group:[GROUP-NAME]@googlegroups.com' \
--role='[ROLE]'
For example:
gcloud endpoints services add - iam - policy - binding example - service - name \
--member='group:example-group@googlegroups.com' \
--role='roles/servicemanagement.configEditor'
The Service Management roles don't allow users to access the
Endpoints > Services page in the Google Cloud console. If you
want users to be able access the Endpoints > Services page, you
must grant them the
Project Viewer role or a higher role on the project. See
Granting, changing,
and revoking access to resources for details.
Revoking access
To revoke access to your API, remove the IAM role from the member
who previously had the role.
Google Cloud console
In the Google Cloud console, go to the Endpoints > Services page
for your project.
Go to the Endpoints Services page
If you have more than one API, click the name of the API.
If the Permissions side panel isn't open, click add Permissions .
Locate the member for whom you want to revoke access. You can either click
the applicable Role card to see a list of members, or you can enter
a name or role in the Search members box.
Click Delete delete .
If you also want to revoke a user's access to your Google Cloud
project, see Granting,
changing, and revoking access to resources for details.
gcloud
Open Cloud Shell, or, if you have the gcloud CLI installed,
open a terminal window.
Enter the applicable gcloud command:
If you are revoking access for a user, run the following:
gcloud endpoints services remove-iam-policy-binding [SERVICE-NAME] \
--member='user:[EMAIL-ADDRESS]' \
--role='[ROLE-NAME]'
For example:
gcloud endpoints services remove - iam - policy - binding example - service - name \
--member='user:example-user@gmail.com' \
--role='roles/editor'
If you are revoking access for a service account, run the following:
gcloud endpoints services remove-iam-policy-binding [SERVICE-NAME] \
--member='serviceAccount:[EMAIL-ADDRESS]' \
--role='[ROLE-NAME]'
For example:
gcloud endpoints services remove - iam - policy - binding example - service - name \
--member='serviceAccount:example-service-account@example-project.iam.gserviceaccount.com' \
--role='roles/servicemanagement.configEditor'
If you are revoking access for a Google Group, run the following:
gcloud endpoints services remove - iam - policy - binding [ SERVICE-NAME ] \
--member='group:[GROUP-NAME]@googlegroups.com' \
--role='[ROLE-NAME]'
For example:
gcloud endpoints services remove - iam - policy - binding example - service - name \
--member='group:example-group@googlegroups.com' \
--role='roles/viewer'
If you also want to revoke a user's access to your Google Cloud
project, see Granting,
changing, and revoking access to resources for details.
What's next
Learn about:
Creating a service account
gcloud commands
referenced on this page.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
