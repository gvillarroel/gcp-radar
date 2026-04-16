---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.492Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Application Integration regional availability"
feature_slug: "application-integration-regional-availability"
latest_feature_date: "2023-05-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/locations"
  - "https://docs.cloud.google.com/application-integration/docs/configure-sap-erp-trigger"
  - "https://docs.cloud.google.com/application-integration/docs/perform-crud-operation-mysql-database"
keywords:
  - "availability"
  - "locations"
  - "expanding"
  - "regional"
  - "added"
---

# Application Integration regional availability

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

Application Integration was added in new Cloud locations, expanding availability to additional regions.

## Extended Definition

Application Integration was added in new Cloud locations, expanding availability to additional regions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/locations](https://docs.cloud.google.com/application-integration/docs/locations)
- [https://docs.cloud.google.com/application-integration/docs/configure-sap-erp-trigger](https://docs.cloud.google.com/application-integration/docs/configure-sap-erp-trigger)
- [https://docs.cloud.google.com/application-integration/docs/perform-crud-operation-mysql-database](https://docs.cloud.google.com/application-integration/docs/perform-crud-operation-mysql-database)

## Supporting Pages

### Application Integration locations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/locations](https://docs.cloud.google.com/application-integration/docs/locations)
- Source ID: `site-docs-root`
- Final score: 51
- Re-rank relevance: N/A

Evidence snippets:
- Application Integration locations Application Integration is regional , which means the infrastructure that runs your integrations is located in a specific region, and Google manages it so that it is available redundantly across all of the zones within that region .

### "Perform CRUD operations on a MySQL database \_|\_ Application Integration\

- URL: [https://docs.cloud.google.com/application-integration/docs/perform-crud-operation-mysql-database](https://docs.cloud.google.com/application-integration/docs/perform-crud-operation-mysql-database)
- Source ID: `site-docs-root`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- Create a MySQL database: CREATE DATABASE tutorialDB; Create a table: CREATE TABLE EMPLOYEE ( employee id int auto increment primary key, employee first name varchar(500) NOT null, employee last name varchar(500) NOT null, employee emailID varchar(500) ); Add rows to the EMPLOYEE table that you created: INSERT INTO EMPLOYEE (employee first name,employee last name,employee emailID) values ("Peter","Dilliard","test-01@test.com"); INSERT INTO EMPLOYEE (employee first name,employee last name,employee emailID) values ("Meaghan","Webb","test-02@test.com"); Verify that the table is created and rows are added: SELECT FROM EMPLOYEE; The following table rows are displayed: +-------------+---------------------+--------------------+------------------+ employee id employee first name employee last name employee emailID +-------------+---------------------+--------------------+------------------+ 1 Peter Dilliard test-01@test.com 2 Meaghan Webb test-02@test.com +-------------+---------------------+--------------------+------------------+ Create a MySQL connection To enable an integration to connect to your MySQL database, create a new connection to your MySQL database: Click +Create new to open the Create Connection page.
- For example, to add a new employee in the employee table, enter the following JSON: { "employee first name": "Mary", "employee last name": "Smith", "employee emailID": "test-03@test.com" } Note : Don't specify the primary key, employee id , as it is a read-only value that is generated when the row is added to the table.
- In Connector output payload , the following output is displayed: { "employee first name": "Mary", "employee last name": "Smith", "employee emailID": "test-03@test.com" } Under Connector output payload , the entity ID is displayed as output: { "employee id": 3.0 } You can verify that the row is added in your MySQL table.
- If you don't enter any values, by default the minimum nodes are set to 2 (for better availability) and the maximum nodes are set to 50.

### SAP ERP trigger \_|\_ Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/configure-sap-erp-trigger](https://docs.cloud.google.com/application-integration/docs/configure-sap-erp-trigger)
- Source ID: `site-docs-reference-2`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- Call API method: connectors.projects.locations.connections.listenEvent CALL METHOD lo client->listen event connections EXPORTING iv p projects id = lv p projects id iv p locations id = lv p locations id iv p connections id = lv p connections id is input = ls input IMPORTING es raw = es output = DATA(ls output) ev ret code = DATA(lv ret code) ev err text = DATA(lv err text) es err resp = DATA(ls err resp).
- DATA: lv p projects id TYPE string, lv p locations id TYPE string, lv p connections id TYPE string, ls input TYPE /goog/cl connectors v1=>ty 103.
- If you don't enter any values, by default the minimum nodes are set to 2 (for better availability) and the maximum nodes are set to 50.
- Populate relevant parameters lv p projects id = lo client->gv project id. lv p locations id = 'us-central1'.

