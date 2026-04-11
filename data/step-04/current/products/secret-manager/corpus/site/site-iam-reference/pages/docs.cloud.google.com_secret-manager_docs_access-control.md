---
title: "Access control with IAM \_|\_ Secret Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/secret-manager/docs/access-control
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/secret-manager/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/secret-manager/docs/access-control
  title: "Access control with IAM \_|\_ Secret Manager \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Secret Manager
Guides
Send feedback
Access control with IAM
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the Identity and Access Management (IAM) roles you can use to
configure Secret Manager. Roles limit a principal's ability to
access resources. Always grant the minimum set of permissions required to
perform a given task.
Secret Manager roles
Following are the IAM roles that are associated with
Secret Manager. To learn how to grant, change, or revoke access to resources using
IAM roles, see
Granting, changing, and revoking access to resources .
Important: To use Secret Manager with workloads running on
Compute Engine or Google Kubernetes Engine, the underlying instance or node must have
the cloud-platform OAuth scope. See
accessing the Secret Manager API
for more information.
Role
Permissions
Secret Manager Admin
( roles/ secretmanager.admin )
Full access to administer Secret Manager resources.
Lowest-level resources where you can grant this role:
Secret
cloudkms.keyHandles.*
cloudkms.keyHandles.create
cloudkms.keyHandles.get
cloudkms.keyHandles.list
cloudkms.operations.get
cloudkms. projects. showEffectiveAutokeyConfig
resourcemanager.projects.get
resourcemanager.projects.list
secretmanager.*
secretmanager.locations.get
secretmanager.locations.list
secretmanager.secrets.create
secretmanager. secrets. createTagBinding
secretmanager.secrets.delete
secretmanager. secrets. deleteTagBinding
secretmanager.secrets.get
secretmanager. secrets. getIamPolicy
secretmanager.secrets.list
secretmanager. secrets. listEffectiveTags
secretmanager. secrets. listTagBindings
secretmanager. secrets. setIamPolicy
secretmanager.secrets.update
secretmanager.versions.access
secretmanager.versions.add
secretmanager.versions.destroy
secretmanager.versions.disable
secretmanager.versions.enable
secretmanager.versions.get
secretmanager.versions.list
Secret Manager Secret Accessor
( roles/ secretmanager.secretAccessor )
Allows accessing the payload of secrets.
Lowest-level resources where you can grant this role:
Secret
resourcemanager.projects.get
resourcemanager.projects.list
secretmanager.versions.access
Secret Manager Viewer
( roles/ secretmanager.viewer )
Allows viewing metadata of all Secret Manager resources
Lowest-level resources where you can grant this role:
Secret
resourcemanager.projects.get
resourcemanager.projects.list
secretmanager.locations.*
secretmanager.locations.get
secretmanager.locations.list
secretmanager.secrets.get
secretmanager. secrets. getIamPolicy
secretmanager.secrets.list
secretmanager. secrets. listEffectiveTags
secretmanager. secrets. listTagBindings
secretmanager.versions.get
secretmanager.versions.list
Secret Manager Secret Version Adder
( roles/ secretmanager.secretVersionAdder )
Allows adding versions to existing secrets.
Lowest-level resources where you can grant this role:
Secret
resourcemanager.projects.get
resourcemanager.projects.list
secretmanager.versions.add
Secret Manager Secret Version Manager
( roles/ secretmanager.secretVersionManager )
Allows creating and managing versions of existing secrets.
Lowest-level resources where you can grant this role:
Secret
resourcemanager.projects.get
resourcemanager.projects.list
secretmanager.versions.add
secretmanager.versions.destroy
secretmanager.versions.disable
secretmanager.versions.enable
secretmanager.versions.get
secretmanager.versions.list
Principle of least privilege
When you follow the principle of least privilege, you grant the minimum level of
access to resources required to perform a given task. For example, if a
principal needs access to a single secret, don't give that principal access to
other secrets or all secrets in the project or organization. If a principal only
needs to read a secret, don't grant that principal the ability to modify the
secret.
You can use IAM to grant IAM
roles and permissions at the level of the Google Cloud secret, project,
folder, or organization. Always apply permissions at the lowest level in the
resource hierarchy .
The following table shows the effective capabilities of a service account, based on the
level of the resource hierarchy where the Secret Manager Secret Accessor role
( roles/secretmanager.secretAccessor ) is granted.
Resource hierarchy
Capability
Secret
Access only that secret
Project
Access all secrets in the project
Folder
Access all secrets in all projects in the folder
Organization
Access all secrets in all projects in the organization
The role roles/owner includes the
`secretmanager.versions.access` permission, but the roles/editor
and roles/viewer do not.
If a principal only needs to access a single secret's value, don't grant that
principal the ability to access all secrets. For example, you can grant a
service account the Secret Manager Secret Accessor role
( roles/secretmanager.secretAccessor ) on a single secret.
If a principal only needs to manage a single secret, don't grant that principal
the ability to manage all secrets. For example, you can grant a service
account the Secret Manager Admin role ( roles/secretmanager.admin ) on a single secret.
IAM conditions
IAM Conditions
allow you to define and enforce conditional, attribute-based access control for
some Google Cloud resources, including Secret Manager
resources.
In Secret Manager, you can enforce conditional access
based on the following attributes:
Date/time attributes :
Use to set expirable, scheduled, or limited-duration
access to Secret Manager resources. For example, you could
allow a user to access a secret until a specified date.
Resource attributes :
Use to configure conditional access based on a resource name, resource type,
or resource service attributes. In Secret Manager, you can use
attributes of secrets and secret versions to configure conditional access. For
example, you can allow a user to manage secret versions only on secrets that
begin with a specific prefix, or allow a user to access only a specific secret
version.
For more information about IAM Conditions, see the
Conditions overview .
What's next
Learn how to manage access to secrets .
Learn how to apply the
principle of least privilege
when managing Secret Manager resources by
creating and managing custom roles .
Learn about IAM Conditions .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
