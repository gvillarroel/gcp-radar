---
title: "Rotate a key \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/rotate-key
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/rotate-key
  title: "Rotate a key \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Rotate a key | Cloud Key Management Service | Google Cloud Documentation
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
Required roles
Configure automatic rotation Create a new key with a custom rotation schedule
Update an existing key to add a rotation schedule
Manually rotate a key
Set an existing version as the primary key version
Disable automatic rotation
Rotate an external key Rotate a coordinated external key
Rotate a manually managed Cloud EKM via VPC key
Rotate a manually managed Cloud EKM via internet key
What's next
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Rotate a key
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Required roles
Configure automatic rotation Create a new key with a custom rotation schedule
Update an existing key to add a rotation schedule
Manually rotate a key
Set an existing version as the primary key version
Disable automatic rotation
Rotate an external key Rotate a coordinated external key
Rotate a manually managed Cloud EKM via VPC key
Rotate a manually managed Cloud EKM via internet key
What's next
This page shows how to automatically or manually rotate a key. For more
information about key rotation in general, see
Key rotation .
Required roles
To get the permissions that
you need to rotate keys,
ask your administrator to grant you the
following IAM roles on your key:
Cloud KMS Admin ( roles/cloudkms.admin )
Re-encrypt data:
Cloud KMS CryptoKey Encrypter/Decrypter ( roles/cloudkms.cryptoKeyEncrypterDecrypter )
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to rotate keys. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to rotate keys:
Change primary key version:
cloudkms.cryptoKeys.update
Change or disable auto-rotate:
cloudkms.cryptoKeys.update
Create new key version:
cloudkms.cryptoKeyVersions.create
Disable old key versions:
cloudkms.cryptoKeyVersions.update
Re-encrypt data:
cloudkms.cryptoKeyVersions.useToDecrypt
cloudkms.cryptoKeyVersions.useToEncrypt
You might also be able to get
these permissions
with custom roles or
other predefined roles .
A single user with a custom role containing all of these permissions can
rotate keys and re-encrypt data on their own. Users in the Cloud KMS Admin role
and Cloud KMS CryptoKey Encrypter/Decrypter role can work together to rotate
keys and re-encrypt data. Follow the principle of
least privilege when assigning
roles. For more details, see
Permissions and roles .
When you rotate a key, data that was encrypted with previous key versions isn't
automatically re-encrypted. To learn more, see decrypt and
re-encrypt . Rotating a key does not automatically
disable or destroy any
existing key versions. Destroying key versions that are no longer needed helps
to reduce costs.
Configure automatic rotation
Note: Automatic rotation isn't supported for asymmetric signing or asymmetric
encryption keys. For more information, see
Considerations for asymmetric keys .
Create a new key with a custom rotation schedule
To configure automatic rotation when creating a new key:
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
Update an existing key to add a rotation schedule
To configure automatic rotation on an existing key:
Console gcloud C# Go Java Node.js PHP Python Ruby API
More
Go to the Key Management page in the Google Cloud console.
Go to the Key Management page
Click the name of the key ring that contains the key for which you want to
add a rotation schedule.
Click the key you want to add a rotation schedule to.
In the header, click Edit Rotation Period .
In the prompt, choose new values for the Rotation period and Starting
on fields.
In the prompt, click Save .
To use Cloud KMS on the command line, first
Install or upgrade to the latest version of Google Cloud CLI .
gcloud kms keys update KEY_NAME \
--location LOCATION \
--keyring KEY_RING \
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
NEXT_ROTATION_TIME : the timestamp at which to complete the next
rotation—for example, 2023-01-01T01:02:03 . You can omit
--next-rotation-time to schedule the next rotation for one rotation
period from when you run the command. For more information, see
CryptoKey.nextRotationTime .
For information on all flags and possible values, run the command with the
--help flag.
To run this code, first set up a C# development environment and
install the Cloud KMS C# SDK .
using Google.Cloud.Kms.V1 ;
using Google.Protobuf.WellKnownTypes ;
using System ;
public class UpdateKeyAddRotationSample
{
public CryptoKey UpdateKeyAddRotation ( string projectId = "my-project" , string locationId = "us-east1" , string keyRingId = "my-key-ring" , string keyId = "my-key" )
{
// Create the client.
KeyManagementServiceClient client = KeyManagementServiceClient . Create ();
// Build the key.
CryptoKey key = new CryptoKey
{
// Provide the name of the key to update.
CryptoKeyName = new CryptoKeyName ( projectId , locationId , keyRingId , keyId ),
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
// Build the update mask.
FieldMask fieldMask = new FieldMask
{
Paths = { "rotation_period" , "next_rotation_time" },
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
"time"
kms "cloud.google.com/go/kms/apiv1"
"cloud.google.com/go/kms/apiv1/kmspb"
fieldmask "google.golang.org/genproto/protobuf/field_mask"
"google.golang.org/protobuf/types/known/durationpb"
"google.golang.org/protobuf/types/known/timestamppb"
)
// addRotationSchedule updates a key to add a rotation schedule. If the key
// already has a rotation schedule, it is overwritten.
func addRotationSchedule ( w io . Writer , name string ) error {
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
// Provide the name of the key to update
Name : name ,
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
UpdateMask : & fieldmask . FieldMask {
Paths : [] string { "rotation_period" , "next_rotation_time" },
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
import com.google.cloud.kms.v1. CryptoKey . CryptoKeyPurpose ;
import com.google.cloud.kms.v1. CryptoKeyName ;
import com.google.cloud.kms.v1. CryptoKeyVersion . CryptoKeyVersionAlgorithm ;
import com.google.cloud.kms.v1. CryptoKeyVersionTemplate ;
import com.google.cloud.kms.v1. KeyManagementServiceClient ;
import com.google.protobuf. Duration ;
import com.google.protobuf. FieldMask ;
import com.google.protobuf. Timestamp ;
import com.google.protobuf.util. FieldMaskUtil ;
import java.io.IOException ;
import java.time.temporal.ChronoUnit ;
public class UpdateKeyAddRotation {
public void updateKeyAddRotation () throws IOException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String locationId = "us-east1" ;
String keyRingId = "my-key-ring" ;
String keyId = "my-key" ;
updateKeyAddRotation ( projectId , locationId , keyRingId , keyId );
}
// Update a key to add or change a rotation schedule.
public void updateKeyAddRotation (
String projectId , String locationId , String keyRingId , String keyId ) throws IOException {
// Initialize client that will be used to send requests. This client only
// needs to be created once, and can be reused for multiple requests. After
// completing all of your requests, call the "close" method on the client to
// safely clean up any remaining background resources.
try ( KeyManagementServiceClient client = KeyManagementServiceClient . create ()) {
// Build the name from the project, location, and key ring.
CryptoKeyName cryptoKeyName = CryptoKeyName . of ( projectId , locationId , keyRingId , keyId );
// Calculate the date 24 hours from now (this is used below).
long tomorrow = java . time . Instant . now (). plus ( 24 , ChronoUnit . HOURS ). getEpochSecond ();
// Build the key to update with a rotation schedule.
CryptoKey key =
CryptoKey . newBuilder ()
. setName ( cryptoKeyName . toString ())
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
// Construct the field mask.
FieldMask fieldMask = FieldMaskUtil . fromString ( "rotation_period,next_rotation_time" );
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
async function updateKeyAddRotation () {
const [ key ] = await client . updateCryptoKey ({
cryptoKey : {
name : keyName ,
// Rotate the key every 30 days.
rotationPeriod : {
seconds : 60 * 60 * 24 * 30 ,
},
// Start the first rotation in 24 hours.
nextRotationTime : {
seconds : new Date (). getTime () / 1000 + 60 * 60 * 24 ,
},
},
updateMask : {
paths : [ 'rotation_period' , 'next_rotation_time' ],
},
});
console . log ( `Updated rotation for: ${ key . name } ` );
return key ;
}
return updateKeyAddRotation ();
To run this code, first learn about using PHP on Google Cloud and
install the Cloud KMS PHP SDK .
use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient;
use Google\Cloud\Kms\V1\CryptoKey;
use Google\Cloud\Kms\V1\UpdateCryptoKeyRequest;
use Google\Protobuf\Duration;
use Google\Protobuf\FieldMask;
use Google\Protobuf\Timestamp;
function update_key_add_rotation(
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
// Rotate the key every 30 days.
->setRotationPeriod((new Duration())
->setSeconds(60 * 60 * 24 * 30)
)
// Start the first rotation in 24 hours.
->setNextRotationTime((new Timestamp())
->setSeconds(time() + 60 * 60 * 24)
);
// Create the field mask.
$updateMask = (new FieldMask())
->setPaths(['rotation_period', 'next_rotation_time']);
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
import time
from google.cloud import kms
def update_key_add_rotation (
project_id : str , location_id : str , key_ring_id : str , key_id : str
) - > kms . CryptoKey :
"""
Add a rotation schedule to an existing key.
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
"rotation_period" : {
"seconds" : 60 * 60 * 24 * 30 # Rotate the key every 30 days.
},
"next_rotation_time" : {
"seconds" : int ( time . time ())
+ 60 * 60 * 24 # Start the first rotation in 24 hours.
},
}
# Build the update mask.
update_mask = { "paths" : [ "rotation_period" , "next_rotation_time" ]}
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
# Rotate the key every 30 days.
rotation_period : {
seconds : 60 * 60 * 24 * 30
},
# Start the first rotation in 24 hours.
next_rotation_time : {
seconds : ( Time . now + ( 60 * 60 * 24 )) . to_i
}
}
# Build the field mask.
update_mask = { paths : [ "rotation_period" , "next_rotation_time" ] }
# Call the API.
updated_key = client . update_crypto_key crypto_key : key , update_mask : update_mask
puts "Updated key: #{ updated_key . name } "
These examples use curl as an HTTP client
to demonstrate using the API. For more information about access control, see
Accessing the Cloud KMS API .
To update a key, use the
CryptoKey.patch
method:
curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING /cryptoKeys/ KEY_NAME ?updateMask=rotationPeriod,nextRotationTime" \
--request "PATCH" \
--header "authorization: Bearer TOKEN " \
--header "content-type: application/json" \
--data '{"rotationPeriod": " ROTATION_PERIOD ", "nextRotationTime": " NEXT_ROTATION_TIME "}'
Replace the following:
ROTATION_PERIOD : the interval to
rotate the key—for example, 30d to rotate the key every 30 days. The rotation
period must be at least 1 day and at most 100 years. For more information, see
CryptoKey.rotationPeriod .
NEXT_ROTATION_TIME : the timestamp at which to complete the next
rotation—for example, 2023-01-01T01:02:03 . For more information, see
CryptoKey.nextRotationTime .
Manually rotate a key
First, create a new key version:
Console gcloud C# Go Java Node.js PHP Python Ruby API
More
Go to the Key Management page in the Google Cloud console.
Go to the Key Management page
Click the name of the key ring that contains the key for which you will
create a new key version.
Click the key for which you will create a new key version.
In the header, click Rotate .
In the prompt, click Rotate to confirm.
To use Cloud KMS on the command line, first
Install or upgrade to the latest version of Google Cloud CLI .
gcloud kms keys versions create \
--key KEY_NAME \
--keyring KEY_RING \
--location LOCATION
Replace the following:
KEY_NAME : the name of the key.
KEY_RING : the name of the key ring that contains the key.
LOCATION : the Cloud KMS location of the key ring.
Key versions are numbered sequentially.
For information on all flags and possible values, run the command with the
--help flag.
To run this code, first set up a C# development environment and
install the Cloud KMS C# SDK .
using Google.Cloud.Kms.V1 ;
public class CreateKeyVersionSample
{
public CryptoKeyVersion CreateKeyVersion ( string projectId = "my-project" , string locationId = "us-east1" , string keyRingId = "my-key-ring" , string keyId = "my-key" )
{
// Create the client.
KeyManagementServiceClient client = KeyManagementServiceClient . Create ();
// Build the parent key name.
CryptoKeyName keyName = new CryptoKeyName ( projectId , locationId , keyRingId , keyId );
// Build the key version.
CryptoKeyVersion keyVersion = new CryptoKeyVersion { };
// Call the API.
CryptoKeyVersion result = client . CreateCryptoKeyVersion ( keyName , keyVersion );
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
// createKeyVersion creates a new key version for the given key.
func createKeyVersion ( w io . Writer , parent string ) error {
// parent := "projects/my-project/locations/us-east1/keyRings/my-key-ring/cryptoKeys/my-key"
// Create the client.
ctx := context . Background ()
client , err := kms . NewKeyManagementClient ( ctx )
if err != nil {
return fmt . Errorf ( "failed to create kms client: %w" , err )
}
defer client . Close ()
// Build the request.
req := & kmspb . CreateCryptoKeyVersionRequest {
Parent : parent ,
}
// Call the API.
result , err := client . CreateCryptoKeyVersion ( ctx , req )
if err != nil {
return fmt . Errorf ( "failed to create key version: %w" , err )
}
fmt . Fprintf ( w , "Created key version: %s\n" , result . Name )
return nil
}
To run this code, first set up a Java development environment and
install the Cloud KMS Java SDK .
import com.google.cloud.kms.v1. CryptoKeyName ;
import com.google.cloud.kms.v1. CryptoKeyVersion ;
import com.google.cloud.kms.v1. KeyManagementServiceClient ;
import java.io.IOException ;
public class CreateKeyVersion {
public void createKeyVersion () throws IOException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String locationId = "us-east1" ;
String keyRingId = "my-key-ring" ;
String keyId = "my-key" ;
createKeyVersion ( projectId , locationId , keyRingId , keyId );
}
// Create a new key version.
public void createKeyVersion ( String projectId , String locationId , String keyRingId , String keyId )
throws IOException {
// Initialize client that will be used to send requests. This client only
// needs to be created once, and can be reused for multiple requests. After
// completing all of your requests, call the "close" method on the client to
// safely clean up any remaining background resources.
try ( KeyManagementServiceClient client = KeyManagementServiceClient . create ()) {
// Build the parent name from the project, location, and key ring.
CryptoKeyName cryptoKeyName = CryptoKeyName . of ( projectId , locationId , keyRingId , keyId );
// Build the key version to create.
CryptoKeyVersion keyVersion = CryptoKeyVersion . newBuilder (). build ();
// Create the key.
CryptoKeyVersion createdVersion = client . createCryptoKeyVersion ( cryptoKeyName , keyVersion );
System . out . printf ( "Created key version %s%n" , createdVersion . getName ());
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
// Build the parent key name
const keyName = client . cryptoKeyPath ( projectId , locationId , keyRingId , keyId );
async function createKeyVersion () {
const [ version ] = await client . createCryptoKeyVersion ({
parent : keyName ,
});
console . log ( `Created key version: ${ version . name } ` );
return version ;
}
return createKeyVersion ();
To run this code, first learn about using PHP on Google Cloud and
install the Cloud KMS PHP SDK .
use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient;
use Google\Cloud\Kms\V1\CreateCryptoKeyVersionRequest;
use Google\Cloud\Kms\V1\CryptoKeyVersion;
function create_key_version(
string $projectId = 'my-project',
string $locationId = 'us-east1',
string $keyRingId = 'my-key-ring',
string $keyId = 'my-key'
): CryptoKeyVersion {
// Create the Cloud KMS client.
$client = new KeyManagementServiceClient();
// Build the parent key name.
$keyName = $client->cryptoKeyName($projectId, $locationId, $keyRingId, $keyId);
// Build the key version.
$version = new CryptoKeyVersion();
// Call the API.
$createCryptoKeyVersionRequest = (new CreateCryptoKeyVersionRequest())
->setParent($keyName)
->setCryptoKeyVersion($version);
$createdVersion = $client->createCryptoKeyVersion($createCryptoKeyVersionRequest);
printf('Created key version: %s' . PHP_EOL, $createdVersion->getName());
return $createdVersion;
}
To run this code, first set up a Python development environment and
install the Cloud KMS Python SDK .
from google.cloud import kms
def create_key_version (
project_id : str , location_id : str , key_ring_id : str , key_id : str
) - > kms . CryptoKey :
"""
Creates a new version of the given key.
Args:
project_id (string): Google Cloud project ID (e.g. 'my-project').
location_id (string): Cloud KMS location (e.g. 'us-east1').
key_ring_id (string): ID of the Cloud KMS key ring (e.g. 'my-key-ring').
key_id (string): ID of the key for which to create a new version (e.g. 'my-key').
Returns:
CryptoKeyVersion: Cloud KMS key version.
"""
# Create the client.
client = kms . KeyManagementServiceClient ()
# Build the parent key name.
key_name = client . crypto_key_path ( project_id , location_id , key_ring_id , key_id )
# Build the key version.
version = {}
# Call the API.
created_version = client . create_crypto_key_version (
request = { "parent" : key_name , "crypto_key_version" : version }
)
print ( f "Created key version: { created_version . name } " )
return created_version
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
# Build the version.
version = {}
# Call the API.
created_version = client . create_crypto_key_version parent : key_name , crypto_key_version : version
puts "Created key version: #{ created_version . name } "
These examples use curl as an HTTP client
to demonstrate using the API. For more information about access control, see
Accessing the Cloud KMS API .
To manually rotate a key, first create a new key version by calling the
CryptoKeyVersions.create
method.
curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING /cryptoKeys/ KEY_NAME /cryptoKeyVersions" \
--request "POST" \
--header "authorization: Bearer TOKEN "
This command creates a new key version, but doesn't set it as the primary version.
To set your new key version as primary, see Setting an existing version as the
primary key version .
If necessary, re-encrypt data that was encrypted
using the previous key version.
Set an existing version as the primary key version
To set different key version as the primary version for a key, update
the key with the new primary version information. A key version must be enabled
before you can configure it as the primary version.
Console gcloud C# Go Java Node.js PHP Ruby Python API
More
Go to the Key Management page in the Google Cloud console.
Go to the Key Management page
Click the name of the key ring that contains the key whose primary version
you want to update.
Click the key whose primary version you want to update.
On the row corresponding to the key version you want to make primary, click
View More more_vert .
Click Make primary version in menu.
In the confirmation prompt, click Make primary .
To use Cloud KMS on the command line, first
Install or upgrade to the latest version of Google Cloud CLI .
gcloud kms keys update KEY_NAME \
--keyring KEY_RING \
--location LOCATION \
--primary-version KEY_VERSION
Replace the following:
KEY_NAME : the name of the key.
KEY_RING : the name of the key ring that contains the key.
LOCATION : the Cloud KMS location of the key ring.
KEY_VERSION : the version number of the new primary key version.
For information on all flags and possible values, run the command with the
--help flag.
To run this code, first set up a C# development environment and
install the Cloud KMS C# SDK .
using Google.Cloud.Kms.V1 ;
public class UpdateKeySetPrimarySample
{
public CryptoKey UpdateKeySetPrimary (
string projectId = "my-project" , string locationId = "us-east1" , string keyRingId = "my-key-ring" , string keyId = "my-key" ,
string keyVersionId = "123" )
{
// Create the client.
KeyManagementServiceClient client = KeyManagementServiceClient . Create ();
// Build the key name.
CryptoKeyName keyName = new CryptoKeyName ( projectId , locationId , keyRingId , keyId );
// Call the API.
CryptoKey result = client . UpdateCryptoKeyPrimaryVersion ( keyName , keyVersionId );
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
)
// updateKeySetPrimary updates the primary key version on a Cloud KMS key.
func updateKeySetPrimary ( w io . Writer , name , version string ) error {
// name := "projects/my-project/locations/us-east1/keyRings/my-key-ring/cryptoKeys/my-key"
// version := "123"
// Create the client.
ctx := context . Background ()
client , err := kms . NewKeyManagementClient ( ctx )
if err != nil {
return fmt . Errorf ( "failed to create kms client: %w" , err )
}
defer client . Close ()
// Build the request.
req := & kmspb . UpdateCryptoKeyPrimaryVersionRequest {
Name : name ,
CryptoKeyVersionId : version ,
}
// Call the API.
result , err := client . UpdateCryptoKeyPrimaryVersion ( ctx , req )
if err != nil {
return fmt . Errorf ( "failed to update key: %w" , err )
}
fmt . Fprintf ( w , "Updated key primary: %s\n" , result . Name )
return nil
}
To run this code, first set up a Java development environment and
install the Cloud KMS Java SDK .
import com.google.cloud.kms.v1. CryptoKey ;
import com.google.cloud.kms.v1. CryptoKeyName ;
import com.google.cloud.kms.v1. KeyManagementServiceClient ;
import java.io.IOException ;
public class UpdateKeySetPrimary {
public void updateKeySetPrimary () throws IOException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String locationId = "us-east1" ;
String keyRingId = "my-key-ring" ;
String keyId = "my-key" ;
String keyVersionId = "123" ;
updateKeySetPrimary ( projectId , locationId , keyRingId , keyId , keyVersionId );
}
// Update a key's primary version.
public void updateKeySetPrimary (
String projectId , String locationId , String keyRingId , String keyId , String keyVersionId )
throws IOException {
// Initialize client that will be used to send requests. This client only
// needs to be created once, and can be reused for multiple requests. After
// completing all of your requests, call the "close" method on the client to
// safely clean up any remaining background resources.
try ( KeyManagementServiceClient client = KeyManagementServiceClient . create ()) {
// Build the name from the project, location, key ring, and keyId.
CryptoKeyName cryptoKeyName = CryptoKeyName . of ( projectId , locationId , keyRingId , keyId );
// Create the key.
CryptoKey createdKey = client . updateCryptoKeyPrimaryVersion ( cryptoKeyName , keyVersionId );
System . out . printf ( "Updated key primary version %s%n" , createdKey . getName ());
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
async function updateKeySetPrimary () {
const [ key ] = await client . updateCryptoKeyPrimaryVersion ({
name : keyName ,
cryptoKeyVersionId : versionId ,
});
console . log ( `Set primary to ${ versionId } ` );
return key ;
}
return updateKeySetPrimary ();
To run this code, first learn about using PHP on Google Cloud and
install the Cloud KMS PHP SDK .
use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient;
use Google\Cloud\Kms\V1\UpdateCryptoKeyPrimaryVersionRequest;
function update_key_set_primary(
string $projectId = 'my-project',
string $locationId = 'us-east1',
string $keyRingId = 'my-key-ring',
string $keyId = 'my-key',
string $versionId = '123'
) {
// Create the Cloud KMS client.
$client = new KeyManagementServiceClient();
// Build the key name.
$keyName = $client->cryptoKeyName($projectId, $locationId, $keyRingId, $keyId);
// Call the API.
$updateCryptoKeyPrimaryVersionRequest = (new UpdateCryptoKeyPrimaryVersionRequest())
->setName($keyName)
->setCryptoKeyVersionId($versionId);
$updatedKey = $client->updateCryptoKeyPrimaryVersion($updateCryptoKeyPrimaryVersionRequest);
printf('Updated primary %s to %s' . PHP_EOL, $updatedKey->getName(), $versionId);
return $updatedKey;
}
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
# Build the parent key name.
key_name = client . crypto_key_path project : project_id ,
location : location_id ,
key_ring : key_ring_id ,
crypto_key : key_id
# Call the API.
updated_key = client . update_crypto_key_primary_version name : key_name , crypto_key_version_id : version_id
puts "Updated primary #{ updated_key . name } to #{ version_id } "
To run this code, first set up a Python development environment and
install the Cloud KMS Python SDK .
from google.cloud import kms
def update_key_set_primary (
project_id : str , location_id : str , key_ring_id : str , key_id : str , version_id : str
) - > kms . CryptoKey :
"""
Update the primary version of a key.
Args:
project_id (string): Google Cloud project ID (e.g. 'my-project').
location_id (string): Cloud KMS location (e.g. 'us-east1').
key_ring_id (string): ID of the Cloud KMS key ring (e.g. 'my-key-ring').
key_id (string): ID of the key to use (e.g. 'my-key').
version_id (string): ID of the key to make primary (e.g. '2').
Returns:
CryptoKey: Updated Cloud KMS key.
"""
# Create the client.
client = kms . KeyManagementServiceClient ()
# Build the key name.
key_name = client . crypto_key_path ( project_id , location_id , key_ring_id , key_id )
# Call the API.
updated_key = client . update_crypto_key_primary_version (
request = { "name" : key_name , "crypto_key_version_id" : version_id }
)
print ( f "Updated { updated_key . name } primary to { version_id } " )
return updated_key
These examples use curl as an HTTP client
to demonstrate using the API. For more information about access control, see
Accessing the Cloud KMS API .
Change the primary key version by calling the
CryptoKey.updatePrimaryVersion
method.
curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING /cryptoKeys/ KEY_NAME :updatePrimaryVersion" \
--request "POST" \
--header "authorization: Bearer TOKEN " \
--header "content-type: application/json" \
--data '{"cryptoKeyVersionId": " KEY_VERSION "}'
Replace the following:
PROJECT_ID : the ID of the project that contains the key ring.
LOCATION : the Cloud KMS location of the key ring.
KEY_RING : the name of the key ring that contains the key.
KEY_NAME : the name of the key.
KEY_VERSION : the version number of the new primary key version.
When you change the primary key version, the change typically becomes consistent
within 1 minute. However, this change can take up to 3 hours to propagate in
exceptional cases. During this time, the prior primary version might be used to
encrypt data. For more information, see
Cloud KMS resource consistency .
Disable automatic rotation
To disable automatic rotation on a key, clear the rotation schedule of the key:
Console gcloud C# Go Java Node.js PHP Ruby Python API
More
Go to the Key Management page in the Google Cloud console.
Go to the Key Management page
Click the name of the key ring that contains the key for which you want to
remove the rotation schedule.
Click the key you want to remove the rotation schedule from.
In the header, click Edit Rotation Period .
In the prompt, click the Rotation period field and select Never
(manual rotation) .
In the prompt, click Save .
To use Cloud KMS on the command line, first
Install or upgrade to the latest version of Google Cloud CLI .
gcloud kms keys update KEY_NAME \
--keyring KEY_RING \
--location LOCATION \
--remove-rotation-schedule
Replace the following:
KEY_NAME : the name of the key.
KEY_RING : the name of the key ring that contains the key.
LOCATION : the Cloud KMS location of the key ring.
For information on all flags and possible values, run the command with the
--help flag.
To run this code, first set up a C# development environment and
install the Cloud KMS C# SDK .
using Google.Cloud.Kms.V1 ;
using Google.Protobuf.WellKnownTypes ;
public class UpdateKeyRemoveRotationSample
{
public CryptoKey UpdateKeyRemoveRotation ( string projectId = "my-project" , string locationId = "us-east1" , string keyRingId = "my-key-ring" , string keyId = "my-key" )
{
// Create the client.
KeyManagementServiceClient client = KeyManagementServiceClient . Create ();
// Build the key.
CryptoKey key = new CryptoKey
{
CryptoKeyName = new CryptoKeyName ( projectId , locationId , keyRingId , keyId ),
RotationPeriod = null ,
NextRotationTime = null ,
};
// Build the update mask.
FieldMask fieldMask = new FieldMask
{
Paths = { "rotation_period" , "next_rotation_time" },
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
// removeRotationSchedule updates a key to remove a rotation schedule, if one
// exists.
func removeRotationSchedule ( w io . Writer , name string ) error {
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
// Provide the name of the key to update
Name : name ,
// Remove any rotation fields.
RotationSchedule : nil ,
NextRotationTime : nil ,
},
UpdateMask : & fieldmask . FieldMask {
Paths : [] string { "rotation_period" , "next_rotation_time" },
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
public class UpdateKeyRemoveRotation {
public void updateKeyRemoveRotation () throws IOException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String locationId = "us-east1" ;
String keyRingId = "my-key-ring" ;
String keyId = "my-key" ;
updateKeyRemoveRotation ( projectId , locationId , keyRingId , keyId );
}
// Update a key to remove all labels.
public void updateKeyRemoveRotation (
String projectId , String locationId , String keyRingId , String keyId ) throws IOException {
// Initialize client that will be used to send requests. This client only
// needs to be created once, and can be reused for multiple requests. After
// completing all of your requests, call the "close" method on the client to
// safely clean up any remaining background resources.
try ( KeyManagementServiceClient client = KeyManagementServiceClient . create ()) {
// Build the name from the project, location, key ring, and keyId.
CryptoKeyName cryptoKeyName = CryptoKeyName . of ( projectId , locationId , keyRingId , keyId );
// Build an empty key with no labels.
CryptoKey key =
CryptoKey . newBuilder ()
. setName ( cryptoKeyName . toString ())
. clearRotationPeriod ()
. clearNextRotationTime ()
. build ();
// Construct the field mask.
FieldMask fieldMask = FieldMaskUtil . fromString ( "rotation_period,next_rotation_time" );
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
// Imports the Cloud KMS library
const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' );
// Instantiates a client
const client = new KeyManagementServiceClient ();
// Build the key name
const keyName = client . cryptoKeyPath ( projectId , locationId , keyRingId , keyId );
async function updateKeyRemoveRotation () {
const [ key ] = await client . updateCryptoKey ({
cryptoKey : {
name : keyName ,
rotationPeriod : null ,
nextRotationTime : null ,
},
updateMask : {
paths : [ 'rotation_period' , 'next_rotation_time' ],
},
});
console . log ( `Removed rotation for: ${ key . name } ` );
return key ;
}
return updateKeyRemoveRotation ();
To run this code, first learn about using PHP on Google Cloud and
install the Cloud KMS PHP SDK .
use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient;
use Google\Cloud\Kms\V1\CryptoKey;
use Google\Cloud\Kms\V1\UpdateCryptoKeyRequest;
use Google\Protobuf\FieldMask;
function update_key_remove_rotation(
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
->setName($keyName);
// Create the field mask.
$updateMask = (new FieldMask())
->setPaths(['rotation_period', 'next_rotation_time']);
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
rotation_period : nil ,
next_rotation_time : nil
}
# Build the field mask.
update_mask = { paths : [ "rotation_period" , "next_rotation_time" ] }
# Call the API.
updated_key = client . update_crypto_key crypto_key : key , update_mask : update_mask
puts "Updated key: #{ updated_key . name } "
To run this code, first set up a Python development environment and
install the Cloud KMS Python SDK .
from google.cloud import kms
def update_key_remove_rotation (
project_id : str , location_id : str , key_ring_id : str , key_id : str
) - > kms . CryptoKey :
"""
Remove a rotation schedule from an existing key.
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
key = { "name" : key_name }
# Build the update mask.
update_mask = { "paths" : [ "rotation_period" , "next_rotation_time" ]}
# Call the API.
updated_key = client . update_crypto_key (
request = { "crypto_key" : key , "update_mask" : update_mask }
)
print ( f "Updated key: { updated_key . name } " )
return updated_key
These examples use curl as an HTTP client
to demonstrate using the API. For more information about access control, see
Accessing the Cloud KMS API .
To update a key, use the
CryptoKey.patch
method:
curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING /cryptoKeys/ KEY_NAME ?updateMask=rotationPeriod,nextRotationTime" \
--request "PATCH" \
--header "authorization: Bearer TOKEN " \
--header "content-type: application/json" \
--data '{"rotationPeriod": null, "nextRotationTime": null}'
For additional details about rotationPeriod and nextRotationTime , see
keyRings.cryptoKeys .
Rotate an external key
Rotate a coordinated external key
You can configure automatic rotation for symmetric coordinated
external keys. You can also manually create a new key version for symmetric or
asymmetric coordinated external keys.
Rotating or creating a new key version causes all newly created data protected
with that key to be encrypted with the new key version. Data protected with
a previous key version isn't re-encrypted. As a result, your external key
manager must continue to make the key material of the previous key version
available to be used.
To create a new key version for a coordinated external key, complete the following steps:
Console gcloud CLI
More
In the Google Cloud console, go to the
Key Management page.
Go to Key Management
Select the key ring, and then select the key.
Click Create version . A message indicates that your new key version
will be generated in both Cloud KMS and your EKM. If you see a
Key path or Key URI field, the selected key isn't a coordinated
external key.
To confirm that you want to create a new key version, click Create
version .
The new key version appears in Pending generation state. For symmetric
keys, manually created key versions aren't automatically set as the
primary key version. You can set your new key version as
primary .
To create a new symmetric key version and set it as the primary key version,
use the kms keys versions create command with the --primary flag:
gcloud kms keys versions create \
--key KEY_NAME \
--keyring KEY_RING \
--location LOCATION \
--primary
Replace the following:
KEY_NAME : the name of the key.
KEY_RING : the name of the key ring that contains the key.
LOCATION : the Cloud KMS location of the key ring.
To create a new asymmetric key version or to create a new symmetric key
version that isn't the primary key version, use the kms keys versions
create command:
gcloud kms keys versions create \
--key KEY_NAME \
--keyring KEY_RING \
--location LOCATION
Replace the following:
KEY_NAME : the name of the key.
KEY_RING : the name of the key ring that contains the key.
LOCATION : the Cloud KMS location of the key ring.
Rotate a manually managed Cloud EKM via VPC key
First, rotate the external key material on your external key manager. If that
results in a new key path, you need to rotate or create a new Cloud EKM
key version with the new key path. For symmetric encryption keys, rotate the
Cloud EKM key and specify the new key path from your external key
manager. For asymmetric keys, create a new key version and specify the new key
path.
Rotating or creating a new key version causes all newly created data protected
with that key to be encrypted with the new key version. Data protected with
a previous key version isn't re-encrypted. As a result, your external key
manager must continue to make the key material of the previous key version
available to be used.
If the key material in the external key management partner system doesn't change, but the key
path changes, you can update the key's external
path without rotating the key.
Console gcloud
More
In the Google Cloud console, go to the
Key Management page.
Go to Key Management
Select the key ring, and then select the key.
Click Rotate key .
For Key path , enter the key path for the new version.
Click Rotate Key to confirm.
To use Cloud KMS on the command line, first
Install or upgrade to the latest version of Google Cloud CLI .
To create a new symmetric key version and set it as the primary key version,
use the kms keys versions create command with the --primary flag:
gcloud kms keys versions create \
--key KEY_NAME \
--keyring KEY_RING \
--location LOCATION \
--ekm-connection-key-path EXTERNAL_KEY_PATH \
--primary
Replace the following:
KEY_NAME : the name of the key.
KEY_RING : the name of the key ring that contains the key.
LOCATION : the Cloud KMS location of the key ring.
EXTERNAL_KEY_PATH : the path to the new external
key version.
To create a new asymmetric key version or to create a new symmetric key
version that isn't the primary key version, use the kms keys versions
create command:
gcloud kms keys versions create \
--key KEY_NAME \
--keyring KEY_RING \
--location LOCATION \
--ekm-connection-key-path EXTERNAL_KEY_PATH
Replace the following:
KEY_NAME : the name of the key.
KEY_RING : the name of the key ring that contains the key.
LOCATION : the Cloud KMS location of the key ring.
EXTERNAL_KEY_PATH : the path to the new external
key version.
For information on all flags and possible values, run the command with the
--help flag.
After the key version is successfully created, you can use it just as you would
use any other Cloud KMS key version.
Rotate a manually managed Cloud EKM via internet key
First, rotate the external key material on your external key manager. If that
results in a new URI, you need to rotate or create a new Cloud EKM key
version with the new URI. For symmetric encryption keys, rotate the
Cloud EKM key and specify the new key URI from your external key
manager. For asymmetric keys, create a new key version and specify the new key
URI.
Rotating or creating a new key version causes all newly created data protected
with that key to be encrypted with the new key version. Data protected with
a previous key version isn't re-encrypted. As a result, your external key
manager must continue to make the key material of the previous key version
available to be used.
If the key material in the external key management partner system doesn't change, but the URI
changes, you can update the key's external
URI without rotating the key.
Console gcloud CLI
More
In the Google Cloud console, go to the
Key Management page.
Go to Key Management
Select the key ring, and then select the key.
Select Rotate key for symmetric keys or Create version for
asymmetric keys.
Enter the new key URI, then select Rotate Key for symmetric keys or
Create version for asymmetric keys.
The new key version becomes the primary version.
To create a new symmetric key version and set it as the primary key version,
use the kms keys versions create command with the --primary flag:
gcloud kms keys versions create \
--key KEY_NAME \
--keyring KEY_RING \
--location LOCATION \
--external-key-uri EXTERNAL_KEY_URI \
--primary
Replace the following:
KEY_NAME : the name of the key.
KEY_RING : the name of the key ring that contains the key.
LOCATION : the Cloud KMS location of the key ring.
EXTERNAL_KEY_URI : the key URI of the new external
key version.
To create a new asymmetric key version or to create a new symmetric key
version that isn't the primary key version, use the kms keys versions
create command:
gcloud kms keys versions create \
--key KEY_NAME \
--keyring KEY_RING \
--location LOCATION \
--external-key-uri EXTERNAL_KEY_URI
Replace the following:
KEY_NAME : the name of the key.
KEY_RING : the name of the key ring that contains the key.
LOCATION : the Cloud KMS location of the key ring.
EXTERNAL_KEY_URI : the key URI of the new external
key version.
What's next
After rotating a key, you can re-encrypt
data that was encrypted with that key.
After you re-encrypt your data, you can check whether the key version is in
use .
After you have confirmed that a key version is no longer in use, you can
destroy a key version .
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
