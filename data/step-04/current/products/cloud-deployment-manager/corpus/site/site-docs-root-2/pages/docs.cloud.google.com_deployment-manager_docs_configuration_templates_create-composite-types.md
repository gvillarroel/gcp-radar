---
title: "Adding a template as a composite type \_|\_ Cloud Deployment Manager \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-composite-types
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/deployment-manager/docs/fundamentals
source_metadata:
  url: https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-composite-types
  title: "Adding a template as a composite type \_|\_ Cloud Deployment Manager \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Deployment Manager will reach end of support on March 31, 2026 . If you currently use Deployment Manager, please migrate to Infrastructure Manager or an alternative deployment technology by March 31, 2026 to ensure your services continue without interruption.
For more information on the deprecation and shutdown, see Deployment Manager deprecation .
Home
Documentation
Infrastructure as code
Cloud Deployment Manager
Guides
Send feedback
Adding a template as a composite type
Stay organized with collections
Save and categorize content based on your preferences.
Beta
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Warning: Composite types are
deprecated . On
February 22, 2022 , you won't be able to create deployments, or update
existing deployments, that use composite types.
This page describes how to create a composite type with Deployment Manager.
After creating a composite type, you can call that type in your configuration
and create deployments.
A composite type is one or more templates configured to work together that have been
added permanently to Deployment Manager. Once added, you can use a composite type
like you would use a Google-owned type. To learn more about Types, read the
Types Overview .
For example, you might create a set of templates that deploy a network load
balanced managed instance group. You add those templates as a composite type to
Deployment Manager and can then use the template in future configurations as you
would use other types.
You might also be interested in
Sharing Types Across Projects .
Before you begin
If you want to use the command-line examples in this guide, install the `gcloud` command-line tool .
If you want to use the API examples in this guide, set up API access .
Use the v2beta API for
the API examples in this guide.
Components of a composite type
To create a composite type, you must have a top-level Jinja or Python template
and optionally, a set of supporting files that eventually resolve to base types.
Composite types can be made up of resources that are themselves other composite
types. Deployment Manager will recursively expand these types during deployment.
A composite type is made up of:
A top-level template : The top-level
Jinja or Python template
executed during expansion when the type is called.
A schema : The JSON Schema file which
describes information about the top-level template and any defined sub-imports.
Imported files : Any additional files necessary for execution, such as
helper files ,
sub-templates ,
and relevant schemas for the sub-templates, if applicable. This is optional,
however. Your composite type can also just contain a single top-level template.
Creating a composite type
You can create a composite type by registering the top-level template of
a configuration and its associated imports and schema. Create a composite type
using either gcloud or the API.
You might also be interested in the
example describing how to create and call a composite type .
gcloud
You must be in the directory where you have stored the top-level template
and subtemplates that are part of this composite type, in order to
run this command.
Using the gcloud CLI, make a types create request, and specify the
top-level template and the desired type name to call this composite type.
Run this command in the local directory where you have your template files.
$ gcloud beta deployment - manager types create [ TYPE_NAME ] --template=[TOP_LEVEL_TEMPLATE]
where:
[TYPE_NAME] is the name you want to call this type
[TOP_LEVEL_TEMPLATE] is the relative path to the top-level template
describing this type.
API
In the API, make a POST request that contains the composite and name
fields. In the composite field, define:
The top-level schema
The contents of your imported templates
The contents of your top-level template
The API request body has the following structure:
POST https : // www . googleapis . com / deploymentmanager / v2beta / projects /[ PROJECT_ID ]/ global / compositeTypes
{
"composite" : {
"files" : {
"schema" : "[CONTENTS_OF_SCHEMA]" ,
"imports" : [
{
"name": "[TEMPLATE_FILE ] ",
" content ": " [ CONTENTS_OF_TEMPLATE_FILE ] "
},
{
" name ": " [ ANOTHER_TEMPLATE_IF_NECESSARY ] ",
" content ": " [ CONTENTS_OF_TEMPLATES ] "
}
],
" template ": " [ TOP-LEVEL_TEMPLATE_CONTENTS ] ",
" templateFileType ": " [ FILE_TYPE ] "
}
},
" name ": " [ TYPE_NAME ] "
}
For an example on how to construct these requests, see
Creating an autoscaled managed instance group composite type .
For more information, see the documentation for the
insert method.
Deploying a composite type
Types are a per-project resource and are accessible according to the
permissions described on the
Access Control documentation. That is:
Project editors and viewers, and type editors can create and use types
available to that project.
Type viewers can get a list of types and use types available to that project.
You can also add another project as a type viewer so they can access your types.
Read Sharing Types Across Projects .
Once you have registered a composite type, you can deploy that type in the same
way you would call Google-managed types:
types : [ PROJECT_ID ]/ composite : [ TYPE_NAME ]
For example:
resources :
- name : my example - resource
type : example - project / composite : autoscaled - igm
properties :
...
Deploying a composite type directly with the command-line tool
Deployment Manager offers the ability to deploy a composite type directly with
the Google Cloud CLI. Instead of creating a top-level configuration
file, the gcloud CLI will automatically generate a top-level configuration
for you.
For example, the following command deploys a composite type called autoscaled-igm :
gcloud deployment - manager deployments create my - igm \
-- composite - type example - project / composite : autoscaled - igm
You can also set properties of your composite type using the --properties
flag:
gcloud deployment - manager deployments create my - igm \
-- composite - type example - project / composite : autoscaled - igm \
-- properties zone : us - central1 - a
Keep in mind that:
All values are parsed as YAML values. For example, version: 3 is passed in
as an integer. If you want to specify it as a string, put escaped single
quotes around the value, version: \'3\' .
Boolean values are case insensitive, so TRUE , true , and True are treated
the same.
You must pass in all required properties defined by the composite type. You cannot
provide just a subset of the properties. If certain properties have default
values, you can omit the property from the command-line.
To specify multiple properties, provide comma-separated key:value pairs. It does
not matter in what order you specify the pairs. For example:
gcloud deployment-manager deployments create my-igm \
--composite-type example-project/composite:autoscaled-igm \
--properties zone:us-central1-a,machineType:n1-standard-1,image:debian-8
After running this command, Deployment Manager creates a deployment using the
composite type you provided. You can confirm that the deployment has been created
using the Google Cloud console or the gcloud CLI. For information on viewing a
deployment, read
Viewing a manifest .
Example: Creating a composite type
Deployment Manager offers many example configurations from the
Deployment Manager GitHub repository
that you could use as composite types. For this example, you will add a
composite type that deploys a load balanced high-availability service to
multiple zones in a single region. For more information, see the
full example .
In this example, the top-level configuration file is the ha-service.py file. All
sub-templates are imported in the schema files.
Download
the Python and schema files from the GitHub directory. Omit any files
in a subdirectory and any diagram files.
In the local directory where you downloaded all the files, run the following
command to create a new composite type called ha-service-example :
gcloud beta deployment - manager types create ha - service - example -- template = ha - service . py
Get a list of types to confirm that the type was successfully created:
gcloud beta deployment - manager types list -- provider composite
Describe your new type:
gcloud beta deployment - manager types describe ha - service - example -- provider composite
Create a new configuration that deploys your type. Replace [PROJECT_ID]
with your project ID:
resources :
- name : ha - service - example
type : [ PROJECT_ID ]/ composite : ha - service - example
properties :
dockerImage : gcr . io / deployment - manager - examples / nodejsservicestatic
zones :
- us - central1 - b
- us - central1 - a
Save the configuration as example-config.yaml . Notice that that you did
not have to import any templates in your configuration.
Deploy your new composite type:
gcloud deployment-manager deployments create ha-service-deployment --config example-config.yaml
The API returns with a list of resources created from the type:
Waiting for create [operation-1488254932422-5498f5a950d71-2bd3b8c8-b13ddab5]...done.
Create operation operation-1488254932422-5498f5a950d71-2bd3b8c8-b13ddab5 completed successfully.
NAME TYPE STATE ERRORS INTENT
ha-service-deployment-lb-fr compute.v1.forwardingRule COMPLETED []
ha-service-deployment-lb-hc compute.v1.httpHealthCheck COMPLETED []
ha-service-deployment-lb-tp compute.v1.targetPool COMPLETED []
ha-service-deployment-service-us-central1-a-as compute.v1.autoscaler COMPLETED []
ha-service-deployment-service-us-central1-a-igm compute.v1.instanceGroupManager COMPLETED []
ha-service-deployment-service-us-central1-a-it compute.v1.instanceTemplate COMPLETED []
ha-service-deployment-service-us-central1-b-as compute.v1.autoscaler COMPLETED []
ha-service-deployment-service-us-central1-b-igm compute.v1.instanceGroupManager COMPLETED []
ha-service-deployment-service-us-central1-b-it compute.v1.instanceTemplate COMPLETED []
Congratulations, you created your first composite type!
What's next
Share types with other projects .
Delete a type .
Create a configuration .
Create a deployment .
Create a base type using a type provider .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
