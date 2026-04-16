---
title: "An overview of App Engine \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/standard/java-gen2/building-app
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/an-overview-of-app-engine
  title: "An overview of App Engine \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
App Engine
Guides
Send feedback
An overview of App Engine
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
App Engine is one of the fully managed, serverless platforms for
developing and hosting web applications at scale. You can choose from several
popular languages to develop your apps, and then let App Engine take
care of provisioning servers and scaling your app instances based on demand.
A newer and better alternative to App Engine is
Cloud Run , which is the
latest evolution of Google Cloud Serverless. If you are a new Google Cloud
user, we recommend using Cloud Run for developing and hosting web
applications.
Components of an application
An App Engine app is made up of a single application resource
that consists of one or more services . Each service can be configured to use
different runtimes and to operate with different performance settings. Within
each service, you deploy versions of that service. Each version then runs
within one or more instances , depending on how much traffic you configured it
to handle.
Your App Engine app is created under your Google Cloud project when you
create an application resource. The App Engine application is a
top-level container that includes the service, version, and instance resources
that make up your app. When you create your App Engine app, all your
resources are created in the region that you choose, including your app code
along with a collection of settings, credentials, and your app's metadata.
Learn more about " application resources "
( standard |
flexible ) and in
which regions you can create them.
Each App Engine application includes at least one service, the default
service, which can hold many versions, depending on your app's billing status.
For more information, see Limits below.
The following diagram illustrates the hierarchy of an App Engine
app running with multiple services. In this diagram, the app has two services
that contain multiple versions, and two of those versions are actively running
on multiple instances:
Other Google Cloud services, for example Datastore, are
shared across your App Engine app. For more information, see
" Structuring web services "
( standard |
flexible ) .
Services
Use services in App Engine to factor your large apps into logical
components that can securely share App Engine features and communicate
with one another. Generally, your App Engine services behave like
microservices .
Therefore, you can run your whole app in a single service or you can design and
deploy multiple services to run as a set of microservices.
For example, an app that handles your customer requests might include separate
services that each handle different tasks, such as:
API requests from mobile devices
Internal, administration-type requests
Backend processing such as billing pipelines and data analysis
Each service in App Engine consists of the source code from your app and
the corresponding App Engine configuration files. The set of files that
you deploy to a service represent a single version of that service and each
time that you deploy to that service, you are creating additional versions
within that same service.
Versions
Having multiple versions of your app within each service allows you to quickly
switch between different versions of that app for rollbacks, testing, or other
temporary events. You can route all traffic to a specific version of your app by
" migrating traffic " ( standard |
flexible ) or route
to multiple versions of your app by
" splitting traffic " ( standard |
flexible ) .
Instances
The versions within your services run on one or more instances .
By default, App Engine scales your app to match the load. Your apps will
scale up the number of instances that are running to provide consistent
performance, or scale down to minimize idle instances and reduces costs.
For more information about instances, see " How instances are managed "
( standard |
flexible ) .
In the App Engine flexible environment, instances are backed by Compute Engine resources.
Some of the resources used by instances in the App Engine flexible environment, such as disk, CPU,
and memory, count towards the Compute Engine API quotas
of your project. For more details on how App Engine uses Compute Engine
resources, see the App Engine flexible environment overview .
Application requests
Each of your app's services and each of the versions within those services must
have a unique name. You can then use those unique names to target and route
traffic to specific resources using URLs, for example:
https:// VERSION -dot- SERVICE -dot- PROJECT_ID . REGION_ID .r.appspot.com
Incoming user requests are routed to the services or versions that are
configured to handle traffic. You can also target and route requests to specific
services and versions. For more information, see
" Communicating between Services "
( standard |
flexible ) .
Logging application requests
When your application handles a request, it can also write its own logging
messages to
stdout and stderr .
For details about your app's logs, see " Writing Application Logs "
( standard |
flexible ) .
Limits
Both the flexible environment and the standard environment share
the same limits for services and versions. For example, if you have standard
versions and flexible versions in the same app, those versions count towards the
same limit. For details, see " Quotas and limits "
( standard |
flexible ) .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
