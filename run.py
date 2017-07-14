import bottle
from bottle import run, route, response, error, template, request
import json
import base64

def enable_cors(fn):
    def _enable_cors(*args, **kwargs):
        # set CORS headers
        response.headers['Access-Control-Allow-Origin'] = '*'
        response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, OPTIONS'
        response.headers['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token'

        if bottle.request.method != 'OPTIONS':
            # actual request; reply with the actual response
            return fn(*args, **kwargs)

    return _enable_cors

app = bottle.app()

@app.route('/encode/<encode>', method='GET')
@enable_cors
def encode(encode):
    inputS = base64.b64encode(encode)
    return { encode : inputS }

@app.route('/decode/<decode>', method='GET')
@enable_cors
def decode(decode):
    decode = base64.b64decode(decode)
    return { 'result' : decode }

@error(500)
@enable_cors
def error500(error):
    response.status = 500
    response.content_type = 'application/json'
    return json.dumps({'result' : 'not found!'})
    #return '<h1> not found! \n</h1>' + '<h4>use:\n</h4>' + '/encode/&ltstring&gt' + '<h6></h6>\n' + '<h>/decode/&ltstring&gt</h>'

@error(404)
@enable_cors
def error404(error):
    response.status = 404
    response.content_type = 'application/json'
    return json.dumps([{'ERROR' : '404'}, {'encode' : '/encode/<string>'}, {'decode' : '/decode/<string>'}])
    #return '<h1> nothing here! \n</h1>' + '<h4>use:\n</h4>' + '/encode/&ltstring&gt' + '<h6></h6>\n' + '<h>/decode/&ltstring&gt</h>'
    
app.run(host='127.0.0.1', port=8080)
#run(host='127.0.0.1', port=8080)
