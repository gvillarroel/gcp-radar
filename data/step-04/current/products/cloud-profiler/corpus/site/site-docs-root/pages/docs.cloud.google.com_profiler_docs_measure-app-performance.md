---
title: "Quickstart: Measure app performance \_|\_ Cloud Profiler \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/profiler/docs/measure-app-performance
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/profiler/docs
source_metadata:
  url: https://docs.cloud.google.com/profiler/docs/measure-app-performance
  title: "Quickstart: Measure app performance \_|\_ Cloud Profiler \_|\_ Google Cloud\
    \ Documentation"
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
Measure app performance
This document shows you how to set up and use Cloud Profiler. You use
the Cloud Shell to
download a sample Go program, run it with profiling enabled, and then
use the Profiler interface to explore the captured data.
If you plan to profile applications that are running outside of
Google Cloud, then you need to perform some configuration steps that aren't
discussed in this document. For information about these steps, see
Profiling applications running outside Google Cloud .
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
To open the Cloud Shell, in the Google Cloud console toolbar, click
Activate Cloud Shell :
After a few moments, a Cloud Shell session opens inside the
Google Cloud console:
Get a program to profile
The sample program, main.go , is in the golang-samples repository on
GitHub. To get it, in the Cloud Shell, run the following command
to retrieve the package of Go samples:
git clone https://github.com/GoogleCloudPlatform/golang-samples.git
The package retrieval takes a few moments to complete.
Profile the code
In the Cloud Shell, go
to the directory of sample code for Profiler in the retrieved
package:
cd golang-samples/profiler/profiler_quickstart
The main.go program creates a CPU-intensive workload to provide data to
the profiler. In the Cloud Shell, run the following command to
start the program, and leave it running:
go run main . go
This program is designed to load the CPU as it runs. It is configured
to use Profiler, which collects profiling data from the program
as it runs and periodically saves it.
A few seconds after you start the program, you see the message
profiler has started . In about a minute, two more messages are displayed:
successfully created profile CPU
start uploading profile
These messages indicate that a profile was created and uploaded to your
Cloud Storage project. The program continues to emit the last two messages,
about one time per minute, for as long as it runs.
If you receive a permission denied error message after starting the service,
see
Errors with your Google Cloud project configuration .
Profiler interface
A few moments after you start the application, Profiler
displays the initial profile data. The interface offers an array of controls
and a flame graph for exploring the profiling data:
In addition to time controls, there are options that let you choose the set
of profile data to use. When you are profiling multiple applications, you use
Service to select the origin of the profiled data.
Profile type lets you choose the kind
of profile data to display. Zone name and Version let you restrict
display to data from Compute Engine zones or versions of
the application. Weight lets you select profiles captured during peak
resource consumption.
To refine how the flame graph displays the profiles you've selected to analyze,
you add filters. In the previous screenshot, the filter bar
filter_list shows
one filter. This filter option is Metric and the filter value is CPU time .
Exploring the data
The flame graph displays the call stacks of the program. The flame graph
represents each function with a frame.
The width of the frame represents the proportion of resource consumption
by that function.
The top frame represents the entire program. This frame always shows 100%
of the resource consumption. This frame also lists how many profiles are
averaged together in this graph.
The sample program doesn't have a complicated set of call stacks;
in the preceding screenshot, you see 5 frames:
The gray frame represents the entire executable, which accounts for 100% of
the resources being consumed.
The green main frame is the Go runtime.main .
The orange main frame is the main routine of the sample program.
The orange busyloop frame is a routine called from the sample's main .
The orange main.load frame is a routine called from the sample's main .
The filter selector lets you do things like filter out functions that match
some name. For example, if there is a standard library of utility functions,
you can remove them from the graph. You can also remove call stacks
originating at a certain method or simplify the graph in other ways.
The main.go application is simple, so there isn't much to
filter out.
Even for a simple application, filters let you hide uninteresting frames so
that you can more clearly view interesting frames. For example, in the
profiling screenshot for the sample code, the gray frame is slightly
larger than the first main frame under it. Why? Is there something else
going on that's not immediately apparent because the main call stack
consumes such an overwhelming percentage of the resources?
To view what is occurring outside of the application's main routine,
add a filter that hides the call stack of the main routine.
Only 0.227% of the resource consumption occurs outside of main :
For more information on filtering and other ways to explore the profiling
data, see Select the profiles to analyze .
Note: If the Profiler agent hasn't uploaded any profiles when you
start the interface, Profiler displays the message
No data to show . The message is automatically replaced with the
Profiler interface after profile data is available.
What's next
For general information about profiling, see the following documents:
Cloud Profiler overview
Profiling concepts
Read our resources about DevOps and explore
DORA's research program .
For information on running the Cloud Profiler agent, see:
Profiling Go applications
Profiling Java applications
Profiling Node.js applications
Profiling Python applications
Profiling applications running outside Google Cloud
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
