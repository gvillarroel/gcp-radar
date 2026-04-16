---
title: "Configure certificate-based access for Workload Identity Federation \_|\_\
  \ Access Context Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/access-context-manager/docs/configure_cba_for_workloads
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/access-context-manager/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/access-context-manager/docs/configure_cba_for_workloads
  title: "Configure certificate-based access for Workload Identity Federation \_|\_\
    \ Access Context Manager \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Access Context Manager
Guides
Send feedback
Configure certificate-based access for Workload Identity Federation
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This document describes how to configure certificate-based access for
Workload Identity Federation using
X.509 certificates .
Certificate-based access uses Mutual TLS (mTLS) to authenticate both the
client and server during a TLS handshake. In this process, an mTLS binding
incorporates policies based on the transport context and uses the state of the
client's certificate within the TLS session to make authorization decisions.
For X.509 workload identity federation, an mTLS binding ensures that the
entire authentication flow is securely tied to a trusted workload. This
mitigates the risk of credential theft, because the authentication is bound to a
specific, trusted endpoint.
Certificate-based access for Workload Identity Federation configuration overview
The following provides a high-level overview of the process to configure
certificate-based access for Workload Identity Federation:
Establish a workload identity federation by configuring trust with the
X.509 certificates' trust anchor.
Create an access level for certificate-based access.
Add the access level to a Context-Aware Access policy that enforces the mTLS binding.
Before you begin
Verify that you have the following prerequisites:
The latest version of the Google Cloud CLI
To update to the latest version of the Google Cloud CLI, run the following
command:
gcloud components update
If you need to install the Google Cloud CLI, see
Install the Google Cloud CLI .
A Workload Identity Federation configuration
that uses your X.509 certificates trust anchor
To use this feature, complete the following form to be added to an
allowlist: Allowlist request form .
You will be contacted after you are added to the allowlist.
Create an access level for certificates
Create an mTLS
access level. The mTLS access level validates
certificates when determining access to resources.
Console
In Access Context Manager, create a custom access level
and enter the following expression in the CEL expression field:
request.auth.matchesMtlsTokens(origin) == true .
gcloud
To create a custom access level, run the following command:
gcloud access-context-manager levels create ACCESS_LEVEL_NAME \
--title = TITLE \
--custom-level-spec = FILE \
--description = DESCRIPTION \
--policy = POLICY_NAME
Replace the following:
ACCESS_LEVEL_NAME : the name of the access level.
TITLE : the title of the access level.
FILE : a YAML file with the following
content: expression: "request.auth.matchesMtlsTokens(origin) == true" .
DESCRIPTION : a description of the access level.
POLICY_NAME : the name of the access policy.
Export the access level that you created to an environment variable. This
variable is used in subsequent steps.
export ACCESS_LEVEL_ID= ACCESS_LEVEL_ID
Replace ACCESS_LEVEL_ID with the access level
name—for example, accessPolicies/12345/accessLevels/acl_1 .
Create a Context-Aware Access binding for a workload identity pool
Set the following environment variables.
export ORG_ID= ORG_ID
export CALLER_PROJECT_ID= CALLER_PROJECT_ID
export FEDERATED_PRINCIPAL= FEDERATED_PRINCIPAL
Replace the following:
ORG_ID : the ID of your organization.
CALLER_PROJECT_ID : the ID of the project to use to call the
APIs.
FEDERATED_PRINCIPAL : the name of the identity principal in the
workload identity pool that adheres to the Context-Aware Access policy. You can use one
of the following options:
a single identity with the format - principal://iam.googleapis.com/projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ POOL_ID /subject/ SUBJECT_ATTRIBUTE_VALUE
OR
all the identities in a pool with the format - principalSet://iam.googleapis.com/projects/ PROJECT_NUMBER /locations/global/workloadIdentityPools/ POOL_ID /*
gcloud
gcloud alpha access-context-manager cloud-bindings create \
--organization= ORG_ID \
--federated-principal= FEDERATED_PRINCIPAL \
--level= ACCESS_LEVEL_ID
--dry-run-level= DRY_RUN_ACCESS_LEVEL_ID
Replace the following:
ACCESS_LEVEL_ID : the access level name.
DRY_RUN_ACCESS_LEVEL_ID : the dry run access
level name. We recommend that you enable a
dry run policy binding
first to understand the potential impact on existing traffic.
curl
Create a JSON file with the Context-Aware Access binding.
You can provide only one access level in a request, even though the field is
repeated. You can use the following types of federated principals:
Single identity:
principal://iam.googleapis.com/projects/PROJECT_NUMBER/locations/global/workloadIdentityPools/POOL_ID/subject/SUBJECT_ATTRIBUTE_VALUE
All identities in a pool:
principalSet://iam.googleapis.com/projects/PROJECT_NUMBER/locations/global/workloadIdentityPools/POOL_ID/*
echo { \
\"principal\": { \
\"federatedPrincipal\": \"${FEDERATED_PRINCIPAL:?}\" \
},\
\"accessLevels\": [\"${ACCESS_LEVEL_ID:?}\"] \
} \
>> request.json
Use curl to send the following HTTP request.
curl -H "X-Goog-User-Project: ${ CALLER_PROJECT_ID :? } " -X POST \
-H "Authorization: Bearer $( gcloud auth print-access-token ) " \
-H "Content-Type: application/json; charset=utf-8" \
-d @request.json \
"https://accesscontextmanager.googleapis.com/v1alpha/organizations/ ${ ORG_ID :? } /gcpUserAccessBindings"
Authorize using the Google Cloud client libraries
To authorize Workforce Identity Federation workloads using the
Google Cloud client libraries, complete the following steps.
Create an Application Default Credentials (ADC) file configured for
Workforce Identity Federation authentication.
gcloud iam workload-identity-pools create-cred-config IDENTITY_POOL_ID \
--credential-cert-path WORKLOAD_CERTIFICATE_PATH \
--credential-cert-private-key-path WORKLOAD_KEY_PATH \
--output-file ADC_FILE_OUTPUT_PATH
Replace the following:
IDENTITY_POOL_ID : the ID of your workload identity pool.
WORKLOAD_CERTIFICATE_PATH : the path to your workload's
certificate file.
WORKLOAD_KEY_PATH : the path to your workload's private key
file.
ADC_FILE_OUTPUT_PATH : the output path for the ADC file.
This command also generates a certificate configuration file in your
gcloud CLI default configuration directory. The certificate
configuration file supports initial authentication and establishes mTLS
handshakes for subsequent requests to Google Cloud resources.
Set an environment variable to point to the ADC file. This makes your
credentials discoverable by Google client libraries.
export GOOGLE_APPLICATION_CREDENTIALS = ${ application_default_credentials .json }
This step is optional if you omit the --output-file argument when you
generate the ADC file. If you omit the argument, the ADC file is created and
read from your gcloud CLI default configuration directory.
The feature supports the client libraries in Go, Python, and Java.
You need to set the environment variable to turn on mTLS for Python and Java.
To quickly establish and test the mTLS access to the Google Cloud APIs,
you can use the following code examples.
Go
Use the following example to create a Go file, such as
golang_test.go .
package golang_test
import (
"io"
"log"
"testing"
"cloud.google.com/go/auth/credentials"
"cloud.google.com/go/auth/httptransport"
)
func TestGoExample(t *testing.T) {
scopes := []string{
"https://www.googleapis.com/auth/pubsub", // Scope for Pub/Sub access
// Add other scopes as needed
}
dopts := credentials.DetectOptions{
Scopes: scopes,
}
// Create httptransport.Options with the scopes
opts := &httptransport.Options{
DetectOpts: &dopts,
}
hc, err := httptransport.NewClient(opts)
if err != nil {
t.Fatalf("NewHTTPClient: %v", err)
}
resp, err := hc.Get("https://pubsub.mtls.googleapis.com/v1/projects/ PROJECT_ID /topics")
if err != nil {
t.Fatalf("Get: %v", err)
}
t.Logf("Status: %s", resp.Status)
t.Cleanup(func() {
resp.Body.Close()
})
b, err := io.ReadAll(resp.Body)
if err != nil {
t.Fatal(err)
}
log.Println(string(b))
}
Replace PROJECT_ID with your gcloud CLI project
ID.
To run a test on a Compute Engine VM, use the following command.
go mod init example.com
go mod tidy
go test -v golang_test.go --count = 1
Python
Use the following example to create a test file, such as
python_test.py .
import google.auth
import google.auth.transport.requests
import requests
def test_go_example():
# Define the required scopes for your application
scopes = [
"https://www.googleapis.com/auth/pubsub", # Scope for Pub/Sub access
# Add other scopes as needed
]
# Obtain Application Default Credentials (ADC) with the specified scopes
credentials, _ = google.auth.default(scopes=scopes)
# Create an authorized HTTP session using the ADC credentials
authed_session = google.auth.transport.requests.AuthorizedSession(credentials)
try:
# Make a GET request to the Pub/Sub API endpoint
response = authed_session.get(
"https://pubsub.mtls.googleapis.com/v1/projects/ PROJECT_ID /topics"
)
# Check if the request was successful
response.raise_for_status() # Raise an exception for error statuses
# Log the response status and content
print(f"Status: {response.status_code}")
print(response.text)
except requests.exceptions.RequestException as e:
print(f"Error making the request: {e}")
if __name__ == "__main__":
test_go_example()
Replace PROJECT_ID with your gcloud CLI
project ID.
To run a test on a Compute Engine VM, complete the following steps.
Set up a Python virtual environment.
Install the required libraries.
pip install google-auth google-auth-httplib2 requests
Run the test:
python3 python_test.py
Authorize using plain HTTP requests
To authorize Workforce Identity Federation workloads using plain HTTP
requests, complete the following steps.
Obtain a certificate-bound access token
from Google Cloud Security Token Service through a standard mTLS
handshake.
Call the Google Cloud services with the access token you obtained from
Security Token Service. This example queries Cloud Storage.
$ curl --key ${ workload_key .pem } --cert ${ workload_cert .pem } -X GET 'https://storage.mtls.googleapis.com/{replace_with_your_resources}' -H "Authorization: Bearer $ACCESS_TOKEN "
The mTLS binding enforces the use of mTLS. Run the following command to
verify that a non-mTLS connection fails with an unauthorized error.
$ curl -X GET 'https://storage.googleapis.com/{replace_with_your_resources}' -H "Authorization: Bearer $ACCESS_TOKEN "
List the policy binding
To list the policy binding for Workload Identity Federation, run the
following command.
gcloud
The following command lists specific bindings within a given organization,
filtering for those that apply to federated principals.
gcloud alpha access-context-manager cloud-bindings list \
--organization= ORG_ID \
--filter='principal:federatedPrincipal'
curl
curl -H "X-Goog-User-Project: ${CALLER_PROJECT_ID:?}" -X GET \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
"https://accesscontextmanager.googleapis.com/v1alpha/organizations/${ORG_ID:?}/gcpUserAccessBindings?filter=principal%3Afederated_principal"
Update a policy binding
To update a policy binding, add the new access level to a JSON file and run
the following command.
gcloud
gcloud alpha access-context-manager cloud-bindings update \
--binding= BINDING_ID \
--level= NEW_ACCESS_LEVEL_ID
curl
curl -H "X-Goog-User-Project: ${CALLER_PROJECT_ID:?}" -X PATCH \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json; charset=utf-8" \
-d @request.json \
"https://accesscontextmanager.googleapis.com/v1alpha/organizations/${ORG_ID:?}/gcpUserAccessBindings/${BINDING_ID:?}?updateMask=access_levels"
Delete a policy binding
To delete a policy binding, run the following command.
gcloud
gcloud alpha access-context-manager cloud-bindings delete \
--binding= BINDING_ID
curl
curl -H "X-Goog-User-Project: ${CALLER_PROJECT_ID:?}" -X DELETE \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
"https://accesscontextmanager.googleapis.com/v1alpha/organizations/${ORG_ID:?}/gcpUserAccessBindings/${BINDING_ID:?}"
Troubleshooting
The following are some common issues and suggested actions for resolving them:
Error: 403 Forbidden, user does not have permission.
Action: Check the IAM policy to verify that the workload
identity pool has access to your Google Cloud resource.
Error: Unauthorized_client: Could not obtain a value for google.subject
from the given credential.
Action: The backend couldn't extract a value for google.subject from
your client certificate based on the attribute mapping. Check your client
certificate to verify the field you use to do the mapping has a value.
If you encounter unexpected access denials after enabling
Context-Aware Access, you can quickly unblock traffic by removing the
Context-Aware Access binding using the following command:
gcloud alpha access-context-manager cloud-bindings delete
After access is restored, review the audit log to determine why the
requests were denied.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
