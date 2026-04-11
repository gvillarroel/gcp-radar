---
title: "Access public data \_|\_ Cloud Storage \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/storage/docs/access-public-data
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/storage/docs/introduction
source_metadata:
  url: https://docs.cloud.google.com/storage/docs/access-public-data
  title: "Access public data \_|\_ Cloud Storage \_|\_ Google Cloud Documentation"
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
Access public data
Stay organized with collections
Save and categorize content based on your preferences.
Some data stored in Cloud Storage is configured so that it's
readable by anyone at any time. This public data can be accessed in several
ways, depending on how you want to work with the data.
API Link
Note: Accessing this link does not require authentication. It is suitable,
for example, as a link in a web page, or for downloading with a command-line
tool such as cURL.
Get the name of the public object and the bucket that stores the object.
Use the following URI to access an object in the bucket:
https://storage.googleapis.com/ BUCKET_NAME / OBJECT_NAME
For example, the Google public bucket gcp-public-data-landsat contains
the Landsat public dataset . You can link to the publicly shared object
LC08/01/001/003/LC08_L1GT_001003_20140812_20170420_01_T2/LC08_L1GT_001003_20140812_20170420_01_T2_B3.TIF
with the link:
https://storage.googleapis.com/gcp-public-data-landsat/LC08/01/001/003/LC08_L1GT_001003_20140812_20170420_01_T2/LC08_L1GT_001003_20140812_20170420_01_T2_B3.TIF
Console
Note: Accessing public data with the Google Cloud console requires you to
sign in with a user account. The method described in the API link tab
provides the most broadly applicable way to access individual public
objects. The method described in the Command line tab provides the most
efficient way to access collections of data.
Get the name of the public object and the bucket that stores the object.
Using a web browser, access the object with the following URI (you
are asked to sign in if you are not already signed in):
https://console.cloud.google.com/storage/browser/_details/ BUCKET_NAME / OBJECT_NAME
If the public has permission to list the bucket's contents, you can
list all the objects in the bucket with the following URI:
https://console.cloud.google.com/storage/browser/ BUCKET_NAME
For example, the Google public bucket gcp-public-data-landsat contains
the Landsat public dataset . You can access the bucket with:
https://console.cloud.google.com/storage/browser/gcp-public-data-landsat
Command line
Note: Accessing public data with the gcloud CLI does not require
authentication. This tool is suited for general access to buckets that
contain publicly listable public data.
If you don't have the gcloud CLI,
follow these instructions to install it .
When installing the gcloud CLI, if you don't want to
authenticate, skip the step of running the command gcloud init ,
and instead run the following command:
gcloud config set auth/disable_credentials True
Get the name of the public object and the bucket that stores the object.
If permission to list the bucket's contents is granted to the
public, you can list some or all of the objects contained in the bucket
by using the ls command.
For example, the Google public bucket gcp-public-data-landsat contains
the Landsat public dataset . You can list objects with the prefix
LC08/01/001/003/LC with the following command:
gcloud storage ls --recursive gs://gcp-public-data-landsat/LC08/01/001/003/LC*
Note: Shells (like bash and zsh) can attempt to expand wildcards before
passing the arguments to the gcloud CLI. To avoid these
problems, surround the wildcarded expression with single quotes (on
Linux) or double quotes (on Windows). For more information, see
Potentially Surprising Behavior When Using Wildcards .
Download specific public objects contained in the bucket by using the
cp command.
For example, the following command downloads a file from the bucket
gcp-public-data-landsat to your local directory:
gcloud storage cp gs://gcp-public-data-landsat/LC08/01/001/003/LC08_L1GT_001003_20140812_20170420_01_T2/LC08_L1GT_001003_20140812_20170420_01_T2_B3.TIF .
Client libraries
C++
For more information, see the
Cloud Storage C++ API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
namespace gcs = :: google :: cloud :: storage ;
[]( std :: string const & bucket_name , std :: string const & object_name ) {
// Create a client that does not authenticate with the server.
auto client = gcs :: Client {
google :: cloud :: Options {}. set<google :: cloud :: UnifiedCredentialsOption > (
google :: cloud :: MakeInsecureCredentials ())};
// Read an object, the object must have been made public.
gcs :: ObjectReadStream stream = client . ReadObject ( bucket_name , object_name );
int count = 0 ;
std :: string line ;
while ( std :: getline ( stream , line , '\n' )) {
++ count ;
}
if ( stream . bad ()) throw google :: cloud :: Status ( stream . status ());
std :: cout << "The object has " << count << " lines \n " ;
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
public class DownloadPublicFileSample
{
public string DownloadPublicFile (
string bucketName = "your-bucket-name" ,
string objectName = "your-object-name" ,
string localPath = "path/to/download/object/to" )
{
var storage = StorageClient . CreateUnauthenticated ();
using var outputFile = File . OpenWrite ( localPath );
storage . DownloadObject ( bucketName , objectName , outputFile );
Console . WriteLine ( $"Downloaded public file {objectName} from bucket {bucketName} to {localPath}." );
return localPath ;
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
"google.golang.org/api/option"
)
// downloadPublicFile downloads a public object.
func downloadPublicFile ( w io . Writer , bucket , object string ) ([] byte , error ) {
// bucket := "bucket-name"
// object := "object-name"
ctx := context . Background ()
// Create a client that does not authenticate with the server.
client , err := storage . NewClient ( ctx , option . WithoutAuthentication ())
if err != nil {
return nil , fmt . Errorf ( "storage.NewClient: %w" , err )
}
defer client . Close ()
ctx , cancel := context . WithTimeout ( ctx , time . Second * 50 )
defer cancel ()
rc , err := client . Bucket ( bucket ). Object ( object ). NewReader ( ctx )
if err != nil {
return nil , fmt . Errorf ( "Object(%q).NewReader: %w" , object , err )
}
defer rc . Close ()
data , err := io . ReadAll ( rc )
if err != nil {
return nil , fmt . Errorf ( "io.ReadAll: %w" , err )
}
fmt . Fprintf ( w , "Blob %v downloaded.\n" , object )
return data , nil
}
Java
For more information, see the
Cloud Storage Java API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
import com.google.cloud.storage. BlobId ;
import com.google.cloud.storage. Storage ;
import com.google.cloud.storage. StorageOptions ;
import java.nio.file.Path ;
public class DownloadPublicObject {
public static void downloadPublicObject (
String bucketName , String publicObjectName , Path destFilePath ) {
// The name of the bucket to access
// String bucketName = "my-bucket";
// The name of the remote public file to download
// String publicObjectName = "publicfile.txt";
// The path to which the file should be downloaded
// Path destFilePath = Paths.get("/local/path/to/file.txt");
// Instantiate an anonymous Google Cloud Storage client, which can only access public files
Storage storage = StorageOptions . getUnauthenticatedInstance (). getService ();
storage . downloadTo ( BlobId . of ( bucketName , publicObjectName ), destFilePath );
System . out . println (
"Downloaded public object "
+ publicObjectName
+ " from bucket name "
+ bucketName
+ " to "
+ destFilePath );
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
// The ID of your GCS file
// const srcFilename = 'your-file-name';
// The path to which the file should be downloaded
// const destFileName = '/local/path/to/file.txt';
// Imports the Google Cloud client library
const { Storage } = require ( ' @google-cloud/storage ' );
// Creates a client
const storage = new Storage ();
async function downloadPublicFile () {
const options = {
destination : destFileName ,
};
// Download public file.
await storage . bucket ( bucketName ). file ( srcFileName ). download ( options );
console . log (
`Downloaded public file ${ srcFileName } from bucket name ${ bucketName } to ${ destFileName } `
);
}
downloadPublicFile (). catch ( console . error );
Python
For more information, see the
Cloud Storage Python API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
from google.cloud import storage
def download_public_file ( bucket_name , source_blob_name , destination_file_name ):
"""Downloads a public blob from the bucket."""
# bucket_name = "your-bucket-name"
# source_blob_name = "storage-object-name"
# destination_file_name = "local/path/to/file"
storage_client = storage . Client . create_anonymous_client ()
bucket = storage_client . bucket ( bucket_name )
blob = bucket . blob ( source_blob_name )
blob . download_to_filename ( destination_file_name )
print (
"Downloaded public blob {} from bucket {} to {} ." . format (
source_blob_name , bucket . name , destination_file_name
)
)
Ruby
For more information, see the
Cloud Storage Ruby API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
def download_public_file bucket_name :, file_name :, local_file_path :
# The name of the bucket to access
# bucket_name = "my-bucket"
# The name of the remote public file to download
# file_name = "publicfile.txt"
# The path to which the file should be downloaded
# local_file_path = "/local/path/to/file.txt"
require "google/cloud/storage"
storage = Google :: Cloud :: Storage . anonymous
bucket = storage . bucket bucket_name , skip_lookup : true
file = bucket . file file_name
file . download local_file_path
puts "Downloaded public object #{ file . name } from bucket #{ bucket } to #{ local_file_path } "
end
What's next
Explore some of the public datasets provided by Cloud Storage .
Learn how to publicly share an object .
Learn about options to control access to your data.
Control access to your data using IAM permissions .
Download objects from a bucket.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
