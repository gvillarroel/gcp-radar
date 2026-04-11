---
title: "Manage entries and ingest custom sources \_|\_ Knowledge Catalog \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/dataplex/docs/ingest-custom-sources
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataplex/docs/iam-and-access-control
source_metadata:
  url: https://docs.cloud.google.com/dataplex/docs/ingest-custom-sources
  title: "Manage entries and ingest custom sources \_|\_ Knowledge Catalog \_|\_ Google\
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
Manage entries and ingest custom sources
Stay organized with collections
Save and categorize content based on your preferences.
This document explains how to bring information about your unique, custom data
sources into Knowledge Catalog (formerly Dataplex Universal Catalog).
Knowledge Catalog serves as a central registry for all your
data assets. To integrate a custom source, you need three key components:
Entry group: This is a secured container that holds your custom data records.
Think of it as a folder that defines access permissions and the geographic
location (region) for your records.
Entry type: This acts as a template or schema. It defines the required
metadata fields (like data owner, update frequency, or quality score) for a
specific kind of data asset.
Entry: This is the individual record or asset itself (for example, a specific
proprietary file or database table).
The integration process
To register a custom data source, you need to set up this structure:
Create an entry group (the folder).
Define an entry type (the template/schema).
Create the custom entry (the data record) using the template within the
folder.
Entries
An entry represents a data asset that you capture metadata for. Every entry is
an instance of an entry type. Each operation on aspects for an entry needs to
comply with the required aspects of its entry type. For example, when you create
an entry, you must provide values for all the aspect types defined by the
entry type. You can't delete those aspects for an entry that are marked as
required in the entry type.
Categories of entries
System entries : Knowledge Catalog creates entries for Google Cloud
resources, such as BigQuery datasets or tables. The entries that
Knowledge Catalog creates are called system entries. Knowledge Catalog
automatically keeps system entries up-to-date through continuous metadata
synchronization from the supported Google Cloud systems.
You can't modify the metadata that is populated automatically (called required
aspects) for system entries. You can only add and modify additional metadata
for system entries by using optional aspects. For more information, see
Categories of aspects .
Custom entries : entries that you can create and manage for
custom resources are called custom entries. Custom resources are the resources
in non-Google services that are hosted either in Google Cloud or externally
(for example, on-premises).
Entry groups
An entry group is a container for one or more entries. You can use entry groups
to manage access control and regional location for the entries. Every entry
group belongs to a project.
Categories of entry groups
System entry groups : for Google Cloud resources, Knowledge Catalog
automatically creates entry groups for each system in every project and
location where the resources are. For example, @bigquery is the system entry
group for BigQuery.
Custom entry groups : Entry groups that you create for custom resources.
Entry types
Entry types define the required metadata for entries of this type, using a set
of required aspect types.
You can specify the required aspect types only on entries, and not on the
columns of an entry. When you create an entry of a specific entry type,
you must provide values for all required aspect types that are specified by the
entry type.
Required aspect types that are referenced within an entry type must belong to the
same project as the entry type.
Categories of entry types
Custom entry types : Entry types that you create and manage. You can use
these entry types to create custom entries.
System entry types : Knowledge Catalog provides these entry types
by default. System entry types are further categorized into reusable and
restricted.
The following table describes the categories of system entry types, and the
list of entry types that Knowledge Catalog provides for each of the categories:
Category of system entry type
Description
Entry types that Knowledge Catalog provides
Reusable system entry type
You can use this entry type to create custom entries.
generic
Restricted system entry type
These are reserved for system use, such as creating entries for
Google Cloud resources.
You can't use these entry types to create entries, but you can edit entries
of these entry types to add optional aspects.
Including but not limited to:
analytics-hub-exchange
analytics-hub-listing
aspecttype
bigquery-dataset
bigquery-table
cloudsql-database
cloudsql-instance
cloudsql-table
entrygroup
entrytype
sql-access
storage
storage-bucket
storage-folder
Note: Entries of the type entrygroup represent entry groups and are
automatically created when an entry group is created. You can search for entries
of this type. Unlike regular entries, you can't delete these entries. Instead,
you must delete the entry group.
You can create a custom entry type in a specific regional location or as a
global resource. The location of an
entry type impacts the scope of its applicability. For more information, see
Project and location constraints .
System entry types are always global. System entry types are stored in a
Google-managed project with project ID 655216118709 . For example,
projects/655216118709/locations/global/entryTypes/bigquery-table .
Before you begin
Before you manage entries and ingest custom data sources, ensure that you have
completed the tasks described in this section.
Required roles
To get the permissions that
you need to create and manage entries,
ask your administrator to grant you the
following IAM roles on the resource:
Full set of permissions on entries, entry groups, and entry types:
Dataplex Catalog Admin ( roles/dataplex.catalogAdmin )
Create and manage metadata resources in Knowledge Catalog, including entries, entry groups, and entry types:
Dataplex Catalog Editor ( roles/dataplex.catalogEditor )
Full access to entry-related operations:
Dataplex Entry and EntryLink Owner ( roles/dataplex.entryOwner )
View entries, entry groups, and entry types, and IAM policies associated with them:
Dataplex Catalog Viewer ( roles/dataplex.catalogViewer )
Use aspect types to create aspects of those types, when creating custom entries:
Dataplex Aspect Type User ( roles/dataplex.aspectTypeUser )
Create and manage entry groups:
Dataplex Entry Group Owner ( roles/dataplex.entryGroupOwner )
Create and manage entry types:
Dataplex Entry Type Owner ( roles/dataplex.entryTypeOwner )
Use entry types to create and modify entries of those types:
Dataplex Entry Type User ( roles/dataplex.entryTypeUser )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Note: When you use an entry type to create and modify entries of that type, if
the entry type and the entry are in different projects, you must grant the
Dataplex Entry Type User ( roles/dataplex.entryTypeUser ) IAM role on the
project where the entry type is.
For more information, see
Knowledge Catalog IAM roles .
Enable the API
Enable the Dataplex API in your Knowledge Catalog project. If you are using a new Google Cloud project or a project in which the BigQuery API is enabled, the Dataplex API is enabled by default.
Enable the API
Create an entry group
Console
In the Google Cloud console, go to the Knowledge Catalog Metadata types page.
Go to Metadata types
Click the Entry groups > Custom tab.
Click Create .
In the Create entry group window, enter the following:
Optional: In the Display name field, enter a display name for your
entry group.
Entry group ID : Enter a unique ID for your entry group.
Optional: In the Description field, enter a description for your
entry group.
Location : Select a location. You can't modify the location after
you create the entry group.
Optional: In the Labels section, add arbitrary labels as key-value
pairs to your resources:
Click Add label .
In the Key field, enter a key.
In the Value field, enter a value for the key.
To add more labels, click Add label and repeat the steps.
Click Save .
gcloud
To create an entry group, use the
gcloud dataplex entry-groups create command .
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
/// <summary>Snippet for CreateEntryGroup</summary>
/// <remarks>
/// This snippet has been automatically generated and should be regarded as a code template only.
/// It will require modifications to work:
/// - It may require correct/in-range values for request initialization.
/// - It may require specifying regional endpoints when creating the service client as shown in
/// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint.
/// </remarks>
public void CreateEntryGroupRequestObject ()
{
// Create client
CatalogServiceClient catalogServiceClient = CatalogServiceClient . Create ();
// Initialize request argument(s)
CreateEntryGroupRequest request = new CreateEntryGroupRequest
{
ParentAsLocationName = LocationName . FromProjectLocation ( "[PROJECT]" , "[LOCATION]" ),
EntryGroupId = "" ,
EntryGroup = new EntryGroup (),
ValidateOnly = false ,
};
// Make the request
Operation<EntryGroup , OperationMetadata > response = catalogServiceClient . CreateEntryGroup ( request );
// Poll until the returned long-running operation is complete
Operation<EntryGroup , OperationMetadata > completedResponse = response . PollUntilCompleted ();
// Retrieve the operation result
EntryGroup result = completedResponse . Result ;
// Or get the name of the operation
string operationName = response . Name ;
// This name can be stored, then the long-running operation retrieved later by name
Operation<EntryGroup , OperationMetadata > retrievedResponse = catalogServiceClient . PollOnceCreateEntryGroup ( operationName );
// Check if the retrieved long-running operation has completed
if ( retrievedResponse . IsCompleted )
{
// If it has completed, then access the result
EntryGroup retrievedResult = retrievedResponse . Result ;
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
req := & dataplexpb . CreateEntryGroupRequest {
// TODO: Fill request struct fields.
// See https://pkg.go.dev/cloud.google.com/go/dataplex/apiv1/dataplexpb#CreateEntryGroupRequest.
}
op , err := c . CreateEntryGroup ( ctx , req )
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
import com.google.cloud.dataplex.v1. CatalogServiceClient ;
import com.google.cloud.dataplex.v1. CreateEntryGroupRequest ;
import com.google.cloud.dataplex.v1. EntryGroup ;
import com.google.cloud.dataplex.v1. LocationName ;
public class SyncCreateEntryGroup {
public static void main ( String [] args ) throws Exception {
syncCreateEntryGroup ();
}
public static void syncCreateEntryGroup () throws Exception {
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CatalogServiceClient catalogServiceClient = CatalogServiceClient . create ()) {
CreateEntryGroupRequest request =
CreateEntryGroupRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setEntryGroupId ( "entryGroupId1228924712" )
. setEntryGroup ( EntryGroup . newBuilder (). build ())
. setValidateOnly ( true )
. build ();
EntryGroup response = catalogServiceClient . createEntryGroupAsync ( request ). get ();
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
def sample_create_entry_group ():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . CreateEntryGroupRequest (
parent = "parent_value" ,
entry_group_id = "entry_group_id_value" ,
)
# Make the request
operation = client . create_entry_group ( request = request )
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
# Snippet for the create_entry_group call in the CatalogService service
#
# This snippet has been automatically generated and should be regarded as a code
# template only. It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in https://cloud.google.com/ruby/docs/reference.
#
# This is an auto-generated example demonstrating basic usage of
# Google::Cloud::Dataplex::V1::CatalogService::Client#create_entry_group.
#
def create_entry_group
# Create a client object. The client can be reused for multiple calls.
client = Google :: Cloud :: Dataplex :: V1 :: CatalogService :: Client . new
# Create a request. To set request fields, pass in keyword arguments.
request = Google :: Cloud :: Dataplex :: V1 :: CreateEntryGroupRequest . new
# Call the create_entry_group method.
result = client . create_entry_group request
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
To create an entry group, use the
entryGroups.Create
method.
Create an entry type
To ingest a new source, you must create an entry type.
Console
In the Google Cloud console, go to the Knowledge Catalog Metadata types page.
Go to Metadata types
Click the Entry types > Custom tab.
Click Create .
In the Create entry type window, enter the following:
Optional: In the Display name field, enter a display name for your
entry type.
Entry type ID : Enter a unique ID for your entry type. You can't
modify this after you create the entry type.
Optional: In the Description field, enter a description for your
entry type.
Optional: In the System field, enter the source system.
Optional: In the Platform field, enter the platform that entries
of this type belong to. For example, Google Cloud .
In the Location field, select a location. You can't modify the
location after you create the entry type.
Optional: In the Type aliases section, define the data type for
your entry type. The data type can be used for querying entries.
Click Add type alias .
In the Type alias field, select a data type. You can add multiple
type aliases.
In the Required aspect types section, select the aspect types that
are mandatory for this entry type. Each entry that is created based on
this type will have these required aspect types assigned.
The list of required aspect types can't be modified after you create the entry type.
Click Choose aspect type .
In the Select aspect types window, select the aspect type.
Click Select .
You can't delete the required aspects from an entry.
Optional: In the Labels section, add arbitrary labels as key-value
pairs to your resources:
Click Add label .
In the Key field, enter a key.
In the Value field, enter a value for the key.
To add more labels, click Add label and repeat the steps.
Click Save .
gcloud
To create an entry type, use the
gcloud dataplex entry-types create command .
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
/// <summary>Snippet for CreateEntryType</summary>
/// <remarks>
/// This snippet has been automatically generated and should be regarded as a code template only.
/// It will require modifications to work:
/// - It may require correct/in-range values for request initialization.
/// - It may require specifying regional endpoints when creating the service client as shown in
/// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint.
/// </remarks>
public void CreateEntryTypeRequestObject ()
{
// Create client
CatalogServiceClient catalogServiceClient = CatalogServiceClient . Create ();
// Initialize request argument(s)
CreateEntryTypeRequest request = new CreateEntryTypeRequest
{
ParentAsLocationName = LocationName . FromProjectLocation ( "[PROJECT]" , "[LOCATION]" ),
EntryTypeId = "" ,
EntryType = new EntryType (),
ValidateOnly = false ,
};
// Make the request
Operation<EntryType , OperationMetadata > response = catalogServiceClient . CreateEntryType ( request );
// Poll until the returned long-running operation is complete
Operation<EntryType , OperationMetadata > completedResponse = response . PollUntilCompleted ();
// Retrieve the operation result
EntryType result = completedResponse . Result ;
// Or get the name of the operation
string operationName = response . Name ;
// This name can be stored, then the long-running operation retrieved later by name
Operation<EntryType , OperationMetadata > retrievedResponse = catalogServiceClient . PollOnceCreateEntryType ( operationName );
// Check if the retrieved long-running operation has completed
if ( retrievedResponse . IsCompleted )
{
// If it has completed, then access the result
EntryType retrievedResult = retrievedResponse . Result ;
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
req := & dataplexpb . CreateEntryTypeRequest {
// TODO: Fill request struct fields.
// See https://pkg.go.dev/cloud.google.com/go/dataplex/apiv1/dataplexpb#CreateEntryTypeRequest.
}
op , err := c . CreateEntryType ( ctx , req )
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
import com.google.cloud.dataplex.v1. CatalogServiceClient ;
import com.google.cloud.dataplex.v1. CreateEntryTypeRequest ;
import com.google.cloud.dataplex.v1. EntryType ;
import com.google.cloud.dataplex.v1. LocationName ;
public class SyncCreateEntryType {
public static void main ( String [] args ) throws Exception {
syncCreateEntryType ();
}
public static void syncCreateEntryType () throws Exception {
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CatalogServiceClient catalogServiceClient = CatalogServiceClient . create ()) {
CreateEntryTypeRequest request =
CreateEntryTypeRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setEntryTypeId ( "entryTypeId-1105721081" )
. setEntryType ( EntryType . newBuilder (). build ())
. setValidateOnly ( true )
. build ();
EntryType response = catalogServiceClient . createEntryTypeAsync ( request ). get ();
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
def sample_create_entry_type ():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . CreateEntryTypeRequest (
parent = "parent_value" ,
entry_type_id = "entry_type_id_value" ,
)
# Make the request
operation = client . create_entry_type ( request = request )
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
# Snippet for the create_entry_type call in the CatalogService service
#
# This snippet has been automatically generated and should be regarded as a code
# template only. It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in https://cloud.google.com/ruby/docs/reference.
#
# This is an auto-generated example demonstrating basic usage of
# Google::Cloud::Dataplex::V1::CatalogService::Client#create_entry_type.
#
def create_entry_type
# Create a client object. The client can be reused for multiple calls.
client = Google :: Cloud :: Dataplex :: V1 :: CatalogService :: Client . new
# Create a request. To set request fields, pass in keyword arguments.
request = Google :: Cloud :: Dataplex :: V1 :: CreateEntryTypeRequest . new
# Call the create_entry_type method.
result = client . create_entry_type request
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
To create an entry type, use the
entryTypes.create
method.
Create a custom entry
Before you create a custom entry, ensure that you have
created an entry group and an
entry type .
Console
Creating a custom entry using the Google Cloud console isn't supported. Instead,
use the Google Cloud CLI or the API.
gcloud
To create a custom entry, use the
gcloud dataplex entries create command .
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
/// <summary>Snippet for CreateEntry</summary>
/// <remarks>
/// This snippet has been automatically generated and should be regarded as a code template only.
/// It will require modifications to work:
/// - It may require correct/in-range values for request initialization.
/// - It may require specifying regional endpoints when creating the service client as shown in
/// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint.
/// </remarks>
public void CreateEntryRequestObject ()
{
// Create client
CatalogServiceClient catalogServiceClient = CatalogServiceClient . Create ();
// Initialize request argument(s)
CreateEntryRequest request = new CreateEntryRequest
{
ParentAsEntryGroupName = EntryGroupName . FromProjectLocationEntryGroup ( "[PROJECT]" , "[LOCATION]" , "[ENTRY_GROUP]" ),
EntryId = "" ,
Entry = new Entry (),
};
// Make the request
Entry response = catalogServiceClient . CreateEntry ( request );
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
req := & dataplexpb . CreateEntryRequest {
// TODO: Fill request struct fields.
// See https://pkg.go.dev/cloud.google.com/go/dataplex/apiv1/dataplexpb#CreateEntryRequest.
}
resp , err := c . CreateEntry ( ctx , req )
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
import com.google.cloud.dataplex.v1. CreateEntryRequest ;
import com.google.cloud.dataplex.v1. Entry ;
import com.google.cloud.dataplex.v1. EntryGroupName ;
public class SyncCreateEntry {
public static void main ( String [] args ) throws Exception {
syncCreateEntry ();
}
public static void syncCreateEntry () throws Exception {
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CatalogServiceClient catalogServiceClient = CatalogServiceClient . create ()) {
CreateEntryRequest request =
CreateEntryRequest . newBuilder ()
. setParent ( EntryGroupName . of ( "[PROJECT]" , "[LOCATION]" , "[ENTRY_GROUP]" ). toString ())
. setEntryId ( "entryId-1591558867" )
. setEntry ( Entry . newBuilder (). build ())
. build ();
Entry response = catalogServiceClient . createEntry ( request );
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
def sample_create_entry ():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
entry = dataplex_v1 . Entry ()
entry . entry_type = "entry_type_value"
request = dataplex_v1 . CreateEntryRequest (
parent = "parent_value" ,
entry_id = "entry_id_value" ,
entry = entry ,
)
# Make the request
response = client . create_entry ( request = request )
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
# Snippet for the create_entry call in the CatalogService service
#
# This snippet has been automatically generated and should be regarded as a code
# template only. It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in https://cloud.google.com/ruby/docs/reference.
#
# This is an auto-generated example demonstrating basic usage of
# Google::Cloud::Dataplex::V1::CatalogService::Client#create_entry.
#
def create_entry
# Create a client object. The client can be reused for multiple calls.
client = Google :: Cloud :: Dataplex :: V1 :: CatalogService :: Client . new
# Create a request. To set request fields, pass in keyword arguments.
request = Google :: Cloud :: Dataplex :: V1 :: CreateEntryRequest . new
# Call the create_entry method.
result = client . create_entry request
# The returned object is of type Google::Cloud::Dataplex::V1::Entry.
p result
end
REST
To create a custom entry, use the
entries.create
method.
After you create a custom entry, you can add aspects to the entry. For
more information, see
Add aspects to an entry .
Manage entry groups
This section describes how to view the list of available entry groups, view
details, update, and delete entry groups.
View the list of available entry groups
Console
In the Google Cloud console, go to the Knowledge Catalog Metadata types page.
Go to Metadata types
Click the Entry groups tab.
This page lists all the available Knowledge Catalog
and Data Catalog entry groups.
To view custom entry groups, click the Custom tab. In the
Custom tab, the Catalog source column displays where the resource
resides—Knowledge Catalog or Data Catalog.
To view system entry groups, click the System tab.
For more information about custom and system entry groups, see the
categories of entry groups section of this
document.
Optional: To view the list of entry groups in your selected project, click
the Custom tab, and then click the Show from all projects toggle
to the off position.
The Show from all projects toggle is on by default, and the list
includes Knowledge Catalog resources from your selected
organization and Data Catalog resources from all the organizations
that you can access.
Note: If the Show from all projects toggle is on, you can't edit
or delete an entry group directly. Instead, you must click
the entry group to open the entry group details page, and then edit
or delete it.
gcloud
To view the list of available entry groups, use the
gcloud dataplex entry-groups list command .
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
/// <summary>Snippet for ListEntryGroups</summary>
/// <remarks>
/// This snippet has been automatically generated and should be regarded as a code template only.
/// It will require modifications to work:
/// - It may require correct/in-range values for request initialization.
/// - It may require specifying regional endpoints when creating the service client as shown in
/// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint.
/// </remarks>
public void ListEntryGroupsRequestObject ()
{
// Create client
CatalogServiceClient catalogServiceClient = CatalogServiceClient . Create ();
// Initialize request argument(s)
ListEntryGroupsRequest request = new ListEntryGroupsRequest
{
ParentAsLocationName = LocationName . FromProjectLocation ( "[PROJECT]" , "[LOCATION]" ),
Filter = "" ,
OrderBy = "" ,
};
// Make the request
PagedEnumerable<ListEntryGroupsResponse , EntryGroup > response = catalogServiceClient . ListEntryGroups ( request );
// Iterate over all response items, lazily performing RPCs as required
foreach ( EntryGroup item in response )
{
// Do something with each item
Console . WriteLine ( item );
}
// Or iterate over pages (of server-defined size), performing one RPC per page
foreach ( ListEntryGroupsResponse page in response . AsRawResponses ())
{
// Do something with each page of items
Console . WriteLine ( "A page of results:" );
foreach ( EntryGroup item in page )
{
// Do something with each item
Console . WriteLine ( item );
}
}
// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10 ;
Page<EntryGroup> singlePage = response . ReadPage ( pageSize );
// Do something with the page of items
Console . WriteLine ( $"A page of {pageSize} results (unless it's the final page):" );
foreach ( EntryGroup item in singlePage )
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
req := & dataplexpb . ListEntryGroupsRequest {
// TODO: Fill request struct fields.
// See https://pkg.go.dev/cloud.google.com/go/dataplex/apiv1/dataplexpb#ListEntryGroupsRequest.
}
it := c . ListEntryGroups ( ctx , req )
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
_ = it . Response .( * dataplexpb . ListEntryGroupsResponse )
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
import com.google.cloud.dataplex.v1. CatalogServiceClient ;
import com.google.cloud.dataplex.v1. EntryGroup ;
import com.google.cloud.dataplex.v1. ListEntryGroupsRequest ;
import com.google.cloud.dataplex.v1. LocationName ;
public class SyncListEntryGroups {
public static void main ( String [] args ) throws Exception {
syncListEntryGroups ();
}
public static void syncListEntryGroups () throws Exception {
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CatalogServiceClient catalogServiceClient = CatalogServiceClient . create ()) {
ListEntryGroupsRequest request =
ListEntryGroupsRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setFilter ( "filter-1274492040" )
. setOrderBy ( "orderBy-1207110587" )
. build ();
for ( EntryGroup element : catalogServiceClient . listEntryGroups ( request ). iterateAll ()) {
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
def sample_list_entry_groups ():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . ListEntryGroupsRequest (
parent = "parent_value" ,
)
# Make the request
page_result = client . list_entry_groups ( request = request )
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
# Snippet for the list_entry_groups call in the CatalogService service
#
# This snippet has been automatically generated and should be regarded as a code
# template only. It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in https://cloud.google.com/ruby/docs/reference.
#
# This is an auto-generated example demonstrating basic usage of
# Google::Cloud::Dataplex::V1::CatalogService::Client#list_entry_groups.
#
def list_entry_groups
# Create a client object. The client can be reused for multiple calls.
client = Google :: Cloud :: Dataplex :: V1 :: CatalogService :: Client . new
# Create a request. To set request fields, pass in keyword arguments.
request = Google :: Cloud :: Dataplex :: V1 :: ListEntryGroupsRequest . new
# Call the list_entry_groups method.
result = client . list_entry_groups request
# The returned object is of type Gapic::PagedEnumerable. You can iterate
# over elements, and API calls will be issued to fetch pages as needed.
result . each do | item |
# Each element is of type ::Google::Cloud::Dataplex::V1::EntryGroup.
p item
end
end
REST
To view the list of available entry groups, use the
entryGroups.list
method.
View details of an entry group
Console
In the Google Cloud console, go to the Knowledge Catalog Metadata types page.
Go to Metadata types
Click the Entry groups tab.
Click the entry group for which you want to view the details.
The entry group details page opens. You can access information such as
display name, entry group ID, description, project ID, location, labels,
creation date, and last modified date of the selected entry group.
For a Data Catalog entry group, you can view the details in
both the Data Catalog and Knowledge Catalog web
interfaces. To do this, on the entry group details page, click
Data Catalog or Knowledge Catalog .
The Sample entries section displays 10 related entries created recently
in the selected entry group.
Optional: To view all the entries related to an entry group, in the Sample entries
section, click Show all related entries in search .
gcloud
To retrieve the details of an entry group, use the
gcloud dataplex entry-groups describe command .
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
/// <summary>Snippet for GetEntryGroup</summary>
/// <remarks>
/// This snippet has been automatically generated and should be regarded as a code template only.
/// It will require modifications to work:
/// - It may require correct/in-range values for request initialization.
/// - It may require specifying regional endpoints when creating the service client as shown in
/// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint.
/// </remarks>
public void GetEntryGroupRequestObject ()
{
// Create client
CatalogServiceClient catalogServiceClient = CatalogServiceClient . Create ();
// Initialize request argument(s)
GetEntryGroupRequest request = new GetEntryGroupRequest
{
EntryGroupName = EntryGroupName . FromProjectLocationEntryGroup ( "[PROJECT]" , "[LOCATION]" , "[ENTRY_GROUP]" ),
};
// Make the request
EntryGroup response = catalogServiceClient . GetEntryGroup ( request );
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
req := & dataplexpb . GetEntryGroupRequest {
// TODO: Fill request struct fields.
// See https://pkg.go.dev/cloud.google.com/go/dataplex/apiv1/dataplexpb#GetEntryGroupRequest.
}
resp , err := c . GetEntryGroup ( ctx , req )
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
import com.google.cloud.dataplex.v1. EntryGroup ;
import com.google.cloud.dataplex.v1. EntryGroupName ;
import com.google.cloud.dataplex.v1. GetEntryGroupRequest ;
public class SyncGetEntryGroup {
public static void main ( String [] args ) throws Exception {
syncGetEntryGroup ();
}
public static void syncGetEntryGroup () throws Exception {
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CatalogServiceClient catalogServiceClient = CatalogServiceClient . create ()) {
GetEntryGroupRequest request =
GetEntryGroupRequest . newBuilder ()
. setName ( EntryGroupName . of ( "[PROJECT]" , "[LOCATION]" , "[ENTRY_GROUP]" ). toString ())
. build ();
EntryGroup response = catalogServiceClient . getEntryGroup ( request );
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
def sample_get_entry_group ():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . GetEntryGroupRequest (
name = "name_value" ,
)
# Make the request
response = client . get_entry_group ( request = request )
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
# Snippet for the get_entry_group call in the CatalogService service
#
# This snippet has been automatically generated and should be regarded as a code
# template only. It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in https://cloud.google.com/ruby/docs/reference.
#
# This is an auto-generated example demonstrating basic usage of
# Google::Cloud::Dataplex::V1::CatalogService::Client#get_entry_group.
#
def get_entry_group
# Create a client object. The client can be reused for multiple calls.
client = Google :: Cloud :: Dataplex :: V1 :: CatalogService :: Client . new
# Create a request. To set request fields, pass in keyword arguments.
request = Google :: Cloud :: Dataplex :: V1 :: GetEntryGroupRequest . new
# Call the get_entry_group method.
result = client . get_entry_group request
# The returned object is of type Google::Cloud::Dataplex::V1::EntryGroup.
p result
end
REST
To retrieve the details of an entry group, use the
entryGroups.get
method.
Update an entry group
You can update a custom entry group. System entry groups can't be modified.
Console
In the Google Cloud console, go to the Knowledge Catalog Metadata types page.
Go to Metadata types
Click the Entry groups > Custom tab.
Click the entry group that you want to update.
On the Entry group details page, click Edit .
Edit the display name, description, and labels, as required.
Click Save .
gcloud
To update an entry group, use the
gcloud dataplex entry-groups update command .
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
/// <summary>Snippet for UpdateEntryGroup</summary>
/// <remarks>
/// This snippet has been automatically generated and should be regarded as a code template only.
/// It will require modifications to work:
/// - It may require correct/in-range values for request initialization.
/// - It may require specifying regional endpoints when creating the service client as shown in
/// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint.
/// </remarks>
public void UpdateEntryGroupRequestObject ()
{
// Create client
CatalogServiceClient catalogServiceClient = CatalogServiceClient . Create ();
// Initialize request argument(s)
UpdateEntryGroupRequest request = new UpdateEntryGroupRequest
{
EntryGroup = new EntryGroup (),
UpdateMask = new FieldMask (),
ValidateOnly = false ,
};
// Make the request
Operation<EntryGroup , OperationMetadata > response = catalogServiceClient . UpdateEntryGroup ( request );
// Poll until the returned long-running operation is complete
Operation<EntryGroup , OperationMetadata > completedResponse = response . PollUntilCompleted ();
// Retrieve the operation result
EntryGroup result = completedResponse . Result ;
// Or get the name of the operation
string operationName = response . Name ;
// This name can be stored, then the long-running operation retrieved later by name
Operation<EntryGroup , OperationMetadata > retrievedResponse = catalogServiceClient . PollOnceUpdateEntryGroup ( operationName );
// Check if the retrieved long-running operation has completed
if ( retrievedResponse . IsCompleted )
{
// If it has completed, then access the result
EntryGroup retrievedResult = retrievedResponse . Result ;
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
req := & dataplexpb . UpdateEntryGroupRequest {
// TODO: Fill request struct fields.
// See https://pkg.go.dev/cloud.google.com/go/dataplex/apiv1/dataplexpb#UpdateEntryGroupRequest.
}
op , err := c . UpdateEntryGroup ( ctx , req )
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
import com.google.cloud.dataplex.v1. CatalogServiceClient ;
import com.google.cloud.dataplex.v1. EntryGroup ;
import com.google.cloud.dataplex.v1. UpdateEntryGroupRequest ;
import com.google.protobuf. FieldMask ;
public class SyncUpdateEntryGroup {
public static void main ( String [] args ) throws Exception {
syncUpdateEntryGroup ();
}
public static void syncUpdateEntryGroup () throws Exception {
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CatalogServiceClient catalogServiceClient = CatalogServiceClient . create ()) {
UpdateEntryGroupRequest request =
UpdateEntryGroupRequest . newBuilder ()
. setEntryGroup ( EntryGroup . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. setValidateOnly ( true )
. build ();
EntryGroup response = catalogServiceClient . updateEntryGroupAsync ( request ). get ();
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
def sample_update_entry_group ():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . UpdateEntryGroupRequest ()
# Make the request
operation = client . update_entry_group ( request = request )
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
# Snippet for the update_entry_group call in the CatalogService service
#
# This snippet has been automatically generated and should be regarded as a code
# template only. It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in https://cloud.google.com/ruby/docs/reference.
#
# This is an auto-generated example demonstrating basic usage of
# Google::Cloud::Dataplex::V1::CatalogService::Client#update_entry_group.
#
def update_entry_group
# Create a client object. The client can be reused for multiple calls.
client = Google :: Cloud :: Dataplex :: V1 :: CatalogService :: Client . new
# Create a request. To set request fields, pass in keyword arguments.
request = Google :: Cloud :: Dataplex :: V1 :: UpdateEntryGroupRequest . new
# Call the update_entry_group method.
result = client . update_entry_group request
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
To update an entry group, use the
entryGroups.patch
method.
Delete an entry group
You can delete a custom entry group. System entry groups can't be deleted.
Console
In the Google Cloud console, go to the Knowledge Catalog Metadata types page.
Go to Metadata types
Click the Entry groups > Custom tab.
Click the entry group that you want to delete.
On the Entry group details page, click Delete . Confirm when
prompted.
gcloud
To delete an entry group, use the
gcloud dataplex entry-groups delete command .
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
/// <summary>Snippet for DeleteEntryGroup</summary>
/// <remarks>
/// This snippet has been automatically generated and should be regarded as a code template only.
/// It will require modifications to work:
/// - It may require correct/in-range values for request initialization.
/// - It may require specifying regional endpoints when creating the service client as shown in
/// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint.
/// </remarks>
public void DeleteEntryGroupRequestObject ()
{
// Create client
CatalogServiceClient catalogServiceClient = CatalogServiceClient . Create ();
// Initialize request argument(s)
DeleteEntryGroupRequest request = new DeleteEntryGroupRequest
{
EntryGroupName = EntryGroupName . FromProjectLocationEntryGroup ( "[PROJECT]" , "[LOCATION]" , "[ENTRY_GROUP]" ),
Etag = "" ,
};
// Make the request
Operation<Empty , OperationMetadata > response = catalogServiceClient . DeleteEntryGroup ( request );
// Poll until the returned long-running operation is complete
Operation<Empty , OperationMetadata > completedResponse = response . PollUntilCompleted ();
// Retrieve the operation result
Empty result = completedResponse . Result ;
// Or get the name of the operation
string operationName = response . Name ;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty , OperationMetadata > retrievedResponse = catalogServiceClient . PollOnceDeleteEntryGroup ( operationName );
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
req := & dataplexpb . DeleteEntryGroupRequest {
// TODO: Fill request struct fields.
// See https://pkg.go.dev/cloud.google.com/go/dataplex/apiv1/dataplexpb#DeleteEntryGroupRequest.
}
op , err := c . DeleteEntryGroup ( ctx , req )
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
import com.google.cloud.dataplex.v1. CatalogServiceClient ;
import com.google.cloud.dataplex.v1. DeleteEntryGroupRequest ;
import com.google.cloud.dataplex.v1. EntryGroupName ;
import com.google.protobuf. Empty ;
public class SyncDeleteEntryGroup {
public static void main ( String [] args ) throws Exception {
syncDeleteEntryGroup ();
}
public static void syncDeleteEntryGroup () throws Exception {
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CatalogServiceClient catalogServiceClient = CatalogServiceClient . create ()) {
DeleteEntryGroupRequest request =
DeleteEntryGroupRequest . newBuilder ()
. setName ( EntryGroupName . of ( "[PROJECT]" , "[LOCATION]" , "[ENTRY_GROUP]" ). toString ())
. setEtag ( "etag3123477" )
. build ();
catalogServiceClient . deleteEntryGroupAsync ( request ). get ();
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
def sample_delete_entry_group ():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . DeleteEntryGroupRequest (
name = "name_value" ,
)
# Make the request
operation = client . delete_entry_group ( request = request )
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
# Snippet for the delete_entry_group call in the CatalogService service
#
# This snippet has been automatically generated and should be regarded as a code
# template only. It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in https://cloud.google.com/ruby/docs/reference.
#
# This is an auto-generated example demonstrating basic usage of
# Google::Cloud::Dataplex::V1::CatalogService::Client#delete_entry_group.
#
def delete_entry_group
# Create a client object. The client can be reused for multiple calls.
client = Google :: Cloud :: Dataplex :: V1 :: CatalogService :: Client . new
# Create a request. To set request fields, pass in keyword arguments.
request = Google :: Cloud :: Dataplex :: V1 :: DeleteEntryGroupRequest . new
# Call the delete_entry_group method.
result = client . delete_entry_group request
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
To delete an entry group, use the
entryGroups.delete
method.
Manage entry types
This section describes how to view the list of available entry groups, view
details, update, and delete entry types.
View the list of available entry types
Console
In the Google Cloud console, go to the Knowledge Catalog Metadata types page.
Go to Metadata types
Click the Entry types tab.
To view custom entry types, click the Custom tab. To view system
entry types, click the System tab. For more information about
custom and system entry types, see the
categories of entry types section of this
document.
Optional: To view the list of entry types in your selected project, click
the Custom tab, and then click the Show from all projects toggle
to the off position.
The Show from all projects toggle is on by default, and the list
includes entry types across all projects.
Note: If the Show from all projects toggle is on, you can't edit
or delete an entry type directly. Instead, you must click
the entry type to open the entry type details page, and then edit
or delete it.
gcloud
To view the list of available entry types, use the
gcloud dataplex entry-types list command .
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
/// <summary>Snippet for ListEntryTypes</summary>
/// <remarks>
/// This snippet has been automatically generated and should be regarded as a code template only.
/// It will require modifications to work:
/// - It may require correct/in-range values for request initialization.
/// - It may require specifying regional endpoints when creating the service client as shown in
/// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint.
/// </remarks>
public void ListEntryTypesRequestObject ()
{
// Create client
CatalogServiceClient catalogServiceClient = CatalogServiceClient . Create ();
// Initialize request argument(s)
ListEntryTypesRequest request = new ListEntryTypesRequest
{
ParentAsLocationName = LocationName . FromProjectLocation ( "[PROJECT]" , "[LOCATION]" ),
Filter = "" ,
OrderBy = "" ,
};
// Make the request
PagedEnumerable<ListEntryTypesResponse , EntryType > response = catalogServiceClient . ListEntryTypes ( request );
// Iterate over all response items, lazily performing RPCs as required
foreach ( EntryType item in response )
{
// Do something with each item
Console . WriteLine ( item );
}
// Or iterate over pages (of server-defined size), performing one RPC per page
foreach ( ListEntryTypesResponse page in response . AsRawResponses ())
{
// Do something with each page of items
Console . WriteLine ( "A page of results:" );
foreach ( EntryType item in page )
{
// Do something with each item
Console . WriteLine ( item );
}
}
// Or retrieve a single page of known size (unless it's the final page), performing as many RPCs as required
int pageSize = 10 ;
Page<EntryType> singlePage = response . ReadPage ( pageSize );
// Do something with the page of items
Console . WriteLine ( $"A page of {pageSize} results (unless it's the final page):" );
foreach ( EntryType item in singlePage )
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
req := & dataplexpb . ListEntryTypesRequest {
// TODO: Fill request struct fields.
// See https://pkg.go.dev/cloud.google.com/go/dataplex/apiv1/dataplexpb#ListEntryTypesRequest.
}
it := c . ListEntryTypes ( ctx , req )
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
_ = it . Response .( * dataplexpb . ListEntryTypesResponse )
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
import com.google.cloud.dataplex.v1. CatalogServiceClient ;
import com.google.cloud.dataplex.v1. EntryType ;
import com.google.cloud.dataplex.v1. ListEntryTypesRequest ;
import com.google.cloud.dataplex.v1. LocationName ;
public class SyncListEntryTypes {
public static void main ( String [] args ) throws Exception {
syncListEntryTypes ();
}
public static void syncListEntryTypes () throws Exception {
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CatalogServiceClient catalogServiceClient = CatalogServiceClient . create ()) {
ListEntryTypesRequest request =
ListEntryTypesRequest . newBuilder ()
. setParent ( LocationName . of ( "[PROJECT]" , "[LOCATION]" ). toString ())
. setPageSize ( 883849137 )
. setPageToken ( "pageToken873572522" )
. setFilter ( "filter-1274492040" )
. setOrderBy ( "orderBy-1207110587" )
. build ();
for ( EntryType element : catalogServiceClient . listEntryTypes ( request ). iterateAll ()) {
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
def sample_list_entry_types ():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . ListEntryTypesRequest (
parent = "parent_value" ,
)
# Make the request
page_result = client . list_entry_types ( request = request )
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
# Snippet for the list_entry_types call in the CatalogService service
#
# This snippet has been automatically generated and should be regarded as a code
# template only. It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in https://cloud.google.com/ruby/docs/reference.
#
# This is an auto-generated example demonstrating basic usage of
# Google::Cloud::Dataplex::V1::CatalogService::Client#list_entry_types.
#
def list_entry_types
# Create a client object. The client can be reused for multiple calls.
client = Google :: Cloud :: Dataplex :: V1 :: CatalogService :: Client . new
# Create a request. To set request fields, pass in keyword arguments.
request = Google :: Cloud :: Dataplex :: V1 :: ListEntryTypesRequest . new
# Call the list_entry_types method.
result = client . list_entry_types request
# The returned object is of type Gapic::PagedEnumerable. You can iterate
# over elements, and API calls will be issued to fetch pages as needed.
result . each do | item |
# Each element is of type ::Google::Cloud::Dataplex::V1::EntryType.
p item
end
end
REST
To view the list of available entry types, use the
entryTypes.list
method.
View details of an entry type
Console
In the Google Cloud console, go to the Knowledge Catalog Metadata types page.
Go to Metadata types
Click the Entry types > Custom tab..
Click the entry type for which you want to view the details.
The entry type details page opens. You can access information such as
display name, entry type ID, description, project ID, location, platform,
system, type aliases, labels, creation date, and last modified date of
the selected entry type.
Optional: To view the list of 10 related entries created recently,
click the Sample entries tab.
Optional: To view all the entries related to an entry group, click the
Sample entries tab and then click
Show all related entries in search .
gcloud
To retrieve the details of an entry type, use the
gcloud dataplex entry-types describe command .
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
/// <summary>Snippet for GetEntryType</summary>
/// <remarks>
/// This snippet has been automatically generated and should be regarded as a code template only.
/// It will require modifications to work:
/// - It may require correct/in-range values for request initialization.
/// - It may require specifying regional endpoints when creating the service client as shown in
/// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint.
/// </remarks>
public void GetEntryTypeRequestObject ()
{
// Create client
CatalogServiceClient catalogServiceClient = CatalogServiceClient . Create ();
// Initialize request argument(s)
GetEntryTypeRequest request = new GetEntryTypeRequest
{
EntryTypeName = EntryTypeName . FromProjectLocationEntryType ( "[PROJECT]" , "[LOCATION]" , "[ENTRY_TYPE]" ),
};
// Make the request
EntryType response = catalogServiceClient . GetEntryType ( request );
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
req := & dataplexpb . GetEntryTypeRequest {
// TODO: Fill request struct fields.
// See https://pkg.go.dev/cloud.google.com/go/dataplex/apiv1/dataplexpb#GetEntryTypeRequest.
}
resp , err := c . GetEntryType ( ctx , req )
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
import com.google.cloud.dataplex.v1. EntryType ;
import com.google.cloud.dataplex.v1. EntryTypeName ;
import com.google.cloud.dataplex.v1. GetEntryTypeRequest ;
public class SyncGetEntryType {
public static void main ( String [] args ) throws Exception {
syncGetEntryType ();
}
public static void syncGetEntryType () throws Exception {
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CatalogServiceClient catalogServiceClient = CatalogServiceClient . create ()) {
GetEntryTypeRequest request =
GetEntryTypeRequest . newBuilder ()
. setName ( EntryTypeName . of ( "[PROJECT]" , "[LOCATION]" , "[ENTRY_TYPE]" ). toString ())
. build ();
EntryType response = catalogServiceClient . getEntryType ( request );
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
def sample_get_entry_type ():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . GetEntryTypeRequest (
name = "name_value" ,
)
# Make the request
response = client . get_entry_type ( request = request )
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
# Snippet for the get_entry_type call in the CatalogService service
#
# This snippet has been automatically generated and should be regarded as a code
# template only. It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in https://cloud.google.com/ruby/docs/reference.
#
# This is an auto-generated example demonstrating basic usage of
# Google::Cloud::Dataplex::V1::CatalogService::Client#get_entry_type.
#
def get_entry_type
# Create a client object. The client can be reused for multiple calls.
client = Google :: Cloud :: Dataplex :: V1 :: CatalogService :: Client . new
# Create a request. To set request fields, pass in keyword arguments.
request = Google :: Cloud :: Dataplex :: V1 :: GetEntryTypeRequest . new
# Call the get_entry_type method.
result = client . get_entry_type request
# The returned object is of type Google::Cloud::Dataplex::V1::EntryType.
p result
end
REST
To retrieve the details of an entry type, use the
entryTypes.get
method.
Update an entry type
Console
In the Google Cloud console, go to the Knowledge Catalog Metadata types page.
Go to Metadata types
Click the Entry types > Custom tab.
Click the entry type that you want to update.
On the Entry type details page, click Edit .
Edit the display name, description, system, platform, type aliases,
and labels, as required.
Click Save .
gcloud
To update an entry type, use the
gcloud dataplex entry-types update command .
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
/// <summary>Snippet for UpdateEntryType</summary>
/// <remarks>
/// This snippet has been automatically generated and should be regarded as a code template only.
/// It will require modifications to work:
/// - It may require correct/in-range values for request initialization.
/// - It may require specifying regional endpoints when creating the service client as shown in
/// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint.
/// </remarks>
public void UpdateEntryTypeRequestObject ()
{
// Create client
CatalogServiceClient catalogServiceClient = CatalogServiceClient . Create ();
// Initialize request argument(s)
UpdateEntryTypeRequest request = new UpdateEntryTypeRequest
{
EntryType = new EntryType (),
UpdateMask = new FieldMask (),
ValidateOnly = false ,
};
// Make the request
Operation<EntryType , OperationMetadata > response = catalogServiceClient . UpdateEntryType ( request );
// Poll until the returned long-running operation is complete
Operation<EntryType , OperationMetadata > completedResponse = response . PollUntilCompleted ();
// Retrieve the operation result
EntryType result = completedResponse . Result ;
// Or get the name of the operation
string operationName = response . Name ;
// This name can be stored, then the long-running operation retrieved later by name
Operation<EntryType , OperationMetadata > retrievedResponse = catalogServiceClient . PollOnceUpdateEntryType ( operationName );
// Check if the retrieved long-running operation has completed
if ( retrievedResponse . IsCompleted )
{
// If it has completed, then access the result
EntryType retrievedResult = retrievedResponse . Result ;
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
req := & dataplexpb . UpdateEntryTypeRequest {
// TODO: Fill request struct fields.
// See https://pkg.go.dev/cloud.google.com/go/dataplex/apiv1/dataplexpb#UpdateEntryTypeRequest.
}
op , err := c . UpdateEntryType ( ctx , req )
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
import com.google.cloud.dataplex.v1. CatalogServiceClient ;
import com.google.cloud.dataplex.v1. EntryType ;
import com.google.cloud.dataplex.v1. UpdateEntryTypeRequest ;
import com.google.protobuf. FieldMask ;
public class SyncUpdateEntryType {
public static void main ( String [] args ) throws Exception {
syncUpdateEntryType ();
}
public static void syncUpdateEntryType () throws Exception {
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CatalogServiceClient catalogServiceClient = CatalogServiceClient . create ()) {
UpdateEntryTypeRequest request =
UpdateEntryTypeRequest . newBuilder ()
. setEntryType ( EntryType . newBuilder (). build ())
. setUpdateMask ( FieldMask . newBuilder (). build ())
. setValidateOnly ( true )
. build ();
EntryType response = catalogServiceClient . updateEntryTypeAsync ( request ). get ();
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
def sample_update_entry_type ():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . UpdateEntryTypeRequest ()
# Make the request
operation = client . update_entry_type ( request = request )
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
# Snippet for the update_entry_type call in the CatalogService service
#
# This snippet has been automatically generated and should be regarded as a code
# template only. It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in https://cloud.google.com/ruby/docs/reference.
#
# This is an auto-generated example demonstrating basic usage of
# Google::Cloud::Dataplex::V1::CatalogService::Client#update_entry_type.
#
def update_entry_type
# Create a client object. The client can be reused for multiple calls.
client = Google :: Cloud :: Dataplex :: V1 :: CatalogService :: Client . new
# Create a request. To set request fields, pass in keyword arguments.
request = Google :: Cloud :: Dataplex :: V1 :: UpdateEntryTypeRequest . new
# Call the update_entry_type method.
result = client . update_entry_type request
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
To update an entry type, use the
entryTypes.patch
method.
Delete an entry type
Console
In the Google Cloud console, go to the Knowledge Catalog Metadata types page.
Go to Metadata types
Click the Entry types > Custom tab.
Click the entry type that you want to delete.
On the Entry type details page, click Delete . Confirm when
prompted.
gcloud
To delete an entry type, use the
gcloud dataplex entry-types delete command .
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
/// <summary>Snippet for DeleteEntryType</summary>
/// <remarks>
/// This snippet has been automatically generated and should be regarded as a code template only.
/// It will require modifications to work:
/// - It may require correct/in-range values for request initialization.
/// - It may require specifying regional endpoints when creating the service client as shown in
/// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint.
/// </remarks>
public void DeleteEntryTypeRequestObject ()
{
// Create client
CatalogServiceClient catalogServiceClient = CatalogServiceClient . Create ();
// Initialize request argument(s)
DeleteEntryTypeRequest request = new DeleteEntryTypeRequest
{
EntryTypeName = EntryTypeName . FromProjectLocationEntryType ( "[PROJECT]" , "[LOCATION]" , "[ENTRY_TYPE]" ),
Etag = "" ,
};
// Make the request
Operation<Empty , OperationMetadata > response = catalogServiceClient . DeleteEntryType ( request );
// Poll until the returned long-running operation is complete
Operation<Empty , OperationMetadata > completedResponse = response . PollUntilCompleted ();
// Retrieve the operation result
Empty result = completedResponse . Result ;
// Or get the name of the operation
string operationName = response . Name ;
// This name can be stored, then the long-running operation retrieved later by name
Operation<Empty , OperationMetadata > retrievedResponse = catalogServiceClient . PollOnceDeleteEntryType ( operationName );
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
req := & dataplexpb . DeleteEntryTypeRequest {
// TODO: Fill request struct fields.
// See https://pkg.go.dev/cloud.google.com/go/dataplex/apiv1/dataplexpb#DeleteEntryTypeRequest.
}
op , err := c . DeleteEntryType ( ctx , req )
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
import com.google.cloud.dataplex.v1. CatalogServiceClient ;
import com.google.cloud.dataplex.v1. DeleteEntryTypeRequest ;
import com.google.cloud.dataplex.v1. EntryTypeName ;
import com.google.protobuf. Empty ;
public class SyncDeleteEntryType {
public static void main ( String [] args ) throws Exception {
syncDeleteEntryType ();
}
public static void syncDeleteEntryType () throws Exception {
// This snippet has been automatically generated and should be regarded as a code template only.
// It will require modifications to work:
// - It may require correct/in-range values for request initialization.
// - It may require specifying regional endpoints when creating the service client as shown in
// https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
try ( CatalogServiceClient catalogServiceClient = CatalogServiceClient . create ()) {
DeleteEntryTypeRequest request =
DeleteEntryTypeRequest . newBuilder ()
. setName ( EntryTypeName . of ( "[PROJECT]" , "[LOCATION]" , "[ENTRY_TYPE]" ). toString ())
. setEtag ( "etag3123477" )
. build ();
catalogServiceClient . deleteEntryTypeAsync ( request ). get ();
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
def sample_delete_entry_type ():
# Create a client
client = dataplex_v1 . CatalogServiceClient ()
# Initialize request argument(s)
request = dataplex_v1 . DeleteEntryTypeRequest (
name = "name_value" ,
)
# Make the request
operation = client . delete_entry_type ( request = request )
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
# Snippet for the delete_entry_type call in the CatalogService service
#
# This snippet has been automatically generated and should be regarded as a code
# template only. It will require modifications to work:
# - It may require correct/in-range values for request initialization.
# - It may require specifying regional endpoints when creating the service
# client as shown in https://cloud.google.com/ruby/docs/reference.
#
# This is an auto-generated example demonstrating basic usage of
# Google::Cloud::Dataplex::V1::CatalogService::Client#delete_entry_type.
#
def delete_entry_type
# Create a client object. The client can be reused for multiple calls.
client = Google :: Cloud :: Dataplex :: V1 :: CatalogService :: Client . new
# Create a request. To set request fields, pass in keyword arguments.
request = Google :: Cloud :: Dataplex :: V1 :: DeleteEntryTypeRequest . new
# Call the delete_entry_type method.
result = client . delete_entry_type request
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
To delete an entry type, use the
entryTypes.delete
method.
What's next
Learn how to search for resources in Knowledge Catalog .
Learn how to manage aspects and enrich metadata .
Learn how to import metadata into Knowledge Catalog .
Learn more about metadata management in Knowledge Catalog .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
