---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.267Z"
product_name: "Memorystore for Redis"
product_slug: "memorystore-for-redis"
feature_name: "Cloud Logging maintenance logs for Memorystore for Redis"
feature_slug: "cloud-logging-maintenance-logs-for-memorystore-for-redis"
latest_feature_date: "2025-08-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/redis/audit-logs"
  - "https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview"
  - "https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance-gce"
  - "https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis"
keywords:
  - "logging"
  - "maintenance"
  - "logs"
  - "for"
  - "memorystore"
  - "redis"
  - "can"
  - "be"
---

# Cloud Logging maintenance logs for Memorystore for Redis

Product: Memorystore for Redis
Coverage: MEDIUM

## Step 02 Summary

Cloud Logging can be used to query and view maintenance logs for a Memorystore for Redis instance.

## Extended Definition

Cloud Logging can be used to query and view maintenance logs for a Memorystore for Redis instance.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/redis/audit-logs](https://docs.cloud.google.com/memorystore/docs/redis/audit-logs)
- [https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview](https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview)
- [https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance-gce](https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance-gce)
- [https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis](https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis)

## Supporting Pages

### Memorystore for Redis audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/audit-logs](https://docs.cloud.google.com/memorystore/docs/redis/audit-logs)
- Source ID: `site-docs-root-2`
- Final score: 314
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Permission type Methods ADMIN READ google.cloud.redis.cluster.v1.CloudRedisCluster.ExportBackup (LRO) google.cloud.redis.cluster.v1.CloudRedisCluster.GetBackup google.cloud.redis.cluster.v1.CloudRedisCluster.GetBackupCollection google.cloud.redis.cluster.v1.CloudRedisCluster.GetCluster google.cloud.redis.cluster.v1.CloudRedisCluster.GetClusterCertificateAuthority google.cloud.redis.cluster.v1.CloudRedisCluster.ListBackupCollections google.cloud.redis.cluster.v1.CloudRedisCluster.ListBackups google.cloud.redis.cluster.v1.CloudRedisCluster.ListClusters google.cloud.redis.cluster.v1alpha1.CloudRedisCluster.ExportBackup google.cloud.redis.cluster.v1alpha1.CloudRedisCluster.GetBackup google.cloud.redis.cluster.v1alpha1.CloudRedisCluster.GetBackupCollection google.cloud.redis.cluster.v1alpha1.CloudRedisCluster.GetCluster google.cloud.redis.cluster.v1alpha1.CloudRedisCluster.GetClusterCertificateAuthority google.cloud.redis.cluster.v1alpha1.CloudRedisCluster.ListBackupCollections google.cloud.redis.cluster.v1alpha1.CloudRedisCluster.ListBackups google.cloud.redis.cluster.v1alpha1.CloudRedisCluster.ListClusters google.cloud.redis.cluster.v1beta1.CloudRedisCluster.ExportBackup (LRO) google.cloud.redis.cluster.v1beta1.CloudRedisCluster.GetBackup google.cloud.redis.cluster.v1beta1.CloudRedisCluster.GetBackupCollection google.cloud.redis.cluster.v1beta1.CloudRedisCluster.GetCluster google.cloud.redis.cluster.v1beta1.CloudRedisCluster.GetClusterCertificateAuthority google.cloud.redis.cluster.v1beta1.CloudRedisCluster.ListBackupCollections google.cloud.redis.cluster.v1beta1.CloudRedisCluster.ListBackups google.cloud.redis.cluster.v1beta1.CloudRedisCluster.ListClusters google.cloud.redis.v1.CloudRedis.GetInstance google.cloud.redis.v1.CloudRedis.GetInstanceAuthString google.cloud.redis.v1.CloudRedis.ListInstances google.cloud.redis.v1alpha1.CloudRedis.GetInstance google.cloud.redis.v1alpha1.CloudRedis.GetInstanceAuthString google.cloud.redis.v1alpha1.CloudRedis.ListInstances google.cloud.redis.v1beta1.CloudRedis.GetInstance google.cloud.redis.v1beta1.CloudRedis.GetInstanceAuthString google.cloud.redis.v1beta1.CloudRedis.ListInstances google.longrunning.Operations.GetOperation google.longrunning.Operations.ListOperations ADMIN WRITE google.cloud.redis.cluster.v1.CloudRedisCluster.BackupCluster (LRO) google.cloud.redis.cluster.v1.CloudRedisCluster.CreateCluster (LRO) google.cloud.redis.cluster.v1.CloudRedisCluster.DeleteBackup (LRO) google.cloud.redis.cluster.v1.CloudRedisCluster.DeleteCluster (LRO) google.cloud.redis.cluster.v1.CloudRedisCluster.RescheduleClusterMaintenance google.cloud.redis.cluster.v1.CloudRedisCluster.UpdateCluster (LRO) google.cloud.redis.cluster.v1alpha1.CloudRedisCluster.BackupCluster (LRO) google.cloud.redis.cluster.v1alpha1.CloudRedisCluster.CreateCluster (LRO) google.cloud.redis.cluster.v1alpha1.CloudRedisCluster.DeleteBackup (LRO) google.cloud.redis.cluster.v1alpha1.CloudRedisCluster.DeleteCluster (LRO) google.cloud.redis.cluster.v1alpha1.CloudRedisCluster.RescheduleClusterMaintenance google.cloud.redis.cluster.v1alpha1.CloudRedisCluster.UpdateCluster (LRO) google.cloud.redis.cluster.v1beta1.CloudRedisCluster.BackupCluster (LRO) google.cloud.redis.cluster.v1beta1.CloudRedisCluster.CreateCluster (LRO) google.cloud.redis.cluster.v1beta1.CloudRedisCluster.DeleteBackup (LRO) google.cloud.redis.cluster.v1beta1.CloudRedisCluster.DeleteCluster (LRO) google.cloud.redis.cluster.v1beta1.CloudRedisCluster.RescheduleClusterMaintenance google.cloud.redis.cluster.v1beta1.CloudRedisCluster.UpdateCluster (LRO) google.cloud.redis.v1.CloudRedis.CreateInstance (LRO) google.cloud.redis.v1.CloudRedis.DeleteInstance (LRO) google.cloud.redis.v1.CloudRedis.ExportInstance (LRO) google.cloud.redis.v1.CloudRedis.FailoverInstance (LRO) google.cloud.redis.v1.CloudRedis.ImportInstance (LRO) google.cloud.redis.v1.CloudRedis.RescheduleMaintenance (LRO) google.cloud.redis.v1.CloudRedis.UpdateInstance (LRO) google.cloud.redis.v1.CloudRedis.UpgradeInstance (LRO) google.cloud.redis.v1alpha1.CloudRedis.CreateInstance (LRO) google.cloud.redis.v1alpha1.CloudRedis.DeleteInstance (LRO) google.cloud.redis.v1alpha1.CloudRedis.ExportInstance (LRO) google.cloud.redis.v1alpha1.CloudRedis.FailoverInstance (LRO) google.cloud.redis.v1alpha1.CloudRedis.ImportInstance (LRO) google.cloud.redis.v1alpha1.CloudRedis.RescheduleMaintenance google.cloud.redis.v1alpha1.CloudRedis.UpdateInstance (LRO) google.cloud.redis.v1alpha1.CloudRedis.UpgradeInstance (LRO) google.cloud.redis.v1beta1.CloudRedis.CreateInstance (LRO) google.cloud.redis.v1beta1.CloudRedis.DeleteInstance (LRO) google.cloud.redis.v1beta1.CloudRedis.ExportInstance (LRO) google.cloud.redis.v1beta1.CloudRedis.FailoverInstance (LRO) google.cloud.redis.v1beta1.CloudRedis.ImportInstance (LRO) google.cloud.redis.v1beta1.CloudRedis.RescheduleMaintenance google.cloud.redis.v1beta1.CloudRedis.UpdateInstance (LRO) google.cloud.redis.v1beta1.CloudRedis.UpgradeInstance (LRO) google.longrunning.Operations.CancelOperation google.longrunning.Operations.DeleteOperation API interface audit logs For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Memorystore for Redis. google.cloud.redis.cluster.v1.CloudRedisCluster The following audit logs are associated with methods belonging to google.cloud.redis.cluster.v1.CloudRedisCluster .
- Filter for this method : protoPayload.methodName="google.cloud.redis.v1.CloudRedis.ListInstances" RescheduleMaintenance Method : google.cloud.redis.v1.CloudRedis.RescheduleMaintenance Audit log type : Admin activity Permissions : redis.instances.rescheduleMaintenance - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.redis.v1.CloudRedis.RescheduleMaintenance" UpdateInstance Method : google.cloud.redis.v1.CloudRedis.UpdateInstance Audit log type : Admin activity Permissions : redis.instances.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.redis.v1.CloudRedis.UpdateInstance" UpgradeInstance Method : google.cloud.redis.v1.CloudRedis.UpgradeInstance Audit log type : Admin activity Permissions : redis.instances.upgrade - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.redis.v1.CloudRedis.UpgradeInstance" google.cloud.redis.v1alpha1.CloudRedis The following audit logs are associated with methods belonging to google.cloud.redis.v1alpha1.CloudRedis .
- Filter for this method : protoPayload.methodName="google.cloud.redis.v1alpha1.CloudRedis.RescheduleMaintenance" UpdateInstance Method : google.cloud.redis.v1alpha1.CloudRedis.UpdateInstance Audit log type : Admin activity Permissions : redis.instances.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.redis.v1alpha1.CloudRedis.UpdateInstance" UpgradeInstance Method : google.cloud.redis.v1alpha1.CloudRedis.UpgradeInstance Audit log type : Admin activity Permissions : redis.instances.upgrade - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.redis.v1alpha1.CloudRedis.UpgradeInstance" google.cloud.redis.v1beta1.CloudRedis The following audit logs are associated with methods belonging to google.cloud.redis.v1beta1.CloudRedis .
- Filter for this method : protoPayload.methodName="google.cloud.redis.v1beta1.CloudRedis.RescheduleMaintenance" UpdateInstance Method : google.cloud.redis.v1beta1.CloudRedis.UpdateInstance Audit log type : Admin activity Permissions : redis.instances.update - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.redis.v1beta1.CloudRedis.UpdateInstance" UpgradeInstance Method : google.cloud.redis.v1beta1.CloudRedis.UpgradeInstance Audit log type : Admin activity Permissions : redis.instances.upgrade - ADMIN WRITE Method is a long-running or streaming operation : Long-running operation Filter for this method : protoPayload.methodName="google.cloud.redis.v1beta1.CloudRedis.UpgradeInstance" google.longrunning.Operations The following audit logs are associated with methods belonging to google.longrunning.Operations .

### Memorystore for Redis overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview](https://docs.cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview)
- Source ID: `site-docs-root`
- Final score: 282
- Re-rank relevance: N/A

Evidence snippets:
- Connect to a Memorystore for Redis instance You can use any standard Redis client on the following environments to connect to your Memorystore for Redis instance : App Engine flexible environment App Engine standard environment Compute Engine VM instances Cloud Run functions Cloud Run Google Kubernetes Engine clusters Some serverless environments require a Serverless VPC Access connector as a prerequisite for connectivity with Memorystore for Redis.
- Features The following table describes the features that Memorystore for Redis provides: Fully managed: Deploying and maintaining a Redis instance can be time consuming.
- Using Cloud Logging, you can also see the Redis logs for your instance.
- Tier capabilities The following table describes the differences between the available Memorystore for Redis service tiers: Specifications Basic Tier Standard Tier (read replicas disabled) Standard Tier (read replicas enabled) Description Provides a cache with no replication Provides redundancy and availability using replication Provides redundancy and availability using replication to backup data, and multiple Read replicas to increase read throughput Max Redis primary size 300 GB 300 GB 300 GB Max network bandwidth 16 Gbps 16 Gbps 16 Gbps total for writes.

### "Connect to a Redis instance from a Compute Engine VM \_|\_ Memorystore for\

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance-gce](https://docs.cloud.google.com/memorystore/docs/redis/connect-redis-instance-gce)
- Source ID: `site-docs-root-2`
- Final score: 275
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- StrictRedis ( host = redis host , port = redis port ) @app . route ( "/" ) def index (): value = redis client . incr ( "counter" , 1 ) return f "Visitor number: { value } " @app . errorhandler ( 500 ) def server error ( e ): logging . exception ( "An error occurred during a request." ) return ( """ An internal error occurred: <pre>{}</pre> See logs for full stacktrace. """ . format ( e ), 500 , ) if name == " main " : This is used when running locally.
- It uses the Jedis library: <dependency> <groupId>redis.clients</groupId> <artifactId>jedis</artifactId> <version>5.1.0</version> </dependency> The AppServletContextListener class is used to create a long-lived Redis connection pool: package com.example.redis ; import java.io.IOException ; import java.util.Properties ; import javax.servlet.ServletContextEvent ; import javax.servlet.ServletContextListener ; import javax.servlet.annotation.WebListener ; import redis.clients.jedis.JedisPool ; import redis.clients.jedis.JedisPoolConfig ; @WebListener public class AppServletContextListener implements ServletContextListener { private Properties config = new Properties (); private JedisPool createJedisPool () throws IOException { String host ; Integer port ; config . load ( Thread . currentThread () . getContextClassLoader () . getResourceAsStream ( "application.properties" )); host = config . getProperty ( "redis.host" ); port = Integer . valueOf ( config . getProperty ( "redis.port" , "6379" )); JedisPoolConfig poolConfig = new JedisPoolConfig (); // Default : 8, consider how many concurrent connections into Redis you will need under load poolConfig . setMaxTotal ( 128 ); return new JedisPool ( poolConfig , host , port ); } @Override public void contextDestroyed ( ServletContextEvent event ) { JedisPool jedisPool = ( JedisPool ) event . getServletContext (). getAttribute ( "jedisPool" ); if ( jedisPool != null ) { jedisPool . destroy (); event . getServletContext (). setAttribute ( "jedisPool" , null ); } } // Run this before web application is started @Override public void contextInitialized ( ServletContextEvent event ) { JedisPool jedisPool = ( JedisPool ) event . getServletContext (). getAttribute ( "jedisPool" ); if ( jedisPool == null ) { try { jedisPool = createJedisPool (); event . getServletContext (). setAttribute ( "jedisPool" , jedisPool ); } catch ( IOException e ) { // handle exception } } } } The VisitCounterServlet class is a web servlet that increments a Redis counter: package com.example.redis ; import java.io.IOException ; import java.net.SocketException ; import javax.servlet.annotation.WebServlet ; import javax.servlet.http.HttpServlet ; import javax.servlet.http.HttpServletRequest ; import javax.servlet.http.HttpServletResponse ; import redis.clients.jedis.Jedis ; import redis.clients.jedis.JedisPool ; @WebServlet ( name = "Track visits" , value = "" ) public class VisitCounterServlet extends HttpServlet { @Override public void doGet ( HttpServletRequest req , HttpServletResponse resp ) throws IOException { try { JedisPool jedisPool = ( JedisPool ) req . getServletContext (). getAttribute ( "jedisPool" ); if ( jedisPool == null ) { throw new SocketException ( "Error connecting to Jedis pool" ); } Long visits ; try ( Jedis jedis = jedisPool . getResource ()) { visits = jedis . incr ( "visits" ); } resp . setStatus ( HttpServletResponse .
- Install dependencies from apt apt-get update apt-get install -qq openjdk-8-jdk-headless Make Java8 the default update-alternatives --set java /usr/lib/jvm/java-8-openjdk-amd64/jre/bin/java Jetty Setup mkdir -p /opt/jetty/temp mkdir -p /var/log/jetty Get Jetty curl -L https://repo1.maven.org/maven2/org/eclipse/jetty/jetty-distribution/9.4.10.v20180503/jetty-distribution-9.4.10.v20180503.tar.gz -o jetty9.tgz tar xf jetty9.tgz --strip-components = 1 -C /opt/jetty Add a Jetty User useradd --user-group --shell /bin/false --home-dir /opt/jetty/temp jetty cd /opt/jetty Add running as "jetty" java -jar /opt/jetty/start.jar --add-to-startd = setuid cd / very important - by renaming the war to root.war, it will run as the root servlet. mv $WAR /opt/jetty/webapps/root.war Make sure "jetty" owns everything. chown --recursive jetty /opt/jetty Configure the default paths for the Jetty service cp /opt/jetty/bin/jetty.sh /etc/init.d/jetty echo "JETTY HOME=/opt/jetty" > /etc/default/jetty { echo "JETTY BASE=/opt/jetty" echo "TMPDIR=/opt/jetty/temp" echo "JAVA OPTIONS=-Djetty.http.port=8080" echo "JETTY LOGS=/var/log/jetty" } >> /etc/default/jetty Reload daemon to pick up new service systemctl daemon-reload Install logging monitor.
- REDISPORT 6379 ; const client = redis . createClient ({ url : redis:// ${ REDISHOST } : ${ REDISPORT } , }); client . on ( 'error' , err = > console . error ( 'ERR:REDIS:' , err )); client . connect () . then (() = > { console . log ( 'Connected to Redis' ); http . createServer ( async ( req , res ) = > { try { const reply = await client . incr ( 'visits' ); res . writeHead ( 200 , { 'Content-Type' : 'text/plain' }); res . end ( Visitor number: ${ reply } \n ); } catch ( err ) { console . error ( err ); res . statusCode = 500 ; res . end ( err . message ); } }) . listen ( 8080 , () = > { console . log ( 'Server listening on port 8080' ); }); }) . catch ( err = > { console . error ( 'Failed to connect to Redis:' , err ); throw err ; }); Python This application uses Flask for web serving and the redis-py package to communicate with the Redis instance.

### High availability for Memorystore for Redis \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis](https://docs.cloud.google.com/memorystore/docs/redis/high-availability-for-memorystore-for-redis)
- Source ID: `site-docs-root`
- Final score: 274
- Re-rank relevance: N/A

Evidence snippets:
- A failover occurs when you perform the following tasks: Scale your instance Upgrade the Redis version of an instance Initiate a manual failover Perform a maintenance update If you implement retry logic in your application to handle connection drops because of failovers, then your instance probably won't see a significant performance impact.
- During a failover, if there are connections to the read endpoint, then Memorystore for Redis drops the connections to the replica that's being promoted to the primary instance.
- This page describes high availability (HA) for Memorystore for Redis instances in the Standard Tier.
- Depending on the number of replicas, Memorystore for Redis might also drop some read connections.

