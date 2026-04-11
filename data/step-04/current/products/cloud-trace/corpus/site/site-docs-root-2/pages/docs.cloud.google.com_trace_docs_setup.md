---
title: "Instrument for Cloud Trace \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/trace/docs/setup
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/trace/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/trace/docs/setup
  title: "Instrument for Cloud Trace \_|\_ Google Cloud Documentation"
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
Instrument for Cloud Trace
Stay organized with collections
Save and categorize content based on your preferences.
This document provides a brief overview on how to instrument your application
for Cloud Trace. For detailed instructions on setting up Cloud Trace,
see the language-specific setup pages.
Cloud Trace provides distributed tracing data for your applications. After
instrumenting your application, you can inspect latency data for a single
request and view the aggregate latency for an entire application in the
Cloud Trace console.
When to instrument your application
Note: Trace data is automatically
captured for some configurations and for some Google Cloud services,
so you might not need to instrument your
application. For more information, see
Configurations with automatic tracing .
When trace data for validating performance or troubleshooting issues isn't
automatically captured, instrument your application.
Instrument your application to collect specific information that helps you understand its
performance and troubleshoot failures.
Several open-source instrumentation frameworks collect log, metric, and trace
data, and can send that data to any vendor, including Google Cloud. For your
agentic applications, some frameworks can collect your prompts and responses or
pass context that allows tracing of some remote
Google Cloud MCP servers calls.
To instrument your application, we recommend that you use an
open-source, vendor-neutral instrumentation framework, such as
OpenTelemetry , instead of
vendor- and product-specific APIs or client libraries.
For information about these frameworks, see
Instrumentation and observability and
Choose an instrumentation approach .
How to instrument applications
There are several approaches that you can use to instrument your application:
Recommended : Use OpenTelemetry , configure your
application with an OTLP exporter that sends trace data to a collector, and
configure the collector to send trace data to your Google Cloud project by using
the Telemetry (OTLP) API. To learn more about our recommendations,
see Choose an instrumentation approach .
Use OpenTelemetry and configure your application with an
OTLP exporter that sends your trace data to your Google Cloud project by using the
Telemetry API.
If you are writing applications that run on Compute Engine, then you can
use the Ops Agent and the OpenTelemetry Protocol (OTLP) receiver to collect
traces and metrics from your application. The Ops Agent can also collect
logs, but not by using OTLP. For more information, see
Use the Ops Agent and OTLP and
Ops Agent overview .
Directly invoke either the Telemetry API
or the Cloud Trace API .
Use Cloud Trace client libraries
or use the Cloud Trace exporter for OpenTelemetry.
For Spring Boot applications, configure them to forward the
trace data it collects to Cloud Trace. For information about this
procedure, see
Spring Cloud for Google Cloud: Cloud Trace .
The instrumentation samples we provide use
OpenTelemetry :
For samples that use a collector-based export, see the following:
Go
Java
Node.js
Python
These samples send trace data to the Telemetry API.
For information about how to use a direct export of trace data and to send
that data to the Telemetry API, see
Migrate from the Trace exporter to the OTLP endpoint .
For samples that show you how to configure an agentic application to collect
prompts and responses, see
How to instrument your generative AI applications .
To learn which remote Google Cloud MCP servers support trace generation, and to
learn how to configure your application to instruct these servers to create
spans, see Investigate MCP calls using Trace .
When to create spans
The Cloud Trace client libraries typically maintain a global trace
context that holds information about the current span, including its trace ID
and whether the trace is sampled. These libraries usually create spans on RPC
boundaries. However, you might need to create spans if the default creation
algorithm isn't sufficient for your needs.
The current active span can be accessed by the global trace context, which is
sometimes wrapped in a Tracer object . You can add
information relevant to your application by using custom annotations and tags
to existing spans, or you can create new child spans with their own annotations
and tags to trace the application's behavior with finer granularity. Because
the context is global, multi-threaded applications that update the context must
use appropriate isolation.
When to provide authentication credentials
You generally don't need to provide authentication credentials to
your application or specify your Google Cloud project ID in your
application when you are running on Google Cloud. For some languages,
you do need to specify your Google Cloud project ID even if you are
running on Google Cloud. Also, if you use Autopilot mode for
Google Kubernetes Engine, or if you enable Workload Identity Federation for GKE, then you must
configure your application to use Workload Identity Federation for GKE .
If you are running outside of Google Cloud, you need to provide
authentication credentials to your application. You also need to specify your
Google Cloud project ID in your application.
For details, go to the language-specific setup pages.
How to force a request to be traced
Unless your application always samples every span,
it isn't possible, in general, to force a request to be traced end-to-end
because each component in an end-to-end request makes its own
sampling decision . However, you can influence the
decision by adding to the trace header a sampled flag ,
with this flag set to true . This setting is a hint to child components
to sample the request.
For more information about trace headers, see
Protocols for context propagation .
For downstream components whose code you own, you must determine whether
your instrumentation logic respects the sampled flag.
For example, when using OpenTelemetry
for instrumentation, you can use the ParentBased sampler
to ensure that the parent sampled flag is respected.
Google Cloud services that record tracing information to Cloud Trace
typically accept the parent sampling flag as a hint; however, most
services also rate-limit sampling. Each Google Cloud service
determines whether it supports tracing, how the parent sampling
flag is utilized, and the rate limit on sampling.
How to correlate metric and trace data
You can correlate distribution-valued metric data
with traces by attaching exemplars to the metric data points.
Provided you complete the necessary configuration steps,
OpenTelemetry, which is the recommended instrumentation library,
automatically adds these exemplars. For more information, see
Correlate metrics and traces by using exemplars .
Configure your project and platform
Ensure that the Cloud Trace API is enabled.
By default, Google Cloud projects have the Cloud Trace API enabled
and you don't need to take any action. However, security constraints defined
by your organization might have disabled the API. For troubleshooting
information, see
Develop applications in a constrained Google Cloud environment .
Enable the Cloud Trace API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Configure your platform.
You can use Cloud Trace on Google Cloud and other platforms.
Google Cloud: When your application is running on
Google Cloud, you don't need to provide authentication credentials
in the form of a service account to the client library. However, must
ensure that your Google Cloud platform has the
Cloud Trace API access scope
enabled.
For the following configurations, the default access-scope settings
include the Cloud Trace API access scope:
Compute Engine
Google Kubernetes Engine (GKE)
Note: If you use Autopilot or if you enable
Workload Identity Federation for GKE for your GKE cluster,
then ensure that you
configure your application to use Workload Identity Federation for GKE .
App Engine flexible environment
App Engine standard environment
Cloud Run
If you use custom access scopes, then you must ensure that
Cloud Trace API access scope is enabled.
For example, if you use the Google Cloud CLI to create a
GKE cluster and if you specify the --scopes flag,
then ensure the scope includes trace.append . The following command
illustrates setting the --scopes flag:
gcloud container clusters create example-cluster-name --scopes=https://www.googleapis.com/auth/trace.append
Running locally and elsewhere: If your application is running outside of
Google Cloud, then you must provide authentication credentials in
the form of a service account to the client library.
The service account must be granted the Cloud Trace agent
( roles/cloudtrace.agent ) role. For information about roles, see
Control access with IAM .
Google Cloud client libraries use
Application Default Credentials (ADC) to find your
application's credentials. You can provide these credentials in one of
three ways:
Run gcloud auth application-default login
Place the service account in a default path for your operating system.
The following lists the default paths for Windows and Linux:
Windows: %APPDATA%/gcloud/application_default_credentials.json
Linux: $HOME/.config/gcloud/application_default_credentials.json
Set the GOOGLE_APPLICATION_CREDENTIALS environment variable to
the path to your service account:
Linux/macOS
export GOOGLE_APPLICATION_CREDENTIALS = path-to-your-service-accounts-private-key
Windows
set GOOGLE_APPLICATION_CREDENTIALS = path-to-your-service-accounts-private-key
PowerShell:
$env :GOOGLE_APPLICATION_CREDENTIALS = "path-to-your-service-accounts-private-key"
What's next
For detailed configuration information, samples, and links to GitHub and
other open source repositories, go to the setup page for your language.
OpenTelemetry examples:
Python sample
Java sample
Node.js sample
Go sample
C++ sample
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
