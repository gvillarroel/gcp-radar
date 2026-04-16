---
title: "View application topology \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/monitoring/docs/application-topology
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/monitoring/docs/release-notes
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
To understand the relationships between applications, services, and workloads,
view the topology map. This dynamic map helps you understand traffic flow and
identify incidents. For applications registered with
App Hub , you can view the topology at the
application level. You can also view a topology map at the
application management boundary level ,
which lets you understand how an application interacts with external
services and workloads.
Understand the topology map
The application topology map is fully interactive and provides a dynamic, useful
view of your applications, services, and workloads. This view helps you monitor
and troubleshoot performance issues.
The following image shows a topology map for an application management boundary:
This map has the following elements:
Blue circles : Each blue circle represents an application registered with
App Hub. The example shows several applications:
For two applications, the blue circle displays a
unfold_less Collapse button. For these applications,
the services and workloads are shown.
For one application, a single node is shown and the blue circle displays
the counter_4 Expand button. The value in the
button is the number of registered services and workloads.
To get information about attributes and incidents for the application,
select its blue circle.
Nodes : Each node represents a registered or discovered service or
workload. The icon for a node is determined by the
App Hub functional type
when set.
Otherwise, the icon indicates whether the node represents a service
( ) or a workload ( ). To get
information about attributes and incidents, select the node.
Edges : Represent traffic between two nodes. To get information about key
metrics, such as the error rate and the 95th latency percentile, select the
edge:
The latency value is derived from the most recent one hour of data.
Limitations
The topology map might not display all incidents or all services and
workloads:
The flyouts display only those incidents from the most recent 24 hours.
The topology map displays at most 1000 nodes or
edges. Additionally, for each supported
App Hub region ,
this map displays at most
100
discovered services and
100
discovered workloads.
You can't register a service or workload with an application by dragging the
corresponding node to be within an application's blue circle. The blue
circle is a visual guide, not a container.
Before you begin
Note: If you are using VPC Service Controls and are restricting the
App Hub API, Observability API, Telemetry API, Cloud Logging API
or App Topology API, then Google Cloud Observability can't create a topology map.
To generate the topology map for an application, your trace data must contain
application-specific labels. These labels are available only when you instrument
your app with OpenTelemetry, send your trace data to the Telemetry API,
and register your application with App Hub.
To get started, do the following:
Configure Application Monitoring as described in
Set up Application Monitoring .
Setup for Application Monitoring includes configuring the
default trace scope to
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
Note: The permissions listed are sufficient
to view the topology map or an application. However, to view the
topology map at the application management boundary level,
your IAM roles must include
App Topology Viewer. You can't use custom roles.
Instrument your application to use OpenTelemetry
and to
send your trace data to the OTLP endpoint .
View topology for your application management boundary
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
In the Google Cloud console, go to the Application monitoring page:
Go to Application monitoring
If you use the search bar to find this page, then select the result whose subheading is
Monitoring .
In the project picker of the Google Cloud console,
select your
App Hub host project or
management project.
Click the Topology tab. The topology map for your application appears.
From the interactive topology map, you can do the following:
Change the visualization by zooming in or out, repositioning nodes, or by
collapsing or expanding a blue circle.
Get information about attributes and associated incidents by selecting
an application or a node.
For discovered services and workloads, the flyout might display a
Cloud Asset Inventory name . Google Cloud Observability
uses the asset name to determine what data a dashboard displays.
Get information about traffic between nodes by selecting the edge. A flyout
displays the node names and key metrics, such as
the error rate and the 95th latency percentile.
View the topology map for an application
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
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
From the interactive topology map, you can do the following:
Change the visualization by zooming in or out or repositioning nodes.
Get information about attributes and incidents by selecting a node.
Get information about traffic between nodes by selecting the edge. A flyout
displays the node names and key metrics, such as
the error rate and the 95th latency percentile.
Troubleshoot
For information that might help you understand why the application topology map
doesn't display data, see
Troubleshoot Application Monitoring .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
