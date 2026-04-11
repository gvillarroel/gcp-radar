---
title: "Which should you use: Logging agent or client library? \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/logging/docs/agent-or-library
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/logging/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/logging/docs/agent-or-library
  title: "Which should you use: Logging agent or client library? \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Logging
Guides
Send feedback
Which should you use: Logging agent or client library?
Stay organized with collections
Save and categorize content based on your preferences.
This document provides the information that you need to help you decide whether
to programmatically send application logs to Cloud Logging by using
client libraries or by using a
logging agent. Logging agents send data written to a file, such as
stdout or a file, as logs to Cloud Logging. Services such as
Google Kubernetes Engine, App Engine flexible environment, and Cloud Run functions, contain an integrated
logging agent. For Compute Engine, you can install the
Ops Agent or the legacy Cloud Logging agent .
These agents collect logs from known file locations or logging
services like the Windows Event Log , journald , or syslogd .
When you can't use a client library or a Logging agent, or when
you only want to experiment, you can write logs by using the
gcloud logging write
command or by sending HTTP commands to the Cloud Logging API endpoint
entries.write .
The Cloud Logging API supports both
HTTP and gRPC calls. The Ops Agent and most Logging client
libraries call the gRPC Logging API. The legacy Logging
agent and client libraries for some languages call the REST
Logging API.
Note: There will be no new feature development or
support for new operating systems for the legacy
Logging agent.
We recommend that you use the
Ops Agent for new workloads
and eventually transition your existing VMs to use the Ops Agent.
Choosing an agent or client libraries
When you're deciding between an agent or the client libraries, consider
the following questions:
Is your application running outside of Google Cloud?
If your application isn't running on Google Cloud, you need
some way to send logs to the Logging API. To route logs from
on-premises systems to Logging, we recommend that you use
Bindplane , which deploys and manages
OpenTelemetry collectors to send telemetry to Google Cloud. For more
information, see About Bindplane .
Alternatively, you can route logs to Logging directly from
the application by using client libraries. For ephemeral environments,
like Serverless computing, you must use client libraries to make direct
calls to the Logging API.
Does the Google Cloud service running your application support
writing stdout and stderr content to your project?
Some Google Cloud services are fully managed, so you don't need
to use agents to send logs to your Google Cloud project. You can use any
established logging framework in
the language of your choice, such as Go, Node.js, and Python, to send logs to
Logging in products where stdout and stderr are supported
by default. An advantage to relying on stdout and stderr
instead of using client libraries is that application crashes don't break
sending logs to your project. For information about sending
structured logs through stdout and
stderr , see the section, Does your application have the flexibility to
change the log format? .
You can use Logging client libraries, but keep in mind that
it might introduce a dependency on Logging for local testing,
when you don't necessarily need it. Using the client libraries might also
require more complex coding to explicitly handle buffering and retries.
Also, each use of the Logging client libraries creates a new
connection stream to the API. These new connections introduce more
complexity, use additional ports, and send separate requests with only the
logs from the application, which could be wasteful if there aren't many
logs.
Do the application logs need to be accessible in your local environment?
If you need to access the application logs in your local environment, for
debugging and other purposes, then you can use the logging modules in some
languages to output to stdout and stderr . Logging client
libraries for some languages support routing logs to stdout and stderr .
When running your application in Google Cloud services that don't support
automatically sending logs written to stdout and stderr to your
Google Cloud project, you can collect
stdout and stderr logs in on-disk files and configure the agent to
scrape those and send them to Logging. For more information,
see the configuration guide for the Ops Agent
or the legacy Logging agent .
Is the agent-installation process manual or automatic?
Some services install agents automatically or allow you to install the agents
yourself. If the service you are using doesn't allow you to install agents,
then you must use the client libraries to use Logging.
Are you running Fluentd in your system already?
The legacy Logging agent is based on Fluentd.
If you already have Fluentd running in your system, and you would like to
use that daemon to send your logs to Logging, then use the
Google Cloud Logging plugin for
fluentd .
Are you collecting application metrics for Cloud Monitoring as well?
In Compute Engine VMs, the Ops Agent can collect logs and most metrics. See
Ops Agent features for more information.
If the Ops Agent doesn't address your use cases, then you can use the
legacy Monitoring agent or the
Monitoring client libraries
to collect your metrics.
Does your application have the flexibility to change the log format?
This question helps you decide if your application can generate
structured logs .
Logging recognizes structured logs if you send the logs to the
Logging API in the structured-logging format .
Client libraries provide the methods for handling this format.
There are two way of writing structured logs: one is to set specific fields
in the LogEntry envelope ,
and the other is to set the jsonPayload field within the LogEntry
envelope .
The schema for the former is determined by Cloud Logging, while the
schema for the latter is determined by the user.
You must configure the agent to recognize structured logs .
By default, the agents are configured to detect logs in JSON format and to
handle them as structured logs. If your application has its own log format
that you can't change, but you want the logs to be recognized as structured
logs, then you must write logs in the structured-logging format, usually
JSON, to stdout and stderr , so that the agents can recognize them as
structured logs. Otherwise, you must configure your agent to understand your
own format.
Summary of each option
Cloud Logging client libraries
Advantages
You can route logs directly to Cloud Logging API.
Some languages can output logs to stdout and stderr by using the
library.
Disadvantages
Application crashes break sending logs to your Google Cloud project.
Ops Agent
Advantages
The Ops Agent can send logs and metrics by using
stable open source technologies: Fluent Bit for log collection and the
OpenTelemetry Collector for metric collection.
You can collect both logs and metrics from many common
applications; see Monitor and collect logs from third-party
applications .
You can retain logs in your local environment.
You might be able to recover logs from application crashes.
The Ops Agent is under active development.
Disadvantages
Fluent Bit only supports UTF-8 encoding. It doesn't support encoding
conversion.
Legacy Logging agent
Advantages
The agent uses Fluentd to collect logs, which supports encoding
conversion.
You can retain logs in your local environment.
You might be able to recover logs from application crashes.
Disadvantages
The agent is currently supported but is not under active development.
stdout and stderr logs automatically sent to your Google Cloud project
Advantages
This process is a common way to emit logs to local environments.
You can use arbitrary logging libraries.
You might be able to recover logs from application crashes.
Disadvantages
Not all environments automatically route logs to Logging.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
