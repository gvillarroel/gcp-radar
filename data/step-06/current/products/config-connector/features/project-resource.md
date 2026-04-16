---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.279Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "Project resource"
feature_slug: "project-resource"
latest_feature_date: "2020-01-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/project-scoped-resources"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeterresource"
keywords:
  - "project"
  - "resource"
  - "supports"
---

# Project resource

Product: Config Connector
Coverage: LOW

## Step 02 Summary

Config Connector supports the Project resource.

## Extended Definition

Config Connector supports the Project resource.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects](https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects)
- [https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/project-scoped-resources](https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/project-scoped-resources)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeterresource](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeterresource)

## Supporting Pages

### "Namespaces and Google Cloud projects \_|\_ Config Connector \_|\_ Google\

- URL: [https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects](https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects)
- Source ID: `site-docs-reference`
- Final score: 32
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Using Namespaces with projects, folders, and organizations Google Cloud supports organizing resources at the Project, Folder, and Organization levels.
- For more information, see Organizing resources with projects and folders For example, if you want to create a Cloud SQL Instance with a name of mySQL in your project with a project ID of myProject , then run this command to annotate your namespace: kubectl annotate namespace \ NAMESPACE NAME cnrm.cloud.google.com/project-id="myProject" Replace NAMESPACE NAME with your Namespace name.
- How Config Connector uses Namespaces Config Connector can use the annotations on the resource's Namespace to determine what project, folder, or organization to create the resources in.
- You can add Annotations to your Config Connector Namespaces to map resources to a Project , a Folder or Organization .

### Project-scoped resources \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/project-scoped-resources](https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/project-scoped-resources)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- You can check the resource reference page to see if a resource supports the spec.projectRef field or cnrm.cloud.google.com/project-id annotation.
- Here is an example of what a FooBar resource's YAML looks like with this annotation in it: apiVersion : foo.cnrm.cloud.google.com/v1beta1 kind : FooBar metadata : annotations : cnrm.cloud.google.com/project-id : PROJECT ID name : foobarname Annotate namespace configuration You can set a default project ID for newly-created resources by annotating your Kubernetes namespace.
- Annotate resource configuration If the Config Connector resource is project-scoped but does not support projectRef field, you can set the project ID to the resource configuration using the project-id annotation: ... metadata : annotations : cnrm.cloud.google.com/project-id : PROJECT ID ...
- If the Google Cloud project is also managed in the same cluster with the the Project CRD, you can specify the project as a Kubernetes resource reference: ... spec : projectRef : name : PROJECT RESOURCE NAME namespace : PROJECT RESOURCE NAMESPACE ...

### "AccessContextManagerServicePerimeterResource \_|\_ Config Connector \_|\_\

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeterresource](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeterresource)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Replace "${ACCESS POLICY NUMBER}" with the numeric ID for your Access Policy Replace "${PERIMETER SHORT NAME}" with the name for the Service Perimeter to add this resource to external : "accessPolicies/${ACCESS POLICY NUMBER}/servicePerimeters/${PERIMETER SHORT NAME}" resourceRef : Replace "${PROJECT NUMBER}" with the number for the project to be protected by the perimeter external : "projects/${PROJECT NUMBER}" Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
- More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ resourceRef Required object A GCP resource that is inside of the service perimeter. resourceRef.external Optional string Allowed value: string of the format projects/{{value}}, where {{value}} is the number field of a Project resource. resourceRef.name Optional string Name of the referent.
- AccessContextManagerServicePerimeterResource Property Value Google Cloud Service Name AccessContextManager Google Cloud Service Documentation /vpc-service-controls/docs/ Google Cloud REST Resource Name accesscontextmanager.v1.accessPolicies.servicePerimeters Google Cloud REST Resource Documentation /access-context-manager/docs/reference/rest/v1/accessPolicies.servicePerimeters Config Connector Resource Short Names gcpaccesscontextmanagerserviceperimeterresource gcpaccesscontextmanagerserviceperimeterresources accesscontextmanagerserviceperimeterresource Config Connector Service Name accesscontextmanager.googleapis.com Config Connector Resource Fully Qualified Name accesscontextmanagerserviceperimeterresources.accesscontextmanager.cnrm.cloud.google.com Can Be Referenced by IAMPolicy/IAMPolicyMember No Config Connector Default Average Reconcile Interval In Seconds 600 Custom Resource Definition Properties Spec Schema perimeterNameRef : external : string name : string namespace : string resourceRef : external : string name : string namespace : string Fields perimeterNameRef Required object Only the external field is supported to configure the reference.
- More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ Status Schema conditions : - lastTransitionTime : string message : string reason : string status : string type : string observedGeneration : integer Fields conditions list (object) Conditions represent the latest available observation of the resource's current state. conditions[] object conditions[].lastTransitionTime string Last time the condition transitioned from one status to another. conditions[].message string Human-readable message indicating details about last transition. conditions[].reason string Unique, one-word, CamelCase reason for the condition's last transition. conditions[].status string Status is the status of the condition.

