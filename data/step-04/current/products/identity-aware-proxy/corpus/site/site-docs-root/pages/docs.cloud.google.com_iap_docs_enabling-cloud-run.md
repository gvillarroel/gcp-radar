---
title: "Enable IAP for Cloud Run \_|\_ Identity-Aware Proxy \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iap/docs/enabling-cloud-run
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/iap/docs
source_metadata:
  url: https://docs.cloud.google.com/iap/docs/enabling-cloud-run
  title: "Enable IAP for Cloud Run \_|\_ Identity-Aware Proxy \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Identity-Aware Proxy
Guides
Send feedback
Enable IAP for Cloud Run
Stay organized with collections
Save and categorize content based on your preferences.
There are two ways to enable Identity-Aware Proxy for your Cloud Run
services.
Recommended: directly on a Cloud Run service :
Protects the run.app endpoint directly so that you don't have to provision
load balancer resources.
Provides a simpler setup and avoids additional load balancer costs.
If you opt to place a load balancer in front of Cloud Run, the
load balancer's endpoint is also protected.
On the backend service fronting the Cloud Run services : if
you're running Cloud Run in multiple regions
attached to the same load balancer global backend service and you require
central access management, follow the instructions on this page. Otherwise,
we recommend that you enable IAP directly on the
Cloud Run service .
Known limitations
IAP can't be used on both Cloud Run services and
the load balancer. If you enable IAP on a load balancer, IAP
secures traffic only through the load balancer and not with traffic that might
reach the Cloud Run service through its run.app URL. To only
allow IAP-authorized traffic, see
Configuring Cloud Run to limit access .
IAP authenticates to Cloud Run using the
X-Serverless-Authorization header.
Cloud Run passes this header to your service after stripping its signature .
If your service is designed to forward the request to another Cloud Run
service that requires IAM authentication, update your service to remove this header first.
IAP is incompatible with Cloud CDN.
IAP increases latency. Enable IAP only for
instances that are not latency-sensitive.
Before you begin
We recommend that you enable IAP directly on Cloud Run .
If you choose to enable IAP for Cloud Run
resources on the load balancer rather than directly on Cloud Run,
you must have the following:
A Google Cloud console project with billing enabled.
A group of one or more Cloud Run services, served by a load balancer.
Learn about Setting up an external HTTPS load balancer .
Learn about Setting up an internal HTTPS load balancer .
A domain name registered to the address of your load balancer.
Application code to verify that all requests have an identity.
Learn about Getting the user's identity .
Enabling IAP from a backend service or load balancer
Note: We recommend that you enable IAP directly on Cloud Run,
as described in the Cloud Run documentation .
If you must enable IAP from IAP behind a backend
service or load balancer, use the following instructions.
Console
If you haven't configured your project's OAuth consent screen, you'll be
prompted to do so. To configure your OAuth consent screen, see Setting up your OAuth consent screen .
Setting up IAP access
Go to the Identity-Aware Proxy page .
Select the project you want to secure with IAP.
Under APPLICATIONS , select the checkbox next to the load balancer backend service to which you want to add members.
On the right side panel, click Add Principal .
In the Add Principal dialog, enter the accounts of groups or individuals who should have the IAP-secured Web App User role for the project. The following kinds of accounts can be members:
Google Account : user@gmail.com - This can also be a Google Workspace account, such as user@google.com or some other Workspace domain.
Google Group : admins@googlegroups.com
Service account : server@example.iam.gserviceaccount.com
Google Workspace domain : example.com
Select Cloud IAP > IAP-secured Web App User from the Roles drop-down list.
Click Save .
Enabling access to users outside your organization
By default, when you enable IAP, it uses a Google-managed
OAuth client to authenticate users. As a result, only users within the
organization can access the IAP-enabled application.
To enable access to users outside your organization, or without an
organization, update the OAuth client configuration to use a custom OAuth
client as described in Enable IAP for external applications .
Turning on IAP
On the IAP page , under APPLICATIONS , find the load balancer backend service to which you want to restrict access. To turn on IAP for a resource, click the IAP toggle.
To enable IAP:
At least one protocol in the load balancer frontend configuration must be HTTPS. Learn about setting up a load balancer .
You need the compute.backendServices.update , clientauthconfig.clients.create , and clientauthconfig.clients.getWithSecret permissions. These permissions are granted by roles, such as the Project Editor role. To learn more, see Managing access to IAP-secured resources .
In the Turn on IAP window that appears, click Turn On to confirm that you want IAP to secure your resource. After you turn on IAP, it requires login credentials for all connections to your load balancer. Only accounts with the IAP-Secured Web App User role on the project will be given access.
Follow the instructions at Access control with IAM to authorize IAP to send traffic to the backend Cloud Run service.
Principal : service-[PROJECT-NUMBER]@gcp-sa-iap.iam.gserviceaccount.com
Role : Cloud Run Invoker
The IAP service account is created when IAP
is enabled. If the IAP service account is not in the list
of principals, you can create it by running the following
gcloud command:
gcloud beta services identity create
--service=iap.googleapis.com
--project= PROJECT_ID
gcloud
If you have not previously done so in the project, create the IAP service agent by running the following command. If you previously created the service agent, running the command does not duplicate it.
gcloud beta services identity create --service=iap.googleapis.com --project=[PROJECT_ID]
Grant the invoker permission to the service account, created in the previous step, by running the following command.
gcloud run services add-iam-policy-binding [SERVICE-NAME] \
--member='serviceAccount:service-[PROJECT-NUMBER]@gcp-sa-iap.iam.gserviceaccount.com' \
--role='roles/run.invoker'
Enable IAP by running either the globally or regionally scoped command, depending on whether your load balancer backend service is global or regional. Use the OAuth client ID and secret from the previous step.
Global scope
gcloud compute backend-services update BACKEND_SERVICE_NAME --global --iap=enabled
Regional scope
gcloud compute backend-services update BACKEND_SERVICE_NAME --region REGION_NAME --iap=enabled
Replace the following:
BACKEND_SERVICE_NAME : the name of the backend service.
REGION_NAME : the region in which you want to enable IAP.
After you enable IAP, you can use the Google Cloud CLI to manipulate an IAP access policy using the Identity and Access Management role roles/iap.httpsResourceAccessor . See Managing access to IAP-secured resources for more information.
Terraform
If you have not previously done so, in a project, create the IAP service agent by running the following command. If you previously created the service agent, running the command does not duplicate it.
resource "google_project_service" "project" {
project = "your-project-id"
service = "iap.googleapis.com"
}
Add the following to grant the roles/run.invoker role to the
IAP service agent.
resource "google_cloud_run_v2_service_iam_member" "iap_invoker" {
project = google_cloud_run_v2_service.default.project
location = google_cloud_run_v2_service.default.location
name = google_cloud_run_v2_service.default.name
role = "roles/run.invoker"
member = "serviceAccount:service-" PROJECT_NUMBER @gcp-sa-iap.iam.gserviceaccount.com"
}
Replace PROJECT_NUMBER with your project number.
Enable IAP by running either the global or the regional command depending on your load balancer. Use the OAuth client ID and secret from the previous step.
Global scope
resource "google_compute_backend_service" "default" {
name = "tf-test-backend-service-external"
protocol = "HTTPS"
load_balancing_scheme = "EXTERNAL_MANAGED"
iap {
enabled = true
oauth2_client_id = "abc"
oauth2_client_secret = "xyz"
}
}
Regional scope
resource "google_compute_region_backend_service" "default" {
name = "tf-test-backend-service-external"
protocol = "HTTPS"
load_balancing_scheme = "EXTERNAL_MANAGED"
iap {
enabled = true
oauth2_client_id = "abc"
oauth2_client_secret = "xyz"
}
}
Configuring Cloud Run to limit access
To prevent traffic from routing through a Cloud Run service's
default run.app URL, Disable the default URL .
Otherwise, configure your ingress settings to Restrict network ingress for Cloud Run .
Troubleshooting errors
Permission denied accessing Cloud Run
Your client does not have permission to get URL from this server
IAP uses the IAP service account permissions to
invoke your Cloud Run service. Be sure that you have granted the Cloud
Run Invoker role to the following service account: service-[PROJECT-NUMBER]@gcp-sa-iap.iam.gserviceaccount.com .
If you have granted the Cloud Run Invoker role to the preceding
service account and you are still facing this issue, redeploy your
Cloud Run service.
Service Agent failure causes set IAM error
Enabling IAP on a new project for the first time can cause the
following error:
Setting IAM permissions failed
This because the Cloud Run Service Agent failed. To resolve the
issue, either enable IAP
again or set the IAM policy manually .
Can't set up IAP through the gcloud CLI
The IAP service account is not provisioned
If you are seeing this error, run the following command:
gcloud beta services identity create --service=iap.googleapis.com --project=[PROJECT_ID]
IAP service account doesn't need run.routes.invoke permission
During the IAP with Cloud Run Preview,
Cloud Run didn't perform the run.routes.invoke permission check
for calls from IAP that use the Cloud Run Invoker role. With
General Availability (GA), Cloud Run performs this permission
check.
To avoid breaking changes, some customer projects that depended on this behavior
during Preview were placed into an allowlist so that the permission wasn't
checked. Contact Cloud Run support to remove
such projects from the Preview-only allowlist.
What's next
Configure IAP for Cloud Run
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
