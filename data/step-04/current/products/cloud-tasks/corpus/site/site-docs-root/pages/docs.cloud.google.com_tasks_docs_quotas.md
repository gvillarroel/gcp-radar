---
title: "Quotas and limits \_|\_ Cloud Tasks \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/tasks/docs/quotas
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/tasks/docs
source_metadata:
  url: https://docs.cloud.google.com/tasks/docs/quotas
  title: "Quotas and limits \_|\_ Cloud Tasks \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Tasks
Resources
Send feedback
Quotas and limits
Stay organized with collections
Save and categorize content based on your preferences.
This document lists the quotas and system limits that apply to
Cloud Tasks.
Quotas have default values, but you can typically request
adjustments.
System limits are fixed values that can't be changed.
Quotas
Google Cloud uses quotas to help ensure fairness and reduce
spikes in resource use and availability. A quota restricts how much of a
Google Cloud resource your Google Cloud project can use. Quotas
apply to a range of resource types, including hardware, software, and network
components. For example, quotas can restrict the number of API calls to a
service, the number of load balancers used concurrently by your project, or the
number of projects that you can create. Quotas protect the community of
Google Cloud users by preventing the overloading of services. Quotas also
help you to manage your own Google Cloud resources.
The Cloud Quotas system does the following:
Monitors your consumption of Google Cloud products and services
Restricts your consumption of those resources
Provides a way to
request changes to the quota value
and automate quota adjustments
In most cases, when you attempt to consume more of a resource than its quota
allows, the system blocks access to the resource, and the task that
you're trying to perform fails.
Quotas generally apply at the Google Cloud project
level. Your use of a resource in one project doesn't affect
your available quota in another project. Within a Google Cloud project, quotas
are shared across all applications and IP addresses.
For more information, see the
Cloud Quotas overview .
The following table describes the quotas for Cloud Tasks resources.
Resource
Console quota name
Default value
Description
Maximum number of queues
Number of queues per region
1,000 per region
The total number of queues (for both HTTP and App Engine targets)
that can exist in a project per region, including the default queue.
Queues that process tasks for App Engine targets must be in the
same region as the App Engine app. This is the quota for queues
created using Cloud Tasks API methods. Any queues created using
queue.yaml , however, are based on the older Task Queues
method. These queues continue to have an initial quota of 100.
API requests
Requests per minute per region
6,000,000 per minute
The total number of API requests that can be made per minute.
Force run task requests
Run task requests per minute per region
60 per minute
The total number of
run task
requests per minute. This API is intended for manual debugging and is
unrelated to normal task execution.
List requests
List group requests per minute per region
600 per minute
The total number of
list tasks ,
list queues ,
and list locations
requests per minute.
To adjust most quotas, use the Google Cloud console.
For more information, see
Request a quota adjustment .
System limits
There are also system limits on Cloud Tasks resources.
System limits can't be changed.
The following table describes the system limits for Cloud Tasks.
Resource
Value
Description
Queue dispatch rate
500 tasks per second per queue
The maximum rate at which tasks can be dispatched from a queue. To
dispatch at higher rates, use multiple queues.
Maximum task size
1 MiB
The maximum size of a task that can be added to a queue.
Task deduplication window
Up to 24 hours
The time period during which adding a task with the same name as a
recently deleted task will cause the service to reject it with an error.
This is the length of time that task deduplication remains in effect after
a task is deleted.
Inactive queues
Inactive after 30 days
A queue is considered INACTIVE if no method calls are
made to it from any API, and it has had no task dispatches for this period.
Maximum task retention
31 days
The time between when a task is added to a queue and when it is
automatically deleted.
Maximum schedule time for a task
30 days from current date and time
The maximum amount of time in the future that a task can be scheduled.
Queue re-creation
7 days
The time you must wait after deleting a queue to re-create a queue with
the same name.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
