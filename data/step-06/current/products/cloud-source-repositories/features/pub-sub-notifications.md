---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:05.596Z"
product_name: "Cloud Source Repositories"
product_slug: "cloud-source-repositories"
feature_name: "Pub/Sub notifications"
feature_slug: "pub-sub-notifications"
latest_feature_date: "2018-06-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/source-repositories/docs/configuring-notifications"
  - "https://docs.cloud.google.com/source-repositories/docs/reference/rest/v1/projects.repos"
  - "https://docs.cloud.google.com/source-repositories/docs/concepts"
  - "https://docs.cloud.google.com/source-repositories/docs/audit-logging"
keywords:
  - "pub"
  - "sub"
  - "notifications"
  - "source"
  - "repositories"
  - "supports"
  - "for"
  - "repository"
---

# Pub/Sub notifications

Product: Cloud Source Repositories
Coverage: MEDIUM

## Step 02 Summary

Cloud Source Repositories supports Pub/Sub notifications for repository events.

## Extended Definition

Cloud Source Repositories supports Pub/Sub notifications for repository events.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/source-repositories/docs/configuring-notifications](https://docs.cloud.google.com/source-repositories/docs/configuring-notifications)
- [https://docs.cloud.google.com/source-repositories/docs/reference/rest/v1/projects.repos](https://docs.cloud.google.com/source-repositories/docs/reference/rest/v1/projects.repos)
- [https://docs.cloud.google.com/source-repositories/docs/concepts](https://docs.cloud.google.com/source-repositories/docs/concepts)
- [https://docs.cloud.google.com/source-repositories/docs/audit-logging](https://docs.cloud.google.com/source-repositories/docs/audit-logging)

## Supporting Pages

### "Configuring Pub/Sub notifications \_|\_ Cloud Source Repositories \_|\_\

- URL: [https://docs.cloud.google.com/source-repositories/docs/configuring-notifications](https://docs.cloud.google.com/source-repositories/docs/configuring-notifications)
- Source ID: `site-iam-reference`
- Final score: 353
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a Pub/Sub topic For each Cloud Source Repositories project or repository for which you'd like notifications, you need to create a Pub/Sub topic.
- To set the format for a topic, you can use the --message-format parameter when you add the topic: gcloud source project - configs update --add-topic=[TOPIC NAME] --message-format=[json protobuf] You can also use the set-format command: gcloud source project - configs update --update-topic=[TOPIC NAME] --message-format=[json protobuf] What's next Learn more about Pub/Sub notifications for Cloud Source Repositories .
- For more information, see Pub/Sub notifications for Cloud Source Repositories .
- To remove a topic from an entire project, enter the following command: gcloud source project - configs update --remove-topic=[TOPIC NAME] To remove a topic from a specific repository, enter the following command: gcloud source repos update [ REPOSITORY NAME ] --remove-topic=[TOPIC NAME] Note: For information on how to delete a Pub/Sub topic, see Managing topics and subscriptions .

### "REST Resource: projects.repos \_|\_ Cloud Source Repositories \_|\_ Google\

- URL: [https://docs.cloud.google.com/source-repositories/docs/reference/rest/v1/projects.repos](https://docs.cloud.google.com/source-repositories/docs/reference/rest/v1/projects.repos)
- Source ID: `site-api-reference`
- Final score: 243
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "name" : string , "size" : string , "url" : string , "mirrorConfig" : { object ( MirrorConfig ) } , "pubsubConfigs" : { string : { object ( PubsubConfig ) } , ... } } Fields name string Resource name of the repository, of the form projects/<project>/repos/<repo> .
- Resource: Repo JSON representation MirrorConfig JSON representation PubsubConfig JSON representation MessageFormat Methods Resource: Repo A repository (or repo) is a Git repository storing versioned source content.
- The project needs to be the same project as this config is in. messageFormat enum ( MessageFormat ) The format of the Cloud Pub/Sub messages. serviceAccountEmail string Email address of the service account used for publishing Cloud Pub/Sub messages.
- Removing this webhook from the other hosting service will stop Google Cloud Source Repositories from receiving notifications, and thereby disabling mirroring. deployKeyId string ID of the SSH deploy key at the other hosting service.

### Concepts \_|\_ Cloud Source Repositories \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/source-repositories/docs/concepts](https://docs.cloud.google.com/source-repositories/docs/concepts)
- Source ID: `site-iam-reference`
- Final score: 215
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Pub/Sub notifications Learn about configuring Pub/Sub notifications with Cloud Source Repositories.
- For alternative source hosting options, Secure Source Manager is a regionally deployed, single tenant, managed source code repository hosted on Google Cloud.
- Access control with IAM Configure roles and permissions for Cloud Source Repositories resources.
- Audit logging information Learn about the audit logs created by Cloud Source Repositories.

### Cloud Source Repositories audit logging information \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/source-repositories/docs/audit-logging](https://docs.cloud.google.com/source-repositories/docs/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 200
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource types Cloud Source Repositories audit logs use the resource type csr repository for all audit logs.
- Here are some reasons you might want to route your audit logs: To keep audit logs for a longer period of time or to use more powerful search capabilities, you can route copies of your audit logs to Cloud Storage, BigQuery, or Pub/Sub.
- Home Documentation Application development Cloud Source Repositories Guides Send feedback Cloud Source Repositories audit logging information Stay organized with collections Save and categorize content based on your preferences.
- Available audit logs The following types of audit logs are available for Cloud Source Repositories: Admin Activity audit logs Includes "admin write" operations that write metadata or configuration information.

