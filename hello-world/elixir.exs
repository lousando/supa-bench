#!/usr/bin/env -S elixir

Mix.install([:bandit, :plug])

defmodule FibServer do
  use Plug.Router

  plug :match
  plug :dispatch

  get "/" do    
    conn
    |> put_resp_content_type("text/plain")
    |> send_resp(200, "hello world")
  end
end

{:ok, _} = Bandit.start_link(plug: FibServer, port: 3000)

IO.puts("Listening on http://localhost:3000/ (Ctrl-C to stop)")
Process.sleep(:infinity)
