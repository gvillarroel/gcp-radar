---
title: "Troubleshoot Cloud Run functions \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/functions/docs/troubleshooting
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/functions/docs/concepts/iam
source_metadata:
  url: https://docs.cloud.google.com/functions/docs/troubleshooting
  title: "Troubleshoot Cloud Run functions \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

If you are creating a new function, see the Console Quickstart on Cloud Run.
Home
Documentation
Application hosting
Cloud Run
Cloud Run functions
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Troubleshoot Cloud Run functions
This document shows you how to troubleshoot error messages and resolve
issues when using Cloud Run functions. If you created or deployed
a function using Cloud Run, see
Troubleshoot Cloud Run issues .
Deployment
This section lists issues that you might encounter with deployment and provides
suggestions for how to fix each of them. Many of the issues you might encounter
during deployment are related to roles and
permissions or incorrect configuration.
You use Identity and Access Management to authorize identities to perform
administrative actions on functions created using the
Cloud Functions v2 API —for example, using
gcloud functions , the REST API, or Terraform. Administration actions include
creating, updating, and deleting functions. For more information, see
Authorize access with IAM .
User missing permissions on runtime service account while deploying a function
Every function is associated with a service account that serves as its identity
when the function accesses other resources. This runtime
service account can be
the default service account or a user-managed service account. In environments
where multiple functions are accessing different resources, it's a common
practice to use per-function
identities
with named runtime service accounts rather than the default runtime service
account ( PROJECT_NUMBER -compute@developer.gserviceaccount.com ).
To use a runtime service account, the deployer must have the
iam.serviceAccounts.actAs permission on that service account. A user who
creates a non-default runtime service account is automatically granted this
permission, but other deployers must have this permission granted by a user.
Assign the iam.serviceAccounts.actAs permission on the runtime service account
for the user with the Project Viewer, Cloud Functions Developer, or
Cloud Functions Admin role.
The error message
Console
You must have the iam.serviceAccounts.actAs permission on the selected service account. To obtain this permission, you can grant a role that includes it like the Service Account User role, on the project.
gcloud
Default service account:
ERROR: (gcloud.functions.deploy) ResponseError: status=[403], code=[Ok], message=[Caller is missing permission 'iam.serviceaccounts.actAs' on service account projects/-/serviceAccounts/ PROJECT_NUMBER -compute@developer.gserviceaccount.com.Grant the role 'roles/iam.serviceAccountUser' to the caller on the service account projects/-/serviceAccounts/ PROJECT_NUMBER -compute@developer.gserviceaccount.com.You can do that by running 'gcloud iam service-accounts add-iam-policy-binding projects/-/serviceAccounts/ PROJECT_NUMBER -compute@developer.gserviceaccount.com --member MEMBER --role roles/iam.serviceAccountUser'where MEMBER has a prefix like 'user:' or 'serviceAccount:'
Non-default service account:
ERROR: (gcloud.functions.deploy) ResponseError: status=[403], code=[Ok], message=[Caller is missing permission 'iam.serviceaccounts.actAs' on service account projects/-/serviceAccounts/
SERVICE_ACCOUNT_NAME @ PROJECT_ID
.iam.gserviceaccount.com.Grant the role 'roles/iam.serviceAccountUser' to the caller on the service account projects/-/serviceAccounts/
SERVICE_ACCOUNT_NAME @ PROJECT_ID
.iam.gserviceaccount.com.You can do that by running 'gcloud iam service-accounts add-iam-policy-binding projects/-/serviceAccounts/
SERVICE_ACCOUNT_NAME @ PROJECT_ID
.iam.gserviceaccount.com --member MEMBER --role roles/iam.serviceAccountUser'where MEMBER has a prefix like 'user:' or 'serviceAccount:'
Note: PROJECT_NUMBER -compute@developer.gserviceaccount.com is the default
service account for Cloud Functions. When you use a non-default service
account, Cloud Functions replaces
the default service account with the user-managed service account SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com in the error message.
The solution
Assign the user ,
the Service Account User role ( roles/iam.serviceAccountUser ) on the default or the non-default runtime service account. This role includes the iam.serviceAccounts.actAs permission.
Deployment service account missing Pub/Sub permissions when deploying an event-driven function
The Cloud Functions service uses the Cloud Functions Service Agent service
account ( service- PROJECT_NUMBER @gcf-admin-robot.iam.gserviceaccount.com )
when performing administrative actions. By default this account is assigned the
Cloud Functions cloudfunctions.serviceAgent role. To deploy
event-driven functions ,
the Cloud Functions service must access Pub/Sub
to configure topics and subscriptions. If you change the role assigned to the service
account without granting the appropriate permissions,
the Cloud Functions service cannot access Pub/Sub and the deployment
fails.
The error message
Console
Validation failed for trigger projects/ PROJECT_ID /locations/ LOCATION /triggers/ FUNCTION_NAME - EVENTARC_ID : Permission "iam.serviceAccounts.ActAs" denied on "EndUserCredentials to PROJECT_NUMBER -compute@developer.gserviceaccount.com"
gcloud
ERROR: (gcloud.functions.deploy) ResponseError: status=[403], code=[Ok], message=[Validation failed for trigger projects/test-project-356312/locations/ LOCATION /triggers/ FUNCTION_NAME - EVENTARC_ID : Permission "iam.serviceAccounts.ActAs" denied on "EndUserCredentials to PROJECT_NUMBER -compute@developer.gserviceaccount.com"]
The solution
You can reset your service account
to the default cloudfunctions.serviceAgent role.
Default runtime service account doesn't exist
When you don't specify a user-managed runtime service
account ,
Cloud Functions uses the default compute service
account as the
runtime service account. Deployments fail if you delete the default account
without specifying a user-managed account.
The error message
gcloud
ERROR: (gcloud.functions.deploy) ResponseError: status=[404], code=[Ok], message=[Service account projects/-/serviceAccounts/ PROJECT_NUMBER -compute@developer.gserviceaccount.com was not found.]
The solution
To resolve this issue, follow any of these solutions:
Specify a
user managed runtime service account
before deploying your function.
Undelete the service account by numeric ID of the default service account.
Cloud Functions Service Agent service account missing project bucket permissions while deploying a function
Cloud Run functions can only be triggered by
events from Cloud Storage buckets in the
same Google Cloud Platform project. In addition, the Cloud Functions Service
Agent service account
( service- PROJECT_NUMBER @gcf-admin-robot.iam.gserviceaccount.com )
needs a cloudfunctions.serviceAgent role on your project.
The error message
Console
ERROR: (gcloud.functions.deploy) ResponseError: status=[403], code=[Ok], message=[Validation failed for trigger projects/ PROJECT_ID /locations/ LOCATION /triggers/ FUNCTION_NAME - EVENTARC_ID : Permission "iam.serviceAccounts.ActAs" denied on "EndUserCredentials to PROJECT_NUMBER -compute@developer.gserviceaccount.com"]
gcloud
ERROR: (gcloud.functions.deploy) ResponseError: status=[403], code=[Ok], message=[Validation failed for trigger projects/<project-id>/locations/ LOCATION /triggers/ FUNCTION_NAME - EVENTARC_ID : Permission "iam.serviceAccounts.ActAs" denied on "EndUserCredentials to PROJECT_NUMBER -compute@developer.gserviceaccount.com"]
The solution
To resolve this issue,
reset this service account
to the default role.
User with Project Editor role can't make a function public
The Project Editor role has broad permissions to manage resources within a project, but it doesn't inherently grant the ability to make Cloud Functions public. The user or the service deploying the function would require
the run.services.setIamPolicy permission.
The error message
gcloud
ERROR: (gcloud.run.services.add-iam-policy-binding) PERMISSION_DENIED: Permission 'run.services.setIamPolicy' denied on resource 'projects/ PROJECT_ID /locations/ LOCATION /functions/ FUNCTION_NAME ' (or resource may not exist).
The solution
You can :
Assign the deployer either the
Project Owner or the
Cloud Functions Admin role.
Grant the permission manually by creating a
custom role .
Check if domain restricted sharing is enforced on the project.
Function deployment fails when using Resource Location Restriction organization policy
If your organization uses a resource location
constraint
policy, it restricts function deployment in the regions restricted by the
policy. In the Google Cloud console, the restricted region won't be available from
the region drop-down while deploying a function.
The error message
gcloud
ResponseError: status=[400], code=[Ok], message=[" LOCATION " violates constraint "constraints/gcp.resourceLocations" on the resource "projects/ PROJECT_ID /locations/ LOCATION /functions/ FUNCTION_NAME ".]
The solution
You can add or remove locations from the allowed_values or denied_values
lists of a resource locations constraint to suit successful deployment.
Function deployment fails while executing function's global scope
This error indicates that there was a problem with your code. The deployment
pipeline finished deploying the function, but failed at the last step - sending
a health check to the function. This health check is meant to execute a
function's global scope ,
which could be throwing an exception, crashing, or timing out. The global scope
is where you commonly load in libraries and initialize clients.
The error message
In Cloud Logging logs:
Could not create or update Cloud Run service FUNCTION_NAME , Container Healthcheck failed. Revision REVISION_NAMEE is not ready and cannot serve traffic. The user-provided container failed to start and listen on the port defined provided by the PORT=8080 environment variable. Logs for this revision might contain more information.
The solution
To resolve this issue, follow any of these solutions:
For a more detailed error message, review your function's
build logs .
If it
is unclear why your function failed to execute its global scope, consider
temporarily moving the code into the request invocation, using
lazy initialization of the global variables .
This lets you add extra log statements around your client libraries, which could
be timing out on their instantiation (especially if they are calling other
services), crashing, or throwing exceptions altogether.
Additionally,
try increasing the function timeout. Longer timeout limits in Cloud Run functions
provides more breathing room for initialization and it offers more
scalable resource allocation in a Cloud Run environment, potentially
mitigating this issue if caused by resource exhaustion.
The source code must contain an entry point function that has been correctly
specified in the deployment, either through the
console
or gcloud .
User with Viewer role cannot deploy a function
Users with either the Project Viewer or Cloud Functions Viewer role have
read-only access to functions and function details, and can't deploy
new functions. The Create function feature is grayed out in the
Google Cloud console with the following error:
The error message
gcloud
ERROR: (gcloud.functions.deploy) ResponseError: status=[403], code=[Ok], message=[Permission 'cloudfunctions.functions.generateUploadUrl' denied on 'projects/ PROJECT_ID /locations/ LOCATION /functions']
The solution
Assign the user Cloud Functions Developer role.
Build service account missing permissions
The error message
In the function deploy error or in the build logs, you may see one of the
following errors:
The service account running this build does not have permission to write logs. To fix this, grant the Logs Writer (roles/logging.logWriter) role to the service account.
Step #0 - "fetch": failed to Fetch: failed to download archive gs://gcf-v2-sources- PROJECT_NUMBER - LOCATION / FUNCTION_NAME /version- VERSION_NUMBER /function-source.zip: Access to bucket gcf-v2-sources- PROJECT_NUMBER - LOCATION denied. You must grant Storage Object Viewer permission to PROJECT_NUMBER -compute@developer.gserviceaccount.com.
Step #2 - "build": ERROR: failed to create image cache: accessing cache image " LOCATION -docker.pkg.dev/ PROJECT /gcf-artifacts/ FUNCTION_NAME /cache:latest": connect to repo store " LOCATION -docker.pkg.dev/ PROJECT /gcf-artifacts/ FUNCTION_NAME /cache:latest": GET https:// LOCATION -docker.pkg.dev/v2/token?scope=repository%3A PROJECT %2Fgcf-artifacts%2F FUNCTION_NAME %2Fcache%3Apull&service=: DENIED: Permission "artifactregistry.repositories.downloadArtifacts" denied on resource "projects/ PROJECT /locations/ LOCATION /repositories/gcf-artifacts" (or it may not exist)
Could not build the function due to a missing permission on the build service account. If you didn't revoke that permission explicitly, this could be caused by a change in the organization policies.
The solution
The build service account needs permission to read from the source bucket and
read and write permissions for the Artifact Deployment repository. You may
encounter this error due to a change in the default behavior for how
Cloud Build uses service accounts, detailed in
Cloud Build Service Account Change .
To resolve this issue, use any of these solutions:
Create a
custom build service account
for function deployments.
Add the
Cloud Build Service Account role
( roles/cloudbuild.builds.builder ) to the default Compute Service Account.
Review the Cloud Build guidance on changes to the default service account
and
opt out of these changes .
Build service account disabled
The error message
Could not build the function due to disabled service account used by Cloud Build. Please make sure that the service account is active.
The solution
The build service account needs to be enabled in order to deploy a function.
You may encounter this error due to a change in the default behavior for how
Cloud Build uses service accounts, detailed in
Cloud Build Service Account Change .
To resolve this issue, use any of these solutions:
Create a
custom build service account
for function deployments.
Enable the default Compute Service Account.
Review the Cloud Build guidance on changes to the default service account
and
opt out of these changes .
Serving
This section lists serving issues that you might encounter, and provides
suggestions for how to fix each of them.
Serving permission error due to the function requiring authentication
HTTP functions without Allow unauthenticated invocations enabled, restrict
access to end users and service accounts that don't have appropriate
permissions . This error
message indicates that the caller does not have permission to invoke the
function.
Note: Visiting the Cloud Run functions URL in a browser does not add an
authentication header automatically.
The error message
HTTP Error Response code: 403 Forbidden
HTTP Error Response body:
Error: Forbidden Your client does not have permission
to get URL / FUNCTION_NAME from this server.
The solution
To resolve this issue, follow any of these solutions:
Assign the user the Cloud Run Invoker Cloud IAM
role for the specific function.
Redeploy your function to allow public access if this is supported by your organization. This is useful for testing.
Serving error due to allow internal traffic only configuration
Ingress settings
restrict whether an HTTP function can be invoked by resources
outside of your Google Cloud project or VPC Service Controls service perimeter.
When you configure allow internal traffic only setting for ingress networking,
this error message indicates that only requests from VPC networks
in the same project or VPC Service Controls perimeter are allowed. This can also
be a 404 error for default functions.net URL .
The error message
HTTP Error Response code: 404 NOT FOUND
The solution
To resolve this error, follow any of these solutions:
Ensure that the request is coming from your Google Cloud project or VPC Service Controls service perimeter.
Change the ingress settings to
allow all traffic
for the function.
Cloud Run functions source code can also result in a 404 due to incorrect function url, http methods, logic errors etc.
Function invocation lacks valid authentication credentials
Invoking a Cloud Run functions function that has been set up with
restricted access
requires an ID token .
Access tokens
or refresh tokens
don't work.
The error message
HTTP Error Response code: 401 Unauthorized
HTTP Error Response body:
Your client does not have permission to the requested URL ' FUNCTION_NAME '
The solution
To resolve this error, follow either of these solutions:
Make sure that your requests include an
Authorization: Bearer ID_TOKEN header ,
and that the token is an ID token, not an access or refresh token. If you
generate this token manually with a service account's private key, you
must exchange the self-signed JWT token for a Google-signed Identity token.
Invoke your HTTP function using authentication credentials in your request
header. For example, you can get an identity token using gcloud as follows:
curl -H "Authorization: Bearer $( gcloud auth print-identity-token ) "
https:// REGION - PROJECT_ID .cloudfunctions.net/ FUNCTION_NAME
Redeploy your function to allow unauthenticated invocations if this is
supported by your organization. This is useful for testing.
Make sure that the audience (aud) field in the JSON Web Token (JWT) is an
exact match to the function's URL as displayed in the Google Cloud console. Any
discrepancies, including an additional relative path, causes an
authentication failure and a 401 response.
Function stops mid-execution, or continues running after your code finishes
Some Cloud Run functions runtimes allow users to run asynchronous tasks. If your
function creates such tasks, it must also explicitly wait for these tasks to
complete. Failure to do so might cause your function to stop executing at the
wrong time.
The error behavior
Your function exhibits one of the following behaviors:
Your function terminates while asynchronous tasks are still running, but
before the specified timeout period has elapsed.
Your function doesn't stop running when these tasks finish, and continues
to run until the timeout period has elapsed.
The solution
If your function terminates early, you should make sure all your function's
asynchronous tasks are complete before your function performs any of the
following actions:
Returning a value
Resolving or rejecting a returned Promise object (Node.js functions only)
Throwing uncaught exceptions or errors
Sending an HTTP response
Calling a callback function
If your function fails to terminate after completing asynchronous tasks,
you should verify that your function is correctly signaling Cloud Run functions
after it has completed. In particular, make sure that you perform one of the
operations listed earlier as soon as your function has finished its asynchronous
tasks.
Runtime error when accessing resources protected by VPC Service Controls
By default, Cloud Run functions uses public IP addresses to make outbound requests
to other services. If your functions are not inside a VPC Service Controls
perimeter, this might cause them to receive HTTP 403 responses when attempting
to access Google Cloud services protected by VPC Service Controls, due to service perimeter
denials.
The error message
In Audited Resources logs, an entry like the following:
"protoPayload": {
"@type": "type.googleapis.com/google.cloud.audit.AuditLog",
"status": {
"code": 7,
"details": [
{
"@type": "type.googleapis.com/google.rpc.PreconditionFailure",
"violations": [
{
"type": "VPC_SERVICE_CONTROLS",
...
"authenticationInfo": {
"principalEmail": " CLOUD_FUNCTION_RUNTIME_SERVICE_ACCOUNT ",
...
"metadata": {
"violationReason": "NO_MATCHING_ACCESS_LEVEL",
"securityPolicyInfo": {
"organizationId": " ORGANIZATION_ID ",
"servicePerimeterName": "accessPolicies/ NUMBER /servicePerimeters/ SERVICE_PERIMETER_NAME "
...
The solution
To resolve this error, follow either of these solutions:
The function should route all outgoing traffic through the VPC network. See Deploy functions compliant with VPC Service Controls section for more information.
Alternatively, grant the function's runtime service account access to the perimeter. You can do this either by creating an access level and adding the access level to the service perimeter , or by creating an ingress policy on the perimeter. See Use VPC Service Controls for more information.
Scalability
This section lists scalability issues and provides suggestions for how to fix each of them.
Cloud Logging errors related to pending queue request aborts
Scaling failures can occur from the following scenarios:
A huge sudden increase in traffic.
Long cold start time .
Long request processing time.
High function error rate.
Reaching the maximum instance limit and
preventing the system from scaling.
Transient factors attributed to the Cloud Run functions service.
In each case Cloud Run functions might not scale up fast enough to manage the
traffic.
The error message
The request was aborted because there was no available instance
severity=WARNING ( Response code: 429 ) Cloud Run functions cannot scale due
to the max-instances limit you set
during configuration.
severity=ERROR ( Response code: 500 ) Cloud Run functions intrinsically
cannot manage the rate of traffic.
The solution
To resolve this issue, address the previously listed causes.
For HTTP trigger-based functions, have the client implement exponential
backoff and retries for requests that must not be dropped. If you are
triggering Cloud Run functions from Workflows ,
you can use the try/retry syntax
to achieve this.
For background or event-driven functions, Cloud Run functions supports
at-least-once delivery .
Even without explicitly enabling retry, the event is automatically
re-delivered and the function execution will be retried. See
Retrying Event-Driven Functions
for more information.
When the root cause of the issue is a period of heightened transient errors
attributed solely to Cloud Run functions or if you need assistance with
your issue, contact support .
For issues pertaining to cold starts, configure
minimum instances to reduce the
amount of cold starts with a higher billing implication.
Logging
The following section covers issues with logging and how to fix them.
Logs entries have none or incorrect log severity levels
Cloud Run functions includes runtime logging by default. Logs written to
stdout or stderr appear automatically in the Cloud Logging .
But these log entries by default, contain only string messages.
The error message
No or incorrect severity levels in logs.
The solution
To include log severities, you must send a structured log entry.
Note: As of September 2020, every newly released runtime will use the default
severity log level behavior as defined by the runtime library itself. For
example, Python 3.8 sets the default severity log level at WARNING or higher.
If you want to capture events with DEBUG or INFO severity using Python 3.8,
you must also programmatically set your log level to include those levels.
Handle or log exceptions differently in the event of a crash
You might want to customize how you manage and log crash information.
The solution
Wrap your function in a try block to customize handling exceptions and
logging stack traces.
Note: Adding a try block can result in an unintended side effect in
event-driven functions with the retry on failure configuration. Retrying
failed events might itself fail.
Example
import logging
import traceback
def try_catch_log(wrapped_func):
def wrapper(*args, **kwargs):
try:
response = wrapped_func(*args, **kwargs)
except Exception:
# Replace new lines with spaces so as to prevent several entries which
# would trigger several errors.
error_message = traceback.format_exc().replace('\n', ' ')
logging.error(error_message)
return 'Error';
return response;
return wrapper;
#Example hello world function
@try_catch_log
def python_hello_world(request):
request_args = request.args
if request_args and 'name' in request_args:
1 + 's'
return 'Hello World!'
Logs too large in Node.js 10+, Python 3.8, Go 1.13, and Java 11
The maximum size for a regular log entry in these runtimes is 105 KiB.
The solution
Send log entries smaller than this limit.
Missing logs despite Cloud Run functions returning errors
Cloud Run functions streams Cloud Run function logs to a default bucket. When
you create a project, Cloud Run functions creates and enables the default bucket.
If the default bucket is disabled or if Cloud Run function logs are in the
exclusion filter, the logs won't appear in Logs Explorer.
The solution
Enable default logs.
Note: Enabling Cloud Logging might incur charges.
Cloud Run functions logs aren't appearing in Logs Explorer
Some Cloud Logging client libraries use an asynchronous process to write log
entries. If a function crashes, or otherwise terminates, it is possible that
some log entries haven't been written yet, and might appear later. Some logs may
be lost and can't be seen in the Logs Explorer.
The solution
Use the client library interface to flush buffered log entries before exiting
the function, or use the library to write log entries synchronously. You can also
synchronously write logs directly to stdout or stderr .
Missing Cloud Run functions logs when using Log Router sink
Log Router sinks route log entries to various destinations.
The Exclusion filters define entries that you can discard.
The solution
Remove exclusion filter set for resource.type = "cloud_run_revision" .
Database connections
There are a number of issues that can arise when connecting to a database, many
associated with exceeding connection limits or timing out. If you see a Cloud SQL
warning in your logs, for example, Context deadline exceeded , you might need
to adjust your connection configuration. For more information, see
Cloud SQL best practices .
Networking
This section lists networking issues and provides suggestions for how to fix
each of them.
Network connectivity
If all outbound requests from a Cloud Run function fail even after
you configure egress settings,
you can run Connectivity Tests to identify any underlying
network connectivity issues. For more information, see
Create and run Connectivity Tests .
Serverless VPC Access connector is not ready or does not exist
If a Serverless VPC Access connector fails, it might not be
using a /28 subnet mask dedicated to the connector as required .
The error message
Problem connecting to VPC Connector projects/xxxxx/locations/ REGION /connectors/xxxx: Serverless VPC Access is not found.
When Cloud Run functions is deployed with a connector in a bad state due to missing permission on the Google APIs Service Agent service account PROJECT_NUMBER @cloudservices.gserviceaccount.com , it results in the following error:
The error message
Failed to prepare VPC connector. Please try again later.
The solution
List your subnets
to check whether your connector uses a /28 subnet mask. If your connector
doesn't use the /28 subnet mask, recreate or create a new connector .
To resolve this issue, follow any of these solutions:
If you recreate the connector, you don't need to redeploy other
functions. You might experience a network interruption as the connector is
recreated.
If you create a new alternate connector, redeploy your functions to use the
new connector and then delete the original connector. This method avoids network
interruption.
Ensure the Cloud Run functions and its associated connector are deployed in the same region.
For the Shared VPC configuration:
Ensure that the service accounts SERVICE_PROJECT_NUMBER @cloudservices.gserviceaccount.com and service-SERVICE_PROJECT_NUMBER @gcp-sa-vpcaccess.iam.gserviceaccount.com
used by VPC Connector to provision resources in the project are not
missing permissions. These service accounts should have the roles/compute.networkUser role in the host project of Shared VPC configuration when the connector is in the service project.
If the connector is created in the host project, ensure that the Serverless VPC Access User role is granted on Cloud Run Service Agent in your host project.
If the connector status shows Connector is in a bad state, manual deletion recommended error and the Google APIs Service Agent is missing the required permissions to provision compute resources in the connector's project, grant roles/compute.admin to the PROJECT_NUMBER @cloudservices.gserviceaccount.com service account. In some cases the connector may need to be recreated after adding these permissions.
SMTP traffic to external destination IP addresses using TCP port 25 is blocked
For added security, Google Cloud blocks connections to TCP destination port 25
when sending emails from functions.
The solution
To unblock these connections, follow any of these solutions:
Connect to your SMTP server on a different port, such as TCP port 587 or 465 .
Use a third-party email service .
404 error for default functions.net URL
Disabling the run.app URL in Cloud Run also prevents access to
the default cloudfunctions.net URL for Cloud Run functions (2nd gen). This error
can also be caused by a Serving error due to allow internal traffic only configuration .
The error message
HTTP Error Response code: 404 NOT FOUND
The solution
To re-enable the default cloudfunctions.net URL for Cloud Run functions (2nd gen),
you must re-enable the run.app URL in Cloud Run
by replacing the service.yaml file with a new configuration where
annotations:run.googleapis.com/default-url-disabled: false
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
