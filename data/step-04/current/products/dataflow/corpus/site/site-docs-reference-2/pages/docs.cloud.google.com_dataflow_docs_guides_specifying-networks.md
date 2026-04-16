---
title: "Specify a network and subnetwork \_|\_ Cloud Dataflow \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataflow/docs/guides/specifying-networks
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataflow/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/dataflow/docs/guides/specifying-networks
  title: "Specify a network and subnetwork \_|\_ Cloud Dataflow \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Cloud Dataflow
Guides
Send feedback
Specify a network and subnetwork
Stay organized with collections
Save and categorize content based on your preferences.
This document explains how to specify a network or a subnetwork or both options when
you run Dataflow jobs.
To follow the steps, you need to know how to create Google Cloud networks
and subnetworks. You also need to be familiar with the network terms
discussed in the next section.
The default network has configurations
that allow Dataflow jobs to run. However, other services might
also use this network. Ensure that any changes to the default network are
compatible with all of your services. Alternatively, create a separate network
for Dataflow.
For more information about how to troubleshoot networking issues, see
Troubleshoot Dataflow networking issues .
Google Cloud network terminology
VPC network. A VPC network is a
virtual version of a physical network that is implemented inside of Google's
production network. Sometimes called a network , a VPC provides
connectivity for resources in a project.
To learn more about VPC, see VPC networks .
Shared VPC network. When you use Shared VPC,
you designate a project as a host project and attach one or more other
service projects to it. The VPC networks in the host project are called
Shared VPC networks . If a
Shared VPC Admin
defines you as a Service Project Admin ,
you have permission to use at least some of the subnetworks in networks of the
host project.
To learn more about Shared VPC, see Shared VPC .
VPC Service Controls. Dataflow VPC Service Controls
help protect against accidental or targeted action
by external entities or by insider entities, which helps to minimize unwarranted
data exfiltration risks. You can use VPC Service Controls to create perimeters that
protect the resources and data of services that you explicitly specify.
To learn more about VPC Service Controls, see
Overview of VPC Service Controls .
To learn about the limitations when using Dataflow with
VPC Service Controls, see
Supported products and limitations .
Firewall rules. Use firewall rules to allow or deny traffic to and from
your VMs. For more information, see
Configure internet access and firewall rules .
Network and subnetwork for a Dataflow job
When you create a Dataflow job, you can specify a network,
a subnetwork, or both options.
Consider the following guidelines:
If you are unsure about which parameter to use, specify only the subnetwork
parameter. The network parameter is then implicitly specified for you.
If you omit both the subnetwork and network parameters, Google Cloud assumes
you intend to use an auto mode VPC network named default .
If you don't have a network named default in your project, you must specify an
alternate network or subnetwork.
Guidelines for specifying a network parameter
To select an auto mode VPC network
in your project, use the network parameter. For more information, see
Create an auto mode VPC network .
You can specify a network by using only its name and not the complete URL.
You can only use the network parameter to select a Shared VPC
network if both of the following conditions are true:
The Shared VPC network that you select is an auto mode VPC
network.
You are a Service Project Admin with project-level permissions to the whole Shared VPC host project. A Shared VPC
Admin has granted you the Compute Network User role for the whole host project, so you are able to use all of its networks and subnetworks.
For all other cases, you must specify a subnetwork.
Guidelines for specifying a subnetwork parameter
If you specify a subnetwork, Dataflow chooses the network for
you. Therefore, when specifying a subnetwork, you can omit the network
parameter.
To select a specific subnetwork in a network, use the
subnetwork parameter.
Specify a subnetwork by using either a complete URL or an abbreviated path. If
the subnetwork is located in a Shared VPC network, you must use the
complete URL.
You must select a subnetwork in the same region as the zone where you run
your Dataflow workers.
You must specify the subnetwork parameter in the following situations:
The subnetwork you specify is in a custom mode VPC network.
You are a Service Project Admin with subnet-level permissions
to a specific subnetwork in a Shared VPC host project.
The number of available IP addresses is a limit on the number of
Dataflow workers that can be created. For example, if the
subnet's IPv4 range is 10.0.0.0/24, this provides 252
useable IP addresses
for worker VMs. Make sure the IP address space is large enough for your
expected workloads, including allowing for
horizontal autoscaling . Use
load testing
to validate your assumptions.
Guidelines for specifying a subnetwork parameter for Shared VPC
When specifying the subnetwork URL for Shared VPC, ensure that
HOST_PROJECT_ID is the project in which the VPC is
hosted.
If the subnetwork is located in a Shared VPC network, you must use
the complete URL. See an
example of a complete URL that specifies a subnetwork .
Make sure the Shared VPC subnetwork is shared with the Dataflow service account and has the Compute Network User role assigned on the specified subnet.
The Compute Network User role must be assigned to the Dataflow
service account in the host project.
In the Google Cloud console, go to the Shared VPC page.
Go to the Shared VPC page
Select a host project.
In the Individual subnet access section, select your subnet. The
Subnet level permissions pane displays permissions for this subnet.
You can see whether the VPC subnetwork is assigned the Compute
Network User role.
To grant permissions, in the Subnet level permissions pane, click
Add principal .
If the network is not shared, when you try to run your job, the following
error message appears: Error: Message: Required 'compute.subnetworks.get' permission .
For more information, see
Required 'compute.subnetworks.get' permission
in "Troubleshoot Dataflow permissions."
Example network and subnetwork specifications
The following example shows a complete URL that specifies a subnetwork:
https://www.googleapis.com/compute/v1/projects/ HOST_PROJECT_ID /regions/ REGION_NAME /subnetworks/ SUBNETWORK_NAME
Replace the following:
HOST_PROJECT_ID : the host project ID
REGION_NAME : the region of your Dataflow job
SUBNETWORK_NAME : the name of your Compute Engine subnetwork
The following is an example URL where the host project ID is my-cloud-project ,
the region is us-central1 , and the subnetwork name is mysubnetwork :
https://www.googleapis.com/compute/v1/projects/my-cloud-project/regions/us-central1/subnetworks/mysubnetwork
The following is an example of a short form that specifies a subnetwork:
regions/ REGION_NAME /subnetworks/ SUBNETWORK_NAME
Replace the following:
REGION_NAME : the region of your Dataflow job
SUBNETWORK_NAME : the name of your Compute Engine subnetwork
Run your pipeline with the network specified
If you want to use a network other than the default network created by
Google Cloud, in most cases, you need to
specify the subnetwork . The network is automatically
inferred from the subnetwork that you specify. For more information, see
Guidelines for specifying a network parameter in this document.
The following example shows how to run your pipeline from the command line or
by using the REST API. This example specifies a network.
Java
mvn compile exec:java \
-Dexec.mainClass = INPUT_PATH \
-Dexec.args = "--project= HOST_PROJECT_ID \
--stagingLocation=gs:// STORAGE_BUCKET /staging/ \
--output=gs:// STORAGE_BUCKET /output \
--region= REGION \
--runner=DataflowRunner \
--network= NETWORK_NAME "
Python
python -m INPUT_PATH \
--project HOST_PROJECT_ID \
--region = REGION \
--runner DataflowRunner \
--staging_location gs:// STORAGE_BUCKET /staging \
--temp_location gs:// STORAGE_BUCKET /temp \
--output gs:// STORAGE_BUCKET /output \
--network NETWORK_NAME
Go
wordcount
--project HOST_PROJECT_ID \
--region HOST_GCP_REGION \
--runner dataflow \
--staging_location gs:// STORAGE_BUCKET /staging \
--temp_location gs:// STORAGE_BUCKET /temp \
--input INPUT_PATH \
--output gs:// STORAGE_BUCKET /output \
--network NETWORK_NAME
API
If you're running a Dataflow template
by using the REST API ,
add network or subnetwork , or both, to the environment object.
POST h tt ps : //dataflow.googleapis.com/v1b3/projects/[YOUR_PROJECT_ID]/templates:launch?gcsPath=gs://dataflow-templates/wordcount/template_file
{
"jobName" : " JOB_NAME " ,
"parameters" : {
"inputFile" : " INPUT_PATH " ,
"output" : "gs:// STORAGE_BUCKET /output"
},
"environment" : {
"tempLocation" : "gs:// STORAGE_BUCKET /temp" ,
"network" : " NETWORK_NAME " ,
"zone" : "us-central1-f"
}
}
Replace the following:
JOB_NAME : the name of your Dataflow job (API only)
INPUT_PATH : the path to your source
HOST_PROJECT_ID : the host project ID
REGION : a Dataflow region , like us-central1
STORAGE_BUCKET : the storage bucket
NETWORK_NAME : the name of your Compute Engine network
Run your pipeline with the subnetwork specified
If you are a Service Project Admin who only has permission to use specific
subnetworks in a Shared VPC network, you must specify the
subnetwork parameter with a subnetwork that you have permission to use.
The following example shows how to run your pipeline from the command line or
by using the REST API. The example specifies a subnetwork. You can also specify the network.
Java
mvn compile exec:java \
-Dexec.mainClass = INPUT_PATH \
-Dexec.args = "--project= HOST_PROJECT_ID \
--stagingLocation=gs:// STORAGE_BUCKET /staging/ \
--output=gs:// STORAGE_BUCKET /output \
--region= REGION \
--runner=DataflowRunner \
--subnetwork=https://www.googleapis.com/compute/v1/projects/ HOST_PROJECT_ID /regions/ REGION /subnetworks/ SUBNETWORK_NAME "
Python
python -m INPUT_PATH \
--project HOST_PROJECT_ID \
--region = REGION \
--runner DataflowRunner \
--staging_location gs:// STORAGE_BUCKET /staging \
--temp_location gs:// STORAGE_BUCKET /temp \
--output gs:// STORAGE_BUCKET /output \
--subnetwork https://www.googleapis.com/compute/v1/projects/ HOST_PROJECT_ID /regions/ REGION /subnetworks/ SUBNETWORK_NAME
Go
wordcount
--project HOST_PROJECT_ID \
--region HOST_GCP_REGION \
--runner dataflow \
--staging_location gs:// STORAGE_BUCKET /staging \
--temp_location gs:// STORAGE_BUCKET /temp \
--input INPUT_PATH \
--output gs:// STORAGE_BUCKET /output \
--subnetwork https://www.googleapis.com/compute/v1/projects/ HOST_PROJECT_ID /regions/ REGION /subnetworks/ SUBNETWORK_NAME
API
If you're running a Dataflow template using the REST API ,
add network or subnetwork , or both, to the environment object.
POST https : // dataflow . googleapis . com / v1b3 / projects /[ YOUR_PROJECT_ID ]/ templates : launch ? gcsPath = gs : // dataflow - templates / wordcount / template_file
{
"jobName" : " JOB_NAME " ,
"parameters" : {
"inputFile" : " INPUT_PATH " ,
"output" : "gs:// STORAGE_BUCKET /output"
} ,
"environment" : {
"tempLocation" : "gs:// STORAGE_BUCKET /temp" ,
"subnetwork" : "https://www.googleapis.com/compute/v1/projects/ HOST_PROJECT_ID /regions/ REGION /subnetworks/ SUBNETWORK_NAME " ,
"zone" : "us-central1-f"
}
}
Replace the following:
JOB_NAME : the name of your Dataflow job (API only)
INPUT_PATH : the path to your source
HOST_PROJECT_ID : the host project ID
REGION : a Dataflow region , like us-central1
STORAGE_BUCKET : the storage bucket
SUBNETWORK_NAME : the name of your Compute Engine subnetwork
Turn off an external IP address
To turn off an external IP address, see Configure internet access and firewall rules .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
