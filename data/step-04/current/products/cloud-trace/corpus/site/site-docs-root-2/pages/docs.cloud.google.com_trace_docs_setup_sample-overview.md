---
title: "Overview of collector-based instrumentation samples \_|\_ Cloud Trace \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/trace/docs/setup/sample-overview
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/trace/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/trace/docs/setup/sample-overview
  title: "Overview of collector-based instrumentation samples \_|\_ Cloud Trace \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Trace
Guides
Send feedback
Overview of collector-based instrumentation samples
Stay organized with collections
Save and categorize content based on your preferences.
This document describes the structure of the instrumentation samples provided
for the Go , Java ,
Node.js , and Python languages.
These samples provide guidance about how to instrument an application to use the
OpenTelemetry SDK and an OpenTelemetry collector.
The instrumentation in these samples, which includes using the OpenTelemetry SDK
and the SDK's in-process OTLP exporter, is vendor neutral. The
in-process exporter sends telemetry to the OpenTelemetry collector, which receives
that data and then sends it to your Google Cloud project. The collector contains
the binding to Google Cloud. These samples use Google Cloud exporters to send
log and metric data to your project. However, they send trace data to your
project by using the Telemetry API.
You might be interested in other samples that illustrate different
configurations:
Migrate from the Trace exporter to the OTLP endpoint
describes how to use in-process instrumentation to send trace data directly to
your Google Cloud project.
We recommend that you use an OpenTelemetry collector to export your telemetry
data when your environment supports use of a collector. If you can't use a
collector, then you must use an in-process exporter that directly sends data
to your Google Cloud project.
Correlate metrics and traces by using exemplars
describes how to configure a Go application to generate exemplars.
An exemplar is an example data point attached to a metric data point.
You can use exemplars to correlate your trace and metric data.
Use the Ops Agent and OpenTelemetry Protocol (OTLP)
describes how you can configure the Ops Agent and an OTLP receiver to
collect metrics and traces from an application.
Note: The samples display only selected portions of a working application.
For example, the samples don't display the list of imported packages.
However, the complete applications are available on GitHub. From a code
snippet, you can open GitHub by using the more_vert More options.
How the samples work
The samples for Go, Java, Node.js, and Python use the
OpenTelemetry protocol to collect trace and metric data.
The samples configure a logging framework to write
structured logs and the
OpenTelemetry collector is configured to read from
the application's stdout stream. For framework recommendations, see
Choose an instrumentation approach .
The applications are built and deployed by using Docker. You don't have to
use Docker when you instrument an application with OpenTelemetry.
You can run the samples in the Cloud Shell, on Google Cloud
resources, or on a local development environment.
Deep dive
The samples use the OpenTelemetry Collector as a sidecar
to receive and enrich the application's telemetry, which is then sent to your
Google Cloud project by using a Google Cloud exporter . The exporter
converts the
telemetry into a format compatible with the Cloud Trace API, Cloud Monitoring API,
or Cloud Logging API. Next, they send the transformed data to your
Google Cloud project by issuing an API command.
The samples show how to do the following:
Configure OpenTelemetry to collect metrics and traces by using the
OpenTelemetry collector .
If you review the samples, you'll notice that the complexity of this step
is language dependent. For example, for Go, this step configures the
main function to call a function that configures the collection of
metrics and traces. For Go, the HTTP server and client are also updated.
Configure a logging framework to write structured logs .
We recommend that your applications write structured logs, which results
in the log payload being formatted as a JSON object. For these logs, you can
construct queries that search specific JSON paths and you can
index specific fields in the log payload.
Some services, like Google Kubernetes Engine, have built-in agents that scrape
structured logs and send those logs to your Google Cloud project. Other
services, like Compute Engine, require that you install an agent, which
scrapes and sends your logs. If you want to learn about agents you install,
see Ops Agent overview .
You don't need to install any agents to use these samples.
Configure Docker files. All samples contain the following yaml files:
docker-compose.yaml : Configures the services for the application,
the OpenTelemetry collector , and a load generator.
For example, the service for the OpenTelemetry collector, otelcol ,
specifies an image, a volume, and environment variables.
The endpoint for the OpenTelemetry collector is set by the
OTEL_EXPORTER_OTLP_ENDPOINT environment variable, which is
specified in the app service.
otel-collector-config.yaml : Configures the OpenTelemetry collector. This
collector specifies receivers, exporters, processors, and pipelines.
The telemetry service defines pipelines for trace, metric, and log
data. Each pipeline entry specifies a receiver, a processor, and an
exporter. The same receiver, otlp , is used for metrics and traces.
The exporters section describes how collected data is exported to
a Google Cloud project. For log and metric data,
Google Cloud exporters are used. These exporters convert
the telemetry into a format compatible with the corresponding API
and then send the transformed data to your
Google Cloud project by issuing an API command.
In contrast, trace data is sent to your project by using the
Telemetry API, which supports OTLP.
docker-compose.creds.yaml : This file optionally mounts a
Google Cloud credentials file in the otelcol container. This file
is needed when a sample is run on a local machine where the
Application Default Credentials (ADC) are available
only as a file.
Required permissions
To get the permissions that
you need to for the sample applications to write log, metric, and trace data,
ask your administrator to grant you the
following IAM roles on your project:
Logs Writer ( roles/logging.logWriter )
Monitoring Metric Writer ( roles/monitoring.metricWriter )
Cloud Telemetry Traces Writer ( roles/telemetry.tracesWriter )
If you run the samples in the Cloud Shell, on Google Cloud resources,
or on a local development environment, then the previous permissions
are sufficient to write log, metric, and trace data. For production
applications, a service account typically provides the required credentials.
To get the permissions that
you need to view your log, metric, and trace data,
ask your administrator to grant you the
following IAM roles on your project:
Logs Viewer ( roles/logging.viewer )
Monitoring Viewer ( roles/monitoring.viewer )
Cloud Trace User ( roles/cloudtrace.user )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Required APIs
Enable the Cloud Logging, Cloud Monitoring, Cloud Trace, and Telemetry APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable logging.googleapis.com monitoring.googleapis.com cloudtrace.googleapis.com telemetry.googleapis.com
What's next
To learn more about collectors, see
Google-Built OpenTelemetry Collector .
Explore the samples that use collector-based exports.
Go sample .
Java sample .
Node.js sample .
Python sample .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
