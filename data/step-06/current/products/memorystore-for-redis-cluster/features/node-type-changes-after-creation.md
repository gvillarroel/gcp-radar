---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.720Z"
product_name: "Memorystore for Redis Cluster"
product_slug: "memorystore-for-redis-cluster"
feature_name: "node type changes after creation"
feature_slug: "node-type-changes-after-creation"
latest_feature_date: "2025-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/configure-instances"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication"
keywords:
  - "node"
  - "type"
  - "changes"
  - "after"
  - "creation"
  - "you"
  - "can"
  - "change"
---

# node type changes after creation

Product: Memorystore for Redis Cluster
Coverage: MEDIUM

## Step 02 Summary

You can change the node type of an instance after creating it.

## Extended Definition

You can change the node type of an instance after creating it.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification](https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification)
- [https://docs.cloud.google.com/memorystore/docs/cluster/configure-instances](https://docs.cloud.google.com/memorystore/docs/cluster/configure-instances)
- [https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection](https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection)
- [https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication](https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication)

## Supporting Pages

### "Cluster and node specification \_|\_ Memorystore for Redis Cluster \_|\_\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification](https://docs.cloud.google.com/memorystore/docs/cluster/cluster-node-specification)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Ideally, you should use a Redis cluster client that can handle these changes automatically through topology refreshes and redirections.
- The redis-shared-core-nano node type has a hard limit of 1.12 GB, and can't be changed with the maxmemory configuration.
- Change the node type for your instance.
- Node type specification The node capacity and characteristics depend on which of the four available node types you choose: Keyspace capacity and reserved overhead Node type Default writable keyspace capacity Total node capacity redis-shared-core-nano 1.12 GB 1.4 GB redis-standard-small 5.2 GB 6.5 GB redis-highmem-medium 10.4 GB 13 GB redis-highmem-xlarge 46.4 GB 58 GB Memorystore automatically sets aside a portion of your instance capacity to help prevent Out Of Memory (OOM) errors.

### "Configure an instance \_|\_ Memorystore for Redis Cluster \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/configure-instances](https://docs.cloud.google.com/memorystore/docs/cluster/configure-instances)
- Source ID: `site-docs-root`
- Final score: 163
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can't see configuration parameters when running the gcloud redis clusters describe command unless you have changed a configuration parameter from its default value. gcloud redis clusters describe instance-id --region= region-id Example: gcloud redis clusters describe my-instance --region=us-central1 Set a configuration parameter during cluster creation To set a configuration parameter while creating a cluster, run the gcloud redis clusters create command with --redis-config flag replacing variables with appropriate values. gcloud redis clusters create instance-id \ --region= region-id \ --project= project-id \ --node-type= node-type \ --shard-count= shard-count \ --redis-config= config-name = config-value \ Replace the following: instance-id is the ID of the Memorystore for Redis Cluster instance you're creating. region-id is the region where you want the instance placed. project-id is your project ID. node-type is your chosen node type.
- Accepted values are: redis-shared-core-nano redis-standard-small redis-highmem-medium redis-highmem-xlarge Caution : We recommend that you use the redis-shared-core-nano node type for development or testing purposes only because this node type has no SLA.
- If you run Memorystore for Redis Cluster in a production environment, then we recommend using the redis-standard-small , redis-highmem-medium , or redis-highmem-xlarge node types.
- For more information about these node types, see Choose a node type . shard-count determines the number of shards in your instance.

### "Client library connection code samples \_|\_ Memorystore for Redis Cluster\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection](https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Caution : If you use Lettuce to connect to a cluster, then change the validateClusterNodeMembership parameter to false .
- Otherwise, when the topology changes, you might get unknownPartition errors.
- CertificateFactory cf = CertificateFactory . getInstance ( "X.509" ); X509Certificate caCert = ( X509Certificate ) cf . generateCertificate ( is ); TrustManagerFactory tmf = TrustManagerFactory . getInstance ( TrustManagerFactory . getDefaultAlgorithm ()); KeyStore ks = KeyStore . getInstance ( KeyStore . getDefaultType ()); ks . load ( null ); // You don't need the KeyStore cluster to come from a file. ks . setCertificateEntry ( "caCert" , caCert ); tmf . init ( ks ); SSLContext sslContext = SSLContext . getInstance ( "TLS" ); sslContext . init ( null , tmf . getTrustManagers (), null ); JedisCluster jedisCluster = new JedisCluster ( discovery , DefaultJedisClientConfig . builder () . connectionTimeoutMillis ( timeout ) . socketTimeoutMillis ( timeout ) . credentialsProvider ( credentialsProvider ) . ssl ( true ) . sslSocketFactory ( sslContext . getSocketFactory ()) . build (), maxAttempts , config ); // Perform operations on the cluster jedisCluster . set ( "myKey" , "Hello, Redis Cluster!" ); String value = jedisCluster . get ( "myKey" ); System . out . println ( "Value for myKey: " + value ); int count = 0 ; for ( int i = 0 ; i 1000 ; i ++ ) { String k = "jediskey" + String . valueOf ( i ); String v = "jedisvalue" + String . valueOf ( i ); jedisCluster . set ( k , v ); String got = jedisCluster . get ( k ); if ( got . equals ( v )) { count ++ ; } else { System . out . println ( "unexpected value" ); } } System . out . println ( "Successfully got " + String . valueOf ( count ) + " keys" ); // Disconnect from the cluster jedisCluster . close (); // Cleanup the resources used by the provider (( Closeable ) credentialsProvider ). close (); } } Go We recommend using Go , versions 1.24.5 and later. package main import ( "context" "crypto/tls" "crypto/x509" "flag" "fmt" "io/ioutil" "log" "sync" "time" credentials "google.golang.org/genproto/googleapis/iam/credentials/v1" "github.com/golang/protobuf/ptypes" "github.com/redis/go-redis/v9" "google.golang.org/api/option" gtransport "google.golang.org/api/transport/grpc" ) var ( svcAccount = flag .
- SECONDS ); } public RedisCredentials get () { if ( hasTokenExpired ()) { throw new RuntimeException ( "Background IAM token refresh failed" , lastException ); } return this . credentials ; } private boolean hasTokenExpired () { if ( this . lastRefreshInstant == null this . lifetime == null ) { return true ; } return Instant . now (). isAfter ( this . lastRefreshInstant . plus ( this . lifetime )); } // To be invoked by customer app on shutdown @Override public void close () { service . shutdown (); iamClient . close (); } @Override public void run () { try { // fetch token if it is time to refresh if ( this . lastRefreshInstant != null && this . refreshDuration != null && Instant . now (). isBefore ( this . lastRefreshInstant . plus ( this . refreshDuration ))) { // nothing to do return ; } refreshTokenNow (); } catch ( Exception e ) { // suppress all errors as we cannot allow the task to die // log for visibility logger . log ( Level . parse ( "SEVERE" ), "Background IAM token refresh failed" , e ); } } private void refreshTokenNow () { try { logger . info ( "Refreshing IAM token" ); List delegates = new ArrayList <> (); com . google . protobuf .

### "About cross-region replication \_|\_ Memorystore for Redis Cluster \_|\_\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication](https://docs.cloud.google.com/memorystore/docs/cluster/about-cross-region-replication)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Settings that a secondary cluster copies from the primary cluster When you create a secondary cluster, this cluster copies the following settings from the primary cluster: Shard count IAM authentication mode In-transit encryption mode Cluster configurations Redis version Node type Persistence mode Override default settings When you create a secondary cluster, you can use the following settings to override the default settings: Zone distribution configuration Replica count Maintenance windows Deletion protection Automated backups Update cluster settings When you update the settings for your cluster in Memorystore for Redis Cluster, you can change some settings only on the primary cluster.
- Shard count Cluster configurations Persistence mode Redis version Node type Configure local settings You configure the following settings locally: Deletion protection Replica count Maintenance windows Cluster endpoints Automated backups Best practices for switching primary and secondary clusters When you perform a switchover , we recommend that you follow the instructions in this section.
- You can perform a switchover for the following reasons: Test your disaster recovery setup Switch over during an actual disaster recovery scenario Perform a migration of your workload After you complete the switchover, Memorystore for Redis Cluster reverses the direction of replication.
- You can change other settings on the primary and secondary clusters independently.

