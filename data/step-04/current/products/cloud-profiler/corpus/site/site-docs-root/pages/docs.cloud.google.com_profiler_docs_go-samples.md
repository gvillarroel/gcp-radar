---
title: "Documentation application \_|\_ Cloud Profiler \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/profiler/docs/go-samples
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/profiler/docs
source_metadata:
  url: https://docs.cloud.google.com/profiler/docs/go-samples
  title: "Documentation application \_|\_ Cloud Profiler \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Profiler
Samples
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Documentation application
This page provides guidance on using Cloud Shell to download
and run samples from the GitHub
golang-samples/profiler
repository. You can also run these samples outside of
Google Cloud. For the additional configuration steps required in this case,
see Profiling applications running outside of Google Cloud .
If you choose to run these programs, you can quickly create profiling data that
you can use to explore the capabilities of the Cloud Profiler interface.
You can also modify your copy of these samples, then redeploy and analyze the
impact of your changes using the Cloud Profiler interface.
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Enable the Cloud Profiler API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Enable the Cloud Profiler API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Start Cloud Shell
At the top of the Google Cloud console page for your project, click
Activate Cloud Shell :
A Cloud Shell session opens inside a new frame at the bottom of the
console and displays two messages and a command-line prompt. The first
message lists the Google Cloud project for your Cloud Shell
session. The second message tells you how to change the session project.
It can take a few seconds for the shell session to be initialized:
Get a program to profile
From Cloud Shell, retrieve the package of Go samples:
git clone https://github.com/GoogleCloudPlatform/golang-samples.git
The package retrieval takes a few moments to complete.
profiler_quickstart
The sample profiler_quickstart is configured to run the hello-profiler
service. The Profiler quickstart
uses this sample.
To start hello-profiler , do the following:
Change to the profiler_quickstart directory:
cd ~/gopath/src/github.com/GoogleCloudPlatform/golang-samples/profiler/profiler_quickstart
Start the service by running the following command:
go run main . go
The message profiler has started is displayed in your Cloud Shell
session a few seconds after you start the service. New messages are displayed
each time a profile is uploaded to your Google Cloud
project.
To stop the service, enter Ctrl-C.
hotapp
The sample hotapp uses an infinite loop that calls two functions, and then
the Go scheduler. The sample supports setting the flag -local_work . When this
flag is true , work, in the form of for loops, is added to individual
functions. By default, this flag is set to false .
To run the hotapp sample, do the following:
Change to the hotapp directory:
cd ~/gopath/src/github.com/GoogleCloudPlatform/golang-samples/profiler/hotapp
Start the service by running the following command:
go run main . go
If you wish to generate profile data that is consistent with
data shown in the Cloud Profiler documentation,
then use the following invocation:
go run main . go - service = docdemo - service - local_work - skew = 75 - version = 1.75.0
The message profiler has started is displayed in your Cloud Shell
session a few seconds after you start the service. New messages are displayed
each time a profile is uploaded to your Google Cloud
project.
To stop the service, enter Ctrl-C.
The section on comparing profiles used
two different deployments of the docdemo-service . In one deployment, the
skew and version were set as previously described. In the second
deployment, the skew was set to 25 and the version was set to 1.25.0 .
Troubleshooting
If you receive a permission denied error message after starting the service,
see
Errors with your Google Cloud project configuration .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
