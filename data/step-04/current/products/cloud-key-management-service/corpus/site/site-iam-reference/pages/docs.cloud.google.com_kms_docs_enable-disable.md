---
title: "Enable and disable key versions \_|\_ Cloud Key Management Service \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/enable-disable
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/enable-disable
  title: "Enable and disable key versions \_|\_ Cloud Key Management Service \_|\_\
    \ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Enable and disable key versions | Cloud Key Management Service | Google Cloud Documentation
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
Disable a key version Disable or destroy an external key
Enable a key version
Required IAM permissions
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Enable and disable key versions
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Disable a key version Disable or destroy an external key
Enable a key version
Required IAM permissions
In Cloud KMS, the cryptographic key material that you use to
encrypt, decrypt, sign, and verify data is stored in a key version. A key has
zero or more key versions. When you rotate a key, you create a new key version.
This document shows how to disable a key version. During the time that a key is
disabled, data that was encrypted with the key can't be accessed. To access the
data, you can re-enable the key version.
Unless otherwise specified in the
Service Health dashboard ,
disabling a key version is typically consistent within
one minute. Enabling a key version is nearly instant. You can also manage access
to a key version using Identity and Access Management (IAM). IAM operations
are consistent within seconds. For more information, see
Using IAM .
Caution: Disabling a key version that is required to start a container or
instance can result in service outages. It is the customer's responsibility to
ensure that a key version is safe to disable. Google is not responsible for
outages, loss of data, or compliance issues which result from a customer
disabling a key version.
You can also permanently destroy a key version .
Depending on your organization policies, you might need to disable a key version
before you can destroy it. For more information see Control key version
destruction .
Note:
Key rings can't be deleted. You can delete keys and key
versions in some circumstances, but names of deleted keys can't be reused. This ensures that the
resource identifier of a key version is unique and
always points to the original key material for that key version unless it has been destroyed.
You can store an unlimited number of key rings, enabled or disabled keys, and
enabled, disabled, or destroyed key versions.
For more information, see Pricing and Quotas .
Disable a key version
You can disable a key version in the enabled state . Before disabling a key
version, we recommend that you check whether the key is still in use. You can
view key usage tracking details for the key to see
whether it is protecting CMEK resources. If any resources are protected by the
key version that you want to disable, re-encrypt them with another key version
before disabling the key.
Caution: Key usage tracking details can be delayed or incomplete.
Familiarize yourself with the
limitations of this data.
Console gcloud C# Go Java Node.js PHP Python Ruby
More
Go to the Key Management page in the Google Cloud console.
Go to the Key Management page
Click the name of the key ring that contains the key whose key version you
will disable.
Click the key whose key version you want to disable.
Check the box next to the key version(s) that you want to disable.
Click Disable in the header.
In the confirmation prompt, click Disable .
To use Cloud KMS on the command line, first
Install or upgrade to the latest version of Google Cloud CLI .
gcloud kms keys versions disable key-version \
--key key \
--keyring key-ring \
--location location
Replace key-version with the version of the key to disable. Replace
key with the name of the key. Replace key-ring with
the name of the key ring where the key is located. Replace location
with the Cloud KMS location for the key ring.
For information on all flags and possible values, run the command with the
--help flag.
To run this code, first set up a C# development environment and
install the Cloud KMS C# SDK .
using Google.Cloud.Kms.V1 ;
using Google.Protobuf.WellKnownTypes ;
public class DisableKeyVersionSample
{
public CryptoKeyVersion DisableKeyVersion ( string projectId = "my-project" , string locationId = "us-east1" , string keyRingId = "my-key-ring" , string keyId = "my-key" , string keyVersionId = "123" )
{
// Create the client.
KeyManagementServiceClient client = KeyManagementServiceClient . Create ();
// Build the key version.
CryptoKeyVersion keyVersion = new CryptoKeyVersion
{
CryptoKeyVersionName = new CryptoKeyVersionName ( projectId , locationId , keyRingId , keyId , keyVersionId ),
State = CryptoKeyVersion . Types . CryptoKeyVersionState . Disabled ,
};
// Build the update mask.
FieldMask fieldMask = new FieldMask
{
Paths = { "state" },
};
// Call the API.
CryptoKeyVersion result = client . UpdateCryptoKeyVersion ( keyVersion , fieldMask );
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
fieldmask "google.golang.org/genproto/protobuf/field_mask"
)
// disableKeyVersion disables the specified key version on Cloud KMS.
func disableKeyVersion ( w io . Writer , name string ) error {
// name := "projects/my-project/locations/us-east1/keyRings/my-key-ring/cryptoKeys/my-key/cryptoKeyVersions/123"
// Create the client.
ctx := context . Background ()
client , err := kms . NewKeyManagementClient ( ctx )
if err != nil {
return fmt . Errorf ( "failed to create kms client: %w" , err )
}
defer client . Close ()
// Build the request.
req := & kmspb . UpdateCryptoKeyVersionRequest {
CryptoKeyVersion : & kmspb . CryptoKeyVersion {
Name : name ,
State : kmspb . CryptoKeyVersion_DISABLED ,
},
UpdateMask : & fieldmask . FieldMask {
Paths : [] string { "state" },
},
}
// Call the API.
result , err := client . UpdateCryptoKeyVersion ( ctx , req )
if err != nil {
return fmt . Errorf ( "failed to update key version: %w" , err )
}
fmt . Fprintf ( w , "Disabled key version: %s\n" , result )
return nil
}
To run this code, first set up a Java development environment and
install the Cloud KMS Java SDK .
import com.google.cloud.kms.v1. CryptoKeyVersion ;
import com.google.cloud.kms.v1. CryptoKeyVersion . CryptoKeyVersionState ;
import com.google.cloud.kms.v1. CryptoKeyVersionName ;
import com.google.cloud.kms.v1. KeyManagementServiceClient ;
import com.google.protobuf. FieldMask ;
import com.google.protobuf.util. FieldMaskUtil ;
import java.io.IOException ;
public class DisableKeyVersion {
public void disableKeyVersion () throws IOException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String locationId = "us-east1" ;
String keyRingId = "my-key-ring" ;
String keyId = "my-key" ;
String keyVersionId = "123" ;
disableKeyVersion ( projectId , locationId , keyRingId , keyId , keyVersionId );
}
// Disable a key version from use.
public void disableKeyVersion (
String projectId , String locationId , String keyRingId , String keyId , String keyVersionId )
throws IOException {
// Initialize client that will be used to send requests. This client only
// needs to be created once, and can be reused for multiple requests. After
// completing all of your requests, call the "close" method on the client to
// safely clean up any remaining background resources.
try ( KeyManagementServiceClient client = KeyManagementServiceClient . create ()) {
// Build the key version name from the project, location, key ring, key,
// and key version.
CryptoKeyVersionName keyVersionName =
CryptoKeyVersionName . of ( projectId , locationId , keyRingId , keyId , keyVersionId );
// Build the updated key version, setting it to disbaled.
CryptoKeyVersion keyVersion =
CryptoKeyVersion . newBuilder ()
. setName ( keyVersionName . toString ())
. setState ( CryptoKeyVersionState . DISABLED )
. build ();
// Create a field mask of updated values.
FieldMask fieldMask = FieldMaskUtil . fromString ( "state" );
// Disable the key version.
CryptoKeyVersion response = client . updateCryptoKeyVersion ( keyVersion , fieldMask );
System . out . printf ( "Disabled key version: %s%n" , response . getName ());
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
// Build the key version name
const versionName = client . cryptoKeyVersionPath (
projectId ,
locationId ,
keyRingId ,
keyId ,
versionId
);
async function disableKeyVersion () {
const [ version ] = await client . updateCryptoKeyVersion ({
cryptoKeyVersion : {
name : versionName ,
state : 'DISABLED' ,
},
updateMask : {
paths : [ 'state' ],
},
});
console . log ( `Disabled key version: ${ version . name } ` );
return version ;
}
return disableKeyVersion ();
To run this code, first learn about using PHP on Google Cloud and
install the Cloud KMS PHP SDK .
use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient;
use Google\Cloud\Kms\V1\CryptoKeyVersion;
use Google\Cloud\Kms\V1\CryptoKeyVersion\CryptoKeyVersionState;
use Google\Cloud\Kms\V1\UpdateCryptoKeyVersionRequest;
use Google\Protobuf\FieldMask;
function disable_key_version(
string $projectId = 'my-project',
string $locationId = 'us-east1',
string $keyRingId = 'my-key-ring',
string $keyId = 'my-key',
string $versionId = '123'
): CryptoKeyVersion {
// Create the Cloud KMS client.
$client = new KeyManagementServiceClient();
// Build the key version name.
$keyVersionName = $client->cryptoKeyVersionName($projectId, $locationId, $keyRingId, $keyId, $versionId);
// Create the updated version.
$keyVersion = (new CryptoKeyVersion())
->setName($keyVersionName)
->setState(CryptoKeyVersionState::DISABLED);
// Create the field mask.
$updateMask = (new FieldMask())
->setPaths(['state']);
// Call the API.
$updateCryptoKeyVersionRequest = (new UpdateCryptoKeyVersionRequest())
->setCryptoKeyVersion($keyVersion)
->setUpdateMask($updateMask);
$disabledVersion = $client->updateCryptoKeyVersion($updateCryptoKeyVersionRequest);
printf('Disabled key version: %s' . PHP_EOL, $disabledVersion->getName());
return $disabledVersion;
}
To run this code, first set up a Python development environment and
install the Cloud KMS Python SDK .
from google.cloud import kms
def disable_key_version (
project_id : str , location_id : str , key_ring_id : str , key_id : str , version_id : str
) - > kms . CryptoKeyVersion :
"""
Disable a key.
Args:
project_id (string): Google Cloud project ID (e.g. 'my-project').
location_id (string): Cloud KMS location (e.g. 'us-east1').
key_ring_id (string): ID of the Cloud KMS key ring (e.g. 'my-key-ring').
key_id (string): ID of the key to use (e.g. 'my-key').
version_id (string): ID of the key version to disable (e.g. '1').
Returns:
CryptoKeyVersion: The version.
"""
# Create the client.
client = kms . KeyManagementServiceClient ()
# Build the key version name.
key_version_name = client . crypto_key_version_path (
project_id , location_id , key_ring_id , key_id , version_id
)
key_version = {
"name" : key_version_name ,
"state" : kms . CryptoKeyVersion . CryptoKeyVersionState . DISABLED ,
}
# Build the update mask.
update_mask = { "paths" : [ "state" ]}
# Call the API.
disabled_version = client . update_crypto_key_version (
request = { "crypto_key_version" : key_version , "update_mask" : update_mask }
)
print ( f "Disabled key version: { disabled_version . name } " )
return disabled_version
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
# Create the updated version.
version = {
name : key_version_name ,
state : :DISABLED
}
# Create the field mask.
update_mask = { paths : [ "state" ] }
# Call the API.
disabled_version = client . update_crypto_key_version crypto_key_version : version , update_mask : update_mask
puts "Disabled key version: #{ disabled_version . name } "
After you submit the request, the state of the key version changes to disabled.
Disabled key versions are billed resources.
Disable or destroy an external key
To temporarily disable the association between a Cloud EKM key and an
external key, you can disable the Cloud EKM
key or key version. Disabling all key versions is recommended. Disabling a key
takes effect within three hours.
When you disable a key, you should also
revoke access to the key . IAM operations are
consistent within seconds. Also consider revoking the Google Cloud service
account's access in the external key management partner system.
To permanently remove the association between a Cloud EKM key and
an external key, you can
schedule the Cloud EKM key version for destruction .
After the scheduled-for-destruction period, the key is destroyed. Destroying a
key version is permanent. After the key version is destroyed, you can no longer
encrypt data or decrypt data that was encrypted with the Cloud EKM key
version. You cannot recreate a Cloud EKM key version that has been
destroyed, even if you use the same external key URI or key path. When
destroying external key material, we recommend first destroying the key or key
version in Google Cloud and then, only after the Cloud EKM key is
destroyed, destroying the key material in the external key manager.
Disabling a key or key version in Cloud KMS doesn't modify the
key in the external key management partner system.
Destroying a manually managed key version in Cloud KMS doesn't modify
the key in the external key management partner system. Destroying a coordinated external key
version in Cloud KMS destroys the internal key material and sends a
request to the external key management partner system to destroy the external key material.
Enable a key version
You can enable a key version in the disabled state .
Console gcloud C# Go Java Node.js PHP Python Ruby
More
Go to the Key Management page in the Google Cloud console.
Go to the Key Management page
Click the name of the key ring that contains the key whose key version you
will enable.
Click the key whose key version you want to enable.
Check the box next to the key version(s) that you want to enable.
Click Enable in the header.
In the confirmation prompt, click Enable .
To use Cloud KMS on the command line, first
Install or upgrade to the latest version of Google Cloud CLI .
gcloud kms keys versions enable key-version \
--key key \
--keyring key-ring \
--location location
Replace key-version with the version of the key to enable. Replace
key with the key name. Replace key-ring with
the name of the key ring where the key is located. Replace location
with the Cloud KMS location for the key ring.
For information on all flags and possible values, run the command with the
--help flag.
To run this code, first set up a C# development environment and
install the Cloud KMS C# SDK .
using Google.Cloud.Kms.V1 ;
using Google.Protobuf.WellKnownTypes ;
public class EnableKeyVersionSample
{
public CryptoKeyVersion EnableKeyVersion ( string projectId = "my-project" , string locationId = "us-east1" , string keyRingId = "my-key-ring" , string keyId = "my-key" , string keyVersionId = "123" )
{
// Create the client.
KeyManagementServiceClient client = KeyManagementServiceClient . Create ();
// Build the key version.
CryptoKeyVersion keyVersion = new CryptoKeyVersion
{
CryptoKeyVersionName = new CryptoKeyVersionName ( projectId , locationId , keyRingId , keyId , keyVersionId ),
State = CryptoKeyVersion . Types . CryptoKeyVersionState . Enabled ,
};
// Build the update mask.
FieldMask fieldMask = new FieldMask
{
Paths = { "state" },
};
// Call the API.
CryptoKeyVersion result = client . UpdateCryptoKeyVersion ( keyVersion , fieldMask );
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
fieldmask "google.golang.org/genproto/protobuf/field_mask"
)
// enableKeyVersion disables the specified key version on Cloud KMS.
func enableKeyVersion ( w io . Writer , name string ) error {
// name := "projects/my-project/locations/us-east1/keyRings/my-key-ring/cryptoKeys/my-key/cryptoKeyVersions/123"
// Create the client.
ctx := context . Background ()
client , err := kms . NewKeyManagementClient ( ctx )
if err != nil {
return fmt . Errorf ( "failed to create kms client: %w" , err )
}
defer client . Close ()
// Build the request.
req := & kmspb . UpdateCryptoKeyVersionRequest {
CryptoKeyVersion : & kmspb . CryptoKeyVersion {
Name : name ,
State : kmspb . CryptoKeyVersion_ENABLED ,
},
UpdateMask : & fieldmask . FieldMask {
Paths : [] string { "state" },
},
}
// Call the API.
result , err := client . UpdateCryptoKeyVersion ( ctx , req )
if err != nil {
return fmt . Errorf ( "failed to update key version: %w" , err )
}
fmt . Fprintf ( w , "Enabled key version: %s\n" , result )
return nil
}
To run this code, first set up a Java development environment and
install the Cloud KMS Java SDK .
import com.google.cloud.kms.v1. CryptoKeyVersion ;
import com.google.cloud.kms.v1. CryptoKeyVersion . CryptoKeyVersionState ;
import com.google.cloud.kms.v1. CryptoKeyVersionName ;
import com.google.cloud.kms.v1. KeyManagementServiceClient ;
import com.google.protobuf. FieldMask ;
import com.google.protobuf.util. FieldMaskUtil ;
import java.io.IOException ;
public class EnableKeyVersion {
public void enableKeyVersion () throws IOException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String locationId = "us-east1" ;
String keyRingId = "my-key-ring" ;
String keyId = "my-key" ;
String keyVersionId = "123" ;
enableKeyVersion ( projectId , locationId , keyRingId , keyId , keyVersionId );
}
// Enable a disabled key version to be used again.
public void enableKeyVersion (
String projectId , String locationId , String keyRingId , String keyId , String keyVersionId )
throws IOException {
// Initialize client that will be used to send requests. This client only
// needs to be created once, and can be reused for multiple requests. After
// completing all of your requests, call the "close" method on the client to
// safely clean up any remaining background resources.
try ( KeyManagementServiceClient client = KeyManagementServiceClient . create ()) {
// Build the key version name from the project, location, key ring, key,
// and key version.
CryptoKeyVersionName keyVersionName =
CryptoKeyVersionName . of ( projectId , locationId , keyRingId , keyId , keyVersionId );
// Build the updated key version, setting it to enabled.
CryptoKeyVersion keyVersion =
CryptoKeyVersion . newBuilder ()
. setName ( keyVersionName . toString ())
. setState ( CryptoKeyVersionState . ENABLED )
. build ();
// Create a field mask of updated values.
FieldMask fieldMask = FieldMaskUtil . fromString ( "state" );
// Enable the key version.
CryptoKeyVersion response = client . updateCryptoKeyVersion ( keyVersion , fieldMask );
System . out . printf ( "Enabled key version: %s%n" , response . getName ());
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
// Build the key version name
const versionName = client . cryptoKeyVersionPath (
projectId ,
locationId ,
keyRingId ,
keyId ,
versionId
);
async function enableKeyVersion () {
const [ version ] = await client . updateCryptoKeyVersion ({
cryptoKeyVersion : {
name : versionName ,
state : 'ENABLED' ,
},
updateMask : {
paths : [ 'state' ],
},
});
console . log ( `Enabled key version: ${ version . name } ` );
return version ;
}
return enableKeyVersion ();
To run this code, first learn about using PHP on Google Cloud and
install the Cloud KMS PHP SDK .
use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient;
use Google\Cloud\Kms\V1\CryptoKeyVersion;
use Google\Cloud\Kms\V1\CryptoKeyVersion\CryptoKeyVersionState;
use Google\Cloud\Kms\V1\UpdateCryptoKeyVersionRequest;
use Google\Protobuf\FieldMask;
function enable_key_version(
string $projectId = 'my-project',
string $locationId = 'us-east1',
string $keyRingId = 'my-key-ring',
string $keyId = 'my-key',
string $versionId = '123'
): CryptoKeyVersion {
// Create the Cloud KMS client.
$client = new KeyManagementServiceClient();
// Build the key version name.
$keyVersionName = $client->cryptoKeyVersionName($projectId, $locationId, $keyRingId, $keyId, $versionId);
// Create the updated version.
$keyVersion = (new CryptoKeyVersion())
->setName($keyVersionName)
->setState(CryptoKeyVersionState::ENABLED);
// Create the field mask.
$updateMask = (new FieldMask())
->setPaths(['state']);
// Call the API.
$updateCryptoKeyVersionRequest = (new UpdateCryptoKeyVersionRequest())
->setCryptoKeyVersion($keyVersion)
->setUpdateMask($updateMask);
$enabledVersion = $client->updateCryptoKeyVersion($updateCryptoKeyVersionRequest);
printf('Enabled key version: %s' . PHP_EOL, $enabledVersion->getName());
return $enabledVersion;
}
To run this code, first set up a Python development environment and
install the Cloud KMS Python SDK .
from google.cloud import kms
def enable_key_version (
project_id : str , location_id : str , key_ring_id : str , key_id : str , version_id : str
) - > kms . CryptoKeyVersion :
"""
Enable a key.
Args:
project_id (string): Google Cloud project ID (e.g. 'my-project').
location_id (string): Cloud KMS location (e.g. 'us-east1').
key_ring_id (string): ID of the Cloud KMS key ring (e.g. 'my-key-ring').
key_id (string): ID of the key to use (e.g. 'my-key').
version_id (string): ID of the key version to enable (e.g. '1').
Returns:
CryptoKeyVersion: The version.
"""
# Create the client.
client = kms . KeyManagementServiceClient ()
# Build the key version name.
key_version_name = client . crypto_key_version_path (
project_id , location_id , key_ring_id , key_id , version_id
)
key_version = {
"name" : key_version_name ,
"state" : kms . CryptoKeyVersion . CryptoKeyVersionState . ENABLED ,
}
# Build the update mask.
update_mask = { "paths" : [ "state" ]}
# Call the API.
enabled_version = client . update_crypto_key_version (
request = { "crypto_key_version" : key_version , "update_mask" : update_mask }
)
print ( f "Enabled key version: { enabled_version . name } " )
return enabled_version
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
# Create the updated version.
version = {
name : key_version_name ,
state : :ENABLED
}
# Create the field mask.
update_mask = { paths : [ "state" ] }
# Call the API.
enabled_version = client . update_crypto_key_version crypto_key_version : version , update_mask : update_mask
puts "Enabled key version: #{ enabled_version . name } "
After you submit the request, the state of the key version changes to enabled.
Required IAM permissions
To enable or disable a key version, the caller needs the
cloudkms.cryptoKeyVersions.update IAM permission on the key,
the key ring, or the project, folder, or organization.
This permission is granted to the Cloud KMS Admin role
( roles/cloudkms.admin ).
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
