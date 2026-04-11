---
title: "Configure connectors in the Shared VPC host project \_|\_ App Engine standard\
  \ environment \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/standard/java-gen2/release-notes
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard/java-gen2/shared-vpc-host-project
  title: "Configure connectors in the Shared VPC host project \_|\_ App Engine standard\
    \ environment \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
App Engine
Standard environment
Guides
Send feedback
Configure connectors in the Shared VPC host project
Stay organized with collections
Save and categorize content based on your preferences.
If your organization uses Shared VPC, you can set up a
Serverless VPC Access connector in either the service project or the
host project. This guide shows how to set up a connector in the host project.
If you need to set up a connector in a service project, see
Configure connectors in service projects .
To learn about the advantages of each method, see
Connecting to a Shared VPC network .
Before you begin
Check the Identity and Access Management (IAM) roles for
the account you are currently using. The active account must have the
following roles on the host project:
Compute Network Viewer ( compute.networkViewer )
Project IAM Admin ( resourcemanager.projectIamAdmin )
Service Usage Admin ( serviceuseage.serviceUsageAdmin )
Serverless VPC Access Admin ( vpcaccess.admin )
Select the host project in your preferred environment.
Console
Go to the Google Cloud console dashboard.
Go to Google Cloud console dashboard
In the menu bar at the top of the dashboard, click the project dropdown menu
and select the host project.
gcloud
Set the default project in the gcloud CLI to the host project by
running the following in your terminal:
gcloud config set project HOST_PROJECT_ID
Replace the following:
HOST_PROJECT_ID : the ID of the Shared VPC
host project
Create a Serverless VPC Access connector
To send requests to your VPC network and receive the
corresponding responses, you must create a Serverless VPC Access
connector. You can create a connector by using the Google Cloud console,
Google Cloud CLI, or Terraform:
Console
Enable the Serverless VPC Access API for your project.
Enable API
Go to the Serverless VPC Access overview page.
Go to Serverless VPC Access
Click Create connector .
In the Name field, enter a name for your connector. The name must
follow the Compute Engine
naming convention
and be less than 21 characters. Hyphens ( - ) count as two characters.
In the Region field, select a region for your connector.
This must match the region of your serverless service.
If your service is in the region us-central or europe-west , use
us-central1 or europe-west1 .
In the Network field, select the VPC network
to attach your connector to.
Click the Subnetwork pulldown menu:
Select an unused /28 subnet.
Subnets must be used exclusively by the connector. They cannot be used
by other resources such as VMs, Private Service Connect, or
load balancers.
To confirm that your subnet is not used for
Private Service Connect or Cloud Load Balancing, check that
the subnet
purpose
is PRIVATE by running the following command in the
gcloud CLI:
gcloud compute networks subnets describe SUBNET_NAME
Replace SUBNET_NAME with the name of your subnet.
(Optional) To set scaling options for additional control over
the connector, click Show Scaling Settings to display the scaling
form.
Set the minimum and maximum number of instances for your connector,
or use the defaults, which are 2 (min) and 10 (max). The
connector scales out to the maximum specified as traffic increases,
but the connector does not scale back in when traffic decreases . You
must use values between 2 and 10 , and the
MIN value must be less than the
MAX value.
In the Instance Type pulldown menu, choose the machine type to be used for the
connector, or use the default e2-micro . Notice the cost sidebar on
the right when you choose the instance type, which displays bandwidth
and cost estimations.
Click Create .
A green check mark will appear next to the connector's name when it is
ready to use.
gcloud
Update gcloud components to the latest version:
gcloud components update
Enable the Serverless VPC Access API for your project:
gcloud services enable vpcaccess.googleapis.com
Create a Serverless VPC Access connector:
gcloud compute networks vpc-access connectors create CONNECTOR_NAME \
--region = REGION \
--subnet = SUBNET \
--subnet-project = HOST_PROJECT_ID \
# Optional: specify minimum and maximum instance values between 2 and 10, default is 2 min, 10 max.
--min-instances = MIN \
--max-instances = MAX \
# Optional: specify machine type, default is e2-micro
--machine-type = MACHINE_TYPE
Replace the following:
CONNECTOR_NAME : a name for your connector. The name
must follow the Compute Engine
naming convention
and be less than 21 characters. Hyphens ( - ) count as two characters.
REGION : a region for your connector;
this must match the region of your serverless service. If your service
is in the region us-central or europe-west , use us-central1 or
europe-west1 .
SUBNET : the name of an unused /28 subnet.
Subnets must be used exclusively by the connector. They cannot be used
by other resources such as VMs, Private Service Connect, or
load balancers.
To confirm that your subnet is not used for
Private Service Connect or Cloud Load Balancing, check
that the subnet
purpose
is PRIVATE by running the following command in the
gcloud CLI:
gcloud compute networks subnets describe SUBNET_NAME
Replace the following:
SUBNET_NAME : the name of your subnet
HOST_PROJECT_ID : the ID of the host project
MIN : the minimum number of instances to use for the connector. Use an integer between 2 and 9 . Default is 2 . To learn about connector scaling, see Throughput and scaling .
MAX : the maximum number of instances to use for the connector. Use an integer between 3 and 10 . Default is 10 . If traffic requires it, the connector scales out to [MAX] instances, but does not scale back in . To learn about connector scaling, see Throughput and scaling .
MACHINE_TYPE : f1-micro , e2-micro , or e2-standard-4 . To learn about connector throughput, including machine type and scaling, see Throughput and scaling .
For more details and optional arguments, see the
gcloud reference .
Verify that your connector is in the READY state before using it:
gcloud compute networks vpc-access connectors describe CONNECTOR_NAME \
--region = REGION
Replace the following:
CONNECTOR_NAME : the name of your connector; this is the name that you specified in the previous step
REGION : the region of your connector; this is the region that you specified in the previous step
The output should contain the line state: READY .
Terraform
You can use a Terraform resource
to enable the vpcaccess.googleapis.com API.
resource "google_project_service" "vpcaccess-api" {
project = var.project_id # Replace this with your project ID in quotes
service = "vpcaccess.googleapis.com"
}
You can use Terraform modules
to create a VPC network and subnet and then create the
connector.
module "test-vpc-module" {
source = "terraform-google-modules/network/google"
version = "~> 16.0"
project_id = var.project_id # Replace this with your project ID in quotes
network_name = "my-serverless-network"
mtu = 1460
subnets = [
{
subnet_name = "serverless-subnet"
subnet_ip = "10.10.10.0/28"
subnet_region = "us-central1"
}
]
}
module "serverless-connector" {
source = "terraform-google-modules/network/google//modules/vpc-serverless-connector-beta"
version = "~> 16.0"
project_id = var.project_id
vpc_connectors = [{
name = "central-serverless"
region = "us-central1"
subnet_name = module.test-vpc-module.subnets["us-central1/serverless-subnet"].name
# host_project_id = var.host_project_id # Specify a host_project_id for shared VPC
machine_type = "e2-standard-4"
min_instances = 2
max_instances = 7
}
# Uncomment to specify an ip_cidr_range
# , {
# name = "central-serverless2"
# region = "us-central1"
# network = module.test-vpc-module.network_name
# ip_cidr_range = "10.10.11.0/28"
# subnet_name = null
# machine_type = "e2-standard-4"
# min_instances = 2
# max_instances = 7 }
]
depends_on = [
google_project_service.vpcaccess-api
]
}
Provide access to the connector
Provide access to the connector by granting the Serverless VPC Access User
IAM role on the host project to the principal that deploys your
App Engine service.
Console
Open the IAM page.
Go to IAM
Click the project dropdown menu and select the host project.
Click Add .
In the New principals field, add the principal that deploys your
App Engine service.
In the Role field, select Serverless VPC Access User .
Click Save .
gcloud
Run the following in your terminal:
gcloud projects add-iam-policy-binding HOST_PROJECT_ID \
--member= PRINCIPAL \
--role=roles/vpcaccess.user
Replace the following:
HOST_PROJECT_ID : the ID of the
Shared VPC host project
PRINCIPAL : the principal that deploys your
App Engine service. Learn more about the
--member flag .
Make the connector discoverable
To see the connector, principals need certain viewing roles on both the host
project and the service project. To make your connector appear when principals
view available connectors in the Google Cloud console or from their terminal,
add IAM roles for principals who deploy App Engine
services.
Grant IAM roles on the host project
On the host project, grant principals who deploy App Engine services the
Serverless VPC Access Viewer ( vpcaccess.viewer )
role.
Console
Open the IAM page.
Go to IAM
Click the project dropdown menu and select the host project.
Click Add .
In the New principals field, enter the email address of the principal
that should be able to see the connector from the service project. You can
enter multiple emails in this field.
In the Role field, select Serverless VPC Access Viewer .
Click Save .
gcloud
Run the following in your terminal:
gcloud projects add-iam-policy-binding HOST_PROJECT_ID \
--member= PRINCIPAL \
--role=roles/vpcaccess.viewer
Replace the following:
HOST_PROJECT_ID : the ID of the
Shared VPC host project
PRINCIPAL : the principal who deploys
App Engine services. Learn more about the
--member flag .
Grant IAM roles on the service project
On the service project, grant principals who deploy App Engine services
the
Compute Network Viewer ( compute.networkViewer )
role.
Console
Open the IAM page.
Go to IAM
Click the project dropdown menu and select the service project.
Click Add .
In the New principals field, enter the email address of the principal
that should be able to see the connector from the service project. You can
enter multiple emails in this field.
In the Role field, select Compute Network Viewer .
Click Save .
gcloud
Run the following in your terminal:
gcloud projects add-iam-policy-binding SERVICE_PROJECT_ID \
--member= PRINCIPAL \
--role=roles/compute.networkViewer
Replace the following:
SERVICE_PROJECT_ID : the ID of the service project
PRINCIPAL : the principal who deploys
App Engine services. Learn more about the
--member flag .
Configure your service to use a connector
For each App Engine service that requires access to your
Shared VPC, you must specify the connector for the service. The
following steps show how to configure your service to use a connector.
Add the vpc_access_connector to your service's app.yaml file:
vpc_access_connector:
name: projects/ HOST_PROJECT_ID /locations/ REGION /connectors/ CONNECTOR_NAME
Replace the following:
HOST_PROJECT_ID : the ID of the Shared VPC
host project
REGION : the region of your connector
CONNECTOR_NAME : the name of your connector
Deploy the service:
gcloud app deploy
After deploying, your service is able to send requests to your
Shared VPC network and receive the corresponding responses.
Next steps
Monitor admin activity with
Serverless VPC Access audit logging .
Protect resources and data by
creating a service perimeter
with VPC Service Controls.
Learn about the Identity and Access Management (IAM)
roles associated with Serverless VPC Access. See
Serverless VPC Access
roles in the
IAM documentation for a list of permissions associated with
each role.
Learn how to
connect to Memorystore
from the App Engine standard environment.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
