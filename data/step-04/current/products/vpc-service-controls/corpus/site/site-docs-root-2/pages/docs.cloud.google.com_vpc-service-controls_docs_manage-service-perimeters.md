---
title: "Manage service perimeters \_|\_ VPC Service Controls \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vpc-service-controls/docs/manage-service-perimeters
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/vpc-service-controls/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/vpc-service-controls/docs/manage-service-perimeters
  title: "Manage service perimeters \_|\_ VPC Service Controls \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
VPC Service Controls
Guides
Send feedback
Manage service perimeters
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how you can manage service perimeters in
VPC Service Controls. For details on creating new service perimeters, see
Creating service perimeters .
This page includes the following sections:
Before you begin
List and describe service perimeters
List service perimeters (formatted)
Updating a service perimeter
Adding an access level to an existing perimeter
Deleting a perimeter
Limit access to services inside a perimeter with VPC accessible services
Before you begin
Read Overview of VPC Service Controls .
Read Service perimeter configuration .
Set your default access policy for using the gcloud command-line tool.
-or-
Get the name of your policy. The policy name is required
for commands using the gcloud command-line tool and making API calls. If you set a default
access policy, you do not need to specify the policy for the gcloud command-line tool.
List and describe service perimeters
List all service perimeters in an organization:
Console
In the Google Cloud console navigation menu, click Security , and then
click VPC Service Controls .
Go to the VPC Service Controls page
On the VPC Service Controls page, in the table, click the name of
the service perimeter that you want to view.
gcloud
To list your organization's service perimeters, use the list command :
gcloud access-context-manager perimeters list
You should see a list of the perimeters for your organization. For example:
NAME TITLE ETAG
ProdPerimeter Production Perimeter abcdefg123456789
To view details about a service perimeter, use the describe command :
gcloud access-context-manager perimeters \
describe PERIMETER_ID
Replace the following:
PERIMETER_ID is the ID of the service perimeter that you
want to obtain details about.
You should see the details about the perimeter. For example:
etag: abcdefg123456789
name: accessPolicies/626111171578/servicePerimeters/ProdPerimeter
status:
accessLevels:
- accessPolicies/626111171578/accessLevels/corpAccess
resources:
- projects/111584792408
restrictedServices:
- bigquery.googleapis.com
- storage.googleapis.com
title: Production Perimeter
List service perimeters (formatted)
Using the gcloud command-line tool, you can obtain a list of your service perimeters in YAML or
JSON format.
To get a formatted list of perimeters, use the list command :
gcloud access-context-manager perimeters list \
--format = FORMAT
Replace the following:
FORMAT is one of the following values:
list (YAML format)
json (JSON format)
The following output is an example list in YAML format:
- etag : abcdefg123456789
name : accessPolicies/165717541651/servicePerimeters/On_Prem
status : { 'resources' : [ 'projects/167410821371' ], 'restrictedServices' : [ 'bigquery.googleapis.com' , 'storage.googleapis.com' ]}
title : On Prem
- etag : hijklmn987654321
name : accessPolicies/165717541651/servicePerimeters/Private
spec : { 'resources' : [ 'projects/136109111311' ], 'restrictedServices' : [ 'bigquery.googleapis.com' , 'storage.googleapis.com' , 'logging.googleapis.com' ]}
status : { 'resources' : [ 'projects/136109111311' , 'projects/401921913171' ], 'restrictedServices' : [ 'bigquery.googleapis.com' ]}
title : Private
useExplicitDryRunSpec : True
- etag : pqrstuv123456789
name : accessPolicies/165717541651/servicePerimeters/OnpremBridge
perimeterType : PERIMETER_TYPE_BRIDGE
status : { 'resources' : [ 'projects/167410821371' ]}
title : OnpremBridge
The following output is an example list in JSON format:
[
{
"etag" : "abcdefg123456789" ,
"name" : "accessPolicies/165717541651/servicePerimeters/On_Prem" ,
"status" : {
"resources" : [
"projects/167410821371"
],
"restrictedServices" : [
"bigquery.googleapis.com" ,
"storage.googleapis.com"
]
},
"title" : "On Prem"
},
{
"etag" : "hijklmn987654321" ,
"name" : "accessPolicies/165717541651/servicePerimeters/Private" ,
"spec" : {
"resources" : [
"projects/136109111311"
],
"restrictedServices" : [
"bigquery.googleapis.com" ,
"storage.googleapis.com" ,
"logging.googleapis.com"
]
},
"status" : {
"resources" : [
"projects/136109111311" ,
"projects/401921913171"
],
"restrictedServices" : [
"bigquery.googleapis.com"
]
},
"title" : "Private" ,
"useExplicitDryRunSpec" : true
},
{
"etag" : "pqrstuv123456789" ,
"name" : "accessPolicies/165717541651/servicePerimeters/OnpremBridge" ,
"perimeterType" : "PERIMETER_TYPE_BRIDGE" ,
"status" : {
"resources" : [
"projects/167410821371"
]
},
"title" : "OnpremBridge"
}
]
Update a service perimeter
This section describes how to update individual service perimeters. To update
all of your organization's service perimeters in one operation, see
Making bulk changes to service perimeters .
You can perform the following tasks to update a service perimeter:
Add new Google Cloud projects or remove projects from a
service perimeter.
Change the list of restricted Google Cloud services. You can also change
the title and description for a service perimeter.
Enable, add, remove, or disable VPC accessible services .
Update the ingress and egress policies .
After you update a service perimeter, it can take up to 30 minutes for the
changes to propagate and take effect. During this time, the perimeter might block
requests with the following error message: Error 403: Request is prohibited by organization's policy.
Console
In the Google Cloud console navigation menu, click Security , and then
click VPC Service Controls .
Go to the VPC Service Controls page
On the VPC Service Controls page, in the table, click the name of
the service perimeter that you want to modify.
On the Service perimeter details page, click Edit .
On the Edit service perimeter page, update the service perimeter.
Click Save .
gcloud
To add new resources to a perimeter, use the update command and specify the
resources to add:
gcloud access-context-manager perimeters update PERIMETER_ID \
--add-resources = RESOURCES
Replace the following:
PERIMETER_ID is the ID of the service perimeter that you
want to obtain details about.
RESOURCES is a comma-separated list of one or more project
numbers or VPC network names. For example: projects/12345 or
//compute.googleapis.com/projects/my-project/global/networks/vpc1 .
Only projects and VPC networks are allowed. Project format: projects/ project_number .
VPC format: //compute.googleapis.com/projects/ project-id /global/networks/ network_name .
To update the list of restricted services, use the update command and
specify the services to add as a comma-delimited list:
gcloud access-context-manager perimeters update PERIMETER_ID \
--add-restricted-services = SERVICES
Replace the following:
PERIMETER_ID is the ID of the service perimeter that you
want to obtain details about.
SERVICES is a comma-delimited list of one or more services.
For example: storage.googleapis.com or
storage.googleapis.com,bigquery.googleapis.com .
Add an access level to an existing perimeter
Once you have
created an access level , you
can apply it to a service perimeter to control access.
After you update a service perimeter, it can take up to 30 minutes for the
changes to propagate and take effect. During this time, the perimeter might block
requests with the following error message: Error 403: Request is prohibited by organization's policy.
Console
In the Google Cloud console navigation menu, click Security , and then
click VPC Service Controls .
Go to the VPC Service Controls page
On the VPC Service Controls page, in the table, click the name of
the service perimeter that you want to modify.
On the Service perimeter details page, click Edit .
On the Edit service perimeter page, click Access levels .
Click Add access levels .
In the Add access levels pane, select the checkboxes corresponding to the access levels that you want
to apply to the service perimeter.
Click Add selected access levels .
Click Save .
gcloud
To add an access level to an existing service perimeter, use the
update command :
gcloud access-context-manager perimeters update PERIMETER_ID \
--add-access-levels = LEVEL_NAME
Replace the following:
PERIMETER_ID is the ID of your service perimeter.
LEVEL_NAME is the name of the access level that you want to
add to the perimeter.
For more information about using access levels with a perimeter, see Allow
access to protected resources from outside a
perimeter .
Delete a service perimeter
When you delete a service perimeter, the security controls associated with the
perimeter no longer apply to the associated Google Cloud
projects. There isn't any other impact to the member Google Cloud projects
or associated resources.
Console
In the Google Cloud console navigation menu, click Security , and then
click VPC Service Controls .
Go to the VPC Service Controls page
On the VPC Service Controls page, in the table row corresponding to the
perimeter that you want to delete, click
delete .
gcloud
To delete a service perimeter, use the delete command :
gcloud access-context-manager perimeters delete PERIMETER_ID
Replace the following:
PERIMETER_ID is the ID of your service perimeter.
Limit access to services inside a perimeter with VPC accessible services
This section describes how to enable, add, remove, and disable VPC accessible
services.
You can use the VPC accessible services feature to limit the set of services
that are accessible from network endpoints inside your service perimeter.
You can add VPC accessible services to service perimeters but not to
perimeter bridges.
To learn more about the VPC accessible services feature, read about
VPC accessible services .
Enable VPC accessible services
To enable VPC accessible services for your service perimeter, use the
update command :
gcloud access-context-manager perimeters update PERIMETER_ID \
--enable-vpc-accessible-services \
--add-vpc-allowed-services = SERVICES
Replace the following:
PERIMETER_ID is the ID of your service perimeter.
SERVICES is a comma-separated list of one or more services
that you want to allow networks inside your perimeter to access.
Access to any services that are not included in this list are
prevented.
To quickly include the services protected by the perimeter, add
RESTRICTED-SERVICES to the list for SERVICES . You can include
other services in addition to RESTRICTED-SERVICES .
For example, to ensure that the VPC networks in your perimeter have access only
to the Logging and Cloud Storage services, use the following command:
gcloud access-context-manager perimeters update example_perimeter \
--enable-vpc-accessible-services \
--add-vpc-allowed-services = RESTRICTED-SERVICES,logging.googleapis.com,storage.googleapis.com \
--policy = 11271009391
Add a service to the VPC accessible services
To add additional services to the VPC accessible services for your
perimeter, use the update command :
gcloud access-context-manager perimeters update PERIMETER_ID \
--add-vpc-allowed-services = SERVICES
Replace the following:
PERIMETER_ID is the ID of your service perimeter.
SERVICES is a comma-separated list of one or more services
that you want to allow networks inside your perimeter to access.
To quickly include the services protected by the perimeter, add
RESTRICTED-SERVICES to the list for SERVICES . You can include
separate services in addition to RESTRICTED-SERVICES .
For example, if you enable VPC accessible services and require that the VPC
networks in your perimeter have access to the Pub/Sub service, use
the following command:
gcloud access-context-manager perimeters update example_perimeter \
--add-vpc-allowed-services = RESTRICTED-SERVICES,pubsub.googleapis.com \
--policy = 11271009391
Remove a service from the VPC accessible services
To remove services from the VPC accessible services for your service perimeter,
use the update command :
gcloud access-context-manager perimeters update PERIMETER_ID \
--remove-vpc-allowed-services = SERVICES
Replace the following:
PERIMETER_ID is the ID of your service perimeter.
SERVICES is a comma-separated list of one or more services
that you want to remove from the list of services that networks inside
your service perimeter are permitted to access.
For example, if you enable VPC accessible services and you no longer want the VPC
networks in your perimeter to have access to the Cloud Storage service,
use the following command:
gcloud access-context-manager perimeters update example_perimeter \
--remove-vpc-allowed-services = storage.googleapis.com \
--policy = 11271009391
Disable VPC accessible services
To disable VPC service restrictions for your service perimeter, use the
update command :
gcloud access-context-manager perimeters update PERIMETER_ID \
--no-enable-vpc-accessible-services \
--clear-vpc-allowed-services
Replace the following:
PERIMETER_ID is the ID of your service perimeter.
For example, to disable VPC service restrictions for example_perimeter ,
use the following command:
gcloud access-context-manager perimeters update example_perimeter \
--no-enable-vpc-accessible-services \
--clear-vpc-allowed-services \
--policy = 11271009391
VPC accessible services and the Access Context Manager API
You can also use the Access Context Manager API to manage VPC accessible services.
When you create or modify a service perimeter, use the
ServicePerimeterConfig object in the response body to
configure your VPC accessible services.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
