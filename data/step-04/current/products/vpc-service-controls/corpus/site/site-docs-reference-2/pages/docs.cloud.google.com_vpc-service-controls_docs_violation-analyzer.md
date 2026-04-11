---
title: "Diagnose an access denial in violation analyzer \_|\_ VPC Service Controls\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/vpc-service-controls/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/vpc-service-controls/docs/violation-analyzer
  title: "Diagnose an access denial in violation analyzer \_|\_ VPC Service Controls\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
VPC Service Controls
Guides
Send feedback
Diagnose an access denial in violation analyzer
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to use the VPC Service Controls violation analyzer to understand
and diagnose access denials from service perimeters in your organization.
VPC Service Controls generates a unique ID and a troubleshooting token when
denying an access request. The violation analyzer lets you diagnose the access
denial using this unique ID and troubleshooting token. VPC Service Controls
logs all the information about an access denial event in Cloud Audit Logs,
including the unique ID and troubleshooting token.
You can generate a comprehensive evaluation report for an access denial in the
violation analyzer using the unique ID or troubleshooting token. This report
evaluates the access denial event at a specific point in time against all
perimeter configurations that protect the resources from the evaluated access
request.
You can also diagnose an access denial and view its classic evaluation report
in the violation analyzer ,
which provides a short summary of why the access denial occurred.
You can also use the violation analyzer to diagnose access denials from the dry run
configuration of a service perimeter.
Before you begin
To understand the device policies in an access level and retrieve the device context
details, make sure that you have the required permissions in Google Workspace
to view the device details. Without the required permissions, troubleshooting access
denials involving device attributes
in access levels might yield inconsistent troubleshooting results.
To get these permissions, make sure that you have any one of the following Google Workspace
roles:
Super Admin, Services Admin, or Mobile Admin role .
A custom administrator role
that contains the Manage Devices and Settings
privilege. You can find this privilege under Services > Mobile Device Management .
For more information about assigning roles, see Assign specific admin roles .
You can use the violation analyzer without these permissions in Google Workspace.
However, the troubleshooting result might differ as specified earlier.
Required roles
To get the permissions that
you need to use the violation analyzer,
ask your administrator to grant you the
following IAM roles:
To diagnose an access denial event using the violation analyzer:
Access Context Manager Reader ( roles/accesscontextmanager.policyReader )
on your organization-level access policy
To fetch the troubleshooting token from Cloud Audit Logs:
Logs Viewer ( roles/logging.viewer )
on the projects that have VPC Service Controls audit logs
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to use the violation analyzer. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to use the violation analyzer:
To diagnose an access denial event using the violation analyzer:
accesscontextmanager.accessLevels.list
on your organization-level access policy
accesscontextmanager.policies.get
on your organization-level access policy
accesscontextmanager.servicePerimeters.list
on your organization-level access policy
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Troubleshoot an access denial event
When VPC Service Controls denies an access request, it generates a unique ID and logs an encrypted troubleshooting token in Cloud Audit Logs. The error returned by the Google Cloud CLI for a VPC Service Controls denial includes the event's unique ID .
Before you begin, obtain the unique ID for the denial that you want to troubleshoot.
Note: If you set up the VPC Service Controls violation dashboard in your organization, the violation dashboard displays access denials by your service perimeters, including the troubleshooting tokens. To diagnose an access denial event, click the troubleshooting token for the event listed in the Violations table of the violation dashboard. VPC Service Controls opens the violation analyzer and displays the troubleshooting result of the access denial.
For more information, see Set up and view the violation dashboard .
Note: You can search for the troubleshooting token in Cloud Audit Logs using the unique ID . The vpcServiceControlsTroubleshootToken field in the log entry contains the troubleshooting token.
Access the violation analyzer
The violation analyzer is available only in the Google Cloud console. You can access the violation analyzer using either the Logs Explorer or the VPC Service Controls page.
Use the Logs Explorer
By using the Logs Explorer , you can move directly from a log entry for a VPC Service Controls denial to the violation analyzer.
To access the violation analyzer from a log entry, do the following:
In the Google Cloud console, go to the Logs Explorer page.
Go to Logs Explorer
On the Logs Explorer page, use the denial's unique ID to access the log entry .
In the Query Results box, in the row for the denial that you want to troubleshoot, click VPC Service Controls , and then click Troubleshoot denial .
Use the VPC Service Controls page
To access the violation analyzer from the VPC Service Controls page, do the following:
In the Google Cloud console navigation menu, click Security , and then click VPC Service Controls .
Go to VPC Service Controls
If you're prompted, select your organization. You can access the VPC Service Controls page only at the organization level.
On the VPC Service Controls page, click Violation analyzer .
On the Violation analyzer page, in the
Troubleshooting token (or unique ID) field, enter the unique ID of the denial that you want to troubleshoot.
Click Continue .
The violation analyzer evaluates the audit logs of the access denial and displays detailed diagnostics on the troubleshooting result page.
If you want to diagnose the access denial and view its classic evaluation report , click Switch to classic view in the troubleshooting result page.
Understand the troubleshooting result
Before you read the troubleshooting result of an access denial event, make sure that
you refer to the following considerations.
Sensitive information redaction
To protect sensitive data, the violation analyzer redacts the following information
in the troubleshooting result:
IP address: When an access request originates from a Google Cloud service
inside an internal production network, the violation analyzer redacts the IP address
of the access request as private .
Network information: The violation analyzer redacts the network information of the
access request as redacted_network , except in the following scenarios:
When you are from the same organization as the network.
When you have the necessary permission to view the network information.
Principal: The violation analyzer redacts the email address of a principal with
... (for example, cl...o@gm...m ), except in the following scenarios:
When you are from the same organization as the access-denied principal.
When the access-denied principal is a service agent or service account.
Some Google Cloud services don't collect identity information. For example, the
legacy App Engine API doesn't collect the caller identities .
When the violation analyzer observes that the principal information is missing in
the logs, the troubleshooting result displays the principal as no information available .
Evaluation status
The violation analyzer evaluates an access denial event against all the perimeter components
and assigns an evaluation status for each component.
The violation analyzer might display the following evaluation statuses in the troubleshooting result:
Status
Description
check_circle Granted
This status indicates that the perimeter component allows the evaluated access request.
error Denied
This status indicates that the perimeter component denies the evaluated access request.
info Not applicable
This status indicates that the perimeter component doesn't restrict the resource or service from the evaluated access request or doesn't enforce the VPC accessible services feature.
warning Unsupported or Unknown
This status indicates that the perimeter component uses features or attributes that the violation analyzer doesn't support. For more information about the unsupported features in the violation analyzer, see Limitations .
View the troubleshooting result
The troubleshooting result page provides a detailed assessment of an access denial
event. This result presents the assessment of the event at the specific point in time
when you requested the violation analyzer to diagnose the event. The troubleshooting
result page categorizes the assessment information under different sections.
The troubleshooting result of an access denial event can have the following sections:
Violation details
Violation evaluation
Restricted resources
Restricted services
Ingress
Egress
VPC accessible services
To view the assessment of a specific perimeter component, select the perimeter component
from the list or click the arrow_right expander arrow
next to the perimeter component. For example, to view the troubleshooting assessment
for an egress rule, select the egress rule or click the arrow_right
expander arrow next to the egress rule.
Note: When you click an access level in the troubleshooting result, the violation analyzer
opens a pane that displays the assessment of the access denial event against the access level.
After you review the troubleshooting result of an access denial event, you can modify
the necessary perimeter components and configuration to resolve the denial. To edit
the selected perimeter, click edit Edit enforced
config or Edit dry run config in the troubleshooting result page. For more
information, see Update a service perimeter .
Violation details
The Violation details section lists the following information about the access denial event:
The time of the access denial event.
The identity of the principal that requested access.
The service for which the principal requested access.
The service method for which the principal requested access.
The IP address of the principal that requested access. This IP address is
the same as the caller_ip value of the access denial event's log entry in
Cloud Audit Logs. For more information, see IP address of the caller in
audit logs .
The troubleshooting token of the access denial event.
The unique ID of the access denial event.
The details of the involved device and region. To view this information, click
View device info .
The log entry details associated with the access denial event. To view this
information, click View log entry .
If the log entry exceeds the Cloud Audit Logs retention period ,
the violation analyzer can't display these details.
Violation evaluation
The Violation evaluation section shows the overall assessment of the access denial
event. The assessment includes both the enforced and dry run mode troubleshooting
results of the perimeter.
The troubleshooting results for an access denial event can vary over time if there
are changes in service perimeters or access policies after VPC Service Controls logs
the access denial event. This behavior is due to the fact that the violation analyzer
fetches the latest information from the relevant service perimeters and access policies
for assessment.
Outcome
The Outcome section shows the assessment of the access denial event against all
the perimeters involved. The value can be Granted , Denied , or Not applicable .
Protected resources accessed
The Protected resources accessed section lists the perimeters with the corresponding
evaluation status against the access denial event. In this section, you can view
the following information:
A list of all resources involved in this access denial event:
The Resources accessed column displays all involved resources protected
by the perimeter.
When you don't have sufficient permissions to view the restricted resources,
the Protected resources accessed section doesn't list the perimeter name
and the Resources accessed column displays the involved project with
a warning icon.
The Other resources accessed section lists all the other involved resources,
grouped under one of the following states:
State
Description
Unrestricted
This state indicates that the resource is not protected by any service perimeter.
Info denied
This state indicates that you don't have sufficient permissions to view the service perimeters protecting the resource.
Error
This state indicates that an internal error has occurred while trying to view the service perimeters protecting the resource.
When you select a perimeter from the list, you can view the troubleshooting
result for the access denial event against the selected perimeter.
You can view the troubleshooting results for different enforcement modes of
the perimeter as well. By default, the troubleshooting result page displays
the Enforced mode troubleshooting result. If you want to view the dry
run mode troubleshooting result, click Dry run . For more information
about the perimeter enforcement modes, see Service perimeter details and
configuration .
Because the enforced mode and dry run mode configurations of a perimeter can
be different, the violation analyzer can generate different troubleshooting
results for the enforced mode and dry run mode configurations.
Restricted resources
In this section, you can view the following information:
The Involved in evaluation row shows only the resources involved in this
violation and protected by the selected perimeter.
The Restricted by perimeter row shows all the resources that are protected
by the selected perimeter.
Restricted services
In this section, you can view the following information:
The Involved in evaluation row shows only the services involved in this
violation and protected by the selected perimeter.
Even if you have already removed the violating service from the perimeter, the
Involved in evaluation row still lists the service and displays a warning
message.
The Restricted by perimeter row shows all the services that are protected
by the selected perimeter.
Ingress
The Ingress section shows the assessment of the access denial event against
all the ingress rules and access levels involved. For each access request, the
violation analyzer evaluates the service agents or networks and the corresponding
target resources against the ingress rules and access levels.
The violation analyzer groups and displays the ingress rule assessment
information based on the ingress rules and access levels. Clicking each rule or
access level in this section expands it to display the target resource names assessed
against that rule or access level.
If you want to resolve a denial by modifying an existing ingress rule, click
edit Edit next to the rule in the
troubleshooting result page. For information about the ingress rule attributes,
see Ingress rules reference .
Egress
The Egress section shows the assessment of the access denial event against
all the egress rules involved. The violation analyzer evaluates the source and
target resource pairs of the access request against the egress rules.
The violation analyzer groups and displays the egress rule assessment information
based on the egress rules. Clicking each rule in this section expands it to display
the detailed assessment of the resources against that rule.
If you want to resolve a denial by modifying an existing egress rule, click
edit Edit next to the rule in the
troubleshooting result page. For information about the egress rule attributes,
see Egress rules reference .
VPC accessible services
The VPC accessible services section shows the status of the services that
are accessible from network endpoints inside the perimeter. These statuses
correspond to the time when the access denial event occurred. If the evaluation
status for a service is Denied , you can't access the service from network
endpoints inside the perimeter.
In this section, you can view the following information:
The Involved in evaluation row shows only the services involved in this
violation and not accessible from network endpoints inside the selected perimeter.
This row also displays services that are not on the perimeter's list of VPC
accessible services, either because these services were removed or were
never included.
The Accessible within perimeter row shows all the services that are accessible
from network endpoints inside the selected perimeter.
For more information, see VPC accessible services .
Compare the enforced and dry run mode results
You can compare the troubleshooting results of an access denial event between
the enforced and dry run modes of the selected perimeter. To compare the
troubleshooting results, click compare_arrows
Compare to dry run on the enforced mode troubleshooting result page of a perimeter.
If the dry run mode inherits the configuration from the enforced mode of the perimeter,
the dry run mode also inherits the enforced mode troubleshooting result.
Note: The enforced mode and dry run mode configurations of a perimeter might not
restrict the same resources and services.
Limitations
You must use the violation analyzer only at the organization scope, and the violation analyzer
is not accessible at the project scope.
The violation analyzer fetches the latest information from the relevant service
perimeters and access policies for assessment. So the troubleshooting results
for an access denial event can vary over time if there are changes in service
perimeters or access policies after VPC Service Controls logs the access denial
event.
Also, if you diagnose an access denial event multiple times, the troubleshooting
results might vary for each diagnosis if the access policy has changed.
The troubleshooting result of an access denial event might differ in the following scenarios:
When you have defined device attribute
based conditions in an access level and used the access level in your service perimeter,
but you don't have the permissions required to view the device details .
When an ingress or egress rule of the service perimeter uses identity groups
or third-party identities .
When you have configured a credential strength policy
in the access level.
When an ingress or egress rule
of the service perimeter uses a service permission as an API operation condition.
What's next
Diagnose an access denial and view the classic report
Debugging requests blocked by VPC Service Controls
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
