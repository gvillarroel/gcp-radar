---
title: "Create and manage access control lists (ACLs) \_|\_ Cloud Storage \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/storage/docs/introduction
source_metadata:
  url: https://docs.cloud.google.com/storage/docs/access-control/create-manage-lists
  title: "Create and manage access control lists (ACLs) \_|\_ Cloud Storage \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Cloud Storage
Guides
Send feedback
Create and manage access control lists (ACLs)
Stay organized with collections
Save and categorize content based on your preferences.
Overview
This page describes how to control access to buckets and objects
using Access Control Lists (ACLs). ACLs are a mechanism you can use to define
who has access to your buckets and objects, as well as what level of access they
have.
See the ACL overview to learn more about whether you should use ACLs for
controlling access to your resources.
Required roles
To get the permissions that you need to create and manage ACLs, ask your
administrator to grant you the Storage Admin
( roles/storage.admin ) IAM role on the bucket that
contains the objects for which you want to create and manage ACLs.
This predefined role contains the permissions required to create and manage
ACLs. To see the exact permissions that are required, expand the
Required permissions section:
Required permissions
storage.buckets.get
storage.buckets.list
This permission is only required for using the Google Cloud console
to perform the tasks on this page.
storage.buckets.setIamPolicy
storage.buckets.update
storage.objects.get
storage.objects.getIamPolicy
storage.objects.setIamPolicy
storage.objects.update
You can also get these permissions with custom roles .
For information about granting roles on buckets, see
Set and manage IAM policies on buckets .
Set or modify ACLs
Console
Note: You cannot use the Google Cloud console to set or modify ACLs on
buckets; the Google Cloud console can only be used to set or modify ACLs
on individual objects.
Go to the Cloud Storage browser in the Google Cloud console.
Go to the Cloud Storage browser
From the list of buckets, click the name of the bucket that contains
the object whose ACL you want to modify.
Click the name of the object for which you want to set or modify ACLs.
Click Edit access .
A permission dialog with the object's current ACL opens.
Click + Add entry .
Choose the type of Entity to give permission to.
Entity specifies the type of thing that's getting the permission
(for example a user or a group). Refer to Access Control Scopes
for a list of supported values for Entity .
Enter a value in Name .
Name identifies a specific user, group, or other entity type. Refer
to Access Control Scopes for a list of supported values for
Name .
Together, Entity and Name define who the permission applies to.
Choose a value in Access .
Access defines the permission that you want to set on the object.
Refer to Access Control Permissions for a list of supported values
for Access .
Click Save .
To learn how to get detailed error information about failed Cloud Storage
operations in the Google Cloud console, see
Troubleshooting .
Command line
To add, modify, or remove an individual grant on an object, use the
objects update command with the relevant flag:
gcloud storage objects update gs:// BUCKET_NAME / OBJECT_NAME FLAG
Where:
BUCKET_NAME is the name of the bucket that
contains the object that the modification applies to. For example,
example-travel-maps .
OBJECT_NAME is the name of the object that
the modification applies to. For example, paris.jpg .
FLAG is one of the following:
--add-acl-grant , along with the grant you want to add or
modify. For example, --add-acl-grant=entity=user-jeffersonloveshiking@gmail.com,role=READER .
--remove-acl-grant , along with the entity whose access you
want to remove. For example, --remove-acl-grant=user-jeffersonloveshiking@gmail.com .
To replace all ACLs for an object:
Define the ACLs in a JSON- or YAML-formatted file.
For example, the following ACLs grant the OWNER permission for the
object paris.jpg to the owners of project 867489160491 and the user
jeffersonloveshiking@gmail.com , as well as the READER permission for paris.jpg to the
members of the gs-announce group:
[
{
"entity": "project-owners-867489160491",
"role": "OWNER",
"projectTeam": {
"projectNumber": "867489160491",
"team": "owners"
},
},
{
"entity": "user-jeffersonloveshiking@gmail.com",
"email": "jeffersonloveshiking@gmail.com",
"role": "OWNER"
},
{
"entity": "group-gs-announce@googlegroups.com",
"email": "gs-announce@googlegroups.com",
"role": "READER"
}
]
Use the objects update command with the --acl-file flag:
gcloud storage objects update gs:// BUCKET_NAME / OBJECT_NAME --acl-file= FILE_LOCATION
Where:
BUCKET_NAME is the name of the bucket that
contains the object that the ACLs apply to. For example,
example-travel-maps .
OBJECT_NAME is the name of the object that
the ACLs apply to. For example, paris.jpg .
FILE_LOCATION is the local path to the
file that contains the ACLs you've defined. For example,
Desktop/acls.json .
Client libraries
C++
For more information, see the
Cloud Storage C++ API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
The following sample adds an ACL to an object:
namespace gcs = :: google :: cloud :: storage ;
using :: google :: cloud :: StatusOr ;
[]( gcs :: Client client , std :: string const & bucket_name ,
std :: string const & object_name , std :: string const & entity ) {
StatusOr<gcs :: ObjectAccessControl > patched_acl =
client . CreateObjectAcl ( bucket_name , object_name , entity ,
gcs :: ObjectAccessControl :: ROLE_OWNER ());
if ( ! patched_acl ) throw std :: move ( patched_acl ). status ();
std :: cout << "ACL entry for " << patched_acl - > entity () << " in object "
<< patched_acl - > object () << " in bucket " << patched_acl - > bucket ()
<< " is now " << * patched_acl << " \n " ;
}
The following sample removes an ACL from an object:
namespace gcs = :: google :: cloud :: storage ;
using :: google :: cloud :: StatusOr ;
[]( gcs :: Client client , std :: string const & bucket_name ,
std :: string const & object_name , std :: string const & entity ) {
StatusOr<gcs :: ObjectMetadata > original_metadata = client . GetObjectMetadata (
bucket_name , object_name , gcs :: Projection :: Full ());
if ( ! original_metadata ) throw std :: move ( original_metadata ). status ();
std :: vector<gcs :: ObjectAccessControl > original_acl =
original_metadata - > acl ();
auto it = std :: find_if ( original_acl . begin (), original_acl . end (),
[ entity ]( gcs :: ObjectAccessControl const & entry ) {
return entry . entity () == entity &&
entry . role () ==
gcs :: ObjectAccessControl :: ROLE_OWNER ();
});
if ( it == original_acl . end ()) {
std :: cout << "Could not find entity " << entity << " for file "
<< object_name << " with role OWNER in bucket " << bucket_name
<< " \n " ;
return ;
}
gcs :: ObjectAccessControl owner = * it ;
google :: cloud :: Status status =
client . DeleteObjectAcl ( bucket_name , object_name , owner . entity ());
if ( ! status . ok ()) throw std :: runtime_error ( status . message ());
std :: cout << "Deleted ACL entry for " << owner . entity () << " for file "
<< object_name << " in bucket " << bucket_name << " \n " ;
}
C#
For more information, see the
Cloud Storage C# API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
The following sample adds an ACL to an object:
using Google.Apis.Storage.v1.Data ;
using Google.Cloud.Storage.V1 ;
using System ;
public class AddFileOwnerSample
{
public Google . Apis . Storage . v1 . Data . Object AddFileOwner (
string bucketName = "your-unique-bucket-name" ,
string objectName = "my-file-name" ,
string userEmail = "dev@iam.gserviceaccount.com" )
{
var storage = StorageClient . Create ();
var storageObject = storage . GetObject ( bucketName , objectName , new GetObjectOptions
{
Projection = Projection . Full
});
storageObject . Acl . Add ( new ObjectAccessControl
{
Bucket = bucketName ,
Entity = $"user-{userEmail}" ,
Role = "OWNER" ,
});
var updatedObject = storage . UpdateObject ( storageObject );
Console . WriteLine ( $"Added user { userEmail} as an owner on file { objectName}." );
return updatedObject ;
}
}
The following sample removes an ACL from an object:
using Google.Cloud.Storage.V1 ;
using System ;
using System.Linq ;
public class RemoveFileOwnerSample
{
public void RemoveFileOwner (
string bucketName = "your-unique-bucket-name" ,
string objectName = "your-object-name" ,
string userEmail = "dev@iam.gserviceaccount.com" )
{
var storage = StorageClient . Create ();
var storageObject = storage . GetObject ( bucketName , objectName , new GetObjectOptions { Projection = Projection . Full });
if ( storageObject . Acl == null )
{
Console . WriteLine ( "No owner to remove" );
}
else
{
storageObject . Acl = storageObject . Acl . Where (( acl ) = > ! ( acl . Entity == $"user-{userEmail}" && acl . Role == "OWNER" )). ToList ();
var updatedObject = storage . UpdateObject ( storageObject );
Console . WriteLine ( $"Removed user {userEmail} from file {objectName}." );
}
}
}
Go
For more information, see the
Cloud Storage Go API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
The following sample adds an ACL to an object:
import (
"context"
"fmt"
"cloud.google.com/go/storage"
)
// addFileOwner adds ACL to the specified object.
func addFileOwner ( bucket , object string , entity storage . ACLEntity ) error {
// bucket := "bucket-name"
// object := "object-name"
// entity := storage.AllUsers
role := storage . RoleOwner
ctx := context . Background ()
client , err := storage . NewClient ( ctx )
if err != nil {
return fmt . Errorf ( "storage.NewClient: %w" , err )
}
defer client . Close ()
acl := client . Bucket ( bucket ). Object ( object ). ACL ()
if err := acl . Set ( ctx , entity , role ); err != nil {
return fmt . Errorf ( "ACLHandle.Set: %w" , err )
}
return nil
}
The following sample removes an ACL from an object:
import (
"context"
"fmt"
"cloud.google.com/go/storage"
)
// removeFileOwner removes default ACL from the given object.
func removeFileOwner ( bucket , object string , entity storage . ACLEntity ) error {
// bucket := "bucket-name"
// object := "object-name"
// entity := storage.AllUsers
ctx := context . Background ()
client , err := storage . NewClient ( ctx )
if err != nil {
return fmt . Errorf ( "storage.NewClient: %w" , err )
}
defer client . Close ()
acl := client . Bucket ( bucket ). Object ( object ). ACL ()
if err := acl . Delete ( ctx , entity ); err != nil {
return fmt . Errorf ( "ACLHandle.Delete: %w" , err )
}
return nil
}
Java
For more information, see the
Cloud Storage Java API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
The following sample adds an ACL to an object:
import com.google.cloud.storage. Acl ;
import com.google.cloud.storage. Acl . Role ;
import com.google.cloud.storage. Acl . User ;
import com.google.cloud.storage. Blob ;
import com.google.cloud.storage. BlobId ;
import com.google.cloud.storage. Storage ;
import com.google.cloud.storage. StorageOptions ;
public class AddBlobOwner {
public static void addBlobOwner (
String projectId , String bucketName , String userEmail , String blobName ) {
// The ID of your GCP project
// String projectId = "your-project-id";
// The ID of your GCS bucket
// String bucketName = "your-unique-bucket-name";
// Email of the user you wish to add as a file owner
// String userEmail = "someuser@domain.com"
// The name of the blob/file that you wish to modify permissions on
// String blobName = "your-blob-name";
Storage storage = StorageOptions . newBuilder (). setProjectId ( projectId ). build (). getService ();
Blob blob = storage . get ( BlobId . of ( bucketName , blobName ));
Acl newOwner = Acl . of ( new User ( userEmail ), Role . OWNER );
blob . createAcl ( newOwner );
System . out . println (
"Added user "
+ userEmail
+ " as an owner on blob "
+ blobName
+ " in bucket "
+ bucketName );
}
}
The following sample removes an ACL from an object:
import com.google.cloud.storage. Acl . User ;
import com.google.cloud.storage. Blob ;
import com.google.cloud.storage. BlobId ;
import com.google.cloud.storage. Storage ;
import com.google.cloud.storage. StorageOptions ;
public class RemoveBlobOwner {
public static void removeBlobOwner (
String projectId , String bucketName , String userEmail , String blobName ) {
// The ID of your GCP project
// String projectId = "your-project-id";
// The ID of your GCS bucket
// String bucketName = "your-unique-bucket-name";
// Email of the user you wish to remove as a file owner
// String userEmail = "someuser@domain.com"
// The name of the blob/file that you wish to modify permissions on
// String blobName = "your-blob-name";
Storage storage = StorageOptions . newBuilder (). setProjectId ( projectId ). build (). getService ();
Blob blob = storage . get ( BlobId . of ( bucketName , blobName ));
User ownerToRemove = new User ( userEmail );
boolean success = blob . deleteAcl ( ownerToRemove );
if ( success ) {
System . out . println (
"Removed user "
+ userEmail
+ " as an owner on file "
+ blobName
+ " in bucket "
+ bucketName );
} else {
System . out . println ( "User " + userEmail + " was not found" );
}
}
}
Node.js
For more information, see the
Cloud Storage Node.js API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
The following sample adds an ACL to an object:
/**
* TODO(developer): Uncomment the following lines before running the sample.
*/
// The ID of your GCS bucket
// const bucketName = 'your-unique-bucket-name';
// The name of the file to access
// const fileName = 'file.txt';
// The email address of the user to add
// const userEmail = 'user-email-to-add';
// Imports the Google Cloud client library
const { Storage } = require ( ' @google-cloud/storage ' );
// Creates a client
const storage = new Storage ();
async function addFileOwner () {
await storage
. bucket ( bucketName )
. file ( fileName )
. acl . owners . addUser ( userEmail );
console . log ( `Added user ${ userEmail } as an owner on file ${ fileName } .` );
}
addFileOwner (). catch ( console . error );
The following sample removes an ACL from an object:
/**
* TODO(developer): Uncomment the following lines before running the sample.
*/
// The ID of your GCS bucket
// const bucketName = 'your-unique-bucket-name';
// The ID of your GCS file
// const fileName = 'your-file-name';
// The email address of the user to remove
// const userEmail = 'user-email-to-remove';
// Imports the Google Cloud client library
const { Storage } = require ( ' @google-cloud/storage ' );
// Creates a client
const storage = new Storage ();
async function removeFileOwner () {
// Removes the user from the access control list of the file. You can use
// deleteAllUsers(), deleteDomain(), deleteProject(), deleteGroup(), and
// deleteAllAuthenticatedUsers() to remove access for different types of entities.
await storage
. bucket ( bucketName )
. file ( fileName )
. acl . owners . deleteUser ( userEmail );
console . log ( `Removed user ${ userEmail } from file ${ fileName } .` );
}
removeFileOwner (). catch ( console . error );
PHP
For more information, see the
Cloud Storage PHP API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
The following sample adds an ACL to an object:
use Google\Cloud\Storage\StorageClient;
/**
* Add an entity and role to an object's ACL.
*
* @param string $bucketName The name of your Cloud Storage bucket.
* (e.g. 'my-bucket')
* @param string $objectName The name of your Cloud Storage object.
* (e.g. 'my-object')
* @param string $entity The entity for which to update access controls.
* (e.g. 'user-example@domain.com')
* @param string $role The permissions to add for the specified entity.
* (e.g. 'OWNER')
*/
function add_object_acl(string $bucketName, string $objectName, string $entity, string $role): void
{
$storage = new StorageClient();
$bucket = $storage->bucket($bucketName);
$object = $bucket->object($objectName);
$acl = $object->acl();
$acl->add($entity, $role);
printf('Added %s (%s) to gs://%s/%s ACL' . PHP_EOL, $entity, $role, $bucketName, $objectName);
}
The following sample removes an ACL from an object:
use Google\Cloud\Storage\StorageClient;
/**
* Delete an entity from an object's ACL.
*
* @param string $bucketName The name of your Cloud Storage bucket.
* (e.g. 'my-bucket')
* @param string $objectName The name of your Cloud Storage object.
* (e.g. 'my-object')
* @param string $entity The entity for which to update access controls.
* (e.g. 'user-example@domain.com')
*/
function delete_object_acl(string $bucketName, string $objectName, string $entity): void
{
$storage = new StorageClient();
$bucket = $storage->bucket($bucketName);
$object = $bucket->object($objectName);
$acl = $object->acl();
$acl->delete($entity);
printf('Deleted %s from gs://%s/%s ACL' . PHP_EOL, $entity, $bucketName, $objectName);
}
Python
For more information, see the
Cloud Storage Python API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
The following sample adds an ACL to an object:
from google.cloud import storage
def add_blob_owner ( bucket_name , blob_name , user_email ):
"""Adds a user as an owner on the given blob."""
# bucket_name = "your-bucket-name"
# blob_name = "your-object-name"
# user_email = "name@example.com"
storage_client = storage . Client ()
bucket = storage_client . bucket ( bucket_name )
blob = bucket . blob ( blob_name )
# Reload fetches the current ACL from Cloud Storage.
blob . acl . reload ()
# You can also use `group`, `domain`, `all_authenticated` and `all` to
# grant access to different types of entities. You can also use
# `grant_read` or `grant_write` to grant different roles.
blob . acl . user ( user_email ) . grant_owner ()
blob . acl . save ()
print (
"Added user {} as an owner on blob {} in bucket {} ." . format (
user_email , blob_name , bucket_name
)
)
The following sample removes an ACL from an object:
from google.cloud import storage
def remove_blob_owner ( bucket_name , blob_name , user_email ):
"""Removes a user from the access control list of the given blob in the
given bucket."""
# bucket_name = "your-bucket-name"
# blob_name = "your-object-name"
# user_email = "name@example.com"
storage_client = storage . Client ()
bucket = storage_client . bucket ( bucket_name )
blob = bucket . blob ( blob_name )
# You can also use `group`, `domain`, `all_authenticated` and `all` to
# remove access for different types of entities.
blob . acl . user ( user_email ) . revoke_read ()
blob . acl . user ( user_email ) . revoke_write ()
blob . acl . user ( user_email ) . revoke_owner ()
blob . acl . save ()
print (
f "Removed user { user_email } from blob { blob_name } in bucket { bucket_name } ."
)
Ruby
For more information, see the
Cloud Storage Ruby API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
The following sample adds an ACL to an object:
# The ID of your GCS bucket
# bucket_name = "your-unique-bucket-name"
# file_name = "Name of a file in the Storage bucket"
# email = "Google Cloud Storage ACL Entity email"
require "google/cloud/storage"
storage = Google :: Cloud :: Storage . new
bucket = storage . bucket bucket_name
file = bucket . file file_name
file . acl . add_owner email
puts "Added OWNER permission for #{ email } to #{ file_name } "
The following sample removes an ACL from an object:
# The ID of your GCS bucket
# bucket_name = "your-unique-bucket-name"
# file_name = "Name of a file in the Storage bucket"
# email = "Google Cloud Storage ACL Entity email"
require "google/cloud/storage"
storage = Google :: Cloud :: Storage . new
bucket = storage . bucket bucket_name
file = bucket . file file_name
file . acl . delete email
puts "Removed ACL permissions for #{ email } from #{ file_name } "
REST APIs
JSON API
When creating an object, you can specify the acl[] property in
the request body or the predefinedAcl query parameter in an insert
request. For an existing object, specify the acl[] property or the
predefinedAcl query parameter in a patch or update request.
For the definition of the object ACL property, see the
ObjectAccessControls resource.
Define the ACLs in a JSON file.
For example, if the ACL grants the owners of project 867489160491
and the user jeffersonloveshiking@gmail.com OWNER permission, along with
granting the members of the gs-announce group READER permission,
then you could have a file named acls.json with the following
content:
{
"acl": [
{
"entity": "project-owners-867489160491",
"role": "OWNER",
"projectTeam": {
"projectNumber": "867489160491",
"team": "owners"
}
},
{
"entity": "user-jeffersonloveshiking@gmail.com",
"role": "OWNER",
"email": "jeffersonloveshiking@gmail.com"
},
{
"entity": "group-gs-announce@googlegroups.com",
"role": "READER",
"email": "gs-announce@googlegroups.com"
}
]
}
Send a patch request with the JSON file, and specify the object
to set the ACLs on.
For example, the following curl command applies a JSON payload from
the document acls.json to an object named paris.jpg in the bucket
example-travel-maps :
curl -X PATCH --data @acls.json -H "Content-Type: application/json" \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
https://storage.googleapis.com/storage/v1/b/example-travel-maps/o/paris.jpg
XML API
In the XML API , you work with ACLs in XML format. You must attach an
XML document to the body of requests to change bucket and object ACLs.
An XML document is returned when you get bucket and object ACLs. The XML
document contains the individual bucket or object ACL entries.
After creating a bucket with a PUT Bucket request, use a second
PUT Bucket request with the ?acl parameter to change the bucket ACL.
After uploading an object with a PUT Object request, change the ACL
with another PUT request using the ?acl parameter or the x-googl-acl request header.
For example, the following curl command applies an XML payload from
the document acls.xml to an object named paris.jpg in the bucket
example-travel-maps :
curl -X PUT --data-binary @acls.xml \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
https://storage.googleapis.com/example-travel-maps/paris.jpg?acl
Use the following ACL syntax for the XML document:
Element
Description
AccessControlList
Container for Entries and Owner elements.
Owner
Container for DisplayName and ID elements. This element is not required for objects since an object is always owned by the user who uploaded it. This element is used when you are using Amazon S3 ACL syntax in a migration scenario. Amazon Simple Storage Service ™ and Amazon S3 ™ are trademarks of Amazon.com, Inc. or its affiliates in the United States and/or other countries.
ID
Cloud Storage ID of the bucket owner.
DisplayName
Not implemented. The value is always an empty string.
Entries
Container for zero or more Entry elements.
Entry
Container for Scope and Permission elements. An Entry must contain only one Scope and one Permission element.
Scope
Container for an ID , EmailAddress , or Domain element that defines the ACL scope. This element must have a type attribute that contains one of the following values: UserByID , UserByEmail , GroupByID , GroupByEmail , GroupByDomain , AllUsers , or AllAuthenticatedUsers .
ID
An identifier for the grantee when the permission entry is specified by ID.
EmailAddress
The email identifier for the grantee when the permission entry is specified by email.
Domain
The domain identifier for the grantee when the permission entry is specified by domain.
Name
Optional element that can be specified or that can be automatically added if the scope is UserByEmail or GroupByEmail .
Permission
The permission granted READ , WRITE , or FULL_CONTROL .
When working with ACLs using the XML API:
You can only use the XML format described above.
You cannot set duplicate scopes.
You can have many entries in your ACL XML, but you cannot have entries
with duplicate scopes. For example, you cannot have two entries with
the same scope element of jane@example.com .
The following example shows different bucket ACL entries:
<?xml version="1.0" encoding="UTF-8"?>
<AccessControlList>
<Owner>
<ID>00b4903a9721...</ID>
</Owner>
<Entries>
<Entry>
<Scope type="GroupById">
<ID>00b4903a9722...</ID>
</Scope>
<Permission>FULL_CONTROL</Permission>
</Entry>
<Entry>
<Scope type="GroupByDomain">
<Domain>example.com</Domain>
</Scope>
<Permission>READ</Permission>
</Entry>
<Entry>
<Scope type="GroupByEmail">
<EmailAddress>gs-announce@googlegroups.com</EmailAddress>
</Scope>
<Permission>READ</Permission>
</Entry>
<Entry>
<Scope type="UserByEmail">
<EmailAddress>jeffersonloveshiking@gmail.com</EmailAddress>
<Name>Jefferson</Name>
</Scope>
<Permission>FULL_CONTROL</Permission>
</Entry>
<Entry>
<Scope type="AllUsers"/>
<Permission>READ</Permission>
</Entry>
<Entry>
<Scope type="AllAuthenticatedUsers"/>
<Permission>READ</Permission>
</Entry>
</Entries>
</AccessControlList>
Set the Name element in ACL XML
When you retrieve an ACL from a bucket or object, you might notice an
additional <Name> element appended to some of your entries. For
example, you might see an entry that looks like the following:
<Entry>
<Scope type="UserByEmail">
<EmailAddress>jeffersonloveshiking@gmail.com</EmailAddress>
<Name>Jefferson</Name>
</Scope>
<Permission>FULL_CONTROL</Permission>
</Entry>
These optional <Name> elements are populated in two circumstances:
When the bucket or object's ACLs include <Name> as an element .
When you set ACLs, you can choose to include the <Name> element with
your ACL entries. You can provide any value in the <Name> element, and
Cloud Storage remembers these values until the ACL is removed
or replaced. This approach can be useful if you are using identifiers
that aren't easily identifiable.
When a UserByEmail or GroupByEmail scope contains a public Google profile .
If you use either of these scopes but do not provide a <Name>
element, Cloud Storage checks if the user or Google Group associated with the email
address has a public Google profile with a public name. If so,
Cloud Storage automatically populates the <Name> element with
the public name.
Apply a predefined ACL
Rather than specifying the entire ACL one entry at a time as shown previously, you
can use a predefined ACL , which will automatically apply a number of entries
customized to a specific scenario. You can apply a predefined ACL to either a
bucket or an object by using the Google Cloud CLI, the JSON API, or the XML API.
On new objects
To apply a predefined ACL to an object during object upload:
Console
You cannot apply a predefined ACL using the Google Cloud console. Use
gcloud storage instead.
Command line
Use the gcloud storage cp command with the --predefined-acl
flag:
gcloud storage cp OBJECT gs:// BUCKET_NAME --predefined-acl= PREDEFINED_ACL
For example, to apply the predefined ACL bucketOwnerRead while
uploading an object paris.jpg to a bucket example-travel-maps :
gcloud storage cp paris.jpg gs://example-travel-maps --predefined-acl=bucketOwnerRead
REST APIs
JSON API
Use the predefinedAcl query string parameter in an insert request to
apply the prefined ACL.
For example, to apply the predefined ACL bucketOwnerRead while uploading
an object paris.jpg to a bucket example-travel-maps :
curl -X POST --data-binary @paris.jpg -H "Content-Type: image/jpeg" \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
"https://storage.googleapis.com/upload/storage/v1/b/example-travel-maps/o?name=paris.jpg&predefinedAcl=bucketOwnerRead"
XML API
Use the x-goog-acl header in a Put Object request to apply the
predefined ACL.
For example, to apply the predefined ACL bucket-owner-read while
uploading an object paris.jpg to a bucket example-travel-maps :
curl -X PUT --upload-file paris.jpg -H "x-goog-acl: bucket-owner-read" \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
https://storage.googleapis.com/example-travel-maps/paris.jpg
On existing buckets or objects
You can also apply a predefined ACL to an existing bucket or object, which is
useful if you want to change from one predefined ACL to another, or you want
to update custom ACLs to a predefined ACL.
Console
You cannot apply a predefined ACL using the Google Cloud console. Use
gcloud storage instead.
Command line
Use the objects update command with the --predefined-acl flag:
gcloud storage objects update gs:// BUCKET_NAME / OBJECT_NAME --predefined-acl= PREDEFINED_ACL_NAME
For example, to apply the predefined ACL private to the object
paris.jpg in the bucket example-travel-maps :
gcloud storage objects update gs://example-travel-maps/paris.jpg --predefined-acl=private
REST APIs
JSON API
Use the predefinedAcl query string parameter, and specify an empty acl
property in a patch request to apply the prefined ACL.
For example, to apply the predefined ACL private to the object
paris.jpg in the bucket example-travel-maps :
curl -X PATCH --data '{"acl": []}' -H "Content-Type: application/json" \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
https://storage.googleapis.com/storage/v1/b/example-travel-maps/o/paris.jpg?predefinedAcl=private
XML API
Use the x-goog-acl header with the acl query string parameter in a
Put Object request, but don't include an XML document in your
request.
For example, to apply the predefined ACL private to the object
paris.jpg in the bucket example-travel-maps :
curl -X PUT -H "Content-Length: 0" \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "x-goog-acl: private" \
https://storage.googleapis.com/example-travel-maps/paris.jpg?acl
Set default object ACLs
To avoid setting ACLs every time you create a new object, you can set a default
object ACL on a bucket. After you do this, every new object that is added to
that bucket that does not explicitly have an ACL applied to it will have the
default applied to it. For example, you might want to specify that only a
certain group of users have access to most objects in a particular bucket. You
can change the default object ACL, and then add objects to the bucket. These
added objects have the default object ACL you specified automatically applied to
them; however, you can give specific objects different ACLs, in which case those
objects do not have the default ACL applied to them.
Important: If you change the default object ACL for a bucket, the change may
take time to propagate, and new objects created in the bucket may still get
the old default object ACL for a short period of time (see Consistency ).
In order to make sure that new objects created in the bucket get the updated
default object ACL, you should wait at least 30 seconds between changing
the default object ACL and creating new objects.
To view and change the default object ACL for a bucket:
Console
You cannot set default object ACLs using the Google Cloud console. Use
gcloud storage instead.
Command line
Use the buckets describe command with the --format flag to
retrieve the default object ACL for the bucket:
gcloud storage buckets describe gs:// BUCKET_NAME --format="default(default_acl)"
Where BUCKET_NAME is the name of the bucket
whose default object ACL you want to view. For example, my-bucket .
Use the buckets update command with the desired flag to
modify the default object ACL for the bucket:
gcloud storage buckets update gs:// BUCKET_NAME FLAG
Where:
BUCKET_NAME is the name of the bucket
whose default object ACL you want to modify. For example,
my-bucket .
FLAG is one of the following:
--add-default-object-acl-grant and a grant that you want to
add to the overall default object ACL for the bucket.
--default-object-acl-file and the path to a local file that
defines a new default object ACL for the bucket.
--predefined-default-object-acl and the name of a predefined
object ACL that you want to replace the existing default
object ACL for the bucket with.
--remove-default-object-acl-grant and an entity that you
want to remove from the overall default object ACL for the
bucket.
Client libraries
C++
For more information, see the
Cloud Storage C++ API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
The following sample adds a default object ACL to a bucket:
namespace gcs = :: google :: cloud :: storage ;
using :: google :: cloud :: StatusOr ;
[]( gcs :: Client client , std :: string const & bucket_name ,
std :: string const & entity , std :: string const & role ) {
StatusOr<gcs :: ObjectAccessControl > default_object_acl =
client . CreateDefaultObjectAcl ( bucket_name , entity , role );
if ( ! default_object_acl ) throw std :: move ( default_object_acl ). status ();
std :: cout << "Role " << default_object_acl - > role ()
<< " will be granted default to " << default_object_acl - > entity ()
<< " on any new object created on bucket "
<< default_object_acl - > bucket () << " \n "
<< "Full attributes: " << * default_object_acl << " \n " ;
}
The following sample deletes a default object ACL from a bucket:
namespace gcs = :: google :: cloud :: storage ;
[]( gcs :: Client client , std :: string const & bucket_name ,
std :: string const & entity ) {
google :: cloud :: Status status =
client . DeleteDefaultObjectAcl ( bucket_name , entity );
if ( ! status . ok ()) throw std :: runtime_error ( status . message ());
std :: cout << "Deleted ACL entry for " << entity << " in bucket "
<< bucket_name << " \n " ;
}
C#
For more information, see the
Cloud Storage C# API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
The following sample prints the default object ACL for a bucket:
using Google.Apis.Storage.v1.Data ;
using Google.Cloud.Storage.V1 ;
using System ;
using System.Collections.Generic ;
public class PrintBucketDefaultAclSample
{
public IEnumerable<ObjectAccessControl> PrintBucketDefaultAcl ( string bucketName = "your-unique-bucket-name" )
{
var storage = StorageClient . Create ();
var bucket = storage . GetBucket ( bucketName , new GetBucketOptions { Projection = Projection . Full });
foreach ( var acl in bucket . DefaultObjectAcl )
{
Console . WriteLine ( $"{acl.Role}:{acl.Entity}" );
}
return bucket . DefaultObjectAcl ;
}
}
The following sample adds a default object ACL to a bucket:
using Google.Apis.Storage.v1.Data ;
using Google.Cloud.Storage.V1 ;
using System ;
public class AddBucketDefaultOwnerSample
{
public Bucket AddBucketDefaultOwner (
string bucketName = "your-unique-bucket-name" ,
string userEmail = "dev@iam.gserviceaccount.com" )
{
var storage = StorageClient . Create ();
var bucket = storage . GetBucket ( bucketName , new GetBucketOptions { Projection = Projection . Full });
bucket . DefaultObjectAcl . Add ( new ObjectAccessControl
{
Bucket = bucketName ,
Entity = $"user-{userEmail}" ,
Role = "OWNER" ,
});
var updatedBucket = storage . UpdateBucket ( bucket );
Console . WriteLine ( $"Added user {userEmail} as a default owner on bucket {bucketName}." );
return updatedBucket ;
}
}
The following sample deletes a default object ACL from a bucket:
using Google.Cloud.Storage.V1 ;
using System ;
using System.Linq ;
public class RemoveBucketDefaultOwnerSample
{
public void RemoveBucketDefaultOwner (
string bucketName = "your-unique-bucket-name" ,
string userEmail = "user@iam.gserviceaccount.com" )
{
var storage = StorageClient . Create ();
var bucket = storage . GetBucket ( bucketName , new GetBucketOptions { Projection = Projection . Full });
if ( bucket . DefaultObjectAcl == null )
{
Console . WriteLine ( "No default owner to remove" );
}
else
{
bucket . DefaultObjectAcl = bucket . DefaultObjectAcl . Where ( acl = > ! ( acl . Entity == $"user-{userEmail}" && acl . Role == "OWNER" )). ToList ();
var updatedBucket = storage . UpdateBucket ( bucket );
Console . WriteLine ( $"Removed user {userEmail} from bucket {bucketName}." );
}
}
}
Go
For more information, see the
Cloud Storage Go API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
The following sample adds a default object ACL to a bucket:
import (
"context"
"fmt"
"cloud.google.com/go/storage"
)
// addBucketDefaultOwner adds default ACL to the specified bucket.
func addBucketDefaultOwner ( bucket string , entity storage . ACLEntity ) error {
// bucket := "bucket-name"
// entity := storage.AllUsers
role := storage . RoleOwner
ctx := context . Background ()
client , err := storage . NewClient ( ctx )
if err != nil {
return fmt . Errorf ( "storage.NewClient: %w" , err )
}
defer client . Close ()
acl := client . Bucket ( bucket ). DefaultObjectACL ()
if err := acl . Set ( ctx , entity , role ); err != nil {
return fmt . Errorf ( "ACLHandle.Set: %w" , err )
}
return nil
}
The following sample deletes a default object ACL from a bucket:
import (
"context"
"fmt"
"cloud.google.com/go/storage"
)
// deleteDefaultBucketACL removes default ACL from a bucket.
func removeBucketDefaultOwner ( bucket string , entity storage . ACLEntity ) error {
// bucket := "bucket-name"
// entity := storage.AllUsers
ctx := context . Background ()
client , err := storage . NewClient ( ctx )
if err != nil {
return fmt . Errorf ( "storage.NewClient: %w" , err )
}
defer client . Close ()
acl := client . Bucket ( bucket ). DefaultObjectACL ()
if err := acl . Delete ( ctx , entity ); err != nil {
return fmt . Errorf ( "ACLHandle.Delete: %w" , err )
}
return nil
}
Java
For more information, see the
Cloud Storage Java API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
The following sample adds a default object ACL to a bucket:
import com.google.cloud.storage. Acl ;
import com.google.cloud.storage. Acl . Role ;
import com.google.cloud.storage. Acl . User ;
import com.google.cloud.storage. Bucket ;
import com.google.cloud.storage. Storage ;
import com.google.cloud.storage. StorageOptions ;
public class AddBucketDefaultOwner {
public static void addBucketDefaultOwner ( String bucketName , String userEmail ) {
// The ID of your GCS bucket
// String bucketName = "your-unique-bucket-name";
// The email of the user you wish to add as a default owner
// String userEmail = "someuser@domain.com"
Storage storage = StorageOptions . newBuilder (). build (). getService ();
Bucket bucket = storage . get ( bucketName );
Acl newDefaultOwner = Acl . of ( new User ( userEmail ), Role . OWNER );
bucket . createDefaultAcl ( newDefaultOwner );
System . out . println ( "Added user " + userEmail + " as an owner on " + bucketName );
}
}
The following sample deletes a default object ACL from a bucket:
import com.google.cloud.storage. Acl . User ;
import com.google.cloud.storage. Bucket ;
import com.google.cloud.storage. Storage ;
import com.google.cloud.storage. StorageOptions ;
public class RemoveBucketDefaultOwner {
public static void removeBucketDefaultOwner ( String bucketName , String userEmail ) {
// The ID of your GCS bucket
// String bucketName = "your-unique-bucket-name";
// The email of the user you wish to remove as a default owner
// String userEmail = "someuser@domain.com"
Storage storage = StorageOptions . newBuilder (). build (). getService ();
Bucket bucket = storage . get ( bucketName );
User userToRemove = new User ( userEmail );
boolean success = bucket . deleteDefaultAcl ( userToRemove );
if ( success ) {
System . out . println ( "Removed user " + userEmail + " as an owner on " + bucketName );
} else {
System . out . println ( "User " + userEmail + " was not found" );
}
}
}
Node.js
For more information, see the
Cloud Storage Node.js API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
The following sample adds a default object ACL to a bucket:
/**
* TODO(developer): Uncomment the following lines before running the sample.
*/
// The ID of your GCS bucket
// const bucketName = 'your-unique-bucket-name';
// The email address of the user to add
// const userEmail = 'user-email-to-add';
// Imports the Google Cloud client library
const { Storage } = require ( ' @google-cloud/storage ' );
// Creates a client
const storage = new Storage ();
async function addBucketDefaultOwner () {
// Makes the user an owner in the default ACL of the bucket. You can use
// addAllUsers(), addDomain(), addProject(), addGroup(), and
// addAllAuthenticatedUsers() to grant access to different types of entities.
// You can also use "readers" and "writers" to grant different roles.
await storage . bucket ( bucketName ). acl . default . owners . addUser ( userEmail );
console . log ( `Added user ${ userEmail } as an owner on bucket ${ bucketName } .` );
}
addBucketDefaultOwner (). catch ( console . error );
The following sample deletes a default object ACL from a bucket:
/**
* TODO(developer): Uncomment the following lines before running the sample.
*/
// The ID of your GCS bucket
// const bucketName = 'your-unique-bucket-name';
// The email address of the user to remove
// const userEmail = 'user-email-to-remove';
// Imports the Google Cloud client library
const { Storage } = require ( ' @google-cloud/storage ' );
// Creates a client
const storage = new Storage ();
async function removeBucketDefaultOwner () {
// Removes the user from the access control list of the bucket. You can use
// deleteAllUsers(), deleteDomain(), deleteProject(), deleteGroup(), and
// deleteAllAuthenticatedUsers() to remove access for different types of entities.
await storage . bucket ( bucketName ). acl . default . owners . deleteUser ( userEmail );
console . log ( `Removed user ${ userEmail } from bucket ${ bucketName } .` );
}
removeBucketDefaultOwner (). catch ( console . error );
PHP
For more information, see the
Cloud Storage PHP API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
The following sample adds a default object ACL to a bucket:
use Google\Cloud\Storage\StorageClient;
/**
* Add an entity and role to a bucket's default ACL.
*
* @param string $bucketName The name of your Cloud Storage bucket.
* (e.g. 'my-bucket')
* @param string $entity The entity for which to update access controls.
* (e.g. 'user-example@domain.com')
* @param string $role The permissions to add for the specified entity.
* (e.g. 'OWNER')
*/
function add_bucket_default_acl(string $bucketName, string $entity, string $role): void
{
$storage = new StorageClient();
$bucket = $storage->bucket($bucketName);
$acl = $bucket->defaultAcl();
$acl->add($entity, $role);
printf('Added %s (%s) to gs://%s default ACL' . PHP_EOL, $entity, $role, $bucketName);
}
The following sample deletes a default object ACL from a bucket:
use Google\Cloud\Storage\StorageClient;
/**
* Delete an entity from a bucket's default ACL.
*
* @param string $bucketName The name of your Cloud Storage bucket.
* (e.g. 'my-bucket')
* @param string $entity The entity for which to update access controls.
* (e.g. 'user-example@domain.com')
*/
function delete_bucket_default_acl(string $bucketName, string $entity): void
{
$storage = new StorageClient();
$bucket = $storage->bucket($bucketName);
$acl = $bucket->defaultAcl();
$acl->delete($entity);
printf('Deleted %s from gs://%s default ACL' . PHP_EOL, $entity, $bucketName);
}
Python
For more information, see the
Cloud Storage Python API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
The following sample adds a default object ACL to a bucket:
from google.cloud import storage
def add_bucket_default_owner ( bucket_name , user_email ):
"""Adds a user as an owner in the given bucket's default object access
control list."""
# bucket_name = "your-bucket-name"
# user_email = "name@example.com"
storage_client = storage . Client ()
bucket = storage_client . bucket ( bucket_name )
# Reload fetches the current ACL from Cloud Storage.
bucket . acl . reload ()
# You can also use `group`, `domain`, `all_authenticated` and `all` to
# grant access to different types of entities. You can also use
# `grant_read` or `grant_write` to grant different roles.
bucket . default_object_acl . user ( user_email ) . grant_owner ()
bucket . default_object_acl . save ()
print (
"Added user {} as an owner in the default acl on bucket {} ." . format (
user_email , bucket_name
)
)
The following sample deletes a default object ACL from a bucket:
from google.cloud import storage
def remove_bucket_default_owner ( bucket_name , user_email ):
"""Removes a user from the access control list of the given bucket's
default object access control list."""
# bucket_name = "your-bucket-name"
# user_email = "name@example.com"
storage_client = storage . Client ()
bucket = storage_client . bucket ( bucket_name )
# Reload fetches the current ACL from Cloud Storage.
bucket . acl . reload ()
# You can also use `group`, `domain`, `all_authenticated` and `all` to
# remove access for different types of entities.
bucket . default_object_acl . user ( user_email ) . revoke_read ()
bucket . default_object_acl . user ( user_email ) . revoke_write ()
bucket . default_object_acl . user ( user_email ) . revoke_owner ()
bucket . default_object_acl . save ()
print (
f "Removed user { user_email } from the default acl of bucket { bucket_name } ."
)
Ruby
For more information, see the
Cloud Storage Ruby API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
The following sample adds a default object ACL to a bucket:
# The ID of your GCS bucket
# bucket_name = "your-unique-bucket-name"
# email = "Google Cloud Storage ACL Entity email"
require "google/cloud/storage"
storage = Google :: Cloud :: Storage . new
bucket = storage . bucket bucket_name
bucket . default_acl . add_owner email
puts "Added default OWNER permission for #{ email } to #{ bucket_name } "
The following sample deletes a default object ACL from a bucket:
# The ID of your GCS bucket
# bucket_name = "your-unique-bucket-name"
# email = "Google Cloud Storage ACL Entity email"
require "google/cloud/storage"
storage = Google :: Cloud :: Storage . new
bucket = storage . bucket bucket_name
bucket . default_acl . delete email
puts "Removed default ACL permissions for #{ email } from #{ bucket_name } "
REST APIs
JSON API
Retrieve the default object ACL with a GET request. For example:
curl -X GET -H "Authorization: Bearer $(gcloud auth print-access-token)" \
https://storage.googleapis.com/storage/v1/b/ BUCKET_NAME ?projection=full
Use a patch request to replace the default object ACL. For
example, the following request replaces the default object ACL with
the ACL specified in defacls.json for a bucket
example-travel-maps :
curl -X PATCH --data @defacls.json -H "Content-Type: application/json" -H "Authorization: Bearer $(gcloud auth print-access-token)" \
https://storage.googleapis.com/storage/v1/b/example-travel-maps
An example of defacls.json :
{
"defaultObjectAcl": [
{
"email": "jeffersonloveshiking@gmail.com",
"entity": "user-jeffersonloveshiking@gmail.com",
"role": "READER"
}
]
}
XML API
Retrieve the default object ACL with a GET request scoped to
your bucket and the ?defaultObjectAcl parameter. For example:
curl -X GET -H "Authorization: Bearer $(gcloud auth print-access-token)" \
https://storage.googleapis.com/ BUCKET_NAME ?defaultObjectAcl
Use a PUT request scoped to your bucket with the
?defaultObjectAcl parameter to replace the default object ACL with
the ACL specified in acls.xml . For example:
curl -X PUT --data-binary @acls.xml -H "Authorization: Bearer $(gcloud auth print-access-token)" \
http://storage.googleapis.com/ BUCKET_NAME ?defaultObjectAcl
An example of acls.xml :
<AccessControlList>
<Entries>
<Entry>
<Permission> FULL_CONTROL </Permission>
<Scope type="UserByEmail">
<EmailAddress>jeffersonloveshiking@gmail.com</EmailAddress>
</Scope>
</Entry>
</Entries>
</AccessControlList>
The syntax of ACLs is discussed in Setting ACLs .
You can also specify a predefined ACL as the default object ACL.
To set the default object ACL for a bucket to a predefined ACL:
Console
You cannot set default object ACLs using the Google Cloud console. Use
gcloud storage instead.
Command line
Use the buckets update command with the
--predefined-default-object-acl flag:
gcloud storage buckets update gs:// BUCKET_NAME --predefined-default-object-acl= PREDEFINED_ACL
Where:
BUCKET_NAME is the name of the bucket
whose default object ACL you want to modify. For example,
my-bucket .
PREDEFINED_ACL is the name of a valid
predefined ACL. For example, projectPrivate .
REST APIs
JSON API
Use a PUT request and the predefinedAcl parameter.
For example:
curl -X PUT -H "Content-Length: 0" -H "Authorization: Bearer $(gcloud auth print-access-token)" \
https://storage.googleapis.com/storage/v1/b/ BUCKET_NAME ?predefinedAcl=private
XML API
Use a PUT request scoped to your bucket with the ?defaultObjectAcl
parameter and the x-goog-acl header.
For example:
curl -X PUT -H "x-goog-acl: project-private" -H "Content-Length: 0" -H "Authorization: Bearer $(gcloud auth print-access-token)" \
http://storage.googleapis.com/ BUCKET_NAME ?defaultObjectAcl
Default object ACLs for newly created buckets:
The following examples show the default object ACLs that automatically apply to
newly created buckets when you don't specify your own default object ACLs as
part of the request. To see if your bucket's default object ACLs have been
changed, compare your bucket's current default object ACLs to the following
examples.
Console
You cannot work with default object ACLs using the Google Cloud console.
Use gcloud storage instead.
Command line
In the following example, the project ID is "123412341234"; your project ID
will be different.
defaultObjectAcl:
– entity: project-owners-123412341234
etag: CAE=
kind: storage#objectAccessControl
projectTeam:
projectNumber: '123412341234'
team: owners
role: OWNER
– entity: project-editors-123412341234
etag: CAE=
kind: storage#objectAccessControl
projectTeam:
projectNumber: '123412341234'
team: editors
role: OWNER
– entity: project-viewers-123412341234
etag: CAE=
kind: storage#objectAccessControl
projectTeam:
projectNumber: '123412341234'
team: viewers
role: READER
REST APIs
JSON API
In the following example, the project ID is "123412341234"; your project ID
will be different.
"defaultObjectAcl": [
{
"kind": "storage#objectAccessControl",
"entity": "project-owners-123412341234",
"role": "OWNER",
"projectTeam": {
"projectNumber": "123412341234",
"team": "owners"
}
},
{
"kind": "storage#objectAccessControl",
"entity": "project-editors-123412341234",
"role": "OWNER",
"projectTeam": {
"projectNumber": "123412341234",
"team": "editors"
}
},
{
"kind": "storage#objectAccessControl",
"entity": "project-viewers-123412341234",
"role": "READER",
"projectTeam": {
"projectNumber": "123412341234",
"team": "viewers"
}
}
]
XML API
In the following example, the project role IDs start with "00b4903a97...";
your project IDs will be different.
<?xml version='1.0' encoding='UTF-8'?>
<AccessControlList>
<Entries>
<Entry>
<Scope type='GroupById'>
<ID>00b4903a9721...</ID>
</Scope>
<Permission>FULL_CONTROL</Permission>
</Entry>
<Entry>
<Scope type='GroupById'>
<ID>00b4903a9722...</ID>
</Scope>
<Permission>FULL_CONTROL</Permission>
</Entry>
<Entry>
<Scope type='GroupById'>
<ID>00b4903a9723...</ID>
</Scope>
<Permission>READ</Permission>
</Entry>
</Entries>
</AccessControlList>
Note that the default object ACL for a newly created bucket is equivalent to
the predefined projectPrivate ACL.
Retrieving ACLs
To get the ACL of an existing resource:
Console
Note: You cannot use the Google Cloud console to get ACLs on buckets; the
Console can only be used to get ACLs on individual objects.
Go to the Cloud Storage browser in the Google Cloud console.
Go to the Cloud Storage browser
Navigate to the object whose ACL you want to view.
Choose Edit access from the drop-down menu for the object.
You should see a permission dialog with the object's permissions.
To learn how to get detailed error information about failed Cloud Storage
operations in the Google Cloud console, see
Troubleshooting .
Command line
Use the objects describe command with the --format flag to
retrieve an object's ACL:
gcloud storage objects describe gs:// BUCKET_NAME / OBJECT_NAME --format="default(acl)"
Where:
BUCKET_NAME is the name of the bucket
containing the object whose ACL you want to view. For example,
my-bucket .
OBJECT_NAME is the name of the object
whose ACL you want to view. For example, paris.jpg .
Client libraries
C++
For more information, see the
Cloud Storage C++ API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
The following sample gets an object ACL:
namespace gcs = :: google :: cloud :: storage ;
using :: google :: cloud :: StatusOr ;
[]( gcs :: Client client , std :: string const & bucket_name ,
std :: string const & object_name ) {
StatusOr<std :: vector<gcs :: ObjectAccessControl >> items =
client . ListObjectAcl ( bucket_name , object_name );
if ( ! items ) throw std :: move ( items ). status ();
std :: cout << "ACLs for object=" << object_name << " in bucket "
<< bucket_name << " \n " ;
for ( gcs :: ObjectAccessControl const & acl : * items ) {
std :: cout << acl . role () << ":" << acl . entity () << " \n " ;
}
}
C#
For more information, see the
Cloud Storage C# API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
The following sample gets an object ACL:
using Google.Apis.Storage.v1.Data ;
using Google.Cloud.Storage.V1 ;
using System ;
using System.Collections.Generic ;
public class PrintFileAclSample
{
public IEnumerable<ObjectAccessControl> PrintObjectAcl (
string bucketName = "your-unique-bucket-name" ,
string objectName = "your-object-name" )
{
var storage = StorageClient . Create ();
var storageObject = storage . GetObject ( bucketName , objectName , new GetObjectOptions
{
Projection = Projection . Full
});
foreach ( var acl in storageObject . Acl )
{
Console . WriteLine ( $"{acl.Role}:{acl.Entity}" );
}
return storageObject . Acl ;
}
}
Go
For more information, see the
Cloud Storage Go API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
The following sample gets an object ACL:
import (
"context"
"fmt"
"io"
"cloud.google.com/go/storage"
)
// printFileACL lists ACL of the specified object.
func printFileACL ( w io . Writer , bucket , object string ) error {
// bucket := "bucket-name"
// object := "object-name"
ctx := context . Background ()
client , err := storage . NewClient ( ctx )
if err != nil {
return fmt . Errorf ( "storage.NewClient: %w" , err )
}
defer client . Close ()
rules , err := client . Bucket ( bucket ). Object ( object ). ACL (). List ( ctx )
if err != nil {
return fmt . Errorf ( "ACLHandle.List: %w" , err )
}
for _ , rule := range rules {
fmt . Fprintf ( w , "ACL rule: %v\n" , rule )
}
return nil
}
Java
For more information, see the
Cloud Storage Java API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
The following sample gets an object ACL:
import com.google.cloud.storage. Acl ;
import com.google.cloud.storage. Blob ;
import com.google.cloud.storage. BlobId ;
import com.google.cloud.storage. Storage ;
import com.google.cloud.storage. StorageOptions ;
import java.util.List ;
public class PrintBlobAcl {
public static void printBlobAcl ( String bucketName , String blobName ) {
// The ID to give your GCS bucket
// String bucketName = "your-unique-bucket-name";
// The name of the blob/file that you wish to view Acls of
// String blobName = "your-blob-name";
Storage storage = StorageOptions . newBuilder (). build (). getService ();
Blob blob = storage . get ( BlobId . of ( bucketName , blobName ));
List<Acl> blobAcls = blob . getAcl ();
for ( Acl acl : blobAcls ) {
// This will give you the role.
// See https://cloud.google.com/storage/docs/access-control/lists#permissions
String role = acl . getRole (). name ();
// This will give you the Entity type (i.e. User, Group, Project etc.)
// See https://cloud.google.com/storage/docs/access-control/lists#scopes
String entityType = acl . getEntity (). getType (). name ();
System . out . printf ( "%s: %s %n" , role , entityType );
}
}
}
Node.js
For more information, see the
Cloud Storage Node.js API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
The following sample gets an object ACL:
/**
* TODO(developer): Uncomment the following lines before running the sample.
*/
// The ID of your GCS bucket
// const bucketName = 'your-unique-bucket-name';
// The ID of your GCS file
// const fileName = 'your-file-name';
// Imports the Google Cloud client library
const { Storage } = require ( ' @google-cloud/storage ' );
// Creates a client
const storage = new Storage ();
async function printFileAcl () {
// Gets the ACL for the file
const [ acls ] = await storage . bucket ( bucketName ). file ( fileName ). acl . get ();
acls . forEach ( acl = > {
console . log ( ` ${ acl . role } : ${ acl . entity } ` );
});
}
printFileAcl (). catch ( console . error );
PHP
For more information, see the
Cloud Storage PHP API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
The following sample gets an object ACL:
use Google\Cloud\Storage\StorageClient;
/**
* Print all entities and roles for an object's ACL.
*
* @param string $bucketName The name of your Cloud Storage bucket.
* (e.g. 'my-bucket')
* @param string $objectName The name of your Cloud Storage object.
* (e.g. 'my-object')
*/
function get_object_acl(string $bucketName, string $objectName): void
{
$storage = new StorageClient();
$bucket = $storage->bucket($bucketName);
$object = $bucket->object($objectName);
$acl = $object->acl();
foreach ($acl->get() as $item) {
printf('%s: %s' . PHP_EOL, $item['entity'], $item['role']);
}
}
Python
For more information, see the
Cloud Storage Python API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
The following sample gets an object ACL:
from google.cloud import storage
def print_blob_acl ( bucket_name , blob_name ):
"""Prints out a blob's access control list."""
storage_client = storage . Client ()
bucket = storage_client . bucket ( bucket_name )
blob = bucket . blob ( blob_name )
for entry in blob . acl :
print ( f " { entry [ 'role' ] } : { entry [ 'entity' ] } " )
Ruby
For more information, see the
Cloud Storage Ruby API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
The following sample gets an object ACL:
# The ID of your GCS bucket
# bucket_name = "your-unique-bucket-name"
# file_name = "Name of a file in the Storage bucket"
# email = "Google Cloud Storage ACL Entity email"
require "google/cloud/storage"
storage = Google :: Cloud :: Storage . new
bucket = storage . bucket bucket_name
file = bucket . file file_name
puts "ACL for #{ file_name } in #{ bucket_name } :"
file . acl . owners . each do | owner |
puts "OWNER #{ owner } "
end
file . acl . readers . each do | reader |
puts "READER #{ reader } "
end
REST APIs
JSON API
Make sure that you have OWNER permission on the object.
Retrieve the object's ACL with a GET request.
The object ACL is returned in JSON format, attached to the body of
the response.
For example, to return the ACL for the object paris.jpg in the bucket
example-travel-maps :
curl -X GET -H "Authorization: Bearer $(gcloud auth print-access-token)" \
https://storage.googleapis.com/storage/v1/b/example-travel-maps/o/paris.jpg?projection=full
You should see a response that looks like:
{
"kind": "storage#object",
"id": "example-travel-maps/paris.jpg/1412805837131000",
"selfLink": "https://www.googleapis.com/storage/v1/b/example-travel-maps/o/paris.jpg",
"name": "paris.jpg",
"bucket": "example-travel-maps",
...
"acl": [
{
...
"entity": "project-owners-867489160491",
"role": "OWNER",
"projectTeam": {
"projectNumber": "867489160491",
"team": "owners"
},
...
},
{
...
"entity": "user-jeffersonloveshiking@gmail.com",
"role": "OWNER",
"email": "jeffersonloveshiking@gmail.com",
...
},
{
...
"entity": "group-gs-announce@googlegroups.com",
"role": "READER",
"email": "gs-announce@googlegroups.com",
...
}
],
"owner": {
"entity": "user-jeffersonloveshiking@gmail.com"
},
...
}
You can also use the objectAccessControls resource GET method to
return individual entries in an object's ACL.
XML API
Make sure that you have FULL_CONTROL permission on the bucket or object.
Retrieve the bucket or object's ACL by using the acl query string
parameter in a GET Object request.
The ACLs are described in XML, attached to the body of the response.
For example, to return the ACL for the object paris.jpg in the bucket
example-travel-maps :
curl -X GET -H "Authorization: Bearer $(gcloud auth print-access-token)" \
https://storage.googleapis.com/example-travel-maps/paris.jpg?acl
You should see a response that looks like:
<?xml version="1.0" encoding="UTF-8"?>
<AccessControlList>
<Owner>
<ID>84fac329bceSAMPLE777d5d22b8SAMPLE77d85ac2SAMPLE2dfcf7c4adf34da46</ID>
<Name>Owner Name</Name>
</Owner>
<Entries>
<Entry>
<Scope type="UserById">
<ID>84fac329bceSAMPLE777d5d22b8SAMPLE77d85ac2SAMPLE2dfcf7c4adf34da46</ID>
<Name>Name</Name>
</Scope>
<Permission>FULL_CONTROL</Permission>
</Entry>
<Entry>
<Scope type="UserByEmail">
<EmailAddress>jeffersonloveshiking@gmail.com</EmailAddress>
<Name>Jefferson</Name>
</Scope>
<Permission>FULL_CONTROL</Permission>
</Entry>
<Entry>
<Scope type="GroupByEmail">
<EmailAddress>gs-announce@googlegroups.com</EmailAddress>
</Scope>
<Permission>READ</Permission>
</Entry>
</Entries>
</AccessControlList>
You can also use the JSON GET method of the ObjectAccessControls
resource to return a specific ACL entry.
Caution: ACLs work independently from IAM permissions . You
can use these two access control methods to customize your permissions. However,
if you grant access to your buckets and objects using IAM
permissions, such permissions do not appear in the ACLs for individual buckets
or objects (except for legacyBucket roles).
What's next
Learn more about ACLs .
Learn how to simplify your access control using uniform bucket-level access .
Learn about best practices when using ACLs .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
