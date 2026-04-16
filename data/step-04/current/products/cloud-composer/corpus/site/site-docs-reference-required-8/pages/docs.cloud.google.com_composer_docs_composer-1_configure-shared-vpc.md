---
title: "Configure Shared VPC networking \_|\_ Cloud Composer \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc
knowledge_key: corpus
source_id: site-docs-reference-required-8
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/composer-1/known-issues
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/composer-1/configure-shared-vpc
  title: "Configure Shared VPC networking \_|\_ Cloud Composer \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

On September 15, 2026 , all Cloud Composer 1 versions and versions 2.0.x of Cloud Composer 2 will reach their planned end of life . You will not be able to use environments with these versions. We recommend planning migration to Cloud Composer 3 . Cloud Composer 2 versions 2.1.x and later are still supported and are not impacted by this change.
Home
Documentation
Data analytics
Cloud Composer
Composer 1 Guides
Send feedback
Configure Shared VPC networking
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Composer 3 | Cloud Composer 2 | Cloud Composer 1
This page describes the Shared VPC network and host project requirements for
Cloud Composer.
Shared VPC enables organizations to establish
budgeting and access control boundaries at the project level while
allowing for secure and efficient communication using
private IPs across those boundaries.
In the Shared VPC configuration, Cloud Composer can invoke services hosted
in other Google Cloud projects in the same organization without exposing
services to the public internet.
Guidelines for Shared VPC
Figure 1. Service and host projects for
Cloud Composer
Shared VPC requires that you designate a host project to which networks
and subnetworks belong and a service project , which is attached to the
host project.
When Cloud Composer participates in a Shared VPC,
the Cloud Composer environment is in the service project.
To set up Shared VPC, select the following IP ranges in the host project:
Primary IP Range of the subnet used by GKE nodes that
Cloud Composer uses as its Compute Engine layer.
Secondary IP Range for GKE services.
Secondary IP Range for GKE pods.
Secondary IP Ranges cannot overlap with any other secondary ranges in
this VPC.
Ensure that secondary ranges are large enough to
accommodate the cluster's size and
your environment scaling .
See Creating a VPC-native cluster for guidelines on
configuring secondary ranges for pods and
services .
Caution: You can create
user-managed secondary ranges with mask values
that are up to /28 . This gives you a range with only 16 IP addresses,
which is not enough for pods of your environment's cluster. For
a Cloud Composer environment,
the minimum recommended range for Pods is /23 . This range can
support only a single small environment with a single scheduler and three
workers. The minimum range does not allow you to
scale the environment up later or use the same range for more than one
environment . Consider using a broader range (less than /23 ). You must
also use at least a /27 range for services. The 172.17.0.0/16 range
is reserved in Cloud SQL .
The primary address range of the subnet
should accommodate anticipated growth and account for the
unusable IP addresses .
If you use the IP Masquerate Agent and
the Private IP configuration for your environments, then
add the IP ranges of Nodes and Pods to the nonMasqueradeCIDRs section of
the ip-masq-agent ConfigMap. For more information, see
Configuring an IP masquerade agent .
Preparation
Find the following project IDs and project numbers :
Host project: The project that contains the Shared VPC network.
Service project: The project that contains
the Cloud Composer environment.
Prepare your organization .
Enable the GKE API in
your host and service projects.
If you create an environment in the service project using
Google Cloud console, then your account must have
the compute.subnetworks.use permission in the host project.
Otherwise, the list of available subnetworks does not contain subnetworks
from the host project. If you create an environment using gcloud , API,
or Terraform, then your account does not need this additional permission.
Configure the service project
If Cloud Composer environments were never created in the service
project, then provision the Composer Service Agent Account
in the service project :
gcloud beta services identity create --service = composer.googleapis.com
Configure the host project
Configure the host project as described further.
Caution: Do all of the described actions in the host project . For example,
if you add roles to a service account from the service
project, assign them in the host project's IAM configuration.
(Private IP) Enable Private Google Access
If you plan to use Private IP environments ,
then enable Private Google Access for the subnet in the host
project. You can do so on the next step, when you configure networking
resources for a new or an already existing subnet.
If you plan to use Public IP environments , we still recommend
enabling Private Google Access for the subnet in the host
project. If you choose not to use Private Google Access, then make sure you are
not blocking traffic that otherwise the
Implied IPv4 allow egress Firewall rule would
allow. This is required to reach *.googleapis.com endpoints successfully.
Configure networking resources
Choose one of the following options to allocate and configure networking
resources. For each option, you must name the secondary IP ranges for pods
and services.
Option 1. Create a new VPC network, subnet, and two secondary IP ranges .
When creating the subnet, use the Primary IP Range following
the guidelines .
When defining the subnet, define two secondary IP ranges for pods and
services.
Option 2. Create a subnet and two secondary IP ranges in an existing VPC .
When creating the subnet, use the Primary IP Range
following the guidelines .
When defining the subnet, define two secondary IP ranges for pods
and services.
Option 3. Create two secondary IP ranges in an existing subnet and VPC network .
Define two secondary IP ranges for Pods and Services following
the guidelines . Avoid name and IP range
conflicts with existing secondary ranges.
Set up Shared VPC and attach the service project
If not already done, Set up Shared VPC . If
you already have set up Shared VPC, skip to the next step.
Attach the service project , which you
use to host Cloud Composer environments.
When attaching a project, leave the default VPC Network permissions
in place.
Grant permissions to the Composer Service Agent account
Warning: On this and next steps, when editing permissions, keep the
existing account roles. Add another role to an account instead of replacing an
existing role.
In the host project:
Edit permissions for the Composer Service Agent account,
service- SERVICE_PROJECT_NUMBER @cloudcomposer-accounts.iam.gserviceaccount.com )
For this account, add another role on the project level:
For Private IP environments, add
the Composer Shared VPC Agent role.
For Public IP environments, add the Compute Network User role.
Grant permissions to the Google API Service Agent account
In the host project:
Edit permissions for the Google API Service Agent account,
SERVICE_PROJECT_NUMBER @cloudservices.gserviceaccount.com .
Add another role, Compute Network User ( compute.networkUser )
at the project level. This is a
requirement for managed instance groups used with Shared VPC
because this type of service account performs tasks such as instance
creation.
Edit permissions for GKE service accounts
In the host project, edit permissions for the GKE
service accounts,
service- SERVICE_PROJECT_NUMBER @container-engine-robot.iam.gserviceaccount.com .
For each service account,
add another role, compute.networkUser using one of
the following options:
Grant this role at the subnet level to allow a service account to set up the
VPC peerings required by Cloud Composer. In this case, explicitly
specify the subnetwork to be used by the environment, because the
environment's cluster might lack permissions to find the subnetwork within
the network.
Grant this role at the project level for the whole host project. In this
case, the service project's GKE service account has
permissions to use any subnet in the host project.
Edit permissions for the GKE Service Account of the service project
In the host project, edit permissions for the
GKE Service Account of the service project .
For this account, add another role on the project level,
Kubernetes Engine Host Service Agent User
( roles/container.hostServiceAgentUser ).
This allows the GKE Service Account of the service project to
use the GKE Service Account of the host project to configure
shared network resources.
(Private IP, optional) Configure firewall rules and connectivity to Google domains
In a Shared VPC configuration with Private IP environments, as an option,
you might want to route all traffic to Google APIs and services through
several IP addresses that belong to the private.googleapis.com domain and
configure corresponding firewall rules. In this configuration, your
environment accesses Google APIs and services through IP addresses only
routable from within Google Cloud. If your Shared VPC configuration uses
VPC Service Controls, then route traffic through restricted.googleapis.com
instead.
Caution: In a Shared VPC configuration, configure connectivity and firewall
rules in the host project , not in the service project where your
environments are located.
If your Shared VPC configuration uses Private IP environments:
(Optional) Configure connectivity to Google APIs and services .
(Optional) Configure firewall rules .
If your Shared VPC configuration uses VPC Service Controls, use
instructions for environments with VPC Service Controls instead:
Configure connectivity to Google APIs and services .
Configure firewall rules
Conclusion
You've completed the Shared VPC network configuration for both service and host
projects.
Now you can create new environments in the service project that use the host
project's VPC network.
What's next
Create a Cloud Composer environment and provide
the host project's network and subnetwork as configuration parameters.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
