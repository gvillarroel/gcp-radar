---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T18:37:27.538Z"
product_name: "Binary Authorization"
product_slug: "binary-authorization"
feature_name: "Binary Authorization Beta API"
feature_slug: "binary-authorization-beta-api"
latest_feature_date: "2020-03-04"
deprecation_date: "2020-03-16"
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/binary-authorization/docs/ga-migration-guide"
  - "https://docs.cloud.google.com/binary-authorization/docs/reference/rest"
  - "https://docs.cloud.google.com/binary-authorization/docs/cv-attestation-check"
keywords:
  - "being"
  - "beta"
  - "api"
  - "is"
  - "authorization"
  - "the"
  - "for"
  - "binary"
---

# Binary Authorization Beta API

Product: Binary Authorization
Coverage: LOW

## Step 02 Summary

Support for the Binary Authorization Beta API is being phased out and will stop working after the announced shutdown date; deprecated on 2020-03-16.

## Extended Definition

Support for the Binary Authorization Beta API is being phased out and will stop working after the announced shutdown date; deprecated on 2020-03-16.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/binary-authorization/docs/ga-migration-guide](https://docs.cloud.google.com/binary-authorization/docs/ga-migration-guide)
- [https://docs.cloud.google.com/binary-authorization/docs/reference/rest](https://docs.cloud.google.com/binary-authorization/docs/reference/rest)
- [https://docs.cloud.google.com/binary-authorization/docs/cv-attestation-check](https://docs.cloud.google.com/binary-authorization/docs/cv-attestation-check)

## Supporting Pages

### GA migration guide \_|\_ Binary Authorization \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/binary-authorization/docs/ga-migration-guide](https://docs.cloud.google.com/binary-authorization/docs/ga-migration-guide)
- Source ID: `site-iam-reference`
- Final score: 214
- Re-rank relevance: N/A

Evidence snippets:
- Note: Binary Authorization Beta API users: Support for the Binary Authorization Beta API was discontinued on September 16, 2019.
- Update any scripts or automations that access these interfaces as follows: REST API Use GA REST API endpoints relative to the following URL https://binaryauthorization.googleapis.com/v1/ instead of https://binaryauthorization.googleapis.com/v1beta1 .
- If your workloads use the Binary Authorization Beta API, perform the following steps to migrate to the GA version.
- If you do not have workloads that use the Binary Authorization Beta version, no action is required on your part.

### Binary Authorization API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/binary-authorization/docs/reference/rest](https://docs.cloud.google.com/binary-authorization/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v1beta1.projects REST Resource: v1beta1.projects.attestors REST Resource: v1beta1.projects.policy REST Resource: v1beta1.systempolicy REST Resource: v1alpha2.projects REST Resource: v1alpha2.projects.attestors REST Resource: v1alpha2.projects.attestors.attestations REST Resource: v1alpha2.projects.continuousValidationConfig REST Resource: v1alpha2.projects.policy REST Resource: v1alpha2.systempolicy REST Resource: v1.projects REST Resource: v1.projects.attestors REST Resource: v1.projects.platforms.gke.policies REST Resource: v1.projects.platforms.policies REST Resource: v1.projects.policy REST Resource: v1.systempolicy Service: binaryauthorization.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://binaryauthorization.googleapis.com REST Resource: v1beta1.projects Methods getPolicy GET /v1beta1/{name=projects/ /policy} A policy specifies the attestors that must attest to a container image, before the project is allowed to deploy that image. updatePolicy PUT /v1beta1/{policy.name=projects/ /policy} Creates or updates a project's policy , and returns a copy of the new policy .
- This service provides the following discovery documents: https://binaryauthorization.googleapis.com/$discovery/rest?version=v1 https://binaryauthorization.googleapis.com/$discovery/rest?version=v1beta1 https://binaryauthorization.googleapis.com/$discovery/rest?version=v1alpha2 Service endpoint A service endpoint is a base URL that specifies the network address of an API service.
- REST Resource: v1beta1.projects.attestors Methods create POST /v1beta1/{parent=projects/ }/attestors Creates an attestor , and returns a copy of the new attestor . delete DELETE /v1beta1/{name=projects/ /attestors/ } Deletes an attestor . get GET /v1beta1/{name=projects/ /attestors/ } Gets an attestor . getIamPolicy GET /v1beta1/{resource=projects/ /attestors/ }:getIamPolicy Gets the access control policy for a resource. list GET /v1beta1/{parent=projects/ }/attestors Lists attestors . setIamPolicy POST /v1beta1/{resource=projects/ /attestors/ }:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1beta1/{resource=projects/ /attestors/ }:testIamPermissions Returns permissions that a caller has on the specified resource. update PUT /v1beta1/{attestor.name=projects/ /attestors/ } Updates an attestor . validateAttestationOccurrence POST /v1beta1/{attestor=projects/ /attestors/ }:validateAttestationOccurrence Returns whether the given Attestation for the given image URI was signed by the given Attestor REST Resource: v1beta1.projects.policy Methods getIamPolicy GET /v1beta1/{resource=projects/ /policy}:getIamPolicy Gets the access control policy for a resource. setIamPolicy POST /v1beta1/{resource=projects/ /policy}:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1beta1/{resource=projects/ /policy}:testIamPermissions Returns permissions that a caller has on the specified resource.

### "Use the simple signing attestation check \_|\_ Binary Authorization \_|\_\

- URL: [https://docs.cloud.google.com/binary-authorization/docs/cv-attestation-check](https://docs.cloud.google.com/binary-authorization/docs/cv-attestation-check)
- Source ID: `site-iam-reference`
- Final score: 208
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- View CV configuration error logs To view CV configuration error logs, run the following command: gcloud logging read \ --order = "desc" \ --freshness = 7d \ --project = CLUSTER PROJECT ID \ 'logName:"binaryauthorization.googleapis.com%2Fcontinuous validation" "configErrorEvent"' The following output shows a configuration error in which a CV platform policy isn't found: { "insertId": "141d4f10-72ea-4a43-b3ec-a03da623de42", "jsonPayload": { "@type": "type.googleapis.com/google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent", "configErrorEvent": { "description": "Cannot monitor cluster 'us-central1-c.my-cluster': Resource projects/123456789/platforms/gke/policies/my-policy does not exist." } }, "resource": { "type": "k8s cluster", "labels": { "cluster name": "my-cluster", "location": "us-central1-c", "project id": "my-project" } }, "timestamp": "2024-05-28T15:31:03.999566Z", "severity": "WARNING", "logName": "projects/my-project/logs/binaryauthorization.googleapis.com%2Fcontinuous validation", "receiveTimestamp": "2024-05-28T16:30:56.304108670Z" } View CV platform policy validation violations If no images violate the platform policies that you have enabled, no entries appear in the logs.
- Image is not in a trusted directory" , "checkSetName" : "My check set" , "checkSetIndex" : "0" , "checkName" : "My trusted directory check" , "verdict" : "NON CONFORMANT" , "checkType" : "TrustedDirectoryCheck" , "checkIndex" : "0" } ], "image" : "gcr.io/my-project/hello-app:latest" } ], "verdict" : "VIOLATES POLICY" , "podNamespace" : "default" , "deployTime" : "2022-11-22T01:06:53Z" , "pod" : "hello-app" }, "@type" : "type.googleapis.com/google.cloud.binaryauthorization.v1beta1.ContinuousValidationEvent" }, "resource" : { "type" : "k8s cluster" , "labels" : { "project id" : "my-project" , "location" : "us-central1-a" , "cluster name" : "my-test-cluster" } }, "timestamp" : "2022-11-22T01:44:28.729881832Z" , "severity" : "WARNING" , "logName" : "projects/my-project/logs/binaryauthorization.googleapis.com%2Fcontinuous validation" , "receiveTimestamp" : "2022-11-22T03:35:47.171905337Z" } Clean up This section describes how to clean up the CV monitoring you configured earlier in this guide.
- Local key gcloud Create a signature payload file: cat > /tmp/generated payload.json << EOM { "critical" : { "identity" : { "docker-reference" : " ${ IMAGE PATH } " } , "image" : { "docker-manifest-digest" : " ${ IMAGE DIGEST } " } , "type" : "Google Cloud BinAuthz container signature" } } EOM Create the signature payload file: openssl dgst -sha256 -sign ${ PRIVATE KEY FILE } /tmp/generated payload.json > /tmp/ec signature Create the attestation: gcloud container binauthz attestations create \ --project = ATTESTATION PROJECT ID \ --artifact-url = ${ IMAGE TO ATTEST } \ --note = ${ NOTE URI } \ --signature-file = /tmp/ec signature \ --public-key-id = PUBLIC KEY ID REST API Create a signature payload file: cat > /tmp/generated payload.json << EOM { "critical" : { "identity" : { "docker-reference" : " ${ IMAGE PATH } " } , "image" : { "docker-manifest-digest" : " ${ IMAGE DIGEST } " } , "type" : "Google Cloud BinAuthz container signature" } } EOM Create the signature payload file: openssl dgst -sha256 -sign ${ PRIVATE KEY FILE } /tmp/generated payload.json > /tmp/ec signature Create the attestation content: cat > /tmp/attestation.json Create the attestation: curl -X POST "https://containeranalysis.googleapis.com/v1/projects/${NOTE PROJECT ID}/occurrences/" \ -H "Content-Type: application/json" \ -H "X-Goog-User-Project: ${NOTE PROJECT ID}" \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ --data-binary @/tmp/attestation.json Deploy the image that has an attestation To deploy an image for which an attestation was created, do the following: Configure kubectl : gcloud container clusters get-credentials CLUSTER NAME \ --location = LOCATION \ --project = CLUSTER PROJECT ID Replace the following: CLUSTER NAME : the name of your cluster LOCATION : the cluster location CLUSTER PROJECT ID : the cluster project ID Deploy a service and check the deployment against the Binary Authorization policy: kubectl run hello-app-with-attestation --image = $IMAGE PATH @ $IMAGE DIGEST The Pod was deployed.
- Disable Binary Authorization in a cluster To disable both CV and Binary Authorization enforcement in your cluster, run the following command: gcloud beta container clusters update CLUSTER NAME \ --binauthz-evaluation-mode = DISABLED \ --location = LOCATION \ --project = CLUSTER PROJECT ID Replace the following: CLUSTER NAME : the name of the cluster LOCATION : the cluster location CLUSTER PROJECT ID : the cluster project ID Disable check-based policy monitoring in a cluster To disable CV with check-based policies in the cluster, and re-enable enforcement using the Binary Authorization enforcement policy, run the following command: gcloud beta container clusters update CLUSTER NAME \ --binauthz-evaluation-mode = PROJECT SINGLETON POLICY ENFORCE \ --location = LOCATION \ --project = " CLUSTER PROJECT ID " Replace the following: CLUSTER NAME : the name of the cluster LOCATION : the cluster location CLUSTER PROJECT ID : the cluster project ID Note that --binauthz-evaluation-mode=PROJECT SINGLETON POLICY ENFORCE is equivalent to the older flag --enable-binauthz .

