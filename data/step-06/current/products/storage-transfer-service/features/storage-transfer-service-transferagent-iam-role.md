---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:47.646Z"
product_name: "Storage Transfer Service"
product_slug: "storage-transfer-service"
feature_name: "Storage Transfer Service transferAgent IAM role"
feature_slug: "storage-transfer-service-transferagent-iam-role"
latest_feature_date: "2022-04-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/iam/docs/roles-overview"
  - "https://docs.cloud.google.com/iam/docs/roles-permissions/storagetransfer"
  - "https://docs.cloud.google.com/storage-transfer/docs/access-control"
keywords:
  - "storage"
  - "transfer"
  - "transferagent"
  - "iam"
  - "role"
  - "introduced"
  - "predefined"
  - "roles"
---

# Storage Transfer Service transferAgent IAM role

Product: Storage Transfer Service
Coverage: MEDIUM

## Step 02 Summary

Storage Transfer Service introduced the predefined roles/storagetransfer.transferAgent role to provide minimum required permissions for transfer agent communication and simplify permission assignment.

## Extended Definition

Storage Transfer Service introduced the predefined roles/storagetransfer.transferAgent role to provide minimum required permissions for transfer agent communication and simplify permission assignment.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/storagetransfer](https://docs.cloud.google.com/iam/docs/roles-permissions/storagetransfer)
- [https://docs.cloud.google.com/storage-transfer/docs/access-control](https://docs.cloud.google.com/storage-transfer/docs/access-control)

## Supporting Pages

### "Roles and permissions \_|\_ Identity and Access Management (IAM) \_|\_ Google\

- URL: [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview)
- Source ID: `site-iam-reference`
- Final score: 150
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table summarizes the permissions that the Admin, Writer, and Reader give principals across all Google Cloud services: Note: Cloud Storage convenience values and BigQuery special group membership don't give permissions to principals with the Admin, Writer, or Reader roles.
- The principal also gets any permissions that services provide to principals with legacy basic roles—for example, permissions gained through Cloud Storage convenience values and BigQuery special group membership .
- To make it easier to see which predefined roles to monitor, we recommend listing any predefined roles that your custom role is based on in the custom role's description field.
- For example, you could include the role's intended purpose, the date a role was created or modified, and any predefined roles that the custom role is based on.

### "Storage Transfer Service roles and permissions \_|\_ Identity and Access\

- URL: [https://docs.cloud.google.com/iam/docs/roles-permissions/storagetransfer](https://docs.cloud.google.com/iam/docs/roles-permissions/storagetransfer)
- Source ID: `site-iam-reference`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- Role Permissions Storage Transfer Service Agent ( roles/ storagetransfer.serviceAgent ) Grants Storage Transfer Service Agent permissions required to run transfers Warning: Do not grant service agent roles to any principals except service agents . pubsub.subscriptions.consume pubsub.subscriptions.create pubsub.subscriptions.delete pubsub.subscriptions.get pubsub.subscriptions.update pubsub. topics. attachSubscription pubsub.topics.create pubsub.topics.delete pubsub.topics.get pubsub.topics.publish pubsub.topics.update Storage Transfer Service permissions Permission Included in roles storagetransfer. agentpools. create Owner ( roles/ owner ) Editor ( roles/ editor ) Storage Transfer Admin ( roles/ storagetransfer.admin ) Storage Transfer User ( roles/ storagetransfer.user ) storagetransfer. agentpools. delete Owner ( roles/ owner ) Editor ( roles/ editor ) Storage Transfer Admin ( roles/ storagetransfer.admin ) storagetransfer.agentpools.get Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Storage Transfer Admin ( roles/ storagetransfer.admin ) Storage Transfer Viewer ( roles/ storagetransfer.viewer ) Support User ( roles/ iam.supportUser ) Storage Transfer User ( roles/ storagetransfer.user ) storagetransfer. agentpools. list Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Security Admin ( roles/ iam.securityAdmin ) Security Reviewer ( roles/ iam.securityReviewer ) Storage Transfer Admin ( roles/ storagetransfer.admin ) Storage Transfer Viewer ( roles/ storagetransfer.viewer ) Security Auditor ( roles/ iam.securityAuditor ) Support User ( roles/ iam.supportUser ) Storage Transfer User ( roles/ storagetransfer.user ) storagetransfer. agentpools. report Owner ( roles/ owner ) Editor ( roles/ editor ) Storage Transfer Admin ( roles/ storagetransfer.admin ) Storage Transfer Agent ( roles/ storagetransfer.transferAgent ) Storage Transfer User ( roles/ storagetransfer.user ) storagetransfer. agentpools. update Owner ( roles/ owner ) Editor ( roles/ editor ) Storage Transfer Admin ( roles/ storagetransfer.admin ) Storage Transfer User ( roles/ storagetransfer.user ) storagetransfer.jobs.create Owner ( roles/ owner ) Editor ( roles/ editor ) Storage Transfer Admin ( roles/ storagetransfer.admin ) Storage Transfer User ( roles/ storagetransfer.user ) storagetransfer.jobs.delete Owner ( roles/ owner ) Editor ( roles/ editor ) Storage Transfer Admin ( roles/ storagetransfer.admin ) storagetransfer.jobs.get Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Storage Transfer Admin ( roles/ storagetransfer.admin ) Storage Transfer Viewer ( roles/ storagetransfer.viewer ) Support User ( roles/ iam.supportUser ) Storage Transfer User ( roles/ storagetransfer.user ) storagetransfer.jobs.list Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Security Admin ( roles/ iam.securityAdmin ) Security Reviewer ( roles/ iam.securityReviewer ) Storage Transfer Admin ( roles/ storagetransfer.admin ) Storage Transfer Viewer ( roles/ storagetransfer.viewer ) Security Auditor ( roles/ iam.securityAuditor ) Support User ( roles/ iam.supportUser ) Storage Transfer User ( roles/ storagetransfer.user ) storagetransfer.jobs.run Owner ( roles/ owner ) Editor ( roles/ editor ) Storage Transfer Admin ( roles/ storagetransfer.admin ) Storage Transfer User ( roles/ storagetransfer.user ) storagetransfer.jobs.update Owner ( roles/ owner ) Editor ( roles/ editor ) Storage Transfer Admin ( roles/ storagetransfer.admin ) Storage Transfer User ( roles/ storagetransfer.user ) storagetransfer. operations. assign Owner ( roles/ owner ) Editor ( roles/ editor ) Storage Transfer Admin ( roles/ storagetransfer.admin ) Storage Transfer Agent ( roles/ storagetransfer.transferAgent ) Storage Transfer User ( roles/ storagetransfer.user ) storagetransfer. operations. cancel Owner ( roles/ owner ) Editor ( roles/ editor ) Storage Transfer Admin ( roles/ storagetransfer.admin ) Storage Transfer User ( roles/ storagetransfer.user ) storagetransfer.operations.get Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Storage Transfer Admin ( roles/ storagetransfer.admin ) Storage Transfer Viewer ( roles/ storagetransfer.viewer ) Support User ( roles/ iam.supportUser ) Storage Transfer Agent ( roles/ storagetransfer.transferAgent ) Storage Transfer User ( roles/ storagetransfer.user ) storagetransfer. operations. list Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Security Admin ( roles/ iam.securityAdmin ) Security Reviewer ( roles/ iam.securityReviewer ) Storage Transfer Admin ( roles/ storagetransfer.admin ) Storage Transfer Viewer ( roles/ storagetransfer.viewer ) Security Auditor ( roles/ iam.securityAuditor ) Support User ( roles/ iam.supportUser ) Storage Transfer User ( roles/ storagetransfer.user ) storagetransfer. operations. pause Owner ( roles/ owner ) Editor ( roles/ editor ) Storage Transfer Admin ( roles/ storagetransfer.admin ) Storage Transfer User ( roles/ storagetransfer.user ) storagetransfer. operations. report Owner ( roles/ owner ) Editor ( roles/ editor ) Storage Transfer Admin ( roles/ storagetransfer.admin ) Storage Transfer Agent ( roles/ storagetransfer.transferAgent ) Storage Transfer User ( roles/ storagetransfer.user ) storagetransfer. operations. resume Owner ( roles/ owner ) Editor ( roles/ editor ) Storage Transfer Admin ( roles/ storagetransfer.admin ) Storage Transfer User ( roles/ storagetransfer.user ) storagetransfer. projects. getServiceAccount Owner ( roles/ owner ) Editor ( roles/ editor ) Viewer ( roles/ viewer ) Storage Transfer Admin ( roles/ storagetransfer.admin ) Storage Transfer Viewer ( roles/ storagetransfer.viewer ) Support User ( roles/ iam.supportUser ) Storage Transfer User ( roles/ storagetransfer.user ) Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Storage Transfer Service roles Role Permissions Storage Transfer Admin ( roles/ storagetransfer.admin ) Create, update and manage transfer jobs and operations. resourcemanager.projects.get resourcemanager.projects.list storagetransfer. storagetransfer. agentpools. create storagetransfer. agentpools. delete storagetransfer.agentpools.get storagetransfer. agentpools. list storagetransfer. agentpools. report storagetransfer. agentpools. update storagetransfer.jobs.create storagetransfer.jobs.delete storagetransfer.jobs.get storagetransfer.jobs.list storagetransfer.jobs.run storagetransfer.jobs.update storagetransfer. operations. assign storagetransfer. operations. cancel storagetransfer.operations.get storagetransfer. operations. list storagetransfer. operations. pause storagetransfer. operations. report storagetransfer. operations. resume storagetransfer. projects. getServiceAccount Storage Transfer Viewer ( roles/ storagetransfer.viewer ) Read access to storage transfer jobs and operations. resourcemanager.projects.get resourcemanager.projects.list storagetransfer.agentpools.get storagetransfer. agentpools. list storagetransfer.jobs.get storagetransfer.jobs.list storagetransfer.operations.get storagetransfer. operations. list storagetransfer. projects. getServiceAccount Storage Transfer Agent ( roles/ storagetransfer.transferAgent ) Perform transfers from an agent. logging.logEntries.create monitoring.timeSeries.create pubsub.subscriptions.consume pubsub.subscriptions.create pubsub.subscriptions.delete pubsub.subscriptions.get pubsub. topics. attachSubscription pubsub.topics.create pubsub.topics.get pubsub.topics.list pubsub.topics.publish storagetransfer. agentpools. report storagetransfer. operations. assign storagetransfer.operations.get storagetransfer. operations. report Storage Transfer User ( roles/ storagetransfer.user ) Create and update storage transfer jobs and operations. resourcemanager.projects.get resourcemanager.projects.list storagetransfer. agentpools. create storagetransfer.agentpools.get storagetransfer. agentpools. list storagetransfer. agentpools. report storagetransfer. agentpools. update storagetransfer.jobs.create storagetransfer.jobs.get storagetransfer.jobs.list storagetransfer.jobs.run storagetransfer.jobs.update storagetransfer.operations. storagetransfer. operations. assign storagetransfer. operations. cancel storagetransfer.operations.get storagetransfer. operations. list storagetransfer. operations. pause storagetransfer. operations. report storagetransfer. operations. resume storagetransfer. projects. getServiceAccount Service agent roles Service agent roles should only be granted to service agents .
- Home Documentation Security IAM Reference Send feedback Storage Transfer Service roles and permissions Stay organized with collections Save and categorize content based on your preferences.
- This page lists the IAM roles and permissions for Storage Transfer Service.

### "Permissions and roles \_|\_ Storage Transfer Service \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/storage-transfer/docs/access-control](https://docs.cloud.google.com/storage-transfer/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 141
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This role is most suitable for users or internal teams that audit transfer usage, such as security, compliance, or business unit leaders. resourcemanager.projects.get resourcemanager.projects.list storagetransfer.agentpools.get storagetransfer.agentpools.list storagetransfer.jobs.get storagetransfer.jobs.list storagetransfer.operations.get storagetransfer.operations.list storagetransfer.projects.getServiceAccount Storage Transfer Agent ( roles/storagetransfer.transferAgent ) Gives transfer agents the Storage Transfer Service permissions required to complete a transfer.
- Role comparison You can assign the following project role or Storage Transfer Service predefined roles: Capability Editor ( roles/editor ) Storage Transfer ( roles/storagetransfer. ) Admin ( admin ) User ( user ) Viewer ( viewer ) List/get jobs Create jobs Run jobs Update jobs Delete jobs List/get transfer operations Pause/resume transfer operations Read Google service account details that are used by Storage Transfer Service to access Cloud Storage buckets.
- List agent pools Create agent pools Update agent pools Delete agent pools Get agent pools Read or set project bandwidth Role details The following table describes in detail the predefined roles for Storage Transfer Service: Role Description Included Permissions Storage Transfer Admin ( roles/storagetransfer.admin ) Provides all Storage Transfer Service permissions, including deleting jobs.
- Predefined roles This section describes the predefined roles for Storage Transfer Service.

