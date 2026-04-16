---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T05:36:38.569Z"
product_name: "App Engine Admin API"
product_slug: "app-engine-admin-api"
feature_name: "Prospective Search API deprecation"
feature_slug: "prospective-search-api-deprecation"
latest_feature_date: "2015-10-29"
deprecation_date: "2015-12-01"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1"
  - "https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc"
  - "https://docs.cloud.google.com/appengine/docs/standard/services/search/facet-search"
keywords:
  - "prospective"
  - "search"
  - "deprecation"
  - "restricted"
  - "existing"
  - "users"
  - "scheduled"
  - "full"
---

# Prospective Search API deprecation

Product: App Engine Admin API
Coverage: MEDIUM

## Step 02 Summary

The Prospective Search API is restricted to existing users and scheduled for full shutdown; deprecated on 2015-12-01.

## Extended Definition

The Prospective Search API is restricted to existing users and scheduled for full shutdown; deprecated on 2015-12-01.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- [https://docs.cloud.google.com/appengine/docs/standard/services/search/facet-search](https://docs.cloud.google.com/appengine/docs/standard/services/search/facet-search)

## Supporting Pages

### "Package google.appengine.v1 \_|\_ App Engine Admin API \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1](https://docs.cloud.google.com/appengine/docs/admin-api/reference/rpc/google.appengine.v1)
- Source ID: `site-docs-reference-4`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- Example: "myapp.appspot.com" failure threshold uint32 Number of consecutive failed checks required before removing traffic. success threshold uint32 Number of consecutive successful checks required before receiving traffic. check interval Duration Interval between health checks. timeout Duration Time before the check is considered failed. app start timeout Duration A maximum time limit on application initialization, measured from moment the application successfully replies to a healthcheck until it is ready to serve traffic.
- Authorization requires the following IAM permission on the specified resource parent : appengine.applications.update domain mapping DomainMapping Domain mapping configuration. override strategy DomainOverrideStrategy Whether the domain creation should override any existing mappings for this domain.
- Fields name string Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1. egress setting EgressSetting The egress setting for the connector, controlling what traffic is diverted through it.
- Unhealthy instances are stopped and replaced with new instances Only returned in GET requests if view=FULL is set. nobuild files regex string Files that match this pattern will not be built into this version.

### "Connecting to a VPC network \_|\_ App Engine standard environment \_|\_\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc](https://docs.cloud.google.com/appengine/docs/standard/connecting-vpc)
- Source ID: `site-docs-reference`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- Create a connector using an existing subnet : gcloud compute networks vpc-access connectors create CONNECTOR NAME \ --region REGION \ --subnet SUBNET NAME \ --subnet-project HOST PROJECT ID \ --min-instances MIN \ --max-instances MAX \ --machine-type MACHINE TYPE Replace the following: CONNECTOR NAME : a name for your connector, matching Compute Engine naming conventions , with the additional requirements that the name must be less than 21 characters long, and that hyphens (-) count as two characters.
- RESOURCE CIDR RANGE : the CIDR range for the connector whose access you are restricting VPC NETWORK : the name of your VPC network VPC CONNECTOR NETWORK TAG : the universal VPC connector network tag if you want the rule to apply to all existing VPC connectors and any VPC connectors made in the future.
- After you verify that the organization policy in dry-run mode works as intended, set the live policy with the org-policies set-policy command and the spec flag: gcloud org-policies set-policy POLICY PATH --update-mask = spec Replace POLICY PATH with the full path to your organization policy YAML file.
- When a connector and its VPC network are in different projects, a Shared VPC network administrator must create the connector's subnet in the Shared VPC network before you can create the connector, and you must create the connector using an existing subnet.

### "Faceted search \_|\_ App Engine standard environment \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/appengine/docs/standard/services/search/facet-search](https://docs.cloud.google.com/appengine/docs/standard/services/search/facet-search)
- Source ID: `site-docs-reference-required-5`
- Final score: 67
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- FacetRange ( start = 8 ), ], ), ], ) results = index . search ( query ) for facet in results . facets : print ( "facet {} " . format ( facet . name )) for value in facet . values : print ( " {} : count= {} , refinement token= {} " . format ( value . label , value . count , value . refinement token ) ) The values in a single FacetRequest must all be the same type, either a list of string values or, for numbers, a list of FacetRanges , which are intervals that are closed on the left (start), and open on the right (end).
- Query ( "name:x86" , return facets = [ "type" , "ram size gb" ]) results = index . search ( query ) for facet in results . facets : print ( "facet {} " . format ( facet . name )) for value in facet . values : print ( " {} : count= {} , refinement token= {} " . format ( value . label , value . count , value . refinement token ) ) When you retrieve facets by name, by default only the 10 most often occurring values for a facet will be returned.
- Query ( "name:x86" , enable facet discovery = True ) results = index . search ( query ) for facet in results . facets : print ( "facet {} ." . format ( facet . name )) for value in facet . values : print ( " {} : count= {} , refinement token= {} " . format ( value . label , value . count , value . refinement token ) ) When you retrieve facets by discovery, by default only the 10 most often occurring values for a facet will be returned.
- Selecting facets by name and value To retrieve information only about particular values of a facet, add a return facets parameter that includes a FacetRequest object with a values list: def facet by name and value ( index ): Create the query and specify to return the "type" facet with values "computer" and "printer" and the "ram size gb" facet with value in the ranges [0,4), [4, 8), and [8, max]. query = search .

