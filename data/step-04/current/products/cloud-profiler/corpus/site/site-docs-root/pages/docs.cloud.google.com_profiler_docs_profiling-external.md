---
title: "Profiling applications running outside Google Cloud \_|\_ Cloud Profiler \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/profiler/docs/profiling-external
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/profiler/docs
source_metadata:
  url: https://docs.cloud.google.com/profiler/docs/profiling-external
  title: "Profiling applications running outside Google Cloud \_|\_ Cloud Profiler\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Profiler
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Profiling applications running outside Google Cloud
This page describes how to profile applications running outside Google Cloud.
In this scenario, your application and the Cloud Profiler agent
run outside Google Cloud, but you use the Cloud Profiler
interface to analyze the profiling data.
Using the Profiler interface to analyze profiling data
requires a Google Cloud project. The profiling agent running elsewhere
must be able to send the profiles back for analysis. To enable this, you must:
Create a Google Cloud project and enable the API.
Obtain credentials for the profiling agent to use when uploading profiles.
Configure the agent to use the credentials and the ID of the
Google Cloud project.
Create a Google Cloud project
In the Google Cloud console, on the project selector page,
click Create project to begin creating a new
Google Cloud project.
Roles required to create a project
To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains
the resourcemanager.projects.create permission. Learn how to grant
roles .
Go to project selector
Enable the Profiler API
Enable the Cloud Profiler API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
If API enabled is displayed, then the API is already enabled. If not, click the Enable button.
Obtain credentials for the agent
There are two ways to obtain credentials for the agent to use:
Let the agent use a service account with private-key authentication
Let the agent use application default credentials (ADC).
Using service accounts
To enable the agent to use a service account with private-key authentication,
you must:
Create a service account. For example, using the Google Cloud CLI:
gcloud iam service-accounts create MY_SVC_ACCT_ID --display-name "my service account"
See Creating a service account for more information.
Grant the service account the roles/cloudprofiler.agent
role , so that it can write profiling data. For example, using
the Google Cloud CLI:
gcloud projects add - iam - policy - binding GCP_PROJECT_ID \
--member serviceAccount: MY_SVC_ACCT_ID @ GCP_PROJECT_ID .iam.gserviceaccount.com \
--role roles/cloudprofiler.agent
See Granting roles to service accounts for more
information.
Create a JSON key for the service account. For example, using the
Google Cloud CLI:
gcloud iam service - accounts keys create \
~/ key . json \
--iam-account MY_SVC_ACCT_ID @ GCP_PROJECT_ID . iam.gserviceaccount.com
See Creating service account keys for more
information.
On the machine where the profiling agent will run:
Put a copy of the file containing the JSON key you just created.
Set the environment variable GOOGLE_APPLICATION_CREDENTIALS
to the fully qualified name of the file containing the JSON key.
This environment variable must be visible to the process running
the profiling agent, so if you use a script or Dockerfile to run
the process, include the environment variable there.
Using application default credentials
To enable the agent to use application default credentials,
you obtain user-access credentials via a web flow
and put them where the Application Default Credentials library expects them.
These credentials act as a proxy for a service account.
To use application default credentials, run the following Google Cloud CLI command:
gcloud auth application-default login
and follow the steps this command guides you through.
Linking the agent to a Google Cloud project
The profiling agent must be configured to specify the ID of
your Google Cloud project so it can upload profiles.
The mechanism for doing this depends on the language.
Go
Specify an additional parameter, ProjectID , in the profiler.Config
object described in Profiling Go applications :
profiler . Config { ProjectID : " GCP_PROJECT_ID " , ... }
Java
Specify an additional Java agent configuration flag,
cprof_project_id , on the Java invocation:
- cprof_project_id = GCP_PROJECT_ID
When your application isn't able to access the Compute Engine metadata
server, messages similar to the following are displayed:
Error making HTTP request for 169.254.169.254:80/computeMetadata/v1/instance/zone
To stop these messages, add -cprof_zone_name= VALUE to your agent
configuration flags and restart your application. For this scenario,
replace VALUE with a descriptive string such as "test".
Node.js
Specify an additional parameter, projectID , in the serviceContext
object described in Profiling Node.js applications :
projectId : ' GCP_PROJECT_ID ' ,
serviceContext : {
...
}
Python
Specify an additional parameter, project_id , in the start
method call described in Profiling Python applications :
googlecloudprofiler . start ( ... , project_id = ' GCP_PROJECT_ID ' )
What's next
Select the profiles to analyze
Interact with the flame graph
Filter the flame graph
Focus the flame graph
Compare profiles
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
