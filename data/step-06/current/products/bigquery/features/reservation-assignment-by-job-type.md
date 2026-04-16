---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.678Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Reservation assignment by job type"
feature_slug: "reservation-assignment-by-job-type"
latest_feature_date: "2022-07-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-assignments"
  - "https://docs.cloud.google.com/bigquery/docs/information-schema-assignments-changes"
  - "https://docs.cloud.google.com/bigquery/docs/reference/reservations/rest"
keywords:
  - "reservation"
  - "assignment"
  - "job"
  - "type"
  - "reservations"
  - "can"
  - "assign"
  - "folders"
---

# Reservation assignment by job type

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Reservations can assign folders, organizations, or projects by specific job type in the Cloud console.

## Extended Definition

Reservations can assign folders, organizations, or projects by specific job type in the Cloud console.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/information-schema-assignments](https://docs.cloud.google.com/bigquery/docs/information-schema-assignments)
- [https://docs.cloud.google.com/bigquery/docs/information-schema-assignments-changes](https://docs.cloud.google.com/bigquery/docs/information-schema-assignments-changes)
- [https://docs.cloud.google.com/bigquery/docs/reference/reservations/rest](https://docs.cloud.google.com/bigquery/docs/reference/reservations/rest)

## Supporting Pages

### ASSIGNMENTS view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-assignments](https://docs.cloud.google.com/bigquery/docs/information-schema-assignments)
- Source ID: `site-api-reference`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- RESERVATIONS BY PROJECT AS reservation ON ( assignment . reservation name = reservation . reservation name ) WHERE assignment . assignee id = " PROJECT ID " AND job type = "QUERY" ; Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Schema The INFORMATION SCHEMA.ASSIGNMENTS view has the following schema: Column name Data type Value ddl STRING The DDL statement used to create this assignment. project id STRING ID of the administration project. project number INTEGER Number of the administration project. assignment id STRING ID that uniquely identifies the assignment. reservation name STRING Name of the reservation that the assignment uses. job type STRING The type of job that can use the reservation.
- Required permission To query the INFORMATION SCHEMA.ASSIGNMENTS view, you need the bigquery.reservationAssignments.list Identity and Access Management (IAM) permission for the project.
- Replace the following: PROJECT ID : the ID of the project to which you have assigned reservations.

### ASSIGNMENT_CHANGES view \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/information-schema-assignments-changes](https://docs.cloud.google.com/bigquery/docs/information-schema-assignments-changes)
- Source ID: `site-api-reference`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- ASSIGNMENT CHANGES WHERE reservation name = RESERVATION NAME AND change timestamp TIMESTAMP QUALIFY ROW NUMBER () OVER ( PARTITION BY assignee id , job type ORDER BY change timestamp DESC ) = 1 AND action != 'DELETE' ; Replace the following: REGION : the region where your reservation is located RESERVATION NAME : the name of the reservation that the assignment uses TIMESTAMP : the timestamp representing the specific point in time at which the list of assignments is checked The result is similar to the following: +-------------------------+---------------------------+---------------+----------+ reservation name assignee id assignee type job type +-------------------------+---------------------------+---------------+----------+ test-reservation project 1 PROJECT QUERY test-reservation project 2 PROJECT QUERY +-------------------------+---------------------------+---------------+----------+ Identify the assignment status of a reservation when a particular job was executed To display the assignments that were active when a certain job was executed, use the following example.
- JOBS WHERE job id = JOB ID ) QUALIFY ROW NUMBER () OVER ( PARTITION BY assignee id , job type ORDER BY change timestamp DESC ) = 1 AND action != 'DELETE' ; Replace the following: REGION : the region where your reservation is located RESERVATION NAME : the name of the reservation that the assignment uses PROJECT ID : the ID of your Google Cloud project where the job was executed JOB ID : the job ID against which the assignment status was checked Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Schema The INFORMATION SCHEMA.ASSIGNMENT CHANGES view has the following schema: Column name Data type Value change timestamp TIMESTAMP Time when the change occurred. project id STRING ID of the administration project. project number INTEGER Number of the administration project. assignment id STRING ID that uniquely identifies the assignment. reservation name STRING Name of the reservation that the assignment uses. job type STRING The type of job that can use the reservation.
- ASSIGNMENT CHANGES WHERE change timestamp BETWEEN '2021-09-30' AND '2021-10-01' AND assignment id = 'assignment 01' ORDER BY change timestamp DESC LIMIT 1 ; The result is similar to the following: +--------------------------------+-----------------------+--------------------+-----------------+ user email change timestamp reservation name assignment id +--------------------------------+-----------------------+--------------------+-----------------+ cloudysanfrancisco@gmail.com 2021-09-30 09:30:00 UTC my reservation assignment 01 +--------------------------------+-----------------------+--------------------+-----------------+ Identify the assignment status of a reservation at a specific point in time The following example displays all of the active assignments of a reservation at a certain point in time.

### BigQuery Reservation API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/reservations/rest](https://docs.cloud.google.com/bigquery/docs/reference/reservations/rest)
- Source ID: `site-api-reference-required-3`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1.projects.locations.reservations.assignments Methods create POST /v1/{parent=projects/ /locations/ /reservations/ }/assignments Creates an assignment object which allows the given project to submit jobs of a certain type using slots from the specified reservation. delete DELETE /v1/{name=projects/ /locations/ /reservations/ /assignments/ } Deletes a assignment. getIamPolicy GET /v1/{resource=projects/ /locations/ /reservations/ /assignments/ }:getIamPolicy Gets the access control policy for a resource. list GET /v1/{parent=projects/ /locations/ /reservations/ }/assignments Lists assignments. move POST /v1/{name=projects/ /locations/ /reservations/ /assignments/ }:move Moves an assignment under a new reservation. patch PATCH /v1/{assignment.name=projects/ /locations/ /reservations/ /assignments/ } Updates an existing assignment. setIamPolicy POST /v1/{resource=projects/ /locations/ /reservations/ /assignments/ }:setIamPolicy Sets an access control policy for a resource. testIamPermissions POST /v1/{resource=projects/ /locations/ /reservations/ /assignments/ }:testIamPermissions Gets your permissions on a resource.
- REST Resource: v1.projects.locations REST Resource: v1.projects.locations.capacityCommitments REST Resource: v1.projects.locations.reservationGroups REST Resource: v1.projects.locations.reservations REST Resource: v1.projects.locations.reservations.assignments Service: bigqueryreservation.googleapis.com To call this service, we recommend that you use the Google-provided client libraries .
- This service has the following service endpoint and all URIs below are relative to this service endpoint: https://bigqueryreservation.googleapis.com REST Resource: v1.projects.locations Methods getBiReservation GET /v1/{name=projects/ /locations/ /biReservation} Retrieves a BI reservation. searchAllAssignments GET /v1/{parent=projects/ /locations/ }:searchAllAssignments Looks up assignments for a specified resource for a particular region. searchAssignments (deprecated) GET /v1/{parent=projects/ /locations/ }:searchAssignments Deprecated: Looks up assignments for a specified resource for a particular region. updateBiReservation PATCH /v1/{biReservation.name=projects/ /locations/ /biReservation} Updates a BI reservation.
- REST Resource: v1.projects.locations.reservations Methods create POST /v1/{parent=projects/ /locations/ }/reservations Creates a new reservation resource. delete DELETE /v1/{name=projects/ /locations/ /reservations/ } Deletes a reservation. failoverReservation POST /v1/{name=projects/ /locations/ /reservations/ }:failoverReservation Fail over a reservation to the secondary location. get GET /v1/{name=projects/ /locations/ /reservations/ } Returns information about the reservation. getIamPolicy GET /v1/{resource=projects/ /locations/ /reservations/ }:getIamPolicy Gets the access control policy for a resource. list GET /v1/{parent=projects/ /locations/ }/reservations Lists all the reservations for the project in the specified location. patch PATCH /v1/{reservation.name=projects/ /locations/ /reservations/ } Updates an existing reservation resource. setIamPolicy POST /v1/{resource=projects/ /locations/ /reservations/ }:setIamPolicy Sets an access control policy for a resource. testIamPermissions POST /v1/{resource=projects/ /locations/ /reservations/ }:testIamPermissions Gets your permissions on a resource.

