---
title: "Create a migration plan \_|\_ Resource Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/resource-manager/docs/create-migration-plan
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/resource-manager/docs/access-control-folders
source_metadata:
  url: https://docs.cloud.google.com/resource-manager/docs/create-migration-plan
  title: "Create a migration plan \_|\_ Resource Manager \_|\_ Google Cloud Documentation"
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
Create a migration plan
Stay organized with collections
Save and categorize content based on your preferences.
For a project migration, it is necessary to evaluate how the migration
will impact the services running inside the project. The
Resource Manager API treats the project resource and all services running underneath
it as a single unit, meaning that no configuration changes will be applied
inside the project.
While the migration won't make direct configuration changes to the project,
the change in the resource hierarchy is likely to have an impact on the
function of the project and its running services. Allow, deny, or organization
policies that are inherited rather than directly attached to the project won't
migrate with the project during migration. The organization policies and service
accounts that are attached directly to the resource will be migrated. This may
cause unintended behavior after the migration is complete.
Migrating your project might also result in organization policy
violations ,
depending on the destination organization resource's organization policies.
Before migrating your project between organization resources, you should consider creating a migration plan to
determine the readiness of both your organization resource and the projects you want to
migrate. In this migration plan, take inventory of each of the
services that your project is running, and any other services that may be
impacted by the migration, or by the resource hierarchy in the destination for your
project.
Inventory overview
Use Cloud Asset Inventory to create an overview of
resources in use, including allow policies. You can use this overview to help
outline your migration plan.
You can also use Cloud Asset Inventory to transfer this data into
BigQuery. This will allow you to query the data using SQL, which is
easier to read compared to interpreting JSON-formatted data. For information
about exporting this data, see
Exporting to BigQuery .
To get a list of all allow and deny policies that affect access to a project,
see View all allow and deny policies that apply to a resource .
Policy verification
When you migrate your project, it will no longer inherit the policies from its
current place in the resource hierarchy, and will be subject to the effective
policy evaluation at its destination. We recommend making sure that the
effective policies at the project's destination match as much as possible the
policies that the project had in its source location.
Any policy that is applied directly to the project will still be attached after
the migration is complete. Applying policies directly to the project is a good
way to verify that the correct policies are applied from the moment the migration is
complete.
Allow, deny, and organization policies are inherited through the resource
hierarchy, and can block a service from functioning if not set properly.
Determine the effective policy at the project's destination in your resource
hierarchy to ensure the policy aligns with your governance objectives.
Manage encrypted keys
You should verify if your project has a customer-managed encrypted key or other
Cloud Key Management Service enabled on it. Cryptographic keys are owned by the project, and a
user with owner access to that project will therefore be able to manage and
perform cryptographic operations on keys in Cloud KMS in that
project.
For more information, see
Separation of duties .
Preview features
You can enable preview features on organization resources, folders, or projects.
If you have enabled an alpha or beta feature on the project to be migrated, this
feature should continue to function after the migration. If the preview feature
is private and not allowlisted for the destination organization resource, you
will not be able to make any configuration changes after the migration is complete.
Rollback plan
If you discover that something is not working on any of the projects you have
migrated, you can restore them to their original location. In order to do
that, you need to have the necessary IAM permissions and set the
required organization policies so that you can run the project migration
in reverse.
For a list of permissions required, see
Assign permissions . For the organization policies you
need to configure to allow a project migration, see
Configure organization policies .
Dedicated import and export folders
Policy inheritance can cause unintended effects when you are migrating a
project, both in the source and destination organization resources. You can
mitigate this risk by creating specific folders to hold only projects for export
and import, and ensuring that the same policies are inherited by the folders in
both organization resources. You can also set permissions on these folders that
will be inherited to the projects moved within them, helping to accelerate the
project migration process.
When planning a migration, consider setting up a dedicated source folder first.
To do this, create a folder for each destination organization resource to which you plan to
export projects. Then, set an organization policy on these folders, each with
the constraints/resourcemanager.allowedExportDestinations constraint set to
the single organization resource to which you want to export projects.
Note: To configure organization policies required for the project migration, you
must have the roles/orgPolicy.policyAdmin role on the parent and the destination organization.
For example, you could set up Export to Marketing Org and
Export to Sales Org folders, each with appropriate organization policy
constraints set.
Similarly, set up dedicated import folders in the destination organization
resource, one for each organization resource from which you want to import
projects. To do this, create a folder for each source organization resource from which
you plan to import projects. Then, set an organization policy on these folders,
each with the constraints/resourcemanager.allowedImportSources constraint set
to the single organization resource from which you want to import projects.
For example, you could set up Import from Marketing Org and
Import from App Development Org folders, each with appropriate organization
policy constraints set.
On each of the import and export folders, assign the person who will be moving
the projects the roles/resourcemanager.projectMover role. This role will be
inherited by any projects that are contained within these folders, giving the
user the ability to perform the move operations on any project that is moved
into those folders.
After you have completed your project migration, you should remove these
dedicated folders.
For information about setting organization policies, see Configure
organization policies .
What's next
To assign Identity and Access Management roles and permissions for migrating projects between organizations, see Assign Identity and Access Management roles and permissions .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
