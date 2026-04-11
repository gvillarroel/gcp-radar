---
title: "Access control with IAM \_|\_ Transfer Appliance \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/transfer-appliance/docs/4.0/access-control
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/transfer-appliance/docs/4.0/access-control
source_metadata:
  url: https://docs.cloud.google.com/transfer-appliance/docs/4.0/access-control
  title: "Access control with IAM \_|\_ Transfer Appliance \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Transfer Appliance
Resources
Send feedback
Access control with IAM
Stay organized with collections
Save and categorize content based on your preferences.
Transfer Appliance uses
Identity and Access Management (IAM)
permissions and roles to control who can access Transfer Appliance
resources.
To grant access to a resource, you assign one or more
permissions or
roles to a user, group, or a
service account .
We strongly encourage using predefined roles to assign
permissions. All of the permissions included in those roles are required by
Transfer Appliance and Google Cloud console in order to properly render pages and
retrieve or update resources.
Permissions
The following resources exist for Transfer Appliance:
appliances
orders
savedAddresses
operations
locations
credentials
Appliance permissions
The following table describes permissions for Transfer Appliance appliances
resources:
Permission
Description
transferappliance.appliances.list
Permission to view a list of appliances and information related to them,
including the ID, order status, appliance type and model, firmware
version, activation status, and connection status.
transferappliance.appliances.get
Permission to view detailed information about any appliance. In addition
to the information allowed by `transferappliance.appliances.list`, this
permission allows access to the appliance's region, transfer job IDs,
Cloud Storage destination, encryption type, key resource name,
online functionality setting, and detailed order-related information such
as tracking number.
transferappliance.appliances.create
Permission to create an appliance resource. Required, along with
transferappliance.orders.create , to create and submit an
appliance order.
transferappliance.appliances.update
Permission to update any appliance's metadata.
transferappliance.appliances.delete
Permission to delete appliance resources that are in a
DRAFT state.
Order permissions
The following table describes permissions for Transfer Appliance orders
resources:
Permission
Description
transferappliance.orders.list
Permission to list orders.
transferappliance.orders.get
Permission to retrieve detailed order information.
transferappliance.orders.create
Permission to create an order resource. Required, along with
transferappliance.appliances.create , to create and submit an
appliance order.
transferappliance.orders.update
Permission to update an existing order.
transferappliance.orders.delete
Permission to delete an order.
Saved address permissions
The following table describes permissions for Transfer Appliance
savedAddresses resources:
Permission
Description
transferappliance.savedAddresses.list
Permission to list saved addresses.
transferappliance.savedAddresses.get
Permission to retrieve detailed saved address information.
transferappliance.savedAddresses.create
Permission to create a saved address.
transferappliance.savedAddresses.update
Permission to update an existing saved address.
transferappliance.savedAddresses.delete
Permission to delete a saved address.
Operation permissions
The following table describes permissions for Transfer Appliance operations
resources:
Permission
Description
transferappliance.operations.list
Permission to list operations.
transferappliance.operations.get
Permission to retrieve detailed operation information.
transferappliance.operations.cancel
Permission to cancel an existing operation.
transferappliance.operations.delete
Permission to delete an operation.
Location permissions
The following table describes permissions for Transfer Appliance locations
resources:
Permission
Description
transferappliance.orders.list
Permission to list locations.
transferappliance.orders.get
Permission to retrieve detailed location information.
Credential permissions
The following table describes permissions for Transfer Appliance credentials resources:
Permission
Description
transferappliance.credentials.get
Permission to retrieve credentials.
Predefined roles
This section describes the predefined roles for Transfer Appliance. Roles
are the preferred way of setting IAM permissions.
Role details
The following table describes in detail the predefined roles for
Transfer Appliance:
Role
Description
Included Permissions
Transfer Appliance Admin
( roles/transferappliance. admin )
Provides all Transfer Appliance permissions, including the ability
to order new appliances and update existing appliance metadata.
transferappliance.appliances.
list
get
create
update
delete
transferappliance.orders.
list
get
create
update
delete
transferappliance.savedAddresses.
list
get
create
update
delete
transferappliance.operations.
list
get
cancel
delete
transferappliance.locations.
list
get
transferappliance.projects.
list
get
transferappliance.credentials.
get
Transfer Appliance Viewer
( roles/transferappliance. viewer )
Grants the required permissions for read-only access to all
Transfer Appliance resources.
transferappliance.appliances.
list
get
transferappliance.orders.
list
get
transferappliance.savedAddresses.
list
get
transferappliance.operations.
list
get
transferappliance.locations.
list
get
resourcemanager.projects.
list
get
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
