---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:03.273Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "ComputeBackendService edge security policy and locality load balancing"
feature_slug: "computebackendservice-edge-security-policy-and-locality-load-balancing"
latest_feature_date: "2023-02-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/edgecontainer/edgecontainernodepool"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy"
keywords:
  - "computebackendservice"
  - "edge"
  - "security"
  - "policy"
  - "and"
  - "locality"
  - "load"
  - "balancing"
---

# ComputeBackendService edge security policy and locality load balancing

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

ComputeBackendService supports edge security policy references and locality load balancing policies.

## Extended Definition

ComputeBackendService supports edge security policy references and locality load balancing policies.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/edgecontainer/edgecontainernodepool](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/edgecontainer/edgecontainernodepool)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy)

## Supporting Pages

### EdgeContainerNodePool | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/edgecontainer/edgecontainernodepool](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/edgecontainer/edgecontainernodepool)
- Source ID: `site-docs-reference`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- EdgeContainerNodePool Config Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/edgecontainer/edgecontainernodepool Documentation · Access and resource management · Config Connector · API and reference · Send feedback · Stay organized with collections Save and categorize content based on your preferences.

### IAMPolicyMember | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember)
- Source ID: `site-iam-reference`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- IAMPolicyMember Config Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember See the License for the specific language governing permissions and # limitations under the License. # Replace ${PROJECT ID?} and ${ORG ID?} below with your desired project and # organization IDs respectively. apiVersion: iam.cnrm.cloud.google.com/v1beta1 kind: IAMPolicyMember metadata: name: iampolicymember-sample-orglevel spec: member: serviceAccount:iampolicymember-dep-orglevel@${PROJECT ID?}.iam.gserviceaccount.com role: roles/storage.admin resourceRef: kind: Organization external: &quot;${ORG ID?}&quot; --- # Replace ${PROJECT ID?} below with your desired project ID.

### IAMPartialPolicy | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy)
- Source ID: `site-iam-reference`
- Final score: 52
- Re-rank relevance: N/A

Evidence snippets:
- IAMPartialPolicy Config Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy You cannot reference BigQueryDataset resources using IAMPolicy, IAMPartialPolicy, and IAMPolicyMember since BigQueryDataset does not support IAM. bindings: - condition: description: string expression: string title: string members: - member: string memberFrom: bigQueryConnectionConnectionRef: name: string namespace: string type: string logSinkRef: name: string namespace: string serviceAccountRef: name: string namespace: string serviceIdentityRef: name: string namespace: string sqlInstanceRef: name: string namespace: string role: string resourceRef: apiVersion: string external: string kind: string name: string namespace: string

