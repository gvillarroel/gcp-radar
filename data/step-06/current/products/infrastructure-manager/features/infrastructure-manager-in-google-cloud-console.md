---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:17:30.392Z"
product_name: "Infrastructure Manager"
product_slug: "infrastructure-manager"
feature_name: "Infrastructure Manager in Google Cloud Console"
feature_slug: "infrastructure-manager-in-google-cloud-console"
latest_feature_date: "2024-12-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/infrastructure-manager/docs/custom-constraints"
  - "https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources"
  - "https://docs.cloud.google.com/infrastructure-manager/docs/reference/rest"
  - "https://docs.cloud.google.com/infrastructure-manager/docs/reference/rpc"
keywords:
  - "infrastructure"
  - "manager"
  - "in"
  - "console"
  - "can"
  - "preview"
  - "create"
  - "manage"
---

# Infrastructure Manager in Google Cloud Console

Product: Infrastructure Manager
Coverage: MEDIUM

## Step 02 Summary

Infrastructure Manager can preview, create, manage, and delete deployments in Google Cloud Console.

## Extended Definition

Infrastructure Manager can preview, create, manage, and delete deployments in Google Cloud Console.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/infrastructure-manager/docs/custom-constraints](https://docs.cloud.google.com/infrastructure-manager/docs/custom-constraints)
- [https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources](https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources)
- [https://docs.cloud.google.com/infrastructure-manager/docs/reference/rest](https://docs.cloud.google.com/infrastructure-manager/docs/reference/rest)
- [https://docs.cloud.google.com/infrastructure-manager/docs/reference/rpc](https://docs.cloud.google.com/infrastructure-manager/docs/reference/rpc)

## Supporting Pages

### "Manage Infrastructure Manager resources using custom constraints \_|\_ Google\

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/custom-constraints](https://docs.cloud.google.com/infrastructure-manager/docs/custom-constraints)
- Source ID: `site-iam-reference`
- Final score: 382
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Description Constraint syntax Disable importing existing resources for new deployments name : organizations/ ORGANIZATION ID /customConstraints/custom.disallowImportExistingResources resourceTypes : ‐ config.googleapis.com/Deployment methodTypes : ‐ CREATE condition : "resource.importExistingResources == true" actionType : DENY displayName : Reject existing resources description : New deployments disallow the import of existing resources Infrastructure Manager supported resources The following table lists the Infrastructure Manager resources that you can reference in custom constraints.
- Required roles To get the permissions that you need to manage organization policies, ask your administrator to grant you the following IAM roles: Organization Policy Administrator ( roles/orgpolicy.policyAdmin ) on the organization resource To create or update a deployment or preview deployment: Infra Manager Admin ( roles/config.admin ) on the project resource For more information about granting roles, see Manage access to projects, folders, and organizations .
- Test the policy Try to create a Infra Manager deployment that imports existing resources in the project: gcloud infra-manager deployments apply projects/ PROJECT ID /locations/us-central1/deployments/quickstart-deployment \ --service-account = projects/ PROJECT ID /serviceAccounts/ SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com \ --git-source-repo = https://github.com/terraform-google-modules/terraform-google-network \ --git-source-directory = modules/vpc \ --git-source-ref = main \ --input-values = project id = PROJECT ID ,network name = quickstart-vpc The output is the following: Operation denied by custom org policies: ["customConstraints/custom.disallowImportExistingResources": "New deployments disallow the import of existing resources."] Example custom organization policies for common use cases This table provides syntax examples for some common custom constraints.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to manage organization policies: orgpolicy. on the organization resource To create or update a deployment or preview deployment: config.deployments.create on the project resource config.deployments.update on the project resource config.previews.create on the project resource You might also be able to get these permissions with custom roles or other predefined roles .

### Deploy infrastructure using Infrastructure Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources](https://docs.cloud.google.com/infrastructure-manager/docs/deploy-resources)
- Source ID: `site-docs-root`
- Final score: 372
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a deployment using a Terraform configuration You can use Infra Manager to deploy a Terraform configuration in several ways: Recommended: Use Infra Manager in Google Cloud console to select a source, view deployment details, preview, and deploy Terraform configurations.
- You can use Infra Manager from Google Cloud console to deploy from Cloud Storage buckets and Git repositories.
- Use Infra Manager in Google Cloud CLI to deploy Terraform configurations from: Cloud Storage buckets Git repositories Local directories See Terraform modules and blueprints for Google Cloud for examples and template Terraform configurations you can use with Infra Manager.
- Home Documentation Infrastructure as code Infrastructure Manager Guides Send feedback Deploy infrastructure using Infrastructure Manager Stay organized with collections Save and categorize content based on your preferences.

### "Infrastructure Manager API \_|\_ Infrastructure Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/reference/rest](https://docs.cloud.google.com/infrastructure-manager/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 337
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Technology areas Infrastructure Manager Reference Send feedback Infrastructure Manager API Stay organized with collections Save and categorize content based on your preferences.
- Creates and manages Google Cloud Platform resources and infrastructure.
- REST Resource: v1.projects.locations.deploymentGroups Methods create POST /v1/{parent=projects/ /locations/ }/deploymentGroups Creates a DeploymentGroup The newly created DeploymentGroup will be in the CREATING state and can be retrieved via Get and List calls. delete DELETE /v1/{name=projects/ /locations/ /deploymentGroups/ } Deletes a DeploymentGroup deprovision POST /v1/{name=projects/ /locations/ /deploymentGroups/ }:deprovision Deprovisions a deployment group. get GET /v1/{name=projects/ /locations/ /deploymentGroups/ } Get a DeploymentGroup for a given project and location. list GET /v1/{parent=projects/ /locations/ }/deploymentGroups List DeploymentGroups for a given project and location. patch PATCH /v1/{deploymentGroup.name=projects/ /locations/ /deploymentGroups/ } Updates a DeploymentGroup provision POST /v1/{name=projects/ /locations/ /deploymentGroups/ }:provision Provisions a deployment group.
- REST Resource: v1.projects.locations.previews Methods create POST /v1/{parent=projects/ /locations/ }/previews Creates a Preview . delete DELETE /v1/{name=projects/ /locations/ /previews/ } Deletes a Preview . export POST /v1/{parent=projects/ /locations/ /previews/ }:export Export Preview results. get GET /v1/{name=projects/ /locations/ /previews/ } Gets details about a Preview . list GET /v1/{parent=projects/ /locations/ }/previews Lists Preview s in a given project and location.

### "Infrastructure Manager API \_|\_ Infrastructure Manager \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/infrastructure-manager/docs/reference/rpc](https://docs.cloud.google.com/infrastructure-manager/docs/reference/rpc)
- Source ID: `site-docs-root`
- Final score: 333
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Technology areas Infrastructure Manager Reference Send feedback Infrastructure Manager API Stay organized with collections Save and categorize content based on your preferences.
- Creates and manages Google Cloud Platform resources and infrastructure.
- CreateDeploymentGroup Creates a DeploymentGroup The newly created DeploymentGroup will be in the CREATING state and can be retrieved via Get and List calls.
- GetResource Gets details about a Resource deployed by Infra Manager.

