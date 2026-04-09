---
title: "Creating and validating digital signatures \_|\_ Cloud Key Management Service\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/create-validate-signatures
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/create-validate-signatures
  title: "Creating and validating digital signatures \_|\_ Cloud Key Management Service\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Creating and validating digital signatures | Cloud Key Management Service | Google Cloud Documentation
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
Before you begin
Data versus digest Raw algorithms
ECDSA support for other hash algorithms
Creating a signature
Validating an elliptic curve signature
Validating an RSA signature
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Creating and validating digital signatures
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Data versus digest Raw algorithms
ECDSA support for other hash algorithms
Creating a signature
Validating an elliptic curve signature
Validating an RSA signature
This topic provides information about creating and validating digital signatures
based on asymmetric keys.
A digital signature is created using the private key portion of an asymmetric
key. The signature is validated using the public key portion of the same
asymmetric key.
Before you begin
When creating digital signatures, you must use a key that has the
key purpose of ASYMMETRIC_SIGN . When you create the key , use
ASYMMETRIC_SIGN .
To validate a signature, you need to know the full algorithm that was
used when creating the key. For command-line instructions below that use the
openssl command, you need to pass this information to those commands.
Grant the cloudkms.cryptoKeyVersions.useToSign permission on the asymmetric
key to the user or service that will perform the signing. You can learn about
permissions in Cloud Key Management Service at Permissions and roles .
If you are going to validate a signature, grant
cloudkms.cryptoKeyVersions.viewPublicKey permission on the asymmetric key to
the user or service that will download the public key to use for validation.
If you are going to use the command line, install OpenSSL if you do not
already have it. If you use Cloud Shell , OpenSSL is already installed.
Data versus digest
The input provided for AsymmetricSign requests can be passed through the
data field or the digest field. These fields cannot be both specified at
the same time. There are some algorithms that require the data field, such as
raw algorithms and signing
with a Cloud External Key Manager key .
Raw algorithms
"Raw" algorithms, identified by the RSA_SIGN_RAW_ prefix, are a
variant of PKCS #1 signing that omits encoding into a DigestInfo. In the
variant:
A digest is computed over the message that will be signed.
PKCS #1 padding is applied to the digest directly.
A signature of the padded digest is computed, using the RSA private key.
To use these algorithms:
The raw data needs to be provided (instead of a digest) as part of the data
field.
The data has a length limit of 11 bytes fewer than the RSA key size. For
example, PKCS #1 with a 2048-bit RSA key can sign at most 245 bytes.
Grant the cloudkms.expertRawPKCS1 role to the appropriate user or service.
You can learn about permissions in Cloud Key Management Service at
Permissions and roles .
By using raw algorithms, you can also sign a digest type for which
a predefined algorithm is not available. For example, you can use an
RSA_SIGN_RAW_2048 key to sign a SHA-512 PKCS #1 DigestInfo structure that
you already computed externally. This process creates the same results as
a standard RSA_SIGN_PKCS1_2048_SHA512 algorithm.
ECDSA support for other hash algorithms
Our ECDSA signing algorithms have the general format:
EC_SIGN_ ELLIPTIC_CURVE _ [DIGEST_ALGORITHM]
DIGEST_ALGORITHM has the value SHA256 , SHA384 , or SHA512 .
Because the hash is performed before you create the signature, these signing
algorithms can also be used with digests other than SHA, such as Keccak. To use
a Keccak digest, provide a Keccak hash value and use the SHA digest algorithm
with the same length. For example, you can use a KECCAK256 digest in a request
with the EC_SIGN_P256_SHA256 algorithm.
Creating a signature
gcloud C# Go Java Node.js PHP Python Ruby API
More
To use Cloud KMS on the command line, first
Install or upgrade to the latest version of Google Cloud CLI .
gcloud kms asymmetric-sign \
--version key-version \
--key key \
--keyring key-ring \
--location location \
--digest-algorithm digest-algorithm \
--input-file input-file \
--signature-file signature-file
Replace key-version with the version of the key to to use for signing.
Replace key with the key name. Replace key-ring with
the name of the key ring where the key is located. Replace location
with the Cloud KMS location the key ring. Replace
digest-algorithm with the algorithm to use. Omit
digest-algorithm to send input-file to
Cloud KMS to sign. Replace input-file and
signature-file with the local paths for the file to sign and the
signature file.
For information on all flags and possible values, run the command with the
--help flag.
To run this code, first set up a C# development environment and
install the Cloud KMS C# SDK .
using Google.Cloud.Kms.V1 ;
using Google.Protobuf ;
using System.Security.Cryptography ;
using System.Text ;
public class SignAsymmetricSample
{
public byte [] SignAsymmetric (
string projectId = "my-project" , string locationId = "us-east1" , string keyRingId = "my-key-ring" , string keyId = "my-key" , string keyVersionId = "123" ,
string message = "Sample message" )
{
// Create the client.
KeyManagementServiceClient client = KeyManagementServiceClient . Create ();
// Build the key version name.
CryptoKeyVersionName keyVersionName = new CryptoKeyVersionName ( projectId , locationId , keyRingId , keyId , keyVersionId );
// Convert the message into bytes. Cryptographic plaintexts and
// ciphertexts are always byte arrays.
byte [] plaintext = Encoding . UTF8 . GetBytes ( message );
// Calculate the digest.
SHA256 sha256 = SHA256 . Create ();
byte [] hash = sha256 . ComputeHash ( plaintext );
// Build the digest.
//
// Note: Key algorithms will require a varying hash function. For
// example, EC_SIGN_P384_SHA384 requires SHA-384.
Digest digest = new Digest
{
Sha256 = ByteString . CopyFrom ( hash ),
};
// Call the API.
AsymmetricSignResponse result = client . AsymmetricSign ( keyVersionName , digest );
// Get the signature.
byte [] signature = result . Signature . ToByteArray ();
// Return the result.
return signature ;
}
}
To run this code, first set up a Go development environment and
install the Cloud KMS Go SDK .
import (
"context"
"crypto/sha256"
"fmt"
"hash/crc32"
"io"
kms "cloud.google.com/go/kms/apiv1"
"cloud.google.com/go/kms/apiv1/kmspb"
"google.golang.org/protobuf/types/known/wrapperspb"
)
// signAsymmetric will sign a plaintext message using a saved asymmetric private
// key stored in Cloud KMS.
func signAsymmetric ( w io . Writer , name string , message string ) error {
// name := "projects/my-project/locations/us-east1/keyRings/my-key-ring/cryptoKeys/my-key/cryptoKeyVersions/123"
// message := "my message"
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
// Calculate the digest of the message.
digest := sha256 . New ()
if _ , err := digest . Write ( plaintext ); err != nil {
return fmt . Errorf ( "failed to create digest: %w" , err )
}
// Optional but recommended: Compute digest's CRC32C.
crc32c := func ( data [] byte ) uint32 {
t := crc32 . MakeTable ( crc32 . Castagnoli )
return crc32 . Checksum ( data , t )
}
digestCRC32C := crc32c ( digest . Sum ( nil ))
// Build the signing request.
//
// Note: Key algorithms will require a varying hash function. For example,
// EC_SIGN_P384_SHA384 requires SHA-384.
req := & kmspb . AsymmetricSignRequest {
Name : name ,
Digest : & kmspb . Digest {
Digest : & kmspb . Digest_Sha256 {
Sha256 : digest . Sum ( nil ),
},
},
DigestCrc32C : wrapperspb . Int64 ( int64 ( digestCRC32C )),
}
// Call the API.
result , err := client . AsymmetricSign ( ctx , req )
if err != nil {
return fmt . Errorf ( "failed to sign digest: %w" , err )
}
// Optional, but recommended: perform integrity verification on result.
// For more details on ensuring E2E in-transit integrity to and from Cloud KMS visit:
// https://cloud.google.com/kms/docs/data-integrity-guidelines
if result . VerifiedDigestCrc32C == false {
return fmt . Errorf ( "AsymmetricSign: request corrupted in-transit" )
}
if result . Name != req . Name {
return fmt . Errorf ( "AsymmetricSign: request corrupted in-transit" )
}
if int64 ( crc32c ( result . Signature )) != result . SignatureCrc32C . Value {
return fmt . Errorf ( "AsymmetricSign: response corrupted in-transit" )
}
fmt . Fprintf ( w , "Signed digest: %s" , result . Signature )
return nil
}
To run this code, first set up a Java development environment and
install the Cloud KMS Java SDK .
import com.google.cloud.kms.v1. AsymmetricSignResponse ;
import com.google.cloud.kms.v1. CryptoKeyVersionName ;
import com.google.cloud.kms.v1. Digest ;
import com.google.cloud.kms.v1. KeyManagementServiceClient ;
import com.google.protobuf. ByteString ;
import java.io.IOException ;
import java.nio.charset.StandardCharsets ;
import java.security.GeneralSecurityException ;
import java.security.MessageDigest ;
public class SignAsymmetric {
public void signAsymmetric () throws IOException , GeneralSecurityException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String locationId = "us-east1" ;
String keyRingId = "my-key-ring" ;
String keyId = "my-key" ;
String keyVersionId = "123" ;
String message = "my message" ;
signAsymmetric ( projectId , locationId , keyRingId , keyId , keyVersionId , message );
}
// Get the public key associated with an asymmetric key.
public void signAsymmetric (
String projectId ,
String locationId ,
String keyRingId ,
String keyId ,
String keyVersionId ,
String message )
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
// Convert the message into bytes. Cryptographic plaintexts and
// ciphertexts are always byte arrays.
byte [] plaintext = message . getBytes ( StandardCharsets . UTF_8 );
// Calculate the digest.
MessageDigest sha256 = MessageDigest . getInstance ( "SHA-256" );
byte [] hash = sha256 . digest ( plaintext );
// Build the digest object.
Digest digest = Digest . newBuilder (). setSha256 ( ByteString . copyFrom ( hash )). build ();
// Sign the digest.
AsymmetricSignResponse result = client . asymmetricSign ( keyVersionName , digest );
// Get the signature.
byte [] signature = result . getSignature (). toByteArray ();
System . out . printf ( "Signature %s%n" , signature );
}
}
}
To run this code, first set up a Node.js development environment and
install the Cloud KMS Node.js SDK .
//
// TODO(developer): Uncomment these variables before running the sample.
//
// const projectId = 'your-project-id';
// const locationId = 'us-east1';
// const keyRingId = 'my-key-ring';
// const keyId = 'my-key';
// const versionId = '123';
// const message = Buffer.from('...');
// Imports the Cloud KMS library
const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' );
// Instantiates a client
const client = new KeyManagementServiceClient ();
// Build the version name
const versionName = client . cryptoKeyVersionPath (
projectId ,
locationId ,
keyRingId ,
keyId ,
versionId
);
async function signAsymmetric () {
// Create a digest of the message. The digest needs to match the digest
// configured for the Cloud KMS key.
const crypto = require ( 'crypto' );
const hash = crypto . createHash ( 'sha256' );
hash . update ( message );
const digest = hash . digest ();
// Optional but recommended: Compute digest's CRC32C.
// Ensure fast-crc32c has been installed, `npm i fast-crc32c`.
const crc32c = require ( 'fast-crc32c' );
const digestCrc32c = crc32c . calculate ( digest );
// Sign the message with Cloud KMS
const [ signResponse ] = await client . asymmetricSign ({
name : versionName ,
digest : {
sha256 : digest ,
},
digestCrc32c : {
value : digestCrc32c ,
},
});
// Optional, but recommended: perform integrity verification on signResponse.
// For more details on ensuring E2E in-transit integrity to and from Cloud KMS visit:
// https://cloud.google.com/kms/docs/data-integrity-guidelines
if ( signResponse . name !== versionName ) {
throw new Error ( 'AsymmetricSign: request corrupted in-transit' );
}
if ( ! signResponse . verifiedDigestCrc32c ) {
throw new Error ( 'AsymmetricSign: request corrupted in-transit' );
}
if (
crc32c . calculate ( signResponse . signature ) !==
Number ( signResponse . signatureCrc32c . value )
) {
throw new Error ( 'AsymmetricSign: response corrupted in-transit' );
}
// Example of how to display signature. Because the signature is in a binary
// format, you need to encode the output before printing it to a console or
// displaying it on a screen.
const encoded = signResponse . signature . toString ( 'base64' );
console . log ( `Signature: ${ encoded } ` );
return signResponse . signature ;
}
return signAsymmetric ();
To run this code, first learn about using PHP on Google Cloud and
install the Cloud KMS PHP SDK .
use Google\Cloud\Kms\V1\AsymmetricSignRequest;
use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient;
use Google\Cloud\Kms\V1\Digest;
function sign_asymmetric(
string $projectId = 'my-project',
string $locationId = 'us-east1',
string $keyRingId = 'my-key-ring',
string $keyId = 'my-key',
string $versionId = '123',
string $message = '...'
) {
// Create the Cloud KMS client.
$client = new KeyManagementServiceClient();
// Build the key version name.
$keyVersionName = $client->cryptoKeyVersionName($projectId, $locationId, $keyRingId, $keyId, $versionId);
// Calculate the hash.
$hash = hash('sha256', $message, true);
// Build the digest.
//
// Note: Key algorithms will require a varying hash function. For
// example, EC_SIGN_P384_SHA384 requires SHA-384.
$digest = (new Digest())
->setSha256($hash);
// Call the API.
$asymmetricSignRequest = (new AsymmetricSignRequest())
->setName($keyVersionName)
->setDigest($digest);
$signResponse = $client->asymmetricSign($asymmetricSignRequest);
printf('Signature: %s' . PHP_EOL, $signResponse->getSignature());
return $signResponse;
}
To run this code, first set up a Python development environment and
install the Cloud KMS Python SDK .
# Import base64 for printing the ciphertext.
import base64
# Import hashlib for calculating hashes.
import hashlib
# Import the client library.
from google.cloud import kms
def sign_asymmetric (
project_id : str ,
location_id : str ,
key_ring_id : str ,
key_id : str ,
version_id : str ,
message : str ,
) - > kms . AsymmetricSignResponse :
"""
Sign a message using the private key part of an asymmetric key.
Args:
project_id (string): Google Cloud project ID (e.g. 'my-project').
location_id (string): Cloud KMS location (e.g. 'us-east1').
key_ring_id (string): ID of the Cloud KMS key ring (e.g. 'my-key-ring').
key_id (string): ID of the key to use (e.g. 'my-key').
version_id (string): Version to use (e.g. '1').
message (string): Message to sign.
Returns:
AsymmetricSignResponse: Signature.
"""
# Create the client.
client = kms . KeyManagementServiceClient ()
# Build the key version name.
key_version_name = client . crypto_key_version_path (
project_id , location_id , key_ring_id , key_id , version_id
)
# Convert the message to bytes.
message_bytes = message . encode ( "utf-8" )
# Calculate the hash.
hash_ = hashlib . sha256 ( message_bytes ) . digest ()
# Build the digest.
#
# Note: Key algorithms will require a varying hash function. For
# example, EC_SIGN_P384_SHA384 requires SHA-384.
digest = { "sha256" : hash_ }
# Optional, but recommended: compute digest's CRC32C.
# See crc32c() function defined below.
digest_crc32c = crc32c ( hash_ )
# Call the API
sign_response = client . asymmetric_sign (
request = {
"name" : key_version_name ,
"digest" : digest ,
"digest_crc32c" : digest_crc32c ,
}
)
# Optional, but recommended: perform integrity verification on sign_response.
# For more details on ensuring E2E in-transit integrity to and from Cloud KMS visit:
# https://cloud.google.com/kms/docs/data-integrity-guidelines
if not sign_response . verified_digest_crc32c :
raise Exception ( "The request sent to the server was corrupted in-transit." )
if not sign_response . name == key_version_name :
raise Exception ( "The request sent to the server was corrupted in-transit." )
if not sign_response . signature_crc32c == crc32c ( sign_response . signature ):
raise Exception (
"The response received from the server was corrupted in-transit."
)
# End integrity verification
print ( f "Signature: { base64 . b64encode ( sign_response . signature ) !r} " )
return sign_response
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
# message = "my message"
# Require the library.
require "google/cloud/kms"
# Require digest.
require "digest"
# Create the client.
client = Google :: Cloud :: Kms . key_management_service
# Build the key version name.
key_version_name = client . crypto_key_version_path project : project_id ,
location : location_id ,
key_ring : key_ring_id ,
crypto_key : key_id ,
crypto_key_version : version_id
# Calculate the hash.
#
# Note: Key algorithms will require a varying hash function. For
# example, EC_SIGN_P384_SHA384 requires SHA-384.
digest = { sha256 : Digest :: SHA256 . digest ( message ) }
# Call the API.
sign_response = client . asymmetric_sign name : key_version_name , digest : digest
puts "Signature: #{ Base64 . strict_encode64 sign_response . signature } "
These examples use curl as an HTTP client
to demonstrate using the API. For more information about access control, see
Accessing the Cloud KMS API .
Use the
CryptoKeyVersions.asymmetricSign
method to perform the signing. The response from this method contains the
base64-encoded signature.
Tip : You can base64-encode or decode data
using the base64 command on Linux or macOS, or the
Base64.exe command on Windows. Programming and scripting
languages typically include libraries for base64-encoding. For command-line
examples, see Base64 Encoding in the
Cloud Vision API documentation.
Validating an elliptic curve signature
gcloud C# Go Java Node.js PHP Python Ruby API
More
To use Cloud KMS on the command line, first
Install or upgrade to the latest version of Google Cloud CLI .
Get the public key
gcloud kms keys versions get-public-key key-version \
--key key \
--keyring key-ring \
--location location \
--output-file output-file
Replace key-version with the key version. Replace key with
the name of the key. Replace key-ring with the name of the key ring
where the key is located. Replace location with the
Cloud KMS location for the key ring. Replace output-file
with the file path to save the public key on the local system.
For information on all flags and possible values, run the command with the
--help flag.
Verify the signature
The OpenSSL commands to validate the signature depend on what signature
type was created. For example, to validate a SHA-256 elliptic curve
signature using OpenSSL, you must specify -sha256 . To validate a SHA-384
elliptical curve signature, you must specify -sha384 .
openssl dgst \
-sha256 \
-verify public-key-file \
-signature signature-file \
message-file
Replace the variables with your own values:
public-key-file . Path to a file that contains the public key
(e.g. "./my-key.pub" ).
signature-file . Path to a file that contains the signature to
verify (e.g. "./my-data.sig" ).
message-file . Path to a file that contains the message (e.g.
"./my-data.txt" ).
If the signature is valid, the command outputs the string Verified OK .
For information on all flags and possible values, run the command with the
help subcommand.
To run this code, first set up a C# development environment and
install the Cloud KMS C# SDK .
public class VerifyAsymmetricSignatureEcSample
{
// Cloud KMS returns signatures in a DER-encoded format. .NET requires
// signatures to be in IEEE 1363 format, and converting between these formats
// is a few hundred lines of code.
//
// https://github.com/dotnet/runtime/pull/1612 exposes these helpers, but will
// not be available until .NET 5. Until then, you will need to use an external
// library or package to validate signatures.
}
To run this code, first set up a Go development environment and
install the Cloud KMS Go SDK .
import (
"context"
"crypto/ecdsa"
"crypto/sha256"
"crypto/x509"
"encoding/asn1"
"encoding/pem"
"fmt"
"io"
"math/big"
kms "cloud.google.com/go/kms/apiv1"
"cloud.google.com/go/kms/apiv1/kmspb"
)
// verifyAsymmetricSignatureEC will verify that an 'EC_SIGN_P256_SHA256' signature is
// valid for a given message.
func verifyAsymmetricSignatureEC ( w io . Writer , name string , message , signature [] byte ) error {
// name := "projects/my-project/locations/us-east1/keyRings/my-key-ring/cryptoKeys/my-key/cryptoKeyVersions/123"
// message := "my message"
// signature := []byte("...") // Response from a sign request
// Create the client.
ctx := context . Background ()
client , err := kms . NewKeyManagementClient ( ctx )
if err != nil {
return fmt . Errorf ( "failed to create kms client: %w" , err )
}
defer client . Close ()
// Retrieve the public key from KMS.
response , err := client . GetPublicKey ( ctx , & kmspb . GetPublicKeyRequest { Name : name })
if err != nil {
return fmt . Errorf ( "failed to get public key: %w" , err )
}
// Parse the public key. Note, this example assumes the public key is in the
// ECDSA format.
block , _ := pem . Decode ([] byte ( response . Pem ))
publicKey , err := x509 . ParsePKIXPublicKey ( block . Bytes )
if err != nil {
return fmt . Errorf ( "failed to parse public key: %w" , err )
}
ecKey , ok := publicKey .( * ecdsa . PublicKey )
if ! ok {
return fmt . Errorf ( "public key is not elliptic curve" )
}
// Verify Elliptic Curve signature.
var parsedSig struct { R , S * big . Int }
if _ , err = asn1 . Unmarshal ( signature , & parsedSig ); err != nil {
return fmt . Errorf ( "asn1.Unmarshal: %w" , err )
}
digest := sha256 . Sum256 ( message )
if ! ecdsa . Verify ( ecKey , digest [:], parsedSig . R , parsedSig . S ) {
return fmt . Errorf ( "failed to verify signature" )
}
fmt . Fprintf ( w , "Verified signature!" )
return nil
}
To run this code, first set up a Java development environment and
install the Cloud KMS Java SDK .
import com.google.cloud.kms.v1. CryptoKeyVersionName ;
import com.google.cloud.kms.v1. KeyManagementServiceClient ;
import com.google.cloud.kms.v1. PublicKey ;
import java.io.BufferedReader ;
import java.io.IOException ;
import java.io.StringReader ;
import java.nio.charset.StandardCharsets ;
import java.security.GeneralSecurityException ;
import java.security.KeyFactory ;
import java.security.Signature ;
import java.security.spec.X509EncodedKeySpec ;
import java.util.Base64 ;
import java.util.stream.Collectors ;
public class VerifyAsymmetricEc {
public void verifyAsymmetricEc () throws IOException , GeneralSecurityException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String locationId = "us-east1" ;
String keyRingId = "my-key-ring" ;
String keyId = "my-key" ;
String keyVersionId = "123" ;
String message = "my message" ;
byte [] signature = null ;
verifyAsymmetricEc ( projectId , locationId , keyRingId , keyId , keyVersionId , message , signature );
}
// CPD-OFF
// Verify the signature of a message signed with an RSA key.
public void verifyAsymmetricEc (
String projectId ,
String locationId ,
String keyRingId ,
String keyId ,
String keyVersionId ,
String message ,
byte [] signature )
throws IOException , GeneralSecurityException {
// Initialize client that will be used to send requests. This client only
// needs to be created once, and can be reused for multiple requests. After
// completing all of your requests, call the "close" method on the client to
// safely clean up any remaining background resources.
try ( KeyManagementServiceClient client = KeyManagementServiceClient . create ()) {
// Build the name from the project, location, and key ring, key, and key version.
CryptoKeyVersionName keyVersionName =
CryptoKeyVersionName . of ( projectId , locationId , keyRingId , keyId , keyVersionId );
// Convert the message into bytes. Cryptographic plaintexts and
// ciphertexts are always byte arrays.
byte [] plaintext = message . getBytes ( StandardCharsets . UTF_8 );
// Get the public key.
PublicKey publicKey = client . getPublicKey ( keyVersionName );
// Convert the public PEM key to a DER key (see helper below).
byte [] derKey = convertPemToDer ( publicKey . getPem ());
X509EncodedKeySpec keySpec = new X509EncodedKeySpec ( derKey );
java . security . PublicKey ecKey = KeyFactory . getInstance ( "EC" ). generatePublic ( keySpec );
// Verify the 'RSA_SIGN_PKCS1_2048_SHA256' signature.
// For other key algorithms:
// http://docs.oracle.com/javase/7/docs/technotes/guides/security/StandardNames.html#Signature
Signature ecVerify = Signature . getInstance ( "SHA256withECDSA" );
ecVerify . initVerify ( ecKey );
ecVerify . update ( plaintext );
// Verify the signature.
boolean verified = ecVerify . verify ( signature );
System . out . printf ( "Signature verified: %s" , verified );
}
}
// Converts a base64-encoded PEM certificate like the one returned from Cloud
// KMS into a DER formatted certificate for use with the Java APIs.
private byte [] convertPemToDer ( String pem ) {
BufferedReader bufferedReader = new BufferedReader ( new StringReader ( pem ));
String encoded =
bufferedReader
. lines ()
. filter ( line - > ! line . startsWith ( "-----BEGIN" ) && ! line . startsWith ( "-----END" ))
. collect ( Collectors . joining ());
return Base64 . getDecoder (). decode ( encoded );
}
}
To run this code, first set up a Node.js development environment and
install the Cloud KMS Node.js SDK .
//
// TODO(developer): Uncomment these variables before running the sample.
//
// const projectId = 'your-project-id';
// const locationId = 'us-east1';
// const keyRingId = 'my-key-ring';
// const keyId = 'my-key';
// const versionId = '1';
// const message = 'my message to verify';
// const signatureBuffer = Buffer.from('...');
// Imports the Cloud KMS library
const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' );
// Instantiates a client
const client = new KeyManagementServiceClient ();
// Build the key name
const versionName = client . cryptoKeyVersionPath (
projectId ,
locationId ,
keyRingId ,
keyId ,
versionId
);
async function verifyAsymmetricSignatureEc () {
// Get public key
const [ publicKey ] = await client . getPublicKey ({
name : versionName ,
});
// Create the verifier. The algorithm must match the algorithm of the key.
const crypto = require ( 'crypto' );
const verify = crypto . createVerify ( 'sha256' );
verify . update ( message );
verify . end ();
// Build the key object
const key = {
key : publicKey . pem ,
};
// Verify the signature using the public key
const verified = verify . verify ( key , signatureBuffer );
return verified ;
}
return verifyAsymmetricSignatureEc ();
To run this code, first learn about using PHP on Google Cloud and
install the Cloud KMS PHP SDK .
use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient;
use Google\Cloud\Kms\V1\GetPublicKeyRequest;
function verify_asymmetric_ec(
string $projectId = 'my-project',
string $locationId = 'us-east1',
string $keyRingId = 'my-key-ring',
string $keyId = 'my-key',
string $versionId = '123',
string $message = '...',
string $signature = '...'
): bool {
// Create the Cloud KMS client.
$client = new KeyManagementServiceClient();
// Build the key version name.
$keyVersionName = $client->cryptoKeyVersionName($projectId, $locationId, $keyRingId, $keyId, $versionId);
// Get the public key.
$getPublicKeyRequest = (new GetPublicKeyRequest())
->setName($keyVersionName);
$publicKey = $client->getPublicKey($getPublicKeyRequest);
// Verify the signature. The hash algorithm must correspond to the key
// algorithm. The openssl_verify command returns 1 on success, 0 on falure.
$verified = openssl_verify($message, $signature, $publicKey->getPem(), OPENSSL_ALGO_SHA256) === 1;
printf('Signature verified: %s', $verified);
return $verified;
}
To run this code, first set up a Python development environment and
install the Cloud KMS Python SDK .
# Import hashlib.
import hashlib
# Import cryptographic helpers from the cryptography package.
from cryptography.exceptions import InvalidSignature
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.primitives.asymmetric import ec
from cryptography.hazmat.primitives.asymmetric import utils
# Import the client library.
from google.cloud import kms
def verify_asymmetric_ec (
project_id : str ,
location_id : str ,
key_ring_id : str ,
key_id : str ,
version_id : str ,
message : str ,
signature : str ,
) - > bool :
"""
Verify the signature of an message signed with an asymmetric EC key.
Args:
project_id (string): Google Cloud project ID (e.g. 'my-project').
location_id (string): Cloud KMS location (e.g. 'us-east1').
key_ring_id (string): ID of the Cloud KMS key ring (e.g. 'my-key-ring').
key_id (string): ID of the key to use (e.g. 'my-key').
version_id (string): ID of the version to use (e.g. '1').
message (string): Original message (e.g. 'my message')
signature (bytes): Signature from a sign request.
Returns:
bool: True if verified, False otherwise
"""
# Convert the message to bytes.
message_bytes = message . encode ( "utf-8" )
# Create the client.
client = kms . KeyManagementServiceClient ()
# Build the key version name.
key_version_name = client . crypto_key_version_path (
project_id , location_id , key_ring_id , key_id , version_id
)
# Get the public key.
public_key = client . get_public_key ( request = { "name" : key_version_name })
# Extract and parse the public key as a PEM-encoded EC key.
pem = public_key . pem . encode ( "utf-8" )
ec_key = serialization . load_pem_public_key ( pem , default_backend ())
hash_ = hashlib . sha256 ( message_bytes ) . digest ()
# Attempt to verify.
try :
sha256 = hashes . SHA256 ()
ec_key . verify ( signature , hash_ , ec . ECDSA ( utils . Prehashed ( sha256 )))
print ( "Signature verified" )
return True
except InvalidSignature :
print ( "Signature failed to verify" )
return False
To run this code, first set up a Ruby development environment and
install the Cloud KMS Ruby SDK .
# TODO(developer): uncomment these values before running the sample.
# project_id = "my-project"
# location_id = "us-east1"
# key_ring_id = "my-key-ring"
# key_id = "my-key"
# version_id = "123"
# message = "my message"
# signature = "..."
# Require the library.
require "google/cloud/kms"
require "openssl"
# Create the client.
client = Google :: Cloud :: Kms . key_management_service
# Build the key version name.
key_version_name = client . crypto_key_version_path project : project_id ,
location : location_id ,
key_ring : key_ring_id ,
crypto_key : key_id ,
crypto_key_version : version_id
# Get the public key.
public_key = client . get_public_key name : key_version_name
# Parse the public key.
ec_key = OpenSSL :: PKey :: EC . new public_key . pem
# Verify the signature.
verified = ec_key . verify "sha256" , signature , message
puts "Verified: #{ verified } "
These examples use curl as an HTTP client
to demonstrate using the API. For more information about access control, see
Accessing the Cloud KMS API .
Use the
CryptoKeyVersions.getPublicKey
method to retrieve the public key, and then use the commands shown for the
command-line example to validate the signature.
Validating an RSA signature
gcloud C# Go Java Node.js PHP Python Ruby API
More
To use Cloud KMS on the command line, first
Install or upgrade to the latest version of Google Cloud CLI .
Get the public key
gcloud kms keys versions get-public-key key-version \
--key key \
--keyring key-ring \
--location location \
--output-file output-file
Replace key-version with the key version. Replace key with
the name of the key. Replace key-ring with the name of the key ring
where the key is located. Replace location with the
Cloud KMS location for the key ring. Replace output-file
with the path to save the public key on the local system.
For information on all flags and possible values, run the command with the
--help flag.
Verify the signature
The OpenSSL commands to validate the signature depend on what signature type was
created. For example, to validate a SHA-256 RSA signature with PSS padding, you
must specify -sha256 and -sigopt rsa_padding_mode:pss . To validate a SHA-512
RSA signature with PSS padding, you must specify -sha512 and -sigopt
rsa_padding_mode:pss .
openssl dgst \
-sha256 \
-sigopt rsa_padding_mode:pss \
-sigopt rsa_pss_saltlen:-1 \
-verify public-key-file \
-signature signature-file \
message-file
Replace the variables with your own values:
public-key-file . Path to a file that contains the public key
(e.g. "./my-key.pub" ).
signature-file . Path to a file that contains the signature to
verify (e.g. "./my-data.sig" ).
message-file . Path to a file that contains the message (e.g.
"./my-data.txt" ).
If the signature is valid, the command outputs the string Verified OK .
For information on all flags and possible values, run the command with the
help subcommand.
To run this code, first set up a C# development environment and
install the Cloud KMS C# SDK .
using Google.Cloud.Kms.V1 ;
using System ;
using System.Security.Cryptography ;
using System.Text ;
public class VerifyAsymmetricSignatureRsaSample
{
public bool VerifyAsymmetricSignatureRsa (
string projectId = "my-project" , string locationId = "us-east1" , string keyRingId = "my-key-ring" , string keyId = "my-key" , string keyVersionId = "123" ,
string message = "my message" ,
byte [] signature = null )
{
// Build the key version name.
CryptoKeyVersionName keyVersionName = new CryptoKeyVersionName ( projectId , locationId , keyRingId , keyId , keyVersionId );
// Calculate the digest of the message.
SHA256 sha256 = SHA256 . Create ();
byte [] digest = sha256 . ComputeHash ( Encoding . UTF8 . GetBytes ( message ));
// Get the public key.
KeyManagementServiceClient client = KeyManagementServiceClient . Create ();
PublicKey publicKey = client . GetPublicKey ( keyVersionName );
// Split the key into blocks and base64-decode the PEM parts.
string [] blocks = publicKey . Pem . Split ( "-" , StringSplitOptions . RemoveEmptyEntries );
byte [] pem = Convert . FromBase64String ( blocks [ 1 ]);
// Create a new RSA key.
RSA rsa = RSA . Create ();
rsa . ImportSubjectPublicKeyInfo ( pem , out _ );
// Verify the signature.
bool verified = rsa . VerifyHash ( digest , signature , HashAlgorithmName . SHA256 , RSASignaturePadding . Pss );
// Return the result.
return verified ;
}
}
To run this code, first set up a Go development environment and
install the Cloud KMS Go SDK .
import (
"context"
"crypto"
"crypto/rsa"
"crypto/sha256"
"crypto/x509"
"encoding/pem"
"fmt"
"io"
kms "cloud.google.com/go/kms/apiv1"
"cloud.google.com/go/kms/apiv1/kmspb"
)
// verifyAsymmetricSignatureRSA will verify that an 'RSA_SIGN_PSS_2048_SHA256' signature
// is valid for a given message.
func verifyAsymmetricSignatureRSA ( w io . Writer , name string , message , signature [] byte ) error {
// name := "projects/my-project/locations/us-east1/keyRings/my-key-ring/cryptoKeys/my-key/cryptoKeyVersions/123"
// message := "my message"
// signature := []byte("...") // Response from a sign request
// Create the client.
ctx := context . Background ()
client , err := kms . NewKeyManagementClient ( ctx )
if err != nil {
return fmt . Errorf ( "failed to create kms client: %w" , err )
}
defer client . Close ()
// Retrieve the public key from KMS.
response , err := client . GetPublicKey ( ctx , & kmspb . GetPublicKeyRequest { Name : name })
if err != nil {
return fmt . Errorf ( "failed to get public key: %w" , err )
}
// Parse the public key. Note, this example assumes the public key is in the
// RSA format.
block , _ := pem . Decode ([] byte ( response . Pem ))
publicKey , err := x509 . ParsePKIXPublicKey ( block . Bytes )
if err != nil {
return fmt . Errorf ( "failed to parse public key: %w" , err )
}
rsaKey , ok := publicKey .( * rsa . PublicKey )
if ! ok {
return fmt . Errorf ( "public key is not rsa" )
}
// Verify the RSA signature.
digest := sha256 . Sum256 ( message )
if err := rsa . VerifyPSS ( rsaKey , crypto . SHA256 , digest [:], signature , & rsa . PSSOptions {
SaltLength : len ( digest ),
Hash : crypto . SHA256 ,
}); err != nil {
return fmt . Errorf ( "failed to verify signature: %w" , err )
}
fmt . Fprint ( w , "Verified signature!\n" )
return nil
}
To run this code, first set up a Java development environment and
install the Cloud KMS Java SDK .
import com.google.cloud.kms.v1. CryptoKeyVersionName ;
import com.google.cloud.kms.v1. KeyManagementServiceClient ;
import com.google.cloud.kms.v1. PublicKey ;
import java.io.BufferedReader ;
import java.io.IOException ;
import java.io.StringReader ;
import java.nio.charset.StandardCharsets ;
import java.security.GeneralSecurityException ;
import java.security.KeyFactory ;
import java.security.Signature ;
import java.security.spec.X509EncodedKeySpec ;
import java.util.Base64 ;
import java.util.stream.Collectors ;
public class VerifyAsymmetricRsa {
public void verifyAsymmetricRsa () throws IOException , GeneralSecurityException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String locationId = "us-east1" ;
String keyRingId = "my-key-ring" ;
String keyId = "my-key" ;
String keyVersionId = "123" ;
String message = "my message" ;
byte [] signature = null ;
verifyAsymmetricRsa ( projectId , locationId , keyRingId , keyId , keyVersionId , message , signature );
}
// Verify the signature of a message signed with an RSA key.
public void verifyAsymmetricRsa (
String projectId ,
String locationId ,
String keyRingId ,
String keyId ,
String keyVersionId ,
String message ,
byte [] signature )
throws IOException , GeneralSecurityException {
// Initialize client that will be used to send requests. This client only
// needs to be created once, and can be reused for multiple requests. After
// completing all of your requests, call the "close" method on the client to
// safely clean up any remaining background resources.
try ( KeyManagementServiceClient client = KeyManagementServiceClient . create ()) {
// Build the name from the project, location, and key ring, key, and key version.
CryptoKeyVersionName keyVersionName =
CryptoKeyVersionName . of ( projectId , locationId , keyRingId , keyId , keyVersionId );
// Convert the message into bytes. Cryptographic plaintexts and
// ciphertexts are always byte arrays.
byte [] plaintext = message . getBytes ( StandardCharsets . UTF_8 );
// Get the public key.
PublicKey publicKey = client . getPublicKey ( keyVersionName );
// Convert the public PEM key to a DER key (see helper below).
byte [] derKey = convertPemToDer ( publicKey . getPem ());
X509EncodedKeySpec keySpec = new X509EncodedKeySpec ( derKey );
java . security . PublicKey rsaKey = KeyFactory . getInstance ( "RSA" ). generatePublic ( keySpec );
// Verify the 'RSA_SIGN_PKCS1_2048_SHA256' signature.
// For other key algorithms:
// http://docs.oracle.com/javase/7/docs/technotes/guides/security/StandardNames.html#Signature
Signature rsaVerify = Signature . getInstance ( "SHA256withRSA" );
rsaVerify . initVerify ( rsaKey );
rsaVerify . update ( plaintext );
// Verify the signature.
boolean verified = rsaVerify . verify ( signature );
System . out . printf ( "Signature verified: %s" , verified );
}
}
// Converts a base64-encoded PEM certificate like the one returned from Cloud
// KMS into a DER formatted certificate for use with the Java APIs.
private byte [] convertPemToDer ( String pem ) {
BufferedReader bufferedReader = new BufferedReader ( new StringReader ( pem ));
String encoded =
bufferedReader
. lines ()
. filter ( line - > ! line . startsWith ( "-----BEGIN" ) && ! line . startsWith ( "-----END" ))
. collect ( Collectors . joining ());
return Base64 . getDecoder (). decode ( encoded );
}
}
To run this code, first set up a Node.js development environment and
install the Cloud KMS Node.js SDK .
//
// TODO(developer): Uncomment these variables before running the sample.
//
// const projectId = 'your-project-id';
// const locationId = 'us-east1';
// const keyRingId = 'my-key-ring';
// const keyId = 'my-key';
// const versionId = '1';
// const message = 'my message to verify';
// const signatureBuffer = Buffer.from('...');
// Imports the Cloud KMS library
const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' );
// Instantiates a client
const client = new KeyManagementServiceClient ();
// Build the key name
const versionName = client . cryptoKeyVersionPath (
projectId ,
locationId ,
keyRingId ,
keyId ,
versionId
);
async function verifyAsymmetricSignatureRsa () {
// Get public key
const [ publicKey ] = await client . getPublicKey ({
name : versionName ,
});
// Create the verifier. The algorithm must match the algorithm of the key.
const crypto = require ( 'crypto' );
const verify = crypto . createVerify ( 'sha256' );
verify . update ( message );
verify . end ();
// Build the key object
const key = {
key : publicKey . pem ,
padding : crypto . constants . RSA_PKCS1_PSS_PADDING ,
};
// Verify the signature using the public key
const verified = verify . verify ( key , signatureBuffer );
return verified ;
}
return verifyAsymmetricSignatureRsa ();
To run this code, first learn about using PHP on Google Cloud and
install the Cloud KMS PHP SDK .
function verify_asymmetric_rsa(
string $projectId = 'my-project',
string $locationId = 'us-east1',
string $keyRingId = 'my-key-ring',
string $keyId = 'my-key',
string $versionId = '123',
string $message = '...',
string $signature = '...'
): void {
// PHP has limited support for asymmetric encryption operations.
// Specifically, openssl_public_encrypt() does not allow customizing
// algorithms or padding. Thus, it is not currently possible to use PHP
// core for asymmetric operations on RSA keys.
//
// Third party libraries like phpseclib may provide the required
// functionality. Google does not endorse this external library.
}
To run this code, first set up a Python development environment and
install the Cloud KMS Python SDK .
# Import hashlib.
import hashlib
# Import cryptographic helpers from the cryptography package.
from cryptography.exceptions import InvalidSignature
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.primitives.asymmetric import padding
from cryptography.hazmat.primitives.asymmetric import utils
# Import the client library.
from google.cloud import kms
def verify_asymmetric_rsa (
project_id : str ,
location_id : str ,
key_ring_id : str ,
key_id : str ,
version_id : str ,
message : str ,
signature : str ,
) - > bool :
"""
Verify the signature of an message signed with an asymmetric RSA key.
Args:
project_id (string): Google Cloud project ID (e.g. 'my-project').
location_id (string): Cloud KMS location (e.g. 'us-east1').
key_ring_id (string): ID of the Cloud KMS key ring (e.g. 'my-key-ring').
key_id (string): ID of the key to use (e.g. 'my-key').
version_id (string): ID of the version to use (e.g. '1').
message (string): Original message (e.g. 'my message')
signature (bytes): Signature from a sign request.
Returns:
bool: True if verified, False otherwise
"""
# Convert the message to bytes.
message_bytes = message . encode ( "utf-8" )
# Create the client.
client = kms . KeyManagementServiceClient ()
# Build the key version name.
key_version_name = client . crypto_key_version_path (
project_id , location_id , key_ring_id , key_id , version_id
)
# Get the public key.
public_key = client . get_public_key ( request = { "name" : key_version_name })
# Extract and parse the public key as a PEM-encoded RSA key.
pem = public_key . pem . encode ( "utf-8" )
rsa_key = serialization . load_pem_public_key ( pem , default_backend ())
hash_ = hashlib . sha256 ( message_bytes ) . digest ()
# Attempt to verify.
try :
sha256 = hashes . SHA256 ()
pad = padding . PKCS1v15 ()
rsa_key . verify ( signature , hash_ , pad , utils . Prehashed ( sha256 ))
print ( "Signature verified" )
return True
except InvalidSignature :
print ( "Signature failed to verify" )
return False
To run this code, first set up a Ruby development environment and
install the Cloud KMS Ruby SDK .
# TODO(developer): uncomment these values before running the sample.
# project_id = "my-project"
# location_id = "us-east1"
# key_ring_id = "my-key-ring"
# key_id = "my-key"
# version_id = "123"
# message = "my message"
# signature = "..."
# Require the library.
require "google/cloud/kms"
require "openssl"
# Create the client.
client = Google :: Cloud :: Kms . key_management_service
# Build the key version name.
key_version_name = client . crypto_key_version_path project : project_id ,
location : location_id ,
key_ring : key_ring_id ,
crypto_key : key_id ,
crypto_key_version : version_id
# Get the public key.
public_key = client . get_public_key name : key_version_name
# Parse the public key.
rsa_key = OpenSSL :: PKey :: RSA . new public_key . pem
# Verify the signature.
#
# Note: The verify_pss() method only exists in Ruby 2.5+.
verified = rsa_key . verify_pss "sha256" , signature , message , salt_length : :digest , mgf1_hash : "sha256"
puts "Verified: #{ verified } "
These examples use curl as an HTTP client
to demonstrate using the API. For more information about access control, see
Accessing the Cloud KMS API .
Use the
CryptoKeyVersions.getPublicKey
method to retrieve the public key, and then use the commands shown for the
command-line example to validate the signature.
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
