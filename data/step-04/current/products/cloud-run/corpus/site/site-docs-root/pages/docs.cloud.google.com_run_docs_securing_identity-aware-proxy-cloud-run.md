---
title: "Configure IAP for Cloud Run \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/run/docs
source_metadata:
  url: https://docs.cloud.google.com/run/docs/securing/identity-aware-proxy-cloud-run
  title: "Configure IAP for Cloud Run \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Cloud Run
Guides
Send feedback
Configure IAP for Cloud Run
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to enable IAP directly on a Cloud Run
service and secure traffic bound for a Cloud Run service by
routing to IAP for authentication. By enabling IAP
on Cloud Run directly, you can secure traffic with a single click
from all ingress paths, including default run.app
URLs and load balancers.
When you integrate IAP with Cloud Run, you can
Manage user or group access in the following ways:
Inside the organization - configure access to users who are within the
same organization as your Cloud Run service
Outside the organization - configure access to users who are from
organizations different than your Cloud Run service
No organization - configure access in projects that are not part of any
Google organization
Known limitations
You cannot configure IAP on both the load balancer and the
Cloud Run service.
Cloud Run enforces IAP policies before
performing IAM checks on the IAP service
account. Because IAP intercepts requests and replaces the
original caller's identity, services like Pub/Sub that rely on their
own authentication might fail.
Before you begin
Enable the IAP API:
Enable the IAP API
Required roles
To get the permissions that
you need to enable IAP,
ask your administrator to grant you the
following IAM roles:
Cloud Run Admin ( roles/run.admin )
on the project
Grant access to the IAP-enabled service:
IAP Policy Admin ( roles/iap.admin )
on the project
Create an IAP-enabled service or update an existing service to enable IAP:
Artifact Registry Reader ( roles/artifactregistry.reader )
on the deployed container images
Service Account User ( roles/iam.serviceAccountUser )
on the service identity
Grant access to users not part of a Google organization:
IAP Settings Admin ( roles/iap.settingsAdmin )
on the project
Grant access to users from outside an organization or not part of an organization:
OAuth Config Editor ( roles/oauthconfig.editor )
on the project
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Enable IAP from Cloud Run
We recommend that you enable IAP on Cloud Run
directly.
Enable IAP from Cloud Run by using
the Google Cloud console, Google Cloud CLI, or Terraform.
Console
When you enable IAP for Cloud Run, IAP
requires permissions to invoke your Cloud Run service. If
you're enabling IAP using the Google Cloud console, this
permission is granted automatically by assigning the Cloud Run Invoker role
( roles/run.invoker ) to the IAP service agent.
To enable IAP from Cloud Run:
In the Google Cloud console, go to the Cloud Run Services
page:
Go to Cloud Run
If you're configuring a new service, click Deploy container , fill
out the initial service settings page as needed, and then select
Require authentication . Select Identity-Aware Proxy (IAP) .
If you're modifying an existing service, click the
service, click the Security tab, and then select
Require authentication . Select IAP .
Optional. To grant access to users, follow the instructions to Manage user or group access
for IAP. If you encounter issues when configuring access
for users outside of your organization, see the Troubleshooting
section.
To save the configuration, click Save .
To create or deploy the service, click Create or Deploy .
gcloud
To enable IAP directly from Cloud Run, add the --iap
flag when deploying your app and grant invoker permission to the IAP service
agent:
Deploy your Cloud Run service using one of the following
commands:
For a new service:
gcloud run deploy SERVICE_NAME \
--region = REGION \
--image = IMAGE_URL \
--no-allow-unauthenticated \
--iap
If you enable IAP for the first time in a project without
an organization, you might see the following warning:
Deploying services with IAP enabled in a project without an organization
may require initial setup via the Cloud Console. Please use the Cloud Run
UI to enable IAP for the first time in the project.
This warning appears because you cannot create OAuth clients
programmatically. We recommend that you first enable IAP on
Cloud Run directly from the Google Cloud console, or
Configure a custom OAuth client ,
and then add users by using the gcloud CLI.
For an existing service:
gcloud run services update SERVICE_NAME \
--region = REGION \
--iap
Replace the following:
SERVICE_NAME : the name of your Cloud Run
service.
REGION : the name of your Cloud Run region.
For example, europe-west1 .
IMAGE_URL : a reference to the container image, for
example, us-docker.pkg.dev/cloudrun/container/hello:latest . If you use Artifact Registry,
the repository REPO_NAME must
already be created. The URL follows the format of LOCATION -docker.pkg.dev/ PROJECT_ID / REPO_NAME / PATH : TAG
.
PROJECT_NUMBER : Your Google Cloud project number.
Grant invoker permission to the IAP service agent:
gcloud run services add-iam-policy-binding SERVICE_NAME \
--region = REGION \
--member = serviceAccount:service- PROJECT_NUMBER @gcp-sa-iap.iam.gserviceaccount.com \
--role = roles/run.invoker
Replace the following:
SERVICE_NAME : the name of your Cloud Run
service.
REGION : the name of your Cloud Run region.
For example, europe-west1 .
PROJECT_NUMBER : Your Google Cloud project number.
Optional. To grant user access, see Manage user or group access
for IAP.
To verify that your service is configured with IAP
enabled, run the following command:
gcloud run services describe SERVICE_NAME
The output should contain the following string:
Iap Enabled: true
IAP is now routing all traffic bound for the configured
Cloud Run service to IAP for authentication
before passing to the container.
Terraform
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
Note: If you are enabling IAP for the first time in a project
without an organization using Terraform, you cannot create OAuth clients
programmatically. We recommend that you first enable IAP on
Cloud Run directly from the Google Cloud console, or
Configure a custom OAuth client , and then add users by
using Terraform.
To enable IAP using Terraform, you must update your service
definition and add an IAM policy binding to grant invoker
permission to IAP.
Add iap_enabled = true to a google_cloud_run_v2_service
resource in your Terraform configuration to enable IAP on the service:
resource "google_cloud_run_v2_service" "default" {
name = "cloudrun-iap-service"
location = "europe-west1"
ingress = "INGRESS_TRAFFIC_ALL"
iap_enabled = true
template {
containers {
image = "us-docker.pkg.dev/cloudrun/container/hello"
}
}
}
Add the following to grant the roles/run.invoker role to the
IAP service agent.
resource "google_cloud_run_v2_service_iam_member" "iap_invoker" {
project = google_cloud_run_v2_service.default.project
location = google_cloud_run_v2_service.default.location
name = google_cloud_run_v2_service.default.name
role = "roles/run.invoker"
member = "serviceAccount:service-PROJECT_NUMBER@gcp-sa-iap.iam.gserviceaccount.com"
}
Replace PROJECT_NUMBER with your project number.
Optional. To retrieve the current IAM policy data, add the following
to a google_cloud_run_v2_service_iam_policy
resource in your Terraform configuration.
data "google_cloud_run_v2_service_iam_policy" "policy" {
project = google_cloud_run_v2_service.default.project
location = google_cloud_run_v2_service.default.location
name = google_cloud_run_v2_service.default.name
}
Manage user or group access
By default, IAP for Cloud Run uses a
Google-managed OAuth client that lets you add in-organization identities with an
email address associated with a user. You can also manage principals from
outside your organization or without an organization, using the Google Cloud console
in IAP by creating a custom OAuth client as described in the
following steps.
Add or remove IAP access to a Cloud Run
service by using the Google Cloud console, gcloud CLI, or
Terraform.
Inside org
Console
To add or remove access:
In the Google Cloud console, go to the Cloud Run page:
Go to Cloud Run
Click the existing service you want to modify, and then click
Security .
Under IAP , click Edit policy .
To add access, enter the principal, and optionally, the access level
you want to add, or leave the access level blank.
To remove access when there is only one principal in the policy,
click the Delete policy icon next to Access levels .
To remove individual principals from a policy, click the X icon
next to the principal's name that you want to remove.
To save the user configuration, click Save .
gcloud
To add or remove access to a Cloud Run service for
individual users or groups, run one of the following commands:
To add access:
gcloud iap web add-iam-policy-binding \
--member = user: USER_EMAIL \
--role = roles/iap.httpsResourceAccessor \
--region = REGION \
--resource-type = cloud-run \
--service = SERVICE_NAME
To remove access:
gcloud iap web remove-iam-policy-binding \
--member = user: USER_EMAIL \
--role = roles/iap.httpsResourceAccessor \
--region = REGION \
--resource-type = cloud-run \
--service = SERVICE_NAME
To view access:
gcloud iap web get-iam-policy \
--region = REGION \
--resource-type = cloud-run \
--service = SERVICE_NAME
Replace the following:
USER_EMAIL : the user's email address.
REGION : the name of your Cloud Run
region.
SERVICE_NAME : the name of your Cloud Run
service.
Terraform
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
To grant authoritative access to a list of principals:
Use the google_iap_web_cloud_run_service_iam_binding resource to
grant a role to an authoritative list of principals. This resource
ensures that only members in the list are granted the role. Any other
principals granted the role are removed.
Add the following to a google_iap_web_cloud_run_service_iam_binding
resource in your Terraform configuration.
resource "google_iap_web_cloud_run_service_iam_binding" "binding" {
project = " PROJECT_ID "
location = " REGION "
cloud_run_service_name = " SERVICE_NAME "
role = "roles/iap.httpsResourceAccessor"
members = [
" PRINCIPAL_A ", " PRINCIPAL_B "
]
}
Replace the following:
PROJECT_ID : the name of the project.
REGION : the Google Cloud region—for example,
europe-west1 .
SERVICE_NAME : the name of your Cloud Run
service.
PRINCIPAL : An identifier for the principals,
or members, which usually has the following form:
PRINCIPAL_TYPE : ID . For example,
user:my-user@example.com . For a full list of the values that
PRINCIPAL can have, see the
Policy Binding reference .
To grant access for a single principal:
Use the google_iap_web_cloud_run_service_iam_member resource to grant
a role to a single principal without affecting other principals that
might have the same role.
Add the following to a google_iap_web_cloud_run_service_iam_member
resource in your Terraform configuration.
resource "google_iap_web_cloud_run_service_iam_member" "member" {
project = " PROJECT_ID "
location = " REGION "
cloud_run_service_name = " SERVICE_NAME "
role = "roles/iap.httpsResourceAccessor"
member = " PRINCIPAL "
}
Replace the following:
PROJECT_ID : the name of the project.
REGION : the Google Cloud region—for example,
europe-west1 .
SERVICE_NAME : the name of your Cloud Run
service.
PRINCIPAL : An identifier for the principals,
or members, which usually has the following form:
PRINCIPAL_TYPE : ID . For example,
user:my-user@example.com . For a full list of the values that
PRINCIPAL can have, see the
Policy Binding reference .
Outside org
Console
To add users from outside your organization using IAP,
complete the following one-time setup process:
In the Google Cloud console, go to the Cloud Run page:
Go to Cloud Run
Click the existing service that you want to modify, and then click
Security .
In your Cloud Run service's security details page, under
IAP , click Edit policy .
Click Configure in IAP . This opens the resource
settings page in IAP.
Click Configure consent screen to configure your OAuth consent
screen. For the audience type, select External .
For fastest setup, click Auto generate credentials .
Alternatively, follow the instructions to Create an OAuth client ID .
Select Custom OAuth and enter your custom client ID and secret.
To save the configuration, click Save .
You can now return to your Cloud Run service in Cloud Run
to add out-of-org principals.
To add or remove user access, complete the following steps:
In the Google Cloud console, go to the Cloud Run page:
Go to Cloud Run
Click the existing service you want to modify, and then click
Security .
Under IAP , click Edit policy .
To add access, enter the principal, and optionally, the access
level you want to add, or leave the access level blank.
To remove access when there is only one principal in the policy,
click the Delete policy icon next to Access levels .
To remove individual principals from a policy, click the X icon
next to the principal's name that you want to remove.
To save the user configuration, click Save .
gcloud
Before you begin
To add user principals from outside of an organization, you must first
configure the OAuth client} .
To add or remove access to a Cloud Run service for
individual users or groups, run one of the following commands:
To add access:
gcloud iap web add-iam-policy-binding \
--member = user: USER_EMAIL \
--role = roles/iap.httpsResourceAccessor \
--region = REGION \
--resource-type = cloud-run \
--service = SERVICE_NAME
To remove access:
gcloud iap web remove-iam-policy-binding \
--member = user: USER_EMAIL \
--role = roles/iap.httpsResourceAccessor \
--region = REGION \
--resource-type = cloud-run \
--service = SERVICE_NAME
To view access:
gcloud iap web get-iam-policy \
--region = REGION \
--resource-type = cloud-run \
--service = SERVICE_NAME
Replace the following:
USER_EMAIL : the user's email address.
REGION : the name of your Cloud Run region.
SERVICE_NAME : the name of your Cloud Run
service.
Terraform
Before you begin
To add user principals from outside of an organization, you must first
configure the OAuth client .
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
To grant authoritative access to a list of principals:
Use the google_iap_web_cloud_run_service_iam_binding resource to grant
a role to an authoritative list of principals. This resource ensures that
only members in the list are granted the role. Any other principals
granted the role are removed.
Add the following to a google_iap_web_cloud_run_service_iam_binding
resource in your Terraform configuration.
resource "google_iap_web_cloud_run_service_iam_binding" "binding" {
project = " PROJECT_ID "
location = " REGION "
cloud_run_service_name = " SERVICE_NAME "
role = "roles/iap.httpsResourceAccessor"
members = [
" PRINCIPAL_A ", " PRINCIPAL_B "
]
}
Replace the following:
PROJECT_ID : the name of the project.
REGION : the Google Cloud region—for example,
europe-west1 .
SERVICE_NAME : the name of your Cloud Run
service.
PRINCIPAL : An identifier for the principals,
or members, which usually has the following form:
PRINCIPAL_TYPE : ID . For example,
user:my-user@example.com . For a full list of the values that
PRINCIPAL can have, see the
Policy Binding reference .
To grant access for a single principal:
Use the google_iap_web_cloud_run_service_iam_member resource to grant
a role to a single principal without affecting other principals that
might have the same role.
Add the following to a google_iap_web_cloud_run_service_iam_member
resource in your Terraform configuration.
resource "google_iap_web_cloud_run_service_iam_member" "member" {
project = " PROJECT_ID "
location = " REGION "
cloud_run_service_name = " SERVICE_NAME "
role = "roles/iap.httpsResourceAccessor"
member = " PRINCIPAL "
}
Replace the following:
PROJECT_ID : the name of the project.
REGION : the Google Cloud region—for example,
europe-west1 .
SERVICE_NAME : the name of your Cloud Run
service.
PRINCIPAL : An identifier for the principals,
or members, which usually has the following form:
PRINCIPAL_TYPE : ID . For example,
user:my-user@example.com . For a full list of the values that
PRINCIPAL can have, see the
Policy Binding reference .
No org
Console
To add or remove access:
In the Google Cloud console, go to the Cloud Run page:
Go to Cloud Run
Click the existing service you want to modify, and then click
Security .
Under IAP , click Edit policy .
To add access, enter the principal, and optionally, the access level you
want to add, or leave the access level blank.
To remove access when there is only one principal in the policy,
click the Delete policy icon next to Access levels .
To remove individual principals from a policy, click the X icon
next to the principal's name that you want to remove.
To save the user configuration, click Save .
gcloud
Before you begin
To add users to a project that's without an organization, you must
first follow the one-time setup to Configure a custom OAuth client .
To add or remove access to a Cloud Run service for individual
users or groups, run one of the following commands:
To add access:
gcloud iap web add-iam-policy-binding \
--member = user: USER_EMAIL \
--role = roles/iap.httpsResourceAccessor \
--region = REGION \
--resource-type = cloud-run \
--service = SERVICE_NAME
To remove access:
gcloud iap web remove-iam-policy-binding \
--member = user: USER_EMAIL \
--role = roles/iap.httpsResourceAccessor \
--region = REGION \
--resource-type = cloud-run \
--service = SERVICE_NAME
To view access:
gcloud iap web get-iam-policy \
--region = REGION \
--resource-type = cloud-run \
--service = SERVICE_NAME
Replace the following:
USER_EMAIL : the user's email address.
REGION : the name of your Cloud Run region.
SERVICE_NAME : the name of your Cloud Run
service.
Terraform
Before you begin
To add user principals from outside of an organization, you must first
configure the OAuth client .
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
To grant authoritative access to a list of principals:
Use the google_iap_web_cloud_run_service_iam_binding resource to grant
a role to an authoritative list of principals. This resource ensures that
only members in the list are granted the role. Any other principals
granted the role are removed.
Add the following to a google_iap_web_cloud_run_service_iam_binding
resource in your Terraform configuration.
resource "google_iap_web_cloud_run_service_iam_binding" "binding" {
project = " PROJECT_ID "
location = " REGION "
cloud_run_service_name = " SERVICE_NAME "
role = "roles/iap.httpsResourceAccessor"
members = [
" PRINCIPAL_A ", " PRINCIPAL_B "
]
}
Replace the following:
PROJECT_ID : the name of the project.
REGION : the Google Cloud region—for example,
europe-west1 .
SERVICE_NAME : the name of your Cloud Run
service.
PRINCIPAL : An identifier for the principals,
or members, which usually has the following form:
PRINCIPAL_TYPE : ID . For example,
user:my-user@example.com . For a full list of the values that
PRINCIPAL can have, see the
Policy Binding reference .
To grant access for a single principal:
Use the google_iap_web_cloud_run_service_iam_member resource to grant
a role to a single principal without affecting other principals that
might have the same role.
Add the following to a google_iap_web_cloud_run_service_iam_member
resource in your Terraform configuration.
resource "google_iap_web_cloud_run_service_iam_member" "member" {
project = " PROJECT_ID "
location = " REGION "
cloud_run_service_name = " SERVICE_NAME "
role = "roles/iap.httpsResourceAccessor"
member = " PRINCIPAL "
}
Replace the following:
PROJECT_ID : the name of the project.
REGION : the Google Cloud region—for example,
europe-west1 .
SERVICE_NAME : the name of your Cloud Run
service.
PRINCIPAL : An identifier for the principals,
or members, which usually has the following form:
PRINCIPAL_TYPE : ID . For example,
user:my-user@example.com . For a full list of the values that
PRINCIPAL can have, see the
Policy Binding reference .
Disable IAP from Cloud Run
You can disable IAP by using the Google Cloud console or gcloud CLI.
Console
To disable IAP from Cloud Run, do the following:
In the Google Cloud console, go to the Cloud Run page:
Go to Cloud Run
Click the existing service you want to modify.
Click Security and deselect IAP . Your service is
protected by your IAM policy. However, if you're not using
IAM, make your service publicly accessible by selecting
Allow Public access .
To save the configuration, click Save .
gcloud
To disable IAP directly from Cloud Run, add the
--no-iap flag when deploying your app as follows:
Deploy your Cloud Run service using either of the
following commands:
For a new service:
gcloud run deploy SERVICE_NAME \
--region = REGION \
--image = IMAGE_URL \
--no-iap
For an existing service:
gcloud run services update SERVICE_NAME \
--region = REGION \
--no-iap
Replace the following:
SERVICE_NAME : the name of your Cloud Run
service.
REGION : the name of your Cloud Run region.
IMAGE_URL : a reference to the container image, for
example, us-docker.pkg.dev/cloudrun/container/hello:latest . If you use Artifact Registry,
the repository REPO_NAME must
already be created. The URL follows the format of LOCATION -docker.pkg.dev/ PROJECT_ID / REPO_NAME / PATH : TAG
.
To verify that your service is no longer configured with IAP
enabled, run the following command:
gcloud run services describe SERVICE_NAME
The output should no longer contain the following string:
Iap Enabled: true
IAP is no longer routing all traffic bound for the configured Cloud Run
service to IAP for authentication before passing to the
container.
Configure a custom OAuth client
We recommend that you use the Google Cloud console when enabling IAP
for the first time. Doing so lets you auto-generate credentials to avoid having
to manually create a custom OAuth client. When you enable IAP on
Cloud Run directly from the Google Cloud console,
IAP automatically sets up the custom OAuth client for you at the
project level.
If you're using the gcloud CLI to manage access for users without an
organization, enable IAP on Cloud Run directly
from the Google Cloud console or follow the steps in this section to manually
create a custom OAuth client.
For advanced scenarios, such as customizing the consent screen or managing
OAuth clients at the organization level, use the following steps.
Configure the brand
In the Google Cloud console, go to the OAuth Branding page:
Go to Branding
Click Get started .
Fill out the App Information form and click Next .
Under Audience , select External .
Fill out the rest of the form and click Create .
Manually create a custom OAuth client
If this is your first time setting up Google Auth Platform:
In the Google Cloud console, go to the Clients page:
Go to Clients
Click Get started on the Google Auth Platform overview page if prompted.
Fill out the App information details and click Next .
Select External for the audience type.
Fill in the contact information, accept the terms, and then click
Create .
Click Create client .
In Application type , select Web application and fill out the
name of your OAuth client.
In the Authorized redirect URIs field, add the following URI:
https://iap.googleapis.com/v1/oauth/clientIds/ CLIENT_ID :handleRedirect
Replace CLIENT_ID with the OAuth client ID.
Click Create .
Make note of the client ID and secret and click OK .
If you've already set up Google Auth Platform:
In the Google Cloud console, go to the Clients page:
Go to Clients
Click Create client .
In Application type , select Web application and fill out the
name of your OAuth client.
Fill out the App information details.
In the Authorized redirect URIs field, add the following URI:
https://iap.googleapis.com/v1/oauth/clientIds/ CLIENT_ID :handleRedirect
Replace CLIENT_ID with the OAuth client ID.
Click Create .
Make note of the client ID and secret and click OK .
Apply the OAuth client to IAP
You can apply the OAuth client at the project or organization level.
At the project level, perform the following steps:
Create a file called iap_settings.yaml and add the following contents:
access_settings:
oauth_settings:
client_id: CLIENT_ID
client_secret: CLIENT_SECRET
Run the gcloud iap settings set command to apply the OAuth client at
the project level:
gcloud iap settings set iap_settings.yaml --project = PROJECT_ID
Replace the following:
CLIENT_ID : the OAuth client ID you saved in the previous step.
CLIENT_SECRET : the secret you saved in the previous step.
PROJECT_ID : the ID of your project.
At the organization level, perform the following steps:
To apply the OAuth client at the organization level, run the
gcloud iap settings set command:
gcloud iap settings set iap_settings.yaml --organization = ORGANIZATION_NUMBER
Replace the following:
CLIENT_ID : the OAuth client ID you saved in the
previous step.
CLIENT_SECRET : the secret you saved in the
previous step.
ORGANIZATION_NUMBER : the number of your
organization.
Troubleshooting
The following section describes how to troubleshoot IAP with
Cloud Run.
Out-of-org access errors
The following are errors you might encounter when configuring
access for users outside of your organization.
Out-of-org user access: Disabled
To ensure that out-of-org access is disabled, we recommend that you disable it
at the project level. Controls at other levels (service, folder, or org) might
appear disabled, even if access is available.
Brand is currently set to internal
Out-of-org access isn't supported when your custom OAuth client brand is set to
internal.
To update the brand setting to external for enabling access for out-of-org
principals with IAP, complete the following steps:
In the Google Cloud console, go to the Google Auth Platform Audience
page:
Go to Audience
Under User type , click Make external .
Service Agent failure causes set IAM error
Enabling IAP on a new project for the first time can cause the
following error:
Setting IAM permissions failed
This is because the Cloud Run Service Agent failed. To resolve the
issue, either enable IAP
again or set the IAM policy manually .
What's next
For instructions on how to enable IAP from a backend service or
load balancer, see Enabling IAP for Cloud Run .
For issues with enabling IAP for Cloud Run, see
Troubleshooting errors .
Managing access to IAP-secured resources .
Using organization policies to control IAP enablement .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
