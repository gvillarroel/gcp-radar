---
title: "Understand Cloud Tasks \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/tasks/docs/dual-overview
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/tasks/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/tasks/docs/dual-overview
  title: "Understand Cloud Tasks \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Tasks
Guides
Send feedback
Understand Cloud Tasks
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Tasks lets you separate out pieces of work that can be
performed independently, outside of your main application flow, and send them
off to be processed, asynchronously, using handlers that you create. These
independent pieces of work are called tasks . For example, you need to update a
database as part of processing a user request, but updates can be time-consuming.
Offloading that detail as a task lets you return from the request more quickly.
Key Point: Cloud Tasks is designed for asynchronous work. While
Cloud Tasks guarantees delivery of the task itself, it doesn't
provide strong guarantees around the timing of task delivery and is therefore
unsuitable for interactive applications where a user is waiting for the result.
The offloaded task is added to a queue , which persists the task until it is
successfully executed or the number of
retries is exhausted, after which it is
deleted. Based on your initial configuration, the queue can also act as a
dispatch flow control. You create and configure the queue which is then managed
by the Cloud Tasks service. Once tasks are added, the queue
dispatches them and makes sure they are reliably processed by your workers.
Complexities associated with that process, such as user-facing latency costs,
server crashes, resource consumption limitations, and retry management, are
handled by the service.
Cloud Tasks is designed to provide "at least once" delivery;
that is, if a task is successfully added, the queue will deliver it at least
once. In some rare circumstances, multiple task execution is possible, so your
code must ensure that there are no harmful side-effects of repeated execution.
Your handlers should be
idempotent .
The tasks themselves are made up of a unique name and configuration information
and, optionally, any data from the initial request, called the payload,
necessary to process the request. As the payload is sent in the request body,
tasks that include payloads must use POST or PUT as their HTTP method.
To access the Cloud Tasks service using the Cloud Tasks API, you
must have a Google Cloud project .
Features
Using Cloud Tasks, you can dispatch asynchronous work items with the
following controls:
Schedule specific delivery times
Manage delivery rates
Configure retry behavior
Access and manage individual tasks in a queue
Enable task deduplication
General workflow
The general workflow is as follows:
You create a worker to process the tasks.
You create a queue.
You create tasks programmatically and add them to the queue.
The Cloud Tasks service returns an OK to the originating
application. This indicates that the task has been successfully written
to Cloud Tasks storage, making the create task request both
highly available and durable.
A task is passed to the worker.
The worker processes the task.
To complete the sequence, the worker returns a 2xx success status
code to the Cloud Tasks service.
Once a task has been handed off to the queue, no data is made available to the
initial request.
Note: The Cloud Tasks API provides an App Engine-independent
interface to the App Engine Task Queue service. Queues that are
accessible using the App Engine SDK are accessible through the
Cloud Tasks API, and queues that are accessible through the Cloud Tasks API
are accessible using the App Engine SDK.
Use cases
Typical use cases include the following:
Speeding user response times by delegating potentially slow background
operations like database updates to a worker
Preserving requests in the context of unexpected production incidents
Helping smooth traffic spikes by removing non-user-facing tasks from the main
user flow
Managing third-party API call rates
Cloud Tasks queues with HTTP targets
In the case of generic HTTP targets, the Cloud Tasks service forwards
the task request to the worker, located at any generic HTTP endpoint, based on
how the task is configured. This endpoint could be on
Cloud Run functions , Cloud Run ,
GKE ,
Compute Engine , or even an on-premises web server, based
on how the task is configured. These queues dispatch requests at a reliable,
configurable rate. They ensure reliable task execution; upon success, all
workers must send an HTTP response code (200-299) to the Cloud Tasks
service before the default timeout deadline of 10 minutes, with a maximum of 30
minutes. If a different response is sent, or no response, the task is retried.
The target must manage scaling workers and cleaning up tasks once they are complete.
If your target requires authentication, you must set up two
service accounts ,
one for your application, the client, and one for the queue itself. Both accounts
must have been granted the requisite permissions, and an identifier for the
client service account must be included in the task request. See
Create HTTP target tasks for more
information.
Cloud Tasks queues with App Engine targets
Cloud Tasks is compatible with the following App Engine
environments:
App Engine standard environment second-generation runtimes
App Engine flexible environment
Users of App Engine first-generation runtimes who use the
Task Queue API can migrate to
Cloud Tasks. To learn how, see
Migrate off legacy bundled services .
Users of App Engine first-generation runtimes who don't use the
bundled task service can upgrade to second-generation runtimes to use
Cloud Tasks.
In the case of App Engine targets, the Cloud Tasks service
also forwards the task request to the handler, but this worker is located within
App Engine. So all queues that target App Engine handlers must
have an App Engine app .
The handlers must run in the region where the
App Engine app runs. This region also serves as the
LOCATION_ID parameter for your Cloud Tasks requests.
The tasks are routed based on how the task (or, less commonly, the queue itself)
is configured. The queues dispatch requests at a reliable, configurable rate.
They guarantee reliable task execution - upon success, all workers must send an
HTTP response code (200-299) to the Cloud Tasks service, in this
instance before a deadline based on the
instance scaling
type of the service: 10 minutes for automatic scaling or up to 24 hours for
manual scaling. If a different response is sent, or no response, the task is
retried.
Because the handlers are part of App Engine, the Cloud Tasks
service itself can do much of the process management for the task, scaling
workers up and down in relation to traffic and deleting tasks when they are
completed.
Note: Two App Engine locations, called europe-west and
us-central in App Engine commands, are called, respectively,
europe-west1 and us-central1 in Cloud Tasks
commands.
Supported regions by target
If your target is an HTTP/S endpoint , Cloud Tasks is available
in all supported Google Cloud regions for
Cloud Tasks.
If your target is an App Engine application located within your
current project:
A task targeting App Engine can only be created in the project's
App Engine region .
A Google Cloud project can contain only one App Engine app,
and the region where the App Engine app is located cannot be changed
once the app is created.
App Engine is regional which means the infrastructure that runs
your app is located in a specific region. If you want to distribute compute and
queues across multiple regions, you should target an HTTP/S endpoint instead.
If you are not using App Engine as a target, you don't need to
deploy an App Engine app, and you can disable any existing
App Engine app.
Task deduplication
Task deduplication is achieved by assigning a unique name to a task. If you
attempt to create a task with a name that already exists in the queue, the
creation request will fail. This prevents the same task from being added more
than once.
Cloud Tasks remembers task names for up to 24 hours after the
task has been deleted from the queue. Attempting to re-create a task with the
same name during this time will also result in a failed request.
If you don't provide a name when creating a task, Cloud Tasks will
generate a unique name for it, and deduplication is unnecessary.
Key terms
The following terms describe key Cloud Tasks capabilities.
Term
Definition
attempt
An attempt to run a task.
attempt dispatch
The moment when Cloud Tasks has sent the task to its target.
attempt response
A response from a worker which indicates that the work associated with the
task completed successfully or failed.
handler
The application code (also referred to as a worker ) responsible for
processing tasks. When Cloud Tasks dispatches a task from the queue,
it sends a request to a target service, and the code at that endpoint which
receives and executes the task is the handler.
queue
A set of tasks with the same target type managed by a single configuration.
rate limits
Determines the rate at
which tasks can be dispatched by a queue, regardless of whether the dispatch is
a first task attempt or a retry.
retry
Multiple attempts to run a task. The number of retries is set using
retry parameters .
target type
Where and how a task is processed. You can target an HTTP endpoint or an
App Engine application.
task
The fundamental unit of work that you want to execute asynchronously. It
represents a single, independent piece of work that you add to a queue to be
processed outside of your main application flow by Cloud Tasks.
worker
A service which processes tasks. See handler .
Observability
You can monitor and analyze Cloud Tasks activity and growth by
using monitoring, logging, and diagnostic tools provided by Google Cloud Observability. For
more information see Observability in Cloud Tasks .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
