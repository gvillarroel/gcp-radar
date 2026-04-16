---
title: "Access control with IAM \_|\_ Cloud Run \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/run/docs/securing/managing-access
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/run/docs/securing/managing-access
source_metadata:
  url: https://docs.cloud.google.com/run/docs/securing/managing-access
  title: "Access control with IAM \_|\_ Cloud Run \_|\_ Google Cloud Documentation"
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
Access control with IAM
Stay organized with collections
Save and categorize content based on your preferences.
By default, only project owners and editors can create, update, delete, or
invoke services and jobs, and only project owners and Cloud Run Admins
can modify Identity and Access Management (IAM) policies—for example, to make a
service public. Refer to
Cloud Run IAM roles
for details.
To grant other principals or groups the ability to perform these actions, use
IAM to grant roles to different
principals .
If you've created or deployed functions using
gcloud functions commands or the
Cloud Functions v2 APIs and need to
use these options for backward compatibility, see
Access control with IAM .
Cloud Run predefined roles
Compared to basic roles (Owner, Editor, and Viewer), the following predefined
roles have finer-grained access control for accessing Cloud Run
resources:
Role
Description
Cloud Run Admin ( roles/run.admin )
Can create, update, and delete services and jobs, can get, list, delete job executions. Can invoke services and jobs, can cancel job executions. Can get and set IAM policies. Can view, apply and dismiss recommendations . Requires additional configuration in order to deploy services.
Cloud Run Developer ( roles/run.developer )
Can create, update, and delete services and jobs, can get, list, delete job executions. Can get but not set IAM policies. Can view, apply and dismiss recommendations .
Cloud Run Viewer ( roles/run.viewer )
Can view services, jobs and job executions. Can get IAM policies. Can view recommendations .
Cloud Run Invoker ( roles/run.invoker )
Can invoke services and jobs, can cancel job executions.
Control access on an individual service or job
You can control access on a per-service or per-job basis using
IAM.
Add principals
You can add principals to a job or a service.
Add principals to a service
To add principals to a service:
Console UI
Go to the Google Cloud console:
Go to Google Cloud console
Click the checkbox next to the service that you want to add principals to.
(Don't click the service itself.)
In the information pane in the top right corner click the
Permissions tab. If the information pane isn't visible, you may need
to click Show Info Panel , then click Permissions .
Click Add principal .
In the New principals field, enter one or more identities that need
access to your service.
From the Role drop-down menu, select a role or roles The roles you
select appear in the pane with a short description of the permissions they
grant.
Click Save .
gcloud
Use the gcloud run services add-iam-policy-binding command:
gcloud run services add-iam-policy-binding SERVICE_NAME \
--member = PRINCIPAL \
--role = ROLE
where SERVICE_NAME is the service name,
PRINCIPAL is the principal
(e.g. user:email@domain.com ), and ROLE is the role.
For a list of acceptable values for PRINCIPAL , see
Principal identifiers .
For a list of acceptable values for ROLE , see
Cloud Run IAM roles .
Add principals to a job
To add principals to a job:
Console UI
Go to the Google Cloud console:
Go to Google Cloud console
Click the checkbox at the left of the job you want to add principals to.
(Don't click the job itself.)
In the information pane in the top right corner click the
Permissions tab. If the information pane isn't visible, you may need
to click Show Info Panel , then click Permissions .
Click Add principal .
In the New principals field, enter one or more identities that need
access to your job.
From the Role menu, select a role or roles The roles you
select appear in the pane with a short description of the permissions they
grant.
Click Save .
gcloud
Use the gcloud run jobs add-iam-policy-binding command:
gcloud run jobs add-iam-policy-binding JOB_NAME \
--member = PRINCIPAL \
--role = ROLE
where JOB_NAME is the job name,
PRINCIPAL is the principal type
(e.g. user:email@domain.com ), and ROLE is the role.
For a list of acceptable values for PRINCIPAL , see
the IAM concepts page .
For a list of acceptable values for ROLE , see
Cloud Run IAM roles .
Remove principals from a role
You can remove principals from a service or a job.
Remove principals from a role for a service
To remove principals from a role for a service:
Console UI
Go to the Google Cloud console:
Go to Google Cloud console
Click the checkbox at the left of the service you want to remove
principals from. (Don't click the service itself.)
In the information pane in the top right corner click the
Permissions tab. If the information pane isn't visible, you may need
to click Show Info Panel , then click Permissions .
Enter the principal you want to remove in the roles list filter, which
displays all roles granted to that principal.
Click the delete trash can next to the principal within the desired
role to remove that role from the principal.
In the confirmation dialog, you have the option to remove that principal
from all roles in the service. Click Remove to remove the principal
from the role.
gcloud
Use the gcloud run services remove-iam-policy-binding command:
gcloud run services remove-iam-policy-binding SERVICE_NAME \
--member = PRINCIPAL \
--role = ROLE
where SERVICE_NAME is the service name,
PRINCIPAL is the principal type
(e.g. user:email@domain.com ), and ROLE is the role.
For a list of acceptable values for PRINCIPAL , see
the IAM concepts page .
For a list of acceptable values for ROLE , see
Cloud Run IAM roles .
Remove principals from a role for a job
To remove principals from a role for a job:
Console UI
Go to the Google Cloud console:
Go to Google Cloud console
Click the checkbox at the left of the job you want to add principals to.
(Don't click the job itself.)
In the information pane in the top right corner click the
Permissions tab. If the information pane isn't visible, you may need
to click Show Info Panel , then click Permissions .
Enter the principal you want to remove in the roles list filter, which
displays all roles granted to that principal.
Click the delete trash can next to the principal within the desired
role to remove that role from the principal.
In the confirmation dialog, you have the option to remove that principal
from all roles in the job. Click Remove to remove the principal
from the role.
gcloud
Use the gcloud run jobs remove-iam-policy-binding command:
gcloud run jobs remove-iam-policy-binding JOB_NAME \
--member = PRINCIPAL \
--role = ROLE
where JOB_NAME is the job name,
PRINCIPAL is the principal type
(e.g. user:email@domain.com ), and ROLE is the role.
For a list of acceptable values for PRINCIPAL , see
the IAM concepts page .
For a list of acceptable values for ROLE , see
Cloud Run IAM roles .
Bulk addition or removal of principals
You can do a bulk add or remove for services and for jobs.
Bulk addition and removal of principals for services
To do a bulk add or remove for a service:
Console UI
Go to the Google Cloud console:
Go to Google Cloud console
Click the checkbox at the left of the service you want to add principals
to or remove principals from. (Don't click the service itself.)
Select the service you want to add principals to or remove principals from.
In the information pane in the top right corner click the
Permissions tab. If the information pane isn't visible, you may need
to click Show Info Panel , then click Permissions .
If you want to add principals:
Click Add principal .
In the New principals field, enter one or more identities that need
access to your service.
From the Role menu, select a role (or roles) The roles you
select appear in the pane with a short description of the permissions they
grant.
Click Save .
If you want to remove principals:
Enter the principal you want to remove in the roles list filter, which
displays all roles granted to that principal.
Click the delete trash can next to the principal within the desired
role to remove that role from the principal.
In the confirmation dialog, you have the option to remove that principal
from all roles in the service. Click Remove to remove the principal
from the role.
gcloud
Create an IAM policy:
cat <<EOF > policy.json
{
"bindings" : [
{
"role" : ROLE ,
"members" : [
PRINCIPAL
]
}
]
}
EOF
Use the gcloud run services set-iam-policy command:
gcloud run services set-iam-policy SERVICE_NAME policy.json
For a list of acceptable values for PRINCIPAL , see
the IAM concepts page .
For a list of acceptable values for ROLE , see
Cloud Run IAM roles .
Bulk addition and removal of principals for jobs
To do a bulk add or remove for a job:
Console UI
Go to the Google Cloud console:
Go to Google Cloud console
Click the checkbox at the left of the job you want to add principals to.
(Don't click the job itself.)
Select the job you want to add principals to or remove principals from.
In the information pane in the top right corner click the
Permissions tab. If the information pane isn't visible, you may need
to click Show Info Panel , then click Permissions .
If you want to add principals:
Click Add principal .
In the New principals field, enter one or more identities that need
access to your service.
From the Role menu, select a role (or roles) The roles you
select appear in the pane with a short description of the permissions they
grant.
Click Save .
If you want to remove principals:
Enter the principal you want to remove in the roles list filter, which
displays all roles granted to that principal.
Click the delete trash can next to the principal within the needed
role to remove that role from the principal.
In the confirmation dialog, you have the option to remove that principal
from all roles in the job. Click Remove to remove the principal
from the role.
gcloud
Create an IAM policy:
cat <<EOF > policy.json
{
"bindings" : [
{
"role" : ROLE ,
"members" : [
PRINCIPAL
]
}
]
}
EOF
Use the gcloud run jobs set-iam-policy command:
gcloud run jobs set-iam-policy JOB_NAME policy.json
For a list of acceptable values for PRINCIPAL , see
the IAM concepts page .
For a list of acceptable values for ROLE , see
Cloud Run IAM roles .
View principals
You can view principals for services and jobs.
View principals for a service
To view principals for a service:
Console UI
Go to the Google Cloud console:
Go to Google Cloud console
Click the checkbox at the left of the service you want to view for
principals and roles. (Don't click the service itself.)
Select the service you want to view for principals and roles.
In the information pane in the top right corner click the
Permissions tab. If the information pane isn't visible, you may need
to click Show Info Panel , then click Permissions .
The list of roles and principals will be shown, grouped by role granted.
gcloud
Use the gcloud run services get-iam-policy command:
gcloud run services get-iam-policy SERVICE_NAME
View principals for a job
To view principals for a job:
Console UI
Go to the Google Cloud console:
Go to Google Cloud console
Click the checkbox at the left of the job you want to add principals to.
(Don't click the job itself.)
Select the job you want to view for principals and roles.
In the information pane in the top right corner click the
Permissions tab. If the information pane isn't visible, you may need
to click Show Info Panel , then click Permissions .
The list of roles and principals will be shown, grouped by role granted.
gcloud
Use the gcloud run jobs get-iam-policy command:
gcloud run jobs get-iam-policy JOB_NAME
Control access on all services and jobs in a project
If you want to grant roles to principals on all services and jobs in a project, you can use
project-level IAM .
Console UI
Go to the Google Cloud console:
Go to Google Cloud console
Find the principal you want to grant a project-wide role.
Click the edit Pencil on the right side of the principal's row.
Click Add another role and pick the needed role.
Click Save .
gcloud
Use the gcloud projects add-iam-policy-binding command:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = PRINCIPAL \
--role = ROLE
where PRINCIPAL is the principal
(e.g. user:email@domain.com ), and ROLE is the
role (e.g. roles/run.admin ).
The allUsers and allAuthenticatedUsers principal types can't be applied
at the project level, and instead must be added to each service individually.
Make a service public
There are two ways to create a public Cloud Run service:
Disable the Cloud Run Invoker IAM check (recommended).
Assign the Cloud Run Invoker IAM role to the allUsers member type.
Required roles
To disable or re-enable the Invoker IAM check on a service, you
must have the following permissions:
run.services.create
run.services.update
run.services.setIamPolicy
These permissions are included in the
Cloud Run Admin
( roles/run.admin ) role. See
Cloud Run IAM roles
for the full list of roles and their associated permissions.
Disable the Cloud Run Invoker IAM check
The recommended way to make a public service is to disable the
Cloud Run Invoker IAM check.
Cloud Run enforces this check by default. Use this solution when
the project is subject to the
domain restricted sharing constraint in an organization policy .
To disable the check:
Console
In the Google Cloud console, go to the Cloud Run page:
Go to Cloud Run
Click Create Service if you are configuring a new service, then
fill out the initial service settings page as needed.
If you are configuring an existing service, click the service, then click
the Security tab.
Select Allow public access .
Click Create or Save .
gcloud
For a new service, use the gcloud run deploy command with the
--no-invoker-iam-check flag:
gcloud run deploy SERVICE_NAME --no-invoker-iam-check
Replace SERVICE_NAME with the service name.
For an existing service, use the gcloud run services update command with
the --no-invoker-iam-check flag:
gcloud run services update SERVICE_NAME --no-invoker-iam-check
Replace SERVICE_NAME with the service name.
YAML
To view and download the configuration:
gcloud run services describe SERVICE --format export > service.yaml
Update the run.googleapis.com/invoker-iam-disabled: annotation:
apiVersion : serving.knative.dev/v1
kind : Service
metadata :
annotations :
run.googleapis.com/invoker-iam-disabled : 'true'
name : SERVICE_NAME
Replace SERVICE_NAME with the name of your Cloud Run
service.
Replace the service with its new configuration using the following command:
gcloud run services replace service.yaml
Terraform
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
Add the following to a
google_cloud_run_v2_service
resource in your Terraform configuration:
resource "google_cloud_run_v2_service" "default" {
name = " SERVICE "
location = " REGION "
invoker_iam_disabled = true
template {
containers {
image = " IMAGE_URL "
}
}
}
Replace the following:
SERVICE : the name of your Cloud Run service.
REGION : the Google Cloud region—for example,
europe-west1 .
IMAGE_URL : a reference to the container image, for
example, us-docker.pkg.dev/cloudrun/container/hello:latest . If you use Artifact Registry,
the repository REPO_NAME must
already be created. The URL follows the format of LOCATION -docker.pkg.dev/ PROJECT_ID / REPO_NAME / PATH : TAG
Verify that the check is disabled after deployment by navigating to the
service's HTTPS endpoint.
Re-enable the Cloud Run Invoker IAM check
To re-enable the check:
Console
In the Google Cloud console, go to the Cloud Run Services page:
Go to Cloud Run
Click the service, then click Security .
Select Require authentication and select Identity and Access Management (IAM) .
Click Save .
gcloud
Update the service by passing the --invoker-iam-check flag:
gcloud run services update SERVICE_NAME --invoker-iam-check
Replace SERVICE_NAME with the service name.
YAML
To view and download the configuration:
gcloud run services describe SERVICE --format export > service.yaml
Update the run.googleapis.com/invoker-iam-disabled: annotation:
apiVersion : serving.knative.dev/v1
kind : Service
metadata :
annotations :
run.googleapis.com/invoker-iam-disabled : 'false'
name : SERVICE_NAME
Replace SERVICE_NAME with the name of your
Cloud Run service.
Terraform
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
Add the following to a
google_cloud_run_v2_service
resource in your Terraform configuration:
resource "google_cloud_run_v2_service" "default" {
name = " SERVICE "
location = " REGION "
invoker_iam_disabled = false
template {
containers {
image = " IMAGE_URL "
}
}
}
Replace the following:
SERVICE : the name of your Cloud Run service.
REGION : the Google Cloud region—for example,
europe-west1 .
IMAGE_URL : a reference to the container image, for
example, us-docker.pkg.dev/cloudrun/container/hello:latest . If you use Artifact Registry,
the repository REPO_NAME must
already be created. The URL follows the format of LOCATION -docker.pkg.dev/ PROJECT_ID / REPO_NAME / PATH : TAG
Verify that the check is re-enabled after deployment by navigating to the
service's HTTPS endpoint.
Configure organization policy for the Cloud Run invoker IAM check
Note: If you participated in the invitation-only access to this feature, you might
have an additional constraint ( constraints/run.requireInvokerIam ) that also
controls access to the check.
If you're an administrator, you can restrict the ability to
disable the Invoker IAM check
by using the constraints/run.managed.requireInvokerIam managed constraint.
This constraint is not enforced by default.
Assign the Cloud Run IAM Invoker role to the allUsers member type
Important: These instructions won't succeed if your project is under a
domain restricted sharing organization policy
that restricts granting IAM roles to the allUsers member type
as described in this page.
If that is the case, you should disable the Cloud RunIAM Invoker IAM check
instead.
You can allow public access to a service by assigning the
Cloud Run Invoker IAM role to the allUsers member type.
You must have the run.services.setIamPolicy permission to configure authentication
on a Cloud Run service. This permission is included in the
Cloud Run Admin role. See
Cloud Run IAM roles
for the full list of roles and their associated permissions.
Console
For an existing Cloud Run service:
In the Google Cloud console, go to the Cloud Run Services page:
Go to Google Cloud console
To the left of the service that you want to make public, click the
checkbox. Don't click the service itself.
In the information pane in the top-right corner, click the
Permissions tab. If the information pane isn't visible, you might
need to click Show Info Panel , then click Permissions .
Click Add principal .
In the New principals field, enter the value allUsers .
From the Select a role menu, select the
Cloud Run Invoker role.
Click Save .
You will be prompted to verify that you would like to make this resource
public. Click Allow public access to apply the change to the service
IAM settings.
For a new service you are creating, create the service
and select Allow public access in the Authentication section
to make the service publicly available. To make a service private, select
Require authentication .
gcloud
To make a service publicly accessible, use the gcloud run services command
to add the special allUsers member type to a service and grant it the
roles/run.invoker role:
gcloud run services add-iam-policy-binding [ SERVICE_NAME ] \
--member = "allUsers" \
--role = "roles/run.invoker"
Run the gcloud run deploy command to make your service
publicly accessible when you deploy your service:
gcloud run deploy [ SERVICE_NAME ] ... --allow-unauthenticated
YAML
Create a file named policy.yaml with the following content:
bindings:
- members:
- allUsers
role: roles/run.invoker
Allow public access for the existing SERVICE using:
gcloud run services set-iam-policy SERVICE policy.yaml
Terraform
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
Add the following to a
google_cloud_run_v2_service
resource in your Terraform configuration:
resource "google_cloud_run_v2_service" "default" {
name = "public-service"
location = "us-central1"
deletion_protection = false # set to "true" in production
template {
containers {
image = "us-docker.pkg.dev/cloudrun/container/hello"
}
}
}
To update the service IAM binding for roles/run.invoker , add
the following resource referencing your Cloud Run service:
resource "google_cloud_run_service_iam_binding" "default" {
location = google_cloud_run_v2_service.default.location
service = google_cloud_run_v2_service.default.name
role = "roles/run.invoker"
members = [
"allUsers"
]
}
This binding is only authoritative for the given role. Other IAM
bindings within the service IAM policy are preserved.
Use IAM Conditions on a service
You use IAM Conditions to
define and enforce conditional, attribute-based access control for Cloud Run
resources. Cloud Run supports the ( request.host )
and ( request.path )
condition attributes to grant conditional access when invoking
Cloud Run services.
To grant conditional access with the request.host and request.path
attributes when invoking Cloud Run services, add the condition
field when running the following command:
gcloud run services add-iam-policy-binding SERVICE_NAME \
--member= PRINCIPAL \
--role= ROLE \
--region= REGION \
--condition=[ KEY = VALUE ,...]
Replace:
SERVICE_NAME with the service name (for example,
my-service ).
PRINCIPAL with the principal (for example,
user:email@domain.com ).
ROLE with the role (for example, roles/run.invoker ).
REGION with the region (for example, europe-west1 ).
KEY = VALUE with a
condition to
include in the binding. The --condition flag must include the key-value
pairs expression and title .
Next steps
Learn how to securely authenticate developers, services, and users
to the services you just secured.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
