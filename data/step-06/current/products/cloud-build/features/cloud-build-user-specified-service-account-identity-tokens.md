---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:42:40.827Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build user-specified service account identity tokens"
feature_slug: "cloud-build-user-specified-service-account-identity-tokens"
latest_feature_date: "2023-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/build/docs/building/build-containers"
  - "https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-data-center"
  - "https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-server"
keywords:
  - "identity"
  - "tokens"
  - "account"
  - "generate"
  - "specified"
  - "user"
---

# Cloud Build user-specified service account identity tokens

Product: Cloud Build
Coverage: MEDIUM

## Step 02 Summary

Cloud Build can generate Google-signed OIDC identity tokens for user-specified service accounts during build execution for service-to-service authorization.

## Extended Definition

Cloud Build can generate Google-signed OIDC identity tokens for user-specified service accounts during build execution for service-to-service authorization.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/build/docs/building/build-containers](https://docs.cloud.google.com/build/docs/building/build-containers)
- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-data-center](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-data-center)
- [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-server](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-server)

## Supporting Pages

### Build container images \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/building/build-containers](https://docs.cloud.google.com/build/docs/building/build-containers)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you want to run the images, install Docker If you want to sign the images with cosign, follow the instructions in Authorize service-to-service access to create a user-specified service account and grant the permissions required to generate ID tokens.
- Follow the instructions in Authorize service-to-service access to create a user-specified service account and grant the permissions required to generate ID tokens.
- YAML steps : - name : 'gcr.io/cloud-builders/docker' id : 'tag-and-push' script : #!/bin/sh set -e docker build -t $ IMAGE . docker push "$ IMAGE" docker inspect $ IMAGE --format "$ IMAGE@{{.Id}}" >image with digest - name : 'gcr.io/cloud-builders/gcloud' id : 'generate-token' script : #!/bin/sh set -e gcloud auth print-identity-token --audiences=sigstore > token - name : 'gcr.io/cloud-builders/docker' id : 'sign-image' script : #!/bin/sh set -e docker run \ --network=cloudbuild \ --mount source=home-volume,target=/builder/home \ --rm \ -e SIGSTORE NO CACHE=true \ -e HOME=/builder/home \ gcr.io/projectsigstore/cosign \ sign --identity-token=$(cat token) $(cat image with digest) -y service account : '$ SERVICE ACCOUNT' artifacts : images : - $ IMAGE substitutions : IMAGE : ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE NAME ' SERVICE ACCOUNT ID : ' SERVICE ACCOUNT ID ' SERVICE ACCOUNT : projects/${PROJECT ID}/serviceAccounts/${ SERVICE ACCOUNT ID} options : env : - ' IMAGE=$ IMAGE' dynamic substitutions : true logging : CLOUD LOGGING ONLY JSON { "steps" : [ { "name" : "gcr.io/cloud-builders/docker" , "id" : "tag-and-push" , "script" : "#!/bin/sh set -e \ndocker build -t $ IMAGE . \ndocker push \"$ IMAGE\"" }, { "name" : "gcr.io/cloud-builders/gcloud" , "id" : "generate-token-and-get-digest" , "script" : "#!/bin/sh set -e \ngcloud auth print-identity-token --audiences=sigstore > token \ngcloud container images describe \"$ IMAGE\" --format=\"value(image summary.fully qualified digest)\" > image with digest" }, { "name" : "gcr.io/projectsigstore/cosign" , "id" : "sign-image" , "script" : "#!/busybox/sh cosign sign --identity-token=$(cat token) $(cat image with digest) -y" , "env" : [ "SIGSTORE NO CACHE=true" ] } ], "service account" : "$ SERVICE ACCOUNT" , "artifacts" : { "images" : [ "$ IMAGE" ] }, "substitutions" : { " IMAGE" : " LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE NAME " , " SERVICE ACCOUNT ID" : " SERVICE ACCOUNT ID " , " SERVICE ACCOUNT" : "projects/${PROJECT ID}/serviceAccounts/${ SERVICE ACCOUNT ID}" }, "options" : { "env" : [ " IMAGE=$ IMAGE" ], "dynamic substitutions" : true , "logging" : "CLOUD LOGGING ONLY" } } Where: LOCATION is the regional or multi-regional location of the repository where the image is stored, for example us-east1 or us .
- SERVICE ACCOUNT ID is the email address of the user-specified service account you want to run your build.

### "Connect to a Bitbucket Data Center host \_|\_ Cloud Build \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-data-center](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-data-center)
- Source ID: `site-docs-root-2`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: In addition to access tokens for your user account, you can also use access tokens for projects or repositories.
- Follow the instructions to create HTTP access tokens for your user account .
- Unlike connecting your host using the Google Cloud console, you'll need to manually store your personal access tokens and webhook secret in Secret Manager before running the following command: gcloud alpha builds enterprise-config bitbucket-data-center create --name = CONFIG NAME \ --user-name = USERNAME \ --host-uri = HOST URI \ --admin-access-token-secret-version = ADMIN ACCESS TOKEN SECRET VERSION \ --read-access-token-secret-version = READ ACCESS TOKEN SECRET VERSION \ --webhook-secret-secret-version = WEBHOOK SECRET SECRET VERSION \ --api-key = API KEY \ --peered-network = PEERED NETWORK \ --peered-network-ip-range = PEERED NETWORK IP RANGE \ --ssl-ca-file = SSL CA FILE Where: CONFIG NAME is the name of your Bitbucket Data Center configuration.
- Unlike connecting your host using the Google Cloud console, you need to manually store your personal access tokens and webhook secret in Secret Manager before calling the API: { "hostUri" : " HOST URI " , "username" : " USERNAME " , "apiKey" : " API KEY " , "secrets" : { "adminAccessTokenVersionName" : " ADMIN ACCESS TOKEN SECRET VERSION " , "readAccessTokenVersionName" : " READ ACCESS TOKEN SECRET VERSION " , "webhookSecretVersionName" : " WEBHOOK SECRET SECRET VERSION " , }, "peeredNetwork" : " PEERED NETWORK " , "peeredNetworkIpRange" : " PEERED NETWORK IP RANGE " , "sslCa" : " SSL CERTIFICATE " } Where: HOST URI is the host URI of your Bitbucket Data Center instance.

### "Connect to a Bitbucket Server host \_|\_ Cloud Build \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-server](https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-server)
- Source ID: `site-docs-root-2`
- Final score: 129
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: In addition to access tokens for your user account, you can also use access tokens for projects or repositories.
- Follow the instructions to create HTTP access tokens for your user account .
- Unlike connecting your host using the Google Cloud console, you'll need to manually store your personal access tokens and webhook secret in Secret Manager before running the following command: gcloud alpha builds enterprise-config bitbucketserver create --name = CONFIG NAME \ --user-name = USERNAME \ --host-uri = HOST URI \ --admin-access-token-secret-version = ADMIN ACCESS TOKEN SECRET VERSION \ --read-access-token-secret-version = READ ACCESS TOKEN SECRET VERSION \ --webhook-secret-secret-version = WEBHOOK SECRET SECRET VERSION \ --api-key = API KEY \ --peered-network = PEERED NETWORK \ --peered-network-ip-range = PEERED NETWORK IP RANGE \ --ssl-ca-file = SSL CA FILE Where: CONFIG NAME is the name of your Bitbucket Server configuration.
- Unlike connecting your host using the Google Cloud console, you need to manually store your personal access tokens and webhook secret in Secret Manager before calling the API: { "hostUri" : " HOST URI " , "username" : " USERNAME " , "apiKey" : " API KEY " , "secrets" : { "adminAccessTokenVersionName" : " ADMIN ACCESS TOKEN SECRET VERSION " , "readAccessTokenVersionName" : " READ ACCESS TOKEN SECRET VERSION " , "webhookSecretVersionName" : " WEBHOOK SECRET SECRET VERSION " , }, "peeredNetwork" : " PEERED NETWORK " , "peeredNetworkIpRange" : " PEERED NETWORK IP RANGE " , "sslCa" : " SSL CERTIFICATE " } Where: HOST URI is the host URI of your Bitbucket Server instance.

