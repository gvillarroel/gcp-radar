---
title: "Known issues in the App Engine flexible environment \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/flexible/known-issues
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/flexible/go/release-notes
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/flexible/known-issues
  title: "Known issues in the App Engine flexible environment \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
App Engine
Flexible environment
Resources
Send feedback
Known issues in the App Engine flexible environment
Stay organized with collections
Save and categorize content based on your preferences.
Region ID
The REGION_ID is an abbreviated code that Google assigns
based on the region you select when you create your app. The code does not
correspond to a country or province, even though some region IDs may appear
similar to commonly used country and province codes. For apps created after
February 2020, REGION_ID .r is included in
App Engine URLs. For existing apps created before this date, the
region ID is optional in the URL.
Learn more
about region IDs .
OK
For a full list of known issues or to report a new issue, see the
issue tracker .
After you deploy your application with gcloud app deploy , you
might need to wait 1-2 minutes before your application starts serving at
https:// PROJECT_ID . REGION_ID .r.appspot.com . Until then, you might see HTTP 503 errors.
App Engine often logs these errors as backend_timeout or failed_to_pick_backend
in the global external Application Load Balancer logs. The global external Application Load Balancer sends requests to a
service in the App Engine flexible environment regardless of the health of individual instances.
After you deploy a new version, the global external Application Load Balancer takes time to
update its configuration with the new backend instances. During this
transition, the availability of backend services is inconsistent. When
migrating traffic to the new version, the global external Application Load Balancer might try to
send traffic to instances that aren't fully ready to receive requests, resulting
in 503 errors. This might also result in 502 errors, particularly when using a classic Application Load Balancer .
If there is an organization policy on your project that restricts access to
external IPs, you won't be able to deploy an App Engine flexible environment app with external
IP addresses. For example, the organization policy could look as follows:
The effective policy for constraints/compute.vmExternalIpAccess is set to
DENY_ALL .
The effective policy for constraints/compute.vmExternalIpAccess is set to
allow only specific VM instances.
The effective policy for constraints/compute.requireOsConfig is disabled for the project to prevent metadata updates.
These constraints are not automatically detected, and deployments might time
out and fail. You can check the organization policy for your project by
running the command gcloud beta resource-manager org-policies describe
compute.vmExternalIpAccess --project=my-project --effective .
You can also override the organizational policy for a specific project .
However, even with such organization policies set, you can deploy a private App Engine flexible environment app that uses only its internal IP address.
After you deploy a new version of an existing service in the App Engine flexible environment
with gcloud app deploy , the "Count/sec" metric shown
in the "Summary" graph of the App Engine dashboard may decrease
significantly. The metric will gradually return to the expected request
count over the next 5-10 minutes.
This does not mean that your application is serving fewer requests. When
you deploy a new version of your application, there is a delay between
the time the new version is ready to serve requests and the time that
the metrics for new instances become available.
To ensure that this metric is unaffected by a new version deployment:
Deploy your new version with
gcloud app deploy --no-promote .
Wait 15 minutes after the deployment completes.
Migrate traffic to the new version .
If you deploy with --no-promote but allocate any amount of traffic to
the new version before the 15 minute window after the deployment completes,
this metric may be impacted.
It is not possible in the App Engine flexible environment to configure app.yaml so that
your app automatically redirects requests to always use HTTPS. This differs
from the App Engine standard environment, where you can use the secure setting.
As an alternative, you can handle the redirect inside your application
code by parsing the value of
X-Forwarded-Proto header .
You can also encourage clients to use the
Strict-Transport-Security header .
If you assign a
user-managed service account
to an App Engine flexible environment version, your project may be billed for
agent.googleapis.com -prefixed metrics. Normally, these agent metrics are not
charged to your project. We recommend that you continue to use the App Engine
default service account until this issue
is resolved.
You can't establish an SSH connection to a VM Instance using IAP.
Unexpected reduction in number of instances
In rare events, your application could see an unexpected reduction in the
number of instances due to zone failures, or if an entire group of instances
stop responding. To prevent
this, Google recommends overprovisioning your application to prevent your
system from dropping below the minimum number of instances. You can set your
App Engine flexible environment application's
min_num_instances
size when deploying it. Some events that may affect App Engine flexible environment minimum
number of instances are:
Rolling out
updates to flexible environment instances
Zonal failure (Stockout issues, such as when your region is at capacity
for your selected CPU, etc.)
App Engine flexible environment uses 3 zones to distribute your instances and in such a
configuration, we
recommend
provisioning 50% more instances than required.
Inconsistent Cloud Load Balancing metrics
The App Engine flexible environment dashboard displays all metrics only for requests routed
through a flexible environment-managed backend. If you use App Engine flexible environment with
Cloud Load Balancing, certain metrics in the App Engine
metrics table are reported as
metrics from the loadbalancing
table instead. For more information, see
HTTP(S) Load Balancing logging and monitoring .
InterruptedException in runtimes using JVM during health check failure
When a health check fails, the VM is shutdown. As a symptom of the app container
becoming unhealthy, the JVM responds with InterruptedException and
NullPointerException errors. A handler can respond to the SIGTERM signal
sent by the container during shutdown, to perform any necessary clean-up or
debugging actions, to prevent exceptions.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
