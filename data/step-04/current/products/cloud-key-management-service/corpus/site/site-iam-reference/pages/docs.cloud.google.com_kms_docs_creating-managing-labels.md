---
title: "Labeling keys \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/creating-managing-labels
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/creating-managing-labels
  title: "Labeling keys \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Labeling keys | Cloud Key Management Service | Google Cloud Documentation
Skip to main content
Technology areas
close
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Cross-product tools
close
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
More
/
Console
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Cloud KMS
Start free
Overview
Guides
Reference
Samples
Resources
More
Technology areas
More
Overview
Guides
Reference
Samples
Resources
Cross-product tools
More
Console
Discover
Product overview
Protection levels
Overview
Cloud HSM overview
Single-tenant Cloud HSM overview
Cloud EKM overview
Reference architectures for Cloud EKM
CMEK overview
Cloud KMS with Autokey
Compatible services
Cloud HSM for Google Workspace
Locations
Get started
Cloud KMS resources
Key purposes and algorithms
Separation of duties
Create and use encryption keys
CMEK best practices
Create and manage Single-tenant Cloud HSM instances
Create keys
Automate key creation
Autokey overview
Enable Autokey
Create a resource with Autokey
Create a key ring
Create a key
Import keys
About key import
Key wrapping
Format a key for import
Manually wrap a key for import
Configure OpenSSL for manual key wrapping
Wrap a key using OpenSSL
Set up automatic key wrapping
Import a key version
Verify an imported key version
Create external keys
Set up Cloud EKM over the internet
Create an EKM connection
Create an external Key
Control access
Manage IAM roles
Use Organization Policy Contraints
Create custom organization policy constraints for Cloud KMS
CMEK organization policies
Control key destruction
Secure data using keys
Key APIs
Use gRPC
Access the API
Sort and filter API list results
Generate random bytes
Use Cloud KMS keys in Google Cloud
Encrypt and decrypt data
Envelope encryption
Additional authenticated data
Asymmetric encryption
Encrypt and decrypt data with a symmetric key
Encrypt and decrypt data with a raw symmetric key
Encrypt and decrypt data with an asymmetric key
Verify end-to-end data integrity
Encrypt application data
Set up client-side encryption with Tink
Onboard to Cloud HSM for Google Workspace
Sign and validate data
Digital signatures
Create and validate signatures
MAC signatures
Create and validate MAC signatures
Share secrets using key encapsulation mechanisms
Key encapsulation mechanisms
Encapsulate and decapsulate using KEMs
Manage keys
Resource consistency
Key version states
View keys and key details
View keys by project
View encryption metrics
View key usage
Get a Cloud KMS resource ID
Retrieve a public key
Attest a Cloud HSM key
Label a key
Create and manage tags
Enable and disable a key version
Destroy and restore a key version
Delete Cloud KMS resources
Rotate keys
About key rotation
Rotate a key
Re-encrypt data
Update external key reference
Monitor
Using Cloud Audit Logging
Cloud KMS Inventory Service audit logging
Monitor state changes
Monitor and adjust quotas
Use Cloud Monitoring
Monitor EKM usage
Troubleshoot
Troubleshoot failed imports
Troubleshoot EKM via VPC errors
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
On this page
What are labels?
Requirements for labels
Common uses of labels
Labels and tags
Creating a key with labels
Viewing labels on a key
Adding or updating labels
Removing labels
Audit logging
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Labeling keys
Stay organized with collections
Save and categorize content based on your preferences.
On this page
What are labels?
Requirements for labels
Common uses of labels
Labels and tags
Creating a key with labels
Viewing labels on a key
Adding or updating labels
Removing labels
Audit logging
Cloud Key Management Service provides the option to add labels to your
Cloud KMS keys. Labels are
key-value pairs that you can use to group related
Cloud KMS keys and store metadata
about a Cloud KMS key.
Labels are included in your bill, so you can see the distribution of costs
across your labels.
You can add, update, and remove key labels using the Google Cloud CLI and
the Cloud KMS REST API.
You can use labels with other Google Cloud resources, such
as virtual machine resources and storage buckets . For more information
about using labels in Google Cloud, see
Creating and Managing Labels .
What are labels?
A label is a key-value pair that you can assign to Google Cloud Cloud KMS keys.
They help you organize these resources and manage your costs at scale, with the
granularity you need. You can attach a label to each resource, then filter the
resources based on their labels. Information about labels is forwarded to the billing system that
lets you break down your billed charges by label. With built-in billing reports ,
you can filter and group costs by resource labels.
You can also use labels to
query billing data exports .
Requirements for labels
The labels applied to a resource must meet the following
requirements:
Each resource can have up to 64 labels.
Each label must be a key-value pair.
Keys have a minimum length of 1 character and a maximum length of 63
characters, and cannot be empty. Values can be empty, and have a maximum length
of 63 characters.
Keys and values can contain only lowercase letters, numeric characters,
underscores, and dashes. All characters must use UTF-8 encoding, and
international characters are allowed. Keys must start with a lowercase letter or
international character.
The key portion of a label must be unique within a single resource.
However, you can use the same key with multiple resources.
These limits apply to the key and value for each label, and to the
individual Google Cloud resources that have labels. There
is no limit on how many labels you can apply across all resources
within a project.
Common uses of labels
Here are some common use cases for labels:
Team or cost center labels : Add labels based on team or
cost center to distinguish Cloud KMS keys owned by different
teams (for example, team:research and team:analytics ). You can use this
type of label for cost accounting or budgeting.
Component labels : For example, component:redis ,
component:frontend , component:ingest , and component:dashboard .
Environment or stage labels : For example,
environment:production and environment:test .
State labels : For example, state:active ,
state:readytodelete , and state:archive .
Ownership labels : Used to identify the teams that are
responsible for operations, for example: team:shopping-cart .
Note: Don't include sensitive information in labels, including
personally identifiable information, such as an individual's name or title.
Labels are not designed to handle sensitive information.
We don't recommend creating large numbers of unique labels, such as
for timestamps or individual values for every API call.
The problem with this approach is that when the values change frequently or with
keys that clutter the catalog, this makes it difficult to effectively filter and
report on resources.
Labels and tags
Labels can be used as queryable annotations for resources, but can't be used
to set conditions on policies. Tags provide a way to conditionally allow or
deny policies based on whether a resource has a specific tag, by providing fine-grained
control over policies. For more information, see the
Tags overview .
Creating a key with labels
When creating a key, you can add labels by providing one or more key value
pairs as labels when you create your key.
Console gcloud C# Go Java Node.js PHP Python Ruby API
More
In the Google Cloud console, go to the
Key Management page.
Go to Key Management
Click the name of the key ring for which you want to create a key.
Click Create key .
For Key name , enter a name for the key.
Configure the key according to your needs.
Click Additional settings .
For each label you want to add, click Add label , and then enter the
Key and Value .
Click Create .
To use Cloud KMS on the command line, first
Install or upgrade to the latest version of Google Cloud CLI .
This example shows how to create a new key and assign labels to the key. You can
also add labels to an existing key.
gcloud kms keys create KEY_NAME \
--keyring KEY_RING \
--location LOCATION \
--purpose PURPOSE \
--labels " LABEL_LIST "
Replace the following:
KEY_NAME : the name of the key.
KEY_RING : the key ring where you want to create the key.
LOCATION : the location of the key ring—for example,
global .
PURPOSE : the purpose of the key—for example, encryption .
LABEL_LIST : a comma-separated list of key-value
pairs, where each pair is formatted as
LABEL_KEY = LABEL_VALUE . For example,
env=prod,team=research . Each label key can be used only once on a
Cloud Key Management Service key. If a label key is specified multiple times
with different values, each new value overwrites the previous value.
For information on all flags and possible values, run the command with the
--help flag.
To run this code, first set up a C# development environment and
install the Cloud KMS C# SDK .
using Google.Cloud.Kms.V1 ;
public class CreateKeyLabelsSample
{
public CryptoKey CreateKeyLabels (
string projectId = "my-project" , string locationId = "us-east1" , string keyRingId = "my-key-ring" ,
string id = "my-asymmetric-encrypt-key" )
{
// Create the client.
KeyManagementServiceClient client = KeyManagementServiceClient . Create ();
// Build the parent key ring name.
KeyRingName keyRingName = new KeyRingName ( projectId , locationId , keyRingId );
// Build the key.
CryptoKey key = new CryptoKey
{
Purpose = CryptoKey . Types . CryptoKeyPurpose . EncryptDecrypt ,
VersionTemplate = new CryptoKeyVersionTemplate
{
Algorithm = CryptoKeyVersion . Types . CryptoKeyVersionAlgorithm . GoogleSymmetricEncryption ,
}
};
key . Labels [ "team" ] = "alpha" ;
key . Labels [ "cost_center" ] = "cc1234" ;
// Call the API.
CryptoKey result = client . CreateCryptoKey ( keyRingName , id , key );
// Return the result.
return result ;
}
}
To run this code, first set up a Go development environment and
install the Cloud KMS Go SDK .
import (
"context"
"fmt"
"io"
kms "cloud.google.com/go/kms/apiv1"
"cloud.google.com/go/kms/apiv1/kmspb"
)
// createKeyLabels creates a new KMS key with labels.
func createKeyLabels ( w io . Writer , parent , id string ) error {
// parent := "projects/my-project/locations/us-east1/keyRings/my-key-ring"
// id := "my-labeled-key"
// Create the client.
ctx := context . Background ()
client , err := kms . NewKeyManagementClient ( ctx )
if err != nil {
return fmt . Errorf ( "failed to create kms client: %w" , err )
}
defer client . Close ()
// Build the request.
req := & kmspb . CreateCryptoKeyRequest {
Parent : parent ,
CryptoKeyId : id ,
CryptoKey : & kmspb . CryptoKey {
Purpose : kmspb . CryptoKey_ENCRYPT_DECRYPT ,
VersionTemplate : & kmspb . CryptoKeyVersionTemplate {
Algorithm : kmspb . CryptoKeyVersion_GOOGLE_SYMMETRIC_ENCRYPTION ,
},
Labels : map [ string ] string {
"team" : "alpha" ,
"cost_center" : "cc1234" ,
},
},
}
// Call the API.
result , err := client . CreateCryptoKey ( ctx , req )
if err != nil {
return fmt . Errorf ( "failed to create key: %w" , err )
}
fmt . Fprintf ( w , "Created key: %s\n" , result . Name )
return nil
}
To run this code, first set up a Java development environment and
install the Cloud KMS Java SDK .
import com.google.cloud.kms.v1. CryptoKey ;
import com.google.cloud.kms.v1. CryptoKey . CryptoKeyPurpose ;
import com.google.cloud.kms.v1. CryptoKeyVersion . CryptoKeyVersionAlgorithm ;
import com.google.cloud.kms.v1. CryptoKeyVersionTemplate ;
import com.google.cloud.kms.v1. KeyManagementServiceClient ;
import com.google.cloud.kms.v1. KeyRingName ;
import java.io.IOException ;
public class CreateKeyLabels {
public void createKeyLabels () throws IOException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String locationId = "us-east1" ;
String keyRingId = "my-key-ring" ;
String id = "my-key" ;
createKeyLabels ( projectId , locationId , keyRingId , id );
}
// Create a new key with labels.
public void createKeyLabels ( String projectId , String locationId , String keyRingId , String id )
throws IOException {
// Initialize client that will be used to send requests. This client only
// needs to be created once, and can be reused for multiple requests. After
// completing all of your requests, call the "close" method on the client to
// safely clean up any remaining background resources.
try ( KeyManagementServiceClient client = KeyManagementServiceClient . create ()) {
// Build the parent name from the project, location, and key ring.
KeyRingName keyRingName = KeyRingName . of ( projectId , locationId , keyRingId );
// Build the key to create with labels.
CryptoKey key =
CryptoKey . newBuilder ()
. setPurpose ( CryptoKeyPurpose . ENCRYPT_DECRYPT )
. setVersionTemplate (
CryptoKeyVersionTemplate . newBuilder ()
. setAlgorithm ( CryptoKeyVersionAlgorithm . GOOGLE_SYMMETRIC_ENCRYPTION ))
. putLabels ( "team" , "alpha" )
. putLabels ( "cost_center" , "cc1234" )
. build ();
// Create the key.
CryptoKey createdKey = client . createCryptoKey ( keyRingName , id , key );
System . out . printf ( "Created key with labels %s%n" , createdKey . getName ());
}
}
}
To run this code, first set up a Node.js development environment and
install the Cloud KMS Node.js SDK .
//
// TODO(developer): Uncomment these variables before running the sample.
//
// const projectId = 'my-project';
// const locationId = 'us-east1';
// const keyRingId = 'my-key-ring';
// const id = 'my-labeled-key';
// Imports the Cloud KMS library
const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' );
// Instantiates a client
const client = new KeyManagementServiceClient ();
// Build the parent key ring name
const keyRingName = client . keyRingPath ( projectId , locationId , keyRingId );
async function createKeyLabels () {
const [ key ] = await client . createCryptoKey ({
parent : keyRingName ,
cryptoKeyId : id ,
cryptoKey : {
purpose : 'ENCRYPT_DECRYPT' ,
versionTemplate : {
algorithm : 'GOOGLE_SYMMETRIC_ENCRYPTION' ,
},
labels : {
team : 'alpha' ,
cost_center : 'cc1234' ,
},
},
});
console . log ( `Created labeled key: ${ key . name } ` );
return key ;
}
return createKeyLabels ();
To run this code, first learn about using PHP on Google Cloud and
install the Cloud KMS PHP SDK .
use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient;
use Google\Cloud\Kms\V1\CreateCryptoKeyRequest;
use Google\Cloud\Kms\V1\CryptoKey;
use Google\Cloud\Kms\V1\CryptoKey\CryptoKeyPurpose;
use Google\Cloud\Kms\V1\CryptoKeyVersion\CryptoKeyVersionAlgorithm;
use Google\Cloud\Kms\V1\CryptoKeyVersionTemplate;
function create_key_labels(
string $projectId = 'my-project',
string $locationId = 'us-east1',
string $keyRingId = 'my-key-ring',
string $id = 'my-key-with-labels'
): CryptoKey {
// Create the Cloud KMS client.
$client = new KeyManagementServiceClient();
// Build the parent key ring name.
$keyRingName = $client->keyRingName($projectId, $locationId, $keyRingId);
// Build the key.
$key = (new CryptoKey())
->setPurpose(CryptoKeyPurpose::ENCRYPT_DECRYPT)
->setVersionTemplate((new CryptoKeyVersionTemplate())
->setAlgorithm(CryptoKeyVersionAlgorithm::GOOGLE_SYMMETRIC_ENCRYPTION)
)
->setLabels([
'team' => 'alpha',
'cost_center' => 'cc1234',
]);
// Call the API.
$createCryptoKeyRequest = (new CreateCryptoKeyRequest())
->setParent($keyRingName)
->setCryptoKeyId($id)
->setCryptoKey($key);
$createdKey = $client->createCryptoKey($createCryptoKeyRequest);
printf('Created labeled key: %s' . PHP_EOL, $createdKey->getName());
return $createdKey;
}
To run this code, first set up a Python development environment and
install the Cloud KMS Python SDK .
from google.cloud import kms
def create_key_labels (
project_id : str , location_id : str , key_ring_id : str , key_id : str
) - > kms . CryptoKey :
"""
Creates a new key in Cloud KMS with labels.
Args:
project_id (string): Google Cloud project ID (e.g. 'my-project').
location_id (string): Cloud KMS location (e.g. 'us-east1').
key_ring_id (string): ID of the Cloud KMS key ring (e.g. 'my-key-ring').
key_id (string): ID of the key to create (e.g. 'my-labeled-key').
Returns:
CryptoKey: Cloud KMS key.
"""
# Create the client.
client = kms . KeyManagementServiceClient ()
# Build the parent key ring name.
key_ring_name = client . key_ring_path ( project_id , location_id , key_ring_id )
# Build the key.
purpose = kms . CryptoKey . CryptoKeyPurpose . ENCRYPT_DECRYPT
algorithm = (
kms . CryptoKeyVersion . CryptoKeyVersionAlgorithm . GOOGLE_SYMMETRIC_ENCRYPTION
)
key = {
"purpose" : purpose ,
"version_template" : {
"algorithm" : algorithm ,
},
"labels" : { "team" : "alpha" , "cost_center" : "cc1234" },
}
# Call the API.
created_key = client . create_crypto_key (
request = { "parent" : key_ring_name , "crypto_key_id" : key_id , "crypto_key" : key }
)
print ( f "Created labeled key: { created_key . name } " )
return created_key
To run this code, first set up a Ruby development environment and
install the Cloud KMS Ruby SDK .
# TODO(developer): uncomment these values before running the sample.
# project_id = "my-project"
# location_id = "us-east1"
# key_ring_id = "my-key-ring"
# id = "my-key-with-labels"
# Require the library.
require "google/cloud/kms"
# Create the client.
client = Google :: Cloud :: Kms . key_management_service
# Build the parent key ring name.
key_ring_name = client . key_ring_path project : project_id , location : location_id , key_ring : key_ring_id
# Build the key.
key = {
purpose : :ENCRYPT_DECRYPT ,
version_template : {
algorithm : :GOOGLE_SYMMETRIC_ENCRYPTION
},
labels : {
"team" = > "alpha" ,
"cost_center" = > "cc1234"
}
}
# Call the API.
created_key = client . create_crypto_key parent : key_ring_name , crypto_key_id : id , crypto_key : key
puts "Created labeled key: #{ created_key . name } "
Add labels when you create a new key by using the CryptoKeys.create
method, and include the labels property in your request body. For example:
{
"purpose" : "ENCRYPT_DECRYPT" ,
"labels" : [
{
"key" : " LABEL_KEY " ,
"value" : " LABEL_VALUE "
}
]
}
Replace the following:
LABEL_KEY : the label's key—for example, env .
LABEL_VALUE : the value for the label—for example, prod .
You can add multiple label keys, each with its own value. Each label key can be
used only once on a Cloud Key Management Service key. If a label key is specified multiple
times with different values, each new value overwrites the previous value.
Viewing labels on a key
Console gcloud C# Go Java Node.js PHP Python Ruby API
More
In the Google Cloud console, go to the
Key Management page.
Go to Key Management
Click the name of the key ring for the key you want to inspect.
In the header, click Show info panel .
In the panel, choose the Labels tab.
To use Cloud KMS on the command line, first
Install or upgrade to the latest version of Google Cloud CLI .
gcloud kms keys describe KEY_NAME \
--keyring KEY_RING \
--location LOCATION
Replace the following:
KEY_NAME : the name of the key for which you want to view labels.
KEY_RING : the name of the key ring that contains the key.
LOCATION : the location of the key ring.
For information on all flags and possible values, run the command with the
--help flag.
To run this code, first set up a C# development environment and
install the Cloud KMS C# SDK .
using Google.Cloud.Kms.V1 ;
using System ;
public class GetKeyLabelsSample
{
public CryptoKey GetKeyLabels ( string projectId = "my-project" , string locationId = "us-east1" , string keyRingId = "my-key-ring" , string keyId = "my-key" )
{
// Create the client.
KeyManagementServiceClient client = KeyManagementServiceClient . Create ();
// Build the key name.
CryptoKeyName keyName = new CryptoKeyName ( projectId , locationId , keyRingId , keyId );
// Call the API.
CryptoKey result = client . GetCryptoKey ( keyName );
// Example of iterating over labels.
foreach ( var item in result . Labels )
{
String key = item . Key ;
String value = item . Value ;
// ...
}
// Return the ciphertext.
return result ;
}
}
To run this code, first set up a Go development environment and
install the Cloud KMS Go SDK .
import (
"context"
"fmt"
"io"
kms "cloud.google.com/go/kms/apiv1"
"cloud.google.com/go/kms/apiv1/kmspb"
)
// getKeyLabels fetches the labels on a KMS key.
func getKeyLabels ( w io . Writer , name string ) error {
// name := "projects/my-project/locations/us-east1/keyRings/my-key-ring/cryptoKeys/my-key"
// Create the client.
ctx := context . Background ()
client , err := kms . NewKeyManagementClient ( ctx )
if err != nil {
return fmt . Errorf ( "failed to create kms client: %w" , err )
}
defer client . Close ()
// Build the request.
req := & kmspb . GetCryptoKeyRequest {
Name : name ,
}
// Call the API.
result , err := client . GetCryptoKey ( ctx , req )
if err != nil {
return fmt . Errorf ( "failed to get key: %w" , err )
}
// Extract and print the labels.
for k , v := range result . Labels {
fmt . Fprintf ( w , "%s=%s\n" , k , v )
}
return nil
}
To run this code, first set up a Java development environment and
install the Cloud KMS Java SDK .
import com.google.cloud.kms.v1. CryptoKey ;
import com.google.cloud.kms.v1. CryptoKeyName ;
import com.google.cloud.kms.v1. KeyManagementServiceClient ;
import java.io.IOException ;
public class GetKeyLabels {
public void getKeyLabels () throws IOException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String locationId = "us-east1" ;
String keyRingId = "my-key-ring" ;
String keyId = "my-key" ;
getKeyLabels ( projectId , locationId , keyRingId , keyId );
}
// Get the labels associated with a key.
public void getKeyLabels ( String projectId , String locationId , String keyRingId , String keyId )
throws IOException {
// Initialize client that will be used to send requests. This client only
// needs to be created once, and can be reused for multiple requests. After
// completing all of your requests, call the "close" method on the client to
// safely clean up any remaining background resources.
try ( KeyManagementServiceClient client = KeyManagementServiceClient . create ()) {
// Build the name from the project, location, key ring, and keyId.
CryptoKeyName keyName = CryptoKeyName . of ( projectId , locationId , keyRingId , keyId );
// Get the key.
CryptoKey key = client . getCryptoKey ( keyName );
// Print out each label.
key . getLabelsMap (). forEach (( k , v ) - > System . out . printf ( "%s=%s%n" , k , v ));
}
}
}
To run this code, first set up a Node.js development environment and
install the Cloud KMS Node.js SDK .
//
// TODO(developer): Uncomment these variables before running the sample.
//
// const projectId = 'my-project';
// const locationId = 'us-east1';
// const keyRingId = 'my-key-ring';
// const keyId = 'my-key';
// Imports the Cloud KMS library
const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' );
// Instantiates a client
const client = new KeyManagementServiceClient ();
// Build the key name
const keyName = client . cryptoKeyPath ( projectId , locationId , keyRingId , keyId );
async function getKeyLabels () {
const [ key ] = await client . getCryptoKey ({
name : keyName ,
});
for ( const k in key . labels ) {
console . log ( ` ${ k } : ${ key . labels [ k ] } ` );
}
return key ;
}
return getKeyLabels ();
To run this code, first learn about using PHP on Google Cloud and
install the Cloud KMS PHP SDK .
use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient;
use Google\Cloud\Kms\V1\GetCryptoKeyRequest;
function get_key_labels(
string $projectId = 'my-project',
string $locationId = 'us-east1',
string $keyRingId = 'my-key-ring',
string $keyId = 'my-key'
) {
// Create the Cloud KMS client.
$client = new KeyManagementServiceClient();
// Build the key name.
$keyName = $client->cryptoKeyName($projectId, $locationId, $keyRingId, $keyId);
// Call the API.
$getCryptoKeyRequest = (new GetCryptoKeyRequest())
->setName($keyName);
$key = $client->getCryptoKey($getCryptoKeyRequest);
// Example of iterating over labels.
foreach ($key->getLabels() as $k => $v) {
printf('%s = %s' . PHP_EOL, $k, $v);
}
return $key;
}
To run this code, first set up a Python development environment and
install the Cloud KMS Python SDK .
from google.cloud import kms
def get_key_labels (
project_id : str , location_id : str , key_ring_id : str , key_id : str
) - > kms . CryptoKey :
"""
Get a key and its labels.
Args:
project_id (string): Google Cloud project ID (e.g. 'my-project').
location_id (string): Cloud KMS location (e.g. 'us-east1').
key_ring_id (string): ID of the Cloud KMS key ring (e.g. 'my-key-ring').
key_id (string): ID of the key to use (e.g. 'my-key').
Returns:
CryptoKey: Cloud KMS key.
"""
# Create the client.
client = kms . KeyManagementServiceClient ()
# Build the key name.
key_name = client . crypto_key_path ( project_id , location_id , key_ring_id , key_id )
# Call the API.
key = client . get_crypto_key ( request = { "name" : key_name })
# Example of iterating over labels.
for k , v in key . labels . items ():
print ( f " { k } = { v } " )
return key
To run this code, first set up a Ruby development environment and
install the Cloud KMS Ruby SDK .
# TODO(developer): uncomment these values before running the sample.
# project_id = "my-project"
# location_id = "us-east1"
# key_ring_id = "my-key-ring"
# key_id = "my-key"
# Require the library.
require "google/cloud/kms"
# Create the client.
client = Google :: Cloud :: Kms . key_management_service
# Build the parent key name.
key_name = client . crypto_key_path project : project_id ,
location : location_id ,
key_ring : key_ring_id ,
crypto_key : key_id
# Call the API.
key = client . get_crypto_key name : key_name
# Example of iterating over labels.
key . labels . each do | k , v |
puts " #{ k } = #{ v } "
end
These examples use curl as an HTTP client
to demonstrate using the API. For more information about access control, see
Accessing the Cloud KMS API .
To see the labels applied to the key, use the
CryptoKeys.get
method:
curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING /cryptoKeys/ KEY_NAME " \
--request "GET" \
--header "authorization: Bearer TOKEN " \
--header "content-type: application/json" \
--header "x-goog-user-project: PROJECT_ID "
Replace the following:
PROJECT_ID : the ID of the project that contains the key ring.
KEY_NAME : the name of the key for which you want to view labels.
KEY_RING : the name of the key ring that contains the key.
LOCATION : the location of the key ring.
Adding or updating labels
Console gcloud C# Go Java Node.js PHP Ruby Python API
More
In the Google Cloud console, go to the
Key Management page.
Go to Key Management
Click the name of the key ring for the key you want to inspect.
In the header, click Show info panel .
In the panel, choose the Labels tab.
Edit the value of a label directly in the corresponding text field.
Edit the key of a label by adding a new label with the desired key name and
delete the old label by clicking the Delete delete next to the label you want to delete.
Click Save .
To use Cloud KMS on the command line, first
Install or upgrade to the latest version of Google Cloud CLI .
gcloud kms keys update KEY_NAME \
--keyring KEY_RING \
--location LOCATION \
--update-labels " LABEL_LIST "
KEY_NAME : the name of the key.
KEY_RING : the key ring that contains the key.
LOCATION : the location of the key ring.
LABEL_LIST : a comma-separated list of key-value
pairs, where each pair is formatted as
LABEL_KEY = LABEL_VALUE . For example,
env=prod,team=research . Each label key can be used only once on a
Cloud Key Management Service key. If a label key is specified multiple times
with different values, each new value overwrites the previous value.
For information on all flags and possible values, run the command with the
--help flag.
To run this code, first set up a C# development environment and
install the Cloud KMS C# SDK .
using Google.Cloud.Kms.V1 ;
using Google.Protobuf.WellKnownTypes ;
public class UpdateKeyUpdateLabelsSample
{
public CryptoKey UpdateKeyUpdateLabels ( string projectId = "my-project" , string locationId = "us-east1" , string keyRingId = "my-key-ring" , string keyId = "my-key" )
{
// Create the client.
KeyManagementServiceClient client = KeyManagementServiceClient . Create ();
// Build the key name.
CryptoKeyName keyName = new CryptoKeyName ( projectId , locationId , keyRingId , keyId );
//
// Step 1 - get the current set of labels on the key
//
// Get the current key.
CryptoKey key = client . GetCryptoKey ( keyName );
//
// Step 2 - add a label to the list of labels
//
// Add a new label
key . Labels [ "new_label" ] = "new_value" ;
// Build the update mask.
FieldMask fieldMask = new FieldMask
{
Paths = { "labels" }
};
// Call the API.
CryptoKey result = client . UpdateCryptoKey ( key , fieldMask );
// Return the updated key.
return result ;
}
}
To run this code, first set up a Go development environment and
install the Cloud KMS Go SDK .
import (
"context"
"fmt"
"io"
kms "cloud.google.com/go/kms/apiv1"
"cloud.google.com/go/kms/apiv1/kmspb"
fieldmask "google.golang.org/genproto/protobuf/field_mask"
)
// updateKeyUpdateLabels updates an existing KMS key, adding a new label.
func updateKeyUpdateLabels ( w io . Writer , name string ) error {
// name := "projects/my-project/locations/us-east1/keyRings/my-key-ring/cryptoKeys/my-key"
// Create the client.
ctx := context . Background ()
client , err := kms . NewKeyManagementClient ( ctx )
if err != nil {
return fmt . Errorf ( "failed to create kms client: %w" , err )
}
defer client . Close ()
//
// Step 1 - get the current set of labels on the key
//
// Build the request.
getReq := & kmspb . GetCryptoKeyRequest {
Name : name ,
}
// Call the API.
result , err := client . GetCryptoKey ( ctx , getReq )
if err != nil {
return fmt . Errorf ( "failed to get key: %w" , err )
}
//
// Step 2 - add a label to the list of labels
//
labels := result . Labels
labels [ "new_label" ] = "new_value"
// Build the request.
updateReq := & kmspb . UpdateCryptoKeyRequest {
CryptoKey : & kmspb . CryptoKey {
Name : name ,
Labels : labels ,
},
UpdateMask : & fieldmask . FieldMask {
Paths : [] string { "labels" },
},
}
// Call the API.
result , err = client . UpdateCryptoKey ( ctx , updateReq )
if err != nil {
return fmt . Errorf ( "failed to update key: %w" , err )
}
// Print the labels.
for k , v := range result . Labels {
fmt . Fprintf ( w , "%s=%s\n" , k , v )
}
return nil
}
To run this code, first set up a Java development environment and
install the Cloud KMS Java SDK .
import com.google.cloud.kms.v1. CryptoKey ;
import com.google.cloud.kms.v1. CryptoKeyName ;
import com.google.cloud.kms.v1. KeyManagementServiceClient ;
import com.google.protobuf. FieldMask ;
import com.google.protobuf.util. FieldMaskUtil ;
import java.io.IOException ;
public class UpdateKeyUpdateLabels {
public void updateKeyUpdateLabels () throws IOException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String locationId = "us-east1" ;
String keyRingId = "my-key-ring" ;
String keyId = "my-key" ;
updateKeyUpdateLabels ( projectId , locationId , keyRingId , keyId );
}
// Create a new key that is used for symmetric encryption and decryption.
public void updateKeyUpdateLabels (
String projectId , String locationId , String keyRingId , String keyId ) throws IOException {
// Initialize client that will be used to send requests. This client only
// needs to be created once, and can be reused for multiple requests. After
// completing all of your requests, call the "close" method on the client to
// safely clean up any remaining background resources.
try ( KeyManagementServiceClient client = KeyManagementServiceClient . create ()) {
// Build the parent name from the project, location, and key ring.
CryptoKeyName cryptoKeyName = CryptoKeyName . of ( projectId , locationId , keyRingId , keyId );
//
// Step 1 - get the current set of labels on the key
//
// Get the current key.
CryptoKey key = client . getCryptoKey ( cryptoKeyName );
//
// Step 2 - add a label to the list of labels
//
// Add a new label.
key = key . toBuilder (). putLabels ( "new_label" , "new_value" ). build ();
// Construct the field mask.
FieldMask fieldMask = FieldMaskUtil . fromString ( "labels" );
// Update the key.
CryptoKey updatedKey = client . updateCryptoKey ( key , fieldMask );
System . out . printf ( "Updated key %s%n" , updatedKey . getName ());
}
}
}
To run this code, first set up a Node.js development environment and
install the Cloud KMS Node.js SDK .
//
// TODO(developer): Uncomment these variables before running the sample.
//
// const projectId = 'my-project';
// const locationId = 'us-east1';
// const keyRingId = 'my-key-ring';
// const keyId = 'my-key';
// const versionId = '123';
// Imports the Cloud KMS library
const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' );
// Instantiates a client
const client = new KeyManagementServiceClient ();
// Build the key name
const keyName = client . cryptoKeyPath ( projectId , locationId , keyRingId , keyId );
async function updateKeyUpdateLabels () {
const [ key ] = await client . updateCryptoKey ({
cryptoKey : {
name : keyName ,
labels : {
new_label : 'new_value' ,
},
},
updateMask : {
paths : [ 'labels' ],
},
});
console . log ( `Updated labels for: ${ key . name } ` );
return key ;
}
return updateKeyUpdateLabels ();
To run this code, first learn about using PHP on Google Cloud and
install the Cloud KMS PHP SDK .
use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient;
use Google\Cloud\Kms\V1\CryptoKey;
use Google\Cloud\Kms\V1\UpdateCryptoKeyRequest;
use Google\Protobuf\FieldMask;
function update_key_update_labels(
string $projectId = 'my-project',
string $locationId = 'us-east1',
string $keyRingId = 'my-key-ring',
string $keyId = 'my-key'
): CryptoKey {
// Create the Cloud KMS client.
$client = new KeyManagementServiceClient();
// Build the key name.
$keyName = $client->cryptoKeyName($projectId, $locationId, $keyRingId, $keyId);
// Build the key.
$key = (new CryptoKey())
->setName($keyName)
->setLabels(['new_label' => 'new_value']);
// Create the field mask.
$updateMask = (new FieldMask())
->setPaths(['labels']);
// Call the API.
$updateCryptoKeyRequest = (new UpdateCryptoKeyRequest())
->setCryptoKey($key)
->setUpdateMask($updateMask);
$updatedKey = $client->updateCryptoKey($updateCryptoKeyRequest);
printf('Updated key: %s' . PHP_EOL, $updatedKey->getName());
return $updatedKey;
}
To run this code, first set up a Ruby development environment and
install the Cloud KMS Ruby SDK .
# TODO(developer): uncomment these values before running the sample.
# project_id = "my-project"
# location_id = "us-east1"
# key_ring_id = "my-key-ring"
# key_id = "my-key"
# Require the library.
require "google/cloud/kms"
# Create the client.
client = Google :: Cloud :: Kms . key_management_service
# Build the parent key name.
key_name = client . crypto_key_path project : project_id ,
location : location_id ,
key_ring : key_ring_id ,
crypto_key : key_id
# Build the key.
key = {
name : key_name ,
labels : {
"new_label" = > "new_value"
}
}
# Build the field mask.
update_mask = { paths : [ "labels" ] }
# Call the API.
updated_key = client . update_crypto_key crypto_key : key , update_mask : update_mask
puts "Updated key: #{ updated_key . name } "
To run this code, first set up a Python development environment and
install the Cloud KMS Python SDK .
from google.cloud import kms
def update_key_update_labels (
project_id : str , location_id : str , key_ring_id : str , key_id : str
) - > kms . CryptoKey :
"""
Update labels on an existing key.
Args:
project_id (string): Google Cloud project ID (e.g. 'my-project').
location_id (string): Cloud KMS location (e.g. 'us-east1').
key_ring_id (string): ID of the Cloud KMS key ring (e.g. 'my-key-ring').
key_id (string): ID of the key to use (e.g. 'my-key').
Returns:
CryptoKey: Updated Cloud KMS key.
"""
# Create the client.
client = kms . KeyManagementServiceClient ()
# Build the key name.
key_name = client . crypto_key_path ( project_id , location_id , key_ring_id , key_id )
key = { "name" : key_name , "labels" : { "new_label" : "new_value" }}
# Build the update mask.
update_mask = { "paths" : [ "labels" ]}
# Call the API.
updated_key = client . update_crypto_key (
request = { "crypto_key" : key , "update_mask" : update_mask }
)
print ( f "Updated key: { updated_key . name } " )
return updated_key
These examples use curl as an HTTP client
to demonstrate using the API. For more information about access control, see
Accessing the Cloud KMS API .
Add or update labels to an existing key by using the
CryptoKeys.patch
method, and include the labels property in your request body. For example:
{
"labels" : [
{
"key" : " LABEL_KEY " ,
"value" : " LABEL_VALUE "
}
]
}
Removing labels
Console gcloud C# Go Java Node.js PHP Python Ruby API
More
In the Google Cloud console, go to the
Key Management page.
Go to Key Management
Click the name of the key ring for the key you want to inspect.
In the header, click Show info panel .
In the panel, choose the Labels tab.
Click the Delete delete
icon next to the labels you want to delete.
Click Save .
To use Cloud KMS on the command line, first
Install or upgrade to the latest version of Google Cloud CLI .
gcloud kms keys update KEY_NAME \
--keyring KEY_RING \
--location LOCATION \
--remove-labels " LABEL_KEYS "
KEY_NAME : the name of the key.
KEY_RING : the key ring that contains the key.
LOCATION : the location of the key ring.
LABEL_LIST : a comma-separated list of label keys that
you want to remove from the key—for example, env,team .
For information on all flags and possible values, run the command with the
--help flag.
To run this code, first set up a C# development environment and
install the Cloud KMS C# SDK .
using Google.Cloud.Kms.V1 ;
using Google.Protobuf.WellKnownTypes ;
public class UpdateKeyRemoveLabelsSample
{
public CryptoKey UpdateKeyRemoveLabels ( string projectId = "my-project" , string locationId = "us-east1" , string keyRingId = "my-key-ring" , string keyId = "my-key" )
{
// Create the client.
KeyManagementServiceClient client = KeyManagementServiceClient . Create ();
// Build the key.
CryptoKey key = new CryptoKey
{
CryptoKeyName = new CryptoKeyName ( projectId , locationId , keyRingId , keyId ),
};
// Build the update mask.
FieldMask fieldMask = new FieldMask
{
Paths = { "labels" },
};
// Call the API.
CryptoKey result = client . UpdateCryptoKey ( key , fieldMask );
// Return the updated key.
return result ;
}
}
To run this code, first set up a Go development environment and
install the Cloud KMS Go SDK .
import (
"context"
"fmt"
"io"
kms "cloud.google.com/go/kms/apiv1"
"cloud.google.com/go/kms/apiv1/kmspb"
fieldmask "google.golang.org/genproto/protobuf/field_mask"
)
// updateKeyRemoveLabels removes all labels from an existing Cloud KMS key.
func updateKeyRemoveLabels ( w io . Writer , name string ) error {
// name := "projects/my-project/locations/us-east1/keyRings/my-key-ring/cryptoKeys/my-key"
// Create the client.
ctx := context . Background ()
client , err := kms . NewKeyManagementClient ( ctx )
if err != nil {
return fmt . Errorf ( "failed to create kms client: %w" , err )
}
defer client . Close ()
// Build the request.
req := & kmspb . UpdateCryptoKeyRequest {
CryptoKey : & kmspb . CryptoKey {
Name : name ,
Labels : nil ,
},
UpdateMask : & fieldmask . FieldMask {
Paths : [] string { "labels" },
},
}
// Call the API.
result , err := client . UpdateCryptoKey ( ctx , req )
if err != nil {
return fmt . Errorf ( "failed to update key: %w" , err )
}
fmt . Fprintf ( w , "Updated key: %s\n" , result . Name )
return nil
}
To run this code, first set up a Java development environment and
install the Cloud KMS Java SDK .
import com.google.cloud.kms.v1. CryptoKey ;
import com.google.cloud.kms.v1. CryptoKeyName ;
import com.google.cloud.kms.v1. KeyManagementServiceClient ;
import com.google.protobuf. FieldMask ;
import com.google.protobuf.util. FieldMaskUtil ;
import java.io.IOException ;
public class UpdateKeyRemoveLabels {
public void updateKeyRemoveLabels () throws IOException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String locationId = "us-east1" ;
String keyRingId = "my-key-ring" ;
String keyId = "my-key" ;
updateKeyRemoveLabels ( projectId , locationId , keyRingId , keyId );
}
// Update a key to remove all labels.
public void updateKeyRemoveLabels (
String projectId , String locationId , String keyRingId , String keyId ) throws IOException {
// Initialize client that will be used to send requests. This client only
// needs to be created once, and can be reused for multiple requests. After
// completing all of your requests, call the "close" method on the client to
// safely clean up any remaining background resources.
try ( KeyManagementServiceClient client = KeyManagementServiceClient . create ()) {
// Build the name from the project, location, key ring, and keyId.
CryptoKeyName cryptoKeyName = CryptoKeyName . of ( projectId , locationId , keyRingId , keyId );
// Build an empty key with no labels.
CryptoKey key = CryptoKey . newBuilder (). setName ( cryptoKeyName . toString ()). build ();
// Construct the field mask.
FieldMask fieldMask = FieldMaskUtil . fromString ( "labels" );
// Create the key.
CryptoKey createdKey = client . updateCryptoKey ( key , fieldMask );
System . out . printf ( "Updated key %s%n" , createdKey . getName ());
}
}
}
To run this code, first set up a Node.js development environment and
install the Cloud KMS Node.js SDK .
//
// TODO(developer): Uncomment these variables before running the sample.
//
// const projectId = 'my-project';
// const locationId = 'us-east1';
// const keyRingId = 'my-key-ring';
// const keyId = 'my-key';
// const versionId = '123';
// Imports the Cloud KMS library
const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' );
// Instantiates a client
const client = new KeyManagementServiceClient ();
// Build the key name
const keyName = client . cryptoKeyPath ( projectId , locationId , keyRingId , keyId );
async function updateKeyRemoveLabels () {
const [ key ] = await client . updateCryptoKey ({
cryptoKey : {
name : keyName ,
labels : null ,
},
updateMask : {
paths : [ 'labels' ],
},
});
console . log ( `Removed labels from: ${ key . name } ` );
return key ;
}
return updateKeyRemoveLabels ();
To run this code, first learn about using PHP on Google Cloud and
install the Cloud KMS PHP SDK .
use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient;
use Google\Cloud\Kms\V1\CryptoKey;
use Google\Cloud\Kms\V1\UpdateCryptoKeyRequest;
use Google\Protobuf\FieldMask;
function update_key_remove_labels(
string $projectId = 'my-project',
string $locationId = 'us-east1',
string $keyRingId = 'my-key-ring',
string $keyId = 'my-key'
): CryptoKey {
// Create the Cloud KMS client.
$client = new KeyManagementServiceClient();
// Build the key name.
$keyName = $client->cryptoKeyName($projectId, $locationId, $keyRingId, $keyId);
// Build the key.
$key = (new CryptoKey())
->setName($keyName)
->setLabels([]);
// Create the field mask.
$updateMask = (new FieldMask())
->setPaths(['labels']);
// Call the API.
$updateCryptoKeyRequest = (new UpdateCryptoKeyRequest())
->setCryptoKey($key)
->setUpdateMask($updateMask);
$updatedKey = $client->updateCryptoKey($updateCryptoKeyRequest);
printf('Updated key: %s' . PHP_EOL, $updatedKey->getName());
return $updatedKey;
}
To run this code, first set up a Python development environment and
install the Cloud KMS Python SDK .
from google.cloud import kms
def update_key_remove_labels (
project_id : str , location_id : str , key_ring_id : str , key_id : str
) - > kms . CryptoKey :
"""
Remove labels from an existing key.
Args:
project_id (string): Google Cloud project ID (e.g. 'my-project').
location_id (string): Cloud KMS location (e.g. 'us-east1').
key_ring_id (string): ID of the Cloud KMS key ring (e.g. 'my-key-ring').
key_id (string): ID of the key to use (e.g. 'my-key').
Returns:
CryptoKey: Updated Cloud KMS key.
"""
# Create the client.
client = kms . KeyManagementServiceClient ()
# Build the key name.
key_name = client . crypto_key_path ( project_id , location_id , key_ring_id , key_id )
key = {
"name" : key_name ,
"labels" : [],
}
# Build the update mask.
update_mask = { "paths" : [ "labels" ]}
# Call the API.
updated_key = client . update_crypto_key (
request = { "crypto_key" : key , "update_mask" : update_mask }
)
print ( f "Updated key: { updated_key . name } " )
return updated_key
To run this code, first set up a Ruby development environment and
install the Cloud KMS Ruby SDK .
# TODO(developer): uncomment these values before running the sample.
# project_id = "my-project"
# location_id = "us-east1"
# key_ring_id = "my-key-ring"
# key_id = "my-key"
# Require the library.
require "google/cloud/kms"
# Create the client.
client = Google :: Cloud :: Kms . key_management_service
# Build the parent key name.
key_name = client . crypto_key_path project : project_id ,
location : location_id ,
key_ring : key_ring_id ,
crypto_key : key_id
# Build the key.
key = {
name : key_name ,
labels : {}
}
# Build the field mask.
update_mask = { paths : [ "labels" ] }
# Call the API.
updated_key = client . update_crypto_key crypto_key : key , update_mask : update_mask
puts "Updated key: #{ updated_key . name } "
These examples use curl as an HTTP client
to demonstrate using the API. For more information about access control, see
Accessing the Cloud KMS API .
Remove labels from an existing key by using the
CryptoKeys.patch
method, and include the labels property as an empty array in your request
body. For example:
{
"labels" : []
}
Audit logging
Cloud Audit Logs for Cloud KMS can be used to log label
information when keys are created or updated. Key creation and updates are
both admin activities , and changes to labels are noted in the admin
activity log.
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
Products and pricing
See all products
Google Cloud pricing
Google Cloud Marketplace
Contact sales
Support
Community forums
Support
Release Notes
System status
Resources
GitHub
Getting Started with Google Cloud
Code samples
Cloud Architecture Center
Training and Certification
Engage
Blog
Events
X (Twitter)
Google Cloud on YouTube
Google Cloud Tech on YouTube
About Google
Privacy
Site terms
Google Cloud terms
Manage cookies
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter
Subscribe
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
