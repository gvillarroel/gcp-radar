---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.273Z"
product_name: "Memorystore for Redis"
product_slug: "memorystore-for-redis"
feature_name: "Memorystore for Redis in Dallas (us-south1)"
feature_slug: "memorystore-for-redis-in-dallas-us-south1"
latest_feature_date: "2022-09-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/redis/create-instance-terraform"
  - "https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance"
  - "https://docs.cloud.google.com/memorystore/docs/redis/find-and-set-maintenance-windows"
  - "https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/list_instances"
keywords:
  - "memorystore"
  - "for"
  - "redis"
  - "in"
  - "dallas"
  - "us"
  - "south1"
  - "is"
---

# Memorystore for Redis in Dallas (us-south1)

Product: Memorystore for Redis
Coverage: MEDIUM

## Step 02 Summary

Memorystore for Redis is available in the Dallas region.

## Extended Definition

Memorystore for Redis is available in the Dallas region.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/redis/create-instance-terraform](https://docs.cloud.google.com/memorystore/docs/redis/create-instance-terraform)
- [https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance](https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance)
- [https://docs.cloud.google.com/memorystore/docs/redis/find-and-set-maintenance-windows](https://docs.cloud.google.com/memorystore/docs/redis/find-and-set-maintenance-windows)
- [https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/list_instances](https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/list_instances)

## Supporting Pages

### "Quickstart: Create a Memorystore for Redis instance by using Terraform \_\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/create-instance-terraform](https://docs.cloud.google.com/memorystore/docs/redis/create-instance-terraform)
- Source ID: `site-docs-root-2`
- Final score: 343
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required roles To get the permissions that you need to create a Memorystore for Redis instance, ask your administrator to grant you the following IAM roles on the project: Cloud Memorystore Redis Admin ( roles/redis.admin ) Compute Instance Admin (v1) ( roles/compute.instanceAdmin.v1 ) Service Account User ( roles/iam.serviceAccountUser ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Add the following resource to your Terraform configuration file: resource "google redis instance" "my memorystore redis instance" { name = "myinstance" tier = "BASIC" memory size gb = 2 region = "us-central1" redis version = "REDIS 6 X" } Add the following output value to your Terraform configuration file to print the IP address of the instance.
- Connect to the Memorystore for Redis instance from a Compute Engine VM You can connect to the Memorystore for Redis instance from any Compute Engine VM that uses the instance's authorized network with a supported RFC 1918 IP address .
- Create a Memorystore for Redis instance In this section, you create a 2-GB Memorystore for Redis instance that's located in the us-central1 region and is in the Basic tier.

### "Connect to a Redis instance \_|\_ Memorystore for Redis \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance](https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance)
- Source ID: `site-docs-root`
- Final score: 339
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Connect to a Redis instance from a Compute Engine VM using telnet You can connect to the Memorystore for Redis instance from any Compute Engine VM that uses the instance's authorized network with a supported RFC 1918 IP address .
- Note: If you are looking for the Memorystore for Redis Cluster documentation, see Connect to a Memorystore for Redis Cluster instance .
- Make a new file in which to put Stunnel configuration information by running the following command: sudo vim /etc/stunnel/redis-client.conf Paste the following text in the file, replacing redis-instance-ip with the Redis instance's IP address: output=/tmp/stunnel.log CAfile=/tmp/server ca.pem client=yes pid=/var/run/stunnel.pid verifyChain=yes sslVersion=TLSv1.2 [redis] accept=127.0.0.1:6378 connect= redis-instance-ip :6378 Start stunnel by running the following command: sudo stunnel /etc/stunnel/redis-client.conf Verify that stunnel is running: ps aux grep stunnel Restart Stunnel by running the following commands: sudo systemctl restart stunnel4 Note: You can use the ps aux grep stunnel command before and after restarting stunnel to confirm that the restart was successful.
- If your cluster is version 1.7 or lower, or your version 1.8 or higher cluster doesn't have IP aliases enabled, follow these workaround steps before trying to connect to your instance: Workaround Run the following commands, replacing RESERVED IP RANGE with the reserved IP range of your instance: git clone https://github.com/bowei/k8s-custom-iptables.git cd k8s-custom-iptables/ TARGETS=" RESERVED IP RANGE " ./install.sh If you don't know the reserved IP range of your instance, you can find out by entering this command: gcloud redis instances describe INSTANCE ID --region [REGION] For more information about IP aliases, including how to create a cluster with this setting enabled, see Creating a VPC-native cluster .

### "Find and set maintenance windows \_|\_ Memorystore for Redis \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/find-and-set-maintenance-windows](https://docs.cloud.google.com/memorystore/docs/redis/find-and-set-maintenance-windows)
- Source ID: `site-docs-root-2`
- Final score: 339
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Find scheduled maintenance If maintenance has been scheduled for your instance, you can view it using the following instructions: Console Go to the Memorystore for Redis page in the Google Cloud console.
- If you want to designate a specific time, select Custom day and time , choose the new time, and click Reschedule . gcloud Note: You can only defer a maintenance update for up to one week from when a maintenance update is originally scheduled for your instance. gcloud redis instances reschedule-maintenance INSTANCE ID --region= REGION --reschedule-type= RESCHEDULE TYPE [--schedule-time= RESHEDULE TIME ] where: INSTANCE ID is the ID of the instance REGION is the region where your instance is located RESCHEDULE TYPE is the type of rescheduled update.
- Reschedule planned maintenance Caution: if you programmatically reschedule maintenance in bulk requests (not natively supported by Memorystore for Redis), limit batch reschedule sizes to 100 instances per batch.
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback Find and set maintenance windows Stay organized with collections Save and categorize content based on your preferences.

### "MCP Tools Reference: redis.googleapis.com \_|\_ Memorystore for Redis \_\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/list_instances](https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/list_instances)
- Source ID: `site-api-reference`
- Final score: 329
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Instance JSON representation { "name" : string , "displayName" : string , "labels" : { string : string , ... } , "locationId" : string , "alternativeLocationId" : string , "redisVersion" : string , "reservedIpRange" : string , "secondaryIpRange" : string , "host" : string , "port" : integer , "currentLocationId" : string , "createTime" : string , "state" : enum ( State ) , "statusMessage" : string , "redisConfigs" : { string : string , ... } , "tier" : enum ( Tier ) , "memorySizeGb" : integer , "authorizedNetwork" : string , "persistenceIamIdentity" : string , "connectMode" : enum ( ConnectMode ) , "authEnabled" : boolean , "serverCaCerts" : [ { object ( TlsCertificate ) } ] , "transitEncryptionMode" : enum ( TransitEncryptionMode ) , "maintenancePolicy" : { object ( MaintenancePolicy ) } , "maintenanceSchedule" : { object ( MaintenanceSchedule ) } , "replicaCount" : integer , "nodes" : [ { object ( NodeInfo ) } ] , "readEndpoint" : string , "readEndpointPort" : integer , "readReplicasMode" : enum ( ReadReplicasMode ) , "customerManagedKey" : string , "persistenceConfig" : { object ( PersistenceConfig ) } , "suspensionReasons" : [ enum ( SuspensionReason ) ] , "maintenanceVersion" : string , "availableMaintenanceVersions" : [ string ] , "tags" : { string : string , ... } , // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . } Fields name string Required.
- If in such an aggregated query a location is unavailable, a placeholder Redis entry is included in the response with the name field set to a value of the form projects/{project id}/locations/{location id}/instances/ - and the status field set to ERROR and status message field set to "location not available for ListInstances". nextPageToken string Token to retrieve the next page of results, or empty if there are no more results in the list. unreachable[] string Locations that could not be reached.
- Unique name of the resource in this scope including project and location using the form: projects/{project id}/locations/{location id}/instances/{instance id} Note: Redis instances are managed and addressed at regional level so location id here refers to a GCP region; however, users may choose which specific zone (or collection of zones for cross-zone instances) an instance should be provisioned in.
- Additional information about the current status of this instance, if available. redisConfigs map (key: string, value: string) Optional.

