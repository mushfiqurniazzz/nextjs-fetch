export async function GET(req) {
  try {
    const fetchResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users",
      {
        method: "GET",
      }
    );

    if (!fetchResponse.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await fetchResponse.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
}
