---
title: "Control access with IAM \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/monitoring/access-control
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/monitoring/access-control
source_metadata:
  url: https://docs.cloud.google.com/monitoring/access-control
  title: "Control access with IAM \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation"
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
Control access with IAM
Stay organized with collections
Save and categorize content based on your preferences.
To use Monitoring, you must have the appropriate
Identity and Access Management (IAM) permissions.
In general, each REST method in an API has an associated permission.
To use the method, or use a console feature that relies on the method, you must
have the permission to use the corresponding method.
Permissions aren't granted directly to users; permissions are instead granted
indirectly through roles, which group multiple permissions to make managing them
easier:
For information about access control, see
Concepts related to access management .
For information about how to grant roles to principals, see
Grant access to Cloud Monitoring .
Roles for common combinations of permissions are predefined for you. However,
you can also create your own combinations of permissions by
creating IAM custom roles .
Best practice
We recommend that you create Google groups to manage access to
Google Cloud projects:
For more information, see
Managing groups in the Google Cloud console .
For information about setting limits on roles, see
Set limits on granting roles .
For a complete list of IAM roles and permissions, see
IAM basic and predefined roles reference .
VPC Service Controls
For further control access to monitoring data, use
VPC Service Controls in addition to IAM.
VPC Service Controls provides additional security for Cloud Monitoring to help
mitigate the risk of data exfiltration. Using VPC Service Controls, you can add
a metrics scope to a Service Perimeter that protects
Cloud Monitoring resources and services from requests originating outside
the perimeter.
To learn more about Service Perimeters, see the
VPC Service Controls Service Perimeter configuration documentation .
For information about Monitoring's support for
VPC Service Controls, including known limitations, see the
Monitoring VPC Service Controls documentation .
Grant access to Cloud Monitoring
To manage IAM roles for principals you can use the
Identity and Access Management page in the Google Cloud console or the Google Cloud CLI.
However, Cloud Monitoring provides a simplified interface that lets you
manage your Monitoring-specific roles, project-level roles,
and the common roles for Cloud Logging and Cloud Trace.
Note: To grant a principal an IAM role, you
must have the IAM role of Owner.
To grant principals access to Monitoring, Cloud Logging,
or Cloud Trace, or to grant a project-level role, do the following:
Console
In the Google Cloud console, go to the person Permissions page:
Go to Permissions
If you use the search bar to find this page, then select the result whose subheading is
Monitoring .
The Principals with access page doesn't display all principals. It only
lists those principals that have a project-level role, or a role that is
specific to Monitoring, Logging, or
Trace.
The options on this page let you view all principals whose roles include
any Monitoring permission.
Click person_add Grant access .
Click New principals and enter the username for the principal. You can
add several principals.
Expand arrow_drop_down Select a role , select a value from the
By product or service menu, and then select a role from the Roles
menu:
By product or service selection
Roles selection
Description
Monitoring
Monitoring Viewer
View Monitoring data and configuration information.
For example, principals with this role can view
custom dashboards and
alerting policies .
Monitoring
Monitoring Editor
View Monitoring data, and
create and edit configurations. For example, principals
with this role can create
custom dashboards and
alerting policies .
Monitoring
Monitoring Admin
Full access to Monitoring in the
Google Cloud console and the Cloud Monitoring API.
You can view Monitoring data,
create and edit configurations, and modify the
metrics scope .
Cloud Trace
Cloud Trace User
Full access to the Trace console, read access to traces,
and read-write access to sinks. For more information, see
Trace roles .
Cloud Trace
Cloud Trace Admin
Full access to the Trace console, read-write access to traces,
and read-write access to sinks. For more information, see
Trace roles .
Logging
Logs Viewer
View access to logs. For more information, see
Logging roles .
Logging
Logging Admin
Full access to all features of Cloud Logging. For
more information, see
Logging roles .
Project
Viewer
View access to most Google Cloud resources.
Project
Editor
View, create, update, and delete most Google Cloud resources.
Project
Owner
Full access to most Google Cloud resources.
Optional: To grant the same principals another role, click
Add another role and repeat the previous step.
Click Save .
The previous steps describe how to grant a principal certain roles by using
Monitoring pages in the Google Cloud console. For these
roles, this page also supports edit and delete options:
To remove roles for a principal,
select the box next to the principal and then click
person_remove Remove access .
To edit the roles for a principal,
click edit Edit . After you update the settings,
click Save .
gcloud
Use the
gcloud projects add-iam-policy-binding
command to grant the monitoring.viewer or
monitoring.editor role.
For example:
export PROJECT_ID = "my-test-project"
export EMAIL_ADDRESS = "myuser@gmail.com"
gcloud projects add - iam - policy - binding \
$ PROJECT_ID \
-- member = "user:$EMAIL_ADDRESS" \
-- role = "roles/monitoring.editor"
You can confirm the granted roles using the
gcloud projects get-iam-policy
command:
export PROJECT_ID = "my-test-project"
gcloud projects get - iam - policy $ PROJECT_ID
Predefined roles
This section lists a subset of IAM roles that are predefined by
Cloud Monitoring.
Monitoring roles
The following roles grant general permissions for Monitoring:
Name Title
Includes permissions
roles/monitoring.viewer
Monitoring Viewer
Grants read-only access to Monitoring in the Google Cloud console and
the Cloud Monitoring API.
roles/monitoring.editor
Monitoring Editor
Grants read-write access to Monitoring in the Google Cloud console
and the Cloud Monitoring API.
roles/monitoring.admin
Monitoring Admin
Grants full access to Monitoring in the Google Cloud console
and the Cloud Monitoring API.
The following role is used by service accounts for write-only access:
Name Title
Description
roles/monitoring.metricWriter Monitoring Metric Writer
This role is for service accounts and agents.
Doesn't permit access to Monitoring in the Google Cloud console.
Permits writing monitoring data to a metrics scope.
Alerting policy roles
The following roles grant permissions for alert policies:
Name Title
Description
roles/monitoring.alertPolicyViewer Monitoring AlertPolicy Viewer
Grants read-only access to alert policies.
roles/monitoring.alertPolicyEditor Monitoring AlertPolicy Editor
Grants read-write access to alert policies.
Dashboard roles
The following roles grant permissions only for dashboards:
Name Title
Description
roles/monitoring.dashboardViewer Monitoring Dashboard Configuration Viewer
Grants read-only access to dashboard configurations.
roles/monitoring.dashboardEditor Monitoring Dashboard Configuration Editor
Grants read-write access to dashboard configurations.
Incident roles
The following roles grant permissions only for incidents:
Name Title
Description
roles/monitoring.cloudConsoleIncidentViewer Monitoring Cloud Console Incident Viewer
Grants access to view incidents by using the Google Cloud console.
roles/monitoring.cloudConsoleIncidentEditor Monitoring Cloud Console Incident Editor
Grants access to view, acknowledge, and close incidents by using the Google Cloud console.
Note: You can't grant the individual permissions associated with these roles.
For information about how to resolve IAM permission errors when
viewing incidents, see
Unable to view incident details due to a permission error .
Notification channel roles
The following roles grant permissions only for notification channels:
Name Title
Description
roles/monitoring.notificationChannelViewer Monitoring NotificationChannel Viewer
Grants read-only access to notification channels.
roles/monitoring.notificationChannelEditor Monitoring NotificationChannel Editor
Grants read-write access to notification channels.
Snooze notification roles
The following roles grant permissions to snooze notifications:
Name Title
Description
roles/monitoring.snoozeViewer Monitoring Snooze Viewer
Grants read-only access to snoozes.
roles/monitoring.snoozeEditor Monitoring Snooze Editor
Grants read-write access to snoozes.
Service monitoring roles
The following roles grant permissions for managing services:
Name Title
Description
roles/monitoring.servicesViewer Monitoring Services Viewer
Grants read-only access to services.
roles/monitoring.servicesEditor Monitoring Services Editor
Grants read-write access to services.
For more information on service monitoring, see SLO monitoring .
Uptime-check configuration roles
The following roles grant permissions only for uptime-check configurations:
Name Title
Description
roles/monitoring.uptimeCheckConfigViewer Monitoring Uptime Check Configurations Viewer
Grants read-only access to uptime-check configurations.
roles/monitoring.uptimeCheckConfigEditor Monitoring Uptime Check Configurations Editor
Grants read-write access to uptime-check configurations.
Metrics scope configuration roles
The following roles grant general permissions for
metrics scopes :
Name Title
Description
roles/monitoring.metricsScopesViewer Monitoring metrics scopes Viewer
Grants read-only access to metrics scopes.
roles/monitoring.metricsScopesAdmin Monitoring metrics scopes Admin
Grants read-write access to metrics scopes.
Permissions for predefined roles
This section lists the permissions assigned to predefined roles associated
with Monitoring.
Note: If no permissions are listed for a role, then there aren't public
permissions for that role.
For more information about predefined roles, see
IAM: Roles and permissions .
For help choosing the most appropriate predefined roles,
see Choose predefined roles .
Permissions for Monitoring roles
Role
Permissions
Monitoring Admin
( roles/ monitoring.admin )
Provides full access to Cloud Monitoring.
Lowest-level resources where you can grant this role:
Project
cloudnotifications. activities. list
monitoring.*
monitoring. alertPolicies. create
monitoring. alertPolicies. createTagBinding
monitoring. alertPolicies. delete
monitoring. alertPolicies. deleteTagBinding
monitoring.alertPolicies.get
monitoring.alertPolicies.list
monitoring. alertPolicies. listEffectiveTags
monitoring. alertPolicies. listTagBindings
monitoring. alertPolicies. update
monitoring.alerts.get
monitoring.alerts.list
monitoring.dashboards.create
monitoring. dashboards. createTagBinding
monitoring.dashboards.delete
monitoring. dashboards. deleteTagBinding
monitoring.dashboards.get
monitoring.dashboards.list
monitoring. dashboards. listEffectiveTags
monitoring. dashboards. listTagBindings
monitoring.dashboards.update
monitoring.groups.create
monitoring.groups.delete
monitoring.groups.get
monitoring.groups.list
monitoring.groups.update
monitoring. metricDescriptors. create
monitoring. metricDescriptors. delete
monitoring. metricDescriptors. get
monitoring. metricDescriptors. list
monitoring.metricsScopes.link
monitoring. monitoredResourceDescriptors. get
monitoring. monitoredResourceDescriptors. list
monitoring. notificationChannelDescriptors. get
monitoring. notificationChannelDescriptors. list
monitoring. notificationChannels. create
monitoring. notificationChannels. delete
monitoring. notificationChannels. get
monitoring. notificationChannels. getVerificationCode
monitoring. notificationChannels. list
monitoring. notificationChannels. sendVerificationCode
monitoring. notificationChannels. update
monitoring. notificationChannels. verify
monitoring.services.create
monitoring.services.delete
monitoring.services.get
monitoring.services.list
monitoring.services.update
monitoring.slos.create
monitoring.slos.delete
monitoring.slos.get
monitoring.slos.list
monitoring.slos.update
monitoring.snoozes.create
monitoring.snoozes.get
monitoring.snoozes.list
monitoring.snoozes.update
monitoring.timeSeries.create
monitoring.timeSeries.list
monitoring. uptimeCheckConfigs. create
monitoring. uptimeCheckConfigs. delete
monitoring. uptimeCheckConfigs. get
monitoring. uptimeCheckConfigs. list
monitoring. uptimeCheckConfigs. update
opsconfigmonitoring.*
opsconfigmonitoring. resourceMetadata. list
opsconfigmonitoring. resourceMetadata. write
resourcemanager.projects.get
resourcemanager.projects.list
serviceusage.consumerpolicy.*
serviceusage. consumerpolicy. analyze
serviceusage. consumerpolicy. get
serviceusage. consumerpolicy. update
serviceusage. effectivepolicy. get
serviceusage.groups.*
serviceusage.groups.list
serviceusage. groups. listExpandedMembers
serviceusage. groups. listMembers
serviceusage.services.enable
serviceusage.services.get
serviceusage.values.test
stackdriver.*
stackdriver.projects.edit
stackdriver.projects.get
stackdriver. resourceMetadata. list
stackdriver. resourceMetadata. write
telemetry.metrics.write
Monitoring Editor
( roles/ monitoring.editor )
Provides full access to information about all monitoring data and
configurations.
Lowest-level resources where you can grant this role:
Project
cloudnotifications. activities. list
monitoring.alertPolicies.*
monitoring. alertPolicies. create
monitoring. alertPolicies. createTagBinding
monitoring. alertPolicies. delete
monitoring. alertPolicies. deleteTagBinding
monitoring.alertPolicies.get
monitoring.alertPolicies.list
monitoring. alertPolicies. listEffectiveTags
monitoring. alertPolicies. listTagBindings
monitoring. alertPolicies. update
monitoring.alerts.*
monitoring.alerts.get
monitoring.alerts.list
monitoring.dashboards.*
monitoring.dashboards.create
monitoring. dashboards. createTagBinding
monitoring.dashboards.delete
monitoring. dashboards. deleteTagBinding
monitoring.dashboards.get
monitoring.dashboards.list
monitoring. dashboards. listEffectiveTags
monitoring. dashboards. listTagBindings
monitoring.dashboards.update
monitoring.groups.*
monitoring.groups.create
monitoring.groups.delete
monitoring.groups.get
monitoring.groups.list
monitoring.groups.update
monitoring.metricDescriptors.*
monitoring. metricDescriptors. create
monitoring. metricDescriptors. delete
monitoring. metricDescriptors. get
monitoring. metricDescriptors. list
monitoring. monitoredResourceDescriptors.*
monitoring. monitoredResourceDescriptors. get
monitoring. monitoredResourceDescriptors. list
monitoring. notificationChannelDescriptors.*
monitoring. notificationChannelDescriptors. get
monitoring. notificationChannelDescriptors. list
monitoring. notificationChannels. create
monitoring. notificationChannels. delete
monitoring. notificationChannels. get
monitoring. notificationChannels. list
monitoring. notificationChannels. sendVerificationCode
monitoring. notificationChannels. update
monitoring. notificationChannels. verify
monitoring.services.*
monitoring.services.create
monitoring.services.delete
monitoring.services.get
monitoring.services.list
monitoring.services.update
monitoring.slos.*
monitoring.slos.create
monitoring.slos.delete
monitoring.slos.get
monitoring.slos.list
monitoring.slos.update
monitoring.snoozes.*
monitoring.snoozes.create
monitoring.snoozes.get
monitoring.snoozes.list
monitoring.snoozes.update
monitoring.timeSeries.*
monitoring.timeSeries.create
monitoring.timeSeries.list
monitoring. uptimeCheckConfigs.*
monitoring. uptimeCheckConfigs. create
monitoring. uptimeCheckConfigs. delete
monitoring. uptimeCheckConfigs. get
monitoring. uptimeCheckConfigs. list
monitoring. uptimeCheckConfigs. update
opsconfigmonitoring.*
opsconfigmonitoring. resourceMetadata. list
opsconfigmonitoring. resourceMetadata. write
resourcemanager.projects.get
resourcemanager.projects.list
serviceusage.consumerpolicy.*
serviceusage. consumerpolicy. analyze
serviceusage. consumerpolicy. get
serviceusage. consumerpolicy. update
serviceusage. effectivepolicy. get
serviceusage.groups.*
serviceusage.groups.list
serviceusage. groups. listExpandedMembers
serviceusage. groups. listMembers
serviceusage.services.enable
serviceusage.services.get
serviceusage.values.test
stackdriver.*
stackdriver.projects.edit
stackdriver.projects.get
stackdriver. resourceMetadata. list
stackdriver. resourceMetadata. write
telemetry.metrics.write
Monitoring Metric Writer
( roles/ monitoring.metricWriter )
Provides write-only access to metrics. This provides exactly the permissions
needed by the Cloud Monitoring agent and other systems that send metrics.
Lowest-level resources where you can grant this role:
Project
monitoring. metricDescriptors. create
monitoring. metricDescriptors. get
monitoring. metricDescriptors. list
monitoring. monitoredResourceDescriptors.*
monitoring. monitoredResourceDescriptors. get
monitoring. monitoredResourceDescriptors. list
monitoring.timeSeries.create
telemetry.metrics.write
Monitoring Viewer
( roles/ monitoring.viewer )
Provides read-only access to get and list information about all monitoring
data and configurations.
Lowest-level resources where you can grant this role:
Project
cloudnotifications. activities. list
monitoring.alertPolicies.get
monitoring.alertPolicies.list
monitoring. alertPolicies. listEffectiveTags
monitoring. alertPolicies. listTagBindings
monitoring.alerts.*
monitoring.alerts.get
monitoring.alerts.list
monitoring.dashboards.get
monitoring.dashboards.list
monitoring. dashboards. listEffectiveTags
monitoring. dashboards. listTagBindings
monitoring.groups.get
monitoring.groups.list
monitoring. metricDescriptors. get
monitoring. metricDescriptors. list
monitoring. monitoredResourceDescriptors.*
monitoring. monitoredResourceDescriptors. get
monitoring. monitoredResourceDescriptors. list
monitoring. notificationChannelDescriptors.*
monitoring. notificationChannelDescriptors. get
monitoring. notificationChannelDescriptors. list
monitoring. notificationChannels. get
monitoring. notificationChannels. list
monitoring.services.get
monitoring.services.list
monitoring.slos.get
monitoring.slos.list
monitoring.snoozes.get
monitoring.snoozes.list
monitoring.timeSeries.list
monitoring. uptimeCheckConfigs. get
monitoring. uptimeCheckConfigs. list
opsconfigmonitoring. resourceMetadata. list
resourcemanager.projects.get
resourcemanager.projects.list
stackdriver.projects.get
stackdriver. resourceMetadata. list
Stackdriver Admin
( roles/ stackdriver.admin )
Admin role for stackdriver
resourcemanager.projects.get
resourcemanager.projects.list
stackdriver.*
stackdriver.projects.edit
stackdriver.projects.get
stackdriver. resourceMetadata. list
stackdriver. resourceMetadata. write
Stackdriver Viewer
( roles/ stackdriver.viewer )
Viewer role for stackdriver
resourcemanager.projects.get
resourcemanager.projects.list
stackdriver.projects.get
stackdriver. resourceMetadata. list
Monitoring AlertPolicy Editor
( roles/ monitoring.alertPolicyEditor )
Read/write access to alerting policies.
monitoring.alertPolicies.*
monitoring. alertPolicies. create
monitoring. alertPolicies. createTagBinding
monitoring. alertPolicies. delete
monitoring. alertPolicies. deleteTagBinding
monitoring.alertPolicies.get
monitoring.alertPolicies.list
monitoring. alertPolicies. listEffectiveTags
monitoring. alertPolicies. listTagBindings
monitoring. alertPolicies. update
Monitoring AlertPolicy Viewer
( roles/ monitoring.alertPolicyViewer )
Read-only access to alerting policies.
monitoring.alertPolicies.get
monitoring.alertPolicies.list
monitoring. alertPolicies. listEffectiveTags
monitoring. alertPolicies. listTagBindings
Monitoring Alert Viewer
Beta
( roles/ monitoring.alertViewer )
Read access to alerts.
monitoring.alerts.*
monitoring.alerts.get
monitoring.alerts.list
Monitoring Cloud Console Incident Editor
Beta
( roles/ monitoring.cloudConsoleIncidentEditor )
Read/write access to incidents from Cloud Console.
monitoring.alerts.*
monitoring.alerts.get
monitoring.alerts.list
Monitoring Cloud Console Incident Viewer
Beta
( roles/ monitoring.cloudConsoleIncidentViewer )
Read access to incidents from Cloud Console.
monitoring.alerts.*
monitoring.alerts.get
monitoring.alerts.list
Monitoring Dashboard Configuration Editor
( roles/ monitoring.dashboardEditor )
Read/write access to dashboard configurations.
monitoring.dashboards.*
monitoring.dashboards.create
monitoring. dashboards. createTagBinding
monitoring.dashboards.delete
monitoring. dashboards. deleteTagBinding
monitoring.dashboards.get
monitoring.dashboards.list
monitoring. dashboards. listEffectiveTags
monitoring. dashboards. listTagBindings
monitoring.dashboards.update
Monitoring Dashboard Configuration Viewer
( roles/ monitoring.dashboardViewer )
Read-only access to dashboard configurations.
monitoring.dashboards.get
monitoring.dashboards.list
monitoring. dashboards. listEffectiveTags
monitoring. dashboards. listTagBindings
Monitoring Metrics Scopes Admin
Beta
( roles/ monitoring.metricsScopesAdmin )
Access to add and remove monitored projects from metrics scopes.
monitoring.metricsScopes.link
resourcemanager.projects.get
resourcemanager.projects.list
Monitoring Metrics Scopes Viewer
Beta
( roles/ monitoring.metricsScopesViewer )
Read-only access to metrics scopes and their monitored projects.
resourcemanager.projects.get
resourcemanager.projects.list
Monitoring NotificationChannel Editor
Beta
( roles/ monitoring.notificationChannelEditor )
Read/write access to notification channels.
monitoring. notificationChannelDescriptors.*
monitoring. notificationChannelDescriptors. get
monitoring. notificationChannelDescriptors. list
monitoring. notificationChannels. create
monitoring. notificationChannels. delete
monitoring. notificationChannels. get
monitoring. notificationChannels. list
monitoring. notificationChannels. sendVerificationCode
monitoring. notificationChannels. update
monitoring. notificationChannels. verify
Monitoring NotificationChannel Viewer
Beta
( roles/ monitoring.notificationChannelViewer )
Read-only access to notification channels.
monitoring. notificationChannelDescriptors.*
monitoring. notificationChannelDescriptors. get
monitoring. notificationChannelDescriptors. list
monitoring. notificationChannels. get
monitoring. notificationChannels. list
Monitoring Services Editor
( roles/ monitoring.servicesEditor )
Read/write access to services.
monitoring.services.*
monitoring.services.create
monitoring.services.delete
monitoring.services.get
monitoring.services.list
monitoring.services.update
monitoring.slos.*
monitoring.slos.create
monitoring.slos.delete
monitoring.slos.get
monitoring.slos.list
monitoring.slos.update
Monitoring Services Viewer
( roles/ monitoring.servicesViewer )
Read-only access to services.
monitoring.services.get
monitoring.services.list
monitoring.slos.get
monitoring.slos.list
Monitoring Snooze Editor
( roles/ monitoring.snoozeEditor )
monitoring.snoozes.*
monitoring.snoozes.create
monitoring.snoozes.get
monitoring.snoozes.list
monitoring.snoozes.update
Monitoring Snooze Viewer
( roles/ monitoring.snoozeViewer )
monitoring.snoozes.get
monitoring.snoozes.list
Monitoring Uptime Check Configuration Editor
Beta
( roles/ monitoring.uptimeCheckConfigEditor )
Read/write access to uptime check configurations.
monitoring. uptimeCheckConfigs.*
monitoring. uptimeCheckConfigs. create
monitoring. uptimeCheckConfigs. delete
monitoring. uptimeCheckConfigs. get
monitoring. uptimeCheckConfigs. list
monitoring. uptimeCheckConfigs. update
Monitoring Uptime Check Configuration Viewer
Beta
( roles/ monitoring.uptimeCheckConfigViewer )
Read-only access to uptime check configurations.
monitoring. uptimeCheckConfigs. get
monitoring. uptimeCheckConfigs. list
Ops Config Monitoring Resource Metadata Viewer
Beta
( roles/ opsconfigmonitoring.resourceMetadata.viewer )
Read-only access to resource metadata.
opsconfigmonitoring. resourceMetadata. list
Ops Config Monitoring Resource Metadata Writer
Beta
( roles/ opsconfigmonitoring.resourceMetadata.writer )
Write-only access to resource metadata. This provides exactly the permissions needed by the Ops Config Monitoring metadata agent and other systems that send metadata.
opsconfigmonitoring. resourceMetadata. write
Stackdriver Accounts Editor
( roles/ stackdriver.accounts.editor )
Read/write access to manage Stackdriver account structure.
resourcemanager.projects.get
resourcemanager.projects.list
serviceusage.consumerpolicy.*
serviceusage. consumerpolicy. analyze
serviceusage. consumerpolicy. get
serviceusage. consumerpolicy. update
serviceusage. effectivepolicy. get
serviceusage.groups.*
serviceusage.groups.list
serviceusage. groups. listExpandedMembers
serviceusage. groups. listMembers
serviceusage.services.enable
serviceusage.services.get
serviceusage.values.test
stackdriver.projects.*
stackdriver.projects.edit
stackdriver.projects.get
Stackdriver Accounts Viewer
( roles/ stackdriver.accounts.viewer )
Read-only access to get and list information about Stackdriver account structure.
resourcemanager.projects.get
resourcemanager.projects.list
stackdriver.projects.get
Stackdriver Resource Metadata Writer
Beta
( roles/ stackdriver.resourceMetadata.writer )
Write-only access to resource metadata. This provides exactly the permissions needed by the Stackdriver metadata agent and other systems that send metadata.
stackdriver. resourceMetadata. write
Service agent roles
Service agent roles should only be granted to service agents .
Role
Permissions
Monitoring Service Agent
( roles/ monitoring.notificationServiceAgent )
Grants permissions to deliver notifications directly to resources within the target project, such as delivering to Pub/Sub topics within the project.
Warning: Do not grant service agent roles to any principals except
service agents .
bigquery.jobs.create
cloudfunctions.functions.get
cloudtrace.traces.patch
logging.links.list
monitoring. metricDescriptors. get
monitoring. metricDescriptors. list
monitoring. monitoredResourceDescriptors.*
monitoring. monitoredResourceDescriptors. get
monitoring. monitoredResourceDescriptors. list
monitoring. notificationChannels. get
monitoring. notificationChannels. list
monitoring. notificationChannels. update
monitoring.timeSeries.list
observability.links.list
run.routes.invoke
servicedirectory. networks. access
servicedirectory. services. resolve
serviceusage.services.use
Monitoring permissions included in Google Cloud basic roles
The Google Cloud basic roles include the following
permissions:
Name Title
Includes permissions
roles/viewer
Viewer
The Monitoring permissions are the same as those
in roles/monitoring.viewer .
roles/editor
Editor
The Monitoring permissions are the same as those in
roles/monitoring.editor with the
exception of the stackdriver.projects.edit permission.
The role roles/editor doesn't include the
stackdriver.projects.edit permission.
This role doesn't grant permission to modify a metrics scope.
To modify a metrics scope when using the API, your role must include the
permission monitoring.metricsScopes.link .
To modify a metrics scope when using the Google Cloud console, your role
must either include the permission
monitoring.metricsScopes.link or you must have the role
roles/monitoring.editor .
roles/owner
Owner
The Monitoring permissions are the same as those in
roles/monitoring.admin .
Custom roles
You might want to create a custom role when you want to grant a principal a
more limited set of permissions than those granted with predefined roles.
For example, if you set up
Assured Workloads
because you have data-residency or
Impact Level 4 (IL4)
requirements, then you shouldn't use
uptime checks because there is
no guarantee that uptime-check data is kept in a specific geographic location.
To prevent usage of uptime checks, create a role that doesn't include any
permissions with the prefix monitoring.uptimeCheckConfigs .
To create a custom role with Monitoring permissions, do the
following:
For a role granting permissions only for the Monitoring API,
choose from the permissions in the
Permissions and predefined roles section.
For a role granting permissions for Monitoring in the
Google Cloud console, choose from permission groups in the
Monitoring roles section.
To grant the ability to write monitoring data,
include the permissions from the
role roles/monitoring.metricWriter in the
Permission and predefined roles section.
Note: Some permissions, including
the permissions required to view and manage incidents, aren't supported in
custom roles. Without these permissions, Monitoring in the
Google Cloud console might not function properly.
If a Monitoring role is copied to create a
custom role, then these permissions are omitted:
stackdriver.projects.get
stackdriver.projects.edit
The role
Stackdriver Accounts Viewer ( roles/stackdriver.accounts.viewer )
includes the permission stackdriver.projects.get .
The role
Stackdriver Accounts Editor ( roles/stackdriver.accounts.editor )
includes the permission stackdriver.projects.edit .
For more information on custom roles, go to
Understanding IAM custom roles .
Compute Engine access scopes
Access scopes are the legacy method of specifying permissions for your
Compute Engine VM instances. The following access scopes apply to
Monitoring:
Access scope
Permissions granted
https://www.googleapis.com/auth/monitoring.read
The same permissions as in roles/monitoring.viewer .
https://www.googleapis.com/auth/monitoring.write
The same permissions as in roles/monitoring.metricWriter .
https://www.googleapis.com/auth/monitoring
Full access to Monitoring.
https://www.googleapis.com/auth/cloud-platform
Full access to all enabled Cloud APIs.
For more details, go to Access scopes .
Best practice. It is a good practice is to give your VM instances the
most powerful access scope ( cloud-platform ) and then use IAM
roles to restrict access to specific APIs and operations. For details, go to
Service account permissions .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
