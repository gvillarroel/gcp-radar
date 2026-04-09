---
title: "Client-side encryption with Tink and Cloud KMS \_|\_ Cloud Key Management\
  \ Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/client-side-encryption
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/client-side-encryption
  title: "Client-side encryption with Tink and Cloud KMS \_|\_ Cloud Key Management\
    \ Service \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Client-side encryption with Tink and Cloud KMS | Cloud Key Management Service | Google Cloud Documentation
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
Overview
Before you begin Required roles
Envelope encryption with Tink
Connect Tink and Cloud KMS
Initialize Tink and encrypt data
What's next?
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Client-side encryption with Tink and Cloud KMS
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Overview
Before you begin Required roles
Envelope encryption with Tink
Connect Tink and Cloud KMS
Initialize Tink and encrypt data
What's next?
This topic describes how to encrypt data locally and upload it to
Cloud Storage with Tink and Cloud Key Management Service (Cloud KMS). Tink is an
open source cryptography library written by cryptographers and security
engineers at Google.
Overview
Client-side encryption is any encryption performed prior to sending your data to
the cloud. When using client-side encryption, you're responsible for creating
and managing your encryption keys and encrypting your data before sending it to
the cloud.
In this topic, you implement client-side envelope encryption with Tink using an
encryption key in Cloud KMS.
You can find a Terraform-based blueprint version of this tutorial in the
kms-solutions GitHub repository .
Before you begin
Create a symmetric Cloud KMS encryption key for encryption. Take
note of the URI of the key. You need it later.
Install Tink for use with Cloud KMS.
Create a bucket in Cloud Storage to upload your encrypted data.
Required roles
To ensure that your service account has the necessary
permissions to use Cloud KMS keys with Tink,
ask your administrator to grant the
Cloud KMS CryptoKey Encrypter/Decrypter ( roles/cloudkms.cryptoKeyEncrypterDecrypter )
IAM role to your service account on your key.
Important: You must grant this role
to your service account, not to your user account. Failure to grant the role to the correct principal might result in permission errors.
For more information about granting roles, see Manage access to projects, folders, and organizations .
Your administrator might also be able to give your service account
the required permissions through custom
roles or other predefined
roles .
Envelope encryption with Tink
In envelope encryption , the Cloud KMS key acts as a key encryption
key (KEK). That is, it's used to encrypt data encryption keys (DEK) which in
turn are used to encrypt actual data.
After creating a KEK in Cloud KMS, to encrypt each message you must:
Generate a data encryption key (DEK) locally.
Use the DEK locally to encrypt the message.
Use Cloud KMS to encrypt (wrap) the DEK with the KEK.
Store the encrypted data and the wrapped DEK.
You don't need to implement this envelope encryption process from scratch when
you use Tink.
To use Tink for envelope encryption, you provide Tink with a key URI and
credentials. The key URI points to your KEK in Cloud KMS, and the
credentials let Tink use the KEK. Tink generates the DEK, encrypts the data,
wraps the DEK, and then returns a single ciphertext with the encrypted data and
wrapped DEK.
Tink supports envelope encryption in Python, Java, C++, and Go using the
Authenticated Encryption with Associated Data (AEAD) primitive .
Connect Tink and Cloud KMS
To encrypt the DEKs generated by Tink with your KEK in Cloud KMS,
you need to get the URI of your KEK. In Cloud KMS, the KEK URI has the
following format:
gcp-kms://projects/ PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING /cryptoKeys/ KEY_NAME /cryptoKeyVersions/ KEY_VERSION
See Getting a Cloud KMS resource ID for details on how to get
the path to your key.
Initialize Tink and encrypt data
Tink uses primitives—cryptographic building blocks that manage the details
of their underlying algorithms—so you can perform tasks safely. Each
primitive offers an API that handles a specific task. Here, we're using AEAD, so
we use the Tink AEAD primitive.
Python Java
More
Python
To learn how to install and use the client library for Cloud KMS, see
Cloud KMS client libraries .
To authenticate to Cloud KMS, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
"""A command-line utility for performing file encryption using GCS.
It is inteded for use with small files, utilizes envelope encryption and
facilitates ciphertexts stored in GCS.
"""
from absl import app
from absl import flags
from absl import logging
from google.cloud import storage
import tink
from tink import aead
from tink.integration import gcpkms
FLAGS = flags . FLAGS
flags . DEFINE_enum ( 'mode' , None , [ 'encrypt' , 'decrypt' ],
'The operation to perform.' )
flags . DEFINE_string ( 'kek_uri' , None ,
'The Cloud KMS URI of the key encryption key.' )
flags . DEFINE_string ( 'gcp_credential_path' , None ,
'Path to the GCP credentials JSON file.' )
flags . DEFINE_string ( 'gcp_project_id' , None ,
'The ID of the GCP project hosting the GCS blobs.' )
flags . DEFINE_string ( 'local_path' , None , 'Path to the local file.' )
flags . DEFINE_string ( 'gcs_blob_path' , None , 'Path to the GCS blob.' )
_GCS_PATH_PREFIX = 'gs://'
def main ( argv ):
del argv # Unused.
# Initialise Tink
aead . register ()
try :
# Read the GCP credentials and setup client
client = gcpkms . GcpKmsClient ( FLAGS . kek_uri , FLAGS . gcp_credential_path )
except tink . TinkError as e :
logging . exception ( 'Error creating GCP KMS client: %s ' , e )
return 1
# Create envelope AEAD primitive using AES256 GCM for encrypting the data
try :
remote_aead = client . get_aead ( FLAGS . kek_uri )
env_aead = aead . KmsEnvelopeAead (
aead . aead_key_templates . AES256_GCM , remote_aead
)
except tink . TinkError as e :
logging . exception ( 'Error creating primitive: %s ' , e )
return 1
storage_client = storage . Client . from_service_account_json (
FLAGS . gcp_credential_path )
try :
bucket_name , object_name = _get_bucket_and_object ( FLAGS . gcs_blob_path )
except ValueError as e :
logging . exception ( 'Error parsing GCS blob path: %s ' , e )
return 1
bucket = storage_client . bucket ( bucket_name )
blob = bucket . blob ( object_name )
associated_data = FLAGS . gcs_blob_path . encode ( 'utf-8' )
if FLAGS . mode == 'encrypt' :
with open ( FLAGS . local_path , 'rb' ) as input_file :
output_data = env_aead . encrypt ( input_file . read (), associated_data )
blob . upload_from_string ( output_data )
elif FLAGS . mode == 'decrypt' :
ciphertext = blob . download_as_bytes ()
with open ( FLAGS . local_path , 'wb' ) as output_file :
output_file . write ( env_aead . decrypt ( ciphertext , associated_data ))
else :
logging . error (
'Unsupported mode %s . Please choose "encrypt" or "decrypt".' ,
FLAGS . mode ,
)
return 1
def _get_bucket_and_object ( gcs_blob_path ):
"""Extract bucket and object name from a GCS blob path.
Args:
gcs_blob_path: path to a GCS blob
Returns:
The bucket and object name of the GCS blob
Raises:
ValueError: If gcs_blob_path parsing fails.
"""
if not gcs_blob_path . startswith ( _GCS_PATH_PREFIX ):
raise ValueError (
f 'GCS blob paths must start with gs://, got { gcs_blob_path } ' )
path = gcs_blob_path [ len ( _GCS_PATH_PREFIX ):]
parts = path . split ( '/' , 1 )
if len ( parts ) < 2 :
raise ValueError (
'GCS blob paths must be in format gs://bucket-name/object-name, '
f 'got { gcs_blob_path } ' )
return parts [ 0 ], parts [ 1 ]
if __name__ == '__main__' :
flags . mark_flags_as_required ([
'mode' , 'kek_uri' , 'gcp_credential_path' , 'gcp_project_id' , 'local_path' ,
'gcs_blob_path' ])
app . run ( main )
Java
To learn how to install and use the client library for Cloud KMS, see
Cloud KMS client libraries .
To authenticate to Cloud KMS, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
package gcs ;
import static java.nio.charset.StandardCharsets.UTF_8 ;
import com.google.auth.oauth2. GoogleCredentials ;
import com.google.cloud.storage. BlobId ;
import com.google.cloud.storage. BlobInfo ;
import com.google.cloud.storage. Storage ;
import com.google.cloud.storage. StorageOptions ;
import com.google.crypto.tink.Aead ;
import com.google.crypto.tink.KmsClient ;
import com.google.crypto.tink.aead.AeadConfig ;
import com.google.crypto.tink.aead.KmsEnvelopeAead ;
import com.google.crypto.tink.aead.PredefinedAeadParameters ;
import com.google.crypto.tink.integration.gcpkms.GcpKmsClient ;
import java.io.File ;
import java.io.FileInputStream ;
import java.io.FileOutputStream ;
import java.nio.file.Files ;
import java.nio.file.Paths ;
import java.security.GeneralSecurityException ;
import java.util.Arrays ;
/**
* A command-line utility for encrypting small files with envelope encryption and uploading the
* results to GCS.
*
* <p>The CLI takes the following required arguments:
*
* <ul>
* <li>mode: "encrypt" or "decrypt" to indicate if you want to encrypt or decrypt.
* <li>kek-uri: The URI for the Cloud KMS key to be used for envelope encryption.
* <li>gcp-credential-file: Name of the file with the GCP credentials (in JSON format) that can
* access the Cloud KMS key and the GCS input/output blobs.
* <li>gcp-project-id: The ID of the GCP project hosting the GCS blobs that you want to encrypt or
* decrypt.
* </ul>
*
* <p>When mode is "encrypt", it takes the following additional arguments:
*
* <ul>
* <li>local-input-file: Read the plaintext from this local file.
* <li>gcs-output-blob: Write the encryption result to this blob in GCS. The encryption result is
* bound to the location of this blob. That is, if you rename or move it to a different
* bucket, decryption will fail.
* </ul>
*
* <p>When mode is "decrypt", it takes the following additional arguments:
*
* <ul>
* <li>gcs-input-blob: Read the ciphertext from this blob in GCS.
* <li>local-output-file: Write the decryption result to this local file.
*/
public final class GcsEnvelopeAeadExample {
private static final String MODE_ENCRYPT = "encrypt" ;
private static final String MODE_DECRYPT = "decrypt" ;
private static final String GCS_PATH_PREFIX = "gs://" ;
public static void main ( String [] args ) throws Exception {
if ( args . length != 6 ) {
System . err . printf ( "Expected 6 parameters, got %d\n" , args . length );
System . err . println (
"Usage: java GcsEnvelopeAeadExample encrypt/decrypt kek-uri gcp-credential-file"
+ " gcp-project-id input-file output-file" );
System . exit ( 1 );
}
String mode = args [ 0 ] ;
String kekUri = args [ 1 ] ;
String gcpCredentialFilename = args [ 2 ] ;
String gcpProjectId = args [ 3 ] ;
// Initialise Tink: register all AEAD key types with the Tink runtime
AeadConfig . register ();
// Read the GCP credentials and create a remote AEAD object.
Aead remoteAead = null ;
try {
KmsClient kmsClient = new GcpKmsClient (). withCredentials ( gcpCredentialFilename );
remoteAead = kmsClient . getAead ( kekUri );
} catch ( GeneralSecurityException ex ) {
System . err . println ( "Error initializing GCP client: " + ex );
System . exit ( 1 );
}
// Create envelope AEAD primitive using AES256 GCM for encrypting the data
Aead aead = KmsEnvelopeAead . create ( PredefinedAeadParameters . AES256_GCM , remoteAead );
GoogleCredentials credentials =
GoogleCredentials . fromStream ( new FileInputStream ( gcpCredentialFilename ))
. createScoped ( Arrays . asList ( "https://www.googleapis.com/auth/cloud-platform" ));
Storage storage =
StorageOptions . newBuilder ()
. setProjectId ( gcpProjectId )
. setCredentials ( credentials )
. build ()
. getService ();
// Use the primitive to encrypt/decrypt files.
if ( MODE_ENCRYPT . equals ( mode )) {
// Encrypt the local file
byte [] input = Files . readAllBytes ( Paths . get ( args [ 4 ] ));
String gcsBlobPath = args [ 5 ] ;
// This will bind the encryption to the location of the GCS blob. That if, if you rename or
// move the blob to a different bucket, decryption will fail.
// See https://developers.google.com/tink/aead#associated_data.
byte [] associatedData = gcsBlobPath . getBytes ( UTF_8 );
byte [] ciphertext = aead . encrypt ( input , associatedData );
// Upload to GCS
String bucketName = getBucketName ( gcsBlobPath );
String objectName = getObjectName ( gcsBlobPath );
BlobId blobId = BlobId . of ( bucketName , objectName );
BlobInfo blobInfo = BlobInfo . newBuilder ( blobId ). build ();
storage . create ( blobInfo , ciphertext );
} else if ( MODE_DECRYPT . equals ( mode )) {
// Download the GCS blob
String gcsBlobPath = args [ 4 ] ;
String bucketName = getBucketName ( gcsBlobPath );
String objectName = getObjectName ( gcsBlobPath );
byte [] input = storage . readAllBytes ( bucketName , objectName );
// Decrypt to a local file
byte [] associatedData = gcsBlobPath . getBytes ( UTF_8 );
byte [] plaintext = aead . decrypt ( input , associatedData );
File outputFile = new File ( args [ 5 ] );
try ( FileOutputStream stream = new FileOutputStream ( outputFile )) {
stream . write ( plaintext );
}
} else {
System . err . println ( "The first argument must be either encrypt or decrypt, got: " + mode );
System . exit ( 1 );
}
System . exit ( 0 );
}
private static String getBucketName ( String gcsBlobPath ) {
if ( ! gcsBlobPath . startsWith ( GCS_PATH_PREFIX )) {
throw new IllegalArgumentException (
"GCS blob paths must start with gs://, got " + gcsBlobPath );
}
String bucketAndObjectName = gcsBlobPath . substring ( GCS_PATH_PREFIX . length ());
int firstSlash = bucketAndObjectName . indexOf ( "/" );
if ( firstSlash == - 1 ) {
throw new IllegalArgumentException (
"GCS blob paths must have format gs://my-bucket-name/my-object-name, got " + gcsBlobPath );
}
return bucketAndObjectName . substring ( 0 , firstSlash );
}
private static String getObjectName ( String gcsBlobPath ) {
if ( ! gcsBlobPath . startsWith ( GCS_PATH_PREFIX )) {
throw new IllegalArgumentException (
"GCS blob paths must start with gs://, got " + gcsBlobPath );
}
String bucketAndObjectName = gcsBlobPath . substring ( GCS_PATH_PREFIX . length ());
int firstSlash = bucketAndObjectName . indexOf ( "/" );
if ( firstSlash == - 1 ) {
throw new IllegalArgumentException (
"GCS blob paths must have format gs://my-bucket-name/my-object-name, got " + gcsBlobPath );
}
return bucketAndObjectName . substring ( firstSlash + 1 );
}
private GcsEnvelopeAeadExample () {}
}
For more information about the primitives and interfaces supported by Tink, see
the Get started page for Tink.
What's next?
Learn more about Tink .
Learn how to use client-side encryption with Cloud SQL .
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
