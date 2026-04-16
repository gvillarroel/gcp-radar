---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.213Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "config-connector print-resources IAM support column"
feature_slug: "config-connector-print-resources-iam-support-column"
latest_feature_date: "2021-11-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/import-export/export"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources"
keywords:
  - "column"
  - "print"
  - "output"
  - "resources"
---

# config-connector print-resources IAM support column

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

The config-connector print-resources CLI output includes a column indicating support for related IAM resources.

## Extended Definition

The config-connector print-resources CLI output includes a column indicating support for related IAM resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export](https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export)
- [https://docs.cloud.google.com/config-connector/docs/how-to/import-export/export](https://docs.cloud.google.com/config-connector/docs/how-to/import-export/export)
- [https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources](https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources)

## Supporting Pages

### "Bulk importing and exporting existing Google Cloud resources \_|\_ Config\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export](https://docs.cloud.google.com/config-connector/docs/how-to/import-export/bulk-export)
- Source ID: `site-docs-reference`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Options are 'continue', 'halt', or 'ignore'. halt : stop execution on any error (default) continue : continue processing resources, print the error to STDERR ignore : continue processing resources and don't print the error --iam-format : Specifies the kind of IAM resources output with your export.
- If the URI is a full path to a storage object, then the full path is used. config-connector bulk-export --storage-key gs:// BUCKET NAME Output The output from the config-connector bulk-export command is Config Connector resources in YAML format.
- To get a list of supported resources, run config-connector print-resources .
- You can direct the output of resources to files with the output option.

### Export and import resources to Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/import-export/export](https://docs.cloud.google.com/config-connector/docs/how-to/import-export/export)
- Source ID: `site-docs-reference`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The output should resemble the following example: apiVersion : pubsub.cnrm.cloud.google.com/v1beta1 kind : PubSubTopic metadata : annotations : cnrm.cloud.google.com/project-id : my-example-project name : sample-topic Import a resource into Config Connector After you have the YAML file for the resource that you want Config Connector to acquire, complete the following steps: Pass your resource into Config Connector by running the following command: config-connector export RESOURCE ID kubectl apply -f - --namespace NAMESPACE Replace NAMESPACE with the namespace that Config Connector manages resources from.
- After Config Connector acquires the resource, you can manage that resource by following the steps in Managing and deleting resources . config-connector CLI tool optional fields When running the config-connector export command, you can pass the following optional fields: config-connector export RESOURCE NAME \ --output FILENAME \ --oauth2-token TOKEN \ --iam-format [policy policymember none] \ --filter-deleted-iam-members [true false] \ --verbose --output : An optional output path that disables standard output.
- By default, config-connector uses the Google Cloud CLI default credentials . --iam-format : Specifies the kind of IAM resources output with your export.
- To get a list of supported resources, run config-connector print-resources .

### "Securing access to resources with IAM \_|\_ Config Connector \_|\_ Google\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources](https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources)
- Source ID: `site-docs-reference`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Confirm the pubsub-topic-service-account is allowed to create PubSubTopic resources by confirming the output of the following command is yes : kubectl auth can-i get pubsubtopics \ --as=system:serviceaccount:default:pubsub-topic-service-account Cleaning up Use kubectl delete to remove the Service Account, IAM Role and Rolebinding. kubectl delete -f pubsub-topic-editor-rolebinding.yaml --namespace CC NAMESPACE kubectl delete -f pubsub-topic-editor-role.yaml --namespace CC NAMESPACE kubectl delete -f pubsub-topic-service-account.yaml --namespace CC NAMESPACE Replace CC NAMESPACE with the namespace Config Connector manages resources from.
- Confirm pubsub-topic-service-account cannot create PubSubTopic resources by verifying the output of the following command contains no : kubectl auth can-i get pubsubtopics --as=system:serviceaccount:default:pubsub-topic-service-account Next, create a ClusterRole that allows Pub/Sub topic creation.
- Create a file named iampolicymember.yaml with the following content, replacing EMAIL ADDRESS with your Google Cloud account's email address: apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMPolicyMember metadata : name : iampolicymember-sample spec : resourceRef : apiVersion : pubsub.cnrm.cloud.google.com/v1beta1 kind : PubSubTopic name : pubsubtopic-sample role : roles/pubsub.admin member : "user: EMAIL ADDRESS " Apply the iampolicymember.yaml . kubectl apply -f iampolicymember.yaml --namespace CC NAMESPACE Replace CC NAMESPACE with the namespace Config Connector manages resources from.
- Create a file named pubsub-topic-editor-rolebinding.yaml with the following contents: apiVersion : rbac.authorization.k8s.io/v1 kind : RoleBinding metadata : name : pubsub-topic-editor-rolebinding. subjects : - kind : ServiceAccount name : pubsub-topic-service-account roleRef : apiGroup : rbac.authorization.k8s.io kind : ClusterRole name : pubsub-topic-editor Apply pubsub-topic-editor-rolebinding.yaml to your cluster. kubectl apply -f pubsub-topic-editor-rolebinding.yaml --namespace CC NAMESPACE Replace CC NAMESPACE with the namespace Config Connector manages resources from.

