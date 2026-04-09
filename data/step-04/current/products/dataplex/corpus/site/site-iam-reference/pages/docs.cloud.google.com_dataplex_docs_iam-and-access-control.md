---
title: "Manage access with IAM \_|\_ Dataplex Universal Catalog \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/dataplex/docs/iam-and-access-control
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataplex/docs/iam-and-access-control
source_metadata:
  url: https://docs.cloud.google.com/dataplex/docs/iam-and-access-control
  title: "Manage access with IAM \_|\_ Dataplex Universal Catalog \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Dataplex Universal Catalog
Guides
Send feedback
Manage access with IAM
Stay organized with collections
Save and categorize content based on your preferences.
This document explains how to use Identity and Access Management (IAM) to manage access control
for Dataplex Universal Catalog resources. IAM controls access to
your Dataplex Universal Catalog resources at the Google Cloud resource level. It
lets you control which principals can manage specific resources, such as entry
groups and entries, using the Google Cloud console, Google Cloud CLI, client
libraries, or APIs.
For more information about IAM, see the
IAM documentation .
IAM overview
When you create a new Google Cloud project, the
original project creator is granted the Owner role. Other Google-managed service
accounts might exist or be created when you enable an API to perform
specific tasks. However, no other individual users have access to the project
and its resources, including Dataplex Universal Catalog resources. You grant this access
only when you explicitly add users as project members or grant them roles on
specific resources.
IAM lets you grant granular access to specific Google Cloud
resources and prevents unwanted access to other resources. IAM
lets you adopt the security principle of least privilege by granting only the
necessary access to your resources.
IAM lets you control who (principals) has what access
(roles) to which resources.
Principal
A principal can be a Google Account (for end users), a service account (for apps
and virtual machines), a Google group, or a Google Workspace or Cloud Identity
domain. These principals can access a resource. When you grant roles, you
identify the principal using an identifier, as described in Policy binding
reference .
For more information, see IAM overview: Principals .
The Dataplex Universal Catalog Service Agent
Dataplex Universal Catalog uses a Google Cloud managed service account, a
service agent, to access your resources. Service agents are service accounts
managed by Google that allow Google Cloud services to access resources
in your project. This is different from user-managed service accounts, which
you create and use to represent your applications or workloads.
The Dataplex Universal Catalog service agent is created when you
enable the Dataplex API. You can identify the service agent by its email:
service- CUSTOMER_PROJECT_NUMBER @gcp-sa-dataplex.iam.gserviceaccount.com
Here, CUSTOMER_PROJECT_NUMBER is the project
number of the project where you enabled the Dataplex API.
The Dataplex Universal Catalog service agent requires the
Dataplex Service Agent ( roles/dataplex.serviceAgent ) role on the project
to manage Dataplex Universal Catalog resources. When you enable the API, the system
automatically grants this role. If you revoke this role, Dataplex Universal Catalog
might not function correctly.
If Dataplex Universal Catalog needs to access resources in other projects (for
example, Cloud Storage buckets or BigQuery datasets that you want to
attach as assets or scan for data profiles), you must grant this service agent
the required permissions in the projects containing those resources.
For more information about granting permissions to the service agent for
attaching assets, see Manage data assets .
For more information about granting permissions to the service agent for
data profiling, see Create and use data profile scans .
Resource
Resources you can grant access to in Dataplex Universal Catalog include projects,
entry groups, entries, entry links, aspect types, entry types, and entry link
types.
Some API methods require permissions for multiple resources. For example,
attaching an aspect to an entry requires permissions on both the entry and
the aspect type.
Role
A role is a collection of permissions that determine which operations a principal
can perform on a resource. When you grant a role to a principal, you grant all
the permissions that the role contains.
You can grant one or more roles to a principal.
Similar to other Google Cloud products, Dataplex Universal Catalog supports
three types of roles:
Basic roles: highly permissive roles (Owner, Editor, Viewer) that
existed before IAM was introduced. For more
information about basic roles, see Basic
roles .
Predefined roles: provide granular access to specific Google Cloud
resources. For more information about predefined roles, see Predefined
roles . The Dataplex Universal Catalog IAM roles
documentation details the Dataplex Universal Catalog
predefined roles.
Custom roles: help you enforce the principle of least privilege by
granting only the specific permissions needed. For more information about
custom roles, see Custom roles .
For example, the Dataplex Viewer ( roles/dataplex.viewer ) predefined role
provides read-only access to Dataplex Universal Catalog resources. A principal
with this role can view entry groups, entries, entry links, aspect types, entry
types, and entry link types but can't create, update, or delete them.
Conversely, the Dataplex Universal Catalog
Administrator ( roles/dataplex.admin ) grants broad access to manage
Dataplex Universal Catalog resources.
For more information about assigning roles, see Granting,
changing, and revoking access .
To determine which permissions you need for a specific task, see the reference
pages for Dataplex Universal Catalog roles and
Dataplex Universal Catalog permissions .
For example, for a project resource, you can assign the
roles/dataplex.admin role to a Google Account. That account can then manage
Dataplex Universal Catalog resources in the project, but can't manage other
resources. You can also use IAM to manage the basic roles granted
to project team members.
IAM policies for resources
An IAM policy lets you manage IAM roles on
resources instead of, or in addition to, managing roles at the project level.
This provides flexibility to apply the principle of least privilege by granting
access only to the specific resources collaborators need for their work.
Resources inherit the policies of their parent resources. If you set a
policy at the project level, all its child resources inherit it. The
effective policy for a resource is the union of the policy set at that resource
and the policy inherited from higher in the hierarchy. For more information,
see the IAM policy
hierarchy .
You can get and set IAM policies using the Google Cloud console, the
Identity and Access Management API, or the gcloud CLI.
For the Google Cloud console, see Access control using the
Google Cloud console .
For the API, see Access control using the API .
For the gcloud CLI, see Access control using the gcloud CLI
.
What's next
Learn more about IAM roles .
Learn more about IAM
permissions .
Learn more about Dataplex Universal Catalog security
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
