---
title: "Updating a deployment \_|\_ Cloud Deployment Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/deployment-manager/docs/step-by-step-guide/updating-a-deployment
knowledge_key: corpus
source_id: site-docs-reference-required-7
source_type: site
entrypoint: https://docs.cloud.google.com/deployment-manager/docs/configuration/templates/create-basic-template
source_metadata:
  url: https://docs.cloud.google.com/deployment-manager/docs/step-by-step-guide/updating-a-deployment
  title: "Updating a deployment \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\
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
Updating a deployment
Stay organized with collections
Save and categorize content based on your preferences.
After you have a deployment, you can update it as your app evolves. You can use
Deployment Manager to update a deployment by:
Adding or removing resources to the deployment
Updating some properties of existing resources in your deployment
Deployment Manager uses the underlying APIs of Google Cloud services
to manage resources in your deployment. Deployment Manager can update
existing resources if there is an update or patch method in the
corresponding API.
Deploy the original configuration
In this step, deploy the configuration that you will update later. Navigate to
the folder in the GitHub repository, and deploy the configuration:
cd deploymentmanager-samples/examples/v2/step_by_step_guide/step8_metadata_and_startup_scripts/python
gcloud deployment-manager deployments create deployment-to-update --config config-with-many-templates.yaml
The configuration deploys two virtual machines (VMs) that run a startup script.
The VM template is:
# Copyright 2016 Google Inc. All rights reserved.
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
"""Creates the virtual machine with environment variables and startup script."""
COMPUTE_URL_BASE = 'https://www.googleapis.com/compute/v1/'
def GenerateConfig ( context ):
"""Creates the virtual machine."""
resources = [{
'name' : context . env [ 'name' ],
'type' : 'compute.v1.instance' ,
'properties' : {
'zone' : context . properties [ 'zone' ],
'machineType' : '' . join ([ COMPUTE_URL_BASE , 'projects/' ,
context . env [ 'project' ], '/zones/' ,
context . properties [ 'zone' ], '/machineTypes/' ,
context . properties [ 'machineType' ]]),
'disks' : [{
'deviceName' : 'boot' ,
'type' : 'PERSISTENT' ,
'boot' : True ,
'autoDelete' : True ,
'initializeParams' : {
'sourceImage' : '' . join ([ COMPUTE_URL_BASE , 'projects/' ,
'debian-cloud/global/' ,
'images/family/debian-11' ])
}
}],
'networkInterfaces' : [{
'network' : '$(ref.' + context . properties [ 'network' ]
+ '.selfLink)' ,
'accessConfigs' : [{
'name' : 'External NAT' ,
'type' : 'ONE_TO_ONE_NAT'
}]
}],
'metadata' : {
'items' : [{
'key' : 'startup-script' ,
'value' : '' . join ([ '#!/bin/bash \n ' ,
'python -m SimpleHTTPServer 80' ])
}]
}
}
}]
return { 'resources' : resources }
Open the updated template
Now, open the updated template:
cd deploymentmanager-samples/examples/v2/step_by_step_guide/step9_update_a_deployment/python
nano vm-template.py
In the updated template, in the metadata section, the VM's startup script
has been changed:
# Copyright 2016 Google Inc. All rights reserved.
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
"""Creates the virtual machine with environment variables and startup script."""
COMPUTE_URL_BASE = 'https://www.googleapis.com/compute/v1/'
def GenerateConfig ( context ):
"""Creates the virtual machine."""
resources = [{
'name' : context . env [ 'name' ],
'type' : 'compute.v1.instance' ,
'properties' : {
'zone' : context . properties [ 'zone' ],
'machineType' : '' . join ([ COMPUTE_URL_BASE , 'projects/' ,
context . env [ 'project' ], '/zones/' ,
context . properties [ 'zone' ], '/machineTypes/' ,
context . properties [ 'machineType' ]]),
'disks' : [{
'deviceName' : 'boot' ,
'type' : 'PERSISTENT' ,
'boot' : True ,
'autoDelete' : True ,
'initializeParams' : {
'sourceImage' : '' . join ([ COMPUTE_URL_BASE , 'projects/' ,
'debian-cloud/global/' ,
'images/family/debian-11' ])
}
}],
'networkInterfaces' : [{
'network' : '$(ref.' + context . properties [ 'network' ]
+ '.selfLink)' ,
'accessConfigs' : [{
'name' : 'External NAT' ,
'type' : 'ONE_TO_ONE_NAT'
}]
}],
'metadata' : {
'items' : [{
'key' : 'startup-script' ,
'value' : '' . join ([ '#!/bin/bash \n ' ,
'INSTANCE=$(curl http://metadata.google.' ,
'internal/computeMetadata/v1/instance/' ,
'hostname -H "Metadata-Flavor: Google") \n ' ,
'echo "<html><header><title>Hello from ' ,
'Deployment Manager!</title></header>' ,
'<body><h2>Hello from $INSTANCE</h2><p>' ,
'Deployment Manager bids you good day!</p>' ,
'</body></html>" > index.html \n ' ,
'python -m SimpleHTTPServer 80 \n ' ])
}]
}
}
}]
return { 'resources' : resources }
You will use this updated template to change the deployment you created.
Preview the update
To preview the updated deployment, run the update command with a --preview
flag:
gcloud deployment-manager deployments update deployment-to-update --config config-with-many-templates.yaml --preview
Commit the update
To commit the update, run:
gcloud deployment-manager deployments update deployment-to-update
Verify the update
To check if the update worked, you must first restart the instances to use
the new startup script. Restart the-first-vm :
gcloud compute instances reset the-first-vm
The instance might take some time to start back up. Wait a couple minutes before
confirming the change.
Confirm the new startup script
Get the external IP of the-first-vm :
gcloud compute instances describe the-first-vm | grep "natIP"
Copy the value.
Open a browser and paste the IP address into the address bar to visit your
instance.
The page should now show a welcome message that says
"Deployment Manager bids you good day!"
You can also repeat these steps with the-second-vm and see a slightly
different message.
Delete your deployment
As with previous steps, we recommend that you delete the deployment to avoid
charges. Run the following command to delete the deployment:
gcloud deployment-manager deployments delete deployment-to-update
What's next
Here are some areas to explore as you use Deployment Manager more:
Explore more complex tutorials
Learn about available resource types
Learn more about environment variables
Learn about importing Python libraries
Read the guidelines for preparing updates
Previous
arrow_back
Exploring helper scripts
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
