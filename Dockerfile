FROM cypress/included:13.6.0
WORKDIR /app
# RUN chmod -R 777 /root
# RUN chmod -R 777 /root/.config
# RUN chmod -R 777 /app
RUN npm update
# RUN npm install -g cypress --unsafe-perm --silent
ENTRYPOINT npm install && npm run ${COMMAND}
ENV COMMAND="test:chrome"
