---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:28.700Z"
product_name: "Google Cloud Managed Service for Apache Kafka"
product_slug: "google-cloud-managed-service-for-apache-kafka"
feature_name: "Kafka cluster details in gcloud and the REST API"
feature_slug: "kafka-cluster-details-in-gcloud-and-the-rest-api"
latest_feature_date: "2025-12-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/quickstart"
  - "https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/quickstart-cluster"
  - "https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/authentication-kafka-mtls"
  - "https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/authentication"
keywords:
  - "kafka"
  - "cluster"
  - "details"
  - "in"
  - "gcloud"
  - "and"
  - "the"
  - "rest"
---

# Kafka cluster details in gcloud and the REST API

Product: Google Cloud Managed Service for Apache Kafka
Coverage: MEDIUM

## Step 02 Summary

You can view broker node IDs, broker zones, and the Kafka version running on a Managed Service for Apache Kafka cluster.

## Extended Definition

You can view broker node IDs, broker zones, and the Kafka version running on a Managed Service for Apache Kafka cluster.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/quickstart](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/quickstart)
- [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/quickstart-cluster](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/quickstart-cluster)
- [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/authentication-kafka-mtls](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/authentication-kafka-mtls)
- [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/authentication](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/authentication)

## Supporting Pages

### "Produce and consume messages with the Kafka command-line tools \_|\_ Google\

- URL: [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/quickstart](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/quickstart)
- Source ID: `site-docs-root`
- Final score: 276
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Click Create to create the VM. gcloud To create the VM instance, use the gcloud compute instances create command. gcloud compute instances create VM NAME \ --scopes = https://www.googleapis.com/auth/cloud-platform \ --subnet = projects/ PROJECT ID /regions/ REGION /subnetworks/ SUBNET \ --zone = ZONE Replace the following: VM NAME : the name of the VM PROJECT ID : your project ID REGION : the region where you created the Kafka cluster, for example us-central1 SUBNET : a subnet in the same VPC network as the subnet that you used in the cluster configuration ZONE : a zone in the region where you created the cluster, for example us-central1-c For more information about creating a VM, see Create a VM instance in a specific subnet .
- When the cluster is ready, the state is Active . gcloud To create a Kafka cluster, run the managed-kafka clusters create command. gcloud managed-kafka clusters create KAFKA CLUSTER \ --location = REGION \ --cpu = 3 \ --memory = 3GiB \ --subnets = projects/ PROJECT ID /regions/ REGION /subnetworks/ SUBNET NAME \ --async Replace the following: KAFKA CLUSTER : a name for the Kafka cluster REGION : the location of the cluster PROJECT ID : your project ID SUBNET NAME : the subnet where you want to create the cluster, for example default For information about supported locations, see Managed Service for Apache Kafka locations .
- Go to Clusters Select the Kafka cluster and click Delete . gcloud To delete the VM, use the gcloud compute instances delete command. gcloud compute instances delete VM NAME --zone = ZONE To delete the Kafka cluster, use the gcloud managed-kafka clusters delete command. gcloud managed-kafka clusters delete CLUSTER ID \ --location = REGION --async What's next Overview of Managed Service for Apache Kafka Authenticate to Managed Service for Apache Kafka Configure networking Apache Kafka® is a registered trademark of The Apache Software Foundation or its affiliates in the United States and/or other countries.
- To track the progress of the create operation, use the gcloud managed-kafka operations describe command: gcloud managed-kafka operations describe OPERATION ID \ --location = REGION When the cluster is ready, the output from this command includes the entry state: ACTIVE .

### "Quickstart: Create and view a Google Cloud Managed Service for Apache Kafka\

- URL: [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/quickstart-cluster](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/quickstart-cluster)
- Source ID: `site-iam-reference`
- Final score: 248
- Re-rank relevance: N/A

Evidence snippets:
- To return to the Cluster details page, click arrow back Back to parent page . gcloud To view information about the cluster, run the gcloud managed-kafka clusters describe command. gcloud managed-kafka clusters describe KAFKA CLUSTER \ --location = REGION Replace the following: KAFKA CLUSTER : the name of the cluster REGION : the region where you created the cluster The output of this command is a list of cluster properties, similar to the following: bootstrapAddress: BOOTSTRAP ADDRESS capacityConfig: memoryBytes: '3221225472' vcpuCount: '3' createTime: ' TIMESTAMP ' To get a list of topics in the cluster, run the gcloud managed-kafka topics list command. gcloud managed-kafka topics list KAFKA CLUSTER \ --location = REGION \ --format = "value(name)" The output includes the topics that you created, as well as topics that Managed Service for Apache Kafka creates for internal use.
- Click Create . gcloud To create a Kafka topic, run the managed-kafka topics create command. gcloud managed-kafka topics create KAFKA TOPIC NAME \ --cluster = KAFKA CLUSTER \ --location = REGION \ --partitions = 10 \ --replication-factor = 3 Replace the following: KAFKA TOPIC NAME : the name of the Kafka topic to create KAFKA CLUSTER : the name of the Kafka cluster REGION : the region where you created the Kafka cluster View the cluster Once the cluster is ready, you can view information about the cluster, including the topics, consumer groups, networks, and other details.
- Go to Clusters Select the Kafka cluster and click Delete . gcloud To delete the cluster, use the gcloud managed-kafka clusters delete command. gcloud managed-kafka clusters delete KAFKA CLUSTER \ --location = REGION --async What's next Produce messages for Kafka, either by using the Kafka command-line tools, or by creating a client application: Use the Kafka command-line tools Develop a Java producer application Develop a Python producer application Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- When the cluster is ready, the state is Active . gcloud To create a Kafka cluster, run the managed-kafka clusters create command. gcloud managed-kafka clusters create KAFKA CLUSTER \ --location = REGION \ --cpu = 3 \ --memory = 3GiB \ --subnets = projects/ PROJECT ID /regions/ REGION /subnetworks/ SUBNET NAME \ --async Replace the following: KAFKA CLUSTER : a name for the Kafka cluster REGION : the location of the cluster PROJECT ID : your project ID SUBNET NAME : the subnet where you want to create the cluster, for example default For information about supported locations, see Managed Service for Apache Kafka locations .

### "Configure mTLS authentication \_|\_ Google Cloud Managed Service for Apache\

- URL: [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/authentication-kafka-mtls](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/authentication-kafka-mtls)
- Source ID: `site-iam-reference`
- Final score: 246
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To verify your cluster's creation date, use the gcloud managed-kafka clusters describe command or view the cluster's details page in the console.
- Run the gcloud managed-kafka acls add-entry command to grant WRITE permission on the orders-topic . gcloud managed-kafka acls add-entry topic/orders-topic \ --cluster = CLUSTER ID \ --location = REGION \ --principal = User:order-processing-app \ --operation = WRITE \ --permission-type = ALLOW \ --host = " " Replace the following: CLUSTER ID : the ID of the Managed Service for Apache Kafka cluster that you are creating.
- Run the gcloud managed-kafka acls add-entry command to grant READ permission on the analytics-topic . gcloud managed-kafka acls add-entry topic/analytics-topic \ --cluster = CLUSTER ID \ --location = REGION \ --principal = User:order-processing-app \ --operation = READ \ --permission-type = ALLOW \ --host = " " After applying these ACLs, the order-processing-app client has only the specific permissions you granted.
- Run the gcloud privateca pools add-iam-policy-binding command: gcloud privateca pools add-iam-policy-binding CA POOL ID \ --location = CA POOL LOCATION \ --member = 'serviceAccount:service- CLUSTER PROJECT NUMBER @gcp-sa-managedkafka.iam.gserviceaccount.com' \ --role = 'roles/privateca.poolReader' Replace the following: CA POOL ID : The ID of the CA pool to which you are granting access.

### "Authenticate to Managed Service for Apache Kafka \_|\_ Google Cloud Managed\

- URL: [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/authentication](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/authentication)
- Source ID: `site-iam-reference`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Execute the following command: curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://iam.googleapis.com/v1/projects/ PROJECT ID /serviceAccounts" PowerShell (Windows) Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers ` -Uri "https://iam.googleapis.com/v1/projects/ PROJECT ID /serviceAccounts" Select-Object -Expand Content For more information about authenticating using REST and gRPC, see Authenticate for using REST .
- REST requests from the command line When you make a REST request from the command line, you can use your gcloud CLI credentials by including gcloud auth print-access-token as part of the command that sends the request.
- Google Cloud CLI When you use the gcloud CLI to access Managed Service for Apache Kafka, you log in to the gcloud CLI with a user account, which provides the credentials used by the gcloud CLI commands.
- REST You can authenticate to the Managed Service for Apache Kafka API by using your gcloud CLI credentials or by using Application Default Credentials .

