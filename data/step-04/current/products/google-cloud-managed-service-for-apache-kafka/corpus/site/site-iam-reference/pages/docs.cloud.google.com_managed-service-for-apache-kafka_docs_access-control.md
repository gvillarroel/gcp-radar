---
title: "Access control with IAM \_|\_ Google Cloud Managed Service for Apache Kafka\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/access-control
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/access-control
  title: "Access control with IAM \_|\_ Google Cloud Managed Service for Apache Kafka\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Google Cloud Managed Service for Apache Kafka
Guides
Send feedback
Access control with IAM
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how to use Google Cloud Identity and Access Management (IAM) for
access control in Google Cloud Managed Service for Apache Kafka.
IAM controls access at the Google Cloud resource level:
IAM controls determine who can manage your
Managed Service for Apache Kafka resources like clusters, topics, or ACLs
using Google Cloud APIs and tools. Examples of such tools are the
Google Cloud console, gcloud CLI, or client libraries.
These controls also determine who has permission to initially connect to
your Managed Service for Apache Kafka cluster when using standard Apache Kafka clients.
For more information about IAM, see
the IAM documentation .
Overview of IAM
IAM lets you grant granular access to specific
Google Cloud resources and prevents unwanted access to other resources.
IAM lets you adopt the security principle of least privilege,
where you grant only the necessary access to your resources.
IAM lets you control who (principals) has what access (roles)
to which resources.
Principal
A principal can be a Google Account (for end users), a service account (for
apps and virtual machines), a Google group, or a Google Workspace
or Cloud Identity domain that can access a resource.
For more information, see IAM overview: Principals .
A special principal—The Managed Kafka Service Agent
Google Cloud Managed Service for Apache Kafka uses a Google Cloud managed service account known as a
service agent to access your resources. If you have enabled the API, the
service agent is already created. The service agent is identifiable by its email:
service-PROJECT_NUMBER@gcp-sa-managedkafka.iam.gserviceaccount.com .
The Managed Service for Apache Kafka service agent requires the
Managed Kafka Service Agent ( roles/managedkafka.serviceAgent )
role on the project to manage Managed Service for Apache Kafka resources.
This role is automatically granted when you
enable the API. If you revoke this role, Managed Service for Apache Kafka is not able to
create, update or delete clusters.
Resource
Examples of resources that you can grant access to in Managed Service for Apache Kafka are
projects, clusters, topics, and consumer groups.
Some API methods require permissions for multiple resources. For example, the
Create Connect cluster task requires managedkafka.connectClusters.create
permission on the parent location of the Connect cluster resource and
managedkafka.clusters.attachConnectCluster permission on the cluster
resource.
Role
A role is a collection of permissions. Permissions determine what operations are
allowed on a resource. When you grant a role to a principal, you grant all the
permissions that the role contains.
You can grant one or more roles to a principal.
Similar to other Google Cloud products, Managed Service for Apache Kafka supports
three types of roles:
Basic roles: highly permissive roles that existed prior to the
introduction of IAM. For more information about basic
roles, see Basic roles .
Predefined roles: give granular access to specific Google Cloud
resources. For more information about predefined roles, see
Predefined roles . The
Managed Service for Apache Kafka predefined roles are included in a later part of
this section.
Custom roles: help you enforce the principle of least privilege. For
more information about custom roles, see
Custom roles .
As an example, the Managed Kafka Viewer ( roles/managedkafka.viewer ) predefined role
provides read-only access to Managed Service for Apache Kafka resources. A
principal with this role can view clusters, topics, and consumer groups, but
cannot create, update, or delete them.
For more information about assigning roles, see the documentation for
Granting, changing, and revoking access .
To determine which permissions you need for a specific task, see the
Managed Service for Apache Kafka roles and permissions
reference page.
How access control works
Authorization for access to Managed Service for Apache Kafka using Google Cloud APIs
is handled by IAM. Authorization for access from open source
Apache Kafka clients that use SASL authentication is checked by
IAM.
When a client connects using SASL, IAM first checks
if the principal has the managedkafka.clusters.connect permission.
If this check fails, the connection is denied.
When a client connects using mTLS, this initial IAM
permission check is bypassed, and authorization is handled exclusively by
Kafka ACLs.
For comprehensive security, you must configure the following:
IAM permissions for management access.
IAM permissions for connection access if using SASL.
Kafka ACLs
for in-cluster data access and operations from open-source Apache Kafka
clients, independent of the authentication method.
For example, assume that you want to prevent a principal from editing topics.
You can achieve this in two ways:
Fully through IAM. Deny the principal both the
Managed Kafka Topic Editor ( roles/managedkafka.topicEditor ) and
Managed Kafka Client ( roles/managedkafka.client ) roles. This
configuration completely restricts topic editing through Google Cloud
APIs and prevents any Kafka API access using SASL. This configuration does
not prevent connections that use mTLS.
Using Kafka ACLs in conjunction with IAM. This method
is required if the principal uses mTLS or needs SASL access for other
operations. Restrict the following operations using Kafka ACLs:
Create (for topic creation) at the cluster level.
Alter, AlterConfigs, Delete (for topic modification and deletion) at the
topic level.
You can choose the appropriate method based on whether the principal
needs access to the Kafka APIs and the authentication method used.
Set access control at the project level
To set access controls at the project level, see
Manage access to projects, folders, and organizations .
Set access control at the resource level
Some Managed Service for Apache Kafka requests, such as cluster creation or updates, are
long-running operations. To allow a principal to perform these actions, grant
them access to managedkafka.googleapis.com/Operation resources in addition to
the specific cluster resource.
This configuration ensures the principal can both initiate the operation and
monitor its progress.
The following is an example of an IAM condition set on a topic
named "test-topic" :
{'expression': 'resource.name.endsWith('test-topic') 'title': 'SampleIAMCondition'}`.
This example shows an IAM condition that checks if a resource name
ends with test-topic . If it does, the condition is true . This
specific condition is titled SampleIAMCondition and could be used in an
IAM policy to restrict access to only this particular topic.
Certain Managed Service for Apache Kafka requests, such as cluster creation or updates,
return long-running operations. To grant access at the cluster level, include
access for all resources of type managedkafka.googleapis.com/Operation in
addition to the per-cluster resource condition. This process ensures the
principal can initiate the operation and monitor its progress.
Cross-project access control
To authorize a client in a different project to access a cluster, grant the
Managed Kafka Client ( roles/managedkafka.client ) role to the client's
service account on the cluster's project.
For example, if you want to allow a Compute Engine VM in project-B to access a
cluster in project-A , in project-A , grant the Managed Kafka Client
( roles/managedkafka.client ) role to the service account of the
Compute Engine VM in project-B .
What's next
To learn more about the fundamental concepts of IAM, see
Overview of IAM .
To learn about the different components of an IAM policy, see
IAM policy .
To learn how to use Kafka ACLs for in-cluster data access, see
Kafka ACLs .
To view the full list of Managed Service for Apache Kafka roles and permissions,
see Managed Service for Apache Kafka roles and permissions .
Apache Kafka® is a registered
trademark of The Apache Software Foundation or its affiliates in the United
States and/or other countries.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
