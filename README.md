# DropDownApp

This is a ref architecture used to test mongodb and nodejs.

## Clone

## Clone the respository.

 'git clone https://github.com/Techolution/dropdown-app-angular2.git'

## Configure nodejs to talk to mongo

Open the server.js file.  Change the below line and update it with the correct username/password and host of where the mongodb will live

 `var db = mongojs('username:password@example.com/modelMake', ['modelMakeList'])`

## Build docker image

Update the Dockerfile so that it will generate an image.
