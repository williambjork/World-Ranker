import { useEffect, useState } from "react";

async function useFetch(url)  {

    const response = await fetch(url);
      const data = await response.json();

    return { data }
}

export default useFetch;