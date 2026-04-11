---
title: "Use authentication with HTTP targets \_|\_ Cloud Scheduler \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/scheduler/docs/http-target-auth
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/scheduler/docs
source_metadata:
  url: https://docs.cloud.google.com/scheduler/docs/http-target-auth
  title: "Use authentication with HTTP targets \_|\_ Cloud Scheduler \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Scheduler
Guides
Send feedback
Use authentication with HTTP targets
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Scheduler can call HTTP targets that require authentication if you
set up an associated service account that has the appropriate credentials.
Set up a service account
A service account is typically used by an
application or compute workload and is identified by its email address, which is
unique to the account.
Applications can use service accounts to make authorized API calls by
authenticating as the service account itself, and accessing all resources that
the service account has permission to access.
The most common way to let an application authenticate as a service account is
to attach a service account to the resource running the application. Then, you
can grant the service account Identity and Access Management (IAM) roles to let the
service account access Google Cloud resources.
If you don't already have a service account that you want to use for
Cloud Scheduler jobs with HTTP targets,
create a new service account . Note the
following:
The service account must belong to the project in which
the Cloud Scheduler job is created.
Don't use the Cloud Scheduler service agent
( service- PROJECT_NUMBER @gcp-sa-cloudscheduler.iam.gserviceaccount.com ).
It can't be used for this purpose.
Don't revoke the Cloud Scheduler Service Agent role
( roles/cloudscheduler.serviceAgent ) from the Cloud Scheduler
service agent on your project. Doing so results in 403
responses to endpoints requiring authentication, even if your job's service
account has the appropriate role.
If your target is within Google Cloud,
grant the necessary IAM roles
to your service account. Each service within Google Cloud requires a
specific role, and the receiving service automatically verifies the generated
token. For example, for Cloud Run and second generation
Cloud Run functions, you must grant the Cloud Run Invoker
role.
To get the permission that you need to
attach a service account to a resource ,
ask your administrator to grant you the
Service Account User
( roles/iam.serviceAccountUser ) IAM role on the service account.
This predefined role contains the iam.serviceAccounts.actAs permission,
which is required to attach a service account to a resource. (If you created
the service account, you are automatically granted this permission.)
Best practice: For production environments, we strongly recommend
creating a new service account and granting it one or more IAM
roles that contain the
minimum permissions required and follow the principle of
least privilege .
In the previous step, if you specifically created a service account to invoke
the service that your Cloud Scheduler job targets, you can follow
the principle of least privilege by binding the account and its invoker
permission to your target service:
Console
In the Google Cloud console, on the project selector page, select a
Google Cloud project.
Go to project selector
Navigate to the page for the resource type you are invoking. For
example, if you are invoking a Cloud Run service,
navigate to the page that
lists Cloud Run services .
Select the checkbox at the left of the service you want to invoke.
(Don't click the service itself.)
Click the person Permissions
tab.
If the information pane isn't visible, you might need to click
Show Info Panel > Permissions .
Click person_add
Add principal .
In the New principals field, enter the email address for the
service account you created.
From the Select a role list, select a role to grant.
Follow the principle of least privilege by choosing the role that includes
only the permissions that your principal needs.
Click Save .
gcloud
gcloud RESOURCE_TYPE add-iam-policy-binding RESOURCE_ID \
--member = PRINCIPAL \
--role = ROLE
Replace the following:
RESOURCE_TYPE : the resource type of your target.
For example, run for a Cloud Run target.
RESOURCE_ID : the identifier for your target. For
example, the service name for a Cloud Run target.
PRINCIPAL : the identifier for your service
account. This has the following form:
serviceAccount: SERVICE_ACCOUNT_EMAIL_ADDRESS . For
example,
serviceAccount:my-service-account@my-project.iam.gserviceaccount.com .
ROLE : the name of the role that your target
service requires for invocation. For example, roles/run.invoker for
a Cloud Run or second generation Cloud Run function target.
Other optional parameters are described in the
gcloud command line reference .
Examples:
Grant the Cloud Run Invoker
( roles/run.invoker ) IAM role to the service account
my-service-account@my-project.iam.gserviceaccount.com
on the Cloud Run service my-service :
gcloud run add-iam-policy-binding my-service \
--member=serviceAccount:my-service-account@my-project.iam.gserviceaccount.com \
--role=roles/run.invoker
Grant the Cloud Run Invoker
( roles/run.invoker ) IAM role required by second
generation Cloud Run functions to the service account
my-service-account@my-project.iam.gserviceaccount.com
on the Cloud Run function my-gen2-function :
gcloud functions add-iam-policy-binding my-gen2-function \
--member=serviceAccount:my-service-account@my-project.iam.gserviceaccount.com \
--role=roles/run.invoker \
--gen2
For an example of using Terraform to create a service account with permission
to invoke a Cloud Run service, see
Creating a service account for Cloud Scheduler .
If your target is outside of Google Cloud, the receiving service must
manually verify the token .
The default Cloud Scheduler service agent is automatically set
up when you enable the Cloud Scheduler API, unless you enabled it prior to
March 19, 2019, in which case you must
grant the Cloud Scheduler Service Agent role . This is so
that it can generate header tokens on behalf of your service account to
authenticate to your target.
Create a Cloud Scheduler job that uses authentication
To authenticate between Cloud Scheduler and an HTTP target,
Cloud Scheduler creates a header token based on your client service
account, identified by its email, and sends it, using HTTPS, to the target.
You can use either an
ID (OIDC) token
or an OAuth (access) token. OIDC is generally used except for Google APIs
hosted on *.googleapis.com as these APIs expect an OAuth token.
Note: If your Cloud Scheduler job uses OIDC authentication and
your function expects arguments in form of URL parameters (for example,
my_function?key=value ) you must ensure the OIDC Audience ( aud ) field
does not contain the URL parameters.
To create a Cloud Scheduler job that uses authentication, you must add
the token type and the email address that identifies the client service account
when creating your job:
Console
In the Google Cloud console, go to the Cloud Scheduler page.
Go to Cloud Scheduler
Click add_box Create job .
In the Name field, enter a name for your job that is unique to the
project. Note that you can't re-use a job name in a project even if you
delete its associated job.
In the Region list, select a region for your job.
Specify a Frequency and Timezone for your job.
The string you supply here can be any
unix-cron compatible
string.
Click Continue .
In the Target type list, select HTTP .
Specify an URL and HTTP method .
In the Auth header list, select the token type. An OIDC token is
generally used except for Google APIs hosted on *.googleapis.com as
these APIs expect an OAuth token.
In the Service account list, select your service account email.
Optionally, specify an Audience which limits the recipients for the
OIDC token; typically, the job's target URL without any URL parameters. If
not specified, the entire URL is used as the audience including request
parameters.
Configure any optional settings.
Click Create .
gcloud
gcloud scheduler jobs create http JOB_ID \
--schedule = " FREQUENCY " \
--uri = URI \
--oidc-service-account-email = SERVICE_ACCOUNT_EMAIL
Replace the following:
JOB_ID : a name for the job that is unique to the
project. Note that you can't re-use a job name in a project even if you
delete its associated job.
FREQUENCY : the interval or how often the job is
to run; for example, every 3 hours or every 10 mins .
The string you supply here can be any
unix-cron compatible
string.
URI : the fully qualified URL of the endpoint.
SERVICE_ACCOUNT_EMAIL : the email of your service
account. An OIDC token is generally used except for Google APIs hosted
on *.googleapis.com as these APIs expect an OAuth token. (Use the
--oauth-service-account-email flag instead to define an OAuth token
type.)
Other optional parameters are described in the
gcloud command line reference .
Grant the Cloud Scheduler Service Agent role
Some Google Cloud services need access to your resources so that they can
act on your behalf. To meet this need, Google Cloud creates and manages
service accounts that are known as
service agents and that are
created and granted roles automatically as you enable and use Google Cloud
services.
The Cloud Scheduler service agent requires the
Cloud Scheduler Service Agent
( roles/cloudscheduler.serviceAgent ) role. Without this role,
Cloud Scheduler jobs fail. You can manually grant the role to your
Cloud Scheduler service agent which has an email address with the
following format:
service- PROJECT_NUMBER @gcp-sa-cloudscheduler.iam.gserviceaccount.com
You need to manually grant the role only if one of the following is true:
You enabled the Cloud Scheduler API prior to March 19, 2019
You removed the Cloud Scheduler Service Agent role from the service
agent
You can verify that the Cloud Scheduler service agent is set up in
your project and that it has the Cloud Scheduler Service Agent role granted to
it by
viewing your project's current access .
Note that if you use the Google Cloud console to view your project's access,
make sure to select the Include Google-provided role grants checkbox.
To learn how to grant a role to your service agent, see
Create and grant roles to service agents .
What's next
Learn how to authenticate to Cloud Scheduler programmatically .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
