---
title: "Manage aspects and enrich metadata \_|\_ Knowledge Catalog \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/dataplex/docs
source_metadata:
  url: https://docs.cloud.google.com/dataplex/docs/enrich-entries-metadata
  title: "Manage aspects and enrich metadata \_|\_ Knowledge Catalog \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

As of April 10, 2026, Dataplex Universal Catalog is now called Knowledge Catalog. The API, client library, CLI, and IAM names remain unchanged.
Home
Documentation
Data analytics
Knowledge Catalog
Guides
Send feedback
Manage aspects and enrich metadata
Stay organized with collections
Save and categorize content based on your preferences.
Metadata is crucial for organizing and understanding your data assets and relationships between them. For
example, regulated industries need to protect personally identifiable
information (PII) such as names, addresses, and government issued ID numbers. This
data can occur in numerous instances across distributed data systems.
Knowledge Catalog (formerly Dataplex Universal Catalog) can help you to quickly discover and catalog your distributed
data assets. You can then classify data as being PII.
By enriching data entries and entry links with meaningful context, you can make your data more
discoverable and useful. Knowledge Catalog enables context through:
Aspect type: A JSON template defining related data. For example, for
compliance information, you might have PII classification and GDPR
compliance.
Aspect: An instance of an aspect type. For example, {"pii_classification":
"confidential", "gdpr_compliant": true}. You can apply an aspect to an
entire table, an individual table column, or an entry link (with restrictions ).
Once you've classified data, you can apply data quality or access policies to
the data.
For more information, see About metadata management in
Knowledge Catalog .
Tip: If this is your first time working with Knowledge Catalog metadata,
consider following the quickstart: Add metadata to a BigQuery
table .
Aspects
Aspects let you capture metadata within entries or entry links to provide meaningful context.
You can use aspects to store:
Business metadata : Information that provides business context, such as
data classification.
Technical metadata : Technical details of entries or entry links, including the following:
For entries: details about the data asset itself, for example, its schema.
For entry links: details about the relationship between data assets, for example, join details.
Data-derived metadata : Information generated from the data itself, such
as statistics from a BigQuery table.
Aspects are considered to be parts of the entry resource and not separate
resources. When you modify an aspect, it involves modifying the entry containing
the aspect. You can use
Metadata change feeds
to receive notifications when aspects are modified.
For entries, you can specify aspects at entry-level for describing an entry, or at
column-level for describing a column in an entry. For entry links, you add aspects to the link itself.
Every aspect is an instance of an aspect type. An aspect type defines a template
for its aspects. Every aspect type contains a set of fields. When you create
aspects, you must provide values for those fields.
For a given entry or entry link, there can be at most one aspect associated with it
per aspect type. For entries, you can have multiple aspects associated with entry columns per
aspect type.
Note: You can't create or use aspects if the aspect type and the entry (or entry link) belong to different Google Cloud organizations.
Categories of aspects
Aspects are categorized into the following:
Required aspects : aspects which are mandatory upon creation of an entry or entry link.
Such aspects are defined by the entry type or entry link type. All resources
belonging to a specific type must always have all of the required aspects that
are defined by that type.
Knowledge Catalog manages the required aspects (for example, schema)
for system
entries .
Note the following:
You can associate required aspects only with entries and not with its columns.
You can't delete the required aspects from an entry or entry link.
You can read the required aspects of system entries, but can't modify
them.
Data aspects can't be required aspects.
Optional aspects : You can associate optional aspects with entries or
with entry columns. You can populate optional aspects either at the time of
entry creation, or later by updating the entry.
Note the following:
You can delete optional aspects after they have been populated.
Entry links support only required aspects.
Data aspects
Some aspects contain information derived from the underlying data of an entry,
rather than metadata about the entry. These are referred to as data aspects. For
example, the results of a data profile scan or a data quality scan contain
statistics derived from the data itself, and are therefore classified as data
aspects.
System aspect types that are data aspects include the following:
data-profile : Contains results from a data
profile scan. For more information, see About data
profiling .
data-quality-scorecard : Contains a summary of
data quality scores.
Aspect types
Aspect types are reusable resources that provide templates for aspects.
Categories of aspect types
Aspect types are categorized into custom and system aspect types.
Custom aspect types
Aspect types that you create in Knowledge Catalog are called custom aspect
types.
Note: Custom aspect types apply to entries but not to entry links.
Custom aspect types can be global or regional. You can create custom aspect
types either in a specific regional location (for example, us-central1 ) or as
a global resource. The location of an aspect type impacts the scope of its
applicability and determines which entries it can be used with:
Global aspect types : Can be used to create aspects for entries in any
region. Choose a global aspect type if you need to apply the same
structure to entries across multiple regions, as you only need to define it
once. Because the definition of a global aspect type is replicated across
all regions, this option may not be suitable if the aspect type schema
itself contains sensitive information or if strict data residency for all
metadata components is required.
Regional aspect types : Can only be used to create aspects for entries
that reside in the same region as the aspect type. For example, an aspect
type created in us-central1 can only be used with entries in
us-central1 . Choose a regional location if an aspect type is only relevant
for entries in a specific region, or to ensure that the aspect type
definition resides within the selected region, which can help meet data
sovereignty and compliance requirements. If you use regional aspect types
but need the same structure in multiple regions, you must create and manage
separate aspect type definitions in each region.
For more information, see Project and location
constraints .
System aspect types
Aspect types that Knowledge Catalog provides, uses, and manages are called
system aspect types. System aspect types are always global, therefore they can
be used in any region. System aspect types are stored in a Google-managed
project with project number 655216118709 . For example,
projects/655216118709/locations/global/aspectTypes/schema .
Each system-defined aspect type, entry type, and entry link type has its own
IAM permissions. For more information, see
IAM permissions for system aspect types, entry types, and entry link types .
System aspect types are further categorized into reusable and restricted. The
following table describes the categories of system aspect types, and the list of
aspect types that Knowledge Catalog provides for each of the categories:
Category of system aspect type
Description
Aspect types that Knowledge Catalog provides
Reusable system aspect type
You can use these aspect types to create or modify aspects.
contacts
data-profile
data-quality-scorecard
generic
overview
schema
schema-join
storage
usage
Restricted system aspect type
Knowledge Catalog manages these aspect types.
You can read aspects under these aspect types, but can't create or edit
aspects under these aspect types.
Including but not limited to:
analytics-hub
aspecttype-aspect
bigquery-dataset
bigquery-table
cloudsql-database
cloudsql-instance
cloudsql-table
entrygroup-aspect
entrytype-aspect
sensitive-data-protection-profile
storage-bucket
storage-folder
Before you begin
Before you create and manage aspect types and aspects, complete the tasks
described in this section.
Required roles
To get the permissions that
you need to create and manage aspect types and aspects,
ask your administrator to grant you the
following IAM roles on the resource:
Full set of permissions on metadata resources in Knowledge Catalog, including aspect types and data aspects:
Dataplex Catalog Admin ( roles/dataplex.catalogAdmin )
Create and manage metadata resources in Knowledge Catalog, including aspect types and data aspects:
Dataplex Catalog Editor ( roles/dataplex.catalogEditor )
Full set of permissions on custom aspect types (except for permissions to use aspect types to create or edit entries):
Dataplex Aspect Type Owner ( roles/dataplex.aspectTypeOwner )
View aspect types and IAM policies associated with them:
Dataplex Catalog Viewer ( roles/dataplex.catalogViewer )
Use aspect types to create and modify entries with the corresponding aspects:
Dataplex Aspect Type User ( roles/dataplex.aspectTypeUser )
Add aspects of some of the system aspect types, such as schema , schema-join , overview , contacts :
Dataplex Entry and EntryLink Owner ( roles/dataplex.entryOwner )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
For more information, see Knowledge Catalog IAM
roles .
Enable the API
Enable the Dataplex API in your Knowledge Catalog project. If you are using a new Google Cloud project or a project in which the BigQuery API is enabled, the Dataplex API is enabled by default.
Enable the
API
Create a custom aspect type
Console
In the Google Cloud console, go to the Knowledge Catalog Metadata types page.
Go to Metadata types
Click the Aspect types & tag templates > Custom tab.
Click Create aspect type .
In the Create aspect type window, enter the following:
Optional: In the Display name field, enter a name for the aspect
type.
In the Aspect type ID field, enter a unique ID for the aspect type.
Optional: In the Description field, enter a description for the
aspect type.
In the Location field, select a location for the aspect type.
You can't modify the location of an aspect type after you create it. To
understand the impact of choosing a global versus a regional location,
see the Custom aspect types section.
Optional: Define a template for your aspect type.
In the Template section, click Add field . In the New field section,
enter the following:
In the Name field, enter a name.
Optional: In the Display name field, enter a display name.
Optional: In the Description field, enter a description.
In the Type field, select a data type for the field. Based on your
selection, the next set of fields and options are displayed:
If you selected Text as the data type, follow these steps:
In the Text type field, select the type of text.
In the Text values field, provide a hint for the text
field. To do this, click Add value and enter the hint.
You can add multiple hints for a text field.
Click Done .
If you selected Enum as the data type, add an enum value:
Click Add an enum value .
In the Value field, enter an enum value. You can add
multiple enum values.
Click Done .
If you selected Array as the data type, in the Array item
section, define the types of items to be present in the array:
Click Add array item .
In the Name field, enter a name for the array items.
Optional: In the Display name field, enter a display name
for the array items.
Optional: In the Description field, enter a description for
the array items.
In the Type field, select a data type for the array items.
Based on your selection, the next set of fields and options
are displayed. They are similar to the options described for
the data types Text , Enum , Map , Array , and
Record elsewhere in this section.
Click Done .
If you selected Map as the data type, in the Map value
section, define the types of values to be present in the map:
Click Add map value .
In the Name field, enter a name for the map.
Optional: In the Display name field, enter a display name
for the map.
Optional: In the Description field, enter a description
for the map.
In the Type field, select a data type for the map.
Based on your selection, the next set of fields and options
are displayed. They are similar to the options described for
the data types Text , Enum , Map , Array , and
Record elsewhere in this section.
Click Done .
If you selected Record as the data type, enter the following:
In the Record ID field, enter a unique ID that other record
fields can use to refer to this record. See
the Example for using the Record ID and Record reference fields
section of this document.
Optional: If you want to add a reference to another record from
this template, use the Record reference field. You can't
modify this after you create the aspect type. See
the Example for using the Record ID and Record reference fields
section of this document.
In the Record fields section, you can define a complex object
with multiple nested fields. To do this, click
Add record field item , and specify the following:
In the Name field, enter a name for the record field.
Optional: In the Display name field, enter a display name
for the record field.
Optional: In the Description field, enter a description for
the record field.
In the Type field, select a data type.
Based on your selection, the next set of fields and options
are displayed. They are similar to the options described for
the data types Text , Enum , Map , Array , and
Record earlier in this section.
Click Done .
To make the field mandatory for an aspect of this type, select
Is required . For more information about required aspects and
optional aspects, see the categories of aspects
section of this document.
Click Done .
To add multiple fields, click Add field and repeat the previous
steps.
Optional: In the Labels section, add arbitrary labels as key-value
pairs to your resources:
Click Add label .
In the Key field, enter a key.
In the Value field, enter a value for the key.
To add more labels, click Add label and repeat the steps.
Click Save .
gcloud
To create a custom aspect type, use the gcloud dataplex aspect-types
create command .
C#
C#
Before trying this sample, follow the C# setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog C# API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using Google.Api.Gax.ResourceNames ;
using Google.Cloud.Dataplex.V1 ;
using Google.LongRunning ;
public sealed partial class GeneratedCatalogServiceClientSnippets
{
/// <summary>Snippet for CreateAspectType</summary>
/// <remarks>
/// This snippet has been automatically generated and should be regarded as a code template only.
/// It will require modifications to work:
/// - It may require correct/in-range values for request initialization.
/// - It may require specifying regional endpoints when creating the service client as shown in
/// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint.
/// </remarks>
public void CreateAspectTypeRequestObject ()
{
// Create client
CatalogServiceClient catalogServiceClient = CatalogServiceClient . Create ();
// Initialize request argument(s)
CreateAspectTypeRequest request = new CreateAspectTypeRequest
{
ParentAsLocationName = LocationName . FromProjectLocation ( "[PROJECT]" , "[LOCATION]" ),
AspectTypeId = "" ,
AspectType = new AspectType (),
ValidateOnly = false ,
};
// Make the request
Operation<AspectType , OperationMetadata > response = catalogServiceClient . CreateAspectType ( request );
// Poll until the returned long-running operation is complete
Operation<AspectType , OperationMetadata > completedResponse = response . PollUntilCompleted ();
// Retrieve the operation result
AspectType result = completedResponse . Result ;
// Or get the name of the operation
string operationName = response . Name ;
// This name can be stored, then the long-running operation retrieved later by name
Operation<AspectType , OperationMetadata > retrievedResponse = catalogServiceClient . PollOnceCreateAspectType ( operationName );
// Check if the retrieved long-running operation has completed
if ( retrievedResponse . IsCompleted )
{
// If it has completed, then access the result
AspectType retrievedResult = retrievedResponse . Result ;
}
}
}
Go
Go
Before trying this sample, follow the Go setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog Go API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
package main
import (
"context"
dataplex "cloud.google.com/go/dataplex/apiv1"
dataplexpb "cloud.google.com/go/dataplex/apiv1/dataplexpb"
)
func main () {
ctx := context . Background ()
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in:
// https://pkg.go.dev/cloud.google.com/go#hdr-Client_Options
c , err := dataplex . NewCatalogClient ( ctx )
if err != nil {
// TODO: Handle error.
}
defer c . Close ()
req := & dataplexpb . CreateAspectTypeRequest {
// TODO: Fill request struct fields.
// See https://pkg.go.dev/cloud.google.com/go/dataplex/apiv1/dataplexpb#CreateAspectTypeRequest.
}
op , err := c . CreateAspectType ( ctx , req )
if err != nil {
// TODO: Handle error.
}
resp , err := op . Wait ( ctx )
if err != nil {
// TODO: Handle error.
}
// TODO: Use resp.
_ = resp
}
Java
Java
Before trying this sample, follow the Java setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog Java API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.dataplex.v1. AspectType ;
import com.google.cloud.dataplex.v1. CatalogServiceClient ;
import com.google.cloud.dataplex.v1. CreateAspectTypeRequest ;
import com.google.cloud.dataplex.v1. LocationName ;
public class SyncCreateAspectType {
public static void main ( String [] args ) throws Exception {
syncCreateAspectType ();
}
public static void syncCreateAspectType () throws Exception {
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CatalogServiceClient catalogServiceClient = CatalogServiceClient . create ()) {
CreateAspectTypeRequest request =
CreateAspectTypeRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setAspectTypeId ( "aspectTypeId-423030675" )
. setAspectType ( AspectType . newBuilder (). build ())
. setValidateOnly ( true )
. build ();
AspectType response = catalogServiceClient . createAspectTypeAsync ( request ). get ();
}
}
}
Python
Python
Before trying this sample, follow the Python setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog Python API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_create_aspect_type ():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
aspect_type = dataplex_v1 . AspectType ()
aspect_type . metadata_template . name = "name_value"
aspect_type . metadata_template . type_ = "type__value"
request = dataplex_v1 . CreateAspectTypeRequest (
parent = "parent_value" ,
aspect_type_id = "aspect_type_id_value" ,
aspect_type = aspect_type ,
)
# Make the request
operation = client . create_aspect_type ( request = request )
print ( "Waiting for operation to complete..." )
response = operation . result ()
# Handle the response
print ( response )
Ruby
Ruby
Before trying this sample, follow the Ruby setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog Ruby API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
require "google/cloud/dataplex/v1"
##
# Snippet for the create_aspect_type call in the CatalogService service
#
# This snippet has been automatically generated and should be regarded as a code
# template only. It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in https://cloud.google.com/ruby/docs/reference.
#
# This is an auto-generated example demonstrating basic usage of
# Google::Cloud::Dataplex::V1::CatalogService::Client#create_aspect_type.
#
def create_aspect_type
# Create a client object. The client can be reused for multiple calls.
client = Google :: Cloud :: Dataplex :: V1 :: CatalogService :: Client . new
# Create a request. To set request fields, pass in keyword arguments.
request = Google :: Cloud :: Dataplex :: V1 :: CreateAspectTypeRequest . new
# Call the create_aspect_type method.
result = client . create_aspect_type request
# The returned object is of type Gapic::Operation. You can use it to
# check the status of an operation, cancel it, or wait for results.
# Here is how to wait for a response.
result . wait_until_done! timeout : 60
if result . response?
p result . response
else
puts "No response received."
end
end
REST
To create a custom aspect type, use the
aspectType.create
method.
After you create a custom aspect type, you can add aspects to entries .
Example for using the Record ID and Record reference fields
You can use the Record ID and Record reference fields for recursive
references. The following example shows how to use these fields:
Consider an aspect type called Employee , with the following fields:
Name (type: Text )
Start date (type: Date & time )
Designation (type: Text )
Current address (type: Record )
Permanent address (type: Record )
The two address fields Current address and Permanent address are of the same
data type Record . To avoid duplication, you can set the Record ID and
Record reference values when defining these fields.
When you define the field Current address , you can specify Record ID as
address-field . For Permanent address , you can specify the same value
( address-field ) for Record reference . For example:
Name (type: Text )
Start date (type: Date & time )
Designation (type: Text )
Current address (type: Record , Record ID: address-field )
Permanent address (type: Record , Record reference: address-field )
This way, you don't need to duplicate the fields of another address.
Add aspects to an entry
After you create a custom aspect type , you can create
aspects of that type. To add aspects to an entry, you must update the entry, as
aspects are stored within entries.
Note the following:
You can add aspects to an entry or to the columns of an entry.
You can edit the required aspects only for custom entries. You can't delete
the required aspects.
You can edit and delete the optional aspects for both custom entries and
system entries.
Note: When you use a CREATE OR REPLACE TABLE
statement
to replace a BigQuery table, the metadata (including aspects)
that was associated with the original table isn't applied to the new table. If
you want the metadata to persist, you can create a BigQuery
view for the table and add the metadata to the view.
Console
In the Google Cloud console, go to the Knowledge Catalog Search
page.
Go to Search
If your search platform is set to Data Catalog , in the
Choose search platform menu, select Dataplex Universal Catalog .
Search for the entry that you want to add aspects to, and click the
entry. The entry details page opens.
To add aspects to the entry, follow these steps:
Click the Details tab.
To add required aspects or optional aspects to the entry, in the
Tags & aspects section, click
add Add for the respective
category. You can't add required aspects if the entry type of the
selected entry has no required aspects defined.
Search for and select the aspect you want to add.
In the Add aspect window, enter the values for the fields.
Click Save .
To add aspects to a column of the entry, follow these steps:
On the entry details page, click the Schema tab.
Select the columns to which you want to add aspects.
Click Add aspect .
Search for and select the aspect you want to add.
In the Add aspect window, enter the values for the fields.
Click Save .
gcloud
To add aspects to an entry or to a column of an entry, use the gcloud
dataplex entries update
command .
C#
C#
Before trying this sample, follow the C# setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog C# API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using Google.Cloud.Dataplex.V1 ;
using Google.Protobuf.WellKnownTypes ;
public sealed partial class GeneratedCatalogServiceClientSnippets
{
/// <summary>Snippet for UpdateEntry</summary>
/// <remarks>
/// This snippet has been automatically generated and should be regarded as a code template only.
/// It will require modifications to work:
/// - It may require correct/in-range values for request initialization.
/// - It may require specifying regional endpoints when creating the service client as shown in
/// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint.
/// </remarks>
public void UpdateEntryRequestObject ()
{
// Create client
CatalogServiceClient catalogServiceClient = CatalogServiceClient . Create ();
// Initialize request argument(s)
UpdateEntryRequest request = new UpdateEntryRequest
{
Entry = new Entry (),
UpdateMask = new FieldMask (),
AllowMissing = false ,
DeleteMissingAspects = false ,
AspectKeys = { "" , },
};
// Make the request
Entry response = catalogServiceClient . UpdateEntry ( request );
}
}
To add aspects to the entry object, see
Aspects .
Go
Go
Before trying this sample, follow the Go setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog Go API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
package main
import (
"context"
dataplex "cloud.google.com/go/dataplex/apiv1"
dataplexpb "cloud.google.com/go/dataplex/apiv1/dataplexpb"
)
func main () {
ctx := context . Background ()
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in:
// https://pkg.go.dev/cloud.google.com/go#hdr-Client_Options
c , err := dataplex . NewCatalogClient ( ctx )
if err != nil {
// TODO: Handle error.
}
defer c . Close ()
req := & dataplexpb . UpdateEntryRequest {
// TODO: Fill request struct fields.
// See https://pkg.go.dev/cloud.google.com/go/dataplex/apiv1/dataplexpb#UpdateEntryRequest.
}
resp , err := c . UpdateEntry ( ctx , req )
if err != nil {
// TODO: Handle error.
}
// TODO: Use resp.
_ = resp
}
To add aspects to the entry object, see
Entry .
Java
Java
Before trying this sample, follow the Java setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog Java API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.dataplex.v1. Aspect ;
import com.google.cloud.dataplex.v1. CatalogServiceClient ;
import com.google.cloud.dataplex.v1. Entry ;
import com.google.cloud.dataplex.v1. EntryName ;
import com.google.cloud.dataplex.v1. EntrySource ;
import com.google.protobuf. FieldMask ;
import com.google.protobuf. Struct ;
import com.google.protobuf. Value ;
import java.util.Map ;
public class UpdateEntry {
public static void main ( String [] args ) throws Exception {
// TODO(developer): Replace these variables before running the sample.
String projectId = "MY_PROJECT_ID" ;
// Available locations: https://cloud.google.com/dataplex/docs/locations
String location = "MY_LOCATION" ;
String entryGroupId = "MY_ENTRY_GROUP_ID" ;
String entryId = "MY_ENTRY_ID" ;
Entry createdEntry = updateEntry ( projectId , location , entryGroupId , entryId );
System . out . println ( "Successfully updated entry: " + createdEntry . getName ());
}
// Method to update Entry located in projectId, location, entryGroupId and with entryId
public static Entry updateEntry (
String projectId , String location , String entryGroupId , String entryId ) throws Exception {
// Initialize client that will be used to send requests. This client only needs to be created
// once, and can be reused for multiple requests.
try ( CatalogServiceClient client = CatalogServiceClient . create ()) {
Entry entry =
Entry . newBuilder ()
. setName ( EntryName . of ( projectId , location , entryGroupId , entryId ). toString ())
. setEntrySource (
EntrySource . newBuilder ()
. setDescription ( "updated description of the entry" )
. build ())
. putAllAspects (
Map . of (
"dataplex-types.global.generic" ,
Aspect . newBuilder ()
. setAspectType (
"projects/dataplex-types/locations/global/aspectTypes/generic" )
. setData (
Struct . newBuilder ()
// "Generic" Aspect Type have fields called "type" and "system.
// The values below are a sample of possible options.
. putFields (
"type" ,
Value . newBuilder ()
. setStringValue ( "updated example value" )
. build ())
. putFields (
"system" ,
Value . newBuilder ()
. setStringValue ( "updated example system" )
. build ())
. build ())
. build ()))
. build ();
// Update mask specifies which fields will be updated.
// For more information on update masks, see: https://google.aip.dev/161
FieldMask updateMask =
FieldMask . newBuilder (). addPaths ( "aspects" ). addPaths ( "entry_source.description" ). build ();
return client . updateEntry ( entry , updateMask );
}
}
}
Python
Python
Before trying this sample, follow the Python setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog Python API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
from google.cloud import dataplex_v1
from google.protobuf import struct_pb2
def update_entry (
project_id : str , location : str , entry_group_id : str , entry_id : str
) - > dataplex_v1 . Entry :
"""Method to update Entry located in project_id, location, entry_group_id and with entry_id"""
# Initialize client that will be used to send requests across threads. This
# client only needs to be created once, and can be reused for multiple requests.
# After completing all of your requests, call the "__exit__()" method to safely
# clean up any remaining background resources. Alternatively, use the client as
# a context manager.
with dataplex_v1 . CatalogServiceClient () as client :
# The resource name of the Entry
name = f "projects/ { project_id } /locations/ { location } /entryGroups/ { entry_group_id } /entries/ { entry_id } "
entry = dataplex_v1 . Entry (
name = name ,
entry_source = dataplex_v1 . EntrySource (
description = "updated description of the entry"
),
aspects = {
"dataplex-types.global.generic" : dataplex_v1 . Aspect (
aspect_type = "projects/dataplex-types/locations/global/aspectTypes/generic" ,
data = struct_pb2 . Struct (
fields = {
# "Generic" Aspect Type have fields called "type" and "system.
# The values below are a sample of possible options.
"type" : struct_pb2 . Value (
string_value = "updated example value"
),
"system" : struct_pb2 . Value (
string_value = "updated example system"
),
}
),
)
},
)
# Update mask specifies which fields will be updated.
# For more information on update masks, see: https://google.aip.dev/161
update_mask = { "paths" : [ "aspects" , "entry_source.description" ]}
return client . update_entry ( entry = entry , update_mask = update_mask )
if __name__ == "__main__" :
# TODO(developer): Replace these variables before running the sample.
project_id = "MY_PROJECT_ID"
# Available locations: https://cloud.google.com/dataplex/docs/locations
location = "MY_LOCATION"
entry_group_id = "MY_ENTRY_GROUP_ID"
entry_id = "MY_ENTRY_ID"
updated_entry = update_entry ( project_id , location , entry_group_id , entry_id )
print ( f "Successfully updated entry: { updated_entry . name } " )
Ruby
Ruby
Before trying this sample, follow the Ruby setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog Ruby API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
require "google/cloud/dataplex/v1"
##
# Snippet for the update_entry call in the CatalogService service
#
# This snippet has been automatically generated and should be regarded as a code
# template only. It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in https://cloud.google.com/ruby/docs/reference.
#
# This is an auto-generated example demonstrating basic usage of
# Google::Cloud::Dataplex::V1::CatalogService::Client#update_entry.
#
def update_entry
# Create a client object. The client can be reused for multiple calls.
client = Google :: Cloud :: Dataplex :: V1 :: CatalogService :: Client . new
# Create a request. To set request fields, pass in keyword arguments.
request = Google :: Cloud :: Dataplex :: V1 :: UpdateEntryRequest . new
# Call the update_entry method.
result = client . update_entry request
# The returned object is of type Google::Cloud::Dataplex::V1::Entry.
p result
end
To add aspects to the entry object, see
#required_aspects= .
REST
To add aspects to an entry or to a column of an entry, use the
entry.patch
method.
Creating and using aspects in an entry where the respective aspect type and the
entry are in different Google Cloud organizations isn't supported.
Attach aspects of reusable system aspect types
You can attach aspects of reusable system aspect types to entries.
You can edit an aspect of a reusable aspect type in the Google Cloud console
depending on its structure. Aspect types that contain nested fields are not
supported for editing in Google Cloud console. You must use the gcloud
command-line tool or the REST API to attach or update aspects of this type.
Data quality scorecard
A data quality scorecard is an aspect that provides a summary of data quality,
often based on data quality scans or other processes. You can attach a data
quality scorecard to an entry to provide custom data quality information. To do
so, attach an aspect of the system-defined type data-quality-scorecard .
The data field within the data-quality-scorecard aspect can include the
following fields:
job : Optional. A record containing details about the job that generated
the scorecard.
name : The resource name of the data quality job.
runTime : The run time of the data quality job.
score : Optional. The overall data quality score. The score ranges between
[0, 100].
status : Required. The status of the data quality scorecard, indicating if
it passed or failed the quality threshold ( PASS or FAIL ).
dimensions : Optional. An array of dimension results. Each result includes:
name : The name of the dimension. This can be one of ACCURACY ,
COMPLETENESS , CONSISTENCY , FRESHNESS , UNIQUENESS , VALIDITY ,
or VOLUME , or a custom dimension name. Custom dimension names
must use uppercase letters and be 30 characters or less.
score : The overall dimension-level score, ranging from [0, 100].
status : The status of the dimension, indicating if it passed or failed
the quality threshold ( PASS or FAIL ).
columns : Optional. An array of column results. Each result includes:
name : The name of the column.
score : The overall column-level score, ranging from [0, 100].
status : The status of the column, indicating if it passed or failed
the quality threshold ( PASS or FAIL ).
dimensions : An array of dimension scores for the column. Each
dimension score includes:
name : The name of the dimension.
score : The score for the dimension, ranging from [0, 100].
status : The status of the dimension for the column, indicating if it
passed or failed the quality threshold ( PASS or FAIL ).
When you run the command to attach an aspect, it replaces any existing data for
that specific aspect. For example, if you update a scorecard that has a score of
80 with a new file showing a score of 90 , the 80 is overwritten. It does
not merge the data.
To attach a data quality scorecard, follow these steps:
gcloud
To update aspects for an entry, use the gcloud dataplex entries
update-aspects
command .
Create a JSON file ( dq-aspect.json ) with the following content.
Note: The key for the aspect map follows the format
dataplex-types.global.<ASPECT-TYPE> .
{
"dataplex-types.global.data-quality-scorecard" : {
"data" : {
"score" : 0.8 ,
"status" : "PASS" ,
"dimensions" : [
{
"name" : "completeness" ,
"score" : 0.9 ,
"status" : "PASS"
},
{
"name" : "uniqueness" ,
"score" : 0.7 ,
"status" : "FAIL"
}
],
"columns" : [
{
"name" : "col1" ,
"score" : 0.85 ,
"status" : "PASS"
}
]
}
}
}
}
Run the following command:
gcloud dataplex entries update-aspects ENTRY_ID
--location= LOCATION
--entry-group= ENTRY_GROUP_ID
--project= PROJECT_ID
--aspects=dq-aspect.json
Replace the following variables:
ENTRY_ID : the ID of the entry—for example,
example-entry
LOCATION : the location of the entry—for example,
us-central1
ENTRY_GROUP_ID : the ID of the entry group—for
example, example-entry-group
PROJECT_ID : the ID of the project—for example,
example-project
REST
To update aspects for an entry, use the
entry.patch
method.
Create a file named payload.json and paste the JSON content from your
request into it.
{
"aspects" : {
"dataplex-types.global.data-quality-scorecard" : {
"data" : {
"score" : 80 ,
"status" : "PASS" ,
"dimensions" : [
{
"name" : "completeness" ,
"score" : 90 ,
"status" : "PASS"
},
{
"name" : "uniqueness" ,
"score" : 70 ,
"status" : "FAIL"
}
],
"columns" : [
{
"name" : "col1" ,
"score" : 85 ,
"status" : "PASS"
}
]
}
}
}
}
Run this command in your terminal:
curl -X PATCH \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
-H "Content-Type: application/json" \
-d @payload.json \
"https://dataplex.googleapis.com/v1/projects/<var>PROJECT_ID</var>/locations/<var>LOCATION</var>/entryGroups/<var>ENTRY_GROUP_ID</var>/entries/<var>ENTRY_ID</var>?updateMask=aspects"
Replace the following:
PROJECT_ID : the ID of the project—for example, example-project
LOCATION : the location of the entry—for example, us-central1
ENTRY_GROUP_ID : the ID of the entry group—for example, example-entry-group
ENTRY_ID : the ID of the entry—for example, example-entry
Other reusable aspect types
The following system aspect types are also available for use. You can attach
them using the same gcloud or REST API methods as shown for the data quality
scorecard . For aspect types without nested fields, for
example, generic , you can use the console.
Contacts. Use the contacts aspect type to assign ownership or
stewardship. The fields include the following:
identities (array): A list of contacts. Each contact includes:
role (string): The role of the contact (for example, owner ,
steward , producer , or admin ).
name (string): The name of the contact.
id (string): The email address or ID of the contact.
Create the payload.json file as follows:
{
"aspects" : {
"dataplex-types.global.contacts" : {
"data" : {
"identities" : [
{
"role" : "steward" ,
"name" : "Jane Doe" ,
"id" : "jane.doe@example.com"
}
]
}
}
}
}
Data profile. Use the data-profile aspect type to capture data
profiling results. For more information, see About data
profiling .
The fields include the following:
sourceDataInfo (record): Information about the source data scanned to
generate the profile.
scope (enum): The scope of the profile ( PREVIEW , SAMPLED , or
ALL ). The PREVIEW value corresponds to results from a
Lightweight profiling scan .
scannedRows (int): The number of rows scanned.
samplingPercentage (double): The sampling percentage used.
fields (map): A map of column names to their data profiles, including
metrics such as uniqueness , nullness , topN values, and type-specific
statistics for numeric , string , datetime , and array columns.
Create the payload.json file as follows:
{
"aspects" : {
"dataplex-types.global.data-profile" : {
"data" : {
"sourceDataInfo" : {
"scope" : "ALL" ,
"scannedRows" : 100
},
"fields" : {
"col1" : {
"nullness" : 0.0 ,
"uniqueness" : 0.1 ,
"string" : {
"length" : {
"min" : 1 ,
"max" : 20 ,
"avg" : 12.54
}
}
}
}
}
}
}}
Generic. Use the generic aspect type for generic entry information.
The fields include the following:
type (string): A freeform field to store a user-specified type.
system (string): The system of the custom entry.
Create the payload.json file as follows:
{
"aspects" : {
"dataplex-types.global.generic" : {
"data" : {
"type" : "custom-type" ,
"system" : "custom-system"
}
}
}
}
Overview. Use the overview aspect type to provide a rich text
description. The fields include the following:
content (string): The entry overview, which supports HTML format.
links (array): A list of source system links. Each link includes:
url (string): The URL of the link.
title (string): The title of the link.
Create the payload.json file as follows:
{
"aspects" : {
"dataplex-types.global.overview" : {
"data" : {
"content" : "This is a <b>rich text</b> description." ,
"links" : [
{
"url" : "https://example.com" ,
"title" : "Example Link"
}
]
}
}
}}
Schema. Use the schema aspect type to describe the structure of data.
fields (array): A list of schema fields. The fields include the
following:
name (string): The name of the field.
dataType (string): The data type of the field.
metadataType (enum): The metadata type (for example, STRING ,
BOOLEAN ).
mode (enum): The mode of the field ( NULLABLE , REQUIRED ,
REPEATED ).
description (string): A description of the field.
Create the payload.json file as follows:
{
"aspects" : {
"dataplex-types.global.schema" : {
"data" : {
"fields" : [
{
"name" : "id" ,
"dataType" : "string" ,
"metadataType" : "STRING" ,
"mode" : "REQUIRED"
}
]
}
}
}}
Usage. Use the usage aspect type to track usage metrics. The fields
include the following:
metrics (array): A list of usage metrics. Each metric includes:
name (string): The name of the metric (for example, views ,
reads ).
timeSeries (array): A list of time series data. Each item
includes:
interval (string): The aggregation interval (for example,
30d ).
value (integer): The aggregated value.
refreshTime (datetime): The time when the metrics were last refreshed.
Create the payload.json file as follows:
{
"aspects" : {
"dataplex-types.global.usage" : {
"data" : {
"metrics" : [
{
"name" : "views" ,
"timeSeries" : [
{
"interval" : "30d" ,
"value" : 100
}
]
}
],
"refreshTime" : "2025-01-01T12:00:00Z"
}
}
}}
Add aspects to an entry link
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
To enrich metadata with information about relationships between the entries, add aspects to entry links.
You can configure entry link types to require specific aspect. When you create an entry link of such type, you must provide the required aspect.
Create aspects for entry links
Aspects on entry links are managed as part of the EntryLink resource.
Note the following limitations for using aspects with entry links:
Optional aspects aren't supported.
Data aspects are not supported.
Aspects of custom types aren't supported.
You can only manage required aspects defined by system aspect types, for example, schema-join .
Searching for entry links based on the content of their aspects isn't supported.
Importing or exporting entry link aspects isn't supported.
REST
To create an entry link with the required aspect, use the entryLinks.create method, including the aspect data in the request body.
Manage existing aspects for an entry
This section describes how to update and delete the existing aspects for an
entry.
Update an aspect
You can edit the optional aspects for both custom entries and system entries.
You can edit the required aspects only for custom entries.
For first-party (1P) system entries, such as BigQuery tables, you can update aspects using the modifyEntry API. This lets you use the source system's metadata update permissions (for example, BigQueryData Editor).
Console
In the Google Cloud console, go to the Knowledge Catalog Search
page.
Go to Search
If your search platform is set to Data Catalog , in the
Choose search platform menu, select Dataplex Universal Catalog .
Search for the entry whose aspects you want to update, and click the
entry.
The entry details page opens.
Click the Details tab.
In the Tags & aspects section, expand the aspect or tag that you
want to update, and click edit
Edit .
In the Edit aspect window, update the required fields.
Click Save .
gcloud
To update aspects for an entry or a column of an entry, use the gcloud
dataplex entries update
command .
C#
C#
Before trying this sample, follow the C# setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog C# API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using Google.Cloud.Dataplex.V1 ;
using Google.Protobuf.WellKnownTypes ;
public sealed partial class GeneratedCatalogServiceClientSnippets
{
/// <summary>Snippet for UpdateEntry</summary>
/// <remarks>
/// This snippet has been automatically generated and should be regarded as a code template only.
/// It will require modifications to work:
/// - It may require correct/in-range values for request initialization.
/// - It may require specifying regional endpoints when creating the service client as shown in
/// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint.
/// </remarks>
public void UpdateEntryRequestObject ()
{
// Create client
CatalogServiceClient catalogServiceClient = CatalogServiceClient . Create ();
// Initialize request argument(s)
UpdateEntryRequest request = new UpdateEntryRequest
{
Entry = new Entry (),
UpdateMask = new FieldMask (),
AllowMissing = false ,
DeleteMissingAspects = false ,
AspectKeys = { "" , },
};
// Make the request
Entry response = catalogServiceClient . UpdateEntry ( request );
}
}
Go
Go
Before trying this sample, follow the Go setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog Go API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
package main
import (
"context"
dataplex "cloud.google.com/go/dataplex/apiv1"
dataplexpb "cloud.google.com/go/dataplex/apiv1/dataplexpb"
)
func main () {
ctx := context . Background ()
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in:
// https://pkg.go.dev/cloud.google.com/go#hdr-Client_Options
c , err := dataplex . NewCatalogClient ( ctx )
if err != nil {
// TODO: Handle error.
}
defer c . Close ()
req := & dataplexpb . UpdateEntryRequest {
// TODO: Fill request struct fields.
// See https://pkg.go.dev/cloud.google.com/go/dataplex/apiv1/dataplexpb#UpdateEntryRequest.
}
resp , err := c . UpdateEntry ( ctx , req )
if err != nil {
// TODO: Handle error.
}
// TODO: Use resp.
_ = resp
}
Java
Java
Before trying this sample, follow the Java setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog Java API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.dataplex.v1. CatalogServiceClient ;
import com.google.cloud.dataplex.v1. Entry ;
import com.google.cloud.dataplex.v1. UpdateEntryRequest ;
import com.google.protobuf. FieldMask ;
import java.util.ArrayList ;
public class SyncUpdateEntry {
public static void main ( String [] args ) throws Exception {
syncUpdateEntry ();
}
public static void syncUpdateEntry () throws Exception {
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CatalogServiceClient catalogServiceClient = CatalogServiceClient . create ()) {
UpdateEntryRequest request =
UpdateEntryRequest . newBuilder ()
. setEntry ( Entry . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. setAllowMissing ( true )
. setDeleteMissingAspects ( true )
. addAllAspectKeys ( new ArrayList<String> ())
. build ();
Entry response = catalogServiceClient . updateEntry ( request );
}
}
}
Python
Python
Before trying this sample, follow the Python setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog Python API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_update_entry ():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
entry = dataplex_v1 . Entry ()
entry . entry_type = "entry_type_value"
request = dataplex_v1 . UpdateEntryRequest (
entry = entry ,
)
# Make the request
response = client . update_entry ( request = request )
# Handle the response
print ( response )
Ruby
Ruby
Before trying this sample, follow the Ruby setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog Ruby API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
require "google/cloud/dataplex/v1"
##
# Snippet for the update_entry call in the CatalogService service
#
# This snippet has been automatically generated and should be regarded as a code
# template only. It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in https://cloud.google.com/ruby/docs/reference.
#
# This is an auto-generated example demonstrating basic usage of
# Google::Cloud::Dataplex::V1::CatalogService::Client#update_entry.
#
def update_entry
# Create a client object. The client can be reused for multiple calls.
client = Google :: Cloud :: Dataplex :: V1 :: CatalogService :: Client . new
# Create a request. To set request fields, pass in keyword arguments.
request = Google :: Cloud :: Dataplex :: V1 :: UpdateEntryRequest . new
# Call the update_entry method.
result = client . update_entry request
# The returned object is of type Google::Cloud::Dataplex::V1::Entry.
p result
end
REST
To update aspects for an entry or a column of an entry, use the
entry.patch
method.
Delete an aspect
Note: You can delete the optional aspects for an entry, but not the required
aspects.
Console
In the Google Cloud console, go to the Knowledge Catalog Search
page.
Go to Search
If your search platform is set to Data Catalog , in the
Choose search platform menu, select Dataplex Universal Catalog .
Search for the entry whose aspects you want to delete, and click the
entry.
The entry details page opens.
Click the Details tab.
In the Tags & aspects section, expand the aspect or tag that you
want to delete, click delete
Delete .
Click Confirm .
gcloud
To delete an aspect for an entry, use the gcloud dataplex entries update
command .
C#
C#
Before trying this sample, follow the C# setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog C# API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using Google.Cloud.Dataplex.V1 ;
using Google.Protobuf.WellKnownTypes ;
public sealed partial class GeneratedCatalogServiceClientSnippets
{
/// <summary>Snippet for UpdateEntry</summary>
/// <remarks>
/// This snippet has been automatically generated and should be regarded as a code template only.
/// It will require modifications to work:
/// - It may require correct/in-range values for request initialization.
/// - It may require specifying regional endpoints when creating the service client as shown in
/// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint.
/// </remarks>
public void UpdateEntryRequestObject ()
{
// Create client
CatalogServiceClient catalogServiceClient = CatalogServiceClient . Create ();
// Initialize request argument(s)
UpdateEntryRequest request = new UpdateEntryRequest
{
Entry = new Entry (),
UpdateMask = new FieldMask (),
AllowMissing = false ,
DeleteMissingAspects = false ,
AspectKeys = { "" , },
};
// Make the request
Entry response = catalogServiceClient . UpdateEntry ( request );
}
}
Go
Go
Before trying this sample, follow the Go setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog Go API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
package main
import (
"context"
dataplex "cloud.google.com/go/dataplex/apiv1"
dataplexpb "cloud.google.com/go/dataplex/apiv1/dataplexpb"
)
func main () {
ctx := context . Background ()
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in:
// https://pkg.go.dev/cloud.google.com/go#hdr-Client_Options
c , err := dataplex . NewCatalogClient ( ctx )
if err != nil {
// TODO: Handle error.
}
defer c . Close ()
req := & dataplexpb . UpdateEntryRequest {
// TODO: Fill request struct fields.
// See https://pkg.go.dev/cloud.google.com/go/dataplex/apiv1/dataplexpb#UpdateEntryRequest.
}
resp , err := c . UpdateEntry ( ctx , req )
if err != nil {
// TODO: Handle error.
}
// TODO: Use resp.
_ = resp
}
Java
Java
Before trying this sample, follow the Java setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog Java API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.dataplex.v1. CatalogServiceClient ;
import com.google.cloud.dataplex.v1. Entry ;
import com.google.cloud.dataplex.v1. UpdateEntryRequest ;
import com.google.protobuf. FieldMask ;
import java.util.ArrayList ;
public class SyncUpdateEntry {
public static void main ( String [] args ) throws Exception {
syncUpdateEntry ();
}
public static void syncUpdateEntry () throws Exception {
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CatalogServiceClient catalogServiceClient = CatalogServiceClient . create ()) {
UpdateEntryRequest request =
UpdateEntryRequest . newBuilder ()
. setEntry ( Entry . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. setAllowMissing ( true )
. setDeleteMissingAspects ( true )
. addAllAspectKeys ( new ArrayList<String> ())
. build ();
Entry response = catalogServiceClient . updateEntry ( request );
}
}
}
Python
Python
Before trying this sample, follow the Python setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog Python API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_update_entry ():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
entry = dataplex_v1 . Entry ()
entry . entry_type = "entry_type_value"
request = dataplex_v1 . UpdateEntryRequest (
entry = entry ,
)
# Make the request
response = client . update_entry ( request = request )
# Handle the response
print ( response )
Ruby
Ruby
Before trying this sample, follow the Ruby setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog Ruby API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
require "google/cloud/dataplex/v1"
##
# Snippet for the update_entry call in the CatalogService service
#
# This snippet has been automatically generated and should be regarded as a code
# template only. It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in https://cloud.google.com/ruby/docs/reference.
#
# This is an auto-generated example demonstrating basic usage of
# Google::Cloud::Dataplex::V1::CatalogService::Client#update_entry.
#
def update_entry
# Create a client object. The client can be reused for multiple calls.
client = Google :: Cloud :: Dataplex :: V1 :: CatalogService :: Client . new
# Create a request. To set request fields, pass in keyword arguments.
request = Google :: Cloud :: Dataplex :: V1 :: UpdateEntryRequest . new
# Call the update_entry method.
result = client . update_entry request
# The returned object is of type Google::Cloud::Dataplex::V1::Entry.
p result
end
REST
To delete an aspect for an entry, use the
entry.patch
method.
Manage existing aspects for an entry link
This section describes how to update the existing aspects for an entry link.
Update an aspect
For entry links, you can only update required aspects that use reusable system aspect types.
For more information, see IAM permissions for entry links operations .
Note: Entry links support system aspect types, but not custom aspect types.
REST
To update an entry link with the required aspect, use the entryLinks.patch method, including the aspect data in the request body.
Delete an aspect
You can't delete required aspect for an entry link.
Manage aspect types
This section describes how to view aspect types, and update and delete custom
aspect types.
Note: You can't edit, delete, or modify permissions for system aspect types.
View the list of available aspect types and tag templates
Console
In the Google Cloud console, go to the Knowledge Catalog Metadata types
page.
Go to Metadata types
Click the Aspect types & tag templates tab.
This page lists all the available Knowledge Catalog aspect types and
Data Catalog tag templates.
To view custom aspect types and tag templates, click the
Custom tab. In the Custom tab, the Catalog source column
displays where the resource resides—Knowledge Catalog or
Data Catalog.
To view system aspect types, click the System tab.
For more information about custom and system aspect types, see the
categories of aspect types section of this
document.
Optional: To view the list of aspect types and tag templates in your
selected project, click the Custom tab, and then click the
Show from all projects toggle to the off position.
The Show from all projects toggle is on by default, and the list
includes Knowledge Catalog resources from your selected organization
and Data Catalog resources from all the organizations that you can
access.
Note: If the Show from all projects toggle is on, you can't edit or
delete an aspect type directly. Instead, click the aspect type to open the
Aspect type details page, and then edit or delete it.
gcloud
To list all the available aspect types, use the gcloud dataplex
aspect-types list
command .
C#
C#
Before trying this sample, follow the C# setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog C# API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using Google.Api.Gax ;
using Google.Api.Gax.ResourceNames ;
using Google.Cloud.Dataplex.V1 ;
using System ;
public sealed partial class GeneratedCatalogServiceClientSnippets
{
/// <summary>Snippet for ListAspectTypes</summary>
/// <remarks>
/// This snippet has been automatically generated and should be regarded as a code template only.
/// It will require modifications to work:
/// - It may require correct/in-range values for request initialization.
/// - It may require specifying regional endpoints when creating the service client as shown in
/// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint.
/// </remarks>
public void ListAspectTypesRequestObject ()
{
// Create client
CatalogServiceClient catalogServiceClient = CatalogServiceClient . Create ();
// Initialize request argument(s)
ListAspectTypesRequest request = new ListAspectTypesRequest
{
ParentAsLocationName = LocationName . FromProjectLocation ( "[PROJECT]" , "[LOCATION]" ),
Filter = "" ,
OrderBy = "" ,
};
// Make the request
PagedEnumerable<ListAspectTypesResponse , AspectType > response = catalogServiceClient . ListAspectTypes ( request );
// Iterate over all response items, lazily performing RPCs as required
foreach ( AspectType item in response )
{
// Do something with each item
Console . WriteLine ( item );
}
// Or iterate over pages (of server-defined size), performing one RPC per page
foreach ( ListAspectTypesResponse page in response . AsRawResponses ())
{
// Do something with each page of items
Console . WriteLine ( "A page of results:" );
foreach ( AspectType item in page )
{
// Do something with each item
Console . WriteLine ( item );
}
}
// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10 ;
Page<AspectType> singlePage = response . ReadPage ( pageSize );
// Do something with the page of items
Console . WriteLine ( $"A page of {pageSize} results (unless it's the final page):" );
foreach ( AspectType item in singlePage )
{
// Do something with each item
Console . WriteLine ( item );
}
// Store the pageToken, for when the next page is required.
string nextPageToken = singlePage . NextPageToken ;
}
}
Go
Go
Before trying this sample, follow the Go setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog Go API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
package main
import (
"context"
dataplex "cloud.google.com/go/dataplex/apiv1"
dataplexpb "cloud.google.com/go/dataplex/apiv1/dataplexpb"
"google.golang.org/api/iterator"
)
func main () {
ctx := context . Background ()
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in:
// https://pkg.go.dev/cloud.google.com/go#hdr-Client_Options
c , err := dataplex . NewCatalogClient ( ctx )
if err != nil {
// TODO: Handle error.
}
defer c . Close ()
req := & dataplexpb . ListAspectTypesRequest {
// TODO: Fill request struct fields.
// See https://pkg.go.dev/cloud.google.com/go/dataplex/apiv1/dataplexpb#ListAspectTypesRequest.
}
it := c . ListAspectTypes ( ctx , req )
for {
resp , err := it . Next ()
if err == iterator . Done {
break
}
if err != nil {
// TODO: Handle error.
}
// TODO: Use resp.
_ = resp
// If you need to access the underlying RPC response,
// you can do so by casting the `Response` as below.
// Otherwise, remove this line. Only populated after
// first call to Next(). Not safe for concurrent access.
_ = it . Response .( * dataplexpb . ListAspectTypesResponse )
}
}
Java
Java
Before trying this sample, follow the Java setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog Java API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.dataplex.v1. AspectType ;
import com.google.cloud.dataplex.v1. CatalogServiceClient ;
import com.google.cloud.dataplex.v1. ListAspectTypesRequest ;
import com.google.cloud.dataplex.v1. LocationName ;
public class SyncListAspectTypes {
public static void main ( String [] args ) throws Exception {
syncListAspectTypes ();
}
public static void syncListAspectTypes () throws Exception {
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CatalogServiceClient catalogServiceClient = CatalogServiceClient . create ()) {
ListAspectTypesRequest request =
ListAspectTypesRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setFilter ( "filter-1274492040" )
. setOrderBy ( "orderBy-1207110587" )
. build ();
for ( AspectType element : catalogServiceClient . listAspectTypes ( request ). iterateAll ()) {
// doThingsWith(element);
}
}
}
}
Python
Python
Before trying this sample, follow the Python setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog Python API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_list_aspect_types ():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . ListAspectTypesRequest (
parent = "parent_value" ,
)
# Make the request
page_result = client . list_aspect_types ( request = request )
# Handle the response
for response in page_result :
print ( response )
Ruby
Ruby
Before trying this sample, follow the Ruby setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog Ruby API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
require "google/cloud/dataplex/v1"
##
# Snippet for the list_aspect_types call in the CatalogService service
#
# This snippet has been automatically generated and should be regarded as a code
# template only. It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in https://cloud.google.com/ruby/docs/reference.
#
# This is an auto-generated example demonstrating basic usage of
# Google::Cloud::Dataplex::V1::CatalogService::Client#list_aspect_types.
#
def list_aspect_types
# Create a client object. The client can be reused for multiple calls.
client = Google :: Cloud :: Dataplex :: V1 :: CatalogService :: Client . new
# Create a request. To set request fields, pass in keyword arguments.
request = Google :: Cloud :: Dataplex :: V1 :: ListAspectTypesRequest . new
# Call the list_aspect_types method.
result = client . list_aspect_types request
# The returned object is of type Gapic::PagedEnumerable. You can iterate
# over elements, and API calls will be issued to fetch pages as needed.
result . each do | item |
# Each element is of type ::Google::Cloud::Dataplex::V1::AspectType.
p item
end
end
REST
To list all the available aspect types, use the
aspectTypes.list
method.
View details of an aspect type or tag template
Console
In the Google Cloud console, go to the Knowledge Catalog Metadata types
page.
Go to Metadata types
Click the Aspect types & tag templates tab.
To view the details of a Knowledge Catalog aspect type, click the
aspect type. The aspect type details page opens, where you can access
details, such as display name, aspect type ID, description, project ID,
location, labels, creation date, and last modified date.
To view the structure of the selected aspect type, click the
Template tab.
To view the list of 10 related entries created recently, click the
Sample entries tab.
To search for all related entries, click
Show all related entries in Search . This button appears only if
there's at least one related entry.
To view the details of a Data Catalog tag template, click the
tag template. The tag template details page opens in
Data Catalog, where you can access details, such as display
name, template ID, project ID, location, visibility, and labels.
gcloud
To get the details of an aspect type, use the gcloud dataplex aspect-types
describe command .
C#
C#
Before trying this sample, follow the C# setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog C# API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using Google.Cloud.Dataplex.V1 ;
public sealed partial class GeneratedCatalogServiceClientSnippets
{
/// <summary>Snippet for GetAspectType</summary>
/// <remarks>
/// This snippet has been automatically generated and should be regarded as a code template only.
/// It will require modifications to work:
/// - It may require correct/in-range values for request initialization.
/// - It may require specifying regional endpoints when creating the service client as shown in
/// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint.
/// </remarks>
public void GetAspectTypeRequestObject ()
{
// Create client
CatalogServiceClient catalogServiceClient = CatalogServiceClient . Create ();
// Initialize request argument(s)
GetAspectTypeRequest request = new GetAspectTypeRequest
{
AspectTypeName = AspectTypeName . FromProjectLocationAspectType ( "[PROJECT]" , "[LOCATION]" , "[ASPECT_TYPE]" ),
};
// Make the request
AspectType response = catalogServiceClient . GetAspectType ( request );
}
}
Go
Go
Before trying this sample, follow the Go setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog Go API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
package main
import (
"context"
dataplex "cloud.google.com/go/dataplex/apiv1"
dataplexpb "cloud.google.com/go/dataplex/apiv1/dataplexpb"
)
func main () {
ctx := context . Background ()
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in:
// https://pkg.go.dev/cloud.google.com/go#hdr-Client_Options
c , err := dataplex . NewCatalogClient ( ctx )
if err != nil {
// TODO: Handle error.
}
defer c . Close ()
req := & dataplexpb . GetAspectTypeRequest {
// TODO: Fill request struct fields.
// See https://pkg.go.dev/cloud.google.com/go/dataplex/apiv1/dataplexpb#GetAspectTypeRequest.
}
resp , err := c . GetAspectType ( ctx , req )
if err != nil {
// TODO: Handle error.
}
// TODO: Use resp.
_ = resp
}
Java
Java
Before trying this sample, follow the Java setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog Java API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.dataplex.v1. AspectType ;
import com.google.cloud.dataplex.v1. AspectTypeName ;
import com.google.cloud.dataplex.v1. CatalogServiceClient ;
import com.google.cloud.dataplex.v1. GetAspectTypeRequest ;
public class SyncGetAspectType {
public static void main ( String [] args ) throws Exception {
syncGetAspectType ();
}
public static void syncGetAspectType () throws Exception {
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CatalogServiceClient catalogServiceClient = CatalogServiceClient . create ()) {
GetAspectTypeRequest request =
GetAspectTypeRequest . newBuilder ()
. setName ( AspectTypeName . of ( "[PROJECT]" , "[LOCATION]" , "[ASPECT_TYPE]" ). toString ())
. build ();
AspectType response = catalogServiceClient . getAspectType ( request );
}
}
}
Python
Python
Before trying this sample, follow the Python setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog Python API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_get_aspect_type ():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . GetAspectTypeRequest (
name = "name_value" ,
)
# Make the request
response = client . get_aspect_type ( request = request )
# Handle the response
print ( response )
Ruby
Ruby
Before trying this sample, follow the Ruby setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog Ruby API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
require "google/cloud/dataplex/v1"
##
# Snippet for the get_aspect_type call in the CatalogService service
#
# This snippet has been automatically generated and should be regarded as a code
# template only. It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in https://cloud.google.com/ruby/docs/reference.
#
# This is an auto-generated example demonstrating basic usage of
# Google::Cloud::Dataplex::V1::CatalogService::Client#get_aspect_type.
#
def get_aspect_type
# Create a client object. The client can be reused for multiple calls.
client = Google :: Cloud :: Dataplex :: V1 :: CatalogService :: Client . new
# Create a request. To set request fields, pass in keyword arguments.
request = Google :: Cloud :: Dataplex :: V1 :: GetAspectTypeRequest . new
# Call the get_aspect_type method.
result = client . get_aspect_type request
# The returned object is of type Google::Cloud::Dataplex::V1::AspectType.
p result
end
REST
To get the details of an aspect type, use the
aspectTypes.get
method.
Update a custom aspect type
You can update the display name, description, template fields, and labels of a
custom aspect type. You can't delete an existing field in a template.
You can't update the aspect type ID and location after you create the aspect
type.
Console
In the Google Cloud console, go to the Knowledge Catalog Metadata types
page.
Go to Metadata types
Click the Aspect types & tag templates tab.
Click the aspect type that you want to update.
On the Aspect type details page, click Edit .
Edit the display name, description, template fields, and labels, as
required.
Optional: To mark a field in the aspect type as deprecated, follow these
steps:
In the Template section, expand the field.
Select Is Deprecated .
In the Deprecation reason field, enter a reason for deprecating
the selected field.
Click Done .
Click Save .
gcloud
To update a custom aspect type, use the gcloud dataplex aspect-types
update command .
C#
C#
Before trying this sample, follow the C# setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog C# API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using Google.Cloud.Dataplex.V1 ;
using Google.LongRunning ;
using Google.Protobuf.WellKnownTypes ;
public sealed partial class GeneratedCatalogServiceClientSnippets
{
/// <summary>Snippet for UpdateAspectType</summary>
/// <remarks>
/// This snippet has been automatically generated and should be regarded as a code template only.
/// It will require modifications to work:
/// - It may require correct/in-range values for request initialization.
/// - It may require specifying regional endpoints when creating the service client as shown in
/// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint.
/// </remarks>
public void UpdateAspectTypeRequestObject ()
{
// Create client
CatalogServiceClient catalogServiceClient = CatalogServiceClient . Create ();
// Initialize request argument(s)
UpdateAspectTypeRequest request = new UpdateAspectTypeRequest
{
AspectType = new AspectType (),
UpdateMask = new FieldMask (),
ValidateOnly = false ,
};
// Make the request
Operation<AspectType , OperationMetadata > response = catalogServiceClient . UpdateAspectType ( request );
// Poll until the returned long-running operation is complete
Operation<AspectType , OperationMetadata > completedResponse = response . PollUntilCompleted ();
// Retrieve the operation result
AspectType result = completedResponse . Result ;
// Or get the name of the operation
string operationName = response . Name ;
// This name can be stored, then the long-running operation retrieved later by name
Operation<AspectType , OperationMetadata > retrievedResponse = catalogServiceClient . PollOnceUpdateAspectType ( operationName );
// Check if the retrieved long-running operation has completed
if ( retrievedResponse . IsCompleted )
{
// If it has completed, then access the result
AspectType retrievedResult = retrievedResponse . Result ;
}
}
}
Go
Go
Before trying this sample, follow the Go setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog Go API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
package main
import (
"context"
dataplex "cloud.google.com/go/dataplex/apiv1"
dataplexpb "cloud.google.com/go/dataplex/apiv1/dataplexpb"
)
func main () {
ctx := context . Background ()
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in:
// https://pkg.go.dev/cloud.google.com/go#hdr-Client_Options
c , err := dataplex . NewCatalogClient ( ctx )
if err != nil {
// TODO: Handle error.
}
defer c . Close ()
req := & dataplexpb . UpdateAspectTypeRequest {
// TODO: Fill request struct fields.
// See https://pkg.go.dev/cloud.google.com/go/dataplex/apiv1/dataplexpb#UpdateAspectTypeRequest.
}
op , err := c . UpdateAspectType ( ctx , req )
if err != nil {
// TODO: Handle error.
}
resp , err := op . Wait ( ctx )
if err != nil {
// TODO: Handle error.
}
// TODO: Use resp.
_ = resp
}
Java
Java
Before trying this sample, follow the Java setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog Java API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.dataplex.v1. AspectType ;
import com.google.cloud.dataplex.v1. CatalogServiceClient ;
import com.google.cloud.dataplex.v1. UpdateAspectTypeRequest ;
import com.google.protobuf. FieldMask ;
public class SyncUpdateAspectType {
public static void main ( String [] args ) throws Exception {
syncUpdateAspectType ();
}
public static void syncUpdateAspectType () throws Exception {
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CatalogServiceClient catalogServiceClient = CatalogServiceClient . create ()) {
UpdateAspectTypeRequest request =
UpdateAspectTypeRequest . newBuilder ()
. setAspectType ( AspectType . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. setValidateOnly ( true )
. build ();
AspectType response = catalogServiceClient . updateAspectTypeAsync ( request ). get ();
}
}
}
Python
Python
Before trying this sample, follow the Python setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog Python API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_update_aspect_type ():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
aspect_type = dataplex_v1 . AspectType ()
aspect_type . metadata_template . name = "name_value"
aspect_type . metadata_template . type_ = "type__value"
request = dataplex_v1 . UpdateAspectTypeRequest (
aspect_type = aspect_type ,
)
# Make the request
operation = client . update_aspect_type ( request = request )
print ( "Waiting for operation to complete..." )
response = operation . result ()
# Handle the response
print ( response )
Ruby
Ruby
Before trying this sample, follow the Ruby setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog Ruby API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
require "google/cloud/dataplex/v1"
##
# Snippet for the update_aspect_type call in the CatalogService service
#
# This snippet has been automatically generated and should be regarded as a code
# template only. It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in https://cloud.google.com/ruby/docs/reference.
#
# This is an auto-generated example demonstrating basic usage of
# Google::Cloud::Dataplex::V1::CatalogService::Client#update_aspect_type.
#
def update_aspect_type
# Create a client object. The client can be reused for multiple calls.
client = Google :: Cloud :: Dataplex :: V1 :: CatalogService :: Client . new
# Create a request. To set request fields, pass in keyword arguments.
request = Google :: Cloud :: Dataplex :: V1 :: UpdateAspectTypeRequest . new
# Call the update_aspect_type method.
result = client . update_aspect_type request
# The returned object is of type Gapic::Operation. You can use it to
# check the status of an operation, cancel it, or wait for results.
# Here is how to wait for a response.
result . wait_until_done! timeout : 60
if result . response?
p result . response
else
puts "No response received."
end
end
REST
To update a custom aspect type, use the
aspectTypes.patch
method.
Delete a custom aspect type
Caution: Deleting a custom aspect type deletes all aspects related to that
aspect type across all entries.
Console
In the Google Cloud console, go to the Knowledge Catalog Metadata types
page.
Go to Metadata types
Click the Aspect types & tag templates tab.
Click the aspect type that you want to delete.
On the Aspect type details page, click Delete . Confirm when
prompted.
gcloud
To delete a custom aspect type, use the gcloud dataplex aspect-types
delete command .
C#
C#
Before trying this sample, follow the C# setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog C# API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using Google.Cloud.Dataplex.V1 ;
using Google.LongRunning ;
using Google.Protobuf.WellKnownTypes ;
public sealed partial class GeneratedCatalogServiceClientSnippets
{
/// <summary>Snippet for DeleteAspectType</summary>
/// <remarks>
/// This snippet has been automatically generated and should be regarded as a code template only.
/// It will require modifications to work:
/// - It may require correct/in-range values for request initialization.
/// - It may require specifying regional endpoints when creating the service client as shown in
/// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint.
/// </remarks>
public void DeleteAspectTypeRequestObject ()
{
// Create client
CatalogServiceClient catalogServiceClient = CatalogServiceClient . Create ();
// Initialize request argument(s)
DeleteAspectTypeRequest request = new DeleteAspectTypeRequest
{
AspectTypeName = AspectTypeName . FromProjectLocationAspectType ( "[PROJECT]" , "[LOCATION]" , "[ASPECT_TYPE]" ),
Etag = "" ,
};
// Make the request
Operation<Empty , OperationMetadata > response = catalogServiceClient . DeleteAspectType ( request );
// Poll until the returned long-running operation is complete
Operation<Empty , OperationMetadata > completedResponse = response . PollUntilCompleted ();
// Retrieve the operation result
Empty result = completedResponse . Result ;
// Or get the name of the operation
string operationName = response . Name ;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty , OperationMetadata > retrievedResponse = catalogServiceClient . PollOnceDeleteAspectType ( operationName );
// Check if the retrieved long-running operation has completed
if ( retrievedResponse . IsCompleted )
{
// If it has completed, then access the result
Empty retrievedResult = retrievedResponse . Result ;
}
}
}
Go
Go
Before trying this sample, follow the Go setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog Go API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
package main
import (
"context"
dataplex "cloud.google.com/go/dataplex/apiv1"
dataplexpb "cloud.google.com/go/dataplex/apiv1/dataplexpb"
)
func main () {
ctx := context . Background ()
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in:
// https://pkg.go.dev/cloud.google.com/go#hdr-Client_Options
c , err := dataplex . NewCatalogClient ( ctx )
if err != nil {
// TODO: Handle error.
}
defer c . Close ()
req := & dataplexpb . DeleteAspectTypeRequest {
// TODO: Fill request struct fields.
// See https://pkg.go.dev/cloud.google.com/go/dataplex/apiv1/dataplexpb#DeleteAspectTypeRequest.
}
op , err := c . DeleteAspectType ( ctx , req )
if err != nil {
// TODO: Handle error.
}
err = op . Wait ( ctx )
if err != nil {
// TODO: Handle error.
}
}
Java
Java
Before trying this sample, follow the Java setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog Java API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.dataplex.v1. AspectTypeName ;
import com.google.cloud.dataplex.v1. CatalogServiceClient ;
import com.google.cloud.dataplex.v1. DeleteAspectTypeRequest ;
import com.google.protobuf. Empty ;
public class SyncDeleteAspectType {
public static void main ( String [] args ) throws Exception {
syncDeleteAspectType ();
}
public static void syncDeleteAspectType () throws Exception {
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CatalogServiceClient catalogServiceClient = CatalogServiceClient . create ()) {
DeleteAspectTypeRequest request =
DeleteAspectTypeRequest . newBuilder ()
. setName ( AspectTypeName . of ( "[PROJECT]" , "[LOCATION]" , "[ASPECT_TYPE]" ). toString ())
. setEtag ( "etag3123477" )
. build ();
catalogServiceClient . deleteAspectTypeAsync ( request ). get ();
}
}
}
Python
Python
Before trying this sample, follow the Python setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog Python API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
# This snippet has been automatically generated and should be regarded as a
# code template only.
# It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in:
# https://googleapis.dev/python/google-api-core/latest/client_options.html
from google.cloud import dataplex_v1
def sample_delete_aspect_type ():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . DeleteAspectTypeRequest (
name = "name_value" ,
)
# Make the request
operation = client . delete_aspect_type ( request = request )
print ( "Waiting for operation to complete..." )
response = operation . result ()
# Handle the response
print ( response )
Ruby
Ruby
Before trying this sample, follow the Ruby setup instructions in the
Knowledge Catalog quickstart using
client libraries .
For more information, see the
Knowledge Catalog Ruby API
reference documentation .
To authenticate to Knowledge Catalog, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
require "google/cloud/dataplex/v1"
##
# Snippet for the delete_aspect_type call in the CatalogService service
#
# This snippet has been automatically generated and should be regarded as a code
# template only. It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in https://cloud.google.com/ruby/docs/reference.
#
# This is an auto-generated example demonstrating basic usage of
# Google::Cloud::Dataplex::V1::CatalogService::Client#delete_aspect_type.
#
def delete_aspect_type
# Create a client object. The client can be reused for multiple calls.
client = Google :: Cloud :: Dataplex :: V1 :: CatalogService :: Client . new
# Create a request. To set request fields, pass in keyword arguments.
request = Google :: Cloud :: Dataplex :: V1 :: DeleteAspectTypeRequest . new
# Call the delete_aspect_type method.
result = client . delete_aspect_type request
# The returned object is of type Gapic::Operation. You can use it to
# check the status of an operation, cancel it, or wait for results.
# Here is how to wait for a response.
result . wait_until_done! timeout : 60
if result . response?
p result . response
else
puts "No response received."
end
end
REST
To delete an existing custom aspect type, use the
aspectTypes.delete
method.
What's next
Learn how to search for resources in Knowledge Catalog .
Learn how to manage entries and ingest custom sources .
Learn how to import metadata into Knowledge Catalog .
Learn more about metadata management in Knowledge Catalog .
Learn more about transitioning from Data Catalog to Knowledge Catalog .
Follow the codelab: Foundational governance with Knowledge Catalog .
Follow the codelab: Build the data foundation with Knowledge Catalog metadata .
Follow the codelab: Deploy an enterprise governance-aware agent with MCP and Cloud Run .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
