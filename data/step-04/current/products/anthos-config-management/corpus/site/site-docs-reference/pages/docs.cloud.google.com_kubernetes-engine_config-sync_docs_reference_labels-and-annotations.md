---
title: "Config Sync-managed labels and annotations \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/labels-and-annotations
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/errors
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/reference/labels-and-annotations
  title: "Config Sync-managed labels and annotations \_|\_ Google Cloud Documentation"
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
Config Sync-managed labels and annotations
Stay organized with collections
Save and categorize content based on your preferences.
Config Sync adds and manages several labels and annotations on objects in
the cluster. Don't modify these values unless they are marked Safe to modify
in the following tables.
Labels
Label
Description
Safe to modify
app.kubernetes.io/managed-by: configmanagement.gke.io
Indicates that Config Sync manages the object.
No.
applyset.kubernetes.io/id: APPLYSET_ID
Indicates that the RootSync or RepoSync object is the parent of the specified ApplySet.
No.
applyset.kubernetes.io/part-of: APPLYSET_ID
Indicates that the resource object is a member of the specified ApplySet.
No.
configsync.gke.io/declared-version: API_VERSION
Indicates the API version in which a resource was initially declared.
No.
configmanagement.gke.io/sync-kind: SYNC_KIND
Indicates whether the sync type is a RootSync or RepoSync object.
No.
configmanagement.gke.io/sync-name: SYNC_NAME
Indicates the name of the RootSync or RepoSync associated with the object.
No.
configmanagement.gke.io/sync-namespace: SYNC_NAMESPACE
Indicates the Namespace of the RootSync or RepoSync associated with the object.
No.
Annotations
Annotation
Description
Safe to modify
applyset.kubernetes.io/tooling: configsync.gke.io/v1
Indicates that the ApplySet specified by the applyset.kubernetes.io/id label is managed by Config Sync. Only set on ApplySet parents, not members.
No.
configmanagement.gke.io/cluster-name: CLUSTER_NAME
The name of the cluster, used by ClusterSelectors .
No.
configmanagement.gke.io/declared-config: JSON_OUTPUT
JSON representation of how the object is declared in the source of truth .
No.
configmanagement.gke.io/managed: enabled
Indicates that Config Sync manages the object.
Yes. For more information, see Manage existing cluster objects .
configmanagement.gke.io/source-path: PATH
The path in the source of truth to the file declaring this object.
No.
configmanagement.gke.io/token: TOKEN_HASH
The hash of the repository when this object was last modified.
No.
configsync.gke.io/declared-fields: DECLARED_FIELDS
Stores the declared configuration of a resource. This annotation
uses the same format as the managed fields of server-side apply.
No.
configsync.gke.io/image-to-sync: SOURCE_IMAGE_URL
The OCI image URL with the latest digest fetched by Config Sync.
No.
configsync.gke.io/manager: MANAGER
Which reconciler manages the current object. The value is
:root or NAMESPACE .
No.
configsync.gke.io/resource-id: RESOURCE_ID
Indicates information about the resource's group, kind, namespace, and name.
No.
configsync.gke.io/git-context: GIT_CONTEXT
Stores the Git context that a resource is synced from. Includes
information on the repository, branch, and revision.
No.
config.k8s.io/owning-inventory: INVENTORY
Indicates the resource-group object that owns this resource.
No.
configsync.gke.io/deletion-propagation-policy: Foreground
Enables deletion propagation of resources
managed by a RootSync or RepoSync. This behavior is disabled by default if the annotation is not set
or if the annotation is configsync.gke.io/deletion-propagation-policy: Orphan .
Yes. For more information, see Delete managed resources .
configsync.gke.io/requires-rendering: true
Indicates that the source of truth contains Kustomize configurations
that require rendering.
No.
configsync.gke.io/dynamic-ns-selector-enabled: true
Indicates that the source of truth contains NamespaceSelector objects
that use the dynamic mode.
No.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
