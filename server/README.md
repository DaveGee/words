# How to:

Add a `.env` file at `/server` root with following structure :
```
MONGODB_URI=mongodb://<user>:<pwd>@ds157320.mlab.com:57320/words
APP_ID= <APP_ID>
MASTER_KEY= <MASTER_KEY>
SERVER_URL=
```

start with `node index`

To use the dashboard :
Create a `dashboard-config.json` file at `/server` root with following structure:
```
{
  "apps": [
    {
      "serverURL": "http://localhost:1337/parse",
      "appId": "<app-id>",
      "masterKey": "<master-key>",
      "appName": "Words"
    }
  ]
}
```

* install: `npm i -g parse-dashboard`
* run: `npm run dashboard`

---

# parse-server-example

Example project using the [parse-server](https://github.com/ParsePlatform/parse-server) module on Express.

Read the full Parse Server guide here: https://github.com/ParsePlatform/parse-server/wiki/Parse-Server-Guide

### For Local Development

* Make sure you have at least Node 4.3. `node --version`
* Clone this repo and change directory to it.
* `npm install`
* Install mongo locally using http://docs.mongodb.org/master/tutorial/install-mongodb-on-os-x/
* Run `mongo` to connect to your database, just to make sure it's working. Once you see a mongo prompt, exit with Control-D
* Run the server with: `npm start`
* By default it will use a path of /parse for the API routes.  To change this, or use older client SDKs, run `export PARSE_MOUNT=/1` before launching the server.
* You now have a database named "dev" that contains your Parse data
* Install ngrok and you can test with devices