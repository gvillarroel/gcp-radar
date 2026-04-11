---
title: "Create and manage firewall endpoint associations \_|\_ Cloud Next Generation\
  \ Firewall \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/firewall/docs/configure-firewall-endpoint-associations
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/firewall/docs/about-firewalls
source_metadata:
  url: https://docs.cloud.google.com/firewall/docs/configure-firewall-endpoint-associations
  title: "Create and manage firewall endpoint associations \_|\_ Cloud Next Generation\
    \ Firewall \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Cloud NGFW
Guides
Send feedback
Create and manage firewall endpoint associations
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to create and manage firewall endpoint
associations by using the Google Cloud console and Google Cloud CLI.
When you associate a firewall
endpoint with one or more
Virtual Private Cloud (VPC) networks, you create the association in the same zone
of the firewall endpoint. You can also associate firewall endpoints in different
zones to a VPC network.
A firewall endpoint with jumbo frame support can accept packets only up to
8,500 bytes. Alternatively, a firewall endpoint without jumbo frame support
can accept packets only up to 1,460 bytes. If you need URL filtering or intrusion detection and prevention service, we recommend that you
configure the associated
VPC networks to use the maximum transmission unit (MTU)
limits of 8,500 bytes and 1,460 bytes. For more information, see
Supported packet size .
Caution: A firewall endpoint doesn't perform URL filtering or intrusion detection and prevention service for
a VPC network if the network is configured with an MTU that's greater than the
firewall endpoint's limit.
Note: To check the progress of the operations listed on this page,
make sure that your user role has the following
Compute Network User role ( roles/compute.networkUser )
permissions:
networksecurity.operations.get
networksecurity.operations.list
Before you begin
You need a
VPC network and
a subnet .
You must enable
the Compute Engine API in your Google Cloud project.
You must enable
the Network Security API
in your Google Cloud project.
You must enable
the Certificate Authority Service API
in your Google Cloud project.
Install the gcloud CLI if you want to run the gcloud
command-line examples in this guide.
You need a firewall endpoint .
Roles
To get the permissions that you need to create, view, update, or delete
firewall endpoint associations, ask your administrator to grant you the necessary
IAM roles on your
organization and project. For more information about granting roles, see
Manage access .
Quotas
To view quotas for firewall endpoint associations, see Quotas and limits .
Create firewall endpoint associations
Google Cloud console lets you create firewall endpoint associations for any of
the following:
A specific VPC network
A specific firewall endpoint
A project
All these options create the same association. The only
difference between associations created in the Google Cloud console is where you begin
the process of creating them. For associations created by using the
gcloud CLI, the process is the same for all of the firewall endpoint
associations.
Note: Cloud NGFW might take up to 15 minutes to create a firewall
endpoint association.
Create firewall endpoint associations for a VPC network
You can associate one or more firewall endpoints to a specific VPC
network. Each of the associated firewall endpoints belongs to a different zone
within the VPC network.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your project.
Permissions
networksecurity.firewallEndpointAssociations.create
networksecurity.firewallEndpoints.use on the organization where the firewall endpoint is created.
Roles
Compute Network Admin ( roles/compute.networkAdmin )
Firewall Endpoint Admin ( roles/networksecurity.firewallEndpointAdmin )
Console
In the Google Cloud console, go to the VPC networks page.
Go to VPC networks
Click the name of a VPC network to show its
VPC network details page.
Select the Firewall endpoints tab.
Click Create endpoint association .
In the Region list, select the region where you want to create
the firewall endpoint association.
In the Zone list, select the zone where you want to create
the firewall endpoint association.
In the Firewall endpoint list, select the firewall endpoint that you
want to associate with this VPC network.
In the TLS inspection policy list, select the TLS inspection policy
that you want to add to this VPC network.
Click Create .
gcloud
To create a firewall endpoint association, use the gcloud network-security
firewall-endpoint-associations create
command :
gcloud network-security firewall-endpoint-associations \
create NAME \
--endpoint organizations/ ORGANIZATION_ID /locations/ ZONE /firewallEndpoints/ FIREWALL_ENDPOINT_NAME \
--network projects/ PROJECT_NAME /global/networks/ NETWORK_NAME \
--zone ZONE \
--project PROJECT_ID \
[ --tls-inspection-policy projects/ TLS_PROJECT_NAME /locations/ REGION_NAME /tlsInspectionPolicies/ TLS_POLICY_NAME ]
Replace the following:
NAME : the name of the firewall endpoint association.
Don't include sensitive information such as
personally identifiable information or security data in the
firewall endpoint association name.
ORGANIZATION_ID : the organization identifier where
the firewall endpoint is created.
ZONE : the zone of the firewall endpoint.
FIREWALL_ENDPOINT_NAME : the name of the firewall
endpoint.
PROJECT_NAME : the Google Cloud project name of the
network.
NETWORK_NAME : the name of the network.
PROJECT_ID : the Google Cloud project ID where the
association is created.
TLS_PROJECT_NAME : the Google Cloud project name of
the TLS inspection policy.
REGION_NAME : the region name of the TLS inspection
policy.
TLS_POLICY_NAME : the name of the TLS inspection
policy.
This policy is used for the TLS inspection of the encrypted traffic on
the specified network. This is an optional argument.
Create firewall endpoint associations for a firewall endpoint
You can associate one or more VPC networks to a specific firewall
endpoint in the same zone.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your organization.
Permissions
networksecurity.firewallEndpointAssociations.create
networksecurity.firewallEndpoints.use on the organization where the firewall endpoint is created.
Roles
Compute Network Admin ( roles/compute.networkAdmin )
Firewall Endpoint Admin ( roles/networksecurity.firewallEndpointAdmin )
Console
In the Google Cloud console, go to the Firewall endpoints page.
Go to Firewall endpoints
In the project selector menu, select your organization.
Click the firewall endpoint to view its details.
Click Create endpoint association .
Click Add endpoint association .
In the Project list, select the Google Cloud project where you want to
create the firewall endpoint association.
If the Compute Engine API and Network Security API are not enabled for the
Google Cloud project, click Enable .
In the Network list, select the network that you want to associate
to the firewall endpoint.
In the TLS inspection policy list, select the TLS inspection policy
that you want to add to this association.
To add another association, click Add endpoint association .
Click Create .
gcloud
To create a firewall endpoint association, use the gcloud network-security
firewall-endpoint-associations create
command :
gcloud network-security firewall-endpoint-associations \
create NAME \
--endpoint organizations/ ORGANIZATION_ID /locations/ ZONE /firewallEndpoints/ FIREWALL_ENDPOINT_NAME \
--network projects/ PROJECT_NAME /global/networks/ NETWORK_NAME \
--zone ZONE \
--project PROJECT_ID \
[ --tls-inspection-policy projects/ TLS_PROJECT_NAME /locations/ REGION_NAME /tlsInspectionPolicies/ TLS_POLICY_NAME ]
Replace the following:
NAME : the name of the firewall endpoint association.
Don't include sensitive information such as
personally identifiable information or security data in the
firewall endpoint association name.
ORGANIZATION_ID : the organization identifier where
the firewall endpoint is created.
ZONE : the zone of the firewall endpoint.
FIREWALL_ENDPOINT_NAME : the name of the firewall
endpoint.
PROJECT_NAME : the Google Cloud project name of the
network.
NETWORK_NAME : the name of the network.
PROJECT_ID : the Google Cloud project ID where the
association is created.
TLS_PROJECT_NAME : the Google Cloud project name of
the TLS inspection policy.
REGION_NAME : the region name of the TLS inspection
policy.
TLS_POLICY_NAME : the name of the TLS inspection
policy.
This policy is used for the TLS inspection of the encrypted traffic on
the specified network. This is an optional argument.
Create firewall endpoint associations in a project
You can add multiple firewall endpoint associations to a specific project.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your project.
Permissions
networksecurity.firewallEndpointAssociations.create
networksecurity.firewallEndpoints.use on the organization where the firewall endpoint is created.
Roles
Compute Network Admin ( roles/compute.networkAdmin )
Firewall Endpoint Admin ( roles/networksecurity.firewallEndpointAdmin )
Console
In the Google Cloud console, go to the Firewall endpoints page.
Go to Firewall endpoints
In the project selector menu, select your Google Cloud project.
Click Create endpoint association .
In the Region list, select the region where you want to create
the firewall endpoint association.
In the Zone list, select the zone where you want to create the
firewall endpoint association.
In the Firewall endpoint list, select the firewall endpoint that you
want to add to the association.
In the Network list, select the network that you want to add to the
association.
In the TLS inspection policy , select the TLS inspection policy
that you want to add to this association.
Click Create .
gcloud
To create a firewall endpoint association, use the gcloud network-security
firewall-endpoint-associations create
command :
gcloud network-security firewall-endpoint-associations \
create NAME \
--endpoint organizations/ ORGANIZATION_ID /locations/ ZONE /firewallEndpoints/ FIREWALL_ENDPOINT_NAME \
--network projects/ PROJECT_NAME /global/networks/ NETWORK_NAME \
--zone ZONE \
--project PROJECT_ID \
[ --tls-inspection-policy projects/ TLS_PROJECT_NAME /locations/ REGION_NAME /tlsInspectionPolicies/ TLS_POLICY_NAME ]
Replace the following:
NAME : the name of the firewall endpoint association.
ORGANIZATION_ID : the organization identifier
where the firewall endpoint is created.
ZONE : the zone of the firewall endpoint.
FIREWALL_ENDPOINT_NAME : the name of the firewall
endpoint.
PROJECT_NAME : the Google Cloud project name of the network.
NETWORK_NAME : the name of the network.
PROJECT_ID : the Google Cloud project ID where the
association is created.
TLS_PROJECT_NAME : the Google Cloud project name of
the TLS inspection policy.
REGION_NAME : the region name of the TLS
inspection policy.
TLS_POLICY_NAME : the name of the TLS inspection policy.
This policy is used for the TLS inspection of the encrypted traffic on
the specified network. This is an optional argument.
View a firewall endpoint association
You can view the details of a specific firewall endpoint association in a zone.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your project.
Permissions
networksecurity.firewallEndpointAssociations.get
Roles
Compute Network Admin ( roles/compute.networkAdmin )
Compute Network User ( roles/compute.networkUser )
Compute Network Viewer ( roles/compute.networkViewer )
Firewall Endpoint Admin ( roles/networksecurity.firewallEndpointAdmin )
gcloud
To view a firewall endpoint association, use the gcloud network-security
firewall-endpoint-associations describe
command :
gcloud network-security firewall-endpoint-associations \
describe NAME \
--zone ZONE \
[ --project PROJECT_ID ]
Replace the following:
NAME : the name of the firewall endpoint association.
ZONE : the zone of the firewall endpoint association.
PROJECT_ID : the Google Cloud project ID of the
firewall endpoint association.
List firewall endpoint associations
You can list the firewall endpoint associations for a network, a project,
or a firewall endpoint.
List all firewall endpoint associations for a VPC network
You can list all the firewall endpoint associations for a specific
VPC network.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your project.
Permissions
networksecurity.firewallEndpointAssociations.list
Roles
Compute Network Admin ( roles/compute.networkAdmin )
Compute Network User ( roles/compute.networkUser )
Compute Network Viewer ( roles/compute.networkViewer )
Firewall Endpoint Admin ( roles/networksecurity.firewallEndpointAdmin )
Console
In the Google Cloud console, go to the VPC networks page.
Go to VPC networks
Click the name of a VPC network to show its
VPC network details page.
Select the Firewall endpoints tab. The tab shows a list of
configured firewall endpoint associations.
gcloud
To list firewall endpoint associations for a specific network, use the
gcloud network-security firewall-endpoint-associations list command
with the --filter flag:
gcloud network-security firewall-endpoint-associations list \
--filter network: NETWORK_NAME \
[ --project PROJECT_ID ]
Replace the following:
NETWORK_NAME : the name of the VPC
network.
PROJECT_ID : the Google Cloud project ID of the
firewall endpoint association.
List all firewall endpoint associations for a firewall endpoint
You can list all the associations of a specific firewall endpoint.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your organization.
Permissions
networksecurity.firewallEndpointAssociations.list
Roles
Compute Network Admin ( roles/compute.networkAdmin )
Compute Network User ( roles/compute.networkUser )
Compute Network Viewer ( roles/compute.networkViewer )
Firewall Endpoint Admin ( roles/networksecurity.firewallEndpointAdmin )
Console
In the Google Cloud console, go to the Firewall endpoints page.
Go to Firewall endpoints
In the project selector menu, select your organization.
Click the firewall endpoint to view its details.
In the Firewall endpoint details page, the table lists all the
configured firewall endpoint associations.
gcloud
To list firewall endpoint associations for a firewall endpoint, use the
gcloud network-security firewall-endpoint-associations list command
with the --zone flag:
gcloud network-security firewall-endpoint-associations list \
--zone ZONE \
[ --project PROJECT_ID ]
Replace the following:
ZONE : the zone of the firewall endpoint. To list
firewall endpoint associations in all zones, use - .
PROJECT_ID : the Google Cloud project ID of the
firewall endpoint association.
List all firewall endpoint associations in a project
You can list all the firewall endpoint associations in a specific project.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your project.
Permissions
networksecurity.firewallEndpointAssociations.list
Roles
Compute Network Admin ( roles/compute.networkAdmin )
Compute Network User ( roles/compute.networkUser )
Compute Network Viewer ( roles/compute.networkViewer )
Firewall Endpoint Admin ( roles/networksecurity.firewallEndpointAdmin )
Console
In the Google Cloud console, go to the Firewall endpoints page.
Go to Firewall endpoints
In the project selector menu, select your Google Cloud project.
In the Firewall endpoint associations section, the table lists all the
configured firewall endpoint associations for this project.
gcloud
To list firewall endpoint associations in a project, use the gcloud
network-security firewall-endpoint-associations list
command :
gcloud network-security firewall-endpoint-associations list \
[--project PROJECT_ID ]
Replace the following:
PROJECT_ID : the Google Cloud project ID of the
firewall endpoint association.
Edit firewall endpoint associations
Google Cloud console lets you edit firewall endpoint associations for a network, a
project, or a firewall endpoint. The gcloud CLI instructions to
edit firewall endpoint associations are the same for all these options.
Edit a firewall endpoint association for a VPC network
You can edit a firewall endpoint association for a specific zone in a
VPC network.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your project.
Permissions
networksecurity.firewallEndpointAssociations.update
Roles
Compute Network Admin ( roles/compute.networkAdmin )
Firewall Endpoint Admin ( roles/networksecurity.firewallEndpointAdmin )
Console
In the Google Cloud console, go to the VPC networks page.
Go to VPC networks
Click the name of a VPC network to show its
VPC network details page.
Select the Firewall endpoints tab. The tab shows a list of
configured firewall endpoint associations.
Click Edit next to the firewall endpoint association that you want to
update.
To disable the firewall endpoint association, clear the
Enable association checkbox.
To update the TLS inspection policy, select a new policy
from the TLS inspection policy list.
Click Save .
gcloud
To update a firewall endpoint association, use the
gcloud network-security firewall-endpoint-associations update command :
gcloud network-security firewall-endpoint-associations
update NAME \
--zone ZONE \
--project PROJECT_ID \
[ --disabled ] \
[ --tls-inspection-policy projects/ TLS_PROJECT_NAME /locations/ REGION_NAME /tlsInspectionPolicies/ TLS_POLICY_NAME ]
Replace the following:
NAME : the name of the firewall endpoint association.
ZONE : the zone of the firewall endpoint association.
PROJECT_ID : the Google Cloud project ID where the
association is created.
TLS_PROJECT_NAME : the Google Cloud project name of
the TLS inspection policy.
REGION_NAME : the region name of the TLS
inspection policy.
TLS_POLICY_NAME : the name of the TLS inspection policy.
Edit a firewall endpoint association for a firewall endpoint
You can edit an association for a specific firewall endpoint.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your organization.
Permissions
networksecurity.firewallEndpointAssociations.update
Roles
Compute Network Admin ( roles/compute.networkAdmin )
Firewall Endpoint Admin ( roles/networksecurity.firewallEndpointAdmin )
Console
In the Google Cloud console, go to the Firewall endpoints page.
Go to Firewall endpoints
In the project selector menu, select your organization.
Click the firewall endpoint to view its details.
In the Firewall endpoint details page, the table lists all the
configured firewall endpoint associations.
Click Edit next to the firewall endpoint association that you want to
update.
To disable the firewall endpoint association, clear the
Enable association checkbox.
To update the TLS inspection policy, select a new policy
from the TLS inspection policy list.
Click Save .
gcloud
To update a firewall endpoint association, use the gcloud network-security
firewall-endpoint-associations update
command :
gcloud network-security firewall-endpoint-associations
update NAME \
--zone ZONE \
--project PROJECT_ID \
[ --disabled ] \
[ --tls-inspection-policy projects/ TLS_PROJECT_NAME /locations/ REGION_NAME /tlsInspectionPolicies/ TLS_POLICY_NAME ]
Replace the following:
NAME : the name of the firewall endpoint association.
ZONE : the zone of the firewall endpoint association.
PROJECT_ID : the Google Cloud project ID where the
association is created.
TLS_PROJECT_NAME : the Google Cloud project name of
the TLS inspection policy.
REGION_NAME : the region name of the TLS inspection
policy.
TLS_POLICY_NAME : the name of the TLS inspection
policy.
Edit a firewall endpoint association in a project
You can edit a firewall endpoint association in a specific project.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your project.
Permissions
networksecurity.firewallEndpointAssociations.update
Roles
Compute Network Admin ( roles/compute.networkAdmin )
Firewall Endpoint Admin ( roles/networksecurity.firewallEndpointAdmin )
Console
In the Google Cloud console, go to the Firewall endpoints page.
Go to Firewall endpoints
In the project selector menu, select your Google Cloud project.
In the Firewall endpoint associations section, the table lists all the
configured firewall endpoint associations for this project.
Next to the firewall endpoint association that you want to
update, click Edit .
To disable the firewall endpoint association, clear the
Enable association checkbox.
To update the TLS inspection policy, select a new policy
from the TLS inspection policy list.
Click Save .
gcloud
To update a firewall endpoint association, use the gcloud network-security
firewall-endpoint-associations update
command :
gcloud network-security firewall-endpoint-associations
update NAME \
--zone ZONE \
--project PROJECT_ID \
[ --disabled ] \
[ --tls-inspection-policy projects/ TLS_PROJECT_NAME /locations/ REGION_NAME /tlsInspectionPolicies/ TLS_POLICY_NAME ]
Replace the following:
NAME : the name of the firewall endpoint association.
ZONE : the zone of the firewall endpoint association.
PROJECT_ID : the Google Cloud project ID where the
association is created.
TLS_PROJECT_NAME : the Google Cloud project name of
the TLS inspection policy.
REGION_NAME : the region name of the TLS
inspection policy.
TLS_POLICY_NAME : the name of the TLS inspection policy.
Delete a firewall endpoint association
Google Cloud console lets you delete the firewall endpoint associations from a
network, a project, or a firewall endpoint.
When a Google Cloud project is deleted, its associated firewall endpoint
associations are automatically removed. This deletion is irreversible,
even if the project is later restored.
However, the deletion process for these associations might sometimes fail.
If this happens and the project is restored, the associated firewall
endpoints appear in ORPHAN state within the restored project. This
indicates the broken link between the project and its resources due to
the unsuccessful deletion.
You can view these orphaned associations on the Google Cloud console,
however, you cannot edit these associations. Cloud Next Generation Firewall runs a
background process periodically that delete these orphaned resources.
Delete a firewall endpoint association for a VPC network
You can delete a firewall endpoint association for a specific zone in a
VPC network.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your project.
Permissions
networksecurity.firewallEndpointAssociations.delete
Roles
Compute Network Admin ( roles/compute.networkAdmin )
Firewall Endpoint Admin ( roles/networksecurity.firewallEndpointAdmin )
Console
In the Google Cloud console, go to the VPC networks page.
Go to VPC networks
Click the name of a VPC network to show its
VPC network details page.
Select the Firewall endpoints tab. The tab shows a list of
configured firewall endpoint associations.
Select the firewall endpoint association, and then click Delete .
Click Delete again to confirm.
gcloud
To delete a firewall endpoint association, use the gcloud network-security
firewall-endpoint-associations delete
command :
gcloud network-security firewall-endpoint-associations \
delete NAME \
--zone ZONE \
--project PROJECT_ID
Replace the following:
NAME : the name of the firewall endpoint association.
ZONE : the zone of the firewall endpoint association.
PROJECT_ID : the Google Cloud project ID where the
association is created.
Delete a firewall endpoint association for a firewall endpoint
You can delete an association for a specific firewall endpoint.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your organization.
Permissions
networksecurity.firewallEndpointAssociations.delete
Roles
Compute Network Admin ( roles/compute.networkAdmin )
Firewall Endpoint Admin ( roles/networksecurity.firewallEndpointAdmin )
Console
In the Google Cloud console, go to the Firewall endpoints page.
Go to Firewall endpoints
In the project selector menu, select your organization.
Click the firewall endpoint to view its details.
In the Firewall endpoint details page, the table lists all the
configured firewall endpoint associations.
Select the firewall endpoint association, and then click Delete .
Click Delete again to confirm.
gcloud
To delete a firewall endpoint association, use the gcloud network-security
firewall-endpoint-associations delete
command :
gcloud network-security firewall-endpoint-associations \
delete NAME \
--zone ZONE \
--project PROJECT_ID
Replace the following:
NAME : the name of the firewall endpoint association.
ZONE : the zone of the firewall endpoint association.
PROJECT_ID : the Google Cloud project ID where the
association is created.
Delete a firewall endpoint association in a project
You can delete a firewall endpoint association in a specific project.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles on your project.
Permissions
networksecurity.firewallEndpointAssociations.delete
Roles
Compute Network Admin ( roles/compute.networkAdmin )
Firewall Endpoint Admin ( roles/networksecurity.firewallEndpointAdmin )
Console
In the Google Cloud console, go to the Firewall endpoints page.
Go to Firewall endpoints
In the project selector menu, select your Google Cloud project.
In the Firewall endpoint associations section, the table lists all the
configured firewall endpoint associations for this project.
Select the firewall endpoint association, and then click Delete .
Click Delete again to confirm.
gcloud
To delete a firewall endpoint association, use the gcloud network-security
firewall-endpoint-associations delete
command :
gcloud network-security firewall-endpoint-associations \
delete NAME \
--zone ZONE \
--project PROJECT_ID
Replace the following:
NAME : the name of the firewall endpoint association.
ZONE : the zone of the firewall endpoint association.
PROJECT_ID : the Google Cloud project ID where the
association is created.
What's next
Use hierarchical firewall policies and rules
Use global network firewall policies and rules
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
