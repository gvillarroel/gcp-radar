---
title: "Create a bucket \_|\_ Cloud Storage \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/storage/docs/creating-buckets
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/storage/docs
source_metadata:
  url: https://docs.cloud.google.com/storage/docs/creating-buckets
  title: "Create a bucket \_|\_ Cloud Storage \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Cloud Storage
Guides
Send feedback
Create a bucket
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to create a Cloud Storage bucket . If not
otherwise specified in your request, buckets are created in the
US multi-region with a default storage class of Standard storage
and have a seven-day soft delete retention duration.
If you're creating a bucket for the first time, see
Discover object storage with the Google Cloud console or
Discover object storage with the Google Cloud CLI for a more
comprehensive walkthrough of the tasks you can perform with
Cloud Storage.
Note: A bucket's name is non-editable metadata .
If you need to designate a specific name, it must be
specified at bucket creation.
Required roles
Note: The following content describes the required IAM roles and
permissions for creating a bucket with basic settings. If you want to set up
cross-bucket replication as part of creating your bucket, you need
additional roles and permissions. Refer to Before you begin in the
cross-bucket replication user guide for information on the roles and permissions
required.
In order to get the required permissions for creating a Cloud Storage
bucket, ask your administrator to grant you the Storage Admin
( roles/storage.admin ) IAM role for the project.
This predefined role contains the permission required to create a bucket.
To see the exact permissions that are required, expand the
Required permissions section:
Required permissions
storage.buckets.create
storage.buckets.enableObjectRetention (only required if
enabling object retention configurations
for the bucket)
storage.buckets.list (only required if creating a
bucket using the Google Cloud console.)
resourcemanager.projects.get (only required if creating a
bucket using the Google Cloud console)
You might also be able to get these permissions with custom roles or other
predefined roles. To see which roles are associated with which permissions,
refer to IAM roles for Cloud Storage .
For instructions on granting roles for projects, see
Manage access to projects .
Create a new bucket
To create a bucket with specific settings or advanced configurations, complete
the following steps:
Note: To create a zonal bucket that uses the Rapid storage class, see
Create a zonal bucket .
Console
When creating a bucket using the Google Cloud console, you are only
required to set a globally unique name for your bucket; all other steps are
either optional or have default settings.
In the Google Cloud console, go to the Cloud Storage Buckets page.
Go to Buckets
Click add_box Create .
On the Create a bucket page, enter your bucket information. After
each of the following steps, click Continue to proceed to the next
step:
In the Get started section, do the following:
Enter a globally unique name that meets the
bucket name requirements .
To add a bucket label , click the
expand_more expander arrow to
expand the Labels section, click
add_box Add
label , and specify a key and a value for
your label.
In the Choose where to store your data section, do the
following:
Select a Location type .
Use the location type's drop-down menu to select a
Location where object data
within your bucket will be permanently stored.
If you select the dual-region location
type, you can also choose to enable
turbo replication by
using the relevant checkbox.
To set up cross-bucket replication ,
select Add cross-bucket replication via Storage Transfer Service and
follow the steps:
Set up cross-bucket replication
In the Bucket menu, select a bucket.
In the Replication settings section,
click Configure to configure settings for the
replication job.
The Configure cross-bucket replication pane
appears.
To filter objects to replicate by object name prefix,
enter a prefix with which you want to include or exclude
objects, then click add
Add a prefix .
To set a storage class for the replicated objects,
select a storage class from the Storage class menu.
If you skip this step, the replicated objects will use the
destination bucket's storage class by default.
Click Done .
In the Choose how to store your data section, do the
following:
Select a default storage class for the
bucket or Autoclass for automatic storage
class management of your bucket's data.
In the Optimize storage for data-intensive workloads section,
do the following:
To enable hierarchical namespace , select
Enable Hierarchical namespace on this bucket .
Note: You cannot enable hierarchical namespace in an existing
bucket.
To enable Rapid Cache , select
Enable Rapid Cache and follow the steps:
To create caches, click Configure .
In the Configure cache settings dialog that appears, click
the drop-down arrow next to the listed regions and select the
zones where you want to create caches.
Click Done .
Note: Additional permissions
are required to enable Rapid Cache.
In the Choose how to control access to objects section, select
whether or not your bucket enforces
public access prevention , and select
uniform bucket-level access for your bucket's objects.
Note: If public access prevention is already enforced by your
project's organization policy ,
the Prevent public access checkbox is locked.
In the Choose how to protect object data section, do the
following:
Select any of the options under Data protection that you
want to set for your bucket.
To change the amount of time that soft delete
retains objects after deletion, select the Soft delete policy checkbox, and then
select the Set custom retention duration option. Then, specify how long you want to
retain deleted objects.
To disable soft delete, for example if the bucket will primarily contain
short-lived, temporary data, clear the Soft delete policy checkbox.
To choose how your object data will be encrypted, click the
expand_more expander arrow labeled
Data encryption , and select a
Data encryption method .
Click Create .
To learn how to get detailed error information about failed Cloud Storage
operations in the Google Cloud console, see
Troubleshooting .
Command line
Note: Cloud Shell provisions a temporary virtual machine. If you
want to upload objects to Cloud Storage or download objects from
Cloud Storage, use a local development environment.
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
In your development environment, run the
gcloud storage buckets create command:
gcloud storage buckets create gs:// BUCKET_NAME --location= BUCKET_LOCATION
Where:
BUCKET_NAME is the name you want to give your
bucket, subject to naming requirements . For example,
my-bucket .
BUCKET_LOCATION is the location of your
bucket. For example, US .
Note: When creating a configurable dual-region , you must
set the --location flag to be the location code associated with
the underlying regions, and you must use the
--placement flag with a valid pair of regions. For example,
--location=ASIA --placement=ASIA-EAST1,ASIA-SOUTHEAST1 .
If the request is successful, the command returns the following message:
Creating gs:// BUCKET_NAME /...
Set the following flags to have greater control over the creation of
your bucket:
--project : Specify the project ID or project number with which your
bucket will be associated. For example, my-project .
--default-storage-class : Specify the default storage class
of your bucket. For example, STANDARD .
--uniform-bucket-level-access : Enable uniform bucket-level access
for your bucket.
--soft-delete-duration : Specify a soft delete retention
duration, which is the number of days you want to retain objects after
they get deleted. For example, 10d .
--encryption-enforcement-file : Provide a file that defines
which encryption methods are restricted or allowed for new
objects in the bucket.
For example:
gcloud storage buckets create gs:// BUCKET_NAME --project= PROJECT_ID --default-storage-class= STORAGE_CLASS --location= BUCKET_LOCATION --uniform-bucket-level-access
--soft-delete-duration= RETENTION_DURATION --encryption-enforcement-file= ENCRYPTION_ENFORCEMENT_FILE
For a complete list of options for bucket creation using the
gcloud CLI, see buckets create options .
Client libraries
Note: Other options for creating a new bucket can
be found in the JSON API reference for
bucket.insert
C++
For more information, see the
Cloud Storage C++ API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
namespace gcs = :: google :: cloud :: storage ;
using :: google :: cloud :: StatusOr ;
[]( gcs :: Client client , std :: string const & bucket_name ,
std :: string const & storage_class , std :: string const & location ) {
StatusOr<gcs :: BucketMetadata > bucket_metadata =
client . CreateBucket ( bucket_name , gcs :: BucketMetadata ()
. set_storage_class ( storage_class )
. set_location ( location ));
if ( ! bucket_metadata ) throw std :: move ( bucket_metadata ). status ();
std :: cout << "Bucket " << bucket_metadata - > name () << " created."
<< " \n Full Metadata: " << * bucket_metadata << " \n " ;
}
C#
For more information, see the
Cloud Storage C# API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
using Google.Apis.Storage.v1.Data ;
using Google.Cloud.Storage.V1 ;
using System ;
public class CreateRegionalBucketSample
{
/// <summary>
/// Creates a storage bucket with region.
/// </summary>
/// <param name="projectId">The ID of the project to create the buckets in.</param>
/// <param name="location">The location of the bucket. Object data for objects in the bucket resides in
/// physical storage within this region. Defaults to US.</param>
/// <param name="bucketName">The name of the bucket to create.</param>
/// <param name="storageClass">The bucket's default storage class, used whenever no storageClass is specified
/// for a newly-created object. This defines how objects in the bucket are stored
/// and determines the SLA and the cost of storage. Values include MULTI_REGIONAL,
/// REGIONAL, STANDARD, NEARLINE, COLDLINE, ARCHIVE, and DURABLE_REDUCED_AVAILABILITY.
/// If this value is not specified when the bucket is created, it will default to
/// STANDARD.</param>
public Bucket CreateRegionalBucket (
string projectId = "your-project-id" ,
string bucketName = "your-unique-bucket-name" ,
string location = "us-west1" ,
string storageClass = "REGIONAL" )
{
var storage = StorageClient . Create ();
Bucket bucket = new Bucket
{
Location = location ,
Name = bucketName ,
StorageClass = storageClass
};
var newlyCreatedBucket = storage . CreateBucket ( projectId , bucket );
Console . WriteLine ( $"Created {bucketName}." );
return newlyCreatedBucket ;
}
}
Go
For more information, see the
Cloud Storage Go API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
import (
"context"
"fmt"
"io"
"time"
"cloud.google.com/go/storage"
)
// createBucketClassLocation creates a new bucket in the project with Storage class and
// location.
func createBucketClassLocation ( w io . Writer , projectID , bucketName string ) error {
// projectID := "my-project-id"
// bucketName := "bucket-name"
ctx := context . Background ()
client , err := storage . NewClient ( ctx )
if err != nil {
return fmt . Errorf ( "storage.NewClient: %w" , err )
}
defer client . Close ()
ctx , cancel := context . WithTimeout ( ctx , time . Second * 30 )
defer cancel ()
storageClassAndLocation := & storage . BucketAttrs {
StorageClass : "COLDLINE" ,
Location : "asia" ,
}
bucket := client . Bucket ( bucketName )
if err := bucket . Create ( ctx , projectID , storageClassAndLocation ); err != nil {
return fmt . Errorf ( "Bucket(%q).Create: %w" , bucketName , err )
}
fmt . Fprintf ( w , "Created bucket %v in %v with storage class %v\n" , bucketName , storageClassAndLocation . Location , storageClassAndLocation . StorageClass )
return nil
}
Java
For more information, see the
Cloud Storage Java API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
import com.google.cloud.storage. Bucket ;
import com.google.cloud.storage. BucketInfo ;
import com.google.cloud.storage. Storage ;
import com.google.cloud.storage. StorageClass ;
import com.google.cloud.storage. StorageOptions ;
public class CreateBucketWithStorageClassAndLocation {
public static void createBucketWithStorageClassAndLocation ( String projectId , String bucketName ) {
// The ID of your GCP project
// String projectId = "your-project-id";
// The ID to give your GCS bucket
// String bucketName = "your-unique-bucket-name";
Storage storage = StorageOptions . newBuilder (). setProjectId ( projectId ). build (). getService ();
// See the StorageClass documentation for other valid storage classes:
// https://googleapis.dev/java/google-cloud-clients/latest/com/google/cloud/storage/StorageClass.html
StorageClass storageClass = StorageClass . COLDLINE ;
// See this documentation for other valid locations:
// http://g.co/cloud/storage/docs/bucket-locations#location-mr
String location = "ASIA" ;
Bucket bucket =
storage . create (
BucketInfo . newBuilder ( bucketName )
. setStorageClass ( storageClass )
. setLocation ( location )
. build ());
System . out . println (
"Created bucket "
+ bucket . getName ()
+ " in "
+ bucket . getLocation ()
+ " with storage class "
+ bucket . getStorageClass ());
}
}
Node.js
For more information, see the
Cloud Storage Node.js API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
/**
* TODO(developer): Uncomment the following lines before running the sample.
*/
// The ID of your GCS bucket
// const bucketName = 'your-unique-bucket-name';
// The name of a storage class
// See the StorageClass documentation for other valid storage classes:
// https://googleapis.dev/java/google-cloud-clients/latest/com/google/cloud/storage/StorageClass.html
// const storageClass = 'coldline';
// The name of a location
// See this documentation for other valid locations:
// http://g.co/cloud/storage/docs/locations#location-mr
// const location = 'ASIA';
// Imports the Google Cloud client library
const { Storage } = require ( ' @google-cloud/storage ' );
// Creates a client
// The bucket in the sample below will be created in the project associated with this client.
// For more information, please see https://cloud.google.com/docs/authentication/production or https://googleapis.dev/nodejs/storage/latest/Storage.html
const storage = new Storage ();
async function createBucketWithStorageClassAndLocation () {
// For default values see: https://cloud.google.com/storage/docs/locations and
// https://cloud.google.com/storage/docs/storage-classes
const [ bucket ] = await storage . createBucket ( bucketName , {
location ,
[ storageClass ] : true ,
});
console . log (
` ${ bucket . name } created with ${ storageClass } class in ${ location } `
);
}
createBucketWithStorageClassAndLocation (). catch ( console . error );
PHP
For more information, see the
Cloud Storage PHP API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
use Google\Cloud\Storage\StorageClient;
/**
* Create a new bucket with a custom default storage class and location.
*
* @param string $bucketName The name of your Cloud Storage bucket.
* (e.g. 'my-bucket')
*/
function create_bucket_class_location(string $bucketName): void
{
$storage = new StorageClient();
$storageClass = 'COLDLINE';
$location = 'ASIA';
$bucket = $storage->createBucket($bucketName, [
'storageClass' => $storageClass,
'location' => $location,
]);
$objects = $bucket->objects([
'encryption' => [
'defaultKmsKeyName' => null,
]
]);
printf('Created bucket %s in %s with storage class %s', $bucketName, $storageClass, $location);
}
Python
For more information, see the
Cloud Storage Python API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
from google.cloud import storage
def create_bucket_class_location ( bucket_name ):
"""
Create a new bucket in the US region with the coldline storage
class
"""
# bucket_name = "your-new-bucket-name"
storage_client = storage . Client ()
bucket = storage_client . bucket ( bucket_name )
bucket . storage_class = "COLDLINE"
new_bucket = storage_client . create_bucket ( bucket , location = "us" )
print (
"Created bucket {} in {} with storage class {} " . format (
new_bucket . name , new_bucket . location , new_bucket . storage_class
)
)
return new_bucket
Ruby
For more information, see the
Cloud Storage Ruby API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
def create_bucket_class_location bucket_name :
# The ID to give your GCS bucket
# bucket_name = "your-unique-bucket-name"
require "google/cloud/storage"
storage = Google :: Cloud :: Storage . new
bucket = storage . create_bucket bucket_name ,
location : "ASIA" ,
storage_class : "COLDLINE"
puts "Created bucket #{ bucket . name } in #{ bucket . location } with #{ bucket . storage_class } class"
end
Terraform
You can use a Terraform resource to create a storage bucket .
# Create new storage bucket in the US multi-region
# with coldline storage
resource "random_id" "bucket_prefix" {
byte_length = 8
}
resource "google_storage_bucket" "static" {
name = "${random_id.bucket_prefix.hex}-new-bucket"
location = "US"
storage_class = "COLDLINE"
uniform_bucket_level_access = true
}
REST APIs
JSON API
Have gcloud CLI installed and initialized , which lets
you generate an access token for the Authorization header.
Create a JSON file that contains the settings for the bucket, which
must include a name for the bucket. See the Buckets:Insert
documentation for a complete list of settings. The following are
common settings to include:
{
"name" : " BUCKET_NAME " ,
"location" : " BUCKET_LOCATION " ,
"storageClass" : " STORAGE_CLASS " ,
"iamConfiguration" : {
"uniformBucketLevelAccess" : {
"enabled" : true
},
}
}
Where:
BUCKET_NAME is the name you want to give
your bucket, subject to naming requirements . For example,
my-bucket .
BUCKET_LOCATION is the location where
you want to store your bucket's object data . For example,
US .
Note: When creating a configurable dual-region , you must
set the location parameter to be the location code
associated with the underlying regions, and you must also
include a customPlacementConfig parameter.
STORAGE_CLASS is the default
storage class of your bucket. For example, STANDARD .
Use cURL to call the JSON API :
curl -X POST --data-binary @ JSON_FILE_NAME \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
"https://storage.googleapis.com/storage/v1/b?project= PROJECT_IDENTIFIER "
Where:
JSON_FILE_NAME is name of the JSON file
you created in Step 2.
PROJECT_IDENTIFIER is the ID or number of
the project with which your bucket will be associated. For
example, my-project .
XML API
Have gcloud CLI installed and initialized , which lets
you generate an access token for the Authorization header.
Create an XML file that contains settings for the bucket. See the
XML: Create a bucket documentation for a complete list of
settings. The following are common settings to include:
<CreateBucketConfiguration>
<StorageClass> STORAGE_CLASS </StorageClass>
<LocationConstraint> BUCKET_LOCATION </LocationConstraint>
</CreateBucketConfiguration>
Where:
STORAGE_CLASS is the default
storage class of your bucket. For example, STANDARD .
BUCKET_LOCATION is the location where
you want to store your bucket's object data . For example,
US .
Note: When creating a configurable dual-region , you must
set the <LocationConstraint> element to be the location
code associated with the underlying regions, and you must also
include a <CustomPlacementConfig> element.
Use cURL to call the XML API :
curl -X PUT --data-binary @ XML_FILE_NAME \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "x-goog-project-id: PROJECT_ID " \
"https://storage.googleapis.com/ BUCKET_NAME "
Where:
XML_FILE_NAME is name of the XML file you
created in Step 2.
PROJECT_ID is the ID of the project with
which your bucket will be associated. For example, my-project .
BUCKET_NAME is the name you want to give
your bucket, subject to naming requirements . For example,
my-bucket .
If the request was successful, a response is not returned.
What's next
List buckets in a project .
Learn about the metadata associated with a bucket .
Move or rename a bucket .
Delete a bucket .
Upload an object to your bucket .
Create and configure buckets declaratively with the
Kubernetes Config Connector , which lets you describe Google Cloud resources
using Kubernetes tooling, APIs, and configurations. For more information,
see the Config Connector API documentation .
Try it for yourself
If you're new to Google Cloud, create an account to evaluate how
Cloud Storage performs in real-world
scenarios. New customers also get $300 in free credits to run, test, and
deploy workloads.
Try Cloud Storage free
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
