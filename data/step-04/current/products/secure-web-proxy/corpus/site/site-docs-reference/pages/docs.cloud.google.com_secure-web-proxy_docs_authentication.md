---
title: "Authenticate to Secure Web Proxy \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/secure-web-proxy/docs/authentication
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/secure-web-proxy/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/secure-web-proxy/docs/authentication
  title: "Authenticate to Secure Web Proxy \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Secure Web Proxy
Reference
Send feedback
Authenticate to Secure Web Proxy
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how to authenticate to Secure Web Proxy programmatically. How
you authenticate to Secure Web Proxy depends on the interface you use to access the API
and the environment where your code is running.
For more information about Google Cloud authentication, see the
Authentication methods .
API access
Secure Web Proxy supports programmatic access. You can access the API in
the following ways:
REST
REST
You can authenticate to
the Secure Web Proxy API
by using your gcloud CLI credentials or by using
Application Default Credentials .
For more information about authentication for REST requests, see
Authenticate for using REST .
For information about the types of credentials, see
gcloud CLI credentials and ADC credentials .
Set up authentication for Secure Web Proxy
How you set up authentication depends on the environment where your code is running.
The following options for setting up authentication are the most commonly used. For more
options and information about authentication, see
Authentication methods .
For a local development environment
You can set up credentials for a local development environment in the following ways:
User credentials for client libraries or third-party tools
User credentials for REST requests from the command line
Service account impersonation
Client libraries or third-party tools
Set up
Application Default Credentials (ADC)
in your local environment:
Install the Google Cloud CLI.
After installation,
initialize the Google Cloud CLI by running the following command:
gcloud init
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
If you're using a local shell, then create local authentication credentials for your user
account:
gcloud auth application-default login
You don't need to do this if you're using Cloud Shell.
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
A sign-in screen appears. After you sign in, your credentials are stored in the
local credential file used by ADC .
For more information about working with ADC in a local environment, see
Set up ADC for a local development environment .
REST requests from the command line
When you make a REST request from the command line,
you can use your gcloud CLI credentials by including
gcloud auth print-access-token
as part of the command that sends the request.
The following example lists service accounts for the specified project. You can use the
same pattern for any REST request.
Before using any of the request data,
make the following replacements:
PROJECT_ID : Your Google Cloud project ID.
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts"
PowerShell (Windows)
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT_ID /serviceAccounts" | Select-Object -Expand Content
For more information about authenticating using REST and gRPC, see
Authenticate for using REST .
For information about the difference between your local ADC credentials and your
gcloud CLI credentials, see
gcloud CLI authentication configuration and ADC configuration .
Service account impersonation
In most cases, you can use your user credentials to authenticate from a local development
environment. If that is not feasible, or if you need to test the permissions assigned to
a service account, you can use service account impersonation. You must have the
iam.serviceAccounts.getAccessToken permission, which is included in the
Service Account Token Creator
( roles/iam.serviceAccountTokenCreator ) IAM role.
You can set up the gcloud CLI to use service account impersonation by using the
gcloud config set command :
gcloud config set auth/impersonate_service_account SERVICE_ACCT_EMAIL
For select languages, you can use service account impersonation to create a local ADC file
for use by client libraries. This approach is supported only for the Go, Java, Node.js, and
Python client libraries—it is not supported for the other languages.
To set up a local ADC file with service account impersonation, use the
--impersonate-service-account flag
with the gcloud auth application-default login command :
gcloud auth application-default login --impersonate-service-account = SERVICE_ACCT_EMAIL
For more information about service account impersonation, see
Use service account impersonation .
On Google Cloud
To authenticate a workload running on Google Cloud, you use the credentials of the
service account attached to the compute resource where your code is running, such as a
Compute Engine virtual machine (VM) instance .
This approach is the preferred authentication method for code running on a
Google Cloud compute resource.
For most services, you must attach the service account when you create the
resource that will run your code; you cannot add or replace the service account
later. Compute Engine is an exception—it lets you attach a service
account to a VM instance at any time.
Use the gcloud CLI to create a service account and attach it to your
resource:
Install the Google Cloud CLI.
After installation,
initialize the Google Cloud CLI by running the following command:
gcloud init
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
Set up authentication:
Ensure that you have the Create Service Accounts IAM role
( roles/iam.serviceAccountCreator ) and the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ). Learn how to grant roles .
Create the service account:
gcloud iam service-accounts create SERVICE_ACCOUNT_NAME
Replace SERVICE_ACCOUNT_NAME with a name for the service account.
To provide access to your project and your resources, grant a role to the service account:
gcloud projects add-iam-policy-binding PROJECT_ID --member = "serviceAccount: SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com" --role = ROLE
Replace the following:
SERVICE_ACCOUNT_NAME : the name of the service account
PROJECT_ID : the project ID where you created the service account
ROLE : the role to grant
Note : The --role flag affects which resources the service account can access in your
project. You can revoke these roles or grant additional roles later.
In production environments, do not grant the Owner, Editor, or Viewer roles. Instead, grant a
predefined role or
custom role that meets your needs.
To grant another role to the service account, run the command as you did in the previous step.
Grant the required role to the principal that
will attach the service account to other resources.
gcloud iam service-accounts add-iam-policy-binding SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com --member = "user: USER_EMAIL " --role = roles/iam.serviceAccountUser
Replace the following:
SERVICE_ACCOUNT_NAME : the name of the service account
PROJECT_ID : the project ID where you created the service account
USER_EMAIL : the email address for a Google Account
Create the resource that will run your code, and attach the service account to that
resource. For example, if you use Compute Engine:
Create a Compute Engine instance. Configure the instance as follows:
Replace INSTANCE_NAME with your preferred
instance name.
Set the --zone flag to the
zone in which you want to create
your instance.
Set the --service-account flag to the email address for the service account
that you created.
gcloud compute instances create INSTANCE_NAME --zone = ZONE --service-account = SERVICE_ACCOUNT_EMAIL
For more information about authenticating to Google APIs, see
Authentication methods .
On-premises or on a different cloud provider
The preferred method to set up authentication from outside of Google Cloud is to use
workload identity federation. For more information, see
Set up ADC for on-premises or another cloud provider
in the authentication documentation.
Access control for Secure Web Proxy
After you authenticate to Secure Web Proxy, you must be authorized to access
Google Cloud resources. Secure Web Proxy uses
Identity and Access Management (IAM) for authorization.
For more information about the roles for Secure Web Proxy, see
Access control with IAM .
For more information about IAM and authorization, see
IAM overview .
What's next
Learn about Google Cloud authentication methods .
See a list of authentication use cases .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
