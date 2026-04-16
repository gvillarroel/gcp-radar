---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T18:41:05.983Z"
product_name: "Cloud Deployment Manager"
product_slug: "cloud-deployment-manager"
feature_name: "Predefined Deployment Manager IAM roles"
feature_slug: "predefined-deployment-manager-iam-roles"
latest_feature_date: "2016-08-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deployment-manager/docs/best-practices"
  - "https://docs.cloud.google.com/deployment-manager/docs/access-control"
  - "https://docs.cloud.google.com/deployment-manager/docs/configuration/set-access-control-resources"
keywords:
  - "predefined"
  - "deployment"
  - "manager"
  - "iam"
  - "roles"
  - "provides"
---

# Predefined Deployment Manager IAM roles

Product: Cloud Deployment Manager
Coverage: MEDIUM

## Step 02 Summary

Deployment Manager provides predefined IAM roles.

## Extended Definition

Deployment Manager provides predefined IAM roles.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices)
- [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control)
- [https://docs.cloud.google.com/deployment-manager/docs/configuration/set-access-control-resources](https://docs.cloud.google.com/deployment-manager/docs/configuration/set-access-control-resources)

## Supporting Pages

### Best practices for using Deployment Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deployment-manager/docs/best-practices](https://docs.cloud.google.com/deployment-manager/docs/best-practices)
- Source ID: `site-docs-reference`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- There are a number of predefined IAM roles you can use to determine how much access a user has to call Deployment Manager. ❑ Use IAM roles to restrict what permissions are granted to users to use Deployment Manager. ❑ If you want users to be able to access resources created by Deployment Manager, grant users the roles they require to use resources, but do not grant them permissions to deploy resources directly. ❑ Granting the owner role to a principal will allow them to modify the IAM policy.
- If you are using Deployment Manager to manage critical resources, such as custom IAM roles , you must assign additional IAM roles to the default Google APIs service account.
- For example, if you want to use Deployment Manager to create and manage custom IAM roles, you must add the Role Administrator role to the Google APIs service account.
- To attach the disk, the configuration has a reference to the disk: resources : instance - name : example-instance type : compute.v1.instance properties : disks : - type : PERSISTENT source:$(ref.example-disk.selfLink) disk - name : example-disk type : compute.v1.disk properties : zone : us-central1-a sizeGb : 10 type : ... ❑ If you want to create and manage private Google Kubernetes Engine (GKE) clusters with Deployment Manager, set the following privateClusterConfig and ipAllocationPolicy options in your deployment. privateClusterConfig : enablePrivateNodes : true enablePrivateEndpoint : true Configure the IP range for the hosted master network masterIpv4CidrBlock : IP RANGE ipAllocationPolicy : useIpAliases : true createSubnetwork : true For requirements and additional considerations when you are creating a private cluster with GKE, read Setting up a private cluster .

### "Access control with IAM \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/access-control](https://docs.cloud.google.com/deployment-manager/docs/access-control)
- Source ID: `site-docs-reference`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- Lowest-level resources where you can grant this role: Project deploymentmanager. compositeTypes. deploymentmanager. compositeTypes. create deploymentmanager. compositeTypes. delete deploymentmanager. compositeTypes. get deploymentmanager. compositeTypes. list deploymentmanager. compositeTypes. update deploymentmanager. deployments. cancelPreview deploymentmanager. deployments. create deploymentmanager. deployments. delete deploymentmanager. deployments. get deploymentmanager. deployments. list deploymentmanager. deployments. stop deploymentmanager. deployments. update deploymentmanager.manifests. deploymentmanager. manifests. get deploymentmanager. manifests. list deploymentmanager.operations. deploymentmanager. operations. get deploymentmanager. operations. list deploymentmanager.resources. deploymentmanager. resources. get deploymentmanager. resources. list deploymentmanager. typeProviders. deploymentmanager. typeProviders. create deploymentmanager. typeProviders. delete deploymentmanager. typeProviders. get deploymentmanager. typeProviders. getType deploymentmanager. typeProviders. list deploymentmanager. typeProviders. listTypes deploymentmanager. typeProviders. update deploymentmanager.types. deploymentmanager.types.create deploymentmanager.types.delete deploymentmanager.types.get deploymentmanager.types.list deploymentmanager.types.update resourcemanager.projects.get resourcemanager.projects.list serviceusage. consumerpolicy. analyze serviceusage. consumerpolicy. get serviceusage. effectivepolicy. get serviceusage.groups. serviceusage.groups.list serviceusage. groups. listExpandedMembers serviceusage. groups. listMembers serviceusage.quotas.get serviceusage.services.get serviceusage.services.list serviceusage.values.test Deployment Manager Viewer ( roles/ deploymentmanager.viewer ) Provides read-only access to all Deployment Manager-related resources.
- Lowest-level resources where you can grant this role: Project deploymentmanager. compositeTypes. deploymentmanager. compositeTypes. create deploymentmanager. compositeTypes. delete deploymentmanager. compositeTypes. get deploymentmanager. compositeTypes. list deploymentmanager. compositeTypes. update deploymentmanager. operations. get deploymentmanager. typeProviders. deploymentmanager. typeProviders. create deploymentmanager. typeProviders. delete deploymentmanager. typeProviders. get deploymentmanager. typeProviders. getType deploymentmanager. typeProviders. list deploymentmanager. typeProviders. listTypes deploymentmanager. typeProviders. update deploymentmanager.types. deploymentmanager.types.create deploymentmanager.types.delete deploymentmanager.types.get deploymentmanager.types.list deploymentmanager.types.update resourcemanager.projects.get resourcemanager.projects.list serviceusage. consumerpolicy. analyze serviceusage. consumerpolicy. get serviceusage. effectivepolicy. get serviceusage.groups. serviceusage.groups.list serviceusage. groups. listExpandedMembers serviceusage. groups. listMembers serviceusage.quotas.get serviceusage.services.get serviceusage.values.test Deployment Manager Type Viewer ( roles/ deploymentmanager.typeViewer ) Provides read-only access to all Type Registry resources.
- Lowest-level resources where you can grant this role: Project deploymentmanager. compositeTypes. get deploymentmanager. compositeTypes. list deploymentmanager. deployments. get deploymentmanager. deployments. list deploymentmanager.manifests. deploymentmanager. manifests. get deploymentmanager. manifests. list deploymentmanager.operations. deploymentmanager. operations. get deploymentmanager. operations. list deploymentmanager.resources. deploymentmanager. resources. get deploymentmanager. resources. list deploymentmanager. typeProviders. get deploymentmanager. typeProviders. getType deploymentmanager. typeProviders. list deploymentmanager. typeProviders. listTypes deploymentmanager.types.get deploymentmanager.types.list resourcemanager.projects.get resourcemanager.projects.list serviceusage. consumerpolicy. analyze serviceusage. consumerpolicy. get serviceusage. effectivepolicy. get serviceusage.groups. serviceusage.groups.list serviceusage. groups. listExpandedMembers serviceusage. groups. listMembers serviceusage.quotas.get serviceusage.services.get serviceusage.services.list serviceusage.values.test Deployment Manager Type Editor ( roles/ deploymentmanager.typeEditor ) Provides read and write access to all Type Registry resources.
- Deployment Manager roles Role Permissions Deployment Manager Editor ( roles/ deploymentmanager.editor ) Provides the permissions necessary to create and manage deployments.

### "Setting access control in a configuration \_|\_ Cloud Deployment Manager\

- URL: [https://docs.cloud.google.com/deployment-manager/docs/configuration/set-access-control-resources](https://docs.cloud.google.com/deployment-manager/docs/configuration/set-access-control-resources)
- Source ID: `site-docs-reference`
- Final score: 61
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: If you use the accessControl section to grant roles to accounts, including service accounts, we recommend that you use Deployment Manager to manage roles for that account.
- If you change the account's roles outside Deployment Manager and then update the original deployment, the roles from the deployment configuration are applied to the account.
- Using IAM policies in Deployment Manager An IAM policy is a collection of users and their roles.
- For example: gcloud projects add-iam-policy-binding database-images \ --member serviceAccount:123456789012@cloudservices.gserviceaccount.com \ --role roles/owner API In the API, make a POST request to the following URL, where [PROJECT ID] is the ID of the project: POST https : // cloudresourcemanager . googleapis . com / v1 / projects / $ [ PROJECT ID ] : setIamPolicy The request body should contain the list of bindings you want to apply to this project.

