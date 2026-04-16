---
title: "Accessing management appliances \_|\_ Google Cloud VMware Engine \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/vmware-engine/docs/vmware-platform/howto-access-management
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/vmware-engine/docs/vmware-platform/howto-access-management
source_metadata:
  url: https://docs.cloud.google.com/vmware-engine/docs/vmware-platform/howto-access-management
  title: "Accessing management appliances \_|\_ Google Cloud VMware Engine \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
VMware Engine
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Accessing management appliances
This page describes the steps to connecting to management appliances for your
private clouds.
Before you can connect to management appliances, you need network connectivity
from your client machine to the VMware Engine network. Establish
network connectivity using one of the following options:
Connect from a VM on the VPC network that you used when creating the private
cloud. Use the internal IP address or the FQDN of the management appliance.
Connect from your on-premises network to VPC network .
Google Cloud CLI and API prerequisites
To use the gcloud command line tool or the API to manage your VMware Engine
resources, we recommend configuring the tools as described below.
gcloud
Set your default project ID:
gcloud config set project PROJECT_ID
Set a default region and zone:
gcloud config set compute/region REGION
gcloud config set compute/zone ZONE
For more information on the gcloud vmware tool,
see the Cloud SDK reference docs .
API
API examples in this documentation set use the cURL command-line tool to
query the API. A valid access token is required as part of the cURL
request. There are many ways to get a valid access token; the following
steps use the gcloud tool to generate a access token:
Login to Google Cloud:
gcloud auth login
Generate access token and export to TOKEN:
export TOKEN=`gcloud auth print-access-token`
Verify that TOKEN is set properly:
echo $TOKEN
Now, use the authorization token in your requests to the API. For example:
curl -X GET -H "Authorization: Bearer \"$TOKEN\"" -H "Content-Type: application/json; charset=utf-8" https://vmwareengine.googleapis.com/v1/projects/ PROJECT_ID /locations
Python
Python code samples in this documentation use the VMware Engine library to communicate with the API. To be able to use this approach, the library needs to be installed and the Application Default Credentials should be configured.
Download and install the Python library:
pip install google-cloud-vmwareengine
Configure the ADC information by executing those command in your shell:
gcloud auth application-default login
Or, use a Service Account key file:
export GOOGLE_APPLICATION_CREDENTIALS=" FILE_PATH "
For more information about the library, visit the reference page or view code samples on GitHub .
To access a management appliance of your private cloud, do the following:
Get connection details for management appliances
Console
To get the URL to a management appliance using the Google Cloud console,
follow these steps:
In the Google Cloud console, go to the Private clouds page.
Go to Private clouds
Click Select a project and then select the organization, folder, or project
that contains the private cloud.
Select the private cloud you want to access.
On the private cloud details page, select the Management appliances tab.
Click the URL column for vCenter Server or NSX Manager.
gcloud
To get the connection details to a management appliance using the Google Cloud CLI,
do the following:
To show management appliance URLs, run the
gcloud vmware private-clouds describe command :
gcloud vmware private-clouds describe \
--private-cloud= PRIVATE_CLOUD_ID \
--project= PROJECT_ID \
--location= REGION
Replace the following:
PRIVATE_CLOUD_ID : the private cloud private
cloud ID for this request.
PROJECT_ID : the project name for this request.
REGION : the region of the private cloud. If
this is stretched private cloud, specify the zone for this private
cloud.
API
To show management appliance connection details using the VMware Engine API,
make a GET request:
GET "https://vmwareengine.googleapis.com/v1/projects/ PROJECT_ID /locations/ REGION /privateCloud/ PRIVATE_CLOUD_ID "
Replace the following:
PROJECT_ID : the project name for this request.
REGION : the region of the private cloud. If
this is stretched private cloud, specify the zone for this private
cloud.
PRIVATE_CLOUD_ID : the private cloud private
cloud ID for this request.
Get credentials for management appliances
After you create a private cloud, you can generate credentials for management
appliances of that private cloud, like vCenter Server and NSX Manager. To access
those appliances for your private cloud for the first time, you must use the
user ID and password generated by the Google Cloud console.
Note: By default, the password for management components expires after 365 days.
Make sure that you change the password before it expires.
To add additional users to your vCenter Server or NSX Manager appliances,
contact Cloud Customer Care .
Console
To get the password to a management appliance using the Google Cloud console,
follow these steps:
In the Google Cloud console, go to the Private clouds page.
Go to Private clouds
Click Select a project and then select the organization, folder, or project
that contains the private cloud.
Select the private cloud you want to access.
On the private cloud details page, select the Management appliances tab.
In the Login info column for vCenter Server or NSX Manager, click Key details .
Copy the credentials for vCenter Server or NSX Manager from the prompt that appears.
gcloud
To get the password to a management appliance using the Google Cloud CLI,
do the following:
To show vCenter user credentials, run the
gcloud vmware private-clouds vcenter credentials describe command :
gcloud vmware private-clouds vcenter credentials describe \
--private-cloud= PRIVATE_CLOUD_ID \
--project= PROJECT_ID \
--location= REGION
To show NSX user credentials, run the
gcloud vmware private-clouds nsx credentials describe command :
gcloud vmware private-clouds nsx credentials describe \
--private-cloud= PRIVATE_CLOUD_ID \
--project= PROJECT_ID \
--location= REGION
Replace the following:
PRIVATE_CLOUD_ID : the private cloud private
cloud ID for this request.
PROJECT_ID : the project name for this request.
REGION : the region of the private cloud. If
this is stretched private cloud, specify the zone for this private
cloud.
API
To show vCenter user credentials using the VMware Engine API,
make a GET request:
GET "https://vmwareengine.googleapis.com/v1/projects/ PROJECT_ID /locations/ REGION /privateCloud/ PRIVATE_CLOUD_ID /showVcenterCredentials"
To show NSX user credentials using the VMware Engine API,
make a GET request:
GET "https://vmwareengine.googleapis.com/v1/projects/ PROJECT_ID /locations/ REGION /privateCloud/ PRIVATE_CLOUD_ID /showNsxCredentials"
Replace the following:
PROJECT_ID : the project name for this request.
REGION : the region of the private cloud. If
this is stretched private cloud, specify the zone for this private
cloud.
PRIVATE_CLOUD_ID : the private cloud private
cloud ID for this request.
Reset access credentials
If you misplace the credentials to vCenter Server or NSX Manager, you can reset
the password to your management appliances for your private cloud using the
Google Cloud CLI or Google Cloud VMware Engine by doing the following:
Important: If you change the password that VMware Engine generates
for either vCenter Server or NSX Manager, those changes won't be reflected in
the Google Cloud console.
Console
To reset the password to a management appliance using the Google Cloud console,
follow these steps:
Follow the steps in the
Get credentials for management appliances section.
In the prompt that appears and contains your access credentials,
click Reset Password .
gcloud
To reset the password to a management appliance using the Google Cloud CLI,
do the following:
Reset vCenter user credentials by running the
gcloud vmware private-clouds vcenter credentials reset command :
gcloud vmware private-clouds vcenter credentials reset \
--private-cloud= PRIVATE_CLOUD_ID \
--project= PROJECT_ID \
--location= REGION
Reset NSX user credentials by running the
gcloud vmware private-clouds nsx credentials reset command :
gcloud vmware private-clouds nsx credentials reset \
--private-cloud= PRIVATE_CLOUD_ID \
--project= PROJECT_ID \
--location= REGION
Replace the following:
PRIVATE_CLOUD_ID : the private cloud private
cloud ID for this request.
PROJECT_ID : the project name for this request.
REGION : the region of the private cloud. If
this is stretched private cloud, specify the zone for this private
cloud.
API
To reset vCenter user credentials using the VMware Engine API, make a
GET request:
GET "https://vmwareengine.googleapis.com/v1/projects/ PROJECT_ID /locations/ REGION /privateCloud/ PRIVATE_CLOUD_ID /resetVcenterCredentials"
To reset NSX user credentials using the VMware Engine API, make a
GET request:
GET "https://vmwareengine.googleapis.com/v1/projects/ PROJECT_ID /locations/ REGION /privateCloud/ PRIVATE_CLOUD_ID /resetNsxCredentials"
Replace the following:
PROJECT_ID : the project name for this request.
REGION : the region of the private cloud. If
this is stretched private cloud, specify the zone for this private
cloud.
PRIVATE_CLOUD_ID : the private cloud private
cloud ID for this request.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
