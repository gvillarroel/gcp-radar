---
title: "Delete Cloud KMS resources \_|\_ Cloud Key Management Service \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/delete-kms-resources
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/delete-kms-resources
  title: "Delete Cloud KMS resources \_|\_ Cloud Key Management Service \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Delete Cloud KMS resources | Cloud Key Management Service | Google Cloud Documentation
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
Español – América Latina
Français
Indonesia
Italiano
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
Delete a key version
Delete a key
View names of retired resources
What's next
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Delete Cloud KMS resources
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Delete a key version
Delete a key
View names of retired resources
What's next
This document shows how to permanently delete Cloud Key Management Service keys
and key versions. This operation is irreversible.
In Cloud KMS, destruction and deletion are different operations:
Destruction : Disables a key version permanently, including irreversibly
destroying the underlying key material after the specified destruction
period. A key version in the DESTROYED state can't be used for
cryptographic operations and is no longer billed. You can destroy a key
version that was used to encrypt data to crypto-shred data that you want
to be permanently unrecoverable.
Destroyed key versions are still included in lists of Cloud KMS
resources.
Deletion : Removes a key or key version from lists of
Cloud KMS resources in the Google Cloud console, Google Cloud CLI,
Cloud Key Management Service API, and client libraries. For projects with many keys or key
versions that are no longer active, deletion streamlines search and list
operations. Deleted CryptoKey names can't be reused. You can view a list of
deleted CryptoKey names that can't be reused using the
retiredResources.list
method.
Before you begin
To get the permissions that
you need to delete and view Cloud KMS resources,
ask your administrator to grant you the
Cloud KMS administrator ( roles/cloudkms.admin )
IAM role on the key.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains
the permissions required to delete and view Cloud KMS resources. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to delete and view Cloud KMS resources:
To delete a key version:
cloudkms.cryptoKeyVersions.delete
To delete a key:
cloudkms.cryptoKeys.delete
To view deleted resources:
cloudkms.retiredResources.get
cloudkms.retiredResources.list
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Delete a key version
You can delete a key version if it's in the DESTROYED , IMPORT_FAILED , or
GENERATION_FAILED state. If the key version was imported, it can only be
deleted if the import failed.
To permanently delete a key version, follow these steps:
Console gcloud Go Java Python API
More
In the Google Cloud console, go to the
Key Management page.
Go to Key Management
Click the name of the key ring that contains the key and key version
that you want to delete.
Click the key that contains the key version that you want to delete.
In the Versions table, locate the key version that you want to
delete, and then click more_vert
More actions .
In the More actions menu, click Delete .
In the confirmation prompt, enter the key name and then click
Delete .
To delete a key version, run the following command:
gcloud kms keys versions delete KEY_VERSION \
--location= LOCATION \
--keyring= KEY_RING \
--key= KEY_NAME
Replace the following:
KEY_VERSION : the number of the key version that you want to
permanently delete. The indicated key version must be in the
DESTROYED , IMPORT_FAILED , or GENERATION_FAILED state.
LOCATION : the Cloud KMS location of the key ring.
KEY_RING : the name of the key ring that contains the key.
KEY_NAME : the name of the key that contains the key version
that you want to permanently delete.
To learn how to install and use the client library for Cloud KMS, see
Cloud KMS client libraries .
To authenticate to Cloud KMS, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import (
"context"
"fmt"
"io"
kms "cloud.google.com/go/kms/apiv1"
"cloud.google.com/go/kms/apiv1/kmspb"
)
// deleteCryptoKeyVersion deletes a crypto key version. This action is permanent and cannot be undone. Once the key version is deleted, it will no longer exist.
func deleteCryptoKeyVersion ( w io . Writer , name string ) error {
// name := "projects/my-project/locations/us-east1/keyRings/my-key-ring/cryptoKeys/my-key/cryptoKeyVersions/1"
// Create the client.
ctx := context . Background ()
client , err := kms . NewKeyManagementClient ( ctx )
if err != nil {
return fmt . Errorf ( "failed to create kms client: %w" , err )
}
defer client . Close ()
// Build the request.
req := & kmspb . DeleteCryptoKeyVersionRequest {
Name : name ,
}
// Call the API.
// Warning: This operation is permanent and cannot be undone.
op , err := client . DeleteCryptoKeyVersion ( ctx , req )
if err != nil {
return fmt . Errorf ( "failed to delete crypto key version: %w" , err )
}
// Wait for the operation to complete.
if err := op . Wait ( ctx ); err != nil {
return fmt . Errorf ( "failed to wait for delete crypto key version operation: %w" , err )
}
fmt . Fprintf ( w , "Deleted crypto key version: %s\n" , req . Name )
return nil
}
To learn how to install and use the client library for Cloud KMS, see
Cloud KMS client libraries .
To authenticate to Cloud KMS, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.kms.v1. CryptoKeyVersionName ;
import com.google.cloud.kms.v1. KeyManagementServiceClient ;
import java.io.IOException ;
public class DeleteKeyVersion {
public void deleteKeyVersion () throws IOException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String locationId = "us-east1" ;
String keyRingId = "my-key-ring" ;
String keyId = "my-key" ;
String keyVersionId = "123" ;
deleteKeyVersion ( projectId , locationId , keyRingId , keyId , keyVersionId );
}
// deleteKeyVersion deletes a key version. This action is permanent and cannot be undone. Once the
// key version is deleted, it will no longer exist.
public void deleteKeyVersion (
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
// Delete the key version.
// Warning: This operation is permanent and cannot be undone.
// Wait for the operation to complete.
client . deleteCryptoKeyVersionAsync ( keyVersionName ). get ();
System . out . printf ( "Deleted key version: %s%n" , keyVersionName . toString ());
} catch ( Exception e ) {
System . err . printf ( "Failed to delete key version: %s%n" , e . getMessage ());
}
}
}
To learn how to install and use the client library for Cloud KMS, see
Cloud KMS client libraries .
To authenticate to Cloud KMS, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
from google.cloud import kms
def delete_key_version (
project_id : str , location_id : str , key_ring_id : str , key_id : str , version_id : str
) - > None :
"""
Delete the given key version. This action is permanent and cannot be undone.
Once the key version is deleted, it will no longer exist.
Args:
project_id (str): Google Cloud project ID (e.g. 'my-project').
location_id (str): Cloud KMS location (e.g. 'us-east1').
key_ring_id (str): ID of the Cloud KMS key ring (e.g. 'my-key-ring').
key_id (str): ID of the key to use (e.g. 'my-key').
version_id (str): ID of the key version to delete (e.g. '1').
Returns:
None
"""
# Create the client.
client = kms . KeyManagementServiceClient ()
# Build the key version name.
key_version_name = client . crypto_key_version_path (
project_id , location_id , key_ring_id , key_id , version_id
)
# Call the API.
# Note: delete_crypto_key_version returns a long-running operation.
# Warning: This operation is permanent and cannot be undone.
operation = client . delete_crypto_key_version ( request = { "name" : key_version_name })
# Wait for the operation to complete.
operation . result ()
print ( f "Deleted key version: { key_version_name } " )
To delete a key version, call the
cryptoKeyVersions.delete
method. This method returns a long-running operation that you can poll
to confirm that the key version has been deleted.
curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING /cryptoKeys/ KEY_NAME /cryptoKeyVersions/ KEY_VERSION " \
--request "DELETE" \
--header "authorization: Bearer TOKEN "
Replace the following:
PROJECT_ID : the ID of the project that contains the key ring.
LOCATION : the Cloud KMS location of the key ring.
KEY_RING : the name of the key ring that contains the key.
KEY_NAME : the name of the key that contains the key version
that you want to permanently delete.
KEY_VERSION : the number of the key version that you want to
permanently delete. The indicated key version must be in the
DESTROYED , IMPORT_FAILED , or GENERATION_FAILED state.
The output of the command returns an
Operation .
You need the name of the operation for the next step.
To confirm that the key version has been deleted, you can call the
operations.get method:
curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /operations/ OPERATION_NAME " \
--request "GET" \
--header "authorization: Bearer TOKEN "
Replace the following:
PROJECT_ID : the ID of the project that contains the key ring.
LOCATION : the Cloud KMS location of the key ring.
OPERATION_NAME : the name of the operation that was
returned by the previous method.
When the output of this method shows that done is true , the
operation has finished. If no error is indicated, then the key version
has been permanently deleted.
Delete a key
You can delete a key if it meets the following conditions:
The key contains no key versions that aren't yet deleted.
The key doesn't have automatic key rotation scheduled.
The key wasn't created by Cloud KMS Autokey.
To permanently delete a key, follow these steps:
Console gcloud Go Java Python API
More
In the Google Cloud console, go to the
Key Management page.
Go to Key Management
Click the name of the key ring that contains the key that you want to
delete.
Delete the key using in either of the following locations:
Key list page : In the Keys for " KEY_RING " key ring
table, locate the key that you want to delete, click
more_vert Key actions ,
and then click Delete .
Key details page : Click the name of the key that you want to
delete to open its Key details page. At the top of the page,
click Delete .
In the confirmation prompt, enter the key name and then click
Delete .
To delete a key, run the following command:
gcloud kms keys delete KEY_NAME \
--location= LOCATION \
--keyring= KEY_RING
Replace the following:
KEY_NAME : the name of the key that you want to permanently
delete. The key must not contain any key versions that haven't already
been deleted, and it must not be a key that was created by
Autokey.
LOCATION : the Cloud KMS location of the key ring.
KEY_RING : the name of the key ring that contains the key.
To learn how to install and use the client library for Cloud KMS, see
Cloud KMS client libraries .
To authenticate to Cloud KMS, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import (
"context"
"fmt"
"io"
kms "cloud.google.com/go/kms/apiv1"
"cloud.google.com/go/kms/apiv1/kmspb"
)
// deleteCryptoKey deletes a crypto key. This action is permanent and cannot be undone. Once the key is deleted, it will no longer exist.
func deleteCryptoKey ( w io . Writer , name string ) error {
// name := "projects/my-project/locations/us-east1/keyRings/my-key-ring/cryptoKeys/my-key"
// Create the client.
ctx := context . Background ()
client , err := kms . NewKeyManagementClient ( ctx )
if err != nil {
return fmt . Errorf ( "failed to create kms client: %w" , err )
}
defer client . Close ()
// Build the request.
req := & kmspb . DeleteCryptoKeyRequest {
Name : name ,
}
// Call the API.
// Warning: This operation is permanent and cannot be undone.
op , err := client . DeleteCryptoKey ( ctx , req )
if err != nil {
return fmt . Errorf ( "failed to delete crypto key: %w" , err )
}
// Wait for the operation to complete.
if err := op . Wait ( ctx ); err != nil {
return fmt . Errorf ( "failed to wait for delete crypto key operation: %w" , err )
}
fmt . Fprintf ( w , "Deleted crypto key: %s\n" , req . Name )
return nil
}
To learn how to install and use the client library for Cloud KMS, see
Cloud KMS client libraries .
To authenticate to Cloud KMS, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.kms.v1. CryptoKeyName ;
import com.google.cloud.kms.v1. DeleteCryptoKeyMetadata ;
import com.google.cloud.kms.v1. KeyManagementServiceClient ;
import java.io.IOException ;
import java.util.concurrent.ExecutionException ;
public class DeleteKey {
public void deleteKey () throws IOException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String locationId = "us-east1" ;
String keyRingId = "my-key-ring" ;
String keyId = "my-key" ;
deleteKey ( projectId , locationId , keyRingId , keyId );
}
// deleteKey deletes a crypto key. This action is permanent and cannot be undone. Once the key
// is deleted, it will no longer exist.
public void deleteKey ( String projectId , String locationId , String keyRingId , String keyId )
throws IOException {
// Initialize client that will be used to send requests. This client only
// needs to be created once, and can be reused for multiple requests. After
// completing all of your requests, call the "close" method on the client to
// safely clean up any remaining background resources.
try ( KeyManagementServiceClient client = KeyManagementServiceClient . create ()) {
// Build the key name from the project, location, key ring, and key.
CryptoKeyName keyName = CryptoKeyName . of ( projectId , locationId , keyRingId , keyId );
// Delete the key.
// Warning: This operation is permanent and cannot be undone.
// Wait for the operation to complete.
client . deleteCryptoKeyAsync ( keyName ). get ();
System . out . printf ( "Deleted key: %s%n" , keyName . toString ());
} catch ( Exception e ) {
System . err . printf ( "Failed to delete key: %s%n" , e . getMessage ());
}
}
}
To learn how to install and use the client library for Cloud KMS, see
Cloud KMS client libraries .
To authenticate to Cloud KMS, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
from google.cloud import kms
def delete_key (
project_id : str , location_id : str , key_ring_id : str , key_id : str
) - > None :
"""
Delete the given key. This action is permanent and cannot be undone. Once the
key is deleted, it will no longer exist.
Args:
project_id (str): Google Cloud project ID (e.g. 'my-project').
location_id (str): Cloud KMS location (e.g. 'us-east1').
key_ring_id (str): ID of the Cloud KMS key ring (e.g. 'my-key-ring').
key_id (str): ID of the key to use (e.g. 'my-key').
Returns:
None
"""
# Create the client.
client = kms . KeyManagementServiceClient ()
# Build the key name.
key_name = client . crypto_key_path ( project_id , location_id , key_ring_id , key_id )
# Call the API.
# Note: delete_crypto_key returns a long-running operation.
# Warning: This operation is permanent and cannot be undone.
operation = client . delete_crypto_key ( request = { "name" : key_name })
# Wait for the operation to complete.
operation . result ()
print ( f "Deleted key: { key_name } " )
To delete a key, call the
cryptoKey.delete
method. This method returns a long-running operation
that you can poll to confirm that the key has been deleted.
curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING /cryptoKeys/ KEY_NAME " \
--request "DELETE" \
--header "authorization: Bearer TOKEN "
Replace the following:
PROJECT_ID : the ID of the project that contains the key ring.
LOCATION : the Cloud KMS location of the key ring.
KEY_RING : the name of the key ring that contains the key.
KEY_NAME : the name of the key that you want to permanently
delete. The key must not contain any key versions that haven't already
been deleted, and it must not be a key that was created by
Autokey.
The output of the command returns an
Operation .
You need the name of the operation for the next step.
To confirm that the key has been deleted, you can call the
operations.get method:
curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /operations/ OPERATION_NAME " \
--request "GET" \
--header "authorization: Bearer TOKEN "
Replace the following:
PROJECT_ID : the ID of the project that contains the key ring.
LOCATION : the Cloud KMS location of the key ring.
OPERATION_NAME : the name of the operation that was returned by
the previous method.
When the output of this method shows that done is true , the operation
has finished. If no error is indicated, then the key has been
permanently deleted.
View names of retired resources
The names of keys that have been deleted can't be reused in the same
Google Cloud project. This prevents two different keys from having
the same resource identifier. Names for deleted keys are stored in
retiredResources objects. You can query retiredResources to view names that
can't be reused for new Cloud KMS resources.
To view a list of all retired resources, follow these steps:
gcloud Go Java Python API
More
Run the following command:
gcloud kms retired-resources list \
--location= LOCATION
Replace the following:
LOCATION : the location where you want to view retired resources.
To learn how to install and use the client library for Cloud KMS, see
Cloud KMS client libraries .
To authenticate to Cloud KMS, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import (
"context"
"fmt"
"io"
kms "cloud.google.com/go/kms/apiv1"
kmspb "cloud.google.com/go/kms/apiv1/kmspb"
"google.golang.org/api/iterator"
)
// listRetiredResources lists retired resources.
func listRetiredResources ( w io . Writer , parent string ) error {
// parent := "projects/my-project/locations/us-east1"
ctx := context . Background ()
client , err := kms . NewKeyManagementClient ( ctx )
if err != nil {
return fmt . Errorf ( "failed to create kms client: %w" , err )
}
defer client . Close ()
// Build the request.
req := & kmspb . ListRetiredResourcesRequest {
Parent : parent ,
}
// Call the API.
it := client . ListRetiredResources ( ctx , req )
// Iterate over the results.
for {
resp , err := it . Next ()
if err == iterator . Done {
break
}
if err != nil {
return fmt . Errorf ( "failed to list retired resources: %w" , err )
}
fmt . Fprintf ( w , "Retired resource: %s\n" , resp . Name )
}
return nil
}
To learn how to install and use the client library for Cloud KMS, see
Cloud KMS client libraries .
To authenticate to Cloud KMS, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.kms.v1. KeyManagementServiceClient ;
import com.google.cloud.kms.v1. LocationName ;
import com.google.cloud.kms.v1. RetiredResource ;
import java.io.IOException ;
public class ListRetiredResources {
public void listRetiredResources () throws IOException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String locationId = "us-east1" ;
listRetiredResources ( projectId , locationId );
}
// List retired resources in a specific project and location.
public void listRetiredResources ( String projectId , String locationId )
throws IOException {
// Initialize client that will be used to send requests. This client only
// needs to be created once, and can be reused for multiple requests. After
// completing all of your requests, call the "close" method on the client to
// safely clean up any remaining background resources.
try ( KeyManagementServiceClient client = KeyManagementServiceClient . create ()) {
// Build the location name from the project and location.
LocationName locationName = LocationName . of ( projectId , locationId );
// List the retired resources.
for ( RetiredResource resource : client . listRetiredResources ( locationName ). iterateAll ()) {
System . out . printf ( "Retired resource: %s%n" , resource . getName ());
}
}
}
}
To learn how to install and use the client library for Cloud KMS, see
Cloud KMS client libraries .
To authenticate to Cloud KMS, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
from typing import List
from google.cloud import kms
def list_retired_resources ( project_id : str , location_id : str ) - > List [ kms . RetiredResource ]:
"""
List the retired resources in a location.
Args:
project_id (str): Google Cloud project ID (e.g. 'my-project').
location_id (str): Cloud KMS location (e.g. 'us-east1').
Returns:
list[kms.RetiredResource]: The list of retired resources.
"""
# Create the client.
client = kms . KeyManagementServiceClient ()
# Build the parent location name.
parent = client . common_location_path ( project_id , location_id )
# Call the API.
# The API paginates, but the Python client library handles that for us.
resources_list = list ( client . list_retired_resources ( request = { "parent" : parent }))
# Iterate over the resources and print them.
for resource in resources_list :
print ( f "Retired resource: { resource . name } " )
return resources_list
Use the
retiredResources.list
method:
curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /retiredResources/" \
--request "GET" \
--header "authorization: Bearer TOKEN "
Replace the following:
PROJECT_ID : the identifier of the project where you want to view
retired resources.
LOCATION : the location where you want to view retired resources.
To view metadata for an individual retired resource, follow these steps:
gcloud Go Java Python API
More
Run the following command:
gcloud kms retired-resources describe RETIRED_RESOURCE \
--location= LOCATION
Replace the following:
RETIRED_RESOURCE : the name of the resource that you want to view.
LOCATION : the location where you want to view a retired resource.
To learn how to install and use the client library for Cloud KMS, see
Cloud KMS client libraries .
To authenticate to Cloud KMS, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import (
"context"
"fmt"
"io"
kms "cloud.google.com/go/kms/apiv1"
kmspb "cloud.google.com/go/kms/apiv1/kmspb"
)
// getRetiredResource gets a retired resource.
func getRetiredResource ( w io . Writer , name string ) error {
// name := "projects/my-project/locations/us-east1/retiredResources/my-retired-resource"
ctx := context . Background ()
client , err := kms . NewKeyManagementClient ( ctx )
if err != nil {
return fmt . Errorf ( "failed to create kms client: %w" , err )
}
defer client . Close ()
// Build the request.
req := & kmspb . GetRetiredResourceRequest {
Name : name ,
}
// Call the API.
result , err := client . GetRetiredResource ( ctx , req )
if err != nil {
return fmt . Errorf ( "failed to get retired resource: %w" , err )
}
fmt . Fprintf ( w , "Got retired resource: %s\n" , result . Name )
return nil
}
To learn how to install and use the client library for Cloud KMS, see
Cloud KMS client libraries .
To authenticate to Cloud KMS, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
import com.google.cloud.kms.v1. KeyManagementServiceClient ;
import com.google.cloud.kms.v1. RetiredResource ;
import com.google.cloud.kms.v1. RetiredResourceName ;
import java.io.IOException ;
public class GetRetiredResource {
public void getRetiredResource () throws IOException {
// TODO(developer): Replace these variables before running the sample.
String projectId = "your-project-id" ;
String locationId = "us-east1" ;
String retiredResourceId = "my-retired-resource-id" ;
getRetiredResource ( projectId , locationId , retiredResourceId );
}
// Get the retired resource.
public void getRetiredResource (
String projectId , String locationId , String retiredResourceId )
throws IOException {
// Initialize client that will be used to send requests. This client only
// needs to be created once, and can be reused for multiple requests. After
// completing all of your requests, call the "close" method on the client to
// safely clean up any remaining background resources.
try ( KeyManagementServiceClient client = KeyManagementServiceClient . create ()) {
// Build the retired resource name from the project, location, and retired resource id.
RetiredResourceName name = RetiredResourceName . of ( projectId , locationId , retiredResourceId );
// Get the retired resource.
RetiredResource response = client . getRetiredResource ( name );
System . out . printf ( "Retired resource: %s%n" , response . getName ());
}
}
}
To learn how to install and use the client library for Cloud KMS, see
Cloud KMS client libraries .
To authenticate to Cloud KMS, set up Application Default Credentials.
For more information, see
Set up authentication for a local development environment .
from google.cloud import kms
def get_retired_resource (
project_id : str , location_id : str , retired_resource_id : str
) - > kms . RetiredResource :
"""
Get the details of a retired resource.
Args:
project_id (str): Google Cloud project ID (e.g. 'my-project').
location_id (str): Cloud KMS location (e.g. 'us-east1').
resource_id (str): ID of the retired resource to get.
Returns:
kms.RetiredResource: The requested retired resource.
"""
# Create the client.
client = kms . KeyManagementServiceClient ()
# Build the retired resource name.
# Note: Retired resources are tied to a Location, not a KeyRing.
# The name is like projects/{project}/locations/{location}/retiredResources/{id}
name = client . retired_resource_path ( project_id , location_id , retired_resource_id )
# Call the API.
response = client . get_retired_resource ( request = { "name" : name })
print ( f "Got retired resource: { response . name } " )
return response
Use the
retiredResources.get
method:
curl "https://cloudkms.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /retiredResources/ RETIRED_RESOURCE " \
--request "GET" \
--header "authorization: Bearer TOKEN "
Replace the following:
PROJECT_ID : the identifier of the project where you want to view a
retired resource.
LOCATION : the location where you want to view a retired resource.
RETIRED_RESOURCE : the name of the resource that you want to view.
The output of the method includes the resourceType , the deleteTime , and the
full resource identifier of the deleted resource.
What's next
Learn more about destroying and restoring key versions .
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
Español – América Latina
Français
Indonesia
Italiano
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
