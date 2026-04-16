---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:47.455Z"
product_name: "Service Directory"
product_slug: "service-directory"
feature_name: "Service Directory external TCP/UDP load balancer configuration"
feature_slug: "service-directory-external-tcp-udp-load-balancer-configuration"
latest_feature_date: "2021-12-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-directory/docs/configuring-netlb-in-sd"
  - "https://docs.cloud.google.com/service-directory/docs/configuring-private-network-access"
  - "https://docs.cloud.google.com/service-directory/docs/sd-lb-overview"
  - "https://docs.cloud.google.com/service-directory/docs/sd-gke-overview"
keywords:
  - "directory"
  - "external"
  - "tcp"
  - "udp"
  - "load"
  - "balancer"
  - "configuration"
  - "supports"
---

# Service Directory external TCP/UDP load balancer configuration

Product: Service Directory
Coverage: MEDIUM

## Step 02 Summary

Service Directory supports configuring an external TCP/UDP load balancer.

## Extended Definition

Service Directory supports configuring an external TCP/UDP load balancer.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-directory/docs/configuring-netlb-in-sd](https://docs.cloud.google.com/service-directory/docs/configuring-netlb-in-sd)
- [https://docs.cloud.google.com/service-directory/docs/configuring-private-network-access](https://docs.cloud.google.com/service-directory/docs/configuring-private-network-access)
- [https://docs.cloud.google.com/service-directory/docs/sd-lb-overview](https://docs.cloud.google.com/service-directory/docs/sd-lb-overview)
- [https://docs.cloud.google.com/service-directory/docs/sd-gke-overview](https://docs.cloud.google.com/service-directory/docs/sd-gke-overview)

## Supporting Pages

### "Register an external passthrough Network Load Balancer \_|\_ Service Directory\

- URL: [https://docs.cloud.google.com/service-directory/docs/configuring-netlb-in-sd](https://docs.cloud.google.com/service-directory/docs/configuring-netlb-in-sd)
- Source ID: `site-iam-reference`
- Final score: 207
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permissions servicedirectory.endpoints.create servicedirectory.endpoints.delete Roles roles/compute.networkAdmin roles/compute.securityAdmin roles/compute.instanceAdmin Limitations Service Directory integration with external passthrough Network Load Balancers has the following limitations: Automatic registration only supports external Layer 4 load balancers.
- Register an external passthrough Network Load Balancer To register a regional external passthrough Network Load Balancer, run the gcloud compute forwarding-rules create command and set the service-directory-registration flag: gcloud beta compute forwarding-rules create FORWARDING RULE NAME \ --region= REGION \ --load-balancing-scheme=EXTERNAL \ --address= RESERVED IP ADDRESS \ --ip-protocol= PROTOCOL TYPE \ --ports= PORT NUMBER \ --backend-service= BACKEND SERVICE NAME \ --backend-service-region= REGION \ --service-directory-registration= SD SERVICE NAME Replace the following: FORWARDING RULE NAME : a name for the forwarding rule that you want to create REGION : the region to create the forwarding rule in RESERVED IP ADDRESS : the IP address that the forwarding rule serves PROTOCOL TYPE : the IP protocol that the rule is to serve PORT NUMBER : a list of comma-separated ports BACKEND SERVICE NAME : the target backend service that receives the traffic SD SERVICE NAME : the fully qualified name of the Service Directory service where you want to register the endpoint.
- Service Directory does not provide connectivity, which means that although Service Directory stores the virtual IP address of the external passthrough Network Load Balancer, looking up the external passthrough Network Load Balancer in Service Directory does not guarantee that you can connect to the virtual IP address.
- Verify the endpoint The Service Directory endpoints that are created when you register an external passthrough Network Load Balancer have the following characteristics: The endpoint has the same name as the name of the forwarding rule with the specified port number ( <forwarding rule name>-<port> ).

### "Configure private network access \_|\_ Service Directory \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-directory/docs/configuring-private-network-access](https://docs.cloud.google.com/service-directory/docs/configuring-private-network-access)
- Source ID: `site-docs-root`
- Final score: 172
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If the target is an internal Application Load Balancer or an internal proxy Network Load Balancer, firewall rules must permit TCP traffic from the 35.199.192.0/19 range to the IP address and ports used by the load balancer.
- If the target is a VM or an internal passthrough Network Load Balancer, firewall rules must permit TCP traffic from the 35.199.192.0/19 range to the ports used by the software running on the target VM instances.
- Configure the Service Directory project To configure the Service Directory project, follow these steps: In the VPC network, create a VM or an internal load balancer .
- In this use case, you create the following artifacts in the same project: A VPC network A VM A Service Directory service Dialogflow CX Figure 1 shows how you can allow a Google service configuration of a project to egress to a VM.

### Service Directory and load balancers \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-directory/docs/sd-lb-overview](https://docs.cloud.google.com/service-directory/docs/sd-lb-overview)
- Source ID: `site-docs-root`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For instructions about how to register a network load balancer in Service Directory, see Configure an external passthrough Network Load Balancer in Service Directory .
- Registering your load balancer with Service Directory lets you do the following: Choose custom DNS names to serve the network locations of your internal load balancers as opposed to DNS accessing your internal load balancer only through an internally generated DNS name in the .internal domain.
- Home Documentation Distributed, hybrid, and multicloud Service Directory Guides Send feedback Service Directory and load balancers Stay organized with collections Save and categorize content based on your preferences.
- This enables client applications to use Service Directory through HTTP, gRPC, or DNS to resolve the address of the load balancer service and connect to it directly.

### Service Directory for GKE overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-directory/docs/sd-gke-overview](https://docs.cloud.google.com/service-directory/docs/sd-gke-overview)
- Source ID: `site-iam-reference`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Service Directory property GKE property Service name Service name Endpoint name Auto-generated by Service Directory Controller Endpoint IP address LoadBalancer ingress Endpoint port LoadBalancer service port Endpoint network VPC network of the cluster The following is an example of a GKE LoadBalancer service: apiVersion : v1 kind : Service metadata : name : hello - app annotations : cloud . google . com / load - balancer - type : "Internal" labels : app : hello - app sd - import : "true" spec : ports : - port : 80 targetPort : 8080 protocol : TCP selector : app : hello - app type : LoadBalancer status : loadBalancer : ingress : - ip : 10.140 .
- Service Directory property GKE property Service name Service name Endpoint name Auto-generated by Service Directory Controller Endpoint IP address Node internal IP address for each node that runs a pod for the service Endpoint port Static node port Endpoint network VPC network of the cluster The following is an example of a GKE NodePort service: apiVersion : v1 kind : Service metadata : name : hello - app annotations : key1 : "value1" spec : ports : - nodePort : 30007 port : 80 targetPort : 8080 protocol : TCP selector : app : hello - app type : NodePort The following is an example of GKE nodes: apiVersion : v1 items : - apiVersion : v1 kind : Node metadata : name : gke - hello - cluster - default - pool - a40cbab6 - d2rr status : addresses : - address : 10.142.0.27 type : InternalIP - address : 34.73.248.170 - apiVersion : v1 kind : Node metadata : name : gke - hello - cluster - default - pool - a40cbab6 - kb38 status : addresses : - address : 10.142.0.29 type : InternalIP - address : 35.196.219.215 type : ExternalIP - apiVersion : v1 kind : Node metadata : name : gke - hello - cluster - default - pool - a40cbab6 - x34q status : addresses : - address : 10.142.0.28 type : InternalIP - address : 34.75.202.26 type : ExternalIP The following is an example of a Service Directory service: service : endpoints : - address : 10.142.0.27 metadata : key1 : value1 name : projects / my - project / locations / us - central1 / namespaces / default / services / hello - app / endpoints / gke - hello - cluster - 12345 port : 30007 network : projects / my - project / locations / global / networks / default - address : 10.142.0.28 metadata : key1 : value1 name : projects / my - project / locations / us - central1 / namespaces / default / services / hello - app / endpoints / gke - hello - cluster - 23456 port : 30007 network : projects / my - project / locations / global / networks / default - address : 10.142.0.29 metadata : key1 : value1 name : projects / my - project / locations / us - central1 / namespaces / default / services / hello - app / endpoints / gke - hello - cluster - 34567 port : 30007 network : projects / my - project / locations / global / networks / default name : projects / my - project / locations / us - central1 / namespaces / default / services / hello - app ClusterIP service The following example shows how a GKE ClusterIP service is mapped to Service Directory.
- 0.5 metadata : cloud . google . com / load - balancer - type : "Internal" name : projects / my - project / locations / us - central1 / namespaces / default / services / hello - app / endpoints / gke - hello - cluster - 12345 port : 80 network : projects / my - project / locations / global / networks / default name : projects / my - project / locations / us - central1 / namespaces / default / services / hello - app NodePort service type The following example shows how a GKE NodePort Service is mapped to Service Directory.
- Top level properties Service Directory property GKE property Project Fleet project Region Region of the cluster Namespace Kubernetes namespace LoadBalancer service type The following example shows how a GKE LoadBalancer service is mapped to Service Directory.

