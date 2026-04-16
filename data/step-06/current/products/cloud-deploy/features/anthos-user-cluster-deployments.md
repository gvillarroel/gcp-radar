---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:42.677Z"
product_name: "Cloud Deploy"
product_slug: "cloud-deploy"
feature_name: "Anthos user cluster deployments"
feature_slug: "anthos-user-cluster-deployments"
latest_feature_date: "2022-02-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/deploy/docs/anthos-targets"
  - "https://docs.cloud.google.com/deploy/docs/hooks"
  - "https://docs.cloud.google.com/deploy/docs/custom-targets"
keywords:
  - "anthos"
  - "user"
  - "cluster"
  - "deployments"
  - "deploy"
  - "supports"
  - "deploying"
  - "applications"
---

# Anthos user cluster deployments

Product: Cloud Deploy
Coverage: LOW

## Step 02 Summary

Cloud Deploy supports deploying applications to Anthos user clusters.

## Extended Definition

Cloud Deploy supports deploying applications to Anthos user clusters.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deploy/docs/anthos-targets](https://docs.cloud.google.com/deploy/docs/anthos-targets)
- [https://docs.cloud.google.com/deploy/docs/hooks](https://docs.cloud.google.com/deploy/docs/hooks)
- [https://docs.cloud.google.com/deploy/docs/custom-targets](https://docs.cloud.google.com/deploy/docs/custom-targets)

## Supporting Pages

### "Run hooks before and after deploying \_|\_ Cloud Deploy \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deploy/docs/hooks](https://docs.cloud.google.com/deploy/docs/hooks)
- Source ID: `site-docs-reference-2`
- Final score: 40
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can configure each hook to run in a specified Cloud Deploy execution environment , but if you're deploying to Google Kubernetes Engine you can optionally configure it to run on the GKE cluster where you're deploying your application.
- To run hooks on the application cluster, you must configure them as customActions in your skaffold.yaml , and reference them using actions in the predeploy or postdeploy stanza in your delivery pipeline stage configuration: serialPipeline : stages : - targetId : hooks-staging profiles : [] strategy : standard : predeploy : actions : [ "my-predeploy-action" ] postdeploy : actions : [ "my-postdeploy-action" ] Note: If you configure hooks using tasks , those hooks run only in the Cloud Deploy execution environment.
- The following is an example customActions stanza that includes executionMode to invoke the hook container on the application cluster: customActions : - name : predeploy-action containers : - name : predeploy-echo image : ubuntu command : [ "/bin/sh" ] args : [ "-c" , 'echo "this is a predeploy action"' ] executionMode : kubernetesCluster : {} The executionMode stanza is optional, and if you omit it, Skaffold runs the custom action container in the Cloud Deploy execution environment.
- Home Documentation Application development Cloud Deploy Guides Send feedback Run hooks before and after deploying Stay organized with collections Save and categorize content based on your preferences.

### Deploy to GKE attached clusters \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/anthos-targets](https://docs.cloud.google.com/deploy/docs/anthos-targets)
- Source ID: `site-docs-reference-2`
- Final score: 39
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following is an example target configuration: apiVersion: deploy.cloud.google.com/v1 kind: Target metadata: name: qsdev description: development cluster anthosCluster: membership: projects/my-app/locations/global/memberships/my-app-dev-cluster What's next Learn more about configuring Cloud Deploy targets Learn about Cloud Deploy execution environments .
- The cluster you're deploying to, including GKE attached clusters, does not need to be in the same project as your delivery pipeline. [ membership name ] is the name that you chose when you registered the cluster to a fleet.
- This document describes how to deploy your applications to GKE attached clusters .
- Before you begin Have a user cluster that you will deploy to.

### About custom targets \_|\_ Cloud Deploy \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deploy/docs/custom-targets](https://docs.cloud.google.com/deploy/docs/custom-targets)
- Source ID: `site-docs-reference-2`
- Final score: 35
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Deploy supports canary deployments as long as the custom renderer and deployer support the canary feature.
- The following are the valid statuses: SUCCEEDED FAILED SKIPPED This is for canary deployments where canary phases are skipped , to go straight to stable . (Optional) a list of deploy artifact files, in the form of Cloud Storage paths The path is the full URI.
- A custom target is a target that represents an arbitrary output environment other than a runtime that Cloud Deploy supports.
- For multi-phase rollouts ( canary deployments ), Cloud Deploy provides these variables for each phase.

