---
title: "Creating and validating MAC digital signatures \_|\_ Cloud Key Management\
  \ Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/create-validate-mac-signatures
  title: "Creating and validating MAC digital signatures \_|\_ Cloud Key Management\
    \ Service \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Cloud KMS
Guides
Send feedback
Creating and validating MAC digital signatures
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to create and validate digital signatures
based on MAC keys.
A single key, shared by both the producer and the verifier, is used to compute a
MAC tag from the input data. The MAC tag serves as a digital signature. When the
verifier receives the message and its associated MAC tag, they generate their
own tag from the message contents. The verifier can then compare the received
tag with their generated tag to see whether they match. If the two tags match,
the verifier knows that the message they received is the same as the message
signed by the producer.
Before you begin
When creating MAC digital signatures, you must use a key that has the
key purpose of MAC . When you create the key , use MAC .
Ensure that the file that you want to sign is within the file size
limit.When you use a
Cloud HSM key, the maximum file size for which you can create
a MAC signature is 16 KiB. For all other keys, the maximum file size
is 64 KiB.
Required roles
To get the permissions that
you need to create and verify signatures,
ask your administrator to grant you the
following IAM roles on the key:
To create signatures:
Cloud KMS CryptoKey Signer ( roles/cloudkms.signer )
To verify signatures:
Cloud KMS CryptoKey Verifier ( roles/cloudkms.verifier )
To create and verify signatures:
Cloud KMS CryptoKey Signer/Verifier ( roles/cloudkms.signerVerifier )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Note: If you're going to use a service account for signing or verification,
grant the required role to the service account.
Creating a MAC signature
gcloud
To use Cloud KMS on the command line, first
Install or upgrade to the latest version of Google Cloud CLI .
gcloud kms mac-sign \
--version KEY_VERSION \
--key KEY_NAME \
--keyring KEY_RING \
--location LOCATION \
--input-file INPUT_FILE_PATH \
--signature-file SIGNED_FILE_PATH
Replace the following:
KEY_VERSION : the key version number.
KEY_NAME : the name of the key.
KEY_RING : the name of the key ring that contains the key.
LOCATION : the Cloud KMS location of the key ring.
INPUT_FILE_PATH : The local path to the file you want to sign.
SIGNED_FILE_PATH : The local path where you want to save the
generated signature.
For information on all flags and possible values, run the command with the
--help flag.
C#
To run this code, first set up a C# development environment and
install the Cloud KMS C# SDK .
using Google.Cloud.Kms.V1 ;
using Google.Protobuf ;
public class SignMacSample
{
public byte [] SignMac (
string projectId = "my-project" , string locationId = "us-east1" , string keyRingId = "my-key-ring" , string keyId = "my-key" , string keyVersionId = "123" ,
string data = "Sample data" )
{
// Create the client.
KeyManagementServiceClient client = KeyManagementServiceClient . Create ();
// Build the key version name.
CryptoKeyVersionName keyVersionName = new CryptoKeyVersionName ( projectId , locationId , keyRingId , keyId , keyVersionId );
// Convert the data into a ByteString.
ByteString dataByteString = ByteString . CopyFromUtf8 ( data );
// Call the API.
MacSignResponse result = client . MacSign ( keyVersionName , dataByteString );
// The data comes back as raw bytes, which may include non-printable
// characters. To print the result, you could encode it as base64.
// string encodedSignature = result.Mac.ToBase64();
// Get the signature.
byte [] signature = result . Mac . ToByteArray ();
// Return the result.
return signature ;
}
}
Go
To run this code, first set up a Go development environment and
install the Cloud KMS Go SDK .
import (
"context"
"encoding/base64"
"fmt"
"io"
kms "cloud.google.com/go/kms/apiv1"
"cloud.google.com/go/kms/apiv1/kmspb"
)
// signMac will sign a plaintext message using the HMAC algorithm.
func signMac ( w io . Writer , name string , data string ) error {
// name := "projects/my-project/locations/us-east1/keyRings/my-key-ring/cryptoKeys/my-key/cryptoKeyVersions/123"
// data := "my data to sign"
// Create the client.
ctx := context . Background ()
client , err := kms . NewKeyManagementClient ( ctx )
if err != nil {
return fmt . Errorf ( "failed to create kms client: %w" , err )
}
defer client . Close ()
// Build the request.
req := & kmspb . MacSignRequest {
Name : name ,
Data : [] byte ( data ),
}
// Generate HMAC of data.
result , err := client . MacSign ( ctx , req )
if err != nil {
return fmt . Errorf ( "failed to hmac sign: %w" , err )
}
// The data comes back as raw bytes, which may include non-printable
// characters. This base64-encodes the result so it can be printed below.
encodedSignature := base64 . StdEncoding . EncodeToString ( result . Mac )
fmt . Fprintf ( w , "Signature: %s" , encodedSignature )
return nil
}
Java
To run this code, first set up a Java development environment and
install the Cloud KMS Java SDK .
import com.google.cloud.kms.v1. CryptoKeyVersionName ;
import com.google.cloud.kms.v1. KeyManagementServiceClient ;
import com.google.cloud.kms.v1. MacSignResponse ;
import com.google.protobuf. ByteString ;
import java.io.IOException ;
import java.util.Base64 ;
public class SignMac {
public void signMac () throws IOException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String locationId = "us-east1" ;
String keyRingId = "my-key-ring" ;
String keyId = "my-key" ;
String keyVersionId = "123" ;
String data = "Data to sign" ;
signMac ( projectId , locationId , keyRingId , keyId , keyVersionId , data );
}
// Sign data with a given mac key.
public void signMac (
String projectId ,
String locationId ,
String keyRingId ,
String keyId ,
String keyVersionId ,
String data )
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
// Generate an HMAC of the data.
MacSignResponse response = client . macSign ( keyVersionName , ByteString . copyFromUtf8 ( data ));
// The data comes back as raw bytes, which may include non-printable
// characters. This base64-encodes the result so it can be printed below.
String encodedSignature = Base64 . getEncoder (). encodeToString ( response . getMac (). toByteArray ());
System . out . printf ( "Signature: %s%n" , encodedSignature );
}
}
}
Node.js
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
// const data = Buffer.from('...');
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
async function signMac () {
// Sign the data with Cloud KMS
const [ signResponse ] = await client . macSign ({
name : versionName ,
data : data ,
});
// Example of how to display signature. Because the signature is in a binary
// format, you need to encode the output before printing it to a console or
// displaying it on a screen.
const encoded = signResponse . mac . toString ( 'base64' );
console . log ( `Signature: ${ encoded } ` );
return signResponse ;
}
return signMac ();
Python
To run this code, first set up a Python development environment and
install the Cloud KMS Python SDK .
from google.cloud import kms
def sign_mac (
project_id : str ,
location_id : str ,
key_ring_id : str ,
key_id : str ,
version_id : str ,
data : str ,
) - > kms . MacSignResponse :
"""
Sign a message using the private key part of an asymmetric key.
Args:
project_id (string): Google Cloud project ID (e.g. 'my-project').
location_id (string): Cloud KMS location (e.g. 'us-east1').
key_ring_id (string): ID of the Cloud KMS key ring (e.g. 'my-key-ring').
key_id (string): ID of the key to use (e.g. 'my-key').
version_id (string): Version to use (e.g. '1').
data (string): Data to sign.
Returns:
MacSignResponse: Signature.
"""
# Import base64 for printing the ciphertext.
import base64
# Create the client.
client = kms . KeyManagementServiceClient ()
# Build the key version name.
key_version_name = client . crypto_key_version_path (
project_id , location_id , key_ring_id , key_id , version_id
)
# Convert the message to bytes.
data_bytes = data . encode ( "utf-8" )
# Call the API
sign_response = client . mac_sign (
request = { "name" : key_version_name , "data" : data_bytes }
)
print ( f "Signature: { base64 . b64encode ( sign_response . mac ) !r} " )
return sign_response
Ruby
To run this code, first set up a Ruby development environment and
install the Cloud KMS Ruby SDK .
# TODO(developer): uncomment these values before running the sample.
# project_id = "my-project"
# location_id = "us-east1"
# key_ring_id = "my-key-ring"
# key_id = "my-key"
# version_id = "123"
# data = "my data"
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
# Call the API.
sign_response = client . mac_sign name : key_version_name , data : data
# The data comes back as raw bytes, which may include non-printable
# characters. This base64-encodes the result so it can be printed below.
encoded_signature = Base64 . strict_encode64 sign_response . mac
puts "Signature: #{ encoded_signature } "
API
These examples use curl as an HTTP client
to demonstrate using the API. For more information about access control, see
Accessing the Cloud KMS API .
Use the
CryptoKeyVersions.macSign
method to perform the signing. The response from this method contains the
base64-encoded signature.
Tip : You can base64-encode or decode data
using the base64 command on Linux or macOS, or the
Base64.exe command on Windows. Programming and scripting
languages typically include libraries for base64-encoding. For command-line
examples, see Base64 Encoding in the
Cloud Vision API documentation.
Verifying a MAC signature
gcloud
To use Cloud KMS on the command line, first
Install or upgrade to the latest version of Google Cloud CLI .
gcloud kms mac-verify \
--version KEY_VERSION \
--key KEY_NAME \
--keyring KEY_RING \
--location LOCATION \
--input-file INPUT_FILE_PATH \
--signature-file SIGNED_FILE_PATH
KEY_VERSION : the key version number.
KEY_NAME : the name of the key.
KEY_RING : the name of the key ring that contains the key.
LOCATION : the Cloud KMS location of the key ring.
INPUT_FILE_PATH : The local path to the file that was signed.
SIGNED_FILE_PATH : The local path to the signature file to
be verified.
For information on all flags and possible values, run the command with the
--help flag.
C#
To run this code, first set up a C# development environment and
install the Cloud KMS C# SDK .
using Google.Cloud.Kms.V1 ;
using Google.Protobuf ;
public class VerifyMacSample
{
public bool VerifyMac (
string projectId = "my-project" , string locationId = "us-east1" , string keyRingId = "my-key-ring" , string keyId = "my-key" , string keyVersionId = "123" ,
string data = "my data" ,
byte [] signature = null )
{
// Build the key version name.
CryptoKeyVersionName keyVersionName = new CryptoKeyVersionName ( projectId , locationId , keyRingId , keyId , keyVersionId );
// Create the client.
KeyManagementServiceClient client = KeyManagementServiceClient . Create ();
// Convert the data and signatures into ByteStrings.
ByteString dataByteString = ByteString . CopyFromUtf8 ( data );
ByteString signatureByteString = ByteString . CopyFrom ( signature );
// Verify the signature.
MacVerifyResponse result = client . MacVerify ( keyVersionName , dataByteString , signatureByteString );
// Return the result.
return result . Success ;
}
}
Go
To run this code, first set up a Go development environment and
install the Cloud KMS Go SDK .
import (
"context"
"fmt"
"io"
kms "cloud.google.com/go/kms/apiv1"
"cloud.google.com/go/kms/apiv1/kmspb"
)
// verifyMac will verify a previous HMAC signature.
func verifyMac ( w io . Writer , name string , data , signature [] byte ) error {
// name := "projects/my-project/locations/us-east1/keyRings/my-key-ring/cryptoKeys/my-key/cryptoKeyVersions/123"
// data := "my previous data"
// signature := []byte("...") // Response from a sign request
// Create the client.
ctx := context . Background ()
client , err := kms . NewKeyManagementClient ( ctx )
if err != nil {
return fmt . Errorf ( "failed to create kms client: %w" , err )
}
defer client . Close ()
// Build the request.
req := & kmspb . MacVerifyRequest {
Name : name ,
Data : data ,
Mac : signature ,
}
// Verify the signature.
result , err := client . MacVerify ( ctx , req )
if err != nil {
return fmt . Errorf ( "failed to verify signature: %w" , err )
}
fmt . Fprintf ( w , "Verified: %t" , result . Success )
return nil
}
Java
To run this code, first set up a Java development environment and
install the Cloud KMS Java SDK .
import com.google.cloud.kms.v1. CryptoKeyVersionName ;
import com.google.cloud.kms.v1. KeyManagementServiceClient ;
import com.google.cloud.kms.v1. MacVerifyResponse ;
import com.google.protobuf. ByteString ;
import java.io.IOException ;
public class VerifyMac {
public void verifyMac () throws IOException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String locationId = "us-east1" ;
String keyRingId = "my-key-ring" ;
String keyId = "my-key" ;
String keyVersionId = "123" ;
String data = "Data to sign" ;
byte [] signature = null ;
verifyMac ( projectId , locationId , keyRingId , keyId , keyVersionId , data , signature );
}
// Sign data with a given mac key.
public void verifyMac (
String projectId ,
String locationId ,
String keyRingId ,
String keyId ,
String keyVersionId ,
String data ,
byte [] signature )
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
// Verify the signature
MacVerifyResponse response =
client . macVerify (
keyVersionName , ByteString . copyFromUtf8 ( data ), ByteString . copyFrom ( signature ));
// The data comes back as raw bytes, which may include non-printable
// characters. This base64-encodes the result so it can be printed below.
System . out . printf ( "Success: %s%n" , response . getSuccess ());
}
}
}
Node.js
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
// const data = Buffer.from('...');
// const signature = Buffer.from('...');
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
async function verifyMac () {
// Verify the data with Cloud KMS
const [ verifyResponse ] = await client . macVerify ({
name : versionName ,
data : data ,
mac : signature ,
});
console . log ( `Verified: ${ verifyResponse . success } ` );
return verifyResponse ;
}
return verifyMac ();
Python
To run this code, first set up a Python development environment and
install the Cloud KMS Python SDK .
from google.cloud import kms
def verify_mac (
project_id : str ,
location_id : str ,
key_ring_id : str ,
key_id : str ,
version_id : str ,
data : str ,
signature : bytes ,
) - > kms . MacVerifyResponse :
"""
Verify the signature of data from an HMAC key.
Args:
project_id (string): Google Cloud project ID (e.g. 'my-project').
location_id (string): Cloud KMS location (e.g. 'us-east1').
key_ring_id (string): ID of the Cloud KMS key ring (e.g. 'my-key-ring').
key_id (string): ID of the key to use (e.g. 'my-key').
version_id (string): Version to use (e.g. '1').
data (string): Data that was signed.
signature (bytes): Signature bytes.
Returns:
MacVerifyResponse: Success.
"""
# Create the client.
client = kms . KeyManagementServiceClient ()
# Build the key version name.
key_version_name = client . crypto_key_version_path (
project_id , location_id , key_ring_id , key_id , version_id
)
# Convert the message to bytes.
data_bytes = data . encode ( "utf-8" )
# Call the API
verify_response = client . mac_verify (
request = { "name" : key_version_name , "data" : data_bytes , "mac" : signature }
)
print ( f "Verified: { verify_response . success } " )
return verify_response
Ruby
To run this code, first set up a Ruby development environment and
install the Cloud KMS Ruby SDK .
# TODO(developer): uncomment these values before running the sample.
# project_id = "my-project"
# location_id = "us-east1"
# key_ring_id = "my-key-ring"
# key_id = "my-key"
# version_id = "123"
# data = "my data"
# signature = "..."
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
# Call the API.
verify_response = client . mac_verify name : key_version_name , data : data , mac : signature
puts "Verified: #{ verify_response . success } "
API
These examples use curl as an HTTP client
to demonstrate using the API. For more information about access control, see
Accessing the Cloud KMS API .
Use the
CryptoKeyVersions.macVerify
method to perform the verification. The signature to be verified needs to be
base64-encoded. The response from this method contains a boolean indicating
whether or not the signature was verified successfully.
Tip : You can base64-encode or decode data
using the base64 command on Linux or macOS, or the
Base64.exe command on Windows. Programming and scripting
languages typically include libraries for base64-encoding. For command-line
examples, see Base64 Encoding in the
Cloud Vision API documentation.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
