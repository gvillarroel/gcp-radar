---
title: "Monitor application health and performance \_|\_ App Hub \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/app-hub/docs/monitor-applications
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/app-hub/docs/supported-resources
source_metadata:
  url: https://docs.cloud.google.com/app-hub/docs/monitor-applications
  title: "Monitor application health and performance \_|\_ App Hub \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
App Hub
Guides
Send feedback
Monitor application health and performance
Stay organized with collections
Save and categorize content based on your preferences.
This document describes the Application Monitoring integration to monitor
health and performance of
App Hub applications . You can
get additional health and performance information in Cloud Hub,
including deployment failures and deployments that can be updated, information
about Google Cloud incidents that impact your applications, and services that
are near their quota limits. For more information, see the
Cloud Hub overview .
Application Monitoring overview
Application Monitoring in Google Cloud Observability
gives you visibility into the health and performance of your applications. When
you register infrastructure resources as services or workloads in an application,
using either App Hub or Application Design Center,
Application Monitoring automatically provides predefined dashboards that
display key log, metric, and trace data in an application-centric context. You
can also set up alert policies for your applications.
For more information about the application-centric model and other integrated
features, see Application-centric Google Cloud .
How Application Monitoring works
When you define an application and register its underlying resources,
Application Monitoring discovers the application deployment. The application
definition acts as a single source of truth that clarifies ownership and
dependencies. For
infrastructure supported by Application Monitoring ,
the registered services and workloads provide the telemetry needed for the
predefined dashboards.
These dashboards help you diagnose issues and monitor performance for the
application as a whole, rather than as a collection of independent resources.
Telemetry data includes log, metric, and trace data. Because
Application Monitoring understands the logical grouping of your application's
services and workloads, it automatically enriches all telemetry with
application-specific labels .
You can then use these labels to filter and query your application's data within
the predefined dashboards.
What you can do with Application Monitoring
The integration with Application Monitoring lets you do the following:
View consolidated dashboards: Get an immediate overview of your
application's health, including golden signals like traffic, error rate,
latency, and saturation.
View details for services and workloads: View dashboards for individual
services and workloads to isolate issues.
Correlate telemetry: Explore log, metric, and trace data in a unified
view to understand the full context of an issue.
Create alerts: Set up alerting policies based on application-specific
metrics to be notified of potential problems.
To learn more about Application Monitoring, see the
Application Monitoring overview .
Get started with Application Monitoring
To view telemetry data for your applications with Application Monitoring, do
the following:
Set up an application management boundary .
For more information, see the following documentation for Application-centric Google Cloud products:
Choose your application setup model .
Set up Application Design Center .
Define your application and its components. You can define applications in
one of the following ways:
Register resources to an application .
Design and publish application templates .
Set up Google Cloud Observability for Application Monitoring .
In the Google Cloud console, go to the Application monitoring page:
Go to Application monitoring
If you use the search bar to find this page, then select the result whose subheading is
Monitoring .
In the Google Cloud console, use the project picker to select your
management project or
host project .
For detailed instructions on how to use the predefined dashboards and
explore your telemetry data, see
View application telemetry .
What's next
Learn more about Application Monitoring
Set up Google Cloud Observability for Application Monitoring
View application telemetry
View audit logs for App Hub
Get additional health and performance information with Cloud Hub
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
