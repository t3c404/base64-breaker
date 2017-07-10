FROM python:2.7
WORKDIR /app
ADD . /app
RUN apt-get update -y
RUN pip install bottle
CMD ["python", "run.py"]
