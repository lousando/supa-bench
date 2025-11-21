package main

import (
	"fmt"
	"net/http"
	"log"
)

// fibonacci generates the Fibonacci sequence up to n
func fibonacci(n int) []int {
	sequence := []int{0, 1}
	for i := 2; i <= n; i++ {
		next := sequence[i-1] + sequence[i-2]
		sequence = append(sequence, next)
	}
	return sequence
}

func main() {
	// Define a handler function for the root path ("/")
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fibSeq := fibonacci(32)
		for _, num := range fibSeq {
			fmt.Fprintf(w, "%d\n", num)
		}
	})

	// Start the server on port 3000
	fmt.Println("Go server is running on http://localhost:3000")
	
	err := http.ListenAndServe(":3000", nil)
	
	if err != nil {
	    log.Fatal("Server failed: ", err)
	}
}
