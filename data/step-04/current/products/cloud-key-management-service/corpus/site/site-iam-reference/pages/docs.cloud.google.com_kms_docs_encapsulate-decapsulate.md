---
title: "Encapsulate and decapsulate using KEMs \_|\_ Cloud Key Management Service\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/encapsulate-decapsulate
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/encapsulate-decapsulate
  title: "Encapsulate and decapsulate using KEMs \_|\_ Cloud Key Management Service\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Encapsulate and decapsulate using KEMs | Cloud Key Management Service | Google Cloud Documentation
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
Grant permissions on the key
Encapsulation
Decapsulation
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Encapsulate and decapsulate using KEMs
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Grant permissions on the key
Encapsulation
Decapsulation
This document describes using key encapsulation
mechanisms (KEMs) with Cloud KMS keys to establish shared secrets.
Encapsulation uses the public key of the KEM key pair, and
decapsulation uses the private key of the key pair. Cloud KMS
lets you retrieve the public key, which you can then use with standard libraries
to encapsulate your shared secret. To decapsulate the shared secret,
use Cloud KMS decapsulation methods. You can't use the private key
material outside of Cloud KMS.
Before you begin
This document provides examples that run at the command line. To simplify
using the examples, use Cloud Shell . The encryption example uses
OpenSSL , which is pre-installed on Cloud Shell. Otherwise,
install OpenSSL on your machine.
Create a KEM key with key purpose of KEY_ENCAPSULATION .
To see which algorithms are supported for key purpose KEY_ENCAPSULATION ,
see key encapsulation algorithms .
Grant permissions on the key
Grant the roles/cloudkms.publicKeyViewer role on the
key to each user or principal that must retrieve the public key to
encapsulate the secret.
Grant the 'roles/cloudkms.decapsulator' role on the key
to each user or principal that must decapsulate secrets with this key.
For more information about permissions and roles in Cloud KMS,
see Permissions and Roles .
Encapsulation
To encapsulate using a KEM key, retrieve the public key and
use the public key to encapsulate.
gcloud Go
More
This sample requires OpenSSL to be
installed on your local system.
Download the public key
gcloud kms keys versions get-public-key KEY_VERSION \
--key KEY_NAME \
--keyring KEY_RING \
--location LOCATION \
--output-file PUBLIC_KEY_FILE \
--public-key-format PUBLIC_KEY_FORMAT
Replace the following:
KEY_VERSION : The version number of the key that you want to use
for encapsulation—for example, 2 .
KEY_NAME : The name of the key that you want to use for
encapsulation.
KEY_RING : the name of the key ring that contains the key.
LOCATION : the Cloud KMS location of the key ring.
PUBLIC_KEY_FILE : The local file path where the public key
will be saved.
PUBLIC_KEY_FORMAT : The target format for the public
key—for example, nist-pqc . The default format is pem .
Reformat the public key
The encapsulate command requires the public key to be in PEM format. If you have
downloaded the public key in another format, like nist-pqc , then you must
convert the key to PEM format. If your public key is already in the PEM format,
continue from Encapsulate .
Use the following command to convert the public key for a ML-KEM-768 key:
{ echo -n "MIIEsjALBglghkgBZQMEBAIDggShAA==" | base64 -d ; cat PUBLIC_KEY_FILE ; } | \
openssl pkey -inform DER -pubin -pubout -out PEM_PUBLIC_KEY_FILE
Use the following command to convert the public key for a ML-KEM-1024 key:
{ echo -n "MIIGMjALBglghkgBZQMEBAMDggYhAA==" | base64 -d ; cat PUBLIC_KEY_FILE ; } | \
openssl pkey -inform DER -pubin -pubout -out PEM_PUBLIC_KEY_FILE
Replace the following:
PUBLIC_KEY_FILE : The path to the downloaded public key
file in raw format.
PEM_PUBLIC_KEY_FILE : The path and file name to save the
public key in PEM format.
Encapsulate
To create a shared secret and ciphertext, you can use the following command:
openssl pkeyutl \
-encap \
-pubin \
-inkey PEM_PUBLIC_KEY_FILE \
-out CIPHERTEXT_FILE \
-secret SHARED_SECRET_FILE
Replace the following:
PEM_PUBLIC_KEY_FILE : The path to the downloaded public
key file in PEM format.
CIPHERTEXT_FILE : The path where you want to save the
resulting ciphertext.
SHARED_SECRET_FILE : The path where you want to save the
resulting shared secret.
To run this code, first set up a Go development environment and
install the Cloud KMS Go SDK .
import (
"context"
"crypto/mlkem"
"fmt"
"hash/crc32"
"io"
kms "cloud.google.com/go/kms/apiv1"
"cloud.google.com/go/kms/apiv1/kmspb"
)
// encapsulateMLKEM demonstrates how to encapsulate a shared secret using an ML-KEM-768 public key
// from Cloud KMS.
func encapsulateMLKEM ( w io . Writer , keyVersionName string ) error {
// keyVersionName := "projects/my-project/locations/us-east1/keyRings/my-key-ring/cryptoKeys/my-key/cryptoKeyVersions/1"
// Create the client.
ctx := context . Background ()
client , err := kms . NewKeyManagementClient ( ctx )
if err != nil {
return fmt . Errorf ( "failed to create kms client: %w" , err )
}
defer client . Close ()
// crc32c calculates the CRC32C checksum of the given data.
crc32c := func ( data [] byte ) uint32 {
t := crc32 . MakeTable ( crc32 . Castagnoli )
return crc32 . Checksum ( data , t )
}
// Build the request to get the public key in NIST PQC format.
req := & kmspb . GetPublicKeyRequest {
Name : keyVersionName ,
PublicKeyFormat : kmspb . PublicKey_NIST_PQC ,
}
// Call the API to get the public key.
response , err := client . GetPublicKey ( ctx , req )
if err != nil {
return fmt . Errorf ( "failed to get public key: %w" , err )
}
// Optional, but recommended: perform integrity verification on the response.
// For more details on ensuring E2E in-transit integrity to and from Cloud KMS visit:
// https://cloud.google.com/kms/docs/data-integrity-guidelines
if response . GetName () != req . GetName () {
return fmt . Errorf ( "GetPublicKey: request corrupted in-transit" )
}
if response . GetPublicKeyFormat () != req . GetPublicKeyFormat () {
return fmt . Errorf ( "GetPublicKey: request corrupted in-transit" )
}
if int64 ( crc32c ( response . GetPublicKey (). GetData ())) != response . GetPublicKey (). GetCrc32CChecksum (). GetValue () {
return fmt . Errorf ( "GetPublicKey: response corrupted in-transit" )
}
// Use the public key with crypto/mlkem to encapsulate a shared secret.
ek , err := mlkem . NewEncapsulationKey768 ( response . GetPublicKey (). GetData ())
if err != nil {
return fmt . Errorf ( "NewEncapsulationKey768: %w" , err )
}
sharedSecret , ciphertext := ek . Encapsulate ()
fmt . Fprintf ( w , "Encapsulated ciphertext: %x\n" , ciphertext )
fmt . Fprintf ( w , "Shared secret: %x\n" , sharedSecret )
return nil
}
Decapsulation
Use Cloud KMS to decapsulate a ciphertext.
gcloud Go API
More
To use Cloud KMS on the command line, first
Install or upgrade to the latest version of Google Cloud CLI .
gcloud kms decapsulate \
--version KEY_VERSION \
--key KEY_NAME \
--keyring KEY_RING \
--location LOCATION \
--ciphertext-file CIPHERTEXT_FILE \
--shared-secret-file SHARED_SECRET_FILE
Replace the following:
KEY_VERSION : the key version to use for decapsulation—for
example, 3 .
KEY_NAME : the name of the key to use for decapsulation.
KEY_RING : the name of the key ring where the key is located.
LOCATION : the Cloud KMS location for the key ring.
CIPHERTEXT_FILE : the local file path for the input
ciphertext.
SHARED_SECRET_FILE : the local file path for saving
the output shared secret.
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
// decapsulate decapsulates the given ciphertext using a saved private key of purpose
// KEY_ENCAPSULATION stored in KMS.
func decapsulate ( w io . Writer , keyVersionName string , ciphertext [] byte ) error {
// keyVersionName := "projects/my-project/locations/us-east1/keyRings/my-key-ring/cryptoKeys/my-key/cryptoKeyVersions/1"
// ciphertext := []byte("...")
// Create the client.
ctx := context . Background ()
client , err := kms . NewKeyManagementClient ( ctx )
if err != nil {
return fmt . Errorf ( "failed to create kms client: %w" , err )
}
defer client . Close ()
// crc32c calculates the CRC32C checksum of the given data.
crc32c := func ( data [] byte ) uint32 {
t := crc32 . MakeTable ( crc32 . Castagnoli )
return crc32 . Checksum ( data , t )
}
// Optional but recommended: Compute ciphertext's CRC32C.
ciphertextCRC32C := crc32c ( ciphertext )
// Build the request.
req := & kmspb . DecapsulateRequest {
Name : keyVersionName ,
Ciphertext : ciphertext ,
CiphertextCrc32C : wrapperspb . Int64 ( int64 ( ciphertextCRC32C )),
}
// Call the API.
result , err := client . Decapsulate ( ctx , req )
if err != nil {
return fmt . Errorf ( "failed to decapsulate: %w" , err )
}
// Optional, but recommended: perform integrity verification on the response.
// For more details on ensuring E2E in-transit integrity to and from Cloud KMS visit:
// https://cloud.google.com/kms/docs/data-integrity-guidelines
if ! result . GetVerifiedCiphertextCrc32C () {
return fmt . Errorf ( "Decapsulate: request corrupted in-transit" )
}
if result . GetName () != req . GetName () {
return fmt . Errorf ( "Decapsulate: request corrupted in-transit" )
}
if int64 ( crc32c ( result . GetSharedSecret ())) != result . GetSharedSecretCrc32C () {
return fmt . Errorf ( "Decapsulate: response corrupted in-transit" )
}
fmt . Fprintf ( w , "Decapsulated plaintext: %x" , result . GetSharedSecret ())
return nil
}
These examples use curl as an HTTP client
to demonstrate using the API. For more information about access control, see
Accessing the Cloud KMS API .
Use the
CryptoKeyVersions.decapsulate
method.
curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING /cryptoKeys/ KEY_NAME /cryptoKeyVersions/ KEY_VERSION :decapsulate" \
--request "POST" \
--header "authorization: Bearer TOKEN " \
--header "content-type: application/json" \
--data '{"ciphertext": " CIPHERTEXT "}'
Replace the following:
PROJECT_ID : the ID of the project that contains the key ring.
LOCATION : the Cloud KMS location of the key ring.
KEY_RING : the name of the key ring that contains the key.
KEY_NAME : the name of the key to use for encryption.
KEY_VERSION : the ID of the key version to use for encryption
CIPHERTEXT : the base64-encoded ciphertext that you
want to decapsulate.
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
