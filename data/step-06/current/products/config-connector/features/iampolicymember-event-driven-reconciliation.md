---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T05:27:03.283Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "IAMPolicyMember event-driven reconciliation"
feature_slug: "iampolicymember-event-driven-reconciliation"
latest_feature_date: "2023-01-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember"
keywords:
  - "iampolicymember"
  - "event"
  - "driven"
  - "reconciliation"
  - "supports"
---

# IAMPolicyMember event-driven reconciliation

Product: Config Connector
Coverage: LOW

## Step 02 Summary

IAMPolicyMember supports event-driven reconciliation.

## Extended Definition

IAMPolicyMember supports event-driven reconciliation.

## Evidence Summary

Fast-mode lexical matching selected 1 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember)

## Supporting Pages

### IAMPolicyMember | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember)
- Source ID: `site-iam-reference`
- Final score: 47
- Re-rank relevance: N/A

Evidence snippets:
- IAMPolicyMember Config Connector Google Cloud Documentation Source URL: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember See the License for the specific language governing permissions and # limitations under the License. # Replace ${PROJECT ID?} and ${ORG ID?} below with your desired project and # organization IDs respectively. apiVersion: iam.cnrm.cloud.google.com/v1beta1 kind: IAMPolicyMember metadata: name: iampolicymember-sample-orglevel spec: member: serviceAccount:iampolicymember-dep-orglevel@${PROJECT ID?}.iam.gserviceaccount.com role: roles/storage.admin resourceRef: kind: Organization external: &quot;${ORG ID?}&quot; --- # Replace ${PROJECT ID?} below with your desired project ID.

