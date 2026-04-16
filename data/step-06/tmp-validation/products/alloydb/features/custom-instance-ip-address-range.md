---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.094Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Custom instance IP address range"
feature_slug: "custom-instance-ip-address-range"
latest_feature_date: "2025-07-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/cluster-create"
  - "https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes"
  - "https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance"
keywords:
  - "address"
  - "range"
  - "custom"
  - "create"
  - "instance"
  - "lets"
---

# Custom instance IP address range

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

Custom instance IP address range lets you create AlloyDB instances with a specific IP address range and override cluster-level IP range allocations.

## Extended Definition

Custom instance IP address range lets you create AlloyDB instances with a specific IP address range and override cluster-level IP range allocations.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/cluster-create](https://docs.cloud.google.com/alloydb/docs/cluster-create)
- [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance)

## Supporting Pages

### "Create a cluster and its primary instance \_|\_ AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/cluster-create](https://docs.cloud.google.com/alloydb/docs/cluster-create)
- Source ID: `site-docs-reference-2`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The following is a code snippet for creating a cluster and a primary instance based on the AlloyDB instance full example: resource "google alloydb instance" "default" { cluster = google alloydb cluster.default.name instance id = "alloydb-instance" instance type = "PRIMARY" machine config { cpu count = 2 } depends on = [google service networking connection.vpc connection] } resource "google alloydb cluster" "cluster abc" { cluster id = "alloydb-cluster" location = "us-central1" network config { network = google compute network.default.id } database version = "POSTGRES 16" initial user { password = "alloydb-cluster" } } data "google project" "project" {} resource "google compute network" "default" { name = "alloydb-network" } resource "google compute global address" "private ip alloc" { name = "alloydb-cluster" address type = "INTERNAL" purpose = "VPC PEERING" prefix length = 16 network = google compute network.default.id } resource "google service networking connection" "vpc connection" { network = google compute network.default.id service = "servicenetworking.googleapis.com" reserved peering ranges = [google compute global address.private ip alloc.name] } This example creates an N2 instance.
- If your VPC network contains more than one IP address range that has Considerations when using the C4A Axion-based machine series AlloyDB offers a C4A machine series based on Google Axion, Google's custom Arm-based processor.
- Before you can create a cluster, your Virtual Private Cloud (VPC) network must contain at least one IP address range configured with a private services access connection .
- Create a cluster with a specific IP address range AlloyDB uses private services access to allow a cluster's internal resources to communicate with each other.

### "Connect from Google Kubernetes Engine (GKE) to AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- Source ID: `site-docs-reference`
- Final score: 156
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This can take several minutes. gcloud In the Cloud Shell, check if the unused IP addresses (IPv4) range is already assigned to service peering: gcloud services vpc-peerings list --network = default Skip the next step if your output looks similar to the following: network: projects/493573376485/global/networks/default peering: servicenetworking-googleapis-com reservedPeeringRanges: - default-ip-range service: services/servicenetworking.googleapis.com In this output, the value of reservedPeeringRanges is default-ip-range , which you can use as IP RANGE NAME to create a private connection in step 3. (Skip when using the default value of reservedPeeringRanges ) To allocate unused IP addresses in the VPC, use the following command: gcloud compute addresses create IP RANGE NAME \ --global \ --purpose = VPC PEERING \ --prefix-length = 16 \ --description = "VPC private service access" \ --network = default Replace IP RANGE NAME with your name for available internal IP addresses within an AlloyDB subnet, such as alloydb-gke-psa-01 .
- Create a Kubernetes service account for your sample application: kubectl apply -f service-account.yaml Grant permissions for your Kubernetes service account to impersonate the Google service account by creating an IAM policy binding between the two service accounts: gcloud iam service-accounts add-iam-policy-binding \ --role = "roles/iam.workloadIdentityUser" \ --member = "serviceAccount: PROJECT ID .svc.id.goog[default/ KSA NAME ]" \ GSA NAME @ PROJECT ID .iam.gserviceaccount.com Add the iam.gke.io/gcp-service-account= GSA NAME @ PROJECT ID annotation to the Kubernetes service account, using the email address of the Google service account: kubectl annotate serviceaccount \ KSA NAME \ iam.gke.io/gcp-service-account = GSA NAME @ PROJECT ID .iam.gserviceaccount.com Populate the Artifact Registry with an image of the sample application To build a container image of the sample application and push it to a repository, complete the following steps.
- To configure service access using the allocated IP range, run the following command: gcloud services vpc-peerings connect \ --service = servicenetworking.googleapis.com \ --ranges = IP RANGE NAME \ --network = default To deploy the AlloyDB cluster, run the following command: gcloud alloydb clusters create CLUSTER ID \ --database-version = POSTGRES VERSION \ --password = CLUSTER PASSWORD \ --network = default \ --region = REGION \ --project = PROJECT ID Replace the following: CLUSTER ID : the ID of the cluster that you are creating.
- To deploy the AlloyDB primary instance, run the following: gcloud alloydb instances create INSTANCE ID \ --instance-type = PRIMARY \ --cpu-count = NUM CPU \ --region = REGION \ --cluster = CLUSTER ID \ --project = PROJECT ID Replace the following: INSTANCE ID with the name of the AlloyDB instance of your choice, such as alloydb-primary .

### "MCP Tools Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance)
- Source ID: `site-api-reference`
- Final score: 130
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Instance JSON representation { "name" : string , "displayName" : string , "uid" : string , "createTime" : string , "updateTime" : string , "deleteTime" : string , "labels" : { string : string , ... } , "state" : enum ( State ) , "instanceType" : enum ( InstanceType ) , "machineConfig" : { object ( MachineConfig ) } , "availabilityType" : enum ( AvailabilityType ) , "gceZone" : string , "databaseFlags" : { string : string , ... } , "writableNode" : { object ( Node ) } , "nodes" : [ { object ( Node ) } ] , "queryInsightsConfig" : { object ( QueryInsightsInstanceConfig ) } , "observabilityConfig" : { object ( ObservabilityInstanceConfig ) } , "readPoolConfig" : { object ( ReadPoolConfig ) } , "ipAddress" : string , "publicIpAddress" : string , "reconciling" : boolean , "etag" : string , "annotations" : { string : string , ... } , "clientConnectionConfig" : { object ( ClientConnectionConfig ) } , "satisfiesPzs" : boolean , "pscInstanceConfig" : { object ( PscInstanceConfig ) } , "networkConfig" : { object ( InstanceNetworkConfig ) } , "outboundPublicIpAddresses" : [ string ] , "activationPolicy" : enum ( ActivationPolicy ) , "connectionPoolConfig" : { object ( ConnectionPoolConfig ) } , "maintenanceVersionName" : string , "dataApiAccess" : enum ( DataApiAccess ) } Fields name string Output only.
- If set, the instance IPs will be created from this allocated range and will override the IP range used by the parent cluster.
- QueryInsightsInstanceConfig JSON representation { "queryStringLength" : integer , // Union field record application tags can be only one of the following: "recordApplicationTags" : boolean // End of list of possible types for union field record application tags . // Union field record client address can be only one of the following: "recordClientAddress" : boolean // End of list of possible types for union field record client address . // Union field query plans per minute can be only one of the following: "queryPlansPerMinute" : integer // End of list of possible types for union field query plans per minute . } Fields queryStringLength integer ( uint32 format) Query string length.
- Possible values: "STATE UNSPECIFIED" - Default state, when Connection Map is created initially. "VALID" - Set when policy and map configuration is valid, and their matching can lead to allowing creation of PSC Connections subject to other constraints like connections limit. "CONNECTION POLICY MISSING" - No Service Connection Policy found for this network and Service Class "POLICY LIMIT REACHED" - Service Connection Policy limit reached for this network and Service Class "CONSUMER INSTANCE PROJECT NOT ALLOWLISTED" - The consumer instance project is not in AllowedGoogleProducersResourceHierarchyLevels of the matching ServiceConnectionPolicy.

