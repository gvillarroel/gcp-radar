---
title: "Cloud Storage client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/storage/docs/reference/libraries
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/storage/docs
source_metadata:
  url: https://docs.cloud.google.com/storage/docs/reference/libraries
  title: "Cloud Storage client libraries \_|\_ Google Cloud Documentation"
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
Cloud Storage client libraries
Stay organized with collections
Save and categorize content based on your preferences.
This page shows how to get started with the Cloud Client Libraries for the
Google Cloud Storage API. Client libraries make it easier to access
Google Cloud APIs from a supported language. Although you can use
Google Cloud APIs directly by making raw requests to the server, client
libraries provide simplifications that significantly reduce the amount of code
you need to write.
Read more about the Cloud Client Libraries
and the older Google API Client Libraries in
Client libraries explained .
Install the client library
C++
For more information about installing the C++ library,
see Setting up a C++ development environment .
C#
If you are using Visual Studio 2017 or higher, open nuget package manager window and type the following:
Install-Package Google.Cloud.Storage.V1
If you are using .NET Core command-line interface tools to install your dependencies, run the following command:
dotnet add package Google.Cloud.Storage.V1
For more information, see Setting Up a C# Development Environment .
Go
go get cloud.google.com/go/storage
For more information, see Setting Up a Go Development Environment .
Java
If you are using Maven , add
the following to your pom.xml file. For more information about
BOMs, see The Google Cloud Platform Libraries BOM .
< dependencyManagement >
< dependencies >
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>libraries - bom < / artifactId >
< version>26 .78.0 < / version >
< type>pom < / type >
< scope>import < / scope >
< / dependency >
< / dependencies >
< / dependencyManagement >
< dependencies >
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>google - cloud - storage < / artifactId >
< / dependency >
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>google - cloud - storage - control < / artifactId >
< / dependency >
< / dependencies >
If you are using Gradle ,
add the following to your dependencies:
implementation platform ( ' com . google . cloud : libraries - bom : 26.78.0 ' )
implementation ' com . google . cloud : google - cloud - storage '
If you are using sbt , add
the following to your dependencies:
libraryDependencies += "com.google.cloud" % "google-cloud-storage" % "2.64.1"
If you're using Visual Studio Code or IntelliJ, you can add client libraries to your
project using the following IDE plugins:
Cloud Code for VS Code
Cloud Code for IntelliJ
The plugins provide additional functionality, such as key management for service accounts. Refer
to each plugin's documentation for details.
Note: Cloud Java client libraries do not currently support Android.
For more information, see Setting Up a Java Development Environment .
Node.js
npm install @google-cloud/storage
For more information, see Setting Up a Node.js Development Environment .
PHP
composer require google/cloud-storage
For more information, see Using PHP on Google Cloud .
Python
pip install --upgrade google-cloud-storage
For more information, see Setting Up a Python Development Environment .
Ruby
gem install google-cloud-storage
For more information, see Setting Up a Ruby Development Environment .
Set up authentication
To authenticate calls to Google Cloud APIs, client libraries support
Application Default Credentials (ADC) ;
the libraries look for credentials in a set of defined locations and use those credentials
to authenticate requests to the API. With ADC, you can make
credentials available to your application in a variety of environments, such as local
development or production, without needing to modify your application code.
For production environments, the way you set up ADC depends on the service
and context. For more information, see Set up Application Default Credentials .
For a local development environment, you can set up ADC with the credentials
that are associated with your Google Account:
Install the Google Cloud CLI.
After installation,
initialize the Google Cloud CLI by running the following command:
gcloud init
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
If you're using a local shell, then create local authentication credentials for your user
account:
gcloud auth application-default login
You don't need to do this if you're using Cloud Shell.
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
A sign-in screen appears. After you sign in, your credentials are stored in the
local credential file used by ADC .
Use the client library
The following example shows how to use the client library.
C++
#include "google/cloud/storage/client.h"
#include <iostream>
#include <random>
#include <string>
#include <utility>
#include <vector>
void StorageQuickstart ( std :: string const & bucket_name ) {
// Create an aliases to make the code easier to read.
namespace gcs = :: google :: cloud :: storage ;
// Create a client to communicate with Google Cloud Storage. This client
// uses the default configuration for authentication and project id.
auto client = gcs :: Client ();
// Create a bucket
google :: cloud :: StatusOr<gcs :: BucketMetadata > metadata = client . CreateBucket (
bucket_name , gcs :: BucketMetadata (). set_location ( "US" ). set_storage_class (
gcs :: storage_class :: Standard ()));
if ( ! metadata ) throw std :: move ( metadata ). status ();
std :: cout << "Created bucket " << metadata - > name () << " \n " ;
}
C#
using Google.Apis.Storage.v1.Data ;
using Google.Cloud.Storage.V1 ;
using System ;
public class CreateBucketSample
{
public Bucket CreateBucket (
string projectId = "your-project-id" ,
string bucketName = "your-unique-bucket-name" )
{
var storage = StorageClient . Create ();
var bucket = storage . CreateBucket ( projectId , bucketName );
Console . WriteLine ( $"Created {bucketName}." );
return bucket ;
}
}
Go
// Sample storage-quickstart creates a Google Cloud Storage bucket.
package main
import (
"context"
"fmt"
"log"
"time"
"cloud.google.com/go/storage"
)
func main () {
ctx := context . Background ()
// Sets your Google Cloud Platform project ID.
projectID := "YOUR_PROJECT_ID"
// Creates a client.
client , err := storage . NewClient ( ctx )
if err != nil {
log . Fatalf ( "Failed to create client: %v" , err )
}
defer client . Close ()
// Sets the name for the new bucket.
bucketName := "my-new-bucket"
// Creates a Bucket instance.
bucket := client . Bucket ( bucketName )
// Creates the new bucket.
ctx , cancel := context . WithTimeout ( ctx , time . Second * 10 )
defer cancel ()
if err := bucket . Create ( ctx , projectID , nil ); err != nil {
log . Fatalf ( "Failed to create bucket: %v" , err )
}
fmt . Printf ( "Bucket %v created.\n" , bucketName )
}
Java
// Imports the Google Cloud client library
import com.google.cloud.storage. Bucket ;
import com.google.cloud.storage. BucketInfo ;
import com.google.cloud.storage. Storage ;
import com.google.cloud.storage. StorageOptions ;
public class QuickstartSample {
public static void main ( String ... args ) throws Exception {
// Instantiates a client
Storage storage = StorageOptions . getDefaultInstance (). getService ();
// The name for the new bucket
String bucketName = args [ 0 ] ; // "my-new-bucket";
// Creates the new bucket
Bucket bucket = storage . create ( BucketInfo . of ( bucketName ));
System . out . printf ( "Bucket %s created.%n" , bucket . getName ());
}
}
Node.js
// Imports the Google Cloud client library
const { Storage } = require ( ' @google-cloud/storage ' );
// For more information on ways to initialize Storage, please see
// https://googleapis.dev/nodejs/storage/latest/Storage.html
// Creates a client using Application Default Credentials
const storage = new Storage ();
// Creates a client from a Google service account key
// const storage = new Storage({keyFilename: 'key.json'});
/**
* TODO(developer): Uncomment these variables before running the sample.
*/
// The ID of your GCS bucket
// const bucketName = 'your-unique-bucket-name';
async function createBucket () {
// Creates the new bucket
await storage . createBucket ( bucketName );
console . log ( `Bucket ${ bucketName } created.` );
}
createBucket (). catch ( console . error );
PHP
# Includes the autoloader for libraries installed with composer
require __DIR__ . '/vendor/autoload.php';
# Imports the Google Cloud client library
use Google\Cloud\Storage\StorageClient;
# Your Google Cloud Platform project ID
$projectId = 'YOUR_PROJECT_ID';
# Instantiates a client
$storage = new StorageClient([
'projectId' => $projectId
]);
# The name for the new bucket
$bucketName = 'my-new-bucket';
# Creates the new bucket
$bucket = $storage->createBucket($bucketName);
echo 'Bucket ' . $bucket->name() . ' created.';
Python
# Imports the Google Cloud client library
from google.cloud import storage
# Instantiates a client
storage_client = storage . Client ()
# The name for the new bucket
bucket_name = "my-new-bucket"
# Creates the new bucket
bucket = storage_client . create_bucket ( bucket_name )
print ( f "Bucket { bucket . name } created." )
Ruby
def quickstart bucket_name :
# Imports the Google Cloud client library
require "google/cloud/storage"
# Instantiates a client
storage = Google :: Cloud :: Storage . new
# The ID to give your GCS bucket
# bucket_name = "your-unique-bucket-name"
# Creates the new bucket
bucket = storage . create_bucket bucket_name
puts "Bucket #{ bucket . name } was created."
end
Note: These samples create a bucket in the default US multi-region
with a default storage class of Standard Storage .
To create a bucket outside these defaults, see Create buckets .
Using the client library with Cloud Shell Editor
Go
For step-by-step guidance on running a client library in Cloud Shell Editor:
Click Guide me .
You see a panel Learn . Click Start to follow the tutorial.
Guide me
Java
For step-by-step guidance on running a client library in Cloud Shell Editor:
Click Guide me .
You see a panel Learn . Click Start to follow the tutorial.
Guide me
Node.js
For step-by-step guidance on running a client library in Cloud Shell Editor:
Click Guide me .
You see a panel Learn . Click Start to follow the tutorial.
Guide me
Python
For step-by-step guidance on running a client library in Cloud Shell Editor:
Click Guide me .
You see a panel Learn . Click Start to follow the tutorial.
Guide me
More examples
For more examples of using client libraries with Cloud Storage, see the
following guides:
Create buckets
Upload objects from a filesystem
Download objects
Additional resources
C++
The following list contains links to more resources related to the
client library for C++:
API reference
Client libraries best practices
Issue tracker
google-cloud-storage on Stack Overflow
Source code
C#
The following list contains links to more resources related to the
client library for C#:
API reference
Client libraries best practices
Issue tracker
google-cloud-storage on Stack Overflow
Source code
Go
The following list contains links to more resources related to the
client library for Go:
API reference
Client libraries best practices
Issue tracker
google-cloud-storage on Stack Overflow
Source code
Java
The following list contains links to more resources related to the
client library for Java:
API reference
Client libraries best practices
Issue tracker
google-cloud-storage on Stack Overflow
Source code
Node.js
The following list contains links to more resources related to the
client library for Node.js:
API reference
Client libraries best practices
Issue tracker
google-cloud-storage on Stack Overflow
Source code
PHP
The following list contains links to more resources related to the
client library for PHP:
API reference
Client libraries best practices
Issue tracker
google-cloud-storage on Stack Overflow
Source code
Python
The following list contains links to more resources related to the
client library for Python:
API reference
Client libraries best practices
Issue tracker
google-cloud-storage on Stack Overflow
Source code
Ruby
The following list contains links to more resources related to the
client library for Ruby:
API reference
Client libraries best practices
Issue tracker
google-cloud-storage on Stack Overflow
Source code
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
