---
title: "Configure Gemini Code Assist code customization \_|\_ Gemini for Google Cloud\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/gemini/docs/codeassist/code-customization
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/gemini/docs
source_metadata:
  url: https://docs.cloud.google.com/gemini/docs/codeassist/code-customization
  title: "Configure Gemini Code Assist code customization \_|\_ Gemini for Google\
    \ Cloud \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Gemini for Google Cloud
Guides
Send feedback
Configure Gemini Code Assist code customization
Stay organized with collections
Save and categorize content based on your preferences.
Note: Gemini Code Assist code customization is available only in
Gemini Code Assist Enterprise. For more information, see
Gemini Code Assist supported features .
This document describes how to set up
Gemini Code Assist code customization
in the Google Cloud console, with the Google Cloud CLI, or with
Terraform by connecting Gemini Code Assist to your private code
repositories. Gemini Code Assist code customization feature lets
you receive code recommendations, which draw from the internal libraries,
private APIs, and coding style of your organization.
Before you begin
Set up Gemini Code Assist
with an Enterprise subscription .
Verify that you have the following Identity and Access Management (IAM) roles on
the project that owns the subscription:
Code Repository Indexes Admin ( roles/cloudaicompanion.codeRepositoryIndexesAdmin )
Gemini for Google Cloud User ( roles/cloudaicompanion.user )
Create or configure user accounts. Every developer in your organization
who is using Gemini Code Assist must have a user identity in
Google Cloud that has permission to access your Google Cloud project.
For more information, see
Grant roles in the Google Cloud console .
Verify each user has the following roles:
Gemini for Google Cloud User
Repository Groups User
The code customization feature uses Developer Connect to
access and index your private repositories. Ensure that the
Developer Connect region where your
Developer Connect repository connection is located is also a
supported location for code customization. The code customization
feature cannot be used if the Developer Connect connection is
in an unsupported region. For the list of supported regions, see
code customization limitations .
Choose which repositories are indexed
As a best practice, you should index repositories that have the following
characteristics:
Code that's of a similar style or structure to what you want your
developers to write.
Private libraries or APIs that you would like to call from your current
codebase.
Optional: Choose which files are not indexed
By default, code customization indexes all the
supported code files
in your specified repositories.
To prevent exposure of code that you don't want to index, you can use branch
patterns to
control access to your index
and use a stable branch, such as main .
Alternatively, you can also exclude files from the index by
creating an .aiexclude file .
Configure Gemini Code Assist code customization
Select one of the following options:
Console
In the Google Cloud console, go to the Code Customization page.
Go to Code customization for Gemini Code Assist
The Code customization for Gemini Code Assist page loads.
Create an index. Code customization relies on an index to analyze and parse
your repository for quicker code generation suggestions and lookups.
Click Create and configure the index details:
Select the region that is configured in
Developer Connect in your Google Cloud project.
Enter a name for your index. Note your index name. You need
it for several steps in this document.
Click Create .
Index creation generally takes 30 minutes to complete, but it might take
up to an hour. When indexing completes, you receive a notification in
the Google Cloud console.
Google limits the number of code repository indexes to one for each
project and organization.
Control access to your index using repository groups.
A repository group is a container for the indexing configuration, which
includes repositories and their branch patterns. Repository groups are
designed for granular IAM control, giving developers access
to the indexed data from those groups, where they have the
cloudaicompanion.repositoryGroups.use permission.
Repository groups contain Developer Connect repositories,
or links, from the same project and location.
On the Code customization for Gemini Code Assist page, click
Add repositories , and then select Add source repositories .
A list displays of existing repositories in Developer Connect for
the region you configured in the previous step to create the index.
If you need to add new repositories to the repository group, then click
Link repository and follow the steps in the Google Cloud console.
Additionally, you can select and then edit one or more repositories to add
a new branch.
Select the repository group to which you want to add new repositories.
Alternatively, click Create a new repository group to create and
configure a new repository group.
To begin indexing the selected repositories, click Index .
Indexing time varies depending on the size of repositories.
CLI
Verify that you have configured
Developer Connect
and connected to your repository:
GitHub.com
GitLab.com
Bitbucket.org
In a shell environment, run the
gcloud components update command
to verify that you have updated all installed components of the
gcloud CLI to the latest version.
For this step, you can install and initialize the gcloud CLI, or
you can use Cloud Shell Editor .
gcloud components update
Create an index. Code customization relies on an index to analyze and parse
your repository for quicker code generation suggestions and lookups.
To create the index, in a shell environment, use the
gemini code-repository-indexes create command :
gcloud gemini code-repository-indexes create INDEX_NAME \
--project= PROJECT_ID \
--location= REGION
Replace the following:
INDEX_NAME : your index name. Important :
Note your index name. You need it for several steps in this
document.
PROJECT_ID : your Google Cloud project ID.
REGION : the region that is configured in
Developer Connect in your Google Cloud project.
For commands to succeed, you must specify a
supported region .
Index creation generally takes 30 minutes to complete, but it might take
up to an hour.
Google limits the number of code repository indexes to one for each
project and organization.
Control access to your index using repository groups. A repository group is
a container for the indexing configuration, which includes repositories and
their branch patterns. Repository groups are designed for granular
IAM control, giving developers access to the indexed data
from those groups, where they have the
cloudaicompanion.repositoryGroups.use permission.
Repository groups contain Developer Connect repositories, or
links, from the same project and location.
Administrators perform the following actions:
Create the Code Repository Index resource.
In the same project and location, configure a new
Developer Connect connection.
Link Git repos in the connection.
Get links' resource names, pick branch pattern to index for each
link, and put it to one or multiple repository groups.
To create a repository group, in a shell environment, use the
gemini code-repository-indexes repository-groups create command :
gcloud gemini code-repository-indexes repository-groups create REPOSITORY_GROUP \
--project= PROJECT_ID \
--location= REGION \
--code-repository-index= INDEX_NAME \
--repositories='[{"resource": " REPOSITORY_RESOURCE_NAME ", "branchPattern": " BRANCH_NAMES "}]'
Note: You can use regular expression in
RE2 syntax to specify
branch names.
Replace the following:
REPOSITORY_GROUP : name of the repository
group, such as default .
REPOSITORY_RESOURCE_NAME : name of the
repository inside the Developer Connect connection.
To find the name of the repository, go to the
Git repositories page
in the Google Cloud console, and in the Repositories tab,
look for the Connection ID under the Connection column in the
table. To copy the resource name, click the
more_vert menu for more options,
and select Copy resource path .
BRANCH_NAMES : name of the branches you want
to index, such as main|dev .
You also can create a repository group with repositories defined in a
JSON (or YAML) file, formatted as follows:
JSON
[
{
"resource" : " REPOSITORY_RESOURCE_NAME " , "branchPattern" : "main|dev"
},
{
"resource" : " REPOSITORY_RESOURCE_NAME " , "branchPattern" : "dev"
}
]
YAML
- resource : REPOSITORY_RESOURCE_NAME
branchPattern : main|dev
- resource : REPOSITORY_RESOURCE_NAME
branchPattern : dev
To create a repository group based on a JSON or YAML file, in a shell
environment, use the
gemini code-repository-indexes repository-groups create command :
JSON
gcloud gemini code-repository-indexes repository-groups create REPOSITORY_GROUP \
--project = PROJECT_ID \
--location = REGION \
--code-repository-index = INDEX_NAME \
--repositories = FILEPATH .json
YAML
gcloud gemini code-repository-indexes repository-groups create REPOSITORY_GROUP \
--project = PROJECT_ID \
--location = REGION \
--code-repository-index = INDEX_NAME \
--repositories = FILEPATH .yaml
If preferred, you can encrypt and control your data with a
customer-managed encryption key (CMEK) through
Cloud Key Management Service . To learn more about using a
CMEK, see
Encrypt data with customer-managed encryption keys .
Grant IAM roles to the repository group on a project.
You only receive suggestions from repositories in the index. Each
repository belongs to one or multiple repository groups. To access
suggestions, you must grant the Cloud AI Companion Repository Groups User
IAM role
( roles/cloudaicompanion.repositoryGroupsUser )—which contains the
required cloudaicompanion.repositoryGroups.user IAM
permission—to the repository group by one of the following ways:
Grant principals permission to access the entire index.
Grant principals access to a subset of the index.
Entire index
To bind an IAM policy for a project, in a shell
environment, use the
projects add-iam-policy-binding command :
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = ' PRINCIPAL ' \
--role = 'roles/cloudaicompanion.repositoryGroupsUser'
Replace the following:
PRINCIPAL : the email address of the
principal that needs access—for example,
user:test-user@gmail.com for an individual, or
group:admins@example.com for a group.
For more information, see
gcloud projects set-iam-policy .
When prompted to specify a condition, enter None .
Subset of the index
You can create multiple repository groups and assign
IAM roles to different IAM principals.
In order to set up an IAM policy, you must prepare the
IAM policy JSON or YAML file, which will contain a
list of IAM groups and assigned roles. For example:
bindings:
- members:
- group:my-group@example.com
- user:test-user@example.com
role: roles/cloudaicompanion.repositoryGroupsUser
For additional details and syntax, see
Understanding allow policies .
Note: You can assign custom roles to your IAM groups,
but the custom role must contain all permissions of the
roles/cloudaicompanion.repositoryGroupsUser role.
To set the IAM policy, in a shell environment, use
the
gemini code-repository-indexes repository-groups set-iam-policy command :
gcloud gemini code-repository-indexes repository-groups set-iam-policy GROUP_NAME POLICY_FILE \
--project= PROJECT_ID \
--location= REGION \
--code-repository-index= INDEX_NAME
Replace the following:
GROUP_NAME : the repository group name you
created in a preceding step to control access to your index using
repository groups.
POLICY_FILE : the IAM policy.
For more information, see
gcloud gemini code-repository-indexes repository-groups set-iam-policy .
Terraform
Verify that you have configured
Developer Connect
and connected to your repository:
GitHub.com
GitLab.com
Bitbucket.org
Create an index. Code customization relies on an index to analyze and parse
your repository for quicker code generation suggestions and lookups.
resource "google_gemini_code_repository_index" "example" {
location = " REGION "
code_repository_index_id = " INDEX_NAME "
}
Replace the following:
INDEX_NAME : your index name. Important :
Note your index name. You need it for several steps in this document.
PROJECT_ID : your Google Cloud project ID.
REGION : the region that is configured in
Developer Connect in your Google Cloud project.
For commands to succeed, you must specify a
supported region .
Index creation generally takes 30 minutes to complete, but it might take
up to an hour.
Google limits the number of code repository indexes to one for each
project and organization.
Control access to your index using repository groups. A repository group
is a container for the indexing configuration, which includes repositories
and their branch patterns. Repository groups are designed for granular
IAM control, giving developers access to the indexed data
from those groups, where they have the
cloudaicompanion.repositoryGroups.use permission.
Repository groups contain Developer Connect repositories,
or links, from the same project and location.
Administrators perform the following actions:
Create Code the Repository Index resource.
In the same project and location, configure a new
Developer Connect connection.
Link Git repos in the connection.
Get links' resource names, pick branch pattern to index for each link,
and put it to one or multiple repository groups.
resource "google_gemini_repository_group" "example" {
location = " REGION "
code_repository_index = " INDEX_NAME "
repository_group_id = " REPOSITORY_GROUP "
repositories {
resource = " REPOSITORY_RESOURCE_NAME "
branch_pattern = " BRANCH_NAMES "
}
}
Note: You can use regular expression in
RE2 syntax to specify branch
names.
Replace the following:
REPOSITORY_GROUP : name of the repository group,
such as default .
REPOSITORY_RESOURCE_NAME : name of the repository
inside the Developer Connect connection. To find the name
of the repository, go to the
Git repositories page
in the Google Cloud console, and in the Repositories tab, look
for the Connection ID under the Connection column in the table. To
copy the resource name, click the
more_vert menu for more options, and
select Copy resource path .
BRANCH_NAMES : name of the branches you want to
index, such as main|dev .
You also can create a repository group with repositories defined in a JSON
(or YAML) file, formatted as follows:
JSON
[
{
"resource" : " REPOSITORY_RESOURCE_NAME " , "branchPattern" : "main|dev"
},
{
"resource" : " REPOSITORY_RESOURCE_NAME " , "branchPattern" : "dev"
}
]
YAML
- resource : REPOSITORY_RESOURCE_NAME
branchPattern : main|dev
- resource : REPOSITORY_RESOURCE_NAME
branchPattern : dev
To create a repository group based on a JSON or YAML file, in a shell
environment, use the
gemini code-repository-indexes repository-groups create command :
JSON
gcloud gemini code-repository-indexes repository-groups create REPOSITORY_GROUP \
--project = PROJECT_ID \
--location = REGION \
--code-repository-index = INDEX_NAME \
--repositories = FILEPATH .json
YAML
gcloud gemini code-repository-indexes repository-groups create REPOSITORY_GROUP \
--project = PROJECT_ID \
--location = REGION \
--code-repository-index = INDEX_NAME \
--repositories = FILEPATH .yaml
If preferred, you can encrypt and control your data with a
customer-managed encryption key (CMEK) through
Cloud Key Management Service . To learn more about using a
CMEK, see
Encrypt data with customer-managed encryption keys .
Grant IAM roles to the repository group on a project.
You only receive suggestions from repositories in the index. Each
repository belongs to one or multiple repository groups. To access
suggestions, you must grant the Cloud AI Companion Repository Groups User
IAM role
( roles/cloudaicompanion.repositoryGroupsUser )—which contains the
required cloudaicompanion.repositoryGroups.user IAM
permission—to the repository group by one of the following ways:
Grant principals permission to access the entire index.
Grant principals access to a subset of the index.
Entire index
To bind an IAM policy for a project, in a shell
environment, use the
projects add-iam-policy-binding command :
gcloud projects add-iam-policy-binding PROJECT_ID \
--member = ' PRINCIPAL ' \
--role = 'roles/cloudaicompanion.repositoryGroupsUser'
Replace the following:
PRINCIPAL : the email address of the
principal that needs access—for example,
user:test-user@gmail.com for an individual, or
group:admins@example.com for a group.
For more information, see
gcloud projects set-iam-policy .
When prompted to specify a condition, enter None .
Subset of the index
You can create multiple repository groups and assign
IAM roles to different IAM principals.
data "google_iam_policy" "foo" {
binding {
role = "roles/cloudaicompanion.repositoryGroupsUser"
members = [ "test-user@example.com" ]
}
}
resource "google_gemini_repository_group_iam_policy" "foo" {
project = " PROJECT_ID "
location = " REGION "
code_repository_index_id = " INDEX_NAME "
repository_group_id = " GROUP_NAME "
policy_data = data.google_iam_policy.foo.policy_data
}
data "google_gemini_repository_group_iam_policy" "foo" {
project = " PROJECT_ID "
location = " REGION "
code_repository_index_id = " INDEX_NAME "
repository_group_id = " GROUP_NAME "
depends_on = [
google_gemini_repository_group_iam_policy.foo
]
}
You can also create a binding:
resource "google_gemini_repository_group_iam_binding" "foo" {
project = " PROJECT_ID "
location = " REGION "
code_repository_index_id = " INDEX_NAME "
repository_group_id = " GROUP_NAME "
role = "roles/cloudaicompanion.repositoryGroupsUser"
members = [ "test-user@example.com" ]
}
Replace the following:
GROUP_NAME : the repository group name
you created in a preceding step to control access to your index
using repository groups.
Check indexing status
Depending on the number of repositories you want to index and their
size, indexing content can take up to 24 hours. For large repositories, indexing
can take longer. Indexing occurs once every 24 hours, picking up any changes
that were made in the repository.
Search for the indexing logs. For more information, see
Logging query language .
Console
In the Google Cloud console, go to the
Logs Explorer .
Go to Logs Explorer
Use the log names filter to view indexing logs.
CLI
To search for the indexing logs, in a shell environment, use the
logging read command :
gcloud logging read "logName="projects/ PROJECT_ID /logs/indexing""
Replace PROJECT_ID with the project ID where
the repository group is located.
For example, to view errors in the indexing logs, run the following
command:
gcloud logging read "logName="projects/ PROJECT_ID /logs/indexing" AND severity>=ERROR"
Review the associated indexing statuses, such as the following:
Start of repository indexing-for example, Indexing repository REPOSITORY_NAME . Total number of repositories: 10, succeeded: 6, failed: 0.
End of individual repository indexing-for example:
Success: Successfully finished indexing repository REPOSITORY_NAME . Total number of repositories: 10, succeeded: 7, failed: 0.
Failure: Failed to index repository REPOSITORY_NAME . Error: [<error message>]. Total number of repositories: 10, succeeded: 7, failed: 1.
End of repository indexing-for example:
Success: Finished indexing process. Repositories attempted: 10. Repositories successfully indexed: 9. Repositories unsuccessfully fetched: 0.
Failure: Finished indexing process. Repositories attempted: 10. Repositories successfully indexed: 9. Repositories unsuccessfully fetched: 1. Repositories that were not successfully fetched will be retried in the next run.
In the index statuses, REPOSITORY_NAME is the repository
you want to review.
Review the associated indexing errors, such as the following:
Failed to fetch repository.
Failed to list repository files.
Failed to retrieve repository information from the index.
Failed to retrieve files from the index.
Internal error.
Use code customization
Once you have set up code customization, you'll begin to see code completion
and code generation suggestions which may be based on private code you have
indexed in addition to results from full codebase awareness.
Developers added to the repository group where at least one resource is indexed
will receive a notice in their IDE that code customization was enabled. To see
the code customization status, developers can click the
spark Gemini symbol in
the bottom right corner and look for one of the following code customization
statuses in the search bar:
All set . Code customization is enabled and configured.
Unavailable . The developer is missing repository group access or the
repository group to which the user has access is empty.
Unset . Code customization either isn't enabled or isn't configured by the
administrator.
To learn more about using code customization and best practices, see
Use code customization .
Turn off code customization
Select one of the following options:
Console
In the Google Cloud console, go to the Gemini Products page.
Go to Gemini Products
The Gemini Products page loads.
In the navigation menu, click Code customization .
The Code customization page loads.
To delete the index, click Delete .
A warning message is displayed. If you want to proceed and delete the
index, enter the index name, and then click Delete .
CLI
To list all repository groups for the current index, in a shell
environment, use the
gemini code-repository-indexes repository-groups list command :
gcloud gemini code-repository-indexes repository-groups list --location= REGION \
--project= PROJECT_ID \
--code-repository-index= INDEX_NAME --uri
Replace the following:
REGION : the region that is configured in
Developer Connect in your Google Cloud project.
For commands to succeed, you must specify a
supported region .
PROJECT_ID : your Google Cloud project ID.
INDEX_NAME : name of the index you created in a
preceding step to create an index.
To delete a repository group from the current index, use the
gemini code-repository-indexes repository-groups delete command :
gcloud gemini code-repository-indexes repository-groups delete REPOSITORY_GROUP \
--location= REGION \
--project= PROJECT_ID \
--code-repository-index= INDEX_NAME
Repeat the preceding steps for each repository group until you delete all
repository groups from the index.
Optional: To delete the index, in a shell environment, use the
gemini code-repository-indexes delete command :
gcloud gemini code-repository-indexes delete INDEX_NAME \
--location= REGION \
--project= PROJECT_ID
What's next
Start using Gemini Code Assist:
VS Code, IntelliJ, and other supported JetBrains IDEs: Code with Gemini Code Assist
Cloud Shell Editor: Code with Gemini Code Assist
Cloud Workstations: Code with Gemini Code Assist
Learn how to use code customization
and best practices.
Learn how to encrypt data with customer-managed encryption keys (CMEK) .
Learn more about Developer Connect .
Learn how and when Gemini for Google Cloud uses your data .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
