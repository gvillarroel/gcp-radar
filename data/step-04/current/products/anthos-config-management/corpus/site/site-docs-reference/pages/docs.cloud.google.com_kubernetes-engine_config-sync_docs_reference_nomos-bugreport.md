---
title: "nomos bugreport contents \_|\_ Config Sync \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/nomos-bugreport
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/nomos-bugreport
  title: "nomos bugreport contents \_|\_ Config Sync \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Config Sync
Reference
Send feedback
nomos bugreport contents
Stay organized with collections
Save and categorize content based on your preferences.
The nomos command-line tool helps with common administrative tasks for
Config Sync, for example producing a diagnostic
archive. The exact output and layout of the archive is subject to
change and is not considered an API. The code for nomos is available
in the Config Sync repository .
You can get similar information from your cluster by running
kubectl get or kubectl logs , but the advantage of nomos bugreport
is that it creates an archive of key information about the
Config Sync system. When you contact Google Cloud Support, it's
helpful to provide nomos bugreport output.
You can also use the output of nomos bugreport for your own debugging or
internal support.
The nomos bugreport output file structure looks like this:
- raw/
- cluster/
- configmanagement/
- namespaces/
- config-management-monitoring/
- config-management-system/
- gatekeeper-system/
- resource-group-system/
- kube-system/
- processed/
- status.txt
- version.txt
The information you can get from nomos bugreport :
Nomos version shows the Config Sync version, the output of nomos version .
Nomos status shows the output of nomos status status, for example which commit is synced and any errors.
Information about Config Sync custom resources:
For cluster-scoped resources such as ConfigManagement and ClusterSelectors are located here: raw/ cluster-1 /cluster/configmanagement/ .
For namespace-scoped ones, such as RootSync, RepoSync and ResourceGroup are located here: raw/ cluster-1 /namespaces/ namespace-1 .
Resources synced and managed by Config Sync:
If you have RootSync and RepoSync APIs enabled, it's in ResourceGroup's spec. You can get the count of those resources, and their kind, namespace, and name.
If you don't have RootSync and RepoSync APIs enabled and you specify git fields in your ConfigManagement object (deprecated), the full content of the resources is in ClusterConfigs and NamespaceConfigs. You should Migrate your ConfigManagement object .
Logs of all Config Sync Pods are under raw/ cluster-1 /namespaces/ pod-namespace-1 / pod-name-1 / container-name .txt .
The full content of all Config Sync Pods: under raw/ cluster-1 /namespaces/ pod-namespace-1 /pods.txt .
Are Config Sync
RootSync and RepoSync APIs
enabled (that is, using multi-repo mode) or not?
Check the ConfigManagement resource and if you see spec.enableMultiRepo: true , RootSync and RepoSync APIs are enabled.
If you see components such as RootSync, RepoSync, or reconciler Pods, you have RootSync and RepoSync APIs enabled.
If you see components such as git-importer Pod, then RootSync and RepoSync APIs aren't enabled and you need to Migrate your ConfigManagement object .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
