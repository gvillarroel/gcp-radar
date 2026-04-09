---
title: "Cloud KMS client libraries \_|\_ Cloud Key Management Service \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/reference/libraries
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/reference/libraries
  title: "Cloud KMS client libraries \_|\_ Cloud Key Management Service \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Cloud KMS client libraries | Cloud Key Management Service | Google Cloud Documentation
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
Cloud KMS
All APIs & references
API client libraries
PKCS #11 library
Overview
Use OpenSSL
Apache TLS termination
NGINX TLS offload
Use pkcs11-tool
Sign Windows artifacts with Jsign
Windows CNG Provider
Overview
Signing Windows artifacts
Permissions and roles
Cloud EKM error reference
Overview
KMS REST reference
Overview
v1
REST Resources
folders
Overview
getAutokeyConfig
getKajPolicyConfig
updateAutokeyConfig
updateKajPolicyConfig
organizations
Overview
getKajPolicyConfig
updateKajPolicyConfig
projects
Overview
getAutokeyConfig
getKajPolicyConfig
showEffectiveAutokeyConfig
showEffectiveKeyAccessJustificationsEnrollmentConfig
showEffectiveKeyAccessJustificationsPolicyConfig
updateAutokeyConfig
updateKajPolicyConfig
projects.locations
Overview
generateRandomBytes
get
getEkmConfig
list
updateEkmConfig
projects.locations.ekmConfig
Overview
getIamPolicy
setIamPolicy
testIamPermissions
projects.locations.ekmConnections
Overview
create
get
getIamPolicy
list
patch
setIamPolicy
testIamPermissions
verifyConnectivity
projects.locations.keyHandles
Overview
create
get
list
projects.locations.keyRings
Overview
create
get
getIamPolicy
list
setIamPolicy
testIamPermissions
projects.locations.keyRings.cryptoKeys
Overview
create
decrypt
delete
encrypt
get
getIamPolicy
list
patch
setIamPolicy
testIamPermissions
updatePrimaryVersion
projects.locations.keyRings.cryptoKeys.cryptoKeyVersions
Overview
asymmetricDecrypt
asymmetricSign
create
decapsulate
delete
destroy
get
getPublicKey
import
list
macSign
macVerify
patch
rawDecrypt
rawEncrypt
restore
projects.locations.keyRings.importJobs
Overview
create
get
getIamPolicy
list
setIamPolicy
testIamPermissions
projects.locations.operations
Overview
get
projects.locations.retiredResources
Overview
get
list
projects.locations.singleTenantHsmInstances
Overview
create
get
list
projects.locations.singleTenantHsmInstances.proposals
Overview
approve
create
delete
execute
get
list
Types
AutokeyConfig
CryptoKeyVersionAlgorithm
CryptoKeyVersionView
EkmConfig
GetPolicyOptions
KeyAccessJustificationsPolicyConfig
KeyOperationAttestation
Location
Policy
ProtectionLevel
TestIamPermissionsResponse
KMS Inventory REST reference
Overview
v1
REST Resources
organizations.protectedResources
Overview
search
projects.cryptoKeys
Overview
list
projects.locations.keyRings.cryptoKeys
Overview
getProtectedResourcesSummary
KMS RPC reference
Overview
google.cloud.kms.v1
google.cloud.location
google.iam.v1
google.longrunning
google.rpc
google.type
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
Install the client library
Set up authentication
Use the client library Next steps
Additional resources
Home
Documentation
Security
Cloud KMS
Reference
Was this helpful?
Send feedback
Cloud KMS client libraries
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Install the client library
Set up authentication
Use the client library Next steps
Additional resources
This page shows how to get started with the Cloud Client Libraries for the
Cloud Key Management Service API. Client libraries make it easier to access
Google Cloud APIs from a supported language. Although you can use
Google Cloud APIs directly by making raw requests to the server, client
libraries provide simplifications that significantly reduce the amount of code
you need to write.
Read more about the Cloud Client Libraries
and the older Google API Client Libraries in
Client libraries explained .
Install the client library
C++ C# Go Java Node.js PHP Python Ruby
More
See Setting up a C++ development environment
for details about this client library's requirements and install dependencies.
Using PowerShell or the Visual Studio Package Manager Console:
Install-Package "Google.Cloud.Kms.V1" -Version "2.0.0-beta03"
Using the dotnet CLI:
dotnet add package "Google.Cloud.Kms.V1" -Version "2.0.0-beta03"
For more information, see Setting Up a C# Development Environment .
go get "cloud.google.com/go/kms/apiv1"
For more information, see Setting Up a Go Development Environment .
If you are using Maven , add
the following to your pom.xml file. For more information about
BOMs, see The Google Cloud Platform Libraries BOM .
< dependencyManagement >
< dependencies >
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>libraries - bom < / artifactId >
< version>26 .79.0 < / version >
< type>pom < / type >
< scope>import < / scope >
< / dependency >
< / dependencies >
< / dependencyManagement >
< dependencies >
< dependency >
< groupId>com . google . cloud < / groupId >
< artifactId>google - cloud - kms < / artifactId >
< / dependency >
< / dependencies >
If you are using Gradle ,
add the following to your dependencies:
implementation ' com . google . cloud : google - cloud - kms : 2.91.0 '
If you are using sbt , add
the following to your dependencies:
libraryDependencies += "com.google.cloud" % "google-cloud-kms" % "2.91.0"
If you're using Visual Studio Code or IntelliJ, you can add client libraries to your
project using the following IDE plugins:
Cloud Code for VS Code
Cloud Code for IntelliJ
The plugins provide additional functionality, such as key management for service accounts. Refer
to each plugin's documentation for details.
Note: Cloud Java client libraries do not currently support Android.
For more information, see Setting Up a Java Development Environment .
npm install "@google-cloud/kms"
For more information, see Setting Up a Node.js Development Environment .
composer require "google/cloud-kms"
For more information, see Using PHP on Google Cloud .
pip install --upgrade "google-cloud-kms"
For more information, see Setting Up a Python Development Environment .
gem install "google-cloud-kms"
For more information, see Setting Up a Ruby Development Environment .
Set up authentication
To authenticate calls to Google Cloud APIs, client libraries support
Application Default Credentials (ADC) ;
the libraries look for credentials in a set of defined locations and use those credentials
to authenticate requests to the API. With ADC, you can make
credentials available to your application in a variety of environments, such as local
development or production, without needing to modify your application code.
For production environments, the way you set up ADC depends on the service
and context. For more information, see Set up Application Default Credentials .
For a local development environment, you can set up ADC with the credentials
that are associated with your Google Account:
Install the Google Cloud CLI.
After installation,
initialize the Google Cloud CLI by running the following command:
gcloud init
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
If you're using a local shell, then create local authentication credentials for your user
account:
gcloud auth application-default login
You don't need to do this if you're using Cloud Shell.
If an authentication error is returned, and you are using an external identity provider
(IdP), confirm that you have
signed in to the gcloud CLI with your federated identity .
A sign-in screen appears. After you sign in, your credentials are stored in the
local credential file used by ADC .
Use the client library
The following example shows how to use the client library.
C++ C# Go Java Node.js PHP Python Ruby
More
#include "google/cloud/kms/v1/key_management_client.h"
#include "google/cloud/location.h"
#include <iostream>
int main ( int argc , char * argv []) try {
if ( argc != 3 ) {
std :: cerr << "Usage: " << argv [ 0 ] << " project-id location-id \n " ;
return 1 ;
}
auto const location = google :: cloud :: Location ( argv [ 1 ], argv [ 2 ]);
namespace kms = :: google :: cloud :: kms_v1 ;
auto client = kms :: KeyManagementServiceClient (
kms :: MakeKeyManagementServiceConnection ());
for ( auto kr : client . ListKeyRings ( location . FullName ())) {
if ( ! kr ) throw std :: move ( kr ). status ();
std :: cout << kr - > DebugString () << " \n " ;
}
return 0 ;
} catch ( google :: cloud :: Status const & status ) {
std :: cerr << "google::cloud::Status thrown: " << status << " \n " ;
return 1 ;
}
using Google.Api.Gax.ResourceNames ;
using Google.Cloud.Kms.V1 ;
public class QuickstartSample
{
public void Quickstart ( string projectId = "my-project" , string locationId = "us-east1" )
{
// Create a Cloud KMS client.
KeyManagementServiceClient client = KeyManagementServiceClient . Create ();
// Build the parent location name.
LocationName locationName = new LocationName ( projectId , locationId );
// Iterate over and print each key ring name;
foreach ( KeyRing keyRing in client . ListKeyRings ( locationName ))
{
// ... (e.g. keyRing.Name)
}
}
}
// Sample quickstart is a basic program that uses Cloud KMS.
package main
import (
"context"
"fmt"
"log"
kms "cloud.google.com/go/kms/apiv1"
"cloud.google.com/go/kms/apiv1/kmspb"
"google.golang.org/api/iterator"
)
func main () {
// GCP project with which to communicate.
projectID := "your-project-id"
// Location in which to list key rings.
locationID := "global"
// Create the client.
ctx := context . Background ()
client , err := kms . NewKeyManagementClient ( ctx )
if err != nil {
log . Fatalf ( "failed to setup client: %v" , err )
}
defer client . Close ()
// Create the request to list KeyRings.
listKeyRingsReq := & kmspb . ListKeyRingsRequest {
Parent : fmt . Sprintf ( "projects/%s/locations/%s" , projectID , locationID ),
}
// List the KeyRings.
it := client . ListKeyRings ( ctx , listKeyRingsReq )
// Iterate and print the results.
for {
resp , err := it . Next ()
if err == iterator . Done {
break
}
if err != nil {
log . Fatalf ( "Failed to list key rings: %v" , err )
}
fmt . Printf ( "key ring: %s\n" , resp . Name )
}
}
import com.google.cloud.kms.v1. KeyManagementServiceClient ;
import com.google.cloud.kms.v1. KeyManagementServiceClient . ListKeyRingsPagedResponse ;
import com.google.cloud.kms.v1. KeyRing ;
import com.google.cloud.kms.v1. LocationName ;
import java.io.IOException ;
public class Quickstart {
public void quickstart () throws IOException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String locationId = "us-east1" ;
quickstart ( projectId , locationId );
}
public void quickstart ( String projectId , String locationId ) throws IOException {
// Initialize client that will be used to send requests. This client only
// needs to be created once, and can be reused for multiple requests. After
// completing all of your requests, call the "close" method on the client to
// safely clean up any remaining background resources.
try ( KeyManagementServiceClient client = KeyManagementServiceClient . create ()) {
// Build the parent from the project and location.
LocationName parent = LocationName . of ( projectId , locationId );
// Call the API.
ListKeyRingsPagedResponse response = client . listKeyRings ( parent );
// Iterate over each key ring and print its name.
System . out . println ( "key rings:" );
for ( KeyRing keyRing : response . iterateAll ()) {
System . out . printf ( "%s%n" , keyRing . getName ());
}
}
}
}
//
// TODO(developer): Uncomment these variables before running the sample.
//
// const projectId = 'my-project';
// const locationId = 'us-east1';
// Imports the Cloud KMS library
const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' );
// Instantiates a client
const client = new KeyManagementServiceClient ();
// Build the location name
const locationName = client . locationPath ( projectId , locationId );
async function listKeyRings () {
const [ keyRings ] = await client . listKeyRings ({
parent : locationName ,
});
for ( const keyRing of keyRings ) {
console . log ( keyRing . name );
}
return keyRings ;
}
return listKeyRings ();
use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient;
use Google\Cloud\Kms\V1\ListKeyRingsRequest;
function quickstart(
string $projectId = 'my-project',
string $locationId = 'us-east1'
) {
// Create the Cloud KMS client.
$client = new KeyManagementServiceClient();
// Build the parent location name.
$locationName = $client->locationName($projectId, $locationId);
// Call the API.
$listKeyRingsRequest = (new ListKeyRingsRequest())
->setParent($locationName);
$keyRings = $client->listKeyRings($listKeyRingsRequest);
// Example of iterating over key rings.
printf('Key rings in %s:' . PHP_EOL, $locationName);
foreach ($keyRings as $keyRing) {
printf('%s' . PHP_EOL, $keyRing->getName());
}
return $keyRings;
}
from google.cloud import kms
from google.cloud import kms_v1
def quickstart (
project_id : str , location_id : str
) - > kms_v1 . services . key_management_service . pagers . ListKeyRingsPager :
# Create the client.
client = kms . KeyManagementServiceClient ()
# Build the parent location name.
location_name = f "projects/ { project_id } /locations/ { location_id } "
# Call the API.
key_rings = client . list_key_rings ( request = { "parent" : location_name })
# Example of iterating over key rings.
for key_ring in key_rings :
print ( key_ring . name )
return key_rings
# TODO(developer): uncomment these values before running the sample.
# project_id = "my-project"
# location_id = "us-east1"
# Require the library.
require "google/cloud/kms"
# Create the client.
client = Google :: Cloud :: Kms . key_management_service
# Build the parent location name.
location_name = client . location_path project : project_id , location : location_id
# Call the API.
key_rings = client . list_key_rings parent : location_name
# Example of iterating over key rings.
puts "Key rings in #{ location_name } "
key_rings . each do | key_ring |
puts key_ring . name
end
Next steps
Learn how to programmatically encrypt and decrypt data.
Encrypting and decrypting data with a symmetric key
Encrypting and decrypting data with an asymmetric key
Additional resources
C++ C# Go Java Node.js PHP Python Ruby
More
The following list contains links to more resources related to the
client library for C++:
API reference
Client libraries best practices
Issue tracker
google-cloud-kms on Stack Overflow
Source code
The following list contains links to more resources related to the
client library for C#:
API reference
Client libraries best practices
Issue tracker
google-cloud-kms on Stack Overflow
Source code
The following list contains links to more resources related to the
client library for Go:
API reference
Client libraries best practices
Issue tracker
google-cloud-kms on Stack Overflow
Source code
The following list contains links to more resources related to the
client library for Java:
API reference
Client libraries best practices
Issue tracker
google-cloud-kms on Stack Overflow
Source code
The following list contains links to more resources related to the
client library for Node.js:
API reference
Client libraries best practices
Issue tracker
google-cloud-kms on Stack Overflow
Source code
The following list contains links to more resources related to the
client library for PHP:
API reference
Client libraries best practices
Issue tracker
google-cloud-kms on Stack Overflow
Source code
The following list contains links to more resources related to the
client library for Python:
API reference
Client libraries best practices
Issue tracker
google-cloud-kms on Stack Overflow
Source code
The following list contains links to more resources related to the
client library for Ruby:
API reference
Client libraries best practices
Issue tracker
google-cloud-kms on Stack Overflow
Source code
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-03 UTC."],[],[]]
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
