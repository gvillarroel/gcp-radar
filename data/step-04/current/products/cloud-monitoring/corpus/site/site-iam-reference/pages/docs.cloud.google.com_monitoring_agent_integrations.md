---
title: "Manage integrations \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/monitoring/agent/integrations
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/monitoring/access-control
source_metadata:
  url: https://docs.cloud.google.com/monitoring/agent/integrations
  title: "Manage integrations \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation"
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
Manage integrations
Stay organized with collections
Save and categorize content based on your preferences.
This document describes the Cloud Monitoring Integrations page,
a central location from which you can manage and review the status of
Monitoring integrations with Google services and with your
third-party applications.
Many Google services like Compute Engine send telemetry to
Cloud Monitoring. You can use the Integrations page to see the kinds
of telemetry a service sends and to preview dashboards that display the
telemetry.
Cloud Monitoring also provides integrations with third-party applications.
These integrations let you collect telemetry from applications such as Apache
Web Server, MySQL, Redis, and others for deployments running on
Compute Engine and Google Kubernetes Engine.
When using Compute Engine, third-party telemetry is collected by
the Ops Agent .
When using GKE, third-party telemetry is collected by
Google Cloud Managed Service for Prometheus .
You can configure these third-party integrations from the
Integrations page and see the kinds of telemetry each integration provides.
An integration might also provide dashboards and Cloud Monitoring alerting
policies.
When available, dashboards are installed for you after you configure the
integration and it begins collecting metric data. You can preview dashboards
from the Integrations page.
When available, Cloud Monitoring alerting policies can be installed from
the Integrations page. Many of the applications that export
metrics to Managed Service for Prometheus also include Prometheus
Rules configurations for alerts, external to Cloud Monitoring.
Get started
In the Google Cloud console, go to the
Integrations
page:
Go to Integrations
If you use the search bar to find this page, then select the result whose subheading is
Monitoring .
The following screenshot shows an example of the Monitoring
Integrations page:
The Integrations page displays the following:
A listing of how many Compute Engine VMs have the Ops Agent installed and
how many GKE clusters have Managed Service for Prometheus
enabled.
The Quick filters panel that lets you control what is shown in the list
of integrations.
To see the full list of integrations, click All .
To select integrations by deployment platform, click one of the following
options:
Kubernetes Engine
Compute Engine
To select integrations by installation status, click one of the following
options:
Available : shows the integrations you have not installed.
Configured : shows the integrations you have installed.
To limit the list of integrations by the type of application, click one
of the following options:
3rd party services : shows all third-party services that have
integrations with the Ops Agent or Managed Service for Prometheus.
Google services : shows services like Compute Engine that
have predefined dashboards for Cloud Monitoring.
The list of integrations that are currently supported. If you have selected
a quick filter, then the list shows the filtered results. To search the list
for specific integrations, use the filter bar for the list.
The entry for an integration indicates whether dashboards are installed and,
for third-party integrations, shows the number of VMs on which the
integration is installed.
View integration details
To see what an integration provides, click View details on an integration
entry. When an integration is available for both Compute Engine and
GKE, the details page lets you select your
deployment platform.
Depending on the deployment platform and the integration, you see a summary
of the current configuration for the integration, if applicable, and a set of
tabs. The displayed tabs vary with the integration and might include the
following:
Metrics : a table of the metrics collected by the integration. This tab
is open by default.
Logs : a list of logs and their fields collected by the integration.
This tab is not available for third-party integrations
deployed on GKE.
Dashboards : descriptions and previews of the dashboards available for
for the integration. For more information about this tab, see
View dashboard previews .
Alerts : a list of alerting policies available for the integration.
For more information about this tab, see
Install alerting policies .
The following screenshot shows an example of the details pane for a
third-party integration for Compute Engine, with the Metrics tab
selected:
The Metrics tab shows a table of the metrics, if any, collected by the
integration.
If the integration collects logs, then the Logs tab shows the structure of
the logs collected by each Ops Agent log receiver and provides a link to
view those logs in the Logs Explorer. When there
are multiple log receivers, you also have a link to view all logs in one
query. The following screenshot shows an example of a Logs tab:
Configure third-party integrations
If you open the details pane for a third-party integration you haven't
installed, then the panel indicates that you have no dashboards or configured
resources for the integration.
To add the third-party integration to your VMs or clusters,
click Go to configuration guide and follow the instructions.
View dashboard previews
If dashboards are available for an integration, then the details
pane displays a Dashboards tab. Dashboards let you see the metrics
that the integration collects on charts. The Dashboards tab provides
descriptions and static previews of the dashboards for the integration.
To view information about the dashboards and to see previews of the
dashboards, do the following:
From the Integrations page, click View details for an integration.
Select your deployment platform, if applicable.
Select the Dashboards tab.
After you configure a third-party integration and metric collection begins,
Monitoring automatically installs the dashboards available for
the integration. Dashboards for Google services are also installed for you.
To navigate to the installed dashboard from the Dashboards tab,
click View dashboard .
For more information about dashboards in Cloud Monitoring, see
Dashboards and charts .
Install alerting policies
If Cloud Monitoring alerting policies are available for an integration,
then the details pane displays an Alerts tab. Alerting policies instruct
Monitoring to notify you when specified conditions occur.
The Alerts tab provides a list of available alerting policies
and provides an interface for installing them. Alerting policies need
to know where to send notifications, so they require information from
you before installation.
To view the descriptions of available alerting policies, do the following:
From the Integrations page, click View details for an integration.
Select your deployment platform, if applicable.
Select the Alerts tab.
To install alerting policies from the Alerts tab, do the following:
From the list of available alerting policies, select those that you want
to install.
In the Configure notifications section, select one or more notification
channels. You have the option to disable the use of notification channels,
but if you do, then your alerting policies fire silently. You can check
their status in Monitoring, but you receive no notifications.
For information about notification channels, see
Create and manage notification channels .
Click Create Policies .
For more information about alerting policies in Cloud Monitoring, see
Introduction to alerting .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
