---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:09:07.315Z"
product_name: "App Engine standard environment PHP"
product_slug: "app-engine-standard-environment-php"
feature_name: "App Engine IAM deployment roles and permissions"
feature_slug: "app-engine-iam-deployment-roles-and-permissions"
latest_feature_date: "2017-12-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/admin-api/access-control"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/php7/connecting-vpc"
keywords:
  - "app"
  - "engine"
  - "iam"
  - "deployment"
  - "roles"
  - "permissions"
  - "guidance"
  - "was"
---

# App Engine IAM deployment roles and permissions

Product: App Engine standard environment PHP
Coverage: MEDIUM

## Step 02 Summary

App Engine deployment guidance was improved to cover deploying apps with IAM roles and service accounts using predefined App Engine roles and required permissions.

## Extended Definition

App Engine deployment guidance was improved to cover deploying apps with IAM roles and service accounts using predefined App Engine roles and required permissions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/php7/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/php7/connecting-vpc)

## Supporting Pages

### "Roles that grant access to App Engine \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control)
- Source ID: `site-docs-reference-4`
- Final score: 107
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Capability App Engine Admin App Engine Service Admin App Engine Deployer App Engine Viewer App Engine Code Viewer List all services, versions and instances Yes Yes Yes Yes Yes View all application, service, version, and instance settings Yes Yes Yes Yes Yes View runtime metrics such as resource usage, load information, and error information Yes Yes Yes Yes Yes View app source code No No No No Yes Deploy a new version of an app Yes, if you also grant the Service Account User role No Yes, if you also grant the Service Account User role No No Split or migrate traffic Yes Yes No No No Start and stop a version Yes Yes No No No Delete a version Yes Yes Yes No No Delete an entire service Yes Yes No No No Use SSH to connect to a VM instance in the flexible environment Yes No No No No Shut down an instance Yes No No No No Disable and re-enable the App Engine application Yes No No No No Access handlers that have a login:admin restriction ( first generation runtimes only) Yes No No No No Update dispatch rules Yes No No No No Update DoS settings Yes No No No No Update cron schedules No No No No No Update default cookie expiration Yes No No No No Update referrers Yes No No No No Update Email API Authorized Senders Yes No No No No Note: The predefined roles are enforced in the Google Cloud console , the Admin API , and other tooling that requires access, including the deployment commands .
- Recommended role for application deployment For an account that is responsible only for deploying new versions of an app, we recommend that you grant the following roles: App Engine Deployer role ( roles/appengine.deployer ) Service Account User role ( roles/iam.serviceAccountUser ) The Service Account User role enables the account to impersonate the default App Engine service account during the deployment process.
- Role Permissions App Engine Standard Environment Service Agent ( roles/ appengine.serviceAgent ) Give App Engine Standard Envirnoment service account access to managed resources.
- Request logs Predefined App Engine roles Role Permissions App Engine Admin ( roles/ appengine.appAdmin ) Read/Write/Modify access to all application configuration and settings.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- Required roles To get the permissions that you need to manage organization policies, ask your administrator to grant you the Organization policy administrator ( roles/orgpolicy.policyAdmin ) IAM role on the organization resource.
- Note: To deploy a service with a connector, the user or service account doing the deployment needs the Serverless VPC Access User and Compute Viewer IAM roles.
- See Serverless VPC Access roles in the IAM documentation for a list of permissions associated with each role.
- You might also be able to get the required permissions through custom roles or other predefined roles .

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/php7/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/php7/connecting-vpc)
- Source ID: `site-docs-reference-4`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- Required roles To get the permissions that you need to manage organization policies, ask your administrator to grant you the Organization policy administrator ( roles/orgpolicy.policyAdmin ) IAM role on the organization resource.
- Note: To deploy a service with a connector, the user or service account doing the deployment needs the Serverless VPC Access User and Compute Viewer IAM roles.
- See Serverless VPC Access roles in the IAM documentation for a list of permissions associated with each role.
- You might also be able to get the required permissions through custom roles or other predefined roles .

