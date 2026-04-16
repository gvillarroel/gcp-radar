---
title: "Start learning about Kubernetes \_|\_ Google Kubernetes Engine (GKE) \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/learn/get-started-with-kubernetes
knowledge_key: corpus
source_id: site-docs-root-3
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/learn/get-started-with-kubernetes
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/learn/get-started-with-kubernetes
  title: "Start learning about Kubernetes \_|\_ Google Kubernetes Engine (GKE) \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Guides
Send feedback
Start learning about Kubernetes
Stay organized with collections
Save and categorize content based on your preferences.
GKE is based on the open source container orchestration platform
Kubernetes, and a lot of the documentation on this site assumes that you're
already familiar with basic Kubernetes concepts and terminology. If you're not,
this page provides a quick overview of Kubernetes fundamentals, with links to
recommended reading to get you started.
Key concepts
The following are some key concepts that we use throughout the
GKE documentation. This is not an exhaustive list of Kubernetes
concepts; you can find much more to read and explore in the provided topics from
the Kubernetes documentation and our recommended
reading .
Nodes and clusters
All Kubernetes workloads run on nodes . In GKE, a node is a
Compute Engine virtual machine (VM). On other Kubernetes platforms, a node could be
either a physical or virtual machine. Each node is managed by the Kubernetes
control plane and has all the necessary components to run Pods. A cluster is a
set of nodes that can be treated together as a single entity, on which you
deploy a containerized application.
Learn more in the Kubernetes documentation:
Kubernetes components
Cluster architecture
Nodes
Namespaces
Kubernetes namespaces provide a mechanism for further grouping and selecting
resources such as Pods and Services within a cluster, for example if you have
multiple application teams running workloads on a single cluster.
Learn more in the Kubernetes documentation:
Namespaces
Pods
In Kubernetes, containerized applications run inside a Pod . A Pod is the
smallest deployable unit of computing that you can create and manage in
Kubernetes. A Pod has one or more containers . When a Pod runs multiple
containers (for example, an application server and a proxy
server ), the containers are managed as
a single entity and share the Pod's resources.
Learn more in the Kubernetes documentation:
Pods
Containers
Controllers
Kubernetes controllers track and manage the state of your clusters and
workloads, based on the desired state that you specify (for example, "I would
like to run three of this Pod on this cluster, with this container in each
Pod"). Different controllers track different Kubernetes resource types,
including the following:
Deployments : A Deployment is a Kubernetes object that represents one
or more identical Pods, called replicas . A Deployment runs multiple replicas of the Pods
distributed among the nodes of a cluster. A Deployment automatically
replaces any Pods that fail or become unresponsive.
StatefulSet : A StatefulSet is like a Deployment but maintains a
persistent unique identity for each of its Pods. StatefulSets can be useful
in applications with persistent state (stateful applications).
DaemonSets : A Kubernetes DaemonSet lets you add default Pods to some
or all of your nodes. These are often "helper" services for your workloads,
such as a log-collection daemon or a monitoring daemon.
ReplicaSets : A ReplicaSet is a set of identical Pods. A ReplicaSet is
usually managed as part of a Deployment.
Learn more in the Kubernetes documentation:
Deployments
StatefulSets
DaemonSets
ReplicaSets
Kubernetes Service
By default, you can't control which cluster node a Pod is running on, so Pods
don't have stable IP addresses. To get an IP address for an application running
in Kubernetes, you must define a networking abstraction on top of its Pods
called a Kubernetes
Service . A
Kubernetes Service provides a stable networking endpoint for a set of Pods.
There are several types of
Service , including
LoadBalancer Services that expose an external IP address so that you can
reach applications from outside their cluster.
Kubernetes also has a built-in DNS system for internal address resolution, which
assigns DNS names (for example, helloserver.default.cluster.local ) to
Services. This allows Pods inside the cluster to reach other Pods in the
cluster using a stable address. You can't use this DNS name outside the cluster,
such as from Cloud Shell.
Learn more in the Kubernetes documentation:
Services
Storage
If your applications need to save data that exists beyond the lifetime of their
Pod (stateful applications), you can use a Kubernetes PersistentVolume object
to provision this storage. In GKE, PersistentVolume storage is
backed by Compute Engine disks. You can also choose to use
ephemeral storage, which is destroyed when the corresponding Pod terminates.
Learn more in the Kubernetes documentation:
Volumes
PersistentVolumes
Kubernetes control plane
The Kubernetes control plane is a set of system components that manage the
overall state of your cluster, including the Kubernetes API server that lets
you interact with your clusters and applications by using kubectl and other
tools, a scheduler to schedule Pods on available nodes, and the controllers
that track and manage cluster state. In GKE, the control plane is
provided and managed by Google Cloud.
Learn more in the Kubernetes documentation:
Control plane components
Role-based access control (RBAC)
Kubernetes includes a role-based access control (RBAC) mechanism that lets you
create authorization policies for accessing your clusters and their resources.
When using GKE, you'll often use a combination of Kubernetes RBAC
and Google Cloud's Identity and Access Management to secure your applications.
Learn more in the Kubernetes documentation:
Role-based access control
Recommended reading
This section provides links to recommended resources for learning more about
Kubernetes. In particular, Kubernetes.io , the official
Kubernetes website, has lots of up-to-date, reliable material about all
things Kubernetes.
Guides and tutorials
Kubernetes overview : A
thorough conceptual overview of Kubernetes. Why you need Kubernetes and
what it can
do
is a great introduction to the problems that Kubernetes can solve.
Tutorial: Learn Kubernetes
basics : Walks you
through the basics of Kubernetes with a simple example.
Tutorial: Introducing containers : Learn about containers and container
orchestration with a simple example application, finishing with the example
running on GKE.
Kubernetes tutorials : When you're
ready to move beyond the basics, this section of the Kubernetes documentation provides
tutorials on a variety of Kubernetes topics, from stateful applications to
security.
Reference documentation
Kubernetes
glossary :
A comprehensive, standardized list of Kubernetes terminology. If you're not
sure about a Kubernetes term, here's where to look it up!
Videos
Learn Kubernetes with
Google :
A playlist of video guides from Google that cover different Kubernetes
features and functionalities, with material for both developers and
operators.
Comic
Kubernetes
comic :
Discover the history of Kubernetes and how to use it for continuous
integration and delivery, with the unlikely help of the Goddess of Wisdom
(and containerized applications).
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
