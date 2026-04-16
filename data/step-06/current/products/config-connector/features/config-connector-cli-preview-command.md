---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.009Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "config-connector CLI preview command"
feature_slug: "config-connector-cli-preview-command"
latest_feature_date: "2026-02-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/how-to/getting-started"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/import-export/overview"
  - "https://docs.cloud.google.com/config-connector/docs/troubleshooting"
keywords:
  - "preview"
  - "command"
  - "added"
---

# config-connector CLI preview command

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

Config Connector added a preview command to the config-connector CLI.

## Extended Definition

Config Connector added a preview command to the config-connector CLI.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/how-to/getting-started](https://docs.cloud.google.com/config-connector/docs/how-to/getting-started)
- [https://docs.cloud.google.com/config-connector/docs/how-to/import-export/overview](https://docs.cloud.google.com/config-connector/docs/how-to/import-export/overview)
- [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting)

## Supporting Pages

### Getting started with Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/getting-started](https://docs.cloud.google.com/config-connector/docs/how-to/getting-started)
- Source ID: `site-docs-reference`
- Final score: 56
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, to check if your Pub/Sub topic resource is ready, run the following command: kubectl wait --for=condition=READY pubsubtopics TOPIC NAME Replace TOPIC NAME with the name of your Pub/Sub topic.
- For example, to view all your Pub/Sub topic, run the following command: kubectl describe pubsubtopics In this list, you should see the Pub/Sub topic you created in the previous section.
- Run the following command: kubectl apply -f pubsub-topic.yaml Check the Pub/Sub instance for the change in name: kubectl describe pubsubtopics Your topic should have the new label.
- To create the Pub/Sub topic, run the following command: kubectl apply -f pubsub-topic.yaml Describing a resource Use kubectl describe to get details on a resource.

### "Install the config-connector CLI tool \_|\_ Config Connector \_|\_ Google\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/import-export/overview](https://docs.cloud.google.com/config-connector/docs/how-to/import-export/overview)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### Troubleshoot Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/troubleshooting](https://docs.cloud.google.com/config-connector/docs/troubleshooting)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- Check Config Connector status and conditions Check the version of Config Connector Run the following command to get the installed Config Connector version, and cross-reference the release notes to verify that the running version supports the features and resources that you want to use: kubectl get ns cnrm-system -o jsonpath = '{.metadata.annotations.cnrm\.cloud\.google\.com/version}' Check the resource's status and events Usually, you can determine the issue with your Config Connector resources by inspecting the state of your resources in Kubernetes .
- To confirm that Workload Identity Federation for GKE is not enabled, complete the following steps: Save the following Pod configuration as wi-test.yaml : apiVersion : v1 kind : Pod metadata : name : workload-identity-test namespace : cnrm-system spec : containers : - image : google/cloud-sdk:slim name : workload-identity-test command : [ "sleep" , "infinity" ] serviceAccountName : cnrm-controller-manager If you installed Config Connector using namespaced mode , serviceAccountName should be cnrm-controller-manager- NAMESPACE .
- You can check the controller Pod's logs by running: kubectl logs -n cnrm-system \ -l cnrm.cloud.google.com/component = cnrm-controller-manager \ -c manager If you have Config Connector installed in namespaced-mode , then the previous command shows the logs of all controller Pods combined.
- To verify if a service supports on-demand service identity creation before applying your configuration, run the following command: gcloud beta services identity create --service SERVICE NAME .googleapis.com Replace SERVICE NAME with the name of the service, for example spanner .

