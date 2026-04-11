---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:15:56.170Z"
product_name: "App Engine standard environment Python"
product_slug: "app-engine-standard-environment-python"
feature_name: "Faceted Search"
feature_slug: "faceted-search"
latest_feature_date: "2015-09-25"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/search"
  - "https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
keywords:
  - "promoted"
  - "faceted"
  - "search"
  - "generally"
  - "available"
  - "was"
  - "for"
  - "to"
---

# Faceted Search

Product: App Engine standard environment Python
Coverage: LOW

## Step 02 Summary

Faceted Search was promoted to generally available for App Engine Python.

## Extended Definition

Faceted Search was promoted to generally available for App Engine Python.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/search](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/search)
- [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)

## Supporting Pages

### "Package google.golang.org/appengine/v2/search (v2.0.6) \_|\_ App Engine\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/search](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/search)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Example code: // A and B are renamed to a and b. // A, C and I are facets. // D's tag is equivalent to having no tag at all (E). // F and G are ignored entirely by the search package. // I has tag information for both the search and json packages. type TaggedStruct struct { A float64 search:"a,facet" B float64 search:"b" C float64 search:",facet" D float64 search:"" E float64 F float64 search:"-" G float64 search:"-,facet" I float64 search:",facet" json:"i" } The FieldLoadSaver Interface A document's contents can also be represented by any type that implements the FieldLoadSaver interface.
- FacetSearchOption type FacetSearchOption interface { // contains filtered or unexported methods } FacetSearchOption controls what facet information is returned in search results. func AutoFacetDiscovery func AutoFacetDiscovery ( facetLimit , valueLimit int ) FacetSearchOption AutoFacetDiscovery returns a FacetSearchOption which enables automatic facet discovery for the search.
- Name string // Value is the facet value. // // When being used in documents (for example, in // DocumentMetadata.Facets), the valid types are: // - search.Atom, // - float64. // // When being used in SearchOptions.Refinements or being returned // in FacetResult, the valid types are: // - search.Atom, // - search.Range.
- Iterator type Iterator struct { // contains filtered or unexported fields } Iterator is the result of searching an index for a query or listing an index. func ( Iterator) Count func ( t Iterator ) Count () int Count returns an approximation of the number of documents matched by the query.

### "Package google.golang.org/appengine/v2/datastore (v2.0.6) \_|\_ App Engine\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore](https://docs.cloud.google.com/appengine/docs/standard/go/reference/services/bundled/latest/datastore)
- Source ID: `site-docs-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- For example, given these definitions: type Inner1 struct { W int32 X string } type Inner2 struct { Y float64 } type Inner3 struct { Z bool } type Outer struct { A int16 I [] Inner1 J Inner2 Inner3 } then an Outer's properties would be equivalent to those of: type OuterEquivalent struct { A int16 IDotW [] int32 datastore:"I.W" IDotX [] string datastore:"I.X" JDotY float64 datastore:"J.Y" Z bool } If Outer's embedded Inner3 field was tagged as datastore:&quot;Foo&quot; then the equivalent field would instead be: FooDotZ bool datastore:&quot;Foo.Z&quot; .
- New ( "datastore: invalid key" ) // ErrNoSuchEntity is returned when no entity was found for a given key.
- StructType is the type of the struct pointed to by the destination argument passed to Get or to Iterator.Next. func ( ErrFieldMismatch) Error func ( e ErrFieldMismatch ) Error () string Iterator type Iterator struct { // contains filtered or unexported fields } Iterator is the result of running a query. func ( Iterator) Cursor func ( t Iterator ) Cursor () ( Cursor , error ) Cursor returns a cursor for the iterator's current location. func ( Iterator) Next func ( t Iterator ) Next ( dst interface {}) ( Key , error ) Next returns the key of the next result.
- Example code: // A and B are renamed to a and b. // A, C and J are not indexed. // D's tag is equivalent to having no tag at all (E). // I is ignored entirely by the datastore. // J has tag information for both the datastore and json packages. type TaggedStruct struct { A int datastore:"a,noindex" B int datastore:"b" C int datastore:",noindex" D int datastore:"" E int I int datastore:"-" J int datastore:",noindex" json:"j" } Structured Properties If the struct pointed to contains other structs, then the nested or embedded structs are flattened.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- After you have created the YAML file for a new custom constraint, you must set it up to make it available for organization policies in your organization.
- For more information about the resources available to write conditions against, see Supported resources .
- Terraform You can use a Terraform resource to enable the vpcaccess.googleapis.com API. resource "google project service" "vpcaccess-api" { project = var.project id # Replace this with your project ID in quotes service = "vpcaccess.googleapis.com" } You can use Terraform modules to create a VPC network and subnet and then create the connector. module "test-vpc-module" { source = "terraform-google-modules/network/google" version = " > 16.0" project id = var.project id # Replace this with your project ID in quotes network name = "my-serverless-network" mtu = 1460 subnets = [ { subnet name = "serverless-subnet" subnet ip = "10.10.10.0/28" subnet region = "us-central1" } ] } module "serverless-connector" { source = "terraform-google-modules/network/google//modules/vpc-serverless-connector-beta" version = " > 16.0" project id = var.project id vpc connectors = [{ name = "central-serverless" region = "us-central1" subnet name = module.test-vpc-module.subnets["us-central1/serverless-subnet"].name host project id = var.host project id # Specify a host project id for shared VPC machine type = "e2-standard-4" min instances = 2 max instances = 7 } Uncomment to specify an ip cidr range , { name = "central-serverless2" region = "us-central1" network = module.test-vpc-module.network name ip cidr range = "10.10.11.0/28" subnet name = null machine type = "e2-standard-4" min instances = 2 max instances = 7 } ] depends on = [ google project service.vpcaccess-api ] } Configure your service to use a connector After you have created a Serverless VPC Access connector, you must configure each service in your App Engine app that you want to connect to your VPC network.
- Test the custom constraint To test the example that restricts ingress settings, deploy a connector in the project with network set to default : gcloud compute networks vpc-access connectors create org-policy-test \ --project = PROJECT ID \ --region = REGION ID \ --network = default The output is the following: Operation denied by custom org policies: ["customConstraints/custom.defaultNetworkConstraint": "Require network to not be set to default."] Example custom organization policies for common use cases The following table provides examples of custom constraints that you might find useful with Serverless VPC Access connectors: Description Constraint syntax Require that Serverless VPC Access connectors can only use a specific network. name : organizations/ ORGANIZATION ID /customConstraints/custom.allowlistNetworks resourceTypes : - vpcaccess.googleapis.com/Connector methodTypes : - CREATE condition : "resource.network == 'allowlisted-network'" actionType : ALLOW displayName : allowlistNetworks description : Require connectors to use a specific network.

