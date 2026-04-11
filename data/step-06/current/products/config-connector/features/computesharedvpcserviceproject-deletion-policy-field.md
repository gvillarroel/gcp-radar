---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:03.268Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "ComputeSharedVPCServiceProject deletion policy field"
feature_slug: "computesharedvpcserviceproject-deletion-policy-field"
latest_feature_date: "2023-03-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy"
keywords:
  - "computesharedvpcserviceproject"
  - "deletion"
  - "policy"
  - "field"
  - "config"
  - "connector"
  - "now"
  - "supports"
---

# ComputeSharedVPCServiceProject deletion policy field

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

Config Connector now supports a deletionPolicy field for the ComputeSharedVPCServiceProject resource.

## Extended Definition

Config Connector now supports a deletionPolicy field for the ComputeSharedVPCServiceProject resource.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy)

## Supporting Pages

### IAMPolicy | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy)
- Source ID: `site-iam-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- IAMPolicy Config Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy If you want finer-grained control over audit configs, use # IAMAuditConfig. apiVersion: iam.cnrm.cloud.google.com/v1beta1 kind: IAMPolicy metadata: name: iampolicy-sample-project spec: resourceRef: kind: Project name: iampolicy-dep-project bindings: - members: # Replace ${GSA EMAIL?} with the Config Connector service account&#x27;s # email address.
- This ensures that the Config Connector service account # can continue to manage the referenced project. - &quot;serviceAccount:${GSA EMAIL?}&quot; role: roles/owner - members: - serviceAccount:iampolicy-dep-project@iampolicy-dep-project.iam.gserviceaccount.com rol

### IAMPolicyMember | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember)
- Source ID: `site-iam-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- IAMPolicyMember Config Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember See the License for the specific language governing permissions and # limitations under the License. # Replace ${PROJECT ID?} and ${ORG ID?} below with your desired project and # organization IDs respectively. apiVersion: iam.cnrm.cloud.google.com/v1beta1 kind: IAMPolicyMember metadata: name: iampolicymember-sample-orglevel spec: member: serviceAccount:iampolicymember-dep-orglevel@${PROJECT ID?}.iam.gserviceaccount.com role: roles/storage.admin resourceRef: kind: Organization external: &quot;${ORG ID?}&quot; --- # Replace ${PROJECT ID?} below with your desired project ID.

### IAMPartialPolicy | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy)
- Source ID: `site-iam-reference`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- IAMPartialPolicy Config Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy You cannot reference BigQueryDataset resources using IAMPolicy, IAMPartialPolicy, and IAMPolicyMember since BigQueryDataset does not support IAM. bindings: - condition: description: string expression: string title: string members: - member: string memberFrom: bigQueryConnectionConnectionRef: name: string namespace: string type: string logSinkRef: name: string namespace: string serviceAccountRef: name: string namespace: string serviceIdentityRef: name: string namespace: string sqlInstanceRef: name: string namespace: string role: string resourceRef: apiVersion: string external: string kind: string name: string namespace: string

