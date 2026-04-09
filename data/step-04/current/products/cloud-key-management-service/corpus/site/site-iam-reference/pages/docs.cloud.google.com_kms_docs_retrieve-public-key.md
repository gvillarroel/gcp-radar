---
title: "Retrieve a public key \_|\_ Cloud Key Management Service \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/kms/docs/retrieve-public-key
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/retrieve-public-key
  title: "Retrieve a public key \_|\_ Cloud Key Management Service \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Retrieve a public key | Cloud Key Management Service | Google Cloud Documentation
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
Retrieve a public key
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Retrieve a public key
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Required roles
Retrieve a public key
This page shows you how to retrieve the public key portion of an enabled
asymmetric key version.
The format of the public key depends on whether it is a post-quantum computing
(PQC) or conventional algorithm:
For non-PQC algorithms, the default format of the public key is the
Privacy-enhanced Electronic Mail (PEM) format. You can also retrieve non-PQC
public keys in the Distinguished Encoding Rules (DER) format. For more
information, see the RFC 7468 , particularly the sections
"General Considerations" and "Textual Encoding of Subject Public Key Info".
For PQC algorithms standardized by NIST ( Preview ), you can retrieve the
public key in the format identified in the NIST PCQ standards for that
algorithm. For more information, see FIPS-203 , FIPS-204 , and FIPS-205 .
The PEM and DER formats are only supported for ML-DSA keys.
For X-Wing, you can retrieve the public key in the raw bytes format
specified by the X-Wing standard .
PEM and DER formats are not supported for these keys.
Required roles
To get the permissions that
you need to retrieve a public key,
ask your administrator to grant you the
Cloud KMS CryptoKey Public Key Viewer ( roles/cloudkms.publicKeyViewer )
IAM role on your key or a parent resource.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains
the permissions required to retrieve a public key. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to retrieve a public key:
cloudkms.cryptoKeyVersions.viewPublicKey
cloudkms.locations.get
cloudkms.locations.list
resourcemanager.projects.get
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Retrieve a public key
You can specify the format in which you want to retrieve the public key.
If the format is specified, the key will be returned in the specified format
in the public_key field of the response. Otherwise, it is returned in the
pem field of the response.
To download the public key for an enabled asymmetric key version:
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
