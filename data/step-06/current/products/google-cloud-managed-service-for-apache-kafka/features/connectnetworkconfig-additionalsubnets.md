---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:28.701Z"
product_name: "Google Cloud Managed Service for Apache Kafka"
product_slug: "google-cloud-managed-service-for-apache-kafka"
feature_name: "ConnectNetworkConfig.additionalSubnets"
feature_slug: "connectnetworkconfig-additionalsubnets"
latest_feature_date: "2025-12-08"
deprecation_date: "2025-12-08"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp/tools_list/create_connect_cluster"
  - "https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/guidelines-resource"
  - "https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/authentication"
  - "https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/quickstart-avro"
keywords:
  - "connectnetworkconfig"
  - "additionalsubnets"
  - "the"
  - "field"
  - "in"
  - "rest"
  - "api"
  - "resource"
---

# ConnectNetworkConfig.additionalSubnets

Product: Google Cloud Managed Service for Apache Kafka
Coverage: MEDIUM

## Step 02 Summary

The additionalSubnets field in the ConnectNetworkConfig REST API resource is deprecated; deprecated on 2025-12-08.

## Extended Definition

The additionalSubnets field in the ConnectNetworkConfig REST API resource is deprecated; deprecated on 2025-12-08.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp/tools_list/create_connect_cluster](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp/tools_list/create_connect_cluster)
- [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/guidelines-resource](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/guidelines-resource)
- [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/authentication](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/authentication)
- [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/quickstart-avro](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/quickstart-avro)

## Supporting Pages

### "MCP Tools Reference: managedkafka \_|\_ Google Cloud Managed Service for\

- URL: [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp/tools_list/create_connect_cluster](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp/tools_list/create_connect_cluster)
- Source ID: `site-docs-reference`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ConfigEntry JSON representation { "key" : string , "value" : string } Fields key string value string Output Schema This resource represents a long-running operation that is the result of a network API call.
- ConnectNetworkConfig JSON representation { "primarySubnet" : string , "additionalSubnets" : [ string ] , "dnsDomainNames" : [ string ] } Fields primarySubnet string Required.
- ConnectCluster JSON representation { "name" : string , "kafkaCluster" : string , "createTime" : string , "updateTime" : string , "labels" : { string : string , ... } , "capacityConfig" : { object ( CapacityConfig ) } , "state" : enum ( State ) , "config" : { string : string , ... } , // Union field platform config can be only one of the following: "gcpConfig" : { object ( ConnectGcpConfig ) } // End of list of possible types for union field platform config . // Union field satisfies pzi can be only one of the following: "satisfiesPzi" : boolean // End of list of possible types for union field satisfies pzi . // Union field satisfies pzs can be only one of the following: "satisfiesPzs" : boolean // End of list of possible types for union field satisfies pzs . } Fields name string Identifier.
- Operation JSON representation { "name" : string , "metadata" : { "@type" : string , field1 : ... , ... } , "done" : boolean , // Union field result can be only one of the following: "error" : { object ( Status ) } , "response" : { "@type" : string , field1 : ... , ... } // End of list of possible types for union field result . } Fields name string The server-assigned name, which is only unique within the same service that originally returns it.

### "Guidelines to name a Google Cloud Managed Service for Apache Kafka resource\

- URL: [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/guidelines-resource](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/guidelines-resource)
- Source ID: `site-docs-reference`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource naming format Here are the formats for the different resources: Cluster: projects/ {PROJECT ID} /locations/ {LOCATION NAME} /clusters/ {CLUSTER ID} Topic: projects/ {PROJECT ID} /locations/ {LOCATION NAME} /clusters/ {CLUSTER ID} /topics/ {TOPIC ID} Consumer group: projects/ {PROJECT ID} /locations/ {LOCATION NAME} /clusters/ {CLUSTER ID} /consumerGroup/ {CONSUMER GROUP ID} ACL: projects/ {PROJECT ID} /locations/ {LOCATION NAME} /clusters/ {CLUSTER ID} /acl/ {ACL ID} Schema registry: projects/ {PROJECT ID} /locations/ {LOCATION NAME} /schemaRegistries/ {SCHEMA REGISTRY ID} Context: projects/ {PROJECT ID} /locations/ {LOCATION NAME} /schemaRegistries/ {SCHEMA REGISTRY ID} /contexts/ {CONTEXT ID} Subject: Within default context: projects/ {PROJECT ID} /locations/ {LOCATION NAME} /schemaRegistries/ {SCHEMA REGISTRY ID} /subjects/ {SUBJECT ID} Within a specific context: projects/ {PROJECT ID} /locations/ {LOCATION NAME} /schemaRegistries/ {SCHEMA REGISTRY ID} /contexts/ {CONTEXT ID} /subjects/ {SUBJECT ID} Schema (identified by ID): Within default context: projects/ {PROJECT ID} /locations/ {LOCATION NAME} /schemaRegistries/ {SCHEMA REGISTRY ID} /schemas/ids/ {SCHEMA ID} Within a specific context: projects/ {PROJECT ID} /locations/ {LOCATION NAME} /schemaRegistries/ {SCHEMA REGISTRY ID} /contexts/ {CONTEXT ID} /schemas/ids/ {SCHEMA ID} Version (identified by version number under a subject): Within default context: projects/ {PROJECT ID} /locations/ {LOCATION NAME} /schemaRegistries/ {SCHEMA REGISTRY ID} /subjects/ {SUBJECT ID} /versions/ {VERSION ID} Within a specific context: projects/ {PROJECT ID} /locations/ {LOCATION NAME} /schemaRegistries/ {SCHEMA REGISTRY ID} /contexts/ {CONTEXT ID} /subjects/ {SUBJECT ID} /versions/ {VERSION ID} Here's a breakdown of each component in the next sections.
- All ACL entries in the ACL apply to the resource pattern encoded in the ACL ID. acl id must be structured like one of the following: For ACLs on the cluster: cluster For ACLs on a single resource within the cluster: topic/ {RESOURCE NAME} consumerGroup/ {RESOURCE NAME} transactionalId/ {RESOURCE NAME} For ACLs on all resources that match a prefix: topicPrefixed/ {RESOURCE NAME} consumerGroupPrefixed/ {RESOURCE NAME} transactionalIdPrefixed/ {RESOURCE NAME} For ACLs on all resources of a given type (wildcard): allTopics (represents topic/ ) allConsumerGroups (represents consumerGroup/ ) allTransactionalIds (represents transactionalId/ ) {RESOURCE NAME} : The name of the specific resource.
- Examples: To grant permissions on a specific topic my-topic : topic/my-topic To grant permissions on all topics starting with test- : topicPrefixed/test- To grant permissions on the cluster itself: cluster To grant permissions on any group: allConsumerGroups To grant permissions on a specific transactional ID tx-id : transactionalId/tx-id Special characters You can use the special characters listed in the previous section in resource IDs without URL-encoding.
- Resources in Managed Service for Apache Kafka include the following: Cluster Topic Consumer group ACL Schema registry Context (within a schema registry) Subject (within a schema registry or context) Version (versions of a schema under a subject) Schema (identified by ID, associated with a single or multiple subjects and versions) For more information on general Google Cloud resource naming, see Resource names .

### "Authenticate to Managed Service for Apache Kafka \_|\_ Google Cloud Managed\

- URL: [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/authentication](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/authentication)
- Source ID: `site-iam-reference`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Execute the following command: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://iam.googleapis.com/v1/projects/ PROJECT ID /serviceAccounts" PowerShell (Windows) Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT ID /serviceAccounts" Select-Object -Expand Content For more information about authenticating using REST and gRPC, see Authenticate for using REST .
- You can access the API in the following ways: Client libraries Google Cloud CLI REST Client libraries The Managed Service for Apache Kafka client libraries provide high-level language support for authenticating to Managed Service for Apache Kafka programmatically.
- REST You can authenticate to the Managed Service for Apache Kafka API by using your gcloud CLI credentials or by using Application Default Credentials .
- Grant the required role to the principal that will attach the service account to other resources. gcloud iam service-accounts add-iam-policy-binding SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com --member = "user: USER EMAIL " --role = roles/iam.serviceAccountUser Replace the following: SERVICE ACCOUNT NAME : the name of the service account PROJECT ID : the project ID where you created the service account USER EMAIL : the email address for a Google Account Create the resource that will run your code, and attach the service account to that resource.

### "Quickstart: Produce Avro messages with the schema registry \_|\_ Google\

- URL: [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/quickstart-avro](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/quickstart-avro)
- Source ID: `site-iam-reference`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Examine the output Check that the User schema has been registered under a subject name derived from the topic and schema names: SR DOMAIN = https://managedkafka.googleapis.com SR PATH = /v1/projects/ PROJECT ID /locations/ REGION SR HOST = $SR DOMAIN / $SR PATH /schemaRegistries/ REGISTRY ID /subjects curl -X GET \ -H "Content-Type: application/vnd.schemaregistry.v1+json" \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ $SR HOST The output of this command should look like this: ["newUsers-value"] Check that the schema registered in the repository is the same as User : curl -X GET \ -H "Content-Type: application/vnd.schemaregistry.v1+json" \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ $SR HOST /newUsers-value/versions/1 The output of the command should look like this: { "subject": "newUsers-value", "version": 1, "id": 2, "schemaType": "AVRO", "schema": "{\"type\":\"record\",\"name\":\"User\",\"namespace\":\"com.google.example\",\"fields\":[{\"name\":\"name\",\"type\":\"string\"},{\"name\":\"id\",\"type\":[\"int\",\"null\"]}]}", "references": [] } Clean up To avoid incurring charges to your Google Cloud account for the resources used on this page, follow these steps.
- PROJECT ID .cloud.goog:9092 security.protocol=SASL SSL sasl.mechanism=OAUTHBEARER sasl.login.callback.handler.class=com.google.cloud.hosted.kafka.auth.GcpLoginCallbackHandler sasl.jaas.config=org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule required; schema.registry.url=https://managedkafka.googleapis.com/v1/projects/ PROJECT ID /locations/ REGION /schemaRegistries/ REGISTRY ID bearer.auth.credentials.source=CUSTOM bearer.auth.custom.provider.class=com.google.cloud.hosted.kafka.auth.GcpBearerAuthCredentialProvider Add the Kafka and schema registry authentication handler dependencies to your Maven project by inserting the following to the dependencies node of pom.xml above the kafka-avro-serializer dependency: <dependency> <groupId>com.google.cloud.hosted.kafka</groupId> <artifactId>managed-kafka-auth-login-handler</artifactId> <version>1.0.6</version> <exclusions> <exclusion> <groupId>io.confluent</groupId> <artifactId>kafka-schema-registry-client</artifactId> </exclusion> </exclusions> </dependency> If you would like to see the implementation of the custom schema registry authentcation handler authentication handler, look at the GcpBearerAuthCredentialProvider class.
- Click Create to create the VM. gcloud To create the VM instance, use the gcloud compute instances create command. gcloud compute instances create VM NAME \ --scopes = https://www.googleapis.com/auth/cloud-platform \ --subnet = projects/ PROJECT ID /regions/ REGION /subnetworks/ SUBNET \ --zone = ZONE Replace the following: VM NAME : the name of the VM PROJECT ID : your project ID REGION : the region where you created the Kafka cluster, for example us-central1 SUBNET : a subnet in the same VPC network as the subnet that you used in the cluster configuration ZONE : a zone in the region where you created the cluster, for example us-central1-c For more information about creating a VM, see Create a VM instance in a specific subnet .
- Create the folders for storing schema files in your code: mkdir -p src/main/avro Create the Avro schema definition by pasting the following code into a file called src/main/avro/User.avsc : { "namespace" : "com.google.example" , "type" : "record" , "name" : "User" , "fields" : [ { "name" : "name" , "type" : "string" }, { "name" : "id" , "type" : [ "int" , "null" ]} ] } Configure your Maven project to use an Avro Java code generation plugin by adding the following to the build node of your pom.xml.

