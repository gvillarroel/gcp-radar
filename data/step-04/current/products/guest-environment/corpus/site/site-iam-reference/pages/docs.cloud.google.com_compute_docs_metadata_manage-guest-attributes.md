---
title: "Setting and querying guest attributes \_|\_ Compute Engine \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/compute/docs/metadata/manage-guest-attributes
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/compute/docs/metadata/manage-guest-attributes
source_metadata:
  url: https://docs.cloud.google.com/compute/docs/metadata/manage-guest-attributes
  title: "Setting and querying guest attributes \_|\_ Compute Engine \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Guides
Send feedback
Setting and querying guest attributes
Stay organized with collections
Save and categorize content based on your preferences.
Linux
Windows
Guest attributes are a specific type of custom metadata that your applications
can write to while running on your virtual machine (VM) instance. Any application
or user on your VM instance can both read and write data to these guest
attribute metadata values.
Before you begin
For Windows Server VMs, use
PowerShell 3.0 or later .
We recommend that you use ctrl+v to paste the copied code blocks.
If you haven't already, set up authentication .
Authentication verifies your identity for access to Google Cloud services and APIs. To run
code or samples from a local development environment, you can authenticate to
Compute Engine by selecting one of the following options:
Select the tab for how you plan to use the samples on this page:
Console
When you use the Google Cloud console to access Google Cloud services and
APIs, you don't need to set up authentication.
gcloud
Install the Google Cloud CLI.
After installation,
initialize the Google Cloud CLI by running the following command:
gcloud init
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
Note: If you installed the gcloud CLI previously, make sure you have
the latest version by running gcloud components update .
Set a default region and zone .
REST
To use the REST API samples on this page in a local development environment, you use the
credentials you provide to the gcloud CLI.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
For more information, see
Authenticate for using REST
in the Google Cloud authentication documentation.
Required roles
The required permissions or roles depend on whether you are completing tasks
from within or outside the VM.
Within the VM
If you are setting, querying or deleting the guest attributes from within the VM,
you only need the roles and permissions for connecting to the VM.
Any process running in the VM instance can write to the guest
attributes values including scripts and applications that don't have sudo or
administrator level privileges.
For reads and writes from within an VM, the metadata server provides
automatic instance-level authentication and authorization. Each VM can
read or write only to its own metadata server. Other VMs cannot access the
metadata server of another VM.
Outside the VM
The following roles and permissions are needed to enable guest attributes,
or view guest attributes from outside the VM by using the Google Cloud CLI
or REST. You can't set or delete guest attributes from outside a VM.
To ensure that your user or service account has the necessary
permissions to enable or view guest attributes,
ask your administrator to grant the
Compute Instance Admin (v1) ( roles/compute.instanceAdmin.v1 )
IAM role to your user or service account on the VM or project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains
the permissions required to enable or view guest attributes. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to enable or view guest attributes:
To enable guest attributes:
compute.instances.setMetadata
on the VM or project
To view guest attributes:
compute.instances.getGuestAttributes
on the VM or project
Your administrator might also be able to give your user or service account
these permissions
with custom roles or
other predefined roles .
When to use guest attributes
Caution: All applications and users on your VM can both read and write data to
and from guest attribute metadata values. Users and service accounts from
outside the VM with certain roles can read the guest attributes metadata values.
Don't include sensitive information such as personally identifiable information
(PII), or security data such as private keys or passwords in your
guest attributes. Guest attributes aren't designed for use cases that require
application or user authentication and authorization.
Use guest attributes only for use cases that require small amounts of data that
don't change frequently. The best use cases for guest attributes have the
following characteristics:
The number of queries are limited to a maximum of 10 queries
per minute per VM instance.
Queries don't exceed a burst of 3 queries per second. If this maximum
rate is exceeded, Compute Engine might arbitrarily remove guest
attributes that are in the process of being written. This data removal is
needed to ensure that other critical system data can be written to the server.
Guest attributes work well for situations where you must publish infrequent and
low volume data. For example, guest attributes work well for the following use
cases:
Startup scripts that can signal successful initialization by setting a custom
status value in guest attributes.
Configuration management agents that can publish a guest OS name and version
to guest attributes.
Inventory management agents that can publish list of packages installed in
the VM instance to guest attributes.
Workload orchestration software that can signal completion of an operation
in the guest to the software control plane by setting a custom status value
in guest attributes.
Guest attributes aren't a replacement for event streaming,
Pub/Sub , or other forms of data
storage and configuration repositories.
Guest attributes and other Google Cloud services
Guest attributes are used by other Google Cloud services as follows:
SSH security: If guest attributes is enabled and OS Login is disabled, the
guest environment and
gcloud CLI use guest attributes to improve SSH security
by using the Google API to retrieve host keys before you can connect to your
VM using SSH.
VM Manager: The
OS config agent publishes
operating system data to guest attributes.
To review the metadata entries stored by these services, see
Predefined guest attribute metadata keys .
Enable guest attributes on your VM
By default, guest attributes are disabled. To enable guest attributes, set
the necessary metadata values on either your individual
VMs or in project-wide metadata:
Console
Set enable-guest-attributes in instance metadata when you create a VM:
In the Google Cloud console, go to the Create an instance page.
Go to Create an instance
Specify the VM details.
Expand the Advanced options section, and do the
following:
Expand the Management section.
In the Metadata section, click Add item add the following
metadata entries:
Key : enable-guest-attributes
Value : TRUE
To create the VM, click Create .
Set enable-guest-attributes in project-wide metadata so that it applies to
all of the VMs in your project:
In the Google Cloud console, go to the Metadata page.
Go to the Metadata page
Click Edit .
Add a metadata entry where the key is enable-guest-attributes and the
value is TRUE . Alternatively, set the value to FALSE to disable the
feature.
Click Save to apply the changes.
Set enable-guest-attributes in metadata of an existing VM:
In the Google Cloud console, go to the VM instances page.
Go to the VM instances page
Click the name of the VM on which you want to set the metadata
value.
At the top of the instance details page, click Edit to edit the
instance settings.
Under Custom metadata , add a metadata entry where the key is
enable-guest-attributes and the value is TRUE . Alternatively, set the
value to FALSE to exclude the VM from the feature.
At the bottom of the instance details page, click Save to apply your
changes to the VM.
gcloud
Set enable-guest-attributes in instance metadata when you create an VM:
Use the
gcloud compute instances create
command in the Google Cloud CLI and set
enable-guest-attributes=TRUE to enable guest attributes. Replace
VM_NAME with the name of your VM.
gcloud compute instances create VM_NAME \
--metadata=enable-guest-attributes=TRUE
Set enable-guest-attributes in project-wide metadata so that it
applies to all of the VMs in your project:
Use the
project-info add-metadata
command in the Google Cloud CLI and set
enable-guest-attributes=TRUE to enable guest attributes:
gcloud compute project-info add-metadata \
--metadata=enable-guest-attributes=TRUE
Alternatively, you can set enable-guest-attributes to FALSE to disable
guest attributes.
Set enable-guest-attributes in metadata of an existing VM:
Use the
instances add-metadata
command in the Google Cloud CLI and set
enable-guest-attributes=TRUE to enable guest attributes. Replace
VM_NAME with the name of your VM.
gcloud compute instances add-metadata VM_NAME \
--metadata=enable-guest-attributes=TRUE
Alternatively, you can set enable-guest-attributes to FALSE to
exclude your VM from using guest attributes.
Set guest attributes
Any process running in the VM instance can write to the guest
attributes values including scripts and applications that don't have sudo or
administrator level privileges. Users or service accounts outside of the
VM cannot write to guest attributes metadata values.
Linux VMs
For example, you might use a curl request
from within your VM to write a value to the guest-attributes metadata
path:
curl -X PUT --data " VALUE " http://metadata.google.internal/computeMetadata/v1/instance/guest-attributes/ NAMESPACE / KEY -H "Metadata-Flavor: Google"
Replace the following:
NAMESPACE : a logical grouping for your
KEY . Guest attributes must have a namespace.
VALUE : the value that you want to write.
KEY : the metadata path within guest-attributes where
the value is stored.
Use only letters, numerals, underscores ( _ ), and hyphens ( - ) for the
NAMESPACE and KEY fields.
Windows VMs
For example, you might use an Invoke-RestMethod request
from within your VM to write a value to the guest-attributes metadata
path:
PS C:\>
$value = (Invoke-RestMethod `
-Method PUT -Body " VALUE " `
-Headers @{'Metadata-Flavor' = 'Google'} `
-Uri "http://metadata.google.internal/computeMetadata/v1/instance/guest-attributes/ NAMESPACE / KEY ")
$value
Replace the following:
NAMESPACE : a logical grouping for your
KEY . Guest attributes must have a namespace.
VALUE : the value that you want to write.
KEY : the metadata path within guest-attributes where
the value is stored.
Use only letters, numerals, underscores ( _ ), and hyphens ( - ) for the
NAMESPACE and KEY fields.
Get guest attributes
Users or service accounts can read guest attributes from outside a VM if
they have the required role .
Alternatively, any user or application within the VM can read
the metadata values for that specific VM.
Any process running in the virtual machine can write to the guest attributes
value, which include scripts and applications that don't have sudo or
administrator level privileges.
Query the metadata server
Use the following instructions to query guest attributes from within a VM.
Connect to the VM.
Query the guest attributes.
Linux VMs
For example, you might use a curl request
from within your VM to read a value from the guest-attributes metadata
path:
curl http://metadata.google.internal/computeMetadata/v1/instance/guest-attributes/ NAMESPACE / KEY -H "Metadata-Flavor: Google"
Replace the following:
NAMESPACE : the namespace for the guest-attributes
key that you want to query.
KEY : the path within guest-attributes from which you
want to read the metadata value.
Alternatively, you can return all of the guest attribute values in one request.
Replace NAMESPACE with the namespace for the
guest-attributes key that you want to query.
curl http://metadata.google.internal/computeMetadata/v1/instance/guest-attributes/ NAMESPACE / -H "Metadata-Flavor: Google"
Windows VMs
For example, you might use an Invoke-RestMethod request
from within your VM to read a value from the guest-attributes metadata
path:
PS C:\>
$value = (Invoke-RestMethod `
-Headers @{'Metadata-Flavor' = 'Google'} `
-Uri "http://metadata.google.internal/computeMetadata/v1/instance/guest-attributes/ NAMESPACE / KEY ")
$value
Replace the following:
NAMESPACE : the namespace for the guest-attributes
key that you want to query.
KEY : the path within guest-attributes from which you
want to read the metadata value.
Alternatively, you can return all of the guest attribute values in one request.
Replace NAMESPACE with the namespace for the
guest-attributes key that you want to query.
PS C:\>
$value = (Invoke-RestMethod `
-Headers @{'Metadata-Flavor' = 'Google'} `
-Uri "http://metadata.google.internal/computeMetadata/v1/instance/guest-attributes/ NAMESPACE /")
$value
Use Google Cloud CLI or REST
Use the following instructions to view guest attributes from outside a VM.
gcloud
Use the Google Cloud CLI to read guest attribute metadata
values for a VM. For example, you can retrieve all of the values
for the VM as follows:
gcloud compute instances get-guest-attributes VM_NAME \
--zone= ZONE
To retrieve all of the values under a specific namespace, include the
--query-path flag and the namespace that you defined:
gcloud compute instances get-guest-attributes VM_NAME \
--query-path= NAMESPACE \
--zone= ZONE
To retrieve all of the values under a specific namespace, include the
--query-path flag, the namespace, and the key for the value that you
defined:
gcloud compute instances get-guest-attributes VM_NAME \
--query-path= NAMESPACE / KEY \
--zone= ZONE
Replace the following:
VM_NAME : the name of the VM from
which you want to read the guest attribute metadata value
NAMESPACE : the namespace for the guest-attributes
key that you want to query
KEY : the path within guest-attributes metadata
where the value is stored
ZONE : the zone where the VM is located
REST
Use the
compute.instances.getguestattributes method :
GET https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /instances/ VM_NAME /getGuestAttributes?queryPath= NAMESPACE / KEY
Replace the following:
PROJECT_ID : your project ID
ZONE : the zone where your VM is located
VM_NAME : the name of the VM from which
you want to read the guest attribute metadata value
NAMESPACE : the namespace for the guest-attributes
key that you want to query
KEY : the path within guest-attributes metadata
where the value is stored
To retrieve all of the keys for a NAMESPACE , omit the KEY :
GET https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /instances/ VM_NAME /getGuestAttributes?queryPath= NAMESPACE
To retrieve all of the keys in each namespace on the VM, omit the
NAMESPACE :
GET https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /instances/ VM_NAME /getGuestAttributes?queryPath=
Alternatively, if you have an OAuth token, you can use curl :
curl -H "Authorization: Bearer OAUTH_TOKEN " https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /instances/ VM_NAME /getGuestAttributes?queryPath= NAMESPACE / KEY
Replace the following:
OAUTH_TOKEN : your OAuth token
PROJECT_ID : your project ID
ZONE : the zone where your VM is located
VM_NAME : the name of the VM from which
you want to read the guest attribute metadata value
NAMESPACE : the namespace for the guest-attributes
key that you want to query
KEY : the path within guest-attributes metadata
where the value is stored
Deleting guest attributes
Use the following instructions to remove guest attributes from within a VM.
Connect to the VM.
Delete the guest attributes.
Linux VMs
You can also delete guest attributes. For example, use curl to delete a
specific key:
curl -X DELETE http://metadata.google.internal/computeMetadata/v1/instance/guest-attributes/ NAMESPACE / KEY -H "Metadata-Flavor: Google"
Replace the following:
NAMESPACE : the namespace for the guest-attributes
key that you want to delete
KEY : the path within guest-attributes where the
value is stored
Windows VMs
You can also delete guest attributes. For example, use Invoke-RestMethod
to delete a specific key:
PS C:\>
$value = (Invoke-RestMethod `
-Method DELETE `
-Headers @{'Metadata-Flavor' = 'Google'} `
-Uri "http://metadata.google.internal/computeMetadata/v1/instance/guest-attributes/ NAMESPACE / KEY ")
$value
Replace the following:
NAMESPACE : the namespace for the guest-attributes
key that you want to delete
KEY : the path within guest-attributes where the
value is stored
Disabling guest attributes on your organization or folder
If you don't want any of the VMs in your organization or folder to
enable guest attributes, you can override and disable the feature completely.
Set the constraints/compute.disableGuestAttributesAccess constraint on your
organization or folder, replacing PROJECT_ID with the
name of your project:
gcloud resource-manager org-policies enable-enforce \
constraints/compute.disableGuestAttributesAccess \
--project= PROJECT_ID
Read
Using constraints
to learn more about how to set and manage constraints on your organizations.
Note: Disabling guest attributes on your organization or folder prevents you from
deploying new apps or updating existing apps in App Engine flexible environment. To continue deploying apps in the flexible environment, you must disable the organizational policy constraint constraints/compute.disableGuestAttributesAccess .
What's next?
Learn more about VM metadata .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
