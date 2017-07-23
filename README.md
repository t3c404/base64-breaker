# Base64 Decoder [![Build Status](https://travis-ci.org/t3c404/base64decoder.svg?branch=master)](https://travis-ci.org/t3c404/base64decoder) 
Simple Base64 Decoder written in Python using bottle. Offers an HTML frontend and an API.
Works also for encoding!


---

## Installation
1. clone the repo: `git clone https://github.com/t3c404/base64-decoder.git`
---
the next points are just necessary when you don't use docker

1. install bottle: `pip install bottle`
2. run: `python run.py` 
3. url: `0.0.0.0:4000` (refresh page to clear the list)

---

## Run with Docker-Compose (recommended)
1. install [docker-compose](https://docs.docker.com/compose/install/)
2. run: `docker-compose build` (just once)
3. run: `docker-compose up`
4. url: `0.0.0.0:4000` (refresh page to clear the list)

---

## Run with Docker
1. build container: `docker build -t base64 .`
2. run: `docker run -p 4000:4000 --name base64 base64` (just once)
3. start container: `docker start base64`
4. stop container: `docker stop base64`
5. url: `0.0.0.0:4000` (refresh page to clear the list)
