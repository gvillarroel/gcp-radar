---
title: "Create a key \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/create-key
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/create-key
  title: "Create a key \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Create a key | Cloud Key Management Service | Google Cloud Documentation
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
Before you begin Required roles
Create a symmetric encryption key Create a symmetric encryption key with custom automatic rotation
Set the duration of the 'scheduled for destruction' state
Create an asymmetric key Create an asymmetric decryption key
Create an asymmetric signing key
Create a KEM key
Retrieve the public key
Convert a public key to JWK format
Control access to asymmetric keys
Create a MAC signing key
What's next
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Create a key
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin Required roles
Create a symmetric encryption key Create a symmetric encryption key with custom automatic rotation
Set the duration of the 'scheduled for destruction' state
Create an asymmetric key Create an asymmetric decryption key
Create an asymmetric signing key
Create a KEM key
Retrieve the public key
Convert a public key to JWK format
Control access to asymmetric keys
Create a MAC signing key
What's next
This page shows how to create a key in Cloud KMS. A key can be a
symmetric or asymmetric encryption key, an asymmetric signing key, or a MAC
signing key.
When you create a key, you add it to a key ring in a specific
Cloud KMS location . You can create a new key
ring or use an existing one.
In this page, you generate a new Cloud KMS or Cloud HSM key
and add it to an existing key ring.
To create a Cloud EKM key, see Create an external
key . To import a Cloud KMS or Cloud HSM key,
see Import a key .
Before you begin
Before completing the tasks on this page, you need the following:
A Google Cloud project resource to contain your
Cloud KMS resources. We recommend using a separate project for your
Cloud KMS resources that does not contain any other
Google Cloud resources.
The name and location of the key ring where you want to create your key.
Choose a key ring in a location that is near your other resources and that
supports your chosen protection
level .
To view available locations and the protection levels that they support, see
Cloud KMS locations .
To create a key ring, see Create a key
ring .
Optional: To use the gcloud CLI, prepare your environment.
In one of the following development environments, set up the gcloud CLI:
Cloud Shell : to use an online terminal with the gcloud CLI
already set up, activate Cloud Shell.
Activate Cloud Shell on this page
Local shell : to use a local development environment,
install and
initialize the gcloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
Required roles
To get the permissions that
you need to create keys,
ask your administrator to grant you the
following IAM roles on the project or a parent resource:
Cloud KMS Admin ( roles/cloudkms.admin )
To create single-tenant HSM keys:
Cloud KMS single-tenant HSM Key Creator ( roles/cloudkms.hsmSingleTenantKeyCreator )
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to create keys. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to create keys:
cloudkms.cryptoKeys.create
cloudkms.cryptoKeys.get
cloudkms.cryptoKeys.list
cloudkms.cryptoKeyVersions.create
cloudkms.cryptoKeyVersions.get
cloudkms.cryptoKeyVersions.list
cloudkms.keyRings.get
cloudkms.keyRings.list
cloudkms.locations.get
cloudkms.locations.list
resourcemanager.projects.get
To retrieve a public key:
cloudkms.cryptoKeyVersions.viewPublicKey
To create single-tenant HSM keys:
cloudkms.singleTenantHsmInstances.get
cloudkms.singleTenantHsmInstances.use
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Caution: The Cloud KMS Admin
role contains permissions for key
maintenance and key version destruction. To protect your Cloud KMS
resources, this role should only be assigned to individuals responsible for key
administration.
Create a symmetric encryption key
Console gcloud C# Go Java Node.js PHP Python Ruby API
More
In the Google Cloud console, go to the Key Management page.
Go to Key Management
Click the name of the key ring for which you will create a key.
Click Create key .
For Key name , enter a name for your key.
For Protection level , select Software , HSM , or
Single-tenant HSM .
If you selected Single-tenant HSM , then select the Single-tenant HSM
instance where you want to create the
key.
For Key material , select Generated key .
For Purpose , select Symmetric encrypt/decrypt .
Accept the default values for Rotation period and Starting on .
Click Create .
To use Cloud KMS on the command line, first
Install or upgrade to the latest version of Google Cloud CLI .
To create a software or Multi-tenant Cloud HSM key, use the kms keys create
command:
gcloud kms keys create KEY_NAME \
--keyring KEY_RING \
--location LOCATION \
--purpose "encryption" \
--protection-level " PROTECTION_LEVEL "
Replace the following:
KEY_NAME : the name of the key.
KEY_RING : the name of the key ring that contains the key.
LOCATION : the Cloud KMS location of the key ring.
PROTECTION_LEVEL : the protection level to use
for the key—for example, software or hsm . You can omit
the --protection-level flag for software
keys.
For information on all flags and possible values, run the command with the
--help flag.
To create a Single-tenant Cloud HSM key, add the
--crypto-key-backend flag to the kms keys create command:
gcloud kms keys create KEY_NAME \
--keyring KEY_RING \
--location LOCATION \
--purpose "encryption" \
--protection-level "hsm-single-tenant" \
--crypto-key-backend="projects/ INSTANCE_PROJECT /locations/ LOCATION /singleTenantHsmInstances/ INSTANCE_NAME "
Replace the following:
INSTANCE_PROJECT : the identifier of the project where
your Single-tenant Cloud HSM instance exists.
INSTANCE_NAME : the name of the Single-tenant Cloud HSM
instance where you want to create the key. For more information about
Single-tenant Cloud HSM instances, see
Create and manage a Single-tenant Cloud HSM
instance .
For information on all flags and possible values, run the command with the
--help flag.
To run this code, first set up a C# development environment and
install the Cloud KMS C# SDK .
using Google.Cloud.Kms.V1 ;
public class CreateKeySymmetricEncryptDecryptSample
{
public CryptoKey CreateKeySymmetricEncryptDecrypt (
string projectId = "my-project" , string locationId = "us-east1" , string keyRingId = "my-key-ring" ,
string id = "my-symmetric-encryption-key" )
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
// createKeySymmetricEncryptDecrypt creates a new symmetric encrypt/decrypt key
// on Cloud KMS.
func createKeySymmetricEncryptDecrypt ( w io . Writer , parent , id string ) error {
// parent := "projects/my-project/locations/us-east1/keyRings/my-key-ring"
// id := "my-symmetric-encryption-key"
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
public class CreateKeySymmetricEncryptDecrypt {
public void createKeySymmetricEncryptDecrypt () throws IOException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String locationId = "us-east1" ;
String keyRingId = "my-key-ring" ;
String id = "my-key" ;
createKeySymmetricEncryptDecrypt ( projectId , locationId , keyRingId , id );
}
// Create a new key that is used for symmetric encryption and decryption.
public void createKeySymmetricEncryptDecrypt (
String projectId , String locationId , String keyRingId , String id ) throws IOException {
// Initialize client that will be used to send requests. This client only
// needs to be created once, and can be reused for multiple requests. After
// completing all of your requests, call the "close" method on the client to
// safely clean up any remaining background resources.
try ( KeyManagementServiceClient client = KeyManagementServiceClient . create ()) {
// Build the parent name from the project, location, and key ring.
KeyRingName keyRingName = KeyRingName . of ( projectId , locationId , keyRingId );
// Build the symmetric key to create.
CryptoKey key =
CryptoKey . newBuilder ()
. setPurpose ( CryptoKeyPurpose . ENCRYPT_DECRYPT )
. setVersionTemplate (
CryptoKeyVersionTemplate . newBuilder ()
. setAlgorithm ( CryptoKeyVersionAlgorithm . GOOGLE_SYMMETRIC_ENCRYPTION ))
. build ();
// Create the key.
CryptoKey createdKey = client . createCryptoKey ( keyRingName , id , key );
System . out . printf ( "Created symmetric key %s%n" , createdKey . getName ());
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
// const id = 'my-symmetric-encryption-key';
// Imports the Cloud KMS library
const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' );
// Instantiates a client
const client = new KeyManagementServiceClient ();
// Build the parent key ring name
const keyRingName = client . keyRingPath ( projectId , locationId , keyRingId );
async function createKeySymmetricEncryptDecrypt () {
const [ key ] = await client . createCryptoKey ({
parent : keyRingName ,
cryptoKeyId : id ,
cryptoKey : {
purpose : 'ENCRYPT_DECRYPT' ,
versionTemplate : {
algorithm : 'GOOGLE_SYMMETRIC_ENCRYPTION' ,
},
},
});
console . log ( `Created symmetric key: ${ key . name } ` );
return key ;
}
return createKeySymmetricEncryptDecrypt ();
To run this code, first learn about using PHP on Google Cloud and
install the Cloud KMS PHP SDK .
use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient;
use Google\Cloud\Kms\V1\CreateCryptoKeyRequest;
use Google\Cloud\Kms\V1\CryptoKey;
use Google\Cloud\Kms\V1\CryptoKey\CryptoKeyPurpose;
use Google\Cloud\Kms\V1\CryptoKeyVersion\CryptoKeyVersionAlgorithm;
use Google\Cloud\Kms\V1\CryptoKeyVersionTemplate;
function create_key_symmetric_encrypt_decrypt(
string $projectId = 'my-project',
string $locationId = 'us-east1',
string $keyRingId = 'my-key-ring',
string $id = 'my-symmetric-key'
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
);
// Call the API.
$createCryptoKeyRequest = (new CreateCryptoKeyRequest())
->setParent($keyRingName)
->setCryptoKeyId($id)
->setCryptoKey($key);
$createdKey = $client->createCryptoKey($createCryptoKeyRequest);
printf('Created symmetric key: %s' . PHP_EOL, $createdKey->getName());
return $createdKey;
}
To run this code, first set up a Python development environment and
install the Cloud KMS Python SDK .
from google.cloud import kms
def create_key_symmetric_encrypt_decrypt (
project_id : str , location_id : str , key_ring_id : str , key_id : str
) - > kms . CryptoKey :
"""
Creates a new symmetric encryption/decryption key in Cloud KMS.
Args:
project_id (string): Google Cloud project ID (e.g. 'my-project').
location_id (string): Cloud KMS location (e.g. 'us-east1').
key_ring_id (string): ID of the Cloud KMS key ring (e.g. 'my-key-ring').
key_id (string): ID of the key to create (e.g. 'my-symmetric-key').
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
}
# Call the API.
created_key = client . create_crypto_key (
request = { "parent" : key_ring_name , "crypto_key_id" : key_id , "crypto_key" : key }
)
print ( f "Created symmetric key: { created_key . name } " )
return created_key
To run this code, first set up a Ruby development environment and
install the Cloud KMS Ruby SDK .
# TODO(developer): uncomment these values before running the sample.
# project_id = "my-project"
# location_id = "us-east1"
# key_ring_id = "my-key-ring"
# id = "my-symmetric-key"
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
}
}
# Call the API.
created_key = client . create_crypto_key parent : key_ring_name , crypto_key_id : id , crypto_key : key
puts "Created symmetric key: #{ created_key . name } "
These examples use curl as an HTTP client
to demonstrate using the API. For more information about access control, see
Accessing the Cloud KMS API .
To create a software or Multi-tenant Cloud HSM key, use the
CryptoKey.create
method:
curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING /cryptoKeys?crypto_key_id= KEY_NAME " \
--request "POST" \
--header "authorization: Bearer TOKEN " \
--header "content-type: application/json" \
--data '{"purpose": "ENCRYPT_DECRYPT", "versionTemplate": { "protectionLevel": " PROTECTION_LEVEL ", "algorithm": " ALGORITHM " }}'
Replace the following:
PROJECT_ID : the ID of the project that contains the key ring.
LOCATION : the Cloud KMS location of the key ring.
KEY_RING : the name of the key ring that contains the key.
KEY_NAME : the name of the key.
PROTECTION_LEVEL : the protection level of the
key—for example, SOFTWARE or HSM .
ALGORITHM : the HMAC signing algorithm—for example,
HMAC_SHA256 . To see all supported HMAC algorithms, see HMAC signing
algorithms .
To create a Single-tenant Cloud HSM key, set PROTECTION_LEVEL to
HSM_SINGLE_TENANT and add the --crypto-key-backend flag to the
kms keys create command:
curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING /cryptoKeys?crypto_key_id= KEY_NAME " \
--request "POST" \
--header "authorization: Bearer TOKEN " \
--header "content-type: application/json" \
--data '{"purpose": "ENCRYPT_DECRYPT", "versionTemplate": { "protectionLevel": "HSM_SINGLE_TENANT",
"algorithm": " ALGORITHM ",
"crypto-key-backend": "projects/ INSTANCE_PROJECT /locations/ LOCATION /singleTenantHsmInstances/ INSTANCE_NAME " }}'
Replace the following:
INSTANCE_PROJECT : the identifier of the project where
your Single-tenant Cloud HSM instance exists.
INSTANCE_NAME : the name of the Single-tenant Cloud HSM
instance where you want to create the key. For more information about
Single-tenant Cloud HSM instances, see
Create and manage a Single-tenant Cloud HSM
instance .
For information on all flags and possible values, run the command with the
--help flag.
Create a symmetric encryption key with custom automatic rotation
When you create a key, you can specify its rotation
period , which is the time between the automatic creation of
new key versions. You can also independently specify the next rotation time,
so that the next rotation happens earlier or later than one rotation period from
now.
Console gcloud C# Go Java Node.js PHP Python Ruby API
More
When you use the Google Cloud console to create a key, Cloud KMS sets the
rotation period and next rotation time automatically. You can choose to use
the default values or specify different values.
To specify a different rotation period and starting time, when you're creating
your key , but before you click
the Create button:
For Key rotation period , select an option.
For Starting on , select the date when you want the first automatic
rotation to happen. You can leave Starting on at its default value to
start the first automatic rotation one key rotation period from when you
create the key.
To use Cloud KMS on the command line, first
Install or upgrade to the latest version of Google Cloud CLI .
gcloud kms keys create KEY_NAME \
--keyring KEY_RING \
--location LOCATION \
--purpose "encryption" \
--rotation-period ROTATION_PERIOD \
--next-rotation-time NEXT_ROTATION_TIME
Replace the following:
KEY_NAME : the name of the key.
KEY_RING : the name of the key ring that contains the key.
LOCATION : the Cloud KMS location of the key ring.
ROTATION_PERIOD : the interval to
rotate the key—for example, 30d to rotate the key every 30 days. The rotation
period must be at least 1 day and at most 100 years. For more information, see
CryptoKey.rotationPeriod .
NEXT_ROTATION_TIME : the timestamp at which to complete the first
rotation—for example, 2023-01-01T01:02:03 . You can omit
--next-rotation-time to schedule the first rotation for one rotation
period from when you run the command. For more information, see
CryptoKey.nextRotationTime .
For information on all flags and possible values, run the command with the
--help flag.
To run this code, first set up a C# development environment and
install the Cloud KMS C# SDK .
using Google.Cloud.Kms.V1 ;
using Google.Protobuf.WellKnownTypes ;
using System ;
public class CreateKeyRotationScheduleSample
{
public CryptoKey CreateKeyRotationSchedule (
string projectId = "my-project" , string locationId = "us-east1" , string keyRingId = "my-key-ring" ,
string id = "my-key-with-rotation-schedule" )
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
},
// Rotate the key every 30 days.
RotationPeriod = new Duration
{
Seconds = 60 * 60 * 24 * 30 , // 30 days
},
// Start the first rotation in 24 hours.
NextRotationTime = new Timestamp
{
Seconds = new DateTimeOffset ( DateTime . UtcNow . AddHours ( 24 )). ToUnixTimeSeconds (),
}
};
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
"time"
kms "cloud.google.com/go/kms/apiv1"
"cloud.google.com/go/kms/apiv1/kmspb"
"google.golang.org/protobuf/types/known/durationpb"
"google.golang.org/protobuf/types/known/timestamppb"
)
// createKeyRotationSchedule creates a key with a rotation schedule.
func createKeyRotationSchedule ( w io . Writer , parent , id string ) error {
// name := "projects/my-project/locations/us-east1/keyRings/my-key-ring"
// id := "my-key-with-rotation-schedule"
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
// Rotate the key every 30 days
RotationSchedule : & kmspb . CryptoKey_RotationPeriod {
RotationPeriod : & durationpb . Duration {
Seconds : int64 ( 60 * 60 * 24 * 30 ), // 30 days
},
},
// Start the first rotation in 24 hours
NextRotationTime : & timestamppb . Timestamp {
Seconds : time . Now (). Add ( 24 * time . Hour ). Unix (),
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
import com.google.protobuf. Duration ;
import com.google.protobuf. Timestamp ;
import java.io.IOException ;
import java.time.temporal.ChronoUnit ;
public class CreateKeyRotationSchedule {
public void createKeyRotationSchedule () throws IOException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String locationId = "us-east1" ;
String keyRingId = "my-key-ring" ;
String id = "my-key" ;
createKeyRotationSchedule ( projectId , locationId , keyRingId , id );
}
// Create a new key that automatically rotates on a schedule.
public void createKeyRotationSchedule (
String projectId , String locationId , String keyRingId , String id ) throws IOException {
// Initialize client that will be used to send requests. This client only
// needs to be created once, and can be reused for multiple requests. After
// completing all of your requests, call the "close" method on the client to
// safely clean up any remaining background resources.
try ( KeyManagementServiceClient client = KeyManagementServiceClient . create ()) {
// Build the parent name from the project, location, and key ring.
KeyRingName keyRingName = KeyRingName . of ( projectId , locationId , keyRingId );
// Calculate the date 24 hours from now (this is used below).
long tomorrow = java . time . Instant . now (). plus ( 24 , ChronoUnit . HOURS ). getEpochSecond ();
// Build the key to create with a rotation schedule.
CryptoKey key =
CryptoKey . newBuilder ()
. setPurpose ( CryptoKeyPurpose . ENCRYPT_DECRYPT )
. setVersionTemplate (
CryptoKeyVersionTemplate . newBuilder ()
. setAlgorithm ( CryptoKeyVersionAlgorithm . GOOGLE_SYMMETRIC_ENCRYPTION ))
// Rotate every 30 days.
. setRotationPeriod (
Duration . newBuilder (). setSeconds ( java . time . Duration . ofDays ( 30 ). getSeconds ()))
// Start the first rotation in 24 hours.
. setNextRotationTime ( Timestamp . newBuilder (). setSeconds ( tomorrow ))
. build ();
// Create the key.
CryptoKey createdKey = client . createCryptoKey ( keyRingName , id , key );
System . out . printf ( "Created key with rotation schedule %s%n" , createdKey . getName ());
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
// const id = 'my-rotating-encryption-key';
// Imports the Cloud KMS library
const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' );
// Instantiates a client
const client = new KeyManagementServiceClient ();
// Build the parent key ring name
const keyRingName = client . keyRingPath ( projectId , locationId , keyRingId );
async function createKeyRotationSchedule () {
const [ key ] = await client . createCryptoKey ({
parent : keyRingName ,
cryptoKeyId : id ,
cryptoKey : {
purpose : 'ENCRYPT_DECRYPT' ,
versionTemplate : {
algorithm : 'GOOGLE_SYMMETRIC_ENCRYPTION' ,
},
// Rotate the key every 30 days.
rotationPeriod : {
seconds : 60 * 60 * 24 * 30 ,
},
// Start the first rotation in 24 hours.
nextRotationTime : {
seconds : new Date (). getTime () / 1000 + 60 * 60 * 24 ,
},
},
});
console . log ( `Created rotating key: ${ key . name } ` );
return key ;
}
return createKeyRotationSchedule ();
To run this code, first learn about using PHP on Google Cloud and
install the Cloud KMS PHP SDK .
use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient;
use Google\Cloud\Kms\V1\CreateCryptoKeyRequest;
use Google\Cloud\Kms\V1\CryptoKey;
use Google\Cloud\Kms\V1\CryptoKey\CryptoKeyPurpose;
use Google\Cloud\Kms\V1\CryptoKeyVersion\CryptoKeyVersionAlgorithm;
use Google\Cloud\Kms\V1\CryptoKeyVersionTemplate;
use Google\Protobuf\Duration;
use Google\Protobuf\Timestamp;
function create_key_rotation_schedule(
string $projectId = 'my-project',
string $locationId = 'us-east1',
string $keyRingId = 'my-key-ring',
string $id = 'my-key-with-rotation-schedule'
): CryptoKey {
// Create the Cloud KMS client.
$client = new KeyManagementServiceClient();
// Build the parent key ring name.
$keyRingName = $client->keyRingName($projectId, $locationId, $keyRingId);
// Build the key.
$key = (new CryptoKey())
->setPurpose(CryptoKeyPurpose::ENCRYPT_DECRYPT)
->setVersionTemplate((new CryptoKeyVersionTemplate())
->setAlgorithm(CryptoKeyVersionAlgorithm::GOOGLE_SYMMETRIC_ENCRYPTION))
// Rotate the key every 30 days.
->setRotationPeriod((new Duration())
->setSeconds(60 * 60 * 24 * 30)
)
// Start the first rotation in 24 hours.
->setNextRotationTime((new Timestamp())
->setSeconds(time() + 60 * 60 * 24)
);
// Call the API.
$createCryptoKeyRequest = (new CreateCryptoKeyRequest())
->setParent($keyRingName)
->setCryptoKeyId($id)
->setCryptoKey($key);
$createdKey = $client->createCryptoKey($createCryptoKeyRequest);
printf('Created key with rotation: %s' . PHP_EOL, $createdKey->getName());
return $createdKey;
}
To run this code, first set up a Python development environment and
install the Cloud KMS Python SDK .
import time
from google.cloud import kms
def create_key_rotation_schedule (
project_id : str , location_id : str , key_ring_id : str , key_id : str
) - > kms . CryptoKey :
"""
Creates a new key in Cloud KMS that automatically rotates.
Args:
project_id (string): Google Cloud project ID (e.g. 'my-project').
location_id (string): Cloud KMS location (e.g. 'us-east1').
key_ring_id (string): ID of the Cloud KMS key ring (e.g. 'my-key-ring').
key_id (string): ID of the key to create (e.g. 'my-rotating-key').
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
# Rotate the key every 30 days.
"rotation_period" : { "seconds" : 60 * 60 * 24 * 30 },
# Start the first rotation in 24 hours.
"next_rotation_time" : { "seconds" : int ( time . time ()) + 60 * 60 * 24 },
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
# id = "my-key-with-rotation"
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
# Rotate the key every 30 days.
rotation_period : {
seconds : 60 * 60 * 24 * 30
},
# Start the first rotation in 24 hours.
next_rotation_time : {
seconds : ( Time . now + ( 60 * 60 * 24 )) . to_i
}
}
# Call the API.
created_key = client . create_crypto_key parent : key_ring_name , crypto_key_id : id , crypto_key : key
puts "Created rotating key: #{ created_key . name } "
These examples use curl as an HTTP client
to demonstrate using the API. For more information about access control, see
Accessing the Cloud KMS API .
To create a key, use the
CryptoKey.create
method:
curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING /cryptoKeys?crypto_key_id= KEY_NAME " \
--request "POST" \
--header "authorization: Bearer TOKEN " \
--header "content-type: application/json" \
--data '{"purpose": " PURPOSE ", "rotationPeriod": " ROTATION_PERIOD ", "nextRotationTime": " NEXT_ROTATION_TIME "}'
Replace the following:
PURPOSE : the
purpose
of the key.
ROTATION_PERIOD : the interval to
rotate the key—for example, 30d to rotate the key every 30 days. The rotation
period must be at least 1 day and at most 100 years. For more information, see
CryptoKey.rotationPeriod .
NEXT_ROTATION_TIME : the timestamp at which to complete the first
rotation—for example, 2023-01-01T01:02:03 . For more information, see
CryptoKey.nextRotationTime .
Set the duration of the 'scheduled for destruction' state
By default, key versions in Cloud KMS spend
30 days in the scheduled for destruction
( DESTROY_SCHEDULED ) state before they are
destroyed. The scheduled for destruction state is sometimes called the
soft deleted state . The duration for which key versions remain in this state
is configurable, with the following constraints:
You can only set the duration during key creation.
After the duration for the key has been specified, it can't be changed.
The duration applies to all versions of the key created in the future.
The minimum duration is 24 hours for all keys, except for import-only keys
which have a minimum duration of 0.
The maximum duration is 120 days.
The default duration is 30 days.
Your organization might have a minimum scheduled for destruction duration
value defined by organization policies. For more information, see Control
key destruction .
To create a key which uses a custom duration for the scheduled for destruction
state, use the following steps:
Console gcloud
More
In the Google Cloud console, go to the Key Management page.
Go to Key Management
Click the name of the key ring for which you will create a key.
Click Create key .
Configure the settings of the key for your application.
Click Additional settings .
In Duration of 'scheduled for destruction' state , choose the number of
days the key will remain scheduled for destruction before being
permanently destroyed.
Click Create key .
To use Cloud KMS on the command line, first
Install or upgrade to the latest version of Google Cloud CLI .
gcloud kms keys create KEY_NAME \
--keyring KEY_RING \
--location LOCATION \
--purpose PURPOSE \
--destroy-scheduled-duration DURATION
Replace the following:
KEY_NAME : the name of the key.
KEY_RING : the name of the key ring that contains the key.
LOCATION : the Cloud KMS location of the key ring.
PURPOSE : the purpose of the key—for example,
encryption .
DURATION : the amount of time for the key to remain in the
scheduled for destruction state before being permanently destroyed.
For information on all flags and possible values, run the command with the
--help flag.
We recommend using the default duration of 30 days
for all keys unless you have specific application or regulatory requirements
that require a different value.
Create an asymmetric key
The following sections show you how to create asymmetric keys.
Note: A key created with a post-quantum (PQC) ( Preview ) default algorithm
can't be updated later to a non-PQC algorithm, and a key created with a
non-PQC default algorithm can't be updated later to a PQC algorithm.
Create an asymmetric decryption key
Follow these steps to create an asymmetric decryption key on the specified key
ring and location. These examples can be adapted to specify a different
protection level or algorithm. For more information and alternative values, see
Algorithms and Protection levels .
When you first create the key, the initial key version has a state of
Pending generation . When the state changes to Enabled , you can use
the key. To learn more about key version states, see Key version
states .
Console gcloud C# Go Java Node.js PHP Python Ruby API
More
In the Google Cloud console, go to the Key Management page.
Go to Key Management
Click the name of the key ring for which you will create a key.
Click Create key .
For Key name , enter a name for your key.
For Protection level , select Software , HSM , or
Single-tenant HSM .
If you selected Single-tenant HSM , then select the Single-tenant HSM
instance where you want to create the
key.
For Key material , select Generated key .
For Purpose , select Asymmetric decrypt .
For Algorithm , select 3072 bit RSA - OAEP Padding - SHA256 Digest .
You can change this value on future key versions.
Click Create .
To use Cloud KMS on the command line, first
Install or upgrade to the latest version of Google Cloud CLI .
gcloud kms keys create KEY_NAME \
--keyring KEY_RING \
--location LOCATION \
--purpose "asymmetric-encryption" \
--default-algorithm " ALGORITHM " \
--protection-level " PROTECTION_LEVEL "
Replace the following:
KEY_NAME : the name of the key.
KEY_RING : the name of the key ring that contains the key.
LOCATION : the Cloud KMS location of the key ring.
ALGORITHM : the algorithm to use for the key—for
example, rsa-decrypt-oaep-3072-sha256 . For a list of supported asymmetric
encryption algorithms, see Asymmetric encryption
algorithms .
PROTECTION_LEVEL : the protection level that you want to use for
the key.
If you want to create the key in a Single-tenant Cloud HSM instance, use the
hsm-single-tenant protection level, add the --cryptoKeyBackend flag, and
specify the resource identifier of the Single-tenant Cloud HSM instance where
you want to create the key:
--crypto-key-backend "projects/ INSTANCE_PROJECT /locations/ LOCATION /singleTenantHsmInstances/ INSTANCE_NAME "
For information on all flags and possible values, run the command with the
`--help` flag.
To run this code, first set up a C# development environment and
install the Cloud KMS C# SDK .
using Google.Cloud.Kms.V1 ;
using Google.Protobuf.WellKnownTypes ;
public class CreateKeyAsymmetricDecryptSample
{
public CryptoKey CreateKeyAsymmetricDecrypt (
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
Purpose = CryptoKey . Types . CryptoKeyPurpose . AsymmetricDecrypt ,
VersionTemplate = new CryptoKeyVersionTemplate
{
Algorithm = CryptoKeyVersion . Types . CryptoKeyVersionAlgorithm . RsaDecryptOaep2048Sha256 ,
},
// Optional: customize how long key versions should be kept before destroying.
DestroyScheduledDuration = new Duration
{
Seconds = 24 * 60 * 60 ,
}
};
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
"time"
kms "cloud.google.com/go/kms/apiv1"
"cloud.google.com/go/kms/apiv1/kmspb"
"google.golang.org/protobuf/types/known/durationpb"
)
// createKeyAsymmetricDecrypt creates a new asymmetric RSA encrypt/decrypt key
// pair where the private key is stored in Cloud KMS.
func createKeyAsymmetricDecrypt ( w io . Writer , parent , id string ) error {
// parent := "projects/my-project/locations/us-east1/keyRings/my-key-ring"
// id := "my-asymmetric-encryption-key"
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
Purpose : kmspb . CryptoKey_ASYMMETRIC_DECRYPT ,
VersionTemplate : & kmspb . CryptoKeyVersionTemplate {
Algorithm : kmspb . CryptoKeyVersion_RSA_DECRYPT_OAEP_2048_SHA256 ,
},
// Optional: customize how long key versions should be kept before destroying.
DestroyScheduledDuration : durationpb . New ( 24 * time . Hour ),
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
import com.google.protobuf. Duration ;
import java.io.IOException ;
public class CreateKeyAsymmetricDecrypt {
public void createKeyAsymmetricDecrypt () throws IOException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String locationId = "us-east1" ;
String keyRingId = "my-key-ring" ;
String id = "my-asymmetric-decryption-key" ;
createKeyAsymmetricDecrypt ( projectId , locationId , keyRingId , id );
}
// Create a new asymmetric key for the purpose of encrypting and decrypting
// data.
public void createKeyAsymmetricDecrypt (
String projectId , String locationId , String keyRingId , String id ) throws IOException {
// Initialize client that will be used to send requests. This client only
// needs to be created once, and can be reused for multiple requests. After
// completing all of your requests, call the "close" method on the client to
// safely clean up any remaining background resources.
try ( KeyManagementServiceClient client = KeyManagementServiceClient . create ()) {
// Build the parent name from the project, location, and key ring.
KeyRingName keyRingName = KeyRingName . of ( projectId , locationId , keyRingId );
// Build the asymmetric key to create.
CryptoKey key =
CryptoKey . newBuilder ()
. setPurpose ( CryptoKeyPurpose . ASYMMETRIC_DECRYPT )
. setVersionTemplate (
CryptoKeyVersionTemplate . newBuilder ()
. setAlgorithm ( CryptoKeyVersionAlgorithm . RSA_DECRYPT_OAEP_2048_SHA256 ))
// Optional: customize how long key versions should be kept before destroying.
. setDestroyScheduledDuration ( Duration . newBuilder (). setSeconds ( 24 * 60 * 60 ))
. build ();
// Create the key.
CryptoKey createdKey = client . createCryptoKey ( keyRingName , id , key );
System . out . printf ( "Created asymmetric key %s%n" , createdKey . getName ());
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
// const id = 'my-asymmetric-decrypt-key';
// Imports the Cloud KMS library
const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' );
// Instantiates a client
const client = new KeyManagementServiceClient ();
// Build the parent key ring name
const keyRingName = client . keyRingPath ( projectId , locationId , keyRingId );
async function createKeyAsymmetricDecrypt () {
const [ key ] = await client . createCryptoKey ({
parent : keyRingName ,
cryptoKeyId : id ,
cryptoKey : {
purpose : 'ASYMMETRIC_DECRYPT' ,
versionTemplate : {
algorithm : 'RSA_DECRYPT_OAEP_2048_SHA256' ,
},
// Optional: customize how long key versions should be kept before
// destroying.
destroyScheduledDuration : { seconds : 60 * 60 * 24 },
},
});
console . log ( `Created asymmetric key: ${ key . name } ` );
return key ;
}
return createKeyAsymmetricDecrypt ();
To run this code, first learn about using PHP on Google Cloud and
install the Cloud KMS PHP SDK .
use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient;
use Google\Cloud\Kms\V1\CreateCryptoKeyRequest;
use Google\Cloud\Kms\V1\CryptoKey;
use Google\Cloud\Kms\V1\CryptoKey\CryptoKeyPurpose;
use Google\Cloud\Kms\V1\CryptoKeyVersion\CryptoKeyVersionAlgorithm;
use Google\Cloud\Kms\V1\CryptoKeyVersionTemplate;
use Google\Protobuf\Duration;
function create_key_asymmetric_decrypt(
string $projectId = 'my-project',
string $locationId = 'us-east1',
string $keyRingId = 'my-key-ring',
string $id = 'my-asymmetric-decrypt-key'
): CryptoKey {
// Create the Cloud KMS client.
$client = new KeyManagementServiceClient();
// Build the parent key ring name.
$keyRingName = $client->keyRingName($projectId, $locationId, $keyRingId);
// Build the key.
$key = (new CryptoKey())
->setPurpose(CryptoKeyPurpose::ASYMMETRIC_DECRYPT)
->setVersionTemplate((new CryptoKeyVersionTemplate())
->setAlgorithm(CryptoKeyVersionAlgorithm::RSA_DECRYPT_OAEP_2048_SHA256)
)
// Optional: customize how long key versions should be kept before destroying.
->setDestroyScheduledDuration((new Duration())
->setSeconds(24 * 60 * 60)
);
// Call the API.
$createCryptoKeyRequest = (new CreateCryptoKeyRequest())
->setParent($keyRingName)
->setCryptoKeyId($id)
->setCryptoKey($key);
$createdKey = $client->createCryptoKey($createCryptoKeyRequest);
printf('Created asymmetric decryption key: %s' . PHP_EOL, $createdKey->getName());
return $createdKey;
}
To run this code, first set up a Python development environment and
install the Cloud KMS Python SDK .
import datetime
# Import the client library.
from google.cloud import kms
from google.protobuf import duration_pb2 # type: ignore
def create_key_asymmetric_decrypt (
project_id : str , location_id : str , key_ring_id : str , key_id : str
) - > kms . CryptoKey :
"""
Creates a new asymmetric decryption key in Cloud KMS.
Args:
project_id (string): Google Cloud project ID (e.g. 'my-project').
location_id (string): Cloud KMS location (e.g. 'us-east1').
key_ring_id (string): ID of the Cloud KMS key ring (e.g. 'my-key-ring').
key_id (string): ID of the key to create (e.g. 'my-asymmetric-decrypt-key').
Returns:
CryptoKey: Cloud KMS key.
"""
# Create the client.
client = kms . KeyManagementServiceClient ()
# Build the parent key ring name.
key_ring_name = client . key_ring_path ( project_id , location_id , key_ring_id )
# Build the key.
purpose = kms . CryptoKey . CryptoKeyPurpose . ASYMMETRIC_DECRYPT
algorithm = (
kms . CryptoKeyVersion . CryptoKeyVersionAlgorithm . RSA_DECRYPT_OAEP_2048_SHA256
)
key = {
"purpose" : purpose ,
"version_template" : {
"algorithm" : algorithm ,
},
# Optional: customize how long key versions should be kept before
# destroying.
"destroy_scheduled_duration" : duration_pb2 . Duration () . FromTimedelta (
datetime . timedelta ( days = 1 )
),
}
# Call the API.
created_key = client . create_crypto_key (
request = { "parent" : key_ring_name , "crypto_key_id" : key_id , "crypto_key" : key }
)
print ( f "Created asymmetric decrypt key: { created_key . name } " )
return created_key
To run this code, first set up a Ruby development environment and
install the Cloud KMS Ruby SDK .
# TODO(developer): uncomment these values before running the sample.
# project_id = "my-project"
# location_id = "us-east1"
# key_ring_id = "my-key-ring"
# id = "my-asymmetric-decrypt-key"
# Require the library.
require "google/cloud/kms"
# Create the client.
client = Google :: Cloud :: Kms . key_management_service
# Build the parent key ring name.
key_ring_name = client . key_ring_path project : project_id , location : location_id , key_ring : key_ring_id
# Build the key.
key = {
purpose : :ASYMMETRIC_DECRYPT ,
version_template : {
algorithm : :RSA_DECRYPT_OAEP_2048_SHA256
},
# Optional: customize how long key versions should be kept before destroying.
destroy_scheduled_duration : {
seconds : 24 * 60 * 60
}
}
# Call the API.
created_key = client . create_crypto_key parent : key_ring_name , crypto_key_id : id , crypto_key : key
puts "Created asymmetric decryption key: #{ created_key . name } "
These examples use curl as an HTTP client
to demonstrate using the API. For more information about access control, see
Accessing the Cloud KMS API .
Create an asymmetric decryption key using the
CryptoKey.create method.
curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING /cryptoKeys?crypto_key_id= KEY_NAME " \
--request "POST" \
--header "authorization: Bearer TOKEN " \
--header "content-type: application/json" \
--data '{"purpose": "ASYMMETRIC_DECRYPT", "protectionLevel": " PROTECTION_LEVEL ", "versionTemplate": {"algorithm": " ALGORITHM "}}'
Replace the following:
PROJECT_ID : the ID of the project that contains the key ring.
LOCATION : the Cloud KMS location of the key ring.
KEY_RING : the name of the key ring that contains the key.
KEY_NAME : the name of the key.
ALGORITHM : the algorithm to use for
the key—for example, RSA_DECRYPT_OAEP_3072_SHA256 . For a list of
supported asymmetric encryption algorithms, see Asymmetric encryption
algorithms .
PROTECTION_LEVEL : the protection level that you want to use for
the key.
If you want to create your key in a Single-tenant Cloud HSM, set
PROTECTION_LEVEL to HSM_SINGLE_TENANT and add the
cryptoKeyBackend field to the body of the command with the resource
identifier of the Single-tenant Cloud HSM instance where you want to
import the key:
"cryptoKeyBackend": "projects/ INSTANCE_PROJECT /locations/ LOCATION /singleTenantHsmInstances/ INSTANCE_NAME "
Create an asymmetric signing key
Follow these steps to create an asymmetric signing key on the specified key ring
and location. These examples can be adapted to specify a different
protection level or algorithm. For more information and alternative values, see
Algorithms and Protection levels .
When you first create the key, the initial key version has a state of
Pending generation . When the state changes to Enabled , you can use
the key. To learn more about key version states, see Key version
states .
Console gcloud C# Go Java Node.js PHP Python Ruby API
More
In the Google Cloud console, go to the Key Management page.
Go to Key Management
Click the name of the key ring for which you will create a key.
Click Create key .
For Key name , enter a name for your key.
For Protection level , select Software , HSM , or
Single-tenant HSM .
If you selected Single-tenant HSM , then select the Single-tenant HSM
instance where you want to create the
key.
For Key material , select Generated key .
For Purpose , select Asymmetric sign .
For Algorithm , select Elliptic Curve P-256 - SHA256 Digest . You can
change this value on future key versions.
Click Create .
To use Cloud KMS on the command line, first
Install or upgrade to the latest version of Google Cloud CLI .
gcloud kms keys create KEY_NAME \
--keyring KEY_RING \
--location LOCATION \
--purpose "asymmetric-signing" \
--default-algorithm " ALGORITHM " \
--protection-level " PROTECTION_LEVEL "
Replace the following:
KEY_NAME : the name of the key.
KEY_RING : the name of the key ring that contains the key.
LOCATION : the Cloud KMS location of the key ring.
ALGORITHM : the algorithm to use for the key—for example,
ec-sign-p256-sha256 . For a list of supported algorithms, see Asymmetric
signing algorithms .
PROTECTION_LEVEL : the protection level that you want to use for
the key.
If you want to create the key in a Single-tenant Cloud HSM instance, set
PROTECTION_LEVEL to hsm-single-tenant and add the
--cryptoKeyBackend flag to specify the resource identifier of the
Single-tenant Cloud HSM instance where you want to create the key:
--crypto-key-backend "projects/ INSTANCE_PROJECT /locations/ LOCATION /singleTenantHsmInstances/ INSTANCE_NAME "
For information on all flags and possible values, run the command with the
`--help` flag.
To run this code, first set up a C# development environment and
install the Cloud KMS C# SDK .
using Google.Cloud.Kms.V1 ;
using Google.Protobuf.WellKnownTypes ;
public class CreateKeyAsymmetricSignSample
{
public CryptoKey CreateKeyAsymmetricSign (
string projectId = "my-project" , string locationId = "us-east1" , string keyRingId = "my-key-ring" ,
string id = "my-asymmetric-signing-key" )
{
// Create the client.
KeyManagementServiceClient client = KeyManagementServiceClient . Create ();
// Build the parent key ring name.
KeyRingName keyRingName = new KeyRingName ( projectId , locationId , keyRingId );
// Build the key.
CryptoKey key = new CryptoKey
{
Purpose = CryptoKey . Types . CryptoKeyPurpose . AsymmetricSign ,
VersionTemplate = new CryptoKeyVersionTemplate
{
Algorithm = CryptoKeyVersion . Types . CryptoKeyVersionAlgorithm . RsaSignPkcs12048Sha256 ,
},
// Optional: customize how long key versions should be kept before destroying.
DestroyScheduledDuration = new Duration
{
Seconds = 24 * 60 * 60 ,
}
};
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
"time"
kms "cloud.google.com/go/kms/apiv1"
"cloud.google.com/go/kms/apiv1/kmspb"
"google.golang.org/protobuf/types/known/durationpb"
)
// createKeyAsymmetricSign creates a new asymmetric RSA sign/verify key pair
// where the private key is stored in Cloud KMS.
func createKeyAsymmetricSign ( w io . Writer , parent , id string ) error {
// parent := "projects/my-project/locations/us-east1/keyRings/my-key-ring"
// id := "my-asymmetric-signing-key"
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
Purpose : kmspb . CryptoKey_ASYMMETRIC_SIGN ,
VersionTemplate : & kmspb . CryptoKeyVersionTemplate {
Algorithm : kmspb . CryptoKeyVersion_RSA_SIGN_PKCS1_2048_SHA256 ,
},
// Optional: customize how long key versions should be kept before destroying.
DestroyScheduledDuration : durationpb . New ( 24 * time . Hour ),
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
import com.google.protobuf. Duration ;
import java.io.IOException ;
public class CreateKeyAsymmetricSign {
public void createKeyAsymmetricSign () throws IOException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String locationId = "us-east1" ;
String keyRingId = "my-key-ring" ;
String id = "my-asymmetric-signing-key" ;
createKeyAsymmetricSign ( projectId , locationId , keyRingId , id );
}
// Create a new asymmetric key for the purpose of signing and verifying data.
public void createKeyAsymmetricSign (
String projectId , String locationId , String keyRingId , String id ) throws IOException {
// Initialize client that will be used to send requests. This client only
// needs to be created once, and can be reused for multiple requests. After
// completing all of your requests, call the "close" method on the client to
// safely clean up any remaining background resources.
try ( KeyManagementServiceClient client = KeyManagementServiceClient . create ()) {
// Build the parent name from the project, location, and key ring.
KeyRingName keyRingName = KeyRingName . of ( projectId , locationId , keyRingId );
// Build the asymmetric key to create.
CryptoKey key =
CryptoKey . newBuilder ()
. setPurpose ( CryptoKeyPurpose . ASYMMETRIC_SIGN )
. setVersionTemplate (
CryptoKeyVersionTemplate . newBuilder ()
. setAlgorithm ( CryptoKeyVersionAlgorithm . RSA_SIGN_PKCS1_2048_SHA256 ))
// Optional: customize how long key versions should be kept before destroying.
. setDestroyScheduledDuration ( Duration . newBuilder (). setSeconds ( 24 * 60 * 60 ))
. build ();
// Create the key.
CryptoKey createdKey = client . createCryptoKey ( keyRingName , id , key );
System . out . printf ( "Created asymmetric key %s%n" , createdKey . getName ());
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
// const id = 'my-asymmetric-sign-key';
// Imports the Cloud KMS library
const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' );
// Instantiates a client
const client = new KeyManagementServiceClient ();
// Build the parent key ring name
const keyRingName = client . keyRingPath ( projectId , locationId , keyRingId );
async function createKeyAsymmetricSign () {
const [ key ] = await client . createCryptoKey ({
parent : keyRingName ,
cryptoKeyId : id ,
cryptoKey : {
purpose : 'ASYMMETRIC_SIGN' ,
versionTemplate : {
algorithm : 'RSA_SIGN_PKCS1_2048_SHA256' ,
},
// Optional: customize how long key versions should be kept before
// destroying.
destroyScheduledDuration : { seconds : 60 * 60 * 24 },
},
});
console . log ( `Created asymmetric key: ${ key . name } ` );
return key ;
}
return createKeyAsymmetricSign ();
To run this code, first learn about using PHP on Google Cloud and
install the Cloud KMS PHP SDK .
use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient;
use Google\Cloud\Kms\V1\CreateCryptoKeyRequest;
use Google\Cloud\Kms\V1\CryptoKey;
use Google\Cloud\Kms\V1\CryptoKey\CryptoKeyPurpose;
use Google\Cloud\Kms\V1\CryptoKeyVersion\CryptoKeyVersionAlgorithm;
use Google\Cloud\Kms\V1\CryptoKeyVersionTemplate;
use Google\Protobuf\Duration;
function create_key_asymmetric_sign(
string $projectId = 'my-project',
string $locationId = 'us-east1',
string $keyRingId = 'my-key-ring',
string $id = 'my-asymmetric-signing-key'
): CryptoKey {
// Create the Cloud KMS client.
$client = new KeyManagementServiceClient();
// Build the parent key ring name.
$keyRingName = $client->keyRingName($projectId, $locationId, $keyRingId);
// Build the key.
$key = (new CryptoKey())
->setPurpose(CryptoKeyPurpose::ASYMMETRIC_SIGN)
->setVersionTemplate((new CryptoKeyVersionTemplate())
->setAlgorithm(CryptoKeyVersionAlgorithm::RSA_SIGN_PKCS1_2048_SHA256)
)
// Optional: customize how long key versions should be kept before destroying.
->setDestroyScheduledDuration((new Duration())
->setSeconds(24 * 60 * 60)
);
// Call the API.
$createCryptoKeyRequest = (new CreateCryptoKeyRequest())
->setParent($keyRingName)
->setCryptoKeyId($id)
->setCryptoKey($key);
$createdKey = $client->createCryptoKey($createCryptoKeyRequest);
printf('Created asymmetric signing key: %s' . PHP_EOL, $createdKey->getName());
return $createdKey;
}
To run this code, first set up a Python development environment and
install the Cloud KMS Python SDK .
import datetime
# Import the client library.
from google.cloud import kms
from google.protobuf import duration_pb2 # type: ignore
def create_key_asymmetric_sign (
project_id : str , location_id : str , key_ring_id : str , key_id : str
) - > kms . CryptoKey :
"""
Creates a new asymmetric signing key in Cloud KMS.
Args:
project_id (string): Google Cloud project ID (e.g. 'my-project').
location_id (string): Cloud KMS location (e.g. 'us-east1').
key_ring_id (string): ID of the Cloud KMS key ring (e.g. 'my-key-ring').
key_id (string): ID of the key to create (e.g. 'my-asymmetric-signing-key').
Returns:
CryptoKey: Cloud KMS key.
"""
# Create the client.
client = kms . KeyManagementServiceClient ()
# Build the parent key ring name.
key_ring_name = client . key_ring_path ( project_id , location_id , key_ring_id )
# Build the key.
purpose = kms . CryptoKey . CryptoKeyPurpose . ASYMMETRIC_SIGN
algorithm = (
kms . CryptoKeyVersion . CryptoKeyVersionAlgorithm . RSA_SIGN_PKCS1_2048_SHA256
)
key = {
"purpose" : purpose ,
"version_template" : {
"algorithm" : algorithm ,
},
# Optional: customize how long key versions should be kept before
# destroying.
"destroy_scheduled_duration" : duration_pb2 . Duration () . FromTimedelta (
datetime . timedelta ( days = 1 )
),
}
# Call the API.
created_key = client . create_crypto_key (
request = { "parent" : key_ring_name , "crypto_key_id" : key_id , "crypto_key" : key }
)
print ( f "Created asymmetric signing key: { created_key . name } " )
return created_key
To run this code, first set up a Ruby development environment and
install the Cloud KMS Ruby SDK .
# TODO(developer): uncomment these values before running the sample.
# project_id = "my-project"
# location_id = "us-east1"
# key_ring_id = "my-key-ring"
# id = "my-asymmetric-signing-key"
# Require the library.
require "google/cloud/kms"
# Create the client.
client = Google :: Cloud :: Kms . key_management_service
# Build the parent key ring name.
key_ring_name = client . key_ring_path project : project_id , location : location_id , key_ring : key_ring_id
# Build the key.
key = {
purpose : :ASYMMETRIC_SIGN ,
version_template : {
algorithm : :RSA_SIGN_PKCS1_2048_SHA256
},
# Optional: customize how long key versions should be kept before destroying.
destroy_scheduled_duration : {
seconds : 24 * 60 * 60
}
}
# Call the API.
created_key = client . create_crypto_key parent : key_ring_name , crypto_key_id : id , crypto_key : key
puts "Created asymmetric signing key: #{ created_key . name } "
These examples use curl as an HTTP client
to demonstrate using the API. For more information about access control, see
Accessing the Cloud KMS API .
Create an asymmetric signing key by calling
[`CryptoKey.create`](/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys/create).
curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING /cryptoKeys?crypto_key_id= KEY_NAME " \
--request "POST" \
--header "authorization: Bearer TOKEN " \
--header "content-type: application/json" \
--data '{"purpose": "ASYMMETRIC_SIGN", "versionTemplate": {"protectionLevel": " PROTECTION_LEVEL ", "algorithm": " ALGORITHM "}}'
Replace the following:
PROJECT_ID : the ID of the project that contains the key ring.
LOCATION : the Cloud KMS location of the key ring.
KEY_RING : the name of the key ring that contains the key.
KEY_NAME : the name of the key.
PROTECTION_LEVEL : the protection level that you want to use for
the key.
ALGORITHM : the algorithm to use for
the key—for example, EC_SIGN_P256_SHA256 . For a list of supported
algorithms, see Asymmetric signing
algorithms .
If you want to create your key in a Single-tenant Cloud HSM, set
PROTECTION_LEVEL to HSM_SINGLE_TENANT and add the
cryptoKeyBackend field to the body of the command and add the resource
identifier of the Single-tenant Cloud HSM instance where you want to
import the key:
"crypto-key-backend" : "projects/ INSTANCE_PROJECT /locations/ LOCATION /singleTenantHsmInstances/ INSTANCE_NAME "
Create a KEM key
Follow these steps to create a key for use in a key encapsulation mechanism (KEM) for the specified key ring
and location. These examples can be adapted to specify a different
protection level or algorithm. For more information and alternative values, see
Algorithms and Protection levels .
When you first create the key, the initial key version has a state of
Pending generation . When the state changes to Enabled , you can use
the key. To learn more about key version states, see Key version
states .
gcloud API
More
To use Cloud KMS on the command line, first
Install or upgrade to the latest version of Google Cloud CLI .
gcloud kms keys create KEY_NAME \
--keyring KEY_RING \
--location LOCATION \
--purpose "key-encapsulation" \
--default-algorithm " ALGORITHM "
Replace the following:
KEY_NAME : the name of the key.
KEY_RING : the name of the key ring that contains the key.
LOCATION : the Cloud KMS location of the key ring.
ALGORITHM : the algorithm to use for the key—for
example, ml-kem-768 . For a list of supported key encapsulation algorithms, see Key encapsulation
algorithms .
For information on all flags and possible values, run the command with the
--help flag.
These examples use curl as an HTTP client
to demonstrate using the API. For more information about access control, see
Accessing the Cloud KMS API .
Create a key with purpose KEY_ENCAPSULATION by calling
CryptoKey.create .
curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING /cryptoKeys?crypto_key_id= KEY_NAME " \
--request "POST" \
--header "authorization: Bearer TOKEN " \
--header "content-type: application/json" \
--data '{"purpose": "KEY_ENCAPSULATION", "versionTemplate": {"algorithm": " ALGORITHM "}}'
Replace the following:
PROJECT_ID : the ID of the project that contains the key ring.
LOCATION : the Cloud KMS location of the key ring.
KEY_RING : the name of the key ring that contains the key.
KEY_NAME : the name of the key.
ALGORITHM : the algorithm to use for
the key—for example, ML_KEM_768 . For a list of
supported key encapsulation algorithms, see Key encapsulation algorithms .
Retrieve the public key
When you create an asymmetric key, Cloud KMS creates a public/private
key pair. You can retrieve the public key of an enabled asymmetric key at any
time after the key is generated.
The public key is in the Privacy-enhanced Electronic Mail (PEM) format. For more
information, see the RFC 7468 sections General
Considerations and Textual Encoding of Subject Public
Key Info .
To download the public key for an existing asymmetric key version, follow these
steps:
Console gcloud C# Go Java Node.js PHP Python Ruby API
More
In the Google Cloud console, go to the Key Management page.
Go to Key Management
Click the name of the key ring that contains the asymmetric key for which
you want to retrieve the public key.
Click the name of the key for which you want to retrieve the public key.
On the row corresponding to the key version for which you want to retrieve
the public key, click View More more_vert .
Click Get public key .
The public key is displayed in the prompt. You can copy the public key to
your clipboard. To download the public key, click Download .
If you do not see the Get public key option, verify the following:
The key is an asymmetric key.
The key version is enabled.
You have the cloudkms.cryptoKeyVersions.viewPublicKey permission.
The filename of a public key downloaded from the Google Cloud console is of
the form:
KEY_RING - KEY_NAME - KEY_VERSION .pub
Each portion of the filename is separated by a hyphen, for example
ringname-keyname-version.pub .
To use Cloud KMS on the command line, first
Install or upgrade to the latest version of Google Cloud CLI .
Note: The gcloud kms keys versions get-public-key command must be run from
a local shell. Do not attempt to run this command using the Cloud Shell.
gcloud kms keys versions get-public-key KEY_VERSION \
--key KEY_NAME \
--keyring KEY_RING \
--location LOCATION \
--public-key-format PUBLIC_KEY_FORMAT \
--output-file OUTPUT_FILE_PATH
Replace the following:
KEY_VERSION : the key version number.
KEY_NAME : the name of the key.
KEY_RING : the name of the key ring that contains the key.
LOCATION : the Cloud KMS location of the key ring.
PUBLIC_KEY_FORMAT : the format in which you want to export
the public key. For NIST PQC algorithms
( Preview ), use nist-pqc and for X-Wing use xwing-raw-bytes . For all other
keys, you can use pem , der , or omit this parameter.
OUTPUT_FILE_PATH : the path where you want to save the
public key file—for example, public-key.pub .
For information on all flags and possible values, run the command with the
--help flag.
To run this code, first set up a C# development environment and
install the Cloud KMS C# SDK .
using Google.Cloud.Kms.V1 ;
public class GetPublicKeySample
{
public PublicKey GetPublicKey ( string projectId = "my-project" , string locationId = "us-east1" , string keyRingId = "my-key-ring" , string keyId = "my-key" , string keyVersionId = "123" )
{
// Create the client.
KeyManagementServiceClient client = KeyManagementServiceClient . Create ();
// Build the key version name.
CryptoKeyVersionName keyVersionName = new CryptoKeyVersionName ( projectId , locationId , keyRingId , keyId , keyVersionId );
// Call the API.
PublicKey result = client . GetPublicKey ( keyVersionName );
// Return the ciphertext.
return result ;
}
}
To run this code, first set up a Go development environment and
install the Cloud KMS Go SDK .
import (
"context"
"crypto/x509"
"encoding/pem"
"fmt"
"hash/crc32"
"io"
kms "cloud.google.com/go/kms/apiv1"
"cloud.google.com/go/kms/apiv1/kmspb"
)
// getPublicKey retrieves the public key from an asymmetric key pair on
// Cloud KMS.
func getPublicKey ( w io . Writer , name string ) error {
// name := "projects/my-project/locations/us-east1/keyRings/my-key-ring/cryptoKeys/my-key/cryptoKeyVersions/123"
// Create the client.
ctx := context . Background ()
client , err := kms . NewKeyManagementClient ( ctx )
if err != nil {
return fmt . Errorf ( "failed to create kms client: %w" , err )
}
defer client . Close ()
// Build the request.
req := & kmspb . GetPublicKeyRequest {
Name : name ,
}
// Call the API.
result , err := client . GetPublicKey ( ctx , req )
if err != nil {
return fmt . Errorf ( "failed to get public key: %w" , err )
}
// The 'Pem' field is the raw string representation of the public key.
// Convert 'Pem' into bytes for further processing.
key := [] byte ( result . Pem )
// Optional, but recommended: perform integrity verification on result.
// For more details on ensuring E2E in-transit integrity to and from Cloud KMS visit:
// https://cloud.google.com/kms/docs/data-integrity-guidelines
crc32c := func ( data [] byte ) uint32 {
t := crc32 . MakeTable ( crc32 . Castagnoli )
return crc32 . Checksum ( data , t )
}
if int64 ( crc32c ( key )) != result . PemCrc32C . Value {
return fmt . Errorf ( "getPublicKey: response corrupted in-transit" )
}
// Optional - parse the public key. This transforms the string key into a Go
// PublicKey.
block , _ := pem . Decode ( key )
publicKey , err := x509 . ParsePKIXPublicKey ( block . Bytes )
if err != nil {
return fmt . Errorf ( "failed to parse public key: %w" , err )
}
fmt . Fprintf ( w , "Retrieved public key: %v\n" , publicKey )
return nil
}
To run this code, first set up a Java development environment and
install the Cloud KMS Java SDK .
import com.google.cloud.kms.v1. CryptoKeyVersionName ;
import com.google.cloud.kms.v1. KeyManagementServiceClient ;
import com.google.cloud.kms.v1. PublicKey ;
import java.io.IOException ;
import java.security.GeneralSecurityException ;
public class GetPublicKey {
public void getPublicKey () throws IOException , GeneralSecurityException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String locationId = "us-east1" ;
String keyRingId = "my-key-ring" ;
String keyId = "my-key" ;
String keyVersionId = "123" ;
getPublicKey ( projectId , locationId , keyRingId , keyId , keyVersionId );
}
// Get the public key associated with an asymmetric key.
public void getPublicKey (
String projectId , String locationId , String keyRingId , String keyId , String keyVersionId )
throws IOException , GeneralSecurityException {
// Initialize client that will be used to send requests. This client only
// needs to be created once, and can be reused for multiple requests. After
// completing all of your requests, call the "close" method on the client to
// safely clean up any remaining background resources.
try ( KeyManagementServiceClient client = KeyManagementServiceClient . create ()) {
// Build the key version name from the project, location, key ring, key,
// and key version.
CryptoKeyVersionName keyVersionName =
CryptoKeyVersionName . of ( projectId , locationId , keyRingId , keyId , keyVersionId );
// Get the public key.
PublicKey publicKey = client . getPublicKey ( keyVersionName );
System . out . printf ( "Public key: %s%n" , publicKey . getPem ());
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
// Build the key version name
const versionName = client . cryptoKeyVersionPath (
projectId ,
locationId ,
keyRingId ,
keyId ,
versionId
);
async function getPublicKey () {
const [ publicKey ] = await client . getPublicKey ({
name : versionName ,
});
// Optional, but recommended: perform integrity verification on publicKey.
// For more details on ensuring E2E in-transit integrity to and from Cloud KMS visit:
// https://cloud.google.com/kms/docs/data-integrity-guidelines
const crc32c = require ( 'fast-crc32c' );
if ( publicKey . name !== versionName ) {
throw new Error ( 'GetPublicKey: request corrupted in-transit' );
}
if ( crc32c . calculate ( publicKey . pem ) !== Number ( publicKey . pemCrc32c . value )) {
throw new Error ( 'GetPublicKey: response corrupted in-transit' );
}
console . log ( `Public key pem: ${ publicKey . pem } ` );
return publicKey ;
}
return getPublicKey ();
To run this code, first learn about using PHP on Google Cloud and
install the Cloud KMS PHP SDK .
use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient;
use Google\Cloud\Kms\V1\GetPublicKeyRequest;
function get_public_key(
string $projectId = 'my-project',
string $locationId = 'us-east1',
string $keyRingId = 'my-key-ring',
string $keyId = 'my-key',
string $versionId = '123'
) {
// Create the Cloud KMS client.
$client = new KeyManagementServiceClient();
// Build the key version name.
$keyVersionName = $client->cryptoKeyVersionName($projectId, $locationId, $keyRingId, $keyId, $versionId);
// Call the API.
$getPublicKeyRequest = (new GetPublicKeyRequest())
->setName($keyVersionName);
$publicKey = $client->getPublicKey($getPublicKeyRequest);
printf('Public key: %s' . PHP_EOL, $publicKey->getPem());
return $publicKey;
}
To run this code, first set up a Python development environment and
install the Cloud KMS Python SDK .
from google.cloud import kms
def get_public_key (
project_id : str , location_id : str , key_ring_id : str , key_id : str , version_id : str
) - > kms . PublicKey :
"""
Get the public key for an asymmetric key.
Args:
project_id (string): Google Cloud project ID (e.g. 'my-project').
location_id (string): Cloud KMS location (e.g. 'us-east1').
key_ring_id (string): ID of the Cloud KMS key ring (e.g. 'my-key-ring').
key_id (string): ID of the key to use (e.g. 'my-key').
version_id (string): ID of the key to use (e.g. '1').
Returns:
PublicKey: Cloud KMS public key response.
"""
# Create the client.
client = kms . KeyManagementServiceClient ()
# Build the key version name.
key_version_name = client . crypto_key_version_path (
project_id , location_id , key_ring_id , key_id , version_id
)
# Call the API.
public_key = client . get_public_key ( request = { "name" : key_version_name })
# Optional, but recommended: perform integrity verification on public_key.
# For more details on ensuring E2E in-transit integrity to and from Cloud KMS visit:
# https://cloud.google.com/kms/docs/data-integrity-guidelines
if not public_key . name == key_version_name :
raise Exception ( "The request sent to the server was corrupted in-transit." )
# See crc32c() function defined below.
if not public_key . pem_crc32c == crc32c ( public_key . pem . encode ( "utf-8" )):
raise Exception (
"The response received from the server was corrupted in-transit."
)
# End integrity verification
print ( f "Public key: { public_key . pem } " )
return public_key
def crc32c ( data : bytes ) - > int :
"""
Calculates the CRC32C checksum of the provided data.
Args:
data: the bytes over which the checksum should be calculated.
Returns:
An int representing the CRC32C checksum of the provided bytes.
"""
import crcmod # type: ignore
crc32c_fun = crcmod . predefined . mkPredefinedCrcFun ( "crc-32c" )
return crc32c_fun ( data )
To run this code, first set up a Ruby development environment and
install the Cloud KMS Ruby SDK .
# TODO(developer): uncomment these values before running the sample.
# project_id = "my-project"
# location_id = "us-east1"
# key_ring_id = "my-key-ring"
# key_id = "my-key"
# version_id = "123"
# Require the library.
require "google/cloud/kms"
# Create the client.
client = Google :: Cloud :: Kms . key_management_service
# Build the key version name.
key_version_name = client . crypto_key_version_path project : project_id ,
location : location_id ,
key_ring : key_ring_id ,
crypto_key : key_id ,
crypto_key_version : version_id
# Call the API.
public_key = client . get_public_key name : key_version_name
puts "Public key: #{ public_key . pem } "
These examples use curl as an HTTP client
to demonstrate using the API. For more information about access control, see
Accessing the Cloud KMS API .
Retrieve the public key by calling the
CryptoKeyVersions.getPublicKey
method.
curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING /cryptoKeys/ KEY_NAME /cryptoKeyVersions/ KEY_VERSION /publicKey?public_key_format= PUBLIC_KEY_FORMAT " \
--request "GET" \
--header "authorization: Bearer TOKEN "
Replace the following:
PROJECT_ID : the ID of the project that contains the key ring.
LOCATION : the Cloud KMS location of the key ring.
KEY_RING : the name of the key ring that contains the key.
KEY_NAME : the name of the key.
KEY_VERSION : the key version number.
PUBLIC_KEY_FORMAT : the format in which you want to export
the public key. For PQC algorithms
( Preview ), use NIST_PQC . For all other
keys, you can use PEM or omit this parameter.
If the public key format is omitted for a non-PQC key, the output is similar to
the following:
{
"pem" : "-----BEGIN PUBLIC KEY-----\nQ29uZ3JhdHVsYXRpb25zLCB5b3UndmUgZGlzY292ZX
JlZCB0aGF0IHRoaXMgaXNuJ3QgYWN0dWFsbHkgYSBwdWJsaWMga2V5ISBIYXZlIGEgbmlj
ZSBkYXkgOik=\n-----END PUBLIC KEY-----\n" ,
"algorithm" : " ALGORITHM " ,
"pemCrc32c" : "2561089887" ,
"name" : "projects/ PROJECT_ID /locations/ LOCATION /keyRings/
KEY_RING /cryptoKeys/ KEY_NAME /cryptoKeyVersions/
KEY_VERSION " ,
"protectionLevel" : " PROTECTION_LEVEL "
}
For a PQC algorithm with public key format NIST_PQC , the output is similar to
the following:
{
"publicKeyFormat" : "NIST_PQC" ,
"publicKey" : {
"crc32cChecksum" : "1985843562" ,
"data" : "kdcOIrFCC5kN8S4i0+R+AoSc9gYIJ9jEQ6zG235ZmCQ="
}
"algorithm" : " ALGORITHM " ,
"name" : "projects/ PROJECT_ID /locations/ LOCATION /keyRings/
KEY_RING /cryptoKeys/ KEY_NAME /cryptoKeyVersions/
KEY_VERSION " ,
"protectionLevel" : " PROTECTION_LEVEL "
}
Convert a public key to JWK format
Cloud KMS lets you retrieve a public key in PEM format.
Some applications might require other key formats such as JSON Web Key (JWK).
For more information about the JWK format, see RFC 7517 .
Note: Cloud KMS generates and verifies only DER encoded signatures,
which are different from IEEE-P1363 encoded signatures that
are often used in JSON-based implementations. Caution: We don't recommend using these third-party libraries for anything
other than JWK conversion.
To convert a public key to JWK format, follow these steps:
Go Java Python
More
To run this code, first set up a Go development environment and
install the Cloud KMS Go SDK .
import (
"context"
"crypto/x509"
"encoding/json"
"encoding/pem"
"fmt"
"hash/crc32"
"io"
kms "cloud.google.com/go/kms/apiv1"
"cloud.google.com/go/kms/apiv1/kmspb"
"github.com/lestrrat-go/jwx/v2/jwk"
)
// getPublicKeyJwk retrieves the public key from an asymmetric key pair on Cloud KMS.
func getPublicKeyJwk ( w io . Writer , cryptoKeyVersionName string ) error {
// name := "projects/my-project/locations/us-east1/keyRings/my-key-ring/cryptoKeys/my-key/cryptoKeyVersions/123"
// Create the client.
ctx := context . Background ()
client , err := kms . NewKeyManagementClient ( ctx )
if err != nil {
return fmt . Errorf ( "failed to create kms client: %w" , err )
}
defer client . Close ()
// Build the request.
req := & kmspb . GetPublicKeyRequest {
Name : cryptoKeyVersionName ,
}
// Call the API to get the public key.
result , err := client . GetPublicKey ( ctx , req )
if err != nil {
return fmt . Errorf ( "failed to get public key: %w" , err )
}
// The 'Pem' field is the raw string representation of the public key.
// Convert 'Pem' into bytes for further processing.
key := [] byte ( result . Pem )
// Optional, but recommended: perform integrity verification on result.
// For more details on ensuring E2E in-transit integrity to and from Cloud KMS visit:
// https://cloud.google.com/kms/docs/data-integrity-guidelines
crc32c := func ( data [] byte ) uint32 {
t := crc32 . MakeTable ( crc32 . Castagnoli )
return crc32 . Checksum ( data , t )
}
if int64 ( crc32c ( key )) != result . PemCrc32C . Value {
return fmt . Errorf ( "getPublicKey: response corrupted in-transit" )
}
// Optional - parse the public key.
// This transforms the string key into a Go PublicKey.
block , _ := pem . Decode ( key )
_ , err = x509 . ParsePKIXPublicKey ( block . Bytes )
if err != nil {
return fmt . Errorf ( "failed to parse public key: %w" , err )
}
// If all above checks pass, convert it into JWK format.
jwkKey , err := jwk . ParseKey ( key , jwk . WithPEM ( true ))
if err != nil {
return fmt . Errorf ( "Failed to parse the PEM public key: %w" , err )
}
fmt . Fprintf ( w , "The public key in JWK format: " )
json . NewEncoder ( w ). Encode ( jwkKey )
return nil
}
To run this code, first set up a Java development environment and
install the Cloud KMS Java SDK .
import com.google.cloud.kms.v1. CryptoKeyVersionName ;
import com.google.cloud.kms.v1. KeyManagementServiceClient ;
import com.google.cloud.kms.v1. PublicKey ;
// NOTE: The library nimbusds is NOT endorsed for anything beyond conversion to JWK.
import com.nimbusds.jose.JOSEException ;
import com.nimbusds.jose.jwk.JWK ;
import java.io.IOException ;
import java.security.GeneralSecurityException ;
public class ConvertPublicKeyToJwk {
public void convertPublicKey () throws IOException , GeneralSecurityException , JOSEException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String locationId = "us-east1" ;
String keyRingId = "my-key-ring" ;
String keyId = "my-key" ;
String keyVersionId = "123" ;
convertPublicKey ( projectId , locationId , keyRingId , keyId , keyVersionId );
}
// (Get and) Convert the public key associated with an asymmetric key.
public void convertPublicKey (
String projectId , String locationId , String keyRingId , String keyId , String keyVersionId )
throws IOException , GeneralSecurityException , JOSEException {
// Initialize client that will be used to send requests. This client only
// needs to be created once, and can be reused for multiple requests. After
// completing all of your requests, call the "close" method on the client to
// safely clean up any remaining background resources.
try ( KeyManagementServiceClient client = KeyManagementServiceClient . create ()) {
// Build the key version name from the project, location, key ring, key,
// and key version.
CryptoKeyVersionName keyVersionName =
CryptoKeyVersionName . of ( projectId , locationId , keyRingId , keyId , keyVersionId );
// Get the public key and convert it to JWK format.
PublicKey publicKey = client . getPublicKey ( keyVersionName );
JWK jwk = JWK . parseFromPEMEncodedObjects ( publicKey . getPem ());
System . out . println ( jwk . toJSONString ());
}
}
}
To run this code, first set up a Python development environment and
install the Cloud KMS Python SDK .
from google.cloud import kms
from jwcrypto import jwk
def get_public_key_jwk (
project_id : str , location_id : str , key_ring_id : str , key_id : str , version_id : str
) - > kms . PublicKey :
"""
Get the public key of an asymmetric key in JWK format.
Args:
project_id (string): Google Cloud project ID (e.g. 'my-project').
location_id (string): Cloud KMS location (e.g. 'us-east1').
key_ring_id (string): ID of the Cloud KMS key ring (e.g. 'my-key-ring').
key_id (string): ID of the key to use (e.g. 'my-key').
version_id (string): ID of the key to use (e.g. '1').
Returns:
PublicKey: Cloud KMS public key response.
"""
# Create the client.
client = kms . KeyManagementServiceClient ()
# Build the key version name.
key_version_name = client . crypto_key_version_path (
project_id , location_id , key_ring_id , key_id , version_id
)
# Call the API.
public_key = client . get_public_key ( request = { "name" : key_version_name })
# Optional, but recommended: perform integrity verification on public_key.
# For more details on ensuring E2E in-transit integrity to and from Cloud KMS visit:
# https://cloud.google.com/kms/docs/data-integrity-guidelines
if not public_key . name == key_version_name :
raise Exception ( "The request sent to the server was corrupted in-transit." )
# See crc32c() function defined below.
if not public_key . pem_crc32c == crc32c ( public_key . pem . encode ( "utf-8" )):
raise Exception (
"The response received from the server was corrupted in-transit."
)
# End integrity verification
# Convert to JWK format.
jwk_key = jwk . JWK . from_pem ( public_key . pem . encode ())
return jwk_key . export ( private_key = False )
def crc32c ( data : bytes ) - > int :
"""
Calculates the CRC32C checksum of the provided data.
Args:
data: the bytes over which the checksum should be calculated.
Returns:
An int representing the CRC32C checksum of the provided bytes.
"""
import crcmod # type: ignore
crc32c_fun = crcmod . predefined . mkPredefinedCrcFun ( "crc-32c" )
return crc32c_fun ( data )
Control access to asymmetric keys
A signer or validator requires the appropriate permission or role on the
asymmetric key.
For a user or service that will perform signing, grant the
cloudkms.cryptoKeyVersions.useToSign permission on the asymmetric key.
For a user or service that will retrieve the public key, grant the
cloudkms.cryptoKeyVersions.viewPublicKey on the asymmetric key. The public key
is required for signature validation.
Learn about permissions and roles in Cloud KMS release at
Permissions and roles .
Create a MAC signing key
Console gcloud C# Go Java Node.js PHP Python Ruby API
More
In the Google Cloud console, go to the Key Management page.
Go to Key Management
Click the name of the key ring for which you will create a key.
Click Create key .
For Key name , enter a name for your key.
For Protection level , select Software , HSM , or
Single-tenant HSM .
If you selected Single-tenant HSM , then select the Single-tenant HSM
instance where you want to create the
key.
For Key material , select Generated key .
For Purpose , select MAC signing/verification .
Optional: for Algorithm , select an HMAC signing
algorithm .
Click Create .
To use Cloud KMS on the command line, first
Install or upgrade to the latest version of Google Cloud CLI .
To create a software or Multi-tenant Cloud HSM key, use the kms keys
create command:
gcloud kms keys create KEY_NAME \
--keyring KEY_RING \
--location LOCATION \
--purpose "mac" \
--default-algorithm " ALGORITHM " \
--protection-level " PROTECTION_LEVEL "
Replace the following:
KEY_NAME : the name of the key.
KEY_RING : the name of the key ring that contains the key.
LOCATION : the Cloud KMS location of the key ring.
ALGORITHM : the HMAC signing algorithm—for example,
hmac-sha256 . To see all supported HMAC algorithms, see HMAC signing
algorithms .
PROTECTION_LEVEL : the protection level of the key—for
example, hsm . You can omit the --protection-level flag for software
keys.
For the details on all flags and possible values, run the command with the
--help flag.
To create a Single-tenant Cloud HSM key, add the
--crypto-key-backend flag to the kms keys create command:
gcloud kms keys create KEY_NAME \
--keyring KEY_RING \
--location LOCATION \
--purpose "mac" \
--default-algorithm " ALGORITHM " \
--protection-level " PROTECTION_LEVEL " \
--crypto-key-backend="projects/ INSTANCE_PROJECT /locations/ LOCATION /singleTenantHsmInstances/ INSTANCE_NAME "
Replace the following:
INSTANCE_PROJECT : the identifier of the project where
your Single-tenant Cloud HSM instance exists.
INSTANCE_NAME : the name of the Single-tenant Cloud HSM
instance where you want to create the key. For more information about
Single-tenant Cloud HSM instances, see
Create and manage a Single-tenant Cloud HSM
instance .
For information on all flags and possible values, run the command with the
--help flag.
To run this code, first set up a C# development environment and
install the Cloud KMS C# SDK .
using Google.Cloud.Kms.V1 ;
using Google.Protobuf.WellKnownTypes ;
public class CreateKeyMacSample
{
public CryptoKey CreateKeyMac (
string projectId = "my-project" , string locationId = "us-east1" , string keyRingId = "my-key-ring" ,
string id = "my-mac-key" )
{
// Create the client.
KeyManagementServiceClient client = KeyManagementServiceClient . Create ();
// Build the parent key ring name.
KeyRingName keyRingName = new KeyRingName ( projectId , locationId , keyRingId );
// Build the key.
CryptoKey key = new CryptoKey
{
Purpose = CryptoKey . Types . CryptoKeyPurpose . Mac ,
VersionTemplate = new CryptoKeyVersionTemplate
{
Algorithm = CryptoKeyVersion . Types . CryptoKeyVersionAlgorithm . HmacSha256 ,
},
// Optional: customize how long key versions should be kept before destroying.
DestroyScheduledDuration = new Duration
{
Seconds = 24 * 60 * 60 ,
}
};
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
"time"
kms "cloud.google.com/go/kms/apiv1"
"cloud.google.com/go/kms/apiv1/kmspb"
"google.golang.org/protobuf/types/known/durationpb"
)
// createKeyMac creates a new key for use with MacSign.
func createKeyMac ( w io . Writer , parent , id string ) error {
// parent := "projects/my-project/locations/us-east1/keyRings/my-key-ring"
// id := "my-mac-key"
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
Purpose : kmspb . CryptoKey_MAC ,
VersionTemplate : & kmspb . CryptoKeyVersionTemplate {
Algorithm : kmspb . CryptoKeyVersion_HMAC_SHA256 ,
},
// Optional: customize how long key versions should be kept before destroying.
DestroyScheduledDuration : durationpb . New ( 24 * time . Hour ),
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
public class CreateKeyMac {
public void createKeyMac () throws IOException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String locationId = "us-east1" ;
String keyRingId = "my-key-ring" ;
String id = "my-mac-key" ;
createKeyMac ( projectId , locationId , keyRingId , id );
}
// Create a new key for use with MacSign.
public void createKeyMac ( String projectId , String locationId , String keyRingId , String id )
throws IOException {
// Initialize client that will be used to send requests. This client only
// needs to be created once, and can be reused for multiple requests. After
// completing all of your requests, call the "close" method on the client to
// safely clean up any remaining background resources.
try ( KeyManagementServiceClient client = KeyManagementServiceClient . create ()) {
// Build the parent name from the project, location, and key ring.
KeyRingName keyRingName = KeyRingName . of ( projectId , locationId , keyRingId );
// Build the mac key to create.
CryptoKey key =
CryptoKey . newBuilder ()
. setPurpose ( CryptoKeyPurpose . MAC )
. setVersionTemplate (
CryptoKeyVersionTemplate . newBuilder ()
. setAlgorithm ( CryptoKeyVersionAlgorithm . HMAC_SHA256 ))
. build ();
// Create the key.
CryptoKey createdKey = client . createCryptoKey ( keyRingName , id , key );
System . out . printf ( "Created mac key %s%n" , createdKey . getName ());
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
// const id = 'my-mac-key';
// Imports the Cloud KMS library
const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' );
// Instantiates a client
const client = new KeyManagementServiceClient ();
// Build the parent key ring name
const keyRingName = client . keyRingPath ( projectId , locationId , keyRingId );
async function createKeyMac () {
const [ key ] = await client . createCryptoKey ({
parent : keyRingName ,
cryptoKeyId : id ,
cryptoKey : {
purpose : 'MAC' ,
versionTemplate : {
algorithm : 'HMAC_SHA256' ,
},
// Optional: customize how long key versions should be kept before
// destroying.
destroyScheduledDuration : { seconds : 60 * 60 * 24 },
},
});
console . log ( `Created mac key: ${ key . name } ` );
return key ;
}
return createKeyMac ();
To run this code, first learn about using PHP on Google Cloud and
install the Cloud KMS PHP SDK .
use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient;
use Google\Cloud\Kms\V1\CreateCryptoKeyRequest;
use Google\Cloud\Kms\V1\CryptoKey;
use Google\Cloud\Kms\V1\CryptoKey\CryptoKeyPurpose;
use Google\Cloud\Kms\V1\CryptoKeyVersion\CryptoKeyVersionAlgorithm;
use Google\Cloud\Kms\V1\CryptoKeyVersionTemplate;
use Google\Protobuf\Duration;
function create_key_mac(
string $projectId = 'my-project',
string $locationId = 'us-east1',
string $keyRingId = 'my-key-ring',
string $id = 'my-mac-key'
): CryptoKey {
// Create the Cloud KMS client.
$client = new KeyManagementServiceClient();
// Build the parent key ring name.
$keyRingName = $client->keyRingName($projectId, $locationId, $keyRingId);
// Build the key.
$key = (new CryptoKey())
->setPurpose(CryptoKeyPurpose::MAC)
->setVersionTemplate((new CryptoKeyVersionTemplate())
->setAlgorithm(CryptoKeyVersionAlgorithm::HMAC_SHA256)
)
// Optional: customize how long key versions should be kept before destroying.
->setDestroyScheduledDuration((new Duration())
->setSeconds(24 * 60 * 60)
);
// Call the API.
$createCryptoKeyRequest = (new CreateCryptoKeyRequest())
->setParent($keyRingName)
->setCryptoKeyId($id)
->setCryptoKey($key);
$createdKey = $client->createCryptoKey($createCryptoKeyRequest);
printf('Created mac key: %s' . PHP_EOL, $createdKey->getName());
return $createdKey;
}
To run this code, first set up a Python development environment and
install the Cloud KMS Python SDK .
import datetime
from google.cloud import kms
from google.protobuf import duration_pb2 # type: ignore
def create_key_mac (
project_id : str , location_id : str , key_ring_id : str , key_id : str
) - > kms . CryptoKey :
"""
Creates a new key in Cloud KMS for HMAC operations.
Args:
project_id (string): Google Cloud project ID (e.g. 'my-project').
location_id (string): Cloud KMS location (e.g. 'us-east1').
key_ring_id (string): ID of the Cloud KMS key ring (e.g. 'my-key-ring').
key_id (string): ID of the key to create (e.g. 'my-mac-key').
Returns:
CryptoKey: Cloud KMS key.
"""
# Create the client.
client = kms . KeyManagementServiceClient ()
# Build the parent key ring name.
key_ring_name = client . key_ring_path ( project_id , location_id , key_ring_id )
# Build the key.
purpose = kms . CryptoKey . CryptoKeyPurpose . MAC
algorithm = kms . CryptoKeyVersion . CryptoKeyVersionAlgorithm . HMAC_SHA256
key = {
"purpose" : purpose ,
"version_template" : {
"algorithm" : algorithm ,
},
# Optional: customize how long key versions should be kept before
# destroying.
"destroy_scheduled_duration" : duration_pb2 . Duration () . FromTimedelta (
datetime . timedelta ( days = 1 )
),
}
# Call the API.
created_key = client . create_crypto_key (
request = { "parent" : key_ring_name , "crypto_key_id" : key_id , "crypto_key" : key }
)
print ( f "Created mac key: { created_key . name } " )
return created_key
To run this code, first set up a Ruby development environment and
install the Cloud KMS Ruby SDK .
# TODO(developer): uncomment these values before running the sample.
# project_id = "my-project"
# location_id = "us-east1"
# key_ring_id = "my-key-ring"
# id = "my-mac-key"
# Require the library.
require "google/cloud/kms"
# Create the client.
client = Google :: Cloud :: Kms . key_management_service
# Build the parent key ring name.
key_ring_name = client . key_ring_path project : project_id , location : location_id , key_ring : key_ring_id
# Build the key.
key = {
purpose : :MAC ,
version_template : {
algorithm : :HMAC_SHA256
}
}
# Call the API.
created_key = client . create_crypto_key parent : key_ring_name , crypto_key_id : id , crypto_key : key
puts "Created mac key: #{ created_key . name } "
These examples use curl as an HTTP client
to demonstrate using the API. For more information about access control, see
Accessing the Cloud KMS API .
To create a software or Multi-tenant Cloud HSM key, use the
CryptoKey.create
method:
curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING /cryptoKeys?crypto_key_id= KEY_NAME " \
--request "POST" \
--header "authorization: Bearer TOKEN " \
--header "content-type: application/json" \
--data '{"purpose": "MAC", "versionTemplate": { "protectionLevel": " PROTECTION_LEVEL ", "algorithm": " ALGORITHM " }}'
Replace the following:
PROJECT_ID : the ID of the project that contains the key ring.
LOCATION : the Cloud KMS location of the key ring.
KEY_RING : the name of the key ring that contains the key.
KEY_NAME : the name of the key.
PROTECTION_LEVEL : the protection level of the key, for example
SOFTWARE or HSM .
ALGORITHM : the HMAC signing algorithm, for example HMAC_SHA256 .
To see all supported HMAC algorithms, see HMAC signing
algorithms .
To create a Single-tenant Cloud HSM key, add the cryptoKeyBackend field to
the CryptoKey.create request body:
curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING /cryptoKeys?crypto_key_id= KEY_NAME " \
--request "POST" \
--header "authorization: Bearer TOKEN " \
--header "content-type: application/json" \
--data '{"purpose": "MAC", "versionTemplate": {
"protectionLevel": " PROTECTION_LEVEL ",
"algorithm": " ALGORITHM ",
"cryptoKeyBackend": "projects/ INSTANCE_PROJECT /locations/ LOCATION /singleTenantHsmInstances/ INSTANCE_NAME " }}'
Replace the following:
INSTANCE_PROJECT : the identifier of the project where
your Single-tenant Cloud HSM instance exists.
INSTANCE_NAME : the name of the Single-tenant Cloud HSM
instance where you want to create the key. For more information about
Single-tenant Cloud HSM instances, see
Create and manage a Single-tenant Cloud HSM
instance .
What's next
Learn about key rotation .
Learn about Creating and validating
signatures .
Learn about Encrypting and decrypting data with an RSA
key .
Learn about Retrieving a public key .
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
