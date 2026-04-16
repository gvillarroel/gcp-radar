---
title: "Configure VPC Service Controls \_|\_ Cloud Composer \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/composer-3/configure-vpc-sc
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/composer-3/configure-vpc-sc
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
Composer 3 Guides
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
Cloud Composer doesn't support using
third-party identities in
ingress and egress rules to allow Apache Airflow UI
operations. However, you can use the ANY_IDENTITY
identity type in ingress and egress rules to allow access to all identities,
including third-party identities. For more information about the
ANY_IDENTITY identity type, see
Ingress and egress rules .
In VPC Service Controls mode, access to web server is protected by the
perimeter and access from outside of the perimeter is blocked. To allow
access from outside the service perimeter, configure
access levels or
ingress and egress rules as required. In addition,
you can
restrict access to web server to specific IP ranges .
About connectivity to Google APIs and services in VPC Service Controls
Cloud Composer 3 routes traffic to Google services through
restricted.googleapis.com , which enables access to Google APIs, services, and
domains supported by this range.
Caution: If your environment is attached to a VPC network ,
all internal traffic that isn't routed to restricted.googleapis.com
is routed to the VPC network . Depending on how you configure your VPC
network, your environment
can gain access to the internet through you VPC network .
For more information and the list of services and domains available
through restricted.googleapis.com , see
Network configuration in the Virtual Private Cloud
documentation.
Cloud Composer 3 environments block calls to Google APIs, services, and
domains that aren't in the
list of required APIs and services . If you want to
call an API from a DAG:
Make sure that the service
supports VPC Service Controls .
Add the service to restricted services.
Add the service to VPC accessible services.
For example, if you use a VertexAI Operator, add aiplatform.googleapis.com
both to restricted services and to VPC accessible services.
For more information about adding services to a perimeter, see
Manage service perimeters
in the VPC Service Controls documentation.
In Cloud Composer 3, services that don't
support VPC Service Controls
and aren't available through restricted.googleapis.com can't be accessed
from environments protected with VPC Service Controls. This restriction was
added in Cloud Composer 3 to enhance environment's security. While
Cloud Composer 2 allows configuring access to such unsupported services, we
strongly recommend to avoid doing so in any environment protected by
VPC Service Controls.
Create environments in a perimeter
The following steps are required to deploy Cloud Composer inside
a perimeter:
Enable Access Context Manager API and Cloud Composer API for
your project. See Enabling APIs for reference.
Create a perimeter by following the
perimeter configuration instructions in
the VPC Service Controls documentation. Make sure that the list of
restricted services includes all services used by
Cloud Composer, in addition to other services that you want to
restrict:
Cloud Composer API (composer.googleapis.com)
Artifact Registry API (artifactregistry.googleapis.com)
Compute Engine API (compute.googleapis.com)
Kubernetes Engine API (container.googleapis.com)
Container File System API (containerfilesystem.googleapis.com)
Cloud DNS API (dns.googleapis.com)
Service Account Credentials API (iamcredentials.googleapis.com)
Cloud Logging API (logging.googleapis.com)
Cloud Monitoring API (monitoring.googleapis.com)
Cloud Pub/Sub API (pubsub.googleapis.com)
Cloud SQL Admin API (sqladmin.googleapis.com)
Cloud Storage API (storage.googleapis.com)
For all other services used by your DAGs:
Add the service to restricted services.
Add the service to VPC accessible services.
Create a new Cloud Composer environment:
Use Google Cloud CLI to create your environment.
Enable Private IP with the --enable-private-environment argument.
Specify access parameters for the web server with
--web-server-allow-all , --web-server-allow-ip , or
--web-server-deny-all arguments. For more information about using
these arguments, see
Create environments . To improve
protection, only allow access to the web server from specific
IP ranges.
Disallow the installation of packages from public internet repositories
with the --enable-private-builds-only argument.
Example:
gcloud composer environments create example-environment \
--location us-central1 \
--enable-private-environment \
--web-server-allow-all \
--enable-private-builds-only
By default, access to Airflow UI and API is only allowed from within the
security perimeter. If you want to make it available outside of the security
perimeter, then configure access levels or
ingress and egress rules .
Add an existing environment to the perimeter
You can add the project containing your environment to a perimeter if your
environments use Private IP and the installation of PyPI packages from public
repositories is disabled.
To update an existing Cloud Composer 3 environment to this configuration:
Make sure that you already created or configured the perimeter
as described in the previous section .
Use Google Cloud CLI to update your environment.
Enable Private IP with the --enable-private-environment argument.
Disallow the installation of packages from public internet repositories
with the --enable-private-builds-only argument.
If required,
configure access to the Airflow web server .
To improve protection, only allow access to the web server from specific
IP ranges.
Example:
gcloud composer environments update example-environment \
--location us-central1 \
--enable-private-environment \
--enable-private-builds-only
Install PyPI packages in VPC Service Controls
In the default VPC Service Controls configuration, Cloud Composer
only supports installing PyPI packages from private repositories that are
reachable from the internal IP address space of the VPC network.
All Cloud Composer environments within a VPC Service Controls
perimeter don't have access to public PyPI repositories by default.
Install from a private repository
The recommended configuration is to set up a private PyPI repository:
Populate it with vetted packages used by your organization, then
configure Cloud Composer to
install Python dependencies from a private repository .
Install from a public repository
Caution: When using this setup, make sure that you understand the
risks of using external repositories . Be sure that you trust the content
and integrity of any external repositories, because these connections can
potentially be used as an exfiltration vector.
To install PyPI packages from an external repository:
Create an
Artifact Registry remote repository .
Grant this repository access to upstream sources .
Configure Airflow to
install packages from an Artifact Registry repository .
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
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
