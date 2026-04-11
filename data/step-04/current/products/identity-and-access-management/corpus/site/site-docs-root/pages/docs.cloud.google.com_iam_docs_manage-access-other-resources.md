---
title: "Manage access to other resources \_|\_ Identity and Access Management (IAM)\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/manage-access-other-resources
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/manage-access-other-resources
  title: "Manage access to other resources \_|\_ Identity and Access Management (IAM)\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
IAM
Guides
Send feedback
Manage access to other resources
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the general process for granting, changing, and revoking
access to resources that accept allow policies.
Note: The process for managing access to certain resources might
vary slightly from the process described on this page. For resource-specific
instructions, see the following guides:
Manage access to
projects, folders, and organizations
Manage access to
service accounts
In Identity and Access Management (IAM), access is granted through allow policies , also
known as IAM policies. An allow policy is attached to a
Google Cloud resource. Each allow policy contains a collection of role
bindings that associate one or more principals, such as users or service
accounts, with an IAM role. These role bindings grant the
specified roles to the principals, both on the resource that the allow policy is
attached to and on all of that resource's descendants . For
more information about allow policies, see
Understanding allow policies .
Note: The IAM role picker uses Gemini to help you find and grant the
right predefined roles to your principals. For more information, see Get predefined role suggestions with Gemini
assistance .
This page describes how to manage access to resources using the
Google Cloud console, the Google Cloud CLI, and the REST API. You can also manage
access using the Google Cloud client libraries.
Note: You can also use deny policies to prevent principals from using specific
IAM permissions. For more information, see Deny
policies .
Before you begin
Review the list of resource types that accept allow
policies .
Ensure that you have the required IAM
roles .
Required roles
To manage access to a resource, you need permissions to get the resource, and to
get and set the allow policy for the resource. These permissions have the
following form, where SERVICE is the name of the service
that owns the resource and RESOURCE_TYPE is the name of
the resource type that you want to manage access to:
SERVICE . RESOURCE_TYPE .get
SERVICE . RESOURCE_TYPE .getIamPolicy
SERVICE . RESOURCE_TYPE .setIamPolicy
For example, to manage access to a Compute Engine instance, you need the
following permissions:
compute.instances.get
compute.instances.getIamPolicy
compute.instances.setIamPolicy
To gain the required permissions, ask your administrator to grant you a
predefined or custom role that includes the permissions. For example, your
administrator could grant you the Security Admin role
( roles/iam.securityAdmin ), which includes permissions to manage access to
almost all Google Cloud resources.
Note: When you create some resources, such as projects, roles might be
automatically granted on the resources. These roles are granted even if you do
not have permission to manage the allow policy for the new resource. For more
information, see Default policies .
View current access
The following section shows you how to use the Google Cloud console, the
gcloud CLI, and the REST API to view who has access to a
resource. You can also view access by using the Google Cloud client
libraries to get the resource's allow policy.
Note: If you grant access to a user's email alias or a secondary domain, then the values in
your allow policy might not match the values that you initially entered. If you grant
access to an email alias, then the allow policy displays the user's primary email address.
If you grant access to a secondary domain, then the allow policy displays the primary
domain.
Console
Note: The Google Cloud console shows access in a list form, rather than
directly showing the resource's allow policy.
In the Google Cloud console, go to the page that lists the resource that
you want to view access to.
For example, to manage access to a Compute Engine instance, go to the
VM instances page.
Go to VM instances
Select the checkbox next to the resource that you want to view access to.
Ensure that the info panel is visible. If it is not visible, click
Show info panel . The info panel's permissions tab lists all
principals who have access to the resource.
If the Show inherited permissions switch is on, the list includes
principals with inherited roles; that is, principals whose access comes from
roles on parent resources rather than roles on the resource itself. For more
information about policy inheritance, see Policy inheritance and the
resource hierarchy .
gcloud
To see who has access to your resource, get the allow policy for the resource.
To learn how to interpret allow policies, see
Understanding allow policies .
Note: A resource's allow policy does not show any roles gained through
policy inheritance . To view inherited roles, use the
Google Cloud console, or follow the instructions on
Viewing effective IAM
policies .
To get the allow policy for the resource, run the get-iam-policy command for
the resource.
The format for this command varies depending on the resource type you're
managing access to. To find the format for your resource, find the reference
for the resource's get-iam-policy command in the Google Cloud CLI
reference . This reference is organized by service, then resource.
For example, to get the allow policy of a Compute Engine VM instance,
follow the format described in the gcloud compute instances get-iam-policy
reference .
Optionally, add the following arguments to the command to specify the
format and export the results:
--format = FORMAT > PATH
Provide the following values:
FORMAT : The desired format for the policy. Use json
or yaml .
PATH : The path to a new output file for the
policy.
When you run the command, the resource's allow policy is either printed to the
console or exported to the specified file.
REST
To see who has access to your resource, get the resource's allow policy. To
learn how to interpret allow policies, see
Understanding allow policies .
Note: A resource's allow policy does not show any roles gained through
policy inheritance . To view inherited roles, use the
Google Cloud console, or follow the instructions on
Viewing effective IAM
policies .
To get the resource's allow policy, use the resource's getIamPolicy method.
The HTTP method, URL, and request body depend on the resource that you want to
view access to. To find these details, find the API reference for the service
that owns the resource, then find the reference for the resource's
getIamPolicy method. For example, the HTTP method, URL, and request body for a
Compute Engine instance are specified in the instances getIamPolicy
reference .
The response for any resource's getIamPolicy method contains the resource's
allow policy.
Grant or revoke a single IAM role
You can use the Google Cloud console and the gcloud CLI to quickly
grant or revoke a single role for a single principal, without editing the
resource's allow policy directly.
Common types of principals include Google
Accounts, service accounts, Google groups, and domains.
For a list of all principal types, see Principal types .
Note: If the iam.allowedPolicyMemberDomains
organization policy constraint is enforced in your organization, then you might not be able to
grant roles to newly created groups. If you get a failedPrecondition error when
trying to grant a role to a newly created group, wait 24 hours, and then try granting the role
again.
In general, policy changes take effect within 2 minutes. However, in some cases, it
can take 7 minutes or more for changes to propagate across the system.
If you need help to identify the most appropriate predefined role, see
Find the right predefined roles .
Grant a single IAM role
To grant a single role to a principal, do the following:
Console
In the Google Cloud console, go to the page listing the resource that you
want to view access to.
For example, to manage access to a Compute Engine instance, go to the
VM instances page.
Go to VM instances
Select the checkbox next to the resource that you want to manage access to.
Ensure that the info panel is visible. If it is not visible, click
Show info panel .
Select a principal to grant a role to:
To grant a role to a principal who already has other roles on the resource,
find a row containing the principal, click
edit Edit
principal in that row, and click
add Add another
role .
Note: You cannot edit inherited roles when managing access to a
resource. To edit inherited roles, go to the resource where the
role was granted.
To grant a role to a principal who doesn't already have other roles on the
resource, click
person_add Add
principal , then enter an identifier for the principal—for example,
my-user@example.com or
//iam.googleapis.com/locations/global/workforcePools/example-pool/group/example-group@example.com .
Select a role to grant from the drop-down list. For best security practices,
choose a role that includes only the permissions that your principal needs.
Optional: Add a condition to the role.
Click Save . The principal is granted the role on the resource.
gcloud
To quickly grant a role to a principal, run the add-iam-policy-binding
command.
The format for this command varies depending on the resource type you're
managing access to. To find the format for your resource, find the reference
for the resource's add-iam-policy-binding command in the Google Cloud CLI
reference . This reference is organized by service, then resource.
For example, to grant a principal a role on a Compute Engine instance,
follow the format described in the gcloud compute instances add-iam-policy-
binding reference .
Note: If you grant access to a user's email alias or a secondary domain, then the values in
your allow policy might not match the values that you initially entered. If you grant
access to an email alias, then the allow policy displays the user's primary email address.
If you grant access to a secondary domain, then the allow policy displays the primary
domain.
Revoke a single IAM role
To revoke a single role from a principal, do the following:
Console
In the Google Cloud console, go to the page listing the resource that you
want to revoke access from.
For example, to manage access to a Compute Engine instance, go to the
VM instances page:
Go to VM instances
Select the checkbox next to the resource that you want to manage access to.
Ensure that the info panel is visible. If it is not visible, click
Show info panel .
Find the row containing the principal whose access you want to revoke. Then click
edit Edit
principal in that row.
Note: You cannot edit inherited roles when managing access to a
resource. To edit inherited roles, go to the resource where the
role was granted.
Click the Delete delete button for
the role that you want to revoke, and then click Save .
gcloud
To quickly revoke a role from a principal, run the remove-iam-policy-binding
command.
The format for this command varies depending on the resource type you're
managing access to. To find the format for your resource, find the reference
for the resource's remove-iam-policy-binding command in the Google Cloud CLI
reference . This reference is organized by service, then resource.
For example, to grant a principal a role on a Compute Engine instance,
follow the format described in the gcloud compute instances
remove-iam-policy-binding reference .
Grant or revoke multiple IAM roles using Google Cloud console
You can use the Google Cloud console to grant and revoke multiple roles for
a single principal:
In the Google Cloud console, go to the page listing the resource that you
want to view access to.
For example, to manage access to a Compute Engine instance, go to the
VM instances page.
Go to VM instances
Select the checkbox next to the resource that you want to manage access to.
If the info panel is not visible, click Show info panel .
Select the principal whose roles you want to modify:
To modify roles for a principal who already has roles on the resource,
find a row containing the principal, click
edit Edit
principal in that row, and click
add Add another
role .
Note: You cannot edit inherited roles when managing access to a
resource. To edit inherited roles, go to the resource where the
role was granted.
To grant roles to a principal who doesn't have any existing roles on the
resource, click person_add Add principal , then enter an
identifier for the principal—for example, my-user@example.com or
//iam.googleapis.com/locations/global/workforcePools/example-pool/group/example-group@example.com .
Modify the principal's roles:
To grant a role to a principal who doesn't have any existing roles on the
resource, click Select a role , then select a role to grant from the
drop-down list.
To grant an additional role to the principal, click Add another role ,
then select a role to grant from the drop-down list.
To replace one of the principal's roles with a different role, click the
existing role, then choose a different role to grant from the drop-down
list.
To revoke one of the principal's roles, click the Delete delete button for each role that you want to
revoke.
You can also add a condition to a role, modify a role's
condition , or remove a role's
condition .
Click Save .
Note: If you grant access to a user's email alias or a secondary domain, then the values in
your allow policy might not match the values that you initially entered. If you grant
access to an email alias, then the allow policy displays the user's primary email address.
If you grant access to a secondary domain, then the allow policy displays the primary
domain.
Grant or revoke multiple IAM roles programmatically
To make large-scale access changes that involve granting and revoking multiple
roles for multiple principals, use the read-modify-write pattern to update the
resource's allow policy:
Read the current allow policy by calling getIamPolicy() .
Edit the allow policy, either by using a text editor or programmatically, to
add or remove any principals or role bindings.
Write the updated allow policy by calling setIamPolicy() .
This section shows how to use the gcloud CLI and the REST API to
update the allow policy. You can also update the allow policy using the
Google Cloud client libraries.
Note: If the iam.allowedPolicyMemberDomains
organization policy constraint is enforced in your organization, then you might not be able to
grant roles to newly created groups. If you get a failedPrecondition error when
trying to grant a role to a newly created group, wait 24 hours, and then try granting the role
again.
In general, policy changes take effect within 2 minutes. However, in some cases, it
can take 7 minutes or more for changes to propagate across the system.
Get the current allow policy
gcloud
To get the allow policy for the resource, run the get-iam-policy command for
the resource.
The format for this command varies depending on the resource type you're
managing access to. To find the format for your resource, find the reference
for the resource's get-iam-policy command in the Google Cloud CLI
reference . This reference is organized by service, then resource.
For example, to get the allow policy of a Compute Engine VM instance,
follow the format described in the gcloud compute instances get-iam-policy
reference .
Optionally, add the following arguments to the command to specify the
format and export the results:
--format = FORMAT > PATH
Provide the following values:
FORMAT : The desired format for the allow policy. Use
json or yaml .
PATH : The path to a new output file for the allow
policy.
When you run the command, the resource's allow policy is either printed to the
console or exported to the specified file.
REST
To get the resource's allow policy, use the resource's getIamPolicy method.
The HTTP method, URL, and request body depend on the resource that you want to
view access to. To find these details, find the API reference for the service
that owns the resource, then find the reference for the resource's
getIamPolicy method. For example, the HTTP method, URL, and request body for a
Compute Engine VM instance are specified in the
instances getIamPolicy reference .
The response for any resource's getIamPolicy method contains the resource's
allow policy. Save the response in a file of the appropriate type ( json or
yaml ).
Modify the allow policy
Programmatically or using a text editor, modify the local copy of your
resource's allow policy to reflect the roles you want to grant or revoke.
To ensure that you do not overwrite other changes, do not edit or remove the
allow policy's etag field. The etag field identifies the current state of
the allow policy. When you set the updated allow policy ,
IAM compares the etag value in the request with the
existing etag , and only writes the allow policy if the values match.
Important: None of your changes will take effect until you
set the updated allow policy .
To edit the roles that an allow policy grants, you need to edit the role
bindings in the allow policy. Role bindings have the following format:
{
"role" : " ROLE_NAME " ,
"members" : [
" PRINCIPAL_1 " ,
" PRINCIPAL_2 " ,
...
" PRINCIPAL_N "
],
"conditions:" {
CONDITIONS
}
}
The placeholders have the following values:
ROLE_NAME : The name of the role that you want to
grant. Use one of the following formats:
Predefined roles: roles/ SERVICE . IDENTIFIER
Project-level custom roles: projects/ PROJECT_ID /roles/ IDENTIFIER
Organization-level custom roles: organizations/ ORG_ID /roles/ IDENTIFIER
For a list of predefined roles, see Understanding
roles .
PRINCIPAL_1 , PRINCIPAL_2 ,
... PRINCIPAL_N : Identifiers for the principals that
you want to grant the role to.
Principal identifiers usually have the following form:
PRINCIPAL-TYPE : ID .
For example, user:my-user@example.com or
principalSet://iam.googleapis.com/locations/global/workforcePools/example-pool/group/example-group@example.com .
For a full list of the values that PRINCIPAL can have,
see Principal identifiers .
For the principal type user , the domain name in the identifier must be
a Google Workspace domain or a Cloud Identity domain. To learn how to set
up a Cloud Identity domain, see the
overview of Cloud Identity .
CONDITIONS : Optional. Any conditions
that specify when access will be granted.
Grant a role
To grant roles to your principals, modify the role bindings in the allow policy.
To learn what roles you can grant, see
Understanding roles , or
view grantable roles for the resource. If you need help to
identify the most appropriate predefined roles, see
Find the right predefined roles .
Optionally, you can use conditions to grant roles only when
certain requirements are met.
To grant a role that is already included in the allow policy, add the principal
to an existing role binding:
gcloud
Edit the allow policy by adding the principal to an existing role binding. Note
that this change will not take effect until you
set the updated allow policy .
For example, imagine the allow policy contains the following role binding, which
grants the Compute Instance Admin role ( roles/compute.instanceAdmin ) to
Kai:
{
"role" : "roles/compute.instanceAdmin" ,
"members" : [
"user:kai@example.com"
]
}
To grant that same role to Raha, add Raha's principal identifier to the
existing role binding:
{
"role" : "roles/compute.instanceAdmin" ,
"members" : [
"user:kai@example.com" ,
"user:raha@example.com"
]
}
REST
Edit the allow policy by adding the principal to an existing role binding. Note
that this change will not take effect until you
set the updated allow policy .
For example, imagine the allow policy contains the following role binding, which
grants the Compute Instance Admin role ( roles/compute.instanceAdmin ) to
Kai:
{
"role" : "roles/compute.instanceAdmin" ,
"members" : [
"user:kai@example.com"
]
}
To grant that same role to Raha, add Raha's principal identifier to the
existing role binding:
{
"role" : "roles/compute.instanceAdmin" ,
"members" : [
"user:kai@example.com" ,
"user:raha@example.com"
]
}
To grant a role that is not yet included in the allow policy, add a new role
binding:
gcloud
Edit the allow policy by adding a new role binding that grants the role to the
principal. This change will not take effect until you
set the updated allow policy .
For example, to grant the Compute Load Balancer Admin role
( roles/compute.loadBalancerAdmin ) to Raha, add the following
role binding to the bindings array for the allow policy:
{
"role" : "roles/compute.loadBalancerAdmin" ,
"members" : [
"user:raha@example.com"
]
}
REST
Edit the allow policy by adding a new role binding that grants the role to the
principal. This change will not take effect until you
set the updated allow policy .
For example, to grant the Compute Load Balancer Admin role
( roles/compute.loadBalancerAdmin ) to Raha, add the following
role binding to the bindings array for the allow policy:
{
"role" : "roles/compute.loadBalancerAdmin" ,
"members" : [
"user:raha@example.com"
]
}
Revoke a role
To revoke a role, remove the principal from the role binding. If there are no
other principals in the role binding, remove the entire role binding.
Note: Role bindings with no principals are not allowed and will result in an
error when setting the allow policy.
gcloud
Revoke a role by editing the JSON or YAML allow policy returned by the
get-iam-policy command. This change will not take effect until you
set the updated allow policy .
To revoke a role from a principal, delete the desired principals or bindings
from the bindings array for the allow policy.
REST
Revoke a role by editing the JSON or YAML allow policy returned by the
get-iam-policy command. This change will not take effect until you
set the updated allow policy .
To revoke a role from a principal, delete the desired principals or bindings
from the bindings array for the allow policy.
Set the allow policy
After you modify the allow policy to grant and revoke the desired roles, call
setIamPolicy() to make the updates.
Warning: Setting a new allow policy permanently overwrites the existing allow
policy on the resource. To avoid removing role bindings unintentionally, always
follow the read-modify-write pattern when updating an allow policy: read the
existing allow policy, modify it as needed, and then write the updated version
of the allow policy.
gcloud
To set the allow policy for the resource, run the set-iam-policy command for
the resource.
The format for this command varies depending on the resource type you're
managing access to. To find the format for your resource, find the reference
for the resource's set-iam-policy command in the Google Cloud CLI
reference . This reference is organized by service, then resource.
For example, to get the allow policy of a Compute Engine VM instance,
follow the format described in the gcloud compute instances set-iam-policy
reference .
The response for any resource's set-iam-policy command contains the resource's
updated allow policy.
Note: If you treat policies as code and store them in a version-control system, you should
store the policy that is returned, not the policy that you sent in the request.
REST
To set the resource's allow policy, use the resource's setIamPolicy method.
The HTTP method, URL, and request body depend on the resource that you want to
view access to. To find these details, find the API reference for the service
that owns the resource, then find the reference for the resource's
setIamPolicy method. For example, the HTTP method, URL, and request body for a
Compute Engine VM instance are specified in the
instances setIamPolicy reference .
The response for any resource's setIamPolicy method contains the resource's
updated allow policy.
Note: If you treat policies as code and store them in a version-control system, you should
store the policy that is returned, not the policy that you sent in the request.
Note: If you grant access to a user's email alias or a secondary domain, then the values in
your allow policy might not match the values that you initially entered. If you grant
access to an email alias, then the allow policy displays the user's primary email address.
If you grant access to a secondary domain, then the allow policy displays the primary
domain.
What's next
Learn how to manage access to projects, folders, and
organizations or how to
manage access to service accounts .
Find out how to
choose the most appropriate predefined roles .
Use the Policy Troubleshooter to understand why a user does
or doesn't have access to a resource or have permission to call an API.
Discover how to
view the roles that you can grant on a particular
resource .
Learn how to make a principal's access conditional with
conditional role bindings .
Try it for yourself
If you're new to Google Cloud, create an account to evaluate how our
products perform in real-world scenarios. New customers also get $300 in
free credits to run, test, and deploy workloads.
Get started for free
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
