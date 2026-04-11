---
title: "Set the default StorageClass \_|\_ Google Distributed Cloud (software only)\
  \ for bare metal \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/default-storage-class
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/configure-sa
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/default-storage-class
  title: "Set the default StorageClass \_|\_ Google Distributed Cloud (software only)\
    \ for bare metal \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Google Distributed Cloud
GDC for bare metal
Guides
Send feedback
Set the default StorageClass
Stay organized with collections
Save and categorize content based on your preferences.
This page shows how to set the default StorageClass for an
Google Distributed Cloud cluster.
Overview
Google Distributed Cloud can integrate with block or file storage by using any of
the following mechanisms:
Kubernetes in-tree volume plugins
Container Storage Interface (CSI)
Default StorageClass
When you request storage with a
PersistentVolumeClaim
(PVC), you can specify a StorageClass. If you do not specify a StorageClass, the
default StorageClass is used if one is configured in the cluster.
Google Distributed Cloud does not configure a default StorageClass. For example,
suppose you create a PVC that does not specify a StorageClass. The volume
controller will fulfill the claim according to the default StorageClass.
Change the default StorageClass
As a cluster administrator, you might want to change the default storage class.
Then all requests for storage that do not specify a StorageClass will be
fulfilled according to the StorageClass of your choice. This section gives the
steps for changing the default.
Deploy a new storage system
Deploy a new storage system and any software components for integrating the new
storage mechanism with a Kubernetes cluster. For example, you might need to
install a CSI driver
in the cluster.
Mark any existing default StorageClass as non-default
Search your cluster for any existing default StorageClass if one already exists
and mark it as non-default. For details, see
Change the default StorageClass .
Create a new StorageClass
Create a manifest for a new StorageClass .
Include the storageclass.kubernetes.io/is-default-class: "true" annotation.
For example:
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
annotations:
storageclass.kubernetes.io/is-default-class: "true"
...
name: my-storage-class
...
parameters:
...
provisioner: [MY_PROVISIONER]
...
Save your manifest as a YAML file, and create the new StorageClass:
kubectl --kubeconfig [CLUSTER_KUBECONFIG] apply -f [MANIFEST_FILE]
where [MANIFEST_FILE] is the path to your new StorageClass manifest
file.
What's next
Read about Google Distributed Cloud's storage concepts
Install a CSI driver
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
