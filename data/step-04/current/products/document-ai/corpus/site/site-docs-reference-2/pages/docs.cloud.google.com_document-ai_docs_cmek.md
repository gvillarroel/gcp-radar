---
title: "Customer-managed encryption keys (CMEK) \_|\_ Document AI \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/document-ai/docs/cmek
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/document-ai/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/document-ai/docs/cmek
  title: "Customer-managed encryption keys (CMEK) \_|\_ Document AI \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Document AI
Guides
Send feedback
Customer-managed encryption keys (CMEK)
Stay organized with collections
Save and categorize content based on your preferences.
By default, Google Cloud automatically encrypts data when it is at
rest using encryption keys
managed by Google.
If you have specific compliance or regulatory requirements related to the keys
that protect your data, you can use customer-managed encryption keys (CMEK) for
Document AI. Instead of Google managing the encryption keys that
protect your data, your Document AI processor is protected using a
key that you control and manage in Cloud Key Management Service (KMS) .
This guide describes CMEK for Document AI. For more information about
CMEK in general, including when and why to enable it, see the
Cloud Key Management Service documentation .
Prerequisite
The Document AI Service Agent must have
the Cloud KMS CryptoKey Encrypter/Decrypter
role on the key that you use.
The following example grants a role that provides access to a Cloud KMS
key:
gcloud
gcloud kms keys add-iam-policy-binding key \
--keyring key-ring \
--location location \
--project key_project_id \
--member serviceAccount:service- project_number @gcp-sa-prod-dai-core.iam.gserviceaccount.com \
--role roles/cloudkms.cryptoKeyEncrypterDecrypter
Replace key with the name of the key. Replace key-ring
with the name of the key ring where the key is located. Replace
location with the Document AI location for the key ring.
Replace key_project_id with the project for the key ring.
Replace project_number with your project's number.
C#
For more information, see the
Document AI C# API
reference documentation .
To authenticate to Document AI, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
using Google.Cloud.Iam.V1 ;
using Google.Cloud.Kms.V1 ;
public class IamAddMemberSample
{
public Policy IamAddMember (
string projectId = "my-project" , string locationId = "us-east1" , string keyRingId = "my-key-ring" , string keyId = "my-key" ,
string member = "user:foo@example.com" )
{
// Create the client.
KeyManagementServiceClient client = KeyManagementServiceClient . Create ();
// Build the resource name.
CryptoKeyName resourceName = new CryptoKeyName ( projectId , locationId , keyRingId , keyId );
// The resource name could also be a key ring.
// var resourceName = new KeyRingName(projectId, locationId, keyRingId);
// Get the current IAM policy.
Policy policy = client . IAMPolicyClient . GetIamPolicy (
new GetIamPolicyRequest
{
ResourceAsResourceName = resourceName
});
// Add the member to the policy.
policy . AddRoleMember ( "roles/cloudkms.cryptoKeyEncrypterDecrypter" , member );
// Save the updated IAM policy.
Policy result = client . IAMPolicyClient . SetIamPolicy (
new SetIamPolicyRequest
{
ResourceAsResourceName = resourceName ,
Policy = policy
});
// Return the resulting policy.
return result ;
}
}
Go
For more information, see the
Document AI Go API
reference documentation .
To authenticate to Document AI, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import (
"context"
"fmt"
"io"
kms "cloud.google.com/go/kms/apiv1"
)
// iamAddMember adds a new IAM member to the Cloud KMS key
func iamAddMember ( w io . Writer , name , member string ) error {
// NOTE: The resource name can be either a key or a key ring. If IAM
// permissions are granted on the key ring, the permissions apply to all keys
// in the key ring.
//
// name := "projects/my-project/locations/us-east1/keyRings/my-key-ring/cryptoKeys/my-key"
// member := "user:foo@example.com"
// Create the client.
ctx := context . Background ()
client , err := kms . NewKeyManagementClient ( ctx )
if err != nil {
return fmt . Errorf ( "failed to create kms client: %w" , err )
}
defer client . Close ()
// Get the current IAM policy.
handle := client . ResourceIAM ( name )
policy , err := handle . Policy ( ctx )
if err != nil {
return fmt . Errorf ( "failed to get IAM policy: %w" , err )
}
// Grant the member permissions. This example grants permission to use the key
// to encrypt data.
policy . Add ( member , "roles/cloudkms.cryptoKeyEncrypterDecrypter" )
if err := handle . SetPolicy ( ctx , policy ); err != nil {
return fmt . Errorf ( "failed to save policy: %w" , err )
}
fmt . Fprintf ( w , "Updated IAM policy for %s\n" , name )
return nil
}
Java
For more information, see the
Document AI Java API
reference documentation .
To authenticate to Document AI, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.kms.v1. CryptoKeyName ;
import com.google.cloud.kms.v1. KeyManagementServiceClient ;
import com.google.iam.v1. Binding ;
import com.google.iam.v1. Policy ;
import java.io.IOException ;
public class IamAddMember {
public void iamAddMember () throws IOException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String locationId = "us-east1" ;
String keyRingId = "my-key-ring" ;
String keyId = "my-key" ;
String member = "user:foo@example.com" ;
iamAddMember ( projectId , locationId , keyRingId , keyId , member );
}
// Add the given IAM member to the key.
public void iamAddMember (
String projectId , String locationId , String keyRingId , String keyId , String member )
throws IOException {
// Initialize client that will be used to send requests. This client only
// needs to be created once, and can be reused for multiple requests. After
// completing all of your requests, call the "close" method on the client to
// safely clean up any remaining background resources.
try ( KeyManagementServiceClient client = KeyManagementServiceClient . create ()) {
// Build the key version name from the project, location, key ring, key,
// and key version.
CryptoKeyName resourceName = CryptoKeyName . of ( projectId , locationId , keyRingId , keyId );
// The resource name could also be a key ring.
// KeyRingName resourceName = KeyRingName.of(projectId, locationId, keyRingId);
// Get the current policy.
Policy policy = client . getIamPolicy ( resourceName );
// Create a new IAM binding for the member and role.
Binding binding =
Binding . newBuilder ()
. setRole ( "roles/cloudkms.cryptoKeyEncrypterDecrypter" )
. addMembers ( member )
. build ();
// Add the binding to the policy.
Policy newPolicy = policy . toBuilder (). addBindings ( binding ). build ();
client . setIamPolicy ( resourceName , newPolicy );
System . out . printf ( "Updated IAM policy for %s%n" , resourceName . toString ());
}
}
}
Node.js
For more information, see the
Document AI Node.js API
reference documentation .
To authenticate to Document AI, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
//
// TODO(developer): Uncomment these variables before running the sample.
//
// const projectId = 'my-project';
// const locationId = 'us-east1';
// const keyRingId = 'my-key-ring';
// const keyId = 'my-key';
// const member = 'user:foo@example.com';
// Imports the Cloud KMS library
const { KeyManagementServiceClient } = require ( ' @google-cloud/kms ' );
// Instantiates a client
const client = new KeyManagementServiceClient ();
// Build the resource name
const resourceName = client . cryptoKeyPath (
projectId ,
locationId ,
keyRingId ,
keyId
);
// The resource name could also be a key ring.
// const resourceName = client.keyRingPath(projectId, locationId, keyRingId);
async function iamAddMember () {
// Get the current IAM policy.
const [ policy ] = await client . getIamPolicy ({
resource : resourceName ,
});
// Add the member to the policy.
policy . bindings . push ({
role : 'roles/cloudkms.cryptoKeyEncrypterDecrypter' ,
members : [ member ],
});
// Save the updated policy.
const [ updatedPolicy ] = await client . setIamPolicy ({
resource : resourceName ,
policy : policy ,
});
console . log ( 'Updated policy' );
return updatedPolicy ;
}
return iamAddMember ();
PHP
For more information, see the
Document AI PHP API
reference documentation .
To authenticate to Document AI, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
use Google\Cloud\Iam\V1\Binding;
use Google\Cloud\Iam\V1\GetIamPolicyRequest;
use Google\Cloud\Iam\V1\SetIamPolicyRequest;
use Google\Cloud\Kms\V1\Client\KeyManagementServiceClient;
function iam_add_member(
string $projectId = 'my-project',
string $locationId = 'us-east1',
string $keyRingId = 'my-key-ring',
string $keyId = 'my-key',
string $member = 'user:foo@example.com'
) {
// Create the Cloud KMS client.
$client = new KeyManagementServiceClient();
// Build the resource name.
$resourceName = $client->cryptoKeyName($projectId, $locationId, $keyRingId, $keyId);
// The resource name could also be a key ring.
// $resourceName = $client->keyRingName($projectId, $locationId, $keyRingId);
// Get the current IAM policy.
$getIamPolicyRequest = (new GetIamPolicyRequest())
->setResource($resourceName);
$policy = $client->getIamPolicy($getIamPolicyRequest);
// Add the member to the policy.
$bindings = $policy->getBindings();
$bindings[] = (new Binding())
->setRole('roles/cloudkms.cryptoKeyEncrypterDecrypter')
->setMembers([$member]);
$policy->setBindings($bindings);
// Save the updated IAM policy.
$setIamPolicyRequest = (new SetIamPolicyRequest())
->setResource($resourceName)
->setPolicy($policy);
$updatedPolicy = $client->setIamPolicy($setIamPolicyRequest);
printf('Added %s' . PHP_EOL, $member);
return $updatedPolicy;
}
Python
For more information, see the
Document AI Python API
reference documentation .
To authenticate to Document AI, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
from google.cloud import kms
from google.iam.v1 import policy_pb2 as iam_policy
def iam_add_member (
project_id : str , location_id : str , key_ring_id : str , key_id : str , member : str
) - > iam_policy . Policy :
"""
Add an IAM member to a resource.
Args:
project_id (string): Google Cloud project ID (e.g. 'my-project').
location_id (string): Cloud KMS location (e.g. 'us-east1').
key_ring_id (string): ID of the Cloud KMS key ring (e.g. 'my-key-ring').
key_id (string): ID of the key to use (e.g. 'my-key').
member (string): Member to add (e.g. 'user:foo@example.com')
Returns:
Policy: Updated Cloud IAM policy.
"""
# Create the client.
client = kms . KeyManagementServiceClient ()
# Build the resource name.
resource_name = client . crypto_key_path ( project_id , location_id , key_ring_id , key_id )
# The resource name could also be a key ring.
# resource_name = client.key_ring_path(project_id, location_id, key_ring_id);
# Get the current policy.
policy = client . get_iam_policy ( request = { "resource" : resource_name })
# Add the member to the policy.
policy . bindings . add (
role = "roles/cloudkms.cryptoKeyEncrypterDecrypter" , members = [ member ]
)
# Save the updated IAM policy.
request = { "resource" : resource_name , "policy" : policy }
updated_policy = client . set_iam_policy ( request = request )
print ( f "Added { member } to { resource_name } " )
return updated_policy
Ruby
For more information, see the
Document AI Ruby API
reference documentation .
To authenticate to Document AI, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
# TODO(developer): uncomment these values before running the sample.
# project_id = "my-project"
# location_id = "us-east1"
# key_ring_id = "my-key-ring"
# key_id = "my-key"
# member = "user:foo@example.com"
# Require the library.
require "google/cloud/kms"
# Create the client.
client = Google :: Cloud :: Kms . key_management_service
# Build the resource name.
resource_name = client . crypto_key_path project : project_id ,
location : location_id ,
key_ring : key_ring_id ,
crypto_key : key_id
# The resource name could also be a key ring.
# resource_name = client.key_ring_path project: project_id, location: location_id, key_ring: key_ring_id
# Create the IAM client.
iam_client = Google :: Cloud :: Kms :: V1 :: IAMPolicy :: Client . new
# Get the current IAM policy.
policy = iam_client . get_iam_policy resource : resource_name
# Add the member to the policy.
policy . bindings << Google :: Iam :: V1 :: Binding . new (
members : [ member ] ,
role : "roles/cloudkms.cryptoKeyEncrypterDecrypter"
)
# Save the updated policy.
updated_policy = iam_client . set_iam_policy resource : resource_name , policy : policy
puts "Added #{ member } "
Using CMEK
Encryption settings are available when you create a processor .
To use CMEK, select the CMEK option and select a key.
Note: The location of your key must match the location of your processor. For
example, if your processor is located in europe-west2 , the corresponding CMEK
key must also be located in europe-west2 . However, for the us and eu
multi-regions, the key must be in us-central1 and europe-west4 respectively.
The CMEK key is used for all data associated with the processor and its child
resources. All customer-related data that is sent to the processor is
automatically encrypted with the provided key before writing to disk.
Once a processor has been created, you cannot change its encryption settings. To
use a different key, you must create a new processor.
External keys
You can use Cloud External Key Manager (EKM) to create and
manage external keys to encrypt data within Google Cloud.
When you use a Cloud EKM key, Google has no control over the
availability of your externally managed key. If you request access to a
resource encrypted with an externally managed key, and the key is unavailable,
then Document AI will reject the request. There can be a delay of up to
10 minutes before you can access the resource after the key becomes available.
For more considerations when using external keys, see
EKM considerations .
CMEK supported resources
When storing any resource to disk, if any customer data is stored as part of the
resource, Document AI first encrypts the contents using the CMEK key.
Resource
Material Encrypted
Processor
N/A - no user data. However, if you specify a CMEK key during processor creation then it must be valid.
ProcessorVersion
All
Evaluation
All
CMEK supported APIs
The APIs that use the CMEK key for encryption include the following:
Method
Encryption
processDocument
N/A - no data saved to disk.
batchProcessDocuments
Data is temporarily stored on disk and encrypted using an ephemeral key (see CMEK compliance ).
trainProcessorVersion
Documents used for training are encrypted using the provided KMS/CMEK key.
evaluateProcessorVersion
Evaluations are encrypted using the provided KMS/CMEK key.
API requests that access encrypted resources fail if the key is disabled or is unreachable. Examples include the following:
Method
Decryption
getProcessorVersion
Processor versions trained using customer data are encrypted. Access requires decryption.
processDocument
Processing documents using an encrypted processor version requires decryption.
Import Documents
Importing documents with auto-labeling enabled using an encrypted processor version requires decryption.
CMEK and Cloud Storage
APIs, such as batchProcess ,
can read from and write to Cloud Storage buckets.
Any data written to Cloud Storage by Document AI is encrypted using the bucket's configured encryption key, which can be different than your processor's CMEK key.
For more information, see the CMEK documentation for Cloud Storage .
Previous
arrow_back
Security & Compliance
Next
Add audit logging
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
