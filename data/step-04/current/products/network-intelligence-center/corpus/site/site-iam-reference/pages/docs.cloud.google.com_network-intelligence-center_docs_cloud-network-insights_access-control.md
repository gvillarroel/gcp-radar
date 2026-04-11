---
title: "Roles and permissions \_|\_ Network Intelligence Center - Cloud Network Insights\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/access-control
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/access-control
source_metadata:
  url: https://docs.cloud.google.com/network-intelligence-center/docs/cloud-network-insights/access-control
  title: "Roles and permissions \_|\_ Network Intelligence Center - Cloud Network\
    \ Insights \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Intelligence Center
Cloud Network Insights
Guides
Roles and permissions
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This product is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA products are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This page describes the Identity and Access Management (IAM) roles and permissions needed
to access Cloud Network Insights. For a detailed description of IAM, see
the Identity and Access Management documentation .
You can grant users or service accounts permissions or predefined roles, or you
can create a custom role that uses permissions that you specify.
You might need to run the add-iam-policy command in the Google Cloud CLI to
grant Cloud Network Insights roles to users.
The roles granted to users in Google Cloud are replicated in AppNeta. If you
can edit Cloud Network Insights resources in the Google Cloud console, you can
edit them in AppNeta.
Roles
This section describes how to use predefined and custom roles when
granting permissions for Cloud Network Insights.
Predefined roles for Cloud Network Insights
Cloud Network Insights has the following predefined roles that allow you to either modify
all Cloud Network Insights resources or view the resources:
Cloud Network Insights Editor ( roles/networkmanagement.CloudNetworkInsightsEditor )
Cloud Network Insights Viewer ( roles/networkmanagement.CloudNetworkInsightsViewer )
If you want to grant users the ability to view Cloud Network Insights in
projects where it is already enabled, you can grant users one of the following
predefined roles:
Cloud Network Management Viewer ( roles/networkmanagement.viewer )
Cloud Network Insights Viewer ( roles/networkmanagement.CloudNetworkInsightsViewer )
For more information about granting roles, see Manage access to projects,
folders, and
organizations .
Cloud Network Insights roles
The following tables describe the IAM predefined roles and their
associated permissions for Cloud Network Insights.
For more information, see the
IAM permissions reference .
Role
Permissions
Cloud Network Insights Editor
(
roles/networkmanagement.CloudNetworkInsightsEditor
)
Full access to Cloud Network Insights resources.
Lowest-level resources where you can grant this role:
Project
networkmanagement.providers.get
networkmanagement.providers.list
networkmanagement.providers.generateProviderAccessToken
networkmanagement.providers.create
networkmanagement.providers.delete
networkmanagement.providers.downloadConfig
networkmanagement.monitoringPoints.get
networkmanagement.monitoringPoints.list
networkmanagement.networkPaths.get
networkmanagement.networkPaths.list
networkmanagement.webPaths.get
networkmanagement.webPaths.list
productrequirementsservice.requirements.record
productrequirementsservice.requirements.check
Cloud Network Insights Viewer
( roles/networkmanagement.CloudNetworkInsightsViewer )
Read-only access to Cloud Network Insights resources.
Lowest-level resources where you can grant this role:
Project
networkmanagement.providers.get
networkmanagement.providers.list
networkmanagement.providers.generateProviderAccessToken
networkmanagement.monitoringPoints.get
networkmanagement.monitoringPoints.list
networkmanagement.networkPaths.get
networkmanagement.networkPaths.list
networkmanagement.webPaths.get
networkmanagement.webPaths.list
productrequirementsservice.requirements.check
Alerts and logs roles
The following table describes the IAM predefined roles and their associated
permissions to view or manage alerts and logs based on Cloud Network Insights
data. Users also need either the Cloud Network Insights Viewer or Editor role.
Role
Permissions
Logs Viewer
( roles/logging.viewer )
Provides access to view logs.
Lowest-level resources where you can grant this role:
View
logging.buckets.get
logging.buckets.list
logging.exclusions.get
logging.exclusions.list
logging.links.get
logging.links.list
logging.locations.*
logging.logEntries.list
logging.logMetrics.get
logging.logMetrics.list
logging.logScopes.get
logging.logScopes.list
logging.logServiceIndexes.list
logging.logServices.list
logging.logs.list
logging.operations.get
logging.operations.list
logging.queries.getShared
logging.queries.listShared
logging.queries.usePrivate
logging.sinks.get
logging.sinks.list
logging.usage.get
logging.views.get
logging.views.list
observability.scopes.get
resourcemanager.projects.get
Logs Configuration Writer
( roles/logging.configWriter )
Create alerting policies.
Lowest-level resources where you can grant this role:
View
logging.buckets.create
logging.buckets.createTagBinding
logging.buckets.delete
logging.buckets.deleteTagBinding
logging.buckets.get
logging.buckets.list
logging.buckets.listEffectiveTags
logging.buckets.listTagBindings
logging.buckets.undelete
logging.buckets.update
logging.exclusions.*
logging.links.*
logging.locations.*
logging.logMetrics.*
logging.logScopes.*
logging.logServiceIndexes.list
logging.logServices.list
logging.logs.list
logging.notificationRules.*
logging.operations.*
logging.settings.*
logging.sinks.*
logging.sqlAlerts.*
logging.views.create
logging.views.delete
logging.views.get
logging.views.getIamPolicy
logging.views.list
logging.views.update
observability.scopes.get
resourcemanager.projects.get
resourcemanager.projects.list
Monitoring NotificationChannel Editor Beta
( roles/monitoring.notificationChannelEditor )
Create an alerting policy that is tied to a notification.
monitoring.notificationChannelDescriptors.*
monitoring.notificationChannels.create
monitoring.notificationChannels.delete
monitoring.notificationChannels.get
monitoring.notificationChannels.list
monitoring.notificationChannels.sendVerificationCode
monitoring.notificationChannels.update
monitoring.notificationChannels.verify
Monitoring AlertPolicy Viewer
( roles/monitoring.alertPolicyViewer )
View alerting policies.
monitoring.alertPolicies.get
monitoring.alertPolicies.list
monitoring.alertPolicies.listEffectiveTags
monitoring.alertPolicies.listTagBindings
Monitoring AlertPolicy Editor
( roles/monitoring.alertPolicyEditor )
Edit alerting policies.
monitoring.alertPolicies.*
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
