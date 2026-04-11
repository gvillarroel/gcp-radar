---
title: "Client libraries \_|\_ Cloud Trace \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/trace/docs/client-libraries
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/trace/docs
source_metadata:
  url: https://docs.cloud.google.com/trace/docs/client-libraries
  title: "Client libraries \_|\_ Cloud Trace \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Trace
Reference
Send feedback
Client libraries
Stay organized with collections
Save and categorize content based on your preferences.
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
Set up information for the OpenTelemetry library:
C++
Go
Java
Node.js
Python
Information about the Cloud Client Libraries:
Ruby:
Note: We recommend that you use OpenTelemetry for Ruby.
For more information, see the Ruby SDK .
GitHub: googleapis/google-cloud-trace
ASP.NET:
Library: Google.Cloud.Diagnostics.AspNet
NuGet package: Google.Cloud.Diagnostics.AspNet
GitHub: Google.Cloud.Diagnostics.AspNet version 4.0.0
ASP.NET Core:
Libraries: Google.Cloud.Diagnostics.AspNetCore3
and Google.Cloud.Diagnostics.AspNetCore
NuGet packages: Google.Cloud.Diagnostics.AspNetCore3
and Google.Cloud.Diagnostics.AspNetCore
GitHub: googleapis/google-cloud-dotnet
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
