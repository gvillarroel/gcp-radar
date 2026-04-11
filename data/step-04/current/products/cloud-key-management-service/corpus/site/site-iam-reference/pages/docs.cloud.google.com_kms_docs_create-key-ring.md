---
title: "Create a key ring \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/create-key-ring
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/create-key-ring
  title: "Create a key ring \_|\_ Cloud Key Management Service \_|\_ Google Cloud\
    \ Documentation"
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
Create a key ring
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to create a key ring in Cloud KMS. A key ring
is the root resource for Cloud KMS keys and key versions. Each key ring
exists within a given location. For more information about Cloud KMS
resources, see Cloud KMS resources .
Before you begin
Before completing the tasks on this page, you need the following:
A Google Cloud project resource to contain your
Cloud KMS resources. This project is called your key project . We
recommend that your key project does not contain any other
Google Cloud resources. Enable the Cloud KMS API on your key
project.
Enable the API
The name of the location where you want to create your key ring. Choose a
location that is near your other resources and that supports your chosen
protection level . To view available locations
and the protection levels they support, see
Cloud KMS locations .
Required roles
To get the permissions that
you need to create key rings,
ask your administrator to grant you the
Cloud KMS Admin ( roles/cloudkms.admin )
IAM role on the project or a parent resource.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains
the permissions required to create key rings. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to create key rings:
cloudkms.keyRings.create
cloudkms.keyRings.get
cloudkms.keyRings.list
cloudkms.locations.get
cloudkms.locations.list
resourcemanager.projects.get
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Caution: The
Cloud KMS
Admin role contains permissions for key maintenance and key version
destruction. To protect your Cloud KMS resources, this role
should only be assigned to individuals responsible for key administration.
Create a key ring
Follow these steps to create a key ring for your new key. If you want to use an
existing key ring instead, you can create a key .
Note: Key rings with the same name can exist in different
locations , so you must always specify the
location.
Console
Go to the Key Management page in the Google Cloud console.
Go to Key Management
Click Create key ring .
For Key ring name , enter a name for your key ring.
For Key ring location , select a location like "us-east1" .
Note: Choose a location that is near the resources you want to protect.
For CMEK usage, your key ring should be in the same location as the resources
you use it with. For Cloud EKM keys, the location must be physically
close to your external key manager (EKM) vendor.
Click Create .
gcloud
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
In your environment, run the gcloud kms keyrings create command:
gcloud kms keyrings create KEY_RING \
--location LOCATION
Replace the following:
KEY_RING : the name of the key ring that contains the key.
LOCATION : the Cloud KMS location of the key ring.
For information on all flags and possible values, run the command with the
--help flag.
C#
To run this code, first set up a C# development environment and
install the Cloud KMS C# SDK .
using Google.Api.Gax.ResourceNames ;
using Google.Cloud.Kms.V1 ;
public class CreateKeyRingSample
{
public KeyRing CreateKeyRing (
string projectId = "my-project" , string locationId = "us-east1" ,
string id = "my-key-ring" )
{
// Create the client.
KeyManagementServiceClient client = KeyManagementServiceClient . Create ();
// Build the parent location name.
LocationName locationName = new LocationName ( projectId , locationId );
// Build the key ring.
KeyRing keyRing = new KeyRing { };
// Call the API.
KeyRing result = client . CreateKeyRing ( locationName , id , keyRing );
// Return the result.
return result ;
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
// createKeyRing creates a new ring to store keys on KMS.
func createKeyRing ( w io . Writer , parent , id string ) error {
// parent := "projects/PROJECT_ID/locations/global"
// id := "my-key-ring"
// Create the client.
ctx := context . Background ()
client , err := kms . NewKeyManagementClient ( ctx )
if err != nil {
return fmt . Errorf ( "failed to create kms client: %w" , err )
}
defer client . Close ()
// Build the request.
req := & kmspb . CreateKeyRingRequest {
Parent : parent ,
KeyRingId : id ,
}
// Call the API.
result , err := client . CreateKeyRing ( ctx , req )
if err != nil {
return fmt . Errorf ( "failed to create key ring: %w" , err )
}
fmt . Fprintf ( w , "Created key ring: %s\n" , result . Name )
return nil
}
Java
To run this code, first set up a Java development environment and
install the Cloud KMS Java SDK .
import com.google.cloud.kms.v1. KeyManagementServiceClient ;
import com.google.cloud.kms.v1. KeyRing ;
import com.google.cloud.kms.v1. LocationName ;
import java.io.IOException ;
public class CreateKeyRing {
public void createKeyRing () throws IOException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String locationId = "us-east1" ;
String id = "my-asymmetric-signing-key" ;
createKeyRing ( projectId , locationId , id );
}
// Create a new key ring.
public void createKeyRing ( String projectId , String locationId , String id ) throws IOException {
// Initialize client that will be used to send requests. This client only
// needs to be created once, and can be reused for multiple requests. After
// completing all of your requests, call the "close" method on the client to
// safely clean up any remaining background resources.
try ( KeyManagementServiceClient client = KeyManagementServiceClient . create ()) {
// Build the parent name from the project and location.
LocationName locationName = LocationName . of ( projectId , locationId );
// Build the key ring to create.
KeyRing keyRing = KeyRing . newBuilder (). build ();
// Create the key ring.
KeyRing createdKeyRing = client . createKeyRing ( locationName , id , keyRing );
System . out . printf ( "Created key ring %s%n" , createdKeyRing . getName ());
}
}
}
Node.js
To run this code, first set up a Node.js development environment and
install the Cloud KMS Node.js SDK .
//
// TODO(developer): Uncomment these variables before running the sample.
//
// const projectId = 'my-project';
// const locationId = 'us-east1';
// const id = 'my-key-ring';
// Imports the Cloud KMS library
const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' );
// Instantiates a client
const client = new KeyManagementServiceClient ();
// Build the parent location name
const locationName = client . locationPath ( projectId , locationId );
async function createKeyRing () {
const [ keyRing ] = await client . createKeyRing ({
parent : locationName ,
keyRingId : id ,
});
console . log ( `Created key ring: ${ keyRing . name } ` );
return keyRing ;
}
return createKeyRing ();
PHP
To run this code, first learn about using PHP on Google Cloud and
install the Cloud KMS PHP SDK .
use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient;
use Google\Cloud\Kms\V1\CreateKeyRingRequest;
use Google\Cloud\Kms\V1\KeyRing;
function create_key_ring(
string $projectId = 'my-project',
string $locationId = 'us-east1',
string $id = 'my-key-ring'
): KeyRing {
// Create the Cloud KMS client.
$client = new KeyManagementServiceClient();
// Build the parent location name.
$locationName = $client->locationName($projectId, $locationId);
// Build the key ring.
$keyRing = new KeyRing();
// Call the API.
$createKeyRingRequest = (new CreateKeyRingRequest())
->setParent($locationName)
->setKeyRingId($id)
->setKeyRing($keyRing);
$createdKeyRing = $client->createKeyRing($createKeyRingRequest);
printf('Created key ring: %s' . PHP_EOL, $createdKeyRing->getName());
return $createdKeyRing;
}
Python
To run this code, first set up a Python development environment and
install the Cloud KMS Python SDK .
from google.cloud import kms
def create_key_ring (
project_id : str , location_id : str , key_ring_id : str
) - > kms . CryptoKey :
"""
Creates a new key ring in Cloud KMS
Args:
project_id (string): Google Cloud project ID (e.g. 'my-project').
location_id (string): Cloud KMS location (e.g. 'us-east1').
key_ring_id (string): ID of the key ring to create (e.g. 'my-key-ring').
Returns:
KeyRing: Cloud KMS key ring.
"""
# Create the client.
client = kms . KeyManagementServiceClient ()
# Build the parent location name.
location_name = f "projects/ { project_id } /locations/ { location_id } "
# Build the key ring.
key_ring = {}
# Call the API.
created_key_ring = client . create_key_ring (
request = {
"parent" : location_name ,
"key_ring_id" : key_ring_id ,
"key_ring" : key_ring ,
}
)
print ( f "Created key ring: { created_key_ring . name } " )
return created_key_ring
Ruby
To run this code, first set up a Ruby development environment and
install the Cloud KMS Ruby SDK .
# TODO(developer): uncomment these values before running the sample.
# project_id = "my-project"
# location_id = "us-east1"
# id = "my-key-ring"
# Require the library.
require "google/cloud/kms"
# Create the client.
client = Google :: Cloud :: Kms . key_management_service
# Build the parent location name.
location_name = client . location_path project : project_id , location : location_id
# Build the key ring.
key_ring = {}
# Call the API.
created_key_ring = client . create_key_ring parent : location_name , key_ring_id : id , key_ring : key_ring
puts "Created key ring: #{ created_key_ring . name } "
API
These examples use curl as an HTTP client
to demonstrate using the API. For more information about access control, see
Accessing the Cloud KMS API .
curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /keyRings?key_ring_id= KEY_RING " \
--request "POST" \
--header "authorization: Bearer TOKEN "
Replace the following:
PROJECT_ID : the ID of the project that contains the key ring.
KEY_RING : the name of the key ring that contains the key.
LOCATION : the Cloud KMS location of the key ring.
See the KeyRing.create API documentation
for more information.
What's next
Learn how to create a key .
Learn how to import keys .
Learn how to create external keys .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
