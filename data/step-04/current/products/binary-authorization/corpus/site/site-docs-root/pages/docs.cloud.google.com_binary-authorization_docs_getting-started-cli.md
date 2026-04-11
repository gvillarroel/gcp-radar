---
title: "Get started using the Google Cloud CLI (GKE) \_|\_ Binary Authorization \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/binary-authorization/docs/getting-started-cli
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/binary-authorization/docs
source_metadata:
  url: https://docs.cloud.google.com/binary-authorization/docs/getting-started-cli
  title: "Get started using the Google Cloud CLI (GKE) \_|\_ Binary Authorization\
    \ \_|\_ Google Cloud Documentation"
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
Get started using the Google Cloud CLI (GKE)
Stay organized with collections
Save and categorize content based on your preferences.
Note:
This document or section includes references to one or more terms that Google
considers disrespectful or offensive. The terms are used because they are
keywords in the software that's described in the document.
The terms: whitelist
Note: This tutorial assumes that you have read the
Binary Authorization overview .
This tutorial shows how to configure and test a Binary Authorization policy that
requires attestations . This type of policy secures
your container-based software supply chain by verifying that a container image
has a signed attestation before allowing deployment of the image.
At deploy time, Binary Authorization uses attestors to
verify digital signatures in attestations . The
attestations are created by signers , usually as part of a
continuous integration (CI) pipeline.
In this tutorial, the GKE cluster, attestations, and
attestors are all located in a single project. A single-project configuration is
mostly useful for testing or experimenting with the service. For a
more real-world example, see
multi-project configuration .
The steps below describe tasks that you perform at the command line. To follow
these steps using Google Cloud console, see
Get started using the Google Cloud console .
Objectives
In this tutorial, you learn how to:
Create a Google Kubernetes Engine
(GKE) cluster with Binary Authorization enabled
Create an attestor that the Binary Authorization enforcer uses to verify
the signature on an attestation
Configure a policy that requires an attestation
Create a cryptographic key pair to sign attestations and later verify them
Sign a container image digest, creating a signature
Create an attestation using the signature
Test the policy by deploying a container image to GKE
Costs
In this document, you use the following billable components of Google Cloud:
Artifact Registry
Binary Authorization
GKE
Optional: Cloud Key Management Service
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Install kubectl for interacting with GKE.
Enable Binary Authorization
Set the default project
The first step is to set the default Google Cloud project used by the
gcloud command:
PROJECT_ID= PROJECT_ID
gcloud config set project ${PROJECT_ID}
where PROJECT_ID is the name of your project.
Enable required APIs
Enable APIs for:
Artifact Registry
gcloud --project=${PROJECT_ID} \
services enable\
container.googleapis.com\
artifactregistry.googleapis.com\
binaryauthorization.googleapis.com
Create a cluster with Binary Authorization enabled
Create the cluster
Create a GKE cluster with Binary Authorization
enabled. This is the cluster where you want your deployed container images to
run. When you create the cluster, you pass the --binauthz-evaluation-mode=PROJECT_SINGLETON_POLICY_ENFORCE flag to the
gcloud container clusters create command.
To create the cluster, follow these steps:
gcloud container clusters create \
--binauthz-evaluation-mode=PROJECT_SINGLETON_POLICY_ENFORCE \
--zone us-central1-a \
test-cluster
Here, you create a cluster named test-cluster in the
GKE zone us-central1-a .
Configure kubectl
You must also update the local kubeconfig file for your kubectl
installation. This provides the credentials and endpoint information required to
access the cluster in GKE.
To update the local kubeconfig file:
gcloud container clusters get-credentials \
--zone us-central1-a \
test-cluster
View the default policy
A policy in Binary Authorization is a set of rules that
govern the deployment of container images. You can have one policy per project.
By default, the policy is configured to allow all container images to be
deployed.
Binary Authorization allows you to export and import a policy file in
YAML format. This format reflects the structure of a policy as it is stored by
the service. When you configure a policy using gcloud commands, you edit this
file.
To view the default policy, export the policy YAML file:
gcloud container binauthz policy export
By default, the file has the following contents:
defaultAdmissionRule:
enforcementMode: ENFORCED_BLOCK_AND_AUDIT_LOG
evaluationMode: ALWAYS_ALLOW
globalPolicyEvaluationMode: ENABLE
name: projects/ PROJECT_ID /policy
The default rule is defined in the defaultAdmissionRule
node. evaluationMode specifies that
the policy allows all attempts at image deployment. In this tutorial, you update
the default rule to require attestations.
globalPolicyEvaluationMode
exempts Google-managed system images from Binary Authorization enforcement.
To add an exempt image to the allowlist, add the
following to the policy file:
admissionWhitelistPatterns :
- namePattern : EXEMPT_IMAGE_PATH
Replace EXEMPT_IMAGE_PATH with the path to am image to exempt. To exempt additional images, add additional - namePattern entries. Learn more about admissionWhitelistPatterns .
For more information on the structure of a policy, see the
Policy YAML reference .
Create an attestor
An attestor is the verification authority that the
Binary Authorization enforcer uses at deploy time to decide whether to allow
GKE to deploy the corresponding signed container image.
The attestor contains the public key and is typically managed by personnel
in your organization who are responsible for software supply
chain security.
Creating an attestor requires you to:
Create a note in
Artifact Analysis to store
trusted metadata used in the authorization process
Create the attestor itself in Binary Authorization and associate the note you
created
For this tutorial, you have one attestor named test-attestor and a Container
Analysis note named test-attestor-note . In a real-world scenario, you can have
any number of attestors, each one representing a party that participates in the
authorization process for a container image.
Create the Artifact Analysis note
Set variables that store the name of your attestor and Artifact Analysis
note:
ATTESTOR_NAME= test-attestor
NOTE_ID=test- attestor-note
Replace:
test-attestor : attestor name of your choice.
attestor-note : attestor note name of your choice.
Create a JSON file in /tmp/note_payload.json that describes the Container
Analysis note:
cat > /tmp/note_payload.json
Create the note by sending an HTTP request to the Artifact Analysis REST
API:
curl -X POST \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
--data-binary @/tmp/note_payload.json \
"https://containeranalysis.googleapis.com/v1/projects/${PROJECT_ID}/notes/?noteId=${NOTE_ID}"
Caution: Binary Authorization doesn't support Artifact Analysis regional
storage or regional
endpoints . We recommend that you use the
Artifact Analysis global API endpoint ( https://containeranalysis.googleapis.com/ ).
Verify that the note was created:
curl \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
"https://containeranalysis.googleapis.com/v1/projects/${PROJECT_ID}/notes/${NOTE_ID}"
Create the attestor
Now, you can create the attestor:
Create the attestor in Binary Authorization:
gcloud container binauthz attestors create ${ATTESTOR_NAME} \
--attestation-authority-note=${NOTE_ID} \
--attestation-authority-note-project=${PROJECT_ID}
Verify that the attestor was created:
gcloud container binauthz attestors list
The attestor you created is not yet usable without an associated key pair,
which you create later in this guide .
For a multi-project configuration, you must set permissions on the Container
Analysis note as described in
Multi-Project Setup . This is not required
in a single-project scenario, because the project has the required
roles/containeranalysis.notes.occurrences.viewer by default.
Generate a key pair
Binary Authorization uses cryptographic keys to
securely verify the identity of signers . This ensures
that only authorized container images can be deployed. The key
pair consists of a private key and a public key. The
signer uses the private key to sign the container image
digest, producing a signature that is then stored in an
attestation . The public key is stored in the
attestor . At deploy time, the Binary Authorization
enforcer uses the attestor's public key to verify the signature in the
attestation before allowing the container to deploy.
In this tutorial, you use Public-Key Infrastructure (X.509) (PKIX) format for
cryptographic keys. This tutorial uses the recommended Elliptic Curve Digital Signature Algorithm (ECDSA)
to generate a PKIX key pair. You can also use RSA or PGP keys for signing images.
For more information on signing algorithms, see Key purposes and algorithms .
The keys generated and stored by
Cloud Key Management Service (Cloud KMS) are PKIX-compliant.
See Creating attestors using the gcloud CLI for more
information on using PKIX keys and Cloud KMS.
PKIX (Cloud KMS)
To create the key pair in Cloud KMS, do the following:
Set up environment variables needed to create the key pair.
KMS_KEY_PROJECT_ID = ${ PROJECT_ID }
KMS_KEYRING_NAME = my-binauthz-keyring
KMS_KEY_NAME = my-binauthz-kms-key-name
KMS_KEY_LOCATION = global
KMS_KEY_PURPOSE = asymmetric-signing
KMS_KEY_ALGORITHM = ec-sign-p256-sha256
KMS_PROTECTION_LEVEL = software
KMS_KEY_VERSION = 1
To create the keyring, run the following command:
gcloud kms keyrings create ${ KMS_KEYRING_NAME } \
--location ${ KMS_KEY_LOCATION }
To create the key, run the following command:
gcloud kms keys create ${ KMS_KEY_NAME } \
--location ${ KMS_KEY_LOCATION } \
--keyring ${ KMS_KEYRING_NAME } \
--purpose ${ KMS_KEY_PURPOSE } \
--default-algorithm ${ KMS_KEY_ALGORITHM } \
--protection-level ${ KMS_PROTECTION_LEVEL }
To add the public key to the attestor, run the following command:
gcloud --project="${PROJECT_ID}" \
container binauthz attestors public-keys add \
--attestor="${ATTESTOR_NAME}" \
--keyversion-project="${KMS_KEY_PROJECT_ID}" \
--keyversion-location="${KMS_KEY_LOCATION}" \
--keyversion-keyring="${KMS_KEYRING_NAME}" \
--keyversion-key="${KMS_KEY_NAME}" \
--keyversion="${KMS_KEY_VERSION}"
Get the public key ID from the attestor as follows:
You can view your public key ID at any time using the command:
gcloud container binauthz attestors describe <var>ATTESTOR_NAME</var> .
To save your public key ID in an environment variable, enter this
command:
PUBLIC_KEY_ID=$(gcloud container binauthz attestors describe ${ATTESTOR_NAME} \
--format='value(userOwnedGrafeasNote.publicKeys[0].id)' --project ${PROJECT_ID})
PKIX (local key)
Warning: We strongly recommend against using locally generated key pairs in production environments as they present a security risk. We recommend that you instead use Cloud Key Management Service. This example is provided for illustrative purposes only.
To generate a PKIX key pair, follow these steps:
Create the private key:
PRIVATE_KEY_FILE="/tmp/ec_private.pem"
openssl ecparam -genkey -name prime256v1 -noout -out ${PRIVATE_KEY_FILE}
Extract the public key from the private key:
PUBLIC_KEY_FILE="/tmp/ec_public.pem"
openssl ec -in ${PRIVATE_KEY_FILE} -pubout -out ${PUBLIC_KEY_FILE}
Add the public key to the attestor.
Now, add the public key you exported to the attestor so that it can be used by
Binary Authorization for identity verification:
gcloud --project="${PROJECT_ID}" \
container binauthz attestors public-keys add \
--attestor="${ATTESTOR_NAME}" \
--pkix-public-key-file=${PUBLIC_KEY_FILE} \
--pkix-public-key-algorithm=ecdsa-p256-sha256
Note: This command outputs the PUBLIC_KEY_ID you use when
creating an attestation. It is in the id field of the output and looks
like ni:///sha-256;ybf_gINTzsBKLCaRIeQnExNhKFkGONXXXlr63QeZY-Q .
Save the public key ID.
To save the public key ID, you can copy it from the output of
public-keys add above. To view your attestor's public key ID after adding
it to the attestor, use
gcloud container binauthz attestors describe ${ATTESTOR_NAME} :
PUBLIC_KEY_ID=$(gcloud container binauthz attestors describe ${ ATTESTOR_NAME } \
--format='value(userOwnedGrafeasNote.publicKeys[0].id)')
Configure the policy
Now, you can configure your policy. In this step, you export the policy YAML
file to your local system and modify the default rule so that it requires an
attestation by the attestor you defined above.
To configure the policy, follow these steps:
Create a new policy file that allows Google-maintained system
images , sets the
evaluationMode to
REQUIRE_ATTESTATION , and adds a node named
requireAttestationsBy
that references the attestor you created:
cat > /tmp/policy.yaml
Import the policy YAML file into Binary Authorization:
gcloud container binauthz policy import /tmp/policy.yaml
Note: It can take a few minutes for the policy to take effect.
For more information on configuring a policy, see
Configure a policy using the gcloud CLI .
Test the policy
You can test the policy you configured above by trying to deploy a sample
container image to the cluster. The policy will block deployment because the
required attestation has not been made.
For this tutorial, you can use sample images from
Artifact Registry. The image from Artifact Registry is located
at the path us-docker.pkg.dev/google-samples/containers/gke/hello-app:1.0 .
The path contains a public image created by Google that contains a "Hello,
World!" sample application.
First, try to deploy the image:
kubectl run hello-server --image us-docker.pkg.dev/google-samples/containers/gke/hello-app:1.0 --port 8080
Now, verify that the deployment was blocked by Binary Authorization:
kubectl get pods
The command prints the following message, which indicates that the image was not
deployed:
No resources found.
You can get further details about the deployment:
kubectl get event --template \
'{{range.items}}{{"\033[0;36m"}}{{.reason}}:{{"\033[0m"}}\{{.message}}{{"\n"}}{{end}}'
You see a response that resembles the following:
FailedCreate: Error creating: pods POD_NAME is forbidden: admission webhook "imagepolicywebhook.image-policy.k8s.io" denied the request: Image IMAGE_NAME denied by Binary Authorization default admission rule. Image IMAGE_NAME denied by attestor ATTESTOR_NAME : No attestations found
In this output:
POD_NAME : the name of the Pod.
IMAGE_NAME : the name of the image.
ATTESTOR_NAME : the name of the attestor.
Make sure to delete the deployment so you can continue to the next step:
kubectl delete deployment hello-server
Create an attestation
An attestation is a digital document created by a
signer that certifies that GKE is allowed to
deploy the associated container image. The process of creating an attestation
is sometimes called "signing an image." A signer can be a person or, more often,
an automated process that runs when a container image is built. The signature is
created using the private key from a key pair. At deploy
time, the Binary Authorization enforcer uses the attestor's public
key to verify the signature in the attestation.
In this tutorial, your attestation simply states that you authorize the image
for deployment.
To create an attestation, follow these steps:
Set variables that store the registry path and digest of the image:
Artifact Registry
IMAGE_PATH="us-docker.pkg.dev/google-samples/containers/gke/hello-app"
IMAGE_DIGEST="sha256:37e5287945774f27b418ce567cd77f4bbc9ef44a1bcd1a2312369f31f9cce567"
IMAGE_TO_ATTEST=${IMAGE_PATH}@${IMAGE_DIGEST}
To create the attestation, do the following:
PKIX Cloud KMS
To create the attestation using the Cloud KMS key, run the
following command:
gcloud container binauthz attestations sign-and-create \
--project = " ${ PROJECT_ID } " \
--artifact-url = " ${ IMAGE_TO_ATTEST } " \
--attestor = " ${ ATTESTOR_NAME } " \
--attestor-project = " ${ PROJECT_ID } " \
--keyversion-project = " ${ KMS_KEY_PROJECT_ID } " \
--keyversion-location = " ${ KMS_KEY_LOCATION } " \
--keyversion-keyring = " ${ KMS_KEYRING_NAME } " \
--keyversion-key = " ${ KMS_KEY_NAME } " \
--keyversion = " ${ KMS_KEY_VERSION } "
PKIX (local key)
To create the attestation using the local key, do the following:
Generate the attestation payload:
Note: In the following command, while an ${IMAGE_PATH} is required to
create the signature payload for the attestation, only the ${IMAGE_DIGEST}
is used at deploy time. This means you can deploy an identical container
image from multiple locations with the same attestation.
gcloud container binauthz create-signature-payload \
--artifact-url=${IMAGE_TO_ATTEST} > /tmp/generated_payload.json
The payload JSON file has the following contents:
{
"critical": {
"identity": {
"docker-reference": "us-docker.pkg.dev/google-samples/containers/gke/hello-app"
},
"image": {
"docker-manifest-digest": "sha256:c62ead5b8c15c231f9e786250b07909daf6c266d0fcddd93fea
882eb722c3be4"
},
"type": "Google cloud binauthz container signature"
}
}
To sign the payload with your PKIX private key and generate a
signature file, run the following command:
openssl dgst -sha256 -sign ${PRIVATE_KEY_FILE} /tmp/generated_payload.json > /tmp/ec_signature
The signature file is the signed version of the payload JSON file
you created earlier in this guide.
Create and validate the attestation:
gcloud container binauthz attestations create \
--project="${PROJECT_ID}" \
--artifact-url="${IMAGE_TO_ATTEST}" \
--attestor="projects/${PROJECT_ID}/attestors/${ATTESTOR_NAME}" \
--signature-file=/tmp/ec_signature \
--public-key-id="${PUBLIC_KEY_ID}" \
--validate
Replace PUBLIC_KEY_ID with the public key id that you found in
Generate a PKIX key pair above.
The validate flag checks that the attestation can be verified by the
attestor you configured in your policy.
Verify that the attestation was created:
gcloud container binauthz attestations list \
--attestor=$ATTESTOR_NAME --attestor-project=$PROJECT_ID
For more information on creating attestations, see
Creating Attestations .
Retest the policy
Again, test the policy by deploying a sample container image to the cluster.
This time, you must deploy the image using the digest rather than a tag like
1.0 or latest , as Binary Authorization will use the digest to look up
attestations. Here, Binary Authorization allows the image to be deployed because
the required attestation has been made.
To deploy the image, follow these steps:
kubectl run hello-server --image ${IMAGE_TO_ATTEST} --port 8080
To verify that the image was deployed:
kubectl get pods
The command prints a message similar to the following, which indicates that
deployment was successful:
NAME READY STATUS RESTARTS AGE
hello-server-579859fb5b-h2k8s 1/1 Running 0 1m
Clean up
To avoid incurring charges to your Google Cloud account for the resources used in this
tutorial, either delete the project that contains the resources, or keep the project and
delete the individual resources.
Delete the cluster that you created in GKE:
gcloud container clusters delete \
--zone=us-central1-a \
test-cluster
What's next
Learn more about Binary Authorization
Learn key concepts used in Binary Authorization
Use the built-by-cloud-build attestor to deploy only images built by Cloud Build ( Preview ).
Enable dry run mode to disable enforcement
Use breakglass to bypass enforcement
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
