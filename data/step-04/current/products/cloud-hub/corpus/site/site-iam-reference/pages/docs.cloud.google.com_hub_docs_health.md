---
title: "View application and resource health \_|\_ Cloud Hub \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/hub/docs/health
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/hub/docs/security
source_metadata:
  url: https://docs.cloud.google.com/hub/docs/health
  title: "View application and resource health \_|\_ Cloud Hub \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Cloud Hub
Guides
Send feedback
View application and resource health
Stay organized with collections
Save and categorize content based on your preferences.
The Health & troubleshooting page lets you review the health of your
your services and applications.
View open alerts based on alerting policies that you set up in
Cloud Monitoring. When the conditions of an alert policy are met,
Monitoring refers to the open alert as an incident .
View active Google Cloud incidents. These incidents are for Google Cloud
service outages or degradations.
View metrics about the health and performance of Google Cloud
resources such as utilization, latency, or errors.
You can view health data for projects and
supported infrastructure in App Hub applications.
In the project view, you can view health data for active Google Cloud
products in the selected project.
In the application view, you can view health data for services and workloads
in the selected application.
You can also use
Gemini Cloud Assist investigations
to help you troubleshoot an issue.
Before you begin
To view data for App Hub applications, ensure that
the following steps are complete:
Set up App Hub for a folder and create your
applications.
Set up aggregation of logs, metrics, and traces for your
applications.
To use investigations, set up Gemini Cloud Assist .
Note: Cloud Hub only supports applications in a folder configured for
application management. It doesn't support applications in a
host project or a single-project boundary .
Required roles
To get the permissions that
you need to view health data for applications and resources,
ask your administrator to grant you the
following IAM roles on the project ( project view ) or management
project for a folder ( application view ):
View application and project data:
Cloud Hub Operator ( roles/cloudhub.operator )
Create and view investigations:
Investigations Creator ( roles/geminicloudassist.investigationCreator )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
If you want to make changes based on your analysis, you might need additional
permissions or you might need to coordinate with a member of your organization
who has the required permissions. For example, changing the configuration of a
GKE cluster requires the appropriate GKE
permissions.
View health and troubleshooting information
In the Google Cloud console, go to the Health & troubleshooting page,
Go to Health & troubleshooting
Select the project or application that you want to
view:
To view data for applications, choose the folder that is configured for
application management. Folders configured for application management
have an special icon ( ). The management
project for the folder also has a special icon
( ) and the project name is in the
format FOLDER-NAME -mp . If you choose the
management project instead of the folder, then the project picker
automatically changes the selection to the folder.
To view data for an individual project, choose the project
that contains the resources you want to view.
From the time range selector, choose a time range to view. By default, the
page displays alerts, Google Cloud incidents, and health data for the
last hour.
The page displays the following information for the selected time range:
Open alerts : displays the total number of open alerts for alert
policies in a selected project or associated with a selected application.
To view the alerts in Monitoring, click View alerts .
For details about viewing alerts, which Monitoring calls
incidents , see
Incidents for metric-based alerting policies .
Google Cloud incidents : displays The total number of Google Cloud
incidents for the selected project or application. To view the incidents in
Personalized Service Health, click View incidents .
Learn more about viewing incidents in
Service Health.
Google Cloud products (project view): displays open alerts and
Service Health events, including incidents, for each active
Google Cloud product in the selected project. Charts with key health
data for the selected product are displayed below the product list.
Services and workloads (application view): displays open alerts and
Service Health events, including incidents, for each active
Google Cloud service or workload in the application. Charts with key
health data for the selected service or workload are displayed below the
list of service and workloads.
To view details for a listed product, service, or workload, click its name
in the list. You can use the following options to help you understand
events that occurred or troubleshoot issues.
Review the charts for the selected product, service or workload.
Each chart shows health metrics during the selected time period.
Charts also display relevant events. There are several
event types :
Cloud Monitoring alert events.
Service Health events
Product-specific events
By default, charts show recommended events , but you can select the
events you want to view by using the Annotations selector at the top
of the page. To learn more about showing and hiding events on a chart, see
Show events on a dashboard .
You can interact with the charts the same way you interact with other
Monitoring charts.
Learn about exploring chart data .
To view open alerts for a product, service, or workload, click the link
in the Alerts column.
To view Google Cloud relevant incidents that for a product, service,
or workload, click the link in the Google Cloud Incidents
column.
To view review additional details for a product in the project view,
click View details . Each product provides additional observability
data, logs, and other information to help you diagnose and troubleshoot
issues.
To open details for an application workload or service in
Monitoring, click View dashboard . The
Application monitoring page displays the dashboard for the workload
or service.
Troubleshoot with Gemini Cloud Assist
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Gemini Cloud Assist investigations are a
root-cause analysis (RCA) tool for troubleshooting your Google Cloud
infrastructure and applications. Investigations can help you to diagnose and
resolve issues more quickly.
In Cloud Hub, you can view your recent investigations or open
a new investigation.
To create or view investigations, do the following:
In the Google Cloud console, go to the Health & troubleshooting page,
Go to Health & troubleshooting
Select the project or application that you want to
view:
To view data for applications, choose the folder that is configured for
application management. Folders configured for application management
have an special icon ( ). The management
project for the folder also has a special icon
( ) and the project name is in the
format FOLDER-NAME -mp . If you choose the
management project instead of the folder, then the project picker
automatically changes the selection to the folder.
To view data for an individual project, choose the project
that contains the resources you want to view.
The Recent Cloud Assist Investigations section displays recent
investigations that you created or have access to view.
To create an investigation, click Investigate . On the
Create new investigation page, follow the instructions to
create an investigation .
To view details for a recent investigation, click the name of the
investigation name. You can then
review the investigation .
To see all investigations that you have access to view, click
View all .
What's next
Learn more about Monitoring alerts .
Learn more about Service Health and Google Cloud
incidents.
Learn about Monitoring dashboards .
Learn about
Gemini Cloud Assist investigations .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
