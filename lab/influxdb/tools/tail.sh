#!/bin/bash

tail -n 0 -f $1 | grep 'REQUEST' |  awk 'BEGIN{ FS = "\t" }{print "influx write --bucket lab --precision ms '\''gatlingLog,experiment=exp-'$(date "+%Y%m%d-%H%M%S")' status=\""$7"\" "$5"'\''"}'  | awk '{system($0)}'