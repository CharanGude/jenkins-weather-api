# ---------- 1. Choose a tiny base image that already contains Nginx
FROM nginx:latest

# ---------- 2. Set the working directory to Nginx’s default HTML folder
WORKDIR /usr/share/nginx/html

# ---------- 3. Copy your static assets into that folder
COPY index.html .
COPY index.js   .
COPY index.css  .

# ---------- 4. Expose the port the container will listen on
EXPOSE 80

# ---------- 5. Start Nginx in the foreground so Docker keeps the container alive
CMD ["nginx", "-g", "daemon off;"]