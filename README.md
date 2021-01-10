# flash_cards

A simple CRUD api to manage flash card content, each card will have a topic, question, and an answer to be used as a study aide.

Inspired by https://github.com/jwasham/coding-interview-university

# package commands

## db:*

	Various commands to control the stop, start, create, and destroy of the docker network.

	- db:setup/setup, this is for the first time setup of the docker image and SQL database tables. Warning this will delete any existing data.

## build:*

	Package build commands for typescript and webpack.

## watch:*

	Local development builds for typescript and webpack.

# todo

Setup build/deploy infra etc.
	-	reverse proxy to home (ssh tunnel) using AWS
	-	move all to AWS cloud

Add a duplicate check e.g. rowhash column for cards
Think of some sort of random sort prio. e.g SET last selected/least known