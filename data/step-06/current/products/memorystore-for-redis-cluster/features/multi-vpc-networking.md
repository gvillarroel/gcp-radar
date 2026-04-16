---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:52.721Z"
product_name: "Memorystore for Redis Cluster"
product_slug: "memorystore-for-redis-cluster"
feature_name: "multi-VPC networking"
feature_slug: "multi-vpc-networking"
latest_feature_date: "2025-02-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/memorystore/docs/cluster/about-multiple-vpc-networking"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/networking"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/create-instances"
  - "https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection"
keywords:
  - "multi"
  - "vpc"
  - "networking"
  - "you"
  - "can"
  - "create"
  - "private"
  - "connect"
---

# multi-VPC networking

Product: Memorystore for Redis Cluster
Coverage: MEDIUM

## Step 02 Summary

You can create Private Service Connect endpoints in multiple VPCs to connect to the same Memorystore for Redis Cluster instance.

## Extended Definition

You can create Private Service Connect endpoints in multiple VPCs to connect to the same Memorystore for Redis Cluster instance.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/memorystore/docs/cluster/about-multiple-vpc-networking](https://docs.cloud.google.com/memorystore/docs/cluster/about-multiple-vpc-networking)
- [https://docs.cloud.google.com/memorystore/docs/cluster/networking](https://docs.cloud.google.com/memorystore/docs/cluster/networking)
- [https://docs.cloud.google.com/memorystore/docs/cluster/create-instances](https://docs.cloud.google.com/memorystore/docs/cluster/create-instances)
- [https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection](https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection)

## Supporting Pages

### "About multiple VPC networking \_|\_ Memorystore for Redis Cluster \_|\_\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/about-multiple-vpc-networking](https://docs.cloud.google.com/memorystore/docs/cluster/about-multiple-vpc-networking)
- Source ID: `site-iam-reference`
- Final score: 289
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Limitations You can have between 1 and 20 VPC networks connected to a single Memorystore instance, and no more than 40 Private Service Connect connections in total To delete a Memorystore instance connected with user-registered Private Service Connect connections, you must delete and deregister the connections first.
- Application connection requirements To connect your application using a multiple VPC networking setup, Memorystore has networking requirements that you must meet.
- Setting up networking for multiple VPC networks requires Memorystore users to configure and register up Private Service Connect connections.
- Home Documentation Databases Memorystore Memorystore for Redis Cluster Guides Send feedback About multiple VPC networking Stay organized with collections Save and categorize content based on your preferences.

### Networking \_|\_ Memorystore for Redis Cluster \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/networking](https://docs.cloud.google.com/memorystore/docs/cluster/networking)
- Source ID: `site-docs-root`
- Final score: 249
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you don't need multiple VPC networks, then you can also establish connectivity by using a user-registered connection.
- User-registered Private Service Connect connections enable you to connect multiple VPC networks, if needed.
- For more information about deploying Private Service Connect endpoints in Google Cloud projects other than the project that hosts the cluster, see Set up multiple VPC networks using user-registered Private Service Connect connections and Set up multiple VPC networks for instances provisioned with automatically registered Private Service Connect connections .
- If you want to use a service connection policy to enable Private Service Connect connections that are deployed automatically, then before you create a cluster, make sure that the following conditions are met: The service connection policy must exist for your project, network, region, and gcp-memorystore-redis service class.

### "Create instances \_|\_ Memorystore for Redis Cluster \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/create-instances](https://docs.cloud.google.com/memorystore/docs/cluster/create-instances)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- Tip: If you plan on using private networking, then you can deploy both the private networking setup of your choice and the Memorystore for Redis Cluster instance along with clients such as Compute Engine VMs by using Terraform.
- If a service connection policy hasn't been created for the network with which you will create the Redis cluster, follow the Networking guidance to create it.
- Enable the Memorystore for Redis API Memorystore for Redis Enable the Network Connectivity API Network Connectivity API Enable the Service Consumer Management API Service Consumer Management API Other prerequisites You must have one of these IAM roles in the Google Cloud project you're using: roles/redis.admin (the Memorystore Admin predefined IAM role) roles/owner (the Owner basic IAM role) roles/editor (the Editor basic IAM role) Set up networking Read the Networking page to determine if you need to set up a service connection policy.
- Create an instance Important : Before you follow the steps in this procedure, complete the steps in the Before you begin and Set up networking sections.

### "Client library connection code samples \_|\_ Memorystore for Redis Cluster\

- URL: [https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection](https://docs.cloud.google.com/memorystore/docs/cluster/client-library-connection)
- Source ID: `site-docs-root`
- Final score: 175
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Typical scale is tens of thousands of Redis connections and the IAM token is required for every connection being established. / private static final class RedisClusterCredentialsProvider implements RedisCredentialsProvider , Runnable , Closeable { private static final Logger logger = Logger . getLogger ( RedisClusterCredentialsProvider . class . getName ()); private final IamCredentialsClient iamClient ; private final ScheduledExecutorService service ; private final String accountName ; private final Duration refreshDuration ; private final Duration lifetime ; private volatile RedisCredentials credentials ; private volatile Instant lastRefreshInstant ; private volatile Exception lastException ; // AccountName: // "projects/-/serviceAccounts/example-service-account@example-project.iam.gserviceaccount.com"; // RefreshDuration: Duration.ofSeconds(300); // Lifetime: Duration.ofSeconds(3600); public RedisClusterCredentialsProvider ( String accountName , Duration refreshDuration , Duration lifetime ) throws Exception { this . iamClient = IamCredentialsClient . create (); this . service = Executors . newSingleThreadScheduledExecutor (); this . accountName = accountName ; this . refreshDuration = refreshDuration ; this . lifetime = lifetime ; // execute on initialization to fast-fail if there are any setup issues refreshTokenNow (); // refresh much more frequently than the expiry time to allow for multiple retries in case of // failures service . scheduleWithFixedDelay ( this , 10 , 10 , TimeUnit .
- Typical scale is tens of thousands of Redis connections and the IAM token is required for every connection being established. / private static final class RedisClusterCredentialsProvider implements RedisCredentialsProvider , Runnable , Closeable { private static final Logger logger = Logger . getLogger ( RedisClusterCredentialsProvider . class . getName ()); private final ScheduledExecutorService service = Executors . newSingleThreadScheduledExecutor (); private final IamCredentialsClient iamClient ; private final String accountName ; private final Duration refreshDuration ; private final Duration lifetime ; private volatile RedisCredentials credentials ; private volatile Instant lastRefreshInstant ; private volatile Exception lastException ; / AccountName: "projects/-/serviceAccounts/example-service-account@example-project.iam.gserviceaccount.com"; RefreshDuration: Duration.ofSeconds(300) Lifetime: Duration.ofSeconds(3600); / public RedisClusterCredentialsProvider ( String accountName , Duration refreshDuration , Duration lifetime ) throws Exception { this . iamClient = IamCredentialsClient . create (); this . accountName = accountName ; this . refreshDuration = refreshDuration ; this . lifetime = lifetime ; // execute on initialization to fast-fail if there are any setup issues refreshTokenNow (); // refresh much more frequently than the expiry time to allow for multiple retries in case of // failures service . scheduleWithFixedDelay ( this , 10 , 10 , TimeUnit .
- NOADDR ))) . validateClusterNodeMembership ( false ) . build ()); // Create a connection pool GenericObjectPool<StatefulRedisClusterConnection<String , String > pool = ConnectionPoolSupport . createGenericObjectPool (() -> clusterClient . connect (), new GenericObjectPoolConfig ()); pool . setMaxTotal ( MAX CONNECTIONS IN CONNECTION POOL ); // Get a connection from the connection pool StatefulRedisClusterConnection<String , String > connection = pool . borrowObject (); // Get a cluster sync command and call 'set' RedisAdvancedClusterCommands<String , String > syncCommands = connection . sync (); syncCommands . set ( key , value ); In-transit encryption client library code sample This section gives an example of client code for authenticating with in-transit encryption for your Memorystore cluster with the go-redis client library. go-redis We recommend using go-redis, versions 9.11.0 and later. import ( "context" "crypto/tls" "crypto/x509" "io/ioutil" "log" "time" "github.com/go-redis/redis/v9" ) func example () { // Load CA cert caFilePath := caCert , err := ioutil .
- Fatal ( err ) } } IAM authentication and in-transit encryption code sample This section gives an example of how to authenticate and connect to a cluster by using both IAM authentication and in-transit encryption with various client libraries: redis-py We recommend using redis-py , versions 5.1 and later. from google.cloud import iam credentials v1 from redis.backoff import ConstantBackoff from redis.retry import Retry from redis.exceptions import ( ConnectionError , AuthenticationWrongNumberOfArgsError , AuthenticationError ) from redis.utils import ( str if bytes ) import redis service account = "projects/-/serviceAccounts/<TO-DO-1: email of service account used to authenticate to Redis Cluster>" host = < TO - DO - 2 : your Redis Cluster discovery endpoint ip > ssl ca certs = < TO - DO - 3 , your trusted server ca file name > def generate access token (): Create a client client = iam credentials v1 .

