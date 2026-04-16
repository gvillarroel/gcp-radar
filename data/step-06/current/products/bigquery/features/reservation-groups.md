---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.262Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Reservation groups"
feature_slug: "reservation-groups"
latest_feature_date: "2025-10-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/reservations/rest"
  - "https://docs.cloud.google.com/bigquery/docs/reference/reservations/rpc"
  - "https://docs.cloud.google.com/bigquery/docs/reference/reservations"
keywords:
  - "reservation"
  - "groups"
  - "let"
  - "related"
  - "reservations"
  - "prioritize"
  - "idle"
  - "slot"
---

# Reservation groups

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Reservation groups let related reservations prioritize idle slot sharing within the group before sharing with other reservations in the project.

## Extended Definition

Reservation groups let related reservations prioritize idle slot sharing within the group before sharing with other reservations in the project.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/reservations/rest](https://docs.cloud.google.com/bigquery/docs/reference/reservations/rest)
- [https://docs.cloud.google.com/bigquery/docs/reference/reservations/rpc](https://docs.cloud.google.com/bigquery/docs/reference/reservations/rpc)
- [https://docs.cloud.google.com/bigquery/docs/reference/reservations](https://docs.cloud.google.com/bigquery/docs/reference/reservations)

## Supporting Pages

### BigQuery Reservation API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/reservations/rest](https://docs.cloud.google.com/bigquery/docs/reference/reservations/rest)
- Source ID: `site-api-reference-required-3`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1.projects.locations.reservations.assignments Methods create POST /v1/{parent=projects/ /locations/ /reservations/ }/assignments Creates an assignment object which allows the given project to submit jobs of a certain type using slots from the specified reservation. delete DELETE /v1/{name=projects/ /locations/ /reservations/ /assignments/ } Deletes a assignment. getIamPolicy GET /v1/{resource=projects/ /locations/ /reservations/ /assignments/ }:getIamPolicy Gets the access control policy for a resource. list GET /v1/{parent=projects/ /locations/ /reservations/ }/assignments Lists assignments. move POST /v1/{name=projects/ /locations/ /reservations/ /assignments/ }:move Moves an assignment under a new reservation. patch PATCH /v1/{assignment.name=projects/ /locations/ /reservations/ /assignments/ } Updates an existing assignment. setIamPolicy POST /v1/{resource=projects/ /locations/ /reservations/ /assignments/ }:setIamPolicy Sets an access control policy for a resource. testIamPermissions POST /v1/{resource=projects/ /locations/ /reservations/ /assignments/ }:testIamPermissions Gets your permissions on a resource.
- REST Resource: v1.projects.locations REST Resource: v1.projects.locations.capacityCommitments REST Resource: v1.projects.locations.reservationGroups REST Resource: v1.projects.locations.reservations REST Resource: v1.projects.locations.reservations.assignments Service: bigqueryreservation.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- REST Resource: v1.projects.locations.reservations Methods create POST /v1/{parent=projects/ /locations/ }/reservations Creates a new reservation resource. delete DELETE /v1/{name=projects/ /locations/ /reservations/ } Deletes a reservation. failoverReservation POST /v1/{name=projects/ /locations/ /reservations/ }:failoverReservation Fail over a reservation to the secondary location. get GET /v1/{name=projects/ /locations/ /reservations/ } Returns information about the reservation. getIamPolicy GET /v1/{resource=projects/ /locations/ /reservations/ }:getIamPolicy Gets the access control policy for a resource. list GET /v1/{parent=projects/ /locations/ }/reservations Lists all the reservations for the project in the specified location. patch PATCH /v1/{reservation.name=projects/ /locations/ /reservations/ } Updates an existing reservation resource. setIamPolicy POST /v1/{resource=projects/ /locations/ /reservations/ }:setIamPolicy Sets an access control policy for a resource. testIamPermissions POST /v1/{resource=projects/ /locations/ /reservations/ }:testIamPermissions Gets your permissions on a resource.
- REST Resource: v1.projects.locations.reservationGroups Methods create POST /v1/{parent=projects/ /locations/ }/reservationGroups Creates a new reservation group. delete DELETE /v1/{name=projects/ /locations/ /reservationGroups/ } Deletes a reservation. get GET /v1/{name=projects/ /locations/ /reservationGroups/ } Returns information about the reservation group. list GET /v1/{parent=projects/ /locations/ }/reservationGroups Lists all the reservation groups for the project in the specified location.

### BigQuery Reservation API Client Libraries \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/reservations](https://docs.cloud.google.com/bigquery/docs/reference/reservations)
- Source ID: `site-docs-reference`
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ListReservationsRequest ( parent = client . common location path ( project id , location ) ) total reservations = 0 for reservation in client . list reservations ( request = req ): print ( f " \t Reservation { reservation . name } " f "has { reservation . slot capacity } slot capacity." ) total reservations = total reservations + 1 print ( f " \n { total reservations } reservations processed." ) if name == " main " : parser = argparse .
- GetSlotCapacity ()) totalReservations ++ } fmt .
- String projectId = "YOUR PROJECT ID" ; String location = "LOCATION" ; quickStartSample ( projectId , location ); } public static void quickStartSample ( String projectId , String location ) throws IOException { try ( ReservationServiceClient client = ReservationServiceClient . create ()) { // list reservations in the project String parent = String . format ( "projects/%s/locations/%s" , projectId , location ); client . listReservations ( parent ) . iterateAll () . forEach ( res - > System . out . println ( "Reservation resource name: " + res . getName ())); // list capacity commitments in the project client . listCapacityCommitments ( parent ) . iterateAll () . forEach ( commitment - > System . out . println ( "Capacity commitment resource name: " + commitment . getName ())); } } } Node.js // Imports the Google Cloud client library const { ReservationServiceClient , } = require ( ' @google-cloud/bigquery-reservation ' ); // Creates a client const client = new ReservationServiceClient (); // project = 'my-project' // Project to list reservations for. // location = 'US' // BigQuery location. async function listReservations () { const [ reservations ] = await client . listReservations ({ parent : projects/ ${ project } /locations/ ${ location } , }); console . info ( found ${ reservations . length } reservations ); console . info ( reservations ); } async function listCapacityCommitments () { const [ commitments ] = await client . listCapacityCommitments ({ parent : projects/ ${ project } /locations/ ${ location } , }); console . info ( found ${ commitments . length } commitments ); console . info ( commitments ); } listReservations (); listCapacityCommitments (); Python import argparse from google.cloud import bigquery reservation v1 def main ( project id : str = "your-project-id" , location : str = "US" , transport : str = "grpc" ) - > None : Constructs the client for interacting with the service. client = bigquery reservation v1 .
- ReservationServiceClient , project id : str , location : str , ) - > None : """Prints details and summary information about reservations defined within a given admin project and location. """ print ( "Reservations in project {} in location {} " . format ( project id , location )) req = bigquery reservation v1 .

### BigQuery Reservation API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/reservations/rpc](https://docs.cloud.google.com/bigquery/docs/reference/reservations/rpc)
- Source ID: `site-docs-reference`
- Final score: 140
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Service: bigqueryreservation.googleapis.com The Service name bigqueryreservation.googleapis.com is needed to create RPC client stubs. google.cloud.bigquery.reservation.v1.ReservationService Methods CreateAssignment Creates an assignment object which allows the given project to submit jobs of a certain type using slots from the specified reservation.
- ListReservationGroups Lists all the reservation groups for the project in the specified location.
- ListReservations Lists all the reservations for the project in the specified location.
- A service to modify your BigQuery reservations.

