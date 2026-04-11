---
title: "Organization-scoped resources \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/organization-scoped-resources
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/concepts/resources
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/organization-scoped-resources
  title: "Organization-scoped resources \_|\_ Config Connector \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Config Connector
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Organization-scoped resources
Config Connector can manage your resources at the project, folder, or
organization level. In order for Config Connector to determine where to create
your resources, it first checks for a scope-defining field
in your resource spec, if not found, then checks for a scope-defining annotation .
Note: The scope concept does not apply to all
Config Connector resources. See Exceptions
for more details. You can check the
resource reference page to see
if a resource supports the spec.organizationRef field or cnrm.cloud.google.com/organization-id annotation.
Specify organizationRef field
Most organization-scoped Config Connector resources support a field named organizationRef
in its CRD spec. Use this field to specify the Google Cloud organization that you
want to create the resource in.
You can use the external field to specify the organization ID. The exact
format of the value may be different depending on the resource type. Two most
common formats are " ORGANIZATION_ID " and
"organizations/ ORGANIZATION_ID ".
See an example of " ORGANIZATION_ID " below:
...
spec :
organizationRef :
external : " ORGANIZATION_ID "
...
Annotate resource configuration
If the Config Connector resource is organization-scoped but does not support
organizationRef field, you can set the organization ID to the resource configuration
using the organization-id annotation:
...
metadata :
annotations :
cnrm.cloud.google.com/organization-id : ORGANIZATION_ID
...
Here is an example of what a resource's YAML will look like with this annotation
in it:
apiVersion : foo.cnrm.cloud.google.com/v1beta1
kind : FooBar
metadata :
annotations :
cnrm.cloud.google.com/organization-id : ORGANIZATION_ID
name : foobarname
Annotate namespace configuration
You can set a default organization ID for newly-created resources by
annotating your Kubernetes namespace. If any of the resources in the namespace
have this annotation explicitly set in its own configuration, the resource level
annotation overwrites the namespace-level annotation.
To annotate the namespace using command line, run the following command:
kubectl annotate namespace NAMESPACE_NAME cnrm.cloud.google.com/organization-id= ORGANIZATION_ID
Replace the following:
NAMESPACE_NAME : your namespace name
ORGANIZATION_ID : your Google Cloud organization ID
Alternatively, you can apply a YAML manifest containing the annotation.
Copy the YAML below into a file:
apiVersion : v1
kind : Namespace
metadata :
annotations :
cnrm.cloud.google.com/organization-id : ORGANIZATION_ID
name : NAMESPACE_NAME
Replace the following:
ORGANIZATION_ID : your Google Cloud organization ID
NAMESPACE_NAME : your namespace name
After you have created the file, apply it to your cluster.
Note: You must create the namespace and annotation before applying any resources
into the namespace.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
