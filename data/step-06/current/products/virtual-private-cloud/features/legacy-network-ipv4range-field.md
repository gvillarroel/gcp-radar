---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:20:09.500Z"
product_name: "Virtual Private Cloud"
product_slug: "virtual-private-cloud"
feature_name: "Legacy network IPv4Range field"
feature_slug: "legacy-network-ipv4range-field"
latest_feature_date: "2019-01-24"
deprecation_date: "2021-06-01"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks"
  - "https://docs.cloud.google.com/vpc/docs/access-service-other-vpc-network"
  - "https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges"
  - "https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/how-to/running-connectivity-tests"
keywords:
  - "legacy"
  - "network"
  - "ipv4range"
  - "field"
  - "the"
  - "used"
  - "when"
  - "creating"
---

# Legacy network IPv4Range field

Product: Virtual Private Cloud
Coverage: MEDIUM

## Step 02 Summary

The IPv4Range field used when creating legacy Google Cloud VPC networks is deprecated; deprecated on 2021-06-01.

## Extended Definition

The IPv4Range field used when creating legacy Google Cloud VPC networks is deprecated; deprecated on 2021-06-01.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- [https://docs.cloud.google.com/vpc/docs/access-service-other-vpc-network](https://docs.cloud.google.com/vpc/docs/access-service-other-vpc-network)
- [https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges](https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges)
- [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/how-to/running-connectivity-tests](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/how-to/running-connectivity-tests)

## Supporting Pages

### "Quickstart: Create and manage VPC networks \_|\_ Virtual Private Cloud \_\

- URL: [https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks](https://docs.cloud.google.com/vpc/docs/create-modify-vpc-networks)
- Source ID: `site-docs-root`
- Final score: 211
- Re-rank relevance: N/A

Evidence snippets:
- Troubleshooting Can't delete a VPC network that was used with Serverless VPC Access You might receive an error when attempting to delete a VPC network for which Serverless VPC Access was configured even if you have deleted the associated Serverless VPC Access connector.
- To specify the dynamic routing mode of the VPC network, include the routingConfig field: POST https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /global/networks { "routingConfig": { "routingMode": " DYNAMIC ROUTING MODE " }, "autoCreateSubnetworks": true, "name": " NETWORK ", "mtu": MTU } Replace the following: PROJECT ID : the ID of the project where the VPC network is created.
- To describe the subnet and view its IP address utilization, send the following request: GET https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION /subnetworks/ SUBNET ?views=WITH UTILIZATION Add an IPv4-only subnet When you create a subnet, you set a name, a region, and at least a primary IPv4 address range according to the name and IPv4 subnet range limitations.
- NAME SUBNET MODE BGP ROUTING MODE IPV4 RANGE GATEWAY IPV4 custom-network CUSTOM REGIONAL default AUTO REGIONAL legacy-network1 LEGACY REGIONAL 10.240.0.0/16 10.240.0.1 To describe a network and view its details, such as peering connections and subnets, use the networks describe command . gcloud compute networks describe NETWORK Replace NETWORK with the name of the network.

### "Access the service from another VPC network \_|\_ Virtual Private Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/access-service-other-vpc-network](https://docs.cloud.google.com/vpc/docs/access-service-other-vpc-network)
- Source ID: `site-docs-root-2`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Configure networking The following sections explain how to create a network and a subnet to host the endpoint, and how to create a firewall rule to allow SSH access to the client VM used for testing the endpoint.
- If you used an existing project for the tasks in this document, when you delete it, you also delete any other work you've done in the project.
- Click Networking and configure the following fields: For Network tags , enter allow-ssh .
- Create a forwarding rule to connect the endpoint to the service producer's service attachment. gcloud compute forwarding-rules create ep-1 \ --region= REGION \ --network=consumer-network \ --address=ep-ip-1 \ --target-service-attachment=projects/ PRODUCER PROJECT /regions/ REGION /serviceAttachments/published-service Replace the following: PRODUCER PROJECT : the project ID of the service producer project.

### "Configure alias IP ranges \_|\_ Virtual Private Cloud \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges](https://docs.cloud.google.com/vpc/docs/configure-alias-ip-ranges)
- Source ID: `site-docs-root-2`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- The command fails because the secondary range is in a different subnet from the instance. gcloud compute instances network-interfaces update instance-1 \ --zone us-central1-a \ --aliases secondaryrange1:172.16.0.10/32 The output is similar to the following: ERROR: (gcloud.compute.instances.network-interfaces.update) HTTPError 400: Invalid value for field 'resource.aliasIpRanges[0].subnetworkRangeName': 'secondaryrange'.
- The specified subnet secondary range doesn't exist When creating a VM, if you get an error saying that the secondary range doesn't exist, ensure the following: The subnet has a secondary range with the specified name.
- Alias IPs aren't supported on legacy networks. gcloud compute networks list --filter="name= NETWORK NAME " The network MODE must be auto or custom .
- INTERFACE FINGERPRINT : the fingerprint ID for the existing network interface, which is provided when you describe an instance.

### "Create and run Connectivity Tests \_|\_ Network Intelligence Center - Connectivity\

- URL: [https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/how-to/running-connectivity-tests](https://docs.cloud.google.com/network-intelligence-center/docs/connectivity-tests/how-to/running-connectivity-tests)
- Source ID: `site-iam-reference`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- When you specify a source IP address that is an external IP address outside of Google Cloud, you must set the networkType parameter to INTERNET . test input = { "source": { "ipAddress": " SOURCE IP ADDRESS ", "networkType": "INTERNET" }, "destination": { "forwardingRule": " DESTINATION FORWARDING RULE ", "port": " DESTINATION PORT ", "projectId": " DESTINATION IP PROJECT ID " }, "protocol": " PROTOCOL ", } request = api.projects().locations().global ().connectivityTests().create( parent="projects/ PROJECT ID /locations/global", testId=" TEST ID ", body=test input) print(json.dumps(request.execute(), indent=4)) Replace the following: SOURCE IP ADDRESS : the source IP address that you are testing from.
- POST https: //networkmanagement.googleapis.com/v1/projects/ PROJECT ID /locations/global/connectivityTests?testId= TEST ID ' { "source": { "appEngineVersion": { "uri": " APP ENGINE VERSION ", }, }, "destination": { " DESTINATION RESOURCE FIELD ": " DESTINATION ENDPOINT ", "ipAddress": " DESTINATION IP ADDRESS ", "port": DESTINATION PORT , }, "protocol": " PROTOCOL ", }' Replace the following: PROJECT ID : the project ID of the source Cloud Run function.
- POST https: //networkmanagement.googleapis.com/v1/projects/ PROJECT ID /locations/global/connectivityTests?testId= TEST ID ' { "source": { "cloudRunRevision": { "uri": " CLOUD RUN REVISION ", }, }, "destination": { " DESTINATION RESOURCE FIELD ": " DESTINATION ENDPOINT ", "port": DESTINATION PORT , }, "protocol": " PROTOCOL ", }' Replace the following: PROJECT ID : the project ID of the source Cloud Run function.
- POST https: //networkmanagement.googleapis.com/v1/projects/ PROJECT ID /locations/global/connectivityTests?testId= TEST ID ' { "source": { "instance": " SOURCE INSTANCE ", "ipAddress": " SOURCE IP ADDRESS ", }, "destination": { " DESTINATION RESOURCE FIELD ": " DESTINATION ENDPOINT ", "port": DESTINATION PORT }, "protocol": " PROTOCOL ", }' Replace the following: PROJECT ID : the project ID of the source VM.

