# base64-decoder-encoder
Simple base64-decoder-encoder written in Python using bottle. Offers an HTML frontend and an API.

---

## Installation
1. clone the repo: `git clone https://github.com/t3c404/base64-breaker.git`
---
the next points are just necessary when you don't use docker

1. install bottle: `pip install bottle`
2. run: `python run.py` 
3. open `index.html` (break the string and get back the decoded and encoded result)

---

## Docker
1. build container: `sudo docker build -t base64 .`
2. run: `sudo docker run -p 8080:8080 --name base64 base64` (just once)
3. start container: `sudo docker start base64`
4. stop container: `sudo docker stop base64`
5. open `index.html` (break the string and get back the decoded and encoded result)
