---
title: "Roles and permissions \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sql/docs/sqlserver/roles-and-permissions
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/sqlserver/roles-and-permissions
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/sqlserver/roles-and-permissions
  title: "Roles and permissions \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Cloud SQL
SQL Server
Guides
Send feedback
Roles and permissions
Stay organized with collections
Save and categorize content based on your preferences.
MySQL
| PostgreSQL
| SQL Server
This page provides information about Identity and Access Management (IAM) roles
and permissions and how they're used with Cloud SQL instances.
Introduction
This page focuses on aspects of IAM that are relevant
specifically to Cloud SQL. For a detailed discussion of
IAM and its features generally, see Identity and Access Management . In
particular, see the Managing IAM Policies section.
IAM lets you control who has access to the
resources in your Google Cloud project. The set of access rules you apply to a
resource is called an IAM policy . An IAM policy
applied to your project defines the actions that users can take on all resources
within your project.
Members are the "who" of IAM. Members can be individual users,
groups, domains, or even the public as a whole. Members are assigned roles ,
which grant members the ability to perform actions in Cloud SQL as
well as Google Cloud more generally. Each role is a collection of one or
more permissions . Permissions are the basic units of IAM: each
permission lets you perform a certain action. See
IAM roles in Cloud SQL
and IAM permissions in Cloud SQL
for complete lists of all the roles and permissions available in Cloud SQL.
When you use an account to connect to a Cloud SQL
instance, the account must have the Cloud SQL > Client role ( roles/cloudsql.client ), which
includes the permissions
required for connecting.
You can add roles to an account in the Console on the
IAM & Admin > IAM
page, and see which permissions belong to which roles on the
IAM & Admin > Roles
page.
Cloud SQL uses service accounts for authentication between Cloud SQL
and other Google Cloud products. Service accounts provide credentials in
JSON format, which you download from the Console and use for authentication
in various scenarios.
Cloud SQL roles and permissions with Cloud SQL Auth Proxy
If you are connecting to a Cloud SQL instance from a Compute Engine
instance using Cloud SQL Auth Proxy ,
you can use the default Compute Engine service account associated with the
Compute Engine instance.
As with all accounts connecting to a Cloud SQL instance, the service
account must have the Cloud SQL > Client role.
Cloud SQL roles and permissions with serverless options
Use a service account to authorize access from these options. The service
account authorizes access to all Cloud SQL in a specific project. When you
create an application or a Cloud Run functions, this service
creates this account for you. You can find the account on the
IAM & Admin > IAM
page, with the appropriate suffix:
Serverless option
Service account suffix
App Engine
@gae-api-prod.google.com.iam.gserviceaccount.com
Cloud Run functions
@appspot.gserviceaccount.com
Cloud Run
compute@developer.gserviceaccount.com
As with all accounts connecting to a Cloud SQL instance, the service
account must have the Cloud SQL > Client role.
Cloud SQL roles and permissions with Cloud Storage
The import and export features in Cloud SQL work together. Exports
write to Cloud Storage and imports read from there. For this reason, the
service account you use for these operations needs both read and write
permissions to Cloud Storage:
To import data to, and export data from, Cloud Storage, the Cloud SQL
instance's service account must have the storage.objectAdmin
IAM role set in the project. You
can find the instance's service account name in the Google Cloud console on your
instance's Overview page.
You can use the gcloud
storage buckets add-iam-policy-binding command to grant this
IAM role
to the service account for the bucket.
For help with setting IAM roles and permissions, see
Using
IAM permissions .
For more information,
see IAM for Cloud Storage.
Cloud SQL roles and permissions for Knowledge Catalog integration
To provide access to Cloud SQL metadata on Knowledge Catalog, you
can grant a user the roles/cloudsql.schemaViewer role or add the
cloudsql.schemas.view permission to a custom role.
For more information, see
Manage Cloud SQL resources with Knowledge Catalog .
Cloud SQL roles and permissions with other scenarios
Cloud SQL interacts with other Google Cloud products and tools.
These interactions also require specific roles and permissions which can vary
between scenarios. Cloud SQL documentation provides detailed
information about these requirements for each case below:
Using customer-managed encryption keys (CMEK) .
IAM Roles for Administering VPC Service Controls .
Use IAM with projects
The following sections show how to complete basic IAM tasks on
projects.
To complete the following tasks, you must have the
resourcemanager.projects.getIamPolicy and
resourcemanager.projects.setIamPolicy IAM permissions.
Add a member to a project-level policy
For a list of roles associated with Cloud SQL,
see IAM Roles .
Console
Go to the IAM & Admin page in
the Google Cloud console
In the project drop-down menu on the top bar, select the project to which
you want to add a member.
Click Add . The Add members, roles to project dialog appears.
In the New members field, specify the name of the entity to which you
are granting access.
In the Select a role drop down, grant the appropriate role to the
member.
Roles that affect Cloud SQL resources are found in the
Project and Cloud SQL submenus.
Click Save .
gcloud
To add a project-level IAM policy, use
gcloud beta projects add-iam-policy-binding .
View the IAM policy for a project
Console
Go to the IAM & Admin page in
the Google Cloud console
In the project drop-down menu on the top bar, select the project whose
policy you want to view.
There are two ways to view permissions for the project:
View by Members : View the Role column associated with individual
members to see which roles each member has.
View by Roles : Use the drop-down associated with individual
roles to see which members have the role.
gcloud
To view the IAM policy of a project, use
gcloud beta projects get-iam-policy .
Remove a member from a project-level policy
Console
Go to the IAM & Admin page in
the Google Cloud console
In the project drop-down menu on the top bar, select the project from
which you want to remove a member.
Make sure you are viewing permissions by Members , and select the
members you want to remove.
Click Remove .
In the overlay window that appears, click Confirm .
gcloud
To remove a project-level IAM policy, use
gcloud beta projects remove-iam-policy-binding .
Important: It typically takes about a minute for revoking access to take
effect. In some cases it may take longer. If you remove a user's access,
this change is immediately reflected in the metadata; however, the user may
still have access to the object for a short period of time.
Best practices
IAM, like any other administrative settings, requires active
management to be effective. Before you make a resource accessible to
other users, be sure you know what roles you want each of those people to play.
Over time, changes in project management, usage patterns, and organizational
ownership may require you to modify IAM settings on projects,
especially if you manage Cloud SQL in a large organization or for a
large group of users. As you evaluate and plan your access control settings,
keep the following best practices in mind:
Use the principle of least privilege when granting access.
The principle of least privilege is a security guideline
for granting access to your resources. When you grant access based on the
principle of least privilege, you give a user only the access they need to
accomplish their assigned task.
Avoid granting roles with setIamPolicy permission to people you do not know.
Granting setIamPolicy permission allows a user to change permissions
and take control of data. You should use roles with setIamPolicy
permission only when you want to delegate administrative control over
objects and buckets.
Be sure you delegate administrative control of your resources.
You should be sure that your resources can still be managed by
other team members should an individual with administrative access leave the
group. Two common ways to achieve this are the following:
Assign the Cloud SQL Admin role for your project to a group
instead of an individual.
Assign the Cloud SQL Admin role for your project to at least two
individuals.
What's next
Learn more about Controlling access
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
