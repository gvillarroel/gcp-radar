---
title: "Maintain the Bare Metal Solution environment \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/bare-metal/docs/bms-maintenance
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/bare-metal/docs/bms-overview
source_metadata:
  url: https://docs.cloud.google.com/bare-metal/docs/bms-maintenance
  title: "Maintain the Bare Metal Solution environment \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The availability of Bare Metal Solution is transitioning to a specialized, allowlist-only model. If you are an existing customer, please contact your Google account team to explore the value of migrating to new Oracle and Google Cloud strategic partnership offerings .
Home
Documentation
Distributed, hybrid, and multicloud
Bare Metal
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Maintain the Bare Metal Solution environment
After your Bare Metal Solution environment is up and running, use the information
included in this guide to maintain your Bare Metal Solution servers, storage, and
networking.
To run SAP HANA, see Bare metal machines for SAP HANA .
Set up your Google Cloud project to use the Bare Metal Solution API and gcloud CLI
The Bare Metal Solution API provides many tools that let you monitor and
maintain your Bare Metal Solution environment. Typically, you only need to use
this procedure the first time you use the Bare Metal Solution API. However, reuse
these instructions as needed for troubleshooting purposes in case the API does
not respond as expected.
Note: The Bare Metal Solution API needs to be enabled for all the projects where the Bare Metal Solution
resources are configured. If you're using a separate networking project for
VLAN attachments with the Bare Metal Solution, ensure the API is enabled in that project as well.
Assign the Bare Metal Solution Admin or Bare Metal Solution Editor predefined
IAM role to your principals. To learn how to map IAM roles, see
Grant an IAM role .
Enable and activate the Bare Metal Solution API in your Google Cloud project where the
Bare Metal Solution resources are configured, including the networking projects
where the Interconnect Attachments are created.
Note: To enable an API service, you must have an IAM role that gives you
permission to activate services, such as Owner or Service Usage Admin . For
more information, see Access Control .
Console
Go to the Bare Metal Solution API
in your Google Cloud console dashboard. You can also search for the
Bare Metal Solution API in the API Library here: APIs & Services > Library .
On the Bare Metal Solution API page, click Enable .
Click the Back button on your browser. If you see a green checkmark
next to the words API Enabled , you can use the API.
To activate Bare Metal Solution API, either:
Navigate to any Bare Metal Solution page within your Google Cloud project.
Execute any Bare Metal Solution command using the Google Cloud CLI within your Google Cloud project.
gcloud
To enable the Bare Metal Solution API through gcloud , enter your
gcloud CLI project ID in the following command, copy
the command, paste it into the Cloud Shell prompt, and
press the Enter or Return key:
gcloud services enable baremetalsolution.googleapis.com --project= PROJECT_ID
To activate Bare Metal Solution API, either:
Navigate to any Bare Metal Solution page within your Google Cloud project.
Execute any Bare Metal Solution command using the Google Cloud CLI within your Google Cloud project.
Allow the Google Cloud CLI to work with
your Google Cloud project where the Bare Metal Solution API was enabled and activated.
In your Cloud Shell window, enter the gcloud auth login
command.
gcloud auth login
Copy the resulting URL and paste it into a separate browser tab or
window.
Log in to the page by using your username associated with your
Google Cloud project.
Click Allow to enable the gcloud CLI.
Copy the authorization code.
Paste the code into your Cloud Shell client command line.
Press the Enter or Return key.
For additional information about the general steps required to set up an API in
Google Cloud, see: Getting Started with Google Cloud APIs .
Operate your Bare Metal Solution server
Warning: Don't turn the power off for a Bare Metal Solution server or use it as a
cold standby. A Bare Metal Solution server must always be kept in powered on
state. It must only be powered off when it is due for maintenance in which case
we inform you to do so.
You can perform the following operations on your Bare Metal Solution server:
Start—Turns the power on for the server.
Stop—Turns the power off for the server.
Reset—Restarts the server.
Console
To perform these operations on your server, follow these steps:
Go to the Compute Engine > Bare Metal Solution > Servers page.
For the server that you want to start, stop, or reset, click
more_vert .
Do the following:
To turn the power on for your server, click Start .
To turn the power off for your server, click Stop .
To restart the server, click Reset .
gcloud
To turn the power off and restart your Bare Metal Solution server, use the
following steps.
Make sure you follow the API set up steps.
Restarting a server requires you to Enable and activate the Bare Metal Solutions API and the gcloud CLI . You also need to grant either
the Bare Metal Solution Admin or Bare Metal Solution Editor IAM role to
your principals.
To turn the power off and restart a Bare Metal Solution server, issue the
gcloud bms instances reset command:
Note: By default, this command runs in synchronous mode and prevents
you from issuing additional commands until the restart operation
completes. If you have an automated environment or need to work on
other tasks during the restart operation, add the --async option
to run this command in asynchronous mode.
gcloud bms instances reset SERVER_NAME --project= PROJECT_ID --region= REGION
The output displays the status of your server restart request.
Reset request issued for: [ SERVER_NAME ]
Waiting for operation [operations/880d346a-4836-4467-acc4-29e6a430bfdd] to complete...done.
After you enter the command, your Bare Metal Solution server restarts.
The restart takes from 15 to 60 minutes to complete, depending on
your server configuration.
The output from this command provides an operations ID that you can
use to check on the status of the restart. To use the operations ID
and view the restart status, see View the status of a long-running
operation .
To turn the power on for your server, use the gcloud bms
instances start command.
Note: By default, this command runs in synchronous mode and prevents you
from issuing additional commands until the start operation completes. If
you have an automated environment or need to work on other tasks during
the start operation, add the --async option to run this command in
asynchronous mode.
gcloud bms instances start SERVER_NAME --project= PROJECT_ID --region= REGION
The output displays the status of your server restart request.
Start request issued for: [ SERVER_NAME ]
Waiting for operation [operations/880d346a-4836-4467-acc4-29e6a430bfdd] to complete...done.
In most cases, the power for your server stays on. If you need to turn
off the power, use the following options:
Use the shutdown commands of your server's operating system.
Some applications turn off the power to the server automatically
after a reimage.
To turn the power off for your server, use the gcloud bms instances stop command.
gcloud bms instances stop --project= PROJECT_ID --region= REGION SERVER_NAME
API
To turn the power off and restart your Bare Metal Solution server, use the
following steps.
Make sure you follow the API set up steps.
Restarting a server requires you to Enable and activate the Bare Metal Solutions API and the gcloud CLI . You also need to grant either
the Bare Metal Solution Admin or Bare Metal Solution Editor IAM role.
Log in to your Bare Metal Solution server to watch the server
restart.
Open a Google Cloud console window.
Navigate to your jump host VM instance:
Compute Engine > VM Instances
Click the SSH button to connect to your jump host VM
instance.
To log in to your Bare Metal Solution server, enter the SSH
command in the jump host command line.
[ username @ instance-jump-host ~]$ ssh customeradmin@ bms-ip-address >
customeradmin@ bms-ip-address 's password: bms-password
Last login: Mon Mar 15 22:43:19 2022 from bms-ip-address
[customeradmin@ BMS_SERVER_NAME ~]$
Enter the top command to verify that the server is running.
You can use this window to monitor the progress of the reboot.
Run the restart command
Open the Cloud Shell window.
Add your Google Cloud project ID, region, and
Bare Metal Solution server name into the following command.
curl -X POST \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "X-Goog-User-Project: PROJECT_ID " \
-H "Content-Type: application/json" \
"https://baremetalsolution.googleapis.com/v2/projects/ PROJECT_ID /locations/ REGION /instances/ BMS_SERVER_NAME :reset"
Note: The V2 version of this command
has replaced the V1 version. We recommend that you use the V2
version of this command.
Copy and paste the command into your Cloud Shell
window, and press the Enter or Return key.
Your Bare Metal Solution server restarts. The restart takes from
15 to 60 minutes to complete, depending on your server
configuration.
The output from this command provides an operations ID that you
can use to check on the status of the restart. To use the
operations ID and view the status, see View the status of a
long-running operation .
{
"name": "operations/5c0c8b3f-5edc-4117-be9f-812af9740aaf"
}
While the server reboots, you cannot use ping or SSH from your
jump host VM instance to reach the Bare Metal Solution server.
After several minutes, the Bare Metal Solution server comes back
online.
When the server comes back online, you can successfully issue a
ping or use SSH from your jump host VM instance to reach your
Bare Metal Solution server.
Note: The restart takes from 15 to 60 minutes to complete. If
you try to reissue the restart command before the server is
ready, you'll receive an error message. Wait and run the
command again after the server comes back online.
For more information on restarting your Bare Metal Solution server, see
the Bare Metal Solution API .
To turn the power on for your server, enter your project ID, region,
and server name, then issue the following curl command.
curl -X POST \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "X-Goog-User-Project: PROJECT_ID " \
-H "Content-Type: application/json" \
"https://baremetalsolution.googleapis.com/v2/projects/ PROJECT_ID /locations/ REGION /instances/ SERVER_NAME :start"
In most cases, the power for your server stays on. If you need to turn
off the power, use the following options:
Use the shutdown commands of your server's operating system.
Some applications turn off the power to the server automatically
after a reimage.
To turn the power off for your server, enter your project ID, region, and server name
and issue the following curl command.
curl -X POST \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "X-Goog-User-Project: PROJECT_ID " \
-H "Content-Type: application/json" \
"https://baremetalsolution.googleapis.com/v2/projects/ PROJECT_ID /locations/ REGION /instances/ SERVER_NAME :stop"
Because starting, stopping, and restarting a server takes a while to complete,
you can check the status by following the steps in View the status of a
long-running operation .
Check the status of a server
A server transitions through many states as a part of its lifecycle. When you
start a server, Bare Metal Solution provisions the resources for the server.
Next, the server prepares for the boot sequence. After the server starts up, the server
moves to the running state. During its normal operation, you can stop and restart
a running server.
A server can be in one of the following states:
PROVISIONING : Resources are allocated for the server. The server is not
running yet.
STARTING : Resources are acquired. The server is booting up.
The boot operation usually takes 30 minutes, after which the server state is
set to RUNNING .
RUNNING : The server is up and running.
If the server state is RUNNING , but you're unable to use the server, it
might still be booting up. This might happen if your server
is large or has many storage volumes and LUNs. For more information, see Server takes a long time to boot .
STOPPING : The server is stopping.
SHUTDOWN : The server is stopped and powered off.
DELETED : The server is deleted.
Console
Go to the Compute Engine > Bare Metal Solution > Servers page.
In the Status column, you can view the status of the server.
gcloud
To check the status of a server, issue the gcloud bms instances describe
command.
gcloud bms instances describe --project= PROJECT_ID --region= REGION SERVER_NAME
You can view the status of the server in the state field in the output.
For example,
state: RUNNING
API
To check the status of a server, enter your project ID, region, and server
name into the following curl command. Copy the command, paste it into the
Cloud Shell prompt, and press the Enter or Return key.
curl -X GET \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "X-Goog-User-Project: PROJECT_ID " \
-H "Content-Type: application/json" \
"https://baremetalsolution.googleapis.com/v2/projects/ PROJECT_ID /locations/ REGION /instances/ SERVER_NAME "
You can view the status of the server in the state field in the output.
For example,
"state" : "RUNNING"
Manage resources in your Bare Metal Solution environment
Bare Metal Solution management APIs, gcloud commands, and the Google Cloud console
enable you to view the status of the resources in your Bare Metal Solution
environment, such as servers, networking, and storage.
Note: If you receive an error message stating that a
gcloud bms command does not exist, try updating the
Google Cloud CLI with the following commands:
gcloud components update (this does not work with Cloud Shell) or
sudo apt-get update && sudo apt-get --only-upgrade install google-cloud-sdk
Make sure you set up the Bare Metal Solution API
Viewing resource status requires you to Enable and activate the Bare Metal Solutions API and the gcloud CLI in your Bare Metal Solution project. You also need to grant one of the Bare Metal Solution IAM roles to
your principals, such as Bare Metal Solution Admin or Bare Metal Solution Editor.
List Bare Metal Solution resources in an organization and folder
Sometimes, you might need to view your Bare Metal Solution resources at an
organization level or a folder level. To list resources at an organization or
folder level, you need the IAM permissions to list those
resources at the corresponding level.
To learn how to grant IAM permissions to a user, see
Access control for organization resources with IAM .
Following is a sample Python script that lists storage volumes in an
organization or a folder. You can modify this sample script as per your
requirements and use it. For example, by using a filter such as attached=false ,
you can list all the unattached storage volumes.
To list storage volumes at the organization level using this script, you need the
following IAM permissions at the organization level:
resourcemanager.folders.get
resourcemanager.folders.list
resourcemanager.organizations.get
resourcemanager.projects.get
resourcemanager.projects.list
baremetalsolution.volumes.list
baremetalsolution.luns.list
#!/usr/bin/env python
# Copyright 2022 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
# This file is automatically generated. Please do not modify it directly.
# Find the relevant recipe file in the samples/recipes or samples/ingredients
# directory and apply your changes there.
from typing import Sequence
from typing import Tuple
from absl import app
from absl import flags
from google.api_core.exceptions import PermissionDenied
from google.cloud import resourcemanager_v3
from google.cloud.bare_metal_solution_v2.services.bare_metal_solution import BareMetalSolutionClient
from google.cloud.bare_metal_solution_v2.types import ListVolumesRequest
_ORGANIZATION_ID = flags . DEFINE_string (
"organization-id" ,
None ,
"Your organization id retrieved from its name:"
" organizations/<organization-id>." ,
)
_FOLDER_ID = flags . DEFINE_string (
"folder-id" ,
None ,
"Your folder id retrieved from its name: folders/<folder-id>." ,
)
_FILTER = flags . DEFINE_string (
"filter" ,
"" ,
"Filter for the resource list request. Syntax should be per"
" https://google.aip.dev/160" ,
)
def get_projects (
parent : str ,
folders_client : resourcemanager_v3 . FoldersClient ,
projects_client : resourcemanager_v3 . ProjectsClient ,
) - > str :
"""Retrieves a list of all project IDs available in given organization or folder parent.
Args:
parent: Organization ID or Folder ID of the Cloud org or folder you want
to recursively list project IDs from.
folders_client: Resource manager folder API client.
projects_client: Resource manager project API client.
Yields:
The list of project ids as a string.
"""
projects_request = resourcemanager_v3 . ListProjectsRequest ( parent = parent )
for project in projects_client . list_projects ( request = projects_request ):
yield project . project_id
folders_request = resourcemanager_v3 . ListFoldersRequest ( parent = parent )
for folder in folders_client . list_folders ( request = folders_request ):
get_projects ( folder . name , folders_client , projects_client )
def get_volumes_list ( parent : str , filter : str ) - > Tuple [ str , str ]:
"""Retrieves a list of all volume names available in given project.
Args:
parent: Organization ID or Folder ID of the Cloud org or folder you want
to recursively list volumes from.
filter: Filter string for the resource list call. Syntax is per
https://google.aip.dev/160.
Returns:
The list of volumes as a string and the list of PermissionDenied errors in
individual folder or projects, if any.
"""
folders_client = resourcemanager_v3 . FoldersClient ()
projects_client = resourcemanager_v3 . ProjectsClient ()
bms_client = BareMetalSolutionClient ()
output = []
errors = []
try :
for project in get_projects ( parent , folders_client , projects_client ):
volumes_list_request = ListVolumesRequest (
parent = "projects/" + project + "/locations/global" ,
filter = filter ,
)
try :
for volume in bms_client . list_volumes ( request = volumes_list_request ):
output . append ( f " - { volume . name } " )
# This could happen because BMS API is not enabled in a certain project.
except PermissionDenied as e :
errors . append (
f "Unable to list bms resources for project { project } : { e } "
)
except PermissionDenied as e :
errors . append ( f "Unable to access folder or project: { e } " )
return " \n " . join ( output ), " \n " . join ( errors )
def main ( _ : Sequence [ str ]):
if _ORGANIZATION_ID . value is not None and _FOLDER_ID . value is not None :
raise Exception ( "Only one of organization ID or folder ID must be provided" )
elif _ORGANIZATION_ID . value is None and _FOLDER_ID . value is None :
raise Exception (
"Either one of organization ID or folder ID must be provided"
)
elif _ORGANIZATION_ID . value is not None :
parent = f "organizations/ { _ORGANIZATION_ID . value } "
else :
parent = f "folders/ { _FOLDER_ID . value } "
volumes , errors = get_volumes_list ( parent , filter = _FILTER . value )
print (
"=================== Flat list of volumes in the folder or organization"
" ==================="
)
print ( volumes )
print (
"=================== List of folders or projects with errors"
" ==================="
)
print ( errors )
if __name__ == "__main__" :
app . run ( main )
Manage servers
You can manage the servers in your Bare Metal Solution environment in the
following ways:
View servers
Organize servers by using labels
Rename a server
Retrieve the initial password for a server
View OS details
Change the OS for a server
Enable hyperthreading on a server
View servers
To view the details of your Bare Metal Solution servers, follow these steps:
Console
Go to the Servers page.
Go to Servers
The Servers page lists all your servers with the following details:
Field
Description
Example
Status
Indicates the availability of a server
A green circle with a check mark indicates that the server is
provisioned and available.
Name
Server name. Click the name to view additional information about the
server.
Note: If you did not enter a name when you
provisioned your server, the ID appears in this
field.
server-1
ID
Identifier assigned to your server.
Click the ID to view basic information about the server.
Share the ID with Google Cloud support when troubleshooting
this resource.
at-1234567-svr001
Location
Bare Metal Solution region
asia-southeast1
Pod
Pod that contains your server. A pod is a unit of
isolation that contains your Bare Metal Solution resources.
Resources in different pods cannot be connected. A region can have
multiple pods.
The Pod column is disabled by default. To enable it, do
the following:
Click Column display options view_column .
Select the Pod checkbox.
Click OK .
If you don't want to enable the Pod column, you can
view the pod of a server by clicking the server name.
asia-southeast1-pod1
Server Type
Server specifications
o2-standard-32-metal
Client IP
Server IP address that connects to your Google Virtual Private Cloud
10.200.0.5
Private IP
Server IP address that connects to other Bare Metal Solution
environment resources
192.168.2.5
Labels
Displays any labels that you added to this server
You can use labels to filter the console output by copying the
text of a label and pasting it in the Filter box
just above the Status field.
environment:test
Server activity
Informs about any Bare Metal Solution infrastructure issue that might
impact your workload. The Server activity field is
empty if your server is running normally and there is no issue.
However, it shows Anomaly detected when there's an
issue with the server. In this case, we investigate and inform you.
While we resolve the issue, if your workload is disrupted, contact
Customer Care .
To see the additional details about a server, click the
Name of the server.
The Server details page shows the following additional details:
Field
Description
Hyperthreading
Indicates if the hyperthreading is enabled on the server.
OS image
OS that is running on your server.
Firmware version
Current firmware version of your server.
Network template
Network template being used by your server.
SSH keys
SSH keys of your server, if you have configured any.
Password encryption key
Encryption key of your server, if you have configured any.
Login info
Procedure to obtain your login password.
User accounts
User names and their corresponding encrypted passwords.
Networks
Details of the networks attached to the server.
LUNs
Details of the LUNs attached to the server.
gcloud
To list the servers in your Bare Metal Solution environment and see their
status, enter your project ID and issue the gcloud bms instances list
command:
gcloud bms instances list --project= PROJECT_ID
The following output example shows information for a server, such as the
server name, type, IP addresses, and state.
NAME PROJECT REGION MACHINE_TYPE IP_ADDRESSES STATE
SERVER_NAME PROJECT_ID REGION o2-standard-32-metal 192.168.1.1,192.168.2.1 RUNNING
Additional command options include:
--region : View devices in a specific Google Cloud region.
--limit : Limit the output to show a specific number of devices
To get network and storage information for a specific server in your
Bare Metal Solution environment, enter your server name, project ID, and
region, and issue the gcloud bms instances describe command:
gcloud bms instances describe SERVER_NAME --project= PROJECT_ID --region= REGION
The following output example shows an operational server with 12 LUNs, a
client network of 192.168.1.1, and a private network of 192.168.2.1.
luns:
- bootLun: true
name: SERVER_NAME -lun000-b1
sizeGb: '200'
state: READY
storageVolume: SERVER_NAME -vol000-b1
- name: STORAGE_DEVICE_NAME -lun001
sizeGb: '85'
state: READY
storageVolume: STORAGE_DEVICE_NAME -vol001
- name: STORAGE_DEVICE_NAME -lun002
sizeGb: '85'
state: READY
storageVolume: STORAGE_DEVICE_NAME -vol001
- name: STORAGE_DEVICE_NAME -lun003
sizeGb: '85'
state: READY
storageVolume: STORAGE_DEVICE_NAME -vol001
- name: STORAGE_DEVICE_NAME -lun004
sizeGb: '85'
state: READY
storageVolume: STORAGE_DEVICE_NAME -vol001
- name: STORAGE_DEVICE_NAME -lun005
sizeGb: '85'
state: READY
storageVolume: STORAGE_DEVICE_NAME -vol001
- name: STORAGE_DEVICE_NAME -lun006
sizeGb: '85'
state: READY
storageVolume: STORAGE_DEVICE_NAME -vol001
- name: STORAGE_DEVICE_NAME -lun007
sizeGb: '85'
state: READY
storageVolume: STORAGE_DEVICE_NAME -vol001
- name: STORAGE_DEVICE_NAME -lun008
sizeGb: '85'
state: READY
storageVolume: STORAGE_DEVICE_NAME -vol001
- name: STORAGE_DEVICE_NAME -lun009
sizeGb: '85'
state: READY
storageVolume: STORAGE_DEVICE_NAME -vol001
- name: STORAGE_DEVICE_NAME -lun010
sizeGb: '85'
state: READY
storageVolume: STORAGE_DEVICE_NAME -vol001
- name: STORAGE_DEVICE_NAME -lun011
sizeGb: '85'
state: READY
storageVolume: STORAGE_DEVICE_NAME -vol001
- name: STORAGE_DEVICE_NAME -lun012
sizeGb: '85'
state: READY
storageVolume: STORAGE_DEVICE_NAME -vol001
machineType: o2-standard-32-metal
name: projects/ PROJECT_ID /locations/ REGION /instances/ SERVER_NAME
networks:
- ipAddress: 192.168.1.1
macAddress:
- 34:80:0D:52:AF:28
- 34:80:0D:15:3E:0D
network: STORAGE_DEVICE_NAME -vlan001
- ipAddress: 192.168.2.1
macAddress:
- 34:80:0D:52:AF:38
- 34:80:0D:15:3E:1D
network: STORAGE_DEVICE_NAME -vlan002
state: RUNNING
API
Open a
Cloud Shell terminal window
in your Google Cloud console.
To list the servers in your Bare Metal Solution environment and see their
status, enter your project ID and region into the following curl
command, copy the command, paste it into the Cloud Shell
prompt, and press the Enter or Return key:
curl -X GET \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
"https://baremetalsolution.googleapis.com/v2/projects/ PROJECT_ID /locations/ REGION /instances"
To get network and storage information for a server in your
Bare Metal Solution environment, issue the following command:
curl -X GET \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
"https://baremetalsolution.googleapis.com/v2/projects/ PROJECT_ID /locations/ REGION /instances/ SERVER_NAME "
Organize servers by using labels
To help organize your servers, you can use labels. Labels are key-value pairs
that you can attach to each server, then filter the servers based on their
labels. For example, you can use labels to group servers by purpose,
environment, location, department, and so on. Labels are optional.
Add or update labels for servers
You can add or update labels for the existing servers.
Console
Go to the
Compute Engine > Bare Metal Solution > Servers page.
For the server that you want to label, click
more_vert .
Click edit Edit labels .
On the Labels editor page:
Click add Add label and add
the key-value pair.
To update labels, select the existing labels and modify their values.
Click Submit .
After you return to the Servers page, refresh the page to view your
changes.
gcloud
To add or update labels for a server, use the gcloud bms instances update
command with the --update-labels option.
The following sample command adds the labels environment = dev and
location = branch :
gcloud bms instances update SERVER_NAME --project= PROJECT_ID --region= REGION --update-labels environment = dev , location = branch
If you provide a new value for a label that already exists, the system updates
the existing key with the new label value. If you provide a new label, the
system adds the new label to the list of labels.
API
To add or update labels for a server, enter your project ID, region, server
name, and a list of labels in the following curl command. Copy the command,
paste it into the Cloud Shell prompt, and press the Enter
or Return key.
The following sample command assigns a label of environment = test .
curl -X PATCH \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "X-Goog-User-Project: PROJECT_ID " \
-H "Content-Type: application/json" \
"https://baremetalsolution.googleapis.com/v2/projects/ PROJECT_ID /locations/ REGION /instances/ SERVER_NAME ?updateMask=labels"
-d "{
'labels' : {' environment ': ' test '}
}"
Remove labels from servers
You can remove labels from the servers.
Console
Go to the
Compute Engine > Bare Metal Solution > Servers page.
For a server with labels that you want to remove, click
more_vert .
Click edit Edit labels .
On the Labels editor page:
To delete a label, click delete .
Click Submit .
After you return to the Servers page, refresh the page to view your
changes.
gcloud
To remove labels from a server, use the gcloud bms instances update
command with the following options:
--remove-labels : Removes the specified label.
--clear-labels : Removes all the labels.
The following sample command removes the label department from a server:
gcloud bms instances update SERVER_NAME --project= PROJECT_ID --region= REGION --remove-labels= department
The following sample command removes all the labels from a server:
gcloud bms instances update SERVER_NAME --project= PROJECT_ID --region= REGION --clear-labels
API
To remove labels from a server, enter your project ID, region, and server
name in the following curl command. Provide an empty list of labels to
remove all labels, or provide a list of labels you want to keep
(omitting the labels you want to remove). Copy the command, paste it into
the Cloud Shell prompt, and press the Enter or Return key.
The following sample command removes all the labels except
environment = test .
curl -X PATCH \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "X-Goog-User-Project: PROJECT_ID " \
-H "Content-Type: application/json" \
"https://baremetalsolution.googleapis.com/v2/projects/ PROJECT_ID /locations/ REGION /instances/ SERVER_NAME ?updateMask=labels"
-d "{
'labels' : {' environment ': ' test '}
}"
Filter servers using labels
You can search your servers and filter results by using labels.
Console
Go to the
Compute Engine > Bare Metal Solution > Servers page.
Click in the filter_list Filter
bar above the list of servers.
From the Properties list, select Labels .
Enter the key, value, or key-value pair for your label.
For example, to view only servers with the label env:dev , you can
enter any of the following:
Enter the key: env
Enter the value: dev
Enter the key-value pair: env:dev
To apply the label filter, click anywhere outside the filter bar.
gcloud
To filter servers by using labels, use the gcloud bms instances list
command with the --filter option.
The value of --filter option must be in the
labels. KEY = VALUE format. For example,
if you want to filter on a label with env as the key and dev as the
value, issue this command:
gcloud bms instances list --project= PROJECT_ID --region= REGION --filter labels. environment = dev
For more information about the filter syntax in the gcloud CLI,
see the
gcloud topic filters documentation .
API
To filter servers by using labels, enter your project ID and region
along with filter=labels and a key-value pair label. Copy the command,
paste it into the Cloud Shell prompt, and press the Enter or
Return key.
The following sample command limits the output to find servers with the
key-value pair label environment = test .
curl -X GET \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "X-Goog-User-Project: PROJECT_ID " \
-H "Content-Type: application/json" \
"https://baremetalsolution.googleapis.com/v2/projects/ PROJECT_ID /locations/ REGION /instances"?filter=labels. environment = test
Rename a server
To rename a server, follow these steps:
Console
In the Google Cloud console, go to the
Compute Engine > Bare Metal Solution > Servers page.
Click the server name.
On the Server details page, in the Name field, click edit Edit name .
On the Editing name page, enter a new name.
Click Save .
To view your changes, refresh the page.
gcloud
To rename a server, use the gcloud bms instances rename command.
gcloud bms instances rename SERVER_NAME --new-name= NEW_NAME --project= PROJECT_ID --region= REGION
Replace the following:
SERVER_NAME : Current name of the server.
NEW_NAME : New name of the server.
PROJECT_ID : Your project ID.
REGION : The location of the server.
Retrieve the initial password for a server
When you first receive your Bare Metal Solution server or change the operating
system , the server
begins in a default state and has an initial password. You must use this
password the first time you gain access to the server. After you enter the
initial password, the server prompts you to change the password.
To find your initial password:
gcloud
Authorize yourself to impersonate your Google Cloud service account. Run
the gcloud iam service-accounts add-iam-policy-binding command.
gcloud iam service-accounts add-iam-policy-binding \
SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com \
--member=user: USER_EMAIL \
--project= PROJECT_ID \
--role=roles/iam.serviceAccountTokenCreator
If you're already authorized, you can skip this step.
In the project that contains your Bare Metal Solution server, run the
gcloud bms instances describe command.
gcloud bms instances describe SERVER_NAME --project= PROJECT_ID --region= REGION
In the output, look for the loginInfo field.
From the loginInfo field, copy and paste the
gcloud beta secrets versions access command in the command line prompt.
Add the --impersonate-service-account parameter to the
gcloud beta secrets versions access command as follows and run it.
gcloud beta secrets versions access \
--project= PROJECT_ID \
--secret machine-reg- SERVER_NAME -customeradmin latest \
--impersonate-service-account= SERVICE_ACCOUNT_NAME @ PROJECT_ID .iam.gserviceaccount.com
The command outputs the credentials of your server.
Retrieve the username (usually customeradmin ) and password.
Use these credentials to log in to the server .
Change the password.
API
Before you retrieve a password, make sure you have activated the service
account provided to you by Google Cloud.
In the project that contains your Bare Metal Solution resources, access
the Cloud Shell.
Enter your project ID, region, and server name into the following curl
command, copy and paste the command into the command line prompt, and
press the Enter or Return key.:
curl -X GET \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
"https://baremetalsolution.googleapis.com/v2/projects/ PROJECT_ID /locations/ REGION /instances/ SERVER_NAME "
In the output, look for the loginInfo field and follow the instructions.
If the loginInfo field contains a gcloud beta secrets
versions access command, copy and paste the command into the command
line prompt and press the Enter or Return key.
Retrieve the username (usually customeradmin ) and password.
Use these credentials to log in to the server .
Change the password.
View OS details
To view the details of the operating system (OS) of your server, run the
gcloud bms os-images describe command to view the OS details.
gcloud bms os-images describe OS_IMAGE --project= PROJECT_ID
Replace the following:
OS_IMAGE : The OS image code. To get the OS image code for your
OS, see Operating systems .
PROJECT_ID : The project ID.
Example:
gcloud bms os-images describe OEL8x --project=test-project
Following is a sample output:
applicableInstanceTypes:
- o2-highmem-224-metal
- o2-standard-112-metal
- o2-standard-16-metal
- o2-standard-32-metal
- o2-standard-48-metal
code: OEL8x
description: Oracle Linux 8.8 [5.4.17-2136.324.5.3.el8uek.x86_64]
name: projects/bmaas-testing/locations/global/osImages/OEL8x
supportedNetworkTemplates:
- s200-bondaa-bondaa
- s400-bondaa-bondaa
Change the OS for a server
You can reimage a Bare Metal Solution server with a different OS image. Changing
the OS image takes a long time to complete and requires a power cycle of the
server. To select one of the available OS images, visit Operating systems .
Note: A server reimage overwrites the boot configuration and creates a new login
password. To retrieve the new password, see Retrieve the initial password for a
server .
If you cannot retrieve the password, please contact
Customer Care .
Console
You can reimage your Bare Metal Solution server from the
Google Cloud console.
Go to Compute Engine > Bare Metal Solution > Servers .
For the server you want to reimage, click
more_vert menu.
Click edit Edit .
On the Edit server page:
Select the Reimage server checkbox.
From the OS image list, select the OS image you want to install.
(Optional) Set up an encryption key for the server's password.
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
In the Password encryption key list, select a key.
In the Version list, select a version of the encryption key.
To learn more about how to use encryption keys with Bare Metal Solution, see
Set up encryption keys for a server .
(Optional) Set up or change SSH keys for the server.
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
In the SSH keys list, select the keys. The list displays only
the SSH keys that exist in the same project as that of your server.
To change the existing SSH keys for the server, deselect the keys you want to change and select the new ones.
To learn more about how to use SSH keys with Bare Metal Solution, see
Set up SSH keys for a server .
Click Save .
gcloud
Run the gcloud bms instances update command to change the OS image on
your server. For the OS image code, see Operating systems .
gcloud bms instances update SERVER_NAME --region REGION --os-image= OS_IMAGE
To set up SSH keys, encryption keys, or both, use the
gcloud alpha bms instances update command. You can specify keys as either
names or as full resources.
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
gcloud alpha bms instances update SERVER_NAME --region REGION --os-image= OS_IMAGE --kms-crypto-key-version= KMS_CRYPTO_KEY_VERSION --ssh-keys= KEY_1 , KEY_2
Example:
gcloud alpha bms instances update server1 --region europe-west3 --os-image= OS_IMAGE --kms-crypto-key-version=projects/bmaas-testing/locations/global/keyRings/e2e-test/cryptoKeys/e2e-test-key/cryptoKeyVersions/1 --ssh-keys=e2e-test-key-1,e2e-test-key-2
API
To update an OS image on your Bare Metal Solution server, enter your project
ID, region, server name, and OS image, then issue the following curl
command. For the OS image code, see Operating systems .
curl -X PATCH \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "X-Goog-User-Project: PROJECT_ID " \
-H "Content-Type: application/json" \
"https://baremetalsolution.googleapis.com/v2/projects/ PROJECT_ID /locations/ REGION /instances/ SERVER_NAME ?updateMask=os_image"
-d "{
'osImage' : ' OS_IMAGE '
}"
Because this change takes awhile to complete, you can check the status by
following the steps in
View the status of a long-running operation .
Enable hyperthreading on a server
You can enable or disable hyperthreading on your Bare Metal Solution servers.
This action takes a long time to complete and requires a power cycle of the
server.
Console
You can enable or disable hyperthreading on your Bare Metal Solution server
in the Google Cloud console.
Go to Compute Engine > Bare Metal Solution > Servers .
For the server on which you want to enable/disable hyperthreading, click
more_vert menu.
Click edit Edit .
On the Edit server page:
To enable hyperthreading, select the Enable hyperthreading
checkbox.
To disable hyperthreading, clear the Enable hyperthreading
checkbox.
Click Save .
gcloud
Run the gcloud bms instances update command to enable or
disable hyperthreading.
Include the –enable-hyperthreading option to enable it.
Include the –no-enable-hyperthreading option to disable it.
gcloud bms instances update SERVER_NAME --region REGION -- enable-hyperthreading
API
To change the current hyperthreading capabilities of your server, enter your
project ID, region, and server name into the following curl command. Add
true for the hyperthreading value if you want to enable it or false to
disable it.
curl -X PATCH \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "X-Goog-User-Project: PROJECT_ID " \
-H "Content-Type: application/json" \
"https://baremetalsolution.googleapis.com/v2/projects/ PROJECT_ID /locations/ REGION /instances/ SERVER_NAME ?updateMask=hyperthreading_enabled"
-d "{
'hyperthreadingEnabled' : ' HYPERTHREADING_VALUE '
}"
Because this change takes awhile to complete, you can check the status by
following the steps in
View the status of a long-running operation .
Manage VRFs
In Bare Metal Solution environment, a VRF (Virtual Routing and Forwarding) is a
connecting interface between a client network and VLAN attachments
(also known as interconnectAttachments ).
Using a VRF, you can map your client network to your VLAN attachments in the
following ways:
Map a single client network to a single VLAN attachment pair through a
single VRF. This is the default mapping. When you create a client network
through the Google Cloud console intake form ,
a VRF is created implicitly. This VRF is used to establish a connection
from your client network and its VLAN attachment towards Google Cloud.
Map a single client network to multiple VLAN attachments through a single
VRF. This way, you can increase the bandwidth between your Bare Metal Solution
environment and Google Cloud.
Map multiple client networks using a single VRF to share multiple VLAN
attachments. This way, you can increase the bandwidth between your
Bare Metal Solution environment and Google Cloud.
In this mapping, the client networks aren't isolated from each
other. They are routed between each other through a common VRF. Therefore,
the hosts in these networks can talk to each other without any traffic
filtering.
Map multiple client networks to their dedicated VLAN attachments using
dedicated VRFs. This way, you can achieve a particular bandwidth for each
client network.
In this mapping, the client networks are isolated from each other. You can't
use the VPC network (that is, the Google Cloud network) as a transit
between these client networks.
You can manage the VRFs and VLAN attachments in your Bare Metal Solution
environment in the following ways:
View VRFs
Create a VRF
Delete a VRF
Add a VLAN attachment pair
Update a VLAN attachment pair
Delete a VLAN attachment pair
Note: Bare Metal Solution doesn't support moving an existing client network
between VRFs. To do this, delete the client network and recreate it with the
VRF that you want to use.
View VRFs
To view the details of your VRFs, follow these steps:
Go to the VRFs page.
Go to VRFs
The VRFs page lists all your VRFs with the following details:
Field
Description
Status
Indicates the availability of a VRF.
Name
Name of the VRF. Click the name to view additional information
about the VRF.
Note: If you did not enter a name when you
provisioned your VRF, the ID appears
in this field.
ID
Identifier assigned to your VRF.
Click the ID to view additional information about the VRF.
Share the ID with Google Cloud support when
troubleshooting this resource.
Region
Region where the VRF is located.
Pod
Pod that contains your VRF. A pod is a unit of
isolation that contains your Bare Metal Solution resources.
Resources in different pods cannot be connected. A region can have
multiple pods.
The Pod column is disabled by default. To
enable it, do the following:
Click Column display options view_column .
Select the Pod checkbox.
Click OK .
If you don't want to enable the Pod column,
you can view the pod of a VRF by clicking the VRF name or ID.
To see the additional details about a VRF, click the Name or ID of
the VRF.
The VRF details page shows the following additional details:
Field
Description
VLAN attachment pairs
Details of the VLAN attachment pairs associated with the VRF, such
as peer IP, router IP, and bandwidth.
Member networks
List of networks associated with the VRF. You can view the details of a network by clicking it.
Create a VRF
When you provision a new network through the
Google Cloud console intake form ,
a VRF is created implicitly. However, you can also create more VRFs afterwards.
To create a new VRF, follow these steps:
Go to the VRFs page.
Go to VRFs
Click Create .
Enter a name for the VRF.
In the Region list, select a region for the VRF.
In the Pod list, select a pod for the VRF.
The Pod drop-down list also shows the number of your existing
Bare Metal Solution resources in each pod of the selected
location.
If you're unsure about which pod to select, contact
Google Cloud Sales .
Add VLAN attachment pairs .
While creating a VRF, you can only add one VLAN attachment pair. You can add
more VLAN attachment pairs after you have created the VRF by following the
steps in Add a VLAN attachment pair .
Click Create .
Delete a VRF
Before deleting a VRF, you must delete all its VLAN attachment pairs and
attached networks. See Delete a VLAN attachment pair
and Delete a network .
To delete a VRF, follow these steps:
Go to the VRFs page.
Go to VRFs
Select the VRF to delete.
Click Delete .
Click Confirm .
Manage VLAN attachments
You can manage your VLAN attachment pairs in the following ways:
Add a VLAN attachment pair
Update a VLAN attachment pair
Delete a VLAN attachment pair
Add a VLAN attachment pair
A VRF can have multiple VLAN attachment pairs. However, a VLAN attachment can
only be paired with one VRF.
For a Bare Metal Solution network, we recommend that you create VLAN attachments
in pairs for high availability.
Note: If you don't have bandwidth to create a new VLAN attachment pair, delete
an existing VLAN attachment pair or request additional bandwidth from
Google Cloud Sales .
Go to the VRFs page.
Go to VRFs
Click the VRF name.
On the VRF details page, in the VLAN Attachment pairs section,
click Create .
On the New VLAN attachment pair page:
From the Bandwidth list, select the amount of bandwidth that you
want to allocate to the VLAN attachment pair.
To add a VLAN attachment pair from the current project:
Select Select VLAN attachments from your current project checkbox.
In the First VLAN attachment ID field, enter the ID of the first VLAN attachment and in the
Second VLAN attachment ID field, enter the ID of the second VLAN attachment.
To add a VLAN attachment pair from different project:
Make sure to Enable and activate the Bare Metal Solutions API and gcloud CLI in your networking
project that contains your VLAN attachments
Clear the Select VLAN attachments in your current project checkbox.
In the First VLAN attachment ID field, enter the ID of the first VLAN attachment and in the
Second VLAN attachment ID field, enter the ID of the second VLAN attachment.
Enter the VLAN attachments in the following format
projects/ PROJECT_ID /regions/ INTERCONNECT_REGION /interconnectAttachments/ VLAN_ATTACHMENT_NAME
Click Create .
Because creating a VLAN attachment pair takes a while to complete, you can check the
status by following the steps in
View the status of a long-running operation .
Update a VLAN attachment pair
You can update only the bandwidth of a VLAN attachment pair.
Note: If you don't have bandwidth to update a new VLAN attachment, delete an
existing VLAN attachment pair or request additional bandwidth from
Google Cloud Sales .
Go to the VRFs page.
Go to VRFs
Click the VRF name.
On the VRF details page, in the VLAN Attachment pairs section,
select the VLAN attachment pair that you want to update.
Click Edit .
On the Edit VLAN attachment pair page, do the following:
From the Bandwidth list, select the amount of bandwidth that you
want to allocate to the VLAN attachment pair.
Click Save .
Because updating a VLAN attachment pair takes a while to complete, you can check
the status by following the steps in
View the status of a long-running operation .
Delete a VLAN attachment pair
Deleting a VLAN attachment pair using the steps in this procedure only unlinks
a VLAN attachment pair from the VRF and does not actually delete it.
Go to the VRFs page.
Go to VRFs
Click the VRF name.
On the VRF details page, in the VLAN Attachment pairs section,
select the VLAN attachment pair that you want to delete.
Click Delete .
Because deleting a VLAN attachment pair takes a while to complete, you can check the
status by following the steps in View the status of a long-running operation .
Manage networks
You can manage the networks in your Bare Metal Solution environment in the
following ways:
View networks
Organize networks by using labels
Rename a network
Create a network
Attach a network to a server
Detach a network from a server
Delete a network
View advanced networking information for a Bare Metal Solution environment
Implement IP address management in a Bare Metal Solution environment
View networks
Monitoring your network resources in the Bare Metal Solution environment lets
you know how your servers connect to other resources.
To view the details of your networks, follow these steps:
Console
Go to the Networks page.
Go to Networks
The Networks page lists all your networks with the following
details:
Field
Description
Example
Status
Indicates the availability of a network
A green circle with a check mark indicates that the network is
provisioned and available.
ID
Identifier assigned to your network.
Click the ID to view basic information about the network.
Share the ID with Google Cloud support when troubleshooting
this resource.
at-1234567-vlan001
Name
Network name. Click the name to view additional information
about the network.
Note: If you did not enter a name when you
provisioned your network, the ID appears in this
field.
network-1
Location
Region where the network is located
asia-southeast1
Pod
Pod that contains your network. A pod is a unit of
isolation that contains your Bare Metal Solution resources.
Resources in different pods cannot be connected. A region can have
multiple pods.
The Pod column is disabled by default. To
enable it, do the following:
Click Column display options view_column .
Select the Pod checkbox.
Click OK .
If you don't want to enable the Pod column, you can
view the pod of a network by clicking the network name.
asia-southeast1-pod1
Type
Client or private network
Client
CIDR
IP address range for the network
192.168.1.0/24
VLAN ID
VLAN identifier assigned by Google Cloud
100
Labels
Displays any labels you added to this networking resource
You can use labels to filter the console output by copying the
text of a label and pasting it in the Filter box
just above the Status field.
environment:test
To view the additional details of a network, click the
Name or ID of the network.
The Network details page shows the following additional details:
Field
Description
Gateway IP
The IP address of the gateway in the network.
Service IP address range
The OS that is running on your server.
MTU
The MTU of the network.
VRF
The VRF associated with the network.
Used addresses
The IP addresses of the servers connected by the network.
gcloud
To view all networks in your Bare Metal Solution environment and see
their status, enter your project ID and issue the gcloud bms networks
list command.
gcloud bms networks list --project= PROJECT_ID
The following output example shows a network name, region, IP address
range, network type, and VLAN ID for each network.
NAME REGION RANGE TYPE VLAN_ID
at-1111111-vlan001 REGION 192.168.1.0/24 CLIENT 122
at-1111111-vlan002 REGION 192.168.2.0/24 PRIVATE 123
To view details for a single network, enter the project ID, region, and
network name, and issue the gcloud bms networks describe command:
gcloud bms networks describe NETWORK_NAME --project= PROJECT_ID --region= REGION
The following output example shows the IP address range, network name,
state, network type, VLAN ID, and virtual routing and forwarding (VRF)
details.
cidr: 192.168.1.0/24
name: projects/ PROJECT_ID /locations/ REGION /networks/ NETWORK_NAME
state: PROVISIONED
type: CLIENT
vlanId: '122'
vrf:
autonomousSystemNumber: '65500'
juniperAlias: g00000-at-1111111-ic001
name: at-1111111-ic001
routeTarget: '282'
state: PROVISIONED
API
Open a Cloud Shell terminal window in your Google Cloud console.
To view all networks in your Bare Metal Solution environment and see
their status, enter your project ID and region into the following curl
command. Copy the command, paste it into the Cloud Shell prompt,
and press the Enter or Return key:
curl -X GET \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "X-Goog-User-Project: PROJECT_ID " \
-H "Content-Type: application/json" \
"https://baremetalsolution.googleapis.com/v2/projects/ PROJECT_ID /locations/ REGION /networks"
To view details for a single network, enter your project ID, region, and
network name and issue the following command:
curl -X GET \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "X-Goog-User-Project: PROJECT_ID " \
-H "Content-Type: application/json" \
"https://baremetalsolution.googleapis.com/v2/projects/ PROJECT_ID /locations/ REGION /networks/ NETWORK_NAME "
Organize networks by using labels
To help organize your networks, you can use labels. Labels are key-value pairs
that you can attach to each network, then filter the networks based on their
labels. For example, you can use labels to group networks by purpose,
environment, location, department, and so on. Labels are optional.
Add or update labels for networks
You can add or update labels for the existing networks.
Console
Go to the
Compute Engine > Bare Metal Solution > Networks page.
For the network that you want to label, click
more_vert .
Click edit Edit labels .
On the Labels editor page:
Click add Add label and add
the key-value pair.
To update labels, select the existing labels and modify their values.
Click Submit .
After you return to the Networks page, refresh the page to view your
changes.
gcloud
To add or update labels for a network, use the gcloud bms networks update
command with the --update-labels option.
The following sample command adds the labels environment = dev and
location = branch :
gcloud bms networks update NETWORK_NAME --project= PROJECT_ID --region= REGION --update-labels environment = dev , location = branch
If you provide a new value for a label that already exists, the system updates
the existing label with the new value. If you provide a new label, the
system adds the new label to the list of labels.
API
To add or update labels for a network, enter your project ID, region, network
name, and a list of labels in the following curl command. Copy the command,
paste it into the Cloud Shell prompt, and press the Enter
or Return key.
The following sample command assigns a label of environment = test .
curl -X PATCH \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "X-Goog-User-Project: PROJECT_ID " \
-H "Content-Type: application/json" \
"https://baremetalsolution.googleapis.com/v2/projects/ PROJECT_ID /locations/ REGION /networks/ NETWORK_NAME ?updateMask=labels"
-d "{
'labels' : {' environment ': ' test '}
}"
Remove labels from networks
You can remove labels from networks.
Console
Go to the
Compute Engine > Bare Metal Solution > Networks page.
For a network with labels that you want to remove, click
more_vert .
Click edit Edit labels .
On the Labels editor page:
To delete a label, click delete .
Click Submit .
After you return to the Networks page, refresh the page to view your
changes.
gcloud
To remove labels from a network, use the gcloud bms networks update
command with the following options:
--remove-labels : Removes the specified label.
--clear-labels : Removes all the labels.
The following sample command removes the label department from a network:
gcloud bms networks update NETWORK_NAME --project= PROJECT_ID --region= REGION --remove-labels= department
The following sample command removes all the labels from a network:
gcloud bms networks update NETWORK_NAME --project= PROJECT_ID --region= REGION --clear-labels
API
To remove labels from a network, enter your project ID, region, and network
name in the following curl command. Provide an empty list of labels to
remove all labels, or provide a list of labels you want to keep
(omitting the labels you want to remove). Copy the command, paste it into
the Cloud Shell prompt, and press the Enter or Return key.
The following sample command removes all the labels except
environment = test .
curl -X PATCH \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "X-Goog-User-Project: PROJECT_ID " \
-H "Content-Type: application/json" \
"https://baremetalsolution.googleapis.com/v2/projects/ PROJECT_ID /locations/ REGION /networks/ NETWORK_NAME ?updateMask=labels"
-d "{
'labels' : {' environment ': ' test '}
}"
Filter networks using labels
You can search your networks and filter results by using labels.
Console
Go to the
Compute Engine > Bare Metal Solution > Networks page.
Click in the filter_list Filter
bar above the list of networks.
From the Properties list, select Labels .
Enter the key, value, or key-value pair for your label.
For example, to view only networks with the label env:dev , you can
enter any of the following:
Enter the key: env
Enter the value: dev
Enter the key-value pair: env:dev
To apply the label filter, click anywhere outside the filter bar.
gcloud
To filter networks by using labels, use the gcloud bms networks list
command with the --filter option.
The value of --filter option must be in the
labels. KEY = VALUE format. For example,
if you want to filter on a label with env as the key and dev as the
value, issue this command:
gcloud bms networks list --project= PROJECT_ID --region= REGION --filter labels. environment = dev
For more information about the filter syntax in the gcloud CLI,
see the
gcloud topic filters documentation .
API
To filter networks by using labels, enter your project ID and region
along with filter=labels and a key-value pair label. Copy the command,
paste it into the Cloud Shell prompt, and press the Enter or
Return key.
The following sample command limits the output to find networks with the
key-value pair label environment = test .
curl -X GET \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "X-Goog-User-Project: PROJECT_ID " \
-H "Content-Type: application/json" \
"https://baremetalsolution.googleapis.com/v2/projects/ PROJECT_ID /locations/ REGION /networks"?filter=labels. environment = test
Rename a network
To rename a network, follow these steps:
Console
In the Google Cloud console, go to the
Compute Engine > Bare Metal Solution > Networks page.
Click the network name.
On the Network details page, in the Name field, click edit Edit name .
On the Editing name page, enter a new name.
Click Save .
To view your changes, refresh the page.
gcloud
To rename a network, use the gcloud bms networks rename command.
gcloud bms networks rename NETWORK_NAME --new-name= NEW_NAME --project= PROJECT_ID --region= REGION
Replace the following:
NETWORK_NAME : Current name of the network.
NEW_NAME : New name of the network.
PROJECT_ID : Your project ID.
REGION : The location of the network.
Create a network
Before creating a network, you must create a VRF. See Create a VRF .
Note: You can also configure multiple networks on a server while provisioning
through the Google Cloud console intake form. See Choose standard networking or
explore advanced networking options
and Use the Google Cloud console intake form
to enter your selections .
To create a network, follow these steps:
Go to the Networks page.
Go to Networks
Click Create .
Enter a name for the network.
In the Location list, select a region for the network.
In the Pod list, select a pod for the network.
The Pod drop-down list also shows the number of your existing
Bare Metal Solution resources in each pod of the selected
location.
If you're unsure about which pod to select, contact
Google Cloud Sales .
Select the type of the network:
To create a client network, select Client .
To create a private network, select Private .
(Applicable only if you selected the Client network type) In the VRF
list, select a VRF.
In the Network IP address range field, enter the IP address range of
the network.
Warning: Ensure that the client network IP address range doesn't overlap with a connecting VPC subnet. If they overlap, the client network isn't installed in the VPC routing table. This can cause your Bare Metal Solution environment to become unreachable from the VPC.
(Optional) In the Service IP address range field, enter the service
IP address range of the network.
Note: The service IP address range can only be defined if the network IP
address range does not overlap with any other Bare Metal Solution network
in the organization within the region.
Select the MTU for the network:
1500—For standard sized frames.
9000—For jumbo frames.
Note: We recommend you to configure standard MTU (1500) consistent between BMS network
segments (BMS Client Network, VLAN attachment, VPC Network, On-premises network)
Click Save .
Attach a network to a server
You can't attach a network to a server if the IP address range of the
network overlaps with another network attached to the server.
To attach a network, follow these steps:
Go to the Servers page.
Go to Servers
Click the server name.
On the Server details page, click Attach network .
On the Attach a network page, do the following:
To select a network from other projects in your organization:
Select the Select networks from other projects in your organization
checkbox.
From the Select an existing network list, select a network.
To select a network from the current project:
Clear the Select networks from other projects in your organization
checkbox.
From the Select an existing network list, select a network.
Set the interface configuration:
Note: In addition to the configuration set here, you need to configure
the interface on your server. Refer to your OS documentation.
From the Interface list, select a bond interface for this network.
In most cases, select bond0 for a client network and bond1 for a
private network.
In the IP address field, enter an IP address from the network
that you are attaching.
(Optional) To make this network the default gateway, select the
Default gateway checkbox.
Click Attach network .
The server status changes to "Provisioning". Attaching a network is a
long-running operation. To check the status, in the Google Cloud console, click
notifications Notifications . You can also follow the steps in
View the status of a long-running operation .
When the operation completes, the server status changes to "Running".
Update the OS configuration of your Bare Metal Solution server.
Once you complete the previous steps for attaching the network through
the Google Cloud console and the server status changes to "Running", you
must update the OS configuration of your Bare Metal Solution server. If you
don't update the OS configuration, the changes made in the
Google Cloud console are not implemented completely. The next steps in this
procedure show you how to update your OS configuration.
Caution: Updating the OS configuration incorrectly can result in a loss of
network connectivity. If in doubt, consult with your network administrator.
We recommend that, before updating the OS configuration, you
configure and test the interactive serial console access to your Bare Metal Solution server.
This way you can continue updating even if you lose connectivity. We also recommend that
you create a boot volume snapshot in case you might want to
restore the previous OS configuration.
The next steps are only for example and might vary depending on your OS.
Refer to your OS configuration guide if you face any issue.
RHEL and Oracle Linux
Log in as the root user.
Create a new connection. Run the following command:
Note: The following command does not designate the new network as
the default gateway.
nmcli connection add type vlan con-name INTERFACE_NAME . VLAN_ID ifname INTERFACE_NAME . VLAN_ID dev INTERFACE_NAME mtu MTU id VLAN_ID ip4 IP_ADDRESS / NETMASK ipv6.method "ignore"
Replace the following:
INTERFACE_NAME : The name of the interface to which you
want to attach the network. This is the same interface that you
selected in Step 6 (Set the interface configuration) of this
procedure. You can get the interface name from the
Server details page, in the Networks section. See
View servers .
VLAN_ID : The VLAN ID of the network that you want to
attach. You can get the VLAN ID from the Network details page.
See View networks .
IP_ADDRESS : The IP address of the Bare Metal Solution
server in the network. This is the same IP address that you entered
in Step 6 (Set the interface configuration) of this procedure.
You can get the IP address from the
Server details page, in the Networks section. See
View servers .
NETMASK : The network mask of the network that you want to
attach. You can get
the network mask from the CIDR field on the Network details page.
See View networks .
MTU : The MTU of the network that you want to attach. You
can get the MTU from the Network details page.
See View networks .
Example:
nmcli connection add type vlan con-name bond0.114 ifname bond0.114 dev bond0 mtu 1500 id 114 ip4 172.16.80.1/24 ipv6.method "ignore"
(Optional) If you have created a Client network and you want to
use this network to connect from your VPC to VLAN attachments or other environment (such as, an on-prem environment), configure a
route to your specific subnet. Run the following commands as the root
user:
nmcli connection modify INTERFACE_NAME . VLAN_ID +ipv4.routes " SUBNET GATEWAY_IP "
nmcli connection up INTERFACE_NAME . VLAN_ID
Replace the following:
INTERFACE_NAME : The name of the interface to which you
want to attach the network. This is the same interface that you
selected in Step 6 (Set the interface configuration) of this
procedure. You can get the interface name from the
Server details page, in the Networks section. See
View servers .
VLAN_ID : The VLAN ID of the network that you want to
attach. You can get the VLAN ID from the Network details page.
See View networks .
SUBNET : The IP address and the mask of the network in
CIDR notation that is used to connect to your Bare Metal Solution
server through the client network. If this is your VPC network, you
can get the subnet from the VPC networks page, in the
Subnets section. See List subnets .
If this is another environment, contact your network administrator.
GATEWAY_IP : The IP address of the gateway in the network
that you want to attach. You can get the Gateway IP from the
Network details page.
See View networks .
Example:
nmcli connection modify bond0.114 +ipv4.routes "192.168.122.0/24 172.16.80.254"
nmcli connection up bond0.114
(Optional) If you created a Client network and set it as the
default gateway in Step 7 (Default gateway) of this procedure,
follow these steps to update your OS configuration:
Complete the previous step, that is, Step 9.c .
Ensure that you are connected to your Bare Metal Solution server
through the new client network. For example, by connecting to the
server from a VM in your VPC that this network is attached to with
VLAN attachments.
To set this network as the default gateway, disable the default
gateway settings on the old network and then enable the default
gateway settings on this network. Run the following commands as the
root user:
nmcli connection modify OLD_INTERFACE_NAME . OLD_VLAN_ID ipv4.gateway ""
nmcli connection modify INTERFACE_NAME . VLAN_ID ipv4.gateway GATEWAY_IP
nmcli connection up INTERFACE_NAME . VLAN_ID
nmcli connection up OLD_INTERFACE_NAME . OLD_VLAN_ID
Replace the following:
OLD_INTERFACE_NAME : The name of the interface to which
the old default gateway network is attached to. You can get the
interface name from the Server details page, in the
Networks section, or by examining your Bare Metal Solution
server OS configuration, that is, by using ip a or
nmcli connection show commands.
OLD_VLAN_ID : The VLAN ID of the old default gateway
network. You can get the VLAN ID from the Network details
page. See View networks ,
or by examining your Bare Metal Solution server OS configuration,
that is, by using ip a or nmcli connection show commands .
INTERFACE_NAME : The name of the interface to which the
the new network network is attached to. This is the same
interface that you selected in
Step 11 (Set the interface configuration) of this procedure.
You can get the interface name from the Server details page,
in the Networks section. See
View servers .
VLAN_ID : The VLAN ID of the new network. You can get
the VLAN ID from the Network details page.
See View networks .
GATEWAY_IP : The IP address of the gateway in the new
network. You can get the Gateway IP from the Network details
page. See View networks .
Example:
nmcli connection modify bond0.143 ipv4.gateway ""
nmcli connection modify bond0.114 ipv4.gateway 172.16.80.254
nmcli connection up bond0.114
nmcli connection up bond0.143
SLES
Log in as the root user.
Create an interface configuration ( ifcfg ) file at the location
/etc/sysconfig/network with the following naming convention:
ifcfg- INTERFACE_NAME . VLAN_ID
Replace the following:
INTERFACE_NAME : The name of the interface to which you
want to attach the network. This is the same interface that you
selected in Step 6 (Set the interface configuration) of this
procedure. You can get the interface name from the
Server details page, in the Networks section. See
View servers .
VLAN_ID : The VLAN ID of the network that you want to
attach. You can get the VLAN ID from the Network details page.
See View networks .
When you are done, the path to your file looks like this:
/etc/sysconfig/network/ifcfg- INTERFACE_NAME . VLAN_ID
Add the following information for the network interface in the
ifcfg file.
NAME=' INTERFACE_NAME . VLAN_ID '
ETHERDEVICE=' INTERFACE_NAME '
STARTMODE='auto'
USERCONTROL='no'
BOOTPROTO='static'
IPADDR=' IP_ADDRESS / NETMASK '
MTU= MTU
VLAN='yes'
Replace the following:
INTERFACE_NAME : The name of the interface to which you
want to attach the network. This is the same interface that you
selected in Step 6 (Set the interface configuration) of this
procedure. You can get the interface name from the
Server details page, in the Networks section. See
View servers .
VLAN_ID : The VLAN ID of the network that you want to
attach. You can get the VLAN ID from the Network details page.
See View networks .
IP_ADDRESS : The IP address of the Bare Metal Solution
server in the network. This is the same IP address that you entered
in Step 6 (Set the interface configuration) of this procedure.
You can find the IP address in the Server details page in the
Networks section.
NETMASK : The network mask of the network that you want to
attach. You can get the network mask from the CIDR field on the
Network details page.
See View networks .
MTU : The MTU of the network that you want to attach. You
can get the MTU from the Network details page.
See View networks .
For example, a sample file /etc/sysconfig/network/ifcfg-bond1.121
looks like this:
NAME='bond1.121'
ETHERDEVICE='bond1'
STARTMODE='auto'
USERCONTROL='no'
BOOTPROTO='static'
IPADDR='192.168.200.10/24'
MTU=1500
VLAN='yes'
Bring up the interface to apply the changes.
ifup INTERFACE_NAME . VLAN_ID
Replace the following:
INTERFACE_NAME : The name of the interface to which you
want to attach the network. This is the same interface that you
selected in Step 6 (Set the interface configuration) of this
procedure. You can get the interface name from the
Server details page, in the Networks section. See
View servers .
VLAN_ID : The VLAN ID of the network that you want to
attach. You can get the VLAN ID from the Network details page.
See View networks .
(Optional) If you have created a Client network and you want to
use this network to connect from your VPC to VLAN attachments or other environment (such as, an on-prem environment), configure a
route to your specific subnet.
Create an interface route configuration ( ifroute ) file at the
location /etc/sysconfig/network with the following naming
convention:
ifroute- INTERFACE_NAME . VLAN_ID
When you're done, the path to your file looks like this:
/etc/sysconfig/network/ifroute- INTERFACE_NAME . VLAN_ID
Add the following information for the network interface in the
ifroute file.
SUBNET GATEWAY_IP - -
Replace the following:
SUBNET : The IP address and the mask of the network in
CIDR notation that is used to connect to your Bare Metal Solution
server through the client network. If this is your VPC network, you
can get the subnet from the VPC networks page, in the
Subnets section. See List subnets .
If this is another environment, contact your network administrator.
GATEWAY_IP : The IP address of the gateway in the
network that you want to attach. You can get the Gateway IP from
the Network details page.
See View networks .
Bring up the interface to apply the changes.
ifup INTERFACE_NAME . VLAN_ID
Replace the following:
INTERFACE_NAME : The name of the interface to which you
want to attach the network. This is the same interface that you
selected in Step 6 (Set the interface configuration) of this
procedure. You can get the interface name from the
Server details page, in the Networks section. See
View servers .
VLAN_ID : The VLAN ID of the network that you want to
attach. You can get the VLAN ID from the Network details page.
See View networks .
(Optional) If you created a Client network and set it as the
default gateway in Step 7 (Default gateway) of this procedure,
follow these steps to update your OS configuration:
Complete the previous step, that is, Step 9.c .
Ensure that you are connected to your Bare Metal Solution server
through this network. For example, by connecting to the server from
a VM in your VPC that this network is attached to through VLAN
attachments.
To set this network as the default gateway, change your system
default route configuration:
Edit the file /etc/sysconfig/network/routes to replace the IP
address of the current default gateway with IP address of the new
default gateway.
Update file contents to match the following:
default GATEWAY_IP - -
Replace the following:
GATEWAY_IP : The IP address of the gateway in the new
network. You can get the Gateway IP from the Network details
page. See View networks .
Reload network configuration to apply the change.
systemctl reload network
Detach a network from a server
You can detach only one network at a time from a server, and the server can be
running or powered-off.
Note:
Ensure that you are not connected through the IP address assigned to the
interface that's attached to the network you want to remove. Use a different
IP address assigned for the server.
To detach the network that is the default gateway, you must first attach
another network to the server as the default gateway. This automatically
updates the old network as a non-default gateway and you can delete it using
the steps in this procedure.
To detach a network, follow these steps:
Update the OS configuration of your Bare Metal Solution server.
Before detaching a network through the Google Cloud console, you
must first update the OS configuration of your Bare Metal Solution
server. If you don't update the OS configuration, the changes made in the Google Cloud console are not implemented completely.
Caution: Updating the OS configuration incorrectly can result in a loss of
network connectivity. If in doubt, consult with your network administrator.
We recommend that, before updating the OS configuration, you
configure and test the interactive serial console access to your Bare Metal Solution server.
This is helpful in case you lose connectivity while making the changes. With interactive serial console you can continue updating. We also recommend that
you create a boot volume snapshot in case you might want to
restore the previous OS configuration.
The actions in this step are only for example and might vary depending
on your OS. Refer to your OS configuration guide if you face any issue.
RHEL and Oracle Linux
Delete the bond interface for the network that you want to detach.
As the root user, run the following command:
nmcli connection delete INTERFACE_NAME . VLAN_ID
Replace the following:
INTERFACE_NAME : The name of the interface for the network
that you want to detach. You can get the interface name from the
Server details page, in the Networks section. See
View servers .
VLAN_ID : The VLAN ID of the network that you want to
detach. You can get the VLAN ID from the Network details page.
See View networks .
Example:
nmcli connection delete bond0.148
SLES
Bring the interface down. As the root user, run the following command:
ifdown INTERFACE_NAME . VLAN_ID
Replace the following:
INTERFACE_NAME : The name of the interface for the network
that you want to detach. You can get the interface name from the
Server details page, in the Networks section. See
View servers .
VLAN_ID : The VLAN ID of the network that you want to
detach. You can get the VLAN ID from the Network details page.
See View networks .
Example:
ifdown bond1.121
Backup the information of the interface configuration file into a
different file so that it is not processed on the next boot. Run the
following command:
mv /etc/sysconfig/network/ifcfg- INTERFACE_NAME . VLAN_ID /etc/sysconfig/network/ifcfg- INTERFACE_NAME . VLAN_ID .backup
Replace the following:
INTERFACE_NAME : The name of the interface for the network
that you want to detach. You can get the interface name from the
Server details page, in the Networks section. See
View servers .
VLAN_ID : The VLAN ID of the network that you want to
detach. You can get the VLAN ID from the Network details page.
See View networks .
Example:
mv /etc/sysconfig/network/ifcfg-bond1.121 /etc/sysconfig/network/ifcfg-bond1.121.backup
(Optional) If you want to detach a Client network and you configured
routes specific for this network. Backup the information of the
interface route configuration file into a different file so that it
is not processed on the next boot. Run the following command:
mv /etc/sysconfig/network/ifroute- INTERFACE_NAME . VLAN_ID /etc/sysconfig/network/ifroute- INTERFACE_NAME . VLAN_ID .backup
Replace the following:
INTERFACE_NAME : The name of the interface for the network
that you want to detach. You can get the interface name from the
Server details page, in the Networks section. See
View servers .
VLAN_ID : The VLAN ID of the network that you want to
detach. You can get the VLAN ID from the Network details page.
See View networks .
Example:
mv /etc/sysconfig/network/ifroute-bond1.121 /etc/sysconfig/network/ifroute-bond1.121.backup
Detach the network through the Google Cloud console:
Go to the
Compute Engine > Bare Metal Solution > Servers page.
Click the server name.
On the Server details page, select the network that you want to detach.
Click Detach network .
When prompted, click Confirm .
The server status changes to "Provisioning". Detaching a network is a
long-running operation. To check the status, in the Google Cloud console,
click notifications Notifications . You
can also follow the steps in
View the status of a long-running operation . When the operation completes, the server status changes to "Running".
Delete a network
Multiple client networks attached to the same VRF can't be deleted. In this case,
contact Customer Care .
Note: Before deleting a network, ensure that the network is detached from all
the servers it was attached to. See
Detach a network from a server .
To delete a network, follow these steps:
Console
Go to the
Compute Engine > Bare Metal Solution > Networks page.
Select the network that you want to delete.
Click Delete .
When prompted, click Confirm .
Deleting a network is a long-running operation. To check the status, in the
Google Cloud console, click
notifications Notifications . You can also follow the steps in
View the status of a long-running operation .
View advanced networking information for a Bare Metal Solution environment
If you selected the advanced networking option for complex deployments in your
Bare Metal Solution environment, you can view this information by using the
following server commands.
Console
Go to the
Compute Engine > Bare Metal Solution > Servers page.
Click the server name.
On the Server details page, you can view the following information:
Under basic details, you can view the network template.
In the Networks section, you can view the following information:
Network name
Network type
IP address
Default gateway
Interface name
gcloud
Run the gcloud bms instances describe command to view advanced networking
settings for your server.
gcloud bms instances describe SERVER_NAME --project= PROJECT_ID --region= REGION
API
To view advanced networking settings for your server, enter your project ID,
region, and server name, then issue the following curl command. In the
networks section of the output, you can view the network template, logical
interfaces, bonded interfaces, and network type assigned to each interface.
curl -X GET \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "X-Goog-User-Project: PROJECT_ID " \
-H "Content-Type: application/json" \
"https://baremetalsolution.googleapis.com/v2/projects/ PROJECT_ID /locations/ REGION /instances/ SERVER_NAME "
Implement IP Address Management in a Bare Metal Solution environment
Being able to manage your network topology inside your Bare Metal Solution
environment is important. IP address management helps you create, view, and
delete IP addresses for your resources. You can use this information to prevent
overlapping IP addresses and resolve conflicts when requesting new resources.
View IP address reservations
To view IP addresses for existing reservations:
gcloud
Run the gcloud bms networks list-ip-reservations command:
gcloud bms networks list-ip-reservations --project= PROJECT_ID --region REGION
API
To view IP address reservations for existing resources, enter your project
ID, region, and network name, then issue the following curl command. The
reservations section in the output shows reserved IP address ranges.
curl -X GET \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "X-Goog-User-Project: PROJECT_ID " \
-H "Content-Type: application/json" \
"https://baremetalsolution.googleapis.com/v2/projects/ PROJECT_ID /locations/ REGION /networks/ NETWORK_NAME "
Create and update an IP address reservation
To create a new IP address reservation or update an existing one:
gcloud
Run the gcloud bms networks update command to manage IP address
reservations:
gcloud bms networks update NETWORK_NAME --project= PROJECT_ID --region REGION --add-ip-range-reservation=start-address= START_ADDRESS ,end-address= END_ADDRESS ,note=" NOTE "
To remove all IP address reservations, add the
--clear-ip-range-reservations option.
To delete one of the reserved address blocks, add the
--remove-ip-range-reservation option and specify the start address and
end address of the reserved IP address block that you wish to remove.
gcloud bms networks update NETWORK_NAME --project= PROJECT_ID --region REGION --remove-ip-range-reservation=start-address= START_ADDRESS ,end-address= END_ADDRESS
API
To create a new IP address reservation or update an existing one, enter your
project ID, region, and network name into the following command. Add a start
address, end address, and a note for each block of IP addresses you want to
reserve, then issue the curl command.
curl -X PATCH \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "X-Goog-User-Project: PROJECT_ID " \
-H "Content-Type: application/json" \
"https://baremetalsolution.googleapis.com/v2/projects/ PROJECT_ID /locations/ REGION /networks/ NETWORK_NAME ?updateMask=reservations"
-d "{
'reservations' : [
{
'startAddress' : ' START_ADDRESS_1 ',
'endAddress' : ' END_ADDRESS_1 ',
'note' : ' NOTES_1 '
},
{
'startAddress' : ' START_ADDRESS_2 ',
'endAddress' : ' END_ADDRESS_2 ',
'note' : ' NOTES_2 '
}
]
}"
The IP address reservation blocks must fall within the CIDR range of the
target network.
Do not use .1 (the gateway IP address) in a reservation block.
Each time you run this curl command, it overwrites the previous set of
reservations. If you need to make updates, be sure to include all sets of
reservation blocks before you issue the command.
To clear all reservations, replace the end of the command with the following:
-d "{
'reservations' : []
}"
Manage storage
You can manage the storage in your Bare Metal Solution environment in the
following ways:
View storage volumes
Organize storage volumes by using labels
Rename a storage volume
Provision storage volume resources
Remove storage volume resources
View boot volume snapshots and their details
Create a boot volume snapshot
Delete a boot volume snapshot
Restore a boot volume snapshot
View storage volumes
Paying attention to your storage resources in the Bare Metal Solution
environment helps you determine if your servers have enough storage capacity for
applications and workloads.
To view the details of your storage volumes, follow these steps:
Console
Go to the Volumes page.
Go to Volumes
The Volumes page lists all your storage volumes with the following
details:
Field
Description
Example
Status
Indicates the availability of a storage volume
A green circle with a check mark indicates that the storage
volume is ready.
ID
Identifier assigned to your storage volume.
Click the ID to view basic information about the storage
volume, including LUNs and snapshots.
Share the ID with Google Cloud support when
troubleshooting this resource.
Boot volume: at-1234567-svr001-vol000-b1
Fibre Channel volume: at-1111111-vol001
NFS share: at-2222222-nfs001-vol000
Name
Storage volume name. Click the name to view additional
information about the storage volume, including LUNs and
snapshots.
Note: If you did not enter a name when you
provisioned your storage volume, the ID appears
in this field.
Boot volume: boot-volume-1
Fibre Channel volume: fibre-channel-volume-5
NFS share: nfs-share-7
Location
Region where the storage volume is located
asia-southeast1
Pod
Pod that contains your storage volume. A pod is a unit of
isolation that contains your Bare Metal Solution resources.
Resources in different pods cannot be connected. A region can have
multiple pods.
The Pod column is disabled by default. To
enable it, do the following:
Click Column display options view_column .
Select the Pod checkbox.
Click OK .
If you don't want to enable the Pod column,
you can view the pod of a storage volume by clicking the storage
volume name.
asia-southeast1-pod1
Type
Hard drive or solid-state drive
HDD - Hard drive
Labels
Displays any labels you added to this storage resource
You can use labels to filter the console output by copying the
text of a label and pasting it in the Filter box
just above the Status field.
environment:test
gcloud
To view all storage volumes in your Bare Metal Solution environment and
see their status, enter your project ID and issue the gcloud bms
volumes list command:
gcloud bms volumes list --project= PROJECT_ID
The following output example shows three storage volumes, the project
ID, region, volume size and storage type.
NAME PROJECT REGION REQUESTED_SIZE_GIB STORAGE_TYPE STATE
at-1234567-svr001-vol000-b1 PROJECT_ID REGION 200 SSD READY
at-1111111-vol001 PROJECT_ID REGION 1024 SSD READY
at-2222222-nfs001-vol000 PROJECT_ID REGION 400 HDD READY
To view a single storage volume, enter your storage volume name, project
ID, and region, and issue the gcloud bms volumes describe command:
gcloud bms volumes describe VOLUME_NAME --project= PROJECT_ID --region= REGION
The following output example shows the storage volume size, name,
snapshot auto deletion policy, state, and storage type.
currentSizeGib: '250'
name: projects/ PROJECT_ID /locations/ REGION /volumes/ VOLUME_NAME
requestedSizeGib: '250'
snapshotAutoDeleteBehavior: OLDEST_FIRST
snapshotReservationDetail:
reservedSpaceGib: '50'
reservedSpaceRemainingGib: '50'
state: READY
storageType: SSD
To view all LUNs for your storage volume, enter your project ID, region,
and storage volume name, and issue the gcloud bms volumes luns list
command:
gcloud bms volumes luns list --project= PROJECT_ID --region= REGION --volume= VOLUME_NAME
The following output example shows the names of the LUNs, region,
storage volume name, volume size, and the state.
NAME REGION VOLUME SIZE_GB STATE
at-11111111-vol001-lun000 REGION VOLUME_NAME 200 READY
To view details for a single LUN, enter your project ID, region, and LUN
name, and issue the gcloud bms volumes luns describe command:
gcloud bms volumes luns describe LUN_NAME --project= PROJECT_ID --region= REGION --volume= VOLUME_NAME
The following output example shows the LUN name and storage volume
information, such as size, state, storage type, name, and ID.
bootLun: true
name: projects/ PROJECT_ID /locations/ REGION /volumes/ VOLUME_NAME /luns/ LUN_NAME
sizeGb: '200'
state: READY
storageType: SSD
storageVolume: VOLUME_NAME
wwid: 600a09803831434434244f774d616b94
API
Open a Cloud Shell terminal window in your Google Cloud console.
To view all storage volumes in your Bare Metal Solution environment and
see their status, enter your project ID and region into the following
curl command. Copy the command, paste it into the Cloud Shell
prompt, and press the Enter or Return key:
curl -X GET \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "X-Goog-User-Project: PROJECT_ID " \
-H "Content-Type: application/json" \
"https://baremetalsolution.googleapis.com/v2/projects/ PROJECT_ID /locations/ REGION /volumes"
Note: When a volume update is in process, the state field appears as
Creating . When the volume update completes, the state field appears
as Ready .
To view a single storage volume, enter your project ID, region, and
storage volume name and issue the following command:
curl -X GET \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "X-Goog-User-Project: PROJECT_ID " \
-H "Content-Type: application/json" \
"https://baremetalsolution.googleapis.com/v2/projects/ PROJECT_ID /locations/ REGION /volumes/ VOLUME_NAME "
To view all logical unit numbers (LUNs) for your storage volume, enter
your project ID, region, and storage volume name, then issue the
following command:
curl -X GET \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "X-Goog-User-Project: PROJECT_ID " \
-H "Content-Type: application/json" \
"https://baremetalsolution.googleapis.com/v2/projects/ PROJECT_ID /locations/ REGION /volumes/ VOLUME_NAME /luns
To view details for a single LUN, enter your project ID, region, storage
volume name, and LUN name and issue the following command:
curl -X GET \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "X-Goog-User-Project: PROJECT_ID " \
-H "Content-Type: application/json" \
"https://baremetalsolution.googleapis.com/v2/projects/ PROJECT_ID /locations/ REGION /volumes/ VOLUME_NAME /luns/ LUN_NAME "
Organize storage volumes by using labels
To help organize your storage volumes, you can use labels. Labels are key-value pairs
that you can attach to each storage volume, then filter the storage volumes based on their
labels. For example, you can use labels to group storage volumes by purpose,
environment, location, department, and so on. Labels are optional.
Add or update labels for storage volumes
You can add or update labels for the existing storage volumes.
Console
Go to the
Compute Engine > Bare Metal Solution > Volumes page.
For the storage volume that you want to label, click
more_vert .
Click edit Edit labels .
On the Labels editor page:
Click add Add label and add
the key-value pair.
To update labels, select the existing labels and modify their values.
Click Submit .
After you return to the Volumes page, refresh the page to view your
changes.
gcloud
To add or update labels for a storage volume, use the gcloud bms volumes update
command with the --update-labels option.
The following sample command adds the labels environment = dev and
location = branch :
gcloud bms volumes update VOLUME_NAME --project= PROJECT_ID --region= REGION --update-labels environment = dev , location = branch
If you provide a new value for a label that already exists, the system updates
the existing label with the new value. If you provide a new label, the
system adds the new label to the list of labels.
API
To add or update labels for a storage volume, enter your project ID, region, volume
name, and a list of labels in the following curl command. Copy the command,
paste it into the Cloud Shell prompt, and press the Enter
or Return key.
The following sample command assigns a label of environment = test .
curl -X PATCH \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "X-Goog-User-Project: PROJECT_ID " \
-H "Content-Type: application/json" \
"https://baremetalsolution.googleapis.com/v2/projects/ PROJECT_ID /locations/ REGION /volumes/ VOLUME_NAME ?updateMask=labels"
-d "{
'labels' : {' environment ': ' test '}
}"
Remove labels from storage volumes
You can remove labels from the storage volumes.
Console
Go to the
Compute Engine > Bare Metal Solution > Volumes page.
For a storage volume with labels that you want to remove, click
more_vert .
Click edit Edit labels .
On the Labels editor page:
To delete a label, click delete .
Click Submit .
After you return to the Volumes page, refresh the page to view your
changes.
gcloud
To remove labels from a storage volume, use the gcloud bms volumes update
command with the following options:
--remove-labels : Removes the specified label.
--clear-labels : Removes all the labels.
The following sample command removes the label department from a storage volume:
gcloud bms volumes update VOLUME_NAME --project= PROJECT_ID --region= REGION --remove-labels= department
The following sample command removes all the labels from a storage volume:
gcloud bms volumes update VOLUME_NAME --project= PROJECT_ID --region= REGION --clear-labels
API
To remove labels from a storage volume, enter your project ID, region, and storage volume
name in the following curl command. Provide an empty list of labels to
remove all labels, or provide a list of labels you want to keep
(omitting the labels you want to remove). Copy the command, paste it into
the Cloud Shell prompt, and press the Enter or Return key.
The following sample command removes all the labels except
environment = test .
curl -X PATCH \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "X-Goog-User-Project: PROJECT_ID " \
-H "Content-Type: application/json" \
"https://baremetalsolution.googleapis.com/v2/projects/ PROJECT_ID /locations/ REGION /volumes/ VOLUME_NAME ?updateMask=labels"
-d "{
'labels' : {' environment ': ' test '}
}"
Filter storage volumes using labels
You can search your storage volumes and filter results by using labels.
Console
Go to the
Compute Engine > Bare Metal Solution > Volumes page.
Click in the filter_list Filter
bar above the list of storage volumes.
From the Properties list, select Labels .
Enter the key, value, or key-value pair for your label.
For example, to view only storage volumes with the label env:dev , you can
enter any of the following:
Enter the key: env
Enter the value: dev
Enter the key-value pair: env:dev
To apply the label filter, click anywhere outside the filter bar.
gcloud
To filter storage volumes by using labels, use the gcloud bms volumes list
command with the --filter option.
The value of --filter option must be in the
labels. KEY = VALUE format. For example,
if you want to filter on a label with env as the key and dev as the
value, issue this command:
gcloud bms volumes list --project= PROJECT_ID --region= REGION --filter labels. environment = dev
For more information about the filter syntax in the gcloud CLI,
see the
gcloud topic filters documentation .
API
To filter storage volumes by using labels, enter your project ID and region
along with filter=labels and a key-value pair label. Copy the command,
paste it into the Cloud Shell prompt, and press the Enter or
Return key.
The following sample command limits the output to find storage volumes with the
key-value pair label environment = test .
curl -X GET \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "X-Goog-User-Project: PROJECT_ID " \
-H "Content-Type: application/json" \
"https://baremetalsolution.googleapis.com/v2/projects/ PROJECT_ID /locations/ REGION /volumes"?filter=labels. environment = test
Rename a storage volume
To rename a storage volume, follow these steps:
Console
In the Google Cloud console, go to the
Compute Engine > Bare Metal Solution > Volumes page.
Click the storage volume name.
On the Volume details page, in the Name field, click edit Edit name .
On the Editing name page, enter a new name.
Click Save .
To view your changes, refresh the page.
gcloud
To rename a storage volume, use the gcloud bms volumes rename command.
gcloud bms volumes rename VOLUME_NAME --new-name= NEW_NAME --project= PROJECT_ID --region= REGION
Replace the following:
VOLUME_NAME : Current name of the storage volume.
NEW_NAME : New name of the storage volume.
PROJECT_ID : Your project ID.
REGION : The location of the storage volume.
Provision storage volume resources in your Bare Metal Solution environment
After ordering storage resources for your Bare Metal Solution environment,
you can provision the resources once they are available. You can provision the
following self-service options:
Create a new Fibre Channel storage volume
Create LUNs on a volume
Attach a storage volume to a server
Note: For guidance on how to design and implement storage volumes and LUNs, see
Storage choices
and Storage performance .
Create a new storage volume
This feature lets you provision storage that you have previously
ordered. To order storage volumes, contact
Google Cloud Sales .
Note: You can provision multiple storage volumes in a single request only
through the Google Cloud console intake form. See Use the Google Cloud console intake form to enter your selections .
To create a new storage volume, follow these steps:
In the Google Cloud console, go to the
Compute Engine > Bare Metal Solution > Volumes menu.
Click Create .
Enter the following information:
Field
Description
Example
Region
Google Cloud region located closest to your
Bare Metal Solution environment.
us-central1
Name
Create a name for your storage volume.
volume-1
Type
Select the type of storage:
SSD – Solid state drive
HDD – Hard drive
SSD
Performance tier
If you selected the SSD storage type, select the performance tier of the SSD drive:
Standard – Select to create a standard SSD drive.
Performance – Select to create a performance SSD drive.
Note: This option
is enabled only if you have selected a region where Performance SSD
storage is available. For the list of regions, see Performance SSD storage .
Performance
Size
Select the size of the drive in GiB, where 1024 GiB = 1 TiB. The
size ranges from a minimum of 100 GiB to a maximum of 16 TiB. If you
need more than 16 TiB, create additional volumes as needed.
For Performance SSD drive, the maximum size is 8 TiB per volume.
16384
Snapshot enabled
Saves a backup copy of your storage volume once
per day. Required for custom snapshots, but disabled by default.
Note: When you
enable snapshots, Google Cloud reserves 20% of the requested
size of the storage volume. For example, if your volume size is
1 TiB (1024 GiB), you can use 819 GiB for data storage, and 205 GiB
for the snapshots.
Checkbox selected to enable snapshots
Configuration
Select the type of LUN configuration you need:
Default configuration – Create LUNs of equal size (recommended).
Custom configuration – Create LUNs with different sizes.
Default configuration
Target server
Select a server and attach the storage volume.
server-1
Click Create .
The console checks if there is enough space available for the requested
storage volume. The console implements the change if there is available
space, or alerts you if the operation cannot be performed. If your storage
volume request succeeds, billing for the additional storage begins
automatically.
After you have provisioned the storage volume, you can
share it with additional servers .
Note: You cannot expand the existing LUNs in a storage volume. Instead,
create new LUNs on a new storage volume, migrate the old LUNs to the new
storage volume, and decommission the old LUNs.
Create LUNs on a storage volume
To create LUNs for a storage volume, follow these steps:
In the Google Cloud console, go to the
Compute Engine > Bare Metal Solution > Volumes menu.
Click the name of the storage volume on which you want to create a LUN.
Next to the LUNs section, click Create .
Enter the following information:
Field
Description
Example
Number of LUNs
Total number of LUNs you want to create with a particular size.
4
Size
Select the size of the LUN in GiB, where 1024 GiB = 1 TiB.
1024
Click Add item if you need to create more than one set of LUNs.
Click Create to deploy the new LUNs.
Note: When you add a new LUN in an existing storage volume, you need to
rescan your LUNs so the new LUN can be placed into service. For more
information, see Storage choices .
Attach a storage volume to a server
You can attach multiple storage volumes to a server at once.
To attach a storage volume to a server, follow these steps:
In the Google Cloud console, go to the
Compute Engine > Bare Metal Solution > Servers page.
Click the name of the server to which you want to attach a storage volume.
In the LUNs section, click Attach Volumes .
From the Target volumes list, select the storage volume you want to
attach. You can also select multiple storage volumes.
Click Attach volumes .
You can also attach the same storage volume to other servers in parallel. Go
to the Servers page and repeat this procedure for all the other servers.
Delete storage volume resources
When you no longer need specific storage volume resources, you can delete them.
You can delete either a whole storage volume or its LUNs. But before doing so,
you must detach the storage volume from the servers it is attached to.
This section explains the following tasks:
Detach a storage volume from a server
Delete LUNs from a storage volume
Delete a storage volume
Detach a storage volume from a server
You can detach a storage volume from a server. You can't detach individual
LUNs from a server. You can detach multiple storage volumes at once.
To detach a storage volume from a server, follow these steps:
Update the OS configuration of your Bare Metal Solution server.
Before detaching the storage volume through the Google Cloud console,
you must update the OS configuration of your Bare Metal Solution server. If
you don't update the OS configuration, the changes made in the
Google Cloud console are not implemented completely, your data
might become corrupted, and the server might experience issues with the
next reboot.
Caution: Updating the OS configuration incorrectly can cause the system to
become unstable. If in doubt, consult with your system administrator.
We recommend that, before updating the OS configuration, you
configure and test the interactive serial console access
to your Bare Metal Solution server. This way you can continue updating even if
you lose connectivity. We also recommend that you
create a boot volume snapshot
in case you might want to restore the previous OS configuration.
This step shows examples of how to update your OS configuration. The
instructions might vary depending on your OS. Refer to your OS configuration
guide if you face any issue.
Important: These examples are based on a scenario where there is one LUN per
storage volume. If there are multiple LUNs in a storage volume, ensure that
all of the associated LUNs are no longer in use before removing the storage
volume.
Logical Volume Manager (LVM)
Detach a storage volume through LVM for RHEL7.x, RHEL 8.x,
Oracle Linux 7.x, Oracle Linux 8.x, SLES 12 SP4, SLES 12 SP5, SLES 15, and
SLES 15 SP1.
The following example procedure shows how to detach a file system
( /testvol02 ) and its associated logical volume, physical
volume, and the underlying LUN through LVM.
Caution: Make sure that any important data on your file system is
no longer in use before you perform the following steps.
Follow these steps:
Identify the LVM volume and underlying LUN associated with the file
system /testvol02 .
df -h|grep testvol02
Sample output:
/dev/mapper/testvg01-lv02 99G 33M 99G 1% /testvol02
The output shows that the file system /testvol02 is
associated with device /dev/mapper/testvg01-lv02 .
Determine the WWID of the device testvg01-lv02 .
sudo dmsetup ls --tree
Sample output:
testvg01-lv02 (253:10)
└─3600a0980383146354a2b522d53374236 (253:6)
├─ (8:176)
├─ (8:112)
├─ (8:240)
└─ (8:48)
testvg01-lv01 (253:9)
└─3600a0980383146354a2b522d53374235 (253:5)
├─ (8:160)
├─ (8:96)
├─ (8:224)
└─ (8:32)
The output shows that the WWID of the device testvg01-lv02
is 3600a0980383146354a2b522d53374236 .
Determine the logical volume, physical volume, and the WWID of the
underlying LUN for file system /testvol02 .
sudo vgdisplay -v
Sample output:
--- Volume group ---
VG Name testvg01
System ID
Format lvm2
Metadata Areas 2
Metadata Sequence No 4
VG Access read/write
VG Status resizable
MAX LV 0
Cur LV 2
Open LV 2
Max PV 0
Cur PV 2
Act PV 2
VG Size 199.99 GiB
PE Size 4.00 MiB
Total PE 51198
Alloc PE / Size 50688 / 198.00 GiB
Free PE / Size 510 / 1.99 GiB
VG UUID W42Rle-9sER-jpS1-dwBC-xbtn-1D2b-FNRDMA
--- Logical volume ---
LV Path /dev/testvg01/lv01
LV Name lv01
VG Name testvg01
LV UUID W8bzQQ-Qtyf-CDJA-AXPt-P1b1-X4xL-2WDq92
LV Write Access read/write
LV Creation host, time at-5176205-svr001, 2022-12-06 22:14:56 +0000
LV Status available
# open 1
LV Size 99.00 GiB
Current LE 25344
Segments 1
Allocation inherit
Read ahead sectors auto
- currently set to 8192
Block device 253:9
--- Logical volume ---
LV Path /dev/testvg01/lv02
LV Name lv02
VG Name testvg01
LV UUID B1vtMm-RAKx-3S92-mHfx-98xc-gKwR-XWOavH
LV Write Access read/write
LV Creation host, time at-5176205-svr001, 2022-12-07 17:02:53 +0000
LV Status available
# open 1
LV Size 99.00 GiB
Current LE 25344
Segments 1
Allocation inherit
Read ahead sectors auto
- currently set to 8192
Block device 253:10
--- Physical volumes ---
PV Name /dev/mapper/3600a0980383146354a2b522d53374235
PV UUID ieY2Cr-HNrg-dj2G-wHgP-lsuh-PTAH-hNemRq
PV Status allocatable
Total PE / Free PE 25599 / 255
PV Name /dev/mapper/3600a0980383146354a2b522d53374236
PV UUID AMrtZa-TZHO-w0h6-Uf1G-NCwa-UtFY-83rZen
PV Status allocatable
Total PE / Free PE 25599 / 255
The output shows the following:
The file system /testvol02 is using the Logical
Volume (LV) lv02 from the volume group
testvg01 .
The Physical Volume (PV) in use is
/dev/mapper/3600a0980383146354a2b522d53374236 .
The underlying LUN's WWID is
3600a0980383146354a2b522d53374236 .
Unmount the file system /testvol02 .
sudo umount /testvol02
If required, find and remove the corresponding entry for the file
system /testvol02 from file /etc/fstab by
commenting or deleting the relevant line.
grep testvol02 /etc/fstab
Sample output:
/dev/mapper/testvg01-lv02 /testvol02 xfs defaults 0 0
Deactivate the logical volume lv02 .
sudo lvchange -an /dev/testvg01/lv02
Remove the logical volume lv02 from the volume group
testvg01 .
sudo lvremove /dev/testvg01/lv02
Sample output:
Logical volume "lv02" successfully removed
Remove the physical volume /dev/mapper/3600a0980383146354a2b522d53374236 from the volume group testvg01 .
sudo vgreduce testvg01 /dev/mapper/3600a0980383146354a2b522d53374236
Sample output:
Removed "/dev/mapper/3600a0980383146354a2b522d53374236" from volume group "testvg01"
Optional: After removing the logical volume and the physical volume,
use commands vgdisplay -v and
dmsetup ls -tree to confirm that the device is no longer in
use by the LVM. If the device is no longer in use, it doesn't appear in
the "Physical volumes" section of the vgdisplay command output,
and it's not seen associated with any volume in the dmsetup
command output.
Local file system
Detach a storage volume through local file system for RHEL7.x,
RHEL 8.x, Oracle Linux 7.x, and Oracle Linux 8.x.
The following example procedure shows how to remove a file system
( /localfs01 ) and the underlying LUN.
Caution: Make sure that any important data on your file system is no
longer in use before you perform the following steps.
Follow these steps:
Identify the underlying LUN associated with the file system
/localfs01 .
df -h|grep localfs01
Sample output:
/dev/mapper/3600a0980383146354a2b522d53374236 100G 33M 100G 1% /localfs01
The output of the df command shows that the file system
/localfs01 is associated with device
/dev/mapper/3600a0980383146354a2b522d53374236 .
Unmount the file system /localfs01 .
sudo umount /localfs01
If required, find and remove the corresponding entry for the file
system /localfs01 from file /etc/fstab by
commenting or deleting the relevant line.
grep localfs01 /etc/fstab
Sample output:
grep localfs01 /etc/fstab
/dev/mapper/3600a0980383146354a2b522d53374236 /localfs01 xfs defaults 0 0
Oracle ASM
Detach a storage volume through Oracle ASM for RHEL7.x, RHEL 8.x,
Oracle Linux 7.x, and Oracle Linux 8.x.
The following example procedure shows how to remove a disk
( DEMO_0001 ) and the associated LUN in Oracle ASM.
Follow these steps:
Identify the disk in Oracle ASM that you want to remove.
sqlplus / as sysasm
set lines 999;
col diskgroup for a15
col diskname for a15
col path for a35
select a.name DiskGroup,b.name DiskName, b.total_mb, (b.total_mb-b.free_mb) Used_MB, b.free_mb,b.path,b.header_status
from v$asm_disk b, v$asm_diskgroup a
where a.group_number (+) =b.group_number
order by b.group_number,b.name;
DISKGROUP DISKNAME TOTAL_MB USED_MB FREE_MB PATH HEADER_STATU
--------------- --------------- ---------- ---------- ---------- ----------------------------------- ------------
DATA DATA_0000 25600 5676 19924 /dev/asmdisks/DATA1 MEMBER
DEMO DEMO_0000 25600 16 25584 /dev/asmdisks/DEMO1 MEMBER
DEMO DEMO_0001 102400 51 102349 /dev/asmdisks/DEMO2 MEMBER
RECO RECO_0000 25600 3896 21704 /dev/asmdisks/RECO1 MEMBER
Sample output:
DISKGROUP DISKNAME TOTAL_MB USED_MB FREE_MB PATH HEADER_STATU
--------------- --------------- ---------- ---------- ---------- ----------------------------------- ------------
DATA DATA_0000 25600 5676 19924 /dev/asmdisks/DATA1 MEMBER
DEMO DEMO_0000 25600 16 25584 /dev/asmdisks/DEMO1 MEMBER
DEMO DEMO_0001 102400 51 102349 /dev/asmdisks/DEMO2 MEMBER
RECO RECO_0000 25600 3896 21704 /dev/asmdisks/RECO1 MEMBER
The output of the query shows that the device associated with the disk
DEMO_0001 is /dev/asmdisks/DEMO2 .
Determine the multipath device associated with the disk and its WWID.
ls -l /dev/asmdisks/DEMO2
lrwxrwxrwx 1 root root 8 Dec 29 17:52 /dev/asmdisks/DEMO2 -> ../dm-18
sudo multipath -ll|grep dm-18
3600a0980383146354a2b522d53374247 dm-18 NETAPP ,LUN C-Mode
Remove the disk from the disk group.
SQL> alter diskgroup DEMO drop disk DEMO_0001 rebalance power 5;
Diskgroup altered.
col diskgroup for a15
col diskname for a15
col path for a35
select a.name DiskGroup,b.name DiskName, b.total_mb, (b.total_mb-b.free_mb) Used_MB, b.free_mb,b.path,b.header_status
from v$asm_disk b, v$asm_diskgroup a
where a.group_number (+) =b.group_number
order by b.group_number,b.name;
DISKGROUP DISKNAME TOTAL_MB USED_MB FREE_MB PATH HEADER_STATU
--------------- --------------- ---------- ---------- ---------- ----------------------------------- ------------
0 0 0 /dev/asmdisks/DEMO2 FORMER
DATA DATA_0000 25600 5676 19924 /dev/asmdisks/DATA1 MEMBER
DEMO DEMO_0000 25600 64 25536 /dev/asmdisks/DEMO1 MEMBER
RECO RECO_0000 25600 3896 21704 /dev/asmdisks/RECO1 MEMBER
SQL> exit
(Perform this step on all nodes in the cluster.) Remove all the
references to the disk from the
/etc/udev/rules.d/99-oracle-asmdevices.rules file.
In this example, we remove lines 9 and 10 as they are associated with the
disk DEMO_0001 and the WWID of
3600a0980383146354a2b522d53374247 identified in Step 1.b of this procedure.
cat -n /etc/udev/rules.d/99-oracle-asmdevices.rules
1 # BEGIN ASM disk udev rules for /dev/mapper/3600a0980383146354a2b522d53374244
2 ACTION=="add|change", ENV{DM_UUID}=="mpath-3600a0980383146354a2b522d53374244", SYMLINK+="asmdisks/DATA1", GROUP="asmadmin", OWNER="grid", MODE="0660"
3 # END ASM disk udev rules for /dev/mapper/3600a0980383146354a2b522d53374244
4 # BEGIN ASM disk udev rules for /dev/mapper/3600a0980383146354a2b522d53374243
5 ACTION=="add|change", ENV{DM_UUID}=="mpath-3600a0980383146354a2b522d53374243", SYMLINK+="asmdisks/RECO1", GROUP="asmadmin", OWNER="grid", MODE="0660"
6 # END ASM disk udev rules for /dev/mapper/3600a0980383146354a2b522d53374243
7 # BEGIN ASM disk udev rules for /dev/mapper/3600a0980383146354a2b522d53374242
8 ACTION=="add|change", ENV{DM_UUID}=="mpath-3600a0980383146354a2b522d53374242", SYMLINK+="asmdisks/DEMO1", GROUP="asmadmin", OWNER="grid", MODE="0660"
9 # BEGIN ASM disk udev rules for /dev/mapper/3600a0980383146354a2b522d53374247
10 ACTION=="add|change", ENV{DM_UUID}=="mpath-3600a0980383146354a2b522d53374247", SYMLINK+="asmdisks/DEMO2", GROUP="asmadmin", OWNER="grid", MODE="0660"
11 # END ASM disk udev rules for /dev/mapper/3600a0980383146354a2b522d53374247
(Perform this step on all nodes in the cluster.) Apply
udev ruleset changes.
sudo udevadm control -R
Oracle Linux Virtualization Manager
Detach a storage volume through Oracle Linux Virtualization
Manager 4.4.10.7.
Removing individual Fibre Channel devices from an Oracle Linux
Virtualization Manager storage domain is not supported. The storage domain
needs to be removed before the underlying LUNs can be removed.
Caution: Ensure that there are no Oracle Linux Virtualization Manager
disks in the storage domain in use by VMs before you perform the
following steps.
The following example procedure shows how to remove LUNs with WWIDs of
3600a0980383146354a2b522d53374244 and
3600a0980383146354a2b522d53374245 that are part of the Oracle
Linux Virtualization Manager storage domain olvm-domain-02 .
In the Oracle Linux Virtualization Manager, go to
Storage > Domains .
Select storage domain olvm-domain-02 .
Click Manage Domain .
Make a note of the WWIDs of the Fibre Channel LUNs you want to remove.
In this case, the WWIDs are 3600a0980383146354a2b522d53374244
and 3600a0980383146354a2b522d53374245 .
Close the Manage Domain pane.
Put the storage domain in maintenance mode as follows:
Click the storage domain.
Select the Data Center tab.
Click Maintenance and then OK .
For more information regarding this step, see
Oracle documentation: How to safely remove a storage domain from the environment .
Click Detach and then OK .
Remove the storage domain:
Return to Storage > Domains .
Select the storage domain.
Click Remove and then OK .
Oracle VM Server
Detach a storage volume through Oracle VM Server release
3.4.6.
The following example procedure shows how to remove the LUN with the WWID
of 3600a0980383146354a2b522d53374236 .
Caution: Ensure that the disk is no longer in use by any server
within any server pool.
Follow these steps:
In the Oracle VM Manager, delete the associated physical disk. See
Oracle documentation: Delete physical disk .
In this example, the OVM console name of the physical disk with a WWID of
3600a0980383146354a2b522d53374236 is
NETAPP (10) .
From the Servers and VMs , select the physical disk.
Click Delete physical disk and then OK .
In the Google Cloud console, go to the Compute Engine > Bare Metal Solution > Servers
page.
Click the name of the server that has the storage volumes you want to detach.
In the LUNs section, click Detach Volumes .
From the Target volumes list, select the storage volume that you want
to detach. You can also select multiple storage volumes.
Optional: By default, the server reboots when you detach a storage
volume. If you don't want to reboot the server, select the
Skip reboot for the server checkbox.
Caution:
We don't recommend removing a storage volume without reboot as it can
cause the system to become unstable.
If you have automated processes running that attempt to access device
files pointing to the removed storage volume, it can lead to performance
issues that require a reboot for resolution.
Running the sosreport command or periodic Oracle data
collection scripts (which run the lvs command) can cause server
outage if SCSI rescan and device cleanup is not done on your OS immediately
after detaching the storage volume. The instructions to do this are
explained in Step 8 of this procedure.
Click Detach Volumes .
If you did not select the Skip reboot for the server option in
Step 6 , the server reboots and detaches the storage volume and its
LUNs.
(Perform this step if you skipped the reboot in Step 6 .) After detaching
the storage volume through the Google Cloud console, perform an
SCSI rescan and device cleanup on your OS.
The instructions might vary depending on your OS. If you face any issue,
refer to your OS configuration guide.
Red Hat
Oracle
SUSE
Logical Volume Manager (LVM)
This example is applicable for RHEL7.x, RHEL 8.x, Oracle
Linux 7.x, Oracle Linux 8.x, SLES 12 SP4, SLES 12 SP5, SLES 15, and
SLES 15 SP1.
Remove paths associated with the LUN.
Following is an example from the Bare Metal Solution environment:
sudo /bin/rescan-scsi-bus.sh -r
Syncing file systems
Scanning SCSI subsystem for new devices and remove devices that have disappeared
Scanning host 0 for SCSI target IDs 0 1 2 3 4 5 6 7, all LUNs
Scanning host 1 for SCSI target IDs 0 1 2 3 4 5 6 7, all LUNs
Scanning host 2 for SCSI target IDs 0 1 2 3 4 5 6 7, all LUNs
...
Scanning host 17 for all SCSI target IDs, all LUNs
0 new or changed device(s) found.
0 remapped or resized device(s) found.
4 device(s) removed.
[14:0:2:1]
[14:0:3:1]
[16:0:0:1]
[16:0:1:1]
Note: For SUSE, the command to run the
rescan-scsi-bus.sh script is as follows:
sudo /usr/bin/rescan-scsi-bus.sh -r
Reload the multipath maps.
sudo /sbin/multipath -r
Local file system
This example is applicable for RHEL7.x, RHEL 8.x, Oracle Linux
7.x, and Oracle Linux 8.x.
Remove paths associated with the LUN.
Following is an example from the Bare Metal Solution environment:
sudo /bin/rescan-scsi-bus.sh -r
Syncing file systems
Scanning SCSI subsystem for new devices and remove devices that have disappeared
Scanning host 0 for SCSI target IDs 0 1 2 3 4 5 6 7, all LUNs
Scanning host 1 for SCSI target IDs 0 1 2 3 4 5 6 7, all LUNs
Scanning host 2 for SCSI target IDs 0 1 2 3 4 5 6 7, all LUNs
...
Scanning host 17 for all SCSI target IDs, all LUNs
0 new or changed device(s) found.
0 remapped or resized device(s) found.
4 device(s) removed.
[14:0:2:1]
[14:0:3:1]
[16:0:0:1]
[16:0:1:1]
Note: For SUSE, the command to run the
rescan-scsi-bus.sh script is as follows:
sudo /usr/bin/rescan-scsi-bus.sh -r
Reload the multipath maps.
sudo /sbin/multipath -r
Oracle ASM
This example is applicable for RHEL7.x, RHEL 8.x, Oracle Linux
7.x, and Oracle Linux 8.x.
Perform these step on all nodes in the cluster.
Remove paths associated with the LUN.
Following is an example from the Bare Metal Solution environment:
sudo /bin/rescan-scsi-bus.sh -r
Syncing file systems
Scanning SCSI subsystem for new devices and remove devices that have disappeared
Scanning host 0 for SCSI target IDs 0 1 2 3 4 5 6 7, all LUNs
Scanning host 1 for SCSI target IDs 0 1 2 3 4 5 6 7, all LUNs
Scanning host 2 for SCSI target IDs 0 1 2 3 4 5 6 7, all LUNs
...
Scanning host 17 for all SCSI target IDs, all LUNs
0 new or changed device(s) found.
0 remapped or resized device(s) found.
4 device(s) removed.
[14:0:2:8]
[14:0:3:8]
[16:0:0:8]
[16:0:3:8]
Note: For SUSE, the command to run the
rescan-scsi-bus.sh script is as follows:
sudo /usr/bin/rescan-scsi-bus.sh -r
Reload the multipath maps.
sudo /sbin/multipath -r
Oracle Linux Virtualization Manager
This example is applicable for Oracle Linux Virtualization
Manager 4.4.10.7.
This example uses the remove_stale_lun.yml Ansible playbook
provided as part of the Oracle Linux Virtualization Manager installation.
The playbook uses an Ansible role that builds an inventory of KVM hosts from
the Oracle Linux Virtualization Manager and then removes the specified WWIDs
from those KVM hosts. For more information, see the
Ansible playbook .
Update the file passwords.yml with the password for the
KVM hosts in the method appropriate for your Ansible environment.
Edit the file remove_stale_lun.yml to update the
vars section with the values of data_center and
lun_wwid to match the WWID values identified in
Step 1.d of this procedure.
vars:
ansible_ssh_common_args: "-o StrictHostKeyChecking=no"
ansible_user: root
ansible_ssh_private_key_file: /etc/pki/ovirt-engine/keys/engine_id_rsa
engine_fqdn: manager.olvm.test
engine_user: admin@internal
data_center: default
lun_wwid: 3600a0980383146354a2b522d53374244 3600a0980383146354a2b522d53374245
From the Oracle Linux Virtualization Manager engine, run the
Ansible playbook.
ansible-playbook /usr/share/ansible/collections/ansible_collections/ovirt/ovirt/roles/remove_stale_lun/examples/remove_stale_lun.yml
PLAY [oVirt remove stale LUN] ***********************************************************************************************************************************************************
... [output skipped]
TASK [ovirt.ovirt.remove_stale_lun : Logout from oVirt] *********************************************************************************************************************************
skipping: [localhost]
PLAY RECAP ******************************************************************************************************************************************************************************
localhost : ok=7 changed=3 unreachable=0 failed=0 skipped=1 rescued=0 ignored=0
Once the Ansible playbook is complete, the paths associated with the
LUN are safely removed from the KVM hosts.
Oracle VM Server
This example is applicable for Oracle VM Server release
3.4.6.
Perform these step on all Oracle VM servers to which the LUN was
attached.
Remove paths associated with the LUN.
sudo /usr/bin/rescan-scsi-bus.sh -r
Syncing file systems
Scanning SCSI subsystem for new devices and remove devices that have disappeared
Scanning host 0 for SCSI target IDs 0 1 2 3 4 5 6 7, all LUNs
Scanning host 1 for SCSI target IDs 0 1 2 3 4 5 6 7, all LUNs
Scanning host 2 for SCSI target IDs 0 1 2 3
[output skipped]
Scanning host 17 for all SCSI target IDs, all LUNs
0 new or changed device(s) found.
0 remapped or resized device(s) found.
4 device(s) removed.
[14:0:2:2]
[14:0:3:2]
[16:0:2:2]
[16:0:3:2]
Reload the multipath maps.
sudo /sbin/multipath -r
Delete LUNs from a storage volume
Before deleting LUNs from a storage volume, detach the storage volume from all
the servers it is attached to. See
Detach a storage volume from a server .
To delete LUNs from a storage volume, follow these steps:
In the Google Cloud console, go to the Compute Engine > Bare Metal Solution > Volumes
page.
Click the name of the storage volume that contains the LUNs you want to
delete.
In the LUNs section, select the LUNs you want to delete.
Click Delete .
Deleting a LUN puts it in a seven day cooling-off period. The LUN is
deleted only after the cooling-off period is complete.
If you want to restore your LUN during the cooling-off period,
contact Customer Care .
If you want to skip the cooling-off period and delete the LUN
permanently, continue with the following steps:
Caution: This action
can't be reversed. You can't restore a LUN if you use the
Evict option. All the data on the evicted LUN is lost
unless you create a backup on a different storage medium.
Select the LUN for which you want to skip the cooling-off period.
Click Evict .
Click Confirm .
Delete and evict are long-running operations. To check the status, in the
Google Cloud console, click notifications Notifications .
When the delete operation completes, the LUN status changes to "Cool Off"
and when the evict operation completes, the LUN is
removed from the list of LUNs.
Once the LUN is deleted, the storage space is returned to your storage
volume for use. However, the quota is returned only when you delete or evict
the storage volume. If you delete the LUN, the quota is returned to you
after the seven day cooling-off period. However, if you evict the LUN, the
quota is returned to you once the evict operation is complete.
If you want to reattach the storage volume after deleting LUNs, see
Attach a storage volume to a server .
Delete a storage volume
You can delete multiple storage volumes at once.
Before deleting a storage volume, detach it from all the servers it is attached
to. See Detach a storage volume from a server .
To delete a storage volume, follow these steps:
In the Google Cloud console, go to the Compute Engine > Bare Metal Solution > Volumes
page.
Select the storage volume.
Click Delete .
Deleting a storage volume puts it in a seven day cooling-off period. The
storage volume is deleted only after the cooling-off period is complete.
If you want to restore your storage volume during the cooling-off period,
contact Customer Care .
If you want to skip the cooling-off period and delete the storage volume
permanently, continue with the following steps:
Caution: This action
can't be reversed. You can't restore a storage volume if you use the
Evict option. All the data on the evicted storage volume is lost
unless you create a backup on a different storage medium.
Select the volume for which you want to skip the cooling-off period.
Click Evict .
Click Confirm .
Delete and evict are long-running operations. To check the status, in the
Google Cloud console, click notifications Notifications .
When the delete operation completes, the storage volume status changes to
"Cool Off" and when the evict operation completes, the storage volume is
removed from the list of storage volumes.
Once the storage volume is deleted, the quota is returned to you after the
seven day cooling-off period. However, if you evict the storage volume, the
quota is returned to you once the evict operation is complete.
Manage boot volume snapshots
You can manage your boot volume snapshots in the following ways:
View boot volume snapshots and their details
Create a boot volume snapshot
Delete a boot volume snapshot
Restore a boot volume snapshot
View boot volume snapshots and their details
You can view the list of snapshots of a boot volume and their details, including
the following:
ID
Name
Description
Create time
Associated volume
Type
Console
Go to the
Compute Engine > Bare Metal Solution > Volumes page.
Click the volume name.
On the Volume details page, in the Snapshots section, you can
view the list of snapshots and their details.
gcloud
To list all the snapshots for a boot volume, issue the gcloud bms volumes
snapshots list command.
gcloud bms volumes snapshots list --project= PROJECT_ID --region= REGION --volume= VOLUME_NAME
To view details of a specific boot volume snapshot, issue the gcloud bms
volumes snapshots describe command.
gcloud bms volumes snapshots describe --project= PROJECT_ID --region= REGION --volume= VOLUME_NAME --snapshot= SNAPSHOT_NAME
API
To list all boot volume snapshots, enter your project ID, region, and volume
name into the following curl command. Copy the command, paste it into the
Cloud Shell prompt, and press the Enter or Return key.
curl -X GET \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "X-Goog-User-Project: PROJECT_ID " \
-H "Content-Type: application/json" \
"https://baremetalsolution.googleapis.com/v2/projects/ PROJECT_ID /locations/ REGION /volumes/ VOLUME_NAME /snapshots"
To view details of a boot volume snapshot, enter your project ID, region,
volume name, and snapshot name into the following curl command. Copy the
command, paste it into the Cloud Shell prompt, and press the
Enter or Return key.
curl -X GET \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "X-Goog-User-Project: PROJECT_ID " \
-H "Content-Type: application/json" \
"https://baremetalsolution.googleapis.com/v2/projects/ PROJECT_ID /locations/ REGION /volumes/ VOLUME_NAME /snapshots/ SNAPSHOT_NAME "
Create a boot volume snapshot
You can create snapshots for boot volumes.
Console
Go to the
Compute Engine > Bare Metal Solution > Volumes page.
Click the volume name.
On the Volume details page, in the Snapshots section, click
Create .
On the Create a new volume snapshot page:
In the Name field, enter a unique name for the snapshot.
In the Description field, enter a description for the snapshot.
Click Create .
gcloud
To create a boot volume snapshot, issue the gcloud bms volumes snapshot
command.
gcloud bms volumes snapshot --project= PROJECT_ID --region= REGION --volume= VOLUME_NAME --snapshot= SNAPSHOT_NAME --description= DESCRIPTION
API
To create a boot volume snapshot, enter your project ID, region, volume
name, snapshot name, and snapshot description into the following curl
command. Copy the command, paste it into the Cloud Shell prompt,
and press the Enter or Return key.
curl -X POST \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "X-Goog-User-Project: PROJECT_ID " \
-H "Content-Type: application/json" \
"https://baremetalsolution.googleapis.com/v2/projects/ PROJECT_ID /locations/ REGION /volumes/ VOLUME_NAME /snapshots"
-d \
'{\''name\'':
\''projects/ PROJECT_ID /locations/ REGION /volumes/ VOLUME_NAME /snapshots/ SNAPSHOT_NAME \'', \''description\'': \'' DESCRIPTION \''}' \
Delete a boot volume snapshot
You can delete boot volume snapshots.
Note: Because you might need to restore the boot volume from a snapshot taken
on a specific day for recovery purposes, we do not recommend deleting scheduled
daily snapshots.
Console
Go to the
Compute Engine > Bare Metal Solution > Volumes page.
Click the volume name.
On the Volume details page, in the Snapshots section, select the
snapshot that you want to delete.
Click Delete .
When prompted, click Confirm .
gcloud
To delete a boot volume snapshot, issue the gcloud bms volumes snapshots
delete command.
gcloud bms volumes snapshots delete --project= PROJECT_ID --region= REGION --volume= VOLUME_NAME --snapshot= SNAPSHOT_NAME
When prompted, type "Y" and press the Enter or Return key.
API
To delete a boot volume snapshot, enter your project ID, region, volume
name, and snapshot name into the following curl command. Copy the command,
paste it into the Cloud Shell prompt, and press the Enter or
Return key.
curl -X DELETE \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "X-Goog-User-Project: PROJECT_ID " \
-H "Content-Type: application/json" \
"https://baremetalsolution.googleapis.com/v2/projects/ PROJECT_ID /locations/ REGION /volumes/ VOLUME_NAME /snapshots/ SNAPSHOT_NAME "
Restore a boot volume snapshot
You can restore a boot volume from a snapshot.
Caution: Restoring a volume
from a snapshot will delete all the snapshots created after it.
Console
Go to the
Compute Engine > Bare Metal Solution > Servers page.
Stop the server attached to the volume that you want to restore. See
Operate your Bare Metal Solution server .
Wait for the shutdown to complete before moving to the next step.
Go to the
Compute Engine > Bare Metal Solution > Volumes page.
For the volume that you want to restore, click the volume name.
On the Volume details page:
For the snapshot that you want to restore, click more_vert .
Click Restore .
When prompted, click Confirm .
gcloud
To restore a boot volume snapshot, issue the gcloud bms volumes restore
command.
gcloud bms volumes restore --project= PROJECT_ID --region= REGION VOLUME_NAME --snapshot= SNAPSHOT_NAME
API
To restore a boot volume snapshot, enter your project ID, region, volume
name, and snapshot name into the following curl command. Copy the command,
paste it into the Cloud Shell prompt, and press the Enter or
Return key.
curl -X POST \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "X-Goog-User-Project: PROJECT_ID " \
-H "Content-Type: application/json" \
-H "Content-Length:0" \
"https://baremetalsolution.googleapis.com/v2/projects/ PROJECT_ID /locations/ REGION /volumes/ VOLUME_NAME /snapshots/ SNAPSHOT_NAME :restoreVolumeSnapshot"
Because restoring a boot volume takes a while to complete, you can check the
status by following the steps in View the status of a long-running operation .
Manage NFS file storage
You can manage your NFS file storage in the following ways:
View NFS volumes
Organize NFS volumes by using labels
Rename an NFS volume
Create an NFS volume
Update an NFS volume
Delete an NFS volume
View NFS volumes
After you order and provision NFS for Bare Metal Solution, you can view the
status of your NFS file storage and confirm that Google Cloud implemented
your configured settings as expected.
To view the details of your NFS volumes, follow these steps:
Console
Go to the NFS Shares page.
Go to NFS Shares
The NFS Shares page lists all your NFS volumes with the following
details:
View the available information.
Field
Description
Example
Status
Indicates the availability of an NFS volume
A green circle with a check mark indicates that the NFS volume
is provisioned.
ID
Identifier assigned to your NFS storage device that hosts your
volume.
Click the ID to view additional information about the storage
volume, including allowed clients and NFS properties.
Share the ID with Google Cloud support when
troubleshooting this resource.
at-2222222-nfs001
Name
Name of the NFS storage device that hosts your volume. Click
the name to view additional information about the storage
volume, including allowed clients and NFS properties.
Note: If you did not enter a name when you
provisioned your NFS storage device, the ID
appears in this field.
nfs-share-7
Location
Region for the NFS storage volume
asia-southeast1
Pod
Pod that contains your NFS volume. A pod is a unit of
isolation that contains your Bare Metal Solution resources.
Resources in different pods cannot be connected. A region can have
multiple pods.
The Pod column is disabled by default. To
enable it, do the following:
Click Column display options view_column .
Select the Pod checkbox.
Click OK .
If you don't want to enable the Pod column, you can
view the pod of an NFS volume by clicking the NFS volume name.
asia-southeast1-pod1
Volume
Name of the NFS storage volume. Click the name to view
additional information about the NFS storage volume, such as
snapshots.
at-2222222-nfs001-vol000
Labels
Displays any labels you added to this NFS file storage resource
You can use labels to filter the console output by copying the
text of a label and pasting it in the Filter box
just above the Status field.
environment:test
gcloud
To view the status of your NFS file storage within the
Bare Metal Solution environment, issue the gcloud bms nfs-shares
list command:
gcloud bms nfs-shares list --project= PROJECT_ID --region= REGION
Additional command options include:
--limit: Limit the output to show a specific number of devices.
--filter: Limit the output to show devices with a specific label
or other filter parameter.
The output provides details about your NFS file storage, including the
name, ID, volume, and allowed clients.
NAME: nfs-share-7
ID: at-2222222-nfs001
PROJECT: PROJECT_ID
REGION: REGION
VOLUME_NAME: at-2222222-nfs001-vol000
STATE: PROVISIONED
ALLOWED_CLIENTS: [{"allowedCidr": "192.168.1.1/32", "networkName": "at-1111111-vlan001", "shareIp": "192.168.1.240"}]
To view the status of a specific NFS file storage device, issue the
gcloud bms nfs-shares describe command. You can use either the
NFS share name or ID as the NFS_SHARE variable:
gcloud bms nfs-shares describe NFS_SHARE --project= PROJECT_ID --region= REGION
The output provides details about the allowed clients, NFS settings, the
NFS server and its state, and the storage volume.
allowedClients:
– allowDev: true
allowedClientsCidr: 192.168.1.1/32
mountPermissions: READ_WRITE
network: projects/ PROJECT_ID /locations/ REGION /networks/at-1111111-vlan001
noRootSquash: true
shareIp: 192.168.1.240
name: projects/ PROJECT_ID /locations/ REGION /nfsShares/ NFS_SHARE
nfsShareId: at-2222222-nfs001
state: PROVISIONED
volume: projects/ PROJECT_ID /locations/ REGION /volumes/at-2222222-nfs001-vol000
API
To view the status of your NFS file storage within theBare Metal Solution
environment, including allowed clients and NFS properties, enter your
project ID and region into the following curl command. Copy the command,
paste it into the Cloud Shell prompt, and press the Enter or
Return key:
curl -X GET \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "X-Goog-User-Project: PROJECT_ID " \
-H "Content-Type: application/json" \
"https://baremetalsolution.googleapis.com/v2/projects/ PROJECT_ID /locations/ REGION /nfsShares"
To view the status of a specific NFS file storage device, enter your
project ID, region, and NFS server name or ID, then issue the following command:
curl -X GET \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "X-Goog-User-Project: PROJECT_ID " \
-H "Content-Type: application/json" \
"https://baremetalsolution.googleapis.com/v2/projects/ PROJECT_ID /locations/ REGION /nfsShares/ NFS_SHARE "
Organize NFS file storage by using labels
To help organize your NFS file storage, you can use labels. Labels are key-value
pairs that you can attach to each NFS volume, then filter the NFS volumes based
on their labels. For example, you can use labels to group NFS volumes by
purpose, environment, location, department, and so on. Labels are optional.
Add or update labels for NFS volumes
You can add or update labels for the existing NFS volumes.
Console
Go to the
Compute Engine > Bare Metal Solution > NFS Shares page.
For the NFS volume that you want to label, click
more_vert .
Click edit Edit labels .
On the Labels editor page:
Click add Add label and add
the key-value pair.
To update labels, select the existing labels and modify their values.
Click Submit .
After you return to the NFS Shares page, refresh the page to view your
changes.
gcloud
To add or update labels for an NFS volume, use the gcloud bms nfs-shares update
command with the --update-labels option.
The following sample command adds the labels environment = dev and
location = branch :
gcloud bms nfs-shares update NFS_VOLUME_NAME --project= PROJECT_ID --region= REGION --update-labels environment = dev , location = branch
If you provide a new value for a label that already exists, the system updates
the existing label with the new value. If you provide a new label, the
system adds the new label to the list of labels.
API
To add or update labels for an NFS volume, enter your project ID, region, NFS volume
name, and a list of labels in the following curl command. Copy the command,
paste it into the Cloud Shell prompt, and press the Enter
or Return key.
The following sample command assigns a label of environment = test .
curl -X PATCH \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "X-Goog-User-Project: PROJECT_ID " \
-H "Content-Type: application/json" \
"https://baremetalsolution.googleapis.com/v2/projects/ PROJECT_ID /locations/ REGION /nfsShares/ NFS_VOLUME_NAME ?updateMask=labels"
-d "{
'labels' : {' environment ': ' test '}
}"
Remove labels from NFS volumes
You can remove labels from the NFS volumes.
Console
Go to the
Compute Engine > Bare Metal Solution > NFS Shares page.
For the NFS volume with labels that you want to remove, click
more_vert .
Click edit Edit labels .
On the Labels editor page:
To delete a label, click delete .
Click Submit .
After you return to the NFS Shares page, refresh the page to view your
changes.
gcloud
To remove labels from an NFS volume, use the gcloud bms nfs-shares update
command with the following options:
--remove-labels : Removes the specified label.
--clear-labels : Removes all the labels.
The following sample command removes the label department from an NFS volume:
gcloud bms nfs-shares update NFS_VOLUME_NAME --project= PROJECT_ID --region= REGION --remove-labels= department
The following sample command removes all the labels from an NFS volume:
gcloud bms nfs-shares update NFS_VOLUME_NAME --project= PROJECT_ID --region= REGION --clear-labels
API
To remove labels from an NFS volume, enter your project ID, region, and NFS volume
name in the following curl command. Provide an empty list of labels to
remove all labels, or provide a list of labels you want to keep
(omitting the labels you want to remove). Copy the command, paste it into
the Cloud Shell prompt, and press the Enter or Return key.
The following sample command removes all the labels except
environment = test .
curl -X PATCH \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "X-Goog-User-Project: PROJECT_ID " \
-H "Content-Type: application/json" \
"https://baremetalsolution.googleapis.com/v2/projects/ PROJECT_ID /locations/ REGION /nfsShares/ NFS_VOLUME_NAME ?updateMask=labels"
-d "{
'labels' : {' environment ': ' test '}
}"
If you issue the curl command without any labels or values, you
clear all the labels.
'labels' : {
}
If you issue the curl command with new values for a label, the new
value overwrites the previous value.
'labels' : {
' user ': ' production ',
' env ': ' production ',
' purpose ': ' shared_data_store '
}
Filter NFS volumes using labels
You can search your NFS volumes and filter results by using labels.
Console
Go to the
Compute Engine > Bare Metal Solution > NFS Shares page.
Click in the filter_list Filter
bar above the list of NFS volumes.
From the Properties list, select Labels .
Enter they key, value, or key-value pair for your label.
For example, to view only NFS volumes with the label env:dev , you can
enter any of the following:
Enter the key: env
Enter the value: dev
Enter the key-value pair: env:dev
To apply the label filter, click anywhere outside the filter bar.
gcloud
To filter NFS volumes by using labels, use the gcloud bms nfs-shares list
command with the --filter option.
The value of --filter option must be in the
labels. KEY = VALUE format. For example,
if you want to filter on a label with env as the key and dev as the
value, issue this command:
gcloud bms nfs-shares list --project= PROJECT_ID --region= REGION --filter labels. environment = dev
For more information about the filter syntax in the gcloud CLI,
see the
gcloud topic filters documentation .
API
To filter NFS volumes by using labels, enter your project ID and region
along with filter=labels and a key-value pair label. Copy the command,
paste it into the Cloud Shell prompt, and press the Enter or
Return key.
The following sample command limits the output to find NFS volumes with the
key-value pair label environment = test .
curl -X GET \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "X-Goog-User-Project: PROJECT_ID " \
-H "Content-Type: application/json" \
"https://baremetalsolution.googleapis.com/v2/projects/ PROJECT_ID /locations/ REGION /nfsShares"?filter=labels. environment = test
Rename an NFS volume
To rename an NFS volume, follow these steps:
Console
In the Google Cloud console, go to the
Compute Engine > Bare Metal Solution > NFS Shares page.
Click the NFS volume name.
On the NFS share details page, in the Name field, click edit Edit name .
On the Editing name page, enter a new name.
Click Save .
To view your changes, refresh the page.
gcloud
To rename an NFS volume, use the gcloud bms nfs-shares rename command.
gcloud bms nfs-shares rename NFS_VOLUME_NAME --new-name= NEW_NAME --project= PROJECT_ID --region= REGION
Replace the following:
NFS_VOLUME_NAME : Current name of the NFS volume.
NEW_NAME : New name of the NFS volume.
PROJECT_ID : Your project ID.
REGION : The location of the NFS volume.
Create an NFS volume
You can create an NFS volume with one or more allowed clients.
Note:
Networks of all allowed clients must already exist. However, they can be from a different Google Cloud CLI
project.
You cannot specify the IP address for the NFS volume of an allowed client.
It is assigned automatically during the provisioning from your services
IP address range.
Console
Go to the NFS Shares page.
Go to NFS Shares
Click Create .
In the Name field, enter a name for your NFS volume.
From the Region drop-down list, select the Google Cloud region
in which you want to create your NFS volume.
Select the storage type.
In the Size field, enter the size of the drive in GiB.
The size ranges from a minimum of 100 GiB to a maximum of 16 TiB. If you
need more than 16 TiB, create additional NFS volumes as needed.
In the Allowed clients section, add the allowed client networks:
Click Add an item .
Select Select networks from other projects in your organization
checkbox to enable selecting networks from your other projects.
From the Select an existing network drop-down list, select a
network.
Enter an IP address range permitted to access the NFS volume.
From the Mount permissions drop-down list, select the mount
permissions for
the allowed client network.
Select the Allow dev checkbox to enable the creation of devices.
Select the Allow SUID checkbox to enable SUID.
Select the No root squash checkbox to enable root squash.
We recommend that you disable root squash for new NFS volumes. By
default, an NFS volume has permission 755 and owner root(0) .
Writing files to new NFS volumes is not possible when root squash is
enabled, as all new NFS volumes are owned by the root user. Therefore,
first create an NFS volume with root squash disabled, build the
directory structure, and change permission or ownership of the NFS volume.
Then, enable the root squash on the NFS volume by removing and
re-adding the allowed client. See Update an NFS volume .
Click Done .
Click Create .
gcloud
To create an NFS volume, issue the gcloud bms nfs-shares create command.
Use the --allowed-client option to specify an allowed client. To specify
multiple allowed clients, repeat the --allowed-client option.
Enter the following values before you issue the command:
NFS_VOLUME_NAME: Name of the NFS volume.
REGION: Region of the NFS volume.
SIZE_GIB: Size of the NFS volume in GiB.
STORAGE_TYPE: Storage type of the underlying volume.
NETWORK_NAME: Name of the network to allow.
(Optional) PROJECT_ID: Project ID of the allowed client network. If you do
not provide a project ID, it will default to the project to which the NFS
volume belongs.
IP_ADDRESS_RANGE: Subnet of the IP addresses permitted to access the NFS
volume. This is usually the client network.
MOUNT_PERMISSIONS: Mount permissions for the allowed client network.
ALLOW_DEV: Allow creation of devices (yes/no).
ALLOW_SUID: Allow SUID (yes/no).
ENABLE_ROOT_SQUASH: Enable root squash (yes/no). We recommend that you
disable root squash for new NFS volumes. By default, an NFS volume has
permission 755 and owner root(0) . Writing files to new NFS volumes
is not possible when root squash is enabled, as all new NFS volumes are
owned by the root user. Therefore, first create an NFS
volume with root squash disabled, build the directory
structure, and change permission or ownership of the NFS volume. Then, enable
the root squash on the NFS volume by removing and re-adding the
allowed client. See
Update an NFS volume .
gcloud bms nfs-shares create --project= PROJECT_ID --region= REGION NFS_VOLUME_NAME \
--size-gib= SIZE_GIB --storage-type= STORAGE_TYPE \
--allowed-client=network= NETWORK_NAME ,\
network-project-id= PROJECT_ID ,cidr= IP_ADDRESS_RANGE ,\
mount-permissions= MOUNT_PERMISSIONS ,allow-dev= ALLOW_DEV ,allow-suid= ALLOW_SUID ,\
enable-root-squash= ENABLE_ROOT_SQUASH \
API
To create an NFS volume, enter the values for the variables into the
following curl command. You can use the allowedClients list to specify
the allowed clients.
Enter the following values before you issue the command:
NFS_VOLUME_NAME: Name of the NFS volume.
REGION: Region of the NFS volume.
SIZE_GIB: Size of the NFS volume in GiB.
STORAGE_TYPE: Storage type of the underlying volume.
NETWORK_NAME: Name of the network to allow.
(Optional) PROJECT_ID: Project ID of the allowed client network. If you do
not provide a project ID, it will default to the project to which the NFS
volume belongs.
IP_ADDRESS_RANGE: Subnet of the IP addresses permitted to access the NFS
volume. This is usually the client network.
MOUNT_PERMISSIONS: Mount permissions for the allowed client network.
ALLOW_DEV: Allow creation of devices (yes/no).
ALLOW_SUID: Allow SUID (yes/no).
ENABLE_ROOT_SQUASH: Enable root squash (yes/no). We recommend that you
disable root squash for new NFS volumes. By default, an NFS volume has
permission 755 and owner root(0) . Writing files to new NFS volumes
is not possible when root squash is enabled, as all new NFS volumes are
owned by the root user. Therefore, first create an NFS
volume with root squash disabled, build the directory
structure, and change permission or ownership of the NFS volume. Then, enable
the root squash on the NFS volume by removing and re-adding the
allowed client. See
Update an NFS volume .
Copy the command, paste it into the Cloud Shell
prompt, and press the Enter or Return key.
curl -X POST \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "X-Goog-User-Project: PROJECT_ID " \
-H "Content-Type: application/json" \
"https://baremetalsolution.googleapis.com/v2/projects/ PROJECT_ID /locations/ REGION /nfsShares"
-d \
'{
"name": "projects/ PROJECT_ID /locations/ REGION /nfsShares/ NFS_VOLUME_NAME ",
"labels": {
"nfsKey1": "some_value",
"key2": "another_value",
},
"requestedSizeGib": " SIZE_GIB ",
"storageType": " STORAGE_TYPE ",
"allowedClients": [
{
"network": "projects/ PROJECT_ID /locations/ REGION /networks/ NETWORK_NAME ",
"allowedClientsCidr": " IP_ADDRESS_RANGE ",
"mountPermissions": " MOUNT_PERMISSIONS ",
"allowDev": ALLOW_DEV ,
"allowSuid": ALLOW_SUID ,
"noRootSquash": ENABLE_ROOT_SQUASH ,
}
],
}'
Because creating an NFS volume takes a while to complete, you can check the
status by following the steps in View the status of a long-running operation .
Update an NFS volume
After an NFS volume has been created, you can update only its allowed clients.
Note: You cannot expand an existing NFS volume. For assistance, contact
Google Cloud Sales .
Console
Go to the NFS Shares page.
Go to NFS Shares
Click the name of the NFS volume.
To add an allowed client, do the following:
In the Allowed clients section, click Add .
On the Add allowed clients page, click Add an item .
Select Select networks from other projects in your organization
checkbox to enable selecting networks from your other projects.
From the Select an existing network drop-down list, select a
network.
Enter an IP address range permitted to access the NFS volume.
From the Mount permissions drop-down list, select the mount
permissions for the allowed client network.
Select the Allow dev checkbox to enable the creation of devices.
Select the Allow SUID checkbox to enable SUID.
Select the No root squash checkbox to enable root squash.
We recommend that you disable root squash for new NFS volumes. By
default, an NFS volume has permission 755 and owner root(0) .
Writing files to new NFS volumes is not possible when root squash is
enabled, as all new NFS volumes are owned by the root user. Therefore,
first create an NFS volume with root squash disabled, build the
directory structure, and change permission or ownership of the NFS volume.
Then, enable the root squash on the NFS volume by removing and
re-adding the allowed client. See Update an NFS volume .
Click Done .
Click Add .
To update an allowed client, do the following:
Select the allowed client network.
Click Update .
On the Update allowed clients page, click the client network to
expand its details.
Update the required fields.
Click Done .
Click Update .
gcloud
To update the list of allowed clients for an NFS volume, you can use the
following options with the gcloud bms nfs-shares update command:
--add-allowed-client : Add an allowed client. Repeat this option to add
multiple allowed clients.
--remove-allowed-client : Remove an allowed client. You need to provide
the values for NETWORK_NAME and IP_ADDRESS_RANGE with this option.
Repeat this option to remove multiple allowed clients.
--clear-allowed-client : Remove all the allowed clients.
To update an NFS volume, issue the gcloud bms nfs-shares update command
with appropriate options. For example:
gcloud bms nfs-shares update --project= PROJECT_ID --region= REGION NFS_VOLUME_NAME --remove-allowed-client=network= NETWORK_NAME ,network-project-id= PROJECT_ID ,cidr= IP_ADDRESS_RANGE
To update the attributes of an allowed client, remove it using the
--remove-allowed-client option, and then add it again with updated
attributes using the --add-allowed-client option.
API
To update an NFS volume, enter the values for the variables into the
following curl command. For a full list of variables, see Create an NFS
volume . Copy the
command, paste it into the Cloud Shell
prompt, and press the Enter or Return key.
curl -X PATCH \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "X-Goog-User-Project: PROJECT_ID " \
-H "Content-Type: application/json" \
"https://baremetalsolution.googleapis.com/v2/projects/ PROJECT_ID /locations/ REGION /nfsShares/ NFS_VOLUME_NAME ?updateMask=allowed_clients%2Clabels"
-d \
'{
"name": "projects/ PROJECT_ID /locations/ REGION /nfsShares/ NFS_VOLUME_NAME ",
"labels": {
"newKey": "newVal",
},
"allowedClients": [
{
"network": "projects/ PROJECT_ID /locations/ REGION /networks/ NFS_VOLUME_NAME ",
"allowedClientsCidr": " IP_ADDRESS_RANGE ",
"mountPermissions": " MOUNT_PERMISSIONS ",
"allowDev": ALLOW_DEV ,
"allowSuid": ALLOW_SUID ,
"noRootSquash": ENABLE_ROOT_SQUASH ,
}
],
}'
Because updating an NFS volume takes a while to complete, you can check the
status by following the steps in View the status of a long-running operation .
Delete an NFS volume
Deleting an NFS volume automatically triggers a cooling-off period of seven days
during which time Google Cloud removes the volume from use.
Console
Go to the NFS Shares page.
Go to NFS Shares
Select the NFS volume.
Click Delete .
Click Confirm .
gcloud
To delete an NFS volume, issue the gcloud bms nfs-shares delete command.
gcloud bms nfs-shares delete --project= PROJECT_ID --region= REGION NFS_VOLUME_NAME
API
To delete an NFS volume, enter your project ID, region, and NFS volume name
into the following curl command. Copy the command, paste it into the
Cloud Shell prompt, and press the Enter or Return key.
curl -X DELETE \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "X-Goog-User-Project: PROJECT_ID " \
-H "Content-Type: application/json" \
"https://baremetalsolution.googleapis.com/v2/projects/ PROJECT_ID /locations/ REGION /nfsShares/ NFS_VOLUME_NAME "
Because deleting an NFS volume takes a while to complete, you can check the
status by following the steps in View the status of a long-running operation .
View the status of a long-running operation
Some gcloud or API commands, such as a server reset, might take a long
time to complete. A command that produces a long-running operation also
generates output that contains an operation ID. You can use the operation ID to
check the status of the long-running operation.
In the name field of the output, you can find the operation ID located after
the operations
directory. For example, the following output of the reset API command
displays the operation ID as eb0056e2-b6f6-4792-8255-59cd79d5c686 .
{
"name": "projects/ PROJECT_ID /locations/ REGION /operations/eb0056e2-b6f6-4792-8255-59cd79d5c686",
"done": true
}
To check the status of a long-running operation, use the following options:
gcloud
To view the status of a long-running operation, use the gcloud
bms operations describe command.
gcloud bms operations describe --project= PROJECT_ID --region= REGION OPERATION_ID
API
Open a Cloud Shell terminal window in your
Google Cloud console.
To view the status of a long-running operation in your Bare Metal Solution
environment, enter your project ID, region, and the operation ID into the
following curl command. Copy the command, paste it into the
Cloud Shell prompt, and press the Enter or Return key:
curl -X GET \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "X-Goog-User-Project: PROJECT_ID " \
-H "Content-Type: application/json" \
"https://baremetalsolution.googleapis.com/v2/projects/ PROJECT_ID /locations/ REGION /operations/ OPERATION_ID "
When the operation completes, the done field appears as
true in the output.
{
"name": "operations/ OPERATION_ID ",
"done": true
}
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
