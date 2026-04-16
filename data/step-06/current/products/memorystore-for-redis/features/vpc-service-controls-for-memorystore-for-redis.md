---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.283Z"
product_name: "Memorystore for Redis"
product_slug: "memorystore-for-redis"
feature_name: "VPC Service Controls for Memorystore for Redis"
feature_slug: "vpc-service-controls-for-memorystore-for-redis"
latest_feature_date: "2020-05-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview"
  - "https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance"
  - "https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance-cloud-run"
  - "https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance-functions"
keywords:
  - "vpc"
  - "controls"
  - "for"
  - "memorystore"
  - "redis"
  - "allows"
  - "to"
  - "be"
---

# VPC Service Controls for Memorystore for Redis

Product: Memorystore for Redis
Coverage: MEDIUM

## Step 02 Summary

Allows Memorystore for Redis to be protected by VPC Service Controls.

## Extended Definition

Allows Memorystore for Redis to be protected by VPC Service Controls.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview](https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview)
- [https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance](https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance)
- [https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance-cloud-run](https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance-cloud-run)
- [https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance-functions](https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance-functions)

## Supporting Pages

### Memorystore for Redis overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview](https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview)
- Source ID: `site-docs-root`
- Final score: 310
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Connect to a Memorystore for Redis instance You can use any standard Redis client on the following environments to connect to your Memorystore for Redis instance : App Engine flexible environment App Engine standard environment Compute Engine VM instances Cloud Run functions Cloud Run Google Kubernetes Engine clusters Some serverless environments require a Serverless VPC Access connector as a prerequisite for connectivity with Memorystore for Redis.
- Tier capabilities The following table describes the differences between the available Memorystore for Redis service tiers: Specifications Basic Tier Standard Tier (read replicas disabled) Standard Tier (read replicas enabled) Description Provides a cache with no replication Provides redundancy and availability using replication Provides redundancy and availability using replication to backup data, and multiple Read replicas to increase read throughput Max Redis primary size 300 GB 300 GB 300 GB Max network bandwidth 16 Gbps 16 Gbps 16 Gbps total for writes.
- Features The following table describes the features that Memorystore for Redis provides: Fully managed: Deploying and maintaining a Redis instance can be time consuming.
- Memorystore for Redis allows you the flexibility to choose from different service tiers and sizes that fit your performance and operational needs.

### "Connect to a Redis instance \_|\_ Memorystore for Redis \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance](https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance)
- Source ID: `site-docs-root`
- Final score: 302
- Re-rank relevance: N/A

Evidence snippets:
- If your cluster is version 1.7 or lower, or your version 1.8 or higher cluster doesn't have IP aliases enabled, follow these workaround steps before trying to connect to your instance: Workaround Run the following commands, replacing RESERVED IP RANGE with the reserved IP range of your instance: git clone https://github.com/bowei/k8s-custom-iptables.git cd k8s-custom-iptables/ TARGETS=" RESERVED IP RANGE " ./install.sh If you don't know the reserved IP range of your instance, you can find out by entering this command: gcloud redis instances describe INSTANCE ID --region [REGION] For more information about IP aliases, including how to create a cluster with this setting enabled, see Creating a VPC-native cluster .
- If your cluster is version 1.7 or lower, or your version 1.8 or higher cluster doesn't have IP aliases enabled, follow these workaround steps before trying to connect to your instance: Workaround Run the following commands, replacing RESERVED IP RANGE with the reserved IP range of your instance: git clone https://github.com/bowei/k8s-custom-iptables.git cd k8s-custom-iptables/ TARGETS=" RESERVED IP RANGE " ./install.sh If you don't know the reserved IP range of your instance, you can find out by entering this command: gcloud redis instances describe INSTANCE ID --region= REGION For more information about IP aliases, including how to create a cluster with this setting enabled, see Creating a VPC-native cluster .
- Make a new file in which to put Stunnel configuration information by running the following command: sudo vim /etc/stunnel/redis-client.conf Paste the following text in the file, replacing redis-instance-ip with the Redis instance's IP address: output=/tmp/stunnel.log CAfile=/tmp/server ca.pem client=yes pid=/var/run/stunnel.pid verifyChain=yes sslVersion=TLSv1.2 [redis] accept=127.0.0.1:6378 connect= redis-instance-ip :6378 Start stunnel by running the following command: sudo stunnel /etc/stunnel/redis-client.conf Verify that stunnel is running: ps aux grep stunnel Restart Stunnel by running the following commands: sudo systemctl restart stunnel4 Note: You can use the ps aux grep stunnel command before and after restarting stunnel to confirm that the restart was successful.
- Configure your Compute Engine VM for use with Stunnel: Make a new file in which to put your Certificate Authority (CA) by running the following command: sudo vim /tmp/server ca.pem View your Redis instance's Certificate Authority(s) by running the following command in the standard terminal you use to manage Google Cloud resources (not the Compute Engine terminal): gcloud redis instances describe instance-id --region= region There may be up to three CAs.

### "Connect to a Redis instance from a Cloud Run service \_|\_ Memorystore for\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance-cloud-run](https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance-cloud-run)
- Source ID: `site-docs-root-2`
- Final score: 296
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It uses the Jedis library: <dependency> <groupId>redis.clients</groupId> <artifactId>jedis</artifactId> <version>5.1.0</version> </dependency> The AppServletContextListener class is used to create a long-lived Redis connection pool: package com.example.redis ; import java.io.IOException ; import java.util.Properties ; import javax.servlet.ServletContextEvent ; import javax.servlet.ServletContextListener ; import javax.servlet.annotation.WebListener ; import redis.clients.jedis.JedisPool ; import redis.clients.jedis.JedisPoolConfig ; @WebListener public class AppServletContextListener implements ServletContextListener { private Properties config = new Properties (); private JedisPool createJedisPool () throws IOException { String host ; Integer port ; config . load ( Thread . currentThread () . getContextClassLoader () . getResourceAsStream ( "application.properties" )); host = config . getProperty ( "redis.host" ); port = Integer . valueOf ( config . getProperty ( "redis.port" , "6379" )); JedisPoolConfig poolConfig = new JedisPoolConfig (); // Default : 8, consider how many concurrent connections into Redis you will need under load poolConfig . setMaxTotal ( 128 ); return new JedisPool ( poolConfig , host , port ); } @Override public void contextDestroyed ( ServletContextEvent event ) { JedisPool jedisPool = ( JedisPool ) event . getServletContext (). getAttribute ( "jedisPool" ); if ( jedisPool != null ) { jedisPool . destroy (); event . getServletContext (). setAttribute ( "jedisPool" , null ); } } // Run this before web application is started @Override public void contextInitialized ( ServletContextEvent event ) { JedisPool jedisPool = ( JedisPool ) event . getServletContext (). getAttribute ( "jedisPool" ); if ( jedisPool == null ) { try { jedisPool = createJedisPool (); event . getServletContext (). setAttribute ( "jedisPool" , jedisPool ); } catch ( IOException e ) { // handle exception } } } } The VisitCounterServlet class is a web servlet that increments a Redis counter: package com.example.redis ; import java.io.IOException ; import java.net.SocketException ; import javax.servlet.annotation.WebServlet ; import javax.servlet.http.HttpServlet ; import javax.servlet.http.HttpServletRequest ; import javax.servlet.http.HttpServletResponse ; import redis.clients.jedis.Jedis ; import redis.clients.jedis.JedisPool ; @WebServlet ( name = "Track visits" , value = "" ) public class VisitCounterServlet extends HttpServlet { @Override public void doGet ( HttpServletRequest req , HttpServletResponse resp ) throws IOException { try { JedisPool jedisPool = ( JedisPool ) req . getServletContext (). getAttribute ( "jedisPool" ); if ( jedisPool == null ) { throw new SocketException ( "Error connecting to Jedis pool" ); } Long visits ; try ( Jedis jedis = jedisPool . getResource ()) { visits = jedis . incr ( "visits" ); } resp . setStatus ( HttpServletResponse .
- REDISPORT 6379 ; const client = redis . createClient ({ url : redis:// ${ REDISHOST } : ${ REDISPORT } , }); client . on ( 'error' , err = > console . error ( 'ERR:REDIS:' , err )); client . connect () . then (() = > { console . log ( 'Connected to Redis' ); http . createServer ( async ( req , res ) = > { try { const reply = await client . incr ( 'visits' ); res . writeHead ( 200 , { 'Content-Type' : 'text/plain' }); res . end ( Visitor number: ${ reply } \n ); } catch ( err ) { console . error ( err ); res . statusCode = 500 ; res . end ( err . message ); } }) . listen ( 8080 , () = > { console . log ( 'Server listening on port 8080' ); }); }) . catch ( err = > { console . error ( 'Failed to connect to Redis:' , err ); throw err ; }); Python This application uses Flask for web serving and the redis-py package to communicate with the Redis instance.
- Clone the repository for your chosen programming language and navigate to the folder that contains the sample code: Go git clone https : //github.com/GoogleCloudPlatform/golang-samples cd golang - samples / memorystore / redis Java git clone https : //github.com/GoogleCloudPlatform/java-docs-samples cd java - docs - samples / memorystore / redis Node.js git clone https : //github.com/GoogleCloudPlatform/nodejs-docs-samples cd nodejs - docs - samples / memorystore / redis Python git clone https : // github . com / GoogleCloudPlatform / python - docs - samples cd python - docs - samples / memorystore / redis This sample application increments a Redis counter every time the / endpoint is accessed.
- StrictRedis ( host = redis host , port = redis port ) @app . route ( "/" ) def index (): value = redis client . incr ( "counter" , 1 ) return f "Visitor number: { value } " @app . errorhandler ( 500 ) def server error ( e ): logging . exception ( "An error occurred during a request." ) return ( """ An internal error occurred: <pre>{}</pre> See logs for full stacktrace. """ . format ( e ), 500 , ) if name == " main " : This is used when running locally.

### "Connect to a Redis instance from Cloud Run functions \_|\_ Memorystore for\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance-functions](https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance-functions)
- Source ID: `site-docs-root-2`
- Final score: 296
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Clone the repository for your desired programming language and navigate to the folder that contains the sample code: Go git clone https : //github.com/GoogleCloudPlatform/golang-samples cd golang - samples / functions / memorystore / redis Node.js git clone https : //github.com/GoogleCloudPlatform/nodejs-docs-samples cd nodejs - docs - samples / functions / memorystore / redis Python git clone https : // github . com / GoogleCloudPlatform / python - docs - samples cd python - docs - samples / functions / memorystore / redis The sample code increments a Redis counter every time the function is triggered: Go This function uses the github.com/gomodule/redigo/redis client. // Package visitcount provides a Cloud Function that connects // to a managed Redis instance. package visitcount import ( "errors" "fmt" "log" "net/http" "os" "github.com/GoogleCloudPlatform/functions-framework-go/functions" "github.com/gomodule/redigo/redis" ) var redisPool redis .
- Home Documentation Databases Memorystore Memorystore for Redis Guides Send feedback Connect to a Redis instance from Cloud Run functions Stay organized with collections Save and categorize content based on your preferences.
- To find the name of this network, run the following command: gcloud redis instances describe INSTANCE ID --region REGION --format "value(authorizedNetwork)" Make a note of the network name.
- Important : We recommend that you use Direct VPC egress because it offers lower latency, higher throughput, and lower costs by eliminating the need for managed connector instances.

