#!/bin/bash
aws cloudwatch get-metric-data --metric-data-queries file://./metric-data-queries.json --start-time '2021-06-01T00:00:00' --end-time '2022-03-14T23:59:59'