---
title: "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc
knowledge_key: corpus
source_id: site-docs-root-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/appengine/docs/standard/python/runtime
source_metadata:
  url: https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc
  title: "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\
    \ Google Cloud Documentation"
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
Connecting to a VPC network
Stay organized with collections
Save and categorize content based on your preferences.
This page shows how to use
Serverless VPC Access
to connect your App Engine services in the standard environment
directly to your VPC network, allowing access to Compute Engine
VM instances, Memorystore instances, and any other resources with an
internal IP address.
Note: Serverless VPC Access connectors incur a monthly charge.
For more information, see Serverless VPC Access
pricing .
Before you begin
If you don't already have a VPC network in your project,
create one .
If you use Shared VPC, see
Connecting to a Shared VPC network .
In the Google Cloud console, ensure that the Serverless VPC Access
API is enabled for your project.
Enable API
Create a Serverless VPC Access connector
To send requests to your VPC network and receive the
corresponding responses without using the public internet, you can use a
Serverless VPC Access connector.
If your connector is located in the same project as its VPC
network, you can either create a connector using an existing subnet or create
a connector and a new subnet.
If your connector is located in a service project and uses a Shared VPC
network, the connector and its associated VPC network are in
different projects. When a connector and its VPC network are in
different projects, a Shared VPC network administrator must create the
connector's subnet in the Shared VPC network before you can create the
connector, and you must create the connector using an existing subnet.
To learn more about subnet requirements, see connector subnet
requirements .
To learn about connector throughput, including machine type and scaling, see
Throughput and scaling .
You can create a connector by using the Google Cloud console, Google Cloud CLI, or
Terraform.
Console
Go to the Serverless VPC Access overview page.
Go to Serverless VPC Access
Click Create connector .
In the Name field, enter a name for your connector, matching
Compute Engine naming
conventions , with
the additional requirements that the name must be less than 21
characters long, and that hyphens (-) count as two characters.
In the Region field, select a region for your connector.
This must match the region of your serverless service.
In the Network field, select the VPC network
to attach your connector to.
In the Subnet field, select one of the following options:
Create a connector using an existing subnet: Select the existing
subnet in the Subnet field.
Create a connector and a new subnet: Select Custom IP range in
the Subnet field. Then, enter the first address in an unused /28
CIDR (for example 10.8.0.0/28 ) to use as the primary IPv4 address
range of a new subnet that Google Cloud creates in the connector's
VPC network. Ensure that the IP range does not conflict
with any existing routes in the connector's VPC network.
The name of the new subnet begins with the "aet-" prefix.
(Optional) To set scaling options for additional control over
the connector, click Show Scaling Settings to display the scaling
form.
Set the minimum and maximum number of instances for your connector,
or use the defaults, which are 2 (min) and 10 (max). The
connector scales up to the maximum specified if traffic usage requires
it, but the connector does not scale back down when traffic
decreases . You must use values between 2 and 10 .
In the Instance Type menu, choose the machine type to be
used for the connector, or use the default e2-micro . Notice the cost
sidebar on the right when you choose the instance type, which displays
bandwidth and cost estimations.
Click Create .
A green check mark will appear next to the connector's name when it is
ready to use.
gcloud
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
Update gcloud components to the latest version:
gcloud components update
Ensure that the Serverless VPC Access API is enabled for
your project:
gcloud services enable vpcaccess.googleapis.com
Create the connector using one of the following options:
For more details and optional arguments, see the gcloud
reference .
Create a connector using an existing subnet :
gcloud compute networks vpc-access connectors create CONNECTOR_NAME \
--region REGION \
--subnet SUBNET_NAME \
--subnet-project HOST_PROJECT_ID \
--min-instances MIN \
--max-instances MAX \
--machine-type MACHINE_TYPE
Replace the following:
CONNECTOR_NAME : a name for your connector,
matching Compute Engine naming
conventions ,
with the additional requirements that the name must be less than 21
characters long, and that hyphens (-) count as two characters.
REGION : a region for your connector, matching the
region of your serverless service or job.
SUBNET_NAME : the name of the existing subnet.
HOST_PROJECT_ID : the Shared VPC host
project ID. If the connector and existing subnet are located the
same project, omit the --subnet-project flag.
MIN : the minimum number of instances to use for
the connector. Use an integer between 2 (the default) and 9 .
MAX : the maximum number of instances to use for
the connector. Use an integer between 3 and 10 (the default).
If the connector scales up to the maximum number of instances, it
does not scale back down .
MACHINE_TYPE : must be one of the following:
f1-micro , e2-micro , or e2-standard-4 .
Create a connector and a new subnet :
gcloud compute networks vpc-access connectors create CONNECTOR_NAME \
--region REGION \
--network VPC_NETWORK \
--range IP_RANGE
--min-instances MIN \
--max-instances MAX \
--machine-type MACHINE_TYPE
Replace the following:
CONNECTOR_NAME : a name for your connector,
matching Compute Engine naming
conventions ,
with the additional requirements that the name must be less than 21
characters long, and that hyphens (-) count as two characters.
REGION : a region for your connector, matching the
region of your serverless service or job.
VPC_NETWORK : the name of the VPC
network to attach your connector to. The connector and
VPC network must be located in the same project.
IP_RANGE : provide an unused /28 CIDR (for
example 10.8.0.0/28 ) to use as the primary IPv4 address range
of a new subnet that Google Cloud creates in the connector's
VPC network. Ensure that the IP range does not
conflict with any existing routes in the connector's
VPC network. The name of the new subnet begins with
the "aet-" prefix.
MIN : the minimum number of instances to use for
the connector. Use an integer between 2 (the default) and 9 .
MAX : the maximum number of instances to use for
the connector. Use an integer between 3 and 10 (the default).
If the connector scales up to the maximum number of instances, it
does not scale back down .
MACHINE_TYPE : must be one of the following:
f1-micro , e2-micro , or e2-standard-4 .
Verify that your connector is in the READY state before using it:
gcloud compute networks vpc-access connectors describe CONNECTOR_NAME \
--region REGION
Replace the following:
CONNECTOR_NAME : the name of your connector; this is
the name that you specified in the previous step.
REGION : the region of your connector; this is the
region that you specified in the previous step.
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
Configure your service to use a connector
After you have created a Serverless VPC Access connector,
you must configure each service in your App Engine app that you want to
connect to your VPC network.
Note: To deploy a service with a connector, the user or service account doing
the deployment needs the
Serverless VPC Access User
and
Compute Viewer
IAM roles.
To specify a connector for a service in your app:
Add the vpc_access_connector field to your service's app.yaml file:
vpc_access_connector:
name: projects/ PROJECT_ID /locations/ REGION /connectors/ CONNECTOR_NAME
Where PROJECT_ID is your Google Cloud project ID,
REGION is the region your connector is in,
and CONNECTOR_NAME is the name of your connector.
Deploy the service:
gcloud app deploy
After you deploy your service, it is able to send requests to internal IP
addresses in order to access resources in your VPC network.
Access to VPC resources
Required firewall rules for connectors in service projects
If you create a connector in a standalone VPC network or in the
host project of a Shared VPC network, Google Cloud creates all
necessary firewall rules for the connector's operation. For more information,
see Firewall rules for connectors in standalone VPC networks or Shared VPC host projects .
However, if you create a connector in a service project and the connector targets
a Shared VPC network in the host project, you must add firewall rules
to allow necessary traffic for the connector's operation from the following
ranges:
Serverless infrastructure IP range : 35.199.224.0/19
Health check probe IP ranges :
35.191.0.0/16 , 35.191.192.0/18 , and 130.211.0.0/22
These ranges are used by the Google infrastructure underlying
Cloud Run, Cloud Run functions, and App Engine standard environment. All requests from
these IP addresses originate from Google infrastructure to make sure
that each serverless resource only communicates with the
connector that it's connected to.
You must also allow traffic from the connector's subnet to resources in your
VPC network.
To perform these steps, you must have one of the following roles on the
host project:
Owner role ( roles/owner )
Compute Security Admin role ( roles/compute.securityAdmin )
Custom Identity and Access Management (IAM) role with the
compute.firewalls.create permission
enabled
For a basic configuration, apply the rules to allow serverless resources in any
service project connected to the Shared VPC network to send requests to
any resource in the network.
Important: The rules you create using the following process apply to existing
and future connectors that target a given Shared VPC network. If you
want to scope these rules so they only apply to specified connectors, see
Create firewall rules for specific connectors .
To apply these rules, run the following commands in the host project:
Create firewall rules that allow requests from Google's serverless
infrastructure and health check probes to reach all connectors in the
network. In these commands, UDP and TCP ports are used as proxies and for
HTTP health checks, respectively. Don't change the specified ports.
gcloud compute firewall-rules create serverless-to-vpc-connector \
--allow tcp:667,udp:665-666,icmp \
--source-ranges = 35 .199.224.0/19 \
--direction = INGRESS \
--target-tags vpc-connector \
--network = VPC_NETWORK
gcloud compute firewall-rules create vpc-connector-to-serverless \
--allow tcp:667,udp:665-666,icmp \
--destination-ranges = 35 .199.224.0/19 \
--direction = EGRESS \
--target-tags vpc-connector \
--network = VPC_NETWORK
gcloud compute firewall-rules create vpc-connector-health-checks \
--allow tcp:667 \
--source-ranges = 35 .191.0.0/16,35.191.192.0/18,130.211.0.0/22 \
--direction = INGRESS \
--target-tags vpc-connector \
--network = VPC_NETWORK
Replace VPC_NETWORK with the name of the
VPC network to attach your connector to.
Create an ingress firewall rule on your VPC network to allow
requests from connectors that target this network:
gcloud compute firewall-rules create vpc-connector-requests \
--allow tcp,udp,icmp \
--direction = INGRESS \
--source-tags vpc-connector \
--network = VPC_NETWORK
This rule gives the connector access to every resource in the network. To
limit the resources that your serverless environment can reach by using
Serverless VPC Access, see
Restrict connector VM access to VPC network resources .
Create firewall rules for specific connectors
Following the procedure in
Required firewall rules for connectors in service projects
results in firewall rules that apply to all connectors, both current ones
and ones created in the future. If you don't want this, but instead want to
create rules for specific connectors only, you can scope the rules so that
they apply only to those connectors.
To limit the scope of the rules to specific connectors, you can use one of the
following mechanisms:
Network tags: Every connector has two network tags: vpc-connector and
vpc-connector- REGION - CONNECTOR_NAME .
Use the latter format to limit the scope of your firewall rules to a specific
connector.
IP ranges: Use this for the egress rules only, because it doesn't work for
ingress rules. You can use the IP range of the connector
subnet to limit the scope of your firewall rules to a single VPC
connector.
Restrict connector VM access to VPC network resources
You can restrict your connector's access to resources in its target
VPC network by using VPC firewall
rules or rules in firewall
policies . You can accomplish these
restrictions using one of the following strategies:
Create ingress rules whose targets represent the resources that you want
to limit connector VM access to and whose sources represent the connector VMs.
Create egress rules whose targets represent the connector VMs and whose
destinations represent the resources that you want to limit connector VM
access to.
The following examples illustrate each strategy.
Restrict access using ingress rules
Choose either network tags or
CIDR ranges to control the incoming traffic to your VPC network.
Network tags
The following steps show how to create ingress rules that restrict a
connector's access to your VPC network based on the connector
network tags.
Ensure that you have the required permissions to insert firewall rules.
You must have one of the following
Identity and Access Management (IAM) roles:
Compute Security Admin role
Custom IAM role with the
compute.firewalls.create
permission enabled
Deny connector traffic across your VPC network.
Create an ingress firewall rule with priority lower than 1000 on your
VPC network to deny ingress from the connector network
tag. This overrides the implicit firewall rule that
Serverless VPC Access creates on your VPC
network by default.
gcloud compute firewall-rules create RULE_NAME \
--action = DENY \
--rules = PROTOCOL \
--source-tags = VPC_CONNECTOR_NETWORK_TAG \
--direction = INGRESS \
--network = VPC_NETWORK \
--priority = PRIORITY
Replace the following:
RULE_NAME : the name of your new firewall rule. For example,
deny-vpc-connector .
PROTOCOL : one or more protocols that you want to allow from your
VPC connector. Supported protocols are tcp or udp . For example, tcp:80,udp
allows TCP traffic through port 80 and UDP traffic. For more information, see
the documentation for the allow
flag.
For security and validation purposes, you can also
configure deny rules to block traffic for the following unsupported
protocols :
ah , all , esp , icmp , ipip , and sctp .
VPC_CONNECTOR_NETWORK_TAG : the universal connector network
tag if you want to restrict access for all connectors (including any
connectors made in the future), or the unique network tag if you want to
restrict access for a specific connector.
Universal network tag: vpc-connector
Unique network tag:
vpc-connector- REGION - CONNECTOR_NAME
Replace:
REGION : the region of the connector that you want
to restrict
CONNECTOR_NAME : the name of the connector that you
want to restrict
To learn more about connector network tags, see
Network tags .
VPC_NETWORK : the name of your VPC network
PRIORITY : an integer between 0-65535. For example, 0 sets the
highest priority.
Allow connector traffic to the resource that should receive connector
traffic.
Use the allow and target-tags flags to create an ingress firewall
rule targeting the resource in your VPC network that you
want the VPC connector to access. Set the priority for
this rule to be a lower value than the priority of the rule you made in
the previous step.
gcloud compute firewall-rules create RULE_NAME \
--allow = PROTOCOL \
--source-tags = VPC_CONNECTOR_NETWORK_TAG \
--direction = INGRESS \
--network = VPC_NETWORK \
--target-tags = RESOURCE_TAG \
--priority = PRIORITY
Replace the following:
RULE_NAME : the name of your new firewall rule. For example,
allow-vpc-connector-for-select-resources .
PROTOCOL : one or more protocols that you want to allow from your
VPC connector. Supported protocols are tcp or udp . For example, tcp:80,udp
allows TCP traffic through port 80 and UDP traffic. For more information, see
the documentation for the allow
flag.
VPC_CONNECTOR_NETWORK_TAG : the universal connector network
tag if you want to restrict access for all connectors (including any
connectors made in the future), or the unique network tag if you want to
restrict access for a specific connector. This must match the network
tag that you specified in the previous step.
Universal network tag: vpc-connector
Unique network tag:
vpc-connector- REGION - CONNECTOR_NAME
Replace:
REGION : the region of the connector that you want
to restrict
CONNECTOR_NAME : the name of the connector that you
want to restrict
To learn more about connector network tags, see
Network tags .
VPC_NETWORK : the name of your VPC network
RESOURCE_TAG : the network tag for the VPC
resource that you want your VPC connector to access
PRIORITY : an integer less than the priority you set in
the previous step. For example, if you set the priority for the rule
you created in the previous step to 990, try 980.
For more information about the required and optional flags for creating
firewall rules, refer to the
documentation for gcloud compute firewall-rules create .
CIDR range
The following steps show how to create ingress rules that restrict a
connector's access to your VPC network based on the connector's
CIDR range.
Ensure that you have the required permissions to insert firewall rules.
You must have one of the following
Identity and Access Management (IAM) roles:
Compute Security Admin role
Custom IAM role with the
compute.firewalls.create
permission enabled
Deny connector traffic across your VPC network.
Create an ingress firewall rule with priority lower than 1000 on your
VPC network to deny ingress from the connector's CIDR
range. This overrides the implicit firewall rule that
Serverless VPC Access creates on your VPC
network by default.
gcloud compute firewall-rules create RULE_NAME \
--action = DENY \
--rules = PROTOCOL \
--source-ranges = VPC_CONNECTOR_CIDR_RANGE \
--direction = INGRESS \
--network = VPC_NETWORK \
--priority = PRIORITY
Replace the following:
RULE_NAME : the name of your new firewall rule. For example,
deny-vpc-connector .
PROTOCOL : one or more protocols that you want to allow from your
VPC connector. Supported protocols are tcp or udp . For example, tcp:80,udp
allows TCP traffic through port 80 and UDP traffic. For more information, see
the documentation for the allow
flag.
For security and validation purposes, you can also
configure deny rules to block traffic for the following unsupported
protocols :
ah , all , esp , icmp , ipip , and sctp .
VPC_CONNECTOR_CIDR_RANGE : the CIDR range for the connector
whose access you are restricting
VPC_NETWORK : the name of your VPC network
PRIORITY : an integer between 0-65535. For example, 0 sets the
highest priority.
Allow connector traffic to the resource that should receive connector
traffic.
Use the allow and target-tags flags to create an ingress firewall
rule targeting the resource in your VPC network that you
want the VPC connector to access. Set the priority for
this rule to be a lower value than the priority of the rule you made in
the previous step.
gcloud compute firewall-rules create RULE_NAME \
--allow = PROTOCOL \
--source-ranges = VPC_CONNECTOR_CIDR_RANGE \
--direction = INGRESS \
--network = VPC_NETWORK \
--target-tags = RESOURCE_TAG \
--priority = PRIORITY
Replace the following:
RULE_NAME : the name of your new firewall rule. For example,
allow-vpc-connector-for-select-resources .
PROTOCOL : one or more protocols that you want to allow from your
VPC connector. Supported protocols are tcp or udp . For example, tcp:80,udp
allows TCP traffic through port 80 and UDP traffic. For more information, see
the documentation for the allow
flag.
VPC_CONNECTOR_CIDR_RANGE : the CIDR range for the connector
you whose access you are restricting
VPC_NETWORK : the name of your VPC network
RESOURCE_TAG : the network tag for the VPC
resource that you want your VPC connector to access
PRIORITY : an integer less than the priority you set in
the previous step. For example, if you set the priority for the rule
you created in the previous step to 990, try 980.
For more information about the required and optional flags for creating
firewall rules, see the
documentation for gcloud compute firewall-rules create .
Restrict access using egress rules
The following steps show how to create egress rules to restrict connector access.
Ensure that you have the required permissions to insert firewall rules. You
must have one of the following Identity and Access Management (IAM)
roles:
Compute Security Admin role
Custom IAM role with the
compute.firewalls.create
permission enabled
Deny egress traffic from your connector.
Create an egress firewall rule on your Serverless VPC Access
connector to prevent it from sending outgoing traffic, with the exception of
established responses, to any destination.
gcloud compute firewall-rules create RULE_NAME \
--action = DENY \
--rules = PROTOCOL \
--direction = EGRESS \
--target-tags = VPC_CONNECTOR_NETWORK_TAG \
--network = VPC_NETWORK \
--priority = PRIORITY
Replace the following:
RULE_NAME : the name of your new firewall rule. For example,
deny-vpc-connector .
PROTOCOL : one or more protocols that you want to allow from your
VPC connector. Supported protocols are tcp or udp . For example, tcp:80,udp
allows TCP traffic through port 80 and UDP traffic. For more information, see
the documentation for the allow
flag.
For security and validation purposes, you can also
configure deny rules to block traffic for the following unsupported
protocols :
ah , all , esp , icmp , ipip , and sctp .
VPC_CONNECTOR_NETWORK_TAG : the universal VPC
connector network tag if you want the rule to apply to all existing
VPC connectors and any VPC connectors made
in the future. Or, the unique VPC connector network tag
if you want to control a specific connector.
VPC_NETWORK : the name of your VPC network
PRIORITY : an integer between 0-65535. For example, 0 sets the
highest priority.
Allow egress traffic when the destination is in the CIDR range that you want
your connector to access.
Use the allow and destination-ranges flags to create a firewall rule
allowing egress traffic from your connector for a specific destination range.
Set the destination range to the CIDR range of the resource in your
VPC network that you want your connector to be able to access.
Set the priority for this rule to be a lower value than the priority of the
rule you made in the previous step.
gcloud compute firewall-rules create RULE_NAME \
--allow = PROTOCOL \
--destination-ranges = RESOURCE_CIDR_RANGE \
--direction = EGRESS \
--network = VPC_NETWORK \
--target-tags = VPC_CONNECTOR_NETWORK_TAG \
--priority = PRIORITY
Replace the following:
RULE_NAME : the name of your new firewall rule. For example,
allow-vpc-connector-for-select-resources .
PROTOCOL : one or more protocols that you want to allow from your
VPC connector. Supported protocols are tcp or udp . For example, tcp:80,udp
allows TCP traffic through port 80 and UDP traffic. For more information, see
the documentation for the allow
flag.
RESOURCE_CIDR_RANGE : the CIDR range for the connector whose
access you are restricting
VPC_NETWORK : the name of your VPC network
VPC_CONNECTOR_NETWORK_TAG : the universal VPC
connector network tag if you want the rule to apply to all existing
VPC connectors and any VPC connectors made
in the future. Or, the unique VPC connector network tag
if you want to control a specific connector. If you used the unique
network tag in the previous step, use the unique network tag.
PRIORITY : an integer less than the priority you set in
the previous step. For example, if you set the priority for the rule
you created in the previous step to 990, try 980.
For more information about the required and optional flags for creating firewall
rules, refer to the
documentation for gcloud compute firewall-rules create .
Manage your connector
Controlling egress traffic from a service
By default, only requests to internal IP addresses and internal DNS names are
routed through a Serverless VPC Access connector. You can
specify the egress setting for your service in your app.yaml file.
Egress settings are not compatible with the URL Fetch service.
Using the urlfetch library ignores egress settings, and requests will not
route through a Serverless VPC Access connector.
To configure the egress behavior of your App Engine service:
Add the egress_setting attribute to the vpc_access_connector field of your
service's app.yaml file:
vpc_access_connector :
name : projects/ PROJECT_ID /locations/ REGION /connectors/ CONNECTOR_NAME
egress_setting : EGRESS_SETTING
Replace:
PROJECT_ID with your Google Cloud project ID
REGION with the region your connector is in
CONNECTOR_NAME with the name of your connector
EGRESS_SETTING with one of the following:
private-ranges-only Default. Only requests to
RFC 1918 and
RFC 6598 IP address
ranges or internal DNS names are routed to your VPC
network. All other requests are routed directly to the internet.
all-traffic All outbound requests from your service are
routed to your VPC network. Requests are then subject to
the firewall, DNS, and routing rules of your VPC network.
Note that routing all outbound requests to your VPC network
increases the amount of egress handled by the
Serverless VPC Access connector and can
incur charges .
Deploy the service:
gcloud app deploy
Disconnect a service from a VPC network
To disconnect a service from a VPC network, remove the
vpc_access_connector field from the app.yaml file and re-deploy the service.
Connectors continue to incur charges even if they have no traffic and are
disconnected. For details, see pricing .
If you no longer need your connector, be sure to delete it to avoid
continued billing.
Update a connector
You can update and monitor the following attributes of your connector by using
the Google Cloud console, Google Cloud CLI, or the API:
Machine (instance) type
Minimum and maximum number of instances
Recent throughput, number of instances, and CPU utilization
Update machine type
Caution: Changing machine type can cause some long-running connections to drop.
Console
Go to the Serverless VPC Access overview page.
Go to Serverless VPC Access
Select the connector you want to edit and click Edit .
In the Instance type list, select your preferred machine (instance)
type. To learn about available machine types, see the documentation on
Throughput and scaling .
gcloud
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
To update the connector machine type, run the following command in your
terminal:
gcloud beta compute networks vpc-access connectors update CONNECTOR_NAME --region = REGION --machine-type = MACHINE_TYPE
Replace the following:
CONNECTOR_NAME : the name of your connector
REGION : the name of your connector's region
MACHINE_TYPE : your preferred machine type. To
learn about available machine types, see the documentation on
Throughput and scaling .
Decrease minimum and maximum number of instances
Note: Decreasing the number of instances for existing connectors is not
supported.
To decrease the number of minimum and maximum number of instances, you must do
the following:
Create a new connector with your preferred values.
Update your service or function to use the new connector.
Delete the old connector when you've moved its traffic.
Increase minimum and maximum number of instances
Console
Go to the Serverless VPC Access overview page.
Go to Serverless VPC Access
Select the connector you want to edit and click Edit .
In the Minimum instances field, select your preferred minimum number of
instances.
The smallest possible value for this field is the current value. The
largest possible value for this field is the current value in the
Maximum instances field minus 1. For example, if the value in the
Maximum instances field is 8, then the largest possible value for the
Minimum instances field is 7.
In the Maximum instances field, select your preferred maximum number of
instances.
The smallest possible value for this field is the current value. The
largest possible value for this field is 10.
gcloud
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
To increase the minimum or maximum number of instances for the connector,
run the following command in your terminal:
gcloud beta compute networks vpc-access connectors update CONNECTOR_NAME --region = REGION --min-instances = MIN_INSTANCES --max-instances = MAX_INSTANCES
Replace the following:
CONNECTOR_NAME : the name of your connector
REGION : the name of your connector's region
MIN_INSTANCES : your preferred minimum number of
instances.
Smallest possible value for this field is the current value of
min_instances . To find the current value, see
Find the current attribute values .
Largest possible value for this field is the current max_instances
value minus 1, because min_instances must be less than max_instances .
For example, if max_instances is 8, the largest possible value for this
field is 7. If your connector uses the default max-instances value of
10, the largest possible value of this field is 9. To find the value of
max-instances , see
Find the current attribute values .
MAX_INSTANCES :
Smallest possible value for this field is the current value of
max_instances . To find the current value, see
Find the current attribute values .
Largest possible value for this field is 10.
If you only want to increase the minimum number of instances but not the
maximum, you must still specify the maximum number of instances.
Conversely, if you only want to update the maximum number of instances but
not the minimum, you must still specify the minimum number of instances.
To keep either the minimum or maximum number of instances at their current
value, specify their current value. To find their current value, see
Find the current attribute values .
Find the current attribute values
To find the current attribute values for your connector, run the following in
your terminal:
gcloud compute networks vpc-access connectors describe CONNECTOR_NAME --region = REGION --project = PROJECT
Replace the following:
CONNECTOR_NAME : the name of your connector
REGION : the name of your connector's region
PROJECT : the name of your Google Cloud project
Monitor connector usage
Monitoring usage over time can help you determine when to adjust a connector's
settings. For example, if CPU utilization spikes, you might try increasing
the maximum number of instances for better results. Or if you are maxing out
throughput, you might decide to switch to a larger machine type.
To display charts for the connector's throughput, number of instances, and CPU
utilization metrics over time by using the Google Cloud console:
Go to the Serverless VPC Access overview page.
Go to Serverless VPC Access
Click the name of the connector you want to monitor.
Select the number of days you want to display between 1 and 90 days.
In the Throughput chart, hold the pointer over the chart to view the connector's
recent throughput.
In the Number of instances chart, hold the pointer over the chart to view the
number of instances recently used by the connector.
In the CPU Utilization chart, hold the pointer over the chart to view the
connector's recent CPU usage. The chart displays the CPU usage distributed
across instances for the 50th, 95th, and 99th percentiles.
Delete a connector
Before you delete a connector, you must remove it from any serverless resources
that still use it. Deleting a connector before removing it from your serverless
resources prohibits you from deleting the VPC network
later.
For Shared VPC users who set up connectors in the Shared VPC
host project, you can use the command
gcloud compute networks vpc-access connectors describe
to list the projects in which there are serverless resources that use a given
connector.
To delete a connector, use the Google Cloud console or the Google Cloud CLI:
Console
Go to the Serverless VPC Access overview page in the
Google Cloud console:
Go to Serverless VPC Access
Select the connector you want to delete.
Click Delete .
gcloud
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
Use the following gcloud command to delete a connector:
gcloud compute networks vpc-access connectors delete CONNECTOR_NAME --region= REGION
Replace the following:
CONNECTOR_NAME with the name of the connector you want to delete
REGION with the region where the connector is located
Manage custom constraints for projects
This section describes how to create custom constraints for Serverless VPC Access
connectors and enforce them at the project level. For information about custom
organization policies, see
Creating and managing custom organization policies .
Google Cloud Organization Policy gives you centralized, programmatic
control over your organization's resources. As the
organization policy administrator , you can define an organization policy,
which is a set of restrictions called constraints that apply to
Google Cloud resources and descendants of those resources in the
Google Cloud resource hierarchy . You can enforce organization policies at
the organization, folder, or project level.
Organization Policy provides predefined constraints for various
Google Cloud services. However, if you want more granular, customizable
control over the specific fields that are restricted in your organization
policies, you can also create custom organization policies.
Benefits
Serverless VPC Access lets you write any number of custom
constraints using most user-configured fields in the
Serverless VPC Access API. For example, you can create a custom
constraint specifying which subnets a Serverless VPC Access
connector can use.
Once applied, requests that violate a policy that enforces a custom constraint
show an error message in the gcloud CLI and in
Serverless VPC Access logs. The error message contains the
constraint ID and description of the violated custom constraint.
Note: Use the policy simulator
to check whether existing connectors in your organization are in violation
of a new custom organization policy.
Policy inheritance
By default, organization policies are inherited by the descendants of the
resources that you enforce the policy on. For example, if you enforce a policy
on a folder, Google Cloud enforces the policy on all projects in the
folder. To learn more about this behavior and how to change it, refer to
Hierarchy evaluation rules .
Limitations
Specifying machine type, minimum instances, or maximum instances is not
supported.
Before you begin
Ensure that you know your
organization ID .
Required roles
To get the permissions that
you need to manage organization policies,
ask your administrator to grant you the
Organization policy administrator ( roles/orgpolicy.policyAdmin )
IAM role on the organization resource.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Create a custom constraint
A custom constraint is defined in a YAML file by the resources, methods,
conditions, and actions that are supported by the service that you are
enforcing the organization policy on. Conditions for your custom constraints are
defined using
Common Expression Language (CEL) . For more information about how to build
conditions in custom constraints using CEL, see the CEL section of
Creating and managing custom constraints .
To create a YAML file for a Serverless VPC Access custom
constraint, refer to the following example:
name : organizations/ ORGANIZATION_ID /customConstraints/ CONSTRAINT_NAME
resourceTypes :
- vpcaccess.googleapis.com/Connector
methodTypes :
- CREATE
condition : " CONDITION "
actionType : ACTION
displayName : DISPLAY_NAME
description : DESCRIPTION
Replace the following:
ORGANIZATION_ID : your organization ID, such as
123456789 .
CONSTRAINT_NAME : the name you want for your new
custom constraint. A custom constraint must start with custom. , and can
only include uppercase letters, lowercase letters, or numbers, for
example, custom.defaultNetworkConstraint. The maximum length of this field is 70
characters, not counting the prefix.
CONDITION : a CEL condition that is written against
a representation of a supported service resource. This
field has a maximum length of 1000 characters. For example,
"resource.network == default" .
ACTION : the action to take if the condition is
met. This can be either ALLOW or DENY .
DISPLAY_NAME : a human-friendly name for the
constraint. This field has a maximum length of 200 characters.
DESCRIPTION : a human-friendly description of the
constraint to display as an error message when the policy is violated, for
example, "Require network to not be set to default."
This field has a maximum length of 2000 characters.
For more information about how to create a custom constraint, see
Defining custom constraints .
Set up a custom constraint
Console
To create a custom constraint, do the following:
In the Google Cloud console, go to the Organization policies page.
Go to Organization policies
From the project picker, select the project that you want to set the organization
policy for.
Click add Custom constraint .
In the Display name box, enter a human-readable name for the constraint. This name is
used in error messages and can be used for identification and debugging. Don't use
personally identifiable information (PII) or sensitive data in display names because this
name could be exposed in error messages. This field can contain up to 200 characters.
In the Constraint ID box, enter the ID that you want for your new custom
constraint. A custom constraint can only contain letters (including upper and lowercase) or
numbers, for example custom.defaultNetworkConstraint . This field can contain up to
70 characters, not counting the prefix ( custom. ), for example,
organizations/123456789/customConstraints/custom . Don't include PII or
sensitive data in your constraint ID, because it could be exposed in error messages.
In the Description box, enter a human-readable description of the constraint. This
description is used as an error message when the policy is violated. Include details about
why the policy violation occurred and how to resolve the policy violation. Don't include
PII or sensitive data in your description, because it could be exposed in error messages.
This field can contain up to 2000 characters.
In the Resource type box, select the name of the Google Cloud REST resource
containing the object and field that you want to restrict—for example,
container.googleapis.com/NodePool . Most resource types support up to 20 custom
constraints. If you attempt to create more custom constraints, the operation fails.
This constraint
can only be enforced on the REST CREATE method.
To see supported methods for each service, find the service in
Services that support custom constraints .
To define a condition, click edit Edit condition .
In the Add condition panel, create a CEL condition that refers to a supported
service resource, for example, resource.management.autoUpgrade == false . This
field can contain up to 1000 characters. For details about CEL usage, see
Common Expression Language .
For more information about the service resources you can use in your custom constraints,
see
Custom constraint supported services .
Click Save .
Under Action , select whether to allow or deny the evaluated method if the condition
is met.
The deny action means that the operation to create or update the resource is blocked if the
condition evaluates to true.
The allow action means that the operation to create or update the resource is permitted only
if the condition evaluates to true. Every other case except those explicitly listed in the
condition is blocked.
Click Create constraint .
When you have entered a value into each field, the equivalent YAML configuration for this
custom constraint appears on the right.
gcloud
To create a custom constraint, create a YAML file using the following format:
name : organizations/ ORGANIZATION_ID /customConstraints/ CONSTRAINT_NAME
resourceTypes : RESOURCE_NAME
methodTypes :
- CREATE
condition : " CONDITION "
actionType : ACTION
displayName : DISPLAY_NAME
description : DESCRIPTION
Replace the following:
ORGANIZATION_ID : your organization ID, such as
123456789 .
CONSTRAINT_NAME : the name that you want for your new custom
constraint. A custom constraint can only contain letters (including upper and lowercase)
or numbers, for example, custom.defaultNetworkConstraint . This field can contain up to 70
characters, not counting the prefix ( custom. )— for example,
organizations/123456789/customConstraints/custom . Don't include PII or
sensitive data in your constraint ID, because it could be exposed in error messages.
RESOURCE_NAME : the fully qualified name of the Google Cloud
resource containing the object and field that you want to restrict. For example,
vpcaccess.googleapis.com/Connector . Most resource types support up to 20 custom
constraints. If you attempt to create more custom constraints, the operation fails.
methodTypes : the REST methods that the constraint is enforced on.
Can only be
CREATE .
To see the supported methods for each service, find the service in
Services that support custom constraints .
CONDITION : a
CEL condition that is written against a representation of a supported service
resource. This field can contain up to 1000 characters. For example,
"resource.network == default" .
For more information about the resources available to write conditions against, see
Supported resources .
ACTION : the action to take if the condition is met.
Can only be ALLOW .
The allow action means that if the condition evaluates to true, the operation to create or
update the resource is permitted. This also means that every other case except the one
explicitly listed in the condition is blocked.
DISPLAY_NAME : a human-readable name for the constraint. This name
is used in error messages and can be used for identification and debugging. Don't use PII
or sensitive data in display names because this name could be exposed in error messages.
This field can contain up to 200 characters.
DESCRIPTION : a human-friendly description of the constraint to
display as an error message when the policy is violated. This field can contain up to
2000 characters.
After you have created the YAML file for a new custom constraint, you must set it up to make
it available for organization policies in your organization. To set up a custom constraint,
use the
gcloud org-policies set-custom-constraint command:
gcloud org-policies set-custom-constraint CONSTRAINT_PATH
Replace CONSTRAINT_PATH with the full path to your custom constraint
file. For example, /home/user/customconstraint.yaml .
After this operation is complete, your custom constraints are available as organization
policies in your list of Google Cloud organization policies.
To verify that the custom constraint exists, use the
gcloud org-policies list-custom-constraints command:
gcloud org-policies list-custom-constraints --organization = ORGANIZATION_ID
Replace ORGANIZATION_ID with the ID of your organization resource.
For more information, see
Viewing organization policies .
Enforce a custom constraint
You can enforce a constraint by creating an organization policy that references it, and then
applying that organization policy to a Google Cloud resource.
Console
In the Google Cloud console, go to the Organization policies page.
Go to Organization policies
From the project picker, select the project that you want to set the
organization policy for.
From the list on the Organization policies page, select your constraint to view
the Policy details page for that constraint.
To configure the organization policy for this resource, click Manage policy .
On the Edit policy page, select Override parent's policy .
Click Add a rule .
In the Enforcement section, select whether this organization policy is enforced or
not.
Optional: To make the organization policy conditional on a tag, click
Add condition . Note that if you add a conditional rule to an organization
policy, you must add at least one unconditional rule or the policy cannot be saved. For more
information, see
Scope organization policies with tags .
Click Test changes to simulate the effect of the organization policy. For more
information, see
Test organization policy changes with Policy Simulator .
To enforce the organization policy in dry-run mode, click Set dry run policy . For
more information, see
Test organization policies .
After you verify that the organization policy in dry-run mode works as intended, set the
live policy by clicking Set policy .
gcloud
To create an organization policy with boolean rules, create a policy YAML file that
references the constraint:
name : projects/ PROJECT_ID /policies/ CONSTRAINT_NAME
spec :
rules :
- enforce : true
dryRunSpec :
rules :
- enforce : true
Replace the following:
PROJECT_ID : the project that you want to enforce your constraint
on.
CONSTRAINT_NAME : the name you defined for your custom constraint. For
example, custom.defaultNetworkConstraint .
To enforce the organization policy in
dry-run mode , run
the following command with the dryRunSpec flag:
gcloud org-policies set-policy POLICY_PATH --update-mask = dryRunSpec
Replace POLICY_PATH with the full path to your organization policy
YAML file. The policy requires up to 15 minutes to take effect.
After you verify that the organization policy in dry-run mode works as intended, set the
live policy with the org-policies set-policy command and the spec
flag:
gcloud org-policies set-policy POLICY_PATH --update-mask = spec
Replace POLICY_PATH with the full path to your organization policy
YAML file. The policy requires up to 15 minutes to take effect.
Test the custom constraint
To test the example that restricts ingress settings, deploy a
connector in the project with network set to default :
gcloud compute networks vpc-access connectors create org-policy-test \
--project = PROJECT_ID \
--region = REGION_ID \
--network = default
The output is the following:
Operation denied by custom org policies: ["customConstraints/custom.defaultNetworkConstraint": "Require network to not be set to default."]
Example custom organization policies for common use cases
The following table provides examples of custom constraints that you might find
useful with Serverless VPC Access connectors:
Description
Constraint syntax
Require that Serverless VPC Access connectors can
only use a specific network.
name : organizations/ ORGANIZATION_ID /customConstraints/custom.allowlistNetworks
resourceTypes :
- vpcaccess.googleapis.com/Connector
methodTypes :
- CREATE
condition : "resource.network == 'allowlisted-network'"
actionType : ALLOW
displayName : allowlistNetworks
description : Require connectors to use a specific network.
Description
Constraint syntax
Require that Serverless VPC Access connectors have
access to only a specific subnet.
name : organizations/ ORGANIZATION_ID /customConstraints/custom.restrictSubnetForProject
resourceTypes :
- vpcaccess.googleapis.com/Connector
methodTypes :
- CREATE
condition : "resource.subnet.name == 'allocated-subnet'"
actionType : ALLOW
displayName : restrictSubnetForProject
description : This project is only allowed to use the subnet "allocated-subnet".
Troubleshooting
Service account permissions
To perform operations in your Google Cloud project,
Serverless VPC Access uses the
Serverless VPC Access Service Agent service account. This service
account's email address has the following form:
service- PROJECT_NUMBER @gcp-sa-vpcaccess.iam.gserviceaccount.com
By default, this service account has the
Serverless VPC Access Service Agent role
( roles/vpcaccess.serviceAgent ). Serverless VPC Access
operations may fail if you change this account's permissions.
Poor network performance or high idle CPU utilization
Using a single connector for thousands of instances can cause performance
degradation and elevated idle CPU utilization. To fix this, shard your services
between multiple connectors.
Issues with custom MTU
If you experience issues with a custom MTU, ensure that you
use the default MTU setting for Cloud Run .
Errors
Service account needs Service Agent role error
If you use the Restrict Resource Service Usage
organization policy constraint
to block Cloud Deployment Manager ( deploymentmanager.googleapis.com ), you
might see the following error message:
Serverless VPC Access service account (service-<PROJECT_NUMBER>@gcp-sa-vpcaccess.iam.gserviceaccount.com) needs Serverless VPC Access Service Agent role in the project.
Set the organization policy
to either remove Deployment Manager from the denylist or add it
to the allowlist.
Connector creation error
If creating a connector results in an error, try the following:
Specify an RFC 1918
internal IP range that does not overlap with any existing IP address
reservations in the VPC network.
Grant your project permission to use Compute Engine VM images from the
project with ID serverless-vpc-access-images . For more information about
how to update your organization policy accordingly, see
Set image access constraints .
Unable to access resources
If you specified a connector but still cannot access resources in your
VPC network, make sure that there are no firewall rules on your
VPC network with a priority lower than 1000 that deny ingress
from your connector's IP address range.
If you configure a connector in a Shared VPC service project ,
make sure that your firewall rules allow ingress from your serverless infrastructure to the connector .
Connection refused error
If you receive connection refused or connection timeout errors that degrade
network performance, your connections could be growing without limit across
invocations of your serverless application. To limit the maximum number of
connections used per instance, use a client library that supports connection
pools. For detailed examples of how to use connection pools, see
Manage database connections .
Resource not found error
When deleting a VPC network or a firewall rule, you might see a
message that is similar to the following: The resource
"aet-uscentral1-subnet--1-egrfw" was not found.
For information about this error and its solution, see
Resource not found error in the
VPC firewall rules documentation.
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
