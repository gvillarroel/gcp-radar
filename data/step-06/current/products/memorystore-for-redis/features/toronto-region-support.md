---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.278Z"
product_name: "Memorystore for Redis"
product_slug: "memorystore-for-redis"
feature_name: "Toronto region support"
feature_slug: "toronto-region-support"
latest_feature_date: "2021-08-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/list_instances"
  - "https://docs.cloud.google.com/memorystore/docs/redis/find-and-set-maintenance-windows"
  - "https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance"
  - "https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/create_instance"
keywords:
  - "toronto"
  - "region"
  - "memorystore"
  - "for"
  - "redis"
  - "is"
  - "available"
  - "in"
---

# Toronto region support

Product: Memorystore for Redis
Coverage: MEDIUM

## Step 02 Summary

Memorystore for Redis is available in the Toronto region (northamerica-northeast2).

## Extended Definition

Memorystore for Redis is available in the Toronto region (northamerica-northeast2).

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/list_instances](https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/list_instances)
- [https://docs.cloud.google.com/memorystore/docs/redis/find-and-set-maintenance-windows](https://docs.cloud.google.com/memorystore/docs/redis/find-and-set-maintenance-windows)
- [https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance](https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance)
- [https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/create_instance)

## Supporting Pages

### "MCP Tools Reference: redis.googleapis.com \_|\_ Memorystore for Redis \_\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/list_instances](https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/list_instances)
- Source ID: `site-api-reference`
- Final score: 344
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Instance JSON representation { "name" : string , "displayName" : string , "labels" : { string : string , ... } , "locationId" : string , "alternativeLocationId" : string , "redisVersion" : string , "reservedIpRange" : string , "secondaryIpRange" : string , "host" : string , "port" : integer , "currentLocationId" : string , "createTime" : string , "state" : enum ( State ) , "statusMessage" : string , "redisConfigs" : { string : string , ... } , "tier" : enum ( Tier ) , "memorySizeGb" : integer , "authorizedNetwork" : string , "persistenceIamIdentity" : string , "connectMode" : enum ( ConnectMode ) , "authEnabled" : boolean , "serverCaCerts" : [ { object ( TlsCertificate ) } ] , "transitEncryptionMode" : enum ( TransitEncryptionMode ) , "maintenancePolicy" : { object ( MaintenancePolicy ) } , "maintenanceSchedule" : { object ( MaintenanceSchedule ) } , "replicaCount" : integer , "nodes" : [ { object ( NodeInfo ) } ] , "readEndpoint" : string , "readEndpointPort" : integer , "readReplicasMode" : enum ( ReadReplicasMode ) , "customerManagedKey" : string , "persistenceConfig" : { object ( PersistenceConfig ) } , "suspensionReasons" : [ enum ( SuspensionReason ) ] , "maintenanceVersion" : string , "availableMaintenanceVersions" : [ string ] , "tags" : { string : string , ... } , // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . } Fields name string Required.
- If in such an aggregated query a location is unavailable, a placeholder Redis entry is included in the response with the name field set to a value of the form projects/{project id}/locations/{location id}/instances/ - and the status field set to ERROR and status message field set to "location not available for ListInstances". nextPageToken string Token to retrieve the next page of results, or empty if there are no more results in the list. unreachable[] string Locations that could not be reached.
- Unique name of the resource in this scope including project and location using the form: projects/{project id}/locations/{location id}/instances/{instance id} Note: Redis instances are managed and addressed at regional level so location id here refers to a GCP region; however, users may choose which specific zone (or collection of zones for cross-zone instances) an instance should be provisioned in.
- Additional information about the current status of this instance, if available. redisConfigs map (key: string, value: string) Optional.

### "Find and set maintenance windows \_|\_ Memorystore for Redis \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/find-and-set-maintenance-windows](https://docs.cloud.google.com/memorystore/docs/redis/find-and-set-maintenance-windows)
- Source ID: `site-docs-root-2`
- Final score: 340
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Under the Maintenance section, you can view the date and time of any scheduled maintenance updates. gcloud gcloud redis instances describe INSTANCE-ID --region= REGION where: INSTANCE ID is the ID of the instance REGION is the region where your instance is located The output for scheduled maintenance is as follows: maintenancePolicy: createTime: 'TIME STAMP' updateTime: 'TIME STAMP' maintenanceWindow: - day: DAY duration: 60 minutes hour: HOUR maintenanceSchedule: endTime: 'TIME STAMP' startTime: 'TIME STAMP' Where: maintenancePolicy shows information on the creation time of your preferred maintenance policy and the last time the policy was updated. createTime is when the maintenance policy is first created. updateTime is when the maintenance policy was last updated.
- If you want to designate a specific time, select Custom day and time , choose the new time, and click Reschedule . gcloud Note: You can only defer a maintenance update for up to one week from when a maintenance update is originally scheduled for your instance. gcloud redis instances reschedule-maintenance INSTANCE ID --region= REGION --reschedule-type= RESCHEDULE TYPE [--schedule-time= RESHEDULE TIME ] where: INSTANCE ID is the ID of the instance REGION is the region where your instance is located RESCHEDULE TYPE is the type of rescheduled update.
- Click Save . gcloud Run the following command to set a maintenance window for a Redis instance: gcloud redis instances update INSTANCE ID --region= REGION --maintenance-window-day= DAY --maintenance-window-hour= HOUR Where: INSTANCE ID is the ID of the instance REGION is the region where your instance is located DAY is the day you want maintenance to occur.
- Reschedule planned maintenance Caution: if you programmatically reschedule maintenance in bulk requests (not natively supported by Memorystore for Redis), limit batch reschedule sizes to 100 instances per batch.

### "Connect to a Redis instance \_|\_ Memorystore for Redis \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance](https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance)
- Source ID: `site-docs-root`
- Final score: 336
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If your cluster is version 1.7 or lower, or your version 1.8 or higher cluster doesn't have IP aliases enabled, follow these workaround steps before trying to connect to your instance: Workaround Run the following commands, replacing RESERVED IP RANGE with the reserved IP range of your instance: git clone https://github.com/bowei/k8s-custom-iptables.git cd k8s-custom-iptables/ TARGETS=" RESERVED IP RANGE " ./install.sh If you don't know the reserved IP range of your instance, you can find out by entering this command: gcloud redis instances describe INSTANCE ID --region [REGION] For more information about IP aliases, including how to create a cluster with this setting enabled, see Creating a VPC-native cluster .
- If your cluster is version 1.7 or lower, or your version 1.8 or higher cluster doesn't have IP aliases enabled, follow these workaround steps before trying to connect to your instance: Workaround Run the following commands, replacing RESERVED IP RANGE with the reserved IP range of your instance: git clone https://github.com/bowei/k8s-custom-iptables.git cd k8s-custom-iptables/ TARGETS=" RESERVED IP RANGE " ./install.sh If you don't know the reserved IP range of your instance, you can find out by entering this command: gcloud redis instances describe INSTANCE ID --region= REGION For more information about IP aliases, including how to create a cluster with this setting enabled, see Creating a VPC-native cluster .
- Configure your Compute Engine VM for use with Stunnel: Make a new file in which to put your Certificate Authority (CA) by running the following command: sudo vim /tmp/server ca.pem View your Redis instance's Certificate Authority(s) by running the following command in the standard terminal you use to manage Google Cloud resources (not the Compute Engine terminal): gcloud redis instances describe instance-id --region= region There may be up to three CAs.
- Connect to a Redis instance from a Compute Engine VM using telnet You can connect to the Memorystore for Redis instance from any Compute Engine VM that uses the instance's authorized network with a supported RFC 1918 IP address .

### "MCP Tools Reference: redis.googleapis.com \_|\_ Memorystore for Redis \_\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/create_instance](https://docs.cloud.google.com/memorystore/docs/redis/reference/mcp/tools_list/create_instance)
- Source ID: `site-api-reference`
- Final score: 330
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A Redis [Instance] resource Instance JSON representation { "name" : string , "displayName" : string , "labels" : { string : string , ... } , "locationId" : string , "alternativeLocationId" : string , "redisVersion" : string , "reservedIpRange" : string , "secondaryIpRange" : string , "host" : string , "port" : integer , "currentLocationId" : string , "createTime" : string , "state" : enum ( State ) , "statusMessage" : string , "redisConfigs" : { string : string , ... } , "tier" : enum ( Tier ) , "memorySizeGb" : integer , "authorizedNetwork" : string , "persistenceIamIdentity" : string , "connectMode" : enum ( ConnectMode ) , "authEnabled" : boolean , "serverCaCerts" : [ { object ( TlsCertificate ) } ] , "transitEncryptionMode" : enum ( TransitEncryptionMode ) , "maintenancePolicy" : { object ( MaintenancePolicy ) } , "maintenanceSchedule" : { object ( MaintenanceSchedule ) } , "replicaCount" : integer , "nodes" : [ { object ( NodeInfo ) } ] , "readEndpoint" : string , "readEndpointPort" : integer , "readReplicasMode" : enum ( ReadReplicasMode ) , "customerManagedKey" : string , "persistenceConfig" : { object ( PersistenceConfig ) } , "suspensionReasons" : [ enum ( SuspensionReason ) ] , "maintenanceVersion" : string , "availableMaintenanceVersions" : [ string ] , "tags" : { string : string , ... } , // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . } Fields name string Required.
- Unique name of the resource in this scope including project and location using the form: projects/{project id}/locations/{location id}/instances/{instance id} Note: Redis instances are managed and addressed at regional level so location id here refers to a GCP region; however, users may choose which specific zone (or collection of zones for cross-zone instances) an instance should be provisioned in.
- Additional information about the current status of this instance, if available. redisConfigs map (key: string, value: string) Optional.
- Tool: create instance Create a Memorystore for Redis instance.

