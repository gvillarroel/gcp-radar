---
title: "Manage HMAC keys for service accounts \_|\_ Cloud Storage \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/storage/docs/introduction
source_metadata:
  url: https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys
  title: "Manage HMAC keys for service accounts \_|\_ Cloud Storage \_|\_ Google Cloud\
    \ Documentation"
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
Manage HMAC keys for service accounts
Stay organized with collections
Save and categorize content based on your preferences.
Overview
This page shows you how to create, disable, and delete Hash-based Message
Authentication Code (HMAC) keys associated with service accounts in your
project.
Before you begin
Before using this feature in Cloud Storage, you must meet the following
requirements:
Have sufficient permission to work with HMAC keys in the selected project:
If you own the project, you most likely have the necessary permissions.
You should have the IAM permissions that are prefixed with
storage.hmacKeys for the project. See Using IAM Permissions for
instructions on how to get a role, such as Storage HMAC Key Admin ,
that has these permissions.
Have a service account in your project that you intend to create HMAC keys
for. See Creating a service account if you don't currently have one.
Make sure the following organization policy constraints are disabled:
constraints/storage.restrictAuthTypes (must be disabled for HMAC
key authentication)
constraints/iam.disableServiceAccountKeyCreation
See Creating and managing organization policies for instructions on how
to check and disable constraints.
Create an HMAC key
Important: When you create an HMAC key, you are given the secret for that
key, which you must store securely. If you lose the secret, you are no longer
able to use the HMAC key to authorize requests.
To create an HMAC key for a service account:
Console
In the Google Cloud console, go to the Cloud Storage Settings page.
Go to Settings
Select the Interoperability tab.
Click add_box
Create a key for a service account .
Select the service account you want the HMAC key to be associated with.
Click Create key .
To learn how to get detailed error information about failed Cloud Storage
operations in the Google Cloud console, see
Troubleshooting .
Command line
Use the hmac create command:
gcloud storage hmac create SERVICE_ACCOUNT_EMAIL
Where SERVICE_ACCOUNT_EMAIL is the email address
associated with your service account. For example,
example-service-account@my-pet-project.iam.gserviceaccount.com .
If successful, the response contains an HMAC key resource ,
including values for the accessId and secret .
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
return []( gcs :: Client client , std :: string const & service_account_email ) {
StatusOr<std :: pair<gcs :: HmacKeyMetadata , std :: string >> key_info =
client . CreateHmacKey ( service_account_email );
if ( ! key_info ) throw std :: move ( key_info ). status ();
std :: cout << "The base64 encoded secret is: " << key_info - > second
<< " \n Do not miss that secret, there is no API to recover it."
<< " \n The HMAC key metadata is: " << key_info - > first << " \n " ;
return key_info - > first . access_id ();
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
public class CreateHmacKeySample
{
public HmacKey CreateHmacKey (
string projectId = "your-project-id" ,
string serviceAccountEmail = "dev@iam.gserviceaccount.com" )
{
var storage = StorageClient . Create ();
var key = storage . CreateHmacKey ( projectId , serviceAccountEmail );
var secret = key . Secret ;
var metadata = key . Metadata ;
Console . WriteLine ( $"The Base64 encoded secret is: {secret}" );
Console . WriteLine ( "Make sure to save that secret, there's no API to recover it." );
Console . WriteLine ( "The HMAC key metadata is:" );
Console . WriteLine ( $"ID: {metadata.Id}" );
Console . WriteLine ( $"Access ID: {metadata.AccessId}" );
Console . WriteLine ( $"Project ID: {metadata.ProjectId}" );
Console . WriteLine ( $"Service Account Email: {metadata.ServiceAccountEmail}" );
Console . WriteLine ( $"State: {metadata.State}" );
Console . WriteLine ( $"Time Created: {metadata.TimeCreated}" );
Console . WriteLine ( $"Time Updated: {metadata.Updated}" );
Console . WriteLine ( $"ETag: {metadata.ETag}" );
return key ;
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
// createHMACKey creates a new HMAC key using the given project and service account.
func createHMACKey ( w io . Writer , projectID string , serviceAccountEmail string ) ( * storage . HMACKey , error ) {
ctx := context . Background ()
// Initialize client.
client , err := storage . NewClient ( ctx )
if err != nil {
return nil , fmt . Errorf ( "storage.NewClient: %w" , err )
}
defer client . Close () // Closing the client safely cleans up background resources.
ctx , cancel := context . WithTimeout ( ctx , time . Minute )
defer cancel ()
key , err := client . CreateHMACKey ( ctx , projectID , serviceAccountEmail )
if err != nil {
return nil , fmt . Errorf ( "CreateHMACKey: %w" , err )
}
fmt . Fprintf ( w , "%s\n" , key )
fmt . Fprintf ( w , "The base64 encoded secret is %s\n" , key . Secret )
fmt . Fprintln ( w , "Do not miss that secret, there is no API to recover it." )
fmt . Fprintln ( w , "The HMAC key metadata is" )
fmt . Fprintf ( w , "%+v" , key )
return key , nil
}
Java
For more information, see the
Cloud Storage Java API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
import com.google.cloud.storage. HmacKey ;
import com.google.cloud.storage. ServiceAccount ;
import com.google.cloud.storage. Storage ;
import com.google.cloud.storage. StorageException ;
import com.google.cloud.storage. StorageOptions ;
import java.util.Date ;
public class CreateHmacKey {
public static void createHmacKey ( String serviceAccountEmail , String projectId )
throws StorageException {
// The service account email for which the new HMAC key will be created.
// String serviceAccountEmail = "service-account@iam.gserviceaccount.com";
// The ID of the project to which the service account belongs.
// String projectId = "project-id";
Storage storage = StorageOptions . newBuilder (). setProjectId ( projectId ). build (). getService ();
ServiceAccount account = ServiceAccount . of ( serviceAccountEmail );
HmacKey hmacKey =
storage . createHmacKey ( account , Storage . CreateHmacKeyOption . projectId ( projectId ));
String secret = hmacKey . getSecretKey ();
HmacKey . HmacKeyMetadata metadata = hmacKey . getMetadata ();
System . out . println ( "The Base64 encoded secret is: " + secret );
System . out . println ( "Do not lose that secret, there is no API to recover it." );
System . out . println ( "The HMAC key metadata is:" );
System . out . println ( "ID: " + metadata . getId ());
System . out . println ( "Access ID: " + metadata . getAccessId ());
System . out . println ( "Project ID: " + metadata . getProjectId ());
System . out . println ( "Service Account Email: " + metadata . getServiceAccount (). getEmail ());
System . out . println ( "State: " + metadata . getState (). toString ());
System . out . println ( "Time Created: " + new Date ( metadata . getCreateTime ()). toString ());
System . out . println ( "Time Updated: " + new Date ( metadata . getUpdateTime ()). toString ());
System . out . println ( "ETag: " + metadata . getEtag ());
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
// The service account email for which the new HMAC key will be created
// const serviceAccountEmail = 'service-account@iam.gserviceaccount.com';
// The ID of the project to which the service account belongs
// const projectId = 'project-id';
// Imports the Google Cloud client library
const { Storage } = require ( ' @google-cloud/storage ' );
// Creates a client
const storage = new Storage ();
// Create HMAC SA Key
async function createHmacKey () {
const [ hmacKey , secret ] = await storage . createHmacKey ( serviceAccountEmail , {
projectId ,
});
console . log ( `The base64 encoded secret is: ${ secret } ` );
console . log ( 'Do not miss that secret, there is no API to recover it.' );
console . log ( 'The HMAC key metadata is:' );
for ( const [ key , value ] of Object . entries ( hmacKey . metadata )) {
console . log ( ` ${ key } : ${ value } ` );
}
}
PHP
For more information, see the
Cloud Storage PHP API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
use Google\Cloud\Storage\StorageClient;
/**
* Create a new HMAC key.
*
* @param string $projectId The ID of your Google Cloud Platform project.
* (e.g. 'my-project-id')
* @param string $serviceAccountEmail Service account email to associate with the new HMAC key.
* (e.g. 'service-account@iam.gserviceaccount.com')
*/
function create_hmac_key(string $projectId, string $serviceAccountEmail): void
{
$storage = new StorageClient();
// By default createHmacKey will use the projectId used by StorageClient().
$hmacKeyCreated = $storage->createHmacKey($serviceAccountEmail, ['projectId' => $projectId]);
printf('The base64 encoded secret is: %s' . PHP_EOL, $hmacKeyCreated->secret());
print('Do not miss that secret, there is no API to recover it.' . PHP_EOL);
printf('HMAC key Metadata: %s' . PHP_EOL, print_r($hmacKeyCreated->hmacKey()->info(), true));
}
Python
For more information, see the
Cloud Storage Python API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
from google.cloud import storage
def create_key ( project_id , service_account_email ):
"""
Create a new HMAC key using the given project and service account.
"""
# project_id = 'Your Google Cloud project ID'
# service_account_email = 'Service account used to generate the HMAC key'
storage_client = storage . Client ( project = project_id )
hmac_key , secret = storage_client . create_hmac_key (
service_account_email = service_account_email , project_id = project_id
)
print ( f "The base64 encoded secret is { secret } " )
print ( "Do not miss that secret, there is no API to recover it." )
print ( "The HMAC key metadata is:" )
print ( f "Service Account Email: { hmac_key . service_account_email } " )
print ( f "Key ID: { hmac_key . id } " )
print ( f "Access ID: { hmac_key . access_id } " )
print ( f "Project ID: { hmac_key . project } " )
print ( f "State: { hmac_key . state } " )
print ( f "Created At: { hmac_key . time_created } " )
print ( f "Updated At: { hmac_key . updated } " )
print ( f "Etag: { hmac_key . etag } " )
return hmac_key
Ruby
For more information, see the
Cloud Storage Ruby API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
def create_hmac_key service_account_email :
# The service account email used to generate an HMAC key
# service_account_email = "service-my-project-number@gs-project-accounts.iam.gserviceaccount.com"
require "google/cloud/storage"
storage = Google :: Cloud :: Storage . new
# By default Storage#create_hmac_key uses the Storage client project_id
hmac_key = storage . create_hmac_key service_account_email
puts "The base64 encoded secret is: #{ hmac_key . secret } "
puts "Do not miss that secret, there is no API to recover it."
puts " \n The HMAC key metadata is:"
puts "Key ID: #{ hmac_key . id } "
puts "Service Account Email: #{ hmac_key . service_account_email } "
puts "Access ID: #{ hmac_key . access_id } "
puts "Project ID: #{ hmac_key . project_id } "
puts "Active: #{ hmac_key . active? } "
puts "Created At: #{ hmac_key . created_at } "
puts "Updated At: #{ hmac_key . updated_at } "
puts "Etag: #{ hmac_key . etag } "
end
Terraform
You can use a Terraform resource to create an HMAC key . This sample
also includes a resource to create a service account .
# Create a new service account
resource "google_service_account" "service_account" {
account_id = "my-svc-acc"
}
# Create the HMAC key for the associated service account
resource "google_storage_hmac_key" "key" {
service_account_email = google_service_account.service_account.email
}
REST APIs
JSON API
Have gcloud CLI installed and initialized , which lets
you generate an access token for the Authorization header.
Use cURL to call the JSON API with a POST hmacKeys
request:
curl -X POST \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
"https://storage.googleapis.com/storage/v1/projects/ PROJECT_IDENTIFIER /hmacKeys?serviceAccountEmail= SERVICE_ACCOUNT_EMAIL "
Where:
PROJECT_IDENTIFIER is the ID or number for
the project associated with the key you want to create. For
example, my-pet-project .
SERVICE_ACCOUNT_EMAIL is the email
address associated with your service account. For example,
example-service-account@my-pet-project.iam.gserviceaccount.com .
XML API
Have gcloud CLI installed and initialized , which lets
you generate an access token for the Authorization header.
Use cURL to call the XML API with a POST HMAC Key
request:
curl -X POST \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
"https://storage.googleapis.com/?Action=CreateAccessKey&UserName= SERVICE_ACCOUNT_EMAIL "
Where SERVICE_ACCOUNT_EMAIL is the email
address associated with your service account. For example,
example-service-account@my-pet-project.iam.gserviceaccount.com .
Note: After creation, it can take up to 60 seconds for a service account HMAC
key to become useable.
Get HMAC key information
To list the HMAC keys for a project, and get information about the keys:
Console
In the Google Cloud console, go to the Cloud Storage Settings page.
Go to Settings
Select the Interoperability tab.
Service accounts that have HMAC keys associated with them appear in the
Access keys for service accounts subsection of the
Service account HMAC section.
Click the name of a specific service account to see the HMAC keys
associated with it and the status of those keys.
Command line
Use the hmac list command to list hmac keys in your project:
gcloud storage hmac list
If successful, the command returns a list of hmac key access IDs,
along with the state of each key and the service account associated
with each key.
Use the hmac describe command to retrieve metadata for a
specific key:
gcloud storage hmac describe KEY_ACCESS_ID
Where KEY_ACCESS_ID is the access ID for the
desired key.
Client libraries
C++
For more information, see the
Cloud Storage C++ API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
The following sample retrieves a list of HMAC keys associated with a project:
namespace gcs = :: google :: cloud :: storage ;
using :: google :: cloud :: StatusOr ;
[]( gcs :: Client client ) {
int count = 0 ;
gcs :: ListHmacKeysReader hmac_keys_list = client . ListHmacKeys ();
for ( auto & key : hmac_keys_list ) {
if ( ! key ) throw std :: move ( key ). status ();
std :: cout << "service_account_email = " << key - > service_account_email ()
<< " \n access_id = " << key - > access_id () << " \n " ;
++ count ;
}
if ( count == 0 ) {
std :: cout << "No HMAC keys in default project \n " ;
}
}
The following sample retrieves information for a specific HMAC key:
namespace gcs = :: google :: cloud :: storage ;
using :: google :: cloud :: StatusOr ;
[]( gcs :: Client client , std :: string const & access_id ) {
StatusOr<gcs :: HmacKeyMetadata > hmac_key = client . GetHmacKey ( access_id );
if ( ! hmac_key ) throw std :: move ( hmac_key ). status ();
std :: cout << "The HMAC key metadata is: " << * hmac_key << " \n " ;
}
C#
For more information, see the
Cloud Storage C# API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
The following sample retrieves a list of HMAC keys associated with a project:
using Google.Apis.Storage.v1.Data ;
using Google.Cloud.Storage.V1 ;
using System ;
using System.Collections.Generic ;
public class ListHmacKeysSample
{
public IEnumerable<HmacKeyMetadata> ListHmacKeys ( string projectId = "your-project-id" )
{
var storage = StorageClient . Create ();
var keys = storage . ListHmacKeys ( projectId );
foreach ( var key in keys )
{
Console . WriteLine ( $"Service Account Email: {key.ServiceAccountEmail}" );
Console . WriteLine ( $"Access ID: {key.AccessId}" );
}
return keys ;
}
}
The following sample retrieves information for a specific HMAC key:
using Google.Apis.Storage.v1.Data ;
using Google.Cloud.Storage.V1 ;
using System ;
public class GetHmacKeySample
{
public HmacKeyMetadata GetHmacKey (
string projectId = "your-project-id" ,
string accessId = "your-access-id" )
{
var storage = StorageClient . Create ();
var metadata = storage . GetHmacKey ( projectId , accessId );
Console . WriteLine ( "The HMAC key metadata is:" );
Console . WriteLine ( $"ID: {metadata.Id}" );
Console . WriteLine ( $"Access ID: {metadata.AccessId}" );
Console . WriteLine ( $"Project ID: {metadata.ProjectId}" );
Console . WriteLine ( $"Service Account Email: {metadata.ServiceAccountEmail}" );
Console . WriteLine ( $"State: {metadata.State}" );
Console . WriteLine ( $"Time Created: {metadata.TimeCreated}" );
Console . WriteLine ( $"Time Updated: {metadata.Updated}" );
Console . WriteLine ( $"ETag: {metadata.ETag}" );
return metadata ;
}
}
Go
For more information, see the
Cloud Storage Go API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
The following sample retrieves a list of HMAC keys associated with a project:
import (
"context"
"fmt"
"io"
"time"
"cloud.google.com/go/storage"
"google.golang.org/api/iterator"
)
// listHMACKeys lists all HMAC keys associated with the project.
func listHMACKeys ( w io . Writer , projectID string ) ([] * storage . HMACKey , error ) {
ctx := context . Background ()
// Initialize client.
client , err := storage . NewClient ( ctx )
if err != nil {
return nil , fmt . Errorf ( "storage.NewClient: %w" , err )
}
defer client . Close () // Closing the client safely cleans up background resources.
ctx , cancel := context . WithTimeout ( ctx , time . Minute )
defer cancel ()
iter := client . ListHMACKeys ( ctx , projectID )
var keys [] * storage . HMACKey
for {
key , err := iter . Next ()
if err == iterator . Done {
break
}
if err != nil {
return nil , fmt . Errorf ( "ListHMACKeys: %w" , err )
}
fmt . Fprintf ( w , "Service Account Email: %s\n" , key . ServiceAccountEmail )
fmt . Fprintf ( w , "Access ID: %s\n" , key . AccessID )
keys = append ( keys , key )
}
return keys , nil
}
The following sample retrieves information for a specific HMAC key:
import (
"context"
"fmt"
"io"
"time"
"cloud.google.com/go/storage"
)
// getHMACKey retrieves the HMACKeyMetadata with the given access id.
func getHMACKey ( w io . Writer , accessID string , projectID string ) ( * storage . HMACKey , error ) {
ctx := context . Background ()
// Initialize client.
client , err := storage . NewClient ( ctx )
if err != nil {
return nil , fmt . Errorf ( "storage.NewClient: %w" , err )
}
defer client . Close () // Closing the client safely cleans up background resources.
handle := client . HMACKeyHandle ( projectID , accessID )
ctx , cancel := context . WithTimeout ( ctx , time . Minute )
defer cancel ()
key , err := handle . Get ( ctx )
if err != nil {
return nil , fmt . Errorf ( "Get: %w" , err )
}
fmt . Fprintln ( w , "The HMAC key metadata is:" )
fmt . Fprintf ( w , "%+v" , key )
return key , nil
}
Java
For more information, see the
Cloud Storage Java API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
The following sample retrieves a list of HMAC keys associated with a project:
import com.google.api.gax.paging. Page ;
import com.google.cloud.storage. HmacKey ;
import com.google.cloud.storage. Storage ;
import com.google.cloud.storage. StorageException ;
import com.google.cloud.storage. StorageOptions ;
public class ListHmacKeys {
public static void listHmacKeys ( String projectId ) throws StorageException {
// The ID of the project to which the service account belongs.
// String projectId = "project-id";
Storage storage = StorageOptions . newBuilder (). setProjectId ( projectId ). build (). getService ();
Page<HmacKey . HmacKeyMetadata > page =
storage . listHmacKeys ( Storage . ListHmacKeysOption . projectId ( projectId ));
for ( HmacKey . HmacKeyMetadata metadata : page . iterateAll ()) {
System . out . println ( "Service Account Email: " + metadata . getServiceAccount (). getEmail ());
System . out . println ( "Access ID: " + metadata . getAccessId ());
}
}
}
The following sample retrieves information for a specific HMAC key:
import com.google.cloud.storage. HmacKey ;
import com.google.cloud.storage. Storage ;
import com.google.cloud.storage. StorageException ;
import com.google.cloud.storage. StorageOptions ;
import java.util.Date ;
public class GetHmacKey {
public static void getHmacKey ( String accessId , String projectId ) throws StorageException {
// The access ID of the HMAC key.
// String accessId = "GOOG0234230X00";
// The ID of the project to which the service account belongs.
// String projectId = "project-id";
Storage storage = StorageOptions . newBuilder (). setProjectId ( projectId ). build (). getService ();
HmacKey . HmacKeyMetadata metadata =
storage . getHmacKey ( accessId , Storage . GetHmacKeyOption . projectId ( projectId ));
System . out . println ( "The HMAC key metadata is:" );
System . out . println ( "ID: " + metadata . getId ());
System . out . println ( "Access ID: " + metadata . getAccessId ());
System . out . println ( "Project ID: " + metadata . getProjectId ());
System . out . println ( "Service Account Email: " + metadata . getServiceAccount (). getEmail ());
System . out . println ( "State: " + metadata . getState (). toString ());
System . out . println ( "Time Created: " + new Date ( metadata . getCreateTime ()). toString ());
System . out . println ( "Time Updated: " + new Date ( metadata . getUpdateTime ()). toString ());
System . out . println ( "ETag: " + metadata . getEtag ());
}
}
Node.js
For more information, see the
Cloud Storage Node.js API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
The following sample retrieves a list of HMAC keys associated with a project:
/**
* TODO(developer): Uncomment the following lines before running the sample.
*/
// The ID of the project to which the service account belongs
// const projectId = 'project-id';
// Imports the Google Cloud client library
const { Storage } = require ( ' @google-cloud/storage ' );
// Creates a client
const storage = new Storage ();
// List HMAC SA Keys' Metadata
async function listHmacKeys () {
const [ hmacKeys ] = await storage . getHmacKeys ({ projectId });
// hmacKeys is an array of HmacKey objects.
for ( const hmacKey of hmacKeys ) {
console . log (
`Service Account Email: ${ hmacKey . metadata . serviceAccountEmail } `
);
console . log ( `Access Id: ${ hmacKey . metadata . accessId } ` );
}
}
The following sample retrieves information for a specific HMAC key:
/**
* TODO(developer): Uncomment the following lines before running the sample.
*/
// The access ID of the HMAC key
// const hmacKeyAccessId = 'GOOG0234230X00';
// The ID of the project to which the service account belongs
// const projectId = 'project-id';
// Imports the Google Cloud client library
const { Storage } = require ( ' @google-cloud/storage ' );
// Creates a client
const storage = new Storage ();
// Get HMAC SA Key Metadata
async function getHmacKey () {
const hmacKey = storage . hmacKey ( hmacKeyAccessId , { projectId });
// Populate the hmacKey object with metadata from server.
await hmacKey . getMetadata ();
console . log ( 'The HMAC key metadata is:' );
for ( const [ key , value ] of Object . entries ( hmacKey . metadata )) {
console . log ( ` ${ key } : ${ value } ` );
}
}
PHP
For more information, see the
Cloud Storage PHP API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
The following sample retrieves a list of HMAC keys associated with a project:
use Google\Cloud\Storage\StorageClient;
/**
* List HMAC keys.
*
* @param string $projectId The ID of your Google Cloud Platform project.
* (e.g. 'my-project-id')
*/
function list_hmac_keys(string $projectId): void
{
$storage = new StorageClient();
// By default hmacKeys will use the projectId used by StorageClient() to list HMAC Keys.
$hmacKeys = $storage->hmacKeys(['projectId' => $projectId]);
printf('HMAC Key\'s:' . PHP_EOL);
foreach ($hmacKeys as $hmacKey) {
printf('Service Account Email: %s' . PHP_EOL, $hmacKey->info()['serviceAccountEmail']);
printf('Access Id: %s' . PHP_EOL, $hmacKey->info()['accessId']);
}
}
The following sample retrieves information for a specific HMAC key:
use Google\Cloud\Storage\StorageClient;
/**
* Get an HMAC key.
*
* @param string $projectId The ID of your Google Cloud Platform project.
* (e.g. 'my-project-id')
* @param string $accessId Access ID for an HMAC key. (e.g. 'GOOG0234230X00')
*/
function get_hmac_key(string $projectId, string $accessId): void
{
$storage = new StorageClient();
$hmacKey = $storage->hmacKey($accessId, $projectId);
printf('HMAC key Metadata: %s' . PHP_EOL, print_r($hmacKey->info(), true));
}
Python
For more information, see the
Cloud Storage Python API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
The following sample retrieves a list of HMAC keys associated with a project:
from google.cloud import storage
def list_keys ( project_id ):
"""
List all HMAC keys associated with the project.
"""
# project_id = "Your Google Cloud project ID"
storage_client = storage . Client ( project = project_id )
hmac_keys = storage_client . list_hmac_keys ( project_id = project_id )
print ( "HMAC Keys:" )
for hmac_key in hmac_keys :
print (
f "Service Account Email: { hmac_key . service_account_email } "
)
print ( f "Access ID: { hmac_key . access_id } " )
return hmac_keys
The following sample retrieves information for a specific HMAC key:
from google.cloud import storage
def get_key ( access_id , project_id ):
"""
Retrieve the HMACKeyMetadata with the given access id.
"""
# project_id = "Your Google Cloud project ID"
# access_id = "ID of an HMAC key"
storage_client = storage . Client ( project = project_id )
hmac_key = storage_client . get_hmac_key_metadata (
access_id , project_id = project_id
)
print ( "The HMAC key metadata is:" )
print ( f "Service Account Email: { hmac_key . service_account_email } " )
print ( f "Key ID: { hmac_key . id } " )
print ( f "Access ID: { hmac_key . access_id } " )
print ( f "Project ID: { hmac_key . project } " )
print ( f "State: { hmac_key . state } " )
print ( f "Created At: { hmac_key . time_created } " )
print ( f "Updated At: { hmac_key . updated } " )
print ( f "Etag: { hmac_key . etag } " )
return hmac_key
Ruby
For more information, see the
Cloud Storage Ruby API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
The following sample retrieves a list of HMAC keys associated with a project:
def list_hmac_keys
require "google/cloud/storage"
storage = Google :: Cloud :: Storage . new
# By default Storage#hmac_keys uses the Storage client project_id
hmac_keys = storage . hmac_keys
puts "HMAC Keys:"
hmac_keys . all do | hmac_key |
puts "Service Account Email: #{ hmac_key . service_account_email } "
puts "Access ID: #{ hmac_key . access_id } "
end
end
The following sample retrieves information for a specific HMAC key:
def get_hmac_key access_id :
# The access ID of the HMAC key
# access_id = "GOOG0234230X00"
require "google/cloud/storage"
storage = Google :: Cloud :: Storage . new
# By default Storage#hmac_keys uses the Storage client project_id
hmac_key = storage . hmac_key access_id
puts "The HMAC key metadata is:"
puts "Key ID: #{ hmac_key . id } "
puts "Service Account Email: #{ hmac_key . service_account_email } "
puts "Access ID: #{ hmac_key . access_id } "
puts "Project ID: #{ hmac_key . project_id } "
puts "Active: #{ hmac_key . active? } "
puts "Created At: #{ hmac_key . created_at } "
puts "Updated At: #{ hmac_key . updated_at } "
puts "Etag: #{ hmac_key . etag } "
end
REST APIs
JSON API
Have gcloud CLI installed and initialized , which lets
you generate an access token for the Authorization header.
Use cURL to call the JSON API with a LIST hmacKeys
request:
curl -X GET \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
"https://storage.googleapis.com/storage/v1/projects/ PROJECT_IDENTIFIER /hmacKeys"
Where PROJECT_IDENTIFIER is the ID or number
for the project associated with the keys you want to list. For
example, my-pet-project .
XML API
Have gcloud CLI installed and initialized , which lets
you generate an access token for the Authorization header.
Use cURL to call the XML API with a GET HMAC Key
request:
curl -X GET \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
"https://storage.googleapis.com/?Action=ListAccessKeys&UserName= SERVICE_ACCOUNT_EMAIL "
Where SERVICE_ACCOUNT_EMAIL is the email
address associated with your service account. For example,
example-service-account@my-pet-project.iam.gserviceaccount.com .
Update the state of an HMAC key
To switch an HMAC key between being active and inactive:
Console
In the Google Cloud console, go to the Cloud Storage Settings page.
Go to Settings
Select the Interoperability tab.
In the Access keys for service accounts subsection, click the name of
the service account associated with the HMAC key whose status you want
to update.
Click the status of the key you want to update.
If you are changing the key's state from Inactive to Active, click
Deactivate in the window that appears.
If you are changing the key's state from Active to Inactive, no
additional steps are required.
Command line
Use the hmac update command:
gcloud storage hmac update ACCESS_KEY_ID STATE
Where:
ACCESS_KEY_ID is the access ID associated with
the key you are updating.
STATE is either --activate or
--deactivate .
If successful, the command returns the updated metadata of the HMAC key.
Client libraries
C++
For more information, see the
Cloud Storage C++ API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
The following sample deactivates an HMAC key:
namespace gcs = :: google :: cloud :: storage ;
using :: google :: cloud :: StatusOr ;
[]( gcs :: Client client , std :: string const & access_id ) {
StatusOr<gcs :: HmacKeyMetadata > updated = client . UpdateHmacKey (
access_id , gcs :: HmacKeyMetadata (). set_state (
gcs :: HmacKeyMetadata :: state_inactive ()));
if ( ! updated ) throw std :: move ( updated ). status ();
if ( updated - > state () != gcs :: HmacKeyMetadata :: state_inactive ()) {
throw std :: runtime_error ( "The HMAC key is active, this is unexpected" );
}
std :: cout << "The HMAC key is now inactive \n Full metadata: " << * updated
<< " \n " ;
}
The following sample activates an HMAC key:
namespace gcs = :: google :: cloud :: storage ;
using :: google :: cloud :: StatusOr ;
[]( gcs :: Client client , std :: string const & access_id ) {
StatusOr<gcs :: HmacKeyMetadata > updated = client . UpdateHmacKey (
access_id ,
gcs :: HmacKeyMetadata (). set_state ( gcs :: HmacKeyMetadata :: state_active ()));
if ( ! updated ) throw std :: move ( updated ). status ();
if ( updated - > state () != gcs :: HmacKeyMetadata :: state_active ()) {
throw std :: runtime_error (
"The HMAC key is NOT active, this is unexpected" );
}
std :: cout << "The HMAC key is now active \n Full metadata: " << * updated
<< " \n " ;
}
C#
For more information, see the
Cloud Storage C# API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
The following sample deactivates an HMAC key:
using Google.Apis.Storage.v1.Data ;
using Google.Cloud.Storage.V1 ;
using System ;
public class DeactivateHmacKeySample
{
public HmacKeyMetadata DeactivateHmacKey (
string projectId = "your-project-id" ,
string accessId = "your-access-id" )
{
var storage = StorageClient . Create ();
var metadata = storage . GetHmacKey ( projectId , accessId );
metadata . State = HmacKeyStates . Inactive ;
var updatedMetadata = storage . UpdateHmacKey ( metadata );
Console . WriteLine ( "The HMAC key is now inactive." );
Console . WriteLine ( "The HMAC key metadata is:" );
Console . WriteLine ( $"ID: {updatedMetadata.Id}" );
Console . WriteLine ( $"Access ID: {updatedMetadata.AccessId}" );
Console . WriteLine ( $"Project ID: {updatedMetadata.ProjectId}" );
Console . WriteLine ( $"Service Account Email: {updatedMetadata.ServiceAccountEmail}" );
Console . WriteLine ( $"State: {updatedMetadata.State}" );
Console . WriteLine ( $"Time Created: {updatedMetadata.TimeCreated}" );
Console . WriteLine ( $"Time Updated: {updatedMetadata.Updated}" );
Console . WriteLine ( $"ETag: {updatedMetadata.ETag}" );
return updatedMetadata ;
}
}
The following sample activates an HMAC key:
using Google.Apis.Storage.v1.Data ;
using Google.Cloud.Storage.V1 ;
using System ;
public class ActivateHmacKeySample
{
public HmacKeyMetadata ActivateHmacKey (
string projectId = "your-project-id" ,
string accessId = "access-id" )
{
var storage = StorageClient . Create ();
var metadata = storage . GetHmacKey ( projectId , accessId );
metadata . State = HmacKeyStates . Active ;
var updatedMetadata = storage . UpdateHmacKey ( metadata );
Console . WriteLine ( "The HMAC key is now active." );
Console . WriteLine ( "The HMAC key metadata is:" );
Console . WriteLine ( $"ID: {updatedMetadata.Id}" );
Console . WriteLine ( $"Access ID: {updatedMetadata.AccessId}" );
Console . WriteLine ( $"Project ID: {updatedMetadata.ProjectId}" );
Console . WriteLine ( $"Service Account Email: {updatedMetadata.ServiceAccountEmail}" );
Console . WriteLine ( $"State: {updatedMetadata.State}" );
Console . WriteLine ( $"Time Created: {updatedMetadata.TimeCreated}" );
Console . WriteLine ( $"Time Updated: {updatedMetadata.Updated}" );
Console . WriteLine ( $"ETag: {updatedMetadata.ETag}" );
return updatedMetadata ;
}
}
Go
For more information, see the
Cloud Storage Go API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
The following sample deactivates an HMAC key:
import (
"context"
"fmt"
"io"
"time"
"cloud.google.com/go/storage"
)
// deactivateHMACKey deactivates the HMAC key with the given access ID.
func deactivateHMACKey ( w io . Writer , accessID string , projectID string ) ( * storage . HMACKey , error ) {
ctx := context . Background ()
// Initialize client.
client , err := storage . NewClient ( ctx )
if err != nil {
return nil , fmt . Errorf ( "storage.NewClient: %w" , err )
}
defer client . Close () // Closing the client safely cleans up background resources.
ctx , cancel := context . WithTimeout ( ctx , time . Minute )
defer cancel ()
handle := client . HMACKeyHandle ( projectID , accessID )
key , err := handle . Update ( ctx , storage . HMACKeyAttrsToUpdate { State : "INACTIVE" })
if err != nil {
return nil , fmt . Errorf ( "Update: %w" , err )
}
fmt . Fprintln ( w , "The HMAC key metadata is:" )
fmt . Fprintf ( w , "%+v" , key )
return key , nil
}
The following sample activates an HMAC key:
import (
"context"
"fmt"
"io"
"time"
"cloud.google.com/go/storage"
)
// activateHMACKey activates the HMAC key with the given access ID.
func activateHMACKey ( w io . Writer , accessID string , projectID string ) ( * storage . HMACKey , error ) {
ctx := context . Background ()
// Initialize client.
client , err := storage . NewClient ( ctx )
if err != nil {
return nil , fmt . Errorf ( "storage.NewClient: %w" , err )
}
defer client . Close () // Closing the client safely cleans up background resources.
handle := client . HMACKeyHandle ( projectID , accessID )
ctx , cancel := context . WithTimeout ( ctx , time . Minute )
defer cancel ()
key , err := handle . Update ( ctx , storage . HMACKeyAttrsToUpdate { State : "ACTIVE" })
if err != nil {
return nil , fmt . Errorf ( "Update: %w" , err )
}
fmt . Fprintln ( w , "The HMAC key metadata is:" )
fmt . Fprintf ( w , "%+v" , key )
return key , nil
}
Java
For more information, see the
Cloud Storage Java API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
The following sample deactivates an HMAC key:
import com.google.cloud.storage. HmacKey ;
import com.google.cloud.storage. Storage ;
import com.google.cloud.storage. StorageException ;
import com.google.cloud.storage. StorageOptions ;
import java.util.Date ;
public class DeactivateHmacKey {
public static void deactivateHmacKey ( String accessId , String projectId ) throws StorageException {
// The access ID of the HMAC key.
// String accessId = "GOOG0234230X00";
// The ID of the project to which the service account belongs.
// String projectId = "project-id";
Storage storage = StorageOptions . newBuilder (). setProjectId ( projectId ). build (). getService ();
HmacKey . HmacKeyMetadata metadata =
storage . getHmacKey ( accessId , Storage . GetHmacKeyOption . projectId ( projectId ));
HmacKey . HmacKeyMetadata newMetadata =
storage . updateHmacKeyState ( metadata , HmacKey . HmacKeyState . INACTIVE );
System . out . println ( "The HMAC key is now inactive." );
System . out . println ( "The HMAC key metadata is:" );
System . out . println ( "ID: " + newMetadata . getId ());
System . out . println ( "Access ID: " + newMetadata . getAccessId ());
System . out . println ( "Project ID: " + newMetadata . getProjectId ());
System . out . println ( "Service Account Email: " + newMetadata . getServiceAccount (). getEmail ());
System . out . println ( "State: " + newMetadata . getState (). toString ());
System . out . println ( "Time Created: " + new Date ( newMetadata . getCreateTime ()). toString ());
System . out . println ( "Time Updated: " + new Date ( newMetadata . getUpdateTime ()). toString ());
System . out . println ( "ETag: " + newMetadata . getEtag ());
}
}
The following sample activates an HMAC key:
import com.google.cloud.storage. HmacKey ;
import com.google.cloud.storage. Storage ;
import com.google.cloud.storage. StorageException ;
import com.google.cloud.storage. StorageOptions ;
import java.util.Date ;
public class ActivateHmacKey {
public static void activateHmacKey ( String accessId , String projectId ) throws StorageException {
// The access ID of the HMAC key.
// String accessId = "GOOG0234230X00";
// The ID of the project to which the service account belongs.
// String projectId = "project-id";
Storage storage = StorageOptions . newBuilder (). setProjectId ( projectId ). build (). getService ();
HmacKey . HmacKeyMetadata metadata =
storage . getHmacKey ( accessId , Storage . GetHmacKeyOption . projectId ( projectId ));
HmacKey . HmacKeyMetadata newMetadata =
storage . updateHmacKeyState ( metadata , HmacKey . HmacKeyState . ACTIVE );
System . out . println ( "The HMAC key is now active." );
System . out . println ( "The HMAC key metadata is:" );
System . out . println ( "ID: " + newMetadata . getId ());
System . out . println ( "Access ID: " + newMetadata . getAccessId ());
System . out . println ( "Project ID: " + newMetadata . getProjectId ());
System . out . println ( "Service Account Email: " + newMetadata . getServiceAccount (). getEmail ());
System . out . println ( "State: " + newMetadata . getState (). toString ());
System . out . println ( "Time Created: " + new Date ( newMetadata . getCreateTime ()). toString ());
System . out . println ( "Time Updated: " + new Date ( newMetadata . getUpdateTime ()). toString ());
System . out . println ( "ETag: " + newMetadata . getEtag ());
}
}
Node.js
For more information, see the
Cloud Storage Node.js API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
The following sample deactivates an HMAC key:
/**
* TODO(developer): Uncomment the following lines before running the sample.
*/
// The access ID of the HMAC key
// const hmacKeyAccessId = 'GOOG0234230X00';
// The ID of the project to which the service account belongs
// const projectId = 'project-id';
// Imports the Google Cloud client library
const { Storage } = require ( ' @google-cloud/storage ' );
// Creates a client
const storage = new Storage ();
// Deactivate HMAC SA Key
async function deactivateHmacKey () {
const hmacKey = storage . hmacKey ( hmacKeyAccessId , { projectId });
const [ hmacKeyMetadata ] = await hmacKey . setMetadata ({ state : 'INACTIVE' });
console . log ( 'The HMAC key is now inactive.' );
console . log ( 'The HMAC key metadata is:' );
for ( const [ key , value ] of Object . entries ( hmacKeyMetadata )) {
console . log ( ` ${ key } : ${ value } ` );
}
}
The following sample activates an HMAC key:
/**
* TODO(developer): Uncomment the following lines before running the sample.
*/
// The access ID of the HMAC key
// const hmacKeyAccessId = 'GOOG0234230X00';
// The ID of the project to which the service account belongs
// const projectId = 'project-id';
// Imports the Google Cloud client library
const { Storage } = require ( ' @google-cloud/storage ' );
// Creates a client
const storage = new Storage ();
// Activate HMAC SA Key
async function activateHmacKey () {
const hmacKey = storage . hmacKey ( hmacKeyAccessId , { projectId });
const [ hmacKeyMetadata ] = await hmacKey . setMetadata ({ state : 'ACTIVE' });
console . log ( 'The HMAC key is now active.' );
console . log ( 'The HMAC key metadata is:' );
for ( const [ key , value ] of Object . entries ( hmacKeyMetadata )) {
console . log ( ` ${ key } : ${ value } ` );
}
}
PHP
For more information, see the
Cloud Storage PHP API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
The following sample deactivates an HMAC key:
use Google\Cloud\Storage\StorageClient;
/**
* Deactivate an HMAC key.
*
* @param string $projectId The ID of your Google Cloud Platform project.
* (e.g. 'my-project-id')
* @param string $accessId Access ID for an inactive HMAC key.
* (e.g. 'GOOG0234230X00')
*/
function deactivate_hmac_key(string $projectId, string $accessId): void
{
$storage = new StorageClient();
// By default hmacKey will use the projectId used by StorageClient().
$hmacKey = $storage->hmacKey($accessId, $projectId);
$hmacKey->update('INACTIVE');
print('The HMAC key is now inactive.' . PHP_EOL);
printf('HMAC key Metadata: %s' . PHP_EOL, print_r($hmacKey->info(), true));
}
The following sample activates an HMAC key:
use Google\Cloud\Storage\StorageClient;
/**
* Activate an HMAC key.
*
* @param string $projectId The ID of your Google Cloud Platform project.
* (e.g. 'my-project-id')
* @param string $accessId Access ID for an inactive HMAC key.
* (e.g. 'GOOG0234230X00')
*/
function activate_hmac_key(string $projectId, string $accessId): void
{
$storage = new StorageClient();
// By default hmacKey will use the projectId used by StorageClient().
$hmacKey = $storage->hmacKey($accessId, $projectId);
$hmacKey->update('ACTIVE');
print('The HMAC key is now active.' . PHP_EOL);
printf('HMAC key Metadata: %s' . PHP_EOL, print_r($hmacKey->info(), true));
}
Python
For more information, see the
Cloud Storage Python API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
The following sample deactivates an HMAC key:
from google.cloud import storage
def deactivate_key ( access_id , project_id ):
"""
Deactivate the HMAC key with the given access ID.
"""
# project_id = "Your Google Cloud project ID"
# access_id = "ID of an active HMAC key"
storage_client = storage . Client ( project = project_id )
hmac_key = storage_client . get_hmac_key_metadata (
access_id , project_id = project_id
)
hmac_key . state = "INACTIVE"
hmac_key . update ()
print ( "The HMAC key is now inactive." )
print ( "The HMAC key metadata is:" )
print ( f "Service Account Email: { hmac_key . service_account_email } " )
print ( f "Key ID: { hmac_key . id } " )
print ( f "Access ID: { hmac_key . access_id } " )
print ( f "Project ID: { hmac_key . project } " )
print ( f "State: { hmac_key . state } " )
print ( f "Created At: { hmac_key . time_created } " )
print ( f "Updated At: { hmac_key . updated } " )
print ( f "Etag: { hmac_key . etag } " )
return hmac_key
The following sample activates an HMAC key:
from google.cloud import storage
def activate_key ( access_id , project_id ):
"""
Activate the HMAC key with the given access ID.
"""
# project_id = "Your Google Cloud project ID"
# access_id = "ID of an inactive HMAC key"
storage_client = storage . Client ( project = project_id )
hmac_key = storage_client . get_hmac_key_metadata (
access_id , project_id = project_id
)
hmac_key . state = "ACTIVE"
hmac_key . update ()
print ( "The HMAC key metadata is:" )
print ( f "Service Account Email: { hmac_key . service_account_email } " )
print ( f "Key ID: { hmac_key . id } " )
print ( f "Access ID: { hmac_key . access_id } " )
print ( f "Project ID: { hmac_key . project } " )
print ( f "State: { hmac_key . state } " )
print ( f "Created At: { hmac_key . time_created } " )
print ( f "Updated At: { hmac_key . updated } " )
print ( f "Etag: { hmac_key . etag } " )
return hmac_key
Ruby
For more information, see the
Cloud Storage Ruby API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
The following sample deactivates an HMAC key:
def deactivate_hmac_key access_id :
# The access ID of the HMAC key
# access_id = "GOOG0234230X00"
require "google/cloud/storage"
storage = Google :: Cloud :: Storage . new
# By default Storage#hmac_keys uses the Storage client project_id
hmac_key = storage . hmac_key access_id
hmac_key . inactive!
puts "The HMAC key is now inactive."
puts "The HMAC key metadata is:"
puts "Key ID: #{ hmac_key . id } "
puts "Service Account Email: #{ hmac_key . service_account_email } "
puts "Access ID: #{ hmac_key . access_id } "
puts "Project ID: #{ hmac_key . project_id } "
puts "Active: #{ hmac_key . active? } "
puts "Created At: #{ hmac_key . created_at } "
puts "Updated At: #{ hmac_key . updated_at } "
puts "Etag: #{ hmac_key . etag } "
end
The following sample activates an HMAC key:
def activate_hmac_key access_id :
# The access ID of the HMAC key
# access_id = "GOOG0234230X00"
require "google/cloud/storage"
storage = Google :: Cloud :: Storage . new
# By default Storage#hmac_keys uses the Storage client project_id
hmac_key = storage . hmac_key access_id
hmac_key . active!
puts "The HMAC key is now active."
puts "The HMAC key metadata is:"
puts "Key ID: #{ hmac_key . id } "
puts "Service Account Email: #{ hmac_key . service_account_email } "
puts "Access ID: #{ hmac_key . access_id } "
puts "Project ID: #{ hmac_key . project_id } "
puts "Active: #{ hmac_key . active? } "
puts "Created At: #{ hmac_key . created_at } "
puts "Updated At: #{ hmac_key . updated_at } "
puts "Etag: #{ hmac_key . etag } "
end
REST APIs
JSON API
Have gcloud CLI installed and initialized , which lets
you generate an access token for the Authorization header.
Create a JSON file that contains the following information:
{"state": " STATE "}
Where STATE is the desired state for
the key. For example, INACTIVE .
Use cURL to call the JSON API with a PUT hmacKeys
request:
curl -X PUT --data-binary @ JSON_FILE_NAME \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
"https://storage.googleapis.com/storage/v1/projects/ PROJECT_IDENTIFIER /hmacKeys/ ACCESS_KEY_ID "
Where:
JSON_FILE_NAME is the path for the file
that you created in Step 2.
PROJECT_IDENTIFIER is the ID or number
for the project associated with the key you want to update. For
example, my-pet-project .
ACCESS_KEY_ID is the access ID associated
with the key you are updating.
XML API
Have gcloud CLI installed and initialized , which lets
you generate an access token for the Authorization header.
Use cURL to call the XML API with a POST HMAC Key
request:
curl -X POST \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
"https://storage.googleapis.com/?Action=UpdateAccessKey&AccessKeyId= ACCESS_KEY_ID &Status= STATUS "
Where:
ACCESS_KEY_ID is the access ID associated
with the key you are updating.
STATUS is the desired status for the
key. For example, Inactive .
When you change the state of an HMAC key, it takes up to 3 minutes for the
state change to propagate through the Cloud Storage system. For this
reason, you should wait at least 3 minutes between making an HMAC key inactive
and deleting the key.
Delete an HMAC key
Caution: HMAC keys cannot be recovered once you delete them. If you want to keep
an HMAC key but prevent it from being used, set its state to
INACTIVE .
An HMAC key must be in an inactive state in order to delete it.
To delete an inactive HMAC key:
Console
In the Google Cloud console, go to the Cloud Storage Settings page.
Go to Settings
Select the Interoperability tab.
In the Access keys for service accounts subsection, click the name of
the service account associated with the HMAC key you want to delete.
Click the Trash icon associated with the key you want to delete.
In the dialog that appears, enter the first 10 characters of the
access key ID as they are given in the window.
Click Delete .
Command line
Use the hmac delete command:
gcloud storage hmac delete ACCESS_KEY_ID
Where ACCESS_KEY_ID is the access ID associated
with the key you are deleting.
If successful, the command does not return a response.
Client libraries
C++
For more information, see the
Cloud Storage C++ API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
namespace gcs = :: google :: cloud :: storage ;
[]( gcs :: Client client , std :: string const & access_id ) {
google :: cloud :: Status status = client . DeleteHmacKey ( access_id );
if ( ! status . ok ()) throw std :: runtime_error ( status . message ());
std :: cout << "The key is deleted, though it may still appear"
<< " in ListHmacKeys() results. \n " ;
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
public class DeleteHmacKeySample
{
public void DeleteHmacKey (
string projectId = "your-project-id" ,
string accessId = "your-access-id" )
{
var storage = StorageClient . Create ();
storage . DeleteHmacKey ( projectId , accessId );
Console . WriteLine ( $"Key {accessId} was deleted." );
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
// deleteHMACKey deletes the HMAC key with the given access ID. Key must have state
// INACTIVE in order to succeed.
func deleteHMACKey ( w io . Writer , accessID string , projectID string ) error {
ctx := context . Background ()
// Initialize client.
client , err := storage . NewClient ( ctx )
if err != nil {
return fmt . Errorf ( "storage.NewClient: %w" , err )
}
defer client . Close () // Closing the client safely cleans up background resources.
handle := client . HMACKeyHandle ( projectID , accessID )
ctx , cancel := context . WithTimeout ( ctx , time . Minute )
defer cancel ()
if err = handle . Delete ( ctx ); err != nil {
return fmt . Errorf ( "Delete: %w" , err )
}
fmt . Fprintln ( w , "The key is deleted, though it may still appear in ListHMACKeys results." )
return nil
}
Java
For more information, see the
Cloud Storage Java API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
import com.google.cloud.storage. HmacKey ;
import com.google.cloud.storage. Storage ;
import com.google.cloud.storage. StorageException ;
import com.google.cloud.storage. StorageOptions ;
public class DeleteHmacKey {
public static void deleteHmacKey ( String accessId , String projectId ) throws StorageException {
// The access ID of the HMAC key.
// String accessId = "GOOG0234230X00";
// The ID of the project to which the service account belongs.
// String projectId = "project-id";
Storage storage = StorageOptions . newBuilder (). setProjectId ( projectId ). build (). getService ();
HmacKey . HmacKeyMetadata metadata =
storage . getHmacKey ( accessId , Storage . GetHmacKeyOption . projectId ( projectId ));
storage . deleteHmacKey ( metadata );
System . out . println (
"The key is deleted, though it will still appear in "
+ "getHmacKeys() results if called with showDeletedKey." );
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
// The access ID of the HMAC key
// const hmacKeyAccessId = 'GOOG0234230X00';
// The ID of the project to which the service account belongs
// const projectId = 'project-id';
// Imports the Google Cloud client library
const { Storage } = require ( ' @google-cloud/storage ' );
// Creates a client
const storage = new Storage ();
// Delete HMAC SA Key
async function deleteHmacKey () {
const hmacKey = storage . hmacKey ( hmacKeyAccessId , { projectId });
await hmacKey . delete ();
console . log (
'The key is deleted, though it may still appear in getHmacKeys() results.'
);
}
PHP
For more information, see the
Cloud Storage PHP API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
use Google\Cloud\Storage\StorageClient;
/**
* Delete an HMAC key.
*
* @param string $projectId The ID of your Google Cloud Platform project.
* (e.g. 'my-project-id')
* @param string $accessId Access ID for an HMAC key. (e.g. 'GOOG0234230X00')
*/
function delete_hmac_key(string $projectId, string $accessId): void
{
$storage = new StorageClient();
// By default hmacKey will use the projectId used by StorageClient().
$hmacKey = $storage->hmacKey($accessId, $projectId);
$hmacKey->delete();
print(
'The key is deleted, though it may still appear in the results of calls ' .
'to StorageClient.hmacKeys([\'showDeletedKeys\' => true])' . PHP_EOL
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
def delete_key ( access_id , project_id ):
"""
Delete the HMAC key with the given access ID. Key must have state INACTIVE
in order to succeed.
"""
# project_id = "Your Google Cloud project ID"
# access_id = "ID of an HMAC key (must be in INACTIVE state)"
storage_client = storage . Client ( project = project_id )
hmac_key = storage_client . get_hmac_key_metadata (
access_id , project_id = project_id
)
hmac_key . delete ()
print (
"The key is deleted, though it may still appear in list_hmac_keys()"
" results."
)
Ruby
For more information, see the
Cloud Storage Ruby API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
def delete_hmac_key access_id :
# The access ID of the HMAC key
# access_id = "GOOG0234230X00"
require "google/cloud/storage"
storage = Google :: Cloud :: Storage . new
# By default Storage#hmac_keys uses the Storage client project_id
hmac_key = storage . hmac_key access_id
hmac_key . delete!
puts "The key is deleted, though it may still appear in Client#hmac_keys results."
end
REST APIs
JSON API
Have gcloud CLI installed and initialized , which lets
you generate an access token for the Authorization header.
Use cURL to call the JSON API with a DELETE hmacKeys
request:
curl -X DELETE \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
"https://storage.googleapis.com/storage/v1/projects/ PROJECT_IDENTIFIER /hmacKeys/ ACCESS_KEY_ID "
Where:
PROJECT_IDENTIFIER is the ID or number for
the project associated with the key you want to delete. For
example, my-pet-project .
ACCESS_KEY_ID is the access ID associated
with the key you are deleting.
XML API
Have gcloud CLI installed and initialized , which lets
you generate an access token for the Authorization header.
Use cURL to call the XML API with a POST HMAC Key
request:
curl -X POST \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
"https://storage.googleapis.com/?Action=DeleteAccessKey&AccessKeyId= ACCESS_KEY_ID "
Where ACCESS_KEY_ID is the access ID
associated with the key you are deleting.
What's next
Follow the guidelines for migrating from user account HMAC keys to
service account HMAC keys.
Use an HMAC key in an authenticated request .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
