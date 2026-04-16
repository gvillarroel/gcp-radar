---
title: "Handle special cases \_|\_ Resource Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/resource-manager/docs/handle-special-cases
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/resource-manager/docs/access-control-folders
source_metadata:
  url: https://docs.cloud.google.com/resource-manager/docs/handle-special-cases
  title: "Handle special cases \_|\_ Resource Manager \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Resource Manager
Guides
Send feedback
Handle special cases
Stay organized with collections
Save and categorize content based on your preferences.
This document provides information on handling special cases while migrating projects. When you migrate a project, ensure that you have the required IAM permissions granted on the project, its parent resource, and destination resource.
Migrate projects that are not associated with an organization resource
You can migrate a project that is not associated with an organization resource
into an organization resource. However, you can't change it back to
No organization using this process. If you have a project that is
associated with your organization resource and you want to revert it to
No organization , reach out to your Support representative for assistance.
You must have the roles/resourcemanager.projectCreator role assigned on the destination organization resource.
If you don't have the resourcemanager.organizations.get permission on the
parent organization resource of the project, it's likely that your projects
don't reflect as expected under the actual organization in the
Google Cloud console. This can make it seem like the project is not associated
with any organization resource. For more information, see
Restricting project visibility for users .
To determine whether the project is associated with an organization resource, do
the following:
gcloud
Run the following command:
gcloud projects describe PROJECT_ID
Replace PROJECT_ID with the ID of the project you want to migrate.
If the parent resource is not displayed in the output, it confirms
that the project is not associated with an organization resource.
If the parent resource (folder or organization resource) is displayed in
the output, it confirms that the project is associated with an organization
resource.
Note: Reverting a project to No organization requires business
justification.
The process of migrating a project not associated with an organization resource
is similar to the process for migrating a project between organization
resources, but does not require all of the steps involved in the migration plan.
To migrate a project into an organization resource, you should follow
these steps:
Verify the impact on this project of the
policies it will inherit .
Create a dedicated import folder in the destination
organization resource, if desired.
Assign Identity and Access Management permissions for the project and the destination parent resource as
detailed in Assign permissions .
Determine if you need to change the
billing account .
Then, you can perform the migration.
Console
To migrate a project into an organization resource:
Open the IAM & admin > Settings page in the Google Cloud console.
Open the Settings page
Select the Project picker at the top of the page.
From the Organization picker , select No Organization . If you are
not associated with any organization resource, the
Organization picker will not appear, and you can skip this step.
Select the project you want to migrate.
At the top of the page, click Migrate .
On the Organization drop-down list, select the organization resource
you want to migrate your project to.
gcloud
To migrate a project into an organization resource, run the following
command:
gcloud beta projects move PROJECT_ID \
--organization ORGANIZATION_ID
Where:
PROJECT_ID is the ID of the project you wish to migrate to the
organization resource.
ORGANIZATION_ID is the ID of the organization resource to which
you wish to migrate the project.
API
Using the Resource Manager API, you can migrate a project into the organization
resource by setting its parent field to the organization resource ID of
the organization resource.
To migrate a project into the organization resource:
Get the project object using the projects.get() method.
Set its parent field to the organization resource ID of the organization
resource.
Update the project object using the projects.update() method.
You can't change the parent field after you set it.
The following code snippet demonstrates the steps above:
project = crm . projects (). get ( projectId = flags . projectId ). execute ()
project [ ' parent ' ] = {
' type ' : ' organization ' ,
' id ' : flags . organizationId
}
If OS Login is enabled in
your source project, you need to assign the roles/compute.osLoginExternalUser
role to any principals that have access to that project.
Shared VPC
Note: It may take up to two minutes for
Shared VPC service projects to be migrated after
their corresponding host project has been migrated due to propagation delay. You
may encounter an error within this time frame when migrating such projects. If
this happens, retry the migration.
Shared VPC projects can be migrated following
certain conditions. First, a user with the roles/orgpolicy.policyAdmin role in
the source organization resource must set an organization policy containing the
constraints/resourcemanager.allowEnabledServicesForExport constraint on the
parent of the project to be exported. This constraint should list
SHARED_VPC as an allowed_value .
You do not need to disable Shared VPC before migration. However, the Shared VPC host project must be migrated first, followed by all of its service projects. We recommend that you match the firewall rules between
the organization resources at the source and target locations, which should minimize
potential issues and avoid any downtime for the projects and network during the
migration. We do not offer guarantees about the healthiness of your network if
you leave some service projects in the source organization resource indefinitely while
migrating others.
If you migrate the host project, you can move it back to the source organization resource. There is no exact deadline of how long the host project and the service projects can be in different organizations. However, when you begin migrating the service projects, you must migrate all of them before
you can migrate the host project again.
Custom Identity and Access Management roles
Custom Identity and Access Management roles can be created
at the organization resource level to provide granular control of access to resources,
but they are only valid in the organization resource in which they are created.
If you try to migrate a project that contains an allow policy binding
of a user to an organization-level custom IAM role, the migration will
fail with a failed precondition error, explaining that the role in question does
not exist in the destination organization resource.
To list all custom IAM roles at the level of your organization
resource, run the following Google Cloud CLI command:
gcloud iam roles list --organization ORGANIZATION_ID
Where the ORGANIZATION_ID is the organization resource
ID for which you want to list roles. For information on finding your
organization resource ID, see Get your organization resource ID .
To get information on a custom Identity and Access Management role in your organization resource,
run the following Google Cloud CLI command:
gcloud iam roles describe --organization ORGANIZATION_ID \
ROLE_ID
Where:
ORGANIZATION_ID is the organization resource ID of the
role's parent organization resource.
ROLE_ID is the name of the role you want to describe.
To work around the failed precondition error, you should create equivalent
project-level custom roles for each of the organization-level custom roles that
the project inherits. Then, remove the IAM role bindings that
reference the organization-level custom roles.
Once the project has been migrated, you can update the allow policies to use the
organization-level custom roles in the destination organization resource.
For more information about custom roles, see
Creating and managing custom roles .
Bucket Lock
Cloud Storage Bucket Lock allows you to configure
a data retention policy on a Cloud Storage bucket that governs how long
objects in the bucket must be retained. The bucket lock is protected using a
lien to prevent accidentally deleting the project.
The retention policy and lien are kept with the project during a migration,
but you should be aware if you are migrating a project with a bucket lock
enforced, and prevent accidental moves.
VPC Service Controls security perimeters
VPC Service Controls
allows users to set up a project-based security perimeter around their
Google Cloud services to mitigate data exfiltration risks. You cannot migrate
a project that is protected by a VPC Service Controls security perimeter.
To remove a project from a security perimeter, see
Managing service perimeters .
Projects in VPC Service Controls perimeters may not be blocked from being migrated between
organization resources. This guideline applies for up to a day after a perimeter has been created or
updated. It may take several hours for you to be able to migrate a project after it has
been removed from the service perimeter.
Dedicated Interconnect
We recommend migrating projects with Dedicated Interconnect
objects and projects with VLAN attachments together. Projects with
Dedicated Interconnect objects or VLAN attachments connected to
these objects will continue to function after the migration between organization resources.
The only restriction is that you'll not be able to create new VLAN attachments
between the organization resource split.
Configuration changes made to a project in one organization resource that has a
Dedicated Interconnect object attached or a VLAN attachment to
this object may not propagate to the other organization resource.
We recommend not leaving such projects split between organization
resources for very long if possible.
Partner Interconnect
There are no special considerations needed when migrating projects with
Partner Interconnect.
Cross-project service accounts
In the context of migrating a cross-project service account , the following cases apply:
If you migrate a project that has a cross-project service account
attached to it, that service account will continue to function
in the destination organization resource. That project will continue to work with the
attached service account even if there is an organization policy that
restricts the domain of that
project.
If you migrate a project that owns a cross-project service account attached
to another project in the source organization resource, that service account will
continue to function in the destination organization resource. However, you will not
be able to use that service account on any resources that have a domain
restriction organization policy applied to them that restricts them to the
source organization resource's domain.
For example, assume you have project-A , in organizations/12345678901 . This
project has serviceAccount-1 attached to it, which is set up as a
cross-project service account. project-B and project-C , also in
organizations/12345678901 , use serviceAccount-1 as well.
You have applied an organization policy with the domain restriction constraint
to project-C , which only allows it to access the domain of
organizations/12345678901.
If you add serviceAccount-1 to the IAM binding for project-C ,
and then migrate project-A to organizations/45678901234 , the service account
will function.
If you migrate project-A to organizations/45678901234 , and then try to add
serviceAccount-1 to the IAM binding for project-C , the
binding will fail as it violates the domain restriction constraint.
Support cases
If you migrate a project that has an open support case, you need to reach out to
your Google Support contact to let them know the migration has occurred. Any
projects that have an open support case with Google won't be able to view
those support cases until Google Support updates the case metadata to point to
the new organization resource.
OAuth consent screen
If your project is configured to use an
Internal OAuth consent screen
and you migrate it to another organization resource, only members of the
destination organization resource can authorize requests. It may take up to 24
hours for this behavior to take effect. Until then, members of the source
organization resource can authorize requests.
The steps below explain how to ensure members of your source organization
resource do not lose access during migration. Consider creating new users in
your destination organization resource for organization resource members so that
you do not need to change the OAuth consent screen configuration.
To avoid loss of access for members of the source organization resource:
Update the OAuth consent screen to be external instead of internal.
Apps that are marked internal and use
sensitive data
don't need to apply for app verification. If the app uses sensitive data,
then when the consent screen is updated to external, the users of the source
organization resource will see an
unverified app screen
before the authorization screen. To avoid this, apply for
app verification
for the use of sensitive or restricted scopes.
OS Login
If OS Login is enabled in
your source project, you need to assign the roles/compute.osLoginExternalUser role
to any principals that have access to that project. This ensures that these principals
don't lose access in the destination organization resource.
Shared reservations of virtual machine (VM) instances
In a shared reservation, the project that created the reservation ( owner
project ) or any projects that the reservation is shared with ( consumer
project ) can consume the reservation by creating VM instances.
You can only share a reservation with projects within the same organization of
the owner project.
When you migrate an owner or consumer project to a different organization,
the following happens:
If you migrate the owner project to a different organization, then
Compute Engine deletes any reservation created by the owner project. Running VM instances are not affected.
If you migrate a consumer project to a different organization, then the consumer
project stops consuming resources from any shared reservation in the previous
organization.
For more information, see
How shared reservations work .
Attaching service accounts to resources
For most Google Cloud services, users need the iam.serviceAccounts.actAs
permission on a service account to attach that service account to a resource.
However, in the past, to ease onboarding, certain services allowed users to
attach service accounts to resources even if the users didn't have permission to
impersonate the service accounts. This is documented in Requiring permission to
attach service accounts to
resources .
If a customer's source organization resource has the legacy behavior (service
accounts attachment is possible without the normal role grant) and the
destination organization resource does not, grant the Service Account User role
( roles/iam.serviceAccountUser ) to users that attach these service accounts to
resources. For information about the permissions you need to attach service
accounts to resources, see Roles for service account
authentication .
To see if your organization resource has the legacy behavior, do the following:
In the Google Cloud console, go to the Organization policies page.
Go to the Organization policies page
From the project selector at the top of the page, choose the organization
resource you want to check for legacy status.
In the filter box at the top of the list of organization policies, enter
constraints/appengine.enforceServiceAccountActAsCheck .
If the appengine.enforceServiceAccountActAsCheck organization policy
appears in the list, the organization resource has the legacy behavior.
Repeat steps 3 and 4 for each of the following organization policy
constraints:
appengine.enforceServiceAccountActAsCheck
dataflow.enforceComputeDefaultServiceAccountCheck
dataproc.enforceComputeDefaultServiceAccountCheck
composer.enforceServiceAccountActAsCheck
If any of these organization policy constraints appear, your organization
resource uses the legacy behavior.
If the source organization resource has the legacy behavior and the destination
does not, grant the roles as mentioned above. If both the source and destination
organization resources have the legacy behavior, no action is required, but
consider enforcing the policy to prevent unintended impersonation.
Migrating projects with BigQuery sharing
If you migrate the project that is using BigQuery sharing (formerly Analytics Hub) to a
different organization resource, you might encounter some error. To
resolve any errors, contact support .
If the data exchange resource from the previous organization is not
visible in the Sharing administrator page of the new
organization, use the Analytics Hub API to update any field (for example,
description field) of the data exchange in the new organization to trigger a
cache refresh.
Use the
projects.locations.dataExchanges.patch method .
PATCH https://analyticshub.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /dataExchanges/ DATA_EXCHANGE_ID ?update_mask= UPDATE_DX_FIELD -d { UPDATE_DX_FIELD : UPDATE_DX_VALUE }
Replace the following:
PROJECT_ID is the unique identifier of the project.
LOCATION is the location of the data exchange.
DATA_EXCHANGE_ID is the ID of the data exchange.
UPDATE_DX_FIELD is the field to be updated. This can be any field of the exchange, like description .
UPDATE_DX_VALUE is the updated value of the field. This can be the same value as the original value of that field.
Migrating projects with Backup and DR service
You need to disable Backup and DR service before migrating projects to a different
organization resource. At this time when the service is disabled, there is an outage
risk that you need to factor in. You should re-enable Backup and DR service after migration to the new organization resource is complete.
Migrating projects with inherited Privileged Access Manager grants
Before you migrate a project to another organization, we recommend that you
revoke
any active scoped grants on that project. A scoped grant is a grant that is
created on an inherited entitlement from a folder or an organization, and is then
scoped to a child project.
When you migrate a project with an active scoped grant to another organization,
the modified IAM policy moves to the new organization, but the grant
managing that policy remains in the previous organization. This means the Privileged Access Manager
service agent, which the grant uses, loses the permissions to modify the
IAM policy of a resource in the new organization. Consequently,
any revoke or withdraw operations on that grant will fail, and
the requester will retain access until the grant expires.
Note: Even after a project has been migrated to a new organization,
a user with IAM Admin access on the project can directly remove
access using the IAM Admin console.
What's next
To learn about how to perform the migration, see Perform the migration .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
