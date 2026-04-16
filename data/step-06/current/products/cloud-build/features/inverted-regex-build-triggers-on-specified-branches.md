---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.913Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Inverted-regex build triggers on specified branches"
feature_slug: "inverted-regex-build-triggers-on-specified-branches"
latest_feature_date: "2019-05-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers"
  - "https://docs.cloud.google.com/build/docs/api/reference/rest"
  - "https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-data-center"
keywords:
  - "inverted"
  - "branches"
  - "regex"
  - "specified"
  - "triggers"
---

# Inverted-regex build triggers on specified branches

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build build triggers can use inverted regex matching and be restricted to specified branches.

## Extended Definition

Cloud Build build triggers can use inverted regex matching and be restricted to specified branches.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- [https://docs.cloud.google.com/build/docs/api/reference/rest](https://docs.cloud.google.com/build/docs/api/reference/rest)
- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-data-center](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-data-center)

## Supporting Pages

### Create and manage build triggers \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- Source ID: `site-docs-root-2`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Note: Only the service account specified in the gcloud builds triggers create command is used for builds invoked with triggers.
- If you specified a service account in your build config, it will be ignored during build execution when using triggers.
- Only the service account specified on your trigger will be used for builds executed by triggers.
- Build triggers ignore the service account specified in the build config file.

### Cloud Build API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/api/reference/rest](https://docs.cloud.google.com/build/docs/api/reference/rest)
- Source ID: `site-docs-root`
- Final score: 81
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v2.projects.locations.connections Methods create POST /v2/{parent=projects/ /locations/ }/connections Creates a Connection. delete DELETE /v2/{name=projects/ /locations/ /connections/ } Deletes a single connection. fetchLinkableRepositories GET /v2/{connection=projects/ /locations/ /connections/ }:fetchLinkableRepositories FetchLinkableRepositories get repositories from SCM that are accessible and could be added to the connection. get GET /v2/{name=projects/ /locations/ /connections/ } Gets details of a single connection. getIamPolicy GET /v2/{resource=projects/ /locations/ /connections/ }:getIamPolicy Gets the access control policy for a resource. list GET /v2/{parent=projects/ /locations/ }/connections Lists Connections in a given project and location. patch PATCH /v2/{connection.name=projects/ /locations/ /connections/ } Updates a single connection. processWebhook POST /v2/{parent=projects/ /locations/ }/connections:processWebhook ProcessWebhook is called by the external SCM for notifying of events. setIamPolicy POST /v2/{resource=projects/ /locations/ /connections/ }:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v2/{resource=projects/ /locations/ /connections/ }:testIamPermissions Returns permissions that a caller has on the specified resource.
- REST Resource: v2.projects.locations REST Resource: v2.projects.locations.connections REST Resource: v2.projects.locations.connections.repositories REST Resource: v2.projects.locations.operations REST Resource: v1 REST Resource: v1.githubDotComWebhook REST Resource: v1.locations REST Resource: v1.operations REST Resource: v1.projects.builds REST Resource: v1.projects.githubEnterpriseConfigs REST Resource: v1.projects.locations REST Resource: v1.projects.locations.bitbucketServerConfigs REST Resource: v1.projects.locations.bitbucketServerConfigs.connectedRepositories REST Resource: v1.projects.locations.bitbucketServerConfigs.repos REST Resource: v1.projects.locations.builds REST Resource: v1.projects.locations.gitLabConfigs REST Resource: v1.projects.locations.gitLabConfigs.connectedRepositories REST Resource: v1.projects.locations.gitLabConfigs.repos REST Resource: v1.projects.locations.githubEnterpriseConfigs REST Resource: v1.projects.locations.operations REST Resource: v1.projects.locations.triggers REST Resource: v1.projects.locations.workerPools REST Resource: v1.projects.triggers Service: cloudbuild.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v2.projects.locations.connections.repositories Methods accessReadToken POST /v2/{repository=projects/ /locations/ /connections/ /repositories/ }:accessReadToken Fetches read token of a given repository. accessReadWriteToken POST /v2/{repository=projects/ /locations/ /connections/ /repositories/ }:accessReadWriteToken Fetches read/write token of a given repository. batchCreate POST /v2/{parent=projects/ /locations/ /connections/ }/repositories:batchCreate Creates multiple repositories inside a connection. create POST /v2/{parent=projects/ /locations/ /connections/ }/repositories Creates a Repository. delete DELETE /v2/{name=projects/ /locations/ /connections/ /repositories/ } Deletes a single repository. fetchGitRefs GET /v2/{repository=projects/ /locations/ /connections/ /repositories/ }:fetchGitRefs Fetch the list of branches or tags for a given repository. get GET /v2/{name=projects/ /locations/ /connections/ /repositories/ } Gets details of a single repository. list GET /v2/{parent=projects/ /locations/ /connections/ }/repositories Lists Repositories in a given connection.
- REST Resource: v1.projects.locations.triggers Methods create POST /v1/{parent=projects/ /locations/ }/triggers Creates a new BuildTrigger . delete DELETE /v1/{name=projects/ /locations/ /triggers/ } Deletes a BuildTrigger by its project ID and trigger ID. get GET /v1/{name=projects/ /locations/ /triggers/ } Returns information about a BuildTrigger . list GET /v1/{parent=projects/ /locations/ }/triggers Lists existing BuildTrigger s. patch PATCH /v1/{trigger.resourceName=projects/ /locations/ /triggers/ } Updates a BuildTrigger by its project ID and trigger ID. run POST /v1/{name=projects/ /locations/ /triggers/ }:run Runs a BuildTrigger at a particular source revision. webhook POST /v1/{name=projects/ /locations/ /triggers/ }:webhook ReceiveTriggerWebhook [Experimental] is called when the API receives a webhook request targeted at a specific trigger.

### "Connect to a Bitbucket Data Center host \_|\_ Cloud Build \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-data-center](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-data-center)
- Source ID: `site-docs-root-2`
- Final score: 71
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- On the Triggers page, when you click Run , the Run trigger page opens and shows a Failed to list branches.
- This way, you can configure build triggers to build repositories from Bitbucket Data Center and build repositories from Bitbucket Data Center in a private network .
- If no value is specified for the IP address, the IP address is automatically assigned a range within the peered VPC network.
- If no value is specified for the prefix length, IP addresses are automatically assigned within the peered VPC network.

