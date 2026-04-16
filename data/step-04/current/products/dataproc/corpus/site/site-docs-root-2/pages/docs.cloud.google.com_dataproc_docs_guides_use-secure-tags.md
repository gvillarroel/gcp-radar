---
title: "Use secure tags \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/dataproc/docs/guides/use-secure-tags
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs/guides/spark-lineage
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/guides/use-secure-tags
  title: "Use secure tags \_|\_ Managed Service for Apache Spark \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

"Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
Home
Documentation
Data analytics
Managed Service for Apache Spark
Guides
Send feedback
Use secure tags
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how to create secure tags, attach them to a
Managed Service for Apache Spark cluster, and then use the tags to secure cluster networking.
Note: In this document, Resource Manager tags
attached to Managed Service for Apache Spark clusters are called secure tags .
Benefits of using secure tags
Secure tags have key differences from
network tags ,
including Identity and Access Management access control, tag inheritance,
and single VPC network binding, which produce the following key benefits:
Enhanced access control and security
Secure tags resolve the security issues inherent with
network tags by providing IAM
controlled access. Unlike network tags, which can be
modified by a user with cluster access, secure tags prevent unauthorized
modification of tags and the resulting unwanted changes to firewall rules.
Using secure tags in IAM policies enable
conditional access control , strengthening
security by granting or denying roles based on the presence of tags.
Simplified firewall management
The global and
regional network firewall
policies support secure tags. This support simplifies firewall management in
Managed Service for Apache Spark across shared networks.
Unlike VPC firewall rules, network firewall policies that are enhanced by secure
tags enable efficient grouping and simultaneous updating of multiple rules, all
governed by IAM access controls. Compared to VPC firewall rules
that utilize network tags, secure tags provide enhanced security and management
capabilities within network firewall policies.
Hierarchical resource inheritance for efficient management
Secure tags inherit from parent resources within the Google Cloud hierarchy.
This inheritance simplifies management by letting you define tags at a higher
level—for example, at the organization level—so that they automatically
propagate to child resources, such as folders and projects. This
enables consistent tagging across your organization. For more information, see
Tag inheritance .
Improved network management across shared and peered VPCs
Network tags identify sources or targets in firewall rules within a specified
VPC network. Secure tags, when used to specify a source for an ingress rule in
a network firewall policy, identify traffic sources in both the
Managed Service for Apache Spark cluster VPC network and peered VPC networks. When
secure tags are used to specify targets for ingress or egress rules, they
identify targets only within their own VPC network.
To learn more about the differences between Resource Manager tags and network tags,
see
Comparison of Tags and network tags .
To learn more about the differences between Resource Manager tags and labels,
see
Tags and labels .
Before you begin
Certain IAM roles are required to
run the examples on this page. Depending on organization policies, these
roles may have already been granted. To check role grants, see
Do you need to grant roles? .
For more information about granting roles, see
Manage access to projects,folders, and organizations .
User role
To get the permissions that
you need to create tags,
ask your administrator to grant you the
Tag Administrator ( roles/resourcemanager.tagAdmin )
IAM role on Resource Manager tags.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Service account role
To ensure that Managed Service for Apache Spark Service Agent service account has the necessary
permissions to attach secure tags to a Managed Service for Apache Spark cluster,
ask your administrator to grant the
Managed Service for Apache Spark Service Agent role ( roles/dataproc.serviceAgent )
IAM role to Managed Service for Apache Spark Service Agent service account on the project.
Important: You must grant this role
to Managed Service for Apache Spark Service Agent service account , not to your user account. Failure to grant the role to the correct principal might result in permission errors.
Limitations
You can attach secure tags to a cluster only at the time of cluster creation.
Updation and deletion of secure tags aren't supported.
Create a secure tag
To attach a secure tag to a Managed Service for Apache Spark cluster, you must first
create a Resource Manager tag
with a specified key and one or more values.
Attach secure tags to the Managed Service for Apache Spark cluster
Create a Managed Service for Apache Spark cluster, specifying the secure tag
TAG_KEY : TAG_VALUE pair.
Google Cloud CLI
To create a Managed Service for Apache Spark cluster and add a secure tag to the
cluster, run the
gcloud Managed Service for Apache Spark clusters create
command with the --resource-manager-tags flag.
gcloud dataproc clusters create CLUSTER_NAME \
--region REGION \
--resource-manager-tags= TAG_KEY = TAG_VALUE
Replace the following:
CLUSTER_NAME : the name of the new cluster.
REGION : the
Compute Engine region
in which to locate the cluster.
TAG_KEY and TAG_VALUE : the key and a value of
the Resource Manager tag that you created .
Tag keys can be specified in namespaced or non-namespaced format, as follows:
Namespace format: PROJECT-ID / KEY_NAME = PROJECT-ID / KEY_NAME / KEY_VALUE .
Example:
--resource-manager-tags="test-project/testkey"=test-project/testkey/testvalue
Non-namespaced format: tagKeys/ TAG_KEY_ID = tagValues/ TAG_VALUE_ID
Example:
--resource-manager-tags=tagKeys/123456789012=tagValues/987654321098
You can specify a comma-separated list to attach multiple secure
tags comprised of the same key with different values, or different keys
and values.
You must provide all tag key-value pairs in either
namespaced or non-namespaced format; if both formats are used, an error
is generated.
REST
To create a Managed Service for Apache Spark cluster and add a secure tag to the
cluster, include the
resourceManagerTags
field as part of a
clusters.create
request that includes attaching a " TAG_KEY ":" TAG_VALUE "
secure tag to the cluster.
{
"clusterName" : " CLUSTER_NAME " ,
"config" : {
"gceClusterConfig" : {
"resourceManagerTags" : {
" TAG_KEY " : " TAG_VALUE "
}
}
}
}
Replace the following:
CLUSTER_NAME : the name of the new cluster.
TAG_KEY and TAG_VALUE : the key and a value of
the Resource Manager tag that you created .
Tag keys can be specified in namespaced or non-namespaced format, as follows:
Namespace format: PROJECT-ID / KEY_NAME : PROJECT-ID / KEY_NAME / KEY_VALUE .
Example:
"test-project/testkey":"test-project/testkey/testvalue"
Non-namespaced format: tagKeys/ TAG_KEY_ID : tagValues/ TAG_VALUE_ID
Example:
"tagKeys/123456789012":"tagValues/987654321098"
You can specify a comma-separated list to attach multiple secure
tags comprised of the same key with different values, or different keys
and values.
You must provide all tag key:value pairs in either
namespaced or non-namespaced format; if both formats are used, an error
is generated.
Use secure tags for cluster networking
After attaching secure tags to a cluster, use secure tags to configure
cluster networking:
Use secure tags to define firewall rules .
What's next
Learn more about tags .
Learn more about network tags .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
