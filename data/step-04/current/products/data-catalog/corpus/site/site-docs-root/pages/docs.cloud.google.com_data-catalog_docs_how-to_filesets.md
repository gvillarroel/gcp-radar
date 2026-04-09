---
title: "Surface files from Cloud Storage with fileset entries \_|\_ Data Catalog \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/data-catalog/docs/how-to/filesets
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/data-catalog/docs
source_metadata:
  url: https://docs.cloud.google.com/data-catalog/docs/how-to/filesets
  title: "Surface files from Cloud Storage with fileset entries \_|\_ Data Catalog\
    \ \_|\_ Google Cloud Documentation"
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
Surface files from Cloud Storage with fileset entries
Stay organized with collections
Save and categorize content based on your preferences.
You can use the Data Catalog API to create and search for
Cloud Storage fileset entries (referred to as filesets in this
document).
Filesets
A Cloud Storage fileset is an entry within a user-created
entry group. For more information, see
Entries and entry groups .
It is defined by one or more
file patterns
that specify a set of one or more Cloud Storage files.
File pattern requirements:
A file pattern must begin with gs://bucket_name/ .
The bucket name must follow
Cloud Storage bucket name requirements .
Wildcards are allowed in the folder and file portions of file patterns, but
wildcards are not allowed in bucket names . For examples, see:
Wildcard Names
GcsFilesetSpec.filePatterns API reference documentation
A fileset must have one, and may have no more than 5, fileset patterns.
You can query Data Catalog filesets with Dataflow SQL but
only if they have a defined schema and contain only CSV files without header
rows.
Create entry groups and filesets
Filesets must be placed within a user-created entry group. If you have not
created an entry group, first create the entry group, then create the
fileset within the entry group. You can
set IAM policies on the entry group to
define who has access to filesets and other entries within the entry group.
Managing filesets . You
can list, edit, and delete filesets using the
Google Cloud CLI command line tool
or the
Data Catalog API .
Console
Console
Go to the Data Catalog Entry groups page.
Go to Entry groups
Click Create entry group .
Complete the Create Entry Group form, then click CREATE .
The Entry group details page opens. With the ENTRIES tab selected,
click CREATE .
Complete the Create Fileset form.
To attach a schema, click Define Schema to open the Schema form.
Click + ADD FIELDS to add fields individually or toggle Edit as
text in the upper right of the form to specify the fields in JSON format.
Click Save to save the schema.
Click Create to create the fileset.
gcloud
gcloud
1. Create an entry group
Use the
gcloud data-catalog entry-groups create command to create an entry group with an attached schema and description.
Example:
gcloud data-catalog entry-groups create my_entrygroup \
--location=us-central1
2. Create a fileset within the entry group
Use the
gcloud data-catalog entries create
command to create a fileset within an entry group. This Google Cloud CLI command
example, below, creates a fileset entry that includes schema of fileset data.
gcloud data-catalog entries create my_fileset_entry \
--location=us-central1 \
--entry-group= my_entrygroup \
--type=FILESET \
--gcs-file-patterns=gs:// my-bucket /*.csv \
--schema-from-file= path_to_schema_file \
--description="Fileset description ..."
Flag notes:
--gcs-file-patterns : See
File pattern requirements .
--schema-from-file : The following sample shows the
JSON format of the schema text file accepted by the
--schema-from-file flag.
[
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
"type": "STRING"
}
]
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
import com.google.cloud.datacatalog.v1. CreateEntryRequest ;
import com.google.cloud.datacatalog.v1. DataCatalogClient ;
import com.google.cloud.datacatalog.v1. Entry ;
import com.google.cloud.datacatalog.v1. EntryGroupName ;
import com.google.cloud.datacatalog.v1. EntryType ;
import com.google.cloud.datacatalog.v1. GcsFilesetSpec ;
import com.google.cloud.datacatalog.v1. Schema ;
import java.io.IOException ;
// Sample to create file set entry
public class CreateFilesetEntry {
public static void main ( String [] args ) throws IOException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "my-project-id" ;
String entryGroupId = "fileset_entry_group" ;
String entryId = "fileset_entry_id" ;
createFilesetEntry ( projectId , entryGroupId , entryId );
}
// Create Fileset Entry.
public static void createFilesetEntry ( String projectId , String entryGroupId , String entryId )
throws IOException {
// Currently, Data Catalog stores metadata in the us-central1 region.
String location = "us-central1" ;
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests. After completing all of your requests, call
// the "close" method on the client to safely clean up any remaining background resources.
try ( DataCatalogClient dataCatalogClient = DataCatalogClient . create ()) {
// Construct the Entry for the Entry request.
Entry entry =
Entry . newBuilder ()
. setDisplayName ( "My Fileset" )
. setDescription ( "This fileset consists of ...." )
. setGcsFilesetSpec (
GcsFilesetSpec . newBuilder (). addFilePatterns ( "gs://cloud-samples-data/*" ). build ())
. setSchema (
Schema . newBuilder ()
. addColumns (
ColumnSchema . newBuilder ()
. setColumn ( "first_name" )
. setDescription ( "First name" )
. setMode ( "REQUIRED" )
. setType ( "STRING" )
. build ())
. addColumns (
ColumnSchema . newBuilder ()
. setColumn ( "last_name" )
. setDescription ( "Last name" )
. setMode ( "REQUIRED" )
. setType ( "STRING" )
. build ())
. addColumns (
ColumnSchema . newBuilder ()
. setColumn ( "addresses" )
. setDescription ( "Addresses" )
. setMode ( "REPEATED" )
. setType ( "RECORD" )
. addSubcolumns (
ColumnSchema . newBuilder ()
. setColumn ( "city" )
. setDescription ( "City" )
. setMode ( "NULLABLE" )
. setType ( "STRING" )
. build ())
. addSubcolumns (
ColumnSchema . newBuilder ()
. setColumn ( "state" )
. setDescription ( "State" )
. setMode ( "NULLABLE" )
. setType ( "STRING" )
. build ())
. build ())
. build ())
. setType ( EntryType . FILESET )
. build ();
// Construct the Entry request to be sent by the client.
CreateEntryRequest entryRequest =
CreateEntryRequest . newBuilder ()
. setParent ( EntryGroupName . of ( projectId , location , entryGroupId ). toString ())
. setEntryId ( entryId )
. setEntry ( entry )
. build ();
// Use the client to send the API request.
Entry entryCreated = dataCatalogClient . createEntry ( entryRequest );
System . out . printf ( "Entry created with name: %s" , entryCreated . getName ());
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
async function createFileset () {
// Create a fileset within an entry group.
/**
* TODO(developer): Uncomment the following lines before running the sample.
*/
// const projectId = 'my_project';
// const entryGroupId = 'my_entry_group';
// const entryId = 'my_entry';
// Currently, Data Catalog stores metadata in the us-central1 region.
const location = 'us-central1' ;
// Delete any pre-existing Entry with the same name that will be used
// when creating the new Entry.
try {
const formattedName = datacatalog . entryPath (
projectId ,
location ,
entryGroupId ,
entryId
);
await datacatalog . deleteEntry ({ name : formattedName });
} catch ( err ) {
console . log ( 'Entry does not exist.' );
}
// Delete any pre-existing Entry Group with the same name
// that will be used to create the new Entry Group.
try {
const formattedName = datacatalog . entryGroupPath (
projectId ,
location ,
entryGroupId
);
await datacatalog . deleteEntryGroup ({ name : formattedName });
} catch ( err ) {
console . log ( 'Entry Group does not exist.' );
}
// Construct the Entry Group for the Entry Group request.
const entryGroup = {
displayName : 'My Fileset Entry Group' ,
description : 'This Entry Group consists of ....' ,
};
// Construct the Entry Group request to be sent by the client.
const entryGroupRequest = {
parent : datacatalog . locationPath ( projectId , location ),
entryGroupId : entryGroupId ,
entryGroup : entryGroup ,
};
// Use the client to send the API request.
await datacatalog . createEntryGroup ( entryGroupRequest );
// Construct the Entry for the Entry request.
const FILESET_TYPE = 4 ;
const entry = {
displayName : 'My Fileset' ,
description : 'This fileset consists of ....' ,
gcsFilesetSpec : { filePatterns : [ 'gs://my_bucket/*' ]},
schema : {
columns : [
{
column : 'city' ,
description : 'City' ,
mode : 'NULLABLE' ,
type : 'STRING' ,
},
{
column : 'state' ,
description : 'State' ,
mode : 'NULLABLE' ,
type : 'STRING' ,
},
{
column : 'addresses' ,
description : 'Addresses' ,
mode : 'REPEATED' ,
subcolumns : [
{
column : 'city' ,
description : 'City' ,
mode : 'NULLABLE' ,
type : 'STRING' ,
},
{
column : 'state' ,
description : 'State' ,
mode : 'NULLABLE' ,
type : 'STRING' ,
},
],
type : 'RECORD' ,
},
],
},
type : FILESET_TYPE ,
};
// Construct the Entry request to be sent by the client.
const request = {
parent : datacatalog . entryGroupPath ( projectId , location , entryGroupId ),
entryId : entryId ,
entry : entry ,
};
// Use the client to send the API request.
const [ response ] = await datacatalog . createEntry ( request );
console . log ( `Name: ${ response . name } ` );
console . log ( `Display name: ${ response . displayName } ` );
console . log ( `Type: ${ response . type } ` );
}
createFileset ();
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
# TODO: Set these values before running the sample.
project_id = "project_id"
fileset_entry_group_id = "entry_group_id"
fileset_entry_id = "entry_id"
# For all regions available, see:
# https://cloud.google.com/data-catalog/docs/concepts/regions
location = "us-central1"
datacatalog = datacatalog_v1 . DataCatalogClient ()
# Create an Entry Group.
entry_group_obj = datacatalog_v1 . types . EntryGroup ()
entry_group_obj . display_name = "My Fileset Entry Group"
entry_group_obj . description = "This Entry Group consists of ...."
entry_group = datacatalog . create_entry_group (
parent = datacatalog_v1 . DataCatalogClient . common_location_path (
project_id , location
),
entry_group_id = fileset_entry_group_id ,
entry_group = entry_group_obj ,
)
print ( f "Created entry group: { entry_group . name } " )
# Create a Fileset Entry.
entry = datacatalog_v1 . types . Entry ()
entry . display_name = "My Fileset"
entry . description = "This fileset consists of ...."
entry . gcs_fileset_spec . file_patterns . append ( "gs://my_bucket/*.csv" )
entry . type_ = datacatalog_v1 . EntryType . FILESET
# Create the Schema, for example when you have a csv file.
entry . schema . columns . append (
datacatalog_v1 . types . ColumnSchema (
column = "first_name" ,
description = "First name" ,
mode = "REQUIRED" ,
type_ = "STRING" ,
)
)
entry . schema . columns . append (
datacatalog_v1 . types . ColumnSchema (
column = "last_name" , description = "Last name" , mode = "REQUIRED" , type_ = "STRING"
)
)
# Create the addresses parent column
addresses_column = datacatalog_v1 . types . ColumnSchema (
column = "addresses" , description = "Addresses" , mode = "REPEATED" , type_ = "RECORD"
)
# Create sub columns for the addresses parent column
addresses_column . subcolumns . append (
datacatalog_v1 . types . ColumnSchema (
column = "city" , description = "City" , mode = "NULLABLE" , type_ = "STRING"
)
)
addresses_column . subcolumns . append (
datacatalog_v1 . types . ColumnSchema (
column = "state" , description = "State" , mode = "NULLABLE" , type_ = "STRING"
)
)
entry . schema . columns . append ( addresses_column )
entry = datacatalog . create_entry (
parent = entry_group . name , entry_id = fileset_entry_id , entry = entry
)
print ( f "Created fileset entry: { entry . name } " )
REST and Command line
REST
If you don't have access to Cloud Client libraries for your language or
want to test the API using REST requests, see the following examples
and refer to the Data Catalog REST API
entryGroups.create
and
entryGroups.entries.create
documentation.
Create an entry group
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
Create a fileset within the entry group
Before using any of the request data,
make the following replacements:
project_id : Your Google Cloud project ID
entryGroupId : ID of existing entryGroup. Fileset will be create in this sntryGroup.
entryId : EntryId of the new fileset. ID must begin with a letter or underscore, contain
only English letters, numbers and underscores, and be at most 64 characters.
description : Fileset description.
displayName : The textual name for the fileset entry.
filePatterns : Must start with "gs:// bucket_name/ ".
See
File pattern requirements .
schema : Fileset schema.
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
"description": " Fileset description. ",
"displayName": " Display name ",
"gcsFilesetSpec": {
"filePatterns": [
"gs:// bucket_name/file_pattern "
]
},
"type": "FILESET",
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
"type": "FILESET",
"displayName": "My Fileset",
"description": "My Fileset description.",
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
"gcsFilesetSpec": {
"filePatterns": [
"gs://my_bucket_name/chicago_taxi_trips/csv/shard-*.csv"
]
},
"sourceSystemTimestamps": {
"createTime": "2019-10-23T23:11:26.326Z",
"updateTime": "2019-10-23T23:11:26.326Z"
},
"linkedResource": "//datacatalog.googleapis.com/projects/my_project_id/locations/us-central1/entryGroups/my_entryGroup_id/entries/my_entry_id "
}
IAM roles, permissions, and policies
Data Catalog defines entry and entry group roles to
facilitate permission management of filesets and other Data Catalog
resources.
Entry roles
Description
dataCatalog.entryOwner
Owner of a particular entry or group of entries. Permissions: datacatalog.entries.(*)
datacatalog.entryGroups.get
Applicability: Organization, project, and entryGroup level
dataCatalog.entryViewer
Can view details of entry and entryGroup. Permissions datacatalog.entries.get
datacatalog.entryGroups.get
Applicability: Organization, project, and entryGroup level
Entry group roles
Description
dataCatalog.entryGroupOwner
Owner of a particular entryGroup. Permissions: datacatalog.entryGroups.(*)
datacatalog entries.(*)
Applicability: Organization, project, and entryGroup level
dataCatalog.entryGroupCreator
Can create entryGroups within a project. The creator of an entryGroup is automatically granted the dataCatalog.entryGroupOwner role. Permissions: datacatalog.entryGroups.(get | create)
Applicability: Organization and project level
Set IAM policies
Users with datacatalog.<resource>.setIamPolicy permission
can set IAM policies on Data Catalog entry groups
and other Data Catalog resources (see
Data Catalog roles ).
Console
Navigate to the Entry group details page in the
Data Catalog UI
then use the IAM panel located on the right side to grant or
revoke permissions.
gcloud
Set the IAM policy of an entry group with
Google Cloud CLI data-catalog entry-groups set-iam-policy :
gcloud data-catalog entry-groups set-iam-policy my_entrygroup \
--location=us-central1 \
policy file
Get the IAM policy of an entry group with
Google Cloud CLI data-catalog entry-groups get-iam-policy
gcloud data-catalog entry-groups get-iam-policy my_entrygroup \
--location=us-central1
Grant entry group roles
Example 1
A company with different business contexts for its filesets
creates separate order-files and user-files entry groups:
Figure 1.
An example of how to store order data and user data in different entry groups.
The company grants users the entry group viewer role for order-files , meaning
they can only search for entries contained in that entry group. Their search
results don't return entries in user-files entry group.
Example 2
A company grants the entry group viewer role to a user only in the
project_entry_group project. The user will only be able to view
entries within that project.
Search filesets
Users can restrict the scope of search in Data Catalog by using
the type facet. type=entry_group restricts the search query to
entry groups while type=fileset searches only for filesets.
type facets can be used in conjunction with other facets, such as projectid .
gcloud
Search for entry groups in a project:
gcloud data-catalog search \
--include-project-ids= my-project
"projectid= my-project type=entry_group"
Search for all entry groups you can access:
gcloud data-catalog search \
--include-project-ids= my-project
"type=entry_group"
Search for filesets in a project:
gcloud data-catalog search \
--include-project-ids= my-project
"type=entry.fileset"
Search for filesets in a project (simplified syntax):
gcloud data-catalog search \
--include-project-ids= my-project
"type=fileset"
The
Data Catalog UI
in the Google Cloud console also provides a convenient way to search
for entry groups and Cloud Storage filesets.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
