---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.922Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Regional availability"
feature_slug: "regional-availability"
latest_feature_date: "2021-03-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus"
  - "https://docs.cloud.google.com/run/docs/tutorials/identity-platform"
  - "https://docs.cloud.google.com/run/docs/release-notes"
keywords:
  - "regional"
  - "availability"
  - "run"
  - "expanded"
  - "to"
  - "the"
  - "us"
  - "west2"
---

# Regional availability

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run expanded availability to the us-west2, us-west3, and us-west4 regions; Cloud Run expanded availability to the asia-east2, asia-northeast3, asia-southeast2, asia-south1, europe-west2, europe-west3, europe-west6, and southamerica-east1 regions.

## Extended Definition

Cloud Run expanded availability to the us-west2, us-west3, and us-west4 regions; Cloud Run expanded availability to the asia-east2, asia-northeast3, asia-southeast2, asia-south1, europe-west2, europe-west3, europe-west6, and southamerica-east1 regions.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus)
- [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform)
- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)

## Supporting Pages

### "Autoscale worker pools based on Prometheus metrics \_|\_ Cloud Run \_|\_\

- URL: [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-prometheus)
- Source ID: `site-docs-root-2`
- Final score: 192
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Run the following command to create the CREMA service account: gcloud iam service-accounts create $CREMA SA NAME \ --display-name = "CREMA service account" Grant additional permissions to your custom service accounts To scale the worker pool, grant the following permissions on the custom service accounts: Grant your CREMA service account permission to read from the Parameter Manager: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/parametermanager.parameterViewer" Grant your CREMA service account the permission to scale the worker pool: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/run.developer" Grant your CREMA service account the service account user role: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/iam.serviceAccountUser" Grant your CREMA service account permission to view metrics: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/monitoring.viewer" Grant your CREMA service account permission to write metrics: gcloud projects add-iam-policy-binding $PROJECT ID \ --member = "serviceAccount: $CREMA SA NAME @ $PROJECT ID .iam.gserviceaccount.com" \ --role = "roles/monitoring.metricWriter" Deploy a Cloud Run worker pool Deploy a worker pool with 0 instances for CREMA to scale up: gcloud beta run worker-pools deploy $CONSUMER WORKER POOL NAME \ --image us-docker.pkg.dev/cloudrun/container/worker-pool:latest \ --instances 0 \ --region $REGION \ --memory 4G \ --cpu 4 \ --service-account = " $CONSUMER SA NAME @ $PROJECT ID .iam.gserviceaccount.com" Deploy the autoscaler CREMA service Deploy the CREMA service to autoscale your worker pool based on Prometheus metrics.
- Set the autoscaling threshold to 50% CPU utilization: apiVersion : crema/v1 kind : CremaConfig spec : pollingInterval : 30 triggerAuthentications : - metadata : name : google-crema-auth spec : podIdentity : provider : gcp scaledObjects : - spec : scaleTargetRef : name : projects/ PROJECT ID /locations/us-central1/workerPools/worker-pool-consumer minReplicaCount : 1 maxReplicaCount : 20 triggers : - type : prometheus metadata : serverAddress : https://monitoring.googleapis.com/v1/projects/ PROJECT ID /location/global/prometheus threshold : "0.5" query : histogram quantile( 0.50, sum by (le) ( increase( run googleapis com:container cpu utilizations bucket{ monitored resource="cloud run worker pool", worker pool name="worker-pool-consumer", location="us-central1", project id=" PROJECT ID " }[2m] ) ) ) authenticationRef : name : google-crema-auth advanced : horizontalPodAutoscalerConfig : behavior : scaleDown : stabilizationWindowSeconds : 300 Replace PROJECT ID with the Google Cloud project ID.
- Deploy the service to scale your workloads To deploy the service to scale your worker pool, run the following command with a prebuilt container image: CREMA CONFIG PARAM VERSION = projects/ $PROJECT ID /locations/ $PARAMETER REGION /parameters/ $PARAMETER ID /versions/ $PARAMETER VERSION IMAGE = us-central1-docker.pkg.dev/cloud-run-oss-images/crema-v1/autoscaler:1.0 gcloud beta run deploy $CREMA SERVICE NAME \ --image = ${ IMAGE } \ --region = ${ REGION } \ --service-account = " ${ CREMA SA NAME } " \ --no-allow-unauthenticated \ --no-cpu-throttling \ --base-image = us-central1-docker.pkg.dev/serverless-runtimes/google-24/runtimes/java25 \ --labels = created-by = crema \ --set-env-vars = "CREMA CONFIG= ${ CREMA CONFIG PARAM VERSION } ,OUTPUT SCALER METRICS=True" Test your autoscaling service To verify your autoscaling service is working correctly, check the Logs tab of the Cloud Run service .
- Required roles To get the permissions that you need to complete the tutorial, ask your administrator to grant you the following IAM roles on your project: Artifact Registry Repository Administrator ( roles/artifactregistry.repoAdmin ) Cloud Build Editor ( roles/cloudbuild.builds.editor ) Cloud Run Admin ( roles/run.admin ) Create Service Accounts ( roles/iam.serviceAccountCreator ) Service Account User ( roles/iam.serviceAccountUser ) Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) Parameter Manager Admin ( roles/parametermanager.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .

### End user authentication for Cloud Run tutorial \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud Run is available in the following regions: Subject to Tier 1 pricing asia-east1 (Taiwan) asia-northeast1 (Tokyo) asia-northeast2 (Osaka) asia-south1 (Mumbai, India) asia-southeast3 (Bangkok) europe-north1 (Finland) Low CO 2 europe-north2 (Stockholm) Low CO 2 europe-southwest1 (Madrid) Low CO 2 europe-west1 (Belgium) Low CO 2 europe-west4 (Netherlands) Low CO 2 europe-west8 (Milan) europe-west9 (Paris) Low CO 2 me-west1 (Tel Aviv) northamerica-south1 (Mexico) us-central1 (Iowa) Low CO 2 us-east1 (South Carolina) us-east4 (Northern Virginia) us-east5 (Columbus) us-south1 (Dallas) Low CO 2 us-west1 (Oregon) Low CO 2 Subject to Tier 2 pricing africa-south1 (Johannesburg) asia-east2 (Hong Kong) asia-northeast3 (Seoul, South Korea) asia-southeast1 (Singapore) asia-southeast2 (Jakarta) asia-south2 (Delhi, India) australia-southeast1 (Sydney) australia-southeast2 (Melbourne) europe-central2 (Warsaw, Poland) europe-west10 (Berlin) europe-west12 (Turin) europe-west2 (London, UK) Low CO 2 europe-west3 (Frankfurt, Germany) europe-west6 (Zurich, Switzerland) Low CO 2 me-central1 (Doha) me-central2 (Dammam) northamerica-northeast1 (Montreal) Low CO 2 northamerica-northeast2 (Toronto) Low CO 2 southamerica-east1 (Sao Paulo, Brazil) Low CO 2 southamerica-west1 (Santiago, Chile) Low CO 2 us-west2 (Los Angeles) us-west3 (Salt Lake City) us-west4 (Las Vegas) If you already created a Cloud Run service, you can view the region in the Cloud Run dashboard in the Google Cloud console .
- Remove the gcloud default region configuration you added during tutorial setup: gcloud config unset run / region Remove the project configuration: gcloud config unset project Delete other Google Cloud resources created in this tutorial: Delete the service container image from Artifact Registry Delete the service account vote-identity@PROJECT ID.iam.gserviceaccount.com Delete the Cloud SQL instance Delete the secret in Secret Manager What's next Dive deeper into Connecting from Cloud Run to Cloud SQL Learn more about sign in methods and managing users with Identity Platform Review other ways to authenticate developers, services, and users of services deployed to Cloud Run Explore other Cloud Run demos, tutorials, and samples Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Enable the APIs Required roles To get the permissions that you need to complete the tutorial, ask your administrator to grant you the following IAM roles on your project: Artifact Registry Repository Administrator ( roles/artifactregistry.repoAdmin ) Cloud Build Editor ( roles/cloudbuild.builds.editor ) Cloud Run Admin ( roles/run.admin ) Cloud SQL Admin ( roles/cloudsql.admin ) Create Service Accounts ( roles/iam.serviceAccountCreator ) Identity Platform Admin ( roles/identityplatform.admin ) OAuth Config Editor ( roles/oauthconfig.editor ) Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) Secret Manager Admin ( roles/secretmanager.admin ) Service Account User ( roles/iam.serviceAccountUser ) Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) Storage Admin ( roles/storage.admin ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- The server verifies the ID token added to the vote request manually, authenticating the end-user. gcloud run deploy idp-sql \ --image REGION -docker.pkg.dev/ PROJECT ID / REPOSITORY /idp-sql \ --allow-unauthenticated \ --service-account idp-sql-identity@ PROJECT ID .iam.gserviceaccount.com \ --add-cloudsql-instances PROJECT ID : REGION : CLOUD SQL INSTANCE NAME \ --update-secrets CLOUD SQL CREDENTIALS SECRET = idp-sql-secrets:latest Also note the flags, --service-account , --add-cloudsql-instances , and --update-secrets , which specify the service identity, the Cloud SQL instance connection, and the secret name with version as an environment variable, respectively.

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- October 23, 2020 Feature Cloud Run services can now be triggered using Eventarc (available in public preview) October 19, 2020 Feature Cloud Run is now available in the following regions: asia-east2 (Hong Kong) asia-northeast3 (Seoul, South Korea) asia-southeast2 (Jakarta) asia-south1 (Mumbai, India) europe-west2 (London, UK) europe-west3 (Frankfurt, Germany) europe-west6 (Zurich, Switzerland) southamerica-east1 (Sao Paulo, Brazil) Feature You can now purchase a custom domain via Cloud Domains using the Cloud Run user interface.
- Feature Cloud Run support for network file systems such as NFS, NDB, 9P, CIFS/Samba, and Ceph , as well as Cloud Filestore and Cloud Storage FUSE , is now at general availability (GA.) November 17, 2022 Feature Logs from Cloud Run services can now be tailed or viewed in a command-line friendly format using gcloud beta run services logs tail and gcloud beta run services logs read October 07, 2022 Feature Cloud Run services can now use the Global External HTTP(S) Load Balancer to map Custom Domains using integrations (Preview).
- March 22, 2024 Feature Direct VPC egress (Preview) is now available in the following additional regions : africa-south1 asia-south1 asia-southeast2 australia-southeast2 europe-central2 europe-west2 europe-west6 europe-west8 europe-west9 europe-west10 me-central1 me-central2 southamerica-west1 us-east5 us-west2 us-west3 us-west8 Feature Cloud Run services can now connect to Vertex AI to access generative AI models using integrations (Preview).
- This execution environment provides better performance and the ability to use network file systems. (Available in public preview.) Feature Cloud Run now supports network file systems such as NFS, NDB, 9P, CIFS/Samba, and Ceph , as well as Cloud Filestore and Cloud Storage FUSE . (Available in public preview.) September 28, 2021 Feature Binary Authorization for Cloud Run is now at generally availability (GA).

