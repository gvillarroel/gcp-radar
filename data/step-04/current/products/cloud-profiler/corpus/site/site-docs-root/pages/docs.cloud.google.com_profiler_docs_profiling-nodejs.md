---
title: "Profiling Node.js applications \_|\_ Cloud Profiler \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/profiler/docs/profiling-nodejs
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/profiler/docs
source_metadata:
  url: https://docs.cloud.google.com/profiler/docs/profiling-nodejs
  title: "Profiling Node.js applications \_|\_ Cloud Profiler \_|\_ Google Cloud Documentation"
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
Profiling Node.js applications
This page describes how to modify your Node.js application to capture
profiling data and have that data sent to your Google Cloud
project. For general information about profiling, see
Profiling concepts .
Note: If you plan to profile applications that are running outside of
Google Cloud, then you need to perform some configuration steps that
aren't discussed in this document. For example, you must configure the
credentials for the profiling agent and you must link the agent to your
project. For information about these steps, see
Profiling applications running outside Google Cloud .
Profile types for Node.js:
Heap
Wall time
Supported Node.js language versions:
Node.js 14 or higher
For the Node.js release policy, see
Release schedule .
Supported profiling agent versions:
The most recent release of the agent is supported. In general, releases older
than one year aren't supported. We recommend that you use the most
recently released version of the agent.
Supported operating systems:
Linux. Profiling Node.js applications is supported for Linux kernels
whose standard C library is implemented with glibc or with musl . For
configuration information specific to Linux Alpine kernels, see
Running on Linux Alpine .
Supported environments:
Compute Engine
Google Kubernetes Engine (GKE)
App Engine flexible environment
App Engine standard environment
Outside of Google Cloud (For information on the additional
configuration requirements, see
Profiling applications running outside of Google Cloud .)
Enabling the Profiler API
Before you use the profiling agent, ensure that the underlying
Profiler API is enabled. You can check the status of the API and enable
it if necessary by using either the Google Cloud CLI or
the Google Cloud console:
gcloud CLI
If you have not already installed the Google Cloud CLI on your
workstation, see the Google Cloud CLI documentation .
Run the following command:
gcloud services enable cloudprofiler.googleapis.com
For more information, see
gcloud services .
Google Cloud console
Enable the Cloud Profiler API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
If API enabled is displayed, then the API is already enabled. If not, click the Enable button.
Grant IAM role to service account
If you are deploying your application on Google Cloud resources and if you
are using the default service account and haven't modified the role grants
to that service account, then you can skip this section.
If you do any of the following, then you need to grant the service account
the IAM role of
Cloud Profiler Agent ( roles/cloudprofiler.agent ) :
You are using the default service account but modified its role grants.
You are using a user-created service account.
You are using workload identity ,
grant the Cloud Profiler Agent role to the Kubernetes service account.
You can grant an IAM role to a service account by using the
Google Cloud console or the Google Cloud CLI. For example, you could use the
gcloud projects add-iam-policy-binding
command:
gcloud projects add-iam-policy-binding GCP_PROJECT_ID \
--member serviceAccount: MY_SVC_ACCT_ID @ GCP_PROJECT_ID .iam.gserviceaccount.com \
--role roles/cloudprofiler.agent
Before you use the previous command, replace the following:
GCP_PROJECT_ID : Your project ID.
MY_SVC_ACCT_ID : The name of your service account.
For detailed information, see
Manage access to projects, folders, and organization .
Note: If the service account used by the profiling agent doesn't have the
IAM role of Cloud Profiler Agent, then your
Google Cloud project won't have any profile data.
Using Cloud Profiler
In all of the supported environments, you use the Profiler by
installing the package @google-cloud/profiler , adding a require
statement to your application, and then deploying the application in the
usual way.
Before you install @google-cloud/profiler
The package @google-cloud/profiler depends on a built-in module. Prebuilt
binaries for this built-in module are available for Linux and Alpine Linux for
Node 14 and 16. No additional dependencies are required.
@google-cloud/profiler uses node-pre-gyp to determine which prebuilt binary
to install.
Note: If your build system doesn't match the Node version,
libc version, architecture, or platform for the system where you plan to deploy
your application, then you must specify the correct value in the
npm install command. For details, see
node-pre-gyp .
When using @google-cloud/profiler on other environments that don't have
prebuilt binaries, the module
node-gyp is used to build binaries.
For information about the dependencies required to build binaries with
node-gyp , see node-gyp 's installation
documentation .
Installation
To install the latest version of Cloud Profiler, do the following:
npm install @google-cloud/profiler
If you are also using the Trace agent, when you
modify your application, import the Profiler package after the
Trace agent package ( @google-cloud/trace-agent ).
Compute Engine
For Compute Engine, do the following:
Install the latest version of Cloud Profiler:
npm install @google-cloud/profiler
Modify your application require code to
create a serviceContext object that assigns to service the name
of the service being profiled. Optionally, you can assign to
version the version of the service being profiled.
See Service name and version arguments for more
information on these configuration options:
require ( ' @google-cloud/profiler ' ). start ({
serviceContext : {
service : 'your-service' ,
version : '1.0.0' ,
},
});
GKE
For GKE, do the following:
Modify your Dockerfile to install the Profiler package:
FROM node:10
...
RUN npm install @google-cloud/profiler
Modify your application require code to
create a serviceContext object that assigns to service the name
of the service being profiled. Optionally, you can assign to
version the version of the service being profiled.
See Service name and version arguments for more
information on these configuration options:
require ( ' @google-cloud/profiler ' ). start ({
serviceContext : {
service : 'your-service' ,
version : '1.0.0' ,
},
});
App Engine
For App Engine flexible environment and for App Engine
standard environment, the require code is similar to the following:
require ( ' @google-cloud/profiler ' ). start ();
In App Engine, the service and version parameters are derived from the
environment, so you don't have to specify them. Therefore, you don't need to
create a serviceContext object.
Analyzing data
After Profiler has collected data, you can view and analyze
this data using the Profiler interface.
In the Google Cloud console, go to the Profiler page:
Go to Profiler
You can also find this page by using the search bar.
Service name and version arguments
When you load the Profiler agent, you specify a service-name argument and an
optional service-version argument to configure it.
Note: In the App Engine flexible environment, you do not have to specify
these arguments; they are derived from the environment.
The service name lets Profiler collect profiling data for all
replicas of that service. The profiler service ensures a
collection rate of one profile per minute, on average, for each service
name across each combination service versions and zones.
For example, if you have a service with two versions running across
replicas in three zones, the profiler will create an average of 6 profiles
per minute for that service.
If you use different service names for your replicas, then your service will
be profiled more often than necessary, with a correspondingly higher overhead.
When selecting a service name:
Choose a name that clearly represents the service in your application
architecture. The choice of service name is less important if you only run
a single service or application. It is more important if your application
runs as a set of micro-services, for example.
Make sure to not use any process-specific values, like a process ID,
in the service-name string.
The service-name string must match this regular expression:
^[a-z0-9]([-a-z0-9_.]{0,253}[a-z0-9])?$
A good guideline is to use a static string like imageproc-service as the
service name.
The service version is optional. If you specify the service version,
Profiler can aggregate profiling information from multiple
instances and display it correctly. It can be used to mark different versions
of your services as they get deployed. The Profiler UI lets you
filter the data by service version; this way, you can compare the performance
of older and newer versions of the code.
The value of the service-version argument is a free-form string, but values
for this argument typically look like version numbers, for example,
1.0.0 or 2.1.2 .
Agent logging
The profiling agent can report logging information. To enable logging,
set the logLevel option when starting the agent.
The supported logLevel values are:
0 : disables all agent logging.
1 : enables error logging.
2 : enables warning logging (default).
3 : enables info logging.
4 : enables debug logging.
Set the logLevel value in the same object that provides the service context:
require ( '@google-cloud/profiler' ). start ( {
serviceContext : { ... }
logLevel : 3
} );
Running with Linux Alpine
The Node.js profiling agent for Linux Alpine is supported only for
Google Kubernetes Engine configurations.
Build error
If you run npm install and the build fails with the following error, then
your Dockerfile is missing some build dependencies:
ERR! stack Error: not found: make
To resolve this problem, add the following statement to your Dockerfile's
build stage:
RUN apk add python3 g++ make
Authentication error
If you use Docker images that run with
Linux Alpine
(such as golang:alpine or just alpine ),
you might see the following authentication error:
connection error : desc = "transport: authentication handshake failed: x509: failed to load system roots and no roots provided"
Note that to see the error you must have agent logging enabled.
The error indicates that the Docker images with Linux Alpine don't have the
root SSL certificates installed by default. Those certificates are necessary for
the profiling agent to communicate with the profiler API. To resolve
this error, add the following apk command to your Dockerfile:
FROM alpine
...
RUN apk add --no-cache ca-certificates
You then need to rebuild and redeploy your application.
Known issues
The profiling agent for Node.js interferes with the normal exit of the
program; it can take up to an hour for the program to exit after
all the tasks in the program have completed. When you issue a SIGINT, for
example by using Ctrl-C , this causes the process to terminate gracefully.
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
