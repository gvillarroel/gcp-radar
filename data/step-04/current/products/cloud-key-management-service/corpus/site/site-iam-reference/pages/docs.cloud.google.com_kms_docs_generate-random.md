---
title: "Generating random bytes \_|\_ Cloud Key Management Service \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/kms/docs/generate-random
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/generate-random
  title: "Generating random bytes \_|\_ Cloud Key Management Service \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Generating random bytes | Cloud Key Management Service | Google Cloud Documentation
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
Use g RPC
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
Generating random bytes
Known limitations
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Generating random bytes
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Generating random bytes
Known limitations
This topic shows you how to retrieve random bytes from the random number
generator in Cloud HSM.
Before you begin
Grant the cloudkms.locations.generateRandomBytes permission in the cloud
location(s) where your service will be generating random bytes. You can learn
about permissions in Cloud Key Management Service at
Permissions and roles .
Generating random bytes
C# Go Java Node.js PHP Python Ruby
More
To run this code, first set up a C# development environment and
install the Cloud KMS C# SDK .
See more code actions.
View on GitHub
Light code theme
Dark code theme
Send feedback
using Google.Api.Gax.ResourceNames ;
using Google.Cloud.Kms.V1 ;
public class GenerateRandomBytesSample
{
public byte [] GenerateRandomBytes (
string projectId = "my-project" , string locationId = "us-east1" , int numBytes = 256 )
{
// Create the client.
KeyManagementServiceClient client = KeyManagementServiceClient . Create ();
// Build the location name.
LocationName locationName = new LocationName ( projectId , locationId );
// Call the API.
GenerateRandomBytesResponse result = client . GenerateRandomBytes ( locationName . ToString (), numBytes , ProtectionLevel . Hsm );
// The data comes back as raw bytes, which may include non-printable
// characters. To print the result, you could encode it as base64.
// string encodedData = result.Data.ToBase64();
return result . Data . ToByteArray ();
}
}
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
// generateRandomBytes generates random bytes with entropy sourced from the
// given location.
func generateRandomBytes ( w io . Writer , location string , numBytes int32 ) error {
// name := "projects/my-project/locations/us-east1"
// numBytes := 256
// Create the client.
ctx := context . Background ()
client , err := kms . NewKeyManagementClient ( ctx )
if err != nil {
return fmt . Errorf ( "failed to create kms client: %w" , err )
}
defer client . Close ()
// Build the request.
req := & kmspb . GenerateRandomBytesRequest {
Location : location ,
LengthBytes : numBytes ,
ProtectionLevel : kmspb . ProtectionLevel_HSM ,
}
// Generate random bytes.
result , err := client . GenerateRandomBytes ( ctx , req )
if err != nil {
return fmt . Errorf ( "failed to generate random bytes: %w" , err )
}
// The data comes back as raw bytes, which may include non-printable
// characters. This base64-encodes the result so it can be printed below.
encodedData := base64 . StdEncoding . EncodeToString ( result . Data )
fmt . Fprintf ( w , "Random bytes: %s" , encodedData )
return nil
}
To run this code, first set up a Java development environment and
install the Cloud KMS Java SDK .
import com.google.cloud.kms.v1. GenerateRandomBytesResponse ;
import com.google.cloud.kms.v1. KeyManagementServiceClient ;
import com.google.cloud.kms.v1. LocationName ;
import com.google.cloud.kms.v1. ProtectionLevel ;
import java.io.IOException ;
import java.util.Base64 ;
public class GenerateRandomBytes {
public void generateRandomBytes () throws IOException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String locationId = "us-east1" ;
int numBytes = 256 ;
generateRandomBytes ( projectId , locationId , numBytes );
}
// Create a new key for use with MacSign.
public void generateRandomBytes ( String projectId , String locationId , int numBytes )
throws IOException {
// Initialize client that will be used to send requests. This client only
// needs to be created once, and can be reused for multiple requests. After
// completing all of your requests, call the "close" method on the client to
// safely clean up any remaining background resources.
try ( KeyManagementServiceClient client = KeyManagementServiceClient . create ()) {
// Build the parent name for the location.
LocationName locationName = LocationName . of ( projectId , locationId );
// Generate the bytes.
GenerateRandomBytesResponse response =
client . generateRandomBytes ( locationName . toString (), numBytes , ProtectionLevel . HSM );
// The data comes back as raw bytes, which may include non-printable
// characters. This base64-encodes the result so it can be printed below.
String encodedData = Base64 . getEncoder (). encodeToString ( response . getData (). toByteArray ());
System . out . printf ( "Random bytes: %s" , encodedData );
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
// const numBytes = 256;
// Imports the Cloud KMS library
const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' );
// Instantiates a client
const client = new KeyManagementServiceClient ();
// Build the location name
const locationName = client . locationPath ( projectId , locationId );
async function generateRandomBytes () {
const [ randomBytesResponse ] = await client . generateRandomBytes ({
location : locationName ,
lengthBytes : numBytes ,
protectionLevel : 'HSM' ,
});
console . log ( `Random bytes: ${ randomBytesResponse . data . toString ( 'base64' ) } ` );
return randomBytesResponse ;
}
return generateRandomBytes ();
To run this code, first learn about using PHP on Google Cloud and
install the Cloud KMS PHP SDK .
use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient;
use Google\Cloud\Kms\V1\GenerateRandomBytesRequest;
use Google\Cloud\Kms\V1\ProtectionLevel;
/**
* Generate a random byte string using Cloud KMS.
*
* @param string $projectId The Google Cloud project ID.
* @param string $locationId The location ID (e.g. us-east1).
* @param int $numBytes The number of bytes to generate.
*/
function generate_random_bytes(
string $projectId,
string $locationId = 'us-east1',
int $numBytes = 256
) {
// Create the Cloud KMS client.
$client = new KeyManagementServiceClient();
// Build the parent name.
$locationName = $client->locationName($projectId, $locationId);
// Call the API.
$generateRandomBytesRequest = (new GenerateRandomBytesRequest())
->setLocation($locationName)
->setLengthBytes($numBytes)
->setProtectionLevel(ProtectionLevel::HSM);
$randomBytesResponse = $client->generateRandomBytes($generateRandomBytesRequest);
// The data comes back as raw bytes, which may include non-printable
// characters. This base64-encodes the result so it can be printed below.
$encodedData = base64_encode($randomBytesResponse->getData());
printf('Random bytes: %s' . PHP_EOL, $encodedData);
return $randomBytesResponse;
}
To run this code, first set up a Python development environment and
install the Cloud KMS Python SDK .
# Import base64 for encoding the bytes for printing.
import base64
# Import the client library.
from google.cloud import kms
def generate_random_bytes ( project_id : str , location_id : str , num_bytes : int ) - > bytes :
"""
Generate random bytes with entropy sourced from the given location.
Args:
project_id (string): Google Cloud project ID (e.g. 'my-project').
location_id (string): Cloud KMS location (e.g. 'us-east1').
num_bytes (integer): number of bytes of random data.
Returns:
bytes: Encrypted ciphertext.
"""
# Create the client.
client = kms . KeyManagementServiceClient ()
# Build the location name.
location_name = client . common_location_path ( project_id , location_id )
# Call the API.
protection_level = kms . ProtectionLevel . HSM
random_bytes_response = client . generate_random_bytes (
request = {
"location" : location_name ,
"length_bytes" : num_bytes ,
"protection_level" : protection_level ,
}
)
print ( f "Random bytes: { base64 . b64encode ( random_bytes_response . data ) } " )
return random_bytes_response
To run this code, first set up a Ruby development environment and
install the Cloud KMS Ruby SDK .
# TODO(developer): uncomment these values before running the sample.
# project_id = "my-project"
# location_id = "us-east1"
# num_bytes = 256
# Require the library.
require "google/cloud/kms"
# Create the client.
client = Google :: Cloud :: Kms . key_management_service
# Build the parent location name.
location_name = client . location_path project : project_id ,
location : location_id
# Call the API.
response = client . generate_random_bytes location : location_name , length_bytes : num_bytes , protection_level : :HSM
# The data comes back as raw bytes, which may include non-printable
# characters. This base64-encodes the result so it can be printed below.
encoded_data = Base64 . strict_encode64 response . data
puts "Random bytes: #{ encoded_data } "
Known limitations
The GenerateRandomBytes API call can produce at most 1024 bytes of
randomness per call. To generate more bytes of randomness, you can make multiple
API calls.
The GenerateRandomBytes API call is not supported for the Software or
External protection levels .
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
