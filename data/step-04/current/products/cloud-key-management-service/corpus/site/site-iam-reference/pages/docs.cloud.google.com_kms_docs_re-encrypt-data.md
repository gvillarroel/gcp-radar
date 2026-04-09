---
title: "Re-encrypting data \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/re-encrypt-data
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/re-encrypt-data
  title: "Re-encrypting data \_|\_ Cloud Key Management Service \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Re-encrypting data | Cloud Key Management Service | Google Cloud Documentation
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
Before you begin Re-encrypting data using asymmetric keys
Re-encrypting data workflow
Decrypt the data using the prior key version
Re-encrypt the data using the new primary key version
Disable or schedule destruction of the prior key version Disable an enabled key version
Schedule a key version for destruction
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Re-encrypting data
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin Re-encrypting data using asymmetric keys
Re-encrypting data workflow
Decrypt the data using the prior key version
Re-encrypt the data using the new primary key version
Disable or schedule destruction of the prior key version Disable an enabled key version
Schedule a key version for destruction
This topic shows how to re-encrypt data using a Cloud Key Management Service symmetric key.
You can adapt these examples for asymmetric keys .
If you suspect unauthorized use of a key, you should re-encrypt the data
protected by that key and then disable or schedule destruction of the prior key
version.
Before you begin
This scenario requires the following conditions.
You have already encrypted data using Cloud KMS.
The key version used for the encryption is not disabled, scheduled for
destruction, or destroyed. You use this key version to decrypt the
encrypted data.
You have already rotated keys . A key rotation creates a new primary
key version. You use the new primary key version to re-encrypt the
data.
Note: Key rotation does not re-encrypt already encrypted data with the
newly generated key version. You need to re-encrypt the data yourself, as
described in this topic.
Re-encrypting data using asymmetric keys
The examples in this topic show how to re-encrypt data using a symmetric key.
When you use a symmetric key, Cloud KMS automatically infers the
key version to use for decryption. When you use an asymmetric key, you must
specify the key version.
When following instructions for using the Google Cloud CLI, always include
the --version flag.
When following instructions for using the API, you use
CryptoKeyVersions
instead of CryptoKeys .
You can read more about encrypting and decrypting data with an asymmetric key .
The workflow for re-encrypting data with asymmetric keys is similar
to the one described in this topic.
Re-encrypting data workflow
Use the following steps to re-encrypt data and disable or schedule destruction
of the key version used for the original encryption.
Decrypt the data using the prior key version
Re-encrypt the data using the new primary key version
Disable or schedule destruction of the prior key version
Decrypt the data using the prior key version
Cloud KMS automatically uses the correct key version to
decrypt data, as long as the key version is not disabled, scheduled for
destruction, or destroyed. The following examples show how to decrypt the data.
This is the same decryption code used in Encrypting and Decrypting .
gcloud C# Go Java Node.js PHP Python Ruby API
More
To use Cloud KMS on the command line, first
Install or upgrade to the latest version of Google Cloud CLI .
gcloud kms decrypt \
--key KEY_NAME \
--keyring KEY_RING \
--location LOCATION \
--ciphertext-file FILE_TO_DECRYPT \
--plaintext-file DECRYPTED_OUTPUT
Replace the following:
KEY_NAME : the name of the key that you want to use for decryption.
KEY_RING : the name of the key ring that contains the key.
LOCATION : the Cloud KMS location that contains the key
ring.
FILE_TO_DECRYPT : the path to the file that you want to
decrypt.
DECRYPTED_OUTPUT : the path where you want to save the
decrypted output.
For information on all flags and possible values, run the command with the
--help flag.
To run this code, first set up a C# development environment and
install the Cloud KMS C# SDK .
using Google.Cloud.Kms.V1 ;
using Google.Protobuf ;
using System.Text ;
public class DecryptSymmetricSample
{
public string DecryptSymmetric (
string projectId = "my-project" , string locationId = "us-east1" , string keyRingId = "my-key-ring" , string keyId = "my-key" ,
byte [] ciphertext = null )
{
// Create the client.
KeyManagementServiceClient client = KeyManagementServiceClient . Create ();
// Build the key name.
CryptoKeyName keyName = new CryptoKeyName ( projectId , locationId , keyRingId , keyId );
// Call the API.
DecryptResponse result = client . Decrypt ( keyName , ByteString . CopyFrom ( ciphertext ));
// Get the plaintext. Cryptographic plaintexts and ciphertexts are
// always byte arrays.
byte [] plaintext = result . Plaintext . ToByteArray ();
// Return the result.
return Encoding . UTF8 . GetString ( plaintext );
}
}
To run this code, first set up a Go development environment and
install the Cloud KMS Go SDK .
import (
"context"
"fmt"
"hash/crc32"
"io"
kms "cloud.google.com/go/kms/apiv1"
"cloud.google.com/go/kms/apiv1/kmspb"
"google.golang.org/protobuf/types/known/wrapperspb"
)
// decryptSymmetric will decrypt the input ciphertext bytes using the specified symmetric key.
func decryptSymmetric ( w io . Writer , name string , ciphertext [] byte ) error {
// name := "projects/my-project/locations/us-east1/keyRings/my-key-ring/cryptoKeys/my-key"
// ciphertext := []byte("...") // result of a symmetric encryption call
// Create the client.
ctx := context . Background ()
client , err := kms . NewKeyManagementClient ( ctx )
if err != nil {
return fmt . Errorf ( "failed to create kms client: %w" , err )
}
defer client . Close ()
// Optional, but recommended: Compute ciphertext's CRC32C.
crc32c := func ( data [] byte ) uint32 {
t := crc32 . MakeTable ( crc32 . Castagnoli )
return crc32 . Checksum ( data , t )
}
ciphertextCRC32C := crc32c ( ciphertext )
// Build the request.
req := & kmspb . DecryptRequest {
Name : name ,
Ciphertext : ciphertext ,
CiphertextCrc32C : wrapperspb . Int64 ( int64 ( ciphertextCRC32C )),
}
// Call the API.
result , err := client . Decrypt ( ctx , req )
if err != nil {
return fmt . Errorf ( "failed to decrypt ciphertext: %w" , err )
}
// Optional, but recommended: perform integrity verification on result.
// For more details on ensuring E2E in-transit integrity to and from Cloud KMS visit:
// https://cloud.google.com/kms/docs/data-integrity-guidelines
if int64 ( crc32c ( result . Plaintext )) != result . PlaintextCrc32C . Value {
return fmt . Errorf ( "Decrypt: response corrupted in-transit" )
}
fmt . Fprintf ( w , "Decrypted plaintext: %s" , result . Plaintext )
return nil
}
To run this code, first set up a Java development environment and
install the Cloud KMS Java SDK .
import com.google.cloud.kms.v1. CryptoKeyName ;
import com.google.cloud.kms.v1. DecryptResponse ;
import com.google.cloud.kms.v1. KeyManagementServiceClient ;
import com.google.protobuf. ByteString ;
import java.io.IOException ;
public class DecryptSymmetric {
public void decryptSymmetric () throws IOException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String locationId = "us-east1" ;
String keyRingId = "my-key-ring" ;
String keyId = "my-key" ;
byte [] ciphertext = null ;
decryptSymmetric ( projectId , locationId , keyRingId , keyId , ciphertext );
}
// Decrypt data that was encrypted using a symmetric key.
public void decryptSymmetric (
String projectId , String locationId , String keyRingId , String keyId , byte [] ciphertext )
throws IOException {
// Initialize client that will be used to send requests. This client only
// needs to be created once, and can be reused for multiple requests. After
// completing all of your requests, call the "close" method on the client to
// safely clean up any remaining background resources.
try ( KeyManagementServiceClient client = KeyManagementServiceClient . create ()) {
// Build the key version name from the project, location, key ring, and
// key.
CryptoKeyName keyName = CryptoKeyName . of ( projectId , locationId , keyRingId , keyId );
// Decrypt the response.
DecryptResponse response = client . decrypt ( keyName , ByteString . copyFrom ( ciphertext ));
System . out . printf ( "Plaintext: %s%n" , response . getPlaintext (). toStringUtf8 ());
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
// Ciphertext must be either a Buffer object or a base-64 encoded string
// const ciphertext = Buffer.from('...');
// Imports the Cloud KMS library
const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' );
// Instantiates a client
const client = new KeyManagementServiceClient ();
// Build the key name
const keyName = client . cryptoKeyPath ( projectId , locationId , keyRingId , keyId );
// Optional, but recommended: compute ciphertext's CRC32C.
const crc32c = require ( 'fast-crc32c' );
const ciphertextCrc32c = crc32c . calculate ( ciphertext );
async function decryptSymmetric () {
const [ decryptResponse ] = await client . decrypt ({
name : keyName ,
ciphertext : ciphertext ,
ciphertextCrc32c : {
value : ciphertextCrc32c ,
},
});
// Optional, but recommended: perform integrity verification on decryptResponse.
// For more details on ensuring E2E in-transit integrity to and from Cloud KMS visit:
// https://cloud.google.com/kms/docs/data-integrity-guidelines
if (
crc32c . calculate ( decryptResponse . plaintext ) !==
Number ( decryptResponse . plaintextCrc32c . value )
) {
throw new Error ( 'Decrypt: response corrupted in-transit' );
}
const plaintext = decryptResponse . plaintext . toString ();
console . log ( `Plaintext: ${ plaintext } ` );
return plaintext ;
}
return decryptSymmetric ();
To run this code, first learn about using PHP on Google Cloud and
install the Cloud KMS PHP SDK .
use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient;
use Google\Cloud\Kms\V1\DecryptRequest;
function decrypt_symmetric(
string $projectId = 'my-project',
string $locationId = 'us-east1',
string $keyRingId = 'my-key-ring',
string $keyId = 'my-key',
string $ciphertext = '...'
) {
// Create the Cloud KMS client.
$client = new KeyManagementServiceClient();
// Build the key name.
$keyName = $client->cryptoKeyName($projectId, $locationId, $keyRingId, $keyId);
// Call the API.
$decryptRequest = (new DecryptRequest())
->setName($keyName)
->setCiphertext($ciphertext);
$decryptResponse = $client->decrypt($decryptRequest);
printf('Plaintext: %s' . PHP_EOL, $decryptResponse->getPlaintext());
return $decryptResponse;
}
To run this code, first set up a Python development environment and
install the Cloud KMS Python SDK .
from google.cloud import kms
def decrypt_symmetric (
project_id : str , location_id : str , key_ring_id : str , key_id : str , ciphertext : bytes
) - > kms . DecryptResponse :
"""
Decrypt the ciphertext using the symmetric key
Args:
project_id (string): Google Cloud project ID (e.g. 'my-project').
location_id (string): Cloud KMS location (e.g. 'us-east1').
key_ring_id (string): ID of the Cloud KMS key ring (e.g. 'my-key-ring').
key_id (string): ID of the key to use (e.g. 'my-key').
ciphertext (bytes): Encrypted bytes to decrypt.
Returns:
DecryptResponse: Response including plaintext.
"""
# Create the client.
client = kms . KeyManagementServiceClient ()
# Build the key name.
key_name = client . crypto_key_path ( project_id , location_id , key_ring_id , key_id )
# Optional, but recommended: compute ciphertext's CRC32C.
# See crc32c() function defined below.
ciphertext_crc32c = crc32c ( ciphertext )
# Call the API.
decrypt_response = client . decrypt (
request = {
"name" : key_name ,
"ciphertext" : ciphertext ,
"ciphertext_crc32c" : ciphertext_crc32c ,
}
)
# Optional, but recommended: perform integrity verification on decrypt_response.
# For more details on ensuring E2E in-transit integrity to and from Cloud KMS visit:
# https://cloud.google.com/kms/docs/data-integrity-guidelines
if not decrypt_response . plaintext_crc32c == crc32c ( decrypt_response . plaintext ):
raise Exception (
"The response received from the server was corrupted in-transit."
)
# End integrity verification
print ( f "Plaintext: { decrypt_response . plaintext !r} " )
return decrypt_response
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
# ciphertext = "..."
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
response = client . decrypt name : key_name , ciphertext : ciphertext
puts "Plaintext: #{ response . plaintext } "
These examples use curl as an HTTP client
to demonstrate using the API. For more information about access control, see
Accessing the Cloud KMS API .
Decrypted text that is returned in the JSON from Cloud KMS is
base64 encoded.
Tip : You can base64-encode or decode data
using the base64 command on Linux or macOS, or the
Base64.exe command on Windows. Programming and scripting
languages typically include libraries for base64-encoding. For command-line
examples, see Base64 Encoding in the
Cloud Vision API documentation.
To decrypt encrypted data, make a POST request and provide the appropriate
project and key information and specify the encrypted text (also known as
ciphertext ) to be decrypted in the ciphertext field of the request body.
curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING /cryptoKeys/ KEY_NAME :decrypt" \
--request "POST" \
--header "authorization: Bearer TOKEN " \
--header "content-type: application/json" \
--data "{\"ciphertext\": \" ENCRYPTED_DATA \"}"
Replace the following:
PROJECT_ID : the ID of the project that contains the key ring and
key that you want to use for decryption.
LOCATION : the Cloud KMS location that contains the key
ring.
KEY_RING : the key ring that contains the key that you want to use
for decryption.
KEY_NAME : the name of the key that you want to use for decryption.
ENCRYPTED_DATA : the encrypted data that you want
to decrypt.
Here is an example payload with base64 encoded data:
{
"ciphertext" : "CiQAhMwwBo61cHas7dDgifrUFs5zNzBJ2uZtVFq4ZPEl6fUVT4kSmQ..." ,
}
Re-encrypt the data using the new primary key version
Cloud KMS automatically uses the new primary key version to
encrypt data. The following examples show how to encrypt the data. This is the
same encryption code used in Encrypting and Decrypting .
gcloud C# Go Java Node.js PHP Python Ruby API
More
To use Cloud KMS on the command line, first
Install or upgrade to the latest version of Google Cloud CLI .
gcloud kms encrypt \
--key KEY_NAME \
--keyring KEY_RING \
--location LOCATION \
--plaintext-file FILE_TO_ENCRYPT \
--ciphertext-file ENCRYPTED_OUTPUT
Replace the following:
KEY_NAME : the name of the key that you want to use for encryption.
KEY_RING : the name of the key ring that contains the key.
LOCATION : the Cloud KMS location that contains the key
ring.
FILE_TO_ENCRYPT : the path to the file that you want to
encrypt.
ENCRYPTED_OUTPUT : the path where you want to save the
encrypted output.
For information on all flags and possible values, run the command with the
--help flag.
To run this code, first set up a C# development environment and
install the Cloud KMS C# SDK .
using Google.Cloud.Kms.V1 ;
using Google.Protobuf ;
using System.Text ;
public class EncryptSymmetricSample
{
public byte [] EncryptSymmetric (
string projectId = "my-project" , string locationId = "us-east1" , string keyRingId = "my-key-ring" , string keyId = "my-key" ,
string message = "Sample message" )
{
// Create the client.
KeyManagementServiceClient client = KeyManagementServiceClient . Create ();
// Build the key name.
CryptoKeyName keyName = new CryptoKeyName ( projectId , locationId , keyRingId , keyId );
// Convert the message into bytes. Cryptographic plaintexts and
// ciphertexts are always byte arrays.
byte [] plaintext = Encoding . UTF8 . GetBytes ( message );
// Call the API.
EncryptResponse result = client . Encrypt ( keyName , ByteString . CopyFrom ( plaintext ));
// Return the ciphertext.
return result . Ciphertext . ToByteArray ();
}
}
To run this code, first set up a Go development environment and
install the Cloud KMS Go SDK .
import (
"context"
"fmt"
"hash/crc32"
"io"
kms "cloud.google.com/go/kms/apiv1"
"cloud.google.com/go/kms/apiv1/kmspb"
"google.golang.org/protobuf/types/known/wrapperspb"
)
// encryptSymmetric encrypts the input plaintext with the specified symmetric
// Cloud KMS key.
func encryptSymmetric ( w io . Writer , name string , message string ) error {
// name := "projects/my-project/locations/us-east1/keyRings/my-key-ring/cryptoKeys/my-key"
// message := "Sample message"
// Create the client.
ctx := context . Background ()
client , err := kms . NewKeyManagementClient ( ctx )
if err != nil {
return fmt . Errorf ( "failed to create kms client: %w" , err )
}
defer client . Close ()
// Convert the message into bytes. Cryptographic plaintexts and
// ciphertexts are always byte arrays.
plaintext := [] byte ( message )
// Optional but recommended: Compute plaintext's CRC32C.
crc32c := func ( data [] byte ) uint32 {
t := crc32 . MakeTable ( crc32 . Castagnoli )
return crc32 . Checksum ( data , t )
}
plaintextCRC32C := crc32c ( plaintext )
// Build the request.
req := & kmspb . EncryptRequest {
Name : name ,
Plaintext : plaintext ,
PlaintextCrc32C : wrapperspb . Int64 ( int64 ( plaintextCRC32C )),
}
// Call the API.
result , err := client . Encrypt ( ctx , req )
if err != nil {
return fmt . Errorf ( "failed to encrypt: %w" , err )
}
// Optional, but recommended: perform integrity verification on result.
// For more details on ensuring E2E in-transit integrity to and from Cloud KMS visit:
// https://cloud.google.com/kms/docs/data-integrity-guidelines
if result . VerifiedPlaintextCrc32C == false {
return fmt . Errorf ( "Encrypt: request corrupted in-transit" )
}
if int64 ( crc32c ( result . Ciphertext )) != result . CiphertextCrc32C . Value {
return fmt . Errorf ( "Encrypt: response corrupted in-transit" )
}
fmt . Fprintf ( w , "Encrypted ciphertext: %s" , result . Ciphertext )
return nil
}
To run this code, first set up a Java development environment and
install the Cloud KMS Java SDK .
import com.google.cloud.kms.v1. CryptoKeyName ;
import com.google.cloud.kms.v1. EncryptResponse ;
import com.google.cloud.kms.v1. KeyManagementServiceClient ;
import com.google.protobuf. ByteString ;
import java.io.IOException ;
public class EncryptSymmetric {
public void encryptSymmetric () throws IOException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String locationId = "us-east1" ;
String keyRingId = "my-key-ring" ;
String keyId = "my-key" ;
String plaintext = "Plaintext to encrypt" ;
encryptSymmetric ( projectId , locationId , keyRingId , keyId , plaintext );
}
// Encrypt data with a given key.
public void encryptSymmetric (
String projectId , String locationId , String keyRingId , String keyId , String plaintext )
throws IOException {
// Initialize client that will be used to send requests. This client only
// needs to be created once, and can be reused for multiple requests. After
// completing all of your requests, call the "close" method on the client to
// safely clean up any remaining background resources.
try ( KeyManagementServiceClient client = KeyManagementServiceClient . create ()) {
// Build the key version name from the project, location, key ring, key,
// and key version.
CryptoKeyName keyVersionName = CryptoKeyName . of ( projectId , locationId , keyRingId , keyId );
// Encrypt the plaintext.
EncryptResponse response = client . encrypt ( keyVersionName , ByteString . copyFromUtf8 ( plaintext ));
System . out . printf ( "Ciphertext: %s%n" , response . getCiphertext (). toStringUtf8 ());
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
// const plaintextBuffer = Buffer.from('...');
// Imports the Cloud KMS library
const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' );
// Instantiates a client
const client = new KeyManagementServiceClient ();
// Build the key name
const keyName = client . cryptoKeyPath ( projectId , locationId , keyRingId , keyId );
// Optional, but recommended: compute plaintext's CRC32C.
const crc32c = require ( 'fast-crc32c' );
const plaintextCrc32c = crc32c . calculate ( plaintextBuffer );
async function encryptSymmetric () {
const [ encryptResponse ] = await client . encrypt ({
name : keyName ,
plaintext : plaintextBuffer ,
plaintextCrc32c : {
value : plaintextCrc32c ,
},
});
const ciphertext = encryptResponse . ciphertext ;
// Optional, but recommended: perform integrity verification on encryptResponse.
// For more details on ensuring E2E in-transit integrity to and from Cloud KMS visit:
// https://cloud.google.com/kms/docs/data-integrity-guidelines
if ( ! encryptResponse . verifiedPlaintextCrc32c ) {
throw new Error ( 'Encrypt: request corrupted in-transit' );
}
if (
crc32c . calculate ( ciphertext ) !==
Number ( encryptResponse . ciphertextCrc32c . value )
) {
throw new Error ( 'Encrypt: response corrupted in-transit' );
}
console . log ( `Ciphertext: ${ ciphertext . toString ( 'base64' ) } ` );
return ciphertext ;
}
return encryptSymmetric ();
To run this code, first learn about using PHP on Google Cloud and
install the Cloud KMS PHP SDK .
use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient;
use Google\Cloud\Kms\V1\EncryptRequest;
function encrypt_symmetric(
string $projectId = 'my-project',
string $locationId = 'us-east1',
string $keyRingId = 'my-key-ring',
string $keyId = 'my-key',
string $plaintext = '...'
) {
// Create the Cloud KMS client.
$client = new KeyManagementServiceClient();
// Build the key name.
$keyName = $client->cryptoKeyName($projectId, $locationId, $keyRingId, $keyId);
// Call the API.
$encryptRequest = (new EncryptRequest())
->setName($keyName)
->setPlaintext($plaintext);
$encryptResponse = $client->encrypt($encryptRequest);
printf('Ciphertext: %s' . PHP_EOL, $encryptResponse->getCiphertext());
return $encryptResponse;
}
To run this code, first set up a Python development environment and
install the Cloud KMS Python SDK .
# Import base64 for printing the ciphertext.
import base64
# Import the client library.
from google.cloud import kms
def encrypt_symmetric (
project_id : str , location_id : str , key_ring_id : str , key_id : str , plaintext : str
) - > bytes :
"""
Encrypt plaintext using a symmetric key.
Args:
project_id (string): Google Cloud project ID (e.g. 'my-project').
location_id (string): Cloud KMS location (e.g. 'us-east1').
key_ring_id (string): ID of the Cloud KMS key ring (e.g. 'my-key-ring').
key_id (string): ID of the key to use (e.g. 'my-key').
plaintext (string): message to encrypt
Returns:
bytes: Encrypted ciphertext.
"""
# Convert the plaintext to bytes.
plaintext_bytes = plaintext . encode ( "utf-8" )
# Optional, but recommended: compute plaintext's CRC32C.
# See crc32c() function defined below.
plaintext_crc32c = crc32c ( plaintext_bytes )
# Create the client.
client = kms . KeyManagementServiceClient ()
# Build the key name.
key_name = client . crypto_key_path ( project_id , location_id , key_ring_id , key_id )
# Call the API.
encrypt_response = client . encrypt (
request = {
"name" : key_name ,
"plaintext" : plaintext_bytes ,
"plaintext_crc32c" : plaintext_crc32c ,
}
)
# Optional, but recommended: perform integrity verification on encrypt_response.
# For more details on ensuring E2E in-transit integrity to and from Cloud KMS visit:
# https://cloud.google.com/kms/docs/data-integrity-guidelines
if not encrypt_response . verified_plaintext_crc32c :
raise Exception ( "The request sent to the server was corrupted in-transit." )
if not encrypt_response . ciphertext_crc32c == crc32c ( encrypt_response . ciphertext ):
raise Exception (
"The response received from the server was corrupted in-transit."
)
# End integrity verification
print ( f "Ciphertext: { base64 . b64encode ( encrypt_response . ciphertext ) } " )
return encrypt_response
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
# plaintext = "..."
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
response = client . encrypt name : key_name , plaintext : plaintext
puts "Ciphertext: #{ Base64 . strict_encode64 response . ciphertext } "
These examples use curl as an HTTP client
to demonstrate using the API. For more information about access control, see
Accessing the Cloud KMS API .
When using JSON and the REST API, content must be base64 encoded before it can
be encrypted by Cloud KMS.
Tip : You can base64-encode or decode data
using the base64 command on Linux or macOS, or the
Base64.exe command on Windows. Programming and scripting
languages typically include libraries for base64-encoding. For command-line
examples, see Base64 Encoding in the
Cloud Vision API documentation.
To encrypt data, make a POST request and provide the appropriate project and
key information and specify the base64 encoded text to be encrypted in the
plaintext field of the request body.
curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING /cryptoKeys/ KEY_NAME :encrypt" \
--request "POST" \
--header "authorization: Bearer TOKEN " \
--header "content-type: application/json" \
--data "{\"plaintext\": \" PLAINTEXT_TO_ENCRYPT \"}"
Replace the following:
PROJECT_ID : the ID of the project that contains the key ring and
key that you want to use for encryption.
LOCATION : the Cloud KMS location that contains the key
ring.
KEY_RING : the key ring that contains the key that you want to use
for encryption.
KEY_NAME : the name of the key that you want to use for encryption.
PLAINTEXT_TO_ENCRYPT : the plaintext data that you want
to encrypt. The plaintext must be base64 encoded before you call the
encrypt method.
Here is an example payload with base64 encoded data:
{
"plaintext" : "U3VwZXIgc2VjcmV0IHRleHQgdGhhdCBtdXN0IGJlIGVuY3J5cHRlZAo=" ,
}
Disable or schedule destruction of the prior key version
If you rotated your key in response to a suspected incident, after you
have re-encrypted the data, disable or schedule destruction of the
prior key version.
Disable an enabled key version
Only a key version which is Enabled can be Disabled. This is done with the
method UpdateCryptoKeyVersion .
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
Schedule a key version for destruction
Only key versions which are Enabled or Disabled can be Scheduled for
destruction. This
is done with the method
DestroyCryptoKeyVersion .
Caution: Key material isn't immediately destroyed. Instead, the key
version stays scheduled for destruction for the configured scheduled for
destruction duration. After this period has ended, the key material is
automatically destroyed. There is no way to override this safety fallback.
If you decide that you don't want the destruction to occur, you can
restore
the key version . However, after the configured scheduled for
destruction duration, destruction isn't reversible. Any data encrypted with
this key version can't be decrypted.
Console gcloud C# Go Java Node.js PHP Python Ruby API
More
In the Google Cloud console, go to the
Key Management page.
Go to Key Management
Check the box next to the key version that you want to schedule for
destruction.
Click Destroy in the header.
In the confirmation prompt, enter the key name and then click Schedule
Destruction .
To use Cloud KMS on the command line, first
Install or upgrade to the latest version of Google Cloud CLI .
gcloud kms keys versions destroy KEY_VERSION \
--key KEY_NAME \
--keyring KEY_RING \
--location LOCATION
Replace the following:
KEY_VERSION : the version number of the key version that you want
to destroy.
KEY_NAME : the name of the key for which you want to destroy a key
version.
KEY_RING : the name of the key ring that contains the key.
LOCATION : the Cloud KMS location of the key ring.
For information on all flags and possible values, run the command with the
--help flag.
To run this code, first set up a C# development environment and
install the Cloud KMS C# SDK .
using Google.Cloud.Kms.V1 ;
public class DestroyKeyVersionSample
{
public CryptoKeyVersion DestroyKeyVersion (
string projectId = "my-project" , string locationId = "us-east1" , string keyRingId = "my-key-ring" , string keyId = "my-key" , string keyVersionId = "123" )
{
// Create the client.
KeyManagementServiceClient client = KeyManagementServiceClient . Create ();
// Build the key version name.
CryptoKeyVersionName keyVersionName = new CryptoKeyVersionName ( projectId , locationId , keyRingId , keyId , keyVersionId );
// Call the API.
CryptoKeyVersion result = client . DestroyCryptoKeyVersion ( keyVersionName );
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
// destroyKeyVersion marks a specified key version for deletion. The key can be
// restored if requested within 24 hours.
func destroyKeyVersion ( w io . Writer , name string ) error {
// name := "projects/my-project/locations/us-east1/keyRings/my-key-ring/cryptoKeys/my-key/cryptoKeyVersions/123"
// Create the client.
ctx := context . Background ()
client , err := kms . NewKeyManagementClient ( ctx )
if err != nil {
return fmt . Errorf ( "failed to create kms client: %w" , err )
}
defer client . Close ()
// Build the request.
req := & kmspb . DestroyCryptoKeyVersionRequest {
Name : name ,
}
// Call the API.
result , err := client . DestroyCryptoKeyVersion ( ctx , req )
if err != nil {
return fmt . Errorf ( "failed to destroy key version: %w" , err )
}
fmt . Fprintf ( w , "Destroyed key version: %s\n" , result )
return nil
}
To run this code, first set up a Java development environment and
install the Cloud KMS Java SDK .
import com.google.cloud.kms.v1. CryptoKeyVersion ;
import com.google.cloud.kms.v1. CryptoKeyVersionName ;
import com.google.cloud.kms.v1. KeyManagementServiceClient ;
import java.io.IOException ;
public class DestroyKeyVersion {
public void destroyKeyVersion () throws IOException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String locationId = "us-east1" ;
String keyRingId = "my-key-ring" ;
String keyId = "my-key" ;
String keyVersionId = "123" ;
destroyKeyVersion ( projectId , locationId , keyRingId , keyId , keyVersionId );
}
// Schedule destruction of the given key version.
public void destroyKeyVersion (
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
// Destroy the key version.
CryptoKeyVersion response = client . destroyCryptoKeyVersion ( keyVersionName );
System . out . printf ( "Destroyed key version: %s%n" , response . getName ());
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
async function destroyKeyVersion () {
const [ version ] = await client . destroyCryptoKeyVersion ({
name : versionName ,
});
console . log ( `Destroyed key version: ${ version . name } ` );
return version ;
}
return destroyKeyVersion ();
To run this code, first learn about using PHP on Google Cloud and
install the Cloud KMS PHP SDK .
use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient;
use Google\Cloud\Kms\V1\DestroyCryptoKeyVersionRequest;
function destroy_key_version(
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
$destroyCryptoKeyVersionRequest = (new DestroyCryptoKeyVersionRequest())
->setName($keyVersionName);
$destroyedVersion = $client->destroyCryptoKeyVersion($destroyCryptoKeyVersionRequest);
printf('Destroyed key version: %s' . PHP_EOL, $destroyedVersion->getName());
return $destroyedVersion;
}
To run this code, first set up a Python development environment and
install the Cloud KMS Python SDK .
from google.cloud import kms
def destroy_key_version (
project_id : str , location_id : str , key_ring_id : str , key_id : str , version_id : str
) - > kms . CryptoKeyVersion :
"""
Schedule destruction of the given key version.
Args:
project_id (string): Google Cloud project ID (e.g. 'my-project').
location_id (string): Cloud KMS location (e.g. 'us-east1').
key_ring_id (string): ID of the Cloud KMS key ring (e.g. 'my-key-ring').
key_id (string): ID of the key to use (e.g. 'my-key').
version_id (string): ID of the key version to destroy (e.g. '1').
Returns:
CryptoKeyVersion: The version.
"""
# Create the client.
client = kms . KeyManagementServiceClient ()
# Build the key version name.
key_version_name = client . crypto_key_version_path (
project_id , location_id , key_ring_id , key_id , version_id
)
# Call the API.
destroyed_version = client . destroy_crypto_key_version (
request = { "name" : key_version_name }
)
print ( f "Destroyed key version: { destroyed_version . name } " )
return destroyed_version
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
destroyed_version = client . destroy_crypto_key_version name : key_version_name
puts "Destroyed key version: #{ destroyed_version . name } "
These examples use curl as an HTTP client
to demonstrate using the API. For more information about access control, see
Accessing the Cloud KMS API .
Destroy a key version by calling the
CryptoKeyVersions.destroy
method.
curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING /cryptoKeys/ KEY_NAME /cryptoKeyVersions/ KEY_VERSION :destroy" \
--request "POST" \
--header "authorization: Bearer TOKEN "
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
