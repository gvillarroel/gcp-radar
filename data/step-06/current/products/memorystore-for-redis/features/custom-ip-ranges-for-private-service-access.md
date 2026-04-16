---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.279Z"
product_name: "Memorystore for Redis"
product_slug: "memorystore-for-redis"
feature_name: "Custom IP ranges for private service access"
feature_slug: "custom-ip-ranges-for-private-service-access"
latest_feature_date: "2021-05-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/redis/networking"
  - "https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances"
  - "https://docs.cloud.google.com/memorystore/docs/redis/establish-connection"
  - "https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints"
keywords:
  - "custom"
  - "ip"
  - "ranges"
  - "for"
  - "private"
  - "access"
  - "users"
  - "can"
---

# Custom IP ranges for private service access

Product: Memorystore for Redis
Coverage: MEDIUM

## Step 02 Summary

Users can specify an IP address range for the private service access connection mode.

## Extended Definition

Users can specify an IP address range for the private service access connection mode.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/redis/networking](https://docs.cloud.google.com/memorystore/docs/redis/networking)
- [https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances](https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances)
- [https://docs.cloud.google.com/memorystore/docs/redis/establish-connection](https://docs.cloud.google.com/memorystore/docs/redis/establish-connection)
- [https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints](https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints)

## Supporting Pages

### Networking \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/networking](https://docs.cloud.google.com/memorystore/docs/redis/networking)
- Source ID: `site-docs-root`
- Final score: 215
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When creating instances with the private services access mode, if there are multiple IP address ranges allocated for private services access, you can use the --reserved-ip-range gcloud flag to choose which allocated ranges to use when creating your Redis instance.
- Permission required to create a private services access connection in the UI: serviceusage.services.enable Needed to enable the Service Networking API. compute.addresses.create compute.addresses.list servicenetworking.services.addPeering gcloud permissions gcloud permissions required to check the private services access connection compute.networks.list Needed in both the local and host projects. gcloud permissions required to create a private services access connection serviceusage.services.enable Needed to enable the Service Networking API. compute.addresses.create compute.addresses.list servicenetworking.services.addPeering Supported networks and client IP ranges Memorystore for Redis supports RFC 1918 private IP addresses and some non-RFC 1918 private IP addresses.
- Scenario Supported connection mode Provision a Redis instance with a Shared VPC network Private services access only Access a Redis instance from on-premise networks using VPN Private services access only Use centralized IP range management for multiple Google services Private services access only Provision a Redis instance using a dedicated VPC network Private services access (recommended) or direct peering Switching connection modes of existing instances You cannot switch the connection mode of an existing instance.
- On-premises access with private services access You can connect from a client in an on-premises network if the on-premises network is connected to the VPC network to which your Memorystore for Redis instance is connected.

### "Create and manage Redis instances \_|\_ Memorystore for Redis \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances](https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances)
- Source ID: `site-docs-root`
- Final score: 209
- Re-rank relevance: N/A

Evidence snippets:
- Note: If you set up a private services access connection , but the No existing IP ranges available status appears when you set an IP range name, then add the compute.globalAddresses.list permission to your account . gcloud Important: You must Establish a private services access connection on the host project network before you can create a Redis instance with the --connect-mode=private-service-access flag listed below.
- If you have multiple address ranges allocated for private services access, you can select which one to use with the following gcloud command: gcloud redis instances create INSTANCE ID --region= REGION --size= SIZE --connect-mode=PRIVATE SERVICE ACCESS --network= VPC NETWORK NAME --reserved-ip-range= RESERVED RANGE NAME Where: VPC NETWORK NAME is the name of network used to create the instance.
- For example: gcloud redis instances create myinstance --region=us-central1 --size=1 --connect-mode=DIRECT PEERING --network=default --reserved-ip-range=10.0.0.0/24 Custom ranges with private services access If you only have one IP address range allocated for your private services access connection , that range is used by default for Memorystore instance creation.
- To choose one of the available OSS Redis versions for Memorystore for Redis, use the --redis-version flag with one of the following values: redis 7 2 redis 7 0 (Default) redis 6 X redis 5 0 redis 4 0 redis 3 2 For example: gcloud redis instances create myinstance --size=5 --region=us-central1 \ --zone=us-central1-a --redis-version=redis 6 X Networking You can create Redis instances using one of two connection modes : --connect-mode=PRIVATE SERVICE ACCESS or --connect-mode=DIRECT PEERING .

### "Establish a private services access connection \_|\_ Memorystore for Redis\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/establish-connection](https://docs.cloud.google.com/memorystore/docs/redis/establish-connection)
- Source ID: `site-docs-root-2`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enter a description for your range, such as "Range of IP addresses to be used for the Private services access connection".
- Create a private connection between your network and the private services access network by running the following command: gcloud services vpc-peerings connect --service=servicenetworking.googleapis.com --ranges= reserved-range-name --network= vpc-network --project= project-id Console: VPC network Enable the Service Networking API: Enable the Service Networking API If you are using Shared VPC, enable the API in both the Service Project and the Host Project.
- Private services access setup instructions Follow these steps to setup a private services access connection for your network: gcloud Enable the Service Networking API: Enable the Service Networking API If you are using Shared VPC, enable the API in both the Service Project and the Host Project.
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback Establish a private services access connection Stay organized with collections Save and categorize content based on your preferences.

### "Manage Memorystore for Redis resources with custom constraints \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints](https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints)
- Source ID: `site-docs-root-2`
- Final score: 206
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You could test this constraint by running the gcloud redis instances create command with replica-count set to 2 as demonstrated in the following snippet: gcloud redis instances create redis-test-instance \ --project=my-project \ --tier=standard \ --size=16 \ --region=us-central1 \ --redis-version=redis 7 0 \ --network=projects/my-project/global/networks/default \ --connect-mode=PRIVATE SERVICE ACCESS \ --read-replicas-mode=READ REPLICAS ENABLED \ --replica-count=2 The output is similar to the following: Operation denied by custom org policies: ["customConstraints/custom.restrictInstanceToOnereplica": "Prevent users from creating Redis instances with more than one replica"] Memorystore for Redis supported resources and operations The following Memorystore for Redis custom constraint fields are available to use when you create or update a Memorystore for Redis resource .
- Memorystore for Redis Instance resource.alternativeLocationId resource.authEnabled resource.authorizedNetwork resource.availableMaintenanceVersions resource.connectMode resource.customerManagedKey resource.displayName resource.locationId resource.maintenancePolicy.description resource.maintenancePolicy.weeklyMaintenanceWindow.day resource.maintenanceVersion resource.memorySizeGb resource.name resource.persistenceConfig.persistenceMode resource.persistenceConfig.rdbSnapshotPeriod resource.persistenceConfig.rdbSnapshotStartTime resource.readReplicasMode resource.redisConfigs resource.redisVersion resource.replicaCount resource.reservedIpRange resource.secondaryIpRange resource.suspensionReasons resource.tier resource.transitEncryptionMode Example custom constraints The following table provides an example custom constraint that restricts Redis instance to one replica: Description Constraint syntax Restrict Redis instances with one replicas name : organizations/ ORGANIZATION ID /customConstraints/custom.restrictInstanceToOnereplica resourceTypes : - redis.googleapis.com/Instance methodTypes : - CREATE - UPDATE condition : "resource.replicaCount >= 2" actionType : DENY displayName : Restrict Redis instances to one replica description : Prevent users from creating Redis instances with more than one replica What's next See Introduction to the Organization Policy Service to learn more about organization policies.
- When you have entered a value into each field, the equivalent YAML configuration for this custom constraint appears on the right. gcloud To create a custom constraint, create a YAML file using the following format: name : organizations/ ORGANIZATION ID /customConstraints/ CONSTRAINT NAME resourceTypes : RESOURCE NAME methodTypes : - CREATE condition : " CONDITION " actionType : ACTION displayName : DISPLAY NAME description : DESCRIPTION Replace the following: ORGANIZATION ID : your organization ID, such as 123456789 .
- Use the following template to create a YAML file for a custom constraint: name : organizations/ ORGANIZATION ID /customConstraints/ CONSTRAINT NAME resourceTypes : - redis.googleapis.com/ RESOURCE NAME methodTypes : - CREATE - UPDATE condition : " CONDITION " actionType : ACTION displayName : DISPLAY NAME description : DESCRIPTION Replace the following: ORGANIZATION ID : your organization ID, such as 123456789 .

