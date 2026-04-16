---
title: "Use Artifact Registry as a private registry for workload images \_|\_ Google\
  \ Distributed Cloud (software only) for VMware \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/artifact-registry
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/how-to/artifact-registry
  title: "Use Artifact Registry as a private registry for workload images \_|\_ Google\
    \ Distributed Cloud (software only) for VMware \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Google Distributed Cloud
Documentation
GDC for VMware
Guides
Send feedback
Use Artifact Registry as a private registry for workload images
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to configure a Google Distributed Cloud (software only) for
VMware admin cluster to use Google's
Artifact Registry as the private Docker registry
where you can store workload images. When you configure a private registry to
store workload images, the Google Distributed Cloud system images are also stored in the
private registry when you create or upgrade clusters.
Although Artifact Registry supports several different
authentication methods ,
you must use a service account key for authentication to use Artifact Registry as a
private registry. The steps on this page explain how to get the address,
credentials, and CA certificate that the
privateRegistry
section in the admin cluster configuration file requires.
Configure a credentials file
If you haven't configured authentication for the registry, follow the steps
in
Configure authentication to Artifact Registry for Docker
to configure authentication using a service account. You must use a
service account with a JSON key file for authentication.
Create a credentials configuration file, admin-creds.yaml , as shown in
the following example. The username must be "_json_key" . You can use any
value for the name field, as long it matches the value you will add to the
privateRegistry.entry field.
apiVersion : v1
kind : "CredentialFile"
items :
- name : "private-registry-creds"
username : "_json_key"
password :
In the directory where the JSON key file for the registry's service account
is located, run cat on the key file to output the contents.
Copy the entire JSON key contents and paste it in the password field. Make
sure to surround the JSON key contents with single quotes since the contents
contain double quotes. For example:
apiVersion : v1
kind : "CredentialFile"
items :
- name : "private-registry-creds"
username : "_json_key"
password : '{
"type": "service_account",
"project_id": "example-project-12345",
"private_key_id": "d2661ccb21e686658c6552cf1e0166b857091b2e",
"private_key": "-----BEGIN PRIVATE ... -----END PRIVATE KEY-----\n",
"client_email": "test-537@example-project-12345.iam.gserviceaccount.com",
"client_id": "111772984510027821291",
"auth_uri": "https://accounts.google.com/o/oauth2/auth",
"token_uri": "https://oauth2.googleapis.com/token",
"auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
"client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/test-537%40example-project-12345.iam.gserviceaccount.com",
"universe_domain": "googleapis.com"
}
'
Configure privateRegistry in the admin cluster configuration file
To use a private registry, you need to configure the privateRegistry section
when you create the admin cluster. After the cluster is created, you can't
change the privateRegistry.address , but the other settings are mutable and
you can update them if needed.
Run the following command to get the registry address:
gcloud artifacts repositories describe REGISTRY_NAME \
--project = PROJECT_ID
--location = REGION
Replace the following:
REGISTRY_NAME : the name of the registry.
PROJECT_ID : the ID of the project the registry was
created in.
LOCATION : the region that the registry was created
in, such as us-west2 .
The output is similar to the following:
Encryption: Google-managed key
Repository Size: 0.000MB
cleanupPolicyDryRun: true
createTime: '2025-01-28T03:27:57.701672Z'
dockerConfig: {}
format: DOCKER
mode: STANDARD_REPOSITORY
name: projects/example-project-12345/locations/us-west2/repositories/test
registryUri: us-west2-docker.pkg.dev/example-project-12345/test
satisfiesPzi: true
updateTime: '2025-01-28T03:27:57.701672Z'
vulnerabilityScanningConfig:
enablementConfig: INHERITED
enablementState: SCANNING_ACTIVE
lastEnableTime: '2025-01-28T03:27:49.385246079Z'
Use the registryUri value in the output for the privateRegistry.address .
Run the following command to extract the CA certificate of the Artifact Registry
endpoint and save it to a file called ar-ca.pem :
true | openssl s_client -connect REGION -docker.pkg.dev:443 -showcerts 2 >/dev/null | sed -ne '/-BEGIN/,/-END/p' > ar-ca.pem
Fill in the privateRegistry section as follows:
privateRegistry :
address : " REGISTRY_ADDRESS "
credentials :
fileRef :
path : " CREDENTIAL_FILE_PATH "
entry : "private-registry-creds"
caCertPath : " CA_CERT_PATH "
componentAccessServiceAccountKeyPath : " COMPONENT_ACCESS_KEY_PATH "
Replace the following:
REGISTRY_ADDRESS : the registryUri value.
CREDENTIAL_FILE_PATH : the full or relative path of
the admin-creds.yaml file.
CA_CERT_PATH : the full or relative path of the
ar-ca.pem file.
COMPONENT_ACCESS_KEY_PATH : the full or relative path
of the component access service account key file.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
