---
title: "Encrypting and decrypting data with an asymmetric key \_|\_ Cloud Key Management\
  \ Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/encrypt-decrypt-rsa
  title: "Encrypting and decrypting data with an asymmetric key \_|\_ Cloud Key Management\
    \ Service \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Encrypting and decrypting data with an asymmetric key | Cloud Key Management Service | Google Cloud Documentation
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
Access control to the key
Encrypt data
Decrypt data
Troubleshooting incorrect key purpose: ASYMMETRIC_SIGN
invalid parameter when decrypting on macOS
data too large for key size
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Encrypting and decrypting data with an asymmetric key
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Access control to the key
Encrypt data
Decrypt data
Troubleshooting incorrect key purpose: ASYMMETRIC_SIGN
invalid parameter when decrypting on macOS
data too large for key size
This topic provides information about creating and using a key for asymmetric
encryption using an RSA key. If you want to use asymmetric keys for creating and
validating signatures, see Creating and validating digital signatures . If
you want to use symmetric keys for encryption and decryption, see
Encrypting and decrypting data .
Asymmetric encryption uses the public key portion of the asymmetric key and
decryption uses the private key portion of the key. Cloud Key Management Service
provides functionality to retrieve the public key and functionality to decrypt
ciphertext that was encrypted with the public key. Cloud KMS does
not allow direct access to the private key.
Before you begin
This topic provides examples that run at the command line. To simplify using
the examples, use Cloud Shell . The encryption example uses
OpenSSL , which is pre-installed on Cloud Shell.
Create an asymmetric key with key purpose of ASYMMETRIC_DECRYPT .
To see which algorithms are supported for key purpose ASYMMETRIC_DECRYPT , see
Asymmetric encryption algorithms . You cannot follow this procedure with
a key with purpose of ASYMMETRIC_SIGN .
If you are going to use the command line, install OpenSSL if you do not
already have it. If you use Cloud Shell , OpenSSL is already installed.
macOS users:
The version of OpenSSL installed on macOS does not support the flags used to
decrypt data in this topic. To follow these steps on macOS,
install OpenSSL from Homebrew .
Access control to the key
For a user or service that will retrieve the public key, grant the
cloudkms.cryptoKeyVersions.viewPublicKey permission on the asymmetric key. The
public key is required for encrypting data.
For a user or service that will decrypt data that was encrypted with the
public key, grant the cloudkms.cryptoKeyVersions.useToDecrypt permission on
the asymmetric key.
Learn about permissions and roles in Cloud KMS at
Permissions and Roles .
Encrypt data
To encrypt data using an asymmetric encryption key, retrieve the public key and
use the public key to encrypt the data.
Note: The plaintext data you want to encrypt is limited in size depending on
the size of the key. For details on supported payload sizes,
see data too large for key size .
gcloud C# Go Java Node.js PHP Python Ruby
More
This sample requires OpenSSL to be
installed on your local system.
Download public key
Download the public key:
gcloud kms keys versions get-public-key key-version \
--key key \
--keyring key-ring \
--location location \
--output-file public-key-path
Replace key-version with the key version that has the public key.
Replace key with the name of the key. Replace key-ring
with the name of the key ring where the key is located. Replace
location with the Cloud KMS location for the
key ring. Replace public-key-path with the location to save the
public key on the local system.
Encrypt data
Encrypt data using the public key you just downloaded and save the output to
a file:
openssl pkeyutl -in cleartext-data-input-file \
-encrypt \
-pubin \
-inkey public-key-path \
-pkeyopt rsa_padding_mode:oaep \
-pkeyopt rsa_oaep_md:sha256 \
-pkeyopt rsa_mgf1_md:sha256 \
> encrypted-data-output-file
Replace cleartext-data-input-file with the path and file name to
encrypt.
Replace public-key-path with the path and file name where you
downloaded the public key.
Replace encrypted-data-output-file with the path and file name
to save the encrypted data.
To run this code, first set up a C# development environment and
install the Cloud KMS C# SDK .
using Google.Cloud.Kms.V1 ;
using System ;
using System.Security.Cryptography ;
using System.Text ;
public class EncryptAsymmetricSample
{
public byte [] EncryptAsymmetric (
string projectId = "my-project" , string locationId = "us-east1" , string keyRingId = "my-key-ring" , string keyId = "my-key" , string keyVersionId = "123" ,
string message = "Sample message" )
{
// Create the client.
KeyManagementServiceClient client = KeyManagementServiceClient . Create ();
// Build the key version name.
CryptoKeyVersionName keyVersionName = new CryptoKeyVersionName ( projectId , locationId , keyRingId , keyId , keyVersionId );
// Get the public key.
PublicKey publicKey = client . GetPublicKey ( keyVersionName );
// Split the key into blocks and base64-decode the PEM parts.
string [] blocks = publicKey . Pem . Split ( "-" , StringSplitOptions . RemoveEmptyEntries );
byte [] pem = Convert . FromBase64String ( blocks [ 1 ]);
// Create a new RSA key.
RSA rsa = RSA . Create ();
rsa . ImportSubjectPublicKeyInfo ( pem , out _ );
// Convert the message into bytes. Cryptographic plaintexts and
// ciphertexts are always byte arrays.
byte [] plaintext = Encoding . UTF8 . GetBytes ( message );
// Encrypt the data.
byte [] ciphertext = rsa . Encrypt ( plaintext , RSAEncryptionPadding . OaepSHA256 );
return ciphertext ;
}
}
To use Cloud KMS on the command line, first
Install or upgrade to the latest version of Google Cloud CLI .
import (
"context"
"crypto/rand"
"crypto/rsa"
"crypto/sha256"
"crypto/x509"
"encoding/pem"
"fmt"
"io"
kms "cloud.google.com/go/kms/apiv1"
"cloud.google.com/go/kms/apiv1/kmspb"
)
// encryptAsymmetric encrypts data on your local machine using an
// 'RSA_DECRYPT_OAEP_2048_SHA256' public key retrieved from Cloud KMS.
func encryptAsymmetric ( w io . Writer , name string , message string ) error {
// name := "projects/my-project/locations/us-east1/keyRings/my-key-ring/cryptoKeys/my-key/cryptoKeyVersions/123"
// message := "Sample message"
// Create the client.
ctx := context . Background ()
client , err := kms . NewKeyManagementClient ( ctx )
if err != nil {
return fmt . Errorf ( "failed to create kms client: %w" , err )
}
defer client . Close ()
// Retrieve the public key from Cloud KMS. This is the only operation that
// involves Cloud KMS. The remaining operations take place on your local
// machine.
response , err := client . GetPublicKey ( ctx , & kmspb . GetPublicKeyRequest {
Name : name ,
})
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
// Convert the message into bytes. Cryptographic plaintexts and
// ciphertexts are always byte arrays.
plaintext := [] byte ( message )
// Encrypt data using the RSA public key.
ciphertext , err := rsa . EncryptOAEP ( sha256 . New (), rand . Reader , rsaKey , plaintext , nil )
if err != nil {
return fmt . Errorf ( "rsa.EncryptOAEP: %w" , err )
}
fmt . Fprintf ( w , "Encrypted ciphertext: %s" , ciphertext )
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
import java.security.spec.MGF1ParameterSpec ;
import java.security.spec.X509EncodedKeySpec ;
import java.util.Base64 ;
import java.util.stream.Collectors ;
import javax.crypto.Cipher ;
import javax.crypto.spec.OAEPParameterSpec ;
import javax.crypto.spec.PSource ;
public class EncryptAsymmetric {
public void encryptAsymmetric () throws IOException , GeneralSecurityException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String locationId = "us-east1" ;
String keyRingId = "my-key-ring" ;
String keyId = "my-key" ;
String keyVersionId = "123" ;
String plaintext = "Plaintext to encrypt" ;
encryptAsymmetric ( projectId , locationId , keyRingId , keyId , keyVersionId , plaintext );
}
// Encrypt data that was encrypted using the public key component of the given
// key version.
public void encryptAsymmetric (
String projectId ,
String locationId ,
String keyRingId ,
String keyId ,
String keyVersionId ,
String plaintext )
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
// Convert the public PEM key to a DER key (see helper below).
byte [] derKey = convertPemToDer ( publicKey . getPem ());
X509EncodedKeySpec keySpec = new X509EncodedKeySpec ( derKey );
java . security . PublicKey rsaKey = KeyFactory . getInstance ( "RSA" ). generatePublic ( keySpec );
// Encrypt plaintext for the 'RSA_DECRYPT_OAEP_2048_SHA256' key.
// For other key algorithms:
// https://docs.oracle.com/javase/7/docs/api/javax/crypto/Cipher.html
Cipher cipher = Cipher . getInstance ( "RSA/ECB/OAEPWithSHA-256AndMGF1Padding" );
OAEPParameterSpec oaepParams =
new OAEPParameterSpec (
"SHA-256" , "MGF1" , MGF1ParameterSpec . SHA256 , PSource . PSpecified . DEFAULT );
cipher . init ( Cipher . ENCRYPT_MODE , rsaKey , oaepParams );
byte [] ciphertext = cipher . doFinal ( plaintext . getBytes ( StandardCharsets . UTF_8 ));
System . out . printf ( "Ciphertext: %s%n" , ciphertext );
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
// const projectId = 'my-project';
// const locationId = 'us-east1';
// const keyRingId = 'my-key-ring';
// const keyId = 'my-key';
// const versionId = '123';
// const plaintextBuffer = Buffer.from('...');
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
async function encryptAsymmetric () {
// Get public key from Cloud KMS
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
// Import and setup crypto
const crypto = require ( 'crypto' );
// Encrypt plaintext locally using the public key. This example uses a key
// that was configured with sha256 hash with OAEP padding. Update these
// values to match the Cloud KMS key.
//
// NOTE: In Node < 12, this function does not properly consume the OAEP
// padding and thus produces invalid ciphertext. If you are using Node to do
// public key encryption, please use version 12+.
const ciphertextBuffer = crypto . publicEncrypt (
{
key : publicKey . pem ,
oaepHash : 'sha256' ,
padding : crypto . constants . RSA_PKCS1_OAEP_PADDING ,
},
plaintextBuffer
);
console . log ( `Ciphertext: ${ ciphertextBuffer . toString ( 'base64' ) } ` );
return ciphertextBuffer ;
}
return encryptAsymmetric ();
To run this code, first learn about using PHP on Google Cloud and
install the Cloud KMS PHP SDK .
function encrypt_asymmetric(
string $projectId = 'my-project',
string $locationId = 'us-east1',
string $keyRingId = 'my-key-ring',
string $keyId = 'my-key',
string $versionId = '123',
string $plaintext = '...'
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
# Import base64 for printing the ciphertext.
import base64
# Import cryptographic helpers from the cryptography package.
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives import serialization
from cryptography.hazmat.primitives.asymmetric import padding
# Import the client library.
from google.cloud import kms
def encrypt_asymmetric (
project_id : str ,
location_id : str ,
key_ring_id : str ,
key_id : str ,
version_id : str ,
plaintext : str ,
) - > bytes :
"""
Encrypt plaintext using the public key portion of an asymmetric key.
Args:
project_id (string): Google Cloud project ID (e.g. 'my-project').
location_id (string): Cloud KMS location (e.g. 'us-east1').
key_ring_id (string): ID of the Cloud KMS key ring (e.g. 'my-key-ring').
key_id (string): ID of the key to use (e.g. 'my-key').
version_id (string): ID of the key version to use (e.g. '1').
plaintext (string): message to encrypt
Returns:
bytes: Encrypted ciphertext.
"""
# Convert the plaintext to bytes.
plaintext_bytes = plaintext . encode ( "utf-8" )
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
# Construct the padding. Note that the padding differs based on key choice.
sha256 = hashes . SHA256 ()
mgf = padding . MGF1 ( algorithm = sha256 )
pad = padding . OAEP ( mgf = mgf , algorithm = sha256 , label = None )
# Encrypt the data using the public key.
ciphertext = rsa_key . encrypt ( plaintext_bytes , pad )
print ( f "Ciphertext: { base64 . b64encode ( ciphertext ) !r} " )
return ciphertext
To run this code, first set up a Ruby development environment and
install the Cloud KMS Ruby SDK .
# Ruby has limited support for asymmetric encryption operations. Specifically,
# public_encrypt() does not allow customizing the MGF hash algorithm. Thus, it
# is not currently possible to use Ruby core for asymmetric encryption
# operations on RSA keys from Cloud KMS.
#
# Third party libraries may provide the required functionality. Google does
# not endorse these external libraries.
Decrypt data
Use Cloud KMS to perform the decryption.
gcloud C# Go Java Node.js PHP Python Ruby API
More
To use Cloud KMS on the command line, first
Install or upgrade to the latest version of Google Cloud CLI .
gcloud kms asymmetric-decrypt \
--version key-version \
--key key \
--keyring key-ring \
--location location \
--ciphertext-file file-path-with-encrypted-data \
--plaintext-file file-path-to-store-plaintext
Replace key-version with the key version, or omit the --version
flag to detect the version automatically. Replace key with the name
of the key to use for decryption. Replace key-ring with the name of
the key ring where the key will be located. Replace location with the
Cloud KMS location for the key ring. Replace
file-path-with-encrypted-data and file-path-to-store-plaintext
with the local file paths for reading the encrypted data and saving the decrypted
output.
For information on all flags and possible values, run the command with the
--help flag.
To display the contents of the decrypted file, open it in your editor or
terminal. Here is an example that shows the file contents using the cat
command:
cat ./my-file.txt
To run this code, first set up a C# development environment and
install the Cloud KMS C# SDK .
using Google.Cloud.Kms.V1 ;
using Google.Protobuf ;
using System.Text ;
public class DecryptAsymmetricSample
{
public string DecryptAsymmetric (
string projectId = "my-project" , string locationId = "us-east1" , string keyRingId = "my-key-ring" , string keyId = "my-key" , string keyVersionId = "123" ,
byte [] ciphertext = null )
{
// Create the client.
KeyManagementServiceClient client = KeyManagementServiceClient . Create ();
// Build the key version name.
CryptoKeyVersionName keyVersionName = new CryptoKeyVersionName ( projectId , locationId , keyRingId , keyId , keyVersionId );
// Call the API.
AsymmetricDecryptResponse result = client . AsymmetricDecrypt ( keyVersionName , ByteString . CopyFrom ( ciphertext ));
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
// decryptAsymmetric will attempt to decrypt a given ciphertext with an
// 'RSA_DECRYPT_OAEP_2048_SHA256' key from Cloud KMS.
func decryptAsymmetric ( w io . Writer , name string , ciphertext [] byte ) error {
// name := "projects/my-project/locations/us-east1/keyRings/my-key-ring/cryptoKeys/my-key/cryptoKeyVersions/123"
// ciphertext := []byte("...") // result of an asymmetric encryption call
// Create the client.
ctx := context . Background ()
client , err := kms . NewKeyManagementClient ( ctx )
if err != nil {
return fmt . Errorf ( "failed to create kms client: %w" , err )
}
defer client . Close ()
// Optional but recommended: Compute ciphertext's CRC32C.
crc32c := func ( data [] byte ) uint32 {
t := crc32 . MakeTable ( crc32 . Castagnoli )
return crc32 . Checksum ( data , t )
}
ciphertextCRC32C := crc32c ( ciphertext )
// Build the request.
req := & kmspb . AsymmetricDecryptRequest {
Name : name ,
Ciphertext : ciphertext ,
CiphertextCrc32C : wrapperspb . Int64 ( int64 ( ciphertextCRC32C )),
}
// Call the API.
result , err := client . AsymmetricDecrypt ( ctx , req )
if err != nil {
return fmt . Errorf ( "failed to decrypt ciphertext: %w" , err )
}
// Optional, but recommended: perform integrity verification on result.
// For more details on ensuring E2E in-transit integrity to and from Cloud KMS visit:
// https://cloud.google.com/kms/docs/data-integrity-guidelines
if result . VerifiedCiphertextCrc32C == false {
return fmt . Errorf ( "AsymmetricDecrypt: request corrupted in-transit" )
}
if int64 ( crc32c ( result . Plaintext )) != result . PlaintextCrc32C . Value {
return fmt . Errorf ( "AsymmetricDecrypt: response corrupted in-transit" )
}
fmt . Fprintf ( w , "Decrypted plaintext: %s" , result . Plaintext )
return nil
}
To run this code, first set up a Java development environment and
install the Cloud KMS Java SDK .
import com.google.cloud.kms.v1. AsymmetricDecryptResponse ;
import com.google.cloud.kms.v1. CryptoKeyVersionName ;
import com.google.cloud.kms.v1. KeyManagementServiceClient ;
import com.google.protobuf. ByteString ;
import java.io.IOException ;
public class DecryptAsymmetric {
public void decryptAsymmetric () throws IOException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String locationId = "us-east1" ;
String keyRingId = "my-key-ring" ;
String keyId = "my-key" ;
String keyVersionId = "123" ;
byte [] ciphertext = null ;
decryptAsymmetric ( projectId , locationId , keyRingId , keyId , keyVersionId , ciphertext );
}
// Decrypt data that was encrypted using the public key component of the given
// key version.
public void decryptAsymmetric (
String projectId ,
String locationId ,
String keyRingId ,
String keyId ,
String keyVersionId ,
byte [] ciphertext )
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
// Decrypt the ciphertext.
AsymmetricDecryptResponse response =
client . asymmetricDecrypt ( keyVersionName , ByteString . copyFrom ( ciphertext ));
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
// const versionId = '123';
// const ciphertext = Buffer.from('...');
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
// Optional, but recommended: compute plaintext's CRC32C.
const crc32c = require ( 'fast-crc32c' );
const ciphertextCrc32c = crc32c . calculate ( ciphertext );
async function decryptAsymmetric () {
const [ decryptResponse ] = await client . asymmetricDecrypt ({
name : versionName ,
ciphertext : ciphertext ,
ciphertextCrc32c : {
value : ciphertextCrc32c ,
},
});
// Optional, but recommended: perform integrity verification on decryptResponse.
// For more details on ensuring E2E in-transit integrity to and from Cloud KMS visit:
// https://cloud.google.com/kms/docs/data-integrity-guidelines
if ( ! decryptResponse . verifiedCiphertextCrc32c ) {
throw new Error ( 'AsymmetricDecrypt: request corrupted in-transit' );
}
if (
crc32c . calculate ( decryptResponse . plaintext ) !==
Number ( decryptResponse . plaintextCrc32c . value )
) {
throw new Error ( 'AsymmetricDecrypt: response corrupted in-transit' );
}
// NOTE: The ciphertext must be properly formatted. In Node < 12, the
// crypto.publicEncrypt() function does not properly consume the OAEP
// padding and thus produces invalid ciphertext. If you are using Node to do
// public key encryption, please use version 12+.
const plaintext = decryptResponse . plaintext . toString ( 'utf8' );
console . log ( `Plaintext: ${ plaintext } ` );
return plaintext ;
}
return decryptAsymmetric ();
To run this code, first learn about using PHP on Google Cloud and
install the Cloud KMS PHP SDK .
use Google\Cloud\Kms\V1\AsymmetricDecryptRequest;
use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient;
function decrypt_asymmetric(
string $projectId = 'my-project',
string $locationId = 'us-east1',
string $keyRingId = 'my-key-ring',
string $keyId = 'my-key',
string $versionId = '123',
string $ciphertext = '...'
) {
// Create the Cloud KMS client.
$client = new KeyManagementServiceClient();
// Build the key version name.
$keyVersionName = $client->cryptoKeyVersionName($projectId, $locationId, $keyRingId, $keyId, $versionId);
// Call the API.
$asymmetricDecryptRequest = (new AsymmetricDecryptRequest())
->setName($keyVersionName)
->setCiphertext($ciphertext);
$decryptResponse = $client->asymmetricDecrypt($asymmetricDecryptRequest);
printf('Plaintext: %s' . PHP_EOL, $decryptResponse->getPlaintext());
return $decryptResponse;
}
To run this code, first set up a Python development environment and
install the Cloud KMS Python SDK .
from google.cloud import kms
def decrypt_asymmetric (
project_id : str ,
location_id : str ,
key_ring_id : str ,
key_id : str ,
version_id : str ,
ciphertext : bytes ,
) - > kms . DecryptResponse :
"""
Decrypt the ciphertext using an asymmetric key.
Args:
project_id (string): Google Cloud project ID (e.g. 'my-project').
location_id (string): Cloud KMS location (e.g. 'us-east1').
key_ring_id (string): ID of the Cloud KMS key ring (e.g. 'my-key-ring').
key_id (string): ID of the key to use (e.g. 'my-key').
version_id (string): ID of the key version to use (e.g. '1').
ciphertext (bytes): Encrypted bytes to decrypt.
Returns:
DecryptResponse: Response including plaintext.
"""
# Create the client.
client = kms . KeyManagementServiceClient ()
# Build the key version name.
key_version_name = client . crypto_key_version_path (
project_id , location_id , key_ring_id , key_id , version_id
)
# Optional, but recommended: compute ciphertext's CRC32C.
# See crc32c() function defined below.
ciphertext_crc32c = crc32c ( ciphertext )
# Call the API.
decrypt_response = client . asymmetric_decrypt (
request = {
"name" : key_version_name ,
"ciphertext" : ciphertext ,
"ciphertext_crc32c" : ciphertext_crc32c ,
}
)
# Optional, but recommended: perform integrity verification on decrypt_response.
# For more details on ensuring E2E in-transit integrity to and from Cloud KMS visit:
# https://cloud.google.com/kms/docs/data-integrity-guidelines
if not decrypt_response . verified_ciphertext_crc32c :
raise Exception ( "The request sent to the server was corrupted in-transit." )
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
# version_id = "123"
# ciphertext = "..."
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
response = client . asymmetric_decrypt key_version_name , ciphertext
puts "Plaintext: #{ response . plaintext } "
These examples use curl as an HTTP client
to demonstrate using the API. For more information about access control, see
Accessing the Cloud KMS API .
Use the
CryptoKeyVersions.asymmetricDecrypt
method.
Troubleshooting
incorrect key purpose: ASYMMETRIC_SIGN
You can only decrypt data with a key with key purpose ASYMMETRIC_DECRYPT .
invalid parameter when decrypting on macOS
The version of OpenSSL installed on macOS does not support the flags used to
decrypt data in this topic. To follow these steps on macOS,
install OpenSSL from Homebrew .
data too large for key size
The maximum payload size for RSA decryption depends on the key size and padding
algorithm. All RSA encryption formats used by Cloud KMS use
OAEP, standardized in
RFC 2437 . As a
quick reference, the following algorithms support the following maximum payload
sizes ( maxMLen , in bytes):
Algorithm
Parameters
Maximum message length
RSA_DECRYPT_OAEP_2048_SHA256
k = 256; hLen = 32;
maxMLen = 190
RSA_DECRYPT_OAEP_3072_SHA256
k = 384; hLen = 32;
maxMLen = 318
RSA_DECRYPT_OAEP_4096_SHA256
k = 512; hLen = 32;
maxMLen = 446
RSA_DECRYPT_OAEP_4096_SHA512
k = 512; hLen = 64;
maxMLen = 382
Asymmetric encryption is not recommended for messages of varying lengths that
may be larger than these limits. Consider using hybrid encryption instead.
Tink is a cryptographic library
that uses this approach.
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
