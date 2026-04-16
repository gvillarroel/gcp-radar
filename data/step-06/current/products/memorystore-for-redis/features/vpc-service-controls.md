---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.282Z"
product_name: "Memorystore for Redis"
product_slug: "memorystore-for-redis"
feature_name: "VPC Service Controls"
feature_slug: "vpc-service-controls"
latest_feature_date: "2020-07-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance"
  - "https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview"
  - "https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance-cloud-run"
  - "https://docs.cloud.google.com/memorystore/docs/redis/networking"
keywords:
  - "vpc"
  - "controls"
  - "memorystore"
  - "for"
  - "redis"
  - "supports"
---

# VPC Service Controls

Product: Memorystore for Redis
Coverage: MEDIUM

## Step 02 Summary

Memorystore for Redis supports VPC Service Controls.

## Extended Definition

Memorystore for Redis supports VPC Service Controls.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance](https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance)
- [https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview](https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview)
- [https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance-cloud-run](https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance-cloud-run)
- [https://docs.cloud.google.com/memorystore/docs/redis/networking](https://docs.cloud.google.com/memorystore/docs/redis/networking)

## Supporting Pages

### "Connect to a Redis instance \_|\_ Memorystore for Redis \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance](https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- For a list of Google Cloud environments that Memorystore for Redis supports, see Supported environments .
- If your cluster is version 1.7 or lower, or your version 1.8 or higher cluster doesn't have IP aliases enabled, follow these workaround steps before trying to connect to your instance: Workaround Run the following commands, replacing RESERVED IP RANGE with the reserved IP range of your instance: git clone https://github.com/bowei/k8s-custom-iptables.git cd k8s-custom-iptables/ TARGETS=" RESERVED IP RANGE " ./install.sh If you don't know the reserved IP range of your instance, you can find out by entering this command: gcloud redis instances describe INSTANCE ID --region [REGION] For more information about IP aliases, including how to create a cluster with this setting enabled, see Creating a VPC-native cluster .
- If your cluster is version 1.7 or lower, or your version 1.8 or higher cluster doesn't have IP aliases enabled, follow these workaround steps before trying to connect to your instance: Workaround Run the following commands, replacing RESERVED IP RANGE with the reserved IP range of your instance: git clone https://github.com/bowei/k8s-custom-iptables.git cd k8s-custom-iptables/ TARGETS=" RESERVED IP RANGE " ./install.sh If you don't know the reserved IP range of your instance, you can find out by entering this command: gcloud redis instances describe INSTANCE ID --region= REGION For more information about IP aliases, including how to create a cluster with this setting enabled, see Creating a VPC-native cluster .
- Connect to a Redis instance from a Compute Engine VM using telnet You can connect to the Memorystore for Redis instance from any Compute Engine VM that uses the instance's authorized network with a supported RFC 1918 IP address .

### Memorystore for Redis overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview](https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- Connect to a Memorystore for Redis instance You can use any standard Redis client on the following environments to connect to your Memorystore for Redis instance : App Engine flexible environment App Engine standard environment Compute Engine VM instances Cloud Run functions Cloud Run Google Kubernetes Engine clusters Some serverless environments require a Serverless VPC Access connector as a prerequisite for connectivity with Memorystore for Redis.
- Scale, as needed: Memorystore for Redis enables scaling your instances up to a maximum of 300 GB and supports up to 16 Gbps of network throughput.
- Memorystore for Redis currently supports RDB snapshots and exporting data .
- Tier capabilities The following table describes the differences between the available Memorystore for Redis service tiers: Specifications Basic Tier Standard Tier (read replicas disabled) Standard Tier (read replicas enabled) Description Provides a cache with no replication Provides redundancy and availability using replication Provides redundancy and availability using replication to backup data, and multiple Read replicas to increase read throughput Max Redis primary size 300 GB 300 GB 300 GB Max network bandwidth 16 Gbps 16 Gbps 16 Gbps total for writes.

### "Connect to a Redis instance from a Cloud Run service \_|\_ Memorystore for\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance-cloud-run](https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance-cloud-run)
- Source ID: `site-docs-root-2`
- Final score: 204
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Clone the repository for your chosen programming language and navigate to the folder that contains the sample code: Go git clone https : //github.com/GoogleCloudPlatform/golang-samples cd golang - samples / memorystore / redis Java git clone https : //github.com/GoogleCloudPlatform/java-docs-samples cd java - docs - samples / memorystore / redis Node.js git clone https : //github.com/GoogleCloudPlatform/nodejs-docs-samples cd nodejs - docs - samples / memorystore / redis Python git clone https : // github . com / GoogleCloudPlatform / python - docs - samples cd python - docs - samples / memorystore / redis This sample application increments a Redis counter every time the / endpoint is accessed.
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback Connect to a Redis instance from a Cloud Run service Stay organized with collections Save and categorize content based on your preferences.
- Prepare VPC network egress for configuration To connect to your Redis instance, your Cloud Run service must have access to the Redis instance's authorized VPC network.
- It uses the Jedis library: <dependency> <groupId>redis.clients</groupId> <artifactId>jedis</artifactId> <version>5.1.0</version> </dependency> The AppServletContextListener class is used to create a long-lived Redis connection pool: package com.example.redis ; import java.io.IOException ; import java.util.Properties ; import javax.servlet.ServletContextEvent ; import javax.servlet.ServletContextListener ; import javax.servlet.annotation.WebListener ; import redis.clients.jedis.JedisPool ; import redis.clients.jedis.JedisPoolConfig ; @WebListener public class AppServletContextListener implements ServletContextListener { private Properties config = new Properties (); private JedisPool createJedisPool () throws IOException { String host ; Integer port ; config . load ( Thread . currentThread () . getContextClassLoader () . getResourceAsStream ( "application.properties" )); host = config . getProperty ( "redis.host" ); port = Integer . valueOf ( config . getProperty ( "redis.port" , "6379" )); JedisPoolConfig poolConfig = new JedisPoolConfig (); // Default : 8, consider how many concurrent connections into Redis you will need under load poolConfig . setMaxTotal ( 128 ); return new JedisPool ( poolConfig , host , port ); } @Override public void contextDestroyed ( ServletContextEvent event ) { JedisPool jedisPool = ( JedisPool ) event . getServletContext (). getAttribute ( "jedisPool" ); if ( jedisPool != null ) { jedisPool . destroy (); event . getServletContext (). setAttribute ( "jedisPool" , null ); } } // Run this before web application is started @Override public void contextInitialized ( ServletContextEvent event ) { JedisPool jedisPool = ( JedisPool ) event . getServletContext (). getAttribute ( "jedisPool" ); if ( jedisPool == null ) { try { jedisPool = createJedisPool (); event . getServletContext (). setAttribute ( "jedisPool" , jedisPool ); } catch ( IOException e ) { // handle exception } } } } The VisitCounterServlet class is a web servlet that increments a Redis counter: package com.example.redis ; import java.io.IOException ; import java.net.SocketException ; import javax.servlet.annotation.WebServlet ; import javax.servlet.http.HttpServlet ; import javax.servlet.http.HttpServletRequest ; import javax.servlet.http.HttpServletResponse ; import redis.clients.jedis.Jedis ; import redis.clients.jedis.JedisPool ; @WebServlet ( name = "Track visits" , value = "" ) public class VisitCounterServlet extends HttpServlet { @Override public void doGet ( HttpServletRequest req , HttpServletResponse resp ) throws IOException { try { JedisPool jedisPool = ( JedisPool ) req . getServletContext (). getAttribute ( "jedisPool" ); if ( jedisPool == null ) { throw new SocketException ( "Error connecting to Jedis pool" ); } Long visits ; try ( Jedis jedis = jedisPool . getResource ()) { visits = jedis . incr ( "visits" ); } resp . setStatus ( HttpServletResponse .

### Networking \_|\_ Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/networking](https://docs.cloud.google.com/memorystore/docs/redis/networking)
- Source ID: `site-docs-root`
- Final score: 204
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permission required to create a private services access connection in the UI: serviceusage.services.enable Needed to enable the Service Networking API. compute.addresses.create compute.addresses.list servicenetworking.services.addPeering gcloud permissions gcloud permissions required to check the private services access connection compute.networks.list Needed in both the local and host projects. gcloud permissions required to create a private services access connection serviceusage.services.enable Needed to enable the Service Networking API. compute.addresses.create compute.addresses.list servicenetworking.services.addPeering Supported networks and client IP ranges Memorystore for Redis supports RFC 1918 private IP addresses and some non-RFC 1918 private IP addresses.
- On-premises access with private services access You can connect from a client in an on-premises network if the on-premises network is connected to the VPC network to which your Memorystore for Redis instance is connected.
- Using private services access enables you to use the following capabilities for your Redis instance: Provision a Memorystore for Redis instance in a service project using Shared VPC.
- Also, Memorystore for Redis supports having Redis instances using private services access, and instances using direct peering, in the same project and in the same network.

