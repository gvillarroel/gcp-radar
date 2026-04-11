---
title: "Restrict remote repositories \_|\_ Dataform \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataform/docs/restrict-git-remotes
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataform/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/dataform/docs/restrict-git-remotes
  title: "Restrict remote repositories \_|\_ Dataform \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Dataform
Guides
Send feedback
Restrict remote repositories
Stay organized with collections
Save and categorize content based on your preferences.
This document shows you how to use the
Organization Policy Service
to restrict the pool of third-party remote Git repositories that
Dataform repositories can connect to.
Before you begin
Before you set or edit the dataform.restrictGitRemotes policy, find full URLs
of the remote Git repositories that you want to add to the allowlist.
To find the full URL of a remote Git repository that is already connected to a
Dataform repository, follow these steps:
In the Google Cloud console, go to the Dataform page.
Go to Dataform
Select a repository, and then click Settings .
Keep in mind that URLs of remote repositories displayed on the
Dataform page are shortened and cannot be used in the
dataform.restrictGitRemotes policy.
On the Settings page, under Git connection settings ,
copy the Repository source value.
The Repository source value is the full URL of the remote repository.
You can use this URL in the dataform.restrictGitRemotes policy.
Required roles
To get the permissions that
you need to manage organization policies,
ask your administrator to grant you the
Organization policy administrator ( roles/orgpolicy.policyAdmin )
IAM role on the organization.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains
the permissions required to manage organization policies. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to manage organization policies:
orgpolicy.constraints.list
orgpolicy.policies.create
orgpolicy.policies.delete
orgpolicy.policies.list
orgpolicy.policies.update
orgpolicy.policy.get
orgpolicy.policy.set
You might also be able to get
these permissions
with custom roles or
other predefined roles .
About restricting remote Git repositories
You can
connect a Dataform repository
to a GitHub or a GitLab repository.
You might want to restrict the pool of remote repositories that
Dataform repositories can connect to in order to prevent malicious
actors from accessing your Dataform codebase and access tokens through
unprotected copies of your repository.
You can use
Organization Policy Service
to create an organization policy that
restricts which Git repository URLs Dataform can connect to.
The constraint for restricting remote Git repositories in Dataform is:
constraints/dataform.restrictGitRemotes
To use the constraint, you create an organization policy with an
allowedValues list of URLs
of remote Git repositories that can connect to a Dataform repository.
Remote Git repositories are identified by their full URL address.
The dataform.restrictGitRemotes policy has a retroactive effect, which
means that the constraint impacts pre-existing Dataform repositories.
Caution: Setting the dataform.restrictGitRemotes policy can block
communication and version control actions between pre-existing Dataform repositories and their remote Git repositories that are not included in the
allowedValues list.
When the organization policy is in place, Dataform repository can
connect to only the remote Git repositories that are listed in the
allowedValues list. Remote Git repositories that are not explicitly defined
in the organization policy are prohibited
from connecting to a Dataform repository.
Important: To create a Dataform repository connected to a remote
Git repository that is not allowed in the dataform.restrictGitRemotes
policy, first add the remote Git repository to the allowedValues list in the
organization policy, and then
create a new Dataform repository
and
connect it to the remote repository .
If you do not set the dataform.restrictGitRemotes policy,
communication between Dataform repositories and remote Git repositories
are not restricted.
You can use the dataform.restrictGitRemotes policy
in the following ways:
Allow all
Dataform repositories are allowed to connect to all remote repository
URLs. Select this option if your organization does not want to block
any communication with remote repositories. Alternatively, to allow all remote
repository URLs, you can leave the organization policy unset.
allowedValues list of URLs
Dataform repositories are allowed to connect to only the allow-listed
remote repositories. Select this option to prevent data exfiltration.
Deny all
Dataform repositories are not allowed to connect to any remote URLs.
Select this option if your organization wants to block all communication and use
Dataform repositories.
Specifications for allow-listing remote Git repositories
You can apply this
list constraint
only to GitHub and GitLab repositories.
The organization policy is applied retroactively and affects existing
Dataform repositories.
This constraint accepts allowedValues , blocking connection to all other
remote Git repositories, or Deny all . The default is Allow all - an unset
organization policy allows communication with all remote Git repositories.
We recommend setting the organization policy to allowedValues .
It is up to you or an administrator with the required permissions to manage
and maintain the policy. Ensure communication about the policy administrator
within your organization.
Set the organization policy constraint at the organization level
Console
Go to the /Organizational Policies/Organization Policies page.
Go to Organizational Policies
If necessary, select the required organization from the project
drop-down menu.
Click Restrict git remotes for repositories in Dataform .
Click Manage policy . If you can't click the
Manage policy button, you do not have the correct permissions .
Select Customize to set the organization policy for specific remote Git repositories.
Select the required Policy enforcement and Policy type .
For Policy values , select Custom .
Enter the full URL of a remote Git repository.
Click New policy value and enter full URLs of remote Git repositories
as needed.
Click Save to apply the constraint.
gcloud
To set a constraint for remote Git repositories, you first need your
organization ID. You can find the organization ID by running the
organizations list command and
looking for the numeric ID in the response:
gcloud organizations list
The gcloud CLI returns a list of organizations in the following
format:
DISPLAY_NAME ID
example-organization1 29252605212
example-organization2 1234567890
Use the
gcloud resource-manager org-policies set-policy command
to set the organization policy. You need to provide your policy as a JSON or YAML file.
Create a JSON file in the following format:
{
"name": "organizations/ ORGANIZATION_ID /policies/dataform.restrictGitRemotes",
"spec": {
"rules": [
{
"values": {
"allowedValues": ["https://github.com/example/allowed-repository.git"]
}
}
]
}
}
Replace ORGANIZATION_ID with the numeric ID of the
organization.
If you do not want Dataform repositories to be able to connect to
any remote Git repositories, you can set an organization policy with denyAll
set to true :
{
"name": "organizations/ ORGANIZATION_ID /policies/dataform.restrictGitRemotes",
"spec": {
"rules": [
{
"denyAll": true
}
]
}
}
Replace ORGANIZATION_ID with the numeric ID of the
organization.
API
Use the
setOrgPolicy() API
to define your constraint. Dataform is allowed to connect to the
remote Git repository URLs in the allowedValues list you specify.
For example, the following is a request to apply the
dataform.restrictGitRemotes constraint to an organization where selected
remote Git repositories that Dataform repositories can connect to:
POST https://orgpolicy.googleapis.com/v2/organizations/ ORGANIZATION_ID /policies
where ORGANIZATION_ID is the numeric ID of the
organization.
Now, in your request body, provide the desired organization policy for
this constraint:
{
"name": "organizations/ ORGANIZATION_ID /policies/dataform.restrictGitRemotes",
"spec": {
"rules": [
{
"values": {
"allowedValues": ["https://github.com/example/allowed-repository.git"]
}
}
]
}
}
Replace < code><var>ORGANIZATION_ID < / var >< / code > with the numeric ID
of the organization .
If you do not want Dataform repositories to be able to connect to
any remote Git repositories, you can set an organization policy with
denyAll set to true :
{
"name": "organizations/ ORGANIZATION_ID /policies/dataform.restrictGitRemotes",
"spec": {
"rules": [
{
"denyAll": true
}
]
}
}
Replace < code><var>ORGANIZATION_ID < / var >< / code > with the numeric ID
of the organization .
If the organization policy is already set, you need to execute the following
request with the organization policy definition as request body:
PATCH https://orgpolicy.googleapis.com/v2/organizations/ ORGANIZATION_ID /policies/dataform.restrictGitRemotes
Set the organization policy at the project level
Setting an organization policy at the project level overrides or merges with
the organization policy at
the organization level. In case of a merge, denyAll take precedence over
allowedValues . For example, if the organization policy at the organization
level is set to denyAll , and the merged policy at the project level lists a
remote repository URL on the allowedValues list, Dataform is not allowed to connect to
the remote repository. In such case, the organization policy at the project level must
override the policy at the organization level, so that Dataform can
connect to the remote repository. To learn more about Organization Policy
hierarchy, see Understanding hierarchy evaluation .
Console
Follow the same process documented under
Set the organization policy constraint at the organization level but
choose your desired project from the project selector instead of the
organization.
gcloud
Use the
gcloud resource-manager org-policies set-policy command
to set the organization policy. You need to provide your policy as a JSON or YAML file.
Create a JSON file in the following format:
{
"name": "projects/ PROJECT_ID_OR_NUMBER /policies/dataform.restrictGitRemotes",
"spec": {
"rules": [
{
"values": {
"allowedValues": ["https://github.com/example/allowed-repository.git"]
}
}
]
}
}
Replace PROJECT_ID_OR_NUMBER with the project ID or
project number for this organization policy.
Then, pass in the file with your request:
gcloud resource-manager org-policies set-policy MY_POLICY.JSON --project= PROJECT_ID
API
Use the
setOrgPolicy() API
to define your constraint. Dataform is allowed to connect to the
remote Git repository URLs in the allowedValues list you specify.
For example, the following is a request to apply the
dataform.restrictGitRemotes constraint to an organization where
Dataform repositories can connect only to the selected
remote Git repositories, and the constraints/dataform.restrictGitRemotes
policy is not set yet:
POST https://orgpolicy.googleapis.com/v2/projects/ PROJECT_ID_OR_NUMBER /policies
The request body contains the desired organization policy for this constraint:
{
"name": "projects/ PROJECT_ID_OR_NUMBER /policies/dataform.restrictGitRemotes",
"spec": {
"rules": [
{
"values": {
"allowedValues": ["https://github.com/example/allowed-repository.git"]
}
}
]
}
}
Replace PROJECT_ID_OR_NUMBER with the project ID or
project number for this request.
The following is a request to apply the
dataform.restrictGitRemotes constraint to an organization where
Dataform repositories can connect to only the selected
remote Git repositories, and
the constraints/dataform.restrictGitRemotes policy is already set:
PATCH https://orgpolicy.googleapis.com/v2/projects/ PROJECT_ID_OR_NUMBER /policies/dataform.restrictGitRemotes
The request body contains the desired organization policy for this constraint:
{
"name": "projects/ PROJECT_ID_OR_NUMBER /policies/dataform.restrictGitRemotes",
"spec": {
"rules": [
{
"values": {
"allowedValues": ["https://github.com/example/allowed-repository.git"]
}
}
]
}
}
Replace PROJECT_ID_OR_NUMBER with the project ID or
project number for this request.
Best practices for allow-listing Git remotes
To mitigate data exfiltration risk, explicitly set the
dataform.restrictGitRemotes constraint to allow-list a selection of trusted
remote Git repositories.
If you only use Dataform repositories that are not connected to
remote Git repositories, set the dataform.restrictGitRemotes constraint to
Deny All .
Avoid using the deniedValues list with this
constraint. If you define values in the deniedValues list, it means that
only the remote Git repositories in the deniedValues list are restricted
from connection. This could be a security
concern if you want control over exactly which remote Git repositories
Dataform can connect to. If you want to remove
certain remote Git repositories from the allowedValues list, update the
existing organization policy to remove them from the allowedValues list
rather than putting the remote into the deniedValues list at a lower hierarchy.
If you want to set an organization policy over a large part of the resource hierarchy but
exempt certain projects, restore the default organization policy by using
the setOrgPolicy method by specifying the
restoreDefault
object to allow all Dataform repositories in the projects to be
connected to remote Git repositories. The policies currently in place for
projects are not affected by the default setting.
Use Organization Policy
together with IAM roles to better control
access to your Dataform codebase.
Any Dataform repositories
within the organization or project with the organization policy enabled are
subject to this policy. If this is an issue,
we recommend that you set up other services and products in a different
project that does not have the organization policy applied, and use
Shared VPC , if needed.
Before setting the dataform.restrictGitRemotes policy, ensure communication
about the organization policy and its administrator within your organization.
It is up to you or an administrator with the required permissions to manage
and maintain the policy.
What's next
To learn more about the Organization Policy, see
Introduction to the Organization Policy Service .
To learn more about Organization Policy constraints, see
Organization Policy constraints .
To learn how to manage Google Cloud resources with Resource Manager, see
Manage your Google Cloud resources .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
