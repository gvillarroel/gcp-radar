---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.870Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build external integration organization policy"
feature_slug: "cloud-build-external-integration-organization-policy"
latest_feature_date: "2022-02-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers"
  - "https://docs.cloud.google.com/build/docs/iam-roles-permissions"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
keywords:
  - "external"
  - "organization"
  - "control"
  - "policy"
  - "integration"
  - "supports"
---

# Cloud Build external integration organization policy

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build now supports an organization policy to control builds triggered from external integrations such as GitHub.

## Extended Definition

Cloud Build now supports an organization policy to control builds triggered from external integrations such as GitHub.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- [https://docs.cloud.google.com/build/docs/iam-roles-permissions](https://docs.cloud.google.com/build/docs/iam-roles-permissions)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)

## Supporting Pages

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference-2`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Google Cloud Organization Policy gives you centralized, programmatic control over your organization's resources.
- Test the custom constraint To test the example that restricts ingress settings, deploy a connector in the project with network set to default : gcloud compute networks vpc-access connectors create org-policy-test \ --project = PROJECT ID \ --region = REGION ID \ --network = default The output is the following: Operation denied by custom org policies: ["customConstraints/custom.defaultNetworkConstraint": "Require network to not be set to default."] Example custom organization policies for common use cases The following table provides examples of custom constraints that you might find useful with Serverless VPC Access connectors: Description Constraint syntax Require that Serverless VPC Access connectors can only use a specific network. name : organizations/ ORGANIZATION ID /customConstraints/custom.allowlistNetworks resourceTypes : - vpcaccess.googleapis.com/Connector methodTypes : - CREATE condition : "resource.network == 'allowlisted-network'" actionType : ALLOW displayName : allowlistNetworks description : Require connectors to use a specific network.
- After you verify that the organization policy in dry-run mode works as intended, set the live policy by clicking Set policy . gcloud To create an organization policy with boolean rules, create a policy YAML file that references the constraint: name : projects/ PROJECT ID /policies/ CONSTRAINT NAME spec : rules : - enforce : true dryRunSpec : rules : - enforce : true Replace the following: PROJECT ID : the project that you want to enforce your constraint on.
- Errors Service account needs Service Agent role error If you use the Restrict Resource Service Usage organization policy constraint to block Cloud Deployment Manager ( deploymentmanager.googleapis.com ), you might see the following error message: Serverless VPC Access service account (service-<PROJECT NUMBER>@gcp-sa-vpcaccess.iam.gserviceaccount.com) needs Serverless VPC Access Service Agent role in the project.

### Create and manage build triggers \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers](https://docs.cloud.google.com/build/docs/automating-builds/create-manage-triggers)
- Source ID: `site-docs-root-2`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- To only allow builds from specific sources, set an organization policy for allowed integrations ( constraints/cloudbuild.allowedIntegrations ) to deny interaction with the source defined in your trigger.
- The organization policy overrides the trigger and your build is not executed.
- To learn more, see Gate builds on organization policy for your project.
- If you are connecting an external repository, such as one hosted on GitHub or Bitbucket, you will need admin-level permissions on the repository to initially connect your repository to Cloud Build.

### IAM roles and permissions \_|\_ Cloud Build \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/iam-roles-permissions](https://docs.cloud.google.com/build/docs/iam-roles-permissions)
- Source ID: `site-iam-reference`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Name : roles/cloudbuild.integrationsViewer Title : Cloud Build Integrations Viewer Can view Cloud Build host connections cloudbuild.integrations.get cloudbuild.integrations.list resourcemanager.projects.get resourcemanager.projects.list Name : roles/cloudbuild.integrationsEditor Title : Cloud Build Integrations Editor Edit control of Cloud Build host connections cloudbuild.integrations.get cloudbuild.integrations.list cloudbuild.integrations.update resourcemanager.projects.get resourcemanager.projects.list Name : roles/cloudbuild.integrationsOwner Title : Cloud Build Integrations Owner Full control of Cloud Build host connections cloudbuild.integrations.create cloudbuild.integrations.delete cloudbuild.integrations.get cloudbuild.integrations.list cloudbuild.integrations.update compute.firewalls.create compute.firewalls.get compute.firewalls.list compute.networks.get compute.networks.updatePolicy compute.regions.get compute.subnetworks.get compute.subnetworks.list resourcemanager.projects.get resourcemanager.projects.list Name : roles/cloudbuild.connectionViewer Title : Cloud Build Connection Viewer Can view and list connections and repositories resourcemanager.projects.get resourcemanager.projects.list cloudbuild.connections.get cloudbuild.connections.fetchLinkableRepositories cloudbuild.connections.list cloudbuild.connections.getIamPolicy cloudbuild.repositories.get cloudbuild.repositories.list Name : roles/cloudbuild.connectionAdmin Title : Cloud Build Connection Admin Can manage connections and repositories resourcemanager.projects.get resourcemanager.projects.list cloudbuild.connections.get cloudbuild.connections.fetchLinkableRepositories cloudbuild.connections.list cloudbuild.connections.create cloudbuild.connections.update cloudbuild.connections.delete cloudbuild.connections.getIamPolicy cloudbuild.connections.setIamPolicy cloudbuild.repositories.get cloudbuild.repositories.list cloudbuild.repositories.create cloudbuild.repositories.delete Name : roles/cloudbuild.readTokenAccessor Title : Cloud Build Read Only Token Accessor Can view the connection, its repositories, and access their read-only token cloudbuild.connections.get cloudbuild.repositories.get cloudbuild.repositories.accessReadToken Name : roles/cloudbuild.tokenAccessor Title : Cloud Build Token Accessor Can view the connection, its repositories, and access their read-only and read/write token cloudbuild.connections.get cloudbuild.repositories.get cloudbuild.repositories.accessReadToken cloudbuild.repositories.accessReadWriteToken Name : roles/cloudbuild.workerPoolOwner Title : Cloud Build WorkerPool Owner Full control of the private pool cloudbuild.workerpools.create cloudbuild.workerpools.delete cloudbuild.workerpools.get cloudbuild.workerpools.list cloudbuild.workerpools.update resourcemanager.projects.get resourcemanager.projects.list Name : roles/cloudbuild.workerPoolEditor Title : Cloud Build WorkerPool Editor Can update private pools cloudbuild.workerpools.get cloudbuild.workerpools.list cloudbuild.workerpools.update resourcemanager.projects.get resourcemanager.projects.list Name : roles/cloudbuild.workerPoolViewer Title : Cloud Build WorkerPool Viewer Can view private pools cloudbuild.workerpools.get cloudbuild.workerpools.list resourcemanager.projects.get resourcemanager.projects.list Name : roles/cloudbuild.workerPoolUser Title : Cloud Build WorkerPool User Can run builds in the private pool cloudbuild.workerpools.use In addition to the previous Cloud Build predefined roles, the basic Viewer, Editor, and Owner roles also include permissions related to Cloud Build.
- The following table lists the Cloud Build IAM roles and the permissions that they include: Role Description Permissions Name : roles/cloudbuild.builds.viewer Title : Cloud Build Viewer Can view Cloud Build resources cloudbuild.builds.get cloudbuild.builds.list cloudbuild.locations.get cloudbuild.locations.list cloudbuild.operations.get cloudbuild.operations.list remotebuildexecution.blobs.get resourcemanager.projects.get resourcemanager.projects.list Name : roles/cloudbuild.builds.editor Title : Cloud Build Editor Full control of Cloud Build resources cloudbuild.builds.create cloudbuild.builds.get cloudbuild.builds.list cloudbuild.builds.update remotebuildexecution.blobs.get resourcemanager.projects.get resourcemanager.projects.list Name : roles/cloudbuild.builds.approver Title : Cloud Build Approver Provide access to approve or reject pending builds cloudbuild.builds.approve cloudbuild.builds.get cloudbuild.builds.list remotebuildexecution.blobs.get resourcemanager.projects.get resourcemanager.projects.list Name : roles/cloudbuild.builds.builder Title : Cloud Build Legacy Service Account When you enable the Cloud Build API for a project, the Cloud Build legacy service account is automatically created in the project and is granted this role for the resources in the project.
- Role includes role roles/viewer roles/cloudbuild.builds.viewer , roles/cloudbuild.integrations.viewer roles/editor roles/cloudbuild.builds.editor , roles/cloudbuild.integrations.editor roles/owner roles/cloudbuild.integrations.owner Note: Owner, Editor, and Viewer include permissions for many other Google Cloud services.
- Access control in Cloud Build is controlled using Identity and Access Management (IAM) .

