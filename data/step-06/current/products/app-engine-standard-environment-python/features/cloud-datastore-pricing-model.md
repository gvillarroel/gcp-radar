---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:15:56.162Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Cloud Datastore pricing model"
feature_slug: "cloud-datastore-pricing-model"
latest_feature_date: "2016-07-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore"
  - "https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
keywords:
  - "effective"
  - "pricing"
  - "model"
  - "datastore"
  - "made"
  - "new"
  - "was"
  - "the"
---

# Cloud Datastore pricing model

Product: App Engine standard environment Python
Coverage: LOW

## Step 02 Summary

The new Cloud Datastore pricing model was made effective.

## Extended Definition

The new Cloud Datastore pricing model was made effective.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore)
- [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)

## Supporting Pages

### "Package google.golang.org/appengine/v2/datastore (v2.0.6) \_|\_ App Engine\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore)
- Source ID: `site-docs-reference`
- Final score: 122
- Re-rank relevance: N/A

Evidence snippets:
- For example, given these definitions: type Inner1 struct { W int32 X string } type Inner2 struct { Y float64 } type Inner3 struct { Z bool } type Outer struct { A int16 I [] Inner1 J Inner2 Inner3 } then an Outer's properties would be equivalent to those of: type OuterEquivalent struct { A int16 IDotW [] int32 datastore:"I.W" IDotX [] string datastore:"I.X" JDotY float64 datastore:"J.Y" Z bool } If Outer's embedded Inner3 field was tagged as datastore:&quot;Foo&quot; then the equivalent field would instead be: FooDotZ bool datastore:&quot;Foo.Z&quot; .
- Key type Key struct { // contains filtered or unexported fields } Key represents the datastore key for a stored entity, and is immutable. func DecodeKey func DecodeKey ( encoded string ) ( Key , error ) DecodeKey decodes a key from the opaque representation returned by Encode. func NewIncompleteKey func NewIncompleteKey ( c context .
- The IDs in the range returned will not be used by the datastore's automatic ID sequence generator and may be used with NewKey without conflict.
- New ( "datastore: invalid key" ) // ErrNoSuchEntity is returned when no entity was found for a given key.

### "Configure Datastore indexes with index.yaml \_|\_ App Engine standard environment\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml](https://docs.cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml)
- Source ID: `site-docs-reference`
- Final score: 78
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- When you are sure that old indexes are no longer needed, you can delete them from App Engine as follows: gcloud datastore indexes cleanup index.yaml Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- When you are testing in your local environment, you can use the gcloud emulator command to start a service that emulates Datastore before you run your app: gcloud beta emulators datastore start --data-dir DATA-DIR Use the --data-dir flag to specify the directory where the auto-generated index.yaml file will appear.
- This gives you the opportunity to leave an older version of the app running while new indexes are being built, or to revert to the older version immediately if a problem is discovered with a newer version.
- Each element in this list has the following elements: name The datastore name of the property. direction The direction to sort, either asc for ascending or desc for descending.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-root`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- Set the priority for this rule to be a lower value than the priority of the rule you made in the previous step. gcloud compute firewall-rules create RULE NAME \ --allow = PROTOCOL \ --destination-ranges = RESOURCE CIDR RANGE \ --direction = EGRESS \ --network = VPC NETWORK \ --target-tags = VPC CONNECTOR NETWORK TAG \ --priority = PRIORITY Replace the following: RULE NAME : the name of your new firewall rule.
- Set the priority for this rule to be a lower value than the priority of the rule you made in the previous step. gcloud compute firewall-rules create RULE NAME \ --allow = PROTOCOL \ --source-ranges = VPC CONNECTOR CIDR RANGE \ --direction = INGRESS \ --network = VPC NETWORK \ --target-tags = RESOURCE TAG \ --priority = PRIORITY Replace the following: RULE NAME : the name of your new firewall rule.
- Set the priority for this rule to be a lower value than the priority of the rule you made in the previous step. gcloud compute firewall-rules create RULE NAME \ --allow = PROTOCOL \ --source-tags = VPC CONNECTOR NETWORK TAG \ --direction = INGRESS \ --network = VPC NETWORK \ --target-tags = RESOURCE TAG \ --priority = PRIORITY Replace the following: RULE NAME : the name of your new firewall rule.
- Create a connector and a new subnet : gcloud compute networks vpc-access connectors create CONNECTOR NAME \ --region REGION \ --network VPC NETWORK \ --range IP RANGE --min-instances MIN \ --max-instances MAX \ --machine-type MACHINE TYPE Replace the following: CONNECTOR NAME : a name for your connector, matching Compute Engine naming conventions , with the additional requirements that the name must be less than 21 characters long, and that hyphens (-) count as two characters.

