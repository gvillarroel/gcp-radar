---
title: "Exploring helper scripts \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/deployment-manager/docs/step-by-step-guide/learn-helper-scripts
knowledge_key: corpus
source_id: site-docs-reference-required-7
source_type: site
entrypoint: https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-basic-template
source_metadata:
  url: https://docs.cloud.google.com/deployment-manager/docs/step-by-step-guide/learn-helper-scripts
  title: "Exploring helper scripts \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\
    \ Documentation"
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
Exploring helper scripts
Stay organized with collections
Save and categorize content based on your preferences.
Helper scripts , or template modules , are helper files that can make your
templates more efficient by performing specific functions. For example, you can
use helper scripts to interpret resource metadata, create files, and launch
services.
You will now explore a Python helper script that names a virtual machine, given
a prefix and a suffix.
Before you begin
If you want to use the command-line examples in this guide, install the `gcloud` command-line tool .
If you want to use the API examples in this guide, set up API access .
Opening the helper script
The basic helper script in this example generates the name for a virtual machine
(VM). To view the script, run these commands:
cd deploymentmanager-samples/examples/v2/step_by_step_guide/create_a_helper_script
nano common.py # use your preferred text editor
The GenerateMachineName() function takes a prefix and suffix, and generates a
name in the format prefix-suffix :
"""Generates name of a VM."""
def GenerateMachineName ( prefix , suffix ):
return prefix + "-" + suffix
Using the helper script in the template
To use common.py in vm-template.py , several changes must be made to the
template.
To view the changes, open vm-template.py :
nano vm-template.py
The template contains code comments that highlight the changes.
Note that the template imports common.py at the top of the file.
In the resources section, the name fields for the VMs now call
GenerateMachineName() .
"""Creates the virtual machine."""
# `common.py` is imported below.
import common
COMPUTE_URL_BASE = 'https://www.googleapis.com/compute/v1/'
def GenerateConfig ( context ):
"""Generates configuration of a VM."""
resources = [{
'name' : common . GenerateMachineName ( 'myfrontend' , 'prod' ),
'type' : 'compute.v1.instance' ,
'properties' : {
'zone' : 'us-central1-f' ,
'machineType' : COMPUTE_URL_BASE + 'projects/' + context . env [ 'project' ]
+ '/zones/us-central1-f/machineTypes/f1-micro' ,
'disks' : [{
'deviceName' : 'boot' ,
'type' : 'PERSISTENT' ,
'boot' : True ,
'autoDelete' : True ,
'initializeParams' : {
'sourceImage' : COMPUTE_URL_BASE + 'projects/'
'debian-cloud/global/images/family/debian-11' }
}],
'networkInterfaces' : [{
'network' : COMPUTE_URL_BASE + 'projects/' + context . env [ 'project' ]
+ '/global/networks/default' ,
'accessConfigs' : [{
'name' : 'External NAT' ,
'type' : 'ONE_TO_ONE_NAT'
}]
}]
}
}]
return { 'resources' : resources }
Viewing the changes to the configuration
To view the updated configuration, open two-vms.yaml :
nano two-vms.yaml
Note that the helper script common.py must be imported in the configuration
as well.
Deploy your configuration:
gcloud deployment-manager deployments create deployment-with-helper-script --config two-vms.yaml
To view the deployment, including the resources with the generated names, run:
gcloud deployment-manager deployments describe deployment-with-helper-script
Deleting your deployment
We recommend that you delete the deployment to avoid charges. You don't need
this deployment for the next step. Run the following command to delete the
deployment:
gcloud deployment-manager deployments delete deployment-with-helper-script
Looking ahead: updating deployments
Next, learn to add, delete, and change the properties of resources in a
deployment as your app evolves.
Previous
arrow_back
Understanding template properties and using environment variables
Next
Updating deployments
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
