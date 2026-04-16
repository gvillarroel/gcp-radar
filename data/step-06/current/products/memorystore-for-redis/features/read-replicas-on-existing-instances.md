---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.276Z"
product_name: "Memorystore for Redis"
product_slug: "memorystore-for-redis"
feature_name: "Read replicas on existing instances"
feature_slug: "read-replicas-on-existing-instances"
latest_feature_date: "2022-02-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/redis/about-read-replicas"
  - "https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints"
  - "https://docs.cloud.google.com/memorystore/docs/redis/access-control"
  - "https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances"
keywords:
  - "read"
  - "replicas"
  - "on"
  - "existing"
  - "instances"
  - "you"
  - "can"
  - "enable"
---

# Read replicas on existing instances

Product: Memorystore for Redis
Coverage: MEDIUM

## Step 02 Summary

You can enable read replicas on an existing Memorystore for Redis instance.

## Extended Definition

You can enable read replicas on an existing Memorystore for Redis instance.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/redis/about-read-replicas](https://docs.cloud.google.com/memorystore/docs/redis/about-read-replicas)
- [https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints](https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints)
- [https://docs.cloud.google.com/memorystore/docs/redis/access-control](https://docs.cloud.google.com/memorystore/docs/redis/access-control)
- [https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances](https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances)

## Supporting Pages

### About read replicas \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/about-read-replicas](https://docs.cloud.google.com/memorystore/docs/redis/about-read-replicas)
- Source ID: `site-docs-root-2`
- Final score: 293
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Behavior of enabling read replicas on an existing instance Enabling read replicas is an exclusive operation, meaning you cannot perform other update operation instance modifications as a part of the same operation that enables read replicas.
- Enable read replicas on an existing instance Before you enable read replicas on an existing Memorystore for Redis instance, we strongly recommend that you reduce the write traffic to the primary node.
- Read replicas can only be enabled on instances that use Redis version 5.0 or higher.
- Scaling an instance You can scale the number of read replicas for your instance, and you can also the modify the node size: For instructions on adding and removing nodes, see Add or remove replica nodes from your Redis instance .

### "Manage Memorystore for Redis resources with custom constraints \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints](https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints)
- Source ID: `site-docs-root-2`
- Final score: 243
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You could test this constraint by running the gcloud redis instances create command with replica-count set to 2 as demonstrated in the following snippet: gcloud redis instances create redis-test-instance \ --project=my-project \ --tier=standard \ --size=16 \ --region=us-central1 \ --redis-version=redis 7 0 \ --network=projects/my-project/global/networks/default \ --connect-mode=PRIVATE SERVICE ACCESS \ --read-replicas-mode=READ REPLICAS ENABLED \ --replica-count=2 The output is similar to the following: Operation denied by custom org policies: ["customConstraints/custom.restrictInstanceToOnereplica": "Prevent users from creating Redis instances with more than one replica"] Memorystore for Redis supported resources and operations The following Memorystore for Redis custom constraint fields are available to use when you create or update a Memorystore for Redis resource .
- Memorystore for Redis Instance resource.alternativeLocationId resource.authEnabled resource.authorizedNetwork resource.availableMaintenanceVersions resource.connectMode resource.customerManagedKey resource.displayName resource.locationId resource.maintenancePolicy.description resource.maintenancePolicy.weeklyMaintenanceWindow.day resource.maintenanceVersion resource.memorySizeGb resource.name resource.persistenceConfig.persistenceMode resource.persistenceConfig.rdbSnapshotPeriod resource.persistenceConfig.rdbSnapshotStartTime resource.readReplicasMode resource.redisConfigs resource.redisVersion resource.replicaCount resource.reservedIpRange resource.secondaryIpRange resource.suspensionReasons resource.tier resource.transitEncryptionMode Example custom constraints The following table provides an example custom constraint that restricts Redis instance to one replica: Description Constraint syntax Restrict Redis instances with one replicas name : organizations/ ORGANIZATION ID /customConstraints/custom.restrictInstanceToOnereplica resourceTypes : - redis.googleapis.com/Instance methodTypes : - CREATE - UPDATE condition : "resource.replicaCount >= 2" actionType : DENY displayName : Restrict Redis instances to one replica description : Prevent users from creating Redis instances with more than one replica What's next See Introduction to the Organization Policy Service to learn more about organization policies.
- As the organization policy administrator , you can define an organization policy, which is a set of restrictions called constraints that apply to Google Cloud resources and descendants of those resources in the Google Cloud resource hierarchy .
- An existing instance configuration remains valid, unless you change the instance configuration from a compliance to non-compliance state using the Google Cloud console, Google Cloud CLI, or RPC.

### Access control with IAM \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/access-control](https://docs.cloud.google.com/memorystore/docs/redis/access-control)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permissions and their roles The following table lists each permission that Memorystore for Redis supports and the Memorystore for Redis roles that include it: Permission Redis role Basic role redis.instances.list Redis Admin Redis Editor Redis Viewer Reader redis.instances.get Redis Admin Redis Editor Redis Viewer Reader redis.instances.create Redis Admin Writer redis.instances.update Redis Admin Redis Editor Writer redis.instances.updateAuth Redis Admin Writer redis.instances.getAuthString Redis Admin Writer redis.instances.delete Redis Admin Writer redis.instances.upgrade Redis Admin Writer redis.instances.import Redis Admin Writer redis.instances.export Redis Admin Writer redis.locations.list Redis Admin Redis Editor Redis Viewer Reader redis.locations.get Redis Admin Redis Editor Redis Viewer Reader redis.operations.list Redis Admin Redis Editor Redis Viewer Reader redis.operations.get Redis Admin Redis Editor Redis Viewer Reader redis.operations.delete Redis Admin Writer Custom roles If the predefined roles do not address your unique business requirements, you can define your own custom roles with permissions that you specify.
- Permissions needed Create a Memorystore instance with Redis AUTH enabled Enable / disable AUTH on an existing Redis instance View the AUTH string View whether AUTH is enabled / disabled for a Redis instance redis.instances.create ✓ X X X redis.instances.update X ✓ X X redis.instances.get X X X ✓ redis.instances.updateAuth ✓ ✓ X X redis.instances.getAuthString X X ✓ X In-transit encryption permissions The table below shows permissions required for enabling and managing In-transit encryption for Memorystore for Redis.
- Permissions needed Create a Memorystore instance with a maintenance policy enabled Create or modify maintenance policies on an existing Memorystore instance View the maintenance policy settings Reschedule maintenance redis.instances.create ✓ X X X redis.instances.update X ✓ X X redis.instances.get X X ✓ X redis.instances.rescheduleMaintenance X X X ✓ Required permissions for import and export Using custom roles for importing and exporting requires two separate custom roles.
- Can't create or delete instances. roles/redis.viewer Redis Viewer All redis permissions except for redis.instances.create redis.instances.delete redis.instances.update redis.instances.upgrade redis.instances.import redis.instances.export redis.instances.updateAuth redis.instances.getAuthString redis.operations.delete Read-only access to all Memorystore for Redis resources.

### "Create and manage Redis instances \_|\_ Memorystore for Redis \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances](https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances)
- Source ID: `site-docs-root`
- Final score: 231
- Re-rank relevance: N/A

Evidence snippets:
- To choose one of the available OSS Redis versions for Memorystore for Redis, use the --redis-version flag with one of the following values: redis 7 2 redis 7 0 (Default) redis 6 X redis 5 0 redis 4 0 redis 3 2 For example: gcloud redis instances create myinstance --size=5 --region=us-central1 \ --zone=us-central1-a --redis-version=redis 6 X Networking You can create Redis instances using one of two connection modes : --connect-mode=PRIVATE SERVICE ACCESS or --connect-mode=DIRECT PEERING .
- Gcloud You can update the following properties after creating an instance: Display name Redis configuration Labels Size (For more information on scaling, see Scaling Instances .) For example, enter the following command to update the display name of an instance, replacing VARIABLES with appropriate values: gcloud redis instances update INSTANCE ID --region= REGION ID --display-name= NEW DISPLAY NAME For more details on how to set configuration parameters, see Configuring Redis Instances .
- Note: If you set up a private services access connection , but the No existing IP ranges available status appears when you set an IP range name, then add the compute.globalAddresses.list permission to your account . gcloud Important: You must Establish a private services access connection on the host project network before you can create a Redis instance with the --connect-mode=private-service-access flag listed below.
- If you have multiple address ranges allocated for private services access, you can select which one to use with the following gcloud command: gcloud redis instances create INSTANCE ID --region= REGION --size= SIZE --connect-mode=PRIVATE SERVICE ACCESS --network= VPC NETWORK NAME --reserved-ip-range= RESERVED RANGE NAME Where: VPC NETWORK NAME is the name of network used to create the instance.

