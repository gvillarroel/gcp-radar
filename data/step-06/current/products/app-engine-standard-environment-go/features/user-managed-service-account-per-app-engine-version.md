---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T20:52:24.716Z"
product_name: "App Engine standard environment Go"
product_slug: "app-engine-standard-environment-go"
feature_name: "User-managed service account per App Engine version"
feature_slug: "user-managed-service-account-per-app-engine-version"
latest_feature_date: "2022-05-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/user-managed-service-accounts"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/mapping-custom-domains"
  - "https://docs.cloud.google.com/appengine/docs/admin-api/access-control"
keywords:
  - "user"
  - "managed"
  - "account"
  - "per"
  - "app"
  - "engine"
  - "version"
  - "now"
---

# User-managed service account per App Engine version

Product: App Engine standard environment Go
Coverage: MEDIUM

## Step 02 Summary

App Engine now generally supports specifying a user-managed service account for each version during deployment.

## Extended Definition

App Engine now generally supports specifying a user-managed service account for each version during deployment.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/user-managed-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/go/user-managed-service-accounts)
- [https://docs.cloud.google.com/appengine/docs/standard/go/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/standard/go/mapping-custom-domains)
- [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control)

## Supporting Pages

### "Configure App Engine service accounts \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/user-managed-service-accounts](https://docs.cloud.google.com/appengine/docs/standard/go/user-managed-service-accounts)
- Source ID: `site-docs-reference-2`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Your version-specific service account must be in the same project where you deploy your application. appengine-web.xml If you use the Java runtimes and include the App Engine legacy bundled services, specify your service account by adding the <service-account> element in your appengine-web.xml file: <service-account> SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com</service-account> Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.
- There are two types of service accounts in App Engine and any service account in your Cloud project can be assigned to act as either the app-level default or per-version service account: App-level default service account - This service account is used for all of your deployed services when you don't configure a "per-version service account".
- Go to Versions Locate the email address of your App Engine version-specific service account.
- Your version-specific service account must be in the same project where you deploy your application. app.yaml In your app.yaml file, specify your service account by adding the service account element: service account: SERVICE ACCOUNT NAME @ PROJECT ID .iam.gserviceaccount.com Replace: SERVICE ACCOUNT NAME with the name of the service account that you created.

### "Mapping custom domains \_|\_ App Engine standard environment \_|\_ Google\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/mapping-custom-domains](https://docs.cloud.google.com/appengine/docs/standard/go/mapping-custom-domains)
- Source ID: `site-docs-reference-2`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you use Cloud Load Balancing and serverless network endpoint group (NEGS) to route traffic to your App Engine app, we recommend that you map your custom domain to the load balancer instead of directly to your app, and use Google-managed SSL certificates that are created for the load balancer.
- Deleting custom domains from your app In order to delete a custom domain mapping from your app, your account must have the App Engine Admin role ( roles/appengine.appAdmin ) or a custom role that contains the appengine.applications.update permission.
- Delegating ownership to other Google Cloud users or service accounts If you need to delegate the ownership of your domain to other users or service accounts, you can add permission through the Search Console page.
- In order to add or edit a custom domain mapping, your account must have the App Engine Admin role ( roles/appengine.appAdmin ) or a custom role that contains the appengine.applications.get permission.

### "Roles that grant access to App Engine \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/access-control](https://docs.cloud.google.com/appengine/docs/admin-api/access-control)
- Source ID: `site-docs-reference-2`
- Final score: 116
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Capability App Engine Admin App Engine Service Admin App Engine Deployer App Engine Viewer App Engine Code Viewer List all services, versions and instances Yes Yes Yes Yes Yes View all application, service, version, and instance settings Yes Yes Yes Yes Yes View runtime metrics such as resource usage, load information, and error information Yes Yes Yes Yes Yes View app source code No No No No Yes Deploy a new version of an app Yes, if you also grant the Service Account User role No Yes, if you also grant the Service Account User role No No Split or migrate traffic Yes Yes No No No Start and stop a version Yes Yes No No No Delete a version Yes Yes Yes No No Delete an entire service Yes Yes No No No Use SSH to connect to a VM instance in the flexible environment Yes No No No No Shut down an instance Yes No No No No Disable and re-enable the App Engine application Yes No No No No Access handlers that have a login:admin restriction ( first generation runtimes only) Yes No No No No Update dispatch rules Yes No No No No Update DoS settings Yes No No No No Update cron schedules No No No No No Update default cookie expiration Yes No No No No Update referrers Yes No No No No Update Email API Authorized Senders Yes No No No No Note: The predefined roles are enforced in the Google Cloud console , the Admin API , and other tooling that requires access, including the deployment commands .
- Recommended role for application deployment For an account that is responsible only for deploying new versions of an app, we recommend that you grant the following roles: App Engine Deployer role ( roles/appengine.deployer ) Service Account User role ( roles/iam.serviceAccountUser ) The Service Account User role enables the account to impersonate the default App Engine service account during the deployment process.
- To deploy new versions, a principal must have the Service Account User ( roles/iam.serviceAccountUser ) role on the assigned App Engine service account , and the Cloud Build Editor ( roles/cloudbuild.builds.editor ), and Cloud Storage Object Admin ( roles/storage.objectAdmin ) roles on the project.
- To deploy new versions, you must also have the Service Account User ( roles/iam.serviceAccountUser ) role on the assigned App Engine service account , and the Cloud Build Editor ( roles/cloudbuild.builds.editor ), and Cloud Storage Object Admin ( roles/storage.objectAdmin ) roles on the project.

