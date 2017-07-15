# base64-decoder-encoder
Simple base64 decoder/encoder written in Python using bottle

---

## Installation
1. clone the repo: `git clone https://github.com/t3c404/base64-breaker.git`
---
the next points are just necessary when you don't use docker

1. install bottle: `pip install bottle`
2. run: `python run.py` 
3. open `index.html` (break the string and you get back the decoded and encoded resutl)

---

## Docker (not working yet)
1. open `run.py` and change `host='127.0.0.1'` to `host='0.0.0.0'`
2. build container: `sudo docker build -t base64 .`
3. run: `sudo docker run -p 8080:8080 --name base64 base64` (just once)
4. start container: `sudo docker start base64`
5. stop container: `sudo docker stop base64`

#### decode
0.0.0.0:8080/decode/\<string>

#### encode
0.0.0.0:8080/encode/\<string>
