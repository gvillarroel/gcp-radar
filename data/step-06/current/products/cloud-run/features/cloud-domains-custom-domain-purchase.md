---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.925Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Cloud Domains custom domain purchase"
feature_slug: "cloud-domains-custom-domain-purchase"
latest_feature_date: "2020-10-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/mapping-custom-domains"
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/tutorials/identity-platform"
keywords:
  - "domains"
  - "custom"
  - "domain"
  - "purchase"
  - "run"
  - "lets"
  - "users"
  - "through"
---

# Cloud Domains custom domain purchase

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run lets users purchase a custom domain through Cloud Domains in the Cloud Run interface.

## Extended Definition

Cloud Run lets users purchase a custom domain through Cloud Domains in the Cloud Run interface.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/mapping-custom-domains](https://docs.cloud.google.com/run/docs/mapping-custom-domains)
- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform)

## Supporting Pages

### Mapping custom domains \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/mapping-custom-domains](https://docs.cloud.google.com/run/docs/mapping-custom-domains)
- Source ID: `site-docs-root`
- Final score: 226
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can determine whether the custom domain you want to use has been verified by running the following command: gcloud domains list-user-verified If your ownership of the domain needs to be verified, open the Search Console verification page: gcloud domains verify BASE-DOMAIN where BASE-DOMAIN is the base domain you want to verify.
- There are a few ways to set up a custom domain for a Cloud Run service: Use a global external Application Load Balancer (Recommended) Use Cloud Run domain mapping (Limited availability and Preview) Use Firebase Hosting You can map multiple custom domains to the same Cloud Run service.
- Home Documentation Application hosting Cloud Run Guides Send feedback Mapping custom domains Stay organized with collections Save and categorize content based on your preferences.
- To create a Cloud Run service, add the following to your existing main.tf file: resource "google cloud run v2 service" "default" { name = "custom-domain" # Replace with your service name location = "us-central1" deletion protection = false # set to true to prevent destruction of the resource template { containers { image = "us-docker.pkg.dev/cloudrun/container/hello" # Replace with your container image } } } Replace: custom-domain with your Cloud Run service name. us-docker.pkg.dev/cloudrun/container/hello with a reference to your container image.

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- October 23, 2020 Feature Cloud Run services can now be triggered using Eventarc (available in public preview) October 19, 2020 Feature Cloud Run is now available in the following regions: asia-east2 (Hong Kong) asia-northeast3 (Seoul, South Korea) asia-southeast2 (Jakarta) asia-south1 (Mumbai, India) europe-west2 (London, UK) europe-west3 (Frankfurt, Germany) europe-west6 (Zurich, Switzerland) southamerica-east1 (Sao Paulo, Brazil) Feature You can now purchase a custom domain via Cloud Domains using the Cloud Run user interface.
- Feature Cloud Run support for network file systems such as NFS, NDB, 9P, CIFS/Samba, and Ceph , as well as Cloud Filestore and Cloud Storage FUSE , is now at general availability (GA.) November 17, 2022 Feature Logs from Cloud Run services can now be tailed or viewed in a command-line friendly format using gcloud beta run services logs tail and gcloud beta run services logs read October 07, 2022 Feature Cloud Run services can now use the Global External HTTP(S) Load Balancer to map Custom Domains using integrations (Preview).
- May 09, 2023 Feature Cloud Run services can now connect to Firebase Hosting for custom domains and CDN capabilities , using Integrations (Preview).
- May 12, 2021 Feature Cloud Run now provides UI, command line, and YAML support for referencing Secret Manager Secrets . (Available in public preview.) Feature Customer managed encryption keys are now available for use with Cloud Run. (Available in public preview.) Feature Recommender now provides recommendations for securing Cloud Run services by creating dedicated service accounts. (Available in public preview.) Feature Committed use discounts are now available for Cloud Run . (Available in public preview.) Feature You can now use Binary authorization with Cloud Run to enforce policy-based deployment of Cloud Run services. (Available in public preview.) May 03, 2021 Feature You can now use Identity-aware Proxy with Cloud Run to use identity and context to guard access to your applications. (Available in public preview.) Change By default, the memory allocated to each container instance of a new service is 512MiB.

### End user authentication for Cloud Run tutorial \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Click Add Domain under Authorized Domains on the right panel, and enter the Cloud Run service URL.
- Remove the gcloud default region configuration you added during tutorial setup: gcloud config unset run / region Remove the project configuration: gcloud config unset project Delete other Google Cloud resources created in this tutorial: Delete the service container image from Artifact Registry Delete the service account vote-identity@PROJECT ID.iam.gserviceaccount.com Delete the Cloud SQL instance Delete the secret in Secret Manager What's next Dive deeper into Connecting from Cloud Run to Cloud SQL Learn more about sign in methods and managing users with Identity Platform Review other ways to authenticate developers, services, and users of services deployed to Cloud Run Explore other Cloud Run demos, tutorials, and samples Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Change to the directory that contains the Cloud Run sample code: Node.js cd nodejs-docs-samples/run/idp-sql/ Python cd python-docs-samples/run/idp-sql/ Java cd java-docs-samples/run/idp-sql/ Visualizing the architecture Diagram shows an end-user logging-in through a Google sign-in dialog provided by Identity Platform, and then being redirected back to Cloud Run with the user's identity.
- It should look like this: Success: You deployed a Cloud Run service that authenticates end-users with Identity Platform and securely manages sensitive data using Secret Manager.

