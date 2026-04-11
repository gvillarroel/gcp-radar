---
title: "Create attestations \_|\_ Binary Authorization \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/binary-authorization/docs/making-attestations
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/binary-authorization/docs
source_metadata:
  url: https://docs.cloud.google.com/binary-authorization/docs/making-attestations
  title: "Create attestations \_|\_ Binary Authorization \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Binary Authorization
Guides
Send feedback
Create attestations
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the steps to create a Binary Authorization
attestation .
You use attestations to authorize specific container images to be deployed on
platforms, such as Google Kubernetes Engine (GKE) and Cloud Run. To use
attestations, you must require attestations in the appropriate rule of your policy .
A single attestation can authorize identical images that are stored in multiple
different locations or different registries, such as Artifact Registry , Container Registry , or an external container registry.
At deploy time, Binary Authorization uses attestors
to verify attestations.
To set up Binary Authorization on Cloud Run, GKE,
Google Distributed Cloud, and Cloud Service Mesh, see
Set up by platform
and select your platform.
GKE users: For an end-to-end tutorial that describes attestation-based enforcement using
Binary Authorization and Google Kubernetes Engine (GKE), see
Getting started using the command-line tool or
Getting started using Google Cloud console .
Before you begin
Overview of attestations provides steps to complete before creating an attestation.
Enable Binary Authorization
Create attestors using the Google Cloud console ,
the Google Cloud CLI ,
or the REST API .
Set up the environment
Specify your project IDs:
ATTESTOR_PROJECT_ID= ATTESTOR_PROJECT_ID
ATTESTATION_PROJECT_ID= ATTESTATION_PROJECT_ID
Replace the following:
ATTESTOR_PROJECT_ID : the name of the project where you
are storing your attestors
ATTESTATION_PROJECT_ID : the name of the project where you
are storing your attestations
If you want your attestation created in the same project as your attestors,
use the same project ID for both variables. For an end-to-end tutorial that
demonstrates separation of duties with different projects, see
Multi-project setup .
Specify the attestor name and image information:
ATTESTOR_NAME= ATTESTOR_NAME
IMAGE_PATH= IMAGE_PATH
IMAGE_DIGEST= IMAGE_DIGEST
IMAGE_TO_ATTEST="${IMAGE_PATH}@${IMAGE_DIGEST}"
Replace the following:
ATTESTOR_NAME : the name of the attestor, for example, build-secure
or prod-qa .
IMAGE_PATH : a URI representing an image path. Though
the URI must comprise a domain and image name, it does not need to
refer to an actual image. Images are not accessed during attestation
creation. The following are examples of image paths:
us-docker.pkg.dev/google-samples/containers/gke/hello-app
gcr.io/example-project/quickstart-image
example.com/hello-app .
IMAGE_DIGEST : the digest of the image manifest.
For example, sha256:37e5287945774f27b418ce567cd77f4bbc9ef44a1bcd1a2312369f31f9cce567
is the image digest associated with the example
us-docker.pkg.dev/google-samples/containers/gke/hello-app image path.
To learn how to get the digest of an image in Artifact Registry, see
Managing images ;
for an image in Container Registry, see
Listing the versions of an image .
Grant Identity and Access Management roles
To create attestations you must grant the following
Identity and Access Management (IAM) roles to the identity that creates the attestor, as follows:
roles/containeranalysis.notes.attacher on the note resource associated with
the attestor.
roles/containeranalysis.occurrences.editor on the attestation project
resource.
You create an attestation based on an attestor. The attestor is associated with
a Artifact Analysis note. Creating an attestation in turn
creates a Artifact Analysis occurrence and attaches it to the note.
Learn more about
Granting access .
To learn how to create an attestation in a Cloud Build
pipeline, see Creating attestations with Cloud Build .
Create an attestation
Note: The example images in this guide are for demonstration only.
We recommend that you only create attestations for images that you manage.
Create an attestation using a locally stored key
To create an attestations signed with a local key, do the following:
Create a signature payload file:
gcloud
To create the signature payload file, enter the following command:
gcloud container binauthz create-signature-payload \
--artifact-url="${IMAGE_TO_ATTEST}" > /tmp/generated_payload.json
The JSON-formatted payload file looks similar to the following output:
{
"critical": {
"identity": {
"docker-reference": "us-docker.pkg.dev/google-samples/containers/gke/hello-app"
},
"image": {
"docker-manifest-digest": "sha256:37e5287945774f27b418ce567cd77f4bbc9ef44a1bcd1a2312369f31f9cce567"
},
"type": "Google cloud binauthz container signature"
}
}
REST API
Create a payload file named /tmp/generated_payload.json using the
environment variables you set earlier in this document:
cat > /tmp/generated_payload.json
Sign the payload with your private key to generate a signature file.
This guide uses the recommended
Elliptic Curve Digital Signature Algorithm (ECDSA)
algorithm for signing. You can also use the RSA algorithm. For more
information on signing algorithms, see
Key purposes and algorithms . This guide also
uses the Public-Key Infrastructure (X.509) (PKIX) signature format. You can also use
PGP.
PRIVATE_KEY_FILE= PRIVATE_KEY_FILE
openssl dgst -sha256 -sign ${PRIVATE_KEY_FILE} /tmp/generated_payload.json > /tmp/ec_signature
Replace PRIVATE_KEY_FILE with the path to the private key you
generated when you created the attestor.
Get the public key ID.
You can retrieve the public key ID from the attestor by entering the
following command:
PUBLIC_KEY_ID = $( gcloud container binauthz attestors describe ${ ATTESTOR_NAME } \
--format = 'value(userOwnedGrafeasNote.publicKeys[0].id)' )
Create the attestation:
gcloud
To create and validate the attestation, enter the following:
gcloud container binauthz attestations create \
--project="${ATTESTATION_PROJECT_ID}" \
--artifact-url="${IMAGE_TO_ATTEST}" \
--attestor="projects/${ATTESTOR_PROJECT_ID}/attestors/${ATTESTOR_NAME}" \
--signature-file=/tmp/ec_signature \
--public-key-id="${PUBLIC_KEY_ID}" \
--validate
The validate flag checks that the attestation can be verified by the
attestor you configured in your policy.
Note: The key ID can be any string.
REST API
To create the attestation:
Retrieve the attestor associated with the
attestation and extract the stored public key ID:
curl \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "x-goog-user-project: ${ATTESTOR_PROJECT_ID}" \
"https://binaryauthorization.googleapis.com/v1/projects/${ATTESTOR_PROJECT_ID}/attestors/"
Binary Authorization returns a JSON object similar to the following:
{
"name": "projects/example-project/attestors/test-attestor",
"userOwnedGrafeasNote": {
"noteReference": "projects/example-project/notes/test-attestor",
"publicKeys": [
{
"id": "ni:///sha-256;EwVxs8fNUAHq9FI2AMfh8WNIXVBuuTMeGtPH72U-I70" ,
"pkixPublicKey": {
"publicKeyPem": "-----BEGIN PUBLIC KEY-----\nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEXnpuYEfvLl1kj4fjxViFRwY1a+zC\n5qzlf9LJIK+rnjq42tiKGyyXMbnZKJiYPPdMDGyltnkrABnztg2jJ48aYQ==\n-----END PUBLIC KEY-----\n",
"signatureAlgorithm": "ECDSA_P256_SHA256"
}
}
],
"delegationServiceAccountEmail": "service-363451293945@gcp-sa-binaryauthorization.iam.gserviceaccount.com"
},
"updateTime": "2019-06-26T16:58:33.977438Z"
}
The public key can be found in the id field.
Create a JSON file in /tmp/attestation.json that
describes the attestation:
cat > /tmp/attestation.json
Create the attestation:
curl -X POST \
-H "Content-Type: application/json" \
-H "X-Goog-User-Project: ${ATTESTATION_PROJECT_ID}" \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
--data-binary @/tmp/attestation.json \
"https://containeranalysis.googleapis.com/v1/projects/${ATTESTATION_PROJECT_ID}/occurrences/"
Caution: Binary Authorization doesn't support Artifact Analysis regional
storage or regional
endpoints . We recommend that you use the
Artifact Analysis global API endpoint ( https://containeranalysis.googleapis.com/ ).
Create an attestation using Cloud KMS
To create an attestation with using Cloud Key Management Service:
Create environment variables:
KMS_KEY_PROJECT_ID= KMS_KEY_PROJECT_ID
KMS_KEY_LOCATION= KMS_KEY_LOCATION
KMS_KEYRING_NAME= KMS_KEYRING_NAME
KMS_KEY_NAME= KMS_KEY_NAME
KMS_KEY_VERSION= KMS_KEY_VERSION
Replace the following:
KMS_KEY_PROJECT_ID : the ID of the project where your
Cloud Key Management Service keys are stored
KMS_KEY_LOCATION : the location of the key ( global
is the default)
KMS_KEYRING_NAME : the name of the key ring
KMS_KEY_NAME : the name of the key
KMS_KEY_VERSION : the key version
Sign and create the attestation:
gcloud
Enter the following command:
gcloud beta container binauthz attestations sign-and-create \
--project="${ATTESTATION_PROJECT_ID}" \
--artifact-url="${IMAGE_TO_ATTEST}" \
--attestor="${ATTESTOR_NAME}" \
--attestor-project="${ATTESTOR_PROJECT_ID}" \
--keyversion-project="${KMS_KEY_PROJECT_ID}" \
--keyversion-location="${KMS_KEY_LOCATION}" \
--keyversion-keyring="${KMS_KEYRING_NAME}" \
--keyversion-key="${KMS_KEY_NAME}" \
--keyversion="${KMS_KEY_VERSION}" \
--validate
The validate flag checks that the attestation can be verified by the
attestor you configured in your policy.
REST API
Create a payload file named /tmp/generated_payload.json using the
environment variables you set above:
cat > /tmp/generated_payload.json
Sign the payload file:
curl \
--header "Content-Type: application/json" \
--header "Authorization: Bearer $(gcloud auth print-access-token)" \
--header "x-goog-user-project: ${ATTESTOR_PROJECT_ID}" \
--data '{"digest": {" DIGEST_ALGORITHM ": "'$(openssl dgst -sha256 -binary /tmp/generated_payload.json | openssl base64)'" }}' \
https://cloudkms.googleapis.com/v1/projects/${KMS_KEY_PROJECT_ID}/locations/${KMS_KEY_LOCATION}/keyRings/${KMS_KEYRING_NAME}/cryptoKeys/${KMS_KEY_NAME}/cryptoKeyVersions/${KMS_KEY_VERSION}:asymmetricSign?alt=json
Replace DIGEST_ALGORITHM with the algorithm to digest
the input. Examples in this guide use a sha256 digest. You can use
sha256 , sha384 , or sha512 .
In this example, the output looks similar to the following:
{
"signature" : "<var>SIGNATURE</var>" : "996305066" ,
"name" : "projects/<var>KMS_KEY_PROJECT_ID</var>/locations/<var>KMS_KEY_LOCATION</var>/keyRings/<var>KMS_KEYRING_NAME</var>/cryptoKeys/<var>KMS_KEY_NAME</var>/cryptoKeyVersions/<var>KMS_KEY_VERSION</var>"
}
In this output, SIGNATURE is the base64-encoded signature
of the payload file.
Store the signature in an environment variable:
PAYLOAD_SIGNATURE= PAYLOAD_SIGNATURE
Retrieve the attestor on whose behalf you are are signing the
attestation and extract the stored public key ID and note ID:
curl \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "x-goog-user-project: ${ATTESTOR_PROJECT_ID}" \
"https://binaryauthorization.googleapis.com/v1/projects/${ATTESTOR_PROJECT_ID}/attestors/"
Binary Authorization returns a JSON object similar to the following:
{
"name": "projects/example-project/attestors/test-attestor",
"userOwnedGrafeasNote": {
"noteReference": "projects/example-project/notes/test-attestor" ,
"publicKeys": [
{
"id": "ni:///sha-256;EwVxs8fNUAHq9FI2AMfh8WNIXVBuuTMeGtPH72U-I70" ,
"pkixPublicKey": {
"publicKeyPem": "-----BEGIN PUBLIC KEY-----\nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEXnpuYEfvLl1kj4fjxViFRwY1a+zC\n5qzlf9LJIK+rnjq42tiKGyyXMbnZKJiYPPdMDGyltnkrABnztg2jJ48aYQ==\n-----END PUBLIC KEY-----\n",
"signatureAlgorithm": "ECDSA_P256_SHA256"
}
}
],
"delegationServiceAccountEmail": "service-363451293945@gcp-sa-binaryauthorization.iam.gserviceaccount.com"
},
"updateTime": "2019-06-26T16:58:33.977438Z"
}
You can find the public key ID in the id field and the note ID in
the noteReference field.
Store the public key ID in an environment variable:
PUBLIC_KEY_ID=" PUBLIC_KEY_ID "
NOTE_URI=" NOTE_URI "
Replace the following:
PUBLIC_KEY_ID : the public key ID of the attestor.
NOTE_URI : the URI of the Artifact Analysis
note associated with the attestor.
Create a JSON file in /tmp/attestation.json that
describes the attestation:
cat > /tmp/attestation.json
Create the attestation:
curl -X POST \
-H "Content-Type: application/json" \
-H "X-Goog-User-Project: ${ATTESTATION_PROJECT_ID}" \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
--data-binary @/tmp/attestation.json \
"https://containeranalysis.googleapis.com/v1/projects/${ATTESTATION_PROJECT_ID}/occurrences/"
Caution: Binary Authorization doesn't support Artifact Analysis regional
storage or regional
endpoints . We recommend that you use the
Artifact Analysis global API endpoint ( https://containeranalysis.googleapis.com/ ).
You have created the attestation.
Note: At deploy time, the enforcer uses only the image digest to verify the
attestation. As a result, this attestation can be used to deploy identical images in
multiple locations, including those stored locally, in Artifact Registry,
Container Registry, and in external registries.
Verify that the attestation was created
To verify that the attestation was created, you can list attestations associated
with the image.
gcloud
To retrieve a list of attestations, enter the following command:
gcloud container binauthz attestations list\
--project="${ATTESTATION_PROJECT_ID}"\
--attestor="projects/${ATTESTOR_PROJECT_ID}/attestors/${ATTESTOR_NAME}"\
--artifact-url="${IMAGE_TO_ATTEST}"
REST API
To request a list of attestations, enter the following command:
curl -X GET \
-H "Content-Type: application/json" \
-H "X-Goog-User-Project: ${ATTESTOR_PROJECT_ID}" \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
https://containeranalysis.googleapis.com/v1/projects/${ATTESTOR_PROJECT_ID}/notes/${NOTE_ID}/occurrences?filter=resourceUrl%3D%22https%3A%2F%2F$(jq -rn --arg x ${IMAGE_TO_ATTEST} '$x|@uri')%22
If there are many attestations, the response might contain a nextPageToken
value. In this case, you can retrieve the next page of results by repeating
the request, adding a pageToken query parameter, as follows:
NEXT_PAGE_TOKEN= NEXT_PAGE_TOKEN
curl -X GET \
-H "Content-Type: application/json" \
-H "X-Goog-User-Project: ${ATTESTOR_PROJECT_ID}" \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
https://containeranalysis.googleapis.com/v1/projects/${ATTESTOR_PROJECT_ID}/notes/${NOTE_ID}/occurrences?filter=resourceUrl%3D%22https%3A%2F%2F$(jq -rn --arg x ${IMAGE_TO_ATTEST} '$x|@uri')%22&pageToken=${NEXT_PAGE_TOKEN}
Replace NEXT_PAGE_TOKEN with the nextPageToken value in
the response from the previous request.
When nextPageToken is empty that means that there are no more results.
Delete the attestation
Caution: You should not delete attestations for production workloads.
Deleting attestations can result in unpredictable behavior. These instructions
are for deleting test attestations, like those created earlier in this document.
Before you delete the attestation, you should do the following:
Understand the ramifications of deleting it. Deleting an attestation
eventually blocks container images associated with the attestation
from being deployed.
Stop all running containers that are associated with the attestations
you intend to delete.
Delete all copies of the attestations wherever they reside, for example
attestations in Artifact Registry and Artifact Analysis repositories.
Ensure that the affected images are actually blocked from deploying by
attempting to re-deploy them.
Note: For additional security, consider deleting the key pair and the associated
attestor.
To delete an attestation, execute the following commands:
List attestations:
gcloud container binauthz attestations list \
--attestor-project = ${ ATTESTOR_PROJECT_ID } \
--attestor = ${ ATTESTOR_NAME }
The attestation contains an occurrence ID. The output looks similar to the
following:
projects/ ATTESTOR_PROJECT_ID /occurrences/ OCCURRENCE_ID
Save the occurrence ID.
Save the occurrence ID of the attestation you want to delete.
OCCURRENCE_ID = OCCURRENCE_ID
Delete the attestation:
curl -H "Authorization: Bearer $( gcloud auth print-access-token ) " -X DELETE \
https://containeranalysis.googleapis.com/v1beta1/projects/ ${ ATTESTATION_PROJECT_ID } /occurrences/ ${ OCCURRENCE_ID }
Verify that the attestations were deleted by listing attestations again.
What's next
Learn more about Separation of duties and Identity and Access Management roles .
Implement separation of duties in this Multi-project setup (GKE)
tutorial.
Deploy a container image (GKE)
to a cluster where Binary Authorization is enabled.
Deploy a container image (Cloud Run)
to a cluster where Binary Authorization is enabled.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
