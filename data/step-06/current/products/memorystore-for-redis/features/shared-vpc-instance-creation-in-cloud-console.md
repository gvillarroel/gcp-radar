---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.281Z"
product_name: "Memorystore for Redis"
product_slug: "memorystore-for-redis"
feature_name: "Shared VPC instance creation in Cloud Console"
feature_slug: "shared-vpc-instance-creation-in-cloud-console"
latest_feature_date: "2020-10-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances"
  - "https://docs.cloud.google.com/memorystore/docs/redis/create-instance-console"
  - "https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance-standard"
  - "https://docs.cloud.google.com/memorystore/docs/redis/find-and-set-maintenance-windows"
keywords:
  - "shared"
  - "vpc"
  - "instance"
  - "creation"
  - "in"
  - "console"
  - "users"
  - "can"
---

# Shared VPC instance creation in Cloud Console

Product: Memorystore for Redis
Coverage: MEDIUM

## Step 02 Summary

Users can create Redis instances with Shared VPC using private service access in the Google Cloud Console.

## Extended Definition

Users can create Redis instances with Shared VPC using private service access in the Google Cloud Console.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances](https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances)
- [https://docs.cloud.google.com/memorystore/docs/redis/create-instance-console](https://docs.cloud.google.com/memorystore/docs/redis/create-instance-console)
- [https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance-standard](https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance-standard)
- [https://docs.cloud.google.com/memorystore/docs/redis/find-and-set-maintenance-windows](https://docs.cloud.google.com/memorystore/docs/redis/find-and-set-maintenance-windows)

## Supporting Pages

### "Create and manage Redis instances \_|\_ Memorystore for Redis \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances](https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances)
- Source ID: `site-docs-root`
- Final score: 235
- Re-rank relevance: N/A

Evidence snippets:
- If you have multiple address ranges allocated for private services access, you can select which one to use with the following gcloud command: gcloud redis instances create INSTANCE ID --region= REGION --size= SIZE --connect-mode=PRIVATE SERVICE ACCESS --network= VPC NETWORK NAME --reserved-ip-range= RESERVED RANGE NAME Where: VPC NETWORK NAME is the name of network used to create the instance.
- For example: gcloud redis instances create myinstance --size=5 --region=us-central1 --project=my-service-project \ --network=projects/my-host-project/global/networks/my-host-shared-vpc \ --connect-mode=private-service-access Create a Redis instance that uses a centralized IP address range Centralized IP address range management is provided by using private services access .
- Create a Redis instance in a service project using the Shared VPC from the host project: gcloud redis instances create INSTANCE ID --size= SIZE --region= REGION ID --project= SERVICE PROJECT ID \ --network=projects/ HOST PROJECT ID /global/networks/ HOST NETWORK NAME \ --connect-mode=private-service-access Where: INSTANCE ID is the ID assigned to the instance.
- Create a Redis instance on a Shared VPC network from a service project This section explains how to create a Redis instance in a service project using the Shared VPC network from the host project.

### "Quickstart: Create a Memorystore for Redis instance by using the Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/create-instance-console](https://docs.cloud.google.com/memorystore/docs/redis/create-instance-console)
- Source ID: `site-docs-root`
- Final score: 213
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Replace VARIABLES with appropriate values. telnet INSTANCE IP ADDRESS 6379 If you can connect to the instance, then the command returns this result: Trying INSTANCE IP ADDRESS … Connected to INSTANCE IP ADDRESS In the telnet session, enter some Redis commands: Enter: PING Result: PONG Enter SET HELLO WORLD Result: +OK Enter: GET HELLO Result: $5 WORLD Clean up To avoid incurring charges to your Google Cloud account for the resources used on this page, follow these steps.
- Connect to the Memorystore for Redis instance from a Compute Engine VM You can connect to the Memorystore for Redis instance from any Compute Engine VM that uses the instance's authorized network with a supported RFC 1918 IP address .
- Create a Memorystore for Redis instance by using the Google Cloud console Learn how to create a Memorystore for Redis instance, connect to it, and then delete it.
- After you create the instance, obtain your instance's IP address by following these steps: In the Google Cloud console, go to the Memorystore for Redis page.

### "Connect to a Redis instance from an App Engine standard environment application\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance-standard](https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance-standard)
- Source ID: `site-docs-root-2`
- Final score: 205
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can connect to a Redis instance from the App Engine standard environment by using Serverless VPC Access .
- REDISPORT 6379 ; const client = redis . createClient ({ url : redis:// ${ REDISHOST } : ${ REDISPORT } , }); client . on ( 'error' , err = > console . error ( 'ERR:REDIS:' , err )); client . connect () . then (() = > { console . log ( 'Connected to Redis' ); http . createServer ( async ( req , res ) = > { try { const reply = await client . incr ( 'visits' ); res . writeHead ( 200 , { 'Content-Type' : 'text/plain' }); res . end ( Visitor number: ${ reply } \n ); } catch ( err ) { console . error ( err ); res . statusCode = 500 ; res . end ( err . message ); } }) . listen ( 8080 , () = > { console . log ( 'Server listening on port 8080' ); }); }) . catch ( err = > { console . error ( 'Failed to connect to Redis:' , err ); throw err ; }); Python This application uses Flask for web serving and the redis-py package to communicate with the Redis instance.
- Update the gae standard deployment/appengine-web.xml file to specify your Serverless VPC Access connector: <appengine-web-app xmlns="http://appengine.google.com/ns/1.0"> <runtime>java8</runtime> <threadsafe>true</threadsafe> <vpc-access-connector> <name>projects/[PROJECT ID]/locations/[REGION]/connectors/[CONNECTOR NAME]</name> </vpc-access-connector> </appengine-web-app> And update the src/main/resources/application.properties file with your Redis instance's IP address and port: redis . host = REDIS HOST IP redis . port = 6379 For more information about configuring your app, see appengine-web.xml Reference .
- Update the app's configuration to specify your Serverless VPC Access connector and the IP address and port of your Redis instance: Go Update the gae standard deployment/app.yaml file: runtime : go125 Update with Redis instance details env variables : REDISHOST : '<REDIS IP>' REDISPORT : '6379' Update with Serverless VPC Access connector details vpc access connector : name : 'projects/<PROJECT ID>/locations/<REGION>/connectors/<CONNECTOR NAME>' See app.yaml Configuration File for more details.

### "Find and set maintenance windows \_|\_ Memorystore for Redis \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/find-and-set-maintenance-windows](https://docs.cloud.google.com/memorystore/docs/redis/find-and-set-maintenance-windows)
- Source ID: `site-docs-root-2`
- Final score: 197
- Re-rank relevance: N/A

Evidence snippets:
- Under the Maintenance section, you can view the date and time of any scheduled maintenance updates. gcloud gcloud redis instances describe INSTANCE-ID --region= REGION where: INSTANCE ID is the ID of the instance REGION is the region where your instance is located The output for scheduled maintenance is as follows: maintenancePolicy: createTime: 'TIME STAMP' updateTime: 'TIME STAMP' maintenanceWindow: - day: DAY duration: 60 minutes hour: HOUR maintenanceSchedule: endTime: 'TIME STAMP' startTime: 'TIME STAMP' Where: maintenancePolicy shows information on the creation time of your preferred maintenance policy and the last time the policy was updated. createTime is when the maintenance policy is first created. updateTime is when the maintenance policy was last updated.
- Find scheduled maintenance If maintenance has been scheduled for your instance, you can view it using the following instructions: Console Go to the Memorystore for Redis page in the Google Cloud console.
- To reschedule maintenance, see the instructions below: Console Note: You can only defer a maintenance update for up to one week from when a maintenance update is originally scheduled for your instance.
- If you want to designate a specific time, select Custom day and time , choose the new time, and click Reschedule . gcloud Note: You can only defer a maintenance update for up to one week from when a maintenance update is originally scheduled for your instance. gcloud redis instances reschedule-maintenance INSTANCE ID --region= REGION --reschedule-type= RESCHEDULE TYPE [--schedule-time= RESHEDULE TIME ] where: INSTANCE ID is the ID of the instance REGION is the region where your instance is located RESCHEDULE TYPE is the type of rescheduled update.

