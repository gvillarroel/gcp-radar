---
title: "Authenticate to Cloud Run Admin API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/run/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api
  title: "Authenticate to Cloud Run Admin API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Cloud Run
Send feedback
Authenticate to Cloud Run Admin API
Stay organized with collections
Save and categorize content based on your preferences.
This page provides information and links for authenticating to the
Cloud Run Admin API. You can access the Cloud Run Admin API using the following methods:
Google Cloud CLI
REST API
Cloud Client Libraries
This page doesn't cover authenticating to Cloud Run services. For that
information, see
Authentication overview for Cloud Run services .
Authenticate to the Cloud Run Admin API
Authentication varies by the environment that you run your
service in. Click a tab for instructions for your use case:
Google Cloud CLI
To authenticate a workload running on Google Cloud, use the credentials of the
service identity attached to the Cloud Run service by following these
steps:
Install the Google Cloud CLI, then initialize it using the following command:
gcloud init
Set up authentication:
Create the service account:
gcloud iam service-accounts create SERVICE_ACCOUNT_NAME
Replace SERVICE_ACCOUNT_NAME with a name for the service account.
Provide access to your project and your resources by granting a role to
the service account:
gcloud projects add-iam-policy-binding PROJECT_ID
--member="serviceAccount: SERVICE_ACCOUNT_NAME@PROJECT_ID .iam.gserviceaccount.com"
--role= ROLE
Replace the following:
SERVICE_ACCOUNT_NAME : the name of the service account
PROJECT_ID : the project ID where you created the service account
ROLE : the role required to access the Cloud Client Libraries.
Note: The --role flag determines the resources in your project that can
be accessed by the service account. You can revoke these roles or grant
additional roles later. In production environments, don't grant the Owner,
Editor, or Viewer roles. Instead, grant a predefined role or custom role
that meets your needs.
To grant another role to the service account, run the command as you did
in the previous step.
Grant your account a role that lets you use the service account
roles and attach the service account to other resources:
gcloud iam service-accounts add-iam-policy-binding SERVICE_ACCOUNT_NAME@PROJECT_ID . iam.gserviceaccount.com
--member="user: USER_EMAIL " --role=roles/iam.serviceAccountUser
Replace the following:
SERVICE_ACCOUNT_NAME : the name of the service account
PROJECT_ID : the project ID where you created the service account
USER_EMAIL : the email address for your account
Create the resource that will run your code, and attach the service account to that resource.
Local development
You can set up credentials for a local development environment in the following ways:
User credentials for client libraries or third-party tools
User credentials for REST requests from the command line
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
A login screen is displayed. After you log in, your credentials
are stored in the local credential file used by ADC.
For more information, see
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
gcloud CLI credentials and ADC credentials .
On-prem/other cloud
We recommend that you use Workload Identity Federation to set up authentication
from outside of Google Cloud. For more information, see
Set up ADC for on-premises or another cloud provider .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
