---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:51:00.094Z"
product_name: "Resource Manager"
product_slug: "resource-manager"
feature_name: "Organization Policy Service administrative UI"
feature_slug: "organization-policy-service-administrative-ui"
latest_feature_date: "2018-10-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/resource-manager/docs/managing-multiple-orgs"
  - "https://docs.cloud.google.com/resource-manager/docs/access-control-org"
  - "https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing"
keywords:
  - "organization"
  - "policy"
  - "administrative"
  - "ui"
  - "provides"
  - "console"
  - "based"
  - "interface"
---

# Organization Policy Service administrative UI

Product: Resource Manager
Coverage: MEDIUM

## Step 02 Summary

Provides a console-based interface for creating and managing organization policies.

## Extended Definition

Provides a console-based interface for creating and managing organization policies.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/resource-manager/docs/managing-multiple-orgs](https://docs.cloud.google.com/resource-manager/docs/managing-multiple-orgs)
- [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org)
- [https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing](https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing)

## Supporting Pages

### "Manage multiple organization resources \_|\_ Resource Manager \_|\_ Google\

- URL: [https://docs.cloud.google.com/resource-manager/docs/managing-multiple-orgs](https://docs.cloud.google.com/resource-manager/docs/managing-multiple-orgs)
- Source ID: `site-iam-reference`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Console To add an Organization Administrator: Sign in to the Google Cloud console as a Google Workspace or Cloud Identity super administrator and navigate to the IAM & Admin page: Open the IAM & admin page Select the organization resource you want to edit: Click the project drop-down list at the top of the page.
- Console To add an Organization Administrator: Sign in to the Google Cloud console as a Google Workspace or Cloud Identity super administrator and navigate to the IAM & Admin page: Open the IAM & admin page Select the organization resource you want to edit: Click the project drop-down list at the top of the page.
- The super administrators of the Google Workspace account associated with your primary organization resource have administrative control over all with your primary organization resource have administrative control over all resources, including those created by users from the other Google Workspace accounts.
- Console To remove the roles assigned to users by default using the Google Cloud console: Go to the Manage resources page in the Google Cloud console: Open the Manage resources page Click the Organization drop-down list at the top of the page and then select your organization resource.

### "Access control for organization resources with IAM \_|\_ Resource Manager\

- URL: [https://docs.cloud.google.com/resource-manager/docs/access-control-org](https://docs.cloud.google.com/resource-manager/docs/access-control-org)
- Source ID: `site-iam-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Lowest-level resources where you can grant this role: Project essentialcontacts. essentialcontacts. contacts. create essentialcontacts. contacts. delete essentialcontacts.contacts.get essentialcontacts. contacts. list essentialcontacts. contacts. send essentialcontacts. contacts. update iam.policybindings. iam.policybindings.get iam.policybindings.list orgpolicy.constraints.list orgpolicy.policies.list orgpolicy.policy.get resourcemanager.capabilities. resourcemanager. capabilities. get resourcemanager. capabilities. update resourcemanager. folders. createPolicyBinding resourcemanager. folders. deletePolicyBinding resourcemanager.folders.get resourcemanager. folders. getIamPolicy resourcemanager.folders.list resourcemanager. folders. searchPolicyBindings resourcemanager. folders. setIamPolicy resourcemanager. folders. updatePolicyBinding resourcemanager. organizations. resourcemanager. organizations. createPolicyBinding resourcemanager. organizations. deletePolicyBinding resourcemanager. organizations. get resourcemanager. organizations. getIamPolicy resourcemanager. organizations. searchPolicyBindings resourcemanager. organizations. setIamPolicy resourcemanager. organizations. updatePolicyBinding resourcemanager. projects. createPolicyBinding resourcemanager. projects. deletePolicyBinding resourcemanager.projects.get resourcemanager. projects. getIamPolicy resourcemanager.projects.list resourcemanager. projects. searchPolicyBindings resourcemanager. projects. setIamPolicy resourcemanager. projects. updatePolicyBinding Organization Viewer ( roles/ resourcemanager.organizationViewer ) Provides access to view an organization.
- Http ())) policy = crm . organizations () . getIamPolicy ( resource = flags . organizationId , body = {}) . execute () admin binding = next ( ( binding for binding in policy [ 'bindings' ] if binding [ 'role' ] == 'roles/resourcemanager.organizationAdmin' ), None ) Add an empty Organization Administrator binding if not present. if not admin binding : admin binding = { 'role' : 'roles/resourcemanager.organizationAdmin' , 'members' : [] } policy [ 'bindings' ] . append ( admin binding ) Add the new Admin (if necessary). new admin = 'user:' + flags . adminEmail if new admin not in admin binding [ 'members' ]: admin binding [ 'members' ] . append ( new admin ) policy = crm . organizations () . setIamPolicy ( resource = flags . organizationId , body = { 'resource' : flags . organizationId , 'policy' : policy }) . execute () print json . dumps ( policy , indent = 2 ) Restrict project visibility for users Users can see all projects they have access to in the Google Cloud console and in search queries, regardless of whether or not they are in the user's selected organization resource.
- Lowest-level resources where you can grant this role: Organization resourcemanager. organizations. get Organization Policy Administrator ( roles/ orgpolicy.policyAdmin ) Provides access to define what restrictions an organization wants to place on the configuration of cloud resources by setting Organization Policies.
- You can view the allow policy for an organization resource using the Google Cloud console, the Google Cloud CLI, or the getIamPolicy() method.

### Create and manage tags \_|\_ Resource Manager \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing](https://docs.cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing)
- Source ID: `site-docs-reference-2`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- List tag keys You can list all tag keys associated with a particular organization or project resource using the Google Cloud console, the gcloud CLI, or with a call to the API.
- To enforce mandatory tags on resources, create a custom organization policy and set the policy on an organization, folder, or project resource to enforce the custom constraint.
- Console To detach a tag from an organization, folder, or project resource, do the following: Open the Manage resources page in the Google Cloud console.
- Console To attach a tag to an organization, folder, or project resource, do the following: Open the Manage resources page in the Google Cloud console.

