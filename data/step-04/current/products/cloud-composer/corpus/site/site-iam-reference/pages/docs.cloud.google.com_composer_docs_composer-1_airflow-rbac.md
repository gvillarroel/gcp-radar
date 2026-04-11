---
title: "Using Airflow UI Access Control \_|\_ Cloud Composer \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/composer-1/security-practices
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/composer-1/airflow-rbac
  title: "Using Airflow UI Access Control \_|\_ Cloud Composer \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

On September 15, 2026 , all Cloud Composer 1 versions and versions 2.0.x of Cloud Composer 2 will reach their planned end of life . You will not be able to use environments with these versions. We recommend planning migration to Cloud Composer 3 . Cloud Composer 2 versions 2.1.x and later are still supported and are not impacted by this change.
Home
Documentation
Data analytics
Cloud Composer
Composer 1 Guides
Send feedback
Using Airflow UI Access Control
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Composer 3 | Cloud Composer 2 | Cloud Composer 1
This page describes different mechanisms of access control for the Airflow UI
and DAG UI. You can use these mechanisms, in addition to access control
provided by IAM, to separate users in the
Airflow UI and DAG UI of your environment.
Overview of Airflow UI access control in Cloud Composer
Access to Airflow UI and DAG UI and
visibility of data and operations in those UIs is controlled at two levels in
Cloud Composer:
Access to the Airflow UI and DAG UI in Cloud Composer is
controlled by IAM .
If an account does not have a role that can
view Cloud Composer environments in your
project, then Airflow UI and DAG UI are not available.
IAM does not provide any additional fine-grained
permission control in the Airflow UI or DAG UI.
Apache Airflow Access Control model allows to
reduce visibility in Airflow UI and DAG UI based on user role.
Apache Airflow Access Control is a feature of Airflow, with its
own model of users, roles, permissions, which is different from
IAM.
Warning: When you revoke an IAM role that grants
Airflow UI access to a user, the previously assigned permission might
be cached in the web browser for up to 12 hours. Warning: Airflow UI Access Control only controls visibility
and access in Airflow UI, DAG UI, and stable REST API in Airflow.
Airflow UI Access Control does not apply to other interfaces that are
available to users, such as Airflow CLI commands executed
through gcloud CLI. This model is not enforced in the DAG and
tasks code. For example, you can deploy a DAG that changes Airflow roles and
user assignments for these roles.
Apache Airflow Access Control uses resource-based permissions. All Airflow
users with a specific Airflow role get this role's permissions. For example,
Airflow users that have a role with the can delete on Connections permission
can delete connections on the Connections page in the Airflow UI.
You can also assign
DAG-level permissions for individual DAGs. For
example, so that only users with a specific Airflow role can see a certain DAG
in the Airflow UI. In Cloud Composer, you can
automatically assign DAG-level permissions ,
based on the subfolder where the DAG file is located in the environment's
bucket.
Before you begin
The Airflow UI with Access Control is available for
Cloud Composer versions 1.13.4 or later versions and
Airflow 1.10.10 and later versions. The environment must also run Python 3.
Per-folder Roles Registration is available in
Cloud Composer 1.18.12 and later versions in Airflow 2, and in
Cloud Composer 1.13.4 and later versions in Airflow 1.
Enable the Airflow UI Access Control
Airflow 2
The Airflow UI with Access Control is always enabled in Airflow 2.
Airflow 1
To enable the Airflow UI with Access Control, override the
following Airflow configuration option:
Section
Key
Value
webserver
rbac
True
You can do so for an existing environment, or when creating a new environment.
With this configuration, your environment runs the Airflow UI with Access
Control instead of the classic Airflow UI.
Manage Airflow roles and access control settings
Users with the Admin role (or equivalent) can view and modify access control
settings in the Airflow UI.
In the Airflow UI, you can configure access control settings from
the Security menu. For more information about the Airflow Access Control
model, available permissions, and default roles, see the
Airflow UI Access Control documentation .
Airflow 1 treats the User role as a template for all custom roles. Airflow
continually copies permissions from the User role to all custom roles, except
permissions for all_dags .
Airflow maintains its own list of users. Users with the Admin
role (or equivalent) can view the list of users who have opened the Airflow UI
of an environment, and were registered in Airflow. This list also includes users
manually preregistered by an Admin, as described in the following section.
Register users in the Airflow UI
New users are automatically registered when they open the Airflow UI of a
Cloud Composer environment for the first time.
At registration, users are granted the role specified in the
[webserver]rbac_user_registration_role Airflow configuration option. You can
control the role of newly registered users by overriding this
Airflow configuration option with a different value.
If not specified, the default registration role is Op in environments with
Airflow 2 and 3.
In environments with Airflow 1.10.*, the default registration role is Admin .
The following steps are recommended for creating a basic role configuration for
the Airflow UI:
Airflow 2
Environment administrators open the Airflow UI for the newly created
environment.
Grant the administrator accounts the Admin role. The default role for
new accounts is Op . To assign the Admin role, run the following
Airflow CLI command with
gcloud CLI:
gcloud composer environments run ENVIRONMENT_NAME \
--location LOCATION \
users add-role -- -e USER_EMAIL -r Admin
Replace:
ENVIRONMENT_NAME with the name of the environment.
LOCATION with the region where the environment is located.
USER_EMAIL with the email of a user account.
Admins can now configure access control for new users, including granting
the Admin role to other users.
Airflow 1
Environment administrators open the Airflow UI for the newly created
environment, where they are automatically registered with the Admin
role.
Override the
following Airflow configuration option to the required role for new
users. For example, to User .
Section
Key
Value
webserver
rbac_user_registration_role
User or other non-Admin role
Admins can now configure Airflow UI access control for new users, including
granting the Admin role to other users.
Preregister users
Users are automatically registered with
numeric IDs of Google user accounts (not
email addresses) as their usernames. You can also manually preregister a user
and assign a role to them by adding a user record with the username field set
to the user's primary email address. When a user with an email address
matching a preregistered user record logs in to Airflow UI for the first time,
their username is replaced with the user ID currently (at the time
of first login) identified by their email address. The relationship
between
Google identities (email addresses) and user accounts (user IDs)
is not fixed. Google groups cannot be preregistered.
To preregister users, you can use Airflow UI or run an Airflow CLI command
through Google Cloud CLI.
To preregister a user with a custom role through Google Cloud CLI,
run the following Airflow CLI command :
gcloud composer environments run ENVIRONMENT_NAME \
--location LOCATION \
users create -- \
-r ROLE \
-e USER_EMAIL \
-u USER_EMAIL \
-f FIRST_NAME \
-l LAST_NAME \
--use-random-password # The password value is required, but is not used
Replace the following:
ENVIRONMENT_NAME : the name of the environment
LOCATION : the region where the environment is located
ROLE : an Airflow role for the user, for example, Op
USER_EMAIL : the user's email address
FIRST_NAME and LAST_NAME : user's first name and last name
Example:
gcloud composer environments run example-environment \
--location us-central1 \
users create -- \
-r Op \
-e "example-user@example.com" \
-u "example-user@example.com" \
-f "Name" \
-l "Surname" \
--use-random-password
Remove users
Deleting a user from Airflow does not revoke access for that user, because they
are automatically registered again next time they access the Airflow UI. To
revoke access to the entire Airflow UI, remove the composer.environments.get
permission from their allow policy for your project.
You can also change the user's role to Public, which keeps the
user's registration, but removes all permissions for the Airflow UI.
Configure DAG-level permissions automatically
The Per-folder Roles Registration feature automatically creates a
custom Airflow role for each subfolder
directly inside the /dags folder and grants this role DAG-level access to all
DAGs that have their source file stored in that respective subfolder. This
streamlines management of custom Airflow roles and their access to DAGs.
How Per-folder Roles Registration works
Per-folder Roles Registration is an automated way of configuring
roles and their DAG-level permissions. As such, it can cause conflicts with
other Airflow mechanisms that grant DAG-level permissions:
Manually assigning DAG permissions to roles .
Assigning DAGs to roles through the access_control property in a DAG .
To prevent such conflicts, enabling Per-folder Roles Registration also
changes the behavior of these mechanisms.
In Airflow 1, the possibility of using these mechanisms is disabled when
Per-folder Roles Registration is enabled. All DAG-level permission
management happens only through Per-folder Roles Registration.
In Airflow 2 and 3:
You can grant DAG access to roles through the access_control property
defined in DAG source code.
Manually granting DAG permissions (through Airflow UI or
gcloud CLI) can cause conflicts. For example, if you
manually grant DAG-level permissions to a per-folder role, these
permissions can be removed or overwritten when the DAG processor
synchronizes a DAG. We recommend not to grant DAG permissions manually.
Roles have a union of DAG access permissions registered through Per-folder
Roles Registration and defined in the access_control property of
the DAG.
Warning: The Per-folder Roles Registration feature controls only Airflow UI
permissions for DAGs and nothing else. It does not control other
Airflow permissions such as access to connections, variables, and so on; it
does not control access to gcloud CLI commands; it does not control
access to the environment's bucket.
DAGs located directly in the top-level /dags folder are not auto-assigned to
any per-folder role. They are not accessible with any per-folder role. Other
roles like Admin, Op, User or any custom role that is granted permissions can
access them through the Airflow UI and DAG UI.
If you upload DAGs to subfolders with names that match built-in Airflow roles
and roles created by Cloud Composer, then permissions to DAGs in
these subfolders are still assigned to these roles. For example, uploading a
DAG to the /dags/Admin folder grants permissions to this DAG to the Admin
role. Built-in Airflow roles include Admin, Op, User, Viewer, and Public.
Cloud Composer creates UserNoDags after the Per-folder
Roles Registration feature is enabled.
Airflow performs per-folder roles registration when it processes DAGs
in the Airflow scheduler. If there are more than a hundred DAGs in your
environment, you might see an
increase in DAG parsing time .
If this is the case, we recommend to increase the [scheduler]max_threads
parameter for an Airflow 1 environment, or [scheduler]parsing_processes for
Airflow 2 and 3.
Auto-assign DAGs to per-folder roles
To auto-assign DAGs to per-folder roles:
Override the following Airflow configuration option:
Section
Key
Value
webserver
rbac_autoregister_per_folder_roles
True
Change the new user registration role to a role without access to any DAGs.
In this way, new users do not have access to any DAGs until an Admin
assigns a role that has permissions for specific DAGs to their accounts.
UserNoDags and NoDags are roles created by Cloud Composer only
when Per-folder Roles Registration feature is enabled. They are an
equivalent to the User role but without access to any DAGs. The UserNoDags
role is created in Airflow 2 and 3, and NoDags role is created in Airflow 1.
In Airflow 2 and 3, override the following Airflow
configuration option:
Section
Key
Value
webserver
rbac_user_registration_role
UserNoDags
In Airflow 1, override the following Airflow configuration
option:
Section
Key
Value
webserver
rbac_user_registration_role
NoDags
Make sure that users are registered in Airflow .
Assign roles to users using one of the approaches:
Let Airflow automatically create roles based on the DAGs subfolders,
then assign users to these roles.
Pre-create empty roles for the DAGs subfolders, with role names matching
the name of a subfolder, then assign users to these roles. For example,
for the /dags/CustomFolder folder, create a role named
CustomFolder .
Caution: A user who created a folder with DAGs does not automatically get
the corresponding per-folder role. For example, if a user creates a
subfolder named CustomFolder , their account does not get the CustomFolder
role. An Admin must grant this role in the Airflow UI.
Upload DAGs to subfolders with names that match the roles assigned to users.
These subfolders must be located inside the /dags folder in the
environment's bucket. Airflow adds permissions to DAGs in such a
subfolder, so that only users with the corresponding role can access them
through the Airflow UI and DAG UI.
Configure DAG-level permissions manually
You can configure
DAG-level permissions for custom roles to
specify which DAGs are visible for specific user groups.
To configure DAG-level permissions in Airflow UI:
The Admin creates empty roles for grouping DAGs.
The Admin assigns users to appropriate roles.
The Admin or users assign DAGs to roles.
In Airflow UI, users can only see DAGs assigned to their group.
DAGs can be assigned to roles either through DAG properties, or from the
Airflow UI.
Assigning DAGs to roles in the Airflow UI
An Admin can assign the required DAG-level permissions to appropriate
role(s) in the Airflow UI.
This operation is not supported in the DAG UI.
Assigning DAGs to roles in DAG properties
You can set the
access_control DAG parameter on a DAG, specifying
the DAG-grouping role(s) to which the DAG is assigned.
Important: In Airflow 1, it is not possible to apply the new access control
settings through the sync_perm command . For more information, see the
related issue in the Airflow repository .
You can apply DAG-level permissions in the Airflow UI, or
assign them automatically .
Airflow 2
dag = DAG (
access_control = {
'DagGroup' : { 'can_edit' , 'can_read' },
},
...
)
Airflow 1
dag = DAG (
access_control = {
'DagGroup' : { 'can_dag_edit' , 'can_dag_read' },
},
...
)
Map audit logs in Airflow UI to users
Audit logs in Airflow UI are mapped to
numeric IDs of Google user accounts . For
example, if a user pauses a DAG, an entry is added to the logs.
Airflow 2
In Airflow 2, you can view audit logs on the Browse >
Audit Logs page in the Airflow UI.
Figure 1. An entry on the Audit Logs page
in Airflow 2
Airflow 1
In Airflow 1, you can view audit logs on the Browse >
Logs page.
Figure 1. An entry on the Logs page in Airflow 1
A typical entry lists a numeric ID in the Owner field:
accounts.google.com:NUMERIC_ID . You can map numeric IDs to user emails on the
Security > List Users page. This page is available for
users with the Admin role.
Note that the relationship between
Google identities (email addresses) and user accounts (user IDs)
is not fixed.
What's next
Override Airflow configuration options
Security overview
Cloud Composer access control
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
