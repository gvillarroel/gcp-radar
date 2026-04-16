---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.600Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Cloud Domains custom domain purchase"
feature_slug: "cloud-domains-custom-domain-purchase"
latest_feature_date: "2020-10-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/run/docs/mapping-custom-domains"
  - "https://docs.cloud.google.com/run/docs/tutorials/identity-platform"
  - "https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run"
keywords:
  - "purchase"
  - "domains"
  - "domain"
  - "users"
  - "custom"
  - "through"
  - "lets"
---

# Cloud Domains custom domain purchase

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Cloud Run lets users purchase a custom domain through Cloud Domains in the Cloud Run interface.

## Extended Definition

Cloud Run lets users purchase a custom domain through Cloud Domains in the Cloud Run interface.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/mapping-custom-domains](https://docs.cloud.google.com/run/docs/mapping-custom-domains)
- [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform)
- [https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run](https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run)

## Supporting Pages

### Mapping custom domains \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/mapping-custom-domains](https://docs.cloud.google.com/run/docs/mapping-custom-domains)
- Source ID: `site-docs-root`
- Final score: 242
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can determine whether the custom domain you want to use has been verified by running the following command: gcloud domains list-user-verified If your ownership of the domain needs to be verified, open the Search Console verification page: gcloud domains verify BASE-DOMAIN where BASE-DOMAIN is the base domain you want to verify.
- If you need to add verified owners of your domain to other users or service accounts, you can add permission through the Search Console page: Navigate to the following address in your web browser: https://search.google.com/search-console/welcome Under Properties , click the domain that you want to add a user or service account to.
- There are a few ways to set up a custom domain for a Cloud Run service: Use a global external Application Load Balancer (Recommended) Use Cloud Run domain mapping (Limited availability and Preview) Use Firebase Hosting You can map multiple custom domains to the same Cloud Run service.
- Domain mapping is available in the following regions: asia-east1 asia-northeast1 asia-southeast1 europe-north1 europe-west1 europe-west4 us-central1 us-east1 us-east4 us-west1 To map custom domains in other regions, you must use one of the other mapping options.

### End user authentication for Cloud Run tutorial \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform)
- Source ID: `site-docs-root`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You might also be able to get the required permissions through custom roles or other predefined roles .
- Click Add Domain under Authorized Domains on the right panel, and enter the Cloud Run service URL.
- Remove the gcloud default region configuration you added during tutorial setup: gcloud config unset run / region Remove the project configuration: gcloud config unset project Delete other Google Cloud resources created in this tutorial: Delete the service container image from Artifact Registry Delete the service account vote-identity@PROJECT ID.iam.gserviceaccount.com Delete the Cloud SQL instance Delete the secret in Secret Manager What's next Dive deeper into Connecting from Cloud Run to Cloud SQL Learn more about sign in methods and managing users with Identity Platform Review other ways to authenticate developers, services, and users of services deployed to Cloud Run Explore other Cloud Run demos, tutorials, and samples Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- To connect to Identity Platform, the client-side JavaScript holds the reference to the project's credentials as a config object and imports the necessary Firebase JavaScript SDKs : const config = { apiKey : 'API KEY' , authDomain : 'PROJECT ID.firebaseapp.com' , }; < !-- Firebase App ( the core Firebase SDK ) is always required and must be listed first -- > < script src = "https://www.gstatic.com/firebasejs/7.18/firebase-app.js" >< / script > < !-- Add Firebase Auth service -- > < script src = "https://www.gstatic.com/firebasejs/7.18/firebase-auth.js" >< / script > The Firebase JavaScript SDK handles the sign-in flow by prompting the end-user to sign-in to their Google Account via a popup window.

### Migrate Node.js apps from Heroku to Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run](https://docs.cloud.google.com/run/docs/migrate/migrating-nodejs-apps-from-heroku-to-cloud-run)
- Source ID: `site-docs-root`
- Final score: 105
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: Because this sample tasks app is a public facing web app and uses the --allow-unauthenticated flag, deployment will fail if your organization has the Organization Policy iam.allowedPolicyMemberDomains enforced.
- Cloud Run is a managed compute platform that lets you run stateless containers that are invocable through HTTP requests.
- Set a password for the Postgres user: gcloud sql users set-password postgres \ --instance=$CLOUDSQL DB NAME \ --password= POSTGRES PASSWORD Replace POSTGRES PASSWORD with the password that you want to use for the Postgres database.
- For an example of an FQDN ( fully qualified domain name ) value in a connection information string, see the Heroku documentation .

