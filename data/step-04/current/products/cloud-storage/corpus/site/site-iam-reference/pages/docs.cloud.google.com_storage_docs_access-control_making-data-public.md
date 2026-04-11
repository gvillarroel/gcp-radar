---
title: "Make data public \_|\_ Cloud Storage \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/storage/docs/access-control/making-data-public
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/storage/docs/introduction
source_metadata:
  url: https://docs.cloud.google.com/storage/docs/access-control/making-data-public
  title: "Make data public \_|\_ Cloud Storage \_|\_ Google Cloud Documentation"
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
Make data public
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to make objects you own readable to everyone on
the public internet and how to remove public access from your bucket. To learn
how to access data that has been made public, see
Accessing Public Data .
When an object is shared publicly, any user with knowledge of the
object URI can access the object for as long as the object is public.
Important: You cannot publicly share an object if the bucket it's stored in
is subject to public access prevention .
Required roles
In order to get the required permissions for making objects publicly readable,
ask your administrator to grant you the following roles for the bucket that
contains the data you want to make public:
To make all objects in a bucket publicly readable: Storage Admin
( roles/storage.admin )
To make individual objects publicly readable: Storage Object Admin
( roles/storage.objectAdmin )
If you plan on using the Google Cloud console, you'll need the
Storage Admin ( roles/storage.admin ) role instead of the Storage Object
Admin role.
To remove public access from all objects in a bucket: Storage Admin
( roles/storage.admin )
These roles contain the permissions required to make objects public. To see the
exact permissions that are required, expand the Required permissions
section:
Required permissions
storage.buckets.get
storage.buckets.getIamPolicy
storage.buckets.setIamPolicy
storage.buckets.update
storage.objects.get
storage.objects.getIamPolicy
storage.objects.setIamPolicy
storage.objects.update
The following permissions are only required for using the
Google Cloud console to perform the tasks on this page:
storage.buckets.list
storage.objects.list
You might also be able to get these permissions with other
predefined roles or custom roles .
For instructions on granting roles on buckets, see
Set and manage IAM policies on buckets .
Make all objects in a bucket publicly readable
To make all objects in a bucket readable to everyone on the public internet,
grant the principal allUsers the Storage Object Viewer
( roles/storage.objectViewer ) role:
Note: The Storage Object Viewer ( roles/storage.objectViewer ) role includes
the permission required to list the objects in the bucket. For a less permissive
role that only allows your users to get objects without listing them, grant
the Storage Legacy Object Reader ( roles/storage.legacyObjectReader ) role
instead.
Console
In the Google Cloud console, go to the Cloud Storage Buckets page.
Go to Buckets
In the list of buckets, click the name of the bucket that you want to
make public.
Select the Permissions tab near the top of the page.
In the Permissions section, click the
person_add Grant access button.
The Grant access dialog appears.
In the New principals field, enter allUsers .
In the Select a role drop down, enter Storage Object Viewer in
the filter box and select the Storage Object Viewer from the
filtered results.
Click Save .
Click Allow public access .
Once public access has been granted, a Copy URL button appears for each
object in the public access column. You can click this button to get the
public URL for the object. The public URL is different from the link
you get from directly right-clicking an object. Both links provide
access to an object, but the public URL works without the user having to
sign into a user account. See Request endpoints for more information.
To learn how to get detailed error information about failed Cloud Storage
operations in the Google Cloud console, see
Troubleshooting .
To learn how to resolve organization policy error and permission error, see
Troubleshoot making data public .
Command line
Note: Cloud Shell provisions a temporary virtual machine. If you want
to upload objects to Cloud Storage or download objects from
Cloud Storage, use a local development environment.
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
In your development environment, run the buckets add-iam-policy-binding command:
gcloud storage buckets add-iam-policy-binding gs:// BUCKET_NAME --member=allUsers --role=roles/storage.objectViewer
Where BUCKET_NAME is the name of the bucket
whose objects you want to make public. For example, my-bucket .
Client libraries
C++
For more information, see the
Cloud Storage C++ API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
namespace gcs = :: google :: cloud :: storage ;
using :: google :: cloud :: StatusOr ;
[]( gcs :: Client client , std :: string const & bucket_name ) {
auto current_policy = client . GetNativeBucketIamPolicy (
bucket_name , gcs :: RequestedPolicyVersion ( 3 ));
if ( ! current_policy ) throw std :: move ( current_policy ). status ();
current_policy - > set_version ( 3 );
current_policy - > bindings (). emplace_back (
gcs :: NativeIamBinding ( "roles/storage.objectViewer" , { "allUsers" }));
auto updated =
client . SetNativeBucketIamPolicy ( bucket_name , * current_policy );
if ( ! updated ) throw std :: move ( updated ). status ();
std :: cout << "Policy successfully updated: " << * updated << " \n " ;
}
C#
For more information, see the
Cloud Storage C# API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
using Google.Apis.Storage.v1.Data ;
using Google.Cloud.Storage.V1 ;
using System ;
using System.Collections.Generic ;
public class MakeBucketPublicSample
{
public void MakeBucketPublic ( string bucketName = "your-unique-bucket-name" )
{
var storage = StorageClient . Create ();
Policy policy = storage . GetBucketIamPolicy ( bucketName );
policy . Bindings . Add ( new Policy . BindingsData
{
Role = "roles/storage.objectViewer" ,
Members = new List<string> { "allUsers" }
});
storage . SetBucketIamPolicy ( bucketName , policy );
Console . WriteLine ( bucketName + " is now public " );
}
}
Go
For more information, see the
Cloud Storage Go API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
import (
"context"
"fmt"
"io"
"cloud.google.com/go/iam"
"cloud.google.com/go/iam/apiv1/iampb"
"cloud.google.com/go/storage"
)
// setBucketPublicIAM makes all objects in a bucket publicly readable.
func setBucketPublicIAM ( w io . Writer , bucketName string ) error {
// bucketName := "bucket-name"
ctx := context . Background ()
client , err := storage . NewClient ( ctx )
if err != nil {
return fmt . Errorf ( "storage.NewClient: %w" , err )
}
defer client . Close ()
policy , err := client . Bucket ( bucketName ). IAM (). V3 (). Policy ( ctx )
if err != nil {
return fmt . Errorf ( "Bucket(%q).IAM().V3().Policy: %w" , bucketName , err )
}
role := "roles/storage.objectViewer"
policy . Bindings = append ( policy . Bindings , & iampb . Binding {
Role : role ,
Members : [] string { iam . AllUsers },
})
if err := client . Bucket ( bucketName ). IAM (). V3 (). SetPolicy ( ctx , policy ); err != nil {
return fmt . Errorf ( "Bucket(%q).IAM().SetPolicy: %w" , bucketName , err )
}
fmt . Fprintf ( w , "Bucket %v is now publicly readable\n" , bucketName )
return nil
}
Java
For more information, see the
Cloud Storage Java API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
import com.google.cloud. Identity ;
import com.google.cloud. Policy ;
import com.google.cloud.storage. Storage ;
import com.google.cloud.storage. StorageOptions ;
import com.google.cloud.storage. StorageRoles ;
public class MakeBucketPublic {
public static void makeBucketPublic ( String projectId , String bucketName ) {
// The ID of your GCP project
// String projectId = "your-project-id";
// The ID of your GCS bucket
// String bucketName = "your-unique-bucket-name";
Storage storage = StorageOptions . newBuilder (). setProjectId ( projectId ). build (). getService ();
Policy originalPolicy = storage . getIamPolicy ( bucketName );
storage . setIamPolicy (
bucketName ,
originalPolicy . toBuilder ()
. addIdentity ( StorageRoles . objectViewer (), Identity . allUsers ()) // All users can view
. build ());
System . out . println ( "Bucket " + bucketName + " is now publicly readable" );
}
}
Node.js
For more information, see the
Cloud Storage Node.js API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
/**
* TODO(developer): Uncomment the following lines before running the sample.
*/
// The ID of your GCS bucket
// const bucketName = 'your-unique-bucket-name';
// Imports the Google Cloud client library
const { Storage } = require ( ' @google-cloud/storage ' );
// Creates a client
const storage = new Storage ();
async function makeBucketPublic () {
await storage . bucket ( bucketName ). makePublic ();
console . log ( `Bucket ${ bucketName } is now publicly readable` );
}
makeBucketPublic (). catch ( console . error );
PHP
For more information, see the
Cloud Storage PHP API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
use Google\Cloud\Storage\StorageClient;
/**
* Update the specified bucket's IAM configuration to make it publicly accessible.
*
* @param string $bucketName The name of your Cloud Storage bucket.
* (e.g. 'my-bucket')
*/
function set_bucket_public_iam(string $bucketName): void
{
$storage = new StorageClient();
$bucket = $storage->bucket($bucketName);
$policy = $bucket->iam()->policy(['requestedPolicyVersion' => 3]);
$policy['version'] = 3;
$role = 'roles/storage.objectViewer';
$members = ['allUsers'];
$policy['bindings'][] = [
'role' => $role,
'members' => $members
];
$bucket->iam()->setPolicy($policy);
printf('Bucket %s is now public', $bucketName);
}
Python
For more information, see the
Cloud Storage Python API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
from typing import List
from google.cloud import storage
def set_bucket_public_iam (
bucket_name : str = "your-bucket-name" ,
members : List [ str ] = [ "allUsers" ],
):
"""Set a public IAM Policy to bucket"""
# bucket_name = "your-bucket-name"
storage_client = storage . Client ()
bucket = storage_client . bucket ( bucket_name )
policy = bucket . get_iam_policy ( requested_policy_version = 3 )
policy . bindings . append (
{ "role" : "roles/storage.objectViewer" , "members" : members }
)
bucket . set_iam_policy ( policy )
print ( f "Bucket { bucket . name } is now publicly readable" )
Ruby
For more information, see the
Cloud Storage Ruby API
reference documentation .
To authenticate to Cloud Storage, set up Application Default Credentials.
For more information, see
Set up authentication for client libraries .
def set_bucket_public_iam bucket_name :
# The ID of your GCS bucket
# bucket_name = "your-unique-bucket-name"
require "google/cloud/storage"
storage = Google :: Cloud :: Storage . new
bucket = storage . bucket bucket_name
bucket . policy do | p |
p . add "roles/storage.objectViewer" , "allUsers"
end
puts "Bucket #{ bucket_name } is now publicly readable"
end
Terraform
You can use a Terraform resource to make all objects in a
bucket public.
# Make bucket public
resource "google_storage_bucket_iam_member" "member" {
provider = google
bucket = google_storage_bucket.default.name
role = "roles/storage.objectViewer"
member = "allUsers"
}
REST APIs
JSON API
Have gcloud CLI installed and initialized , which lets
you generate an access token for the Authorization header.
Create a JSON file that contains the following information:
{
"bindings" :[
{
"role" : "roles/storage.objectViewer" ,
"members" :[ "allUsers" ]
}
]
}
Use cURL to call the JSON API with a
PUT Bucket request:
curl -X PUT --data-binary @ JSON_FILE_NAME \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
"https://storage.googleapis.com/storage/v1/b/ BUCKET_NAME /iam"
Where:
JSON_FILE_NAME is the path for the file
that you created in Step 2.
BUCKET_NAME is the name of the bucket
whose objects you want to make public. For example, my-bucket .
XML API
Making all objects in a bucket publicly readable is not supported by
the XML API. Use the Google Cloud console or gcloud storage .
Make a portion of a bucket publicly readable
Important: To complete this task, the target bucket must use
uniform bucket-level access . If uniform bucket-level access is disabled for
the bucket, you can enable it , or you can use
access control lists (ACLs) instead to grant access to individual objects.
Use a managed folder to control access to objects whose name prefix match
the name of the managed folder. For example, a managed folder named my-folder
can be used to control access to objects named my-folder/cats.jpg and
my-folder/dogs.jpg .
To make such objects publicly accessible, first create the managed folder, and
then set an IAM policy on the folder that grants allUsers the
Storage Object Viewer ( roles/storage.objectViewer ) role:
Console
In the Google Cloud console, go to the Cloud Storage Buckets page.
Go to Buckets
Click the name of the bucket that contains the objects you want to
make public.
Create a folder, using the following steps:
Click the Create folder button.
Enter the Name for the folder. Once the folder is converted to a
managed folder, objects whose name start with this name will be
subject to IAM roles set on the folder.
Click Create .
Convert the folder to a managed folder, using the following steps:
In the pane that shows the bucket's contents, find the name of the
folder you created, and click the More options icon
more_vert .
Click Edit access .
In the window that appears, click Enable .
Add an IAM policy to the folder that grants allUsers the
Storage Object Viewer ( roles/storage.objectViewer ) role, using the
following steps:
If the Permissions pane for your managed folder isn't already
open, click the More options icon
more_vert for the managed
folder, and then click Edit access .
In the Permissions pane, click the
person_add Add principal
button.
In the New principals field, enter allUsers .
In the Select a role drop down, enter Storage Object Viewer
in the filter box, and select Storage Object Viewer from the
filtered results.
Click Save .
Click Allow public access .
Once public access has been granted, a Copy URL button appears for each
applicable object in the public access column. You can click this button
to get the public URL for the object. The public URL is different from the
link you get from directly right-clicking an object. Both links provide
access to an object, but the public URL works without the user having to
sign into a user account. See Request endpoints for more information.
To learn how to get detailed error information about failed Cloud Storage
operations in the Google Cloud console, see
Troubleshooting .
To learn how to resolve organization policy error and permission error, see
Troubleshoot making data public .
Command line
Note: Cloud Shell provisions a temporary virtual machine. If you
want to upload objects to Cloud Storage or download objects from
Cloud Storage, use a local development environment.
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
In your development environment, create a managed folder using the
gcloud storage managed-folders create command :
gcloud storage managed-folders create gs:// BUCKET_NAME / MANAGED_FOLDER_NAME /
Where:
BUCKET_NAME is the name of the bucket in which
you want to create a managed folder. For example, my-bucket .
MANAGED_FOLDER_NAME is the name of the managed
folder you want to create. For example, my-managed-folder .
In your development environment, add allUsers to the managed folder's
IAM policy using the
gcloud storage managed-folders add-iam-policy-binding command :
gcloud storage managed-folders add-iam-policy-binding gs:// BUCKET_NAME / MANAGED_FOLDER_NAME --member=allUsers --role=roles/storage.objectViewer
Where:
BUCKET_NAME is the name of the bucket
containing the managed folder you're adding the IAM
policy to. For example, my-bucket .
MANAGED_FOLDER_NAME is the name of the managed
folder that you want to add public access to. For example,
my-managed-folder .
REST APIs
JSON API
Have gcloud CLI installed and initialized , which lets
you generate an access token for the Authorization header.
Create a JSON file that contains the following information:
{
"name" : " MANAGED_FOLDER_NAME "
}
Where MANAGED_FOLDER_NAME is the name of the
managed folder you want to create. For example, my-managed-folder .
Use cURL to call the JSON API with a
Insert ManagedFolder request:
curl -X POST --data-binary @ JSON_FILE_NAME \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
"https://storage.googleapis.com/storage/v1/b/ BUCKET_NAME /managedFolders"
Where:
JSON_FILE_NAME is the path for the file
that you created in the previous step.
BUCKET_NAME is the name of the bucket
in which you want to create a managed folder. For example,
my-bucket .
Create a JSON file that contains the following information:
{
"bindings" :[
{
"role" : "roles/storage.objectViewer" ,
"members" :[ "allUsers" ]
}
]
}
Use cURL to call the JSON API with a
setIamPolicy ManagedFolder request:
curl -X PUT --data-binary @ JSON_FILE_NAME \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
"https://storage.googleapis.com/storage/v1/b/ BUCKET_NAME /managedFolders/ MANAGED_FOLDER_NAME /iam"
Where:
JSON_FILE_NAME is the path for the file
that you created in the previous step.
BUCKET_NAME is the name of the bucket
containing the managed folder you're adding the IAM
policy to. For example, my-bucket .
MANAGED_FOLDER_NAME is the name of the
managed folder you're adding the IAM policy to.
For example, my-managed-folder .
XML API
The XML API does not support working with managed folders. Use a
different tool, such as the Google Cloud console, or set ACLs on
individual objects using Set Object ACL requests. The following
is an example ACL file the would grant allUsers access to an object:
<AccessControlList>
<Entries>
<Entry>
<Scope type="AllUsers"/>
<Permission>READ</Permission>
</Entry>
</Entries>
</AccessControlList>
Remove public access for all objects within a bucket
To remove public access for all objects within a bucket, remove the
IAM policy that grants allUsers the Storage Object Viewer
( roles/storage.objectViewer ) role:
Console
In the Google Cloud console, go to the Cloud Storage Buckets page.
Go to Buckets
In the list of buckets, click the name of the bucket you want to
remove public access from.
Select the Permissions tab.
The IAM policy that applies to the bucket appears in
the Permissions section.
In the View by principals tab, select the checkbox for the
allUsers principal you're removing.
Click the - Remove access button.
In the overlay window that appears, click Confirm .
To learn how to get detailed error information about failed Cloud Storage
operations in the Google Cloud console, see
Troubleshooting .
Command line
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
In your development environment, run the
buckets remove-iam-policy-binding command :
gcloud storage buckets remove-iam-policy-binding gs:// BUCKET_NAME --member=allUsers --role=roles/storage.objectViewer
Where BUCKET_NAME is the name of the bucket you are
revoking access to. For example, my-bucket .
REST APIs
JSON
Have gcloud CLI installed and initialized , which lets
you generate an access token for the Authorization header.
Get the existing policy applied to your bucket. To do so, use
cURL to call the JSON API with a
GET getIamPolicy request:
curl -X GET \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
"https://storage.googleapis.com/storage/v1/b/ BUCKET_NAME /iam"
Where BUCKET_NAME is the name of the bucket
whose IAM policy you want to view. For example,
my-bucket .
Create a JSON file that contains the policy you retrieved in the
previous step and edit the file to remove the binding of the allUsers
principal from the policy.
Use cURL to call the JSON API with a
PUT setIamPolicy request:
curl -X PUT --data-binary @ JSON_FILE_NAME \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
"https://storage.googleapis.com/storage/v1/b/ BUCKET_NAME /iam"
Where:
JSON_FILE_NAME is the path for the file
that you created in Step 3.
BUCKET_NAME is the name of the bucket from
which you want to remove access. For example, my-bucket .
Important: It typically takes about a minute for revoking access to take
effect. In some cases it may take longer. If you remove a user's access,
this change is immediately reflected in the metadata; however, the user may
still have access to the object for a short period of time.
What's next
Access data that has been made public .
Learn about more access control options for your buckets and objects.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
