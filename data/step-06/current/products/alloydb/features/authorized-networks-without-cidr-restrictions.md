---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.474Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Authorized Networks without CIDR restrictions"
feature_slug: "authorized-networks-without-cidr-restrictions"
latest_feature_date: "2025-10-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance"
  - "https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances"
  - "https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes"
keywords:
  - "authorized"
  - "networks"
  - "without"
  - "cidr"
  - "restrictions"
  - "let"
  - "alloydb"
  - "public"
---

# Authorized Networks without CIDR restrictions

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

Authorized Networks without CIDR restrictions let AlloyDB Public IP configurations use unrestricted authorized network definitions governed by custom organization policies.

## Extended Definition

Authorized Networks without CIDR restrictions let AlloyDB Public IP configurations use unrestricted authorized network definitions governed by custom organization policies.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance)
- [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances)
- [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)

## Supporting Pages

### "MCP Tools Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance)
- Source ID: `site-api-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- InstanceNetworkConfig JSON representation { "authorizedExternalNetworks" : [ { object ( AuthorizedNetwork ) } ] , "enablePublicIp" : boolean , "enableOutboundPublicIp" : boolean , "network" : string , "allocatedIpRangeOverride" : string } Fields authorizedExternalNetworks[] object ( AuthorizedNetwork ) Optional.
- When enabled, this allows authorized users to connect to the instance from the public internet using the executeSql API, even for private IP instances.
- AuthorizedNetwork JSON representation { "cidrRange" : string } Fields cidrRange string CIDR range for one authorzied network of the instance.
- A list of external network authorized to access this instance. enablePublicIp boolean Optional.

### "MCP Tools Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances](https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/list_instances)
- Source ID: `site-api-reference`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- InstanceNetworkConfig JSON representation { "authorizedExternalNetworks" : [ { object ( AuthorizedNetwork ) } ] , "enablePublicIp" : boolean , "enableOutboundPublicIp" : boolean , "network" : string , "allocatedIpRangeOverride" : string } Fields authorizedExternalNetworks[] object ( AuthorizedNetwork ) Optional.
- When enabled, this allows authorized users to connect to the instance from the public internet using the executeSql API, even for private IP instances.
- AuthorizedNetwork JSON representation { "cidrRange" : string } Fields cidrRange string CIDR range for one authorzied network of the instance.
- A list of external network authorized to access this instance. enablePublicIp boolean Optional.

### "Connect from Google Kubernetes Engine (GKE) to AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- Source ID: `site-docs-reference`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- This can take several minutes. gcloud In the Cloud Shell, check if the unused IP addresses (IPv4) range is already assigned to service peering: gcloud services vpc-peerings list --network = default Skip the next step if your output looks similar to the following: network: projects/493573376485/global/networks/default peering: servicenetworking-googleapis-com reservedPeeringRanges: - default-ip-range service: services/servicenetworking.googleapis.com In this output, the value of reservedPeeringRanges is default-ip-range , which you can use as IP RANGE NAME to create a private connection in step 3. (Skip when using the default value of reservedPeeringRanges ) To allocate unused IP addresses in the VPC, use the following command: gcloud compute addresses create IP RANGE NAME \ --global \ --purpose = VPC PEERING \ --prefix-length = 16 \ --description = "VPC private service access" \ --network = default Replace IP RANGE NAME with your name for available internal IP addresses within an AlloyDB subnet, such as alloydb-gke-psa-01 .
- A new version of the Proxy is released monthly with bug fixes, security updates, and new features. image : gcr.io/alloydb-connectors/alloydb-auth-proxy:1.10.1 args : If you're connecting over public IP, enable this flag. - "--public-ip" If you're connecting with PSC, enable this flag: - "--psc" If you're using auto IAM authentication, enable this flag: - "--auto-iam-authn" Enable structured logging with Google's LogEntry format: - "--structured-logs" Listen on localhost:5432 by default. - "--port=5432" Specify your instance URI, e.g., "projects/myproject/locations/us-central1/clusters/mycluster/instances/myinstance" - "<INSTANCE-URI>" securityContext : The default AlloyDB Auth Proxy image runs as the "nonroot" user and group (uid: 65532) by default. runAsNonRoot : true You should use resource requests/limits as a best practice to prevent pods from consuming too many resources and affecting the execution of other pods.
- Grant all permissions to the AlloyDB database user on the new database: GRANT ALL PRIVILEGES ON DATABASE " DATABASE NAME " to " USERNAME " ; Connect to the new database and grant permissions on the public schema: \ c DATABASE NAME GRANT CREATE ON SCHEMA public TO " USERNAME " ; Take note of the database name, username, and password.
- Grant permissions to the AlloyDB database user on the public schema: GRANT CREATE ON SCHEMA public TO " USERNAME " ; Click Run .

