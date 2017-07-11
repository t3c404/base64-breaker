from bottle import run, route, response, error, template
import json
import base64

@route('/encode/<encode>')
def encode(encode):
    encode = base64.b64encode(encode)
    return { 'result' : encode}

@route('/decode/<decode>')
def decode(decode):
    decode = base64.b64decode(decode)
    return { 'result' : decode}

@error(500)
def error500(error):
    response.status = 500
    response.content_type = 'application/json'
    return json.dumps({'result' : 'not found!'})
    #return '<h1> not found! \n</h1>' + '<h4>use:\n</h4>' + '/encode/&ltstring&gt' + '<h6></h6>\n' + '<h>/decode/&ltstring&gt</h>'

@error(404)
def error404(error):
    response.status = 404
    response.content_type = 'application/json'
    return json.dumps([{'ERROR' : '404'}, {'encode' : '/encode/<string>'}, {'decode' : '/decode/<string>'}])
    #return '<h1> nothing here! \n</h1>' + '<h4>use:\n</h4>' + '/encode/&ltstring&gt' + '<h6></h6>\n' + '<h>/decode/&ltstring&gt</h>'

run(host='127.0.0.1', port=8080)
