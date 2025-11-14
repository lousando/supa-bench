#!/usr/bin/env -S elixir

Mix.install([:bandit, :plug])

defmodule FibServer do
  use Plug.Router

  plug :match
  plug :dispatch

  get "/" do
    fibonacci = fn n ->
      Stream.unfold({0, 1}, fn {a, b} -> {a, {b, a + b}} end)
      |> Enum.take(n + 1)
    end

    body =
      fibonacci.(32)
      |> Enum.map(fn num -> "<li>#{num}</li><br/>" end)
      |> Enum.join()

    conn
    |> put_resp_content_type("text/html")
    |> send_resp(200, "<ul>#{body}</ul>")
  end
end

{:ok, _} = Bandit.start_link(plug: FibServer, port: 3000)

IO.puts("Listening on http://localhost:3000/ (Ctrl-C to stop)")
Process.sleep(:infinity)
