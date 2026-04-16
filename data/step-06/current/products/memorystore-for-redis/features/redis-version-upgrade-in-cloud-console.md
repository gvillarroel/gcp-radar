---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.279Z"
product_name: "Memorystore for Redis"
product_slug: "memorystore-for-redis"
feature_name: "Redis version upgrade in Cloud Console"
feature_slug: "redis-version-upgrade-in-cloud-console"
latest_feature_date: "2021-06-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/redis/about-upgrading-version"
  - "https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance-gce"
  - "https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints"
  - "https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances"
keywords:
  - "redis"
  - "version"
  - "upgrade"
  - "in"
  - "console"
  - "users"
  - "can"
  - "memorystore"
---

# Redis version upgrade in Cloud Console

Product: Memorystore for Redis
Coverage: MEDIUM

## Step 02 Summary

Users can upgrade a Memorystore for Redis instance's Redis version in the Google Cloud Console.

## Extended Definition

Users can upgrade a Memorystore for Redis instance's Redis version in the Google Cloud Console.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/redis/about-upgrading-version](https://docs.cloud.google.com/memorystore/docs/redis/about-upgrading-version)
- [https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance-gce](https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance-gce)
- [https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints](https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints)
- [https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances](https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances)

## Supporting Pages

### "About upgrading the Redis version of an instance \_|\_ Memorystore for Redis\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/about-upgrading-version](https://docs.cloud.google.com/memorystore/docs/redis/about-upgrading-version)
- Source ID: `site-docs-root-2`
- Final score: 294
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This page describes how your Memorystore instance behaves during a version upgrade operation, how an upgrade operation can affect your application, and when you should run an upgrade operation.
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback About upgrading the Redis version of an instance Stay organized with collections Save and categorize content based on your preferences.
- Best practices for upgrading an instance's Redis version We recommend that you upgrade to version 7.0 and later because Certificate Authority rotation no longer drops connections.
- Depending on the instance's tier , running a version upgrade operation can have performance and storage implications for your application.

### "Connect to a Redis instance from a Compute Engine VM \_|\_ Memorystore for\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance-gce](https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance-gce)
- Source ID: `site-docs-root-2`
- Final score: 274
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This is a sample package.json file: { "name" : "memorystore-redis" , "description" : "An example of using Memorystore(Redis) with Node.js" , "version" : "0.0.1" , "private" : true , "license" : "Apache Version 2.0" , "author" : "Google Inc." , "engines" : { "node" : ">=16.0.0" }, "dependencies" : { "redis" : "^4.0.0" } } Sample application code: 'use strict' ; const http = require ( 'http' ); const redis = require ( 'redis' ); const REDISHOST = process . env .
- It uses the Jedis library: <dependency> <groupId>redis.clients</groupId> <artifactId>jedis</artifactId> <version>5.1.0</version> </dependency> The AppServletContextListener class is used to create a long-lived Redis connection pool: package com.example.redis ; import java.io.IOException ; import java.util.Properties ; import javax.servlet.ServletContextEvent ; import javax.servlet.ServletContextListener ; import javax.servlet.annotation.WebListener ; import redis.clients.jedis.JedisPool ; import redis.clients.jedis.JedisPoolConfig ; @WebListener public class AppServletContextListener implements ServletContextListener { private Properties config = new Properties (); private JedisPool createJedisPool () throws IOException { String host ; Integer port ; config . load ( Thread . currentThread () . getContextClassLoader () . getResourceAsStream ( "application.properties" )); host = config . getProperty ( "redis.host" ); port = Integer . valueOf ( config . getProperty ( "redis.port" , "6379" )); JedisPoolConfig poolConfig = new JedisPoolConfig (); // Default : 8, consider how many concurrent connections into Redis you will need under load poolConfig . setMaxTotal ( 128 ); return new JedisPool ( poolConfig , host , port ); } @Override public void contextDestroyed ( ServletContextEvent event ) { JedisPool jedisPool = ( JedisPool ) event . getServletContext (). getAttribute ( "jedisPool" ); if ( jedisPool != null ) { jedisPool . destroy (); event . getServletContext (). setAttribute ( "jedisPool" , null ); } } // Run this before web application is started @Override public void contextInitialized ( ServletContextEvent event ) { JedisPool jedisPool = ( JedisPool ) event . getServletContext (). getAttribute ( "jedisPool" ); if ( jedisPool == null ) { try { jedisPool = createJedisPool (); event . getServletContext (). setAttribute ( "jedisPool" , jedisPool ); } catch ( IOException e ) { // handle exception } } } } The VisitCounterServlet class is a web servlet that increments a Redis counter: package com.example.redis ; import java.io.IOException ; import java.net.SocketException ; import javax.servlet.annotation.WebServlet ; import javax.servlet.http.HttpServlet ; import javax.servlet.http.HttpServletRequest ; import javax.servlet.http.HttpServletResponse ; import redis.clients.jedis.Jedis ; import redis.clients.jedis.JedisPool ; @WebServlet ( name = "Track visits" , value = "" ) public class VisitCounterServlet extends HttpServlet { @Override public void doGet ( HttpServletRequest req , HttpServletResponse resp ) throws IOException { try { JedisPool jedisPool = ( JedisPool ) req . getServletContext (). getAttribute ( "jedisPool" ); if ( jedisPool == null ) { throw new SocketException ( "Error connecting to Jedis pool" ); } Long visits ; try ( Jedis jedis = jedisPool . getResource ()) { visits = jedis . incr ( "visits" ); } resp . setStatus ( HttpServletResponse .
- REDISPORT 6379 ; const client = redis . createClient ({ url : redis:// ${ REDISHOST } : ${ REDISPORT } , }); client . on ( 'error' , err = > console . error ( 'ERR:REDIS:' , err )); client . connect () . then (() = > { console . log ( 'Connected to Redis' ); http . createServer ( async ( req , res ) = > { try { const reply = await client . incr ( 'visits' ); res . writeHead ( 200 , { 'Content-Type' : 'text/plain' }); res . end ( Visitor number: ${ reply } \n ); } catch ( err ) { console . error ( err ); res . statusCode = 500 ; res . end ( err . message ); } }) . listen ( 8080 , () = > { console . log ( 'Server listening on port 8080' ); }); }) . catch ( err = > { console . error ( 'Failed to connect to Redis:' , err ); throw err ; }); Python This application uses Flask for web serving and the redis-py package to communicate with the Redis instance.
- Clone the repository for your chosen programming language and navigate to the folder that contains the sample code: Go git clone https : //github.com/GoogleCloudPlatform/golang-samples cd golang - samples / memorystore / redis Java git clone https : //github.com/GoogleCloudPlatform/java-docs-samples cd java - docs - samples / memorystore / redis Node.js git clone https : //github.com/GoogleCloudPlatform/nodejs-docs-samples cd nodejs - docs - samples / memorystore / redis Python git clone https : // github . com / GoogleCloudPlatform / python - docs - samples cd python - docs - samples / memorystore / redis This sample application increments a Redis counter every time the / endpoint is accessed.

### "Manage Memorystore for Redis resources with custom constraints \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints](https://docs.cloud.google.com/memorystore/docs/redis/custom-constraints)
- Source ID: `site-docs-root-2`
- Final score: 270
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Memorystore for Redis Instance resource.alternativeLocationId resource.authEnabled resource.authorizedNetwork resource.availableMaintenanceVersions resource.connectMode resource.customerManagedKey resource.displayName resource.locationId resource.maintenancePolicy.description resource.maintenancePolicy.weeklyMaintenanceWindow.day resource.maintenanceVersion resource.memorySizeGb resource.name resource.persistenceConfig.persistenceMode resource.persistenceConfig.rdbSnapshotPeriod resource.persistenceConfig.rdbSnapshotStartTime resource.readReplicasMode resource.redisConfigs resource.redisVersion resource.replicaCount resource.reservedIpRange resource.secondaryIpRange resource.suspensionReasons resource.tier resource.transitEncryptionMode Example custom constraints The following table provides an example custom constraint that restricts Redis instance to one replica: Description Constraint syntax Restrict Redis instances with one replicas name : organizations/ ORGANIZATION ID /customConstraints/custom.restrictInstanceToOnereplica resourceTypes : - redis.googleapis.com/Instance methodTypes : - CREATE - UPDATE condition : "resource.replicaCount >= 2" actionType : DENY displayName : Restrict Redis instances to one replica description : Prevent users from creating Redis instances with more than one replica What's next See Introduction to the Organization Policy Service to learn more about organization policies.
- You could test this constraint by running the gcloud redis instances create command with replica-count set to 2 as demonstrated in the following snippet: gcloud redis instances create redis-test-instance \ --project=my-project \ --tier=standard \ --size=16 \ --region=us-central1 \ --redis-version=redis 7 0 \ --network=projects/my-project/global/networks/default \ --connect-mode=PRIVATE SERVICE ACCESS \ --read-replicas-mode=READ REPLICAS ENABLED \ --replica-count=2 The output is similar to the following: Operation denied by custom org policies: ["customConstraints/custom.restrictInstanceToOnereplica": "Prevent users from creating Redis instances with more than one replica"] Memorystore for Redis supported resources and operations The following Memorystore for Redis custom constraint fields are available to use when you create or update a Memorystore for Redis resource .
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback Manage Memorystore for Redis resources with custom constraints Stay organized with collections Save and categorize content based on your preferences.
- RESOURCE NAME : the name (not the URI) of the Memorystore for Redis resource containing the object and field you want to restrict.

### "Create and manage Redis instances \_|\_ Memorystore for Redis \_|\_ Google\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances](https://docs.cloud.google.com/memorystore/docs/redis/create-manage-instances)
- Source ID: `site-docs-root`
- Final score: 268
- Re-rank relevance: N/A

Evidence snippets:
- To choose one of the available OSS Redis versions for Memorystore for Redis, use the --redis-version flag with one of the following values: redis 7 2 redis 7 0 (Default) redis 6 X redis 5 0 redis 4 0 redis 3 2 For example: gcloud redis instances create myinstance --size=5 --region=us-central1 \ --zone=us-central1-a --redis-version=redis 6 X Networking You can create Redis instances using one of two connection modes : --connect-mode=PRIVATE SERVICE ACCESS or --connect-mode=DIRECT PEERING .
- You can view summary information about a Memorystore for Redis instance by using either the Google Cloud console or the gcloud CLI .
- Optional flags Redis version Important: You can also upgrade an existing Redis instance to a more recent OSS Redis version.
- List instances You can list Memorystore for Redis instances by using either the Google Cloud console or the gcloud CLI .

