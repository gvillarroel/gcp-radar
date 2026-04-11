---
title: "Analyze allow policies \_|\_ Policy Intelligence \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/policy-intelligence/docs/analyze-iam-policies
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/policy-intelligence/docs/analyze-iam-policies
source_metadata:
  url: https://docs.cloud.google.com/policy-intelligence/docs/analyze-iam-policies
  title: "Analyze allow policies \_|\_ Policy Intelligence \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Policy Intelligence
Guides
Send feedback
Analyze allow policies
Stay organized with collections
Save and categorize content based on your preferences.
This page shows how to use Policy Analyzer for allow policies
to find out which principals (users, service accounts, groups, and domains),
have what access to which
Google Cloud resources.
The examples on this page show how to run a Policy Analysis query and
immediately view the results. If you want to export the results for further
analysis, you can use
AnalyzeIamPolicyLongrunning to write
query results to BigQuery or
Cloud Storage .
Note:
Policy Analyzer uses the Cloud Asset API, which offers best-effort data freshness.
While almost all policy updates appear in Policy Analyzer in minutes, it's
possible that Policy Analyzer won't include the most recent policy updates.
Before you begin
Enable the Cloud Asset API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
You must enable the API in the project you will use to send the query. This
doesn't have to be the same resource that you scope your query to.
Optional: Understand how Policy Analyzer
works .
Optional: If you want to execute more than
20 policy analysis queries per organization
per day, ensure that you have an organization-level activation of the Premium
or Enterprise tier of
Security Command Center .
For more information, see Billing
questions .
Required roles and permissions
The following roles and permissions are required to analyze allow policies.
Required IAM roles
To get the permissions that
you need to analyze an allow policy,
ask your administrator to grant you the
following IAM roles on the project, folder, or organization that you will scope
your query to:
Cloud Asset Viewer ( roles/cloudasset.viewer )
To analyze policies with custom IAM roles :
Role Viewer ( roles/iam.roleViewer )
To use the Google Cloud CLI to analyze policies:
Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer )
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to analyze an allow policy. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to analyze an allow policy:
cloudasset.assets.analyzeIamPolicy
cloudasset.assets.searchAllResources
cloudasset.assets.searchAllIamPolicies
To analyze policies with custom IAM roles:
iam.roles.get
To use the Google Cloud CLI to analyze policies:
serviceusage.services.use
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Required Google Workspace permissions
If you want to expand groups in query results to see if a principal
has certain roles or permissions as a result of their membership in a
Google Workspace group, you need the groups.read Google Workspace permission.
This permission is contained in the Groups Reader Admin role, and in more
powerful roles such as the Groups Admin or Super Admin roles. To learn how to
grant these roles, see Assign specific admin roles .
Determine which principals can access a resource
You can use Policy Analyzer to check which principals have certain
roles or permissions on a specific resource in your project, folder, or
organization. To get this information, create a query that includes the resource
that you want to analyze access for and one or more roles or permissions to
check for.
Note: Policy Analyzer only supports IAM allow policies . Results do
not account for other access control mechanisms, like IAM deny
policies. For more information, see Supported
policy types .
Console
In the Google Cloud console, go to the Policy analyzer page.
Go to the Policy analyzer page
In the Analyze policies section, find the pane labeled Custom query
and click Create custom query in that pane.
In the Select query scope field, select the project, folder, or
organization that you want to scope the query to. Policy Analyzer
will analyze access for that project, folder, or organization, as well as any
resources within that project, folder, or organization.
Choose the resource to check and the role or permission to check for:
In the Parameter 1 field, select Resource from the drop-down
menu.
In the Resource field, enter the full resource name of the resource
that you want to analyze access for. If you don't know the full resource
name, start typing the display name of the resource, then select the
resource from the list of resources provided.
Click add Add selector .
In the Parameter 2 field, select either Role or Permission .
In the Select a role or Select a permission field, select the
role or permission that you want to check for.
Optional: To check for additional roles and permissions, continue adding
Role and Permission selectors until all the roles and permissions
that you want to check for are listed.
Optional: Click Continue , then select any advanced options
that you want to enable for this query.
In the Custom query pane, click Analyze > Run query .
The report page shows the query parameters you entered, and a results table
of all principals with the specified roles or permissions on the specified
resource.
Policy analysis queries in the Google Cloud console run for up to one minute. After
one minute, the Google Cloud console stops the query and displays all available results. If the
query didn't finish in that time, the Google Cloud console displays a banner indicating that the
results are incomplete. To get more results for these queries,
export the
results to BigQuery .
gcloud
Before using any of the command data below,
make the following replacements:
RESOURCE_TYPE : The type
of the resource that you want to scope your search to. Only IAM allow policies
attached to this resource and to its descendants will be analyzed. Use the value
project , folder , or organization .
RESOURCE_ID : The ID of the
Google Cloud project, folder, or organization that you want to scope your search to. Only
IAM allow policies attached to this resource and to its descendants will be analyzed.
Project
IDs are alphanumeric strings, like my-project . Folder and organization IDs are numeric,
like 123456789012 .
FULL_RESOURCE_NAME :
The full resource name of the resource that you want to analyze access for. For a list of full
resource name formats, see Resource name
format .
PERMISSIONS : A
comma-separated list of the permissions that you want to check for—for example,
compute.instances.get,compute.instances.start . If you list multiple
permissions, Policy Analyzer will check for any of the permissions listed.
Note: If you want more detailed query results, you can
enable advanced options .
Execute the
gcloud asset analyze-iam-policy
command:
Linux, macOS, or Cloud Shell
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud asset analyze-iam-policy -- RESOURCE_TYPE = RESOURCE_ID \
--full-resource-name = FULL_RESOURCE_NAME \
--permissions = ' PERMISSIONS '
Windows (PowerShell)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud asset analyze-iam-policy -- RESOURCE_TYPE = RESOURCE_ID `
--full-resource-name = FULL_RESOURCE_NAME `
--permissions = ' PERMISSIONS '
Windows (cmd.exe)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
Note:
If this command uses ' for quoting content,
replace these single quotes with double quotes.
If quoting is nested, use \" to escape the
inner quotes.
gcloud asset analyze-iam-policy -- RESOURCE_TYPE = RESOURCE_ID ^
--full-resource-name = FULL_RESOURCE_NAME ^
--permissions = ' PERMISSIONS '
You receive a YAML response with analysis results. Each analysis result lists a set of
accesses, identities, and resources that are relevant to your query, followed by the
related IAM role binding. If the role binding is conditional, the analysis result
also includes the result of the condition evaluation. If the condition couldn't be evaluated, the
result is CONDITIONAL .
The principals that have any of the specified permissions on the specified resource are listed in
the identities fields in the response. The following example shows a single analysis
result with the identities field highlighted.
...
---
ACLs:
- accesses:
- permission: compute.instances.get
- permission: compute.instances.start
identities:
- name: user:my-user@example.com
resources:
- fullResourceName: //cloudresourcemanager.googleapis.com/projects/my-project
policy:
attachedResource: //cloudresourcemanager.googleapis.com/projects/my-project
binding:
members:
- user: my-user@example.com
role: roles/compute.admin
---
...
If the request times out before the query finishes, you get a
DEADLINE_EXCEEDED error. To get more results for these queries, write
the results to either BigQuery or Cloud Storage using the long-running version
of analyze-iam-policy . For instructions, see
Write policy analysis to
BigQuery or
Write policy analysis to
Cloud Storage .
REST
To determine which principals have certain permissions on a
resource, use the Cloud Asset Inventory API's
analyzeIamPolicy
method.
Before using any of the request data,
make the following replacements:
RESOURCE_TYPE : The type
of the resource that you want to scope your search to. Only IAM allow policies
attached to this resource and to its descendants will be analyzed. Use the value
projects , folders , or organizations .
RESOURCE_ID : The ID of the
Google Cloud project, folder, or organization that you want to scope your search to. Only
IAM allow policies attached to this resource and to its descendants will be analyzed.
Project
IDs are alphanumeric strings, like my-project . Folder and organization IDs are numeric,
like 123456789012 .
FULL_RESOURCE_NAME :
The full resource name of the resource that you want to analyze access for. For a list of full
resource name formats, see Resource name
format .
PERMISSION_1 ,
PERMISSION_2 ... PERMISSION_N : The permissions that
you want to check for—for example, compute.instances.get . If you list multiple
permissions, Policy Analyzer will check for any of the permissions listed.
Note: If you want more detailed query results, you can
enable advanced options .
HTTP method and URL:
POST https://cloudasset.googleapis.com/v1/ RESOURCE_TYPE / RESOURCE_ID :analyzeIamPolicy
Request JSON body:
{
"analysisQuery": {
"resourceSelector": {
"fullResourceName": " FULL_RESOURCE_NAME "
},
"accessSelector": {
"permissions": [
" PERMISSION_1 ",
" PERMISSION_2 ",
" PERMISSION_N "
]
}
}
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-HTTP-Method-Override: GET" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://cloudasset.googleapis.com/v1/ RESOURCE_TYPE / RESOURCE_ID :analyzeIamPolicy"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "X-HTTP-Method-Override" = "GET" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://cloudasset.googleapis.com/v1/ RESOURCE_TYPE / RESOURCE_ID :analyzeIamPolicy" | Select-Object -Expand Content
APIs Explorer (browser)
Copy the request body and open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Paste the request body in this tool, complete any other required fields, and click Execute .
You receive a JSON response with analysis results. Each analysis result describes a relevant
IAM role binding, then lists the resource, accesses, and principals in
that binding. If the role binding is conditional, the analysis result also includes the result
of the condition evaluation. If the condition couldn't be evaluated, the result is listed as
CONDITIONAL .
The principals that have any of the specified permissions on the specified resource are listed in
the identities fields in the response. The following example shows a single analysis
result with the identities field highlighted.
...
{
"attachedResourceFullName": "//cloudresourcemanager.googleapis.com/projects/my-project",
"iamBinding": {
"role": "roles/compute.admin",
"members": [
"user:my-user@example.com"
]
},
"accessControlLists": [
{
"resources": [
{
"fullResourceName": "//cloudresourcemanager.googleapis.com/projects/my-project"
}
],
"accesses": [
{
"permission": "compute.instances.get"
},
{
"permission": "compute.instances.start"
}
]
}
],
"identityList": {
"identities": [
{
"name": "user:my-user@example.com"
}
]
},
"fullyExplored": true
},
...
If the request times out before the query finishes, you get a
DEADLINE_EXCEEDED error. To get more results for these queries, write
the results to either BigQuery or Cloud Storage using the long-running version
of analyzeIamPolicy . For instructions, see
Write policy analysis to
BigQuery or
Write policy analysis to
Cloud Storage .
Determine which principals have certain roles or permissions
You can use Policy Analyzer to check which principals have specific
roles or permissions on any Google Cloud resource in your organization. To
get this information, create a query that includes one or more roles or
permissions to check for, but does not specify a resource.
Note: Policy Analyzer only supports IAM allow policies . Results do
not account for other access control mechanisms, like IAM deny
policies. For more information, see Supported
policy types .
Console
In the Google Cloud console, go to the Policy analyzer page.
Go to the Policy analyzer page
In the Analyze policies section, find the pane labeled Custom query
and click Create custom query in that pane.
In the Select query scope field, select the project, folder, or
organization that you want to scope the query to. Policy Analyzer
will analyze access for that project, folder, or organization, as well as any
resources within that project, folder, or organization.
In the Parameter 1 field, select either Role or Permission .
In the Select a role or Select a permission field, select the role
or permission that you want to check for.
Optional: To check for additional roles and permissions, do the following:
Click add Add selector .
In the Parameter 2 field, select either Role or Permission .
In the Select a role or Select a permission field, select the
role or permission that you want to check for.
Continue adding Role and Permission selectors until all the roles
and permissions that you want to check for are listed.
Optional: Click Continue , then select any advanced options
that you want to enable for this query.
In the Custom query pane, click Analyze > Run query .
The report page shows the query parameters you entered, and a results table
of all principals with the specified roles or permissions on any in-scope
resource.
Policy analysis queries in the Google Cloud console run for up to one minute. After
one minute, the Google Cloud console stops the query and displays all available results. If the
query didn't finish in that time, the Google Cloud console displays a banner indicating that the
results are incomplete. To get more results for these queries,
export the
results to BigQuery .
gcloud
Before using any of the command data below,
make the following replacements:
RESOURCE_TYPE : The type
of the resource that you want to scope your search to. Only IAM allow policies
attached to this resource and to its descendants will be analyzed. Use the value
project , folder , or organization .
RESOURCE_ID : The ID of the
Google Cloud project, folder, or organization that you want to scope your search to. Only
IAM allow policies attached to this resource and to its descendants will be analyzed.
Project
IDs are alphanumeric strings, like my-project . Folder and organization IDs are numeric,
like 123456789012 .
ROLES : A comma-separated list
of the roles that you want to check for—for example,
roles/compute.admin,roles/compute.imageUser . If you list multiple roles, Policy
Analyzer will check for any of the roles listed.
PERMISSIONS : A
comma-separated list of the permissions that you want to check for—for example,
compute.instances.get,compute.instances.start . If you list multiple
permissions, Policy Analyzer will check for any of the permissions listed.
Note: If you want more detailed query results, you can
enable advanced options .
Execute the
gcloud asset analyze-iam-policy
command:
Linux, macOS, or Cloud Shell
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud asset analyze-iam-policy -- RESOURCE_TYPE = RESOURCE_ID \
--roles = ' ROLES ' \
--permissions = ' PERMISSIONS '
Windows (PowerShell)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud asset analyze-iam-policy -- RESOURCE_TYPE = RESOURCE_ID `
--roles = ' ROLES ' `
--permissions = ' PERMISSIONS '
Windows (cmd.exe)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
Note:
If this command uses ' for quoting content,
replace these single quotes with double quotes.
If quoting is nested, use \" to escape the
inner quotes.
gcloud asset analyze-iam-policy -- RESOURCE_TYPE = RESOURCE_ID ^
--roles = ' ROLES ' ^
--permissions = ' PERMISSIONS '
You receive a JSON response with analysis results. Each analysis result describes a relevant
IAM role binding, then lists the resource, accesses, and principals in
that binding. If the role binding is conditional, the analysis result also includes the result
of the condition evaluation. If the condition couldn't be evaluated, the result is listed as
CONDITIONAL .
The principals that have any of the specified roles or permissions are listed in the
identities fields in the response. The following example shows a single analysis
result with the identities field highlighted.
...
---
ACLs:
- accesses:
- permission: compute.instances.get
- permission: compute.instances.start
- role: roles/compute.admin
identities:
- name: user:my-user@example.com
resources:
- fullResourceName: //cloudresourcemanager.googleapis.com/projects/my-project
policy:
attachedResource: //cloudresourcemanager.googleapis.com/projects/my-project
binding:
members:
- user: my-user@example.com
role: roles/compute.admin
---
...
If the request times out before the query finishes, you get a
DEADLINE_EXCEEDED error. To get more results for these queries, write
the results to either BigQuery or Cloud Storage using the long-running version
of analyze-iam-policy . For instructions, see
Write policy analysis to
BigQuery or
Write policy analysis to
Cloud Storage .
REST
To determine which principals have certain roles or permissions, use the Cloud Asset Inventory API's
analyzeIamPolicy
method.
Before using any of the request data,
make the following replacements:
RESOURCE_TYPE : The type
of the resource that you want to scope your search to. Only IAM allow policies
attached to this resource and to its descendants will be analyzed. Use the value
projects , folders , or organizations .
RESOURCE_ID : The ID of the
Google Cloud project, folder, or organization that you want to scope your search to. Only
IAM allow policies attached to this resource and to its descendants will be analyzed.
Project
IDs are alphanumeric strings, like my-project . Folder and organization IDs are numeric,
like 123456789012 .
ROLE_1 ,
ROLE_2 ... ROLE_N : The roles that
you want to check for—for example, roles/compute.admin . If you list multiple
roles, Policy Analyzer will check for any of the roles listed.
PERMISSION_1 ,
PERMISSION_2 ... PERMISSION_N : The permissions that
you want to check for—for example, compute.instances.get . If you list multiple
permissions, Policy Analyzer will check for any of the permissions listed.
Note: If you want more detailed query results, you can
enable advanced options .
HTTP method and URL:
POST https://cloudasset.googleapis.com/v1/ RESOURCE_TYPE / RESOURCE_ID :analyzeIamPolicy
Request JSON body:
{
"analysisQuery": {
"accessSelector": {
"roles": [
" ROLE_1 ",
" ROLE_2 ",
" ROLE_N "
],
"permissions": [
" PERMISSION_1 ",
" PERMISSION_2 ",
" PERMISSION_N "
]
}
}
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-HTTP-Method-Override: GET" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://cloudasset.googleapis.com/v1/ RESOURCE_TYPE / RESOURCE_ID :analyzeIamPolicy"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "X-HTTP-Method-Override" = "GET" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://cloudasset.googleapis.com/v1/ RESOURCE_TYPE / RESOURCE_ID :analyzeIamPolicy" | Select-Object -Expand Content
APIs Explorer (browser)
Copy the request body and open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Paste the request body in this tool, complete any other required fields, and click Execute .
You receive a JSON response with analysis results. Each analysis result describes a relevant
IAM role binding, then lists the resource, accesses, and principals in
that binding. If the role binding is conditional, the analysis result also includes the result
of the condition evaluation. If the condition couldn't be evaluated, the result is listed as
CONDITIONAL .
The principals that have any of the specified roles or permissions are listed in the
identities fields in the response. The following example shows a single analysis
result with the identities field highlighted.
...
{
"attachedResourceFullName": "//cloudresourcemanager.googleapis.com/projects/my-project",
"iamBinding": {
"role": "roles/compute.admin",
"members": [
"user:my-user@example.com"
]
},
"accessControlLists": [
{
"resources": [
{
"fullResourceName": "//cloudresourcemanager.googleapis.com/projects/my-project"
}
],
"accesses": [
{
"permission": "compute.instances.get"
},
{
"role": "roles/compute.admin"
}
]
}
],
"identityList": {
"identities": [
{
"name": "user:my-user@example.com"
}
]
},
"fullyExplored": true
},
...
If the request times out before the query finishes, you get a
DEADLINE_EXCEEDED error. To get more results for these queries, write
the results to either BigQuery or Cloud Storage using the long-running version
of analyzeIamPolicy . For instructions, see
Write policy analysis to
BigQuery or
Write policy analysis to
Cloud Storage .
Determine what access a principal has on a resource
You can use Policy Analyzer to check what roles or permissions a principal
has on a resource in your organization. To get this information, create a query
that includes the principal whose access you want to analyze and the resource
that you want to analyze access for.
Note: Policy Analyzer only supports IAM allow policies . Results do
not account for other access control mechanisms, like IAM deny
policies. For more information, see Supported
policy types .
Console
In the Google Cloud console, go to the Policy analyzer page.
Go to the Policy analyzer page
In the Analyze policies section, find the pane labeled Custom query
and click Create custom query in that pane.
In the Select query scope field, select the project, folder, or
organization that you want to scope the query to. Policy Analyzer
will analyze access for that project, folder, or organization, as well as any
resources within that project, folder, or organization.
Choose the resource and principal to check:
In the Parameter 1 field, select Resource from the drop-down
menu.
In the Resource field, enter the full resource name of the resource
that you want to analyze access for. If you don't know the full resource
name, start typing the display name of the resource, then select the
resource from the list of resources provided.
Click add Add selector .
In the Parameter 2 field, select Principal from the drop-down
menu.
In the Principal field, start typing the name of a user, service
account, or group. Then, select the user, service account, or group whose
access you want to analyze from the list of principals provided.
Optional: Click Continue , then select any advanced options
that you want to enable for this query.
In the Custom query pane, click Analyze > Run query .
The report page shows the query parameters you entered, and a results table
of all roles that the specified principal has on the specified resource.
Policy analysis queries in the Google Cloud console run for up to one minute. After
one minute, the Google Cloud console stops the query and displays all available results. If the
query didn't finish in that time, the Google Cloud console displays a banner indicating that the
results are incomplete. To get more results for these queries,
export the
results to BigQuery .
gcloud
Before using any of the command data below,
make the following replacements:
RESOURCE_TYPE : The type
of the resource that you want to scope your search to. Only IAM allow policies
attached to this resource and to its descendants will be analyzed. Use the value
project , folder , or organization .
RESOURCE_ID : The ID of the
Google Cloud project, folder, or organization that you want to scope your search to. Only
IAM allow policies attached to this resource and to its descendants will be analyzed.
Project
IDs are alphanumeric strings, like my-project . Folder and organization IDs are numeric,
like 123456789012 .
FULL_RESOURCE_NAME :
The full resource name of the resource that you want to analyze access for. For a list of full
resource name formats, see Resource name
format .
PRINCIPAL : The principal whose
access you want to analyze, in the form
PRINCIPAL_TYPE : ID —for example,
user:my-user@example.com . For a full list of the principal types, see
Principal identifiers .
Note: If you want more detailed query results, you can
enable advanced options .
Execute the
gcloud asset analyze-iam-policy
command:
Linux, macOS, or Cloud Shell
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud asset analyze-iam-policy -- RESOURCE_TYPE = RESOURCE_ID \
--full-resource-name = FULL_RESOURCE_NAME \
--identity = PRINCIPAL
Windows (PowerShell)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud asset analyze-iam-policy -- RESOURCE_TYPE = RESOURCE_ID `
--full-resource-name = FULL_RESOURCE_NAME `
--identity = PRINCIPAL
Windows (cmd.exe)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud asset analyze-iam-policy -- RESOURCE_TYPE = RESOURCE_ID ^
--full-resource-name = FULL_RESOURCE_NAME ^
--identity = PRINCIPAL
You receive a YAML response with analysis results. Each analysis result lists a set of
accesses, identities, and resources that are relevant to your query, followed by the
related IAM role binding. If the role binding is conditional, the analysis result
also includes the result of the condition evaluation. If the condition couldn't be evaluated, the
result is CONDITIONAL .
The roles that the principal has on the specified resource are listed in the accesses
fields in the response. The following example shows a single analysis
result with the accesses field highlighted.
...
---
ACLs:
- accesses:
- roles/iam.serviceAccountUser
identities:
- name: user:my-user@example.com
resources:
- fullResourceName: //cloudresourcemanager.googleapis.com/projects/my-project
policy:
attachedResource: //cloudresourcemanager.googleapis.com/projects/my-project
binding:
members:
- user: my-user@example.com
role: roles/iam.serviceAccountUser
---
...
If the request times out before the query finishes, you get a
DEADLINE_EXCEEDED error. To get more results for these queries, write
the results to either BigQuery or Cloud Storage using the long-running version
of analyze-iam-policy . For instructions, see
Write policy analysis to
BigQuery or
Write policy analysis to
Cloud Storage .
REST
To determine what access a principal has on a resource, use the Cloud Asset Inventory API's
analyzeIamPolicy
method.
Before using any of the request data,
make the following replacements:
RESOURCE_TYPE : The type
of the resource that you want to scope your search to. Only IAM allow policies
attached to this resource and to its descendants will be analyzed. Use the value
projects , folders , or organizations .
RESOURCE_ID : The ID of the
Google Cloud project, folder, or organization that you want to scope your search to. Only
IAM allow policies attached to this resource and to its descendants will be analyzed.
Project
IDs are alphanumeric strings, like my-project . Folder and organization IDs are numeric,
like 123456789012 .
FULL_RESOURCE_NAME :
The full resource name of the resource that you want to analyze access for. For a list of full
resource name formats, see Resource name
format .
PRINCIPAL : The principal whose
access you want to analyze, in the form
PRINCIPAL_TYPE : ID —for example,
user:my-user@example.com . For a full list of the principal types, see
Principal identifiers .
Note: If you want more detailed query results, you can
enable advanced options .
HTTP method and URL:
POST https://cloudasset.googleapis.com/v1/ RESOURCE_TYPE / RESOURCE_ID :analyzeIamPolicy
Request JSON body:
{
"analysisQuery": {
"resourceSelector": {
"fullResourceName": " FULL_RESOURCE_NAME "
},
"identitySelector": {
"identity": " PRINCIPAL "
}
}
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-HTTP-Method-Override: GET" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://cloudasset.googleapis.com/v1/ RESOURCE_TYPE / RESOURCE_ID :analyzeIamPolicy"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "X-HTTP-Method-Override" = "GET" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://cloudasset.googleapis.com/v1/ RESOURCE_TYPE / RESOURCE_ID :analyzeIamPolicy" | Select-Object -Expand Content
APIs Explorer (browser)
Copy the request body and open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Paste the request body in this tool, complete any other required fields, and click Execute .
You receive a JSON response with analysis results. Each analysis result describes a relevant
IAM role binding, then lists the resource, accesses, and principals in
that binding. If the role binding is conditional, the analysis result also includes the result
of the condition evaluation. If the condition couldn't be evaluated, the result is listed as
CONDITIONAL .
The roles that the principal has on the specified resource are listed in the accesses
fields in the response. The following example shows a single analysis
result with the accesses field highlighted.
...
{
"attachedResourceFullName": "//cloudresourcemanager.googleapis.com/projects/my-project",
"iamBinding": {
"role": "roles/iam.serviceAccountUser",
"members": [
"user:my-user@example.com"
]
},
"accessControlLists": [
{
"resources": [
{
"fullResourceName": "//cloudresourcemanager.googleapis.com/projects/my-project"
}
],
"accesses": [
{
"roles": "iam.serviceAccountUser"
}
]
}
],
"identityList": {
"identities": [
{
"name": "user:my-user@example.com"
}
]
},
"fullyExplored": true
},
...
If the request times out before the query finishes, you get a
DEADLINE_EXCEEDED error. To get more results for these queries, write
the results to either BigQuery or Cloud Storage using the long-running version
of analyzeIamPolicy . For instructions, see
Write policy analysis to
BigQuery or
Write policy analysis to
Cloud Storage .
Determine which resources a principal can access
You can use Policy Analyzer to check which resources within your
organization a principal has a certain roles or permissions on. To get this
information, create a query that includes the principal whose access you want to
analyze and one or more permissions or roles that you want to check for.
Note: Policy Analyzer only supports IAM allow policies . Results do
not account for other access control mechanisms, like IAM deny
policies. For more information, see Supported
policy types .
Console
In the Google Cloud console, go to the Policy analyzer page.
Go to the Policy analyzer page
In the Analyze policies section, find the pane labeled Custom query
and click Create custom query in that pane.
In the Select query scope field, select the project, folder, or
organization that you want to scope the query to. Policy Analyzer
will analyze access for that project, folder, or organization, as well as any
resources within that project, folder, or organization.
Choose the principal to check and the role or permission to check for:
In the Parameter 1 field, select Principal from the drop-down
menu.
In the Principal field, start typing the name of a user, service
account, or group. Then, select the user, service account, or group whose
access you want to analyze from the list of principals provided.
Click add Add selector .
In the Parameter 2 field, select either Role or Permission .
In the Select a role or Select a permission field, select the
role or permission that you want to check for.
Optional: To check for additional roles and permissions, continue adding
Role and Permission selectors until all the roles and permissions
that you want to check for
are listed.
Optional: Click Continue , then select any advanced options
that you want to enable for this query.
In the Custom query pane, click Analyze > Run query .
The report page shows the query parameters you entered, and a results table
of all the resources on which the specified principal has the specified roles
or permissions.
Policy analysis queries in the Google Cloud console run for up to one minute. After
one minute, the Google Cloud console stops the query and displays all available results. If the
query didn't finish in that time, the Google Cloud console displays a banner indicating that the
results are incomplete. To get more results for these queries,
export the
results to BigQuery .
gcloud
Before using any of the command data below,
make the following replacements:
RESOURCE_TYPE : The type
of the resource that you want to scope your search to. Only IAM allow policies
attached to this resource and to its descendants will be analyzed. Use the value
project , folder , or organization .
RESOURCE_ID : The ID of the
Google Cloud project, folder, or organization that you want to scope your search to. Only
IAM allow policies attached to this resource and to its descendants will be analyzed.
Project
IDs are alphanumeric strings, like my-project . Folder and organization IDs are numeric,
like 123456789012 .
PRINCIPAL : The principal whose
access you want to analyze, in the form
PRINCIPAL_TYPE : ID —for example,
user:my-user@example.com . For a full list of the principal types, see
Principal identifiers .
PERMISSIONS : A
comma-separated list of the permissions that you want to check for—for example,
compute.instances.get,compute.instances.start . If you list multiple
permissions, Policy Analyzer will check for any of the permissions listed.
Note: If you want more detailed query results, you can
enable advanced options .
Execute the
gcloud asset analyze-iam-policy
command:
Linux, macOS, or Cloud Shell
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud asset analyze-iam-policy -- RESOURCE_TYPE = RESOURCE_ID \
--identity = PRINCIPAL \
--permissions = ' PERMISSIONS '
Windows (PowerShell)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud asset analyze-iam-policy -- RESOURCE_TYPE = RESOURCE_ID `
--identity = PRINCIPAL `
--permissions = ' PERMISSIONS '
Windows (cmd.exe)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
Note:
If this command uses ' for quoting content,
replace these single quotes with double quotes.
If quoting is nested, use \" to escape the
inner quotes.
gcloud asset analyze-iam-policy -- RESOURCE_TYPE = RESOURCE_ID ^
--identity = PRINCIPAL ^
--permissions = ' PERMISSIONS '
You receive a YAML response with analysis results. Each analysis result lists a set of
accesses, identities, and resources that are relevant to your query, followed by the
related IAM role binding. If the role binding is conditional, the analysis result
also includes the result of the condition evaluation. If the condition couldn't be evaluated, the
result is CONDITIONAL .
The resources on which the specified principal has any of the specified permissions are listed in
the resources fields in the response. The following example shows a single analysis
result with the resources field highlighted.
...
---
ACLs:
- accesses:
- permission: compute.instances.get
- permission: compute.instances.start
identities:
- name: user:my-user@example.com
resources:
- fullResourceName: //compute.googleapis.com/projects/my-project/global/images/my-image
policy:
attachedResource: //compute.googleapis.com/projects/my-project/global/images/my-image
binding:
members:
- user: my-user@example.com
role: roles/compute.admin
---
...
If the request times out before the query finishes, you get a
DEADLINE_EXCEEDED error. To get more results for these queries, write
the results to either BigQuery or Cloud Storage using the long-running version
of analyze-iam-policy . For instructions, see
Write policy analysis to
BigQuery or
Write policy analysis to
Cloud Storage .
REST
To determine which resources a principal can access, use the Cloud Asset Inventory API's
analyzeIamPolicy
method.
Before using any of the request data,
make the following replacements:
RESOURCE_TYPE : The type
of the resource that you want to scope your search to. Only IAM allow policies
attached to this resource and to its descendants will be analyzed. Use the value
projects , folders , or organizations .
RESOURCE_ID : The ID of the
Google Cloud project, folder, or organization that you want to scope your search to. Only
IAM allow policies attached to this resource and to its descendants will be analyzed.
Project
IDs are alphanumeric strings, like my-project . Folder and organization IDs are numeric,
like 123456789012 .
PRINCIPAL : The principal whose
access you want to analyze, in the form
PRINCIPAL_TYPE : ID —for example,
user:my-user@example.com . For a full list of the principal types, see
Principal identifiers .
PERMISSION_1 ,
PERMISSION_2 ... PERMISSION_N : The permissions that
you want to check for—for example, compute.instances.get . If you list multiple
permissions, Policy Analyzer will check for any of the permissions listed.
Note: If you want more detailed query results, you can
enable advanced options .
HTTP method and URL:
POST https://cloudasset.googleapis.com/v1/ RESOURCE_TYPE / RESOURCE_ID :analyzeIamPolicy
Request JSON body:
{
"analysisQuery": {
"identitySelector": {
"identity": " PRINCIPAL "
},
"accessSelector": {
"permissions": [
" PERMISSION_1 ",
" PERMISSION_2 ",
" PERMISSION_N "
]
}
}
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-HTTP-Method-Override: GET" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://cloudasset.googleapis.com/v1/ RESOURCE_TYPE / RESOURCE_ID :analyzeIamPolicy"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "X-HTTP-Method-Override" = "GET" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://cloudasset.googleapis.com/v1/ RESOURCE_TYPE / RESOURCE_ID :analyzeIamPolicy" | Select-Object -Expand Content
APIs Explorer (browser)
Copy the request body and open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Paste the request body in this tool, complete any other required fields, and click Execute .
You receive a JSON response with analysis results. Each analysis result describes a relevant
IAM role binding, then lists the resource, accesses, and principals in
that binding. If the role binding is conditional, the analysis result also includes the result
of the condition evaluation. If the condition couldn't be evaluated, the result is listed as
CONDITIONAL .
The resources on which the specified principal has any of the specified permissions are listed in
the resources fields in the response. The following example shows a single analysis
result with the resources field highlighted.
...
{
"attachedResourceFullName": "//compute.googleapis.com/projects/my-project/global/images/my-image",
"iamBinding": {
"role": "roles/compute.admin",
"members": [
"user:my-user@example.com"
]
},
"accessControlLists": [
{
"resources": [
{
"fullResourceName": "//compute.googleapis.com/projects/my-project/global/images/my-image"
}
],
"accesses": [
{
"permission": "compute.instances.get"
},
{
"permission": "compute.instances.start"
}
]
}
],
"identityList": {
"identities": [
{
"name": "user:my-user@example.com"
}
]
},
"fullyExplored": true
},
...
If the request times out before the query finishes, you get a
DEADLINE_EXCEEDED error. To get more results for these queries, write
the results to either BigQuery or Cloud Storage using the long-running version
of analyzeIamPolicy . For instructions, see
Write policy analysis to
BigQuery or
Write policy analysis to
Cloud Storage .
Determine access at a specific time
If given enough context, Policy Analyzer can analyze IAM
conditional role bindings that only grant access at specific
times. These conditions are called date/time conditions .
For Policy Analyzer to accurately analyze role bindings with date/time
conditions, you need to define the access time in the request.
Policy Analyzer can also analyze resource
conditions with no additional user input. For
more information about how Policy Analyzer works with conditions, see
Conditional access .
Note: Policy Analyzer only supports IAM allow policies . Results do
not account for other access control mechanisms, like IAM deny
policies. For more information, see Supported
policy types .
gcloud
Before using any of the command data below,
make the following replacements:
RESOURCE_TYPE : The type
of the resource that you want to scope your search to. Only IAM allow policies
attached to this resource and to its descendants will be analyzed. Use the value
project , folder , or organization .
RESOURCE_ID : The ID of the
Google Cloud project, folder, or organization that you want to scope your search to. Only
IAM allow policies attached to this resource and to its descendants will be analyzed.
Project
IDs are alphanumeric strings, like my-project . Folder and organization IDs are numeric,
like 123456789012 .
PERMISSIONS :
Optional. A comma-separated list of the permissions that you want to check for—for example,
compute.instances.get,compute.instances.start . If you list multiple
permissions, Policy Analyzer will check for any of the permissions listed.
FULL_RESOURCE_NAME : Optional. The full resource name of the resource that
you want to analyze access for. For a list of full resource name formats, see
Resource name format .
PERMISSIONS :
Optional. A comma-separated list of the permissions that you want to check for—for example,
compute.instances.get,compute.instances.start . If you list multiple
permissions, Policy Analyzer will check for any of the permissions listed.
ACCESS_TIME : The time that you want
to check. This time must be in the future. Use a timestamp in
RFC 3339 format—for
example, 2099-02-01T00:00:00Z .
Note: If you want more detailed query results, you can
enable advanced options .
Execute the
gcloud asset analyze-iam-policy
command:
Linux, macOS, or Cloud Shell
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud asset analyze-iam-policy -- RESOURCE_TYPE = RESOURCE_ID \
--identity = PRINCIPAL \
--full-resource-name = FULL_RESOURCE_NAME \
--permissions = ' PERMISSIONS ' \
--access-time = ACCESS_TIME
Windows (PowerShell)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud asset analyze-iam-policy -- RESOURCE_TYPE = RESOURCE_ID `
--identity = PRINCIPAL `
--full-resource-name = FULL_RESOURCE_NAME `
--permissions = ' PERMISSIONS ' `
--access-time = ACCESS_TIME
Windows (cmd.exe)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
Note:
If this command uses ' for quoting content,
replace these single quotes with double quotes.
If quoting is nested, use \" to escape the
inner quotes.
gcloud asset analyze-iam-policy -- RESOURCE_TYPE = RESOURCE_ID ^
--identity = PRINCIPAL ^
--full-resource-name = FULL_RESOURCE_NAME ^
--permissions = ' PERMISSIONS ' ^
--access-time = ACCESS_TIME
You receive a YAML response with analysis results. Each analysis result lists a set of
accesses, identities, and resources that are relevant to your query, followed by the
related IAM role binding. If the role binding is conditional, the analysis result
also includes the result of the condition evaluation. If the condition couldn't be evaluated, the
result is CONDITIONAL .
When you include the access time in the request, Policy Analyzer can evaluate date/time
conditions. If the condition evaluates to false, that role is not included in the response. If the
condition evaluates to true, the result of the condition evaluation is listed as
TRUE .
...
---
ACLs:
- accesses:
- permission: compute.instances.get
- permission: compute.instances.start
conditionEvaluationValue: 'TRUE'
identities:
- name: user:my-user@example.com
resources:
- fullResourceName: //cloudresourcemanager.googleapis.com/projects/my-project
policy:
attachedResource: //cloudresourcemanager.googleapis.com/projects/my-project
binding:
condition:
expression: request.time.getHours("America/Los_Angeles") >= 5
title: No access before 5am PST
members:
- user: my-user@example.com
role: roles/compute.admin
---
...
If the request times out before the query finishes, you get a
DEADLINE_EXCEEDED error. To get more results for these queries, write
the results to either BigQuery or Cloud Storage using the long-running version
of analyze-iam-policy . For instructions, see
Write policy analysis to
BigQuery or
Write policy analysis to
Cloud Storage .
REST
To determine which principals will have certain permissions on a resource at
a specific time, use the Cloud Asset Inventory API's
analyzeIamPolicy
method.
Before using any of the request data,
make the following replacements:
RESOURCE_TYPE : The type
of the resource that you want to scope your search to. Only IAM allow policies
attached to this resource and to its descendants will be analyzed. Use the value
projects , folders , or organizations .
RESOURCE_ID : The ID of the
Google Cloud project, folder, or organization that you want to scope your search to. Only
IAM allow policies attached to this resource and to its descendants will be analyzed.
Project
IDs are alphanumeric strings, like my-project . Folder and organization IDs are numeric,
like 123456789012 .
PERMISSION_1 ,
PERMISSION_2 ... PERMISSION_N : Optional. The
permissions that you want to check for—for example, compute.instances.get . If you
list multiple permissions, Policy Analyzer will check for any of the permissions listed.
FULL_RESOURCE_NAME : Optional. The full resource name of the resource that
you want to analyze access for. For a list of full resource name formats, see
Resource name format .
PERMISSION_1 ,
PERMISSION_2 ... PERMISSION_N : Optional. The
permissions that you want to check for—for example, compute.instances.get . If you
list multiple permissions, Policy Analyzer will check for any of the permissions listed.
ACCESS_TIME : The time that you want
to check. This time must be in the future. Use a timestamp in
RFC 3339 format—for
example, 2099-02-01T00:00:00Z .
Note: If you want more detailed query results, you can
enable advanced options .
HTTP method and URL:
POST https://cloudasset.googleapis.com/v1/ RESOURCE_TYPE / RESOURCE_ID :analyzeIamPolicy
Request JSON body:
{
"analysisQuery": {
"identitySelector": {
"identity": " PRINCIPAL "
},
"resourceSelector": {
"fullResourceName": " FULL_RESOURCE_NAME "
},
"accessSelector": {
"permissions": [
" PERMISSION_1 ",
" PERMISSION_2 ",
" PERMISSION_N "
]
},
"conditionContext": {
"accessTime": " ACCESS_TIME "
}
}
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "X-HTTP-Method-Override: GET" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://cloudasset.googleapis.com/v1/ RESOURCE_TYPE / RESOURCE_ID :analyzeIamPolicy"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json ,
and execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "X-HTTP-Method-Override" = "GET" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://cloudasset.googleapis.com/v1/ RESOURCE_TYPE / RESOURCE_ID :analyzeIamPolicy" | Select-Object -Expand Content
APIs Explorer (browser)
Copy the request body and open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Paste the request body in this tool, complete any other required fields, and click Execute .
You receive a JSON response with analysis results. Each analysis result describes a relevant
IAM role binding, then lists the resource, accesses, and principals in
that binding. If the role binding is conditional, the analysis result also includes the result
of the condition evaluation. If the condition couldn't be evaluated, the result is listed as
CONDITIONAL .
When you include the access time in the request, Policy Analyzer can evaluate date/time
conditions. If the condition evaluates to false, that role is not included in the response. If the
condition evaluates to true, the condition evaluation value in the analysis response is
TRUE .
...
{
"attachedResourceFullName": "//cloudresourcemanager.googleapis.com/projects/my-project",
"iamBinding": {
"role": "roles/compute.admin",
"members": [
"user:my-user@example.com"
],
"condition": {
"expression": "request.time.getHours(\"America/Los_Angeles\") \u003e= 5",
"title": "No access before 5am PST"
}
},
"accessControlLists": [
{
"resources": [
{
"fullResourceName": "//cloudresourcemanager.googleapis.com/projects/my-project"
}
],
"accesses": [
{
"permission": "compute.instances.get"
},
{
"permission": "compute.instances.start"
}
],
"conditionEvaluation": {
"evaluationValue": "TRUE"
}
}
],
"identityList": {
"identities": [
{
"name": "user:my-user@example.com"
}
]
},
"fullyExplored": true
},
...
If the request times out before the query finishes, you get a
DEADLINE_EXCEEDED error. To get more results for these queries, write
the results to either BigQuery or Cloud Storage using the long-running version
of analyzeIamPolicy . For instructions, see
Write policy analysis to
BigQuery or
Write policy analysis to
Cloud Storage .
Enable options
You can enable the following options to receive more detailed query results.
Console
Option
Description
List resources within resource(s) matching your query
If you enable this option, the query results list up to
1,000 relevant descendant
resources for any parent resources (projects, folders, and
organizations) in the query results.
List individual users inside groups
If you enable this option, any groups in the query results are expanded into
individual members. If you have sufficient group permissions, nested groups will
also be expanded. This expansion is capped at
1,000 members per group.
This option is only available if you don't specify a principal in your
query.
List permissions inside roles
If you enable this option, the query results list all permissions inside each
role in addition to the role itself.
This option is only available if you don't specify any permissions or
roles in your query.
gcloud
This section describes several common flags that you can add when you use the
gcloud CLI to analyze allow policies. For a full list of options, see
Optional flags .
Flag
Description
--analyze-service-account-impersonation
If this option is enabled, Policy Analyzer runs additional analysis
queries to determine who can impersonate the service accounts that
have the specified access to the specified resources. Policy Analyzer
runs one query for each service account in query results. These
queries analyze who has any of the following permissions on the
service account:
iam.serviceAccounts.actAs
iam.serviceAccounts.getAccessToken
iam.serviceAccounts.getOpenIdToken
iam.serviceAccounts.implicitDelegation
iam.serviceAccounts.signBlob
iam.serviceAccounts.signJwt
This is a very expensive operation, because it automatically executes
many queries. We highly recommend that you
export
to BigQuery or
export
to Cloud Storage using
analyze-iam-policy-longrunning instead of using
analyze-iam-policy .
--expand-groups
If you enable this option, any groups in the query results are expanded into
individual members. If you have sufficient group permissions, nested groups will
also be expanded. This expansion is capped at
1,000 members per group.
This option is only effective if you don't specify a principal in your
query.
--expand-resources
If you enable this option, the query results list up to
1,000 relevant descendant
resources for any parent resources (projects, folders, and
organizations) in the query results.
--expand-roles
If you enable this option, the query results list all permissions inside each
role in addition to the role itself.
This option is only available if you don't specify any permissions or
roles in your query.
--output-group-edges
If you enable this option, the query results output the relevant membership
relationships between groups.
--output-resource-edges
If you enable this option, the query results output the relevant parent/child
relationships between resources.
REST
To enable any options, first add an options field to your analysis
query. For example:
{
"analysisQuery" : {
"resourceSelector" : {
"fullResourceName" : "//cloudresourcemanager.googleapis.com/projects/my-project"
},
"accessSelector" : {
"permissions" : [
"iam.roles.get" ,
"iam.roles.list"
]
},
"options" : {
OPTIONS
}
}
}
Replace OPTIONS with the options that you want to
enable, in the form " OPTION ": true . The following table
describes the available options:
Option
Description
analyzeServiceAccountImpersonation
If this option is enabled, Policy Analyzer runs additional analysis
queries to determine who can impersonate the service accounts that
have the specified access to the specified resources. Policy Analyzer
runs one query for each service account in query results. These
queries analyze who has any of the following permissions on the
service account:
iam.serviceAccounts.actAs
iam.serviceAccounts.getAccessToken
iam.serviceAccounts.getOpenIdToken
iam.serviceAccounts.implicitDelegation
iam.serviceAccounts.signBlob
iam.serviceAccounts.signJwt
This is a very expensive operation, because it automatically executes
many queries. We highly recommend that you
export
to BigQuery or
export
to Cloud Storage using
AnalyzeIamPolicyLongrunning instead of using
AnalyzeIamPolicy .
expandGroups
If you enable this option, any groups in the query results are expanded into
individual members. If you have sufficient group permissions, nested groups will
also be expanded. This expansion is capped at
1,000 members per group.
This option is only effective if you don't specify a principal in your
query.
expandResources
If you enable this option, the query results list up to
1,000 relevant descendant
resources for any parent resources (projects, folders, and
organizations) in the query results.
expandRoles
If you enable this option, the query results list all permissions inside each
role in addition to the role itself.
This option is only available if you don't specify any permissions or
roles in your query.
outputGroupEdges
If you enable this option, the query results output the relevant membership
relationships between groups.
outputResourceEdges
If you enable this option, the query results output the relevant parent/child
relationships between resources.
What's next
Learn how to use
AnalyzeIamPolicyLongrunning to write
to BigQuery or write to
Cloud Storage .
See how you can use the REST API to save Policy Analysis
queries .
Explore the available access troubleshooting tools , which
you can use to figure out why a principal doesn't have a certain type of
access.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
