# Use lightweight nginx to serve static files
FROM nginx:stable-alpine

# Remove default nginx content (optional)
RUN rm -rf /usr/share/nginx/html/*

# Copy site contents (adjust if your files are in a subfolder)
COPY ./index.html /usr/share/nginx/html/index.html
COPY ./assets /usr/share/nginx/html/assets

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
