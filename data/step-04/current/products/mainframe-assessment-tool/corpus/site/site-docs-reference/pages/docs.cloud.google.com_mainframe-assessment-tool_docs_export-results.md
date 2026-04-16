---
title: "Export assessment results \_|\_ Mainframe Assessment Tool \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/mainframe-assessment-tool/docs/mcp-server
source_metadata:
  url: https://docs.cloud.google.com/mainframe-assessment-tool/docs/export-results
  title: "Export assessment results \_|\_ Mainframe Assessment Tool \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Migration
Mainframe Assessment Tool
Guides
Send feedback
Export assessment results
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to export assessment results for offline viewing,
for analysis in other tools, or for graph analysis in Neo4j databases.
You can export results in the following ways:
Export HTML report
Export JSON report
Export assessment data to your Neo4j database
Export HTML report
Download your assessment report as a zip file in HTML format to view the
report offline or share it with others.
To download the report, follow these steps:
In the navigation menu, click Assessments .
On the Assessments page, click the
arrow_forward arrow to view a specific assessment.
Click file_download Export .
Click HTML report .
Optional: To download a report with only selected assets, filter the assets,
and then click file_download Download report .
The report is downloaded as a zip archive to your computer. The zip
archive includes an HTML file for each program in your assessment. These
HTML files contain the information found on Assessments page,
including summaries, detailed logic, and generated code
suggestions.
The zip archive also contains a table of contents file named index.html ,
which has links to all of the files in the archive.
Export JSON report
Download your assessment report as a zip file in JSON format to use the
assessment data in other tools or for custom analysis.
To download the report, follow these steps:
In the navigation menu, click Assessments .
On the Assessments page, click the
arrow_forward arrow to view a specific assessment.
Click file_download Export .
Click JSON report .
Optional: To download a report with only selected assets, filter the assets,
and then click file_download Download report .
The report is downloaded as a zip archive to your computer. The zip
archive includes a JSON file for each program in your assessment,
containing all the collected data, including summaries, detailed logic,
and code suggestions.
Export assessment data to your Neo4j database
You can export your assessment data to a Neo4j database to
analyze and query the complex relationships between your mainframe
application components. The data is downloaded in a JSON Lines format, which
you can then import into your Neo4j database.
To export your assessment data to your Neo4j database, follow these steps:
In the left pane, click Assessments .
On the Assessments page, click the
arrow_forward arrow for a specific assessment.
Click file_download Export .
Click Neo4j graph .
The file is downloaded as a zip archive file to your computer. The zip
archive includes the graph data. This file contains nodes and relationships of
programs, JCL jobs, datasets, databases, and BMS maps.
After downloading the assessment data, you can import it into your own
Neo4j database by following these steps:
Ensure you have a Neo4j database installed and running.
Install the APOC library . APOC is required
for importing data of JSON format.
Extract the JSON Lines file containing the graph data from the downloaded
archive. Each line in this file is a JSON object that represents
either a node or a relationship from the assessment results.
Copy the JSON Lines file into the import directory of your Neo4j database
installation so that APOC procedures can access it using file:/// .
For better performance on large datasets, create constraints for all node
labels using a query similar to the following:
CALL apoc . load . jsonl ( 'file:///<your-data-file>.jsonl' ) YIELD value
WHERE value . type = 'node'
UNWIND value . labels as label
WITH distinct label
CALL apoc . cypher . doIt ( "CREATE CONSTRAINT IF NOT EXISTS FOR (n:" + apoc . text . quoteLabel ( label ) + ") REQUIRE n.id IS UNIQUE" , {}) YIELD value
RETURN count (*);
This query reads node labels from the file and creates a unique constraint
on the id property for each label. These constraints also create indexes
that speed up data import and querying.
Import nodes using a Cypher query similar to the following:
CALL apoc . load . jsonl ( 'file:///<your-data-file>.jsonl' ) YIELD value
WHERE value . type = 'node'
CALL apoc . merge . node ( value . labels , { id : value . id }, value . properties , value . properties ) YIELD node
RETURN count ( node );
This query reads each line from the file, and if it's a node, it creates a
corresponding node in the Neo4j database with its labels and properties,
using MERGE to avoid duplicates based on node id .
After importing the nodes, import relationships using a query similar to
the following:
CALL apoc . load . jsonl ( 'file:///<your-data-file>.jsonl' ) YIELD value
WHERE value . type = 'relationship'
MATCH ( startNode { id : value . start . id }), ( endNode { id : value . end . id })
CALL apoc . merge . relationship ( startNode , value . label , {}, value . properties , endNode ) YIELD rel
RETURN count ( rel );
This query reads relationship objects from the file and creates
relationships in the Neo4j database between nodes that were created in the
previous step.
After completing these steps, your assessment data will be loaded into the Neo4j
database, and you can use the Neo4j Browser or other tools to explore the graph.
What's next
Learn how to modernize your mainframe application .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
