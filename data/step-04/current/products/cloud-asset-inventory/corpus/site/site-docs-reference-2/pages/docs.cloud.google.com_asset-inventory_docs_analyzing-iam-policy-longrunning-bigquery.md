---
title: "Write policy analysis to BigQuery \_|\_ Policy Intelligence \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy-longrunning-bigquery
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/asset-inventory/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/asset-inventory/docs/analyzing-iam-policy-longrunning-bigquery
  title: "Write policy analysis to BigQuery \_|\_ Policy Intelligence \_|\_ Google\
    \ Cloud Documentation"
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
Write policy analysis to BigQuery
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to analyze Identity and Access Management (IAM) policies
asynchronously and write results to BigQuery. The process is similar to
analyzing IAM policies except the
analysis result is written to BigQuery tables.
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
Required roles and permissions
The following roles and permissions are required to run a policy analysis and
export the results to BigQuery.
Required IAM roles
To get the permissions that
you need to analyze a policy and export the results to
BigQuery,
ask your administrator to grant you the
following IAM roles on the project, folder, or organization that you will scope
your query to:
BigQuery Data Editor ( roles/bigquery.dataEditor )
Cloud Asset Viewer ( roles/cloudasset.viewer )
To analyze policies with custom IAM roles :
Role Viewer ( roles/iam.roleViewer )
To use the Google Cloud CLI to analyze policies:
Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer )
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to analyze a policy and export the results to
BigQuery. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to analyze a policy and export the results to
BigQuery:
bigquery.datasets.create
bigquery.jobs.create
bigquery.tables.create
bigquery.tables.get
bigquery.tables.updateData
bigquery.tables.update
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
If you want to see if a principal has certain roles or permissions as a result
of their membership in a Google Workspace group, you need the groups.read
Google Workspace permission. This permission is contained in the Groups Reader
Admin role, and in more powerful roles such as the Groups Admin or Super Admin
roles. See Assign specific admin roles for more
information.
Analyze policies and export results
Console
In the Google Cloud console, go to the Policy Analyzer page.
Go to Policy Analyzer
In the Analyze policies section, find the query template you want to use,
then click Create query . If you want to create a custom query, click
Create custom query .
In the Select query scope field, select the project, folder, or
organization that you want to scope the query to. Policy Analyzer will
analyze access for that project, folder, or organization, as well as any
resources within that project, folder, or organization.
Ensure that your query parameters are set:
If you're using a query template, confirm the prefilled query parameters.
If you're creating a custom query, set the resources, principals, roles,
and permissions that you want to query for.
For more information about the types of queries you can create, see
Analyze IAM policies .
In the pane labeled with the name of the query,
click Analyze > Export result only . The Export
results pane opens.
In the Set export destination section, enter the following information:
Project : The project where your BigQuery dataset is
located.
Dataset : The BigQuery dataset that you want to export
results to.
Table : The prefix of the BigQuery tables to which the analysis results
will be written. If a table with the specified prefix doesn't exist,
BigQuery creates a new table.
Click Continue .
Optional: In the Configure additional settings section, select the
options you want:
Partitioning : Whether to partition the table. To learn more about
partitioned tables, see Introduction to partitioned
tables .
Write preference : Specifies the action that occurs if the destination
table or partition already exists. By default, if the table or partition
already exists, BigQuery appends the data to the table or
the latest partition.
Click Export .
Policy Analyzer runs your query and exports the results to the
specified table.
gcloud
The AnalyzeIamPolicyLongrunning method
allows you to issue an analysis request and get results in the specified
BigQuery destination.
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
DATASET : The BigQuery dataset
in the form projects/ PROJECT_ID /datasets/ DATASET_ID , where
PROJECT_ID is the alphanumeric ID of your Google Cloud project and
DATASET_ID is the ID of your dataset.
TABLE_PREFIX : The prefix of the
BigQuery tables to which the analysis results will be written. If a table with the
specified prefix doesn't exist, BigQuery creates a new table.
PARTITION_KEY : Optional. The partition key
for BigQuery partitioned table .
Policy Analyzer only supports REQUEST_TIME partition keys.
WRITE_DISPOSITION : Optional. Specifies
the action that occurs if the destination table or partition already exists. For a list of possible
values, see
writeDisposition .
By default, if the table or partition already exists, BigQuery appends the data to
the table or the latest partition.
Note: If you want more detailed query results, you can
enable advanced options .
Execute the
gcloud asset analyze-iam-policy-longrunning
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
gcloud asset analyze-iam-policy-longrunning -- RESOURCE_TYPE = RESOURCE_ID \
--full-resource-name = FULL_RESOURCE_NAME \
--identity = PRINCIPAL \
--permissions = ' PERMISSIONS ' \
--bigquery-dataset = DATASET \
--bigquery-table-prefix = TABLE_PREFIX \
--bigquery-partition-key = PARTITION_KEY \
--bigquery-write-disposition = WRITE_DISPOSITION
Windows (PowerShell)
Note:
Ensure you have initialized the Google Cloud CLI with authentication and a project
by running either
gcloud init ;
or
gcloud auth login
and
gcloud config set project .
gcloud asset analyze-iam-policy-longrunning -- RESOURCE_TYPE = RESOURCE_ID `
--full-resource-name = FULL_RESOURCE_NAME `
--identity = PRINCIPAL `
--permissions = ' PERMISSIONS ' `
--bigquery-dataset = DATASET `
--bigquery-table-prefix = TABLE_PREFIX `
--bigquery-partition-key = PARTITION_KEY `
--bigquery-write-disposition = WRITE_DISPOSITION
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
gcloud asset analyze-iam-policy-longrunning -- RESOURCE_TYPE = RESOURCE_ID ^
--full-resource-name = FULL_RESOURCE_NAME ^
--identity = PRINCIPAL ^
--permissions = ' PERMISSIONS ' ^
--bigquery-dataset = DATASET ^
--bigquery-table-prefix = TABLE_PREFIX ^
--bigquery-partition-key = PARTITION_KEY ^
--bigquery-write-disposition = WRITE_DISPOSITION
You should receive a response similar to the following:
Analyze IAM Policy in progress.
Use [gcloud asset operations describe projects/my-project/operations/AnalyzeIamPolicyLongrunning/1195028485971902504711950280359719028666] to check the status of the operation.
REST
The AnalyzeIamPolicyLongrunning method
allows you to issue an analysis request and get results in the specified
BigQuery destination.
To analyze an IAM allow policy and export the results to
BigQuery, use the Cloud Asset Inventory API's
analyzeIamPolicyLongrunning
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
FULL_RESOURCE_NAME : Optional. The full resource name of the resource that
you want to analyze access for. For a list of full resource name formats, see
Resource name format .
PRINCIPAL : Optional.
The principal whose access you want to analyze, in the form
PRINCIPAL_TYPE : ID —for example,
user:my-user@example.com . For a full list of the principal types, see
Principal identifiers .
PERMISSION_1 ,
PERMISSION_2 ... PERMISSION_N : Optional. The
permissions that you want to check for—for example, compute.instances.get . If you
list multiple permissions, Policy Analyzer will check for any of the permissions listed.
DATASET : The BigQuery dataset
in the form projects/ PROJECT_ID /datasets/ DATASET_ID , where
PROJECT_ID is the alphanumeric ID of your Google Cloud project and
DATASET_ID is the ID of your dataset.
TABLE_PREFIX : The prefix of the
BigQuery tables to which the analysis results will be written. If a table with the
specified prefix doesn't exist, BigQuery creates a new table.
PARTITION_KEY : Optional. The partition key
for BigQuery partitioned table .
Policy Analyzer only supports REQUEST_TIME partition keys.
WRITE_DISPOSITION : Optional. Specifies
the action that occurs if the destination table or partition already exists. For a list of possible
values, see
writeDisposition .
By default, if the table or partition already exists, BigQuery appends the data to
the table or the latest partition.
Note: If you want more detailed query results, you can
enable advanced options .
HTTP method and URL:
POST https://cloudasset.googleapis.com/v1/ RESOURCE_TYPE / RESOURCE_ID :analyzeIamPolicyLongrunning
Request JSON body:
{
"analysisQuery": {
"resourceSelector": {
"fullResourceName": " FULL_RESOURCE_NAME "
},
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
},
"outputConfig": {
"bigqueryDestination": {
"dataset": " DATASET ",
"tablePrefix": " TABLE_PREFIX ",
"partitionKey": " PARTITION_KEY ",
"writeDisposition": " WRITE_DISPOSITION "
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://cloudasset.googleapis.com/v1/ RESOURCE_TYPE / RESOURCE_ID :analyzeIamPolicyLongrunning"
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://cloudasset.googleapis.com/v1/ RESOURCE_TYPE / RESOURCE_ID :analyzeIamPolicyLongrunning" | Select-Object -Expand Content
APIs Explorer (browser)
Copy the request body and open the
method reference page .
The APIs Explorer panel opens on the right side of the page.
You can interact with this tool to send requests.
Paste the request body in this tool, complete any other required fields, and click Execute .
You should receive a JSON response similar to the following:
{
"name": "projects/my-project/operations/AnalyzeIamPolicyLongrunning/1206385342502762515812063858425027606003",
"metadata": {
"@type": "type.googleapis.com/google.cloud.asset.v1.AnalyzeIamPolicyLongrunningMetadata",
"createTime": "2022-04-12T21:31:10.753173929Z"
}
}
View IAM policy analysis results
To view your IAM policy analysis results:
Console
In the Google Cloud console, go to the BigQuery page.
Go to BigQuery
To display the tables and views in the dataset, open the navigation panel.
In the Explorer section, select your project to expand it, and then
select a dataset.
From the list, select the tables with your prefix. The table with an
analysis suffix contains the query and metadata (for example, operation
name, request time, and non-critical errors). The table with
analysis_result suffix is the result listing tuples of
{identity, role(s)/permission(s), resource} together with
IAM policies that generate those tuples.
To view a sample set of data, select the Preview tab.
API
To browse your table's data, call
tabledata.list .
In the tableId parameter, specify the name of your table.
You can configure the following optional parameters to control the output.
maxResults is the maximum number of results to return.
selectedFields is a comma-separated list of columns to return; If
unspecified, all columns are returned.
startIndex is the zero-based index of the starting row to read.
Note: If you request a startIndex beyond the last row, the method returns
successfully but without a rows property. You can find out how many rows are
in your table by calling the
tables.get method and
examining the numRows property.
Values are returned wrapped in a JSON object that you must parse, as described
in the tabledata.list
reference documentation.
Query BigQuery
This section provides example SQL queries to show you how to use
BigQuery tables written by AnalyzeIamPolicyLongrunning . For more
information on BigQuery syntax, see
Standard SQL Query Syntax .
OP_ID is needed for most queries, you can get it from
AnalyzeIamPolicyLongrunning
response. For example, in gcloud, You will find OP_ID is 123456 in
"Use [gcloud asset operations describe organizations/123456789/operations/AnalyzeIamPolicyLongrunning/123456] to check the status of the operation.".
List Operations
Your table could store results of multiple AnalyzeIamPolicyLongrunning
operations. You can use the following query to list all of them:
SELECT DISTINCT
requestTime ,
opName
FROM ` BQ_PROJECT_ID . BQ_DATASET_NAME . BQ_TABLE_PREFIX _analysis `
ORDER BY 1 DESC
;
List Analyses in one Operation
In one AnalyzeIamPolicyLongrunning operation, there could be multiple analysis
records generated. For example, when you enable the
analyze_service_account_impersonation option in your request, the result could
contain one main analysis (with analysisId 0) and several service account
impersonation analysis.
You can use the following query to find out all analysis by giving an operation
name.
DECLARE _opName STRING DEFAULT "organizations/ ORG_ID /operations/AnalyzeIamPolicyLongrunning/ OP_ID " ;
SELECT
analysisId ,
requestTime ,
TO_JSON_STRING ( analysis . analysisQuery , true ) as analysisQuery ,
analysis . fullyExplored ,
TO_JSON_STRING ( analysis . nonCriticalErrors , true ) as nonCriticalErrors
FROM ` BQ_PROJECT_ID . BQ_DATASET_NAME . BQ_TABLE_PREFIX _analysis `
WHERE opName = _opName
ORDER BY 1
;
List ACEs(Access Control Entries) in one Analysis
An ACE is an Access Control Entry {identity, role(s)/permission(s), resource} .
You can use the following query to list ACE in one analysis.
DECLARE _opName STRING DEFAULT "organizations/ ORG_ID /operations/AnalyzeIamPolicyLongrunning/ OP_ID " ;
SELECT DISTINCT
ids . name AS identity ,
resources . fullResourceName AS resource ,
accesses . role AS role ,
accesses . permission AS permission
FROM ` BQ_PROJECT_ID . BQ_DATASET_NAME . BQ_TABLE_PREFIX _analysis_result ` ,
UNNEST ( analysisResult . identityList . identities ) AS ids ,
UNNEST ( analysisResult . accessControlLists ) AS acls ,
UNNEST ( acls . accesses ) AS accesses ,
UNNEST ( acls . resources ) AS resources
WHERE opName = _opName
AND analysisId = 0
ORDER BY 1 , 2 , 3 , 4
;
List ACEs(Access Control Entries) with IAM policy binding in one Analysis
In this query, we list both ACE and the IAM policy binding that generates this
ACE for one analysis.
DECLARE _opName STRING DEFAULT "organizations/ ORG_ID /operations/AnalyzeIamPolicyLongrunning/ OP_ID " ;
SELECT
ids . name AS identity ,
resources . fullResourceName AS resource ,
accesses . role AS role ,
accesses . permission AS permission ,
analysisResult . attachedResourceFullName as iam_policy_attached_resource ,
TO_JSON_STRING ( analysisResult . iamBinding , true ) as iam_policy_binding
FROM ` BQ_PROJECT_ID . BQ_DATASET_NAME . BQ_TABLE_PREFIX _analysis_result ` ,
UNNEST ( analysisResult . identityList . identities ) AS ids ,
UNNEST ( analysisResult . accessControlLists ) AS acls ,
UNNEST ( acls . accesses ) AS accesses ,
UNNEST ( acls . resources ) AS resources
WHERE opName = _opName AND analysisId = 0
ORDER BY 1 , 2 , 3 , 4
;
List IAM policy bindings in one Analysis
In this query, we list the IAM policy bindings appeared in one analysis.
DECLARE _opName STRING DEFAULT "organizations/ ORG_ID /operations/AnalyzeIamPolicyLongrunning/ OP_ID " ;
SELECT DISTINCT
analysisResult . attachedResourceFullName as iam_policy_attached_resource ,
TO_JSON_STRING ( analysisResult . iamBinding , true ) as iam_policy_binding
FROM ` BQ_PROJECT_ID . BQ_DATASET_NAME . BQ_TABLE_PREFIX _analysis_result `
WHERE opName = _opName AND analysisId = 0
ORDER BY 1 , 2
;
List IAM policy bindings with ACE(Access Control Entry) in one Analysis
In this query, we list the IAM policy bindings with their derived ACEs in one analysis
DECLARE _opName STRING DEFAULT "organizations/ ORG_ID /operations/AnalyzeIamPolicyLongrunning/ OP_ID " ;
SELECT
analysisResult . attachedResourceFullName as iam_policy_attached_resource ,
TO_JSON_STRING ( analysisResult . iamBinding , true ) as iam_policy_binding ,
TO_JSON_STRING ( analysisResult . identityList . identities , true ) as identities ,
TO_JSON_STRING ( acls . accesses , true ) as accesses ,
TO_JSON_STRING ( acls . resources , true ) as resources
FROM ` BQ_PROJECT_ID . BQ_DATASET_NAME . BQ_TABLE_PREFIX _analysis_result ` ,
UNNEST ( analysisResult . accessControlLists ) AS acls
WHERE opName = _opName AND analysisId = 0
ORDER BY 1 , 2
;
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
