---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:03.404Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "BillingAccount IAMPolicy support"
feature_slug: "billingaccount-iampolicy-support"
latest_feature_date: "2022-02-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/overview"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember"
keywords:
  - "billingaccount"
  - "iampolicy"
  - "extends"
  - "to"
  - "resources"
---

# BillingAccount IAMPolicy support

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

IAMPolicy support extends to BillingAccount resources.

## Extended Definition

IAMPolicy support extends to BillingAccount resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/overview](https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/overview)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember)

## Supporting Pages

### Organizing your resources | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/overview](https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/overview)
- Source ID: `site-docs-root`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Organizing your resources Config Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/how-to/organizing-resources/overview Config Connector · Start free ... on your preferences.
- Config Connector can create and manage Google Cloud resources at the project-level, folder-level, or organization-level scope....

### IAMPolicy | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy)
- Source ID: `site-iam-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- IAMPolicy Config Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy If you want finer-grained control over audit configs, use # IAMAuditConfig. apiVersion: iam.cnrm.cloud.google.com/v1beta1 kind: IAMPolicy metadata: name: iampolicy-sample-project spec: resourceRef: kind: Project name: iampolicy-dep-project bindings: - members: # Replace ${GSA EMAIL?} with the Config Connector service account&#x27;s # email address.
- This ensures that the Config Connector service account # can continue to manage the referenced project. - &quot;serviceAccount:${GSA EMAIL?}&quot; role: roles/owner - members: - serviceAccount:iampolicy-dep-project@iampolicy-dep-project.iam.gserviceaccount.com rol

### IAMPolicyMember | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember)
- Source ID: `site-iam-reference`
- Final score: 86
- Re-rank relevance: N/A

Evidence snippets:
- IAMPolicyMember Config Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember See the License for the specific language governing permissions and # limitations under the License. # Replace ${PROJECT ID?} and ${ORG ID?} below with your desired project and # organization IDs respectively. apiVersion: iam.cnrm.cloud.google.com/v1beta1 kind: IAMPolicyMember metadata: name: iampolicymember-sample-orglevel spec: member: serviceAccount:iampolicymember-dep-orglevel@${PROJECT ID?}.iam.gserviceaccount.com role: roles/storage.admin resourceRef: kind: Organization external: &quot;${ORG ID?}&quot; --- # Replace ${PROJECT ID?} below with your desired project ID.

