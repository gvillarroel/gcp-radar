---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:28.706Z"
product_name: "Google Cloud Managed Service for Apache Kafka"
product_slug: "google-cloud-managed-service-for-apache-kafka"
feature_name: "Kafka data movement with Dataflow templates"
feature_slug: "kafka-data-movement-with-dataflow-templates"
latest_feature_date: "2024-12-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/choose-kafka-pubsub"
  - "https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/terraform"
  - "https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/access-control-kafka-acls"
  - "https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/access-control"
keywords:
  - "kafka"
  - "movement"
  - "with"
  - "dataflow"
  - "templates"
  - "managed"
  - "for"
  - "apache"
---

# Kafka data movement with Dataflow templates

Product: Google Cloud Managed Service for Apache Kafka
Coverage: MEDIUM

## Step 02 Summary

Managed Service for Apache Kafka supports moving Kafka data to and from Google Cloud services using Dataflow templates.

## Extended Definition

Managed Service for Apache Kafka supports moving Kafka data to and from Google Cloud services using Dataflow templates.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/choose-kafka-pubsub](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/choose-kafka-pubsub)
- [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/terraform](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/terraform)
- [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/access-control-kafka-acls](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/access-control-kafka-acls)
- [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/access-control](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/access-control)

## Supporting Pages

### "Choose Cloud Managed Service for Apache Kafka or Pub/Sub \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/choose-kafka-pubsub](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/choose-kafka-pubsub)
- Source ID: `site-iam-reference`
- Final score: 285
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Integration with Cloud products Both Google Managed Service for Apache Kafka and Pub/Sub integrates with various Google Cloud services like Dataflow, BigQuery, Cloud Storage, and more.
- Home Documentation Data analytics Google Cloud Managed Service for Apache Kafka Guides Send feedback Choose Cloud Managed Service for Apache Kafka or Pub/Sub Stay organized with collections Save and categorize content based on your preferences.
- If you need to interact with a messaging system for a specific environment, using Managed Service for Apache Kafka might offer a more unified development experience.
- If you want to move your existing Kafka workloads to the Cloud with minimal code changes, Managed Service for Apache Kafka is the ideal choice.

### "Provision Managed Service for Apache Kafka resources with Terraform \_|\_\

- URL: [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/terraform](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/terraform)
- Source ID: `site-docs-reference`
- Final score: 279
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Google Cloud Managed Service for Apache Kafka Reference Send feedback Provision Managed Service for Apache Kafka resources with Terraform Stay organized with collections Save and categorize content based on your preferences.
- This page introduces you to using Terraform with Managed Service for Apache Kafka, including an introduction to how Terraform works and some resources to help you get started using Terraform with Google Cloud.
- Create a Connect cluster Shows how to create a Connect cluster using Terraform. ( Preview ) Create a BigQuery Sink connector Shows how to create a BigQuery Sink connector using Terraform. ( Preview ) Create a Cloud Storage Sink connector Shows how to create a Cloud Storage Sink connector using Terraform. ( Preview ) Create a MirrorMaker 2.0 Source connector Shows how to create a MirrorMaker 2.0 Source connector using Terraform. ( Preview ) Create a Pub/Sub Sink connector Shows how to create a Pub/Sub Sink connector using Terraform. ( Preview ) Create a Pub/Sub Source connector Shows how to create a Pub/Sub Source connector using Terraform. ( Preview ) What's next Terraform code samples for Managed Service for Apache Kafka Terraform on Google Cloud documentation Google Cloud provider documentation in HashiCorp Infrastructure as code for Google Cloud Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- The following table lists the Terraform resources available for Managed Service for Apache Kafka: Service Terraform resources Managed Kafka google managed kafka acl google managed kafka cluster google managed kafka connect cluster google managed kafka connector google managed kafka topic Terraform-based guides for Managed Service for Apache Kafka The following table lists Terraform-based how-to guides and tutorials for Managed Service for Apache Kafka: Guide Details Create a Google Cloud Managed Service for Apache Kafka cluster Shows how to create a Managed Service for Apache Kafka cluster using Terraform.

### "Access control with Kafka ACLs \_|\_ Google Cloud Managed Service for Apache\

- URL: [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/access-control-kafka-acls](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/access-control-kafka-acls)
- Source ID: `site-iam-reference`
- Final score: 265
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To remove read access, you can use the remove-acl-entry command with the same parameters. gcloud managed-kafka acls remove-acl-entry topic/topic-name \ --cluster = CLUSTER ID \ --location = LOCATION --principal = 'User:test-kafka-client@test-project.iam.gserviceaccount.com' \ --operation = READ \ --permission-type = ALLOW \ --host = ' ' Allow writing to all topics with a common prefix To allow open-source Apache Kafka clients running as the service account test-kafka-client@test-project.iam.gserviceaccount.com to write to all topics whose name starts with the prefix topic-prefix , add a Managed Kafka ACL entry as follows: gcloud managed-kafka acls add-acl-entry topicPrefixed/topic-prefix \ --cluster = CLUSTER ID \ --location = LOCATION --principal = 'User:test-kafka-client@test-project.iam.gserviceaccount.com' \ --operation = WRITE \ --permission-type = ALLOW \ --host = ' ' The following is a list of important information about the command: topicPrefixed/topic-prefix : specifies the Managed Service for Apache Kafka resource pattern to which you want to grant access.
- This method involves running the command to deny access to each of the operations ALTER , ALTER CONFIGS , and DELETE , as follows: gcloud managed-kafka acls add-acl-entry allTopics \ --cluster = CLUSTER ID \ --location = LOCATION --principal = 'User:test-kafka-client@test-project.iam.gserviceaccount.com' \ --operation = ALTER \ --permission-type = DENY \ --host = ' ' gcloud managed-kafka acls add-acl-entry allTopics \ --cluster = CLUSTER ID \ --location = LOCATION --principal = 'User:test-kafka-client@test-project.iam.gserviceaccount.com' \ --operation = ALTER CONFIGS \ --permission-type = DENY \ --host = ' ' gcloud managed-kafka acls add-acl-entry allTopics \ --cluster = CLUSTER ID \ --location = LOCATION --principal = 'User:test-kafka-client@test-project.iam.gserviceaccount.com' \ --operation = DELETE \ --permission-type = DENY \ --host = ' ' The following information applies to each of the add-acl-entry commands: allTopics : specifies that this ACL applies to all topics within the Managed Service for Apache Kafka cluster.
- To remove write access for this service account, remove the ACL entry: gcloud managed-kafka acls remove-acl-entry topicPrefixed/topic-prefix \ --cluster = CLUSTER ID \ --location = LOCATION --principal = 'User:test-kafka-client@test-project.iam.gserviceaccount.com' \ --operation = WRITE \ --permission-type = ALLOW \ --host = ' ' Deny modifying all topics To prevent open-source Apache Kafka clients running as the service account test-kafka-client@test-project.iam.gserviceaccount.com from modifying all topics in a cluster, you can create a Managed Service for Apache Kafka ACL resource with a list of AclEntry resources to deny the ALTER , ALTER CONFIGS , and DELETE operations on all topics.
- Home Documentation Data analytics Google Cloud Managed Service for Apache Kafka Guides Send feedback Access control with Kafka ACLs Stay organized with collections Save and categorize content based on your preferences.

### "Access control with IAM \_|\_ Google Cloud Managed Service for Apache Kafka\

- URL: [https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/access-control](https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/access-control)
- Source ID: `site-iam-reference`
- Final score: 255
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Data analytics Google Cloud Managed Service for Apache Kafka Guides Send feedback Access control with IAM Stay organized with collections Save and categorize content based on your preferences.
- IAM controls access at the Google Cloud resource level: IAM controls determine who can manage your Managed Service for Apache Kafka resources like clusters, topics, or ACLs using Google Cloud APIs and tools.
- The Managed Service for Apache Kafka service agent requires the Managed Kafka Service Agent ( roles/managedkafka.serviceAgent ) role on the project to manage Managed Service for Apache Kafka resources.
- A special principal—The Managed Kafka Service Agent Google Cloud Managed Service for Apache Kafka uses a Google Cloud managed service account known as a service agent to access your resources.

