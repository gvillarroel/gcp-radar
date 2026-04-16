---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.065Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "cnrm-controller-manager resource customization in namespaced mode"
feature_slug: "cnrm-controller-manager-resource-customization-in-namespaced-mode"
latest_feature_date: "2023-08-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/how-to/customize-controller-manager-rate-limit"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references"
keywords:
  - "namespaced"
  - "customization"
  - "controller"
  - "manager"
  - "cnrm"
  - "resource"
  - "mode"
---

# cnrm-controller-manager resource customization in namespaced mode

Product: Config Connector
Coverage: LOW

## Step 02 Summary

Config Connector supports customizing cnrm-controller-manager pod resource requests and limits in namespaced mode.

## Extended Definition

Config Connector supports customizing cnrm-controller-manager pod resource requests and limits in namespaced mode.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/how-to/customize-controller-manager-rate-limit](https://docs.cloud.google.com/config-connector/docs/how-to/customize-controller-manager-rate-limit)
- [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources)
- [https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references](https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references)

## Supporting Pages

### "Configure the controller manager rate limit \_|\_ Config Connector \_|\_\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/customize-controller-manager-rate-limit](https://docs.cloud.google.com/config-connector/docs/how-to/customize-controller-manager-rate-limit)
- Source ID: `site-docs-reference`
- Final score: 40
- Re-rank relevance: N/A

Evidence snippets:
- Configure the rate limit for namespaced controller manager If Config Connector is configured to run in namespaced mode , you can use the NamespacedControllerReconciler custom resource to configure the rate limit of the cnrm-controller-manager controller's Kubernetes client in your designated namespace.
- Verify that the --qps and --burst flags are added to the cnrm-controller-manager controller's manager container by running the following command: kubectl describe statefulsets -n cnrm-system -l "cnrm.cloud.google.com/scoped-namespace= NAMESPACE " The output should contain the following: Containers : manager : Image : gcr.io/gke-release/cnrm/controller:fd4c42c Port : 23232/TCP Host Port : 0/TCP Command : /configconnector/manager Args : --qps=80 --burst=40 --scoped-namespace=config-control --prometheus-scrape-endpoint=:8888 Configure the rate limit in cluster mode Starting in version 1.125, if Config Connector is configured to run in cluster mode, you can configure the rate limit of the cnrm-controller-manager controller's Kubernetes client using the ControllerReconciler custom resource.
- The usage is similar to the namespaced mode, but in this case, you should use the ControllerReconciler CR instead of NamespacedControllerReconciler , as in the following example: apiVersion : customize.core.cnrm.cloud.google.com/v1alpha1 kind : ControllerReconciler metadata : name : cnrm-controller-manager spec : rateLimit : qps : 80 # the default value is 20 burst : 40 # the default value is 30 Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Create a file named configure-rate-limit.yaml and copy the following YAML into it: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : NamespacedControllerReconciler metadata : name : cnrm-controller-manager # name must not contain the namespace ID suffix namespace : NAMESPACE spec : rateLimit : qps : 80 # the default value is 20 burst : 40 # the default value is 30 Replace NAMESPACE with the name of your namespace.

### "Configure container resources and replicas \_|\_ Config Connector \_|\_\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- For example, to configure the memory request and limit of the webhook container of the cnrm-webhook-manager controller, create and apply the following YAML file: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : ControllerResource metadata : name : cnrm-webhook-manager spec : containers : - name : webhook resources : limits : memory : 512Mi requests : memory : 256Mi Use NamespacedControllerResource for the namespaced controller manager Use the NamespacedControllerResource custom resource only to configure resources for the cnrm-controller-manager when Config Connector is running in namespaced mode.
- The following components are always cluster-scoped, even when Config Connector is installed in namespaced mode: cnrm-webhook-manager cnrm-deletiondefender cnrm-resource-stats-recorder cnrm-unmanaged-detector The cnrm-controller-manager is also cluster-scoped when Config Connector is installed in cluster mode.
- The following YAML file shows an example configuration: apiVersion : customize.core.cnrm.cloud.google.com/v1beta1 kind : NamespacedControllerResource metadata : name : cnrm-controller-manager # name should not contain the namespace ID suffix namespace : NAMESPACE spec : containers : - name : manager resources : limits : cpu : 200m memory : 512Mi requests : cpu : 100m memory : 256Mi Replace NAMESPACE with the name of your namespace.
- You can configure the following controllers: cnrm-webhook-manager cnrm-controller-manager cnrm-deletiondefender cnrm-resource-stats-recorder cnrm-unmanaged-detector (Config Connector version 1.108 and later) There are two types of custom resources used for configuration: ControllerResource and NamespacedControllerResource .

### Creating resource references \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references](https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- For example, if you want to create resources in NAMESPACE A that reference resources in NAMESPACE B , you need create the following RoleBinding : apiVersion : rbac.authorization.k8s.io/v1 kind : RoleBinding metadata : namespace : NAMESPACE B name : allow-references-from- NAMESPACE A roleRef : apiGroup : rbac.authorization.k8s.io kind : ClusterRole name : cnrm-viewer subjects : - kind : ServiceAccount name : cnrm-controller-manager- NAMESPACE A namespace : cnrm-system What's next Review the Resource reference to learn about the resources Config Connector supports.
- Copy the following into a file named pubsub-topic.yaml : apiVersion : pubsub.cnrm.cloud.google.com/v1beta1 kind : PubSubTopic metadata : name : TOPIC NAME Replace TOPIC NAME with your desired PubSubTopic name For example, to create a topic named myTopic you could use the following YAML file: apiVersion : pubsub.cnrm.cloud.google.com/v1beta1 kind : PubSubTopic metadata : name : myTopic Create the PubSubTopic with kubectl apply . kubectl --namespace CC NAMESPACE apply -f pubsub-topic.yaml Replace CC NAMESPACE with the namespace Config Connector manages resources from.
- For example, the IAMPolicyMember below references a Project with the project ID test-project . apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMPolicyMember metadata : name : test-iampolicymember spec : member : serviceAccount:test-serviceaccount@test-project. iam.gserviceaccount.com role : roles/storage.admin resourceRef : kind : Project external : projects/test-project Note: You must set values for kind when using external references with IAMPolicy , IAMPartialPolicy and IAMPolicyMember .
- For example, the YAML referencing the topic myTopic you created earlier is: apiVersion : pubsub.cnrm.cloud.google.com/v1beta1 kind : PubSubSubscription metadata : name : pubsubsubscription-referencing-topic spec : topicRef : name : myTopic Create the PubSubSubscription with kubectl apply . kubectl --namespace CC NAMESPACE apply -f pubsub-subscription.yaml Replace CC NAMESPACE with the namespace Config Connector manages resources from.

