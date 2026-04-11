---
title: "Register an internal load balancer \_|\_ Service Directory \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/service-directory/docs/configuring-ilb-in-sd
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-directory/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/service-directory/docs/configuring-ilb-in-sd
  title: "Register an internal load balancer \_|\_ Service Directory \_|\_ Google\
    \ Cloud Documentation"
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
Register an internal load balancer
Stay organized with collections
Save and categorize content based on your preferences.
This page provides information about how to configure an
internal passthrough Network Load Balancer or an
internal Application Load Balancer
( Preview ) so that it is
automatically registered in Service Directory.
When you create your load balancer, you can register it as an endpoint in an
existing Service Directory namespace and service of your choice. Client
applications can then use Service Directory (using HTTP or gRPC) and/or
DNS (if you have created a
Service Directory DNS
zone )
to resolve the address of the internal load balancer service and connect to it
directly.
Permissions required for this task
To perform this task, you must have been granted the following permissions
and IAM roles.
Permissions
servicedirectory.endpoints.create
servicedirectory.endpoints.delete
Roles
roles/compute.networkAdmin
roles/compute.securityAdmin
roles/compute.instanceAdmin
Limitations
Service Directory integration with internal load balancing has the following
limitations:
Automatic registration only applies to internal and network load balancers.
You can register Google Kubernetes Engine load balancing services using the
GKE
integration . You can register
global load balancers, and Google Kubernetes Engine
ingresses and gateways by calling the Service Directory
API .
You can use automatic registration only at the time of forwarding rule
creation. Automatic registration using Google Cloud CLI update for an already
existing forwarding rule is not available.
You can register internal load balancers to Service Directory in the host or
service projects of a shared VPC network setup. However,
all load balancing components and backends must exist in the same project.
For more details, see the internal load balancing
limitations .
Service Directory does not provide connectivity, which means that although
Service Directory stores the virtual IP address of the internal load balancer,
looking up the internal load balancer in Service Directory does not guarantee
that you can connect to the virtual IP address.
Before you begin
These instructions require the following:
You must already have a Service Directory namespace and service in place.
If you do not, create a namespace and service using
the procedure in Configuring Service Directory .
The Service Directory namespace and service must be in the
same project and region as the internal load balancer forwarding rule that
you are creating.
You must already have set up the necessary
resources to create an internal load balancer forwarding rule.
For information about how to create an internal passthrough Network Load Balancer,
see Set up an
internal passthrough Network Load Balancer .
For information about how to create an internal Application Load Balancer,
see Set up an
internal Application Load Balancer .
Set up forwarding rules to register an internal load balancer in Service Directory
You must set up a forwarding rule to register the internal load balancer in
Service Directory. To register either an internal passthrough Network Load Balancer or an
internal Application Load Balancer, see the following sections.
Register an internal passthrough Network Load Balancer
To register an internal passthrough Network Load Balancer, run the gcloud compute forwarding-rules
create command and
set the service-directory-registration flag:
gcloud compute forwarding-rules create FORWARDING_RULE_NAME \
--region= REGION \
--load-balancing-scheme=INTERNAL \
--network= NETWORK_NAME \
--subnet= SUBNET_NAME \
--address= RESERVED_IP_ADDRESS \
--ip-protocol= PROTOCOL_TYPE \
--ports= PORT_NUMBER \
--backend-service= BACKEND_SERVICE_NAME \
--backend-service-region= REGION \
--service-directory-registration= SD_SERVICE_NAME
Replace the following:
FORWARDING_RULE_NAME : a name for the forwarding rule
that you want to create
REGION : the region to create the forwarding rule in
NETWORK_NAME : the network that this forwarding rule applies
to
SUBNET_NAME : the subnetwork that this forwarding rule
applies to
RESERVED_IP_ADDRESS : the IP address that the forwarding
rule serves
PROTOCOL_TYPE : the IP protocol that the rule will serve
PORT_NUMBER : a list of comma-separated ports
BACKEND_SERVICE_NAME : target backend service that
receives the traffic
SD_SERVICE_NAME : the fully qualified name of the
Service Directory service where you want to register the endpoint. It must
live in the same project and region as the forwarding rule being created.
For example:
projects/ PROJECT /locations/ REGION /namespaces/ NAMESPACE_NAME /services/ SERVICE_NAME .
Register an internal Application Load Balancer
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
To register a regional internal Application Load Balancer, run the gcloud compute forwarding-rules
create command and
set the service-directory-registration flag:
gcloud beta compute forwarding-rules create FORWARDING_RULE_NAME \
--region= REGION \
--load-balancing-scheme=INTERNAL_MANAGED \
--network= NETWORK_NAME \
--address= RESERVED_IP_ADDRESS \
--target-https-proxy= PROXY_NAME \
--target-https-proxy-region= PROXY_REGION \
--ports= PORT_NUMBER \
--service-directory-registration= SD_SERVICE_NAME
Replace the following:
FORWARDING_RULE_NAME : a name for the forwarding rule
that you want to create
REGION : the region to create the forwarding rule in
NETWORK_NAME : the network that this forwarding rule
applies to
RESERVED_IP_ADDRESS : the IP address that the forwarding
rule serves
PROXY_NAME : the target proxy that receives the traffic
PROXY_REGION : the region of the proxy to operate on
PORT_NUMBER : a list of comma-separated ports
SD_SERVICE_NAME : the fully qualified name of the
Service Directory service where you want to register the endpoint. This
service must be in the same project and region as the forwarding rule being
created.
For example:
projects/ PROJECT /locations/ REGION /namespaces/ NAMESPACE_NAME /services/ SERVICE_NAME .
Verify the endpoint
One or more Service Directory endpoints that are created when you register an
internal load balancer have the following characteristics:
The endpoint has the same name as the name of the forwarding rule with the
specified port number ( <forwarding rule name>-<port> ). For example, if you
create a forwarding rule RULE with --port=8080 , you get an endpoint called
RULE-8080 . For the same rule, if you specified two ports --port=8080, 8081 ,
you get two endpoints, RULE-8080 and RULE-8081 . If you specify --port=ALL ,
the Service Directory endpoint is registered with port 0 . If you are
the internal load balancer owner, you must ensure that the API caller knows
what port to connect on.
You cannot modify or delete the endpoint using the public Service Directory
API. Only when you delete the forwarding rule does the endpoint get
automatically deleted. This means that you cannot delete the service and
namespace that the endpoint resides in while the forwarding rule exists.
The endpoint itself is not billed, although normal pricing details apply to
any API calls to the endpoint.
To confirm that the endpoint is created, resolve the service in Service Directory.
You should see an endpoint with the same name as the name of the
forwarding rule with the specified port number.
To resolve the service in Service Directory, do the following:
gcloud
Run the gcloud service-directory services
resolve
command:
gcloud service-directory services resolve SD_SERVICE_NAME \
--namespace= SD_NAMESPACE_NAME \
--location= REGION
Replace the following:
SD_SERVICE_NAME : the name of the Service Directory
service to resolve. It must live in the Service Directory namespace name.
SD_NAMESPACE_NAME : the name that you gave the namespace
containing your service.
REGION : the Google Cloud region containing the
namespace. This should be the same as the region that you created the
forwarding rule in.
Optional: Create a Service Directory zone using Cloud DNS
You can resolve Service Directory endpoints that are registered through this
integration using DNS like any other Service Directory endpoint. To create a
Service Directory zone using Cloud DNS, see Configuring
a Service Directory zone .
To check that your zone is set up correctly, you can run a DNS query of your
Service Directory zone. For instructions about how to query using DNS, see
Querying using DNS . If your zone is
configured correctly, you should see the IP address of your internal load
balancer in the command output.
Cleanup
To delete the resources that you created, do the following:
gcloud
To delete the forwarding rule, run the gcloud compute forwarding-rules
delete
command:
gcloud compute forwarding-rules delete FORWARDING_RULE_NAME \
--region= REGION \
Replace the following:
FORWARDING_RULE_NAME : the name of the forwarding rule
that you created
REGION : the region for the forwarding rule
For further details, see Deleting a forwarding
rule .
To confirm that deleting the forwarding rule has automatically deleted the
endpoint from Service Directory, run the gcloud service-directory
services resolve
command described in Verifying the endpoint
section on your Service Directory service.
To delete the zone, if you created one, follow the instructions in
Delete a managed zone .
Note: You do not need to delete the records (mentioned in
step 1) before deleting
the zone as Service Directory controls the records for Service Directory
zones.
To delete the Service Directory namespace and service, see Deleting
resources .
What's next
To get an overview of Service Directory, see the
Service Directory overview .
To find solutions for common issues that you might encounter when using
Service Directory, see Troubleshooting .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
