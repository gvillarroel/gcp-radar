---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:18:47.454Z"
product_name: "Service Directory"
product_slug: "service-directory"
feature_name: "Service Directory integration with Traffic Director"
feature_slug: "service-directory-integration-with-traffic-director"
latest_feature_date: "2022-02-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/service-directory/docs/configuring-ilb-in-sd"
  - "https://docs.cloud.google.com/service-directory/docs/configuring-netlb-in-sd"
  - "https://docs.cloud.google.com/service-directory/docs/configuring-service-directory-zone"
  - "https://docs.cloud.google.com/service-directory/docs/configuring-private-network-access"
keywords:
  - "directory"
  - "integration"
  - "with"
  - "traffic"
  - "director"
  - "is"
  - "integrated"
  - "in"
---

# Service Directory integration with Traffic Director

Product: Service Directory
Coverage: MEDIUM

## Step 02 Summary

Service Directory is integrated with Traffic Director in Preview, exposing registered services to mesh applications and Traffic Director gateways.

## Extended Definition

Service Directory is integrated with Traffic Director in Preview, exposing registered services to mesh applications and Traffic Director gateways.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/service-directory/docs/configuring-ilb-in-sd](https://docs.cloud.google.com/service-directory/docs/configuring-ilb-in-sd)
- [https://docs.cloud.google.com/service-directory/docs/configuring-netlb-in-sd](https://docs.cloud.google.com/service-directory/docs/configuring-netlb-in-sd)
- [https://docs.cloud.google.com/service-directory/docs/configuring-service-directory-zone](https://docs.cloud.google.com/service-directory/docs/configuring-service-directory-zone)
- [https://docs.cloud.google.com/service-directory/docs/configuring-private-network-access](https://docs.cloud.google.com/service-directory/docs/configuring-private-network-access)

## Supporting Pages

### "Register an internal load balancer \_|\_ Service Directory \_|\_ Google\

- URL: [https://docs.cloud.google.com/service-directory/docs/configuring-ilb-in-sd](https://docs.cloud.google.com/service-directory/docs/configuring-ilb-in-sd)
- Source ID: `site-iam-reference`
- Final score: 284
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permissions servicedirectory.endpoints.create servicedirectory.endpoints.delete Roles roles/compute.networkAdmin roles/compute.securityAdmin roles/compute.instanceAdmin Limitations Service Directory integration with internal load balancing has the following limitations: Automatic registration only applies to internal and network load balancers.
- Register an internal passthrough Network Load Balancer To register an internal passthrough Network Load Balancer, run the gcloud compute forwarding-rules create command and set the service-directory-registration flag: gcloud compute forwarding-rules create FORWARDING RULE NAME \ --region= REGION \ --load-balancing-scheme=INTERNAL \ --network= NETWORK NAME \ --subnet= SUBNET NAME \ --address= RESERVED IP ADDRESS \ --ip-protocol= PROTOCOL TYPE \ --ports= PORT NUMBER \ --backend-service= BACKEND SERVICE NAME \ --backend-service-region= REGION \ --service-directory-registration= SD SERVICE NAME Replace the following: FORWARDING RULE NAME : a name for the forwarding rule that you want to create REGION : the region to create the forwarding rule in NETWORK NAME : the network that this forwarding rule applies to SUBNET NAME : the subnetwork that this forwarding rule applies to RESERVED IP ADDRESS : the IP address that the forwarding rule serves PROTOCOL TYPE : the IP protocol that the rule will serve PORT NUMBER : a list of comma-separated ports BACKEND SERVICE NAME : target backend service that receives the traffic SD SERVICE NAME : the fully qualified name of the Service Directory service where you want to register the endpoint.
- To register a regional internal Application Load Balancer, run the gcloud compute forwarding-rules create command and set the service-directory-registration flag: gcloud beta compute forwarding-rules create FORWARDING RULE NAME \ --region= REGION \ --load-balancing-scheme=INTERNAL MANAGED \ --network= NETWORK NAME \ --address= RESERVED IP ADDRESS \ --target-https-proxy= PROXY NAME \ --target-https-proxy-region= PROXY REGION \ --ports= PORT NUMBER \ --service-directory-registration= SD SERVICE NAME Replace the following: FORWARDING RULE NAME : a name for the forwarding rule that you want to create REGION : the region to create the forwarding rule in NETWORK NAME : the network that this forwarding rule applies to RESERVED IP ADDRESS : the IP address that the forwarding rule serves PROXY NAME : the target proxy that receives the traffic PROXY REGION : the region of the proxy to operate on PORT NUMBER : a list of comma-separated ports SD SERVICE NAME : the fully qualified name of the Service Directory service where you want to register the endpoint.
- Verify the endpoint One or more Service Directory endpoints that are created when you register an internal load balancer have the following characteristics: The endpoint has the same name as the name of the forwarding rule with the specified port number ( <forwarding rule name>-<port> ).

### "Register an external passthrough Network Load Balancer \_|\_ Service Directory\

- URL: [https://docs.cloud.google.com/service-directory/docs/configuring-netlb-in-sd](https://docs.cloud.google.com/service-directory/docs/configuring-netlb-in-sd)
- Source ID: `site-iam-reference`
- Final score: 262
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permissions servicedirectory.endpoints.create servicedirectory.endpoints.delete Roles roles/compute.networkAdmin roles/compute.securityAdmin roles/compute.instanceAdmin Limitations Service Directory integration with external passthrough Network Load Balancers has the following limitations: Automatic registration only supports external Layer 4 load balancers.
- Register an external passthrough Network Load Balancer To register a regional external passthrough Network Load Balancer, run the gcloud compute forwarding-rules create command and set the service-directory-registration flag: gcloud beta compute forwarding-rules create FORWARDING RULE NAME \ --region= REGION \ --load-balancing-scheme=EXTERNAL \ --address= RESERVED IP ADDRESS \ --ip-protocol= PROTOCOL TYPE \ --ports= PORT NUMBER \ --backend-service= BACKEND SERVICE NAME \ --backend-service-region= REGION \ --service-directory-registration= SD SERVICE NAME Replace the following: FORWARDING RULE NAME : a name for the forwarding rule that you want to create REGION : the region to create the forwarding rule in RESERVED IP ADDRESS : the IP address that the forwarding rule serves PROTOCOL TYPE : the IP protocol that the rule is to serve PORT NUMBER : a list of comma-separated ports BACKEND SERVICE NAME : the target backend service that receives the traffic SD SERVICE NAME : the fully qualified name of the Service Directory service where you want to register the endpoint.
- Verify the endpoint The Service Directory endpoints that are created when you register an external passthrough Network Load Balancer have the following characteristics: The endpoint has the same name as the name of the forwarding rule with the specified port number ( <forwarding rule name>-<port> ).
- If you specify --port=ALL , the Service Directory endpoint is registered with port 0 .

### Configure a DNS zone \_|\_ Service Directory \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/service-directory/docs/configuring-service-directory-zone](https://docs.cloud.google.com/service-directory/docs/configuring-service-directory-zone)
- Source ID: `site-docs-root`
- Final score: 245
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Limitations Service Directory integration with Cloud DNS has the following limitations: You can only associate a Service Directory zone with a namespace when you create the zone.
- A Service Directory zone must be in the same project as the Service Directory namespace that it is associated with.
- Click Create . gcloud gcloud dns managed-zones create SD ZONE \ --dns-name DNS NAME \ --description DESCRIPTION \ --visibility private \ --networks https://www.googleapis.com/compute/v1/projects/ project ID /global/networks/ network \ --service-directory-namespace https://servicedirectory.googleapis.com/v1/projects/ project ID /locations/ region /namespaces/ namespace-name Replace the following values: SD ZONE : the name of the Service Directory zone that you are creating.
- DESCRIPTION : a description of the zone, such as this zone is backed by Service Directory . https://www.googleapis.com/compute/v1/projects/ PROJECT ID /global/networks/ NETWORK : the FQDN of the networks that can use the zone. https://www.servicedirectory.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /registries/ NAMESPACE NAME : the FQDN of the namespace that you are linking.

### "Configure private network access \_|\_ Service Directory \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/service-directory/docs/configuring-private-network-access](https://docs.cloud.google.com/service-directory/docs/configuring-private-network-access)
- Source ID: `site-docs-root`
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Create . gcloud Use the gcloud service-directory endpoints create command with the project ID and the network path specified. gcloud service-directory endpoints create ENDPOINT NAME \ --project= PROJECT ID \ --location= REGION \ --namespace= NAMESPACE NAME \ --service= SERVICE ID \ --address= IP ADDRESS \ --port= PORT NUMBER \ --network= NETWORK PATH Replace the following: ENDPOINT NAME : a name for the endpoint that you're creating in your service, such as my-endpoint PROJECT ID : the ID of the project REGION : the Google Cloud region that contains the namespace NAMESPACE NAME : the name that you gave the namespace, such as my-namespace SERVICE ID : the ID of the service IP ADDRESS : the IP address of the endpoint, such as 192.0.2.0 PORT NUMBER : the ports that the endpoints are running on, typically 443 or 80 NETWORK PATH : the URL to the network, such as projects/ PROJECT NUMBER /locations/global/networks/ NETWORK NAME Note: If the target of your Service Directory endpoint is an on-premises IP address, associate the endpoint with the VPC network that is directly connected to the Cloud VPN tunnel or the Cloud Interconnect connection.
- Create an endpoint with private network access Note: If the principal performing this operation does not already have broad permissions in the network project, then grant it the Service Directory Network Attacher role ( roles/servicedirectory.networkAttacher ) there.
- Notes: For servicedirectory.googleapis.com , the Google Cloud service project must be within the VPC Service Controls perimeter of the Google Cloud service project and the Service Directory project.
- Ensure that the Google Cloud project is within the VPC Service Controls perimeter of both the network project and the Service Directory project for servicedirectory.googleapis.com .

