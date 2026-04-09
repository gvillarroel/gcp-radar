---
title: "IAMPolicyMember | Config Connector | Google Cloud Documentation"
url: "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember"
knowledge_key: "corpus"
source_id: "site-iam-reference"
source_type: "site"
content_origin: "bx_web_fallback"
---
# IAMPolicyMember | Config Connector | Google Cloud Documentation

Source URL: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember

# See the License for the specific language governing permissions and # limitations under the License. # Replace ${PROJECT_ID?} and ${ORG_ID?} below with your desired project and # organization IDs respectively. apiVersion: iam.cnrm.cloud.google.com/v1beta1 kind: IAMPolicyMember metadata: name: iampolicymember-sample-orglevel spec: member: serviceAccount:iampolicymember-dep-orglevel@${PROJECT_ID?}.iam.gserviceaccount.com role: roles/storage.admin resourceRef: kind: Organization external: &quot;${ORG_ID?}&quot; --- # Replace ${PROJECT_ID?} below with your desired project ID.
