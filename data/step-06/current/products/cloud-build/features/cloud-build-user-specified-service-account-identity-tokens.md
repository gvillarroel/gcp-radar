---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T20:21:46.696Z"
product_name: "Cloud Build"
product_slug: "cloud-build"
feature_name: "Cloud Build user-specified service account identity tokens"
feature_slug: "cloud-build-user-specified-service-account-identity-tokens"
latest_feature_date: "2023-08-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/build/docs/building/build-containers"
  - "https://docs.cloud.google.com/build/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient"
keywords:
  - "build"
  - "user"
  - "specified"
  - "account"
  - "identity"
  - "tokens"
  - "can"
  - "generate"
---

# Cloud Build user-specified service account identity tokens

Product: Cloud Build
Coverage: LOW

## Step 02 Summary

Cloud Build can generate Google-signed OIDC identity tokens for user-specified service accounts during build execution for service-to-service authorization.

## Extended Definition

Cloud Build can generate Google-signed OIDC identity tokens for user-specified service accounts during build execution for service-to-service authorization.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/build/docs/building/build-containers](https://docs.cloud.google.com/build/docs/building/build-containers)
- [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient)

## Supporting Pages

### Build container images \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/building/build-containers](https://docs.cloud.google.com/build/docs/building/build-containers)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you want to run the images, install Docker If you want to sign the images with cosign, follow the instructions in Authorize service-to-service access to create a user-specified service account and grant the permissions required to generate ID tokens.
- Follow the instructions in Authorize service-to-service access to create a user-specified service account and grant the permissions required to generate ID tokens.
- YAML steps : - name : 'gcr.io/cloud-builders/docker' id : 'tag-and-push' script : #!/bin/sh set -e docker build -t $ IMAGE . docker push "$ IMAGE" docker inspect $ IMAGE --format "$ IMAGE@{{.Id}}" >image with digest - name : 'gcr.io/cloud-builders/gcloud' id : 'generate-token' script : #!/bin/sh set -e gcloud auth print-identity-token --audiences=sigstore > token - name : 'gcr.io/cloud-builders/docker' id : 'sign-image' script : #!/bin/sh set -e docker run \ --network=cloudbuild \ --mount source=home-volume,target=/builder/home \ --rm \ -e SIGSTORE NO CACHE=true \ -e HOME=/builder/home \ gcr.io/projectsigstore/cosign \ sign --identity-token=$(cat token) $(cat image with digest) -y service account : '$ SERVICE ACCOUNT' artifacts : images : - $ IMAGE substitutions : IMAGE : ' LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE NAME ' SERVICE ACCOUNT ID : ' SERVICE ACCOUNT ID ' SERVICE ACCOUNT : projects/${PROJECT ID}/serviceAccounts/${ SERVICE ACCOUNT ID} options : env : - ' IMAGE=$ IMAGE' dynamic substitutions : true logging : CLOUD LOGGING ONLY JSON { "steps" : [ { "name" : "gcr.io/cloud-builders/docker" , "id" : "tag-and-push" , "script" : "#!/bin/sh set -e \ndocker build -t $ IMAGE . \ndocker push \"$ IMAGE\"" }, { "name" : "gcr.io/cloud-builders/gcloud" , "id" : "generate-token-and-get-digest" , "script" : "#!/bin/sh set -e \ngcloud auth print-identity-token --audiences=sigstore > token \ngcloud container images describe \"$ IMAGE\" --format=\"value(image summary.fully qualified digest)\" > image with digest" }, { "name" : "gcr.io/projectsigstore/cosign" , "id" : "sign-image" , "script" : "#!/busybox/sh cosign sign --identity-token=$(cat token) $(cat image with digest) -y" , "env" : [ "SIGSTORE NO CACHE=true" ] } ], "service account" : "$ SERVICE ACCOUNT" , "artifacts" : { "images" : [ "$ IMAGE" ] }, "substitutions" : { " IMAGE" : " LOCATION -docker.pkg.dev/ PROJECT ID / REPOSITORY / IMAGE NAME " , " SERVICE ACCOUNT ID" : " SERVICE ACCOUNT ID " , " SERVICE ACCOUNT" : "projects/${PROJECT ID}/serviceAccounts/${ SERVICE ACCOUNT ID}" }, "options" : { "env" : [ " IMAGE=$ IMAGE" ], "dynamic substitutions" : true , "logging" : "CLOUD LOGGING ONLY" } } Where: LOCATION is the regional or multi-regional location of the repository where the image is stored, for example us-east1 or us .
- SERVICE ACCOUNT ID is the email address of the user-specified service account you want to run your build.

### Cloud Build release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/build/docs/release-notes](https://docs.cloud.google.com/build/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- August 29, 2023 Feature You can now configure Cloud Build to generate Google-signed identity tokens for user-specified service accounts during a build.
- Leveraging identity tokens with Cloud Build, you can: Authorize service-to-service access from Cloud Build Sign your builds Identity tokens that you generate with Cloud Build conform to the OpenID Connect (OIDC) specification.
- November 30, 2022 Feature Users can generate Supply chain Levels for Software Artifacts (SLSA) build provenance information for standalone Java and Python packages when they upload artifacts to Artifact Registry using new fields available in the Cloud Build config file .
- April 04, 2023 Feature Users can generate Supply chain Levels for Software Artifacts (SLSA) build provenance information for standalone Maven and Python packages when they upload artifacts to Artifact Registry using new fields available in the Cloud Build config file .

### "Class CloudBuildAsyncClient (3.35.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient](https://docs.cloud.google.com/python/docs/reference/cloudbuild/latest/google.cloud.devtools.cloudbuild_v1.services.cloud_build.CloudBuildAsyncClient)
- Source ID: `site-python-reference`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Fields can include the following variables, which will be expanded when the build is created: - $PROJECT ID: the project ID of the build. - $PROJECT NUMBER: the project number of the build. - $LOCATION: the location/region of the build. - $BUILD ID: the autogenerated ID of the build. - $REPO NAME: the source repository name specified by RepoSource. - $BRANCH NAME: the branch name specified by RepoSource. - $TAG NAME: the tag name specified by RepoSource. - $REVISION ID or $COMMIT SHA: the commit SHA specified by RepoSource or resolved from the specified branch or tag. - $SHORT SHA: first 7 characters of $REVISION ID or $COMMIT SHA. common billing account path common billing account path ( billing account : str ) - > str Returns a fully-qualified billing account string. common folder path common folder path ( folder : str ) - > str Returns a fully-qualified folder string. common location path common location path ( project : str , location : str ) - > str Returns a fully-qualified location string. common organization path common organization path ( organization : str ) - > str Returns a fully-qualified organization string. common project path common project path ( project : str ) - > str Returns a fully-qualified project string. create build create build ( request : typing .
- Fields can include the following variables, which will be expanded when the build is created: - $PROJECT ID: the project ID of the build. - $PROJECT NUMBER: the project number of the build. - $LOCATION: the location/region of the build. - $BUILD ID: the autogenerated ID of the build. - $REPO NAME: the source repository name specified by RepoSource. - $BRANCH NAME: the branch name specified by RepoSource. - $TAG NAME: the tag name specified by RepoSource. - $REVISION ID or $COMMIT SHA: the commit SHA specified by RepoSource or resolved from the specified branch or tag. - $SHORT SHA: first 7 characters of $REVISION ID or $COMMIT SHA. secret version path secret version path ( project : str , secret : str , version : str ) - > str Returns a fully-qualified secret version string. service account path service account path ( project : str , service account : str ) - > str Returns a fully-qualified service account string. subscription path subscription path ( project : str , subscription : str ) - > str Returns a fully-qualified subscription string. topic path topic path ( project : str , topic : str ) - > str Returns a fully-qualified topic string. update build trigger update build trigger ( request : typing .
- Fields can include the following variables, which will be expanded when the build is created: - $PROJECT ID: the project ID of the build. - $PROJECT NUMBER: the project number of the build. - $LOCATION: the location/region of the build. - $BUILD ID: the autogenerated ID of the build. - $REPO NAME: the source repository name specified by RepoSource. - $BRANCH NAME: the branch name specified by RepoSource. - $TAG NAME: the tag name specified by RepoSource. - $REVISION ID or $COMMIT SHA: the commit SHA specified by RepoSource or resolved from the specified branch or tag. - $SHORT SHA: first 7 characters of $REVISION ID or $COMMIT SHA. build path build path ( project : str , build : str ) - > str Returns a fully-qualified build string. build trigger path build trigger path ( project : str , trigger : str ) - > str Returns a fully-qualified build trigger string. cancel build cancel build ( request : typing .
- Fields can include the following variables, which will be expanded when the build is created: - $PROJECT ID: the project ID of the build. - $PROJECT NUMBER: the project number of the build. - $LOCATION: the location/region of the build. - $BUILD ID: the autogenerated ID of the build. - $REPO NAME: the source repository name specified by RepoSource. - $BRANCH NAME: the branch name specified by RepoSource. - $TAG NAME: the tag name specified by RepoSource. - $REVISION ID or $COMMIT SHA: the commit SHA specified by RepoSource or resolved from the specified branch or tag. - $SHORT SHA: first 7 characters of $REVISION ID or $COMMIT SHA. create build trigger create build trigger ( request : typing .

