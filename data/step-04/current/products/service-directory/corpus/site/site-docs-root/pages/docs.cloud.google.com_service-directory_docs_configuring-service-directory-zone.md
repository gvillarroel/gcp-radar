---
title: "Configure a DNS zone \_|\_ Service Directory \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-directory/docs/configuring-service-directory-zone
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/service-directory/docs
source_metadata:
  url: https://docs.cloud.google.com/service-directory/docs/configuring-service-directory-zone
  title: "Configure a DNS zone \_|\_ Service Directory \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Distributed, hybrid, and multicloud
Service Directory
Guides
Send feedback
Configure a DNS zone
Stay organized with collections
Save and categorize content based on your preferences.
You can create a Service Directory zone that allows your
Google Cloud-based services to query your Service Directory namespace
using Cloud DNS.
These instructions require that you already have a Service Directory
namespace in place. If you do not, first create a namespace using the
procedure in Configuring
Service Directory .
Once you have attached a Service Directory zone to the namespace, all
services and endpoints within the namespace become available over DNS on the
private network. All service and endpoint updates are immediately reflected in
their DNS records. However, the service and the endpoint are not available
over DNS.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or the following IAM roles.
Permissions
servicedirectory.namespaces.associatePrivateZone
Roles
servicedirectory.admin
servicedirectory.editor
Note: Service visibility ( who is authorized to look up a service) changes once
a Service Directory private zone is assigned to a namespace. The network, not IAM, determines the access when responding to DNS
queries. For more details, see Roles and permissions .
Limitations
Service Directory integration with Cloud DNS has the following
limitations:
You can only associate a Service Directory zone with a namespace when you
create the zone.
A Service Directory zone must be in the same project as the Service Directory
namespace that it is associated with.
A Service Directory zone cannot also be a forwarding zone, a regular private
zone, or a public zone.
Create a Service Directory zone backed by a namespace
You can only associate a Service Directory zone with a namespace when you
create the zone. A Service Directory zone cannot also be a forwarding zone,
a regular private zone, or a public zone.
Console
Go to the Cloud DNS page in the Google Cloud console.
Go to Cloud DNS
Click Create zone .
In the Zone type section, click Private .
Enter a name for the zone.
Enter a DNS name for the zone.
Under Options , select Use a service directory namespace .
Under Networks , select one or more networks that can use the
Service Directory zone.
Select the Region where the namespace that you want to link lives.
Select the Namespace that you want to link.
Click Create .
gcloud
gcloud dns managed-zones create SD_ZONE \
--dns-name DNS_NAME \
--description DESCRIPTION \
--visibility private \
--networks https://www.googleapis.com/compute/v1/projects/ project_ID /global/networks/ network \
--service-directory-namespace https://servicedirectory.googleapis.com/v1/projects/ project_ID /locations/ region /namespaces/ namespace-name
Replace the following values:
SD_ZONE : the name of the Service Directory zone that you
are creating.
DNS_NAME : the DNS name, such as
us-east1.example.com. , for the new zone.
DESCRIPTION : a description of the zone, such as this zone
is backed by Service Directory .
https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /global/networks/ NETWORK :
the FQDN of the networks that can use the zone.
https://www.servicedirectory.googleapis.com/v1/projects/ PROJECT_ID /locations/ REGION /registries/ NAMESPACE_NAME :
the FQDN of the namespace that you are linking.
Note: You can associate only one Service Directory zone with a given
namespace, and you cannot associate a given zone with multiple namespaces. You
must create the Cloud DNS zone and the Service Directory namespace
in the same project.
Delete the Service Directory zone
At any point, you can delete a Service Directory zone. This deletion
happens through Cloud DNS and has no effect on any associated
Service Directory namespaces. The associated namespace continues to be
available for look up through HTTP and gRPC. For more information, see
Delete a managed zone .
You can delete a
service
or namespace that has a Service Directory zone pointing to it without
deleting the zone. If you do, any further DNS queries for that service return
NXDOMAIN .
What's next
To learn how to secure Service Directory in a service
perimeter, see Service Directory and VPC Service Controls .
To get an overview of Service Directory, see the
Service Directory overview .
To find solutions for common issues that you might encounter when using
Service Directory, see Troubleshooting .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
