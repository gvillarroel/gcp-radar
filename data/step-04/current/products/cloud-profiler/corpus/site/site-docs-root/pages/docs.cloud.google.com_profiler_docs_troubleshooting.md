---
title: "Troubleshoot \_|\_ Cloud Profiler \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/profiler/docs/troubleshooting
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/profiler/docs
source_metadata:
  url: https://docs.cloud.google.com/profiler/docs/troubleshooting
  title: "Troubleshoot \_|\_ Cloud Profiler \_|\_ Google Cloud Documentation"
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
Troubleshoot
This page shows you how to resolve issues with Cloud Profiler.
Errors with your Google Cloud project configuration
This section lists configuration issues that you might encounter and provides
suggestions for how to fix each of them.
Cloud Profiler API is disabled
The following error occurs when the Profiler API isn't enabled
for your Google Cloud project:
failed to create a profile, will retry: rpc error: code = PermissionDenied
desc = Cloud Profiler API has not been used in project 012345 before or it is disabled.
To resolve this issue, your Google Cloud project must have the
Profiler API enabled:
Enable the Cloud Profiler API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
If API enabled is displayed, then the API is already enabled. If not, click the Enable button.
Caller does not have permission
The following error occurs when you don't have the permission to write
profiling data to a Google Cloud project:
failed to create a profile, will retry: rpc error: code = PermissionDenied
desc = The caller does not have permission.
To resolve this issue,
ask your administrator to grant you additional permissions on that project.
For a detailed list of the required permissions and roles,
see Access control .
Errors with Node.js
This section lists issues that you might encounter when using the Node.js
profiling agent and provides suggestions for how to fix each of them.
Application doesn't exit normally with Node.js
The profiling agent for Node.js interferes with the normal exit of the
program; it can take up to an hour for the program to exit after
all the tasks in the program have completed.
To resolve this issue,
issue a SIGINT signal, for example by using Ctrl-C . When you issue a
SIGINT signal, the process terminates gracefully.
Errors with Python
This section lists issues that you might encounter when using the Python
profiling agent and provides suggestions for how to fix each of them.
NotImplementedError exception with Python
The following exception is thrown during execution of the start
function when the application is run in a non-Linux environment:
NotImplementedError
To resolve this issue, run your application in a Linux environment.
ValueError exception with Python
The following exception is thrown during start when the function
arguments are invalid, when necessary information can't be determined from the
environment variables and arguments, or when both CPU time and Wall time
profiling are disabled:
ValueError
To resolve this issue, check all of the following:
Ensure the service name and version meet the requirements defined in
Service name and version arguments .
If Wall profiling is enabled, make sure start
is called from the main thread.
Ensure that you are using a supported version of Python and
that CPU time or Wall time profiling is enabled. For more
information, see start function .
Check that you have specified the project_id
parameter to start if you are running outside of
Google Cloud. For more information, see
start function .
Resource temporarily unavailable errors with Python
The error log contains the following entries after enabling
Profiler:
BlockingIOError: [Errno 11] Resource temporarily unavailable
Exception ignored when trying to write to the signal wakeup fd
These messages occur when an application registers with the signal wakeup
file descriptor,
signal.set_wakeup_fd .
By default, if the file descriptor's buffer fills then a warning is
logged to stderr.
When Cloud Profiler collects profiles, it triggers signals with
high frequency and can cause the signal file descriptor to fill.
For the GitHub issue, see
BlockingIOError on App Engine .
To resolve this issue, do one of the following:
If your application can run safely when signals are lost, then
you can use Cloud Profiler. If you are using Python 3.7
or later and want to disable the warning messages, then pass
warn_on_full_buffer=False as a parameter to
signal.set_wakeup_fd .
If your application can't safely run when signals are lost,
then we recommend that you stop using Cloud Profiler.
Continued use might cause loss of signal numbers and excessive
entries in the error log.
Missing all profiles
There are two common reasons why you might not see any profiles:
The service isn't running long enough for profiles to be collected.
The service isn't configured for authentication.
To resolve issues related to a short run time, ensure that your service runs
continuously for at least 3 minutes.
To resolve issues related to authentication, ensure that the profiling agent
can write data to your Google Cloud project:
If your service is running on Google Cloud, then authentication is
automatic except when you deploy a container on Compute Engine. When you
deploy a container on Compute Engine, you must specify your
Google Cloud project ID in the Profiler agent
start command. For instructions, see
Linking the agent to a Google Cloud project .
If your service is running outside of Google Cloud, then you must
create a service account and link the Profiler agent to your
Google Cloud project. For more information, see
Profiling applications running outside of Google Cloud .
Note: Ensure that your service account has been granted the
IAM role of roles/cloudprofiler.agent . For information
about how to grant this role, see
Profiling applications running outside of Google Cloud .
Missing profiles of a specific type
This section lists specific configurations where profiles for one or more
profile types isn't collected. The first section contains general content
and the remaining sections list issues for specific languages.
General information
If you want to view a specific profile type but no profiles of that type
are available, then check the following:
Ensure that the profile type is supported for your application's language.
For more information, see Types of profiling available .
Ensure that you used a new service version after changing which profile
types are collected.
If you don't specify a new service version, then an existing deployment is
used and the profiling agent can't transfer the data for the newly enabled
profile type. For more information about
deployments, see Profile collection .
Ensure that the profile type is enabled. Some profile types are disabled by
default. For more information, see the individual language pages:
Profiling Go applications
Profiling Java applications
Profiling Node.js applications
Profiling Python applications .
The remaining sections of this page describe language-specific configurations
where data for one profile type isn't collected.
Go: CPU time profiles aren't collected for c-archives
When a Go application is built with the -buildmode flag set
to c-archive or c-shared , CPU time profiling is
disabled by default. Heap, contention, and thread profiles are collected.
For more information, see
GitHub issue #993: profiler not collecting CPU data for Go code in a c-archive .
To resolve this issue,
enable collection of CPU time profiles before your service calls
profiler.Start , and add a call to
signal.Notify(make(chan os.Signal), syscall.SIGPROF) .
For more information about signal.Notify , see
func Notify .
Java: Heap profiles aren't collected when multiple profilers enabled
You've enabled multiple heap profilers for a Java application and have no
profiles.
The Java heap sampler is enabled as a solo agent capability. The effect
is that only one profiler can be in use at a time. A bug has been opened
to extend Java to support multiple Heap profilers. For information about that
bug, see
Add multi-agent support for the Heap Sampling mechanism .
To resolve this issue, enable one profiler.
Python: No CPU time and no Wall profiles when using uWSGI
When
uWSGI
uses multiple workers to handle requests, the default
behavior is to perform application initialization only in the
primary ( master ) process. The forked processes don't perform the
initialization sequence.
If you configure the profiling agent in your application's initialization
sequence—for example, you configure the profiling agent in the
AppConfig.ready()
method of a Django application—then
the profiling agent isn't configured for the forked processes.
To resolve this issue,
perform application initialization in all worker processes by setting the flag
lazy-apps
to true .
Python: Have CPU time profiles, but no Wall profiles when using uWSGI
The Wall profiler depends on the Python signal module.
When the Python interpreter is compiled with thread support, the
default configuration disables custom signal handling for forked
processes.
To resolve this issue,
for uWSGI applications, enable the custom signal handling by setting the flag
py-call-osafterfork
to true .
Python: No profiles for forked processes
The profiling agents can only profile the process that started the agent.
To resolve this issue,
if your application forks processes and if you want to collect profiles from
the forked processes, then initialize the agent after forking.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
