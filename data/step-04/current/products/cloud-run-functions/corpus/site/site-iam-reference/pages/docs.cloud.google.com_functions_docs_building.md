---
title: "Build process overview \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/functions/docs/building
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/functions/docs/concepts/iam
source_metadata:
  url: https://docs.cloud.google.com/functions/docs/building
  title: "Build process overview \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation"
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
Build process overview
This guide shows the build process overview for functions that were deployed
using the gcloud functions command. To learn the build process for
functions deployed using the gcloud run command, see:
Build Cloud Run into containers
Set build service account
Set build worker pools
When you deploy your function's source code using the gcloud functions deploy
command, that source is stored in a Cloud Storage bucket. Cloud Build
then automatically builds your code into a container image and pushes that image
to an image registry .
The process of building the image is entirely automatic and requires no direct
input from you. All the resources used in the build process execute in
your own user project.
Executing the build process within your project means that:
You have direct access to all build logs.
There is no preset build-time quota, although Cloud Build does have its
own default concurrency quota .
You can view the current container image and the previously deployed
container images, both of which are stored in Artifact Registry.
Cloud Storage is used in your project to store the source code directory
for your functions. Note the following:
If you create a function using the Google Cloud CLI, an upload bucket is created to hold your
source code. This upload bucket is named
gcf-v2-uploads- PROJECT_NUMBER - REGION .cloudfunctions.appspot.com .
After the code is uploaded, function code is stored in a separate
source bucket:
If you're using default encryption, this bucket is named
gcf-v2-sources- PROJECT_NUMBER - REGION .
If you're protecting your data with CMEK ,
the bucket is named gcf-v2-sources- PROJECT_NUMBER - REGION - CMEK_KEY_HASH .
Both source and upload buckets have no retention period.
Note: If you accidentally delete a function, you can restore it
using the source files from the gcf-sources bucket by downloading the zip file
and redeploying it. Note that the gcf-sources bucket retains only the last two
versions of the source code. When cleaning up, deleting the function and
disabling the Cloud Functions API won't automatically delete the gcf-sources
bucket. To fully remove all function-related resources, you must
manually delete the gcf-sources bucket.
Characteristics of the build process
The build process has the following characteristics:
The Cloud Build API
must be enabled for your project.
To enable the API manually, click the earlier link, select your project from
the drop-down menu, and follow the prompts to enable the UI.
Because the entire build process takes place within the context of your project,
the project is subject to the pricing of the included resources:
For Cloud Build pricing, see the Pricing
page. This process uses the default instance size of Cloud Build, as these
instances are pre-warmed and are available more quickly. Cloud Build
does provide a free tier: review the pricing document for further
details.
For Cloud Storage pricing, see the Pricing page.
Cloud Storage does provide a free tier: review the pricing
document for further details.
For Artifact Registry pricing, see the
Pricing page.
Because the build process is subject to billing, your project must
have a Cloud Billing Account
attached to it.
Note: If you are using
gcp.resourceLocations in your organization policy
constraints, you should include the appropriate multi-region location.
For example, if you are deploying in any of the us regions, you should include
us-locations . This allows Cloud Build to access the Artifact Registry
storage bucket.
View your build image logs
A key benefit of having the build image process in your user project is access
to build logs. You can use gcloud CLI or the Google Cloud console
to reach the logs, which are available through Cloud Logging .
gcloud
Deploy your function using the gcloud functions deploy
command .
The URL of the logs is shown as part of the response in your terminal
window. For example:
Deploying function ( may take a while - up to 2 minutes ) ...⠹
**For Cloud Build Stackdriver Logs**, visit:
https://console.cloud.google.com/logs/viewer?project = & advancedFilter = resource.type%
3Dbuild%0Aresource.labels.build_id%3D38d5b662-2315-45dd-8aa2-
380d50d4f5e8%0AlogName%3Dprojects%2F %
2Flogs%2Fcloudbuild
Deploying function ( may take a while - up to 2 minutes ) ...done.
Google Cloud console
To view function logs in the Cloud Run page:
Go to Cloud Run
Click the chosen function in the displayed list.
Click the LOGS tab to get the request and container logs for all
revisions of this function. You can filter by log severity level.
Image registry
Artifact Registry is used to store the
images built from your function source code. Images are stored in a repository
named REGION -docker.pkg.dev/ PROJECT_ID /gcf-artifacts
located in the same project where your function is created.
To specify a self-managed Artifact Registry repository, run the following command:
gcloud functions deploy FUNCTION_NAME \
--docker-repository = REPOSITORY \
[ FLAGS... ]
Replace the following:
FUNCTION_NAME : The name of the function.
REPOSITORY : The fully qualified Artifact Registry
repository name, in the following format:
projects/PROJECT_NAME/locations/LOCATION/repositories/REPOSITORY .
When specifying a Artifact Registry repository located in a different
project or region you may need to consider additional configurations:
IAM configurations:
IAM configurations: Ensure that the build service account has
authorized access to read and write to the REPOSITORY .
Network configurations: Ensure that the target REPOSITORY is
reachable from the current project configuration.
VPC Service Controls configurations: Ensure that the build service account can
reach the target REPOSITORY within the VPC-SC perimeter.
Data residency constraints: Specifying a REPOSITORY in a different
region from where your function is located will lead to data transfer across regions.
Secure your build with private pools
To allow your functions to use dependencies (for example, npm packages),
Cloud Build has by default unlimited internet access during the build
process. If you have set up a VPC Service Controls (VPC SC) perimeter and want to limit
the build's access only to dependencies stored inside the perimeter, you can use
the Cloud Build private worker pools
feature.
In general, follow these steps to set up your private pool:
Create your private worker pool. See Create and manage private pools .
Configure your VPC Service Controls perimeter. See
Using VPC Service Controls .
If your private worker pool is in a different project than your function,
you need to grant the Cloud Functions Service Agent
Service Account ( service-FUNCTION_PROJECT_NUMBER@gcf-admin-robot.iam.gserviceaccount.com )
the cloudbuild.workerPoolUser role so that the Cloud Build
service can access the worker pool.
gcloud projects add-iam-policy-binding PRIVATE_POOL_PROJECT_ID \
--member serviceAccount:service- FUNCTION_PROJECT_NUMBER @gcf-admin-robot.iam.gserviceaccount.com
--role roles/cloudbuild.workerPoolUser
Replace FUNCTION_PROJECT_NUMBER with the number of the project where
the function runs and PRIVATE_POOL_PROJECT_ID with the ID of
the project in which the worker pool is located. See Running builds in
a private pool
for more information.
Deploy your function to build using a private pool:
gcloud functions deploy FUNCTION_NAME \
--runtime RUNTIME \
--build-worker-pool PRIVATE_POOL_NAME
[ FLAGS... ]
Replace FUNCTION_NAME with the name of the function, RUNTIME
with the runtime you are using, and PRIVATE_POOL_NAME with the name
of your pool.
To stop using a given private pool and instead use the default
Cloud Build pool, use the --clear-build-worker-pool flag when
re-deploying.
gcloud functions deploy FUNCTION_NAME \
--runtime RUNTIME \
--clear-build-worker-pool
[ FLAGS... ]
Replace FUNCTION_NAME with the name of the function and
RUNTIME with the runtime you are using.
Secure your build with a custom service account
Your function's source code is sent to Cloud Build to be
containerized. The containerized function is stored in Artifact Registry and
deployed to Cloud Run as a service. Cloud Run functions leverages
Cloud Build when building and deploying your Cloud Run function. By
default, Cloud Run functions uses the default Cloud Build service
account as the principal when performing your build.
Starting in July 2024, Cloud Build
changed the default behavior for how Cloud Build uses service accounts
in new projects. As a result of this change, new projects deploying functions
for the first time may be using a default Cloud Build service account with
insufficient permissions for building a function.
For Google Cloud projects created before July 2024, Cloud Build uses the
legacy Cloud Build service account. This service account was designed to
help users execute a broad range of use cases that may be too permissive for
your project's needs. If you want to move your existing projects away from this
service account, you can take the following steps to further secure your
functions build environment:
Prevent the legacy Cloud Build service account from being used for
the build
Prevent the default Compute service account from being used for the build
Configure a new service account with appropriately scoped permissions to be used for the build
Prevent the legacy Cloud Build service account from being used for build
Warning: This will temporarily break all deployments until you assign a new
service account.
You can verify that your project is using the legacy Cloud Build service
account by inspecting the details of your function's build. The default build
service account has the following format:
PROJECT_NUMBER @cloudbuild.gserviceaccount.com .
You can forcibly disable use of this service account by setting the org policy
constraint cloudbuild.useBuildServiceAccount to Not Enforced . Alternatively,
removing all of its role grants will limit its ability to access Google Cloud
resources.
Prevent the default compute service account from being used for build
Warning: This will temporarily break all deployments until you assign a new
service account.
The default compute service account has the format
PROJECT_NUMBER -compute@developer.gserviceaccount.com .
You can disable it from being the default used for the build by setting the
org policy cloudbuild.useComputeServiceAccount to Not Enforced .
Alternatively, disabling this service account prevents it from being used to
access Google Cloud resources.
Provide a service account for building functions
As part of a function's configuration, you can specify a build service account
when deploying the function. When the legacy Cloud Build service account
and the default compute service account are prevented from being used for build,
you must specify a build service account in order to deploy a function, as
described in this section.
If you are impacted by the changes described in
Cloud Build Service Account Change ,
you can do one of the following:
Review the Cloud Build guidance on changes to the default service account and opt
out of these changes .
Add the Cloud Build Account role ( roles/cloudbuild.builds.builder ) to the default Compute Engine service account.
Create a custom Cloud Build service account for function deployments.
Here are some scenarios where you may want to provide a different service
account to be used when Cloud Build builds your function:
You want more control of which service accounts to add to your VPC-SC
perimeter.
You want Cloud Build to run with different
permissions
than what the default service account has without having to revoke each
permission individually.
You want to set granular Cloud Build permissions specifically for your
functions, not share a Cloud Build service account that is optimized for
other purposes.
Your organization disabled the usage of the default service account.
The following sections show how to create a custom Cloud Build service
account for function deployments.
Create a service account
Create a new service account as described in Create a service account .
Grant Permissions
The service account you use will need the following roles:
roles/logging.logWriter —
Required to store build logs in Cloud Logging.
roles/artifactregistry.writer —
Required to store build images in Artifact Registry. For the default behavior, the service account needs access to repositories named "gcf-artifacts" and "cloud-run-source-deploy". Access to the repositories can be set on the repository's IAM policy. You can alternatively provide your own artifact repository through dockerRepository field.
roles/storage.objectViewer —
Required to retrieve the function source from the Cloud Storage bucket,
and to store build images in Container Registry. For the default behavior, the service account needs access to buckets named "run-sources-*", "gcf-v2-sources-*" and "gcf-v2-uploads-*". This can be accomplished by adding an IAM condition to the role grant such as (resource.type == "storage.googleapis.com/Object" && (resource.name.startsWith("projects/_/buckets/gcf-v2-sources-") || resource.name.startsWith("projects/_/buckets/gcf-v2-uploads-") || resource.name.startsWith("projects/_/buckets/run-sources-")))
Grant the following roles using the
Google Cloud CLI ,
or use
Google Cloud console .
gcloud projects add - iam - policy - binding PROJECT_ID \
-- member = serviceAccount: SA_EMAIL \
-- role = roles / logging . logWriter
gcloud projects add - iam - policy - binding PROJECT_ID \
-- member = serviceAccount: SA_EMAIL \
-- role = roles / artifactregistry . writer
gcloud projects add - iam - policy - binding PROJECT_ID \
-- member = serviceAccount: SA_EMAIL \
-- role = roles / storage . objectViewer
Replace the following:
PROJECT_ID : Your Google Cloud project ID .
SA_EMAIL : The email address of your
service account .
Note: If you are using a service account from a different project, see
Configure user-specified service accounts .
VPC Service Controls considerations
If you have a VPC Service Controls perimeter protecting both your project and the Cloud Run functions API, and if you're
using the Compute Engine default service account as the Cloud Build Service Account role for Cloud Run functions,
you must create the following ingress rules:
Allow Compute Engine default service account ingress to all methods on both Cloud Storage and Cloud Logging APIs.
Allow the service account service-[PROJECT_NUMBER]@gcf-admin-robot.iam.gserviceaccount.com ingress
to all methods on both Cloud Storage and Cloud Logging APIs.
Deploy a function with a custom service account
To pass in a user-created service account, to be used by Cloud Build, when deploying your function, run the following gcloud command:
The --build-service-account flag specifies an
IAM service account whose credentials will be used for the build step. If a
custom service account is not provided, the function uses the project's default
service account for Cloud Build.
You can optionally use a
private pool ,
which you specify using the --build-worker-pool flag.
gcloud functions deploy FUNCTION_NAME \
-- gen2 \
-- region = REGION \
-- project = PROJECT_ID \
-- runtime = RUNTIME \
-- entry - point = CODE_ENTRYPOINT \
-- build - service - account = projects / PROJECT_ID / serviceAccounts / SA_EMAIL \
-- memory = 256 Mi \
-- trigger - http \
-- source = .
Replace the following:
FUNCTION_NAME : The name under which you deployed your function.
REGION : The name of the Google Cloud region where you want to deploy your function
(for example, us-west1 ).
PROJECT_ID : Your Google Cloud project ID .
RUNTIME : The runtime ID of a
supported runtime version to run
your function, for example, nodejs18 .
CODE_ENTRYPOINT : The
entry point to your function in your
source code. This is the code that will be executed when your function runs.
SA_EMAIL : The email address of your
service account .
Note: There is no way to set a single service account across all functions.
Grant the Cloud Build service account access to the VPC Service Controls perimeter
Cloud Run functions uses Cloud Build to build your source code
into a runnable container. To use Cloud Run functions with
VPC Service Controls, you must configure your Cloud Build service account
(whether default or custom ) to have
access to your service perimeter.
Note: The default Cloud Build service account may have changed starting in
May 2024. Review Cloud Build service account change
to confirm the default service account for your project before proceeding.
Find the service account name
If you are using the default Cloud Build service account, you can find its
name as follows:
Use the IAM page in the Google Cloud console to find the
Cloud Build service account.
Open IAM
Make sure the correct project is displayed in the project drop-down.
Search for cloudbuild.gserviceaccount.com . The email address in the form
PROJECT_NUMBER @cloudbuild.gserviceaccount.com is the
service account name.
If you have a
custom Cloud Build service account ,
use that name instead.
Grant the service account access to the service perimeter
Once you have the service account name, follow the guide at
Limit access by user or service account
to create an access level for the service account. Then, follow
Adding an access level to an existing perimeter
to add the access level to your service perimeter.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
