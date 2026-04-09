---
title: "Create custom Data Catalog entries for your data sources \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/data-catalog/docs/how-to/custom-entries
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/data-catalog/docs
source_metadata:
  url: https://docs.cloud.google.com/data-catalog/docs/how-to/custom-entries
  title: "Create custom Data Catalog entries for your data sources \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Data Catalog is deprecated and will be discontinued on January 30, 2026. For steps to transition your Data Catalog users, workloads, and content to Dataplex Universal Catalog, see Transition from Data Catalog to Dataplex Universal Catalog .
Home
Documentation
Data analytics
Data Catalog
Guides
Send feedback
Create custom Data Catalog entries for your data sources
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how to create custom Data Catalog entries.
To integrate your custom data sources, call Data Catalog
APIs that allow you to create and manage Data Catalog entries
with custom data resource types. In this document, an entry for a custom data
resource type is referred to as a "custom entry".
Note: To automatically integrate with the supported Google Cloud data
sources as well as a number of on-premises ones using the community-contributed
connectors, follow the steps in
Integrate data sources .
Create entry groups and custom entries
Custom entries must be placed within a user-created entry group. You
create the entry group, then create the custom entry within the entry group.
For more information, see
Entries and entry groups .
After creating an entry, you can set IAM policies
on the entry group to define who has access to the entry group and the entries inside.
Java
Before trying this sample, follow the Java setup instructions in the
Data Catalog quickstart using
client libraries .
For more information, see the
Data Catalog Java API
reference documentation .
To authenticate to Data Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.datacatalog.v1. ColumnSchema ;
import com.google.cloud.datacatalog.v1. CreateEntryGroupRequest ;
import com.google.cloud.datacatalog.v1. CreateEntryRequest ;
import com.google.cloud.datacatalog.v1. DataCatalogClient ;
import com.google.cloud.datacatalog.v1. Entry ;
import com.google.cloud.datacatalog.v1. EntryGroup ;
import com.google.cloud.datacatalog.v1. LocationName ;
import com.google.cloud.datacatalog.v1. Schema ;
import java.io.IOException ;
// Sample to create custom entry
public class CreateCustomEntry {
public static void main ( String [] args ) throws IOException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "my-project" ;
String entryGroupId = "onprem_entry_group" ;
String entryId = "onprem_entry_id" ;
createCustomEntry ( projectId , entryGroupId , entryId );
}
public static void createCustomEntry ( String projectId , String entryGroupId , String entryId )
throws IOException {
// Currently, Data Catalog stores metadata in the us-central1 region.
String location = "us-central1" ;
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. After completing all of your requests, call
// the "close" method on the client to safely clean up any remaining background resources.
try ( DataCatalogClient dataCatalogClient = DataCatalogClient . create ()) {
// Construct the EntryGroup for the EntryGroup request.
EntryGroup entryGroup =
EntryGroup . newBuilder ()
. setDisplayName ( "My awesome Entry Group" )
. setDescription ( "This Entry Group represents an external system" )
. build ();
// Construct the EntryGroup request to be sent by the client.
CreateEntryGroupRequest entryGroupRequest =
CreateEntryGroupRequest . newBuilder ()
. setParent ( LocationName . of ( projectId , location ). toString ())
. setEntryGroupId ( entryGroupId )
. setEntryGroup ( entryGroup )
. build ();
// Use the client to send the API request.
EntryGroup createdEntryGroup = dataCatalogClient . createEntryGroup ( entryGroupRequest );
// Construct the Entry for the Entry request.
Entry entry =
Entry . newBuilder ()
. setUserSpecifiedSystem ( "onprem_data_system" )
. setUserSpecifiedType ( "onprem_data_asset" )
. setDisplayName ( "My awesome data asset" )
. setDescription ( "This data asset is managed by an external system." )
. setLinkedResource ( "//my-onprem-server.com/dataAssets/my-awesome-data-asset" )
. setSchema (
Schema . newBuilder ()
. addColumns (
ColumnSchema . newBuilder ()
. setColumn ( "first_column" )
. setDescription ( "This columns consists of ...." )
. setMode ( "NULLABLE" )
. setType ( "DOUBLE" )
. build ())
. addColumns (
ColumnSchema . newBuilder ()
. setColumn ( "second_column" )
. setDescription ( "This columns consists of ...." )
. setMode ( "REQUIRED" )
. setType ( "STRING" )
. build ())
. build ())
. build ();
// Construct the Entry request to be sent by the client.
CreateEntryRequest entryRequest =
CreateEntryRequest . newBuilder ()
. setParent ( createdEntryGroup . getName ())
. setEntryId ( entryId )
. setEntry ( entry )
. build ();
// Use the client to send the API request.
Entry createdEntry = dataCatalogClient . createEntry ( entryRequest );
System . out . printf ( "Custom entry created with name: %s" , createdEntry . getName ());
}
}
}
Node.js
Before trying this sample, follow the Node.js setup instructions in the
Data Catalog quickstart using
client libraries .
For more information, see the
Data Catalog Node.js API
reference documentation .
To authenticate to Data Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
// Import the Google Cloud client library.
const { DataCatalogClient } = require ( ' @google-cloud/datacatalog ' ). v1 ;
const datacatalog = new DataCatalogClient ();
async function createCustomEntry () {
// Create a custom entry within an entry group.
/**
* TODO(developer): Uncomment the following lines before running the sample.
*/
// const projectId = 'my_project';
// const entryGroupId = 'my_entry_group';
// const entryId = 'my_entry';
// const tagTemplateId = 'my_tag_template';
// Currently, Data Catalog stores metadata in the us-central1 region.
const location = 'us-central1' ;
// Delete any pre-existing Entry with the same name
// that will be used to create the new Entry.
try {
const entryName = datacatalog . entryPath (
projectId ,
location ,
entryGroupId ,
entryId
);
await datacatalog . deleteEntry ({ name : entryName });
console . log ( `Deleted Entry: ${ entryName } ` );
} catch ( err ) {
console . log ( 'Entry does not exist.' );
}
// Delete any pre-existing Entry Group with the same name
// that will be used to construct the new EntryGroup.
try {
const entryGroupName = datacatalog . entryGroupPath (
projectId ,
location ,
entryGroupId
);
await datacatalog . deleteEntryGroup ({ name : entryGroupName });
console . log ( `Deleted Entry Group: ${ entryGroupName } ` );
} catch ( err ) {
console . log ( 'Entry Group does not exist.' );
}
// Delete any pre-existing Template with the same name
// that will be used to create a new Template.
const tagTemplateName = datacatalog . tagTemplatePath (
projectId ,
location ,
tagTemplateId
);
let tagTemplateRequest = {
name : tagTemplateName ,
force : true ,
};
try {
await datacatalog . deleteTagTemplate ( tagTemplateRequest );
console . log ( `Deleted template: ${ tagTemplateName } ` );
} catch ( error ) {
console . log ( `Cannot delete template: ${ tagTemplateName } ` );
}
// Construct the EntryGroup for the EntryGroup request.
const entryGroup = {
displayName : 'My awesome Entry Group' ,
description : 'This Entry Group represents an external system' ,
};
// Construct the EntryGroup request to be sent by the client.
const entryGroupRequest = {
parent : datacatalog . locationPath ( projectId , location ),
entryGroupId : entryGroupId ,
entryGroup : entryGroup ,
};
// Use the client to send the API request.
const [ createdEntryGroup ] =
await datacatalog . createEntryGroup ( entryGroupRequest );
console . log ( `Created entry group: ${ createdEntryGroup . name } ` );
// Construct the Entry for the Entry request.
const entry = {
userSpecifiedSystem : 'onprem_data_system' ,
userSpecifiedType : 'onprem_data_asset' ,
displayName : 'My awesome data asset' ,
description : 'This data asset is managed by an external system.' ,
linkedResource : '//my-onprem-server.com/dataAssets/my-awesome-data-asset' ,
schema : {
columns : [
{
column : 'first_column' ,
description : 'This columns consists of ....' ,
mode : 'NULLABLE' ,
type : 'STRING' ,
},
{
column : 'second_column' ,
description : 'This columns consists of ....' ,
mode : 'NULLABLE' ,
type : 'DOUBLE' ,
},
],
},
};
// Construct the Entry request to be sent by the client.
const entryRequest = {
parent : datacatalog . entryGroupPath ( projectId , location , entryGroupId ),
entryId : entryId ,
entry : entry ,
};
// Use the client to send the API request.
const [ createdEntry ] = await datacatalog . createEntry ( entryRequest );
console . log ( `Created entry: ${ createdEntry . name } ` );
// Create a Tag Template.
// For more field types, including ENUM, please refer to
// https://cloud.google.com/data-catalog/docs/quickstarts/quickstart-search-tag#data-catalog-quickstart-nodejs.
const fieldSource = {
displayName : 'Source of data asset' ,
type : {
primitiveType : 'STRING' ,
},
};
const tagTemplate = {
displayName : 'Demo Tag Template' ,
fields : {
source : fieldSource ,
},
};
tagTemplateRequest = {
parent : datacatalog . locationPath ( projectId , location ),
tagTemplateId : tagTemplateId ,
tagTemplate : tagTemplate ,
};
// Use the client to send the API request.
const [ createdTagTemplate ] =
await datacatalog . createTagTemplate ( tagTemplateRequest );
console . log ( `Created template: ${ createdTagTemplate . name } ` );
// Attach a Tag to the custom Entry.
const tag = {
template : createdTagTemplate . name ,
fields : {
source : {
stringValue : 'On-premises system name' ,
},
},
};
const tagRequest = {
parent : createdEntry . name ,
tag : tag ,
};
// Use the client to send the API request.
const [ createdTag ] = await datacatalog . createTag ( tagRequest );
console . log ( `Created tag: ${ createdTag . name } ` );
}
createCustomEntry ();
Python
Before trying this sample, follow the Python setup instructions in the
Data Catalog quickstart using
client libraries .
For more information, see the
Data Catalog Python API
reference documentation .
To authenticate to Data Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
# Import required modules.
from google.cloud import datacatalog_v1
# Google Cloud Platform project.
project_id = "my-project"
# Entry Group to be created.
entry_group_id = "my_new_entry_group_id"
# Entry to be created.
entry_id = "my_new_entry_id"
# Currently, Data Catalog stores metadata in the us-central1 region.
location = "us-central1"
datacatalog = datacatalog_v1 . DataCatalogClient ()
# Create an Entry Group.
entry_group_obj = datacatalog_v1 . types . EntryGroup ()
entry_group_obj . display_name = "My awesome Entry Group"
entry_group_obj . description = "This Entry Group represents an external system"
entry_group = datacatalog . create_entry_group (
parent = datacatalog_v1 . DataCatalogClient . common_location_path (
project_id , location
),
entry_group_id = entry_group_id ,
entry_group = entry_group_obj ,
)
entry_group_name = entry_group . name
print ( "Created entry group: {} " . format ( entry_group_name ))
# Create an Entry.
entry = datacatalog_v1 . types . Entry ()
entry . user_specified_system = "onprem_data_system"
entry . user_specified_type = "onprem_data_asset"
entry . display_name = "My awesome data asset"
entry . description = "This data asset is managed by an external system."
entry . linked_resource = "//my-onprem-server.com/dataAssets/my-awesome-data-asset"
# Create the Schema, this is optional.
entry . schema . columns . append (
datacatalog_v1 . types . ColumnSchema (
column = "first_column" ,
type_ = "STRING" ,
description = "This columns consists of ...." ,
mode = None ,
)
)
entry . schema . columns . append (
datacatalog_v1 . types . ColumnSchema (
column = "second_column" ,
type_ = "DOUBLE" ,
description = "This columns consists of ...." ,
mode = None ,
)
)
entry = datacatalog . create_entry (
parent = entry_group_name , entry_id = entry_id , entry = entry
)
print ( "Created entry: {} " . format ( entry . name ))
REST & CMD LINE
REST
See the following examples and refer to the Data Catalog REST API
entryGroups.create
and
entryGroups.entries.create
documentation.
1. Create an entry group
Before using any of the request data,
make the following replacements:
project-id : Your Google Cloud project ID
entryGroupId :
The ID must begin with a letter or underscore, contain
only English letters, numbers and underscores, and be at most 64 characters.
displayName :
The textual name for the entry group.
HTTP method and URL:
POST https://datacatalog.googleapis.com/v1/projects/ project-id /locations/ region /entryGroups?entryGroupId= entryGroupId
Request JSON body:
{
"displayName": " Entry Group display name "
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: project-id " \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://datacatalog.googleapis.com/v1/projects/ project-id /locations/ region /entryGroups?entryGroupId= entryGroupId "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " project-id " } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://datacatalog.googleapis.com/v1/projects/ project-id /locations/ region /entryGroups?entryGroupId= entryGroupId " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/my_projectid/locations/us-central1/entryGroups/my_entry_group",
"displayName": "Entry Group display name",
"dataCatalogTimestamps": {
"createTime": "2019-10-19T16:35:50.135Z",
"updateTime": "2019-10-19T16:35:50.135Z"
}
}
2. Create a custom entry within the entry group
Before using any of the request data,
make the following replacements:
project_id : Your Google Cloud project ID.
entryGroupId :
ID of the existing entryGroup. The entry will be created in this EntryGroup.
entryId :
ID of the new entry. The ID must begin with a letter or underscore,
contain only English letters, numbers and underscores, and have at
most 64 characters.
description :
Optional entry description
displayName :
Optional textual name for the entry.
userSpecifiedType :
Custom type name. The type name must begin with a letter or
underscore, must only contain letters, numbers, and underscores,
and must have at most 64 characters.
userSpecifiedSystem :
The entry's non-Google Cloud source system, which is not
integrated with Data Catalog .
The source system name must begin with a letter or
underscore, must only contain letters, numbers, and underscores,
and must have at most 64 characters.
linkedResource :
Optional fullname of the resource the entry refers to.
schema :
Optional data schema.
Example JSON schema:
{ ...
"schema": {
"columns": [
{
"column": "first_name",
"description": "First name",
"mode": "REQUIRED",
"type": "STRING"
},
{
"column": "last_name",
"description": "Last name",
"mode": "REQUIRED",
"type": "STRING"
},
{
"column": "address",
"description": "Address",
"mode": "REPEATED",
"subcolumns": [
{
"column": "city",
"description": "City",
"mode": "NULLABLE",
"type": "STRING"
},
{
"column": "state",
"description": "State",
"mode": "NULLABLE",
"type": "STRING"
}
],
"type": "RECORD"
}
]
}
...
}
HTTP method and URL:
POST https://datacatalog.googleapis.com/v1/projects/ project_id /locations/ region /entryGroups/ entryGroupId /entries?entryId= entryId
Request JSON body:
{
"description": " Description ",
"displayName": " Display name ",
"userSpecifiedType": " my_type ",
"userSpecifiedSystem": " my_system ",
"linkedResource": " example.com/def ",
"schema": { schema }
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
curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "x-goog-user-project: project_id " \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://datacatalog.googleapis.com/v1/projects/ project_id /locations/ region /entryGroups/ entryGroupId /entries?entryId= entryId "
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
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred"; "x-goog-user-project" = " project_id " } Invoke-WebRequest ` -Method POST ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://datacatalog.googleapis.com/v1/projects/ project_id /locations/ region /entryGroups/ entryGroupId /entries?entryId= entryId " | Select-Object -Expand Content
You should receive a JSON response similar to the following:
{
"name": "projects/my_project_id/locations/us-central1/entryGroups/my_entryGroup_id/entries/my_entry_id",
"userSpecifiedType": "my-type",
"userSpecifiedSystem": "my_system",
"displayName": "On-prem entry",
"description": "My entry description.",
"schema": {
"columns": [
{
"type": "STRING",
"description": "First name",
"mode": "REQUIRED",
"column": "first_name"
},
{
"type": "STRING",
"description": "Last name",
"mode": "REQUIRED",
"column": "last_name"
},
{
"type": "RECORD",
"description": "Address",
"mode": "REPEATED",
"column": "address",
"subcolumns": [
{
"type": "STRING",
"description": "City",
"mode": "NULLABLE",
"column": "city"
},
{
"type": "STRING",
"description": "State",
"mode": "NULLABLE",
"column": "state"
}
]
}
]
},
"sourceSystemTimestamps": {
"createTime": "2019-10-23T23:11:26.326Z",
"updateTime": "2019-10-23T23:11:26.326Z"
},
"linkedResource": "example.com/def"
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
