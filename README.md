# base64-decoder
Simple base64-decoder written in Python using bottle. Offers an HTML frontend and an API.
Input-String will be encoded and decoded.

---

## Installation
1. clone the repo: `git clone https://github.com/t3c404/base64-breaker.git`
---
the next points are just necessary when you don't use docker

1. install bottle: `pip install bottle`
2. run: `python run.py` 
3. url: `0.0.0.0:8080/` (refresh page to clear the list)

---

## Docker
1. build container: `sudo docker build -t base64 .`
2. run: `sudo docker run -p 8080:8080 --name base64 base64` (just once)
3. start container: `sudo docker start base64`
4. stop container: `sudo docker stop base64`
5. url: `0.0.0.0:8080/` (refresh page to clear the list)
