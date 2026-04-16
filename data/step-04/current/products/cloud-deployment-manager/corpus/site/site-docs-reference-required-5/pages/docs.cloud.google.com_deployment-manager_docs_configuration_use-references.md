---
title: "Using references \_|\_ Cloud Deployment Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/deployment-manager/docs/configuration/use-references
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://docs.cloud.google.com/deployment-manager/docs/configuration/syntax-reference
source_metadata:
  url: https://docs.cloud.google.com/deployment-manager/docs/configuration/use-references
  title: "Using references \_|\_ Cloud Deployment Manager \_|\_ Google Cloud Documentation"
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
Using references
Stay organized with collections
Save and categorize content based on your preferences.
When you define the properties for your configuration or templates, you can
use references to the properties of other resources instead of directly
providing values. For example, if you want to create an instance group manager
that uses an instance template from the same deployment, instead of explicitly
typing the full link for the instance template, you can use a reference with the
syntax $(ref.instance-template.selfLink) .
With references, you can:
Access properties that are not defined until the resource is created. For
example, when you define a virtual machine in your configuration, you do not
yet know its IP address. However, you can still use a reference to the IP
address. When you deploy your configuration, the VM is created first, and
Deployment Manager gets the external IP address when it is available.
Make your configurations or templates easier to read and troubleshoot.
For example, if you need to configure multiple forwarding rules, you must
also specify a network to use. Instead of providing a link to the network
for each forwarding rule, you can create a reference to the network's
selfLink property using the following syntax:
$(ref.network-name.selfLink)
If you need to troubleshoot your configuration, the reference makes it easier
to tell which network is being used in the forwarding rule.
When you create a reference to a resource, you also create a dependency between
resources. For example, consider the following snippet, where sandbox-vm uses
a reference to network-a :
resources :
- name : sandbox - vm
type : compute . v1 . instance
properties :
network : $ ( ref . network - a . selfLink )
...
...
- name : network - a
type : compute . v1 . network
properties :
...
When you deploy this configuration, Deployment Manager creates network-a
before sandbox-vm , so that the reference can be resolved. If any references
do not resolve successfully, your deployment fails.
You can use references in both configurations and templates.
Note: To avoid errors, don't use a reference within the name field of a
resource.
Before you begin
If you want to use the command-line examples in this guide, install the `gcloud` command-line tool .
If you want to use the API examples in this guide, set up API access .
Be familiar with creating a configuration .
Be familiar with
creating a basic template .
Making references in configuration files
Declare references in your configuration using the following format:
$(ref.RESOURCE_NAME.PROPERTY)
The following example creates a network, and then creates two
instances that use references to the newly created network. In this example,
the reference is:
$(ref.a-new-network.selfLink)
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
resources :
- name : the-first-vm
type : compute.v1.instance
properties :
zone : us-central1-f
machineType : https://www.googleapis.com/compute/v1/projects/MY_PROJECT/zones/us-central1-f/machineTypes/f1-micro
disks :
- deviceName : boot
type : PERSISTENT
boot : true
autoDelete : true
initializeParams :
sourceImage : https://www.googleapis.com/compute/v1/projects/debian-cloud/global/images/family/debian-11
networkInterfaces :
# The resource's "network value" has been replaced with a
# reference to the new network's "selfLink" property. The network
# resource has been added to the end of this file.
- network : $(ref.a-new-network.selfLink)
accessConfigs :
- name : External NAT
type : ONE_TO_ONE_NAT
- name : the-second-vm
type : compute.v1.instance
properties :
zone : us-central1-f
machineType : https://www.googleapis.com/compute/v1/projects/MY_PROJECT/zones/us-central1-f/machineTypes/g1-small
disks :
- deviceName : boot
type : PERSISTENT
boot : true
autoDelete : true
initializeParams :
sourceImage : https://www.googleapis.com/compute/v1/projects/debian-cloud/global/images/family/debian-11
networkInterfaces :
# As in the resource above, the "network" value has been replaced with
# the new network's "selfLink" property.
- network : $(ref.a-new-network.selfLink)
accessConfigs :
- name : External NAT
type : ONE_TO_ONE_NAT
# The following network is a new resource added to the "two-vms.yaml" file.
- name : a-new-network
type : compute.v1.network
properties :
routingConfig :
routingMode : REGIONAL
autoCreateSubnetworks : true
When you deploy this configuration, the network is created before the two
instances, and the reference resolves to the selfLink of the network resource.
Making references in templates
In template files, the entire reference must be preceded by a $ and then
contained within a set of parentheses:
$(ref.RESOURCE_NAME.PROPERTY)
You can combine references with other features like template properties
and environment variables. To make sure that Deployment Manager parses the
reference correctly, it is important to remember to keep your entire reference
string within the parentheses.
Note: Your reference declaration is evaluated after your template is
processed and the expanded configuration is created ,
so you can't use the processed value of a reference in your Python or
Jinja code. If you need to get the value of a reference after you create or
update a deployment, consider exposing the value as an output
and accessing the value after the create or update operation.
Here are some examples of declaring references in your templates:
Jinja
Reference that includes an environment variable
network : $(ref.{{ env["deployment"] }}-network.selfLink)
Reference to a value in an array
subnetwork : $(ref.{{ env["deployment"] }}-vm.networkInterfaces[2].subnetwork)
Reference that includes a template property
network : $(ref.{{ properties["network"] }}.selfLink)
Reference using a Jinja parameter
network : $(ref.{{ NETWORK_NAME }}.selfLink)
Reference in outputs
outputs :
- name : UrlToService
value : http://$(ref.{{ env["deployment"] }}-network.networkInterfaces[0].accessConfigs[0].natIp):8080/
Python
Reference that includes an environment variable
'network' : '$(ref.' + context . env [ 'deployment' ] + '-network.selfLink)'
Reference to a value in an array
'subnetwork' : '$(ref.' + context . env [ 'deployment' ] + '-vm.networkInterfaces[2].subnetwork)'
Reference that includes a template property
'network' : '$(ref.' + context . properties [ 'network' ] + '.selfLink)'
Reference using a Python parameter
'value' : '$(ref.' + base_name + '.networkInterfaces[0].networkIP)'
Reference in outputs
outputs = [{ 'name' : 'UrlToService' ,
'value' : '$(ref.' + context . env [ 'deployment' ] + '-network.networkInterfaces[0].accessConfigs[0].natIP):8080' }]
What's next
Preview your configuration
before you commit to deploying it.
Create a deployment .
Learn more about
templates .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
