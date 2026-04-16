---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.279Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Reservation IAM policies"
feature_slug: "reservation-iam-policies"
latest_feature_date: "2025-10-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/reservations/rest"
  - "https://docs.cloud.google.com/bigquery/docs/samples/bigqueryreservation-quickstart"
  - "https://docs.cloud.google.com/bigquery/docs/reference/reservations"
keywords:
  - "reservation"
  - "iam"
  - "policies"
  - "can"
  - "now"
  - "set"
  - "directly"
  - "reservations"
---

# Reservation IAM policies

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

IAM policies can now be set directly on reservations for finer-grained resource control.

## Extended Definition

IAM policies can now be set directly on reservations for finer-grained resource control.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/reservations/rest](https://docs.cloud.google.com/bigquery/docs/reference/reservations/rest)
- [https://docs.cloud.google.com/bigquery/docs/samples/bigqueryreservation-quickstart](https://docs.cloud.google.com/bigquery/docs/samples/bigqueryreservation-quickstart)
- [https://docs.cloud.google.com/bigquery/docs/reference/reservations](https://docs.cloud.google.com/bigquery/docs/reference/reservations)

## Supporting Pages

### BigQuery Reservation API Client Libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/reservations](https://docs.cloud.google.com/bigquery/docs/reference/reservations)
- Source ID: `site-docs-reference`
- Final score: 122
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- String projectId = "YOUR PROJECT ID" ; String location = "LOCATION" ; quickStartSample ( projectId , location ); } public static void quickStartSample ( String projectId , String location ) throws IOException { try ( ReservationServiceClient client = ReservationServiceClient . create ()) { // list reservations in the project String parent = String . format ( "projects/%s/locations/%s" , projectId , location ); client . listReservations ( parent ) . iterateAll () . forEach ( res - > System . out . println ( "Reservation resource name: " + res . getName ())); // list capacity commitments in the project client . listCapacityCommitments ( parent ) . iterateAll () . forEach ( commitment - > System . out . println ( "Capacity commitment resource name: " + commitment . getName ())); } } } Node.js // Imports the Google Cloud client library const { ReservationServiceClient , } = require ( ' @google-cloud/bigquery-reservation ' ); // Creates a client const client = new ReservationServiceClient (); // project = 'my-project' // Project to list reservations for. // location = 'US' // BigQuery location. async function listReservations () { const [ reservations ] = await client . listReservations ({ parent : projects/ ${ project } /locations/ ${ location } , }); console . info ( found ${ reservations . length } reservations ); console . info ( reservations ); } async function listCapacityCommitments () { const [ commitments ] = await client . listCapacityCommitments ({ parent : projects/ ${ project } /locations/ ${ location } , }); console . info ( found ${ commitments . length } commitments ); console . info ( commitments ); } listReservations (); listCapacityCommitments (); Python import argparse from google.cloud import bigquery reservation v1 def main ( project id : str = "your-project-id" , location : str = "US" , transport : str = "grpc" ) - > None : Constructs the client for interacting with the service. client = bigquery reservation v1 .
- ListReservationsRequest ( parent = client . common location path ( project id , location ) ) total reservations = 0 for reservation in client . list reservations ( request = req ): print ( f " \t Reservation { reservation . name } " f "has { reservation . slot capacity } slot capacity." ) total reservations = total reservations + 1 print ( f " \n { total reservations } reservations processed." ) if name == " main " : parser = argparse .
- ReservationServiceClient , project id : str , location : str , ) - > None : """Prints details and summary information about reservations defined within a given admin project and location. """ print ( "Reservations in project {} in location {} " . format ( project id , location )) req = bigquery reservation v1 .
- ReservationServiceClient ; import java.io.IOException ; public class QuickstartSample { public static void main ( String ... args ) throws Exception { // TODO(developer): Replace these variables before running the sample.

### "Report capacity commitments and reservations \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/samples/bigqueryreservation-quickstart](https://docs.cloud.google.com/bigquery/docs/samples/bigqueryreservation-quickstart)
- Source ID: `site-docs-reference-required-15`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see Set up authentication for client libraries . // Imports the Google Cloud client library const { ReservationServiceClient , } = require ( ' @google-cloud/bigquery-reservation ' ); // Creates a client const client = new ReservationServiceClient (); // project = 'my-project' // Project to list reservations for. // location = 'US' // BigQuery location. async function listReservations () { const [ reservations ] = await client . listReservations ({ parent : projects/ ${ project } /locations/ ${ location } , }); console . info ( found ${ reservations . length } reservations ); console . info ( reservations ); } async function listCapacityCommitments () { const [ commitments ] = await client . listCapacityCommitments ({ parent : projects/ ${ project } /locations/ ${ location } , }); console . info ( found ${ commitments . length } commitments ); console . info ( commitments ); } listReservations (); listCapacityCommitments (); Python Before trying this sample, follow the Python setup instructions in the BigQuery quickstart using client libraries .
- String projectId = "YOUR PROJECT ID" ; String location = "LOCATION" ; quickStartSample ( projectId , location ); } public static void quickStartSample ( String projectId , String location ) throws IOException { try ( ReservationServiceClient client = ReservationServiceClient . create ()) { // list reservations in the project String parent = String . format ( "projects/%s/locations/%s" , projectId , location ); client . listReservations ( parent ) . iterateAll () . forEach ( res - > System . out . println ( "Reservation resource name: " + res . getName ())); // list capacity commitments in the project client . listCapacityCommitments ( parent ) . iterateAll () . forEach ( commitment - > System . out . println ( "Capacity commitment resource name: " + commitment . getName ())); } } } Node.js Before trying this sample, follow the Node.js setup instructions in the BigQuery quickstart using client libraries .
- ListReservationsRequest ( parent = client . common location path ( project id , location ) ) total reservations = 0 for reservation in client . list reservations ( request = req ): print ( f " \t Reservation { reservation . name } " f "has { reservation . slot capacity } slot capacity." ) total reservations = total reservations + 1 print ( f " \n { total reservations } reservations processed." ) if name == " main " : parser = argparse .
- ReservationServiceClient , project id : str , location : str , ) - > None : """Prints details and summary information about reservations defined within a given admin project and location. """ print ( "Reservations in project {} in location {} " . format ( project id , location )) req = bigquery reservation v1 .

### BigQuery Reservation API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/reservations/rest](https://docs.cloud.google.com/bigquery/docs/reference/reservations/rest)
- Source ID: `site-api-reference-required-3`
- Final score: 119
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1.projects.locations.reservations.assignments Methods create POST /v1/{parent=projects/ /locations/ /reservations/ }/assignments Creates an assignment object which allows the given project to submit jobs of a certain type using slots from the specified reservation. delete DELETE /v1/{name=projects/ /locations/ /reservations/ /assignments/ } Deletes a assignment. getIamPolicy GET /v1/{resource=projects/ /locations/ /reservations/ /assignments/ }:getIamPolicy Gets the access control policy for a resource. list GET /v1/{parent=projects/ /locations/ /reservations/ }/assignments Lists assignments. move POST /v1/{name=projects/ /locations/ /reservations/ /assignments/ }:move Moves an assignment under a new reservation. patch PATCH /v1/{assignment.name=projects/ /locations/ /reservations/ /assignments/ } Updates an existing assignment. setIamPolicy POST /v1/{resource=projects/ /locations/ /reservations/ /assignments/ }:setIamPolicy Sets an access control policy for a resource. testIamPermissions POST /v1/{resource=projects/ /locations/ /reservations/ /assignments/ }:testIamPermissions Gets your permissions on a resource.
- REST Resource: v1.projects.locations.reservations Methods create POST /v1/{parent=projects/ /locations/ }/reservations Creates a new reservation resource. delete DELETE /v1/{name=projects/ /locations/ /reservations/ } Deletes a reservation. failoverReservation POST /v1/{name=projects/ /locations/ /reservations/ }:failoverReservation Fail over a reservation to the secondary location. get GET /v1/{name=projects/ /locations/ /reservations/ } Returns information about the reservation. getIamPolicy GET /v1/{resource=projects/ /locations/ /reservations/ }:getIamPolicy Gets the access control policy for a resource. list GET /v1/{parent=projects/ /locations/ }/reservations Lists all the reservations for the project in the specified location. patch PATCH /v1/{reservation.name=projects/ /locations/ /reservations/ } Updates an existing reservation resource. setIamPolicy POST /v1/{resource=projects/ /locations/ /reservations/ }:setIamPolicy Sets an access control policy for a resource. testIamPermissions POST /v1/{resource=projects/ /locations/ /reservations/ }:testIamPermissions Gets your permissions on a resource.
- REST Resource: v1.projects.locations REST Resource: v1.projects.locations.capacityCommitments REST Resource: v1.projects.locations.reservationGroups REST Resource: v1.projects.locations.reservations REST Resource: v1.projects.locations.reservations.assignments Service: bigqueryreservation.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- A service to modify your BigQuery reservations.

