package main

import (
	"fmt"
	"net/http"
	"log"
)

func main() {
	// Define a handler function for the root path ("/")
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello World!")
	})
	
	// Start the server on port 3000
	fmt.Println("Go server is running on http://localhost:3000")
	
	err := http.ListenAndServe(":3000", nil)
	
	if err != nil {
	    log.Fatal("Server failed: ", err)
	}	
}
