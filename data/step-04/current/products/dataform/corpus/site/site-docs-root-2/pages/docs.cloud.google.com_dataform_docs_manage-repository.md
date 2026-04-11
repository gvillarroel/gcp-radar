---
title: "Manage a repository \_|\_ Dataform \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataform/docs/manage-repository
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataform/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/dataform/docs/manage-repository
  title: "Manage a repository \_|\_ Dataform \_|\_ Google Cloud Documentation"
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
Manage a repository
Stay organized with collections
Save and categorize content based on your preferences.
This document shows you how to do the following in Dataform:
Configure Dataform workflow settings .
Manage the Dataform core package .
Version control your code .
Before you begin
Select or create a repository .
Note: The Dataform repositories list includes only
repositories created for Dataform workflow development.
Repositories for BigQuery Studio assets, such as notebooks or saved
queries, are managed separately and don't appear in this list.
Optional: Connect your repository to a third-party Git repository .
Create and initialize a development workspace in your repository .
Required roles
To get the permissions that
you need to complete the tasks in this document,
ask your administrator to grant you the
following IAM roles:
Configure Dataform settings and manage the location of the Dataform core package:
Dataform Admin ( roles/dataform.admin )
on repositories.
Update the Dataform core package and use version control in Dataform:
Dataform Editor ( roles/dataform.editor )
on workspaces.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Configure Dataform workflow settings
This section shows you how to edit the Dataform workflow
processing settings for a specific repository.
You might want to edit the settings file to rename the schemas or add
custom compilation variables to your
repository.
About repository settings
For new repositories, a custom service account is required for workflow
execution and strict act-as mode is enforced. You can't use the
default Dataform service agent to run workflows.
Important: For existing repositories, we recommend using custom service accounts and enabling
strict act-as mode
to ensure a more secure and predictable permissions model.
Each Dataform repository contains a unique workflow settings
file. The file contains the Google Cloud project ID and the schema in which
Dataform publishes assets in BigQuery.
Dataform uses default settings that you can override to best
suit your needs by editing the settings file.
As of
Dataform core 3.0.0 ,
workflow settings are stored in the workflow_settings.yaml file by default.
In earlier versions of Dataform core, workflow settings are stored
in the dataform.json file. Both of these configuration files must be in the
root directory of your repository. The Dataform core 3.0
workflow_settings.yaml file is backward compatible with the dataform.json
file. You can continue to use the dataform.json file to store workflow
settings. As a best practice, you should
migrate your repository workflow settings
to the workflow_settings.yaml format for future compatibility.
About workflow_settings.yaml
The workflow_settings.yaml file, introduced in
Dataform core 3.0 ,
stores Dataform workflow settings in the YAML format.
The following code sample shows a sample workflow_settings.yaml file:
defaultProject : my-gcp-project-id
defaultDataset : dataform
defaultLocation : australia-southeast2
defaultAssertionDataset : dataform_assertions
In the preceding code sample, the key-value pairs are described as follows:
defaultProject : your BigQuery Google Cloud project ID.
defaultDataset : the BigQuery dataset in which
Dataform creates assets, called dataform by default.
defaultLocation (optional): your default BigQuery dataset
location. Dataform uses this location to process your code and
store the results. This processing location must match the location of your
BigQuery datasets. However, it doesn't need to match the
Dataform repository location.
If you don't set the defaultLocation parameter, Dataform
determines the location based on the datasets that your SQL query references.
This works as follows:
If your query references datasets from the same location,
Dataform uses that location.
If your query references datasets from two or more different locations,
an error occurs. For details about this limitation, see
Cross-region dataset replication .
If your query doesn't reference any datasets, the default location for
Dataform is the US multi-region. To choose a different
location, set the default location. Alternatively, use the
@@location system variable
in your query. For more information, see
Specify locations .
defaultAssertionDataset : the BigQuery dataset in which
Dataform creates views with assertion results, called
dataform_assertions by default.
For more information about workflow_settings.yaml properties, see
WorkflowSettings
in GitHub.
You can access the properties defined in workflow_settings.yaml in your
Dataform code as properties of the
dataform.projectConfig
object.
The following mappings from the workflow_settings.yaml options to the
code-accessible dataform.projectConfig options apply:
defaultProject => defaultDatabase
defaultDataset => defaultSchema
defaultAssertionDataset => assertionSchema
projectSuffix => databaseSuffix
datasetSuffix => schemaSuffix
namePrefix => tablePrefix
The following code sample shows the dataform.projectConfig object
referenced in a SELECT statement in a view:
config { type: "view" }
SELECT ${when(
!dataform.projectConfig.tablePrefix,
"table prefix is set!",
"table prefix is not set!"
)}
About dataform.json
The dataform.json file stores Dataform workflow settings in
the JSON format.
The following code sample shows a sample dataform.json file:
{
"warehouse" : "bigquery" ,
"defaultDatabase" : "my-gcp-project-id" ,
"defaultSchema" : "dataform" ,
"defaultLocation" : "australia-southeast2" ,
"assertionSchema" : "dataform_assertions"
}
In the preceding code sample, the key-value pairs are described as follows:
warehouse : a pointer to BigQuery, where
Dataform creates assets.
defaultDatabase : your BigQuery Google Cloud project ID.
defaultSchema : the BigQuery dataset in which
Dataform creates assets.
defaultLocation (optional): your default BigQuery dataset
location. Dataform uses this location to process your code and
store the results. This processing location must match the location of your
BigQuery datasets. However, it doesn't need to match the
Dataform repository location.
If you don't set the defaultLocation parameter, Dataform
determines the location based on the datasets that your SQL query references.
This works as follows:
If your query references datasets from the same location,
Dataform uses that location.
If your query references datasets from two or more different locations,
an error occurs. For details about this limitation, see
Cross-region dataset replication .
If your query doesn't reference any datasets, the default location for
Dataform is the US multi-region. To choose a different
location, set the default location. Alternatively, use the
@@location system variable
in your query. For more information, see
Specify locations .
assertionSchema : the BigQuery dataset in which
Dataform creates views with assertion results, called
dataform_assertions by default.
You can access the properties defined in the dataform.json file in your
project code as properties of the
dataform.projectConfig
object.
Configure schema names
To configure schema names, you need to edit the defaultDataset and
defaultAssertionSchema properties in the workflow_settings.yaml file, or
the defaultSchema and assertionSchema properties in the dataform.json
file.
To configure the name of a schema, follow these steps:
workflow_settings.yaml
In your development workspace, in the Files pane, click
the workflow_settings.yaml file.
Edit the value of defaultDataset , defaultAssertionSchema , or both.
The following code sample shows a custom defaultDataset name defined in
the workflow_settings.yaml file:
...
defaultDataset : mytables
...
dataform.json
In your development workspace, in the Files pane, click
the dataform.json file.
Edit the value of defaultSchema , assertionSchema , or both.
The following code sample shows a custom defaultSchema name defined in
the dataform.json file:
{
...
"defaultSchema" : "mytables" ,
...
}
Create custom compilation variables
Compilation variables contain values that you can modify with compilation
overrides in a release configuration or in a Dataform API request.
After you define a compilation variable in workflow_settings.yaml and add it
to selected tables, you can modify its value in a release configuration or
Dataform API compilation overrides
to execute tables conditionally.
For more information about executing tables conditionally by using
compilation variables, see
Introduction to code lifecycle in Dataform .
To create a compilation variable that you can use across a repository,
follow these steps:
workflow_settings.yaml
Go to your Dataform development workspace.
In the Files pane, select the workflow_settings.yaml file.
Enter the following code snippet:
"vars" : {
" VARIABLE " : " VALUE "
}
Replace the following:
VARIABLE : a name for the variable
VALUE : the default value of the compilation variable
The following code sample shows the myVariableName compilation variable
set to myVariableValue in the workflow_settings.yaml file:
...
vars :
myVariableName : myVariableValue
...
The following code sample shows the workflow_settings.yaml file with the
executionSetting compilation variable set to dev :
defaultProject : default_bigquery_database
defaultLocation : us-west1
defaultDataset : dataform_data,
vars :
executionSetting : dev
dataform.json
Go to your Dataform development workspace.
In the Files pane, select the dataform.json file.
Enter the following code snippet:
"vars" : {
" VARIABLE " : " VALUE "
}
Replace the following:
VARIABLE : a name for the variable
VALUE : the default value of the compilation variable
The following code sample shows the myVariableName compilation variable
set to myVariableValue in the dataform.json file:
{
...
"vars" : {
"myVariableName" : "myVariableValue"
},
...
}
The following code sample shows the dataform.json file with the
executionSetting compilation variable set to dev :
{
"warehouse" : "bigquery" ,
"defaultSchema" : "dataform_data" ,
"defaultDatabase" : "default_bigquery_database" .
"defaultLocation" : "us-west-1" ,
"vars" : {
"executionSetting" : "dev"
}
}
Add a compilation variable to a table
To add a compilation variable to a SQLX table definition file,
follow these steps:
Go to your Dataform development workspace.
In the Files pane, select a SQLX table definition file.
In the file, enter a when clause in the following format:
${when(dataform.projectConfig.vars. VARIABLE === " SET_VALUE ", " CONDITION ")}
Replace the following:
VARIABLE : the name of your variable—for
example executionSetting
SET_VALUE : a value for the variable—for
example, staging
CONDITION : a condition for execution of the table
The following code sample shows a table definition SQLX file with a when
clause and the executionSetting variable that executes 10% of data in the
staging execution setting:
select
*
from ${ref("data")}
${when(
dataform.projectConfig.vars.executionSetting === "staging",
"where mod(farm_fingerprint(id) / 10) = 0",
)}
The following code sample shows a view definition SQLX file with a when
clause and the myVariableName variable:
config { type: "view" }
SELECT ${when(
dataform.projectConfig.vars.myVariableName === "myVariableValue",
"myVariableName is set to myVariableValue!",
"myVariableName is not set to myVariableValue!"
)}
Configure workflow-level defaults for Iceberg tables
You can provide workflow-level defaults for BigLake tables for Apache Iceberg in BigQuery in the
workflow_settings.yaml file. You can set default values for the bucket name,
table folder root, and table folder subpath.
Dataform uses these default values to construct the storage URI
for a BigLake Iceberg table in BigQuery if you don't set these values in the
config block of the table definition file.
To configure workflow-level defaults for the tables,
add the defaultIcebergConfig block with the following fields to your
workflow_settings.yaml file:
bucketName : Optional. The default name for the
Cloud Storage bucket.
tableFolderRoot : Optional. The default name for the first-level
folder inside the Cloud Storage bucket.
tableFolderSubpath : Optional. The default name for a sub-folder
within the tableFolderRoot .
The following code sample shows a workflow_settings.yaml file with
workflow-level defaults for BigLake Iceberg tables in BigQuery:
defaultProject : "defaultProject"
defaultDataset : "defaultDataset"
defaultLocation : "us-central1"
defaultIcebergConfig :
bucketName : "wsDefaultBucketName"
tableFolderRoot : "wsDefaultTableFolderRoot"
tableFolderSubpath : "wsDefaultTableFolderSubpath"
You can access these fields in your Dataform code as properties
of the ProjectConfig object:
dataform.ProjectConfig.defaultIcebergConfig.bucketName
dataform.ProjectConfig.defaultIcebergConfig.tableFolderRoot
dataform.ProjectConfig.defaultIcebergConfig.tableFolderSubpath
For more information, see Create BigLake tables for Apache Iceberg in BigQuery
and the iceberg block properties .
Migrate workflow settings to workflow_settings.yaml
To ensure your workflow settings file is compatible with future
Dataform core framework versions, you should migrate your workflow
settings from the dataform.json file to the workflow_settings.yaml file.
The workflow_settings.yaml file replaces the dataform.json file.
If Dataform core is the only dependency package in your repository,
then the workflow_settings.yaml file also replaces the package.json file.
For more information about replacing the package.json file with the
workflow_settings.yaml file, see
Manage the Dataform core package .
The following table shows mapping of workflow settings properties from
the dataform.json file to the workflow_settings.yaml file:
Property in dataform.json
Property in workflow_settings.yaml
Description
assertionSchema
defaultAssertionDataset
Required. The default dataset for assertions.
defaultDatabase
defaultProject
Required. The default Google Cloud project name.
defaultLocation
defaultLocation
Optional. The default BigQuery location where Dataform creates tables. If unset, Dataform determines the location based on the datasets that your SQL query references. For more information, see Specify locations .
defaultSchema
defaultDataset
Required. The default dataset.
databaseSuffix
projectSuffix
Optional. The suffix to append to all Google Cloud project references.
schemaSuffix
datasetSuffix
Optional. The suffix to append to all action datasets.
tablePrefix
namePrefix
Optional. The prefix to prepend to all action names.
vars
vars
Optional. User-defined variables that are made available to project code during compilation. An object containing a list of key: value pairs.
warehouse
-
Required in dataform.json . Must be set to bigquery . Not available in workflow_settings.yaml .
-
dataformCoreVersion
Not available in dataform.json . Installed in workflow_settings.yaml by default for new repositories. For more information, see Manage the Dataform core package .
To migrate workflow settings to workflow_settings.yaml , follow these steps:
In the Google Cloud console, go to the Dataform page.
Go to Dataform
Select a repository, and then select a workspace.
In the Files pane, click
add Add ,
and then click Create file .
In the Add a file path field, enter workflow_settings.yaml .
Click Create file .
In the workflow_settings.yaml file, add the settings from your
dataform.json file, mapped to the YAML format.
In the Files pane, click the More menu next to dataform.json ,
and then click Delete .
To confirm deletion of dataform.json , click Delete .
The following code sample shows workflow settings defined in
a dataform.json file:
{
"warehouse" : "bigquery" ,
"defaultDatabase" : "dataform-demos" ,
"defaultLocation" : "US" ,
"defaultSchema" : "dataform" ,
"assertionSchema" : "dataform_assertions"
"vars" : {
"environmentName" : "development"
}
}
The following code sample shows the preceding dataform.json file
converted to workflow_settings.yaml :
defaultProject : dataform-demos
defaultLocation : US
defaultDataset : dataform
defaultAssertionDataset : dataform_assertions
vars :
environmentName : "development"
Manage the Dataform core package
This section shows you how to manage the Dataform core framework
dependency package and update it to the latest version.
Dataform core is the open source Dataform framework
for developing workflows with SQL, SQLX, and JavaScript. As a best practice,
always use the latest available version of the Dataform core
framework. For information about releases of the Dataform core
framework, see
Dataform releases on GitHub .
Manage Dataform core package location
When you initialize the first workspace in a repository, Dataform
automatically sets Dataform core as a dependency package. As of
Dataform core 3.0.0 ,
Dataform installs the Dataform core package in the
workflow_settings.yaml file by default. In earlier versions of
Dataform core, Dataform core was set in the package.json
file.
In Dataform core 3.0.0 and later, if Dataform core is the
only package in your repository, then you should set it in the
workflow_settings.yaml file. For repositories created with earlier
versions of Dataform core,
move the Dataform core package to workflow_settings.yaml .
The package.json file is required to install additional packages in
Dataform. If your repository uses additional packages, set the
Dataform core package in package.json so that all packages
are set in one place. If your repository doesn't have the package.json file,
create the package.json file and move the Dataform core package
to install additional packages. The package.json file must be in the root
directory of your repository.
Move Dataform core to workflow_settings.yaml
For repositories created with versions of Dataform core earlier than
3.0.0 , if you don't have dependency packages other than
Dataform core, then you should move the Dataform core
package from the package.json file to the workflow_settings.yaml file,
and delete the redundant package.json file.
To migrate the Dataform core package from the package.json file to
the workflow_settings.yaml file, do the following:
In the Google Cloud console, go to the Dataform page.
Go to Dataform
Select a repository, and then select a workspace.
In the Files pane, select the workflow_settings.yaml file.
In the workflow_settings.yaml file, add the Dataform core
package in the following format:
dataformCoreVersion : " VERSION "
Replace VERSION with the latest version of
Dataform, for example, 3.0.0 .
In the Files pane, click the More menu next to the package.json
file, and then click Delete .
To confirm deletion of the dataform.json file, click Delete .
Click Install packages .
Move Dataform core to package.json
The package.json file is required to
install additional packages
in a repository. If your repository uses additional packages, then you should
store all packages, including the Dataform core package, in the
package.json file.
If your repository doesn't contain the package.json file because the
Dataform core package is set in the workflow_settings.yaml file,
you must create the package.json file to install additional packages, and
then move the Dataform core package from the workflow_settings.yaml
file to the newly created package.json file.
To create the package.json file and move the Dataform core package,
follow these steps:
In the Google Cloud console, go to the Dataform page.
Go to Dataform
Select a repository, and then select a workspace.
In the Files pane, click
add Add , and then click
Create file .
In the Add a file path field, enter package.json .
Click Create file .
In the package.json file, add the Dataform core
package in the following format:
{
"dependencies" : {
"@dataform/core" : " VERSION "
}
}
Replace VERSION with the latest version of Dataform,
for example, 3.0.0 .
Click Install packages .
In the Files pane, select workflow_settings.yaml .
In the workflow_settings.yaml file, delete the dataformCoreVersion
property.
Update Dataform core
Always test new package versions in a non-production environment before
deploying in your production environment.
To update the Dataform core dependency package, follow these steps:
Look up the latest version of @dataform/core on the
Dataform releases page on GitHub .
In the Google Cloud console, go to the Dataform page.
Go to Dataform
Select a repository, and then select a workspace.
In the Files pane, select the package.json file or the
workflow_settings.yaml file.
The location where the Dataform core dependency package is set
depends on your version of Dataform core and your use of packages.
For more information, see
Manage Dataform core package location .
Update the Dataform core dependency package with the latest
version:
package.json
{
"dependencies" : {
"@dataform/core" : " VERSION "
}
}
Replace VERSION with the latest version of
Dataform, for example, 3.0.0 . To prevent issues with
package installation, explicitly specify the Dataform core
package version. Don't use other
dependencies options
of the package.json file, for example, >version .
workflow_settings.yaml
dataformCoreVersion : " VERSION "
Replace VERSION with the latest version of
Dataform, for example, 3.0.0 .
Click Install packages .
Commit the changes .
Push the changes to your repository .
The following code sample shows the @dataform/core dependency updated to
the 3.0.0 version in the package.json file:
{
"dependencies" : {
"@dataform/core" : "3.0.0"
}
}
Version control your code
This section shows you how to use version control in Dataform
to keep track of development.
Dataform uses Git to keep track of each change made to
the files inside a repository.
In a Dataform repository, you interact directly with the Git
repository.
In a connected repository, you interact with the tracking branch of the
remote repository that you configured while
connecting the repository .
Dataform displays version control options based on the status
of changes in your development workspace. For example, Dataform
displays the commit option only when there are uncommitted local changes
in your workspace. When the files in your workspace are an exact copy of
your default or tracking branch, Dataform displays the
Workspace is up to date status.
Dataform displays the following version control options:
Commit X change(s)
Commit the X number of local changes in your workspace
or selected changed files. Dataform displays the uncommitted
changes.
Push to default branch
Push your committed changes to your default branch. This option is
available in a Dataform repository if you have no uncommitted
changes in your workspace.
Push to your-branch-name
Push your committed changes to your-branch-name . This option is available
in a repository
connected to a third-party Git repository
if you have no uncommitted changes in your workspace.
Pull from default branch
Update your workspaces with recent changes from your default branch.
This option is available in a Dataform repository if you have
no uncommitted or unpushed committed changes in your workspace.
Pull from your-branch-name
Update your workspace with recent changes from your-branch-name . This
option is available in a repository
connected to a third-party Git repository
if you have no uncommitted or unpushed committed changes in your workspace.
Revert to last commit
Restore the files in your workspace to their state from your last commit.
Pull changes
If your development workspace is out of sync with your repository,
Dataform displays the Pull option. To pull changes from
your repository to your development workspace, follow these steps:
On the Dataform page, select a repository.
In the Development workspaces tab, select a development workspace.
On the development workspace page, do the following:
If you are in a Dataform repository, click
Pull from default branch .
If you are in a repository
connected to a third-party Git repository ,
click Pull from your-branch-name .
Commit changes
After you make a change in a development workspace, Dataform
displays the Commit option. You can commit all local changes or selected
files.
Note: Dataform defaults to using the authenticated
Google Cloud user's email address for the commit author, but
the Dataform API allows setting a custom email address for the commit
author. This behavior is similar to the
git commit --author command
and affects only the Git commit history. The commit author identity
is not cryptographically verified.
In the New commit dialog, Dataform displays the uncommitted
changes.
To commit changes from your development workspace to your repository, follow
these steps:
On the Dataform page, select a repository.
On the repository page, select a development workspace.
On the development workspace page, click Commit .
In the New commit pane, do the following:
In the Add a commit message field, enter a description for your
commit.
Select the changed files that you want to commit.
If you don't select any files, Dataform commits all
local changes. You can filter changed files by file state, filename,
and path.
Click Commit All changes , or Commit X changes .
The button name depends on your selection of files to commit.
Push changes
Dataform displays the Push option after you commit changes.
To push changes from your development workspace to your repository,
follow these steps:
On the Dataform page, select a repository.
On the repository page, select a development workspace.
Commit changes .
On the development workspace page, do the following:
If you are in a Dataform repository, click
Push to default branch .
If you are in a repository
connected to a third-party Git repository ,
click Push to your-branch-name .
Revert uncommitted changes
To revert uncommitted changes, follow these steps:
On the Dataform page, select a repository.
On the repository page, select a development workspace.
Above the Files pane, click the More menu,
and then select Revert to last commit .
Resolve merge conflicts
A merge conflict can happen when a local change in your development workspace
is incompatible with a change that has been made to the default tracking
branch of your repository. Merge conflicts usually occur when multiple users
simultaneously edit the same file.
You encounter a merge conflict usually when you pull from a branch after
a different user has pushed a conflicting change to the same branch.
You need to resolve a merge conflict manually by editing the affected file.
The following code sample shows a merge conflict displayed in a SQLX file:
<<<<<<< HEAD
SELECT 1 as CustomerOrders
=======
SELECT 1 as Orders
>>>>>>> refs/heads/main
To resolve a merge conflict, follow these steps:
In your development workspace, in the Files pane, select an affected
file.
Edit the file with your chosen changes.
Commit changes .
Optional: Push changes .
What's next
To learn more about Dataform project settings, see
IProjectConfig reference .
To learn how to install additional packages, see
Install a package in Dataform .
To learn how to create a table, see
Create a table .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
