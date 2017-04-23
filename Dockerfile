FROM node:7

RUN useradd --user-group --create-home --shell /bin/false app

ENV APPDIR=/home/app/words/app
ENV SERVERDIR=/home/app/words/server

ARG APP_ID=2cbcb325-402e-4b48-9c6e-781a77c9164f
ARG MASTER_KEY
ARG MONGODB_URI

ENV APP_ID ${APP_ID}
ENV REACT_APP_API_ID ${APP_ID}
ENV REACT_APP_API_URL http://localhost:1337
ENV MASTER_KEY ${MASTER_KEY}
ENV MONGODB_URI ${MONGODB_URI}

USER app

RUN mkdir -p $APPDIR
RUN mkdir -p $SERVERDIR

WORKDIR $APPDIR

COPY app/package.json $APPDIR
RUN npm cache clean && \
    npm install --silent --progress=false
COPY app/src/ $APPDIR/src
COPY app/public/ $APPDIR/public
RUN npm run build

WORKDIR $SERVERDIR

COPY server/package.json $SERVERDIR
RUN npm cache clean && \
    npm install --silent --progress=false

COPY server/ $SERVERDIR

USER root

RUN chown -R app:app $APPDIR
RUN chown -R app:app $SERVERDIR

USER app

RUN cp -a $APPDIR/build/. $SERVERDIR/public

EXPOSE 1337

CMD ["node", "index.js"]