---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.443Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Request host and path IAM Conditions"
feature_slug: "request-host-and-path-iam-conditions"
latest_feature_date: "2025-06-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/securing/managing-access"
  - "https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-java"
  - "https://docs.cloud.google.com/run/docs/reference/rest/Shared.Types/GetIamPolicyRequest"
keywords:
  - "conditions"
  - "attributes"
  - "path"
  - "host"
  - "request"
  - "supports"
---

# Request host and path IAM Conditions

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run supports using request host and request path attributes in IAM Conditions for service invocation access control.

## Extended Definition

Cloud Run supports using request host and request path attributes in IAM Conditions for service invocation access control.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/securing/managing-access](https://docs.cloud.google.com/run/docs/securing/managing-access)
- [https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-java](https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-java)
- [https://docs.cloud.google.com/run/docs/reference/rest/Shared.Types/GetIamPolicyRequest](https://docs.cloud.google.com/run/docs/reference/rest/Shared.Types/GetIamPolicyRequest)

## Supporting Pages

### Access control with IAM \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/securing/managing-access](https://docs.cloud.google.com/run/docs/securing/managing-access)
- Source ID: `site-iam-reference`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Run supports the ( request.host ) and ( request.path ) condition attributes to grant conditional access when invoking Cloud Run services.
- To grant conditional access with the request.host and request.path attributes when invoking Cloud Run services, add the condition field when running the following command: gcloud run services add-iam-policy-binding SERVICE NAME \ --member= PRINCIPAL \ --role= ROLE \ --region= REGION \ --condition=[ KEY = VALUE ,...] Replace: SERVICE NAME with the service name (for example, my-service ).
- The URL follows the format of LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME / PATH : TAG Verify that the check is re-enabled after deployment by navigating to the service's HTTPS endpoint.
- The URL follows the format of LOCATION -docker.pkg.dev/ PROJECT ID / REPO NAME / PATH : TAG Verify that the check is disabled after deployment by navigating to the service's HTTPS endpoint.

### "Quickstart: build and create a Java job in Cloud Run \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-java](https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-java)
- Source ID: `site-docs-reference-2`
- Final score: 45
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Removing or replacing it should not affect the execution of the samples in anyway . -- > < parent > < groupId>com . google . cloud . samples < / groupId > < artifactId>shared - configuration < / artifactId > < version>1 .2.0 < / version > < / parent > < properties > < project . build . sourceEncoding>UTF - 8 < / project . build . sourceEncoding > < project . reporting . outputEncoding>UTF - 8 < / project . reporting . outputEncoding > < maven . compiler . target>17 < / maven . compiler . target > < maven . compiler . source>17 < / maven . compiler . source > < / properties > < dependencyManagement > < dependencies > < dependency > < artifactId>libraries - bom < / artifactId > < groupId>com . google . cloud < / groupId > < scope>import < / scope > < type>pom < / type > < version>26 .32.0 < / version > < / dependency > < / dependencies > < / dependencyManagement > < dependencies > < dependency > < groupId>junit < / groupId > < artifactId>junit < / artifactId > < version>4 .13.2 < / version > < scope>test < / scope > < / dependency > < dependency > < groupId>com . google . truth < / groupId > < artifactId>truth < / artifactId > < version>1 .4.0 < / version > < scope>test < / scope > < / dependency > < dependency > < groupId>com . google . cloud < / groupId > < artifactId>google - cloud - logging < / artifactId > < scope>test < / scope > < / dependency > < / dependencies > < build > < plugins > < plugin > < groupId>org . apache . maven . plugins < / groupId > < artifactId>maven - jar - plugin < / artifactId > < version>3 .3.0 < / version > < configuration > < archive > < manifest > < addClasspath>true < / addClasspath > < mainClass>com . example .
- You may obtain a copy of the License at http : //www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing , software distributed under the License is distributed on an "AS IS" BASIS , WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND , either express or implied .
- Home Documentation Application hosting Cloud Run Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.

### GetIamPolicyRequest \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/rest/Shared.Types/GetIamPolicyRequest](https://docs.cloud.google.com/run/docs/reference/rest/Shared.Types/GetIamPolicyRequest)
- Source ID: `site-api-reference`
- Final score: 39
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting Cloud Run Reference Send feedback GetIamPolicyRequest Stay organized with collections Save and categorize content based on your preferences.
- JSON representation { "resource" : string , "options" : { object ( GetPolicyOptions ) } } Fields resource string REQUIRED: The resource for which the policy is being requested.
- JSON representation { "requestedPolicyVersion" : integer } Fields requestedPolicyVersion integer Optional.
- JSON representation GetPolicyOptions JSON representation Request message for GetIamPolicy method.

