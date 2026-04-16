---
title: "Build custom runtimes \_|\_ App Engine flexible environment \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/flexible/ruby/create-app
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/flexible/custom-runtimes/build
  title: "Build custom runtimes \_|\_ App Engine flexible environment \_|\_ Google\
    \ Cloud Documentation"
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
Guides
Send feedback
Build custom runtimes
Stay organized with collections
Save and categorize content based on your preferences.
A custom runtime
lets you use an alternate implementation of any supported
flexible environment language, or to customize a
Google-provided one. It also lets you to write code in any other language that
can handle incoming HTTP requests
( example ).
With a custom runtime, the flexible environment provides and
manages your scaling, monitoring, and load balancing infrastructure for you, so
you can focus on building your application.
To create a custom runtime you must:
Provide an app.yaml file that describes your application's runtime configuration to App Engine.
Add a Dockerfile that internally configures the runtime environment.
Ensure that your code follows some basic rules.
Note: Google supplies some base images that you can
customize, but you aren't required to use these. You can use other images so
long as they satisfy the conditions in the list above.
Provide an app.yaml file
Your app.yaml configuration file must contain at least the following settings:
runtime: custom
env: flex
For information about what else you can set for your
app, see Configuring your App with app.yaml .
Create a Dockerfile
Comprehensive documentation on creating Dockerfiles is available on the
Docker website . If you are
using a custom runtime, you must provide a Dockerfile whether you are
providing your own base image or using one of Google's base
images.
Specify a base image
The first command in a Dockerfile is usually a FROM command specifying a base image.
A base image is used to create the container and build your application. You
can author your own base image
or select a base image from container registries like DockerHub .
Locate the Dockerfile
In general, the Dockerfile is always named Dockerfile and is placed in the
same directory as the corresponding app.yaml file. In some cases, however, the
tooling environment might have different requirements. For example, Cloud
SDK-based Java tools such as the Maven, Gradle, Eclipse, and IntelliJ plugins
require the Dockerfile to be in src/main/docker/Dockerfile and the
app.yaml file to be in src/main/appengine/app.yaml . See the
documentation
for your tooling environment for more information.
Code structure
This section describes behavior that your code must implement whether you use
a Google-provided base image or your own base image.
Listen to port 8080
The App Engine front end will route incoming requests to the appropriate
module on port 8080. You must be sure that your application code is listening on
8080.
Handle lifecycle events
The flexible environment periodically sends your application
certain lifecycle events.
Application shutdown
When an instance needs to be shut down, new incoming requests are routed to
other instances (if any) and requests that are currently being processed are
given time to complete. When shutting down an instance, flexible environment normally
sends a STOP ( SIGTERM ) signal to the app container. Your app does not need
to respond to this event, but it can use this to perform any necessary clean-up
actions before the container is shut down. Under normal conditions, the system
waits up to 30 seconds for the app to stop and then sends a KILL ( SIGKILL )
signal, immediately shutting down the instance.
In rare cases, outages can prevent App Engine from providing 30 seconds
of shutdown time, which means the STOP and KILL signals might not be sent
before an instance terminates. To handle this possibility, you should
periodically checkpoint the state of your instance, using it primarily as an
in-memory cache rather than a reliable data store.
Health check requests
You can use periodic
health check requests
to confirm that a VM instance has been successfully deployed, and to check that
a running instance maintains a healthy status.
Build and deploy your custom runtime
After you configure your app.yaml and DOCKER file, you can
build and deploy
that container image to App Engine.
Alternatively, you can deploy prebuilt container images of your custom runtimes
that are stored in Artifact Registry. For example, you can use Cloud Build
to separately build your images and then store those images in
Artifact Registry. For more information, see
Push and pull images .
Integrate your application with Google Cloud
Applications running in custom runtimes can use the Google Cloud
Client Libraries to access Google Cloud services.
Applications in custom runtimes can also use any third-party service using standard APIs.
Authenticate with Google Cloud services
Application Default Credentials
provide the simplest way to authenticate with and call Google APIs.
If your application uses Cloud Build for compiling Docker images,
the cloudbuild network hosts the
Application Default Credentials enabling the associated Google Cloud services to
automatically find your credentials.
For more information about authentication, see
Authentication at Google .
Logging
When a request is sent to your application running in App Engine,
the request and response details are logged automatically. They can be viewed in
the Google Cloud console Logs Explorer .
When your application handles a request, it can also
write its own logging messages to stdout and stderr . These files are
automatically collected and can be viewed in the Logs Explorer. Only the
most recent entries to stdout and stderr are retained, in order
to limit their size.
You can also write custom logs to /var/log/app_engine/custom_logs , using a
file ending with .log or .json .
Note: Custom logs written to /var/log/app_engine/custom_logs cannot use log rotation.
If you include any third-party agents in your application container, make
sure you configure the agents to log to stdout and stderr , or to a custom log.
This ensures that any errors produced by these agents is visible in Cloud Logging.
The request and application logs for your app are collected by a
Cloud Logging agent and are kept for a maximum of 90
days, up to a maximum size of 1 GB. If you want to store your logs for a longer
period or store a larger size than 1 GB, you can export your
logs
to Cloud Storage. You can also export your logs to BigQuery and Pub/Sub for
further processing.
Other logs are also available for your use. The following are some of the logs
that are configured by default:
Log name
Payload type
Purpose
crash.log
text
Information logged when setup fails. If your application fails to run, check this log.
monitoring.*
text
Information from the Docker container publishing data to Cloud Monitoring.
shutdown.log
text
Information logged on shutdown.
stdout
text
Standard output from your app.
stderr
text
Standard error from your container.
syslog
text
The VM syslog, outside of the Docker container.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
