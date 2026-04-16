---
title: "Migrate projects between organization resources \_|\_ Resource Manager \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/resource-manager/docs/project-migration
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/resource-manager/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/resource-manager/docs/project-migration
  title: "Migrate projects between organization resources \_|\_ Resource Manager \_\
    |\_ Google Cloud Documentation"
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
Migrate projects between organization resources
Stay organized with collections
Save and categorize content based on your preferences.
Migrating a Google Cloud project is a metadata operation that changes the project's
location in the resource hierarchy. This page provides an overview of how migrations
work, what stays the same, and what changes when a project moves to a new organization.
Projects in the resource hierarchy
The project resource is the base-level organizing entity in a Google Cloud
organization resource. Projects are created under organization resources and can
be placed under folders or the organization resource itself, forming the resource hierarchy .
You may need to migrate projects between organization resources due to acquisitions,
regulatory requirements, or the separation of business units. You can use the Resource Manager API
to migrate these projects; the API also lets you roll back a migration, moving the
project back to its original place in the hierarchy if necessary.
Migration scenarios
Your project's location determines which of two paths you take:
Migrate projects from one organization to another organization resource.
Migrate a standalone project (created without an organization) into the hierarchy
of an organization resource.
Identify the project's current state
Before you begin, you must determine if your project is associated with
an organization resource. This determines whether you follow the Organization-to-Organization
path or the No Organization path.
If you don't have the resourcemanager.organizations.get permission on the
parent organization resource of the project, it's likely that your projects
don't reflect as expected under the actual organization in the
Google Cloud console. This can make it seem like the project is not associated
with any organization resource.
To determine whether the project is associated with an organization resource, run
the following command:
gcloud
gcloud projects describe PROJECT_ID
Replace PROJECT_ID with the ID of the project that you want to
migrate.
If the output includes a parent field, your project is already part of an
organization hierarchy.
If the parent field is missing or empty, the project is a standalone project
with no organization resource.
Based on your project's state, follow the relevant guide:
If you want to migrate projects that were created with no associated
organization, see
Migrate projects that are not associated with an organization resource .
If you want to migrate projects from one organization to another organization
resource, see Migrate projects between organization resources .
Note: If you want to transfer Google Workspace domains between organization
resources, contact your Support representative.
How migration works
A project migration is not a data transfer. Your services, databases, and virtual
machine (VM) instances remain active and don't experience downtime. Instead, the
migration updates the project's parent resource. Because Google Cloud follows a
hierarchical inheritance model, the project's security posture changes the moment
it's attached to a new parent.
Feature
Status
Impact
Project ID and number
Stays the same
API keys, service names, and hardcoded IDs remain unchanged.
Data and resources
Stays the same
VMs, Storage buckets, and databases remain online.
Direct IAM roles
Stays the same
Roles granted directly on the project move with it.
Inherited IAM roles
Changes
Roles granted at the source organization or folder level are lost.
Organization policies
Changes
Source constraints are replaced by destination constraints.
Quotas
Changes
Inherited organization-level quotas are lost; project-level quotas remain.
Billing account
Stays the same
The project remains linked to the original billing account.
Quota impact
If you have quotas defined at a certain resource level, the following aspects are applied after migration:
Any quotas defined at the project level remain unchanged.
Any quotas defined at the organization resource level are not transferred. The organization loses any inherited quotas.
The following pages can be used to determine what quotas are applied to an organization resource:
View and manage quotas
List quotas with gcloud
List quotas with RPC
Example quota bucket
Example
$ gcloud alpha services quota list --service=compute.googleapis.com --consumer=projects/workloadyee --filter="metric: compute.googleapis.com/cpus"
...
- defaultLimit: '600'
dimensions:
region: us-central1
effectiveLimit: '650'
...
Critical considerations
Before starting a migration, review these high-risk areas to prevent service disruption:
Quota Limits: If the destination organization has lower quota limits than the source,
your project may exceed its quota upon arrival.
Shared VPC: You can't migrate a project attached to a Shared VPC.
You must detach the project from the source Shared VPC before moving it.
Custom roles: If your project relies on custom IAM roles defined
at the organization level, those roles won't exist in the destination. Recreate
them in the destination organization before moving.
The migration roadmap
Use the following roadmap to navigate the project migration process:
Prepare: Create a migration plan to to coordinate timing.
Perform: Assign IAM roles and configure organization policies and execute the migration .
Verify: Complete post-migration tasks, such as auditing inherited policies and updating billing.
What's next
Create a migration plan
Perform the migration
Handle special cases
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
