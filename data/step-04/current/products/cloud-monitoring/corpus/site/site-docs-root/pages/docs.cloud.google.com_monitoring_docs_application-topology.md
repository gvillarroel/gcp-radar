---
title: "View application topology \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/monitoring/docs/application-topology
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/monitoring/docs
source_metadata:
  url: https://docs.cloud.google.com/monitoring/docs/application-topology
  title: "View application topology \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Monitoring
Guides
Send feedback
View application topology
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This document describes how to view the topology map that
Application Monitoring creates for your App Hub
applications, services, and workloads. The application topology map provides a
dynamic view of your application's relationships to help you monitor alerts and
traffic, and troubleshoot issues.
Understand the topology map
The application topology map provides a dynamic and actionable view of your
application's performance, simplifying monitoring and troubleshooting. The
topology map represents your application using nodes and edges, as follows:
Nodes represent your application's services and workloads:
Edges represent your application's traffic between your services and
workloads:
The topology map is fully interactive. You can zoom in and out, and move
nodes around to help you visualize the relationship between your services and
workloads. To open a panel that provides additional
details about the status of a specific node or edge, click the node or edge.
Before you begin
Note: If you are using VPC Service Controls and are restricting the
App Hub API, Observability API, Telemetry API, Cloud Logging API
or App Topology API, then Google Cloud Observability can't create a topology map.
To generate the application topology map, your trace data must contain
application-specific labels. These labels are available only when you instrument
your app with OpenTelemetry, send your trace data to the Telemetry API,
and register your application with App Hub.
To get started, do the following:
Configure Application Monitoring as described in
Set up Application Monitoring .
Setup for Application Monitoring includes configuring the default
trace scope to
list all projects that store your trace data .
If you are using an
App-enabled folder ,
then your project will have a default Service Usage Restriction policy
that prevents you from using the App Topology API. To resolve this,
someone with the
Organization Policy Administrator
role must add apptopology.googleapis.com to the policy
allowlist for the app-enabled folder management project. Note that there
may also be a policy in place at the organization level.
For more information, see
Restricting resource usage .
Enable the Observability, App Topology, Cloud Trace, and Telemetry APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
If you've added other projects to your trace scope, then we
recommend you also enable the Observability API for those projects.
The application topology map only shows trace edges from trace scope
projects that are in the same organization as your App Hub
project.
To get the permissions that
you need to view application topology,
ask your administrator to grant you the
App Topology viewer ( roles/apptopology.viewer )
IAM role on your project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains
the permissions required to view application topology. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to view application topology:
To generate topology:
apptopology.applicationTopologies.generate
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Instrument your application to use OpenTelemetry
and to
send your trace data to the OTLP endpoint .
View the topology map
In the Google Cloud console, go to the Application monitoring page:
Go to Application monitoring
If you use the search bar to find this page, then select the result whose subheading is
Monitoring .
In the project picker of the Google Cloud console,
select your
App Hub host project or
management project.
Select an application from the list.
Click the Topology tab. The topology map for your application appears.
The topology map is fully interactive. You can zoom in and out, and move
nodes around to help you visualize the relationship between your services and
workloads. You can also view details about a node or edge:
To view open alerts or attributes for a service or workload, select the node.
To view latency and error rate between two nodes, select the edge.
Troubleshoot
For information that might help you understand why the application topology map
doesn't display data, see
Troubleshoot Application Monitoring .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
