---
title: "Host a static website \_|\_ Cloud Storage \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/storage/docs/hosting-static-website
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/storage/docs
source_metadata:
  url: https://docs.cloud.google.com/storage/docs/hosting-static-website
  title: "Host a static website \_|\_ Cloud Storage \_|\_ Google Cloud Documentation"
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
Host a static website
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to configure a Cloud Storage bucket to host
a static website for a domain you own. Static web pages can contain
client-side technologies such as HTML, CSS, and JavaScript. They cannot contain
dynamic content such as server-side scripts like PHP.
Overview
Because Cloud Storage doesn't support custom domains with HTTPS on its own, this
tutorial uses Cloud Storage with an external Application Load Balancer to serve content from
a custom domain over HTTPS. For more ways to serve content from a custom domain
over HTTPS, see troubleshooting for HTTPS serving . You can also use
Cloud Storage to serve custom domain content over HTTP , which doesn't
require a load balancer.
For examples and tips on static web pages, including how to host static assets
for a dynamic website, see the Static Website page .
Caution: This tutorial makes content available to the public internet. We
recommend that you don't serve content that contains sensitive or private data
from your Cloud Storage bucket.
The instructions in this page describe how to perform the following steps:
Upload and share your site's files.
Set up a load balancer and SSL certificate.
Connect your load balancer to your bucket.
Point your domain to your load balancer using an A record.
Test the website.
Pricing
The instructions in this page use the following billable components of
Google Cloud:
Cloud Storage
Cloud Load Balancing
See the Monitoring your charges tip for details on what charges
may be incurred when hosting a static website.
Limitations
You can host a static website using a bucket whose objects are readable to the
public. You cannot host a static website using a bucket that has
public access prevention enabled.
To host a static website using Cloud Storage, you can use either
of the following methods:
Create a new bucket whose data can be accessed publicly. During bucket
creation, clear the box labeled Enforce public access prevention on this bucket .
After creating the bucket, grant the Storage Object Viewer role to the
allUsers principal. For more information, see Create a bucket .
Make the data of an existing bucket public. For more information, see
Share your files .
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the
Compute Engine API
for your project.
Have the following Identity and Access Management roles:
Storage Admin and
Compute Network Admin .
Have a domain that you own or manage. If you don't have an existing domain,
there are many services through which you can register a new domain, such as
Cloud Domains .
This tutorial uses the domain example.com .
Have a few website files you want to serve. This tutorial works best if you
have at least an index page ( index.html ) and a 404 page
( 404.html ).
Have a Cloud Storage bucket for storing the files you want to
serve. If you don't currently have a bucket,
create a bucket .
(Optional) If you want your Cloud Storage bucket to have the same
name as your domain, you must
verify that
you own or manage the domain that you will be using . Make sure you are
verifying the top-level domain, such as example.com , and not a
subdomain, such as www.example.com . If you purchased your
domain through Cloud Domains, verification is automatic.
Note: For information about using Cloud DNS to set up your domain, see
Set up your domain using Cloud DNS .
Upload your site's files
Add the files you want your website to serve to the bucket:
Console
In the Google Cloud console, go to the Cloud Storage Buckets page.
Go to Buckets
In the list of buckets, click the name of the bucket that you created.
The Bucket details page opens with the Objects tab selected.
Click the Upload files button.
In the file dialog, browse to the desired file and select it.
After the upload completes, you should see the filename along with file
information displayed in the bucket.
To learn how to get detailed error information about failed Cloud Storage
operations in the Google Cloud console, see
Troubleshooting .
Command line
Use the gcloud storage cp command to copy files to your bucket.
For example, to copy the file index.html from its current location
Desktop to the bucket my-static-assets :
gcloud storage cp Desktop/index.html gs://my-static-assets
If successful, the response looks like the following example:
Completed files 1/1 | 164.3kiB/164.3kiB
Client libraries
C++
For more information, see the
Cloud Storage C++ API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
namespace gcs = :: google :: cloud :: storage ;
using :: google :: cloud :: StatusOr ;
[]( gcs :: Client client , std :: string const & file_name ,
std :: string const & bucket_name , std :: string const & object_name ) {
// Note that the client library automatically computes a hash on the
// client-side to verify data integrity during transmission.
StatusOr<gcs :: ObjectMetadata > metadata = client . UploadFile (
file_name , bucket_name , object_name , gcs :: IfGenerationMatch ( 0 ));
if ( ! metadata ) throw std :: move ( metadata ). status ();
std :: cout << "Uploaded " << file_name << " to object " << metadata - > name ()
<< " in bucket " << metadata - > bucket ()
<< " \n Full metadata: " << * metadata << " \n " ;
}
C#
For more information, see the
Cloud Storage C# API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
using Google.Cloud.Storage.V1 ;
using System ;
using System.IO ;
public class UploadFileSample
{
public void UploadFile (
string bucketName = "your-unique-bucket-name" ,
string localPath = "my-local-path/my-file-name" ,
string objectName = "my-file-name" )
{
var storage = StorageClient . Create ();
using var fileStream = File . OpenRead ( localPath );
storage . UploadObject ( bucketName , objectName , null , fileStream );
Console . WriteLine ( $"Uploaded {objectName}." );
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
"os"
"time"
"cloud.google.com/go/storage"
)
// uploadFile uploads an object.
func uploadFile ( w io . Writer , bucket , object string ) error {
// bucket := "bucket-name"
// object := "object-name"
ctx := context . Background ()
client , err := storage . NewClient ( ctx )
if err != nil {
return fmt . Errorf ( "storage.NewClient: %w" , err )
}
defer client . Close ()
// Open local file.
f , err := os . Open ( "notes.txt" )
if err != nil {
return fmt . Errorf ( "os.Open: %w" , err )
}
defer f . Close ()
ctx , cancel := context . WithTimeout ( ctx , time . Second * 50 )
defer cancel ()
o := client . Bucket ( bucket ). Object ( object )
// Optional: set a generation-match precondition to avoid potential race
// conditions and data corruptions. The request to upload is aborted if the
// object's generation number does not match your precondition.
// For an object that does not yet exist, set the DoesNotExist precondition.
o = o . If ( storage . Conditions { DoesNotExist : true })
// If the live object already exists in your bucket, set instead a
// generation-match precondition using the live object's generation number.
// attrs, err := o.Attrs(ctx)
// if err != nil {
// return fmt.Errorf("object.Attrs: %w", err)
// }
// o = o.If(storage.Conditions{GenerationMatch: attrs.Generation})
// Upload an object with storage.Writer.
wc := o . NewWriter ( ctx )
if _ , err = io . Copy ( wc , f ); err != nil {
return fmt . Errorf ( "io.Copy: %w" , err )
}
if err := wc . Close (); err != nil {
return fmt . Errorf ( "Writer.Close: %w" , err )
}
fmt . Fprintf ( w , "Blob %v uploaded.\n" , object )
return nil
}
Java
For more information, see the
Cloud Storage Java API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
The following sample uploads an individual object:
import com.google.cloud.storage. BlobId ;
import com.google.cloud.storage. BlobInfo ;
import com.google.cloud.storage. Storage ;
import com.google.cloud.storage. StorageOptions ;
import java.io.IOException ;
import java.nio.file.Paths ;
public class UploadObject {
public static void uploadObject (
String projectId , String bucketName , String objectName , String filePath ) throws IOException {
// The ID of your GCP project
// String projectId = "your-project-id";
// The ID of your GCS bucket
// String bucketName = "your-unique-bucket-name";
// The ID of your GCS object
// String objectName = "your-object-name";
// The path to your file to upload
// String filePath = "path/to/your/file"
Storage storage = StorageOptions . newBuilder (). setProjectId ( projectId ). build (). getService ();
BlobId blobId = BlobId . of ( bucketName , objectName );
BlobInfo blobInfo = BlobInfo . newBuilder ( blobId ). build ();
// Optional: set a generation-match precondition to avoid potential race
// conditions and data corruptions. The request returns a 412 error if the
// preconditions are not met.
Storage . BlobWriteOption precondition ;
if ( storage . get ( bucketName , objectName ) == null ) {
// For a target object that does not yet exist, set the DoesNotExist precondition.
// This will cause the request to fail if the object is created before the request runs.
precondition = Storage . BlobWriteOption . doesNotExist ();
} else {
// If the destination already exists in your bucket, instead set a generation-match
// precondition. This will cause the request to fail if the existing object's generation
// changes before the request runs.
precondition =
Storage . BlobWriteOption . generationMatch (
storage . get ( bucketName , objectName ). getGeneration ());
}
storage . createFrom ( blobInfo , Paths . get ( filePath ), precondition );
System . out . println (
"File " + filePath + " uploaded to bucket " + bucketName + " as " + objectName );
}
}
The following sample uploads multiple objects concurrently:
import com.google.cloud.storage.transfermanager. ParallelUploadConfig ;
import com.google.cloud.storage.transfermanager. TransferManager ;
import com.google.cloud.storage.transfermanager. TransferManagerConfig ;
import com.google.cloud.storage.transfermanager. UploadResult ;
import java.io.IOException ;
import java.nio.file.Path ;
import java.util.List ;
class UploadMany {
public static void uploadManyFiles ( String bucketName , List<Path> files ) throws IOException {
TransferManager transferManager = TransferManagerConfig . newBuilder (). build (). getService ();
ParallelUploadConfig parallelUploadConfig =
ParallelUploadConfig . newBuilder (). setBucketName ( bucketName ). build ();
List<UploadResult> results =
transferManager . uploadFiles ( files , parallelUploadConfig ). getUploadResults ();
for ( UploadResult result : results ) {
System . out . println (
"Upload for "
+ result . getInput (). getName ()
+ " completed with status "
+ result . getStatus ());
}
}
}
The following sample uploads all objects with a common prefix concurrently:
import com.google.cloud.storage.transfermanager. ParallelUploadConfig ;
import com.google.cloud.storage.transfermanager. TransferManager ;
import com.google.cloud.storage.transfermanager. TransferManagerConfig ;
import com.google.cloud.storage.transfermanager. UploadResult ;
import java.io.IOException ;
import java.nio.file.Files ;
import java.nio.file.Path ;
import java.util.ArrayList ;
import java.util.List ;
import java.util.stream.Stream ;
class UploadDirectory {
public static void uploadDirectoryContents ( String bucketName , Path sourceDirectory )
throws IOException {
TransferManager transferManager = TransferManagerConfig . newBuilder (). build (). getService ();
ParallelUploadConfig parallelUploadConfig =
ParallelUploadConfig . newBuilder (). setBucketName ( bucketName ). build ();
// Create a list to store the file paths
List<Path> filePaths = new ArrayList <> ();
// Get all files in the directory
// try-with-resource to ensure pathStream is closed
try ( Stream<Path> pathStream = Files . walk ( sourceDirectory )) {
pathStream . filter ( Files :: isRegularFile ). forEach ( filePaths :: add );
}
List<UploadResult> results =
transferManager . uploadFiles ( filePaths , parallelUploadConfig ). getUploadResults ();
for ( UploadResult result : results ) {
System . out . println (
"Upload for "
+ result . getInput (). getName ()
+ " completed with status "
+ result . getStatus ());
}
}
}
Node.js
For more information, see the
Cloud Storage Node.js API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
The following sample uploads an individual object:
/**
* TODO(developer): Uncomment the following lines before running the sample.
*/
// The ID of your GCS bucket
// const bucketName = 'your-unique-bucket-name';
// The path to your file to upload
// const filePath = 'path/to/your/file';
// The new ID for your GCS file
// const destFileName = 'your-new-file-name';
// Imports the Google Cloud client library
const { Storage } = require ( ' @google-cloud/storage ' );
// Creates a client
const storage = new Storage ();
async function uploadFile () {
const options = {
destination : destFileName ,
// Optional:
// Set a generation-match precondition to avoid potential race conditions
// and data corruptions. The request to upload is aborted if the object's
// generation number does not match your precondition. For a destination
// object that does not yet exist, set the ifGenerationMatch precondition to 0
// If the destination object already exists in your bucket, set instead a
// generation-match precondition using its generation number.
preconditionOpts : { ifGenerationMatch : generationMatchPrecondition },
};
await storage . bucket ( bucketName ). upload ( filePath , options );
console . log ( ` ${ filePath } uploaded to ${ bucketName } ` );
}
uploadFile (). catch ( console . error );
The following sample uploads multiple objects concurrently:
/**
* TODO(developer): Uncomment the following lines before running the sample.
*/
// The ID of your GCS bucket
// const bucketName = 'your-unique-bucket-name';
// The ID of the first GCS file to upload
// const firstFilePath = 'your-first-file-name';
// The ID of the second GCS file to upload
// const secondFilePath = 'your-second-file-name';
// Imports the Google Cloud client library
const { Storage , TransferManager } = require ( ' @google-cloud/storage ' );
// Creates a client
const storage = new Storage ();
// Creates a transfer manager client
const transferManager = new TransferManager ( storage . bucket ( bucketName ));
async function uploadManyFilesWithTransferManager () {
// Uploads the files
await transferManager . uploadManyFiles ([ firstFilePath , secondFilePath ]);
for ( const filePath of [ firstFilePath , secondFilePath ]) {
console . log ( ` ${ filePath } uploaded to ${ bucketName } .` );
}
}
uploadManyFilesWithTransferManager (). catch ( console . error );
The following sample uploads all objects with a common prefix concurrently:
/**
* TODO(developer): Uncomment the following lines before running the sample.
*/
// The ID of your GCS bucket
// const bucketName = 'your-unique-bucket-name';
// The local directory to upload
// const directoryName = 'your-directory';
// Imports the Google Cloud client library
const { Storage , TransferManager } = require ( ' @google-cloud/storage ' );
// Creates a client
const storage = new Storage ();
// Creates a transfer manager client
const transferManager = new TransferManager ( storage . bucket ( bucketName ));
async function uploadDirectoryWithTransferManager () {
// Uploads the directory
await transferManager . uploadManyFiles ( directoryName );
console . log ( ` ${ directoryName } uploaded to ${ bucketName } .` );
}
uploadDirectoryWithTransferManager (). catch ( console . error );
PHP
For more information, see the
Cloud Storage PHP API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
use Google\Cloud\Storage\StorageClient;
/**
* Upload a file.
*
* @param string $bucketName The name of your Cloud Storage bucket.
* (e.g. 'my-bucket')
* @param string $objectName The name of your Cloud Storage object.
* (e.g. 'my-object')
* @param string $source The path to the file to upload.
* (e.g. '/path/to/your/file')
*/
function upload_object(string $bucketName, string $objectName, string $source): void
{
$storage = new StorageClient();
if (!$file = fopen($source, 'r')) {
throw new \InvalidArgumentException('Unable to open file for reading');
}
$bucket = $storage->bucket($bucketName);
$object = $bucket->upload($file, [
'name' => $objectName
]);
printf('Uploaded %s to gs://%s/%s' . PHP_EOL, basename($source), $bucketName, $objectName);
}
Python
For more information, see the
Cloud Storage Python API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
The following sample uploads an individual object:
from google.cloud import storage
def upload_blob ( bucket_name , source_file_name , destination_blob_name ):
"""Uploads a file to the bucket."""
# The ID of your GCS bucket
# bucket_name = "your-bucket-name"
# The path to your file to upload
# source_file_name = "local/path/to/file"
# The ID of your GCS object
# destination_blob_name = "storage-object-name"
storage_client = storage . Client ()
bucket = storage_client . bucket ( bucket_name )
blob = bucket . blob ( destination_blob_name )
# Optional: set a generation-match precondition to avoid potential race conditions
# and data corruptions. The request to upload is aborted if the object's
# generation number does not match your precondition. For a destination
# object that does not yet exist, set the if_generation_match precondition to 0.
# If the destination object already exists in your bucket, set instead a
# generation-match precondition using its generation number.
generation_match_precondition = 0
blob . upload_from_filename ( source_file_name , if_generation_match = generation_match_precondition )
print (
f "File { source_file_name } uploaded to { destination_blob_name } ."
)
The following sample uploads multiple objects concurrently:
def upload_many_blobs_with_transfer_manager (
bucket_name , filenames , source_directory = "" , workers = 8
):
"""Upload every file in a list to a bucket, concurrently in a process pool.
Each blob name is derived from the filename, not including the
`source_directory` parameter. For complete control of the blob name for each
file (and other aspects of individual blob metadata), use
transfer_manager.upload_many() instead.
"""
# The ID of your GCS bucket
# bucket_name = "your-bucket-name"
# A list (or other iterable) of filenames to upload.
# filenames = ["file_1.txt", "file_2.txt"]
# The directory on your computer that is the root of all of the files in the
# list of filenames. This string is prepended (with os.path.join()) to each
# filename to get the full path to the file. Relative paths and absolute
# paths are both accepted. This string is not included in the name of the
# uploaded blob; it is only used to find the source files. An empty string
# means "the current working directory". Note that this parameter allows
# directory traversal (e.g. "/", "../") and is not intended for unsanitized
# end user input.
# source_directory=""
# The maximum number of processes to use for the operation. The performance
# impact of this value depends on the use case, but smaller files usually
# benefit from a higher number of processes. Each additional process occupies
# some CPU and memory resources until finished. Threads can be used instead
# of processes by passing `worker_type=transfer_manager.THREAD`.
# workers=8
from google.cloud.storage import Client , transfer_manager
storage_client = Client ()
bucket = storage_client . bucket ( bucket_name )
results = transfer_manager . upload_many_from_filenames (
bucket , filenames , source_directory = source_directory , max_workers = workers
)
for name , result in zip ( filenames , results ):
# The results list is either `None` or an exception for each filename in
# the input list, in order.
if isinstance ( result , Exception ):
print ( "Failed to upload {} due to exception: {} " . format ( name , result ))
else :
print ( "Uploaded {} to {} ." . format ( name , bucket . name ))
The following sample uploads all objects with a common prefix concurrently:
def upload_directory_with_transfer_manager ( bucket_name , source_directory , workers = 8 ):
"""Upload every file in a directory, including all files in subdirectories.
Each blob name is derived from the filename, not including the `directory`
parameter itself. For complete control of the blob name for each file (and
other aspects of individual blob metadata), use
transfer_manager.upload_many() instead.
"""
# The ID of your GCS bucket
# bucket_name = "your-bucket-name"
# The directory on your computer to upload. Files in the directory and its
# subdirectories will be uploaded. An empty string means "the current
# working directory".
# source_directory=""
# The maximum number of processes to use for the operation. The performance
# impact of this value depends on the use case, but smaller files usually
# benefit from a higher number of processes. Each additional process occupies
# some CPU and memory resources until finished. Threads can be used instead
# of processes by passing `worker_type=transfer_manager.THREAD`.
# workers=8
from pathlib import Path
from google.cloud.storage import Client , transfer_manager
storage_client = Client ()
bucket = storage_client . bucket ( bucket_name )
# Generate a list of paths (in string form) relative to the `directory`.
# This can be done in a single list comprehension, but is expanded into
# multiple lines here for clarity.
# First, recursively get all files in `directory` as Path objects.
directory_as_path_obj = Path ( source_directory )
paths = directory_as_path_obj . rglob ( "*" )
# Filter so the list only includes files, not directories themselves.
file_paths = [ path for path in paths if path . is_file ()]
# These paths are relative to the current working directory. Next, make them
# relative to `directory`
relative_paths = [ path . relative_to ( source_directory ) for path in file_paths ]
# Finally, convert them all to strings.
string_paths = [ str ( path ) for path in relative_paths ]
print ( "Found {} files." . format ( len ( string_paths )))
# Start the upload.
results = transfer_manager . upload_many_from_filenames (
bucket , string_paths , source_directory = source_directory , max_workers = workers
)
for name , result in zip ( string_paths , results ):
# The results list is either `None` or an exception for each filename in
# the input list, in order.
if isinstance ( result , Exception ):
print ( "Failed to upload {} due to exception: {} " . format ( name , result ))
else :
print ( "Uploaded {} to {} ." . format ( name , bucket . name ))
Ruby
For more information, see the
Cloud Storage Ruby API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
def upload_file bucket_name :, local_file_path :, file_name : nil
# The ID of your GCS bucket
# bucket_name = "your-unique-bucket-name"
# The path to your file to upload
# local_file_path = "/local/path/to/file.txt"
# The ID of your GCS object
# file_name = "your-file-name"
require "google/cloud/storage"
storage = Google :: Cloud :: Storage . new
bucket = storage . bucket bucket_name , skip_lookup : true
file = bucket . create_file local_file_path , file_name
puts "Uploaded #{ local_file_path } as #{ file . name } in bucket #{ bucket_name } "
end
Terraform
# Upload a simple index.html page to the bucket
resource "google_storage_bucket_object" "indexpage" {
name = "index.html"
content = "<html><body>Hello World!</body></html>"
content_type = "text/html"
bucket = google_storage_bucket.static_website.id
}
# Upload a simple 404 / error page to the bucket
resource "google_storage_bucket_object" "errorpage" {
name = "404.html"
content = "<html><body>404!</body></html>"
content_type = "text/html"
bucket = google_storage_bucket.static_website.id
}
REST APIs
JSON API
Have gcloud CLI installed and initialized , which lets
you generate an access token for the Authorization header.
Use cURL to call the JSON API with a
POST Object request. For the file index.html uploaded to
a bucket named my-static-assets :
curl -X POST --data-binary @index.html \
-H "Content-Type: text/html" \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
"https://storage.googleapis.com/upload/storage/v1/b/my-static-assets/o?uploadType=media&name=index.html"
XML API
Have gcloud CLI installed and initialized , which lets
you generate an access token for the Authorization header.
Use cURL to call the XML API with a
PUT Object request. For the file index.html uploaded to a
bucket named my-static-assets :
curl -X PUT --data-binary @index.html \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: text/html" \
"https://storage.googleapis.com/my-static-assets/index.html"
Share your files
To make all objects in your bucket readable to anyone on the public internet:
Caution: Before making your bucket publicly accessible, make sure that the
files in your bucket don't contain sensitive or private information.
Console
In the Google Cloud console, go to the Cloud Storage Buckets page.
Go to Buckets
In the list of buckets, click the name of the bucket that you want to
make public.
Select the Permissions tab near the top of the page.
If the Public access pane reads Not public , click the button
labeled Remove public access prevention and click Confirm in
the dialog that appears.
Click the add_box
Grant access button.
The Add principals dialog appears.
In the New principals field, enter allUsers .
In the Select a role drop-down, select the Cloud Storage
sub-menu, and click the Storage Object Viewer option.
Click Save .
Click Allow public access .
Once shared publicly, a link icon appears for each object in the public
access column. You can click this icon to get the URL for the object.
To learn how to get detailed error information about failed Cloud Storage
operations in the Google Cloud console, see
Troubleshooting .
Command line
Use the buckets add-iam-policy-binding command:
gcloud storage buckets add-iam-policy-binding gs://my-static-assets --member=allUsers --role=roles/storage.objectViewer
Client libraries
C++
For more information, see the
Cloud Storage C++ API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
namespace gcs = :: google :: cloud :: storage ;
using :: google :: cloud :: StatusOr ;
[]( gcs :: Client client , std :: string const & bucket_name ) {
auto current_policy = client . GetNativeBucketIamPolicy (
bucket_name , gcs :: RequestedPolicyVersion ( 3 ));
if ( ! current_policy ) throw std :: move ( current_policy ). status ();
current_policy - > set_version ( 3 );
current_policy - > bindings (). emplace_back (
gcs :: NativeIamBinding ( "roles/storage.objectViewer" , { "allUsers" }));
auto updated =
client . SetNativeBucketIamPolicy ( bucket_name , * current_policy );
if ( ! updated ) throw std :: move ( updated ). status ();
std :: cout << "Policy successfully updated: " << * updated << " \n " ;
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
using System.Collections.Generic ;
public class MakeBucketPublicSample
{
public void MakeBucketPublic ( string bucketName = "your-unique-bucket-name" )
{
var storage = StorageClient . Create ();
Policy policy = storage . GetBucketIamPolicy ( bucketName );
policy . Bindings . Add ( new Policy . BindingsData
{
Role = "roles/storage.objectViewer" ,
Members = new List<string> { "allUsers" }
});
storage . SetBucketIamPolicy ( bucketName , policy );
Console . WriteLine ( bucketName + " is now public " );
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
"cloud.google.com/go/iam"
"cloud.google.com/go/iam/apiv1/iampb"
"cloud.google.com/go/storage"
)
// setBucketPublicIAM makes all objects in a bucket publicly readable.
func setBucketPublicIAM ( w io . Writer , bucketName string ) error {
// bucketName := "bucket-name"
ctx := context . Background ()
client , err := storage . NewClient ( ctx )
if err != nil {
return fmt . Errorf ( "storage.NewClient: %w" , err )
}
defer client . Close ()
policy , err := client . Bucket ( bucketName ). IAM (). V3 (). Policy ( ctx )
if err != nil {
return fmt . Errorf ( "Bucket(%q).IAM().V3().Policy: %w" , bucketName , err )
}
role := "roles/storage.objectViewer"
policy . Bindings = append ( policy . Bindings , & iampb . Binding {
Role : role ,
Members : [] string { iam . AllUsers },
})
if err := client . Bucket ( bucketName ). IAM (). V3 (). SetPolicy ( ctx , policy ); err != nil {
return fmt . Errorf ( "Bucket(%q).IAM().SetPolicy: %w" , bucketName , err )
}
fmt . Fprintf ( w , "Bucket %v is now publicly readable\n" , bucketName )
return nil
}
Java
For more information, see the
Cloud Storage Java API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
import com.google.cloud. Identity ;
import com.google.cloud. Policy ;
import com.google.cloud.storage. Storage ;
import com.google.cloud.storage. StorageOptions ;
import com.google.cloud.storage. StorageRoles ;
public class MakeBucketPublic {
public static void makeBucketPublic ( String projectId , String bucketName ) {
// The ID of your GCP project
// String projectId = "your-project-id";
// The ID of your GCS bucket
// String bucketName = "your-unique-bucket-name";
Storage storage = StorageOptions . newBuilder (). setProjectId ( projectId ). build (). getService ();
Policy originalPolicy = storage . getIamPolicy ( bucketName );
storage . setIamPolicy (
bucketName ,
originalPolicy . toBuilder ()
. addIdentity ( StorageRoles . objectViewer (), Identity . allUsers ()) // All users can view
. build ());
System . out . println ( "Bucket " + bucketName + " is now publicly readable" );
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
// Imports the Google Cloud client library
const { Storage } = require ( ' @google-cloud/storage ' );
// Creates a client
const storage = new Storage ();
async function makeBucketPublic () {
await storage . bucket ( bucketName ). makePublic ();
console . log ( `Bucket ${ bucketName } is now publicly readable` );
}
makeBucketPublic (). catch ( console . error );
PHP
For more information, see the
Cloud Storage PHP API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
use Google\Cloud\Storage\StorageClient;
/**
* Update the specified bucket's IAM configuration to make it publicly accessible.
*
* @param string $bucketName The name of your Cloud Storage bucket.
* (e.g. 'my-bucket')
*/
function set_bucket_public_iam(string $bucketName): void
{
$storage = new StorageClient();
$bucket = $storage->bucket($bucketName);
$policy = $bucket->iam()->policy(['requestedPolicyVersion' => 3]);
$policy['version'] = 3;
$role = 'roles/storage.objectViewer';
$members = ['allUsers'];
$policy['bindings'][] = [
'role' => $role,
'members' => $members
];
$bucket->iam()->setPolicy($policy);
printf('Bucket %s is now public', $bucketName);
}
Python
For more information, see the
Cloud Storage Python API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
from typing import List
from google.cloud import storage
def set_bucket_public_iam (
bucket_name : str = "your-bucket-name" ,
members : List [ str ] = [ "allUsers" ],
):
"""Set a public IAM Policy to bucket"""
# bucket_name = "your-bucket-name"
storage_client = storage . Client ()
bucket = storage_client . bucket ( bucket_name )
policy = bucket . get_iam_policy ( requested_policy_version = 3 )
policy . bindings . append (
{ "role" : "roles/storage.objectViewer" , "members" : members }
)
bucket . set_iam_policy ( policy )
print ( f "Bucket { bucket . name } is now publicly readable" )
Ruby
For more information, see the
Cloud Storage Ruby API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
def set_bucket_public_iam bucket_name :
# The ID of your GCS bucket
# bucket_name = "your-unique-bucket-name"
require "google/cloud/storage"
storage = Google :: Cloud :: Storage . new
bucket = storage . bucket bucket_name
bucket . policy do | p |
p . add "roles/storage.objectViewer" , "allUsers"
end
puts "Bucket #{ bucket_name } is now publicly readable"
end
Terraform
# Make bucket public by granting allUsers storage.objectViewer access
resource "google_storage_bucket_iam_member" "public_rule" {
bucket = google_storage_bucket.static_website.name
role = "roles/storage.objectViewer"
member = "allUsers"
}
REST APIs
JSON API
Have gcloud CLI installed and initialized , which lets
you generate an access token for the Authorization header.
Create a JSON file that contains the following information:
{
"bindings" :[
{
"role" : "roles/storage.objectViewer" ,
"members" :[ "allUsers" ]
}
]
}
Use cURL to call the JSON API with a
PUT Bucket request:
curl -X PUT --data-binary @ JSON_FILE_NAME \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
"https://storage.googleapis.com/storage/v1/b/ BUCKET_NAME /iam"
Where:
JSON_FILE_NAME is the path for the JSON
file that you created in Step 2.
BUCKET_NAME is the name of the bucket
whose objects you want to make public. For example,
my-static-assets .
XML API
Making all objects in a bucket publicly readable is not supported by
the XML API. Use the Google Cloud console or gcloud storage instead,
or set ACLs for each individual object . Note that in order to set
ACLs for each individual object, you must switch your bucket's
Access control mode to Fine-grained .
Note: roles/storage.objectViewer includes permission to list the objects
in the bucket. If you don't want to grant listing publicly, use
roles/storage.legacyObjectReader .
If wanted, you can alternatively
make portions of your bucket publicly accessible .
Visitors receive a http 403 response code when requesting the URL for a
non-public or non-existent file. See the next section for information on how to
add an error page that uses a http 404 response code.
Recommended: assign specialty pages
You can assign an index page suffix and a custom error page, which are known as
specialty pages. Assigning either is optional, but if you don't assign an index
page suffix and upload the corresponding index page, users who access your
top-level site are served an XML document tree containing a list of the public
objects in your bucket.
For more information on the behavior of specialty pages, see Specialty pages .
Console
In the Google Cloud console, go to the Cloud Storage Buckets page.
Go to Buckets
In the list of buckets, find the bucket you created.
Click the Bucket overflow menu
( more_vert ) associated
with the bucket and select Edit website configuration .
In the website configuration dialog, specify the main page and
error page.
Click Save .
Note: View, change, or remove these settings from the Edit website
configuration menu.
To learn how to get detailed error information about failed Cloud Storage
operations in the Google Cloud console, see
Troubleshooting .
Command line
Use the buckets update command with the --web-main-page-suffix
and --web-error-page flags.
In the following sample, the MainPageSuffix is set to
index.html and NotFoundPage is set to 404.html :
gcloud storage buckets update gs://my-static-assets --web-main-page-suffix = index.html --web-error-page = 404 .html
If successful, the command returns:
Updating gs://www.example.com/...
Completed 1
Note: Change or remove these settings with additional buckets update
commands and view these settings with the buckets describe command.
Client libraries
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
std :: string const & main_page_suffix , std :: string const & not_found_page ) {
StatusOr<gcs :: BucketMetadata > original =
client . GetBucketMetadata ( bucket_name );
if ( ! original ) throw std :: move ( original ). status ();
StatusOr<gcs :: BucketMetadata > patched = client . PatchBucket (
bucket_name ,
gcs :: BucketMetadataPatchBuilder (). SetWebsite (
gcs :: BucketWebsite { main_page_suffix , not_found_page }),
gcs :: IfMetagenerationMatch ( original - > metageneration ()));
if ( ! patched ) throw std :: move ( patched ). status ();
if ( ! patched - > has_website ()) {
std :: cout << "Static website configuration is not set for bucket "
<< patched - > name () << " \n " ;
return ;
}
std :: cout << "Static website configuration successfully set for bucket "
<< patched - > name () << " \n New main page suffix is: "
<< patched - > website (). main_page_suffix
<< " \n New not found page is: "
<< patched - > website (). not_found_page << " \n " ;
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
public class BucketWebsiteConfigurationSample
{
public Bucket BucketWebsiteConfiguration (
string bucketName = "your-bucket-name" ,
string mainPageSuffix = "index.html" ,
string notFoundPage = "404.html" )
{
var storage = StorageClient . Create ();
var bucket = storage . GetBucket ( bucketName );
if ( bucket . Website == null )
{
bucket . Website = new Bucket . WebsiteData ();
}
bucket . Website . MainPageSuffix = mainPageSuffix ;
bucket . Website . NotFoundPage = notFoundPage ;
bucket = storage . UpdateBucket ( bucket );
Console . WriteLine ( $"Static website bucket {bucketName} is set up to use {mainPageSuffix} as the index page and {notFoundPage} as the 404 not found page." );
return bucket ;
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
// setBucketWebsiteInfo sets website configuration on a bucket.
func setBucketWebsiteInfo ( w io . Writer , bucketName , indexPage , notFoundPage string ) error {
// bucketName := "www.example.com"
// indexPage := "index.html"
// notFoundPage := "404.html"
ctx := context . Background ()
client , err := storage . NewClient ( ctx )
if err != nil {
return fmt . Errorf ( "storage.NewClient: %w" , err )
}
defer client . Close ()
ctx , cancel := context . WithTimeout ( ctx , time . Second * 10 )
defer cancel ()
bucket := client . Bucket ( bucketName )
bucketAttrsToUpdate := storage . BucketAttrsToUpdate {
Website : & storage . BucketWebsite {
MainPageSuffix : indexPage ,
NotFoundPage : notFoundPage ,
},
}
if _ , err := bucket . Update ( ctx , bucketAttrsToUpdate ); err != nil {
return fmt . Errorf ( "Bucket(%q).Update: %w" , bucketName , err )
}
fmt . Fprintf ( w , "Static website bucket %v is set up to use %v as the index page and %v as the 404 page\n" , bucketName , indexPage , notFoundPage )
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
import com.google.cloud.storage. Storage ;
import com.google.cloud.storage. StorageOptions ;
public class SetBucketWebsiteInfo {
public static void setBucketWesbiteInfo (
String projectId , String bucketName , String indexPage , String notFoundPage ) {
// The ID of your GCP project
// String projectId = "your-project-id";
// The ID of your static website bucket
// String bucketName = "www.example.com";
// The index page for a static website bucket
// String indexPage = "index.html";
// The 404 page for a static website bucket
// String notFoundPage = "404.html";
Storage storage = StorageOptions . newBuilder (). setProjectId ( projectId ). build (). getService ();
Bucket bucket = storage . get ( bucketName );
bucket . toBuilder (). setIndexPage ( indexPage ). setNotFoundPage ( notFoundPage ). build (). update ();
System . out . println (
"Static website bucket "
+ bucketName
+ " is set up to use "
+ indexPage
+ " as the index page and "
+ notFoundPage
+ " as the 404 page" );
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
// The name of the main page
// const mainPageSuffix = 'http://example.com';
// The Name of a 404 page
// const notFoundPage = 'http://example.com/404.html';
// Imports the Google Cloud client library
const { Storage } = require ( ' @google-cloud/storage ' );
// Creates a client
const storage = new Storage ();
async function addBucketWebsiteConfiguration () {
await storage . bucket ( bucketName ). setMetadata ({
website : {
mainPageSuffix ,
notFoundPage ,
},
});
console . log (
`Static website bucket ${ bucketName } is set up to use ${ mainPageSuffix } as the index page and ${ notFoundPage } as the 404 page`
);
}
addBucketWebsiteConfiguration (). catch ( console . error );
PHP
For more information, see the
Cloud Storage PHP API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
use Google\Cloud\Storage\StorageClient;
/**
* Update the given bucket's website configuration.
*
* @param string $bucketName The name of your Cloud Storage bucket.
* (e.g. 'my-bucket')
* @param string $indexPageObject the name of an object in the bucket to use as
* (e.g. 'index.html')
* an index page for a static website bucket.
* @param string $notFoundPageObject the name of an object in the bucket to use
* (e.g. '404.html')
* as the 404 Not Found page.
*/
function define_bucket_website_configuration(string $bucketName, string $indexPageObject, string $notFoundPageObject): void
{
$storage = new StorageClient();
$bucket = $storage->bucket($bucketName);
$bucket->update([
'website' => [
'mainPageSuffix' => $indexPageObject,
'notFoundPage' => $notFoundPageObject
]
]);
printf(
'Static website bucket %s is set up to use %s as the index page and %s as the 404 page.',
$bucketName,
$indexPageObject,
$notFoundPageObject
);
}
Python
For more information, see the
Cloud Storage Python API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
from google.cloud import storage
def define_bucket_website_configuration ( bucket_name , main_page_suffix , not_found_page ):
"""Configure website-related properties of bucket"""
# bucket_name = "your-bucket-name"
# main_page_suffix = "index.html"
# not_found_page = "404.html"
storage_client = storage . Client ()
bucket = storage_client . get_bucket ( bucket_name )
bucket . configure_website ( main_page_suffix , not_found_page )
bucket . patch ()
print (
"Static website bucket {} is set up to use {} as the index page and {} as the 404 page" . format (
bucket . name , main_page_suffix , not_found_page
)
)
return bucket
Ruby
For more information, see the
Cloud Storage Ruby API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
def define_bucket_website_configuration bucket_name :, main_page_suffix :, not_found_page :
# The ID of your static website bucket
# bucket_name = "www.example.com"
# The index page for a static website bucket
# main_page_suffix = "index.html"
# The 404 page for a static website bucket
# not_found_page = "404.html"
require "google/cloud/storage"
storage = Google :: Cloud :: Storage . new
bucket = storage . bucket bucket_name
bucket . update do | b |
b . website_main = main_page_suffix
b . website_404 = not_found_page
end
puts "Static website bucket #{ bucket_name } is set up to use #{ main_page_suffix } as the index page and " \
" #{ not_found_page } as the 404 page"
end
REST APIs
JSON API
Have gcloud CLI installed and initialized , which lets
you generate an access token for the Authorization header.
Create a JSON file that sets the mainPageSuffix and
notFoundPage properties in a website object to the desired pages.
In the following sample, the mainPageSuffix is set to index.html
and notFoundPage is set to 404.html :
{
"website" :{
"mainPageSuffix" : "index.html" ,
"notFoundPage" : "404.html"
}
}
Use cURL to call the JSON API with a
PATCH Bucket request. For the bucket my-static-assets :
curl -X PATCH --data-binary @web-config.json \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
"https://storage.googleapis.com/storage/v1/b/my-static-assets"
XML API
Have gcloud CLI installed and initialized , which lets
you generate an access token for the Authorization header.
Create an XML file that sets the MainPageSuffix and NotFoundPage
elements in a WebsiteConfiguration element to the desired pages.
In the following sample, the MainPageSuffix is set to index.html
and NotFoundPage is set to 404.html :
<WebsiteConfiguration>
<MainPageSuffix>index.html</MainPageSuffix>
<NotFoundPage>404.html</NotFoundPage>
</WebsiteConfiguration>
Use cURL to call the XML API with a
PUT Bucket request and websiteConfig query string
parameter. For my-static-assets :
curl -X PUT --data-binary @web-config.xml \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
https://storage.googleapis.com/my-static-assets?websiteConfig
Note: Change or remove these settings with additional PUT requests
and view these settings with a GET request.
Set up your load balancer and SSL certificate
Cloud Storage doesn't support custom domains with HTTPS on its own, so you also
need to set up an SSL certificate attached to an HTTPS load balancer
to serve your website through HTTPS. This section shows you how to add your
bucket to a load balancer's backend and how to add a new
Google-managed SSL certificate to the load balancer's frontend.
Select the load balancer type
In the Google Cloud console, go to the Load balancing page.
Go to Load balancing
Click Create load balancer .
For Type of load balancer , select Application Load Balancer
(HTTP/HTTPS) and click Next .
Click Configure .
The configuration window for your load balancer appears.
Basic configuration
Before continuing with the configuration, enter a
Load balancer name , such as example-lb .
Configure the frontend
This section shows you how to configure the HTTPS protocol and create an SSL
certificate. You can also select an existing certificate or upload a
self-managed SSL certificate .
Click Frontend configuration .
(Optional) Give your frontend configuration a Name .
For Protocol , select HTTPS (includes HTTP/2) .
For IP version , select IPv4 . If you prefer IPv6, see
IPv6 termination for additional information.
For the IP address field:
In the drop-down, click Create IP address .
In the Reserve a new static IP address dialog, enter a name, such
as example-ip for the Name of the IP address.
Click Reserve .
Note: Reserving a new static IP address incurs additional costs if the
IP address is not attached to a forwarding rule. To avoid such costs,
delete the static IP address when you delete the associated load
balancer.
For Port , select 443 .
In the Certificate field dropdown, select Create a new certificate .
The certificate creation form appears in a panel. Configure the following:
Give your certificate a Name , such as example-ssl .
For Create mode , select Create Google-managed certificate .
For Domains , enter your website name, such as www.example.com . If
you want to serve your content through additional domains such as the root
domain example.com , press Enter to add them on additional lines.
Each certificate has a limit of 100 domains.
Click Create .
(Optional) If you want Google Cloud to automatically set up a
partial HTTP load balancer for redirecting HTTP traffic, select the
checkbox next to Enable HTTP to HTTPS redirect .
Click Done .
Configure the backend
Click Backend configuration .
In the Backend services & backend buckets dropdown, click Create
a backend bucket .
Choose a Backend bucket name , such as example-bucket . The name you
choose can be different from the name of the bucket you created earlier.
Click Browse , found in the Cloud Storage bucket field.
Select the my-static-assets bucket you created earlier, and click
Select .
(Optional) If you want to use Cloud CDN , select the checkbox for
Enable Cloud CDN and configure Cloud CDN as desired. Note that
Cloud CDN may incur additional costs .
Click Create .
Configure routing rules
Routing rules are the components of an external Application Load Balancer's URL map . For
this tutorial, you should skip this portion of the load balancer configuration,
because it is automatically set to use the backend you just configured.
Review the configuration
Click Review and finalize .
Review the Frontend , Routing rules , and Backend .
Click Create .
You may need to wait a few minutes for the load balancer to be created.
Connect your domain to your load balancer
After the load balancer is created, click the name of your load balancer:
example-lb . Note the IP address associated with the load balancer: for
example, 30.90.80.100 . To point your domain to your load balancer, create an
A record using your domain registration service. If you added multiple domains
to your SSL certificate, you must add an A record for each one, all pointing
to the load balancer's IP address. For example, to create A records for
www.example.com and example.com :
NAME TYPE DATA
www A 30.90.80.100
@ A 30.90.80.100
See Troubleshooting domain status for more information about connecting
your domain to your load balancer.
Recommended: Monitor the SSL certificate status
It might take up to 60-90 minutes for Google Cloud to provision the certificate
and make the site available through the load balancer. To monitor the status
of your certificate:
Console
Go to the Load balancing page in the Google Cloud console.
Go to Load balancing
Click the name of your load balancer: example-lb .
Click the name of the SSL certificate associated with the load balancer:
example-ssl .
The Status and Domain status rows show the certificate status. Both
must be active in order for the certificate to be valid for your website.
Command line
To check the certificate status, run the following command:
gcloud compute ssl-certificates describe CERTIFICATE_NAME \
--global \
--format="get(name,managed.status)"
To check the domain status, run the following command:
gcloud compute ssl-certificates describe CERTIFICATE_NAME \
--global \
--format="get(managed.domainStatus)"
See Troubleshooting SSL certificates for more information about
certificate status.
Test the website
Once the SSL certificate is active, verify that content is served from the
bucket by going to https://www.example.com/test.html , where test.html is an
object stored in the bucket that you're using as the backend. If you set the
MainPageSuffix property, https://www.example.com goes to index.html .
Clean up
After you finish the tutorial, you can clean up the resources that you created
so that they stop using quota and incurring charges. The following sections
describe how to delete or turn off these resources.
Delete the project
The easiest way to eliminate billing is to delete the project that you
created for the tutorial.
To delete the project:
Caution : Deleting a project has the following effects:
Everything in the project is deleted. If you used an existing project for
the tasks in this document, when you delete it, you also delete any other work you've
done in the project.
Custom project IDs are lost.
When you created this project, you might have created a custom project ID that you want to use in
the future. To preserve the URLs that use the project ID, such as an appspot.com
URL, delete selected resources inside the project instead of deleting the whole project.
If you plan to explore multiple architectures, tutorials, or quickstarts, reusing projects
can help you avoid exceeding project quota limits.
In the Google Cloud console, go to the Manage resources page.
Go to Manage resources
In the project list, select the project that you
want to delete, and then click Delete .
In the dialog, type the project ID, and then click
Shut down to delete the project.
Delete the load balancer and bucket
If you don't want to delete the entire project, delete the load balancer and
bucket that you created for the tutorial:
Go to the Load balancing page in the Google Cloud console.
Go to Load balancing
Select the checkbox next to example-lb .
Click Delete .
(Optional) Select the checkbox next to the resources you want to delete along
with the load balancer, such as the my-static-assets bucket or the
example-ssl SSL certificate.
Click Delete load balancer or Delete load balancer and the selected
resources .
Note: If you only want to delete the bucket you created, follow the instructions
at Deleting buckets .
Release a reserved IP address
To delete the reserved IP address you used for the tutorial:
In the Google Cloud console, go to the External IP addresses page.
Go to External IP addresses
Select the checkboxes next to example-ip .
Click Release static address .
In the confirmation window, click Delete .
What's next
See examples and tips for using buckets to host a static website .
Read about troubleshooting for hosting a static website .
Learn about hosting static assets for a dynamic website .
Learn about other Google Cloud web serving solutions .
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
