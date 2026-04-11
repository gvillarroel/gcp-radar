---
title: "Configure VPC Service Controls \_|\_ Cloud Composer \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/composer-1/security-practices
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/composer-1/configure-vpc-sc
  title: "Configure VPC Service Controls \_|\_ Cloud Composer \_|\_ Google Cloud Documentation"
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
Configure VPC Service Controls
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Composer 3 | Cloud Composer 2 | Cloud Composer 1
VPC Service Controls enable organizations to define a perimeter around
Google Cloud resources to mitigate data exfiltration risks.
Cloud Composer environments can be deployed within a service
perimeter. By configuring your environment with VPC Service Controls, you
can keep sensitive data private while taking advantage of the fully-managed
workflow orchestration capabilities of Cloud Composer.
VPC Service Controls support for Cloud Composer means that:
Cloud Composer can now be selected as a secured service inside a
VPC Service Controls perimeter.
All underlying resources used by Cloud Composer are configured to
support VPC Service Controls architecture and follow its rules.
Deploying Cloud Composer environments with VPC Service Controls
gives you:
Reduced risk of data exfiltration.
Protection against data exposure due to misconfigured access controls.
Reduced risk of malicious users copying data to unauthorized
Google Cloud resources, or external attackers accessing
Google Cloud resources from the internet.
About VPC Service Controls in Cloud Composer
All VPC Service Controls network constraints also apply to your
Cloud Composer environments. See
the VPC Service Controls documentation for details.
Displaying a rendered template with functions in the web UI with DAG
serialization enabled is supported for environments running
Cloud Composer version 1.12.0 or later and Airflow version
1.10.9 or later.
Setting the async_dagbag_loader flag to True is not supported while DAG
serialization is enabled.
Enabling DAG serialization disables all Airflow web server plugins, as they
could risk the security of the VPC network where Cloud Composer
is deployed. This doesn't impact the behaviour of scheduler or worker
plugins, including Airflow operators and sensors.
If a Cloud Composer environment is protected by a perimeter,
access to public PyPI repositories is restricted. See the
Install PyPI packages in VPC Service Controls for more
information.
If your environment uses Private IP networking ,
all internal traffic is routed to your VPC network , except the traffic
to Google APIs, services, and domains that
are available to Private IP environments
through Private Google Access.
Depending on how you configure your VPC network, a Private IP
environment can gain access to the internet through you VPC network .
In VPC Service Controls mode, Cloud Composer runs two instances
of the Airflow web server. Identity-Aware Proxy load balances user traffic between
these instances. Airflow web servers run in "read-only" mode, which means:
DAG Serialization is enabled. As
a result, Airflow web server does not parse DAG files.
Plugins are not synced to the web server, so you cannot modify or extend
the web server's capabilities with plugins.
The Airflow web server uses a container image that is pre-built by
the Cloud Composer service. If you install PyPI images in
your environment, these images are not installed on the web server
container image.
Caution: In Cloud Composer 1, the web server endpoint is accessible from
outside the perimeter regardless of the access level configuration. We
recommend to protect access to the Airflow web server by
restricting access to web server to specific IP ranges .
Create environments in a perimeter
The following steps are required to deploy Cloud Composer inside
a perimeter:
Enable Access Context Manager API and Cloud Composer API for
your project. See Enabling APIs for reference.
Make sure that your service perimeter has the following VPC accessible
services, otherwise your environment might fail to create:
Cloud Composer API (composer.googleapis.com)
Compute Engine API (compute.googleapis.com)
Kubernetes Engine API (container.googleapis.com)
Container Registry API (containerregistry.googleapis.com)
Artifact Registry API (artifactregistry.googleapis.com)
Cloud Storage API (storage.googleapis.com)
Cloud SQL Admin API (sqladmin.googleapis.com)
Cloud Logging API (logging.googleapis.com)
Cloud Monitoring API (monitoring.googleapis.com)
Cloud Pub/Sub API (pubsub.googleapis.com)
Cloud Cloud Resource Manager API (cloudresourcemanager.googleapis.com)
Service Directory API (servicedirectory.googleapis.com)
Cloud Key Management Service API (cloudkms.googleapis.com), if you are using
Cloud KMS or CMEK keys.
Secret Manager API (secretmanager.googleapis.com), if you are
using Secret Manager as a secret backend.
Warning: In all versions of Cloud Composer 1, if you include Cloud
Identity-Aware Proxy API (iap.googleapis.com) or
Identity-Aware Proxy TCP API (iaptunnel.googleapis.com) in your perimeter,
then Cloud Composer environments cannot be created . To
address this issue, see
Environment creation fails in projects with VPC Service Controls enabled .
Create a new Cloud Composer environment with
Private IP enabled. Note that
this setting must be configured during the environment creation .
Use version composer-1.10.4 or later.
Make sure that DAGs serialization is
enabled. If your environment uses Cloud Composer version 1.15.0
and later, the serialization is enabled by default.
When creating your environment, remember to configure access to the
Airflow web server. To improve protection, only allow access to the
web server from specific IP ranges. For details, see
Configure web server network access .
Add an existing environment to the perimeter
You already created or configured the perimeter
as described in the previous section .
Your environment uses Private IP.
Your environments have DAG serialization enabled.
Install PyPI packages in VPC Service Controls
In the default VPC Service Controls configuration, Cloud Composer
only supports installing PyPI packages from private repositories that are
reachable from the internal IP address space of the VPC network.
Install from a private repository
The recommended configuration is to set up a private PyPI repository:
Populate it with vetted packages used by your organization, then
configure Cloud Composer to
install Python dependencies from a private repository .
Grant additional permissions for installing packages from private
repositories repositories to the service account of your environment, as
described in Access control .
Install from a public repository
Caution: When using this setup, make sure that you understand the
risks of using external repositories . Be sure that you trust the content
and integrity of any external repositories, because these connections can
potentially be used as an exfiltration vector.
Remote repository
This is the recommended approach to installing packages from a public
repository.
To install PyPI packages from repositories outside the private IP space,
follow these steps:
Create an
Artifact Registry remote repository .
Grant this repository access to upstream sources .
Configure Airflow to
install packages from an Artifact Registry repository .
Grant additional permissions for installing packages from
Artifact Registry repositories to the service account of your
environment, as described in
Access control .
External connections
To install PyPI packages from repositories outside the private IP space,
follow these steps:
Configure Cloud NAT to allow Cloud Composer
running in the private IP space to connect with external PyPI
repositories.
Configure your firewall rules to allow outbound
connections from the Composer cluster to the repository.
Configure connectivity to Google APIs and services
In a VPC Service Controls configuration, to control network traffic,
configure access to Google APIs and services through the
restricted.googleapis.com . This domain blocks access to Google APIs and
services that do not support VPC Service Controls.
Cloud Composer environments use the following domains:
*.googleapis.com is used to access other Google services.
*.pkg.dev is used to get environment images, such as when creating or
updating an environment.
*.gcr.io GKE requires connectivity to
Container Registry domain regardless of Cloud Composer version.
Note: If you do not configure DNS rules for Google APIs and services,
they are resolved using the
domain option for default domains.
Configure connectivity to the restricted.googleapis.com endpoint:
Domain
DNS name
CNAME Record
A Record
*.googleapis.com
googleapis.com.
DNS Name: *.googleapis.com.
Resource record type: CNAME
Canonical name: googleapis.com.
Resource record type: A
IPv4 addresses: 199.36.153.4 , 199.36.153.5 , 199.36.153.6 , 199.36.153.7
*.pkg.dev
pkg.dev.
DNS Name: *.pkg.dev.
Resource record type: CNAME
Canonical name: pkg.dev.
Resource record type: A
IPv4 addresses: 199.36.153.4 , 199.36.153.5 , 199.36.153.6 , 199.36.153.7
*.gcr.io
gcr.io.
DNS Name: *.gcr.io.
Resource record type: CNAME
Canonical name: gcr.io.
Resource record type: A
IPv4 addresses: 199.36.153.4 , 199.36.153.5 , 199.36.153.6 , 199.36.153.7
To create a DNS rule:
Create a new DNS zone and use DNS name as DNS name
of this zone.
Example: pkg.dev.
Add a record set for CNAME Record .
Example:
DNS Name: *.pkg.dev.
Resource record type: CNAME
Canonical name: pkg.dev.
Add a record set with for A Record :
Example:
Resource record type: A
IPv4 addresses: 199.36.153.4 , 199.36.153.5 , 199.36.153.6 , 199.36.153.7
For more information, see
Setting up private connectivity to Google APIs and services .
Configure firewall rules
If your project has non-default firewall rules, such as
rules that override
implied firewall rules , or
modify pre-populated rules in
the default network, then verify that the following firewall rules are
configured.
For example, Cloud Composer might fail to create an environment if
you have a firewall rule that denies all egress traffic. To avoid issues,
define selective allow rules that follow the list and have higher priority
than the global deny rule.
Important: Depending on how firewall rules are configured in your project, the
following list of rules might be redundant. For example, if your firewall rules
block only ingress, then you do not need the listed egress rules.
Configure your VPC network to allow traffic from your environment:
See Using firewall rules to learn how to
check, add and update rules for your VPC network.
Use
Connectivity Tool
to validate the connectivity between IP ranges.
You can use networking tags to further
limit access. You can set these tags when you create an environment.
Description
Direction
Action
Source or Destination
Protocols
Ports
DNS Configure as described in VPC Service Controls support for Cloud DNS
-
-
-
-
-
Google APIs and services
Egress
Allow
IPv4 addresses of restricted.googleapis.com that you use for Google APIs and services .
TCP
443
Environment's cluster Nodes
Egress
Allow
Environment's subnetwork primary IP address range
TCP, UDP
all
Environment's cluster Pods
Egress
Allow
Secondary IP address range for Pods in the environment's subnetwork
TCP, UDP
all
Environment's cluster Control Plane
Egress
Allow
GKE Control Plane IP range
TCP, UDP
all
Web server
Egress
Allow
Web server network IP range
TCP
3306, 3307
Caution: GKE service automatically creates a number of ingress
and egress firewall rules so that your environment's cluster functions
correctly (such as ingress and egress rules for Google Cloud Health
Checks). See
GKE Firewall Rules
page for more information and don't delete or block firewall rules created by
GKE services. You might see that your environment communicates
with the 34.126.0.0/18 IP range, which is an IP range of
Private Google Access. This traffic belongs to GKE
service used by the environment's cluster.
To obtain environment cluster's IP ranges:
Pod, Service, and Control Plane address ranges are available on
the Clusters page of your environment's cluster:
In Google Cloud console, go to the Environments page.
Go to Environments
In the list of environments, click the name of your environment.
The Environment details page opens.
Go to the Environment configuration tab.
Follow the view cluster details link.
You can see environment's
web server IP range on the Environment configuration tab.
You can see environment's
network ID on the Environment configuration tab. To get IP
ranges for a subnetwork, go to VPC Networks page and click on the
network's name to see details:
Go to VPC Networks
VPC Service Controls logs
When troubleshooting environment creation issues, you can analyze audit logs
generated by VPC Service Controls.
In addition to other log messages, you can check logs for information about
cloud-airflow-prod@system.gserviceaccount.com and
service- PROJECT_ID @cloudcomposer-accounts.iam.gserviceaccount.com
service accounts that configure components of your environments.
Cloud Composer service uses the
cloud-airflow-prod@system.gserviceaccount.com service account to manage
tenant project components of your environments.
The
service- PROJECT_ID @cloudcomposer-accounts.iam.gserviceaccount.com
service account, also known as Composer Service Agent Service Account manages
environment components in
service and host projects .
What's next
Create environments
Install PyPI packages
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
