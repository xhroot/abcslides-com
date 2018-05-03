#!/usr/bin/env python
import http.server

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_my_headers()
        http.server.SimpleHTTPRequestHandler.end_headers(self)
        # Make server support unicode chars.
        m = http.server.SimpleHTTPRequestHandler.extensions_map;
        m[''] = 'text/plain'; 
        m.update(dict([(k, v + ';charset=UTF-8') for k, v in m.items()])); 

    # Aggressive caching slows development.
    def send_my_headers(self):
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")


if __name__ == '__main__':
    http.server.test(HandlerClass=MyHTTPRequestHandler, port=8100)
